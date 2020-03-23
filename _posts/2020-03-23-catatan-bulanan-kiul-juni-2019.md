---
layout: post
title: Catatan Bulanan Kiul (Sugar Glider) Juni 2019
categories: quote
tags: [sugar glider, kiul, animal, pet]
---

[source code](http://raboninco.com/22989623/kiul-json-get-source)

<div id="june">
 
</div>

<script>
	$(document).ready(function(){
	  kiul();
	}).change(function(){
	  kiul();
	});

	function kiul(){
	 $.getJSON('https://0fajarpurnama0.github.io/assets/json/kiul_diary_id.json', function(data) {
	   var june_length = data.june.length;
		for(i = 0; i < june_length; i++){
		  print("june", data.smartphone[i].name, data.smartphone[i].image, data.smartphone[i].video, data.smartphone[i].link, data.smartphone[i].method, data.smartphone[i].electricity, data.smartphone[i].monitor, data.smartphone[i].shortdescription)
		}
	  });
	}

	function print(id, image, caption){
	  $('#'+id).append(`
		  <figure>
			<img src="`+image+`" alt="`+image+`"/>
			<figcaption>`+caption+`</figcaption>
		  </figure>
	  `);
	}
</script>