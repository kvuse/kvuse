import{_ as R,d as q,a9 as oe,D as Z,o as u,b as T,a8 as ce,w as D,M as N,g as w,r as V,c as _,k as n,t as P,I as C,O as J,F as I,E as H,e as U,n as X,h as E,a1 as he,m as $,aF as G,aG as me,as as ee,j as fe,a as S,P as ve,R as re}from"./chunks/framework.1elGDiSs.js";import{B as de,F as ke,I as ue,L as ge,P as ye,a as _e,b as be,C as Q,R as $e,c as Ee}from"./chunks/index.6o_eARo2.js";const te=q({name:"KvButton",components:{VanButton:de},props:{type:{type:String,default:"default",validate:e=>["primary","success","warning","danger","text"].includes(e)},link:{type:Boolean,default:!1}},setup(e){return{textcolor:w(()=>`var(--van-button-${e.type}-background)`)}}}),ae=()=>{oe(e=>({"2d1d5fde":e.textcolor}))},ne=te.setup;te.setup=ne?(e,a)=>(ae(),ne(e,a)):ae;function we(e,a,l,r,t,s){const i=Z("van-button");return u(),T(i,N({type:e.type,class:{"is-link":e.link}},e.$attrs),ce({loading:D(()=>[V(e.$slots,"loading",{},void 0,!0)]),default:D(()=>[V(e.$slots,"default",{},void 0,!0)]),_:2},[e.$attrs.icon?void 0:{name:"icon",fn:D(()=>[V(e.$slots,"icon",{},void 0,!0)]),key:"0"}]),1040,["type","class"])}const j=R(te,[["render",we],["__scopeId","data-v-079c94b8"]]);j.install=function(e){e.component(j.name,j)};const De=q({name:"KvInput",components:{VanField:ke},props:{modelValue:{type:[Number,String],default:""},point:{type:Number,default:2},type:{type:String,default:"number"},prefix:{type:String,default:""},suffix:{type:String,default:""},min:{type:Number,default:Number.NEGATIVE_INFINITY},max:{type:Number,default:Number.POSITIVE_INFINITY}},emits:["update:modelValue","clear"],setup(e,{emit:a}){return{inputValue:w({get:()=>e.modelValue,set:t=>a("update:modelValue",t)}),formatter:t=>{if(e.type!=="number")return t;let s=t;s.substr(0,1)==="0"&&s.length===2&&!s.includes(".")&&(s=s.substr(1,s.length));const i=new RegExp(`[^0-9]{0,1}(\\d*(?:\\.\\d{0,${e.point}})?).*$`,"g");return s=s.replace(i,"$1")??"",Number(s)<e.min?e.min:Number(s)>e.max?e.max:s}}}}),Ce={class:"flex-center k-input"};function Ve(e,a,l,r,t,s){const i=Z("van-field");return u(),_("div",Ce,[n("span",null,P(e.prefix),1),C(i,N({modelValue:e.inputValue,"onUpdate:modelValue":a[0]||(a[0]=h=>e.inputValue=h),type:e.type},e.$attrs,{formatter:e.formatter}),null,16,["modelValue","type","formatter"]),n("span",null,P(e.suffix),1)])}const M=R(De,[["render",Ve]]);M.install=function(e){e.component(M.name,M)};const Fe=q({name:"KvTable",props:{align:{type:String,default:"left",validate:e=>["left","center","right"].includes(e)},columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},headerStyle:{type:Object,default:()=>({})},rowStyle:{type:Object,default:()=>({})},border:{type:Boolean,default:!1},showOverflowTooltip:{type:Boolean,default:!1},emptyText:{type:String,default:"暂无数据"}},emits:["row-click"],setup(e,{emit:a}){return{columnStyle:w(()=>function(t){const s=Number(t.width)?`${t.width}px`:t.width;return[`text-align:${e.align}`,e.border?"border-bottom: 1px solid #ebedf0;padding-bottom: 6px":"",e.rowStyle,t.width?`width: ${s}`:"flex: 1"]}),clickRow:(t,s)=>a("row-click",t,s)}}}),Te={class:"k-table bg-white mt10 p20"},Se={class:"table-content"},Ne={class:"table-body"},Pe={key:1},Ye={key:0,class:"flex-center p20"},Be={class:"color-99"};function Ie(e,a,l,r,t,s){return u(),_("div",Te,[n("div",Se,[n("div",{class:"table-header flex",style:J(e.headerStyle)},[(u(!0),_(I,null,H(e.columns,i=>(u(),_("div",{key:i.prop,class:"table-column",style:J(e.columnStyle(i))},P(i.label),5))),128))],4),n("div",Ne,[(u(!0),_(I,null,H(e.data,(i,h)=>(u(),_("div",{key:h,class:"flex table-column column-item flex-align-center"},[(u(!0),_(I,null,H(e.columns,o=>(u(),_("div",{key:o.prop,style:J(e.columnStyle(o)),class:X({"text-overflow":e.showOverflowTooltip})},[e.$slots[(o==null?void 0:o.custom)??(o==null?void 0:o.prop)]?V(e.$slots,o.custom??o.prop,{key:0,row:i,index:h},void 0,!0):(u(),_("span",Pe,P(i[o.prop]),1))],6))),128))]))),128)),e.data.length?U("",!0):(u(),_("div",Ye,[V(e.$slots,"empty",{},()=>[n("span",Be,P(e.emptyText),1)],!0)]))])])])}const A=R(Fe,[["render",Ie],["__scopeId","data-v-8a3470b0"]]);A.install=function(e){e.component(A.name,A)};const se=q({name:"KvTree",components:{VanIcon:ue},props:{modelValue:{type:Array,default:()=>[]},depth:{type:Number,default:0},props:{type:Object,default:()=>({})},theme:{type:String,default:"#f4364c"},select:{type:[String,Number],default:""}},emits:["update:modelValue","update:select","click","change"],setup(e,{emit:a}){const l=w({get:()=>e.modelValue,set:d=>a("update:modelValue",d)}),r=w(()=>({name:"name",id:"id",child:"child",disabled:"disabled",...e.props})),t=d=>(d.forEach(p=>{p.showChildren=!1,p[r.value.child]&&t(p[r.value.child])}),d),s=E(e.select),i=d=>{d[r.value.disabled]||(d[r.value.child]&&d.showChildren||(l.value=t(l.value)),d.showChildren=!d.showChildren,s.value=d[r.value.id],h(d))},h=d=>{a("update:select",d[r.value.id]),a("change",d),a("click",d)},o=(d,p)=>d.disabled?"not-allowed":d[r.value.id]===s.value?{0:"first-depth c-white",1:"second-depth c-white",2:"third-depth c-white"}[p]:"",m=w(()=>e.theme);return{list:l,clickItem:i,clickChild:h,getClassName:o,themecolor:m,deaultProps:r}}}),le=()=>{oe(e=>({"289c5ebe":e.themecolor}))},ie=se.setup;se.setup=ie?(e,a)=>(le(),ie(e,a)):le;const je={class:"k-tree"},Me=["onClick"],Ae={class:"flex-center flex1 tree-item-content"},Ke={class:"mr10"};function xe(e,a,l,r,t,s){const i=Z("van-icon"),h=Z("kv-tree");return u(),_("div",je,[(u(!0),_(I,null,H(e.list,o=>(u(),_(I,{key:o[e.deaultProps.id]},[n("div",{class:X(["tree-item p10 flex-center",e.getClassName(o,e.depth)]),onClick:he(m=>e.clickItem(o,e.depth),["stop"])},[V(e.$slots,"default",{row:o},()=>[n("div",Ae,[n("span",Ke,P(o[e.deaultProps.name]),1),o[e.deaultProps.child]?(u(),T(i,{key:0,name:o.showChildren?"arrow-up":"arrow-down"},null,8,["name"])):U("",!0)])],!0)],10,Me),o.showChildren&&o[e.deaultProps.child]?(u(),T(h,{key:0,modelValue:o[e.deaultProps.child],"onUpdate:modelValue":m=>o[e.deaultProps.child]=m,props:e.deaultProps,theme:e.theme,depth:e.depth+1,onClick:e.clickChild},null,8,["modelValue","onUpdate:modelValue","props","theme","depth","onClick"])):U("",!0)],64))),128))])}const K=R(se,[["render",xe],["__scopeId","data-v-e744c818"]]);K.install=function(e){e.component(K.name,K)};const Oe="/kvuse/assets/data.EuuvQhHU.png",Ue="/kvuse/assets/fail.lfhnDZIf.png",Re="/kvuse/assets/loading.bkyzZl1k.png",qe=q({name:"KvStatus",props:{type:{type:String,default:"data"}},setup(e){return{imgUrl:w(()=>new URL(Object.assign({"./images/data.png":Oe,"./images/fail.png":Ue,"./images/loading.png":Re})[`./images/${e.type}.png`],import.meta.url).href)}}}),Le={class:"kv-status flex-column"},He={class:"error-type flex-center"},ze={class:"status-svg"},Ze=["src"],Je={class:"mt20 flex-center font-size16 status-text"};function Ge(e,a,l,r,t,s){return u(),_("div",Le,[n("div",He,[V(e.$slots,"image",{},()=>[n("div",ze,[n("img",{src:e.imgUrl,class:"status-image"},null,8,Ze)])],!0)]),n("div",Je,[V(e.$slots,"default",{},void 0,!0)])])}const B=R(qe,[["render",Ge],["__scopeId","data-v-75841381"]]);B.install=function(e){e.component(B.name,B)};const Qe={class:"kv-list flex-column flex1"},x=Object.assign({name:"KvList"},{__name:"main",props:{modelValue:{type:Number,default:1},disabled:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},loadRequest:{type:Function,default:()=>{}},responseNames:{type:Object,default:()=>({})},refreshChange:{type:Function,default:()=>{}}},setup(e,{expose:a}){const l=e,r=E(!1),t=E(!1),s=E([]),i=E(1),h=E(!1),o=E(!1),m=E(!1),d=(f,b={})=>{const v={...{pageNo:"pageNo",totalPage:"totalPage",records:"records"},...l.responseNames};return b[v[f]]},p=async()=>{m.value&&await l.refreshChange();const f=await l.loadRequest(i.value);m.value=!1,r.value=!1;const b=d("pageNo",f)??1,F=d("totalPage",f)??1,v=d("records",f)??[];s.value=i.value===1?v:[...s.value,...v],o.value=!s.value.length,b>=F&&(t.value=!0),i.value++,h.value=!1},g=()=>{i.value=1,s.value=[],h.value=!0,o.value=!1,t.value=!1,r.value=!0,p()},c=async()=>{await l.refreshChange(),g()};return a({reset:g}),(f,b)=>(u(),_("div",Qe,[C($(ye),{modelValue:m.value,"onUpdate:modelValue":b[1]||(b[1]=F=>m.value=F),disabled:e.disabled,onRefresh:c,class:"kv-pull flex1"},{default:D(()=>[r.value&&(h.value||i.value===1)?(u(),T($(B),{key:0,type:"loading"},{image:D(()=>[V(f.$slots,"loading")]),_:3})):o.value?(u(),T($(B),{key:1},{image:D(()=>[V(f.$slots,"empty")]),_:3})):(u(),T($(ge),N({key:2,loading:r.value,"onUpdate:loading":b[0]||(b[0]=F=>r.value=F),finished:t.value,"finished-text":e.finishedText,onLoad:p},f.$attrs),{default:D(()=>[V(f.$slots,"default",{list:s.value})]),_:3},16,["loading","finished","finished-text"]))]),_:3},8,["modelValue","disabled"])]))}});x.install=function(e){e.component(x.name,x)};function pe(e,a){var g;const l=(g=G(me(),"YYYY-MM-DD"))==null?void 0:g.value,r=E(`${l} 00:00:00`),t=E(`${l} 23:59:59`),s=new Date(new Date().getTime()+24*60*60*1e3),i=c=>c&&typeof c=="string"?new Date(c):c,h=new Date().getFullYear(),o=new Date(h-3,1,1),m=w(()=>{const c=e.type??"range";if(c==="range"){const{startTime:f,endTime:b}=a.value||{};return[i(f)??new Date,i(b)??new Date]}return c==="multiple"?null:i(a.value)??new Date});return{minDate:o,maxDate:s,initalDate:m,startData:r,endDate:t,useDateFormat:G,formarData:(c,f="YYYY-MM-DD HH:mm:ss")=>{var b;return(b=G(c,f))==null?void 0:b.value},formatter:c=>(new Date().getTime()===new Date(c.date).getTime()&&(c.type="disabled"),c),setStringToDate:i}}const We={class:"edit-content"},Xe={class:"left-icon"},et=["value"],W={__name:"picker-edit",props:{modelValue:{type:[String,Date],default:""},showFormat:{type:String,default:"YYYY-MM-DD"}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,r=a,{formarData:t,setStringToDate:s}=pe(),i=ee(),h=w({get:()=>l.modelValue?t(s(l.modelValue),i.showFormat??l.showFormat):"",set:m=>r("update:modelValue",m)}),o=w(()=>({"picker-border":["round-border","border"].includes(i.shape),"picker-border-round":["round-border","round"].includes(i.shape)}));return(m,d)=>(u(),_("div",N({class:["picker-edit flex-align-center flex",[o.value]]},m.$attrs),[n("div",We,[n("div",Xe,[m.$attrs["show-icon"]??!0?(u(),T($(ue),{key:0,name:"underway-o"})):U("",!0)])]),n("input",{class:"edit-control",value:h.value,disabled:"",placeholder:"开始时间"},null,8,et)],16))}},tt={class:"date-shortcuts mr10 flex-shrink"},st={__name:"shortcuts",props:{shortcutsValue:{type:Number,default:-1}},emits:["confirm","change"],setup(e,{emit:a}){const l=E(!1),r=[{text:"昨天",value:1},{text:"今天",value:0},{text:"近7天",value:7},{text:"近一个月",value:30},{text:"近3个月",value:90}],t=a,s=e,i=ee(),h=w(()=>["round","round-border"].includes(i.shape)),o=w(()=>["round","default"].includes(i.shape)),m=E("选择范围");fe(()=>{const p=r.find(g=>g.value===s.shortcutsValue);p&&(m.value=p.text,d({selectedValues:[p.value],selectedOptions:[p]}))});const d=({selectedValues:p,selectedOptions:g})=>{const[c]=g;m.value=c.text,l.value=!1;const[f]=p,F=new Date().getTime()-3600*1e3*24*f;t("confirm",{value:F,select:f})};return(p,g)=>(u(),_("div",tt,[C($(de),{round:h.value,onClick:g[0]||(g[0]=c=>l.value=!0),class:X({"bg-button":o.value})},{default:D(()=>[S(P(m.value),1)]),_:1},8,["round","class"]),C($(be),{show:l.value,"onUpdate:show":g[2]||(g[2]=c=>l.value=c),position:"bottom","safe-area-inset-bottom":""},{default:D(()=>[C($(_e),{columns:r,onConfirm:d,onCancel:g[1]||(g[1]=c=>l.value=!1)})]),_:1},8,["show"])]))}},at={class:"k-date-picker flex-align-center"},O=Object.assign({name:"KvDatePicker"},{__name:"main",props:{modelValue:{type:[Object,String],default:()=>({})},showShortcuts:{type:Boolean,default:!1},shortcutsValue:{type:Number,default:-1}},emits:["update:modelValue","confirm"],setup(e,{emit:a}){const l=e,r=a,t=w({get:()=>l.modelValue,set:v=>r("update:modelValue",v)}),s=E(!1),i=ee(),h=w(()=>i.type??"range"),{minDate:o,maxDate:m,initalDate:d,formarData:p,formatter:g,setStringToDate:c}=pe(i,t),f=E(d.value),b=v=>{const y=h.value,k=i.valueFormat??"YYYY-MM-DD HH:mm:ss";if(y==="range"){const Y=p(v[0],k),L=k==="YYYY-MM-DD HH:mm:ss"?`${p(v[1],"YYYY-MM-DD")} 23:59:59`:`${p(v[1],k)}`;t.value={startTime:Y,endTime:L},f.value=[new Date(Y),new Date(L)]}else if(y==="multiple"){const Y=v.map(L=>`${p(L,k)}`);t.value=Y,f.value=Y}else t.value=p(v,k),f.value=c(t.value);s.value=!1,ve(()=>r("confirm",t.value))},F=({value:v,select:y})=>{const k=`${p(v,"YYYY-MM-DD")} 00:00:00`,Y=y===1?k:`${p(new Date,"YYYY-MM-DD")} 23:59:00`;t.value={startTime:k,endTime:Y},b([k,Y])};return(v,y)=>(u(),_("div",at,[e.showShortcuts&&h.value==="range"?(u(),T(st,N({key:0},v.$attrs,{"shortcuts-value":e.shortcutsValue,onConfirm:F}),null,16,["shortcuts-value"])):U("",!0),["single"].includes(v.$attrs.type)?(u(),T(W,N({key:1},v.$attrs,{modelValue:t.value,"onUpdate:modelValue":y[0]||(y[0]=k=>t.value=k),onClick:y[1]||(y[1]=k=>s.value=!0)}),null,16,["modelValue"])):(u(),T($($e),{key:2,justify:"space-between"},{default:D(()=>[C($(Q),{span:"11",class:"calendar-col",onClick:y[3]||(y[3]=k=>s.value=!0)},{default:D(()=>[C(W,N(v.$attrs,{modelValue:t.value.startTime,"onUpdate:modelValue":y[2]||(y[2]=k=>t.value.startTime=k)}),null,16,["modelValue"])]),_:1}),C($(Q),{span:"1",class:"calendar-line"}),C($(Q),{span:"11",class:"calendar-col",onClick:y[5]||(y[5]=k=>s.value=!0)},{default:D(()=>[C(W,N({placeholder:"结束日期"},v.$attrs,{modelValue:t.value.endTime,"onUpdate:modelValue":y[4]||(y[4]=k=>t.value.endTime=k)}),null,16,["modelValue"])]),_:1})]),_:1})),C($(Ee),N({teleport:"body",class:"overflow",show:s.value,"onUpdate:show":y[6]||(y[6]=k=>s.value=k),type:"range",onConfirm:b,"allow-same-day":"","max-date":$(m),"min-date":$(o),formatter:$(g),"safe-area-inset-bottom":"","default-date":f.value},v.$attrs),null,16,["show","max-date","min-date","formatter","default-date"])]))}});O.install=function(e){e.component(O.name,O)};const z={KvButton:j,KvInput:M,KvTable:A,KvTree:K,KvList:x,KvStatus:B,KvDatePicker:O,install:()=>{}};function nt(e,a,l=0){return e.substr(l,a.length)===a}z.install=function(e){Object.keys(z).forEach(a=>{if(nt(a,"K")){const l=z[a];e.component(l.name,l)}})};const lt=Object.freeze(Object.defineProperty({__proto__:null,KVant:z,KvButton:j,KvDatePicker:O,KvInput:M,KvList:x,KvStatus:B,KvTable:A,KvTree:K},Symbol.toStringTag,{value:"Module"})),it=re("",9),ot={class:"language-js vp-adaptive-theme"},rt=n("button",{title:"Copy Code",class:"copy"},null,-1),dt=n("span",{class:"lang"},"js",-1),ut={class:"shiki shiki-themes github-light github-dark vp-code"},pt=n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")],-1),ct={class:"line"},ht={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},mt=re("",1),ft=n("span",{class:"line"},null,-1),vt=n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),n("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")],-1),kt=n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  components: {")],-1),gt={class:"line"},yt={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},_t=n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")],-1),bt=n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")],-1),Dt=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"vant/guide.md","filePath":"vant/guide.md","lastUpdated":1696672596000}'),$t={name:"vant/guide.md"},Ct=Object.assign($t,{setup(e){const a=[];Object.keys(lt).forEach(r=>{a.push(r)});const l=(r=2)=>`${a.map(t=>" ".repeat(r)+t).join(", ").replace(/, /g,`,
`)}`;return(r,t)=>(u(),_("div",null,[it,n("div",ot,[rt,dt,n("pre",ut,[n("code",null,[pt,S(`
`),n("span",ct,[n("span",ht,P(l()),1)]),S(`
`),mt,S(`
`),ft,S(`
`),vt,S(`
`),kt,S(`
`),n("span",gt,[n("span",yt,P(l(4))+"  ",1)]),S(`
`),_t,S(`
`),bt])])])]))}});export{Dt as __pageData,Ct as default};
