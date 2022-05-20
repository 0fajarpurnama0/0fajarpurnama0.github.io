---
layout: post
title: Web3 Source Code Collection
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source]
featuredimage: https://images.hive.blog/DQma5YvWPusmDNDhsm64yahiJtGd5o2i2h9eJMFM2hhg1zq/add-uniswap-token-button.png
description: List of Ethereum JS or Web3 source codes.
canonicalurl: 
---
<h1>Table of Contents</h1>
<ul>
  <li><a href="#libraries">Libraries</a></li>
  <li><a href="#ethereumvirtualmachines">Ethereum Virtual Machine</a></li>
  <li><a href="#solana">Solana</a></li>
  <li><a href="#tron">Tron</a></li>
  <li><a href="#stellar">Stellar</a></li>
  <li><a href="#zilliqa">Zilliqa</a></li>
  <li><a href="#neo">Neo</a></li>
  <li><a href="#cosmosatom">Cosmos Atom</a></li>
  <li><a href="#eos">Eos</a></li>
  <li><a href="#near">Near</a></li>
  <li><a href="#waves">Waves</a></li>
  <li><a href="#hive">Hive</a></li>
  <li><a href="#wax">Wax</a></li>
  <li><a href="#algorand">Algorand</a></li>
  <li><a href="#vechain">Vechain</a></li>
</ul>

<h1 id="libraries">Libraries</h1>
<p>Libraries are available on their official websites. If they are no longer available, I kept backups in <a href="http://mellow.link/1itD6">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/tree/master/assets/js/3rdpartyweb3</a>.</p>

<h1 id="ethereumvirtualmachines">Ethereum Virtual Machines</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.metamask.io/guide/">MetaMask Docs</a></li>
  <li><a href="https://eth.wiki/json-rpc/API#json-rpc-methods">Ethereum JSON RPC Methods</a></li>
  <li><a href="https://docs.ethers.io/">Ethers Library</a></li>
</ul>

<h2 id="connectwallet">Connect Wallet</h2>
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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;connect()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;showAccount&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> connect() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;showAccount&quot;</span>).innerHTML <span style="color: #333333">=</span> account;
  
  <span style="color: #008800; font-weight: bold">if</span>(ethereum.isConnected()){
  	<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;connect&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;connected&quot;</span>;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>


<br />

<h2 id="onaccountchange">On Account Change</h2>
<button onclick="connectchange()" id="connectchange">Connect</button>
<p>Account: <span id="showAccountchange"></span></p>

<script>
async function connectchange() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  document.getElementById("showAccountchange").innerHTML = account;
  
  if(ethereum.isConnected()){
  	document.getElementById("connectchange").innerHTML = "connected";
  }
}

ethereum.on('accountsChanged', function (accounts) {
  connectchange();
});
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;connect()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;showAccount&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> connect() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;showAccount&quot;</span>).innerHTML <span style="color: #333333">=</span> account;
  
  <span style="color: #008800; font-weight: bold">if</span>(ethereum.isConnected()){
  	<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;connect&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;connected&quot;</span>;
  }
}

ethereum.on(<span style="background-color: #fff0f0">&#39;accountsChanged&#39;</span>, <span style="color: #008800; font-weight: bold">function</span> (accounts) {
  connect();
});
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>


<br />

<h2 id="signpersonalmessage">Sign Personal Message</h2>
<button onclick="connect_personal_sign()" id="connect-personal-sign">Connect</button>
<p>Account: <span id="showAccount-personal-sign"></span></p>
<p>Personal Signature: <span id="personal-sign"></span></p>

<script>
async function connect_personal_sign() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const message = "Hello from signer!";
  const signature = await ethereum.request({ method: 'personal_sign', params: [ message, account ] });
  
  if(ethereum.isConnected()){
    document.getElementById("showAccount-personal-sign").innerHTML = account;
    document.getElementById("connect-personal-sign").innerHTML = "connected";
    document.getElementById("personal-sign").innerHTML = signature;
  }
}

ethereum.on('accountsChanged', function (accounts) {
  connect_personal_sign();
});
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;connect()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;showAccount&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Personal Signature: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;personal-sign&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> connect() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #008800; font-weight: bold">const</span> message <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Hello from signer!&quot;</span>;
  <span style="color: #008800; font-weight: bold">const</span> signature <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;personal_sign&#39;</span>, params<span style="color: #333333">:</span> [ message, account ] });
  
  <span style="color: #008800; font-weight: bold">if</span>(ethereum.isConnected()){
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;showAccount&quot;</span>).innerHTML <span style="color: #333333">=</span> account;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;connect&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;connected&quot;</span>;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;personal-sign&quot;</span>).innerHTML <span style="color: #333333">=</span> signature;
  }
}

ethereum.on(<span style="background-color: #fff0f0">&#39;accountsChanged&#39;</span>, <span style="color: #008800; font-weight: bold">function</span> (accounts) {
  connect();
});
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2 id="getnativeassetbalance">Get Native Asset Balance</h2>

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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;getnativebalance()&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
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

<h2 id="addtokentowatchlist">Get Gas Price</h2>

<button onclick="getgasprice()">Get⛽</button>
<p>Gas Price Hexadecimal: <span id="gas-price-hexadecimal"></span></p>
<p>Gas Price Wei: <span id="gas-price-wei"></span></p>
<p>Gas Price GWei: <span id="gas-price-gwei"></span></p>
<p>Gas Price Native Asset: <span id="gas-price"></span></p>

<script>
async function getgasprice() {
  let gasprice = await ethereum.request({method: 'eth_gasPrice', params: []});
  document.getElementById("gas-price-hexadecimal").innerHTML = gasprice;
  document.getElementById("gas-price-wei").innerHTML = parseInt(gasprice, 16);
  document.getElementById("gas-price-gwei").innerHTML = parseInt(gasprice, 16)/Math.pow(10, 9);
  document.getElementById("gas-price").innerHTML = parseInt(gasprice, 16)/Math.pow(10, 18);
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;addtokentowatchlist&quot;</span><span style="color: #007700">&gt;</span>Get Gas Price<span style="color: #007700">&lt;/h2&gt;</span>

<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;getgasprice()&quot;</span><span style="color: #007700">&gt;</span>Get⛽<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Price Hexadecimal: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-price-hexadecimal&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Price Wei: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-price-wei&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Price GWei: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-price-gwei&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Price Native Asset: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-price&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> getgasprice() {
  <span style="color: #008800; font-weight: bold">let</span> gasprice <span style="color: #333333">=</span> await ethereum.request({method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_gasPrice&#39;</span>, params<span style="color: #333333">:</span> []});
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-price-hexadecimal&quot;</span>).innerHTML <span style="color: #333333">=</span> gasprice;
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-price-wei&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(gasprice, <span style="color: #0000DD; font-weight: bold">16</span>);
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-price-gwei&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(gasprice, <span style="color: #0000DD; font-weight: bold">16</span>)<span style="color: #333333">/</span><span style="color: #007020">Math</span>.pow(<span style="color: #0000DD; font-weight: bold">10</span>, <span style="color: #0000DD; font-weight: bold">9</span>);
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-price&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(gasprice, <span style="color: #0000DD; font-weight: bold">16</span>)<span style="color: #333333">/</span><span style="color: #007020">Math</span>.pow(<span style="color: #0000DD; font-weight: bold">10</span>, <span style="color: #0000DD; font-weight: bold">18</span>);
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Estimate Gas Limit</h2>
<button onclick="estgaslimit()">Estimate ⛽ Limit</button>
<p>Gas Limit Hexadecimal: <span id="gas-limit-hexadecimal"></span></p>
<p>Gas Limit: <span id="gas-limit"></span></p>

<script>
async function estgaslimit() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const amount = 1;
  const recipient = '0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB'

  let params = [{"from": account, "to": recipient, "value": '0x' + (amount * 10 ** 18).toString(16)}]
  
  try {
  	let gaslimit = await ethereum.request({method: 'eth_estimateGas', params});
  	document.getElementById("gas-limit-hexadecimal").innerHTML = gaslimit;
  	document.getElementById("gas-limit").innerHTML = parseInt(gaslimit, 16);
  } catch(err) {
 	document.getElementById("gas-limit-hexadecimal").innerHTML = err.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;estgaslimit()&quot;</span><span style="color: #007700">&gt;</span>Estimate ⛽ Limit<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Limit Hexadecimal: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-limit-hexadecimal&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Gas Limit: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;gas-limit&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> estgaslimit() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> account <span style="color: #333333">=</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>];
  <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">const</span> recipient <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB&#39;</span>

  <span style="color: #008800; font-weight: bold">let</span> params <span style="color: #333333">=</span> [{<span style="background-color: #fff0f0">&quot;from&quot;</span><span style="color: #333333">:</span> account, <span style="background-color: #fff0f0">&quot;to&quot;</span><span style="color: #333333">:</span> recipient, <span style="background-color: #fff0f0">&quot;value&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x&#39;</span> <span style="color: #333333">+</span> (amount <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">10</span> <span style="color: #333333">**</span> <span style="color: #0000DD; font-weight: bold">18</span>).toString(<span style="color: #0000DD; font-weight: bold">16</span>)}]
  
  <span style="color: #008800; font-weight: bold">try</span> {
  	<span style="color: #008800; font-weight: bold">let</span> gaslimit <span style="color: #333333">=</span> await ethereum.request({method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_estimateGas&#39;</span>, params});
  	<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-limit-hexadecimal&quot;</span>).innerHTML <span style="color: #333333">=</span> gaslimit;
  	<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-limit&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #007020">parseInt</span>(gaslimit, <span style="color: #0000DD; font-weight: bold">16</span>);
  } <span style="color: #008800; font-weight: bold">catch</span>(err) {
 	<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;gas-limit-hexadecimal&quot;</span>).innerHTML <span style="color: #333333">=</span> err.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send Native Asset</h2>
<button onclick="sendeth()">Send Native Asset</button>

<script>
//Sending Ethereum to an address
async function sendeth() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const amount = 1;
  const recipient = '0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB'
  
  params = [
        {
          from: accounts[0],
          to: recipient,
          value: '0x' + (amount * 10 ** 18).toString(16),
          gasPrice: await ethereum.request({method: 'eth_gasPrice', params: []}),
          gas: '' //auto,
        },
      ];
  
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then(txHash => {console.log(txHash)})
    .catch(error => {console.log(error)});
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;sendeth()&quot;</span><span style="color: #007700">&gt;</span>Send Native Asset<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #888888">//Sending Ethereum to an address</span>
async <span style="color: #008800; font-weight: bold">function</span> sendeth() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">const</span> recipient <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB&#39;</span>
  
  params <span style="color: #333333">=</span> [
        {
          from<span style="color: #333333">:</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>],
          to<span style="color: #333333">:</span> recipient,
          value<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x&#39;</span> <span style="color: #333333">+</span> (amount <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">10</span> <span style="color: #333333">**</span> <span style="color: #0000DD; font-weight: bold">18</span>).toString(<span style="color: #0000DD; font-weight: bold">16</span>),
          gasPrice<span style="color: #333333">:</span> await ethereum.request({method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_gasPrice&#39;</span>, params<span style="color: #333333">:</span> []}),
          gas<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;&#39;</span> <span style="color: #888888">//auto,</span>
        },
      ];
  
  ethereum
    .request({
      method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_sendTransaction&#39;</span>,
      params,
    })
    .then(txHash <span style="color: #333333">=&gt;</span> {console.log(txHash)})
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {console.log(error)});
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2 id="sendmessagetoanevmaddress">Send Message to an EVM Address</h2>
<button onclick="sendmsg()">Send Message</button>

<script>
function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++) {
    	var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

//Sending Ethereum to an address
async function sendmsg() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const recipient = '0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB';
  const message = "0x" + ascii_to_hex('put message here');
  const amount = 1;

  params = [
        {
          from: accounts[0],
          to: recipient,
          value: '0x' + (amount * 10 ** 18).toString(16),
          gasPrice: await ethereum.request({method: 'eth_gasPrice', params: []}),
          gas: '', //auto
          data: message
        },
      ];
  
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then(txHash => {console.log(txHash)})
    .catch(error => {console.log(error)});
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;sendmsg()&quot;</span><span style="color: #007700">&gt;</span>Send Message<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #008800; font-weight: bold">function</span> ascii_to_hex(str) {
    <span style="color: #008800; font-weight: bold">var</span> arr1 <span style="color: #333333">=</span> [];
    <span style="color: #008800; font-weight: bold">for</span> (<span style="color: #008800; font-weight: bold">var</span> n <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>, l <span style="color: #333333">=</span> str.length; n <span style="color: #333333">&lt;</span> l; n <span style="color: #333333">++</span>) {
    	<span style="color: #008800; font-weight: bold">var</span> hex <span style="color: #333333">=</span> <span style="color: #007020">Number</span>(str.charCodeAt(n)).toString(<span style="color: #0000DD; font-weight: bold">16</span>);
        arr1.push(hex);
    }
    <span style="color: #008800; font-weight: bold">return</span> arr1.join(<span style="background-color: #fff0f0">&#39;&#39;</span>);
}

<span style="color: #888888">//Sending Ethereum to an address</span>
async <span style="color: #008800; font-weight: bold">function</span> sendmsg() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  <span style="color: #008800; font-weight: bold">const</span> recipient <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB&#39;</span>;
  <span style="color: #008800; font-weight: bold">const</span> message <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0x&quot;</span> <span style="color: #333333">+</span> ascii_to_hex(<span style="background-color: #fff0f0">&#39;put message here&#39;</span>);
  <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;

  params <span style="color: #333333">=</span> [
        {
          from<span style="color: #333333">:</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>],
          to<span style="color: #333333">:</span> recipient,
          value<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x&#39;</span> <span style="color: #333333">+</span> (amount <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">10</span> <span style="color: #333333">**</span> <span style="color: #0000DD; font-weight: bold">18</span>).toString(<span style="color: #0000DD; font-weight: bold">16</span>),
          gasPrice<span style="color: #333333">:</span> await ethereum.request({method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_gasPrice&#39;</span>, params<span style="color: #333333">:</span> []}),
          gas<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;&#39;</span>, <span style="color: #888888">//auto</span>
          data<span style="color: #333333">:</span> message
        },
      ];
  
  ethereum
    .request({
      method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_sendTransaction&#39;</span>,
      params,
    })
    .then(txHash <span style="color: #333333">=&gt;</span> {console.log(txHash)})
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {console.log(error)});
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2 id="addcustomnetwork">Add Custom Network</h2>

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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;addchainmetamask()&quot;</span><span style="color: #007700">&gt;</span>Add<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>

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

<br />

<h2 id="changenetwork">Change Network</h2>
<button onclick="changenetwork()">Change Network</button>
	
<script>
async function changenetwork() {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x38' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x38',
              chainName: 'Binance Smart Chain Main Network',
              rpcUrls: ['https://rpc.ankr.com/bsc', 'https://bsc-dataseed.binance.org/'] /* ... */,
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
}
</script>
	
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;changenetwork()&quot;</span><span style="color: #007700">&gt;</span>Change Network<span style="color: #007700">&lt;/button&gt;</span>
	
<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> changenetwork() {
  <span style="color: #008800; font-weight: bold">try</span> {
    await ethereum.request({
      method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;wallet_switchEthereumChain&#39;</span>,
      params<span style="color: #333333">:</span> [{ chainId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x38&#39;</span> }],
    });
  } <span style="color: #008800; font-weight: bold">catch</span> (switchError) {
    <span style="color: #888888">// This error code indicates that the chain has not been added to MetaMask.</span>
    <span style="color: #008800; font-weight: bold">if</span> (switchError.code <span style="color: #333333">===</span> <span style="color: #0000DD; font-weight: bold">4902</span>) {
      <span style="color: #008800; font-weight: bold">try</span> {
        await ethereum.request({
          method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;wallet_addEthereumChain&#39;</span>,
          params<span style="color: #333333">:</span> [
            {
              chainId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x38&#39;</span>,
              chainName<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;Binance Smart Chain Main Network&#39;</span>,
              rpcUrls<span style="color: #333333">:</span> [<span style="background-color: #fff0f0">&#39;https://rpc.ankr.com/bsc&#39;</span>, <span style="background-color: #fff0f0">&#39;https://bsc-dataseed.binance.org/&#39;</span>] <span style="color: #888888">/* ... */</span>,
            },
          ],
        });
      } <span style="color: #008800; font-weight: bold">catch</span> (addError) {
        <span style="color: #888888">// handle &quot;add&quot; error</span>
      }
    }
    <span style="color: #888888">// handle other &quot;switch&quot; errors</span>
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2 id="addtokentowatchlist">Add Token to Watchlist</h2>

<button onclick="watchasset()">Add<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/><img style="height: 1em;" src="https://github.com/Uniswap/docs/raw/main/static/img/favicon.png"/></button>

<script>
async function watchasset() {
  await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        image: 'https://github.com/Uniswap/docs/raw/main/static/img/favicon.png',
      },
    },
  })
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;watchasset()&quot;</span><span style="color: #007700">&gt;</span>Add<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://github.com/Uniswap/docs/raw/main/static/img/favicon.png&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> watchasset() {
  await ethereum.request({
    method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;wallet_watchAsset&#39;</span>,
    params<span style="color: #333333">:</span> {
      type<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;ERC20&#39;</span>,
      options<span style="color: #333333">:</span> {
        address<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984&#39;</span>,
        symbol<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;UNI&#39;</span>,
        decimals<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">18</span>,
        image<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;https://github.com/Uniswap/docs/raw/main/static/img/favicon.png&#39;</span>,
      },
    },
  })
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2 id="getspecifictokenbalance">Get Specific Token Balance</h2>
<p>Here I use <a href="https://docs.ethers.io/v5/api/contract/example/">Ethers library</a>, anyone knows how to use pure Ethereum RPC?</p>

<button onclick="gettokenbalance()">Get<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/><img style="height: 1em;" src="https://avatars.githubusercontent.com/u/66380691?s=48&v=4"/></button>
<p>ERC20 Statera Balance 18 Decimals: <span id="statera-balance-18decimals"></span></p>

<p>ERC20 Statera Balance: <span id="statera-balance"></span></p>

<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
        
<script>
async function gettokenbalance() {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    
    const minabi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
	];
    
    const contract_address = "0xa7DE087329BFcda5639247F96140f9DAbe3DeED1";
    
    const erc20 = new ethers.Contract(contract_address, minabi, provider);
    
    const getBalance = await erc20.balanceOf(signer.getAddress());
    
    document.getElementById("statera-balance-18decimals").innerHTML = getBalance;
    document.getElementById("statera-balance").innerHTML = getBalance/Math.pow(10, 18);
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;gettokenbalance()&quot;</span><span style="color: #007700">&gt;</span>Get<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://avatars.githubusercontent.com/u/66380691?s=48&amp;v=4&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>ERC20 Statera Balance 18 Decimals: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;statera-balance-18decimals&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;p&gt;</span>ERC20 Statera Balance: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;statera-balance&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.ethers.io/lib/ethers-5.2.umd.min.js&quot;</span>
        <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;application/javascript&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
        
<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> gettokenbalance() {
    <span style="color: #008800; font-weight: bold">const</span> provider <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> ethers.providers.Web3Provider(<span style="color: #007020">window</span>.ethereum);
    await provider.send(<span style="background-color: #fff0f0">&quot;eth_requestAccounts&quot;</span>, []);
    <span style="color: #008800; font-weight: bold">const</span> signer <span style="color: #333333">=</span> provider.getSigner();
    
    <span style="color: #008800; font-weight: bold">const</span> minabi <span style="color: #333333">=</span> [
    <span style="color: #888888">// Read-Only Functions</span>
    <span style="background-color: #fff0f0">&quot;function balanceOf(address owner) view returns (uint256)&quot;</span>,
    <span style="background-color: #fff0f0">&quot;function decimals() view returns (uint8)&quot;</span>,
    <span style="background-color: #fff0f0">&quot;function symbol() view returns (string)&quot;</span>,

    <span style="color: #888888">// Authenticated Functions</span>
    <span style="background-color: #fff0f0">&quot;function transfer(address to, uint amount) returns (bool)&quot;</span>,

    <span style="color: #888888">// Events</span>
    <span style="background-color: #fff0f0">&quot;event Transfer(address indexed from, address indexed to, uint amount)&quot;</span>
	];
    
    <span style="color: #008800; font-weight: bold">const</span> contract_address <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0xa7DE087329BFcda5639247F96140f9DAbe3DeED1&quot;</span>;
    
    <span style="color: #008800; font-weight: bold">const</span> erc20 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> ethers.Contract(contract_address, minabi, provider);
    
    <span style="color: #008800; font-weight: bold">const</span> getBalance <span style="color: #333333">=</span> await erc20.balanceOf(signer.getAddress());
    
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;statera-balance-18decimals&quot;</span>).innerHTML <span style="color: #333333">=</span> getBalance;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;statera-balance&quot;</span>).innerHTML <span style="color: #333333">=</span> getBalance<span style="color: #333333">/</span><span style="color: #007020">Math</span>.pow(<span style="color: #0000DD; font-weight: bold">10</span>, <span style="color: #0000DD; font-weight: bold">18</span>);
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h1 id="solana">Solana</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.solana.com/developing/programming-model/overview">Solana Developer Documentation</a></li>
</ul>

<h2>Connect Web3 Wallet</h2>
<button id="get-account-solana" onclick="get_account_solana()">Get Account</button>
<p>Account: <span id="solana-account"></span></p>

<script>
async function get_account_solana() {
  try {
    const resp = await window.solana.connect();
    document.getElementById('solana-account').innerHTML = resp.publicKey.toString();
    window.solana.on("connect", () => document.getElementById('get-account-solana').innerHTML = "Connected");
  } catch (err) {
    document.getElementById('solana-account').innerHTML = err.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;get-account-solana&quot;</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;get_account_solana()&quot;</span><span style="color: #007700">&gt;</span>Get Account<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;solana-account&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> get_account_solana() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> resp <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.solana.connect();
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-account&#39;</span>).innerHTML <span style="color: #333333">=</span> resp.publicKey.toString();
    <span style="color: #007020">window</span>.solana.on(<span style="background-color: #fff0f0">&quot;connect&quot;</span>, () <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;get-account-solana&#39;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Connected&quot;</span>);
  } <span style="color: #008800; font-weight: bold">catch</span> (err) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-account&#39;</span>).innerHTML <span style="color: #333333">=</span> err.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<p>Beyond here requires <a href="https://docs.solana.com/developing/clients/javascript-api">Solana Web3 JS</a>:</p>

<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>

<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>

<br />

<h2>Establish Connection To Network</h2>
<select id="choose-solana-network" onchange="establish_connection_network_solana()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select>
<p>Network: <span id="solana-network"></span></p>

<script>
async function establish_connection_network_solana() {
  try {
    let connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(document.getElementById("choose-solana-network").value),
      'confirmed',
    );
    document.getElementById('solana-network').innerHTML = connection['_rpcEndpoint'];
  } catch (err) {
    document.getElementById('solana-network').innerHTML = err.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;choose-solana-network&quot;</span> <span style="color: #0000CC">onchange=</span><span style="background-color: #fff0f0">&quot;establish_connection_network_solana()&quot;</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;choose&quot;</span><span style="color: #007700">&gt;</span>choose<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;devnet&quot;</span><span style="color: #007700">&gt;</span>devnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;testnet&quot;</span><span style="color: #007700">&gt;</span>testnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;mainnet-beta&quot;</span><span style="color: #007700">&gt;</span>mainnet-beta<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;solana-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> establish_connection_network_solana() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">let</span> connection <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;choose-solana-network&quot;</span>).value),
      <span style="background-color: #fff0f0">&#39;confirmed&#39;</span>,
    );
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-network&#39;</span>).innerHTML <span style="color: #333333">=</span> connection[<span style="background-color: #fff0f0">&#39;_rpcEndpoint&#39;</span>];
  } <span style="color: #008800; font-weight: bold">catch</span> (err) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-network&#39;</span>).innerHTML <span style="color: #333333">=</span> err.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Get Solana Airdrop On Devnet or Testnet and Get Balance</h2>
<p>Get Airdrop: <select id="choose-solana-network-airdrop" onchange="get_airdrop_solana()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select></p>
<p>Network: <span id="solana-network-airdrop"></span></p>
<p>Airdrop (balance): <span id="received-airdrop"></span></p>

<script>
async function get_airdrop_solana() {
  try {
    const resp = await window.solana.connect();
    let connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(document.getElementById("choose-solana-network-airdrop").value),
      'confirmed',
    );
    document.getElementById('solana-network-airdrop').innerHTML = connection['_rpcEndpoint'];

    let airdropSignature = await connection.requestAirdrop(
      resp.publicKey,
      solanaWeb3.LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropSignature);
    let balance = await connection.getBalance(resp.publicKey);
    document.getElementById('received-airdrop').innerHTML = balance;
  } catch (err) {
    document.getElementById('solana-network-airdrop').innerHTML = err.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;p&gt;</span>Get Airdrop: <span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;choose-solana-network-airdrop&quot;</span> <span style="color: #0000CC">onchange=</span><span style="background-color: #fff0f0">&quot;get_airdrop_solana()&quot;</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;choose&quot;</span><span style="color: #007700">&gt;</span>choose<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;devnet&quot;</span><span style="color: #007700">&gt;</span>devnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;testnet&quot;</span><span style="color: #007700">&gt;</span>testnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;mainnet-beta&quot;</span><span style="color: #007700">&gt;</span>mainnet-beta<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;solana-network-airdrop&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Airdrop (balance): <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;received-airdrop&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> get_airdrop_solana() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> resp <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.solana.connect();
    <span style="color: #008800; font-weight: bold">let</span> connection <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;choose-solana-network-airdrop&quot;</span>).value),
      <span style="background-color: #fff0f0">&#39;confirmed&#39;</span>,
    );
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-network-airdrop&#39;</span>).innerHTML <span style="color: #333333">=</span> connection[<span style="background-color: #fff0f0">&#39;_rpcEndpoint&#39;</span>];

    <span style="color: #008800; font-weight: bold">let</span> airdropSignature <span style="color: #333333">=</span> await connection.requestAirdrop(
      resp.publicKey,
      solanaWeb3.LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropSignature);
    <span style="color: #008800; font-weight: bold">let</span> balance <span style="color: #333333">=</span> await connection.getBalance(resp.publicKey);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;received-airdrop&#39;</span>).innerHTML <span style="color: #333333">=</span> balance;
  } <span style="color: #008800; font-weight: bold">catch</span> (err) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;solana-network-airdrop&#39;</span>).innerHTML <span style="color: #333333">=</span> err.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send SOL</h2>
<select id="send-sol-network" onchange="send_sol()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select>

<script>
async function send_sol() {
  try {
    const resp = await window.solana.connect();

    let connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(document.getElementById("send-sol-network").value),
      'confirmed',
    );

    let recieverWallet = new solanaWeb3.PublicKey("G6Ha3ibcMMFiRjWMCA3YEioC1NDfrKEb3NEFEwevXZxb");

    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: resp.publicKey,
        toPubkey: recieverWallet,
        lamports: solanaWeb3.LAMPORTS_PER_SOL/10 //sending 0.1 SOL. Remember 1 Lamport = 10^-9 SOL.
      }),
    );

    transaction.feePayer = await resp.publicKey;
    let blockhashObj = await connection.getRecentBlockhash();
    transaction.recentBlockhash = await blockhashObj.blockhash;

    if(transaction) {
      console.log("Txn created successfully: " + transaction);
    }

    const { signature } = await window.solana.signAndSendTransaction(transaction);
    await connection.confirmTransaction(signature);

    console.log("Signature: ", signature);

  } catch (err) {
    console.log(err.message);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;send-sol-network&quot;</span> <span style="color: #0000CC">onchange=</span><span style="background-color: #fff0f0">&quot;send_sol()&quot;</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;choose&quot;</span><span style="color: #007700">&gt;</span>choose<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;devnet&quot;</span><span style="color: #007700">&gt;</span>devnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;testnet&quot;</span><span style="color: #007700">&gt;</span>testnet<span style="color: #007700">&lt;/option&gt;</span>
  <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;mainnet-beta&quot;</span><span style="color: #007700">&gt;</span>mainnet-beta<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> send_sol() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> resp <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.solana.connect();

    <span style="color: #008800; font-weight: bold">let</span> connection <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;send-sol-network&quot;</span>).value),
      <span style="background-color: #fff0f0">&#39;confirmed&#39;</span>,
    );

    <span style="color: #008800; font-weight: bold">let</span> recieverWallet <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.PublicKey(<span style="background-color: #fff0f0">&quot;G6Ha3ibcMMFiRjWMCA3YEioC1NDfrKEb3NEFEwevXZxb&quot;</span>);

    <span style="color: #008800; font-weight: bold">const</span> transaction <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey<span style="color: #333333">:</span> resp.publicKey,
        toPubkey<span style="color: #333333">:</span> recieverWallet,
        lamports<span style="color: #333333">:</span> solanaWeb3.LAMPORTS_PER_SOL<span style="color: #333333">/</span><span style="color: #0000DD; font-weight: bold">10</span> <span style="color: #888888">//sending 0.1 SOL. Remember 1 Lamport = 10^-9 SOL.</span>
      }),
    );

    transaction.feePayer <span style="color: #333333">=</span> await resp.publicKey;
    <span style="color: #008800; font-weight: bold">let</span> blockhashObj <span style="color: #333333">=</span> await connection.getRecentBlockhash();
    transaction.recentBlockhash <span style="color: #333333">=</span> await blockhashObj.blockhash;

    <span style="color: #008800; font-weight: bold">if</span>(transaction) {
      console.log(<span style="background-color: #fff0f0">&quot;Txn created successfully: &quot;</span> <span style="color: #333333">+</span> transaction);
    }

    <span style="color: #008800; font-weight: bold">const</span> { signature } <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.solana.signAndSendTransaction(transaction);
    await connection.confirmTransaction(signature);

    console.log(<span style="background-color: #fff0f0">&quot;Signature: &quot;</span>, signature);

  } <span style="color: #008800; font-weight: bold">catch</span> (err) {
    console.log(err.message);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="tron">Tron</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developers.tron.network/">The Tron Developer Hub</a></li>
</ul>

<h2>Get Default Address</h2>
<button onclick="gettronwebdefaultaddress()">Can you get tronweb from tronlink?</button>
<p>Default Address: <span id="tronlink-defaultAddress"></span></p>

<script>
async function gettronwebdefaultaddress(){
  if(window.tronWeb && window.tronWeb.defaultAddress.base58){
      document.getElementById('tronlink-defaultAddress').innerHTML = await window.tronWeb.defaultAddress.base58;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;gettronwebdefaultaddress()&quot;</span><span style="color: #007700">&gt;</span>Can you get tronweb from tronlink?<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Default Address: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;tronlink-defaultAddress&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> gettronwebdefaultaddress(){
  <span style="color: #008800; font-weight: bold">if</span>(<span style="color: #007020">window</span>.tronWeb <span style="color: #333333">&amp;&amp;</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58){
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;tronlink-defaultAddress&#39;</span>).innerHTML <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send TRX and Sign</h2>
<button onclick="sendtrx()">Send TRX</button>

<script>
async function sendtrx(){
  if(window.tronWeb && window.tronWeb.defaultAddress.base58){
    let from = window.tronWeb.defaultAddress.base58;
    let to = 'TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY';
    let amount = 1;
    let tx = await window.tronWeb.transactionBuilder.sendTrx(to, amount*10**6, from);
    let signedTx = await window.tronWeb.trx.sign(tx);
    let broastTx = await window.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;sendtrx()&quot;</span><span style="color: #007700">&gt;</span>Send TRX<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> sendtrx(){
  <span style="color: #008800; font-weight: bold">if</span>(<span style="color: #007020">window</span>.tronWeb <span style="color: #333333">&amp;&amp;</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58){
    <span style="color: #008800; font-weight: bold">let</span> from <span style="color: #333333">=</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58;
    <span style="color: #008800; font-weight: bold">let</span> to <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY&#39;</span>;
    <span style="color: #008800; font-weight: bold">let</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
    <span style="color: #008800; font-weight: bold">let</span> tx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.transactionBuilder.sendTrx(to, amount<span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">10</span><span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">6</span>, from);
    <span style="color: #008800; font-weight: bold">let</span> signedTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sign(tx);
    <span style="color: #008800; font-weight: bold">let</span> broastTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send TRX with Memo and Sign</h2>
<button onclick="sendtrxmemo()">Send TRX with Memo</button>

<script>
async function sendtrxmemo(){
  if(window.tronWeb && window.tronWeb.defaultAddress.base58){
    let from = window.tronWeb.defaultAddress.base58;
    let to = 'TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY';
    let amount = 1;
    let tx = await window.tronWeb.transactionBuilder.sendTrx(to, amount*10**6, from);
    let txm = await window.tronWeb.transactionBuilder.addUpdateData(tx,"hello there");
    let signedTx = await window.tronWeb.trx.sign(txm);
    let broastTx = await window.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;sendtrxmemo()&quot;</span><span style="color: #007700">&gt;</span>Send TRX with Memo<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> sendtrxmemo(){
  <span style="color: #008800; font-weight: bold">if</span>(<span style="color: #007020">window</span>.tronWeb <span style="color: #333333">&amp;&amp;</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58){
    <span style="color: #008800; font-weight: bold">let</span> from <span style="color: #333333">=</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58;
    <span style="color: #008800; font-weight: bold">let</span> to <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY&#39;</span>;
    <span style="color: #008800; font-weight: bold">let</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
    <span style="color: #008800; font-weight: bold">let</span> tx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.transactionBuilder.sendTrx(to, amount<span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">10</span><span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">6</span>, from);
    <span style="color: #008800; font-weight: bold">let</span> txm <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.transactionBuilder.addUpdateData(tx,<span style="background-color: #fff0f0">&quot;hello there&quot;</span>);
    <span style="color: #008800; font-weight: bold">let</span> signedTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sign(txm);
    <span style="color: #008800; font-weight: bold">let</span> broastTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="stellar">Stellar</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developers.stellar.org/docs/">Stellar Documentations</a></li>
  <li><a href="https://docs.rabet.io/">Rabet Documentations</a></li>
  <li><a href="https://docs.freighter.app/">Freighter Documentations</a></li>
</ul>

<h2>Get Public Key Rabbet</h2>
<button onclick="get_public_key_rabet()">Get Public Key</button>
<p>Public Key: <span id="rabet-public-key"></span></p>

<script>
async function get_public_key_rabet() {
  await window.rabet.connect()
    .then(result => document.getElementById('rabet-public-key').innerHTML = result.publicKey)
    .catch(error => document.getElementById('rabet-public-key').innerHTML = error.message);
}

window.addEventListener('load', function() {
  window.rabet.on('accountChanged', () => {
    get_public_key_rabet();
  });
})
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;get_public_key_rabet()&quot;</span><span style="color: #007700">&gt;</span>Get Public Key<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Public Key: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;rabet-public-key&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> get_public_key_rabet() {
  await <span style="color: #007020">window</span>.rabet.connect()
    .then(result <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;rabet-public-key&#39;</span>).innerHTML <span style="color: #333333">=</span> result.publicKey)
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;rabet-public-key&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message);
}

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;load&#39;</span>, <span style="color: #008800; font-weight: bold">function</span>() {
  <span style="color: #007020">window</span>.rabet.on(<span style="background-color: #fff0f0">&#39;accountChanged&#39;</span>, () <span style="color: #333333">=&gt;</span> {
    get_public_key_rabet();
  });
})
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>


<br />

<p>For all Freighter use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Get Public Key Freighter</h2>
<button onclick="get_public_key_and_network_freighter()">Get Public Key and Network</button>
<p>Public Key: <span id="freighter-public-key"></span></p>
<p>Network: <span id="freighter-network"></span></p>

<script>
async function get_public_key_and_network_freighter() {
  document.getElementById('freighter-public-key').innerHTML = await window.freighterApi.getPublicKey();
  document.getElementById('freighter-network').innerHTML = await window.freighterApi.getNetwork();
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;get_public_key_and_network_freighter()&quot;</span><span style="color: #007700">&gt;</span>Get Public Key and Network<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Public Key: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;freighter-public-key&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;freighter-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> get_public_key_and_network_freighter() {
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;freighter-public-key&#39;</span>).innerHTML <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getPublicKey();
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;freighter-network&#39;</span>).innerHTML <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getNetwork();
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<p>For all Stellar SDK use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Get Sequence Number</h2>
<button onclick="get_public_key_sequence_number()">Get Sequence Number</button>
<p>Sequence Number: <span id="freighter-public-key-squence-number"></span></p>

<script>
async function get_public_key_sequence_number() {
  let stellar_horizon_server = new StellarSdk.Server("https://horizon.stellar.org");
  stellar_horizon_server
  .accounts()
  .forSigner(await window.freighterApi.getPublicKey())
  .call()
  .then(function (resp) {
    document.getElementById('freighter-public-key-squence-number').innerHTML = resp.records[0].sequence;
  })
  .catch(function (err) {
    document.getElementById('freighter-public-key-squence-number').innerHTML = err.message;
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;get_public_key_sequence_number()&quot;</span><span style="color: #007700">&gt;</span>Get Sequence Number<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Sequence Number: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;freighter-public-key-squence-number&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> get_public_key_sequence_number() {
  <span style="color: #008800; font-weight: bold">let</span> stellar_horizon_server <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> StellarSdk.Server(<span style="background-color: #fff0f0">&quot;https://horizon.stellar.org&quot;</span>);
  stellar_horizon_server
  .accounts()
  .forSigner(await <span style="color: #007020">window</span>.freighterApi.getPublicKey())
  .call()
  .then(<span style="color: #008800; font-weight: bold">function</span> (resp) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;freighter-public-key-squence-number&#39;</span>).innerHTML <span style="color: #333333">=</span> resp.records[<span style="color: #0000DD; font-weight: bold">0</span>].sequence;
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (err) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;freighter-public-key-squence-number&#39;</span>).innerHTML <span style="color: #333333">=</span> err.message;
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send XLM Freighter</h2>

<button onclick="send_xlm_freighter()">Send XLM</button>

<script>
async function send_xlm_freighter() {
  let stellar_current_network = await window.freighterApi.getNetwork();
  let stellar_public_key = await window.freighterApi.getPublicKey();
  let stellar_horizon_server = new StellarSdk.Server("https://horizon.stellar.org");
  stellar_horizon_server
  .accounts()
  .forSigner(stellar_public_key)
  .call()
  .then(async function (resp) {
    let stellar_public_key_sequence_number = await resp.records[0].sequence;
    let stellar_account = new window.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    let stellar_transaction = new window.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee: window.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase: window.StellarSdk.Networks.PUBLIC
    })
    .addOperation(window.StellarSdk.StellarBase.Operation.payment({
            destination: "GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM",
            asset: window.StellarSdk.StellarBase.Asset.native(),
            amount: "0.1"
    }))
    .setTimeout(30)
    .build();
  
    let stellar_signedTransaction = await window.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    let stellar_transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      window.StellarSdk.Networks.PUBLIC
    );
    const response = await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;send_xlm_freighter()&quot;</span><span style="color: #007700">&gt;</span>Send XLM<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> send_xlm_freighter() {
  <span style="color: #008800; font-weight: bold">let</span> stellar_current_network <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getNetwork();
  <span style="color: #008800; font-weight: bold">let</span> stellar_public_key <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getPublicKey();
  <span style="color: #008800; font-weight: bold">let</span> stellar_horizon_server <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> StellarSdk.Server(<span style="background-color: #fff0f0">&quot;https://horizon.stellar.org&quot;</span>);
  stellar_horizon_server
  .accounts()
  .forSigner(stellar_public_key)
  .call()
  .then(async <span style="color: #008800; font-weight: bold">function</span> (resp) {
    <span style="color: #008800; font-weight: bold">let</span> stellar_public_key_sequence_number <span style="color: #333333">=</span> await resp.records[<span style="color: #0000DD; font-weight: bold">0</span>].sequence;
    <span style="color: #008800; font-weight: bold">let</span> stellar_account <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transaction <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    })
    .addOperation(<span style="color: #007020">window</span>.StellarSdk.StellarBase.Operation.payment({
            destination<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM&quot;</span>,
            asset<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Asset.<span style="color: #008800; font-weight: bold">native</span>(),
            amount<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;0.1&quot;</span>
    }))
    .setTimeout(<span style="color: #0000DD; font-weight: bold">30</span>)
    .build();
  
    <span style="color: #008800; font-weight: bold">let</span> stellar_signedTransaction <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transactionToSubmit <span style="color: #333333">=</span> StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    );
    <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (err) {
    console.log(err);
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send XLM with Memo Freighter</h2>

<button onclick="send_xlm_with_memo_freighter()">Send XLM</button>

<script>
async function send_xlm_freighter() {
  let stellar_current_network = await window.freighterApi.getNetwork();
  let stellar_public_key = await window.freighterApi.getPublicKey();
  let stellar_memo = StellarSdk.Memo.text('1234567890123456789012345678'); //max 28 Bytes
  let stellar_horizon_server = new StellarSdk.Server("https://horizon.stellar.org");
  stellar_horizon_server
  .accounts()
  .forSigner(await window.freighterApi.getPublicKey())
  .call()
  .then(async function (resp) {
    let stellar_public_key_sequence_number = await resp.records[0].sequence;
    let stellar_account = new window.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    let stellar_transaction = new window.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee: window.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase: window.StellarSdk.Networks.PUBLIC
    })
    .addOperation(window.StellarSdk.StellarBase.Operation.payment({
            destination: "GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM",
            asset: window.StellarSdk.StellarBase.Asset.native(),
            amount: "0.1"
    }))
    .addMemo(stellar_memo)
    .setTimeout(30)
    .build();
  
    let stellar_signedTransaction = await window.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    let stellar_transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      window.StellarSdk.Networks.PUBLIC
    );
    const response = await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2&gt;</span>Send XLM with Memo Freighter<span style="color: #007700">&lt;/h2&gt;</span>

<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;send_xlm_with_memo_freighter()&quot;</span><span style="color: #007700">&gt;</span>Send XLM<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> send_xlm_freighter() {
  <span style="color: #008800; font-weight: bold">let</span> stellar_current_network <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getNetwork();
  <span style="color: #008800; font-weight: bold">let</span> stellar_public_key <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getPublicKey();
  <span style="color: #008800; font-weight: bold">let</span> stellar_memo <span style="color: #333333">=</span> StellarSdk.Memo.text(<span style="background-color: #fff0f0">&#39;1234567890123456789012345678&#39;</span>); <span style="color: #888888">//max 28 Bytes</span>
  <span style="color: #008800; font-weight: bold">let</span> stellar_horizon_server <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> StellarSdk.Server(<span style="background-color: #fff0f0">&quot;https://horizon.stellar.org&quot;</span>);
  stellar_horizon_server
  .accounts()
  .forSigner(await <span style="color: #007020">window</span>.freighterApi.getPublicKey())
  .call()
  .then(async <span style="color: #008800; font-weight: bold">function</span> (resp) {
    <span style="color: #008800; font-weight: bold">let</span> stellar_public_key_sequence_number <span style="color: #333333">=</span> await resp.records[<span style="color: #0000DD; font-weight: bold">0</span>].sequence;
    <span style="color: #008800; font-weight: bold">let</span> stellar_account <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transaction <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    })
    .addOperation(<span style="color: #007020">window</span>.StellarSdk.StellarBase.Operation.payment({
            destination<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM&quot;</span>,
            asset<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Asset.<span style="color: #008800; font-weight: bold">native</span>(),
            amount<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;0.1&quot;</span>
    }))
    .addMemo(stellar_memo)
    .setTimeout(<span style="color: #0000DD; font-weight: bold">30</span>)
    .build();
  
    <span style="color: #008800; font-weight: bold">let</span> stellar_signedTransaction <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transactionToSubmit <span style="color: #333333">=</span> StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    );
    <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (err) {
    console.log(err);
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send XLM with Memo Rabet</h2>
<button onclick="send_xlm_memo_rabet()">Send XLM</button>

<script>
async function send_xlm_memo_rabet() {
  await window.rabet.connect()
  .then(result => stellar_public_key = result.publicKey)
  .catch(error => console.log(error));
  let stellar_memo = StellarSdk.Memo.text('1234567890123456789012345678'); //max 28 Bytes
  let stellar_horizon_server = new StellarSdk.Server("https://horizon.stellar.org");
  stellar_horizon_server
  .accounts()
  .forSigner(stellar_public_key)
  .call()
  .then(async function (resp) {
    let stellar_public_key_sequence_number = await resp.records[0].sequence;
    let stellar_account = new window.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    let stellar_transaction = new window.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee: window.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase: window.StellarSdk.Networks.PUBLIC
    })
    .addOperation(window.StellarSdk.StellarBase.Operation.payment({
      destination: "GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM",
      asset: window.StellarSdk.StellarBase.Asset.native(),
      amount: "0.1"
    }))
    .addMemo(stellar_memo)
    .setTimeout(30)
    .build();

    await window.rabet.sign(stellar_transaction.toXDR(), window.StellarSdk.Networks.PUBLIC)
    .then(result => stellar_signedTransaction = result.xdr)
    .catch(error => console.log(error));

    let envelope = window.StellarSdk.xdr.TransactionEnvelope.fromXDR(stellar_signedTransaction, 'base64');
    let stellar_transactionToSubmit = new window.StellarSdk.Transaction(envelope, window.StellarSdk.Networks.PUBLIC);
    const response = await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;send_xlm_memo_rabet()&quot;</span><span style="color: #007700">&gt;</span>Send XLM<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> send_xlm_memo_rabet() {
  await <span style="color: #007020">window</span>.rabet.connect()
  .then(result <span style="color: #333333">=&gt;</span> stellar_public_key <span style="color: #333333">=</span> result.publicKey)
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> console.log(error));
  <span style="color: #008800; font-weight: bold">let</span> stellar_memo <span style="color: #333333">=</span> StellarSdk.Memo.text(<span style="background-color: #fff0f0">&#39;1234567890123456789012345678&#39;</span>); <span style="color: #888888">//max 28 Bytes</span>
  <span style="color: #008800; font-weight: bold">let</span> stellar_horizon_server <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> StellarSdk.Server(<span style="background-color: #fff0f0">&quot;https://horizon.stellar.org&quot;</span>);
  stellar_horizon_server
  .accounts()
  .forSigner(stellar_public_key)
  .call()
  .then(async <span style="color: #008800; font-weight: bold">function</span> (resp) {
    <span style="color: #008800; font-weight: bold">let</span> stellar_public_key_sequence_number <span style="color: #333333">=</span> await resp.records[<span style="color: #0000DD; font-weight: bold">0</span>].sequence;
    <span style="color: #008800; font-weight: bold">let</span> stellar_account <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Account(stellar_public_key, stellar_public_key_sequence_number);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transaction <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.TransactionBuilder(stellar_account, {
      fee<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.BASE_FEE,
      networkPassphrase<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    })
    .addOperation(<span style="color: #007020">window</span>.StellarSdk.StellarBase.Operation.payment({
      destination<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM&quot;</span>,
      asset<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Asset.<span style="color: #008800; font-weight: bold">native</span>(),
      amount<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;0.1&quot;</span>
    }))
    .addMemo(stellar_memo)
    .setTimeout(<span style="color: #0000DD; font-weight: bold">30</span>)
    .build();

    await <span style="color: #007020">window</span>.rabet.sign(stellar_transaction.toXDR(), <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC)
    .then(result <span style="color: #333333">=&gt;</span> stellar_signedTransaction <span style="color: #333333">=</span> result.xdr)
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> console.log(error));

    <span style="color: #008800; font-weight: bold">let</span> envelope <span style="color: #333333">=</span> <span style="color: #007020">window</span>.StellarSdk.xdr.TransactionEnvelope.fromXDR(stellar_signedTransaction, <span style="background-color: #fff0f0">&#39;base64&#39;</span>);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transactionToSubmit <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.Transaction(envelope, <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC);
    <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    console.log(response);
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (err) {
    console.log(err);
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="zilliqa">Zilliqa</h1>

<h2>References</h2>
<ul>
  <li><a href="https://dev.zilliqa.com/">Zilliqa Developer Portal</a></li>
  <li><a href="https://zilpay.github.io/zilpay-docs/">Zilpay Developer Documentations</a></li>
</ul>

<h2>Zilpay Default Accounts</h2>
<button onclick="web3_zilliqa_zilpay_accounts()">Zilpay</button>
<p>base16: <span id="zilliqa-zilpay-base16-accounts"></span></p>
<p>ech32: <span id="zilliqa-zilpay-bech32-accounts"></span></p>

<script>
async function web3_zilliqa_zilpay_accounts() {
  try {
    await window.zilPay.wallet.connect();
    let zilliqa_zilpay_account = await window.zilPay.wallet.defaultAccount;
    document.getElementById('zilliqa-zilpay-base16-accounts').innerHTML = zilliqa_zilpay_account.base16;
    document.getElementById('zilliqa-zilpay-bech32-accounts').innerHTML = zilliqa_zilpay_account.bech32;
  } catch(error) {
    document.getElementById('zilliqa-zilpay-base16-accounts').innerHTML = error.message;
    document.getElementById('zilliqa-zilpay-bech32-accounts').innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;web3_zilliqa_zilpay()&quot;</span><span style="color: #007700">&gt;</span>Zilpay<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>base16: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;zilliqa-zilpay-base16-accounts&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>ech32: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;zilliqa-zilpay-bech32-accounts&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> web3_zilliqa_zilpay_accounts() {
  <span style="color: #008800; font-weight: bold">try</span> {
    await <span style="color: #007020">window</span>.zilPay.wallet.connect();
    <span style="color: #008800; font-weight: bold">let</span> zilliqa_zilpay_account <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.zilPay.wallet.defaultAccount;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-base16-accounts&#39;</span>).innerHTML <span style="color: #333333">=</span> zilliqa_zilpay_account.base16;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-bech32-accounts&#39;</span>).innerHTML <span style="color: #333333">=</span> zilliqa_zilpay_account.bech32;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-base16-accounts&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-bech32-accounts&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Zilpay Network and On Change</h2>
<button onclick="web3_zilliqa_zilpay_network()">Zilpay</button>
<p>base16: <span id="zilliqa-zilpay-base16-network"></span></p>
<p>ech32: <span id="zilliqa-zilpay-bech32-network"></span></p>
<p>network: <span id="zilliqa-zilpay-network"></span></p>

<script>
async function web3_zilliqa_zilpay_network() {
  try {
    await window.zilPay.wallet.connect();
    let zilliqa_zilpay_account = await window.zilPay.wallet.defaultAccount;
    let zilliqa_zilpay_current_network = await window.zilPay.wallet.net;
    document.getElementById('zilliqa-zilpay-base16-network').innerHTML = zilliqa_zilpay_account.base16;
    document.getElementById('zilliqa-zilpay-bech32-network').innerHTML = zilliqa_zilpay_account.bech32;
    document.getElementById('zilliqa-zilpay-network').innerHTML = zilliqa_zilpay_current_network;
  } catch(error) {
    document.getElementById('zilliqa-zilpay-base16-network').innerHTML = error.message;
    document.getElementById('zilliqa-zilpay-bech32-network').innerHTML = error.message;
    document.getElementById('zilliqa-zilpay-network').innerHTML = error.message;
  }
}

// When only everything is loaded including Zilpay wallet
window.addEventListener('load', function() {
  window.zilPay.wallet.observableAccount().subscribe(function (account) {
    // ... When user changed account
    web3_zilliqa_zilpay_network();
  });
  window.zilPay.wallet.observableNetwork().subscribe(function (net) {
    // ... When user changed network
    web3_zilliqa_zilpay_network();
  });
})
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;web3_zilliqa_zilpay_network()&quot;</span><span style="color: #007700">&gt;</span>Zilpay<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>base16: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;zilliqa-zilpay-base16-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>ech32: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;zilliqa-zilpay-bech32-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>network: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;zilliqa-zilpay-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> web3_zilliqa_zilpay_network() {
  <span style="color: #008800; font-weight: bold">try</span> {
    await <span style="color: #007020">window</span>.zilPay.wallet.connect();
    <span style="color: #008800; font-weight: bold">let</span> zilliqa_zilpay_account <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.zilPay.wallet.defaultAccount;
    <span style="color: #008800; font-weight: bold">let</span> zilliqa_zilpay_current_network <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.zilPay.wallet.net;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-base16-network&#39;</span>).innerHTML <span style="color: #333333">=</span> zilliqa_zilpay_account.base16;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-bech32-network&#39;</span>).innerHTML <span style="color: #333333">=</span> zilliqa_zilpay_account.bech32;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-network&#39;</span>).innerHTML <span style="color: #333333">=</span> zilliqa_zilpay_current_network;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-base16-network&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-bech32-network&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;zilliqa-zilpay-network&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}

<span style="color: #888888">// When only everything is loaded including Zilpay wallet</span>
<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;load&#39;</span>, <span style="color: #008800; font-weight: bold">function</span>() {
  <span style="color: #007020">window</span>.zilPay.wallet.observableAccount().subscribe(<span style="color: #008800; font-weight: bold">function</span> (account) {
    <span style="color: #888888">// ... When user changed account</span>
    web3_zilliqa_zilpay_network();
  });
  <span style="color: #007020">window</span>.zilPay.wallet.observableNetwork().subscribe(<span style="color: #008800; font-weight: bold">function</span> (net) {
    <span style="color: #888888">// ... When user changed network</span>
    web3_zilliqa_zilpay_network();
  });
})
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send ZIL Zilpay</h2>
<button onclick="web3_zilliqa_zilpay_send_zil()">Zilpay Send ZIL</button>

<script>
async function web3_zilliqa_zilpay_send_zil() {
  await window.zilPay.wallet.connect();
  const amount = zilPay.utils.units.toQa(1, zilPay.utils.units.Units.Zil); // 1 zil
  //const gasPrice = zilPay.utils.units.toQa('1000', zilPay.utils.units.Units.Li); //set otherwise automatic
  const txParams = window.zilPay.transactions.new({ // Create params for our trasnaction.
    toAddr: 'zil1kshm5ad33nkh8usfuau7ymq28phrredcnj2fxm',
    amount: amount,
    gasPrice: '' //auto or set yourself
  });
  try {
    const txResult = await window.zilPay.blockchain.createTransaction(txParams);
    console.log(txResult);
  } catch (error) {
    console.log(error);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;web3_zilliqa_zilpay_send_zil()&quot;</span><span style="color: #007700">&gt;</span>Zilpay Send ZIL<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> web3_zilliqa_zilpay_send_zil() {
  await <span style="color: #007020">window</span>.zilPay.wallet.connect();
  <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> zilPay.utils.units.toQa(<span style="color: #0000DD; font-weight: bold">1</span>, zilPay.utils.units.Units.Zil); <span style="color: #888888">// 1 zil</span>
  <span style="color: #888888">//const gasPrice = zilPay.utils.units.toQa(&#39;1000&#39;, zilPay.utils.units.Units.Li); //set otherwise automatic</span>
  <span style="color: #008800; font-weight: bold">const</span> txParams <span style="color: #333333">=</span> <span style="color: #007020">window</span>.zilPay.transactions.<span style="color: #008800; font-weight: bold">new</span>({ <span style="color: #888888">// Create params for our trasnaction.</span>
    toAddr<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;zil1kshm5ad33nkh8usfuau7ymq28phrredcnj2fxm&#39;</span>,
    amount<span style="color: #333333">:</span> amount,
    gasPrice<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;&#39;</span> <span style="color: #888888">//auto or set yourself</span>
  });
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> txResult <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.zilPay.blockchain.createTransaction(txParams);
    console.log(txResult);
  } <span style="color: #008800; font-weight: bold">catch</span> (error) {
    console.log(error);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="neo">Neo</h2>

<h2>References</h2>
<ul>
  <li><a href="https://neo.org/dev">Neo Developer</a></li>
  <li><a href="https://neoline.io/dapi/">Neoline dAPI Documentation</a></li>
</ul>

<h2>Neoline Account</h2>
<select id="neoline-neo-version">
    <option value="neolinen2">Neoline N2</option>
    <option value="neolinen3">Neoline N3</option>
</select>
<button onclick="neoline_web3()">Get Account</button>
<p>Neoline Account: <span id="neoline-account"></span></p>

<script>
let neoline;
let neolineN3;
let neoline_account;

window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
  neoline = new NEOLine.Init();
});

window.addEventListener('NEOLine.N3.EVENT.READY', () => {
  neolineN3 = new NEOLineN3.Init();
});

window.addEventListener('NEOLine.NEO.EVENT.ACCOUNT_CHANGED', () => {
  neoline = new NEOLine.Init();
});

window.addEventListener('NEOLine.N3.ACCOUNT_CHANGED', () => {
  neolineN3 = new NEOLineN3.Init();
});

function neoline_web3(){
  switch(document.getElementById('neoline-neo-version').value) {
    case 'neolinen2':
      neoline_N2();
      break;
    case 'neolinen3':
      neoline_N3();
      break;
    default:
      console.log('unknown error has occured');
  }
}

function neoline_N2() {
  neoline.getAccount()
  .then(account => {
    neoline_account = account;
    document.getElementById('neoline-account').innerHTML = neoline_account.address;
  })
  .catch(error => {
    document.getElementById('neoline-account').innerHTML = error.message;
  })
}

function neoline_N3() {
  neolineN3.getAccount()
  .then(account => {
    neoline_account = account;
    document.getElementById('neoline-account').innerHTML = neoline_account.address;
  })
  .catch(error => {
    document.getElementById('neoline-account').innerHTML = error.message;
  })
};
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">
<span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;neoline-neo-version&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;neolinen2&quot;</span><span style="color: #007700">&gt;</span>Neoline N2<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;neolinen3&quot;</span><span style="color: #007700">&gt;</span>Neoline N3<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;</span>
<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;neoline_web3()&quot;</span><span style="color: #007700">&gt;</span>Get Account<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Neoline Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;neoline-account&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #008800; font-weight: bold">let</span> neoline;
<span style="color: #008800; font-weight: bold">let</span> neolineN3;
<span style="color: #008800; font-weight: bold">let</span> neoline_account;

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.NEO.EVENT.READY&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neoline <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLine.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.N3.EVENT.READY&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neolineN3 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLineN3.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.NEO.EVENT.ACCOUNT_CHANGED&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neoline <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLine.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.N3.ACCOUNT_CHANGED&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neolineN3 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLineN3.Init();
});

<span style="color: #008800; font-weight: bold">function</span> neoline_web3(){
  <span style="color: #008800; font-weight: bold">switch</span>(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-neo-version&#39;</span>).value) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;neolinen2&#39;</span><span style="color: #333333">:</span>
      neoline_N2();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;neolinen3&#39;</span><span style="color: #333333">:</span>
      neoline_N3();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      console.log(<span style="background-color: #fff0f0">&#39;unknown error has occured&#39;</span>);
  }
}

<span style="color: #008800; font-weight: bold">function</span> neoline_N2() {
  neoline.getAccount()
  .then(account <span style="color: #333333">=&gt;</span> {
    neoline_account <span style="color: #333333">=</span> account;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-account&#39;</span>).innerHTML <span style="color: #333333">=</span> neoline_account.address;
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-account&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  })
}

<span style="color: #008800; font-weight: bold">function</span> neoline_N3() {
  neolineN3.getAccount()
  .then(account <span style="color: #333333">=&gt;</span> {
    neoline_account <span style="color: #333333">=</span> account;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-account&#39;</span>).innerHTML <span style="color: #333333">=</span> neoline_account.address;
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-account&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  })
};
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send Neo Asset Using Neoline</h2>
<select id="neoline-neo-version">
    <option value="neolinen2">Neoline N2</option>
    <option value="neolinen3">Neoline N3</option>
</select>
<button onclick="neoline_send_neo_asset()">Send Neo Asset</button>

<script>
let neoline;
let neolineN3;
let neoline_account;
let neolineN2_toAddress = 'Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar';
let neolineN3_toAddress = 'NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8';
let neolineN2_asset = 'GAS';
let neolineN3_asset = 'GAS';
let neolineN2_amount = '0.01';
let neolineN3_amount = '0.01';

window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
  neoline = new NEOLine.Init();
});

window.addEventListener('NEOLine.N3.EVENT.READY', () => {
  neolineN3 = new NEOLineN3.Init();
});

window.addEventListener('NEOLine.NEO.EVENT.ACCOUNT_CHANGED', () => {
  neoline = new NEOLine.Init();
});

window.addEventListener('NEOLine.N3.ACCOUNT_CHANGED', () => {
  neolineN3 = new NEOLineN3.Init();
});

function neoline_send_neo_asset(){
  switch(document.getElementById('neoline-neo-version').value) {
    case 'neolinen2':
      neoline_N2();
      break;
    case 'neolinen3':
      neoline_N3();
      break;
    default:
      console.log('unknown error has occured');
  }
}

function neoline_N2() {
  neoline.getAccount()
  .then(account => {
    neoline_account = account;
    neoline.getNetworks()
    .then(result => {
      const {
        networks,
        defaultNetwork
      } = result;

      neoline.send({
        fromAddress: neoline_account.address,
        toAddress: neolineN2_toAddress,
        asset: neolineN2_asset,
        amount: neolineN2_amount,
        remark: 'Remark',
        //fee: '0.0001', // default if ommitted
        network: defaultNetwork,
        broadcastOverride: false
      })
      .then(result => {
        console.log('Send transaction success!');
        console.log('Transaction ID: ' + result.txid);
        console.log('RPC node URL: ' + result.nodeURL);
      })
      .catch((error) => {
        const {type, description, data} = error;
        switch(type) {
          case 'NO_PROVIDER':
              console.log('No provider available.');
              break;
          case 'RPC_ERROR':
              console.log('There was an error when broadcasting this transaction to the network.');
              break;
          case 'MALFORMED_INPUT':
              console.log('The receiver address provided is not valid.');
              break;
          case 'CANCELED':
              console.log('The user has canceled this transaction.');
              break;
          case 'INSUFFICIENT_FUNDS':
              console.log('The user has insufficient funds to execute this transaction.');
              break;
          default:
              // Not an expected error object.  Just write the error to the console.
              console.error(error);
              break;
        }
      });
    })
    .catch((error) => {
      const {type, description, data} = error;
      switch(type) {
        case 'NO_PROVIDER':
            console.log('No provider available.');
            break;
        case 'CONNECTION_DENIED':
            console.log('The user rejected the request to connect with your dApp');
            break;
        default:
            // Not an expected error object.  Just write the error to the console.
            console.error(error);
            break;
      }
    });
  })
  .catch(error => {
    console.log(error);
  })
}

function neoline_N3() {
  neolineN3.getAccount()
  .then(account => {
    neoline_account = account;
    neolineN3.send({
      fromAddress: neoline_account.address,
      toAddress: neolineN3_toAddress,
      asset: neolineN3_asset,
      amount: neolineN3_amount,
      //fee: '0.0001', //default if ommitted
      broadcastOverride: false
    })
    .then(result => {
        console.log('Send transaction success!');
        console.log('Transaction ID: ' + result.txid);
        console.log('RPC node URL: ' + result.nodeURL);
    })
    .catch((error) => {
        const {type, description, data} = error;
        switch(type) {
            case 'NO_PROVIDER':
                console.log('No provider available.');
                break;
            case 'RPC_ERROR':
                console.log('There was an error when broadcasting this transaction to the network.');
                break;
            case 'MALFORMED_INPUT':
                console.log('The receiver address provided is not valid.');
                break;
            case 'CANCELED':
                console.log('The user has canceled this transaction.');
                break;
            case 'INSUFFICIENT_FUNDS':
                console.log('The user has insufficient funds to execute this transaction.');
                break;
            default:
                // Not an expected error object.  Just write the error to the console.
                console.error(error);
                break;
        }
    });
  })
  .catch(error => {
    console.log(error);
  })
};
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;neoline-neo-version&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;neolinen2&quot;</span><span style="color: #007700">&gt;</span>Neoline N2<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;neolinen3&quot;</span><span style="color: #007700">&gt;</span>Neoline N3<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;</span>
<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;neoline_send_neo_asset()&quot;</span><span style="color: #007700">&gt;</span>Send Neo Asset<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #008800; font-weight: bold">let</span> neoline;
<span style="color: #008800; font-weight: bold">let</span> neolineN3;
<span style="color: #008800; font-weight: bold">let</span> neoline_account;
<span style="color: #008800; font-weight: bold">let</span> neolineN2_toAddress <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar&#39;</span>;
<span style="color: #008800; font-weight: bold">let</span> neolineN3_toAddress <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8&#39;</span>;
<span style="color: #008800; font-weight: bold">let</span> neolineN2_asset <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;GAS&#39;</span>;
<span style="color: #008800; font-weight: bold">let</span> neolineN3_asset <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;GAS&#39;</span>;
<span style="color: #008800; font-weight: bold">let</span> neolineN2_amount <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0.01&#39;</span>;
<span style="color: #008800; font-weight: bold">let</span> neolineN3_amount <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0.01&#39;</span>;

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.NEO.EVENT.READY&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neoline <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLine.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.N3.EVENT.READY&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neolineN3 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLineN3.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.NEO.EVENT.ACCOUNT_CHANGED&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neoline <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLine.Init();
});

<span style="color: #007020">window</span>.addEventListener(<span style="background-color: #fff0f0">&#39;NEOLine.N3.ACCOUNT_CHANGED&#39;</span>, () <span style="color: #333333">=&gt;</span> {
  neolineN3 <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> NEOLineN3.Init();
});

<span style="color: #008800; font-weight: bold">function</span> neoline_send_neo_asset(){
  <span style="color: #008800; font-weight: bold">switch</span>(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;neoline-neo-version&#39;</span>).value) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;neolinen2&#39;</span><span style="color: #333333">:</span>
      neoline_N2();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;neolinen3&#39;</span><span style="color: #333333">:</span>
      neoline_N3();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      console.log(<span style="background-color: #fff0f0">&#39;unknown error has occured&#39;</span>);
  }
}

<span style="color: #008800; font-weight: bold">function</span> neoline_N2() {
  neoline.getAccount()
  .then(account <span style="color: #333333">=&gt;</span> {
    neoline_account <span style="color: #333333">=</span> account;
    neoline.getNetworks()
    .then(result <span style="color: #333333">=&gt;</span> {
      <span style="color: #008800; font-weight: bold">const</span> {
        networks,
        defaultNetwork
      } <span style="color: #333333">=</span> result;

      neoline.send({
        fromAddress<span style="color: #333333">:</span> neoline_account.address,
        toAddress<span style="color: #333333">:</span> neolineN2_toAddress,
        asset<span style="color: #333333">:</span> neolineN2_asset,
        amount<span style="color: #333333">:</span> neolineN2_amount,
        remark<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;Remark&#39;</span>,
        <span style="color: #888888">//fee: &#39;0.0001&#39;, // default if ommitted</span>
        network<span style="color: #333333">:</span> defaultNetwork,
        broadcastOverride<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">false</span>
      })
      .then(result <span style="color: #333333">=&gt;</span> {
        console.log(<span style="background-color: #fff0f0">&#39;Send transaction success!&#39;</span>);
        console.log(<span style="background-color: #fff0f0">&#39;Transaction ID: &#39;</span> <span style="color: #333333">+</span> result.txid);
        console.log(<span style="background-color: #fff0f0">&#39;RPC node URL: &#39;</span> <span style="color: #333333">+</span> result.nodeURL);
      })
      .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
        <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
        <span style="color: #008800; font-weight: bold">switch</span>(type) {
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
              console.log(<span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>);
              <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;RPC_ERROR&#39;</span><span style="color: #333333">:</span>
              console.log(<span style="background-color: #fff0f0">&#39;There was an error when broadcasting this transaction to the network.&#39;</span>);
              <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;MALFORMED_INPUT&#39;</span><span style="color: #333333">:</span>
              console.log(<span style="background-color: #fff0f0">&#39;The receiver address provided is not valid.&#39;</span>);
              <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CANCELED&#39;</span><span style="color: #333333">:</span>
              console.log(<span style="background-color: #fff0f0">&#39;The user has canceled this transaction.&#39;</span>);
              <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;INSUFFICIENT_FUNDS&#39;</span><span style="color: #333333">:</span>
              console.log(<span style="background-color: #fff0f0">&#39;The user has insufficient funds to execute this transaction.&#39;</span>);
              <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
              <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
              console.error(error);
              <span style="color: #008800; font-weight: bold">break</span>;
        }
      });
    })
    .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
      <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
      <span style="color: #008800; font-weight: bold">switch</span>(type) {
        <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
            console.log(<span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>);
            <span style="color: #008800; font-weight: bold">break</span>;
        <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CONNECTION_DENIED&#39;</span><span style="color: #333333">:</span>
            console.log(<span style="background-color: #fff0f0">&#39;The user rejected the request to connect with your dApp&#39;</span>);
            <span style="color: #008800; font-weight: bold">break</span>;
        <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
            <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
            console.error(error);
            <span style="color: #008800; font-weight: bold">break</span>;
      }
    });
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    console.log(error);
  })
}

<span style="color: #008800; font-weight: bold">function</span> neoline_N3() {
  neolineN3.getAccount()
  .then(account <span style="color: #333333">=&gt;</span> {
    neoline_account <span style="color: #333333">=</span> account;
    neolineN3.send({
      fromAddress<span style="color: #333333">:</span> neoline_account.address,
      toAddress<span style="color: #333333">:</span> neolineN3_toAddress,
      asset<span style="color: #333333">:</span> neolineN3_asset,
      amount<span style="color: #333333">:</span> neolineN3_amount,
      <span style="color: #888888">//fee: &#39;0.0001&#39;, //default if ommitted</span>
      broadcastOverride<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">false</span>
    })
    .then(result <span style="color: #333333">=&gt;</span> {
        console.log(<span style="background-color: #fff0f0">&#39;Send transaction success!&#39;</span>);
        console.log(<span style="background-color: #fff0f0">&#39;Transaction ID: &#39;</span> <span style="color: #333333">+</span> result.txid);
        console.log(<span style="background-color: #fff0f0">&#39;RPC node URL: &#39;</span> <span style="color: #333333">+</span> result.nodeURL);
    })
    .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
        <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
        <span style="color: #008800; font-weight: bold">switch</span>(type) {
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
                console.log(<span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>);
                <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;RPC_ERROR&#39;</span><span style="color: #333333">:</span>
                console.log(<span style="background-color: #fff0f0">&#39;There was an error when broadcasting this transaction to the network.&#39;</span>);
                <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;MALFORMED_INPUT&#39;</span><span style="color: #333333">:</span>
                console.log(<span style="background-color: #fff0f0">&#39;The receiver address provided is not valid.&#39;</span>);
                <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CANCELED&#39;</span><span style="color: #333333">:</span>
                console.log(<span style="background-color: #fff0f0">&#39;The user has canceled this transaction.&#39;</span>);
                <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;INSUFFICIENT_FUNDS&#39;</span><span style="color: #333333">:</span>
                console.log(<span style="background-color: #fff0f0">&#39;The user has insufficient funds to execute this transaction.&#39;</span>);
                <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
                <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
                console.error(error);
                <span style="color: #008800; font-weight: bold">break</span>;
        }
    });
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    console.log(error);
  })
};
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="cosmosatom">Cosmos Atom</h1>

<h2>References</h2>
<ul>
  <li><a href="https://tutorials.cosmos.network/">Cosmos Developer Portal</a></li>
  <li><a href="https://github.com/cosmostation/cosmosjs/tree/classic">Cosmos JavaScript Library Classic</a></li>
  <li><a href="https://docs.keplr.app/">Keplr Wallet Documentations</a></li>
  <li><a href="https://github.com/cosmostation/cosmosjs/tree/classic">Legacy Cosmos SDK JS</a></li>
</ul>

<h2>Keplr Get Public Key</h2>
<button onclick="cosmos_atom_keplr_get_public_key()">Get Public Key</button>
<p>Keplr Bech32 Address: <span id="keplr-bech32address"></span></p>

<script>
async function cosmos_atom_keplr_get_public_key() {
  try {
    chainId = "cosmoshub-4";
    await window.keplr.enable(chainId);
    let public_key = await window.keplr.getKey(chainId);
    document.getElementById("keplr-bech32address").innerHTML = public_key.bech32Address;
  } catch(error) {
    document.getElementById("keplr-bech32address").innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;cosmos_atom_keplr_get_public_key()&quot;</span><span style="color: #007700">&gt;</span>Get Public Key<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Keplr Bech32 Address: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;keplr-bech32address&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> cosmos_atom_keplr_get_public_key() {
  <span style="color: #008800; font-weight: bold">try</span> {
    chainId <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;cosmoshub-4&quot;</span>;
    await <span style="color: #007020">window</span>.keplr.enable(chainId);
    <span style="color: #008800; font-weight: bold">let</span> public_key <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.keplr.getKey(chainId);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;keplr-bech32address&quot;</span>).innerHTML <span style="color: #333333">=</span> public_key.bech32Address;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;keplr-bech32address&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="eos">EOS</h1>

<h2>Scatter</h2>

<h2>References</h2>
<ul>
  <li><a href="https://developers.eos.io/">EOSIO Developer Portal</a></li>
  <li><a href="https://github.com/EOSIO/eosjs">EOS JS</a></li>
  <li><a href="https://github.com/GetScatter/scatter-js">Scatter JS</a></li>
</ul>

<p>Get the Javascript libraries at <a href="https://cdnjs.com/libraries/scatterjs/@scatterjs">https://cdnjs.com/libraries/scatterjs/@scatterjs</a> and for EOS use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs2.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-core.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs2.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Scatter Get Account</h2>
<button onclick="eos_scatter_get_acccount()">Get Account</button>
<p>Blockchain: <span id="eos-scatter-blockchain"></span></p>
<p>Name: <span id="eos-scatter-name"></span></p>
<p>Public Key: <span id="eos-scatter-public-key"></span></p>
<p>Chain ID: <span id="eos-scatter-chainid"></span></p>

<script>
async function eos_scatter_get_acccount() {
  await ScatterJS.plugins( new ScatterEOS() );

  const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
  });

  ScatterJS.connect('MyAppName', {network}).then(connected => {
    console.log(connected);
    ScatterJS.login().then(result => {
      document.getElementById('eos-scatter-blockchain').innerHTML = result.accounts[0].blockchain;
      document.getElementById('eos-scatter-name').innerHTML = result.accounts[0].name;
      document.getElementById('eos-scatter-public-key').innerHTML = result.accounts[0].publicKey;
      document.getElementById('eos-scatter-chainid').innerHTML = result.accounts[0].chainId;
    }).catch(error => {
      document.getElementById('eos-scatter-chainid').innerHTML += '<br />' + error.message;
    });
  }).catch(error => {
    document.getElementById('eos-scatter-chainid').innerHTML += '<br />' + error.message;
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:100%;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;eos_scatter_get_acccount()&quot;</span><span style="color: #007700">&gt;</span>Get Account<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Blockchain: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;eos-scatter-blockchain&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Name: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;eos-scatter-name&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Public Key: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;eos-scatter-public-key&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Chain ID: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;eos-scatter-chainid&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> eos_scatter_get_acccount() {
  await ScatterJS.plugins( <span style="color: #008800; font-weight: bold">new</span> ScatterEOS() );

  <span style="color: #008800; font-weight: bold">const</span> network <span style="color: #333333">=</span> ScatterJS.Network.fromJson({
    blockchain<span style="color: #333333">:</span><span style="background-color: #fff0f0">&#39;eos&#39;</span>,
    chainId<span style="color: #333333">:</span><span style="background-color: #fff0f0">&#39;aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906&#39;</span>,
    host<span style="color: #333333">:</span><span style="background-color: #fff0f0">&#39;nodes.get-scatter.com&#39;</span>,
    port<span style="color: #333333">:</span><span style="color: #0000DD; font-weight: bold">443</span>,
    protocol<span style="color: #333333">:</span><span style="background-color: #fff0f0">&#39;https&#39;</span>
  });

  ScatterJS.connect(<span style="background-color: #fff0f0">&#39;MyAppName&#39;</span>, {network}).then(connected <span style="color: #333333">=&gt;</span> {
    console.log(connected);
    ScatterJS.login().then(result <span style="color: #333333">=&gt;</span> {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-blockchain&#39;</span>).innerHTML <span style="color: #333333">=</span> result.accounts[<span style="color: #0000DD; font-weight: bold">0</span>].blockchain;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-name&#39;</span>).innerHTML <span style="color: #333333">=</span> result.accounts[<span style="color: #0000DD; font-weight: bold">0</span>].name;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-public-key&#39;</span>).innerHTML <span style="color: #333333">=</span> result.accounts[<span style="color: #0000DD; font-weight: bold">0</span>].publicKey;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-chainid&#39;</span>).innerHTML <span style="color: #333333">=</span> result.accounts[<span style="color: #0000DD; font-weight: bold">0</span>].chainId;
    }).<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-chainid&#39;</span>).innerHTML <span style="color: #333333">+=</span> <span style="background-color: #fff0f0">&#39;&lt;br /&gt;&#39;</span> <span style="color: #333333">+</span> error.message;
    });
  }).<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;eos-scatter-chainid&#39;</span>).innerHTML <span style="color: #333333">+=</span> <span style="background-color: #fff0f0">&#39;&lt;br /&gt;&#39;</span> <span style="color: #333333">+</span> error.message;
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="near">Near</h1>

<h2>References</h2>
<ul>
  <li><a href="https://www.near.university/">Near University</a></li>
  <li><a href="https://docs.near.org/">Near Documentation</a></li>
  <li><a href="https://docs.near.org/docs/faq/naj-faq">Near API JS</a></li>
</ul>

<h2>Near Wallet</h2>
<p>Requires:</p>

<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<h2>Connect & Sign In & Sign Out & Get Account</h2>
<button onclick="near_wallet_sign_in_get_account()">Sign In</button><button onclick="near_wallet_sign_out()">Sign Out</button>
<p>Network ID: <span id="near-networkid"></span></p>
<p>Network URL: <span id="near-network-url"></span></p>
<p>Account ID: <span id="near-accountid"></span></p>

<script>
async function near_wallet_sign_in_get_account() {
  try {
    const config = {
      networkId: "mainnet",
      keyStore: await new nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://explorer.mainnet.near.org",
    };
    const near = await nearApi.connect(config);
    const wallet = await new nearApi.WalletConnection(near);
    if(wallet.isSignedIn()) {
      const walletAccountObj = await wallet.account();
      document.getElementById("near-networkid").innerHTML = walletAccountObj.connection.networkId;
      document.getElementById("near-network-url").innerHTML = walletAccountObj.connection.provider.connection.url;
      document.getElementById("near-accountid").innerHTML = walletAccountObj.accountId;
    } else {
      wallet.requestSignIn({ contractId: 'fajarpurnama.near' });
    }
  } catch(error) {
    document.getElementById("near-accountid").innerHTML += error.message;
  }
}

async function near_wallet_sign_out() {
  try {
    const config = {
      networkId: "mainnet",
      keyStore: await new nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://explorer.mainnet.near.org",
    };
    const near = await nearApi.connect(config);
    const wallet = await new nearApi.WalletConnection(near);
    wallet.signOut();
  } catch(error) {
    document.getElementById("near-accountid").innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;near_wallet_sign_in_get_account()&quot;</span><span style="color: #007700">&gt;</span>Sign In<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;near_wallet_sign_out()&quot;</span><span style="color: #007700">&gt;</span>Sign Out<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network ID: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;near-networkid&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network URL: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;near-network-url&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Account ID: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;near-accountid&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> near_wallet_sign_in_get_account() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> config <span style="color: #333333">=</span> {
      networkId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;mainnet&quot;</span>,
      keyStore<span style="color: #333333">:</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://rpc.mainnet.near.org&quot;</span>,
      walletUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://wallet.mainnet.near.org&quot;</span>,
      helperUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://helper.mainnet.near.org&quot;</span>,
      explorerUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://explorer.mainnet.near.org&quot;</span>,
    };
    <span style="color: #008800; font-weight: bold">const</span> near <span style="color: #333333">=</span> await nearApi.connect(config);
    <span style="color: #008800; font-weight: bold">const</span> wallet <span style="color: #333333">=</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.WalletConnection(near);
    <span style="color: #008800; font-weight: bold">if</span>(wallet.isSignedIn()) {
      <span style="color: #008800; font-weight: bold">const</span> walletAccountObj <span style="color: #333333">=</span> await wallet.account();
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;near-networkid&quot;</span>).innerHTML <span style="color: #333333">=</span> walletAccountObj.connection.networkId;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;near-network-url&quot;</span>).innerHTML <span style="color: #333333">=</span> walletAccountObj.connection.provider.connection.url;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;near-accountid&quot;</span>).innerHTML <span style="color: #333333">=</span> walletAccountObj.accountId;
    } <span style="color: #008800; font-weight: bold">else</span> {
      wallet.requestSignIn({ contractId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0fajarpurnama0.near&#39;</span> });
    }
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.body.innerHTML <span style="color: #333333">+=</span> error.message;
  }
}

async <span style="color: #008800; font-weight: bold">function</span> near_wallet_sign_out() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> config <span style="color: #333333">=</span> {
      networkId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;mainnet&quot;</span>,
      keyStore<span style="color: #333333">:</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://rpc.mainnet.near.org&quot;</span>,
      walletUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://wallet.mainnet.near.org&quot;</span>,
      helperUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://helper.mainnet.near.org&quot;</span>,
      explorerUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://explorer.mainnet.near.org&quot;</span>,
    };
    <span style="color: #008800; font-weight: bold">const</span> near <span style="color: #333333">=</span> await nearApi.connect(config);
    <span style="color: #008800; font-weight: bold">const</span> wallet <span style="color: #333333">=</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.WalletConnection(near);
    wallet.signOut();
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.body.innerHTML <span style="color: #333333">+=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Send Money</h2>
<button onclick="near_wallet_send_money()">Sign In</button><button onclick="near_wallet_sign_out()">Sign Out</button>

<script>
async function near_wallet_send_money() {
  try {
    const config = {
      networkId: "mainnet",
      keyStore: await new nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://explorer.mainnet.near.org",
    };
    const near = await nearApi.connect(config);
    const wallet = await new nearApi.WalletConnection(near);
    if(wallet.isSignedIn()) {
      const walletAccountObj = await wallet.account();
      await walletAccountObj.sendMoney(
        "0fajarpurnama0.near", // receiver account
        "1000000000000000000000000" // amount in yoctoNEAR (1 NEAR)
      );
    } else {
      wallet.requestSignIn({ contractId: '0fajarpurnama0.near' });
    }
  } catch(error) {
    document.getElementById("near-accountid").innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;near_wallet_send_money()&quot;</span><span style="color: #007700">&gt;</span>Sign In<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;near_wallet_sign_out()&quot;</span><span style="color: #007700">&gt;</span>Sign Out<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> near_wallet_send_money() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> config <span style="color: #333333">=</span> {
      networkId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;mainnet&quot;</span>,
      keyStore<span style="color: #333333">:</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://rpc.mainnet.near.org&quot;</span>,
      walletUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://wallet.mainnet.near.org&quot;</span>,
      helperUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://helper.mainnet.near.org&quot;</span>,
      explorerUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://explorer.mainnet.near.org&quot;</span>,
    };
    <span style="color: #008800; font-weight: bold">const</span> near <span style="color: #333333">=</span> await nearApi.connect(config);
    <span style="color: #008800; font-weight: bold">const</span> wallet <span style="color: #333333">=</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.WalletConnection(near);
    <span style="color: #008800; font-weight: bold">if</span>(wallet.isSignedIn()) {
      <span style="color: #008800; font-weight: bold">const</span> walletAccountObj <span style="color: #333333">=</span> await wallet.account();
      await walletAccountObj.sendMoney(
        <span style="background-color: #fff0f0">&quot;0fajarpurnama0.near&quot;</span>, <span style="color: #888888">// receiver account</span>
        <span style="background-color: #fff0f0">&quot;1000000000000000000000000&quot;</span> <span style="color: #888888">// amount in yoctoNEAR (1 NEAR)</span>
      );
    } <span style="color: #008800; font-weight: bold">else</span> {
      wallet.requestSignIn({ contractId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0fajarpurnama0.near&#39;</span> });
    }
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.body.innerHTML <span style="color: #333333">+=</span> error.message;
  }
}

async <span style="color: #008800; font-weight: bold">function</span> near_wallet_sign_out() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> config <span style="color: #333333">=</span> {
      networkId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;mainnet&quot;</span>,
      keyStore<span style="color: #333333">:</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://rpc.mainnet.near.org&quot;</span>,
      walletUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://wallet.mainnet.near.org&quot;</span>,
      helperUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://helper.mainnet.near.org&quot;</span>,
      explorerUrl<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://explorer.mainnet.near.org&quot;</span>,
    };
    <span style="color: #008800; font-weight: bold">const</span> near <span style="color: #333333">=</span> await nearApi.connect(config);
    <span style="color: #008800; font-weight: bold">const</span> wallet <span style="color: #333333">=</span> await <span style="color: #008800; font-weight: bold">new</span> nearApi.WalletConnection(near);
    wallet.signOut();
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.body.innerHTML <span style="color: #333333">+=</span> error.message;;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="waves">Waves</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.waves.tech/en/">Waves Documentation</a></li>
</ul>

<h2>Keeper Wallet Public State</h2>
<button onclick="keeper_wallet_public_state()">Public State</button>
<p>Network: <span id="waves-keeper-network"></span></p>
<p>Network Code: <span id="waves-keeper-network-code"></span></p>
<p>Address: <span id="waves-keeper-address"></span></p>
<p>Public Key: <span id="waves-keeper-public-key"></span></p>

<script>
async function keeper_wallet_public_state() {
  KeeperWallet.publicState()
  .then(state => {
    document.getElementById("waves-keeper-network").innerHTML = state.account.network;
    document.getElementById("waves-keeper-network-code").innerHTML = state.account.networkCode;
    document.getElementById("waves-keeper-address").innerHTML = state.account.address;
    document.getElementById("waves-keeper-public-key").innerHTML = state.account.publicKey;
  })
  .catch(error => {
    document.getElementById("waves-keeper-public-key").innerHTML = error.message;
  });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;keeper_wallet_public_state()&quot;</span><span style="color: #007700">&gt;</span>Public State<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;waves-keeper-network&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network Code: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;waves-keeper-network-code&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Address: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;waves-keeper-address&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Public Key: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;waves-keeper-public-key&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> keeper_wallet_public_state() {
  KeeperWallet.publicState()
  .then(state <span style="color: #333333">=&gt;</span> {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;waves-keeper-network&quot;</span>).innerHTML <span style="color: #333333">=</span> state.account.network;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;waves-keeper-network-code&quot;</span>).innerHTML <span style="color: #333333">=</span> state.account.networkCode;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;waves-keeper-address&quot;</span>).innerHTML <span style="color: #333333">=</span> state.account.address;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;waves-keeper-public-key&quot;</span>).innerHTML <span style="color: #333333">=</span> state.account.publicKey;
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;waves-keeper-public-key&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h2>Keeper Send Waves and String Attachment</h2>
<button onclick="keeper_wallet_send_waves()">Send Waves</button>

<script>
async function keeper_wallet_send_waves() {
  const txData = {
    type: 4,
    data: {
      amount: {
        assetId: 'WAVES',
        tokens: '0.1',
      },
      fee: {
        assetId: 'WAVES',
        tokens: '0.001',
      },
      recipient: '3PKroXzTJYKidcTU7CuVj7ZJCyqokZ6cpCe',
      attachment: 'additional info 140 Bytes',
    },
  };
  KeeperWallet.signAndPublishTransaction(txData)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;keeper_wallet_send_waves()&quot;</span><span style="color: #007700">&gt;</span>Send Waves<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> keeper_wallet_send_waves() {
  <span style="color: #008800; font-weight: bold">const</span> txData <span style="color: #333333">=</span> {
    type<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">4</span>,
    data<span style="color: #333333">:</span> {
      amount<span style="color: #333333">:</span> {
        assetId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;WAVES&#39;</span>,
        tokens<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0.1&#39;</span>,
      },
      fee<span style="color: #333333">:</span> {
        assetId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;WAVES&#39;</span>,
        tokens<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0.001&#39;</span>,
      },
      recipient<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;3PKroXzTJYKidcTU7CuVj7ZJCyqokZ6cpCe&#39;</span>,
      attachment<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;additional info 140 Bytes&#39;</span>,
    },
  };
  KeeperWallet.signAndPublishTransaction(txData)
    .then(data <span style="color: #333333">=&gt;</span> {
      console.log(data);
    })
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
      console.log(error);
    });
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="hive"></h1>

<h2>References</h2>
<ul>
  <li><a href="https://developers.hive.io/">Hive Developer Portal</a></li>
  <li><a href="https://github.com/ecency/hivesigner-sdk">Hivesigner SDK</a></li>
  <li><a href="https://github.com/hive-keychain/hive-keychain-extension/blob/master/documentation/README.md">Hive Keychain Documentation</a></li>
</ul>

<h2>Hive Signer</h2>

<p>All Hive Signer requires:</p>

<script src="https://cdn.jsdelivr.net/npm/hivesigner@3.2.7/lib/hivesigner.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/hivesigner@3.2.7/lib/hivesigner.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<h2>Hive Signer Get Username and Access Token</h2>
<button onclick="hive_signer_username_access_token()">Hive Signer Username & Access Token</button>
<p>Username: <span id="hive-signer-username"></span></p>
<p>access token: <span id="hive-signer-access-token"></span></p>

<script>
async function hive_signer_login() {
  try {
    let client = new hivesigner.Client({
      app: 'fpdev',
      callbackURL: 'http://127.0.0.1:5500/',
      scope: ['vote', 'comment', 'offline', 'login']
    });
    let link = await client.getLoginURL();
    await client.login(link); // or await window.open(link, '_blank');
    const hivesigner_query_string = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    document.getElementById('hive-signer-username').innerHTML = hivesigner_query_string.username;
    document.getElementById('hive-signer-access-token').innerHTML = hivesigner_query_string.code;
    client.setAccessToken(hivesigner_query_string.code);
  } catch(error) {
    document.getElementById('hive-signer-access-token').innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;hive_signer_username_access_token()&quot;</span><span style="color: #007700">&gt;</span>Hive Signer Username <span style="color: #FF0000; background-color: #FFAAAA">&amp;</span> Access Token<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Username: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;hive-signer-username&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>access token: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;hive-signer-access-token&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> hive_signer_login() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">let</span> client <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> hivesigner.Client({
      app<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;fpdev&#39;</span>,
      callbackURL<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;http://127.0.0.1:5500/&#39;</span>,
      scope<span style="color: #333333">:</span> [<span style="background-color: #fff0f0">&#39;vote&#39;</span>, <span style="background-color: #fff0f0">&#39;comment&#39;</span>, <span style="background-color: #fff0f0">&#39;offline&#39;</span>, <span style="background-color: #fff0f0">&#39;login&#39;</span>]
    });
    <span style="color: #008800; font-weight: bold">let</span> link <span style="color: #333333">=</span> await client.getLoginURL();
    await client.login(link); <span style="color: #888888">// or await window.open(link, &#39;_blank&#39;);</span>
    <span style="color: #008800; font-weight: bold">const</span> hivesigner_query_string <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Proxy(<span style="color: #008800; font-weight: bold">new</span> URLSearchParams(<span style="color: #007020">window</span>.location.search), {
      get<span style="color: #333333">:</span> (searchParams, prop) <span style="color: #333333">=&gt;</span> searchParams.get(prop),
    });
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;hive-signer-username&#39;</span>).innerHTML <span style="color: #333333">=</span> hivesigner_query_string.username;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;hive-signer-access-token&#39;</span>).innerHTML <span style="color: #333333">=</span> hivesigner_query_string.code;
    client.setAccessToken(hivesigner_query_string.code);
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;hive-signer-access-token&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Hive Key Chain Send Token</h2>
<button onclick="hive_keychain_send_token()">Send Token</button>

<script>
async function hive_keychain_send_token() {
  try{
    hive_keychain.requestHandshake(function () {
      let username = prompt("Please enter your username", "");
      let recipient = 'fpdev';
      let amount = 0.1;
      let memo = "put memo here";
      let token = "HIVE"
      hive_keychain.requestTransfer(username, recipient, amount.toFixed(3), memo, token); // amount must be 3 decimals
    });
  } catch(error) {
    console.log(error);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;hive_keychain_send_token()&quot;</span><span style="color: #007700">&gt;</span>Send Token<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> hive_keychain_send_token() {
  <span style="color: #008800; font-weight: bold">try</span>{
    hive_keychain.requestHandshake(<span style="color: #008800; font-weight: bold">function</span> () {
      <span style="color: #008800; font-weight: bold">let</span> username <span style="color: #333333">=</span> prompt(<span style="background-color: #fff0f0">&quot;Please enter your username&quot;</span>, <span style="background-color: #fff0f0">&quot;&quot;</span>);
      <span style="color: #008800; font-weight: bold">let</span> recipient <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;fpdev&#39;</span>;
      <span style="color: #008800; font-weight: bold">let</span> amount <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">0.1</span>;
      <span style="color: #008800; font-weight: bold">let</span> memo <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;put memo here&quot;</span>;
      <span style="color: #008800; font-weight: bold">let</span> token <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;HIVE&quot;</span>
      hive_keychain.requestTransfer(username, recipient, amount.toFixed(<span style="color: #0000DD; font-weight: bold">3</span>), memo, token); <span style="color: #888888">// amount must be 3 decimals</span>
    });
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    console.log(error);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="wax">Wax</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developer.wax.io/">Wax Developer</a></li>
  <li><a href="https://github.com/worldwide-asset-exchange/waxjs/tree/develop">Wax JS</a></li>
</ul>

<p>Wax JS vanilla JavaScript library is available at <a href="https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web">https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web</a>. Download to your local file or server or reupload to a CDN because this Github does not support script src. I upload them to github page as well if you need them:</p>

<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>


<h2>Wax Login</h2>
<button onclick="wax_login()">Wax Login</button>
<p>User Account: <span id="wax-user-account"></span></p>
<p>Public Key: <span id="wax-public-key"></span></p>

<script>
async function wax_login() {
  try {
    let wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://wax.greymass.com'
    });
    const userAccount = await wax.login();
    const pubKeys = wax.pubKeys;
    document.getElementById("wax-user-account").innerHTML = userAccount;
    document.getElementById("wax-public-key").innerHTML = pubKeys;
  } catch(error) {
    document.getElementById("wax-public-key").innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;wax_login()&quot;</span><span style="color: #007700">&gt;</span>Wax Login<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>User Account: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;wax-user-account&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Public Key: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;wax-public-key&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> wax_login() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">let</span> wax <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> waxjs.WaxJS({
      rpcEndpoint<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;https://wax.greymass.com&#39;</span>
    });
    <span style="color: #008800; font-weight: bold">const</span> userAccount <span style="color: #333333">=</span> await wax.login();
    <span style="color: #008800; font-weight: bold">const</span> pubKeys <span style="color: #333333">=</span> wax.pubKeys;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;wax-user-account&quot;</span>).innerHTML <span style="color: #333333">=</span> userAccount;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;wax-public-key&quot;</span>).innerHTML <span style="color: #333333">=</span> pubKeys;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;wax-public-key&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Wax Send Transaction with Memo</h2>
<button onclick="wax_send()">Wax Send</button>

<script>
async function wax_send() {
  try {
    let wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://wax.greymass.com'
    });
    const userAccount = await wax.login();
    const result = await wax.api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: userAccount,
          permission: 'active',
        }],
        data: {
          from: userAccount,
          to: 'nbjaw.wam',
          quantity: '0.00000001 WAX',
          memo: 'put memo here',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 1200,
    });
    console.log(result);
  } catch(error) {
    console.log(error);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;wax_send()&quot;</span><span style="color: #007700">&gt;</span>Wax Send<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> wax_send() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">let</span> wax <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> waxjs.WaxJS({
      rpcEndpoint<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;https://wax.greymass.com&#39;</span>
    });
    <span style="color: #008800; font-weight: bold">const</span> userAccount <span style="color: #333333">=</span> await wax.login();
    <span style="color: #008800; font-weight: bold">const</span> result <span style="color: #333333">=</span> await wax.api.transact({
      actions<span style="color: #333333">:</span> [{
        account<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eosio.token&#39;</span>,
        name<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;transfer&#39;</span>,
        authorization<span style="color: #333333">:</span> [{
          actor<span style="color: #333333">:</span> userAccount,
          permission<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;active&#39;</span>,
        }],
        data<span style="color: #333333">:</span> {
          from<span style="color: #333333">:</span> userAccount,
          to<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;nbjaw.wam&#39;</span>,
          quantity<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0.00000001 WAX&#39;</span>,
          memo<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;put memo here&#39;</span>,
        },
      }]
    }, {
      blocksBehind<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">3</span>,
      expireSeconds<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">1200</span>,
    });
    console.log(result);
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    console.log(error);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="algorand">Algorand</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developer.algorand.org/">Algorand Developer Portal</a></li>
  <li><a href="https://connect.myalgo.com/docs/introduction">MyAlgo Connect</a></li>
</ul>

<h2>MyAlgo Wallet</h2>
<p>Get the library on their Github:</p>

<script src="https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<br />

<h2>MyAlgo Wallet Connect</h2>
<button onclick="myalgo_connect_user()">Connect</button>
<p>Name: <span id="myalgo-name"></span></p>
<p>Address: <span id="myalgo-address"></span></p>

<script>
async function myalgo_connect_user() {
  try{
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    document.getElementById('myalgo-name').innerHTML = accountsSharedByUser[0].name;
    document.getElementById('myalgo-address').innerHTML = accountsSharedByUser[0].address;
    console.log(accountsSharedByUser);
  } catch(error) {
    document.getElementById('myalgo-address').innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;myalgo_connect_user()&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Name: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;myalgo-name&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Address: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;myalgo-address&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> myalgo_connect_user() {
  <span style="color: #008800; font-weight: bold">try</span>{
    <span style="color: #008800; font-weight: bold">const</span> myAlgoConnect <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> MyAlgoConnect();
    <span style="color: #008800; font-weight: bold">const</span> accountsSharedByUser <span style="color: #333333">=</span> await myAlgoConnect.connect();
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;myalgo-name&#39;</span>).innerHTML <span style="color: #333333">=</span> accountsSharedByUser[<span style="color: #0000DD; font-weight: bold">0</span>].name;
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;myalgo-address&#39;</span>).innerHTML <span style="color: #333333">=</span> accountsSharedByUser[<span style="color: #0000DD; font-weight: bold">0</span>].address;
    console.log(accountsSharedByUser);
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;myalgo-address&#39;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h2>MyAlgo Wallet Send and Note</h2>
<button onclick="myalgo_send_note()">Send and Note</button>

<script>
async function myalgo_send_note() {
  try{
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    const algodClient = new algosdk.Algodv2('', 'https://node.algoexplorerapi.io', '');
    const params = await algodClient.getTransactionParams().do();
    const note = new TextEncoder("utf-8").encode("put note here");
    const sender = accountsSharedByUser[0].address;
    const receiver = 'OHOLBJ4OUNLR5MPPLZ7O7D2BBKTELDWJPRF5KR7VM54RBJNA5MBCSYIIS4';
    const amount = 1000;
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams: params,
      from: sender,
      to: receiver,
      amount: amount, // 0.001 Algo
      note: note
    });
    const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;myalgo_send_note()&quot;</span><span style="color: #007700">&gt;</span>Send and Note<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> myalgo_send_note() {
  <span style="color: #008800; font-weight: bold">try</span>{
    <span style="color: #008800; font-weight: bold">const</span> myAlgoConnect <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> MyAlgoConnect();
    <span style="color: #008800; font-weight: bold">const</span> accountsSharedByUser <span style="color: #333333">=</span> await myAlgoConnect.connect();
    <span style="color: #008800; font-weight: bold">const</span> algodClient <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> algosdk.Algodv2(<span style="background-color: #fff0f0">&#39;&#39;</span>, <span style="background-color: #fff0f0">&#39;https://node.algoexplorerapi.io&#39;</span>, <span style="background-color: #fff0f0">&#39;&#39;</span>);
    <span style="color: #008800; font-weight: bold">const</span> params <span style="color: #333333">=</span> await algodClient.getTransactionParams().<span style="color: #008800; font-weight: bold">do</span>();
    <span style="color: #008800; font-weight: bold">const</span> note <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> TextEncoder(<span style="background-color: #fff0f0">&quot;utf-8&quot;</span>).encode(<span style="background-color: #fff0f0">&quot;put note here&quot;</span>);
    <span style="color: #008800; font-weight: bold">const</span> sender <span style="color: #333333">=</span> accountsSharedByUser[<span style="color: #0000DD; font-weight: bold">0</span>].address;
    <span style="color: #008800; font-weight: bold">const</span> receiver <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;OHOLBJ4OUNLR5MPPLZ7O7D2BBKTELDWJPRF5KR7VM54RBJNA5MBCSYIIS4&#39;</span>;
    <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1000</span>;
    <span style="color: #008800; font-weight: bold">const</span> txn <span style="color: #333333">=</span> algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams<span style="color: #333333">:</span> params,
      from<span style="color: #333333">:</span> sender,
      to<span style="color: #333333">:</span> receiver,
      amount<span style="color: #333333">:</span> amount, <span style="color: #888888">// 0.001 Algo</span>
      note<span style="color: #333333">:</span> note
    });
    <span style="color: #008800; font-weight: bold">const</span> signedTxn <span style="color: #333333">=</span> await myAlgoConnect.signTransaction(txn.toByte());
    <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await algodClient.sendRawTransaction(signedTxn.blob).<span style="color: #008800; font-weight: bold">do</span>();
    console.log(response);
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    console.log(error);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<h1 id="vechain">Vechain</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.vechain.org/">Vechain Docs</a></li>
</ul>

<p>Get the connex library:</p>

<script src="https://unpkg.com/@vechain/connex@2"></script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://unpkg.com/@vechain/connex@2&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<br />

<h2>Sync Wallet Send and Comment</h2>
<button onclick="vechain_connex_send()">Send</button>

<script>
async function vechain_connex_send() {
  try{
    const connex = new Connex({
      node: 'https://mainnet.veblocks.net/', // veblocks public node, use your own if needed
      network: 'main' // defaults to mainnet, so it can be omitted here
    })
    const vendor = new Connex.Vendor('main'); // 'main','test' or genesis ID if it's private network
    const amount = 1;

    const signedtx =  vendor.sign('tx', [{
      to: '0xB9e12b1240b3eADc2f07d892e847256526526320',
      value: amount + '0'.repeat(18)    
    }])
    .comment('put comment here')
    .link(window.location.href)
    .request()
    .then(() => alert('Thank you!'))
    .catch(() => alert('Fine :-('))
  } catch(error) {
    console.log(error);
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;vechain_connex_send()&quot;</span><span style="color: #007700">&gt;</span>Send<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
async <span style="color: #008800; font-weight: bold">function</span> vechain_connex_send() {
  <span style="color: #008800; font-weight: bold">try</span>{
    <span style="color: #008800; font-weight: bold">const</span> connex <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Connex({
      node<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;https://mainnet.veblocks.net/&#39;</span>, <span style="color: #888888">// veblocks public node, use your own if needed</span>
      network<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;main&#39;</span> <span style="color: #888888">// defaults to mainnet, so it can be omitted here</span>
    })
    <span style="color: #008800; font-weight: bold">const</span> vendor <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Connex.Vendor(<span style="background-color: #fff0f0">&#39;main&#39;</span>); <span style="color: #888888">// &#39;main&#39;,&#39;test&#39; or genesis ID if it&#39;s private network</span>
    <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;

    <span style="color: #008800; font-weight: bold">const</span> signedtx <span style="color: #333333">=</span>  vendor.sign(<span style="background-color: #fff0f0">&#39;tx&#39;</span>, [{
      to<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0xB9e12b1240b3eADc2f07d892e847256526526320&#39;</span>,
      value<span style="color: #333333">:</span> amount <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;0&#39;</span>.repeat(<span style="color: #0000DD; font-weight: bold">18</span>)    
    }])
    .comment(<span style="background-color: #fff0f0">&#39;put comment here&#39;</span>)
    .link(<span style="color: #007020">window</span>.location.href)
    .request()
    .then(() <span style="color: #333333">=&gt;</span> alert(<span style="background-color: #fff0f0">&#39;Thank you!&#39;</span>))
    .<span style="color: #008800; font-weight: bold">catch</span>(() <span style="color: #333333">=&gt;</span> alert(<span style="background-color: #fff0f0">&#39;Fine :-(&#39;</span>))
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    console.log(error);
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<br />

<p>Repository: <a href="http://mellow.link/3c59D">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-01-web3-source-code-collection.md</a></p>