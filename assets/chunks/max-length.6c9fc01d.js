import{_ as u,b as m,D as l,o as r,c as p,G as t}from"./framework.55e9dc06.js";const v={class:"keyborad-content"},g={__name:"max-length",setup(i){const e=m(""),d=o=>{console.log("val: ",o)},s=o=>{console.log("changeHandle: ",o)};return(o,n)=>{const _=l("k-input"),c=l("k-number-keyboard");return r(),p("div",v,[t(_,{placeholder:"请输入金额",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a)},null,8,["modelValue"]),t(c,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=a=>e.value=a),maxlength:6,onConfirm:d,onChange:s},null,8,["modelValue"])])}}},b=u(g,[["__scopeId","data-v-76abd3dd"]]);export{b as default};
