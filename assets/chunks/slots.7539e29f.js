import{b as u,D as a,o as k,A as g,B as e,G as s,a as n}from"./framework.55e9dc06.js";const N={__name:"slots",setup(i){const l=[{label:"日期",prop:"date",header:"dateHeader"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"操作",custom:"set"}],d=u([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),r=(t,o)=>{console.log("row,index: ",t,o)};return(t,o)=>{const c=a("el-tag"),m=a("k-button"),_=a("k-table");return k(),g(_,{"table-data":d.value,"table-column":l},{dateHeader:e(()=>[s(c,null,{default:e(()=>[n("自定义表头")]),_:1})]),set:e(({row:p,index:b})=>[s(m,{onClick:v=>r(p,b)},{default:e(()=>[n(" 操作 ")]),_:2},1032,["onClick"])]),_:1},8,["table-data"])}}};export{N as default};
