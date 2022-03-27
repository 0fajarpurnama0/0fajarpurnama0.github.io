---
layout: post
title: Ethereum Virtual Machine Remote Procedure Call List
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, EVM, RPC]
featuredimage: 
description: Fans are the ones who brings wealth, fame, and fortune to these stars. Without fans, they are nothing, and yet receives absolutely nothing.
canonicalurl: https://0fajarpurnama0.github.io/cryptocurrency/2022/01/07/jetcoin-fans-rewarded
---
<div style="overflow-x:auto;">
	<table id="smart-chains" border>
	  <tr>
		<th>Icon</th>
		<th>Chain ID</th>
		<th>Chain Name</th>
		<th>Currency</th>
		<th>Symbol</th>
		<th>Decimal</th>
		<th>RPC URLs</th>
		<th>Explorers</th>
		<th>Reference</th>
		<th>Metamask</th>
	  </tr>
	</table>
</div>
<script>
  const evmrpcjson = new XMLHttpRequest();
  evmrpcjson.onload = function() {
    const chains = JSON.parse(this.responseText);
    let getrpcurls = "";
    let getblockexplorerurls = "";
    for (let chain in chains) {
      for (let i = 0; i < chains[chain].params[0].rpcUrls.length; i++) {
        getrpcurls += '<a href="'+chains[chain].params[0].rpcUrls[i]+'"target="_blank">'+chains[chain].params[0].rpcUrls[i]+'</a>,';
      }
      for (let i = 0; i < chains[chain].params[0].blockExplorerUrls.length; i++) {
        getblockexplorerurls += '<a href="'+chains[chain].params[0].blockExplorerUrls[i]+'"target="_blank">'+chains[chain].params[0].blockExplorerUrls[i]+'</a>,';
      }
      document.getElementById("smart-chains").innerHTML += `
	<tr>
		<td><img style="height: 1em;" src="`+chains[chain].params[0].iconUrls[0]+`"\></td>
			<td>` + chains[chain].params[0].chainId + `</td>
			<td>` + chains[chain].params[0].chainName + `</td>
			<td>` + chains[chain].params[0].nativeCurrency.name + `</td>
			<td>` + chains[chain].params[0].nativeCurrency.symbol + `</td>
			<td>` + chains[chain].params[0].nativeCurrency.decimals + `</td>
			<td>` + getrpcurls + `</td>
			<td>` + getblockexplorerurls + `</td>
			<td><a href="` + chains[chain].reference + `"target="_blank">` + chains[chain].reference + `</a></td>
			<td>
				<button onclick="addchainmetamask('` + chain + `')">Add
					<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/>
				</button>
			</td>
		</tr>
`;
      getrpcurls = "";
      getblockexplorerurls = "";
    }
  }
  evmrpcjson.open("GET", "https://0fajarpurnama0.github.io/assets/json/evmrpc.json");
  evmrpcjson.send();

  function addchainmetamask(chain) {
    evmrpcjson.onload = async function() {
      chains = JSON.parse(this.responseText);
      let params = chains[chain].params;
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params
      });
    }
    evmrpcjson.open("GET", "https://0fajarpurnama0.github.io/assets/json/evmrpc.json");
    evmrpcjson.send();
  }
</script>
<p>Source Code: <a href="http://mellow.link/9A1ce">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-27-evmrpclist.md</a>
</p>