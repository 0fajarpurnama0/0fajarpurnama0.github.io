---
layout: post
title: Algoritma Pencarian
---
![searching](https://images.hive.blog/DQmUDHHSB5DsaygSXtrANcpW2PkYQojzHc3GJCnn1F96hmc/0.searching.png)

Pencarian adalah suatu proses untuk menemukan sesuatu. Pencarian tidak hanya mencari benda, tetapi dapat berupa pencarian penyelesaian masalah, pencarian ongkos terkecil, pencarian jalur tenyaman, dan lain-lain dengan tujuan yang sama yaitu mencapai tujuan. Beberapa algoritma pencarianpun berkembang dan berikut beberapa istilah yang sering disebutkan dalam algoritma pencarian:



*   **Search Space:** Ruang pencarian mewakili satu set solusi yang mungkin, yang mungkin dimiliki suatu sistem.
*   **Start State:** Kondisi suatu agen saat memulai pencarian.
*   **Goal Test:** Fungsi untuk menguji apakah tujuan telah tercapai atau belum.
*   **Search Tree:** Sebuah representasi pohon dari masalah pencarian.
*   **Actions:** Daftar isi beberapa aksi yang dapat dilakukan.
*   **Transition Model:** Deskripsi tentang apa yang dapat dilakukan setiap tindakan.
*   **Path Cost:** Ini adalah fungsi yang menetapkan ongkos numerik untuk setiap jalur.
*   **Solution:** Ini adalah urutan tindakan yang mengarah dari node awal ke node tujuan.
*   **Optimal Solution:** Jika suatu solusi memiliki ongkos terendah di antara semua solusi.
*   **Completeness:** Sebuah algoritma pencarian dikatakan lengkap jika menjamin untuk mengembalikan solusi jika setidaknya ada solusi untuk setiap input acak.
*   **Optimality:** Jika solusi yang ditemukan untuk suatu algoritma dijamin menjadi solusi terbaik (biaya jalur terendah) di antara semua solusi lainnya, maka solusi untuk tersebut dikatakan sebagai solusi optimal.
*   **Time Complexity:** Kompleksitas waktu adalah ukuran waktu bagi suatu algoritma untuk menyelesaikan tugasnya.
*   **Space Complexity:** Ini adalah ruang penyimpanan maksimum yang diperlukan pada setiap titik selama pencarian, sebagai kompleksitas masalah.

## Jenis Algoritma Pencarian

![blind-dicerning-search](https://images.hive.blog/DQmdGoEfTqnnA4npuxVQepC1anzQ1nykGbHprvNA7VRPFrh/1.blind-dicerning-search.png)

Jenis algoritma pencarian secara umum dapat dibagi menjadi dua yaitu Uninformed atau Blind Search dan Informed atau Dicerning Search. Dalam Bahasa Indonesia dapat diterjemahkan menjadi pencarian tidak diberi tahu dan pencarin yang diberi tahu, pencarian buta dan pencarian mengenal, pencarian tanpa diarahkan dan pencarian diarahkan, atau pencarian dengan petunjuk atau pencarian dengan petunjuk.



## Uninformed Search

### Breadth First Search

![breadth first search](https://images.hive.blog/DQmXhuGQ8Y4EkaBtKVXx6jSjP5maEHUdcQmJedvvmCxhXWY/2.breadth-first-search.png)

Breadth artinya melebar, disini induknya dulu baru ke anak-anaknya.



### Depth First Search

![depth first search](https://images.hive.blog/DQmUvroDpNeVPiFQgrj6xqaSPUmpXa4WAYS4Hh9aMqkrbhw/3.depth-first-search.png)

Depth artinya mendalam, disini 1 keluarga dulu induk dan anak-anaknya baru ke keluarga berikutnya.



### Depth Limited Search

![depth limited search](https://images.hive.blog/DQmRCF974v51zRmN5UCd4RvBoa23tsN2udNwkhYJmMC7jRo/4.depth-limited-search.png)

Kedalamannya dibatasi contohnya kita tidak akan menginterogasi anak-anaknya.



### Uniform Cost Search

![uniform cost search](https://images.hive.blog/DQmWZACd83hciu3tJSSQhyPNEKBc1rGBfLJPPkfq7Y1fnjj/5.uniform-cost-search.png)

Dipilih jalur terpendek terlebih dahulu dan selanjutnya.



### Bidirectional Search

![bidirectional search](https://images.hive.blog/DQmWaoEdZq9F68bSLdND5hUQidh59uHYJQUwfcCr6cP9Gm7/7.bidirectional-search.png)

Bila terdapat multi-processing maka dapat melakukan 2 pencarian sekaligus.



## Informed Search

### Best First Search

![best first search](https://images.hive.blog/DQmehfQvHKckQJ5DwCPjyhFvJoLP5pXuXma4wd7J5nRnntB/8.tree-null.png)

Diketahui peta jalur dari Jalan Bulu Indah ke Rektorat UNUD.



![best first search](https://images.hive.blog/DQmWogskdE27uMYsdU8Ut5bVwTtsVDi9QpE2bFqCMz31xiy/9.tree-heuristic-cost.png)

Diketahui jarak vektor masing-masing jalan ke Rektorat UNUD



![best first search](https://images.hive.blog/DQmXXRVXTRZeRQiPTp7bUJULquujChfYCBqPPe3MM2GAtyo/10a.best-first-search.png)

Dibuka dan dimulai dari titik awal JL Bulu Indah.



![best first search](https://images.hive.blog/DQmdYESJ4aPtx3cAKriwfUoXi1qZouXXG1QgL2ZmvVA5hU1/10b.best-first-search.png)

Titik awal ditutup dan dibuka titik berikutnya.



![best first search](https://images.hive.blog/DQmWzPyfgNoGDSUvoHK9YVsrEVDMgKGQqtckVFq5ooLuPsm/10c.best-first-search.png)

Titik dengan vektor terdekat ditutup dan dibuka titik lanjutannya.



![best first search](https://images.hive.blog/DQmQbgxMy1CuEDEwT8WmSWLdBusmBzDSsmP4Uz8NwqTSFf6/10d.best-first-search.png)

Titik yang baru dibuka tetap dibanding dengan titik yang masih dibuka lalu ditutup titik dengan jarak vektor terkecil.



![best first search](https://images.hive.blog/DQmcYiXmdHAC9aS6QFKec8CgRKDwEZwo6fURGoH9xVT3Fxw/10e.best-first-search.png)

Proses terus diulang, dan akhirnya jalur ditentukan



### A First Search

![each path cost](https://images.hive.blog/DQmfD9qJNnvYRKwNeH5kk3x25fQnW78TCNBZeqAXkqkwXuu/11.tree-each-path-cost.png)

Kelemahan dari Best First Search adalah tidak mempertimbangkan ongkos antar jalan. Contohnya, bagaimana kalau terjadi macet di Imam Bonjol? Walaupun secara vektor merupakan jarak terdekat, tetapi melewati jalur tersebut akan memakan waktu yang paling lama.



![A first search](https://images.hive.blog/DQmXXRVXTRZeRQiPTp7bUJULquujChfYCBqPPe3MM2GAtyo/12a.A-first-search.png)

Oleh karena itu A First Search juga mempertimbangkan ongkos masing-masing jalur dengan cara yang hampir sama dengan Best First Search yaitu open pada titik awal.



![A first search](https://images.hive.blog/DQmdu4hhfSe6QF7W3p91J85RA7RPvqPog2NaxibBzd9Bgjb/12b.A-first-search.png)

Close titik awal dan open titik-titik berikutnya.



![A first search](https://images.hive.blog/DQmZnQnwQbePGS2sCztmNonCXqkJD4ydJNvdE18GMkytrCi/12c.A-first-search.png) ![A first search](https://images.hive.blog/DQmeGvNXJQHNGDkxgPn8zkgnVYoefJEq1sGvQB7nBzRiYQt/12d.A-first-search.png) ![A first search](https://images.hive.blog/DQmZ7oLNr8xkh2dUzUwTorXJcaFyHF2F4in1pgpTswqQb5r/12e.A-first-search.png) ![A first search](https://images.hive.blog/DQmUQ6mLr1VxkUKB4tMherBbHNFVbrf2p65AiFeNDU887KR/12f.A-first-search.png)

Perbedaannya ongkos untuk mencapai titik tersebut ditambahkan tetapi tetap hasil terkecil dipilih yaitu tidak melewati Imam Bonjol karena macet.