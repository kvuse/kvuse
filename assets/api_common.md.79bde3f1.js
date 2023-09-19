import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.6c428c33.js";const u=JSON.parse('{"title":"useCommon","description":"","frontmatter":{},"headers":[],"relativePath":"api/common.md","filePath":"api/common.md","lastUpdated":1681352261000}'),l={name:"api/common.md"},p=o(`<h1 id="usecommon" tabindex="-1">useCommon <a class="header-anchor" href="#usecommon" aria-label="Permalink to &quot;useCommon&quot;">​</a></h1><p>使用vue，vue-router，vuex，pinia等一些公共的api</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useCommon } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const {</span></span>
<span class="line"><span style="color:#E1E4E8;">   route, router, routeQuery, routeParams, routerName, loadPage, isDev, replacePage, globalProperties,</span></span>
<span class="line"><span style="color:#E1E4E8;">   resetParams, store, pinia, nextTick, ref, watch, onMounted, </span></span>
<span class="line"><span style="color:#E1E4E8;">   onUnmounted, watchEffect, getCurrentInstance, toRefs,</span></span>
<span class="line"><span style="color:#E1E4E8;">} = useCommon();</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useCommon } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const {</span></span>
<span class="line"><span style="color:#24292E;">   route, router, routeQuery, routeParams, routerName, loadPage, isDev, replacePage, globalProperties,</span></span>
<span class="line"><span style="color:#24292E;">   resetParams, store, pinia, nextTick, ref, watch, onMounted, </span></span>
<span class="line"><span style="color:#24292E;">   onUnmounted, watchEffect, getCurrentInstance, toRefs,</span></span>
<span class="line"><span style="color:#24292E;">} = useCommon();</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="路由名称" tabindex="-1">路由名称 <a class="header-anchor" href="#路由名称" aria-label="Permalink to &quot;路由名称&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>useCommon</code>中的<code>route</code>是从实例中获取的，非响应式的，如果监听是不会变换的</p><p>如果监听变化，可以使用响应式对象<code>routeQuery</code>,<code>routeParams</code>,<code>routerName</code>获取响应的路由信息，</p></div><ul><li><code>routeQuery</code>: 路由query</li><li><code>routeParams</code>: 路由params</li><li><code>routerName</code>: 路由名字</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCommon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">routerName</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">routeQuery</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">routeParams</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCommon</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前路由名称:&#39;</span><span style="color:#E1E4E8;">, routerName.value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCommon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">routerName</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">routeQuery</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">routeParams</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCommon</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;当前路由名称:&#39;</span><span style="color:#24292E;">, routerName.value);</span></span></code></pre></div><h2 id="跳转页面" tabindex="-1">跳转页面 <a class="header-anchor" href="#跳转页面" aria-label="Permalink to &quot;跳转页面&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>loadPage为路由history模式，事件<code>router.push</code></p><p><strong>如果使用<code>router.replace</code>, 请使用<code>replacePage</code></strong></p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCommon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">loadPage</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCommon</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">loadPage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// name</span></span>
<span class="line"><span style="color:#B392F0;">loadPage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// path</span></span>
<span class="line"><span style="color:#B392F0;">loadPage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">, { query: { id: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;"> } }); </span><span style="color:#6A737D;">// query</span></span>
<span class="line"><span style="color:#B392F0;">loadPage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">, { params: { type: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;"> } }); </span><span style="color:#6A737D;">// params</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCommon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">loadPage</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCommon</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;">loadPage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// name</span></span>
<span class="line"><span style="color:#6F42C1;">loadPage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// path</span></span>
<span class="line"><span style="color:#6F42C1;">loadPage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, { query: { id: </span><span style="color:#005CC5;">123</span><span style="color:#24292E;"> } }); </span><span style="color:#6A737D;">// query</span></span>
<span class="line"><span style="color:#6F42C1;">loadPage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, { params: { type: </span><span style="color:#005CC5;">123</span><span style="color:#24292E;"> } }); </span><span style="color:#6A737D;">// params</span></span></code></pre></div><h2 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCommon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">isDev</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCommon</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;isDev: &#39;</span><span style="color:#E1E4E8;">, isDev);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCommon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">isDev</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCommon</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;isDev: &#39;</span><span style="color:#24292E;">, isDev);</span></span></code></pre></div><h2 id="全局对象" tabindex="-1">全局对象 <a class="header-anchor" href="#全局对象" aria-label="Permalink to &quot;全局对象&quot;">​</a></h2><p>可以获取绑定的全局对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCommon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">globalProperties</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCommon</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;globalProperties: &#39;</span><span style="color:#E1E4E8;">, globalProperties);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCommon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">globalProperties</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCommon</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;globalProperties: &#39;</span><span style="color:#24292E;">, globalProperties);</span></span></code></pre></div><h2 id="重置参数" tabindex="-1">重置参数 <a class="header-anchor" href="#重置参数" aria-label="Permalink to &quot;重置参数&quot;">​</a></h2><p>可以获取初始化参数，重置参数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCommon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@kvuse/core&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">resetParams</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCommon</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  index: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  page: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">data.index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resetParams data: &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">resetParams</span><span style="color:#E1E4E8;">(data));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCommon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@kvuse/core&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resetParams</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCommon</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  index: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  page: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">data.index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;resetParams data: &#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">resetParams</span><span style="color:#24292E;">(data));</span></span></code></pre></div>`,19),e=[p];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const F=s(l,[["render",c]]);export{u as __pageData,F as default};