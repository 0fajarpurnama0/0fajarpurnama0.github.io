---
layout: post
title: Demonstrasi Penyusup Ditengah dengan Arpspoof dan Wireshark
categories: bachelor
tags: [Linux, arpspoof, wireshark, nmap, address resolution protocol, penyusup ditengah, Windows, tugas kuliah, penulisan ilmiah]
featuredimage: https://cdn.steemitimages.com/DQmNaTRqMX9qoZtkR6aTDrrzmLkbHqzqw2HYFpZVGWsYKJF/Gambar%200.%20illustrasi%20arp%20poisoning.png
description: Sebenarnya hanya essay man in the middle tetapi saya juga tertarik untuk mempraktikannya dengan Arpspoof dan Wireshark di Linux.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/10/15/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark
---
![Gambar 0. illustrasi arp poisoning.png](https://cdn.steemitimages.com/DQmNaTRqMX9qoZtkR6aTDrrzmLkbHqzqw2HYFpZVGWsYKJF/Gambar%200.%20illustrasi%20arp%20poisoning.png)

Gambar 0\. Illustrasi arp poisoning

## Catatan

Ini adalah tugas S1 saya pada mata kuliah Sistem Keamanan Data dimana sebenarnya hanya ditugaskan untuk menulis essay mengenai "man in the middle" tetapi saya juga tertarik untuk mempraktikannya dengan menggunakan aplikasi Arpspoof dan Wireshark di Linux. Selain saya, kelompok kami terdiri dari rekan saya Yulianti Murprayana, I Made Dwi Angga Pratama, Muhammad Audy Bazly, dan I Nyoman Arta Jaya. Tugas ini tidak pernah dipublikasi dimanapun dan kami sebagai penulis dan pemegang hak cipta melisensi tugas ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama kami sebagai penulis dan memberitahu bahwa versi asli dan terbuka tersedia disini. Jika hanya tertarik dengan praktiknya, ikuti saja videonya.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/backtrack-scanning-arppoissoning/3d91dfabc0d9b35fd88fb7b5d8420c232c4b4149?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Wireshark merupakan software untuk menangkap paket yang lewat pada jaringan disebut sebagai packet sniffing. Sniffing sendiri bearti mencium bau, digunakan oleh anjing untuk menangkap jejak. Wireshark tidak ditunjukkan untuk melakukan hacking tetapi sebagai software traffic monitoring dan hacking detector, artinya sebagai software untuk mengawasi kondisi trafik sehingga dapat mendeteksi jika terjadi pembobolan atau sesuatu yang tidak wajar pada jaringan. Walaupun demikian Wireshark juga dapat berfungsi sebagai software hacking.

Wireshark menangkap semua paket yang lewat, artinya username dan password yang dikirimpun ditangkap. Jika terkoneksi pada jaringan dan dapat mengetahui host lain yang terkoneksi maka memungkinkan untuk mematai aktifitas yang dilakukan oleh host tersebut, yaitu dengan ARP (Adress Resolution Protocol) poissoning dan sniffing. Pada makalah ini akan dilakukan percobaan penangkapan username dan password suatu host ke berbagai alamat web dengan metode gabungan antara scanning, ARP poissoning dan sniffing.

### 1.2 Rumusan Masalah

Apakah dapat dilakukan penangkapan username dan password pada host lain yang terkoneksi dalam jaringan yang sama dengan scanning, ARP poissoning dan sniffing?

### 1.3 Tujuan

Untuk mengetahui penangkapan username dan password dengan scanning, ARP poissoning dan sniffing ke [elearning.unud.ac.id](elearning.unud.ac.id).

### 1.4 Manfaat

1.  Mengetahui cara mematai host lain pada jaringan yang sama.
2.  Dengan mengetahui hal tersebut, akan ada upaya pencegahan.
3.  Dapat terdorong terjadi peningkatan tingkat keamanan pada jaringan.
4.  Pembaca akan lebih hati – hati untuk mengeluarkan data pribadi pada suatu jaringan.

### 1.5 Ruang Lingkup dan Batas

1.  Penangkapan username dan password dilakukan pada website yang tertuju pada login [elearning.unud.ac.id](elearning.unud.ac.id), [blog.unud.ac.id](blog.unud.ac.id), [simak.ft.unud.ac.id](simak.ft.unud.ac.id).
2.  Percobaan dilakukan pada host yang berada pada jaringan yang sama, LAN (Local Area Network).

## BAB 2 Tinjauan Pustaka

### 2.1 NMAP (Network Mapper)

NMAP merupakan software opensource yang berfungsi untuk melakukan scanning pada jaringan. NMAP menggunakan RAW IP (Internet Protocol) packet untuk mengetahui apakah ada suatu host, service yang disediakan oleh host, melihat firewall atau filter, dan jenis sistem operasi yang digunakan. Walaupun NMAP dibuat untuk mengecek jaringan yang besar, NMAP juga baik untuk mengecek 1 host (Lyon, 2013).

### 2.2 ARP (Address Resolution Protocol)

ARP bekerja diantara layer 2 dan layer 3 pada OSI (Open System Interconnection) layer karena MAC (Media Access Control) address bekerja pada layer 2 dan IP address bekerja pada layer 3\. ARP dipakai pada jaringan TCP/IP. ARP berfungsi untuk mengkonversi network address pada layer 3 menjadi physical address pada layer 2 (Mitchell, 2013).

### 2.3 ARPSpoof

Merupakan aplikasi untuk melakukan ARP poissoning. Arpspoof mengirim paket ARP memberitahu bahwa MAC address gateway adalah IP address komputer yang melakukan ARP poissoning. Artinya komputer korban akan mengirimkan trafik ke komputer penyerang lalu diteruskan oleh penyerang ke gateway. Sehingga informasi-informasi seperti username dan password bisa ditangkap. Kondisi aslinya komputer korban mengirim trafik ke gateway sehingga komputer yang lain tidak bisa menangkap paket yang dikirimkan oleh komputer korban (Uhlmann, 2003).

### 2.4 Sniffing

Packet sniffing, atau analisis paket, adalah proses menangkap data melewati jaringan lokal dan mencari informasi apapun yang mungkin berguna. Sebagian besar waktu, kita sistem administrator menggunakan packet sniffing untuk memecahkan masalah jaringan (seperti mencari tahu mengapa lalu lintas begitu lambat di salah satu bagian dari jaringan) atau untuk mendeteksi intrusi atau workstation dikompromikan (seperti workstation yang terhubung ke mesin remote pada port 6667 terus-menerus bila Anda tidak menggunakan klien IRC), dan itulah apa jenis analisis awalnya dirancang untuk. Tapi, itu tidak menghentikan orang dari menemukan cara yang lebih kreatif untuk menggunakan alat ini. Fokusnya cepat pindah dari maksud-begitu banyak sehingga packet sniffers dianggap alat keamanan aslinya bukan alat jaringan sekarang (Hannah, 2011).

## BAB 3 Metode Percobaan

### 3.1 Tempat dan Waktu Percobaan

Percobaan dilakukan di Lab Komputer, Teknik Elektro, Universitas Udayana, Jimbaran, Bali. Waktu percobaan pada hari Senin, tanggal 1 Mei 2013, pada jam 20:00 – 24:00.

### 3.2 Alat dan Bahan

Berikut adalah alat yang digunakan untuk penelitian:

Laptop ACER:

*   Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
*   Mobile Intel® Graphics Media Accelerator 4500MHD
*   1GB DDR2
*   128 WXGA Acer CrystalBriteTM LCD
*   250GB HDD
*   Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
*   Atheros Communications Inc. AR928X Wireless Network Adapter
*   Operating System Linux Backtrack 5 R3 32 bit

Software:

*   NMAP
*   Telnet
*   Hydra

Berikut adalah bahan yang digunakan untuk penelitian:

PC:

*   Intel® Pentium® core i5 processor
*   4 GB RAM
*   1GB VGA
*   Gigabit Ethernet Controller
*   Alcor Micro, Corp. USB 2.0 PC Camera
*   Operating System Windows 7 Ultimate 32 bit

### 3.3 Cara Percobaan

#### 3.4.1 Scan Host Alive dan cek konfigurasi IP (Internet Protocol)

Pertama yang harus dilakukan adalah melihat konfigurasi IP jika memasuki jaringan yang bersifat DHCP (Dynamic Host Configuration Protocol) dengan perintah “ifconfig”.

![Gambar 3.1 Konfigurasi PC.jpeg](https://cdn.steemitimages.com/DQmQ2CpU5Kj9nuJEesVMVHFQ2RZK4AyyUrkdgnRyb6Vr1rC/Gambar%203.1%20Konfigurasi%20PC.jpeg)

Gambar 3.1 Konfigurasi PC



Kedua yang harus dilakukan adalah untuk mengecek apakah host hidup atau mati. Bila alamat IP tidak diketahui bisa melakukan scanning pada range IP (Internet Protocol) adress tertentu atau dengan ARP (Address Resolution Protocol). Jika menggunakan nmap perintahnya adalah “nmap –sn 172.16.150.32/27”, perintah ini akan melakukan check host alive dengan aplikasi ping dari 172.16.150.32 – 172.16.150.63.

![Gambar 3.2 Hasil scan dengan NMAP.jpeg](https://cdn.steemitimages.com/DQmU8VVarRiUVpikjN77Ds255iYctqJSJyJTMB2E5H7EBBs/Gambar%203.2%20Hasil%20scan%20dengan%20NMAP.jpeg)

Gambar 3.2 Hasil scan dengan NMAP



Disini host dengan alamat IP 172.16.150.34 merupakan bahan percobaan.

#### 3.4.2 ARP (Address Resolution Protocol) Poisoning

Sebelum melakukan ARP poissoning ip_forward harus diaktifkan dengan perintah “echo 1 > /proc/sys/net/ipv4/ip_forward”. Pada makalah ini ARP poissoning dilakukan dengan opensource software Arpspoof. Perintahnya adalah “arpspoof –i eth0 –t 172.16.150.34 172.16.150.33”.

![Gambar 3.3 ARP poisoning dengan arpspoof.jpg](https://cdn.steemitimages.com/DQmRHjxbHnH3UpdKmhK6sgpZ5t9GxxyMqLatabSGijrH8LK/Gambar%203.3%20ARP%20poisoning%20dengan%20arpspoof.jpg)

Gambar 3.3 ARP poisoning dengan arpspoof



#### 3.4.3 Sniffing

Pada makalah ini sniffing dilakukan dengan opensourcesoftware Wireshark dan menangkap paket pada interface eth0 (kabel).

![Gambar 3.4 Sniffing dengan Wireshark.jpeg](https://cdn.steemitimages.com/DQmYkyGC7WPwqAUmzf7aJ4pYvnG9jaCddwVB7gmRLjdguwq/Gambar%203.4%20Sniffing%20dengan%20Wireshark.jpeg)

Gambar 3.4 Sniffing dengan Wireshark



## BAB 4 Pembahasan

### 4.1 Hasil Percobaan

Untuk mempermudah pencarian hasil login maka di filter dengan hanya paket yang berasal dari 172.16.150.34 dan jenis http saja yang ditampilkan. Untuk login biasanya menggunakan form. Terlihat pada Gambar 3.4 source 172.16.150.34 adalah bahan percobaan dan destination 103.29.196.230 adalah elearning.unud.ac.id. Jenis protocol pada login adalah http. Username dan password tampil dan terlihat tidak ada enkripsi.

![Gambar 4.1 mac sebelum dan sesudah arpspoof.png](https://cdn.steemitimages.com/DQmaRjZ3Ko94dEnssBpTXUhmQ69sTPbycaATQiiscCnidVS/Gambar%204.1%20mac%20sebelum%20dan%20sesudah%20arpspoof.png)

Gambar 4.1 Physical Address Gateway yang tercatat berubah ke Physical Address penyusup

Pada arpspoof gambar 3.3 adalah memodifikasi tabel ARP dimana gateway 172.16.150.33 dengan mac address CC:EF:48:F8:D0:FF (dilihat pada gambar 3.2) dirubah ke 00:23:5A:49:B7:F5 pada Gambar 4.1\. Artinya default gateway dirubah ke komputer yang melakukan ARP poissoning. Sehingga komputer bahan percobaan akan mengirim paket lewat komputer yang melakukan arpspoof terlebih dahulu. Dengan diaktifkan ip_forward maka paket akan diteruskan ke gateway seolah – olah tidak terjadi pemutusan koneksi.

## BAB 5 Penutup

### 5.1 Simpulan

Penangkapan username dan password dapat dilakukan dengan scanning, ARP poissoning dan sniffing. Informasi tekandung pada paket-paket yang lewat. Dari percobaan terlihat tidak ada enkripsi pada username dan password pada paket yang menuju [elearning.unud.ac.id](elearning.unud.ac.id), [blog.unud.ac.id](blog.unud.ac.id), [simak.ft.unud.ac.id](simak.ft.unud.ac.id). Namun terdapat enkripsi MD5 pada [kaskus.co.id](kaskus.co.id) sehingga tidak mudah untuk melihat password. Pada percobaan, scanning digunakan software NMAP, ARP poissoning digunakan software Arpspoof, dan sniffing digunakan software Wireshark. Dengan kombinasi tersebut maka dapat memantau aktifitas host lain pada jaringan lokal.

### 5.2 Saran

Makalah ini dapat dijadikan penelitian lebih lanjut dengan host memiliki sistem operasi yang berbeda-beda, menggunakan software lain, atau pembahasan lebih mendalam mengenai metode-metode yang digunakan.

## Referensi

*   Lyon, G. 2013\. [http://nmap.org](http://nmap.org). Diakses 13 Mei 2013.
*   Hannah, A. 2011\. [http://www.linuxjournal.com/content/packet-sniffing-basics](http://www.linuxjournal.com/content/packet-sniffing-basics). Diakses 13 Mei 2013.
*   Uhlmann, S. 2003\. [http://su2.info/doc/arpspoof.php](http://su2.info/doc/arpspoof.php). Diakses 13 Mei 2013.
*   Microsoft, …. 2005\. [http://technet.microsoft.com/en-us/library/cc758357%28v=ws.10%29.aspx](http://technet.microsoft.com/en-us/library/cc758357%28v=ws.10%29.aspx). Diakses 13 Mei 2013.
*   Mitchell, B. 2013\. [http://compnetworking.about.com/od/networkprotocols/g/bldef_arp.htm](http://compnetworking.about.com/od/networkprotocols/g/bldef_arp.htm). Diakses 13 Mei 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-xolxpnp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-xolxpnp?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/10/15/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark](https://0fajarpurnama0.github.io/bachelor/2020/10/15/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark)
*   [https://0fajarpurnama0.medium.com/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-f2753a91f140](https://0fajarpurnama0.medium.com/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-f2753a91f140)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark)
*   [https://blurt.buzz/blurtindonesia/@fajar.purnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark?referral=fajar.purnama](https://blurt.buzz/blurtindonesia/@fajar.purnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/demonstrasi-penyusup-ditengah-dengan.html](https://0darkking0.blogspot.com/2020/11/demonstrasi-penyusup-ditengah-dengan.html)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/119-demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/119-demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark)
*   [https://steemit.com/indonesia/@fajar.purnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark](http://0fajarpurnama0.weebly.com/blog/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark)
*   [https://read.cash/@FajarPurnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-25bd29f1](https://read.cash/@FajarPurnama/demonstrasi-penyusup-ditengah-dengan-arpspoof-dan-wireshark-25bd29f1)