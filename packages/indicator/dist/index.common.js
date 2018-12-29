/**
* @name @mu-ui/mu-indicator
* @license MIT
* @version 0.2.8
* @description: indicator vue plugin for vue 2.x
* @copyright (c) 2018-2019
* @author JR93 <gjr_china@163.com>
*/
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var Vue=_interopDefault(require("vue")),Loading=_interopDefault(require("@mu-ui/mu-loading")),script={props:{type:{type:String,default:"ring",validator:function(e){return~["ring","dual-ring"].indexOf(e)}},color:{type:String,default:"#fff"},bgColor:{type:String,default:"rgba(0, 0, 0, 0.7)"},maskColor:{type:String,default:"transparent"},tip:{type:String,default:"Loading..."}},data:function(){return{show:!1}},mounted:function(){this.show=!0}};function normalizeComponent(e,t,n,i,o,r,a,s,d,l){"function"==typeof a&&(d=s,s=a,a=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):t&&(c=a?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),c)if(u.functional){var _=u.render;u.render=function(e,t){return c.call(t),_(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return n}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,t){return addStyle(e,t)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(e,t){var n=isOldIE?t.media||"default":e,i=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,a=document.createTextNode(o),s=i.element.childNodes;s[r]&&i.element.removeChild(s[r]),s.length?i.element.insertBefore(a,s[r]):i.element.appendChild(a)}}}var __vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mu-indicator",style:{background:e.maskColor}},[n("div",{staticClass:"mu-indicator-bd",style:{"background-color":e.bgColor}},[n("mu-loading",{staticClass:"mu-indicator-loading",attrs:{type:e.type,size:40,color:e.color}},[n("p",{staticClass:"mu-indicator-text",style:{color:e.color}},[e._v("\n        "+e._s(e.tip)+"\n      ")])])],1)])},__vue_staticRenderFns__=[],__vue_inject_styles__=function(e){e&&e("data-v-4f486738_0",{source:"\n.mu-indicator{z-index:4000;position:fixed;top:0;left:0;right:0;bottom:0\n}\n.mu-indicator-bd{position:absolute;top:50%;left:50%;min-width:100px;min-height:100px;border-radius:5px;text-align:center;box-shadow:0 0 10px 2px rgba(0,0,0,.2);-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)\n}\n.mu-indicator-loading{margin-top:10px\n}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Indicator=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0);Vue.component("mu-loading",Loading);var IndicatorClass=Vue.extend(Indicator),instance=null,Indicator$1={show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof e&&(e={tip:e}),instance){if(instance.show)return}else instance=new IndicatorClass({propsData:e}).$mount();document.body.appendChild(instance.$el)},hide:function(){instance.show=!1,instance.$destroy();var e=instance.$el.parentNode;e&&e.removeChild(instance.$el),instance=null}},install=function(e){e.indicator=e.prototype.$indicator=Indicator$1};module.exports=install;
