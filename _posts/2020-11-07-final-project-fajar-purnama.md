---
layout: post
title: Image Transmission on Wireless Visual Sensor Networking Devices Imote2 Platform Based on IEEE 802.15.4 ZigBee Embedded Linux
category: bachelor
tags: [wireless sensor network, imote2, zigbee, transmission, image, jpeg2000, openjpeg, c, tosmac, embedded linux, final project]
featuredimage: https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmXcpZYEYG2kA3sjC3mYM25vpuJ92XdWc8TFuusKaGWhRF/Gambar%203.3%20Skema%20testbed.PNG
description: My final project is to create a C program for image delivery on WSN Imote2 ZigBee and save image transmission cost with JPEG2000 using embedded Linux.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/07/final-project-fajar-purnama
---
<iframe src="//www.slideshare.net/slideshow/embed_code/key/9JMWGnpBtFQs9z" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Transmisi citra pada perangkat jaringan sensor visual nirkabel platform imote2 berbasis ieee 802.15.4 zig bee embedded linux](//www.slideshare.net/0DarkKing0/transmisi-citra-pada-perangkat-jaringan-sensor-visual-nirkabel-platform-imote2-berbasis-ieee-802154-zig-bee-embedded-linux "Transmisi citra pada perangkat jaringan sensor visual nirkabel platform imote2 berbasis ieee 802.15.4 zig bee embedded linux")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Notes

*   This is my English translated final project as a requirement for my undergraduate graduation in the Electrical Engineering Department, Faculty of Engineering, Udayana University. However, this Final Project is only deposited in the Udayana University library and has never been published anywhere else and I hold the full copyright and it has been 6 years since this Final Project was written. Therefore, I declare that this Final Project is open, may be copied, may be republished, and may be sold, provided that I mention my name as the original author and state that this report is open in this link (customized CC-BY-SA).
*   This final project has been approved by my two supervisors, namely Dr. I Made Oka Widyantara, ST., MT. and I Gst A. Komang Diafari Djuni H, ST., MT. as well as the three examiners Dr. Gede Sukadarmika, ST., MSc., Widyadi Setiawan, ST., MT., And NMAE Dewi Wirastuti, S.T., M.Sc., Ph.D. This final project is also a topic given by Dr. Nyoman Putra Sastra who should have been my main supervisor, but at that time he was continuing his studies where this final project was part of his doctoral dissertation.
*   Source Code: [Github](https://github.com/0fajarpurnama0/transmisi-citra-imote2-embedded-linux)

## Table of Contents

*   [Abstract](#abstract)
*   [Chapter 1 Introduction](#chapter1introduction)
    *   [1.1 Background](#1.1background)
    *   [1.2 Problem](#1.2problem)
    *   [1.3 Research Objective](#1.3researchobjective)
    *   [1.4 Research Benefit](#1.4researchbenefit)
    *   [1.5 Scope of Problem](#1.5Scopeofproblem)
*   [Chapter 2 Literature Review](#chapter2literaturereview)
    *   [2.1 Previous research](#2.1previousresearch)
    *   [2.2 State of The Art](#2.2stateoftheart)
    *   [2.3 Electrical Power](#2.3electricalpower)
    *   [2.4 IEEE 802.15.4 ZigBee Standard](#2.4ieee802.15.4zigbeestandard)
        *   [2.4.1 PHY Layer](#2.4.1phylayer)
        *   [2.4.2 MAC Layer](#2.4.2maclayer)
        *   [2.4.3 Network Layer](#2.4.3networklayer)
        *   [2.4.4 Application Layer](#2.4.4applicationlayer)
    *   [2.5 Intel Mote 2 (Imote2)](#2.5intelmote2(imote2))
        *   [2.5.1 Radio Processor Board IPR2400](#2.5.1radioprocessorboardipr2400)
        *   [2.5.2 Interface Board IIB400](#2.5.2interfaceboardiib400)
        *   [2.5.3 Sensor Board IMB400](#2.5.3sensorboardimb400)
        *   [2.5.4 IBB2400 Power Supply Board](#2.5.4ibb2400powersupplyboard)
    *   [2.6 JPEG2000](#2.6JPEG2000)
        *   [2.6.1 Codestream syntax](#2.6.1codestreamsyntax)
        *   [2.6.2 Data Ordering](#2.6.2dataordering)
        *   [2.6.3 Arithmetic Entropy Coding](#2.6.3arithmeticentropycoding)
        *   [2.6.4 Bit Modeling Coefficient](#2.6.4bitmodelingcoefficient)
        *   [2.6.5 Quantization](#2.6.5quantization)
        *   [2.6.6Transform](#2.6.6transform)
        *   [2.6.7 DC Level Component Transform](#2.6.7dclevelcomponenttransform)
        *   [2.6.8 Region of Interest](#2.6.8regionofinterest)
    *   [2.7 Peak Signal to Noise Ratio](#2.7peaksignaltonoiseratio)
*   [Chapter 3 Research Method](#chapter3researchmethod)
    *   [3.1 Research Location and Time](#3.1researchlocationandtime)
    *   [3.2 Sources and Types of Research Data](#3.2sourcesandtypesofresearchdata)
    *   [3.3 Research Instruments and Materials](#3.3researchinstrumentsandmaterials)
    *   [3.4 Research Stages](#3.4researchstages)
        *   [3.4.1 IEEE 802.15.4 Zigbee implementation for image transmission](#3.4.1ieee802.15.4zigbeeimplementationforimagetransmission)
        *   [3.4.2 Testbed](#3.4.2testbed)
    *   [3.5 Analysis Flow](#3.5analysisflow)
*   [Chapter 4 Discussion](#chapter4discussion)
    *   [4.1 Transmission program](#4.1transmissionprogram)
        *   [4.1.1 Sending Program](#4.1.1sendingprogram)
        *   [4.1.2 Receiving Program](#4.1.2receivingprogram)
    *   [4.2 Compiling Openjpeg](#4.2compilingopenjpeg)
    *   [4.3 Testbed Implementation](#4.3testbedimplementation)
        *   [4.3.1 Command Programs](#4.3.1commandprograms)
        *   [4.3.2 Program placement](#4.3.2programplacement)
        *   [4.3.3 Startup configuration](#4.3.3startupconfiguration)
        *   [4.3.4 Testbed usage](#4.3.4testbedusage)
    *   [4.4 Data Analysis](#4.4dataanalysis)
        *   [4.4.1 Power Consumption](#4.4.1powerconsumption)
        *   [4.4.2 Transmission Runtime](#4.4.2transmissionruntime)
        *   [4.4.3 Image Quality](#4.4.3imagequality)
        *   [4.4.4 File and Memory Size](#4.4.4fileandmemorysize)
*   [Chapter 5 Closing](#chapter5closing)
    *   [5.1 Conclusion](#5.1conclusion)
    *   [5.2 Future Work](#5.2futurework)
*   [Bibliography](#bibliography)

## Abstract

In recent years, the wireless sensor network (JSN) has provided breakthroughs in the field of monitoring from monitoring rainfall in gardens to monitoring heart rate in the health sector. This technology is known for its very low and simple energy consumption, and is currently being developed so that it can operate without a power source, but instead uses the available ambient energy such as using the energy input of a TV station's electromagnetic waves. JSN initially focused on data that could be sent at a low bit rate channel capacity. In this research, it is more to JSN with a higher bit rate channel capacity in order to transmit multimedia data specifically here is image transmission, so that the term JSN can be reduced to a wireless visual sensor network (JSVN). The platform used is Imote2 with a radio based on IEEE 802.15.4 ZigBee and the main characteristic of this research is implementing an embedded Linux system, which has never been done before. So far, there are no publications that describe the image transmission scheme in Imote2 Linux, in other words there is no information related to image transmission. This research discusses in detail the image transmission scheme between the author's version of Imote2 Linux and the scheme so that it can be used as a testbed, starting from applications written in C, compiling some testbed requirements, to implementing the testbed. The rest of the performance of Imote2 Linux is tested by transmitting the image without compression and with the JPEG2000 standard compression where the compression is carried out on the Imote2 Linux embedded system by the OpenJPEG software. The results show a significant difference between uncompressed and compressed transmission.

## Chapter 1 Introduction

### 1.1 Background

WSN (wireless sensor network) is a wireless network system that uses sensor devices to obtain information. These sensors are distributed in an area that are connected wirelessly (forming a network) to collect information around them as in Figure 1.1\. This WSN has been applied in the civil, medical, and other fields (Shwe et al, 2013). There are several types of sensors, including temperature, motion, acidity, sound, and camera sensors. This research uses WVSN (Wireless Visual Sensor Network) which is a camera sensor-based WSN.

![Gambaran JSN/WSN](https://cdn.steemitimages.com/DQmeTuVYc3crnLCYCRxbgpkbXyM9nuvV8m8SqycGCW5xqqv/Gambar%201.1%20Gambaran%20JSN%20WSN.png)

Figure 1.1 WSN overview



One example of the application of WSN is the research of Garcia-Sanchez (2010) on monitoring of wild animals on transportation infrastructure in the wild. Things that are monitored are animal interactions such as the frequency and time the animals cross the road or underpass, the length of time the animals have been there, and how the animal's attitude towards the transportation infrastructure. From this monitoring, it can be seen whether the transportation infrastructure is safe, attracts the attention of animals, the overall condition of the transportation infrastructure and the natural conditions around it. Monitoring is carried out by installing camera sensors and motion sensors on the Imote2 platform in the transportation infrastructure area such as the underpass entrance gate, in the underpass, the edge of the highway, above trees, or in ravines as shown in Figure 1.2\. Several factors such as no power source (resource), an environment that does not allow the installation of large devices such as ravines, danger zones, uneven terrain, and sensitive environmental conditions (tend to attack the device or avoid the device), or the time factor that requires immediate monitoring so that it is impossible to spend time on large equipment installations, and many other factors, a similar example in the military field to detect the presence of an enemy must use a minimalist and small device so that it is not easily detected, for this matter WSN is an option because it is practical to apply.

![Contoh penerapan JSN pada jalan di alam bebas](https://cdn.steemitimages.com/DQmdmmeB8xW7nmhFS1Kdnp3MUuimYZPRb6yboE82h9KsTxC/Gambar%201.2%20Contoh%20penerapan%20JSN%20pada%20jalan%20di%20alam%20bebas.jpg)

Figure 1.2 Example of implementing JSN on a road in the wild (Garcia-Sanches, 2010)



Current WSN research leads to energy savings while maximizing performance in other words, getting as much information as possible with the minimum energy consumption. This is because WSN has limited resources and limited computing capabilities. Imote2 itself uses 4 AAA batteries as a power source, has a processing capability of 13-416 MHz, 32 MB program memory, 256 kB of RAM (Random Access Memory) as a temporary storage place at the processing stage, and a maximum transmission rate of 250 kbps point-to-point. Even though Imote2's specifications are superior to other platforms as shown in Table 1.1, it is still far from being compared to PCs (Private Computers) which now have a minimum specification of over 1 GHz processor, over 1 GB RAM, and over 50 GB hard disk capacity.

![Tabel 1.1 Mote hardware](https://cdn.steemitimages.com/DQmWCf14HbMRdD8HQvqpyeNooPtTeyTXqjSChivR5GdNfjq/Tabel%201.1%20Mote%20hardware.png)

Table 1.1 Mote hardware (Akyildiz, 2010)



From these limitations, one of the efforts to save is the determination of the right transmission media. There are many types of standards for wireless transmission media such as WLAN (Wireless Local Area Network), Broadband Wireless, and WPAN (Wireless Personal Area Network). WLAN standardized on IEEE 802.11 has a wide range over 1 km with a max data rate of 54 Mbps on IEEE 802.11g, this standard is more suitable for wireless communication on computers. Broadband Wireless has a wider range with a max data rate of IEEE 802.16m 100 Mbps, better known as WMAN (Wireless Metropolitan Area Network). However, the results of previous research, namely research by Wiasta (2012), Natha (2012), and the author himself Purnama (2013), are not efficient in transmitting binary data using WLAN. The results are far compared to using the WPAN standard, which can be seen in Figure 1.3\. For portable devices, the IEEE 802.15 WPAN standard is provided. IEEE 802.15.1 Bluetooth provides a max data rate of 723.2 kbps with a range of 10 meters. It is commonly used for voice and data transmission, applied to cellphones and gadgets. IEEE 802.15.2 regulates communication between WPANs and other wireless networks. IEEE 802.15.3 HR-WPAN (High Data Rate Wireless Personal Area Network) with a data rate of 11-55 Mbps with a range over 70 meters is commonly used for multimedia. Suitable for use on WSN is the IEEE 802.15.4 LR-WPAN (Low Data Rate Wireless Personal Area Network) standard because it is low power consumption and data rates of 20, 40, 250 kbps point-to-point with a range of 10 meters (Ahmad, 2005). IEEE 802.15.4 develops the PHY layer, MAC layer, and NWK layer, while Zigbee develops the full application layer in Chapter 2\. The transmission limitation in IEEE 802.15.4 Zigbee is the maximum data rate of 250 Kbps point-to-point with PHY layer, the maximum packet size is 127 bytes minus 89 bytes header. Fragmentation and reassembly are not performed at the NWK layer, therefore the application layer must be developed for fragmentation and reassembly and adapted for image transmission (Pekhteryev, 2005).

![Imote2 dengan WLAN](https://cdn.steemitimages.com/DQmNuAqtGYxK1i92iN6HVCY7dDtPuu5WYWpRWc2LvHauds4/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(a)%20Imote2%20dengan%20WLAN%20.PNG) ![catu daya WLAN](https://cdn.steemitimages.com/DQmVZQFsYNELMkq7WihvGaTaHqna9g1vWYG3ajYThbcd8TF/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(b)%20catu%20daya%20WLAN.PNG) ![dengan LR-WPAN](https://cdn.steemitimages.com/DQmU1ZGj911cjKtNdXfnct4q325TGp7yNXWgHe5BHAxCuSJ/Gambar%201.3%20Konsumsi%20daya%20listrik%20pada%20transmisi%20data%20biner%20JSVN%20Imote2%20(c)%20dengan%20LR-WPAN.PNG)

Figure 1.3 Electrical power consumption in WSVN Imote2 binary data transmission (a) Imote2 with WLAN (b) WLAN power supply (c) with LR-WPAN (Natha, 2012, dan Wiasta, 2012)



Another effort is to use a lightweight operating system. Previously Imote2 worked on Intel Platform X. After Imote2 moved to Crossbow, Intel Platform X was no longer being developed because Crossbow released its own operating system. The operating system used is most of the operating systems developed by communities such as SOS (Simple Operating System) but SOS has been discontinued since 2008\. Currently, it is TinyOS and most recently Linux. Most publications on the web use TinyOS. Embedded Linux is now being developed due to the limitations of TinyOS such as complex routing. The embedded Linux community thinks the Linux operating system on Imote2 can overcome these limitations. However, embedded Linux on Imote2 is still new and under development (Kasteleiner, 2010). The main reason Linux is used is because it is opensource, which means it is free, open and can be developed by anyone.

This research leads to embedded system Imote2 Linux. Previous work successfully embedded Linux into the Imote2 platform and successfully sent a maximum of 28 bytes of random data. In this work the function will be extended so that Imote2 Linux can transmit images with IEEE 802.15.4 ZigBee-based radios. After being able to transmit, the Imote2 Linux transmission performance will be observed.

### 1.2 Problem

1.  How is the image transmission scheme with wireless media based on IEEE 802.15.4 ZigBee on the Imote2 JSVN platform on embedded Linux?
2.  How does the IEEE 802.15.4 Zigbee based WSVN platform perform in image transmission on embedded Linux?

### 1.3 Research Objective

1.  To get an image transmission scheme with wireless media based on IEEE 802.15.4 Zigbee on the Imote2 JSVN platform on embedded Linux.
2.  To get a robust image transmission scheme on the Imote2 WSVN platform based on IEEE 802.15.4 Zigbee on embedded Linux.

### 1.4 Research Benefit

1.  Get an image transmission scheme with wireless media based on IEEE 802.15.4 Zigbee on the Imote2 JSVN platform on embedded Linux.
2.  Getting the optimal schema for transmitting images on the Imote2 JSVN platform on embedded Linux.
3.  Get the performance results of the Imote2 JSVN platform in image transmission implementing IEEE 802.15.4 Zigbee on embedded Linux.

### 1.5 Scope of Problem

1.  Using the Imote2 platform WSVN.
2.  Imote2 uses the embedded Linux operating system.
3.  Image processing applies the JPEG2000 standard.
4.  Transmission system between Imote2 Linux.

## Chapter 2 Literature Review

### 2.1 Previous Research

The previous research is the implementation of embedded Linux on the Imote2 WSVN platform. First Imote2 uses the operating system from Crossbow. After that TinyOS is installed, now we try to use embedded Linux. There are 3 things discussed, namely the embedded Linux installation procedure, post-installation configuration, and observed the performance of the Imote2 WSVN platform by measuring the memory consumed and the electricity consumed when transmitting binary data. The installation procedure includes cross-compiling the Linux kernel and drivers to the ARM architecture used by Imote2, setting up the bootloader and filesystem, and embedding the bootloader, kernel, and filesystem to Imote2 using the OpenOCD chip debugger software. To do this, you need a computer with the Linux operating system. Post-embedding / entry is activating IP (Internet Protocol), SSHD (Secure Shell Daemon), and radio networks via Telnet. The commands for configuring this are common in Linux based on Debian, Ubuntu, and the like. The final stage of the research is to observe the performance of binary data transmission at a distance of 10m, 20m, and 30m. The transmission was tested on 2 types of wireless transmission media, namely IEEE 802.11 WLAN and IEEE 802.15.4 Zigbee also called LR-WPAN. It is necessary to add a TP-LINK WLAN power supply and radio device to implement WLAN. A daughter board is created to connect the device. In terms of software, a driver is needed. While the Zigbee implementation is available in Imote2, all you need to do is run the driver and create a script to transmit binary data. In the final result Zigbee is more efficient in terms of consumption of voltage and electric current can be seen in Figure 2.1, Figure 2.2, and Figure 2.3\. The value of electric power consumption is the result of the multiplication of voltage and electric current in the previous figure, namely Figure 1.2 (Natha, 2012, Wiasta, 2012, Purnama, 2013).

![konsumsi imote2 tegangan](https://cdn.steemitimages.com/DQmXdEywk77mqYhsPrxtZgHyMwbHoKSX5MqFueCNVcjrX97/Gambar%202.1%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20WLAN%20(a)%20tegangan.PNG) ![konsumsi imote2 arus](https://cdn.steemitimages.com/DQmdnTnrAqF2ArJU1yVvqZjHF8yfPGSoSBAurzffVVsVhRJ/Gambar%202.1%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20WLAN%20(b)%20arus.PNG)

Figure 2.1 Consumption of WLAN-based Imote2 battery (a) voltage (b) current



![konsumsi catu daya tegangan](https://cdn.steemitimages.com/DQmTtDpabHHjyuLZfb1RGj5rsXP9BHtkJFULUsxtinTBzba/Gambar%202.2%20Konsumsi%20pada%20baterai%20Catu%20Daya%20USB%20WLAN%20(a)%20tegangan.PNG) ![konsumsi catu daya arus](https://cdn.steemitimages.com/DQmPBgqX1mCbxKVij2asXFiqwfhy9ddf4397tuKcBuVf512/Gambar%202.2%20Konsumsi%20pada%20baterai%20Catu%20Daya%20USB%20WLAN%20(b)%20arus.PNG)

Figure 2.2 Consumption on WLAN USB Power Supply battery (a) voltage (b) current



![konsumsi zigbee tegangan](https://cdn.steemitimages.com/DQmUKZ7q4Xu81djQNcFsmZyEC5XUVjQaWCyrUs4D45e13pE/Gambar%202.3%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20Zigbee%20(a)%20tegangan.PNG) ![konsumsi zigbee arus](https://cdn.steemitimages.com/DQmRRfQbTBzSmAh2Wiw8Gn1sNrUJdMDnoMH5GzTJUAjDLHs/Gambar%202.3%20Konsumsi%20pada%20baterai%20Imote2%20berbasis%20Zigbee%20(b)%20arus.PNG)

Figure 2.3 Zigbee-based Imote2 battery consumption (a) voltage (b) current



### 2.2 State of The Art

This research is a continuation of previous research that will examine the performance of the WSVN Imote platform with the embedded Linux operating system in transmitting images via IEEE 802.15.4 Zigbee-based transmission media. If previously only transmitting binary data, this time is transmitting images. It is preferred to use IEEE 802.15.4 Zigbee-based transmission media because it was previously proven to be more efficient.

The idea to examine image transmission with 4 different scalabilities based on wavelets (research stage in Chapter 3) was obtained from the research of Nasri (2010). Nasri's research (2010) examined the application of JPEG2000 in distributive image transmission in WSVN. In detail, the WSVN scheme is divided into 7 clusters (7 groups of WSVN devices) where each cluster is given a part of the standard JPEG2000 compression stage (JPEG200 can be seen in sub-chapter 2.6) can be seen in Figure 2.4\. With this scenario the idea emerged to transmit images with different scalability based on the JPEG2000 standard in the research at this writing.

![Skema kompresi JPEG2000 terdistribusi pada JSN](https://cdn.steemitimages.com/DQmaWdmfndBum25WjwtWEQZrsQ6hTPR8sxRRJVyVZiwLC4Z/Gambar%202.4%20Skema%20kompresi%20JPEG2000%20terdistribusi%20pada%20JSN.jpg)

Figure 2.4 JPEG2000 compression scheme distributed on JSN (Nasri, 2010)



1.  The first cluster performs 1D-DWT by decomposing horizontally to form the L and H sub-bands.
2.  The second cluster performs 1D-DWT with vertical decomposition to form LL<sub>1</sub> sub-bands, LH<sub>1</sub>, HL<sub>1</sub>, HH<sub>1</sub>.
3.  The third cluster performs a whole 1D-DWT on the LL<sub>1</sub> sub-band to form the LL<sub>2</sub> sub-band, LH<sub>2</sub>, HL<sub>2</sub>, HH<sub>2</sub>.
4.  The fourth cluster performs a whole 1D-DWT on the LL<sub>2</sub> sub-band to form the LL<sub>3</sub> sub-band, LH<sub>3</sub>, HL <sub>3</sub>, HH <sub>3</sub>.
5.  The fifth cluster does quantization.
6.  The sixth cluster is coding the block.
7.  Cluster refers to entropy coding.

In summary, the results of the highest energy consumption are in the first and second clusters, then energy consumption decreases from the second cluster to the destination. The results were obtained using a special energy consumption formula for the JPEG2000 stage, in other words Nasri's research (2010) was a simulation, not a study using direct devices.

Related research is the compression and transmission performance using the IJG (Independent JPEG Group) library on the Imote2 platform with TinyOS based on the results of research by Mowafi (2010). The scenario is a single-hop or point-point connection where the JSVN device performs JPEG compression of the image before transmitting. The image is compressed with a 5-fold quality factor of 95-5\. Time and voltage drop during compression and transmission were measured and the image PSNR was measured. The measurement results show that the time and stress consumption of the image compression process is relatively the same as the quality factor value, with a value close to 0\. While the measurement results of the transmission show that it requires an average time and voltage of 14 seconds and 0.45 mV at a quality factor of 95 and decreases to 1 second and 0.03 mV at quality factor 5\. The PSNR range from the 95-5 quality factor is 47-28 dB. So JPEG image compression helps to save time and energy in image transmission. The results of the research can be seen in Figure 2.5.

![Quality factor terhadap waktu](https://cdn.steemitimages.com/DQmTQi8eYEYHt83ywxzTAGmXPEHdUKJd4wzcoS88hyA6CtC/Gambar%202.5%20Quality%20factor%20terhadap%20(a)%20waktu.png) ![Quality factor terhadap drop tegangan](https://cdn.steemitimages.com/DQmNLwb9LbB4U1wjQWr75oWqJvDXMoN58TaopzBKLcncnnF/Gambar%202.5%20Quality%20factor%20terhadap%20(b)%20drop%20tegangan.png) ![Quality factor terhadap drop PSNR](https://cdn.steemitimages.com/DQmVVgtm5tyJpzd56PuqgKb8JSUyGHjS6BmqpGkTSV7gkEv/Gambar%202.5%20Quality%20factor%20terhadap%20(c)%20PSNR.png)

Figure 2.5 Quality factor against (a) time (b) voltage drop (c) PSNR (Mowafi, 2010)



In another paper, Mowafi (2012) implements IJG and JPEG2000\. Variation of the quality factor in IJG and Compression Ratio in JPEG2000 was done by finding the same file size in the two compression techniques. After that, the two compression techniques were compared by measuring the time for compression, the transmission time after compression, and the energy consumption of the bit rate. PSNR measurement of the two compression techniques is also done based on the size of the file. Finally, a simulation with a multi-hop sensor was carried out where time and energy consumption were the benchmarks for the two compression techniques. The parameters were obtained from previous single-hop research. The result is that the JPEG2000 excels in terms of PSNR, power consumption during transmission, and transmission time, but JPEG excels in terms of power consumption and compression time. The compression time consumption in JPEG is the least compared to other aspects, while the compression time consumption in JPEG2000 is the largest on the contrary, from the overall compression and transmission process. The research results can be seen in Figure 2.6\. So it can be concluded that JPEG is more efficient on WSVN with short hops because it is economical on the compression side, does not require a long transmission line. If with long hops it is recommended to use JPEG2000 because it is more efficient on the transmission side. WSVN will be more optimal if various compression techniques are applied in order to be flexible to circumstances.

![Kompresi Citra terhadap PSNR](https://cdn.steemitimages.com/DQmbaULgiU4U52HSeBfu64SYkaFnQcmvQnp2ubkczdjFkRF/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(a)%20PSNR.png) ![Kompresi Citra terhadap energi](https://cdn.steemitimages.com/DQmX8yua4Yb1G7KF54zPG8S9uYnA6AgNfEG7FFzb1CB2Kpj/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(b)%20Energi.png) ![Kompresi Citra terhadap waktu](https://cdn.steemitimages.com/DQmSMkCwCCSuXfUF4G9JY7jTabPuqXeJd3PRPzDWX18b9xZ/Gambar%202.6%20Kompresi%20Citra%20terhadap%20(c)%20Waktu.png)

Figure 2.6 Image Compression against (a) PSNR (b) Energy (c) Time (Mowafi, 2012)



Pekhteryev's (2005) research in transmitting images on IEEE 802.15.4 and Zigbee networks are very similar to this study. Due to the very limited transmission capacity and the absence of fragmentation and reassembly features, the NWK layer is required to make an application with these features. The research is to observe the number of error sending images from sending 100 JPEG images and 100 JPEG2000 images on 1-hop and 2-hop networks as shown in Figure 2.7, the results can be seen in Figures 2.8 and 2.9.

![Skenario penelitian](https://cdn.steemitimages.com/DQmYd1Gw4pPrBQBSMkjhUdGva9HfW3yYxoehSe3PpjSc9vk/Gambar%202.7%20Skenario%20penelitian.png)

Figure 2.7 Research scenario (Pekhteryev, 2005)



![Persentase histogram bytes error1](https://cdn.steemitimages.com/DQmSiPTwk6EBkKHnttomfn5v7LTH1aBd5wmfuwYRC7v8iUG/Gambar%202.8%20Persentase%20histogram%20bytes%20error1.png)

Figure 2.8 Percentage of the histogram bytes error1 (Pekhteryev, 2005)



![Persentase histogram bytes error 2](https://cdn.steemitimages.com/DQmWxDWyd6k49VakP9HLqR6ViUwEGdBcpB2KA9mHbxWPgT8/Gambar%202.9%20Persentase%20histogram%20bytes%20error%202.png)

Figure 2.9 The percentage of error bytes histogram 2 (Pekhteryev, 2005)



This study implements image transmission in the IEEE 802.15.4 Zigbee transmission as research by Pekhteryev (2005). The difference from this study is that Pekhteryev's (2005) study uses an M16C microcontroller and analyzes transmission errors more, whereas this study uses the Imote2 platform device and analyzes the energy efficiency of transmission. Furthermore, the image is compressed first using the JPEG2000 standard before transmission, such as Mowafi's research (2012). The difference between this study and Mowafi (2010, 2012) is the operating system used, Mowafi's research (2010, 2012) uses TinyOS while this research uses embedded Linux. In addition, there is no research (from the author's knowledge) that discusses the image transmission scheme on the IEEE 802.15.4 Zigbee WSVN, especially in the Imote2 Linux embedded system. The essence and the fundamental difference of this research from the others is that the image transmission program in C language and a schematic is made to function as a testbed in Imote2 Linux.

### 2.3 Electrical Power

Electric power mathematically defined as the electrical energy produced per time.

P=dw/dt (2.1)

Where:

p = electrical power (watt)

w = electrical energy (joule)

t = time (second)

Electric power can be formed by multiplying electric voltage and electric current. If the electric voltage is the average electrical energy per electric charge, and the electric current is the electric charge that flows every second, the multiplication of these two variables produces electric power. (Irwin, 1993).

V=dw/dq, I=dq/dt, VI=(dw/dq)(dq/dt)=(dw/dt)=P (2.2)

Dimana:

V = electrical voltage (volt)

q = electrical charge (coloumb)

I = electric current (ampere)

### 2.4 IEEE 802.15.4 ZigBee Standard

This standard is a collaboration between IEEE (Institute of Electronic and Electrical Engineer) and ZigBee. IEEE focuses on developing standards at the lower layers, namely the PHY (Physical) layer and MAC (Media Access Control) or datalinklayer. Meanwhile, ZigBee focuses on developing the layer above it, to the application layer. The IEEE 802.15 standard is specifically for WPAN (Wireless Personal Area Network) with the aim of low power consumption, short range, and small device size. If 802.15.1 (bluetooth) is an intermediate standard, 802.15.3 is HR(high rate)-WPAN with high data rate, then 802.15.4 is LR(low rate)-WPAN with low data rate but low power consumption. While 802.15.2 is a standard for connecting between types of wireless devices (Ergen, 2004).

![Arsitektur standar IEEE 802.15.4 ZigBee](https://cdn.steemitimages.com/DQmWAtfzf2S81xHucqvFYjrsTuw65gTfEk4janegcoALosz/Gambar%202.10%20Arsitektur%20standar%20IEEE%20802.15.4%20ZigBee.png)

Figure 2.10 The architecture of the IEEE 802.15.4 ZigBee standard (Daintree Network, 2006)



#### 2.4.1 PHY Layer

Is the lowest layer that regulates transmission. Symbol formation uses O-QPSK (Offset Quadriture Phase Shift Keying) modulation to reduce consumption in transmission. Operating frequency bands are divided into 27 channels based on DSSS (Direct Sequence Spread Spectrum) as shown in Figure 2.11.

![Operating frequency band](https://cdn.steemitimages.com/DQmVQNe9Y4Mqn1bo7hrbP6vte18YPV8EoWUBPUrUAuiN9Rg/Gambar%202.11%20Operating%20frequency%20band.png)

Figure 2.11 Operating frequency band (Ergen, 2004)



Channel 0 is at a frequency of 868.3 MHz with a data rate of 20 Kbps, channels 1-10 are at a frequency of 902 Mhz with a distance between channels of 2 MHz with a data rate of 40 Kbps, and channels 11-26 are at a frequency of 2.4 GHz with a distance between channels of 5 MHz with a data rate of 250 Kbps. The minimum sensitivity of channel is 0-10 -92dBm while channel 11-26 is 85 dBm (Ergen, 2004), the details can be seen in table 2.1.

![Frequency bands and  data rates](https://cdn.steemitimages.com/DQmVaRskCw7du6rJYv6SexWR1RtMhoaQ4KPRCFb7esDKwi5/Tabel%202.1%20Frequency%20bands%20and%20%20data%20rates.png)

Table 2.1 Frequency bands dan data rates (Ergen, 2004)



Features of the PHY layer (Ergen, 2004):

1.  Activation and deactivation of radio transceivers.
2.  Receiver ED (Energy Detection).
3.  LQI (Link Quality Indication).
4.  CCA (Clear Channel Assessment).
5.  PPDU (Physical Protocol Data Unit) packet.

![Format PPDU](https://cdn.steemitimages.com/DQmZkE2sWxU1by4jrizRp2gEMCyG5NeX6Mca5m15JSnwEPC/Gambar%202.12%20Format%20PPDU.png)

Figure 2.12 PPDU Format (Ergen, 2004)



#### 2.4.2 MAC Layer

MAC layer is the layer that regulates the flow of data from the PHY layer to the network layer and vice versa. A device can be either an FFD (Full Function Device) or an RFD (Reduced Function Device). An FFD can function as a PAN (Personal Area Network) coordinator, coordinator, or member. The MAC layer manages the following devices (Ergen, 2004):

1.  The data transfer model can be divided into 3, namely coordinator-device, device-coordinator and device-device. Can be set to use beacons or not. When using the beacon, it will use the superframe structure format and otherwise it will use unslotted CSMA-CA (Carrier Sense Multiple Access Carrier Avoidance). The beacon frame format can be seen in Figure 2.13.

    ![Beacon frame](https://cdn.steemitimages.com/DQmekHZ4SGqg7WhcAs2DN37sSeDsPEPeMrwFL4tm9NgQF2q/Gambar%202.13%20Beacon%20frame.png)

    Figure 2.13 Beacon frame

    

2.  Dapat menggunakan superframe structure atau tidak. Superframe structure dapat dilihat pada gambar 2.14.

    ![Superframe structure](https://cdn.steemitimages.com/DQmekgGCQPMZettZS28uZasi1tpFUHsfJTpN5swKXCUmq79/Gambar%202.14%20Superframe%20structure.png)

    Figure 2.14 Superframe structure

    

    From the structure in Figure 2.14, there are 3 periods. During the inactive period the device is inactive. In the CFP (Contention Free Period) period there is a GTS (Guaranteed Time Slot) from channels 11-15, other devices that want to connect with the device in a CFP state can directly connect. Meanwhile, in CAP (Contention Access Period) devices must compete using a slotted CSMA-CA to communicate. The CSMA-CA algorithm can be seen in Figure 2.15.

    ![Algoritma CSMA-CA](https://cdn.steemitimages.com/DQmadNy7i3vYT2BfqoxAfD7gpQS74Kg4y6QwigwyEYDvaL9/Gambar%202.15%20Algoritma%20CSMA-CA.png)

    Figure 2.15 CSMA-CA Algorithm

    

3.  Starting and maintaining PAN. A PAN will be started after performing an active channel scan, if there is the same PAN on a POS or it is known as a conflict device it will run the identifier conflict resolution procedure.
4.  Manage association and disassociation. A device that wants to associate with a PAN will send a data-request to the coordinator. Then the coordinator will send an acknowledgment. Even though the acknoledgement has yet to determine the agency that sent the data request, it has been an associate, depending on the coordinator. If the coordinator wants to disassociate a device or the device wants to disassociate himself then sends a data-request. Although the acknoledgement has not been sent, the device sending the requeset data is immediately disassociated after sending. The frame data can be seen in Figure 2.16, and the acknoledgement frame can be seen in Figure 2.17.

    ![Data frame](https://cdn.steemitimages.com/DQmbUxp9VtxvMxp5sUjJxzYfg6br3BKypqLxDES2ysmTFPx/Gambar%202.16%20Data%20frame.png)

    Figure 2.16 Data frame

    

    ![Acknowledgment frame](https://cdn.steemitimages.com/DQmZd4JaUzhTPTScNhGnqWGDmiJS2XYYj9TR7mQJ7h9zJNx/Gambar%202.17%20Acknowledgment%20frame.png)

    Figure 2.17 Acknowledgment frame

    

5.  Set up synchronization. Synchronization can use beacons, otherwise it asks for information with the coordinator.
6.  MAC frame format, can be seen in Figure 2.18\. MAC Command frame can be seen in Figure 2.19.

    ![General MAC frame format](https://cdn.steemitimages.com/DQmfRCvimR6Z1hMJo7rF9Tp1Lkd153TkJRfPPDC61FHbJA4/Gambar%202.18%20General%20MAC%20frame%20format.png)

    Figure 2.18 General MAC frame format

    

    ![MAC Command Frame](https://cdn.steemitimages.com/DQmUrLCpYbqL1xf1ziYEpcRYXMdLnperQHLu429o51tJc5T/Gambar%202.19%20MAC%20Command%20Frame.png)

    Figure 2.19 MAC Command Frame

    

#### 2.4.3 Network Layer

The network layer manages the network, including the routing mechanism. In general, at this layer two algorithms are used, namely AODV (Ad Hoc On Demand Distance Vector) and Motorola's Cluster-Tree algorithm. (Ergen, 2004).

1.  AODV is a pure on-demand route acquisition algorithm, in which devices are not on an active path, assigning routing information, or participating periodically in exchanging routing tables. Devices don't have to know the path to other devices on a network when they don't need to communicate. Path discovery is performed when devices need to communicate. First the device will send a RREQ (Route Request) packet consisting of source addr, source sequence number, broadcast id, dest addr, dest sequence number, hop cnt. The device will start communicating when it receives an RREP (Route Reply) consisting of source addr, dest addr, dest sequence number, hop cnt, lifetime.
2.  Motorola's Cluster-Tree Algorithm, in this algorithm the device is designated as DD (Degsinated Device) first. DD is the core device of a topology, so all information from the topology will be stored on DD, from this information it is known that the topology optimization is formed. It is determined that DD is in the 0th cluster. After that DD will give CID (Cluster Identity) to CH (Cluster Head). Through CH is given an ID (Identity) and checked for surrounding devices that will become members of CH and form a star topology. The link between clusters is called a border node. The overall topology will form a tree can be seen in Figure 2.20.

    ![Multicluster network](https://cdn.steemitimages.com/DQmYZuYPoyofQMHkJmjx2eKiwN3whvjD2C2mgeUooDJmH1K/Gambar%202.20%20Multicluster%20network.png)

    Figure 2.20 Multicluster network

    

#### 2.4.4 Application Layer

This layer consists of the application framework and application support (APS) sublayer. Application framework manages communication that connects end-users to the layer below the application. Meanwhile, the application support sublayer manages the relationship between the application framework and the network layer, specifically managing application profiles, clusters, and endpoints. An application profile describes a set of devices running on a specific application, for example application profiles for home automation systems and commercial, industrial and institutional settings. A device in an application profile communicates in a cluster, for example, in a home automation profile there is a cluster that regulates the lighting subsystem. While endpoints is a communication entity, which has been determined about the application that is running, for example a button on the remote control.

The important thing about application support sublayer is binding, which here is interpreted as a link between endpoints, for example to turn on the light with a button on the remote. Binding can be direct or indirect. The direct connection between the remote and the light is direct binding. Indirect binding, there is a router between the remote and the light, usually there is a cluster library. There are commands in the cluster library that can be used together, you only need to add the cluster ID to the command, for example the on/off command needs to be added to the cluster ID for the target device (Daintree Network, 2006).

Fragmentation and reassembly are not performed at the NWK layer, therefore the application layer must be developed for fragmentation and reassembly and adapted for image transmission (Pekhteryev, 2005).

### 2.5 Intel Mote 2 (Imote2)

Imote2 is a platform on the WSN device developed by Intel Research in the platform X research section. This device is built with low power consumption, with a PXA271 XScale CPU processor, and is integrated in IEEE 802.15.4 ZigBee (Stanford, 2013). This processor (Intel Xscale processor PXA271) can operate at low voltages (0.85V) and frequencies of 13MHz to 104MHz. The frequency can be increased up to 416MHz by adjusting the voltage. In general, Imote2 consists of 4 parts as shown in Figure 2.21.

![Imote2 (a) radio processor board (IPR2400) (b) interface board (IIB400) (c) sensor board (IMB400)(d) power supply board (IBB2400)](https://cdn.steemitimages.com/DQmUtLhce86dRz3cy5stcgCuiZZhRhtAg8MrRvP6JYvspg4/Gambar%202.21%20Imote2.png)

Figure 2.21 Imote2 (a) radio processor board (IPR2400) (b) interface board (IIB400) (c) sensor board (IMB400)(d) power supply board (IBB2400).



#### 2.5.1 Radio Processor Board IPR2400

IPR2400 specifications can be seen as follows (crossbow, 2007):

1.  PXA271 XScale® processor @ [13–416] Mhz.
2.  Wireless MMX coprocessor.
3.  256kB SRAM, 32MB FLASH, 32MB SDRAM.
4.  Integrated 802.15.4 radio, support for external radios through SDIO and UART.
5.  Integrated 2.4GHz antenna.
6.  Multicolor status indicator LED.
7.  Basic and advanced expansion connectors supporting : 3xUART, I2C, 2xSPI, SDIO, I2S, AC97, USB host, Camera I/F, GPIO.
8.  Mini-USB port for direct PC connection.
9.  Size: 48 mm x 36 mm. PCB thickness 1.75 mm

#### 2.5.2 Interface Board IIB400

IIB400 specifications can be seen as follows (crossbow, 2007):

1.  Mote connectors 2x Advanced (male/female).
2.  USB connector mini-B female.
3.  Serial port A virtual UART with RTS/CTS flow control.
4.  Sertial port B virtual UART without hardware flow control.
5.  JTAG port standard 20-pin connector.
6.  Size 48mm x 36mm x 14m.
7.  Weight 11g.

#### 2.5.3 Sensor Board IMB400

IMB400 specifications can be seen as follows (crossbow, 2007):

1.  Camera
    *   Image resolution up to 640x480 pixels, 30 fps max. RGB, YcbCr or YUV formats.
    *   Hardware image scaling and filtering – automatic exposure, gain, white balance, black level.
    *   Image controls include saturation, hue, gamma, sharpness.
2.  Audio Codec
    *   Sampling rates up to 48kHz, mono.
    *   SNR > 94dB, THD < -80dB
    *   Programmable filters for noise suppression.
3.  PIR Sensor
    *   Maximum range ~ 5m.
    *   Detection angles 80-1000.

#### 2.5.4 Power Supply Board IBB2400

IBB2400 specifications can be seen as follows (crossbow, 2007):

1.  Batteries 3 x AAA.
2.  Maximum Current 500mA fused.
3.  Size 52mm x 43mm x 18mm.
4.  Weight with 3 AAA Batteries 51g.
5.  Weight without batteries 14g.

### 2.6 JPEG2000

JPEG2000 is an image compression standard developed by JPEG (Joint Photographic Expert Group) around 2000 with the hope that this image compression standard based on DWT (Discrete Wavelet Transform) provides better quality than the pre-image compression standard developed in 1992, namely JPEG. which is based on DCT (Discrete Cosine Transform). The advantages of JPEG2000 with JPEG are as follows:

1.  Provides a higher compression ratio at the same time as better image quality.
2.  Using tiling, so that the encoding can be done only on a certain part of the image, it does not have to encode the whole image, in other words, the image is divided into many parts.
3.  Progressive transmission with pixel and resolution accuracy, meaning that the original image is received at a low resolution, the resolution will increase as data is transmitted, so it can be multiresolution, can be displayed with many resolution options.
4.  There are lossless or lossy compression options that are not available in JPEG.
5.  Cope errors.
6.  Flexible file format.
7.  Side channel spatial information.

In general, the technicality of JPEG2000 image compression can be seen in Figure 2.22 and vice versa.

![Teknik kompresi citra JPEG2000 secara umum](https://cdn.steemitimages.com/DQmWwbgVhCpqBN9FwG6bADAAs37zNQhSug26tVjsUUuwFne/Gambar%202.22%20Teknik%20kompresi%20citra%20JPEG2000%20secara%20umum.jpg)

Figure 2.22 General JPEG2000 image compression technique



The JPEG2000 image compression standard is regulated in ISO/IEC 15444 which consists of 14 parts, the basic characteristics of the JPEG2000 are regulated in the first part, namely ISO/IEC 15444-1 core coding system. The encoding in JPEG2000 can be seen in Figure 2.23.

![Pengkodean JPEG2000](https://cdn.steemitimages.com/DQmesGug4Wd3niRaBvH7AqSzz2crNvbovjEvPibjj6nVpLf/Gambar%202.23%20Pengkodean%20JPEG2000.png)

Figure 2.23 Encoding JPEG2000



#### 2.6.1 Codestream syntax

Before DWT image can be done, it must be converted into signal. This is done in the syntax codestream. In this section, there is either a core header or a header tile. The header consists of several segment markers that contain minimal information about a component, for example tile size, ROI (Region of Interest), and quantization, which can be seen in Table 2.2 and Table 2.3 (Boliek, 2000).

![Tabel 2.2 Daftar marker segment 1](https://cdn.steemitimages.com/DQmUjnYupnW3rnbKPKNt3x5Ke6dhhTaaopqDAVdWqcTXQ4B/Tabel%202.2%20Daftar%20marker%20segment%201.png)

Table 2.2 List of segment markers 1



![Tabel 2.3 Daftar marker segment 2](https://cdn.steemitimages.com/DQma7VRU197tNdGkM94HvrXwqpktP9ndw5nBxDstfovVVwR/Tabel%202.3%20Daftar%20marker%20segment%202.png)

Table 2.3 List of segment markers 2



#### 2.6.2 Data Ordering

In this section, an image is divided into several components. In this section, tiling is performed as in Figure 2.24, namely dividing the image into squares, so that coding does not have to be done on the entire image, coding can be done in a certain part, for example increasing the resolution can be done in a certain part, not necessarily the whole image.

![Tiling](https://cdn.steemitimages.com/DQmY6xDZQ1EgTdSGjMwUyw7hP3WejUuSyf49yhdtYNXGEEC/Gambar%202.24%20Tiling.png)

Figure 2.24 Tiling



After that the tiles are divided into several resolutions and sub-bands, including the LL, LH, HL, and HH sub-bands as shown in Figure 2.25\. Resolution is divided into precincts, and sub-band is divided into code-blocks. The data is distributed on 1 or more layers where the information content of each layer is stored in packages. The last is the progression order that allows multi-resolution, the level of resolution will increase along with sending data, in other words, there is no need to take all the data to display the image (Boliek, 2000).

![Contoh perubahan progression order 2 dimensi](https://cdn.steemitimages.com/DQmVvxGYV4WqZc44Me8kxPaVGYbokQha5Ky69m15vDPKgku/Gambar%202.25%20Contoh%20perubahan%20progression%20order%202%20dimensi.png)

Figure 2.25 Example of change in 2-dimensional order progression



#### 2.6.3 Arithmetic Entropy Coding

After getting the coefficients, the next step is arithmetic entropy coding where information is represented in digital form. The JPEG2000 uses Elias entropy coding where a positive integer x is represented as 1 + floor(log<sub>(2)</sub>x). Because the image has been divided into several tiles, coding is performed on each tile (Boliek, 2000).

#### 2.6.4 Coefficient Bit Modeling

In this section important or rare information appears filtered. Each coefficient in the sub-band has been divided into code blocks as shown in Figure 2.26.

![Code block](https://cdn.steemitimages.com/DQmRiWZf9V2crhUC7wLTdQxJWxmxQ9967S3NCNzQaqKrTuf/Gambar%202.26%20Code%20block.png)

Figure 2.26 Code block



After that the code block is ready to enter coding passes. Coding passes consists of 3, namely (Boliek, 2000):

1.  Significance propagation coding pass, where it is determined that the important or rare coefficients arise.
2.  Magnitude refinement pass, after obtaining a significant coefficient from the first pass coding, at this stage the coefficient is added with the horizontal, vertical, and diagonal neighbors. If the additive is more or equal to 1 then it is labeled "TRUE", otherwise it is "FALSE".
3.  Clean-up coding pass, run-length coding is performed on the other coefficients.

#### 2.6.5 Quantization

Quantization is a process of rounding coefficients. In JPEG2000 formula 2.3 is used to find the stepsize then uses the 2.4 quantization formula (Boliek, 2000).

∆b=2<sup>Rb−εb</sup>(1+(μb/2)) (2.3)

∆b : stepsize

Rb : dynamic range sub-band b

εb : exponent

μb : mantisa

q(u,v)=sign(ab(u,v))(ab(u,v)/∆b) 2.4

#### 2.6.6 Transform

In the JPEG2000 standard FDWT (Foward Discrete Wavelet Transform) is carried out on each tile. FDWT passes tile coefficient with low pass filter and high pass filter to get low pass coefficient and high pass coefficient. The first level of FDWT produces a sub-band LL (Low-Low) which consists of a vertical low pass coefficient and a horizontal low pass, LH (Low-High) which consists of a vertical low pass coefficient and a horizontal high pass, HL (High-Low) which consists of a coefficient vertical high pass and horizontal low pass, and HH (High-High) which consists of the coefficient of vertical high pass and horizontal high pass. The next level is carried out by FDWT on the LL sub-band, and the resulting new LL sub-band depends on the specified level as shown in Figure 2.27\. The vertical low pass coefficient is obtained by applying the low pass filter to the tile vertically, while the horizontal low pass coefficient is obtained by applying the low pass filter to the tile horizontally and so on. On the decoder side, the IDWT (Inverse Discrete Wavelet Transform) process is carried out, which is the reverse process of FDWT (Boliek, 2000).

![Foward Discrete Wavelet Transform](https://cdn.steemitimages.com/DQmU2GXQ4wSagoJr9Mg8qEnoz9sNcJLomqfCDtpE4smJnMB/Gambar%202.27%20Foward%20Discrete%20Wavelet%20Transform.png)

Figure 2.27 Foward Discrete Wavelet Transform



#### 2.6.7 DC Level, Component Transform

Forward DC level shift is done before doing FDWT. After doing the forward DC level, a forward component transform can be performed to make compression more efficient, but this process may not be done as shown in Figure 2.28 (Boliek, 2000).

![DC level shift sebelum transformasi](https://cdn.steemitimages.com/DQmbXcQix8b3tpWipTdGC4UMdyK1JuvfhyFMUdzAZ9iwJcb/Gambar%202.28%20DC%20level%20shift%20sebelum%20transformasi.png)

Figure 2.28 DC level shift before transformation



#### 2.6.8 Region of Interest

ROI (Region of Interest) is part of the image that will be encoded on the codestream first with the aim of this section being given greater quality. The method used is Maxshift. Generally consists of 4 steps (Boliek, 2000).

1.  Regional generation ROI.
2.  Scaling the ROI area so that it has a larger value than the rest (background), so that it is in a higher bit plane.
3.  Decrease the background scale.

### 2.7 Peak Signal to Noise Ratio

PSNR (Peak Signal to Noise Ratio) is a measure commonly used to measure the quality of the image that has been processed against the original. First, the error calculation for the image that has been processed with f (x,y) against the original image g (x,y) is carried out. After obtaining the MSE (Mean Square Error) value that will be used to find the PSNR value (Shi, 2007).

e(x,y)=f(x,y)− g(x,y) (2.5)

e : error

f : processed image

g : original image

x : horizontal coordinate

y : vertical coordinate

MSE=(1/MN)Σ<sup>M-1</sup><sub>x=0</sub>Σ<sup>N-1</sup><sub>y=0</sub>e(x,y)<sup>2</sup> (2.6)

MSE : Mean Square Error

M : horizontal dimensions of the image

N : vertical dimensions of the image

PSNR<sub>dB</sub>=10log<sub>10</sub>(255<sup>2</sup>/MSE)<sub>dB</sub> (2.7)

PSNR : Peak Signal to Noise Ratio in decibel

## Chapter 3 Research Method

### 3.1 Location and Time of Research

Observation and data collection were carried out at the Communication Systems Laboratory, Department of Electrical Engineering, Faculty, Udayana University, Jimbaran and in the conference room, GDLN, Sudirman Campus, Udayana University. The research schedule plan starts from the end of May 2014 and must be completed before the end of November 2014, more details are in the Appendix.

### 3.2 Sources and Types of Research Data

Data sources can be grouped into 2 types:

1.  Primary Data: In the form of power consumption values, memory, and time from the Imote2 WSN device.
2.  Secondary Data: In the form of research schemes, device specifications, and implementation procedures of IEEE 802.15.4 Zigbee on JSVN Imote2 in image transmission.

The types of data are also grouped into 2 types:

1.  Quantitative Data: Is data in the form of numbers, in this study the value of electricity, memory, and time, or the calculation of a value derived from primary data.
2.  Qualitative Data: Data that is not in the form of numbers, in this study is a statement of the performance of the WSVN Imote2 device from various conditions applied. In addition, data in the form of graphics, and the implementation of IEEE 802.15.4 Zigbee in image transmission.

### 3.3 Research Instruments and Materials

The research instrument can be seen in Table 3.1 - Table 3.5\. The Imote2 JSVN device can be seen in Figure 2.10.

<table border="">Table 3.1 - Table 3.5 Instrument Specifications

<thead>

<tr>

<th>NO</th>

<th>Instrumen</th>

<th>Spesifikasi</th>

<th>Fungsi</th>

</tr>

</thead>

<tbody>

<tr>

<td rowspan="8">1</td>

<td rowspan="8">Laptop</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)</td>

<td rowspan="8">Sebagai pemberi perintah dalam transmisi.</td>

</tr>

<tr>

<td>Mobile Intel® Graphics Media Accelerator 4500MHD</td>

</tr>

<tr>

<td>1GB DDR2</td>

</tr>

<tr>

<td>128 WXGA Acer CrystalBriteTM LCD</td>

</tr>

<tr>

<td>250GB HDD</td>

</tr>

<tr>

<td>Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller</td>

</tr>

<tr>

<td>Atheros Communications Inc. AR928X Wireless Network Adapter</td>

</tr>

<tr>

<td>Operating System Kali Linux 1 32 bit</td>

</tr>

<tr>

<td rowspan="5">2</td>

<td rowspan="5">Perangkat JSVN Imote2</td>

<td>Radio board (IPR2400/IPR2410).</td>

<td rowspan="5">Tranceiver sebagai pengirim citra, receiver sebagai penerima citra.</td>

</tr>

<tr>

<td>Multimedia Sensor board (IMB400).</td>

</tr>

<tr>

<td>Interface board (IIB400).</td>

</tr>

<tr>

<td>Power Supply Board (IBB2400).</td>

</tr>

<tr>

<td>Sistem operasi Embedded Linux 2.6.29.1 RC 1.1 untuk ARM</td>

</tr>

<tr>

<td rowspan="9"></td>

<td rowspan="9">Radio board (IPR2400/IPR2410).</td>

<td>PXA271 XScale® processor @ [13–416] Mhz.</td>

<td rowspan="9">Sebagai perangkat yang melakukan komputasi dan penyedia media komunikasi radio untuk transmisi nirkabel.</td>

</tr>

<tr>

<td>Wireless MMX coprocessor.</td>

</tr>

<tr>

<td>256kB SRAM, 32MB FLASH, 32MB SDRAM.</td>

</tr>

<tr>

<td>Integrated 802.15.4 radio, support for external radios through SDIO and UART. Max data rate 250 Kbps point-to-point.</td>

</tr>

<tr>

<td>Integrated 2.4GHz antenna.</td>

</tr>

<tr>

<td>Multicolor status indicator LED.</td>

</tr>

<tr>

<td>Basic and advanced expansion connectors supporting : 3xUART, I2C, 2xSPI, SDIO, I2S, AC97, USB host, Camera I/F, GPIO.</td>

</tr>

<tr>

<td>Mini-USB port for direct PC connection.</td>

</tr>

<tr>

<td>Size: 48 mm x 36 mm. PCB thickness 1.75 mm</td>

</tr>

<tr>

<td rowspan="10"></td>

<td rowspan="10">Multimedia Sensor board (IMB400).</td>

<td>Camera</td>

<td rowspan="10"></td>

</tr>

<tr>

<td>Image resolution up to 640x480 pixels, 30 fps max. RGB, YcbCr or YUV formats.</td>

</tr>

<tr>

<td>Hardware image scaling and filtering – automatic exposure, gain, white balance, black level.</td>

</tr>

<tr>

<td>Image controls include saturation, hue, gamma, sharpness.</td>

</tr>

<tr>

<td>Audio Codec</td>

</tr>

<tr>

<td>Sampling rates up to 48kHz, mono.</td>

</tr>

<tr>

<td>SNR > 94dB, THD < -80dB</td>

</tr>

<tr>

<td>Programmable filters for noise suppression.</td>

</tr>

<tr>

<td>PIR Sensor</td>

</tr>

<tr>

<td>Maximum range ~ 5m. Detection Angles 80-100 degrees</td>

</tr>

<tr>

<td rowspan="6"></td>

<td rowspan="6">Interface board (IIB400).</td>

<td>Mote connectors 2x Advanced (male/female).</td>

<td rowspan="6">Sebagai penghubung antar radio processor board dengan sensor board atau perangkat lainnya.</td>

</tr>

<tr>

<td>USB connector mini-B female.</td>

</tr>

<tr>

<td>Serial port A virtual UART with RTS/CTS flow control.</td>

</tr>

<tr>

<td>Sertial port B virtual UART without hardware flow control.</td>

</tr>

<tr>

<td>JTAG port standard 20-pin connector.</td>

</tr>

<tr>

<td>Size 48mm x 36mm x 14m. Weight 11g</td>

</tr>

<tr>

<td>3</td>

<td>Kabel USB</td>

<td></td>

<td>Sebagai penghubung PC dengan JSVNplatform Imote2.</td>

</tr>

<tr>

<td>4</td>

<td>Multimeter</td>

<td></td>

<td>Sebagai pengukur konsumsi daya listrik.</td>

</tr>

</tbody>

</table>

The research material is an image captured from the camera sensor of the WSVN Imote2 device on May 9, 2014 at the Communication Systems Laboratory, Department of Electrical Engineering, Udayana University with the Portable Pixelmap Graphic (.ppm) format, 480 x 640 pixel resolution in Figure 3.1, with a large file size. 921.6 KB, and IEEE 802.15.4 Zigbee-based transmission media.

![Bahan penelitian](https://cdn.steemitimages.com/DQmUmtf4M1utDpuSXVpmZ6dRas9v1RJdBs2wb9jJ9vxgK5U/Gambar%203.1%20Bahan%20penelitian.png)

Figure 3.1 Research materials



### 3.4 Research Stages

Overall the research stage consists of 2 stages. The first stage is the procedure for implementing image transmission using IEEE 802.15.4 Zigbee transmission media on the Imote2 WSVN platform with the embedded Linux operating system. The mechanism for transmitting images is explained. The second stage is the testbed to test the performance of WSVN in image transmission. Performance is determined by the power consumption, the time required for transmission, and the amount of memory used. In general, the description of the stages can be seen in Figure 3.2.

![Skema dasar penelitian](https://cdn.steemitimages.com/DQmZa2DJeG8e8TE88g3XCwKHp5XnhvQqbsnoKwLTaR1SiqY/Gambar%203.2%20Skema%20dasar%20penelitian.PNG)

Figure 3.2 Schematic of the basis of research



#### 3.4.1 IEEE 802.15.4 Zigbee implementation for image transmission

Radio on Imote2 running Linux OS uses the Tosmac driver. Tosmac provides a script for transmit and receive which will be adjusted for image transmission. It can be seen as follows:

<pre style="background-color:black; color:lightgreen">
//************************************************************ 
// 
// blocking.c 
// 
// Gefan Zhang 
// 
//************************************************************* 
#include <stdio.h> 
#include <fcntl.h> 
#include <unistd.h> 
#include <sys/ioctl.h> 
#include "tosmac.h" 

void msg_init(TOS_Msg* pMsg) 
{ 
   pMsg->length = 0; 
   pMsg->fcfhi = 0; 
   pMsg->fcflo = 0; 
   pMsg->dsn = 0; 
   pMsg->destpan = 0; 
   pMsg->addr = 0; 
   pMsg->type = 0; 
   pMsg->group = 0; 
   memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
   pMsg->strength = 0; 
   pMsg->lqi = 0; 
   pMsg->crc = 0; 
   pMsg->ack = 0; 
   pMsg->time = 0; 
} 

//--------------------- main ------------------------------- 

int main(int argc, char* argv[]) 
{ 
  int tosmac_dev; 
  TOS_Msg recv_pkt; 
  TOS_Msg send_pkt; 
  // open as blocking mode 
  tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
  if (tosmac_dev < 0) 
  { 
    fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
    return 1; 
  } 
  msg_init(&send_pkt); 
  send_pkt.addr = 99; 
//  memcpy(send_pkt.data, "DATA for test", 14); 
  memcpy(send_pkt.data, "0000000000000", 14); 
  send_pkt.length = 14; 
  printf("User write to driver\n");  
  write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); 
  // close device 
  close (tosmac_dev); 
  return 0; 
}
</pre>

<pre style="background-color:black; color:lightgreen">
//************************************************************ 
// 
// blocking.c 
// 
// Gefan Zhang 
// 
//************************************************************* 
#include <stdio.h> 
#include <fcntl.h> 
#include <unistd.h> 
#include <sys/ioctl.h> 
#include "tosmac.h" 
void msg_init(TOS_Msg* pMsg) 
{ 
   pMsg->length = 0; 
   pMsg->fcfhi = 0; 
   pMsg->fcflo = 0; 
   pMsg->dsn = 0; 
   pMsg->destpan = 0; 
   pMsg->addr = 0; 
   pMsg->type = 0; 
   pMsg->group = 0; 
   memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
   pMsg->strength = 0; 
   pMsg->crc = 0; 
   pMsg->lqi = 0; 
   pMsg->ack = 0; 
   pMsg->time = 0; 
} 
//--------------------- main ------------------------------- 

int main(int argc, char* argv[]) 
{ 
  int tosmac_dev; 
  TOS_Msg recv_pkt; 
  TOS_Msg send_pkt; 
  // open as blocking mode 
  tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
  if (tosmac_dev < 0) 
  { 
    fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
    return 1; 
  } 
  printf("User read from driver:\n"); 
  read(tosmac_dev, &recv_pkt, sizeof(TOS_Msg));// != sizeof(TOS_Msg); 
  printf("length is %d\n", recv_pkt.length); 
  printf("data is %s\n", recv_pkt.data); 
  // close device 
  close (tosmac_dev); 
  return 0; 
}
</pre>

#### 3.4.2 Testbed

The testbed uses 2 WSVN Imote2 devices where one functions as a transmitter and the other functions as a receiver. At the transmitter, image capture is carried out with the camera sensor. At the transmitter, the image transmission to the receiver is carried out via wireless media based on IEEE 802.15.4 Zigbee. Image capture has been done in previous studies, therefore only observed in compression and transmission. There are 2 types of transmitted images, namely raw images from the capture of the IMB400 sensor and raw images processed based on the JPEG2000 standard with a ratio of 1, 5, and 10 where the ratio is the limiting of the channel capacity. A ratio of 5 means that the number of bits of the compressed image is limited to a maximum of 1/5 of the original number of bits, and a ratio of 10 means that it is limited to a maximum of 1/10 of the number of original bits.

At the time of transmission, the measurement of power consumption, memory, and time is measured at the transmitter. Measurement of electric power consumption using a multimeter with the object of measurement is the battery on the power supply board (IBB2400). The measurement of electric power is done by measuring the voltage drop and current drop, in other words, the difference in the value of electric power before and after the research. In particular, it measures the consumption of electrical power starting from the command for transmission by the computer until the image is transmitted, as well as the time consumption. The measurement of consumption starts from giving commands by the computer, not from the start of image transmission because it also involves aspects of the operating system used, namely embedded Linux. The measurement result data is from one study. Memory based on the display from the terminal when transmitter access. The transmitted image is measured by PSNR. In general, the testbed can be seen in Figure 3.3, Scenarios will be described in the following sections:

![Skema testbed](https://cdn.steemitimages.com/DQmXcpZYEYG2kA3sjC3mYM25vpuJ92XdWc8TFuusKaGWhRF/Gambar%203.3%20Skema%20testbed.PNG)

Figure 3.3 Testbed Scheme



1.  Scenario 1
    *   Insert images based on research materials into Imote2 (pre-store).
    *   Imote2 setup.
    *   Measurement of battery voltage and current before transmission.
    *   Image transmission from the transmitter to the receiver with a distance of 5 meters can be seen in Figure 3.4 and Figure 3.5.
    *   Measurement of virtual memory used by the transmission program.
    *   Measurement of the length of time it will take for transmission.
    *   Measurement of battery voltage and current after transmission.
    *   Measurement of the image PSNR value.
    *   The research is repeated with a distance of 10, and 15 meters can be seen in Figure 3.6 - Figure 3.9.
2.  Scenario 2
    *   Imote2 setup.
    *   Measurement of battery voltage and current before compression.
    *   Image compression is performed on the transmitter with a ratio of 1.
    *   Measurement of virtual memory used by compression programs.
    *   Measurement of how long it takes to compress.
    *   Measurement of battery voltage and current after compression.
    *   Measurement of battery voltage and current before transmission.
    *   Transmission of the image from the transmitter to the receiver at a distance of 5 meters.
    *   Measurement of virtual memory used by the transmission program.
    *   Measurement of the length of time it will take for transmission.
    *   Measurement of battery voltage and current after transmission.
    *   Measurement of the PSNR value.
    *   The study was repeated with a compression ratio of 5, and 10.
    *   Research is repeated at distances of 10, and 15 meters.

![Peta lab sistem komunikasi penelitian jarak 5 meter](https://cdn.steemitimages.com/DQmVCbEP14ESf8rgqHzwr14Rs1Gk3zRVAxq42bibpy2oGsq/Gambar%203.4%20Peta%20lab%20sistem%20komunikasi%20penelitian%20jarak%205%20meter.PNG)

Figure 3.4 Map of the research communication system lab with a distance of 5 meters



![Gambar 3.5 Lab sistem komunikasi penelitian jarak 5 meter](https://cdn.steemitimages.com/DQmeJcyv7koHNgZnptCEYFpa4v1FXhjLoskwELmbapDYBkc/Gambar%203.5%20Lab%20sistem%20komunikasi%20penelitian%20jarak%205%20meter.png)

Figure 3.5 Research communication system laboratory with a distance of 5 meters



![Peta lab sistem komunikasi penelitian jarak 10 meter](https://cdn.steemitimages.com/DQmVT2LHu6BcMr7SP7m5nXGdCWfVxikLycACgimfq4LxNan/Gambar%203.6%20Peta%20lab%20sistem%20komunikasi%20penelitian%20jarak%2010%20meter.PNG)

Figure 3.6 Map of a 10 meter distance research communication system lab



![Lab sistem komunikasi penelitian jarak 10 meter](https://cdn.steemitimages.com/DQmQ8kCbYwwfWCmCKGWfr9UwN8ueKHnbazPuHgdUjaAChpY/Gambar%203.7%20Lab%20sistem%20komunikasi%20penelitian%20jarak%2010%20meter.png)

Figure 3.7 Research communication system lab 10 meters distance



![Peta ruang konferensi penelitian jarak 15 meter](https://cdn.steemitimages.com/DQmWUGqFrXKjMreHAgMnobhWtwfKNkfu9Qe48mVtuwZDBHD/Gambar%203.8%20Peta%20ruang%20konferensi%20penelitian%20jarak%2015%20meter.PNG)

Figure 3.8 Map of the research conference room with a distance of 15 meters



![Ruang konferensi penelitian jarak 15 meter](https://cdn.steemitimages.com/DQmeR6NPhzMTzkoRvt5eNvoZXuRgNJSUoL1H6kcaBqjt7us/Gambar%203.9%20Ruang%20konferensi%20penelitian%20jarak%2015%20meter.png)

Figure 3.9 Research conference room at a distance of 15 meters



### 3.5 Analysis Flow

In this section, the research stage will be described in a flowchart diagram in Figure 3.10, Figure 3.11, and Figure 3.12\. The overall research is as follows:

1.  Specifies the image transmission procedure.
2.  Preparing raw image to Imote2 which acts as a transmitter for transmission, compression will be done in Imote2.
3.  Conduct research with distances between Imote2 5, 10, and 15 meters for each raw and processed image transmission based on JPEG2000.
4.  Finds the power consumption of each stage of image transmission.
5.  Get the time taken for each stage and the memory used.
6.  From all the data obtained, the optimal scheme is determined.

![Alur penelitian 1](https://cdn.steemitimages.com/DQmVJqyM9vDaCdPp7dV47Pa9TM9hqyx2AH67TBzxSKoJiTF/Gambar%203.10%20Alur%20penelitian%201.PNG)

Figure 3.10 Research flow 1



![Alur Penelitian 2](https://cdn.steemitimages.com/DQmYXB2xtTmrfqcBZ4YhTvLujYnXb2vWC4CNnCBTzzNxj8d/Gambar%203.11%20Alur%20Penelitian%202.PNG)

Figure 3.11 Research Flow 2



![Alur Penelitian 2](https://cdn.steemitimages.com/DQmcrZfHjfJxgt8GXhVK3XQ1fSMMuHbrzB3E8MX4iD75oCf/Gambar%203.12%20Alur%20Penelitian%202.PNG)

Figure 3.12 Research Flow 2



## Chapter 4 Discussion

Overall, this chapter discusses the image transmission program, Imote2 Linux as a testbed of the compilation of transmission programs and JPEG2000 compression software to giving commands wirelessly to Imote2 which is the sender, and the final part of this chapter is displayed and analyzed the performance of the Imote2 device. From the research results, it turns out that doing compression before transmission is very helpful to lighten the burden of transmission, and interestingly, the compression process itself does not burden the device too much, so it is highly recommended to use compression.

The point of this research is that Imote2 Linux can be used as a testbed. To summarize again, previous research has succeeded in embedding Linux into the JSVN Imote2 platform and transmitting random data, so in this study it is to transmit image data. The program code in section 3.4.1 is a program for sending character data of up to 28 bytes, then displayed on the screen. To send an image in the form of a file, the code must be modified so that the sender side can read and send the file, and on the receiving side can receive and save the file (not limited to being displayed on the screen), it must also be able to transmit files of more than 28 bytes.

The process for enabling Imote2 Linux to function as a testbed is summarized in Figure 4.1\. First, making program code, more fully discussed in section 4.1\. Then the program is compiled in section 4.2 and section 4.3, and embeded into Imote2, illustration can be seen in Figure 4.2\. Finally, Imote2 is configured to be able to receive commands via radio, in other words, after the transmitter is turned on, ready to receive commands, it can be illustrated in Figure 4.3\. Commands can be in the form of compressing, or transmitting images as illustrated in Figure 4.4\. This is done because the transmitter is powered by batteries (without cables), so communication is only available via radio.

![Alur diagram implementasi testbed](https://cdn.steemitimages.com/DQmfZiREMYDajjHiHBd2vnKu4Yw7Va6K5oZBU6YjffjyhWQ/Gambar%204.1%20Alur%20diagram%20implementasi%20testbed.PNG)

Figure 4.1 Flow diagram of testbed implementation



![Illustrasi kompilasi dan embed program](https://cdn.steemitimages.com/DQmabnvVuSyGYxrSKsfKg5E92xNSggCmT2dwERseG3F6S5D/Gambar%204.2%20Illustrasi%20kompilasi%20dan%20embed%20program.png)

Figure 4.2 Illustration of compiling and embedding a program



![Illustrasi ketika startup 1](https://cdn.steemitimages.com/DQmdFU2arJ37ZfcRz8wzcwLh1c7YuzcLjW2tR2BkT2yAzHT/Gambar%204.3%20Illustrasi%20ketika%20startup%20a.png) ![Illustrasi ketika startup 2](https://cdn.steemitimages.com/DQmYKgcmLvFfJ6XPqWYvUmYhdNqXbE9QdPxS3cyL5JKeh7J/Gambar%204.3%20Illustrasi%20ketika%20startup%20b.png)

Figure 4.3 Illustration at startup



![Illustrasi testbed 1](https://cdn.steemitimages.com/DQmZ4u7QBTjFA8VKqvAR4QJKcRWvN1qJs9ic45vnnwdKQ6B/Gambar%204.4%20Illustrasi%20testbed%20a.png) ![Illustrasi testbed 2](https://cdn.steemitimages.com/DQmZMQr9vD8ZqqAWz1Ar7Rw3dpLfu9sJa2d2uHXKEQSbqux/Gambar%204.4%20Illustrasi%20testbed%20b.png) ![Illustrasi testbed 3](https://cdn.steemitimages.com/DQmakx11HQNALhHHPNiKqjtuKxhtfhV2j9hYA1dUZYNzizq/Gambar%204.4%20Illustrasi%20testbed%20c.png) ![Illustrasi testbed 4](https://cdn.steemitimages.com/DQmYnpptz34MJVa1mUZ9G3zB4VGpYt8u3qKAxLxv8VNQoq3/Gambar%204.4%20Illustrasi%20testbed%20d.png)

Figure 4.4 Illustration of the testbed



### 4.1 Transmission Program

Radio transmission on Imote2\. In the previous study described in section 2.1, using the driver from Tosmac to run the radio on Imote2 Linux, here still use the same driver. For transmission, two programs are needed, namely the program for sending and receiving. Both programs are written in C language. Specifically, this research follows the provisions of the tosmac header, namely the maximum data payload sent is 28 bytes. Overall on the sender side reads the image file to be sent, the receiver will create a new file and write the received data to the file. The delivery is done in stages by breaking 28 bytes of each tile (not all at once).

#### 4.2 Sending Program

The following syntax shows a sending program with the file name "send_file_advance.c" which was carried out in this study and is described as follows:

<pre style="background-color:black; color:lightgreen">
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by : Fajar Purnama 
</pre>

Lines 1 - 8 are comments containing information about the programmer and the modifier. Comments can be marked with "//" or begin with "/ *" and end with "* /" (which is not bold). Line 5 is the first author of the program, while line 8 is the name of the author who modified the program.

<pre style="background-color:black; color:lightgreen">
9 #include <stdio.h> 
10 #include <fcntl.h> 
11 #include <unistd.h> 
12 #include <sys/ioctl.h> 
13 #include <tosmac.h>
</pre>

Lines 9 - 13 indicate the header used in this program, the header contains the code definition used. To use the header, you can use the character "#", this character indicates the script required by the program. On line 9 there is “stdio.h” which is the basic header for all C language programs which defines the “printf” command for displaying to the screen, “while” for looping, arithmetic operations, and many others. Line 10 "fcntl.h" defines the command "open" to open a file and "close" to close and "create" to create, line 11 "unistd.h" defines the command "read" to read the file and "write" to write data to file, and line 13 "tosmac.h" sets the variable in the tosmac (radio) driver.

<pre style="background-color:black; color:lightgreen">
14 void msg_init(TOS_Msg* pMsg) 
15 { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0; 
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); // 28 bytes usually 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
</pre>

Lines 14 - 30 are written in the form of the function "msg_init" which is a function to initialize the package variables such as address, group, and payload contained in the header "tosmac.h" for transmission.

Inti program “int main” dimulai dari baris 32.

<pre style="background-color:black; color:lightgreen">
31 //---Main-Program---// 
32 int main(int argc, const char *argv[]){ 
33 // Check Error 
34 if(argv[1]==NULL){ 
35 printf("Usage: ./send_file [file], example: ./send_file_advance image.ppm"); 
36 return 1; 
37 } 
38 //sleep(10); //pause for 10 sec (give time for receiver to prepare) cross this out if not needed 
39 // Declaration 
40 int tosmac_dev, file, file_size, h, i, j, k; 
41 //char *packet; 
42 TOS_Msg recv_pkt; 
43 TOS_Msg send_pkt; 
44 // open as blocking mode 
45 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
46 if (tosmac_dev < 0) 
47 { 
48 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
49 
50 return 1; 
51 } 
52 // open file to be send 
53 file = open(argv[1], O_RDWR); // open file 
54 file_size = lseek(file,0,SEEK_END); // calculate filesize by going to final byte of file using lseek function from fcntl.h 
55 lseek(file,0,SEEK_SET); // return to start of file 
56 msg_init(&send_pkt); 
57 send_pkt.addr = 99;  // Address 
58 h = file_size/TOSH_DATA_LENGTH; // How much packet or times of transmission should be prepared (using div) 
59 i = file_size%TOSH_DATA_LENGTH; // Remainder of "h" (using mod) 
60 j = 0; 
61 k = 0; 
</pre>

Lines 33 - 37 contain error checks if the command entered does not match, lines 39 - 43 are part of the variable declaration, lines 44 - 51 open the radio, lines 52 - 55 open the file, and lines 56 - 61 specify packets. On line 32 "int main" there is "int argc, int argv []" so that the program can be executed by selecting the desired file "./send_file_advance argv [1]", as defined on line 53 "file = open (argv [1 ], O_RDWR) ”. If there is no input, it will show how to use the program on line 35, namely "./send_file_advance file" which is set in the statement "if (argv [1] == NULL)" line 34, and line 36 "return 1" to provide an error code on the program if the input matches the statement line 34\. Line 45 "tosmac_dev = open (TOSMAC_DEVICE, O_RDWR)" is to open the radio where "TOSMAC_DEVICE" is "/dev/tosmac" as defined in "tosmac.h", "O_RDWR" so that files opened, read & write, can be seen in "fcntl.h". Line 55 "file_size = lseek (file, 0, SEEK_END)" to find the file size by going to the last bit of the file to return it to the initial bit with the code "lseek (file, 0, SEEK_SET)". Defined packets to be sent are "TOS_Msg send_pkt" (line 42) and received "TOS_Msg recv_pkt" (line 43), where "TOS_Msg" is the packet structure defined in "tosmac.h". Line 57 "send_pkt.addr = 99" specifies that the address of the sender is 99\. Line 58 "h" is the number of packets by dividing the file size by the maximum data payload "TOSH_DATA_LENGTH", here is 28, while the value "i" (line 59) is the remainder of the division of "h" which is the last byte to be sent.

<pre style="background-color:black; color:lightgreen">
62 while(j+1<h){ // Because j (requested file order) starts at zero 
63 so it's j+1 
64 // Use this if need resting time for when k reach certain accumulative bytes // 
65 /*if(k%1400==0){ 
66 sleep(1); 
67 }*/ 
68 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg));   
69 // Waiting for receiver to send a packet (for ACK), it will wait until receiver is ready 
70 j = recv_pkt.data[1]+3000; // Requested order of file in packet, 3000 because it starts at -3000, the data type of data doesn't allow over 3000 while 3300 packet is needed, So we start from below 0. 
71 printf("Packet %d/%d\n",j,h); // Verbose 
72 k = j*TOSH_DATA_LENGTH; // Packet converted into byte 
73 lseek(file,k,SEEK_SET); // Seek to the requested byte 
74 read(file,send_pkt.data,TOSH_DATA_LENGTH); // reading 28 byte from file, then read next 28 due to while() loop, file >>>>> send_pkt.data 
75 send_pkt.group = 7; // Group identifier, modify this as wished 
76 // writing packet to device 
77 printf("User writing %d bytes to driver\n", TOSH_DATA_LENGTH);  
78 // verbose  
79 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg));  
80 // writing to device, (TOS_Msg*)&send_pkt >>>>> tosmac_dev, & it's a pointer 
81 k += TOSH_DATA_LENGTH; // accumulative payload sent 
82 printf("%d bytes written\n", k); // verbose 
83 // use this function if for some reason need to slow down 
84 // usleep(30000); // in micro seconds 
85 } 
86 // Sending the last bytes 
87 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg));   
88 // Waiting for receiver to send a packet (for ACK), it will wait 
89 until receiver is ready 
90 read(file,send_pkt.data,i); // i = remainder  
91 printf("User writing %d bytes to driver\n", i); // verbose 
92 write(tosmac_dev, (TOS_Msg*)&send_pkt, i); // final sending 
93 k += i; // accumulative payload sent 
94 memcpy(send_pkt.data,"0S0T1O1P0",9); 
95 write(tosmac_dev, (TOS_Msg*)&send_pkt, 9); 
96 printf("%d bytes written, FINISH!!\n", k); // verbose 
</pre>

Lines 62 - 85 are the process transmission and lines 85 - 96 are the last transmissions. The transmission process is contained in line 62 of the while loop, where files are sent every 28 bytes. Looping will stop if "j" reaches the value "h" (number of packets). Before transmission awaits information from the receiver containing the number of packets received on line 68 "read (tosmac_dev, (TOS_Msg *) & recv_pkt, sizeof (TOS_Msg))" (this code will read data received by radio "tosmac_dev" of "sizeof (TOS_Msg) "Which is then written to the pointer "&recv_pkt"). The value contained in “recv_pkt” will be entered into “j” (line 70). The arithmetic operation on “k” (line 72) converts the number of packets to the number of bytes received. After that it will go to the next byte which will be sent on line 73 "lseek (file, k, SEEK_SET)". Then On line 75, sizeof (TOS_Msg)) "(this code will write "&send_pkt "of" sizeof (TOS_Msg) "to" tosmac_dev"). After the while loop is sending the last byte "i" which is the remainder of the division of "j", the last one will send the code "0S0T1O1P0" to the receiver to notify that the transmission has ended.

<pre style="background-color:black; color:lightgreen">
97 //close device   
98 close(tosmac_dev); 
99 close(file);  
100 return 0; 
101 } 
</pre>

Lines 97 - 101 radio and file closings and the end of the program, the code "close" to close the file defined in "fcntl.h".

#### 4.1.2 Receiving Program

The following syntax shows the receiving program with the file name "recv_file_advance.c" which was carried out in the study and overall the receiving program is similar to the sending program, in other words only a slight difference can be explained as follows:

<pre style="background-color:black; color:lightgreen">
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by : Fajar Purnama
</pre>

Lines 1 - 8 are comments containing information about the programmer and the modifier.

<pre style="background-color:black; color:lightgreen">
9 #include <stdio.h> 
10 #include <fcntl.h> 
11 #include <unistd.h> 
12 #include <sys/ioctl.h> 
13 #include <tosmac.h>
</pre>

Lines 9 - 13 indicate the header used in this program, the header contains the code definition used.

<pre style="background-color:black; color:lightgreen">
14 void msg_init(TOS_Msg* pMsg) 
15 { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0; 
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); // 28 bytes usually 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
</pre>

Lines 14 - 30 are functions for initializing the variables in the packet to be transmitted.

The core of the program starts at line 32.

<pre style="background-color:black; color:lightgreen">
31 //--------------------- main ------------------------------- 
32 int main(int argc, const char *argv[]) { 
33 // Check Error 
34 if(argv[1]==NULL){ 
35 printf("Usage: ./recv_file [file], example: ./recv_file_advance image.ppm"); 
36 return 1; 
37 } 
</pre>

Lines 33 - 37 contain error checks if the command entered does not match.

<pre style="background-color:black; color:lightgreen">
38 // Declaration 
39 int tosmac_dev, file, i; 
40 TOS_Msg recv_pkt; 
41 TOS_Msg send_pkt; 
</pre>

Lines 38 - 41 are part of the variable declaration.

<pre style="background-color:black; color:lightgreen">
42 // open as blocking mode 
43 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); // TOSMAC_DEVICE = /dev/tosmac, O_RDWR = Open as Read & Write 
44 // Check Error
45 if (tosmac_dev < 0) 
46 { 
47 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
48 
49 return 1; 
50 
51 } 
</pre>

Lines 42 - 49 open the radio.

<pre style="background-color:black; color:lightgreen">
50 // file 
51 file = open(argv[1], O_RDWR); 
52 // Check Error 
53 if(file<0){ 
54 creat(argv[1], O_RDWR); // create empty file, argv[1] if no file exist: user input (./recv_file argv[1])  
55 file = open(argv[1], O_RDWR); // Open created file 
56 } 
</pre>

Lines 50 - 56 open the file in this section if no file is found it will create a new file with the "creat" function line 54.

<pre style="background-color:black; color:lightgreen">
57 // receving file 
58 printf("User read from driver:\n"); 
59 // receive 28 bytes of file for infinity     
60 while(1){ 
61 // Seek to end of file to continue receive (this feature allows continueable download) 
62 i = lseek(file,0,SEEK_END); 
63 send_pkt.data[1] = (i/TOSH_DATA_LENGTH)-3000; // Since the max value of data type is 3000 we start from -3000, so we could put a number up to 6000, This feature request tells the transmitter how much bytes already received so the transmitter will sinchronize. 
64 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); // sending i in send_pkt.data[1] 
65 alarm(2); // 2  seconds timeout  
66 read(tosmac_dev, (TOS_Msg*)&recv_pkt, sizeof(TOS_Msg)); // Read receive file from Tosmac Device, Pause if device == NULL, !=sizeof(TOS_Msg) 
67 // Stop code, break infinite while loop if this code is received, send application should send this string to tell if transmission finish  
68 if(strncmp(recv_pkt.data,"0S0T1O1P0",9)==0){  
69 break; 
70 } 
71 // Use group as identifier, so it will not process packet if it is not on this group 
72 if(recv_pkt.group!=7){ 
73 continue; // it will ignore next code and restart while loop 
74 } 
75 // Verbose, shows accumulative received number of bytes 
76 printf("Receiving %d bytes of data\n", recv_pkt.length); 
77 i += recv_pkt.length; // Equal to i = i + recv_pkt.length 
78 printf("Received %d bytes\n", i); 
79 // Writing received 28 bytes to file that had just been created 
80 write(file, recv_pkt.data, recv_pkt.length); // write will automatically go to last byte order of file 
81 } 
</pre>

Lines 60 - 81 represent the transmission process. In the process of transmitting in an infinite while loop, initially read the number of bytes that have been received by the file (file size) on line 62 "lseek (file, 0, SEEK_END)" and at the same time go to the end of the file. On line 63 the file size is entered into "send_pkt.data [1]" and on line 64 it is sent to the transmitter to tell which bytes should be sent. In this program the value starts from -3000 in order to determine a larger value because the maximum value is approximately 3000 while the value that needs to be sent is more than 3000\. To do this there needs to be a change to "tosmac.h" in the packet definition section in the section . For this program the data type "data" changes from "s8" to "s16", the change is to increase the number of bits used. If this is set the maximum value in "send_pkt.data [1]" is only below 1000\. All this is done so that the transmission can be resumed if it breaks and suppresses errors. This program is filled with "alarm (2)" on line 65, meaning the program will stop (time out) if 1 while loop exceeds 2 seconds. If this occurs the transmission can be resumed by running the program again showing the same file. Another difference is on line 72 "if (send_pkt.group =! 7) {continue;}" which means if the packet received is not a group 7 to ignore and continue to the next loop. In line 68 "if (strncmp (recv_pkt.data," 0S0T1O1P0 ", 9) == 0) {break;}" means if the received string is "0S0T1O1P0" and the number of characters is "9" then break the while loop, it is determined that the string this is a sign that the transmission has ended.

<pre style="background-color:black; color:lightgreen">
82 printf("FINISH!!"); 
83 // closing device and file 
84 close (tosmac_dev); 
85 close(file); 
86 return 0; 
87 }
</pre>

Lines 82 - 87 close radio and file and end of program.

### 4.2 Openjpeg Compilation

This section contains ways to compile the Openjpeg-1.5.1 software onto Imote2-Linux, in order to make the compression software available on the device. The compiler used is linux-gcc-4.1.2-arm-xscale-linux-gnu-glibc-2.3.3 with dependencies lcms2, libpng, and zlib, for here lcms2-2.6, libpng-1.2.51, and zlib-1.2.8.

The source obtained is compressed in gunzip tape archive format. The following command to extract the compressed file contents:

Lines 60 - 81 represent the transmission process. In the process of transmitting in an infinite while loop, initially read the number of bytes that have been received by the file (file size) on line 62 "lseek (file, 0, SEEK_END)" and at the same time go to the end of the file. On line 63 the file size is entered into "send_pkt.data [1]" and on line 64 it is sent to the transmitter to tell which bytes should be sent. In this program the value starts from -3000 in order to determine a larger value because the maximum value is approximately 3000 while the value that needs to be sent is more than 3000\. To do this there needs to be a change to "tosmac.h" in the packet definition section in the section. For this program the data type "data" changes from "s8" to "s16", the change is to increase the number of bits used. If this is set the maximum value in "send_pkt.data [1]" is only below 1000\. All this is done so that the transmission can be resumed if it breaks and suppresses errors. This program is filled with "alarm (2)" on line 65, meaning the program will stop (time out) if 1 while loop exceeds 2 seconds. If this occurs the transmission can be resumed by running the program again showing the same file. Another difference is on line 72 "if (send_pkt.group =! 7) {continue;}" which means if the packet received is not a group 7 to ignore and continue to the next loop. In line 68 "if (strncmp (recv_pkt.data," 0S0T1O1P0 ", 9) == 0) {break;}" means if the received string is "0S0T1O1P0" and the number of characters is "9" then break the while loop, it is determined that the string this is a sign that the transmission has ended.

<pre style="background-color:black; color:lightgreen">
tar xfv linux-gcc-4.1.2-arm-xscale-linux-gnu-glibc-2.3.3.tgz 
tar xfv openjpeg-1.5.1.tar.gz 
tar xfv zlib-1.2.8.tar.gz 
tar xfv lcms2-2.6.tar.gz 
tar xfv libpng-1.2.51.tar.gz 
</pre>

The following command adds the location of the compiler executable file:

<pre style="background-color:black; color:lightgreen">
export PATH=/[lokasi folder]/arm-xscale-Linux-gnu/bin/:$PATH
</pre>

The first additional dependencies requested are lcms2.

<pre style="background-color:black; color:lightgreen">
cd /[lokasi folder]/lcms2-2.6 
export CROSS-PREFIX=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ 
./configure --prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
</pre>

Command "cd" to go to the folder, "export" to assign a value to a variable, here "CROSS-PREFIX" is defined in the "configure" file on zlib, if compiled for cross-compiler it is given the value of the cross-compiler location. In the file "configure" there is a series of configuration, when executed will be created "Makefile" to compile as needed. Command "--prefix" to add the installation location. Command "make" to compile based on files "Makefile" and "make install" to put the compilation into place according to "--prefix". Next compile zlib for the compiler:

<pre style="background-color:black; color:lightgreen">
cd /[lokasi folder]/zlib-1.2.8 
CC=arm-xscale-linux-gnu-gcc prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ CFLAGS=”-04” ./configure --shared 
make && make install 
</pre>

In this research, we need the command "--shared" so that it can be detected by "libpng" during configuration. After that compile libpng:

<pre style="background-color:black; color:lightgreen">
cd /[lokasi folder]/libpng-1.2.51 
./configure --prefix=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
</pre>

Command "cd" to go to the folder, "export" to assign a value to a variable, here "CROSS-PREFIX" is defined in the "configure" file on zlib, if compiled for cross-compiler it is given the value of the cross-compiler location. In the file "configure" there is a series of configuration, when executed will be created "Makefile" to compile as needed. Command "--prefix" to add the installation location. Command "make" to compile based on files "Makefile" and "make install" to put the compilation into place according to "--prefix". Next compile zlib for the compiler:

<pre style="background-color:black; color:lightgreen">
cd /[lokasi folder]/zlib-1.2.8 
CC=arm-xscale-linux-gnu-gcc prefix=/[lokasi folder]/arm-xscale-Linux-gnu/arm-xscale-Linux-gnu/ CFLAGS=”-04” ./configure --shared 
make && make install 
</pre>

In this research, we need the command "--shared" so that it can be detected by "libpng" during configuration. After that compile libpng:

<pre style="background-color:black; color:lightgreen">
cd /[lokasi folder]/libpng-1.2.51 
./configure --prefix=/[lokasi folder]/arm-xscale-linux-gnu/arm-xscale-linux-gnu/ --host=arm-xscale-linux-gnu 
make && make install 
</pre>

Based on the file "configure" "--host" determines the type of compilation platform, here is "arm-xscale-linux-gnu", it is necessary to "export" the cross-compiler executable location at the beginning of this section. Lastly is the Openjpeg compilation:

<pre style="background-color:black; color:lightgreen">
cd openjpeg-1.5.1 
./configure --prefix=/[lokasi folder]/[lokasi folder bebas]/ --host=arm-xscale-Linux-gnu --enable-jpwl --enable-debug --disable-tiff 
make && make install
</pre>

### 4.3 Testbed Implementation

Overall, this section contains the transmission process for this study. Initially including the transmission program and Openjpeg so that in essence the device can transmit on a battery or without being connected to a computer.

#### 4.4 Command Program

Here there are additional programs, apart from using the "recv" program, 2 additional programs are needed, namely a program to send commands and a program to receive commands. The program sending the command "send_command.c" is as follows:

<pre style="background-color:black; color:lightgreen">
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by Fajar Purnama 
9 /* Only Difference from original send.c is an addition of arguement (argc, argv) we could send any message we want without changing its source code for example sending hello message just type ./send_command hello */ 
10 #include <stdio.h> 
11 #include <fcntl.h> 
12 #include <unistd.h> 
13 #include <sys/ioctl.h> 
14 #include <tosmac.h>
15 void msg_init(TOS_Msg* pMsg) { 
16 pMsg->length = 0; 
17 pMsg->fcfhi = 0; 
18 pMsg->fcflo = 0;
19 pMsg->dsn = 0; 
20 pMsg->destpan = 0; 
21 pMsg->addr = 0; 
22 pMsg->type = 0; 
23 pMsg->group = 0; 
24 memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
25 pMsg->strength = 0; 
26 pMsg->lqi = 0; 
27 pMsg->crc = 0; 
28 pMsg->ack = 0; 
29 pMsg->time = 0; 
30 } 
31 //--------------------- main ------------------------------- 
32 int main(int argc, const char *argv[]) { 
33 if(argv[1]==NULL){ 
34 printf("Usage: ./send_command [message], example ./send_command reboot, ./send_command hello\n"); 
35 return 1; 
36 } 
37 int tosmac_dev; 
38 TOS_Msg recv_pkt; 
39 TOS_Msg send_pkt; 
40 // open as blocking mode 
41 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
42 if (tosmac_dev < 0) 
43 { 
44 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
45 return 1; 
46 } 
47 msg_init(&send_pkt); 
48 send_pkt.addr = 99; 
49 memcpy(send_pkt.data, argv[1], TOSH_DATA_LENGTH); 
50 send_pkt.length = TOSH_DATA_LENGTH; 
51 printf("User write to driver\n");  
52 write(tosmac_dev, (TOS_Msg*)&send_pkt, sizeof(TOS_Msg)); 
53close(tosmac_dev); 
54 return 0; 
55 }
</pre>

The entire description of the command-sending program is the same as that of the transmission program. In particular, what is different in this program is on line 49 where the characters to be written to "send_pkt.data", namely "argv [1]" will be sent. This program is limited to sending characters up to 28 bytes. Here is the program for receiving the command "recv_command.c":

<pre style="background-color:black; color:lightgreen">
1 //************************************************************ 
2 // 
3 // blocking.c 
4 // 
5 // Gefan Zhang 
6 // 
7 //************************************************************* 
8 // Modified by Fajar Purnama 
9 /* The only difference is system() function is added from stdlib.h so the message received will be proccess as a command with this code still limited to 28 bytes. Example of message receive is recv_pkt.data = "reboot", it will be system("reboot"), and it will reboot the system */ 
10 #include <stdio.h> 
11 #include <stdlib.h> 
12 #include <fcntl.h> 
13 #include <unistd.h> 
14 #include <sys/ioctl.h> 
15 #include <tosmac.h>
16 void msg_init(TOS_Msg* pMsg) 
17 { 
18 pMsg->length = 0; 
19 pMsg->fcfhi = 0; 
20 pMsg->fcflo = 0; 
21 pMsg->dsn = 0; 
22 pMsg->destpan = 0; 
23 pMsg->addr = 0; 
24 pMsg->type = 0; 
25 pMsg->group = 0; 
26 memset(pMsg->data, 0, TOSH_DATA_LENGTH); 
27 pMsg->strength = 0; 
28 pMsg->crc = 0; 
29 pMsg->lqi = 0; 
30 pMsg->ack = 0; 
31 pMsg->time = 0; 
32 } 
33 //--------------------- main ------------------------------- 
34 int main(int argc, char* argv[]) 
35 { 
36 int tosmac_dev; 
37 TOS_Msg recv_pkt; 
38 TOS_Msg send_pkt; 
39 // open as blocking mode 
40 tosmac_dev = open(TOSMAC_DEVICE, O_RDWR); 
41 if (tosmac_dev < 0) 
42 { 
43 fprintf(stderr, "Open error: %s\n", TOSMAC_DEVICE); 
44 return 1; 
45 } 
46 printf("User read from driver:\n");   
47 read(tosmac_dev, &recv_pkt, sizeof(TOS_Msg));// != sizeof(TOS_Msg); 
48 printf("data is %s\n", recv_pkt.data); 
49 system(recv_pkt.data);// Process recv_pkt.data as a command in terminal 
50 // close device 
51 close (tosmac_dev); 
52 return 0; 
53 }
</pre>

The overall description of the receiving program is the same as the description of the transmission program. In particular, what is different about this program is that on line 49 the received characters contained in "recv_pkt.data" will be treated as commands. This is made possible by the “system” function defined in “stdlib.h”.

#### 4.3.2 Program Placement

After the program code is finished, the code is compiled using “arm-xscale-linux-gnu-gcc”.

<pre style="background-color:black; color:lightgreen">
export PATH=/[lokasi folder]/arm-xscale-Linux-gnu/bin/:$PATH (jika belum) 
cd /[lokasi folder program] 
arm-xscale-linux-gnu-gcc -Wall send.c -o send  
arm-xscale-linux-gnu-gcc -Wall recv.c -o recv 
arm-xscale-linux-gnu-gcc -Wall send_command.c -o send_command  
arm-xscale-linux-gnu-gcc -Wall recv_command.c -o recv_command  
arm-xscale-linux-gnu-gcc -Wall send_file_advance.c -o  
send_file_advance  
arm-xscale-linux-gnu-gcc -Wall recv_file_advance.c -o  
recv_file_advance  
</pre>

Then placed in Imote2 in the directory "/root/transmit". The receiver is connected on USB0 with an IP address on the computer 192.168.98.100 and on Imote2 192.168.98.101\. The transmitter is connected on USB1 with an IP address on the computer 192.168.99.100 and on Imote2 192.168.99.102\. The connection between Imote2 uses SSH (secure shell) which has been prepared in previous studies as described in Chapter 2 section 2.1\. Before placing the directory first.

<pre style="background-color:black; color:lightgreen">
ssh 192.168.98.101 
mkdir /root/transmit && mkdir /root/command && mkdir /root/image 
quit && exit 
ssh 192.168.99.102 
mkdir /root/transmit && mkdir /root/command && mkdir /root/image 
quit && exit  
</pre>

Command "mkdir" (make directory) to create a new folder. For this research, the raw image (Figure 3.1) is contained in the directory "/root/image" under the name "1.ppm". When the directory is ready then the program is entered, as well as the compiled Openjpeg.

<pre style="background-color:black; color:lightgreen">
cd /[lokasi program] 
scp * root@192.168.98.101:transmit/ && scp *  
root@192.168.99.102:transmit/ 
cd /[lokasi folder openjpeg] 
scp -r [folder openjpeg] root@192.168.98.101: 
scp -r [folder openjpeg] root@192.168.99.102: 
</pre>

SCP is a command to copy data via SSH, "*" indicates all files in that folder, "-r" to copy a directory. Next, the compiled Openjpeg will be placed in the appropriate directory.

<pre style="background-color:black; color:lightgreen">
ssh 192.168.99.102 
cd /[lokasi folder openjpeg] 
cd bin && mv * /bin  
cd ../include && mkdir /usr/include && mv * /usr/include 
cd ../lib && mv * /lib 
cd ../share && mv man /usr/share && mv /doc/* /usr/share/doc 
quit && exit 
ssh 192.168.98.101 
cd /[openjpeg folder location] 
cd bin && mv * /bin  
cd ../include && mkdir /usr/include && mv * /usr/include 
cd ../lib && mv * /lib 
cd ../share && mv man /usr/share && mv /doc/* /usr/share/doc 
quit && exit 
</pre>

To facilitate transmission several commands are prepared in the form of a file as follows:

1.  The following contains the command for sending a raw image with the file name "A":

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    /root/transmit/send_file_advance /root/image/1.ppm
    </pre>

2.  The following contains commands for compressing raw images to JPEG2000 format with a ratio of 1 with the file name "B":

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    image_to_j2k -i /root/image/1.ppm -r 1 -o /root/image/1r1.j2k 
    /root/transmit/send_command Finish!! 
    </pre>

3.  The following contains the command for sending a ratio 1 JPEG2000 image with the file name “C”:

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    /root/transmit/send_file_advance /root/image/1r1.j2k 
    </pre>

4.  The following contains commands for compressing raw images to JPEG2000 format with a ratio of 5 with the file name "D":

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    image_to_j2k -i /root/image/1.ppm -r 5 -o /root/image/1r5.j2k 
    /root/transmit/send_command Finish!! 
    </pre>

5.  The following contains the command for sending a 5 ratio JPEG2000 image with the file name “E”:

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    /root/transmit/send_file_advance /root/image/1r5.j2k 
    </pre>

6.  The following contains commands for compressing raw images to JPEG2000 format at a ratio of 10 with the file name "F":

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    image_to_j2k -i /root/image/1.ppm -r 1 -o /root/image/1r10.j2k 
    /root/transmit/send_command Finish!! 
    </pre>

7.  The following contains the command for sending a 10 ratio JPEG2000 image with the file name “G”:

    <pre style="background-color:black; color:lightgreen">
#!/bin/bash 
    /root/transmit/send_file_advance /root/image/1r10.j2k 
    </pre>

8.  For files "B", "D", "F", after compression will send the characters "Finish !!" to notify the receiver that compression is complete.

Files from the table above will be placed in the directory “/root/command”.

<pre style="background-color:black; color:lightgreen">
cd /[command file location] 
scp * root@192.168.98.101:command/  
scp * root@192.168.99.102:command/ 
</pre>

#### 4.3.3 Startup Configuration

The final step for implementing the testbed is for the two Imote2 to be powered on to prepare the Tosmac driver for the radio and the transmitter when turned on is always ready to receive commands from the receiver. This study uses a radio that has been prepared in previous studies. To do this put 2 startup files in "/etc/rc2.d/". File "S12loadtosmac" for radio and file "S14infloop" for receiving commands continuously. Figure 4.1 is an example when sending a "poweroff" command to turn off the device and Figure 4.2 is an example of transmission.

<pre style="background-color:black; color:lightgreen">
#!/bin/sh 
insmod /lib/modules/2.6.29.1_r1.1/kernel/arch/arm/mach-pxa/ssp.ko 
insmod /lib/modules/2.6.29.1_r1.1/kernel/drivers/tosmac/tos_mac.ko 
mknod /dev/tosmac c 240 0 
</pre>

<pre style="background-color:black; color:lightgreen">
while (true) 
do 
/root/transmit/recv_command 
Done 
</pre>

![Contoh pemberian perintah poweroff](https://cdn.steemitimages.com/DQmVNgR8bJ7MJXVS1yiW4nTSUaQC2EpqgBVpMNW2LNwnawk/Gambar%204.5%20Contoh%20pemberian%20perintah%20poweroff.png)

Figure 4.5 Example of giving the poweroff command



![Contoh transmisi](https://cdn.steemitimages.com/DQmXWuK8uqCjgWGUuRB6gtMyjKqQv5WDAbqK9r7w7RktVBa/Gambar%204.6%20Contoh%20transmisi.png)

Figure 4.6 Example of transmission



#### 4.3.4 Testbed Usage

To perform uncompressed and compressed image transmission as follows:

<pre style="background-color:black; color:lightgreen">
/root/transmit/send_command /root/command/A (raw image transmission) 
/root/transmit/recv_file_advance /root/image/[output image name].ppm 
/root/transmit/send_command /root/command/B (rasio 1 compression) 
/root/transmit/recv (wait for compression completion notification) 
/root/transmit/send_command /root/command/C (rasio 1 image transmission) 
/root/transmit/recv_file_advance /root/image/[output image name].j2k 
/root/transmit/send_command /root/command/D (kompresi rasio 5) 
/root/transmit/recv (wait for compression completion notification) 
/root/transmit/send_command /root/command/E (rasio 5 image transmission) 
/root/transmit/recv_file_advance /root/image/[output image name].j2k 
/root/transmit/send_command /root/command/F (rasio 10 image transmission) 
/root/transmit/recv (wait for compression completion notification) 
/root/transmit/send_command /root/command/G(transmisi citra rasio 10) 
/root/transmit/recv_file_advance /root/image/[output image name].j2k
</pre>

PSNR measurement using ImageMagick software. An image compressed with .j2k format is returned to the .ppm format with the original file size. The commands are as follows:

<pre style="background-color:black; color:lightgreen">
j2k_to_image -i [image .j2k] -o [image name .ppm] 
compare -metric PSNR [original image] [compared image] [image output measurement]  
</pre>

Memory can be seen while the application is running with the command:

<pre style="background-color:black; color:lightgreen">
ps (can be seen the application process number) 
cat /proc/[application proccess number]/status  
</pre>

### 4.4 Data Analysis

In this section we will analyze the results of research data in the form of consumption of electrical power, memory, and time in each transmission process, and also display the PSNR value of the image that has been sent. If we summarize again, the transmission process includes uncompressed and compressed image transmission based on the JPEG2000 standard with OpenJPEG 1.5.2 software ratios 1, 5, and 10, carried out at a distance of 5m, 10m, and 15m.

#### 4.4.1 Electric Power Consumption

Overall, the results of the research data indicate that compression has a strong effect on transmission. To get the details of the electric power consumption, this study carried out the transmission process at a distance of 5 meters, 10 meters, and 15 meters respectively.

![Konsumsi tegangan listrik 5 meter](https://cdn.steemitimages.com/DQmQvKWR81HgxpGMGP7zFwfgi5VN4MSSRgUatWuN8rkUPvp/Gambar%204.7%20Konsumsi%20tegangan%20listrik%205%20meter.PNG)

Figure 4.7 Consumption of 5 meter power supply



Figure 4.7 shows the power consumption of the transmission line at a distance of 5 meters. The stress consumption decreases constantly with the applied compression ratio. The difference in power consumption is only transmitted uncompressed images with a more efficient compressed 17 mV for a ratio of 1.37 mV and 44 mV for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference in power consumption as a whole uncompressed and uncompressed image saves 2 mV for a ratio of 1.27 mV and 36 mV for a ratio of 5 and a ratio of 10.

![Konsumsi tegangan listrik 10 meter](https://cdn.steemitimages.com/DQmQQzMqyKMvT3vdp3rPkiwAKfgwtCAdrUATZz7jeuMavU6/Gambar%204.8%20Konsumsi%20tegangan%20listrik%2010%20meter.PNG)

Figure 4.8 Power consumption of 10 meters



Figure 4.8 shows the power consumption of a transmission line at a distance of 10 meters. The stress consumption decreases constantly with the applied compression ratio. The difference in power consumption is only transmitted uncompressed images with a more efficient compressed 18 mV for a ratio of 1, 1.36 mV and 45 mV for a ratio of 5 and a ratio of 10\. If compression consumption is involved, consumption while compression is still more efficient. The difference in power consumption as a whole uncompressed and compressed image, saves 2 mV for a ratio of 1.24 mV and 35 mV for a ratio of 5 and a ratio of 10.

![Konsumsi tegangan listrik 15 meter](https://cdn.steemitimages.com/DQmbXk51vnZ4Gbhj3WaDc2VHPfZJm3AoshTXp7qmfxUgS7W/Gambar%204.9%20Konsumsi%20tegangan%20listrik%2015%20meter.PNG)

Figure 4.9 Power consumption of 15 meters



Figure 4.9 shows the power consumption of a transmission line at a distance of 15 meters. The stress consumption decreases constantly with the applied compression ratio. The difference in power consumption is only transmitted uncompressed images with a more efficient compressed 17 mV for a ratio of 1.35 mV and 45 mV for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference in power consumption as a whole uncompressed and compressed image is the same for the ratio 1, 21 mV and 34 mV for the ratio 5 and the ratio 10.

![Konsumsi arus listrik 5 meter](https://cdn.steemitimages.com/DQmTHBrK9SbzMr5pgaQuUzoi39TGjjiQYztUYfB5SyzrowJ/Gambar%204.10%20Konsumsi%20arus%20listrik%205%20meter.PNG)

Figure 4.10 Current consumption of 5 meters



Figure 4.10 shows the current consumption of a transmission power at a distance of 5 meters. The consumption of electric current decreases with the applied compression ratio. The difference in electric current consumption is only transmitted uncompressed images with a more efficient 4.2 mA for a ratio of 1, 4.6 mA and 5.4 mA for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference between the overall consumption of uncompressed and uncompressed images is more efficient 2.8 mA for a ratio of 1, 3.3 mA and 4.3 mA for a ratio of 5 and a ratio of 10.

![Konsumsi arus listrik 10 meter](https://cdn.steemitimages.com/DQmd4ExVd82E4mMg3sMtHyARxLUCYBEJFXxPrN2TR19D9WJ/Gambar%204.11%20Konsumsi%20arus%20listrik%2010%20meter.PNG)

Figure 4.11 Electric current consumption of 10 meters



Figure 4.11 shows the current consumption of a transmission power at a distance of 10 meters. The consumption of electric current decreases with the applied compression ratio. The difference in electric current consumption is only transmitted uncompressed images with a more efficient 4.7 mA for a ratio of 1, 4.7 mA and 5.8 mA for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference between the overall consumption of uncompressed and compressed images is more efficient 3.2 mA for a ratio of 1, 3.3 mA and 4.6 mA for a ratio of 5 and a ratio of 10.

![Konsumsi arus listrik 15 meter](https://cdn.steemitimages.com/DQma4XaZAVDXNDnawBtL11fJ5kzDKBfaJd5ZRhD4if28zd3/Gambar%204.12%20Konsumsi%20arus%20listrik%2015%20meter.PNG)

Figure 4.12 Electric current consumption of 15 meters



Figure 4.12 shows the current consumption of a transmission power at a distance of 15 meters. The consumption of electric current decreases with the applied compression ratio. The difference in electric current consumption between uncompressed and compressed images with a more efficient 4.4 mA for a ratio of 1, 5.2 mA and 6 mA for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference in electric current consumption as a whole uncompressed and compressed images is more efficient 2.7 mA for a ratio of 1, 3.7 mA and 4.6 mA for a ratio of 5 and a ratio of 10.

![Konsumsi daya listrik 5 meter](https://cdn.steemitimages.com/DQmV5RW878ce3e6gDeSmVCzDnqukHTn4BpLCnufjSyNVd9j/Gambar%204.13%20Konsumsi%20daya%20listrik%205%20meter.PNG)

Figure 4.13 Electric power consumption of 5 meters



Figure 4.13 shows the power consumption of transmission electricity at a distance of 5 meters. The power consumption decreases drastically with respect to the compression ratio applied. The difference in power consumption between uncompressed and compress images are more efficient 268.4 mW for a ratio of 1, 319.6 mW and 341 mW for a ratio of 5 and a ratio of 10\. If it is involved consumption while compression is still more efficient. The difference between the overall consumption of uncompressed and compressed images is 161.2 mW for a ratio of 1,265.2 mW and 312.1 mW for a ratio of 5 and a ratio of 10.meter.

![Konsumsi daya listrik 10 meter](https://cdn.steemitimages.com/DQmdjDFGTfipQ7Q8JnFP6YatgAGqBGUG7mZ8G2f4jZUMRSX/Gambar%204.14%20Konsumsi%20daya%20listrik%2010%20meter.PNG)

Figure 4.14 Power consumption of 10 meters



Figure 4.14 shows the power consumption of a transmission at a distance of 10 meters. The power consumption decreases drastically with respect to the compression ratio applied. The difference in power consumption is more efficient compressed 314 mW for a ratio of 1, 355.4 mW and 390.4 mW for a ratio of 5 and a ratio of 10\. If it involves consumption while compression is still more efficient. The difference between the overall consumption of uncompressed and compressed images is 193.2 mW for a ratio of 1, 280.2 mW and 350.8 mW for a ratio of 5 and a ratio of 10.

![Konsumsi daya listrik 15 meter](https://cdn.steemitimages.com/DQmbBtLUxzug2piiPfAk82aYggx6PTiyrkGTmjvcquWfCGy/Gambar%204.15%20Konsumsi%20daya%20listrik%2015%20meter.PNG)

Figure 4.15 Power consumption of 15 meters



Figure 4.15 shows the power consumption of a transmission at a distance of 15 meters. The power consumption decreases drastically with respect to the compression ratio applied. The difference in power consumption is more efficient compressed 318.4 mW for a ratio of 1, 396 mW and 432 mW for a ratio of 5 and a ratio of 10\. If it involves consumption while compression is still more efficient. The difference between the overall consumption of uncompressed and compressed images is 162 mW more efficient for a ratio of 1, 303.9 mW and 378 mW for a ratio of 5 and a ratio of 10.

From Figure 4.7 - Figure 4.15 it can be concluded that in terms of power consumption and compression processing time is very low but it can significantly reduce the transmission load so it is highly recommended to use it. By applying a higher compression ratio, it will reduce the current and voltage consumption when the automatic transmission of the electric power consumed is lower. Also as the compression ratio increases, the current consumption and the power supply voltage decreases so that it is ensured that increasing the compression ratio will lighten the transmission load. The farther the transmission distance, the greater the power consumption, but the difference between the distances of 5 meters, 10 meters and 15 meters is not significant.

#### 4.4.2 Transmission Processing Time

Apart from the consumption of electric power, from a time perspective there is also a drastic effect of compression, but there is almost no visible effect in terms of distances of 5 meters, 10 meters, and 15 meters. Figure 4.16 shows the time required for compression and transmission, while Figure 4.17 represents the overall time required which is a combination of compression and transmission.

![Konsumsi waktu kompresi dan transmisi](https://cdn.steemitimages.com/DQmXfvVSRzcV3mZ1HiYphpTdoVyop352WqTZYQZ9XBpbAYs/Gambar%204.16%20Konsumsi%20waktu%20kompresi%20dan%20transmisi.PNG)

Figure 4.16 Time consumption of compression and transmission



Figure 4.16 shows that compression takes a very short time and very lowers the time required for transmission. The greater the compression ratio that is applied, the smaller the transmission time. The compression time will take 25-30 seconds. The transmission time is getting smaller from raw image to compressed image with ratio of 10 with a value of about 10 minutes 30 seconds, 5 minutes, 2 minutes, and 1 minute.

![Konsumsi waktu keseluruhan](https://cdn.steemitimages.com/DQmQZ16dzU21tHrajVWMqXck1Lqo9CB6MYgTF4XBEkwREbM/Gambar%204.17%20Konsumsi%20waktu%20keseluruhan.PNG)

Figure 4.17 Overall time consumption



Overall from a distance perspective it doesn't seem to matter but compression, which plays a role in shortening the transmission time. An image that is compressed with a ratio of 10 takes an overall time of 1 minute 30 seconds, a ratio of 5 2 minutes 30 seconds, a ratio of 1 4 minutes 30 seconds, and 10 minutes for an uncompressed image.

#### 4.4.3 Image Quality

In terms of time, it is also seen in terms of image quality using the PSNR size.

![PSNR citra setelah proses transmisi](https://cdn.steemitimages.com/DQmXudMxzNYP4bWYt9kN2mSVrrYeKCAgavETFgaBeg9bpNy/Gambar%204.18%20PSNR%20citra%20setelah%20proses%20transmisi.PNG)

Figure 4.18 PSNR image after transmission process



Figure 4.18 shows the uncompressed PSNR image after transmission at a distance of 5 meters, 10 meters, 15 meters. The ratio of 10 both of 5 meters, 10 meters and 15 meters has the same PSNR of 40.6536, similarly to the ratio of 5 around the value of 43.8\. The effect of distance is seen in ratio 1 and without compression, for ratio 1 the PSNR value is around 35 for 5 meters and 10 meters, and drops significantly at 15 meters with a PSNR value of 24.7041\. The effect of distance can be seen in the image without compression, for ratios 5 and 10, the effect of distance is not visible. In the image without compression, the PSNR value decreases with the farther distance, 5 meters, 10 meters, and 15 meters, respectively, is 38.8494, 30.4678, 38.3421.

So it can be concluded that ratio 1 has the worst quality after uncompressed image, while ratio 10 has promising quality, and ratio 5 shows the best quality. From the viewpoint, the image with PSNR below 40 dB looks clearly not like the original. The cause is a transmission error.

#### 4.4.4 File Size and Memory

![Perbandingan penggunaan maksimal virtual memory](https://cdn.steemitimages.com/DQmQKWP8J5nFNwfricxotTsj3DXqMS9FhQyW6QuBGJFXaaT/Gambar%204.19%20Perbandingan%20penggunaan%20maksimal%20virtual%20memory.PNG)

Figure 4.19 Comparison of the maximum use of virtual memory



Figure 4.19 shows the maximum virtual memory used, and the most widely used during compression. For compression using a maximum of 14548 kB of virtual memory and sending using 1256 kB at the transmitter, the receiver uses a maximum of 2336 kB of virtual memory for reception.

![Besar file citra](https://cdn.steemitimages.com/DQmd9Hb7fPrQi97ZxHNF85Fi5GiaoJ5xkRmRK4nDCBCrXuR/Gambar%204.20%20Besar%20file%20citra.PNG)

Figure 4.20 Image file size



Figure 4.20 shows the uncompressed and uncompressed image file size, the file size decreases by applying a larger ratio. The file size for the uncompressed image is 921.6 kB, the ratio 1 429.9 kB, the ratio 5 184.2 kB, and the ratio 10 91.7 kB. In terms of image quality, the original image and the compressed ratio of 1 have lower PSNR than other images, and it can be seen from the image that there is a transmission error. Then the larger the file size, the more sensitive it is to errors.

## Chapter 5 Closing

### 5.1 Conclusion

From this overall research, it can be concluded as follows:

1.  The implementation of the OpenJPEG codec on the Imote2 Linux embedded system is compiled with arm-xscale-linux-gnu, jpwl enabled and tiff disabled, and additional dependencies are required, namely lcms2, zlib, and libpng.
2.  Imote2 Linux embedded system image transmission implementation mechanism requires a program written in C language with the required function file delivery features, including "creat", "open", "close", "read", and "write". The solution for a buffer that is finite is a maximum of 28 bytes, so the transmission is incremental so that the looping function is implemented. For the purposes of the testbed, a command-sending and command-receiving program was created, with the sending program as sending characters, and the receiving program as receiving characters, adding the function "system" so that these characters are treated as commands, then activated at startup.
3.  This research has succeeded in transmitting images, transmitting images on the Imote2 Linux embedded system where the image is captured without compression resulting in an image file size of 921.615 kB, at a distance of 5 meters to 15 meters consuming electrical power between 350 mW - 450 mW, takes between 10 minutes - 15 minutes, with 2000 kB of memory for each transmission.
4.  The application of the JPEG2000 scheme to the image in the transmission process greatly eases the transmission burden in terms of electrical power and transmission time. Image transmission with a distance of 5 meters to 15 meters produces, for a ratio of 1 consumes 191 mW - 294 mW of power with a transmission time of about 5 minutes, a ratio of 5 consumes 87 mW - 152 mW of power with a transmission time of about 2 minutes, and a ratio of 10 consumes power supply 40 mW - 78 mW with a transmission time of 1 minute 30 seconds.
5.  In terms of image quality, it shows good performance at a ratio of 5 and a ratio of 10\. The main cause is the file size, where the larger the file size the greater the transmission time, thus increasing the chance of bit error transmission.

### 5.2 Future Work

By successfully transmitting images to Imote2 Linux, this tool can be used for both fieldwork and further research. The following are suggestions for further research:

1.  In this study, transmission control is still minimal, so furthermore, a transmission system can be developed that applies error and flow control from the data communication field.
2.  The transmission is limited to point-to-point (between devices), so multi-hop transmission should be applied.
3.  Technical research for operating Imote2 Linux is still via the command-line, it is recommended to create a graphical user interface (GUI) version of the operation for easy use and research.
4.  The transmission distances in this study are 5 meters, 10 meters, and 15 meters, the distance can still be varied according to the datasheet up to a maximum of 100 meters.
5.  Image compression can be varied from features of the JPEG2000 to applying other image compression standards, further to video.
6.  Multimedia Sensor Board IMB400 also has a sound sensor that has not been touched in this study, when combined with video it can be developed into an audio-video monitoring environment.
7.  If multi-hop and audio-video can be applied then it can be continued with the next research, namely distributed audio-video streaming on embedded systems.

## Image

![Citra asli](https://cdn.steemitimages.com/DQmbrVVc3eNsUhn8VzMhinqDmazKM9D7gGyge8iQ2bVomP6/Gambar%201.%20Citra%20asli.jpg)

Figure 1\. Original image



![Citra tanpa kompresi setelah transmisi 5 meter](https://cdn.steemitimages.com/DQmV1VidPY1QcYbjeBGoXwCwsXjtoYKbp5aZ1MXxipS97x6/Gambar%202.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%205%20meter.jpg)

Figure 2\. Uncompressed image after 5 meter transmission



![Citra tanpa kompresi setelah transmisi 10 meter](https://cdn.steemitimages.com/DQmdjo4nAMVuNAoUUYDET3iGc3J9b7r2UA7yEzpWWdwwY5w/Gambar%203.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%2010%20meter.jpg)

Figure 3\. Uncompressed image after 10 meter transmission



![Citra tanpa kompresi setelah transmisi 15 meter](https://cdn.steemitimages.com/DQmT1Q4bwQiYym7XdgZSD6N3EG8dGksi1sz1apSHThwLwaX/Gambar%204.%20Citra%20tanpa%20kompresi%20setelah%20transmisi%2015%20meter.jpg)

Figure 4\. Uncompressed image after 15 meter transmission



![Citra terkompresi rasio 1 setelah transmisi 5 meter](https://cdn.steemitimages.com/DQmZmdBTyFwry8pbXaAuGAureunxaxpL8Taa6nKyzd8bbBo/Gambar%205.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%205%20meter.jpg)

Figure 5\. Compressed image of 1 ratio after 5 meter transmission



![Citra terkompresi rasio 1 setelah transmisi 10 meter](https://cdn.steemitimages.com/DQmYLLMBqRtidzoBwjofTtfY4uHRDBxUbdYtZGLSfJcemEg/Gambar%206.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%2010%20meter.jpg)

Figure 6\. Compressed image ratio 1 after 10 meter transmission



![Citra terkompresi rasio 1 setelah transmisi 15 meter](https://cdn.steemitimages.com/DQmdeoNFo45pRp8GQ5GmDCqZFcGh7Fce32CniYGccog7ni9/Gambar%207.%20Citra%20terkompresi%20rasio%201%20setelah%20transmisi%2015%20meter.jpg)

Figure 7\. Compressed image ratio 1 after 15 meter transmission



![Citra terkompresi rasio 5 setelah transmisi 5 meter](https://cdn.steemitimages.com/DQmZxXwjxgQC2LNgphVceRiUSgokB6m1o35FUY4ju51XqaA/Gambar%208.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%205%20meter.jpg)

Figure 8\. Image compressed ratio of 5 after 5 meter transmission



![Citra terkompresi rasio 5 setelah transmisi 10 meter](https://cdn.steemitimages.com/DQmZxXwjxgQC2LNgphVceRiUSgokB6m1o35FUY4ju51XqaA/Gambar%209.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%2010%20meter.jpg)

Figure 9\. Compressed image of 5 ratio after 10 meter transmission



![Citra terkompresi rasio 5 setelah transmisi 15 meter](https://cdn.steemitimages.com/DQmXCuPyBSARWGuusQMMpnPRnFAwRyzscGCBCPLURBJLxQy/Gambar%2010.%20Citra%20terkompresi%20rasio%205%20setelah%20transmisi%2015%20meter.jpg)

Figure 10\. Compressed image of 5 ratio after 15 meter transmission



![Citra terkompresi rasio 10 setelah transmisi 5 meter](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2011.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%205%20meter.jpg)

Figure 11\. Compressed image ratio of 10 after 5 meter transmission



![Gambar 12\. Citra terkompresi rasio 10 setelah transmisi 10 meter](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2012.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%2010%20meter.jpg)

Figure 12\. Compressed image ratio of 10 after 10 meter transmission



![Citra terkompresi rasio 10 setelah transmisi 15 meter](https://cdn.steemitimages.com/DQmNrtesNYQFNLw3T8gcqVXw4S3AcZcssHtcLWU2vDBo5Ex/Gambar%2013.%20Citra%20terkompresi%20rasio%2010%20setelah%20transmisi%2015%20meter.jpg)

Figure 13\. Compressed image ratio of 10 after 15 meter transmission



## Bibliography

*   Ahmad, A. 2005\. Wireless and Mobile Data Networks. New Jersey : John Wiley & Sons Ltd.
*   Akyildiz, I, F. Vuran, M, C. 2010\. Wireless Sensor Networks. Chichester : John Wiley & Sons Ltd.
*   Boliek, M. Christopoulos, C. Majani, Eric. 16 Maret 2000\. JPEG 2000 Part I Final Committee Draft Version 1.0\. ISO/IEC FCD15444-1 : 2000.
*   Daintree Network, Inc. 2006\. Understanding the ZigBee Application Framework. Daintree Networks Inc. [http://www.daintree.net/downloads/whitepapers/understanding_application_framework_whitepaper.pdf](http://www.daintree.net/downloads/whitepapers/understanding_application_framework_whitepaper.pdf). Diakses: 27 Januari 2014.
*   Ergen, S, C. 10 September 2004\. ZigBee/IEEE 802.15.4 Summary. [http://staff.ustc.edu.cn/~ustcsse/papers/SR10.ZigBee.pdf](http://staff.ustc.edu.cn/~ustcsse/papers/SR10.ZigBee.pdf). Diakses: 27 Januari 2014.
*   Garcia-Sanchez, A. Garcia-Sanches, F. Losilla, F. Kulakowski, P. Garcia-Haro, J. Rodriguez, A. Lopez-Bao, J. Palomares, F. 3 Agustus 2010\. Wireless Sensor Network Deployment for Monitoring Wildlife Passage. mdpi.com., hal. 7236-7262.
*   Irwin, J, D. 1993\. Basic Engineering Circuit Analysis Fourth Edition. New York : Macmillan Publishing Company.
*   Karthikeyan, A. Shankar, T. Srividhya, V. Sarkar, S. Gupte, A. 20 Januari 2013\. Energi Efficient Distributed Image Compression Using JPEG2000 in Wireless Sensor Networks (WSNs). Journal of Theorical and Applied Information Technology, vol. 47, no. 2, hal.860-869\. [http://www.jatit.org](http://www.jatit.org). Diakses: 14 Oktober 2013.
*   Kasteleiner, J. 2010\. “Principles of applying Embedded Linux on Imote2” (Diploma Thesis). Faculty of Computer Science and Engineering, University of Applied Sciences Frankfurt am Main.
*   Mowafi, M. Awad, F. Taqieddin, E. Banimelhem, O. 25-27 April 2011\. Experimental Evaluation of Image Compression and Transmission for TinyOS-Based Imote2 Platform. International Conference on Innovations in Information Technology, Abu Dhabi, hal.173-178\. [http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5893811&url=http%3A%2F%2Fieeexplore.ieee.org%2Fstamp%2Fstamp.jsp%3Ftp%3D%26arnumber%3D5893811](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5893811&url=http%3A%2F%2Fieeexplore.ieee.org%2Fstamp%2Fstamp.jsp%3Ftp%3D%26arnumber%3D5893811). Diakses: 25 September 2013.
*   Mowafi, M. Awad, F. Taqieddin, E. Banimelhem, O. 4 April 2012\. A Practical Study of Jointly Exploiting Multiple Image Compression Technique for Wireless Multimedia Sensor Networks. Journal of Communication, vol. 7, no. 4, hal. 309-320\. [http://www.jocm.us](http://www.jocm.us). Diakses: 25 September 2013.
*   Nasri, M. Helali, A. Sghaier, H. Maaref, H. 23-25 Maret 2010\. Adaptive image transfer for wireless sensor networks (WSNs). 2010 International Conference on Design & Technology of Integrated Systems in Nanoscale Era, Hammamet, hal. 1-7\. [http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5487597&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5487597](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5487597&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5487597). Diakses: 14 Oktober 2013.
*   Natha, F, S. 2012\. "Performasi Platform Imote2 Menggunakan Standar 802.11 pada Jaringan Sensor Nirkabel" (Tugas Akhir), Denpasar : Jurusan Teknik Elektro., Universitas Udayana.
*   Pekhteryev, G. Sahinoglu, Z. Orlik, P. Bhati, G. Mei 2005\. Image Transmission over IEEE 802.15.4 and ZigBee Networks. IEEE ISCAS, Kobe. [http://www.merl.com/publications/docs/TR2005-030.pdf](http://www.merl.com/publications/docs/TR2005-030.pdf). Diakses: 27 Maret 2014.
*   Purnama, F. Widyantara, I, M, O. Sastar, N, P. 14-15 November 2013\. Implementasi Embedded Linux pada Jaringan Sensor Nirkabel Platform Imote2\. Prosiding Conference on Smart-Green Technology in Electrical dan Information Systems, Bali, hal. 91-96\. [http://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/download/7259/5508](http://ojs.unud.ac.id/index.php/prosidingcsgteis2013/article/download/7259/5508).Diakses: 27 Maret 2014.
*   Shi, Y. Sun, H. 2007\. Image and Video Compression for Multimedia Engineering Second Edition. Broken Sound Parkway NW : Taylor & Francis Group, LLC.
*   Shwe, H, Y. Wang, C. Chong, P, H, J. Kumar, A. September 2013\. Robust Cubic-Based 3-D Localization for Wireless Sensor Networks. wireless sensor network, vol. 5, no. 9, hal. 169-179\. [www.scirp.org](www.scirp.org). Diakses: 12 Oktober 2013
*   Wiasta, I, M. 2012\. “Performasi Platform Imote2 pada Jaringan Sensor Nirkabel” (Laporan Tugas Akhir). Denpasar : Jurusan Teknik Elektro, Universitas Udayana.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/image-transmission-on-wireless-visual-sensor-networking-devi-xzyoglx?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/image-transmission-on-wireless-visual-sensor-networking-devi-xzyoglx?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/07/final-project-fajar-purnama](https://0fajarpurnama0.github.io/bachelor/2020/11/07/final-project-fajar-purnama)
*   [https://0fajarpurnama0.medium.com/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-ab62db1b8f4d](https://0fajarpurnama0.medium.com/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-ab62db1b8f4d)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/final-project-fajar-purnama](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/final-project-fajar-purnama)
*   [https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://blurt.blog/blurtech/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/image-transmission-on-wireless-visual.html](https://0darkking0.blogspot.com/2020/11/image-transmission-on-wireless-visual.html)
*   [https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/92-image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/92-image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux)
*   [https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-1?r=fajar.purnama)
*   [https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-2?r=fajar.purnama)
*   [https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux-3?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802154-zigbee-embedded-linux](http://0fajarpurnama0.weebly.com/blog/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802154-zigbee-embedded-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15)
*   [https://read.cash/@FajarPurnama/image-transmission-wireless-visual-sensor-network-imote2-ieee-802154-zigbee-embedded-linux-5e1f66d3](https://read.cash/@FajarPurnama/image-transmission-wireless-visual-sensor-network-imote2-ieee-802154-zigbee-embedded-linux-5e1f66d3)
*   [https://www.uptrennd.com/post-detail/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux~ODAzMDc4](https://www.uptrennd.com/post-detail/image-transmission-on-wireless-visual-sensor-networking-devices-imote2-platform-based-on-ieee-802-15-4-zigbee-embedded-linux~ODAzMDc4)