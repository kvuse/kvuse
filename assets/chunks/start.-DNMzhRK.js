import{c as u,af as e,l as _,m as d,V as a,p as s,T as m,a6 as p}from"./framework.Urq_c1ER.js";const i={class:"width-240"},f=s("p",{class:"color-99"}," 设置start从10开始 ",-1),v={class:"mt20"},x={__name:"start",setup(k){const t=u(50),n=()=>{t.value=Math.ceil(Math.random()*100),console.log("count.value: ",t.value)};return(V,o)=>{const l=e("k-auto-counter"),c=e("k-button");return _(),d("div",i,[a(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),start:20,class:"font-20 font-bold"},null,8,["modelValue"]),f,s("div",v,[a(c,{type:"primary",onClick:n},{default:m(()=>[p(" 设置随机数 ")]),_:1})])])}}};export{x as default};
