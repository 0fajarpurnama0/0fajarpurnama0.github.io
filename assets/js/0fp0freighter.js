async function dapp_freighter() {
    try{
        document.getElementById('showAccount').innerHTML = await window.freighterApi.getPublicKey();
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
    } catch(error){
        document.getElementById("showAccount").innerHTML = `Have you install <a href="https://www.freighter.app/">Freighter</a>?`;
        document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}