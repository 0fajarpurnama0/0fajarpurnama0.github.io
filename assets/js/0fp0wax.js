async function dapp_wax() {
    try {
      let wax = new waxjs.WaxJS({
        rpcEndpoint: 'https://wax.greymass.com'
      });
      const userAccount = await wax.login();
      const pubKeys = wax.pubKeys;
      document.getElementById("showAccount").innerHTML = userAccount + " " + pubKeys;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch(error) {
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
  }