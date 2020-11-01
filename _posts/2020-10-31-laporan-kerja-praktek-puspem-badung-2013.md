---
layout: post
title: Simulasi Konfigurasi Jaringan ICT Berbasis Konfigurasi Jaringan Eksisting di Network Operation Center Pemerintah Kabupaten Badung
category: bachelor
tags: [jaringan komputer, Cisco Packet Tracer, fiber optik, laporan kerja praktek, Badung]
featuredimage: https://images.hive.blog/DQmcKrKyiGhDJo6xozqr3dhvpV775JsbaeJaxRW2onf5Uy1/Gambar%203.1%20Multilayer%20Switch%20cat4500e,%20ASA,%20Mikrotik,%20Router%202900%20dari%20bawah%20ke%20atas.jpg
description: Kerja praktek saya pada Proyek Instalasi Fiber Optik di Kawasan Pusat Pemerintah Kabupaten Badung  mengenai konfigurasi jaringan komputer.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/10/31/laporan-kerja-praktek-puspem-badung-2013
---
## Catatan

*   Tulisan ini adalah laporan kerja praktek saya pada Proyek Instalasi Fiber Optik di Kawasan Pusat Pemerintah Kabupaten Badung, Bali dari Juni-August 2012 dimana saya mengambil bagian konfigurasi jaringan komputernya yang mayoritas menggunakan perangkat Cisco dan tema yang saya angkat pada laporan ini adalah simulasi konfigurasi peralatan Cisconya perangkat lunak simulasi Cisco Packet Tracer.
*   Laporan kerja praktek ini merupakan suatu kewajiban untuk kelulusan S1 saya di Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana. Namun, laporan ini tidak pernah dipublikasikan dimana-mana dan hak cipta sepenuhnya saya yang pegang dan sudah 8 tahun sejak laporan ini ditulis dimana keadaan di lapangan telah berubah sehingga tidak akan membongkar rahasia yang dapat berbahaya bagi Pemerintahan Kabupaten Badung. Oleh karena ini saya nyatakan laporan ini terbuka, boleh disalin, boleh dipublikasi ulang, dan boleh dijual dengan syarat menyebut nama saya sebagai penulis asal dan sebutkan bahwa laporan ini terbuka di tautan ini (customized CC-BY-SA).

## Abstrak

Proyek Instalasi Fiber Optik di Kawasan Pusat Pemerintah Kabupaten Badung merupakan suatu cara untuk beralih ke berbasis ICT (Information Communication Technology). Pelaksanaan proyek dilaksanakan dengan survei lingkungan, penyiapan alat, bahan, dan tenaga kerja, pembuatan jalur fiber optik, penamaman fiber optik, penghubungan fiber optik ke perangkat di masing-masing gedung, konfigurasi jaringan, dan perapian tepat menjadi seperti semula. Pada laporan ini akan dibahas mengenai konfigurasi jaringan.

Yang perlu dipahami untuk melakukan konfigurasi ini adalah pemahaman penggunaan perangkat, pemahaman mengenai alamat IP, pemahaman VLAN (Virtual Local Area Network), pemahaman static route dan RIP (Routing Information Protocol), remote login, dan NAT (Network Address Translation).

Konfigurasi dilakukan di Gedung 10 yaitu Dinas Perhubungan Komunikasi dan Informatika Pusat Pemerintah Kabupaten Badung pada tanggal 4 September 2012 hingga 8 September 2012\. Alat yang diperlukan untuk melakukan konfigurasi adalah laptop, kabel UTP, kabel DB9M-USB converter, dan kabel console Cisco. Software yang dibutuhkan untuk konfigurasi adalah serial terminal dan telnet client. Perencanaan konfigurasi pertama adalah pemberian alokasi VLAN (Virtual Local Area Network) pada masing-masing dinas di masing-masing gedung. Kedua pemberian alokasi alamat IP pada masing-masing VLAN. Ketiga adalah pemberian alokasi alamat IP pada masing-masing perangkat. Keempat adalah pembentukan topologi.

Konfigurasi pertama adalah pada jaringan lokal. Pemberian alamat IP masing-masing switch adalah pada VLAN 1\. Masing-masing switch diberikan VLAN ID berdasarkan dinas yang terdapat pada gedung tersebut. Koneksi dari switch ke multilayer switch diberi mode trunk agar semua VLAN ID bisa lewat. Pada multilayer switch port yang terkoneksi ke jaringan Internet diberi alamat IP dan pada multilayer switch diberi konfigurasi routing. Routing juga diatur pada router lainnya. Pada Router 2900 dikonfigurasi NAT (Network Address Translation) untuk menerjemahkan alamat IP lokal dari dalam menjadi alamat IP Public menuju keluar. Semua perangkat diaktifkan debug, log, dan Telnet login.

Pada konfigurasi alamat IP disini terjadi pemborosan alamat IP. Disarankan untuk mengkonfigurasi ulang subnet mask. Disarankan lagi untuk lebih banyak memberi label pada port dan VLAN ID untuk mempermudah management.

Keywords: Wireless Sensor Network, Imote2, Embedded Linux, ZigBee, WLAN, JTAG, OpenOCD.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

ICT (Information Communication Technology) merupaka suatu istilah yang mencangkup mengenai informasi, komunikasi, telekomunikasi, dan komputer. Dengan adanya ICT ini menggantikan tempat informasi yang bersifat benda nyata. Perpustakaan dapat diganti dengan halaman web pada jaringan Internet, dokumen berupa kertas dan buku dapat diganti dengan server berisi dokumen elektronik, surat-menyurat melewati pos dapat diganti dengan email (electronic mail). Pada Internet tersedia juga informasi berupa gambar dan video. Keuntungan metode ini dibanding dengan metode klasik adalah efisiensi terhadap energi, tempat, dan waktu. Dengan ICT ini segala bentuk informasi yang terkandung dapat diakses kapan saja dan dimana saja secara cepat (tanpa harus membuang energi dan waktu untuk pergi ke suatu tempat dan dibatasi oleh waktu untuk mengakses suatu informasi).

Banyak Pusat Pemerintah yang beralih ke berbasis ICT, artinya mulai memanfaatkan teknologi ICT untuk kepentingan Pemerintah. Salah satu contoh pengiriman dokumen lewat post atau pengiriman dokumen dengan mendatangi tujuan pengiriman secara langsung mulai diganti dengan email. Tempat dimana penulis dilakukan kerja praktek yaitu di Pusat Pemerintah Kabupaten Badung telah beralih ke berbasis ICT.

Kerja Praktek di Pusat Pemerintah Kabupaten Badung adalah menjalankan Proyek Instalasi Fiber Optik di seluruh Dinas yang ada di Pusat Pemerintah Kabupaten Badung. Pemilik Proyek adalah Dishubkominfo (Dinas Perhubungan, Komunikasi dan Informatika) Pemerintah Kabupaten Badung, pelaksana adalah PT. Skill Surabaya, dan pengawas adalah CV. Bali Info Data. Penulis berada di pihak pengawas.

Dari semua tahap Pembangunan Infrastruktur Jaringan Fiber Optik Di Kawasan Pusat Pemerintah Kabupaten Badung , pada Laporan Kerja Praktek ini khusus pada tahap konfigurasi ICT. Agar lebih mudah untuk diserap, konfigurasi jaringan komputer ini akan di simulasikan pada program simulator jaringan Cisco Packet Tracer. Dilakukan simulasi karena penulis berada di pihak pengawas, sehingga tidak dapat diperlihatkan tahap-tahap konfigurasi secara langsung, dikarenakan konfigurasi ICT di Pemerintah Kabupaten Badung bersifat tetap, tidak diperbolehkan untuk konfigurasi ulang. Digunakannya program ini karena alat yang digunakan hampir semua merupakan barang Cisco.

### 1.2 Tujuan

Melaporkan konfigurasi jaringan komputer pada Proyek Pembangunan Infrastruktur Jaringan Fiber Optik di Kawasan Pusat Pemerintah Kabupaten Badung, dan mensimulasikannya di Cisco Packet Tracer.

### 1.3 Manfaat

1.  Memiliki dokumentasi konfigurasi jaringan komputer pada proyek ini.
2.  Memamahi lebih lanjut mengenai konfigurasi jaringan komputer ini dengan mengkaitkan teori yang ada.
3.  Dengan mensimulasikannya di Cisco Packet Tracer maka dapat lebih cepat dan mudah dipahami.

### 1.4 Pelaksanaan Kerja Praktek

Kerja Praktek ini adalah Pembangunan Infrastruktur Jaringan Fiber Optik dilaksanakan dari Juni-September 2013 di Kawasan Pusat Pemerintah Kabupaten Badung. Secara umum tahap proyek ini adalah

*   Survei kawasan. Pembelian alat dan bahan, dan pencarian tenaga kerja.
*   Penggalian lubang di beberapa titik dan boring untuk melewati kabel Fiber Optik di bawah tanah, serta pemasangan jalur Fiber Optik di masing-masing basement gedung.
*   Penghubungan Fiber Optik dari Dinas Perhubungan Komunikasi dan Informatika ke masing-masing dinas, terdapat 12 gedung, dan melakukan pengujian kinerja kabel Fiber Optik.
*   Pemasangan Switch dan Router di Dinas Perhubungan Komunikasi dan Informatika dan Switch di masing-masing gedung sebagai penghubung Fiber Optik dari Dinas Perhubungan Komunikasi dan Informatika ke masing-masing gedung.
*   Konfigurasi Switch dan Router, serta melakukan pengujian kinerja.
*   Membersihkan dan merapikan bekas kerja.

### 1.5 Ruang Lingkup dan Batasan

1.  Pembahasan konfigurasi adalah mulai dari Cisco Switch c3750e dari semua Gedung sampai modem pada Dinas Perhubungan Komunikasi dan Informasi.
2.  Membahas IP (Internet Protocol) Address, Virtual Local Area Network, Static Route, Router Information Protocol, Network Address Translation, Telnet Login, jenis-jenis kabel yang digunakan.
3.  Tidak membahas keamanan jaringan dan pembatasan bandwidth, baik pada Cisco ASA maupun Mikrotik karena keamanan jaringan dan pembatasan bandwidth masih tahap perencanaan, akan diimplementasikan di masa mendatang.
4.  Menggunakan Cisco Packet Tracer sebagai simulator dengan batasan menggunakan Kabel UTPsebagai pengganti kabel Fiber Optik Switch 2960-24TT sebagai pengganti Switch c3750e, Multilayer Switch 3560-24 PS sebagai peganti Multilayer Switch cat4500e, dan Router 2811 sebagai peganti Mikrotik, Modem, Router ASA, dan Router 2900 dikarenakan tidak adanya modul tersebut di Cisco Packet Tracer.

### 1.6 Sistematika Penulisan

*   BAB 1 Pendahuluan berisikan latar belakang, tujuan, manfaat, pelaksanaan kerja pratek dan ruang lingkup dan batasan.
*   BAB 2 Tinjauan Pustaka berisikan IP address, Switch dan Router, Virtual Local Area Network, Static Route, Router Information Protocol, Network Address Translation, Telnet Login, Kabel UTP, dan Kabel console Cisco.
*   BAB 3 Konfigurasi Jaringan ICT Pemerintah Kabupaten Badung berisikan tempat dan waktu, alat dan bahan, rencana konfigurasi jaringan, dan konfigurasi pada masing-masing perangkat.
*   BAB 4 Pembahasan konfigurasi jaringan menuju dari Multilayer Switch cat4500e ke Modem, konfigurasi jaringan lokal, dan uji koneksi.
*   BAB 5 Penutup berisikan simpulan, dan saran.

## BAB 2 Tinjauan Pustaka

### 2.1 Pendahuluan

Untuk melakukan konfigurasi ini diperlukan pengetahuan mengenai saat menggunakan kabel ethernet RJ45 tipe straight-thru atau crossover untuk menghubungkan antar perangkat. Pada konfigurasi ICT ini digunakan switch sebagai penghubung antar banyak perangkat dan router sebagai penghubung ke Internet. Pengalamatan perangkat digunakan IPV4 (Internet Protocol Version 4). Diperlukan pengetahuan yang dalam mengenai IPV4 untuk konfigurasi ICT tingkat seluas pusat Pemerintah. Diperlukan pengetahuan mengenai VLAN (Virtual Local Area Network) untuk memudahkan management jaringan lokal, dan sedikit NAT (Network Address Translation) untuk menghubungkan ke Internet. Telnet login bersifat optional, untuk memudahkan management. Maka teori-teori yang perlu diketahui dijelaskan pada BAB ini.

### 2.2 Kabel Ethernet RJ45 dan Kabel DB9 - RJ45

Kabel Ethernet RJ45 yang menghubungkan komputer dengan switch, switch dengan router menggunakan kabel straight-thru. Sedangkan untuk menghubungkan antar komputer, antar switch, antar router, dan komputer dengan router menggunakan kabel crossover. Kabel ethernet RJ45 terdiri dari 8 pin, dimana 4 yang digunakan sebagai transmitter tegangan minus, transmitter tegangan plus, receiver minus, dan receiver plus. Ada jenis straight-thru dan crossover karena terdapat perbedaan lokasi transmitter dan receiver (The Internet Center, 2013).

<figure>![Susunan kabel Ethernet RJ45](https://images.hive.blog/DQmdDJjrF8GJdR2vtGMF2hhihEA76mUvgT2PNMFRni3hApc/Gambar%202.1%20Susunan%20kabel%20Ethernet%20RJ45.gif)

<figcaption>Gambar 2.1 Susunan kabel Ethernet RJ45 (The Internet Center, 2013)</figcaption>

</figure>

Kabel console Cisco digunakan untuk mengkonfigurasi perangkat Cisco. Kabel ini merupakan DB9 female ke RJ45 male.

<figure>![Susunan kabel DB9 female ke RJ45 male](https://images.hive.blog/DQmUowKZapWqySMkgtaL8fJArCcTun8XyWoRTMb6GXpQmEt/Gambar%202.2a%20Susunan%20kabel%20DB9%20female%20ke%20RJ45%20male.jpg) ![Susunan kabel DB9 female ke RJ45 male](https://images.hive.blog/DQmV71u8D6nCf4PBeaAh9SKRMM7yKK49Ax8PMfcZggdipSt/Gambar%202.2b%20Susunan%20kabel%20DB9%20female%20ke%20RJ45%20male.png)

<figcaption>Gambar 2.2 Susunan kabel DB9 female ke RJ45 male (WTI, 2013)</figcaption>

</figure>

### 2.3 Switch dan Router

Switch merupakan sebuah perangkat yang dapat menghubung antar komputer, antar jaringan lokal, dan antar komputer dengan jaringan lokal. Pada OSI (Open Systems Interconnection) reference model bekerja pada layer 2 yaitu datalink. Switch memiliki beberapa port dan bekerja dengan melanjutkan frame yang datang dari suatu port ke port yang dituju. Switch menyimpan hardware address dan tempat port yang terhubung perangkat-perangkat yang terhubung di suatu port.

Router merupakan sebuah perangkat yang menghubungkan antar jaringan (saat ini antar switch). Pada OSI (Open Systems Interconnection) reference model bekerja pada layer 3 yaitu network. Router bekerja berdasarkan network address. Router menentukan jalur untuk menuju jaringan lain (Gebali, 2008).

### 2.4 IP (Internet Protocol) Address

IP adress atau di terjemahkan sebagai alamat IP mendefinisikan sebuah host atau sebuah router ke jaringan Internet, merupakan deretan angka biner. Pada jaringan komputer dan jaringan Internet saat ini menggunakan IP address untuk menunjukkan identitas sebuah perangkat. Alamat ini yang digunakan sebagai identitas pengirim dan penerima data. Oleh karena itu IP address harus unik dan universal. Saat ini ada 2 versi IP, yaitu IP versi 4 dan IP versi 6\. IPV4 terdiri dari 32 bit dan ditulis dalam bentuk biner atau decimal, sedangkan IPV6 terdiri dari 128 bit dan ditulis dalam bentuk biner atau hexadecimal, yang saat ini digunakan adalah IPV4, IPV6 untuk masa depan.

IPV4 ditulis dengan subnet mask atau prefix. Penulisannya secara desimal dibagi per byte atau 8 bit (xxxxxxxx.xxxxxxx.xxxxxxx.xxxxxxx).

**Contoh 2.1**

Sebuah alamat IP 192.168.0.1 (11000000.10101000.00000000.00000001) 255.255.255.0 (11111111.1111111.1111111.00000000). Penulisan secara prefixnya adalah 192.168.0.1/24 (x.x.x.x/n), angka 24 menyatakan jumlah bit 1 dalam subnet mask. Oleh karena itu penulis subnet mask hanya boleh terbagi 2 kutub, yaitu bagian kiri angka 1, dan bagian kanan angka 0 (tidak bisa acak).

Subnet mask menunjukkan jumlah host dalam suatu jaringan, menunjukkan network ID (identity), dan host ID. Untuk mencari network ID suatu alamat IP yaitu dengan melakukan operasi AND terhadap subnet mask yang diberikan.

**Contoh 2.2**

Dari contoh 2.1 192.168.0.1 (11000000.10101000.00000000.00000001) 255.255.255.0 (11111111.1111111.1111111.00000000), maka jika 11000000.10101000.00000000.00000001 AND 11111111.1111111.1111111.00000000 hasilnya adalah 11000000.10101000.00000000.00000000 yaitu 192.168.0.0 merupakan network ID, dengan identitas host 192.168.0.1.

IP address bisa berupa class atau classless. Bila berupa class maka dibagi atas 5 kelas, yaitu A, B, C, D, dan E. Yang digunakan secara umum adalah A – C, sedangkan D untuk multicast dan E secara experimental, dan digunakan untuk keperluan masa depan (Sutanta, 2005). Berikut adalah 2 tabel yang menunjukkan kelas dan tabel mengenai prefix.

<table border="1"><caption>Tabel 2.1 Kelas IP address (Sutanta, 2005)</caption>

<thead>

<tr>

<th>Kelas</th>

<th>Subnet</th>

<th>Alokasi</th>

</tr>

</thead>

<tbody>

<tr>

<td>A</td>

<td>255.0.0.0</td>

<td>0.0.0.0 – 127.255.255.255</td>

</tr>

<tr>

<td>B</td>

<td>255.255.0.0</td>

<td>128.0.0.0 – 191.255.255.255</td>

</tr>

<tr>

<td>C</td>

<td>255.255.255.0</td>

<td>192.0.0.0 – 223.255.255.255</td>

</tr>

<tr>

<td>D</td>

<td>-</td>

<td>224.0.0.0 – 239.255.255.255</td>

</tr>

<tr>

<td>E</td>

<td>-</td>

<td>240.0.0.0 – 255.255.255.255</td>

</tr>

</tbody>

</table>

<table border="1"><caption>Tabel 2.2 Prefix (Sutanta, 2005)</caption>

<thead>

<tr>

<th>/n</th>

<th>Subnet</th>

<th>/n</th>

<th>Subnet</th>

<th>/n</th>

<th>Subnet</th>

<th>/n</th>

<th>Subnet</th>

</tr>

</thead>

<tbody>

<tr>

<td>/1</td>

<td>128.0.0.0</td>

<td>/9</td>

<td>255.128.0.0</td>

<td>/17</td>

<td>255.255.128.0</td>

<td>/25</td>

<td>255.255.255.128</td>

</tr>

<tr>

<td>/2</td>

<td>192.0.0.0</td>

<td>/10</td>

<td>255.192.0.0</td>

<td>/18</td>

<td>255.255.192.0</td>

<td>/26</td>

<td>255.255.255.192</td>

</tr>

<tr>

<td>/3</td>

<td>224.0.0.0</td>

<td>/11</td>

<td>255.224.0.0</td>

<td>/19</td>

<td>255.255.224.0</td>

<td>/27</td>

<td>255.255.255.224</td>

</tr>

<tr>

<td>/4</td>

<td>240.0.0.0</td>

<td>/12</td>

<td>255.240.0.0</td>

<td>/20</td>

<td>255.255.240.0</td>

<td>/28</td>

<td>255.255.255.240</td>

</tr>

<tr>

<td>/5</td>

<td>248.0.0.0</td>

<td>/13</td>

<td>255.248.0.0</td>

<td>/21</td>

<td>255.255.248.0</td>

<td>/29</td>

<td>255.255.255.248</td>

</tr>

<tr>

<td>/6</td>

<td>252.0.0.0</td>

<td>/14</td>

<td>255.252.0.0</td>

<td>/22</td>

<td>255.255.252.0</td>

<td>/30</td>

<td>255.255.255.252</td>

</tr>

<tr>

<td>/7</td>

<td>254.0.0.0</td>

<td>/15</td>

<td>255.254.0.0</td>

<td>/23</td>

<td>255.255.254.0</td>

<td>/31</td>

<td>255.255.255.254</td>

</tr>

<tr>

<td>/8</td>

<td>255.0.0.0</td>

<td>/16</td>

<td>255.255.0.0</td>

<td>/24</td>

<td>255.255.255.0</td>

<td>/32</td>

<td>255.255.255.255</td>

</tr>

</tbody>

</table>

Jika subnet mask diperdalam, maka subnet mask dapat menentukan jumlah IP address pada suatu network. Jumlah IP address dapat dihitung dari bit 1 sebelah kanan digabung dengan semua bit 0 yang ada pada subnet mask.

**Contoh 2.3**

255.255.255.0 (11111111.1111111.1111111.00000000), maka jumlah alamat IP = 10000000(2) yaitu 256(10), 255.255.255.224 (11111111.1111111.11111111.11100000), maka jumlah alamat IP = 100000(2) yaitu 32(10).

Dari semua alamat IP dalam suatu jaringan IP address pertama dipakai sebagai network ID, IP address terkahir dipakai sebagai broadcast ID, dan bila merupakan jaringan WAN (Wide Area Network) diperlukan 1 IP address lagi sebagai gateway (menuju jaringan lain) biasanya dipasang setelah network ID.

**Contoh 2.4**

192.168.0.1 (11000000.10101000.00000000.00000001) 255.255.255.0 (11111111.1111111.1111111.00000000), maka jika 11000000.10101000.00000000.00000001 AND 11111111.1111111.1111111.00000000 hasilnya adalah 11000000.10101000.00000000.00000000 yaitu 192.168.0.0 merupakan network ID, dengan identitas host 192.168.0.1, dengan subnet mask 255.255.255.0 (11111111.1111111.1111111.00000000), maka jumlah IP addresss keseluruhan adalah 10000000(2) = 256(10), alamat pertama 192.168.0.0 sebagai network ID dan alamat terakhir adalah 192.168.0.255 sebagai broadcast ID, dan bisa dipilih dari 192.168.0.1 – 192.168.0.254 sebagai gateway, dan sisanya bisa dipakai untuk host (Inixindo, 2005). Untuk lebih didalami dapat dilihat tabel berikut.

<table border="1"><caption>Tabel 2.3 Contoh management IP address</caption>

<thead>

<tr>

<th>IP address</th>

<th>Subnet Mask</th>

<th>Network ID</th>

<th>Gateway</th>

<th>Host ID tersedia</th>

<th>Broadcast ID</th>

</tr>

</thead>

<tbody>

<tr>

<td>10.17.22.45</td>

<td>255.0.0.0</td>

<td>10.0.0.0</td>

<td>10.0.0.1</td>

<td>10.0.0.2 -</td>

<td>10.255.255.255</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td>10.255.255.254</td>

<td></td>

</tr>

<tr>

<td>172.16.35.5</td>

<td>255.255.0.0</td>

<td>172.16.0.0</td>

<td>172.16.0.1</td>

<td>172.16.0.2 -</td>

<td>172.16.255.255</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td>172.16.255.254</td>

<td></td>

</tr>

<tr>

<td>172.16.35.5</td>

<td>255.255.248.0</td>

<td>172.16.32.0</td>

<td>172.16.32.1</td>

<td>172.16.32.2 -</td>

<td>172.16.39.255</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td>172.16.39.254</td>

<td></td>

</tr>

<tr>

<td>192.168.10.22</td>

<td>255.255.255.0</td>

<td>192.168.10.0</td>

<td>192.168.10.1</td>

<td>192.168.10.2 -</td>

<td>192.168.10.255</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td>192.168.10.254</td>

<td></td>

</tr>

<tr>

<td>192.168.10.22</td>

<td>255.255.255.224</td>

<td>192.168.10.0</td>

<td>192.168.10.1</td>

<td>192.168.10.2 -</td>

<td>192.168.10.31</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td>192.168.10.30</td>

<td></td>

</tr>

</tbody>

</table>

Kesimpulannya semakin sedikit jumlah bit 1 pada subnet mask semakin banyak jumlah host dan semakin sedikit jumlah network ID, dan sebaliknya.

### 2.5 VLAN (Virtual Local Area Network)

VLAN merupakan sekumpulan perangkat pada 1 atau lebih LAN yang terkonfigurasi untuk berkomunikasi bagaikan terhubung pada kabel yang sama, dimana sebenarnya mereka berada pada segment LAN yang berbeda. Vlan berdasarkan logika dari pada fisik, oleh karena VLAN fleksibel.

VLAN mendefinisikan broadcast domain pada layer 2\. Broadcast domain merupakan sekumpulan perangkat yang akan menerima broadcast frames dari perangkat manapun. Layer 2 Switches membikin broadcast domain berdasarkan konfigurasi switch. Switch merupakan multiport bridges yang dapat membuat banyak broadcast domain. Satu VLAN dapat merupaka satu broadcast domain. VLAN satu antara lainnya tidak dapat saling berhubungan karena berada pada broadcast domain yang berbeda. Untuk menghubungkan antar VLAN perlu menggunakan router atau layer 3 switch (Cisco, 2004).

<figure>![Contoh VLAN](https://images.hive.blog/DQmWYMfhFXrH5qQrfWvWkx8fqWowtMm1rqQyQwsRmoq6yZt/Gambar%202.3%20Contoh%20VLAN.png)

<figcaption>Gambar 2.3 Contoh VLAN (Cisco, 2004)</figcaption>

</figure>

### 2.6 Static Route dan RIP (Routing Information Protocol)

Static Route merupakan mekanisme routing yang permanen. Jalur untuk menuju suatu jaringan pada sebuah perangkat router ditentukan langsung oleh administrator. Pada pengaturan static route suatu router adalah next hop (jalur berikutnya) bila menuju suatu jaringan.

RIP merupakan salah satu dynamic route yaitu mekanisme routing yang berubah-ubah terhadap waktu dan bersifat fleksibel. RIP mengadopsi distance-vector protocol dimana masing-masing router akan memberikan informasi ke router tetangga mengenai jalur yang terhubung pada router tersebut. Dari hal tersebut router akan mengestimasi jarak semua jalur untuk mencapai jaringan lainnya. Setelah itu router akan menentukan sendiri jalurnya berdasarkan jarak terpendek menurut estimasi router dari hasil pertukaran informasi antar router tetangga (Stallings, 1998).

### 2.7 NAT (Network Address Translation)

IPV4 sudah hampir habis, artinya sebagian besar sudah digunakan diseluruh dunia. Oleh karena itu dikembangkan IPV6\. Selama menunggu IPV6 diterapkan ada solusi untuk menghemat alamat IP pada versi 4 yaitu NAT. Alamat IPV4 digolongkan 2 jenis yaitu IP privat dan IP global. IP global merupakan alamat IP yang hanya dimiliki 1 perangkat diseluruh dunia dan dikenal dalam jaringan Internet. Sedangkan IP privat merupakan alamat IP yang tidak dikenal dalam jaringan Internet dan bebas digunakan oleh perangkat manapun sehingga pemilik lebih dari 1\. IP privat adalah 10.x.x.x 255.0.0.0, 172.16.x.x 255.255.0.0, dan 192.168.x.x 255.255.255.0\. Sedangkan 127.x.x.x 255.0.0.0 digunakan sebagai loopback. Selain itu merupakan alamat IP global (Inixindo, 2005).

NAT bekerja dengan menerjemahkan IP privat menjadi IP global dan sebaliknya. Misalnya sederetan host memiliki IP privat 192.168.10.2 – 192.168.10.254 255.255.255.0 dan keluar melewati router, gateway 192.168.10.1 255.255.255.0 yang dapat melakukan NAT dengan IP global 202.130.0.5 255.255.255.0, misalnya ke DNS Google 8.8.8.8 255.0.0.0\. Maka paket keluar dari 192.168.10.2 – 192.168.10.254 akan diterjemahkan menjadi 202.130.0.5 sebelum terkirim ke 8.8.8.8\. Setelah itu 8.8.8.8 akan membalasnya dengan alamat IP tujuan 202.130.0.5, setelah itu router mengkonversi ke alamat IP tujuan menjadi 192.168.10.x, tergantung pengirim (Peterson, 2003).

### 2.8 Telnet

Telnet merupakan applikasi bekerja pada OSI layer 7 yaitu applikasi yang dapat melakukan remote login yaitu masuk ke suatu perangkat menggunakan komputer lain. Telnet sangat berguna untuk bekerja jarak jauh, yang seharusnya datang ke lokasi perangkat untuk masuk ke sistem, dengan telnet pemasukan ke sistem dapat dilakukan jarak jauh. Telnet mentransmisikan data tanpa enkripsi dan dibuka pada port nomor 23 (Burgess, 2004).

## BAB III Konfigurasi Jaringan ICT Pemerintah Kabupaten Badung

### 3.1 Pendahuluan

Konfigurasi jaringan ICT pada laporan ini adalah konfigurasi ICT di Pemerintah Kabupaten Badung. Konfigurasi jaringan ICT meliputi pengalamatan IP address, pengalokasian identitas VLAN, debugging, routing, remote login, dan NAT. Pemakaian port pada perangkat juga ditentukan. Bentuk fisik alat yang dikonfigurasi dapat dilihat pada subbab 3.3 Alat dan Bahan pada Gambar 3.1 dan Gambar 3.2\. Pengalamatan IP, port yang digunakan, dan VLAN dapat dilihat pada subbab 3.4 Rencana Konfigurasi.

### 3.2 Tempat dan Waktu

Konfigurasi dilakukan di Gedung 10 yaitu Dinas Perhubungan Komunikasi dan Informatika Pusat Pemerintah Kabupaten Badung pada tanggal 4 September 2013 hingga 8 September 2013.

### 3.3 Alat dan Bahan

<table border="1"><caption>Tabel 3.1 Alat</caption>

<thead>

<tr>

<th>Alat</th>

<th>Keterangan</th>

</tr>

</thead>

<tbody>

<tr>

<td>Laptop</td>

<td>Hardware lengkap beserta PCI ethernet RJ45 femaledan USB female. Software yang diperlukan USB – RS232 driver, Telnet Client,TFTP Server, Serial Terminal, dan Cisco Packet Tracer.</td>

</tr>

<tr>

<td>USB – RS232 converter</td>

<td>Jika laptop atau komputer tidak bersisi RS232 male.</td>

</tr>

<tr>

<td>RS232 female – RJ45 male</td>

<td>Sebagai kabel cosole Cisco untuk melakukankonfigurasi terhadap alat.</td>

</tr>

<tr>

<td>Kabel UTP/ ethernet coaxial cable</td>

<td>Untuk melakukan pengujian konfigurasi</td>

</tr>

<tr>

<td>Pin RJ45</td>

<td>Ujung dari kabel UTP</td>

</tr>

<tr>

<td>Tang Crimping</td>

<td>Untuk menyambung pin RJ45 ke Kabel UTP</td>

</tr>

<tr>

<td>Kabel Fiber Optik beserta connectornya</td>

<td>Penghubung semua gedung ke gedung 10</td>

</tr>

</tbody>

</table>

<table border="1"><caption>Tabel 3.2 Bahan</caption>

<thead>

<tr>

<th>Bahan</th>

<th>Jumlah</th>

</tr>

</thead>

<tbody>

<tr>

<td>Cisco Multilayer Switch cat4500e</td>

<td>1</td>

</tr>

<tr>

<td>Cisco Switch c3750e</td>

<td>12</td>

</tr>

<tr>

<td>Cisco ASA c2900</td>

<td>1</td>

</tr>

<tr>

<td>Mikrotik</td>

<td>1</td>

</tr>

<tr>

<td>Cisco Router 2900 series</td>

<td>1</td>

</tr>

<tr>

<td>Modem</td>

<td>1</td>

</tr>

</tbody>

</table>

<figure>![Multilayer Switch cat4500e, ASA, Mikrotik, Router 2900 dari bawah ke atas](https://images.hive.blog/DQmcKrKyiGhDJo6xozqr3dhvpV775JsbaeJaxRW2onf5Uy1/Gambar%203.1%20Multilayer%20Switch%20cat4500e,%20ASA,%20Mikrotik,%20Router%202900%20dari%20bawah%20ke%20atas.jpg)

<figcaption>Gambar 3.1 Multilayer Switch cat4500e, ASA, Mikrotik, Router 2900 dari bawah ke atas</figcaption>

</figure>

<figure>![Switch C3750e di masing-masing gedung](https://images.hive.blog/DQmUCmxa8wW7CZzD4NU7vmbvbWcu6MKeQtPiKZCTpAAoP21/Gambar%203.2%20Switch%20C3750e%20di%20masing-masing%20gedung.jpg)

<figcaption>Gambar 3.2 Switch C3750e di masing-masing gedung</figcaption>

</figure>

### 3.4 Recanan Konfigurasi

<figure>![Peta topologi jaringan](https://images.hive.blog/DQmR33e7opX5mTh9Zt47hQ8KgkUD5kxgvjEbDxNnQ6p9R6M/Gambar%203.3a%20Peta%20topologi%20jaringan.jpg) ![Peta topologi jaringan](https://images.hive.blog/DQmRZ7NFtKG2VBWJRfpJif9HUVZKgrGfwBBScV2X3DHy3cP/Gambar%203.3b%20Peta%20topologi%20jaringan.jpg)

<figcaption>Gambar 3.3 Peta topologi jaringan</figcaption>

</figure>

<table border="1"><caption>Tabel 3.3 Konfigurasi jaringan lokal</caption>

<thead>

<tr>

<th>Gedung</th>

<th>IP Switch</th>

<th>VLAN</th>

</tr>

</thead>

<tbody>

<tr>

<td>7</td>

<td>172.16.0.7/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Sekretariat DPRD</td>

<td>10</td>

</tr>

<tr>

<td>8</td>

<td>172.16.0.8/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Sekretariat Daerah</td>

<td>11</td>

</tr>

<tr>

<td>9</td>

<td>172.16.0.9/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Bina Marga dan Pengairan</td>

<td>12</td>

</tr>

<tr>

<td colspan="2">Dinas Cipta Karya</td>

<td>13</td>

</tr>

<tr>

<td>10</td>

<td>172.16.0.10/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Perhubungan Komunikasi dan Informatika</td>

<td>14</td>

</tr>

<tr>

<td colspan="2">Dinas Koperasi UKM Perindustrian dan Perdagangan</td>

<td>15</td>

</tr>

<tr>

<td>11</td>

<td>172.16.0.11/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Pertanian Perkebunan dan Kehutanan</td>

<td>16</td>

</tr>

<tr>

<td colspan="2">Dinas Peternakan Perikanan dan Kelautan</td>

<td>17</td>

</tr>

<tr>

<td>12</td>

<td>172.16.0.12/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Sosial dan Tenaga Kerja</td>

<td>18</td>

</tr>

<tr>

<td colspan="2">Dinas Kesehatan</td>

<td>19</td>

</tr>

<tr>

<td colspan="2">Dinas KB dan Keluarga Sejahtera</td>

<td>20</td>

</tr>

<tr>

<td>14</td>

<td>172.16.0.14/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Badan Kepegawaian Daerah dan Diklat</td>

<td>21</td>

</tr>

<tr>

<td colspan="2">Badan Perencanaan Pembangunan Daerah dan Litbang</td>

<td>22</td>

</tr>

<tr>

<td colspan="2">Inspektorat</td>

<td>23</td>

</tr>

<tr>

<td>15</td>

<td>172.16.0.15/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Badan Kesatuan Bangsa Politik dan PerlindunganMasyarakat</td>

<td>24</td>

</tr>

<tr>

<td colspan="2">Kantor Pemberdayaan Perempuan</td>

<td>25</td>

</tr>

<tr>

<td colspan="2">Satuan Kepolisian Pamong Praja</td>

<td>26</td>

</tr>

<tr>

<td>16</td>

<td>172.16.0.16/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Kebersihan dan Pertamanan</td>

<td>27</td>

</tr>

<tr>

<td colspan="2">Badan Lingkungan Hidup</td>

<td>28</td>

</tr>

<tr>

<td colspan="2">Badan Pemberdayaan Masyarakat Desa dan Pemdas</td>

<td>29</td>

</tr>

<tr>

<td>17</td>

<td>172.16.0.17/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Pendidikan Pemuda dan Olah Raga</td>

<td>30</td>

</tr>

<tr>

<td>Dinas Pariwisata</td>

<td></td>

<td>31</td>

</tr>

<tr>

<td>Dinas Kebudayaan</td>

<td></td>

<td>32</td>

</tr>

<tr>

<td>18</td>

<td>172.16.0.18/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Kependudukan dan Catatan Sipil</td>

<td>33</td>

</tr>

<tr>

<td>18a</td>

<td>172.16.0.118/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">Dinas Pendapatan / Pesedahan Agung</td>

<td>34</td>

</tr>

<tr>

<td>19</td>

<td>172.16.0.19/24</td>

<td></td>

</tr>

<tr>

<td colspan="2">LPSE</td>

<td>35</td>

</tr>

</tbody>

</table>

<table border="1"><caption>Tabel 3.4 Konfigurasi VLAN</caption>

<thead>

<tr>

<th>INTERFACE</th>

<th>IP ADDRESS</th>

<th>3750 (Trunk)</th>

<th>3750 (Access)</th>

<th>INTERFACE FISIK Catalysyt 4507R</th>

</tr>

</thead>

<tbody>

<tr>

<td>VLAN 10</td>

<td>172.16.10.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/4</td>

<td>Gi 1/1</td>

</tr>

<tr>

<td>VLAN 11</td>

<td>172.16.11.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/4</td>

<td>Gi 1/2</td>

</tr>

<tr>

<td>VLAN 12</td>

<td>172.16.12.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/3</td>

</tr>

<tr>

<td>VLAN 13</td>

<td>172.16.13.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/3</td>

</tr>

<tr>

<td>VLAN 14</td>

<td>172.16.14.1 / 24</td>

<td></td>

<td></td>

<td>Gi 2/13, 2/14</td>

</tr>

<tr>

<td>VLAN 15</td>

<td>172.16.15.1 / 24</td>

<td></td>

<td></td>

<td>Gi 2/15, 2/16, 2/17, 2/18, 2/19, 2/20</td>

</tr>

<tr>

<td>VLAN 16</td>

<td>172.16.16.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/4</td>

</tr>

<tr>

<td>VLAN 17</td>

<td>172.16.17.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/4</td>

</tr>

<tr>

<td>VLAN 18</td>

<td>172.16.18.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/5</td>

</tr>

<tr>

<td>VLAN 19</td>

<td>172.16.19.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/5</td>

</tr>

<tr>

<td>VLAN 20</td>

<td>172.16.20.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/5 - Gi 1/0/6</td>

<td>Gi 1/5</td>

</tr>

<tr>

<td>VLAN 21</td>

<td>172.16.21.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/6</td>

</tr>

<tr>

<td>VLAN 22</td>

<td>172.16.22.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/6</td>

</tr>

<tr>

<td>VLAN 23</td>

<td>172.16.23.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/5 - Gi 1/0/6</td>

<td>Gi 1/6</td>

</tr>

<tr>

<td>VLAN 24</td>

<td>172.16.24.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/7</td>

</tr>

<tr>

<td>VLAN 25</td>

<td>172.16.25.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/7</td>

</tr>

<tr>

<td>VLAN 26</td>

<td>172.16.26.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/5 - Gi 1/0/6</td>

<td>Gi 1/7</td>

</tr>

<tr>

<td>VLAN 27</td>

<td>172.16.27.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/8</td>

</tr>

<tr>

<td>VLAN 28</td>

<td>172.16.28.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/8</td>

</tr>

<tr>

<td>VLAN 29</td>

<td>172.16.29.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/5 - Gi 1/0/6</td>

<td>Gi 1/8</td>

</tr>

<tr>

<td>VLAN 30</td>

<td>172.16.30.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/2</td>

<td>Gi 1/9</td>

</tr>

<tr>

<td>VLAN 31</td>

<td>172.16.31.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/3 - Gi 1/0/4</td>

<td>Gi 1/9</td>

</tr>

<tr>

<td>VLAN 32</td>

<td>172.16.32.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/5 - Gi 1/0/6</td>

<td>Gi 1/9</td>

</tr>

<tr>

<td>VLAN 33</td>

<td>172.16.33.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/4</td>

<td>Gi 1/10</td>

</tr>

<tr>

<td>VLAN 34</td>

<td>172.16.34.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/4</td>

<td>Gi 1/11</td>

</tr>

<tr>

<td>VLAN 35</td>

<td>172.16.35.1 / 24</td>

<td>Gi1/1/1</td>

<td>Gi 1/0/1 - Gi 1/0/4</td>

<td>Gi 1/12</td>

</tr>

</tbody>

</table>

<table border="1"><caption>Tabel 3.5 Konfigurasi Internet</caption>

<thead>

<tr>

<th>Device</th>

<th>IP Address</th>

<th>IP Type</th>

<th>Interface</th>

</tr>

</thead>

<tbody>

<tr>

<td>CiscoMultilayer Switch cat4500e OUT</td>

<td>172.16.128.1/24</td>

<td>Local</td>

<td>Gi 2/48</td>

</tr>

<tr>

<td>Connect To</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Cisco ASA 2900IN</td>

<td>172.16.128.2/24</td>

<td>Local</td>

<td>Gi 0/0</td>

</tr>

<tr>

<td>Cisco ASA 2900OUT</td>

<td>192.168.101.1/24</td>

<td>Local</td>

<td>Gi 0/1</td>

</tr>

<tr>

<td>Connect To</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Mikrotik IN</td>

<td>192.168.101.2/24</td>

<td>Local</td>

<td>e1</td>

</tr>

<tr>

<td>Mikrotik OUT</td>

<td>192.168.253.1/24</td>

<td>Local</td>

<td>e8</td>

</tr>

<tr>

<td>Connect To</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Cisco Router2900 IN</td>

<td>192.168.253.2/24</td>

<td>Local</td>

<td>Gi 0/1</td>

</tr>

<tr>

<td>Cisco Router2900 OUT</td>

<td>202.46.10.130/24</td>

<td>Public</td>

<td>Gi 0/2</td>

</tr>

<tr>

<td>Connect To</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Modem</td>

<td>202.46.10.129/24</td>

<td>Public</td>

<td>e1</td>

</tr>

<tr>

<td>Connect To</td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Internet</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

## BAB 4 Pembahasan

### 4.1 Pendahuluan

Pada pembahasan dilakukan simulasi pemodelan dan konfigurasi ICT di Dinas Perhubungan Komunikasi dan Informatika, Pemerintah Kabupaten Badung dengan program Cisco Packet Tracer. Dilakukan simulasi karena konfigurasi ICT di Pemerintah Kabupaten Badung bersifat tetap dan tidak diperbolehkan untuk dikonfigurasi ulang atau dikonfigurasi lanjut. Oleh karena itu tahap konfigurasi disimulasikan di program Cisco Packet Tracer, digunakan program ini karena alat yang digunakan adalah Cisco. Konfigurasi ICT pada simulasi sama persis dengan konfigurasi ICT di lapangan. Hanya terdapat perbedaan pada model alat seperti dijelaskan pada BAB I subbab 1.5 Ruang Lingkup dan Batasan, dan perbedaan pada interface.

Pada subbab 4.2 Penyiapan Modem adalah pemodelan IP public dimana hanya alamat IP tertentu yang dapat terkoneksi. Pada subbab 4.3 Konfigurasi Jaringan Menuju Internet adalah tahap konfigurasi ICT dari alat Cisco Multilayer Switch sampai Modem. Pada subbab 4.4 Konfigurasi NAT adalah konfigurasi konversi alamat IP lokal ke alamat IP publik. Pada subbab 4.5 Konfigurasi Jaringan Lokal adalah konfigurasi dari alat Cisco Multilayer Switch ke Cisco Switch di masing-masing Gedung. Subbab 4.6 Tes Koneksi adalah pengujian koneksi menggunakan aplikasi ping.

### 4.2 Penyiapan Modem

Pembahasan konfigurasi jaringan akan sekaligus dijelaskan pada simulasi Cisco Packet Tracer. Pertama dibuat topologi jaringan. Mulai dari modem dikonfigurasi alamat IP di modem (walaupun modem bukan perangkat cisco, tetapi dibikin konfigurasinya mendekati dengan fungsi aslinya). Berdasarkan tabel 3.5, alamat IP digerbang masuk modem adalah 202.46.10.129/24\. Routing yang digunakan seluruh router adalah RIP (Routing Information Protocol) versi 2\. Spanning-tree telah terkonfigurasi secara automatis yaitu PVST.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/1-sample-topology-and-access-list-packet/60205a55eea2dcab13515b068a2041cdde14814b?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

<figure>![Topologi Jaringan](https://images.hive.blog/DQme951hsSEtEK4VHhDKZdnnrFUE5aTQ2TxuNctQd1WYzxk/Gambar%204.1%20Topologi%20Jaringan.jpg)

<figcaption>Gambar 4.1 Topologi Jaringan</figcaption>

</figure>

<figure>![Mengkonfigurasi Modem](https://images.hive.blog/DQmNbvZNf5cJ46aG2svBfHhoXEKCZRoXVLk9bS51WtigJx3/Gambar%204.2%20Mengkonfigurasi%20Modem.png)

<figcaption>Gambar 4.2 Mengkonfigurasi Modem</figcaption>

</figure>

*   Untuk masuk ke router diperlukan perintah “enable”.
*   Untuk mulai konfigurasi alamat IP pada interface dengan masuk ke “configure terminal”.
*   Perintah “hostname Modem” untuk memberi nama.
*   Perintah “access-list 1 permit 202.46.10.130” ditambah dengan “access-list 1 deny any” agar menyerupai keadaan dilapangan dikonfigurasi agar hanya alamat IP 202.46.10.130/24 yang bisa masuk.
*   Untuk mengkonfigurasi suatu interface masuk ke interfacenya terlebih dahulu dengan perintah “ interface fastethernet 0/0” ( interface fastethernet 0/0 merupakan interface yang terhubung dengan router Internet pada simulasi ini).
*   Diberikan alamat IP dengan perintah “ip address 202.46.10.129 255.255.255.0”, perintah “ip access-group 1” agar memberlakukan access-list 1.
*   Untuk menghidupkan interface dengan perintah “no shutdown”.
*   Terakhir perintah “end” untuk keluar dari configuration dan perintah “write” untuk menyimpan konfigurasi.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/2-debugging-and-password-packet-tracer/e42f032ebec7a7d788d30d301fca62c5bd3c0e35?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

### 4.3 Konfigurasi Jaringan Menuju Internet

<div class="video-container"><iframe src="https://lbry.tv/$/embed/3-setting-ip-address-on-interfaces/d85d332a22a1ab4d2d9f9a9baf61934199b05598?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Selanjutnya konfigurasi router Internet. Menurut tabel 3.5 interface Internet menuju Modem dengan alamat IP 202.46.10.130/24 (di simulasi interface fastethernet 0/1), sedangkan interface dari Internet ke Mikrotik memiliki alamat IP 192.168.253.2/24 (di simulasi interface fastethernet 0/0). Cara konfigurasi sama seperti memberi alamat IP pada Modem, tetapi tidak melakukan “access-list”.

<figure>![Mengkonfigurasi Router Internet](https://images.hive.blog/DQmPjAU5LDcwNDXrWYS9GijVUfpWFXA4aGZ6315wu5tdPpB/Gambar%204.3%20Mengkonfigurasi%20Router%20Internet.png)

<figcaption>Gambar 4.3 Mengkonfigurasi Router Internet</figcaption>

</figure>

*   Tambahan untuk konfigurasi ini, perintah “no service password-encryption” untuk menghilangkan enkripsi password. Perintah “service timestamps debug datetime msec” dan “service timestamps log datetime msec” agar mencatat setiap kali terjadi perubahan konfigurasi.
*   Perintah “enable password cisco” dan “enable secret cisco” memberi password “cisco” dan secret “cisco” dimana diperlukan untuk telnet login. Perintah “line vty 0 4” dilanjuti dengan “password cisco” dan “login” untuk mengaktifkan telnet server dengan password “cisco”.
*   “Exit” untuk keluar dari suatu konfigurasi. Untuk routing digunakan RIP versi 2 dimana versi 2 mendukung classless routing (tidak terbatas kelas A, B, atau C) sedangkan versi 1 hanya bisa class routing, misalnya jaringan 192.168.10.0 langsung terbaca 192.168.10.0/24 padahal yang diinginkan 192.168.10.0/26 atau lainnya. “Redistribute static” berarti meneruskan static route bila ada konfigurasi static route. “No auto-summary” untuk tidak mengaktifkan auto-summary yang fungsinya class routing yaitu langsung membaca alamat IP apakah dia tergolong kelas A, B, atau C, auto-summary hanya bisa dimatikan pada RIP versi 2, dan tidak bisa di versi 1\. Perintah “network 192.168.253.0” untuk menambah informasi jaringan tetangganya. Menurut Stallings mengenai RIP di BAB 2 masing-masing router akan bertukar informasi dengan router tetangganya agar dapat memilih jalur. Perintah tersebut merupakan perintah untuk memperkenalkan tetangganya. Tidak dilakukan RIPv2 pada jaringan 202.46.10.0/24 karena diumpamakan bersifat modem.
*   Oleh karena itu dilakukan ditambahkan static route untuk menuju jaringan Internet dengan perintah “ip route 0.0.0.0 0.0.0.0 202.46.10.129”.
*   Pada masing-masing interface ditambah “ip virtual-reassembly” untuk mencegah penyerangan yang memanfaatkan waktu dan memory dibutuhkan untuk menyusun paket data.
*   Secara keseluruhan konfigurasi router ini diserupai dengan konfigurasi Cisco Router 2900\. Cara konfigurasinya adalah konfigurasi gambar 4.2 ditambah dengan konfigurasi gambar 4.3 berdasarkan data tabel 3.5.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/4-ripv2-and-static-routing-packet-tracer/d2c19a4996589fdf4c521f1b04887a577873b8a6?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Pada laporan ini tidak dibahas mengenai konfigurasi mikrotik, oleh sebab itu pada simulasi ini cara konfigurasi router yang bernama mikrotik sama dengan cara konfigurasi router yang bernama Internet. Menurut tabel 3.5 interface yang menuju Internet (fastethernet 0/1) diberi alamat IP 192.168.253.1/24\. Dalam suatu koneksi contohnya antara interface Internet dan Mikrotik harus berada pada network ID yang sama. 192.168.253.1/24 (dari Mikrotik) dan 192.168.253.2/24 (dari Internet), menurut Sutanta pada teori IP address di BAB 2 berada pada network ID yang sama yaitu 192.168.253.0/24\. Interface menuju ASA memiliki alamat IP 192.168.101.2/24\. RIPv2 adalah “network 192.168.253.0” dan “network 192.168.101.0”.

Cisco ASA merupakan perangkat untuk firewall. Pada laporan ini tidak dibahas mengenai keamanan data, oleh karena itu dalam simulasi ini cara konfigurasi Cisco ASA sama dengan cara konfigurasi Router Internet. Menurut tabel 3.5 interface menuju Mikrotik memiliki alamat IP 192.168.101.1/24, menurut Sutanta 192.168.101.2/24 dan 192.168.101.1/24 berada pada jaringan yang sama yaitu 192.168.101.0/24\. Interface menuju NOC (Cisco multilayer switch cat4500e dilapangan) memiliki alamat IP 172.16.128.2/24\. RIPv2 adalah “network 192.168.101.0” dan “network 172.16.0.0”. “Network 172.16.0.0” digunakan karena menurut tabel 3.4 NOC akan memiliki jaringan IP 172.16.0.0/24, 172.16.16.10.0/24 – 172.16.35.0/24, dan 172.16.128.0/24\. Oleh karena itu RIPv2 “Network 172.16.0.0” akan mengenai alamat IP 172.16.0.0 – 172.16.255.255.

Cara konfigurasi router Internet dilakukan di Multilayer Switch NOC (Cisco Multilayer Switch cat4500e di lapangan). Terdapat sedikit perbedaan. Secara default NOC semua interface di NOC berfungsi sebagai switch.

*   Untuk memberi alamat IP interface menuju ASA (gigabitethernet 0/1) yaitu mode switch dimatikan dengan perintah “no switchport”. Lalu dilanjuti dengan pemberian alamat IP menurut tabel 3.5 dengan perintah “ip address 172.16.128.1 255.255.255.0” dan perintah “no shutdown” untuk menghidupkan.
*   RIPv2 adalah “network 172.16.0.0”, hanya 172.16.0.0 – 172.16.255.255 yang terkoneksi menurut tabel 3.4.
*   Diasumsi dapat menuju jaringan Internet seperti di lapangan, diberikan static route dengan perintah “ip route 0.0.0.0 0.0.0.0 172.16.128.2”, artinya menuju kesegala alamat IP 0.0.0.0 dengan segala subnet mask 0.0.0.0 melalui 172.16.128.2 yaitu alamat IP interface di ASA terhubung dengan NOC.
*   Pada simulasi ini diperlukan perintah “ip routing” untuk mengaktifkan routing.

<figure>![Mengkonfigurasi Router Internet](https://images.hive.blog/DQmVr9aaF4rCvR3yjtqnsu5rLhhgwRtYhaRdjFo4PyK2cvS/Gambar%204.4%20Mengkonfigurasi%20NOC.png)

<figcaption>Gambar 4.4 Mengkonfigurasi NOC</figcaption>

</figure>

### 4.4 Konfigurasi NAT (Network Address Translation) pada Cisco Router 2900

<div class="video-container"><iframe src="https://lbry.tv/$/embed/5-network-address-translation-nat-packet/9ea99a9cda93a52a962b629d513059db53b264ad?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

<figure>![Pengujian koneksi menggunakan PING dari NOC](https://images.hive.blog/DQmRyBN17pg23qr8CCZHCYD8TbsUQC1Bo7UNnvhyFdjnAA2/Gambar%204.5%20Pengujian%20koneksi%20menggunakan%20PING%20dari%20NOC.png)

<figcaption>Gambar 4.5 Pengujian koneksi menggunakan PING dari NOC</figcaption>

</figure>

Berdasarkan semua konfigurasi diatas belum cukup untuk mengkoneksi dari NOC ke Modem. NOC menuju, ASA, Mikrotik, dan Internet dapat terkoneksi namun tidak ke Modem. Secara kenyataan dilapangan hanya alamat IP 202.46.10.130 yang bisa masuk.

<figure>![Router Internet dapat terkoneksi dengan Modem](https://images.hive.blog/DQmTSJMwMxGKQab9WmUvufr89nPVZkDbC5yhqH97LxQEqFk/Gambar%204.6%20Router%20Internet%20dapat%20terkoneksi%20dengan%20Modem.png)

<figcaption>Gambar 4.6 Router Internet dapat terkoneksi dengan Modem</figcaption>

</figure>

Menurut tabel 3.5 terdapat 2 IP public yaitu pada Internet dan Modem. Agar dapat terkoneksi dengan Modem maka alamat IP yang masuk harus dikonversi menjadi 202.46.10.130.

<figure>![Konfigurasi NAT pada Router Internet](https://images.hive.blog/DQmPGWXxp82BYcXanogqQRQyJHLuvV4yH5T2pwtVv2o6cxg/Gambar%204.7%20Konfigurasi%20NAT%20pada%20Router%20Internet.png)

<figcaption>Gambar 4.7 Konfigurasi NAT pada Router Internet</figcaption>

</figure>

*   Pertama harus dibikin daftar akses yang memperbolehkan semua untuk masuk dengan perintah “access-list 2 permit any”, nama akses disini adalah access-list 2.
*   Perintah “ip nat inside source list 2 interface fastethernet 0/1 overload” adalah perintah untuk melakukan NAT (Network Address Translation). Ip nat inside mengkonversi alamat IP yang masuk dari router Internet, berdasarkan access-list 2 (source list 2) dikonversi untuk keluar melalui interface fastethernet 0/1, yaitu dikonversi menjadi alamat IP yang dipasang pada interface tersebeut (202.46.10.130), perintah overload agar segala jenis alamat IP yang masuk dikonversi menjadi 1 alamat IP.
*   Setelah itu perlu dipasang dari interface masuknya paket data (fastethernet 0/0) “ip nat inside”, dan pada interface keluarnya paket data (fastethernet 0/1) “ip nat outside”. Konfigurasi untuk menuju jaringan Internet (keluar dari Modem) telah diselesaikan.

<figure>![Pengujian koneksi dengan PING dari NOC ke Modem](https://images.hive.blog/DQmR9BNQdbuiuzWY2bfWTgeEYaHpWXQtdqqw9q5nveiQhtm/Gambar%204.8%20Pengujian%20koneksi%20dengan%20PING%20dari%20NOC%20ke%20Modem.png)

<figcaption>Gambar 4.8 Pengujian koneksi dengan PING dari NOC ke Modem</figcaption>

</figure>

### 4.5 Konfigurasi Jaringan Lokal

Konfigurasi terakhir adalah pada LAN (Local Area Network), yaitu konfigurasi menghubung semua Cisco switch c3700e di semua gedung menuju Multilayer Switch cat4500e di gedung 10 (NOC). Pemberian identitas VLAN per gedung dan per dinas berdasarkan tabel 3.3\. Pada konfigurasi ini dibuat interface masing-masing VLAN di NOC dengan alamat IP berdasarkan tabel 3.4 dan pada tabel tersebut tersedia informasi pemasangan VLAN pada beberapa interface di switch masing-masing gedung. Untuk cara konfigurasi switch masing-masing gedung sama. Maka pada penulisan ini akan ditampilkan konfigurasi lokal NOC dan hanya 2 konfigurasi switch dari 2 gedung.

<figure>![Pengujian koneksi dengan PING dari NOC ke Modem](https://images.hive.blog/DQmQve3HVGPSyTpQuMzS1UdAzKDHV8v8WEQwUjEzgmGb71V/Gambar%204.9%20Topologi%20jaringan%20lokal.png)

<figcaption>Gambar 4.9 Topologi jaringan lokal</figcaption>

</figure>

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmTnR5tnY824HtTXvqJfBsEtrB5TJ53Kd2PFbDi2S48bgv/Gambar%204.10%20Konfigurasi%20lokal%20pada%20NOC%201.png)

<figcaption>Gambar 4.10 Konfigurasi lokal pada NOC 1</figcaption>

</figure>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/7-vlan-database-packet-tracer-puspem/5942a700fbb7c56bd7ac90b22937b9c0554554f7?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Tergantung perangkat, perintah “VLAN database” dapat dikonfigurasi sebelum configure terminal atau pada configure terminal, perintah ini untuk masuk ke pengaturan VLAN. Setelah itu dimasukan perintah “vlan 10” untuk menambah VLAN 10\. Penambahan VLAN dilakukan berdasarkan tabel 3.3 dan tabel 3.4, penambahan VLAN 10 – VLAN 35.

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmUu3zDfZQaY6GCiLRzPLG1m2zpTUWjWyuxYvVQFovCRF3/Gambar%204.11%20Konfigurasi%20lokal%20pada%20NOC%202.png)

<figcaption>Gambar 4.11 Konfigurasi lokal pada NOC 2</figcaption>

</figure>

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmUUnhxxknzM2Zt1n3bz6Dj1EEk4YPBf4TQRwQ6PZEUmAw/Gambar%204.12%20Konfigurasi%20lokal%20pada%20NOC%203.png)

<figcaption>Gambar 4.12 Konfigurasi lokal pada NOC 3</figcaption>

</figure>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/6-vlan1-and-default-gateway-of-switch/aba2efe7ca0dd12001210137363c99da82957a24?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Pemberian alamat IP pada interface VLAN 1 merupakan suatu cara untuk memberian alamat IP pada perangkat. Menurut tabel 3.3 alamat IP pada NOC adalah 172.16.0.10/24\. Perintah “interface range fastethernet 0/1 – 12” adalah cara untuk masuk ke fastethernet 0/1 – fastethernet 0/12 sekaligus. Direncanakan pada interface tersebut (terbuhubung ke switch masing-masing gedung) agar semua ID VLAN bisa lewat. Maka perintahnya adalah “switchport mode trunk”, ada switch yang harus diberi perintah “switchport trunk encapsulation dot1Q” yaitu merupakan standar IEEE (Intitute Electrical Electronic Engineer) 802.1Q, untuk standar VLAN. Menurut tabel 3.4 interface VLAN 10-35 diberikan alamat IP.

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmZtzZJ5juHNjaBG6QRhNVtnRj3Hbt8SM7wv2PjTmEmTw7/Gambar%204.13%20Konfigurasi%20lokal%20pada%20switch%20Gedung%207.png)

<figcaption>Gambar 4.13 Konfigurasi lokal pada switch Gedung 7</figcaption>

</figure>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/8-virtual-local-area-network-vlan-on/689688c652f399c159fa886239a1488180e36217?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Baris awal merupakan konfigurasi umum yang dilakukan pada semua perangkat yaitu, service timestamps, service password-encryption, line vty 0 4 (telnet login), pemasangan secret (password MD5), pemasangan pada interface VLAN 1\. Interface gigabitethernet 1/1 merupakan interface yang terkoneksi dengan NOC. Agar semua VLAN bisa masuk maka dengan perintah “switchport mode trunk”. Berdasarkan tabel 3.4 interface fastethernet 0/1-4 diberikan pemasukan hanya VLAN 10 yaitu dengan perintah “inteface range fastethernet 0/1 – 4”, “switchport mode access”, dan “switchport access vlan 10”. Pada simulasi ini agar VLAN 1 pada masing – masing gedung terkoneksi maka masing-masing switch diberi default-gateway dengan perintah “ip default-gateway 172.16.0.10” yaitu default route ke VLAN 1 NOC.

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmPoBESRTY3A6nXwLNhRkmT1TrWHutii4pwTjhujrYD162/Gambar%204.14%20Pemberian%20default-gateway%20pada%20switch%20Gedung%207.png)

<figcaption>Gambar 4.14 Pemberian default-gateway pada switch Gedung 7</figcaption>

</figure>

Selanjutnya konfigurasi pada switch Gedung 12\. Caranya sama seperti Gedung 7, menurut tabel 3.3 dan 3.4 dipasang VLAN 18-20\. Untuk konfigurasi switch yang lain caranya sama. Maka konfigurasi selesai, untuk melihat hasil konfigurasi dapat mengetik perintah “show running-config”.

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmWWf7j9agg5tvpnFXbYZCz8iX6wXt4aEkmDGTp2ZtZYvk/Gambar%204.15%20Konfigurasi%20lokal%20pada%20switch%20Gedung%2012%201.png)

<figcaption>Gambar 4.15 Konfigurasi lokal pada switch Gedung 12 1</figcaption>

</figure>

<figure>![Konfigurasi lokal pada NOC 1](https://images.hive.blog/DQmRGA2S4VspHPvh2tLtK3Ft6YHRqD65DiG4b8y4znU8AWm/Gambar%204.16%20Konfigurasi%20lokal%20pada%20switch%20Gedung%2012%202.png)

<figcaption>Gambar 4.16 Konfigurasi lokal pada switch Gedung 12 2</figcaption>

</figure>

### 4.6 Pengujian Koneksi

<div class="video-container"><iframe src="https://lbry.tv/$/embed/9-connection-testing-packet-tracer/885a09364ff00907dd70aa7adff2d4a533395608?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" frameborder="0" allowfullscreen=""></iframe></div>

Pada penulisan ini hanya ditulis beberapa pengujian. Pertama dipasang komputer pada switch Gedung 7 pada interface fastethernet0/1\. Setelah itu dikonfigurasi dan melakukan ping ke interface VLAN 10 dan Modem. Setelah itu telnet ke NOC dan switch Gedung 12.

<figure>![Konfigurasi IP PC0](https://images.hive.blog/DQmRmRXwVxysvi5LzpbE2tVx7tyBVPHdR5pLoAVEFAXxUZU/Gambar%204.17%20Konfigurasi%20IP%20PC0.png)

<figcaption>Gambar 4.17 Konfigurasi IP PC0</figcaption>

</figure>

<figure>![PING dari PC0 ke VLAN 10 dan Modem](https://images.hive.blog/DQmetVBD6eQEvs4oyirwDEJ4eFFYSXegW19ZXzCj7CoX2cV/Gambar%204.18%20PING%20dari%20PC0%20ke%20VLAN%2010%20dan%20Modem.png)

<figcaption>Gambar 4.18 PING dari PC0 ke VLAN 10 dan Modem</figcaption>

</figure>

<figure>![Telnet dari PC0 ke NOC dan switch Gedung 12](https://images.hive.blog/DQmbHNfXPGN7ZqzzFyAiASWsgyoKWFkKsH6gnF9hbj3NCNM/Gambar%204.19%20Telnet%20dari%20PC0%20ke%20NOC%20dan%20switch%20Gedung%2012.png)

<figcaption>Gambar 4.19 Telnet dari PC0 ke NOC dan switch Gedung 12</figcaption>

</figure>

<figure>![Konfigurasi IP Laptop0](https://images.hive.blog/DQmbnmkTekg7qQzG5U3Asf3u1GVuqtkuRGNVDHWc45dvi2E/Gambar%204.20%20Konfigurasi%20IP%20Laptop0.png)

<figcaption>Gambar 4.20 Konfigurasi IP Laptop0</figcaption>

</figure>

<figure>![PING dari Laptop0 ke NOC dan Modem](https://images.hive.blog/DQmRi2DBB1J6vcy8TxMZsBZVhcA5DEMMfrPzdCt9nsnPSC5/Gambar%204.21%20PING%20dari%20Laptop0%20ke%20NOC%20dan%20Modem.png)

<figcaption>Gambar 4.21 PING dari Laptop0 ke NOC dan Modem</figcaption>

</figure>

<figure>![Telnet dari Laptop0 ke switch Gedung 7 dan NOC](https://images.hive.blog/DQmQLD9ngymT4cnq7Nkfz2WSugT1qPfug7nBR3cMb5HAVB8/Gambar%204.22%20Telnet%20dari%20Laptop0%20ke%20switch%20Gedung%207%20dan%20NOC.png)

<figcaption>Gambar 4.22 Telnet dari Laptop0 ke switch Gedung 7 dan NOC</figcaption>

</figure>

## BAB 5 Penutup

### 5.1 Simpulan

Topologi pada jaringan ini adalah tree. Pada jaringan lokal terdiri dari 12 switch dan 1 multilayer switch. Semua gedung terkoneksi ke gedung 10\. Masing-masing dinas berada pada 1 VLAN ID. Total VLAN yang digunakan adalah 25 dari VLAN 10 – Vlan 35, dengan network ID 172.16.10.0/24-172.16.35.0/24\. Pemasangan suatu VLAN ID dilakukan di 1 multilayer switch di gedung 10 dan 12 switch semua gedung. Port yang terkoneksi dari 12 switch ke multilayer switch adalah mode trunk dimana agar semua VLAN ID bisa masuk. Masing-masing switch dan multilayer switch diberi alamat IP pada VLAN 1 seolah-olah pemberian alamat IP pada perangkat tersebut.

Dari multilayer switch menuju jaringan Internet harus melewati ASA, Mikrotik, Router, dan Modem. Port multilayer switch menuju jaringan Internet berfungsi sebagai router sehingga mode switchport dimatikan dan diberi alamat IP. Setelah itu mode routing diaktifkan, untuk ke jaringan Internet menggunakan static routing sedangkan untuk intern digunakan dynamic routing RIPv2\. Begitu juga di ASA, Mikrotik, dan Router. Pada Router diberi 1 IP public. Semua yang masuk ke Router menuju modem, lalu ke jaringan Internet, alamat IP private di konversi menjadi IP public dengan NAT.

Untuk kepentingan pengolahan semua perangkat diaktifkan log dan debug untuk pemberitahuan jika ada perubahana pada perangkat. Secret dan password diaktfikan untuk kepentingan telnet. Telnet server diaktifkan agar dapat remote login.

### 5.2 Saran

Saran yang dapat disampaikan adalah untuk meningkatkan kualitas dari konfigurasi jaringan.

*   Saran pertama adalah pemasangan alamat IP point-to-point seperti dari multilayer switch menuju ASA. Network ID 172.16.128.0/24 dimana terjadi pemborosan alamat IP. Alamat IP yang digunakan dengan subnet mask tersebut (255.255.255.0) adalah 254 alamat IP sedangkan yang diperlukan adalah 2 alamat IP. Maka sebaiknya 172.16.128.0/30 yaitu dengan subnet mask 255.255.255.252\. Disarankan pada pengaturan lainnya dilakukan penghematan alamat IP dengan subnet mask.
*   Saran kedua adalah memberi label pada masing-masing port untuk kejelasan keterangan fungsi port tersebut.
*   Saran terakhir adalah pada VLAN. Lebih mudah bila multilayer switch dijadikan VTP server sedangkan yang lain VTP client sehingga cukup konfigurasi VLAN di multilayer switch. Lebih baik masing-masing VLAN ID diberi nama agar ada keterangan pada perangkat mengenai yang menggunakan VLAN tersebut.

## Daftar Pustaka

*   Burgess, M. 2004\. Principles of Network and System Administration. John Wiley & Sons, Ltd. : Chicester
*   Cisco. 2004\. Catalyst 4500 Series Switch Cisco IOS Software Configuration Guide. Cisco Systems, Inc : San Jose.
*   Gebali, F. 2008\. Analysis of Computer and Communication Networks. Springer Science + Business Media : New York
*   Inixindo, S. 2005\. Workshop Basic Internetworking. Graha Pena : Surabaya
*   Peterson, L. Davie, B. 2003\. Computer Networks Third Edition. Morgan Kaufmann : San Fancisco
*   Stallings, W. 1998\. High-Speed Networks TCP/IP and ATM Design Principles. Prentice-Hall, Inc. : New Jersey.
*   Sutanta, E. 2005\. Komunikasi Data & Jaringan Komputer. Graha Ilmu : Yogyakarta.
*   The Internet Center. 2013\. [http://www.incentre.net/ethernet-wiring-diag.html](http://www.incentre.net/ethernet-wiring-diag.html). Diakses 24 Juli 2013.
*   Western Telematic Inc. 2013\. [http://www.wti.com/p-236-72-3383-01-cisco-rollover-console-cable-blue-db9-to-rj45-6.aspx](http://www.incentre.net/ethernet-wiring-diag.html). Diakses 24 Juli 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jarin-xejwxye?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jarin-xejwxye?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/10/31/laporan-kerja-praktek-puspem-badung-2013](https://0fajarpurnama0.github.io/bachelor/2020/10/31/laporan-kerja-praktek-puspem-badung-2013)
*   [https://0fajarpurnama0.medium.com/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-b78acbe558a0](https://0fajarpurnama0.medium.com/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-b78acbe558a0)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/laporan-kerja-praktek-puspem-badung-2013](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/laporan-kerja-praktek-puspem-badung-2013)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/simulasi-konfigurasi-jaringan-ict.html](https://0darkking0.blogspot.com/2020/11/simulasi-konfigurasi-jaringan-ict.html)
*   [https://hive.blog/indonesian/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/88-simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten-badung](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/88-simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten-badung)
*   [https://steemit.com/indonesian/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten-badung](http://0fajarpurnama0.weebly.com/blog/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-center-pemerintah-kabupaten-badung)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-cente](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simulasi-konfigurasi-jaringan-ict-berbasis-konfigurasi-jaringan-eksisting-di-network-operation-cente)
*   [https://read.cash/@FajarPurnama/simulasi-konfigurasi-jaringan-ict-di-network-operation-center-pemerintah-kabupaten-badung-ba85d889](https://read.cash/@FajarPurnama/simulasi-konfigurasi-jaringan-ict-di-network-operation-center-pemerintah-kabupaten-badung-ba85d889)