import{h as r,f as c,g as i,o as l,c as u,d as s,e as _,t as d}from"../app.d037b9af.js";const v=s("span",null,"监听Enter、Shift键值：",-1),f={class:"c-red font-18"},y={__name:"more",setup(p){const t=r("按键盘触发"),n=e=>{t.value=`${e.key}已触发`,setTimeout(()=>{t.value="按键盘触发"},800)},a=e=>n(e);return(e,h)=>{const o=c("keyboard");return i((l(),u("div",null,[v,s("div",null,[_("当前状态："),s("span",f,d(t.value),1)])])),[[o,{buttonKey:"Enter"},n],[o,{buttonKey:"Shift"},a]])}}};export{y as default};