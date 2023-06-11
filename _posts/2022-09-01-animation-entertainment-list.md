---
layout: post
title: Animation Entertainment List
category: misc
tags: [animation, scanlation, manga, manhua, manhwa, anime, cartoon]
featuredimage: https://en.wikipedia.org/wiki/Scanlation#/media/File:Wikipe-tan_manga_page1_-_waifu2x_-_scanlated_English.png
description: A list of my animation entertainment.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/01/animation-entertainment-list
---
{% for item in site.data.navigation %}
    <a href="{{ item.link }}" class="menu">{{ item.name }}</a>
{% endfor %}

<h2>Mixed</h2>
<div id="mixed">
    <ul>
    {% for item in site.data.animation_entertainment.mixed %}
        <li><a href="{{ item.link }}" target="_blank">{{ item.name }}</a></li>
    {% endfor %}
    </ul>
</div>

<h2>Manhua</h2>
<div id="manhua">
    <ul>
    {% for item in site.data.animation_entertainment.manhua %}
        <li><a href="{{ item.link }}" target="_blank">{{ item.name }}</a></li>
    {% endfor %}
    </ul>
</div>

<h2>Scanlation</h2>
<div id="scanlation">
    <ul>
    {% for item in site.data.animation_entertainment.scanlation %}
        <li><a href="{{ item.link }}" target="_blank">{{ item.name }}</a></li>
    {% endfor %}
    </ul>
</div>

<h2>Anime</h2>
<div id="anime">
    <ul>
    {% for item in site.data.animation_entertainment.anime %}
        <li><a href="{{ item.link }}" target="_blank">{{ item.name }}</a></li>
    {% endfor %}
    </ul>
</div>

<h2>Music</h2>
<div id="music">
    <ul>
    {% for item in site.data.animation_entertainment.music %}
        <li><a href="{{ item.link }}" target="_blank">{{ item.name }}</a></li>
    {% endfor %}
    </ul>
</div>

<!-- Below is for using JSON
<h2>Mixed</h2>
<div id="mixed">
    <ul>
    </ul>
</div>

<h2>Manhua</h2>

<div id="manhua">
    <ul>
    </ul>
</div>

<h2>Scanlation</h2>

<div id="scanlation">
    <ul>
    </ul>
</div>

<h2>Anime</h2>

<div id="anime">
    <ul>
    </ul>
</div>

<script>
const animationentertainmentxmlhttp = new XMLHttpRequest();
animationentertainmentxmlhttp.onload = function() {
  const animationentertainment = JSON.parse(this.responseText);
  for (number in animationentertainment.mixed) {
  	document.getElementById("mixed").children[0].innerHTML += `<li><a href="`+animationentertainment.mixed[number].link+`" target="_blank">`+animationentertainment.mixed[number].name+`</a></li>`;
  }
  for (number in animationentertainment.manhua) {
  	document.getElementById("manhua").children[0].innerHTML += `<li><a href="`+animationentertainment.manhua[number].link+`" target="_blank">`+animationentertainment.manhua[number].name+`</a></li>`;
  }
  for (number in animationentertainment.scanlation) {
  	document.getElementById("scanlation").children[0].innerHTML += `<li><a href="`+animationentertainment.scanlation[number].link+`" target="_blank">`+animationentertainment.scanlation[number].name+`</a></li>`;
  }
  for (number in animationentertainment.anime) {
  	document.getElementById("anime").children[0].innerHTML += `<li><a href="`+animationentertainment.anime[number].link+`" target="_blank">`+animationentertainment.anime[number].name+`</a></li>`;
  }
}
animationentertainmentxmlhttp.open("GET", "{{ '/assets/json/animation_entertainment.json' | relative_url }}");
animationentertainmentxmlhttp.send();
</script>
-->