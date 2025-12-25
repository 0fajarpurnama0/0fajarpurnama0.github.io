---
layout: post
title: Animation Entertainment List
category: misc
tags: [animation, scanlation, manga, manhua, manhwa, anime, cartoon]
featuredimage: assets/images/1332536217.png
description: A list of my animation entertainment.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/01/animation-entertainment-list
---
<h2>Mixed</h2>
<div id="mixed" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.mixed %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
</div>

<h2>Manhua</h2>
<div id="manhua" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.manhua %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
</div>

<h2>Manhwa</h2>
<div id="manhwa" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.manhwa %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
</div>

<h2>Scanlation</h2>
<div id="scanlation" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.scanlation %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
</div>

<h2>Anime</h2>
<div id="anime" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.anime %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
</div>

<h2>Music</h2>
<div id="music" class="app-dashboard-grid">
    {% for item in site.data.animation_entertainment.music %}
    <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
        <figure>
        <img src="{{ item.icon }}" alt="{{ item.description }}" />
        <figcaption>{{ item.name }}</figcaption>
        </figure>
    </a>
    {% endfor %}
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