---
layout: post
title: Transmisi Citra Pada Perangkat Jaringan Sensor Visual Nirkabel Platform Imote2 Berbasis IEEE 802.15.4 ZigBee Embedded Linux
category: bachelor
tags: [jaringan sensor nirkabel, Imote2, ZigBee, transmisi, citra, JPEG2000, OpenJPEG, C, tosmac, embedded linux, tugas akhir]
featuredimage: https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmZa2DJeG8e8TE88g3XCwKHp5XnhvQqbsnoKwLTaR1SiqY/Gambar%203.2%20Skema%20dasar%20penelitian.PNG
description: Tugas akhir saya membuat program C pengiriman citra pada JSN Imote2 ZigBee dan penghematan transmisi citra dengan JPEG2000 menggunakan embedded Linux.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/06/tugas-akhir-fajar-purnama
---
<iframe src="//www.slideshare.net/slideshow/embed_code/key/9JMWGnpBtFQs9z" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/0DarkKing0/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802154-zig-bee-embedded-linux" title="Transmisi citra pada perangkat jaringan sensor visual nirkabel platform imote2 berbasis ieee 802.15.4 zig bee embedded linux" target="_blank">Transmisi citra pada perangkat jaringan sensor visual nirkabel platform imote2 berbasis ieee 802.15.4 zig bee embedded linux</a> </strong> from <strong><a href="https://www.slideshare.net/0DarkKing0" target="_blank">Fajar Purnama</a></strong> </div>
## Catatan

*   Ini adalah Tugas Akhir saya sebagai syarat untuk kelulusan S1 saya di Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana. Namun, Tugas Akhir ini hanya disetor ke perpustakaan Universitas Udayana dan tidak pernah dipublikasi di tempat lain dan hak cipta sepenuhnya saya yang pegang dan sudah 6 tahun sejak Tugas Akhir ini ditulis. Oleh karena itu saya nyatakan Tugas Akhir ini terbuka, boleh disalin, boleh dipublikasi ulang, dan boleh dijual dengan syarat menyebut nama saya sebagai penulis asal dan sebutkan bahwa laporan ini terbuka di tautan ini (customized CC-BY-SA).
*   Tugas akhir ini telah disahkan oleh kedua pembimbing saya yaitu Dr. I Made Oka Widyantara, ST., MT. dan I Gst A. Komang Diafari Djuni H, ST., MT. serta ketiga penguji Dr. Gede Sukadarmika, ST., MSc., Widyadi Setiawan, ST., MT., dan NMAE Dewi Wirastuti, S.T., M.Sc., Ph.D. Tugas Akhir ini juga merupakan topik yang diberikan oleh Dr. Nyoman Putra Sastra yang seharusnya menjadi pembimbing utama namun beliau saat itu sedang lanjut studi dimana Tugas Akhir ini menjadi bagian dari Dissertasi S3 beliau.
*   Source Code: [Github](https://github.com/0fajarpurnama0/transmisi-citra-imote2-embedded-linux)

## Daftar Isi

*   [Abstract](#abstract)
*   [BAB 1 Pendahuluan](#bab1pendahuluan)
    *   [1.1 Latar Belakang](#1.1latarbelakang)
    *   [1.2 Rumusan Masalah](#1.2rumusanmasalah)
    *   [1.3 Tujuan Penelitian](#1.3tujuanpenelitian)
    *   [1.4 Manfaat Penelitian](#1.4manfaatpenelitian)
    *   [1.5 Batasan Masalah](#1.5batasanmasalah)
*   [BAB 2 Tinjauan Pustaka](#bab2tinjauanpustaka)
    *   [2.1 Penelitian Sebelumnya](#2.1penelitiansebelumnya)
    *   [2.2 Tinjauan Mutahir (State of The Art)](#2.2tinjauanmutahir(stateoftheart))
    *   [2.3 Daya Listrik](#2.3dayalistrik)
    *   [2.4 Standar IEEE 802.15.4 Zigbee](#2.4standarieee802.15.4zigbee)
        *   [2.4.1 PHY Layer](#2.4.1phylayer)
        *   [2.4.2 MAC Layer](#2.4.2maclayer)
        *   [2.4.3 Network Layer](#2.4.3networklayer)
        *   [2.4.4 Application Layer](#2.4.4applicationlayer)
    *   [2.5 Intel Mote 2 (Imote2)](#2.5intelmote2(imote2))
        *   [2.5.1 Radio Processor Board IPR2400](#2.5.1radioprocessorboardipr2400)
        *   [2.5.2 Interface Board IIB400](#2.5.2interfaceboardiib400)
        *   [2.5.3 Sensor Board IMB400](#2.5.3sensorboardimb400)
        *   [2.5.4 Power Supply Board IBB2400](#2.5.4powersupplyboardibb2400)
    *   [2.6 JPEG2000](#2.6JPEG2000)
        *   [2.6.1 Codestream syntax](#2.6.1codestreamsyntax)
        *   [2.6.2 Data Ordering](#2.6.2dataordering)
        *   [2.6.3 Arithmetic Entropy Coding](#2.6.3arithmeticentropycoding)
        *   [2.6.4 Coefficient Bit Modeling](#2.6.4coefficientbitmodeling)
        *   [2.6.5 Quantization](#2.6.5quantization)
        *   [2.6.6 Transform](#2.6.6transform)
        *   [2.6.7 DC Level, Component Transform](#2.6.7dclevelcomponenttransform)
        *   [2.6.8 Region of Interest](#2.6.8regionofinterest)
    *   [2.7 Peak Signal to Noise Ratio](#2.7peaksignaltonoiseratio)
*   [BAB 3 Metode Penelitian](#bab3metodepenelitian)
    *   [3.1 Lokasi dan Waktu Penelitian](#3.1lokasidanwaktupenelitian)
    *   [3.2 Sumber dan Jenis Data Penelitian](#3.2sumberdanjenisdatapenelitian)
    *   [3.3 Instrumen dan Bahan Penelitian](#3.3instrumendanbahanpenelitian)
    *   [3.4 Tahapan Penelitian](#3.4tahapanpenelitian)
        *   [3.4.1 Implementasi IEEE 802.15.4 Zigbee untuk transmisi citra](#3.4.1implementasiieee802.15.4zigbeeuntuktransmisicitra)
        *   [3.4.2 Testbed](#3.4.2testbed)
    *   [3.5 Alur Analisis](#3.5aluranalisis)
*   [BAB 4 Pembahasan](#bab4pembahasan)
    *   [4.1 Program Transmisi](#4.1programtransmisi)
        *   [4.1.1 Program Pengirim](#4.1.1programpengirim)
        *   [4.1.2 Program Penerima](#4.1.2programpenerima)
    *   [4.2 Kompilasi Openjpeg](#4.2kompilasiopenjpeg)
    *   [4.3 Implementasi Testbed](#4.3implementasitestbed)
        *   [4.3.1 Program Perintah](#4.3.1programperintah)
        *   [4.3.2 Penempatan Program](#4.3.2penempatanprogram)
        *   [4.3.3 Konfigurasi Startup](#4.3.3konfigurasistartup)
        *   [4.3.4 Penggunaan Testbed](#4.3.4penggunaantestbed)
    *   [4.4 Analisis Data](#4.4analisisdata)
        *   [4.4.1 Konsumsi Daya Listrik](#4.4.1konsumsidayalistrik)
        *   [4.4.2 Waktu Proses Transmisi](#4.4.2waktuprosestransmisi)
        *   [4.4.3 Kualitas Citra](#4.4.3kualitascitra)
        *   [4.4.4 Besar File dan Memory](#4.4.4besarfiledanmemory)
*   [BAB 5 Penutup](#bab5penutup)
    *   [5.1 Simpulan](#5.1simpulan)
    *   [5.2 Saran](#5.2saran)
*   [Daftar Pustaka](#daftarpustaka)

## Abstrak

Beberapa tahun ini jaringan sensor nirkabel (JSN) telah memberikan trobosan dalam bidang monitoring dari monitoring curah hujan di kebun hingga monitoring detak jantung di bidang kesehatan. Teknologi ini dikenal atas konsumsi energi yang sangat rendah dan sederhana, bahkan saat ini sedang dikembangkan agar dapat beroperasi tanpa sumber daya, melainkan menggunakan energi sekitar yang tersedia seperti menggunakan masukkan energi dari gelombang elektromagnetik stasiun TV. JSN awalnya fokus pada data yang dapat dikirim pada kapasitas kanal bit rate rendah. Di penelitian ini lebih kepada JSN dengan kapasitas kanal bit rate yang lebih tinggi agar dapat transmisi data multimedia khusus disini adalah transmisi citra, sehingga istilah JSN dapat diturunkan menjadi jaringan sensor visual nirkabel (JSVN). Platform yang digunakan adalah Imote2 dengan radio berbasis IEEE 802.15.4 ZigBee serta ciri khas utama dari penelitian ini adalah mengimplementasi embedded system Linux, yang belum pernah dilakukan sebelumnya. Selama ini tidak ada publikasi yang mendeskripsikan skema transmisi citra di Imote2 Linux, dengan kata lain belum ada informasi yang berkaitan dengan transmisi citra. Di penelitian ini dibahas secara detil skema transmisi citra antar Imote2 Linux versi penulis serta skema agar dapat difungsikan sebagai testbed, mulai dari aplikasi yang ditulis dalam bahasa C, kompilasi beberapa kebutuhan testbed, hingga implementasi testbed. Selebihnya kinerja dari Imote2 Linux diuji dengan mentransmisikan citra tanpa kompresi dan dengan kompresi standar JPEG2000 dimana kompresi dilakukan di embedded system Imote2 Linux oleh software OpenJPEG. Hasil menunjukkan perbedaan yang signifikan antara transmisi tanpa kompresi dengan transmisi dengan kompresi.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

JSN (Jaringan sensor nirkabel) atau lebih dikenal dengan WSN (wireless sensor network) merupakan suatu sistem jaringan nirkabel yang menggunakan perangkat sensor untuk mendapatkan informasi. Sensor-sensor ini didistribusikan di suatu wilayah yang saling terhubung secara nirkabel (membentuk jaringan) untuk mengumpulkan informasi yang ada di sekitarnya seperti pada Gambar 1.1\. JSN ini telah diterapkan di bidang sipil, medis, dan lain-lain (Shwe dkk, 2013). Terdapat beberapa jenis sensor antara lain sensor suhu, gerak, kadar keasaman, suara, dan kamera. Pada penelitian ini digunakan WVSN (Wireless Visual Sensor Network) atau JSVN (Jaringan Visual Sensor Nirkabel), yaitu JSN yang berbasis sensor kamera.



![Gambar 1.1 Gambaran JSN WSN.png](https://cdn.steemitimages.com/DQmeTuVYc3crnLCYCRxbgpkbXyM9nuvV8m8SqycGCW5xqqv/Gambar%201.1%20Gambaran%20JSN%20WSN.png)

Gambar 1.1 Gambaran JSN/WSN



Salah satu contoh penerapan JSN adalah penelitian Garcia-Sanchez (2010) tentang pemantauan hewan liar terhadap infrastruktur transportasi yang berada di alam liar. Hal yang dipantau adalah interaksi hewan seperti frekuensi dan waktu hewan melintasi jalan raya atau underpass, lama hewan berada pada tempat tersebut, dan bagaimana sikap hewan terhadap infrastruktur transportasi tersebut. Dari pemantauan ini dapat dilihat apakah infrastruktur transportasi aman, menarik perhatian hewan, secara keseluruhan bagaimana keadaan infrastruktur transportasi dan keadaan alam disekitarannya. Pemantauan dilakukan dengan memasang sensor kamera dan sensor gerak platform Imote2 di wilayah infrastruktur transportasi seperti gerbang masuk underpass, dalam underpass, tepi jalan raya, diatas pohon, atau jurang seperti Gambar 1.2\. Beberapa faktor seperti tidak ada power source (sumber daya), lingkungan yang tidak memungkinkan untuk instalasi perangkat besar seperti jurang, zona berbahaya, dataran yang tidak merata/miring, dan kondisi mahkluk hidup sekitar yang sensitif (cenderung menyerang perangkat atau menghidari perangkat tersebut), ataupun faktor waktu yang membutuhkan pemantauan segera sehingga tidak mungkin untuk menghabiskan waktu untuk instalasi perangkat besar, dan banyak faktor-faktor lainnya, contoh serupa di bidang militer untuk mendeteksi keberadaan musuh harus menggunakan perangkat minimalis dan berukuran kecil agar tidak mudah dideteksi, untuk hal ini JSN merupakan suatu pilihan karena praktis untuk diterapkan.



![Gambar 1.2 Contoh penerapan JSN pada jalan di alam bebas.jpg](https://cdn.steemitimages.com/DQmdmmeB8xW7nmhFS1Kdnp3MUuimYZPRb6yboE82h9KsTxC/Gambar%201.2%20Contoh%20penerapan%20JSN%20pada%20jalan%20di%20alam%20bebas.jpg)

Gambar 1.2 Contoh penerapan JSN pada jalan di alam bebas (Garcia-Sanches, 2010)



Penelitian JSN saat ini mengarah pada penghematan energi dengan tetap memaksimalkan kinerja dengan kata lain, mendapatkan informasi sebanyak mungkin dengan konsumsi energy seminimal mungkin.Hal ini dikarenakan JSN memiliki sumber daya yang dan kemampuan komputasi yang terbatas. Imote2 sendiri menggunakan 4 batterai AAA sebagai sumber daya, memiliki kemampuan processing 13-416 MHz, program memory 32 MB, RAM (Random Access Memory) 256 kB sebagai tempat penampung sementara pada tahap processing, dan transmission rate maksimum 250 kbps point-to-point. Walaupun spesifikasi Imote2 unggul dibanding dengan platform lainnya seperti terlihat pada Tabel 1.1 tetapi masih jauh dibanding dengan PC (Private Computer) sekarang yang memiliki spesifikasi minimal processor > 1 GHz, RAM > 1 GB, dan kapasitas harddisk > 50 GB.



Tabel 1.1 Mote hardware (Akyildiz, 2010)

![Tabel 1.1 Mote hardware.png](https://cdn.steemitimages.com/DQmWCf14HbMRdD8HQvqpyeNooPtTeyTXqjSChivR5GdNfjq/Tabel%201.1%20Mote%20hardware.png)



Dari keterbatasan tersebut salah satu upaya penghematan adalah penentuan media transmisi yang tepat. Terdapat banyak jenis standar untuk media transmisi nirkabel seperti WLAN (Wireless Local Area Network), Broadband Wireless, dan WPAN (Wireless Personal Area Network). WLAN distandarkan pada IEEE 802.11 memiliki jakauan yang luas > 1 km dengan max data rate 54 Mbps pada IEEE 802.11g, standar ini lebih cocok untuk komunikasi nirkabel pada komputer. Broadband Wireless memiliki jangkauan yang lebih luas dengan max data rate IEEE 802.16m 100 Mbps lebih dikenal dengan WMAN (Wireless Metropolitan Area Network). Namun dari hasil penelitian sebelumnya yaitu penelitian Wiasta (2012), Natha (2012), dan penulis sendiri Purnama (2013) tidak effisien dalam transmisi data biner menggunakan WLAN. Hasilnya jauh bila dibandingkan dengan menggunakan standar WPAN dapat dilihat pada Gambar 1.3\. Untuk perangkat portable disediakan standar IEEE 802.15 WPAN. IEEE 802.15.1 Bluetooth menyediakan maxdata rate 723.2 kbps dengan jangkauan 10 meter biasa digunakan untuk transmisi suara dan data, diaplikasikan pada handphone dan gadget. IEEE 802.15.2 mengatur komunikasi antar WPAN dengan jaringan nirkabel lainnya. IEEE 802.15.3 HR-WPAN (High Data Rate Wireless Personal Area Network) dengan data rate 11-55 Mbps dengan jangkauan > 70 meter biasa digunakan untuk multimedia. Yang cocok untuk digunakan pada JSN adalah standar IEEE 802.15.4 LR-WPAN (Low Data Rate Wireless Personal Area Network) karena bersifat konsumsi daya rendah dan data rate 20, 40, 250 kbps point-to-point dengan jangkauan 10 meter (Ahmad, 2005). IEEE 802.15.4 mengembangkan PHY layer, MAC layer, dan NWK layer, sedangkan Zigbee mengembangkan application layer selengkapnya dapat dilihat di BAB II. Keterbatasan transmisi pada IEEE 802.15.4 Zigbee adalah data rate maksimal 250 Kbps point-to-point dengan PHY layer maksimal besar paket adalah 127 byte dikurangi dengan header 89 byte. Fragmentation dan reassembly tidak dilakukan pada NWK layer oleh karena itu harus dikembangkan aplikasi pada application layer untuk fragmentation dan reassembly serta disesuaikan untuk transmisi citra (Pekhteryev, 2005).

  

![Gambar 1.3 Konsumsi daya listrik pada transmisi data biner JSVN Imote2 (a) Imote2 dengan WLAN .PNG](https://cdn.steemitimages.com/DQmNuAqtGYxK1i92iN6HVCY7dDtPuu5WYWpRWc2LvHauds4/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(a)%20Imote2%20dengan%20WLAN%20.PNG)

![Gambar 1.3 Konsumsi daya listrik pada transmisi data biner JSVN Imote2 (b) catu daya WLAN.PNG](https://cdn.steemitimages.com/DQmVZQFsYNELMkq7WihvGaTaHqna9g1vWYG3ajYThbcd8TF/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(b)%20catu%20daya%20WLAN.PNG)

![Gambar 1.3 Konsumsi daya listrik pada transmisi data biner JSVN Imote2 (c) dengan LR-WPAN.PNG](https://cdn.steemitimages.com/DQmU1ZGj911cjKtNdXfnct4q325TGp7yNXWgHe5BHAxCuSJ/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(c)%20dengan%20LR-WPAN.PNG)

Gambar 1.3 Konsumsi daya listrik pada transmisi data biner JSVN Imote2 (a) Imote2 dengan WLAN (b) catu daya WLAN (c) dengan LR-WPAN (Natha, 2012, dan Wiasta, 2012)



Upaya lain adalah menggunakan sistem operasi yang ringan. Sebelumnya Imote2 bekerja pada Intel Platform X. Setelah Imote2 Pindah ke Crossbow, Intel Platform X tidak lagi dikembangkan karena Crossbow mengeluarkan sistem operasinya sendiri. Sistem operasi yang digunakan kebanyakan sistem operasi yang dikembangkan oleh komunitias seperti SOS (Simple Operating System) tetapi SOS berhenti dikembangkan sejak tahun 2008\. Sekarang ini yang digunakan adalah TinyOS dan yang terbaru Linux. Kebanyakan publikasi di web menggunakan TinyOS. Sekarang dikembangkan embedded Linux karena ditemukan batasan-batasan pada TinyOS seperti routing yang kompleks. Komunitas embedded Linux memandang sistem operasi Linux pada Imote2 dapat mengatasi keterbatasan tersebut. Namun embedded Linux pada Imote2 masih bersifat baru dan sedang dikembangkan (Kasteleiner, 2010). Alasan utama digunakan Linux karena bersifat opensource yang artinya gratis, terbuka dan boleh dikembangkan oleh siapapun.

Penelitian ini mengarah ke emebedded system Imote2 Linux. Sebelum telah berhasil mengembed Linux ke platform Imote2 dan berhasil mengirim data acak maksimal 28 byte, kali ini agar Imote2 Linux dapat mentransmisikan citra dengan radio berbasis IEEE 802.15.4 ZigBee. Setelah dapat melakukan transmisi akan diamati kinerja transmisi Imote2 Linux.

### 1.2 Rumusan Masalah

1.  Bagaimana skema transmisi citra dengan media nirkabel berbasis IEEE 802.15.4 ZigBee pada JSVN platform Imote2 di embedded Linux?
2.  Bagaimana kinerja JSVN platform Imote2 berbasis IEEE 802.15.4 Zigbee pada transmisi citra di embedded Linux?

### 1.3 Tujuan Penelitian

1.  Untuk mendapatkan skema transmisi citra dengan media nirkabel berbasis IEEE 802.15.4 Zigbee pada JSVN platform Imote2 di embedded Linux.
2.  Untuk mendapatkan skema transmisi citra yang kokoh pada JSVN platform Imote2 berbasis IEEE 802.15.4 Zigbee di embedded Linux.

### 1.4 Manfaat Penelitian

1.  Mendapatkan skema transmisi citra dengan media nirkabel berbasis IEEE 802.15.4 Zigbee pada JSVN platform Imote2 di embedded Linux.
2.  Mendapatkan skema yang optimal untuk mentransmisikan citra pada JSVN platform Imote2 di embedded Linux.
3.  Mendapatkan hasil kinerja JSVN platform Imote2 dalam transmisi citra yang mengimplementasikan IEEE 802.15.4 Zigbee di embedded Linux.

### 1.5 Batasan Masalah

1.  Menggunakan JSVN platform Imote2.
2.  Imote2 menggunakan operating system embedded Linux.
3.  Pengolahan citra menerapkan standar JPEG2000.
4.  Sistem transmisi antar Imote2 Linux.

## BAB 2 Tinjauan Pustaka

### 2.1 Penelitian Sebelumnya

Pada penelitian sebelumnya adalah implementasi embedded Linux pada JSVN platform Imote2\. Pertama Imote2 menggunakan sistem operasi dari Crossbow. Setelah itu diinstalasi TinyOS, sekarang dicoba digunakan embedded Linux. Ada 3 hal yang dibahas yaitu prosedur instalasi embedded Linux, konfigurasi pasca instalasi, dan diamati kinerja JSVN platform Imote2 dengan mengukur memory yang dikonsumsi dan daya listrik yang dikonsumsi saat mentransmisikan data biner. Prosedur instalasi meliputi cross compile Linux kernel dan driver ke arsitekur ARM yaitu yang digunakan oleh Imote2, penyiapan bootloader dan filesystem, dan pengembedan/pemasukan bootloader, kernel, dan filesystem ke Imote2 menggunakan software OpenOCD chip debugger. Untuk melakukan hal ini diperlukan komputer dengan sistem operasi Linux. Pasca pengembedan/pemasukan diaktifkan jaringan IP (Internet Protocol), SSHD (Secure Shell Daemon), dan radio melalui Telnet. Perintah untuk konfigurasi hal tersebut bersifat umum yang digunakan pada Linux berbasis Debian, Ubuntu, dan sejenisnya. Tahap akhir penelitian adalah mengamati kinerja pentransmisian data biner pada jarak 10m, 20m, dan 30m. Transmisi dicoba pada 2 jenis media transmisi nirkabel yaitu IEEE 802.11 WLAN dan IEEE 802.15.4 Zigbee juga disebut LR-WPAN. Perlu ditambahkan catu daya dan perangkat radio WLAN TP-LINK untuk mengimplementasikan WLAN. Dibuatkan daughter board untuk menghubungkan perangkat, dari segi software dibutuhkan driver.Sedangkan pengimplementasian Zigbee telah tersedia di Imote2, tinggal menjalankan driver dan membuat script untuk mentransmisikan data biner. Pada hasil akhir Zigbee lebih hemat dari segi konsumsi tegangan dan arus listrik dapat dilihat pada Gambar 2.1, Gambar 2.2, dan Gambar 2.3\. Nilai konsumsi daya listrik adalah hasil perkalian dari tegangan dan arus listrikpada gambar sebelumnya yaitu gambar 1.2 (Natha, 2012, Wiasta, 2012, Purnama, 2013).

 
![Gambar 2.1 Konsumsi pada baterai Imote2 berbasis WLAN (a) tegangan.PNG](https://cdn.steemitimages.com/DQmXdEywk77mqYhsPrxtZgHyMwbHoKSX5MqFueCNVcjrX97/Gambar%202.1%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20WLAN%20(a)%20tegangan.PNG)

![Gambar 2.1 Konsumsi pada baterai Imote2 berbasis WLAN (b) arus.PNG](https://cdn.steemitimages.com/DQmdnTnrAqF2ArJU1yVvqZjHF8yfPGSoSBAurzffVVsVhRJ/Gambar%202.1%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20WLAN%20(b)%20arus.PNG)


Gambar 2.1 Konsumsi pada baterai Imote2 berbasis WLAN (a) tegangan (b) arus



 
![Gambar 2.2 Konsumsi pada baterai Catu Daya USB WLAN (a) tegangan.PNG](https://cdn.steemitimages.com/DQmTtDpabHHjyuLZfb1RGj5rsXP9BHtkJFULUsxtinTBzba/Gambar%202.2%20Konsumsi%20pada%20baterai%20Catu%20Daya%20USB%20WLAN%20(a)%20tegangan.PNG)

![Gambar 2.2 Konsumsi pada baterai Catu Daya USB WLAN (b) arus.PNG](https://cdn.steemitimages.com/DQmPBgqX1mCbxKVij2asXFiqwfhy9ddf4397tuKcBuVf512/Gambar%202.2%20Konsumsi%20pada%20baterai%20Catu%20Daya%20USB%20WLAN%20(b)%20arus.PNG)


Gambar 2.2 Konsumsi pada baterai Catu Daya USB WLAN (a) tegangan (b) arus



 
![Gambar 2.3 Konsumsi pada baterai Imote2 berbasis Zigbee (a) tegangan.PNG](https://cdn.steemitimages.com/DQmUKZ7q4Xu81djQNcFsmZyEC5XUVjQaWCyrUs4D45e13pE/Gambar%202.3%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20Zigbee%20(a)%20tegangan.PNG)

![Gambar 2.3 Konsumsi pada baterai Imote2 berbasis Zigbee (b) arus.PNG](https://cdn.steemitimages.com/DQmRRfQbTBzSmAh2Wiw8Gn1sNrUJdMDnoMH5GzTJUAjDLHs/Gambar%202.3%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20Zigbee%20(b)%20arus.PNG)


Gambar 2.3 Konsumsi pada baterai Imote2 berbasis Zigbee (a) tegangan (b) arus



### 2.2 Tinjauan Mutahir (State of The Art)

Penelitian ini adalah lanjutan dari penelitian sebelumnya yang akan meneliti kinerja JSVN platform Imote dengan sistem operasi embedded Linux dalam mentransmisikan citra melalui media transmisi berbasis IEEE 802.15.4 Zigbee. Jika sebelumnya hanya mentransmisikan data biner, kali ini mentransmisikan citra. Diutamakan mengunakan media transmisi berbasis IEEE 802.15.4 Zigbee karena terbukti sebelumnya lebih effisien.

Gagasan untuk meneliti pentransmisian citra dengan 4 skalabilitas yang berbeda berdasarkan wavelet (tahap penelitian pada BAB III) didapatkan dari penelitian Nasri (2010). Penelitian Nasri (2010) meneliti penerapan JPEG2000 secara distributif transmisi citra pada JSVN. Secara rinci skema JSVN dibagi atas 7 cluster (7 kelompok perangkat JSVN) dimana masing-masing cluster diberi sebagian tahap standar kompresi JPEG2000 (JPEG200 dapat dilihat pada sub-bab 2.6) dapat dilihat pada Gambar 2.4\. Dengan skenario ini muncul gagasan untuk mentransmisikan citra dengan skalabilitas yang berbeda berdasarkan standar JPEG2000 dalam penelitian pada penulisan ini.


![Gambar 2.4 Skema kompresi JPEG2000 terdistribusi pada JSN.jpg](https://cdn.steemitimages.com/DQmaWdmfndBum25WjwtWEQZrsQ6hTPR8sxRRJVyVZiwLC4Z/Gambar%202.4%20Skema%20kompresi%20JPEG2000%20terdistribusi%20pada%20JSN.jpg)


Gambar 2.4 Skema kompresi JPEG2000 terdistribusi pada JSN (Nasri, 2010)



1.  Cluster pertama melakukan 1D-DWT dengan dekomposisi secara horizontal membentuk sub-band L dan H.
2.  Cluster kedua melakukan 1D-DWT dengan dekomposisi secara vertical membentuk sub-band LL<sub>1</sub>, LH<sub>1</sub>, HL<sub>1</sub>, HH<sub>1</sub>.
3.  Cluster ketiga melakukan 1D-DWT keseluruhan pada sub-band LL<sub>1</sub> untuk membentuk sub-band LL<sub>2</sub>, LH<sub>2</sub>, HL<sub>2</sub>, HH<sub>2</sub>.
4.  Cluster keempat melakukan 1D-DWT keseluruhan pada sub-band LL<sub>2</sub> untuk membentuk sub-band LL<sub>3</sub>, LH<sub>3</sub>, HL<sub>3</sub>, HH<sub>3</sub>.
5.  Cluster kelima melakukan kuantisasi.
6.  Cluster keenam melakukan prosescode block.
7.  Cluster ketuju melakukan entropy coding.

Secara ringkas hasil konsumsi energi tertinggi ada pada cluster pertama dan kedua, selanjutnya konsumsi energi bersifat menurun dari cluster kedua hingga ketuju. Hasil didapatkan dengan menggunakan rumus konsumsi energi khusus tahap JPEG2000, dengan kata lain Penelitian Nasri (2010) bersifat simulasi, bukan penelitian yang menggunakan perangkat langsung.

Penelitian berkaitan adalah kinerja kompresi dan transmisi menggunakan IJG (Independent JPEG Group) library pada platform Imote2 dengan TinyOS berdasarkan hasil penelitian oleh Mowafi (2010). Skenario berupa koneksi single-hop atau point-point dimana perangkat JSVN melakukan kompresi JPEG terhadap citra terlebih dahulu sebelum melakukan transmisi. Citra dikompresi dengan quality factor lipatan 5 dari 95-5\. Diukur waktu dan drop tegangan saat kompresi dan transmisi serta diukur PSNR citra. Hasil pengukuran menunjukan konsumsi waktu dan tegangan terhadap proses kompresi citra relatif sama terhadap nilai quality factor, dengan nilai mendekati 0\. Sedangkan hasil pengukuran transmisi menunjukan memerlukan waktu dan tegangan rata-rata 14 detik dan 0.45 mV pada quality factor 95 dan menurun hingga 1 detik dan 0.03 mV pada quality factor 5\. Rentang PSNR dari quality factor 95-5 adalah 47-28 dB.Sehingga kompresi citra JPEG membantu untuk menghemat waktu dan energi dalam transmisi citra. Hasil penelitian dapat dilihat dari pada Gambar 2.5.



![Gambar 2.5 Quality factor terhadap (a) waktu.png](https://cdn.steemitimages.com/DQmTQi8eYEYHt83ywxzTAGmXPEHdUKJd4wzcoS88hyA6CtC/Gambar%202.5%20Quality%20factor%20terhadap%20(a)%20waktu.png)

![Gambar 2.5 Quality factor terhadap (b) drop tegangan.png](https://cdn.steemitimages.com/DQmNLwb9LbB4U1wjQWr75oWqJvDXMoN58TaopzBKLcncnnF/Gambar%202.5%20Quality%20factor%20terhadap%20(b)%20drop%20tegangan.png)

![Gambar 2.5 Quality factor terhadap (c) PSNR.png](https://cdn.steemitimages.com/DQmVVgtm5tyJpzd56PuqgKb8JSUyGHjS6BmqpGkTSV7gkEv/Gambar%202.5%20Quality%20factor%20terhadap%20(c)%20PSNR.png)

Gambar 2.5 Quality factor terhadap (a) waktu (b) drop tegangan (c) PSNR (Mowafi, 2010)



Pada makalah lain Mowafi (2012) mengimplementasikan IJG dan JPEG2000\. Dilakukan variasi quality factor pada IJG dan Compression Ratio pada JPEG2000 dengan menemukan besar file yang sama pada kedua teknik kompresi tersebut. Setelah itu dilakukan perbanding terhadap kedua teknik kompresi tersebut dengan mengukur waktu untuk kompresi, waktu transmisi setelah kompressi, dan konsumsi energi terhadap bit rate. Pengukuran PSNR dari kedua teknik kompresi tersebut juga dilakukan berdsarkan besar file. Terakhir dilakukan simulasi dengan multi-hop sensor dimana waktu dan komsumsi energi menjadi tolak ukur terhadap kedua teknik kompresi tersebut.Parameter didapatkan dari penelitian single-hop sebelumnya. Hasilnya JPEG2000 unggul di sisi PSNR, konsumsi daya listrik saat transmisi, dan waktu transmsisi tetapi JPEG unggul di sisi konsumsi daya listrik dan waktu saat kompresi. Konsumsi saat kompresi pada JPEG paling sedikit dibanding dengan askpek lain, sedangkan konsumsi saat kompresi pada JPEG2000 sebaliknya yaitu paling besar, dari proses keseluruhan kompresi dan transmisi. Hasil penelitian dapat dilihat pada Gambar 2.6\. Sehingga disimpulkan JPEG lebih efisien pada JSVN dengan hop (lompatan) yang pendek karena hemat di sisi kompresi, tidak membutuhkan jalur transmisi yang panjang. Jika dengan hop yang panjang disarankan menggunakan JPEG2000 karena lebih hemat di sisi transmisi. JSVNakan lebih optimal bila diterapkan teknik kompresi yang bervariasi agar bersifat fleksibel terhadap keadaan.

  

![Gambar 2.6 Kompresi Citra terhadap (a) PSNR.png](https://cdn.steemitimages.com/DQmbaULgiU4U52HSeBfu64SYkaFnQcmvQnp2ubkczdjFkRF/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(a)%20PSNR.png)

![Gambar 2.6 Kompresi Citra terhadap (b) Energi.png](https://cdn.steemitimages.com/DQmX8yua4Yb1G7KF54zPG8S9uYnA6AgNfEG7FFzb1CB2Kpj/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(b)%20Energi.png)

![Gambar 2.6 Kompresi Citra terhadap (c) Waktu.png](https://cdn.steemitimages.com/DQmSMkCwCCSuXfUF4G9JY7jTabPuqXeJd3PRPzDWX18b9xZ/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(c)%20Waktu.png)

Gambar 2.6 Kompresi Citra terhadap (a) PSNR (b) Energi (c) Waktu (Mowafi, 2012)



Penelitian Pekhteryev (2005) adalah mentransmisikan citra pada jaringan IEEE 802.15.4 dan Zigbee sangat mirip dengan penelitian ini. Disebabkan oleh kapasitas transmisi yang sangat terbatas dan tidak disediakan fitur fragmentation dan reassembly pada NWK layer diharuskan membuat suatu aplikasi dengan fitur tersebut. Penelitiannya adalah mengamati jumlah pengiriman citra yang error dari pengiriman 100 citra JPEG dan 100 citra JPEG2000 pada jaringan 1-hop dan 2-hop seperti Gambar 2.7, hasil dapat dilihat pada Gambar 2.8 dan 2.9.



![Gambar 2.7 Skenario penelitian.png](https://cdn.steemitimages.com/DQmYd1Gw4pPrBQBSMkjhUdGva9HfW3yYxoehSe3PpjSc9vk/Gambar%202.7%20Skenario%20penelitian.png)

Gambar 2.7 Skenario penelitian (Pekhteryev, 2005)





![Gambar 2.8 Persentase histogram bytes error1.png](https://cdn.steemitimages.com/DQmSiPTwk6EBkKHnttomfn5v7LTH1aBd5wmfuwYRC7v8iUG/Gambar%202.8%20Persentase%20histogram%20bytes%20error1.png)

Gambar 2.8 Persentase histogram bytes error1 (Pekhteryev, 2005)





![Gambar 2.9 Persentase histogram bytes error 2.png](https://cdn.steemitimages.com/DQmWxDWyd6k49VakP9HLqR6ViUwEGdBcpB2KA9mHbxWPgT8/Gambar%202.9%20Persentase%20histogram%20bytes%20error%202.png)

Gambar 2.9 Persentase histogram bytes error 2 Pekhteryev (2005)



Penelitian ini mengimplementasikan transmisi citra pada transmisi IEEE 802.15.4 Zigbee seperti penelitian Pekhteryev (2005). Perbedaan dari penelitian ini adalah penelitian Pekhteryev (2005) menggunakan perangkat M16C mikrokontroller dan lebih menganalisis error transmisi sedangkan penelitian ini menggunakna perangkat platform Imote2 dan lebih menganalisis effisiensi energi transmisi. Selanjutnya akan dicoba bila citra dikompresi terlebih dahulu menggunakan standar JPEG2000 sebelum ditransmisikan seperti penelitian Mowafi (2012). Perbedaan dari penelitian ini dengan Mowafi (2010, 2012) adalah sistem operasi yang digunakan, penelitian Mowafi (2010, 2012) menggunakan TinyOS sedangkan penelitian ini menggunakan embedded Linux. Selain itu tidak ada penelitian (dari pengetahuan penulis) yang membahas skema transmisi citra pada JSVN IEEE 802.15.4 Zigbee khususnya di embedded system Imote2 Linux. Inti dan perbedaan mendasar dari penelitian ini terhadap yang lain adalah dibuat program transmisi citra dalam bahasa C dan skema agar dapat berfungsi sebagai testbed di Imote2 Linux.

### 2.3 Daya Listrik

Daya listrik merupakan tenaga listrik, secara matematis didefinisikan sebagai energi listrik yang dihasilkan per waktu.

P=dw/dt (2.1)

Dimana:

p = daya listrik (watt)

w = energi listrik (joule)

t = waktu (detik)

Daya listrik dapat dibentuk dari perkalian tegangan listrik dan arus listrik. Jika tegangan listrik adalah energi listrik rata-rata per muatan listrik, dan arus listrik merupakan muatan listrik yang mengalir tiap detik maka perkalian kedua variabel tersebut menghasilkan daya listrik (Irwin, 1993).

V=dw/dq, I=dq/dt, VI=(dw/dq)(dq/dt)=(dw/dt)=P (2.2)

Dimana:

V = tegangan listrik (volt)

q = muatan listrik (coloumb)

I = arus listrik (ampere)

### 2.4 Standar IEEE 802.15.4 Zigbee

Standar ini merupakan kerjasama antar IEEE (Institute of Electronic and Electrical Engineer) dan ZigBee. IEEE fokus mengembangkan standar pada layer dibawahnya yaitu PHY (Physical) layer dan MAC (Media Access Control) atau datalinklayer. Sedangkan ZigBee fokus mengembangkan layer diatasnya, sampai application layer. Standar IEEE 802.15 khusus pada WPAN (Wireless Personal Area Network) dengan tujuan konsumsi daya listrik rendah, jarak pendek, dan ukuran alat kecil. Jika 802.15.1 (bluetooth) merupakan standar menengah, 802.15.3 merupakan HR(high rate)-WPAN dengan data rate tinggi, maka 802.15.4 merupakan LR(low rate)-WPAN dengan data rate rendah namun konsumsi daya listrik rendah. Sedangkan 802.15.2 merupakan standar untuk menghubungkan antar jenis perangkat wireless (Ergen, 2004).


![Gambar 2.10 Arsitektur standar IEEE 802.15.4 ZigBee.png](https://cdn.steemitimages.com/DQmWAtfzf2S81xHucqvFYjrsTuw65gTfEk4janegcoALosz/Gambar%202.10%20Arsitektur%20standar%20IEEE%20802.15.4%20ZigBee.png)


Gambar 2.10 Arsitektur standar IEEE 802.15.4 ZigBee (Daintree Network, 2006)



#### 2.4.1 PHY Layer

Merupakan layer paling bawah yang mengatur transmisi. Pembentukan symbol menggunakan modulasi O-QPSK (Offset Quadriture Phase Shift Keying) untuk mengurangi konsumsi pada transmisi. Operating frequency bands dibagi atas 27 channel berdasarkan DSSS (Direct Sequence Spread Spectrum) seperti pada gambar 2.11.



![Gambar 2.11 Operating frequency band.png](https://cdn.steemitimages.com/DQmVQNe9Y4Mqn1bo7hrbP6vte18YPV8EoWUBPUrUAuiN9Rg/Gambar%202.11%20Operating%20frequency%20band.png)

Gambar 2.11 Operating frequency band (Ergen, 2004)



Channel 0 berada pada frekuensi 868.3 MHz dengan data rate 20 Kbps, channel 1-10 berada pada frekuensi 902 Mhz dengan jarak antar channel 2 MHz dengan data rate 40 Kbps, dan channel 11-26 berada pada frekuensi 2.4 GHz dengan jarak antar channel 5 MHz dengan data rate 250 Kbps. Sensitivitas minimum channel 0-10 -92dBm sedangkan channel 11-26 adalah 85 dBm (Ergen, 2004), selengkapnya dapat dilihat pada tabel 2.1.



Tabel 2.1 Frequency bands and data rates (Ergen, 2004)

![Tabel 2.1 Frequency bands and  data rates.png](https://cdn.steemitimages.com/DQmVaRskCw7du6rJYv6SexWR1RtMhoaQ4KPRCFb7esDKwi5/Tabel%202.1%20Frequency%20bands%20and%20%20data%20rates.png)



Fitur dari PHY layer (Ergen, 2004):

1.  Activation dan deactivation radio tranceiver.
2.  Receiver ED (Energy Detection).
3.  LQI (Link Quality Indication).
4.  CCA (Clear Channel Assessment).
5.  PPDU (Physical Protocol Data Unit) packet.


![Gambar 2.12 Format PPDU.png](https://cdn.steemitimages.com/DQmZkE2sWxU1by4jrizRp2gEMCyG5NeX6Mca5m15JSnwEPC/Gambar%202.12%20Format%20PPDU.png)


Gambar 2.12 Format PPDU (Ergen, 2004)



#### 2.4.2 MAC Layer

MAC layer merupaka layer yang mengatur aliran data dari PHY layer menuju network layer dan sebaliknya. Suatu perangkat dapat berupa FFD (Full Function Device) atau RFD (Reduced Function Device). Suatu FFD dapat berfungsi sebagai PAN (Personal Area Network) coordinator, coordinator, atau member. MAC layer mengatur perangkat sebagai berikut (Ergen, 2004):

1.  Model transfer data, dapat dibagi menjadi 3 yaitu coordinator-device, device-coordinator dan device-device. Dapat diatur untuk menggunakan beacon atau tidak. Bila menggunakan beacon akan menggunakan format superframe structure dan bila tidak akan menggunakan unslotted CSMA-CA (Carrier Sense Multiple Access Carrier Avoidance). Format beacon frame dapat dilihat pada gambar 2.13.


![Gambar 2.13 Beacon frame.png](https://cdn.steemitimages.com/DQmekHZ4SGqg7WhcAs2DN37sSeDsPEPeMrwFL4tm9NgQF2q/Gambar%202.13%20Beacon%20frame.png)
    

Gambar 2.13 Beacon frame

    

2.  Dapat menggunakan superframe structure atau tidak. Superframe structure dapat dilihat pada gambar 2.14.


![Gambar 2.14 Superframe structure.png](https://cdn.steemitimages.com/DQmekgGCQPMZettZS28uZasi1tpFUHsfJTpN5swKXCUmq79/Gambar%202.14%20Superframe%20structure.png)


Gambar 2.14 Superframe structure

    

Dari struktur pada gambar 2.14 terlihat ada 3 periode. Pada periode inactive perangkat dalam keadaan tidak aktif. Pada periode CFP (Contention Free Period) terdapat GTS (Guaranteed Time Slot) dari channel 11-15, perangkat lain yang hendak berhubungan dengan perangkat dalam keadaan CFP langsung dapat berhubungan. Sedangkan pada CAP (Contention Access Period) perangkat harus bersaing menggunakan slotted CSMA-CA untuk berhubungan. Algoritma CSMA-CA dapat dilihat pada gambar 2.15.


![Gambar 2.15 Algoritma CSMA-CA.png](https://cdn.steemitimages.com/DQmadNy7i3vYT2BfqoxAfD7gpQS74Kg4y6QwigwyEYDvaL9/Gambar%202.15%20Algoritma%20CSMA-CA.png)


Gambar 2.15 Algoritma CSMA-CA

    

3.  Memulai dan menjaga PAN. Suatu PAN akan dimulai setelah melakukan active channel scan, bila terdapat PAN yang sama pada suatu POS atau disebut sebagai conflict perangkat akan menjalankan identifier conflict resolution procedure.
4.  Mengatur association dan disassociation. Suatu perangkat yang hendak associate dengan suatu PAN akan mengirim data-request ke coordinator. Selanjutnya coordinator akan mengirim acknowledgement. Walaupun acknoledgement telah sampai belum tentuk perantkat yang mengirim data-request tersebut telah associate, tergantung dari coordinator. Bila coordinator hendak disassociate suatu perangkat atau perangkat ingin disassociate diri maka mengirim data-request. Walaupun acknoledgement belum terkirim perangkat yang mengirim data requeset segera disassociate setelah pengiriman. Data frame dapat dilihat pada gambar 2.16, dan acknoledgement frame dapat dilihat pada gambar 2.17.

    

![Gambar 2.16 Data frame.png](https://cdn.steemitimages.com/DQmbUxp9VtxvMxp5sUjJxzYfg6br3BKypqLxDES2ysmTFPx/Gambar%202.16%20Data%20frame.png)

Gambar 2.16 Data frame




![Gambar 2.17 Acknowledgment frame.png](https://cdn.steemitimages.com/DQmZd4JaUzhTPTScNhGnqWGDmiJS2XYYj9TR7mQJ7h9zJNx/Gambar%202.17%20Acknowledgment%20frame.png)


Gambar 2.17 Acknowledgment frame

    

5.  Mengatur sinkronisasi. Sinkronisasi dapat menggunakan beacon, bila tidak maka meminta informasi dengan coordinator.
6.  MAC frame format, dapat dilihat pada gambar 2.18\. MAC Command frame dapat dilihat pada gambar 2.19.

    

![Gambar 2.18 General MAC frame format.png](https://cdn.steemitimages.com/DQmfRCvimR6Z1hMJo7rF9Tp1Lkd153TkJRfPPDC61FHbJA4/Gambar%202.18%20General%20MAC%20frame%20format.png)

Gambar 2.18 General MAC frame format




![Gambar 2.19 MAC Command Frame.png](https://cdn.steemitimages.com/DQmUrLCpYbqL1xf1ziYEpcRYXMdLnperQHLu429o51tJc5T/Gambar%202.19%20MAC%20Command%20Frame.png)


Gambar 2.19 MAC Command Frame

    

#### 2.4.3 Network Layer

Network layer mengatur jaringan termasuk mekanisme routing. Pada layer ini secara umum menggunakan dua algoritma yaitu AODV (Ad Hoc On Demand Distance Vector) dan Cluster-Tree algorithm milik Motorola (Ergen, 2004).

1.  AODV merupakan pure on-demand route acquisition algorithm, dimana perangkat tidak berada pada jalur aktif, menetapkan informasi routing, ataupun berpatisipasi secara periodik saling tukar-menukar tabel routing. Perangkat tidak harus mengetahui jalur menuju perangkat lain pada suatu jaringan bila tidak perlu berkomunikasi. Path discovery (pencarian jalur) dilakukan bila perangkat perlu berkomunikasi. Pertama perangkat akan mengirim paket RREQ (Route Request) yang terdiri dari source addr, source sequence number, broadcast id, dest addr, dest sequence number, hop cnt. Perangkat akan mulai berkomunikasi bila menerima RREP (Route Reply) yang terdiri dari source addr, dest addr, dest sequence number, hop cnt, lifetime.
2.  Motorola's Cluster-Tree Algorithm, pada algoritma ini terlebih dahulu ditunjuk perangkat sebagai DD (Degsinated Device). DD merupakan perangkat inti dari sebuah topologi, sehingga segala informasi dari topologi akan disimpan pada DD, dari informasi ini diketahui optimalisasi topologi yang dibentuk. Ditentukan bahwa DD berada pada cluster ke-0\. Setelah itu DD akan memberi CID (Cluster Identity) kepada CH (Cluster Head). Melalui CH diberi ID (Identity) dan diperiksa perangkat sekitarnya yang akan dijadikan anggota dari CH dan membentuk topologi star. Penghubung antar cluster disebut border node. Topologi keseluruhan akan membentuk tree dapat dilihat pada gambar 2.20.

    

![Gambar 2.20 Multicluster network.png](https://cdn.steemitimages.com/DQmYZuYPoyofQMHkJmjx2eKiwN3whvjD2C2mgeUooDJmH1K/Gambar%202.20%20Multicluster%20network.png)

Gambar 2.20 Multicluster network

    

#### 2.4.4 Application Layer

Layer ini terdiri dari application framework dan application support (APS) sublayer. Application framework mengatur komunikasi yang menghubungkan antara end-user dengan layer dibawah application. Sedangkan application support sublayer mengatur hubungan antara application framework dan network layer, secara spesifik mengatur application profile, cluster, dan endpoints. Application profile menggambarkan sekumpulan perangkat yang berkerja pada suatu aplikasi spesifik, contohnya application profile untuk home automation system dan commercial, industry dan institutional. Suatu perangkat pada sebuah application profile berkomunikasi dalam sebuah cluster, contohnya pada home automation profile terdapat cluster yang mengatur subsistem pencahayaan. Sedangkan endpoints merupakan entitas komunikasi, yang telah ditentukan mengenai aplikasi yang dijalankan contohnya tombol pada remote control.

Hal yang penting dari application support sublayer adalah binding, dimana disini diartikan sebagai penghubung antar endpoints contohnya untuk menghidupkan lampu dengan tombol pada remote. Binding dapat bersifat direct maupun indirect. Hubungan langsung antara remote dengan lampu merupakan direct binding. Yang bersifat indirect binding terdapat penerus diantara remote dengan lampu, biasanya terdapat cluster library. Perintah pada cluster library ada yang dapat dipakai bersama, hanya perlu ditambahkan cluster ID pada perintah tersebut, contohnya perintah on/off yang perlu ditambahkan cluster ID terhadap perangkat yang dituju (Daintree Network, 2006).

Fragmentation dan reassembly tidak dilakukan pada NWK layer oleh karena itu harus dikembangkan aplikasi pada application layer untuk fragmentation dan reassembly serta disesuaikan untuk transmisi citra (Pekhteryev, 2005).

### 2.5 Intel Mote 2 (Imote2)

Imote2 merupakan platform pada perangkat JSN yang dikembangkan oleh Intel Research pada bagian penelitian Platform X. Perangkat ini dibangun dengan konsumsi daya listrik yang rendah, dengan processor PXA271 XScale CPU, dan terintegrasi pada IEEE 802.15.4 ZigBee (Stanford, 2013). Processor ini (Intel Xscale processor PXA271) dapat beroperasi pada tegangan rendah (0.85V) dan frekuensi 13MHz hingga 104MHz. Frekuensi dapat dinaikkan hingga 416MHz dengan mengatur tegangan. Secara umum Imote2 terdiri dari 4 bagian seperti terlihat pada Gambar 2.21.



![Gambar 2.21 Imote2.png](https://cdn.steemitimages.com/DQmUtLhce86dRz3cy5stcgCuiZZhRhtAg8MrRvP6JYvspg4/Gambar%202.21%20Imote2.png)

Gambar 2.21 Imote2 (a) radio processor board (IPR2400) (b) interface board (IIB400) (c) sensor board (IMB400)(d) power supply board (IBB2400).



#### 2.5.1 Radio Processor Board IPR2400

Spesifikasi IPR2400 dapat dilihat sebagai berikut (crossbow, 2007):

1.  PXA271 XScale® processor @ [13–416] Mhz.
2.  Wireless MMX coprocessor.
3.  256kB SRAM, 32MB FLASH, 32MB SDRAM.
4.  Integrated 802.15.4 radio, support for external radios through SDIO and UART.
5.  Integrated 2.4GHz antenna.
6.  Multicolor status indicator LED.
7.  Basic and advanced expansion connectors supporting : 3xUART, I2C, 2xSPI, SDIO, I2S, AC97, USB host, Camera I/F, GPIO.
8.  Mini-USB port for direct PC connection.
9.  Size: 48 mm x 36 mm. PCB thickness 1.75 mm

#### 2.5.2 Interface Board IIB400

Spesifikasi IIB400 dapat dilihat sebagai berikut (crossbow, 2007):

1.  Mote connectors 2x Advanced (male/female).
2.  USB connector mini-B female.
3.  Serial port A virtual UART with RTS/CTS flow control.
4.  Sertial port B virtual UART without hardware flow control.
5.  JTAG port standard 20-pin connector.
6.  Size 48mm x 36mm x 14m.
7.  Weight 11g.

#### 2.5.3 Sensor Board IMB400

Spesifikasi IMB400 dapat dilihat sebagai berikut (crossbow, 2007):

1.  Camera
    *   Image resolution up to 640x480 pixels, 30 fps max. RGB, YcbCr or YUV formats.
    *   Hardware image scaling and filtering – automatic exposure, gain, white balance, black level.
    *   Image controls include saturation, hue, gamma, sharpness.
2.  Audio Codec
    *   Sampling rates up to 48kHz, mono.
    *   SNR > 94dB, THD < -80dB
    *   Programmable filters for noise suppression.
3.  PIR Sensor
    *   Maximum range ~ 5m.
    *   Detection angles 80-1000.

#### 2.5.4 Power Supply Board IBB2400

Spesifikasi IBB2400 dapat dilihat sebagai berikut (crossbow, 2007):

1.  Batteries 3 x AAA.
2.  Maximum Current 500mA fused.
3.  Size 52mm x 43mm x 18mm.
4.  Weight with 3 AAA Batteries 51g.
5.  Weight without batteries 14g.

### 2.6 JPEG2000

JPEG2000 merupakan standar kompresi citra yang dikembangkan oleh JPEG (Joint Photographic Expert Group) sekitar tahun 2000 dengan harapan standar kompresi citra ini yang berdasarkan DWT (Discrete Wavelet Transform) memberikan kualitas yang lebih baik dari pada standar kompresi citra sebelum yang dikembangkan pada tahun 1992 yaitu JPEG yang berdasarkan DCT (Discrete Cosine Transform). Adapun keunggulan JPEG2000 dengan JPEG sebagai berikut:

1.  Memberikan rasio kompresi yang lebih besar sekaligus dengan kualitas citra yang lebih baik.
2.  Menggunakan tiling, sehingga pengkodean dapat dilakukan hanya pada bagian citra tertentu, tidak harus dilakukan pengkodean seluruh citra, dengan kata lain, citra dibagi menjadi banyak bagian.
3.  Progressive transmission dengan pixel dan akurasi resolusi, artinya citra awalnya diterima pada resolusi rendah, resolusi akan meningkat seiringnya pengiriman data, sehingga dapat bersifat multiresolusi, dapat ditampilkan dengan banyak pilihan resolusi.
4.  Terdapat pilihan kompresi lossless atau lossy yang tidak ada pada JPEG.
5.  Retan terhadap error.
6.  File format yang fleksibel.
7.  Side channel spatial information.

Secara umum teknis dari kompresi citra JPEG2000 dapat dilihat pada gambar 2.22 dan sebaliknya bersifat terbalik.



![Gambar 2.22 Teknik kompresi citra JPEG2000 secara umum.jpg](https://cdn.steemitimages.com/DQmWwbgVhCpqBN9FwG6bADAAs37zNQhSug26tVjsUUuwFne/Gambar%202.22%20Teknik%20kompresi%20citra%20JPEG2000%20secara%20umum.jpg)

Gambar 2.22 Teknik kompresi citra JPEG2000 secara umum



Standar kompresi citra JPEG2000 diatur pada ISO/IEC 15444 yang terdiri dari 14 bagian, karakteristik dasar dari JPEG2000 diatur pada bagian pertama yaitu ISO/IEC 15444-1 core coding system. Pengkodean pada JPEG2000 dapat dilihat pada gambar 2.23.



![Gambar 2.23 Pengkodean JPEG2000.png](https://cdn.steemitimages.com/DQmesGug4Wd3niRaBvH7AqSzz2crNvbovjEvPibjj6nVpLf/Gambar%202.23%20Pengkodean%20JPEG2000.png)

Gambar 2.23 Pengkodean JPEG2000



#### 2.6.1 Codestream syntax

Sebelum citra dapat dilakukan DWT, maka citra tersebut harus dikonversi menjadi sinyal. Hal tersebut dilakukan pada bagian codestream syntax. Pada bagian ini terdapat header baik header inti atau header tile. Header terdiri dari beberapa marker segment yang mengandung informasi minimalis mengenai suatu komponen, contohnya besar tile, ROI (Region of Interest), dan kuantisasi, dapat dilihat pada Tabel 2.2 dan Tabel 2.3 (Boliek, 2000).



Tabel 2.2 Daftar marker segment 1

![Tabel 2.2 Daftar marker segment 1.png](https://cdn.steemitimages.com/DQmUjnYupnW3rnbKPKNt3x5Ke6dhhTaaopqDAVdWqcTXQ4B/Tabel%202.2%20Daftar%20marker%20segment%201.png)





Tabel 2.3 Daftar marker segment 2

![Tabel 2.3 Daftar marker segment 2.png](https://cdn.steemitimages.com/DQma7VRU197tNdGkM94HvrXwqpktP9ndw5nBxDstfovVVwR/Tabel%202.3%20Daftar%20marker%20segment%202.png)



#### 2.6.2 Data Ordering

Pada bagian ini dilakukan pembagian suatu citra menjadi beberapa komponen. Pada bagian inilah dilakukan tiling seperti gambar 2.24 yaitu pembagian citra menjadi kotak-kotak, sehingga pengkodean tidak harus dilakukan pada seluruh citra, pengkodean dapat dilakukan pada bagian tertentu, contohnya peningkatan resolusi dapat dilakukan pada bagian tertentu tidak harus seluruh citra.



![Gambar 2.24 Tiling.png](https://cdn.steemitimages.com/DQmY6xDZQ1EgTdSGjMwUyw7hP3WejUuSyf49yhdtYNXGEEC/Gambar%202.24%20Tiling.png)

Gambar 2.24 Tiling



Setelah itu tile-tile tersebut dibagi atas beberapa resolusi dan sub-band antara lain terdapat sub-band LL, LH, HL, dan HH seperti pada Gambar 2.25\. Resolusi dibagi menjadi precincts, dan sub-band dibagi menjadi code-blocks. Data tersebut didistribusi pada 1 atau lebih layer dimana informasi kandungan masing-masing layer disimpan dalam paket. Terakhir adalah progression order yang memungkinkan multiresolusi, tingkat resolusi akan meningkat seiring dengan pengiriman data, dengan kata lain tidak perlu mengambil semua data untuk menampilkan citra (Boliek, 2000).



![Gambar 2.25 Contoh perubahan progression order 2 dimensi.png](https://cdn.steemitimages.com/DQmVvxGYV4WqZc44Me8kxPaVGYbokQha5Ky69m15vDPKgku/Gambar%202.25%20Contoh%20perubahan%20progression%20order%202%20dimensi.png)

Gambar 2.25 Contoh perubahan progression order 2 dimensi



#### 2.6.3 Arithmetic Entropy Coding

Setelah mendapatkan koefisien tahap selanjutnya adalah arithmetic entropy coding dimana suatu informasi direpresentasikan dalam bentuk digital. JPEG2000 menggunakan Elias entropy coding dimana suatu integer positif x direpresentasikan sebagai 1 + floor(log(2)x). Karena citra telah dibagi atas beberapa tile maka coding dilakukan pada masing-masing tile (Boliek, 2000).

#### 2.6.4 Coefficient Bit Modeling

Pada bagian ini informasi yang penting atau langka muncul disaring. Masing-masing koefisien pada sub-band telah dibagi menjadi code blocks seperti gambar 2.26.



![Gambar 2.26 Code block.png](https://cdn.steemitimages.com/DQmRiWZf9V2crhUC7wLTdQxJWxmxQ9967S3NCNzQaqKrTuf/Gambar%202.26%20Code%20block.png)

Gambar 2.26 Code block



Setelah itu code block siap untuk memasuki coding passes. Coding passes terdiri dari 3 yaitu (Boliek, 2000):

1.  Significance propagation coding pass, dimana ditentukan koefisien yang penting atau langka muncul.
2.  Magnitude refinement pass, setelah didapat koefisien yang significant dari coding pass pertama, pada tahap ini koefisien tersebut dijumlah dengan tetangga horisontal, vertikal, dan diagonal. Jika penjumlah lebih atau sama dengan 1 maka diberi label “TRUE”, selain itu “FALSE”.
3.  Clean-up coding pass, dilakukan run-length coding pada koefisien lain.

#### 2.6.5 Quantization

Kuantisasi merupakan proses pembulatan koefisien. Pada JPEG2000 digunakan rumus 2.3 untuk mencari stepsize kemudian menggunakan rumus 2.4 kuantisasi (Boliek, 2000).

∆b=2<sup>Rb−εb</sup>(1+(μb/2)) (2.3)

∆b : stepsize

Rb : dinamic range sub-band b

εb : eksponen

μb : mantisa

q(u,v)=sign(ab(u,v))(ab(u,v)/∆b) 2.4

#### 2.6.6 Transform

Pada standar JPEG2000 FDWT (Foward Discrete Wavelet Transform) dilakukan pada masing-masing tile. FDWT melewati koefisien tile dengan low pass filter dan high pass filter untuk mendapatkan koefisien low pass dan koefisien high pass. Level pertama FDWT menghasilkan sub-band LL (Low-Low) yang terdiri koefisien low pass vertical dan low pass horizontal, LH (Low-High) yang terdiri koefisien low pass vertical dan high pass horizontal, HL (High-Low) yang terdiri koefisien high pass vertical dan low pass horizontal, dan HH (High-High) yang terdiri koefisien high pass vertical dan high pass horizontal. Level seterusnya dilakukan FDWT pada sub-band LL, dan sub-band LL baru yang dihasilkan tergantung level yang ditentukan seperti gambar 2.27\. Koefisien low pass vertical didapatkan dengan mengaplikasikan low pass filter terhadap tile secara vertikal sedangkan koefisien low pass horizontal didapatkan dengan mengaplikasikan low pass filter terhadap tile secara horizontal dan seterusnya. Pada sisi decoder dilakukan proses IDWT (Inverse Discrete Wavelet Transform) yaitu proses kebalikan dari FDWT (Boliek, 2000).



![Gambar 2.27 Foward Discrete Wavelet Transform.png](https://cdn.steemitimages.com/DQmU2GXQ4wSagoJr9Mg8qEnoz9sNcJLomqfCDtpE4smJnMB/Gambar%202.27%20Foward%20Discrete%20Wavelet%20Transform.png)

Gambar 2.27 Foward Discrete Wavelet Transform



#### 2.6.7 DC Level, Component Transform

Forward DC level shift dilakukan sebelum melakukan FDWT. Setelah melakukan forward DC level dapat dilakukan forward component transform untuk mengefisienkan kompresi, namun proses ini boleh tidak dilakukan seperti gambar 2.28 (Boliek, 2000).



![Gambar 2.28 DC level shift sebelum transformasi.png](https://cdn.steemitimages.com/DQmbXcQix8b3tpWipTdGC4UMdyK1JuvfhyFMUdzAZ9iwJcb/Gambar%202.28%20DC%20level%20shift%20sebelum%20transformasi.png)

Gambar 2.28 DC level shift sebelum transformasi



#### 2.6.8 Region of Interest

ROI (Region of Interest) merupakan bagian citra yang akan dikodekan pada codestream terlebih dahulu dengan tujuan bagian ini diberikan kualitas yang lebih besar. Metode yang digunakan adalah Maxshift. Secara umum terdiri dari 4 langkah (Boliek, 2000).

1.  Pembangkitan daerah ROI.
2.  Penentuan skala daerah ROI agar memiliki nilai yang lebih besar dari pada yang bagian yang lainnya (latar belakang), agar berada pada bit plane yang lebih tinggi.
3.  Penurunan skala latar belakang.

### 2.7 Peak Signal to Noise Ratio

PSNR (Peak Signal to Noise Ratio) merupakan suatu ukuran umum digunakan untuk mengukur kualitas citra yang telah diolah terhadap aslinya. Pertama dilakukan perhitungan kesalahan terhadap citra yang telah diolah f(x,y) terhadap citra asli g(x,y). Setelah didapatkan nilai MSE (Mean Square Error) yang akan digunakan untuk mencari nilai PSNR (Shi, 2007).

e(x,y)=f(x,y)− g(x,y) (2.5)

e : error

f : citra terolah

g : citra asli

x : koordinat horisontal

y : koordinat vertikal

MSE=(1/MN)Σ<sup>M-1</sup><sub>x=0</sub>Σ<sup>N-1</sup><sub>y=0</sub>e(x,y)<sup>2</sup> (2.6)

MSE : Mean Square Error

M : dimensi horisontal citra

N : dimensi vertikal citra

PSNR<sub>dB</sub>=10log<sub>10</sub>(255<sup>2</sup>/MSE)<sub>dB</sub> (2.7)

PSNR : Peak Signal to Noise Ratio dalam decibel

## BAB 3 Metode Penelitian

### 3.1 Lokasi dan Waktu Penelitian

Pengamatan dan pengambilan data dilakukan di Laboratorium Sistem Komunikasi, Jurusan Teknik Elektro, Fakultas, Universitas Udayana, Jimbaran dan di ruang konferensi, GDLN, Kampus Sudirman, Universitas Udayana. Rencana jadwal penelitian dimulai dari akhir bulan Mei 2014 dan harus selesai sebelum akhir Nopember 2014 lebih detail terdapat di bagian Lampiran.

### 3.2 Sumber dan Jenis Data Penelitian

Sumber data dapat dikelompokkan 2 jenis:

1.  Data Primer: Berupa nilai konsumsi daya listrik, memory, dan waktu dari perangkat JSN Imote2.
2.  Data Sekunder: Berupa skema penelitian, spesifikasi perangkat, dan prosedur implementasi IEEE 802.15.4 Zigbee pada JSVN Imote2 dalam transmisi citra.

Jenis data juga dikelompokkan menjadi 2 jenis:

1.  Data Kuantitatif: Merupakan data yang berbentuk angka, pada penelitian ini adalah nilai daya listrik, memory, dan waktu, ataupun perhitungan suatu nilai yang diturunkan dari data primer.
2.  Data Kualitatif: Merupakan data yang tidak berbentuk angka, pada penelitian ini adalah pernyataan kinerja perangkat JSVN Imote2 dari berbagai kondisi yang diterapkan.Selain itu adalah data berupa grafik, dan pengimplementasian IEEE 802.15.4 Zigbee dalam transmisi citra.

### 3.3 Instrumen dan Bahan Penelitian

Instrumen penelitian dapat dilihat pada Tabel 3.1 – Tabel 3.5\. Perangkat JSVN Imote2 dapat dilihat pada Gambar 2.10.

<table>Tabel 3.1 – Tabel 3.5 Spesifikasi Instrumen

<thead>

<tr>

<th>NO</th>

<th>Instrumen</th>

<th>Spesifikasi</th>

<th>Fungsi</th>

</tr>

</thead>

<tbody>

<tr>

<td rowspan="8">1</td>

<td rowspan="8">Laptop</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)</td>

<td rowspan="8">Sebagai pemberi perintah dalam transmisi.</td>

</tr>

<tr>

<td>Mobile Intel® Graphics Media Accelerator 4500MHD</td>

</tr>

<tr>

<td>1GB DDR2</td>

</tr>

<tr>

<td>128 WXGA Acer CrystalBriteTM LCD</td>

</tr>

<tr>

<td>250GB HDD</td>

</tr>

<tr>

<td>Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller</td>

</tr>

<tr>

<td>Atheros Communications Inc. AR928X Wireless Network Adapter</td>

</tr>

<tr>

<td>Operating System Kali Linux 1 32 bit</td>

</tr>

<tr>

<td rowspan="5">2</td>

<td rowspan="5">Perangkat JSVN Imote2</td>

<td>Radio board (IPR2400/IPR2410).</td>

<td rowspan="5">Tranceiver sebagai pengirim citra, receiver sebagai penerima citra.</td>

</tr>

<tr>

<td>Multimedia Sensor board (IMB400).</td>

</tr>

<tr>

<td>Interface board (IIB400).</td>

</tr>

<tr>

<td>Power Supply Board (IBB2400).</td>

</tr>

<tr>

<td>Sistem operasi Embedded Linux 2.6.29.1 RC 1.1 untuk ARM</td>

</tr>

<tr>

<td rowspan="9"></td>

<td rowspan="9">Radio board (IPR2400/IPR2410).</td>

<td>PXA271 XScale® processor @ [13–416] Mhz.</td>

<td rowspan="9">Sebagai perangkat yang melakukan komputasi dan penyedia media komunikasi radio untuk transmisi nirkabel.</td>

</tr>

<tr>

<td>Wireless MMX coprocessor.</td>

</tr>

<tr>

<td>256kB SRAM, 32MB FLASH, 32MB SDRAM.</td>

</tr>

<tr>

<td>Integrated 802.15.4 radio, support for external radios through SDIO and UART. Max data rate 250 Kbps point-to-point.</td>

</tr>

<tr>

<td>Integrated 2.4GHz antenna.</td>

</tr>

<tr>

<td>Multicolor status indicator LED.</td>

</tr>

<tr>

<td>Basic and advanced expansion connectors supporting : 3xUART, I2C, 2xSPI, SDIO, I2S, AC97, USB host, Camera I/F, GPIO.</td>

</tr>

<tr>

<td>Mini-USB port for direct PC connection.</td>

</tr>

<tr>

<td>Size: 48 mm x 36 mm. PCB thickness 1.75 mm</td>

</tr>

<tr>

<td rowspan="10"></td>

<td rowspan="10">Multimedia Sensor board (IMB400).</td>

<td>Camera</td>

<td rowspan="10"></td>

</tr>

<tr>

<td>Image resolution up to 640x480 pixels, 30 fps max. RGB, YcbCr or YUV formats.</td>

</tr>

<tr>

<td>Hardware image scaling and filtering – automatic exposure, gain, white balance, black level.</td>

</tr>

<tr>

<td>Image controls include saturation, hue, gamma, sharpness.</td>

</tr>

<tr>

<td>Audio Codec</td>

</tr>

<tr>

<td>Sampling rates up to 48kHz, mono.</td>

</tr>

<tr>

<td>SNR > 94dB, THD < -80dB</td>

</tr>

<tr>

<td>Programmable filters for noise suppression.</td>

</tr>

<tr>

<td>PIR Sensor</td>

</tr>

<tr>

<td>Maximum range ~ 5m. Detection Angles 80-100 degrees</td>

</tr>

<tr>

<td rowspan="6"></td>

<td rowspan="6">Interface board (IIB400).</td>

<td>Mote connectors 2x Advanced (male/female).</td>

<td rowspan="6">Sebagai penghubung antar radio processor board dengan sensor board atau perangkat lainnya.</td>

</tr>

<tr>

<td>USB connector mini-B female.</td>

</tr>

<tr>

<td>Serial port A virtual UART with RTS/CTS flow control.</td>

</tr>

<tr>

<td>Sertial port B virtual UART without hardware flow control.</td>

</tr>

<tr>

<td>JTAG port standard 20-pin connector.</td>

</tr>

<tr>

<td>Size 48mm x 36mm x 14m. Weight 11g</td>

</tr>

<tr>

<td>3</td>

<td>Kabel USB</td>

<td></td>

<td>Sebagai penghubung PC dengan JSVNplatform Imote2.</td>

</tr>

<tr>

<td>4</td>

<td>Multimeter</td>

<td></td>

<td>Sebagai pengukur konsumsi daya listrik.</td>

</tr>

</tbody>

</table>

Bahan penelitian merupakan citra yang ditangkap dari sensor kamera perangkat JSVN Imote2 pada tanggal 9 Mei 2014 di Laboratorium Sistem Komunikasi, Jurusan Teknik Elektro, Universitas Udayana dengan format Portable Pixelmap Graphic (.ppm), resolusi 480 x 640 pixel pada Gambar 3.1, dengan besar file 921.6 KB, dan media transmisi berbasis IEEE 802.15.4 Zigbee.



![Gambar 3.1 Bahan penelitian.png](https://cdn.steemitimages.com/DQmUmtf4M1utDpuSXVpmZ6dRas9v1RJdBs2wb9jJ9vxgK5U/Gambar%203.1%20Bahan%20penelitian.png)

Gambar 3.1 Bahan penelitian



### 3.4 Tahapan Penelitian

Secara keseluruhan tahap penelitian terdiri dari 2 tahap. Tahap pertama adalah tahap prosedur pengimplementasian transmisi citra menggunakan media transmisi IEEE 802.15.4 Zigbee pada JSVN platform Imote2 dengan sistem operasi embedded Linux. Dijelaskan mekanisme agar dapat mentransmisikan citra. Tahap kedua adalah testbed menguji kinerja JSVN dalam transmisi citra. Kinerja ditentukan oleh konsumsi daya listrik, waktu yang dibutuhkan untuk transmisi, dan besar memory yang digunakan. Secara umum gambaran tahapan dapat dilihat pada Gambar 3.2.



![Gambar 3.2 Skema dasar penelitian.PNG](https://cdn.steemitimages.com/DQmZa2DJeG8e8TE88g3XCwKHp5XnhvQqbsnoKwLTaR1SiqY/Gambar%203.2%20Skema%20dasar%20penelitian.PNG)

Gambar 3.2 Skema dasar penelitian



#### 3.4.1 Implementasi IEEE 802.15.4 Zigbee untuk transmisi citra

Radio di Imote2 dengan OS Linux dijalankan menggunakan driver Tosmac. Disediakan script oleh Tosmac untuk transmit dan receive yang akan disesuaikan untuk transmisi citra, dapat dilihat sebagai berikut:

```
//************************************************************ 
// 
// blocking.c 
// 
// Gefan Zhang 
// 
//************************************************************* 
#include <stdio.h> 
#include <fcntl.h> 
#include <unistd.h> 
#include <sys/ioctl.h> 
#include "tosmac.h" 

void msg_init(TOS_Msg* pMsg) 
{ 
   pMsg->length = 0; 
   pMsg->fcfhi = 0; 
   pMsg->fcflo = 0; 
   pMsg->dsn = 0; 
   pMsg->destpan = 0; 
   pMsg->addr = 0; 
   pMsg->type = 0; 
   pMsg->group = 0; 
   memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
   pMsg->strength = 0; 
   pMsg->lqi = 0; 
   pMsg->crc = 0; 
   pMsg->ack = 0; 
   pMsg->time = 0; 
} 

//--------------------- main ------------------------------- 

int main(int argc, char* argv[]) 
{ 
  int tosmac_dev; 
  TOS_Msg recv_pkt; 
  TOS_Msg send_pkt; 
  // open as blocking mode 
  tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
  if (tosmac_dev < 0) 
  { 
    fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
    return 1; 
  } 
  msg_init(&send_pkt); 
  send_pkt.addr = 99; 
//  memcpy(send_pkt.data, "DATA for test", 14); 
  memcpy(send_pkt.data, "0000000000000", 14); 
  send_pkt.length = 14; 
  printf("User write to driver\n");  
  write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); 
  // close device 
  close (tosmac_dev); 
  return 0; 
}
```

```
//************************************************************ 
// 
// blocking.c 
// 
// Gefan Zhang 
// 
//************************************************************* 
#include <stdio.h> 
#include <fcntl.h> 
#include <unistd.h> 
#include <sys/ioctl.h> 
#include "tosmac.h" 
void msg_init(TOS_Msg* pMsg) 
{ 
   pMsg->length = 0; 
   pMsg->fcfhi = 0; 
   pMsg->fcflo = 0; 
   pMsg->dsn = 0; 
   pMsg->destpan = 0; 
   pMsg->addr = 0; 
   pMsg->type = 0; 
   pMsg->group = 0; 
   memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
   pMsg->strength = 0; 
   pMsg->crc = 0; 
   pMsg->lqi = 0; 
   pMsg->ack = 0; 
   pMsg->time = 0; 
} 
//--------------------- main ------------------------------- 
 
int main(int argc, char* argv[]) 
{ 
  int tosmac_dev; 
  TOS_Msg recv_pkt; 
  TOS_Msg send_pkt; 
  // open as blocking mode 
  tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
  if (tosmac_dev < 0) 
  { 
    fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
    return 1; 
  } 
  printf("User read from driver:\n"); 
  read(tosmac_dev, &recv_pkt, sizeof(TOS_Msg));// != sizeof(TOS_Msg); 
  printf("length is %d\n", recv_pkt.length); 
  printf("data is %s\n", recv_pkt.data); 
  // close device 
  close (tosmac_dev); 
  return 0; 
} 
```

#### 3.4.2 Testbed

Testbed menggunakan 2 perangkat JSVN Imote2 dimana satu berfungsi sebagai transmitter dan satunya lagi berfungsi sebagai receiver. Pada transmitter dilakukan penangkapan citra dengan sensor kamera. Pada transmitter dilakukan transmisi citra ke receiver melalui media nirkabel berbasis IEEE 802.15.4 Zigbee. Penangkap citra telah dilakukan di penelitian sebelumnya, oleh karena itu hanya diamati pada kompresi dan transmisi. Citra yang ditransmisi terdapat 2 jenis yaitu citra raw dari hasil penangkapan sensor IMB400 dan citra raw yang diolah berdasarkan standar JPEG2000 dengan rasio 1, 5, dan 10 dimana rasio adalah pembatas kapasitas saluran. Rasio 5 berarti jumlah bit dari citra terkompresi dibatasi maksimal 1/5 dari jumlah bit aslinya, dan rasio 10 bearti dibatasi maksimal 1/10 dari jumlah bit aslinya.

Pada saat transmisi dilakukan pengukuran konsumsi daya listrik, memory, dan waktu pada transmitter. Pengukuran konsumsi daya listrik menggunakan multimeter dengan obyek pengukuran adalah baterai pada power supply board (IBB2400). Pengukuran daya listrik dilakukan dengan mengukur drop tegangan dan drop arus, dengan kata lain adalah selisih nilai daya listrik sebelum penelitian dan sesudah penelitian. Secara khusus mengukur konsumsi daya listrik dimulai dari pemberian perintah untuk transmisi oleh komputer hingga citra selesai ditransmisikan, demikian pula konsumsi waktu. Pengukuran konsumsi dimulai dari pemberian perintah oleh komputer bukan dari dimulainya transmisi citra karena juga melibatkan aspek sistem operasi yang digunakan yaitu embedded Linux. Data hasil pengukuran adalah dari satu kali penelitian. Memory berdasarkan tampilan dari Terminal saat akses transmitter. Citra yang telah ditransmisi dilakukan pengukuran PSNR. Secara umum testbed dapat dilihat pada Gambar 3.3, Skenario akan dijelaskan pada bagian berikut:



![Gambar 3.3 Skema testbed.PNG](https://cdn.steemitimages.com/DQmXcpZYEYG2kA3sjC3mYM25vpuJ92XdWc8TFuusKaGWhRF/Gambar%203.3%20Skema%20testbed.PNG)

Gambar 3.3 Skema testbed



1.  Skenario 1
    *   Disisipkan citra berdasarkan bahan penelitian ke Imote2 (pre-store).
    *   Penyiapan Imote2.
    *   Pengukuran tegangan dan arus baterai sebelum transmisi.
    *   Transmisi citra dari transmitter ke receiver dengan jarak 5 meter dapat dilihat pada Gambar 3.4 dan Gambar 3.5.
    *   Pengukuran virtual memory yang digunakan program transmisi.
    *   Pengukuran lama waktu dibutuhkan untuk transmisi.
    *   Pengukuran tegangan dan arus batterai setelah transmisi.
    *   Pengukuran nilai PSNR citra.
    *   Penelitian diulang dengan jarak 10, dan 15 meter dapat dilihat pada Gambar 3.6 – Gambar 3.9.
2.  Skenario 2
    *   Penyiapan Imote2.
    *   Pengukuran tegangan dan arus baterai sebelum kompresi.
    *   Dilakukan kompresi citra pada transmitter dengan rasio 1.
    *   Pengukuran virtual memory yang digunakan program kompresi.
    *   Pengukuran lama waktu dibutuhkan untuk kompresi.
    *   Pengukuran tegangan dan arus baterai setelah kompresi.
    *   Pengukuran tegangan dan arus baterai sebelum transmisi.
    *   Transmisi citra dari transmitter ke receiver dengan jarak 5 meter.
    *   Pengukuran virtual memory yang digunakan program transmisi.
    *   Pengukuran lama waktu dibutuhkan untuk transmisi.
    *   Pengukuran tegangan dan arus baterai setelah transmisi.
    *   Pengukuran nilai PSNR.
    *   Penelitian diulang dengan rasio kompresi 5, dan 10.
    *   Penelitian diulang dengan jarak 10, dan 15 meter.



![Gambar 3.4 Peta lab sistem komunikasi penelitian jarak 5 meter.PNG](https://cdn.steemitimages.com/DQmVCbEP14ESf8rgqHzwr14Rs1Gk3zRVAxq42bibpy2oGsq/Gambar%203.4%20Peta%20lab%20sistem%20komunikasi%20penelitian%20jarak%205%20meter.PNG)

Gambar 3.4 Peta lab sistem komunikasi penelitian jarak 5 meter




![Gambar 3.5 Lab sistem komunikasi penelitian jarak 5 meter.png](https://cdn.steemitimages.com/DQmeJcyv7koHNgZnptCEYFpa4v1FXhjLoskwELmbapDYBkc/Gambar%203.5%20Lab%20sistem%20komunikasi%20penelitian%20jarak%205%20meter.png)


Gambar 3.5 Lab sistem komunikasi penelitian jarak 5 meter




![Gambar 3.6 Peta lab sistem komunikasi penelitian jarak 10 meter.PNG](https://cdn.steemitimages.com/DQmVT2LHu6BcMr7SP7m5nXGdCWfVxikLycACgimfq4LxNan/Gambar%203.6%20Peta%20lab%20sistem%20komunikasi%20penelitian%20jarak%2010%20meter.PNG)


Gambar 3.6 Peta lab sistem komunikasi penelitian jarak 10 meter




![Gambar 3.7 Lab sistem komunikasi penelitian jarak 10 meter.png](https://cdn.steemitimages.com/DQmQ8kCbYwwfWCmCKGWfr9UwN8ueKHnbazPuHgdUjaAChpY/Gambar%203.7%20Lab%20sistem%20komunikasi%20penelitian%20jarak%2010%20meter.png)


Gambar 3.7 Lab sistem komunikasi penelitian jarak 10 meter





![Gambar 3.8 Peta ruang konferensi penelitian jarak 15 meter.PNG](https://cdn.steemitimages.com/DQmWUGqFrXKjMreHAgMnobhWtwfKNkfu9Qe48mVtuwZDBHD/Gambar%203.8%20Peta%20ruang%20konferensi%20penelitian%20jarak%2015%20meter.PNG)

Gambar 3.8 Peta ruang konferensi penelitian jarak 15 meter





![Gambar 3.9 Ruang konferensi penelitian jarak 15 meter.png](https://cdn.steemitimages.com/DQmeR6NPhzMTzkoRvt5eNvoZXuRgNJSUoL1H6kcaBqjt7us/Gambar%203.9%20Ruang%20konferensi%20penelitian%20jarak%2015%20meter.png)

Gambar 3.9 Ruang konferensi penelitian jarak 15 meter



### 3.5 Alur Analisis

Pada bagian ini akan digambarkan tahap penelitian secara diagram alur / flowchart pada Gambar 3.10, Gambar 3.11, dan Gambar 3.12\. Penelitian keseluruhan sebagai berikut:

1.  Menentukan prosedur transmisi citra.
2.  Menyiapkan citra raw ke Imote2 yang bersifat sebagai transmitter untuk ditransmisikan, kompresi akan dilakukan di Imote2.
3.  Melakukan penelitian dengan jarak antar Imote2 5, 10, dan 15 meter untuk masing-masing transmisi citra raw dan yang telah diolah berdasarkan JPEG2000.
4.  Mencari konsumsi daya listrik setiap tahap transmisi citra.
5.  Mendapatkan waktu yang dibutuhkan setiap tahap dan memory yang digunakan.
6.  Dari semua data yang didapatkan ditentukan skema yang optimal.



![Gambar 3.10 Alur penelitian 1.PNG](https://cdn.steemitimages.com/DQmVJqyM9vDaCdPp7dV47Pa9TM9hqyx2AH67TBzxSKoJiTF/Gambar%203.10%20Alur%20penelitian%201.PNG)

Gambar 3.10 Alur penelitian 1





![Gambar 3.11 Alur Penelitian 2.PNG](https://cdn.steemitimages.com/DQmYXB2xtTmrfqcBZ4YhTvLujYnXb2vWC4CNnCBTzzNxj8d/Gambar%203.11%20Alur%20Penelitian%202.PNG)

Gambar 3.11 Alur Penelitian 2





![Gambar 3.12 Alur Penelitian 2.PNG](https://cdn.steemitimages.com/DQmcrZfHjfJxgt8GXhVK3XQ1fSMMuHbrzB3E8MX4iD75oCf/Gambar%203.12%20Alur%20Penelitian%202.PNG)

Gambar 3.12 Alur Penelitian 2



## BAB IV Pembahasan

Secara keseluruhan pada BAB ini dibahas program transmisi citra, Imote2 Linux sebagai testbed dari kompilasi program transmisi dan software kompresi JPEG2000 hingga pemberian perintah secara nirkabel ke Imote2 yang bertugas sebagai pengirim, dan bagian akhir pada BAB ini ditampilkan dan dianalisa kinerja dari perangkat Imote2\. Dari hasil penelitian ternyata melakukan kompresi sebelum transmisi sangat membantu untuk meringankan beban transmisi, dan menariknya proses kompresi itu sendiri tidak terlalu membebankan perangkat, sehingga sangat dianjurkan untuk menggunakan kompresi.

Inti dari penelitian ini adalah agar Imote2 Linux dapat difungsikan sebagai testbed. Jika diringkas kembali, penelitian sebelumnya telah berhasil mengembed Linux ke JSVN platform Imote2 dan mentransmisi data acak, maka di penelitian ini adalah untuk mentransmisikan data citra. Kode program pada subbab 3.4.1 adalah program untuk mengirim data karakter maksimal 28 byte, kemudian ditampilkan di layar. Untuk mengirim citra yang dalam bentuk file, kode tersebut harus dimodifikasi agar di sisi pengirim dapat membaca dan mengirim file, dan di sisi penerima dapat menerima dan menyimpan file tersebut (tidak sebatas ditampilkan di layar), juga harus dapat mentransmisikan file lebih dari 28 byte.

Proses agar Imote2 Linux dapat berfungsi sebagai testbed dapat diringkas pada Gambar 4.1\. Pertama membuat kode program, lebih lengkap dibahas di subbab 4.1\. Kemudian program dikompilasi di subbab 4.2 dan subbab 4.3, dan diembed ke Imote2, illustrasi dapat dilihat pada Gambar 4.2\. Terakhir Imote2 dikonfigurasi agar dapat menerima perintah via radio, dengan kata lain setelah transmitter dihidupkan, siap untuk menerima perintah, dapat diilustrasikan pada Gambar 4.3\. Perintah dapat berupa mengkompresi, maupun mentransmisi citra seperti illustrasi pada Gambar 4.4\. Hal ini dilakukan karena transmitter ditenagai dengan baterai (tanpa kabel), sehingga komunikasi hanya tersedia lewat radio.



![Gambar 4.1 Alur diagram implementasi testbed.PNG](https://cdn.steemitimages.com/DQmfZiREMYDajjHiHBd2vnKu4Yw7Va6K5oZBU6YjffjyhWQ/Gambar%204.1%20Alur%20diagram%20implementasi%20testbed.PNG)

Gambar 4.1 Alur diagram implementasi testbed





![Gambar 4.2 Illustrasi kompilasi dan embed program.png](https://cdn.steemitimages.com/DQmabnvVuSyGYxrSKsfKg5E92xNSggCmT2dwERseG3F6S5D/Gambar%204.2%20Illustrasi%20kompilasi%20dan%20embed%20program.png)

Gambar 4.2 Illustrasi kompilasi dan embed program





![Gambar 4.3 Illustrasi ketika startup a.png](https://cdn.steemitimages.com/DQmdFU2arJ37ZfcRz8wzcwLh1c7YuzcLjW2tR2BkT2yAzHT/Gambar%204.3%20Illustrasi%20ketika%20startup%20a.png)

![Gambar 4.3 Illustrasi ketika startup b.png](https://cdn.steemitimages.com/DQmYKgcmLvFfJ6XPqWYvUmYhdNqXbE9QdPxS3cyL5JKeh7J/Gambar%204.3%20Illustrasi%20ketika%20startup%20b.png)

Gambar 4.3 Illustrasi ketika startup





![Gambar 4.4 Illustrasi testbed a.png](https://cdn.steemitimages.com/DQmZ4u7QBTjFA8VKqvAR4QJKcRWvN1qJs9ic45vnnwdKQ6B/Gambar%204.4%20Illustrasi%20testbed%20a.png)

![Gambar 4.4 Illustrasi testbed b.png](https://cdn.steemitimages.com/DQmZMQr9vD8ZqqAWz1Ar7Rw3dpLfu9sJa2d2uHXKEQSbqux/Gambar%204.4%20Illustrasi%20testbed%20b.png)

![Gambar 4.4 Illustrasi testbed c.png](https://cdn.steemitimages.com/DQmakx11HQNALhHHPNiKqjtuKxhtfhV2j9hYA1dUZYNzizq/Gambar%204.4%20Illustrasi%20testbed%20c.png)

![Gambar 4.4 Illustrasi testbed d.png](https://cdn.steemitimages.com/DQmYnpptz34MJVa1mUZ9G3zB4VGpYt8u3qKAxLxv8VNQoq3/Gambar%204.4%20Illustrasi%20testbed%20d.png)


Gambar 4.4 Illustrasi testbed



### 4.1 Program Transmisi

Transmisi menggunakan radio pada Imote2\. Di penelitian sebelumnya dijelaskan pada subbab 2.1, menggunakan driver dari Tosmac untuk menjalan radio di Imote2 Linux, disini tetap menggunakan driver yang sama. Untuk transmisi diperlukan 2 program yaitu program untuk mengirim dan menerima. Kedua program tersebut ditulis dalam bahasa C. Khusus pada penelitian ini mengikuti ketentuan dari header tosmac yaitu payload data yang dikirim maksimal 28 byte. Secara keseluruhan di sisi pengirim membaca file citra yang akan dikirim, di penerima akan membuat file baru dan menulis data yang diterima ke file tersebut. Pengiriman dilakukan secara bertahap dengan memecah tile masing-masing berukuran 28 byte (tidak sekaligus).

#### 4.2 Program Pengirim

Sintaks berikut ini menunjukkan program pengirim dengan nama file “send_file_advance.c” yang dilakukan pada penelitian ini dan dijelaskan sebagai berikut:

```
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by : Fajar Purnama 
```

Baris 1 – 8 merupakan komentar berisi informasi pembuat program dan penulis yang memodifikasi. Komentar dapat ditandai dengan “//” atau dimulai ”/*” dan diakhiri dengan “*/” (yang tidak bold). Baris 5 merupakan penulis pertama dari program, sedangkan baris 8 merupakan nama penulis yang memodifikasi program.

```
9 #include <stdio.h> 
10 #include <fcntl.h> 
11 #include <unistd.h> 
12 #include <sys/ioctl.h> 
13 #include <tosmac.h> 
```

Baris 9 – 13 menunjukkan header yang digunakan pada program ini, header berisi definisi kode yang digunakan. Untuk menggunakan header dapat menggunakan karakter “#”, karakter ini menunjukkan script yang dibutuhkan oleh program. Di baris 9 terdapat “stdio.h” merupakan header dasar untuk semua program bahasa C yang mendefinisikan perintah “printf” untuk menampilkan ke layar, “while” untuk looping, serta operasi arithmetic, dan masih banyak lainnya. Baris 10 “Fcntl.h” mendefinisikan perintah “open” untuk membuka file serta “close” untuk menutup dan “create” untuk membuat, baris 11 “unistd.h” mendefinisikan perintah “read” untuk membaca file dan “write” untuk menulis data ke file, dan baris 13 “tosmac.h” mengatur variable pada driver tosmac (radio).

```
14 void msg_init(TOS_Msg* pMsg) 
15 { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0; 
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); // 28 bytes usually 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
```

Baris 14 – 30 ditulis dalam bentuk fungsi “msg_init” merupakan fungsi untuk menginisialisasikan variable pada paket seperti address, group, dan payload yang terdapat pada header “tosmac.h” untuk ditransmisikan.

Inti program “int main” dimulai dari baris 32.

```
31 //---Main-Program---// 
32 int main(int argc, const char *argv[]){ 
33 // Check Error 
34 if(argv[1]==NULL){ 
35 printf("Usage: ./send_file [file], example: ./send_file_advance image.ppm"); 
36 return 1; 
37 } 
38 //sleep(10); //pause for 10 sec (give time for receiver to prepare) cross this out if not needed 
39 // Declaration 
40 int tosmac_dev, file, file_size, h, i, j, k; 
41 //char *packet; 
42 TOS_Msg recv_pkt; 
43 TOS_Msg send_pkt; 
44 // open as blocking mode 
45 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
46 if (tosmac_dev < 0) 
47 { 
48 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
49 
50 return 1; 
51 } 
52 // open file to be send 
53 file = open(argv[1], O_RDWR); // open file 
54 file_size = lseek(file,0,SEEK_END); // calculate filesize by going to final byte of file using lseek function from fcntl.h 
55 lseek(file,0,SEEK_SET); // return to start of file 
56 msg_init(&send_pkt); 
57 send_pkt.addr = 99;  // Address 
58 h = file_size/TOSH_DATA_LENGTH; // How much packet or times of transmission should be prepared (using div) 
59 i = file_size%TOSH_DATA_LENGTH; // Remainder of "h" (using mod) 
60 j = 0; 
61 k = 0; 
```

Baris 33 – 37 terdapat pemeriksaan error bila perintah yang dimasukkan tidak sesuai, Baris 39 – 43 adalah bagian deklarasi variable, Baris 44 – 51 membuka radio, baris 52 – 55 membuka file, dan baris 56 – 61 menentukan paket. Pada baris 32 “int main” terdapat “int argc, int argv[]” agar program dapat dieksekusi dengan memilih file yang diinginkan “./send_file_advance argv[1]”, seperti yang didefinisikan pada baris 53 “file = open(argv[1], O_RDWR)”. Jika tidak terdapat input maka akan menampilkan cara penggunaan program di baris 35 yaitu “./send_file_advance file” yang diatur pada pernyataan “if(argv[1]==NULL)” baris 34, dan baris 36 “return 1” untuk memberik kode error pada program jika input sesuai dengan pernyataan baris 34\. Baris 45 “tosmac_dev = open(TOSMAC_DEVICE, O_RDWR)” adalah untuk membuka radio dimana “TOSMAC_DEVICE” merupakan “/dev/tosmac” seperti didefinisikan pada “tosmac.h”, “O_RDWR” agar file dibuka read & write, dapat dilihat pada “fcntl.h”. Baris 55 “file_size = lseek(file,0,SEEK_END)” untuk mencari ukuran file dengan menuju ke bit terakhir dari file untuk mengembalikannya ke bit awal dengan kode “lseek(file,0,SEEK_SET)”. Didefinisikan paket yang akan dikirim adalah “TOS_Msg send_pkt” (baris 42) dan yang diterima “TOS_Msg recv_pkt” (baris 43), dimana “TOS_Msg” adalah struktur paket yang didefinisikan di “tosmac.h”. Baris 57 “send_pkt.addr = 99” menentukan agar address pada pengirim adalah 99\. Baris 58 “h” merupakan jumlah paket dengan membagi besar file dengan maksimal data payload “TOSH_DATA_LENGTH”, disini adalah 28, sedangkan nilai “i” (baris 59) merupakan sisa pembagian dari “h” yang merupakan byte terakhir yang akan dikirim.

```
62 while(j+1<h){ // Because j (requested file order) starts at zero 
63 so it's j+1 
64 // Use this if need resting time for when k reach certain accumulative bytes // 
65 /*if(k%1400==0){ 
66 sleep(1); 
67 }*/ 
68 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg));   
69 // Waiting for receiver to send a packet (for ACK), it will wait until receiver is ready 
70 j = recv_pkt.data[1]+3000; // Requested order of file in packet, 3000 because it starts at -3000, the data type of data doesn't allow over 3000 while 3300 packet is needed, So we start from below 0. 
71 printf("Packet %d/%d\n",j,h); // Verbose 
72 k = j*TOSH_DATA_LENGTH; // Packet converted into byte 
73 lseek(file,k,SEEK_SET); // Seek to the requested byte 
74 read(file,send_pkt.data,TOSH_DATA_LENGTH); // reading 28 byte from file, then read next 28 due to while() loop, file >>>>> send_pkt.data 
75 send_pkt.group = 7; // Group identifier, modify this as wished 
76 // writing packet to device 
77 printf("User writing %d bytes to driver\n", TOSH_DATA_LENGTH);  
78 // verbose  
79 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg));  
80 // writing to device, (TOS_Msg*)&send_pkt >>>>> tosmac_dev, & it's a pointer 
81 k += TOSH_DATA_LENGTH; // accumulative payload sent 
82 printf("%d bytes written\n", k); // verbose 
83 // use this function if for some reason need to slow down 
84 // usleep(30000); // in micro seconds 
85 } 
86 // Sending the last bytes 
87 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg));   
88 // Waiting for receiver to send a packet (for ACK), it will wait 
89 until receiver is ready 
90 read(file,send_pkt.data,i); // i = remainder  
91 printf("User writing %d bytes to driver\n", i); // verbose 
92 write(tosmac_dev, (TOS_Msg*)&send_pkt, i); // final sending 
93 k += i; // accumulative payload sent 
94 memcpy(send_pkt.data,"0S0T1O1P0",9); 
95 write(tosmac_dev, (TOS_Msg*)&send_pkt, 9); 
96 printf("%d bytes written, FINISH!!\n", k); // verbose 
```

Baris 62 – 85 merupakan proses transmisi dan baris 85 – 96 adalah transmisi yang terakhir. Proses transmisi terdapat dalam baris 62 while loop dimana file dikirim setiap 28 byte. Looping akan berhenti jika “j” mencapai nilai “h” (jumlah paket). Sebelum transmisi ditunggu informasi dari penerima yang berisi jumlah paket yang diterima pada baris 68 “read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg))” (kode ini akan membaca data yang diterima radio “tosmac_dev” sebesar “sizeof(TOS_Msg)” yang kemudian ditulis ke pointer “&recv_pkt”). Nilai yang terkandung dalam “recv_pkt” akan dimasukkan ke “j” (baris 70). Operasi arithmetic pada “k” (baris 72) mengkonversi jumlah paket ke jumlah byte yang diterima. Setelah itu akan menuju ke byte berikutnya yang akan dikirim pada baris 73 “lseek(file,k,SEEK_SET)”. Kemudian Pada baris 75, sizeof(TOS_Msg))” (kode ini akan menulis “&send_pkt” sebesar “sizeof(TOS_Msg)” ke “tosmac_dev”). Setelah while loop adalah pengiriman byte terakhir “i” yang merupakan sisa pembagian dari “j”, terakhir akan mengirim kode “0S0T1O1P0” ke receiver untuk memberi tahu bawha transmisi telah berakhir.

```
97 //close device   
98 close(tosmac_dev); 
99 close(file);  
100 return 0; 
101 } 
```

Baris 97 – 101 penutupan radio dan file serta akhir program, kode “close” untuk menutup file yang didefinisikan pada “fcntl.h”.

#### 4.1.2 Program Penerima

Sintaks berikut menunjukkan program penerima dengan nama file “recv_file_advance.c” yang dilakukan pada penelitian dan secara keseluruhan program penerima mirip dengan program pengirim, dengan kata lain hanya sedikit perbedaan dapat dijelaskan sebagai berikut:

```
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by : Fajar Purnama
```

Baris 1 – 8 merupakan komentar berisi informasi pembuat program dan penulis yang memodifikasi.

```
9 #include <stdio.h> 
10 #include <fcntl.h> 
11 #include <unistd.h> 
12 #include <sys/ioctl.h> 
13 #include <tosmac.h> 
```

Baris 9 – 13 menunjukkan header yang digunakan pada program ini, header berisi definisi kode yang digunakan.

```
14 void msg_init(TOS_Msg* pMsg) 
15 { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0; 
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); // 28 bytes usually 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
```

Baris 14 – 30 merupakan fungsi untuk menginisialisasikan variable pada paket untuk ditransmisikan.

Inti program dimulai dari baris 32.

```
31 //--------------------- main ------------------------------- 
32 int main(int argc, const char *argv[]) { 
33 // Check Error 
34 if(argv[1]==NULL){ 
35 printf("Usage: ./recv_file [file], example: ./recv_file_advance image.ppm"); 
36 return 1; 
37 } 
```

Baris 33 – 37 terdapat pemeriksaan error bila perintah yang dimasukkan tidak sesuai.

```
38 // Declaration 
39 int tosmac_dev, file, i; 
40 TOS_Msg recv_pkt; 
41 TOS_Msg send_pkt; 
```

Bari 38 – 41 adalah bagian deklarasi variable.

```
42 // open as blocking mode 
43 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); // TOSMAC_DEVICE = /dev/tosmac, O_RDWR = Open as Read & Write 
44 // Check Error
45 if (tosmac_dev < 0) 
46 { 
47 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
48 
49 return 1; 
50 
51 } 
```

Baris 42 – 49 membuka radio.

```
50 // file 
51 file = open(argv[1], O_RDWR); 
52 // Check Error 
53 if(file<0){ 
54 creat(argv[1], O_RDWR); // create empty file, argv[1] if no file exist: user input (./recv_file argv[1])  
55 file = open(argv[1], O_RDWR); // Open created file 
56 } 
```

Baris 50 – 56 membuka file di bagian ini bila file tidak ditemukan maka akan membuat file baru dengan fungsi “creat” baris 54.

```
57 // receving file 
58 printf("User read from driver:\n"); 
59 // receive 28 bytes of file for infinity     
60 while(1){ 
61 // Seek to end of file to continue receive (this feature allows continueable download) 
62 i = lseek(file,0,SEEK_END); 
63 send_pkt.data[1] = (i/TOSH_DATA_LENGTH)-3000; // Since the max value of data type is 3000 we start from -3000, so we could put a number up to 6000, This feature request tells the transmitter how much bytes already received so the transmitter will sinchronize. 
64 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); // sending i in send_pkt.data[1] 
65 alarm(2); // 2  seconds timeout  
66 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg)); // Read receive file from Tosmac Device, Pause if device == NULL, !=sizeof(TOS_Msg) 
67 // Stop code, break infinite while loop if this code is received, send application should send this string to tell if transmission finish  
68 if(strncmp(recv_pkt.data,"0S0T1O1P0",9)==0){  
69 break; 
70 } 
71 // Use group as identifier, so it will not process packet if it is not on this group 
72 if(recv_pkt.group!=7){ 
73 continue; // it will ignore next code and restart while loop 
74 } 
75 // Verbose, shows accumulative received number of bytes 
76 printf("Receiving %d bytes of data\n", recv_pkt.length); 
77 i += recv_pkt.length; // Equal to i = i + recv_pkt.length 
78 printf("Received %d bytes\n", i); 
79 // Writing received 28 bytes to file that had just been created 
80 write(file, recv_pkt.data, recv_pkt.length); // write will automatically go to last byte order of file 
81 } 
```

Baris 60 – 81 merupakan proses transmisi. Di proses transmisi didalam while loop yang tidak terbatas, awalnya dibaca banyaknya byte yang telah diterima oleh file (besar file) di baris 62 “lseek(file,0,SEEK_END)” dan sekaligus menuju ke akhir file. Di baris 63 besar file dimasukkan ke “send_pkt.data[1]” dan di baris 64 dikirim ke transmitter untuk memberi tahu byte yang keberapa yang harus dikirim. Di program ini nilai dimulai dari -3000 agar dapat menentukkan nilai yang lebih besar karena masksimal nilai adalah kurang lebih 3000 sedangkan nilai yang perlu dikirim lebih dari 3000\. Untuk melakukan hal ini perlu ada perubahan pada “tosmac.h” pada bagian definisi paket di bagian. Untuk program ini tipe data “data” berubah dari “s8” menjadi “s16”, perubahahan adalah meningkatkan jumlah bit yang digunakan. Jika ditetapkan demikian nilai maksimimal pada “send_pkt.data[1]” hanya dibawah 1000\. Semua hal ini dilakukan agar transmisi dapat dilanjutkan kembali bila putus dan menekan error. Di program ini diisi “alarm(2)” pada baris 65 bearti program akan berhenti (time out) bila 1 while loop melebih waktu 2 detik. Jika ini terjadi transmisi dapat dilanjutkan (resume) dengan menjalankan program ini kembali dengan menunjukkan file yang sama. Perbedaan lainnya terdapat di baris 72 “if(send_pkt.group=!7){continue;}” yang artinya jika paket yang diterima bukan group 7 agar diabaikan (ignore) dan lanjut ke loop berikutnya. Di baris 68 “if(strncmp(recv_pkt.data,"0S0T1O1P0",9)==0){break;}” berarti jika string yang diterima “0S0T1O1P0” dan jumlah karakter adalah “9” maka patahkan while loop, ditentukan bahwa string ini merupakan tanda bahwa transmisi telah berakhir.

```
82 printf("FINISH!!"); 
83 // closing device and file 
84 close (tosmac_dev); 
85 close(file); 
86 return 0; 
87 }
```

Baris 82 – 87 penutupan radio dan file serta akhir program.

### 4.2 Kompilasi Openjpeg

Subbab ini berisi cara untuk mengkompilasi software Openjpeg-1.5.1 ke Imote2-Linux, dengan kata agar software untuk kompresi dapat dilakukan di perangkat. Compiler yang digunakan adalah linux-gcc-4.1.2-arm-xscale-linux-gnu-glibc-2.3.3 dengan dependencies lcms2, libpng, dan zlib, untuk disini lcms2-2.6, libpng-1.2.51, dan zlib-1.2.8.

Source yang didapatkan dikompresi dalam format tape archive gunzip. Perintah berikut untuk mengekstrak isi file terkompresi:

Baris 60 – 81 merupakan proses transmisi. Di proses transmisi didalam while loop yang tidak terbatas, awalnya dibaca banyaknya byte yang telah diterima oleh file (besar file) di baris 62 “lseek(file,0,SEEK_END)” dan sekaligus menuju ke akhir file. Di baris 63 besar file dimasukkan ke “send_pkt.data[1]” dan di baris 64 dikirim ke transmitter untuk memberi tahu byte yang keberapa yang harus dikirim. Di program ini nilai dimulai dari -3000 agar dapat menentukkan nilai yang lebih besar karena masksimal nilai adalah kurang lebih 3000 sedangkan nilai yang perlu dikirim lebih dari 3000\. Untuk melakukan hal ini perlu ada perubahan pada “tosmac.h” pada bagian definisi paket di bagian. Untuk program ini tipe data “data” berubah dari “s8” menjadi “s16”, perubahahan adalah meningkatkan jumlah bit yang digunakan. Jika ditetapkan demikian nilai maksimimal pada “send_pkt.data[1]” hanya dibawah 1000\. Semua hal ini dilakukan agar transmisi dapat dilanjutkan kembali bila putus dan menekan error. Di program ini diisi “alarm(2)” pada baris 65 bearti program akan berhenti (time out) bila 1 while loop melebih waktu 2 detik. Jika ini terjadi transmisi dapat dilanjutkan (resume) dengan menjalankan program ini kembali dengan menunjukkan file yang sama. Perbedaan lainnya terdapat di baris 72 “if(send_pkt.group=!7){continue;}” yang artinya jika paket yang diterima bukan group 7 agar diabaikan (ignore) dan lanjut ke loop berikutnya. Di baris 68 “if(strncmp(recv_pkt.data,"0S0T1O1P0",9)==0){break;}” berarti jika string yang diterima “0S0T1O1P0” dan jumlah karakter adalah “9” maka patahkan while loop, ditentukan bahwa string ini merupakan tanda bahwa transmisi telah berakhir.

```
tar xfv linux-gcc-4.1.2-arm-xscale-linux-gnu-glibc-2.3.3.tgz 
tar xfv openjpeg-1.5.1.tar.gz 
tar xfv zlib-1.2.8.tar.gz 
tar xfv lcms2-2.6.tar.gz 
tar xfv libpng-1.2.51.tar.gz 
```

Perintah berikut untuk menambahkan lokasi file executeable compiler:

```
export PATH=/[lokasi folder]/arm-xscale-Linux-gnu/bin/:$PATH
```

Dependencies tambahan pertama yang diminta adalah lcms2.

```
cd /[lokasi folder]/lcms2-2.6 
export CROSS-PREFIX=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ 
./configure --prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
```

Perintah “cd” untuk masuk ke folder, “export” untuk memberi nilai ke suatu variable, disini “CROSS-PREFIX” didefinisikan di file “configure” pada zlib, jika dikompilasi untuk cross-compiler maka diberi nilai lokasi cross-compiler. Didalam file “configure” terdapat serangkaian configurasi, bila dijalankan akan dibentuk “Makefile” untuk kompilasi sesuai kebutuhan. Perintah “--prefix” untuk menambahkan lokasi instalasi. Perintah “make” untuk mengkompilasi berdasarkan file “Makefile” dan “make install” untuk menaruh hasil kompilasi ke tempat berdasarkan “--prefix”. Selanjutnya mengkompilasi zlib untuk compiler:

```
cd /[lokasi folder]/zlib-1.2.8 
CC=arm-xscale-linux-gnu-gcc prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ CFLAGS=”-04” ./configure --shared 
make && make install 
```

Di penelitian diperlukan perintah “--shared” agar dapat dideteksi oleh “libpng” saat konfigurasi. Setelah itu kompilasi libpng:

```
cd /[lokasi folder]/libpng-1.2.51 
./configure --prefix=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
```

Perintah “cd” untuk masuk ke folder, “export” untuk memberi nilai ke suatu variable, disini “CROSS-PREFIX” didefinisikan di file “configure” pada zlib, jika dikompilasi untuk cross-compiler maka diberi nilai lokasi cross-compiler. Didalam file “configure” terdapat serangkaian configurasi, bila dijalankan akan dibentuk “Makefile” untuk kompilasi sesuai kebutuhan. Perintah “--prefix” untuk menambahkan lokasi instalasi. Perintah “make” untuk mengkompilasi berdasarkan file “Makefile” dan “make install” untuk menaruh hasil kompilasi ke tempat berdasarkan “--prefix”. Selanjutnya mengkompilasi zlib untuk compiler:

```
cd /[lokasi folder]/zlib-1.2.8 
CC=arm-xscale-linux-gnu-gcc prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ CFLAGS=”-04” ./configure --shared 
make && make install 
```

Di penelitian diperlukan perintah “--shared” agar dapat dideteksi oleh “libpng” saat konfigurasi. Setelah itu kompilasi libpng:

```
cd /[lokasi folder]/libpng-1.2.51 
./configure --prefix=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
```

Berdasarkan file “configure” “--host” menentukan jenis platform kompilasi, disini adalah “arm-xscale-linux-gnu”, maka diperlukan “export” lokasi executable cross-compiler pada bagian awal subbab ini. Terakhir adalah kompilasi Openjpeg:

```
cd openjpeg-1.5.1 
./configure --prefix=/[lokasi folder]/[lokasi folder bebas]/ --host=arm-xscale-Linux-gnu --enable-jpwl --enable-debug --disable-tiff 
make && make install
```

### 4.3 Implementasi Testbed

Secara keseluruhan subbab ini mengandung proses transmisi untuk penelitian ini. Awalnya memasukkan program transmisi dan Openjpeg hingga pada intinya perangkat dapat melakukan transmisi dengan batterai atau tanpa terkoneksi ke komputer.

#### 4.4 Program Perintah

Disini terdapat program tambahan, selain menggunakan program “recv” diperlukan 2 program tambahan yaitu program untuk mengirim perintah dan program untuk menerima perintah. Program pengirim perintah “send_command.c” sebagai berikut:

```
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by Fajar Purnama 
9 /* Only Difference from original send.c is an addition of arguement (argc, argv) we could send any message we want without changing its source code for example sending hello message just type ./send_command hello */ 
10 #include <stdio.h> 
11 #include <fcntl.h> 
12 #include <unistd.h> 
13 #include <sys/ioctl.h> 
14 #include <tosmac.h> 
15 void msg_init(TOS_Msg* pMsg) { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0;
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
31 //--------------------- main ------------------------------- 
32 int main(int argc, const char *argv[]) { 
33 if(argv[1]==NULL){ 
34 printf("Usage: ./send_command [message], example ./send_command reboot, ./send_command hello\n"); 
35 return 1; 
36 } 
37 int tosmac_dev; 
38 TOS_Msg recv_pkt; 
39 TOS_Msg send_pkt; 
40 // open as blocking mode 
41 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
42 if (tosmac_dev < 0) 
43 { 
44 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
45 return 1; 
46 } 
47 msg_init(&send_pkt); 
48 send_pkt.addr = 99; 
49 memcpy(send_pkt.data, argv[1], TOSH_DATA_LENGTH); 
50 send_pkt.length = TOSH_DATA_LENGTH; 
51 printf("User write to driver\n");  
52 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); 
53close(tosmac_dev); 
54 return 0; 
55 }
```

Keseluruhan penjelasan program pengirim perintah sama seperti penjelasan program transmisi. Secara khusus yang berbeda pada program ini terdapat pada baris 49 dimana karakter yang akan ditulis ke “send_pkt.data” yaitu “argv[1]” akan dikirim. Program ini sebatas mengirim karakter maksimal 28 byte. Berikut adalah program penerima perintah “recv_command.c”:

```
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by Fajar Purnama 
9 /* The only difference is system() function is added from stdlib.h so the message received will be proccess as a command with this code still limited to 28 bytes. Example of message receive is recv_pkt.data = "reboot", it will be system("reboot"), and it will reboot the system */ 
10 #include <stdio.h> 
11 #include <stdlib.h> 
12 #include <fcntl.h> 
13 #include <unistd.h> 
14 #include <sys/ioctl.h> 
15 #include <tosmac.h> 
16 void msg_init(TOS_Msg* pMsg) 
17 { 
18 pMsg->length = 0; 
19 pMsg->fcfhi = 0; 
20 pMsg->fcflo = 0; 
21 pMsg->dsn = 0; 
22 pMsg->destpan = 0; 
23 pMsg->addr = 0; 
24 pMsg->type = 0; 
25 pMsg->group = 0; 
26 memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
27 pMsg->strength = 0; 
28 pMsg->crc = 0; 
29 pMsg->lqi = 0; 
30 pMsg->ack = 0; 
31 pMsg->time = 0; 
32 } 
33 //--------------------- main ------------------------------- 
34 int main(int argc, char* argv[]) 
35 { 
36 int tosmac_dev; 
37 TOS_Msg recv_pkt; 
38 TOS_Msg send_pkt; 
39 // open as blocking mode 
40 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
41 if (tosmac_dev < 0) 
42 { 
43 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
44 return 1; 
45 } 
46 printf("User read from driver:\n");   
47 read(tosmac_dev, &recv_pkt, sizeof(TOS_Msg));// != sizeof(TOS_Msg); 
48 printf("data is %s\n", recv_pkt.data); 
49 system(recv_pkt.data);// Process recv_pkt.data as a command in terminal 
50 // close device 
51 close (tosmac_dev); 
52 return 0; 
53 } 
```

Keseluruhan penjelasan program penerima perintah sama seperti penjelasan program transmisi. Secara khusus yang berbeda pada program ini terdapat pada baris 49 dimana karakter yang diterima, terkandung dalam “recv_pkt.data” akan diperlakukan sebagai perintah. Hal ini dimungkinkan oleh fungsi “system” yang didefinisikan dalam “stdlib.h”.

#### 4.3.2 Penempatan Program

Setelah kode program jadi, kode tersebut dikompilasi menggunakan “arm-xscale-linux-gnu-gcc”.

```
export PATH=/[lokasi folder]/arm-xscale-Linux-gnu/bin/:$PATH (jika belum) 
cd /[lokasi folder program] 
arm-xscale-linux-gnu-gcc -Wall send.c -o send  
arm-xscale-linux-gnu-gcc -Wall recv.c -o recv 
arm-xscale-linux-gnu-gcc -Wall send_command.c -o send_command  
arm-xscale-linux-gnu-gcc -Wall recv_command.c -o recv_command  
arm-xscale-linux-gnu-gcc -Wall send_file_advance.c -o  
send_file_advance  
arm-xscale-linux-gnu-gcc -Wall recv_file_advance.c -o  
recv_file_advance  
```

Selanjutnya ditempatkan di Imote2 dalam directory “/root/transmit”. Receiver terkoneksi di USB0 dengan alamat IP di komputer 192.168.98.100 dan di Imote2 192.168.98.101\. Transmitter terkoneksi di USB1 dengan alamat IP di komputer 192.168.99.100 dan di Imote2 192.168.99.102\. Koneksi antar Imote2 menggunakan SSH (secure shell) yang telah disiapkan di penelitian sebelumnya seperti dijelaskan pada BAB II subbab 2.1\. Sebelum penempatan dibuat directory terlebih dahulu.

```
ssh 192.168.98.101 
mkdir /root/transmit && mkdir /root/command && mkdir /root/image 
quit && exit 
ssh 192.168.99.102 
mkdir /root/transmit && mkdir /root/command && mkdir /root/image 
quit && exit  
```

Perintah “mkdir” (make directory) untuk membuat folder baru. Untuk penelitian ini citra raw (Gambar 3.1) telah terkandung dalam directory “/root/image” dengan nama “1.ppm”. Jika directory telah siap maka program dimasukkan, sekaligus Openjpeg yang telah dikompilasi.

```
cd /[lokasi program] 
scp * root@192.168.98.101:transmit/ && scp *  
root@192.168.99.102:transmit/ 
cd /[lokasi folder openjpeg] 
scp -r [folder openjpeg] root@192.168.98.101: 
scp -r [folder openjpeg] root@192.168.99.102: 
```

SCP merupakan perintah untuk copy data melalui SSH, “*” mengindikasikan semua file yang ada pada folder tersebut, “-r” untuk mengcopy suatu directory. Berikutnya hasil kompilasi Openjpeg ditempatkan pada directory yang sesuai.

```
ssh 192.168.99.102 
cd /[lokasi folder openjpeg] 
cd bin && mv * /bin  
cd ../include && mkdir /usr/include && mv * /usr/include 
cd ../lib && mv * /lib 
cd ../share && mv man /usr/share && mv /doc/* /usr/share/doc 
quit && exit 
ssh 192.168.98.101 
cd /[lokasi folder openjpeg] 
cd bin && mv * /bin  
cd ../include && mkdir /usr/include && mv * /usr/include 
cd ../lib && mv * /lib 
cd ../share && mv man /usr/share && mv /doc/* /usr/share/doc 
quit && exit 
```

Untuk memudahkan transmisi disiapkan beberapa perintah dalam bentuk file sebagai berikut:

1.  Berikut mengandung perintah untuk mengirim citra raw dengan nama file “A”:

```
#!/bin/bash 
/root/transmit/send_file_advance /root/image/1.ppm
```

2.  Berikut mengandung perintah untuk mengkompresi citra raw ke format JPEG2000 dengan rasio 1 dengan nama file “B”:

```
#!/bin/bash 
image_to_j2k -i /root/image/1.ppm -r 1 -o /root/image/1r1.j2k 
/root/transmit/send_command Finish!! 
```

3.  Berikut mengandung perintah untuk mengirim citra JPEG2000 rasio 1 dengan nama file “C”:

```
#!/bin/bash 
/root/transmit/send_file_advance /root/image/1r1.j2k 
```

4.  Berikut mengandung perintah untuk mengkompresi citra raw ke format JPEG2000 dengan rasio 5 dengan nama file “D”:

```
#!/bin/bash 
image_to_j2k -i /root/image/1.ppm -r 5 -o /root/image/1r5.j2k 
/root/transmit/send_command Finish!! 
```

5.  Berikut mengandung perintah untuk mengirim citra JPEG2000 rasio 5 dengan nama file “E”:

```
#!/bin/bash 
/root/transmit/send_file_advance /root/image/1r5.j2k 
```

6.  Berikut mengandung perintah untuk mengkompresi citra raw ke format JPEG2000 dengan rasio 10 dengan nama file “F”:

```
#!/bin/bash 
image_to_j2k -i /root/image/1.ppm -r 1 -o /root/image/1r10.j2k 
/root/transmit/send_command Finish!! 
```

7.  Berikut mengandung perintah untuk mengirim citra JPEG2000 rasio 10 dengan nama file “G”:

```
#!/bin/bash 
/root/transmit/send_file_advance /root/image/1r10.j2k 
```

8.  Untuk file “B”, “D”, “F”, setelah kompresi akan mengirim karakter “Finish!!” untuk memberi tahu receiver bahwa kompresi telah selesai.

File dari tabel diatas akan ditaruh ke directory “/root/command”.

```
cd /[lokasi file command] 
scp * root@192.168.98.101:command/  
scp * root@192.168.99.102:command/ 
```

#### 4.3.3 Konfigurasi Startup

Langkah terakhir untuk implementasi testbed adalah agar kedua Imote2 saat dihidupkan menyiapkan driver Tosmac untuk radio dan transmitter saat dihidupkan selalu siap untuk menerima perintah dari receiver. Penelitian ini menggunakan radio yang telah disiapkan pada penelitian sebelumnya. Untuk melakukan hal ini ditaruh 2 file startup di “/etc/rc2.d/”. File “S12loadtosmac” untuk radio dan file “S14infloop” untuk menerima perintah secara terus-menerus. Gambar 4.1 adalah contoh bila mengirim perintah “poweroff” untuk mematikan perangkat dan Gambar 4.2 merupakan contoh transmisi.

```
#!/bin/sh 
insmod /lib/modules/2.6.29.1_r1.1/kernel/arch/arm/mach-pxa/ssp.ko 
insmod /lib/modules/2.6.29.1_r1.1/kernel/drivers/tosmac/tos_mac.ko 
mknod /dev/tosmac c 240 0 
```

```
while (true) 
do 
/root/transmit/recv_command 
Done 
```



![Gambar 4.5 Contoh pemberian perintah poweroff.png](https://cdn.steemitimages.com/DQmVNgR8bJ7MJXVS1yiW4nTSUaQC2EpqgBVpMNW2LNwnawk/Gambar%204.5%20Contoh%20pemberian%20perintah%20poweroff.png)

Gambar 4.5 Contoh pemberian perintah poweroff





![Gambar 4.6 Contoh transmisi.png](https://cdn.steemitimages.com/DQmXWuK8uqCjgWGUuRB6gtMyjKqQv5WDAbqK9r7w7RktVBa/Gambar%204.6%20Contoh%20transmisi.png)

Gambar 4.6 Contoh transmisi



#### 4.3.4 Penggunaan Testbed

Untuk melakukan transmisi citra tanpa kompresi dan terkompresi sebagai berikut:

```
/root/transmit/send_command /root/command/A (transmisi citra raw) 
/root/transmit/recv_file_advance /root/image/[nama citra output].ppm 
/root/transmit/send_command /root/command/B (kompresi rasio 1) 
/root/transmit/recv (tunggu pemberitahuan selesainya kompresi) 
/root/transmit/send_command /root/command/C (transmisi citra rasio 1) 
/root/transmit/recv_file_advance /root/image/[nama citra output].j2k 
/root/transmit/send_command /root/command/D (kompresi rasio 5) 
/root/transmit/recv (tunggu pemberitahuan selesainya kompresi) 
/root/transmit/send_command /root/command/E (transmisi citra rasio 5) 
/root/transmit/recv_file_advance /root/image/[nama citra output].j2k 
/root/transmit/send_command /root/command/F (kompresi rasio 10) 
/root/transmit/recv (tunggu pemberitahuan selesainya kompresi) 
/root/transmit/send_command /root/command/G(transmisi citra rasio 10) 
/root/transmit/recv_file_advance /root/image/[nama citra output].j2k
```

Pengukuran PSNR menggunakan software ImageMagick. Citra yang dikompresi dengan format .j2k dikembalikan ke format .ppm dengan ukuran file menjadi seperti aslinya. Perintahnya adalah sebagai berikut:

```
j2k_to_image -i [citra .j2k] -o [nama citra .ppm] 
compare -metric PSNR [citra asli] [citra pembanding] [citra ouput pengukuran]  
```

Memory dapat dilihat saat aplikasi sedang berjalan dengan perintah:

```
ps (terlihat nomor proses aplikasi) 
cat /proc/[nomor proses aplikasi]/status  
```

### 4.4 Analisis Data

Di bagian ini akan di analisa hasil data penelitian yang berupa konsumsi dari daya listrik, memory, dan waktu pada setiap proses transmisi, serta ditampilkan juga nilai PSNR dari citra yang telah dikirim. Jika diringkas kembali proses transmisi meliputi transmisi citra tanpa kompresi dan yang telah dikompresi berdasarkan standar JPEG2000 dengan software OpenJPEG 1.5.2 rasio 1, 5, dan 10, dilakukan pada jarak 5m, 10m, dan 15m.

#### 4.4.1 Konsumsi Daya Listrik

Secara keseluruhan hasil dari data penelitian menunjukkan bahwa kompresi sangat berpengaruh terhadap transmisi. Untuk mendapatkan detil konsumsi daya listrik penelitian ini melakukan proses transmisi masing-masing pada jarak 5 meter, 10 meter, dan 15 meter.


![Gambar 4.7 Konsumsi tegangan listrik 5 meter.PNG](https://cdn.steemitimages.com/DQmQvKWR81HgxpGMGP7zFwfgi5VN4MSSRgUatWuN8rkUPvp/Gambar%204.7%20Konsumsi%20tegangan%20listrik%205%20meter.PNG)


Gambar 4.7 Konsumsi tegangan listrik 5 meter



Gambar 4.7 menunjukkan konsumsi tegangan listrik transmisi pada jarak 5 meter. Konsumsi tegangan menurun secara konstan terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi tegangan listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 17 mV untuk rasio 1, 37 mV dan 44 mV untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi tegangan listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 2 mV untuk rasio 1, 27 mV dan 36 mV untuk rasio 5 dan rasio 10.



![Gambar 4.8 Konsumsi tegangan listrik 10 meter.PNG](https://cdn.steemitimages.com/DQmQQzMqyKMvT3vdp3rPkiwAKfgwtCAdrUATZz7jeuMavU6/Gambar%204.8%20Konsumsi%20tegangan%20listrik%2010%20meter.PNG)

Gambar 4.8 Konsumsi tegangan listrik 10 meter



Gambar 4.8 menunjukkan konsumsi tegangan listrik transmisi pada jarak 10 meter. Konsumsi tegangan menurun secara konstan terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi tegangan listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 18 mV untuk rasio 1, 36 mV dan 45 mV untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi tegangan listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 2 mV untuk rasio 1, 24 mV dan 35 mV untuk rasio 5 dan rasio 10.



![Gambar 4.9 Konsumsi tegangan listrik 15 meter.PNG](https://cdn.steemitimages.com/DQmbXk51vnZ4Gbhj3WaDc2VHPfZJm3AoshTXp7qmfxUgS7W/Gambar%204.9%20Konsumsi%20tegangan%20listrik%2015%20meter.PNG)

Gambar 4.9 Konsumsi tegangan listrik 15 meter



Gambar 4.9 menunjukkan konsumsi tegangan listrik transmisi pada jarak 15 meter. Konsumsi tegangan menurun secara konstan terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi tegangan listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 17 mV untuk rasio 1, 35 mV dan 45 mV untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi tegangan listrik secara keseluruhan citra tanpa kompresi dengan terkompresi sama untuk rasio 1, 21 mV dan 34 mV untuk rasio 5 dan rasio 10.



![Gambar 4.10 Konsumsi arus listrik 5 meter.PNG](https://cdn.steemitimages.com/DQmTHBrK9SbzMr5pgaQuUzoi39TGjjiQYztUYfB5SyzrowJ/Gambar%204.10%20Konsumsi%20arus%20listrik%205%20meter.PNG)

Gambar 4.10 Konsumsi arus listrik 5 meter



Gambar 4.10 menunjukkan konsumsi arus listrik transmisi pada jarak 5 meter. Konsumsi arus listrik menurun terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi arus listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 4.2 mA untuk rasio 1, 4.6 mA dan 5.4 mA untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 2.8 mA untuk rasio 1, 3.3 mA dan 4.3 mA untuk rasio 5 dan rasio 10.



![Gambar 4.11 Konsumsi arus listrik 10 meter.PNG](https://cdn.steemitimages.com/DQmd4ExVd82E4mMg3sMtHyARxLUCYBEJFXxPrN2TR19D9WJ/Gambar%204.11%20Konsumsi%20arus%20listrik%2010%20meter.PNG)

Gambar 4.11 Konsumsi arus listrik 10 meter



Gambar 4.11 menunjukkan konsumsi arus listrik transmisi pada jarak 10 meter. Konsumsi arus listrik menurun terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi arus listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 4.7 mA untuk rasio 1, 4.7 mA dan 5.8 mA untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 3.2 mA untuk rasio 1, 3.3 mA dan 4.6 mA untuk rasio 5 dan rasio 10.



![Gambar 4.12 Konsumsi arus listrik 15 meter.PNG](https://cdn.steemitimages.com/DQma4XaZAVDXNDnawBtL11fJ5kzDKBfaJd5ZRhD4if28zd3/Gambar%204.12%20Konsumsi%20arus%20listrik%2015%20meter.PNG)

Gambar 4.12 Konsumsi arus listrik 15 meter



Gambar 4.12 menunjukkan konsumsi arus listrik transmisi pada jarak 15 meter. Konsumsi arus listrik menurun terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi arus listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 4.4 mA untuk rasio 1, 5.2 mA dan 6 mA untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 2.7 mA untuk rasio 1, 3.7 mA dan 4.6 mA untuk rasio 5 dan rasio 10.



![Gambar 4.13 Konsumsi daya listrik 5 meter.PNG](https://cdn.steemitimages.com/DQmV5RW878ce3e6gDeSmVCzDnqukHTn4BpLCnufjSyNVd9j/Gambar%204.13%20Konsumsi%20daya%20listrik%205%20meter.PNG)

Gambar 4.13 Konsumsi daya listrik 5 meter



Gambar 4.13 menunjukkan konsumsi daya listrik transmisi pada jarak 5 meter. Konsumsi daya menurun secara drastis terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi daya listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 268.4 mW untuk rasio 1, 319.6 mW dan 341 mW untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 161.2 mW untuk rasio 1, 265.2 mW dan 312.1 mW untuk rasio 5 dan rasio 10.



![Gambar 4.14 Konsumsi daya listrik 10 meter.PNG](https://cdn.steemitimages.com/DQmdjDFGTfipQ7Q8JnFP6YatgAGqBGUG7mZ8G2f4jZUMRSX/Gambar%204.14%20Konsumsi%20daya%20listrik%2010%20meter.PNG)

Gambar 4.14 Konsumsi daya listrik 10 meter



Gambar 4.14 menunjukkan konsumsi daya listrik transmisi pada jarak 10 meter. Konsumsi daya menurun secara drastis terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi daya listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 314 mW untuk rasio 1, 355.4 mW dan 390.4 mW untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 193.2 mW untuk rasio 1, 280.2 mW dan 350.8 mW untuk rasio 5 dan rasio 10.



![Gambar 4.15 Konsumsi daya listrik 15 meter.PNG](https://cdn.steemitimages.com/DQmbBtLUxzug2piiPfAk82aYggx6PTiyrkGTmjvcquWfCGy/Gambar%204.15%20Konsumsi%20daya%20listrik%2015%20meter.PNG)

Gambar 4.15 Konsumsi daya listrik 15 meter



Gambar 4.15 menunjukkan konsumsi daya listrik transmisi pada jarak 15 meter. Konsumsi daya menurun secara drastis terhadap rasio kompresi yang diaplikasikan. Selisih konsumsi daya listrik hanya ditransmisi citra tanpa kompresi dengan terkompresi lebih hemat 318.4 mW untuk rasio 1, 396 mW dan 432 mW untuk rasio 5 dan rasio 10\. Jika dilibatkan konsumsi saat kompresi tetap lebih hemat. Selisih konsumsi arus listrik secara keseluruhan citra tanpa kompresi dengan terkompresi lebih hemat 162 mW untuk rasio 1, 303.9 mW dan 378 mW untuk rasio 5 dan rasio 10.

Dari Gambar 4.7 – Gambar 4.15 dapat disimpulkan segi konsumsi daya listrik dan waktu proses kompresi sangat rendah tetapi dapat dengan signifikan meringankan beban transmisi sehingga sangat dianjurkan untuk digunakan. Dengan mengaplikasikan rasio kompresi yang lebih besar akan menurunkan konsumsi arus dan tegangan listrik saat transmisi otomatis daya listrik yang dikonsumsi lebih rendah. Juga seiring dengan meningkatnya rasio kompresi konsumsi arus dan tegangan listrik mengecil sehingga dipastikan dengan meningkatkan rasio kompresi akan meringankan beban transmisi. Semakin jauh jarak transmisi semakin besar konsumsi daya listrik, tetapi perbedaan antara jarak 5 meter, 10 meter, dan 15 meter tidak signifikan.

#### 4.4.2 Waktu Proses Transmisi

Selain dari konsumsi daya listrik, dari segi waktu juga terlihat drastis pengaruh dari kompresi, tetapi hampir tidak terlihat pengaruh dari segi jarak 5 meter, 10 meter, dan 15 meter. Gambar 4.16 menunjukkan waktu yang dibutuhkan untuk kompresi dan transmisi, sedangkan Gambar 4.17 merupakan waktu yang dibutuhkan secara keseluruhan yang merupakan gabungan dari kompresi dan transmisi.



![Gambar 4.16 Konsumsi waktu kompresi dan transmisi.PNG](https://cdn.steemitimages.com/DQmXfvVSRzcV3mZ1HiYphpTdoVyop352WqTZYQZ9XBpbAYs/Gambar%204.16%20Konsumsi%20waktu%20kompresi%20dan%20transmisi.PNG)

Gambar 4.16 Konsumsi waktu kompresi dan transmisi



Gambar 4.16 menunjukkan kompresi memerlukan waktu yang singkat dan sangat memperndek waktu yang diperlukan untuk transmisi. Semakin besar rasio kompresi yang diaplikasikan semakin kecil waktu transmisi. Waktu kompresi memerlukan 25 – 30 detik. Waktu transmisi semakin kecil dari citra raw hingga citra yang dikompresi rasio 10 dengan nilai sekitar 10 menit 30 detik, 5 menit, 2 menit, dan 1 menit.



![Gambar 4.17 Konsumsi waktu keseluruhan.PNG](https://cdn.steemitimages.com/DQmQZ16dzU21tHrajVWMqXck1Lqo9CB6MYgTF4XBEkwREbM/Gambar%204.17%20Konsumsi%20waktu%20keseluruhan.PNG)

Gambar 4.17 Konsumsi waktu keseluruhan



Secara keseluruhan dari segi jarak tidak kelihatan berpengaruh akan tetapi kompresi, yang berperan untuk mempersingkat waktu transmisi. Citra yang terkompresi rasio 10 memerlukan waktu keseluruhan 1 menit 30 detik, rasio 5 2 menit 30 detik, rasio 1 4 menit 30 detik, dan 10 menit untuk citra yang tidak dikompresi.

#### 4.4.3 Kualitas Citra

Setelah dari segi waktu dilihat juga dari segi kualitas citra dengan menggunakan ukuran PSNR.



![Gambar 4.18 PSNR citra setelah proses transmisi.PNG](https://cdn.steemitimages.com/DQmXudMxzNYP4bWYt9kN2mSVrrYeKCAgavETFgaBeg9bpNy/Gambar%204.18%20PSNR%20citra%20setelah%20proses%20transmisi.PNG)

Gambar 4.18 PSNR citra setelah proses transmisi



Gambar 4.18 menunjukkan PSNR citra tanpa kompresi dan dikompresi setelah transmisi pada jarak 5 meter, 10 meter, 15 meter. Rasio 10 baik dari jarak 5 meter, 10 meter, dan 15 meter memiliki PSNR yang sama dengan nilai 40.6536, mirip pula dengan rasio 5 berkisar sekitar nilai 43.8\. Pengaruh jarak terlihat di rasio 1 dan tanpa kompresi, untuk rasio 1 nilai PSNR sekitar 35 untuk jarak 5 meter dan 10 meter, dan turun secara signifikan di jarak 15 meter dengan nilai PSNR 24.7041\. Pengaruh jarak dapat dilihat di citra tanpa kompresi, untuk rasio 5 dan 10 tidak terlihat pengaruh dari jarak. Pada citra tanpa kompresi nilai PSNR menurun dengan jarak yang semakin jauh, secara berurutan 5 meter, 10 meter, dan 15 meter, adalah 38.8494, 30.4678, 38.3421.

Maka dapat disimpulkan rasio 1 memiliki kualitas yang paling buruk setelah citra tanpa kompresi, sedangkan rasio 10 memiliki kualitas yang menjanjikan, dan rasio 5 menunjukkan kualitas yang paling baik. Dari segi penglihatan citra dengan PSNR dibawah 40 dB kelihatan jelas tidak seperti aslinya. Penyebabnya adalah error transmisi.

#### 4.4.4 Besar File dan Memory



![Gambar 4.19 Perbandingan penggunaan maksimal virtual memory.PNG](https://cdn.steemitimages.com/DQmQKWP8J5nFNwfricxotTsj3DXqMS9FhQyW6QuBGJFXaaT/Gambar%204.19%20Perbandingan%20penggunaan%20maksimal%20virtual%20memory.PNG)

Gambar 4.19 Perbandingan penggunaan maksimal virtual memory



Gambar 4.19 memperlihatkan maksimal virtual memory yang digunakan, dan paling banyak digunakan pada saat kompresi. Untuk kompresi menggunakan maksimal virtual memory 14548 kB dan pengiriman menggunakan 1256 kB di transmitter, di penerima menggunakan maksimal virtual memory 2336 kB untuk penerimaan.



![Gambar 4.20 Besar file citra.PNG](https://cdn.steemitimages.com/DQmd9Hb7fPrQi97ZxHNF85Fi5GiaoJ5xkRmRK4nDCBCrXuR/Gambar%204.20%20Besar%20file%20citra.PNG)

Gambar 4.20 Besar file citra



Gambar 4.20 memperlihatkan besar file citra tanpa kompresi dan terkompresi, besar file mengecil dengan mengaplikasikan rasio yang semakin besar. Besar file untuk citra tanpa kompresi adalah 921.6 kB, rasio 1 429.9 kB, rasio 5 184.2 kB, dan rasio 10 91.7 kB. Dari segi kualitas citra, citra asli dan terkompresi rasio 1 memiliki PSNR yang lebih rendah dari citra lainnya, dan kelihatan dari citra tersebut bahwa terjadi error transmisi. Maka semakin besar ukuran file semakin peka terhadap error.

## BAB 5 Penutup

### 5.1 Simpulan

Dari keseluruhan penelitian ini dapat disimpulkan sebagai berikut:

1.  Implementasi codec OpenJPEG pada embedded system Imote2 Linux dilakukan kompilasi dengan arm-xscale-linux-gnu, jpwl diaktifkan dan tiff dinonaktifkan, dan diperlukan dependencies tambahan yaitu lcms2, zlib, dan libpng.
2.  Mekanisme implementasi transmisi citra embedded system Imote2 Linux dibutuhkan program ditulis dalam bahasa C dengan fitur pengiriman file fungsi yang diperlukan antara lain “creat”, “open”, “close”, “read”, dan “write”. Solusi untuk buffer yang terbatas maksimal adalah 28 byte, maka pengiriman bertahap sehingga fungsi looping diimplementasikan. Untuk keperluan testbed dibuat program pengirim perintah dan penerima perintah, dengan program pengirim sebagai pengirim karakter, dan program penerima sebagai penerima karakter ditambahkan fungsi “system” agar karakter tersebut diperlakukan sebagai perintah, kemudian diaktifkan saat startup.
3.  Penelitian ini telah berhasil untuk mentransmisikan citra, transmisi citra emebedded system Imote2 Linux dimana citra dicapture tanpa kompresi menghasilkan ukuran file citra 921,615 kB, pada jarak 5 meter sampai 15 meter mengkonsumsi daya listrik antara 350 mW – 450 mW, memerlukan waktu antara 10 menit – 15 menit, dengan memory untuk setiap transmisi 2000 kB.
4.  Penerapan skema JPEG2000 terhadap citra dalam proses transmisi sangat meringankan beban transmisi dari segi daya listrik, dan waktu transmisi. Transmisi citra dengan jarak 5 meter sampai 15 meter menghasilkan, untuk rasio 1 mengkonsumsi daya listrik 191 mW – 294 mW dengan waktu transmisi sekitar 5 menit, rasio 5 mengkonsumsi daya listrik 87 mW – 152 mW dengan waktu transmisi sekitar 2 menit, dan rasio 10 mengkonsumsi daya listrik 40 mW – 78 mW dengan waktu transmisi 1 menit 30 detik.
5.  Dari segi kualitas citra menunjukkan kinerja baik pada rasio 5 dan rasio 10\. Penyebab utama adalah ukuran file, dimana semakin besar ukuran file semakin besar waktu transmisi sehingga memperbesar peluang untuk terjadi bit error transmisi.

### 5.2 Saran

Dengan berhasilnya mentransmisikan citra pada Imote2 Linux, alat ini dapat digunakan baik untuk keperluan di lapangan maupun penelitian lebih lanjut. Berikut merupakan saran penelitian lanjutan:

1.  Di penelitian ini pengendalian transmisi masih minimal, maka selanjutnya agar dapat dikembangkan sistem transmisi yang menerapkan error dan flow control dari bidang komunikasi data.
2.  Transmisi yang dilakukan sebatas point-to-point (antar perangkat), berikutnya agar diterapkan multi-hop transmission.
3.  Teknis penelitian untuk mengoperasikan Imote2 Linux masih via command-line, dianjurkan untuk dibikinkan pengoperasi versi graphical user interface (GUI) untuk memudahkan penggunaan dan penelitian.
4.  Jarak transmisi di penelitian ini adalah 5 meter, 10 meter, dan 15 meter, jarak masih dapat divariasikan menurut datasheet hingga maksimal 100 meter.
5.  Kompresi citra dapat divariasikan dari fitur-fitur JPEG2000 hingga menerapkan standar kompresi citra lainnya, lebih lanjut ke video.
6.  Multimedia Sensor Board IMB400 juga terdapat sensor suara yang belum disentuh di penelitian ini, jika digabung dengan video maka dapat dikembangkan ke environment monitoring dengan audio-video.
7.  Jika multi-hop dan audio-video dapat diterapkan maka dapat dilanjutkan dengan penelitian berikutnya yaitu distributed audio-video streaming pada embedded system.

## Citra


![Gambar 1. Citra asli.jpg](https://cdn.steemitimages.com/DQmbrVVc3eNsUhn8VzMhinqDmazKM9D7gGyge8iQ2bVomP6/Gambar%201.%20Citra%20asli.jpg)


Gambar 1\. Citra asli





![Gambar 2. Citra tanpa kompresi setelah transmisi 5 meter.jpg](https://cdn.steemitimages.com/DQmV1VidPY1QcYbjeBGoXwCwsXjtoYKbp5aZ1MXxipS97x6/Gambar%202.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%205%20meter.jpg)

Gambar 2\. Citra tanpa kompresi setelah transmisi 5 meter





![Gambar 3. Citra tanpa kompresi setelah transmisi 10 meter.jpg](https://cdn.steemitimages.com/DQmdjo4nAMVuNAoUUYDET3iGc3J9b7r2UA7yEzpWWdwwY5w/Gambar%203.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%2010%20meter.jpg)

Gambar 3\. Citra tanpa kompresi setelah transmisi 10 meter




![Gambar 4. Citra tanpa kompresi setelah transmisi 15 meter.jpg](https://cdn.steemitimages.com/DQmT1Q4bwQiYym7XdgZSD6N3EG8dGksi1sz1apSHThwLwaX/Gambar%204.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%2015%20meter.jpg)


Gambar 4\. Citra tanpa kompresi setelah transmisi 15 meter




![Gambar 5. Citra terkompresi rasio 1 setelah transmisi 5 meter.jpg](https://cdn.steemitimages.com/DQmZmdBTyFwry8pbXaAuGAureunxaxpL8Taa6nKyzd8bbBo/Gambar%205.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%205%20meter.jpg)


Gambar 5\. Citra terkompresi rasio 1 setelah transmisi 5 meter





![Gambar 6. Citra terkompresi rasio 1 setelah transmisi 10 meter.jpg](https://cdn.steemitimages.com/DQmYLLMBqRtidzoBwjofTtfY4uHRDBxUbdYtZGLSfJcemEg/Gambar%206.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%2010%20meter.jpg)

Gambar 6\. Citra terkompresi rasio 1 setelah transmisi 10 meter





![Gambar 7. Citra terkompresi rasio 1 setelah transmisi 15 meter.jpg](https://cdn.steemitimages.com/DQmdeoNFo45pRp8GQ5GmDCqZFcGh7Fce32CniYGccog7ni9/Gambar%207.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%2015%20meter.jpg)

Gambar 7\. Citra terkompresi rasio 1 setelah transmisi 15 meter





![Gambar 8. Citra terkompresi rasio 5 setelah transmisi 5 meter.jpg](https://cdn.steemitimages.com/DQmZxXwjxgQC2LNgphVceRiUSgokB6m1o35FUY4ju51XqaA/Gambar%208.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%205%20meter.jpg)

Gambar 8\. Citra terkompresi rasio 5 setelah transmisi 5 meter




![Gambar 9. Citra terkompresi rasio 5 setelah transmisi 10 meter.jpg](https://cdn.steemitimages.com/DQmZxXwjxgQC2LNgphVceRiUSgokB6m1o35FUY4ju51XqaA/Gambar%209.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%2010%20meter.jpg)


Gambar 9\. Citra terkompresi rasio 5 setelah transmisi 10 meter





![Gambar 10. Citra terkompresi rasio 5 setelah transmisi 15 meter.jpg](https://cdn.steemitimages.com/DQmXCuPyBSARWGuusQMMpnPRnFAwRyzscGCBCPLURBJLxQy/Gambar%2010.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%2015%20meter.jpg)

Gambar 10\. Citra terkompresi rasio 5 setelah transmisi 15 meter





![Gambar 11. Citra terkompresi rasio 10 setelah transmisi 5 meter.jpg](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2011.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%205%20meter.jpg)

Gambar 11\. Citra terkompresi rasio 10 setelah transmisi 5 meter




![Gambar 12. Citra terkompresi rasio 10 setelah transmisi 10 meter.jpg](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2012.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%2010%20meter.jpg)


Gambar 12\. Citra terkompresi rasio 10 setelah transmisi 10 meter





![Gambar 13. Citra terkompresi rasio 10 setelah transmisi 15 meter.jpg](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2013.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%2015%20meter.jpg)

Gambar 13\. Citra terkompresi rasio 10 setelah transmisi 15 meter



## Daftar Pustaka

*   Ahmad, A. 2005\. Wireless and Mobile Data Networks. New Jersey : John Wiley & Sons Ltd.
*   Akyildiz, I, F. Vuran, M, C. 2010\. Wireless Sensor Networks. Chichester : John Wiley & Sons Ltd.
*   Boliek, M. Christopoulos, C. Majani, Eric. 16 Maret 2000\. JPEG 2000 Part I Final Committee Draft Version 1.0\. ISO/IEC FCD15444-1 : 2000.
*   Daintree Network, Inc. 2006\. Understanding the ZigBee Application Framework. Daintree Networks Inc. [http://www.daintree.net/downloads/whitepapers/understanding_application_framework_whitepaper.pdf](http://www.daintree.net/downloads/whitepapers/understanding_application_framework_whitepaper.pdf). Diakses: 27 Januari 2014.
*   Ergen, S, C. 10 September 2004\. ZigBee/IEEE 802.15.4 Summary. [http://staff.ustc.edu.cn/~ustcsse/papers/SR10.ZigBee.pdf](http://staff.ustc.edu.cn/~ustcsse/papers/SR10.ZigBee.pdf). Diakses: 27 Januari 2014.
*   Garcia-Sanchez, A. Garcia-Sanches, F. Losilla, F. Kulakowski, P. Garcia-Haro, J. Rodriguez, A. Lopez-Bao, J. Palomares, F. 3 Agustus 2010\. Wireless Sensor Network Deployment for Monitoring Wildlife Passage. mdpi.com., hal. 7236-7262.
*   Irwin, J, D. 1993\. Basic Engineering Circuit Analysis Fourth Edition. New York : Macmillan Publishing Company.
*   Karthikeyan, A. Shankar, T. Srividhya, V. Sarkar, S. Gupte, A. 20 Januari 2013\. Energi Efficient Distributed Image Compression Using JPEG2000 in Wireless Sensor Networks (WSNs). Journal of Theorical and Applied Information Technology, vol. 47, no. 2, hal.860-869\. [http://www.jatit.org](http://www.jatit.org). Diakses: 14 Oktober 2013.
*   Kasteleiner, J. 2010\. “Principles of applying Embedded Linux on Imote2” (Diploma Thesis). Faculty of Computer Science and Engineering, University of Applied Sciences Frankfurt am Main.
*   Mowafi, M. Awad, F. Taqieddin, E. Banimelhem, O. 25-27 April 2011\. Experimental Evaluation of Image Compression and Transmission for TinyOS-Based Imote2 Platform. International Conference on Innovations in Information Technology, Abu Dhabi, hal.173-178\. [http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5893811&url=http%3A%2F%2Fieeexplore.ieee.org%2Fstamp%2Fstamp.jsp%3Ftp%3D%26arnumber%3D5893811](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5893811&url=http%3A%2F%2Fieeexplore.ieee.org%2Fstamp%2Fstamp.jsp%3Ftp%3D%26arnumber%3D5893811). Diakses: 25 September 2013.
*   Mowafi, M. Awad, F. Taqieddin, E. Banimelhem, O. 4 April 2012\. A Practical Study of Jointly Exploiting Multiple Image Compression Technique for Wireless Multimedia Sensor Networks. Journal of Communication, vol. 7, no. 4, hal. 309-320\. [http://www.jocm.us](http://www.jocm.us). Diakses: 25 September 2013.
*   Nasri, M. Helali, A. Sghaier, H. Maaref, H. 23-25 Maret 2010\. Adaptive image transfer for wireless sensor networks (WSNs). 2010 International Conference on Design & Technology of Integrated Systems in Nanoscale Era, Hammamet, hal. 1-7\. [http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5487597&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5487597](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5487597&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5487597). Diakses: 14 Oktober 2013.
*   Natha, F, S. 2012\. "Performasi Platform Imote2 Menggunakan Standar 802.11 pada Jaringan Sensor Nirkabel" (Tugas Akhir), Denpasar : Jurusan Teknik Elektro., Universitas Udayana.
*   Pekhteryev, G. Sahinoglu, Z. Orlik, P. Bhati, G. Mei 2005\. Image Transmission over IEEE 802.15.4 and ZigBee Networks. IEEE ISCAS, Kobe. [http://www.merl.com/publications/docs/TR2005-030.pdf](http://www.merl.com/publications/docs/TR2005-030.pdf). Diakses: 27 Maret 2014.
*   Purnama, F. Widyantara, I, M, O. Sastar, N, P. 14-15 November 2013\. Implementasi Embedded Linux pada Jaringan Sensor Nirkabel Platform Imote2\. Prosiding Conference on Smart-Green Technology in Electrical dan Information Systems, Bali, hal. 91-96\. [http://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/download/7259/5508](http://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/download/7259/5508).Diakses: 27 Maret 2014.
*   Shi, Y. Sun, H. 2007\. Image and Video Compression for Multimedia Engineering Second Edition. Broken Sound Parkway NW : Taylor & Francis Group, LLC.
*   Shwe, H, Y. Wang, C. Chong, P, H, J. Kumar, A. September 2013\. Robust Cubic-Based 3-D Localization for Wireless Sensor Networks. wireless sensor network, vol. 5, no. 9, hal. 169-179\. [www.scirp.org](www.scirp.org). Diakses: 12 Oktober 2013
*   Wiasta, I, M. 2012\. “Performasi Platform Imote2 pada Jaringan Sensor Nirkabel” (Laporan Tugas Akhir). Denpasar : Jurusan Teknik Elektro, Universitas Udayana.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkab-xejgrxv?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkab-xejgrxv?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/06/tugas-akhir-fajar-purnama](https://0fajarpurnama0.github.io/bachelor/2020/11/06/tugas-akhir-fajar-purnama)
*   [https://0fajarpurnama0.medium.com/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-7f1718fcc84f](https://0fajarpurnama0.medium.com/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-7f1718fcc84f)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-akhir-fajar-purnama](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-akhir-fajar-purnama)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/simulasi-konfigurasi-jaringan-ict.html](https://0darkking0.blogspot.com/2020/11/simulasi-konfigurasi-jaringan-ict.html)
*   [https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/91-transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/91-transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux)
*   [https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802154-zigbee-embedded-linux](http://0fajarpurnama0.weebly.com/blog/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802154-zigbee-embedded-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802-15)
*   [https://read.cash/@FajarPurnama/transmisi-citra-jaringan-sensor-visual-nirkabel-platform-imote2-ieee-802154-zigbee-embedded-linux-5faee071](https://read.cash/@FajarPurnama/transmisi-citra-jaringan-sensor-visual-nirkabel-platform-imote2-ieee-802154-zigbee-embedded-linux-5faee071)