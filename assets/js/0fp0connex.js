async function dapp_sync2() {
    try {
      const connex = new Connex({
        node: 'https://mainnet.veblocks.net/', // veblocks public node, use your own if needed
        network: 'main' // defaults to mainnet, so it can be omitted here
      })
      const vendor = new Connex.Vendor('main'); // 'main','test' or genesis ID if it's private network
      document.getElementById('showAccount').innerHTML = vendor.address;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch (error) {
      document.getElementById("showAccount").innerHTML = `Have you install <a href="https://sync.vecha.in/">Sync2</a>?`;
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}