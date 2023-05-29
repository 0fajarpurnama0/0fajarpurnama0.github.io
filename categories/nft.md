---
layout: post
title: Non-Fungible Tokens
description: All of my NFTs for sale.
permalink: /nft
---
<div id="grid-post-all" class="grid-post-all">
</div>

<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const my_nfts = JSON.parse(this.responseText);
  for (let i = 0; i < my_nfts.length; i++) {
  	document.getElementById("grid-post-all").innerHTML += `
    	<div>
          <h3>`+my_nfts[i].name+`</h3>
            <img src="`+my_nfts[i].image+`" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
            <p><a href="`+my_nfts[i].address+`">Buy NFT</a></p>
  		</div>
    `;
  }
}
xmlhttp.open("GET", "https://0fajarpurnama0.github.io/assets/json/mynfts.json");
xmlhttp.send();
</script>

<style>
.grid-post-all {
  display: grid;
  grid-template-columns: 50% auto;
  gap: 10px;
  background-color: green;
  padding: 10px;
  text-align: center;
  word-wrap: break-word;
}

.grid-post-all > div {
  background-color: rgba(225, 255, 175, 0.9);
}

.grid-post-all > div > img {
  max-width: 100%;
  max-height: 50vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.grid-post-all > div > h1,h2,h3 {
  text-align: center;
}
</style>
