async function hive_signer_login() {
    try {
      let client = new hivesigner.Client({
        app: 'fpdev',
        callbackURL: 'http://127.0.0.1:5500/',
        scope: ['vote', 'comment', 'offline', 'login']
      });
      let link = await client.getLoginURL();
      await client.login(link); // or await window.open(link, '_blank');
      const hivesigner_query_string = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      document.getElementById('showAccount').innerHTML = hivesigner_query_string.username + " " + hivesigner_query_string.code;
      client.setAccessToken(hivesigner_query_string.code);
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
    } catch(error) {
      document.getElementById('showAccount').innerHTML = `Have you install <a href="https://hivesigner.com/">Hive Signer</a>?`;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}