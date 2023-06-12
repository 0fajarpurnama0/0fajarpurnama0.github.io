---
layout: post
title: Embed Anything Widget
description: A widget to embed anything css template in html, css, and js.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png
category: tools
tags: [tools, widget, web, embed, html css js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/08/embed-anything-widget
---

<p><button id="embedanythingprevious" onclick="embedanything_previousing()">previous</button><button id="embedanythingnext" onclick="embedanything_nexting()">next</button></p>
<div class="video-container" id="embedanything"></div>
<input type="range" id="embedanythingopacity" name="Embed Anything Container Opacity" min="0" max="1" step=".01" value="1"><span id="embedanythingopacityvalue"></span>
<input type="number" id="embedanythingzindex" name="Embed Anything Container Z Index" value="-1">

<script>
const embed_anything_container = document.getElementById("embedanything");
let anything_embedded = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/FOiDJrc4SFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/OYfmnlYXycM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/-nz9f8gFun0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`];

let embedanything_number = Math.floor(Math.random() * anything_embedded.length);

embed_anything_container.innerHTML = anything_embedded[embedanything_number];

function embedanything_previousing(){
    if(embedanything_number == 0){
    embedanything_number = anything_embedded.length - 1;
    embed_anything_container.innerHTML = anything_embedded[embedanything_number];
    } else {
    embedanything_number--;
    embed_anything_container.innerHTML = anything_embedded[embedanything_number];
    }
}

function embedanything_nexting(){
    if(embedanything_number == anything_embedded.length - 1){
    embedanything_number = 0;
    embed_anything_container.innerHTML = anything_embedded[embedanything_number];
    } else {
    embedanything_number++;
    embed_anything_container.innerHTML = anything_embedded[embedanything_number];
    }
}

const embed_anything_opacity_slider = document.getElementById("embedanythingopacity");
const embed_anything_opacity_slider_value_indicator = document.getElementById("embedanythingopacityvalue");

embed_anything_opacity_slider.addEventListener("change", function(event) {
  embed_anything_opacity_slider_value_indicator.innerHTML = event.target.value;
  embed_anything_container.style.opacity = event.target.value;
});

const embed_anything_zindex_slider = document.getElementById("embedanythingzindex");
embed_anything_zindex_slider.addEventListener("change", function() {
  embed_anything_container.style.zIndex = event.target.value;
});

</script>