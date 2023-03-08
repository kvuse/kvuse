(function(_,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(_=typeof globalThis<"u"?globalThis:_||self,t(_["kvuse-vant"]={},_.Vue))})(this,function(_,t){"use strict";const Nn="",V=e=>e!=null,K=e=>typeof e=="function",U=e=>e!==null&&typeof e=="object",Le=e=>U(e)&&K(e.then)&&K(e.catch),re=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Fe=()=>ae?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1,P=Object.assign,ae=typeof window<"u";function le(e,n){const o=n.split(".");let a=e;return o.forEach(i=>{var l;a=U(a)&&(l=a[i])!=null?l:""}),a}const ie=e=>Array.isArray(e)?e:[e],W=null,y=[Number,String],ce={type:Boolean,default:!0},Oe=e=>({type:y,default:e}),p=e=>({type:String,default:e});var se=typeof window<"u";function Re(e){const n=t.inject(e,null);if(n){const o=t.getCurrentInstance(),{link:a,unlink:i,internalChildren:l}=n;a(o),t.onUnmounted(()=>i(o));const c=t.computed(()=>l.indexOf(o));return{parent:n,index:c}}return{parent:null,index:t.ref(-1)}}function ze(e){let n;t.onMounted(()=>{e(),t.nextTick(()=>{n=!0})}),t.onActivated(()=>{n&&e()})}function Me(e,n,o={}){if(!se)return;const{target:a=window,passive:i=!1,capture:l=!1}=o;let c;const f=u=>{const d=t.unref(u);d&&!c&&(d.addEventListener(e,n,{capture:l,passive:i}),c=!0)},s=u=>{const d=t.unref(u);d&&c&&(d.removeEventListener(e,n,l),c=!1)};t.onUnmounted(()=>s(a)),t.onDeactivated(()=>s(a)),ze(()=>f(a)),t.isRef(a)&&t.watch(a,(u,d)=>{s(d),f(u)})}var v,X;function je(){if(!v&&(v=t.ref(0),X=t.ref(0),se)){const e=()=>{v.value=window.innerWidth,X.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:v,height:X}}var Ke=Symbol("van-field");function de(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function ue(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function fe(e){de(window,e),de(document.body,e)}const Ue=Fe();function We(){Ue&&fe(ue())}const ve=e=>e.stopPropagation();function Q(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&ve(e)}je();function k(e){if(V(e))return re(e)?`${e}px`:String(e)}function qe(e){if(V(e)){if(Array.isArray(e))return{width:k(e[0]),height:k(e[1])};const n=k(e);return{width:n,height:n}}}const Ye=/-(\w)/g,me=e=>e.replace(Ye,(n,o)=>o.toUpperCase()),He=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function ge(e,n,o){const a=e.indexOf(n);return a===-1?e:n==="-"&&a!==0?e.slice(0,a):e.slice(0,a+1)+e.slice(a).replace(o,"")}function Ze(e,n=!0,o=!0){n?e=ge(e,".",/\./g):e=e.split(".")[0],o?e=ge(e,"-",/-/g):e=e.replace(/-/,"");const a=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(a,"")}const{hasOwnProperty:Ge}=Object.prototype;function Je(e,n,o){const a=n[o];!V(a)||(!Ge.call(e,o)||!U(a)?e[o]=a:e[o]=he(Object(e[o]),a))}function he(e,n){return Object.keys(n).forEach(o=>{Je(e,n,o)}),e}var Xe={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,n)=>`${e}\u5E74${n}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const pe=t.ref("zh-CN"),be=t.reactive({"zh-CN":Xe});var Qe={messages(){return be[pe.value]},use(e,n){pe.value=e,this.add({[e]:n})},add(e={}){he(be,e)}};function et(e){const n=me(e)+".";return(o,...a)=>{const i=Qe.messages(),l=le(i,n+o)||le(i,o);return K(l)?l(...a):l}}function ee(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((o,a)=>o+ee(e,a),""):Object.keys(n).reduce((o,a)=>o+(n[a]?ee(e,a):""),""):""}function tt(e){return(n,o)=>(n&&typeof n!="string"&&(o=n,n=""),n=n?`${e}__${n}`:e,`${n}${ee(n,o)}`)}function w(e){const n=`van-${e}`;return[n,tt(n),et(n)]}const nt="van-hairline--surround",ot=Symbol("van-form");function T(e){return e.install=n=>{const{name:o}=e;o&&(n.component(o,e),n.component(me(`-${o}`),e))},e}function rt(e){const n=t.getCurrentInstance();n&&P(n.proxy,e)}const ye={to:[String,Object],url:String,replace:Boolean};function at({to:e,url:n,replace:o,$router:a}){e&&a?a[o?"replace":"push"](e):n&&(o?location.replace(n):location.href=n)}function Ee(){const e=t.getCurrentInstance().proxy;return()=>at(e)}const[lt,Ve]=w("badge"),it={dot:Boolean,max:y,tag:p("div"),color:String,offset:Array,content:y,showZero:ce,position:p("top-right")};var ct=t.defineComponent({name:lt,props:it,setup(e,{slots:n}){const o=()=>{if(n.content)return!0;const{content:c,showZero:f}=e;return V(c)&&c!==""&&(f||c!==0&&c!=="0")},a=()=>{const{dot:c,max:f,content:s}=e;if(!c&&o())return n.content?n.content():V(f)&&re(s)&&+s>f?`${f}+`:s},i=t.computed(()=>{const c={background:e.color};if(e.offset){const[f,s]=e.offset;n.default?(c.top=k(s),typeof f=="number"?c.right=k(-f):c.right=f.startsWith("-")?f.replace("-",""):`-${f}`):(c.marginTop=k(s),c.marginLeft=k(f))}return c}),l=()=>{if(o()||e.dot)return t.createVNode("div",{class:Ve([e.position,{dot:e.dot,fixed:!!n.default}]),style:i.value},[a()])};return()=>{if(n.default){const{tag:c}=e;return t.createVNode(c,{class:Ve("wrapper")},{default:()=>[n.default(),l()]})}return l()}}});const st=T(ct),dt=e=>{},[_e,ut]=w("config-provider"),ke=Symbol(_e),ft={tag:p("div"),theme:p("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function mt(e){const n={};return Object.keys(e).forEach(o=>{n[`--van-${He(o)}`]=e[o]}),n}t.defineComponent({name:_e,props:ft,setup(e,{slots:n}){const o=t.computed(()=>mt(P({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(ae){const a=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},i=(l=e.theme)=>{document.documentElement.classList.remove(`van-theme-${l}`)};t.watch(()=>e.theme,(l,c)=>{c&&i(c),a()},{immediate:!0}),t.onActivated(a),t.onDeactivated(i),t.onBeforeUnmount(i)}return t.provide(ke,e),t.watchEffect(()=>{e.zIndex!==void 0&&dt(e.zIndex)}),()=>t.createVNode(e.tag,{class:ut(),style:o.value},{default:()=>{var a;return[(a=n.default)==null?void 0:a.call(n)]}})}});const[gt,Ce]=w("icon"),ht=e=>e==null?void 0:e.includes("/"),pt={dot:Boolean,tag:p("i"),name:String,size:y,badge:y,color:String,badgeProps:Object,classPrefix:String};var bt=t.defineComponent({name:gt,props:pt,setup(e,{slots:n}){const o=t.inject(ke,null),a=t.computed(()=>e.classPrefix||(o==null?void 0:o.iconPrefix)||Ce());return()=>{const{tag:i,dot:l,name:c,size:f,badge:s,color:u}=e,d=ht(c);return t.createVNode(st,t.mergeProps({dot:l,tag:i,class:[a.value,d?"":`${a.value}-${c}`],style:{color:u,fontSize:k(f)},content:s},e.badgeProps),{default:()=>{var h;return[(h=n.default)==null?void 0:h.call(n),d&&t.createVNode("img",{class:Ce("image"),src:c},null)]}})}}});const N=T(bt),[yt,F]=w("loading"),Et=Array(12).fill(null).map((e,n)=>t.createVNode("i",{class:F("line",String(n+1))},null)),Vt=t.createVNode("svg",{class:F("circular"),viewBox:"25 25 50 50"},[t.createVNode("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),_t={size:y,type:p("circular"),color:String,vertical:Boolean,textSize:y,textColor:String};var kt=t.defineComponent({name:yt,props:_t,setup(e,{slots:n}){const o=t.computed(()=>P({color:e.color},qe(e.size))),a=()=>{const l=e.type==="spinner"?Et:Vt;return t.createVNode("span",{class:F("spinner",e.type),style:o.value},[n.icon?n.icon():l])},i=()=>{var l;if(n.default)return t.createVNode("span",{class:F("text"),style:{fontSize:k(e.textSize),color:(l=e.textColor)!=null?l:e.color}},[n.default()])};return()=>{const{type:l,vertical:c}=e;return t.createVNode("div",{class:F([l,{vertical:c}]),"aria-live":"polite","aria-busy":!0},[a(),i()])}}});const Ct=T(kt),[Bt,D]=w("button"),St=P({},ye,{tag:p("button"),text:String,icon:String,type:p("default"),size:p("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:p("button"),loadingSize:y,loadingText:String,loadingType:String,iconPosition:p("left")});var $t=t.defineComponent({name:Bt,props:St,emits:["click"],setup(e,{emit:n,slots:o}){const a=Ee(),i=()=>o.loading?o.loading():t.createVNode(Ct,{size:e.loadingSize,type:e.loadingType,class:D("loading")},null),l=()=>{if(e.loading)return i();if(o.icon)return t.createVNode("div",{class:D("icon")},[o.icon()]);if(e.icon)return t.createVNode(N,{name:e.icon,class:D("icon"),classPrefix:e.iconPrefix},null)},c=()=>{let u;if(e.loading?u=e.loadingText:u=o.default?o.default():e.text,u)return t.createVNode("span",{class:D("text")},[u])},f=()=>{const{color:u,plain:d}=e;if(u){const h={color:d?u:"white"};return d||(h.background=u),u.includes("gradient")?h.border=0:h.borderColor=u,h}},s=u=>{e.loading?Q(u):e.disabled||(n("click",u),a())};return()=>{const{tag:u,type:d,size:h,block:I,round:M,plain:S,square:$,loading:x,disabled:C,hairline:Z,nativeType:L,iconPosition:G}=e,j=[D([d,h,{plain:S,block:I,round:M,square:$,loading:x,disabled:C,hairline:Z}]),{[nt]:Z}];return t.createVNode(u,{type:L,class:j,style:f(),disabled:C,onClick:s},{default:()=>[t.createVNode("div",{class:D("content")},[G==="left"&&l(),c(),G==="right"&&l()])]})}}});const wt=T($t);let Nt=0;function It(){const e=t.getCurrentInstance(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return process.env.NODE_ENV==="test"?n:`${n}-${++Nt}`}const[xt,A]=w("cell"),Be={tag:p("div"),icon:String,size:String,title:y,value:y,label:y,center:Boolean,isLink:Boolean,border:ce,required:Boolean,iconPrefix:String,valueClass:W,labelClass:W,titleClass:W,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},Pt=P({},Be,ye);var Tt=t.defineComponent({name:xt,props:Pt,setup(e,{slots:n}){const o=Ee(),a=()=>{if(n.label||V(e.label))return t.createVNode("div",{class:[A("label"),e.labelClass]},[n.label?n.label():e.label])},i=()=>{if(n.title||V(e.title))return t.createVNode("div",{class:[A("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t.createVNode("span",null,[e.title]),a()])},l=()=>{const s=n.value||n.default;if(s||V(e.value))return t.createVNode("div",{class:[A("value"),e.valueClass]},[s?s():t.createVNode("span",null,[e.value])])},c=()=>{if(n.icon)return n.icon();if(e.icon)return t.createVNode(N,{name:e.icon,class:A("left-icon"),classPrefix:e.iconPrefix},null)},f=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const s=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return t.createVNode(N,{name:s,class:A("right-icon")},null)}};return()=>{var s;const{tag:u,size:d,center:h,border:I,isLink:M,required:S}=e,$=(s=e.clickable)!=null?s:M,x={center:h,required:S,clickable:$,borderless:!I};return d&&(x[d]=!!d),t.createVNode(u,{class:A(x),role:$?"button":void 0,tabindex:$?0:void 0,onClick:o},{default:()=>{var C;return[c(),i(),l(),f(),(C=n.extra)==null?void 0:C.call(n)]}})}}});const Dt=T(Tt);function Se(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function At(e,n){if(Se(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Lt(e,n){return new Promise(o=>{const a=n.validator(e,n);if(Le(a)){a.then(o);return}o(a)})}function $e(e,n){const{message:o}=n;return K(o)?o(e,n):o||""}function Ft({target:e}){e.composing=!0}function we({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Ot(e,n){const o=ue();e.style.height="auto";let a=e.scrollHeight;if(U(n)){const{maxHeight:i,minHeight:l}=n;i!==void 0&&(a=Math.min(a,i)),l!==void 0&&(a=Math.max(a,l))}a&&(e.style.height=`${a}px`,fe(o))}function Rt(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function te(e){return[...e].length}function zt(e,n){return[...e].slice(0,n).join("")}const[Mt,E]=w("field"),jt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:y,formatter:Function,clearIcon:p("clear"),modelValue:Oe(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:p("focus"),formatTrigger:p("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Kt=P({},Be,jt,{rows:y,type:p("text"),rules:Array,autosize:[Boolean,Object],labelWidth:y,labelClass:W,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ut=t.defineComponent({name:Mt,props:Kt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:o}){const a=It(),i=t.reactive({status:"unvalidated",focused:!1,validateMessage:""}),l=t.ref(),c=t.ref(),f=t.ref(),{parent:s}=Re(ot),u=()=>{var r;return String((r=e.modelValue)!=null?r:"")},d=r=>{if(V(e[r]))return e[r];if(s&&V(s.props[r]))return s.props[r]},h=t.computed(()=>{const r=d("readonly");if(e.clearable&&!r){const m=u()!=="",g=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return m&&g}return!1}),I=t.computed(()=>f.value&&o.input?f.value():e.modelValue),M=r=>r.reduce((m,g)=>m.then(()=>{if(i.status==="failed")return;let{value:b}=I;if(g.formatter&&(b=g.formatter(b,g)),!At(b,g)){i.status="failed",i.validateMessage=$e(b,g);return}if(g.validator)return Se(b)&&g.validateEmpty===!1?void 0:Lt(b,g).then(B=>{B&&typeof B=="string"?(i.status="failed",i.validateMessage=B):B===!1&&(i.status="failed",i.validateMessage=$e(b,g))})}),Promise.resolve()),S=()=>{i.status="unvalidated",i.validateMessage=""},$=()=>n("endValidate",{status:i.status,message:i.validateMessage}),x=(r=e.rules)=>new Promise(m=>{S(),r?(n("startValidate"),M(r).then(()=>{i.status==="failed"?(m({name:e.name,message:i.validateMessage}),$()):(i.status="passed",m(),$())})):m()}),C=r=>{if(s&&e.rules){const{validateTrigger:m}=s.props,g=ie(m).includes(r),b=e.rules.filter(B=>B.trigger?ie(B.trigger).includes(r):g);b.length&&x(b)}},Z=r=>{const{maxlength:m}=e;if(V(m)&&te(r)>m){const g=u();return g&&te(g)===+m?g:zt(r,+m)}return r},L=(r,m="onChange")=>{if(r=Z(r),e.type==="number"||e.type==="digit"){const g=e.type==="number";r=Ze(r,g,g)}if(e.formatter&&m===e.formatTrigger&&(r=e.formatter(r)),l.value&&l.value.value!==r){const{selectionStart:g,selectionEnd:b}=l.value;l.value.value=r,l.value.setSelectionRange(g,b)}r!==e.modelValue&&n("update:modelValue",r)},G=r=>{r.target.composing||L(r.target.value)},j=()=>{var r;return(r=l.value)==null?void 0:r.blur()},fn=()=>{var r;return(r=l.value)==null?void 0:r.focus()},J=()=>{const r=l.value;e.type==="textarea"&&e.autosize&&r&&Ot(r,e.autosize)},mn=r=>{i.focused=!0,n("focus",r),t.nextTick(J),d("readonly")&&j()},gn=r=>{d("readonly")||(i.focused=!1,L(u(),"onBlur"),n("blur",r),C("onBlur"),t.nextTick(J),We())},Te=r=>n("clickInput",r),hn=r=>n("clickLeftIcon",r),pn=r=>n("clickRightIcon",r),bn=r=>{Q(r),n("update:modelValue",""),n("clear",r)},De=t.computed(()=>{if(typeof e.error=="boolean")return e.error;if(s&&s.props.showError&&i.status==="failed")return!0}),yn=t.computed(()=>{const r=d("labelWidth");if(r)return{width:k(r)}}),En=r=>{r.keyCode===13&&(!(s&&s.props.submitOnEnter)&&e.type!=="textarea"&&Q(r),e.type==="search"&&j()),n("keypress",r)},Ae=()=>e.id||`${a}-input`,Vn=()=>i.status,_n=()=>{const r=E("control",[d("inputAlign"),{error:De.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return t.createVNode("div",{class:r,onClick:Te},[o.input()]);const m={id:Ae(),ref:l,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:r,disabled:d("disabled"),readonly:d("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${a}-label`:void 0,onBlur:gn,onFocus:mn,onInput:G,onClick:Te,onChange:we,onKeypress:En,onCompositionend:we,onCompositionstart:Ft};return e.type==="textarea"?t.createVNode("textarea",m,null):t.createVNode("input",t.mergeProps(Rt(e.type),m),null)},kn=()=>{const r=o["left-icon"];if(e.leftIcon||r)return t.createVNode("div",{class:E("left-icon"),onClick:hn},[r?r():t.createVNode(N,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Cn=()=>{const r=o["right-icon"];if(e.rightIcon||r)return t.createVNode("div",{class:E("right-icon"),onClick:pn},[r?r():t.createVNode(N,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Bn=()=>{if(e.showWordLimit&&e.maxlength){const r=te(u());return t.createVNode("div",{class:E("word-limit")},[t.createVNode("span",{class:E("word-num")},[r]),t.createTextVNode("/"),e.maxlength])}},Sn=()=>{if(s&&s.props.showErrorMessage===!1)return;const r=e.errorMessage||i.validateMessage;if(r){const m=o["error-message"],g=d("errorMessageAlign");return t.createVNode("div",{class:E("error-message",g)},[m?m({message:r}):r])}},$n=()=>{const r=d("colon")?":":"";if(o.label)return[o.label(),r];if(e.label)return t.createVNode("label",{id:`${a}-label`,for:Ae()},[e.label+r])},wn=()=>[t.createVNode("div",{class:E("body")},[_n(),h.value&&t.createVNode(N,{ref:c,name:e.clearIcon,class:E("clear")},null),Cn(),o.button&&t.createVNode("div",{class:E("button")},[o.button()])]),Bn(),Sn()];return rt({blur:j,focus:fn,validate:x,formValue:I,resetValidation:S,getValidationStatus:Vn}),t.provide(Ke,{customValue:f,resetValidation:S,validateWithTrigger:C}),t.watch(()=>e.modelValue,()=>{L(u()),S(),C("onChange"),t.nextTick(J)}),t.onMounted(()=>{L(u(),e.formatTrigger),t.nextTick(J)}),Me("touchstart",bn,{target:t.computed(()=>{var r;return(r=c.value)==null?void 0:r.$el})}),()=>{const r=d("disabled"),m=d("labelAlign"),g=$n(),b=kn(),B=()=>m==="top"?[b,g]:g;return t.createVNode(Dt,{size:e.size,class:E({error:De.value,disabled:r,[`label-${m}`]:m}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:yn.value,valueClass:E("value"),titleClass:[E("label",[m,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:b&&m!=="top"?()=>b:null,title:g||m==="top"?B:null,value:wn,extra:o.extra})}}});const Wt=T(Ut),Pn="",q=(e,n)=>{const o=e.__vccOpts||e;for(const[a,i]of n)o[a]=i;return o},ne=t.defineComponent({name:"KvButton",components:{VanButton:wt},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:t.computed(()=>`var(--van-button-${e.type}-background)`)}}}),Ne=()=>{t.useCssVars(e=>({"094aed15":e.textcolor}))},Ie=ne.setup;ne.setup=Ie?(e,n)=>(Ne(),Ie(e,n)):Ne;const vt=ne;function qt(e,n,o,a,i,l){const c=t.resolveComponent("van-button");return t.openBlock(),t.createBlock(c,t.mergeProps({type:e.type,class:{"is-link":e.link}},e.$attrs),t.createSlots({loading:t.withCtx(()=>[t.renderSlot(e.$slots,"loading",{},void 0,!0)]),default:t.withCtx(()=>[t.renderSlot(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:t.withCtx(()=>[t.renderSlot(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const O=q(vt,[["render",qt],["__scopeId","data-v-36fadbb1"]]);O.install=function(e){e.component(O.name,O)};const Yt=t.defineComponent({name:"KvInput",components:{VanField:Wt},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:n}){return{inputValue:t.computed({get:()=>e.modelValue,set:i=>n("update:modelValue",i)}),formatter:i=>{var f;if(e.type!=="number")return i;let l=i;l.substr(0,1)==="0"&&l.length===2&&!l.includes(".")&&(l=l.substr(1,l.length));const c=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return l=(f=l.replace(c,"$1"))!=null?f:"",Number(l)<e.min?e.min:Number(l)>e.max?e.max:l}}}}),Ht={class:"flex-center k-input"};function Zt(e,n,o,a,i,l){const c=t.resolveComponent("van-field");return t.openBlock(),t.createElementBlock("div",Ht,[t.createElementVNode("span",null,t.toDisplayString(e.prefix),1),t.createVNode(c,t.mergeProps({modelValue:e.inputValue,"onUpdate:modelValue":n[0]||(n[0]=f=>e.inputValue=f),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),t.createElementVNode("span",null,t.toDisplayString(e.suffix),1)])}const R=q(Yt,[["render",Zt]]);R.install=function(e){e.component(R.name,R)};const Tn="",Gt=t.defineComponent({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[{label:"\u59D3\u540D",prop:"name"},{label:"\u63D0\u6210\u5360\u6BD4",prop:"rate"},{label:"\u63D0\u6210\u91D1\u989D",prop:"money"}]},data:{type:Array,default:()=>[{name:"123",rate:10,money:20},{name:"456",rate:20,money:40}]}},emits:["row-click"],setup(e,{emit:n}){return{alignStyle:t.computed(()=>`text-align:${e.align}`),clickRow:(i,l)=>n("row-click",i,l)}}}),Jt={class:"k-table bg-white mt10 p20"},Xt={class:"table-content"},Qt={class:"table-header flex"},en={class:"table-body flex"},tn=["onClick"],nn={key:1};function on(e,n,o,a,i,l){return t.openBlock(),t.createElementBlock("div",Jt,[t.createElementVNode("div",Xt,[t.createElementVNode("div",Qt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.columns,c=>(t.openBlock(),t.createElementBlock("div",{key:c.prop,class:"flex1",style:t.normalizeStyle(e.alignStyle)},t.toDisplayString(c.label),5))),128))]),t.createElementVNode("div",en,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.columns,c=>(t.openBlock(),t.createElementBlock("div",{key:c.prop,class:"flex1 column-item"},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.data,(f,s)=>(t.openBlock(),t.createElementBlock("div",{class:"mt10 body-item",style:t.normalizeStyle(e.alignStyle),key:s,onClick:u=>e.clickRow(f,s)},[t.renderSlot(e.$slots,"default",{row:f,index:s},()=>{var u,d;return[e.$slots[(u=c==null?void 0:c.custom)!=null?u:c==null?void 0:c.prop]?t.renderSlot(e.$slots,(d=c.custom)!=null?d:c.prop,{key:0,row:f,index:s},void 0,!0):(t.openBlock(),t.createElementBlock("span",nn,t.toDisplayString(f[c.prop]),1))]},!0)],12,tn))),128))]))),128))])])])}const Y=q(Gt,[["render",on],["__scopeId","data-v-4183cb54"]]);Y.install=function(e){e.component(Y.name,Y)};const Dn="",oe=t.defineComponent({name:"KvTree",components:{VanIcon:N},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:n}){const o=t.computed({get:()=>e.modelValue,set:d=>n("update:modelValue",d)}),a=t.computed(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),i=d=>(d.forEach(h=>{h.showChildren=!1,h[a.value.child]&&i(h[a.value.child])}),d),l=t.ref(e.select),c=d=>{d[a.value.disabled]||(d[a.value.child]&&d.showChildren||(o.value=i(o.value)),d.showChildren=!d.showChildren,l.value=d[a.value.id],f(d))},f=d=>{n("update:select",d[a.value.id]),n("change",d),n("click",d)},s=(d,h)=>d.disabled?"not-allowed":d[a.value.id]===l.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[h]:"",u=t.computed(()=>e.theme);return{list:o,clickItem:c,clickChild:f,getClassName:s,themecolor:u,deaultProps:a}}}),xe=()=>{t.useCssVars(e=>({"80a71366":e.themecolor}))},Pe=oe.setup;oe.setup=Pe?(e,n)=>(xe(),Pe(e,n)):xe;const rn=oe,an={class:"k-tree"},ln=["onClick"],cn={class:"flex-center flex1 tree-item-content"},sn={class:"mr10"};function dn(e,n,o,a,i,l){const c=t.resolveComponent("van-icon"),f=t.resolveComponent("kv-tree");return t.openBlock(),t.createElementBlock("div",an,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.list,s=>(t.openBlock(),t.createElementBlock(t.Fragment,{key:s[e.deaultProps.id]},[t.createElementVNode("div",{class:t.normalizeClass(["tree-item p10 flex-center",e.getClassName(s,e.depth)]),onClick:t.withModifiers(u=>e.clickItem(s,e.depth),["stop"])},[t.createElementVNode("div",cn,[t.createElementVNode("span",sn,t.toDisplayString(s[e.deaultProps.name]),1),s[e.deaultProps.child]?(t.openBlock(),t.createBlock(c,{key:0,name:s.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):t.createCommentVNode("",!0)])],10,ln),s.showChildren&&s[e.deaultProps.child]?(t.openBlock(),t.createBlock(f,{key:0,modelValue:s[e.deaultProps.child],"onUpdate:modelValue":u=>s[e.deaultProps.child]=u,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):t.createCommentVNode("",!0)],64))),128))])}const z=q(rn,[["render",dn],["__scopeId","data-v-31963786"]]);z.install=function(e){e.component(z.name,z)};const H={KvButton:O,KvInput:R,KvTable:Y,KvTree:z,install:()=>{}};function un(e,n,o=0){return e.substr(o,n.length)===n}H.install=function(e){Object.keys(H).forEach(n=>{if(un(n,"K")){const o=H[n];e.component(o.name,o)}})},_.KVant=H,_.KvButton=O,_.KvInput=R,_.KvTree=z,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});