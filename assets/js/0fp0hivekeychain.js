async function dapp_hivekeychain() {
    try {
      // Request a handshake from Hive Keychain
      const response = await hive_keychain.requestHandshake();

      // Check if the response is successful
      if (response.success) {
        // The handshake is successful. You can proceed with blockchain-related actions.
        document.getElementById("showAccount").innerHTML = response.username +" "+ response.pubWif;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
      } else {
        // Handshake failed or user declined the request.
        document.getElementById('showAccount').innerHTML = response.message;
      }
    } catch (error) {
      document.getElementById('showAccount').innerHTML = `Have you install <a href="https://hive-keychain.com/">Hive Key Chain</a>?`;
      document.getElementById('fajarpurnamatokenbalance').innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}