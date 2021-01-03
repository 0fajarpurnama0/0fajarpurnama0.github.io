$("#mpbddosls").click(function(){
    $(".grid-content").html(`
<h1>MENGAMATI PERFOMA BERMAIN DOTA dengan OPNET SISTEM LAN SEDERHANA</h1>
<a href="http://www.mediafire.com/folder/njpajv4nuba45/OPNET">http://www.mediafire.com/folder/njpajv4nuba45/OPNET</a>

<h3>Nama: Fajar Purnama</h3>

<h3>NIM: 1004405045</h3>

<h3>Jurusan: Teknik Elektro</h3>

<h3>Fakultas Teknik Universitas Udayana</h3>

<h2>BAB I PENDAHULUAN</h2>

<h3>1.1 Latar Belakang</h3>

<p>DOTA (Defense Of The Ancient) merupakan salah satu game multiplayer dengan sistem LAN (local area network). Permainan maksimal 12 orang dengan maksimal 10 pemain dan 2 penonton.</p> <br />

<p>Contohnya, untuk bermain 10 player maka diperlukan 10 PC (Private Computer) yang terhubung secara LAN (local area network) (pada jaringan yang sama). Sekarang game ini sudah dapat dimainkan secara online.</p> <br />

<p>Setiap komputer yang teruhubung secara LAN (local area network) akan mengirimkan trafik (aliran data) pada jaringan tersebut. Besarnya trafik tergantung pada permainan DOTA (Defense Of The Ancient) pada kasus ini. Belum banyak yang mengetahui bagaimana performa suatu jaringan bila dipakai bermain DOTA (Defense Of The Ancient) bersepuluh (10 PC).</p> <br />

<p>Pada percobaan ini akan dicari trafik yang dihasilkan 1 PC (private computer) untuk bermain DOTA. Setelah itu disimulasikan pada OPNET jika 10 PC (private computer) digunakan untuk bermain bersama.</p>

<h3>1.2 Rumusan Masalah</h3>

<p>Bagaimana performa suatu jaringan bila dipakai bermain DOTA (Defense Of The Ancient) bersepuluh (10 PC)?</p>

<h3>1.3 Tujuan</h3>

<p>Untuk mengamati performa bermain DOTA (Defense Of The Ancient) dengan OPNET sistem LAN (local area network) sederhana.</p>

<h3>1.4 Manfaat</h3>

<p>Mengetahui performa bermain DOTA (Defense Of The Ancient) dengan OPNET sistem LAN (local area network) sederhana dan dapat mempertimbangkan teknologi yang harus digunakan.</p>

<h3>1.5 Ruang Lingkup dan Batas</h3>

<ol>
<li>Tidak menggunakan sistem client – server.</li>
<li>Hanya mengamati.</li>
<li>Performa yang diamati maksimal selama 2 menit (karena versi OPNET Academic Edition).</li>
<li>Hanya sebatas LAN (local area network).</li>
</ol>

<h2>BAB II TINJAUAN PUSTAKA</h2>

<h3>2.1 Wireshark</h3>

<p>Wireshark merupakan software network protocol analyzer yang terkenal di dunia. Bisa juga menangkap trafik pada suatu jaringan computer. Software ini de facto (dan sering dikatakan de jure) standar dari berbagai industry dan institusi pendidikan. Wireshark dikembangkan oleh banyak ahli jaringan di seluruh dunia dan merupakan proyek yang berlanjut mulai 1998 (Combs, 2013).</p>

<h3>2.2 End – End Delay</h3>

<p>End – end delay merupakan waktu yang dibutuhkan untuk suatu data, bit, byte, paket dari transmitter mencapai receiver. Delay dihitung dalam waktu biasanya detik. Pada suatu jaringan dikatakan delay suatu jaringan adalah delay rata – rata. Delay pada suatu jaringan dihitung dengan konsep waktu rata – rata yang dibutuhkan untuk suatu paket dari transmitter mencapai receiver. Delay = Time/Packet (Gómez, 2005).</p>

<h3>2.2 Collision</h3>

<p>Collision pada ethernet biasanya berdasarkan CSMA/CD (Carrier Sense Multiple Access/Collision Detection). CSMA (Carrier Sense Multiple Access) adalah kemampuan suatu host untuk mendeteksi apakah suatu kanal kosong atau dialiri trafik. Bila kosong host akan melanjutkan pengiriman data, dan sebaliknya bila ada trafik maka host akan menunggu sampai mendeteksi kosong baru mengirim. Namun tidak berlaku bila ada 2 host sama – sama mendeteksi kanal lagi kosong. Bila ini terjadi keduanya akan tetap mengirimkan data bersamaan sehingga terjadi collision. Oleh karena itu diperlukan Collision Detection. Selain dapat menginformasikan host bahwa terjadi collision juga terdapat Back-off algorithm dimana host akan menunggu berdasarkan berbagai perhitungan sebelum mengirim ulang data (Peterson, 2003).</p>

<h2>BAB III METODE PERCOBAAN</h2>

<h3>3.1 Tempat dan Waktu</h3>

<p>Percobaan dilakukan di rumah penulis, di Jln. Kusuma Bangsa 5, Denpasar, Bali. Waktu percobaan pada hari Minggu, 16 Maret 2013, pada jam 18:00 – 23:30.</p>

<h3>3.2 Alat dan Bahan</h3>

<p>Bahan adalah trafik yang dihasilkan suatu PC (Private Computer) saat bermain DOTA (Defense Of The Ancient) secara LAN (local area network). Pada OPNET menggunakan 10 Ethernet Station, 16 Port Ethernet Hub dan kabel ethernet 100 Base T. Berikut adalah daftar alat yang digunakan:</p>

<table border="1">
<caption>Tabel 3.1  Alat yang digunakan</caption>
<tr>
<th>NO</th>
<th>Alat</th>
<th>Spesifikasi</th>
</tr>
<tr>
<td>1</td>
<td>Laptop ACER</td>
<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
Mobile Intel® Graphics Media Accelerator 4500MHD
1GB DDR2
128 WXGA Acer CrystalBriteTM LCD
250GB HDD
Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
Atheros Communications Inc. AR928X Wireless Network Adapter
Operating System Linux Backtrack 5 R3
</td>
</tr>
<tr> 
<td>2</td>
<td>PC</td>
<td>Intel® Pentium® core-duo processor
1GB DDR2
256 VGA
AWUS036NHA 802.11b/g/n Long-Range USB Adapter
Alcor Micro, Corp. USB 2.0 PC Camera
Operating System Windows 7 Ultimate
</td>
</tr>
<tr>
<td>3</td>
<td>Software</td>
<td>OPNET IT GURU Academic Edition
Warcraft III Frozen Throne 1.64, Map DOTA 6.77
Wireshark 1.8.3
</td> 
</tr>
</table>

<h3>3.3 Langkah Percobaan</h3>

<h4>3.3.1 Mencari trafik yang dihasilkan oleh PC saat bermain DOTA secara LAN</h4>

<h5>1. Koneksikan 2 komputer secara LAN sebagai berikut:</h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/e560624a-4469-4947-9a22-f6920a378094-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.1 Koneksi Jaringan</figcaption>
</figure>


<h5>2. Gunakan wireshark pada salah satu PC (Private Computer) untuk mencatat trafik yang dihasilkan.</h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3c7abf57-2d0f-4e89-95c5-aabd36768f64-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.2 Menangkap paket dengan Wireshark</figcaption>
</figure>


<h5>3. Lakukan 1x permainan DOTA (Defense Of The Ancient) hingga selesai.</h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/f19f2390-1681-42b4-9433-44d19468c8d4-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.3 Permainan DOTA</figcaption>
</figure>


<h4>3.3.1      Mensimulasikan dengan OPNET performa permainan DOTA 10 player</h4>

<h5>1. Topologi jaringan sebagai berikut (jarak dalam meter):<h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3c8679bc-737d-455d-b89b-3dd05a080c28-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.4 Topologi jaringan</figcaption>
</figure>

<h5>2. Untuk memilih performa yang diamati pilih individual statistic pada simulation. Lalu berikut pada percobaan performa yang diamati:</h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/b52e4423-4dcc-48e1-b135-ff2f8bb3e7fa-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.5 Performa yang diamati</figcaption>
</figure>


<h5>3. Pada Simulation pilih Configure Discreet Event Simulation, lalu simulasi selama 2 menit:</h5>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8d16f804-6ae1-403d-a760-2733246f35d5-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.6 Pengaturan simulasi</figcaption>
</figure>


<h2>BAB IV PEMBAHASAN</h2>

<h3>4.1 Trafik yang dihasilkan 1 PC bermain DOTA</h3>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/42e5b91e-fa7c-4044-81b9-71c4e373dbf9-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.1 Grafik yang dihasilkan pada wireshark</figcaption>
</figure>


<p>Dengan menggunakan pilihan pada menu Statistic, IO Graph. Dihasilkan grafik sebagai berikut dimana sumbu horisontal adalah menit, dan sumbu vertikal adalah byte/detik. Grafik ini menunjukan bahwa trafik yang dihasilkan pada 1 PC (Private Computer) adalah 100000 byte/detik. Sedangkan garis yang nilainya paling tinggi (mendekati 200000 byte/detik) merupakan trafik keseluruhan. (sent dan received).</p>

<h3>4.2 Hasil simulasi pada OPNET</h3>

<p>Maka pada simulasi masing – masing ethernet station diatur agar menghasilkan trafik 100000 byte/detik. Jaringan mulai hidup pada detik ke 5, jaringan hidup selama 120 detik (ON Time), Tidak pernah mati (0 OFF Time). Agar lebih nyata maka pengiriman paket setiap 0.01 detik (bukan per detik) dengan besar paket 1000 byte (1000 byte/ 0.01 detik = 100000 byte / 1 detik). Pengaturan sebagai berikut (dengan klik kanan salah satu PC, pilih similar nodes, klik kanan lagi, lalu pilih attributes):</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/55e1d4d4-2aa5-4445-94e1-912545b2c5a3-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.2 Pengaturan masing – masing ethernet station</figcaption>
</figure>


<p>Maka hasilnya sebagai berikut:</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/f31d0b4e-5d3e-44be-a6c1-688d3d46bb90-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.3 Grafik delay, traffic sent and receive keseluruhan</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0b022e2e-bf8c-4af7-9a3e-9a793657bdf3-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.4 Grafik collission count HUB dengan PC1</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3285b9ae-c1c0-48f3-8c94-85f732f10199-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.4 Grafik Traffic receive HUB dengan PC1</figcaption>
</figure>


<h2>BAB V PENUTUP</h2>

<h3>5.1 Simpulan</h3>

<p>Trafik keseluruhan dan collision count menjadi 10x lebih besar. Collision count per PC adalah rata – rata 600, diamati pada HUB adalah 6000 (karena ada 10 PC). Trafik rata – rata sent dan receive per PC adalah 800000 byte/detik diamati secara keseluruhan dan pada HUB adalah 8000000 byte/detik (10x lebih besar).</p>

<h3>5.2 Saran</h3>

<p>Percobaan ini hanya sebatas simple LAN. Bisa dijadikan penelitian lebih lanjut dengan penerapkan sistem client – server, dengan konfigurasi jaringan berbeda, atau hal – hal lainnya.</p>

<h2>Daftar Pustaka</h2>

<ul>
<li>Combs, G. 2013. http://www.wireshark.org/about.html, diakses tanggal 17 Desember 2013</li>
<li>Gómez, G. 2005. End-to-End Quality of Service over Cellular Networks.</li>
<li>Chichester: John Wiley & Sons Ltd.</li>
<li>Peterson, L. 2003. Computer Networks. San Francisco: Morgan Kaufmann Publishers</li>
</ul>
`)
});