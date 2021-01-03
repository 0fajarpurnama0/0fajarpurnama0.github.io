$("#mcmcbohdm").click(function(){
    $(".grid-content").html(`
<a href="http://www.mediafire.com/folder/8a9ibjrg9uou6/Hata">http://www.mediafire.com/folder/8a9ibjrg9uou6/Hata</a>
<h2>BAB I PENDAHULUAN</h2>

<h3>1.1 Latar Belakang</h3>

<p>Kuat sinyal yang diterima pada MS (Mobile Station) dari BS (Base Station) dipengaruhi secara umum pada 3 tahap. Tahap pertama adalah pembangkitan sinyal pada BS (Base Station), tahap kedua adalah propagasi, dan tahap ketiga adalah MS (Mobile Station).</p> <br />

<p>Sampai saat ini belum ditemukan perhitungan secara empiris propagasi sinyal, yang digunakan saat ini adalah prediksi berdasarkan percobaan dan penelitian (tidak ada teori). Salah satunya adalah Okumura-Hata dimana peneliti dari Jepang mengelilingi daerah urban, suburban, dan rural, mencoba jarak – jarak tertentu dan mengukur sinyal yang didapatkan oleh MS (Mobile Station) dari BS (Base Station).</p> <br />

<p>Untuk mengukur kuat sinyal menggunakan Okumura harus menyediakan tabel yang banyak berdasarkan situasi daerah. Walaupun menggunakan Okumura akurat namun boros terhadap waktu karena harus mengecek tabel. Hata menurunkan rumus perhitungan dari Okumura tetapi juga memerlukan waktu yang lama untuk dihitung secara manual.</p> <br />

<p>Pada makalah ini akan dibuat perhitungan dari BS (Base Station) ke MS (Mobile Station) berdasarkan rumus Hata di software MATLAB berdasarkan suatu data. Yang dihitung adalah RX (Received) Power di MS (Mobile Station) di daerah Urban, Suburban, dan Rural dari jarak 1 km sampai 20 km.</p>

<h3>1.2 Rumusan Masalah</h3>

<p>Bagaimana hasil perhitungan daya receiver di MS (Mobile Station) dari transmitter BS (Base Station) di daerah urban, suburban, dan rural berdasarkan rumus Hata menggunakan software MATLAB?</p>

<h3>1.3 Tujuan</h3>

<p>Untuk membuat perhitungan propagasi sinyal dari BS (Base Station) ke MS (Mobile Station) berdasarkan Okumura-Hata di MATLAB.</p>

<h3>1.4 Manfaat</h3>

<p>Lebih effisien tenaga dan waktu untuk mencari perhitungan propagasi sinyal.</p>

<h3>1.5 Ruang Lingkup dan Batasan</h3>
<ul>
<li>Perhitungan pada jarak 1 - 20 Km.</li>
<li>Sinyal pada frekuensi 900 MHz.</li>
<li>Spesifikasi alat telah ditentukan.</li>
</ul>

<h2>BAB II TINJAUAN PUSTAKA</h2>

<h3>2.1 Kuat Sinyal</h3>

<p>Satuan kuat sinyal adalah watt yaitu satuan daya pada listrik. Untuk memudahkan perhitungan kuat sinyal dari satuan watt dikonversi menjadi satuan decibell (Kolawole, 2002).</p>

<p>Dimana:</p>

<p>P = Daya listrik (watt)</p.

<h3>2.2 Free Space Loss</h3>

<p>Free Space Loss adalah kehilangan kuat sinyal di ruang hampa, tergantung pada panjang gelombang dan jarak. Ini merupakan loss yang pasti ada (Kolawole, 2002).</p>

<p>Dimana:</p>

<p>FSL = Free Space Loss</p>

<p>r = jarak antara transmitter dengan receiver (meter)</p>

<p>lamda = panjang gelombang (meter)</p>

<p>c = kecepatan cahaya (  meter/second)</p>

<h3>2.3 Hata Path Loss</h3>

<p>Sampai saat ini belum ditemukan rumus empiris perhitungan kuat sinyal dari BS (Base Station) ke MS (Mobile Station) pada lingkungan di dunia nyata. Yang ada adalah prediksi yang mendekati berdasarkan penelitian. Okumura dan Hata mengelilingi suatu daerah pada intensitas-intensitas tertentu dan mencatat kuat sinyal yang diterima MS (Mobile Station) dari BS (Base Station) pada jarak-jarak tertentu. Perhitungan Hata model sebagai berikut (ETSI, 1999):</p> <br />

<p>Syarat:</p>

<p>Frequency (f): 150 - 1000 MHz</p>

<p>Base Station Height (Hb): 30 - 200 m</p>

<p>Mobile Height (Hm): 1 - 10 m</p>

<p>Distance (d): 1 - 20 km</p>

<p>Untuk wilayah metropolitan: <br /><br />

a(Hm)=  f ≤ 200 MHz <br /><br />

a(Hm)=  f ≥ 400 MHz <br /><br />
</p>
<p>Untuk wilayah nonmetropolitan:<br /><br />

a(Hm)=
</p>

<p>Loss pada daerah Urban:

6.55log(Hb))log(d)<br /><br />
</p>
<p>
Loss pada daerah Suburban

Loss pada daerah Rural Quasi-Open

Loss pada daerah Rural Open-Area
</p>

<h3>2.4 Link Budget</h3>

<p>Perhitungan kuat sinyal dari BS (Base Station) ke MS (Mobile Station) secara umum ada 3 tahap. Tahap pertama adalah kuat sinyal yang dibangkitkan oleh BS (Base Station) dipengaruhi oles loss dan gain yang terjadi di BS (Base Station). Tahap kedua adalah path loss, dapat dihitung dengan Hata. Tahap ketiga adalah gain dan loss yang terjadi pada MS (Mobile Station). Oleh karena itu dapat dihitung (ETSI, 1999):</p> <br />

<p>Dimana:<br /><br />

Pm = Kuat sinyal pada MS<br /><br />

Pb = Kuat sinyal dibangkit pada BS<br /><br />

Gb = Gain Atenna BS<br /><br />

Ld = Duplexer Loss BS<br /><br />

Lj = Jumper Loss BS<br /><br />

Lf = Feeder Loss BS<br /><br />

Ltf = Filter Loss BS<br /><br />

Mf = Fade Margin<br /><br />

Ab = Body Atennuation<br /><br />

Av = Vehide Atennuation<br /><br />

Abd = Building Atennuation<br /><br />

Lpj = Path loss<br /><br />

Lm = Feeder Loss MS<br /><br />

Gm = Gain Atenna MS<br /><br />

Lo = Other Loss<br /><br />
</p>

<h3>2.5 MATLAB</h3>

<p>MATLAB adalah bahasa tingkat tinggi dan lingkungan yang interaktif untuk perhitungan numerik, visualisasi, dan pemrograman. Menggunakan MATLAB, dapat menganalisis data, mengembangkan algoritma, dan membuat model dan aplikasi. Bahasa, peralatan, dan built-in fungsi matematika memungkinkan Anda untuk menjelajahi beberapa pendekatan dan mencapai solusi lebih cepat dibandingkan dengan spreadsheet atau bahasa pemrograman tradisional, seperti C / C + + atau Java.</p> <br />

<p>MATLAB dapat digunakan untuk berbagai aplikasi, termasuk pemrosesan sinyal dan komunikasi, gambar dan video processing, sistem kontrol, uji dan pengukuran, keuangan komputasi, dan biologi komputasi. Lebih dari satu juta insinyur dan ilmuwan dalam industri dan akademisi menggunakan MATLAB, bahasa komputasi teknis (Little, 2013).</p>

<h2>BAB III METODE PERCOBAAN</h3>

<h3>3.1 Tempat dan Waktu Percobaan</h3>

<p>Percobaan dilakukan di Rumah pada tanggal 22 Mei 2013.</p>

<h3>3.2 Alat</h3>

<table border="1">
<caption>Tabel 3.1 Alat yang digunakan</caption>
<tr>
<th>NO</th>
<th>Alat</th>
<th>Spesifikasi</th>
<th>Software</th>
</tr>

<tr>
<td>1</td>
<td>PC</td>
<td>Intel® Pentium® core-i5 processor
4 GB RAM
2 GB VGA
Operating System Windows 7 Ultimate
2</td>
<td>MATLAB 2010</td>
</tr>

<h3>3.3 Program</h3>

<p>Dibuat 3 program. Program pertama untuk menghitung path loss menurut Hata pada daerah urban, suburban, dan rural dengan jarak 1km, 2km, 3km, 4km, 5km, 6km, 7km, 8km, 9km, 10km, 11km, 12km, 13km, 14km, 15km, 16km, 17km, 18km, 19km, 20km. Program kedua adalah product loss adalah penjumlahan path loss dengan loss propagasi indoor. Program ketiga untuk adalah perhitungan kuat sinyal RX berdasarkan TX, gain, dan loss pada perangkat. Dapat juga dibuat dalam simulink.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0f95739c-3990-4b73-b140-39cf3112f5a8-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.1 Dalam bentuk simulink</figcaption>
</figure>


<pre><code>
 %Hata Model%Frequency 150 &ndash; 1000 (MHz)
 f = 900;
 %Base station height 30 &ndash; 200 (m)
 Hb = 40;
 %Mobile Height 1 &ndash; 10 (m)
 Hm = 1.5;
 %Distance 1 &ndash; 20 (km)
 d = 1:20;
 %Urban Area Loss small medium city (dB)
 asm = (((1.1*log10(f))-0.7)*Hm)-((1.56*log10(f))-0.8);
 Lusm = 69.55 + (26.16*log10(f)) &ndash; (13.82*log10(Hb)) &ndash; asm + ((44.9 &ndash; (6.55*log10(Hb)))*log10(d));
 %Urban Area Loss large city (dB)
 if f &lt;= 200
 al = (8.29*(log10(1.54*Hm).^2))-1.1;
 Lul = 69.55 + (26.16*log10(f)) &ndash; (13.82*log10(Hb)) &ndash; al + ((44.9 &ndash; (6.55*log10(Hb)))*log10(d));
 else if f &gt;= 400
 al = (3.2*(log10(11.75*Hm).^2))-4.97;
 Lul = 69.55 + (26.16*log10(f)) &ndash; (13.82*log10(Hb)) &ndash; al + ((44.9 &ndash; (6.55*log10(Hb)))*log10(d));
 else
 &lsquo;frequency range undefine&rsquo;;
 end
 end
 %Suburban Area Loss small medium city (dB)
 Lsusm = Lusm &ndash; (2*(log10(f/28).^2))-5.4;
 %Suburban Area large city (dB)
 Lsul = Lul &ndash; (2*(log10(f/28).^2))-5.4;
 %Rural Area small medium city (Quasi-Open) (dB)
 Lrqosm = Lusm &ndash; (4.78*(log10(f).^2))+(18.33*log10(f))-35.94;
 %Rural Area large city (Quasi-Open) (dB)
 Lrqol = Lul &ndash; (4.78*(log10(f).^2))+(18.33*log10(f))-35.94;
 %Rural Area small medium city (Open Area) (dB)
 Lrosm = Lusm &ndash; (4.78*(log10(f).^2))+(18.33*log10(f))-40.94;
 %Rural Area large city (Open Area) (dB)
 Lrol = Lul &ndash; (4.78*(log10(f).^2))+(18.33*log10(f))-40.94;
 subplot(2,1,1);
 plot(d,Lusm,d,Lsusm,d,Lrqosm,d,Lrosm);
 grid on;
 subplot(2,1,2);
 plot(d,Lul,d,Lsul,d,Lrqol,d,Lrol);
 grid on; 
</code></pre>

Kode 3.1 Path Loss Hata Model

<pre><code>
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
</code></pre>

Kode 3.2 Product Loss

<pre><code>
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
 Sbu = Pm + Gm &ndash; Lm + Gb + Gd &ndash; Ld &ndash; Lj &ndash; Lpu &ndash; Lo;
 Sbs = Pm + Gm &ndash; Lm + Gb + Gd &ndash; Ld &ndash; Lj &ndash; Lps &ndash; Lo;
 Sbr = Pm + Gm &ndash; Lm + Gb + Gd &ndash; Ld &ndash; Lj &ndash; Lpr &ndash; Lo;
 %MS RX Power
 Smu = Gm &ndash; Lm + Pb + Gb &ndash; Ld &ndash; Lj &ndash; Ltf &ndash; Lpu &ndash; Lo;
 Sms = Gm &ndash; Lm + Pb + Gb &ndash; Ld &ndash; Lj &ndash; Ltf &ndash; Lps &ndash; Lo;
 Smr = Gm &ndash; Lm + Pb + Gb &ndash; Ld &ndash; Lj &ndash; Ltf &ndash; Lpr &ndash; Lo;
 plot(d,Smu,d,Sms,d,Smr);
 legend(&lsquo;Urban&rsquo;, &lsquo;Suburban&rsquo;, &lsquo;Rural&rsquo;);
 title(&lsquo;Received Power&rsquo;);
 xlabel(&lsquo;Distance (km)&rsquo;);
 ylabel(&lsquo;Power (dBm)&rsquo;);
 grid on; 
</code></pre>

Kode 3.3 BS MS Power

<pre><code>
 a = 20;b = 20; ang=0:0.01:2*pi;
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
 fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],&hellip;
 a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],&hellip;
 a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],&hellip;
 a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
 colorbar(&lsquo;YTickLabel&rsquo;,{&lsquo;0&rsquo;,Smu(2),Smu(4),Smu(6),Smu(8),Smu(10),Smu(12),Smu(14),Smu(16),Smu(18),Smu(20)});
 grid on;
 xlabel(&lsquo;X-distance (km)&rsquo;); %# Add an x axis label
 ylabel(&lsquo;Y-distance (km)&rsquo;); %# Add a y axis label
 subplot(3,1,1); 
</code></pre>
Kode 3.4 Coverage 1/2

<pre><code>
 fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],&hellip;a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],&hellip; a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],&hellip;
 a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
 colorbar(&lsquo;YTickLabel&rsquo;,{&lsquo;0&rsquo;,Smu(4),Smu(8),Smu(15),Smu(17),Smu(20)});
 grid on;
 xlabel(&lsquo;X-distance (km)&rsquo;); %# Add an x axis label
 ylabel(&lsquo;Y-distance (km)&rsquo;); %# Add a y axis label
 subplot(3,1,2);
 fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],&hellip;
 a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],&hellip;
 a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],&hellip;
 a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
 colorbar(&lsquo;YTickLabel&rsquo;,{&lsquo;0&rsquo;,Sms(4),Sms(8),Sms(15),Sms(17),Sms(20)});
 grid on;
 xlabel(&lsquo;X-distance (km)&rsquo;); %# Add an x axis label
 ylabel(&lsquo;Y-distance (km)&rsquo;); %# Add a y axis label
 subplot(3,1,3);
 fill(a+x20,b+y20,[0.4 0 0],a+x19,b+y19,[0.6 0 0],a+x18,b+y18,[0.9 0 0],a+x17,b+y17,[1 0.2 0],a+x16,b+y16,[1 0.4 0],a+x15,b+y15,[1 0.7 0],&hellip;
 a+x14,b+y14,[1 0.9 0],a+x13,b+y13,[0.8 1 0],a+x12,b+y12,[0.6 1 0],a+x11,b+y11,[0 1 0.3],a+x10,b+y10,[0 1 0.5],a+x9,b+y9,[0 1 0.7],&hellip;
 a+x8,b+y8,[0 1 0.9],a+x7,b+y7,[0 1 1],a+x6,b+y6,[0 0.7 1],a+x5,b+y5,[0 0.6 1],a+x4,b+y4,[0 0.4 1],a+x3,b+y3,[0 0.3 1],&hellip;
 a+x2,b+y2,[0 0.2 1],a+x1,b+y1,[0 0 1]);
 colorbar(&lsquo;YTickLabel&rsquo;,{&lsquo;0&rsquo;,Smr(4),Smr(8),Smr(15),Smr(17),Smr(20)});
 grid on;
 xlabel(&lsquo;X-distance (km)&rsquo;); %# Add an x axis label
 ylabel(&lsquo;Y-distance (km)&rsquo;); %# Add a y axis label
</pre></code>

Kode 3.5 Coverage 2/2

<h3>3.4 Input</h3>

<table border="1">
<caption>Tabel 3.2 Input 1</caption>
<tr>
<td>Frequency (f)</td>
<td>900 MHz</td>
</tr>
<tr>
<td>Base Station Height (Hb)</td>	<td>40 m</td>
</tr>
<tr>
<td>Mobile Station Height (Hm)</td>	<td>1.5 m</td>
</tr>
<tr>
<td>Distance (d)</td>	<td>1:20 km</td>
</tr>
<tr>
<td>BS Power (dBm)</td>	<td>47</td>
</tr>
<tr>
<td>BS Antenna Gain (dBi)</td>	<td>20</td>
</tr>
<tr>
<td>MS Antenna Gain (dBi)</td>	<td>2</td>
</tr>
<tr>
<td>BS Duplexer Loss (dB)</td>	<td>0.8</td>
</tr>
<tr>
<td>BS Jumper/Connector Loss (dB)</td>	<td>0.9</td>
</tr>
<tr>
<td>BS Filter Loss (dB)</td>	<td>2.3</td>
</tr>
</table>

<table border="1">
<caption>Tabel 3.3 Input 2</caption>

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
</td>
</table>
<h3>3.5 Output</h3>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/6e3fc4cf-a48c-4e5c-8604-e35e75490ffb-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.2 Grafik jarak terhadap MS power</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/9d8bf995-0ad1-49f8-b9bb-77d55477c451-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 3.3 MS power pada jarak 1:20 km</figcaption>
</figure>


<h2>BAB IV PEMBAHASAN</h3>

<h3>4.1 Kuat Sinyal Pada MS (Mobile Station)</h3>

<p>Dapat dilihat pada gambar 3.1 bahwa kuat sinyal menurun secara eksponensial dengan semakin jauhnya MS (Mobile Station) dengan BS (Base Station). Menurut Hata dan Free Space Loss, loss pada sinyal akan semakin besar dengan meningkatnya nilai jarak (d). Grafik yang lebih jelas dapat dilihat pada gambar 4.1.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8376324f-844b-4860-b715-f0d8d27b514d-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.1 Grafik jarak terhadap MS (Mobile Station) diperbesar</figcaption>
</figure>


<p>Dari grafik diatas terlihat bahwa rumus Hata menunjukkan pada daerah urban MS (Mobile Station) memiliki nilai kuat sinyal yang paling rendah dibanding dengan suburban dan rural. Sedangkan pada daerah rural memiliki kuat sinyal yang paling tinggi. Jika menggunakan rumus Hata pada jarak 20 km, Mobile harus memiliki sensitivitas minimum -130 dBm di daerah urban, -117 dBm di daerah suburban, dan -86 dBm di daerah rural. Dengan menggunakan MATLAB juga dapat diilustrasikan nilai kuat sinyal MS dalam bentuk peta pada radius tertentu sebagai berikut dengan BS ditengah:</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/73f42dce-68c0-43a0-8096-55e952f858f8-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.2 MS power pada jarak 1:20 km diperbesar</figcaption>
</figure>


<p>Grafik dan gambar diatas merupakan nilai:<br /><br />

6.55log(Hb))log(d) <br /> <br />

Dengan input variasi d = 1 km sampai d = 20 km. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.
</p>

<h3>4.2 Meningkatkan MS Power</h3>

<h4>4.2.1 Meminimalkan Hata Path Loss</h4>

<p>Pada rumus Hata secara sekilas tidak kelihatan apakah parameter frekuensi atau tinggi BTS harus dinaikan atau diturunkan. Variabel jarak dan tinggi MS bersifat alami sehingga tidak dapat di atur. Jika menggunakan MATLAB dapat dilihat pengaruh frekuensi dan tinggi BTS terhadap loss (dengan d = 20 km dan Hm = 1.5 m).</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/cab9f38b-7bbc-49d6-92fd-34aff1257c1d-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.3 Grafik Path Loss terhadap Base Station Height</figcaption>
</figure>


<p>Dari grafik diatas terlihat bahwa Path Loss akan berkurang bila BS (Base Station) semakin tinggi. Oleh karena itu meningkatkan tinggi BTS merupakan salah satu solusi untuk mengurangi loss. Grafik diatas merupakan nilai: <br /> <br />

6.55log(Hb))log(d) <br /> <br />

Dengan input variasi Hb = 30 m sampai d = 200 m. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.
</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/90f113e5-a4e6-408d-af08-404547e52c4f-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.4 Grafik Path Loss terhadap Frekuensi</figcaption>
</figure>


<p>Dari grafik diatas terlihat bahwa Path Loss akan bertambah bila frekuensi semakin tinggi. Grafik diatas merupakan nilai: <br /> <br />

6.55log(Hb))log(d) <br /> <br />

Dengan input variasi f = 150 MHz sampai f = 1000 MHz. Rumus diatas adalah Loss menurut Hata Model. Rumus didapatkan pada standar ETSI 1999.
</p>

<h4>4.2.2      Meningkatkan Spesifikasi Alat</h4>

<p>Berdasarkan rumus link budget dari ETSI 1999: <br /> <br />

Nilai kuat sinyal MS (Mobile Station) yang lebih ditinggi dapat dicapai dengan meningkatkan Gain antenna, meningkatkan daya pancar BS (Base Station), dan meminimalisir loss pada perangkat.</p>

<h2>BAB V PENUTUP</h2>

<h3>5.1 Simpulan</h3>

<p>Menggunakan MATLAB jauh lebih cepat dari menghitung manual serta dapat membuat grafik dan menggambarkan illustrasi radius BS (Base Station) dengan MS (Mobile Station). Dari hasil MATLAB pada jarak 1 km kuat sinyal MS bernilai -85 dBm di daerah urban, -72 dBm di daerah suburban, dan -8-41 dBm di daerah rural. Pada jarak terjauh 20 km kuat sinyal MS bernilai -130 dBm di daerah urban, -117 dBm di daerah suburban, dan -86 dBm di daerah rural.</p>

<h2>DAFTAR PUSTAKA</h2>

<ul>
<li>ETSI. 1999. ETSI TR 101 362 V8.3.0 (2000-04). Sophia Antipolis Cedex : France.</li>
<li>Kolawole, M. 2002. Satellite Communication Engineering. Marced Deker, inc : New Yor</li>
<li>Little, J. 2013. http://www.mathworks.com/products/matlab. Diakses 27 Mei 2013.</li>
</ul>
`)
});