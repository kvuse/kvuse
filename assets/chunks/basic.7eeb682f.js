import{b as m,D as u,o as d,c as r,G as s,F as c,z as p}from"./framework.55e9dc06.js";const _=p("div",{class:"mt20 mb10"}," 时间日期类型 ",-1),v={__name:"basic",setup(i){const e=m(""),l=n=>{console.log("value: ",n)};return(n,a)=>{const t=u("k-date-picker");return d(),r(c,null,[s(t,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),onChange:l},null,8,["modelValue"]),_,s(t,{type:"datetimerange",modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o),onChange:l},null,8,["modelValue"])],64)}}};export{v as default};
