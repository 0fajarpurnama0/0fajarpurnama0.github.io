---
layout: post
title: Web3 Simple Widgets
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source]
featuredimage: https://images.hive.blog/DQma5YvWPusmDNDhsm64yahiJtGd5o2i2h9eJMFM2hhg1zq/add-uniswap-token-button.png
description: My custom simple widgets JS and Web3 source codes.
canonicalurl: 
---
<h1>Table of Contents</h1>
<ul>
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
</ul>

<h1 id="ethereumvirtualmachines">Ethereum Virtual Machines</h1>

<h2>Estimate Gas Limit</h2>
<button onclick="estgaslimit()">Estimate ⛽ Limit</button>
<p>Recipient: <input type="text" id="recipient" name="recipient" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/></p>
<p>Amount: <input type="number" id="amount" name="amount" value="1"/></p>
<p>Gas Limit Hexadecimal: <span id="gas-limit-hexadecimal"></span></p>
<p>Gas Limit: <span id="gas-limit"></span></p>

<script>
async function estgaslimit() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  
  document.getElementById("recipient").addEventListener("change", changerecipientinput);

  let recipient = document.getElementById("recipient").value;

  function changerecipientinput() {
      recipient = document.getElementById("recipient").value;
  }

  document.getElementById("amount").addEventListener("change", changeamountinput);

  let amount = "0x" + (parseFloat(document.getElementById("amount").value)*10 ** 18).toString(16);
  
  function changeamountinput() {
	amount = "0x" + (parseFloat(document.getElementById("amount").value)*10 ** 18).toString(16);
}
  
  let params = [{"from": account, "to": recipient, "value": amount}]
  
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
<p>Recipient: <input type="text" id="recipient" name="recipient" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/></p>
<p>Amount: <input type="number" id="amount" name="amount" value="1"/></p>
<p>Gas Limit Hexadecimal: <span id="gas-limit-hexadecimal"></span></p>
<p>Gas Limit: <span id="gas-limit"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
async function estgaslimit() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  
  document.getElementById("recipient").addEventListener("change", changerecipientinput);

  let recipient = document.getElementById("recipient").value;

  function changerecipientinput() {
      recipient = document.getElementById("recipient").value;
  }

  document.getElementById("amount").addEventListener("change", changeamountinput);

  let amount = "0x" + (parseFloat(document.getElementById("amount").value)*10 ** 18).toString(16);
  
  function changeamountinput() {
	amount = "0x" + (parseFloat(document.getElementById("amount").value)*10 ** 18).toString(16);
}
  
  let params = [{"from": account, "to": recipient, "value": amount}]
  
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
<br />
Recipient: <input type="text" id="recipient1" name="recipient1" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/>
<br />
Amount: <input type="number" id="amount1" name="amount1" value="0"/>
<br />

<script>
document.getElementById("recipient1").addEventListener("change", changerecipient1input);

let recipient1 = document.getElementById("recipient1").value;

function changerecipient1input() {
	recipient1 = document.getElementById("recipient1").value;
}

document.getElementById("amount1").addEventListener("change", changeamount1input);

let amount1 = "0x" + (parseFloat(document.getElementById("amount1").value)*10 ** 18).toString(16);

function changeamount1input() {
	amount1 = "0x" + (parseFloat(document.getElementById("amount1").value)*10 ** 18).toString(16);
}

//Sending Ethereum to an address
async function sendeth() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  params = [
        {
          from: accounts[0],
          to: recipient1,
          value: amount1,
          gasPrice: await ethereum.request({method: 'eth_gasPrice', params: []}),
          gas: '' //auto,
        },
      ];
  
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.log(error));
}
</script>

{% highlight html %}
<button onclick="sendeth()">Send Native Asset</button>
<br />
Recipient: <input type="text" id="recipient1" name="recipient1" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/>
<br />
Amount: <input type="number" id="amount1" name="amount1" value="0"/>
<br />
{% endhighlight %}

{% highlight javascript %}
<script>
document.getElementById("recipient1").addEventListener("change", changerecipient1input);

let recipient1 = document.getElementById("recipient1").value;

function changerecipient1input() {
	recipient1 = document.getElementById("recipient1").value;
}

document.getElementById("amount1").addEventListener("change", changeamount1input);

let amount1 = "0x" + (parseFloat(document.getElementById("amount1").value)*10 ** 18).toString(16);

function changeamount1input() {
	amount1 = "0x" + (parseFloat(document.getElementById("amount1").value)*10 ** 18).toString(16);
}

//Sending Ethereum to an address
async function sendeth() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  params = [
        {
          from: accounts[0],
          to: recipient1,
          value: amount1,
          gasPrice: await ethereum.request({method: 'eth_gasPrice', params: []}),
          gas: '' //auto,
        },
      ];
  
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.log(error));
}
</script>
{% endhighlight %}

<br />

<h2 id="sendmessagetoanevmaddress">Send Message to an EVM Address</h2>
<button onclick="sendmsg()">Send Message</button>
<br />
Recipient: <input type="text" id="recipientmsg" name="recipientmsg" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/>
<br />
<textarea id="message" rows="4" cols="50" name="message" value="Enter Message">Enter Message</textarea>
<br />
Amount: <input type="number" id="amountmsg" name="amountmsg" value="0"/>
<br />

<script>
document.getElementById("recipientmsg").addEventListener("change", changerecipientmsginput);

let recipient = document.getElementById("recipientmsg").value;

function changerecipientmsginput() {
	recipient = document.getElementById("recipientmsg").value;
}

function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++) {
    	var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

document.getElementById("message").addEventListener("change", changemessageinput);

let message = "0x" + ascii_to_hex(document.getElementById("message").value);

function changemessageinput() {
	message = "0x" + ascii_to_hex(document.getElementById("message").value);
	console.log(message);
}

document.getElementById("amountmsg").addEventListener("change", changeamountmsginput);

let amount = "0x" + (parseFloat(document.getElementById("amountmsg").value)*10 ** 18).toString(16);

function changeamountmsginput() {
	amount = "0x" + (parseFloat(document.getElementById("amountmsg").value)*10 ** 18).toString(16);
}

//Sending Ethereum to an address
async function sendmsg() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  params = [
        {
          from: accounts[0],
          to: recipient,
          value: amount,
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
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
}
</script>

{% highlight html %}
<button onclick="sendmsg()">Send Message</button>
<br />
Recipient: <input type="text" id="recipientmsg" name="recipientmsg" value="0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB"/>
<br />
<textarea id="message" rows="4" cols="50" name="message" value="Enter Message">Enter Message</textarea>
<br />
Amount: <input type="number" id="amountmsg" name="amountmsg" value="0"/>
<br />
{% endhighlight %}

{% highlight javascript %}
<script>
document.getElementById("recipientmsg").addEventListener("change", changerecipientmsginput);

let recipient = document.getElementById("recipientmsg").value;

function changerecipientmsginput() {
	recipient = document.getElementById("recipientmsg").value;
}

function ascii_to_hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++) {
    	var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

document.getElementById("message").addEventListener("change", changemessageinput);

let message = "0x" + ascii_to_hex(document.getElementById("message").value);

function changemessageinput() {
	message = "0x" + ascii_to_hex(document.getElementById("message").value);
	console.log(message);
}

document.getElementById("amountmsg").addEventListener("change", changeamountmsginput);

let amount = "0x" + (parseFloat(document.getElementById("amountmsg").value)*10 ** 18).toString(16);

function changeamountmsginput() {
	amount = "0x" + (parseFloat(document.getElementById("amountmsg").value)*10 ** 18).toString(16);
}

//Sending Ethereum to an address
async function sendmsg() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  
  params = [
        {
          from: accounts[0],
          to: recipient,
          value: amount,
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
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
}
</script>
{% endhighlight %}

<br />

<h2>Get Balances on Multiple Chains Using a Single Web3 Wallet</h2>
	
<button onclick="gettokendexholders()">Get 0FP0EXP Token DEX Holders</button>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850" alt="Binance Smart Chain Logo"/>BSC <img style="height: 1em" src="https://assets.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png?1629359065" alt="Pancake Swap Logo"/><a href="https://pancakeswap.finance/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Pancake Swap:</a> <span id="pancake-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912" alt="Polygon Logo"/>Polygon <img style="height: 1em" src="https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659" alt="Quick Swap Logo"/><a href="https://quickswap.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Quick Swap</a>: <span id="quick-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818" alt="Avalanche Logo"/>Avalanche <img style="height: 1em" src="https://assets.coingecko.com/coins/images/14023/small/mXGnm3Eo_400x400.jpg?1644478963" alt="Pangolin DEX Logo"/><a href="https://app.pangolin.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Pangolin DEX</a>: <span id="pangolin-dex-holder"></span></p>
<p><img style="height: 1em" src="https://bridge.arbitrum.io/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg" alt="Arbitrum Logo"/>Arbitrum <img style="height: 1em" src="https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png?1606986688" alt="Sushi Swap Logo"/><a href="https://arbitrum.sushi.com/en/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Sushi Swap</a>: <span id="sushi-swap-holder"></span></p>
<p><img style="height: 1em" src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F1384322056-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FHVry7OTN1UZzjjhTeYXg%252Ficon%252FbEcQNGd1oiAjvoZ28Ek6%252FSymbol_Primary.png%3Falt%3Dmedia%26token%3Da606230a-2997-49ff-84b0-9797da6bb10a" alt="Thunder Core Logo"/><a href="https://ttswap.space/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">TT Swap</a>: <span id="tt-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/5795/small/3218.png?1604798557" alt="Energi Logo"/><a href="https://app.energiswap.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Energi Swap</a>: <span id="energi-swap-holder"></span></p>

<script>
function gettokendexholders() {
  const evmrpcjson = new XMLHttpRequest();
  evmrpcjson.onload = async function() {
    const chains = JSON.parse(this.responseText);
    await changenetworkandget(chains['bscmn'], 'pancake-swap-holder', '0x4527094fb24bb1642cf52386af4842be47031da1');
    await changenetworkandget(chains['maticmn'], 'quick-swap-holder', '0x60b32bdc995d4ad49ddcbb0728928ee115c3541b');
    await changenetworkandget(chains['avaxccmn'], 'pangolin-dex-holder', '0x23babaa2fc7170d741f5183c9689c70b28bc91fe');
    await changenetworkandget(chains['arbtrmmn'], 'sushi-swap-holder', '0xbc443f7212dc071ae71c6eff2b779fa139852a04');
    await changenetworkandget(chains['ttmn'], 'tt-swap-holder', '0x07a2701342444108ff30fd973ee4e4854bb085bb');
    await changenetworkandget(chains['energimn'], 'energi-swap-holder', '0x3998a06CDA1c57318C7aa430f42468a56081d060');
  }
  evmrpcjson.open("GET", "https://0fajarpurnama0.github.io/assets/json/evmrpc.json");
  evmrpcjson.send();
}

async function changenetworkandget(chain, dex, holder) {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain['params'][0].chainId }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        let params = chain['params'];
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params,
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
  getdextokenbalance(dex, holder);
}

async function getdextokenbalance(dex, holder) {
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
    
    const contract_address = "0x99a828fe0c1d68d9aebbb8651cdbdbac65dc6207";
    
    const erc20 = new ethers.Contract(contract_address, minabi, provider);
    
    const getBalance = await erc20.balanceOf(holder);
    
    document.getElementById(dex).innerHTML = getBalance/10**18;
}
</script>

{% highlight html %}
<button onclick="gettokendexholders()">Get 0FP0EXP Token DEX Holders</button>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850" alt="Binance Smart Chain Logo"/>BSC <img style="height: 1em" src="https://assets.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png?1629359065" alt="Pancake Swap Logo"/><a href="https://pancakeswap.finance/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Pancake Swap:</a> <span id="pancake-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912" alt="Polygon Logo"/>Polygon <img style="height: 1em" src="https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659" alt="Quick Swap Logo"/><a href="https://quickswap.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Quick Swap</a>: <span id="quick-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818" alt="Avalanche Logo"/>Avalanche <img style="height: 1em" src="https://assets.coingecko.com/coins/images/14023/small/mXGnm3Eo_400x400.jpg?1644478963" alt="Pangolin DEX Logo"/><a href="https://app.pangolin.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Pangolin DEX</a>: <span id="pangolin-dex-holder"></span></p>
<p><img style="height: 1em" src="https://bridge.arbitrum.io/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg" alt="Arbitrum Logo"/>Arbitrum <img style="height: 1em" src="https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png?1606986688" alt="Sushi Swap Logo"/><a href="https://arbitrum.sushi.com/en/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Sushi Swap</a>: <span id="sushi-swap-holder"></span></p>
<p><img style="height: 1em" src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F1384322056-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FHVry7OTN1UZzjjhTeYXg%252Ficon%252FbEcQNGd1oiAjvoZ28Ek6%252FSymbol_Primary.png%3Falt%3Dmedia%26token%3Da606230a-2997-49ff-84b0-9797da6bb10a" alt="Thunder Core Logo"/><a href="https://ttswap.space/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">TT Swap</a>: <span id="tt-swap-holder"></span></p>
<p><img style="height: 1em" src="https://assets.coingecko.com/coins/images/5795/small/3218.png?1604798557" alt="Energi Logo"/><a href="https://app.energiswap.exchange/#/swap?outputCurrency=0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207">Energi Swap</a>: <span id="energi-swap-holder"></span></p>
{% endhighlight %}

{% highlight javascript %}
<script>
function gettokendexholders() {
  const evmrpcjson = new XMLHttpRequest();
  evmrpcjson.onload = async function() {
    const chains = JSON.parse(this.responseText);
    await changenetworkandget(chains['bscmn'], 'pancake-swap-holder', '0x4527094fb24bb1642cf52386af4842be47031da1');
    await changenetworkandget(chains['maticmn'], 'quick-swap-holder', '0x60b32bdc995d4ad49ddcbb0728928ee115c3541b');
    await changenetworkandget(chains['avaxccmn'], 'pangolin-dex-holder', '0x23babaa2fc7170d741f5183c9689c70b28bc91fe');
    await changenetworkandget(chains['arbtrmmn'], 'sushi-swap-holder', '0xbc443f7212dc071ae71c6eff2b779fa139852a04');
    await changenetworkandget(chains['ttmn'], 'tt-swap-holder', '0x07a2701342444108ff30fd973ee4e4854bb085bb');
    await changenetworkandget(chains['energimn'], 'energi-swap-holder', '0x3998a06CDA1c57318C7aa430f42468a56081d060');
  }
  evmrpcjson.open("GET", "https://0fajarpurnama0.github.io/assets/json/evmrpc.json");
  evmrpcjson.send();
}

async function changenetworkandget(chain, dex, holder) {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain['params'][0].chainId }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        let params = chain['params'];
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params,
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
  getdextokenbalance(dex, holder);
}

async function getdextokenbalance(dex, holder) {
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
    
    const contract_address = "0x99a828fe0c1d68d9aebbb8651cdbdbac65dc6207";
    
    const erc20 = new ethers.Contract(contract_address, minabi, provider);
    
    const getBalance = await erc20.balanceOf(holder);
    
    document.getElementById(dex).innerHTML = getBalance/10**18;
}
</script>
{% endhighlight %}

<h1 id="solana">Solana</h1>

<p>Beyond here requires <a href="https://docs.solana.com/developing/clients/javascript-api">Solana Web3 JS</a>:</p>

<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>

{% highlight html %}
<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>
{% endhighlight %}

<br />

<h1 id="tron">Tron</h1>

<br />

<h1 id="stellar">Stellar</h1>

<p>For all Freighter use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>

{% highlight html %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>
{% endhighlight %}

<br />

<p>For all Stellar SDK use:</p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>

{% highlight html %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>
{% endhighlight %}

<br />

<h1 id="zilliqa">Zilliqa</h1>

<br />

<h1 id="neo">Neo</h2>

<br />

<h1 id="cosmosatom">Cosmos Atom</h1>

<br />

<h1 id="eos">EOS</h1>

<br />

<h1 id="near">Near</h1>

<h2>Near Wallet</h2>
<p>Requires:</p>

<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js"></script>

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js"></script>
{% endhighlight %}

<br />

<h1 id="waves">Waves</h1>

<br />

<h1 id="hive"></h1>

<br />

<h1 id="wax">Wax</h1>

<p>Wax JS vanilla JavaScript library is available at <a href="https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web">https://github.com/worldwide-asset-exchange/waxjs/tree/develop/dist-web</a>. Download to your local file or server or reupload to a CDN because this Github does not support script src. I upload them to github page as well if you need them:</p>

<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>

{% highlight html %}
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>
{% endhighlight %}

<br />

<h1 id="algorand">Algorand</h1>

<h2>MyAlgo Wallet</h2>
<p>Get the library on their Github:</p>

<script src="https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js"></script>

{% highlight html %}
<script src="https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js"></script>
{% endhighlight %}

<br />

<h1 id="vechain">Vechain</h1>

<p>Get the connex library:</p>

<script src="https://unpkg.com/@vechain/connex@2"></script>

{% highlight html %}
<script src="https://unpkg.com/@vechain/connex@2"></script>
{% endhighlight %}

<br />

<p>Repository: <a href="http://mellow.link/7xi0r">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-02-web3-simple-widgets.md</a></p>