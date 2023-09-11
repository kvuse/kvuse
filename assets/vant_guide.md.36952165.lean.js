import{_ as O,d as U,g as V,a7 as re,C as Q,o as i,b as F,a5 as de,w,r as S,L as N,c as y,k as s,t as T,H as D,N as Z,F as Y,D as L,n as W,e as z,h as C,Z as ue,l as k,aA as X,aB as me,an as ee,j as _e,a as E,O as ve,Q as q}from"./chunks/framework.2a76f7fa.js";import{B as pe,F as fe,I as ce,L as ye,P as he,a as ge,b as be,C as G,R as Ee,c as ke}from"./chunks/index.29b8bb8f.js";const se=U({name:"KvButton",components:{VanButton:pe},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:V(()=>`var(--van-button-${e.type}-background)`)}}}),ae=()=>{re(e=>({"2d1d5fde":e.textcolor}))},ne=se.setup;se.setup=ne?(e,a)=>(ae(),ne(e,a)):ae;function $e(e,a,p,t,o,n){const c=Q("van-button");return i(),F(c,N({type:e.type,class:{"is-link":e.link}},e.$attrs),de({loading:w(()=>[S(e.$slots,"loading",{},void 0,!0)]),default:w(()=>[S(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:w(()=>[S(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const A=O(se,[["render",$e],["__scopeId","data-v-079c94b8"]]);A.install=function(e){e.component(A.name,A)};const Ce=U({name:"KvInput",components:{VanField:fe},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:a}){return{inputValue:V({get:()=>e.modelValue,set:o=>a("update:modelValue",o)}),formatter:o=>{if(e.type!=="number")return o;let n=o;n.substr(0,1)==="0"&&n.length===2&&!n.includes(".")&&(n=n.substr(1,n.length));const c=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return n=n.replace(c,"$1")??"",Number(n)<e.min?e.min:Number(n)>e.max?e.max:n}}}}),Ve={class:"flex-center k-input"};function we(e,a,p,t,o,n){const c=Q("van-field");return i(),y("div",Ve,[s("span",null,T(e.prefix),1),D(c,N({modelValue:e.inputValue,"onUpdate:modelValue":a[0]||(a[0]=v=>e.inputValue=v),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),s("span",null,T(e.suffix),1)])}const x=O(Ce,[["render",we]]);x.install=function(e){e.component(x.name,x)};const De=U({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},headerStyle:{type:Object,default:()=>({})},rowStyle:{type:Object,default:()=>({})},border:{type:Boolean,default:!1},showOverflowTooltip:{type:Boolean,default:!1},emptyText:{type:String,default:"暂无数据"}},emits:["row-click"],setup(e,{emit:a}){return{columnStyle:V(()=>function(o){const n=Number(o.width)?`${o.width}px`:o.width;return[`text-align:${e.align}`,e.border?"border-bottom: 1px solid #ebedf0;padding-bottom: 6px":"",e.rowStyle,o.width?`width: ${n}`:"flex: 1"]}),clickRow:(o,n)=>a("row-click",o,n)}}}),Te={class:"k-table bg-white mt10 p20"},Fe={class:"table-content"},Se={class:"table-body"},Ne={key:1},Pe={key:0,class:"flex-center p20"},Ie={class:"color-99"};function Ye(e,a,p,t,o,n){return i(),y("div",Te,[s("div",Fe,[s("div",{class:"table-header flex",style:Z(e.headerStyle)},[(i(!0),y(Y,null,L(e.columns,c=>(i(),y("div",{key:c.prop,class:"table-column",style:Z(e.columnStyle(c))},T(c.label),5))),128))],4),s("div",Se,[(i(!0),y(Y,null,L(e.data,(c,v)=>(i(),y("div",{key:v,class:"flex table-column column-item flex-align-center"},[(i(!0),y(Y,null,L(e.columns,l=>(i(),y("div",{key:l.prop,style:Z(e.columnStyle(l)),class:W({"text-overflow":e.showOverflowTooltip})},[e.$slots[(l==null?void 0:l.custom)??(l==null?void 0:l.prop)]?S(e.$slots,l.custom??l.prop,{key:0,row:c,index:v},void 0,!0):(i(),y("span",Ne,T(c[l.prop]),1))],6))),128))]))),128)),e.data.length?z("",!0):(i(),y("div",Pe,[S(e.$slots,"empty",{},()=>[s("span",Ie,T(e.emptyText),1)],!0)]))])])])}const B=O(De,[["render",Ye],["__scopeId","data-v-8a3470b0"]]);B.install=function(e){e.component(B.name,B)};const te=U({name:"KvTree",components:{VanIcon:ce},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:a}){const p=V({get:()=>e.modelValue,set:r=>a("update:modelValue",r)}),t=V(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),o=r=>(r.forEach(_=>{_.showChildren=!1,_[t.value.child]&&o(_[t.value.child])}),r),n=C(e.select),c=r=>{r[t.value.disabled]||(r[t.value.child]&&r.showChildren||(p.value=o(p.value)),r.showChildren=!r.showChildren,n.value=r[t.value.id],v(r))},v=r=>{a("update:select",r[t.value.id]),a("change",r),a("click",r)},l=(r,_)=>r.disabled?"not-allowed":r[t.value.id]===n.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[_]:"",g=V(()=>e.theme);return{list:p,clickItem:c,clickChild:v,getClassName:l,themecolor:g,deaultProps:t}}}),le=()=>{re(e=>({"386c62ec":e.themecolor}))},oe=te.setup;te.setup=oe?(e,a)=>(le(),oe(e,a)):le;const Ae={class:"k-tree"},xe=["onClick"],Be={class:"flex-center flex1 tree-item-content"},je={class:"mr10"};function Ke(e,a,p,t,o,n){const c=Q("van-icon"),v=Q("kv-tree");return i(),y("div",Ae,[(i(!0),y(Y,null,L(e.list,l=>(i(),y(Y,{key:l[e.deaultProps.id]},[s("div",{class:W(["tree-item p10 flex-center",e.getClassName(l,e.depth)]),onClick:ue(g=>e.clickItem(l,e.depth),["stop"])},[s("div",Be,[s("span",je,T(l[e.deaultProps.name]),1),l[e.deaultProps.child]?(i(),F(c,{key:0,name:l.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):z("",!0)])],10,xe),l.showChildren&&l[e.deaultProps.child]?(i(),F(v,{key:0,modelValue:l[e.deaultProps.child],"onUpdate:modelValue":g=>l[e.deaultProps.child]=g,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):z("",!0)],64))),128))])}const j=O(te,[["render",Ke],["__scopeId","data-v-6398d01e"]]);j.install=function(e){e.component(j.name,j)};const Me="/kvuse/assets/data.e4014c9d.png",Oe="/kvuse/assets/fail.cdb60a62.png",Ue="/kvuse/assets/loading.eca596c0.png";const qe=U({name:"KvStatus",props:{type:{type:String,default:"data"}},setup(e){return{imgUrl:V(()=>new URL(Object.assign({"./images/data.png":Me,"./images/fail.png":Oe,"./images/loading.png":Ue})[`./images/${e.type}.png`],self.location).href)}}}),Re={class:"kv-status flex-column"},Le={class:"error-type flex-center"},He={class:"status-svg"},Qe=["src"],ze={class:"mt20 flex-center font-size16 status-text"};function Ze(e,a,p,t,o,n){return i(),y("div",Re,[s("div",Le,[S(e.$slots,"image",{},()=>[s("div",He,[s("img",{src:e.imgUrl,class:"status-image"},null,8,Qe)])],!0)]),s("div",ze,[S(e.$slots,"default",{},void 0,!0)])])}const I=O(qe,[["render",Ze],["__scopeId","data-v-75841381"]]);I.install=function(e){e.component(I.name,I)};const Xe={class:"kv-list flex-column flex1"},K=Object.assign({name:"KvList"},{__name:"main",props:{modelValue:{type:Number,default:1},disabled:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},loadRequest:{type:Function,default:()=>{}},responseNames:{type:Object,default:()=>({})},refreshChange:{type:Function,default:()=>{}}},setup(e,{expose:a}){const p=e,t=C(!1),o=C(!1),n=C([]),c=C(1),v=C(!1),l=C(!1),g=C(!1),r=(h,b={})=>{const d={...{pageNo:"pageNo",totalPage:"totalPage",records:"records"},...p.responseNames};return b[d[h]]},_=async()=>{g.value&&await p.refreshChange();const h=await p.loadRequest(c.value);g.value=!1,t.value=!1;const b=r("pageNo",h)??1,m=r("totalPage",h)??1,d=r("records",h)??[];n.value=c.value===1?d:[...n.value,...d],l.value=!n.value.length,b>=m&&(o.value=!0),c.value++,v.value=!1},$=()=>{c.value=1,n.value=[],v.value=!0,l.value=!1,o.value=!1,t.value=!0,_()},u=async()=>{await p.refreshChange(),$()};return a({reset:$}),(h,b)=>(i(),y("div",Xe,[D(k(he),{modelValue:g.value,"onUpdate:modelValue":b[1]||(b[1]=m=>g.value=m),disabled:e.disabled,onRefresh:u,class:"kv-pull flex1"},{default:w(()=>[t.value&&(v.value||c.value===1)?(i(),F(k(I),{key:0,type:"loading"},{image:w(()=>[S(h.$slots,"loading")]),_:3})):l.value?(i(),F(k(I),{key:1},{image:w(()=>[S(h.$slots,"empty")]),_:3})):(i(),F(k(ye),N({key:2,loading:t.value,"onUpdate:loading":b[0]||(b[0]=m=>t.value=m),finished:o.value,"finished-text":e.finishedText,onLoad:_},h.$attrs),{default:w(()=>[S(h.$slots,"default",{list:n.value})]),_:3},16,["loading","finished","finished-text"]))]),_:3},8,["modelValue","disabled"])]))}});K.install=function(e){e.component(K.name,K)};function ie(e,a){var $;const p=($=X(me(),"YYYY-MM-DD"))==null?void 0:$.value,t=C(`${p} 00:00:00`),o=C(`${p} 23:59:59`),n=new Date(new Date().getTime()+24*60*60*1e3),c=u=>u&&typeof u=="string"?new Date(u):u,v=new Date().getFullYear(),l=new Date(v-3,1,1),g=V(()=>{const u=e.type??"range";if(u==="range"){const{startTime:h,endTime:b}=a.value||{};return[c(h)??new Date,c(b)??new Date]}return u==="multiple"?null:c(a.value)??new Date});return{minDate:l,maxDate:n,initalDate:g,startData:t,endDate:o,useDateFormat:X,formarData:(u,h="YYYY-MM-DD HH:mm:ss")=>{var b;return(b=X(u,h))==null?void 0:b.value},formatter:u=>(new Date().getTime()===new Date(u.date).getTime()&&(u.type="disabled"),u),setStringToDate:c}}const Ge={class:"edit-content"},Je={class:"left-icon"},We=["value"],J={__name:"picker-edit",props:{modelValue:{type:[String,Date],default:""},showFormat:{type:String,default:"YYYY-MM-DD"}},emits:["update:modelValue"],setup(e,{emit:a}){const p=e,{formarData:t,setStringToDate:o}=ie(),n=ee(),c=V({get:()=>p.modelValue?t(o(p.modelValue),n.showFormat??p.showFormat):"",set:l=>a("update:modelValue",l)}),v=V(()=>({"picker-border":["round-border","border"].includes(n.shape),"picker-border-round":["round-border","round"].includes(n.shape)}));return(l,g)=>(i(),y("div",N({class:["picker-edit flex-align-center flex",[v.value]]},l.$attrs),[s("div",Ge,[s("div",Je,[(l.$attrs.showIcon,i(),F(k(ce),{key:0,name:"underway-o"}))])]),s("input",{class:"edit-control",value:c.value,disabled:"",placeholder:"开始时间"},null,8,We)],16))}};const es={class:"date-shortcuts mr10 flex-shrink"},ss={__name:"shortcuts",props:{shortcutsValue:{type:Number,default:-1}},emits:["confirm","change"],setup(e,{emit:a}){const p=e,t=C(!1),o=[{text:"昨天",value:1},{text:"今天",value:0},{text:"近7天",value:7},{text:"近一个月",value:30},{text:"近3个月",value:90}],n=ee(),c=V(()=>["round","round-border"].includes(n.shape)),v=V(()=>["round","default"].includes(n.shape)),l=C("选择范围");_e(()=>{const r=o.find(_=>_.value===p.shortcutsValue);r&&(l.value=r.text,g({selectedValues:[r.value],selectedOptions:[r]}))});const g=({selectedValues:r,selectedOptions:_})=>{const[$]=_;l.value=$.text,t.value=!1;const[u]=r,b=new Date().getTime()-3600*1e3*24*u;a("confirm",{value:b,select:u})};return(r,_)=>(i(),y("div",es,[D(k(pe),{round:c.value,onClick:_[0]||(_[0]=$=>t.value=!0),class:W({"bg-button":v.value})},{default:w(()=>[E(T(l.value),1)]),_:1},8,["round","class"]),D(k(be),{show:t.value,"onUpdate:show":_[2]||(_[2]=$=>t.value=$),position:"bottom","safe-area-inset-bottom":""},{default:w(()=>[D(k(ge),{columns:o,onConfirm:g,onCancel:_[1]||(_[1]=$=>t.value=!1)})]),_:1},8,["show"])]))}},ts={class:"k-date-picker flex-align-center"},M=Object.assign({name:"KvDatePicker"},{__name:"main",props:{modelValue:{type:[Object,String],default:()=>({})},showShortcuts:{type:Boolean,default:!1},shortcutsValue:{type:Number,default:-1}},emits:["update:modelValue","confirm"],setup(e,{emit:a}){const p=e,t=V({get:()=>p.modelValue,set:m=>a("update:modelValue",m)}),o=C(!1),n=ee(),c=V(()=>n.type??"range"),{minDate:v,maxDate:l,initalDate:g,formarData:r,formatter:_,setStringToDate:$}=ie(n,t),u=C(g.value),h=m=>{const d=c.value,f=n.valueFormat??"YYYY-MM-DD HH:mm:ss";if(d==="range"){const P=r(m[0],f),R=f==="YYYY-MM-DD HH:mm:ss"?`${r(m[1],"YYYY-MM-DD")} 23:59:59`:`${r(m[1],f)}`;t.value={startTime:P,endTime:R},u.value=[new Date(P),new Date(R)]}else if(d==="multiple"){const P=m.map(R=>`${r(R,f)}`);t.value=P,u.value=P}else t.value=r(m,f),u.value=$(t.value);o.value=!1,ve(()=>a("confirm",t.value))},b=({value:m,select:d})=>{const f=`${r(m,"YYYY-MM-DD")} 00:00:00`,P=d===1?f:`${r(new Date,"YYYY-MM-DD")} 23:59:00`;t.value={startTime:f,endTime:P},h([f,P])};return(m,d)=>(i(),y("div",ts,[e.showShortcuts&&c.value==="range"?(i(),F(ss,N({key:0},m.$attrs,{"shortcuts-value":e.shortcutsValue,onConfirm:b}),null,16,["shortcuts-value"])):z("",!0),["single"].includes(m.$attrs.type)?(i(),F(J,N({key:1},m.$attrs,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=f=>t.value=f),onClick:d[1]||(d[1]=f=>o.value=!0)}),null,16,["modelValue"])):(i(),F(k(Ee),{key:2,justify:"space-between"},{default:w(()=>[D(k(G),{span:"11",class:"calendar-col",onClick:d[3]||(d[3]=f=>o.value=!0)},{default:w(()=>[D(J,N(m.$attrs,{modelValue:t.value.startTime,"onUpdate:modelValue":d[2]||(d[2]=f=>t.value.startTime=f)}),null,16,["modelValue"])]),_:1}),D(k(G),{span:"1",class:"calendar-line"}),D(k(G),{span:"11",class:"calendar-col",onClick:d[5]||(d[5]=f=>o.value=!0)},{default:w(()=>[D(J,N({placeholder:"结束日期"},m.$attrs,{modelValue:t.value.endTime,"onUpdate:modelValue":d[4]||(d[4]=f=>t.value.endTime=f)}),null,16,["modelValue"])]),_:1})]),_:1})),D(k(ke),N({teleport:"body",class:"overflow",show:o.value,"onUpdate:show":d[6]||(d[6]=f=>o.value=f),type:"range",onConfirm:h,"allow-same-day":"","max-date":k(l),"min-date":k(v),formatter:k(_),"safe-area-inset-bottom":"","default-date":u.value},m.$attrs),null,16,["show","max-date","min-date","formatter","default-date"])]))}});M.install=function(e){e.component(M.name,M)};const H={KvButton:A,KvInput:x,KvTable:B,KvTree:j,KvList:K,KvStatus:I,KvDatePicker:M,install:()=>{}};function as(e,a,p=0){return e.substr(p,a.length)===a}H.install=function(e){Object.keys(H).forEach(a=>{if(as(a,"K")){const p=H[a];e.component(p.name,p)}})};const ns=Object.freeze(Object.defineProperty({__proto__:null,KVant:H,KvButton:A,KvDatePicker:M,KvInput:x,KvList:K,KvStatus:I,KvTable:B,KvTree:j},Symbol.toStringTag,{value:"Module"})),ls=q("",9),os={class:"language-js vp-adaptive-theme"},rs=s("button",{title:"Copy Code",class:"copy"},null,-1),ps=s("span",{class:"lang"},"js",-1),cs={class:"shiki github-dark vp-code-dark"},is=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {")],-1),ds={class:"line"},us={style:{color:"#E1E4E8"}},ms=q("",1),_s=s("span",{class:"line"},null,-1),vs=q("",1),fs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")],-1),ys={class:"line"},hs={style:{color:"#E1E4E8"}},gs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")],-1),bs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")],-1),Es={class:"shiki github-light vp-code-light"},ks=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {")],-1),$s={class:"line"},Cs={style:{color:"#24292E"}},Vs=q("",1),ws=s("span",{class:"line"},null,-1),Ds=q("",1),Ts=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")],-1),Fs={class:"line"},Ss={style:{color:"#24292E"}},Ns=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")],-1),Ps=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")],-1),xs=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","filePath":"vant/guide.md","lastUpdated":1687956598000}'),Is={name:"vant/guide.md"},Bs=Object.assign(Is,{setup(e){const a=[];Object.keys(ns).forEach(t=>{a.push(t)});const p=(t=2)=>`${a.map(o=>" ".repeat(t)+o).join(", ").replace(/, /g,`,
`)}`;return(t,o)=>(i(),y("div",null,[ls,s("div",os,[rs,ps,s("pre",cs,[s("code",null,[is,E(`
`),s("span",ds,[s("span",us,T(p()),1)]),E(`
`),ms,E(`
`),_s,E(`
`),vs,E(`
`),fs,E(`
`),s("span",ys,[s("span",hs,T(p(4))+"  ",1)]),E(`
`),gs,E(`
`),bs])]),s("pre",Es,[s("code",null,[ks,E(`
`),s("span",$s,[s("span",Cs,T(p()),1)]),E(`
`),Vs,E(`
`),ws,E(`
`),Ds,E(`
`),Ts,E(`
`),s("span",Fs,[s("span",Ss,T(p(4))+"  ",1)]),E(`
`),Ns,E(`
`),Ps])])])]))}});export{xs as __pageData,Bs as default};
