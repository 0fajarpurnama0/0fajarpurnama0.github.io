ethereum.on('accountsChanged', function () {
  dapp();
});

async function watchasset() {
  await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: '0x99a828fe0c1d68d9aebbb8651cdbdbac65dc6207',
        symbol: '0FP0EXP',
        decimals: 18,
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQbSURBVEhLtZVtbFNVGMefWzo6ApUAy9aIAwebVF4ii+nIGAaNiSRTAh+MJkaJMcEPhAQZfDN+MyExapAPI4GACNNkicYvuqOMzEWSQbbx5oyUwTa0a3ttC1332tLeHp9zntPb3st1YQv8cnvu85yX53+f81Z4EmiaMp4Iq6qBj4vHgt2fL59+Ajyl8V6fGVAlw/uqYN2/2lPkzRP9NlQt8UBoGblag46lC39CjWsQVLLv760SrzmST0FVZrkZHaFoIgOedMHtSuEBpAMbcpCJQX6t1kM1j4KIFfQpx8Sv45SIDMzoqfp6LE+wMMr28JeoEknwrfQo38r/RXctFW8XJULk3e5WNozGjyza3xWhyi/bLEpkxPnWmLRn+XbOhSmnqNDpWHJxzsi3VMykDO1Usrxl2wj2u5Xd81PnRdFXcqh5BEsU4IABtCnQnu0boiaFjG4ipkj4frHiFB2NpQukemHZH+Ysi55j+jkWxfGXA+tUrVjCuoS30VftUT4JIKgRCrxKtoWg7/KVAXzjh9ND1Sbfs8gCkYogFdiIkVygdf3TQDWIEkB44UzYSNwfe3dzWDkANashPy5GYa6U7kUWEg1+HSO0stAZFmVsVNRIigI//9YvXjhXnpysKFI5uhzn6pmVcPSINnxDu+V5WzVIGfHy62Fv82l2B03KsovvFPWlAjPpTPvRBM5VfEkCVt9TtZJEYM2Y68XQTTiwZyEMOhxDHEUTQNGxvMb+lC0lAkjv+QksK9fCB4eyVGOSW+zB1QNvRvkFxmtryDDUQtixCJh83aYMAvcMPu0XYg0vC/fX7t6ywrjcMnmcAH745a/Db9i3AOIs4Lg7M9l831VhGEb+nR2+ZGDNTKA2EhdJEzyvjPrGCmXZBHw1i8iIeXeRYbjLsMSVLO5ReWK+YXr39eRxFj7fH8HWReWixeTsheLhtwicHGxSVmFrD23aTsbDOY1E01iWaxwlr/SI7zBx0TmVWAQGO4fCvHGGv9LGBprlehY7ylMtZOSlQoegZX1sX9Nd3EK73/NSL8JZgGbAbPG/EMFPm5icVj5iu9T8evPeKXHNAERHJ2WVoqPzj/S0WhD7IrczvZXdxYsQR+Lz+6VrtSumVBsS9KWflztV3misU1YCTKQeKKvAx2/+TYZFAJPA0Fe7Jw+/Xtxwu7bExMLWxcgdWbgDS/pwR+L8NWVJ7Blg6G8/iyuHJGnehyuETOWEOyvW1nEfB3nTNN/mKlk4xC5gQ0XHW6Auhl/91sGp6myHaHC6yR9w3FL8DLvz3efFT3S+QQkV3a8bBriLf+Zwsx/8z6kmc66+6FB3BqJOzOxgdD6wwnEqCGNM9inp8NFXT5fKzAaN7O1W7izYNB6JeYyZQ3/suv9DZT9+5pzsnCiz3FePCYD/AB+CyhmlMwDsAAAAAElFTkSuQmCC',
      },
    },
  })
}

async function dapp() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  document.getElementById("showAccount").innerHTML = account;

  if(ethereum.isConnected()){
    document.getElementById("connect").innerHTML = "connected";

    document.getElementById("fajarpurnamatokenbalance").innerHTML = "retrieving fajar purnama token balance";

    // get token balance using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const minabi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
    ];

    const contract_address = "0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207";

    const erc20 = new ethers.Contract(contract_address, minabi, provider);

    fajarpurnamatokenbalance = await erc20.balanceOf(signer.getAddress());
    document.getElementById("fajarpurnamatokenbalance").innerHTML = fajarpurnamatokenbalance;

    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("minemerange").value = 0;
    }
    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("minemerange").value = 0;
        document.getElementById("mineme-widget").style.display = "none";
        fajarpurnamatokenbalance -= 10;
    }
    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("personal-referrals").style.display = "none";
        fajarpurnamatokenbalance -= 10;
    }
    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("paypal-widget").style.display = "none";
        fajarpurnamatokenbalance -= 10;
    }
    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("cryptocurrency-donate-widget").style.display = "none";
        fajarpurnamatokenbalance -= 10;
    }
    if (fajarpurnamatokenbalance > 0) {
      document.getElementById("donate-evm-widget").style.display = "none";
      fajarpurnamatokenbalance -= 10;
    }
    if (fajarpurnamatokenbalance > 0) {
        document.getElementById("grid-widget").style.display = "none";
        document.getElementById("grid-container").style.gridTemplateColumns = "auto auto";
        fajarpurnamatokenbalance -= 10;
    }
  }
}
