---
layout: post
title: Web3 Source Code Collection
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source]
featuredimage: https://images.hive.blog/DQma5YvWPusmDNDhsm64yahiJtGd5o2i2h9eJMFM2hhg1zq/add-uniswap-token-button.png
description: List of Ethereum JS or Web3 source codes.
canonicalurl: 
---
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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;connect()&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;connect&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;getnativebalance()&quot;</span><span style="color: #007700">&gt;</span>Connect<span style="color: #007700">&lt;/button&gt;</span>
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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;addtokentowatchlist&quot;</span><span style="color: #007700">&gt;</span>Get Gas Price<span style="color: #007700">&lt;/h2&gt;</span>

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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;watchasset()&quot;</span><span style="color: #007700">&gt;</span>Add<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://github.com/Uniswap/docs/raw/main/static/img/favicon.png&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>

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

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;gettokenbalance()&quot;</span><span style="color: #007700">&gt;</span>Get<span style="color: #007700">&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg&quot;</span><span style="color: #007700">/&gt;&lt;img</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;height: 1em;&quot;</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://avatars.githubusercontent.com/u/66380691?s=48&amp;v=4&quot;</span><span style="color: #007700">/&gt;&lt;/button&gt;</span>
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

<p>Repository: <a href="http://mellow.link/3c59D">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-01-web3-source-code-collection.md</a></p>