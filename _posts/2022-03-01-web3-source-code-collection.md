---
layout: post
title: Web3 Source Code Collection
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source]
featuredimage: 
description: List of Ethereum JS or Web3 source codes.
canonicalurl: 
---
<button onclick="connect()" id="connect">Connect</button>
<p>Account: <span id="showAccount"></span></p>

<script>
async function connect() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  document.getElementById("showAccount").innerHTML = account;
  
  if(ethereum.isConnected()){
    document.getElementById("connect").innerHTML = "connected";
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;connect()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;showAccount&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> connect() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;showAccount&quot;</span>).innerHTML <span style="color: #333333">=</span> account;
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<button onclick="getnativebalance()">Connect</button>
<p>Native Balance Hexadecimal: <span id="native-balance-hexadecimal"></span></p>
<p>Native Balance 18 Decimals: <span id="native-balance-18decimal"></span></p>
<p>Native Balance: <span id="native-balance"></span></p>

<script>
async function getnativebalance() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const balance = await ethereum.request({ method: 'eth_getBalance', params: [account, "latest"] });
  document.getElementById("native-balance-hexadecimal").innerHTML = balance;
  document.getElementById("native-balance-18decimal").innerHTML = parseInt(balance, 16);
  document.getElementById("native-balance").innerHTML = parseInt(balance, 16)/Math.pow(10, 18);
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;getnativebalance()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Native Balance Hexadecimal: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;native-balance-hexadecimal&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Native Balance 18 Decimals: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;native-balance-18decimal&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Native Balance: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;native-balance&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> getnativebalance() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #008800; font-weight: bold">const</span> balance <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_getBalance&#39;</span>, params<span style="color: #333333">:</span> [account, <span style="background-color: #fff0f0">&quot;latest&quot;</span>] });
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;native-balance-hexadecimal&quot;</span>).innerHTML <span style="color: #333333">=</span> balance;
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;native-balance-18decimal&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(balance, <span style="color: #0000DD; font-weight: bold">16</span>);
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;native-balance&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(balance, <span style="color: #0000DD; font-weight: bold">16</span>)<span style="color: #333333">/</span><span style="color: #007020">Math</span>.pow(<span style="color: #0000DD; font-weight: bold">10</span>, <span style="color: #0000DD; font-weight: bold">18</span>);
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<button onclick="addchainmetamask()">Add<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/></button>

<script>
async function addchainmetamask() {
  await ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0x1e',
      chainName: 'RSK Mainnet',
      nativeCurrency: {
        name: 'RSK BTC',
        symbol: 'RBTC',
        decimals: 18
      },
      rpcUrls: ['https://public-node.rsk.co'],
      iconUrls: ["https://www.rsk.co/img/rsk_logo.svg"],
      blockExplorerUrls: ['https://explorer.rsk.co']
    }]
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;addchainmetamask()&quot;</span><span style="color: #007700">&gt;</span>Add<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> addchainmetamask() {
  await ethereum.request({
    method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;wallet_addEthereumChain&#39;</span>,
    params<span style="color: #333333">:</span> [{
      chainId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x1e&#39;</span>,
      chainName<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;RSK Mainnet&#39;</span>,
      nativeCurrency<span style="color: #333333">:</span> {
        name<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;RSK BTC&#39;</span>,
        symbol<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;RBTC&#39;</span>,
        decimals<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">18</span>
      },
      rpcUrls<span style="color: #333333">:</span> [<span style="background-color: #fff0f0">&#39;https://public-node.rsk.co&#39;</span>],
      iconUrls<span style="color: #333333">:</span> [<span style="background-color: #fff0f0">&quot;https://www.rsk.co/img/rsk_logo.svg&quot;</span>],
      blockExplorerUrls<span style="color: #333333">:</span> [<span style="background-color: #fff0f0">&#39;https://explorer.rsk.co&#39;</span>]
    }]
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<p>Repository: <a href="http://mellow.link/3c59D">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-01-web3-source-code-collection.md</a></p>