import { bH as e, bI as y, bJ as c, cI as f, cJ as v } from './main-942c0e56.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p;let i=p=class extends f{static from(r){return v(p,r)}constructor(r){super(r),this.sessionId=void 0,this.moment=null;}};e([y({type:String,json:{write:!0}})],i.prototype,"sessionId",void 0),e([y({type:Date,json:{type:Number,write:{writer:(r,o)=>{o.moment=r?r.getTime():null;}}}})],i.prototype,"moment",void 0),i=p=e([c("esri.rest.versionManagement.gdbVersion.support.PostParameters")],i);const m=i;

export { m as default };
