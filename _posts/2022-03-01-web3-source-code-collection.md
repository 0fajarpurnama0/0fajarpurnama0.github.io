---
layout: post
title: dApp Interface Source Code Collection
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source code]
featuredimage: https://images.hive.blog/DQma5YvWPusmDNDhsm64yahiJtGd5o2i2h9eJMFM2hhg1zq/add-uniswap-token-button.png
description: List of decentralized application JavaScript and other dapp interface source codes including Ethereum, Tron, Stellar, Neo, Near, Hive, Eos, IOST, etc.
canonicalurl: https://0fajarpurnama0.github.io/cryptocurrency/2022/03/01/web3-source-code-collection
---
<h1>Table of Contents</h1>
<ul>
  <li><a href="#libraries">Libraries</a></li>
  <li><a href="#ethereumvirtualmachines">Ethereum Virtual Machine</a></li>
  <li><a href="#telegramopennetwork">Telegram Open Network</a></li>
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
  <li><a href="#iost">IOST</a></li>
  <li><a href="#ontology">Ontology</a></li>
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

{% highlight html %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="connectchange()" id="connectchange">Connect</button>
<p>Account: <span id="showAccountchange"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h2 id="signpersonalmessage">Sign Personal Message</h2>
<button onclick="connect_personal_sign()" id="connect-personal-sign">Connect</button>
<p>Account: <span id="showAccount-personal-sign"></span></p>
<p>Personal Signature: <span id="personal-sign"></span></p>

<script>
async function connect_personal_sign() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  //const account = "0xCf354A0012160bC5dAe441C49f0B2d7E4A4fFC96" // only this address can sign
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

{% highlight html %}
<button onclick="connect_personal_sign()" id="connect-personal-sign">Connect</button>
<p>Account: <span id="showAccount-personal-sign"></span></p>
<p>Personal Signature: <span id="personal-sign"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function connect_personal_sign() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  //const account = "0xCf354A0012160bC5dAe441C49f0B2d7E4A4fFC96" // only this address can sign
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
{% endhighlight %}

<br />

<h2 id="signpersonalmessageandrecoveraddress">Sign Personal Message and Recover Address</h2>
<button onclick="personal_sign_recover()">Sign</button>
        
<p>Signature: <span id="personal-sign"></span></p>
<p>Recover: <span id="recover-address"></span></p>

<script>
async function personal_sign_recover() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const message = "Hello from signer!";
    const signature = await ethereum.request({ method: 'personal_sign', params: [ message, account ] });
    const recover = await ethereum.request({ method: 'personal_ecRecover', params: [ message, signature ] });
    document.getElementById("personal-sign").innerHTML = signature;
    document.getElementById("recover-address").innerHTML = recover;
}
</script>

{% highlight html %}
<button onclick="personal_sign_recover()">Sign</button>
        
<p>Signature: <span id="personal-sign"></span></p>
<p>Recover: <span id="recover-address"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function personal_sign_recover() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const message = "Hello from signer!";
    const signature = await ethereum.request({ method: 'personal_sign', params: [ message, account ] });
    const recover = await ethereum.request({ method: 'personal_ecRecover', params: [ message, signature ] });
    document.getElementById("personal-sign").innerHTML = signature;
    document.getElementById("recover-address").innerHTML = recover;
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="getnativebalance()">Connect</button>
<p>Native Balance Hexadecimal: <span id="native-balance-hexadecimal"></span></p>
<p>Native Balance 18 Decimals: <span id="native-balance-18decimal"></span></p>
<p>Native Balance: <span id="native-balance"></span></p>
{% endhighlight %}

{% highlight javascript %}
async function getnativebalance() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const balance = await ethereum.request({ method: 'eth_getBalance', params: [account, "latest"] });
  document.getElementById("native-balance-hexadecimal").innerHTML = balance;
  document.getElementById("native-balance-18decimal").innerHTML = parseInt(balance, 16);
  document.getElementById("native-balance").innerHTML = parseInt(balance, 16)/Math.pow(10, 18);
}
{% endhighlight %}

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

{% highlight html %}
<button onclick="getgasprice()">Get⛽</button>
<p>Gas Price Hexadecimal: <span id="gas-price-hexadecimal"></span></p>
<p>Gas Price Wei: <span id="gas-price-wei"></span></p>
<p>Gas Price GWei: <span id="gas-price-gwei"></span></p>
<p>Gas Price Native Asset: <span id="gas-price"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function getgasprice() {
  let gasprice = await ethereum.request({method: 'eth_gasPrice', params: []});
  document.getElementById("gas-price-hexadecimal").innerHTML = gasprice;
  document.getElementById("gas-price-wei").innerHTML = parseInt(gasprice, 16);
  document.getElementById("gas-price-gwei").innerHTML = parseInt(gasprice, 16)/Math.pow(10, 9);
  document.getElementById("gas-price").innerHTML = parseInt(gasprice, 16)/Math.pow(10, 18);
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="estgaslimit()">Estimate ⛽ Limit</button>
<p>Gas Limit Hexadecimal: <span id="gas-limit-hexadecimal"></span></p>
<p>Gas Limit: <span id="gas-limit"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="sendeth()">Send Native Asset</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="sendmsg()">Send Message</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="addchainmetamask()">Add<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/></button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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
	
{% highlight html %}
<button onclick="changenetwork()">Change Network</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="watchasset()">Add<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/><img style="height: 1em;" src="https://github.com/Uniswap/docs/raw/main/static/img/favicon.png"/></button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="gettokenbalance()">Get<img style="height: 1em;" src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"/><img style="height: 1em;" src="https://avatars.githubusercontent.com/u/66380691?s=48&v=4"/></button>
<p>ERC20 Statera Balance 18 Decimals: <span id="statera-balance-18decimals"></span></p>

<p>ERC20 Statera Balance: <span id="statera-balance"></span></p>

<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<h1 id="telegramopennetwork">Telegram Open Network</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.ton.org/develop/dapps/ton-connect/web">TON Connect for JS</a></li>
  <li><a href="https://github.com/ton-connect/sdk/tree/main/packages/ui">Specifically tonconnect-ui</a></li>
</ul>

<h2>Connect Wallet<div id="ton-connect" style="float: right;"></div></h2>
<script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
<script>
  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json',
    buttonRootId: 'ton-connect'
  });
</script>

{% highlight html %}
<div id="ton-connect"></div>
<script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
{% endhighlight %}

{% highlight javascript %}
<script>
  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json',
    buttonRootId: 'ton-connect'
  });
</script>
{% endhighlight %}

<p>Example Manifest JSON template</p>
<pre><code class="language-json">
{
    "url": "https://0fajarpurnama0.github.io",
    "name": "Fajar Purnama Personal Website",
    "iconUrl": "https://0fajarpurnama0.github.io/assets/images/icon/0fp0exp-logo-circle.png"
}
{% endhighlight %}

<h2>Connect Wallet Manually</h2>
<button id="ton-connect-manually" onclick="ton_connect()">Connect</button>
<script>
async function ton_connect() {
    await tonConnectUI.disconnect();
    try {
        const tonConnectUI1 = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json'
        });
        const connectedWallet = await tonConnectUI1.connectWallet();
        console.log(connectedWallet);
    } catch (error) {
        console.log(error);
    }
}
</script>

{% highlight html %}
<button id="ton-connect-manually" onclick="ton_connect()">Connect</button>
<script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
{% endhighlight %}

{% highlight javascript %}
<script>
async function ton_connect() {
    try {
        const tonConnectUI1 = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json'
        });
        const connectedWallet = await tonConnectUI1.connectWallet();
        console.log(connectedWallet);
    } catch (error) {
        console.log(error);
    }
}
</script>
{% endhighlight %}

<h2>Disconnect Wallet Manually</h2>
<button id="ton-disconnect-manually" onclick="ton_disconnect()">Disconnect</button>
<script>
async function ton_disconnect() {
    await tonConnectUI.disconnect();
    try {
        await tonConnectUI1.disconnect();
        console.log("disconnected");
    } catch (error) {
        console.log(error);
    }
}
</script>

{% highlight html %}
<button id="ton-disconnect-manually" onclick="ton_disconnect()">Connect</button>
<script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>  
{% endhighlight %}

{% highlight javascript %}
<script>
async function ton_disconnect() {
    try {
        await tonConnectUI1.disconnect();
        console.log("disconnected");
    } catch (error) {
        console.log(error);
    }
}
</script>
{% endhighlight %}

<h2>Get wallet info after connecting <div id="ton-connect" style="float: right;"></div></h2>

<script>
  tonConnectUI.onStatusChange(async walletAndwalletInfo => {
    const currentWallet = tonConnectUI.wallet;
    const currentWalletInfo = tonConnectUI.walletInfo;
    const currentAccount = tonConnectUI.account;
    const currentIsConnectedStatus = tonConnectUI.connected;
    console.log(currentWallet);
    console.log(currentWalletInfo); 
    console.log(currentAccount);
    console.log(currentIsConnectedStatus);

    const walletsList = await tonConnectUI.getWallets();
    console.log(walletsList);
  });
</script>

{% highlight javascript %}
<script>
tonConnectUI.onStatusChange(async walletAndwalletInfo => {
  const currentWallet = tonConnectUI.wallet;
  const currentWalletInfo = tonConnectUI.walletInfo;
  const currentAccount = tonConnectUI.account;
  const currentIsConnectedStatus = tonConnectUI.connected;
  console.log(currentWallet);
  console.log(currentWalletInfo); 
  console.log(currentAccount);
  console.log(currentIsConnectedStatus);

  const walletsList = await tonConnectUI.getWallets();
  console.log(walletsList);
});
</script>
{% endhighlight %}

<h2>Sending Transactions <div id="ton-connect" style="float: right;"></div></h2>
<h3>Send Native TON</h3>
<button id="ton-send-native-ton" onclick="ton_send_native_ton()">Send Native TON</button>
<script> 
async function ton_send_native_ton() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000' // 0.01 TON in nanoTON
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</script>

{% highlight html %}
<button id="ton-send-native-ton" onclick="ton_send_native_ton()">Send Native TON</button>
{% endhighlight %}

{% highlight javascript %}
<script> 
async function ton_send_native_ton() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000' // 0.01 TON in nanoTON
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</script>
{% endhighlight %}

<h3>Send Multiple Messages</h3>
<button id="ton-send-multiple-native-ton" onclick="ton_send_multiple_native_ton()">Send Multiple Native TON</button>
<script> 
async function ton_send_multiple_native_ton() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000' // 0.01 TON in nanoTON
            },
            {
              address: 'UQBF0k8bkfbOaz4hBgP2v0C_lp2I4zifUTEc0Hi5-rhduybX',
              amount: '10000000' // 0.01 TON in nanoTON
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</script>

{% highlight html %}
<button id="ton-send-multiple-native-ton" onclick="ton_send_multiple_native_ton()">Send Multiple Native TON</button>
{% endhighlight %}

{% highlight javascript %}
<script> 
async function ton_send_multiple_native_ton() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000' // 0.01 TON in nanoTON
            },
            {
              address: 'UQBF0k8bkfbOaz4hBgP2v0C_lp2I4zifUTEc0Hi5-rhduybX',
              amount: '10000000' // 0.01 TON in nanoTON
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
{% endhighlight %}

<h3>Send Extra Currency</h3>
<button id="ton-send-extra-currency" onclick="ton_send_extra_currency()">Send Extra Currency</button>
<script> 
async function ton_send_extra_currency() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000', // 0.01 TON in nanoTON
              extraCurrency: {
                100: "10000000" // 0.01 in extra currency
              }
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</script>

{% highlight html %}
<button id="ton-send-extra-currency" onclick="ton_send_extra_currency()">Send Extra Currency</button>
{% endhighlight %}

{% highlight javascript %}
<script> 
async function ton_send_extra_currency() {
    try {
        const transaction = {
          messages: [
            {
              address: 'UQDCXiblxylhx-spWJWWYkAr7LIPNhAt69YT8sweJwSZbu5y',
              amount: '10000000', // 0.01 TON in nanoTON
              extraCurrency: {
                100: "10000000" // 0.01 in extra currency
              }
            }
          ]
        };
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button id="get-account-solana" onclick="get_account_solana()">Get Account</button>
<p>Account: <span id="solana-account"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<p>Beyond here requires <a href="https://docs.solana.com/developing/clients/javascript-api">Solana Web3 JS</a>:</p>

{% highlight html %}
<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<select id="choose-solana-network" onchange="establish_connection_network_solana()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select>
<p>Network: <span id="solana-network"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<p>Get Airdrop: <select id="choose-solana-network-airdrop" onchange="get_airdrop_solana()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select></p>
<p>Network: <span id="solana-network-airdrop"></span></p>
<p>Airdrop (balance): <span id="received-airdrop"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<select id="send-sol-network" onchange="send_sol()">
  <option value="choose">choose</option>
  <option value="devnet">devnet</option>
  <option value="testnet">testnet</option>
  <option value="mainnet-beta">mainnet-beta</option>
</select>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="gettronwebdefaultaddress()">Can you get tronweb from tronlink?</button>
<p>Default Address: <span id="tronlink-defaultAddress"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function gettronwebdefaultaddress(){
  if(window.tronWeb && window.tronWeb.defaultAddress.base58){
      document.getElementById('tronlink-defaultAddress').innerHTML = await window.tronWeb.defaultAddress.base58;
  }
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="sendtrx()">Send TRX</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="sendtrxmemo()">Send TRX with Memo</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="get_public_key_rabet()">Get Public Key</button>
<p>Public Key: <span id="rabet-public-key"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}


<br />

<p>For all Freighter use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>

{% highlight html %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="get_public_key_and_network_freighter()">Get Public Key and Network</button>
<p>Public Key: <span id="freighter-public-key"></span></p>
<p>Network: <span id="freighter-network"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function get_public_key_and_network_freighter() {
  document.getElementById('freighter-public-key').innerHTML = await window.freighterApi.getPublicKey();
  document.getElementById('freighter-network').innerHTML = await window.freighterApi.getNetwork();
}
</script>
{% endhighlight %}

<br />

<p>For all Stellar SDK use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>

{% highlight html %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="get_public_key_sequence_number()">Get Sequence Number</button>
<p>Sequence Number: <span id="freighter-public-key-squence-number"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="send_xlm_freighter()">Send XLM</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="send_xlm_with_memo_freighter()">Send XLM</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="send_xlm_memo_rabet()">Send XLM</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="web3_zilliqa_zilpay_accounts()">Zilpay</button>
<p>base16: <span id="zilliqa-zilpay-base16-accounts"></span></p>
<p>ech32: <span id="zilliqa-zilpay-bech32-accounts"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="web3_zilliqa_zilpay_network()">Zilpay</button>
<p>base16: <span id="zilliqa-zilpay-base16-network"></span></p>
<p>ech32: <span id="zilliqa-zilpay-bech32-network"></span></p>
<p>network: <span id="zilliqa-zilpay-network"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="web3_zilliqa_zilpay_send_zil()">Zilpay Send ZIL</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h1 id="neo">Neo</h1>

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
// Already initiated in assets/js/web3comment.js
/*
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
*/

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

{% highlight html %}
<select id="neoline-neo-version">
    <option value="neolinen2">Neoline N2</option>
    <option value="neolinen3">Neoline N3</option>
</select>
<button onclick="neoline_web3()">Get Account</button>
<p>Neoline Account: <span id="neoline-account"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

</pre></div>

<br />

<h2>Send Neo Asset Using Neoline</h2>
<select id="neoline-neo-version">
    <option value="neolinen2">Neoline N2</option>
    <option value="neolinen3">Neoline N3</option>
</select>
<button onclick="neoline_send_neo_asset()">Send Neo Asset</button>

<script>

// Already initiated in assets/js/web3comment.js
/*
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
*/
let neolineN2_toAddress = 'Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar';
let neolineN3_toAddress = 'NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8';
let neolineN2_asset = 'GAS';
let neolineN3_asset = 'GAS';
let neolineN2_amount = '0.01';
let neolineN3_amount = '0.01';

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

{% highlight html %}
<select id="neoline-neo-version">
    <option value="neolinen2">Neoline N2</option>
    <option value="neolinen3">Neoline N3</option>
</select>
<button onclick="neoline_send_neo_asset()">Send Neo Asset</button>
{% endhighlight %}

{% highlight javascript %}
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

let neolineN2_toAddress = 'Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar';
let neolineN3_toAddress = 'NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8';
let neolineN2_asset = 'GAS';
let neolineN3_asset = 'GAS';
let neolineN2_amount = '0.01';
let neolineN3_amount = '0.01';

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
{% endhighlight %}

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

{% highlight html %}
<button onclick="cosmos_atom_keplr_get_public_key()">Get Public Key</button>
<p>Keplr Bech32 Address: <span id="keplr-bech32address"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h1 id="eos">EOS</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developers.eos.io/">EOSIO Developer Portal</a></li>
  <li><a href="https://github.com/EOSIO/eosjs">EOS JS</a></li>
  <li><a href="https://github.com/GetScatter/scatter-js">Scatter JS</a></li>
  <li><a href="https://github.com/greymass/anchor-link">Anchor Link</a></li>
</ul>

<h2>Scatter</h2>

<p>Get the Javascript libraries at <a href="https://cdnjs.com/libraries/scatterjs/@scatterjs">https://cdnjs.com/libraries/scatterjs/@scatterjs</a> and for EOS use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs2.min.js"></script>

{% highlight html %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/scatterjs/@scatterjs/core@2.7.54/scatterjs-plugin-eosjs2.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="eos_scatter_get_acccount()">Get Account</button>
<p>Blockchain: <span id="eos-scatter-blockchain"></span></p>
<p>Name: <span id="eos-scatter-name"></span></p>
<p>Public Key: <span id="eos-scatter-public-key"></span></p>
<p>Chain ID: <span id="eos-scatter-chainid"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h2>EOS JS CDN</h2>
<p>Unfortunately, I cannot find CDNs provided officially by EOS JS but we can build the vanilla JS using NPM and here I provided mine if you do not want to build yourself:</p>

<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/externals.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-api.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-jsonrpc.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-jssig.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-numeric.min.js"></script>

{% highlight html %}
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/externals.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-api.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-jsonrpc.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-jssig.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/eosjsweb/eosjs-numeric.min.js"></script>
{% endhighlight %}

<br />

<h2>Scatter Send Asset</h2>
<button onclick="eos_scatter_send()">Send</button>

<script>
async function eos_scatter_send() {
  await ScatterJS.plugins( new ScatterEOS() );

  const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
  });

  const rpc = new eosjs_jsonrpc.JsonRpc(network.fullhost());

  ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');
    const eos = ScatterJS.eos(network, eosjs_api.Api, {rpc});
    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('eos');
        eos.transact({
            actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor: account.name,
                    permission: account.authority,
                }],
                data: {
                    from: account.name,
                    to: 'urf5n4htf5em',
                    quantity: '0.1 EOS',
                    memo: 'put memo here',
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(res => {
            console.log('tx sent: ', res);
        }).catch(err => {
            console.error('tx error: ', err);
        });
    });
  });
}
</script>

{% highlight html %}
<button onclick="eos_scatter_send()">Send</button>
{% endhighlight %}

{% highlight javascript %}
<script>
async function eos_scatter_send() {
  await ScatterJS.plugins( new ScatterEOS() );

  const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
  });

  const rpc = new eosjs_jsonrpc.JsonRpc(network.fullhost());

  ScatterJS.connect('YourAppName', {network}).then(connected => {
    if(!connected) return console.error('no scatter');
    const eos = ScatterJS.eos(network, eosjs_api.Api, {rpc});
    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('eos');
        eos.transact({
            actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor: account.name,
                    permission: account.authority,
                }],
                data: {
                    from: account.name,
                    to: 'urf5n4htf5em',
                    quantity: '0.1 EOS',
                    memo: 'put memo here',
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(res => {
            console.log('tx sent: ', res);
        }).catch(err => {
            console.error('tx error: ', err);
        });
    });
  });
}
</script>
{% endhighlight %}

<br />

<h2>Anchor Link</h2>
<p>Requires:</p>

<script src="https://unpkg.com/anchor-link@3"></script>
<script src="https://unpkg.com/anchor-link-browser-transport@3"></script>

{% highlight html %}
<script src="https://unpkg.com/anchor-link@3"></script>
<script src="https://unpkg.com/anchor-link-browser-transport@3"></script>
{% endhighlight %}

<br />

<h2>Anchor Session Identity</h2>
<button onclick="eos_anchor_identity()">Identity</button>
        
<p>Identity: <span id="anchor-identity"></span></p>

<script>
async function eos_anchor_identity() {
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [
            {
                chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                nodeUrl: 'https://eos.greymass.com',
            }
        ],
    })

    // Perform the login, which returns the users identity
    const identity = await link.login('mydapp');

    // Save the session within your application for future use
    const {session} = identity;
    document.getElementById("anchor-identity").innerHTML = session.auth;
}
</script>

{% highlight html %}
<button onclick="eos_anchor_identity()">Identity</button>
        
<p>Identity: <span id="anchor-identity"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function eos_anchor_identity() {
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [
            {
                chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                nodeUrl: 'https://eos.greymass.com',
            }
        ],
    })

    // Perform the login, which returns the users identity
    const identity = await link.login('mydapp');

    // Save the session within your application for future use
    const {session} = identity;
    document.getElementById("anchor-identity").innerHTML = session.auth;
}
</script>
{% endhighlight %}

<br />

<h2>Anchor Send Asset</h2>
<button onclick="eos_anchor_send()">Send</button>

<script>
async function eos_anchor_send() {
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [
            {
                chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                nodeUrl: 'https://eos.greymass.com',
            }
        ],
    })

    const identity = await link.login('mydapp');

    const {session} = identity;

    const action = {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [session.auth],
        data: {
            from: session.auth.actor,
            to: 'urf5n4htf5em',
            quantity: '0.0001 EOS', // must be 4 decimals
            memo: 'some memo'
        },
    }

    session.transact({action}).then(({transaction}) => {
        console.log(`Transaction broadcast! Id: ${transaction.id}`)
    })
}
</script>

{% highlight html %}
<button onclick="eos_anchor_send()">Send</button>
{% endhighlight %}

{% highlight javascript %}
<script>
async function eos_anchor_send() {
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [
            {
                chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                nodeUrl: 'https://eos.greymass.com',
            }
        ],
    })

    const identity = await link.login('mydapp');

    const {session} = identity;

    const action = {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [session.auth],
        data: {
            from: session.auth.actor,
            to: 'urf5n4htf5em',
            quantity: '0.0001 EOS', // must be 4 decimals
            memo: 'some memo'
        },
    }

    session.transact({action}).then(({transaction}) => {
        console.log(`Transaction broadcast! Id: ${transaction.id}`)
    })
}
</script>
{% endhighlight %}

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

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="near_wallet_sign_in_get_account()">Sign In</button><button onclick="near_wallet_sign_out()">Sign Out</button>
<p>Network ID: <span id="near-networkid"></span></p>
<p>Network URL: <span id="near-network-url"></span></p>
<p>Account ID: <span id="near-accountid"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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
    console.log(error);
  }
}
</script>

{% highlight html %}
<button onclick="near_wallet_send_money()">Sign In</button><button onclick="near_wallet_sign_out()">Sign Out</button>
{% endhighlight %}

{% highlight javascript %}
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
    console.log(error);
  }
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="keeper_wallet_public_state()">Public State</button>
<p>Network: <span id="waves-keeper-network"></span></p>
<p>Network Code: <span id="waves-keeper-network-code"></span></p>
<p>Address: <span id="waves-keeper-address"></span></p>
<p>Public Key: <span id="waves-keeper-public-key"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="keeper_wallet_send_waves()">Send Waves</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/hivesigner@3.2.7/lib/hivesigner.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="hive_signer_username_access_token()">Hive Signer Username & Access Token</button>
<p>Username: <span id="hive-signer-username"></span></p>
<p>access token: <span id="hive-signer-access-token"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h2>Hive Signer Send Token</h2>
<button onclick="hive_signer_send_token()">Send Token</button>

<script>
async function hive_signer_send_token() {
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
    client.setAccessToken(hivesigner_query_string.code);
    const op = ['transfer', {
      from: hivesigner_query_string.username,
      to: 'fpdev',
      amount: '0.1' + ' HIVE',
      memo: 'put memo here'
    }];
    hivesigner.sendOperation(op, {callback: 'http://127.0.0.1:5500/'}, function(err, result) {
      console.log(err + result);
    });
  } catch(error) {
    console.log(error);
  }
}
</script>

{% highlight html %}
<button onclick="hive_signer_send_token()">Send Token</button>
{% endhighlight %}

{% highlight javascript %}
<script>
async function hive_signer_send_token() {
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
    client.setAccessToken(hivesigner_query_string.code);
    const op = ['transfer', {
      from: hivesigner_query_string.username,
      to: 'fpdev',
      amount: '0.1' + ' HIVE',
      memo: 'put memo here'
    }];
    hivesigner.sendOperation(op, {callback: 'http://127.0.0.1:5500/'}, function(err, result) {
      console.log(err + result);
    });
  } catch(error) {
    console.log(error);
  }
}
</script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="hive_keychain_send_token()">Send Token</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h1 id="wax">Wax</h1>

<h2>References</h2>
<ul>
  <li><a href="https://developer.wax.io/">Wax Developer</a></li>
  <li><a href="https://github.com/worldwide-asset-exchange/waxjs/tree/develop">Wax JS</a></li>
</ul>

<p>Wax JS vanilla JavaScript library is available at <a href="https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web">https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web</a>. Download to your local file or server or reupload to a CDN because this Github does not support script src. I upload them to github page as well if you need them:</p>

<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>

{% highlight html %}
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="wax_login()">Wax Login</button>
<p>User Account: <span id="wax-user-account"></span></p>
<p>Public Key: <span id="wax-public-key"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="wax_send()">Wax Send</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<script src="https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="myalgo_connect_user()">Connect</button>
<p>Name: <span id="myalgo-name"></span></p>
<p>Address: <span id="myalgo-address"></span></p>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

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

{% highlight html %}
<button onclick="myalgo_send_note()">Send and Note</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h1 id="vechain">Vechain</h1>

<h2>References</h2>
<ul>
  <li><a href="https://docs.vechain.org/">Vechain Docs</a></li>
</ul>

<p>Get the connex library:</p>

<script src="https://unpkg.com/@vechain/connex@2"></script>

{% highlight html %}
<script src="https://unpkg.com/@vechain/connex@2"></script>
{% endhighlight %}

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

{% highlight html %}
<button onclick="vechain_connex_send()">Send</button>
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

<br />

<h1 id="iost">IOST</h1>

<h2>Reference</h2>
<ul>
  <li><a href="https://developers.iost.io/">IOST Documentations</a></li>
  <li><a href="https://github.com/iost-official/iost.js">IOST JS</a></li>
  <li><a href="https://github.com/lucusfly/iost-helloworld-dapp">IWallet Hello World Dapp</a></li>
</ul>

<h2>IWallet Account</h2>
<button onclick="iwallet_account()">IWallet Account</button>
<p>Network: <span id="iwallet-network"></span></p>
<p>Account: <span id="iwallet-account"></span></p>

<script>
async function iwallet_account() {
  try {
    document.getElementById("iwallet-network").innerHTML = IWalletJS.network;
    IWalletJS.enable().then((account) => {
      if(account){
        document.getElementById("iwallet-account").innerHTML = account;
        //const iost = IWalletJS.newIOST(IOST);
        //console.log(iost);
      } else {
        document.getElementById("iwallet-account").innerHTML = 'please import account';
      }
    }).catch((error) => {
      document.getElementById("iwallet-account").innerHTML = error.type;
    })
  } catch(error) {
    document.getElementById("iwallet-network").innerHTML = error.message + '. Please install <a href="https://github.com/iost-official/iost-extension/releases">IWallet</a>.'
  }
}
</script>

{% highlight html %}
<button onclick="iwallet_account()">IWallet Account</button>
<p>Network: <span id="iwallet-network"></span></p>
<p>Account: <span id="iwallet-account"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function iwallet_account() {
  try {
    document.getElementById("iwallet-network").innerHTML = IWalletJS.network;
    IWalletJS.enable().then((account) => {
      if(account){
        document.getElementById("iwallet-account").innerHTML = account;
        //const iost = IWalletJS.newIOST(IOST);
        //console.log(iost);
      } else {
        document.getElementById("iwallet-account").innerHTML = 'please import account';
      }
    }).catch((error) => {
      document.getElementById("iwallet-account").innerHTML = error.type;
    })
  } catch(error) {
    document.getElementById("iwallet-network").innerHTML = error.message + '. Please install <a href="https://github.com/iost-official/iost-extension/releases">IWallet</a>.'
  }
}
</script>
{% endhighlight %}

<br />

<p>Beyond here use IOST JS SDK:</p>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/iost@0.1.22/dist/iost.min.js"></script>

{% highlight html %}
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/iost@0.1.22/dist/iost.min.js"></script>
{% endhighlight %}

<h2>IWallet Send IOST</h2>
<button onclick="iwallet_send()">iwallet</button>

<script>
async function iwallet_send() {
  try {
    IWalletJS.enable().then((account) => {
      const iost = IWalletJS.newIOST(IOST);
      const fromAccount = account;
      const toAccount = "0donation0";
      const amount = "0.1";
      const memo = "put memo here";
      const tx = iost.callABI(
        "token.iost",
        "transfer",
        ["iost", fromAccount, toAccount, amount, memo]
      );
      tx.addApprove('iost', amount);
      iost.signAndSend(tx)
      .on('pending', (pending) => {
        console.log(pending)
      })
      .on('success', (result) => {
        console.log(result)
      })
      .on('failed', (failed) => {
        console.log(failed)
      })
    }).catch((error) => {
      console.log(error);
    })
  } catch(error) {
    console.log(error + '. Please install <a href="https://github.com/iost-official/iost-extension/releases">IWallet</a>.')
  }
}
</script>

{% highlight html %}
<button onclick="iwallet_send()">iwallet</button>
{% endhighlight %}

{% highlight javascript %}
<script>
async function iwallet_send() {
  try {
    IWalletJS.enable().then((account) => {
      const iost = IWalletJS.newIOST(IOST);
      const fromAccount = account;
      const toAccount = "0donation0";
      const amount = "0.1";
      const memo = "put memo here";
      const tx = iost.callABI(
        "token.iost",
        "transfer",
        ["iost", fromAccount, toAccount, amount, memo]
      );
      tx.addApprove('iost', amount);
      iost.signAndSend(tx)
      .on('pending', (pending) => {
        console.log(pending)
      })
      .on('success', (result) => {
        console.log(result)
      })
      .on('failed', (failed) => {
        console.log(failed)
      })
    }).catch((error) => {
      console.log(error);
    })
  } catch(error) {
    console.log(error + '. Please install <a href="https://github.com/iost-official/iost-extension/releases">IWallet</a>.')
  }
}
</script>
{% endhighlight %}

<h1 id="ontology">Ontology</h1>

<h2>Reference</h2>
<ul>
  <li><a href="https://developer.ont.io/">Ontology Developer Center</a></li>
  <li><a href="https://github.com/ontio/ontology-dapi">Ontologi DAPI</a></li>
  <li><a href="https://github.com/backslash47/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki#Components">OEP-6 Media Wiki</a></li>
</ul>

<p>Ontology DAPI JavaScript can be compiled from its Github using NodeJS but I prepared my compilation on my Github if you do not want to compile yourself:</p>

<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/ontology-dapi/browser.js"></script>

{% highlight html %}
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/ontology-dapi/browser.js"></script>
{% endhighlight %}

<h2>Get Account</h2>
<button onclick="ontology_get_account()">Get Account</button>
        
<p>Account: <span id="ontology-account"></span></p>
<p>ONT: <span id="ontology-ont"></span></p>
<p>ONG: <span id="ontology-ong"></span></p>

<script>
async function ontology_get_account() {
  try {
    const client = dApi.client;
    client.registerClient({});
    const account = await client.api.asset.getAccount();
    document.getElementById("ontology-account").innerHTML = account;

    const balance = await client.api.network.getBalance({ address: account });
    document.getElementById("ontology-ont").innerHTML = balance.ONT;
    document.getElementById("ontology-ong").innerHTML = balance.ONG;
  } catch(error) {
    document.getElementById("ontology-account").innerHTML = error.message;
  }
}
</script>

{% highlight html %}
<button onclick="ontology_get_account()">Get Account</button>
        
<p>Account: <span id="ontology-account"></span></p>
<p>ONT: <span id="ontology-ont"></span></p>
<p>ONG: <span id="ontology-ong"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function ontology_get_account() {
  try {
    const client = dApi.client;
    client.registerClient({});
    const account = await client.api.asset.getAccount();
    document.getElementById("ontology-account").innerHTML = account;

    const balance = await client.api.network.getBalance({ address: account });
    document.getElementById("ontology-ont").innerHTML = balance.ONT;
    document.getElementById("ontology-ong").innerHTML = balance.ONG;
  } catch(error) {
    document.getElementById("ontology-account").innerHTML = error.message;
  }
}
</script>
{% endhighlight %}

<br />

<h2>Initialize Transfer</h2>
<button onclick="ontology_initialize_transfer()">Transfer</button>

<script>
async function ontology_initialize_transfer() {
    const client = dApi.client;
    client.registerClient({});
    const to = 'AZsLt6ZAH31KbwB4TjTc8jMnZvp1XdbWwk';
    const asset = 'ONG';
    const amount = 0.01 * 10**9;
    const result = await client.api.asset.send({ to, asset, amount });
    console.log(result);
}
</script>

{% highlight html %}
<button onclick="ontology_initialize_transfer()">Transfer</button>
{% endhighlight %}

{% highlight javascript %}
<script>
async function ontology_initialize_transfer() {
    const client = dApi.client;
    client.registerClient({});
    const to = 'AZsLt6ZAH31KbwB4TjTc8jMnZvp1XdbWwk';
    const asset = 'ONG';
    const amount = 0.01 * 10**9;
    const result = await client.api.asset.send({ to, asset, amount });
    console.log(result);
}
</script>
{% endhighlight %}

<br />

<p>Repository: <a href="http://mellow.link/3c59D">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-01-web3-source-code-collection.md</a></p>