---
layout: post
title: Edit This Site CSS Widget
description: A widget to edit this site's css template in html, css, and js.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/9/9a/HTML5_audio_icon.svg
category: tools
tags: [tools, widget, web, this site, html css js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/07/edit-this-site-css-widget
seo:
  title: Edit This Site CSS Widget
  description: A widget to edit this site's css template in html, css, and js.
  image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png
  author: Fajar Purnama
  locale: en_US
---

<button onClick="get_current_style()">Get Current Style</button>

<h2>Background Color</h2>
<p>General HTML background color: <input type="color" id="htmlbackgroundColor" /></p>
<p>Header background color: <input type="color" id="headerbackgroundColor" /></p>
<p>Content background color: <input type="color" id="contentbackgroundColor" /></p>
<p>Widget background color: <input type="color" id="widgetbackgroundColor" /></p>
<p>Footer background color: <input type="color" id="footerbackgroundColor" /></p>

<h2>Font Size</h2>
<p>Heading 1 font size: <input type="number" id="heading1fontsize"/></p>

<h2>Font Color</h2>
<p>Heading 1 font color: <input type="color" id="heading1fontcolor"/></p>

<h2>Font Shadow</h2>
<p>Heading 1 font shadow: <input type="text" id="heading1fontshadow"/></p>

<script>
function get_current_style() {
  document.getElementById("htmlbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("html")[0]).backgroundColor);
  
  document.getElementById("headerbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).backgroundColor);

  document.getElementById("contentbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).backgroundColor);
  
  document.getElementById("widgetbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).backgroundColor);

  document.getElementById("footerbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).backgroundColor);

  document.getElementById("heading1fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h1")[0]).fontSize.slice(0, -2));

  document.getElementById("heading1fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h1")[0]).color);

  document.getElementById("heading1fontshadow").value = getComputedStyle(document.getElementsByTagName("h1")[0]).textShadow;
}

document.getElementById("htmlbackgroundColor").addEventListener("change", function(event) {
  document.getElementsByTagName("html")[0].style.backgroundImage = "none";
  document.getElementsByTagName("html")[0].style.backgroundColor = event.target.value;
});

document.getElementById("headerbackgroundColor").addEventListener("change", function(event) {
  document.querySelectorAll(".header")[0].style.backgroundImage = "none";
  document.querySelectorAll(".header")[0].style.backgroundColor = event.target.value;
});

document.getElementById("contentbackgroundColor").addEventListener("change", function(event) {
  document.querySelectorAll(".grid-content")[0].style.backgroundImage = "none";
  document.querySelectorAll(".grid-content")[0].style.backgroundColor = event.target.value;
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  document.querySelectorAll(".grid-widget")[0].style.backgroundImage = "none";
  document.querySelectorAll(".grid-widget")[0].style.backgroundColor = event.target.value;
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  document.querySelectorAll(".grid-widget")[0].style.backgroundImage = "none";
  document.querySelectorAll(".grid-widget")[0].style.backgroundColor = event.target.value;
});

document.getElementById("footerbackgroundColor").addEventListener("change", function(event) {
  document.getElementsByTagName("footer")[0].style.backgroundImage = "none";
  document.getElementsByTagName("footer")[0].style.backgroundColor = event.target.value;
});

document.getElementById("heading1fontsize").addEventListener("change", function(event) {
  document.getElementsByTagName("h1")[0].style.fontSize = event.target.value;
});

document.getElementById("heading1fontcolor").addEventListener("change", function(event) {
  document.getElementsByTagName("h1")[0].style.color = event.target.value;
});

document.getElementById("heading1fontshadow").addEventListener("change", function(event) {
  document.getElementsByTagName("h1")[0].style.textShadow = event.target.value;
});

function rgbToHex(rgbColor) {
  // Extract RGB values from the computed style
  const rgbValues = rgbColor.match(/\d+/g).map(Number);
  const red = rgbValues[0];
  const green = rgbValues[1];
  const blue = rgbValues[2];

  // Convert RGB to hex
  const hexColor = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
  return hexColor;
}
</script>