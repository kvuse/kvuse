import{_ as c,h as p,r as t,o as u,c as d,b as a}from"../app.64419615.js";const m={class:"keyborad-content"},i={__name:"precision",setup(v){const e=p(""),s=l=>{console.log("val: ",l)};return(l,o)=>{const _=t("k-input"),r=t("k-number-keyboard");return u(),d("div",m,[a(_,{point:2,placeholder:"可输入小数点后2位",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},null,8,["modelValue"]),a(r,{"decimal-point":"",modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value=n),onConfirm:s},null,8,["modelValue"])])}}},f=c(i,[["__scopeId","data-v-26515742"]]);export{f as default};