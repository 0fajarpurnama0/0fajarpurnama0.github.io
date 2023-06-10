---
layout: post
title: Embed Anything Widget
description: A widget to embed anything css template in html, css, and js.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/9/9a/HTML5_audio_icon.svg
category: tools
tags: [tools, widget, web, embed, html css js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/08/embed-anything-widget
---

<div class="video-container" id="embedanything"></div>
<input type="range" id="embedanythingopacity" name="Embed Anything Container Opacity" min="0" max="1" step=".01" value="1"><span id="embedanythingopacityvalue"></span>

<script>
const embed_anything_container = document.getElementById("embedanything");
let anything_embedded = `<iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

embed_anything_container.innerHTML = anything_embedded;

const embed_anything_opacity_slider = document.getElementById("embedanythingopacity");
const embed_anything_opacity_slider_value_indicator = document.getElementById("embedanythingopacityvalue");
embed_anything_opacity_slider.addEventListener("change", function() {
  embed_anything_opacity_slider_value_indicator.innerHTML = embed_anything_opacity_slider.value;
  embed_anything_container.style.opacity = embed_anything_opacity_slider.value;
});
</script>