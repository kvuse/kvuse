import{_ as m,h as n,D as p,o as a,b as d,w as f,F as v,t as k,c as l,E as h}from"./framework.SNksJsOe.js";const g={__name:"pull",setup(w){const c=n(null),s=n(1),i=(t=s.value)=>new Promise(r=>{setTimeout(()=>{const e={records:[],pageNo:t,totalPage:4};s.value++,e.records=[...e.records,...new Array(30).fill({name:11})],r(e)},2e3)}),_=async()=>await i();return(t,r)=>{const e=p("kv-list");return a(),d(e,{"load-request":_,ref_key:"listRef",ref:c},{default:f(({list:u})=>[(a(!0),l(v,null,h(u,(x,o)=>(a(),l("div",{key:o,class:"flex-center list-item van-hairline--bottom"},k(o),1))),128))]),_:1},512)}}},b=m(g,[["__scopeId","data-v-b32361a4"]]);export{b as default};
