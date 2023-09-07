import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2a76f7fa.js";const d=JSON.parse('{"title":"useFormatParams","description":"","frontmatter":{},"headers":[],"relativePath":"api/formatParams.md","filePath":"api/formatParams.md","lastUpdated":1682309070000}'),p={name:"api/formatParams.md"},o=l(`<h1 id="useformatparams" tabindex="-1">useFormatParams <a class="header-anchor" href="#useformatparams" aria-label="Permalink to &quot;useFormatParams&quot;">​</a></h1><p>格式化参数对象</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>常用于请求对象参数处理以及对象返参处理,可以过滤参数为空的情况</p></div><h2 id="参数处理" tabindex="-1">参数处理 <a class="header-anchor" href="#参数处理" aria-label="Permalink to &quot;参数处理&quot;">​</a></h2><p>默认空值不返回</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFormatParams } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Tyler Bennett&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  phone: </span><span style="color:#9ECBFF;">&#39;123-555-1234&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: </span><span style="color:#9ECBFF;">&#39;NY&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  city: </span><span style="color:#9ECBFF;">&#39;New York&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">useFormatParams</span><span style="color:#E1E4E8;">(params));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//   name: &#39;Tyler Bennett&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   phone: &#39;123-555-1234&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   state: &#39;NY&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   city: &#39;New York&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useFormatParams } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Tyler Bennett&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  phone: </span><span style="color:#032F62;">&#39;123-555-1234&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  email: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  address: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  state: </span><span style="color:#032F62;">&#39;NY&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  city: </span><span style="color:#032F62;">&#39;New York&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">useFormatParams</span><span style="color:#24292E;">(params));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//   name: &#39;Tyler Bennett&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   phone: &#39;123-555-1234&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   state: &#39;NY&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   city: &#39;New York&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// };</span></span></code></pre></div><h2 id="自定义返参" tabindex="-1">自定义返参 <a class="header-anchor" href="#自定义返参" aria-label="Permalink to &quot;自定义返参&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFormatParams } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Tyler Bennett&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  phone: </span><span style="color:#9ECBFF;">&#39;123-555-1234&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  state: </span><span style="color:#9ECBFF;">&#39;NY&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  city: </span><span style="color:#9ECBFF;">&#39;New York&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">excludeList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;city&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">useFormatParams</span><span style="color:#E1E4E8;">(params, excludeList));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//   phone: &#39;123-555-1234&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   state: &#39;NY&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useFormatParams } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Tyler Bennett&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  phone: </span><span style="color:#032F62;">&#39;123-555-1234&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  email: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  address: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  state: </span><span style="color:#032F62;">&#39;NY&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  city: </span><span style="color:#032F62;">&#39;New York&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">excludeList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;city&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">useFormatParams</span><span style="color:#24292E;">(params, excludeList));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log</span></span>
<span class="line"><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#6A737D;">//   phone: &#39;123-555-1234&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//   state: &#39;NY&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">// };</span></span></code></pre></div>`,8),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
