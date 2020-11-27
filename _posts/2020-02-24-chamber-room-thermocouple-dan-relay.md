---
layout: post
title: Chamber Room menggunakan Thermocouple dan Relay
categories: misc
tags: [thermocouple, chamber room, relay, LD Micro, simulation]
featuredimage: https://images.blurt.blog/640x0/https://farm6.staticflickr.com/5629/21239689879_d8cd7257f2_o_d.jpg
description: Ruang ruang dalam percobaan ini dikenal sebagai sirkuit otomasi. Ini dirancang untuk menjaga suhu ruangan pada derajat tertentu.
canonicalurl: https://0fajarpurnama0.github.io/misc/2020/02/24/chamber-room-thermocouple-dan-relay
---

## 1\. Pendahuluan

A chamber room dalam percobaan ini dikenal sebagai sirkuit otomatisasi. Ini dirancang untuk menjaga suhu kamar pada tingkat tertentu. Chamber room ini dipilih sebagai salah satu pelatihan untuk otomatisasi.

Di sini kita belajar bagaimana merancang konsep kita menggunakan logika tangga, dan kemudian mewujudkan rangkaian fisik dengan menggunakan beberapa perangkat otomasi. Tujuan dari pelatihan ini adalah untuk memperkenalkan ke beberapa perangkat otomasi yang merupakan relai, kontraktor, dan pasangan termal. Kita membangun Chamber room eksperimental berdasarkan diagram tangga yang kita desain.

## 2\. Desain Eksperimen

Chamber room yang kita inginkan di sini adalah dengan menggunakan pemanas untuk memanaskan ruangan, ketika suhu kamar lebih rendah dari suhu yang ditetapkan (pendingin) pemanas akan menyala untuk memanaskan ruangan, tetapi jika lebih tinggi (lebih panas) pemanas akan mati. Pemanas akan hidup kembali ketika suhu turun.

![Figure 1\. Ladder diagram of chamber room](https://farm6.staticflickr.com/5629/21239689879_d8cd7257f2_o_d.jpg)

Gambar 1\. Diagram tangga chamber room.



Gambar 1 menunjukkan diagram tangga ruang kamar yang ingin kita buat. Konsepnya adalah mengunci suhu ruangan.

a. Ketika tombol ditekan, arus listrik akan mengalir ke relai R1 (pin 13 hingga 14) dan mengaktifkan termokopel (RTC) sementara R1 (pin 9 hingga 5) akan mengunci arus bahkan jika tombol tekan mati (lampu akan tetap menyala ). Sisi kiri adalah simpul positif yang terhubung ke catu daya sedangkan sisi kanan terhubung ke ground. Angka-angka pada Gambar 1 adalah pin yang akan dijelaskan nanti.

b. Termokopel akan mengaktifkan Kontraktor dan mengaktifkan pemanas.

c. Termokopel akan merasakan suhu ruangan dan ketika mencapai suhu yang disetel (panas), termokopel akan mati (potong garis).

d. Arus listrik akan berhenti mengalir ke kontraktor sehingga mematikan pemanas.

e. Setelah beberapa saat suhu kamar akan turun (mendingin) dan sekali lagi mengaktifkan termokopel (biarkan arus mengalir) dan mengaktifkan kontraktor dengan pemanas.

f. Siklus ini akan jalan terus mengunci suhu kamar.

Relai (R1) diatur untuk mengunci aliran arus listrik ke termokopel karena kami menggunakan tombol. Tanpanya sirkuit akan mati setelah kami melepas tombol sementara kami ingin tetap menyala meskipun kami melepaskan tombol.

Untuk diagram tangga di atas kami menggunakan tombol tekan, tombol reset, relay, termokopel, kontraktor, dan bola lampu sebagai indikator sementara kami menggunakan solder untuk memanaskan sensor panas pada termokopel. Gambar 2 menunjukkan relai:

a. seperti pada Gambar 1 pin 13 akan terhubung ke tombol reset (sumber 220 V) dan pin 14 akan menuju ke tanah.

b. Pin 9 normaly close (NC) ke pin 1 (terhubung ketika tidak ada arus mengalir),

c. tetapi normally open (NO) ke pin 5 (saklar dari pin 9 akan berubah menjadi pin 5 saat arus mengalir) sehingga mengunci termokopel bahkan tombol push dilepaskan.

d. Tombol reset akan memotong aliran jika ditekan.

![Figure 2\. 220V relay ](https://farm6.staticflickr.com/5729/20803880454_a5dc56b103_o_d.jpg)

Gambar 2\. 220V relay.



Gambar 3 menunjukkan termokopel (fokus pada rangkaian): a. pin 7 dan 8 terhubung ke catu daya seperti relay. b. Sama seperti penjelasan untuk Gambar 2 (relay) pin 4 adalah NC untuk pin 6 tetapi TIDAK untuk pin 5. c. Sensor panas akan terhubung ke pin 1 dan 2. d. Ketika arus listrik mengalir pin 4 akan terhubung ke pin 5, e. dan jika sensor panas dipanaskan sampai tingkat tertentu, pin 4 akan memutus dari pin 5 dan terhubung ke pin 6 yang akan memotong pemanas.

Gambar 4 adalah kontraktor yang dalam diagram tangga seharusnya tidak diperlukan (menyederhanakan) tetapi dalam rangkaian aktual termokopel tidak dapat menahan arus listrik tinggi sehingga membutuhkan bantuan kontraktor. Karena ini hanyalah eksperimen sederhana, kami akan menggunakan bola lampu sebagai indikator dalam penggantian pemanas. Kami akan menggunakan pemanas eksternal yang merupakan solder dalam memanaskan sensor panas.

![Figure 3\. Thermocouple](https://farm6.staticflickr.com/5789/21415679392_8b148c40d9_o_d.jpg)

Gambar 3\. Thermocouple.



![Figure 4\. Contractor](https://farm6.staticflickr.com/5760/21238773838_6e8ae83e80_o_d.jpg)

Gambar 4\. Contractor.



## 3\. Menjalankan Eksperimen

Karena ini adalah praktik kami hanya menghubungkan kabel berdasarkan Gambar 1, tidak mengherankan bahwa Gambar 5 tampaknya tidak enak dipandang mata. Ini akan segera dibongkar setelah itu karena perangkat lain akan digunakan untuk proyek lain. Sebaiknya merujuk ke video ini terlebih dahulu karena mungkin sulit untuk memahami tulisan ini jika kita tidak memiliki pengalaman dalam otomatisasi.

![Figure 5\. Experiment](https://farm1.staticflickr.com/564/21426559735_52801c6e72_o_d.jpg)

Gambar 5\. Ekserimen.



Pada Gambar 6, cukup menekan tombol sekali lampu menyala dan tetap menyala. Itu karena relay juga terhubung ke catu daya dan dalam posisi terhubung ke termokopel. Pada Gambar 1 penjelasan relay mengunci arus.

Kemudian kami mencoba memanaskan sensor panas menggunakan solder pada Gambar 6\. Setelah saat lampu padam yang membuktikan pernyataan / penjelasan kami tentang Gambar 4 (arus tidak akan mengalir ke bola lampu saat dipanaskan hingga 100o C dalam percobaan ini). Pada Gambar 7 solder dilepaskan yang memungkinkan sensor panas menjadi dingin dan menyalakan kembali cahaya. Gambar 1 adalah diagram tangga untuk sirkuit aktual, pada Gambar 8 adalah simulasi dari apa yang terjadi pada sirkuit aktual yang mencakup sensor panas dalam diagram tangga.

a. Pemanas menyala ketika tombol ditekan memanaskan sensor.

b. Kami berasumsi bahwa butuh 2 detik untuk memanaskannya.

c. Setelah 2 detik (diasumsikan mencapai suhu yang ditargetkan) mengaktifkan sensor dan akan memotong garis.

d. Pemanas akan mati.

![Figure 6\. Experiment](https://farm1.staticflickr.com/659/21400326976_e289015c65_o_d.jpg)

Gambar 6\. Efek ketika memanaskan heat sensor



![Figure 7\. When heat sensor cools down](https://farm6.staticflickr.com/5715/21434996331_edbbd4c1fd_o_d.jpg)

Figure 7\. Ketika heat sensor mendingin



![Figure 8\. Simulation](https://farm6.staticflickr.com/5780/21434992251_02d2960570_o_d.jpg)

Figure 8\. Simulasi



# 4\. Simpulan

Di atas hanya simulasi chamber room bukan eksperimen nyata. Sementara ruang kerja seperti Air Conditioner (AC), Setrika, atau oven yang mengontrol suhu sekitarnya. Eksperimen ini hanya untuk mensimulasikan penggunaan termokopel di mana sensor panas secara manual dipanaskan dengan solder, bahkan relay hanya berfungsi untuk menjaga sirkuit hidup. Dengan demikian percobaan di atas memungkinkan kami untuk dapat membuat konsep chamber room, merancang diagram tangga, dan menerapkannya melalui relay dan termokopel. Singkatnya percobaan berhasil mensimulasikan chamber room. Bola lampu merupakan indikator apakah suhu di bawah titik pengaturan atau di atas yang menyala ketika suhu rendah. Sensor panas yang terhubung ke termokopel dipanaskan menggunakan solder yang diatur suhu tinggi yang akhirnya mematikan bola lampu (memotong arus listrik). Lampu akan hidup kembali ketika dingin.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/chamber-room-using-thermocouple-and/83b0a36ee56b8bde8f37c1a0b10b04fec9e59069" frameborder="0" allowfullscreen=""></iframe></div>

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/chamber-room-using-thermocouple-and-relay-xonjlr](https://www.publish0x.com/0fajarpurnama0/chamber-room-using-thermocouple-and-relay-xonjlr)
*   [https://0darkking0.blogspot.com/2018/08/chamber-room-using-thermocouple-and.html](https://0darkking0.blogspot.com/2018/08/chamber-room-using-thermocouple-and.html)
*   [https://medium.com/@0fajarpurnama0/chamber-room-using-thermocouple-and-relay-60b5bd37c1](https://medium.com/@0fajarpurnama0/chamber-room-using-thermocouple-and-relay-60b5bd37c1)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/chamber-room-using-thermocouple-and-relay](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/chamber-room-using-thermocouple-and-relay)
*   [https://steemit.com/chamber/@fajar.purnama/chamber-room-using-thermocouple-and-relay](https://steemit.com/chamber/@fajar.purnama/chamber-room-using-thermocouple-and-relay)
*   [https://0fajarpurnama0.weebly.com/blog/chamber-room-using-thermocouple-and-relay](https://0fajarpurnama0.weebly.com/blog/chamber-room-using-thermocouple-and-relay)
*   [https://0fajarpurnama0.tumblr.com/post/612067431851098112/chamber-room-using-thermocouple-and-relay](https://0fajarpurnama0.tumblr.com/post/612067431851098112/chamber-room-using-thermocouple-and-relay)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/7-chamber-room-using-thermocouple-and-relay](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/7-chamber-room-using-thermocouple-and-relay)
*   [https://0fajarpurnama0.github.io/misc/2020/02/24/chamber-room-thermocouple-and-relay.html](https://0fajarpurnama0.github.io/misc/2020/02/24/chamber-room-thermocouple-and-relay.html)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/tmp/chamber-room-thermocouple-and-relay.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/tmp/chamber-room-thermocouple-and-relay.html)