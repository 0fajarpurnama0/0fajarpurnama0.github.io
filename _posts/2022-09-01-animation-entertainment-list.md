---
layout: post
title: Animation Entertainment List
category: misc
tags: [animation, scanlation, manga, manhua, manhwa, anime, cartoon]
featuredimage: https://en.wikipedia.org/wiki/Scanlation#/media/File:Wikipe-tan_manga_page1_-_waifu2x_-_scanlated_English.png
description: A list of my animation entertainment.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/01/animation-entertainment-list
---
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
}
animationentertainmentxmlhttp.open("GET", "{{ '/assets/json/animation_entertainment.json' | relative_url }}");
animationentertainmentxmlhttp.send();
</script>