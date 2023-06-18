async function dapp_solana() {
    try {
      const resp = await window.solana.connect();
      document.getElementById('showAccount').innerHTML = resp.publicKey.toString();
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      window.solana.on("connect", () => document.getElementById('connect').innerHTML = "Connected");
    } catch (err) {
      document.getElementById('showAccount').innerHTML = `Have you install any dapp wallet such as <a href="https://phantom.app/">Phantom</a> or <a href="https://trustwallet.com/">Trust Wallet</a> or use <a href="https://brave.com/faj135">Brave Browser</a> built-in wallet?`;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = err.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}