import{_ as s,o as n,c as a,f as p}from"./app.9115598c.js";const u=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"1\u3001\u5728 main.js \u4E2D\u5168\u90E8\u6CE8\u518C","slug":"_1\u3001\u5728-main-js-\u4E2D\u5168\u90E8\u6CE8\u518C"},{"level":3,"title":"2.\u5728 main.js \u4E2D\u6309\u9700\u6CE8\u518C","slug":"_2-\u5728-main-js-\u4E2D\u6309\u9700\u6CE8\u518C"},{"level":3,"title":"3\u3001\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165","slug":"_3\u3001\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165"}],"relativePath":"guild/quickstart.md"}'),l={name:"guild/quickstart.md"},o=p(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 <code>neat-design</code></p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><h3 id="_1\u3001\u5728-main-js-\u4E2D\u5168\u90E8\u6CE8\u518C" tabindex="-1">1\u3001\u5728 main.js \u4E2D\u5168\u90E8\u6CE8\u518C <a class="header-anchor" href="#_1\u3001\u5728-main-js-\u4E2D\u5168\u90E8\u6CE8\u518C" aria-hidden="true">#</a></h3><div class="language-diff"><button class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:#A6ACCD;">//main.js</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> import neatDesign from &#39;neat-design&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./app.vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> app.use(neatDesign);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5728\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">n-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">phone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dot</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u5728-main-js-\u4E2D\u6309\u9700\u6CE8\u518C" tabindex="-1">2.\u5728 main.js \u4E2D\u6309\u9700\u6CE8\u518C <a class="header-anchor" href="#_2-\u5728-main-js-\u4E2D\u6309\u9700\u6CE8\u518C" aria-hidden="true">#</a></h3><div class="language-diff"><button class="copy"></button><span class="lang">diff</span><pre><code><span class="line"><span style="color:#A6ACCD;">//main.js</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> import { Button, Icon } from &#39;neat-design&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./app.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> app.use(Button);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> app.use(Icon);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5728\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">n-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">phone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">dot</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3\u3001\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165" tabindex="-1">3\u3001\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165 <a class="header-anchor" href="#_3\u3001\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">neat-design</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(c,r,D,i,F,y){return n(),a("div",null,e)}var C=s(l,[["render",t]]);export{u as __pageData,C as default};
