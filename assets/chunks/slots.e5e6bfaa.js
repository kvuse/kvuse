import{_ as i,h as d,r as o,o as v,i as b,w as e,b as n,e as s,t as k,d as f}from"../app.ef82ab6e.js";const g={class:"text-right"},x={__name:"slots",setup(N){const r=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address",custom:"address",header:"header-address"}],c=d([{id:1,date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-03",name:"luke",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),a=d([]),_=()=>{console.log("multipleSelection.value: ",a.value)};return(S,l)=>{const p=o("el-tag"),m=o("k-button"),u=o("k-picker");return v(),b(u,{"table-column":r,"table-data":c.value,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t)},{"header-address":e(()=>[n(p,null,{default:e(()=>[s("\u81EA\u5B9A\u4E49\u8868\u5934")]),_:1})]),address:e(({row:t})=>[s(k(`custom: ${t.address}`),1)]),footer:e(()=>[f("div",g,[n(m,{type:"primary",onClick:_},{default:e(()=>[s(" \u786E\u8BA4 ")]),_:1})])]),_:1},8,["table-data","modelValue"])}}},V=i(x,[["__scopeId","data-v-afe744c2"]]);export{V as default};
