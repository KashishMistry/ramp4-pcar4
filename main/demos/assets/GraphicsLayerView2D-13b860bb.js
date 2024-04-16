import { bV as u$1, C as c, aa as V, q, aD as e, bH as e$1, bI as y, bJ as c$1 } from './main-942c0e56.js';
import { t as t$2 } from './highlightReasons-482b7bbc.js';
import { m as m$1, u as u$2 } from './LayerView-c87a95af.js';
import { t as t$1 } from './GraphicContainer-74f0f80d.js';
import { $ } from './GraphicsView2D-df2cd05d.js';
import { t } from './HighlightCounter-66f2f1e4.js';
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
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
