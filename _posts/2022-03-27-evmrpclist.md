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

<script src="{{ '/assets/js/evmrpcadd.js' | relative_url }}"></script>