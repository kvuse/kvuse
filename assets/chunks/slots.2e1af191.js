import{h as a,r as l,o as f,i as N,w as e,b as d,e as r}from"../app.c09c8e17.js";const A={__name:"slots",setup(S){const u=[{label:"\u65E5\u671F",prop:"date",header:"dateHeader"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"},{label:"\u64CD\u4F5C",custom:"set"}],m=a([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),n=a([]),p=a(50),c=a(1),_=s=>{console.log("current page: ",s)},b=()=>{console.log("multipleSelection: ",n)};return(s,o)=>{const i=l("el-button"),g=l("el-tag"),v=l("k-button"),k=l("k-batch-table");return f(),N(k,{"table-data":m.value,"table-column":u,page:c.value,"onUpdate:page":o[0]||(o[0]=t=>c.value=t),modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=t=>n.value=t),total:p.value,onCurrentChange:_},{footer:e(()=>[d(i,{onClick:b},{default:e(()=>[r(" \u6279\u91CF\u64CD\u4F5C ")]),_:1})]),dateHeader:e(()=>[d(g,null,{default:e(()=>[r("\u81EA\u5B9A\u4E49\u8868\u5934")]),_:1})]),set:e(({row:t,index:C})=>[d(v,{onClick:h=>s.clickHandle(t,C)},{default:e(()=>[r(" \u64CD\u4F5C ")]),_:2},1032,["onClick"])]),_:1},8,["table-data","page","modelValue","total"])}}};export{A as default};