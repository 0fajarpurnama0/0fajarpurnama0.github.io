---
layout: post
title: Denial of Service (DOS) Pada Wifi Menggunakan CommView Windows
categories: pentest
tags: [Windows, DOS, denial of service, wifi, CommView]
featuredimage: https://images.hive.blog/DQmcBqNKg3bKHbcT3Hki5yrwoRq1ZGd7pWSxngU3eLp4aVH/Figure%2013.%20Accesspoint%20sends%20a%20lot%20of%20responses.jpg
description: DOS mencegah pengguna lain beraktivitas di jaringan. Di sini saya akan mendemonstrasikan DOS pada wifi menggunakan CommView for WiFi di Windows.
canonicalurl: https://0fajarpurnama0.github.io/pentest/2020/04/09/dos-using-commview-windows
---

DOS menurut saya adalah hacking yang menghalangi user lain untuk beraktifitas pada jaringan. Disini akan saya demonstrasikan DOS pada suatu wifi menggunakan CommView for WIFI di Windows.

## Mengunduh CommView

Download terlebih dahulu programnya dan install. Disarankan pada website pengembangnya [http://www.tamos.com](http://www.tamos.com).

![Figure 1. Downloading the CommView for Wifi 6.3 software.jpg](https://images.hive.blog/DQmf3iGWoFQU7eth3szNBwNt9movuDJvnAxJpPWUKmdvvdx/Figure%201.%20Downloading%20the%20CommView%20for%20Wifi%206.3%20software.jpg)

Gambar 1\. Mendownload software CommView for Wifi 6.3



## Installasi CommView

Langsung jalankan program yang baru didownload atau diekstra terlebih dahulu.

![Figure 2. Running Setup.exe CommView.jpg](https://images.hive.blog/DQmbBfJyX2tqNAHNfGeTguaRjppQbqLzm2nLL9JbgBjTvc8/Figure%202.%20Running%20Setup.exe%20CommView.jpg)

Gambar 2\. Menjalankan Setup.exe CommView



![Figure 3. Installing CommView, follow the command during installation.jpg](https://images.hive.blog/DQmUKu68HS1v4CoczB4nnauSSbpVDQTAgPpYLjbwzkmTXsB/Figure%203.%20Installing%20CommView,%20follow%20the%20command%20during%20installation.jpg)

Gambar 3\. Melakukan installasi CommView, ikuti perintah pada saat installasi.



Setelah install software anda perlu install driver dari commview yang sudah ada di packet installer (biasanya). Pillih Adapter wireless yang sesuai untuk anda. (jika tidak support, tidak bisa). Jika benar, pada device manager akan terlihat seperti berikut:

![Figure 4. There is the words commview on the wireless adapter.jpg](https://images.hive.blog/DQmZe5YQFM6xMwUB1DzubaLEapJkp6SiWUDeW2KwsunYRUv/Figure%204.%20There%20is%20the%20words%20commview%20on%20the%20wireless%20adapter.jpg)

Gambar 4\. Ada tulisan “commview” pada wireless adapter



## Memulai DOS pada suatu Wifi

![Figure 5. Display CommView, open commview for wifi.jpg](https://images.hive.blog/DQmdJQM5nSMkpBktxvamU9fqrVekS3o8qXwyKxS7RHw4g7z/Figure%205.%20Display%20CommView,%20open%20commview%20for%20wifi.jpg)

Gambar 5\. Tampilan CommView, buka commview for wifi (jangan connect ke suatu wifi terlebih dahulu).



![Figure 6. Select Channel 11 to capture packets.jpg](https://images.hive.blog/DQmYUqPXqxP1BixjtQpvEVmd2SioaPet1ehV5Hdkzmn3JJK/Figure%206.%20Select%20Channel%2011%20to%20capture%20packets.jpg)

Gambar 6\. Memilih Channel 11 untuk menangkap packet. Klik tombol “Start Capture” pada tab (terlihat seperti tombol “play”), klik tombol start scanning, setelah itu pilih channel (yang ada wifi yang anda ingin capture) untuk menangkap packet, lalu klik tombol capture.



![Figure 7. Open the packet generator.jpg](https://images.hive.blog/DQmdv7U8RFf8FtMhZRec5YNywvSK6eQ8By3thX3VVYSG2vy/Figure%207.%20Open%20the%20packet%20generator.jpg)

Gambar 7\. Membuka packet generator, klik tab packet untuk melihat, sambil menungu buka packet generator yang ada pada “tools > packet generator”.



![Figure 8. Pressing the show template button.jpg](https://images.hive.blog/DQmQPKdbTg4uZm6vZ6TjMgfUq2NkEzEXnQrsr4ngj3BEQMr/Figure%208.%20Pressing%20the%20show%20template%20button.jpg)

Gambar 8\. Menekan tombol show template, klik tombol “show template” yang terletak pada bagian kiri-bawah packet generator.



![Figure 9. Looking for a request packet.jpg](https://images.hive.blog/DQmdopETccSiQebBtvyJKmDk9iXvfZSUEJ7Gqk7H7T76tDA/Figure%209.%20Looking%20for%20a%20request%20packet.jpg)

Gambar 9\. Mencari paket request, cari packet “Request” yang ditujukan pada accesspoint. Disini packet saya bernama “MNGT\PROBE REQ”. Nama packet bias berbeda, saran saya cari yang bernama REQ dan coba-coba. Anda perlu pelajari bidang telekomunikasi untuk pengetahuan lebih lanjut.



![Figure 10. Drag to the packet generator template.jpg](https://images.hive.blog/DQmQReLbYQFKxCkBRif2w8kUDGScyUKmgNpxBspb4k7wmJ4/Figure%2010.%20Drag%20to%20the%20packet%20generator%20template.jpg)

Gambar 10\. Drag ke template packet generator, drag and drop (klik, tahan, taruh) di template. Saya ganti nama packetnya dengan klik kanan “rename”.



![Figure 11. Capture again, here I do stop capture.jpg](https://images.hive.blog/DQmUWBtYWvMLLepKq6296pBHgwVbBGdP8Nnrgy4rY177XJN/Figure%2011.%20Capture%20again,%20here%20I%20do%20stop%20capture.jpg)

Gambar 11\. Melakukan Capture kembali, disini saya lakukan “stop capture” agar mudah memilih packet. Selanjutnya anda akan mengirim packet ini ke layanan accesspoint anda. Disini saya ganti packet size menjadi 200 mengirim 3000 packet/second secara continuously. Agar bisa klik tombol “send” anda harus mulai “capture” kembali pada channel tersebut.



![Figure 12. Capturing the packet again on channel 11.jpg](https://images.hive.blog/DQmNmzwrKsGYvUxnzGURaVJMFJBFEX3PPGshdrgtRoTPt7G/Figure%2012.%20Capturing%20the%20packet%20again%20on%20channel%2011.jpg)

Gambar 12\. Melakukan capture packet kembali pada channel 11.



![Figure 13. Accesspoint sends a lot of responses.jpg](https://images.hive.blog/DQmcBqNKg3bKHbcT3Hki5yrwoRq1ZGd7pWSxngU3eLp4aVH/Figure%2013.%20Accesspoint%20sends%20a%20lot%20of%20responses.jpg)

Gambar 13\. Accesspoint mengirim banyak respon, jika anda benar maka anda akan menerima packet “Respon” yang sangat benyak dan terus menerus. Disini namanya “MNGT/PROBE RESP”. Saya lihat rekan-rekan bersama saya tidak dapat mengakses internet ataupun download.



## Opini

Menurut saya yang terjadi saya mengirim banyak “request” (permintaan) untuk mengakses network tersebut dan dibalas dengan “respond” (tanggapan). Karena accesspoint terlalu sibuk mengirim “respon” ke saya maka tidak sempat melakukan hal lain. Beban pada accesspoint menjadi sangan banyak bahkan terlalu banyak.

## Sumber

[WIRELESS HACKING, Efvy Zam.](https://www.goodreads.com/book/show/30254807-buku-sakti-wireless-hacking)

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-xrvvnl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-xrvvnl?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/09/dos-using-commview-windows](https://0fajarpurnama0.github.io/pentest/2020/04/09/dos-using-commview-windows)
*   [https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-745bad254de3](https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-745bad254de3)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-commview-windows.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-commview-windows.html)
*   [https://0fajarpurnama0.tumblr.com/post/614925923008069632/denial-of-service-dos-on-wifi-using-commview](https://0fajarpurnama0.tumblr.com/post/614925923008069632/denial-of-service-dos-on-wifi-using-commview)
*   [https://0darkking0.blogspot.com/2020/04/denial-of-service-wifi-commview-windows.html](https://0darkking0.blogspot.com/2020/04/denial-of-service-wifi-commview-windows.html)
*   [https://hive.blog/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama](https://hive.blog/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/30-denial-of-service-dos-on-wifi-using-commview-windows](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/30-denial-of-service-dos-on-wifi-using-commview-windows)
*   [https://steemit.com/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama](https://steemit.com/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-commview-windows](http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-commview-windows)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-commview-windows](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-commview-windows)
*   [http://www.teiii.cn/denial-of-service-dos-on-wifi-using-commview-windows](http://www.teiii.cn/denial-of-service-dos-on-wifi-using-commview-windows)