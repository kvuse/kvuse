import{r as d,E as a,a7 as c,a8 as _,j as m,k as p,A as o,H as l,C as v,m as k}from"./framework.4fc8d094.js";const b=o("span",null,"弹框下，监听F2键值：",-1),f=o("br",null,null,-1),V={class:"mt10"},x=o("span",{class:"mr20"},"按F2打开弹框 ",-1),C={__name:"dialog",setup(y){const e=d(!1),n=()=>{e.value=!e.value};return(g,t)=>{const r=a("k-button"),i=a("k-dialog"),u=c("keyboard");return _((m(),p("div",null,[b,f,o("div",V,[x,l(r,{type:"primary",onClick:t[0]||(t[0]=s=>e.value=!0)},{default:v(()=>[k("打开弹框")]),_:1})]),l(i,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value=s),width:"400px"},null,8,["modelValue"])])),[[u,{buttonKey:"F2"},n,{focus:!0,dialog:!0}]])}}};export{C as default};
