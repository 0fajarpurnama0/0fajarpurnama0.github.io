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
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f7f9fa;
    margin: 0;
    padding: 0;
    color: #222;
}

#refresh-button {
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

#refresh-button:hover {
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
}body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f7f9fa;
    margin: 0;
    padding: 0;
    color: #222;
}

#refresh-button {
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

#refresh-button:hover {
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
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<button id="refresh-button">Refresh</button>
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
<div id="chains-container"></div>
<div id="loader"></div>
<div id="status-message"></div>
Try RPC URL: <input id="tryRPCURL" type="text" placeholder="https://eth.llamarpc.com" />
<div id="trial"></div>

<script>
const sortByCategory = document.getElementById("sort-by-category");
const sortByFrom = document.getElementById("sort-by-from");
const chainsContainer = document.getElementById("chains-container");
const refreshButton = document.getElementById("refresh-button");
const statusMessage = document.getElementById("status-message");
const units = document.getElementById("units");
const loader = document.getElementById("loader");
const tryRPCURL = document.getElementById("tryRPCURL");
const trial = document.getElementById("trial");

let gasPriceData = [];

async function generateGasPriceData() {
  let rpcUrls = await getRPCURLsFromJson();
  let theGasPriceWei = 0;
  let themaxPriorityFeePerGasWei = 0;
  let theBaseFeeWei = 0;
  for (const network in rpcUrls) {
    for (const item in rpcUrls[network]) {
      try {
        const theGasPrice = await getGasPrice(
          rpcUrls[network][item]["params"][0]["rpcUrls"][0]
        );
        theGasPriceWei = parseInt(theGasPrice, 16)
          ? parseInt(theGasPrice, 16)
          : 0;
      } catch (error) {
        console.error(
          `Error fetching gas price for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}`
        );
        // Optionally, you can update the status message or log the error
        statusMessage.innerHTML += `Error fetching gas price for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}<br>`;
        theGasPriceWei = error;
      }
      try {
        const themaxPriorityFeePerGas = await getMaxPriorityFeePerGas(
          rpcUrls[network][item]["params"][0]["rpcUrls"][0]
        );
        themaxPriorityFeePerGasWei = parseInt(themaxPriorityFeePerGas, 16)
          ? parseInt(themaxPriorityFeePerGas, 16)
          : 0;
      } catch (error) {
        console.error(
          `Error fetching max priority fee for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}`
        );
        // Optionally, you can update the status message or log the error
        statusMessage.innerHTML += `Error fetching max priority fee for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}<br>`;
        themaxPriorityFeePerGasWei = error;
      }
      try {
        const theBaseFee = await getBaseFee(
          rpcUrls[network][item]["params"][0]["rpcUrls"][0]
        );
        theBaseFeeWei = parseInt(theBaseFee, 16) ? parseInt(theBaseFee, 16) : 0;
      } catch (error) {
        console.error(
          `Error fetching base fee for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}`
        );
        // Optionally, you can update the status message or log the error
        statusMessage.innerHTML += `Error fetching base fee for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}<br>`;
        theBaseFeeWei = error;
      }
      gasPriceData.push({
        chainName: rpcUrls[network][item]["params"][0]["chainName"],
        gasPriceWei: theGasPriceWei,
        maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
        baseFeeWei: theBaseFeeWei
      });
      printGasPriceData({
        chainName: rpcUrls[network][item]["params"][0]["chainName"],
        gasPriceWei: theGasPriceWei,
        maxPriorityFeePerGasWei: themaxPriorityFeePerGasWei,
        baseFeeWei: theBaseFeeWei
      }, "chains-container");
    }
  }
  console.log("Gas price data generated:", gasPriceData);
}

refreshButton.addEventListener("click", async () => {
  loader.style.display = "inline-block";
  gasPriceData = [];
  await generateGasPriceData();
  loader.style.display = "none";
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
        return from === "ascending"
          ? a.gasPriceWei - b.gasPriceWei
          : b.gasPriceWei - a.gasPriceWei;
      });
    } else if (category === "chainName") {
      gasPriceData.sort((a, b) => {
        return from === "ascending"
          ? a.chainName.localeCompare(b.chainName)
          : b.chainName.localeCompare(a.chainName);
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

async function getGasPrice(providerEndpoint) {
  const response = await fetch(providerEndpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_gasPrice",
      params: []
    })
  });
  const data = await response.json();
  return data.result;
}

async function getMaxPriorityFeePerGas(providerEndpoint) {
  const response = await fetch(providerEndpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_maxPriorityFeePerGas",
      params: []
    })
  });
  const data = await response.json();
  return data.result;
}

async function getBaseFee(providerEndpoint) {
  const response = await fetch(providerEndpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["latest", false]
    })
  });
  const data = await response.json();
  return data.result;
}

async function getRPCURLsFromJson() {
  const response = await fetch(
    "/assets/json/evmrpc.json"
  );
  const RPCURLs = await response.json();
  return RPCURLs;
}

tryRPCURL.addEventListener("change", async (event) => {
  const GasPrice = await getGasPrice(event.target.value);
  const MaxPriorityFeePerGas = await getMaxPriorityFeePerGas(event.target.value);
  const BaseFee = await getBaseFee(event.target.value);
  trial.innerHTML = `Gas Price Wei: ${parseInt(GasPrice, 16)} <br> Max Priority Fee Per Gas Wei: ${parseInt(MaxPriorityFeePerGas, 16)} <br> Base Fee Wei: ${parseInt(BaseFee, 16)}`;
});
</script>

{% highlight html %}
<style>
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f7f9fa;
    margin: 0;
    padding: 0;
    color: #222;
}

#refresh-button {
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

#refresh-button:hover {
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
}body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f7f9fa;
    margin: 0;
    padding: 0;
    color: #222;
}

#refresh-button {
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

#refresh-button:hover {
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
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<button id="refresh-button">Refresh</button>
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
<div id="chains-container"></div>
<div id="loader"></div>
<div id="status-message"></div>

<script>
const sortByCategory = document.getElementById('sort-by-category');
const sortByFrom = document.getElementById('sort-by-from');
const chainsContainer = document.getElementById('chains-container');
const refreshButton = document.getElementById('refresh-button');
const statusMessage = document.getElementById('status-message');
const units = document.getElementById('units');
const loader = document.getElementById('loader');

let gasPriceData = [];

async function generateGasPriceData() {
  let rpcUrls = await getRPCURLsFromJson();
    try {
        for (const network in rpcUrls) {
          for (const item in rpcUrls[network]) {
            try {
                const theGasPrice = await getGasPrice(rpcUrls[network][item]["params"][0]["rpcUrls"][0]);
                const theGasPriceWei = parseInt(theGasPrice, 16) ? parseInt(theGasPrice, 16) : 0;
                const themaxPriorityFeePerGas = await getMaxPriorityFeePerGas(rpcUrls[network][item]["params"][0]["rpcUrls"][0]);
                const themaxPriorityFeePerGasWei = parseInt(themaxPriorityFeePerGas, 16) ? parseInt(themaxPriorityFeePerGas, 16) : 0;
                const theBaseFee = await getBaseFee(rpcUrls[network][item]["params"][0]["rpcUrls"][0]);
                const theBaseFeeWei = parseInt(theBaseFee, 16) ? parseInt(theBaseFee, 16) : 0;
                gasPriceData.push({chainName : rpcUrls[network][item]["params"][0]["chainName"], gasPriceWei : theGasPriceWei, maxPriorityFeePerGasWei : themaxPriorityFeePerGasWei, baseFeeWei : theBaseFeeWei});
                printGasPriceData({chainName : rpcUrls[network][item]["params"][0]["chainName"], gasPriceWei : theGasPriceWei, maxPriorityFeePerGasWei : themaxPriorityFeePerGasWei, baseFeeWei : theBaseFeeWei}); 
            } catch (error) {
                console.error(`Error fetching gas price for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}`);
                // Optionally, you can update the status message or log the error
                gasPriceData.push({chainName : rpcUrls[network][item]["params"][0]["chainName"], gasPriceWei : error,  maxPriorityFeePerGasWei : error, baseFeeWeerror : error});
                printGasPriceData({chainName : rpcUrls[network][item]["params"][0]["chainName"], gasPriceWei : error, maxPriorityFeePerGasWei : error, baseFeeWei : error});
                statusMessage.innerHTML += `Error fetching gas price for ${rpcUrls[network][item]["params"][0]["chainName"]}: ${error}<br>`;
            }
          }
        }
        console.log('Gas price data generated:', gasPriceData);
    } catch (error) {
        statusMessage.innerHTML = 'Error sorting gas price data: '+ error;
    }  
}

refreshButton.addEventListener('click', async () => {
    loader.style.display = "inline-block";
    gasPriceData = [];
    await generateGasPriceData();
    loader.style.display = "none";
});

let categoryValue = 'gasPrice';
let fromValue = 'ascending';

sortByCategory.addEventListener('change', (event) => {
    categoryValue = event.target.value;
    sort(categoryValue, fromValue);
});

sortByFrom.addEventListener('change', (event) => {
    fromValue = event.target.value;
    sort(categoryValue, fromValue);
});

async function sort(category, from) {
    try {
        if (category === 'gasPrice') {
            gasPriceData.sort((a, b) => {
                return from === 'ascending' ? a.gasPriceWei - b.gasPriceWei : b.gasPriceWei - a.gasPriceWei;
            });
        } else if (category === 'chainName') {
            gasPriceData.sort((a, b) => {
                return from === 'ascending' ? a.chainName.localeCompare(b.chainName) : b.chainName.localeCompare(a.chainName);
            });
        }
        printGasPriceDataAll(gasPriceData, selectedUnit);
    } catch (error) {
        statusMessage.innerHTML = 'Error sorting gas price data: '+ error;
    }
}

let selectedUnit = units.value; // Default unit

units.addEventListener('change', (event) => {
    selectedUnit = event.target.value;
    printGasPriceDataAll(gasPriceData, selectedUnit);
});

function printGasPriceData(gasPriceData) {
    let gasPrice = gasPriceData.gasPriceWei;
    let maxPriorityFeePerGas = gasPriceData.maxPriorityFeePerGasWei;
    let baseFee = gasPriceData.baseFeeWei;
  
        const gasPriceRow = document.createElement('tr');
        gasPriceRow.innerHTML = `
            <td>${gasPriceData.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
        chainsContainer.appendChild(gasPriceRow);
}

function printGasPriceDataAll(gasPriceData, selectedUnit) {
    chainsContainer.innerHTML = ''; // Clear previous data
    const chainsHeader = document.createElement('tr');
    chainsHeader.className = 'chains-header';    
    chainsHeader.innerHTML = `
        <th>Chain Name</th>
        <th>Gas Price</th>
        <th>Max Priority Fee Per Gas</th>
        <th>Base Fee</th>
    `; // Add table headers
    chainsContainer.appendChild(chainsHeader); // Append header to the container
    let gasPrice;
    let maxPriorityFeePerGas
    let baseFee;

    gasPriceData.forEach(chain => {
        switch (selectedUnit) {
            case 'wei': gasPrice = chain.gasPriceWei; maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei; baseFee = chain.baseFeeWei; break;
            case 'gwei': gasPrice = chain.gasPriceWei / 1e9; maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e9; baseFee = chain.baseFeeWei / 1e9; break;
            case 'ether': gasPrice = chain.gasPriceWei / 1e18; maxPriorityFeePerGas = chain.maxPriorityFeePerGasWei / 1e18; baseFee = chain.baseFeeWei / 1e18; break;
            default: gasPrice = "undefined"; break;
        }
        const gasPriceRow = document.createElement('tr');
        gasPriceRow.innerHTML = `
            <td>${chain.chainName}</td>
            <td>${gasPrice}</td>
            <td>${maxPriorityFeePerGas}</td>
            <td>${baseFee}</td>
        `;
        chainsContainer.appendChild(gasPriceRow);
    });
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
    return data.result;
}

async function getRPCURLsFromJson(){
  const response = await fetch('https://0fajarpurnama0.github.io/assets/json/evmrpc.json');
  const RPCURLs = await response.json();
  return RPCURLs;
}
</script>
{% endhighlight %}