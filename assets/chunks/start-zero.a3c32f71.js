import{_ as d,h as u,r as t,o as m,c as p,b as l}from"../app.d037b9af.js";const v={class:"keyborad-content"},f={__name:"start-zero",setup(i){const e=u(""),s=o=>{console.log("val: ",o)},r=o=>{console.log("changeHandle: ",o)};return(o,n)=>{const _=t("k-input"),c=t("k-number-keyboard");return m(),p("div",v,[l(_,{placeholder:"请输入金额",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a)},null,8,["modelValue"]),l(c,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=a=>e.value=a),maxlength:6,"start-zero":!1,onConfirm:s,onChange:r},null,8,["modelValue"])])}}},g=d(f,[["__scopeId","data-v-6fe15470"]]);export{g as default};