---
layout: post
title: Ethereum Virtual Machine Remote Procedure Call List Table
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, EVM, RPC]
featuredimage: https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png
description: List of EVM RPC with a button that automatically adds to Metamask written in JavaScript, JSON and Ethereum JS or Web3.
canonicalurl: 
---
<style>
    table, th, td {
      border: 1px solid white;
      border-collapse: collapse;
    }
    th, td {
      background-color: black;
    }
    th {
      color: white;
    }
    td {
      color: lightgreen;
    }
    
    .stickycolumn {
      position: sticky;
      left: 0;
    }
    
    a:link {
      color: #6495ED;
      background-color: transparent;
      text-decoration: none;
    }

    a:visited {
      color: pink;
      background-color: transparent;
      text-decoration: none;
    }

    a:hover {
      color: red;
      background-color: transparent;
      text-decoration: underline;
    }

    a:active {
      color: yellow;
      background-color: transparent;
      text-decoration: underline;
    }
</style>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#mainnetworks">Main Networks</a></li>
  <li><a href="#testnetworks">Test Networks</a></li>
  <li><a href="#devnetworks">Developer Networks</a></li>
</ul>

<h2 id="mainnetworks">Main Networks</h2>
<div style="overflow-x:auto;">
    <table id="mainnet-smart-chains">
      <tr>
        <th>Icon</th>
        <th>Chain ID</th>
        <th class="stickycolumn">Chain Name</th>
        <th>Metamask</th>
        <th>Currency</th>
        <th>Symbol</th>
        <th>Decimal</th>
        <th>RPC URLs</th>
        <th>Explorers</th>
        <th>Reference</th>
      </tr>
    </table>
</div>

<h2 id="testnetworks">Test Networks</h2>
<div style="overflow-x:auto;">
    <table id="testnet-smart-chains">
      <tr>
        <th>Icon</th>
        <th>Chain ID</th>
        <th class="stickycolumn">Chain Name</th>
        <th>Metamask</th>
        <th>Currency</th>
        <th>Symbol</th>
        <th>Decimal</th>
        <th>RPC URLs</th>
        <th>Explorers</th>
        <th>Reference</th>
      </tr>
    </table>
</div>

<h2 id="devnetworks">Developer Networks</h2>
<div style="overflow-x:auto;">
    <table id="devnet-smart-chains">
      <tr>
        <th>Icon</th>
        <th>Chain ID</th>
        <th class="stickycolumn">Chain Name</th>
        <th>Metamask</th>
        <th>Currency</th>
        <th>Symbol</th>
        <th>Decimal</th>
        <th>RPC URLs</th>
        <th>Explorers</th>
        <th>Reference</th>
      </tr>
    </table>
</div>

<script>
  const evmrpcjson = new XMLHttpRequest();
  evmrpcjson.onload = function() {
    const chains = JSON.parse(this.responseText);
    const mainnet_chains = chains.mainnet;
    let getrpcurls = "";
    let getblockexplorerurls = "";
    for (let chain in mainnet_chains) {
      for (let i = 0; i < mainnet_chains[chain].params[0].rpcUrls.length; i++) {
        getrpcurls += '<a href="'+mainnet_chains[chain].params[0].rpcUrls[i]+'"target="_blank">'+mainnet_chains[chain].params[0].rpcUrls[i]+'</a>,';
      }
      for (let i = 0; i < mainnet_chains[chain].params[0].blockExplorerUrls.length; i++) {
        getblockexplorerurls += '<a href="'+mainnet_chains[chain].params[0].blockExplorerUrls[i]+'"target="_blank">'+mainnet_chains[chain].params[0].blockExplorerUrls[i]+'</a>,';
      }
      document.getElementById("mainnet-smart-chains").innerHTML += `
      <tr>
          <td><img style="height: 1em;" src="`+mainnet_chains[chain].params[0].iconUrls[0]+`"\></td>
            <td>` + parseInt(mainnet_chains[chain].params[0].chainId, 16) + ` (` + mainnet_chains[chain].params[0].chainId + `)</td>
            <td class="stickycolumn">` + mainnet_chains[chain].params[0].chainName + `</td>
            <td>
              <button onclick="addchainmetamask('mainnet', '` + chain + `')">Add
                <img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/>
              </button>
            </td>
            <td>` + mainnet_chains[chain].params[0].nativeCurrency.name + `</td>
            <td>` + mainnet_chains[chain].params[0].nativeCurrency.symbol + `</td>
            <td>` + mainnet_chains[chain].params[0].nativeCurrency.decimals + `</td>
            <td>` + getrpcurls + `</td>
            <td>` + getblockexplorerurls + `</td>
            <td><a href="` + mainnet_chains[chain].reference + `"target="_blank">` + mainnet_chains[chain].reference + `</a></td>
          </tr>
      `;
      getrpcurls = "";
      getblockexplorerurls = "";
    }
    const testnet_chains = chains.testnet;
    for (let chain in testnet_chains) {
      for (let i = 0; i < testnet_chains[chain].params[0].rpcUrls.length; i++) {
        getrpcurls += '<a href="'+testnet_chains[chain].params[0].rpcUrls[i]+'"target="_blank">'+testnet_chains[chain].params[0].rpcUrls[i]+'</a>,';
      }
      for (let i = 0; i < testnet_chains[chain].params[0].blockExplorerUrls.length; i++) {
        getblockexplorerurls += '<a href="'+testnet_chains[chain].params[0].blockExplorerUrls[i]+'"target="_blank">'+testnet_chains[chain].params[0].blockExplorerUrls[i]+'</a>,';
      }
      document.getElementById("testnet-smart-chains").innerHTML += `
      <tr>
          <td><img style="height: 1em;" src="`+testnet_chains[chain].params[0].iconUrls[0]+`"\></td>
            <td>` + parseInt(testnet_chains[chain].params[0].chainId, 16) + ` (` + testnet_chains[chain].params[0].chainId + `)</td>
            <td class="stickycolumn">` + testnet_chains[chain].params[0].chainName + `</td>
            <td>
                <button onclick="addchainmetamask('testnet', '` + chain + `')">Add
                <img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/>
              </button>
            </td>
            <td>` + testnet_chains[chain].params[0].nativeCurrency.name + `</td>
            <td>` + testnet_chains[chain].params[0].nativeCurrency.symbol + `</td>
            <td>` + testnet_chains[chain].params[0].nativeCurrency.decimals + `</td>
            <td>` + getrpcurls + `</td>
            <td>` + getblockexplorerurls + `</td>
            <td><a href="` + testnet_chains[chain].reference + `"target="_blank">` + testnet_chains[chain].reference + `</a></td>
          </tr>
      `;
      getrpcurls = "";
      getblockexplorerurls = "";
    }
    const devnet_chains = chains.devnet;
    for (let chain in devnet_chains) {
      for (let i = 0; i < devnet_chains[chain].params[0].rpcUrls.length; i++) {
        getrpcurls += '<a href="'+devnet_chains[chain].params[0].rpcUrls[i]+'"target="_blank">'+devnet_chains[chain].params[0].rpcUrls[i]+'</a>,';
      }
      for (let i = 0; i < devnet_chains[chain].params[0].blockExplorerUrls.length; i++) {
        getblockexplorerurls += '<a href="'+devnet_chains[chain].params[0].blockExplorerUrls[i]+'"target="_blank">'+devnet_chains[chain].params[0].blockExplorerUrls[i]+'</a>,';
      }
      document.getElementById("devnet-smart-chains").innerHTML += `
      <tr>
          <td><img style="height: 1em;" src="`+devnet_chains[chain].params[0].iconUrls[0]+`"\></td>
            <td>` + parseInt(devnet_chains[chain].params[0].chainId, 16) + ` (` + devnet_chains[chain].params[0].chainId + `)</td>
            <td class="stickycolumn">` + devnet_chains[chain].params[0].chainName + `</td>
            <td>
              <button onclick="addchainmetamask('devnet', '` + chain + `')">Add
                <img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/>
              </button>
            </td>
            <td>` + devnet_chains[chain].params[0].nativeCurrency.name + `</td>
            <td>` + devnet_chains[chain].params[0].nativeCurrency.symbol + `</td>
            <td>` + devnet_chains[chain].params[0].nativeCurrency.decimals + `</td>
            <td>` + getrpcurls + `</td>
            <td>` + getblockexplorerurls + `</td>
            <td><a href="` + devnet_chains[chain].reference + `"target="_blank">` + devnet_chains[chain].reference + `</a></td>
          </tr>
      `;
      getrpcurls = "";
      getblockexplorerurls = "";
    }
  }
  evmrpcjson.open("GET", "{{ '/assets/json/evmrpc.json' | relative_url }}");
  evmrpcjson.send();
  function addchainmetamask(thechains, chain) {
    evmrpcjson.onload = async function() {
      chains = JSON.parse(this.responseText);
      let params = chains[thechains][chain].params;
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params
      });
    }
    evmrpcjson.open("GET", "{{ '/assets/json/evmrpc.json' | relative_url }}");
    evmrpcjson.send();
  }
</script>

<p>Source Code: <a href="http://mellow.link/9A1ce">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-27-evmrpclist.md</a>
</p>