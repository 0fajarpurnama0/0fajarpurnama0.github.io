---
layout: post
title: Quote Collection
categories: quote
tags: [quote, sentence, collection, words]
---

<style>
#other_quotes {
  background-color: black;
  font-family: cursive;
}

.quote{
  animation: glow 1s ease-in-out infinite alternate;
  color: #fff;
}

.author{
  color: yellow;
  font-family: Lucida Handwriting;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
</style>

<p><a href="http://maetrimal.com/22989623/quote-json-get-source">source code</a></p>

<div id="other_quotes">
 
</div>

<script>
$(document).ready(function(){
  quote();
}).change(function(){
  quote();
});

function quote(){
  $.getJSON('https://0fajarpurnama0.github.io/assets/json/quote.json', function(data) {
   var other_quotes_length = data.other_quotes.length;
    
    for(i = 0; i < other_quotes_length; i++){
      print_quote("other_quotes", data.other_quotes[i].quote, data.fajar_quotes[i].author)
    }

  });
}

function print_quote(id, quote, author){
  $('#'+id).append(`
    <p class="quote">`+quote+`</p>
    <p class="author">`+author+`</p>
    <br>
  `);
}
</script>