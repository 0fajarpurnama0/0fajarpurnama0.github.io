async function dapp_ton() {
    try {
        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json'
        });
        const connectedWallet = await tonConnectUI.connectWallet();
        document.getElementById('showAccount').innerHTML = connectedWallet.account.address;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
    } catch (err) {
        document.getElementById('showAccount').innerHTML = `Have you install <a href="https://telegram.org/">Telegram</a>?`;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = err.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}