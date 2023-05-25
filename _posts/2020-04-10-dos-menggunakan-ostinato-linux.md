---
layout: post
title: Denial of Service (DOS) Pada Wifi Menggunakan Ostinato Linux
categories: pentest
tags: [Linux, DoS, denial of service, wifi, Ostinato]
featuredimage: https://cdn.steemitimages.com/DQmTCXtmsgqUxzoto5jKSK6jWt34AoAC9FP4e8Kv3hubSja/12%20wireshark%20many%20packet%20requests%20and%20responses.png
description: Tidak ada CommView di Linux untuk melakukan DoS. Namun, saya menemukan perangkat lunak serupa yang disebut Ostinato dan dapat Dos.
canonicalurl: https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux
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

![https://file.army/i/BY26GDl](https://cdn.steemitimages.com/DQmfWgeFM6uXmyvdCwb37taBzbqiKP3Pot1ZYjG8u4cftba/1%20Open%20wifi-radar%20and%20check%20the%20wifi%20you%20want%20to%20test.png)

Buka wifi-radar dan cek wifi yang ingin anda test. Disini wifi saya sensor.



Agar wireless adapter dalam keadaan monitor:

_

sudo ifconfig wlan0 down

sudo iwconfig wlan0 mode monitor

sudo ifconfig wlan0 up

_

Jika Melakukan ini maka tidak bisa connect ke hotspot.Untuk mengembalikan seperti semula, lakukan yang diatas tetapi “sudo iwconfig wlan0 mode managed”.

![https://file.army/i/BY26lCs](https://cdn.steemitimages.com/DQmYxxXLGmKeXH6K9Y3YM2W1Nb371NsELFBxrP71ZQBWN6k/2%20airmon-ng%20start%20wlan0%20channel%2011.png)

Saya melakukan hal lain karena sekalian pingin internetan yaitu menggunakan airmon-ng. "sudo airmon-ng start wlan0 (channel)". Saya channel 11\. Terlihat dibikin virtual device yaitu mon0\. wlan0 tetap ada.



![https://file.army/i/BY26hYj](https://cdn.steemitimages.com/DQmbh4zMxRNpxpKbpBPsKRr6ZT6ZYuXLgG5HMQj2jp6CS8y/3%20Open%20wireshark%20sudo%20wireshark%20and%20open%20the%20capture%20option.png)

Buka wireshark "sudo wireshark" dan buka capture option pada tab.



![https://file.army/i/BY261hk](https://cdn.steemitimages.com/DQmY9CNzHafuLFViAiStujkqzpytZVt9g6g345NHmvvFM5J/4%20Select%20mon0%20or%20wlan0%20if%20it%20is%20monitor%20and%20start.png)

Pilih mon0 atau wlan0 jika dalam keadaan monitor dan start.



![https://file.army/i/BY26Msv](https://cdn.steemitimages.com/DQmYhNauAPHBPthSaxGhuiyJRzcvZENrpU4KeSeMSZx55yG/5%20PROBE%20REQUEST%20packages%20hex%20stream.png)

Cari paket PROBE REQUEST atau sejenis pada jaringan lain. Klik kanan, copy, bytes, hexstream.



![https://file.army/i/BY26QjH](https://cdn.steemitimages.com/DQmX1n4M3s4hvGeTLVfm5t1i8cwGxby3dbapNe1ACfNe2MS/6%20ostinato%20sudo%20ostinato.png)

Buka ostinato "sudo ostinato". Klik + pada port. Pilih mon0.



![https://file.army/i/BY26A6f](https://cdn.steemitimages.com/DQmerhq9AQ9bNzYG7DZr9pp2v7FnFsCJAuFAGmbdrGLDwTP/7%20interleaved%20stream.png)

File > port configuration > interleaved stream (agar mengirim paket secara continuously). Klik kanan pada layar kanan, add stream. Pilih gear untuk configuration (klik 2x). Pilih advance.



![https://file.army/i/BY26C3I](https://cdn.steemitimages.com/DQmT2qrQTrvfrirKdqohpjNRkU77igD5CZ6vVTeNZUoYsKg/8%20Select%20hexdump.png)

Pilih hexdump, taruh pada layar kanan di klik tombol di tengah.



![https://file.army/i/BY26pqV](https://cdn.steemitimages.com/DQmNwbVJv1rFkoQaACfbp8nfbSws7SXTru8dtbbpde8ZSFn/9%2000000%20packet.png)

Pilih protocol data pada tab. Untuk copy paste packet dari wireshark tekan “ctrl v”. Tambahkan 00000... hingga besar paket sesuai keinginan anda.



![https://file.army/i/BY26Fxp](https://cdn.steemitimages.com/DQmVGKnA38ABSuvebrGuQztYcgMVnqAJrV4eBLuj4p3aGv2/10%20stream%20control%20packet%20per%20second.png)

Pilih stream control dan per besar pengiriman paket/sec (saya 3000). Klik tombol ok dan jika ada apa-apa “yes”, setelah itu klik apply.



![https://file.army/i/BY26dpK](https://cdn.steemitimages.com/DQmPrYDx8JRVdmy1MwY8WZX98ucabs1ejhbai2stfeM6r3T/11%20select%20port%20click%20start%20tx.png)

Pilih port yang akan anda melakukan pengiriman (saya port 2, silahkan coba-coba) dan klik start tx (tombol play).



![https://file.army/i/BY26fDD](https://cdn.steemitimages.com/DQmTCXtmsgqUxzoto5jKSK6jWt34AoAC9FP4e8Kv3hubSja/12%20wireshark%20many%20packet%20requests%20and%20responses.png)

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