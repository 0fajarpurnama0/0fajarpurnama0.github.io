---
layout: post
title: Crypto Defi Blockchain News
category: tools
tags: [tools, widget, web, blog, crypto, defi, blockchain, news]
featuredimage: https://cdn.publish0x.com/prod/fs/images/772b867aed9caf09e65cedf45115aeda55e3c1c0605a932b48832ed00f31ef89.png
description: All crypto widget in html, css, and js for any website.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/30/crypto-defi-blockchain-news
---
<style>
  .wrapper {
    display: flex;
  }

  .wrapper > * {
    width: 100%;
  }
</style>
<!-- Trading View Economic Calendar Widget Start -->
<div class="wrapper">
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
    {
    "feedMode": "all_symbols",
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "regular",
    "width": "100%",
    "height": "100%",
    "locale": "en"
  }
    </script>
  </div>
</div>
<!-- Trading View Economic Calendar Widget End -->

<!-- Coingecko Widget Start -->
<div class="wrapper">
  <script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"></script>
  <coingecko-coin-heatmap-widget  height="400" locale="en"></coingecko-coin-heatmap-widget>
</div>
<!-- Coingecko Widget Stop -->


<!-- Publish0x Widget Start -->
<div class="wrapper">
  <script src="https://www.publish0x.com/widget/code"></script><publish0x-posts-widget aff="4oeEw0Yb0B" posts-number="9" content-type="tag" content-ids="19,5,8"></publish0x-posts-widget>
</div>
<!-- Publish0x Widget End -->

<!-- Cointelegraph Widget Start -->
<div class="wrapper">
  <script src="https://cointelegraph.com/news-widget" data-ct-widget-limit="6" data-ct-widget-theme="dark" data-ct-widget-size="large" data-ct-widget-priceindex="true" data-ct-widget-images="true" data-ct-widget-currency="USD" data-ct-widget-language="en"></script>
</div>
<!-- Cointelegraph Widget End -->

<!-- CryptoRival News Widget BEGIN -->
<div class="wrapper">
  <script type="text/javascript" src="https://static.cryptorival.com/js/newswidget.js"></script>
  <a id="cr-copyright" href="https://cryptorival.com/" target="_blank" rel="nofollow">Powered by CryptoRival</a>
  <script type="text/javascript">
  showNews('500', true, '0', 'FF9933', 'FF9933', 'E57300', '777777', '495');
  </script>
</div>
<!-- CryptoRival News Widget END -->

<!-- Cryptopanic Widget Start -->
<div class="wrapper">
  <a href="https://cryptopanic.com/" target="_blank" data-news_feed="recent" data-bg_color="#FFFFFF" data-text_color="#333333" data-link_color="#0091C2" data-header_bg_color="#30343B" data-header_text_color="#FFFFFF" class="CryptoPanicWidget">Latest News</a>
  <script src="https://static.cryptopanic.com/static/js/widgets.min.js"></script>
</div>
<!-- Cryptopanic Widget End -->

<!-- Cryptohpper Widget Start -->
<div class="wrapper">
  <div class="cryptohopper-web-widget" data-id="5" data-atid="32017"></div>
  <script src="https://www.cryptohopper.com/widgets/js/script"></script>
</div>
<!-- Cryptohopper Widget End -->

<!-- RSS App Widget Start -->
<div class="wrapper">
  <rssapp-wall id="tNoEXw86GRJa8uTA"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>
</div>
<!-- RSS App Widget End -->

<!-- Trading View Snaps Widget Start -->
<div class="wrapper">
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
    {
    "feedMode": "all_symbols",
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "regular",
    "width": "100%",
    "height": "100%",
    "locale": "en"
    }
    </script>
</div>
<!-- Trading View Snaps Widget End -->

<!-- List of DeFi Tools Start -->
<div id="defitoollist">
  <p>List of DeFi Tools</p>
	<ul>
	</ul>
</div>

<script>
const defitoolsxmlhttp = new XMLHttpRequest();
const defitoolsdiv = document.getElementById("defitoollist");
const defitoolsdivul = defitoolsdiv.querySelector("ul");
defitoolsxmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  myObj.online.forEach(function(element) {
  	if(element.category == "defi"){
  		defitoolsdivul.innerHTML += `<li><a href="`+element.link+`" target="_blank">`+element.tool+`</a></li>`;
    }
  });
}
defitoolsxmlhttp.open("GET", "https://0fajarpurnama0.github.io/assets/json/tools.json");
defitoolsxmlhttp.send();
</script>
<!-- List of DeFi Tools End -->