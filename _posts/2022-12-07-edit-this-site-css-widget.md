---
layout: post
title: Edit This Site CSS Widget
description: A widget to edit this site's css template in html, css, and js.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png
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
<p>Menu background color: <input type="color" id="menubackgroundColor" /></p>
<p>Content background color: <input type="color" id="contentbackgroundColor" /></p>
<p>Widget background color: <input type="color" id="widgetbackgroundColor" /></p>
<p>Footer background color: <input type="color" id="footerbackgroundColor" /></p>

<h2>Font Size</h2>
<p>Heading 1 font size: <input type="number" id="heading1fontsize"/></p>
<p>Heading 2 font size: <input type="number" id="heading2fontsize"/></p>
<p>Heading 3 font size: <input type="number" id="heading3fontsize"/></p>
<p>Heading 4 font size: <input type="number" id="heading4fontsize"/></p>
<p>Heading 5 font size: <input type="number" id="heading5fontsize"/></p>
<p>Heading 6 font size: <input type="number" id="heading6fontsize"/></p>
<p>Header font size: <input type="number" id="headerfontsize"/></p>
<p>Header Widget font size: <input type="number" id="headerwidgetfontsize"/></p>
<p>Menu font size: <input type="number" id="menufontsize"/></p>
<p>Widget font size: <input type="number" id="widgetfontsize"/></p>
<p>Footer font size: <input type="number" id="footerfontsize"/></p>
<p>Content font size: <input type="number" id="contentfontsize"/></p>

<h2>Font Color</h2>
<p>Heading 1 font color: <input type="color" id="heading1fontcolor"/></p>
<p>Heading 2 font color: <input type="color" id="heading2fontcolor"/></p>
<p>Heading 3 font color: <input type="color" id="heading3fontcolor"/></p>
<p>Heading 4 font color: <input type="color" id="heading4fontcolor"/></p>
<p>Heading 5 font color: <input type="color" id="heading5fontcolor"/></p>
<p>Heading 6 font color: <input type="color" id="heading6fontcolor"/></p>
<p>Header font color: <input type="color" id="headerfontcolor"/></p>
<p>Header Widget font color: <input type="color" id="headerwidgetfontcolor"/></p>
<p>Menu font color: <input type="color" id="menufontcolor"/></p>
<p>Widget font color: <input type="color" id="widgetfontcolor"/></p>
<p>Footer font color: <input type="color" id="footerfontcolor"/></p>
<p>Content font color: <input type="color" id="contentfontcolor"/></p>

<h2>Font Shadow</h2>
<p>Heading 1 font shadow: <input type="text" id="heading1fontshadow"/></p>
<p>Heading 2 font shadow: <input type="text" id="heading2fontshadow"/></p>
<p>Heading 3 font shadow: <input type="text" id="heading3fontshadow"/></p>
<p>Heading 4 font shadow: <input type="text" id="heading4fontshadow"/></p>
<p>Heading 5 font shadow: <input type="text" id="heading5fontshadow"/></p>
<p>Heading 6 font shadow: <input type="text" id="heading6fontshadow"/></p>
<p>Header font shadow: <input type="shadow" id="headerfontshadow"/></p>
<p>Header Widget font shadow: <input type="shadow" id="headerwidgetfontshadow"/></p>
<p>Menu font shadow: <input type="shadow" id="menufontshadow"/></p>
<p>Widget font shadow: <input type="shadow" id="widgetfontshadow"/></p>
<p>Footer font shadow: <input type="shadow" id="footerfontshadow"/></p>
<p>Content font shadow: <input type="shadow" id="contentfontshadow"/></p>

<h2>Other Styles Coming Soon</h2>

<script>
function get_current_style() {
  document.getElementById("htmlbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("html")[0]).backgroundColor);
  document.getElementById("headerbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).backgroundColor);
  document.getElementById("menubackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).backgroundColor);
  document.getElementById("contentbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).backgroundColor);
  document.getElementById("widgetbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).backgroundColor);
  document.getElementById("footerbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).backgroundColor);

  document.getElementById("heading1fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h1")[0]).fontSize.slice(0, -2));
  document.getElementById("heading2fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h2")[0]).fontSize.slice(0, -2));
  document.getElementById("heading3fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h3")[0]).fontSize.slice(0, -2));
  document.getElementById("heading4fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h4")[0]).fontSize.slice(0, -2));
  document.getElementById("heading5fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h5")[0]).fontSize.slice(0, -2));
  document.getElementById("heading6fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h6")[0]).fontSize.slice(0, -2));
  document.getElementById("headerfontsize").value = Number(getComputedStyle(document.querySelectorAll(".header")[0]).fontSize.slice(0, -2));
  document.getElementById("headerwidgetfontsize").value = Number(getComputedStyle(document.querySelectorAll(".header-widget")[0]).fontSize.slice(0, -2));
  document.getElementById("menufontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).fontSize.slice(0, -2));
  document.getElementById("widgetfontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).fontSize.slice(0, -2));
  document.getElementById("footerfontsize").value = Number(getComputedStyle(document.getElementsByTagName("footer")[0]).fontSize.slice(0, -2));
  document.getElementById("contentfontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-content")[0]).fontSize.slice(0, -2));

  document.getElementById("heading1fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h1")[0]).color);
  document.getElementById("heading2fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h2")[0]).color);
  document.getElementById("heading3fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h3")[0]).color);
  document.getElementById("heading4fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h4")[0]).color);
  document.getElementById("heading5fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h5")[0]).color);
  document.getElementById("heading6fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h6")[0]).color);
  document.getElementById("headerfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).color);
  document.getElementById("headerwidgetfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header-widget")[0]).color);
  document.getElementById("menufontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).color);
  document.getElementById("widgetfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).color);
  document.getElementById("footerfontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).color);
  document.getElementById("contentfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).color);

  document.getElementById("heading1fontshadow").value = getComputedStyle(document.getElementsByTagName("h1")[0]).textShadow;
  document.getElementById("heading2fontshadow").value = getComputedStyle(document.getElementsByTagName("h2")[0]).textShadow;
  document.getElementById("heading3fontshadow").value = getComputedStyle(document.getElementsByTagName("h3")[0]).textShadow;
  document.getElementById("heading4fontshadow").value = getComputedStyle(document.getElementsByTagName("h4")[0]).textShadow;
  document.getElementById("heading5fontshadow").value = getComputedStyle(document.getElementsByTagName("h5")[0]).textShadow;
  document.getElementById("heading6fontshadow").value = getComputedStyle(document.getElementsByTagName("h6")[0]).textShadow;
  document.getElementById("headerfontshadow").value = getComputedStyle(document.querySelectorAll(".header")[0]).textShadow;
  document.getElementById("headerwidgetfontshadow").value = getComputedStyle(document.querySelectorAll(".header-widget")[0]).textShadow;
  document.getElementById("menufontshadow").value = getComputedStyle(document.querySelectorAll(".grid-menu")[0]).textShadow;
  document.getElementById("widgetfontshadow").value = getComputedStyle(document.querySelectorAll(".grid-widget")[0]).textShadow;
  document.getElementById("footerfontshadow").value = getComputedStyle(document.getElementsByTagName("footer")[0]).textShadow;
  document.getElementById("contentfontshadow").value = getComputedStyle(document.querySelectorAll(".grid-content")[0]).textShadow;
}

document.getElementById("htmlbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("headerbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("menubackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("contentbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("footerbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("heading1fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading2fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading3fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading4fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading5fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading6fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("headerfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("headerwidgetfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("menufontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("widgetfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("footerfontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("contentfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading1fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading2fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading3fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading4fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading5fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading6fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("headerfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("headerwidgetfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("menufontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("widgetfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("footerfontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("contentfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading1fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading2fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading3fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading4fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading5fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading6fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("headerfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("headerwidgetfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("widgetfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("footerfontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("contentfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.textShadow = event.target.value;
  }
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

{% highlight html %}
<button onClick="get_current_style()">Get Current Style</button>

<h2>Background Color</h2>
<p>General HTML background color: <input type="color" id="htmlbackgroundColor" /></p>
<p>Header background color: <input type="color" id="headerbackgroundColor" /></p>
<p>Menu background color: <input type="color" id="menubackgroundColor" /></p>
<p>Content background color: <input type="color" id="contentbackgroundColor" /></p>
<p>Widget background color: <input type="color" id="widgetbackgroundColor" /></p>
<p>Footer background color: <input type="color" id="footerbackgroundColor" /></p>

<h2>Font Size</h2>
<p>Heading 1 font size: <input type="number" id="heading1fontsize"/></p>
<p>Heading 2 font size: <input type="number" id="heading2fontsize"/></p>
<p>Heading 3 font size: <input type="number" id="heading3fontsize"/></p>
<p>Heading 4 font size: <input type="number" id="heading4fontsize"/></p>
<p>Heading 5 font size: <input type="number" id="heading5fontsize"/></p>
<p>Heading 6 font size: <input type="number" id="heading6fontsize"/></p>
<p>Header font size: <input type="number" id="headerfontsize"/></p>
<p>Header Widget font size: <input type="number" id="headerwidgetfontsize"/></p>
<p>Menu font size: <input type="number" id="menufontsize"/></p>
<p>Widget font size: <input type="number" id="widgetfontsize"/></p>
<p>Footer font size: <input type="number" id="footerfontsize"/></p>
<p>Content font size: <input type="number" id="contentfontsize"/></p>

<h2>Font Color</h2>
<p>Heading 1 font color: <input type="color" id="heading1fontcolor"/></p>
<p>Heading 2 font color: <input type="color" id="heading2fontcolor"/></p>
<p>Heading 3 font color: <input type="color" id="heading3fontcolor"/></p>
<p>Heading 4 font color: <input type="color" id="heading4fontcolor"/></p>
<p>Heading 5 font color: <input type="color" id="heading5fontcolor"/></p>
<p>Heading 6 font color: <input type="color" id="heading6fontcolor"/></p>
<p>Header font color: <input type="color" id="headerfontcolor"/></p>
<p>Header Widget font color: <input type="color" id="headerwidgetfontcolor"/></p>
<p>Menu font color: <input type="color" id="menufontcolor"/></p>
<p>Widget font color: <input type="color" id="widgetfontcolor"/></p>
<p>Footer font color: <input type="color" id="footerfontcolor"/></p>
<p>Content font color: <input type="color" id="contentfontcolor"/></p>

<h2>Font Shadow</h2>
<p>Heading 1 font shadow: <input type="text" id="heading1fontshadow"/></p>
<p>Heading 2 font shadow: <input type="text" id="heading2fontshadow"/></p>
<p>Heading 3 font shadow: <input type="text" id="heading3fontshadow"/></p>
<p>Heading 4 font shadow: <input type="text" id="heading4fontshadow"/></p>
<p>Heading 5 font shadow: <input type="text" id="heading5fontshadow"/></p>
<p>Heading 6 font shadow: <input type="text" id="heading6fontshadow"/></p>
<p>Header font shadow: <input type="text" id="headerfontshadow"/></p>
<p>Header Widget font shadow: <input type="text" id="headerwidgetfontshadow"/></p>
<p>Menu font shadow: <input type="text" id="menufontshadow"/></p>
<p>Widget font shadow: <input type="text" id="widgetfontshadow"/></p>
<p>Footer font shadow: <input type="text" id="footerfontshadow"/></p>
<p>Content font shadow: <input type="text" id="contentfontshadow"/></p>

<h2>Other Styles Coming Soon</h2>
{% endhighlight %}

{% highlight javascript %}
<script>
function get_current_style() {
  document.getElementById("htmlbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("html")[0]).backgroundColor);
  document.getElementById("headerbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).backgroundColor);
  document.getElementById("menubackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).backgroundColor);
  document.getElementById("contentbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).backgroundColor);
  document.getElementById("widgetbackgroundColor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).backgroundColor);
  document.getElementById("footerbackgroundColor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).backgroundColor);

  document.getElementById("heading1fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h1")[0]).fontSize.slice(0, -2));
  document.getElementById("heading2fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h2")[0]).fontSize.slice(0, -2));
  document.getElementById("heading3fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h3")[0]).fontSize.slice(0, -2));
  document.getElementById("heading4fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h4")[0]).fontSize.slice(0, -2));
  document.getElementById("heading5fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h5")[0]).fontSize.slice(0, -2));
  document.getElementById("heading6fontsize").value = Number(getComputedStyle(document.getElementsByTagName("h6")[0]).fontSize.slice(0, -2));
  document.getElementById("headerfontsize").value = Number(getComputedStyle(document.querySelectorAll(".header")[0]).fontSize.slice(0, -2));
  document.getElementById("headerwidgetfontsize").value = Number(getComputedStyle(document.querySelectorAll(".header-widget")[0]).fontSize.slice(0, -2));
  document.getElementById("menufontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).fontSize.slice(0, -2));
  document.getElementById("widgetfontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).fontSize.slice(0, -2));
  document.getElementById("footerfontsize").value = Number(getComputedStyle(document.getElementsByTagName("footer")[0]).fontSize.slice(0, -2));
  document.getElementById("contentfontsize").value = Number(getComputedStyle(document.querySelectorAll(".grid-content")[0]).fontSize.slice(0, -2));

  document.getElementById("heading1fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h1")[0]).color);
  document.getElementById("heading2fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h2")[0]).color);
  document.getElementById("heading3fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h3")[0]).color);
  document.getElementById("heading4fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h4")[0]).color);
  document.getElementById("heading5fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h5")[0]).color);
  document.getElementById("heading6fontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("h6")[0]).color);
  document.getElementById("headerfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header")[0]).color);
  document.getElementById("headerwidgetfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".header-widget")[0]).color);
  document.getElementById("menufontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-menu")[0]).color);
  document.getElementById("widgetfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-widget")[0]).color);
  document.getElementById("footerfontcolor").value = rgbToHex(getComputedStyle(document.getElementsByTagName("footer")[0]).color);
  document.getElementById("contentfontcolor").value = rgbToHex(getComputedStyle(document.querySelectorAll(".grid-content")[0]).color);

  document.getElementById("heading1fontshadow").value = getComputedStyle(document.getElementsByTagName("h1")[0]).textShadow;
  document.getElementById("heading2fontshadow").value = getComputedStyle(document.getElementsByTagName("h2")[0]).textShadow;
  document.getElementById("heading3fontshadow").value = getComputedStyle(document.getElementsByTagName("h3")[0]).textShadow;
  document.getElementById("heading4fontshadow").value = getComputedStyle(document.getElementsByTagName("h4")[0]).textShadow;
  document.getElementById("heading5fontshadow").value = getComputedStyle(document.getElementsByTagName("h5")[0]).textShadow;
  document.getElementById("heading6fontshadow").value = getComputedStyle(document.getElementsByTagName("h6")[0]).textShadow;
  document.getElementById("headerfontshadow").value = getComputedStyle(document.querySelectorAll(".header")[0]).textShadow;
  document.getElementById("headerwidgetfontshadow").value = getComputedStyle(document.querySelectorAll(".header-widget")[0]).textShadow;
  document.getElementById("menufontshadow").value = getComputedStyle(document.querySelectorAll(".grid-menu")[0]).textShadow;
  document.getElementById("widgetfontshadow").value = getComputedStyle(document.querySelectorAll(".grid-widget")[0]).textShadow;
  document.getElementById("footerfontshadow").value = getComputedStyle(document.getElementsByTagName("footer")[0]).textShadow;
  document.getElementById("contentfontshadow").value = getComputedStyle(document.querySelectorAll(".grid-content")[0]).textShadow;
}

document.getElementById("htmlbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("headerbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("menubackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("contentbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("widgetbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("footerbackgroundColor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.backgroundImage = "none";
    tag.style.backgroundColor = event.target.value;
  }
});

document.getElementById("heading1fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading2fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading3fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading4fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading5fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading6fontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("headerfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("headerwidgetfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("menufontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("widgetfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("footerfontsize").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("contentfontsize").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.fontSize = event.target.value;
  }
});

document.getElementById("heading1fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading2fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading3fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading4fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading5fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading6fontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("headerfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("headerwidgetfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("menufontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-menu")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("widgetfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("footerfontcolor").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("contentfontcolor").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.color = event.target.value;
  }
});

document.getElementById("heading1fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h1")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading2fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h2")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading3fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h3")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading4fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h4")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading5fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h5")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("heading6fontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("h6")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("headerfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("headerwidgetfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".header-widget")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("widgetfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-widget")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("footerfontshadow").addEventListener("change", function(event) {
  for (let tag of document.getElementsByTagName("footer")) {
    tag.style.textShadow = event.target.value;
  }
});

document.getElementById("contentfontshadow").addEventListener("change", function(event) {
  for (let tag of document.querySelectorAll(".grid-content")) {
    tag.style.textShadow = event.target.value;
  }
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
{% endhighlight %}