let chain_ids = [{

    chainId: "0x1",

    chainName: "Ethereum Main Network",

    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://rpc.ankr.com/eth"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/ethereum-eth-logo.svg", "https://cryptologos.cc/logos/ethereum-eth-logo.svg"],

    nativeCurrency: {

        "name": "Ethereum",

        "symbol": "ETH",

        "decimals": 18

    },

    blockExplorerUrls: ["https://etherscan.io/"]

},

{

    chainId: "0x38",

    chainName: "Binance Smart Chain Main Network",

    rpcUrls: ["https://bsc-mainnet.wallet.brave.com/", "https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/", "https://bsc-dataseed2.defibit.io/", "https://bsc-dataseed3.defibit.io/", "https://bsc-dataseed4.defibit.io/", "https://bsc-dataseed2.ninicoin.io/", "https://bsc-dataseed3.ninicoin.io/", "https://bsc-dataseed4.ninicoin.io/", "https://bsc-dataseed1.binance.org/", "https://bsc-dataseed2.binance.org/", "https://bsc-dataseed3.binance.org/", "https://bsc-dataseed4.binance.org/"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/bnb-bnb-logo.svg", "https://cryptologos.cc/logos/bnb-bnb-logo.svg"],

    nativeCurrency: {

        "name": "BSC",

        "symbol": "BNB",

        "decimals": 18

    },

    blockExplorerUrls: ["https://bscscan.com/"]

},

{

    chainId: "0xa4b1",

    chainName: "Arbitrum Main Network",

    rpcUrls: ["https://arb1.arbitrum.io/rpc"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/arbitrum-arb-logo.svg", "https://cryptologos.cc/logos/arbitrum-arb-logo.svg"],

    nativeCurrency: {

        "name": "Ethereum",

        "symbol": "ETH",

        "decimals": 18

    },

    blockExplorerUrls: ["https://arbiscan.io/"]

},

{

    chainId: "0xa86a",

    chainName: "Avalanche C Chain Main Network",

    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/avalanche-avax-logo.svg", "https://cryptologos.cc/logos/avalanche-avax-logo.svg"],

    nativeCurrency: {

        "name": "Avalanche",

        "symbol": "AVAX",

        "decimals": 18

    },

    blockExplorerUrls: ["https://snowtrace.io"]

},

{

    chainId: "0x89",

    chainName: "Polygon Main Network",

    rpcUrls: ["https://polygon-rpc.com"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/polygon-matic-logo.svg", "https://cryptologos.cc/logos/polygon-matic-logo.svg"],

    nativeCurrency: {

        "name": "Polygon",

        "symbol": "POL",

        "decimals": 18

    },

    blockExplorerUrls: ["https://polygonscan.com/"]

},

{

    chainId: "0x9b75",

    chainName: "Energi EVM Main Network",

    rpcUrls: ["https://nodeapi.energi.network/"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/nrg.webp", "https:/https://0fajarpurnama0.github.io/assets.coingecko.com/coins/images/5795/large/3218.png?1604798557"],

    nativeCurrency: {

        "name": "Energi",

        "symbol": "NRG",

        "decimals": 18

    },

    blockExplorerUrls: ["https://explorer.energi.network/"]

},

{

    chainId: "0x6c",

    chainName: "Thunder Core Main Network",

    rpcUrls: ["https://mainnet-rpc.thundercore.com/"],

    iconUrls: ["https://0fajarpurnama0.github.io/assets/images/icon/crypto/ThunderCore_Logo_Mark.png", "https://upload.wikimedia.org/wikipedia/commons/4/4e/ThunderCore_Logo_Mark.png"],

    nativeCurrency: {

        "name": "Thunder Core",

        "symbol": "TT",

        "decimals": 18

    },

    blockExplorerUrls: ["https://scan.thundercore.com/"]

}

];

let token_contract_address_evm_1 = "0x99a828fe0c1d68d9aebbb8651cdbdbac65dc6207";

let tokenabi_evm_1 = [{

    "inputs": [],

    "stateMutability": "nonpayable",

    "type": "constructor"

},

{

    "anonymous": false,

    "inputs": [{

            "indexed": true,

            "internalType": "address",

            "name": "owner",

            "type": "address"

        },

        {

            "indexed": true,

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "Approval",

    "type": "event"

},

{

    "anonymous": false,

    "inputs": [{

            "indexed": true,

            "internalType": "address",

            "name": "from",

            "type": "address"

        },

        {

            "indexed": true,

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "Transfer",

    "type": "event"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "owner",

            "type": "address"

        },

        {

            "internalType": "address",

            "name": "spender",

            "type": "address"

        }

    ],

    "name": "allowance",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "amount",

            "type": "uint256"

        }

    ],

    "name": "approve",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "account",

        "type": "address"

    }],

    "name": "balanceOf",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "decimals",

    "outputs": [{

        "internalType": "uint8",

        "name": "",

        "type": "uint8"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "subtractedValue",

            "type": "uint256"

        }

    ],

    "name": "decreaseAllowance",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "addedValue",

            "type": "uint256"

        }

    ],

    "name": "increaseAllowance",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [],

    "name": "name",

    "outputs": [{

        "internalType": "string",

        "name": "",

        "type": "string"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "symbol",

    "outputs": [{

        "internalType": "string",

        "name": "",

        "type": "string"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "totalSupply",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "amount",

            "type": "uint256"

        }

    ],

    "name": "transfer",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "from",

            "type": "address"

        },

        {

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "amount",

            "type": "uint256"

        }

    ],

    "name": "transferFrom",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

}

]

let ico_contract_address_avax_c_chain_0 = "0x1909f937E3c0Cf3d21E1379695b732C0Ff852960";

let ico_contract_address_avax_c_chain_1 = "0x0E9BE6ba93388610086e9159b2A70D93b78b4A6E";

let ico_contract_address_polygon_1 = "0x7a915b5ffa6463b529bcf3762a4653536fa00c40";

let ico_contract_address_ethereum_1 = "0xACab6874a9861a0b16669f9fC57b805C5F860ad3";

let ico_contract_address_arbitrum_1 = "0xACab6874a9861a0b16669f9fC57b805C5F860ad3";

let ico_contract_address_bsc_1 = "0xacab6874a9861a0b16669f9fc57b805c5f860ad3";

let ico_contract_address_nrg_evm_1 = "0x1909f937E3c0Cf3d21E1379695b732C0Ff852960";

let ico_contract_address_tt_1 = "0x7A915b5FFa6463B529bCf3762A4653536FA00C40";



let icoabi_evm_1 = [{

    "inputs": [{

            "internalType": "string",

            "name": "name",

            "type": "string"

        },

        {

            "internalType": "string",

            "name": "symbol",

            "type": "string"

        },

        {

            "internalType": "contract ERC20",

            "name": "_token",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "_rate",

            "type": "uint256"

        },

        {

            "internalType": "address payable",

            "name": "_wallet",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "_openingTime",

            "type": "uint256"

        },

        {

            "internalType": "uint256",

            "name": "_closingTime",

            "type": "uint256"

        }

    ],

    "stateMutability": "nonpayable",

    "type": "constructor"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "allowance",

            "type": "uint256"

        },

        {

            "internalType": "uint256",

            "name": "needed",

            "type": "uint256"

        }

    ],

    "name": "ERC20InsufficientAllowance",

    "type": "error"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "sender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "balance",

            "type": "uint256"

        },

        {

            "internalType": "uint256",

            "name": "needed",

            "type": "uint256"

        }

    ],

    "name": "ERC20InsufficientBalance",

    "type": "error"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "approver",

        "type": "address"

    }],

    "name": "ERC20InvalidApprover",

    "type": "error"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "receiver",

        "type": "address"

    }],

    "name": "ERC20InvalidReceiver",

    "type": "error"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "sender",

        "type": "address"

    }],

    "name": "ERC20InvalidSender",

    "type": "error"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "spender",

        "type": "address"

    }],

    "name": "ERC20InvalidSpender",

    "type": "error"

},

{

    "anonymous": false,

    "inputs": [{

            "indexed": true,

            "internalType": "address",

            "name": "owner",

            "type": "address"

        },

        {

            "indexed": true,

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "Approval",

    "type": "event"

},

{

    "anonymous": false,

    "inputs": [{

            "indexed": true,

            "internalType": "address",

            "name": "buyer",

            "type": "address"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "amount",

            "type": "uint256"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "tokens",

            "type": "uint256"

        }

    ],

    "name": "BuyTokens",

    "type": "event"

},

{

    "anonymous": false,

    "inputs": [{

            "indexed": true,

            "internalType": "address",

            "name": "from",

            "type": "address"

        },

        {

            "indexed": true,

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "indexed": false,

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "Transfer",

    "type": "event"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "owner",

            "type": "address"

        },

        {

            "internalType": "address",

            "name": "spender",

            "type": "address"

        }

    ],

    "name": "allowance",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "spender",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "approve",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [{

        "internalType": "address",

        "name": "account",

        "type": "address"

    }],

    "name": "balanceOf",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "buyTokens",

    "outputs": [],

    "stateMutability": "payable",

    "type": "function"

},

{

    "inputs": [],

    "name": "closingTime",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "decimals",

    "outputs": [{

        "internalType": "uint8",

        "name": "",

        "type": "uint8"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "isOpen",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "name",

    "outputs": [{

        "internalType": "string",

        "name": "",

        "type": "string"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "openingTime",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "rate",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "symbol",

    "outputs": [{

        "internalType": "string",

        "name": "",

        "type": "string"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "token",

    "outputs": [{

        "internalType": "contract ERC20",

        "name": "",

        "type": "address"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "totalSupply",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "transfer",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [{

            "internalType": "address",

            "name": "from",

            "type": "address"

        },

        {

            "internalType": "address",

            "name": "to",

            "type": "address"

        },

        {

            "internalType": "uint256",

            "name": "value",

            "type": "uint256"

        }

    ],

    "name": "transferFrom",

    "outputs": [{

        "internalType": "bool",

        "name": "",

        "type": "bool"

    }],

    "stateMutability": "nonpayable",

    "type": "function"

},

{

    "inputs": [],

    "name": "wallet",

    "outputs": [{

        "internalType": "address payable",

        "name": "",

        "type": "address"

    }],

    "stateMutability": "view",

    "type": "function"

},

{

    "inputs": [],

    "name": "weiRaised",

    "outputs": [{

        "internalType": "uint256",

        "name": "",

        "type": "uint256"

    }],

    "stateMutability": "view",

    "type": "function"

}

];



let icoabi_old_evm_1 = [

	{

		"inputs": [],

		"stateMutability": "nonpayable",

		"type": "constructor"

	},

	{

		"anonymous": false,

		"inputs": [

			{

				"indexed": true,

				"internalType": "address",

				"name": "buyer",

				"type": "address"

			},

			{

				"indexed": false,

				"internalType": "uint256",

				"name": "amount",

				"type": "uint256"

			},

			{

				"indexed": false,

				"internalType": "uint256",

				"name": "tokens",

				"type": "uint256"

			}

		],

		"name": "BuyTokens",

		"type": "event"

	},

	{

		"inputs": [],

		"name": "buyTokens",

		"outputs": [],

		"stateMutability": "payable",

		"type": "function"

	},

	{

		"inputs": [],

		"name": "rate",

		"outputs": [

			{

				"internalType": "uint256",

				"name": "",

				"type": "uint256"

			}

		],

		"stateMutability": "view",

		"type": "function"

	},

	{

		"inputs": [],

		"name": "token",

		"outputs": [

			{

				"internalType": "contract IERC20",

				"name": "",

				"type": "address"

			}

		],

		"stateMutability": "view",

		"type": "function"

	},

	{

		"inputs": [],

		"name": "tokenSold",

		"outputs": [

			{

				"internalType": "uint256",

				"name": "",

				"type": "uint256"

			}

		],

		"stateMutability": "view",

		"type": "function"

	},

	{

		"inputs": [],

		"name": "wallet",

		"outputs": [

			{

				"internalType": "address payable",

				"name": "",

				"type": "address"

			}

		],

		"stateMutability": "view",

		"type": "function"

	},

	{

		"inputs": [],

		"name": "weiRaised",

		"outputs": [

			{

				"internalType": "uint256",

				"name": "",

				"type": "uint256"

			}

		],

		"stateMutability": "view",

		"type": "function"

	}

]

let account;

async function connect() {

	try {

		const accounts = await ethereum.request({

			method: 'eth_requestAccounts'

		});

		account = accounts[0];



		if (ethereum.isConnected()) {

			document.getElementById("connect").innerHTML = account;

			document.getElementById("purchase_interface").style.display = "block";

			get_chain_id();

			getnativebalance(account);

		}

	} catch (error) {

		document.getElementById("status").innerHTML = error + "<br> Please install EVM wallet and accept connection request";

	}

}



ethereum.on('accountsChanged', connect);



ethereum.on("chainChanged", get_chain_id);



async function get_chain_id() {

	try {

		let chainId = await ethereum.request({

			method: "eth_chainId"

		});

		chain_ids.forEach(element => {

			if (chainId == element.chainId) {

				document.getElementById("showChainID").innerHTML = `<img style="max-height:1.5em; cursor: pointer;" src="` + element.iconUrls[0] + `" alt=""/> change chain?`;

				document.getElementById("currency_name").innerHTML = element.nativeCurrency.symbol;

			}

		});

		getnativebalance(account);

		ico_smart_contract_interface(chainId);	

	} catch (error) {

		document.getElementById("status").innerHTML = error;

		

	}

}



async function getnativebalance(_account) {

	try {

		const account = _account;

		let balance = await ethereum.request({

			method: 'eth_getBalance',

			params: [account, "latest"]

		});

		document.getElementById("native-balance").innerHTML = parseInt(balance, 16) / Math.pow(10, 18);	

	} catch (error) {

		document.getElementById("status").innerHTML = error;

		

	}

}



function chainid_menu() {

	if (getComputedStyle(document.getElementById("chainid_menu")).display != "none") {

		document.getElementById("chainid_menu").style.display = "none";

	} else {

		document.getElementById("chainid_menu").style.display = "block";

	}

}



for (let index = 0; index < chain_ids.length; index++) {

	document.getElementById("chainids_list").innerHTML += `

    <div style="cursor: pointer;" onclick="changenetwork(` + index + `); chainid_menu()">

    <img src="` + chain_ids[index].iconUrls[0] + `" alt="` + chain_ids[index].chainName + `" onerror="this.onerror=null;this.src='` + chain_ids[index].iconUrls[1] + `';"/>

    </div>

`;

}



async function changenetwork(index) {

	try {

		await ethereum.request({

			method: 'wallet_switchEthereumChain',

			params: [{

				chainId: chain_ids[index].chainId

			}],

		});

		get_chain_id();

	} catch (switchError) {

		// This error code indicates that the chain has not been added to MetaMask.

		if (switchError.code === 4902) {

			try {

				await ethereum.request({

					method: 'wallet_addEthereumChain',

					params: [chain_ids[index]],

				});

				get_chain_id();

			} catch (addError) {

				// handle "add" error

				document.getElementById("status").innerHTML = addError;

			}

		}

		// handle other "switch" errors

		document.getElementById("status").innerHTML = switchError;

	}

}

let ico_rate;

let available_tokens;

let provider;

let signer;

let tokenabi;

let icoabi;

let token_contract_address;

let ico_contract_address;

let token_erc20;

let ico_erc20;



async function ico_smart_contract_interface(chainId) {

	provider = new ethers.providers.Web3Provider(window.ethereum);

	await provider.send("eth_requestAccounts", []);

	signer = provider.getSigner();



	switch (chainId) {

        case "0x1":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_ethereum_1, icoabi_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

			break;

		case "0xa86a":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_avax_c_chain_1, icoabi_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

			break;

        case "0x89":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_polygon_1, icoabi_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

            break;

		case "0xa4b1":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_arbitrum_1, icoabi_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

			break;

		case "0x38":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_bsc_1, icoabi_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

			break;

		case "0x9b75":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_nrg_evm_1, icoabi_old_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

		case "0x6c":

			try {

				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_tt_1, icoabi_old_evm_1);

			} catch (error) {

				document.getElementById("status").innerHTML = error;

			}

			break;

		default:

			document.getElementById("buy").innerHTML = "Unavailable";

			document.getElementById("showChainID").innerHTML = "See Available ChainIDs";

			break;

	}

}



async function ico_smart_contract_interface_initialization(_token_contract_address, _tokenabi, _ico_contract_address, _icoabi) {

    token_contract_address = _token_contract_address;

    tokenabi = _tokenabi;

    ico_contract_address = _ico_contract_address;

    icoabi = _icoabi;



    document.getElementById("token_contract_address").innerHTML = token_contract_address;

    document.getElementById("ico_contract_address").innerHTML = ico_contract_address;



	try {

		token_erc20 = new ethers.Contract(token_contract_address, tokenabi, provider);

		document.getElementById("buy").innerHTML = "Getting available tokens in smart contract.";



		available_tokens = await token_erc20.balanceOf(ico_contract_address) / Math.pow(10, 18);

		document.getElementById("available_tokens").innerHTML = available_tokens;



		ico_erc20 = new ethers.Contract(ico_contract_address, icoabi, provider);



		document.getElementById("buy").innerHTML = "getting rate ...";

		try {

			const _ico_rate = await ico_erc20.rate();

			ico_rate = _ico_rate.toString();

			document.getElementById("purchase_amount").removeAttribute("disabled");

			document.getElementById("get_amount").removeAttribute("disabled");

	

			document.getElementById("buy").innerHTML = "buy";

		} catch (error) {

			document.getElementById("status").innerHTML = error + "<br> setting ico rate manually but you can still check the rate directly on the smart contract and buy ";

		} finally {

			ico_rate = 400000;

			document.getElementById("purchase_amount").removeAttribute("disabled");

			document.getElementById("get_amount").removeAttribute("disabled");

	

			document.getElementById("buy").innerHTML = "buy";

		}

	} catch (error) {

		document.getElementById("status").innerHTML = error;

	}

}



async function buy() {

	const purchaseAmountInETH = document.getElementById("purchase_amount").value;



	const amount = ethers.utils.parseEther(purchaseAmountInETH);



	try {

		/*const isOpen = await ico_erc20.isOpen(); // Check if ICO is open

		//console.log(isOpen);

		if (!isOpen) {

			throw new Error("ICO is not open for purchase");

		}*/



		const ico_buy = new ethers.Contract(ico_contract_address, icoabi, signer);

		await ico_buy.buyTokens({

			value: amount

		});

		// Handle successful purchase (e.g., display a confirmation message)

        document.getElementById("status").innerHTML = "done";

	} catch (error) {

		//console.log(error);

        document.getElementById("status").innerHTML = error;

		// Handle purchase errors (e.g., display an error message to the user)

	}

}

function auto_get_amount_value() {

	let auto_get_amount_value = document.getElementById("purchase_amount").value * ico_rate;

	if (auto_get_amount_value > available_tokens) {

		set_max_get();

	} else {

		document.getElementById("get_amount").value = auto_get_amount_value.toFixed(18);

	}

}



document.getElementById("purchase_amount").addEventListener("change", function() {

	auto_get_amount_value();

});



function set_max_get() {

	document.getElementById("get_amount").value = document.getElementById("available_tokens").innerText;

	auto_purchase_amount_value();

}



function auto_purchase_amount_value() {

    let auto_get_amount_value = document.getElementById("get_amount").value;

	if (auto_get_amount_value > available_tokens) {

		set_max_purchase();

	} else {

		document.getElementById("purchase_amount").value = auto_get_amount_value / ico_rate;

	}

}



function set_max_purchase() {

	document.getElementById("purchase_amount").value = document.getElementById("native-balance").innerText;

	auto_get_amount_value();

}



document.getElementById("get_amount").addEventListener("change", function() {

	auto_purchase_amount_value();

});

