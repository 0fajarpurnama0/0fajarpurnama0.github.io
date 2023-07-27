async function dapp_anchorlink() {
    try {
        const transport = new AnchorLinkBrowserTransport()
        const link = new AnchorLink({
            transport,
            chains: [
                {
                    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                    nodeUrl: 'https://eos.greymass.com',
                }
            ],
        })
    
        // Perform the login, which returns the users identity
        const identity = await link.login('mydapp');
    
        // Save the session within your application for future use
        const {session} = identity;
        document.getElementById("showAccount").innerHTML = session.auth;
        document.getElementById('fajarpurnamatokenbalance').innerHTML = "token coming soon";
        document.getElementById('connect').innerHTML = "Connected";
    } catch (error) {
        document.getElementById("showAccount").innerHTML = `Have you install <a href="https://www.greymass.com/anchor">Anchor Link</a>?`;
        document.getElementById("fajarpurnamatokenbalance").innerHTML = error.message + ". Additionally, you can check the logs in your browser's developer console by pressing Ctrl + Shift + J or Cmd + Option + J.";
    }
}