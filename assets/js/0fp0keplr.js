async function dapp_keplr() {
    try {
      chainId = "cosmoshub-4";
      await window.keplr.enable(chainId);
      let public_key = await window.keplr.getKey(chainId);
      document.getElementById("showAccount").innerHTML = public_key.bech32Address;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch(error) {
      document.getElementById('showAccount').innerHTML = `Have you install <a href="https://www.keplr.app/">Keplr</a>?`;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}