import{b as o,D as n,o as r,A as m}from"./framework.55e9dc06.js";const b={__name:"select",setup(p){const t=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],l=o([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),e=o([{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(u,a)=>{const s=n("k-batch-table");return r(),m(s,{"table-data":l.value,"table-column":t,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["table-data","modelValue"])}}};export{b as default};
