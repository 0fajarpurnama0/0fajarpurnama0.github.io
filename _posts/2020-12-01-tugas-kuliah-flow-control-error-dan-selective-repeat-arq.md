---
layout: post
title: Tugas Kuliah Tentang Flow Control dan Selective Repeat ARQ
categories: bachelor
tags: [komunikasi data, komputer, flow control, error, selective repeat arq, detection, correction, tugas kuliah, penulisan ilmiah]
featuredimage: https://cdn.steemitimages.com/DQmf4F2qJHwJgAABxM7uHehKdkeF41HAHqJvhh6zaFRnxoa/Gambar%202.5.b%20%20Explicit%20Request%20Effect%20Correct%20Operation%20animation.gif
description: Tugas kuliah Komunikasi Data menulis essai mengenai flow control, error detection & control, dan selective repeat ARQ.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/12/01/tugas-kuliah-flow-control-error-dan-selective-repeat-arq
---
## Catatan

Ini merupakan tugas S1 saya di mata kuliah Komunikasi Data dimana tugasnya adalah menulis essai mengenai flow control, error detection & control, dan selective repeat ARQ. Selain saya kelompok ini terdiri dari I Gede Ariana, I Made Dwi Angga Pratama, I Putu Arie Pratama, Yulianti Murprayana, I Wayan Alit Wigunawan, I Gusti Made Widiarsana , I Nym Apriana Arta Putra, Muhammad Audy Bazly, I Kadek Agus Riki Gunawan, Muhamad Nordiansyah. Tugas ini tidak pernah dipublikasi dimanapun dan kami sebagai penulis dan pemegang hak cipta melisensi tugas ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama kami sebagai penulis dan memberitahu bahwa versi asli dan terbuka tersedia disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Perkembangan teknologi komputer meningkat dengan sangat cepat, hal ini terlihat pada era tahun 80-an jaringan komputer masih merupakan teka-teki yang ingin dijawab oleh kalangan akademisi, dan pada tahun 1988 jaringan komputer mulai digunakan di universitas-universitas, perusahaan-perusahaan, dan sekarang memasuki era milenium ini terutama WWW (World Wide Web) telah menjadi realitas sehari-hari jutaan manusia di muka bumi ini.

Selain itu, perangkat keras dan perangkat lunak jaringan telah benar-benar berubah, di awal perkembangannya hampir seluruh jaringan dibangun dari kabel koaxial, kini banyak telah diantaranya dibangun dari serat optik (fiber optics) atau komunikasi tanpa kabel.

Dengan berkembangnya teknologi komputer dan komunikasi suatu model komputer tunggal yang melayani seluruh tugas-tugas komputasi suatu organisasi kini telah diganti dengan sekumpulan komputer yang terpisah-pisah akan tetapi saling berhubungan dalam melaksanakan tugasnya, sistem seperti ini disebut jaringan komputer (computer network).

Dua buah komputer dikatakan terinterkoneksi bila keduanya dapat saling bertukar informasi. Betuk koneksinya tidak harus melalui kawat tembaga saja melainkan dapat menggunakan serat optik, gelombang mikro, atau satelit komunikasi.

Dalam suatu komunikasi data, pastinya dilakukan pengiriman paket data melalui suatu medium tertentu, akan selalu terjadi adanya perbedaan antara sinyal yang dikirim dengan sinyal yang diterima. Perbedaan tersebut dapat mengakibatkan adanya error atau kesalahan pada paket data yang dikirim tersebut sehingga data tersebut tidak dapat dibaca dengan baik oleh penerima. Untuk menghindari terjadinya error atau kesalahan pada paket data yang dikirim maka diperlukan adanya deteksi kesalahan (checking error), perbaikan kesalahan (correction error), dan pengendalian kesalahan (control error). Pada error control terdapat tiga metode yang sering dipakai dalam komunikasi data, yaitu stop and wait request, go back N request, dan selective request. Error control meliputi mekanisme-mekanisme sebagai berikut : ACK/NAK, timeout, dan sequence number. Pada error control terjadi prosesproses sebagai berikut: error detection, acknowledgment, etransmission after timeout, dan negative acknowledgment.

### 1.2 Rumusan Masalah

Adapun rumusan masalah yang diangkat dalam makalah ini, adalah sebagai berikut :

1.  Apakah yang dimaksud dengan kontrol aliran (flow control)?
2.  Apakah yang dimaksud dengan deteksi dan koreksi error? serta bagaimana cara meminimalisirnya?
3.  Apakah yang dimaksud dengan Selective Repeat ARQ?

### 1.3 Tujuan

Adapun tujuan dari pembuatan makalah ini adalah, sebagai berikut:

1.  Mampu mendefinisikan pengertian dari kontrol aliran (flow control).
2.  Mampu memberikan definisi mengenai pengertian deteksi dan koreksi error, serta bagaimana cara untuk meminimalisir kesalahan-kesalahan yang terjadi.
3.  Mampu menjelaskan mengenai definisi tentang Selective Repeat ARQ.

### 1.4 Ruang Lingkup Materi

Dalam makalah ini, ruang lingkup yang dibahas oleh penulis hanya sebatas mengenai permasalahan yang di bahas, yaitu sebatas Selective Repeat ARQ dalam suatu jaringan komunikasi data, dan juga untuk memberikan gambaran kepada para pembaca mengenai proses pengendalian kesalahan dalam komunikasi data.

## BAB 2 Pembahasan

Tujuan dilakukan pengontrolan terhadap error adalah untuk menyampaikan frame-frame tanpa error dalam urutan yang tepat ke lapisan jaringan. Teknik yang umum digunakan untuk error control berbasis pada dua fungsi, yaitu:

1.  Error detection, biasanya menggunakan teknik CRC (Cyclic Redundancy Check).
2.  Automatic Repeat Request (ARQ), ketika error terdeteksi pengirim meminta mengirim ulang frame yang terjadi kesalahan.

Sedangkan, error control dibagi menjadi tiga yaitu:

1.  **Manual Error Control**. Misalnya jika kita melakukan kesalahan dalam pengetikan kita koreksi dengan melakukan penghapusan terhadap karakter yang salah misalkan dengan tombol delete atau backspace.
2.  **Echo Checking**. Prosedur yang sama digunakan ketika suatu terminal terhubung dengan remote computer katakanlah dengan menggunakan analog PSTN dan sebuah modem. Di samping tiap karakter yang dimasukkan ditampilkan secara langsung pada terminal display mula-mula ia ditransmisikan ke remote computer. Remote computer tersebut kemudian membaca dan menyimpan karakter dan mentransmisikan ulang ke terminal yang menampilkannya. Jika berbeda dengan apa yang telah dimasukkan user dapat memulai lagi transmisi untuk penghapusan karakter yang salah.
3.  **Automatic Repeat Request**. Terdiri dari idle request dan continuous request. Kita akan membahas lebih dalam continuous request terutama selective repeat.

### 2.1 Kontrol Aliran (Flow Control)

Flow control adalah suatu teknik untuk menjamin bahwa sebuah stasiun pengirim tidak membanjiri stasiun penerima dengan data. Stasiun penerima secara khas akan menyediakan suatu buffer data dengan panjang tertentu. Ketika data diterima, dia harus mengerjakan beberapa poses sebelum dia dapat membersihkan buffer dan mempersiapkan penerimaan data berikutnya.

Bentuk sederhana dari kontrol aliran dikenal sebagai stop and wait, dia bekerja sebagai berikut. Penerima mengindikasikan bahwa dia siap untuk menerima data dengan mengirim sebual poll atau menjawab dengan select. Pengirim kemudian mengirimkan data.

Flow control ini diatur/dikelola oleh Data Link Control (DLC) atau biasa disebut sebagai Line Protocol sehingga pengiriman maupun penerimaan ribuan message dapat terjadi dalam kurun waktu sesingkat mungkin. DLC harus memindahkan data dalam lalu lintas yang efisien. Jalur komunikasi harus digunakan sedatar mungkin, sehingga tidak ada stasiun yang berada dalam kadaan idle sementara stasiun yang lain saturasi dengan lalu lintas yang berkelebihan. Jadi flow control merupakan bagian yang sangat kritis dari suatu jaringan. Berikut ini ditampilkan Time Diagram Flow Control saat komunikasi terjadi pada kondisi tanpa error dan ada error. Mekanisme Flow control yang sudah umum digunakan adalah Stop and Wait dan Sliding window.

![Gambar 2.1  Diagram waktu  flow control saat transmisi tanpa kesalahan (a) dan saat terjadi kehilangan paket dan terjadi kesalahan (b).PNG](https://cdn.steemitimages.com/DQmewkiNDPhxQN5zcydEj2uyX134MynuksrWzVU7E6y1CRK/Gambar%202.1%20%20Diagram%20waktu%20%20flow%20control%20saat%20transmisi%20tanpa%20kesalahan%20(a)%20dan%20saat%20terjadi%20kehilangan%20paket%20dan%20terjadi%20kesalahan%20(b).PNG)

Gambar 2.1 Diagram waktu flow control saat transmisi tanpa kesalahan (a) dan saat terjadi kehilangan paket dan terjadi kesalahan (b)



### 2.2 Deteksi dan Koreksi Error

Sebagai akibat proses-proses fisika yang menyebabkannya terjadinya error pada beberapa media (misalnya, radio) cenderung timbul secara meletup (burst) bukannya satu demi satu. Error yang meletup seperti itu memiliki baik keuntungan maupun kerugian pada error bit tunggal yang terisolasi. Sisi keuntungannya, data komputer selalu dikirim dalam bentuk blok-blok bit. Anggap ukuran blok sama dengan 1000 bit, dan laju error adalah 0,001 per bit. Bila error-errornya independen, maka sebagian besar blok akan mengandung error. Bila error terjadi dengan letupan 100, maka hanya satu atau dua blok dalam 100 blok yang akan terpengaruh, secara rata-ratanya. Kerugian error letupan adalah bahwa error seperti itu lebih sulit untuk dideteksi dan dikoreksi dibanding dengan error yang terisolasi.

#### 2.2.1 Kode – Kode Pengkoreksian Error

Para perancang jaringan telah membuat dua strategi dasar yang berkenaan dengan error. Cara pertama adalah dengan melibatkan informasi redundan secukupnya bersama-sama dengan setiap blok data yang dikirimkan untuk memungkinkan penerima menarik kesimpulan tentang apa karakter yang ditransmisikan yang seharusnya ada. Cara lainnya adalah dengan hanya melibatkan redundansi secukupnya untuk menarik kesimpulan bahwa suatu error telah terjadi, dan membiarkannya untuk meminta pengiriman ulang. Strategi pertama menggunakan kode-kode pengkoreksian error (error-correcting codes), sedangkan strategi kedua menggunakan kode-kode pendeteksian error (error-detecting codes).

Untuk bisa mengerti tentang penanganan error, maka perlu melihat dari dekat tentang apa yang disebut error itu. Biasanya, sebuah frame terdiri dari m bit data (yaitu pesan) dan r redundan, atau check bits. Ambil panjang total sebesar n (yaitu, n = m + r). Sebuah satuan n-bit yang berisi data dan checkbit sering kali dikaitkan sebagai codeword n-bit.

Ditentukan dua buah codeword: 10001001 dan 10110001\. Disini kita dapat menentukan berapa banyak bit yang berkaitan berbeda. Dalam hal ini, terdapat 3 bit yang berlainan. Untuk menentukannya cukup melakukan operasi EXCLUSIVE OR pada kedua codeword, dan menghitung jumlah bit 1 pada hasil operasi. Jumlah posisi bit dimana dua codeword berbeda disebut jarak Hamming (Hamming, 1950). Hal yang perlu diperhatikan adalah bahwa bila dua codeword terpisah dengan jarak Hamming d, maka akan diperlukan error bit tunggal d untuk mengkonversi dari yang satu menjadi yang lainnya.

Pada sebagian besar aplikasi transmisi data, seluruh 2m pesan data merupakan data yang legal. Tetapi sehubungan dengan cara penghitungan check bit, tidak semua 2n digunakan. Bila ditentukan algoritma untuk menghitung check bit, maka akan dimungkinkan untuk membuat daftar lengkap codeword yang legal. Dari daftar ini dapat dicari dua codeword yang jarak Hamming-nya minimum. Jarak ini merupakan jarak Hamming bagi kode yang lengkap.

Sifat-sifat pendeteksian error dan perbaikan error suatu kode tergantung pada jarak Hamming-nya. Untuk mendeteksi d error, anda membutuhkan kode dengan jarak d + 1 karena dengan kode seperti itu tidak mungkin bahwa error bit tunggal d dapat mengubah sebuah codeword yang valid menjadi codeword valid lainnya. Ketika penerima melihat codeword yang tidak valid, maka penerima dapat berkata bahwa telah terjadi error pada transmisi. Demikian juga, untuk memperbaiki error d, anda memerlukan kode yang berjarak 2d + 1 karena hal itu menyatakan codeword legal dapat terpisah bahkan dengan perubahan d, codeword orisinil akan lebih dekat dibanding codeword lainnya, maka perbaikan error dapat ditentukan secara unik.

Sebagai sebuah contoh sederhana bagi kode pendeteksian error, ambil sebuah kode dimana parity bit tunggal ditambahkan ke data. Parity bit dipilih supaya jumlah bit-bit 1 dalam codeword menjadi genap (atau ganjil). Misalnya, bila 10110101 dikirimkan dalam parity genap dengan menambahkan sebuah bit pada bagian ujungnya, maka data itu menjadi 101101011, sedangkan dengan parity genap 10110001 menjadi 101100010\. Sebuah kode dengan parity bit tunggal mempunyai jarak 2, karena sembarang error bit tunggal menghasilkan sebuah codeword dengan parity yang salah. Cara ini dapat digunakan untuk mendeteksi erro-error tunggal.

Sebagai contoh sederhana dari kode perbaikan error, ambil sebuah kode yang hanya memiliki empat buah codeword valid: 0000000000, 0000011111, 1111100000 dan 1111111111\. Kode ini mempunyai jarak 5, yang berarti bahwa code tersebut dapat memperbaiki error ganda. Bila codeword 0000011111 tiba, maka penerima akan tahun bahwa data orisinil seharusnya adalah 0000011111\. Akan tetapi bila error tripel mengubah 0000000000 menjadi 0000000111, maka error tidak akan dapat diperbaiki.

Bayangkan bahwa kita akan merancang kode dengan m bit pesan dan r bit check yang akan memungkinkan semua error tunggal bisa diperbaiki. Masing-masing dari 2m pesan yang legal membutuhkan pola bit n + 1\. Karena jumlah total pola bit adalah 2<sup>n</sup>, kita harus memiliki (n + 1)2<sup>m</sup> ≤ 2<sup>n</sup>. Dengan memakai n = m + r, persyaratan ini menjadi (m + r + 1) ≤ 2<sup>r</sup>. Bila m ditentukan, maka ini akan meletakkan batas bawah pada jumlah bit check yang diperlukan untuk mengkoreksi error tunggal.

Dalam kenyataannya, batas bawah teoritis ini dapat diperoleh dengan menggunakan metoda Hamming. Bit-bit codeword dinomori secara berurutan, diawali dengan bit 1 pada sisi paling kiri. Bit bit yang merupakan pangkat 2 (1,2,4,8,16 dan seterusnya) adalah bit check. Sisanya (3,5,6,7,9 dan seterusnya) disisipi dengan m bit data. Setiap bit check memaksa parity sebagian kumpulan bit, termasuk dirinya sendiri, menjadi genap (atau ganjil). Sebuah bit dapat dimasukkan dalam beberapa komputasi parity. Untuk mengetahui bit check dimana bit data pada posisi k berkontribusi, tulis ulang k sebagai jumlahan pangkat 2\. Misalnya, 11 = 1 + 2 + 8 dan 29 = 1 + 4 + 8 + 16\. Sebuah bit dicek oleh bit check yang terjadi pada ekspansinya (misalnya, bit 11 dicek oleh bit 1, 2 dan 8).

Ketika sebuah codeword tiba, penerima menginisialisasi counter ke nol. Kemudian codeword memeriksa setiap bit check, k (k= 1, 2, 4, 8,....) untuk melihat apakah bit check tersebut mempunyai parity yang benar. Bila tidak, codeword akan menambahkan k ke counter. Bila counter sama dengan nol setelah semua bit check diuji (yaitu, bila semua bit checknya benar), codeword akan diterima sebagai valid. Bila counter tidak sama dengan nol, maka pesan mengandung sejumlah bit yang tidak benar. Misalnya bila bit check 1,2, dan 8 mengalami kesalahan (error), maka bit inversinya adalah 11, karena itu hanya satu-satunya yang diperiksa oleh bit 1,2, dan 8\. Gambar 2.2 menggambarkan beberapa karakter ASCII 7-bit yang diencode sebagai codeword 11 bit dengan menggunakan kode Hamming. Perlu diingat bahwa data terdapat pada posisi bit 3, 5, 6, 7, 9, 10, 11.

![Gambar 2.2  Penggunaan kode Hamming untuk mengkoreksi burst error.png](https://cdn.steemitimages.com/DQmaq8RPtcvY6FbtjMfWUWei671ew6SXXddY9Q71pHifyf2/Gambar%202.2%20%20Penggunaan%20kode%20Hamming%20untuk%20mengkoreksi%20burst%20error.png)

Gambar 2.2 Penggunaan kode Hamming untuk mengkoreksi burst error



Kode Hamming hanya bisa memperbaiki error tunggal. Akan tetapi, ada trick yang dapat digunakan untuk memungkinkan kode Hamming dapat memperbaiki error yang meletup. Sejumlah k buah codeword yang berurutan disusun sebagai sebuah matriks, satu codeword per baris. Biasanya, data akan ditransmisikan satu baris codeword sekali, dari kiri ke kanan. Untuk mengkoreksi error yang meletup, data harus ditransmisikan satu kolom sekali, diawali dengan kolom yang paling kiri. Ketika seluruh k bit telah dikirimkan, kolom kedua mulai dikirimkan, dan seterusnya. Pada saat frame tiba pada penerima, matriks direkonstruksi, satu kolom per satuan waktu. Bila suatu error yang meletup terjadi, paling banyak 1 bit pada setiap k codeword akan terpengaruh. Akan tetapi kode Hamming dapat memperbaiki satu error per codeword, sehingga seluruh blok dapat diperbaiki. Metode ini memakai kr bit check untuk membuat km bit data dapat immune terhadap error tunggal yang meletup dengan panjang k atau kurang.

### 2.3 Selective Repeat ARQ

Selective Repeat atau dikenal juga sebagai Selective-reject. Dengan selective reject ARQ, frame-frame yang akan dikirimkan hanya frame-frame yang mendapat balasan negatif, dalam hal ini disebut SREJ atau frame-frame yang waktunya sudah habis.

Cara selective-reject ARQ dalam memperbaiki kesalahan adalah dengan cara, mulanya bagian transmitter mengirim stream data kontinyu dari frame yang kontinyu, pada sisi penerima data tersebut disimpan dan dilakukan proses CRC. Tapi proses CRC ini berlangsung pada stream data yang kontinyu dari frame yang diterima. Ketika dijumpai frame yang error, penerima mengirim informasi pada sisi pengirim melalui “return channel”. Bagian pengirim kemudian mengambil frame tersebut dari tempat penyimpanan data, lalu dimasukkan dalam antrian transmisi. Ada beberapa poin penting bagi pembaca frame, yang pertama adalah harus ada cara untuk mengidentifikasi frame. Yang kedua adalah harus ada cara yang baik untuk mengetahui frame mendapat balasan positif atau balasan negatif.

Kedua poin penting tersebut bisa di atasi dengan menggunakan angka sekuensial yang dikirim dan yang diterima. Angka sekuensial yang dikirim ada pada pengirim, begitu juga dengan angka sekuensial yang diterima berada pada penerima. Angka sekuensial yang diterima yang dikirim kembali pada sisi pengirim adalah angka sekuensial yang dikirim oleh sisi pengirim dan mendapat balasan positif dari sisi penerima. Ketika sisi penerima mendeteksi kesalahan pada frame, maka sisi penerima akan mengirimkan angka sekuensial yang dikirim bersama frame yang dianggap error. Tentu daja pada akhirnya sisi penerima harus menata kembali frame sesuai urutannya seperti pada sisi pengirim sebelum data diteruskan ke pengguna akhir.

Selective-reject ARQ lebih efisien terhadap Go-Back-N karena mengurangi jumlah retransmisi. Namun selective-reject memerlukan kapasitas penyimpanan data yang lebih besar baik disisi pengirim dan penerima untuk menyimpan frame sampai frame yang rusak diretransmisi. Selain itu disisi penerima juga harus terdapat software yang dapat mengirim frame diluar urutan agar data bisa sampai secara urut pada pengguna akhir. Selective repeat dapat diimplementasikan dengan dua cara:

1.  S menyatakan bahwa frame telah diterima dengan benar dan P menentukan dari sequence ACK yang diterima bahwa sebuah frame telah hilang (implicit retransmisi)
2.  S mengembalikan pernyataan negative khusus dikarenakan ada frame hilang dari sequence (explicit request)

Dari kedua event tersebut kejadian frame diterima di luar sequence, S menahan frame ini di saluran penerima sampai sequence frame masuk berikutnya diterima. Pada kasus implicit retransmission dengan asumsi semua frame ACK diterima dengan benar dapat dijelaskan sebagai berikut (Gambar 2.3):

![Gambar 2.3  Implicit Retransmission corrupted I-frame.png](https://cdn.steemitimages.com/DQmUzXrWpXBUtsbwGTzBQ2ZWo1bo5cHy8nhHLFPGBKAKxw6/Gambar%202.3%20%20Implicit%20Retransmission%20corrupted%20I-frame.png)

![Gambar 2.3.b  Implicit Retransmission corrupted I-frame animation.gif](https://cdn.steemitimages.com/DQmaD9RPqGrjCQcRxGUyNhp6SkbsDXqd73eE9ehwv7Z8tiV/Gambar%202.3.b%20%20Implicit%20Retransmission%20corrupted%20I-frame%20animation.gif)

Gambar 2.3 Implicit Retransmission corrupted I-frame



1.  Diasumsikan I-frame N + 1 rusak (hilang)
2.  S mengembalikan frame ACK untuk tiap-tiap I-frame yang telah diterima dengan benar.
3.  S mengembalikan frame ACK untuk I-frame N, N + 2, N + 3.
4.  Pada penerimaan ACK untuk I-frame N + 2, P menngetahui bahwa frame N + 1 tidak diterima.
5.  Untuk dapat mengetahui bahwa lebih dari 1 I-frame yang rusak, P memasukkan retransmission state pada frame yang hilang (tidak diterima).
6.  Dalam kondisi ini, transmisi frame baru ditunda sampai frame yang tidak diterima ditransmisikan ulang.
7.  P menghilangkan I-frame N + 2 pada daftar retransmisi dan mengirimkan ulang I-frame N + 1 sebelum mentransmisikan frame N + 5.
8.  Dalam penerimaan I-frame N + 1, isi dari frame antrian pada link receive list dikirimkan oleh S ke LS_user pada urutan yang benar.

Sedangkan pada implicit retransmission dengan asumsi bahwa semua I-frame diterima dengan benar kecuali ACK frame N dapat dijelaskan sebagai berikut.

![Gambar 2.4  Implicit Retransmission corrupted ACK-frame.png](https://cdn.steemitimages.com/DQmZq8uHe5Jt6xNS2Y8sCW5TTqHyfvQ6rK4zBrBNZy2qvdT/Gambar%202.4%20%20Implicit%20Retransmission%20corrupted%20ACK-frame.png)

![Gambar 2.4.b  Implicit Retransmission corrupted ACK-frame animation.gif](https://cdn.steemitimages.com/DQmS54faN2fVENG1VJLFKqL68N1X4ukhb3arn4xeMXXXEea/Gambar%202.4.b%20%20Implicit%20Retransmission%20corrupted%20ACK-frame%20animation.gif)

Gambar 2.4 Implicit Retransmission corrupted ACK-frame



1.  Pada penerimaan ACK frame N + 1 P mengetahui bahwa I-frame N masih menunggu pernyataan telah diterima dengan benar. Jadi P mentransmisikan I-frame N.
2.  Saat penerimaan I-frame N yang diretransmisi S menentukan dari sequence variable bahwa frame tersebut telah diterima dengan benar dan oleh karena itu merupakan sebuah duplikat.
3.  S membuang frame tapi mengembalikan ACK frame untuk menggantikannya untuk memastikan P menghilangkan frame dari daftar retransmisi.

Operasi di atas bergantung pada penerimaan frame ACK yang berhubungan dengan frame-frame berikutnya untuk menginisiasi retransmisi frame sebelumnya yang rusak. Usaha yang lain adalah dengan menggunakan explicit negative acknowledgment frame untuk meminta trasnmisi ulang frame yang error. Negative acknowledgment tersebut dikenal dengan selective reject. Pada explicit request dengan asumsi bahwa acknowledgments hilang dalam perjalanan dapat dijelaskan sebagai berikut (lihat Gambar. 2.5 di bawah ini).

![Gambar 2.5  Explicit Request Effect Correct Operation.png](https://cdn.steemitimages.com/DQmQvNWLbYb2UEcY9pJFFALFvTQii5SLYy3ze4pU1mv6pK7/Gambar%202.5%20%20Explicit%20Request%20Effect%20Correct%20Operation.png)

![Gambar 2.5.b  Explicit Request Effect Correct Operation animation.gif](https://cdn.steemitimages.com/DQmf4F2qJHwJgAABxM7uHehKdkeF41HAHqJvhh6zaFRnxoa/Gambar%202.5.b%20%20Explicit%20Request%20Effect%20Correct%20Operation%20animation.gif)

![Gambar 2.5.c  Explicit Request Effect Correct Operation ack-frame.gif](https://cdn.steemitimages.com/DQmVvw4DNQ66avMgrBQVdi44oPPbb5cV6gZqNNF97Pbybp8/Gambar%202.5.c%20%20Explicit%20Request%20Effect%20Correct%20Operation%20ack-frame.gif)

Gambar 2.5 Explicit Request Effect Correct Operation



1.  Mula-mula sebuah ACK frame menyatakan telah diterima semua frame di retransmission list termasuk I-frame dengan sequence number yang dimiliki ACK
2.  Asumsikan I-frame N + 1 rusak.
3.  S mengembalikan sebuah ACK frame untuk I-frame N
4.  Ketika S menerima I-frame N + 2 S mengetahui bahwa I-frame N + 1 hilang jadi S mengirim NAK frame yang mengandung identifier untuk I-frame N + 1 yang hilang tersebut.
5.  Dalam penerimaan NAK N + 1, P menterjemahkan NAK N + 1 dan saat itu S masih menunggu I-frame N + 1 sehingga P mentransmisikan ulang I-frame N + 1.
6.  Ketika S mengirim NAK frame S memasukkan retransmission state.
7.  Ketika dalam retransmission state pengembalian ACK frame ditunda.
8.  Saat penerimaan I-frame N + 1 S meninggalkan retransmission state dan melanjutkan pengembalian ACK frame.
9.  N + 4 mengakui bahwa semua frame sampai I-frame N + 4 telah diterima dengan benar termasuk frame N + 4.
10.  Timer digunakan dengan masing-masing NAK frame untuk memastikan bahwa suatu frame rusak akan ditransmisikan ulang.

## BAB 3 Penutup

### 3.1 Kesimpulan

Adapun kesimpulan yang dapat ditarik dari makalah ini, adalah sebagai berikut:

1.  Tujuan dilakukan pengontrolan terhadap error adalah untuk menyampaikan frame-frame tanpa error dalam urutan yang tepat ke lapisan jaringan. Teknik yang umum digunakan untuk error control berbasis pada dua fungsi, yaitu : Error detection dan Automatic Repeat Request (ARQ).
2.  Dengan menggunakan metode selective repeat maka frame data dapat dikirim dengan tingkat efisiensi yang tinggi karena jika terjadi error pada saat pengiriman maka hanya frame yang mengalami error yang akan diretransmisi sehingga dapat mengurangi jumlah frame yang diretransmisi. Berbeda dengan metode go back N yang meretransmisikan frame mulai dari frame yang terjadi error hingga frame yang selanjutnya.
3.  Tapi jika kita menggunakan metode selective repeat, kita membutuhkan kapasitas penyimpanan yang lebih besar untuk menyimpan retransmission state dan receive list. Selain itu juga dibutuhkan software khusus untuk mengurutkan frame-frame yang telah diterima pada penerima.

### 3.2 Usul dan Saran

Setelah penulis membuat makalah ini, maka usul dan saran yang dapat penulis sarankan. Dalam pengiriman paket data melalui suatu medium tertentu, akan selalu terjadi adanya perbedaan antara sinyal yang dikirim dengan sinyal yang diterima. Perbedaan tersebut dapat mengakibatkan adanya error atau kesalahan pada paket data yang dikirim tersebut sehingga data tersebut tidak dapat dibaca dengan baik oleh penerima. Untuk menghindari terjadinya error atau kesalahan pada paket data yang dikirim maka diperlukan adanya deteksi kesalahan (checking error), perbaikan kesalahan (correction error), dan pengendalian kesalahan (control error). Maka hendaknya pembaca mampu mengenali serta mengetahui kesalahan-kesalahan yang sering terjadi dalam suatu komunikasi data.

## Daftar Pustaka

*   ….., 2008\. Laporan Selective Repeat. Terdapat di [http://www.scribd.com/doc/23302439/laporan-selektif-repeat](http://www.scribd.com/doc/23302439/laporan-selektif-repeat) (diakses tanggal 20 April 2012).
*   ….., 2008\. Makalah Data Link Layer. Terdapat di [http://www.scribd.com/doc/24613367/Makalah-Data-Link-Layer](http://www.scribd.com/doc/24613367/Makalah-Data-Link-Layer) (diakses tanggal 20 April 2012).
*   ….., 2011\. Tugas Komunikasi Data : Teknik Encoding, Pendeteksi Error, Automatic Repeat Request (ARQ). Terdapat di [http://catatan-yushiku.blogspot.com/2011/01/tugas-komunikasi-data-teknik-encoding.html](http://catatan-yushiku.blogspot.com/2011/01/tugas-komunikasi-data-teknik-encoding.html) (diakses tanggal 20 April 2012).
*   ….., 2012\. Selective_Repeat_ARQ. Terdapat di http://en.wikipedia.org/wiki/Selective_Repeat_ARQ (diakses tanggal 20 April 2012).

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-xykpopw?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-xykpopw?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/12/01/tugas-kuliah-flow-control-error-dan-selective-repeat-arq](https://0fajarpurnama0.github.io/bachelor/2020/12/01/tugas-kuliah-flow-control-error-dan-selective-repeat-arq)
*   [https://0fajarpurnama0.medium.com/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-3f7070beceb](https://0fajarpurnama0.medium.com/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-3f7070beceb)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-kuliah-flow-control-error-dan-selective-repeat-arq](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/tugas-kuliah-flow-control-error-dan-selective-repeat-arq)
*   [https://blurt.buzz/blurtindonesia/@fajar.purnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq?referral=fajar.purnama](https://blurt.buzz/blurtindonesia/@fajar.purnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/12/tugas-kuliah-tentang-flow-control-dan.html](https://0darkking0.blogspot.com/2020/12/tugas-kuliah-tentang-flow-control-dan.html)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/129-tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/129-tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq)
*   [https://steemit.com/indonesia/@fajar.purnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq](http://0fajarpurnama0.weebly.com/blog/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq)
*   [https://read.cash/@FajarPurnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-37721d3b](https://read.cash/@FajarPurnama/tugas-kuliah-tentang-flow-control-dan-selective-repeat-arq-37721d3b)