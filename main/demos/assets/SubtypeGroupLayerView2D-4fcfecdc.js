import { bH as e, bJ as c, bP as d$1, bR as P$1, a0 as has } from './main-942c0e56.js';
import { X } from './FeatureLayerView2D-78ab2724.js';
import './preload-helper-a4975f27.js';
import './Container-8ec61cda.js';
import './highlightReasons-482b7bbc.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-578a145e.js';
import './LayerView-c87a95af.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-94eb81a0.js';
import './floatRGBA-d4a980b2.js';
import './FeatureCommandQueue-bbdc102f.js';
import './HighlightCounter-66f2f1e4.js';
import './popupUtils-746f6b51.js';
import './RefreshableLayerView-6906670a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
