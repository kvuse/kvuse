import{c as e,af as r,l as m,S as c}from"./framework.Urq_c1ER.js";const i={__name:"disabled",setup(p){const l=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=e([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),a=e([]),s=e([{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(u,t)=>{const d=r("k-batch-table");return m(),c(d,{"table-data":o.value,"table-column":l,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),"select-list":s.value},null,8,["table-data","modelValue","select-list"])}}};export{i as default};
