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
  textarea {
    width: 100%;
    height: 200px;
    font-family: monospace;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Ensures padding doesn't affect width */
  }

  iframe {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    background-color: #fff;
    display: block; /* Removes bottom spacing issues */
  }

  h2 { margin-top: 20px; }
</style>

<h1>Live HTML/CSS/JS Editor</h1>

<p>Type your full HTML code below (including tags like &lt;style&gt; and &lt;script&gt;).</p>

<textarea id="code" placeholder="<h1>Hello World</h1>&#10;<style>h1{color:red}</style>"></textarea>

<h2>Preview:</h2>
<iframe id="preview"></iframe>

<script>
  var codeInput = document.getElementById('code');
  var previewFrame = document.getElementById('preview');

  function updatePreview() {
    var code = codeInput.value;
    
    // We access the document inside the iframe
    var doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    // We write the code directly into the iframe's document
    doc.open();
    doc.write(code);
    doc.close();
  }

  // Update on startup
  updatePreview();

  // Update whenever the user types
  codeInput.addEventListener('input', updatePreview);
</script>