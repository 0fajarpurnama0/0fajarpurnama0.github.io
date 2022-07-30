---
layout: post
title: Melewati Sensor dengan Proxy
categories: internet
tags: [proxy, squid, Windows 7, Linux, Android, Server, Kali, anti sensor]
featuredimage: https://cdn.steemitimages.com/DQmSY1WG1zAcg4T1iK2qKbD76hwSeLqZs17QouwJAvysUuv/Figure%200.%20animation%20of%20how%20I%20see%20proxy%20works.gif
description: Daripada langsung ke alamat tujuan, paket akan pergi ke server proxy dan diproses di sana sebelum pergi ke tujuan
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy
---

![https://file.army/i/BYVdWMZ](https://cdn.steemitimages.com/DQmSY1WG1zAcg4T1iK2qKbD76hwSeLqZs17QouwJAvysUuv/Figure%200.%20animation%20of%20how%20I%20see%20proxy%20works.gif)

Figure 0\. animasi cara kerja proxy.



## Deskripsi

Daripada langsung menuju ke alamat tujuan paket-paket berbalik ke server proxy dan diproses di sana sebelum pergi ke tujuan semula. Saya menggunakannya karena koneksi di negara saya di sini tidak memungkinkan kontak langsung dengan situs tertentu, singkatnya, diblokir atau disensor. Tentu saja tidak akan berfungsi juga jika tujuan diblokir oleh server proxy atau ke server proxy itu sendiri diblokir.

## Meminjam Proxy Web

Meminjam proxy web adalah langkah mudah berikutnya untuk mengubah DNS. Pada bagian ini diposting bukan hal teknis tetapi memperkenalkan proxy web yang tersedia di web. Berikut adalah langkah-langkah contoh proxy web atau lewati dan melangkah lebih jauh di bawah ini untuk menonton video.

![https://file.army/i/BYVd343](https://cdn.steemitimages.com/DQmcizbjnzgpmsRGh4RzK4unjNfXrsnY3vmAiR9dWpPcSSu/Figure%201.%20Open%20browser%20then%20search%20engine.png)

Gambar 1\. Dengan internet connection terbuka pada browser dan buka search engine, disini menggunakan Google.



![https://file.army/i/BYVdkJq](https://cdn.steemitimages.com/DQmQrjSJwX1b6P8pS38d7yooFYJXhhE1Tf2YojTkRcSXd7p/Figure%202.%20Type%20web%20proxy%20or%20something%20similar%20in%20the%20search%20bar.png)

Gambar 2\. Ketikkan proxy web atau yang serupa di search engine.



![https://file.army/i/BYVdo9F](https://cdn.steemitimages.com/DQmbcNZhM7d4N1YcwgMXBKcx6UXLjzfF8HogPorDFbJE556/Figure%203.%20Pick%20one%20site%20that%20offers%20use%20of%20web%20proxy.png)

Gambar 3\. Pilih satu situs yang menawarkan penggunaan proxy web misalnya [freeproxy](https://freeproxy.win/).



![https://file.army/i/BYVdrOe](https://cdn.steemitimages.com/DQmYJ3XFcukveBxZPG8qjez62F9ELpXCSyPpSkvNtHq1u5p/Figure%204.%20Type%20the%20site%20you%20want%20to%20go%20to.png)

Gambar 4\. Ketikkan situs yang ingin Anda kunjungi.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/borrow-web-proxy-example/9d82e2dd7d1810d5c1db94086aa1d8dff1360241" allowfullscreen=""></iframe></div>

## Meminjam Network Proxy

Sementara proxy web di-host di halaman web sebagai antarmuka, proxy jaringan biasanya dalam bentuk alamat IP dan port. Anda perlu menemukan konfigurasi proxy Anda di browser atau sistem operasi Anda untuk memasukkan alamat IP dan porta proksi. Di bawah ini adalah contoh di Windows:

![https://file.army/i/BYVdsW5](https://cdn.steemitimages.com/DQmepGbbnXmNLRajNmnrXWsQxYv6G79NqUFTBEn77o83wyh/Figure%205.%20Open%20your%20browser%20and%20search%20for%20proxy%20list%20in%20search%20engine.png)

Gambar 5\. Buka browser Anda dan cari daftar proxy di mesin pencari.



![https://file.army/i/BYVdJHA](https://cdn.steemitimages.com/DQmU9YKbnJx6MN3wBDKZU9d5yzdA2Kz1qYBEWJV3QkpATRS/Figure%206.%20Pick%20one%20site%20that%20offers%20use%20of%20web%20proxy%20for%20example.png)

Gambar 6\. Pilih satu situs yang menawarkan penggunaan proxy web misalnya [hidemyname](https://hidemy.name/en/proxy-list/).



![https://file.army/i/BYVdbS4](https://cdn.steemitimages.com/DQmaGLYyrqHAd6XrpvT2xXpTaFuWFB3xANG5zWerTa9zuxM/Figure%207.%20Pick%20one%20server%20(it's%20IP%20address%20and%20port),%20not%20all%20might%20work%20so%20you%20may%20have%20to%20try%20one%20by%20one.png)

Gambar 7\. Pilih satu server (ini alamat IP dan port), tidak semua mungkin bekerja sehingga Anda mungkin harus mencoba satu per satu.



![https://file.army/i/BYV0AbQ](https://cdn.steemitimages.com/DQmXXxt4HYvb8qdNNpaevnkAkEpHn1rKBRCKh3Jukyt1YCA/Figure%208.%20firefox%20proxy%20configuration%20menu.png)

Gambar 8\. Di sini saya atur di Koneksi Internet global saya. Pastikan untuk mengatur browser Anda menggunakan "system settings" di suatu tempat di sekitar > "option" > "network" > "setting" di bawah connection, di sini juga jika Anda ingin menggunakan server proxy untuk browser saja.



![https://file.army/i/BYVdn0n](https://cdn.steemitimages.com/DQmPTyRy479ZPGjRNrUDYrQQeEvKM7PNxTU68hsKXB2rrHe/Figure%209.%20Network%20and%20sharing%20center.png)

Gambar 9\. Untuk menggunakannya secara global, masuk ke "network and sharing center" (ikuti tutorial saya sebelumnya jika Anda tidak dapat menemukannya)> internet option" > "connections" > "LAN Setting" > "use proxy server", lalu masukkan alamat IP dan porta. Anda dapat memajukan fitur lainnya.



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

![https://file.army/i/BYVd251](https://cdn.steemitimages.com/DQmdZiCVPPvWW7HM2Nk5x4oipNGVx499ZZYFQwFc9uPLUpf/Figure%2010.%20find%20your%20network%20manager%20from%20widget.jpg)

Gambar 10\. menemukan network manager Anda dari widget.



![https://file.army/i/BYVdc87](https://cdn.steemitimages.com/DQmPcyHxCXXWfvnxFFxU36mzfRSucwykFTcpijvw9LjJUiZ/Figure%2011.%20or%20find%20network%20manager%20from%20settings%20and%20press%20gear%20on%20desired%20profile.jpg';" alt="https://file.army/i/BYVdc87)

Gambar 11\. atau temukan network manager dari pengaturan dan tekan persneling pada profil yang diinginkan.



![https://file.army/i/BYVd5Ms](https://cdn.steemitimages.com/DQmZmvB84znvGaoe8mrZa6nC2SwDfdjw8H7Vjsr4MnjBCxo/Figure%2012.%20choose%20manual%20network%20proxy%20and%20put%20the%20ip%20address%20and%20port.jpg)

Gambar 12\. pilih manual network proxy dan masukan ip address dan port.



<div class="video-container"><iframe src="https://youtube.com/embed/sfBng2IKTsw" allowfullscreen=""></iframe></div>

Jika Anda ingin melakukannya dari terminal, lalu tulis yang berikut ini di "/etc/environment":

<pre>http_proxy="http://<username>:<password>@<hostname>:<port>/"
https_proxy="http://<username>:<password>@<hostname>:<port>/"
ftp_proxy="http://<username>:<password>@<hostname>:<port>/"
no_proxy="localhost,127.0.0.1,::1"</port> </hostname></password></username></port></hostname></password></username></port></hostname></password></username></pre>

## Pengaturan Proxy di Android

![https://file.army/i/BYVdNal](https://cdn.steemitimages.com/DQmQjQ8DyrbPwGKHZNSz5siQRyySkzJ5ZTLx6nFycBc1i6y/Figure%2013.%20open%20settings.jpg)

Gambar 13\. buka settings.



![https://file.army/i/BYVdg9j](https://cdn.steemitimages.com/DQmWp7DxjVPwzV4AxojU2F7jA63fGx9VqjqjNFbr7NZQyZV/Figure%2014.%20choose%20connections.jpg)

Gambar 14\. pilih connections.



![https://file.army/i/BYVdqOk](https://cdn.steemitimages.com/DQmadnbDLbHzeicwPwFLgK565kLVGepWCng7V1Df3QQ4WmZ/Figure%2015.%20choose%20wifi%20or%20mobile%20network.jpg)

Gambar 15\. pilih wifi atau mobile network.



![https://file.army/i/BYVdtkv](https://cdn.steemitimages.com/DQmbkw2JoUmyJaYoc8XKF653aNvm2nwq1pW3EKudmAnZa25/Figure%2016.%20if%20you%20choose%20wifi%20then%20long%20press%20one%20of%20the%20hotspot%20then%20choose%20manage%20network%20settings.jpg)

Gambar 16\. jika Anda memilih wifi lalu tekan lama salah satu hotspot lalu pilih manage network settings.



![https://file.army/i/BYVdHHH](https://cdn.steemitimages.com/DQmbMcPFQJhkWPvsqw5NwqZbarJntWF1gaBCuzmZoWjgHXV/Figure%2017.%20choose%20advance.jpg)

Gambar 17\. pilih advance.



![https://file.army/i/BYVdUSf](https://cdn.steemitimages.com/DQmPP2nitUW3UiPDP9ixmNzUmvb1P1nbM6bE8eWhG5DwU5y/Figure%2018.%20choose%20static%20then%20set%20proxy.jpg)

Gambar 18\. pilih static lalu set proxy.



![https://file.army/i/BYVdiFI](https://cdn.steemitimages.com/DQmfH5CK17YUaQs481TuMVF637kcR89kc3CjEA5vAWF2gxu/Figure%2019.%20if%20you%20mobile%20network%20then%20go%20to%20access%20point.jpg)

Gambar 19\. jika memilih mobile network maka pilih access point.



![https://file.army/i/BYVdj5V](https://cdn.steemitimages.com/DQmeNAFF7JpGwAdypuPMFg6PvdqjqUfx62MJ97NtHyjbTte/Figure%2020.%20choose%20or%20make%20your%20profile.jpg)

Gambar 20\. pilih atau bikin profil.



![https://file.army/i/BYVf98p](https://cdn.steemitimages.com/DQmWUqMBehfNdmna5AAY4P6bZKBLBmL7e6KRqNUFTJfykom/Figure%2021.%20find%20and%20set%20proxy.jpg)

Gambar 21\. cari dan atur proxy.



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