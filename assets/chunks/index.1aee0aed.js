import{X as he,b as Z,y as Fe,c as A,r as I,aq as be,a9 as Et,e as re,o as ve,n as Y,ar as ye,u as U,a5 as ne,ao as Ne,Y as Ee,ae as wt,f as _,G as u,w as St,E as ze,k as xt}from"./framework.c803e405.js";const x=e=>e!=null,ae=e=>typeof e=="function",oe=e=>e!==null&&typeof e=="object",Ct=e=>oe(e)&&ae(e.then)&&ae(e.catch),Zn=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function Kn(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const je=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Bt=()=>we?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Gn(){}const z=Object.assign,we=typeof window<"u";function ke(e,t){const n=t.split(".");let a=e;return n.forEach(r=>{var o;a=oe(a)&&(o=a[r])!=null?o:""}),a}function Jn(e,t,n){return t.reduce((a,r)=>((!n||e[r]!==void 0)&&(a[r]=e[r]),a),{})}const Xn=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Pe=e=>Array.isArray(e)?e:[e],te=null,C=[Number,String],We={type:Boolean,default:!0},Qn=e=>({type:e,required:!0}),ea=()=>({type:Array,default:()=>[]}),ta=e=>({type:Number,default:e}),Tt=e=>({type:C,default:e}),w=e=>({type:String,default:e});var p=typeof window<"u";function ie(e){return p?requestAnimationFrame(e):-1}function kt(e){p&&cancelAnimationFrame(e)}function na(e){ie(()=>ie(e))}var Pt=e=>e===window,Ae=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),At=e=>{const t=U(e);if(Pt(t)){const n=t.innerWidth,a=t.innerHeight;return Ae(n,a)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():Ae(0,0)};function aa(e=!1){const t=I(e);return[t,(a=!t.value)=>{t.value=a}]}function It(e){const t=he(e,null);if(t){const n=Z(),{link:a,unlink:r,internalChildren:o}=t;a(n),Fe(()=>r(n));const f=A(()=>o.indexOf(n));return{parent:t,index:f}}return{parent:null,index:I(-1)}}function Ot(e){const t=[],n=a=>{Array.isArray(a)&&a.forEach(r=>{var o;wt(r)&&(t.push(r),(o=r.component)!=null&&o.subTree&&(t.push(r.component.subTree),n(r.component.subTree.children)),r.children&&n(r.children))})};return n(e),t}var Ie=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(a=>t.key!==void 0&&t.key!==null&&a.type===t.type&&a.key===t.key):n};function $t(e,t,n){const a=Ot(e.subTree.children);n.sort((o,f)=>Ie(a,o.vnode)-Ie(a,f.vnode));const r=n.map(o=>o.proxy);t.sort((o,f)=>{const c=r.indexOf(o),s=r.indexOf(f);return c-s})}function ia(e){const t=ne([]),n=ne([]),a=Z();return{children:t,linkChildren:o=>{Ee(e,Object.assign({link:s=>{s.proxy&&(n.push(s),t.push(s.proxy),$t(a,t,n))},unlink:s=>{const l=n.indexOf(s);t.splice(l,1),n.splice(l,1)},children:t,internalChildren:n},o))}}}var ue=1e3,de=60*ue,fe=60*de,Oe=24*fe;function Dt(e){const t=Math.floor(e/Oe),n=Math.floor(e%Oe/fe),a=Math.floor(e%fe/de),r=Math.floor(e%de/ue),o=Math.floor(e%ue);return{total:e,days:t,hours:n,minutes:a,seconds:r,milliseconds:o}}function pt(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}function ra(e){let t,n,a,r;const o=I(e.time),f=A(()=>Dt(o.value)),c=()=>{a=!1,kt(t)},s=()=>Math.max(n-Date.now(),0),l=E=>{var $,T;o.value=E,($=e.onChange)==null||$.call(e,f.value),E===0&&(c(),(T=e.onFinish)==null||T.call(e))},d=()=>{t=ie(()=>{a&&(l(s()),o.value>0&&d())})},h=()=>{t=ie(()=>{if(a){const E=s();(!pt(E,o.value)||E===0)&&l(E),o.value>0&&h()}})},b=()=>{p&&(e.millisecond?d():h())},R=()=>{a||(n=Date.now()+o.value,a=!0,b())},O=(E=e.time)=>{c(),o.value=E};return Ne(c),ye(()=>{r&&(a=!0,r=!1,b())}),be(()=>{a&&(c(),r=!0)}),{start:R,pause:c,reset:O,current:f}}function Rt(e){let t;ve(()=>{e(),Y(()=>{t=!0})}),ye(()=>{t&&e()})}function qe(e,t,n={}){if(!p)return;const{target:a=window,passive:r=!1,capture:o=!1}=n;let f=!1,c;const s=h=>{if(f)return;const b=U(h);b&&!c&&(b.addEventListener(e,t,{capture:o,passive:r}),c=!0)},l=h=>{if(f)return;const b=U(h);b&&c&&(b.removeEventListener(e,t,o),c=!1)};Fe(()=>l(a)),be(()=>l(a)),Rt(()=>s(a));let d;return Et(a)&&(d=re(a,(h,b)=>{l(b),s(h)})),()=>{d==null||d(),l(a),f=!0}}function oa(e,t,n={}){if(!p)return;const{eventName:a="click"}=n;qe(a,o=>{(Array.isArray(e)?e:[e]).every(s=>{const l=U(s);return l&&!l.contains(o.target)})&&t(o)},{target:document})}var Q,se;function _t(){if(!Q&&(Q=I(0),se=I(0),p)){const e=()=>{Q.value=window.innerWidth,se.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:Q,height:se}}var Vt=/scroll|auto|overlay/i,Ye=p?window:void 0;function Mt(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Lt(e,t=Ye){let n=e;for(;n&&n!==t&&Mt(n);){const{overflowY:a}=window.getComputedStyle(n);if(Vt.test(a))return n;n=n.parentNode}return t}function sa(e,t=Ye){const n=I();return ve(()=>{e.value&&(n.value=Lt(e.value,t))}),n}var ee;function la(){if(!ee&&(ee=I("visible"),p)){const e=()=>{ee.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return ee}var He=Symbol("van-field");function ca(e){const t=he(He,null);t&&!t.customValue.value&&(t.customValue.value=e,re(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}function Ft(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function $e(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function Se(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ue(e){$e(window,e),$e(document.body,e)}function ua(e,t){if(e===window)return 0;const n=t?Ft(t):Se();return At(e).top+n}const Nt=Bt();function zt(){Nt&&Ue(Se())}const jt=e=>e.stopPropagation();function ge(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&jt(e)}function da(e){const t=U(e);if(!t)return!1;const n=window.getComputedStyle(t),a=n.display==="none",r=t.offsetParent===null&&n.position!=="fixed";return a||r}const{width:Wt,height:qt}=_t();function B(e){if(x(e))return je(e)?`${e}px`:String(e)}function Yt(e){if(x(e)){if(Array.isArray(e))return{width:B(e[0]),height:B(e[1])};const t=B(e);return{width:t,height:t}}}function fa(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let le;function Ht(){if(!le){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;le=parseFloat(t)}return le}function Ut(e){return e=e.replace(/rem/g,""),+e*Ht()}function Zt(e){return e=e.replace(/vw/g,""),+e*Wt.value/100}function Kt(e){return e=e.replace(/vh/g,""),+e*qt.value/100}function ga(e){if(typeof e=="number")return e;if(we){if(e.includes("rem"))return Ut(e);if(e.includes("vw"))return Zt(e);if(e.includes("vh"))return Kt(e)}return parseFloat(e)}const Gt=/-(\w)/g,Ze=e=>e.replace(Gt,(t,n)=>n.toUpperCase()),Jt=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function ma(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const ha=(e,t,n)=>Math.min(Math.max(e,t),n);function De(e,t,n){const a=e.indexOf(t);return a===-1?e:t==="-"&&a!==0?e.slice(0,a):e.slice(0,a+1)+e.slice(a).replace(n,"")}function Xt(e,t=!0,n=!0){t?e=De(e,".",/\./g):e=e.split(".")[0],n?e=De(e,"-",/-/g):e=e.replace(/-/,"");const a=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(a,"")}function ba(e,t){return Math.round((e+t)*1e10)/1e10}const{hasOwnProperty:Qt}=Object.prototype;function en(e,t,n){const a=t[n];x(a)&&(!Qt.call(e,n)||!oe(a)?e[n]=a:e[n]=Ke(Object(e[n]),a))}function Ke(e,t){return Object.keys(t).forEach(n=>{en(e,t,n)}),e}var tn={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const pe=I("zh-CN"),Re=ne({"zh-CN":tn}),nn={messages(){return Re[pe.value]},use(e,t){pe.value=e,this.add({[e]:t})},add(e={}){Ke(Re,e)}};var an=nn;function rn(e){const t=Ze(e)+".";return(n,...a)=>{const r=an.messages(),o=ke(r,t+n)||ke(r,n);return ae(o)?o(...a):o}}function me(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,a)=>n+me(e,a),""):Object.keys(t).reduce((n,a)=>n+(t[a]?me(e,a):""),""):""}function on(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${me(t,n)}`)}function V(e){const t=`van-${e}`;return[t,on(t),rn(t)]}const j="van-hairline",va=`${j}--top`,ya=`${j}--left`,Ea=`${j}--bottom`,sn=`${j}--surround`,wa=`${j}--top-bottom`,Sa=`${j}-unset--top-bottom`,xa="van-haptics-feedback",ln=Symbol("van-form"),Ca=500;function W(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Ze(`-${n}`),e))},e}function cn(e){const t=Z();t&&z(t.proxy,e)}const Ge={to:[String,Object],url:String,replace:Boolean};function un({to:e,url:t,replace:n,$router:a}){e&&a?a[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function Je(){const e=Z().proxy;return()=>un(e)}const[dn,_e]=V("badge"),fn={dot:Boolean,max:C,tag:w("div"),color:String,offset:Array,content:C,showZero:We,position:w("top-right")};var gn=_({name:dn,props:fn,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:c,showZero:s}=e;return x(c)&&c!==""&&(s||c!==0&&c!=="0")},a=()=>{const{dot:c,max:s,content:l}=e;if(!c&&n())return t.content?t.content():x(s)&&je(l)&&+l>+s?`${s}+`:l},r=c=>c.startsWith("-")?c.replace("-",""):`-${c}`,o=A(()=>{const c={background:e.color};if(e.offset){const[s,l]=e.offset,{position:d}=e,[h,b]=d.split("-");t.default?(typeof l=="number"?c[h]=B(h==="top"?l:-l):c[h]=h==="top"?B(l):r(l),typeof s=="number"?c[b]=B(b==="left"?s:-s):c[b]=b==="left"?B(s):r(s)):(c.marginTop=B(l),c.marginLeft=B(s))}return c}),f=()=>{if(n()||e.dot)return u("div",{class:_e([e.position,{dot:e.dot,fixed:!!t.default}]),style:o.value},[a()])};return()=>{if(t.default){const{tag:c}=e;return u(c,{class:_e("wrapper")},{default:()=>[t.default(),f()]})}return f()}}});const mn=W(gn);let Xe=2e3;const Ba=()=>++Xe,hn=e=>{Xe=e},[Qe,bn]=V("config-provider"),et=Symbol(Qe),vn={tag:w("div"),theme:w("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function yn(e){const t={};return Object.keys(e).forEach(n=>{t[`--van-${Jt(n)}`]=e[n]}),t}var Ta=_({name:Qe,props:vn,setup(e,{slots:t}){const n=A(()=>yn(z({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(we){const a=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},r=(o=e.theme)=>{document.documentElement.classList.remove(`van-theme-${o}`)};re(()=>e.theme,(o,f)=>{f&&r(f),a()},{immediate:!0}),ye(a),be(r),Ne(r)}return Ee(et,e),St(()=>{e.zIndex!==void 0&&hn(e.zIndex)}),()=>u(e.tag,{class:bn(),style:n.value},{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})}});const[En,Ve]=V("icon"),wn=e=>e==null?void 0:e.includes("/"),Sn={dot:Boolean,tag:w("i"),name:String,size:C,badge:C,color:String,badgeProps:Object,classPrefix:String};var xn=_({name:En,props:Sn,setup(e,{slots:t}){const n=he(et,null),a=A(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||Ve());return()=>{const{tag:r,dot:o,name:f,size:c,badge:s,color:l}=e,d=wn(f);return u(mn,ze({dot:o,tag:r,class:[a.value,d?"":`${a.value}-${f}`],style:{color:l,fontSize:B(c)},content:s},e.badgeProps),{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t),d&&u("img",{class:Ve("image"),src:f},null)]}})}}});const N=W(xn),[Cn,H]=V("loading"),Bn=Array(12).fill(null).map((e,t)=>u("i",{class:H("line",String(t+1))},null)),Tn=u("svg",{class:H("circular"),viewBox:"25 25 50 50"},[u("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),kn={size:C,type:w("circular"),color:String,vertical:Boolean,textSize:C,textColor:String};var Pn=_({name:Cn,props:kn,setup(e,{slots:t}){const n=A(()=>z({color:e.color},Yt(e.size))),a=()=>{const o=e.type==="spinner"?Bn:Tn;return u("span",{class:H("spinner",e.type),style:n.value},[t.icon?t.icon():o])},r=()=>{var o;if(t.default)return u("span",{class:H("text"),style:{fontSize:B(e.textSize),color:(o=e.textColor)!=null?o:e.color}},[t.default()])};return()=>{const{type:o,vertical:f}=e;return u("div",{class:H([o,{vertical:f}]),"aria-live":"polite","aria-busy":!0},[a(),r()])}}});const An=W(Pn),[In,L]=V("button"),On=z({},Ge,{tag:w("button"),text:String,icon:String,type:w("default"),size:w("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:w("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:w("left")});var $n=_({name:In,props:On,emits:["click"],setup(e,{emit:t,slots:n}){const a=Je(),r=()=>n.loading?n.loading():u(An,{size:e.loadingSize,type:e.loadingType,class:L("loading")},null),o=()=>{if(e.loading)return r();if(n.icon)return u("div",{class:L("icon")},[n.icon()]);if(e.icon)return u(N,{name:e.icon,class:L("icon"),classPrefix:e.iconPrefix},null)},f=()=>{let l;if(e.loading?l=e.loadingText:l=n.default?n.default():e.text,l)return u("span",{class:L("text")},[l])},c=()=>{const{color:l,plain:d}=e;if(l){const h={color:d?l:"white"};return d||(h.background=l),l.includes("gradient")?h.border=0:h.borderColor=l,h}},s=l=>{e.loading?ge(l):e.disabled||(t("click",l),a())};return()=>{const{tag:l,type:d,size:h,block:b,round:R,plain:O,square:E,loading:$,disabled:T,hairline:K,nativeType:M,iconPosition:G}=e,q=[L([d,h,{plain:O,block:b,round:R,square:E,loading:$,disabled:T,hairline:K}]),{[sn]:K}];return u(l,{type:M,class:q,style:c(),disabled:T,onClick:s},{default:()=>[u("div",{class:L("content")},[G==="left"&&o(),f(),G==="right"&&o()])]})}}});const ka=W($n);let Dn=0;function pn(){const e=Z(),{name:t="unknown"}=(e==null?void 0:e.type)||{};return`${t}-${++Dn}`}const[Rn,F]=V("cell"),tt={tag:w("div"),icon:String,size:String,title:C,value:C,label:C,center:Boolean,isLink:Boolean,border:We,required:Boolean,iconPrefix:String,valueClass:te,labelClass:te,titleClass:te,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},_n=z({},tt,Ge);var Vn=_({name:Rn,props:_n,setup(e,{slots:t}){const n=Je(),a=()=>{if(t.label||x(e.label))return u("div",{class:[F("label"),e.labelClass]},[t.label?t.label():e.label])},r=()=>{var s;if(t.title||x(e.title)){const l=(s=t.title)==null?void 0:s.call(t);return Array.isArray(l)&&l.length===0?void 0:u("div",{class:[F("title"),e.titleClass],style:e.titleStyle},[l||u("span",null,[e.title]),a()])}},o=()=>{const s=t.value||t.default;if(s||x(e.value))return u("div",{class:[F("value"),e.valueClass]},[s?s():u("span",null,[e.value])])},f=()=>{if(t.icon)return t.icon();if(e.icon)return u(N,{name:e.icon,class:F("left-icon"),classPrefix:e.iconPrefix},null)},c=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const s=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return u(N,{name:s,class:F("right-icon")},null)}};return()=>{var s;const{tag:l,size:d,center:h,border:b,isLink:R,required:O}=e,E=(s=e.clickable)!=null?s:R,$={center:h,required:O,clickable:E,borderless:!b};return d&&($[d]=!!d),u(l,{class:F($),role:E?"button":void 0,tabindex:E?0:void 0,onClick:n},{default:()=>{var T;return[f(),r(),o(),c(),(T=t.extra)==null?void 0:T.call(t)]}})}}});const Mn=W(Vn);function nt(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ln(e,t){if(nt(e)){if(t.required)return!1;if(t.validateEmpty===!1)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}function Fn(e,t){return new Promise(n=>{const a=t.validator(e,t);if(Ct(a)){a.then(n);return}n(a)})}function Me(e,t){const{message:n}=t;return ae(n)?n(e,t):n||""}function Nn({target:e}){e.composing=!0}function Le({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function zn(e,t){const n=Se();e.style.height="auto";let a=e.scrollHeight;if(oe(t)){const{maxHeight:r,minHeight:o}=t;r!==void 0&&(a=Math.min(a,r)),o!==void 0&&(a=Math.max(a,o))}a&&(e.style.height=`${a}px`,Ue(n))}function jn(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function D(e){return[...e].length}function ce(e,t){return[...e].slice(0,t).join("")}const[Wn,k]=V("field"),qn={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:C,formatter:Function,clearIcon:w("clear"),modelValue:Tt(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:w("focus"),formatTrigger:w("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Yn=z({},tt,qn,{rows:C,type:w("text"),rules:Array,autosize:[Boolean,Object],labelWidth:C,labelClass:te,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Hn=_({name:Wn,props:Yn,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:n}){const a=pn(),r=ne({status:"unvalidated",focused:!1,validateMessage:""}),o=I(),f=I(),c=I(),{parent:s}=It(ln),l=()=>{var i;return String((i=e.modelValue)!=null?i:"")},d=i=>{if(x(e[i]))return e[i];if(s&&x(s.props[i]))return s.props[i]},h=A(()=>{const i=d("readonly");if(e.clearable&&!i){const m=l()!=="",g=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return m&&g}return!1}),b=A(()=>c.value&&n.input?c.value():e.modelValue),R=i=>i.reduce((m,g)=>m.then(()=>{if(r.status==="failed")return;let{value:v}=b;if(g.formatter&&(v=g.formatter(v,g)),!Ln(v,g)){r.status="failed",r.validateMessage=Me(v,g);return}if(g.validator)return nt(v)&&g.validateEmpty===!1?void 0:Fn(v,g).then(y=>{y&&typeof y=="string"?(r.status="failed",r.validateMessage=y):y===!1&&(r.status="failed",r.validateMessage=Me(v,g))})}),Promise.resolve()),O=()=>{r.status="unvalidated",r.validateMessage=""},E=()=>t("endValidate",{status:r.status,message:r.validateMessage}),$=(i=e.rules)=>new Promise(m=>{O(),i?(t("startValidate"),R(i).then(()=>{r.status==="failed"?(m({name:e.name,message:r.validateMessage}),E()):(r.status="passed",m(),E())})):m()}),T=i=>{if(s&&e.rules){const{validateTrigger:m}=s.props,g=Pe(m).includes(i),v=e.rules.filter(y=>y.trigger?Pe(y.trigger).includes(i):g);v.length&&$(v)}},K=i=>{var m;const{maxlength:g}=e;if(x(g)&&D(i)>+g){const v=l();if(v&&D(v)===+g)return v;const y=(m=o.value)==null?void 0:m.selectionEnd;if(r.focused&&y){const S=[...i],P=S.length-+g;return S.splice(y-P,P),S.join("")}return ce(i,+g)}return i},M=(i,m="onChange")=>{const g=i;i=K(i);const v=D(g)-D(i);if(e.type==="number"||e.type==="digit"){const S=e.type==="number";i=Xt(i,S,S)}let y=0;if(e.formatter&&m===e.formatTrigger){const{formatter:S,maxlength:P}=e;if(i=S(i),x(P)&&D(i)>+P&&(i=ce(i,+P)),o.value&&r.focused){const{selectionEnd:X}=o.value,Te=ce(g,X);y=D(S(Te))-D(Te)}}if(o.value&&o.value.value!==i)if(r.focused){let{selectionStart:S,selectionEnd:P}=o.value;if(o.value.value=i,x(S)&&x(P)){const X=D(i);v?(S-=v,P-=v):y&&(S+=y,P+=y),o.value.setSelectionRange(Math.min(S,X),Math.min(P,X))}}else o.value.value=i;i!==e.modelValue&&t("update:modelValue",i)},G=i=>{i.target.composing||M(i.target.value)},q=()=>{var i;return(i=o.value)==null?void 0:i.blur()},at=()=>{var i;return(i=o.value)==null?void 0:i.focus()},J=()=>{const i=o.value;e.type==="textarea"&&e.autosize&&i&&zn(i,e.autosize)},it=i=>{r.focused=!0,t("focus",i),Y(J),d("readonly")&&q()},rt=i=>{r.focused=!1,M(l(),"onBlur"),t("blur",i),!d("readonly")&&(T("onBlur"),Y(J),zt())},xe=i=>t("clickInput",i),ot=i=>t("clickLeftIcon",i),st=i=>t("clickRightIcon",i),lt=i=>{ge(i),t("update:modelValue",""),t("clear",i)},Ce=A(()=>{if(typeof e.error=="boolean")return e.error;if(s&&s.props.showError&&r.status==="failed")return!0}),ct=A(()=>{const i=d("labelWidth"),m=d("labelAlign");if(i&&m!=="top")return{width:B(i)}}),ut=i=>{i.keyCode===13&&(!(s&&s.props.submitOnEnter)&&e.type!=="textarea"&&ge(i),e.type==="search"&&q()),t("keypress",i)},Be=()=>e.id||`${a}-input`,dt=()=>r.status,ft=()=>{const i=k("control",[d("inputAlign"),{error:Ce.value,custom:!!n.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(n.input)return u("div",{class:i,onClick:xe},[n.input()]);const m={id:Be(),ref:o,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:i,disabled:d("disabled"),readonly:d("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${a}-label`:void 0,onBlur:rt,onFocus:it,onInput:G,onClick:xe,onChange:Le,onKeypress:ut,onCompositionend:Le,onCompositionstart:Nn};return e.type==="textarea"?u("textarea",m,null):u("input",ze(jn(e.type),m),null)},gt=()=>{const i=n["left-icon"];if(e.leftIcon||i)return u("div",{class:k("left-icon"),onClick:ot},[i?i():u(N,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},mt=()=>{const i=n["right-icon"];if(e.rightIcon||i)return u("div",{class:k("right-icon"),onClick:st},[i?i():u(N,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ht=()=>{if(e.showWordLimit&&e.maxlength){const i=D(l());return u("div",{class:k("word-limit")},[u("span",{class:k("word-num")},[i]),xt("/"),e.maxlength])}},bt=()=>{if(s&&s.props.showErrorMessage===!1)return;const i=e.errorMessage||r.validateMessage;if(i){const m=n["error-message"],g=d("errorMessageAlign");return u("div",{class:k("error-message",g)},[m?m({message:i}):i])}},vt=()=>{const i=d("labelWidth"),m=d("labelAlign"),g=d("colon")?":":"";if(n.label)return[n.label(),g];if(e.label)return u("label",{id:`${a}-label`,for:Be(),style:m==="top"&&i?{width:B(i)}:void 0},[e.label+g])},yt=()=>[u("div",{class:k("body")},[ft(),h.value&&u(N,{ref:f,name:e.clearIcon,class:k("clear")},null),mt(),n.button&&u("div",{class:k("button")},[n.button()])]),ht(),bt()];return cn({blur:q,focus:at,validate:$,formValue:b,resetValidation:O,getValidationStatus:dt}),Ee(He,{customValue:c,resetValidation:O,validateWithTrigger:T}),re(()=>e.modelValue,()=>{M(l()),O(),T("onChange"),Y(J)}),ve(()=>{M(l(),e.formatTrigger),Y(J)}),qe("touchstart",lt,{target:A(()=>{var i;return(i=f.value)==null?void 0:i.$el})}),()=>{const i=d("disabled"),m=d("labelAlign"),g=gt(),v=()=>{const y=vt();return m==="top"?[g,y].filter(Boolean):y||[]};return u(Mn,{size:e.size,class:k({error:Ce.value,disabled:i,[`label-${m}`]:m}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ct.value,valueClass:k("value"),titleClass:[k("label",[m,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:g&&m!=="top"?()=>g:null,title:v,value:yt,extra:n.extra})}}});const Pa=W(Hn);export{ta as $,Jn as A,ka as B,ha as C,Qn as D,ie as E,Pa as F,Ft as G,xa as H,N as I,$e as J,we as K,An as L,Tt as M,sa as N,ga as O,da as P,la as Q,na as R,pn as S,B as T,wa as U,Ue as V,ua as W,un as X,Xn as Y,Sa as Z,ln as _,qt as a,oe as a0,ca as a1,Mn as a2,Kn as a3,ma as a4,aa as a5,Zn as a6,kt as a7,Yt as a8,tt as a9,Ta as aa,ra as ab,ae as ac,ya as ad,va as ae,oa as af,j as ag,Ca as ah,Se as ai,Ea as aj,jt as ak,sn as al,qn as am,ba as an,Xt as ao,zt as ap,Pe as aq,nn as ar,ia as b,V as c,W as d,z as e,Je as f,It as g,cn as h,Ct as i,C as j,te as k,mn as l,Lt as m,Gn as n,Rt as o,ge as p,qe as q,Ge as r,fa as s,We as t,At as u,x as v,Wt as w,w as x,Ba as y,ea as z};