import{c as s,af as _,ag as a,O as l,l as p,m,p as e,V as v,a6 as f,X as V}from"./framework.Urq_c1ER.js";const b=e("span",null,"监听Ctrl + Enter键值：",-1),k={class:"width-240 mt10 mb10"},h={class:"c-red font-18"},x={__name:"combination",setup(y){const o=s(""),t=s("按Ctrl+Enter触发"),r=()=>{t.value="组合键已触发",setTimeout(()=>{t.value="按Ctrl+Enter触发"},800)};return(C,n)=>{const c=_("k-input"),i=a("focus"),u=a("keyboard");return l((p(),m("div",null,[b,e("div",k,[l(v(c,{placeholder:"自动获取焦点",type:"text",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value=d)},null,8,["modelValue"]),[[i]])]),e("div",null,[f("当前状态："),e("span",h,V(t.value),1)])])),[[u,{buttonKey:"Enter",isCombination:1},r]])}}};export{x as default};