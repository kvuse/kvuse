import{h as r,r as s,o as n,i as c}from"../app.d037b9af.js";const m={__name:"basic",setup(i){const e=r(Array.from({length:200},(t,o)=>({name:o,index:o})));console.log("listData: ",e);const a=(t,o)=>{console.log("item,index: ",t,o)};return(t,o)=>{const l=s("k-virtual-list");return n(),c(l,{data:e.value,"row-class":"flex-center border-bottom","row-style":{height:"100px"},onRowClick:a},null,8,["data"])}}};export{m as default};