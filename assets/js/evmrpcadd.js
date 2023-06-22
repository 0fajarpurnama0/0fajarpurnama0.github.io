const evmrpcjson = new XMLHttpRequest();
let chains;
const mainnet_list = document.getElementById("mainnet");
const testnet_list = document.getElementById("testnet");
const devnet_list = document.getElementById("devnet");
evmrpcjson.onload = function() {
    chains = JSON.parse(this.responseText);
    for (const chain in chains.mainnet) {
        if (chains.mainnet.hasOwnProperty.call(chains.mainnet, chain)) {
            mainnet_list.innerHTML += `<button class="button"><img  style="height: 1.5em; cursor: pointer;" onclick="show_chains('mainnet', '`+chain+`')" src="`+chains.mainnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.mainnet[chain]["params"][0]["chainName"]+`" /></button>`
        }
    }
    for (const chain in chains.testnet) {
        if (chains.testnet.hasOwnProperty.call(chains.testnet, chain)) {
            testnet_list.innerHTML += `<button class="button"><img  style="height: 1.5em; cursor: pointer;" onclick="show_chains('testnet', '`+chain+`')" src="`+chains.testnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.testnet[chain]["params"][0]["chainName"]+`" /></button>`
        }
    }
    for (const chain in chains.devnet) {
        if (chains.devnet.hasOwnProperty.call(chains.devnet, chain)) {
            devnet_list.innerHTML += `<button class="button"><img  style="height: 1.5em; cursor: pointer;" onclick="show_chains('devnet', '`+chain+`')" src="`+chains.devnet[chain]["params"][0]["iconUrls"][0]+`" alt="`+chains.devnet[chain]["params"][0]["chainName"]+`" /></button>`
        }
    }
}
evmrpcjson.open("GET", "{{ '/assets/json/evmrpc.json' | relative_url }}");
evmrpcjson.send();

function show_chains(net, chain) {
    document.getElementById("add_rpc_endpoint").innerHTML = `<button id="add_rpc_endpoint_button"><img  style="height: 1.5em;" src="{{ /assets/images/icon/crypto/metamask-fox.svg | relative_url }}" onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg';"/></button>`;
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