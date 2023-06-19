async function dapp_near() {
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
        //document.getElementById("near-networkid").innerHTML = walletAccountObj.connection.networkId;
        //document.getElementById("near-network-url").innerHTML = walletAccountObj.connection.provider.connection.url;
        document.getElementById("showAccount").innerHTML = walletAccountObj.accountId;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        window.solana.on("connect", () => document.getElementById('connect').innerHTML = "Connected");
      } else {
        wallet.requestSignIn({ contractId: '0fajarpurnama0.near' });
      }
    } catch(error) {
      //document.body.innerHTML += error.message;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
  }