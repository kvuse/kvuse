import{d as $,_ as S,l as h,ad as R,D as k,o as c,A as N,aa as Y,B as T,r as I,E as x,c as d,z as a,t as y,G as z,a1 as w,F as m,M as F,n as U,i as M,C as B,K as W,a as _,V}from"./chunks/framework.dd29ee09.js";import{B as J,F as L,I as G}from"./chunks/index.6565d95d.js";const P=$({name:"KvButton",components:{VanButton:J},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:h(()=>`var(--van-button-${e.type}-background)`)}}}),j=()=>{R(e=>({"2d1d5fde":e.textcolor}))},O=P.setup;P.setup=O?(e,s)=>(j(),O(e,s)):j;const H=P;function Q(e,s,o,t,p,n){const i=k("van-button");return c(),N(i,x({type:e.type,class:{"is-link":e.link}},e.$attrs),Y({loading:T(()=>[I(e.$slots,"loading",{},void 0,!0)]),default:T(()=>[I(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:T(()=>[I(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const C=S(H,[["render",Q],["__scopeId","data-v-079c94b8"]]);C.install=function(e){e.component(C.name,C)};const X=$({name:"KvInput",components:{VanField:L},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:s}){return{inputValue:h({get:()=>e.modelValue,set:p=>s("update:modelValue",p)}),formatter:p=>{if(e.type!=="number")return p;let n=p;n.substr(0,1)==="0"&&n.length===2&&!n.includes(".")&&(n=n.substr(1,n.length));const i=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return n=n.replace(i,"$1")??"",Number(n)<e.min?e.min:Number(n)>e.max?e.max:n}}}}),Z={class:"flex-center k-input"};function ee(e,s,o,t,p,n){const i=k("van-field");return c(),d("div",Z,[a("span",null,y(e.prefix),1),z(i,x({modelValue:e.inputValue,"onUpdate:modelValue":s[0]||(s[0]=u=>e.inputValue=u),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),a("span",null,y(e.suffix),1)])}const D=S(X,[["render",ee]]);D.install=function(e){e.component(D.name,D)};const se=$({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},headerStyle:{type:Object,default:()=>({})},rowStyle:{type:Object,default:()=>({})},border:{type:Boolean,default:!1},showOverflowTooltip:{type:Boolean,default:!1}},emits:["row-click"],setup(e,{emit:s}){return{alignStyle:h(()=>[`text-align:${e.align}`,e.border?"border-bottom: 1px solid #ebedf0;":"",e.rowStyle]),clickRow:(p,n)=>s("row-click",p,n)}}}),ae={class:"k-table bg-white mt10 p20"},ne={class:"table-content"},te={class:"table-body"};function le(e,s,o,t,p,n){return c(),d("div",ae,[a("div",ne,[a("div",{class:"table-header flex",style:w(e.headerStyle)},[(c(!0),d(m,null,F(e.columns,i=>(c(),d("div",{key:i.prop,class:"flex1 table-column",style:w(e.alignStyle)},y(i.label),5))),128))],4),a("div",te,[(c(!0),d(m,null,F(e.data,(i,u)=>(c(),d("div",{key:u,class:"flex table-column flex-align-center",style:w(e.alignStyle)},[(c(!0),d(m,null,F(e.columns,r=>(c(),d("div",{key:r.prop,class:U(["flex1",{"text-overflow":e.showOverflowTooltip}])},y(i[r.prop]),3))),128))],4))),128))])])])}const A=S(se,[["render",le],["__scopeId","data-v-80bd591d"]]);A.install=function(e){e.component(A.name,A)};const E=$({name:"KvTree",components:{VanIcon:G},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:s}){const o=h({get:()=>e.modelValue,set:l=>s("update:modelValue",l)}),t=h(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),p=l=>(l.forEach(f=>{f.showChildren=!1,f[t.value.child]&&p(f[t.value.child])}),l),n=M(e.select),i=l=>{l[t.value.disabled]||(l[t.value.child]&&l.showChildren||(o.value=p(o.value)),l.showChildren=!l.showChildren,n.value=l[t.value.id],u(l))},u=l=>{s("update:select",l[t.value.id]),s("change",l),s("click",l)},r=(l,f)=>l.disabled?"not-allowed":l[t.value.id]===n.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[f]:"",v=h(()=>e.theme);return{list:o,clickItem:i,clickChild:u,getClassName:r,themecolor:v,deaultProps:t}}}),K=()=>{R(e=>({"386c62ec":e.themecolor}))},q=E.setup;E.setup=q?(e,s)=>(K(),q(e,s)):K;const oe=E,pe={class:"k-tree"},re=["onClick"],ce={class:"flex-center flex1 tree-item-content"},ie={class:"mr10"};function de(e,s,o,t,p,n){const i=k("van-icon"),u=k("kv-tree");return c(),d("div",pe,[(c(!0),d(m,null,F(e.list,r=>(c(),d(m,{key:r[e.deaultProps.id]},[a("div",{class:U(["tree-item p10 flex-center",e.getClassName(r,e.depth)]),onClick:W(v=>e.clickItem(r,e.depth),["stop"])},[a("div",ce,[a("span",ie,y(r[e.deaultProps.name]),1),r[e.deaultProps.child]?(c(),N(i,{key:0,name:r.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):B("",!0)])],10,re),r.showChildren&&r[e.deaultProps.child]?(c(),N(u,{key:0,modelValue:r[e.deaultProps.child],"onUpdate:modelValue":v=>r[e.deaultProps.child]=v,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):B("",!0)],64))),128))])}const b=S(oe,[["render",de],["__scopeId","data-v-6398d01e"]]);b.install=function(e){e.component(b.name,b)};const g={KvButton:C,KvInput:D,KvTable:A,KvTree:b,install:()=>{}};function ue(e,s,o=0){return e.substr(o,s.length)===s}g.install=function(e){Object.keys(g).forEach(s=>{if(ue(s,"K")){const o=g[s];e.component(o.name,o)}})};const _e=Object.freeze(Object.defineProperty({__proto__:null,KVant:g,KvButton:C,KvInput:D,KvTree:b},Symbol.toStringTag,{value:"Module"})),ye=V(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h2><p>vue3组件库</p><p>基于vant二次开发，根据项目需求，方便项目开发使用</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-lWiYg" id="tab-z2CJUYf" checked="checked"><label for="tab-z2CJUYf">npm</label><input type="radio" name="group-lWiYg" id="tab-KCARO9S"><label for="tab-KCARO9S">yarn</label><input type="radio" name="group-lWiYg" id="tab-dhAOkDy"><label for="tab-dhAOkDy">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div></div></div><h2 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">KUI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/vant</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/components/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(KUI)</span></span></code></pre></div><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2>`,9),he={class:"language-js"},fe=a("button",{title:"Copy Code",class:"copy"},null,-1),me=a("span",{class:"lang"},"js",-1),Ce={class:"shiki material-theme-palenight"},De=a("span",{class:"line"},[a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")],-1),be={class:"line"},ve={style:{color:"#A6ACCD"}},Fe=V('<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>',1),Ae=a("span",{class:"line"},null,-1),ge=V('<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),ke=V('<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),$e={class:"line"},Se={style:{color:"#A6ACCD"}},Ve=a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"},")],-1),Te=a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"};")],-1),Ee=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","lastUpdated":1681352261000}'),Ie={name:"vant/guide.md"},Be=Object.assign(Ie,{setup(e){const s=[];Object.keys(_e).forEach(t=>{s.push(t)});const o=(t=2)=>`${s.map(p=>" ".repeat(t)+p).join(", ").replace(/, /g,`,
`)}`;return(t,p)=>(c(),d("div",null,[ye,a("div",he,[fe,me,a("pre",Ce,[a("code",null,[De,_(`
`),a("span",be,[a("span",ve,y(o()),1)]),_(`
`),Fe,_(`
`),Ae,_(`
`),ge,_(`
`),ke,_(`
`),a("span",$e,[a("span",Se,y(o(4))+"  ",1)]),_(`
`),Ve,_(`
`),Te])])])]))}});export{Ee as __pageData,Be as default};
