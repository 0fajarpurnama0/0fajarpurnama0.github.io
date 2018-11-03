$("#pndlkteuu").click(function(){
    $(".grid-content").html(`

<a href="http://www.mediafire.com/folder/75ch52n5knqcg/Nagios">http://www.mediafire.com/folder/75ch52n5knqcg/Nagios</a>
<h2>BAB I PENDAHULUAN</h2>

<h3>1.1 Latar Belakang</h3>

<p>Nagios suatu server untuk memantau keaadaan jaringan. Pada umumnya yang dipantau adalah host menggunakan service-service seperti check_ping, check_uptime, check_mrtgtraf dan service-service lainnya. Keunggulan pada nagios adalah pemantauannya dapat dilihat melalui halaman web (melalui port 80 http). Sehingga pemantau dapat memantau dari jarak jauh.</p> <br />

<p>Kini nagios core telah mencapai versi 3.5 dan nagios plugin 1.6. Nagios telah mendukung semua distribusi Linux, tetapi belum mendukung untuk Windows. Selain itu disediakan tutorial installasi dan langkah-langkah awal di situs web resmi nagios.</p> <br />

<p>Awalnya penulis belum pernah menggunakan nagios untuk memantau. Penulis berkeinginan untuk mengetahui bagaimana kualitas nagios menurut padangan penulis secara pribadi.</p> <br />

<p>Untuk bahan pemantauan disediakan 10 komputer dan 1 switch di laboratorium komputer, Teknik Elektro, Universitas Udayana. Pada percobaan ini akan dicoba menggunakan nagios untuk memantau 10 komputer dan 1 switch di labkom, selain itu juga memantau diri sendiri (localhost) dan 1 linux server melalui jaringan Internet, yaitu <a href="https://elearning.unud.ac.id">https://elearning.unud.ac.id</a></p>

<h3>1.2 Rumusan Masalah</h3>

<p>Bagaimana kualitas menurut pandangan secara pribadi penggunaan nagios untuk memonitor komputer dan switch di lab komputer, Teknik Elektro, Universitas Udayana?</p>

<h3>1.3 Tujuan</h3>

<p>Mengetahui bagaimana penggunaan nagios di lab komputer, Teknik Elektro, Universitas Udayana.</p>

<h3>1.4 Manfaat</h3>

<ol>
<li>Memberi umpan balik mengenai layaknya dibangun nagios di lab komputer.</li>
<li>Penggunaan nagios dapat diterapkan di tempat lain.</li>
</ol>

<h3>1.5 Ruang Lingkup dan Batasan</h3>
<ol>
<li>Memantau RTA (Round Trip Average), dan beberapa service-service di layer aplikasi pada OSI model.</li>
<li>Bahan yang dipantau adalah host berupa Windows, Linux, dan switch cisco.</li>
</ol>

<h2>BAB II TINJAUAN PUSTAKA</h2>

<h3>2.1 Nagios</h3>

<p>Nagios adalah sistem pemantauan yang kuat yang memungkinkan organisasi untuk mengidentifikasi dan menyelesaikan masalah IT infrastruktur sebelum mereka mempengaruhi proses bisnis penting.</p> <br />

<p>Pertama kali diluncurkan pada tahun 1999, nagios telah berkembang untuk memasukkan ribuan proyek yang dikembangkan oleh komunitas nagios seluruh dunia. Nagios secara resmi disponsori oleh nagios Enterprises, yang mendukung masyarakat dalam sejumlah cara yang berbeda melalui penjualan produk dan layanan komersial.</p> <br />

<p>Nagios memonitor seluruh infrastruktur TI untuk memastikan sistem, aplikasi, layanan, dan proses bisnis yang berfungsi dengan baik. Dalam hal kegagalan, nagios dapat mengingatkan staf teknis dari masalah, yang memungkinkan mereka untuk memulai proses remediasi sebelum mempengaruhi proses bisnis, pengguna akhir, atau pelanggan. Dengan Nagios tidak akan pernah meninggalkan harus menjelaskan mengapa pemadaman infrastruktur terlihat menyakiti bottom line organisasi (Nagios, 2013).</p>

<h3>2.2 Ping</h3>

<p>Ping adalah nama dari sebuah utilitas perangkat lunak standar (tool) digunakan untuk menguji koneksi jaringan. Hal ini dapat digunakan untuk menentukan apakah perangkat remote (seperti Web atau server game) dapat dicapai melalui jaringan dan, jika demikian, latency koneksi ini. Alat Ping adalah bagian dari Windows, Mac OS X dan Linux serta beberapa router dan konsol game.</p> <br />

<p>Kebanyakan alat ping menggunakan Internet Control Message Protocol (ICMP). Mereka mengirim pesan permintaan ke alamat jaringan target secara berkala dan mengukur waktu yang dibutuhkan untuk pesan respon tiba. Alat-alat ini biasanya mendukung opsi seperti, berapa kali untuk mengirim permintaan, seberapa besar pesan permintaan untuk mengirim, berapa lama untuk menunggu untuk setiap jawaban. Output dari ping bervariasi tergantung pada alat. Hasil standar termasuk, alamat IP komputer yang merespons, jangka waktu (dalam milidetik) antara mengirim permintaan dan menerima respon, indikasi berapa banyak jaringan hop antara meminta dan menanggapi komputer, pesan kesalahan jika komputer target tidak merespon (Mitchell, 2013).</p>

<h2>BAB III METODE DAN MATERI</h2>

<h3>3.1 Tempat dan Waktu</h3>

<p>Percobaan dilakukan di Lab Komputer, Teknik Elektro, Universitas Udayana pada tanggal 13 April 2013 sampai 19 April 2013.</p>

<h3>3.2 Alat</h3>

<table border="1">
<caption>Tabel 3.1 Alat yang digunakan</caption>
<tr>
<th>NO</th>
<th>Alat</th>
<th>Spesifikasi</th>
</tr>
<tr>
<td>1</td>
<td>Laptop ACER</td>
<td>Intel® Pentium® dual-core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
Mobile Intel® Graphics Media Accelerator 4500MHD
1GB DDR2
128 WXGA Acer CrystalBriteTM LCD
250GB HDD
Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
Atheros Communications Inc. AR928X Wireless Network Adapter
Operating System Linux Backtrack 5 R3</td>
</tr>
<tr>
<td>2</td>
<td>Software</td>
<td>Apache2, php5, Nagios Core 3.5, Nagios Plugin 1.5</td>
</tr>
</table>

<h3>3.3 Bahan</h3>

<table border="1">
<caption>Tabel 3.2 Bahan yang diteliti</caption>
<tr>
<th>NO</th>
<th>Bahan</th>
<th>Spesifikasi</th>
</tr>
<tr>
<td>1</td>
<td>12 buah PC</td>
<td>Intel® Pentium® dual-core processor
1GB RAM
128MB VGA
100GB HDD
10 Operating System Windows Tiny XP
2 Operating System Linux Ubuntu 12.04 lts</td>
</tr>
<tr>
<td>2</td>
<td>Cisco Switch</td>
<td>16 port</td>
</tr>
<tr>
<td>3</td>
<td><a href="https://elearning.unud.ac.id">https://elearning.unud.ac.id</a></td>
<td>Linux Server</td>
</tr>
<tr>
<td>4</td>
<td>Laptop ACER</td>
<td>Sama seperti di bagian alat</td>
</tr>
</table>

<h3>3.4 Cara</h3>

<h4>3.4.1 Instalasi Nagios</h4>

<p>Instalasi nagios dapat dilihat di <a href="http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html">http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html</a></p>

<h4>3.4.2 Mengatur Nagios</h4>

<p>Contoh pengaturan nagios dapat dilihat di <a href="http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html">http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html</a>.</p>

<h4>3.4.3 Instalasi MRTG</h4>

<p>Instalasi MRTG dapat dilihat di <a href="https://help.ubuntu.com/community/MRTG">https://help.ubuntu.com/community/MRTG</a>.</p>

<h4>3.4.4 Mengatur Koneksi Jaringan</h4>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/2fe0f25d-9358-4902-9584-cc1e83e3a3f7-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.1 Kondisi jaringan di lab komputer</figcaption>
</figure>

<p>Nagios server adalah laptop dengan IP 192.168.0.1. IP 192.168.0.2 dan 192.168.0.3 adalah PC dengan sistem operasi Ubuntu lts 12.04. Sedangkan PC lainnya adalah sistem operasi Windows Tiny XP. Untuk semua PC memiliki default gateway 192.168.0.1. Laptop akan meneruskan ke 172.16.150.33. Laptop menggunakan IP forward dan iptables untuk meneruskan ke 172.16.150.33.</p>

<h2>BAB IV PEMBAHASAN</h2>

<h3>4.1 Tampilan nagios di browser</h3>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/01333c65-3198-4b6f-8af9-4a7e0ed06e41-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.1 Tampilan nagios di firefox</figcaption>
</figure>

<p>Di jaringan lokal nagios dapat diakses dengan alamat http://192.168.0.1/nagios dengan username nagiosadmin dan password nagios. Jika memiliki IP public dan domain name maka nagios dapat diakses dengan alamat domain.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/11d06fe7-1fff-4106-a687-d831a43a7906-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.2 Pemantauan secara umum</figcaption>
</figure>

<h3>4.2 Tampilan keadaan host</h3>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/c4c19cd8-4fb1-4d1e-ac98-8ce01069014a-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.3 Keadaan host dalam gambaran peta</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8729303b-691e-42a9-b0fb-d5a2a564d41b-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.4 Keadaan host dalam bentuk list</figcaption>
</figure>

<p>Disini terlihat bahwa Home Windows dalam keadaan mati karena merupakan komputer di rumah penulis dan tidak terkoneksi di lab komputer.</p> <br />

<p>Jaringan labkom PC5, PC8, PC9 dan PC10 dalam keadaan mati. Setelah diperiksa keadaan fisiknya ternyata ada masalah dengan kabel jaringannya. Setelah kabel tersebut diganti maka jaringan PC tersebut hidup.</p> <br />

<p>Host yang lain dalam keadaan normal. DU merupakan DNS UNUD dengan IP 172.16.0.6, LDCS adalah Lab DSK Cisco Switch dengan IP 172.16.150.33, euai adalah elearning.unud.ac.id, ls adalah labkom server dengan sistem operasi linux Ubuntu, dan LPC adalah labkom PC dengan sistem operasi Windows Tiny XP.</p>

<h3>4.3 Tampilan Service</h3>

<p>Nagios juga dapat memantau service pada host seperti http, smtp, ftp, dhcp, dns, mrtgtraf, partisi dan lain-lain. Kondisi OK, warning, critical diatur oleh user, contohnya ping, diatur warning jika RTA (Round Trip Average) diatas 200 ms dan critical jika diatas 300 ms.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/4afcddc1-0bc3-4c5e-9ba6-f10e01d0898d-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.5 Tampilan keadaan service pada masing-masing host 1</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/ca0d6704-2ed3-42e0-a11b-505d31a0ef14-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.6 Tampilan keadaan service pada masing-masing host 2</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/ca0d6704-2ed3-42e0-a11b-505d31a0ef14-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.7 Tampilan keadaan service pada masing-masing host 3</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/051cf1ff-1c80-4be1-b20c-2cda8d7bd6c1-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.8 Tampilan keadaan service pada masing-masing host 4</figcaption>
</figure>

<h3>4.4 Laporan pada nagios</h3>

<p>Nagios juga mampu membuat laporan. Hal yang dilaporkan adalah keadaan host dari pertama kali pemantauan hingga kondisi terkahir. Jadi hasil pemantauan dicatat oleh nagios.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0ec1f243-5633-463d-a614-b27bd2c275dc-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.9 Pembagian kelompok pada host</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/688011a6-0035-4068-9f8b-99456f2815c4-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.10 Pelaporan seluruh pemantauan host oleh nagios</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/df0f3c30-852b-48e8-a4b2-a823fa860717-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.11 Pelaporan keadaan hidup dan mati LDCS selama pemantauan</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/2bd1a0ed-5c6a-4a90-b993-fca172b4fe16-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.12 Pelaporan RTA elearning.unud.ac.id selama pemantauan</figcaption>
</figure>


<h2>BAB V PENUTUP

<h3>5.1 Simpulan</h3>

<p>Di lab komputer, Teknik Elektro, Universitas Udayana sangat cocok untuk dipasangkan nagios (monitoring server). Dengan PC yang banyak yang hidup dan digunakan setiap hari hampir 24 jam maka nagios dapat memantau kondisi PC tersebut. Jaringan ke Internet di lab komputer menggunakan fasilitas dari Universitas Udayana. Dengan diberi default gateway di lab DSK dan DNS UNUD maka nagios dapat memantau hal tersebut.</p> <br />

<p>Pada kondisi trouble, Dari pada memeriksa perangkat 1 per 1 lebih effisien melihat keadaan host dengan nagios, karena nagios dapat menampilkan yang mana dalam keadaan baik dan yang dalam keadaan buruk.</p>

<h2>Daftar Pustaka</h2>

<ul>
<li>Nagios, 2013. http://www.nagios.org/about diakses 21 April 2013.</li>
<li>Mitchel, B. 2013. http://compnetworking.about.com/od/network_ping/g/what-is-a-ping.htm diakses 21 April 2013.</li>
<li>Nagios, .2013. http://nagios.sourceforge.net/docs/3_0/toc.html diakses 5 April 2013.</li>
<li>Nagios, .2013. http://nagios.sourceforge.net/docs/3_0/quickstart-ubuntu.html diakses 10 Maret 2013.</li>
<li>Nagios, .2013.  http://nagios.sourceforge.net/docs/3_0/monitoring-routers.html 10 Maret 2013.</li>
</ul>
`)
});