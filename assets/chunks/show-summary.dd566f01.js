import{r as b,H as m,j as i,k as h,M as o,s as n,m as c,I as k,A as v}from"./framework.1690a9bd.js";const N=v("div",{class:"mt20 mb10"},"自定义的合计计算方法",-1),y={__name:"show-summary",setup(f){const r=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"amount1",prop:"amount1"},{label:"amount2",prop:"amount2"},{label:"amount3",prop:"amount3"}],l=b(Array(1e3).fill({date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",address2:"No. 189, Grove St, Los Angeles",amount1:"234",amount2:"3.2",amount3:10})),d=e=>{console.log("row: ",e)},p=({row:e,index:u})=>{if(!u)return"sum";const a=l.value.reduce((s,t)=>s+Number(t[e.prop]),0);return Number.isNaN(a)?"":`￥${a.toFixed(2)}`};return(e,u)=>{const a=m("el-tag"),s=m("k-button"),t=m("k-table-v2");return i(),h(k,null,[o(t,{"table-data":l.value,"table-column":r,height:"300px","show-summary":""},{dateHeader:n(()=>[o(a,null,{default:n(()=>[c("自定义表头")]),_:1})]),set:n(({row:_})=>[o(s,{onClick:g=>d(_)},{default:n(()=>[c(" 设置 ")]),_:2},1032,["onClick"])]),_:1},8,["table-data"]),N,o(t,{"table-data":l.value,"table-column":r,height:"300px","show-summary":"","summary-method":p},null,8,["table-data"])],64)}}};export{y as default};