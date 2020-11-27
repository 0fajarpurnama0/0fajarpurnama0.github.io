---
layout: post
title: T-Phi Network (Star-Delta) Mengunakan Relays dan Timer
categories: misc
tags: [delta, everycircuit, star, motor, koneksi]
featuredimage: https://images.blurt.blog/p/hgjbks2vRxvf31aBuCFT4pQnFAyB8FiVtrAszKN5K1xk16AFn6p53T9m5EbvuJ2Edc9qFjRw5TcCRCyLAKQZbj2TrW
description: Simulasi untuk rangkaian ini berhasil dan dapat diimplementasikan untuk membangun motor delta bintang yang sebenarnya. Motor awalnya akan lambat, dan kemudian beberapa detik motor akan lebih cepat.
canonicalurl: https://0fajarpurnama0.github.io/misc/2020/02/24/t-phi-network-menggunakan-relays-dan-timer.html
---

## 1\. Pendahuluan

Di dalam jaringan listrik, jaringan star dan delta mengandung 3 beban dimana di jaringan star mereka terkoneksi dalam bentuk star sedangkan jaringan delta terkoneksi dalam bentuk delta seperti pada Gambar 1.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5699/21416388852_05df519d1b_o_d.jpg)

Gambar 1\. Diagram Koneksi Star dan Delta

Aplikasi ini biasanya digunakan pada motor AC (Alternate Current) di mana ia harus berjalan lambat. Menghidupkan motor melalui arus tinggi segera dapat meniup motor karena arus start sama dengan arus normal dikalikan dengan v3 (= v3 x I). Tidak masalah jika arusnya 5A (ampere) (I_start = v3 x 5 A = 8,66 A), apa yang terjadi jika 50A itu akan menjadi (I_start = v3 x 50 A = 86,6 A). Perbedaan antara 50A dan 86,6A cukup signifikan. Oleh karena itu diperlukan sakelar untuk memulai motor melalui kondisi bintang (arus rendah), kemudian setelah beberapa saat dikendalikan oleh waktu, ubah sirkuit menjadi delta (arus tinggi). Diagram lengkap dapat dilihat pada Gambar 2.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5623/20804621194_2b94d3461f_o_d.jpg)

Gambar 2\. Diagram Star Delta Motor


## 2\. Desain Simulasi

Untuk percobaan di sini kami memiliki sumber daya yang terbatas, kami tidak memiliki motor star-delta yang membuat saya berpikir apakah ada alternatif untuk melakukan simulasi motor star-delta. Saya mendapat ide untuk menggunakan lampu tegangan rendah atau LED sebagai indikator dengan menggunakan kecerahan lampu. Saya akan menggunakan 3 resistor (1 K? Untuk percobaan ini) untuk membentuk sirkuit star dan delta. Kita akan melihat kecerahan rangkaian star dan delta lampu, dan untuk ini kita akan menggunakan Direct Current (DC). Karena hanya ada sumber positif (+) dan negatif (-), kita perlu mencari rangkaian alternatif (AC memiliki 3 sumber R-S-T). Untuk sirkuit star adalah sirkuit T dan untuk sirkuit delta adalah sirkuit Pi di DC seperti yang ditunjukkan pada Gambar 3 (Jika saya punya waktu saya akan memasukkan perhitungan). Gambar 3 menunjukkan bahwa arus yang melewati sirkuit T lebih kecil yang harus digunakan sebagai sirkuit awal, dan sirkuit Pi melewati arus yang lebih besar yang harus diaktifkan kemudian.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5695/20806241573_0b224c59b2_o_d.jpg)

Gambar 3\. Jaringan T (Star) (Kiri) dan Jaringan Pi (Delta) (Kanan)

<div class="video-container"><iframe src="https://www.youtube.com/embed/aEjFKhszAGk" frameborder="0" allowfullscreen=""></iframe></div>

Untuk mewujudkan percobaan ini kami gunakan:

*   24V DC adapter
*   3 1K resistor
*   LEDs
*   2 relays
*   Timer

Gambar simulasi dapat dilihat pada Gambar 4 di mana 1 relay sebagai saklar ke sirkuit T dan yang lainnya sebagai switch ke sirkuit Pi. Video simulasi menggunakan aplikasi android EveryCircuit disertakan pada folder yang sama ini karena laporan ini tidak termasuk timer. Pada aplikasi nyata berdasarkan diagram tangga pada Gambar 5 timer akan diatur di mana awalnya akan memulai relay dari sirkuit T (sirkuit Pi terputus). Setelah 2 detik (atau waktu tertentu) timer akan memutus relai sirkuit T dan menghubungkan relai sirkuit Pi.

![Star-Delta Circuit Simulation (left: star, right: delta)](https://farm6.staticflickr.com/5785/20806240853_9849812a0e_o_d.jpg)

Gambar 4\. Simulasi Jaringan Star-Delta (kiri: star, kanan: delta)

<div class="video-container"><iframe src="https://www.youtube.com/embed/tBVHPCyPbYo" frameborder="0" allowfullscreen=""></iframe></div>

![Ladder diagram of star-delta motor](https://farm1.staticflickr.com/679/21416386042_07046146a6_o_d.jpg)

Gambar 5\. Diagram ladder motor star-delta

## 3\. Eksperimen

![Realizing simulation](https://farm6.staticflickr.com/5836/21416385392_eece3c1fa6_o_d.jpg)

Gambar 6\. Merealisasikan simulasi

Seperti pada Gambar 6 kita merealisasikan desain simulasi dari Gambar 4. _3 LEDs untuk indicator,_ 3 resistors ditaruh parallel, _2 relays untuk switching (1 sebagai jaringan star, 1 sebagian jaringan delta),_ tidak dilupakan 24V power source, dan perangkat yang tidak ditarik ke dalam simulasi adalah timer. Timer juga merupakan metode switching yang tidak memasok daya, (kesalahan yang pernah saya lakukan secara langsung menghubungkan baik positif (+) dan negatif (-) ke timer) tetapi bertindak beralih ke sumber daya. Jadi 1 kabel dari relai harus terhubung ke sumber daya (baik + atau -) yang lain harus terhubung ke timer kemudian ke sumber listrik. Adapun percobaan di sini sirkuit bintang saya menghubungkan (-) langsung ke sumber dan (+) untuk pin 1 pada timer pada Gambar 7, kemudian pin 4 timer menghubungkan ke (+) dari sumber. Pin 1 dan pin 4 biasanya tertutup (NC) yang berarti pin 1 dan pin 4 akan terhubung sampai waktu yang ditentukan ketika timer dihidupkan (di sini diatur selama 5 detik, setelah pin 1 dan pin 4 terputus. Sedangkan untuk delta sirkuit menggunakan pin 8 dan pin 6, yang biasanya terbuka (NO), yang berarti akan terhubung setelah waktu yang ditentukan (5 detik pada percobaan ini) dan terputus sebelum itu. Dengan konfigurasi ini kita dapat mewujudkan pergeseran dari sirkuit bintang ke sirkuit delta. Pada 5 detik pertama relai pertama untuk sirkuit bintang terhubung, dan setelah 5 detik memutus. Relai untuk sirkuit delta terhubung. Hasilnya adalah seperti pada Gambar 8 dan Gambar 9, awalnya akan menjadi sirkuit bintang yang LED bersinar tidak terlalu cerah, setelah 5 detik akan berubah menjadi Gambar 9 ke sirkuit delta yang LED bersinar lebih cerah. Teori ini sesuai dengan Gambar 3 dan Gambar 4.

![Time Circuit Diagram](https://farm6.staticflickr.com/5783/20806250943_4bea87a857_o_d.jpg)

Gambar 7\. Time Circuit Diagram

![Condition in Star Circuit (dim)](https://farm1.staticflickr.com/741/21401068946_130de3cc5d_o_d.jpg)

Gambar 8\. Kondisi di Star Circuit (dim)

![Condition in Delta Circuit (bright)](https://farm1.staticflickr.com/741/21401068946_130de3cc5d_o_d.jpg)

Gambar 9\. Kondisi di Delta Circuit (bright)

## 4\. Simpulan

Simulasi untuk rangkaian ini berhasil dan dapat diimplementasikan untuk membangun motor star-delta nyata. Motor awalnya akan lambat, dan kemudian beberapa detik motor akan lebih cepat. Desain semacam ini digunakan untuk perangkat yang tidak diizinkan untuk memulai dengan daya maksimum dari awal (misalnya motor dapat meledak) karena arus awal v3 lebih besar dari daya normal sehingga arus yang lebih rendah digunakan saat memulai. Tetapi kami ingin menggunakan perangkat ini dalam daya maksimumnya sehingga timer diperlukan untuk mengubah arus ke maksimum setelah melewati tahap awal. Menggunakan relay dan timer dalam hal waktu kita dapat menciptakan kondisi yang berbeda hanya dengan beberapa sirkuit. Sebagai contoh, kita dapat mengatur waktu ketika kita ingin AC menyala atau mati (mesin lain juga).

<div class="video-container"><iframe src="https://www.youtube.com/embed/-ggfhEBfFCc" frameborder="0" allowfullscreen=""></iframe></div>

## Sumber

*   [https://0darkking0.blogspot.com/2018/08/t-phi-network-star-delta-using-relays.html](https://0darkking0.blogspot.com/2018/08/t-phi-network-star-delta-using-relays.html)