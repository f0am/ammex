(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07fec527"],{"145b":function(t,e,i){"use strict";var o=i("4a75"),a=i.n(o);a.a},1859:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"dashboard-core-footer"}},[i("v-container",[i("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(e,o){return i("v-col",{key:o,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[i("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:e.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(e.text)}})])})),i("v-spacer",{staticClass:"hidden-sm-and-down"}),i("v-col",{attrs:{cols:"12",md:"auto"}})],2)],1)],1)},a=[],n={name:"DashboardCoreFooter",data:function(){return{links:[]}}},s=n,r=(i("145b"),i("2877")),c=i("6544"),p=i.n(c),u=i("62ad"),l=i("a523"),h=(i("a9e3"),i("c7cd"),i("5530")),d=(i("b5b6"),i("8dd9")),f=i("3a66"),v=i("d10f"),b=i("58df"),m=i("80d2"),g=Object(b["a"])(d["a"],Object(f["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(m["g"])(t),left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight),bottom:Object(m["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),y=i("0fd9"),j=i("2fa4"),O=Object(r["a"])(s,o,a,!1,null,null,null);e["default"]=O.exports;p()(O,{VCol:u["a"],VContainer:l["a"],VFooter:g,VRow:y["a"],VSpacer:j["a"]})},"2fa4":function(t,e,i){"use strict";i("20f6");var o=i("80d2");e["a"]=Object(o["h"])("spacer","div","v-spacer")},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),a=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4a75":function(t,e,i){},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-07fec527.a5f5f24a.js.map