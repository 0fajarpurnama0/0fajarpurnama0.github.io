---
layout: post
title: Edit This Site CSS Widget
category: tools
tags: [tools, widget, web, this site, html css js]
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png
description: A widget to edit this site's css template in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/07/edit-this-site-css-widget
---

<button onClick="get_current_style()">Get Current Style</button>

<h2>Background Color</h2>
<p>General HTML background color: <input type="color" id="htmlbackgroundColor" /></p>
<p>Header background color: <input type="color" id="headerbackgroundColor" /></p>
<p>Content background color: <input type="color" id="contentbackgroundColor" /></p>
<p>Widget background color: <input type="color" id="widgetbackgroundColor" /></p>
<p>Footer background color: <input type="color" id="footerbackgroundColor" /></p>

<script>
function get_current_style() {
  document.getElementById("htmlbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("html")[0]).backgroundColor);
  
  document.getElementById("headerbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).backgroundColor);

  document.getElementById("contentbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).backgroundColor);
  
  document.getElementById("widgetbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).backgroundColor);

  document.getElementById("footerbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).backgroundColor);
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