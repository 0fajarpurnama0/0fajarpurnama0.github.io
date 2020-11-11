---
layout: post
title: Mengamati Perfoma Bermain DOTA dengan OPNET Sistem LAN Sederhana
category: bachelor
tags: [jaringan telekomunikasi, LAN, OPNET, simulasi, DOTA, penulisan ilmiah, tugas kuliah]
featuredimage: https://images.hive.blog/DQmWbgzjypjQaDJp6F7KgWPtJasVXNtQTANoFbxzSicUCeH/Gambar%203.3%20Permainan%20DOTA.png
description: Tugas mata kuliah jaringan telekomunikasi tentang simulasi bermain DOTA 10 pemain LAN di OPNET berdasarkan datarate 1 pemain dari Wireshark.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/10/mengamati-performa-bermain-dota-dengan-opnet-sistem-lan-sederhana
---
## Catatan

Tulisan ini merupakan tugas dari mata kuliah Jaringan Telekomunikasi S1 saya di Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana dimana di semester-semester akhir sering diberi tugas penulisan penelitian. Tugas ini tidak pernah dipublikasi dimanapun dan saya sebagai penulis dan pemegang hak cipta melisensi tulisan ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama saya sebagai penulis dan memberitahu bahwa versi asli dan terbuka ada disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

DOTA (Defense Of The Ancient) merupakan salah satu game multiplayer dengan sistem LAN (local area network). Permainan maksimal 12 orang dengan maksimal 10 pemain dan 2 penonton. Contohnya, untuk bermain 10 player maka diperlukan 10 PC (Private Computer) yang terhubung secara LAN (local area network) (pada jaringan yang sama). Sekarang game ini sudah dapat dimainkan secara online. Setiap komputer yang teruhubung secara LAN (local area network) akan mengirimkan trafik (aliran data) pada jaringan tersebut. Besarnya trafik tergantung pada permainan DOTA (Defense Of The Ancient) pada kasus ini. Belum banyak yang mengetahui bagaimana performa suatu jaringan bila dipakai bermain DOTA (Defense Of The Ancient) bersepuluh (10 PC). Pada percobaan ini akan dicari trafik yang dihasilkan 1 PC (private computer) untuk bermain DOTA. Setelah itu disimulasikan pada OPNET jika 10 PC (private computer) digunakan untuk bermain bersama.

### 1.2 Rumusan Masalah

Bagaimana performa suatu jaringan bila dipakai bermain DOTA (Defense Of The Ancient) bersepuluh (10 PC)?

### 1.3 Tujuan

Untuk mengamati performa bermain DOTA (Defense Of The Ancient) dengan OPNET sistem LAN (local area network) sederhana.

### 1.4 Manfaat

Mengetahui performa bermain DOTA (Defense Of The Ancient) dengan OPNET sistem LAN (local area network) sederhana dan dapat mempertimbangkan teknologi yang harus digunakan.

### 1.5 Ruang Lingkup dan Batas

1.  Tidak menggunakan sistem client – server.
2.  Hanya mengamati.
3.  Performa yang diamati maksimal selama 2 menit (karena versi OPNET Academic Edition).
4.  Hanya sebatas LAN (local area network).

## BAB 2 Tinjauan Pustaka

### 2.1 Wireshark

Wireshark merupakan software network protocol analyzer yang terkenal di dunia. Bisa juga menangkap trafik pada suatu jaringan computer. Software ini de facto (dan sering dikatakan de jure) standar dari berbagai industry dan institusi pendidikan. Wireshark dikembangkan oleh banyak ahli jaringan di seluruh dunia dan merupakan proyek yang berlanjut mulai 1998 (Combs, 2013).

### 2.2 End – End Delay

End – end delay merupakan waktu yang dibutuhkan untuk suatu data, bit, byte, paket dari transmitter mencapai receiver. Delay dihitung dalam waktu biasanya detik. Pada suatu jaringan dikatakan delay suatu jaringan adalah delay rata – rata. Delay pada suatu jaringan dihitung dengan konsep waktu rata – rata yang dibutuhkan untuk suatu paket dari transmitter mencapai receiver. Delay = Time/Packet (Gómez, 2005).

### 2.2 Collision

Collision pada ethernet biasanya berdasarkan CSMA/CD (Carrier Sense Multiple Access/Collision Detection). CSMA (Carrier Sense Multiple Access) adalah kemampuan suatu host untuk mendeteksi apakah suatu kanal kosong atau dialiri trafik. Bila kosong host akan melanjutkan pengiriman data, dan sebaliknya bila ada trafik maka host akan menunggu sampai mendeteksi kosong baru mengirim. Namun tidak berlaku bila ada 2 host sama – sama mendeteksi kanal lagi kosong. Bila ini terjadi keduanya akan tetap mengirimkan data bersamaan sehingga terjadi collision. Oleh karena itu diperlukan Collision Detection. Selain dapat menginformasikan host bahwa terjadi collision juga terdapat Back-off algorithm dimana host akan menunggu berdasarkan berbagai perhitungan sebelum mengirim ulang data (Peterson, 2003).

## BAB 3 Metode Percobaan

### 3.1 Tempat dan Waktu

Percobaan dilakukan di rumah penulis, di Jln. Kusuma Bangsa 6, No. 7x, Denpasar, Bali. Waktu percobaan pada hari Minggu, 16 Maret 2013, pada jam 18:00 – 23:30.

### 3.2 Alat dan Bahan

Bahan adalah trafik yang dihasilkan suatu PC (Private Computer) saat bermain DOTA (Defense Of The Ancient) secara LAN (local area network). Pada OPNET menggunakan 10 Ethernet Station, 16 Port Ethernet Hub dan kabel ethernet 100 Base T. Berikut adalah daftar alat yang digunakan:

<table border="1"><caption>Tabel 3.1 Alat yang digunakan</caption>

<tbody>

<tr>

<th>NO</th>

<th>Alat</th>

<th>Spesifikasi</th>

</tr>

<tr>

<td>1</td>

<td>Laptop ACER</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache) Mobile Intel® Graphics Media Accelerator 4500MHD 1GB DDR2 128 WXGA Acer CrystalBriteTM LCD 250GB HDD Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller Atheros Communications Inc. AR928X Wireless Network Adapter Operating System Linux Backtrack 5 R3</td>

</tr>

<tr>

<td>2</td>

<td>PC</td>

<td>Intel® Pentium® core-duo processor 1GB DDR2 256 VGA AWUS036NHA 802.11b/g/n Long-Range USB Adapter Alcor Micro, Corp. USB 2.0 PC Camera Operating System Windows 7 Ultimate</td>

</tr>

<tr>

<td>3</td>

<td>Software</td>

<td>OPNET IT GURU Academic Edition Warcraft III Frozen Throne 1.64, Map DOTA 6.77 Wireshark 1.8.3</td>

</tr>

</tbody>

</table>

### 3.3 Langkah Percobaan

#### 3.3.1 Mencari trafik yang dihasilkan oleh PC saat bermain DOTA secara LAN

##### 1\. Koneksikan 2 komputer secara LAN sebagai berikut:

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/e560624a-4469-4947-9a22-f6920a378094-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.1 Koneksi Jaringan



##### 2\. Gunakan wireshark pada salah satu PC (Private Computer) untuk mencatat trafik yang dihasilkan.

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3c7abf57-2d0f-4e89-95c5-aabd36768f64-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.2 Menangkap paket dengan Wireshark



##### 3\. Lakukan 1x permainan DOTA (Defense Of The Ancient) hingga selesai.

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/f19f2390-1681-42b4-9433-44d19468c8d4-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.3 Permainan DOTA



#### 3.3.1 Mensimulasikan dengan OPNET performa permainan DOTA 10 player

##### 1\. Topologi jaringan sebagai berikut (jarak dalam meter):

##### 

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3c8679bc-737d-455d-b89b-3dd05a080c28-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.4 Topologi jaringan



##### 2\. Untuk memilih performa yang diamati pilih individual statistic pada simulation. Lalu berikut pada percobaan performa yang diamati:

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/b52e4423-4dcc-48e1-b135-ff2f8bb3e7fa-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.5 Performa yang diamati



##### 3\. Pada Simulation pilih Configure Discreet Event Simulation, lalu simulasi selama 2 menit:

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8d16f804-6ae1-403d-a760-2733246f35d5-original.png?width=1920&height=1080&fit=bounds)

Gambar 3.6 Pengaturan simulasi



## BAB 4 Pembahasan

### 4.1 Trafik yang dihasilkan 1 PC bermain DOTA

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/42e5b91e-fa7c-4044-81b9-71c4e373dbf9-original.png?width=1920&height=1080&fit=bounds)

Gambar 4.1 Grafik yang dihasilkan pada wireshark



Dengan menggunakan pilihan pada menu Statistic, IO Graph. Dihasilkan grafik sebagai berikut dimana sumbu horisontal adalah menit, dan sumbu vertikal adalah byte/detik. Grafik ini menunjukan bahwa trafik yang dihasilkan pada 1 PC (Private Computer) adalah 100000 byte/detik. Sedangkan garis yang nilainya paling tinggi (mendekati 200000 byte/detik) merupakan trafik keseluruhan. (sent dan received).

### 4.2 Hasil simulasi pada OPNET

Maka pada simulasi masing – masing ethernet station diatur agar menghasilkan trafik 100000 byte/detik. Jaringan mulai hidup pada detik ke 5, jaringan hidup selama 120 detik (ON Time), Tidak pernah mati (0 OFF Time). Agar lebih nyata maka pengiriman paket setiap 0.01 detik (bukan per detik) dengan besar paket 1000 byte (1000 byte/ 0.01 detik = 100000 byte / 1 detik). Pengaturan sebagai berikut (dengan klik kanan salah satu PC, pilih similar nodes, klik kanan lagi, lalu pilih attributes):

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/55e1d4d4-2aa5-4445-94e1-912545b2c5a3-original.png?width=1920&height=1080&fit=bounds)

Gambar 4.2 Pengaturan masing – masing ethernet station



Maka hasilnya sebagai berikut:

![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/f31d0b4e-5d3e-44be-a6c1-688d3d46bb90-original.png?width=1920&height=1080&fit=bounds)

Gambar 4.3 Grafik delay, traffic sent and receive keseluruhan



![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0b022e2e-bf8c-4af7-9a3e-9a793657bdf3-original.png?width=1920&height=1080&fit=bounds)

Gambar 4.4 Grafik collission count HUB dengan PC1



![](https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3285b9ae-c1c0-48f3-8c94-85f732f10199-original.png?width=1920&height=1080&fit=bounds)

Gambar 4.4 Grafik Traffic receive HUB dengan PC1



## BAB 5 Penutup

### 5.1 Simpulan

Trafik keseluruhan dan collision count menjadi 10x lebih besar. Collision count per PC adalah rata – rata 600, diamati pada HUB adalah 6000 (karena ada 10 PC). Trafik rata – rata sent dan receive per PC adalah 800000 byte/detik diamati secara keseluruhan dan pada HUB adalah 8000000 byte/detik (10x lebih besar).

### 5.2 Saran

Percobaan ini hanya sebatas simple LAN. Bisa dijadikan penelitian lebih lanjut dengan penerapkan sistem client – server, dengan konfigurasi jaringan berbeda, atau hal – hal lainnya.

## Daftar Pustaka

*   Combs, G. 2013\. [http://www.wireshark.org/about.html](http://www.wireshark.org/about.html), diakses tanggal 17 Desember 2013
*   Gómez, G. 2005\. End-to-End Quality of Service over Cellular Networks.
*   Chichester: John Wiley & Sons Ltd.
*   Peterson, L. 2003\. Computer Networks. San Francisco: Morgan Kaufmann Publishers

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-seder-xmdzron?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-seder-xmdzron?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/10/mengamati-performa-bermain-dota-dengan-opnet-sistem-lan-sederhana](https://0fajarpurnama0.github.io/bachelor/2020/11/10/mengamati-performa-bermain-dota-dengan-opnet-sistem-lan-sederhana)
*   [https://0fajarpurnama0.medium.com/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana-f679c693a430](https://0fajarpurnama0.medium.com/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana-f679c693a430)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/mengamati-performa-bermain-dota-dengan-opnet-sistem-lan-sederhana](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/mengamati-performa-bermain-dota-dengan-opnet-sistem-lan-sederhana)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/mengamati-perfoma-bermain-dota-dengan.html](https://0darkking0.blogspot.com/2020/11/mengamati-perfoma-bermain-dota-dengan.html)
*   [https://hive.blog/indonesian/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/95-mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/95-mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana)
*   [https://steemit.com/indonesian/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana](http://0fajarpurnama0.weebly.com/blog/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana)
*   [https://read.cash/@FajarPurnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana-11083fa9](https://read.cash/@FajarPurnama/mengamati-perfoma-bermain-dota-dengan-opnet-sistem-lan-sederhana-11083fa9)