---
layout: post
title: Melewati Sensor dengan Proxy
categories: internet
tags: [proxy, squid, Windows 7, Linux, Android, Server, Kali, anti sensor]
featuredimage: https://cdn.steemitimages.com/DQmSY1WG1zAcg4T1iK2qKbD76hwSeLqZs17QouwJAvysUuv/Figure%200.%20animation%20of%20how%20I%20see%20proxy%20works.gif
description: Daripada langsung ke alamat tujuan, paket akan pergi ke server proxy dan diproses di sana sebelum pergi ke tujuan
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy
---

<figure>![https://file.army/i/BYVdWMZ](https://404store.com/2020/04/19/Figure0.animationofhowIseeproxyworks.gif)

<figcaption>Figure 0\. animasi cara kerja proxy.</figcaption>

</figure>

## Deskripsi

Daripada langsung menuju ke alamat tujuan paket-paket berbalik ke server proxy dan diproses di sana sebelum pergi ke tujuan semula. Saya menggunakannya karena koneksi di negara saya di sini tidak memungkinkan kontak langsung dengan situs tertentu, singkatnya, diblokir atau disensor. Tentu saja tidak akan berfungsi juga jika tujuan diblokir oleh server proxy atau ke server proxy itu sendiri diblokir.

## Meminjam Proxy Web

Meminjam proxy web adalah langkah mudah berikutnya untuk mengubah DNS. Pada bagian ini diposting bukan hal teknis tetapi memperkenalkan proxy web yang tersedia di web. Berikut adalah langkah-langkah contoh proxy web atau lewati dan melangkah lebih jauh di bawah ini untuk menonton video.

<figure>![https://file.army/i/BYVd343](https://404store.com/2020/04/19/Figure1.Openbrowserthensearchengine.png)

<figcaption>Gambar 1\. Dengan internet connection terbuka pada browser dan buka search engine, disini menggunakan Google.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdkJq](https://404store.com/2020/04/19/Figure2.Typewebproxyorsomethingsimilarinthesearchbar.png)

<figcaption>Gambar 2\. Ketikkan proxy web atau yang serupa di search engine.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdo9F](https://404store.com/2020/04/19/Figure3.Pickonesitethatoffersuseofwebproxy.png)

<figcaption>Gambar 3\. Pilih satu situs yang menawarkan penggunaan proxy web misalnya [freeproxy](https://freeproxy.win/).</figcaption>

</figure>

<figure>![https://file.army/i/BYVdrOe](https://404store.com/2020/04/19/Figure4.Typethesiteyouwanttogoto.png)

<figcaption>Gambar 4\. Ketikkan situs yang ingin Anda kunjungi.</figcaption>

</figure>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/borrow-web-proxy-example/9d82e2dd7d1810d5c1db94086aa1d8dff1360241" allowfullscreen=""></iframe></div>

## Meminjam Network Proxy

Sementara proxy web di-host di halaman web sebagai antarmuka, proxy jaringan biasanya dalam bentuk alamat IP dan port. Anda perlu menemukan konfigurasi proxy Anda di browser atau sistem operasi Anda untuk memasukkan alamat IP dan porta proksi. Di bawah ini adalah contoh di Windows:

<figure>![https://file.army/i/BYVdsW5](https://404store.com/2020/04/19/Figure5.Openyourbrowserandsearchforproxylistinsearchengine.png)

<figcaption>Gambar 5\. Buka browser Anda dan cari daftar proxy di mesin pencari.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdJHA](https://404store.com/2020/04/19/Figure6.Pickonesitethatoffersuseofwebproxyforexample.png)

<figcaption>Gambar 6\. Pilih satu situs yang menawarkan penggunaan proxy web misalnya [hidemyname](https://hidemy.name/en/proxy-list/).</figcaption>

</figure>

<figure>![https://file.army/i/BYVdbS4](https://404store.com/2020/04/19/Figure7.PickoneserveritsIPaddressandportnotallmightworksoyoumayhavetotryonebyone.png)

<figcaption>Gambar 7\. Pilih satu server (ini alamat IP dan port), tidak semua mungkin bekerja sehingga Anda mungkin harus mencoba satu per satu.</figcaption>

</figure>

<figure>![https://file.army/i/BYV0AbQ](https://404store.com/2020/04/19/Figure8.firefoxproxyconfigurationmenu.png)

<figcaption>Gambar 8\. Di sini saya atur di Koneksi Internet global saya. Pastikan untuk mengatur browser Anda menggunakan "system settings" di suatu tempat di sekitar > "option" > "network" > "setting" di bawah connection, di sini juga jika Anda ingin menggunakan server proxy untuk browser saja.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdn0n](https://404store.com/2020/04/19/Figure9.Networkandsharingcenter.png)

<figcaption>Gambar 9\. Untuk menggunakannya secara global, masuk ke "network and sharing center" (ikuti tutorial saya sebelumnya jika Anda tidak dapat menemukannya)> internet option" > "connections" > "LAN Setting" > "use proxy server", lalu masukkan alamat IP dan porta. Anda dapat memajukan fitur lainnya.</figcaption>

</figure>

Jika Anda ingin mengaturnya melalui baris perintah (cmd) maka cobalah perintah berikut:

<pre>set HTTP_PROXY=http://proxy_userid:proxy_password@proxy_ip:proxy_port
set FTP_PROXY=%HTTP_PROXY%
set HTTPS_PROXY=%HTTP_PROXY%
</pre>

Kosongkan jika Anda ingin berhenti menggunakan proxy:

<pre>set HTTP_PROXY=
set FTP_PROXY=
set HTTPS_PROXY=
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/borrowing-proxy/4fd1d7e2f7b1d4ca6daf4e4827949670c5448fa8" allowfullscreen=""></iframe></div>

## Mengatur Proxy di Linux

<div class="video-container"><iframe src="https://youtube.com/embed/i-mgniYxPpw" allowfullscreen=""></iframe></div>

<figure>![https://file.army/i/BYVd251](https://404store.com/2020/04/19/Figure10.findyournetworkmanagerfromwidget.jpg)

<figcaption>Gambar 10\. menemukan network manager Anda dari widget.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdc87](https://404store.com/2020/04/19/Figure11.orfindnetworkmanagerfromsettingsandpressgearondesiredprofile.jpg)

<figcaption>Gambar 11\. atau temukan network manager dari pengaturan dan tekan persneling pada profil yang diinginkan.</figcaption>

</figure>

<figure>![https://file.army/i/BYVd5Ms](https://404store.com/2020/04/19/Figure12.choosemanualnetworkproxyandputtheipaddressandport.jpg)

<figcaption>Gambar 12\. pilih manual network proxy dan masukan ip address dan port.</figcaption>

</figure>

<div class="video-container"><iframe src="https://youtube.com/embed/sfBng2IKTsw" allowfullscreen=""></iframe></div>

Jika Anda ingin melakukannya dari terminal, lalu tulis yang berikut ini di "/etc/environment":

<pre>http_proxy="http://<username>:<password>@<hostname>:<port>/"
https_proxy="http://<username>:<password>@<hostname>:<port>/"
ftp_proxy="http://<username>:<password>@<hostname>:<port>/"
no_proxy="localhost,127.0.0.1,::1"</port> </hostname></password></username></port></hostname></password></username></port></hostname></password></username></pre>

## Pengaturan Proxy di Android

<figure>![https://file.army/i/BYVdNal](https://404store.com/2020/04/19/Figure13.opensettings.jpg)

<figcaption>Gambar 13\. buka settings.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdg9j](https://404store.com/2020/04/19/Figure14.chooseconnections.jpg)

<figcaption>Gambar 14\. pilih connections.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdqOk](https://404store.com/2020/04/19/Figure15.choosewifiormobilenetwork.jpg)

<figcaption>Gambar 15\. pilih wifi atau mobile network.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdtkv](https://404store.com/2020/04/19/Figure16.ifyouchoosewifithenlongpressoneofthehotspotthenchoosemanagenetworksettings.jpg)

<figcaption>Gambar 16\. jika Anda memilih wifi lalu tekan lama salah satu hotspot lalu pilih manage network settings.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdHHH](https://404store.com/2020/04/19/Figure17.chooseadvance.jpg)

<figcaption>Gambar 17\. pilih advance.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdUSf](https://404store.com/2020/04/19/Figure18.choosestaticthensetproxy.jpg)

<figcaption>Gambar 18\. pilih static lalu set proxy.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdiFI](https://404store.com/2020/04/19/Figure19.ifyoumobilenetworkthengotoaccesspoint.jpg)

<figcaption>Gambar 19\. jika memilih mobile network maka pilih access point.</figcaption>

</figure>

<figure>![https://file.army/i/BYVdj5V](https://404store.com/2020/04/19/Figure20.chooseormakeyourprofile.jpg)

<figcaption>Gambar 20\. pilih atau bikin profil.</figcaption>

</figure>

<figure>![https://file.army/i/BYVf98p](https://404store.com/2020/04/19/Figure21.findandsetproxy.jpg)

<figcaption>Gambar 21\. cari dan atur proxy.</figcaption>

</figure>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypassing-censorship-through-my-setup/453274f03aa85947a81b533d0be0fd280750901d" allowfullscreen=""></iframe></div>

## Membangun Proxy Server Linux

Saya menggunakan "squid" sebagai server proxy saya di Debian Linux. Instal server squid:

<pre>sudo apt install squid
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.original
</pre>

edit "/etc/squid/squid.conf".

Basic setup:

*   http_port
*   acl
*   http_access

authenticated setup:

<pre>auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid3/passwords
auth_param basic realm proxy
acl authenticated proxy_auth REQUIRED
http_access allow authenticated
</pre>

Restart squid server:

<pre>sudo htpasswd -c /etc/squid3/passwords username_you_like
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/installing-basic-squid-proxy-server/c60dd1bf44ac01f0748e2d3f4b4240d26ad6a20d" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-proxy-xdeljy?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-proxy-xdeljy?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy](https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-proxy-6ef482ec5d33](https://medium.com/@0fajarpurnama0/bypass-censorship-by-proxy-6ef482ec5d33)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-proxy](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-proxy)
*   [https://0fajarpurnama0.tumblr.com/post/615753022649352192/bypass-censorship-by-proxy](https://0fajarpurnama0.tumblr.com/post/615753022649352192/bypass-censorship-by-proxy)
*   [https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-web-proxy.html](https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-web-proxy.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/35-bypass-censorship-by-proxy](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/35-bypass-censorship-by-proxy)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-proxy](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-proxy)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-proxy](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-proxy)
*   [http://www.teiii.cn/bypass-censorship-by-proxy](http://www.teiii.cn/bypass-censorship-by-proxy)