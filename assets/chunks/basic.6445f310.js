import{r,D as o,h as u,i as _,G as a,z as d,B as m,k as i}from"./framework.c803e405.js";const p={class:"width-240"},k={class:"mt20"},V={__name:"basic",setup(f){const t=r(20),s=()=>{t.value=Math.ceil(Math.random()*100)};return(h,e)=>{const n=o("k-auto-counter"),c=o("k-button");return u(),_("div",p,[a(n,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),class:"font-20 font-bold"},null,8,["modelValue"]),d("div",k,[a(c,{type:"primary",onClick:s},{default:m(()=>[i(" 设置随机数 ")]),_:1})])])}}};export{V as default};