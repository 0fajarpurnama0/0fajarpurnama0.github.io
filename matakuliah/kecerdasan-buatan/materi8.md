---
layout: post
title: Konsep Dasar Algoritma Genetika
---
![natural selection evolution](https://images.hive.blog/DQmPTog8uEitrUgK2n3D7LEFpQdSLa8bUcGKWenw7PJY5Ee/0.natural-selection-evolution.png)

Algoritma Genetika merupakan algoritma yang terinspirasi berdasarkan teori (Natural Selection and Evolution) seleksi alam oleh Charles Darwin. John Holland mengenalkan algoritma genetika pada tahun 1975 bahwa alampun telah memiliki algoritma untuk mencari makhluk yang tangguh. Setelah itu, ditemukan bahwa algoritma itu pun dapat diterapkan pada masalah-masalah umum termasuk masalah-masalah komputer.

## Latar Belakang

Seleksi alam memiliki proses seleksi, perkembang biakan, mutasi, dan diulang:

### Seleksi

![natural selection](https://images.hive.blog/DQma8aGXwU5BBPEJT2JhZoG6Q48fvQZbZxAbp9ontieJXTk/1.selection.png)

Seleksi merupakan proses penentuan species yang akan bertahan. Mereka yang bertahan adalah mereka yang menang. Kemenangan dapat ditentukan oleh banyak faktor, contohnya:

* kekuatan
* kecerdasan
* fleksibelitas
* tingkah laku
* ketekunan
* dll

### Perkembang Biakan

![cross over](https://images.hive.blog/DQmesbgcSuDJ6WBdim4otQgCrp1SwiMRtR6keu1jAmY9KCE/2.cross-over.png)


Mereka yang bertahan berhak untuk meneruskan gennya ke generasi berikutnya yaitu membuat keturunan atau proses perkembang biakan. Setiap makhluk memiliki kromosom yang terdiri dari banyak gen. Setelah sepasang makhluk hidup melakukan perkembang biakan maka secara acak gen dari sepsasang makhluk hidup tersebut akan diwariskan oleh keturunannya.

### Mutasi

![mutation](https://images.hive.blog/DQmYwFwnFkMF2rBSJFYkH253bFRSVWJBCY1cnB3hMeu8ta2/3.mutation.png)

Secara acak beberapa gen akan bermutasi sebelum dihasilkannya keturunan untuk menjaga keanekaragaman.

### Diulang

Proses akan terus berulang sehingga gen yang bertahan adalah gen yang dibutuhkan untuk bertahan hidup.

## Contoh Penerapan Jalur Terpendek

Proses seleksi alam dan evolusi dapat diimplementasikan ke algoritma seperti algoritma genetika. Saya sendiri belum tahu apakah algoritma genetika effisien seperti algoritma lainnya. Namun saya yakin algoritma genetika effisien jika variabelnya sangat banyak karena seleksi alam sendiri dijalankan pada populasi dunia yang sangat besar dan menurut pakar effisien.

## Menentukan atau Membuat Populasi

![generate population](https://images.hive.blog/DQmRZAxJSr8PXZBNpMCUo11AXjjNTS9yvjeC37Cvs1zzujt/4.generate-population.png)

Pada alam populasi memang sudah ada tetapi pada algoritma populasi belum ada sehingga harus ditentukan berdasarkan situasi dan kondisi atau dibuat secara acak. Pada contoh penerapan mencari jalur terpendek populasi dibuat yaitu beberapa metode atau solusi acak untuk mencapai tujuan. Masing-masing solusi bagaikan kromosom dan pada solusi masing-masing rute yang diambil bagaikan gen.

## Penentuan Fitness Score

![determine fitness score](https://images.hive.blog/DQmSRgGjUG3rmMA6BaCVmpKBNFxa7rLTba1h9D8AAi4f4qH/5.determine-fitness-score.png)

Pada makhluk hidup, fitness score merupakan kemampuan makhluk hidup seperti kekuatan, kecerdasan, dan tingkah laku. Pada solusi jalur adalah efisiensi, waktu, dan/atau kependekan jalur yang diambil. Fitness score untuk hal ini ditentukan oleh pembuat program atau berdasarkan literasi.

## Seleksi Solusi

![selection based on threshold](https://images.hive.blog/DQmTTess8zC8hDj9TJA6JFPhxWL9K4bSdV1ReNuo855F9Bz/6.selection-based-on-threshold.png)


Alam menentukan proses seleksi yaitu kriteria-kriteria makhluk hidup yang layak untuk bertahan hidup. Pada algoritma genetika, pembuat program yang menentukannya seleksi yaitu kriteria solusi yang layak untuk lanjut proses. Contohnya pada penerapan jalur terpendek kriteria misalnya solusi yang membutuhkan kurang dari beberapa jam untuk mencapai tujuan, atau kurang beberapa jarak, atau kriteria lainnya.

![cross over mutation](https://images.hive.blog/DQmPAr5u43aoC33NHpdQE1HtNkCjFvAG7C1VtqhhuX5zKHc/7.cross-over-mutation.png)

## Perkembang Biakan Solusi

Jika perkembang biakan pada makhluk hidup adalah secara acak menurunkan gen dari masing-masing pasangan, pada contoh algoritma ini adalah penurunan solusi. Pertama, solusi dibuat pasangan. Kedua, rute yang dilewati diwariskan menghasilkan solusi baru. Proses penentuan pasangan dan pewariskan bisa acak atau dapat dimodifikasi oleh pembuat program berdasarkan kebutuhan.

## Mutasi Solusi

Pada perkembang biakan mutasi terjadi agar menjaga keaneka ragaman. Pada algoritma sama yaitu agar tidak sama terus dengan solusi-solusi sebelum yang akan berpotensi infinite loop atau perulangan tidak terbatas. Mutasi pada contoh ini adalah beberapa rute diacak.

## Perulangan atau Training

```
repeat training();
until path_cost < goal;
```

Seleksi alam dan evolusi selalu terjadi dan diulang terus. Begitu halnya juga dengan algoritma dimana proses diulang terus biasanya disebut training pada machine learning. Bedanya, programmer yang menentukan kondisi kapan algoritma berakhir seperti misalnya jarak sudah kurang dari yang diharapkan atau waktu sudah kurang dari yang diharapkan.