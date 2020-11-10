---
layout: post
title: Pengaruh Pengaturan FPS, Resolusi dan Bitrate Terhadap Throughput Yang Dihasilkan pada Software Adobe Flash Media Live Encoder
category: bachelor
tags: [Adobe Flash Media Live Encoder, fps, bitrate, throughput, streaming, tugas mata kuliah, penulisan penelitian]
featuredimage: https://cdn.steemitimages.com/DQmacJ2xARikHibwGabBRTC8pg2Wcd468RcqXWkUHT2pQfs/Gambar%203.6%20Pengaturan%20streaming%20video%20pada%20Adobe%20Flash%20Media%20Live%20Encoder.png
description: Tugas mata kuliah penulisan penelitian mengenai abstrak, pendahuluan, kajian pustaka, metode penelitian, pembahasan, penutup, dan daftar pustaka.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/08/tugas-fps-bitrate-throughput-adobe-flash-media-live-encoder
---
## Catatan

Artikel ini merupakan tugas dari mata kuliah S1 saya mengenai penulisan penelitian dimana intinya diajar bahwa tulisan penelitian kebanyakan terdiri dari Abstrak, Pendahuluan, Tinjauan Pustaka, Metode Penelitian, Pembahasan, Penutup, dan Daftar Pustaka. Walaupun mata kuliah ini mengajarkan lebih detil mengenai isi masing-masing BAB, namun saat itu saya belum mampu menyerap detil itu seutuhnya di tugas ini.

## Abstrak

Secara logika pengaturan resolusi dan fps pada video streaming seharusnya berpengaruh terhadap besar throughput. Tetapi di software Adobe Flash Media Live Encoder ada pengaturan bitrate, inilah yang yang berpengaruh terhadap besar throughput. Resolusi dan fps (frame per second) kelihatan pengaruhnya terhadap bitrate. Penelitian ini adalah pembuktian bahwa pernyataan tersebut benar. Manfaat untuk kedepannya, selain mengetahui throughput yang dihasilkan dari berbagai macam pengaturan di software Adobe Flash Media Live Encoder, pengaturan yang sesuai akan didapatkan.

Penelitian ini menggunakan dua komputer yang terhubung pada jaringan yang sama. Komputer pertama melakukan video steaming melewati komputer kedua yang mengukur throughput yang dihasilkan komputer pertama. Software yang digunakan untuk mengukur throughput adalah Wireshark. Pengukuran throughput dilakukan pada variasi resolusi, fps (frame per second), dan bitrate. Lalu throughput rata – rata dari bervariasi resousi, fps, dan bitrate akan dibandingkan.

Dari hasil penelitian, terbukti bahwa throughput rata – rata yang dihasilkan sesuai dengan pengaturan bitrate. Tidak terlihat dampak dari pengaturan resolusi dan fps.

## 1 Pendahuluan

### 1.1 Latar Belakang

Kualitas video seperti besar pixel gambar dan fps (frame per second) mempengaruhi throughput. Semakin besar pixel gambar maka semakin besar frame data yang dikirimkan. Begitu juga halnya dengan fps. Telah dipasang web cam di Lab Komputer, jurusan Teknik Elektro, Universitas Udayana. Pemasangan web cam untuk memperlihatkan kegiatan lab melalui web. Secara nyata belum diketahui throughput yang dihasilkan dengan berbagai pengaturan fps (frame per second), resolusi dan bitrate. Pada penelitian ini akan diamati throughput yang dihasilkan dengan berbagai pengaturan fps (frame per second), resolusi, dan bitrate menggunakan software Wireshark.

### 1.2 Rumusan Masalah

Bagaimana throughput yang dihasilkan dengan berbagai variasi pengaturan fps (frame per second), resolusi, dan bitrate?

### 1.3 Tujuan Penelitian

Mengetahui pengaruh pengaturan FPS (frame per second), resolusi dan bitrate terhadap throughput yang dihasilkan pada software Adobe Flash Media Live Encoder.

### 1.4 Manfaat Penelitian

1.  Mengetahui throughput jaringan dengan berbagai pengaturan.
2.  Dapat memilih pengaturan yang sesuai dengan kualitas jaringan yang disediakan.
3.  Dapat mengoptimalisasi pemakaian streaming video di lab komputer, Teknik Elektro, Universitas Udayana.

### 1.5 Ruang Lingkup dan Batasan Masalah

1.  Menggunakan software adobe flash media live encoder di Windows 7.
2.  Analisa throughput menggunakan wireshark di Linux Backtrack 5 R3.
3.  Hanya mengukur throughput.
4.  Compressi menggunakan standar H.264.
5.  Menguji di lab computer, Teknik Elektro, Universitas Udayana, pada hari Selasa, pukul 12:30 WITA – 16:00 WITA, 18 Desember 2012, dan hari Kamis, pukul 13:00 WITA – 14:00 WITA, 20 Desember 2012.
6.  Media server adalah 103.29.196.233/live/elektro (streaming.unud.ac.id/live).

## 2 Kajian Pustaka

### 2.1 Throughput

Throughput merupakan besar data yang dikirimkan dibagi dengan waktu yang dibutuhkan untuk besar data sampai ke tujuan dalam komunikasi 1 arah. Throughput diukur dalam bit/second atau byte/second (Gómez, 2005).

Aplikasi seperti VOIP (voice over IP) dan video sensitif terhadap delay dan jitter. Delay merupakan waktu yang dibutuhkan suatu paket untuk terkirim dari asal sampai tujuan. Jitter adalah variasi delay. Aplikasi seperti ini memerlukan delay yang kecil (kira-kira 150 milisecond). Oleh karena itu throughput harus dijamin dari asal ke tujuan (Farrel, 2009).

### 2.2 RTP (Real-Time Transport Protocol)

RTP merupakan transport protocol untuk aplikasi yang berbasis real-time. Aplikasi yang berbasi real-time dapat berupa audio dan video conferencing, live video distribution, shared workspaces, remote medical diagnosis, telephony, command dan control systems, distributed interactive simulations, games, dan real-time monitoring.`

Dengan perkembangan LAN (Local Area Network) dan WAN (Wide Area Network) kecepatan tinggi maka memungkinkan untuk aplikasi berbasi real-time untuk dijalan di jaringan berbasis IP (Internet Protocol). Hal secara umum yang diperhatikan dalam applikasi berbasis real-time adalah timing (waktu yang tepat). Dimana timing penerimaan paket harus sesuai dengan timing pengiriman paket. Oleh karena itu delay dan throughput merupakan hal yang umum untuk mengukur kualitas (Stallings, 1998).



![Gambar 2.1 RTP header.jpg](https://cdn.steemitimages.com/DQmapBorxkQWHTtya8Nqh8Q8BjwhiR6q5a4hhoMc6iHJDSe/Gambar%202.1%20RTP%20header.jpg)

Gambar 2.1 RTP header (Stallings, 1998)


![Gambar 2.2 Traffic in Realtime protocol.jpg](https://cdn.steemitimages.com/DQmWt9TLyBJL9v6EctXzsPHSgx6uCYac4nFtEgVEav2EtHZ/Gambar%202.2%20Traffic%20in%20Realtime%20protocol.jpg)

Gambar 2.2 Traffic in Realtime protocol (Stallings, 1998)



### 2.3 Adobe Flash Media Live Encoder

Merupakan software media encoder yang dapat menangkap audio dan video serta stream video dan audio ke Adobe Media Server atau Flash Video Streaming Service (FVSS) secara real-time. Software ini mampu broadcast kegiatan secara langsung seperti olahraga, konser dan lain-lain. (Adobe, 2013).

### 2.3 Wireshark

Wireshark merupakan software network protocol analyzer yang terkenal di dunia. Bisa juga menangkap trafik pada suatu jaringan computer. Software ini de facto (dan sering dikatakan de jure) standar dari berbagai industry dan institusi pendidikan. Wireshark dikembangkan oleh banyak ahli jaringan di seluruh dunia dan merupakan proyek yang berlanjut mulai 1998 (Combs, 2013).

## 3 Metode Penelitian

### 3.1 Alat yang digunakan

Berikut adalah daftar alat yang digunakan:

<table border="">Tabel 3.1 Alat yang digunakan

<thead>

<tr>

<th>NO</th>

<th>Alat</th>

<th>Spesifikasi</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>Laptop ACER</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Mobile Intel® Graphics Media Accelerator 4500MHD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>1GB DDR2</td>

</tr>

<tr>

<td></td>

<td></td>

<td>128 WXGA Acer CrystalBriteTM LCD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>250GB HDD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Atheros Communications Inc. AR928X Wireless Network Adapter</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Operating System Linux Backtrack 5 R3</td>

</tr>

<tr>

<td>2</td>

<td>PC</td>

<td>Intel® Pentium® core-duo processor</td>

</tr>

<tr>

<td></td>

<td></td>

<td>1GB DDR2</td>

</tr>

<tr>

<td></td>

<td></td>

<td>256 VGA</td>

</tr>

<tr>

<td></td>

<td></td>

<td>AWUS036NHA 802.11b/g/n Long-Range USB Adapter</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Alcor Micro, Corp. USB 2.0 PC Camera</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Operating System Windows 7 Ultimate</td>

</tr>

<tr>

<td>3</td>

<td>Software</td>

<td>Adobe Flash Media Live Encoder 3.2</td>

</tr>

</tbody>

</table>

### 3.2 Cara Penelitian

Pertama, alat didesain sebagai berikut:



![Gambar 3.1 Desain penelitian.PNG](https://cdn.steemitimages.com/DQmXAdwEm46Tpgaar6JeP4q6mPqCCbmi43ZRKDz3RFhJRxi/Gambar%203.1%20Desain%20penelitian.PNG)

Gambar 3.1 Desain penelitian



Kedua, memulai manangkapan paket dengan software Wireshark pada laptop. Paket yang ditangkap adalah pada wireless LAN.



![Gambar 3.2 Pemilihan interface wlan0 untuk paket yang ditangkap.png](https://cdn.steemitimages.com/DQmSdZUnDJw9oCs1jCH5vkSVbB7sBrWmGLSGW6yxypYsJ9u/Gambar%203.2%20Pemilihan%20interface%20wlan0%20untuk%20paket%20yang%20ditangkap.png)

Gambar 3.2 Pemilihan interface wlan0 untuk paket yang ditangkap



Penangkapan paket di saring agar hanya menangkap paket yang dikirim oleh video streaming, yaitu 192.168.0.2.



![Gambar 3.3 Memasukan perintah penyaringan ip.src == 192.168.0.2.png](https://cdn.steemitimages.com/DQmdd2xuNrNwq6erADfXE9q6tRd9XChh5ZEvDiyWGJVWi8U/Gambar%203.3%20Memasukan%20perintah%20penyaringan%20ip.src%20==%20192.168.0.2.png)

Gambar 3.3 Memasukan perintah penyaringan ip.src == 192.168.0.2



Untuk melihat throughput maka dipilih menu statistics lalu dipilih IO graph.



![Gambar 3.4 Pemilihan IO Graph.png](https://cdn.steemitimages.com/DQmPBWTvdiZzYD4DDTWwnc4QKpTV3UT8Po1DGQpb6YKbBgg/Gambar%203.4%20Pemilihan%20IO%20Graph.png)

Gambar 3.4 Pemilihan IO Graph



Sama seperti penangkapan paket, disaring agar hanya terlihat bit yang lewat dari 192.168.0.2.



![Gambar 3.5 Grafik throughput dari 192.168.0.2.png](https://cdn.steemitimages.com/DQmXZEAmAZSzDiXxiQsg4MsxQX8RFvRWX8XsA7EPgbu4kS2/Gambar%203.5%20Grafik%20throughput%20dari%20192.168.0.2.png)

Gambar 3.5 Grafik throughput dari 192.168.0.2



Ketiga, mulai streaming video dengan software Adobe Flash Media Live Encoder dengan pengaturan disesuaikan pada rumusan masalah.



![Gambar 3.6 Pengaturan streaming video pada Adobe Flash Media Live Encoder.png](https://cdn.steemitimages.com/DQmacJ2xARikHibwGabBRTC8pg2Wcd468RcqXWkUHT2pQfs/Gambar%203.6%20Pengaturan%20streaming%20video%20pada%20Adobe%20Flash%20Media%20Live%20Encoder.png)

Gambar 3.6 Pengaturan streaming video pada Adobe Flash Media Live Encoder



Keempat, setelah 2 menit streaming dihentikan. Keenam, penangkapan paket pada Wireshark dihentikan dan hasilnya di simpan. Ketujuh, kembali ke langkah kedua dengan langkah ketiga pengaturan yang berbeda (melanjutkan dari rumusan masalah). Jika semua pengaturan telah dicoba maka pencarian data selesai.

### 3.3 Analisis Data

Dengan menggunakan software Wireshark maka dapat dilihat throughput dalam bentuk grafik. Sumbu horizontal menunjukan waktu dalam detik sedangkan sumbu vertikal menunjukan data dalam bit.



![Gambar 3.7 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmcYPnzDbx1vn8YRSQJxpMpMgGqdxtSfh21tzPaeCzRUed/Gambar%203.7%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20100Kbps.png)

Gambar 3.7 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 100Kbps


![Gambar 3.8 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 350Kbps.png](https://cdn.steemitimages.com/DQme3MEmKq7JeZPaFb9qdUNxerhUbCeP1bNWWXhn8zP3Zuy/Gambar%203.8%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20350Kbps.png)

Gambar 3.8 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 350Kbps


![Gambar 3.9 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 500Kbps.png](https://cdn.steemitimages.com/DQmWVSBPKhRdzbdam3n7yMT2YvTzUzZGGZpikzT3ijSH6C3/Gambar%203.9%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20500Kbps.png)

Gambar 3.9 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 500Kbps


![Gambar 3.10 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmYnZ17aiBJRWRTgrZ8NgMy6EEwDUmbRL8xmUVXCnNTyLN/Gambar%203.10%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20100Kbps.png)

Gambar 3.10 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 100Kbps


![Gambar 3.11 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 350Kbps.png](https://cdn.steemitimages.com/DQmYzid1XK1zAY7BHoazPqD8j8KvpJ4Qb7EkP7a7Qm1ABqn/Gambar%203.11%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20350Kbps.png)

Gambar 3.11 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 350Kbps


![Gambar 3.12 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 500Kbps.png](https://cdn.steemitimages.com/DQmTMDvVo3zjm6AE21YHM65eBKTy3vrWtBbjtu2imKPWN2o/Gambar%203.12%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20500Kbps.png)

Gambar 3.12 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 500Kbps


![Gambar 3.13 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmPHBWt7XW27zQFfHrVyMozsp7XmpLKRG6uMFkU7ou32Ef/Gambar%203.13%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20100Kbps.png)

Gambar 3.13 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 100Kbps


![Gambar 3.14 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 350Kbps.png](https://cdn.steemitimages.com/DQmRbpWhpxZD5C4ACcZy3joFByuBEDLGUMZrBoCevB3mePP/Gambar%203.14%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20350Kbps.png)

Gambar 3.14 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 350Kbps


![Gambar 3.15 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 500Kbps.png](https://cdn.steemitimages.com/DQmScT8GwkbeMCCFpw6U4SVmP1r8Gvpa8GY76LDqz52oSZG/Gambar%203.15%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20500Kbps.png)

Gambar 3.15 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 500Kbps


![Gambar 3.16 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmcd5v8Eb3u31wePaWgQMJBicVNoWwL2s5MFomiwEdUF7X/Gambar%203.16%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20100Kbps.png)

Gambar 3.16 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 100Kbps


![Gambar 3.17 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 350Kbps.png](https://cdn.steemitimages.com/DQmaoS3VLFcVkVyMNzUXcdoicigcxNttqt1djvQ9xKw8BsW/Gambar%203.17%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20350Kbps.png)

Gambar 3.17 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 350Kbps


![Gambar 3.18 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 500Kbps.png](https://cdn.steemitimages.com/DQmep8oNcp1YpB8ywUc4oAcAMzEbTAMdvM7tMhra1AoS98f/Gambar%203.18%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20500Kbps.png)

Gambar 3.18 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 500Kbps


![Gambar 3.19 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmbz4Z5RRbQUguGqejMA7XjChnxg55NGtqL5ZJvWhJBiW8/Gambar%203.19%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%205%20bitrate%20100Kbps.png)

Gambar 3.19 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 100Kbps


![Gambar 3.20 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 350Kbps.png](https://cdn.steemitimages.com/DQmWDSYCPKZsGYxrN5kzNwB7q6jzJ8aPbinuRQY6bm4DXrd/Gambar%203.20%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%205%20bitrate%20350Kbps.png)

Gambar 3.20 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 350Kbps


![Gambar 3.21 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 100Kbps.png](https://cdn.steemitimages.com/DQmPFM3TyLsfWg3c9eGeFonKCx69bgNMWrcRMCzUukdWQEH/Gambar%203.21%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%2010%20bitrate%20100Kbps.png)

Gambar 3.21 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 100Kbps


![Gambar 3.22 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 500Kbps.png](https://cdn.steemitimages.com/DQmU8CW3PeYHwoRexeP3M2FhdeCjYjVrSYTr4PQsrgH9n7E/Gambar%203.22%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%2010%20bitrate%20500Kbps.png)

Gambar 3.22 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 500Kbps



## 4 Hasil dan Pembahasan

### 4.1 Pembuktian

Pembuktian bahwa throughput rata – rata sama dengan pengaturan bitrate dapat dilihat tabel berikut:

<table border="">Tabel 4.1 Perbandingan antara pengaturan dan throughput rata - rata

<thead>

<tr>

<th>NO</th>

<th>Resolusi</th>

<th>FPS</th>

<th>Bitrate</th>

<th>Througput rata - rata</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>160x120</td>

<td>1</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>2</td>

<td>160x120</td>

<td>5</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>3</td>

<td>160x120</td>

<td>10</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>4</td>

<td>160x120</td>

<td>1</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>5</td>

<td>160x120</td>

<td>5</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>6</td>

<td>160x120</td>

<td>10</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>7</td>

<td>160x120</td>

<td>1</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>8</td>

<td>160x120</td>

<td>5</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>9</td>

<td>160x120</td>

<td>10</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>10</td>

<td>320x240</td>

<td>1</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>11</td>

<td>320x240</td>

<td>5</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>12</td>

<td>320x240</td>

<td>10</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>13</td>

<td>320x240</td>

<td>1</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>14</td>

<td>320x240</td>

<td>5</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>15</td>

<td>320x240</td>

<td>10</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>16</td>

<td>320x240</td>

<td>1</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>17</td>

<td>320x240</td>

<td>5</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>18</td>

<td>320x240</td>

<td>10</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

</tbody>

</table>

## 5 Penutup

### 5.1 Simpulan

Dari hasil percobaan, terbukti bahwa throughput rata – rata sepenuhnya dipengaruhi oleh pengaturan bitrate. Walaupun pengaturan resolusi 160x120, 320x240 dan fps 1, 5, 10, jika bitrate diatur 100Kbps maka throughput rata – rata 100Kbps, pengaturan bitrate 350Kbps maka throughput rata – rata 350Kbps, pengaturan bitrate 500Kbps maka throughput rata – rata 500Kbps dan seterusnya.

### 5.2 Saran

Walaupun throughput rata – rata sama dengan pengaturan bitrate grafik yang dihasilkan bervariasi dengan pengaturan resolusi dan fps yang berbeda – beda. Dari penelitian ini, resolusi dan fps sesungguhnya tidak diamati. Delay, jitter, atau parameter selain throughput tidak diteliti di artikel ini. Hal – hal tersebut dapat dijadikan sebagai penelitian lanjutan dari penelitian ini. Software yang diteliti adalah Adobe Flash Media Live Encoder, maka dapat melakukan penelitian ulang dengan menggunakan software lain.

## Daftar Pustaka

*   Farrel, A. 2009\. Network Quality of Service. Burlington : Maurgan Kaufmann.
*   Gómez, G. 2005\. End-to-End Quality of Service over Cellular Networks. Chichester : John Wiley & Sons Ltd.
*   Stallings, W. 1998\. High-Speed Networks TCP/IP and ATM Design Principle. New Jersey : Prentice-Hall, Inc.
*   Adobe, 2013\. [http://www.adobe.com/products/flash-media-encoder.html](http://www.adobe.com/products/flash-media-encoder.html), diakses tanggal 17 Desember 2012.
*   Combs, G. 2013\. [http://www.wireshark.org/about.html](http://www.wireshark.org/about.html), diakses tanggal 17 Desember

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throug-xejgvro?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throug-xejgvro?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/08/tugas-fps-bitrate-throughput-adobe-flash-media-live-encoder](https://0fajarpurnama0.github.io/bachelor/2020/11/08/tugas-fps-bitrate-throughput-adobe-flash-media-live-encoder)
*   [https://0fajarpurnama0.medium.com/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-9bbbf05e9227](https://0fajarpurnama0.medium.com/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-9bbbf05e9227)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-fps-bitrate-throughput-adobe-flash-media-live-encoder](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-fps-bitrate-throughput-adobe-flash-media-live-encoder)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/pengaruh-pengaturan-fps-resolusi-dan.html](https://0darkking0.blogspot.com/2020/11/pengaruh-pengaturan-fps-resolusi-dan.html)
*   [https://hive.blog/indonesian/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/93-pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/93-pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder)
*   [https://steemit.com/indonesian/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder](http://0fajarpurnama0.weebly.com/blog/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adobe-flash-media-live-encoder)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adob](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/pengaruh-pengaturan-fps-resolusi-dan-bitrate-terhadap-throughput-yang-dihasilkan-pada-software-adob)
*   [https://read.cash/@FajarPurnama/pengaruh-pengaturan-fps-resolusi-bitrate-terhadap-throughput-adobe-flash-media-live-encoder-dcbc7c90](https://read.cash/@FajarPurnama/pengaruh-pengaturan-fps-resolusi-bitrate-terhadap-throughput-adobe-flash-media-live-encoder-dcbc7c90)