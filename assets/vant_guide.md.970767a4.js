import{f as V,_ as S,c as h,ab as z,D as $,h as i,A as w,a8 as R,B as I,j as C,E as O,i as d,z as a,t as y,G as U,F as D,M as g,a0 as P,r as J,C as B,l as L,K as W,k as _,V as T}from"./chunks/framework.c803e405.js";import{B as x,F as G,I as Y}from"./chunks/index.1aee0aed.js";const E=V({name:"KvButton",components:{VanButton:x},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:h(()=>`var(--van-button-${e.type}-background)`)}}}),j=()=>{z(e=>({"2d1d5fde":e.textcolor}))},K=E.setup;E.setup=K?(e,s)=>(j(),K(e,s)):j;const H=E;function Q(e,s,p,l,c,t){const n=$("van-button");return i(),w(n,O({type:e.type,class:{"is-link":e.link}},e.$attrs),R({loading:I(()=>[C(e.$slots,"loading",{},void 0,!0)]),default:I(()=>[C(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:I(()=>[C(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const b=S(H,[["render",Q],["__scopeId","data-v-079c94b8"]]);b.install=function(e){e.component(b.name,b)};const X=V({name:"KvInput",components:{VanField:G},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:s}){return{inputValue:h({get:()=>e.modelValue,set:c=>s("update:modelValue",c)}),formatter:c=>{if(e.type!=="number")return c;let t=c;t.substr(0,1)==="0"&&t.length===2&&!t.includes(".")&&(t=t.substr(1,t.length));const n=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return t=t.replace(n,"$1")??"",Number(t)<e.min?e.min:Number(t)>e.max?e.max:t}}}}),Z={class:"flex-center k-input"};function ee(e,s,p,l,c,t){const n=$("van-field");return i(),d("div",Z,[a("span",null,y(e.prefix),1),U(n,O({modelValue:e.inputValue,"onUpdate:modelValue":s[0]||(s[0]=u=>e.inputValue=u),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),a("span",null,y(e.suffix),1)])}const v=S(X,[["render",ee]]);v.install=function(e){e.component(v.name,v)};const se=V({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[{label:"姓名",prop:"name"},{label:"提成占比",prop:"rate"},{label:"提成金额",prop:"money"}]},data:{type:Array,default:()=>[{name:"123",rate:10,money:20},{name:"456",rate:20,money:40}]}},emits:["row-click"],setup(e,{emit:s}){return{alignStyle:h(()=>`text-align:${e.align}`),clickRow:(c,t)=>s("row-click",c,t)}}}),ae={class:"k-table bg-white mt10 p20"},ne={class:"table-content"},te={class:"table-header flex"},le={class:"table-body flex"},oe=["onClick"],pe={key:1};function re(e,s,p,l,c,t){return i(),d("div",ae,[a("div",ne,[a("div",te,[(i(!0),d(D,null,g(e.columns,n=>(i(),d("div",{key:n.prop,class:"flex1",style:P(e.alignStyle)},y(n.label),5))),128))]),a("div",le,[(i(!0),d(D,null,g(e.columns,n=>(i(),d("div",{key:n.prop,class:"flex1 column-item"},[(i(!0),d(D,null,g(e.data,(u,r)=>(i(),d("div",{class:"mt10 body-item",style:P(e.alignStyle),key:r,onClick:f=>e.clickRow(u,r)},[C(e.$slots,"default",{row:u,index:r},()=>[e.$slots[(n==null?void 0:n.custom)??(n==null?void 0:n.prop)]?C(e.$slots,n.custom??n.prop,{key:0,row:u,index:r},void 0,!0):(i(),d("span",pe,y(u[n.prop]),1))],!0)],12,oe))),128))]))),128))])])])}const A=S(se,[["render",re],["__scopeId","data-v-12f12616"]]);A.install=function(e){e.component(A.name,A)};const N=V({name:"KvTree",components:{VanIcon:Y},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:s}){const p=h({get:()=>e.modelValue,set:o=>s("update:modelValue",o)}),l=h(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),c=o=>(o.forEach(m=>{m.showChildren=!1,m[l.value.child]&&c(m[l.value.child])}),o),t=J(e.select),n=o=>{o[l.value.disabled]||(o[l.value.child]&&o.showChildren||(p.value=c(p.value)),o.showChildren=!o.showChildren,t.value=o[l.value.id],u(o))},u=o=>{s("update:select",o[l.value.id]),s("change",o),s("click",o)},r=(o,m)=>o.disabled?"not-allowed":o[l.value.id]===t.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[m]:"",f=h(()=>e.theme);return{list:p,clickItem:n,clickChild:u,getClassName:r,themecolor:f,deaultProps:l}}}),M=()=>{z(e=>({"386c62ec":e.themecolor}))},q=N.setup;N.setup=q?(e,s)=>(M(),q(e,s)):M;const ce=N,ie={class:"k-tree"},de=["onClick"],ue={class:"flex-center flex1 tree-item-content"},_e={class:"mr10"};function ye(e,s,p,l,c,t){const n=$("van-icon"),u=$("kv-tree");return i(),d("div",ie,[(i(!0),d(D,null,g(e.list,r=>(i(),d(D,{key:r[e.deaultProps.id]},[a("div",{class:L(["tree-item p10 flex-center",e.getClassName(r,e.depth)]),onClick:W(f=>e.clickItem(r,e.depth),["stop"])},[a("div",ue,[a("span",_e,y(r[e.deaultProps.name]),1),r[e.deaultProps.child]?(i(),w(n,{key:0,name:r.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):B("",!0)])],10,de),r.showChildren&&r[e.deaultProps.child]?(i(),w(u,{key:0,modelValue:r[e.deaultProps.child],"onUpdate:modelValue":f=>r[e.deaultProps.child]=f,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):B("",!0)],64))),128))])}const F=S(ce,[["render",ye],["__scopeId","data-v-6398d01e"]]);F.install=function(e){e.component(F.name,F)};const k={KvButton:b,KvInput:v,KvTable:A,KvTree:F,install:()=>{}};function he(e,s,p=0){return e.substr(p,s.length)===s}k.install=function(e){Object.keys(k).forEach(s=>{if(he(s,"K")){const p=k[s];e.component(p.name,p)}})};const fe=Object.freeze(Object.defineProperty({__proto__:null,KVant:k,KvButton:b,KvInput:v,KvTree:F},Symbol.toStringTag,{value:"Module"})),me=T(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h2><p>vue3组件库</p><p>基于vant二次开发，根据项目需求，方便项目开发使用</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-g8b7D" id="tab-uM10wEJ" checked="checked"><label for="tab-uM10wEJ">npm</label><input type="radio" name="group-g8b7D" id="tab-zzkCSdE"><label for="tab-zzkCSdE">yarn</label><input type="radio" name="group-g8b7D" id="tab-pTWtIdM"><label for="tab-pTWtIdM">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@kvuse/vant</span></span></code></pre></div></div></div><h2 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">KUI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/vant</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/components/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(KUI)</span></span></code></pre></div><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2>`,9),Ce={class:"language-js"},De=a("button",{title:"Copy Code",class:"copy"},null,-1),be=a("span",{class:"lang"},"js",-1),ve={class:"shiki material-theme-palenight"},Fe=a("span",{class:"line"},[a("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")],-1),ge={class:"line"},Ae={style:{color:"#A6ACCD"}},ke=T('<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>',1),$e=a("span",{class:"line"},null,-1),Ve=T('<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),Se=T('<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>',1),Te={class:"line"},Ie={style:{color:"#A6ACCD"}},we=a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"},")],-1),Ee=a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"};")],-1),Ke=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","lastUpdated":1681352261000}'),Ne={name:"vant/guide.md"},Me=Object.assign(Ne,{setup(e){const s=[];Object.keys(fe).forEach(l=>{s.push(l)});const p=(l=2)=>`${s.map(c=>" ".repeat(l)+c).join(", ").replace(/, /g,`,
`)}`;return(l,c)=>(i(),d("div",null,[me,a("div",Ce,[De,be,a("pre",ve,[a("code",null,[Fe,_(`
`),a("span",ge,[a("span",Ae,y(p()),1)]),_(`
`),ke,_(`
`),$e,_(`
`),Ve,_(`
`),Se,_(`
`),a("span",Te,[a("span",Ie,y(p(4))+"  ",1)]),_(`
`),we,_(`
`),Ee])])])]))}});export{Ke as __pageData,Me as default};
