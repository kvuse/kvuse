import{h as r,a3 as c,a4 as i,o as l,c as u,k as s,a as _,t as d}from"./framework.6c428c33.js";const v=s("span",null,"监听Enter、Shift键值：",-1),p={class:"c-red font-18"},k={__name:"more",setup(f){const t=r("按键盘触发"),a=e=>{t.value=`${e.key}已触发`,setTimeout(()=>{t.value="按键盘触发"},800)},o=e=>a(e);return(e,h)=>{const n=c("keyboard");return i((l(),u("div",null,[v,s("div",null,[_("当前状态："),s("span",p,d(t.value),1)])])),[[n,{buttonKey:"Enter"},a],[n,{buttonKey:"Shift"},o]])}}};export{k as default};