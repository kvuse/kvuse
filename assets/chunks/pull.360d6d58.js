import{_ as p,r as o,H as d,j as a,q as m,s as f,k as l,I as v,J as k,n as y}from"./framework.1690a9bd.js";const g={__name:"pull",setup(x){const c=o(null),s=o(1),_=(t=s.value)=>new Promise(n=>{setTimeout(()=>{const e={records:[],pageNo:t,totalPage:4};s.value++,e.records=[...e.records,...new Array(30).fill({name:11})],n(e)},2e3)}),i=async()=>await _();return(t,n)=>{const e=d("kv-list");return a(),m(e,{"load-request":i,ref_key:"listRef",ref:c},{default:f(({list:u})=>[(a(!0),l(v,null,k(u,(h,r)=>(a(),l("div",{key:r,class:"flex-center list-item van-hairline--bottom"},y(r),1))),128))]),_:1},512)}}},b=p(g,[["__scopeId","data-v-b32361a4"]]);export{b as default};