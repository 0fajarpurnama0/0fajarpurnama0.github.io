---
layout: post
title: Latihan Aplikasi Arsip Barang di Fluter dengan MySQL dan ExpressJs
category: internet
tags: [flutter, mysql, expressjs, mobile, program, web, android, ios]
featuredimage: 
description: Latihan Aplikasi Arsip Barang di Fluter
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/08/29/latihan-arsip-barang
---
# Permintaan

Dalam 3 hari, bikin aplikasi inventory sebagai berikut:

1. pencatatan keluar masuk barang beserta harga per qty
2. ⁠setiap barang diberi kategori untuk filter by kategori
3. ⁠keluar masuk barang diberi keterangan timestamp (baik barang masuk maupun barang keluar) untuk keperluan filter by date
4. ⁠setiap barang mempunyai harga jual dan harga beli
5. ⁠buat form khusus untuk menambahkan dan mengurangi item
6. ⁠untuk case mengurangi item diberikan pilihan (bukan inputan bebas) alasan barang keluar contoh: sold, expire, broken
7. ⁠Tambahkan filter by case no 6
8. ⁠Buat edit dan hapus barang
9. ⁠Buat hasil rekap laporan per minggu (format bebas)
10. ⁠Case authentication :
  - cashier hanya dapat mengurangi barang
  - admin gudang hanya dapat menambahkan dan mengurangi barang
  - super admin dapat semua akses

# Rancangan Latihan dari Mudah ke Sulit

- Membuat halaman di flutter.
- Memisah halaman dengan app.
- Membuat halaman login tanpa kredensial.
- Membuat halaman logout.
- Membuat database dan tabel.
- Mempopulasikan tabel barang secara acak.
- Mempopulasikan tabel pengguna dengan super admin.
- Membuat koneksi server ke database.
- Membuat API yang dapat mengambil data tabel.
- Membuat koneksi HTTP dari flutter ke API.
- Mengambil data dari API ke flutter.
- Memodifikasi halaman login untuk login dengan super admin.
- Membuat halaman mendaftar pengguna baru.
- Membuat halaman tampilan daftar pengguna oleh super admin.
- Membuat tombol refresh pada halaman daftar pengguna untuk menampilkan data baru.
- Membuat tombol refresh pada halaman depan untuk menampilkan data baru.
- Halaman tersebut dapat memberikan peran pengguna oleh super admin.
- Memisahkan halaman depan antara super admin dan pengguna tanpa peran.
- Membuat halaman super admin agar dapat menambahkan barang melalui API ke database.
- Membuat halaman super admin agar dapat memodifikasi data masing-masing barang.
- Halaman modifikasi barang dipecah menjadi halaman modifikasi super admin dan logistik.
- Halaman modifikasi masing-masing barang super admin ditambah tombol hapus barang.
- Pemisahan halaman super admin, logistik, dan cashier.
- Halaman cashier tidak dapat menambah dan memodifikasi barang tetapi menjual barang.
- Membuat halaman jual untuk memberi harga dan keterangan jual barang yang dipilih.
- Membuat fitur expor ke json, csv, xml, dll, pada semua halaman depan.
- Membuat fitur sorting pada semua halaman depan.
- Membuat fitur filter pada semua halaman depan.
- Mempercantik tampilan.

# Realisasi
