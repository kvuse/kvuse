import{c as n,af as c,l as g,S as i}from"./framework.Urq_c1ER.js";const _={__name:"change-size",setup(m){const l=n(50),t=n(1),s=n(10),r=e=>{console.log("page: ",e)},u=e=>{console.log("当前size: ",e)};return(e,o)=>{const p=c("k-page");return g(),i(p,{total:l.value,"show-size":"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),size:s.value,"onUpdate:size":o[1]||(o[1]=a=>s.value=a),onCurrentChange:r,onSizeChange:u},null,8,["total","modelValue","size"])}}};export{_ as default};