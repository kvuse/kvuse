import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2a76f7fa.js";const d=JSON.parse('{"title":"useMessage","description":"","frontmatter":{},"headers":[],"relativePath":"api/message.md","filePath":"api/message.md","lastUpdated":1658907249000}'),p={name:"api/message.md"},l=e(`<h1 id="usemessage" tabindex="-1">useMessage <a class="header-anchor" href="#usemessage" aria-label="Permalink to &quot;useMessage&quot;">​</a></h1><p>ElMessage提示的方法，取消上次提示，防止重复多次提示</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  import { useMessage } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  const { message, messageBox } = useMessage();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  message.error(&#39;错误提示&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  message.success(&#39;成功提示&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  message.waring(&#39;警告提示&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  // messageBox</span></span>
<span class="line"><span style="color:#E1E4E8;">  messageBox.confirm({ msg: </span><span style="color:#9ECBFF;">&#39;是否确认删除?&#39;</span><span style="color:#E1E4E8;"> }).then(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;删除成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  messageBox.alert({ msg: </span><span style="color:#9ECBFF;">&#39;提示信息！&#39;</span><span style="color:#E1E4E8;"> }, () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    message.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;错误提示&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  import { useMessage } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  const { message, messageBox } = useMessage();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  message.error(&#39;错误提示&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  message.success(&#39;成功提示&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  message.waring(&#39;警告提示&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  // messageBox</span></span>
<span class="line"><span style="color:#24292E;">  messageBox.confirm({ msg: </span><span style="color:#032F62;">&#39;是否确认删除?&#39;</span><span style="color:#24292E;"> }).then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;删除成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  messageBox.alert({ msg: </span><span style="color:#032F62;">&#39;提示信息！&#39;</span><span style="color:#24292E;"> }, () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    message.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;错误提示&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),o=[l];function c(t,r,E,i,y,g){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
