(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-507580d7"],{"0e8f":function(e,t,n){"use strict";n("20f6");var i=n("e8f2");t["a"]=Object(i["a"])("flex")},"169a":function(e,t,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("2909"),s=n("ade3"),o=(n("368e"),n("480e")),l=n("4ad4"),r=n("b848"),c=n("75eb"),d=n("e707"),u=n("e4d3"),h=n("21be"),m=n("f2e7"),v=n("a293"),f=n("58df"),p=n("d9bd"),b=n("80d2"),y=Object(f["a"])(l["a"],r["a"],c["a"],d["a"],u["a"],h["a"],m["a"]);t["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===b["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(e){return!e.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},2588:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[n("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-account-group",title:"Clients list"},scopedSlots:e._u([{key:"after-heading",fn:function(){return[n("div",[n("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),i),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("client-form",{model:{value:e.editedItem,callback:function(t){e.editedItem=t},expression:"editedItem"}}),e._v(" "+e._s(e.editedItem)+" ")],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0}])},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.clients,"sort-by":"name"},scopedSlots:e._u([{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)],1)},a=[],s=(n("c975"),n("a434"),n("ade3")),o=n("3749"),l={components:{ClientForm:o["a"]},data:function(){var e;return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{value:"contact",text:"Contact"},{value:"email",text:"Email"},{value:"phone",text:"Phone"},{value:"jobs",text:"Jobs pending"}],clients:[],editedIndex:-1,editedItem:{name:"",address:"",email:"",phone:"",jobs:[]},defaultItem:(e={name:""},Object(s["a"])(e,"name",""),Object(s["a"])(e,"address",""),Object(s["a"])(e,"email",""),Object(s["a"])(e,"phone",""),Object(s["a"])(e,"jobs",[]),e)}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.clients=[{id:1,name:"John Doe Inc.",contact:"John Doe",address:"123 rue quelconque, Gatineau",email:"john@doe.ca",phone:"819-123-4567",partnersName:"Oud-Turnhout",cheques:!1,qst:"12345",gst:"12345",remittance:"quarterly",payrollNumber:"12345",payrollRemittance:"monthly",corporation:!0,corporationYearEndDate:new Date,wsib:"12345",wsibRemittance:"quaterly",wsibCsstRate:"15",wsibCode:"12345",cliqsecrCode:"12345",gstCode:"12345",craCode:"12345",consent:!1,t4DueDate:new Date,jobs:"4 - 2 - 1 - 3"},{id:2,name:"Jane Doe Inc.",contact:"Jane Doe",address:"123 rue quelconque, Gatineau",email:"jane@doe.ca",phone:"819-123-4567",partnersName:"Oud-Turnhout",cheques:!1,qst:"12345",gst:"12345",remittance:"quarterly",payrollNumber:"12345",payrollRemittance:"monthly",corporation:!0,corporationYearEndDate:new Date,wsib:"12345",wsibRemittance:"quaterly",wsibCsstRate:"15",wsibCode:"12345",cliqsecrCode:"12345",gstCode:"12345",craCode:"12345",consent:!1,t4DueDate:new Date,jobs:[1,2,3,4].length}]},editItem:function(e){this.editedIndex=this.clients.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.clients.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.clients.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.clients[this.editedIndex],this.editedItem):this.clients.push(this.editedItem),this.close()}}},r=l,c=n("2877"),d=n("6544"),u=n.n(d),h=n("8336"),m=n("b0af"),v=n("99d9"),f=n("a523"),p=n("8fea"),b=n("169a"),y=n("0fd9"),g=n("2fa4"),w=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=w.exports;u()(w,{VBtn:h["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VContainer:f["a"],VDataTable:p["a"],VDialog:b["a"],VRow:y["a"],VSpacer:g["a"]})},"2fa4":function(e,t,n){"use strict";n("20f6");var i=n("80d2");t["a"]=Object(i["h"])("spacer","div","v-spacer")},"368e":function(e,t,n){},3749:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.fields,(function(t,i){return n("v-flex",{key:"field-"+t.name+"-"+i,staticClass:"pa-2",attrs:{xs6:""}},["group"===t.type?n("v-card",[n("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[e._v(e._s(t.name))]),n("v-card-text",e._l(t.fields,(function(t,i){return n("v-flex",{key:"field-"+t.name+"-"+i,attrs:{xs12:""}},["select"===t.type?n("v-select",{attrs:{items:t.options,label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}}):"switch"===t.type?n("v-switch",{attrs:{label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}}):t.type?n(t.type,{tag:"component"}):n("v-text-field",{attrs:{label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}})],1)})),1)],1):"select"===t.type?n("v-select",{attrs:{items:t.options,label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}}):"switch"===t.type?n("v-switch",{attrs:{label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}}):t.type?n(t.type,{tag:"component"}):n("v-text-field",{attrs:{label:t.label},model:{value:e.currentValue[t.name],callback:function(n){e.$set(e.currentValue,t.name,n)},expression:"currentValue[field.name]"}})],1)})),1)},a=[],s={props:{value:{type:Object,default:function(){}}},computed:{currentValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},o=s,l=n("2877"),r=n("6544"),c=n.n(r),d=n("b0af"),u=n("99d9"),h=n("0e8f"),m=n("a722"),v=n("b974"),f=n("b73d"),p=n("8654"),b=Object(l["a"])(o,i,a,!1,null,null,null),y=b.exports;c()(b,{VCard:d["a"],VCardText:u["b"],VCardTitle:u["c"],VFlex:h["a"],VLayout:m["a"],VSelect:v["a"],VSwitch:f["a"],VTextField:p["a"]});var g,w,C={extends:y,data:function(){return{fields:[{name:"contact",label:"Contact Name"},{name:"address",label:"Address"},{name:"email",label:"Email"},{name:"phone",label:"Phone"},{name:"id",label:"ID"},{name:"name",label:"Name"},{name:"owners",label:"Owners"},{name:"cheques",label:"Cheques"},{name:"qst",label:"QST"},{name:"gst",label:"GST"},{name:"remittance",label:"Remittance",type:"select",options:["Monthly","Quaterly","Yearly"]},{name:"payrollNumber",label:"Payroll Number"},{name:"payrollRemittance",label:"Payroll remittance"},{name:"corporation",label:"Corporation"},{name:"corporationYearEndDate",label:"Corporation year-end date"},{name:"wsib",label:"WSIB"},{name:"wsibRemittance",label:"WSIB remittance"},{name:"wsibCsstRate",label:"WSIB/CSST rate"},{name:"wsibCode",label:"WSIB code"},{name:"cliqsecrCode",label:"Cliqsecr code"},{name:"gstCode",label:"GST code"},{name:"craCode",label:"CRA code"},{name:"t4DueDate",label:"T4 due date"},{name:"jobs",label:"Jobs"},{name:"craConsent",label:"CRA Consent",type:"switch"},{name:"rqConsent",label:"RQ Consent",type:"switch"},{name:"wsibConsent",label:"WSIB Consent",type:"switch"},{name:"csstConsent",label:"CSST Consent",type:"switch"}]}}},x=C,O=Object(l["a"])(x,g,w,!1,null,null,null);t["a"]=O.exports},"3c93":function(e,t,n){},"9d01":function(e,t,n){},a722:function(e,t,n){"use strict";n("20f6");var i=n("e8f2");t["a"]=Object(i["a"])("layout")},b73d:function(e,t,n){"use strict";n("0481"),n("4069");var i=n("5530"),a=(n("ec29"),n("9d01"),n("fe09")),s=n("c37a"),o=n("c3f0"),l=n("0789"),r=n("490a"),c=n("80d2");t["a"]=a["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["w"].left&&this.isActive||e.keyCode===c["w"].right&&!this.isActive)&&this.onChange()}}})},e707:function(e,t,n){"use strict";n("caad"),n("a9e3"),n("2532");var i=n("5530"),a=(n("3c93"),n("a9ad")),s=n("7560"),o=n("f2e7"),l=n("58df"),r=Object(l["a"])(a["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),c=r,d=n("80d2"),u=n("2b0e");t["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(d["t"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(d["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[d["w"].up,d["w"].pageup],n=[d["w"].down,d["w"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),n=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var i=this.$refs.dialog,a=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(a,i))||this.shouldScroll(i,n)}for(var s=0;s<t.length;s++){var o=t[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,n)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(d["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-507580d7.da8eed6c.js.map