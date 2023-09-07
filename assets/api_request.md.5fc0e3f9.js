import{_ as n,C as a,o as l,c as p,H as o,Q as e}from"./chunks/framework.2a76f7fa.js";const h=JSON.parse('{"title":"useRequest","description":"","frontmatter":{},"headers":[],"relativePath":"api/request.md","filePath":"api/request.md","lastUpdated":1692157944000}'),c={name:"api/request.md"},t=e(`<h1 id="userequest" tabindex="-1">useRequest <a class="header-anchor" href="#userequest" aria-label="Permalink to &quot;useRequest&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> $api.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;接口地址&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;参数对象&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result: &#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> $api.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;接口地址&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;参数对象&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;result: &#39;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>支持数据格式:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;message&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;成功&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;"> : {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;message&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;成功&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;"> : {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="请求拦截" tabindex="-1">请求拦截 <a class="header-anchor" href="#请求拦截" aria-label="Permalink to &quot;请求拦截&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeRequest</span><span style="color:#E1E4E8;">(config){</span></span>
<span class="line"><span style="color:#E1E4E8;">    config.headers.token </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    return config</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeRequest</span><span style="color:#24292E;">(config){</span></span>
<span class="line"><span style="color:#24292E;">    config.headers.token </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;token&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    return config</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="响应处理" tabindex="-1">响应处理 <a class="header-anchor" href="#响应处理" aria-label="Permalink to &quot;响应处理&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeResponse</span><span style="color:#E1E4E8;">(response){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(response);</span></span>
<span class="line"><span style="color:#E1E4E8;">    const { data, </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: { code } } = response || {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;"> === 0) return data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回请求结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    return data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeResponse</span><span style="color:#24292E;">(response){</span></span>
<span class="line"><span style="color:#24292E;">    console.log(response);</span></span>
<span class="line"><span style="color:#24292E;">    const { data, </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: { code } } = response || {};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">code</span><span style="color:#24292E;"> === 0) return data;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回请求结果</span></span>
<span class="line"><span style="color:#24292E;">    return data;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="报错信息处理" tabindex="-1">报错信息处理 <a class="header-anchor" href="#报错信息处理" aria-label="Permalink to &quot;报错信息处理&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>默认<code>message.error</code>提示报错信息</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">errorHandler</span><span style="color:#E1E4E8;">(error){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">errorHandler</span><span style="color:#24292E;">(error){</span></span>
<span class="line"><span style="color:#24292E;">    console.log(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="对象模式" tabindex="-1">对象模式 <a class="header-anchor" href="#对象模式" aria-label="Permalink to &quot;对象模式&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>如果返参想用对象类型，请使用<code>$http</code></strong></p><p><code>responseHandler</code>方法，可以不写，默认是<code>code</code>为<code>[0,1001]</code>为成功, 如果其他可以设置</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $http } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">responseHandler</span><span style="color:#E1E4E8;">(response) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const { data, </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: { code } } = response || {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;"> === 0) return data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回请求结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    return data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const { code, data, message } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> $http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;接口地址&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;参数对象&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;code, data, message: &#39;</span><span style="color:#E1E4E8;">, code, data, message);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $http } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">responseHandler</span><span style="color:#24292E;">(response) {</span></span>
<span class="line"><span style="color:#24292E;">    const { data, </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: { code } } = response || {};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">code</span><span style="color:#24292E;"> === 0) return data;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回请求结果</span></span>
<span class="line"><span style="color:#24292E;">    return data;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  const { code, data, message } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> $http.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;接口地址&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;参数对象&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;code, data, message: &#39;</span><span style="color:#24292E;">, code, data, message);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="使用实例" tabindex="-1">使用实例 <a class="header-anchor" href="#使用实例" aria-label="Permalink to &quot;使用实例&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>默认设置超时时间为10s</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import axios from &#39;axios&#39;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  instance,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> $api.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;接口地址&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result: &#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#24292E;">import axios from &#39;axios&#39;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#24292E;">  timeout: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 超时时间</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  instance,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> $api.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;接口地址&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;result: &#39;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="排除去重" tabindex="-1">排除去重 <a class="header-anchor" href="#排除去重" aria-label="Permalink to &quot;排除去重&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请求默认接口连续请求会去重处理，如果业务不去重，可以设置排除去重的list</p><p><em>排除接口添加请求方式，例如：<code>/order&amp;get</code></em></p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QaD4e" id="tab-AG_pzpk" checked="checked"><label for="tab-AG_pzpk">全局添加</label><input type="radio" name="group-QaD4e" id="tab-xkk41ED"><label for="tab-xkk41ED">接口添加</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">/**</span></span>
<span class="line"><span style="color:#E1E4E8;"> * 添加排除去重的接口列表</span></span>
<span class="line"><span style="color:#E1E4E8;"> * @param {array} excludePeddings  例如：\`/order&amp;get\`*</span></span>
<span class="line"><span style="color:#E1E4E8;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#E1E4E8;">  excludePeddings: [</span><span style="color:#9ECBFF;">&#39;/erp/order&amp;post&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> $api.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/erp/order&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;参数对象&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result: &#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">/**</span></span>
<span class="line"><span style="color:#24292E;"> * 添加排除去重的接口列表</span></span>
<span class="line"><span style="color:#24292E;"> * @param {array} excludePeddings  例如：\`/order&amp;get\`*</span></span>
<span class="line"><span style="color:#24292E;"> */</span></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest({</span></span>
<span class="line"><span style="color:#24292E;">  excludePeddings: [</span><span style="color:#032F62;">&#39;/erp/order&amp;post&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> $api.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/erp/order&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;参数对象&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;result: &#39;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">const { $api } = useRequest();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">/**</span></span>
<span class="line"><span style="color:#E1E4E8;"> * 如果你的接口不需要取消请求，可以添加该参数 { cancelable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> $api.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/erp/order&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;参数对象&#39;</span><span style="color:#E1E4E8;">, { cancelable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result: &#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useRequest } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#24292E;">const { $api } = useRequest();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">/**</span></span>
<span class="line"><span style="color:#24292E;"> * 如果你的接口不需要取消请求，可以添加该参数 { cancelable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;"> */</span></span>
<span class="line"><span style="color:#24292E;">const getList = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> $api.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/erp/order&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;参数对象&#39;</span><span style="color:#24292E;">, { cancelable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;result: &#39;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2>`,22);function r(E,i,y,d,u,g){const s=a("v-table");return l(),p("div",null,[t,o(s,{type:"event",data:[{event:"instance",dec:"axios实例，默认axios",callback:"-"},{event:"beforeRequest",dec:"请求拦截",callback:"config"},{event:"beforeResponse",dec:"响应拦截",callback:"response"},{event:"responseHandler",dec:"响应处理",callback:"response"},{event:"errorResponse",dec:"响应报错处理",callback:"error, config"},{event:"errorHandler",dec:"报错信息处理, 默认message.error提示报错信息",callback:"error"},{event:"excludePeddings",dec:"不去重连续请求的接口列表 url&get，默认 [ ]",callback:"-"}]},null,8,["data"])])}const v=n(c,[["render",r]]);export{h as __pageData,v as default};
