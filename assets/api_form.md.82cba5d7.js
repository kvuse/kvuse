import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.6c428c33.js";const d=JSON.parse('{"title":"useForm","description":"","frontmatter":{},"headers":[],"relativePath":"api/form.md","filePath":"api/form.md","lastUpdated":1658907249000}'),o={name:"api/form.md"},p=l(`<h1 id="useform" tabindex="-1">useForm <a class="header-anchor" href="#useform" aria-label="Permalink to &quot;useForm&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>elForm表单验证，重置方法</strong></p><blockquote><p>默认ref=&quot;ruleFormRef&quot;，如果自定义方法中传值（你设置的ref）</p></blockquote></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  import { useForm } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  const { ruleFormRef, submitForm, resetForm } = useForm();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  const submitHandler = async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">submitForm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;result: &#39;</span><span style="color:#E1E4E8;">, result);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  const resetFormHandler = () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resetForm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  import { useForm } from &#39;@kvuse/core&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  const { ruleFormRef, submitForm, resetForm } = useForm();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  const submitHandler = async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    const result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">submitForm</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;result: &#39;</span><span style="color:#24292E;">, result);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  const resetFormHandler = () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resetForm</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),e=[p];function t(r,c,E,i,y,m){return a(),n("div",null,e)}const F=s(o,[["render",t]]);export{d as __pageData,F as default};
