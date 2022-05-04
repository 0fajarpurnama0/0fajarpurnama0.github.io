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
      document.getElementById("comment-message").value = 'Max Message size 28 Bytes or Char';
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
    .then((txHash) => document.getElementById("comment-status").innerHTML = txHash)
    .catch((error) => document.getElementById("comment-status").innerHTML = error.message);
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
    document.getElementById("comment-status").innerHTML = broastTx;
  }
  catch(error) {
    document.getElementById("comment-status").innerHTML = error.message;
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
    document.getElementById("comment-status").innerHTML = error.message;
  });
}