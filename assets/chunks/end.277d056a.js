import{r,H as t,j as d,k as _,M as a,A as n,s as m,m as p}from"./framework.1690a9bd.js";const i={class:"width-240"},k=n("p",{class:"color-99"}," 设置end：60结束 ",-1),v={class:"mt20"},x={__name:"end",setup(f){const e=r(10),s=()=>{e.value=Math.ceil(Math.random()*100),console.log("count.value: ",e.value)};return(h,o)=>{const l=t("k-auto-counter"),c=t("k-button");return d(),_("div",i,[a(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),end:60,class:"font-20 font-bold"},null,8,["modelValue"]),k,n("div",v,[a(c,{type:"primary",onClick:s},{default:m(()=>[p(" 设置随机数 ")]),_:1})])])}}};export{x as default};