---
layout: post
title: Menentukan Coverage Macro Cell Berdasarkan Okumura Hata Di Matlab
category: bachelor
tags: [jaringan nirkabel, cakupan, macro cell, Okumura Hata, Matlab, tugas kuliah, penulisan ilmiah]
featuredimage: https://cdn.steemitimages.com/DQmQV6EKnvPhJg82ZeQJxYWwBZVE4gKanGo5gsTnEcBsPT8/Gambar%203.1%20Dalam%20bentuk%20simulink.png
description: Menggunakan MATLAB jauh lebih cepat dari menghitung manual serta dapat membuat grafik dan menggambarkan illustrasi radius BS dengan MS.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/05/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab
---
## Catatan

Tulisan ini merupakan tugas S1 mata kuliah Jaringan Nirkabel saya di Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana. Tugas ini tidak pernah dipublikasi dimanapun dan saya sebagai penulis dan pemegang hak cipta melisensi tulisan ini customized CC-BY-SA dimana siapa saja boleh membagi, menyalin, mempublikasi ulang, dan menjualnya dengan syarat mencatumkan nama saya sebagai penulis dan memberitahu bahwa versi asli dan terbuka ada disini.

## BAB 1 Pendahuluan

### 1.1 Latar Belakang

Kuat sinyal yang diterima pada MS (Mobile Station) dari BS (Base Station) dipengaruhi secara umum pada 3 tahap. Tahap pertama adalah pembangkitan sinyal pada BS (Base Station), tahap kedua adalah propagasi, dan tahap ketiga adalah MS (Mobile Station). Sampai saat ini belum ditemukan perhitungan secara empiris propagasi sinyal, yang digunakan saat ini adalah prediksi berdasarkan percobaan dan penelitian (tidak ada teori). Salah satunya adalah Okumura-Hata dimana peneliti dari Jepang mengelilingi daerah urban, suburban, dan rural, mencoba jarak – jarak tertentu dan mengukur sinyal yang didapatkan oleh MS (Mobile Station) dari BS (Base Station). Untuk mengukur kuat sinyal menggunakan Okumura harus menyediakan tabel yang banyak berdasarkan situasi daerah. Walaupun menggunakan Okumura akurat namun boros terhadap waktu karena harus mengecek tabel. Hata menurunkan rumus perhitungan dari Okumura tetapi juga memerlukan waktu yang lama untuk dihitung secara manual. Pada makalah ini akan dibuat perhitungan dari BS (Base Station) ke MS (Mobile Station) berdasarkan rumus Hata di software MATLAB berdasarkan suatu data. Yang dihitung adalah RX (Received) Power di MS (Mobile Station) di daerah Urban, Suburban, dan Rural dari jarak 1 km sampai 20 km.

### 1.2 Rumusan Masalah

Bagaimana hasil perhitungan daya receiver di MS (Mobile Station) dari transmitter BS (Base Station) di daerah urban, suburban, dan rural berdasarkan rumus Hata menggunakan software MATLAB?

### 1.3 Tujuan

Untuk membuat perhitungan propagasi sinyal dari BS (Base Station) ke MS (Mobile Station) berdasarkan Okumura-Hata di MATLAB.

### 1.4 Manfaat

Lebih effisien tenaga dan waktu untuk mencari perhitungan propagasi sinyal.

### 1.5 Ruang Lingkup dan Batasan

*   Perhitungan pada jarak 1 - 20 Km.
*   Sinyal pada frekuensi 900 MHz.
*   Spesifikasi alat telah ditentukan.

## BAB 2 Tinjauan Pustaka

### 2.1 Kuat Sinyal

Satuan kuat sinyal adalah watt yaitu satuan daya pada listrik. Untuk memudahkan perhitungan kuat sinyal dari satuan watt dikonversi menjadi satuan decibell (Kolawole, 2002).

Dimana:

P = Daya listrik (watt)2.2 Free Space Loss

Free Space Loss adalah kehilangan kuat sinyal di ruang hampa, tergantung pada panjang gelombang dan jarak. Ini merupakan loss yang pasti ada (Kolawole, 2002).

Dimana:

FSL = Free Space Loss

r = jarak antara transmitter dengan receiver (meter)

lamda = panjang gelombang (meter)

c = kecepatan cahaya (meter/second)

### 2.3 Hata Path Loss

Sampai saat ini belum ditemukan rumus empiris perhitungan kuat sinyal dari BS (Base Station) ke MS (Mobile Station) pada lingkungan di dunia nyata. Yang ada adalah prediksi yang mendekati berdasarkan penelitian. Okumura dan Hata mengelilingi suatu daerah pada intensitas-intensitas tertentu dan mencatat kuat sinyal yang diterima MS (Mobile Station) dari BS (Base Station) pada jarak-jarak tertentu. Perhitungan Hata model sebagai berikut (ETSI, 1999):

Syarat:

Frequency (f): 150 - 1000 MHz

Base Station Height (Hb): 30 - 200 m

Mobile Height (Hm): 1 - 10 m

Distance (d): 1 - 20 km

Untuk wilayah metropolitan:

a(Hm)= f ≤ 200 MHz

a(Hm)= f ≥ 400 MHz

Untuk wilayah nonmetropolitan:

a(Hm)=

Loss pada daerah Urban: 6.55log(Hb)log(d)

Loss pada daerah Suburban

Loss pada daerah Rural Quasi-Open

Loss pada daerah Rural Open-Area

### 2.4 Link Budget

Perhitungan kuat sinyal dari BS (Base Station) ke MS (Mobile Station) secara umum ada 3 tahap. Tahap pertama adalah kuat sinyal yang dibangkitkan oleh BS (Base Station) dipengaruhi oles loss dan gain yang terjadi di BS (Base Station). Tahap kedua adalah path loss, dapat dihitung dengan Hata. Tahap ketiga adalah gain dan loss yang terjadi pada MS (Mobile Station). Oleh karena itu dapat dihitung (ETSI, 1999):

Dimana:

Pm = Kuat sinyal pada MS

Pb = Kuat sinyal dibangkit pada BS

Gb = Gain Atenna BS

Ld = Duplexer Loss BS

Lj = Jumper Loss BS

Lf = Feeder Loss BS

Ltf = Filter Loss BS

Mf = Fade Margin

Ab = Body Atennuation

Av = Vehide Atennuation

Abd = Building Atennuation

Lpj = Path loss

Lm = Feeder Loss MS

Gm = Gain Atenna MS

Lo = Other Loss

### 2.5 MATLAB

MATLAB adalah bahasa tingkat tinggi dan lingkungan yang interaktif untuk perhitungan numerik, visualisasi, dan pemrograman. Menggunakan MATLAB, dapat menganalisis data, mengembangkan algoritma, dan membuat model dan aplikasi. Bahasa, peralatan, dan built-in fungsi matematika memungkinkan Anda untuk menjelajahi beberapa pendekatan dan mencapai solusi lebih cepat dibandingkan dengan spreadsheet atau bahasa pemrograman tradisional, seperti C / C + + atau Java. MATLAB dapat digunakan untuk berbagai aplikasi, termasuk pemrosesan sinyal dan komunikasi, gambar dan video processing, sistem kontrol, uji dan pengukuran, keuangan komputasi, dan biologi komputasi. Lebih dari satu juta insinyur dan ilmuwan dalam industri dan akademisi menggunakan MATLAB, bahasa komputasi teknis (Little, 2013).

## BAB 3 Metode Percobaan

### 3.1 Tempat dan Waktu Percobaan

Percobaan dilakukan di Rumah pada tanggal 22 Mei 2013.

### 3.2 Alat

### 3.3 Program

Dibuat 3 program. Program pertama untuk menghitung path loss menurut Hata pada daerah urban, suburban, dan rural dengan jarak 1km, 2km, 3km, 4km, 5km, 6km, 7km, 8km, 9km, 10km, 11km, 12km, 13km, 14km, 15km, 16km, 17km, 18km, 19km, 20km. Program kedua adalah product loss adalah penjumlahan path loss dengan loss propagasi indoor. Program ketiga untuk adalah perhitungan kuat sinyal RX berdasarkan TX, gain, dan loss pada perangkat. Dapat juga dibuat dalam simulink.

![Gambar 3.1 Dalam bentuk simulink.png](https://cdn.steemitimages.com/DQmQV6EKnvPhJg82ZeQJxYWwBZVE4gKanGo5gsTnEcBsPT8/Gambar%203.1%20Dalam%20bentuk%20simulink.png)

Gambar 3.1 Dalam bentuk simulink



<pre style="background-color:black; color:lightgreen">
%Hata Model%Frequency 150 – 1000 (MHz)
f = 900;

%Base station height 30 – 200 (m)
Hb = 40;

%Mobile Height 1 – 10 (m)
Hm = 1.5;

%Distance 1 – 20 (km)
d = 1:20;

%Urban Area Loss small medium city (dB)
asm = (((1.1*log10(f))-0.7)*Hm)-((1.56*log10(f))-0.8);
Lusm = 69.55 + (26.16*log10(f)) – (13.82*log10(Hb)) – asm + ((44.9 – (6.55*log10(Hb)))*log10(d));

%Urban Area Loss large city (dB)
if f <= 200
    al = (8.29*(log10(1.54*Hm).^2))-1.1;
    Lul = 69.55 + (26.16*log10(f)) – (13.82*log10(Hb)) – al + ((44.9 – (6.55*log10(Hb)))*log10(d));
else if f >= 400
    al = (3.2*(log10(11.75*Hm).^2))-4.97;
    Lul = 69.55 + (26.16*log10(f)) – (13.82*log10(Hb)) – al + ((44.9 – (6.55*log10(Hb)))*log10(d));
else
    ‘frequency range undefine’;
end

%Suburban Area Loss small medium city (dB)
Lsusm = Lusm – (2*(log10(f/28).^2))-5.4;

%Suburban Area large city (dB)
Lsul = Lul – (2*(log10(f/28).^2))-5.4;

%Rural Area small medium city (Quasi-Open) (dB)
Lrqosm = Lusm – (4.78*(log10(f).^2))+(18.33*log10(f))-35.94;

%Rural Area large city (Quasi-Open) (dB)
Lrqol = Lul – (4.78*(log10(f).^2))+(18.33*log10(f))-35.94;

%Rural Area small medium city (Open Area) (dB)
Lrosm = Lusm – (4.78*(log10(f).^2))+(18.33*log10(f))-40.94;

%Rural Area large city (Open Area) (dB)
Lrol = Lul – (4.78*(log10(f).^2))+(18.33*log10(f))-40.94;

subplot(2,1,1);
plot(d,Lusm,d,Lsusm,d,Lrqosm,d,Lrosm);
grid on;
subplot(2,1,2);
plot(d,Lul,d,Lsul,d,Lrqol,d,Lrol);
grid on;
</pre>

Kode 3.1 Path Loss Hata Model

<pre style="background-color:black; color:lightgreen">
%Product Loss%u = urban %s = surban
%r = rural

%Total Path Loss (dB)
Lptu = Lul;
Lpts = Lsul;
Lptr = Lrol;

%Building Attenuation (dB)
Abdu = 15;
Abds = 12;
Abdr = 0;

%Vhide Attenuation (dB)
Avu = 0;
Avs = 0;
Avr = 0;

%Body Attenuation (dB)
Abu = 2;
Abs = 2;
Abr = 2;

%Fade Margin (dB)
Mfu = 5.6;
Mfs = 5.6;
Mfr = 5.6;

%Feeder loss per meter (dB/m)
Lf_m = 0.0646;

%Feeder loss (dB)
Lf = Hb*Lf_m;

%Product Loss (dB)
Lpu = Lptu + Abdu + Avu + Abu + Mfu + Lf;
Lps = Lpts + Abds + Avs + Abs + Mfs + Lf;
Lpr = Lptr + Abdr + Avr + Abr + Mfr + Lf; 
</pre>

Kode 3.2 Product Loss

<pre style="background-color:black; color:lightgreen">
%MS_BS RX Power%u = urban %s = surban
%r = rural

%MS TX Power (dBm)
Pm = 30;

%MS Antenna Gain (dBi)
Gm = 2;

%MS Feeder Loss (dB)
Lm = 0;

%BS TX Power (dBm)
Pb = 47;

%BS Antenna Gain (dBi)
Gb = 20;

%BS Diversity Gain (dB)
Gd = 3.5;

%BS Duplexer Loss (dB)
Ld = 0.8;

%BS Jumper/Connector Loss (dB)
Lj = 0.9;

%BS TX Filter Loss (dB)
Ltf = 2.3;

%Other Loss (dB)
Lo = 0;

%BS RX Power
Sbu = Pm + Gm – Lm + Gb + Gd – Ld – Lj – Lpu – Lo;
Sbs = Pm + Gm – Lm + Gb + Gd – Ld – Lj – Lps – Lo;
Sbr = Pm + Gm – Lm + Gb + Gd – Ld – Lj – Lpr – Lo;

%MS RX Power
Smu = Gm – Lm + Pb + Gb – Ld – Lj – Ltf – Lpu – Lo;
Sms = Gm – Lm + Pb + Gb – Ld – Lj – Ltf – Lps – Lo;
Smr = Gm – Lm + Pb + Gb – Ld – Lj – Ltf – Lpr – Lo;

plot(d,Smu,d,Sms,d,Smr);
legend(‘Urban’, ‘Suburban’, ‘Rural’);
title(‘Received Power’);
xlabel(‘Distance (km)’);
ylabel(‘Power (dBm)’);
grid on; 
</pre>

Kode 3.3 BS MS Power

<pre style="background-color:black; color:lightgreen">
a = 20; b = 20; ang=0:0.01:2*pi;
x1=d(1)*cos(ang);
y1=d(1)*sin(ang);
x2=d(2)*cos(ang);
y2=d(2)*sin(ang);
x3=d(3)*cos(ang);
y3=d(3)*sin(ang);
x4=d(4)*cos(ang);
y4=d(4)*sin(ang);
x5=d(5)*cos(ang);
y5=d(5)*sin(ang);
x6=d(6)*cos(ang);
y6=d(6)*sin(ang);
x7=d(7)*cos(ang);
y7=d(7)*sin(ang);
x8=d(8)*cos(ang);
y8=d(8)*sin(ang);
x9=d(9)*cos(ang);
y9=d(9)*sin(ang);
x10=d(10)*cos(ang);
y10=d(10)*sin(ang);
x11=d(11)*cos(ang);
y11=d(11)*sin(ang);
x12=d(12)*cos(ang);
y12=d(12)*sin(ang);
x13=d(13)*cos(ang);
y13=d(13)*sin(ang);
x14=d(14)*cos(ang);
y14=d(14)*sin(ang);
x15=d(15)*cos(ang);
y15=d(15)*sin(ang);
x16=d(16)*cos(ang);
y16=d(16)*sin(ang);
x17=d(17)*cos(ang);
y17=d(17)*sin(ang);
x18=d(18)*cos(ang);
y18=d(18)*sin(ang);
x19=d(19)*cos(ang);
y19=d(19)*sin(ang);
x20=d(20)*cos(ang);
y20=d(20)*sin(ang);

%plot(a+x1,b+y1,a+x2,b+y2,a+x3,b+y3,a+x4,b+y4,a+x5,b+y5,a+x6,b+y6,a+x7,b+y7,a+x8,b+y8,a+x9,b+y9,a+x10,b+y10,a+x11,b+y11,a+x12,b+y12,a+x13,b+y13,a+x14,b+y14,a+x15,b+y15,a+x16,b+y16,a+x17,b+y17,a+x18,b+y18,a+x19,b+y19,a+x20,b+y20);
fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],…
a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],…
a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],…
a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
colorbar(‘YTickLabel’,{‘0’,Smu(2),Smu(4),Smu(6),Smu(8),Smu(10),Smu(12),Smu(14),Smu(16),Smu(18),Smu(20)});
grid on;
xlabel(‘X-distance (km)’); %# Add an x axis label
ylabel(‘Y-distance (km)’); %# Add a y axis label
subplot(3,1,1); 
</pre>

Kode 3.4 Coverage 1/2

<pre style="background-color:black; color:lightgreen">
fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],…a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],… a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],…
a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
colorbar(‘YTickLabel’,{‘0’,Smu(4),Smu(8),Smu(15),Smu(17),Smu(20)});
grid on;
xlabel(‘X-distance (km)’); %# Add an x axis label
ylabel(‘Y-distance (km)’); %# Add a y axis label
subplot(3,1,2);

fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],…
a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],…
a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],…
a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
colorbar(‘YTickLabel’,{‘0’,Sms(4),Sms(8),Sms(15),Sms(17),Sms(20)});
grid on;
xlabel(‘X-distance (km)’); %# Add an x axis label
ylabel(‘Y-distance (km)’); %# Add a y axis label
subplot(3,1,3);

fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],…
a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],…
a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],…
a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
colorbar(‘YTickLabel’,{‘0’,Smr(4),Smr(8),Smr(15),Smr(17),Smr(20)});
grid on;
xlabel(‘X-distance (km)’); %# Add an x axis label
ylabel(‘Y-distance (km)’); %# Add a y axis label
</pre>

Kode 3.5 Coverage 2/2

### 3.4 Input

<table border="1">Tabel 3.1 Alat yang digunakan

<tbody>

<tr>

<th>NO</th>

<th>Alat</th>

<th>Spesifikasi</th>

<th>Software</th>

</tr>

<tr>

<td>1</td>

<td>PC</td>

<td>Intel® Pentium® core-i5 processor 4 GB RAM 2 GB VGA Operating System Windows 7 Ultimate 2</td>

<td>MATLAB 2010</td>

</tr>

</tbody>

</table>

<table border="1">Tabel 3.2 Input 1

<tbody>

<tr>

<td>Frequency (f)</td>

<td>900 MHz</td>

</tr>

<tr>

<td>Base Station Height (Hb)</td>

<td>40 m</td>

</tr>

<tr>

<td>Mobile Station Height (Hm)</td>

<td>1.5 m</td>

</tr>

<tr>

<td>Distance (d)</td>

<td>1:20 km</td>

</tr>

<tr>

<td>BS Power (dBm)</td>

<td>47</td>

</tr>

<tr>

<td>BS Antenna Gain (dBi)</td>

<td>20</td>

</tr>

<tr>

<td>MS Antenna Gain (dBi)</td>

<td>2</td>

</tr>

<tr>

<td>BS Duplexer Loss (dB)</td>

<td>0.8</td>

</tr>

<tr>

<td>BS Jumper/Connector Loss (dB)</td>

<td>0.9</td>

</tr>

<tr>

<td>BS Filter Loss (dB)</td>

<td>2.3</td>

</tr>

</tbody>

</table>

<table border="1">Tabel 3.3 Input 2

<tbody>

<tr>

<th>Keterangan</th>

<th>Urban</th>

<th>Suburban</th>

<th>Rural</th>

</tr>

<tr>

<td>Fade Margin (dB)</td>

<td>5.6</td>

<td>5.6</td>

<td>5.6</td>

</tr>

<tr>

<td>Feeder Loss / Meter (dB/m)</td>

<td>0.0646</td>

<td>0.0646</td>

<td>0.0646</td>

</tr>

<tr>

<td>Body Atennuation (dB)</td>

<td>2</td>

<td>2</td>

<td>2</td>

</tr>

<tr>

<td>Building Atennuation (dB)</td>

<td>15</td>

<td>12</td>

<td>0</td>

</tr>

</tbody>

</table>

### 3.5 Output

![Gambar 3.2 Grafik jarak terhadap MS power.png](https://cdn.steemitimages.com/DQmPgHaAWoH18XbYzcVDJ8mecVzvhAWzEGxz3tERJBSABgH/Gambar%203.2%20Grafik%20jarak%20terhadap%20MS%20power.png)

Gambar 3.2 Grafik jarak terhadap MS power

![Gambar 3.3 MS power pada jarak 120 km.png](https://cdn.steemitimages.com/DQmNjpuvQP2ZMtYB2epRja7dZ7pJSTpeZXvY61n2YFrqfCs/Gambar%203.3%20MS%20power%20pada%20jarak%20120%20km.png)

Gambar 3.3 MS power pada jarak 1:20 km



## BAB 4 Pembahasan

### 4.1 Kuat Sinyal Pada MS (Mobile Station)

Dapat dilihat pada gambar 3.1 bahwa kuat sinyal menurun secara eksponensial dengan semakin jauhnya MS (Mobile Station) dengan BS (Base Station). Menurut Hata dan Free Space Loss, loss pada sinyal akan semakin besar dengan meningkatnya nilai jarak (d). Grafik yang lebih jelas dapat dilihat pada gambar 4.1.

![Gambar 4.1 Grafik jarak terhadap MS (Mobile Station) diperbesar.png](https://cdn.steemitimages.com/DQmVJFseHVGKRJCxBtM1EjT1PeuCazwZrXigdDZqWsFYrmc/Gambar%204.1%20Grafik%20jarak%20terhadap%20MS%20(Mobile%20Station)%20diperbesar.png)

Gambar 4.1 Grafik jarak terhadap MS (Mobile Station) diperbesar



Dari grafik diatas terlihat bahwa rumus Hata menunjukkan pada daerah urban MS (Mobile Station) memiliki nilai kuat sinyal yang paling rendah dibanding dengan suburban dan rural. Sedangkan pada daerah rural memiliki kuat sinyal yang paling tinggi. Jika menggunakan rumus Hata pada jarak 20 km, Mobile harus memiliki sensitivitas minimum -130 dBm di daerah urban, -117 dBm di daerah suburban, dan -86 dBm di daerah rural. Dengan menggunakan MATLAB juga dapat diilustrasikan nilai kuat sinyal MS dalam bentuk peta pada radius tertentu sebagai berikut dengan BS ditengah:

![Gambar 4.2 MS power pada jarak 120 km diperbesar.png](https://cdn.steemitimages.com/DQmNw7DDWVLQ2tooMVcptsS3bDDQZh6Ww2AYgBey4fsuqn5/Gambar%204.2%20MS%20power%20pada%20jarak%20120%20km%20diperbesar.png)

Gambar 4.2 MS power pada jarak 1:20 km diperbesar



Grafik dan gambar diatas merupakan nilai:

6.55log(Hb))log(d)

Dengan input variasi d = 1 km sampai d = 20 km. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.

### 4.2 Meningkatkan MS Power

#### 4.2.1 Meminimalkan Hata Path Loss

Pada rumus Hata secara sekilas tidak kelihatan apakah parameter frekuensi atau tinggi BTS harus dinaikan atau diturunkan. Variabel jarak dan tinggi MS bersifat alami sehingga tidak dapat di atur. Jika menggunakan MATLAB dapat dilihat pengaruh frekuensi dan tinggi BTS terhadap loss (dengan d = 20 km dan Hm = 1.5 m).

![Gambar 4.3 Grafik Path Loss terhadap Base Station Height.png](https://cdn.steemitimages.com/DQmemfwzp4HejqSMrihEcjfhCvxY1CL1xQg6DXhdZdeesSk/Gambar%204.3%20Grafik%20Path%20Loss%20terhadap%20Base%20Station%20Height.png)

Gambar 4.3 Grafik Path Loss terhadap Base Station Height



Dari grafik diatas terlihat bahwa Path Loss akan berkurang bila BS (Base Station) semakin tinggi. Oleh karena itu meningkatkan tinggi BTS merupakan salah satu solusi untuk mengurangi loss. Grafik diatas merupakan nilai:

6.55log(Hb))log(d)

Dengan input variasi Hb = 30 m sampai d = 200 m. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.

![Gambar 4.4 Grafik Path Loss terhadap Frekuensi.png](https://cdn.steemitimages.com/DQmPqLh4m7HZxnLwZssLDef977DYBs22WVid8NXBv2G7K4p/Gambar%204.4%20Grafik%20Path%20Loss%20terhadap%20Frekuensi.png)

Gambar 4.4 Grafik Path Loss terhadap Frekuensi



Dari grafik diatas terlihat bahwa Path Loss akan bertambah bila frekuensi semakin tinggi. Grafik diatas merupakan nilai:

6.55log(Hb))log(d)

Dengan input variasi f = 150 MHz sampai f = 1000 MHz. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.

#### 4.2.2 Meningkatkan Spesifikasi Alat

Berdasarkan rumus link budget dari ETSI 1999:

Nilai kuat sinyal MS (Mobile Station) yang lebih ditinggi dapat dicapai dengan meningkatkan Gain antenna, meningkatkan daya pancar BS (Base Station), dan meminimalisir loss pada perangkat.

## BAB 5 Penutup

### 5.1 Simpulan

Menggunakan MATLAB jauh lebih cepat dari menghitung manual serta dapat membuat grafik dan menggambarkan illustrasi radius BS (Base Station) dengan MS (Mobile Station). Dari hasil MATLAB pada jarak 1 km kuat sinyal MS bernilai -85 dBm di daerah urban, -72 dBm di daerah suburban, dan -8-41 dBm di daerah rural. Pada jarak terjauh 20 km kuat sinyal MS bernilai -130 dBm di daerah urban, -117 dBm di daerah suburban, dan -86 dBm di daerah rural.

## Daftar Pustaka

*   ETSI. 1999\. ETSI TR 101 362 V8.3.0 (2000-04). Sophia Antipolis Cedex : France.
*   Kolawole, M. 2002\. Satellite Communication Engineering. Marced Deker, inc : New York
*   Little, J. 2013\. http://www.mathworks.com/products/matlab. Diakses 27 Mei 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-m-xxomnyk?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-m-xxomnyk?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/05/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab](https://0fajarpurnama0.github.io/bachelor/2020/11/05/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab)
*   [https://0fajarpurnama0.medium.com/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab-13144e92703](https://0fajarpurnama0.medium.com/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab-13144e92703)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/menentukan-coverage-macro-cell.html](https://0darkking0.blogspot.com/2020/11/menentukan-coverage-macro-cell.html)
*   [https://hive.blog/indonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama](https://hive.blog/indonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/97-menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/97-menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab)
*   [https://steemit.com/indonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama](https://steemit.com/indonesia/@fajar.purnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab](http://0fajarpurnama0.weebly.com/blog/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab)
*   [https://read.cash/@FajarPurnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab-ecc9b90a](https://read.cash/@FajarPurnama/menentukan-coverage-macro-cell-berdasarkan-okumura-hata-di-matlab-ecc9b90a)