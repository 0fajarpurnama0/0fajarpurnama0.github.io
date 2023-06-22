async function dapp_rabbet() {
    if (window.rabet) {
        await window.rabet.connect()
        .then(result => {
            document.getElementById('showAccount').innerHTML = result.publicKey;
            document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
            document.getElementById('connect').innerHTML = "Connected";
        })
        .catch(error => {
            document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
        });
    } else {
        document.getElementById("showAccount").innerHTML = `Have you install <a href="https://rabet.io/">Rabbet</a>?`;
    }
}