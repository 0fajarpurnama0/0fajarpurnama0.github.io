async function dapp_scatter() {
    await ScatterJS.plugins( new ScatterEOS() );
  
    const network = ScatterJS.Network.fromJson({
      blockchain:'eos',
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      host:'nodes.get-scatter.com',
      port:443,
      protocol:'https'
    });
  
    ScatterJS.connect('MyAppName', {network}).then(connected => {
      console.log(connected);
      ScatterJS.login().then(result => {
        document.getElementById('showAccount').innerHTML = result.accounts[0].name +" "+ result.accounts[0].publicKey;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
      }).catch(error => {
        document.getElementById("showAccount").innerHTML = `Have you install <a href="https://github.com/GetScatter/ScatterDesktop">Scatter</a>?`;
        document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
      });
    }).catch(error => {
      document.getElementById("showAccount").innerHTML = `Have you install <a href="https://github.com/GetScatter/ScatterDesktop">Scatter</a>?`;
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    });
}