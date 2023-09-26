import{_ as a,C as n,o as e,c as l,H as t,Q as p}from"./chunks/framework.3e3201d2.js";const D=JSON.parse('{"title":"usePage","description":"","frontmatter":{},"headers":[],"relativePath":"api/page.md","filePath":"api/page.md","lastUpdated":1687339823000}'),o={name:"api/page.md"},c=p(`<h1 id="usepage" tabindex="-1">usePage <a class="header-anchor" href="#usepage" aria-label="Permalink to &quot;usePage&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  import { usePage } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  const { totalPage, totalRecord, currentPage, listData, getNowPage, setListAndPage, nullData } = usePage();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  const getResult = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getApi</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setListAndPage</span><span style="color:#E1E4E8;">(result); </span><span style="color:#6A737D;">// 设置totalPage和listData....</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果获得数组是累加的话，可以添加第二个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// setListAndPage(result, true); </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回的数组合并 listData.value = [...listData.value, ...result]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  import { usePage } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  const { totalPage, totalRecord, currentPage, listData, getNowPage, setListAndPage, nullData } = usePage();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  const getResult = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getApi</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setListAndPage</span><span style="color:#24292E;">(result); </span><span style="color:#6A737D;">// 设置totalPage和listData....</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果获得数组是累加的话，可以添加第二个参数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// setListAndPage(result, true); </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回的数组合并 listData.value = [...listData.value, ...result]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2>`,4);function r(i,E,y,g,d,u){const s=n("v-table");return e(),l("div",null,[c,t(s,{type:"event",data:[{event:"totalPage",dec:"列表分页总页数",callback:"-"},{event:"totalRecord",dec:"列表分页总条数",callback:"-"},{event:"currentPage",dec:"当前页数",callback:"-"},{event:"listData/tableData",dec:"当前分页数据列表",callback:"-"},{event:"isNullData",dec:"是否是空数据",callback:"-"},{event:"loading",dec:"接口请求参数，如果请求完成为false",callback:"-"},{event:"getNowPage",dec:"获取当前分页数据, 删除商品临界值计算, 删除判断是否跳转上一页",callback:"(delList) delList删除的商品列表(批量删除使用)"},{event:"setListAndPage",dec:"设置listData,pageTotal",callback:"如果单独设置list和totalPage请忽略"}]})])}const _=a(o,[["render",r]]);export{D as __pageData,_ as default};
