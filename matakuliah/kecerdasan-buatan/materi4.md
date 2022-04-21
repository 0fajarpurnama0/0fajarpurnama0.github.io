---
layout: post
title: Representasi Pengetahuan
---
![pengetahuan](https://images.hive.blog/DQmPRJHikzu43r16ZFkrh4yK2hWdKUtTPYzNdWAE2CiP2Ux/0.knowledge-representasion.png)

Pengetahuan adalah sesuatu yang diketahui oleh seseorang seperti ilmu, fakta, dan informasi. Dalam pengertian lain, pengetahuan adalah berbagai gejala yang ditemui dan diperoleh manusia melalui pengamatan akal. Pengetahuan muncul ketika seseorang menggunakan akal budinya untuk mengenali benda atau kejadian tertentu yang belum pernah dilihat atau dirasakan sebelumnya. Contohnya, ketika kita belajar tentang kecerdasan buatan maka kita akan mengetahui tentang kecerdasan buatan sedangkan yang belum pernah mepelejarinya cenderung tidak akan mengetahuinya. Representasi adalah kemampuan untuk mengelola, mendeskripsikan, menggambarkan, dan menjelaskan baik kepada orang lain atau diri sendiri sebagai tolak ukur pemahaman pengetahuan tersebut. Apa yang perlu direpresentasikan?



*   Obyek
*   Kejadian
*   Performa
*   Pengetahuan Meta
*   Fakta
*   Basis Pengetahuan

## Jenis-Jenis Pengetahuan

![jenis jenis pengetahuan](https://images.hive.blog/DQmSddDoYaArZExqrGyVWSoT2mwLt8JiQSDpPWFjegRA5LY/1.types-of-knowledge.png)

Menurut pakar, jenis-jenis pengetahuan:

*   **Deklaratif:** penyebutan dan pernyatakan benar atau salah.
*   **Prosedural:** penyebutan atau penerapan langkah-langkah untuk menghasilkan atau mencapai tujuan.
*   **Meta:** tentang jenis-jenis pengetahuan-pengetahuan lainnya.
*   **Heuristik:** berdasarkan pengalaman dan percobaan dari pada informasi yang sudah ada.
*   **Struktural:** pengelolaan, penataan, dan relasi suatu pengetahuan.





## Hubungan Pengetahuan dengan Kecerdasan

![hubungan pengetahuan dengan robot](https://images.hive.blog/DQmbaDnt8WHdFKiSobXfCT1jggDa7wnDFms6AGZBMFLj79Q/2.relationship-robot.png)

Pada agen cerdas sebelumnya terlihat robot merasakan lingkungan dengan sensor lalu melakukan tindakan. Selain sifat robot, pengetahuan yang dimiliki robot juga akan mempengaruhi tindakan. Sedikit perbedaan pengetahuan saja dapat mengubah tindakan yang dilakukan.



![pengetahuan pada diagram agen cerdas](https://images.hive.blog/DQmYDyJHoLbTFkJbfzF138xtM4A467KPedufbCPZgcjdxbc/3.knowledge-in-the-diagram.png)

Pengetahuan dalam diagram agen cerdas berada ditengah-tengah:

1.  Robot merasakan lingkungan.
2.  Perasaan tersebut akan menjadi pengetahuan.
3.  Robot akan belajar dari pengetahuan tersebeut dengan pengetahuan yang dimiliki sebelumnya.
4.  Robot akan berencana membuat keputusan dan masih tahap pembelajaran.
5.  Robot akan melakukan tindakan dan akan mengamati hasil tindakan tersebut.





## Pendekatan Representasi Pengetahuan

![approaches to knowledge representation](https://images.hive.blog/DQmcNLpxrCE4qomBUhfGDMQKD3JjzMsAZ5SW71w1NTD1F44/4.knowledge-representation-approach.png)

Saat ini pendekatan representasi pengetahuan dibagi menjadi:

*   **Relasi Sederhana:** dapat dibagi menjadi obyek dan ciri-ciri obyeknya.
*   **Turunan:** ciri-ciri obyek dapat diturunkan oleh induknya.
*   **Inferensial**: menggunakan logika.
*   **Prosedural:** terdiri dari langkah-langkah.





## Teknik Dasar Representasi Pengetahuan

### Jaringan Semantik

![semantic knowledge representation](https://images.hive.blog/DQmcPjkXuFTux1e86PTwTdXEXqraZgnUQUWavXVxYq3Nda7/Gambar%2012.%20Contoh%20mindmap%20Web%202.0.png)

Merupakan jaringan relasi yang terdiri dari titik-titik yang dapat dihubungankan dengan garis. Relasi dapat bermacam-macam seperti turunan, simbiosis, struktural, dll. Dapat meninjau kembali teori grafik/graph.



### Bingkai/Frame

Merupakan representasi struktur dan dapat dipecah menjadi bagian/sub struktur. Seperti film dapat dipecah menjadi beberapa frame dimana bingkai-bingkai tersebut dapat diduplikasikan, digabung, dan diola ke satu dengan yang lainnya. Frame representation sederhana dapat berupa 2 kolom slot dengan filternya:

<table border>
<thead>
  <tr>
    <th>Slots</th>
    <th>Filters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Name</td>
    <td>Artificial Intelligence</td>
  </tr>
  <tr>
    <td>Code</td>
    <td>TEK205412</td>
  </tr>
  <tr>
    <td>Semester</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Credit</td>
    <td>2</td>
  </tr>
</tbody>
</table>

### Aturan Produksi

Merupakan aturan sebab akibat, maka jika, dan sebagainya:

*   Jika A maka B.
*   Jika umur diatas 18 tahun maka silahkan masuk.
*   Jika sudah bayar maka silahkan diambil.
*   Jika cuaca hujan maka pakai jas hujan atau payung.

### Logika

Cahaya lebih cepat dari suara. Suara lebih cepat dari angin. Apakah mungkin angin dapat menyalip cahaya? Jawaban secara logis, tidak.

#### Logika Proposisional (Propositional Logics)

Logika proposisional adalah kumpulan beberapa pernyataan deklaratif yang berujung BENAR/TRUE atau SALAH/FALSE:

*   2+2 = 4 (TRUE)
*   2+2 = 5 (FALSE)
*   Simak pernyataan berikut ini! (Bukan Proposisional)
*   a + b = c (Proposisional jika a,b,c diberi nilai. Tidak proposisional jika a,b,c tidak diberi nilai)

Operator Proposisional:

*   OR (∨)
*   AND (∧)
*   Negation/ NOT (¬)
*   Implication / if-then (→)
*   If and only if (⇔).

Tabel Kebenaran:
<table border>
  <thead>
    <tr>
    <th>A</th>
    <th>B</th>
    <th>A ∨ B</th>
    <th>A ∧ B</th>
    <th>¬ A</th>
    <th>A → B</th>
    <th>A ⇔ B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    </tr>
    <tr>
    <td>True</td>
    <td>False</td>
    <td>True</td>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    </tr>
    <tr>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>False</td>
    </tr>
    <tr>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    </tr>
  </tbody>
</table>

#### Logika Orde Pertama (First Order Logic)

First-Order Logic merupakan ekstensi dari Propositional Logic karena propositional logic tidak dapat memproses pernyataan selain benar dan salah seperti "banyak orang sering menunda waktu" dan "anak-anak suka makanan manis". Penambahan dari propositional logic:

*   Obyek: Huruf, Angka, Benda, Variabel, dll.
*   Relasi antar variabel.
*   Fungsi

Kalimat atomic: A dan B bersaudara = Saudara(A,B).

Kalimat kompleks: A adalah sebuah huruf. Obyek = A, Predikat = adalah sebuah huruf.

#### Logika Tidak Pasti (Fuzzy Logic)

Merupakan ekstensi dari logika boolean. Ekstensi tersebut ditentukan oleh pengguna berapa bobot sangat kurang, kurang, cukup, lebih, dan sangat lebih. Selain itu fuzzy logic untuk melogikakan hal-hal yang subyektif seperti cuaca panas. Bila bagi anda cuacanya dingin belum tentu bagi orang lain cuacanya dingin.

<table border>
  <thead>
    <tr>
    <th>Boolean</th>
    <th>Boolean</th>
    <th>Fuzzy</th>
    <th>Fuzzy</th>
    <th>Subjective</th>
    <th>Person A</th>
    <th>Person B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>True</td>
    <td>1</td>
    <td>True</td>
    <td>1</td>
    <td>Hot</td>
    <td>40 C</td>
    <td>33 C</td>
    </tr>
    <tr>
    <td>False</td>
    <td>0</td>
    <td>Little True</td>
    <td>0.75</td>
    <td>Warm</td>
    <td>30 C</td>
    <td>27 C</td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td>Don't Know</td>
    <td>0.5</td>
    <td>Cold</td>
    <td>20 C</td>
    <td>24 C</td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td>Little False</td>
    <td>0.25</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td>False</td>
    <td>0</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
  </tbody>
</table>