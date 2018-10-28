const mining_cost_content = `

<p>
  The cost of mining are basically:
  <ul>
    <li>Electricity</li>
    <li>Internet Connection</li>
  </ul>
  If these are free, then it's a guarantee profit. However, do consider resting your computer sometimes.
</p>

`

const advanced_mining_content = `

<p>This page provides information of mining the usual way which in general they are:</p>
<ol>
	<li>Find and study a coin.</li>
	<li>Get your hardware.</li>
	<li>Find and join a pool.</li>
	<li>Find and install your software.</li>
</ol>

`

$("#coin").click(function(){
    $(".grid-content").html(`

${mining_cost_content}
${advanced_mining_content}

<p>A very easy way is to use Cryptotab Browser. As I'm writting now, Cryptotab Browser is considered new because it is the first browser with a built-in mining algorithm to mine the most profitable cryptocurrency coin at that time which will be automatically converted and allows you to earn bitcoin while browsing as you normally would, and is one the legit mining softwares.</p> 
<p>The interface is very similar to Chromium, if you ask my opinion, I can't tell the difference from a glance. To start mining:</p>

<ol>
  <li>Download Cryptotab Browser or extension at <a href="https://get.cryptobrowser.site/1786953"> https://get.cryptobrowser.site/1786953</a>.</li>
  <li>Install by running the executable downloaded file.</li>
  <li>Open Cryptotab and scroll the mining CPU usage to your choice.</li>
  <li>Open the menubar, go to the buttom, and connect with either Facebook, Google, Twitter, or VK to save your earnings in one of those accounts.</li>
  <li>You can withdraw your earnings into your bitcoin wallet which you must download separately, additionally you can install Cryptosearch to reduce the minimum withdraw limit.</li>
</ol>
<p>Cryptotab Browser is available on Windows, MAC, and Android. Unfortunately, not yet for Linux (only the browser extension)</p>
`
);
});

$("#gshare").click(function(){
    $(".grid-content").html(`
<script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"></script>
<coingecko-coin-price-chart-widget currency="usd" coin-id="gamecredits" locale="en" height="300" width="0"></coingecko-coin-price-chart-widget>
	
${mining_cost_content}
${advanced_mining_content}

<p> Other than Cryptotab Browser, another easy way is to use GShare. The differences between Cryptotab Browser is that GShare is a gaming platform and the cryptocurrency mined and earned is gamecredits which is a cryptocurrency made for the gaming industry. Although it is mainly to buy games or pay game developers, it can also be exchange to another cryptocurrency and even physical money. To start using GShare:</p>

<ol>
  <li>Download GShare at <a href="https://gn.org/gshare"> https://gn.org/gshare</a>.</li>
  <li>Install by running the executable downloaded file.</li>
  <li>Open GShare.</li>
  <li>Register if you haven't.</li>
  <li>Start mining with CPU.</li> 
  <li>You can withdraw your earnings into your gamecredit wallet which you must download separately.</li>
  <li>For mining with GPU, you need Nvidia Cudatoolkit for Nvidia, and some other software which I still don't know yet if you are using other than Nvidia.</li>
</ol>
<p>GShare is available on Windows and Linux.</p>
`
);
});

$("#monerowebminer").click(function(){
    $(".grid-content").html(`
<script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"></script>
<coingecko-coin-price-chart-widget currency="usd" coin-id="monero" locale="en" height="300" width="0"></coingecko-coin-price-chart-widget>

${mining_cost_content}
${advanced_mining_content}

<p>Web mining is the simplest one I have found and amongst them, the easiest one to use is Monero Web Miner website. To begin mining:</p>

<ol>
  <li>Go to <a href="https://www.monerowebminer.com"> https://www.monerowebminer.com</a>.</li>
  <li>Register if you haven't.</li>
  <li>Start mining with CPU.</li> 
  <li>You can withdraw your earnings into your monero wallet which you must download separately.</li>
</ol>
`
);
});