import{i as u,D as o,o as r,c as _,G as a,z as d,B as m,a as i}from"./framework.8423a028.js";const p={class:"width-240"},f={class:"mt20"},h={__name:"basic",setup(k){const t=u(20),s=()=>{t.value=Math.ceil(Math.random()*100)};return(v,e)=>{const n=o("k-auto-counter"),c=o("k-button");return r(),_("div",p,[a(n,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),class:"font-20 font-bold"},null,8,["modelValue"]),d("div",f,[a(c,{type:"primary",onClick:s},{default:m(()=>[i(" 设置随机数 ")]),_:1})])])}}};export{h as default};