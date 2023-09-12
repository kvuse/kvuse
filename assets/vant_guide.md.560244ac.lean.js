import{_ as O,d as U,g as w,a7 as re,C as z,o as i,b as F,a5 as de,w as D,r as S,L as N,c as y,k as s,t as T,H as V,N as J,F as Y,D as q,n as Z,e as G,h as C,Z as ue,l as k,aA as Q,aB as me,an as ee,j as _e,a as E,O as fe,Q as R}from"./chunks/framework.2a76f7fa.js";import{B as pe,F as ve,I as ce,L as ye,P as he,a as ge,b as be,C as X,R as Ee,c as ke}from"./chunks/index.29b8bb8f.js";const se=U({name:"KvButton",components:{VanButton:pe},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:w(()=>`var(--van-button-${e.type}-background)`)}}}),ae=()=>{re(e=>({"2d1d5fde":e.textcolor}))},ne=se.setup;se.setup=ne?(e,a)=>(ae(),ne(e,a)):ae;function $e(e,a,p,t,o,n){const c=z("van-button");return i(),F(c,N({type:e.type,class:{"is-link":e.link}},e.$attrs),de({loading:D(()=>[S(e.$slots,"loading",{},void 0,!0)]),default:D(()=>[S(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:D(()=>[S(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const B=O(se,[["render",$e],["__scopeId","data-v-079c94b8"]]);B.install=function(e){e.component(B.name,B)};const Ce=U({name:"KvInput",components:{VanField:ve},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:a}){return{inputValue:w({get:()=>e.modelValue,set:o=>a("update:modelValue",o)}),formatter:o=>{if(e.type!=="number")return o;let n=o;n.substr(0,1)==="0"&&n.length===2&&!n.includes(".")&&(n=n.substr(1,n.length));const c=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return n=n.replace(c,"$1")??"",Number(n)<e.min?e.min:Number(n)>e.max?e.max:n}}}}),we={class:"flex-center k-input"};function De(e,a,p,t,o,n){const c=z("van-field");return i(),y("div",we,[s("span",null,T(e.prefix),1),V(c,N({modelValue:e.inputValue,"onUpdate:modelValue":a[0]||(a[0]=f=>e.inputValue=f),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),s("span",null,T(e.suffix),1)])}const x=O(Ce,[["render",De]]);x.install=function(e){e.component(x.name,x)};const Ve=U({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},headerStyle:{type:Object,default:()=>({})},rowStyle:{type:Object,default:()=>({})},border:{type:Boolean,default:!1},showOverflowTooltip:{type:Boolean,default:!1},emptyText:{type:String,default:"暂无数据"}},emits:["row-click"],setup(e,{emit:a}){return{columnStyle:w(()=>function(o){const n=Number(o.width)?`${o.width}px`:o.width;return[`text-align:${e.align}`,e.border?"border-bottom: 1px solid #ebedf0;padding-bottom: 6px":"",e.rowStyle,o.width?`width: ${n}`:"flex: 1"]}),clickRow:(o,n)=>a("row-click",o,n)}}}),Te={class:"k-table bg-white mt10 p20"},Fe={class:"table-content"},Se={class:"table-body"},Ne={key:1},Pe={key:0,class:"flex-center p20"},Ie={class:"color-99"};function Ye(e,a,p,t,o,n){return i(),y("div",Te,[s("div",Fe,[s("div",{class:"table-header flex",style:J(e.headerStyle)},[(i(!0),y(Y,null,q(e.columns,c=>(i(),y("div",{key:c.prop,class:"table-column",style:J(e.columnStyle(c))},T(c.label),5))),128))],4),s("div",Se,[(i(!0),y(Y,null,q(e.data,(c,f)=>(i(),y("div",{key:f,class:"flex table-column column-item flex-align-center"},[(i(!0),y(Y,null,q(e.columns,l=>(i(),y("div",{key:l.prop,style:J(e.columnStyle(l)),class:Z({"text-overflow":e.showOverflowTooltip})},[e.$slots[(l==null?void 0:l.custom)??(l==null?void 0:l.prop)]?S(e.$slots,l.custom??l.prop,{key:0,row:c,index:f},void 0,!0):(i(),y("span",Ne,T(c[l.prop]),1))],6))),128))]))),128)),e.data.length?G("",!0):(i(),y("div",Pe,[S(e.$slots,"empty",{},()=>[s("span",Ie,T(e.emptyText),1)],!0)]))])])])}const A=O(Ve,[["render",Ye],["__scopeId","data-v-8a3470b0"]]);A.install=function(e){e.component(A.name,A)};const te=U({name:"KvTree",components:{VanIcon:ce},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:a}){const p=w({get:()=>e.modelValue,set:r=>a("update:modelValue",r)}),t=w(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),o=r=>(r.forEach(_=>{_.showChildren=!1,_[t.value.child]&&o(_[t.value.child])}),r),n=C(e.select),c=r=>{r[t.value.disabled]||(r[t.value.child]&&r.showChildren||(p.value=o(p.value)),r.showChildren=!r.showChildren,n.value=r[t.value.id],f(r))},f=r=>{a("update:select",r[t.value.id]),a("change",r),a("click",r)},l=(r,_)=>r.disabled?"not-allowed":r[t.value.id]===n.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[_]:"",g=w(()=>e.theme);return{list:p,clickItem:c,clickChild:f,getClassName:l,themecolor:g,deaultProps:t}}}),le=()=>{re(e=>({"386c62ec":e.themecolor}))},oe=te.setup;te.setup=oe?(e,a)=>(le(),oe(e,a)):le;const Be={class:"k-tree"},xe=["onClick"],Ae={class:"flex-center flex1 tree-item-content"},Me={class:"mr10"};function je(e,a,p,t,o,n){const c=z("van-icon"),f=z("kv-tree");return i(),y("div",Be,[(i(!0),y(Y,null,q(e.list,l=>(i(),y(Y,{key:l[e.deaultProps.id]},[s("div",{class:Z(["tree-item p10 flex-center",e.getClassName(l,e.depth)]),onClick:ue(g=>e.clickItem(l,e.depth),["stop"])},[s("div",Ae,[s("span",Me,T(l[e.deaultProps.name]),1),l[e.deaultProps.child]?(i(),F(c,{key:0,name:l.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):G("",!0)])],10,xe),l.showChildren&&l[e.deaultProps.child]?(i(),F(f,{key:0,modelValue:l[e.deaultProps.child],"onUpdate:modelValue":g=>l[e.deaultProps.child]=g,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):G("",!0)],64))),128))])}const M=O(te,[["render",je],["__scopeId","data-v-6398d01e"]]);M.install=function(e){e.component(M.name,M)};const Ke="/kvuse/assets/data.e4014c9d.png",Oe="/kvuse/assets/fail.cdb60a62.png",Ue="/kvuse/assets/loading.eca596c0.png";const Re=U({name:"KvStatus",props:{type:{type:String,default:"data"}},setup(e){return{imgUrl:w(()=>new URL(Object.assign({"./images/data.png":Ke,"./images/fail.png":Oe,"./images/loading.png":Ue})[`./images/${e.type}.png`],self.location).href)}}}),Le={class:"kv-status flex-column"},qe={class:"error-type flex-center"},He={class:"status-svg"},ze=["src"],Ge={class:"mt20 flex-center font-size16 status-text"};function Je(e,a,p,t,o,n){return i(),y("div",Le,[s("div",qe,[S(e.$slots,"image",{},()=>[s("div",He,[s("img",{src:e.imgUrl,class:"status-image"},null,8,ze)])],!0)]),s("div",Ge,[S(e.$slots,"default",{},void 0,!0)])])}const I=O(Re,[["render",Je],["__scopeId","data-v-75841381"]]);I.install=function(e){e.component(I.name,I)};const Qe={class:"kv-list flex-column flex1"},j=Object.assign({name:"KvList"},{__name:"main",props:{modelValue:{type:Number,default:1},disabled:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},loadRequest:{type:Function,default:()=>{}},responseNames:{type:Object,default:()=>({})},refreshChange:{type:Function,default:()=>{}}},setup(e,{expose:a}){const p=e,t=C(!1),o=C(!1),n=C([]),c=C(1),f=C(!1),l=C(!1),g=C(!1),r=(h,b={})=>{const d={...{pageNo:"pageNo",totalPage:"totalPage",records:"records"},...p.responseNames};return b[d[h]]},_=async()=>{g.value&&await p.refreshChange();const h=await p.loadRequest(c.value);g.value=!1,t.value=!1;const b=r("pageNo",h)??1,m=r("totalPage",h)??1,d=r("records",h)??[];n.value=c.value===1?d:[...n.value,...d],l.value=!n.value.length,b>=m&&(o.value=!0),c.value++,f.value=!1},$=()=>{c.value=1,n.value=[],f.value=!0,l.value=!1,o.value=!1,t.value=!0,_()},u=async()=>{await p.refreshChange(),$()};return a({reset:$}),(h,b)=>(i(),y("div",Qe,[V(k(he),{modelValue:g.value,"onUpdate:modelValue":b[1]||(b[1]=m=>g.value=m),disabled:e.disabled,onRefresh:u,class:"kv-pull flex1"},{default:D(()=>[t.value&&(f.value||c.value===1)?(i(),F(k(I),{key:0,type:"loading"},{image:D(()=>[S(h.$slots,"loading")]),_:3})):l.value?(i(),F(k(I),{key:1},{image:D(()=>[S(h.$slots,"empty")]),_:3})):(i(),F(k(ye),N({key:2,loading:t.value,"onUpdate:loading":b[0]||(b[0]=m=>t.value=m),finished:o.value,"finished-text":e.finishedText,onLoad:_},h.$attrs),{default:D(()=>[S(h.$slots,"default",{list:n.value})]),_:3},16,["loading","finished","finished-text"]))]),_:3},8,["modelValue","disabled"])]))}});j.install=function(e){e.component(j.name,j)};function ie(e,a){var $;const p=($=Q(me(),"YYYY-MM-DD"))==null?void 0:$.value,t=C(`${p} 00:00:00`),o=C(`${p} 23:59:59`),n=new Date(new Date().getTime()+24*60*60*1e3),c=u=>u&&typeof u=="string"?new Date(u):u,f=new Date().getFullYear(),l=new Date(f-3,1,1),g=w(()=>{const u=e.type??"range";if(u==="range"){const{startTime:h,endTime:b}=a.value||{};return[c(h)??new Date,c(b)??new Date]}return u==="multiple"?null:c(a.value)??new Date});return{minDate:l,maxDate:n,initalDate:g,startData:t,endDate:o,useDateFormat:Q,formarData:(u,h="YYYY-MM-DD HH:mm:ss")=>{var b;return(b=Q(u,h))==null?void 0:b.value},formatter:u=>(new Date().getTime()===new Date(u.date).getTime()&&(u.type="disabled"),u),setStringToDate:c}}const Xe={class:"edit-content"},We={class:"left-icon"},Ze=["value"],W={__name:"picker-edit",props:{modelValue:{type:[String,Date],default:""},showFormat:{type:String,default:"YYYY-MM-DD"}},emits:["update:modelValue"],setup(e,{emit:a}){const p=e,{formarData:t,setStringToDate:o}=ie(),n=ee(),c=w({get:()=>p.modelValue?t(o(p.modelValue),n.showFormat??p.showFormat):"",set:l=>a("update:modelValue",l)}),f=w(()=>({"picker-border":["round-border","border"].includes(n.shape),"picker-border-round":["round-border","round"].includes(n.shape)}));return(l,g)=>(i(),y("div",N({class:["picker-edit flex-align-center flex",[f.value]]},l.$attrs),[s("div",Xe,[s("div",We,[(l.$attrs.showIcon,i(),F(k(ce),{key:0,name:"underway-o"}))])]),s("input",{class:"edit-control",value:c.value,disabled:"",placeholder:"开始时间"},null,8,Ze)],16))}};const es={class:"date-shortcuts mr10 flex-shrink"},ss={__name:"shortcuts",props:{shortcutsValue:{type:Number,default:-1}},emits:["confirm","change"],setup(e,{emit:a}){const p=e,t=C(!1),o=[{text:"昨天",value:1},{text:"今天",value:0},{text:"近7天",value:7},{text:"近一个月",value:30},{text:"近3个月",value:90}],n=ee(),c=w(()=>["round","round-border"].includes(n.shape)),f=w(()=>["round","default"].includes(n.shape)),l=C("选择范围");_e(()=>{const r=o.find(_=>_.value===p.shortcutsValue);r&&(l.value=r.text,g({selectedValues:[r.value],selectedOptions:[r]}))});const g=({selectedValues:r,selectedOptions:_})=>{const[$]=_;l.value=$.text,t.value=!1;const[u]=r,b=new Date().getTime()-3600*1e3*24*u;a("confirm",{value:b,select:u})};return(r,_)=>(i(),y("div",es,[V(k(pe),{round:c.value,onClick:_[0]||(_[0]=$=>t.value=!0),class:Z({"bg-button":f.value})},{default:D(()=>[E(T(l.value),1)]),_:1},8,["round","class"]),V(k(be),{show:t.value,"onUpdate:show":_[2]||(_[2]=$=>t.value=$),position:"bottom","safe-area-inset-bottom":""},{default:D(()=>[V(k(ge),{columns:o,onConfirm:g,onCancel:_[1]||(_[1]=$=>t.value=!1)})]),_:1},8,["show"])]))}},ts={class:"k-date-picker flex-align-center"},K=Object.assign({name:"KvDatePicker"},{__name:"main",props:{modelValue:{type:[Object,String],default:()=>({})},showShortcuts:{type:Boolean,default:!1},shortcutsValue:{type:Number,default:-1}},emits:["update:modelValue","confirm"],setup(e,{emit:a}){const p=e,t=w({get:()=>p.modelValue,set:m=>a("update:modelValue",m)}),o=C(!1),n=ee(),c=w(()=>n.type??"range"),{minDate:f,maxDate:l,initalDate:g,formarData:r,formatter:_,setStringToDate:$}=ie(n,t),u=C(g.value),h=m=>{const d=c.value,v=n.valueFormat??"YYYY-MM-DD HH:mm:ss";if(d==="range"){const P=r(m[0],v),L=v==="YYYY-MM-DD HH:mm:ss"?`${r(m[1],"YYYY-MM-DD")} 23:59:59`:`${r(m[1],v)}`;t.value={startTime:P,endTime:L},u.value=[new Date(P),new Date(L)]}else if(d==="multiple"){const P=m.map(L=>`${r(L,v)}`);t.value=P,u.value=P}else t.value=r(m,v),u.value=$(t.value);o.value=!1,fe(()=>a("confirm",t.value))},b=({value:m,select:d})=>{const v=`${r(m,"YYYY-MM-DD")} 00:00:00`,P=d===1?v:`${r(new Date,"YYYY-MM-DD")} 23:59:00`;t.value={startTime:v,endTime:P},h([v,P])};return(m,d)=>(i(),y("div",ts,[e.showShortcuts&&c.value==="range"?(i(),F(ss,N({key:0},m.$attrs,{"shortcuts-value":e.shortcutsValue,onConfirm:b}),null,16,["shortcuts-value"])):G("",!0),["single"].includes(m.$attrs.type)?(i(),F(W,N({key:1},m.$attrs,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=v=>t.value=v),onClick:d[1]||(d[1]=v=>o.value=!0)}),null,16,["modelValue"])):(i(),F(k(Ee),{key:2,justify:"space-between"},{default:D(()=>[V(k(X),{span:"11",class:"calendar-col",onClick:d[3]||(d[3]=v=>o.value=!0)},{default:D(()=>[V(W,N(m.$attrs,{modelValue:t.value.startTime,"onUpdate:modelValue":d[2]||(d[2]=v=>t.value.startTime=v)}),null,16,["modelValue"])]),_:1}),V(k(X),{span:"1",class:"calendar-line"}),V(k(X),{span:"11",class:"calendar-col",onClick:d[5]||(d[5]=v=>o.value=!0)},{default:D(()=>[V(W,N({placeholder:"结束日期"},m.$attrs,{modelValue:t.value.endTime,"onUpdate:modelValue":d[4]||(d[4]=v=>t.value.endTime=v)}),null,16,["modelValue"])]),_:1})]),_:1})),V(k(ke),N({teleport:"body",class:"overflow",show:o.value,"onUpdate:show":d[6]||(d[6]=v=>o.value=v),type:"range",onConfirm:h,"allow-same-day":"","max-date":k(l),"min-date":k(f),formatter:k(_),"safe-area-inset-bottom":"","default-date":u.value},m.$attrs),null,16,["show","max-date","min-date","formatter","default-date"])]))}});K.install=function(e){e.component(K.name,K)};const H={KvButton:B,KvInput:x,KvTable:A,KvTree:M,KvList:j,KvStatus:I,KvDatePicker:K,install:()=>{}};function as(e,a,p=0){return e.substr(p,a.length)===a}H.install=function(e){Object.keys(H).forEach(a=>{if(as(a,"K")){const p=H[a];e.component(p.name,p)}})};const ns=Object.freeze(Object.defineProperty({__proto__:null,KVant:H,KvButton:B,KvDatePicker:K,KvInput:x,KvList:j,KvStatus:I,KvTable:A,KvTree:M},Symbol.toStringTag,{value:"Module"})),ls=R("",9),os={class:"language-js vp-adaptive-theme"},rs=s("button",{title:"Copy Code",class:"copy"},null,-1),ps=s("span",{class:"lang"},"js",-1),cs={class:"shiki github-dark vp-code-dark"},is=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {")],-1),ds={class:"line"},us={style:{color:"#E1E4E8"}},ms=R("",1),_s=s("span",{class:"line"},null,-1),fs=R("",1),vs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")],-1),ys={class:"line"},hs={style:{color:"#E1E4E8"}},gs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")],-1),bs=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")],-1),Es={class:"shiki github-light vp-code-light"},ks=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {")],-1),$s={class:"line"},Cs={style:{color:"#24292E"}},ws=R("",1),Ds=s("span",{class:"line"},null,-1),Vs=R("",1),Ts=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")],-1),Fs={class:"line"},Ss={style:{color:"#24292E"}},Ns=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")],-1),Ps=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")],-1),xs=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","filePath":"vant/guide.md","lastUpdated":1687956598000}'),Is={name:"vant/guide.md"},As=Object.assign(Is,{setup(e){const a=[];Object.keys(ns).forEach(t=>{a.push(t)});const p=(t=2)=>`${a.map(o=>" ".repeat(t)+o).join(", ").replace(/, /g,`,
`)}`;return(t,o)=>(i(),y("div",null,[ls,s("div",os,[rs,ps,s("pre",cs,[s("code",null,[is,E(`
`),s("span",ds,[s("span",us,T(p()),1)]),E(`
`),ms,E(`
`),_s,E(`
`),fs,E(`
`),vs,E(`
`),s("span",ys,[s("span",hs,T(p(4))+"  ",1)]),E(`
`),gs,E(`
`),bs])]),s("pre",Es,[s("code",null,[ks,E(`
`),s("span",$s,[s("span",Cs,T(p()),1)]),E(`
`),ws,E(`
`),Ds,E(`
`),Vs,E(`
`),Ts,E(`
`),s("span",Fs,[s("span",Ss,T(p(4))+"  ",1)]),E(`
`),Ns,E(`
`),Ps])])])]))}});export{xs as __pageData,As as default};
