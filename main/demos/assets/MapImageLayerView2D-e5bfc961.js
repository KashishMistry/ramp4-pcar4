import { bH as e, bI as y$1, fr as j, bJ as c, fs as m, bC as c$1, al as b$1, G as s$1, bP as d$1 } from './main-942c0e56.js';
import { a } from './BitmapContainer-f908a4f1.js';
import { m as m$1, u } from './LayerView-c87a95af.js';
import { $ } from './GraphicsView2D-df2cd05d.js';
import { h } from './HighlightGraphicContainer-b2c5417a.js';
import { v } from './ExportStrategy-21e5ae37.js';
import { i } from './RefreshableLayerView-6906670a.js';
import { U, r } from './drapedUtils-6da6192d.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-85a2cbb0.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-927da501.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-578a145e.js';
import './Program-2ba0b457.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-d043e7b4.js';
import './Container-8ec61cda.js';
import './highlightReasons-482b7bbc.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-c6d86c51.js';
import './UpdateTracking2D-6bfc9e2a.js';
import './TurboLine-ab2bfe10.js';
import './GeometryUtils-85d98fcc.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './AttributeStore-dca62018.js';
import './TimeOnly-9d19be08.js';
import './timeSupport-d1681188.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-bbdc102f.js';
import './normalizeUtilsSync-321a3fe7.js';
import './AGraphicContainer-a8d335cf.js';
import './TechniqueInstance-1e65b808.js';
import './TileContainer-9196ba3e.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-1333ee8d.js';
import './popupUtils-746f6b51.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
