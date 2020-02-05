$(document).ready(function(){
  $(".navmenu").html(`
         <li class="dropdown nav-menu">
	    <a href=".." class="dropbtn">Home</a></li>
          <li class="dropdown nav-menu">
            <a href="about.html" class="dropbtn">About</a>
            <div class="dropdown-content">
			  <a href="best-personal-advice-to-start.html">Best Personal Advice To Start</a>
			  <a href="how-to-get-crypto">How To Get Crypto</a>			  
            </div>
          </li>
          <li class="dropdown nav-menu">
            <a href="mining.html" class="dropbtn">Mining</a>
            <div class="dropdown-content">
			  <a href="simple-mining.html">Simple Mining</a>
			  <a href="regular-mining.html">Regular Mining</a>
			  <a href="advance-mining.html">Advance Mining</a>			  
            </div>
          </li>
          </li>
          <li class="dropdown nav-menu">
            <a href="applications.html" class="dropbtn">Applications</a>
            <div class="dropdown-content">
			  <a href="browsers-that-rewards.html">Browser That Rewards</a>
			  <a href="decentralized-platforms.html">Decentralized Platforms</a>
			  <a href="crypto-faucets.html">Crypto Faucets</a>
            </div>
          </li>
   `);
});
