import Vue from 'vue';
import { APIScope, InstanceAPI } from './internal';
import { DetailsAPI } from '@/fixtures/details/api/details';
import { SettingsAPI} from '@/fixtures/settings/api/settings'
import { IdentifyResult, IdentifyResultSet, MapClick } from 'ramp-geoapi';

export enum GlobalEvents {
    /**
     * Fires when a Vue component is registered with `rInstance.component(...)`.
     * Payload: `(id: string)`
     */
    COMPONENT = 'r4/component', // TODO for compatibility with future versions of ramp, maybe use ramp/ instead of r4/ ?

    /**
     * Fires when the map is created
     * Payload: (map)
     */
    MAP_CREATED = 'map/created',

    // TODO docs, determine the payloads
    MAP_CLICK = 'map/click', // payload is interface MapClick from geoapi
    MAP_DOUBLECLICK = 'map/doubleclick', // payload is interface MapClick from geoapi
    MAP_EXTENTCHANGE = 'map/extentchanged', // payload is rampapi Extent
    MAP_IDENTIFY = 'map/identify',
    MAP_MOUSEMOVE = 'map/mousemove',
}

// TODO export this enum?
//      would an outsider know enough to find the enum and use it, or would they just refer to the doc pages?
//      if it becomes public, use a better name, like DefaultEventHandlerNames ; I'm using short cuz its all internal
// Default Event Handler Names
// IMPORTANT: if changing the enum values, be sure to update the documentation to reflect it.
//            after v1.0.0 release, best to never edit them unless no other alternative,
//            as it will be a breaking change to API usage.
enum DefEH {
    IDENTIFY_DETAILS = 'ramp_identify_opens_details',
    MAP_IDENTIFY = 'ramp_map_click_runs_identify',
    OPEN_SETTINGS = 'ramp_settings_opens_panel'
}

// private for EventBus internals, so don't export
// a simple data structure for managing the Event API on fixtures.
// TODO if we end up supporting toggle/disabled events, add an active boolean flag to the structure
class EventHandler {
    eventName: string;
    handlerName: string;
    handlerFunc: Function;

    constructor (eName: string, hName: string, handler: Function) {
        this.eventName = eName;
        this.handlerName = hName;
        this.handlerFunc = handler;
    }
}

export class EventAPI extends APIScope {

    /**
     * A vue instance that provides an event bus for all events.
     *
     * @private
     * @type {Vue}
     * @memberof EventAPI
     */
    private readonly _eventBus: Vue;

    // tracks active event handlers: event name, handler name, and the actual handler function
    private readonly _eventRegister: Array<EventHandler>;

    // a helpful register of event names that have been announced by the app and fixtures.
    // TODO this is not essential. we can decide to remove the feature. would also remove .registerEventName and .eventNames
    private readonly _nameRegister: Array<string>;

    // for autonamer
    private _funCounter: number;

    constructor(iApi: InstanceAPI) {
        super(iApi);
        this._eventBus = new Vue();
        this._eventRegister = [];
        this._funCounter = 1;

        // add the public enum items here, as they will always exist.
        // getting enum values is a mess. this code does it but assumes
        // all event names in global events use the slash format
        this._nameRegister = Object.values(GlobalEvents)
            .filter(e => (typeof e === 'string') && (e.indexOf('/') > -1));
    }

    /**
     * Locates a registered handler by name, or undefined if not found
     *
     * @param {string} handlerName the name of the event handler
     * @returns {EventHandler | undefined} handler information or undefined
     * @memberof EventAPI
     * @private
     */
    private findHandler(handlerName: string): EventHandler | undefined {
        return this._eventRegister.find(eh => eh.handlerName === handlerName);
    }

    /**
     * Generates an event handler name. Used when caller doesnt provide one.
     *
     * @param {string} eventName the name of the event the handler is handling
     * @returns {String} a handler name
     * @memberof EventAPI
     * @private
     */
    private handlerNamer(eventName: string): string {
        this._funCounter++;
        return eventName.replace(/\//g, '_') + this._funCounter.toString();
    }

    /**
     * Adds event names to the names registry of the event bus.
     *
     * @param {string | Array} names event names or names to register
     * @memberof EventAPI
     */
    registerEventName(names: string | Array<string>): void {
        const arrr = Array.isArray(names) ? names : [names];
        arrr.forEach(n => {
            // don't add if name is already registered
            if (this._nameRegister.indexOf(n) === -1) {
                this._nameRegister.push(n);
            }
        })
    }

    /**
     * A list of event names that have been registered with the bus.
     *
     * @returns {Array} list of event names
     * @memberof EventAPI
     */
    eventNames(): Array<string> {
        return this._nameRegister.slice();
    }

    // TODO provide a method to unregister an event name? would that ever really need to happen?

    /**
     * Adds an event handler to an event.
     *
     * @param {string} event name of the event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventAPI
     */
    on(event: string, callback: Function, handlerName: string = ''): string {
        // check if name already registered
        if (this.findHandler(handlerName)) {
            // TODO decide if we are replacing, erroring, do nothing + console warn?
            throw new Error('Duplicate handler name registration: ' + handlerName);
        }

        if (!handlerName) {
            handlerName = this.handlerNamer(event);
        }

        // track the event, register with main event bus
        const eh = new EventHandler(event, handlerName, callback);
        this._eventRegister.push(eh);
        this._eventBus.$on(event, callback);

        return handlerName;
    }

    /**
     * Removes an event handler from an event.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof EventAPI
     */
    off(handlerName: string): void {
        // TODO support other overloads? like event name + handler function?
        // TODO handle the "off all" scenario?
        // TODO support "turn off all handlers for an event?".
        //      This is a bit tricky as it also uses a 1 string param sig.
        //      Could use a diff method, like .allOff(event)

        // check if name exists. if not... do nothing? console warn? error?
        const eh = this.findHandler(handlerName);

        if (eh) {
            // remove from event bus and the registry
            this._eventRegister.splice(this._eventRegister.indexOf(eh), 1);
            this._eventBus.$off(eh.eventName, eh.handlerFunc);
        }

        // TODO case where no handler was found. do nothing? console warn? error?
        //      for now just exit. the goal was achived (non-existing handler will no longer react)
    }

    /**
     * Triggers an event.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof EventAPI
     */
    emit(event: string, ...args: any[]): void {
        // TODO any checking that event exists? or we just agree it is global bus fun
        this._eventBus.$emit(event, ...args);
    }

    /**
     * Adds an event handler to an event that will be respected once. After the handler
     * reacts to the event, it will be removed.
     *
     * @param {string} event name of the event to react to once
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventAPI
     */
    once(event: string, callback: Function, handlerName: string = ''): string {

        // need to do this here and upfront, so we have the name for the unregistration.
        // otherwise we would let the .on() call do its naming thing
        if (!handlerName) {
            handlerName = this.handlerNamer(event);
        }

        const secretCallback = (...args: any[]) => {
            // run the original function. unregister our one-time handler
            callback(...args);
            this.off(handlerName);
        };

        return this.on(event, secretCallback, handlerName);
    }

    /**
     * Returns any active event handlers, filtered to an event name if desired.
     *
     * @param {string} [event] name of the event. Omission will return all active handlers
     * @returns {Array} list of handler names
     * @memberof EventAPI
     */
    activeHandlers(event: string = ''): Array<string> {
        // TODO add a filter if we implement disabled events

        if (event === '') {
            return this._eventRegister.map(eh => eh.handlerName);
        }
        return this._eventRegister.filter(eh => eh.eventName === event).map(eh => eh.handlerName);
    }

    /**
     * Loads the set of standard, built-in event handlers to the R4MP Vue instance.
     * This will quickly set up the vanilla version of RAMP.
     * Note this function is automatically run by the instance startup unless the loadDefaultEvents option is
     * set to false. The function is exposed to allow custom pages the ability to call it at a different point
     * in the startup. Also, a subset of standard event handlers can be provided on the optional parameter if one
     * wishes to omit some of the standard handlers.
     *
     * @param {Array<string>} [eventHandlerNames] list of built-in event handler names to add. omission means all built-in event handlers will be added
     * @returns {Array<string>} resolves with array of event handler names
     * @memberof EventAPI
     */
    addDefaultEvents(eventHandlerNames?: Array<string>): Array<string> {
        if (!Array.isArray(eventHandlerNames) || eventHandlerNames.length === 0) {
            // use all the default event handlers
            // TODO the enum-values-to-array logic we use in the event names list
            //      fails a bit here. we could make it work if we force every default
            //      handler name to being with a specific prefix. Alternately use object, not enum.
            eventHandlerNames = [DefEH.MAP_IDENTIFY, DefEH.IDENTIFY_DETAILS, DefEH.OPEN_SETTINGS];
        }

        // add all the requested default event handlers.
        return eventHandlerNames.map(hn => this.defaultHandlerFactory(hn));
    }

    /**
     * Will apply the implementation of default events handlers
     *
     * @param {string} handlerName the name of the default event handler to create
     * @returns {String} name of the event handler
     * @memberof EventAPI
     * @private
     */
    private defaultHandlerFactory(handlerName: string): string {
        let zeHandler: Function;

        switch (handlerName) {

            case DefEH.MAP_IDENTIFY:
                // when map clicks, run the identify action
                zeHandler = (clickParam: MapClick) => {
                    if (clickParam.button === 0) {
                        this.$iApi.mapActions.identify(clickParam);
                    }
                };
                this.on(GlobalEvents.MAP_CLICK, zeHandler, handlerName);
                break;

            case DefEH.IDENTIFY_DETAILS:
                // when identify runs, open details fixture and show the results
                zeHandler = (identifyParam: any) => {
                    const detailFix: DetailsAPI = this.$iApi.fixture.get('details');
                    if (detailFix) {
                        detailFix.openDetails(identifyParam.results)
                    }
                };
                this.on(GlobalEvents.MAP_IDENTIFY, zeHandler, handlerName);
                break;

            case DefEH.OPEN_SETTINGS:
                zeHandler = (payload: any) => {
                    const settingsFixture: SettingsAPI = this.$iApi.fixture.get('settings');
                    if(settingsFixture) {
                        settingsFixture.open(payload);
                    }
                };

                // Create a new event: opens the settings panel and hooks it up to the requested layer.
                this.$iApi.event.on('settings/open', zeHandler, handlerName);
                break;

            default:
                console.error(`Unrecognized default event handler name encountered: ${handlerName}`);
                return `ERROR_NOT_REGISTERED__${handlerName}`;
        }

        return handlerName;

    }

}
