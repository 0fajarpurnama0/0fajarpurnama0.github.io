async function dapp_ontology() {
    try {
      const dApi = window.dApi;
      const client = dApi.client;
      client.registerClient({});
      const account = await client.api.asset.getAccount();
      document.getElementById("showAccount").innerHTML = account;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
      document.getElementById('connect').innerHTML = "Connected";
      //const balance = await client.api.network.getBalance({ address: account });
      //document.getElementById("ontology-ont").innerHTML = balance.ONT;
      //document.getElementById("ontology-ong").innerHTML = balance.ONG;
    } catch (error) {
      document.getElementById("showAccount").innerHTML = `Have you installed any Ontology wallet like <a href="https://onto.app/">Onto Wallet</a>?`;
      document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}