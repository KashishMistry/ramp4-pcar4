import { eS as n } from './main-942c0e56.js';
import { R, D, U as U$1, V as V$1, k } from './Tick-eca6df22.js';
import { s as si, al as ri, b as Ke, ap as a, ah as ge, ad as e, as as me, ar as pt, at as se$1, au as Le, ak as Ft, w, av as pe, aw as ue, ax as ne, ae as ce, i as ii, ay as Ue, r, C as g, an as ai, a as i } from './Theme-906aaf57.js';
import { s } from './ColorSet-dc5c340a.js';
import { l } from './DefaultTheme-c720de6a.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class N extends si{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)});}_afterNew(){super._afterNew();}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*ne,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds());}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:si.classNames.concat([N.className])});class C extends ri{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1});}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew();}_makeText(){this._text=this.children.push(N.new(this._root,{}));}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+pt(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=ce(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a$1=ue(s),r=pe(s);let l=this.baseRadius(),n=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this._text.set("orientation",i),this._text.set("radius",n);else {0==l&&(s=0,n=0);let t=n*r,o=n*a$1;"radial"==e?(this.setRaw("x",t),this.setRaw("y",o),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",a),this.setRaw("centerY",a),this.setRaw("x",t),this.setRaw("y",o)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",o));}this.markDirtyPosition(),this.markDirtyBounds();}}_updatePosition(){const e$1=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),r=this.localBounds(),l=r.right-r.left,n=r.bottom-r.top;if("radial"==e$1){if(this._flipped){let e$1=this.get("centerX");e$1 instanceof e&&(l*=1-2*e$1.value),i=l*pe(a),s=l*ue(a);}}else t||"adjusted"!=e$1||(i=l/2*pe(a),s=n/2*ue(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition();}get text(){return this._text}}Object.defineProperty(C,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(C,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ri.classNames.concat([C.className])});const j=Math.abs,S=Math.atan2,O=Math.cos,I=Math.max,M=Math.min,B=Math.sin,F=Math.sqrt,H=1e-12,X=Math.PI,Y=X/2,V=2*X;function z(e){return e>1?0:e<-1?X:Math.acos(e)}function W(e){return e>=1?Y:e<=-1?-Y:Math.asin(e)}function U(e){return e.innerRadius}function q(e){return e.outerRadius}function K(e){return e.startAngle}function E(e){return e.endAngle}function G(e){return e&&e.padAngle}function J(e,t,i,s,a,r,l,n){var o=i-e,h=s-t,c=l-a,u=n-r,d=u*o-c*h;if(!(d*d<H))return [e+(d=(c*(t-r)-u*(e-a))/d)*o,t+d*h]}function Q(e,t,i,s,a,r,l){var n=e-i,o=t-s,h=(l?r:-r)/F(n*n+o*o),c=h*o,u=-h*n,d=e+c,g=t+u,p=i+c,y=s+u,b=(d+p)/2,m=(g+y)/2,f=p-d,_=y-g,x=f*f+_*_,v=a-r,w=d*y-p*g,k=(_<0?-1:1)*F(I(0,v*v*x-w*w)),D=(w*_-f*k)/x,A=(-w*f-_*k)/x,R=(w*_+f*k)/x,P=(-w*f+_*k)/x,T=D-b,L=A-m,N=R-b,C=P-m;return T*T+L*L>N*N+C*C&&(D=R,A=P),{cx:D,cy:A,x01:-c,y01:-u,x11:D*(a/v-1),y11:A*(a/v-1)}}function Z(){var e=U,s=q,a=k(0),r=null,l=K,n=E,o=G,h=null,c=V$1(u);function u(){var t,i,u=+e.apply(this,arguments),d=+s.apply(this,arguments),g=l.apply(this,arguments)-Y,p=n.apply(this,arguments)-Y,y=j(p-g),b=p>g;if(h||(h=t=c()),d<u&&(i=d,d=u,u=i),d>H)if(y>V-H)h.moveTo(d*O(g),d*B(g)),h.arc(0,0,d,g,p,!b),u>H&&(h.moveTo(u*O(p),u*B(p)),h.arc(0,0,u,p,g,b));else {var m,f,_=g,x=p,v=g,w=p,k=y,D=y,A=o.apply(this,arguments)/2,R=A>H&&(r?+r.apply(this,arguments):F(u*u+d*d)),P=M(j(d-u)/2,+a.apply(this,arguments)),T=P,L=P;if(R>H){var N=W(R/u*B(A)),C=W(R/d*B(A));(k-=2*N)>H?(v+=N*=b?1:-1,w-=N):(k=0,v=w=(g+p)/2),(D-=2*C)>H?(_+=C*=b?1:-1,x-=C):(D=0,_=x=(g+p)/2);}var I=d*O(_),U=d*B(_),q=u*O(w),K=u*B(w);if(P>H){var E,G=d*O(x),Z=d*B(x),$=u*O(v),ee=u*B(v);if(y<X)if(E=J(I,U,$,ee,G,Z,q,K)){var te=I-E[0],ie=U-E[1],se=G-E[0],ae=Z-E[1],re=1/B(z((te*se+ie*ae)/(F(te*te+ie*ie)*F(se*se+ae*ae)))/2),le=F(E[0]*E[0]+E[1]*E[1]);T=M(P,(u-le)/(re-1)),L=M(P,(d-le)/(re+1));}else T=L=0;}D>H?L>H?(m=Q($,ee,I,U,d,L,b),f=Q(G,Z,q,K,d,L,b),h.moveTo(m.cx+m.x01,m.cy+m.y01),L<P?h.arc(m.cx,m.cy,L,S(m.y01,m.x01),S(f.y01,f.x01),!b):(h.arc(m.cx,m.cy,L,S(m.y01,m.x01),S(m.y11,m.x11),!b),h.arc(0,0,d,S(m.cy+m.y11,m.cx+m.x11),S(f.cy+f.y11,f.cx+f.x11),!b),h.arc(f.cx,f.cy,L,S(f.y11,f.x11),S(f.y01,f.x01),!b))):(h.moveTo(I,U),h.arc(0,0,d,_,x,!b)):h.moveTo(I,U),u>H&&k>H?T>H?(m=Q(q,K,G,Z,u,-T,b),f=Q(I,U,$,ee,u,-T,b),h.lineTo(m.cx+m.x01,m.cy+m.y01),T<P?h.arc(m.cx,m.cy,T,S(m.y01,m.x01),S(f.y01,f.x01),!b):(h.arc(m.cx,m.cy,T,S(m.y01,m.x01),S(m.y11,m.x11),!b),h.arc(0,0,u,S(m.cy+m.y11,m.cx+m.x11),S(f.cy+f.y11,f.cx+f.x11),b),h.arc(f.cx,f.cy,T,S(f.y11,f.x11),S(f.y01,f.x01),!b))):h.arc(0,0,u,w,v,b):h.lineTo(q,K);}else h.moveTo(0,0);if(h.closePath(),t)return h=null,t+""||null}return u.centroid=function(){var t=(+e.apply(this,arguments)+ +s.apply(this,arguments))/2,i=(+l.apply(this,arguments)+ +n.apply(this,arguments))/2-X/2;return [O(i)*t,B(i)*t]},u.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:k(+t),u):e},u.outerRadius=function(e){return arguments.length?(s="function"==typeof e?e:k(+e),u):s},u.cornerRadius=function(e){return arguments.length?(a="function"==typeof e?e:k(+e),u):a},u.padRadius=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:k(+e),u):r},u.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:k(+e),u):l},u.endAngle=function(e){return arguments.length?(n="function"==typeof e?e:k(+e),u):n},u.padAngle=function(e){return arguments.length?(o="function"==typeof e?e:k(+e),u):o},u.context=function(e){return arguments.length?(h=e??null,u):h},u}class $ extends Ke{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:Z()});}_getTooltipPoint(){let e$1=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;g(e$1)&&(i=e$1),g(t)&&(s=t);let a=this.get("radius",0),r=this.get("innerRadius",0);return a+=this.get("dRadius",0),r+=this.get("dInnerRadius",0),r<0&&(r=a+r),e$1 instanceof e&&(i=this.ix*(r+(a-r)*e$1.value)),t instanceof e&&(s=this.iy*(r+(a-r)*t.value)),this.get("arc")>=360&&0==r&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0);}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*ne,endAngle:(e+t+90)*ne});let r=e+t/2;this.ix=pe(r),this.iy=ue(r);const l=this.get("shiftRadius",0);this.setRaw("dx",this.ix*l),this.setRaw("dy",this.iy*l),this.markDirtyPosition();}}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Ke.classNames.concat([$.className])});class ee extends ai{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:s.new(this._root,{}),width:r,height:r}),t("PieChart").setAll({radius:i(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:a,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:a,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:a,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:a,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:a,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:a,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),l(i,"fill",e,"alternativeBackground");}}}class te extends R{_afterNew(){this._defaultThemes.push(ee.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer);}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1);}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:R.classNames.concat([te.className])});class ie extends D{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ii.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ii.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ii.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()});}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e);})),t.on("stroke",(()=>{this.updateLegendMarker(e);})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew();}_onDataClear(){const e=this.get("colors");e&&e.reset();}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;w(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s);})),w(this._dataItems,(e=>{let r=e.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),a++;let l=r/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l);})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t);}}show(t){const i=Object.create(null,{show:{get:()=>super.show}});return n(this,void 0,void 0,(function*(){let e=[];e.push(i.show.call(this,t)),e.push(this._sequencedShowHide(!0,t)),yield Promise.all(e);}))}hide(t){const i=Object.create(null,{hide:{get:()=>super.hide}});return n(this,void 0,void 0,(function*(){let e=[];e.push(i.hide.call(this,t)),e.push(this._sequencedShowHide(!1,t)),yield Promise.all(e);}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&w(this._dataItems,(e=>{e.get("label").text.markDirtyText();})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&w(this._dataItems,(e=>{this.updateLegendValue(e);})),this._arrange();}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),w(this.dataItems,(e=>{this._updateTick(e);}));}_afterChanged(){super._afterChanged(),this._arrange();}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next());}}showDataItem(t,i){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return n(this,void 0,void 0,(function*(){const e=[s.showDataItem.call(this,t,i)];g(i)||(i=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let r=t.get("value");const l=t.animate({key:"valueWorking",to:r,duration:i,easing:a});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.show(i));const o=t.get("label");o&&e.push(o.show(i));const h=t.get("slice");h&&e.push(h.show(i)),h.get("active")&&h.states.applyAnimate("active"),yield Promise.all(e);}))}hideDataItem(t,i){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return n(this,void 0,void 0,(function*(){const e=[s.hideDataItem.call(this,t,i)],a=this.states.create("hidden",{});g(i)||(i=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const r=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),l=t.animate({key:"valueWorking",to:0,duration:i,easing:r});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.hide(i));const o=t.get("label");o&&e.push(o.hide(i));const h=t.get("slice");h.hideTooltip(),h&&e.push(h.hide(i)),yield Promise.all(e);}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose());}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover();}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover();}updateLegendMarker(e){if(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");w(Ue,(i=>{null!=t.get(i)&&e.set(i,t.get(i));}));}}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),w(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom;}));}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),w(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top;}));}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),w(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right;}));}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),w(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left;}));}}_updateSize(){super._updateSize(),this.markDirty();}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this);}}Object.defineProperty(ie,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(ie,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:D.classNames.concat([ie.className])});class se extends te{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1});}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:a,y:a});}_prepareChildren(){super._prepareChildren();const e$1=this.chartContainer,t=e$1.innerWidth(),i=e$1.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),r=this.get("innerRadius");let l=ge(0,0,s,a,1);const n=t/(l.right-l.left),o=i/(l.bottom-l.top);let c={left:0,right:0,top:0,bottom:0};if(r instanceof e){let e=r.value,l=Math.min(n,o);e=Math.max(l*e,l-Math.min(i,t))/l,c=ge(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/r.value);}l=me([l,c]);const u=this._maxRadius;this._maxRadius=Math.min(n,o);const d=pt(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-d*(l.bottom+l.top)/2,dx:-d*(l.right+l.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||u!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle");})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius");}));}radius(e){let t=pt(this.get("radius",0),this._maxRadius),i=pt(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("radius");return null!=r?i+pt(r,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=pt(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("innerRadius");return null!=r?i+pt(r,t-i):i+(t-i)/a*s}return i}}Object.defineProperty(se,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(se,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:te.classNames.concat([se.className])});class ae extends ie{_makeSlices(){return new se$1(Le.new({}),(()=>$._new(this._root,{themeTags:Ft(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new se$1(Le.new({}),(()=>C._new(this._root,{themeTags:Ft(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new se$1(Le.new({}),(()=>U$1._new(this._root,{themeTags:Ft(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e);})),t.on("shiftRadius",(()=>{this._updateTick(e);})),t.events.on("positionchanged",(()=>{this._updateTick(e);}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e);})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty();}));}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else {let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted");}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let r$1=e.innerRadius(this)*e.getPrivate("irModifyer",1);r$1<0&&(r$1=a+r$1),w(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const l=e.get("slice");if(l){l.set("radius",a),l.set("innerRadius",r$1),l.set("startAngle",s),l.set("arc",t);const i=e.get("fill");l._setDefault("fill",i),l._setDefault("stroke",i);}let n=ce(s+t/2);const o=e.get("label");if(o&&(o.setPrivate("radius",a),o.setPrivate("innerRadius",r$1),o.set("labelAngle",n),"aligned"==o.get("textType"))){let e=a+o.get("radius",0),t=a*ue(n);n>90&&n<=270?(o.isHidden()||o.isHiding()||this._lLabels.push({label:o,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),o.set("centerX",r),o.setPrivateRaw("left",!0)):(o.isHidden()||o.isHiding()||this._rLabels.push({label:o,y:t}),e+=this.labelsContainer.get("paddingRight",0),o.set("centerX",0),o.setPrivateRaw("left",!1)),o.set("x",e),o.set("y",a*ue(n));}s+=t,this._updateTick(e);}));}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,r=i.get("labelAngle",0),l=pe(r),n=ue(r),o=this.labelsContainer,h=o.get("paddingLeft",0),c=o.get("paddingRight",0);let g=0,p=0;g=i.x(),p=i.y();let y=[];if(0!=g&&0!=p){if("circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);g=e*pe(t),p=e*ue(t);}let t=-c;i.getPrivate("left")&&(t=h),y=[{x:s.x()+e*l,y:s.y()+e*n},{x:g+t,y:p},{x:g,y:p}];}t.set("points",y);}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),r=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),l=s+(a-s)*e.get("locationY",.5);t.setAll({x:pe(r)*l,y:ue(r)*l});}}}}Object.defineProperty(ae,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(ae,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ie.classNames.concat([ae.className])});

export { se as PieChartAm5, ae as PieSeriesAm5 };
