function dapp_neoline_n2() {
  let neoline = new NEOLine.Init();
  neoline.getAccount()
  .then(account => {
    neoline_account = account;
    document.getElementById('showAccount').innerHTML = neoline_account.address;
    document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
    document.getElementById('connect').innerHTML = "Connected";
  })
  .catch(error => {
    document.getElementById('showAccount').innerHTML = `Have you install <a href="https://neoline.io/en/">Neoline</a>?`;
    document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
  })
}

function dapp_neoline_n3() {
  let neolineN3 = new NEOLineN3.Init();
  neolineN3.getAccount()
  .then(account => {
    neoline_account = account;
    document.getElementById('showAccount').innerHTML = neoline_account.address;
    document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
    document.getElementById('connect').innerHTML = "Connected";
  })
  .catch(error => {
    document.getElementById('showAccount').innerHTML = `Have you install <a href="https://neoline.io/en/">Neoline</a>?`;
    document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
  })
};