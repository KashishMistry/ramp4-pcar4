import { an as ai, a3 as zt, ao as ye, ap as a, r, Z as Ze, aq as ve } from './Theme-906aaf57.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function l(e,t,o,a){e.set(t,o.get(a)),o.on(a,(o=>{e.set(t,o);}));}class s extends ai{setupDefaultRules(){super.setupDefaultRules();const e=this._root.language,s=this._root.interfaceColors,d=this._root.horizontalLayout,c=this._root.verticalLayout,u=this.rule.bind(this);u("InterfaceColors").setAll({stroke:zt.fromHex(15066597),fill:zt.fromHex(15987699),primaryButton:zt.fromHex(6788316),primaryButtonHover:zt.fromHex(6779356),primaryButtonDown:zt.fromHex(6872182),primaryButtonActive:zt.fromHex(6872182),primaryButtonText:zt.fromHex(16777215),primaryButtonStroke:zt.fromHex(16777215),secondaryButton:zt.fromHex(14277081),secondaryButtonHover:zt.fromHex(10724259),secondaryButtonDown:zt.fromHex(9276813),secondaryButtonActive:zt.fromHex(15132390),secondaryButtonText:zt.fromHex(0),secondaryButtonStroke:zt.fromHex(16777215),grid:zt.fromHex(0),background:zt.fromHex(16777215),alternativeBackground:zt.fromHex(0),text:zt.fromHex(0),alternativeText:zt.fromHex(16777215),disabled:zt.fromHex(11382189),positive:zt.fromHex(5288704),negative:zt.fromHex(11730944)});{const e=u("ColorSet");e.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[zt.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),e.setPrivate("currentStep",0),e.setPrivate("currentPass",0);}u("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:ye(ve)}),u("Component").setAll({interpolationDuration:0,interpolationEasing:ye(ve)}),u("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:a,tooltipY:a,tooltipPosition:"fixed",isMeasured:!0}),u("Sprite").states.create("default",{visible:!0,opacity:1}),u("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),u("Graphics").setAll({strokeWidth:1}),u("Chart").setAll({width:r,height:r,interactiveChildren:!1}),u("ZoomableContainer").setAll({width:r,height:r,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:ye(ve),animationDuration:600}),u("Sprite",["horizontal","center"]).setAll({centerX:a,x:a}),u("Sprite",["vertical","center"]).setAll({centerY:a,y:a}),u("Container",["horizontal","layout"]).setAll({layout:d}),u("Container",["vertical","layout"]).setAll({layout:c}),u("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),u("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),u("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),u("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),u("GrainPattern").setAll({width:200,height:200,colors:[zt.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2}),u("LinearGradient").setAll({rotation:90}),u("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:Ze.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),u("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:d,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:e.translate("Press ENTER to toggle"),role:"checkbox"});{const e=u("Rectangle",["legend","item","background"]);e.setAll({fillOpacity:0}),l(e,"fill",s,"background");}u("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:a,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),u("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:r,height:r,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const e=u("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});l(e,"fill",s,"disabled"),l(e,"stroke",s,"disabled");}u("Label",["legend","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0});l(u("Label",["legend","label"]).states.create("disabled",{}),"fill",s,"disabled");u("Label",["legend","value","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:r,populateText:!0});l(u("Label",["legend","value","label"]).states.create("disabled",{}),"fill",s,"disabled");u("HeatLegend").setAll({stepCount:1}),u("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),u("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:r,width:15}),u("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:r,height:15}),u("HeatLegend",["vertical"]).setAll({height:r}),u("HeatLegend",["horizontal"]).setAll({width:r}),u("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),u("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const e=u("Label");e.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),l(e,"fill",s,"text");}u("RadialLabel").setAll({textType:"regular",centerY:a,centerX:a,inside:!1,radius:0,baseRadius:r,orientation:"auto",textAlign:"center"}),u("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),u("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),u("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const e=u("Tick");e.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),l(e,"stroke",s,"grid");}u("Bullet").setAll({locationX:.5,locationY:.5}),u("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:a,centerY:a,animationEasing:ye(ve),exportable:!1}),u("Polygon").setAll({animationEasing:ye(ve)});u("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:zt.fromHex(16777215)});{const e=u("Label",["tooltip"]);e.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),l(e,"fill",s,"alternativeText");}u("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:d,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),u("Button").states.create("hover",{}),u("Button").states.create("down",{stateAnimationDuration:0}),u("Button").states.create("active",{});{const e=u("RoundedRectangle",["button","background"]);l(e,"fill",s,"primaryButton"),l(e,"stroke",s,"primaryButtonStroke");}l(u("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",s,"primaryButtonHover");l(u("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",s,"primaryButtonDown");l(u("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",s,"primaryButtonActive");l(u("Graphics",["button","icon"]),"stroke",s,"primaryButtonText");l(u("Label",["button"]),"fill",s,"primaryButtonText");u("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:r,role:"button",ariaLabel:e.translate("Zoom Out"),layer:30});{const e=u("RoundedRectangle",["background","button","zoom"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),l(e,"fill",s,"primaryButton");}l(u("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",s,"primaryButtonHover");l(u("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",s,"primaryButtonDown");{const e=u("Graphics",["icon","button","zoom"]);e.setAll({crisp:!0,strokeOpacity:.7,draw:e=>{e.moveTo(0,0),e.lineTo(12,0);}}),l(e,"stroke",s,"primaryButtonText");}u("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:a,centerY:a,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:e.translate("Use up and down arrows to move selection")});{const e=u("RoundedRectangle",["background","resize","button"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),l(e,"fill",s,"secondaryButton"),l(e,"stroke",s,"secondaryButtonStroke");}l(u("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",s,"secondaryButtonHover");l(u("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",s,"secondaryButtonDown");{const e=u("Graphics",["resize","button","icon"]);e.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:e=>{e.moveTo(0,.5),e.lineTo(0,12.5),e.moveTo(4,.5),e.lineTo(4,12.5);}}),l(e,"stroke",s,"secondaryButtonText");}u("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),u("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),u("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:e.translate("Play"),toggleKey:"active"});{const e=u("RoundedRectangle",["play","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),l(e,"fill",s,"primaryButton");}{const e=u("Graphics",["play","icon"]);e.setAll({stateAnimationDuration:0,dx:1,draw:e=>{e.moveTo(0,-5),e.lineTo(8,0),e.lineTo(0,5),e.lineTo(0,-5);}}),l(e,"fill",s,"primaryButtonText");}u("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),u("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:e=>{e.moveTo(-4,-5),e.lineTo(-1,-5),e.lineTo(-1,5),e.lineTo(-4,5),e.lineTo(-4,-5),e.moveTo(4,-5),e.lineTo(1,-5),e.lineTo(1,5),e.lineTo(4,5),e.lineTo(4,-5);}}),u("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:e.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const e=u("RoundedRectangle",["switch","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),l(e,"fill",s,"primaryButton");}{const e=u("Circle",["switch","icon"]);e.setAll({radius:8,centerY:0,centerX:0,dx:0}),l(e,"fill",s,"primaryButtonText");}u("Graphics",["switch","icon"]).states.create("active",{dx:16}),u("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:ye(ve)}),u("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:r}),u("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:r}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const e=u("RoundedRectangle",["scrollbar","main","background"]);e.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),l(e,"fill",s,"fill");}{const e=u("RoundedRectangle",["scrollbar","thumb"]);e.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),l(e,"fill",s,"secondaryButton");}l(u("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",s,"secondaryButtonHover");l(u("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",s,"secondaryButtonDown");u("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:a,width:r,centerX:a,ariaLabel:e.translate("Use up and down arrows to move selection")}),u("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:a,centerY:a,height:r,ariaLabel:e.translate("Use left and right arrows to move selection")});{const e=u("PointedRectangle",["axis","tooltip","background"]);e.setAll({cornerRadius:0}),l(e,"fill",s,"alternativeBackground");}u("Label",["axis","tooltip"]).setAll({role:void 0}),u("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),u("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),u("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),u("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),u("Star").setAll({spikes:5,innerRadius:5,radius:10}),u("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),u("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),u("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),u("SpriteResizer").setAll({rotationStep:10});u("Container",["resizer","grip"]).states.create("hover",{});{const e=u("RoundedRectangle",["resizer","grip"]);e.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),l(e,"fill",s,"background"),l(e,"stroke",s,"alternativeBackground");}{const e=u("RoundedRectangle",["resizer","grip","outline"]);e.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),e.states.create("hover",{fillOpacity:.3}),l(e,"fill",s,"alternativeBackground");}u("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),u("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const e=u("Rectangle",["resizer","rectangle"]);e.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),l(e,"stroke",s,"alternativeBackground");}u("Graphics",["button","plus","icon"]).setAll({x:a,y:a,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0),e.moveTo(0,-4),e.lineTo(0,4);}}),u("Graphics",["button","minus","icon"]).setAll({x:a,y:a,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0);}}),u("Graphics",["button","home","icon"]).setAll({x:a,y:a,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),u("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),u("ZoomTools").setAll({x:r,centerX:r,y:r,centerY:r,paddingRight:10,paddingBottom:10});}}

export { l, s };
