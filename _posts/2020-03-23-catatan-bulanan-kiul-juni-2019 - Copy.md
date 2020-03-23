---
layout: post
title: Catatan Bulanan Kiul (Sugar Glider) Juni 2019
categories: misc
tags: [sugar glider, kiul, animal, pet]
---

[source code](http://raboninco.com/22989623/kiul-json-get-source)

Pertama kiul datang, mereka masih balita, sangat imut dan masih malu-malu.

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
	   console.log(june_length);
		for(i = 0; i < june_length; i++){
		  print("june", data.june[i].image, data.june[i].caption)
		}
	  });
	}

	function print(id, image, caption){
	  $('#'+id).append(`
			<img src="`+image+`" alt="`+image+`"/>
	  `);
	}
</script>