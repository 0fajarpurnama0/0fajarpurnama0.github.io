---
layout: post
title: The Effect of FPS, Resolution and Bitrate Settings on the Resulting Throughput in the Adobe Flash Media Live Encoder Software
category: bachelor
tags: [Adobe Flash Media Live Encoder, fps, bitrate, throughput, streaming, assignment, research writing]
featuredimage: https://images.blurt.buzz/DQmXAdwEm46Tpgaar6JeP4q6mPqCCbmi43ZRKDz3RFhJRxi/Gambar%203.1%20Desain%20penelitian.PNG
description: Research writing assignment regarding abstract, introduction, literature review, method, discussion, conclusion, and bibliography.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/09/fps-bitrate-throughput-adobe-flash-media-live-encoder-assignment
---
## Note

This is an English translated of my assignment from undergraduate course regarding research writing where the point is taught that research writing consists mostly of Abstracts, Introduction, Literature Reviews, Research Methods, Discussion, Conclusion, and Bibliography. Even though this course teaches in more detail about the contents of each chapter, at that time I was not able to fully reflect the details in this assignment.

## Abstract

Logically, the resolution and fps settings in the streaming video should have an effect on the amount of throughput. But in the Adobe Flash Media Live Encoder software there is a bitrate setting, this is what affects the amount of throughput. Resolution and fps (frames per second) seem to have an effect on bitrate. This research is proof that the statement is true. In the future, besides knowing the throughput generated from various settings in the Adobe Flash Media Live Encoder software, the appropriate settings will be obtained.

This study uses two computers connected to the same network. The first computer does video steaming over the second computer, which measures the throughput produced by the first computer. The software used to measure throughput is Wireshark. Throughput measurements are carried out at various resolutions, fps (frames per second), and bitrate. Then the average throughput of the various resolutions, fps, and bitrates will be compared.

From the research results, it is proven that the average throughput produced is in accordance with the bitrate setting. There was no visible impact from the resolution and fps settings.

## 1 Introduction

### 1.1 Background

Video quality such as image pixel size and fps (frames per second) affects throughput. The bigger the image pixel, the bigger the data frame sent. Likewise with fps. A web cam has been installed in the Computer Lab, Department of Electrical Engineering, Udayana University. Installation of a web cam to show lab activities via the web. In fact, the resulting throughput with various settings for fps (frames per second), resolution and bitrate is not known. In this study, the resulting throughput will be observed with various settings for fps (frames per second), resolution, and bitrate using the Wireshark software.

### 1.2 Problem

How is the resulting throughput with a variety of settings for fps (frames per second), resolution, and bitrate?

### 1.3 Research Objective

Knowing the effect of FPS (frames per second), resolution and bitrate settings on the resulting throughput of the Adobe Flash Media Live Encoder software.

### 1.4 Research Benefit

1.  Find out the network throughput with various settings.
2.  Can choose the settings according to the network quality provided.
3.  Can optimize the use of video streaming in the computer lab, Electrical Engineering, Udayana University.

### 1.5 Scope and Limitation of the Problem

1.  Using adobe flash media live encoder software on Windows 7.
2.  Analyze throughput using wireshark on Linux Backtrack 5 R3.
3.  Only measures throughput.
4.  Compression using the H.264 standard.
5.  Testing in the computer lab, Electrical Engineering, Udayana University, on Tuesday, 12:30 WITA - 16:00 WITA, 18 December 2012, and Thursday, 13:00 WITA - 14:00 WITA, 20 December 2012.
6.  The media server is 103.29.196.233/live/elektro (streaming.unud.ac.id/live).

## 2 Literature Review

### 2.1 Throughput

Throughput is the amount of data sent divided by the time required for large data to arrive at its destination in 1-way communication. Throughput is measured in bits / second or bytes / second (Gómez, 2005).

Applications such as VOIP (voice over IP) and video are sensitive to delay and jitter. Delay is the time it takes for a packet to be sent from origin to destination. Jitter is a variation of delay. Applications like this require a small delay (approx. 150 milliseconds). Therefore throughput must be guaranteed from origin to destination (Farrel, 2009).

### 2.2 RTP (Real-Time Transport Protocol)

RTP is a transport protocol for real-time applications. Real-time applications include audio and video conferencing, live video distribution, shared workspaces, remote medical diagnosis, telephony, command and control systems, distributed interactive simulations, games, and real-time monitoring.

With the development of high speed LAN (Local Area Network) and WAN (Wide Area Network) it is possible for real-time based applications to run on IP (Internet Protocol) based networks. The thing that is generally considered in real-time based applications is timing. Where the timing of receiving the package must match the timing of the package delivery. Therefore delay and throughput are common measures of quality (Stallings, 1998).


![Gambar 2.1 RTP header.jpg](https://images.blurt.buzz/DQmapBorxkQWHTtya8Nqh8Q8BjwhiR6q5a4hhoMc6iHJDSe/Gambar%202.1%20RTP%20header.jpg)


Figure 2.1 RTP header (Stallings, 1998)


![Gambar 2.2 Traffic in Realtime protocol.jpg](https://images.blurt.buzz/DQmWt9TLyBJL9v6EctXzsPHSgx6uCYac4nFtEgVEav2EtHZ/Gambar%202.2%20Traffic%20in%20Realtime%20protocol.jpg)

Figure 2.2 Traffic in Realtime protocol (Stallings, 1998)



### 2.3 Adobe Flash Media Live Encoder

Is a media encoder software that can capture audio and video as well as stream video and audio to Adobe Media Server or Flash Video Streaming Service (FVSS) in real-time. This software is able to broadcast live activities such as sports, concerts and others. (Adobe, 2013).

### 2.3 Wireshark

Wireshark is a world-renowned network protocol analyzer software. Can also capture traffic on a computer network. This software is the de facto (and often said de jure) standard from various industries and educational institutions. Wireshark was developed by many networking experts around the world and is an ongoing project from 1998 (Combs, 2013).

## 3 Research Method

### 3.1 Tools Used

Below is a list of tools to use:

<table border="">Table 3.1 Tools used

<thead>

<tr>

<th>NO</th>

<th>Tool</th>

<th>Specification</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>Laptop ACER</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Mobile Intel® Graphics Media Accelerator 4500MHD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>1GB DDR2</td>

</tr>

<tr>

<td></td>

<td></td>

<td>128 WXGA Acer CrystalBriteTM LCD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>250GB HDD</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Atheros Communications Inc. AR928X Wireless Network Adapter</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Operating System Linux Backtrack 5 R3</td>

</tr>

<tr>

<td>2</td>

<td>PC</td>

<td>Intel® Pentium® core-duo processor</td>

</tr>

<tr>

<td></td>

<td></td>

<td>1GB DDR2</td>

</tr>

<tr>

<td></td>

<td></td>

<td>256 VGA</td>

</tr>

<tr>

<td></td>

<td></td>

<td>AWUS036NHA 802.11b/g/n Long-Range USB Adapter</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Alcor Micro, Corp. USB 2.0 PC Camera</td>

</tr>

<tr>

<td></td>

<td></td>

<td>Operating System Windows 7 Ultimate</td>

</tr>

<tr>

<td>3</td>

<td>Software</td>

<td>Adobe Flash Media Live Encoder 3.2</td>

</tr>

</tbody>

</table>

### 3.2 Steps

First, the tool is designed as follows:

![Gambar 3.1 Desain penelitian.PNG](https://images.blurt.buzz/DQmXAdwEm46Tpgaar6JeP4q6mPqCCbmi43ZRKDz3RFhJRxi/Gambar%203.1%20Desain%20penelitian.PNG)


Figure 3.1 Research design



Second, start the packet capture with the Wireshark software on the laptop. The captured packet is on the wireless LAN.

![Gambar 3.2 Pemilihan interface wlan0 untuk paket yang ditangkap.png](https://images.blurt.buzz/DQmSdZUnDJw9oCs1jCH5vkSVbB7sBrWmGLSGW6yxypYsJ9u/Gambar%203.2%20Pemilihan%20interface%20wlan0%20untuk%20paket%20yang%20ditangkap.png)


Figure 3.2 Selection of wlan0 interface for captured packets



Packet capture is filtered so that it only captures packets sent by streaming video, namely 192.168.0.2.

![Gambar 3.3 Memasukan perintah penyaringan ip.src == 192.168.0.2.png](https://images.blurt.buzz/DQmdd2xuNrNwq6erADfXE9q6tRd9XChh5ZEvDiyWGJVWi8U/Gambar%203.3%20Memasukan%20perintah%20penyaringan%20ip.src%20==%20192.168.0.2.png)

Figure 3.3 Entering the filter command ip.src == 192.168.0.2



To see the throughput, the statistics menu is selected then IO graph is selected.

![Gambar 3.4 Pemilihan IO Graph.png](https://images.blurt.buzz/DQmPBWTvdiZzYD4DDTWwnc4QKpTV3UT8Po1DGQpb6YKbBgg/Gambar%203.4%20Pemilihan%20IO%20Graph.png)

Figure 3.4 Selection of IO Graph



As with packet capture, it is filtered to see only bits passing from 192.168.0.2.

![Gambar 3.5 Grafik throughput dari 192.168.0.2.png](https://images.blurt.buzz/DQmXZEAmAZSzDiXxiQsg4MsxQX8RFvRWX8XsA7EPgbu4kS2/Gambar%203.5%20Grafik%20throughput%20dari%20192.168.0.2.png)

Figure 3.5 Graph of the throughput of 192.168.0.2



Third, start streaming the video with the Adobe Flash Media Live Encoder software with the settings adjusted to the problem statement.

![Gambar 3.6 Pengaturan streaming video pada Adobe Flash Media Live Encoder.png](https://images.blurt.buzz/DQmacJ2xARikHibwGabBRTC8pg2Wcd468RcqXWkUHT2pQfs/Gambar%203.6%20Pengaturan%20streaming%20video%20pada%20Adobe%20Flash%20Media%20Live%20Encoder.png)

Figure 3.6 Video streaming settings on the Adobe Flash Media Live Encoder



Fourth, after 2 minutes the streaming is stopped. Sixth, packet capture on Wireshark is stopped and the results are saved. Seventh, return to the second step with the third step of a different arrangement (proceeding from the problem formulation). If all settings have been tried then the data search is complete.

### 3.3 Data Analysis

By using the Wireshark software, throughput can be seen in graphical form. The horizontal axis shows the time in seconds while the vertical axis shows data in bits.

![Gambar 3.7 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 100Kbps.png](https://images.blurt.buzz/DQmcYPnzDbx1vn8YRSQJxpMpMgGqdxtSfh21tzPaeCzRUed/Gambar%203.7%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20100Kbps.png)

Figure 3.7 Throughput with 160x120 fps resolution setting 1 bitrate 100Kbps

![Gambar 3.8 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 350Kbps.png](https://images.blurt.buzz/DQme3MEmKq7JeZPaFb9qdUNxerhUbCeP1bNWWXhn8zP3Zuy/Gambar%203.8%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20350Kbps.png)

Figure 3.8 Throughput with 160x120 fps 1 bitrate 350Kbps resolution settings

![Gambar 3.9 Throughput dengan pengaturan resolusi 160x120 fps 1 bitrate 500Kbps.png](https://images.blurt.buzz/DQmWVSBPKhRdzbdam3n7yMT2YvTzUzZGGZpikzT3ijSH6C3/Gambar%203.9%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%201%20bitrate%20500Kbps.png)

Figure 3.9 Throughput with 160x120 fps 1 bitrate 500Kbps resolution settings

![Gambar 3.10 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 100Kbps.png](https://images.blurt.buzz/DQmYnZ17aiBJRWRTgrZ8NgMy6EEwDUmbRL8xmUVXCnNTyLN/Gambar%203.10%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20100Kbps.png)

Figure 3.10 Throughput with a resolution setting of 160x120 fps 5 bitrate 100Kbps

![Gambar 3.11 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 350Kbps.png](https://images.blurt.buzz/DQmYzid1XK1zAY7BHoazPqD8j8KvpJ4Qb7EkP7a7Qm1ABqn/Gambar%203.11%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20350Kbps.png)

Figure 3.11 Throughput with a resolution setting of 160x120 fps 5 bitrate 350Kbps

![Gambar 3.12 Throughput dengan pengaturan resolusi 160x120 fps 5 bitrate 500Kbps.png](https://images.blurt.buzz/DQmTMDvVo3zjm6AE21YHM65eBKTy3vrWtBbjtu2imKPWN2o/Gambar%203.12%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%205%20bitrate%20500Kbps.png)

Figure 3.12 Throughput with a resolution setting of 160x120 fps 5 bitrate 500Kbps

![Gambar 3.13 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 100Kbps.png](https://images.blurt.buzz/DQmPHBWt7XW27zQFfHrVyMozsp7XmpLKRG6uMFkU7ou32Ef/Gambar%203.13%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20100Kbps.png)

Figure 3.13 Throughput with a resolution setting of 160x120 fps 10 bitrate 100Kbps

![Gambar 3.14 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 350Kbps.png](https://images.blurt.buzz/DQmRbpWhpxZD5C4ACcZy3joFByuBEDLGUMZrBoCevB3mePP/Gambar%203.14%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20350Kbps.png)

Figure 3.14 Throughput with a resolution setting of 160x120 fps 10 bitrate 350Kbps

![Gambar 3.15 Throughput dengan pengaturan resolusi 160x120 fps 10 bitrate 500Kbps.png](https://images.blurt.buzz/DQmScT8GwkbeMCCFpw6U4SVmP1r8Gvpa8GY76LDqz52oSZG/Gambar%203.15%20Throughput%20dengan%20pengaturan%20resolusi%20160x120%20fps%2010%20bitrate%20500Kbps.png)

Figure 3.15 Throughput with a resolution setting of 160x120 fps 10 bitrate 500Kbps

![Gambar 3.16 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 100Kbps.png](https://images.blurt.buzz/DQmcd5v8Eb3u31wePaWgQMJBicVNoWwL2s5MFomiwEdUF7X/Gambar%203.16%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20100Kbps.png)

Figure 3.16 Throughput with a resolution setting of 320x240 fps 1 bitrate 100Kbps

![Gambar 3.17 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 350Kbps.png](https://images.blurt.buzz/DQmaoS3VLFcVkVyMNzUXcdoicigcxNttqt1djvQ9xKw8BsW/Gambar%203.17%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20350Kbps.png)

Figure 3.17 Throughput with a resolution setting of 320x240 fps 1 bitrate 350Kbps

![Gambar 3.18 Throughput dengan pengaturan resolusi 320x240 fps 1 bitrate 500Kbps.png](https://images.blurt.buzz/DQmep8oNcp1YpB8ywUc4oAcAMzEbTAMdvM7tMhra1AoS98f/Gambar%203.18%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%201%20bitrate%20500Kbps.png)

Figure 3.18 Throughput with a resolution setting of 320x240 fps 1 bitrate 500Kbps

![Gambar 3.19 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 100Kbps.png](https://images.blurt.buzz/DQmbz4Z5RRbQUguGqejMA7XjChnxg55NGtqL5ZJvWhJBiW8/Gambar%203.19%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%205%20bitrate%20100Kbps.png)

Figure 3.19 Throughput with a resolution setting of 320x240 fps 5 bitrate 100Kbps

![Gambar 3.20 Throughput dengan pengaturan resolusi 320x240 fps 5 bitrate 350Kbps.png](https://images.blurt.buzz/DQmWDSYCPKZsGYxrN5kzNwB7q6jzJ8aPbinuRQY6bm4DXrd/Gambar%203.20%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%205%20bitrate%20350Kbps.png)

Figure 3.20 Throughput with a resolution setting of 320x240 fps 5 bitrate 350Kbps

![Gambar 3.21 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 100Kbps.png](https://images.blurt.buzz/DQmPFM3TyLsfWg3c9eGeFonKCx69bgNMWrcRMCzUukdWQEH/Gambar%203.21%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%2010%20bitrate%20100Kbps.png)

Figure 3.21 Throughput with a resolution setting of 320x240 fps 10 bitrate 100Kbps

![Gambar 3.22 Throughput dengan pengaturan resolusi 320x240 fps 10 bitrate 500Kbps.png](https://images.blurt.buzz/DQmU8CW3PeYHwoRexeP3M2FhdeCjYjVrSYTr4PQsrgH9n7E/Gambar%203.22%20Throughput%20dengan%20pengaturan%20resolusi%20320x240%20fps%2010%20bitrate%20500Kbps.png)

Figure 3.22 Throughput with a resolution setting of 320x240 fps 10 bitrate 500Kbps



## 4 Results and Discussion

### 4.1 Proof

Proof that the average throughput is the same as the bitrate setting can be seen in the following table:

<table border="">Table 4.1 Comparison between setting and average throughput

<thead>

<tr>

<th>NO</th>

<th>Resolution</th>

<th>FPS</th>

<th>Bitrate</th>

<th>Average throughput</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>160x120</td>

<td>1</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>2</td>

<td>160x120</td>

<td>5</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>3</td>

<td>160x120</td>

<td>10</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>4</td>

<td>160x120</td>

<td>1</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>5</td>

<td>160x120</td>

<td>5</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>6</td>

<td>160x120</td>

<td>10</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>7</td>

<td>160x120</td>

<td>1</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>8</td>

<td>160x120</td>

<td>5</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>9</td>

<td>160x120</td>

<td>10</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>10</td>

<td>320x240</td>

<td>1</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>11</td>

<td>320x240</td>

<td>5</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>12</td>

<td>320x240</td>

<td>10</td>

<td>100 Kbps</td>

<td>100 Kbps</td>

</tr>

<tr>

<td>13</td>

<td>320x240</td>

<td>1</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>14</td>

<td>320x240</td>

<td>5</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>15</td>

<td>320x240</td>

<td>10</td>

<td>350 Kbps</td>

<td>350 Kbps</td>

</tr>

<tr>

<td>16</td>

<td>320x240</td>

<td>1</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>17</td>

<td>320x240</td>

<td>5</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

<tr>

<td>18</td>

<td>320x240</td>

<td>10</td>

<td>500 Kbps</td>

<td>500 Kbps</td>

</tr>

</tbody>

</table>

## 5 Closing

### 5.1 Conclusion

From the experimental results, it is evident that the average throughput is fully influenced by the bitrate setting. Even though the resolution settings are 160x120, 320x240 and fps 1, 5, 10, if the bitrate is set to 100Kbps then the average throughput is 100Kbps, the bitrate setting is 350Kbps, the average throughput is 350Kbps, the bitrate setting is 500Kbps then the average throughput is 500Kbps and so on.

### 5.2 Future Work

Although the average throughput is the same as the resulting graphics bitrate setting varies with different resolution and fps settings. From this study, the real resolution and fps were not observed. Delay, jitter, or parameters other than throughput are not examined in this article. These things can be used as further research from this research. The software being researched was the Adobe Flash Media Live Encoder, so it could do research again using other software.

## Bibliography

*   Farrel, A. 2009\. Network Quality of Service. Burlington : Maurgan Kaufmann.
*   Gómez, G. 2005\. End-to-End Quality of Service over Cellular Networks. Chichester : John Wiley & Sons Ltd.
*   Stallings, W. 1998\. High-Speed Networks TCP/IP and ATM Design Principle. New Jersey : Prentice-Hall, Inc.
*   Adobe, 2013\. [http://www.adobe.com/products/flash-media-encoder.html](http://www.adobe.com/products/flash-media-encoder.html), accessed tanggal 17 Desember 2013.
*   Combs, G. 2013\. [http://www.wireshark.org/about.html](http://www.wireshark.org/about.html), accessed 17 Desember 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/the-effect-of-fps-resolution-and-bitrate-settings-on-the-res-xwnlrnj?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/the-effect-of-fps-resolution-and-bitrate-settings-on-the-res-xwnlrnj?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/09/fps-bitrate-throughput-adobe-flash-media-live-encoder-assignment](https://0fajarpurnama0.github.io/bachelor/2020/11/09/fps-bitrate-throughput-adobe-flash-media-live-encoder-assignment)
*   [https://0fajarpurnama0.medium.com/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-134e2f3d833c](https://0fajarpurnama0.medium.com/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-134e2f3d833c)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/fps-bitrate-throughput-adobe-flash-media-live-encoder-assignment](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/fps-bitrate-throughput-adobe-flash-media-live-encoder-assignment)
*   [https://blurt.world/blurtech/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama](https://blurt.world/blurtech/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/the-effect-of-fps-resolution-and.html](https://0darkking0.blogspot.com/2020/11/the-effect-of-fps-resolution-and.html)
*   [https://hive.blog/technology/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/94-the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/94-the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software)
*   [https://steemit.com/computers/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software](http://0fajarpurnama0.weebly.com/blog/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-me](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-me)
*   [https://read.cash/@FajarPurnama/fps-resolution-bitrate-settings-effect-on-throughput-in-the-adobe-flash-media-live-encoder-software-77e7904f](https://read.cash/@FajarPurnama/fps-resolution-bitrate-settings-effect-on-throughput-in-the-adobe-flash-media-live-encoder-software-77e7904f)
*   [https://www.uptrennd.com/post-detail/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software~ODA0NzI1](https://www.uptrennd.com/post-detail/the-effect-of-fps-resolution-and-bitrate-settings-on-the-resulting-throughput-in-the-adobe-flash-media-live-encoder-software~ODA0NzI1)