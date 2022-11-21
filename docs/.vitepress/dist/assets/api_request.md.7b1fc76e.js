import{_ as n,c as a,b as l,a as p,o,r as e}from"./app.ef82ab6e.js";const u=JSON.parse('{"title":"useRequest","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"\u8BF7\u6C42\u62E6\u622A","slug":"\u8BF7\u6C42\u62E6\u622A","link":"#\u8BF7\u6C42\u62E6\u622A","children":[]},{"level":2,"title":"\u54CD\u5E94\u5904\u7406","slug":"\u54CD\u5E94\u5904\u7406","link":"#\u54CD\u5E94\u5904\u7406","children":[]},{"level":2,"title":"\u62A5\u9519\u4FE1\u606F\u5904\u7406","slug":"\u62A5\u9519\u4FE1\u606F\u5904\u7406","link":"#\u62A5\u9519\u4FE1\u606F\u5904\u7406","children":[]},{"level":2,"title":"\u5BF9\u8C61\u6A21\u5F0F","slug":"\u5BF9\u8C61\u6A21\u5F0F","link":"#\u5BF9\u8C61\u6A21\u5F0F","children":[]},{"level":2,"title":"\u4F7F\u7528\u5B9E\u4F8B","slug":"\u4F7F\u7528\u5B9E\u4F8B","link":"#\u4F7F\u7528\u5B9E\u4F8B","children":[]},{"level":2,"title":"\u53C2\u6570\u8BF4\u660E","slug":"\u53C2\u6570\u8BF4\u660E","link":"#\u53C2\u6570\u8BF4\u660E","children":[]}],"relativePath":"api/request.md","lastUpdated":1669021123000}'),c={name:"api/request.md"},t=p(`<h1 id="userequest" tabindex="-1">useRequest <a class="header-anchor" href="#userequest" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $api </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const getList = async () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> $api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63A5\u53E3\u5730\u5740</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">result: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u652F\u6301\u6570\u636E\u683C\u5F0F:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6210\u529F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BF7\u6C42\u62E6\u622A" tabindex="-1">\u8BF7\u6C42\u62E6\u622A <a class="header-anchor" href="#\u8BF7\u6C42\u62E6\u622A" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $api </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">beforeRequest</span><span style="color:#A6ACCD;">(config)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.headers.token </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return config</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u54CD\u5E94\u5904\u7406" tabindex="-1">\u54CD\u5E94\u5904\u7406 <a class="header-anchor" href="#\u54CD\u5E94\u5904\u7406" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $api </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">beforeResponse</span><span style="color:#A6ACCD;">(response)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(response);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62A5\u9519\u4FE1\u606F\u5904\u7406" tabindex="-1">\u62A5\u9519\u4FE1\u606F\u5904\u7406 <a class="header-anchor" href="#\u62A5\u9519\u4FE1\u606F\u5904\u7406" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u9ED8\u8BA4<code>message.error</code>\u63D0\u793A\u62A5\u9519\u4FE1\u606F</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $api </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">errorHandler</span><span style="color:#A6ACCD;">(error)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5BF9\u8C61\u6A21\u5F0F" tabindex="-1">\u5BF9\u8C61\u6A21\u5F0F <a class="header-anchor" href="#\u5BF9\u8C61\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>\u5982\u679C\u8FD4\u53C2\u60F3\u7528\u5BF9\u8C61\u7C7B\u578B\uFF0C\u8BF7\u4F7F\u7528<code>$http</code></strong></p><p><code>responseHandler</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u662F<code>code</code>\u4E3A<code>[0,1001]</code>\u4E3A\u6210\u529F, \u5982\u679C\u5176\u4ED6\u53EF\u4EE5\u8BBE\u7F6E</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $http </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">responseHandler</span><span style="color:#A6ACCD;">(response) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;"> (code </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) return data;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6267\u884C\u62A5\u9519\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    return data;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const getList = async () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> $http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63A5\u53E3\u5730\u5740</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">code, data, message: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> message);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u5B9E\u4F8B" tabindex="-1">\u4F7F\u7528\u5B9E\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u5B9E\u4F8B" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u9ED8\u8BA4\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A10s</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useRequest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const instance = axios.create(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  timeout: </span><span style="color:#F78C6C;">5000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> $api </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useRequest(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const getList = async () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> $api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63A5\u53E3\u5730\u5740</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">result: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h2>`,19);function r(D,y,F,C,A,i){const s=e("v-table");return o(),a("div",null,[t,l(s,{type:"event",data:[{event:"instance",dec:"axios\u5B9E\u4F8B\uFF0C\u9ED8\u8BA4axios",callback:"-"},{event:"beforeRequest",dec:"\u8BF7\u6C42\u62E6\u622A",callback:"config"},{event:"beforeResponse",dec:"\u54CD\u5E94\u62E6\u622A",callback:"response"},{event:"responseHandler",dec:"\u54CD\u5E94\u5904\u7406",callback:"response"},{event:"errorResponse",dec:"\u54CD\u5E94\u62A5\u9519\u5904\u7406",callback:"error, config"},{event:"errorHandler",dec:"\u62A5\u9519\u4FE1\u606F\u5904\u7406, \u9ED8\u8BA4message.error\u63D0\u793A\u62A5\u9519\u4FE1\u606F",callback:"error"}]},null,8,["data"])])}const g=n(c,[["render",r]]);export{u as __pageData,g as default};