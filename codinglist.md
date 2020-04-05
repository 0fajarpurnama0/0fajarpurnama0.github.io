---
layout: post
title: 0fajarpurnama0 Coding List
category: misc
---

<label for="star">Star</label>
<input type="checkbox" id="star" name="star" value="starred">
<a href="http://raboninco.com/22989623/coding-json-get-source">source code</a>

<div id="codinglist"></div>

<script>
	$(document).ready(function(){
	  codinglist();
	}).change(function(){
	  codinglist();
	});

	function codinglist(){
	  $('#codinglist').html('');
	  var star = $('#star').val();
	  $.getJSON('https://0fajarpurnama0.github.io/assets/json/codinglist.json', function(data) {
	   var codinglist_length = data.codinglist.length - 1;
		for(i = codinglist_length; i >= 0; i--){
		  if($('#star').is(":checked")){
			if(data.codinglist[i].star == star){
			  print('codinglist', data.codinglist[i].title, data.codinglist[i].link, data.codinglist[i].directlink, data.codinglist[i].embed, data.codinglist[i].description);
			}
			continue;
		  } else {
			print('codinglist', data.codinglist[i].title, data.codinglist[i].link, data.codinglist[i].directlink, data.codinglist[i].embed, data.codinglist[i].description);
		  }
		}
	  });
	}

	function print(id, title, link, directlink, embed, description){
	  $('#'+id).append(`
		  <h2><a href="`+link+`">`+title+`</a></h2>
		  <div class="video-container"><iframe src="`+embed+`" alt="`+directlink+`" allowfullscreen></iframe></div>
		  <p>`+description+`</p><a href="`+link+`">source code</a>
	  `);
	}
</script>