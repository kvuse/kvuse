import{_ as p,h as r,C as d,o as a,b as m,w as f,c as l,F as v,D as k,t as y}from"./framework.6c428c33.js";const g={__name:"pull",setup(h){const c=r(null),s=r(1),_=(t=s.value)=>new Promise(o=>{setTimeout(()=>{const e={records:[],pageNo:t,totalPage:4};s.value++,e.records=[...e.records,...new Array(30).fill({name:11})],o(e)},2e3)}),i=async()=>await _();return(t,o)=>{const e=d("kv-list");return a(),m(e,{"load-request":i,ref_key:"listRef",ref:c},{default:f(({list:u})=>[(a(!0),l(v,null,k(u,(x,n)=>(a(),l("div",{key:n,class:"flex-center list-item van-hairline--bottom"},y(n),1))),128))]),_:1},512)}}},b=p(g,[["__scopeId","data-v-b32361a4"]]);export{b as default};