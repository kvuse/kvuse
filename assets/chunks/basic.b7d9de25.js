import{h as t,r,o as m,c as u,b,d as i,t as p,F as _}from"../app.64419615.js";const v={__name:"basic",setup(d){const o=t([{label:"全部",name:"all"},{label:"正常",name:"normal"},{label:"已拉黑",name:"block"}]),a=t("all"),s=e=>{console.log("value: ",e)};return(e,l)=>{const n=r("k-tabs");return m(),u(_,null,[b(n,{"tabs-list":o.value,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),onTabClick:s},null,8,["tabs-list","modelValue"]),i("span",null,p(a.value),1)],64)}}};export{v as default};