import{b as u,D as e,o as _,c as d,G as a,z as s,B as m,a as p}from"./framework.55e9dc06.js";const i={class:"width-240"},v=s("p",{class:"color-99"}," 设置start从10开始 ",-1),f={class:"mt20"},b={__name:"start",setup(k){const t=u(50),n=()=>{t.value=Math.ceil(Math.random()*100),console.log("count.value: ",t.value)};return(h,o)=>{const c=e("k-auto-counter"),l=e("k-button");return _(),d("div",i,[a(c,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),start:20,class:"font-20 font-bold"},null,8,["modelValue"]),v,s("div",f,[a(l,{type:"primary",onClick:n},{default:m(()=>[p(" 设置随机数 ")]),_:1})])])}}};export{b as default};
