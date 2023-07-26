async function myalgo_connect_user() {
    try{
      const myAlgoConnect = new MyAlgoConnect();
      const accountsSharedByUser = await myAlgoConnect.connect();
      document.getElementById('showAccount').innerHTML = accountsSharedByUser[0].name +" "+ accountsSharedByUser[0].address;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch(error) {
      document.getElementById('showAccount').innerHTML = `Have you install <a href="https://wallet.myalgo.com/home">MyAlgo</a>?`;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}