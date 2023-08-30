import{_ as p,C as c,o as t,c as E,H as o,w as a,k as s,a as l,Q as r}from"./chunks/framework.9020e21b.js";const x=JSON.parse('{"title":"Picker 添加选择器","description":"","frontmatter":{},"headers":[],"relativePath":"element-plus/picker.md","filePath":"element-plus/picker.md","lastUpdated":1681352261000}'),y={name:"element-plus/picker.md"},i=s("h1",{id:"picker-添加选择器",tabindex:"-1"},[l("Picker 添加选择器 "),s("a",{class:"header-anchor",href:"#picker-添加选择器","aria-label":'Permalink to "Picker 添加选择器"'},"​")],-1),F=s("h2",{id:"基础使用",tabindex:"-1"},[l("基础使用 "),s("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1),d=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":table-column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableColumn"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":table-data"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"footer"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text-right"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"clickHandle"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-picker"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableColumn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'日期'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'date'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'姓名'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'地址'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'address'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableData"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-04'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-03'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'luke'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-02'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-01'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"multipleSelection"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"clickHandle"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'multipleSelection.value: '"),s("span",{style:{color:"#E1E4E8"}},", multipleSelection.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scss"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".text-right"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"right"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":table-column"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableColumn"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":table-data"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"footer"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"text-right"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"clickHandle"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-picker"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableColumn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'日期'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'date'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'姓名'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'地址'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'address'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableData"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-04'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-03'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'luke'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-02'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-01'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"multipleSelection"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"clickHandle"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'multipleSelection.value: '"),s("span",{style:{color:"#24292E"}},", multipleSelection.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scss"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".text-right"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"right"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),C=s("h2",{id:"插槽使用",tabindex:"-1"},[l("插槽使用 "),s("a",{class:"header-anchor",href:"#插槽使用","aria-label":'Permalink to "插槽使用"'},"​")],-1),m=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":table-column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableColumn"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":table-data"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"header-address"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"el-tag"),s("span",{style:{color:"#E1E4E8"}},">自定义表头</"),s("span",{style:{color:"#85E89D"}},"el-tag"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"address"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},"{ row }"),s("span",{style:{color:"#9ECBFF"}},'"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ `custom: ${row.address}` }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"footer"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"text-right"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"clickHandle"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"right-header"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"el-tag"),s("span",{style:{color:"#E1E4E8"}},">自定义右侧表头</"),s("span",{style:{color:"#85E89D"}},"el-tag"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-picker"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableColumn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'日期'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'date'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'姓名'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    label: "),s("span",{style:{color:"#9ECBFF"}},"'地址'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'address'"),s("span",{style:{color:"#E1E4E8"}},", custom: "),s("span",{style:{color:"#9ECBFF"}},"'address'"),s("span",{style:{color:"#E1E4E8"}},", header: "),s("span",{style:{color:"#9ECBFF"}},"'header-address'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableData"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-04'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-03'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'luke'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-02'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-01'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"multipleSelection"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"clickHandle"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'multipleSelection.value: '"),s("span",{style:{color:"#E1E4E8"}},", multipleSelection.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scss"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".text-right"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"right"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":table-column"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableColumn"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":table-data"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"header-address"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-tag"),s("span",{style:{color:"#24292E"}},">自定义表头</"),s("span",{style:{color:"#22863A"}},"el-tag"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"address"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},"{ row }"),s("span",{style:{color:"#032F62"}},'"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ `custom: ${row.address}` }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"footer"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"text-right"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"clickHandle"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"right-header"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"el-tag"),s("span",{style:{color:"#24292E"}},">自定义右侧表头</"),s("span",{style:{color:"#22863A"}},"el-tag"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-picker"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableColumn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'日期'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'date'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'姓名'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    label: "),s("span",{style:{color:"#032F62"}},"'地址'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'address'"),s("span",{style:{color:"#24292E"}},", custom: "),s("span",{style:{color:"#032F62"}},"'address'"),s("span",{style:{color:"#24292E"}},", header: "),s("span",{style:{color:"#032F62"}},"'header-address'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableData"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-04'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-03'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'luke'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-02'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-01'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"multipleSelection"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"clickHandle"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'multipleSelection.value: '"),s("span",{style:{color:"#24292E"}},", multipleSelection.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scss"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".text-right"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"right"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),B=s("h2",{id:"弹框模式",tabindex:"-1"},[l("弹框模式 "),s("a",{class:"header-anchor",href:"#弹框模式","aria-label":'Permalink to "弹框模式"'},"​")],-1),u=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"一般添加商品，都是使用弹框模式")],-1),A=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"large"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"openHandler"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    添加商品")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-dialog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"添加商品"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"showPicker"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"width"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"800px"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":show-footer"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},":table-column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableColumn"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":table-data"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"footer"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"flex-between"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"k-page"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":total"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"total"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"currentPage"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"mt0"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"confirmHandle"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"showPicker = false"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              取消")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"k-picker"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-dialog"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableColumn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'日期'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'date'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'姓名'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'地址'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'address'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableData"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-04'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-03'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'luke'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-02'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-01'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"multipleSelection"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"showPicker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"openHandler"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  showPicker.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"total"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"currentPage"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"confirmHandle"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  showPicker.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'multipleSelection: '"),s("span",{style:{color:"#E1E4E8"}},", multipleSelection);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scss"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"large"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"openHandler"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    添加商品")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-dialog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"添加商品"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"showPicker"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"width"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"800px"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":show-footer"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},":table-column"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableColumn"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":table-data"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"footer"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"flex-between"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"k-page"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":total"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"total"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"currentPage"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"mt0"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"confirmHandle"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"showPicker = false"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              取消")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"k-picker"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-dialog"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableColumn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'日期'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'date'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'姓名'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'地址'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'address'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableData"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-04'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-03'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'luke'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-02'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-01'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"multipleSelection"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"showPicker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"openHandler"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  showPicker.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"total"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"currentPage"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"confirmHandle"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  showPicker.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'multipleSelection: '"),s("span",{style:{color:"#24292E"}},", multipleSelection);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scss"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),k=s("h2",{id:"显示数量",tabindex:"-1"},[l("显示数量 "),s("a",{class:"header-anchor",href:"#显示数量","aria-label":'Permalink to "显示数量"'},"​")],-1),D=s("p",null,[l("设置"),s("code",null,"show-count"),l(", 可设置数量选择")],-1),b=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"size"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"large"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"openHandler"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    添加商品")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"k-dialog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"添加商品"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"showPicker"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"width"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"800px"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":show-footer"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},":table-column"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableColumn"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":table-data"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"show-count"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}}," #"),s("span",{style:{color:"#B392F0"}},"footer"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"flex-between"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"k-page"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":total"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"total"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"currentPage"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"mt0"'),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"primary"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"confirmHandle"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            <"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"showPicker = false"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              取消")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            </"),s("span",{style:{color:"#85E89D"}},"k-button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"k-picker"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"k-dialog"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableColumn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'日期'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'date'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'姓名'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'name'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  { label: "),s("span",{style:{color:"#9ECBFF"}},"'地址'"),s("span",{style:{color:"#E1E4E8"}},", prop: "),s("span",{style:{color:"#9ECBFF"}},"'address'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tableData"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-04'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-03'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'luke'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-02'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    id: "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    date: "),s("span",{style:{color:"#9ECBFF"}},"'2016-05-01'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#9ECBFF"}},"'Tom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    address: "),s("span",{style:{color:"#9ECBFF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"multipleSelection"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"showPicker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"openHandler"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  showPicker.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"total"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"currentPage"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"confirmHandle"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  showPicker.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'multipleSelection: '"),s("span",{style:{color:"#E1E4E8"}},", multipleSelection);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scss"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"size"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"large"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"openHandler"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    添加商品")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"k-dialog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"添加商品"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"showPicker"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"width"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"800px"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":show-footer"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"k-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},":table-column"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableColumn"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":table-data"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"tableData"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"show-count"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"multipleSelection"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}}," #"),s("span",{style:{color:"#6F42C1"}},"footer"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"flex-between"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"k-page"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":total"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"total"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"currentPage"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"mt0"'),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"primary"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"confirmHandle"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            <"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"showPicker = false"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              取消")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            </"),s("span",{style:{color:"#22863A"}},"k-button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"k-picker"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"k-dialog"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableColumn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'日期'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'date'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'姓名'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'name'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  { label: "),s("span",{style:{color:"#032F62"}},"'地址'"),s("span",{style:{color:"#24292E"}},", prop: "),s("span",{style:{color:"#032F62"}},"'address'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tableData"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-04'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-03'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'luke'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-02'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    id: "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    date: "),s("span",{style:{color:"#032F62"}},"'2016-05-01'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#032F62"}},"'Tom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    address: "),s("span",{style:{color:"#032F62"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"multipleSelection"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"showPicker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"openHandler"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  showPicker.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"total"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"currentPage"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"confirmHandle"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  showPicker.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'multipleSelection: '"),s("span",{style:{color:"#24292E"}},", multipleSelection);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scss"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),h=s("h2",{id:"picker-属性",tabindex:"-1"},[l("Picker 属性 "),s("a",{class:"header-anchor",href:"#picker-属性","aria-label":'Permalink to "Picker 属性"'},"​")],-1),g=r("",3);function v(f,S,_,P,w,N){const n=c("demo"),e=c("v-table");return t(),E("div",null,[i,F,o(n,{md:"",src:"picker/basic"},{default:a(()=>[d]),_:1}),C,o(n,{md:"",src:"picker/slots"},{default:a(()=>[m]),_:1}),B,u,o(n,{md:"",src:"picker/dialog"},{default:a(()=>[A]),_:1}),k,D,o(n,{md:"",src:"picker/show-count"},{default:a(()=>[b]),_:1}),h,o(e,{type:"attrs",data:[{attr:"modelValue / v-model",dec:"勾选的列表",type:"array",optional:"-",default:[]},{attr:"table-column",dec:"表格列表",type:"array",optional:"-",default:"[]"},{attr:"table-data",dec:"表格数据",type:"array",optional:"-",default:"[]"},{attr:"select-list",dec:"设置选中的数组",type:"array",optional:"-",default:[]},{attr:"key-id",dec:"设置选择的唯一值",type:"string",optional:"-",default:"id"},{attr:"key-name",dec:"设置选择的名字参数",type:"string",optional:"-",default:"name"}]}),g,o(e,{type:"slot",data:[{name:"header",dec:"自定义表头插槽",child:"{  column }"},{name:"custom",dec:"自定义内容插槽",child:"{ row, column, index }"},{name:"right",dec:"右侧插槽",child:"-"},{name:"right-header",dec:"右侧表头插槽",child:"-"}]})])}const G=p(y,[["render",v]]);export{x as __pageData,G as default};
