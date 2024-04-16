import { N as t, U as U$1, eM as n$1, M, br as m$1, D as x$1, bq as j, bs as u, eN as y$3, Q as Q$1, fo as r$2, bZ as W$1 } from './main-942c0e56.js';
import { T as Me, a as ae, X, t as te, k as ee, d as de, b as a, r, U, Q, Z as Ze, B, v as Y, ad as we, ae as Oe, af as Re, h as he, S as Se, ag as y$1, ah as m$2, E as E$1, ai as y$2, N, q as Be, aj as x$2, ak as Z, x as t$1, al as c$1, am as r$3 } from './arcadeUtils-3707c25c.js';
import { c, r as r$1, b as a$1 } from './TimeOnly-9d19be08.js';
import { l } from './portalUtils-97bae3a0.js';
import { disjoint as A, intersects as h, touches as S, crosses as m, within as x, contains as p, overlaps as O, equals as g, relate as R, intersect as D, union as b, difference as E, symmetricDifference as k, clip as y, cut as w, planarArea as W, geodesicArea as K, planarLength as F, geodesicLength as M$1, distance as d, densify as C, geodesicDensify as U$2, generalize as B$1, buffer as L, geodesicBuffer as P, offset as v, rotate as H, simplify as N$1, isSimple as J, convexHull as j$1, nearestCoordinate as T, nearestVertex as V } from './geometryEngineAsync-c979265b.js';
import './preload-helper-a4975f27.js';
import './ImmutableArray-da974cd4.js';
import './number-d33e611b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function n(n,t$1,s){const u=t?.findCredential(n.restUrl);if(!u)return null;if("loaded"===n.loadStatus&&""===t$1&&n.user?.sourceJSON&&!1===s)return n.user.sourceJSON;const o={responseType:"json",query:{f:"json"}};if(s&&(o.query.returnUserLicenseTypeExtensions=!0),""===t$1){const e=await U$1(n.restUrl+"/community/self",o);if(e.data){const r=e.data;if(r?.username)return r}return null}const i=await U$1(n.restUrl+"/community/users/"+t$1,o);if(i.data){const e=i.data;return e.error?null:e}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function Fn(t){return 0===r$2.indexOf("4.")?j.fromExtent(t):new j({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function Rn(n,t,e){if(ae(n,2,2,t,e),n[0]instanceof n$1&&n[1]instanceof n$1);else if(n[0]instanceof n$1&&null===n[1]);else if(n[1]instanceof n$1&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new a(t,r.InvalidParameter,e)}async function jn(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){e=c$1(n.spatialReference)/W$1(n.spatialReference);}let r=0;if("polyline"===n.type)for(const a of n.paths)for(let n=1;n<a.length;n++)r+=r$3(a[n],a[n-1],e);else if("polygon"===n.type)for(const a of n.rings){for(let n=1;n<a.length;n++)r+=r$3(a[n],a[n-1],e);(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])&&(r+=r$3(a[0],a[a.length-1],e));}else "extent"===n.type&&(r+=2*r$3([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*r$3([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs(Y(n.zmax,0)*e-Y(n.zmin,0)*e));const i=new m$1({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return F(i,t)}function xn(n$2){"async"===n$2.mode&&(n$2.functions.disjoint=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null===i[0]||null===i[1]||A(i[0],i[1]))))},n$2.functions.intersects=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&h(i[0],i[1]))))},n$2.functions.touches=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&S(i[0],i[1]))))},n$2.functions.crosses=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&m(i[0],i[1]))))},n$2.functions.within=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&x(i[0],i[1]))))},n$2.functions.contains=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&p(i[0],i[1]))))},n$2.functions.overlaps=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null!==i[1]&&O(i[0],i[1]))))},n$2.functions.equals=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(ae(i,2,2,t,e),i[0]===i[1]||(i[0]instanceof n$1&&i[1]instanceof n$1?g(i[0],i[1]):(X(i[0])&&X(i[1])||!!(te(i[0])&&te(i[1])||ee(i[0])&&ee(i[1])))&&i[0].equals(i[1])))))},n$2.functions.relate=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{if(o=Me(o),ae(o,3,3,t,e),o[0]instanceof n$1&&o[1]instanceof n$1)return R(o[0],o[1],de(o[2]));if(o[0]instanceof n$1&&null===o[1])return !1;if(o[1]instanceof n$1&&null===o[0])return !1;if(null===o[0]&&null===o[1])return !1;throw new a(t,r.InvalidParameter,e)}))},n$2.functions.intersection=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null===i[0]||null===i[1]?null:D(i[0],i[1]))))},n$2.functions.union=function(t,e){return n$2.standardFunctionAsync(t,e,((n,o,l)=>{const u=[];if(0===(l=Me(l)).length)throw new a(t,r.WrongNumberOfParameters,e);if(1===l.length)if(U(l[0])){const n=Me(l[0]);for(let a$1=0;a$1<n.length;a$1++)if(null!==n[a$1]){if(!(n[a$1]instanceof n$1))throw new a(t,r.InvalidParameter,e);u.push(n[a$1]);}}else {if(!Q(l[0])){if(l[0]instanceof n$1)return Ze(c(l[0]),t.spatialReference);if(null===l[0])return null;throw new a(t,r.InvalidParameter,e)}{const n=Me(l[0].toArray());for(let a$1=0;a$1<n.length;a$1++)if(null!==n[a$1]){if(!(n[a$1]instanceof n$1))throw new a(t,r.InvalidParameter,e);u.push(n[a$1]);}}}else for(let a$1=0;a$1<l.length;a$1++)if(null!==l[a$1]){if(!(l[a$1]instanceof n$1))throw new a(t,r.InvalidParameter,e);u.push(l[a$1]);}return 0===u.length?null:b(u)}))},n$2.functions.difference=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null!==i[0]&&null===i[1]?c(i[0]):null===i[0]?null:E(i[0],i[1]))))},n$2.functions.symmetricdifference=function(t,e){return n$2.standardFunctionAsync(t,e,((n,r,i)=>(Rn(i=Me(i),t,e),null===i[0]&&null===i[1]?null:null===i[0]?c(i[1]):null===i[1]?c(i[0]):k(i[0],i[1]))))},n$2.functions.clip=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{if(o=Me(o),ae(o,2,2,t,e),!(o[1]instanceof M)&&null!==o[1])throw new a(t,r.InvalidParameter,e);if(null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return null===o[1]?null:y(o[0],o[1])}))},n$2.functions.cut=function(t,e){return n$2.standardFunctionAsync(t,e,((n,o,l)=>{if(l=Me(l),ae(l,2,2,t,e),!(l[1]instanceof m$1)&&null!==l[1])throw new a(t,r.InvalidParameter,e);if(null===l[0])return [];if(!(l[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return null===l[1]?[c(l[0])]:w(l[0],l[1])}))},n$2.functions.area=function(t,e){return n$2.standardFunctionAsync(t,e,(async(n,a$1,l)=>{if(ae(l,1,2,t,e),null===(l=Me(l))[0])return 0;if(B(l[0])){const n=await l[0].sumArea(r$1(Y(l[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,r.Cancelled,e);return n}if(U(l[0])||Q(l[0])){const n=we(l[0],t.spatialReference);return null===n?0:W(n,r$1(Y(l[1],-1)))}if(!(l[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return W(l[0],r$1(Y(l[1],-1)))}))},n$2.functions.areageodetic=function(t,e){return n$2.standardFunctionAsync(t,e,(async(n,a$1,l)=>{if(ae(l,1,2,t,e),null===(l=Me(l))[0])return 0;if(B(l[0])){const n=await l[0].sumArea(r$1(Y(l[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,r.Cancelled,e);return n}if(U(l[0])||Q(l[0])){const n=we(l[0],t.spatialReference);return null===n?0:K(n,r$1(Y(l[1],-1)))}if(!(l[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return K(l[0],r$1(Y(l[1],-1)))}))},n$2.functions.length=function(t,e){return n$2.standardFunctionAsync(t,e,(async(n,a$2,o)=>{if(ae(o,1,2,t,e),null===(o=Me(o))[0])return 0;if(B(o[0])){const n=await o[0].sumLength(a$1(Y(o[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,r.Cancelled,e);return n}if(U(o[0])||Q(o[0])){const n=Oe(o[0],t.spatialReference);return null===n?0:F(n,a$1(Y(o[1],-1)))}if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return F(o[0],a$1(Y(o[1],-1)))}))},n$2.functions.length3d=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{if(ae(o,1,2,t,e),null===(o=Me(o))[0])return 0;if(U(o[0])||Q(o[0])){const n=Oe(o[0],t.spatialReference);return null===n?0:!0===n.hasZ?jn(n,a$1(Y(o[1],-1))):F(n,a$1(Y(o[1],-1)))}if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return !0===o[0].hasZ?jn(o[0],a$1(Y(o[1],-1))):F(o[0],a$1(Y(o[1],-1)))}))},n$2.functions.lengthgeodetic=function(t,e){return n$2.standardFunctionAsync(t,e,(async(n,a$2,o)=>{if(ae(o,1,2,t,e),null===(o=Me(o))[0])return 0;if(B(o[0])){const n=await o[0].sumLength(a$1(Y(o[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,r.Cancelled,e);return n}if(U(o[0])||Q(o[0])){const n=Oe(o[0],t.spatialReference);return null===n?0:M$1(n,a$1(Y(o[1],-1)))}if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return M$1(o[0],a$1(Y(o[1],-1)))}))},n$2.functions.distance=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{o=Me(o),ae(o,2,3,t,e);let c=o[0];(U(o[0])||Q(o[0]))&&(c=Re(o[0],t.spatialReference));let f=o[1];if((U(o[1])||Q(o[1]))&&(f=Re(o[1],t.spatialReference)),!(c instanceof n$1))throw new a(t,r.InvalidParameter,e);if(!(f instanceof n$1))throw new a(t,r.InvalidParameter,e);return d(c,f,a$1(Y(o[2],-1)))}))},n$2.functions.distancegeodetic=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{o=Me(o),ae(o,2,3,t,e);const c=o[0],f=o[1];if(!(c instanceof x$1))throw new a(t,r.InvalidParameter,e);if(!(f instanceof x$1))throw new a(t,r.InvalidParameter,e);const d=new m$1({paths:[],spatialReference:c.spatialReference});return d.addPath([c,f]),M$1(d,a$1(Y(o[2],-1)))}))},n$2.functions.densify=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{if(o=Me(o),ae(o,2,3,t,e),null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);const c=he(o[1]);if(isNaN(c))throw new a(t,r.InvalidParameter,e);if(c<=0)throw new a(t,r.InvalidParameter,e);return o[0]instanceof j||o[0]instanceof m$1?C(o[0],c,a$1(Y(o[2],-1))):o[0]instanceof M?C(Fn(o[0]),c,a$1(Y(o[2],-1))):o[0]}))},n$2.functions.densifygeodetic=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{if(o=Me(o),ae(o,2,3,t,e),null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);const c=he(o[1]);if(isNaN(c))throw new a(t,r.InvalidParameter,e);if(c<=0)throw new a(t,r.InvalidParameter,e);return o[0]instanceof j||o[0]instanceof m$1?U$2(o[0],c,a$1(Y(o[2],-1))):o[0]instanceof M?U$2(Fn(o[0]),c,a$1(Y(o[2],-1))):o[0]}))},n$2.functions.generalize=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{if(o=Me(o),ae(o,2,4,t,e),null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);const c=he(o[1]);if(isNaN(c))throw new a(t,r.InvalidParameter,e);return B$1(o[0],c,Se(Y(o[2],!0)),a$1(Y(o[3],-1)))}))},n$2.functions.buffer=function(t,e){return n$2.standardFunctionAsync(t,e,((n,o,c$1)=>{if(c$1=Me(c$1),ae(c$1,2,3,t,e),null===c$1[0])return null;if(!(c$1[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);const f=he(c$1[1]);if(isNaN(f))throw new a(t,r.InvalidParameter,e);return 0===f?c(c$1[0]):L(c$1[0],f,a$1(Y(c$1[2],-1)))}))},n$2.functions.buffergeodetic=function(t,e){return n$2.standardFunctionAsync(t,e,((n,o,c$1)=>{if(c$1=Me(c$1),ae(c$1,2,3,t,e),null===c$1[0])return null;if(!(c$1[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);const f=he(c$1[1]);if(isNaN(f))throw new a(t,r.InvalidParameter,e);return 0===f?c(c$1[0]):P(c$1[0],f,a$1(Y(c$1[2],-1)))}))},n$2.functions.offset=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$2,o)=>{if(o=Me(o),ae(o,2,6,t,e),null===o[0])return null;if(!(o[0]instanceof j||o[0]instanceof m$1))throw new a(t,r.InvalidParameter,e);const c=he(o[1]);if(isNaN(c))throw new a(t,r.InvalidParameter,e);const f=he(Y(o[4],10));if(isNaN(f))throw new a(t,r.InvalidParameter,e);const d=he(Y(o[5],0));if(isNaN(d))throw new a(t,r.InvalidParameter,e);return v(o[0],c,a$1(Y(o[2],-1)),de(Y(o[3],"round")).toLowerCase(),f,d)}))},n$2.functions.rotate=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{o=Me(o),ae(o,2,3,t,e);let l=o[0];if(null===l)return null;if(!(l instanceof n$1))throw new a(t,r.InvalidParameter,e);l instanceof M&&(l=j.fromExtent(l));const c=he(o[1]);if(isNaN(c))throw new a(t,r.InvalidParameter,e);const f=Y(o[2],null);if(null===f)return H(l,c);if(f instanceof x$1)return H(l,c,f);throw new a(t,r.InvalidParameter,e)}))},n$2.functions.centroid=function(t,e){return n$2.standardFunctionAsync(t,e,((n,o,l)=>{if(l=Me(l),ae(l,1,1,t,e),null===l[0])return null;let c$1=l[0];if((U(l[0])||Q(l[0]))&&(c$1=Re(l[0],t.spatialReference)),null===c$1)return null;if(!(c$1 instanceof n$1))throw new a(t,r.InvalidParameter,e);return c$1 instanceof x$1?Ze(c(l[0]),t.spatialReference):c$1 instanceof j?c$1.centroid:c$1 instanceof m$1?y$1(c$1):c$1 instanceof u?m$2(c$1):c$1 instanceof M?c$1.center:null}))},n$2.functions.measuretocoordinate=function(t,a$1){return n$2.standardFunctionAsync(t,a$1,((n,o,l)=>{if(l=Me(l),ae(l,2,2,t,a$1),null===l[0])return null;let c=l[0];if((U(l[0])||Q(l[0]))&&(c=Oe(l[0],t.spatialReference)),null===c)return null;if(!(c instanceof n$1))throw new a(t,r.InvalidParameter,a$1);if(!(c instanceof m$1))throw new a(t,r.InvalidParameter,a$1);if(E$1(!1===l[1]))throw new a(t,r.InvalidParameter,a$1);const f=y$2(c,l[1]);return f?N.convertObjectToArcadeDictionary(f,Be(t),!1,!0):null}))},n$2.functions.pointtocoordinate=function(t,a$1){return n$2.standardFunctionAsync(t,a$1,((n,o,l)=>{if(l=Me(l),ae(l,2,2,t,a$1),null===l[0])return null;let c=l[0];if((U(l[0])||Q(l[0]))&&(c=Oe(l[0],t.spatialReference)),null===c)return null;if(!(c instanceof n$1))throw new a(t,r.InvalidParameter,a$1);if(!(c instanceof m$1))throw new a(t,r.InvalidParameter,a$1);const f=l[1];if(null===f)return null;if(!(f instanceof x$1))throw new a(t,r.InvalidParameter,a$1);if(E$1(!1===l[1]))throw new a(t,r.InvalidParameter,a$1);const d=x$2(c,f);return d?N.convertObjectToArcadeDictionary(d,Be(t),!1,!0):null}))},n$2.functions.distancetocoordinate=function(t,a$1){return n$2.standardFunctionAsync(t,a$1,((n,o,l)=>{if(l=Me(l),ae(l,2,2,t,a$1),null===l[0])return null;let c=l[0];if((U(l[0])||Q(l[0]))&&(c=Oe(l[0],t.spatialReference)),null===c)return null;if(!(c instanceof n$1))throw new a(t,r.InvalidParameter,a$1);if(!(c instanceof m$1))throw new a(t,r.InvalidParameter,a$1);if(E$1(!1===l[1]))throw new a(t,r.InvalidParameter,a$1);const f=Z(c,l[1]);return f?N.convertObjectToArcadeDictionary(f,Be(t),!1,!0):null}))},n$2.functions.multiparttosinglepart=function(t,e){return n$2.standardFunctionAsync(t,e,(async(n,o,l)=>{l=Me(l),ae(l,1,1,t,e);const c$1=[];if(null===l[0])return null;if(!(l[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);if(l[0]instanceof x$1)return [Ze(c(l[0]),t.spatialReference)];if(l[0]instanceof M)return [Ze(c(l[0]),t.spatialReference)];const f=await N$1(l[0]);if(f instanceof j){const n=[],t=[];for(let e=0;e<f.rings.length;e++)if(f.isClockwise(f.rings[e])){const t=y$3({rings:[f.rings[e]],hasZ:!0===f.hasZ,hazM:!0===f.hasM,spatialReference:f.spatialReference.toJSON()});n.push(t);}else t.push({ring:f.rings[e],pt:f.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(f instanceof m$1){const n=[];for(let t=0;t<f.paths.length;t++){const e=y$3({paths:[f.paths[t]],hasZ:!0===f.hasZ,hazM:!0===f.hasM,spatialReference:f.spatialReference.toJSON()});n.push(e);}return n}if(l[0]instanceof u){const n=Ze(c(l[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)c$1.push(n.getPoint(t));return c$1}return null}))},n$2.functions.issimple=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{if(o=Me(o),ae(o,1,1,t,e),null===o[0])return !0;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return J(o[0])}))},n$2.functions.simplify=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{if(o=Me(o),ae(o,1,1,t,e),null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return N$1(o[0])}))},n$2.functions.convexhull=function(t,e){return n$2.standardFunctionAsync(t,e,((n,a$1,o)=>{if(o=Me(o),ae(o,1,1,t,e),null===o[0])return null;if(!(o[0]instanceof n$1))throw new a(t,r.InvalidParameter,e);return j$1(o[0])}))},n$2.functions.getuser=function(a$1,o){return n$2.standardFunctionAsync(a$1,o,(async(n$1,l$1,s)=>{ae(s,0,2,a$1,o);let c=Y(s[1],""),f=!0===c;if(c=!0===c||!1===c?"":de(c),0===s.length||s[0]instanceof t$1){let n$1=null;n$1=a$1.services?.portal?a$1.services.portal:Q$1.getDefault(),s.length>0&&(n$1=l(s[0],n$1));const t=await n(n$1,c,f);if(t){const n=JSON.parse(JSON.stringify(t));for(const t of ["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return N.convertObjectToArcadeDictionary(n,Be(a$1))}return null}let d=null;if(B(s[0])&&(d=s[0]),d){if(f=!1,c)return null;await d.load();const n$1=await d.getOwningSystemUrl();if(!n$1){if(!c){const n=await d.getIdentityUser();return n?N.convertObjectToArcadeDictionary({username:n},Be(a$1)):null}return null}let r=null;r=a$1.services?.portal?a$1.services.portal:Q$1.getDefault(),r=l(new t$1(n$1),r);const i=await n(r,c,f);if(i){const n=JSON.parse(JSON.stringify(i));for(const t of ["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return N.convertObjectToArcadeDictionary(n,Be(a$1))}return null}throw new a(a$1,r.InvalidParameter,o)}))}),n$2.functions.nearestcoordinate=function(t,a$1){return n$2.standardFunctionAsync(t,a$1,(async(n,o,l)=>{if(l=Me(l),ae(l,2,2,t,a$1),!(l[0]instanceof n$1||null===l[0]))throw new a(t,r.InvalidParameter,a$1);if(!(l[1]instanceof x$1||null===l[1]))throw new a(t,r.InvalidParameter,a$1);if(null===l[0]||null===l[1])return null;const c=await T(l[0],l[1]);return null===c?null:N.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},Be(t),!1,!0)}))},n$2.functions.nearestvertex=function(t,a$1){return n$2.standardFunctionAsync(t,a$1,(async(n,o,l)=>{if(l=Me(l),ae(l,2,2,t,a$1),!(l[0]instanceof n$1||null===l[0]))throw new a(t,r.InvalidParameter,a$1);if(!(l[1]instanceof x$1||null===l[1]))throw new a(t,r.InvalidParameter,a$1);if(null===l[0]||null===l[1])return null;const c=await V(l[0],l[1]);return null===c?null:N.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},Be(t),!1,!0)}))};}

export { xn as registerFunctions };
