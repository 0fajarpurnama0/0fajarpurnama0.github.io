---
layout: post
title: Implementasi Embedded Linux pada Jaringan Sensor Nirkabel Platform Imote2
category: bachelor
tags: [JSN, Imote2, Embedded Linux, ZigBee, WLAN, JTAG, OpenOCD]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRK7PUHda8MrpRBUtU7WqK93N2PVg4n7ZrGg47GQ8Dtee/Gambar%206b%20wlan%20daughter%20board.png
description: Pengguna TinyOS pada platform Imote2 menemukan banyak keterbatasan. Oleh karena itu komunitas pengembangkan embedded Linux.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/10/29/embedded-linux-jsn-imote2
---
## Catatan

*   Tulisan ini terpublikasi di **National Conference on Smart-Green Technology in Electrical and Information Systems (CSGTEIS), Bali, 14-15 November 2013**.
*   Hak cipta telah ditransfer ke Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana, dan berdasarkan kesepakatannya, penulis diperbolehkan untuk mengunggah tulisan ini ke blog dan website dengan syarat menyediakan tautan ke website publikasi pemilik hak cipta yaitu [https://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/view/7259](https://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/view/7259). Artinya, semua tulisan ini tidak terbuka untuk disalin ulang namun terhak cipta © Jurusan Teknik Elektro, Fakultas Teknik, Universitas Udayana dimana penyalin harus meminta izin kepada kami.
*   Penulis: [Fajar Purnama](https://0fajarpurnama0.github.io), [I Made Oka Widyantara](https://www.researchgate.net/profile/I_Made_Widyantara), dan [Nyoman Putra Sastra](https://www.researchgate.net/profile/Nyoman_Putra_Sastra).

## Abstrak

Sebelumnya JSN menggunakan sistem operasi Intel Platform X, SOS, dan TinyOS. Kini Platform X dan SOS tidak dikembangkan lagi, sehingga banyak peneliti menggunakan TinyOS. Pada akhir pengguna TinyOS pada platform Imote2 menemukan banyak keterbatasan seperti penerapan pada routing yang complex. Oleh karena itu komunitas Embedded Linux pengembangkan embedded Linux untuk platform Imote2\. Pada makalah ini dibahas secara rinci tahap untuk mengembed Linux pada target yaitu perangkat JSN radio sensorboard platform Imote2\. Host merupakan Linux operating system. Pengembedan meliputi 3 komponen utama yaitu bootloader, Linux kernel, dan filesystem. Embed dilakukan dengan proses flashing pada JTAG interface menggunakan software OpenOCD. Setelah proses embed, konfigurasi pada target melalui koneksi serial. Konfigurasi meliputi pengaktifkan alamat IP, SSHD, dan radio secara otomatis. Terakhir dibandingkan performansi target yang menggunakan IEEE 802.11 WLAN dan IEEE 802.15.4 ZigBee sebagai media transmisi. Hasilnya penggunaan IEEE 802.11 WLAN lebih boros terhadap memory dan daya listrik.

Kata Kunci: JSN, Imote2, Embedded Linux, ZigBee, WLAN, JTAG, OpenOCD.

## Pendahuluan

Secara keseluruhan makalah ini terdiri dari 4 bagian. Bagian pertama “Pendahuluan” menjelaskan sekilas mengenai jaringan sensor nirkabel (JSN), beberapa penelitian yang telah dilakukan pada bidang JSN, dan hal yang akan dibahas pada makalah. Bagian kedua “Intel Mote 2 (Imote2)” menjelaskan perangkat JSN dengan platform Imote2\. Pada bagian ini dapat dilihat bentuk fisik dari alat dan disebutkan beberapa sistem operasi yang diterapkan pada platform ini. Pada bagian ketiga “Implementasi Embedded Linux” dituliskan langkah-langkah untuk instalasi sistem operasi Linux pada platform Imote2\. Bagian terakhir adalah “Simpulan”.

JSN atau lebih dikenal dengan wireless sensor network (WSN) merupakan perangkat sensor yang saling terkomunikasi secara nirkabel. Perangkat-perangkat ini di letakkan pada daerah yang luas secara geografis dan membentuk jaringan sensor. JSN ini tidak harus terhubung dengan Internet. Tugas utama dari sensor ini sensor ini adalah mengumpulkan informasi dari lingkungan sekitar, setelah itu mengirimkan informasi tersebut ke perangkat pengguna melalui jaringan sensor. Perangkat ini telah diterapkan di bidang sipil, medis, dan lain-lain [[1]](#[1]).

Adanya JSN berdasarkan adanya banyak keterbatasan, seperti keterbatasan daya dan keterbatasan kemampuan kanal nirkabel. Oleh karena itu sensor nirkabel tersebut membentuk suatu jaringan disebut JSN. Selain diperlukan penempatan sensor secara strategis (menanggulangi coverage hole) diperlukan juga upaya untuk menghemat energi dan waktu dalam memberian informasi secara kontinyu karena sumber daya pada JSN terbatas [[2]](#[2]). Gambaran JSN dapat dilihat pada Gambar 1.



![Gambar 1 Gambaran JSN.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmV8LQMpjMfFxoRUGaeUZnyjNtKZi8gPJk3TLggrBfR2ey/Gambar%201%20Gambaran%20JSN.png)

Gambar 1 Gambaran JSN [[3]](#[3])



Pada JSN telah terdapat beberapa penelitian sebelumnya seperti penelitian [[4]](#[4]) yang menggunakan banyak perangkat JSN camera untuk menangkap citra yang sama. Perangkat tersebut ditaruh pada posisi yang berbeda namun mengarah pada obyek yang sama. Dengan menggabungkan citra yang ditangkap pada sudut yang berbeda dapat meningkatkan kualitas citra. Pada akhir penelitian diusulkan suatu bentuk JSN yang bekerja pada konsep ini. Penelitian [[5]](#[5]) mengarah pada pemodelan JSN camera dengan konsumsi daya rendah dengan menetapkan kualitas citra. Pada penelitian tersebut menyimpulkan beberapa point yang perlu diperhatikan pada pemodelan JSN camera, yaitu (i) metode pemilihan kamera (ii) metode dan strategi kompresi citra (iii) metode transmisi citra. Tetapi pada makalah ini tidak akan membahas JSN pada ruang lingkup tersebut.

Tidak seperti pada [[4]](#[4]) dan [[5]](#[5]) penelitian ini tentang embedded Linux pada JSN, seperti yang telah dilakukan oleh Peneliti [[6]](#[6]), [[7]](#[7]), dan [[11]](#[11]). Pada [[6]](#[6]) dan [[7]](#[7]), performansi platform Imote2 pada jaringan sensor nirkabel masing-masing menggunakan jaringan IEEE 802,15.4 Zigbee dan IEEE 802.11 WLAN. Sedangkan model implementasi embedded linux pada JSN, kedua penelitian ini menggunakan skema yang sama yaitu (i) menghubungkan perangkat JSN multimedia ke komputer (ii) instalasi bootloader, Linux kernel dan filesystem (iii) mengatur jaringan internet protocol (IP) dan secure shell daemon (SSHD) (iv) mengaktifkan radio (v) mengukur konsumsi memory dan daya listrik.

Setelah hal tersebut dilakukan baru kita dapat menambahkan beberapa fitur, seperti menangkap citra dengan camera sensor board IMB400 yang terlihat pada [[8]](#[8]) dan [[9]](#[9]). Namun pada makalah ini tidak membahas sejauh itu, tetapi membahas mengenai embedded Linux pada radio sensorboard platform Imote2 dengan rinci.

## Intel Mote 2 (Imote2)

Imote2 merupakan platform pada perangkat JSN yang dikembangkan oleh Intel Research pada bagian penelitian Platform X. Perangkat ini dibangun dengan konsumsi daya listrik yang rendah, dengan processor PXA271 XScale CPU, dan terintegrasi pada IEEE 802.15.4 ZigBee [[10]](#[10]). Processor ini (Intel Xscale processor PXA271) dapat beroperasi pada tegangan rendah (0.85V) dan frekuensi 13MHz hingga 104MHz. Frekuensi dapat dinaikkan hingga 416MHz dengan mengatur tegangan [[11]](#[11]). Secara umum Imote2 terdiri dari 4 bagian seperti terlihat pada Gambar 2.



![Gambar 2 perangkat imote2.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmaxj49A7cGLpVJEnUfYzUEFnuBojDXoWG6QmL3FdiJ61k/Gambar%202%20perangkat%20imote2.png)

Gambar 2 radio processor board (IPR2400) [[11]](#[11]), interface board [[11]](#[11]), sensor board (IMB400) [[8]](#[8]), dan power supply board (IBB2400) [[12]](#[12]).



PXA271 terdiri dari 3 chip (i) processornya sendiri (ii) 32MB SDRAM (iii) 32MB flash. Radio yang digunakan adalah TI CC2420 yang berdasarkan IEEE 802.15.4 ZigBee, dimana perangkat dengan standar ini pada PHY dan MAC layer beroperasi pada daya rendah dan radio jarak pendek, disasarkan pada control dan monitoring applications. CC2420 ini juga mendukung data rate 250kbps dengan 16 channel pada frekuensi 2.4GHz [[11]](#[11]).

Sebelumnya Imote2 bekerja pada Intel Platform X. Setelah Imote2 pindah ke Crossbow, Intel Platform X tidak lagi dikembangkan karena Crossbow mengeluarkan sistem operasinya sendiri. Sistem operasi yang kebanyakan dikembangkan oleh komunitas seperti SOS. Namun SOS berhenti dikembangkan pada tahun 2008\. Sekarang ini yang masih terlihat adalah TinyOS dan Linux [[11]](#[11]).

Sebelum adanya Embedded Linux, sistem operasi yang digunakan pada Imote2 adalah TinyOS. Kebanyakan publikasi di web menggunakan TinyOS seperti pada [[10]](#[10]), [[13]](#[13]), dan [[14]](#[14]). Sekarang dikembangkan Embedded Linux karena ditemukan batasan-batasan pada TinyOS seperti complex-routing pada suatu topologi JSN. Komunitas Embedded Linux melihat sistem operasi Embedded Linux pada Imote2 dapat mengatasi keterbatasan tersebut. Namun Embedded Linux pada Imote2 masih bersifat baru dan sedang dikembangkan [[8]](#[8]).

## Implementasi Embedded Linux

Perangkat yang digunakan sama seperti yang digunakan pada [6-9] dan [13-15], merupakan radio sensorboard multimedia platform Imote2\. Memiliki (i) 256KB SRAM memory (ii) 32MB flash (iii) 32MB SDRAM (iv) radio terintegrasi dengan 802.15.4 (v) radio optional dari SDIO dan UART (vi) 2.4GHz antena (vii) basic dan advanced connectors seperti 3xUART, I2C, 2xSPI, SDIO, I2S, AC97 audio, USB host, I/F camera, mini USB GPIO. Arsitektur perangkat tersebut dapat dilihat pada Gambar 3.



![Gambar 3 sensorboard imote2 dan arsitektur.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmb2GaiT8SAkiB5pzwUgyfSg4zrjPuxLSV8Qxw4QE1bTP7/Gambar%203%20sensorboard%20imote2%20dan%20arsitektur.png)

Gambar 3 arsitektur sensorboard Imote2 [[4]](#[4]), dan sensorboard Imote2 [[5]](#[5])



Pada bagian ini akan dibahas lebih rinci teknis mengembed Linux pada target yaitu radio sensorboard multimedia platform Imote2 dengan sumber utama [[11]](#[11]). Host adalah Linux OS. Distro Linux dapat digunakan yang mana saja, namun perintah-perintah pada makalah ini berbasis Ubuntu atau Debian. Secara ringkas tahapanya dapat dilihat pada Gambar. 4.



![Gambar 4 flowchart embedded linux imote2.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmSvR7REd914e9DNrKjLFh6V1tsGRczXYJkS48HB6TYbbk/Gambar%204%20flowchart%20embedded%20linux%20imote2.png)

Gambar 4 flowchart secara ringkas embed Linux pada Imote2



Penelitian [[6]](#[6]) dan [[7]](#[7]) terutama menyiapkan cross compiler dan chip debugger. Perintah-perintah yang dimasukkan berdasarkan [[13]](#[13]). Tetapi disini tidak memakai TinyOS. Cross compiler yang digunakan berupa cross compiler yang telah dicompile yaitu GCC dan GLIBC dari http://sourceforge.net/projects/imote2-linux/files/imote2-tools-linux. Tetap lebih baik bila mengcompile cross compiler sendiri agar lebih sesuai dengan kebutuhan perankgat.

Bila file terkomproesi dalam bentuk tape archive gunzip maka dapat diextract dengan perintah berikut:

<pre style="background-color:black; color:lightgreen">
tar xzvf /lokasi-file/nama-file.tar.gz
</pre>

Bila dalam bentuk tape archive bunzip2 maka dapat diextract dengan perintah berikut:

<pre style="background-color:black; color:lightgreen">
tar xjvf /lokasi-file/nama-file.tar.bz2
</pre>

Seandainya pada directory tersebut tidak diberikan akses penuh maka kondisi read, write, dan execute perlu diberi angka biner “1”. Bila memberi akses penuh maka rwx (read write execute) adalah “111<sub>(2)</sub>” merupakan “7<sub>(10)</sub>”. Maka perintahnya:

<pre style="background-color:black; color:lightgreen">
chmod –R 777 /lokasi-directory/namadirectory
</pre>

“7” pertama adalah memberi akses rwx pada adminstrator, yang kedua kepada user, dan ketiga untuk group, sedangkan “-R” agar berlaku terhadap semua isi pada directory tersebut. Penggunaan cross compiler ini akan sekaligus dibahas pada saat membentuk Linux kernel. Pada makalah ini langkah-langkahnya adalah sebagai berikut (merupaka satu directory dengan cross compiler yang telah didownload):

<pre style="background-color:black; color:lightgreen">
tar xzvf linux-gcc-4.1.2-arm-xscale-linux-gnu-glibc-2.3.3.tgz 
chmod –R 777 arm-xscale-linux-gnu 
</pre>

Sebelum memulai sebaiknya mendownload dependencies yang diperlukan:

<pre style="background-color:black; color:lightgreen">
apt-get install libncurses5-dev libusb-dev libftdi1 libftdi-dev ldconfig mtd-tools ssh
</pre>

Selanjutnya untuk Linux kernel digunakan dari http://www.kernel.org/pub/linux/kernel versi 2.6.29.1 rc 1.1 atau dapat “git” yang tersedia oleh komunitas. Bila diperlukan extract dan modifikasi hak akses Linux kernel tersebut. Setelah itu masuk ke directory dan atur cross compiler. Khusus untuk compiling Kernel, pada file bernama “Makefile” terdapat baris “ARCH=” dan “CROSS_COMPILE=” yang perlu dideklarasikan (masih kosong). Untuk mendeklarasikan secara universal dapat dilihat perintah berikut:

<pre style="background-color:black; color:lightgreen">
cd /lokasi-directory-Linux-kernel 
export ARCH=arm 
export CROSS_COMPILE=/lokasi-directory-cross-compiler/lokasi-bin/nama-cross-compiler- 
</pre>

Pada makalah ini, perintahnya adalah sebagai berikut (Linux kernel dan cross compiler pada satu directory):

<pre style="background-color:black; color:lightgreen">
tar xzvf linux-2.6.29.1.tar.gz  
chmod –R 777 linux-2.6.29.1 
cd linux-2.6.29.1 
export ARCH=arm 
export CROSS_COMPILE= ../arm-xscale-linux-gnu/bin/arm-xscale-linux-gnu- 
</pre>

Dengan perintah tersebut maka ditentukan platform adalah “arm” (merupakan platform unutuk perangkat-perangkat berukuran kecil) dan menggunana cross compiler “arm-xscale-linux-gnu”, directory “arm-xscale-linux-gnu/bin” terdapat file “arm-xscale-linux-gnu-gcc”, “arm-xscale-linux-gnu-g++”, dan lain-lain. Untuk mengatur apa saja yang dicompile dapat dilihat pada file “Makefile”. Untuk mempermudah digunakan make menuconfig. Maka diperlukan “libncurses5-dev”. Selanjutnya diperlukan untuk copy file “imote2-linux_defconfig” ke directory /root menjadi nama “.config”.

<pre style="background-color:black; color:lightgreen">
cp /lokasi-directory-Linux-kernel/lokasi-file-imote2-linux_defconfig/imote2-linux_defconfig /root/.config 
</pre>

Pada makalah ini perintahnya (masih pada directory Linux kernel):

<pre style="background-color:black; color:lightgreen">
cp arch/arm/configs/imote2-linux_defconfig /root/.config
</pre>

Untuk compile kernel:

<pre style="background-color:black; color:lightgreen">
make menuconfig
</pre>

Disini dapat diatur apa saja yang ingin di instal.

<pre style="background-color:black; color:lightgreen">
make jenis-image
</pre>

Jenis image biasanya berupa zImage atau bzImage. Pada makalah ini:

<pre style="background-color:black; color:lightgreen">
make zImage
</pre>

Selanjutnya membuat module:

<pre style="background-color:black; color:lightgreen">
make module 
make INSTALL_MOD_PATH=$PWD/modules modules_install 
</pre>

Perintah ini akan menginstalasi module pada directory bernama “modules”.

Setelah selesai compile Linux kernel adalah compile filesystem. Source dari filesystem yang digunakan dari http://sourceforge.net/projects/imote2-linux/files/imote2-rootfs. Dibutuhkan juga mkfs.jffs2 tool yang terdapat pada mtd-tools. JFFS2 (Journaled Flash File System 2) merupakan file system yang didesain untuk flash file perangkat pada embedded system. Setelah directory file system di extract, modules yang telah dicompile pada Linux-kernel dicopy pada directory ini.

Untuk membuat 16MB filesystem:

<pre style="background-color:black; color:lightgreen">
mkfs.jffs2 --squash-uid -r ./linux-rootfs -o rootfs.jffs2 -e 0x20000 --pad=0x01000000
</pre>

Untuk membuat 32MB filesystem:

<pre style="background-color:black; color:lightgreen">
mkfs.jffs2 --squash-uid -r ./linux-rootfs -o rootfs.jffs2 -e 0x20000 --pad=0x01DC0000
</pre>

Bahan terakhir yang dibutuhkan setelah Linux kernel dan filesystem adalah bootloader. Pada makalah ini, bootloader yang digunakan tersedia pada http://sourceforge.net/projects/imote2-linux/files/blob-im2.

Bila bahan sudah tersedia maka proses selanjutnya adalah embed pada radio sensorboard platform Imote2\. Seperti pada penelitian [[6]](#[6]) dan [[7]](#[7]) langkah-langkah untuk flashing, pada makalah ini langkah-langkah flashing berdasarkan tutorial [[14]](#[14]) dengan catatan tidak mengikuti langkah-langkah yang menggunakan TinyOS. Untuk flashing perlu diinstalasi driver JTAG interface FTDI. Package yang diperlukan pada host adalah libusb-dev, libftdi1, libftdi-dev, dan ldconfig. OpenOCD yang digunakan tersedia pada http://downloads.sourceforge.net/project/openocd. Langkah-langkah untuk instalasi OpenOCD sebagai berikut (didalam directory OpenOCD yang telah diextract):

<pre style="background-color:black; color:lightgreen">
./configure --enable-ft2232_libftdi 
make 
make install 
chmod –R 777 /lokasi-openocd-yang-telah-diinstalasi 
openocd -f /lokasi-file-configuration -f /lokasi-file-configurationintelmote 
</pre>

Pada makalah ini langkah-langkahnya sebagai berikut:

<pre style="background-color:black; color:lightgreen">
tar xjvf openocd-0.4.0-rc1.tar.bz2 
cd openocd-0.4.0-rc1 
./configure --enable-ft2232_libftdi 
make 
make install 
chmod –R 777 /usr/local/bin/openocd 
</pre>

Hubungkan kabel USB seperti pada gambar 4\. (b). Perintah untuk mengkoneksikan target dengan host:

<pre style="background-color:black; color:lightgreen">
openocd -f /lokasi/file/configuration –f /lokasi/file/ configuration-intelmote
</pre>

Pada makalah ini untuk embed bootloader, Linux kernel, dan filesystem seperti berikut (pada directory yang berisi file bootloader, directory Linux kernel, dan directory filesystem):

<pre style="background-color:black; color:lightgreen">
openocd –f /usr/local/share/openocd/scripts/interface/ jtagkey.cfg –f board/crossbow_tech_IMote2.cfg 
telnet localhost 4444 
reset halt 
flash protect 0 0 258 off 
flash erase_sector 0 0 258 
flash write_image blob-im2 0x0 bin 
flash write_image linux-2.6.29.1/arch/arm/boot/zImage /zImage  
0x00040000 bin 
flash write_image rootfs.jffs2 0x00240000 bin 
</pre>

Perintah “reset halt” agar target dalam keadaan halted, perintah “flash protect 0 0 258 off” untuk menghilangkan protect, perintah “flash erase_sector 0 0 258” untuk menghapus isi pada sector tersebut (menghapus isi), dan perintah “flash write source destination” untuk mengisi target dari host.

Jika semua langkah-langkah tersebut telah dilaksanakan maka Linux telah berhasil diembed. Terakhir adalah konfigurasi pada target melalui koneksi serial, seperti pada [[6]](#[6]), [[7]](#[7]), dan [[15]](#[15]). Sebelum lanjut hubungan kabel USB seperti Gambar 5.



![Gambar 5 hubung kabel usb imote2.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmdSr5ecZdgqt9j5BjjkRjweE4zWrmJG7q4AWBksHj7BSp/Gambar%205%20hubung%20kabel%20usb%20imote2.jpg)

Gambar 5 Cara menghubungkan kabel USB



Applikasi serial terminal pada host dapat digunakan Putty, GTKterm, dan masih banyak aplikasi lainnya. Untuk koneksi serial dari host ke target diperlukan pengaturan sebagai berikut:

*   Connection type : serial
*   /dev/ttyUSB1 (atau 0)
*   Speed 115200
*   Data bit: 8
*   Stop bit: 1
*   Parity: none
*   Flow control: XON/OFF

Alamat IP yang digunakan adalah 192.168.99.101/24\. Untuk mengaktifkan alamat IP dan SSHD secara otomatis, dan mengganti alamat IP, langkah-langkahnya sebagai berikut:

<pre style="background-color:black; color:lightgreen">
ln -s /etc/init.d/networking /etc/rc2.d/S10networking 
ln -s /etc/init.d/sshd /etc/rc2.d/S11sshd 
ln -s /etc/init.d/networking /etc/rc5.d/S10networking 
ln -s /etc/init.d/sshd /etc/rc5.d/S11sshd 
vi /etc/init.d/networking (ganti IP address) 
vi /etc/network/interfaces (ganti IP address) 
</pre>

Selanjutnya membuat script agar radio hidup secara otomatis. Scriptnya tersimpan pada directory “/root/tosmac” dengan nama loaddriver, dan isi loaddriver sebagai berikut:

<pre style="background-color:black; color:lightgreen">
#!/bin/sh 
insmod /lib/modules/2.6.29.1_r1.1/kernel/arch/arm/mach-pxa/ssp.ko 
insmod /lib/modules/2.6.29.1_r1.1/kernel/drivers/tosmac/tos_mac.lo 
mknod /dev/tosmac c 240 0 
</pre>

Maka untuk mengaktifkan radio dan dapat mengirim data secara otomatis langkah-langkahnya sebagai berikut:

<pre style="background-color:black; color:lightgreen">
ln –s /root/tosmac/loaddriver /etc/rc2.d/S12loaddriver 
ln –s /root/tosmac/loaddriver /etc/rc5.d/S12loaddriver 
ln –s /root/tosmac/CntToLeds /etc/rc2.d/S14Transmitter (pengirim data otomatis) 
ln –s /root/tosmac/CntToLeds /etc/rc5.d/S14Transmitter (pengirim data otomatis) 
</pre>

Tahap embed dan konfigurasi telah selesai.

Berbeda dengan penelitian [[6]](#[6]) yang menggunakan transmisi radio IEEE 802.15.4 ZigBee, penelitian [[7]](#[7]) menggunakan transmisi radio IEEE 802.11 WLAN. Pada [[7]](#[7]) dibuatkan daughter board yang akan terkoneksi dengan WLAN USB TP-LINK seperti Gambar 6.



![Gambar 6 skema dan alat daughter board.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmWRih4NQJwvdWJ52sFYNAB9LX7QC7VWx9xZzeHHuo7vaf/Gambar%206%20skema%20dan%20alat%20daughter%20board.png)

![Gambar 6b wlan daughter board.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRK7PUHda8MrpRBUtU7WqK93N2PVg4n7ZrGg47GQ8Dtee/Gambar%206b%20wlan%20daughter%20board.png)

Gambar 6 Daughter board [[7]](#[7]) (a) skema (b) alat



Pertama perlu diaktifkan USB host support dengan menambahkan script berikut pada file linux-2.6.29.1/arch/arm/mach-pxa/imote2.c. Scriptnya sebagai berikut [[7]](#[7]):

<pre style="background-color:black; color:lightgreen">
//baris pertama
#include <mach/ohci.h> 

//isi 
/*  
* Configure USB Host (OHCI)  
* For Imote2 the following configuration is used:  
* USB Port 1 is used as USB Host  
* USB Port 2 is used as USB Gadget (as default for Imote2)  
*/  

static int imote2_ohci_init(struct device *dev) {  
return 0;  
}  

static struct pxaohci_platform_data imote2_ohci_platform_data = {  
.port_mode = PMM_NPS_MODE,  
.init = imote2_ohci_init,  
.flags = ENABLE_PORT1 | NO_OC_PROTECTION,  
.port_mode = PMM_PERPORT_MODE,  
.power_budget = 150, //300  
};
//baris terakhir 

pxa_set_ohci_info(&imote2_ohci_platform_data);
 </pre>

Pada “make menuconfig” dikonfigurasi sebagai berikut [[7]](#[7]):

<pre style="background-color:black; color:lightgreen">
1\. Konfigurasi modul USB-Host. 
Device Drivers >USB support >Support for Host-side USB <*>  
  >USB device filesystem [*]  
  >USB device class-device (DEPRECATED)[*]  
  >USB Monitor<*>  
  >OHCI HCD support<*>

2\. Konfigurasi modul Wireless LAN 802.11\. 
Networking support >wireless >Improved wireless configuration API (M)  
  >nl80211 new netlink interface support [*]  
  >Wireless extensions sysfs files [*]  
  >Common routines for IEEE802.11 drivers (M)  
  >Generic IEEE 802.11 Networking (M)  
  >Enable LED triggers [*] 
  Device Drivers >Network device Support >Wireless LAN 
    >Wireless LAN (IEEE 802.11) [*] 

3Konfigurasi modul driver TP-Link WN-321G (rt73). 
Device Drivers >Network Device Support>Wireless LAN  
  >Ralink driver support [M]  
  >Ralink rt2501/rt73 (usb0 support) [M]  
  >Ralink debug output [*] 
</pre>

Selanjutnya mengulang tahap-tahap dari compile Linux kernel dan filesystem hingga flashing dan konfigurasi. Pada penelitian [[7]](#[7]) menggunakan TL-WN321G (TP-LINK), driver versi Linux dapat didownload pada situs resminya. Langkah-langkah instalasinya sebagai berikut:

<pre style="background-color:black; color:lightgreen">
tar xvf TpLink_TL_WN321G_in_Linux.tar  
cd TpLink_TL_WN321G_in_Linux/Module/  
gedit Makefile  
</pre>

1.  Menambahkan baris “PLATFORM=EMBEDDED”.
2.  Menghilangkan baris “PLATFORM=PC” dan “PLATFORM=CMPC”.
3.  Mengatur link dari sumber kernel yang dicompile.

<pre style="background-color:black; color:lightgreen">
ifeq ($(PLATFORM),EMBEDDED)  
LINUX_SRC=../linux-2.6.29.1  
endif  

#export ARCH=arm  
#export CROSS_COMPILE=../arm-xscale-linux-gnu/bin/arm-xscale-linux-gnu- 
#make all   
</pre>

Proses compile akan menghasilkan sebuah file yang bernama “rt73.ko” yang akan digunakan sebagai module untuk driver Wireless Lan 802.11\. Kemudian copy data tersebut pada target dengan perintah berikut:

<pre style="background-color:black; color:lightgreen">
scp rt73.ko root@192.168.99.101:/root rt73.ko
</pre>

Selanjutnya pada target dibuat script agar radio aktif secara otomatis berdasarkan langkah-langkah dari [[7]](#[7]).

<pre style="background-color:black; color:lightgreen">
ssh –l root 192.168.99.101 
vi /etc/rc2.d/S50StartupScript 
</pre>

Scriptnya seperti berikut:

<pre style="background-color:black; color:lightgreen">
#********************************************************* 
#********S50StartupScipt File***************************** 
#********This file configures Wlan on Imote2************** 

#install driver 
cd /root/ 
insmod rt73.ko 
echo -n 1 > /sys/bus/usb/devices/1-1/bConfigurationValue 

#Configure Wlan 
sleep 10 
ifconfig rausb0 up 
iwconfig rausb0 essid imote2 
iwconfig rausb0 mode ad-hoc 
ip link set rausb0 up 
ifconfig rausb0 inet 192.168.1.2 
ifconfig rausb0 netmask 255.255.255.0 
ifconfig rausb0 gateway 192.168.1.1 
#********EOF S50StartupScript File************************* 
</pre>

<pre style="background-color:black; color:lightgreen">
chmod 777 S50StartupScript 
</pre>

Tahap konfigurasi bila menggunakan IEEE 802.11 WLAN telah selesai. Jika dibandingkan kedua penelitian tersebut, pada [[7]](#[7]) lebih boros baik pada konsumsi memory maupun konsumsi daya listrik dibanding [[6]](#[6]). Pada penelitian [[7]](#[7]) memory yang dikonsumsi adalah 16.9MB dari 29.8MB, sedangkan pada [[6]](#[6]) hanya dikonsumsi 13.6MB dari 29.8MB. Konsumsi daya listrik dapat dilihat pada Gambar 7.



![Gambar 7 kapasitas daya imote2 wlan vs zigbee.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmeVAowX9P9WUYh8jn1YFxNLsmRWMkacDugQW7WtGpCxRR/Gambar%207%20kapasitas%20daya%20imote2%20wlan%20vs%20zigbee.png)

Gambar 7 Konsumsi daya listrik pada target perangkat [[6]](#[6]), dan perangkat [[7]](#[7])



## Simpulan

Dari makalah ini dapat ditarik kesimpulan sebagai berikut:

1.  Linux kernel dicross-compile ke platform Imote2 terlebih dahulu. Proses selanjutnya membentuk filesystem dan menyiapkan bootloader.
2.  Untuk embed bootloader, Linux kernel, dan filesystem pada target melalui interface JTAG menggunakan software OpenOCD. Prosesnya disebut flashing.
3.  Konfigurasi target meliputi pengaktifkan secara otomatis alamat IP, SSHD, dan radio melalui koneksi serial, dengan membuat link ke script konfigurasi di RC level 2 dan level 5.
4.  Dari penelitian [[6]](#[6]) dan [[7]](#[7]) penggunakan media transmisi dengan standar IEEE 802.11 WLAN pada platform Imote2 lebih boros memory dan daya listrik dibanding menggunakan media transmisi dengan standar IEEE 802.15.4 ZigBee.

## Referensi

1.  H. Y. Shwe, C. Wang, P. H. J. Chong, A. Kumar. "Robust Cubic-Based 3-D Localization for Wireless Sensor Networks," wireless sensor network, vol. 5, no. 9, hal. 169-179, September 2013\. [online]. Tersedia: [www.scirp.org](www.scirp.org). [Diakses: 12 Oktober 2013]
2.  [http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/WSN.svg/537px-WSN.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/WSN.svg/537px-WSN.svg.png). [Diakses: 14 Oktober 2013]
3.  N. P. Sastra. “Wireless Sensor Network,” 18 Desember 2009\. [Entri Blog]. Blog Wireless Sensor Network Nyoman Putra Sastra. Tersedia: [http://staff.unud.ac.id/~putra/2009/12/18/wireless-sensor-network.html](http://staff.unud.ac.id/~putra/2009/12/18/wireless-sensor-network.html). [Diakses: 14 Oktober 2013].
4.  N. P. Sastra, Wirawan, G. Hendrantoro, “Virtual View Image over Wireless Visual Sensor Network,” Telkomnika, vol.9, no.3, hal. 489-496, Desember 2013\. [online]. Tersedia: [http://journal.uad.ac.id/index.php/TELKOMNIKA/article/view/1286/677](http://journal.uad.ac.id/index.php/TELKOMNIKA/article/view/1286/677). [Diakses: 14 Oktober 2013].
5.  N. P. Sastra, D. M. Wiharta, I. M. O. Widyantara, Wirawan. “Modeling Wireless Visual Sensor Network with a Low Energy Consumption for Desired Image Quality and View Point,” academia.edu shared research [online]. Tersedia: [http://www.academia.edu/831948/Modeling_Wireless_Visual_Sensor_Network_with_a_Low_Energy_Consumption_for_Desired_Image_Quality_and_View_Point](http://www.academia.edu/831948/Modeling_Wireless_Visual_Sensor_Network_with_a_Low_Energy_Consumption_for_Desired_Image_Quality_and_View_Point). [Diakses: 14 Oktober 2013].
6.  I. M. Wiasta, "Performasi Platform Imote2 pada Jaringan Sensor Nirkabel," Laporan Tugas Akhir, Jurusan Teknik Elektro., Universitas Udayana, 2012.
7.  F. S. Natha, "Performasi Platform Imote2 Menggunakan Standar 802.11 pada Jaringan Sensor Nirkabel," Laporan Tugas Akhir, Jurusan Teknik Elektro., Universitas Udayana, 2012.
8.  N. P. Sastra, Wirawan, G. Hendrantoro, “Design and Implementation of Wireless Multimedia Sensor Network Nodes Based on Linux OS,” academia.edu shared research [online]. Tersedia: [http://www.academia.edu/454554/Design_and_Implementation_of_Wireless_Multimedia_Sensor_Network_Nodes_Based_on_Linux_OS](http://www.academia.edu/454554/Design_and_Implementation_of_Wireless_Multimedia_Sensor_Network_Nodes_Based_on_Linux_OS). [Diakses: 14 Oktober 2013].
9.  N. P. Sastra. “Test Capture Image pada Intelmote 2 aka My First IMB400 Image,” 18 April 2010\. [Entri Blog]. Blog Wireless Sensor Network Nyoman Putra Sastra. Tersedia: [http://staff.unud.ac.id/~putra/2010/04/18/test-capture-image-pada-intelmote-2-aka-my-first-imb400-image.html](http://staff.unud.ac.id/~putra/2010/04/18/test-capture-image-pada-intelmote-2-aka-my-first-imb400-image.html). [Diakses: 18 September 2013].
10.  Stanford, “Imote2,” stanford.edu [online]. Tersedia: [http://tinyos.stanford.edu/tinyos-wiki/index.php/Imote2](http://tinyos.stanford.edu/tinyos-wiki/index.php/Imote2) [Terakhir dimodifikasi: 15 Mei 2013, 14:07].
11.  Jorg Kasteleiner, “[Principles of applying Embedded Linux on Imote2](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.471.3873&rep=rep1&type=pdf),” Diploma Thesis, Faculty of Computer Science and Engineering., University of Applied Sciences Frankfurt am Main, 2010.
12.  “[WSN_Imote2_HW_Bundle_Datasheet](http://cpham.perso.univ-pau.fr/ENSEIGNEMENT/PAU-UPPA/RESA-M2/DOC/WSN_Imote2_HW_Bundle_Datasheet.pdf),” Crossbow Technology Inc, San Jose, California.
13.  N. P. Sastra. “Langkah-Langkah Instalasi TinyOS 2.1.0 Intel mote 2 pada Ubuntu 8.04/9.04/9.10,” 18 Desember 2009\. [Entri Blog]. Blog Wireless Sensor Network Nyoman Putra Sastra. Tersedia: [http://staff.unud.ac.id/~putra/2009/12/18/langkah-langkah-instalasi-tinyos-untuk-intel-mote2.html](http://staff.unud.ac.id/~putra/2009/12/18/langkah-langkah-instalasi-tinyos-untuk-intel-mote2.html). [Diakses: 18 September 2013].
14.  N. P. Sastra. “Flashing Program pada Intelmote2,” 17 April 2010\. [Entri Blog]. Blog Wireless Sensor Network Nyoman Putra Sastra. Tersedia: [http://staff.unud.ac.id/~putra/2010/04/17/flashing-program-pada-intelmote2.html](http://staff.unud.ac.id/~putra/2010/04/17/flashing-program-pada-intelmote2.html). [Diakses: 18 September 2013].
15.  N. P. Sastra. “Tutorial Instalasi Linux embedded system pada intel mote2 (imote2) board,” 16 Juni 2010\. [Entri Blog]. Blog Wireless Sensor Network Nyoman Putra Sastra. Tersedia: [http://staff.unud.ac.id/~putra/2010/06/16/tutorial-instalasi-linux-embedded-system-pada-intel-mote2-imote2-board.html](http://staff.unud.ac.id/~putra/2010/06/16/tutorial-instalasi-linux-embedded-system-pada-intel-mote2-imote2-board.html). [Diakses: 18 September 2013].

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-pl-xpjqylv?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-pl-xpjqylv?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/10/29/embedded-linux-jsn-imote2](https://0fajarpurnama0.github.io/bachelor/2020/10/29/embedded-linux-jsn-imote2)
*   [https://0fajarpurnama0.medium.com/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2-8a78baf42538](https://0fajarpurnama0.medium.com/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2-8a78baf42538)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/embedded-linux-jsn-imote2](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/embedded-linux-jsn-imote2)
*   [https://blurt.world/blurtindonesia/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama](https://blurt.world/blurtindonesia/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/10/implementasi-embedded-linux-pada.html](https://0darkking0.blogspot.com/2020/10/implementasi-embedded-linux-pada.html)
*   [https://hive.blog/indonesian/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama](https://hive.blog/indonesian/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/86-implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/86-implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2)
*   [https://steemit.com/indonesian/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama](https://steemit.com/indonesian/@fajar.purnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2](http://0fajarpurnama0.weebly.com/blog/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2)
*   [https://read.cash/@FajarPurnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2-27cbf912](https://read.cash/@FajarPurnama/implementasi-embedded-linux-pada-jaringan-sensor-nirkabel-platform-imote2-27cbf912)