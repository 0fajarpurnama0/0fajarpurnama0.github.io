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

function change_select(select_value) {
  document.getElementById("comment-choose").value = select_value;
  document.getElementById("comment-choose").innerHTML = document.getElementById(select_value).innerHTML;
  switch(document.getElementById("comment-choose").value) {
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
    case 'comment-iost-iwallet':
      document.getElementById("comment-recipient").value = '0donation0';
      document.getElementById("comment-message").value = 'Max size depends on resource allocated.';
      break;
    case 'comment-eos-scatter':
      document.getElementById("comment-recipient").value = 'urf5n4htf5em';
      document.getElementById("comment-message").value = 'Max size depends on resource allocated.';
      break;
    case 'comment-eos-anchor':
      document.getElementById("comment-recipient").value = 'urf5n4htf5em';
      document.getElementById("comment-message").value = 'Max size depends on resource allocated.';
      break;
    case 'comment-ontology-wallets':
      document.getElementById("comment-recipient").value = 'AZsLt6ZAH31KbwB4TjTc8jMnZvp1XdbWwk';
      document.getElementById("comment-message").value = 'Not supported! Send me a message on other lines if you know how. Though you can still donate!';
      break;
    default:
      document.getElementById("comment-message").value = 'Unknown errors have occured';
  }
  changerecipientinput();
  document.getElementById("comment-options").style.display = "none";
}

document.getElementById("write-comment-web3").addEventListener("mouseover", show_web3_comment_options);
document.getElementById("write-comment-web3").addEventListener("mouseout", hide_web3_comment_options);

function show_web3_comment_options() {
  document.getElementById("comment-options").style.display = "block";
}

function hide_web3_comment_options() {
  document.getElementById("comment-options").style.display = "none";
}

function write_comment_web3(){
  switch(document.getElementById("comment-choose").value) {
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
    case 'comment-iost-iwallet':
      write_comment_web3_iost_iwallet();
      break;
    case 'comment-eos-scatter':
      write_comment_web3_eos_scatter();
      break;
    case 'comment-eos-anchor':
      write_comment_web3_eos_anchor();
      break;
    case 'comment-ontology-wallets':
      write_comment_web3_ontology_wallets();
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

// Send IOST and memo IWallet
async function write_comment_web3_iost_iwallet() {
  try {
    IWalletJS.enable().then((account) => {
      const iost = IWalletJS.newIOST(IOST);
      const fromAccount = account;
      const toAccount = comment_recipient;
      const amount = comment_amount;
      const memo = comment_message;
      const tx = iost.callABI(
        "token.iost",
        "transfer",
        ["iost", fromAccount, toAccount, amount, memo]
      );
      tx.addApprove('iost', amount);
      iost.signAndSend(tx)
      .on('pending', (pending) => {
        document.getElementById("comment-status").innerHTML = pending;
      })
      .on('success', (result) => {
        document.getElementById("comment-status").innerHTML = document.getElementById("comment-status").innerHTML = '<a href="https://www.iostabc.com/tx/'+result.tx_hash+'">'+result.tx_hash+'</a>';;
      })
      .on('failed', (failed) => {
        document.getElementById("comment-status").innerHTML = failed;
      })
    }).catch((error) => {
      document.getElementById("comment-status").innerHTML = error;
    })
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error + '. Please install <a href="https://github.com/iost-official/iost-extension/releases">IWallet</a> if you have not.';
  }
}

// Send EOS and memo Scatter
async function write_comment_web3_eos_scatter() {
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
    if(!connected) return document.getElementById("comment-status").innerHTML = 'no scatter';
    const eos = ScatterJS.eos(network, eosjs_api.Api, {rpc});
    ScatterJS.login().then(id => {
        if(!id) return document.getElementById("comment-status").innerHTML = 'no identity';
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
                    to: comment_recipient,
                    quantity: comment_amount.toFixed(4) + ' EOS',
                    memo: comment_message,
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(res => {
          document.getElementById("comment-status").innerHTML = 'tx sent: ' + res;
        }).catch(err => {
          document.getElementById("comment-status").innerHTML = 'tx error: ' + err;
        });
    });
  });
}

// Send EOS and memo Anchor
async function write_comment_web3_eos_anchor() {
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
          to: comment_recipient,
          quantity: comment_amount.toFixed(4) + ' EOS', // must be 4 decimals
          memo: comment_message
      },
  }

  session.transact({action}).then(({transaction}) => {
    document.getElementById("comment-status").innerHTML = '<a href="https://bloks.io/transaction/'+transaction.id+'">'+transaction.id+'</a>';
  }).catch(({error}) => {
    document.getElementById("comment-status").innerHTML = error.message + '. Please install <a href="https://greymass.com/en/anchor/download">Anchor</a> if you have not.';
  })
}

// Send Ontology Assets
async function write_comment_web3_ontology_wallets() {
  try {
    const client = dApi.client;
    client.registerClient({});
    const to = comment_recipient;
    const asset = 'ONG';
    const amount = comment_amount * 10**9;
    const result = await client.api.asset.send({ to, asset, amount });
    document.getElementById("comment-status").innerHTML = '<a href="https://explorer.ont.io/tx/'+result+'">'+result+'</a>';
  } catch(error) {
    document.getElementById("comment-status").innerHTML = error.message + '. Please install <a href="https://github.com/ontio/cyano-wallet">Cyano</a> or other wallets if you have not.';
  }
}