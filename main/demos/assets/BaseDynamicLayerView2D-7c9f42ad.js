import { al as b$1, G as s$1, bH as e, bI as y, bJ as c } from './main-942c0e56.js';
import { a } from './BitmapContainer-f908a4f1.js';
import { m as m$1, u } from './LayerView-c87a95af.js';
import { v } from './ExportStrategy-21e5ae37.js';
import { i } from './RefreshableLayerView-6906670a.js';
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
import './Bitmap-1333ee8d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
