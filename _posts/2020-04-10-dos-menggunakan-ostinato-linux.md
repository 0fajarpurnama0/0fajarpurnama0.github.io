---
layout: post
title: Denial of Service (DOS) Pada Wifi Menggunakan Ostinato Linux
categories: pentest
tags: [Linux, DoS, denial of service, wifi, Ostinato]
---

Installasi software akan saya bikin halaman tersendiri.

Install Ostinato packet generator dan sekalian update: [http://software.opensuse.org/download.html?project=home:pstavirs:ostinato&package=ostinato](http://software.opensuse.org/download.html?project=home:pstavirs:ostinato&package=ostinato)

Saya menggunakan Ubuntu 12.04 LTS

_

sudo echo 'deb http://download.opensuse.org/repositories/home:pstavirs:ostinato/xUbuntu_12.04/ /' >> /etc/apt/sources.list

sudo apt-get update

sudo apt-get install ostinato

_

Install wifi-radar, airmon-ng atau aircrack, dan wireshark.

![https://file.army/i/BY26GDl](https://404store.com/2020/04/11/1Openwifi-radarandcheckthewifiyouwanttotest.png)

Buka wifi-radar dan cek wifi yang ingin anda test. Disini wifi saya sensor.



Agar wireless adapter dalam keadaan monitor:

_

sudo ifconfig wlan0 down

sudo iwconfig wlan0 mode monitor

sudo ifconfig wlan0 up

_

Jika Melakukan ini maka tidak bisa connect ke hotspot.Untuk mengembalikan seperti semula, lakukan yang diatas tetapi “sudo iwconfig wlan0 mode managed”.

![https://file.army/i/BY26lCs](https://404store.com/2020/04/11/2airmon-ngstartwlan0channel11.png)

Saya melakukan hal lain karena sekalian pingin internetan yaitu menggunakan airmon-ng. "sudo airmon-ng start wlan0 (channel)". Saya channel 11\. Terlihat dibikin virtual device yaitu mon0\. wlan0 tetap ada.



![https://file.army/i/BY26hYj](https://404store.com/2020/04/11/3Openwiresharksudowiresharkandopenthecaptureoption.png)

Buka wireshark "sudo wireshark" dan buka capture option pada tab.



![https://file.army/i/BY261hk](https://404store.com/2020/04/11/4Selectmon0orwlan0ifitismonitorandstart.png)

Pilih mon0 atau wlan0 jika dalam keadaan monitor dan start.



![https://file.army/i/BY26Msv](https://404store.com/2020/04/11/5PROBEREQUESTpackageshexstream.png)

Cari paket PROBE REQUEST atau sejenis pada jaringan lain. Klik kanan, copy, bytes, hexstream.



![https://file.army/i/BY26QjH](https://404store.com/2020/04/11/6ostinatosudoostinato.png)

Buka ostinato "sudo ostinato". Klik + pada port. Pilih mon0.



![https://file.army/i/BY26A6f](https://404store.com/2020/04/11/7interleavedstream.png)

File > port configuration > interleaved stream (agar mengirim paket secara continuously). Klik kanan pada layar kanan, add stream. Pilih gear untuk configuration (klik 2x). Pilih advance.



![https://file.army/i/BY26C3I](https://404store.com/2020/04/11/8Selecthexdump.png)

Pilih hexdump, taruh pada layar kanan di klik tombol di tengah.



![https://file.army/i/BY26pqV](https://404store.com/2020/04/11/900000packet.png)

Pilih protocol data pada tab. Untuk copy paste packet dari wireshark tekan “ctrl v”. Tambahkan 00000... hingga besar paket sesuai keinginan anda.



![https://file.army/i/BY26Fxp](https://404store.com/2020/04/11/10streamcontrolpacketpersecond.png)

Pilih stream control dan per besar pengiriman paket/sec (saya 3000). Klik tombol ok dan jika ada apa-apa “yes”, setelah itu klik apply.



![https://file.army/i/BY26dpK](https://404store.com/2020/04/11/11selectportclickstarttx.png)

Pilih port yang akan anda melakukan pengiriman (saya port 2, silahkan coba-coba) dan klik start tx (tombol play).



![https://file.army/i/BY26fDD](https://404store.com/2020/04/11/12wiresharkmanypacketrequestsandresponses.png)

Jika benar pada wireshark akan terlihan banyak packet Request dan Response. User yang lain akan melihat “limited access” alias “!” pada wirelessnya.



## Sumber

[WIRELESS HACKING, Efvy Zam.](https://www.goodreads.com/book/show/30254807-buku-sakti-wireless-hacking)

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-xgekmk?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-xgekmk?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux](https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux)
*   [https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-218796aedb83](https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-218796aedb83)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-ostinato-linux.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-ostinato-linux.html)
*   [https://0fajarpurnama0.tumblr.com/post/615024546759770112/denial-of-service-dos-on-wifi-using-ostinato](https://0fajarpurnama0.tumblr.com/post/615024546759770112/denial-of-service-dos-on-wifi-using-ostinato)
*   [https://0darkking0.blogspot.com/2020/04/dos-wifi-ostinato-llinux.html](https://0darkking0.blogspot.com/2020/04/dos-wifi-ostinato-llinux.html)
*   [https://hive.blog/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama](https://hive.blog/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/31-denial-of-service-dos-on-wifi-using-ostinato-linux](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/31-denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [https://steemit.com/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama](https://steemit.com/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-ostinato-linux](http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-ostinato-linux](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [http://www.teiii.cn/denial-of-service-dos-on-wifi-using-ostinato-linux](http://www.teiii.cn/denial-of-service-dos-on-wifi-using-ostinato-linux)