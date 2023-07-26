async function dapp_iwallet() {
    try {
      document.getElementById("iwallet-network").innerHTML = IWalletJS.network;
      IWalletJS.enable().then((account) => {
        if(account){
          document.getElementById("showAccount").innerHTML = account;
          //const iost = IWalletJS.newIOST(IOST);
          //console.log(iost);
        } else {
          document.getElementById("showAccount").innerHTML = 'please import account';
        }
      }).catch((error) => {
        document.getElementById("showAccount").innerHTML = `Have you install <a href="https://github.com/iost-official/iost-extension">IWallet</a>?`;
        document.getElementById("fajarpurnamatokenbalance").innerHTML = error.type;
      })
    } catch(error) {
      document.getElementById("showAccount").innerHTML = `Have you install <a href="https://github.com/iost-official/iost-extension">IWallet</a>?`;
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}