import{S as m}from"./k-use.es.LUHmWT9g.js";import{c as s,af as d,l as p,m as c,V as r,u,p as i}from"./framework.Urq_c1ER.js";const f={class:"width-240"},_=i("div",{class:"mt20 mb20"},null,-1),b={__name:"input-basic",setup(v){const{formatRadixPoint:t}=m(),a=s(""),l=s("");return(V,o)=>{const n=d("el-input");return p(),c("div",f,[r(n,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),formatter:u(t),placeholder:"小数点后两位"},null,8,["modelValue","formatter"]),_,r(n,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),placeholder:"小数点后4位",formatter:e=>u(t)(e,4)},null,8,["modelValue","formatter"])])}}};export{b as default};