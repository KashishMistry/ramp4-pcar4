import { C as c, aa as V, q, aD as e, bP as d$1, bR as P$1, bK as v, bH as e$1, bJ as c$1 } from './main-942c0e56.js';
import { t as t$1 } from './highlightReasons-482b7bbc.js';
import { m as m$1, u as u$1 } from './LayerView-c87a95af.js';
import { t } from './GraphicContainer-74f0f80d.js';
import { $ } from './GraphicsView2D-df2cd05d.js';
import './preload-helper-a4975f27.js';
import './Container-8ec61cda.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-578a145e.js';
import './AGraphicContainer-a8d335cf.js';
import './TechniqueInstance-1e65b808.js';
import './UpdateTracking2D-6bfc9e2a.js';
import './TurboLine-ab2bfe10.js';
import './enums-d24bcbbf.js';
import './earcut-c6d86c51.js';
import './GeometryUtils-85d98fcc.js';
import './Rect-09e0f861.js';
import './LabelMetric-927da501.js';
import './Program-2ba0b457.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-9196ba3e.js';
import './WGLContainer-85a2cbb0.js';
import './ProgramTemplate-d043e7b4.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-bbdc102f.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-dca62018.js';
import './TimeOnly-9d19be08.js';
import './timeSupport-d1681188.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-321a3fe7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u="sublayers",f="layerView";let m=class extends(m$1(u$1)){constructor(){super(...arguments),this._highlightIds=new Map;}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys();}async hitTest(i,e){return Array.from(this.graphicsViews(),(e=>{const s=e.hitTest(i);if(null!=this._graphicsViewsFeatureCollectionMap){const i=this._graphicsViewsFeatureCollectionMap.get(e);for(const e of s)!e.popupTemplate&&i.popupTemplate&&(e.popupTemplate=i.popupTemplate),e.sourceLayer=e.layer=this.layer;}return s})).flat().map((e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i})))}highlight(i){let h;"number"==typeof i?h=[i]:i instanceof c?h=[i.uid]:Array.isArray(i)&&i.length>0?h="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&(h=i.map((i=>i&&i.uid)).toArray());const a=h?.filter(q);return a?.length?(this._addHighlight(a),e((()=>this._removeHighlight(a)))):e()}update(i){for(const e of this.graphicsViews())e.processUpdate(i);}attach(){const i=this.view,e=()=>this.requestUpdate(),s=this.layer.featureCollections;if(null!=s&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t$1 of s){const s=new t(this.view.featuresTilingScheme),r=new $({view:i,graphics:t$1.source,renderer:t$1.renderer,requestUpdateCallback:e,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t$1),this.container.addChild(r.container),this.addHandles([d$1((()=>t$1.visible),(i=>r.container.visible=i),P$1),d$1((()=>r.updating),(()=>this.notifyChange("updating")),P$1)],f);}this._updateHighlight();}else null!=this.layer.sublayers&&this.addHandles(v((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u);}detach(){this._destroyGraphicsViews(),this.removeHandles(u);}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange();}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(f);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const i=[],e=this.view,s=()=>this.requestUpdate();for(const t$1 of this.layer.sublayers){const r=new t(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new $({view:e,graphics:t$1.graphics,requestUpdateCallback:s,container:r});this.addHandles([t$1.on("graphic-update",a.graphicUpdateHandler),d$1((()=>t$1.visible),(i=>a.container.visible=i),P$1),d$1((()=>a.updating),(()=>this.notifyChange("updating")),P$1)],f),this.container.addChild(a.container),i.push(a);}this._graphicsViews=i,this._updateHighlight();}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),e=t$1("highlight");for(const s of this.graphicsViews())s.setHighlight(i.map((i=>({objectId:i,highlightFlags:e}))));}};m=e$1([c$1("esri.views.2d.layers.MapNotesLayerView2D")],m);const w=m;

export { w as default };
