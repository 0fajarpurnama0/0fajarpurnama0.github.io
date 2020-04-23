---
layout: post
title: Melewati Sensor dengan VPN
categories: internet
tags: [vpn, virtual private network, Windows, Linux, Android, Server, openvpn, bittube, tunnel bear, anti sensor]
---

## Deskripsi

Jaringan pribadi virtual (VPN) berisi kata "jaringan pribadi" dan "virtual". Selama penulisan artikel ini, jaringan publik hanyalah istilah lain untuk Internet sementara jaringan pribadi berada di luar Internet. Contoh node yang berada di jaringan publik adalah Google dan Youtube. Contoh node yang berada di jaringan pribadi adalah klien atau pengguna yang mengakses Google dan Youtube. Situasi ini ada karena infrastruktur Internet saat ini terlalu kecil untuk menampung semua komputer di dunia. Oleh karena itu, klien dan pengguna sebagian besar di luar Internet di mana mereka harus melalui perantara untuk berkomunikasi dengan orang-orang di Internet, saya suka menyebutnya gateway (lihat [pengantar sederhana ke jaringan komputer](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/pendahuluan-senderhana-terhadap-internet-dan-jaringan-komputer.html) untuk memahami dasar-dasarnya).

Meskipun Internet atau jaringan publik seperti jalan-jalan dan dunia luar tempat kita bisa keluar dan bepergian, jaringan pribadi seperti rumah kita di mana jaringan itu pribadi dan hanya kita yang bisa masuk. Jaringan pribadi vritual (VPN) memperluas jaringan pribadi di jaringan publik dan memungkinkan pengguna untuk mengirim dan menerima data di jaringan bersama atau publik seolah-olah perangkat komputasi mereka terhubung langsung ke jaringan pribadi. Secara analog, itu seperti sebuah rumah terbuka di mana orang lain bisa masuk tetapi tentu saja dengan izin dari pemilik rumah. Misalnya, ketika kita berada di rumah atau di luar tetapi kita perlu mengakses jaringan internal kantor kita, kita biasanya perlu berlari kembali ke kantor kita, tetapi dengan VPN, kita dapat mengakses di tempat.

Saat kami memasuki VPN, kami tunduk pada aturan yang berbeda. Sangat disayangkan bahwa sebagian besar koneksi internet saat ini memiliki penegak hukum. Ketika kami ingin mengakses situs web, kami selalu bertanya kepada penegak itu dan hasilnya adalah apakah kami diberikan akses atau tidak. Peran VPN selain privasi adalah ketahanan sensor. Ketika kami pergi ke VPN, penegak kami berubah atau jika kami beruntung, penegakan kami dihapus. Misalnya di Indonesia, akses ke anime, manga, dan reddit dilarang, tetapi jika kita mengakses dari Jepang, itu diberikan. Lalu apa perbedaan antara VPN dan [server proxy](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/melewati-sensor-proxy) ? Server proxy hanya satu server sementara VPN adalah seluruh jaringan yang berisi rute dan server.

<figure>![https://file.army/i/BYHzMK3](https://404store.com/2020/04/23/bypass-censorship-vpn-illustration.gif)

<figcaption>Abaikan Sensor melalui Ilustrasi VPN</figcaption>

</figure>

## Mengatur VPN Client

Menariknya, pengaturan VPN bisa lebih mudah atau lebih sulit daripada pengaturan dns dan proxy. Itu karena ada pilihan berbeda seperti dns atau proksi di mana hanya memasukkan angka. Itu lebih mudah karena ada banyak aplikasi siap tersedia di mana langkah-langkahnya hanya menginstal dan menjalankan. Lebih sulit jika Anda memilih untuk mengatur konfigurasi secara manual yang dapat melibatkan lebih dari sekadar pengaturan alamat IP server VPN.

### Aplikasi VPN Siap

Seperti kata "siap", aplikasi VPN semacam ini hanya perlu diinstal dan dijalankan untuk menikmati melewati sensor. Di Windows, Anda dapat mencoba mencari dari Microsoft Store. Di Linux, periksa manajer paket Anda sendiri. Di Android dan iOS Anda dapat mencari di toko mereka masing-masing. Secara umum, Anda dapat menemukan arsip portabel atau mencari file yang dapat diinstal. Aplikasi VPN Ready juga tersedia dalam bentuk ekstensi browser.

<figure>![https://file.army/i/BYHzGZo](https://404store.com/2020/04/23/bittubevpn.png)

<figcaption>Meskipun [bittube](https://bittube.app/?ref?2JY4FE0CP) ekstensi browser terutama tentang koin cryptocurrency tabung tempat Anda bisa mendapatkan tabung untuk waktu Anda di Internet, monetisasi, dan sebagai Tube wallet untuk menyimpan dan mempertaruhkan koin Tube Anda, itu juga menyediakan layanan VPN. Yang perlu Anda lakukan adalah pergi ke menu VPN dan pilih VPN yang ingin Anda sambungkan dan nikmati melewati sensor. Ini juga memiliki sistem rujukan. Karena itu, saya akan sangat berterima kasih Anda mengunduh dari [tautan ini: https://bittube.app/?ref?2JY4FE0CP](https://bittube.app/?ref?2JY4FE0CP) jika Anda belum pernah mencobanya sebelumnya.</figcaption>

</figure>

<figure>![https://file.army/i/BYHzhNU](https://404store.com/2020/04/23/Screenshot_20200423-034736_TunnelBear.jpg)

<figcaption>Di ponsel cerdas android saya, saya menemukan [terowongan beruang](https://www.tunnelbear.com/account/signup?referral=f71af3d0-bda9-43c9-a547-707f9b7cd21d) . Mudah digunakan di mana Anda hanya perlu menginstal dan memilih VPN Anda. Animasi ini juga lucu menunjukkan beruang muncul di VPN yang Anda pilih. Ketika saya berada di Indonesia, saya mengandalkan [beruang terowongan](https://www.tunnelbear.com/account/signup?referral=f71af3d0-bda9-43c9-a547-707f9b7cd21d) untuk mengakses saya hiburan yang manga, manhua, manhwa, komik, dan anime yang sebagian besar diblokir di negara ini.</figcaption>

</figure>

Ada banyak aplikasi siap di luar sana. Tinggalkan komentar Anda tahu yang bagus. Untuk mencegah agar artikel ini tidak terlalu panjang, saya hanya dapat menyarankan Anda untuk mencari di mesin pencari seperti Google untuk menemukan VPN yang Anda inginkan. Contoh istilah pencarian: "vpn", "gratis", "Windows", "Linux", "Android", "Amerika Serikat", "Jepang", "Indonesia", "Eropa", "Cina", dll.

### Klien VPN Manual

Jika Anda mencari "daftar vpn gratis" di mesin pencari, Anda dapat menemukan situs web yang memberikan daftar vpns terbuka misalnya [https://www.freeopenvpn.org](https://www.freeopenvpn.org) . Jika mereka memberi Anda profil yang dapat Anda gunakan hanya dengan klik, itu bagus. Namun, jika Anda diberi detail konfigurasi yang harus Anda tulis sendiri, atau menggunakan klien vpn default atau lainnya, Anda harus mengaturnya dengan benar. Biasanya, ada lebih dari sekadar alamat dan port IP misalnya, protokol transport, kompresi, dan sertifikat.

<figure>![https://file.army/i/BYHzLdE](https://404store.com/2020/04/23/freeopenvpnorg.png)

<figcaption>Contoh OpenVPN di [https://www.freeopenvpn.org](https://www.freeopenvpn.org).</figcaption>

</figure>

### VPN Premium

Saat Anda mencoba VPN gratis, Anda mungkin menemukan ketidakpuasan. VPN dapat menjadi lambat karena persepsi penelusuran Anda didasarkan pada bagian paling lambat dari seluruh koneksi jaringan. Jika VPN lebih lambat, Anda akan merasakan koneksi lambat meskipun koneksi utama Anda cepat. Di sisi lain, Anda juga akan merasa lambat jika koneksi utama Anda sendiri lambat bahkan jika Anda menggunakan VPN cepat.

Faktor lain, adalah privasi dan keamanan yang saya skeptis tentang sebagian besar VPN gratis. Yakin bahwa VPN mungkin tidak memberikan sensor atau berbeda, dan privasi dari pengawasan utama tetapi Anda mungkin dimonitor secara mendalam oleh administrator VPN itu sendiri. Jika tidak, siapa yang tahu jika keamanan mereka rendah sehingga orang lain dapat dengan mudah memantau dan mencuri data pribadi Anda. Karenanya, tidak disarankan untuk mengekspos data pribadi seperti memasukkan nama pengguna dan kata sandi pada formulir masuk.

Oleh karena itu, ada VPN premium atau berbayar di mana mereka umumnya memberikan kualitas dengan harga. Jika Anda adalah teknisi yang terampil, maka Anda dapat menguji apakah VPN berkualitas baik atau tidak. Jika tidak, maka Anda harus meneliti sendiri seperti melihat apakah ada lisensi atau sertifikat pada VPN mereka, baca ulasan orang, dan berapa lama VPN telah berjalan.

## Membangun OpenVPN Server Linux

<div class="video-container"><iframe src="https://lbry.tv/$/embed/installing-openvpn-server-ubuntu-18-04/d656f4337b5606c693772d182fb96a3b770cb3a4" allowfullscreen=""></iframe></div>

Jika Anda menginginkan pembuatan skrip tunggal yang merupakan cara paling sederhana, Anda dapat mencoba [pivpn](https://www.pivpn.io) . Saya membangun server openvpn beberapa kali tetapi saya tidak dapat sepenuhnya mengingat langkah-langkahnya, mungkin karena saya belum cukup mengulanginya. Saya akan jujur, alasan saya menulis dan merekam tutorial komputer saya terutama untuk saya ingat ketika saya harus melakukannya lagi. Tapi, mengapa tidak membaginya dengan orang lain dengan menerbitkannya secara online dan saya terkejut bahwa saya dapat menghasilkan uang dari mereka. Sekarang, kembali ke server OpenVPN di Linux, langkah-langkah terperinci mungkin tampak luar biasa untuk pemula tetapi ikhtisar sebenarnya hanya beberapa yang adalah:

1.  Instal server openvpn dan pembuat otoritas sertifikat.
2.  Buat sertifikat, kunci server, dan kunci klien.
3.  Konfigurasikan server openvpn yang termasuk menautkan sertifikat, menggunakan kompresi atau tidak, memungkinkan klien mengakses Internet melalui VPN atau tidak, dll.

### Menginstal Server OpenVPN dan Pembuat Otoritas Sertifikat

Saya menggunakan Linux berbasis Debian seperti Ubuntu:

<pre>sudo apt install openvpn easy-rsa    
</pre>

### Membuat Sertifikat

Menjadi administrator misalnya menggunakan perintah:

<pre>sudo su
</pre>

Buat direktori sertifikat untuk openvpn, bekerja di sana, dan contoh konfigurasi dari direktori share easy-rsa:

<pre>mkdir /etc/openvpn/easy-rsa/
cp -r /usr/share/easy-rsa/* /etc/openvpn/easy-rsa/
</pre>

Edit "/ etc / openvpn / easy-rsa / vars" dan isi setidaknya baris yang tidak dikomentari dan edit nama dan informasi yang Anda inginkan. Ada instruksi yang bisa Anda baca di dalam file. Kemudian hasilkan otoritas sertifikat (CA).

<pre>cd /etc/openvpn/easy-rsa/
source vars
./clean-all
./build-ca
</pre>

Hasilkan kunci pribadi untuk server. Beri nama apa pun yang Anda inginkan tetapi tetap konsisten selama instalasi.

<pre>./build-key-server myservername
</pre>

Menghasilkan Deffie Hellman

<pre>./build-dh
</pre>

Hasilkan sertifikat dan kunci klien untuk sebanyak mungkin klien yang Anda inginkan. Setelah menghasilkan, Anda dapat menyalin "ca.cert" dan semua sertifikat dan kunci klien ke klien. Saya tidak yakin apakah Anda dapat menggunakan sertifikat dan kunci yang sama untuk banyak klien tetapi Anda dapat membuatnya dengan mengulangi perintah berikut:

<pre>source vars
./build-key client1
</pre>

Semua kunci dan sertifikat ada di subdirektori "kunci /". Anda dapat membiarkannya di sana tetapi ingatlah untuk menentukan jalur yang benar dalam konfigurasi. Jika tidak, maka cukup salin ke subdirektori "/ etc / openvpn":

<pre>cd keys/
cp myservername.crt myservername.key ca.crt dh2048.pem /etc/openvpn/
</pre>

### Mengkonfigurasi server OpenVPN

Contoh konfigurasi dari klien dan server tersedia di "/ usr / share / doc / openvpn / example / sample-config-file". Anda dapat menggunakan kembali dan mengedit contoh konfigurasi server:

<pre>cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
gzip -d /etc/openvpn/server.conf.gz
</pre>

Edit "server.conf" sesuai keinginan Anda, penjelasan tentang cara mengeditnya tersedia di dalam file. Pastikan konfigurasi konsisten dengan konfigurasi klien inteded Anda. Misalnya, jika server tidak menggunakan kompresi sementara klien menggunakan kompresi maka komunikasi tidak akan berfungsi dan sebaliknya. Berikut ini contoh konfigurasi server saya:

<pre>port 1194
proto udp
dev tun
ca ca.crt
cert myservername.crt
key myservername.key
dh dh2048.pem
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist /var/log/openvpn/ipp.txt
keepalive 10 120
cipher AES-256-CBC
persist-key
persist-tun
status /var/log/openvpn/openvpn-status.log
verb 3
explicit-exit-notify 1
push "route 192.168.0.0 255.255.255.0"
client-to-client
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
</pre>

Empat baris terakhir adalah tambahan saya sendiri di mana saya ingin VPN menemukan jaringan lokal 192.168.0.0 yang terhubung dengannya dan memungkinkan koneksi antar klien. Dua baris terakhir mungkin adalah yang ingin Anda tambahkan yang memungkinkan penggunaan koneksi Internet VPN dan menambahkan 8.8.8.8 Google DNS. Selanjutnya adalah mengedit "/etc/sysctl.conf" untuk memungkinkan penerusan port dengan mengatur "# net.ipv4.ip_forward = 1". Terakhir, muat ulang sysctl dan mulai atau mulai ulang server openvpn:

<pre>sysctl -p /etc/sysctl.conf
systemctl start openvpn@server
</pre>

## OpenVPN di Klien

Awalnya saya menggunakan [terowongan beruang](https://www.tunnelbear.com/account/signup?referral=f71af3d0-bda9-43c9-a547-707f9b7cd21d) di Indonesia untuk mengakses saya hiburan yang manga, manhua, manhwa, dan anime tapi akhirnya, saya kehabisan kuota. Untungnya, apartemen saya di Jepang memberikan alamat IP publik yang dinamis di apartemen saya dan saya dapat menginstal server openvpn selama periode tersebut. Jadi, saya terhubung ke server yang ternyata, lebih dapat diandalkan daripada [terowongan beruang](https://www.tunnelbear.com/account/signup?referral=f71af3d0-bda9-43c9-a547-707f9b7cd21d) , mungkin karena saya adalah satu-satunya yang menggunakannya.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/dynamic-domain-name-service-and-port/c87f0fa2da3ddcceb5098f2c28c67990cf6eb05c" allowfullscreen=""></iframe></div>

### Klien OpenVPN Linux

Anda dapat menggunakan manajer jaringan atau menginstal openvpn seperti yang Anda instal di server (hanya "apt install openvpn"). Jika Anda menggunakan manajer jaringan, masukkan kunci dan sertifikat, nama pengguna dan kata sandi jika Anda mengatur, dan pergi untuk maju dan pastikan Anda cocok dengan konfigurasi ke server. Satu perbedaan akan membuatnya tidak terhubung. Jika Anda menginstal openvpn, cukup salin konfigurasi klien sampel ke subdirektori konfigurasi openvpn:

<pre>cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf /etc/openvpn/
</pre>

Cocokkan konfigurasi klien dengan server dengan perbedaannya adalah mendeklarasikan file konfigurasi sebagai klien bersama dengan sertifikat dan kunci klien dan menginformasikan nama host atau alamat server openvpn jarak jauh:

<pre>ca ca.crt
cert client1.crt
key client1.key
client
remote 0fajarpurnama0.ddns.net 1194
</pre>

Kemudian mulai klien openvpn:

<pre>systemctl start openvpn@client
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypass-censorship-through-my-open-proxy/a497461bbb471e0c88bf838e35cee7804fdaf1b5" allowfullscreen=""></iframe></div>

### Klien OpenVPN Windows

Lebih mudah untuk mengubah nama "client.conf" menjadi "client.OVPN" di mana karena alasan tertentu, ekstensi harus menggunakan huruf kapital agar berfungsi. Anda dapat menyimpannya di direktori yang sama dengan sertifikat dan kunci, tetapi lebih mudah untuk memasukkannya ke "client.OVPN":

<pre>client
dev tun_c_ovpn
proto udp
remote 0fajarpurnama0.ddns.net 1194
resolv-retry infinite
keepalive 5 10
nobind
persist-key
persist-tun
verb 3
 <ca>-----BEGIN CERTIFICATE-----
MIIFXDCCBESgAwIBAgIUbZAu8yajhVulFYZ4CWNqGc8xWncwDQYJKoZIhvcNAQEL
BQAwgccxCzAJBgNVBAYTAkpQMQ8wDQYDVQQIEwZLeXVzaHUxETAPBgNVBAcTCEt1
bWFtb3RvMRcwFQYDVQQKEw4wZmFqYXJwdXJuYW1hMDEXMBUGA1UECxMOMGZhamFy
cHVybmFtYTAxGjAYBgNVBAMTETBmYWphcnB1cm5hbWEwIENBMRcwFQYDVQQpEw4w
ZmFqYXJwdXJuYW1hMDEtMCsGCSqGSIb3DQEJARYeZmFqYXJAaGljYy5jcy5rdW1h
bW90by11LmFjLmpwMB4XDTE5MTIwMTE2NDQ1M1oXDTI5MTEyODE2NDQ1M1owgccx
CzAJBgNVBAYTAkpQMQ8wDQYDVQQIEwZLeXVzaHUxETAPBgNVBAcTCEt1bWFtb3Rv
MRcwFQYDVQQKEw4wZmFqYXJwdXJuYW1hMDEXMBUGA1UECxMOMGZhamFycHVybmFt
YTAxGjAYBgNVBAMTETBmYWphcnB1cm5hbWEwIENBMRcwFQYDVQQpEw4wZmFqYXJw
dXJuYW1hMDEtMCsGCSqGSIb3DQEJARYeZmFqYXJAaGljYy5jcy5rdW1hbW90by11
LmFjLmpwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6HwIppc9/Kwl
Hkd+yUpEk8UveacjcGvEsvBdSLzn1IeUgDNkvKy8uuFcptV3sqg89+lagaM3z1MI
Ere2GFHQFPHX1of78v2XY9r31KSArtN2tqpIWS8EMpt7xOLaFXTJiSBgG0LwVy/7
DppaloPiFwYXu/itzZXjN26fuHvbFQEfYlh1MdcxpHj9Reswjk3+EOrtnLchHdQ+
E/xIR5WzA2vlpw1ie4fy1SLPulUZf7ZG/SIPTrXcWvTljti2LJgxt3xHElD/KmTN
6t5KIHv7Mx9BY2Q98YgwmzPzkG0FQ03NygEan4HXJ85RIK5rJVmbR2+9hWqFDV54
RQL42Nq6hwIDAQABo4IBPDCCATgwHQYDVR0OBBYEFMvHUSxayCjwg9n4z8NzHNQ1
e8zBMIIBBwYDVR0jBIH/MIH8gBTLx1EsWsgo8IPZ+M/DcxzUNXvMwaGBzaSByjCB
xzELMAkGA1UEBhMCSlAxDzANBgNVBAgTBkt5dXNodTERMA8GA1UEBxMIS3VtYW1v
dG8xFzAVBgNVBAoTDjBmYWphcnB1cm5hbWEwMRcwFQYDVQQLEw4wZmFqYXJwdXJu
YW1hMDEaMBgGA1UEAxMRMGZhamFycHVybmFtYTAgQ0ExFzAVBgNVBCkTDjBmYWph
cnB1cm5hbWEwMS0wKwYJKoZIhvcNAQkBFh5mYWphckBoaWNjLmNzLmt1bWFtb3Rv
LXUuYWMuanCCFG2QLvMmo4VbpRWGeAljahnPMVp3MAwGA1UdEwQFMAMBAf8wDQYJ
KoZIhvcNAQELBQADggEBAJS159tPUrmnPjVffVZi5fvRBishiuaB91EUH5MEbqkk
hrootBEQSNSxCGh3nOlGVFherpyla1a+G1F0pnyobrnzLTpcf28fQdKN6ZbV5psA
/+CSwBYO1BLnarwu+VYnZeQxHYc/3v3xMNNZV5oE9uil7VAxMJV5zGUSxQi7fQZS
Wo4AV8AHpKKdpdOXr8UyirXqDgiZY7nZpmnJaTPYacKbCk/pziTEjSkwGiYIE8q4
EWaAD+3WnjpE7K2ky7TWGuK/a0G+Jx2YZCkirXnc9znWELa7B5M7RLJrDhTC0Whz
4zNpn5HClk+XzTu850So9xxPQ73L0Veob7sBfNZlBu8=
-----END CERTIFICATE-----</ca> 

 <cert>-----BEGIN CERTIFICATE-----
MIIFoTCCBImgAwIBAgIBAjANBgkqhkiG9w0BAQsFADCBxzELMAkGA1UEBhMCSlAx
DzANBgNVBAgTBkt5dXNodTERMA8GA1UEBxMIS3VtYW1vdG8xFzAVBgNVBAoTDjBm
YWphcnB1cm5hbWEwMRcwFQYDVQQLEw4wZmFqYXJwdXJuYW1hMDEaMBgGA1UEAxMR
MGZhamFycHVybmFtYTAgQ0ExFzAVBgNVBCkTDjBmYWphcnB1cm5hbWEwMS0wKwYJ
KoZIhvcNAQkBFh5mYWphckBoaWNjLmNzLmt1bWFtb3RvLXUuYWMuanAwHhcNMTkx
MjAxMTY0ODExWhcNMjkxMTI4MTY0ODExWjCBvTELMAkGA1UEBhMCSlAxDzANBgNV
BAgTBkt5dXNodTERMA8GA1UEBxMIS3VtYW1vdG8xFzAVBgNVBAoTDjBmYWphcnB1
cm5hbWEwMRcwFQYDVQQLEw4wZmFqYXJwdXJuYW1hMDEQMA4GA1UEAxMHY2xpZW50
MTEXMBUGA1UEKRMOMGZhamFycHVybmFtYTAxLTArBgkqhkiG9w0BCQEWHmZhamFy
QGhpY2MuY3Mua3VtYW1vdG8tdS5hYy5qcDCCASIwDQYJKoZIhvcNAQEBBQADggEP
ADCCAQoCggEBAJ2GVHKPqK/xfCCjK0+bVI07BTpbM4dCE3IElGBmKALY28D43zGF
74OjAWo+ifTru2ThlpOkfa9PtBaMxqY/EWj6sjY6Bt1fm3QmcnasOeFWMSH5ZTV3
PiNcb8QJeusWL0EtDjz1anbe2H1UqYepAHhmFxTKap6oqQnXDTO/gQuDBvC/LgfF
S07GxGfjTUSM6CyPKAmWOJIIqM7KRR0UA3cLiIDbbmQy4RicBAF6jfKUSa6SeFQn
7YTNrnOOrbK0r78JcDJ+OU0whnr1dW7PZdByzRFxXxzlHZM1m9Me/4I8VcNFeh0Z
Y3ATmIGaIcfQmfC4nO14W4k1XULvzF5pGA0CAwEAAaOCAZ4wggGaMAkGA1UdEwQC
MAAwLQYJYIZIAYb4QgENBCAWHkVhc3ktUlNBIEdlbmVyYXRlZCBDZXJ0aWZpY2F0
ZTAdBgNVHQ4EFgQUxH6LrB12M55RSYC4FGcVZaWp5kkwggEHBgNVHSMEgf8wgfyA
FMvHUSxayCjwg9n4z8NzHNQ1e8zBoYHNpIHKMIHHMQswCQYDVQQGEwJKUDEPMA0G
A1UECBMGS3l1c2h1MREwDwYDVQQHEwhLdW1hbW90bzEXMBUGA1UEChMOMGZhamFy
cHVybmFtYTAxFzAVBgNVBAsTDjBmYWphcnB1cm5hbWEwMRowGAYDVQQDExEwZmFq
YXJwdXJuYW1hMCBDQTEXMBUGA1UEKRMOMGZhamFycHVybmFtYTAxLTArBgkqhkiG
9w0BCQEWHmZhamFyQGhpY2MuY3Mua3VtYW1vdG8tdS5hYy5qcIIUbZAu8yajhVul
FYZ4CWNqGc8xWncwEwYDVR0lBAwwCgYIKwYBBQUHAwIwCwYDVR0PBAQDAgeAMBIG
A1UdEQQLMAmCB2NsaWVudDEwDQYJKoZIhvcNAQELBQADggEBABzfVo8l4yUplgrb
wi3TT3nZnfz9j+5bHHvy2NRIGGmLlcZGrr+qJ+zwvDF6aPuaJ1goB9nSuPfcHEnR
HTVsHIcUQ+yOSiNIrUIFuasQlWiZ5TA0CIChVWrKaWpvuZUgBUIra4Qj8qrHypj0
M2X551F6vspNA8to+oNpH6/wDtRIo6y3wac/hnv2vrpCg5TmVcAqammk02GMxITh
wa/zMWZsCccbt/jmeJ7QVX33nZGWykep2vf3CbROxmK0L9amPkMCOPvG7evCuLE4
UMOA7q2KARVeoSq6xVVi65h+KCzXvhUQ/Z2W+9g88L+w0Jcr666CgHUjYc0pBHCW
LKvLkjs=
-----END CERTIFICATE-----</cert> 

 <key>-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdhlRyj6iv8Xwg
oytPm1SNOwU6WzOHQhNyBJRgZigC2NvA+N8xhe+DowFqPon067tk4ZaTpH2vT7QW
jMamPxFo+rI2OgbdX5t0JnJ2rDnhVjEh+WU1dz4jXG/ECXrrFi9BLQ489Wp23th9
VKmHqQB4ZhcUymqeqKkJ1w0zv4ELgwbwvy4HxUtOxsRn401EjOgsjygJljiSCKjO
ykUdFAN3C4iA225kMuEYnAQBeo3ylEmuknhUJ+2Eza5zjq2ytK+/CXAyfjlNMIZ6
9XVuz2XQcs0RcV8c5R2TNZvTHv+CPFXDRXodGWNwE5iBmiHH0JnwuJzteFuJNV1C
78xeaRgNAgMBAAECggEBAIdKmvb1uXy7W8+wNH+fugO+gCP5tozhzE+t7T3KH20q
kbrwRMmE7gxSEOIOKnCHkh/3vFq7+RJ70wFXEToxiqNuRWdbeQ/ikGI2rzKLgv6t
B2/Vgf5klqLKPlfRiJemKxnAN61VXoYPqUIjV6NjHDtL+2Do5J+13dDMudMLFCss
meMzGCchAQ3Lm2zybdRUNOsVCIQIgIGpVAsmn80lCr+DWWsdee6PIknn/76Wc2Ie
phi0tAruQAGxxDnMJMPG03yRQ6xmllVRoNncNVEr3gRk4NiKBWn2R26ia7Llw6K0
Z3abIO1qJj3SoRzb1ZIevPoYPqH8GE1EceXD5RfqwCECgYEAzMMQExmXvImbYoi7
dxQQiUPwt1FDIr9mYZHmhd6z2DDF3T8bOU5Z8DG5oMrIIofQK0flesvULastuheB
wmbId4KUBl6STEg4uOXCTZeYNp3pTQu2MDOvICgVcrQSnkOuZTckasvq+5l2jE/7
DL2i4ZQE4FwlSEE4a+Nr8/IgfJUCgYEAxPFGpZ18CN/dKanchVWDC9crAZ5F2Qb/
RT0yJKie1WF4LkI+E4we+BegDginy5pGjaRUueUB5IRtCefvb4dp+6rFFhSMluIM
Na64FAJYM+5J227iYjo8rtYhQVWCjkcXUcJDQTUfoogtXBj3X3TP+VCHwxawtMYw
v+8gnFIIV5kCgYAMzCQ1DWRuZCtR/Tm6N4bRDW3+BxYrFctQTc4aj9Ctsl6rdUY+
TqdQW8s+QW5AujxIeDXfdt3L/ObeuplhjQr6bS7TNxXtrpXc+H8sWk0pHLV4G0NH
v/MyD09H2/lN6uz7ZnbgNd552x2Np3IJWdDUSGwFmby6x1i/ZXdZx8hAAQKBgQCS
FDEFuRl+b6ZZOAA0+ieYycHBkodWokUIM4sU++nMdl6xWTs4Po/eD5ANuMfVUpqQ
h1q9BCtyN/O1DE9iV3v6S0Gizh018XeC/hTV6qNH6bDozYenunC2cmf6URXkuMCI
SWKfZGsRoJacoHwkVr3IvL3mq9boT7VrOFDlAkfjyQKBgECDXo/MJoB22loxjFX9
1PycP92ZLYHUnIDHhAkgzmd65+qCrhk10d0BIiBcgfgL3Z0Kv/G/xNhEbZu20tua
cEKPaqUD5xUjZyZKXLzQ8k7pLCRN6XQ26UhnUPNZS8BxqkJIAu2x0SbIZjnXblF3
GZ+xa6lVwhHCq7EKcDvGHvLe
-----END PRIVATE KEY-----</key> 
</pre>

Sekarang Anda dapat membawa file .OVPN itu ke mana saja. Berikutnya adalah mengunduh [klien openvpn untuk Windows](https://openvpn.net/client-connect-vpn-for-windows/) jika klien default Windows Anda tidak mendukung.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypass-censorship-through-my-setup-open/de0b303a4d036377811b85f9b2673f0315c5889d" allowfullscreen=""></iframe></div>

### klien OpenVPN Android

Metode yang sama seperti Windows, dapatkan file .OVPN Anda dan unduh [klien openvpn untuk Android](https://play.google.com/store/apps/details?id=de.blinkt.openvpn&hl=id) .

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypassing-censorship-through-my-setup/453274f03aa85947a81b533d0be0fd280750901d" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-vpn-xxmdlp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-vpn-xxmdlp?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/22/bypass-censorship-vpn](https://0fajarpurnama0.github.io/internet/2020/04/22/bypass-censorship-vpn)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-vpn-f2fc4e634794](https://medium.com/@0fajarpurnama0/bypass-censorship-by-vpn-f2fc4e634794)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-vpn](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-vpn)
*   [https://0fajarpurnama0.tumblr.com/post/616125126762725376/bypass-censorship-by-vpn](https://0fajarpurnama0.tumblr.com/post/616125126762725376/bypass-censorship-by-vpn)
*   [https://0darkking0.blogspot.com/2020/04/bypass-censorship-by-vpn.html](https://0darkking0.blogspot.com/2020/04/bypass-censorship-by-vpn.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-vpn?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-vpn?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/36-bypass-censorship-by-vpn](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/36-bypass-censorship-by-vpn)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-vpn?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-vpn?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-vpn](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-vpn)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-vpn](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-vpn)
*   [http://www.teiii.cn/bypass-censorship-by-vpn](http://www.teiii.cn/bypass-censorship-by-vpn)