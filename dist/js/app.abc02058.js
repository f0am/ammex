(function(t){function e(e){for(var n,r,o=e[0],s=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"431ed599","chunk-4c4c13d0":"53a80eaf","chunk-5121857a":"863c9647","chunk-13990aa0":"7b41cbc9","chunk-2d0c46a1":"22500f53","chunk-6db59056":"f99e6403","chunk-c838b240":"56ade69d","chunk-ec2a30da":"6b80e545","chunk-00a05a78":"5572dcce","chunk-034a31e2":"3a76d4a4","chunk-507580d7":"da8eed6c","chunk-5c5c3580":"32a91e8f","chunk-d8f66682":"2595885d","chunk-a7efbeb8":"09dcf821","chunk-f7a35f0c":"7f848b5e","chunk-28062148":"3547cf87","chunk-531264a4":"8bb83771","chunk-02559538":"15674cbd","chunk-07fec527":"a5f5f24a"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-2e7d08b1":1,"chunk-4c4c13d0":1,"chunk-5121857a":1,"chunk-13990aa0":1,"chunk-6db59056":1,"chunk-c838b240":1,"chunk-ec2a30da":1,"chunk-00a05a78":1,"chunk-034a31e2":1,"chunk-507580d7":1,"chunk-5c5c3580":1,"chunk-d8f66682":1,"chunk-a7efbeb8":1,"chunk-f7a35f0c":1,"chunk-28062148":1,"chunk-531264a4":1,"chunk-02559538":1,"chunk-07fec527":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"73d90aa2","chunk-4c4c13d0":"cd27da56","chunk-5121857a":"ba1d52f1","chunk-13990aa0":"6427f037","chunk-2d0c46a1":"31d6cfe0","chunk-6db59056":"8b8f4869","chunk-c838b240":"456b4f69","chunk-ec2a30da":"df876398","chunk-00a05a78":"c00e6084","chunk-034a31e2":"06785e14","chunk-507580d7":"afd24dcc","chunk-5c5c3580":"afd24dcc","chunk-d8f66682":"0814b29f","chunk-a7efbeb8":"ca6df252","chunk-f7a35f0c":"615ab884","chunk-28062148":"f4f2c1ce","chunk-531264a4":"e17e51cb","chunk-02559538":"e6afb4bd","chunk-07fec527":"3fae2cf3"}[t]+".css",i=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],f.parentNode.removeChild(f),a(c)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f55":function(t,e,a){},2609:function(t,e,a){"use strict";a.r(e),e["default"]={drawer:null,color:"success",image:"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg",sidebarBackgroundColor:"rgba(27, 27, 27, 0.74)"}},"27b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:t._u([t.$attrs.icon?{key:"prepend",fn:function(){return[a("v-icon",{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:t.$attrs.color}},[t._v(" "+t._s(t.$attrs.icon)+" ")])]},proxy:!0}:null,t.$attrs.dismissible?{key:"close",fn:function(e){var n=e.toggle;return[a("v-btn",{attrs:{"aria-label":t.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:n}},[a("v-icon",[t._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i={name:"MaterialAlert"},c=i,o=(a("b22c"),a("2877")),s=a("6544"),u=a.n(s),l=a("0798"),d=a("8336"),f=a("132d"),m=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=m.exports;u()(m,{VAlert:l["a"],VBtn:d["a"],VIcon:f["a"]})},"2a74":function(t,e,a){"use strict";a.r(e);a("4160"),a("d3b7"),a("ac1f"),a("5319"),a("1276"),a("159b"),a("ddb0");var n=a("3835"),r=a("c653"),i={};r.keys().forEach((function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),a=e.split("/"),c=Object(n["a"])(a,2),o=c[0],s=c[1];i[o]||(i[o]={namespaced:!0}),i[o][s]=r(t).default}})),e["default"]=i},3648:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[a("h5",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.subheading)+" "),t.text?[a("span",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}})]:t._e()],2),a("div",{staticClass:"pt-2"},[t._t("default")],2)])},r=[],i={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},c=i,o=a("2877"),s=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=s.exports},3728:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{href:t.href,rel:t.href&&"#"!==t.href?"noopener":void 0,target:t.href&&"#"!==t.href?"_blank":void 0,to:t.item.to,"active-class":"primary "+(t.isDark?"white":"black")+"--text"}},[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.icon?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(t.item.icon)}})],1):t._e(),t.item.title||t.item.subtitle?a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.item.subtitle)}})],1):t._e()],1)},r=[],i=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("7560")),c={name:"Item",mixins:[i["a"]],props:{item:{type:Object,default:function(){return{href:void 0,icon:void 0,subtitle:void 0,title:void 0,to:void 0}}},text:{type:Boolean,default:!1}},computed:{computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},href:function(){return this.item.href||(this.item.to?void 0:"#")}}},o=c,s=a("2877"),u=a("6544"),l=a.n(u),d=a("132d"),f=a("da13"),m=a("5d23"),p=a("34c3"),h=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=h.exports;l()(h,{VIcon:d["a"],VListItem:f["a"],VListItemContent:m["a"],VListItemIcon:p["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"]})},3864:function(t,e,a){},"3fd1":function(t,e,a){},"407e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",t._b({staticClass:"v-tabs--pill",attrs:{"active-class":t.color+" "+(t.$vuetify.theme.dark?"black":"white")+"--text","hide-slider":""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-tabs",t.$attrs,!1),[t._t("default"),t._t("items")],2)},r=[],i=a("a452"),c={name:"MaterialTabs",mixins:[i["a"]],props:{color:{type:String,default:"primary"}}},o=c,s=(a("9743"),a("2877")),u=a("6544"),l=a.n(u),d=a("fe57"),f=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=f.exports;l()(f,{VTabs:d["a"]})},4360:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));a("99af"),a("d81d"),a("b680");var n=a("5530"),r=(a("96cf"),a("1da1")),i=a("2b0e"),c=a("2f62"),o=(a("4160"),a("fb6a"),a("a434"),a("159b"),a("2909")),s=a("d4ec"),u=a("bee2"),l=a("ade3"),d=(a("07ac"),function(){return{data:function(t){return!t.loading&&t.data},all:function(t){return Object.values(t.data)||[]},find:function(t){return function(e){return t.data[e]}},isLoading:function(t){return t.loading}}}),f=function(t){return{fetch:function(e){return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("startLoad"),a.prev=2,a.next=5,v.client.get("".concat(t));case 5:r=a.sent,i=r.data,n("setList",{data:i}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](2),n("error",a.t0);case 13:n("finishLoad");case 14:case"end":return a.stop()}}),a,null,[[2,10]])})))()},get:function(e,a){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("startLoad"),n.prev=2,n.next=5,v.client.get("".concat(t,"/").concat(a));case 5:i=n.sent,c=i.data,r("setList",{data:c}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](2),r("error",n.t0);case 13:r("finishLoad");case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},create:function(e,a){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("startLoad"),n.prev=2,n.next=5,v.client.post("".concat(t),{data:a});case 5:i=n.sent,r("setList",{data:i.data}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),r("error",n.t0);case 12:r("finishLoad");case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()},update:function(e,a){return Object(r["a"])(regeneratorRuntime.mark((function r(){var i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.commit,i("startLoad"),r.prev=2,r.next=5,v.client.put("".concat(t,"/").concat(a.id),{data:Object(n["a"])({},a)});case 5:c=r.sent,i("setList",{data:c.data}),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),i("error",r.t0);case 12:i("finishLoad");case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()},delete:function(e,a){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("startLoad"),n.prev=2,n.next=5,v.client.delete("".concat(t,"/").concat(a));case 5:i=n.sent,r("setList",{data:i.data}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),r("error",n.t0);case 12:r("finishLoad");case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}},m=function(){return{set:function(t,e){t.data=e},setList:function(t,e){var a=e.attr,n=e.data;n.constructor===Array?(t.data={},n.forEach((function(e){i["a"].set(t.data,e[a]||e.id,e)}))):i["a"].set(t.data,n[a]||n.id,n)},error:function(t,e){t.error=e},startLoad:function(t){t.loading=!0},finishLoad:function(t){t.loading=!1},setToken:function(t,e){t.token=e}}},p=a("bc3a"),h=a.n(p),v=function(){function t(e,a){Object(s["a"])(this,t),Object(l["a"])(this,"data",[]),Object(l["a"])(this,"mutations",{}),Object(l["a"])(this,"actions",{}),this.model=e,this.idPrefix=a||e.substr(0,e.length-1),t.models.push(this)}return Object(u["a"])(t,null,[{key:"setStore",value:function(e){t.store=e}},{key:"setClient",value:function(e){t.client=h.a.create(e)}},{key:"generateModules",value:function(){var t=this;return this.models.forEach((function(e){t.modules[e.model]=e.generateModule()})),{namespaced:!0,modules:Object(n["a"])({},this.modules)}}}]),Object(u["a"])(t,[{key:"addMutation",value:function(t,e){this.mutations[t]=e}},{key:"addAction",value:function(t,e){var a=this;this.actions[t]=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.commit("models/".concat(a.model,"/startLoad"),null,{root:!0}),t.prev=1,t.next=4,e(n,r);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),n.commit("models/".concat(a.model,"/error"),t.t0,{root:!0});case 9:n.commit("models/".concat(a.model,"/finishLoad"),null,{root:!0});case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e,a){return t.apply(this,arguments)}}()}},{key:"addGetter",value:function(t,e){this.getters[t]=e}},{key:"addMethod",value:function(e,a){var n=this;this.addAction(e,a),this["$".concat(e)]=function(a){return t.store.dispatch("models/".concat(n.model,"/").concat(e),a)}}},{key:"$fetch",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.dispatch("models/".concat(this.model,"/fetch"));case 1:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}()},{key:"$get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.dispatch("models/".concat(this.model,"/get"),a);case 1:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()},{key:"$create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.dispatch("models/".concat(this.model,"/create"),a);case 1:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()},{key:"$update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.dispatch("models/".concat(this.model,"/update"),a);case 1:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()},{key:"$delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.dispatch("models/".concat(this.model,"/delete"),a);case 1:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()},{key:"isLoading",value:function(){return t.store.getters["models/".concat(this.model,"/isLoading")]}},{key:"find",value:function(e){return t.store.getters["models/".concat(this.model,"/find")](e)}},{key:"query",value:function(){return this.data=Object(o["a"])(this.all()),this}},{key:"offset",value:function(t){return this.data.splice(0,t),this}},{key:"limit",value:function(t){return this.data=this.data.slice(0,t),this}},{key:"get",value:function(){return this.data}},{key:"all",value:function(){return t.store.getters["models/".concat(this.model,"/all")]}},{key:"raw",value:function(){return t.store.getters["models/".concat(this.model,"/data")]}},{key:"generateModule",value:function(){return{namespaced:!0,state:{loading:!1,data:{}},mutations:Object(n["a"])(Object(n["a"])({},m(this.idPrefix)),this.mutations),actions:Object(n["a"])(Object(n["a"])({},f(this.model)),this.actions),getters:Object(n["a"])(Object(n["a"])({},d(this.model)),this.getters)}}}]),t}();Object(l["a"])(v,"modules",{}),Object(l["a"])(v,"models",[]),Object(l["a"])(v,"store",void 0),Object(l["a"])(v,"client",void 0),Object(l["a"])(v,"properties",void 0);var b=function(t){v.setStore(t),t.registerModule("models",v.generateModules())},g={},k={},y={},x={},w=a("2a74"),C=new v("quotes");C.addMethod("fetchQuotes",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=[{id:1,customer:"Client A",representative:"Maxim Beauregard",deliveryDate:"10 Novembre 2019",updatedAt:"22 Décembre 2019",createdAt:"20 Décembre 2019",total:10499},{id:2,customer:"Client B",representative:"Jeremie Robitaille",deliveryDate:"10 Novembre 2019",updatedAt:"22 Décembre 2019",createdAt:"20 Décembre 2019",total:20599}],a("set",n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var _=new v("billables");_.addMethod("fetchBillables",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=[{id:1,customer:"Client A",representative:"Maxim Beauregard"},{id:2,customer:"Client B",representative:"Jeremie Robitaille"}],a("set",n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var j=new v("efforts");j.addMethod("fetchEfforts",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=[{id:1,name:"Effort 1",location:"location"},{id:2,name:"Effort 2",location:"Location"}],a("set",n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var O=new v("customers");O.addMethod("fetchClients",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=[{id:1,name:"Client #1",address:"123 rue Techform"},{id:2,name:"Client #2",address:"345 rue Montal"}],a("set",n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var P=new v("contacts");P.addMethod("fetchContacts",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=[{id:1,firstName:"John",lastName:"Doe",email:"john.doe@email.com",phone:"819 123 4567"},{id:2,firstName:"Jane",lastName:"Doe",email:"jane.doe@email.com",phone:"819 123 4568"}],a("set",n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var S=new v("representatives");S.addMethod("fetchRepresentatives",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,r=[{id:1,firstName:"Maxime",lastName:"Beauregard",email:"maxime@email.com",phone:"819 123 4567"},{id:2,firstName:"Jérémie",lastName:"Robitaille",email:"jeremie@email.com",phone:"819 123 4568"}],a("set",r.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{fullName:"".concat(t.firstName," ").concat(t.lastName)})})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var M=new v("products");M.addMethod("fetchProducts",function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=e.commit,n=[],r=1;r<15;r++)n.push({id:r,name:"item ".concat(r),description:"Description pour item ".concat(r),price:(100*Math.random()).toFixed(2)});a("set",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i["a"].use(c["a"]);var L=new c["a"].Store({actions:g,getters:k,modules:w["default"],mutations:y,state:x,plugins:[b]});e["b"]=L},4841:function(t,e,a){"use strict";a.r(e),e["default"]={}},"55a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center v-card--testimony"},[a("div",{staticClass:"pt-6"},[a("v-icon",{attrs:{color:"black","x-large":""}},[t._v(" mdi-format-quote-close ")])],1),a("v-card-text",{staticClass:"display-1 font-weight-light font-italic mb-3",domProps:{textContent:t._s(t.blurb)}}),a("div",{staticClass:"display-2 font-weight-light mb-2",domProps:{textContent:t._s(t.author)}}),a("div",{staticClass:"body-2 text-uppercase grey--text",domProps:{textContent:t._s(t.handle)}}),a("v-avatar",{staticClass:"elevation-12",attrs:{color:"grey",size:"100"}},[a("v-img",{attrs:{alt:t.author+" Testimonial",src:t.avatar}})],1),a("div")],1)},r=[],i={name:"BaseMaterialTestimony",props:{author:{type:String,default:""},avatar:{type:String,default:"https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg"},blurb:{type:String,default:""},handle:{type:String,default:""}}},c=i,o=(a("7bbe"),a("2877")),s=a("6544"),u=a.n(s),l=a("8212"),d=a("b0af"),f=a("99d9"),m=a("132d"),p=a("adda"),h=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=h.exports;u()(h,{VAvatar:l["a"],VCard:d["a"],VCardText:f["b"],VIcon:m["a"],VImg:p["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],c={name:"App"},o=c,s=a("2877"),u=Object(s["a"])(o,r,i,!1,null,null,null),l=u.exports,d=(a("d3b7"),a("8c4f"));n["a"].use(d["a"]);var f=new d["a"]({mode:"hash",base:"/",routes:[{path:"/",component:function(){return a.e("chunk-2e7d08b1").then(a.bind(null,"cd59"))},children:[{name:"Dashboard",path:"",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-ec2a30da"),a.e("chunk-00a05a78"),a.e("chunk-034a31e2"),a.e("chunk-d8f66682")]).then(a.bind(null,"5c3a"))}},{name:"User Profile",path:"pages/user",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-ec2a30da"),a.e("chunk-a7efbeb8")]).then(a.bind(null,"78a0"))}},{name:"Notifications",path:"components/notifications",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-13990aa0")]).then(a.bind(null,"38e4"))}},{name:"Icons",path:"components/icons",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-6db59056")]).then(a.bind(null,"3da0"))}},{name:"Typography",path:"components/typography",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-f7a35f0c")]).then(a.bind(null,"01af"))}},{name:"Regular Tables",path:"tables/regular-tables",component:function(){return a.e("chunk-4c4c13d0").then(a.bind(null,"35fd"))}},{name:"Google Maps",path:"maps/google-maps",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-2d0c46a1")]).then(a.bind(null,"3b73"))}},{name:"Upgrade",path:"upgrade",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-c838b240")]).then(a.bind(null,"3cac"))}},{name:"Clients",path:"clients",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-ec2a30da"),a.e("chunk-00a05a78"),a.e("chunk-034a31e2"),a.e("chunk-507580d7")]).then(a.bind(null,"2588"))}},{name:"Jobs",path:"jobs",component:function(){return Promise.all([a.e("chunk-5121857a"),a.e("chunk-ec2a30da"),a.e("chunk-00a05a78"),a.e("chunk-034a31e2"),a.e("chunk-5c5c3580")]).then(a.bind(null,"e07f"))}}]}]}),m=a("4360"),p=(a("4160"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("8103")),h=a.n(p),v=a("bba4"),b=a.n(v),g=a("e51e");g.keys().forEach((function(t){var e=g(t),a=h()(b()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["a"].component("Base".concat(a),e.default||e)}));a("4633");n["a"].use(a("84b5"));var k=a("7bb1"),y=a("4c93");Object(k["c"])("email",y["a"]),Object(k["c"])("max",y["b"]),Object(k["c"])("min",y["c"]),Object(k["c"])("numeric",y["d"]),Object(k["c"])("required",y["e"]),n["a"].component("validation-provider",k["b"]),n["a"].component("validation-observer",k["a"]);var x=a("f309"),w=a("5530"),C=a("a925"),_=a("1072");n["a"].use(C["a"]);var j={en:Object(w["a"])(Object(w["a"])({},a("edd4")),{},{$vuetify:_["a"]})},O=new C["a"]({locale:"en",fallbackLocale:"en",messages:j});a("1f55");n["a"].use(x["a"]);var P={primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"},S=new x["a"]({lang:{t:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return O.t(t,a)}},theme:{themes:{dark:P,light:P}}});n["a"].config.productionTip=!1,new n["a"]({router:f,store:m["b"],vuetify:S,i18n:O,render:function(t){return t(l)}}).$mount("#app")},"5ac2":function(t,e,a){"use strict";var n=a("e500"),r=a.n(n);r.a},"5f10":function(t,e,a){},6096:function(t,e,a){"use strict";a.r(e);var n=function(t){return function(e,a){return e[t]=a}},r=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:n("drawer"),setImage:n("image"),setColor:n("color"),toggleDrawer:r("drawer")}},6661:function(t,e,a){},6904:function(t,e,a){},"6ab5":function(t,e,a){"use strict";a.r(e);var n=a("2609"),r=a("6096");e["default"]={state:n["default"],mutations:r["default"]}},"6db5":function(t,e,a){"use strict";a.r(e),e["default"]={getUser:function(t){return t}}},"6fec":function(t,e,a){"use strict";a.r(e);var n=a("b467"),r=a("b0cf"),i=a("6db5"),c={name:"",role:"",authenticated:!1};e["default"]={state:c,getters:i["default"],actions:n["default"],mutations:r["default"]}},"740d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-12 text-center"},[a("h1",{staticClass:"font-weight-light mb-2 headline",domProps:{textContent:t._s("Vuetify "+t.heading)}}),a("span",{staticClass:"font-weight-light subtitle-1"},[t._v(" Please checkout the "),a("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://vuetifyjs.com/"+t.link,rel:"noopener",target:"_blank"}},[t._v(" full documentation ")])])])},r=[],i={name:"VComponent",props:{heading:{type:String,default:""},link:{type:String,default:""}}},c=i,o=a("2877"),s=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=s.exports},"7bbe":function(t,e,a){"use strict";var n=a("5f10"),r=a.n(n);r.a},"8df3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-chart",scopedSlots:t._u([{key:"heading",fn:function(){return[a("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type}})]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[t._t("reveal-actions",null,{slot:"reveal-actions"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},r=[],i=(a("caad"),{name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),c=i,o=(a("e56a"),a("2877")),s=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=s.exports},"92cb":function(t,e,a){"use strict";a.r(e);var n=a("ac99"),r=a("ea5c"),i=a("4841"),c={};e["default"]={namespaced:!0,state:c,actions:n["default"],getters:r["default"],mutations:i["default"]}},9743:function(t,e,a){"use strict";var n=a("3fd1"),r=a.n(n);r.a},a46f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-stats",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},r=[],i=a("5530"),c=a("c034"),o={name:"MaterialStatsCard",inheritAttrs:!1,props:Object(i["a"])(Object(i["a"])({},c["default"].props),{},{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},s=o,u=(a("ecdb"),a("2877")),l=a("6544"),d=a.n(l),f=a("62ad"),m=a("ce7e"),p=a("132d"),h=Object(u["a"])(s,n,r,!1,null,null,null);e["default"]=h.exports;d()(h,{VCol:f["a"],VDivider:m["a"],VIcon:p["a"]})},ac99:function(t,e,a){"use strict";a.r(e),e["default"]={}},afbc:function(t,e,a){"use strict";var n=a("c5ef"),r=a.n(n);r.a},b0cf:function(t,e,a){"use strict";a.r(e);a("b0c0");e["default"]={setUser:function(t,e){t.name=e.name,t.role=e.role,t.authenticated=e.authenticated,console.log(t)}}},b22c:function(t,e,a){"use strict";var n=a("6904"),r=a.n(n);r.a},b467:function(t,e,a){"use strict";a.r(e),e["default"]={login:function(t,e,a){var n=t.commit;n("setUser",{name:"Maxim Beauregard",role:"admin",authenticated:!0})}}},c034:function(t,e,a){"use strict";a.r(e);var n,r,i=a("b0af"),c={name:"Card",extends:i["a"]},o=c,s=a("2877"),u=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports},c5ef:function(t,e,a){},c653:function(t,e,a){var n={"./app/index.js":"6ab5","./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74","./user/actions.js":"b467","./user/getters.js":"6db5","./user/index.js":"6fec","./user/mutations.js":"b0cf","./wapMgmt/actions.js":"ac99","./wapMgmt/getters.js":"ea5c","./wapMgmt/index.js":"92cb","./wapMgmt/mutations.js":"4841"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="c653"},cc0b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",t._b({staticClass:"v-snackbar--material",model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-snackbar",Object.assign({},t.$attrs,{color:"transparent"}),!1),[a("base-material-alert",{staticClass:"ma-0",attrs:{color:t.$attrs.color,dismissible:t.dismissible,type:t.type,dark:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)],1)},r=[],i={name:"BaseMaterialSnackbar",props:{dismissible:{type:Boolean,default:!0},type:{type:String,default:""},value:Boolean},data:function(){return{internalValue:this.value}},watch:{internalValue:function(t,e){t!==e&&this.$emit("input",t)},value:function(t,e){t!==e&&(this.internalValue=t)}}},c=i,o=(a("5ac2"),a("2877")),s=a("6544"),u=a.n(s),l=a("2db4"),d=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports;u()(d,{VSnackbar:l["a"]})},e1fc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-item-group",{attrs:{item:t.item,text:"","sub-group":""}})},r=[],i={name:"ItemSubGroup",props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}}}},c=i,o=a("2877"),s=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=s.exports},e3bb:function(t,e,a){"use strict";var n=a("6661"),r=a.n(n);r.a},e500:function(t,e,a){},e51e:function(t,e,a){var n={"./Card.vue":"c034","./Item.vue":"3728","./ItemGroup.vue":"e9c3","./ItemSubGroup.vue":"e1fc","./MaterialAlert.vue":"27b8","./MaterialCard.vue":"e6f8","./MaterialChartCard.vue":"8df3","./MaterialSnackbar.vue":"cc0b","./MaterialStatsCard.vue":"a46f","./MaterialTabs.vue":"407e","./MaterialTestimony.vue":"55a9","./Subheading.vue":"3648","./VComponent.vue":"740d"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="e51e"},e56a:function(t,e,a){"use strict";var n=a("3864"),r=a.n(n);r.a},e6f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},r=[],i={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},c=i,o=(a("e3bb"),a("2877")),s=a("6544"),u=a.n(s),l=a("8212"),d=a("b0af"),f=a("99d9"),m=a("ce7e"),p=a("132d"),h=a("adda"),v=a("8dd9"),b=Object(o["a"])(c,n,r,!1,null,null,null);e["default"]=b.exports;u()(b,{VAvatar:l["a"],VCard:d["a"],VCardActions:f["a"],VDivider:m["a"],VIcon:p["a"],VImg:h["a"],VSheet:v["a"]})},e9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-group",{attrs:{group:t.group,"prepend-icon":t.item.icon,"sub-group":t.subGroup,"append-icon":"mdi-menu-down",color:"rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)"!==t.barColor?"white":"grey darken-1"},scopedSlots:t._u([{key:"activator",fn:function(){return[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.avatar?a("v-list-item-avatar",{staticClass:"align-self-center",attrs:{color:"white",contain:""}},[a("v-img",{attrs:{src:"https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"}})],1):t._e(),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}})],1)]},proxy:!0}])},[t._l(t.children,(function(t,e){return[t.children?a("base-item-sub-group",{key:"sub-group-"+e,attrs:{item:t}}):a("base-item",{key:"item-"+e,attrs:{item:t,text:""}})]}))],2)},r=[],i=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("159b"),a("5530")),c=a("375a"),o=a.n(c),s=a("2f62"),u={name:"ItemGroup",inheritAttrs:!1,props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}},subGroup:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["barColor"])),{},{children:function(){var t=this;return this.item.children.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{to:e.to?"".concat(t.item.group,"/").concat(e.to):void 0})}))},computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},group:function(){return this.genGroup(this.item.children)}}),methods:{genGroup:function(t){var e=this;return t.filter((function(t){return t.to})).map((function(t){var a=t.group||e.item.group,n="".concat(a,"/").concat(o()(t.to));return t.children&&(n="".concat(n,"|").concat(e.genGroup(t.children))),n})).join("|")}}},l=u,d=(a("afbc"),a("2877")),f=a("6544"),m=a.n(f),p=a("adda"),h=a("56b0"),v=a("8270"),b=a("5d23"),g=a("34c3"),k=Object(d["a"])(l,n,r,!1,null,null,null);e["default"]=k.exports;m()(k,{VImg:p["a"],VListGroup:h["a"],VListItemAvatar:v["a"],VListItemContent:b["a"],VListItemIcon:g["a"],VListItemTitle:b["c"]})},ea5c:function(t,e,a){"use strict";a.r(e);var n=[{id:1,vlanId:900,vlanName:"WAPs 1",network:"10.43.22.224",netMask:"255.255.255.0",gatewayIP:"10.22.80.196",hostsCount:250,dhcpIpRange:"10.22.80.196 - 10.22.80.196",dhcpLeaseTime:7},{id:2,vlanId:900,vlanName:"WAPs 2",network:"10.43.22.224",netMask:"255.255.255.0",gatewayIP:"10.22.80.196",hostsCount:250,dhcpIpRange:"10.22.80.196 - 10.22.80.196",dhcpLeaseTime:7},{id:3,vlanId:900,vlanName:"WAPs 3",network:"10.43.22.224",netMask:"255.255.255.0",gatewayIP:"10.22.80.196",hostsCount:250,dhcpIpRange:"10.22.80.196 - 10.22.80.196",dhcpLeaseTime:7},{id:4,vlanId:900,vlanName:"WAPs 4",network:"10.43.22.224",netMask:"255.255.255.0",gatewayIP:"10.22.80.196",hostsCount:250,dhcpIpRange:"10.22.80.196 - 10.22.80.196",dhcpLeaseTime:7}];e["default"]={getWAPs:function(){return n}}},ecdb:function(t,e,a){"use strict";var n=a("f94b"),r=a.n(n);r.a},edd4:function(t){t.exports=JSON.parse('{"avatar":"Ammex","buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","ct":"CT","dashboard":"Dashboard","dtables":"Data Tables","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"My Profile","edit-profile":"Edit Profile","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Creative Tim","timeline":"Timeline","typography":"Typography","upgrade":"Upgrade To PRO","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}')},f94b:function(t,e,a){}});
//# sourceMappingURL=app.abc02058.js.map