import{h as t,C as s,o as b,c as w,H as a,w as n,a as u,k as p,F as x}from"./framework.3e3201d2.js";const C={class:"flex-between"},A={__name:"show-count",setup(N){const i=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],c=t([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"xiaoMing",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"xiaoHong",address:"No. 189, Grove St, Los Angeles"}]),d=t([]),l=t(!1),v=()=>{l.value=!0},_=t(100),m=t(1),k=()=>{l.value=!1,console.log("multipleSelection: ",d)};return(S,e)=>{const r=s("k-button"),f=s("k-page"),g=s("k-picker"),V=s("k-dialog");return b(),w(x,null,[a(r,{type:"primary",size:"large",onClick:v},{default:n(()=>[u(" 添加商品 ")]),_:1}),a(V,{title:"添加商品",modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value=o),width:"800px","show-footer":!1},{default:n(()=>[a(g,{"table-column":i,"table-data":c.value,"show-count":"",modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o)},{footer:n(()=>[p("div",C,[a(f,{total:_.value,modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=o=>m.value=o),class:"mt0"},null,8,["total","modelValue"]),p("div",null,[a(r,{type:"primary",onClick:k},{default:n(()=>[u(" 确认 ")]),_:1}),a(r,{onClick:e[1]||(e[1]=o=>l.value=!1)},{default:n(()=>[u(" 取消 ")]),_:1})])])]),_:1},8,["table-data","modelValue"])]),_:1},8,["modelValue"])],64)}}};export{A as default};