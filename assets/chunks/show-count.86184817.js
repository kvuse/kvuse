import{i as t,D as s,o as b,c as w,G as l,B as n,a as u,z as p,F as N}from"./framework.8423a028.js";const x={class:"flex-between"},y={__name:"show-count",setup(C){const c=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],i=t([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),d=t([]),a=t(!1),v=()=>{a.value=!0},_=t(100),m=t(1),k=()=>{a.value=!1,console.log("multipleSelection: ",d)};return(S,e)=>{const r=s("k-button"),f=s("k-page"),g=s("k-picker"),V=s("k-dialog");return b(),w(N,null,[l(r,{type:"primary",size:"large",onClick:v},{default:n(()=>[u(" 添加商品 ")]),_:1}),l(V,{title:"添加商品",modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),width:"800px","show-footer":!1},{default:n(()=>[l(g,{"table-column":c,"table-data":i.value,"show-count":"",modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o)},{footer:n(()=>[p("div",x,[l(f,{total:_.value,modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o),class:"mt0"},null,8,["total","modelValue"]),p("div",null,[l(r,{type:"primary",onClick:k},{default:n(()=>[u(" 确认 ")]),_:1}),l(r,{onClick:e[1]||(e[1]=o=>a.value=!1)},{default:n(()=>[u(" 取消 ")]),_:1})])])]),_:1},8,["table-data","modelValue"])]),_:1},8,["modelValue"])],64)}}};export{y as default};