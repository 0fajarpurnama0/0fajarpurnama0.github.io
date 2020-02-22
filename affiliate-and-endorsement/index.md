---
layout: docs
title: Affiliate and Endorsement
---

<label for="show">show:</label>
<input type="number" id="show" name="show" value="10"/>
<label for="rate">rate:</label>
<select id="rate">
	<option value="all">all</option>
	<option value="cool">cool</option>
	<option value="warm">warm</option>
	<option value="hot">hot</option>
</select>
<label for="cost">cost:</label>
<select id="cost">
	<option value="all">all</option>
	<option value="free">free</option>
	<option value="cheap">cheap</option>
	<option value="affordable">affordable</option>
	<option value="expensive">expensive</option>
</select>
<label for="category">category:</label>
<select id="category">
	<option value="all">all</option>
	<option value="monetization">monetization</option>
</select>
<a href="https://codepen.io/0fajarpurnama0/pen/YzXpwJj">Source Code</a>
<div id="referrals">
 
</div>
<script>
	$('#show, #rate, #cost, #category').ready(function(){
		referrals();
	}).change(function(){
		referrals();
	});

	function referrals(){
		var print_count = 0;
		var show = $('#show').val();
		var rate = $('#rate').val();
		var cost = $('#cost').val();
		var category = $('#category').val();
		$('#referrals').html('');
		$.getJSON('https://0fajarpurnama0.github.io/affiliate-and-endorsement/data.json', function(data) {
			if(rate == 'all' && cost == 'all' && category == 'all'){
				for(i = 0; i < data.referral.length; i++){
					print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					print_count++;
					if(print_count == show){
					  break;
					}
				  }
				} else if(rate == 'all' && cost == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].category==category){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else if(rate == 'all' && category == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].cost==cost){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else if(cost == 'all' && category == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].rate==rate){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else if(rate == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].cost==cost && data.referral[i].category==category){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else if(cost == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].rate==rate && data.referral[i].category==category){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else if(category == 'all'){
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].rate==rate && data.referral[i].cost==cost){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
				} else {
				  for(i = 0; i < data.referral.length; i++){
					if(data.referral[i].rate==rate && data.referral[i].cost==cost && data.referral[i].category==category){
					  print_referral(data.referral[i].name, data.referral[i].link, data.referral[i].commission, data.referral[i].requirement, data.referral[i].moreinfo);
					  print_count++;
					  if(print_count == show){
						break;
					  }
					}
				  } 
			}
		});
	}

	function print_referral(name, link, commission, requirement, moreinfo, show, i){
		$('#referrals').append(`
			<h3>`+name+`</h3>
			<ul>
				<li>Referral link:<a href="`+link+`">`+link+`</a></li>
				<li class="commission" style="color: #FFFFFF; background: #333333; text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px; color: #FFFFFF; background: #333333;">Commission: `+commission+`</li>
				<li>Requirement: `+requirement+`</li>
				<li>More info: <a href="`+moreinfo+`">`+moreinfo+`</a></li>
			</ul>   
		`);
	}
</script>