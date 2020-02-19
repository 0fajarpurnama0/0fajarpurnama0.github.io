$(document).ready(function(){
  $(".navmenu").html(`
			<li class="navmenu dropdown-1"><a href="..">Home</a></li>
			<li class="navmenu dropdown-1"><a href="about.html">About</a>
				<ul class="navmenu dropcontent-1">
					<li class="navmenu dropdown-2"><a href="best-personal-advice-to-start.html">Best Personal Advice To Start</a></li>
					<li class="navmenu dropdown-2"><a href="how-to-get-crypto">How To Get Crypto</a></li>
				</ul>
			</li>
			<li class="navmenu dropdown-1"><a href="mining.html" class="dropbtn">Mining</a>
				<ul class="navmenu dropcontent-1">
				  <li class="navmenu dropdown-2"><a href="simple-mining.html">Simple Mining</a></li>
				  <li class="navmenu dropdown-2"><a href="regular-mining.html">Regular Mining</a></li>
				  <li class="navmenu dropdown-2"><a href="advance-mining.html">Advance Mining</a></li>			  
				</ul>
			</li>
			<li class="navmenu dropdown-1"><a href="applications.html" class="dropbtn">Applications</a>
				<ul class="navmenu dropcontent-1">
				  <li class="navmenu dropdown-2"><a href="browsers-that-rewards.html">Browser That Rewards</a></li>
				  <li class="navmenu dropdown-2"><a href="decentralized-platforms.html">Decentralized Platforms</a></li>
				  <li class="navmenu dropdown-2"><a href="crypto-faucets.html">Crypto Faucets</a></li>
				</ul>
			</li>
   `);
});
