/**
* @name @mu-ui/mu-popup
* @license MIT
* @version 0.1.4
* @description: popup vue component for vue 2.x
* @copyright (c) 2018-2019
* @author JR93 <gjr_china@163.com>
*/
"use strict";var script={props:{show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:function(t){return~["top","bottom","left","right","center"].indexOf(t)}},transition:{type:String,default:"fade",validator:function(t){return""!==t}},modal:{type:Boolean,default:!0},clickable:{type:Boolean,default:!0},opacity:{type:Number,default:.5,validator:function(t){return t>=0&&t<=1}},duration:{type:Number,default:.5,validator:function(t){return t>=0}}},data:function(){return{showPop:!1}},computed:{transitionType:function(){return~["fade","slide"].indexOf(this.transition)?"center"===this.position?"fade":"slide":this.transition}},watch:{show:function(t){this.showPop=t,this.modal&&this.toggleModal(t)}},created:function(){this.createModal()},methods:{createModal:function(){var t=this;if(this.modal){var e=document.querySelectorAll(".mu-popup-modal").length,n=document.createElement("div");n.className="mu-popup-modal mu-popup-modal-".concat(e),n.style.backgroundColor="rgba(0, 0, 0, ".concat(this.opacity,")"),n.style.transitionDuration="".concat(this.duration,"s"),document.body.appendChild(n),this.clickable&&n.addEventListener("click",function(){t.$emit("update:show",!1)}),n.addEventListener("transitionend",function(){return!t.showPop&&t.hideModal()}),this.modalEl=n}this.show&&Vue.nextTick(function(){t.showPop=!0,t.modal&&t.toggleModal(!0)})},toggleModal:function(t){var e=this;t?(this.modalEl.style.display="block",setTimeout(function(){return e.modalEl.style.opacity="1"},10)):(this.modalEl.style.opacity="0",0===this.duration&&this.hideModal())},hideModal:function(){this.modalEl.style.display="none"}}};function normalizeComponent(t,e,n,o,r,a,i,s,p,l){"function"==typeof i&&(p=s,s=i,i=!1);var d,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,p(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=d):e&&(d=i?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(u.functional){var m=u.render;u.render=function(t,e){return d.call(e),m(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,d):[d]}return n}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(t){return function(t,e){return addStyle(t,e)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(t,e){var n=isOldIE?e.media||"default":t,o=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);var r=e.source;if(e.map&&(r+="\n/*# sourceURL="+e.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),HEAD.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,i=document.createTextNode(r),s=o.element.childNodes;s[a]&&o.element.removeChild(s[a]),s.length?o.element.insertBefore(i,s[a]):o.element.appendChild(i)}}}var __vue_script__=script,__vue_render__=function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:this.transitionType}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showPop,expression:"showPop"}],staticClass:"mu-popup",class:"mu-popup-"+this.position,style:{"transition-duration":this.duration+"s"}},[this._t("default")],2)])},__vue_staticRenderFns__=[],__vue_inject_styles__=function(t){t&&t("data-v-82acde04_0",{source:"\n.mu-popup{z-index:3001;position:fixed\n}\n.mu-popup-center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(1);transform:translate3d(-50%,-50%,0) scale(1)\n}\n.mu-popup-center.fade-enter,.mu-popup-center.fade-leave-active{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.5);transform:translate3d(-50%,-50%,0) scale(.5)\n}\n.mu-popup-center.fade-enter-active,.mu-popup-center.fade-leave-active{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform\n}\n.mu-popup-top{top:0;left:0;right:0;-webkit-transform:translate(0);transform:translate(0)\n}\n.mu-popup-top.slide-enter,.mu-popup-top.slide-leave-active{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.mu-popup-top.slide-enter-active,.mu-popup-top.slide-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform\n}\n.mu-popup-bottom{bottom:0;left:0;right:0;-webkit-transform:translate(0);transform:translate(0)\n}\n.mu-popup-bottom.slide-enter,.mu-popup-bottom.slide-leave-active{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.mu-popup-bottom.slide-enter-active,.mu-popup-bottom.slide-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform\n}\n.mu-popup-left{top:0;left:0;bottom:0;-webkit-transform:translate(0);transform:translate(0)\n}\n.mu-popup-left.slide-enter,.mu-popup-left.slide-leave-active{-webkit-transform:translate(-100%);transform:translate(-100%)\n}\n.mu-popup-left.slide-enter-active,.mu-popup-left.slide-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform\n}\n.mu-popup-right{top:0;bottom:0;right:0;-webkit-transform:translate(0);transform:translate(0)\n}\n.mu-popup-right.slide-enter,.mu-popup-right.slide-leave-active{-webkit-transform:translate(100%);transform:translate(100%)\n}\n.mu-popup-right.slide-enter-active,.mu-popup-right.slide-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform\n}\n.mu-popup-modal{display:none;z-index:3000;position:fixed;top:0;left:0;bottom:0;right:0;opacity:0;transition-property:opacity\n}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,popup=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0);module.exports=popup;
