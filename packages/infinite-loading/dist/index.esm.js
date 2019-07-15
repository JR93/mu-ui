/**
* @name @mu-ui/mu-infinite-loading
* @license MIT
* @version 0.1.4
* @description: infinite-loading vue component for vue 2.x
* @copyright (c) 2018-2019
* @author JR93 <gjr_china@163.com>
*/
function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject,commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,now=function(){return _root.Date.now()},now_1=now,Symbol=_root.Symbol,_Symbol=Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),n=e[symToStringTag];try{e[symToStringTag]=void 0}catch(e){}var i=nativeObjectToString.call(e);return t?e[symToStringTag]=n:delete e[symToStringTag],i}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;function isObjectLike(e){return null!=e&&"object"==typeof e}var isObjectLike_1=isObjectLike,symbolTag="[object Symbol]";function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}var isSymbol_1=isSymbol,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NAN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min;function debounce(e,t,n){var i,o,r,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);function _(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=r}function g(){var e=now_1();if(m(e))return p(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?nativeMin(n,r-(e-c)):n}(e))}function p(e){return s=void 0,f&&i?_(e):(i=o=void 0,a)}function h(){var e=now_1(),n=m(e);if(i=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?_(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),_(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=toNumber_1(t)||0,isObject_1(n)&&(u=!!n.leading,r=(d="maxWait"in n)?nativeMax(toNumber_1(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=o=s=void 0},h.flush=function(){return void 0===s?a:p(now_1())},h}var debounce_1=debounce,script={name:"MuInfiniteLoading",props:{target:{type:String,default:""},distance:{type:Number,default:20,validate:function(e){return e>=10}},debounceTime:{type:Number,default:50,validate:function(e){return e>=20}},preload:{type:Boolean,default:!0},loadingText:{type:String,default:""},completeText:{type:String,default:""},errorText:{type:String,default:""},emptyText:{type:String,default:""}},data:function(){return{scrollParent:null,container:null,scrollParentClientHeight:0,containerHeight:0,loading:!1,complete:!1,error:!1,empty:!1,eventHandler:null}},computed:{isPartialLoad:function(){return this.scrollParent!==window}},mounted:function(){var e=this;this.scrollParent=this.getScrollParent(),this.container=this.$refs.ilContainer,this.scrollParentClientHeight=this.getClientHeight(this.scrollParent),this.containerHeight=this.container.offsetHeight,this.eventHandler=debounce_1(this.handleScroll,this.debounceTime),this.scrollParent.addEventListener("scroll",this.eventHandler),this.stateChanger={loaded:function(){e.$emit("$infiniteLoading:loaded")},complete:function(){e.$emit("$infiniteLoading:complete")},error:function(){e.$emit("$infiniteLoading:error")},empty:function(){e.$emit("$infiniteLoading:empty")}},this.$on("$infiniteLoading:loaded",function(){e.$nextTick(function(){e.refresh()})}),this.$on("$infiniteLoading:complete",function(){e.$nextTick(function(){e.refresh(!0)})}),this.$on("$infiniteLoading:error",function(){e.$nextTick(function(){e.reset("error")})}),this.$on("$infiniteLoading:empty",function(){e.$nextTick(function(){e.reset("empty")})}),this.preload&&this.execute()},beforeDestroy:function(){this.removeListener()},methods:{getScrollParent:function(){var e=this.$refs.ilWrapper;return"window"===this.target&&(e=window),e},getScrollTop:function(e){return e===window?Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop):e.scrollTop},getElementTop:function(e){return e.getBoundingClientRect().top+this.getScrollTop(window)},getClientHeight:function(e){return e===window?document.documentElement.clientHeight:e.clientHeight},check:function(){return(this.scrollParent===window?this.getScrollTop(window)-this.getElementTop(this.$refs.ilWrapper):this.getScrollTop(this.scrollParent))+this.scrollParentClientHeight>=this.containerHeight-this.distance},handleScroll:function(){this.complete||this.loading||this.check()&&this.execute()},execute:function(){this.loading=!0,this.$emit("load",this.stateChanger)},refresh:function(e){this.containerHeight=this.container.offsetHeight,this.loading=!1,e&&(this.complete=!0)},reset:function(e){"empty"===e?this.empty=!0:"error"===e&&(this.error=!0),this.loading=!1,this.removeListener()},removeListener:function(){this.scrollParent.removeEventListener("scroll",this.eventHandler)}}};function normalizeComponent(e,t,n,i,o,r,a,s,l,c){"function"==typeof a&&(l=s,s=a,a=!1);var u,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=u):t&&(u=a?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(d.functional){var f=d.render;d.render=function(e,t){return u.call(t),f(e,t)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,u):[u]}return n}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,t){return addStyle(e,t)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(e,t){var n=isOldIE?t.media||"default":e,i=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,a=document.createTextNode(o),s=i.element.childNodes;s[r]&&i.element.removeChild(s[r]),s.length?i.element.insertBefore(a,s[r]):i.element.appendChild(a)}}}var __vue_script__=script,__vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"ilWrapper",staticClass:"mu-infinite-loading",class:{"mu-infinite-loading-part":e.isPartialLoad}},[n("div",{ref:"ilContainer",staticClass:"mu-infinite-loading-container"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"mu-infinite-loading-tip"},[e._t("loading",[e._v("\n      "+e._s(e.loadingText||"loading...")+"\n    ")])],2),e._v(" "),e.complete?n("div",{staticClass:"mu-infinite-loading-tip"},[e._t("complete",[e._v("\n      "+e._s(e.completeText||"complete~")+"\n    ")])],2):e._e(),e._v(" "),e.error?n("div",{staticClass:"mu-infinite-loading-tip"},[e._t("error",[e._v("\n      "+e._s(e.errorText||"error~")+"\n    ")])],2):e._e(),e._v(" "),e.empty?n("div",{staticClass:"mu-infinite-loading-tip"},[e._t("empty",[e._v("\n      "+e._s(e.emptyText||"empty~")+"\n    ")])],2):e._e()])},__vue_staticRenderFns__=[],__vue_inject_styles__=function(e){e&&e("data-v-370d0f72_0",{source:"\n.mu-infinite-loading-part{width:100%;height:100%;overflow-y:auto\n}\n.mu-infinite-loading-tip{height:30px;line-height:30px;font-size:14px;text-align:center;color:#999\n}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,infiniteLoading=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0);export default infiniteLoading;
