import{c as r,af as n,l as c,m as d,V as a,p as m,T as f,a6 as p}from"./framework.Urq_c1ER.js";const i={class:"width-240"},_={class:"mt20"},k={__name:"prefix-suffix",setup(V){const e=r(20),s=()=>{e.value=Math.ceil(Math.random()*100)};return(x,t)=>{const l=n("k-auto-counter"),u=n("k-button");return c(),d("div",i,[a(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),prefix:"前缀：￥",class:"font-20 font-bold"},null,8,["modelValue"]),a(l,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value=o),prefix:"后缀：",suffix:"元",class:"font-20 font-bold mt20"},null,8,["modelValue"]),m("div",_,[a(u,{type:"primary",onClick:s},{default:f(()=>[p(" 设置随机数 ")]),_:1})])])}}};export{k as default};
