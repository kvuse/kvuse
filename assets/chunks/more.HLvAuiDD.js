import{c as r,ag as c,O as i,l,m as u,p as s,a6 as _,X as d}from"./framework.Urq_c1ER.js";const p=s("span",null,"监听Enter、Shift键值：",-1),v={class:"c-red font-18"},y={__name:"more",setup(f){const t=r("按键盘触发"),a=e=>{t.value=`${e.key}已触发`,setTimeout(()=>{t.value="按键盘触发"},800)},o=e=>a(e);return(e,m)=>{const n=c("keyboard");return i((l(),u("div",null,[p,s("div",null,[_("当前状态："),s("span",v,d(t.value),1)])])),[[n,{buttonKey:"Enter"},a],[n,{buttonKey:"Shift"},o]])}}};export{y as default};