import{_ as i,r as o,f as u,E as f,j as a,B as p,C as d,k as r,F as m,O as v,n as g}from"./framework.4fc8d094.js";const k={__name:"basic",setup(b){const e=o([]),s=o(null),c=()=>new Promise(t=>{setTimeout(()=>{e.value=new Array(30).fill({name:11}),t({pageNo:2,records:e.value,totalPage:1})},2e3)}),l=async()=>await c();return u(()=>{s.value.reset()}),(t,y)=>{const _=f("kv-list");return a(),p(_,{"load-request":l,"response-names":{pageNo:"pageIndex"},ref_key:"listRef",ref:s},{default:d(()=>[(a(!0),r(m,null,v(e.value,(x,n)=>(a(),r("div",{key:n,class:"flex-center list-item van-hairline--bottom"},g(n),1))),128))]),_:1},512)}}},w=i(k,[["__scopeId","data-v-4fbdc21f"]]);export{w as default};
