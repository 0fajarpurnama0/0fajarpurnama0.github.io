async function dapp_tron() {
    try {
        document.getElementById('showAccount').innerHTML = await window.tronWeb.defaultAddress.base58;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
    } catch(err) {
        document.getElementById('showAccount').innerHTML = `Have you install any dapp wallet such as <a href="https://www.tronlink.org/">Tronlink</a>?`;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = err.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}