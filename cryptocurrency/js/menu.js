$(document).ready(function(){
  $(".navmenu").html(`
          <li class="dropdown nav-menu"><a href="index.html" class="dropbtn">Home</a></li>
          <li class="dropdown nav-menu">
            <a href="simple-mining.html" class="dropbtn">Simple Mining</a>
            <div class="dropdown-content">
			  <a id="monerowebminer" href="#">Monero Web Miner</a>			  
              <a id="cryptotab" href="#">Cryptotab</a>
			  <a id="gshare" href="#">GShare</a>
			  <a id="vertcoinoneclickminer" href="#">Vertcoin One Click Miner</a>
            </div>
          </li>
          <li class="dropdown nav-menu">
            <a href="javascript:void(0)" class="dropbtn">Advanced Mining</a>
            <div class="dropdown-content">
			  <a id="coin" href="#">Coin</a>
              <a id="hardware" href="#">Hardware</a>
			  <a id="pool" href="#">Pool</a>
			  <a id="Software" href="#">Software</a>
            </div>
          </li>
          <li class="dropdown nav-menu">
            <a href="javascript:void(0)" class="dropbtn">Monetized Mining</a>
            <div class="dropdown-content">
			  <a id="personalwebsite" href="#">Personal Website</a>
              <a id="webmining" href="#">Web Mining</a>
			  <a id="experimentground" href="#">Experiment Ground</a>
            </div>
          </li>
          <li class="dropdown nav-menu">
            <a href="javascript:void(0)" class="dropbtn">Withdrawing</a>
            <div class="dropdown-content">
              <a href="#">Wallet</a>
            </div>
          </li>
          <li class="dropdown nav-menu">
            <a href="javascript:void(0)" class="dropbtn">Trading</a>
            <div class="dropdown-content">
              <a href="#"></a>
            </div>
          </li>
   `);
});