---
layout: post
title: 0fajarpurnama0 Cryptocurrency Watchlist
---

<div id="coingecko"></div>

<script>
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("coingecko").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://0fajarpurnama0.github.io/assets/txt/coingeckowidget.txt", true);
  xhttp.send();
}

loadXMLDoc();
</script>