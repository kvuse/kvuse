import{h as o,r as n,o as r,i as m}from"../app.ef82ab6e.js";const b={__name:"select",setup(p){const t=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],l=o([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),e=o([{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(u,a)=>{const s=n("k-batch-table");return r(),m(s,{"table-data":l.value,"table-column":t,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["table-data","modelValue"])}}};export{b as default};