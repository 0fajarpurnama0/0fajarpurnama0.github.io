---
layout: post
title: Pendapatan Pasif dengan Komputer
categories: [internet, finance, cryptocurrency]
tags: [airtime, bitcoin, bittube, brave, browser, coin, komputer, cryptocurrency, cryptotab, pendapatan, listrik, gratis, Internet, tambang, monetisasi, uang, netbox, pasif, ponsel]
---

<script>
$(document).ready(function(){
  passive_income();
}).change(function(){
  passive_income();
});

function passive_income(){
  $.getJSON('https://0fajarpurnama0.github.io/assets/json/internet_passive_income_id.json', function(data) {
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
      <li>Metode: `+method+`</li>
      <li>Listrik: `+electricity+`</li>
      <li>Pengawasan: `+monitor+`</li>
      <li>Deskripsi singkat: `+shortdescription+`</li>
    </ul>
  `);
}
</script>

[source code](http://maetrimal.com/22989623/psvincm-json-get-source)

## 0\. Motivasi

#### Baik di asrama, asrama, mal, kantor, alun-alun, restoran, sekolah, toko, universitas, tempat kerja, dll, jika mereka memberi anda **listrik dan Internet gratis**, Anda bisa mendapatkan penghasilan pasif. Jika tidak, jangan kecewa, ada beberapa metode jika anda tidak memiliki keuntungan itu.

## 1\. Ponsel Pintar

<div id="smartphone">
 
</div>

#### Tambang koin kripto lain

* **Metode:** Tambang koin kripto
* **Listrik:** tergantung CPU dan penggunaannya tetapi berdampak pada pendapatan tambang
* **Pengawasan:** tombol on dan off
* **Deftar Umum Tambang CPU:**

* [https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07](https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07)
* [https://highpay-pool.com/?ref=149](https://highpay-pool.com/?ref=149)
* [https://www.crypto-webminer.com/](https://www.crypto-webminer.com/)
* [https://coinwebmining.com](https://coinwebmining.com/)
* penambang web lain

## 2\. Komputer

<div id="desktop">
 
</div>

### Penambang Web (Listrik Menengah)

* [https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07](https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07)
* [https://highpay-pool.com/?ref=149](https://highpay-pool.com/?ref=149)
* [https://www.crypto-webminer.com/](https://www.crypto-webminer.com/)
* [https://coinwebmining.com](https://coinwebmining.com/)

<div class="video-container"><iframe src="https://lbry.tv/$/embed/good-mining-starting-point-for-newbies-4/d83b1eae2b700bda3ab41110caca84904d308478" frameborder="0" allowfullscreen></iframe></div>

### Penambangan Koin khusus CPU (Listrik Menengah)

Algoritma:

* Tambang [Monero](https://www.getmonero.org/) atau [Mintme](https://www.mintme.com/coin/) atau [Magicoin](https://www.m-core.org/)
* [Beberapa koin dengan algoritma Yescrypt](https://coinguides.org/yescrypt-algorithm-coins/)
* [Beberapa koin dengan algoritma Cryptonight](https://coinguides.org/cryptonight-algorithm-coins/)
* [Beberapa koin dengan algoritma Lyra2Z](https://coinguides.org/lyra2z-algorithm-coins-miners-hashrate/)
* [Beberapa koin dengan algoritma NeoScrypt](https://coinguides.org/neoscrypt-coins/)
* Beberapa koin dengan algoritma hodl seperti hodl coin and roi-coin
* Informasi akan diperbarui

Perangkat Lunak:

* Setiap koin dapat memiliki perangkat lunak penambangan mereka sendiri, periksa situs web mereka.
* [cpuminer-multi](https://github.com/tpruvot/cpuminer-multi)
* [cpuminer-opt](https://github.com/JayDDee/cpuminer-opt)
* [xmr-stak](https://github.com/fireice-uk/xmr-stak)
* [xmrig](https://github.com/xmrig/xmrig)
* hodlminers

Solo Mining or Pool:

* Solo mining: buka setiap situs web koin
* Pool mining: cari pada mesin pencarian seperti "Monero Mining Pool"

<div class="video-container"><iframe src="https://lbry.tv/$/embed/webchain-cpu-miner-ubuntu-18-04-lts/c4a23751885bec692be886090c083b48de261e57" frameborder="0" allowfullscreen></iframe></div>

### Penambangan menggunakan USB ASIC (Listrik Mengah)

Beli perangkat keras. Perangkat lunak yang digunakan adalah BFGminer atau CGminer.

* SHA256
* Scrypt
* [Equihash](https://blog.goodaudience.com/the-equihash-asic-takeover-is-complete-d33f5444613?gi=8769f6ed9020)
* [Ethash](https://cointelegraph.com/news/bitmain-releases-ethash-asic-miners)
* [X11](https://coinguides.org/x11gost-algorithm-sibcoin-miner-coins/)
* [SHA3/Keccak](https://en.bitcoinwiki.org/wiki/SHA-3)
* [Nist5](https://coinguides.org/nist5-algorithm-coins-asic/)
* [Lyra](https://www.reddit.com/r/monacoin/comments/9kt88u/the_worlds_first_28nm_lyra2rev2_asic_miner/)
* [Blake 256](https://coinguides.org/blake256-algorithm-coins-asic-miners/), [Blake2b ](https://coinguides.org/blake2b/)
* [hmq725](https://coinguides.org/hmq1725-algorithm-coins-miner/)
* [Qubit](https://coinguides.org/qubit-algorithm-coins-asic/)
* [Skein](https://coinguides.org/skein-algorithm-coins-miner/)

<div class="video-container"><iframe src="https://lbry.tv/$/embed/mining-with-usb-miner-futurebit/54bf3a4d68e7ae3358b2e95d15fa867cb89539e5" frameborder="0" allowfullscreen></iframe></div>

### Penambangan menggunakan GPU (Konsumsi listrik tinggi hingga sangat tinggi tetapi segaris dengan pendapatan)

Algoritma:

* [X16R](https://coinguides.org/x16r-algorithm-coins/), [X16S](https://coinguides.org/x16s-algorithm-coins/), [X17](https://coinguides.org/x17-algorithm-coins/), X21....
* [C11](https://coinguides.org/c11-algorithm-miner-coins/)
* [Grøstl](https://coinguides.org/groestl-algorithm-coins-miners/)
* [Time Travel](https://coinguides.org/time-travel-coins/)
* [Xevan](https://coinguides.org/xevan-coins/)
* [PHI1612](https://coinguides.org/phi1612-coins/)
* [Tribus](https://coinguides.org/tribus-coins/)
* [Skunkhash](https://coinguides.org/skunkhash-algorithm-coins/)
* [Blake2s](https://coinguides.org/blake2s-algorithm-coins/)

Perangkat Lunak:

* [ccminer](https://github.com/tpruvot/ccminer/releases), [ccminerx21](https://github.com/tpruvot/ccminer/releases)
* [xmr-stak](https://github.com/fireice-uk/xmr-stak), [xmrig-nvidia](https://github.com/xmrig/xmrig-nvidia), [xmrig-amd](https://github.com/xmrig/xmrig-amd)
* [sgminer-gm](https://github.com/genesismining/sgminer-gm) (untuk GPU lama)
* [sgminer-arm](https://github.com/hominoids/sgminer-arm) (untuk single board computers dan arms)
* [cudaminer](https://github.com/cbuchner1/CudaMiner) (untuk GPU kuno)

Solo Mining or Pool:

* Solo mining: buka setiap situs web koin
* Pool mining: cari pada mesin pencarian seperti "Raven Coin Mining Pool"

<div class="video-container"><iframe src="https://lbry.tv/$/embed/mine-bitcoin-gold-at-mining-pool-hub-on/0a9f5464880c8611e58e3870c009888b7dd734dc" frameborder="0" allowfullscreen></iframe></div>

### Penambangan menggunakan ASIC (Konsumsi listrik tinggi hingga sangat tinggi tetapi segaris dengan pendapatan)**

Beli perangkat keras yang mahal. Perangkat lunak biasanya BFGminer atau CGminer.

* SHA256
* Scrypt
* [Equihash](https://blog.goodaudience.com/the-equihash-asic-takeover-is-complete-d33f5444613?gi=8769f6ed9020)
* [Ethash](https://cointelegraph.com/news/bitmain-releases-ethash-asic-miners)
* [X11](https://coinguides.org/x11gost-algorithm-sibcoin-miner-coins/)
* [SHA3/Keccak](https://en.bitcoinwiki.org/wiki/SHA-3)
* [Nist5](https://coinguides.org/nist5-algorithm-coins-asic/)
* [Lyra](https://www.reddit.com/r/monacoin/comments/9kt88u/the_worlds_first_28nm_lyra2rev2_asic_miner/)
* [Blake 256](https://coinguides.org/blake256-algorithm-coins-asic-miners/), [Blake2b ](https://coinguides.org/blake2b/)
* [hmq725](https://coinguides.org/hmq1725-algorithm-coins-miner/)
* [Qubit](https://coinguides.org/qubit-algorithm-coins-asic/)
* [Skein](https://coinguides.org/skein-algorithm-coins-miner/)

### Penambangan menggunakan FPGA**

* [LBRY](https://coinguides.org/lbry-algorithm)