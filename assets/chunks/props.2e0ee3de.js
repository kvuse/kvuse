import{b as o,D as s,o as c,c as v,G as b}from"./framework.55e9dc06.js";const h={class:"width-180"},m={__name:"props",setup(p){const n={name:"label",child:"children",disabled:"disabled"},t=o([{label:"Level one 1",id:1,children:[{label:"Level two 1-1",id:11,children:[{label:"Level three 1-1-1",id:111}]}]},{label:"Level one 2",id:2,disabled:!0,children:[{label:"Level two 2-1",id:21,children:[{label:"Level three 2-1-1",id:211}]},{label:"Level two 2-2",id:22,children:[{label:"Level three 2-2-1",id:221}]}]},{label:"Level one 3",id:3,children:[{label:"Level two 3-1",id:31,children:[{label:"Level three 3-1-1",id:311}]},{label:"Level two 3-2",id:32,children:[{label:"Level three 3-2-1",id:321}]}]}]),d=o(1),i=a=>{console.log("item: ",a)};return(a,e)=>{const r=s("kv-tree");return c(),v("div",h,[b(r,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),select:d.value,"onUpdate:select":e[1]||(e[1]=l=>d.value=l),props:n,theme:"#409eff",onChange:i},null,8,["modelValue","select"])])}}};export{m as default};
