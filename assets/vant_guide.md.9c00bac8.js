import{d as I,_ as F,l as v,ad as q,D as g,o as p,A as D,aa as Q,B as y,r as h,E as B,c as d,z as t,t as C,G as z,a1 as K,F as k,M as w,n as G,a as f,e as m,C as E,K as Y,V as x}from"./chunks/framework.99c4b704.js";import{B as Z,F as J,I as W,P as H,L as X}from"./chunks/index.4db86afb.js";const j=I({name:"KvButton",components:{VanButton:Z},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:v(()=>`var(--van-button-${e.type}-background)`)}}}),L=()=>{q(e=>({"2d1d5fde":e.textcolor}))},O=j.setup;j.setup=O?(e,s)=>(L(),O(e,s)):L;const ee=j;function se(e,s,l,a,c,n){const r=g("van-button");return p(),D(r,B({type:e.type,class:{"is-link":e.link}},e.$attrs),Q({loading:y(()=>[h(e.$slots,"loading",{},void 0,!0)]),default:y(()=>[h(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:y(()=>[h(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const $=F(ee,[["render",se],["__scopeId","data-v-079c94b8"]]);$.install=function(e){e.component($.name,$)};const ae=I({name:"KvInput",components:{VanField:J},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:s}){return{inputValue:v({get:()=>e.modelValue,set:c=>s("update:modelValue",c)}),formatter:c=>{if(e.type!=="number")return c;let n=c;n.substr(0,1)==="0"&&n.length===2&&!n.includes(".")&&(n=n.substr(1,n.length));const r=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return n=n.replace(r,"$1")??"",Number(n)<e.min?e.min:Number(n)>e.max?e.max:n}}}}),te={class:"flex-center k-input"};function ne(e,s,l,a,c,n){const r=g("van-field");return p(),d("div",te,[t("span",null,C(e.prefix),1),z(r,B({modelValue:e.inputValue,"onUpdate:modelValue":s[0]||(s[0]=u=>e.inputValue=u),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),t("span",null,C(e.suffix),1)])}const V=F(ae,[["render",ne]]);V.install=function(e){e.component(V.name,V)};const le=I({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},headerStyle:{type:Object,default:()=>({})},rowStyle:{type:Object,default:()=>({})},border:{type:Boolean,default:!1},showOverflowTooltip:{type:Boolean,default:!1}},emits:["row-click"],setup(e,{emit:s}){return{alignStyle:v(()=>[`text-align:${e.align}`,e.border?"border-bottom: 1px solid #ebedf0;":"",e.rowStyle]),clickRow:(c,n)=>s("row-click",c,n)}}}),oe={class:"k-table bg-white mt10 p20"},re={class:"table-content"},ce={class:"table-body"};function pe(e,s,l,a,c,n){return p(),d("div",oe,[t("div",re,[t("div",{class:"table-header flex",style:K(e.headerStyle)},[(p(!0),d(k,null,w(e.columns,r=>(p(),d("div",{key:r.prop,class:"flex1 table-column",style:K(e.alignStyle)},C(r.label),5))),128))],4),t("div",ce,[(p(!0),d(k,null,w(e.data,(r,u)=>(p(),d("div",{key:u,class:"flex table-column column-item flex-align-center",style:K(e.alignStyle)},[(p(!0),d(k,null,w(e.columns,i=>(p(),d("div",{key:i.prop,class:G(["flex1",{"text-overflow":e.showOverflowTooltip}])},[h(e.$slots,"default",{},()=>[f(C(r[i.prop]),1)],!0)],2))),128))],4))),128))])])])}const N=F(le,[["render",pe],["__scopeId","data-v-33c31dc4"]]);N.install=function(e){e.component(N.name,N)};const R=I({name:"KvTree",components:{VanIcon:W},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:s}){const l=v({get:()=>e.modelValue,set:o=>s("update:modelValue",o)}),a=v(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),c=o=>(o.forEach(A=>{A.showChildren=!1,A[a.value.child]&&c(A[a.value.child])}),o),n=m(e.select),r=o=>{o[a.value.disabled]||(o[a.value.child]&&o.showChildren||(l.value=c(l.value)),o.showChildren=!o.showChildren,n.value=o[a.value.id],u(o))},u=o=>{s("update:select",o[a.value.id]),s("change",o),s("click",o)},i=(o,A)=>o.disabled?"not-allowed":o[a.value.id]===n.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[A]:"",_=v(()=>e.theme);return{list:l,clickItem:r,clickChild:u,getClassName:i,themecolor:_,deaultProps:a}}}),U=()=>{q(e=>({"386c62ec":e.themecolor}))},M=R.setup;R.setup=M?(e,s)=>(U(),M(e,s)):U;const ie=R,de={class:"k-tree"},ue=["onClick"],_e={class:"flex-center flex1 tree-item-content"},fe={class:"mr10"};function ye(e,s,l,a,c,n){const r=g("van-icon"),u=g("kv-tree");return p(),d("div",de,[(p(!0),d(k,null,w(e.list,i=>(p(),d(k,{key:i[e.deaultProps.id]},[t("div",{class:G(["tree-item p10 flex-center",e.getClassName(i,e.depth)]),onClick:Y(_=>e.clickItem(i,e.depth),["stop"])},[t("div",_e,[t("span",fe,C(i[e.deaultProps.name]),1),i[e.deaultProps.child]?(p(),D(r,{key:0,name:i.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):E("",!0)])],10,ue),i.showChildren&&i[e.deaultProps.child]?(p(),D(u,{key:0,modelValue:i[e.deaultProps.child],"onUpdate:modelValue":_=>i[e.deaultProps.child]=_,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):E("",!0)],64))),128))])}const S=F(ie,[["render",ye],["__scopeId","data-v-6398d01e"]]);S.install=function(e){e.component(S.name,S)};const he="/kvuse/assets/data.279b0249.svg",me="/kvuse/assets/loading.793ae8d2.svg",ve="/kvuse/assets/search.d1277fd8.svg";const ge=I({name:"KvStatus",props:{type:{type:String,default:"data"}},setup(e){return{imgUrl:v(()=>new URL(Object.assign({"./svgs/data.svg":he,"./svgs/loading.svg":me,"./svgs/search.svg":ve})[`./svgs/${e.type}.svg`],self.location).href)}}}),Ce={class:"kv-status"},De={class:"error-type flex-center"},be={class:"status-svg"},Fe=["src"],Ae={class:"mt20 flex-center font-size16 status-text"};function ke(e,s,l,a,c,n){return p(),d("div",Ce,[t("div",De,[h(e.$slots,"image",{},()=>[t("div",be,[t("img",{src:e.imgUrl},null,8,Fe)])],!0)]),t("div",Ae,[h(e.$slots,"default",{},void 0,!0)])])}const b=F(ge,[["render",ke],["__scopeId","data-v-72b5b4a6"]]);b.install=function(e){e.component(b.name,b)};const $e={name:"KvList",components:{PullRefresh:H,List:X,KvStatus:b},props:{disabled:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},loadChange:{type:Function,default:()=>{}},refreshChange:{type:Function,default:()=>{}}},setup(e){const s=m([]),l=m(!1),a=m(!1),c=m(!1),n=m(!1),r=m({pageIndex:1,isNullData:!1,isFinished:!1}),u=async()=>{c.value&&(r.value.pageIndex=1,c.value=!1),n.value&&(r.value.pageIndex=1,n.value=!1);const o=await e.loadChange(r.value.pageIndex);l.value=!1,o?r.value={pageIndex:1,isNullData:!1,isFinished:!1,...o}:a.value=!0,o!=null&&o.isFinished&&(a.value=!0)},i=async()=>{a.value=!1,l.value=!0,await e.refreshChange(),u()};return{list:s,onLoad:u,loading:l,finished:a,onRefresh:i,refreshing:c,statusData:r,reset:()=>{a.value=!1,n.value=!0,i()}}}},Ve={class:"kv-list flex-column flex1"},Se={key:0},Te={key:0};function Ie(e,s,l,a,c,n){const r=g("kv-status"),u=g("list"),i=g("pull-refresh");return p(),d("div",Ve,[z(i,{modelValue:a.refreshing,"onUpdate:modelValue":s[1]||(s[1]=_=>a.refreshing=_),disabled:l.disabled,onRefresh:a.onRefresh,class:"kv-pull flex1"},{default:y(()=>[a.loading&&a.statusData.pageIndex===1?(p(),D(r,{key:0,type:"loading"},{image:y(()=>[h(e.$slots,"loading")]),default:y(()=>[e.$slots.loading?E("",!0):(p(),d("span",Se,"Loading..."))]),_:3})):a.statusData.isNullData?(p(),D(r,{key:1},{image:y(()=>[h(e.$slots,"empty")]),default:y(()=>[e.$slots.empty?E("",!0):(p(),d("span",Te,"暂无数据"))]),_:3})):(p(),D(u,B({key:2,loading:a.loading,"onUpdate:loading":s[0]||(s[0]=_=>a.loading=_),finished:a.finished,"finished-text":l.finishedText,offset:200},e.$attrs,{onLoad:a.onLoad}),{default:y(()=>[h(e.$slots,"default")]),_:3},16,["loading","finished","finished-text","onLoad"]))]),_:3},8,["modelValue","disabled","onRefresh"])])}const T=F($e,[["render",Ie]]);T.install=function(e){e.component(T.name,T)};const P={KvButton:$,KvInput:V,KvTable:N,KvTree:S,KvList:T,KvStatus:b,install:()=>{}};function we(e,s,l=0){return e.substr(l,s.length)===s}P.install=function(e){Object.keys(P).forEach(s=>{if(we(s,"K")){const l=P[s];e.component(l.name,l)}})};const Ne=Object.freeze(Object.defineProperty({__proto__:null,KVant:P,KvButton:$,KvInput:V,KvList:T,KvStatus:b,KvTree:S},Symbol.toStringTag,{value:"Module"})),Pe=x(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h2><p>vue3组件库</p><p>基于vant二次开发，根据项目需求，方便项目开发使用</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-bpscK" id="tab-KC0M6ao" checked="checked"><label for="tab-KC0M6ao">npm</label><input type="radio" name="group-bpscK" id="tab-Qo1xx4_"><label for="tab-Qo1xx4_">yarn</label><input type="radio" name="group-bpscK" id="tab-uMV1ZgG"><label for="tab-uMV1ZgG">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div></div></div><h2 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">KUI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/vant</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/components/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(KUI)</span></span></code></pre></div><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2>`,9),Ee={class:"language-js"},xe=t("button",{title:"Copy Code",class:"copy"},null,-1),Ke=t("span",{class:"lang"},"js",-1),Be={class:"shiki material-theme-palenight"},je=t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")],-1),Re={class:"line"},Le={style:{color:"#A6ACCD"}},Oe=x('<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>',1),Ue=t("span",{class:"line"},null,-1),Me=x('<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),qe=x('<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),ze={class:"line"},Ge={style:{color:"#A6ACCD"}},Qe=t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"},")],-1),Ye=t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"};")],-1),Xe=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","lastUpdated":1681352261000}'),Ze={name:"vant/guide.md"},es=Object.assign(Ze,{setup(e){const s=[];Object.keys(Ne).forEach(a=>{s.push(a)});const l=(a=2)=>`${s.map(c=>" ".repeat(a)+c).join(", ").replace(/, /g,`,
`)}`;return(a,c)=>(p(),d("div",null,[Pe,t("div",Ee,[xe,Ke,t("pre",Be,[t("code",null,[je,f(`
`),t("span",Re,[t("span",Le,C(l()),1)]),f(`
`),Oe,f(`
`),Ue,f(`
`),Me,f(`
`),qe,f(`
`),t("span",ze,[t("span",Ge,C(l(4))+"  ",1)]),f(`
`),Qe,f(`
`),Ye])])])]))}});export{Xe as __pageData,es as default};
