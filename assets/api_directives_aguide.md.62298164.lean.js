import{o as i,c as d,k as a,a as p,t as c,Q as t}from"./chunks/framework.6c428c33.js";const E={mounted:s=>{setTimeout(()=>{s.querySelector("input").focus()},100)},updated:s=>{setTimeout(()=>{s.querySelector("input").focus()},100)}},r=(s,n)=>{const{money:l,number:e}=n.modifiers;l?s.innerHTML=`￥${Number(n.value).toFixed(2)}`:s.innerHTML=n.value||(e?0:"-")},y={mounted:(s,n)=>r(s,n),updated:(s,n)=>r(s,n)},u={mounted:(s,n)=>{s.handler=function(){const{delay:l=800,content:e}=n.value||{};s.classList.add("is-disabled"),s.disabled=!0,e&&(s.beforeText=s.textContent,s.innerHTML=e);const{once:o}=n.modifiers;o||(s.timer=setTimeout(()=>{s.classList.remove("is-disabled"),s.disabled=!1,e&&(s.innerHTML=s.beforeText),s.beforeText=null,clearTimeout(s.timer),s.timer=null},l))},s.addEventListener("click",s.handler)},updated(s){s.addEventListener("click",s.handler)},unmounted:s=>{s.removeEventListener("click",s.handler)}},h=Object.freeze(Object.defineProperty({__proto__:null,vButton:u,vFocus:E,vParams:y},Symbol.toStringTag,{value:"Module"})),_=t("",6),v={class:"language-js vp-adaptive-theme"},m=a("button",{title:"Copy Code",class:"copy"},null,-1),b=a("span",{class:"lang"},"js",-1),g={class:"shiki github-dark vp-code-dark"},F=a("span",{class:"line"},[a("span",{style:{color:"#F97583"}},"import"),a("span",{style:{color:"#E1E4E8"}}," {")],-1),f={class:"line"},k={style:{color:"#E1E4E8"}},C=t("",1),T={class:"shiki github-light vp-code-light"},A=a("span",{class:"line"},[a("span",{style:{color:"#D73A49"}},"import"),a("span",{style:{color:"#24292E"}}," {")],-1),S={class:"line"},B={style:{color:"#24292E"}},P=t("",1),D=t("",2),q=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"api/directives/aguide.md","filePath":"api/directives/aguide.md","lastUpdated":1694402208000}'),x={name:"api/directives/aguide.md"},I=Object.assign(x,{setup(s){const n=[];Object.keys(h).forEach(e=>{n.push(e)});const l=(e=2)=>`${n.map(o=>" ".repeat(e)+o).join(", ").replace(/, /g,`,
`)}`;return(e,o)=>(i(),d("div",null,[_,a("div",v,[m,b,a("pre",g,[a("code",null,[F,p(`
`),a("span",f,[a("span",k,c(l()),1)]),p(`
`),C])]),a("pre",T,[a("code",null,[A,p(`
`),a("span",S,[a("span",B,c(l()),1)]),p(`
`),P])])]),D]))}});export{q as __pageData,I as default};