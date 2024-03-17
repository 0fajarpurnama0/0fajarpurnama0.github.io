---
layout: post
title: Panduan Singkat Mata Uang Kripto untuk Pengguna Baru
categories: cryptocurrency
tags: [mata uang kripto, sumber informasi, dompet pribadi, bursa lokal, bursa internasional]
featuredimage: https://images.hive.blog/DQmW9dJv1vzRK6PQ6Y77sEfpVSCRmxZhZEkJZ9iFy1oArrL/0.panduan-singkat-mata-uang-kripto.png
description: Hal-hal penting untuk mulai menggunakan mata uang kripto adalah sumber informasi, dompet pribadi, bursa lokal, dan internasional.
canonicalurl: https://0fajarpurnama0.github.io/cryptocurrency/2021/05/04/panduan-singkat-kripto
---
<style>
  .wrapper {
    display: flex;
  }

  .wrapper > * {
    width: 100%;
  }

  .grid-container-6-3 {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    background-color: black;
    padding: 5px;
  }

  @media screen and (max-width: 767px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto;
	  }
  }

  .grid-item-6-3 {
    background-color: lightgreen;
    border: 2px solid black;
  }

  .grid-item-6-3 > figure > figcaption {
    text-align: center;
  }

  .grid-item-6-3 > figure > img {
    max-height:1.5em;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-item-6-3:hover {
    background-color: yellow;
  }
</style>

![0.panduan-singkat-mata-uang-kripto.png](https://images.hive.blog/DQmW9dJv1vzRK6PQ6Y77sEfpVSCRmxZhZEkJZ9iFy1oArrL/0.panduan-singkat-mata-uang-kripto.png)

Pertama kali saya menjelaskan tentang mata uang kripto, saya menjelaskan secara rinci yang dapat mencakup seluruh buku. Sayangnya, komentar yang saya dapatkan adalah kebanyakan orang tidak ingin mendengar cerita panjang saya tetapi menginginkan panduan singkat tentang bagaimana caranya masuk ke dalam mata uang kripto dimana setelah itulah mereka bisa tertarik untuk mengetahui lebih banyak lagi. Oleh karena itu dalam tulisan ini, saya membahas kebutuhan minimum untuk memulai di mata uang kripto yang tidak akan memakan waktu lebih dari satu jam.

## 1\. Sumber Informasi Mata Uang Kripto

![1.halaman-web-coingecko.PNG](https://images.hive.blog/DQmbsAcZFNPWY7MTvwDa5PEKFcxMume1kj3ZLFSqiZAJH6Y/1.halaman-web-coingecko.PNG)

Orang yang baru mendengar tentang Bitcoin dan mata uang kripto mungkin hanya mengetahuinya dari berita TV, media sosial, dan rumor dari lingkaran mereka. Bisa jadi karena tidak tahu di mana mendapatkan informasi merupakan tembok pertama yang membuat orang malas untuk terjun ke mata uang kripto. Untung hari ini ada banyak sumber informasi dan basis data mata uang kripto. Yang paling sering saya gunakan adalah [Coingecko](https://www.coingecko.com/) tetapi ada juga yang lain seperti [Coin Market Cap](https://coinmarketcap.com/) dan [Coin Paprika](https://coinpaprika.com/) yang menyediakan:

*   Keadaan seluruh pasar mata uang kripto.
*   Berita terkait kripto.
*   Riwayat harga banyak koin.
*   Detil tentang setiap koin.
*   Pelacak portofolio.

**Untuk pengguna baru, saya sarankan untuk mengeklik tautan ini untuk mencoba [Coingecko](https://www.coingecko.com/) dan mengunduh [aplikasi](https://www.coingecko.com/en/mobile) ke ponsel cerdas Anda. [Klik disini untuk Panduan Singkat Coingecko Mobile](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/06/panduan-singkat-coingecko-mobile).**

### Lebih Banyak

<!-- List of Crypto Information With Daily Login Start -->
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.daily_login %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
      <img src="{{ item.icon }}" alt="{{ item.description }}" />
      <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<!-- List of Crypto Information With Daily Login End -->

<!-- List of crypto social media Start -->
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_project_database %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto social media End -->

## 2\. Dompet Mata Uang Kripto

![2.dompet-exodus.PNG](https://images.hive.blog/DQmQiMYP88JySe8gDhspMQpRjS5H4NYVPpcGDtT8iqjmSML/2.dompet-exodus.PNG)

Setelah mendapatkan sumber informasi untuk mengetahui tentang ruang mata uang kripto, untuk benar-benar memasuki ruang tersebut kita membutuhkan dompet mata uang kripto. Untuk pengguna baru di desktop komputer, saya merekomendasikan [Exodus](https://www.exodus.com/) yang mendukung banyak jenis koin, [Atomic Wallet](https://atomicwallet.io/join?kid =17KP6Z) untuk staking koin, dan ekstensi browser [Metamask](https://metamask.io/) untuk memasuki keuangan terdesentralisasi (decentralized finance atau DeFi). Dompet pribadi digunakan untuk:

*   Mengirim dan menerima serta mengakses koin kita.
*   Kepemilikan penuh atas koin kita dengan menyimpan sendiri kunci pribadi dan frase awal.
*   Membuka transaksi ke publik demi transparansi.
*   Staking koin.
*   Masuk ke ruang DeFi.
*   Tanpa registrasi, tanpa verifikasi, cukup unduh, instal, dan gunakan.

**Untuk pengguna baru, saya sarankan untuk mengklik tautan ini untuk menginstal [Trust Wallet](https://share.trustwallet.com/l2nusUW) hanya di ponsel cerdas untuk mengirim dan menerima beberapa mata uang kripto, staking, dan memasuki ruang DeFi. [Klik disini untuk Panduan Singkat Trust Wallet Mobile](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/08/panduan-singkat-trust-wallet-mobile)**

### Lebih Banyak

<!-- List of crypto wallet Start -->
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_wallets %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto wallet End -->

## 3\. Bursa Lokal Mata Uang Kripto

![3.indodax-penarikan.PNG](https://images.hive.blog/DQmPzvfj1duJiwcamKRa5bgtGKy7ZT8hScjTphRJYSdNYed/3.indodax-penarikan.PNG)

Faktanya tetap bahwa mata uang kripto belum diadopsi di mana-mana dan pengguna perlu mencairkan ke uang tunai untuk membeli barang dan jasa. Selain itu, untuk pengguna baru yang menginginkan cara cepat untuk membeli mata uang kripto:

*   Untuk menyetor uang tunai dan membeli mata uang kripto.
*   Untuk menjual mata uang kripto dan menarik uang tunai.
*   Untuk melakukan perdagangan.

**Di Indonesia saya sarankan untuk menggunakan bursa pertama dan terpopuler yaitu [Indodax](https://indodax.com/ref/0fajarpurnama0/1) dan bursa baru yang memiliki penarikan ke banyak rantai DeFi yaitu [Tokocrypto](https://www.tokocrypto.com/account/signup?ref=QNIM7G1Q).** Untuk cara penggunaan [Indodax](https://indodax.com/ref/0fajarpurnama0/1), silahkan buka [BAB 3 dari buku saya yang berjudul mata uang kripto 101 untuk pengguna](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/mata-uang-kripto-101-bab-3). [Klik disini untuk Panduan Singkat Tokocrypto Mobile](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/10/panduan-singkat-tokocrypto-mobile).

## 4\. Bursa Internasional Mata Uang Kripto

![4.kucoin-trading-interface.PNG](https://images.hive.blog/DQmW3t4BR79Xmvqf65EoaYaKNa9vySEEg7s4oMtsHCrf3ed/4.kucoin-trading-interface.PNG)

Setelah memiliki koin pertama, dapat berpartisipasi dalam ruang mata uang kripto terbuka, dan salah satunya adalah menginvestasikan atau memperdagangkan lebih banyak koin di bursa internasional dan pilihan saya saat ini adalah [Binance](https://accounts.binance.cc/ en/register?ref=36878461) dan [Kucoin](https://www.kucoin.com/ucenter/signup?rcode=xgHf1b&lang=en_US&utm_source=friendInvite) karena mereka adalah yang paling populer di dunia dan tidak memerlukan verifikasi identitas (know your customer atau KYC) untuk transaksi kecil dan penarikan seingat saya di bawah $1000.

*   Beli mata uang kripto dari bursa lokal dan kirim mata uang kriptonya ke bursa internasional untuk memulai.
*   Banyak koin tersedia di bursa internasional.
*   Likuiditas lebih tinggi karena ada lebih banyak pengguna yaitu dari seluruh dunia.
*   Lebih banyak produk keuangan, selain perdagangan ada perdagangan berjangka, mendapatkan bunga, kartu kredit kripto, dan berpartisipasi dalam promo.

[Klik disini untuk Panduan Singkat Kucoin Mobile](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/12/panduan-singkat-kucoin-mobile). Jika Anda sangat melek teknologi komunikasi informasi (TIK) seperti banyak Milenial dan Generasi Z saat ini, maka Anda mungkin tidak memerlukan detil lebih lanjut. Saya hanya perlu mengetahui aplikasi apa saja yang perlu di instal dan saya akan menjelajahinya sendiri. Namun bagi yang belum melek TIK seperti generasi tua, akan saya siapkan detilnya di artikel terpisah. Saya awalnya ingin menumpuknya di sini, tetapi 40 gambar terlalu banyak. Pelajar yang serius mungkin akan senang tetapi kebanyakan orang mungkin akan kewalahan dimana hal tersebut bukan merupakan pemasaran yang baik untuk kripto. Oleh karena itu, pantau terus karena artikel ini akan diperbarui dengan hyperlink ke panduan terperinci. Karena kebanyakan orang saat ini lebih suka menggunakan smartphone, saya akan menyediakan screenshot-screenshot smartphone. Bahkan orang tua, paman, dan bibi saya berdagang saham dan mata uang kripto karena aplikasi tersedia di perangkat seluler mereka di mana jika aplikasi hanya di desktop, mereka mungkin akan malas untuk mencoba.

### Lebih Banyak

<!-- List of crypto centralized exchanges Start -->
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_cexs %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto centralized exchanges End -->

## Mirrors

*   [https://www.publish0x.com/cryptocurrency-101-for-users/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-xrnyrgk?a=4oeEw0Yb0B&tid=steemit](https://www.publish0x.com/cryptocurrency-101-for-users/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-xrnyrgk?a=4oeEw0Yb0B&tid=steemit)
*   [https://0darkking0.blogspot.com/2021/07/panduan-singkat-mata-uang-kripto-untuk.html](https://0darkking0.blogspot.com/2021/07/panduan-singkat-mata-uang-kripto-untuk.html)
*   [https://0fajarpurnama0.medium.com/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-edc46f43776c](https://0fajarpurnama0.medium.com/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-edc46f43776c)
*   [https://0fajarpurnama0.github.io/cryptocurrency/2021/05/04/panduan-singkat-kripto](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/04/panduan-singkat-kripto)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/panduan-singkat-kripto](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/panduan-singkat-kripto)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [http://0fajarpurnama0.weebly.com/blog/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](http://0fajarpurnama0.weebly.com/blog/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/cryptocurrency/10-cryptocurrency-101-for-users/mata-uang-kripto-101-untuk-pengguna/238-panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://0fajarpurnama0.cloudaccess.host/index.php/cryptocurrency/10-cryptocurrency-101-for-users/mata-uang-kripto-101-untuk-pengguna/238-panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://read.cash/@FajarPurnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-91e2d832](https://read.cash/@FajarPurnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-91e2d832)
*   [https://trybe.one/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://trybe.one/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://www.floyx.com/article/0fajarpurnama0/the-basics-of-financial-technical-analysis-even-in-000113f7ae](https://www.floyx.com/article/0fajarpurnama0/the-basics-of-financial-technical-analysis-even-in-000113f7ae)
*   [https://markethive.com/0fajarpurnama0/blog/panduansingkatmatauangkriptountukpenggunabaru](https://markethive.com/0fajarpurnama0/blog/panduansingkatmatauangkriptountukpenggunabaru)

## Mirrors

*   [https://www.publish0x.com/cryptocurrency-101-for-users/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-xrnyrgk?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/cryptocurrency-101-for-users/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-xrnyrgk?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/07/panduan-singkat-mata-uang-kripto-untuk.html](https://0darkking0.blogspot.com/2021/07/panduan-singkat-mata-uang-kripto-untuk.html)
*   [https://0fajarpurnama0.medium.com/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-edc46f43776c](https://0fajarpurnama0.medium.com/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-edc46f43776c)
*   [https://0fajarpurnama0.github.io/cryptocurrency/2021/05/04/panduan-singkat-kripto](https://0fajarpurnama0.github.io/cryptocurrency/2021/05/04/panduan-singkat-kripto)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/panduan-singkat-kripto](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/panduan-singkat-kripto)
*   [https://steemit.com/indonesia/@fajar.purnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru?r=fajar.purnama)
*   [https://leofinance.io/@fajar.purnama/quick-guide-to-cryptocurrency-for-new-users?ref=fajar.purnama](https://leofinance.io/@fajar.purnama/quick-guide-to-cryptocurrency-for-new-users?ref=fajar.purnama)
*   [https://blurt.blog/blurtindonesia/@fajar.purnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru?referral=fajar.purnama](https://blurt.blog/blurtindonesia/@fajar.purnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [http://0fajarpurnama0.weebly.com/blog/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](http://0fajarpurnama0.weebly.com/blog/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/cryptocurrency/10-cryptocurrency-101-for-users/mata-uang-kripto-101-untuk-pengguna/238-panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://0fajarpurnama0.cloudaccess.host/index.php/cryptocurrency/10-cryptocurrency-101-for-users/mata-uang-kripto-101-untuk-pengguna/238-panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://read.cash/@FajarPurnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-91e2d832](https://read.cash/@FajarPurnama/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru-91e2d832)
*   [https://trybe.one/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru](https://trybe.one/panduan-singkat-mata-uang-kripto-untuk-pengguna-baru)
*   [https://www.floyx.com/article/0fajarpurnama0/the-basics-of-financial-technical-analysis-even-in-000113f7ae](https://www.floyx.com/article/0fajarpurnama0/the-basics-of-financial-technical-analysis-even-in-000113f7ae)
*   [https://markethive.com/0fajarpurnama0/blog/panduansingkatmatauangkriptountukpenggunabaru](https://markethive.com/0fajarpurnama0/blog/panduansingkatmatauangkriptountukpenggunabaru))