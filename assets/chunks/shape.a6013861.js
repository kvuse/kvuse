import{h as l,C as s,o as m,b as p}from"./framework.3e3201d2.js";const u={__name:"shape",setup(c){const e=l({startTime:"",endTime:""}),n=o=>{console.log("value: ",o)};return(o,a)=>{const t=s("kv-date-picker");return m(),p(t,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),shape:"round-border",onConfirm:n},null,8,["modelValue"])}}};export{u as default};