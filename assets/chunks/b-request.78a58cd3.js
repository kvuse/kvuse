import{u as n}from"./index.es.da22c6a6.js";import{h as p,C as d,o as s,c as f,a4 as l,l as r,b as i,w as _,a as u,F as h,k as t}from"./framework.3e3201d2.js";const v=t("div",{class:"mb10"},"点击后设置不可点击，接口请求成功恢复",-1),b=t("span",{class:"color-99 ml10"},"点击显示：请求中...",-1),k=t("div",{class:"mt20 mb20"},null,-1),w=t("span",{class:"color-99 ml10"},"点击显示：接口请求中",-1),C={__name:"b-request",setup(y){const m=()=>new Promise(e=>{setTimeout(()=>{e(!0)},2e3)}),o=p(!1),a=async()=>{o.value=!0;const e=await m();console.log("result: ",e),o.value=!1};return(e,x)=>{const c=d("el-button");return s(),f(h,null,[v,l((s(),i(c,{type:"primary"},{default:_(()=>[u(" 保存 ")]),_:1})),[[r(n),void 0,a]]),b,k,l((s(),i(c,{type:"primary"},{default:_(()=>[u(" 确认 ")]),_:1})),[[r(n),{content:"接口请求中"},a]]),w],64)}}};export{C as default};
