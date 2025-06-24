---
layout: post
title: Ethereum Virtual Machine Gas Dashboard
description: Will be all Ethereum Virtual Machine Gas Dashboard.
featuredimage: /assets/images/icon/johnny_automatic_NPS_map_pictographs_part_31.png
category: tools
tags: [tools, html css, js, rpc, json]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/12/evm-gas-dashboard
---
<style>
#refresh-button, #RPCURLsJSONTemplate {
    background: #0078d4;
    color: #fff;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 10px 20px 20px;
    font-size: 1rem;
    transition: background 0.2s;
}

#refresh-button:hover, #RPCURLsJSONTemplate:hover {
    background: #005fa3;
}

select {
    padding: 8px 12px;
    margin: 20px 10px 20px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background: #fff;
}

#chains-container {
    width: 95%;
    max-width: 800px;
    margin: 30px auto 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    overflow-x: auto;
    padding: 0 0 20px 0;
}

#chains-container tr {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    align-items: center;
    padding: 0 10px;
}

#chains-container tr:nth-child(1) {
    background: #e9eef2;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
}

#chains-container tr:not(:first-child) {
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
}

#chains-container tr:not(:first-child):hover {
    background: #f5faff;
}

#chains-container td, #chains-container th {
    padding: 12px 8px;
    text-align: left;
    font-size: 1rem;
    word-break: break-word;
}

#status-message {
    color: #d8000c;
    background: #fff4f4;
    border: 1px solid #ffd2d2;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 20px auto;
    width: 95%;
    max-width: 800px;
    font-size: 1rem;
}

@media (max-width: 600px) {
    #chains-container tr {
        grid-template-columns: 1fr 1fr;
        font-size: 0.95rem;
    }
    #chains-container td, #chains-container th {
        padding: 8px 4px;
    }
    #refresh-button, select {
        font-size: 0.95rem;
        padding: 8px 10px;
    }
}

#loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  display: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<button id="refresh-button">Get Gas Price</button>
<button id="RPCURLsJSONTemplate">RPC URLs JSON Template</button>
<label id="jsonFileInput">Insert your own RPC URLs: <input type="file" id="fileInput"></label>
<select id="units">
  <option value="wei">Wei</option>
  <option value="gwei">Gwei</option>
  <option value="ether">Ether</option>
</select>
<select id="sort-by-category">
  <option value="gasPrice">Gas Price</option>
  <option value="chainName">Chain Name</option>
</select>
<select id="sort-by-from">
  <option value="default">Sort By From</option>
  <option value="ascending">Ascending</option>
  <option value="descending">Descending</option>
</select>
<div id="chains-container">
  <table id="chains-table">
    <thead>
      <tr>
        <th>Chain Name</th>
        <th>Gas Price</th>
        <th>Max Priority Fee Per Gas</th>
        <th>Base Fee</th>
      </tr>
    </thead>
    <tbody id="chains-tbody">
      <!-- Chain data will be populated here -->
    </tbody>
  </table>
</div>
<div id="loader"></div>
<div id="status-message"></div>
Try RPC URL: <input id="tryRPCURL" type="text" placeholder="https://eth.llamarpc.com"></input>
<div id="trial"></div>

<script>
let rpcUrls = {};

async function getRPCURLsFromJson(jsonUrl) {
    const thejsonUrl = jsonUrl;
    const response = await fetch(
        thejsonUrl
    );
    const RPCURLs = await response.json();
    return RPCURLs;
}

let RPCURLsFrom0fajarpurnama0GithubJson;

window.onload = async function() {
    RPCURLsFrom0fajarpurnama0GithubJson = await getRPCURLsFromJson('https://0fajarpurnama0.github.io/assets/json/evmrpc.json');
    rpcUrls = {}; // Initialize rpcUrls object
    for (const item in RPCURLsFrom0fajarpurnama0GithubJson) {
        for (const subitem in RPCURLsFrom0fajarpurnama0GithubJson[item]) {
            rpcUrls[RPCURLsFrom0fajarpurnama0GithubJson[item][subitem]['params'][0]['chainName']] = RPCURLsFrom0fajarpurnama0GithubJson[item][subitem]['params'][0]['rpcUrls'][0];
        }
    }
    console.log(rpcUrls);
}

async function getGasPrice(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'jsonrpc': '2.0',
            'method': 'eth_gasPrice',
            'params': [],
        })
    });
    const data = await response.json();
    return data.result;
}

async function getMaxPriorityFeePerGas(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'jsonrpc': '2.0',
            'method': 'eth_maxPriorityFeePerGas',
            'params': [],
        })
    });
    const data = await response.json();
    return data.result;
}

async function getBaseFee(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "method": "eth_getBlockByNumber",
            "params": ["latest", false]
        })
    });
    const data = await response.json();
    return data.result ? data.result.baseFeePerGas : '0x0';
}

const sortByCategory = document.getElementById("sort-by-category");
const sortByFrom = document.getElementById("sort-by-from");
const chainsContainer = document.getElementById("chains-container");
const chainsTBody = document.getElementById("chains-tbody");
const refreshButton = document.getElementById("refresh-button");
const RPCURLsJSONTemplate = document.getElementById("RPCURLsJSONTemplate");
const fileInput = document.getElementById("fileInput");
const statusMessage = document.getElementById("status-message");
const units = document.getElementById("units");
const loader = document.getElementById("loader");
const tryRPCURL = document.getElementById("tryRPCURL");
const trial = document.getElementById("trial");

let gasPriceData = [];
let theGasPriceWei = 0;
let themaxPriorityFeePerGasWei = 0;
let theBaseFeeWei = 0;

async function generateGasPriceData() {
    try {
        for (const chainName in rpcUrls) {
            try {
                const theGasPrice = await getGasPrice(
                    rpcUrls[chainName]
                );
                theGasPriceWei = parseInt(theGasPrice, 16) ?
                    parseInt(theGasPrice, 16) :
                    0;
            } catch (error) {
                console.error(
                    `Error fetching gas price for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching gas price for ${chainName}: ${error}<br>`;
                theGasPriceWei = error;
            }
            try {
                const themaxPriorityFeePerGas = await getMaxPriorityFeePerGas(
                    rpcUrls[chainName]
                );
                themaxPriorityFeePerGasWei = parseInt(themaxPriorityFeePerGas, 16) ?
                    parseInt(themaxPriorityFeePerGas, 16) :
                    0;
            } catch (error) {
                console.error(
                    `Error fetching max priority fee for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching max priority fee for ${chainName}: ${error}<br>`;
                themaxPriorityFeePerGasWei = error;
            }
            try {
                const theBaseFee = await getBaseFee(
                    rpcUrls[chainName]
                );
                theBaseFeeWei = parseInt(theBaseFee, 16) ? parseInt(theBaseFee, 16) : 0;
            } catch (error) {
                console.error(
                    `Error fetching base fee for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching base fee for ${chainName}: ${error}<br>`;
                theBaseFeeWei = error;
            }
            gasPriceData.push({
                chainName: chainName,
                gasPriceWei: theGasPriceWei,
                maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
                baseFeeWei: theBaseFeeWei
            });
            printGasPriceData({
                chainName: chainName,
                gasPriceWei: theGasPriceWei,
                maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
                baseFeeWei: theBaseFeeWei
            }, "chains-tbody");
        }
        console.log('Gas price data generated:', gasPriceData);
    } catch (error) {
        statusMessage.innerHTML = 'Error sorting gas price data: ' + error;
    }
}

refreshButton.addEventListener("click", async () => {
    loader.style.display = "inline-block";
    chainsTBody.innerHTML = ""; // Clear previous data
    statusMessage.innerHTML = ""; // Clear previous status messages
    gasPriceData = [];
    await generateGasPriceData();
    loader.style.display = "none";
    refreshButton.innerHTML = "Refresh";
});

let categoryValue = "gasPrice";
let fromValue = "ascending";

sortByCategory.addEventListener("change", (event) => {
    categoryValue = event.target.value;
    sort(categoryValue, fromValue);
});

sortByFrom.addEventListener("change", (event) => {
    fromValue = event.target.value;
    sort(categoryValue, fromValue);
});

async function sort(category, from) {
    try {
        if (category === "gasPrice") {
            gasPriceData.sort((a, b) => {
                return from === "ascending" ?
                    a.gasPriceWei - b.gasPriceWei :
                    b.gasPriceWei - a.gasPriceWei;
            });
        } else if (category === "chainName") {
            gasPriceData.sort((a, b) => {
                return from === "ascending" ?
                    a.chainName.localeCompare(b.chainName) :
                    b.chainName.localeCompare(a.chainName);
            });
        }
        printGasPriceDataAll(gasPriceData, selectedUnit);
    } catch (error) {
        statusMessage.innerHTML = "Error sorting gas price data: " + error;
    }
}

let selectedUnit = units.value; // Default unit

units.addEventListener("change", (event) => {
    selectedUnit = event.target.value;
    printGasPriceDataAll(gasPriceData, selectedUnit);
});

function printGasPriceData(gasPriceData, theContainer) {
    const container = document.getElementById(theContainer);
    let gasPrice = gasPriceData.gasPriceWei;
    let maxPriorityFeePerGas = gasPriceData.maxPriorityFeePerGasWei;
    let baseFee = gasPriceData.baseFeeWei;

    const gasPriceRow = document.createElement("tr");
    gasPriceRow.innerHTML = `
            <td>${gasPriceData.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
    container.appendChild(gasPriceRow);
}

function printGasPriceDataAll(gasPriceData, selectedUnit) {
    chainsContainer.innerHTML = ""; // Clear previous data
    const chainsHeader = document.createElement("tr");
    chainsHeader.className = "chains-header";
    chainsHeader.innerHTML = `
        <th>Chain Name</th>
        <th>Gas Price</th>
        <th>Max Priority Fee Per Gas</th>
        <th>Base Fee</th>
    `; // Add table headers
    chainsContainer.appendChild(chainsHeader); // Append header to the container
    let gasPrice;
    let maxPriorityFeePerGas;
    let baseFee;

    gasPriceData.forEach((chain) => {
        switch (selectedUnit) {
            case "wei":
                gasPrice = chain.gasPriceWei;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei;
                baseFee = chain.baseFeeWei;
                break;
            case "gwei":
                gasPrice = chain.gasPriceWei / 1e9;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e9;
                baseFee = chain.baseFeeWei / 1e9;
                break;
            case "ether":
                gasPrice = chain.gasPriceWei / 1e18;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e18;
                baseFee = chain.baseFeeWei / 1e18;
                break;
            default:
                gasPrice = "undefined";
                break;
        }
        const gasPriceRow = document.createElement("tr");
        gasPriceRow.innerHTML = `
            <td>${chain.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
        chainsContainer.appendChild(gasPriceRow);
    });
}

tryRPCURL.addEventListener("change", async (event) => {
    const GasPrice = await getGasPrice(event.target.value);
    const MaxPriorityFeePerGas = await getMaxPriorityFeePerGas(event.target.value);
    const BaseFee = await getBaseFee(event.target.value);
    trial.innerHTML = `Gas Price Wei: ${parseInt(GasPrice, 16)} <br> Max Priority Fee Per Gas Wei: ${parseInt(MaxPriorityFeePerGas, 16)} <br> Base Fee Wei: ${parseInt(BaseFee, 16)}`;
});

RPCURLsJSONTemplate.addEventListener("click", async () => {
    const JSONRPCURLs = JSON.stringify(rpcUrls);
    const blob = new Blob([JSONRPCURLs], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "evmrpc.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const contents = e.target.result;
            try {
                const json = JSON.parse(contents);
                rpcUrls = json;
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };
        reader.readAsText(file);
    }
});
</script>

{% highlight html %}
<style>
#refresh-button, #RPCURLsJSONTemplate {
    background: #0078d4;
    color: #fff;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 10px 20px 20px;
    font-size: 1rem;
    transition: background 0.2s;
}

#refresh-button:hover, #RPCURLsJSONTemplate:hover {
    background: #005fa3;
}

select {
    padding: 8px 12px;
    margin: 20px 10px 20px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background: #fff;
}

#chains-container {
    width: 95%;
    max-width: 800px;
    margin: 30px auto 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    overflow-x: auto;
    padding: 0 0 20px 0;
}

#chains-container tr {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    align-items: center;
    padding: 0 10px;
}

#chains-container tr:nth-child(1) {
    background: #e9eef2;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
}

#chains-container tr:not(:first-child) {
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
}

#chains-container tr:not(:first-child):hover {
    background: #f5faff;
}

#chains-container td, #chains-container th {
    padding: 12px 8px;
    text-align: left;
    font-size: 1rem;
    word-break: break-word;
}

#status-message {
    color: #d8000c;
    background: #fff4f4;
    border: 1px solid #ffd2d2;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 20px auto;
    width: 95%;
    max-width: 800px;
    font-size: 1rem;
}

@media (max-width: 600px) {
    #chains-container tr {
        grid-template-columns: 1fr 1fr;
        font-size: 0.95rem;
    }
    #chains-container td, #chains-container th {
        padding: 8px 4px;
    }
    #refresh-button, select {
        font-size: 0.95rem;
        padding: 8px 10px;
    }
}

#loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  display: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<button id="refresh-button">Get Gas Price</button>
<button id="RPCURLsJSONTemplate">RPC URLs JSON Template</button>
<label id="jsonFileInput">Insert your own RPC URLs: <input type="file" id="fileInput"></label>
<select id="units">
  <option value="wei">Wei</option>
  <option value="gwei">Gwei</option>
  <option value="ether">Ether</option>
</select>
<select id="sort-by-category">
  <option value="gasPrice">Gas Price</option>
  <option value="chainName">Chain Name</option>
</select>
<select id="sort-by-from">
  <option value="default">Sort By From</option>
  <option value="ascending">Ascending</option>
  <option value="descending">Descending</option>
</select>
<div id="chains-container">
  <table id="chains-table">
    <thead>
      <tr>
        <th>Chain Name</th>
        <th>Gas Price</th>
        <th>Max Priority Fee Per Gas</th>
        <th>Base Fee</th>
      </tr>
    </thead>
    <tbody id="chains-tbody">
      <!-- Chain data will be populated here -->
    </tbody>
  </table>
</div>
<div id="loader"></div>
<div id="status-message"></div>
Try RPC URL: <input id="tryRPCURL" type="text" placeholder="https://eth.llamarpc.com"></input>
<div id="trial"></div>
{% endhighlight %}

{% highlight javascript %}
<script>
let rpcUrls = {};

async function getRPCURLsFromJson(jsonUrl) {
    const thejsonUrl = jsonUrl;
    const response = await fetch(
        thejsonUrl
    );
    const RPCURLs = await response.json();
    return RPCURLs;
}

let RPCURLsFrom0fajarpurnama0GithubJson;

window.onload = async function() {
    RPCURLsFrom0fajarpurnama0GithubJson = await getRPCURLsFromJson('/assets/json/evmrpc.json');
    rpcUrls = {}; // Initialize rpcUrls object
    for (const item in RPCURLsFrom0fajarpurnama0GithubJson) {
        for (const subitem in RPCURLsFrom0fajarpurnama0GithubJson[item]) {
            rpcUrls[RPCURLsFrom0fajarpurnama0GithubJson[item][subitem]['params'][0]['chainName']] = RPCURLsFrom0fajarpurnama0GithubJson[item][subitem]['params'][0]['rpcUrls'][0];
        }
    }
    console.log(rpcUrls);
}

async function getGasPrice(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'jsonrpc': '2.0',
            'method': 'eth_gasPrice',
            'params': [],
        })
    });
    const data = await response.json();
    return data.result;
}

async function getMaxPriorityFeePerGas(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'jsonrpc': '2.0',
            'method': 'eth_maxPriorityFeePerGas',
            'params': [],
        })
    });
    const data = await response.json();
    return data.result;
}

async function getBaseFee(providerEndpoint) {
    const response = await fetch(providerEndpoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "method": "eth_getBlockByNumber",
            "params": ["latest", false]
        })
    });
    const data = await response.json();
    return data.result ? data.result.baseFeePerGas : '0x0';
}

const sortByCategory = document.getElementById("sort-by-category");
const sortByFrom = document.getElementById("sort-by-from");
const chainsContainer = document.getElementById("chains-container");
const chainsTBody = document.getElementById("chains-tbody");
const refreshButton = document.getElementById("refresh-button");
const RPCURLsJSONTemplate = document.getElementById("RPCURLsJSONTemplate");
const fileInput = document.getElementById("fileInput");
const statusMessage = document.getElementById("status-message");
const units = document.getElementById("units");
const loader = document.getElementById("loader");
const tryRPCURL = document.getElementById("tryRPCURL");
const trial = document.getElementById("trial");

let gasPriceData = [];
let theGasPriceWei = 0;
let themaxPriorityFeePerGasWei = 0;
let theBaseFeeWei = 0;

async function generateGasPriceData() {
    try {
        for (const chainName in rpcUrls) {
            try {
                const theGasPrice = await getGasPrice(
                    rpcUrls[chainName]
                );
                theGasPriceWei = parseInt(theGasPrice, 16) ?
                    parseInt(theGasPrice, 16) :
                    0;
            } catch (error) {
                console.error(
                    `Error fetching gas price for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching gas price for ${chainName}: ${error}<br>`;
                theGasPriceWei = error;
            }
            try {
                const themaxPriorityFeePerGas = await getMaxPriorityFeePerGas(
                    rpcUrls[chainName]
                );
                themaxPriorityFeePerGasWei = parseInt(themaxPriorityFeePerGas, 16) ?
                    parseInt(themaxPriorityFeePerGas, 16) :
                    0;
            } catch (error) {
                console.error(
                    `Error fetching max priority fee for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching max priority fee for ${chainName}: ${error}<br>`;
                themaxPriorityFeePerGasWei = error;
            }
            try {
                const theBaseFee = await getBaseFee(
                    rpcUrls[chainName]
                );
                theBaseFeeWei = parseInt(theBaseFee, 16) ? parseInt(theBaseFee, 16) : 0;
            } catch (error) {
                console.error(
                    `Error fetching base fee for ${chainName}: ${error}`
                );
                // Optionally, you can update the status message or log the error
                statusMessage.innerHTML += `Error fetching base fee for ${chainName}: ${error}<br>`;
                theBaseFeeWei = error;
            }
            gasPriceData.push({
                chainName: chainName,
                gasPriceWei: theGasPriceWei,
                maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
                baseFeeWei: theBaseFeeWei
            });
            printGasPriceData({
                chainName: chainName,
                gasPriceWei: theGasPriceWei,
                maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
                baseFeeWei: theBaseFeeWei
            }, "chains-tbody");
        }
        console.log('Gas price data generated:', gasPriceData);
    } catch (error) {
        statusMessage.innerHTML = 'Error sorting gas price data: ' + error;
    }
}

refreshButton.addEventListener("click", async () => {
    loader.style.display = "inline-block";
    chainsTBody.innerHTML = ""; // Clear previous data
    statusMessage.innerHTML = ""; // Clear previous status messages
    gasPriceData = [];
    await generateGasPriceData();
    loader.style.display = "none";
    refreshButton.innerHTML = "Refresh";
});

let categoryValue = "gasPrice";
let fromValue = "ascending";

sortByCategory.addEventListener("change", (event) => {
    categoryValue = event.target.value;
    sort(categoryValue, fromValue);
});

sortByFrom.addEventListener("change", (event) => {
    fromValue = event.target.value;
    sort(categoryValue, fromValue);
});

async function sort(category, from) {
    try {
        if (category === "gasPrice") {
            gasPriceData.sort((a, b) => {
                return from === "ascending" ?
                    a.gasPriceWei - b.gasPriceWei :
                    b.gasPriceWei - a.gasPriceWei;
            });
        } else if (category === "chainName") {
            gasPriceData.sort((a, b) => {
                return from === "ascending" ?
                    a.chainName.localeCompare(b.chainName) :
                    b.chainName.localeCompare(a.chainName);
            });
        }
        printGasPriceDataAll(gasPriceData, selectedUnit);
    } catch (error) {
        statusMessage.innerHTML = "Error sorting gas price data: " + error;
    }
}

let selectedUnit = units.value; // Default unit

units.addEventListener("change", (event) => {
    selectedUnit = event.target.value;
    printGasPriceDataAll(gasPriceData, selectedUnit);
});

function printGasPriceData(gasPriceData, theContainer) {
    const container = document.getElementById(theContainer);
    let gasPrice = gasPriceData.gasPriceWei;
    let maxPriorityFeePerGas = gasPriceData.maxPriorityFeePerGasWei;
    let baseFee = gasPriceData.baseFeeWei;

    const gasPriceRow = document.createElement("tr");
    gasPriceRow.innerHTML = `
            <td>${gasPriceData.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
    container.appendChild(gasPriceRow);
}

function printGasPriceDataAll(gasPriceData, selectedUnit) {
    chainsContainer.innerHTML = ""; // Clear previous data
    const chainsHeader = document.createElement("tr");
    chainsHeader.className = "chains-header";
    chainsHeader.innerHTML = `
        <th>Chain Name</th>
        <th>Gas Price</th>
        <th>Max Priority Fee Per Gas</th>
        <th>Base Fee</th>
    `; // Add table headers
    chainsContainer.appendChild(chainsHeader); // Append header to the container
    let gasPrice;
    let maxPriorityFeePerGas;
    let baseFee;

    gasPriceData.forEach((chain) => {
        switch (selectedUnit) {
            case "wei":
                gasPrice = chain.gasPriceWei;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei;
                baseFee = chain.baseFeeWei;
                break;
            case "gwei":
                gasPrice = chain.gasPriceWei / 1e9;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e9;
                baseFee = chain.baseFeeWei / 1e9;
                break;
            case "ether":
                gasPrice = chain.gasPriceWei / 1e18;
                maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e18;
                baseFee = chain.baseFeeWei / 1e18;
                break;
            default:
                gasPrice = "undefined";
                break;
        }
        const gasPriceRow = document.createElement("tr");
        gasPriceRow.innerHTML = `
            <td>${chain.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
        chainsContainer.appendChild(gasPriceRow);
    });
}

tryRPCURL.addEventListener("change", async (event) => {
    const GasPrice = await getGasPrice(event.target.value);
    const MaxPriorityFeePerGas = await getMaxPriorityFeePerGas(event.target.value);
    const BaseFee = await getBaseFee(event.target.value);
    trial.innerHTML = `Gas Price Wei: ${parseInt(GasPrice, 16)} <br> Max Priority Fee Per Gas Wei: ${parseInt(MaxPriorityFeePerGas, 16)} <br> Base Fee Wei: ${parseInt(BaseFee, 16)}`;
});

RPCURLsJSONTemplate.addEventListener("click", async () => {
    const JSONRPCURLs = JSON.stringify(rpcUrls);
    const blob = new Blob([JSONRPCURLs], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "evmrpc.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const contents = e.target.result;
            try {
                const json = JSON.parse(contents);
                rpcUrls = json;
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };
        reader.readAsText(file);
    }
});
</script>
{% endhighlight %}