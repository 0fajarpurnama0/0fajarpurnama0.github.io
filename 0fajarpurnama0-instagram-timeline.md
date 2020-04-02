---
layout: post
title: Fajar Purnama Facebook Timeline
category: misc
---

<script>
$(document).ready(function(){
  instagram();
}).change(function(){
  instagram();
});

function instagram(){
  var accesstoken = "IGQVJWdEZAVWGU4UlFoV0RiODhaWXdISnJhZAmdSSHAzVzVLcFZA1M0NBU2wxM1dnZA1RmQTNtMlRnbF94N3ZAEQjMwMkJhRHBnVzhFS0t4OTJQRkNhU2N1ZAkVoWUpzbDQ1ZA05tbk1CR2lnX0o3c3dWeFZAEdQZDZD";
  var medias = "https://graph.instagram.com/me/media?fields=id,caption&access_token="+accesstoken;
  $.get(medias, function(data, status){
	var data_length = data.data.length;
	for (i = 0; i < data_length; i++){
	  var post = "https://graph.instagram.com/"+data.data[i].id+"?fields=media_url,caption,media_type&access_token="+accesstoken;
	  $.get(post, function(data, status){
		  print("instagram", data.media_url, data.caption, data.media_type);
	  });
	}
  });
}


function print(id, media, caption, media_type){
  if (media_type = "IMAGE") {
	$('#'+id).append(`
	  <figure>
		<img src="`+media+`" alt="`+media+`">
		<figcaption>`+caption+`</figcaption>
	  </figure>
	`);
  } else {
	$('#'+id).append(`
	  <div class = "video-container"> <iframe src = "`+media+`" frameborder = "0" allowfullscreen></iframe></div>
<p>`+caption+`</p>
	`);
  }
}
</script>

<a href="http://raboninco.com/22989623/instagram-personal-api-jquery-get-feed">source code</a>
<div id="instagram"> </div>