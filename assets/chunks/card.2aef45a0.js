import{h as t,r,o as m,c as u,b,d as p,t as d,F as i}from"../app.64419615.js";const v={__name:"card",setup(_){const o=t([{label:"全部",name:"all"},{label:"正常",name:"normal"},{label:"已拉黑",name:"block"}]),a=t("all"),s=e=>{console.log("value: ",e)};return(e,l)=>{const n=r("k-tabs");return m(),u(i,null,[b(n,{"tabs-list":o.value,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),type:"card",onTabClick:s},null,8,["tabs-list","modelValue"]),p("span",null,d(a.value),1)],64)}}};export{v as default};