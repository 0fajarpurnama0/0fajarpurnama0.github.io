---
layout: post
title: Pengantar Senderhana Terhadap Internet dan Jaringan Komputer
categories: internet
tags: [DHCP, DNS, Internet, jaringan komputer, LAN, P2P, routing dinamis, routing statis, WAN, web]
featuredimage: https://cdn.steemitimages.com/DQmXMqg8ktTEpQqKKHZEFxb7zDj2emRXi27ksLpM3oTRGsM/Figure%204.5%20Dig%20the%20domain%20name.png
description: Mensimulasikan Local Area Network (LAN). Mensimulasikan Wide Area Network (WAN). Layanan umum Internet. Rancang cloud sederhana Anda.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/03/24/pendahuluan-senderhana-terhadap-internet-dan-jaringan-komputer
---

## Daftar Isi

*   [0\. Garis Besar](#0\. Garis Besar)
    *   [Objective](#Objective)
    *   [Lingkungan Simulasi](#Simulation Environment)
*   [1\. Tur keliling Jaringan todays](#1\. Tur keliling todays Network)
    *   [1.1 Definisi](#1.1 Definisi)
    *   [1.2 Internet](#1.2 Internet)
*   [2\. Jaringan Komputer](#2\. Jaringan Komputer)
    *   [2.1 Jenis Jaringan Komputer](#2.1 Jenis Jaringan Komputer)
    *   [2.2 Some Information](#2.2 Some Information)
*   [3\. Perutean Sederhana](#3\. Routing Sederhana)
    *   [3.1 Default Gateway](#3.1 Default Gateway)
    *   [3.2 Routing Statis](#3.2 Routing Statis)
    *   [3.3 Routing Dinamis](#3.3 Routing Dinamis)
*   [4\. Fitur Umum di Internet](#4\. Fitur Umum di Internet)
    *   [4.1 Protokol Konfigurasi Host Dinamis (DHCP)](#4.1 Protokol Konfigurasi Host Dinamis (DHCP))
    *   [4.2 Layanan Nama Domain (DNS)](#4.2 Layanan Nama Domain (DNS))
    *   [4.3 Server Web](#4.3 Server Web)

## 0\. Garis Besar

Topik ini ingin menunjukkan kepada Anda dari jauh seperti apa jaringan komputer itu. Kami tidak akan menunjukkan Anda jauh di dalam karena di situlah keadaan cenderung menjadi sulit, misalnya subnet, lalu lintas jaringan, protokol, dll. Sederhananya kami ingin Memperkenalkan apa itu jaringan komputer, bagaimana orang saat ini bergantung padanya sekarang, dan bagaimana itu bahkan atau bagaimana kita dapat menggunakannya. Dari jauh Internet terlihat rumit seperti pada Gambar A, tetapi untuk menjelaskannya hanyalah koneksi dari begitu banyak node yang terdiri dari komputer, server, dan perangkat jaringan lainnya.

![https://www.andrew.cmu.edu/user/pcarboni/internet_history_site](https://cdn.steemitimages.com/DQmXCHkSx78BwS2wK6xDB7q3qJM7N7sohX3751pZACWaKGK/Figure%201.%20Internet%20Illustrated.gif)

Gambar A. Ilustrasi Internet: [https://www.andrew.cmu.edu/user/pcarboni/internet_history_site](https://www.andrew.cmu.edu/user/pcarboni/internet_history_site)



### Objective

Jika ada orang asing yang bertanya kepada Anda tentang apa itu Internet dan Anda dapat menjawabnya dengan mudah, maka Anda mendapatkan inti dari kursus ini. Jika Anda dapat menemukan potongan puzzle dan membentuk gambar The Internet puzzle, maka Anda telah memenuhi tujuan pembelajaran dari kursus ini. Untuk saat ini kami ingin membuat daftar tujuan pembelajaran berikut. Mensimulasikan Local Area Network (LAN). Mensimulasikan Wide Area Network (WAN). Layanan umum Internet. Rancang cloud sederhana Anda (Gambar B misalnya).

![https://404store.com/2020/03/23/Figure2.SampleNetworkSimulation.png](https://cdn.steemitimages.com/DQmdCkdN8ER3tp62vxbdfT8vcjRXgWA5E9Ff4cgpotFn7DZ/Figure%202.%20Sample%20Network%20Simulation.png)

Gambar B. Simulasi Jaringan Sampel



### Lingkungan Simulasi

Jika Anda memiliki perangkat keras untuk melakukan percobaan, disarankan untuk menggunakannya, tetapi di sini kami akan memberikan materi dalam simulasi. Pengalaman saya dalam simulator jaringan adalah bahwa saya menemukan Cisco Packet Tracer yang paling mudah digunakan (sangat disarankan untuk pemula), tetapi untuk mendapatkan perangkat lunak ini secara hukum, Anda harus mendaftar ke Cisco Academy. Kami memahami bahwa tidak semua memiliki akses ke perangkat lunak ini, jadi kami memutuskan untuk menggunakan alternatif. Jika Anda memiliki gambar Cisco IOS legal, Gui Network Simulator 3 (GNS3) adalah alternatif Anda berikutnya, jika tidak maka cari simulator jaringan gratis lainnya. Di sini kami menggunakan Common Emulator Research Open (Core) Network [http://www.nrl.navy.mil/itd / ncs / produk / inti](http://www.nrl.navy.mil/itd/ncs/products/core) .

## 1\. Tur keliling Jaringan todays

### 1.1 Definisi

Ini berisi dua kata "komputer" dan "jaringan" adalah koneksi perangkat komputer untuk saling bertukar data, lihat Gambar 1.1\. Tidak masalah bagaimana itu terhubung atau apa yang terhubung, apakah kita menggunakan kabel seperti kabel serial, UTP, serat optik, dan usb, atau nirkabel selama terhubung, itu adalah jaringan komputer. Jaringan komputer tidak terbatas pada komputer pribadi (PC), perangkat komputer seperti gadget, ponsel, printer, dan konsol game dihitung ke dalam jaringan komputer. Tempat di mana perangkat-perangkat ini berinteraksi satu sama lain adalah jaringan komputer.

![https://404store.com/2020/03/23/Figure1.1Illustrationofsimplecomputernetwork.jpg](https://cdn.steemitimages.com/DQmez9uKC1RVbYWwNMLKj2jbQbXtdvwrSXb7maqVtCCnENR/Figure%201.1%20Illustration%20of%20simple%20computer%20network.jpg)

Gambar 1.1 Ilustrasi jaringan komputer sederhana



### 1.2 Internet

Pada Gambar 1.1 sebelumnya ada banyak perangkat yang terhubung dan satu Bumi seperti planet. Planet seperti Bumi adalah jaringan yang sangat besar dan siapa yang tahu berapa banyak di dalamnya, jadi kami hanya merujuknya ke Internet. Internet berisi koneksi perangkat komputer di seluruh dunia. Server Google yang pertama di Standford University, sekarang memiliki banyak server yang didistribusikan di seluruh dunia. Ini juga berlaku untuk Yahoo dan MSN. Facebook ada di Amerika Serikat, Line ada di Jepang, dan jika Anda mengakses kursus ini melalui cloud Moodle, kantor pusat (HQ) ada di Australia. Mereka membuat situs-situs ini tersedia untuk umum di jaringan yang disebut Internet. Ada banyak barang yang tersedia berkat Internet, berikut adalah contohnya:

#### Mesin Pencari pada Gambar 1.2\.

![https://404store.com/2020/03/23/Figure1.2Google.png](https://cdn.steemitimages.com/DQmaA6ec36ess7BbhpW2pjG4HupPAX9BNHA3NhxpSPsneQi/Figure%201.2%20Google.png)

Gambar 1.2 Google



#### Wikis pada Gambar 1.3\.

![https://404store.com/2020/03/23/Figure1.3Wikipedia.png](https://cdn.steemitimages.com/DQmVS5cxrrWioWBhHswbHkvLxLxQ8K2vUxvcJA64e1pjGd1/Figure%201.3%20Wikipedia.png)

Gambar 1.3 Wikipedia



#### Media Sosial pada Gambar 1.4\.

![https://404store.com/2020/03/23/Figure1.4Facebook.png](https://cdn.steemitimages.com/DQmXnbD2TFc8e9qX1EJL3ndVNTmy4fUmCtAu2Pu3QhYGPhz/Figure%201.4%20Facebook.png)

Gambar 1.4 Facebook



#### Video Online pada Gambar 1.5\.

![https://404store.com/2020/03/23/Figure1.5Youtube.png](https://cdn.steemitimages.com/DQmPZP5DHjW15Gk5Qru7AN7bkbFdT5f5MG4ugmCPUf6qgee/Figure%201.5%20Youtube.png)

Gambar 1.5 Youtube



#### Kursus Online pada Gambar 1.6\.

![https://404store.com/2020/03/23/Figure1.6Coursera.png](https://cdn.steemitimages.com/DQmUJaimxMbrSPw6yXSWAtf52jTopXXdEiagYp3SRWf2cyd/Figure%201.6%20Coursera.png)

Gambar 1.6 Coursera



#### Game Online pada Gambar 1.7\.

![https://404store.com/2020/03/23/Figure1.7Dota2.jpg](https://cdn.steemitimages.com/DQmXVZUW8MMhzBUKuLumkf9YJqeY5rEvz8HEqYwCXDnbD33/Figure%201.7%20Dota2.jpg)

Gambar 1.7 Dota2



#### Situs Web Pribadi (blog) pada Gambar 1.8\.

![https://404store.com/2020/03/23/Figure1.8Wordpress.png](https://cdn.steemitimages.com/DQmXUDciHo2viHnTNY3aUgWaH9Bb19kmzjKH58oKK54cenb/Figure%201.8%20Wordpress.png)

Gambar 1.8 Wordpress



#### Email dan Obrolan pada Gambar 1.9\.

![https://404store.com/2020/03/23/Figure1.9YahooMail.png](https://cdn.steemitimages.com/DQmT2Ca7CALSPBhs2zuFtna6zb1vRTfqSNmTWHhVtAWdi7U/Figure%201.9%20Yahoo%20Mail.png)

Gambar 1.9 Yahoo Mail



#### Layanan Cloud pada Gambar 1.10\.

![https://404store.com/2020/03/23/Figure1.10Cloud9.png](https://cdn.steemitimages.com/DQmVHkFCzvTpBAY4kFcLkvxc1GUenA2rYiG1q3aEt43uwuM/Figure%201.10%20Cloud9.png)

Gambar 1.10 Cloud9



## 2\. Jaringan Komputer

### 2.1 Jenis Jaringan Komputer

Gambar 2.1 adalah ringkasan dari topik ini.

![https://404store.com/2020/03/23/Figure2.1ComuterNetworkTypesSummary.gif](ttps://cdn.steemitimages.com/DQmWE5w1EEMBvPDFiDDWBEKbK2QQMFw7ewEnz8ZM2zwnEW1/Figure%202.1%20Comuter%20Network%20Types%20Summary.gif)

Gambar 2.1 Jenis Ringkasan Jaringan Komputer



#### 2.1.1 Jaringan Peer-Peer (P2P)

Jaringan peer to peer adalah jaringan yang hanya terdiri dari 2 perangkat, baik itu kabel atau nirkabel. Ini seperti percakapan antara 2 orang pada Gambar 2.2\.

![https://404store.com/2020/03/23/Figure2.2Peer- Peer-Network.png ](https://cdn.steemitimages.com/DQmT3W8qUvs9AUAsa7gztunxZd5Mr6n47MoMZnP7ptjanmu/Figure%202.2%20Peer-Peer-Network.png)

Gambar 2.2 Jaringan Peer-Peer



#### 2.1.2 Jaringan Area Lokal (LAN)

Ketika perangkat lain bergabung dengan jaringan peer-peer, itu kemudian menjadi jaringan area lokal (LAN). LAN terdiri dari lebih dari 2 perangkat yang dapat dihubungkan melalui kabel bus, hub layer 1, atau switch layer 2\. Untuk kursus ini kami hanya menunjukkan bagian sederhana pada Gambar 2.3 adalah LAN terdiri dari PC yang terhubung ke sakelar L2\.

![https://404store.com/2020/03/23/Figure2.3LocalAreaNetworkLAN.png](https://cdn.steemitimages.com/DQmYbafUq62AxrrgNStPoqjM6Zu8gzNZ6B1pzuVZHQ2Z8Ev/Figure%202.3%20Local%20Area%20Network%20(LAN).png)

Gambar 2.3 Jaringan Area Lokal (LAN)



#### Wide Area Network (WAN)

Jaringan area luas (WAN) adalah jaringan yang terdiri dari 2 atau lebih LAN yang pasti lebih besar dari jaringan peer-peer dan LAN. Dikatakan bahwa Internet adalah WAN terbesar. Pada Gambar 2.4 menunjukkan WAN minimal terdiri dari 2 LAN di mana mereka terhubung oleh router L3\.

![https://404store.com/2020/03/23/Figure2.4WideAreaNetworkWAN.png](https://cdn.steemitimages.com/DQmePEsEwwTrJToTGPUcg1KQqK8QxG66VoCzMFPRXo6f4fN/Figure%202.4%20Wide%20Area%20Network%20(WAN).png)

Gambar 2.4 Wide Area Network (WAN)



<div class="video-container"><iframe src="https://lbry.tv/$/embed/core-network-simple-lan-wan/4f9706f198b0f26e94afb3dee9c2e607c1018962" frameborder="0" allowfullscreen=""></iframe></div>

### 2.2 Some Information

#### 2.2.1 Versi Protokol Internet 4

Setiap perangkat komputer memiliki 2 alamat yang dikenal umum. Salah satunya adalah alamat perangkat keras (biasanya MAC: e0: 3f: 49: c3: 36: dc) dan alamat jaringan yang saat ini menggunakan protokol internet versi 4 (IPv4) dan di masa depan akan menerapkan IPV6\. Alamat perangkat keras yang kami nilai sebagai topik selanjutnya, sehingga kami hanya akan menjelaskan korelasi antara alamat perangkat keras dan alamat jaringan jika disinkronkan dengan proses yang disebut terjemahan alamat jaringan (NAT).

Hari ini kami masih menggunakan alamat IPv4 untuk terhubung ke jaringan. Alamat IP misalnya 192.168.0.2/24 atau 192.168.0.2 255.255.255.0 bukan pada komputer itu sendiri, tetapi ditugaskan pada antarmuka jaringan (adaptor kabel ethernet, adaptor nirkabel, dll). Bagian terakhir dari alamat IP (192.168.0.24/24, atau 192.168.0.24 255.255.255.0) adalah subnet mask yang menentukan jaringan yang dimilikinya. Di jaringan:

*   Alamat IP pertama adalah alamat jaringan.
*   Alamat IP kedua biasanya ditetapkan pada gateway default.
*   Alamat IP terakhir adalah alamat broadcast.
*   Alamat IP yang tersisa ditugaskan ke perangkat lain atau setiap PC.

Subnet mask menentukan kelas alamat IP. Kelas A jaringan dapat menyimpan lebih banyak alamat IP, kelas B kurang dari kelas A, dan kelas C adalah yang paling sedikit. Ada juga alamat IP tanpa kelas berdasarkan subnet mask, tetapi dianggap sebagai topik lanjutan, jadi tidak akan dibahas di sini. Di sini kami hanya menggunakan alamat IP pribadi kelas C dari 192.168.0.0 - 192.168.255.255\.

<table><caption></caption>

<thead>

<tr>

<th>Class</th>

<th>Subnet</th>

<th>Total alamat</th>

</tr>

</thead>

<tbody>

<tr>

<td>A</td>

<td>255.0.0.0 atau / 8</td>

<td>16277215</td>

</tr>

<tr>

<td>B</td>

<td>255.255.0.0 atau / 16</td>

<td>65535</td>

</tr>

<tr>

<td>C</td>

<td>255.255.255.0 / 24</td>

<td>255</td>

</tr>

</tbody>

</table>

Setelah alamat IP ada garis miring (/) yang menunjukkan subnet mask berdasarkan jumlah biner "1" yang berisi pada subnet mask saat dikonversi ke nilai biner. Itu juga topik lanjutan tetapi kami ingin Anda mengingat yang berikut:

<table><caption></caption>

<thead>

<tr>

<th>255.0.0.0</th>

<th>/ 8</th>

</tr>

</thead>

<tbody>

<tr>

<td>255.255.0.0</td>

<td>/ 16</td>

</tr>

<tr>

<td>255.255.255.0</td>

<td>/ 24</td>

</tr>

</tbody>

</table>

Anda dapat menulis seperti ini 192.168.1.1/24 atau 192.168.1.1 255.255.255.0\. Ngomong-ngomong, alamat IP pribadi adalah alamat yang bisa kita gunakan di jaringan di luar Internet dan alamat IP publik selain alamat pribadi yang terdaftar di Internet.

<table><caption></caption>

<thead>

<tr>

<th>Class</th>

<th>Alamat IP Pribadi  
</th>

</tr>

</thead>

<tbody>

<tr>

<td>A</td>

<td>10.0.0.0/8</td>

</tr>

<tr>

<td>B</td>

<td>172.16.0.0/16</td>

</tr>

<tr>

<td>C</td>

<td>192.168.0.0/24 - 192.168.255.0/24</td>

</tr>

</tbody>

</table>

Kami hanya akan menggunakan alamat IP pribadi kelas C. Kembali ke topik alamat jaringan, gateway default, alamat broadcast, dan contoh alamat host sebagai berikut:

<table><caption></caption>

<thead>

<tr>

<th>Topeng Subnet  
</th>

<th>ID Jaringan  
</th>

<th>Gateway Default  
</th>

<th>ID Host (Alamat Gratis)  
</th>

<th>ID Siaran  
</th>

</tr>

</thead>

<tbody>

<tr>

<td>255.255.255.0 atau / 24  
</td>

<td>192.168.0.0</td>

<td>192.168.0.1</td>

<td>192.168.0.2 - 192.168.0.254  
</td>

<td>192.168.0.255</td>

</tr>

<tr>

<td>255.255.255.0 atau / 24</td>

<td>192.168.1.0</td>

<td>192.168.1.1</td>

<td>192.168.1.2 - 192.168.1.254  
</td>

<td>192.168.1.255</td>

</tr>

<tr>

<td>255.255.0.0 atau / 16</td>

<td>172.16.0.0</td>

<td>172.16.0.1</td>

<td>172.16.0.2 - 172.16.255.254  
</td>

<td>172.16.255.255  
</td>

</tr>

<tr>

<td>255.0.0.0 atau / 8</td>

<td>10.0.0.0</td>

<td>10.0.0.1</td>

<td>10.0.0.2 - 10.255.255.254  
</td>

<td>10.255.255.255</td>

</tr>

</tbody>

</table>

Jika Anda kembali ke bagian 2.1 dari penetapan alamat IP, misalnya 192.168.1.20/24 milik jaringan 192.168.1.0, dan 192.168.2.20/24 milik jaringan 192.168.2.0\.

#### 2.2.2 Model Interkoneksi Sistem Terbuka

dia Sistem Terbuka Interkoneksi memiliki 7 lapisan atau disebut lapisan OSI yang harus didengar oleh teknisi jaringan setidaknya sekali pada Gambar 2.5\.

![https://commons.wikimedia.org/wiki/File:Osi-model-7-layers. png ](https://cdn.steemitimages.com/DQmVfdcYXE1keat8qDBG6hzjqc7EK97hRHzo9ZoM8HhnKcs/Figure%202.5%20Osi%20Layer.png)

Gambar 2.5 Lapisan Osi [https://commons.wikimedia.org/wiki/File : Osi-model-7-layers.png](https://commons.wikimedia.org/wiki/File:Osi-model-7-layers.png)



Ini juga merupakan topik lanjutan sehingga kami hanya membahas garis besarnya. L1 Fisik ada di situs media transmisi fisik seperti kabel ethernet, serat optik, atau gelombang radio. L2 Data Link ada pada alamat perangkat keras MAC misalnya, lapisan ini mengelompokkan bit yang diterima dalam transmisi. Jaringan L3 ada pada alamat jaringan, alamat IP misalnya dan mendefinisikan mekanisme perutean. L4 Transport adalah penggunaan mekanisme transportasi, TCP atau UDP misalnya. Sesi L5 membuat sesi. Presentasi L6 dan Aplikasi L7 adalah apa yang kita lihat di layar, antarmuka tempat kita berinteraksi secara langsung.

## 3\. Perutean Sederhana

### 3.1 Gateway Default

Pada PC kita dalam kehidupan sehari-hari kita setidaknya memiliki 4 konfigurasi yang perlu kita atur yaitu (1) alamat IP (2) Subnet Mask (3) Default Gateway (4) Server Dns, seperti pada Gambar 3.1\.

![https://404store.com/2020/03/23/Figure3.1CommonPCnetworkconfiguration.png](https://cdn.steemitimages.com/DQmNU1Ni2dh1z7xq2QT6DKo2Xo3wVbNEqdK3e4no24dQhqx/Figure%203.1%20Common%20PC%20network%20configuration.png)

Gambar 3.1 Konfigurasi jaringan PC umum



Jika pada tugas sebelumnya Anda menggunakan Core Network untuk mensimulasikan WAN sederhana, gateway atau rute default pada setiap PC secara otomatis ditetapkan (juga alamat IP pada PC dan Router). Bagaimana jika kita berada dalam situasi untuk mengaturnya secara manual? Mengingat kami memiliki PC dan ingin terhubung ke Internet pada jaringan yang tersedia yang memberikan akses ke Internet. Secara kasar rekan mengatakan "Anda dapat terhubung ke switch kami, jaringan kami adalah 192.168.7.0/24, dan alamat IP dalam router adalah 192.168.7.1/24, (psssst, untuk DNS gunakan Google saja untuk saat ini)". Dengan informasi itu, kami mengonfigurasi PC kami sebagai contoh pada Gambar 3.2:

![https://404store.com/2020/03/23/Figure3.2FilledManualHostNetworkConfiguration.png](https://cdn.steemitimages.com/DQmQb7e16ub8kQnkBPNwwzf6js8yD18CU7FFtJeDDHuKN1Q/Figure%203.2%20Filled%20Manual%20Host%20Network%20Configuration.png)

Gambar 3.2 Diisi Konfigurasi Host Network Manual



Sekarang apa itu gateway default? Pada konfigurasi ini gateway default adalah gerbang yang kita lalui untuk menghubungkan ke jaringan lain, atau pintu untuk keluar dari jaringan kita. Pada konfigurasi PC kami adalah pintu untuk terhubung ke Internet. Kita dapat menggambarkan ini sebagai rumah, rumah kita memiliki banyak kamar dengan setiap kamar memiliki alamatnya sendiri. Kemana kita pergi ke rumah lain? Jawabannya adalah "pintu depan" yang setara dengan "gateway default".

Selanjutnya mari kita coba menghubungkan 2 LAN dan mengkonfigurasinya secara manual. Katakanlah jaringan sebelumnya adalah 192.168.7.0/24 dan kami ingin menghubungkannya ke jaringan tetangga 192.168.8.0/24\. Yang terbaik adalah kita membuat tabel seperti pada bagian 2, kemudian untuk menguji apakah kita bisa pergi ke tetangga kita menggunakan perintah "jejak rute" pada Gambar 3.3\. Dari 192.168.7.20/24 Untuk mencapai jaringan tetangga terlebih dahulu harus melalui antarmuka router yang memiliki alamat 192.168.7.1/24 (gateway default), kemudian mencapai tujuan 192.168.8.20/24\.

<table><caption></caption>

<thead>

<tr>

<th>Subnet Mask</th>

<th>ID Jaringan</th>

<th>Gateway Default</th>

<th>ID Host</th>

<th>ID Siaran</th>

</tr>

</thead>

<tbody>

<tr>

<td>255.255.255.0 atau / 24</td>

<td>192.168.7.0</td>

<td>192.168.7.1</td>

<td>192.168.7.2 - 192.168.7.254</td>

<td>192.168.7.255</td>

</tr>

<tr>

<td>255.255.255.0 atau / 24</td>

<td>192.168.8.0</td>

<td>192.168.8.1</td>

<td>192.168.8.2 - 192.168.8.254</td>

<td>192.168.8.255</td>

</tr>

</tbody>

</table>

![https://404store.com/2020/03/23/Figure3.3TraceroutingonneighboringnetworkonCore.png](https://cdn.steemitimages.com/DQmeNLDKguRyp5NifxUTg2S4kgzrAnAENiqEzpAMt6dfLFf/Figure%203.3%20Trace%20routing%20on%20neighboring%20network%20on%20Core.png)

Gambar 3.3 Trace routing pada jaringan tetangga di Core



<div class="video-container"><iframe src="https://lbry.tv/$/embed/core-network-default-gateway/3c9794c15c659ded42c0952dbf84615003149b9e" frameborder="<" allowfullscreen=""></iframe></div>

### 3.2 Routing Statis

Anda mungkin perlu menginstal dan mengonfigurasi Quagga dengan benar untuk melakukan simulasi ini. Cari tutorial (persiapan simulasi segera hadir).

Internet dikatakan sebagai WAN terbesar di Dunia, jadi perutean bukanlah sesuatu yang bisa kita abaikan. Bentuk pertama dari perutean adalah perutean statis di mana kita membentuk jalur kita secara manual. Jika kita memiliki banyak koneksi (antarmuka) pada PC kita, kita dapat mengatur peruteannya, tetapi secara default satu-satunya rute adalah melalui gateway default. Pada bagian sebelumnya ketika kita menetapkan gateway default 192.168.7.1 berarti bahwa untuk pergi ke tempat lain selain jaringan lokal kita melalui 192.168.7.1, atau kita dapat mengatakannya "default via 192.168.7.1", atau "0.0.0.0/ 0 melalui 192.168.7.1 ", berarti" [untuk pergi ke mana saja] [via] [192.168.7.1] ". Ini adalah rute statis tetapi rute default. Katakanlah kita ingin terhubung ke WAN lain, router kita harus tahu rutenya. Secara manual kami mengajarkan router (rute statis) pada Gambar 3.4 dan Gambar 3.5\.

![https://404store.com/2020/03/23/Figure3.4StaticroutingconfigurationofR1.png](https://cdn.steemitimages.com/DQma48AnD65qKk5T36un2swALrF3BLugnEEe5GcBzfpRmpf/Figure%203.4%20Static%20routing%20configuration%20of%20R1.png)

Gambar 3.4 Konfigurasi routing statis R1



![https://404store.com/2020/03/23/Figure3.5StaticroutingconfigurationofR2.png](https://cdn.steemitimages.com/DQmSLn9YBo4zP5KM5a8c46EA3EAmPFzTCgkWnBLzzfBJvjR/Figure%203.5%20Static%20routing%20configuration%20of%20R2.png)

Gambar 3.5 Konfigurasi routing statis R2



Menghubungkan R1 dan R2 membutuhkan kami LAN lain, dengan kata lain koneksi R1 dan R2 ada di LAN 192.168.0.0/24\. Pada Gambar 3.4 kami ingin memberi tahu R1 bahwa untuk pergi ke jaringan 192.168.1.0/24 adalah melalui R2\. Jadi perintahnya adalah ip route add 192.168.1.0/24 via 192.168.0.1\. n Gambar 3.4 kami ingin memberi tahu R2 bahwa untuk pergi ke jaringan 192.168.7.0/24 dan 192.168.8.0/24 adalah melalui R2\. Jadi 2 perintah terlibat karena kami ingin mendefinisikan untuk 2 jaringan, adalah ip route add 192.168.7.0/24 via 192.168.0.2 dan ip route add 192.168.8.0/24 via 192.168.0.2\. Pengaturan hanya satu dari router tidak akan melakukan, karena pada kenyataannya kami bertukar informasi 2 cara. Kami dapat mengirim pesan ke pihak lain, tetapi pihak lain tidak akan tahu ke mana harus pergi untuk membalas pesan tersebut.

![https://404store.com/2020/03/24/Figure3.6GIFImagetoactivatestaticrouteconfiguration.gif](https://cdn.steemitimages.com/DQmaLE4f55bjCPGZ5dD5ZAytuy8pvB9pAwBtA4wTuJ3w9YV/Figure%203.6%20GIF%20Image%20to%20activate%20static%20route%20configuration.gif)

Gambar 3.6 GIF Gambar untuk mengaktifkan konfigurasi rute statis



![https://404store.com/2020/03/24/Figure3.7GIFimageintraceroutingfromn1ton10](https://cdn.steemitimages.com/DQmf6uBtos5awW7hT5XDScRZfShWjUh7NDa1XDkqy29YQar/Figure%203.7%20GIF%20image%20in%20trace%20routing%20from%20n1%20to%20n10%20and%20n11%20to%20n6%20optimize.gif) kampanye

Gambar 3.7 Gambar GIF dalam penelusuran jejak dari n1 ke n10 dan n11 ke n6



Pada Gambar 3.6 adalah gambar GIF untuk mengatur rute statis pada router di Core-Network. Akhirnya pada Gambar 3.7 kami memeriksa apakah jaringan terhubung menggunakan rute jejak. Dari n1 ke n10 kita melihat bahwa ia akan melewati router pertama pada gateway 192.168.7.1, kemudian R1 mengarahkannya ke R2 pada gateway 192.168.0.1, yang pada akhirnya mencapai 192.168.1.20\. Selanjutnya kami mencoba dari n11 ke n6, kami melihat bahwa ia akan melewati router pertama pada gateway 192.168.1.1, kemudian R2 mengarahkannya ke R1 pada gateway 192.168.0.2, yang pada akhirnya mencapai 192.168.8.21\.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/core-network-static-route/7acbe03b5e72cf511159979df966848051f79257" frameborder="0" allowfullscreen=""></iframe></div>

### 3.3 Routing Dinamis

Bayangkan berapa banyak rute statis yang harus Anda konfigurasi pada skala jaringan seperti Internet. Masih akan lebih baik jika Internet adalah ukuran tetap tetapi dalam kenyataannya tumbuh lebih besar setiap detik, di atas itu konfigurasi dapat berubah setiap waktu. Rute statis tidak efisien untuk diterapkan, alih-alih mengapa tidak membiarkan router mencari rute sendiri? Bersama kami hanya mengajari mereka metode bagaimana menemukan rute. Sebagai tajuk bagian, yaitu rute dinamis yang merupakan rute pembaruan otomatis / otomatis berdasarkan metode yang ditentukan. Kami hanya akan membahas cara mengonfigurasi perutean dinamis informasi protokol (RIP) router (bahkan teori di baliknya), karena lebih jauh adalah silabus.

![https://404store.com/2020/03/23/Figure3.8RIPconfigurationonR1.png](https://cdn.steemitimages.com/DQmZ4faL8nhZ4NqafjC3jEjKbmK2hkNggvjHh5XRGNzr5a9/Figure%203.8%20RIP%20configuration%20on%20R1.png)

Gambar 3.8 Konfigurasi RIP di R1



![https://404store.com/2020/03/23/Figure3.9RIPconfigurationonR2.png](https://cdn.steemitimages.com/DQmWBGY1jF74jXEX57VQRBSmhexNFtScp2QPCa69egnXHSR/Figure%203.9%20RIP%20configuration%20on%20R2.png)

Gambar 3.9 Konfigurasi RIP pada R2



Pada Gambar 3.8 adalah konfigurasi RIP R1 di mana kami menambahkan jaringan 192.168.7.0/24, 192.168.8.0/24, 192.168.0.0/24, dan pada Gambar 3.9 adalah konfigurasi RIP R2 di mana kami menambahkan jaringan 192.168.1.0/24, 192.168.0.0/24\. Pada dasarnya kami memberikan informasi jaringan yang terhubung langsung ke router pada konfigurasi RIP. Jika saya benar, menggunakan RIP akan membuat router saling bertukar informasi dengan jaringan mana yang dilampirkan padanya. Jika kita ingin menambahkan jaringan lain maka kita hanya perlu menambahkan ID jaringan, tidak seperti routing statis yang harus kita tentukan secara manual gateway. Tanpa ragu bahwa jaringan akan terhubung seperti pada Gambar 3.10\.

![https://404store.com/2020/03/24/Figure3.10GIFimageoftraceroutingoptimize.gif](https://cdn.steemitimages.com/DQmSgBQuJDPtuaquhoafUHf5Nzfx4mvU7pqb56GozFmFaDW/Figure%203.10%20GIF%20image%20of%20trace%20routing.gif)

Gambar 3.10 Gambar GIF dari rute penelusuran



Cara membuka konfigurasi RIP pada Core-Network ada pada Gambar 3.11\. Terakhir, pada bagian ini, ini mungkin RIPv1 (saya belum memeriksa) dan jika itu tidak akan mendukung jaringan tanpa kelas (selain / 8, / 16, / 24), jadi coba RIPv2 atau protokol routing dinamis lainnya. < / p>

![https://404store.com/2020/03/24/Figure3.11GIFimageofconfiguringRIPonCore-Networkoptimize. gif ](https://cdn.steemitimages.com/DQmVWNfdtSyQJShvD6A2uidGCETVDwVYBnNjt85aRCNxm2r/Figure%203.11%20GIF%20image%20of%20configuring%20RIP%20on%20Core-Network.gif)

Gambar 3.11 Gambar GIF untuk mengkonfigurasi RIP di Core-Network



<div class="video-container"><iframe src="https://lbry.tv/$/embed/core-network-dynamic-route-rip/a2da18311861069d08ce39bb6e09f415a6c44406" frameborder="0" allowfullscreen=""></iframe></div>

## 4\. Fitur Umum di Internet

### 4.1 Protokol Konfigurasi Host Dinamis (DHCP)

Layanan DHCP memungkinkan konfigurasi IP otomatis pada klien. Klien hanya bertanya di sekitar LAN apakah server dapat memberikan identitas kepada klien. Seperti pada gambar berikut server dapat memberikan alamat IP, DNS, dan gateway default, yang tergantung pada konfigurasi server dan klien. Berikut adalah contoh contoh DHCP pada Core-Network.

![https://404store.com/2020/03/24/Figure4.1DisablingmanualIPandactivateDHCP.png](https://cdn.steemitimages.com/DQmNkkydbSVMEW4tghC56diu8WdUgs1X5TdxtUZhnVkeUxJ/Figure%204.1%20Disabling%20manual%20IP%20and%20activate%20DHCP.png)

Gambar 4.1 Menonaktifkan IP manual dan mengaktifkan DHCP



![https://404store.com/2020/03/24/Figure4.2DHCPserverconfiguration.png](https://cdn.steemitimages.com/DQmep5eG5xN4bigKifti6hLJsZ6aNeowkUXR61dpQY1m7Da/Figure%204.2%20DHCP%20server%20configuration.png)

Gambar 4.2 Konfigurasi server DHCP



![https://404store.com/2020/03/24/Figure4.3Clientreceivesconfiguration.png](https://cdn.steemitimages.com/DQmZXKwKehYA5xY2Zx5VWKcs6ChWVkRcZRJ9tBY3wDDAkqN/Figure%204.3%20Client%20receives%20configuration.png)

Gambar 4.3 Klien menerima konfigurasi



Pada Gambar 4.1 kami mengaktifkan DHCP dan menonaktifkan penetapan IP manual pada semua klien. Pada Gambar 4.2 kami mengonfigurasi server DHCP dengan kumpulan alamat IP dari 192.168.0.127 - 192.168.0.254 dan server DNS itu sendiri, router opsi setara dengan gateway default, dan pada Gambar 4.3 adalah konfigurasi yang diperoleh pada klien. Pada PC sebenarnya sebagian besar konfigurasi adalah DHCP sebagai default seperti pada Gambar 4.4\.

![https://404store.com/2020/03/24/Figure4.4DefaultDHCPsettingforNetworkManager.png](https://cdn.steemitimages.com/DQmW2jYcHKz5Mx3G7wUvgsWFvV6DEGy7N7Hk5WSo1KCYEAc/Figure%204.4%20Default%20DHCP%20setting%20for%20Network%20Manager.png)

Gambar 4.4 Pengaturan DHCP default untuk Network Manager



<div class="video-container"><iframe src="https://lbry.tv/$/embed/core-network-dhcp/77f5f6a0d38e04a68745135730ddf6c1f0e46724" frameborder="0" allowfullscreen=""></iframe></div>

### 4.2 Layanan Nama Domain (DNS)

Server DNS dapat berisi daftar nama domain dari alamat. Misalnya saya memiliki server web pada 192.168.100.253, tanpa DNS saya harus mengetikkan http://192.168.100.253 untuk mengakses halaman web melalui browser saya. Bagi saya itu terlalu sulit untuk diingat, alih-alih saya akan memberikan server saya nama domain atau mendaftarkan nama domain ke server saya. Katakanlah saya ingin memberikan www.myfakegoogle.com kepada 192.168.100.253\. Setiap kali saya menulis www.myfakegoogle.com akan sesuai dengan 192.168.100.253\. DNS menerjemahkan alamat IP ke nama domain dan sebaliknya.

![https://404store.com/2020/03/24/Figure4.5Digthedomainname.png](https://cdn.steemitimages.com/DQmXMqg8ktTEpQqKKHZEFxb7zDj2emRXi27ksLpM3oTRGsM/Figure%204.5%20Dig%20the%20domain%20name.png)

Gambar 4.5 Gali nama domain



Saya mencoba mensimulasikan DNS pada Core-Network tetapi tidak dapat menemukan fitur. Jadi saya harus secara manual menentukan server DNS pada simulator dengan menginstal dan menghubungkan server DNS nyata di mesin saya. Saya menggunakan bind9, saya tidak terbiasa dengan konfigurasi, jadi saya lewati penjelasan di sini dan menunjukkan bahwa saya telah mengkonfigurasi 192.168.100.253 seperti www.myfakegoogle.com pada Gambar 4.5\.

![https://404store.com/2020/03/24/Figure4.6TryDNSonCore-Network.png ](https://cdn.steemitimages.com/DQmWJbSHiF5AFtvr7jaqKUBN3oKPwSPJrmw6GSmA4i2ZCeZ/Figure%204.6%20Try%20DNS%20on%20Core-Network.png)

Gambar 4.6 Coba DNS di Core-Network



Saya membuat server DNS pada Core-Network menggunakan fitur yang ditentukan pengguna (menghubungkan Bind9 ke sana) dan berhasil melakukan ping menggunakan nama domain pada Gambar 4.6\. Jika Anda melihat lebih dekat, itu seperti gambar versi mini Internet yang mempertimbangkan PC ingin terhubung ke www.google.com (ini adalah versi mini Internet saya). Jika kami memasang browser web di www.myfakegoogle.com, maka kami mengaksesnya di browser. Untuk memeriksa nama domain di jaringan nyata gunakan dig atau nslookup.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/emulate-dns-server-on-core-network/3aa7c140c0a26d74b6aa9298abcb786f47f21b21" frameborder="0" allowfullscreen=""></iframe></div>

### 4.3 Web Server

Halaman web menggunakan Hyper Text Transfer Protocol untuk menampilkan halaman di browser. Sejujurnya itu sangat luas dan satu-satunya hal yang dapat kami tunjukkan di sini adalah contoh halaman web yang digunakan untuk mengembangkan konten ini. Menginstal server web pada mesin memungkinkan pertukaran informasi menggunakan browser web. Browser web gratis adalah Apache2, untuk pemula dapat menggunakan bundel seperti XAMPP atau LAMPP. Terakhir pada bagian 4, jika kita menggabungkan semuanya sampai sekarang, kita dapat membuat versi kecil dari Internet.

![https://404store.com/2020/03/24/Figure4.7Apache2.png](https://cdn.steemitimages.com/DQmPjEZPnPoWYbo5qVdzpzVCKJx21HCUHetAn6ccjqpDWeb/Figure%204.7%20Apache2.png)

Gambar 4.7 Apache2



![https://404store.com/2020/03/24/Figure4.8ElearningMoodle.png](https://cdn.steemitimages.com/DQmVN7XfCd7eoNiG1VWBXzNC8FcfQreoRToWeJjbp37zZF8/Figure%204.8%20Elearning%20Moodle.png)

Gambar 4.8 Elearning Moodle



## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/simple-introduction-to-computer-network-and-the-internet-xwpmdk?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/simple-introduction-to-computer-network-and-the-internet-xwpmdk?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/cryptocurrency/2020/03/24/simple-introduction-to-computer-network](https://0fajarpurnama0.github.io/cryptocurrency/2020/03/24/simple-introduction-to-computer-network)
*   [https://steemit.com/computer/@fajar.purnama/simple-introduction-to-computer-network-and-the-internet?r=fajar.purnama](https://steemit.com/computer/@fajar.purnama/simple-introduction-to-computer-network-and-the-internet?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/simple-introduction-to-computer-network.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/simple-introduction-to-computer-network.html)
*   [https://medium.com/@0fajarpurnama0/simple-introduction-to-computer-network-and-the-internet-f97001834276](https://medium.com/@0fajarpurnama0/simple-introduction-to-computer-network-and-the-internet-f97001834276)
*   [https://0darkking0.blogspot.com/2020/03/simple-introduction-to-computer-network-and-the-internet.html](https://0darkking0.blogspot.com/2020/03/simple-introduction-to-computer-network-and-the-internet.html)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-introduction-to-computer-network-and-the-internet](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-introduction-to-computer-network-and-the-internet)
*   [http://www.teiii.cn/simple-introduction-to-computer-network-and-the-internet](http://www.teiii.cn/simple-introduction-to-computer-network-and-the-internet)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/18-simple-introduction-to-computer-network-and-the-internet](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/18-simple-introduction-to-computer-network-and-the-internet)
*   [http://0fajarpurnama0.weebly.com/blog/simple-introduction-to-computer-network-and-the-internet](http://0fajarpurnama0.weebly.com/blog/simple-introduction-to-computer-network-and-the-internet)
*   [https://0fajarpurnama0.tumblr.com/post/613409279480856576/simple-introduction-to-computer-network-and-the](https://0fajarpurnama0.tumblr.com/post/613409279480856576/simple-introduction-to-computer-network-and-the)