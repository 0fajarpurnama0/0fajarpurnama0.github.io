---
layout: post
title: Donate to my Digital Wallet
categories: [donation, finance]
tags: [donation, finance, digital, wallet, fiat, money, QR]
---
<label for="show">show:</label>
	<input type="number" id="show" name="show" value="100">
<label for="preferability">preferability:</label>
<select id="preferability">
  <option value="all">all</option>
  <option value="low">low</option>
  <option value="medium">medium</option>
  <option value="high">high</option>
</select>
<label for="category">category:</label>
<select id="category">
  <option value="all">all</option>
  <option value="popular">popular</option>
</select>
<div id="digitalwallet">
 
</div>

<script>
$('#show, #rate, #cost, #category').ready(function(){
  donation();
}).change(function(){
  donation();
});

function donation(){
  var print_count = 0;
  var show = $('#show').val();
  var preferability = $('#preferability').val();
  var category = $('#category').val();
  $('#digitalwallet').html('');
  $.getJSON('https://0fajarpurnama0.github.io/assets/json/donation.json', function(data) {
	var digitalwalletlength = data.digitalwallet.length;
	if(preferability == 'all' && category == 'all'){
	  for(i = 0; i < digitalwalletlength; i++){
		print_donation("digitalwallet", data.digitalwallet[i].name, data.digitalwallet[i].address, data.digitalwallet[i].image);
		print_count++;
		if(print_count == show){
		  break;
		}
	  }
	} else if(preferability == 'all'){
	  for(i = 0; i < digitalwalletlength; i++){
		if(data.digitalwallet[i].category==category){
		  print_donation("digitalwallet", data.digitalwallet[i].name, data.digitalwallet[i].address, data.digitalwallet[i].image);
		  print_count++;
		  if(print_count == show){
			break;
		  }
		}
	  }
	} else if(category == 'all'){
	  for(i = 0; i < digitalwalletlength; i++){
		if(data.digitalwallet[i].preferability==preferability){
		  print_donation("digitalwallet", data.digitalwallet[i].name, data.digitalwallet[i].address, data.digitalwallet[i].image);
		  print_count++;
		  if(print_count == show){
			break;
		  }
		}
	  }
	} else {
	  for(i = 0; i < digitalwalletlength; i++){
		if(data.digitalwallet[i].preferability==preferability && data.digitalwallet[i].category==category){
		  print_donation("digitalwallet", data.digitalwallet[i].name, data.digitalwallet[i].address, data.digitalwallet[i].image);
		  print_count++;
		  if(print_count == show){
			break;
		  }
		}
	  } 
	}
  });
}

function print_donation(id, name, address, image){
  $('#'+id).append(`
	<figure>
	  <img src="`+image+`" alt="`+name+`: `+address+`" style="max-width:100%">
	  <figcaption>`+name+`<a href="#" class="copy">`+address+`</a></figcaption>
	</figure>
  `);
}

$(".copy").click(function() {
  copyStringToClipboard($(this).text());
});
</script>