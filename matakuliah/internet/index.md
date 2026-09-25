---
layout: post
title: Internet
description: Kumpulan matakuliah tentang Internet.
---

# Modul 1: Kontraktor Jalan Raya Digital (ISP & Infrastruktur)

Bayangkan Anda memiliki mobil sport super cepat, namun garasi Anda berada di tengah hutan tanpa akses jalan raya. Mobil tersebut tidak akan bisa membawa Anda ke mana-mana. Di dunia digital, "mobil sport" adalah komputer atau ponsel pintar Anda, dan pihak yang bertugas membangun jalan aspal dari garasi Anda menuju jalan tol global adalah **ISP (Internet Service Provider)**.

ISP bukanlah pembuat internet, melainkan penyedia gerbang tol dan infrastruktur fisik (kabel, menara, satelit) yang memungkinkan data Anda menyeberangi lautan dan benua.

### 1. Hierarki Jalan Tol: Dari Gang Rumah ke Kabel Bawah Laut

Tidak semua ISP itu sama. Infrastruktur internet terbagi menjadi beberapa tingkatan (Tier) yang bekerja sama untuk mengirimkan data secara global.

<div class="mermaid">
flowchart TD
    A[Perangkat Anda] -->|WiFi/Kabel LAN| B(Router/Modem Rumah)
    B -->|Koneksi Lokal| C[ISP Lokal / Tier 3]
    C -->|Kabel Serat Optik| D[ISP Nasional / Tier 2]
    D -->|Gerbang Internasional| E((ISP Global / Tier 1))
    E <==>|Kabel Bawah Laut Antar Benua| F((ISP Global Negara Tujuan))
    F --> G[Server Tujuan]

    style A fill:#e1f5fe,stroke:#01579b
    style C fill:#fff3e0,stroke:#e65100
    style D fill:#ffe0b2,stroke:#ef6c00
    style E fill:#ffcc80,stroke:#f57c00
    style F fill:#ffcc80,stroke:#f57c00
    style G fill:#e8f5e9,stroke:#1b5e20
</div>

* **Tier 3 (Jalan Lingkungan):** ISP lokal yang langsung berhadapan dengan konsumen (seperti Indihome, First Media, atau provider seluler lokal). Mereka menyewa "jalan" dari perusahaan yang lebih besar.
* **Tier 2 (Jalan Provinsi):** Penyedia jaringan nasional yang menghubungkan berbagai kota dan pulau. Di Indonesia, infrastruktur seperti *Palapa Ring* (jaringan kabel serat optik raksasa) menjadi tulang punggung bagi jalan provinsi ini.
* **Tier 1 (Jalan Tol Antar-Benua):** Perusahaan raksasa global yang memiliki kabel serat optik di dasar samudra (Submarine Cables). Merekalah jalan raya utama yang menghubungkan benua Asia, Amerika, Eropa, dan lainnya.

### 2. Ilustrasi Visual: Menghubungkan Pulau ke Dunia

Berikut adalah ilustrasi topologi dasar bagaimana rumah Anda terhubung ke "awan" internet melalui berbagai rintangan geografis.


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="auto">
  <!-- 1. KONEKSI LINES (Drawn first so they stay in the background) -->
  <g id="koneksi-lines">
    <!-- Sinyal dari Rumah ke Tower -->
    <line x1="90" y1="160" x2="160" y2="160" stroke="#e67e22" stroke-width="3" stroke-dasharray="4,4"/>
    <text x="125" y="150" font-family="Arial" font-size="10" fill="#e67e22" text-anchor="middle">Sinyal / Kabel</text>
    <!-- Kabel dari Tower ke Fiber -->
    <line x1="200" y1="160" x2="280" y2="150" stroke="#e67e22" stroke-width="3" stroke-dasharray="4,4"/>
  </g>
  <!-- 2. RUMAH / CLIENT -->
  <g transform="translate(30, 100)">
    <!-- Bangunan Utama -->
    <rect x="0" y="40" width="60" height="50" fill="#4a90e2" rx="4"/>
    <!-- Atap -->
    <polygon points="-10,40 30,0 70,40" fill="#357abd"/>
    <!-- Pintu -->
    <rect x="20" y="60" width="20" height="30" fill="#fff"/>
    <text x="30" y="110" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Rumah</text>
  </g>
  <!-- 3. TOWER / BTS -->
  <g transform="translate(160, 80)">
    <polygon points="20,0 0,80 40,80" fill="#95a5a6"/>
    <line x1="0" y1="20" x2="40" y2="20" stroke="#7f8c8d" stroke-width="2"/>
    <line x1="5" y1="40" x2="35" y2="40" stroke="#7f8c8d" stroke-width="2"/>
    <line x1="10" y1="60" x2="30" y2="60" stroke="#7f8c8d" stroke-width="2"/>
    <circle cx="20" cy="0" r="5" fill="#e74c3c"/>
    <text x="20" y="105" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Menara ISP</text>
  </g>
  <!-- 4. KABEL FIBER (Bawah Laut) -->
  <g transform="translate(280, 150)">
    <path d="M 0 0 Q 50 -30 100 0 T 200 0" fill="none" stroke="#2ecc71" stroke-width="6" stroke-dasharray="5,5"/>
    <text x="100" y="25" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Kabel Fiber (Bawah Laut)</text>
  </g>
  <!-- 5. CLOUD / INTERNET -->
  <g transform="translate(480, 70)">
    <!-- Shadow Cloud -->
    <path d="M 30 40 a 20 20 0 0 1 -15 -35 a 30 30 0 0 1 55 -10 a 25 25 0 0 1 20 45 z" fill="#bdc3c7" opacity="0.8"/>
    <!-- Main Cloud -->
    <path d="M 25 35 a 20 20 0 0 1 -15 -35 a 30 30 0 0 1 55 -10 a 25 25 0 0 1 20 45 z" fill="#ecf0f1"/>
    <text x="45" y="25" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2c3e50">Internet</text>
  </g>
</svg>


### 3. Kendaraan dan Jalur yang Berbeda

ISP menawarkan berbagai jenis "kendaraan" atau media transmisi untuk terhubung ke jalan utama ini. Masing-masing memiliki kelebihan dan kekurangannya sendiri.

| Jenis Akses (Jalan) | Analogi Fisik | Kecepatan & Stabilitas | Cocok Untuk... |
| --- | --- | --- | --- |
| **Fiber Optik** | Kereta Cepat Shinkansen (Menggunakan cahaya) | Sangat Cepat & Stabil. Tidak terpengaruh cuaca. | Rumah, kantor, main *game*, *streaming* 4K. |
| **Seluler (4G/5G)** | Taksi Terbang (Menggunakan gelombang radio) | Cepat, tapi bergantung pada jarak dari menara & cuaca. | Mobilitas tinggi, akses internet di jalan. |
| **Satelit (VSAT)** | Helikopter Logistik (Dikirim dari luar angkasa) | Cukup cepat, tapi ada jeda (*latency*) yang tinggi karena jarak satelit jauh. | Daerah pelosok, lepas pantai, pegunungan yang tidak terjangkau kabel. |
| **Kabel Tembaga (DSL)** | Jalan Berbatu (Teknologi lama) | Lambat dan mudah terganggu jika jaraknya terlalu jauh dari sentral. | Kebutuhan dasar, kini mulai banyak ditinggalkan. |

> **Mitos vs Fakta:** Banyak yang mengira satelit membuat internet kita cepat. Faktanya, 99% lalu lintas data internet antar-benua di dunia saat ini dialirkan melalui **kabel serat optik di dasar laut**, bukan satelit. Satelit Starlink sekalipun pada akhirnya harus memancarkan kembali sinyalnya ke stasiun bumi yang terhubung ke kabel fiber bawah laut.

# Modul 2: Sistem Alamat dan Navigasi Digital (IP Address & Router)

Setelah infrastruktur fisik (jalan raya dan kabel) berhasil dibangun oleh ISP, tantangan berikutnya adalah memastikan data yang dikirim tidak tersasar. Di dunia nyata, Anda tidak bisa mengirim paket hanya dengan menulis "Tolong kirim ke Budi". Anda membutuhkan kode pos, nama jalan, dan nomor rumah yang spesifik.

Di dalam ekosistem internet, sistem penamaan dan navigasi ini dikendalikan oleh dua elemen vital: **IP Address** sebagai alamat rumah, dan **Router** sebagai petugas navigasi atau polisi lalu lintas.

### 1. Anatomi Alamat Digital (IP Address)

Internet Protocol (IP) Address adalah deretan angka unik yang diberikan kepada setiap perangkat keras yang terhubung ke jaringan. Jika perangkat Anda tidak memiliki IP Address, ia tidak akan pernah bisa menerima atau mengirim data.

Secara konseptual, alamat IP terbagi menjadi dua bagian utama yang bekerja persis seperti alamat fisik:

* **Network ID (Identitas Jaringan):** Berfungsi seperti nama jalan atau kode pos. Ini memberitahu sistem di area mana perangkat tersebut berada.
* **Host ID (Identitas Perangkat):** Berfungsi seperti nomor rumah yang spesifik di jalan tersebut.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="auto">
<!-- Title -->
<text x="300" y="40" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#2c3e50">Anatomi IPv4 (Contoh: 192.168.1.15)</text>
<!-- IP Blocks -->
<g transform="translate(60, 70)">
  <!-- Block 1 -->
  <rect x="0" y="0" width="100" height="60" fill="#3498db" rx="8"/>
  <text x="50" y="38" font-family="Courier New" font-size="24" font-weight="bold" text-anchor="middle" fill="#fff">192</text>
  <!-- Block 2 -->
  <rect x="120" y="0" width="100" height="60" fill="#3498db" rx="8"/>
  <text x="170" y="38" font-family="Courier New" font-size="24" font-weight="bold" text-anchor="middle" fill="#fff">168</text>
  <!-- Block 3 -->
  <rect x="240" y="0" width="100" height="60" fill="#3498db" rx="8"/>
  <text x="290" y="38" font-family="Courier New" font-size="24" font-weight="bold" text-anchor="middle" fill="#fff">1</text>
  <!-- Block 4 -->
  <rect x="360" y="0" width="120" height="60" fill="#e74c3c" rx="8"/>
  <text x="420" y="38" font-family="Courier New" font-size="24" font-weight="bold" text-anchor="middle" fill="#fff">15</text>
</g>
<!-- Brackets and Labels -->
<path d="M 60 140 v 10 h 170 v 10 v -10 h 170 v -10" fill="none" stroke="#2980b9" stroke-width="3"/>
<text x="230" y="175" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2980b9">Network ID (Kode Pos/Area)</text>
<text x="230" y="195" font-family="Arial" font-size="14" text-anchor="middle" fill="#7f8c8d">Menunjukkan di jaringan mana perangkat berada</text>
<path d="M 420 140 v 10 h 60 v 10 v -10 h 60 v -10" fill="none" stroke="#c0392b" stroke-width="3"/>
<text x="480" y="175" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#c0392b">Host ID (No. Rumah)</text>
<text x="480" y="195" font-family="Arial" font-size="14" text-anchor="middle" fill="#7f8c8d">Spesifik ke satu perangkat</text>
</svg>

Karena jumlah perangkat di dunia berkembang sangat pesat, sistem lama yang disebut **IPv4** (kapasitas sekitar 4,3 miliar alamat) mulai kehabisan nomor. Dunia saat ini sedang bertransisi ke **IPv6**, sebuah format alamat yang lebih panjang dan kompleks, yang mampu menyediakan cukup alamat IP untuk setiap butir pasir di bumi.

### 2. Resepsionis Gedung Perkantoran (Konsep NAT)

Anda mungkin menyadari bahwa HP, laptop, dan Smart TV di rumah Anda bisa mengakses internet secara bersamaan, padahal ISP seringkali hanya memberikan satu buah IP Address publik per rumah. Bagaimana hal ini bisa terjadi?

Inilah fungsi dari **NAT (Network Address Translation)** yang ada di dalam router rumah Anda. NAT bekerja seperti resepsionis di sebuah gedung perkantoran besar.

1. Gedung perkantoran (rumah Anda) memiliki satu nomor telepon publik yang terdaftar di buku kuning (IP Publik: `203.111.22.1`).
2. Di dalam gedung, setiap karyawan (HP, Laptop) memiliki nomor ekstensi lokal (IP Privat: `192.168.1.2`, `192.168.1.3`, dst).
3. Saat Anda mengakses website, pesanan Anda dikirim ke resepsionis (Router). Resepsionis akan mencatat bahwa "Ekstensi 2 meminta halaman Google".
4. Resepsionis meneruskan permintaan itu ke luar menggunakan nomor publik. Saat balasan dari Google datang, resepsionis melihat catatannya dan meneruskan data tersebut kembali ke ekstensi 2 (HP Anda).

### 3. Router: Navigasi Estafet Data (Hop-by-Hop)

Jika IP Address adalah alamatnya, maka **Router** adalah kantor pos atau persimpangan jalan yang dilengkapi polisi lalu lintas cerdas. Internet bukanlah satu kabel panjang yang menghubungkan laptop Anda langsung ke server YouTube. Data Anda dipotong menjadi paket-paket kecil, dan paket ini melompat dari satu router ke router lain secara estafet. Lompatan ini disebut *Hop*.

Setiap Router memiliki "Peta Digital" yang disebut **Routing Table**. Peta ini terus diperbarui untuk mengetahui kondisi jalan.

<div class="mermaid">
flowchart LR
    Start([Laptop Anda\nIP: 192.168.1.5]) --> R1[Router Rumah]
    R1 -->|Hop 1| R2{Router ISP\nJakarta}
    
    R2 -->|Jalur Utama\nCepat| R3{Router\nSingapura}
    R2 -.->|Jalur Cadangan\nLebih Lambat| R4{Router\nBatam}
    
    R4 -.-> R3
    R3 -->|Hop N| Server([Server YouTube\nIP: 142.250.111.45])

    style Start fill:#e1d5e7,stroke:#9673a6
    style Server fill:#f8cecc,stroke:#b85450
    style R2 fill:#fff2cc,stroke:#d6b656
    style R3 fill:#d5e8d4,stroke:#82b366
    style R4 fill:#f5f5f5,stroke:#666666
</div>

**Bagaimana Router Mengambil Keputusan?**

1. **Pemeriksaan Alamat:** Saat paket data tiba, router membuka bagian depannya untuk membaca "IP Tujuan".
2. **Mengecek Peta (Routing Table):** Router melihat petanya dan bertanya, "Untuk menuju alamat ini, pintu keluar mana yang paling dekat?"
3. **Kecerdasan Adaptif:** Jika tiba-tiba sebuah kabel optik bawah laut putus digigit hiu (kejadian nyata di dunia internet) atau terjadi kemacetan data, router secara otomatis akan menghitung ulang dan mencari jalur alternatif. Data Anda mungkin mengambil rute yang memutar, tetapi tetap akan sampai ke tujuan.

# Modul 3: Buku Telepon Pintar Internet (Domain & DNS)

Jika IP Address adalah koordinat pasti atau nomor rumah di jalan raya internet, maka kita menghadapi satu masalah besar: otak manusia tidak dirancang untuk menghafal deretan angka acak. Sangat tidak praktis jika kita harus mengetik `142.250.191.46` untuk membuka Google atau `103.111.22.33` untuk membuka situs berita lokal.

Untuk memecahkan masalah ini, para arsitek internet menciptakan dua sistem yang saling melengkapi: **Nama Domain** (sebagai papan nama toko yang mudah diingat) dan **DNS atau Domain Name System** (sebagai buku telepon yang menerjemahkan nama menjadi nomor).

### 1. Anatomi Nama Domain (Papan Nama Toko)

Nama domain tidak dibuat sembarangan. Ia memiliki struktur hierarki yang terbalik, dibaca dari kanan ke kiri untuk mengetahui tingkat kepentingannya.

Bayangkan hierarki ini seperti alamat surat: Negara -> Kota -> Nama Gedung -> Ruangan.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="auto">
<!-- Title -->
<text x="300" y="30" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#2c3e50">Struktur Hierarki: mail.google.com</text>
<!-- The Domain -->
<g transform="translate(100, 60)">
  <text x="50" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#e74c3c">mail</text>
  <text x="100" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#333">.</text>
  <text x="175" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#2980b9">google</text>
  <text x="250" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#333">.</text>
  <text x="300" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#27ae60">com</text>
  <text x="350" y="40" font-family="Courier New" font-size="28" font-weight="bold" text-anchor="middle" fill="#333">.</text>
</g>
<!-- Explanations -->
<!-- Subdomain -->
<path d="M 150 110 v 20 h 0" fill="none" stroke="#e74c3c" stroke-width="2"/>
<rect x="90" y="130" width="120" height="40" fill="#e74c3c" rx="5"/>
<text x="150" y="155" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">Sub-Domain</text>
<text x="150" y="185" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">Ruangan spesifik</text>
<text x="150" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(Layanan Email)</text>
<!-- SLD -->
<path d="M 275 110 v 20 h 0" fill="none" stroke="#2980b9" stroke-width="2"/>
<rect x="215" y="130" width="120" height="40" fill="#3498db" rx="5"/>
<text x="275" y="155" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">SLD / Domain</text>
<text x="275" y="185" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">Nama Gedung</text>
<text x="275" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(Identitas Merek)</text>
<!-- TLD -->
<path d="M 400 110 v 20 h 0" fill="none" stroke="#27ae60" stroke-width="2"/>
<rect x="350" y="130" width="100" height="40" fill="#2ecc71" rx="5"/>
<text x="400" y="155" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">TLD</text>
<text x="400" y="185" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">Kawasan/Kota</text>
<text x="400" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#555">(Komersial)</text>
<!-- Root -->
<path d="M 450 110 v 50 h 20" fill="none" stroke="#7f8c8d" stroke-width="2"/>
<text x="480" y="165" font-family="Arial" font-size="12" font-weight="bold" fill="#7f8c8d">Titik (Root)</text>
<text x="480" y="180" font-family="Arial" font-size="11" fill="#7f8c8d">Sering tersembunyi,</text>
<text x="480" y="195" font-family="Arial" font-size="11" fill="#7f8c8d">titik awal jagat maya</text>
</svg>

* **TLD (Top-Level Domain):** Ekstensi paling kanan. Mengelompokkan situs berdasarkan jenis organisasi (`.com` untuk komersial, `.org` untuk organisasi nirlaba) atau negara (`.id` untuk Indonesia, `.jp` untuk Jepang).
* **SLD (Second-Level Domain):** Nama utama yang didaftarkan dan menjadi identitas merek, seperti `google`, `kemdikbud`, atau `tokopedia`.
* **Sub-Domain:** Divisi atau layanan spesifik di bawah nama utama. Misalnya `mail.google.com` mengarahkan Anda ke server email, sementara `maps.google.com` mengarahkan ke server peta.

### 2. Perjalanan DNS: Bertanya Kesana-Kemari

Ketika Anda mengetik sebuah alamat web, komputer Anda tidak langsung tahu ke mana harus pergi. Ia harus melakukan proses **DNS Resolution** (Pencarian DNS). Proses ini berlangsung sangat cepat dalam hitungan milidetik, namun di baliknya ada estafet pertanyaan yang cukup panjang.

Bayangkan Anda mencari nomor telepon kantor pusat "Toko Budi" di Jakarta. Anda bertanya ke operator lokal, lalu operator lokal menelepon arsip nasional, lalu arsip wilayah, hingga akhirnya mendapatkan nomor pastinya.

<div class="mermaid">
sequenceDiagram
    actor Laptop as Laptop Anda
    participant Resolver as DNS Resolver (ISP)
    participant Root as Root Server (.)
    participant TLD as TLD Server (.com)
    participant Auth as Auth Server (google.com)

    Laptop->>Resolver: 1. "Berapa IP google.com?"
    Note over Resolver: Cek memori (Cache).<br/>Kalau tidak ada, mulai bertanya.
    Resolver->>Root: 2. "Hai Root, tahu IP google.com?"
    Root-->>Resolver: 3. "Tidak, tapi coba tanya server TLD .com. IP-nya ini."
    
    Resolver->>TLD: 4. "Hai server .com, tahu IP google.com?"
    TLD-->>Resolver: 5. "Tidak, tapi yang urus 'google' adalah server ini. Tanya ke sana."
    
    Resolver->>Auth: 6. "Hai Auth server Google, berapa IP google.com?"
    Auth-->>Resolver: 7. "IP-nya adalah 142.250.191.46."
    
    Note over Resolver: Simpan di memori (Cache)<br/>agar besok tidak usah tanya lagi.
    Resolver-->>Laptop: 8. "Ini IP-nya: 142.250.191.46"
    
    Laptop->>Laptop: 9. Browser meluncur ke IP tersebut!
</div>

### 3. Mengapa Terkadang Ada Gangguan DNS?

Jika sistem DNS (buku telepon) milik ISP Anda bermasalah atau sedang *down*, Anda tidak akan bisa membuka website menggunakan nama domain (seperti `youtube.com`), meskipun koneksi internet fisik Anda sebenarnya baik-baik saja. Komputer Anda seperti kehilangan buku catatannya.

Inilah mengapa banyak orang yang terkadang mengubah pengaturan DNS di komputer atau routernya ke penyedia DNS publik yang lebih cepat atau lebih stabil, seperti:

* **Google Public DNS:** `8.8.8.8` dan `8.8.4.4`
* **Cloudflare DNS:** `1.1.1.1` (Terkenal sangat cepat dan mengutamakan privasi)

Dengan mengubah ke DNS ini, Anda pada dasarnya mengganti "operator buku telepon" Anda dari milik penyedia internet lokal ke buku telepon raksasa global yang selalu siaga.

# Modul 4: Dinas Tata Ruang dan Bahasa Universal (Protokol & Standarisasi)

Bayangkan sebuah kota metropolitan di mana setiap pengemudi membuat aturan lalu lintasnya sendiri. Mobil merah berjalan di sebelah kiri, mobil biru berjalan di sebelah kanan, dan truk berhenti setiap kali melihat lampu hijau. Kekacauan pasti akan terjadi dan lalu lintas akan lumpuh total.

Di dunia digital, kita memiliki perangkat dari berbagai pabrik yang berbeda: ada iPhone buatan Apple, laptop buatan Microsoft, hingga TV pintar dari Samsung. Bagaimana mereka semua bisa saling bertukar pesan tanpa terjadi "tabrakan" data? Jawabannya ada pada **Protokol** (Aturan Lalu Lintas) dan **Organisasi Standarisasi** (Dinas Tata Ruang).

### 1. Protokol: Bahasa Esperanto Dunia Digital

Dalam bahasa komputer, **Protokol** adalah serangkaian aturan dan kesepakatan baku tentang bagaimana data harus dibentuk, dikirim, dan diterima. Karena protokol ini bersifat universal, perangkat apa pun yang mematuhinya akan bisa saling berkomunikasi, terlepas dari siapa pabrik pembuatnya.

Mari kita lihat beberapa protokol utama yang ibaratnya adalah kendaraan pengangkut khusus di internet:

| Nama Protokol | Analogi Fungsi | Kegunaan Utama |
| --- | --- | --- |
| **HTTP / HTTPS** | Kurir Dokumen & Brosur | Mengantarkan halaman web (teks, gambar) ke layar browser Anda. HTTPS (dengan 'S') berarti kurir ini menggunakan tas terkunci anti-maling (*Secure*). |
| **SMTP / IMAP** | Sistem Kantor Pos | Mengurus pengiriman dan penerimaan surat elektronik (Email). |
| **FTP** | Truk Ekspedisi Barang | Digunakan untuk mengunggah atau mengunduh *file* berukuran besar antar komputer (File Transfer). |

### 2. Gaya Pengiriman: Surat Tercatat (TCP) vs Kartu Pos Kilat (UDP)

Di balik layar protokol-protokol di atas, ada dua manajer pengiriman utama yang mengelola bagaimana paket data tersebut diserahkan dari satu komputer ke komputer lain. Keduanya memiliki filosofi yang sangat berbeda:

* **TCP (Transmission Control Protocol): Sang Kurir Perfeksionis**
TCP memastikan setiap data yang dikirim sampai dengan utuh dan berurutan. Ia seperti pengiriman "Surat Tercatat". Jika ada paket yang hilang di jalan, TCP akan meminta pengirim untuk mengirim ulang bagian yang hilang tersebut. Kelemahannya? Prosesnya sedikit lebih lambat karena banyak pemeriksaan. Digunakan untuk: Membuka website, mengirim email, dan mengunduh *file* (di mana data rusak sedikit saja, *file* tidak bisa dibuka).
* **UDP (User Datagram Protocol): Sang Kurir Kecepatan Tinggi**
UDP tidak peduli apakah semua paket sampai dengan utuh atau berurutan; yang penting cepat! Ia seperti menyebarkan brosur dari atas helikopter. Digunakan untuk: *Live streaming* sepak bola, panggilan video (Zoom/WhatsApp), dan *game online*. (Itulah sebabnya kadang video Zoom Anda pecah atau macet sebentar, tapi terus berlanjut tanpa mengulang dari awal).

<div class="mermaid">
sequenceDiagram
    participant Pengirim
    participant Penerima

    Note over Pengirim, Penerima: CARA KERJA TCP (Jaminan Sampai)
    Pengirim->>Penerima: "Paket 1, Paket 2, Paket 3 dikirim."
    Penerima-->>Pengirim: "Paket 1 dan 3 diterima. Paket 2 hilang!"
    Pengirim->>Penerima: "Ini kiriman ulang Paket 2."
    Penerima-->>Pengirim: "Oke, semua lengkap."

    Note over Pengirim, Penerima: CARA KERJA UDP (Fokus Kecepatan)
    Pengirim-->>Penerima: "Paket 1, 2, 3, 4, 5 meluncur cepat!!"
    Penerima-->>Pengirim: (Menerima paket 1,3,4,5. Paket 2 hilang di jalan)
    Note right of Penerima: Tidak ada waktu konfirmasi. Lanjut putar video!
</div>

### 3. Arsitek Internet: Siapa yang Membuat Aturan Ini?

Tidak ada satu negara atau perusahaan pun yang "memiliki" internet. Namun, agar internet tidak terpecah-pecah menjadi jaringan eksklusif, sekumpulan pakar dan insinyur dari seluruh dunia berkumpul untuk menyepakati standar bersama.

Mereka adalah "Dinas Tata Ruang" internet yang bekerja secara nirlaba dan terbuka:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="auto">
<!-- IETF Box -->
<g transform="translate(40, 50)">
  <rect x="0" y="0" width="150" height="150" fill="#e8f8f5" stroke="#1abc9c" stroke-width="3" rx="15"/>
  <text x="75" y="40" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#16a085">IETF</text>
  <text x="75" y="65" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">Internet Engineering</text>
  <text x="75" y="80" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">Task Force</text>
  <line x1="20" y1="95" x2="130" y2="95" stroke="#1abc9c" stroke-width="2"/>
  <text x="75" y="115" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">Membuat standar</text>
  <text x="75" y="130" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">Protokol (TCP/IP)</text>
</g>
<!-- W3C Box -->
<g transform="translate(225, 50)">
  <rect x="0" y="0" width="150" height="150" fill="#fef9e7" stroke="#f1c40f" stroke-width="3" rx="15"/>
  <text x="75" y="40" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#f39c12">W3C</text>
  <text x="75" y="65" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">World Wide Web</text>
  <text x="75" y="80" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">Consortium</text>
  <line x1="20" y1="95" x2="130" y2="95" stroke="#f1c40f" stroke-width="2"/>
  <text x="75" y="115" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">Membuat standar Web</text>
  <text x="75" y="130" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">(HTML, CSS, dll)</text>
</g>
<!-- IEEE Box -->
<g transform="translate(410, 50)">
  <rect x="0" y="0" width="150" height="150" fill="#ebf5fb" stroke="#3498db" stroke-width="3" rx="15"/>
  <text x="75" y="40" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#2980b9">IEEE</text>
  <text x="75" y="65" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">Institute of Electrical</text>
  <text x="75" y="80" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#34495e">& Electronics Eng.</text>
  <line x1="20" y1="95" x2="130" y2="95" stroke="#3498db" stroke-width="2"/>
  <text x="75" y="115" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">Standar Fisik Jaringan</text>
  <text x="75" y="130" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">(Kabel LAN, WiFi)</text>
</g>
</svg>

Berkat konsensus dari organisasi-organisasi inilah, kita bisa membeli *router* WiFi dari merek apa pun di negara mana pun, dan *router* tersebut dijamin akan bisa memancarkan sinyal yang bisa ditangkap oleh laptop maupun HP Anda. Semuanya mematuhi bahasa dan rancangan tata ruang yang seragam.

# Modul 5: Pelanggan dan Dapur Restoran (Client & Server)

Seluruh infrastruktur raksasa yang kita bahas dari Modul 1 hingga 4—kabel serat optik bawah laut, sistem alamat IP, buku telepon DNS, hingga protokol lalu lintas—sebenarnya dibangun hanya untuk memfasilitasi satu jenis transaksi utama.

Dalam ekosistem internet, transaksi ini dikenal dengan model komunikasi **Client-Server**. Bayangkan model ini seperti interaksi antara Anda (Pelanggan) dan sebuah Dapur Restoran (Server).

### 1. Peran Sang Pelanggan (Client)

**Client** adalah perangkat atau peranti lunak (aplikasi) yang beroperasi di ujung jaringan Anda. Tugas utamanya adalah menerjemahkan keinginan Anda menjadi sebuah "Pesanan" (Request) yang bisa dipahami oleh internet, lalu menyajikan hasilnya ke layar Anda.

* **Bentuk Fisik:** HP, Laptop, Smart TV, hingga Kulkas Pintar Anda.
* **Bentuk Perangkat Lunak:** Google Chrome, Safari, aplikasi WhatsApp, aplikasi Netflix, atau game *online* seperti Mobile Legends.
* **Karakteristik:** Bertindak pasif menunggu instruksi dari pengguna. Client kitalah yang memulai pembicaraan (meminta data).

### 2. Peran Sang Koki Dapur (Server)

**Server** adalah komputer super yang didesain secara khusus untuk bekerja tiada henti. Ia tidak memiliki layar monitor atau keyboard seperti laptop Anda, melainkan ditumpuk di rak-rak besar di dalam gedung ber-AC yang sangat dingin yang disebut *Data Center* (Pusat Data).

* **Tugas Utama:** Menunggu pesanan (Request) dari Client secara terus-menerus, memproses pesanan tersebut, lalu mengirimkan hasilnya (Response) kembali ke Client.
* **Karakteristik:** Harus menyala 24 jam sehari, 7 hari seminggu. Jika server YouTube mati, maka jutaan "pelanggan" tidak akan bisa memutar video. Memiliki koneksi internet (jalan raya) yang ratusan kali lebih besar dari rumah biasa agar sanggup melayani jutaan pesanan dalam satu detik.

### 3. Siklus Pesanan: Request & Response

Mari kita lihat siklus bagaimana data dipesan dan disajikan. Ini adalah alur kerja fundamental dari setiap aktivitas yang Anda lakukan di internet.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="auto">
<!-- Client (Laptop) -->
<g transform="translate(50, 70)">
  <rect x="10" y="0" width="80" height="60" fill="#34495e" rx="5"/>
  <rect x="15" y="5" width="70" height="50" fill="#ecf0f1" rx="2"/>
  <polygon points="0,65 100,65 90,75 10,75" fill="#2c3e50"/>
  <text x="50" y="100" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2c3e50">Client</text>
  <text x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="#7f8c8d">(Browser Anda)</text>
</g>
<!-- Server (Rack) -->
<g transform="translate(450, 50)">
  <rect x="10" y="0" width="80" height="100" fill="#2c3e50" rx="5"/>
  <!-- Server blades -->
  <rect x="15" y="10" width="70" height="15" fill="#34495e" rx="2"/>
  <circle cx="25" cy="17" r="3" fill="#2ecc71"/>
  <circle cx="35" cy="17" r="3" fill="#e74c3c"/>
  <rect x="15" y="30" width="70" height="15" fill="#34495e" rx="2"/>
  <circle cx="25" cy="37" r="3" fill="#2ecc71"/>
  <rect x="15" y="50" width="70" height="15" fill="#34495e" rx="2"/>
  <circle cx="25" cy="57" r="3" fill="#2ecc71"/>
  <circle cx="35" cy="57" r="3" fill="#f1c40f"/>
  <rect x="15" y="70" width="70" height="15" fill="#34495e" rx="2"/>
  <circle cx="25" cy="77" r="3" fill="#2ecc71"/>
  <text x="50" y="130" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2c3e50">Server</text>
  <text x="50" y="145" font-family="Arial" font-size="12" text-anchor="middle" fill="#7f8c8d">(Dapur Website)</text>
</g>
<!-- Request Arrow -->
<path d="M 160 80 Q 300 40 430 80" fill="none" stroke="#3498db" stroke-width="4" marker-end="url(#arrow-req)"/>
<polygon points="435,80 420,70 425,80 420,90" fill="#3498db"/>
<text x="295" y="50" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#2980b9">1. HTTP Request (Pesanan)</text>
<text x="295" y="65" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">"Tolong kirimkan halaman beranda YouTube"</text>
<!-- Response Arrow -->
<path d="M 430 130 Q 300 170 160 130" fill="none" stroke="#2ecc71" stroke-width="4" marker-end="url(#arrow-res)"/>
<polygon points="155,130 170,120 165,130 170,140" fill="#2ecc71"/>
<text x="295" y="160" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#27ae60">2. HTTP Response (Hidangan)</text>
<text x="295" y="175" font-family="Arial" font-size="11" text-anchor="middle" fill="#555">"Ini file HTML, teks, dan videonya. Selamat menikmati!"</text>
</svg>

### 4. Menyatukan Semuanya: Perjalanan Satu Klik

Untuk mengakhiri panduan ini, mari kita gabungkan seluruh 5 Aktor yang telah kita pelajari ke dalam satu diagram utuh. Inilah yang sebenarnya terjadi dalam hitungan milidetik saat Anda menekan tombol "Enter" di browser:

<div class="mermaid">
sequenceDiagram
    actor Anda
    participant Client as Browser (Client)
    participant DNS as Buku Telepon (DNS)
    participant ISP as Jalan Tol (ISP & Router)
    participant Server as Dapur (Server Tujuan)

    Anda->>Client: Ketik "netflix.com" & Enter
    
    rect rgb(240, 248, 255)
    Note over Client, DNS: MODUL 3: Mencari Alamat
    Client->>DNS: "Di mana alamat netflix.com?"
    DNS-->>Client: "Di IP Address 54.239.28.85"
    end
    
    rect rgb(255, 245, 238)
    Note over Client, Server: MODUL 1, 2, & 4: Perjalanan & Protokol
    Client->>ISP: "Kirim pesan lewat TCP/IP ke 54.239.28.85"
    Note over ISP: Router mengarahkan paket<br/>melewati kabel bawah laut
    ISP->>Server: (Paket Data Tiba)
    end
    
    rect rgb(240, 255, 240)
    Note over Client, Server: MODUL 5: Transaksi Restoran
    Client->>Server: HTTP Request: "Minta halaman film terbaru"
    Note over Server: Server mencari di *database*,<br/>memasak data HTML/Video
    Server-->>Client: HTTP Response: File HTML, Gambar, Video
    Client->>Anda: Layar menampilkan film!
    end
</div>

### 5. Catatan Tentang "Cloud" (Komputasi Awan)

Saat ini, Anda mungkin sering mendengar istilah *Cloud*. Apakah awan itu nyata? Tidak. *The Cloud is just someone else's computer*.

Alih-alih menyewa satu server tunggal berbentuk fisik, perusahaan besar sekarang menyewa "kekuatan komputasi" dari Data Center raksasa milik Amazon (AWS), Google (GCP), atau Microsoft (Azure). Konsepnya persis seperti restoran waralaba raksasa; jika satu cabang kehabisan bahan baku (server mati), pesanan Anda otomatis dilempar ke cabang terdekat lainnya tanpa Anda sadari, membuat internet jauh lebih tangguh.