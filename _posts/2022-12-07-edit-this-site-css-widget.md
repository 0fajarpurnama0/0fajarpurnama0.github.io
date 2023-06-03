---
layout: post
title: Edit This Site CSS Widget
category: tools
tags: [tools, widget, web, this site, html css js]
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png
description: A widget to edit this site's css template in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/07/edit-this-site-css-widget
---

<p>General HTML background color: <input type="color" id="htmlColor"></p>
<button onclick="setstyle()">test</button>

<script>
function setstyle() {
  // Get the footer element
  alert("test");
  const footer = document.getElementsByTagName("footer")[0];

  // Set the background color
  footer.style.backgroundImage = "red";
  footer.style.backgroundColor = "red";
  footer.style.backgroundColor = "red";
}
</script>