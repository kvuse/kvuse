import{r,a7 as c,J as n,h as i,i as l,z as t,k as _,t as d}from"./framework.c803e405.js";const p=t("span",null,"监听所有键值：",-1),u={class:"c-red font-18"},f={__name:"basic",setup(v){const s=r(""),a=e=>{console.log("event: ",e),s.value=e.key};return(e,k)=>{const o=c("keyboard");return n((i(),l("div",null,[p,t("div",null,[_("当前键值："),t("span",u,d(s.value.toLocaleUpperCase()),1)])])),[[o,void 0,a,{any:!0}]])}}};export{f as default};