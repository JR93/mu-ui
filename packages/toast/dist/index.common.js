/**
* @name @mu-ui/mu-toast
* @license MIT
* @version 0.1.10
* @description: toast vue plugin for vue 2.x
* @copyright (c) 2018-2019
* @author JR93 <gjr_china@163.com>
*/
"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var Vue=_interopDefault(require("vue"));function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"===_typeof$$1(Symbol.iterator)?function(t){return _typeof$$1(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof$$1(t)})(t)}function _typeof$$1(t){return(_typeof$$1="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}var script={props:{message:{type:String,required:!0},position:{type:String,default:"bottom"},duration:{type:Number,default:3e3},customClass:{type:String,default:""},color:{type:String,default:""},bgColor:{type:String,default:""}},data:function(){return{show:!1}},computed:{isNotDefault:function(){return~["top","middle"].indexOf(this.position)},posClass:function(){return this.isNotDefault?"pos-".concat(this.position):"pos-bottom"},type:function(){return this.isNotDefault?"bounce-".concat(this.position):"bounce-bottom"},customStyle:function(){var t={};return""!==this.color&&(t.color=this.color),""!==this.bgColor&&(t.backgroundColor=this.bgColor),t}},mounted:function(){this.show=!0},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},methods:{afterEnter:function(){var t=this;this.timer=setTimeout(function(){t.show=!1},this.duration)},afterLeave:function(){var t=this.$el.parentNode;t&&t.removeChild(this.$el),this.$destroy()}}};function normalizeComponent(t,n,e,a,r,s,o,i,l,m){"function"==typeof o&&(l=i,i=o,o=!1);var c,f="function"==typeof e?e.options:e;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),a&&(f._scopeId=a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=c):n&&(c=o?function(){n.call(this,m(this.$root.$options.shadowRoot))}:function(t){n.call(this,i(t))}),c)if(f.functional){var p=f.render;f.render=function(t,n){return c.call(n),p(t,n)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,c):[c]}return e}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(t){return function(t,n){return addStyle(t,n)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(t,n){var e=isOldIE?n.media||"default":t,a=styles[e]||(styles[e]={ids:new Set,styles:[]});if(!a.ids.has(t)){a.ids.add(t);var r=n.source;if(n.map&&(r+="\n/*# sourceURL="+n.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",n.media&&a.element.setAttribute("media",n.media),HEAD.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(r),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{var s=a.ids.size-1,o=document.createTextNode(r),i=a.element.childNodes;i[s]&&a.element.removeChild(i[s]),i.length?a.element.insertBefore(o,i[s]):a.element.appendChild(o)}}}var __vue_script__=script,__vue_render__=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:t.type,type:"animation"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mu-toast",class:[t.posClass]},[e("p",{staticClass:"mu-toast-text",class:t.customClass,style:t.customStyle},[t._v("\n      "+t._s(t.message)+"\n    ")])])])},__vue_staticRenderFns__=[],__vue_inject_styles__=function(t){t&&t("data-v-2af93430_0",{source:"\n@-webkit-keyframes bounceIn{\n0%,35%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(.3);transform:translate(-50%,-50%) scale(.3)\n}\n75%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.15);transform:translate(-50%,-50%) scale(1.15)\n}\nto{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)\n}\n}\n@keyframes bounceIn{\n0%,35%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(.3);transform:translate(-50%,-50%) scale(.3)\n}\n75%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.15);transform:translate(-50%,-50%) scale(1.15)\n}\nto{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)\n}\n}\n@-webkit-keyframes bounceOut{\n0%,35%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)\n}\n60%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.15);transform:translate(-50%,-50%) scale(1.15)\n}\nto{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)\n}\n}\n@keyframes bounceOut{\n0%,35%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)\n}\n60%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.15);transform:translate(-50%,-50%) scale(1.15)\n}\nto{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)\n}\n}\n@-webkit-keyframes bounceInUp{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate(-50%) translate3d(0,1000px,0);transform:translate(-50%) translate3d(0,1000px,0)\n}\n60%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,-20px,0);transform:translate(-50%) translate3d(0,-20px,0)\n}\n75%{-webkit-transform:translate(-50%) translate3d(0,10px,0);transform:translate(-50%) translate3d(0,10px,0)\n}\n90%{-webkit-transform:translate(-50%) translate3d(0,-5px,0);transform:translate(-50%) translate3d(0,-5px,0)\n}\nto{-webkit-transform:translate(-50%) translateZ(0);transform:translate(-50%) translateZ(0)\n}\n}\n@keyframes bounceInUp{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate(-50%) translate3d(0,1000px,0);transform:translate(-50%) translate3d(0,1000px,0)\n}\n60%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,-20px,0);transform:translate(-50%) translate3d(0,-20px,0)\n}\n75%{-webkit-transform:translate(-50%) translate3d(0,10px,0);transform:translate(-50%) translate3d(0,10px,0)\n}\n90%{-webkit-transform:translate(-50%) translate3d(0,-5px,0);transform:translate(-50%) translate3d(0,-5px,0)\n}\nto{-webkit-transform:translate(-50%) translateZ(0);transform:translate(-50%) translateZ(0)\n}\n}\n@-webkit-keyframes bounceOutUp{\n20%{-webkit-transform:translate(-50%) translate3d(0,-10px,0);transform:translate(-50%) translate3d(0,-10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,20px,0);transform:translate(-50%) translate3d(0,20px,0)\n}\nto{opacity:0;-webkit-transform:translate(-50%) translate3d(0,-1000px,0);transform:translate(-50%) translate3d(0,-1000px,0)\n}\n}\n@keyframes bounceOutUp{\n20%{-webkit-transform:translate(-50%) translate3d(0,-10px,0);transform:translate(-50%) translate3d(0,-10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,20px,0);transform:translate(-50%) translate3d(0,20px,0)\n}\nto{opacity:0;-webkit-transform:translate(-50%) translate3d(0,-1000px,0);transform:translate(-50%) translate3d(0,-1000px,0)\n}\n}\n@-webkit-keyframes bounceInDown{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate(-50%) translate3d(0,-1000px,0);transform:translate(-50%) translate3d(0,-1000px,0)\n}\n60%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,25px,0);transform:translate(-50%) translate3d(0,25px,0)\n}\n75%{-webkit-transform:translate(-50%) translate3d(0,-10px,0);transform:translate(-50%) translate3d(0,-10px,0)\n}\n90%{-webkit-transform:translate(-50%) translate3d(0,5px,0);transform:translate(-50%) translate3d(0,5px,0)\n}\nto{-webkit-transform:translate(-50%) translateZ(0);transform:translate(-50%) translateZ(0)\n}\n}\n@keyframes bounceInDown{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate(-50%) translate3d(0,-1000px,0);transform:translate(-50%) translate3d(0,-1000px,0)\n}\n60%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,25px,0);transform:translate(-50%) translate3d(0,25px,0)\n}\n75%{-webkit-transform:translate(-50%) translate3d(0,-10px,0);transform:translate(-50%) translate3d(0,-10px,0)\n}\n90%{-webkit-transform:translate(-50%) translate3d(0,5px,0);transform:translate(-50%) translate3d(0,5px,0)\n}\nto{-webkit-transform:translate(-50%) translateZ(0);transform:translate(-50%) translateZ(0)\n}\n}\n@-webkit-keyframes bounceOutDown{\n20%{-webkit-transform:translate(-50%) translate3d(0,10px,0);transform:translate(-50%) translate3d(0,10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,-20px,0);transform:translate(-50%) translate3d(0,-20px,0)\n}\nto{opacity:0;-webkit-transform:translate(-50%) translate3d(0,1000px,0);transform:translate(-50%) translate3d(0,1000px,0)\n}\n}\n@keyframes bounceOutDown{\n20%{-webkit-transform:translate(-50%) translate3d(0,10px,0);transform:translate(-50%) translate3d(0,10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate(-50%) translate3d(0,-20px,0);transform:translate(-50%) translate3d(0,-20px,0)\n}\nto{opacity:0;-webkit-transform:translate(-50%) translate3d(0,1000px,0);transform:translate(-50%) translate3d(0,1000px,0)\n}\n}\n.mu-toast{z-index:10000;position:fixed;width:80%;text-align:center;opacity:1\n}\n.mu-toast.pos-middle{top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)\n}\n.mu-toast.pos-top{top:50px\n}\n.mu-toast.pos-bottom,.mu-toast.pos-top{left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)\n}\n.mu-toast.pos-bottom{bottom:50px\n}\n.mu-toast.bounce-middle-enter-active{-webkit-animation:bounceIn .5s;animation:bounceIn .5s\n}\n.mu-toast.bounce-middle-leave-active{-webkit-animation:bounceOut .5s;animation:bounceOut .5s\n}\n.mu-toast.bounce-top-enter-active{-webkit-animation:bounceInDown .75s;animation:bounceInDown .75s\n}\n.mu-toast.bounce-top-leave-active{-webkit-animation:bounceOutUp .75s;animation:bounceOutUp .75s\n}\n.mu-toast.bounce-bottom-enter-active{-webkit-animation:bounceInUp .75s;animation:bounceInUp .75s\n}\n.mu-toast.bounce-bottom-leave-active{-webkit-animation:bounceOutDown .75s;animation:bounceOutDown .75s\n}\n.mu-toast-text{display:inline-block;min-width:200px;padding:5px 10px;line-height:22px;border-radius:5px;box-sizing:border-box;word-break:break-all;color:#fff;font-size:16px;background-color:rgba(0,0,0,.7);box-shadow:0 0 5px 2px rgba(0,0,0,.2)\n}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Toast=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0),ToastClass=Vue.extend(Toast),toast=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("string"==typeof t&&""===t||"object"===_typeof$$1(t)&&!t.message)){"string"==typeof t&&(t={message:t});var n=new ToastClass({propsData:t}).$mount();return document.body.appendChild(n.$el),n}},install=function(t){t.toast=t.prototype.$toast=toast};module.exports=install;
