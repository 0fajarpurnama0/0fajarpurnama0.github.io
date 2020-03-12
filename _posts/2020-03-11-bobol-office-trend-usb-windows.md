---
layout: post
title: Membobol Sethc dan Office Trend USB Windows 7 Ketika Punya Akses Fisik
categories: misc
tags: [Bypass Blocks, USB Access, Micro Trend, Hacking, Administrative Access, Windows 7, sethc.exe, vulnerability]
---

## 1\. Bobol Akses Admin Windows 7

PC dirancang bagi pengguna untuk hanya memiliki hak istimewa akun pengguna standar (dekat akun tamu) di mana pengguna hanya memiliki hak untuk membaca dan menjalankan data dan aplikasi tertentu. Tidak seperti akun administrator tidak memiliki hak istimewa untuk mengubah pengaturan PC misalnya menghapus program admin, mengedit registri, memodifikasi layanan, mengatur startup, dll.

Di sini metode dijelaskan untuk pengguna standar atau non-pengguna sama sekali untuk mendapatkan akses administratif. Metode ini menggunakan sarana fisik melalui media yang dapat di-boot seperti CD atau USB thumb drive untuk mendapatkan akses ke baris perintah administratif (cmd.exe di sini) untuk membuat pengguna administrator menggunakan kerentanan kunci lengket (sethc.exe di sini). Simulasi di sini menggunakan Virtual Machine (VM) Windows 7 karena saya tidak ingin mengacaukan Sistem Operasi (OS) saya yang sebenarnya (menggunakan VM adalah alternatif yang bagus untuk percobaan di rumah).

Konsepnya adalah menggunakan kerentanan di Sethc.exe, lebih jelasnya bisa dirujuk ke video di bawah ini.

1.  Coba tekan tombol "Shift" lebih dari 5x, sticky key akan muncul.
2.  Masuk ke C:\Windows\System32.
3.  Tukar "Sethc.exe" dengan "cmd.exe" dengan copy "cmd.exe" dan ganti nama menjadi "Sethc.exe".
4.  Coba tekan tombol "Shift" lebih dari 5x lagi, cmd akan muncul.

<div class="video-container"><iframe src="https://www.youtube.com/embed/1YuTVeQPml4" frameborder="0" allowfullscreen=""></iframe></div>

## 2\. kerentanan sethc.exe

Tujuannya adalah bagaimana melepaskan command prompt saat startup. Terkadang mode aman untuk memulai prompt perintah dinonaktifkan sehingga diperlukan metode lain. Metode di sini adalah dengan menggunakan kerentanan di kunci lengket, ganti "sethc.exe" dengan "cmd.exe". Untuk melakukan ini apa pun yang dapat memiliki izin untuk membaca dan menulis data pada direktori sistem akan dilakukan. Di lapangan saya harus menjalankan ini dengan cepat untuk menghindari kecurigaan, jadi saya mem-boot "FreeDOS" dari USB dengan "NTFSParagon" di dalamnya untuk menulis "cmd.exe" di direktori host. Saya bahkan membawa cmd.exe saya sendiri karena batas "NTFSParagon".

Cara yang lebih mudah adalah dengan menjalankan boot Sistem Operasi (OS) seperti Windows, Linux, dan MAC. Masalahnya adalah OS yang biasa digunakan oleh orang-orang saat ini berat dan besar untuk pekerjaan semacam ini. Jika ada cara yang lebih ringan, mengapa tidak (mem-boot DOS adalah yang paling ringan dari pengalaman saya). Saya menemukan aplikasi boot cahaya yang bagus untuk mendiagnosis PC yang disebut Ultimate Boot CD (UBCD). Gambar 1 menunjukkan Partition Magic dimasukkan dalam UBCD (Linux ringan berbasis untuk partisi). Melalui sini saya dapat mengakses "C: \ Windows \ System32" menggunakan "filemanager", salin "cmd.exe" ke (ganti) "sethc.exe" yang ditunjukkan pada Gambar 2\. Restart dan boot ke Windows, lalu klik shift 5x atau lebih. Prompt perintah akan muncul seperti yang ditunjukkan pada Gambar 3\. (Anda dapat menggunakan Rufus, Universial USB, Yumi, Unetboot, atau perangkat lunak lain untuk membuat USB yang dapat di-boot, pilih saja UBCD iso). (klik gambar untuk memperbesar).

<figure>![Live Boot UBCD](https://farm6.staticflickr.com/5788/21083826958_1f09c4bf0d_o_d.png)

<figcaption>Gambar 1\. Live Boot UBCD</figcaption>

</figure>

<figure>![Overwrite cmd.exe sethc.exe](https://farm6.staticflickr.com/5809/21083622660_f8200315ed_o_d.png)

<figcaption>Gambar 2\. Overwrite cmd.exe sethc.exe</figcaption>

</figure>

<figure>![Command Prompt Access before Log-on](https://farm6.staticflickr.com/5652/21083825298_fa20b8e2a1_o_d.png)

<figcaption>Gambar 3\. Command Prompt Access sebelum Login</figcaption>

</figure>

Melalui sini baris perintah dengan hak istimewa administrator dipanggil. Ini tersedia untuk membuat pengguna dan mempromosikan pengguna apa saja hingga ke administrator. Sintaks untuk melakukannya sebagai berikut:

1.  “Net user [username] [password] /add”, contoh “net user fajar purnama /add”. Username is fajar and password is purnama.
2.  “Net localgroup administrators [user] /add”, contoh “net localgroup fajar add”.
3.  “Net view” tuntuk melihat menambahkan nama PC (di sini adalah Client-PC), untuk masuk kadang-kadang Anda harus memasukkan nama PC, (nama PC biasanya tersedia pada stiker di PC depan). Saya masuk menggunakan “Username: Client-PC\fajar” dan “Password: purnama”.
4.  Akhirnya akun administrator dibuat seperti pada Gambar 4.

<figure>![Administrator Account](https://farm6.staticflickr.com/5676/20649020214_d5472b978e_o_d.png)

<figcaption>Gambar 4\. Akun Administrator</figcaption>

</figure>

<div class="video-container"><iframe src="https://www.youtube.com/embed/fLQGX7r0Lao" frameborder="0" allowfullscreen=""></iframe></div>

## 3\. Akses USB Melalui Trend Office Scan

Setelah mendapatkan hak administrator, kemudian mendapatkan akses ke USB thumb drive tersedia. Diidentifikasi bahwa nama perangkat lunak Micro Trend Office Scan bertanggung jawab untuk mengendalikan perangkat. Tapi satu cacat ditemukan, butuh waktu untuk memuat layanan sehingga memberikan pengguna kesempatan untuk menonaktifkan layanan lebih jauh lagi menonaktifkan kata sandi, terakhir bahkan menghapus instalasi.

Data diperoleh dengan mensimulasikan bypass laptop saya sendiri, bahkan tidak menggunakan Windows saya tetapi menggunakan mesin virtual dengan Windows 7 di dalamnya. Kemudian saya mengunduh Micro Trend Office Scan, meminta uji coba selama 30 hari, dan menginstal di mesin virtual Windows 7 saya. Dengan kata lain, sebuah lingkungan yang mirip dengan host diciptakan, tidak berkinerja pada host asli.

Seperti pada Gambar 5, "Pemindaian Kantor Tren Mikro" bertanggung jawab untuk memblokir Akses USB Thumb Drive. Ada batas waktu untuk membuka blokir ini. Di awal setelah me-restart PC:

1.  Cepat-cepat masuk.
2.  Cepat-cepat buka layanan (Anda dapat mengetik "layanan" di bilah pencarian).
3.  Disable TMBMServer shown on Figure 6.
4.  Now data transfer is possible as shown on Figure 7.
5.  To disable password, edit the registry.
6.  Edit the value of “NoPwdProtect” at “HKEY_LOCAL_MACHINE\SOFTWARE\ TrendMicro\PC-cillinNTCorp\CurrentVersion\Misc.” from “0” to “1”.
7.  There is also “Allow Uninstall” and you may edit.
8.  Figure 8 shows Micro Trend Office Agent unlocked.

Metode ini hanya digunakan satu per satu. Maksud saya Anda harus mengulangi langkah-langkah ini lagi jika Anda me-reboot PC Anda. Diperlukan tindakan lebih lanjut jika Anda ingin mempertahankan akses yang akan dijelaskan pada bagian selanjutnya.

<figure>![Unable to perform data transfer using flash disk](https://farm6.staticflickr.com/5701/21186678978_5c56b88ae0_o_d.png)

<figcaption>Gambar 5\. Tidak dapat melakukan transfer data menggunakan flash disk</figcaption>

</figure>

<figure>![Disabling Trend Micro Unauthorized change](https://farm1.staticflickr.com/639/21186437430_75e54e5bd6_o_d.png)

<figcaption>Gambar 6\. Menonaktifkan Trend Micro secara tidak sah</figcaption>

</figure>

<figure>![Able to perform data transfer using flash disk](https://farm6.staticflickr.com/5754/21187638829_08bc335352_o_d.png)

<figcaption>Gambar 7\. Mampu melakukan transfer data menggunakan flash disk</figcaption>

</figure>

<figure>![Unlock office scan agent](https://farm1.staticflickr.com/733/21363745242_b5a3e95982_o_d.png)

<figcaption>Gambar 8\. Unlock office scan agent</figcaption>

</figure>

<div class="video-container"><iframe src="https://www.youtube.com/embed/OGkWyzfLkm8" frameborder="0" allowfullscreen=""></iframe></div>

## 4\. Mempertahankan Akses

Mempertahankan akses di sini berarti bahwa langkah-langkah pada Bagian 3 tidak harus diulang pada saat kita boot PC berikutnya. Sebagai gantinya kami akan mengkonfigurasi langkah-langkah di atas untuk dijalankan saat startup, untuk melakukan itu kita perlu mengetahui basis baris perintah dari metode di atas. Kode 1 berisi perintah sederhana untuk mengganti "sethc.exe" dengan "cmd.exe". Kode 2 berisi perintah untuk menghentikan dan menonaktifkan Layanan Perubahan Trend Micro Tidak Sah, diikuti dengan mengedit "NoPwdProtect" kunci registri.

<table><caption>Kode 1\. Ganti-sethc-dengan-cmd.bat</caption>

<tbody>

<tr>

<th style="color: green; background-color:black;">`

<pre>copy C:\Windows\System32\cmd.exe C:\Windows\System32\sethc.exe pause</pre>

`</th>

</tr>

</tbody>

</table>

<table><caption>Kode 2\. Nonaktifkan-Mikro-Trend-Office-Scan.bat</caption>

<tbody>

<tr>

<th style="color: green; background-color:black;">`

<pre>			sc stop TMBMServer
			sc config TMBMServer start= disabled
			reg add HKEY_LOCAL_MACHINE\SOFTWARE\TrendMicro\PC-cillinNTCorp\CurrentVersion\Misc. /v NoPwdProtect /t REG_DWORD /d 1 /f</pre>

`</th>

</tr>

</tbody>

</table>

Hal berikut dapat dilakukan di "computer management" untuk menambahkan startup:

1.  Buka Computer Management (ketik di search bar), pilih task scheduler, dan pilih create task.
2.  Pada General Menu terserah anda tapi direkomendasikan “run with highest privilege”.
3.  Pada Trigger Menu kita bisa pilih apakah untuk jalan pada startup, setelah login, atau keduanya, atau custom.
4.  Akhirnya di Action Menu dimana script ditaruh, taruh kode 1 dan kode 2 satu per satu. Anda dapat merujuk ke .bat, tapi terkadang menjalankan file bat diblokir. Pilihan lain adalah memasukkan perintah itu sendiri (bukan file skrip / file bat) yang lebih menjanjikan.
5.  Menu lain tidak diperlukan dalam laporan ini tetapi merasa bebas untuk menyesuaikan dengan kebutuhan Anda.
6.  Setelah selesai 2 tugas harus ditampilkan di perpustakaan scheduler seperti pada Gambar 9\. Saat berikutnya mem-boot itu harus menjalankan 2 tugas itu.

<figure>![Task Scheduler](https://farm1.staticflickr.com/664/21186946300_1224bb3a56_o_d.png)

<figcaption>Gambar 9\. Task Scheduler</figcaption>

</figure>

<div class="video-container"><iframe src="https://www.youtube.com/embed/UqB8o_vG_Wk" frameborder="0" allowfullscreen=""></iframe></div>

## Sumber

*   [https://0fajarpurnama0.github.io/misc/2020/03/11/hacking-office-trend-usb-windows](https://0fajarpurnama0.github.io/misc/2020/03/11/hacking-office-trend-usb-windows)