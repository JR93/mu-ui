/**
* @name @mu-ui/mu-flex
* @license MIT
* @version 0.1.3
* @description: flex vue component for vue 2.x
* @copyright (c) 2018
* @author JR93 <gjr_china@163.com>
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var script={name:"MuFlex",props:{inline:{type:Boolean,default:!1},direction:{type:String,default:"row",validator:function(e){return~["col","row"].indexOf(e)}},reverse:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},justify:{type:String,default:"between",validator:function(e){return~["start","end","center","around","between"].indexOf(e)}},items:{type:String,default:"center",validator:function(e){return~["start","end","center"].indexOf(e)}},align:{type:String,default:"stretch",validator:function(e){return~["start","end","center","around","between","stretch"].indexOf(e)}}},computed:{customFlex:function(){var e=[];return this.inline&&e.push("mu-flex-inline"),this.wrap&&e.push("mu-flex-wrap"),"col"===this.direction?e.push(this.reverse?"mu-flex-col-reverse":"mu-flex-col"):this.reverse&&e.push("mu-flex-row-reverse"),"between"!==this.justify&&e.push("mu-flex-justify-".concat(this.justify)),"stretch"!==this.align&&e.push("mu-flex-align-".concat(this.align)),"center"!==this.items&&e.push("mu-flex-items-".concat(this.items)),e}}};function normalizeComponent(e,t,n,i,s,r,l,a,_,o){"function"==typeof l&&(_=a,a=l,l=!1);var u,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,_(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):t&&(u=l?function(){t.call(this,o(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(c.functional){var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return n}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,t){return addStyle(e,t)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(e,t){var n=isOldIE?t.media||"default":e,i=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var s=t.source;if(t.map&&(s+="\n/*# sourceURL="+t.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(s),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,l=document.createTextNode(s),a=i.element.childNodes;a[r]&&i.element.removeChild(a[r]),a.length?i.element.insertBefore(l,a[r]):i.element.appendChild(l)}}}var __vue_script__=script,__vue_render__=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mu-flex",class:this.customFlex},[this._t("default")],2)},__vue_staticRenderFns__=[],__vue_inject_styles__=function(e){e&&e("data-v-d8661120_0",{source:"\n.mu-flex{display:flex;justify-content:space-between;align-items:center\n}\n.mu-flex-inline{display:inline-flex;justify-content:flex-start\n}\n.mu-flex-wrap{flex-wrap:wrap\n}\n.mu-flex-row-reverse{flex-direction:row-reverse\n}\n.mu-flex-col{flex-direction:column\n}\n.mu-flex-col-reverse{flex-direction:column-reverse\n}\n.mu-flex-justify-start{justify-content:flex-start\n}\n.mu-flex-justify-end{justify-content:flex-end\n}\n.mu-flex-justify-center{justify-content:center\n}\n.mu-flex-justify-around{justify-content:space-around\n}\n.mu-flex-items-start{align-items:flex-start\n}\n.mu-flex-items-end{align-items:flex-end\n}\n.mu-flex-align-start{align-content:flex-start\n}\n.mu-flex-align-end{align-content:flex-end\n}\n.mu-flex-align-center{align-content:center\n}\n.mu-flex-align-between{align-content:space-between\n}\n.mu-flex-align-around{align-content:space-around\n}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,flex=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,createInjector,void 0),script$1={name:"MuFlexItem",props:{flex:{type:Number,default:0},align:{type:String,default:"auto",validator:function(e){return~["start","end","center","auto"].indexOf(e)}}},computed:{customAlign:function(){var e=[];return"auto"!==this.align&&e.push("mu-flex-item-".concat(this.align)),e},customStyle:function(){var e={};return this.flex>0&&(e["-webkit-box-flex"]=this.flex,e.flex=this.flex),e}}},__vue_script__$1=script$1,__vue_render__$1=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mu-flex-item",class:this.customAlign,style:this.customStyle},[this._t("default")],2)},__vue_staticRenderFns__$1=[],__vue_inject_styles__$1=function(e){e&&e("data-v-0c038b10_0",{source:"\n.mu-flex-item-start{align-self:flex-start\n}\n.mu-flex-item-end{align-self:flex-end\n}\n.mu-flex-item-center{align-self:center\n}",map:void 0,media:void 0})},__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,flexItem=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,createInjector,void 0);exports.Flex=flex,exports.FlexItem=flexItem;