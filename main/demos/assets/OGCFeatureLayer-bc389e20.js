import { bH as e, bI as y, bJ as c, eY as m, A as d, B as f$1, gq as i, s, eB as i$1, eA as e$1, f$ as c$1, g0 as p, dY as n, f_ as c$2, g1 as f, e0 as t, d_ as u$1, d$ as j, dZ as f$2, e1 as m$1, g2 as p$1, g3 as p$2, f8 as b, fY as g, eI as f$3, dJ as y$1, M, dK as o, g6 as C$1, g7 as i$2, g5 as m$2, e4 as c$3, g9 as y$2, bS as P$1, ga as m$3, gb as u, gc as p$3, gr as n$1, e5 as d$1, ge as s$1, eb as b$1 } from './main-942c0e56.js';
import { R, x, C, P, O, N, q, v, k } from './ogcFeatureUtils-cb16102b.js';
import './preload-helper-a4975f27.js';
import './geojson-50e98bb7.js';
import './date-305484fc.js';
import './clientSideDefaults-16758c0d.js';
import './QueryEngineCapabilities-5bb5f351.js';
import './sourceUtils-6a1a92bc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends m{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(t){return this.addResolvingPromise(this._loadOGCServices(this.layer,t)),this.when()}getSource(){const{featureDefinition:{collection:t,layerDefinition:e,spatialReference:s,supportedCrs:r},layer:{apiKey:o,customParameters:p,effectiveMaxRecordCount:i}}=this;return {type:"ogc-source",collection:t,layerDefinition:e,maxRecordCount:i,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(t,e={}){return null}queryFeatureCount(t,e={}){return null}queryFeatures(t,e={}){return this.queryFeaturesJSON(t,e).then((t=>d.fromJSON(t)))}queryFeaturesJSON(t,e={}){const s=this.getSource();return this.load(e).then((()=>R(s,t,e)))}queryObjectIds(t,e={}){return null}serviceSupportsSpatialReference(t){return !(!t.isWGS84&&!t.isWebMercator)||!!this.featureDefinition.supportedCrs[t.wkid]}_conformsToType(t,e){const s=new RegExp(`^${e}$`,"i");return t.conformsTo.some((t=>s.test(t)))??!1}_getCapabilities(t,e){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:e,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(t){const e=t?.components?.parameters;return e?.limit?.schema?.maximum??e?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(t){const e=t.storageCrs??x,s=C(e);return null==s?f$1.WGS84:new f$1({wkid:s})}_getSupportedSpatialReferences(t,e){const s="#/crs",r=t.crs??[x],o=r.includes(s)?r.filter((t=>t!==s)).concat(e.crs??[]):r,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((t=>!p.test(t)))}async _loadOGCServices(t,s$1){const r=null!=s$1?s$1.signal:null,{apiKey:o,collectionId:p,customParameters:i$1,fields:y,geometryType:f,hasZ:h,objectIdField:S,timeInfo:C$1,url:R}=t,w={fields:y?.map((t=>t.toJSON())),geometryType:i.toJSON(f),hasZ:h??!1,objectIdField:S,timeInfo:C$1?.toJSON()},x={apiKey:o,customParameters:i$1,signal:r},j=await P(R,x),[v$1,F]=await Promise.all([O(j,x),N(j,x)]);if(!this._conformsToType(v$1,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const O$1=F.collections.find((({id:t})=>t===p));if(!O$1)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const D=this._conformsToType(v$1,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await q(j,x):null,T=await v(O$1,w,x),A=this._getMaxRecordCount(D),_=this._getCapabilities(T.hasZ,A),P$1=this._getStorageSpatialReference(O$1).toJSON(),b=this._getSupportedSpatialReferences(O$1,F),q$1=new RegExp(`^${k}`,"i"),E={};for(const e of b){const t=C(e);null!=t&&(E[t]||(E[t]=e.replace(q$1,"")));}this.featureDefinition={capabilities:_,collection:O$1,layerDefinition:T,spatialReference:P$1,supportedCrs:E};}};e([y()],h.prototype,"featureDefinition",void 0),e([y({constructOnly:!0})],h.prototype,"layer",void 0),e([y()],h.prototype,"type",void 0),h=e([c("esri.layers.graphics.sources.OGCFeatureSource")],h);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const U=s$1();let B=class extends(i$1(e$1(c$1(p(n(c$2(f(t(u$1(j(f$2(m$1(b$1))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){p$1(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return p$2(this,e)}createQuery(){return new b}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){let t,i=!1;const o=r?.feature?.attributes,s=this.typeIdField&&o?.[this.typeIdField];return null!=s&&this.types&&(i=this.types.some((r=>r.id==s&&(t=r.domains?.[e],"inherited"===t?.type&&(t=this._getLayerDomain(e)),!0)))),i||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery(),r))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this;})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),p$1(this.renderer,this.fieldsIndex),g(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};e([y({readOnly:!0,json:{origins:{service:{read:!0}}}})],B.prototype,"capabilities",void 0),e([y({type:String,json:{write:!0}})],B.prototype,"collectionId",void 0),e([y({type:String})],B.prototype,"copyright",void 0),e([y({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([y({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],B.prototype,"description",void 0),e([y({type:String})],B.prototype,"displayField",void 0),e([y({type:Number})],B.prototype,"effectiveMaxRecordCount",null),e([y(f$3)],B.prototype,"elevationInfo",void 0),e([y({type:[y$1],json:{origins:{service:{name:"layerDefinition.fields"}}}})],B.prototype,"fields",void 0),e([y(U.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([y({readOnly:!0,type:M,json:{origins:{service:{name:"layerDefinition.extent"}}}})],B.prototype,"fullExtent",void 0),e([y({type:o.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:o.read}}}}})],B.prototype,"geometryType",void 0),e([y({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],B.prototype,"hasZ",void 0),e([y({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([y({type:[C$1],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$2},write:!0}}}})],B.prototype,"labelingInfo",void 0),e([y(m$2)],B.prototype,"labelsVisible",void 0),e([y(c$3)],B.prototype,"legendEnabled",void 0),e([y({type:Number})],B.prototype,"maxRecordCount",void 0),e([y({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([y({type:["OGCFeatureLayer"]})],B.prototype,"operationalLayerType",void 0),e([y(y$2)],B.prototype,"popupEnabled",void 0),e([y({type:P$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([y({types:m$3,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:u,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],B.prototype,"renderer",null),e([y(p$3)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],B.prototype,"source",void 0),e([y({readOnly:!0,type:f$1,json:{origins:{service:{read:!0}}}})],B.prototype,"spatialReference",void 0),e([y({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],B.prototype,"title",void 0),e([y({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),e([y({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([y({type:[n$1]})],B.prototype,"types",void 0),e([y(d$1)],B.prototype,"url",void 0),B=e([c("esri.layers.OGCFeatureLayer")],B);const V=B;

export { V as default };
