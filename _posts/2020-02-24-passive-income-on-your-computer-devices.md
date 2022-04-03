---
layout: post
title: Passive Income On Your Computer Devices
categories: cryptocurrency
tags: [airtime, bitcoin, bittube, brave, browser, coin, computer, cryptocurrency, cryptotab, earning, electricity, free, income, Internet, mining, monetization, money, netbox, passive, smartphone]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmS4asRMErvU6B5VCRFWHRSmDsAptxZ7PDKQYt7qZNM8an/cashmagnetupload.gif
description: If they provide you with free electricity and Internet, you can earn passive incomes.
canonicalurl: https://0fajarpurnama0.github.io/cryptocurrency/2020/02/24/passive-income-on-your-computer-devices
---

<script>
$(document).ready(function(){
  passive_income();
}).change(function(){
  passive_income();
});

function passive_income(){
  $.getJSON('https://0fajarpurnama0.github.io/assets/json/internet_passive_income.json', function(data) {
   var smartphone_length = data.smartphone.length;
    var desktop_length = data.desktop.length;
    
    for(i = 0; i < smartphone_length; i++){
      print("smartphone", data.smartphone[i].name, data.smartphone[i].image, data.smartphone[i].video, data.smartphone[i].link, data.smartphone[i].method, data.smartphone[i].electricity, data.smartphone[i].monitor, data.smartphone[i].shortdescription)
    }
    
    for(i = 0; i < desktop_length; i++){
      print("desktop", data.desktop[i].name, data.desktop[i].image, data.desktop[i].video, data.desktop[i].link, data.desktop[i].method, data.desktop[i].electricity, data.desktop[i].monitor, data.desktop[i].shortdescription)
    }
  });
}

function print(id, name, image, video, link, method, electricity, monitor, shortdescription){
  $('#'+id).append(`
    <h3>`+name+`</h3>
      <figure>
        <img src="`+image+`" alt="`+image+`"/>
        <figcaption></figcaption>
      </figure>
      <ul>
      <li>Link: <a href="`+link+`">`+link+`</a></li>
      <li>Method: `+method+`</li>
      <li>Electricity: `+electricity+`</li>
      <li>Monitor: `+monitor+`</li>
      <li>Shortdescription: `+shortdescription+`</li>
    </ul>
  `);
}
</script>

[source code](http://maetrimal.com/22989623/psvincm-json-get-source)

## 0\. Motivation

#### Whether at your, dormitory, mall, office, plaza, restaurant, school, shop, university, venue, work place, etc, if they provide you with **free electricity and Internet**, you can earn passive incomes. If not, fear not, there some methods if you don't have that luxury.

## 1\. Smartphone

<div id="smartphone">
 
</div>

#### Mine Other Cryptocurrency

* **Method:** mine cryptocurrency
* **Power consumption:** depends on CPU usage configuration but affects mining income
* **Monitor:** on and off button
* **General CPU Mining List:**

* [https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07](https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07)
* [https://highpay-pool.com/?ref=149](https://highpay-pool.com/?ref=149)
* [https://www.crypto-webminer.com/](https://www.crypto-webminer.com/)
* [https://coinwebmining.com](https://coinwebmining.com/)
* Other web miner

## 2\. Computer

<div id="desktop">
 
</div>

### Web Mining (Medium Electricity)

* [https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07](https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07)
* [https://highpay-pool.com/?ref=149](https://highpay-pool.com/?ref=149)
* [https://www.crypto-webminer.com/](https://www.crypto-webminer.com/)
* [https://coinwebmining.com](https://coinwebmining.com/)

<div class="video-container"><iframe src="https://lbry.tv/$/embed/good-mining-starting-point-for-newbies-4/d83b1eae2b700bda3ab41110caca84904d308478" frameborder="0" allowfullscreen=""></iframe></div>

### CPU coin mining (Medium Electricity)

Algorithms:

* Mine [Monero](https://www.getmonero.org/) or [Mineme](https://www.mintme.com/coin/) or [Magicoin](https://www.m-core.org/)
* [Coins with Yescrypt Algorithms](https://coinguides.org/yescrypt-algorithm-coins/)
* [Some Coins with Cryptonight Algorithms](https://coinguides.org/cryptonight-algorithm-coins/)
* [Some Coins with Lyra2Z Algorithms ](https://coinguides.org/lyra2z-algorithm-coins-miners-hashrate/)
* [Some Coins with NeoScrypt Algorithms](https://coinguides.org/neoscrypt-coins/)
* Some hodl mining algorithms such as hodl coin and roi-coin
* More to be updated such as CPU coin

Software:

* Each coin may have their own mining software, check their websites.
* [cpuminer-multi](https://github.com/tpruvot/cpuminer-multi)
* [cpuminer-opt](https://github.com/JayDDee/cpuminer-opt)
* [xmr-stak](https://github.com/fireice-uk/xmr-stak)
* [xmrig](https://github.com/xmrig/xmrig)
* hodlminers

Solo Mining or Pool:

* Solo mining: go to each coins website
* Pool mining: search on search engines i.e. "Monero Mining Pool"

<div class="video-container"><iframe src="https://lbry.tv/$/embed/webchain-cpu-miner-ubuntu-18-04-lts/c4a23751885bec692be886090c083b48de261e57" frameborder="0" allowfullscreen=""></iframe></div>

### USB ASIC coin mining (Medium Electricity)

Buy the hardware. Software usually BFGminer or CGminer.

* SHA256
* Scrypt
* [Equihash](https://blog.goodaudience.com/the-equihash-asic-takeover-is-complete-d33f5444613?gi=8769f6ed9020)
* [Ethash](https://cointelegraph.com/news/bitmain-releases-ethash-asic-miners)
* [X11](https://coinguides.org/x11gost-algorithm-sibcoin-miner-coins/)
* [SHA3/Keccak](https://en.bitcoinwiki.org/wiki/SHA-3)
* [Nist5](https://coinguides.org/nist5-algorithm-coins-asic/)
* [Lyra](https://www.reddit.com/r/monacoin/comments/9kt88u/the_worlds_first_28nm_lyra2rev2_asic_miner/)
* [Blake 256](https://coinguides.org/blake256-algorithm-coins-asic-miners/), [Blake2b ](https://coinguides.org/blake2b/)
* [hmq725](https://coinguides.org/hmq1725-algorithm-coins-miner/)
* [Qubit](https://coinguides.org/qubit-algorithm-coins-asic/)
* [Skein](https://coinguides.org/skein-algorithm-coins-miner/)

<div class="video-container"><iframe src="https://lbry.tv/$/embed/mining-with-usb-miner-futurebit/54bf3a4d68e7ae3358b2e95d15fa867cb89539e5" frameborder="0" allowfullscreen=""></iframe></div>

### GPU coin mining (High Electricity but High Income)

Algorithms:

* [X16R](https://coinguides.org/x16r-algorithm-coins/), [X16S](https://coinguides.org/x16s-algorithm-coins/), [X17](https://coinguides.org/x17-algorithm-coins/), X21....
* [C11](https://coinguides.org/c11-algorithm-miner-coins/)
* [Grøstl](https://coinguides.org/groestl-algorithm-coins-miners/)
* [Time Travel](https://coinguides.org/time-travel-coins/)
* [Xevan](https://coinguides.org/xevan-coins/)
* [PHI1612](https://coinguides.org/phi1612-coins/)
* [Tribus](https://coinguides.org/tribus-coins/)
* [Skunkhash](https://coinguides.org/skunkhash-algorithm-coins/)
* [Blake2s](https://coinguides.org/blake2s-algorithm-coins/)

Software:

* [ccminer](https://github.com/tpruvot/ccminer/releases), [ccminerx21](https://github.com/tpruvot/ccminer/releases)
* [xmr-stak](https://github.com/fireice-uk/xmr-stak), [xmrig-nvidia](https://github.com/xmrig/xmrig-nvidia), [xmrig-amd](https://github.com/xmrig/xmrig-amd)
* [sgminer-gm](https://github.com/genesismining/sgminer-gm) (for older and ancient GPUs)
* [sgminer-arm](https://github.com/hominoids/sgminer-arm) (for single board computers and other arms)
* [cudaminer](https://github.com/cbuchner1/CudaMiner) (for ancient GPUs)

Solo Mining or Pool:

* Solo mining: go to each coins website
* Pool mining: search on search engines i.e. "Raven Coin Mining Pool"

<div class="video-container"><iframe src="https://lbry.tv/$/embed/mine-bitcoin-gold-at-mining-pool-hub-on/0a9f5464880c8611e58e3870c009888b7dd734dc" frameborder="0" allowfullscreen=""></iframe></div>

### ASIC coin mining (High up to Extremely High Electricy but Income As Well)**

Buy the expensive hardware. Software usually BFGminer or CGminer.

* SHA256
* Scrypt
* [Equihash](https://blog.goodaudience.com/the-equihash-asic-takeover-is-complete-d33f5444613?gi=8769f6ed9020)
* [Ethash](https://cointelegraph.com/news/bitmain-releases-ethash-asic-miners)
* [X11](https://coinguides.org/x11gost-algorithm-sibcoin-miner-coins/)
* [SHA3/Keccak](https://en.bitcoinwiki.org/wiki/SHA-3)
* [Nist5](https://coinguides.org/nist5-algorithm-coins-asic/)
* [Lyra](https://www.reddit.com/r/monacoin/comments/9kt88u/the_worlds_first_28nm_lyra2rev2_asic_miner/)
* [Blake 256](https://coinguides.org/blake256-algorithm-coins-asic-miners/), [Blake2b ](https://coinguides.org/blake2b/)
* [hmq725](https://coinguides.org/hmq1725-algorithm-coins-miner/)
* [Qubit](https://coinguides.org/qubit-algorithm-coins-asic/)
* [Skein](https://coinguides.org/skein-algorithm-coins-miner/)

### FPGA coin mining**

* [LBRY](https://coinguides.org/lbry-algorithm)

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/passive-income-on-your-computer-devices-xjgeww?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/passive-income-on-your-computer-devices-xjgeww?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/cryptocurrency/2020/02/24/passive-income-on-your-computer-devices](https://0fajarpurnama0.github.io/cryptocurrency/2020/02/24/passive-income-on-your-computer-devices)
*   [https://medium.com/@0fajarpurnama0/passive-income-on-your-computer-devices-af2525278357?source=friends_link&sk=79cf552e82aab428256c3c9da510aef3](https://medium.com/@0fajarpurnama0/passive-income-on-your-computer-devices-af2525278357?source=friends_link&sk=79cf552e82aab428256c3c9da510aef3)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/passive-income-computer-devices](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/passive-income-computer-devices)
*   [https://0darkking0.blogspot.com/2020/01/passive-income-on-your-computer-devices.html](https://0darkking0.blogspot.com/2020/01/passive-income-on-your-computer-devices.html)
*   [https://hive.blog/cryptocurrency/@fajar.purnama/passive-income-on-your-computer-devices?r=fajar.purnama](https://hive.blog/cryptocurrency/@fajar.purnama/passive-income-on-your-computer-devices?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/11-cryptocurrency/16-passive-income-on-computer-devices](https://0fajarpurnama0.cloudaccess.host/index.php/11-cryptocurrency/16-passive-income-on-computer-devices)
*   [https://steemit.com/cryptocurrency/@fajar.purnama/passive-income-on-your-computer-devices?r=fajar.purnama](https://steemit.com/cryptocurrency/@fajar.purnama/passive-income-on-your-computer-devices?r=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/passive-income-on-computer-devices](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/passive-income-on-computer-devices)