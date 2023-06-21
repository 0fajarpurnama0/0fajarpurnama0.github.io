---
layout: post
title: Ethereum Virtual Machine Remote Procedure Call List
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, EVM, RPC]
featuredimage: https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png
description: List of EVM RPC with a button that automatically adds to Metamask written in JavaScript, JSON and Ethereum JS or Web3.
canonicalurl: 
---
<div>
    <p>Add RPC Endpoint: <span id="add_rpc_endpoint"></span></p>
    <p>Chain Name: <span id="chain_name"></span> <button onclick="copy_innertext_by_id_clipboard('chain_name')">&#128203;</button></p>
    <p>Chain ID: <span id="chain_id"></span> <button onclick="copy_innertext_by_id_clipboard('chain_id')">&#128203;</button></p>
    <p>Currency Name: <span id="currency_name"></span> <button onclick="copy_innertext_by_id_clipboard('currency_name')">&#128203;</button></p>
    <p>Currency Symbol: <span id="currency_symbol"></span> <button onclick="copy_innertext_by_id_clipboard('currency_symbol')">&#128203;</button></p>
    <p>Currency Decimals: <span id="currency_decimals"></span> <button onclick="copy_innertext_by_id_clipboard('currency_decimals')">&#128203;</button></p>
    <p>RPC URLs: <span id="rpc_urls"></span> <button onclick="copy_innertext_by_id_clipboard('rpc_urls')">&#128203;</button></p>
    <p>Block Explorers URLs: <span id="block_explorers_urls"></span> <button onclick="copy_innertext_by_id_clipboard('block_explorers_urls')">&#128203;</button></p>
    <p>Reference: <span id="reference"></span> <button onclick="copy_innertext_by_id_clipboard('reference')">&#128203;</button></p>
</div>
<div id="mainnet">
    <h2>Main Network</h2>
</div>
<div id="testnet">
    <h2>Test Network</h2>
</div>
<div id="devnet">
    <h2>Developer Network</h2>
</div>
<button onclick="show_chains()">Show</button>
<script>
    const evmrpcjson = new XMLHttpRequest();
    let chains;
    const mainnet_list = document.getElementById("mainnet");
    const testnet_list = document.getElementById("testnet");
    const devnet_list = document.getElementById("devnet");
    evmrpcjson.onload = function() {
        chains = JSON.parse(this.responseText);
        for (const chain in chains.mainnet) {
            if (chains.mainnet.hasOwnProperty.call(chains.mainnet, chain)) {
                mainnet_list.innerHTML += `<button class="button"><img class="icon" style="max-height: 1.5em; cursor: pointer;" onclick="show_chains('mainnet', '`+chain+`')" src="`+chains.mainnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.mainnet[chain]["params"][0]["chainName"]+`" /></button>`
            }
        }
        for (const chain in chains.testnet) {
            if (chains.testnet.hasOwnProperty.call(chains.testnet, chain)) {
                testnet_list.innerHTML += `<button class="button"><img class="icon" style="max-height: 1.5em; cursor: pointer;" onclick="show_chains('testnet', '`+chain+`')" src="`+chains.testnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.testnet[chain]["params"][0]["chainName"]+`" /></button>`
            }
        }
        for (const chain in chains.devnet) {
            if (chains.devnet.hasOwnProperty.call(chains.devnet, chain)) {
                devnet_list.innerHTML += `<button class="button"><img class="icon" style="max-height: 1.5em; cursor: pointer;" onclick="show_chains('devnet', '`+chain+`')" src="`+chains.devnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.devnet[chain]["params"][0]["chainName"]+`" /></button>`
            }
        }
    }
    evmrpcjson.open("GET", "https://0fajarpurnama0.github.io/assets/json/evmrpc.json");
    evmrpcjson.send();

    function show_chains(net, chain) {
        document.getElementById("add_rpc_endpoint").innerHTML = `<button id="add_rpc_endpoint_button"><img class="icon" style="max-height: 1.5em;" src="{{ /assets/images/icon/crypto/metamask-fox.svg | relative_url }}" onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg';"/></button>`;
        document.getElementById("add_rpc_endpoint_button").addEventListener("click", function() {
            ethereum_request_input(chains[net][chain]["method"], chains[net][chain]["params"]);
        });
        document.getElementById("chain_name").innerHTML = chains[net][chain]["params"][0]["chainName"];
        document.getElementById("chain_id").innerHTML = chains[net][chain]["params"][0]["chainId"];
        document.getElementById("currency_name").innerHTML = chains[net][chain]["params"][0]["nativeCurrency"]["name"];
        document.getElementById("currency_symbol").innerHTML = chains[net][chain]["params"][0]["nativeCurrency"]["symbol"];
        document.getElementById("currency_decimals").innerHTML = chains[net][chain]["params"][0]["nativeCurrency"]["decimals"];
        document.getElementById("rpc_urls").innerHTML = "";
        chains[net][chain]["params"][0]["rpcUrls"].forEach(element => {
            if(document.getElementById("rpc_urls").innerHTML == ""){
                document.getElementById("rpc_urls").innerHTML += `<a href="`+element+`">`+element+`</a>`;
            } else {
                document.getElementById("rpc_urls").innerHTML += `, <a href="`+element+`">`+element+`</a>`;
            }
        });
        document.getElementById("block_explorers_urls").innerHTML = "";
        chains[net][chain]["params"][0]["blockExplorerUrls"].forEach(element => {
            if(document.getElementById("block_explorers_urls").innerHTML == ""){
                document.getElementById("block_explorers_urls").innerHTML += `<a href="`+element+`">`+element+`</a>`;
            } else {
                document.getElementById("block_explorers_urls").innerHTML += `, <a href="`+element+`">`+element+`</a>`;
            }
        });
        document.getElementById("reference").innerHTML = `<a href="`+chains[net][chain]["reference"]+`">`+chains[net][chain]["reference"]+`</a>`;
    }

    function copy_innertext_by_id_clipboard(id) {
        // Get the text field
        const copyText = document.getElementById(id);

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.innerText);
    }

    async function ethereum_request_input(method, params) {
        await ethereum.request({
            method,
            params
        });
    }
</script>