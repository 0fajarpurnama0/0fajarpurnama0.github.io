---
layout: post
title: Denial of Service (DOS) Pada Wifi Menggunakan CommView Windows
categories: pentest
tags: [Windows, DOS, denial of service, wifi, CommView]
---

DOS menurut saya adalah hacking yang menghalangi user lain untuk beraktifitas pada jaringan. Disini akan saya demonstrasikan DOS pada suatu wifi menggunakan CommView for WIFI di Windows.

## Mengunduh CommView

Download terlebih dahulu programnya dan install. Disarankan pada website pengembangnya [http://www.tamos.com](http://www.tamos.com).

![https://file.army/i/BYnOxE9](https://404store.com/2020/04/09/Figure1.DownloadingtheCommViewforWifi6.3software.jpg)

Gambar 1\. Mendownload software CommView for Wifi 6.3



## Installasi CommView

Langsung jalankan program yang baru didownload atau diekstra terlebih dahulu.

![https://file.army/i/BYnORyL](https://404store.com/2020/04/09/Figure2.RunningSetup.exeCommView.jpg)

Gambar 2\. Menjalankan Setup.exe CommView



![https://file.army/i/BYnOI3o](https://404store.com/2020/04/09/Figure3.InstallingCommViewfollowthecommandduringinstallation.jpg)

Gambar 3\. Melakukan installasi CommView, ikuti perintah pada saat installasi.



Setelah install software anda perlu install driver dari commview yang sudah ada di packet installer (biasanya). Pillih Adapter wireless yang sesuai untuk anda. (jika tidak support, tidak bisa). Jika benar, pada device manager akan terlihat seperti berikut:

![https://file.army/i/BYnOStE](https://404store.com/2020/04/09/Figure4.Thereisthewordscommviewonthewirelessadapter.jpg)

Gambar 4\. Ada tulisan “commview” pada wireless adapter



## Memulai DOS pada suatu Wifi

![https://file.army/i/BYnOuxU](https://404store.com/2020/04/09/Figure5.DisplayCommViewopencommviewforwifi.jpg)

Gambar 5\. Tampilan CommView, buka commview for wifi (jangan connect ke suatu wifi terlebih dahulu).



![https://file.army/i/BYnOvp3](https://404store.com/2020/04/09/Figure6.SelectChannel11tocapturepackets.jpg)

Gambar 6\. Memilih Channel 11 untuk menangkap packet. Klik tombol “Start Capture” pada tab (terlihat seperti tombol “play”), klik tombol start scanning, setelah itu pilih channel (yang ada wifi yang anda ingin capture) untuk menangkap packet, lalu klik tombol capture.



![https://file.army/i/BYnO6cZ](https://404store.com/2020/04/09/Figure7.Openthepacketgenerator.jpg)

Gambar 7\. Membuka packet generator, klik tab packet untuk melihat, sambil menungu buka packet generator yang ada pada “tools > packet generator”.



![https://file.army/i/BYnOOzq](https://404store.com/2020/04/09/Figure8.Pressingtheshowtemplatebutton.jpg)

Gambar 8\. Menekan tombol show template, klik tombol “show template” yang terletak pada bagian kiri-bawah packet generator.



![https://file.army/i/BYnOl1F](https://404store.com/2020/04/09/Figure9.Lookingforarequestpacket.jpg)

Gambar 9\. Mencari paket request, cari packet “Request” yang ditujukan pada accesspoint. Disini packet saya bernama “MNGT\PROBE REQ”. Nama packet bias berbeda, saran saya cari yang bernama REQ dan coba-coba. Anda perlu pelajari bidang telekomunikasi untuk pengetahuan lebih lanjut.



![https://file.army/i/BYnOGJe](https://404store.com/2020/04/09/Figure10.Dragtothepacketgeneratortemplate.jpg)

Gambar 10\. Drag ke template packet generator, drag and drop (klik, tahan, taruh) di template. Saya ganti nama packetnya dengan klik kanan “rename”.



![https://file.army/i/BYnOLy5](https://404store.com/2020/04/09/Figure11.CaptureagainhereIdostopcapture.jpg)

Gambar 11\. Melakukan Capture kembali, disini saya lakukan “stop capture” agar mudah memilih packet. Selanjutnya anda akan mengirim packet ini ke layanan accesspoint anda. Disini saya ganti packet size menjadi 200 mengirim 3000 packet/second secara continuously. Agar bisa klik tombol “send” anda harus mulai “capture” kembali pada channel tersebut.



![https://file.army/i/BYnO1EA](https://404store.com/2020/04/09/Figure12.Capturingthepacketagainonchannel11.jpg)

Gambar 12\. Melakukan capture packet kembali pada channel 11.



![https://file.army/i/BYnOMW4](https://404store.com/2020/04/09/Figure13.Accesspointsendsalotofresponses.jpg)

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