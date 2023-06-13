---
layout: post
title: Embed Anything Widget
description: A widget to embed anything css template in html, css, and js.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png
category: tools
tags: [tools, widget, web, embed, html css js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/08/embed-anything-widget
---
{% highlight css %}
.video-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px; height: 0; overflow: hidden;
}

.video-container iframe, .video-container object, .video-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
{% endhighlight %}

<h2>Simple</h2>
<div class="video-container" id="simple_embedanything">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<input type="range" id="simple_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="simple_embedanythingopacityvalue"></span>
<input type="number" id="simple_embedanythingzindex" value="-1">

<script>
document.getElementById("simple_embedanythingopacity").addEventListener("change", function(event) {
  document.getElementById("simple_embedanythingopacityvalue").innerHTML = event.target.value;
  document.getElementById("simple_embedanything").style.opacity = event.target.value;
});

document.getElementById("simple_embedanythingzindex").addEventListener("change", function() {
  document.getElementById("simple_embedanything").style.zIndex = event.target.value;
});
</script>

{% highlight html %}
<h2>Simple</h2>
<div class="video-container" id="simple_embedanything">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<input type="range" id="simple_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="simple_embedanythingopacityvalue"></span>
<input type="number" id="simple_embedanythingzindex" value="-1">
{% endhighlight %}

{% highlight javascript %}
<script>
document.getElementById("simple_embedanythingopacity").addEventListener("change", function(event) {
  document.getElementById("simple_embedanythingopacityvalue").innerHTML = event.target.value;
  document.getElementById("simple_embedanything").style.opacity = event.target.value;
});

document.getElementById("simple_embedanythingzindex").addEventListener("change", function() {
  document.getElementById("simple_embedanything").style.zIndex = event.target.value;
});
</script>
{% endhighlight %}

<h2>Many Inputs One by One</h2>
<p><button id="many_embedanythingprevious" onclick="many_embedanything_previousing()">previous</button><button id="many_embedanythingnext" onclick="many_embedanything_nexting()">next</button></p>
<div class="video-container" id="many_embedanything"></div>
<input type="range" id="many_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="many_embedanythingopacityvalue"></span>
<input type="number" id="many_embedanythingzindex" value="-1">

<script>
const many_embed_anything_container = document.getElementById("many_embedanything");
let many_anything_embedded = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/FOiDJrc4SFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/OYfmnlYXycM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/-nz9f8gFun0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`];

let many_embedanything_number = Math.floor(Math.random() * many_anything_embedded.length);

many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];

function many_embedanything_previousing(){
    if(many_embedanything_number == 0){
    many_embedanything_number = many_anything_embedded.length - 1;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    } else {
    many_embedanything_number--;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    }
}

function many_embedanything_nexting(){
    if(many_embedanything_number == many_anything_embedded.length - 1){
    many_embedanything_number = 0;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    } else {
    many_embedanything_number++;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    }
}

const many_embed_anything_opacity_slider = document.getElementById("many_embedanythingopacity");
const many_embed_anything_opacity_slider_value_indicator = document.getElementById("many_embedanythingopacityvalue");

many_embed_anything_opacity_slider.addEventListener("change", function(event) {
  many_embed_anything_opacity_slider_value_indicator.innerHTML = event.target.value;
  many_embed_anything_container.style.opacity = event.target.value;
});

const many_embed_anything_zindex_slider = document.getElementById("many_embedanythingzindex");
many_embed_anything_zindex_slider.addEventListener("change", function() {
  many_embed_anything_container.style.zIndex = event.target.value;
});
</script>

{% highlight html %}
<h2>Many Inputs One by One</h2>
<p><button id="many_embedanythingprevious" onclick="many_embedanything_previousing()">previous</button><button id="many_embedanythingnext" onclick="many_embedanything_nexting()">next</button></p>
<div class="video-container" id="many_embedanything"></div>
<input type="range" id="many_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="many_embedanythingopacityvalue"></span>
<input type="number" id="many_embedanythingzindex" value="-1">
{% endhighlight %}

{% highlight javascript %}
<script>
const many_embed_anything_container = document.getElementById("many_embedanything");
let many_anything_embedded = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/DsOe0yICs90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/FOiDJrc4SFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/OYfmnlYXycM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/-nz9f8gFun0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`];

let many_embedanything_number = Math.floor(Math.random() * many_anything_embedded.length);

many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];

function many_embedanything_previousing(){
    if(many_embedanything_number == 0){
    many_embedanything_number = many_anything_embedded.length - 1;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    } else {
    many_embedanything_number--;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    }
}

function many_embedanything_nexting(){
    if(many_embedanything_number == many_anything_embedded.length - 1){
    many_embedanything_number = 0;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    } else {
    many_embedanything_number++;
    many_embed_anything_container.innerHTML = many_anything_embedded[many_embedanything_number];
    }
}

const many_embed_anything_opacity_slider = document.getElementById("many_embedanythingopacity");
const many_embed_anything_opacity_slider_value_indicator = document.getElementById("many_embedanythingopacityvalue");

many_embed_anything_opacity_slider.addEventListener("change", function(event) {
  many_embed_anything_opacity_slider_value_indicator.innerHTML = event.target.value;
  many_embed_anything_container.style.opacity = event.target.value;
});

const many_embed_anything_zindex_slider = document.getElementById("many_embedanythingzindex");
many_embed_anything_zindex_slider.addEventListener("change", function() {
  many_embed_anything_container.style.zIndex = event.target.value;
});
</script>
{% endhighlight %}

<h2>JSON Input</h2>
<p><button id="json_embedanythingprevious" onclick="json_embedanything_previousing()">previous</button><button id="json_embedanythingnext" onclick="json_embedanything_nexting()">next</button> <input type="file" id="json_embedanythingfileinput"/> or insert json link: <input type="url" id="json_embedanythinglinkinput" /></p>
<div class="video-container" id="json_embedanything"></div>
<input type="range" id="json_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="json_embedanythingopacityvalue"></span>
<input type="number" id="json_embedanythingzindex" value="-1">

<script>
const json_embed_anything_container = document.getElementById("json_embedanything");
let json_anything_embedded;
let json_embedanything_number;

const json_embed_anything_file_input = document.getElementById("json_embedanythingfileinput");
const json_embed_anything_link_input = document.getElementById("json_embedanythinglinkinput");

json_embed_anything_file_input.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const content = JSON.parse(event.target.result);
    json_anything_embedded = content.embed;
    json_embedanything_number = Math.floor(Math.random() * json_anything_embedded.length);
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
  };
  
  fileReader.readAsText(selectedFile);
});

json_embed_anything_link_input.addEventListener("change", (event) => {
  const jsonanythingembeddedlinkxmlhttp = new XMLHttpRequest();
  jsonanythingembeddedlinkxmlhttp.onload = function() {
    const content = JSON.parse(this.responseText);
    json_anything_embedded = content.embed;
    json_embedanything_number = Math.floor(Math.random() * json_anything_embedded.length);
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
  }
  jsonanythingembeddedlinkxmlhttp.open("GET", json_embed_anything_link_input.value);
  jsonanythingembeddedlinkxmlhttp.send();
});

function json_embedanything_previousing(){
    if(json_embedanything_number == 0){
    json_embedanything_number = json_anything_embedded.length - 1;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    } else {
    json_embedanything_number--;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    }
}

function json_embedanything_nexting(){
    if(json_embedanything_number == json_anything_embedded.length - 1){
    json_embedanything_number = 0;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    } else {
    json_embedanything_number++;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    }
}

const json_embed_anything_opacity_slider = document.getElementById("json_embedanythingopacity");
const json_embed_anything_opacity_slider_value_indicator = document.getElementById("json_embedanythingopacityvalue");

json_embed_anything_opacity_slider.addEventListener("change", function(event) {
  json_embed_anything_opacity_slider_value_indicator.innerHTML = event.target.value;
  json_embed_anything_container.style.opacity = event.target.value;
});

const json_embed_anything_zindex_slider = document.getElementById("json_embedanythingzindex");
json_embed_anything_zindex_slider.addEventListener("change", function() {
  json_embed_anything_container.style.zIndex = event.target.value;
});
</script>

<p>JSON Format</p>
{% highlight json %}
{
    "embed": [
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/DsOe0yICs90\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FOiDJrc4SFY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OYfmnlYXycM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-nz9f8gFun0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    ]
}
{% endhighlight %}

<p>HTML</p>

{% highlight html %}
<h2>JSON Input</h2>
<p><button id="json_embedanythingprevious" onclick="json_embedanything_previousing()">previous</button><button id="json_embedanythingnext" onclick="json_embedanything_nexting()">next</button> <input type="file" id="json_embedanythingfileinput" disabled/> or insert json link: <input type="url" id="json_embedanythinglinkinput" /></p>
<div class="video-container" id="json_embedanything"></div>
<input type="range" id="json_embedanythingopacity" min="0" max="1" step=".01" value="1"><span id="json_embedanythingopacityvalue"></span>
<input type="number" id="json_embedanythingzindex" value="-1">
{% endhighlight %}

<p>Javascript</p>

{% highlight javascript %}
<script>
const json_embed_anything_container = document.getElementById("json_embedanything");
let json_anything_embedded;
let json_embedanything_number;

const json_embed_anything_file_input = document.getElementById("json_embedanythingfileinput");
const json_embed_anything_link_input = document.getElementById("json_embedanythinglinkinput");

json_embed_anything_file_input.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const content = JSON.parse(event.target.result);
    json_anything_embedded = content;
    json_embedanything_number = Math.floor(Math.random() * json_anything_embedded.length);
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
  };
  
  fileReader.readAsText(selectedFile);
});

json_embed_anything_link_input.addEventListener("change", (event) => {
  const audiojsonlinkxmlhttp = new XMLHttpRequest();
  audiojsonlinkxmlhttp.onload = function() {
    const content = JSON.parse(this.responseText);
    json_anything_embedded = content;
    json_embedanything_number = Math.floor(Math.random() * json_anything_embedded.length);
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
  }
  audiojsonlinkxmlhttp.open("GET", widget_json_ost_link_input.value);
  audiojsonlinkxmlhttp.send();
});

function json_embedanything_previousing(){
    if(json_embedanything_number == 0){
    json_embedanything_number = json_anything_embedded.length - 1;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    } else {
    json_embedanything_number--;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    }
}

function json_embedanything_nexting(){
    if(json_embedanything_number == json_anything_embedded.length - 1){
    json_embedanything_number = 0;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    } else {
    json_embedanything_number++;
    json_embed_anything_container.innerHTML = json_anything_embedded[json_embedanything_number];
    }
}

const json_embed_anything_opacity_slider = document.getElementById("json_embedanythingopacity");
const json_embed_anything_opacity_slider_value_indicator = document.getElementById("json_embedanythingopacityvalue");

json_embed_anything_opacity_slider.addEventListener("change", function(event) {
  json_embed_anything_opacity_slider_value_indicator.innerHTML = event.target.value;
  json_embed_anything_container.style.opacity = event.target.value;
});

const json_embed_anything_zindex_slider = document.getElementById("json_embedanythingzindex");
json_embed_anything_zindex_slider.addEventListener("change", function() {
  json_embed_anything_container.style.zIndex = event.target.value;
});
</script>
{% endhighlight %}