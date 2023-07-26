async function dapp_zilpay() {
    try {
      await window.zilPay.wallet.connect();
      let zilliqa_zilpay_account = await window.zilPay.wallet.defaultAccount;
      document.getElementById('showAccount').innerHTML = zilliqa_zilpay_account.base16 + " " + zilliqa_zilpay_account.bech32;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch(error) {
        document.getElementById('showAccount').innerHTML = `Have you install <a href="https://zilpay.io/">Zilpay</a>?`;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}