import{h as o,r as m,o as u,i as c}from"../app.2973953f.js";const p={__name:"router",setup(b){const t=o([{label:"全部",name:"all"},{label:"正常",name:"normal"},{label:"已拉黑",name:"block"}]),e=o("all"),s=a=>{console.log("value: ",a)};return(a,l)=>{const n=m("k-tabs");return u(),c(n,{"tabs-list":t.value,modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r),"is-router":"",onChange:s},null,8,["tabs-list","modelValue"])}}};export{p as default};
