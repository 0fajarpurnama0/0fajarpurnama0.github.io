async function dapp_keeper() {
    KeeperWallet.publicState()
    .then(state => {
      document.getElementById("showAccount").innerHTML = state.account.address +" "+ state.account.publicKey;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    })
    .catch(error => {
      document.getElementById("showAccount").innerHTML = `Have you install <a href="https://keeper-wallet.app/">Keeper</a>?`;
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    });
}