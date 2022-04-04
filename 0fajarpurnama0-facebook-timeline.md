---
layout: post
title: Fajar Purnama Facebook Timeline
category: misc
---

<script>
$(document).ready(function(){
  facebook();
}).change(function(){
  facebook();
});

function facebook(){
  var accesstoken = "EAAHcCPorNdgBAPZCuQaL1COW1aAgfCD4MIZBeQc9inHLpTQhgM42RtFJurCb514LQF4uVlz2UpoTjpJdGqaZBKZCvBIiyqZAGFMMhH65uzUWrJxFNvOqGmk0MUp4Fh7j7B14r1CLZBc5qbF5ZAxHlQtDzOadDPQVuOCSHxCBGWIvAZDZD";
  var user = "https://graph.facebook.com/me?fields=name&access_token="+accesstoken;
  $.get(user, function(data, status){
    var user_id = data.id;
    console.log(data);
    var feed = "https://graph.facebook.com/"+user_id+"/posts?fields=message,link,full_picture,source&access_token="+accesstoken;
    $.get(feed, function(data, status){
      var data_length = data.data.length;
      for (i = 0; i < data_length; i++){
          print("facebook", data.data[i].message, data.data[i].link, data.data[i].full_picture);
      }
    });
  });
}


function print(id, message, link, full_picture){
    $('#'+id).append(`
      <figure>
        <img src="`+full_picture+`" alt="`+link+`">
        <figcaption>`+message+link+`</figcaption>
      </figure>
    `);
}
</script>

<a href="http://raboninco.com/22989623/facebook-api-jquery-get-feed">source code</a>
<div id="facebook"> </div>

