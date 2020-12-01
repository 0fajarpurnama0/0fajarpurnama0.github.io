---
layout: post
title: Demonstrasi Brute Force Attack dengan Hydra
categories: bachelor
tags: [Linux, brute force, Hydra, Windows, Telnet, tugas kuliah, penulisan ilmiah]
featuredimage: https://cdn.steemitimages.com/DQmNgtJuY8MGVSN1i4K8Y9GckJniLMNcSEoF3dfUd2MwJ3M/Gambar%200.%20Ilustrasi%20bruteforce.png
description: Sebenarnya hanya tugas untuk menulis esai tapi kebetulan saat itu saya mulai mencoba Backtrack Linux dan sekalian saja praktik.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/04/15/demonstrasi-brute-force-attack-dengan-hydra
---
![Gambar 0. Ilustrasi bruteforce.png](https://cdn.steemitimages.com/DQmNgtJuY8MGVSN1i4K8Y9GckJniLMNcSEoF3dfUd2MwJ3M/Gambar%200.%20Ilustrasi%20bruteforce.png)
Gambar 0. Illustrasi bruteforce

## Catatan

Tugas S1 pada mata kuliah Sistem Keamanan Data ini merupakan versi penulisan ilmiah dari [tutorial sebelumnya](https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra). Sebenarnya kami hanya diberi tugas untuk menulsi esai mengenai bruteforce tapi kebetulan saat itu saya mulai mencoba Backtrack Linux dan sekalian saja mencoba mempraktikannya dengan Hydra. Selain saya, kelompok kami terdiri dari Yulianti Murprayana, Nyoman Arta Jaya, Muhammad Audy Bazly, dan Dwi Angga Pratama. Tugas ini tidak pernah dipublikasi dimanapun dan kami sebagai penulis dan pemegang hak cipta melisensi tugas ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama kami sebagai penulis dan memberitahu bahwa versi asli dan terbuka tersedia disini. Jika ingin praktiknya saja, ikuti videonya saja.</p>
<div class="video-container"><iframe src="https://lbry.tv/$/embed/bruteforce-demonstration-using-hydra-on/de2fe690272e819d589098ab3dccad2a85b77da5" allowfullscreen=""></iframe></div>

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Bruteforce merupakan suatu teknik pembobolan jaringan komputer dengan mencoba semua kata yang ada dalam kamus sebagai username atau password untuk memasuki suatu jaringan. Dari kata bruteforce itu sendiri berarti memaksa murni menggunakan tenaga. Bagi para hacker bruteforce merupakan solusi terkahir dalam pembobolan pada jaringan komputer. Namun teknik ini jarang digunakan karena membutuhkan waktu yang lama, besar file kamus yang besar, spec komputer yang tinggi dan kedala sejenis lainnya. Jika SDM (sumber daya manusia) yang dimiliki hacker mencukupi, teknik ini pasti berhasil. Walaupun teknik ini umum dikenal dan dipahami mekanisme kerjanya oleh banyak orang, masih sedikit yang mengetahui pengaplikasiannya. Dengan kata lain, banyak yang mengetahui teorinya tetapi tidak pernah melakukan aksi ini. Pada makalah ini akan dilakukan percobaan melakukan bruteforce dengan software Hydra yang tersedia di sistem operasi linux. Bahan percobaan adalah sistem operasi Windows 7 pada service telnet.

### 1.2 Rumusan Masalah

Bagaimana melakukan bruteforce dengan Hydra pada service telnet di Windows 7?

### 1.3 Tujuan

Mengaplikasikan teknik pembobolan bruteforce dengan software Hydra pada service telnet di Windows 7.

### 1.4 Manfaat

1.  Bisa mengaplikasikan teknik bruteforce.
2.  Dapat mengetahui keterbatasan bruteforce.

### 1.5 Ruang Lingkup dan Batas

1.  Kondisi percobaan telah diatur, username dan password telah ditentukan terlebih dahulu.
2.  Pembobolan dilakukan hanya pada service telnet di Windows 7.
3.  Menggunakan software Hydra sebagai bruteforce.
4.  Ukuran kamus sangat kecil (hanya untuk percobaan).

## BAB 2 Tinjauan Pustaka

Serangan brute-force bekerja dengan menghitung setiap kemungkinan kombinasi yang dapat membuat kata sandi dan mengujinya untuk melihat apakah itu kata sandi yang benar. Seiring bertambahnya panjang kata sandi, jumlah waktu, rata-rata daya komputasi yang diperlukan, untuk menemukan kata sandi yang benar meningkat secara eksponensial ([https://en.wikipedia.org/wiki/Brute-force_attack](https://en.wikipedia.org/wiki/Brute-force_attack)). Beberapa software yang dapat melakukan brute force attack:

*   Aircrack-ng
*   Cain and Abel
*   Crack
*   DaveGrohl
*   Hashcat
*   Hydra
*   John the Ripper
*   L0phtCrack
*   Ophcrack
*   RainbowCrack

Berdasarkan [Zurück zur Startseite](https://www.wissenschaft.de/scienceblogs/when-was-the-brute-force-attack-invented-klausis-krypto-kolumne/), berikut adalah perkembangan berita brute force attack:

*   1977: Publikasi besar pertama tentang serangan brute force pada DES oleh Whitfield Diffie (Special Feature Exhaustive Cryptanalysis of the NBS Data Encryption Standard)
*   1996: Michael Wiener menerbitkan makalah Efficient DES Key Search
*   1997: RSA Secret-Key Challenge
*   1997: Ian Goldberg memecahkan enkripsi 40 bit dalam beberapa jam
*   1997: DESCHALL project memecahkan tantangan DES setelah 96 hari
*   1998: EFF DES Cracker (Deep Crack) memecahkan DES dalam 56 jam
*   1999: Deep Crack dan distribution.net merusak DES dalam waktu 22 jam dan 15 menit
*   2002: Enkripsi RC5 64 bit rusak oleh distribution.net setelah 1.757 hari
*   2006: COPACABANA (Pemecah Kode Paralel yang Dioptimalkan Biaya)
*   2009: MTC3 World Record Challenge
*   2017: Tesis PHD Nils Kopal, Secure Volunteer Computing untuk Distributed Cryptanalysis
*   Masa Depan: Serangan komputer kuantum pada cipher simetris

## BAB 3 Metode Percobaan

### 3.1 Tempat dan Waktu Percobaan

Percobaan dilakukan di rumah di Jln. Kusuma Bangsa 5, Denpasar, Bali. Waktu percobaan pada hari Senin, tanggal 10 Maret 2012, pada jam 20:00 – 24:00.

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

#### 3.3.1 Scan Host Alive

Pertama yang harus dilakukan adalah untuk mengecek apakah host hidup atau mati. Bila alamat IP tidak diketahui bisa melakukan scanning pada range IP (Internet Protocol) adress tertentu atau dengan ARP (Adress Resolution Protocol). Jika menggunakan nmap perintahnya adalah “nmap –sn 192.168.0.0/24”, perintah ini akan melakukan check host alive dengan aplikasi ping dari 192.168.0.0 – 192.168.0.255.

#### 3.3.2 Scan port

Yang kedua adalah scan port untuk mengetahui port yang mana saja pada host yang aktif dengan aplikasi port scanner. Port scanner pada makalah ini yang digunakan adalah NMAP. Jika diketahui alamat IP host adalah 192.168.0.3 maka perintahnya “nmap 192.168.0.3”. Pada makalah ini percobaan bruteforce akan dilakukan pada Telnet. Akses telnet dapat dilakukan dengan perintah “telnet –l (user)”.

![Gambar 3.1 Scanning pada host dengan NMAP.png](https://cdn.steemitimages.com/DQmdDnrJ4iA1cczCWaU5p1cn96vyUXekDrt8BvYntNyFK8Z/Gambar%203.1%20Scanning%20pada%20host%20dengan%20NMAP.png)

Gambar 3.1 Scanning pada host dengan NMAP



#### 3.3.3 Bruteforce

Bruteforce pada makalah ini akan dilakukan dengan opensource software Hydra. Pada makalah ini dibuat terlebih dahulu kamus percobaan dalam bentuk text file, terlihat sebagai berikut:

![Gambar 3.2 Kamus yang digunakan.png](https://cdn.steemitimages.com/DQmZPYYCM9r9mFkGigTmhuY5i3RZ15doof5u5obVJZdehnP/Gambar%203.2%20Kamus%20yang%20digunakan.png)

Gambar 3.2 Kamus yang digunakan



Pada hydra dapat dilakukan perintah “hydra –h” untuk melihat panduan pemakaian. Selanjutnya adalah perintah “hydra –L /root/test_dictionary.txt –P /root/test_dictionary.txt –F –V 192.168.0.3 telnet”. “–L” adalah login, “-P” adalah password, disini keduanya akan mencoba-coba semua text yang ada di file “test_dictionary.txt”. “–F” adalah perintah agar Hydra berhenti bila login dan password telah ditemukan, -V untuk melihat proses.

![Gambar 3.3 Bruteforce dengan hydra.png](https://cdn.steemitimages.com/DQmaaQ4ij9hTzS2ah9UPBpEbav11atJJ5W3uHicwLwcsbb3/Gambar%203.3%20Bruteforce%20dengan%20hydra.png)

Gambar 3.3 Bruteforce dengan hydra



## BAB 4 Pembahasan

### 4.1 Yang dilakukan oleh hydra

Pada gambar 3.3 terlihat bahwa hydra mencoba nama – nama yang terkandung pada file test_dictionary.txt sebagai username dan password. Hydra memulai dari atas yaitu username = robert dan password = robert hingga 21 kali percobaan dan berhenti pada usernama = purnama dan password = testhack.

### 4.2 Hasil Percobaan

![Gambar 4.1 Konfigurasi jaringan pada Windows 7.png](https://cdn.steemitimages.com/DQmYMRJosiLMjvmhq4z7vmev6xmeZC4oXazzoadfG3g5sao/Gambar%204.1%20Konfigurasi%20jaringan%20pada%20Windows%207.png)

Gambar 4.1 Konfigurasi jaringan pada Windows 7



Dengan perintah “telnet 192.168.0.3” dengan memasukan username = purnama dan password = testhack maka akan terlihat sebagai berikut:

![Gambar 4.2 Telnet ke host.png](https://cdn.steemitimages.com/DQmfMfZBEma6iAgfeXUjEL11Fi3powP1vd8AQKdp8uY5hDQ/Gambar%204.2%20Telnet%20ke%20host.png)

Gambar 4.2 Telnet ke host



Terlihat bahwa telah berhasil memasuki host. Dari percobaan, bruteforce bersifat boros waktu, boros SDM seperti RAM, processor dan drive. Jika menerapkan metode ini di dunia nyata maka akan memerlukan kamus yang besar sekitar > 5 GB karena pada kamus harus tersedia semua kemungkinan password mulai dari variasi huruf dari a – z, angka, dan karakter lainnya. Tidak berhenti sampai disana juga harus tersedia semua kemungkinan jumlah karakter dalam satu kata, dan masing-masing karakter itu pula harus tersedia variasi. Wajarlah bila suatu kamus yang asli mempunyai ukuran yang besar. Kecepatan untuk melakukan bruteforce tergantung pada processor dan RAM dengan kata lain diperlukan RAM dan processor yang sangat besar. Jika semua SDM yang dibutuhkan terpenuhi, maka bruteforce pasti berhasil. Oleh karena itu bruteforce dikatakan solusi terakhir bagi hacker bila solusi lain tidak berhasil.

## BAB 5 Penutup

### 5.1 Simpulan

Untuk mengaplikasikan bruteforce dapat menginstall software yang telah tersedia seperti Hydra. Setelah itu dibutuhkan kamus berupa kumpulan kata – kata dalam file txt. Tahap terkahir sebelum melakukan bruteforce adalah dengan melakukan pencarian informasi dan menghubungkan koneksi dengan tujuan yang akan dilakukan bruteforce. Lalu melakukan bruteforce dengan Hydra seperti pada gambar 3.3.

### 5.2 Saran

Tersedia juga software bruteforce selain Hydra seperti Bruteforce, Ophcrack dan Rainbowcrack. Namun tidak menutupi kemungkinan untuk membikin software bruteforce. Dapat disarankan dijadikan penelitian lebih lanjut dengan melakukan membikinan software bruteforce sendiri, mencoba software lain, melakukan bruteforce pada service lain, melakukan pada kondisi nyata dan lain – lain.

## Pertanyaan dan Jawaban (sebenarnya ujian tengah semester saya)

### Pertanyaan

1.  Jelaskan batasan-batasan yang menentukan keberhasilan penerapan Bruteforce yang kalian bahas (pre-kondisi yang memungkinkan penerapan Bruteforce).
2.  Sejauh mana keberhasilan penerapan Bruteforce yang dicobakan, dan jelaskan ukuran/parameter apa yang diguanakan untuk mengukur keberhasilannya.
3.  Metode apa yang dapat digunakan untuk mendeteksi adanya serangan Bruteforce ini? Dan sejauh mana tingkat keberhasilan deteksinya?
4.  Dapatkah serangan Bruteforce ini dicegah? Bagaimana metodenya?

### Jawaban

1.  Secara umum brute force memungkinkan bila diberi kesempatan login. Jika dilihat dari segi jaringan komputer maka pertama harus dapat terkoneksi dengan host. Service bersifat open (tidak filter atau firewall) and diberi kesempatan login.
2.  Karena yang kami lakukan bersifat uji coba maka diatur agar memenuhi kriteria pada soal 1, seperti terhubung dengan host, firewall pada host dimatikan dan diberi kesempatan untuk login. Pada login, input username dan password, semua kata pada kamus yang telah dibuat dicoba hingga menemukan pasangan username dan password yang sesuai agar dapat login. Software yang digunakan adalah Hydra. Ada software lain selain Hydra seperti Rainbowcrack, Bruteforce, dan Medusa. Setelah itu dapat melakukan login.
3.  Untuk mendeteksi bruteforce dapat dilihat pada log file pada host. Terdeteksi bila suatu user yang sama, dapat dilihat pada identitas (IP address user, MAC address user, atau identitas lainnya), melakukan login secara simultan. Artinya mencoba masuk terus-menerus, misalnya lebih dari 6x. Jika diperlukan untuk mendeteksi secara langsung dapat dilakukan dengan network monitoring software contohnya Wireshark. Caranya Wireshark dipasang pada jaringan untuk melakukan login, lalu filter (kelompokkan) IP address atau identitas lain. Contohnya jika terlihat suatu user mencoba login lebih dari 6x maka dia melakukan bruteforce. Lebih lanjut dapat dibikinkan program untuk memberi peringatan pada host atau program pencegahan lebih lanjutnya.
4.  Memang benar Bruteforce merupakan solusi terkahir bila metode pembobolan lainnya tidak berhasil tetapi jika Bruteforce berdiri sendiri mudah untuk dicegah. Dapat dicegah dengan memutuskan koneksi. Dapat dicegah dengan memasang firewall. Dapat dicegah dengan menutup service untuk login. Hal diatas = mematikan service. Bila layanan tetap berjalan tetapi mencegah bruteforce dapat dilakukan dengan. Memfilter dengan hanya user dengan identitas tertentu bisa login (jika bersifat privat). Contohnya hanya IP Address dari 222.124.227.0/24 yang bisa login atau dengan MAC Address tertentu. Teknologi yang berkembang menggunakan identitas time skew identitas waktu user. Menyediakan batas maksimum untuk melakukan login (jika bersifat sosial). Contohnya pada facebook, bila mencoba login 6x namun tidak berhasil maka account akan diblokir dan diminta verifikasi lewat email pemiliki untuk diaktifkan kembali. Hal tersebut merupakan kendala bila Bruteforce berdiri sendiri. Untuk mengatasi hal diatas dapat dilakukan dengan bantuan proxy atau encryption agar identitas tidak diketahui. Jika hanya user tertentu bisa login harus melakukan teknik spying terlebih dahulu seperti man in the middle. Bila menemukan suatu user maka dapat menyamar sebagai user tersebut lalu melakukan login.