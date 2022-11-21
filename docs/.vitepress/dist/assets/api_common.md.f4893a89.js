import{_ as s,c as a,o as n,a as o}from"./app.ef82ab6e.js";const i=JSON.parse('{"title":"useCommon","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"\u8DEF\u7531\u540D\u79F0","slug":"\u8DEF\u7531\u540D\u79F0","link":"#\u8DEF\u7531\u540D\u79F0","children":[]},{"level":2,"title":"\u8DF3\u8F6C\u9875\u9762","slug":"\u8DF3\u8F6C\u9875\u9762","link":"#\u8DF3\u8F6C\u9875\u9762","children":[]},{"level":2,"title":"\u5F00\u53D1\u6A21\u5F0F","slug":"\u5F00\u53D1\u6A21\u5F0F","link":"#\u5F00\u53D1\u6A21\u5F0F","children":[]},{"level":2,"title":"\u5168\u5C40\u5BF9\u8C61","slug":"\u5168\u5C40\u5BF9\u8C61","link":"#\u5168\u5C40\u5BF9\u8C61","children":[]}],"relativePath":"api/common.md","lastUpdated":1658907249000}'),l={name:"api/common.md"},p=o(`<h1 id="usecommon" tabindex="-1">useCommon <a class="header-anchor" href="#usecommon" aria-hidden="true">#</a></h1><p>\u4F7F\u7528vue\uFF0Cvue-roter\uFF0Cvuex\uFF0Cpinia\u7B49\u4E00\u4E9B\u516C\u5171\u7684api</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useCommon </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> router</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> nextTick</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> reactive</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> computed</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> watch</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> watchEffect</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onMounted</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onUnmounted</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  routerName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> loadPage</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isDev</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> replacePage</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pinia</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> globalProperties</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useCommon();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DEF\u7531\u540D\u79F0" tabindex="-1">\u8DEF\u7531\u540D\u79F0 <a class="header-anchor" href="#\u8DEF\u7531\u540D\u79F0" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCommon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> routerName </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCommon</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F53\u524D\u8DEF\u7531\u540D\u79F0:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> routerName)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8DF3\u8F6C\u9875\u9762" tabindex="-1">\u8DF3\u8F6C\u9875\u9762 <a class="header-anchor" href="#\u8DF3\u8F6C\u9875\u9762" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>loadPage\u4E3A\u8DEF\u7531history\u6A21\u5F0F\uFF0C\u4E8B\u4EF6<code>router.push</code></p><p><strong>\u5982\u679C\u4F7F\u7528<code>router.replace</code>, \u8BF7\u4F7F\u7528<code>replacePage</code></strong></p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCommon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> loadPage </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCommon</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">loadPage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// name</span></span>
<span class="line"><span style="color:#82AAFF;">loadPage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// path</span></span>
<span class="line"><span style="color:#82AAFF;">loadPage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// query</span></span>
<span class="line"><span style="color:#82AAFF;">loadPage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// params</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F00\u53D1\u6A21\u5F0F" tabindex="-1">\u5F00\u53D1\u6A21\u5F0F <a class="header-anchor" href="#\u5F00\u53D1\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCommon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> isDev </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCommon</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">isDev: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isDev)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u5BF9\u8C61" tabindex="-1">\u5168\u5C40\u5BF9\u8C61 <a class="header-anchor" href="#\u5168\u5C40\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u83B7\u53D6\u7ED1\u5B9A\u7684\u5168\u5C40\u5BF9\u8C61</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCommon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@kvuse/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> globalProperties </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCommon</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">globalProperties: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> globalProperties)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,14),e=[p];function c(t,r,D,y,F,C){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
