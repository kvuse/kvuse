import{r as m,E as t,j as b,B as u,C as e,H as o,m as l}from"./framework.4fc8d094.js";const f={__name:"slots",setup(i){const s=[{label:"日期",prop:"date",header:"dateHeader",width:"200px"},{label:"姓名",prop:"name"},{label:"地址",prop:"address",width:"200px"},{label:"操作",custom:"set",width:"120px"}],n=m(Array(1e3).fill({date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",address2:"No. 189, Grove St, Los Angeles"})),r=a=>{console.log("row: ",a)};return(a,k)=>{const c=t("el-tag"),d=t("k-button"),_=t("k-table-v2");return b(),u(_,{"table-data":n.value,"table-column":s,height:"300px"},{dateHeader:e(()=>[o(c,null,{default:e(()=>[l("自定义表头")]),_:1})]),set:e(({row:p})=>[o(d,{onClick:h=>r(p)},{default:e(()=>[l(" 设置 ")]),_:2},1032,["onClick"])]),_:1},8,["table-data"])}}};export{f as default};
