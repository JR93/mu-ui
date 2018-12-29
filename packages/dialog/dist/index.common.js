/**
* @name @mu-ui/mu-dialog
* @license MIT
* @version 0.1.5
* @description: dialog vue component & plugin for vue 2.x
* @copyright (c) 2018-2019
* @author JR93 <gjr_china@163.com>
*/
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var Vue=_interopDefault(require("vue"));function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var n,i,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var script={name:"MuDialog",props:{single:{type:Boolean,default:!1},pre:{type:Boolean,default:!1},opacity:{type:Number,default:.1,validator:function(e){return e>=0&&e<=1}},title:{type:String,default:"Tip"},message:{type:String,default:"Are you sure?"},btns:{type:Array,default:function(){return[]}},highlight:{type:String,default:"#272639"},value:{type:Boolean,default:!1}},data:function(){return{isMounted:!1,show:!1}},computed:{customBtnText:function(){return this.btns[0]||(this.single?"Confirm":"Cancel")},isSingle:function(){return 1===this.btns.length||this.single&&0===this.btns.length}},watch:{value:function(e){this.show=e}},mounted:function(){this.value&&(this.show=!0)},methods:{handler:function(e){this.isMounted?this.show=!1:this.$emit("input",!1),this.isSingle||1===e?this.$emit("confirm"):this.$emit("cancel")}}};function normalizeComponent(e,t,n,i,o,s,a,r,l,d){"function"==typeof a&&(l=r,r=a,a=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):t&&(c=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(u.functional){var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var _=u.beforeCreate;u.beforeCreate=_?[].concat(_,c):[c]}return n}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,t){return addStyle(e,t)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(e,t){var n=isOldIE?t.media||"default":e,i=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var s=i.ids.size-1,a=document.createTextNode(o),r=i.element.childNodes;r[s]&&i.element.removeChild(r[s]),r.length?i.element.insertBefore(a,r[s]):i.element.appendChild(a)}}}var __vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mu-dialog",style:{"background-color":"rgba(0, 0, 0, "+e.opacity+")"}},[n("div",{staticClass:"mu-dialog-bd"},[n("div",{staticClass:"mu-dialog-con"},[e._t("default",[n("h3",{staticClass:"mu-dialog-title"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mu-dialog-message"},[n("span",[e._v(e._s(e.message))])])])],2),e._v(" "),n("div",{staticClass:"mu-dialog-handler",class:{"mu-loading-sep-line":!e.isSingle}},[n("div",{staticClass:"mu-dialog-btn mu-dialog-btn0",class:{"mu-dialog-order1":!e.isSingle&&e.pre},style:[e.isSingle?{color:e.highlight}:""],on:{click:function(t){e.handler(0)}}},[e._v(e._s(e.customBtnText))]),e._v(" "),e.isSingle?e._e():n("div",{staticClass:"mu-dialog-btn mu-dialog-btn1",style:{color:e.highlight},on:{click:function(t){e.handler(1)}}},[e._v(e._s(e.btns[1]||"Confirm"))])])])])},__vue_staticRenderFns__=[],__vue_inject_styles__=function(e){e&&e("data-v-4b6ab4e2_0",{source:'\n.mu-dialog{z-index:4000;position:fixed;top:0;left:0;right:0;bottom:0\n}\n.mu-dialog-bd{position:absolute;top:50%;left:50%;min-width:260px;min-height:125px;border-radius:6px;box-sizing:border-box;text-align:center;box-shadow:0 0 10px 1px rgba(0,0,0,.1);background-color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)\n}\n.mu-dialog-con{padding:10px 10px 0;margin-bottom:55px\n}\n.mu-dialog-title{padding-top:10px;font-weight:700;font-size:16px\n}\n.mu-dialog-message{display:inline-flex;align-items:center;min-height:40px;padding-top:10px;line-height:20px;font-size:14px\n}\n.mu-dialog-handler{display:flex;justify-content:space-around;position:absolute;left:0;bottom:0;right:0;height:40px;line-height:40px;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #eee;overflow:hidden\n}\n.mu-dialog-handler.mu-loading-sep-line:after{content:"";display:block;position:absolute;top:0;bottom:0;left:50%;width:1px;background-color:#eee;-webkit-transform:translateX(-50%);transform:translateX(-50%)\n}\n.mu-dialog-btn{flex:1;color:#ccc;font-size:14px;font-weight:700;cursor:pointer\n}\n.mu-dialog-btn:active{background-color:rgba(0,0,0,.05)\n}\n.mu-dialog-btn.mu-dialog-order1{order:1\n}',map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,Dialog=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0),DialogClass=Vue.extend(Dialog),instance=null,dialog=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirm,n=e.cancel,i=_objectWithoutProperties(e,["confirm","cancel"]);instance||(instance=new DialogClass({propsData:i}).$mount()),instance.show||(t&&"function"==typeof t&&instance.$once("confirm",t),n&&"function"==typeof n&&instance.$once("cancel",n),instance.$watch("show",function(e){if(!1===e){instance.$destroy();var t=instance.$el.parentNode;t&&t.removeChild(instance.$el),instance=null}}),document.body.appendChild(instance.$el),Vue.nextTick(function(){instance.isMounted=!0,instance.show=!0}))},install=function(e){e.dialog=e.prototype.$dialog=dialog},index={install:install,Dialog:Dialog};module.exports=index;
