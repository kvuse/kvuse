import{r as n,E as l,j as u,B as c}from"./framework.4fc8d094.js";const p={__name:"shortcuts",setup(m){const e=n({startTime:"",endTime:""}),r=o=>{console.log("value: ",o)};return(o,t)=>{const s=l("kv-date-picker");return u(),c(s,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),shape:"round-border","shortcuts-value":1,"show-shortcuts":"",onConfirm:r},null,8,["modelValue"])}}};export{p as default};