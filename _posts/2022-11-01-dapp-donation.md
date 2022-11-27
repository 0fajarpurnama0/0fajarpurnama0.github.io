---
layout: post
title: DAPP Donations
category: transparency
tags: [cryptocurrency, donation, transparency, wallet, web3]
featuredimage: https://images.hive.blog/DQmVQcboeQjDveoH6uyKSe8gZ4tYWqZEqTXSApip8yBzLHv/cover.jpg
description: These are my dapp wallets publicly for accepting donations and messages.
canonicalurl: https://0fajarpurnama0.github.io/transparency/2022/11/01/dapp-donation
---
<style>
/* Button CSS */
.button-71 {
  background-color: #0078d0;
  border: 0;
  border-radius: 13px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu,
  "Helvetica Neue", sans-serif;
  font-size: 1.5vw;
  font-weight: 600;
  outline: 0;
  padding: 1vw 1vw;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-71:before {
  background-color: initial;
  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  transition: all 0.3s;
  width: 92%;
}
.button-71:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
  rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
  transform: scale(1.05);
}

/* end button css */
/* start input box css */
:root {
  --input-color: #99a3ba;
  --input-border: #cdd9ed;
  --input-background: #fff;
  --input-placeholder: #cbd1dc;
  --input-border-focus: #275efe;
  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #eef4ff;
  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #678efe;
}
.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 1.5vw;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
}
.form-field::placeholder {
  color: var(--input-placeholder);
}
.form-field:focus {
  outline: none;
  border-color: var(--input-border-focus);
}
.form-group {
  position: relative;
  display: flex;
  width: 100%;
}
.form-group > span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}
.form-group > span:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.form-group > span:first-child,
.form-group .form-field:first-child {
  border-radius: 6px 0 0 6px;
}
.form-group > span:last-child,
.form-group .form-field:last-child {
  border-radius: 0 6px 6px 0;
}
.form-group > span:not(:first-child),
.form-group .form-field:not(:first-child) {
  margin-left: -1px;
}
.form-group .form-field {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}
.form-group > span {
  text-align: center;
  padding: 1vw 1.5vw;
  font-size: 1.5vw;
  line-height: 25px;
  color: var(--group-color);
  background: var(--group-background);
  border: 1px solid var(--group-border);
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.form-group:focus-within > span {
  color: var(--group-color-focus);
  background: var(--group-background-focus);
  border-color: var(--group-border-focus);
}
    
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
      background-color: RGB(149, 82, 81);
      margin: 2vw;
}
    
* {
  box-sizing: inherit;
      word-wrap: break-word;
      text-align: justify;
}
    
*:before, *:after {
  box-sizing: inherit;
}

#showAccount {
  border-style: ridge;
}

    #portfolio {
      background-color: lightyellow;
        padding: 3vw;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    p, figcaption, li, span {
      font-size: 13pt;
      font-family: "Helvetica";
      line-height: 1.5;
    }
    
    h1, h2, h3, h4, h5 {
      font-family: "Lucida Handwriting";
        font-size: 24pt;
        color: green;
        text-decoration: underline;
    }
    
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#third-party-portfolio-portal {
      background-color: lightgreen;
  display: none;
        margin-bottom: 2vh;
        padding: 2vw;
}
    
    #fajarpurnamatokenbalance, #showAccount {
      color: white;
    }
    
    #otherportfoliotrackersbutnoshareablehyperlink {
      color: red;
    }
    
    #zerotokens {
      background-color: darkred;
        color: white;
        padding: 4vw;
    }
    
    /* unvisited link */
    #zerotokens a:link {
      color: gold;
    }

    /* visited link */
    #zerotokens a:visited {
      color: lightgreen;
    }

    /* mouse over link */
    #zerotokens a:hover {
      color: grey;
    }

    /* selected link */
    #zerotokens a:active {
      color: lightblue;
    }
    
    /* unvisited link */
    a:link {
      color: blue;
    }

    /* visited link */
    a:visited {
      color: green;
    }

    /* mouse over link */
    a:hover {
      color: lightblue;
    }

    /* selected link */
    a:active {
      color: red;
    }
</style>
</head>
<body>	
<div id="portfolio">
</div>
    
<script>

const portals = {
  apeboard: "https://apeboard.finance/dashboard/",
  nansen: "https://portfolio.nansen.ai/dashboard/",
  debank: "https://debank.com/profile/",
  markr: "https://markr.io/#/wallet?address=",
  pacoca: "https://pacoca.io/dashboard?address=",
  tin: "https://tin.network/en/watch/",
  zapper: "https://zapper.fi/account/",
  zerion: "https://app.zerion.io/",
  sonarwatch: "https://sonar.watch/dashboard/",
  stepfinance: "https://app.step.finance/#/watch/",
  extraterrestrialfinder: "https://finder.extraterrestrial.money/columbus-5/address/"
}

/* Unshareable */
const unshareable_portals = {
  degenwatch: "https://degen.watch/",
  defiyield: "https://defiyield.app/dashboard/",
  yieldmonitor: "https://app.yieldmonitor.io/",
  zilstream: "https://zilstream.com/portfolio",
  zilwatch: "https://zilwatch.io/",
  tefi: "https://www.tefi.app/",
  apyvision: "https://app.apy.vision/",
  yieldwatch: "https://www.yieldwatch.net/",
  jdiyield: "https://www.jdiyield.com/"
}

const blockchain_explorers = {
  tronscan: "https://tronscan.org/#/address/",
  doracozneo3: "https://dora.coz.io/address/neo3/mainnet/",
  neoscan: "https://neoscan.io/address/",
  eosauthority: "https://eosauthority.com/account/",
  viewblockzil: "https://viewblock.io/zilliqa/address/",
  viewblocktt: "https://viewblock.io/thundercore/",
  tomoscan: "https://tomoscan.io/address/",
  kccexplorer: "https://explorer.kcc.io/en/tokentxns/",
  wantokenview: "https://wan.tokenview.com/en/address/",
  energiswap: "https://info.energiswap.exchange/account/",
  wavesexplorer: "https://wavesexplorer.com/address/",
  iostabc: "https://www.iostabc.com/account/",
  iostexplorer: "https://explorer.iost.io/",
  iosttokenview: "https://iost.tokenview.io/en/address/",
  backendg: "https://infoapi.backendq.com/address/",
  lumenscan: "https://lumenscan.io/account/",
  hiveausbit: "https://hive.ausbit.dev/",
  waxbloks: "https://wax.bloks.io/account/",
  near: "https://explorer.near.org/accounts/",
  algorandexplorer: "https://algoexplorer.io/address/",
  vechain: "https://explore.vechain.org/accounts/",
  ont: "https://explorer.ont.io/address/"
}

    let portal_viewers = "<option>default</option>";
    let explorer_viewers = "<option>default</option>";

    for (let portal in portals){
      portal_viewers += "<option>"+portal+"</option>";
    }

    for (let explorer in blockchain_explorers){
      explorer_viewers += "<option>"+explorer+"</option>";
    }
    
const wallets = {
  evm: {
          account: "0x3D4c67A2A40bC24ec53ab767b9247c02A2250BCB",
            default_portal: portals.nansen,
            icon: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
        },
  neo2: {
          account: "Abd2G4ceprVzUymJGy1Cv9dSkrWbisVAar",
            default_portal: blockchain_explorers.neoscan,
            icon: "https://assets.coingecko.com/coins/images/480/small/NEO_512_512.png?1594357361"
        },
  neo3: {
          account: "NeUAs33FZJzNzgt1oaPTpYRv5t5gZWiHS8",
            default_portal: blockchain_explorers.doracozneo3,
            icon: "https://assets.coingecko.com/coins/images/480/small/NEO_512_512.png?1594357361"
        },
  tron: {
          account: "TFZKkTh3M3z2hAKyjeu9MjGabeZYrKEmsY",
            default_portal: blockchain_explorers.tronscan,
            icon: "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png?1547035066"
        },
        eos: {
          account: "urf5n4htf5em",
            default_portal: blockchain_explorers.eosauthority,
            icon: "https://assets.coingecko.com/coins/images/738/small/eos-eos-logo.png?1547034481"
        },
        solana: {
          account: "G6Ha3ibcMMFiRjWMCA3YEioC1NDfrKEb3NEFEwevXZxb",
            default_portal: portals.sonarwatch,
            icon: "https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422"
        },
        wax: {
          account: "nbjaw.wam",
            default_portal: blockchain_explorers.waxbloks,
            icon: "https://assets.coingecko.com/coins/images/1372/small/WAX_Coin_Tickers_P_512px.png?1602812260"
        },
        near: {
          account: "fajarpurnama.near",
            default_portal: blockchain_explorers.near,
            icon: "https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077"
        },
        zilliqa: {
          account: "zil1kshm5ad33nkh8usfuau7ymq28phrredcnj2fxm",
            default_portal: blockchain_explorers.viewblockzil,
            icon: "https://assets.coingecko.com/coins/images/2687/small/Zilliqa-logo.png?1547036894"
        },
        iost: {
          account: "FoCPL8BH8UQ1qerkpQVdqDE1or3hPPW7aRFVpu46czPL",
            default_portal: blockchain_explorers.iosttokenview,
            icon: "https://assets.coingecko.com/coins/images/2523/small/IOST.png?1557555183"
        },
        algorand: {
          account: "OHOLBJ4OUNLR5MPPLZ7O7D2BBKTELDWJPRF5KR7VM54RBJNA5MBCSYIIS4",
            default_portal: blockchain_explorers.algorandexplorer,
            icon: "https://assets.coingecko.com/coins/images/4380/small/download.png?1547039725"
        },
        stellarlumen: {
          account: "GB3Y7ZMPZEWY7P6TKH3N22VKMBOD4ILCV3UN3IMMRUADKDGNZKL73DSM",
            default_portal: blockchain_explorers.lumenscan,
            icon: "https://assets.coingecko.com/coins/images/100/small/Stellar_symbol_black_RGB.png?1552356157"
        },
  vechain: {
          account: "0xB9e12b1240b3eADc2f07d892e847256526526320",
            default_portal: blockchain_explorers.vechain,
            icon: "https://assets.coingecko.com/coins/images/1167/small/VeChain-Logo-768x725.png?1547035194"
        },
  onthology: {
          account: "AZsLt6ZAH31KbwB4TjTc8jMnZvp1XdbWwk",
            default_portal: blockchain_explorers.ont,
            icon: "https://assets.coingecko.com/coins/images/3447/small/ONT.png?1583481820"
        },
        hive: {
          account: "@fpdev",
            default_portal: blockchain_explorers.hiveausbit,
            icon: "https://assets.coingecko.com/coins/images/10840/small/logo_transparent_4x.png?1584623184"
        }
}

function walletportalviewer(wallet){
  let portalviewer = document.getElementById(wallet+"portalviewer").value;
  let theportalviewer = "";
  
  if (portalviewer === "default"){
    theportalviewer = wallets[wallet].default_portal;
  } else {
    theportalviewer = portals[portalviewer];
  }
  
  document.getElementById(wallet+"wallet").innerHTML = `
    <h2><a href="`+theportalviewer+wallets[wallet].account+`"><img style="height: 1em;" src="`+wallets[wallet].icon+`"/>`+wallet+` wallet</a></h2>
    <div class="video-container">
      <iframe src="`+theportalviewer+wallets[wallet].account+`" title="`+wallet+` wallet" loading="lazy"></iframe>
    </div>
  `;
}

function walletexplorerviewer(wallet){
  let portalviewer = document.getElementById(wallet+"explorerviewer").value;
  let theportalviewer = "";
  
  if (portalviewer === "default"){
    theportalviewer = wallets[wallet].default_portal;
  } else {
    theportalviewer = blockchain_explorers[portalviewer];
  }
  
  document.getElementById(wallet+"wallet").innerHTML = `
    <h2><a href="`+theportalviewer+wallets[wallet].account+`"><img style="height: 1em;" src="`+wallets[wallet].icon+`"/>`+wallet+` wallet</a></h2>
    <div class="video-container">
      <iframe src="`+theportalviewer+wallets[wallet].account+`" title="`+wallet+` wallet" loading="lazy"></iframe>
    </div>
  `;
}

for (let wallet in wallets) {
  document.getElementById("portfolio").innerHTML += `
    <div id="`+wallet+`wallet">
      <h2><a href="`+wallets[wallet].default_portal+wallets[wallet].account+`"><img style="height: 1em;" src="`+wallets[wallet].icon+`"/>`+wallet+` wallet</a></h2>
      <div class="video-container">
        <iframe src="`+wallets[wallet].default_portal+wallets[wallet].account+`" title="`+wallet+` wallet" loading="lazy"></iframe>
      </div>
    </div>
    <select id="`+wallet+`portalviewer" onchange="walletportalviewer('`+wallet+`')">
    `+portal_viewers+`
    </select>
    <select id="`+wallet+`explorerviewer" onchange="walletexplorerviewer('`+wallet+`')">
    `+explorer_viewers+`
    </select>
  `;
}
    
</script>