---
layout: post
title: Web3 Widget Send Asset and Message to Address
category: cryptocurrency
tags: [dapp, cryptocurrency, DeFi, web3, source]
featuredimage: https://images.hive.blog/DQma5YvWPusmDNDhsm64yahiJtGd5o2i2h9eJMFM2hhg1zq/add-uniswap-token-button.png
description: A web3 widget in multiple blockchains to send native assets and message to certain address.
canonicalurl: 
---
<select id="write-comment-web3">
    <option value="comment-choose">Donate and/or Write Comment on Web3</option>
    <option value="comment-ethereum">Ethereum & EVMs</option>
    <option value="comment-tron">Tron</option>
    <option value="comment-stellar-freighter">Stellar Lumen Freighter</option>
    <option value="comment-stellar-rabet">Stellar Lumen Rabet</option>
    <option value="comment-neoline-n2">Neoline N2</option>
    <option value="comment-neoline-n3">Neoline N3</option>
    <option value="comment-waves-keeper">Waves Keeper</option>
    <option value="comment-hive-signer">Hive Signer</option>
    <option value="comment-hive-keychain">Hive Keychain</option>
    <option value="comment-wax">Wax</option>
    <option value="comment-solana">Solana</option>
    <option value="comment-ziliqa-zilpay">Ziliqa Zilpay</option>
    <option value="comment-near">Near</option>
    <option value="comment-myalgo">Algorand MyAlgo</option>
    <option value="comment-vechain-sync">Vechain Sync</option>
</select>
<button onclick="write_comment_web3()">Comment</button>
<br />
Recipient: <input type="text" id="comment-recipient" style="width: 100%" name="comment-recipient" value="input public address or key"/>
<br />
<textarea id="comment-message" style="width: 100%" rows="4" name="comment-message" value="Put your comment here.">Put your comment here.</textarea>
<br />
Amount: <input type="number" id="comment-amount" style="width: 100%" name="comment-amount" value="0.1" step=".1"/>
<br />
Status: <span id="comment-status"></span>
<br />

<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/hivesigner@3.2.7/lib/hivesigner.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js"></script>
<script src="https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js"></script>
<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js"></script>
<script src="https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js"></script>
<script src="https://unpkg.com/algosdk@v1.16.0/dist/browser/algosdk.min.js"></script>
<script src="https://unpkg.com/@vechain/connex@2"></script>

<script>
document.getElementById("comment-recipient").addEventListener("change", changerecipientinput);

let comment_recipient = document.getElementById("comment-recipient").value;

function changerecipientinput() {
  comment_recipient = document.getElementById("comment-recipient").value;
}

function ascii_to_hex(str) {
  var arr1 = [];
  for (var n = 0, l = str.length; n < l; n ++) 
    {
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
    }
  return arr1.join('');
}

document.getElementById("comment-amount").addEventListener("change", changeamountinput);

let comment_amount = document.getElementById("comment-amount").value;

function changeamountinput() {
  comment_amount = document.getElementById("comment-amount").value;
}

document.getElementById("comment-message").addEventListener("change", changemessageinput);

let comment_message = document.getElementById("comment-message").value;

function changemessageinput() {
  comment_message = document.getElementById("comment-message").value;
}

document.getElementById("write-comment-web3").addEventListener("change", changecommentblockchain);

function changecommentblockchain(){
  switch(document.getElementById("write-comment-web3").value) {
    case 'comment-ethereum':
      document.getElementById("comment-recipient").value = '0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB';
      document.getElementById("comment-message").value = 'Message size depends on maximum gas limit';
      break;
    case 'comment-tron':
      document.getElementById("comment-recipient").value = 'TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY';
      document.getElementById("comment-message").value = 'Message size depends on tron resource located';
      break;
    case 'comment-stellar-freighter':
      document.getElementById("comment-recipient").value = 'GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM';
      document.getElementById("comment-message").value = 'Max message size 28 Bytes or Char';
      break;
    case 'comment-stellar-rabet':
      document.getElementById("comment-recipient").value = 'GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM';
      document.getElementById("comment-message").value = 'Max message size 28 Bytes or Char';
      break;
    case 'comment-neoline-n2':
      document.getElementById("comment-recipient").value = 'Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar';
      document.getElementById("comment-message").value = 'Message size depends on maximum gas limit';
      break;
    case 'comment-neoline-n3':
      document.getElementById("comment-recipient").value = 'NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8';
      document.getElementById("comment-message").value = 'Not supported! Send me a message on other lines if you know how. Though you can still donate!';
      break;
    case 'comment-waves-keeper':
      document.getElementById("comment-recipient").value = '3PKroXzTJYKidcTU7CuVj7ZJCyqokZ6cpCe';
      document.getElementById("comment-message").value = 'Max message size 140 Bytes or Char';
      break;
    case 'comment-hive-signer':
      document.getElementById("comment-recipient").value = 'fpdev';
      document.getElementById("comment-message").value = 'Max message size depends on resource allocated';
      break;
    case 'comment-hive-keychain':
      document.getElementById("comment-recipient").value = 'fpdev';
      document.getElementById("comment-message").value = 'Max message size depends on resource allocated';
      break;
    case 'comment-wax':
      document.getElementById("comment-recipient").value = 'nbjaw.wam';
      document.getElementById("comment-message").value = 'Max message size depends on resource allocated';
      break;
    case 'comment-solana':
      document.getElementById("comment-recipient").value = 'G6Ha3ibcMMFiRjWMCA3YEioC1NDfrKEb3NEFEwevXZxb';
      document.getElementById("comment-message").value = 'Not supported! Send me a message on other lines if you know how. Though you can still donate!';
      break;
    case 'comment-ziliqa-zilpay':
      document.getElementById("comment-recipient").value = 'zil1kshm5ad33nkh8usfuau7ymq28phrredcnj2fxm';
      document.getElementById("comment-message").value = 'Not supported! Send me a message on other lines if you know how. Though you can still donate!';
      break;
    case 'comment-near':
      document.getElementById("comment-recipient").value = 'fajarpurnama.near';
      document.getElementById("comment-message").value = 'Not supported! Send me a message on other lines if you know how. Though you can still donate!';
      break;
    case 'comment-myalgo':
      document.getElementById("comment-recipient").value = 'OHOLBJ4OUNLR5MPPLZ7O7D2BBKTELDWJPRF5KR7VM54RBJNA5MBCSYIIS4';
      document.getElementById("comment-message").value = 'Max Size Uint8Array';
      break;
    case 'comment-vechain-sync':
      document.getElementById("comment-recipient").value = '0xB9e12b1240b3eADc2f07d892e847256526526320';
      document.getElementById("comment-message").value = 'No decimals are allowed in amount below! Refresh page before using other wallets!';
      document.getElementById("comment-amount").value = 1;
      document.getElementById("comment-amount").step = "1";
      document.getElementById("comment-amount").addEventListener("change", function() {
        document.getElementById("comment-amount").value = Math.ceil(document.getElementById("comment-amount").value);
      });
      break;
    default:
      document.getElementById("comment-message").value = 'Unknown errors have occured';
  }
  changerecipientinput();
}

function write_comment_web3(){
  switch(document.getElementById("write-comment-web3").value) {
    case 'comment-ethereum':
      write_comment_web3_evm();
      break;
    case 'comment-tron':
      write_comment_web3_tron();
      break;
    case 'comment-stellar-freighter':
      write_comment_web3_stellar_freighter();
      break;
    case 'comment-stellar-rabet':
      write_comment_web3_stellar_rabet();
      break;
    case 'comment-neoline-n2':
      write_comment_web3_neoline_n2();
      break;
    case 'comment-neoline-n3':
      write_comment_web3_neoline_n3();
      break;
    case 'comment-waves-keeper':
      write_comment_web3_waves_keeper();
      break;
    case 'comment-hive-signer':
      write_comment_web3_hive_signer();
      break;
    case 'comment-hive-keychain':
      write_comment_web3_hive_keychain();
      break;
    case 'comment-wax':
      write_comment_web3_wax();
      break;
    case 'comment-solana':
      write_comment_web3_solana();
      break;
    case 'comment-ziliqa-zilpay':
      write_comment_web3_ziliqa_zilpay();
      break;
    case 'comment-near':
      write_comment_web3_near();
      break;
    case 'comment-myalgo':
      write_comment_web3_myalgo();
      break;
    case 'comment-vechain-sync':
      write_comment_web3_vechain_sync();
      break;
    default:
      document.getElementById("comment-message").value = 'Unknown errors have occured';
  }
}

//Sending EVM and message to an address
async function write_comment_web3_evm() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  comment_message = "0x" + ascii_to_hex(comment_message);
  comment_amount = "0x" + (parseFloat(comment_amount)*10**18).toString(16);

  params = [
      {
      from: accounts[0],
      to: comment_recipient,
      value: comment_amount,
      gasPrice: await ethereum.request({method: 'eth_gasPrice', params: []}),
      gas: '', //auto
      data: comment_message
      },
    ];

  ethereum
    .request({
    method: 'eth_sendTransaction',
    params,
    })
    .then((txHash) => document.getElementById("comment-status").innerHTML = txHash.result)
    .catch((error) => document.getElementById("comment-status").innerHTML = error.message + " (install any evm wallet for example <a href='https://metamask.io/download/'>Metamask</a> if you have not)");
}

// Sending TRX and message to address
async function write_comment_web3_tron() {
  try {
    let from = window.tronWeb.defaultAddress.base58;
    let to = comment_recipient;
    let amount = comment_amount;
    let tx = await window.tronWeb.transactionBuilder.sendTrx(to, amount*10**6, from);
    let txm = await window.tronWeb.transactionBuilder.addUpdateData(tx,comment_message);
    let signedTx = await window.tronWeb.trx.sign(txm);
    let broastTx = await window.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
    document.getElementById("comment-status").innerHTML = '<a href="https://tronscan.io/#/transaction/' + broastTx.txid + '">' + broastTx.txid + '</a>';
  }
  catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install any tron wallet for example <a href='https://www.tronlink.org/'>TronLink</a> if you have not)";
  }
}

// Sending Stellar and message to address
async function write_comment_web3_stellar_freighter() {
  let stellar_current_network = await window.freighterApi.getNetwork();
  let stellar_public_key = await window.freighterApi.getPublicKey();
  let stellar_memo = StellarSdk.Memo.text(comment_message); //max 28 Bytes
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
            destination: comment_recipient,
            asset: window.StellarSdk.StellarBase.Asset.native(),
            amount: comment_amount
    }))
    .addMemo(stellar_memo)
    .setTimeout(30)
    .build();
  
    let stellar_signedTransaction = await window.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    let stellar_transactionToSubmit = StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      window.StellarSdk.Networks.PUBLIC
    );
    let response = await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    document.getElementById("comment-status").innerHTML = `<a href="`+response._links.transaction.href+`">`+response._links.transaction.href+`</a>`;
  })
  .catch(function (error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://www.freighter.app/'>freighter wallet</a> if you have not)";
  });
}

// Sending Stellar and message to address
async function write_comment_web3_stellar_rabet() {
  try {
    await window.rabet.connect()
    .then(result => stellar_public_key = result.publicKey)
    .catch(error => document.getElementById("comment-status").innerHTML = error.message);
    let stellar_memo = StellarSdk.Memo.text(comment_message); //max 28 Bytes
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
        destination: comment_recipient,
        asset: window.StellarSdk.StellarBase.Asset.native(),
        amount: comment_amount
      }))
      .addMemo(stellar_memo)
      .setTimeout(30)
      .build();
  
      await window.rabet.sign(stellar_transaction.toXDR(), window.StellarSdk.Networks.PUBLIC)
      .then(result => stellar_signedTransaction = result.xdr)
      .catch(error => document.getElementById("comment-status").innerHTML = error.message)
  
      let envelope = window.StellarSdk.xdr.TransactionEnvelope.fromXDR(stellar_signedTransaction, 'base64');
      let stellar_transactionToSubmit = new window.StellarSdk.Transaction(envelope, window.StellarSdk.Networks.PUBLIC);
      const response = await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
      document.getElementById("comment-status").innerHTML = `<a href="`+response._links.transaction.href+`">`+response._links.transaction.href+`</a>`;
    })
    .catch(function (error) {
      document.getElementById("comment-status").innerHTML = error.message;
    });
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://rabet.io/download'>rabet wallet</a> if you have not)"
  }
}

// Sending from Neoline and message to address
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

function write_comment_web3_neoline_n2() {
  try {
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
          toAddress: comment_recipient,
          asset: 'GAS',
          amount: comment_amount,
          remark: comment_message,
          //fee: '0.0001', // default if ommitted
          network: defaultNetwork,
          broadcastOverride: false
        })
        .then(result => {
          document.getElementById("comment-status").innerHTML = '<a href="https://neo.tokenview.com/en/tx/' + result.txid + '">' + result.txid + '</a>';
          console.log('RPC node URL: ' + result.nodeURL);
        })
        .catch((error) => {
          const {type, description, data} = error;
          switch(type) {
            case 'NO_PROVIDER':
              document.getElementById("comment-status").innerHTML = 'No provider available.';
              break;
            case 'RPC_ERROR':
              document.getElementById("comment-status").innerHTML = 'There was an error when broadcasting this transaction to the network.';
              break;
            case 'MALFORMED_INPUT':
              document.getElementById("comment-status").innerHTML = 'The receiver address provided is not valid.';
              break;
            case 'CANCELED':
              document.getElementById("comment-status").innerHTML = 'The user has canceled this transaction.';
              break;
            case 'INSUFFICIENT_FUNDS':
              document.getElementById("comment-status").innerHTML = 'The user has insufficient funds to execute this transaction.';
              break;
            default:
              // Not an expected error object.  Just write the error to the console.
              document.getElementById("comment-status").innerHTML = error.message;
              break;
          }
        });
      })
      .catch((error) => {
        const {type, description, data} = error;
        switch(type) {
          case 'NO_PROVIDER':
            document.getElementById("comment-status").innerHTML = 'No provider available.';
            break;
          case 'CONNECTION_DENIED':
            document.getElementById("comment-status").innerHTML ='The user rejected the request to connect with your dApp';
            break;
          default:
            // Not an expected error object.  Just write the error to the console.
            document.getElementById("comment-status").innerHTML = error.message;
            break;
        }
      });
    })
    .catch(error => {
      document.getElementById("comment-status").innerHTML = error.message;
    })
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://neoline.io/en/'>neoline wallet</a> if you have not)";
  }
}

function write_comment_web3_neoline_n3() {
  try {
    neolineN3.getAccount()
    .then(account => {
      neoline_account = account;
      neolineN3.send({
        fromAddress: neoline_account.address,
        toAddress: comment_recipient,
        asset: 'GAS',
        amount: comment_amount,
        //fee: '0.0001', //default if ommitted
        broadcastOverride: false
      })
      .then(result => {
          console.log('Send transaction success!');
          document.getElementById("comment-status").innerHTML = 'Transaction ID: ' + result.txid;
          console.log('RPC node URL: ' + result.nodeURL);
      })
      .catch((error) => {
          const {type, description, data} = error;
          switch(type) {
              case 'NO_PROVIDER':
                document.getElementById("comment-status").innerHTML = 'No provider available.';
                break;
              case 'RPC_ERROR':
                document.getElementById("comment-status").innerHTML = 'There was an error when broadcasting this transaction to the network.';
                break;
              case 'MALFORMED_INPUT':
                document.getElementById("comment-status").innerHTML = 'The receiver address provided is not valid.';
                break;
              case 'CANCELED':
                document.getElementById("comment-status").innerHTML = 'The user has canceled this transaction.';
                break;
              case 'INSUFFICIENT_FUNDS':
                document.getElementById("comment-status").innerHTML = 'The user has insufficient funds to execute this transaction.';
                break;
              default:
                // Not an expected error object.  Just write the error to the console.
                document.getElementById("comment-status").innerHTML = error.message;
                break;
          }
      });
    })
    .catch(error => {
      document.getElementById("comment-status").innerHTML = error.message;
    })
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://neoline.io/en/'>neoline wallet</a> if you have not)";
  }
};

// Sending from Keeper and message to address
async function write_comment_web3_waves_keeper() {
  try {
    const txData = {
      type: 4,
      data: {
        amount: {
          assetId: 'WAVES',
          tokens: comment_amount,
        },
        fee: {
          assetId: 'WAVES',
          tokens: '0.001',
        },
        recipient: comment_recipient,
        attachment: comment_message,
      },
    };
    KeeperWallet.signAndPublishTransaction(txData)
      .then(data => {
        json_parsed_data = JSON.parse(data);
        document.getElementById("comment-status").innerHTML = '<a href="https://wavesexplorer.com/tx/' + json_parsed_data.id + '">' + json_parsed_data.id + '</a>';
      })
      .catch(error => {
        document.getElementById("comment-status").innerHTML = error.message;
      });
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://keeper-wallet.app/'>keeper wallet</a> if you have not)";
  }
}

// Sending from hive signer and message to address
async function write_comment_web3_hive_signer() {
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
      to: comment_recipient,
      amount: comment_amount + ' HIVE',
      memo: comment_message
    }];
    hivesigner.sendOperation(op, {callback: 'http://127.0.0.1:5500/'}, function(err, result) {
      document.getElementById("comment-status").innerHTML = err + result;
    });
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
  }
}

// Sending from hive signer and message to address
async function write_comment_web3_wax() {
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
          to: comment_recipient,
          quantity: comment_amount + ' WAX',
          memo: comment_message,
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 1200,
    });
    document.getElementById("comment-status").innerHTML = result;
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
  }
}

// Sending from hive keychain and message to address
async function write_comment_web3_hive_keychain() {
  try{
    hive_keychain.requestHandshake(function () {
      let username = prompt("Please enter your username", "");
      hive_keychain.requestTransfer(username, comment_recipient, parseFloat(comment_amount).toFixed(3), comment_message, 'HIVE');
    });
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + " (1) install <a href='https://hive-keychain.com/'>Hive Keychain</a>, (2) Import your accounts and keys from <a href='https://wallet.hive.blog/'>Hive Wallet</a>.";
  }
}

// Sending from Solana and message to address
async function write_comment_web3_solana() {
  try {
    const resp = await window.solana.connect();

    let connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl('mainnet-beta'),
      'confirmed',
    );

    let recieverWallet = new solanaWeb3.PublicKey(comment_recipient);

    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: resp.publicKey,
        toPubkey: recieverWallet,
        lamports: solanaWeb3.LAMPORTS_PER_SOL * comment_amount //Remember 1 Lamport = 10^-9 SOL.
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

    document.getElementById("comment-status").innerHTML = "Signature: " + signature;

  } catch (error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install any Solana Wallet for example <a href='https://phantom.app/download'>Phantom Wallet</a> if you have not)";
  }
}

// Sending message from Ziliqa Zilpay
async function write_comment_web3_ziliqa_zilpay() {
  try {
    await window.zilPay.wallet.connect();
    const amount = zilPay.utils.units.toQa(comment_amount, zilPay.utils.units.Units.Zil); // 1 zil
    //const gasPrice = zilPay.utils.units.toQa('1000', zilPay.utils.units.Units.Li); //set otherwise automatic
    const txParams = window.zilPay.transactions.new({ // Create params for our trasnaction.
      toAddr: comment_recipient,
      amount: amount,
      gasPrice: '' //auto or set yourself
    });
    const txResult = await window.zilPay.blockchain.createTransaction(txParams);
    document.getElementById("comment-status").innerHTML = txResult;
  } catch (error) {
    document.getElementById("comment-status").innerHTML = error.message + " (install <a href='https://zilpay.io/'>Zilpay</a> if you have not)";
  }
}

// Sending message from Near
async function write_comment_web3_near() {
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
        comment_recipient, // receiver account
        BigInt(1000000000000000000 * 10**6 * comment_amount) // amount in yoctoNEAR
      );
    } else {
      wallet.requestSignIn({ contractId: comment_recipient });
    }
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
  }
}

// Send Algo and Message MyAlgo Wallet
async function write_comment_web3_myalgo() {
  try{
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    const algodClient = new algosdk.Algodv2('', 'https://node.algoexplorerapi.io', '');
    const params = await algodClient.getTransactionParams().do();
    const note = new TextEncoder("utf-8").encode(comment_message);
    const sender = accountsSharedByUser[0].address;
    const receiver = comment_recipient;
    const amount = comment_amount * 1000000;
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams: params,
      from: sender,
      to: receiver,
      amount: amount,
      note: note
    });
    const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    document.getElementById("comment-status").innerHTML = response;
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
  }
}

// Send VET and message Sync Wallet
async function write_comment_web3_vechain_sync() {
  try{
    const connex = new Connex({
      node: 'https://mainnet.veblocks.net/', // veblocks public node, use your own if needed
      network: 'main' // defaults to mainnet, so it can be omitted here
    })
    const vendor = new Connex.Vendor('main'); // 'main','test' or genesis ID if it's private network
    const amount = Math.trunc(comment_amount);
    document.getElementById("comment-amount").value = amount;

    const signedtx =  vendor.sign('tx', [{
      to: comment_recipient,
      value: amount + '0'.repeat(18)    
    }])
    .comment(comment_message)
    .link(window.location.href)
    .request()
    .then(result => {document.getElementById("comment-status").innerHTML = result})
    .catch(error => {document.getElementById("comment-status").innerHTML = error.message})
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
  }
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;select</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;write-comment-web3&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-choose&quot;</span><span style="color: #007700">&gt;</span>Donate and/or Write Comment on Web3<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-ethereum&quot;</span><span style="color: #007700">&gt;</span>Ethereum <span style="color: #FF0000; background-color: #FFAAAA">&amp;</span> EVMs<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-tron&quot;</span><span style="color: #007700">&gt;</span>Tron<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-stellar-freighter&quot;</span><span style="color: #007700">&gt;</span>Stellar Lumen Freighter<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-stellar-rabet&quot;</span><span style="color: #007700">&gt;</span>Stellar Lumen Rabet<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-neoline-n2&quot;</span><span style="color: #007700">&gt;</span>Neoline N2<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-neoline-n3&quot;</span><span style="color: #007700">&gt;</span>Neoline N3<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-waves-keeper&quot;</span><span style="color: #007700">&gt;</span>Waves Keeper<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-hive-signer&quot;</span><span style="color: #007700">&gt;</span>Hive Signer<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-hive-keychain&quot;</span><span style="color: #007700">&gt;</span>Hive Keychain<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-wax&quot;</span><span style="color: #007700">&gt;</span>Wax<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-solana&quot;</span><span style="color: #007700">&gt;</span>Solana<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-ziliqa-zilpay&quot;</span><span style="color: #007700">&gt;</span>Ziliqa Zilpay<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-near&quot;</span><span style="color: #007700">&gt;</span>Near<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-myalgo&quot;</span><span style="color: #007700">&gt;</span>Algorand MyAlgo<span style="color: #007700">&lt;/option&gt;</span>
    <span style="color: #007700">&lt;option</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;comment-vechain-sync&quot;</span><span style="color: #007700">&gt;</span>Vechain Sync<span style="color: #007700">&lt;/option&gt;</span>
<span style="color: #007700">&lt;/select&gt;</span>
<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;write_comment_web3()&quot;</span><span style="color: #007700">&gt;</span>Comment<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;br</span> <span style="color: #007700">/&gt;</span>
Recipient: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;width: 100%&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;input public address or key&quot;</span><span style="color: #007700">/&gt;</span>
<span style="color: #007700">&lt;br</span> <span style="color: #007700">/&gt;</span>
<span style="color: #007700">&lt;textarea</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;comment-message&quot;</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;width: 100%&quot;</span> <span style="color: #0000CC">rows=</span><span style="background-color: #fff0f0">&quot;4&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;comment-message&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;Put your comment here.&quot;</span><span style="color: #007700">&gt;</span>Put your comment here.<span style="color: #007700">&lt;/textarea&gt;</span>
<span style="color: #007700">&lt;br</span> <span style="color: #007700">/&gt;</span>
Amount: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;number&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;comment-amount&quot;</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;width: 100%&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;comment-amount&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;0.1&quot;</span> <span style="color: #0000CC">step=</span><span style="background-color: #fff0f0">&quot;.1&quot;</span><span style="color: #007700">/&gt;</span>
<span style="color: #007700">&lt;br</span> <span style="color: #007700">/&gt;</span>
Status: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;comment-status&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;</span>
<span style="color: #007700">&lt;br</span> <span style="color: #007700">/&gt;</span>

<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.ethers.io/lib/ethers-5.2.umd.min.js&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;application/javascript&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/hivesigner@3.2.7/lib/hivesigner.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.1.2/index.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.1.0/stellar-sdk.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://0fajarpurnama0.github.io/assets/js/3rdpartyweb3/waxjs.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/near-api-js@0.41.0/dist/near-api-js.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://github.com/randlabs/myalgo-connect/releases/download/v1.1.3/myalgo.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://unpkg.com/algosdk@v1.16.0/dist/browser/algosdk.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://unpkg.com/@vechain/connex@2&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, changerecipientinput);

<span style="color: #008800; font-weight: bold">let</span> comment_recipient <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value;

<span style="color: #008800; font-weight: bold">function</span> changerecipientinput() {
  comment_recipient <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value;
}

<span style="color: #008800; font-weight: bold">function</span> ascii_to_hex(str) {
  <span style="color: #008800; font-weight: bold">var</span> arr1 <span style="color: #333333">=</span> [];
  <span style="color: #008800; font-weight: bold">for</span> (<span style="color: #008800; font-weight: bold">var</span> n <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>, l <span style="color: #333333">=</span> str.length; n <span style="color: #333333">&lt;</span> l; n <span style="color: #333333">++</span>) 
    {
    <span style="color: #008800; font-weight: bold">var</span> hex <span style="color: #333333">=</span> <span style="color: #007020">Number</span>(str.charCodeAt(n)).toString(<span style="color: #0000DD; font-weight: bold">16</span>);
    arr1.push(hex);
    }
  <span style="color: #008800; font-weight: bold">return</span> arr1.join(<span style="background-color: #fff0f0">&#39;&#39;</span>);
}

<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, changeamountinput);

<span style="color: #008800; font-weight: bold">let</span> comment_amount <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value;

<span style="color: #008800; font-weight: bold">function</span> changeamountinput() {
  comment_amount <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value;
}

<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, changemessageinput);

<span style="color: #008800; font-weight: bold">let</span> comment_message <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value;

<span style="color: #008800; font-weight: bold">function</span> changemessageinput() {
  comment_message <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value;
}

<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;write-comment-web3&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, changecommentblockchain);

<span style="color: #008800; font-weight: bold">function</span> changecommentblockchain(){
  <span style="color: #008800; font-weight: bold">switch</span>(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;write-comment-web3&quot;</span>).value) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-ethereum&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Message size depends on maximum gas limit&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-tron&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Message size depends on tron resource located&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-stellar-freighter&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size 28 Bytes or Char&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-stellar-rabet&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size 28 Bytes or Char&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-neoline-n2&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Message size depends on maximum gas limit&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-neoline-n3&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Not supported! Send me a message on other lines if you know how. Though you can still donate!&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-waves-keeper&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;3PKroXzTJYKidcTU7CuVj7ZJCyqokZ6cpCe&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size 140 Bytes or Char&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-hive-signer&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;fpdev&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size depends on resource allocated&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-hive-keychain&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;fpdev&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size depends on resource allocated&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-wax&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;nbjaw.wam&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max message size depends on resource allocated&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-solana&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;G6Ha3ibcMMFiRjWMCA3YEioC1NDfrKEb3NEFEwevXZxb&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Not supported! Send me a message on other lines if you know how. Though you can still donate!&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-ziliqa-zilpay&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;zil1kshm5ad33nkh8usfuau7ymq28phrredcnj2fxm&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Not supported! Send me a message on other lines if you know how. Though you can still donate!&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-near&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;fajarpurnama.near&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Not supported! Send me a message on other lines if you know how. Though you can still donate!&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-myalgo&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;OHOLBJ4OUNLR5MPPLZ7O7D2BBKTELDWJPRF5KR7VM54RBJNA5MBCSYIIS4&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Max Size Uint8Array&#39;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-vechain-sync&#39;</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-recipient&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;0xB9e12b1240b3eADc2f07d892e847256526526320&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;No decimals are allowed in amount below! Refresh page before using other wallets!&#39;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).step <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1&quot;</span>;
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, <span style="color: #008800; font-weight: bold">function</span>() {
        <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value <span style="color: #333333">=</span> <span style="color: #007020">Math</span>.ceil(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value);
      });
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Unknown errors have occured&#39;</span>;
  }
  changerecipientinput();
}

<span style="color: #008800; font-weight: bold">function</span> write_comment_web3(){
  <span style="color: #008800; font-weight: bold">switch</span>(<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;write-comment-web3&quot;</span>).value) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-ethereum&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_evm();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-tron&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_tron();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-stellar-freighter&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_stellar_freighter();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-stellar-rabet&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_stellar_rabet();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-neoline-n2&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_neoline_n2();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-neoline-n3&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_neoline_n3();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-waves-keeper&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_waves_keeper();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-hive-signer&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_hive_signer();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-hive-keychain&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_hive_keychain();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-wax&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_wax();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-solana&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_solana();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-ziliqa-zilpay&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_ziliqa_zilpay();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-near&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_near();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-myalgo&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_myalgo();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;comment-vechain-sync&#39;</span><span style="color: #333333">:</span>
      write_comment_web3_vechain_sync();
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-message&quot;</span>).value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Unknown errors have occured&#39;</span>;
  }
}

<span style="color: #888888">//Sending EVM and message to an address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_evm() {
  <span style="color: #008800; font-weight: bold">const</span> accounts <span style="color: #333333">=</span> await ethereum.request({ method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_requestAccounts&#39;</span> });
  comment_message <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0x&quot;</span> <span style="color: #333333">+</span> ascii_to_hex(comment_message);
  comment_amount <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0x&quot;</span> <span style="color: #333333">+</span> (<span style="color: #007020">parseFloat</span>(comment_amount)<span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">10</span><span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">18</span>).toString(<span style="color: #0000DD; font-weight: bold">16</span>);

  params <span style="color: #333333">=</span> [
      {
      from<span style="color: #333333">:</span> accounts[<span style="color: #0000DD; font-weight: bold">0</span>],
      to<span style="color: #333333">:</span> comment_recipient,
      value<span style="color: #333333">:</span> comment_amount,
      gasPrice<span style="color: #333333">:</span> await ethereum.request({method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_gasPrice&#39;</span>, params<span style="color: #333333">:</span> []}),
      gas<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;&#39;</span>, <span style="color: #888888">//auto</span>
      data<span style="color: #333333">:</span> comment_message
      },
    ];

  ethereum
    .request({
    method<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;eth_sendTransaction&#39;</span>,
    params,
    })
    .then((txHash) <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> txHash.result)
    .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install any evm wallet for example &lt;a href=&#39;https://metamask.io/download/&#39;&gt;Metamask&lt;/a&gt; if you have not)&quot;</span>);
}

<span style="color: #888888">// Sending TRX and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_tron() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">let</span> from <span style="color: #333333">=</span> <span style="color: #007020">window</span>.tronWeb.defaultAddress.base58;
    <span style="color: #008800; font-weight: bold">let</span> to <span style="color: #333333">=</span> comment_recipient;
    <span style="color: #008800; font-weight: bold">let</span> amount <span style="color: #333333">=</span> comment_amount;
    <span style="color: #008800; font-weight: bold">let</span> tx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.transactionBuilder.sendTrx(to, amount<span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">10</span><span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">6</span>, from);
    <span style="color: #008800; font-weight: bold">let</span> txm <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.transactionBuilder.addUpdateData(tx,comment_message);
    <span style="color: #008800; font-weight: bold">let</span> signedTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sign(txm);
    <span style="color: #008800; font-weight: bold">let</span> broastTx <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.tronWeb.trx.sendRawTransaction(signedTx);
    console.log(broastTx);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;&lt;a href=&quot;https://tronscan.io/#/transaction/&#39;</span> <span style="color: #333333">+</span> broastTx.txid <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot;&gt;&#39;</span> <span style="color: #333333">+</span> broastTx.txid <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&lt;/a&gt;&#39;</span>;
  }
  <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install any tron wallet for example &lt;a href=&#39;https://www.tronlink.org/&#39;&gt;TronLink&lt;/a&gt; if you have not)&quot;</span>;
  }
}

<span style="color: #888888">// Sending Stellar and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_stellar_freighter() {
  <span style="color: #008800; font-weight: bold">let</span> stellar_current_network <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getNetwork();
  <span style="color: #008800; font-weight: bold">let</span> stellar_public_key <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.getPublicKey();
  <span style="color: #008800; font-weight: bold">let</span> stellar_memo <span style="color: #333333">=</span> StellarSdk.Memo.text(comment_message); <span style="color: #888888">//max 28 Bytes</span>
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
            destination<span style="color: #333333">:</span> comment_recipient,
            asset<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Asset.<span style="color: #008800; font-weight: bold">native</span>(),
            amount<span style="color: #333333">:</span> comment_amount
    }))
    .addMemo(stellar_memo)
    .setTimeout(<span style="color: #0000DD; font-weight: bold">30</span>)
    .build();
  
    <span style="color: #008800; font-weight: bold">let</span> stellar_signedTransaction <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.freighterApi.signTransaction(stellar_transaction.toXDR(), stellar_current_network);
    <span style="color: #008800; font-weight: bold">let</span> stellar_transactionToSubmit <span style="color: #333333">=</span> StellarSdk.TransactionBuilder.fromXDR(
      stellar_signedTransaction,
      <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC
    );
    <span style="color: #008800; font-weight: bold">let</span> response <span style="color: #333333">=</span> await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">&lt;</span>a href<span style="color: #333333">=</span><span style="background-color: #fff0f0">&quot;`+response._links.transaction.href+`&quot;</span><span style="color: #333333">&gt;</span><span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">+</span>response._links.transaction.href<span style="color: #333333">+</span><span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">/a&gt;`;</span>
  })
  .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://www.freighter.app/&#39;&gt;freighter wallet&lt;/a&gt; if you have not)&quot;</span>;
  });
}

<span style="color: #888888">// Sending Stellar and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_stellar_rabet() {
  <span style="color: #008800; font-weight: bold">try</span> {
    await <span style="color: #007020">window</span>.rabet.connect()
    .then(result <span style="color: #333333">=&gt;</span> stellar_public_key <span style="color: #333333">=</span> result.publicKey)
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message);
    <span style="color: #008800; font-weight: bold">let</span> stellar_memo <span style="color: #333333">=</span> StellarSdk.Memo.text(comment_message); <span style="color: #888888">//max 28 Bytes</span>
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
        destination<span style="color: #333333">:</span> comment_recipient,
        asset<span style="color: #333333">:</span> <span style="color: #007020">window</span>.StellarSdk.StellarBase.Asset.<span style="color: #008800; font-weight: bold">native</span>(),
        amount<span style="color: #333333">:</span> comment_amount
      }))
      .addMemo(stellar_memo)
      .setTimeout(<span style="color: #0000DD; font-weight: bold">30</span>)
      .build();
  
      await <span style="color: #007020">window</span>.rabet.sign(stellar_transaction.toXDR(), <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC)
      .then(result <span style="color: #333333">=&gt;</span> stellar_signedTransaction <span style="color: #333333">=</span> result.xdr)
      .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message)
  
      <span style="color: #008800; font-weight: bold">let</span> envelope <span style="color: #333333">=</span> <span style="color: #007020">window</span>.StellarSdk.xdr.TransactionEnvelope.fromXDR(stellar_signedTransaction, <span style="background-color: #fff0f0">&#39;base64&#39;</span>);
      <span style="color: #008800; font-weight: bold">let</span> stellar_transactionToSubmit <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">window</span>.StellarSdk.Transaction(envelope, <span style="color: #007020">window</span>.StellarSdk.Networks.PUBLIC);
      <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await stellar_horizon_server.submitTransaction(stellar_transactionToSubmit);
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">&lt;</span>a href<span style="color: #333333">=</span><span style="background-color: #fff0f0">&quot;`+response._links.transaction.href+`&quot;</span><span style="color: #333333">&gt;</span><span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">+</span>response._links.transaction.href<span style="color: #333333">+</span><span style="color: #FF0000; background-color: #FFAAAA">`</span><span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">/a&gt;`;</span>
    })
    .<span style="color: #008800; font-weight: bold">catch</span>(<span style="color: #008800; font-weight: bold">function</span> (error) {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    });
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://rabet.io/download&#39;&gt;rabet wallet&lt;/a&gt; if you have not)&quot;</span>
  }
}

<span style="color: #888888">// Sending from Neoline and message to address</span>
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

<span style="color: #008800; font-weight: bold">function</span> write_comment_web3_neoline_n2() {
  <span style="color: #008800; font-weight: bold">try</span> {
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
          toAddress<span style="color: #333333">:</span> comment_recipient,
          asset<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;GAS&#39;</span>,
          amount<span style="color: #333333">:</span> comment_amount,
          remark<span style="color: #333333">:</span> comment_message,
          <span style="color: #888888">//fee: &#39;0.0001&#39;, // default if ommitted</span>
          network<span style="color: #333333">:</span> defaultNetwork,
          broadcastOverride<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">false</span>
        })
        .then(result <span style="color: #333333">=&gt;</span> {
          <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;&lt;a href=&quot;https://neo.tokenview.com/en/tx/&#39;</span> <span style="color: #333333">+</span> result.txid <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot;&gt;&#39;</span> <span style="color: #333333">+</span> result.txid <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&lt;/a&gt;&#39;</span>;
          console.log(<span style="background-color: #fff0f0">&#39;RPC node URL: &#39;</span> <span style="color: #333333">+</span> result.nodeURL);
        })
        .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
          <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
          <span style="color: #008800; font-weight: bold">switch</span>(type) {
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>;
              <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;RPC_ERROR&#39;</span><span style="color: #333333">:</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;There was an error when broadcasting this transaction to the network.&#39;</span>;
              <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;MALFORMED_INPUT&#39;</span><span style="color: #333333">:</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The receiver address provided is not valid.&#39;</span>;
              <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CANCELED&#39;</span><span style="color: #333333">:</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The user has canceled this transaction.&#39;</span>;
              <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;INSUFFICIENT_FUNDS&#39;</span><span style="color: #333333">:</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The user has insufficient funds to execute this transaction.&#39;</span>;
              <span style="color: #008800; font-weight: bold">break</span>;
            <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
              <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
              <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
              <span style="color: #008800; font-weight: bold">break</span>;
          }
        });
      })
      .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
        <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
        <span style="color: #008800; font-weight: bold">switch</span>(type) {
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
            <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>;
            <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CONNECTION_DENIED&#39;</span><span style="color: #333333">:</span>
            <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;The user rejected the request to connect with your dApp&#39;</span>;
            <span style="color: #008800; font-weight: bold">break</span>;
          <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
            <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
            <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
            <span style="color: #008800; font-weight: bold">break</span>;
        }
      });
    })
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    })
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://neoline.io/en/&#39;&gt;neoline wallet&lt;/a&gt; if you have not)&quot;</span>;
  }
}

<span style="color: #008800; font-weight: bold">function</span> write_comment_web3_neoline_n3() {
  <span style="color: #008800; font-weight: bold">try</span> {
    neolineN3.getAccount()
    .then(account <span style="color: #333333">=&gt;</span> {
      neoline_account <span style="color: #333333">=</span> account;
      neolineN3.send({
        fromAddress<span style="color: #333333">:</span> neoline_account.address,
        toAddress<span style="color: #333333">:</span> comment_recipient,
        asset<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;GAS&#39;</span>,
        amount<span style="color: #333333">:</span> comment_amount,
        <span style="color: #888888">//fee: &#39;0.0001&#39;, //default if ommitted</span>
        broadcastOverride<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">false</span>
      })
      .then(result <span style="color: #333333">=&gt;</span> {
          console.log(<span style="background-color: #fff0f0">&#39;Send transaction success!&#39;</span>);
          <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;Transaction ID: &#39;</span> <span style="color: #333333">+</span> result.txid;
          console.log(<span style="background-color: #fff0f0">&#39;RPC node URL: &#39;</span> <span style="color: #333333">+</span> result.nodeURL);
      })
      .<span style="color: #008800; font-weight: bold">catch</span>((error) <span style="color: #333333">=&gt;</span> {
          <span style="color: #008800; font-weight: bold">const</span> {type, description, data} <span style="color: #333333">=</span> error;
          <span style="color: #008800; font-weight: bold">switch</span>(type) {
              <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;NO_PROVIDER&#39;</span><span style="color: #333333">:</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;No provider available.&#39;</span>;
                <span style="color: #008800; font-weight: bold">break</span>;
              <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;RPC_ERROR&#39;</span><span style="color: #333333">:</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;There was an error when broadcasting this transaction to the network.&#39;</span>;
                <span style="color: #008800; font-weight: bold">break</span>;
              <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;MALFORMED_INPUT&#39;</span><span style="color: #333333">:</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The receiver address provided is not valid.&#39;</span>;
                <span style="color: #008800; font-weight: bold">break</span>;
              <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;CANCELED&#39;</span><span style="color: #333333">:</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The user has canceled this transaction.&#39;</span>;
                <span style="color: #008800; font-weight: bold">break</span>;
              <span style="color: #008800; font-weight: bold">case</span> <span style="background-color: #fff0f0">&#39;INSUFFICIENT_FUNDS&#39;</span><span style="color: #333333">:</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;The user has insufficient funds to execute this transaction.&#39;</span>;
                <span style="color: #008800; font-weight: bold">break</span>;
              <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
                <span style="color: #888888">// Not an expected error object.  Just write the error to the console.</span>
                <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
                <span style="color: #008800; font-weight: bold">break</span>;
          }
      });
    })
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
    })
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://neoline.io/en/&#39;&gt;neoline wallet&lt;/a&gt; if you have not)&quot;</span>;
  }
};

<span style="color: #888888">// Sending from Keeper and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_waves_keeper() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> txData <span style="color: #333333">=</span> {
      type<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">4</span>,
      data<span style="color: #333333">:</span> {
        amount<span style="color: #333333">:</span> {
          assetId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;WAVES&#39;</span>,
          tokens<span style="color: #333333">:</span> comment_amount,
        },
        fee<span style="color: #333333">:</span> {
          assetId<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;WAVES&#39;</span>,
          tokens<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;0.001&#39;</span>,
        },
        recipient<span style="color: #333333">:</span> comment_recipient,
        attachment<span style="color: #333333">:</span> comment_message,
      },
    };
    KeeperWallet.signAndPublishTransaction(txData)
      .then(data <span style="color: #333333">=&gt;</span> {
        json_parsed_data <span style="color: #333333">=</span> JSON.parse(data);
        <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&#39;&lt;a href=&quot;https://wavesexplorer.com/tx/&#39;</span> <span style="color: #333333">+</span> json_parsed_data.id <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot;&gt;&#39;</span> <span style="color: #333333">+</span> json_parsed_data.id <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&lt;/a&gt;&#39;</span>;
      })
      .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {
        <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
      });
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://keeper-wallet.app/&#39;&gt;keeper wallet&lt;/a&gt; if you have not)&quot;</span>;
  }
}

<span style="color: #888888">// Sending from hive signer and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_hive_signer() {
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
    client.setAccessToken(hivesigner_query_string.code);
    <span style="color: #008800; font-weight: bold">const</span> op <span style="color: #333333">=</span> [<span style="background-color: #fff0f0">&#39;transfer&#39;</span>, {
      from<span style="color: #333333">:</span> hivesigner_query_string.username,
      to<span style="color: #333333">:</span> comment_recipient,
      amount<span style="color: #333333">:</span> comment_amount <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39; HIVE&#39;</span>,
      memo<span style="color: #333333">:</span> comment_message
    }];
    hivesigner.sendOperation(op, {callback<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;http://127.0.0.1:5500/&#39;</span>}, <span style="color: #008800; font-weight: bold">function</span>(err, result) {
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> err <span style="color: #333333">+</span> result;
    });
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}

<span style="color: #888888">// Sending from hive signer and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_wax() {
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
          to<span style="color: #333333">:</span> comment_recipient,
          quantity<span style="color: #333333">:</span> comment_amount <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39; WAX&#39;</span>,
          memo<span style="color: #333333">:</span> comment_message,
        },
      }]
    }, {
      blocksBehind<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">3</span>,
      expireSeconds<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">1200</span>,
    });
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> result;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}

<span style="color: #888888">// Sending from hive keychain and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_hive_keychain() {
  <span style="color: #008800; font-weight: bold">try</span>{
    hive_keychain.requestHandshake(<span style="color: #008800; font-weight: bold">function</span> () {
      <span style="color: #008800; font-weight: bold">let</span> username <span style="color: #333333">=</span> prompt(<span style="background-color: #fff0f0">&quot;Please enter your username&quot;</span>, <span style="background-color: #fff0f0">&quot;&quot;</span>);
      hive_keychain.requestTransfer(username, comment_recipient, <span style="color: #007020">parseFloat</span>(comment_amount).toFixed(<span style="color: #0000DD; font-weight: bold">3</span>), comment_message, <span style="background-color: #fff0f0">&#39;HIVE&#39;</span>);
    });
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (1) install &lt;a href=&#39;https://hive-keychain.com/&#39;&gt;Hive Keychain&lt;/a&gt;, (2) Import your accounts and keys from &lt;a href=&#39;https://wallet.hive.blog/&#39;&gt;Hive Wallet&lt;/a&gt;.&quot;</span>;
  }
}

<span style="color: #888888">// Sending from Solana and message to address</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_solana() {
  <span style="color: #008800; font-weight: bold">try</span> {
    <span style="color: #008800; font-weight: bold">const</span> resp <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.solana.connect();

    <span style="color: #008800; font-weight: bold">let</span> connection <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(<span style="background-color: #fff0f0">&#39;mainnet-beta&#39;</span>),
      <span style="background-color: #fff0f0">&#39;confirmed&#39;</span>,
    );

    <span style="color: #008800; font-weight: bold">let</span> recieverWallet <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.PublicKey(comment_recipient);

    <span style="color: #008800; font-weight: bold">const</span> transaction <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey<span style="color: #333333">:</span> resp.publicKey,
        toPubkey<span style="color: #333333">:</span> recieverWallet,
        lamports<span style="color: #333333">:</span> solanaWeb3.LAMPORTS_PER_SOL <span style="color: #333333">*</span> comment_amount <span style="color: #888888">//Remember 1 Lamport = 10^-9 SOL.</span>
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

    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Signature: &quot;</span> <span style="color: #333333">+</span> signature;

  } <span style="color: #008800; font-weight: bold">catch</span> (error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install any Solana Wallet for example &lt;a href=&#39;https://phantom.app/download&#39;&gt;Phantom Wallet&lt;/a&gt; if you have not)&quot;</span>;
  }
}

<span style="color: #888888">// Sending message from Ziliqa Zilpay</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_ziliqa_zilpay() {
  <span style="color: #008800; font-weight: bold">try</span> {
    await <span style="color: #007020">window</span>.zilPay.wallet.connect();
    <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> zilPay.utils.units.toQa(comment_amount, zilPay.utils.units.Units.Zil); <span style="color: #888888">// 1 zil</span>
    <span style="color: #888888">//const gasPrice = zilPay.utils.units.toQa(&#39;1000&#39;, zilPay.utils.units.Units.Li); //set otherwise automatic</span>
    <span style="color: #008800; font-weight: bold">const</span> txParams <span style="color: #333333">=</span> <span style="color: #007020">window</span>.zilPay.transactions.<span style="color: #008800; font-weight: bold">new</span>({ <span style="color: #888888">// Create params for our trasnaction.</span>
      toAddr<span style="color: #333333">:</span> comment_recipient,
      amount<span style="color: #333333">:</span> amount,
      gasPrice<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;&#39;</span> <span style="color: #888888">//auto or set yourself</span>
    });
    <span style="color: #008800; font-weight: bold">const</span> txResult <span style="color: #333333">=</span> await <span style="color: #007020">window</span>.zilPay.blockchain.createTransaction(txParams);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> txResult;
  } <span style="color: #008800; font-weight: bold">catch</span> (error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot; (install &lt;a href=&#39;https://zilpay.io/&#39;&gt;Zilpay&lt;/a&gt; if you have not)&quot;</span>;
  }
}

<span style="color: #888888">// Sending message from Near</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_near() {
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
        comment_recipient, <span style="color: #888888">// receiver account</span>
        BigInt(<span style="color: #0000DD; font-weight: bold">1000000000000000000</span> <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">10</span><span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">6</span> <span style="color: #333333">*</span> comment_amount) <span style="color: #888888">// amount in yoctoNEAR</span>
      );
    } <span style="color: #008800; font-weight: bold">else</span> {
      wallet.requestSignIn({ contractId<span style="color: #333333">:</span> comment_recipient });
    }
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}

<span style="color: #888888">// Send Algo and Message MyAlgo Wallet</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_myalgo() {
  <span style="color: #008800; font-weight: bold">try</span>{
    <span style="color: #008800; font-weight: bold">const</span> myAlgoConnect <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> MyAlgoConnect();
    <span style="color: #008800; font-weight: bold">const</span> accountsSharedByUser <span style="color: #333333">=</span> await myAlgoConnect.connect();
    <span style="color: #008800; font-weight: bold">const</span> algodClient <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> algosdk.Algodv2(<span style="background-color: #fff0f0">&#39;&#39;</span>, <span style="background-color: #fff0f0">&#39;https://node.algoexplorerapi.io&#39;</span>, <span style="background-color: #fff0f0">&#39;&#39;</span>);
    <span style="color: #008800; font-weight: bold">const</span> params <span style="color: #333333">=</span> await algodClient.getTransactionParams().<span style="color: #008800; font-weight: bold">do</span>();
    <span style="color: #008800; font-weight: bold">const</span> note <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> TextEncoder(<span style="background-color: #fff0f0">&quot;utf-8&quot;</span>).encode(comment_message);
    <span style="color: #008800; font-weight: bold">const</span> sender <span style="color: #333333">=</span> accountsSharedByUser[<span style="color: #0000DD; font-weight: bold">0</span>].address;
    <span style="color: #008800; font-weight: bold">const</span> receiver <span style="color: #333333">=</span> comment_recipient;
    <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> comment_amount <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">1000000</span>;
    <span style="color: #008800; font-weight: bold">const</span> txn <span style="color: #333333">=</span> algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      suggestedParams<span style="color: #333333">:</span> params,
      from<span style="color: #333333">:</span> sender,
      to<span style="color: #333333">:</span> receiver,
      amount<span style="color: #333333">:</span> amount,
      note<span style="color: #333333">:</span> note
    });
    <span style="color: #008800; font-weight: bold">const</span> signedTxn <span style="color: #333333">=</span> await myAlgoConnect.signTransaction(txn.toByte());
    <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await algodClient.sendRawTransaction(signedTxn.blob).<span style="color: #008800; font-weight: bold">do</span>();
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> response;
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}

<span style="color: #888888">// Send VET and message Sync Wallet</span>
async <span style="color: #008800; font-weight: bold">function</span> write_comment_web3_vechain_sync() {
  <span style="color: #008800; font-weight: bold">try</span>{
    <span style="color: #008800; font-weight: bold">const</span> connex <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Connex({
      node<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;https://mainnet.veblocks.net/&#39;</span>, <span style="color: #888888">// veblocks public node, use your own if needed</span>
      network<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;main&#39;</span> <span style="color: #888888">// defaults to mainnet, so it can be omitted here</span>
    })
    <span style="color: #008800; font-weight: bold">const</span> vendor <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Connex.Vendor(<span style="background-color: #fff0f0">&#39;main&#39;</span>); <span style="color: #888888">// &#39;main&#39;,&#39;test&#39; or genesis ID if it&#39;s private network</span>
    <span style="color: #008800; font-weight: bold">const</span> amount <span style="color: #333333">=</span> <span style="color: #007020">Math</span>.trunc(comment_amount);
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-amount&quot;</span>).value <span style="color: #333333">=</span> amount;

    <span style="color: #008800; font-weight: bold">const</span> signedtx <span style="color: #333333">=</span>  vendor.sign(<span style="background-color: #fff0f0">&#39;tx&#39;</span>, [{
      to<span style="color: #333333">:</span> comment_recipient,
      value<span style="color: #333333">:</span> amount <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;0&#39;</span>.repeat(<span style="color: #0000DD; font-weight: bold">18</span>)    
    }])
    .comment(comment_message)
    .link(<span style="color: #007020">window</span>.location.href)
    .request()
    .then(result <span style="color: #333333">=&gt;</span> {<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> result})
    .<span style="color: #008800; font-weight: bold">catch</span>(error <span style="color: #333333">=&gt;</span> {<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message})
  } <span style="color: #008800; font-weight: bold">catch</span>(error) {
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;comment-status&quot;</span>).innerHTML <span style="color: #333333">=</span> error.message;
  }
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<p>Repository: <a href="http://mellow.link/6lFya">https://github.com/0fajarpurnama0/0fajarpurnama0.github.io/blob/master/_posts/2022-03-03-web3-send-asset-message.md</a></p>