---
layout: post
title: Pembuatan Streaming Server Pribadi Sebagai Media Kamera Pengawas dengan Red5
categories: bachelor
tags: [Linux, streaming, server, Adobe Flash Media Live Encoder, Red5, Internet, komputer, video, audio, tugas kuliah, penulisan ilmiah, Windows]
featuredimage: https://cdn.steemitimages.com/DQmQE7z74L3gHPYkJaYKuN67GqNJBwhr8X3R3R4WTQiYNm6/Gambar%203.9%20Pengaturan%20video%20dari%20PC%20pribadi.png
description: Rekan yang lain memilih software streaming server HTML5, VLC, Adobe Flash, dll, dan saya dapat yang langka yaitu Red5.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/26/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5
---
## Catatan

Ini merupakan tugas kuliah S1 saya pada Aplikasi Telekomunikasi Berbasis Web dimana kami bebas berkelompok atau sendiri dan saya milih sendiri. Tugasnya adalah bereksperimen dengan software streaming server. Saya dahulukan yang lain untuk memilih software cobaan mereka seperti HTML5, VLC, dan Adobe Flash, pada akhirnya saya dapat yang langka yaitu Red 5\. Tugas ini tidak pernah dipublikasi dimanapun dan saya sebagai penulis dan pemegang hak cipta melisensi tugas ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama saya sebagai penulis dan memberitahu bahwa versi asli dan terbuka tersedia disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Red5 server merupakan streaming server open source untuk menyediakan fasilitas streaming video di web. Contoh website yang khusus menyediakan streaming video adalah youtube, dailymotion, dan animecrazy, masih banyak lagi yang belum sempat disebutkan. Dengan Red5 server yang sudah siap pakai (tanpa perlu menambahkan pemrograman internet, kecuali ada kebutuhan khusus) maka Red5 server juga bisa disebut CMS (Content Management System). Pengguna tinggal menggunakannya saja.

Di seluruh dunia banyak yang sudah menggunakan Red5 sebagai streaming server lokal, ada juga beberapa yang memanfaat Red5 agar di publikasikan di server publik. Selama ini Red5 hanya digunakan sebagai website video. Namun saya belum tahu kalau ada yang mencoba Red5 sebagai media pada kamera pengawasan. Pada percobaan ini saya ingin menggunakan Red5 untuk live streaming (siaran langsung) menggunakan fasilitas yang disediakan oleh Red5 dan menggunakan Adobe Flash Media Live Encoder, dan memanfaatkannya untuk membangun kamera pengawas pribadi.

### 1.2 Rumusan Masalah

1.  Apakah Red5 dapat berfungsi sebagai media untuk live streaming?
2.  Apakah software Adobe Flash Media Live Encoder dapat melakukan live streaming ke Red5?
3.  Apakah Red5 efektik untuk kamera pengawas?

### 1.3 Tujuan Percobaan

Memanfaatkan Red5 server untuk membangun kamera pengawas pribadi.

### 1.4 Manfaat Percobaan

Dapat memanfaatkan Red5 server sebagai media kamera pengawas, dan dapat melihat streaming pada kamera kapan saja dan dimana saja.

### 1.5 Ruang Lingkup dan Batasan Percobaan

*   Menggunakan Red5 server untuk Linux Ubuntu, Kubuntu.
*   Menggunakan Web Cam.
*   Hanya sebatas server lokal.
*   Percobaan hanya sampai menjalankan (tidak sampai mengukur QOS atau lain-lain).
*   Bersifat pribadi (informasi hanya diketahui oleh pemilik, tidak seperti website di publik).

### 1.6 Sistematika Penulisan

Pendahuluan berisikan tentang latar belakang, tujuan, manfaat, dan ruang lingkup dan batasan percobaan. Tinjauan pustaka berisikan penjelasan tentang Red5 dan Adobe Flash Media Live Encoder dari situs resmi software. Metodelogi Percobaan berisikan langkah – langkah dalam percobaan. Hasil dan Pembahasan berisikan hasil percobaan. Penutup berisikan kesimpulan dan saran.

## BAB 2 Tinjauan Pustaka

### 2.1 Adobe Flash Media Live Encoder

Merupakan software media encoder yang dapat menangkap audio dan video serta stream video dan audio ke Adobe Media Server atau Flash Video Streaming Service (FVSS) secara real-time¬. Software ini mampu broadcast kegiatan secara langsung seperti olahraga, konser dan lain-lain. ([http://www.adobe.com/products/flash-media-encoder](http://www.adobe.com/products/flash-media-encoder))

### 2.2 Red5 Server

Red5 Media Server 1.0 memberikan video streaming yang kuat dan multi-user solution untuk Adobe Flash Player dan teknologi client menarik lainnya. Berbasis java dan framework opensource lainnya. Red5 mendukukung multi-user API's terbaru termasuk NetConnection, NetStream and SharedObject's. Sebagai tambahan mendukung terhadap RTMP protocol, mempunyau Tomcat Servlet container for JEE Web Applications. ([http://www.red5.org](http://www.red5.org))

## BAB 3 Metodelogi Percobaan

### 3.1 Tempat dan Waktu Percobaan

Dirumah rumah penulis di daerah Gatsu, Denpasar pada hari Senin 24 Desember 2012.

### 3.2 Alat Percobaan

Laptop ACER

*   Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
*   Mobile Intel® Graphics Media Accelerator 4500MHD
*   1GB DDR2
*   128 WXGA Acer CrystalBriteTM LCD
*   250GB HDD
*   Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
*   Atheros Communications Inc. AR928X Wireless Network Adapter
*   Operating System Linux Backtrack 5 R3 32 bit

PC

*   Intel® Pentium® core i5 processor
*   4 GB RAM
*   1GB VGA
*   Gigabit Ethernet Controller
*   Alcor Micro, Corp. USB 2.0 PC Camera
*   Operating System Windows 7 Ultimate 32 bit

Software

*   Adobe Flash Media Live Encoder 3.2
*   Red5 server

### 3.3 Bahan Percobaan

Bahannya adalah streaming video itu sendiri.

### 3.4 Langkah Percobaan

#### 3.4.1 Instalasi Red5

Component penting pada Red5 adalah java, ivy dan apache ant. Juga update distribusi linux. Langkahnya sebagai berikut diketik di command console. Java tidak disediakan di repository, sebaiknya menambah repository lain.

*   Nano /etc/apt/sources.list
*   Tambahkan dibawahnya “deb http://ftp.us.debian.org/debian/ squeeze main non-free” atau repository lainnya. (lewati langkah ini bila semua package sudah tersedia)
*   “Apt-get update”
*   “Apt-get install java-package sun-java6-jdk sun-java6-jre ant ivy”
*   Download Red5, saya download dari http://www.red5.org/downloads/red5/1_0/ dan yang saya download Red5-1.0.0-RC1.tar.gz.
*   Sebaiknya ditaruh di /usr/local atau /usr/share. “mv Red5-1.0.0-RC1.tar.gz /usr/local”.
*   “cd /usr/local”
*   “tar xzvf Red5-1.0.0-RC1.tar.gz”
*   Untuk menjalankannya, masuk ke folder Red5\. “Cd Red5-1.0.0”
*   “./red5.sh”. Jika keluar “installer service created” maka sudah bisa digunakan.

![Gambar 3.1 Menjalankan Red5 lewat Terminal.png](https://cdn.steemitimages.com/DQmeuJSJb7bXN3yDkU9PA1bcv2pPmpfqzThdcSG9hetJrdx/Gambar%203.1%20Menjalankan%20Red5%20lewat%20Terminal.png)

Gambar 3.1 Menjalankan Red5 lewat Terminal



*   Untuk berhenti, masuk lagi “Cd Red5-1.0.0”.
*   “./red5-shutdown.sh”
*   Hubungkan ke Internet untuk mendownload applikasi tambahan.
*   Buka web browser di http://localhost:5080 atau http://127.0.0.1:5080\. Disini terlihat kalau Red5 sudah jalan.
*   Masuk ke http://localhost:5080/installer dan pillih oflaDemo dan midiDemo untuk di install.

![Gambar 3.2 Tampilan Red5 bila jalan.png](https://cdn.steemitimages.com/DQmdahrBFUJGVqiQBZZzJthTZynnSG2Zd5NsCUzp4kXDwc4/Gambar%203.2%20Tampilan%20Red5%20bila%20jalan.png)

Gambar 3.2 Tampilan Red5 bila jalan



#### 3.4.2 Melakukan Streaming ke Red5-server dari Server

Red5 langsung menyediakan applikasi untuk streaming video. Seandainya dari server:

Buka browser, masuk ke http://localhost:5080/demos/ untuk melihat fasilitas, tapi langsung saja ke http://localhost:5080/demos/publisher.html.

![Gambar 3.3 Tampilan applikasi publisher pada Red5.png](https://cdn.steemitimages.com/DQmYyj5gTKRZZ8mZ4BQrJYfUGqiUcp4u7E7EAsGPs15YxiC/Gambar%203.3%20Tampilan%20applikasi%20publisher%20pada%20Red5.png)

Gambar 3.3 Tampilan applikasi publisher pada Red5



Setelah konfigurasi di bagian video klik “connect” pada bagian server, lalu “publish” di video dan audio. Konfigurasinya sebagai berikut:

![Gambar 3.4 Pengaturan pada video.png](https://cdn.steemitimages.com/DQmVSWbg4nkmtqeMvwNa2TjKWu9YnBqX1YFA8r3odLEWLZm/Gambar%203.4%20Pengaturan%20pada%20video.png)

Gambar 3.4 Pengaturan pada video

![Gambar 3.5 Pengaturan pada audio.png](https://cdn.steemitimages.com/DQmVYz7tRXPKGytUFXSqAJiz7seLCxZ3afdVKNEyVgHFMZt/Gambar%203.5%20Pengaturan%20pada%20audio.png)

Gambar 3.5 Pengaturan pada audio



Untuk menampilkan streaming pada server pilih nama stream yang telah di publish, lalu klik tombol “play”.

![Gambar 3.6 Tampilan streaming.png](https://cdn.steemitimages.com/DQmcHiLwQwjBZAkg5xFuam3MGw2QXSUzkibztXm3XdEADQK/Gambar%203.6%20Tampilan%20streaming.png)

Gambar 3.6 Tampilan streaming



#### 3.4.3 Melakukan Streaming ke Red5-server Peer-Peer

Penulis melakukan konfigurasi jaringan sebagai berikut:

![Gambar 3.7 Konfigurasi jaringan peer-peer.png](https://cdn.steemitimages.com/DQmTVf4aZCj7kS8MRCQcv7DJozzKh7qDwHUE6B8tGAafnGD/Gambar%203.7%20Konfigurasi%20jaringan%20peer-peer.png)

Gambar 3.7 Konfigurasi jaringan peer-peer



Sama halnya bila melakukan streaming dari komputer lain yang terhubung dengan server melalui jaringan hanya “localhost” diganti dengan IP server.

Buka browser pada PC pribadi, lalu ketik http://192.168.0.1:5080\. Bila berhasil akan terlihat sebagai berikut:

![Gambar 3.8 Tampilan pengaksesan server dari PC pribadi.png](https://cdn.steemitimages.com/DQmTCdC9e4uv9B7Etsi5kXgT3NNRRQqaSs3BmqNXzVusSc3/Gambar%203.8%20Tampilan%20pengaksesan%20server%20dari%20PC%20pribadi.png)

Gambar 3.8 Tampilan pengaksesan server dari PC pribadi



Langsung saja ke http://192.168.0.1:5080/demos/publisher.html. Pengaturan video sama seperti sebelumnya, tetapi namanya adalah stream2 karena stream1 sudah dipakai di sever.

![Gambar 3.9 Pengaturan video dari PC pribadi.png](https://cdn.steemitimages.com/DQmQE7z74L3gHPYkJaYKuN67GqNJBwhr8X3R3R4WTQiYNm6/Gambar%203.9%20Pengaturan%20video%20dari%20PC%20pribadi.png)

Gambar 3.9 Pengaturan video dari PC pribadi



Pada server yang sebelumnya “rtmp://localhost/oflaDemo” menjadi “rtmp://192.168.0.1/oflaDemo”. Pada video jangan lupa di publish.

![Gambar 3.10 Tampilan streaming dari PC pribadi.png](https://cdn.steemitimages.com/DQmQv8tNH1KXNvN2yvivQCwDcE39C2F2EHhoJrvso2iTX6X/Gambar%203.10%20Tampilan%20streaming%20dari%20PC%20pribadi.png)

Gambar 3.10 Tampilan streaming dari PC pribadi



#### 3.4.4 Melakukan Streaming Menggunakan Software Adobe Flash Media Live Encoder

Disini “stream2” diputus dan Streaming dari PC pribadi menggunakan Adobe Flash Media Live Encoder. Berikut adalah pengaturan di Adobe Flash Media Live Encoder:

![Gambar 3.11 Pengaturan pada Adobe Flash Media Live Encoder.png](https://cdn.steemitimages.com/DQmdB3x1Fadd4QwdVWN6kRxos94HwCfgMvS7uBGngSGE3eU/Gambar%203.11%20Pengaturan%20pada%20Adobe%20Flash%20Media%20Live%20Encoder.png)

Gambar 3.11 Pengaturan pada Adobe Flash Media Live Encoder



Jika berhasil streaming maka akan tampil sebagai berikut:

![Gambar 3.12 Tampilan Adobe Flash Media Live Encoder jika sedang berjalan.png](https://cdn.steemitimages.com/DQmXKS5THecFa5E7QFMR7g5abRHjWbXJiBVieehV8ybffFy/Gambar%203.12%20Tampilan%20Adobe%20Flash%20Media%20Live%20Encoder%20jika%20sedang%20berjalan.png)

Gambar 3.12 Tampilan Adobe Flash Media Live Encoder jika sedang berjalan



Tadi nama streaming adalah stream2 maka dapat dilihat sebagai berikut:

![Gambar 3.13 Tampilan streaming di Red5-server.png](https://cdn.steemitimages.com/DQmUyyeo3rs44E93YTQCcwUeroAj6CTdHfxY75tKwQwPPcn/Gambar%203.13%20Tampilan%20streaming%20di%20Red5-server.png)

Gambar 3.13 Tampilan streaming di Red5-server



## BAB 4 Hasil dan Pembahasan

### 4.1 Tampilan Streaming lewat browser dari server

Tampilan stream1

![Gambar 4.1 Tampilan stream1 dari browser server.png](https://cdn.steemitimages.com/DQmdXMr9JHoodcYg1YnszrAkYVop6YPfJcfhy5PHTEcMcYE/Gambar%204.1%20Tampilan%20stream1%20dari%20browser%20server.png)

Gambar 4.1 Tampilan stream1 dari browser server



Tampilan stream2

![Gambar 4.2 Tampilan stream2 dari browser server.png](https://cdn.steemitimages.com/DQmPZmf4Y5wwDYcAEJBxMUckbnTJGTyeTGafgyQQoHdb4jV/Gambar%204.2%20Tampilan%20stream2%20dari%20browser%20server.png)

Gambar 4.2 Tampilan stream2 dari browser server



### 4.2 Tampilan Streaming lewat browser dari PC pribadi

Tampilan stream1

![Gambar 4.3 Tampilan stream1 dari browser PC pribadi.png](https://cdn.steemitimages.com/DQmTF5nCwxC2BZ8wk2t15Vrbum59VK4paXAX1yB97rN2Vq8/Gambar%204.3%20Tampilan%20stream1%20dari%20browser%20PC%20pribadi.png)

Gambar 4.3 Tampilan stream1 dari browser PC pribadi



Tampilan stream2

![Gambar 4.4 Tampilan stream2 dari browser PC pribadi.png](https://cdn.steemitimages.com/DQmb1pn8SA6pepvLKrY5yQTyMtXMfURTV6fHLfb2Wek5vqV/Gambar%204.4%20Tampilan%20stream2%20dari%20browser%20PC%20pribadi.png)

Gambar 4.4 Tampilan stream2 dari browser PC pribadi



## BAB 5 Penutup

### 5.1 Simpulan

Dari hasil percobaan maka dapat disimpulkan Red5 dapat berfungsi sebagai media untuk streaming, software Adobe Flash Media Live Encoder dapat melakukan streaming ke Red5, dan Red5 dapat diolah sebagai media untuk kamera pengawas.

### 5.2 Saran

Percobaan ini hanya sebatas jaringan lokal saja dan pada PC dan laptop. Penulis menyarankan untuk mengembangkan penggunakan Red5 dengan hosting (server publik). Agar lebih effektif sebagai media kamera pengawas maka agar dilakukan percobaan diakses dengan mobile. Selain itu penulis tidak ada mengedit html, javascript, swf atau lainnya. Disarankan untuk mengedit hal tersebut sesuai kebutuhan pemakai.

## Daftar Pustaka

*   [http://www.adobe.com/products/flash-media-encoder](http://www.adobe.com/products/flash-media-encoder), diakses tanggal 17 Desember 2012
*   [http://www.red5.org](http://www.red5.org), diakses tanggal 28 Desember 2012

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/pembuatan-streaming-server-pribadi-sebagai-media-kamera-peng-xwnxzxz?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/pembuatan-streaming-server-pribadi-sebagai-media-kamera-peng-xwnxzxz?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/26/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5](https://0fajarpurnama0.github.io/bachelor/2020/11/26/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5)
*   [https://0fajarpurnama0.medium.com/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5-ef7a91ca491f](https://0fajarpurnama0.medium.com/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5-ef7a91ca491f)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5)
*   [https://blurt.buzz/blurtindonesia/@fajar.purnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5?referral=fajar.purnama](https://blurt.buzz/blurtindonesia/@fajar.purnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/pembuatan-streaming-server-pribadi.html](https://0darkking0.blogspot.com/2020/11/pembuatan-streaming-server-pribadi.html)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/117-pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/117-pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5)
*   [https://steemit.com/indonesia/@fajar.purnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5](http://0fajarpurnama0.weebly.com/blog/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5)
*   [https://read.cash/@FajarPurnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5-a13a7b28](https://read.cash/@FajarPurnama/pembuatan-streaming-server-pribadi-sebagai-media-kamera-pengawas-dengan-red5-a13a7b28)