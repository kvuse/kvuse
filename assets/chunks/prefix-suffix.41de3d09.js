import{r,E as n,j as d,k as c,H as a,A as m,C as f,m as i}from"./framework.4fc8d094.js";const p={class:"width-240"},_={class:"mt20"},v={__name:"prefix-suffix",setup(x){const e=r(20),s=()=>{e.value=Math.ceil(Math.random()*100)};return(V,t)=>{const l=n("k-auto-counter"),u=n("k-button");return d(),c("div",p,[a(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),prefix:"前缀：￥",class:"font-20 font-bold"},null,8,["modelValue"]),a(l,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value=o),prefix:"后缀：",suffix:"元",class:"font-20 font-bold mt20"},null,8,["modelValue"]),m("div",_,[a(u,{type:"primary",onClick:s},{default:f(()=>[i(" 设置随机数 ")]),_:1})])])}}};export{v as default};