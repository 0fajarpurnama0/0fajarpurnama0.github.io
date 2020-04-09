---
layout: post
title: Demonstrasi Bruteforce Sederhana Menggunakan Hydra
categories: pentest
tags: [penetration testing, brute force, Hydra, Linux, Backtrack, NMAP]
---

## Latar Belakang

Apakah Anda pernah lupa pin Anda untuk bagasi Anda kemudian mencari di Youtube? Umumnya mereka menyarankan "atur semuanya ke 000, coba klik kunci, putar ke 001, coba klik kunci lagi, terus lakukan ini sampai 009, lalu coba 010, coba klik kunci, balikkan ke 011, coba klik kunci lagi, terus lakukan ini sampai 019, lalu coba 020, ulangi dan akhirnya Anda akan membuka kunci ". Tunggu sebentar, bukankah ini sama dengan mencoba setiap kombinasi dari 000-999? Itu hanya bruteforce! Apa yang di upload hanya untuk mendapatkan perhatian!

![https://file.army/i/BYmZOGq](https://404store.com/2020/04/04/Figure0.threenumericalpinsforluggagelock.jpg)

Gambar 0\. tiga pin numerik untuk kunci bagasi.</figcaption>



Selain cerita, dalam artikel ini saya akan memperkenalkan Anda pada demonstrasi sederhana dari brute yang memaksa kata sandi menggunakan Hydra di Linux. Ini bukan tutorial lanjutan tetapi hanya untuk memberi orang yang tidak pernah mendengar ilustrasi brute force. Saya dapat mendefinisikan password bruteforce hanya dalam satu kalimat yaitu mencoba setiap kombinasi karakter untuk memecahkan kata sandi.

## Konsep Program

Sebagai manusia adalah kerja berat, itulah sebabnya kami membuat program untuk melakukannya untuk kami. Konsep aplikasi atau pemrograman sebenarnya sederhana.

1.  Buat kamus untuk kemungkinan kombinasi.
2.  Suntikkan kombinasi itu di antarmuka login akun.

Dua langkah sebelumnya adalah dasar dan cukup untuk dijalankan sebagai aplikasi. Langkah selanjutnya adalah yang rumit karena sistem saat ini menjadi lebih pintar dalam mendeteksi dan menangani brute force. Misalnya, Anda memiliki percobaan terbatas dan akun akan dikunci untuk jangka waktu tertentu atau bahkan permanen atau Anda dapat masuk daftar hitam. Seperti permainan kucing dan tikus, aplikasi brute force harus disesuaikan setiap saat dengan sistem pertahanan yang ada. Ketika saya menulis bahwa artikel ini hanya demonstrasi sederhana, jadi saya tidak akan terjun ke bagian yang rumit dan adaptif ini.

## Demonstrasi Hydra

Beberapa waktu yang lalu sebelum 2015 saya tertarik pada alat pengujian penetrasi dan sistem operasi. Dulu saya menggunakan Backtrack, sekarang Kali Linux, lalu ada Parrot OS. Saat itu saya menulis artikel tentang demonstrasi kekerasan menggunakan alat Hydra yang akhirnya hilang. Sekarang, saya menemukan cadangan tangkapan layar dan memutuskan untuk menulis ulang lagi. Demonstrasi ini benar-benar memaksa server pengujian saya sendiri di mana saya mengaktifkan layanan telnet untuk login. Brute force ada pada nama pengguna dan kata sandi.

![https://file.army/i/BYmRw1Y](https://404store.com/2020/04/04/Figure1.exampleofaverysimpleusernamedictionary.png)

Gambar 1\. contoh kamus nama pengguna yang sangat sederhana. Hal pertama yang Anda butuhkan adalah kamus. Itu hanya kumpulan kata-kata dalam bentuk file. Saya memasukkan nama pengguna yang benar di antara kata-kata itu.</figcaption>



![https://file.army/i/BYmRfzQ](https://404store.com/2020/04/04/Figure2.exampleofaverysimplepassworddictionary.png)

Gambar 2\. contoh kamus kata sandi yang sangat sederhana. Saya memutuskan untuk memisahkan kamus nama pengguna dan kata sandi, tetapi Anda dapat menyimpannya dalam satu file jika Anda mau. Saya memasukkan kata sandi yang benar di antara kata-kata itu.</figcaption>



![https://file.army/i/BYmIapV](https://404store.com/2020/04/04/Figure3.scanningserverwithNMAP.png)

Gambar 3\. server pemindaian dengan NMAP. Sebelum fase eksploitasi adalah fase pemindaian dan di sini hanya untuk menunjukkan bahwa port telnet terbuka pada port 23\.</figcaption>



![https://file.army/i/BYmIbcp](https://404store.com/2020/04/04/Figure4.hydraguiisavailableonBacktrack5.png)

Gambar 4\. hydra gui tersedia di Backtrack 5\. Menu ada di BackTrack> Privilege Escalation> Serangan Kata Sandi> Serangan Online> hydra-gtk. Jika Anda tidak memiliki Hydra, cobalah mendapatkannya dari manajer paket Anda atau buka [Github](https://github.com/vanhauser-thc/thc-hydra) .</figcaption>



![https://file.army/i/BYmZETZ](https://404store.com/2020/04/04/Figure5.hydracommandlinehelp.png)

Gambar 5\. bantuan baris perintah hydra. Saya lebih suka menggunakan baris perintah. Ketik "Hydra" atau "Hydra --help" untuk menampilkan teks bantuan.</figcaption>



### Di luar ini adalah risiko Anda sendiri jika menargetkan server orang lain karena itu akan dihitung sebagai **upaya peretasan** . Dapatkan izin untuk pengujian penetrasi atau lakukan hanya di server Anda sendiri.

![https://file.army/i/BYmZUhZ](https://404store.com/2020/04/04/Figure6.hydrabruteforceexecution.png)

Gambar 6\. eksekusi hydra brute force. Berdasarkan teks bantuan pada Gambar 5, "-L" menunjuk ke kamus nama pengguna, "-P" menunjuk ke kamus kata sandi, "-F" untuk berhenti ketika berhasil, "-V" untuk kata kerja, kemudian diikuti oleh server Alamat dan layanan IP. Setelah mencoba kemungkinan kombinasi, nama pengguna "purnama" dan kata sandi "testhack" ditemukan sebagai pasangan yang cocok.</figcaption>



![https://file.army/i/BYmZPY3](https://404store.com/2020/04/04/Figure7.telnettoserver.png)

Gambar 7\. Telnet ke server dan di sini saya tertawa karena saya baru ingat bahwa saya sedang berusaha keras memaksa desktop Windows saya sendiri bertahun-tahun yang lalu.</figcaption>



## Catatan Akhir

Jika Anda mengikuti proses ini sepenuhnya, Anda akan menyadari bagaimana menghabiskan sumber daya untuk melakukan brute force. Itulah sebabnya di antara semua metode eksploitasi, brute force adalah pilihan terakhir. Kamus dapat berukuran lebih dari banyak gigabyte dan untuk mencoba semua kombinasi, Anda memerlukan jaringan dan daya komputasi yang cepat. Terakhir, sekarang Anda bahwa akun dapat dipaksa paksa, penting untuk memiliki kata sandi yang kuat.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bruteforce-demonstration-using-hydra-on/de2fe690272e819d589098ab3dccad2a85b77da5" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-xewooy?a=4oeEw0Yb0B&tid=hicc](https://www.publish0x.com/0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-xewooy?a=4oeEw0Yb0B&tid=hicc)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra](https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra)
*   [https://medium.com/@0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-884dc8448686](https://medium.com/@0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-884dc8448686)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/simple-bruteforce-demo-hydra.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/simple-bruteforce-demo-hydra.html)
*   [https://0fajarpurnama0.tumblr.com/post/614452811196940288/simple-password-bruteforce-demonstration-using](https://0fajarpurnama0.tumblr.com/post/614452811196940288/simple-password-bruteforce-demonstration-using)
*   [https://0darkking0.blogspot.com/2020/04/simple-password-bruteforce-demonstration-using-hydra.html](https://0darkking0.blogspot.com/2020/04/simple-password-bruteforce-demonstration-using-hydra.html)
*   [https://hive.blog/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama](https://hive.blog/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/24-simple-password-bruteforce-demonstration-using-hydra](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/24-simple-password-bruteforce-demonstration-using-hydra)
*   [https://steemit.com/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama](https://steemit.com/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/simple-password-bruteforce-demonstration-using-hydra](http://0fajarpurnama0.weebly.com/blog/simple-password-bruteforce-demonstration-using-hydra)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-password-bruteforce-demonstration-using-hydra](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-password-bruteforce-demonstration-using-hydra)
*   [http://www.teiii.cn/simple-password-bruteforce-demonstration-using-hydra](http://www.teiii.cn/simple-password-bruteforce-demonstration-using-hydra)