import{r,D as n,h as d,i as c,G as a,z as m,B as i,k as f}from"./framework.c803e405.js";const p={class:"width-240"},_={class:"mt20"},v={__name:"prefix-suffix",setup(x){const e=r(20),s=()=>{e.value=Math.ceil(Math.random()*100)};return(V,t)=>{const l=n("k-auto-counter"),u=n("k-button");return d(),c("div",p,[a(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),prefix:"前缀：￥",class:"font-20 font-bold"},null,8,["modelValue"]),a(l,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value=o),prefix:"后缀：",suffix:"元",class:"font-20 font-bold mt20"},null,8,["modelValue"]),m("div",_,[a(u,{type:"primary",onClick:s},{default:i(()=>[f(" 设置随机数 ")]),_:1})])])}}};export{v as default};
