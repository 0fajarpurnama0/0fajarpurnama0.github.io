---
layout: post
title: HTML CSS Js Simple Live Preview
category: tools
tags: [tools, widget, web, hyper text markup language, Cascading Style Sheets, JavaScript]
featuredimage: https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png
description: A widget for live preview of html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/02/html-css-js-live-preview
---
<style>
  /* Adjust the styling to fit your needs */
  textarea {
    width: 100%;
    height: 200px;
  }

  #preview {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
<h1>Live Preview Example</h1>

<textarea id="code" placeholder="Enter HTML, CSS, and JavaScript code here..."></textarea>

<h2>Preview:</h2>
<div id="preview"></div>

<script>
  var codeInput = document.getElementById('code');
  var previewOutput = document.getElementById('preview');

  codeInput.addEventListener('input', function() {
    var code = codeInput.value;
    previewOutput.innerHTML = code;
  });
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
  <span style="color: #007700">&lt;title&gt;</span>Live Preview Example<span style="color: #007700">&lt;/title&gt;</span>
  <span style="color: #007700">&lt;style&gt;</span>
    <span style="color: #888888">/* Adjust the styling to fit your needs */</span>
    <span style="color: #007700">textarea</span> {
      <span style="color: #008800; font-weight: bold">width</span><span style="color: #333333">:</span> <span style="color: #6600EE; font-weight: bold">100</span><span style="color: #333333">%</span>;
      <span style="color: #008800; font-weight: bold">height</span><span style="color: #333333">:</span> <span style="color: #6600EE; font-weight: bold">200px</span>;
    }

    <span style="color: #0066BB; font-weight: bold">#preview</span> {
      <span style="color: #008800; font-weight: bold">border</span><span style="color: #333333">:</span> <span style="color: #6600EE; font-weight: bold">1px</span> <span style="color: #008800; font-weight: bold">solid</span> <span style="color: #6600EE; font-weight: bold">#ccc</span>;
      <span style="color: #008800; font-weight: bold">padding</span><span style="color: #333333">:</span> <span style="color: #6600EE; font-weight: bold">10px</span>;
    }
  <span style="color: #007700">&lt;/style&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>
  <span style="color: #007700">&lt;h1&gt;</span>Live Preview Example<span style="color: #007700">&lt;/h1&gt;</span>

  <span style="color: #007700">&lt;textarea</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;code&quot;</span> <span style="color: #0000CC">placeholder=</span><span style="background-color: #fff0f0">&quot;Enter HTML, CSS, and JavaScript code here...&quot;</span><span style="color: #007700">&gt;&lt;/textarea&gt;</span>

  <span style="color: #007700">&lt;h2&gt;</span>Preview:<span style="color: #007700">&lt;/h2&gt;</span>
  <span style="color: #007700">&lt;div</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;preview&quot;</span><span style="color: #007700">&gt;&lt;/div&gt;</span>

  <span style="color: #007700">&lt;script&gt;</span>
    <span style="color: #008800; font-weight: bold">var</span> codeInput <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;code&#39;</span>);
    <span style="color: #008800; font-weight: bold">var</span> previewOutput <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;preview&#39;</span>);

    codeInput.addEventListener(<span style="background-color: #fff0f0">&#39;input&#39;</span>, <span style="color: #008800; font-weight: bold">function</span>() {
      <span style="color: #008800; font-weight: bold">var</span> code <span style="color: #333333">=</span> codeInput.value;
      previewOutput.innerHTML <span style="color: #333333">=</span> code;
    });
  <span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>