---
layout: docs
title: Deals
permalink: /deals/
---

<style>
.commission{
  color: #FFFFFF; background: #333333; text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px; color: #FFFFFF; background: #333333;
}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
$(document).ready(function(){
  fpdeals();
}).change(function(){
  fpdeals();
});

function fpdeals(){
  var deals = [];
  $('#referrals').html('');
  $.getJSON('assets/json/referrals.json', function(data) {
      for(i = 0; i < data.referral.length; i++){
        if(data.referral[i].deal != ""){
          deals.push(data.referral[i]);
        }
      }

      deals.sort(function(a, b){return b.deal - a.deal});
      for(i = 0; i < deals.length; i++){
        print_deals(deals[i].name, deals[i].link, deals[i].commission, deals[i].requirement, deals[i].moreinfo, deals[i].deal);
      }
  });
}

function print_deals(name, link, commission, requirement, moreinfo, deal){
  $('#deals').append(`
    <h3>`+name+`</h3>
		<ul>
      <li>Referral link:<a href="`+link+`">`+link+`</a></li>
      <li class="commission">Commission: `+commission+` (~$`+deal+`)</li>
      <li>Requirement: `+requirement+`</li>
      <li>More info: <a href="`+moreinfo+`">`+moreinfo+`</a></li>
		 </ul>   
  `);
}
</script>

<div id="deals"></div>

<p><a href="affiliate-endorsement-referral">Other Referrals</a></p>
<p><a href="http://mellowads.com/0PwNc">Source Code</a></p>
