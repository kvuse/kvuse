import{h as a,r as m,o as s,c,b as v}from"../app.99166b49.js";const r={class:"width-180"},u={__name:"theme",setup(h){const t=a([{name:"Level one 1",id:1,child:[{name:"Level two 1-1",id:11,child:[{name:"Level three 1-1-1",id:111}]}]},{name:"Level one 2",id:2,child:[{name:"Level two 2-1",id:21,child:[{name:"Level three 2-1-1",id:211}]},{name:"Level two 2-2",id:22,child:[{name:"Level three 2-2-1",id:221}]}]},{name:"Level one 3",id:3,child:[{name:"Level two 3-1",id:31,child:[{name:"Level three 3-1-1",id:311}]},{name:"Level two 3-2",id:32,child:[{name:"Level three 3-2-1",id:321}]}]}]),n=a(1),d=o=>{console.log("item: ",o)};return(o,e)=>{const i=m("kv-tree");return s(),c("div",r,[v(i,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),select:n.value,"onUpdate:select":e[1]||(e[1]=l=>n.value=l),theme:"#409eff",onChange:d},null,8,["modelValue","select"])])}}};export{u as default};
