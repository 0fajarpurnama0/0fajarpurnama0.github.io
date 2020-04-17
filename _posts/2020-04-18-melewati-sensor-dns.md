---
layout: post
title: Melewati Sensor dengan DNS
categories: misc
tags: [DNS, domain name service, Windows 7, Linux, Android, Server, Kali, anti sensor]
---

## Gambaran Umum

Mengubah server nama domain (DNS) adalah salah satu cara termudah. Jika pembatasan konten oleh DNS, kita hanya perlu menggunakan DNS lain, jika tidak maka metode ini tidak dapat digunakan. Mengubah DNS pada klien juga termasuk yang paling mendasar karena ada banyak server DNS terbuka di luar sana dibandingkan dengan proxy dan server VPN. Banyak pengguna menggunakan server DNS Google "8.8.8.8" untuk memotong sensor atau kadang-kadang, hanya lebih cepat. Alasan lain adalah, jika sensor Anda hanya berasal dari DNS, akan jauh lebih mudah untuk mengubah pengaturan DNS Anda, seperti pengaturan proxy dan VPN, dan dalam beberapa kasus, bahkan jika Anda menetapkan proxy dan VPN, kadang-kadang itu tidak berfungsi jika sensor berasal dari DNS.

Di sini DNS akan diperkenalkan di tingkat publik dengan kata lain istilah sederhana. Informasi lebih lanjut dapat ditemukan di artikel saya [Pengantar Sederhana untuk Jaringan Komputer](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/simple-introduction-to-computer-network.html) dan istilah teknis akan datang. Untuk mempersingkat, kami menjelajah web terutama menggunakan alamat domain misalnya "www.facebook.com", tetapi mesin kami sendiri lebih memilih alamat protokol internet (IP) yang masih versi 4 dari IP "173.252.74.22". Saat kami menulis, DNS menerjemahkannya dari "www.facebook.com"> "173.252.74.22".

![https://file.army/i/BYNanXL](https://404store.com/2020/04/18/Figure1.SimpleAnimationofDNS.gif)

Gambar 1\. Animasi sederhana mengenai DNS



## Mengatur DNS Windows

<div class="video-container"><iframe src="https://lbry.tv/$/embed/change-dns-windows/ba5f57c70b89a49a65ab55d04912f96bb48becf5" allowfullscreen=""></iframe></div>

![https://file.army/i/BYNabKa](https://404store.com/2020/04/18/Figure2.gotostartmenuandchoosecontrolpanel.jpg)

Gambar 2\. pergi ke start menu dan pilih control panel.



![https://file.army/i/BYNa2n9](https://404store.com/2020/04/18/Figure3.choosenetworkandinternet.jpg)

Gambar 3\. pilih network and internet.



![https://file.army/i/BYNac7o](https://404store.com/2020/04/18/Figure4.gotonetworkandsharingcenter.jpg)

Gambar 4\. pergi network and sharing center.



![https://file.army/i/BYNa5GE](https://404store.com/2020/04/18/Figure5.changeadaptersetting.jpg)

Gambar 5\. ganti adapter setting.



![https://file.army/i/BYNaNmU](https://404store.com/2020/04/18/Figure6.rightclickandchoosepropertiesofthenetworkinterfaceyoureusing.jpg)

Gambar 6\. klik kanan dan pilih properties dari network interface yang anda gunakan.



![https://file.army/i/BYNaVU3](https://404store.com/2020/04/18/Figure7.chooseinternetprotocolversion4andinputtheDNShereIinputGooglespublicDNS.jpg)

Gambar 7\. pilih internet protocol version 4 dan masukkan DNS, disini saya masukan public DNS Google.



Jika Anda ingin mengubah dari baris perintah, ketikkan yang berikut di cmd.exe:

<pre>			netsh
			interface ip show config
			(cari koneksi contohnya:)
			interface ip set dns "Ethernet0" static 8.8.8.8
			</pre>

## Pengaturan DNS Android

<div class="video-container"><iframe src="https://youtube.com/embed/eFeN52U4eHw" allowfullscreen=""></iframe></div>

![https://file.army/i/BYNaquZ](https://404store.com/2020/04/18/Figure8.opensettings.jpg)

Gambar 8\. buka settings.



![](https://404store.com/2020/04/18/Figure9.chooseconnections.jpg)

Gambar 9\. pilih connections.



![https://file.army/i/BYNaHVF](https://404store.com/2020/04/18/Figure10.choosewifiormoreconnectionsettings.jpg)

Gambar 10\. pilih wifi atau more connection settings.



![https://file.army/i/BYNaURe](https://404store.com/2020/04/18/Figure11.ifyouchoosewifithenlongpressoneofthehotspotthenchoosemanagenetworksettings.jpg)

Gambar 11\. jika milih wifi tekan lama salah satu hotspot lalu pilih manage network settings.



![https://file.army/i/BYNaiX5](https://404store.com/2020/04/18/Figure12.chooseadvance.jpg)

Gambar 12\. pilih advance.



![https://file.army/i/BYNajnA](https://404store.com/2020/04/18/Figure13.changeDHCPtostaticandsetDNS.jpg)

Gambar 13\. ganti DHCP ke static dan atur DNS contoh 8.8.8.8.



![https://file.army/i/BYNb9T4](https://404store.com/2020/04/18/Figure14.ifyouschoosemoreconnectionsettingsthesetprivateDNShostname.jpg)

Gambar 14\. jika pilih more connection settings atur private DNS hostname contoh dns.google.



## Pengaturan DNS Linux

<div class="video-container"><iframe src="https://youtube.com/embed/7g6GXFofQXU" allowfullscreen=""></iframe></div>

![https://file.army/i/BYNbBGn](https://404store.com/2020/04/18/Figure15.findyournetworkmanagerfromwidget.jpg)

Gambar 15\. cari network manager dari widget.



![https://file.army/i/BYNb7o1](https://404store.com/2020/04/18/Figure16.orfindnetworkmanagerfromsettingsandpressgearondesiredprofile.jpg)

Gambar 16\. atau cari network manager dari settings dan klik gear pada profil yang diinginkan.



![https://file.army/i/BYNbTi7](https://404store.com/2020/04/18/Figure17.chooseIPV4orIPV6andchangetheDNS.jpg)

Gambar 17\. pilih IPV4 atau IPV6 dan ganti DNS.



Jika Anda ingin melakukannya dari terminal, maka jadilah administrator menggunakan "sudo su", edit "/etc/resolve.conf" menggunakan nano, vim, dll, dan atur contoh "nameserver 8.8.8.8".

<div class="video-container"><iframe src="https://youtube.com/embed/jzy_gP7vIzc" allowfullscreen=""></iframe></div>

## Membangun DNS Server Linux

<div class="video-container"><iframe src="https://lbry.tv/$/embed/emulate-dns-server-on-core-network/3aa7c140c0a26d74b6aa9298abcb786f47f21b21" allowfullscreen=""></iframe></div>

Di sini saya hanya akan menunjukkan secara lokal menggunakan bind9\. Jika Anda ingin memakai domain publik, ubah saja ke alamat IP publik.

<pre>			sudo su
			apt install bind9
			</pre>

Edit "/etc/bind/named.conf.options" if you want to add forwarders such as:

<pre>			forwarders {
							8.8.8.8;
							8.8.4.4;
					   };
			</pre>

Buat zona di file conf apa saja, di video di atas, saya menambahkan zona di "/etc/bind/named.conf.local" karena hanya untuk jaringan lokal. contoh:

<pre>			zone "example.com" {
					type master;
					file "/etc/bind/db.example.com";
			};
			</pre>

Dalam kode di atas, nama zona adalah "example.com" dan tipenya adalah "master". File zona ditentukan untuk "/etc/bind/db.example.com" tetapi Anda dapat mengubah nama dan direktori file seperti yang Anda inginkan, tetapi untuk saat ini dalam "/etc/bind/db.example.com":

<pre>			;
			; BIND data file contoh.com
			;
			$TTL    604800
			@       IN      SOA     example.com. root.example.com. (
										  2         ; Serial
									 604800         ; Refresh
									  86400         ; Retry
									2419200         ; Expire
									 604800 )       ; Negative Cache TTL
					IN      A       192.168.1.10
			;
			@       IN      NS      ns.example.com.
			@       IN      A       192.168.1.10
			@       IN      AAAA    ::1
			ns      IN      A       192.168.1.10
			</pre>

Kami mendefinisikan "example.com" sebagai "192.168.1.10", kami juga mendefinisikan subdomain "ns.example.com" sama dengan "example.com". Catatan, ada contoh file zona seperti "/etc/bind/db.local" jika Anda memerlukan kerangka, yang lain buka [situs web resmi bind9](https://www.isc.org/bind/) untuk detail teknis lebih lanjut. Berikutnya adalah membuat file zona terbalik untuk menyelesaikan nama ke Alamat IP. Edit "/etc/bind/named.conf.local" sekali lagi dan tambahkan contoh:

<pre>			zone "1.168.192.in-addr.arpa" {
					type master;
					file "/etc/bind/db.192";
			};
			</pre>

Ganti "1.168.192" dengan jaringan yang Anda gunakan jika Anda menggunakan yang berbeda. File zona terbalik dalam video di atas adalah "/etc/bind/db.192". Jika Anda membutuhkan kerangka, ada "/etc/bind/db.127". Konten di bawah ini menunjukkan bahwa "ns.example.com" adalah "192.168.1.10":

<pre>			;
			; BIND reverse data file for local 192.168.1.XXX net
			;
			$TTL    604800
			@       IN      SOA     ns.example.com. root.example.com. (
										  2         ; Serial
									 604800         ; Refresh
									  86400         ; Retry
									2419200         ; Expire
									 604800 )       ; Negative Cache TTL
			;
			@       IN      NS      ns.
			10      IN      PTR     ns.example.com.
			</pre>

Akhirnya, "sudo systemctl restart bind9.service" untuk memulai ulang server DNS.

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-dns-xynjyj?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-dns-xynjyj?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/18/bypass-censorship-dns](https://0fajarpurnama0.github.io/internet/2020/04/18/bypass-censorship-dns)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-dns-b0b82609f8ad](https://medium.com/@0fajarpurnama0/bypass-censorship-by-dns-b0b82609f8ad)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-dns](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-dns)
*   [https://0fajarpurnama0.tumblr.com/post/615658139392622592/bypass-censorship-by-dns](https://0fajarpurnama0.tumblr.com/post/615658139392622592/bypass-censorship-by-dns)
*   [https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-dns.html](https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-dns.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/34-bypass-censorship-by-dns](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/34-bypass-censorship-by-dns)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-dns](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-dns)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-dns](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-dns)
*   [http://www.teiii.cn/bypass-censorship-by-dns](http://www.teiii.cn/bypass-censorship-by-dns)