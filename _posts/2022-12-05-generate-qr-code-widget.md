---
layout: post
title: Generate QR Code Widget
category: tools
tags: [tools, widget, web, qr, html css js]
featuredimage: https://0fajarpurnama0.github.io/cv/cv-url-qr.png
description: Quick response code generator widget in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/05/generate-qr-code-widget
---
<input id="textqrcode" type="text" /><button onclick="generateqrcode()">Generate QR Code</button>
<div id="qrcode"></div>
<p>Source: <a href="https://github.com/davidshimjs/qrcodejs">Cross-browser QRCode generator for javascript</a></p>
<script src="{{ '/assets/js/3rdparty/qrcode.js' | relative_url }}"></script>
<script type="text/javascript">
function generateqrcode() {
  let qrcode = new QRCode(document.getElementById("qrcode"), {
    text: document.getElementById("textqrcode").value,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
  <span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs@gh-pages/qrcode.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>
<span style="color: #007700">&lt;input</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;textqrcode&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #007700">/&gt;&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;generateqrcode()&quot;</span><span style="color: #007700">&gt;</span>Generate QR Code<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;div</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;qrcode&quot;</span><span style="color: #007700">&gt;&lt;/div&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text/javascript&quot;</span><span style="color: #007700">&gt;</span>
<span style="color: #008800; font-weight: bold">function</span> generateqrcode() {
  <span style="color: #008800; font-weight: bold">let</span> qrcode <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> QRCode(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;qrcode&quot;</span>), {
    text<span style="color: #333333">:</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;textqrcode&quot;</span>).value,
    width<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">128</span>,
    height<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">128</span>,
    colorDark <span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;#000000&quot;</span>,
    colorLight <span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;#ffffff&quot;</span>,
    correctLevel <span style="color: #333333">:</span> QRCode.CorrectLevel.H
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>
