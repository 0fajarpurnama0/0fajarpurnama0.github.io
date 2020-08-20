---
layout: post
title: 0fajarpurnama0 Cryptocurrency Crypto.com Syndicate (50% Off) Portfolio
categories: cryptocurrency
tags: [cryptocurrency, portofolio, holding, profit, loss, initial, current, dollar, Coingecko, API, jQuery, HTML, CSS, JavaScript, JSON, monetization, syndicate, crypto.com, 50%, discount]
---

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

<a href="http://mellowads.com/49HMZ">Source Code Simple</a>
<a href="http://mellowads.com/0FZNz">Source Code Sample Portfolio</a>
<a href="http://mellowads.com/5Tjh9">Source Code Portfolio Complete</a>
<table id="portfolio" style="width:100%">
  <tr>
    <th>Number</th>
    <th>Coin</th> 
    <th>Price USD</th>
    <th>Holding</th>
    <th>Current USD</th>
    <th>Initial USD</th>
    <th>Profit or Loss</th>
    <th>USD Profit Taken</th>
  </tr>
  
</table>

<script>
$(document).ready(function(){
	$.ajaxSetup({
		async: false
	});	
	var portfolio = [];
  $.getJSON('https://0fajarpurnama0.github.io/assets/json/crypto_com_portfolio_syndicate.json', function(portfoliocryptocomsyndicate) {
  	var portfoliocryptocomsyndicatelength = portfoliocryptocomsyndicate.portfolio.length
	  for(i = 0; i < portfoliocryptocomsyndicatelength; i++){
        portfolio.push(portfoliocryptocomsyndicate.portfolio[i]);
      }
		//console.log(portfolio);
	});
  var current_usd_accumulate = 0;
  var initial_usd_accumulate = 0;
  var profit_taken_accumulate = 0;
  for (i = 0; i < portfolio.length; i++) {
  	var coin_id = portfolio[i].coin;
    var icon = portfolio[i].icon;
    var holding = portfolio[i].holding_amount;
    var initial_usd = parseInt(portfolio[i].initial_usd_investment);
    var profit_taken = parseInt(portfolio[i].usd_profit_taken);
    profit_taken_accumulate += profit_taken;
    initial_usd_accumulate += initial_usd;
  	$.getJSON("https://api.coingecko.com/api/v3/simple/price?ids="+coin_id+"&vs_currencies=usd", function(data){
    	//console.log(Object.values(data[Object.keys(data)]));
  		var price = Object.values(data[Object.keys(data)]);
      var current_usd = holding * price;
      current_usd_accumulate += current_usd;
      var profit_loss;
      var profit_loss_text_color;
      if(current_usd > initial_usd){
      	profit_loss = (current_usd - initial_usd) / initial_usd * 100;
        profit_loss_text_color = 'green';
      } else if(current_usd < initial_usd){
      	profit_loss = -Math.abs((initial_usd - current_usd) / current_usd * 100);
        profit_loss_text_color = 'red';
      } else {
      	profit_loss = 0;
        profit_loss_text_color = 'black';
      }
      print_portfolio('portfolio', i, coin_id, icon, price, holding, current_usd.toFixed(2), initial_usd, profit_loss.toFixed(2), profit_loss_text_color, profit_taken);
		});
  }
  var profit_loss_accumulate;
  var profit_loss_accumulate_text_color;
  if(current_usd_accumulate > initial_usd_accumulate){
    profit_loss_accumulate = (current_usd_accumulate - initial_usd_accumulate) / initial_usd_accumulate * 100;
    profit_loss_accumulate_text_color = 'green';
  } else if(current_usd_accumulate < initial_usd_accumulate){
    profit_loss_accumulate = -Math.abs((initial_usd_accumulate - current_usd_accumulate) / current_usd_accumulate * 100);
    profit_loss_accumulate_text_color = 'red';
  } else {
    profit_loss_accumulate = 0;
    profit_loss_accumulate_text_color = 'black';
  }
  print_portfolio('portfolio', 'Total', '', '', '', '', current_usd_accumulate.toFixed(2), initial_usd_accumulate, profit_loss_accumulate.toFixed(2), profit_loss_accumulate_text_color, profit_taken_accumulate);
});

function print_portfolio(id, number, coin, icon, price, holding, current_usd, initial_usd, profit_loss, profit_loss_text_color, profit_taken){
  $('#'+id).append(`
    <tr>
    	<td>`+number+`</td>
    	<td><img width="15px" src="`+icon+`"/><a href="https://www.coingecko.com/en/coins/`+coin+`">`+coin+`</a></td> 
    	<td>$`+price+`</td>
    	<th>`+holding+`</th>
    	<th>$`+current_usd+`</th>
      <th>$`+initial_usd+`</th>
      <th style="color:`+profit_loss_text_color+`;">`+profit_loss+`%</th>
      <th>$`+profit_taken+`</th>
  	</tr>
  `);
}
</script>