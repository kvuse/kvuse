import{r as s,E as m,j as u,k as p,H as c,F as g,A as _}from"./framework.4fc8d094.js";const i=_("div",{class:"mt20 mb10"}," 选择日 设置时间段： ",-1),v={__name:"select",setup(V){const o=s(""),r=e=>{console.log("value: ",e)},n=s(""),d=e=>{console.log("range: ",e)};return(e,a)=>{const t=m("k-date-picker");return u(),p(g,null,[c(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),"select-type":"",onChange:r},null,8,["modelValue"]),i,c(t,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),"select-type":"",daterange:"",onChange:d},null,8,["modelValue"])],64)}}};export{v as default};