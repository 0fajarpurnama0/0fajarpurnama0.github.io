---
layout: post
title: 0fajarpurnama0 Cryptocurrency Watchlist
---

<div id="coingecko"></div>

<script>
	$(document).ready(function(){
	  coingecko();
	})

	function coingecko(){
		$.get("https://0fajarpurnama0.github.io/assets/html/coingeckowidget.html", function(data){
		$('#coingecko').html(data);
		});
	}
</script>