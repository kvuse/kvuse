import{r as m,E as r,j as u,k as d,H as s,F as c,A as p}from"./framework.4fc8d094.js";const _=p("div",{class:"mt20 mb10"}," 时间日期类型 ",-1),k={__name:"basic",setup(i){const e=m(""),l=n=>{console.log("value: ",n)};return(n,a)=>{const t=r("k-date-picker");return u(),d(c,null,[s(t,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),onChange:l},null,8,["modelValue"]),_,s(t,{type:"datetimerange",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o),onChange:l},null,8,["modelValue"])],64)}}};export{k as default};
