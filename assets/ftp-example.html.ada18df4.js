import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as s,d as p,w as c,e as l,r as u}from"./app.4fd1cc65.js";const i={},r=n("h1",{id:"ftp-sftp-connector-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ftp-sftp-connector-examples","aria-hidden":"true"},"#"),s(" FTP/SFTP connector examples")],-1),d=l(`<p>The following configuration shows how to organize parameter configuration to read the following csv format file.</p><ul><li>Example csv data</li></ul><div class="language-csv line-numbers-mode" data-ext="csv"><pre class="language-csv"><code><span class="token value">c1</span><span class="token punctuation">,</span><span class="token value">c2</span>
<span class="token value">aaa</span><span class="token punctuation">,</span><span class="token value">bbb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration file used to read the above file:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.ftp.source.FtpInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;FTP&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/upload/&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;success_file_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/upload/_SUCCESS&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;csv&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c2&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(v,m){const a=u("RouterLink");return o(),e("div",null,[r,n("p",null,[s("Parent document: "),p(a,{to:"/en/documents/docs/connectors/ftp/ftp.html"},{default:c(()=>[s("ftp-connector")]),_:1})]),d])}const f=t(i,[["render",k],["__file","ftp-example.html.vue"]]);export{f as default};
