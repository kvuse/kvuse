import{h as p,r as u,o as b,i}from"../app.2973953f.js";const g={__name:"sort",setup(_){const l=[{label:"日期",prop:"date",sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],e=p([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),n=({prop:s,order:r,sortType:o,currentPage:d,column:m,sortColumn:c})=>{console.log("prop, order, sortType, currentPage, column, sortColumn: ",s,r,o,d,m,c),e.value=o?e.value.sort((a,t)=>t.id-a.id):e.value.sort((a,t)=>a.id-t.id)};return(s,r)=>{const o=u("k-table");return b(),i(o,{"table-data":e.value,"table-column":l,onSortChange:n},null,8,["table-data"])}}};export{g as default};
