import{c as _,af as a,l as d,m as r,p as e,V as s,T as i,a6 as m}from"./framework.Urq_c1ER.js";const p={class:"width-240"},f={class:"flex"},h=e("span",null,"关闭动效：",-1),k={class:"mt20"},N={__name:"autoinit",setup(v){const t=_(100),n=()=>{t.value=Math.ceil(Math.random()*100)};return(V,o)=>{const l=a("k-auto-counter"),c=a("k-button");return d(),r("div",p,[e("div",f,[h,s(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),autoinit:!1,class:"font-20 font-bold"},null,8,["modelValue"])]),e("div",k,[s(c,{type:"primary",onClick:n},{default:i(()=>[m(" 设置随机数 ")]),_:1})])])}}};export{N as default};
