import{h as t,C as r,o as m,c as u,H as p,k as b,t as i,F as d}from"./framework.3e3201d2.js";const v={__name:"card",setup(_){const o=t([{label:"全部",name:"all"},{label:"正常",name:"normal"},{label:"已拉黑",name:"block"}]),a=t("all"),s=e=>{console.log("value: ",e)};return(e,l)=>{const n=r("k-tabs");return m(),u(d,null,[p(n,{"tabs-list":o.value,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),type:"card",onTabClick:s},null,8,["tabs-list","modelValue"]),b("span",null,i(a.value),1)],64)}}};export{v as default};