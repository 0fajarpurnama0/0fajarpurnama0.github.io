---
layout: post
title: Penggunaan Nagios di Lab Komputer Teknik Elektro Universitas Udayana
category: bachelor
tags: [jaringan komputer, Nagios, pemantauan, web, kehandalan sistem telekomunikasi, penulisan ilmiah, tugas kuliah]
featuredimage: https://cdn.steemitimages.com/DQmbkQjhg6auXhRoH1Hj2cBbhJWc8rFR22Q9heaktstsfuF/Gambar%204.12%20Pelaporan%20RTA%20elearning.unud.ac.id%20selama%20pemantauan.jpg
description: Tugas dari mata kuliah Kehandalan Sistem Telekomunikasi S1 saya mengenai aplikasi Nagios yang dapat memantau keadaan jaringan komputer.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/02/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana
---
## Catatan

Artikel ini merupakan tugas dari mata kuliah Kehandalan Sistem Telekomunikasi S1 saya mengenai aplikasi Nagios yang dapat memantau keadaan jaringan komputer. Kebetulan saat itu saya juga asisten laboratium komputer. Sehingga saya dapat kesempatan untuk menerapkan Nagios di lab tersebut. Tugas ini tidak pernah dipublikasi dimanapun dan saya sebagai penulis dan pemegang hak cipta melisensi tulisan ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama saya sebagai penulis dan memberitahu bahwa versi asli dan terbuka ada disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Nagios suatu server untuk memantau keaadaan jaringan. Pada umumnya yang dipantau adalah host menggunakan service-service seperti check_ping, check_uptime, check_mrtgtraf dan service-service lainnya. Keunggulan pada nagios adalah pemantauannya dapat dilihat melalui halaman web (melalui port 80 http). Sehingga pemantau dapat memantau dari jarak jauh. Kini nagios core telah mencapai versi 3.5 dan nagios plugin 1.6\. Nagios telah mendukung semua distribusi Linux, tetapi belum mendukung untuk Windows. Selain itu disediakan tutorial installasi dan langkah-langkah awal di situs web resmi nagios. Awalnya penulis belum pernah menggunakan nagios untuk memantau. Penulis berkeinginan untuk mengetahui bagaimana kualitas nagios menurut padangan penulis secara pribadi. Untuk bahan pemantauan disediakan 10 komputer dan 1 switch di laboratorium komputer, Teknik Elektro, Universitas Udayana. Pada percobaan ini akan dicoba menggunakan nagios untuk memantau 10 komputer dan 1 switch di labkom, selain itu juga memantau diri sendiri (localhost) dan 1 linux server melalui jaringan Internet, yaitu [https://elearning.unud.ac.id](https://elearning.unud.ac.id)

### 1.2 Rumusan Masalah

Bagaimana kualitas menurut pandangan secara pribadi penggunaan nagios untuk memonitor komputer dan switch di lab komputer, Teknik Elektro, Universitas Udayana?

### 1.3 Tujuan

Mengetahui bagaimana penggunaan nagios di lab komputer, Teknik Elektro, Universitas Udayana.

### 1.4 Manfaat

1.  Memberi umpan balik mengenai layaknya dibangun nagios di lab komputer.
2.  Penggunaan nagios dapat diterapkan di tempat lain.

### 1.5 Ruang Lingkup dan Batasan

1.  Memantau RTA (Round Trip Average), dan beberapa service-service di layer aplikasi pada OSI model.
2.  Bahan yang dipantau adalah host berupa Windows, Linux, dan switch cisco.

## BAB 2 Tinjauan Pustaka

### 2.1 Nagios

Nagios adalah sistem pemantauan yang kuat yang memungkinkan organisasi untuk mengidentifikasi dan menyelesaikan masalah IT infrastruktur sebelum mereka mempengaruhi proses bisnis penting. Pertama kali diluncurkan pada tahun 1999, nagios telah berkembang untuk memasukkan ribuan proyek yang dikembangkan oleh komunitas nagios seluruh dunia. Nagios secara resmi disponsori oleh nagios Enterprises, yang mendukung masyarakat dalam sejumlah cara yang berbeda melalui penjualan produk dan layanan komersial. Nagios memonitor seluruh infrastruktur TI untuk memastikan sistem, aplikasi, layanan, dan proses bisnis yang berfungsi dengan baik. Dalam hal kegagalan, nagios dapat mengingatkan staf teknis dari masalah, yang memungkinkan mereka untuk memulai proses remediasi sebelum mempengaruhi proses bisnis, pengguna akhir, atau pelanggan. Dengan Nagios tidak akan pernah meninggalkan harus menjelaskan mengapa pemadaman infrastruktur terlihat menyakiti bottom line organisasi (Nagios, 2013).

### 2.2 Ping

Ping adalah nama dari sebuah utilitas perangkat lunak standar (tool) digunakan untuk menguji koneksi jaringan. Hal ini dapat digunakan untuk menentukan apakah perangkat remote (seperti Web atau server game) dapat dicapai melalui jaringan dan, jika demikian, latency koneksi ini. Alat Ping adalah bagian dari Windows, Mac OS X dan Linux serta beberapa router dan konsol game. Kebanyakan alat ping menggunakan Internet Control Message Protocol (ICMP). Mereka mengirim pesan permintaan ke alamat jaringan target secara berkala dan mengukur waktu yang dibutuhkan untuk pesan respon tiba. Alat-alat ini biasanya mendukung opsi seperti, berapa kali untuk mengirim permintaan, seberapa besar pesan permintaan untuk mengirim, berapa lama untuk menunggu untuk setiap jawaban. Output dari ping bervariasi tergantung pada alat. Hasil standar termasuk, alamat IP komputer yang merespons, jangka waktu (dalam milidetik) antara mengirim permintaan dan menerima respon, indikasi berapa banyak jaringan hop antara meminta dan menanggapi komputer, pesan kesalahan jika komputer target tidak merespon (Mitchell, 2013).

## BAB 3 Metode dan Materi

### 3.1 Tempat dan Waktu

Percobaan dilakukan di Lab Komputer, Teknik Elektro, Universitas Udayana pada tanggal 13 April 2013 sampai 19 April 2013.

### 3.2 Alat

<table border="1">Tabel 3.1 Alat yang digunakan

<tbody>

<tr>

<th>NO</th>

<th>Alat</th>

<th>Spesifikasi</th>

</tr>

<tr>

<td>1</td>

<td>Laptop ACER</td>

<td>Intel® Pentium® dual-core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache) Mobile Intel® Graphics Media Accelerator 4500MHD 1GB DDR2 128 WXGA Acer CrystalBriteTM LCD 250GB HDD Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller Atheros Communications Inc. AR928X Wireless Network Adapter Operating System Linux Backtrack 5 R3</td>

</tr>

<tr>

<td>2</td>

<td>Software</td>

<td>Apache2, php5, Nagios Core 3.5, Nagios Plugin 1.5</td>

</tr>

</tbody>

</table>

### 3.3 Bahan

<table border="1">Tabel 3.2 Bahan yang diteliti

<tbody>

<tr>

<th>NO</th>

<th>Bahan</th>

<th>Spesifikasi</th>

</tr>

<tr>

<td>1</td>

<td>12 buah PC</td>

<td>Intel® Pentium® dual-core processor 1GB RAM 128MB VGA 100GB HDD 10 Operating System Windows Tiny XP 2 Operating System Linux Ubuntu 12.04 lts</td>

</tr>

<tr>

<td>2</td>

<td>Cisco Switch</td>

<td>16 port</td>

</tr>

<tr>

<td>3</td>

<td>[https://elearning.unud.ac.id](https://elearning.unud.ac.id)</td>

<td>Linux Server</td>

</tr>

<tr>

<td>4</td>

<td>Laptop ACER</td>

<td>Sama seperti di bagian alat</td>

</tr>

</tbody>

</table>

### 3.4 Cara

#### 3.4.1 Instalasi Nagios

Instalasi nagios dapat dilihat di [http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html](http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html)

#### 3.4.2 Mengatur Nagios

Contoh pengaturan nagios dapat dilihat di [http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html](http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html).

#### 3.4.3 Instalasi MRTG

Instalasi MRTG dapat dilihat di [https://help.ubuntu.com/community/MRTG](https://help.ubuntu.com/community/MRTG).

#### 3.4.4 Mengatur Koneksi Jaringan

![Gambar 3.1 Kondisi jaringan di lab komputer.png](https://cdn.steemitimages.com/DQmXUtSdrb8mGv43GSR6jYdPNDDk1N5ZWm3fHSnCCxjx2Lm/Gambar%203.1%20Kondisi%20jaringan%20di%20lab%20komputer.png)

Gambar 3.1 Kondisi jaringan di lab komputer



Nagios server adalah laptop dengan IP 192.168.0.1\. IP 192.168.0.2 dan 192.168.0.3 adalah PC dengan sistem operasi Ubuntu lts 12.04\. Sedangkan PC lainnya adalah sistem operasi Windows Tiny XP. Untuk semua PC memiliki default gateway 192.168.0.1\. Laptop akan meneruskan ke 172.16.150.33\. Laptop menggunakan IP forward dan iptables untuk meneruskan ke 172.16.150.33.

## BAB 4 Pembahasan

### 4.1 Tampilan nagios di browser

![Gambar 4.1 Tampilan nagios di firefox.jpg](https://cdn.steemitimages.com/DQmWvLp3A2ptuoXNNsSqdQRHscKHj9b7Cx2prVoioXpJcMQ/Gambar%204.1%20Tampilan%20nagios%20di%20firefox.jpg)

Gambar 4.1 Tampilan nagios di firefox



Di jaringan lokal nagios dapat diakses dengan alamat http://192.168.0.1/nagios dengan username nagiosadmin dan password nagios. Jika memiliki IP public dan domain name maka nagios dapat diakses dengan alamat domain.

![Gambar 4.2 Pemantauan secara umum.jpg](https://cdn.steemitimages.com/DQmYWHrRB7wfz2haQ2rYVfxPDVTpe4zXB9R8vNbHkxvU5x5/Gambar%204.2%20Pemantauan%20secara%20umum.jpg)

Gambar 4.2 Pemantauan secara umum



### 4.2 Tampilan keadaan host

![Gambar 4.3 Keadaan host dalam gambaran peta.jpg](https://cdn.steemitimages.com/DQmZLSSpZLepVddPNNCE9KRyx16o7sWUYbDPVGQw2DJPT6x/Gambar%204.3%20Keadaan%20host%20dalam%20gambaran%20peta.jpg)

Gambar 4.3 Keadaan host dalam gambaran peta

![Gambar 4.4 Keadaan host dalam bentuk list.jpg](https://cdn.steemitimages.com/DQmeLhvs1L96h2jvj5K9Yx7yX9dBbnPJUM6ab5doLUEufr9/Gambar%204.4%20Keadaan%20host%20dalam%20bentuk%20list.jpg)

Gambar 4.4 Keadaan host dalam bentuk list



Disini terlihat bahwa Home Windows dalam keadaan mati karena merupakan komputer di rumah penulis dan tidak terkoneksi di lab komputer. Jaringan labkom PC5, PC8, PC9 dan PC10 dalam keadaan mati. Setelah diperiksa keadaan fisiknya ternyata ada masalah dengan kabel jaringannya. Setelah kabel tersebut diganti maka jaringan PC tersebut hidup. Host yang lain dalam keadaan normal. DU merupakan DNS UNUD dengan IP 172.16.0.6, LDCS adalah Lab DSK Cisco Switch dengan IP 172.16.150.33, euai adalah elearning.unud.ac.id, ls adalah labkom server dengan sistem operasi linux Ubuntu, dan LPC adalah labkom PC dengan sistem operasi Windows Tiny XP.

### 4.3 Tampilan Service

Nagios juga dapat memantau service pada host seperti http, smtp, ftp, dhcp, dns, mrtgtraf, partisi dan lain-lain. Kondisi OK, warning, critical diatur oleh user, contohnya ping, diatur warning jika RTA (Round Trip Average) diatas 200 ms dan critical jika diatas 300 ms.

![Gambar 4.5 Tampilan keadaan service pada masing – masing host 1.jpg](https://cdn.steemitimages.com/DQmXB9jfjQPDHRMBZbQnSxELoadB92obibUUcDRTGG6JLN1/Gambar%204.5%20Tampilan%20keadaan%20service%20pada%20masing%20%E2%80%93%20masing%20host%201.jpg)

Gambar 4.5 Tampilan keadaan service pada masing-masing host 1

![Gambar 4.6 Tampilan keadaan service pada masing – masing host 2.jpg](https://cdn.steemitimages.com/DQmb9ZfyXYv81fBaRVgz5F85288MLUVQ5uKrHC1uuGV6znE/Gambar%204.6%20Tampilan%20keadaan%20service%20pada%20masing%20%E2%80%93%20masing%20host%202.jpg)

Gambar 4.6 Tampilan keadaan service pada masing-masing host 2

![Gambar 4.7 Tampilan keadaan service pada masing – masing host 3.jpg](https://cdn.steemitimages.com/DQmecVzComtFZKntWHA5P9BBHftHrBbGeXsv1kRLFvtkFbK/Gambar%204.7%20Tampilan%20keadaan%20service%20pada%20masing%20%E2%80%93%20masing%20host%203.jpg)

Gambar 4.7 Tampilan keadaan service pada masing-masing host 3

![Gambar 4.8 Tampilan keadaan service pada masing – masing host 4.jpg](https://cdn.steemitimages.com/DQmaEsvhTbsouLem4fShBGE7YkmKmtSZCt7iATZc4Zxta1X/Gambar%204.8%20Tampilan%20keadaan%20service%20pada%20masing%20%E2%80%93%20masing%20host%204.jpg)

Gambar 4.8 Tampilan keadaan service pada masing-masing host 4



### 4.4 Laporan pada nagios

Nagios juga mampu membuat laporan. Hal yang dilaporkan adalah keadaan host dari pertama kali pemantauan hingga kondisi terkahir. Jadi hasil pemantauan dicatat oleh nagios.

![Gambar 4.9 Pembagian kelompok pada host.jpg](https://cdn.steemitimages.com/DQmSJLqdX1pWPXtrdTiU2c2L24oBZHGUi8AwxCF9khKmR2Z/Gambar%204.9%20Pembagian%20kelompok%20pada%20host.jpg)

Gambar 4.9 Pembagian kelompok pada host

![Gambar 4.10 Pelaporan seluruh pemantauan host oleh nagios.jpg](https://cdn.steemitimages.com/DQmc47T8A8eHbD8GU9yLLwY5BgRQQPYG1K2v9A9bqcc4AKi/Gambar%204.10%20Pelaporan%20seluruh%20pemantauan%20host%20oleh%20nagios.jpg)

Gambar 4.10 Pelaporan seluruh pemantauan host oleh nagios

![Gambar 4.11 Pelaporan keadaan hidup dan mati LDCS selama pemantauan.jpg](https://cdn.steemitimages.com/DQmc97GuqPzSfJnkg7hqhQ9ircTAKVkcE4QMPTuZgvzP2HC/Gambar%204.11%20Pelaporan%20keadaan%20hidup%20dan%20mati%20LDCS%20selama%20pemantauan.jpg)

Gambar 4.11 Pelaporan keadaan hidup dan mati LDCS selama pemantauan

![Gambar 4.12 Pelaporan RTA elearning.unud.ac.id selama pemantauan.jpg](https://cdn.steemitimages.com/DQmbkQjhg6auXhRoH1Hj2cBbhJWc8rFR22Q9heaktstsfuF/Gambar%204.12%20Pelaporan%20RTA%20elearning.unud.ac.id%20selama%20pemantauan.jpg)

Gambar 4.12 Pelaporan RTA elearning.unud.ac.id selama pemantauan



## BAB 5 Penutup

### 5.1 Simpulan

Di lab komputer, Teknik Elektro, Universitas Udayana sangat cocok untuk dipasangkan nagios (monitoring server). Dengan PC yang banyak yang hidup dan digunakan setiap hari hampir 24 jam maka nagios dapat memantau kondisi PC tersebut. Jaringan ke Internet di lab komputer menggunakan fasilitas dari Universitas Udayana. Dengan diberi default gateway di lab DSK dan DNS UNUD maka nagios dapat memantau hal tersebut. Pada kondisi trouble, Dari pada memeriksa perangkat 1 per 1 lebih effisien melihat keadaan host dengan nagios, karena nagios dapat menampilkan yang mana dalam keadaan baik dan yang dalam keadaan buruk.

## Daftar Pustaka

*   Nagios, 2013\. [http://www.nagios.org/about](http://www.nagios.org/about) diakses 21 April 2013.
*   Mitchel, B. 2013\. [http://compnetworking.about.com/od/network_ping/g/what-is-a-ping.htm](http://compnetworking.about.com/od/network_ping/g/what-is-a-ping.htm) diakses 21 April 2013.
*   Nagios, .2013\. [http://nagios.sourceforge.net/docs/3_0/toc.html](http://nagios.sourceforge.net/docs/3_0/toc.html) diakses 5 April 2013.
*   Nagios, .2013\. [http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html](http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html) diakses 10 Maret 2013.
*   Nagios, .2013\. [http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html](http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html) 10 Maret 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-xjjnger?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-xjjnger?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/02/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana](https://0fajarpurnama0.github.io/bachelor/2020/11/02/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana)
*   [https://0fajarpurnama0.medium.com/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana-7a7cf835b1aa](https://0fajarpurnama0.medium.com/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana-7a7cf835b1aa)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/penggunaan-nagios-di-lab-komputer.html](https://0darkking0.blogspot.com/2020/11/penggunaan-nagios-di-lab-komputer.html)
*   [https://hive.blog/indonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama](https://hive.blog/indonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/100-penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/100-penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana)
*   [https://steemit.com/indonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana](http://0fajarpurnama0.weebly.com/blog/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2)
*   [https://read.cash/@FajarPurnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana-7a89be07](https://read.cash/@FajarPurnama/penggunaan-nagios-di-lab-komputer-teknik-elektro-universitas-udayana-7a89be07)