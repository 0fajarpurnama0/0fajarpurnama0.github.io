---
layout: post
title: Making Private Streaming Server as Media for Surveillance Cameras with Red5
categories: bachelor
tags: [Linux, streaming, server, Adobe Flash Media Live Encoder, Red5, Internet, computer, video, audio, assignment, research writing, Windows]
featuredimage: https://images.hive.blog/DQmdahrBFUJGVqiQBZZzJthTZynnSG2Zd5NsCUzp4kXDwc4/Gambar%203.2%20Tampilan%20Red5%20bila%20jalan.png
description: Other colleagues chose HTML5 server streaming software, VLC, Adobe Flash, etc., and I got the rare one, Red5.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/27/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5
---
## Note

This is my undergraduate assignment that I translated to English myself in Web-Based Telecommunication Applications where we are free to be in groups or alone and I chose to be by myself. The assignment is to experiment with software streaming servers. I prioritized others to choose their software such as HTML5, VLC, and Adobe Flash, in the end I got the rare one, Red 5\. This task has never been published anywhere and I as the author and copyright holder license this task customized CC-BY-SA where anyone can share, copy, republish, and sell, provided that my name is mentioned as the original author and mention that the original and open version available here.

## Chapter 1 Introduction

### 1.1 Background

Red5 server is an open source streaming server to provide video streaming facilities on the web. Examples of websites that specifically provide streaming videos are youtube and dailymotion, many more that haven't been mentioned yet. With a ready-to-use Red5 server (no need to add internet programming, unless there is a special need) the Red5 server can also be called a CMS (Content Management System). Users just need to use it.

Around the world, many have used Red5 as a local streaming server, there are also some who use Red5 to publish on public servers. So far, Red5 has only been used as a video website. But I don't know if anyone has tried Red5 as a media on surveillance camera. In this experiment I want to use Red5 for live streaming using the facilities provided by Red5 and using the Adobe Flash Media Live Encoder, and use it to build a personal surveillance camera.

### 1.2 Problem

1.  Can Red5 function as a medium for live streaming?
2.  Can the Adobe Flash Media Live Encoder software live stream to Red5?
3.  Is Red5 effective for surveillance cameras?

### 1.3 Experiment's Objective

Make use of Red5 server to build personal surveillance cameras.

### 1.4 Experiment's Benefit

Can take advantage of the Red5 server as a surveillance camera media, and can view streaming on the camera anytime and anywhere.

### 1.5 Experiment's Scope and Limitation

*   Using Red5 server for Linux Ubuntu, Kubuntu.
*   Using Web Cam.
*   Limited to a local server.
*   Tests only up to running (not up to measuring QOS or so on).
*   Private (information only known by the owner, unlike public websites).

### 1.6 Writing System

The introduction contains the background, objectives, benefits, and scope and limitations of the experiment. The literature review contains an explanation of the Red5 and Adobe Flash Media Live Encoder from the software's official website. Experiment Methodology contains steps in an experiment. Results and Discussion contains the results of the experiment. The closing contains conclusions and suggestions.

## Chapter 2 Literature Review

### 2.1 Adobe Flash Media Live Encoder

Is a media encoder software that can capture audio and video as well as stream video and audio to Adobe Media Server or Flash Video Streaming Service (FVSS) in real-time. This software is able to broadcast live activities such as sports, concerts and others. ([http://www.adobe.com/products/flash-media-encoder](http://www.adobe.com/products/flash-media-encoder))

### 2.2 Red5 Server

Red5 Media Server 1.0 provides a powerful video streaming and multi-user solution for Adobe Flash Player and other attractive client technologies. Java based and other open source frameworks. Red5 supports multi-user APIs, including NetConnection, NetStream and SharedObjects. In addition to supporting the RTMP protocol, it has the Tomcat Servlet container for JEE Web Applications. ([http://www.red5.org](http://www.red5.org))

## Chapter 3 Experimental Methodology

### 3.1 Place and Time of Experiment

At the author's house in the Gatsu area, Denpasar on Monday, December 24, 2012.

### 3.2 Experiment Tool

ACER Laptop

*   Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
*   Mobile Intel® Graphics Media Accelerator 4500MHD
*   1GB DDR2
*   128 WXGA Acer CrystalBriteTM LCD
*   250GB HDD
*   Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
*   Atheros Communications Inc. AR928X Wireless Network Adapter
*   Operating System Linux Backtrack 5 R3 32 bit

PC

*   Intel® Pentium® core i5 processor
*   4 GB RAM
*   1GB VGA
*   Gigabit Ethernet Controller
*   Alcor Micro, Corp. USB 2.0 PC Camera
*   Operating System Windows 7 Ultimate 32 bit

Software

*   Adobe Flash Media Live Encoder 3.2
*   Red5 server

### 3.3 Experiment Materials

The material is the video stream itself.

### 3.4 Experiment Step

#### 3.4.1 Red5 Installation

The important components in Red5 are java, ivy and apache ant. Also update the linux distribution. The following steps are typed in the console command. Java is not provided in the repository, we recommend adding another repository.

*   Nano /etc/apt/sources.list
*   Add on the bottom “deb http://ftp.us.debian.org/debian/ squeeze main non-free” or other repositories. (skip this step if all packages are available)
*   “apt-get update”
*   “apt-get install java-package sun-java6-jdk sun-java6-jre ant ivy”
*   Download Red5, I download from [http://www.red5.org/downloads/red5/1_0/](http://www.red5.org/downloads/red5/1_0/) and downloaded Red5-1.0.0-RC1.tar.gz.
*   I reccoment to put it in /usr/local or /usr/share. “mv Red5-1.0.0-RC1.tar.gz /usr/local”.
*   “cd /usr/local”
*   “tar xzvf Red5-1.0.0-RC1.tar.gz”
*   To run it, go to the Red5 folder. “Cd Red5-1.0.0”
*   “./red5.sh”. If appears “installer service created” then it can be used.

![Menjalankan Red5 lewat Terminal](https://cdn.steemitimages.com/DQmeuJSJb7bXN3yDkU9PA1bcv2pPmpfqzThdcSG9hetJrdx/Gambar%203.1%20Menjalankan%20Red5%20lewat%20Terminal.png)

Figure 3.1 Running Red5 via Terminal



*   To stop, enter in again “Cd Red5-1.0.0”.
*   “./red5-shutdown.sh”
*   Connect to the Internet to download additional applications.
*   Open a web browser at [http://localhost:5080](http://localhost:5080) or [http://127.0.0.1:5080](http://127.0.0.1:5080). Here you can see that Red5 is running.
*   Go to [http://localhost:5080/installer](http://localhost:5080/installer) and select oflaDemo and midiDemo to install.

![Tampilan Red5 bila jalan](https://cdn.steemitimages.com/DQmdahrBFUJGVqiQBZZzJthTZynnSG2Zd5NsCUzp4kXDwc4/Gambar%203.2%20Tampilan%20Red5%20bila%20jalan.png)

Figure 3.2 Display Red5 when running



#### 3.4.2 Streaming to Red5-server from Server

Red5 directly provides an application for streaming videos. Suppose from the server:

Open a browser, go to [http://localhost:5080/demos/](http://localhost:5080/demos/) to see the facilities, but just go to [http://localhost:5080/demos/publisher.html](http://localhost:5080/demos/publisher.html).

![Tampilan applikasi publisher pada Red5](https://cdn.steemitimages.com/DQmYyj5gTKRZZ8mZ4BQrJYfUGqiUcp4u7E7EAsGPs15YxiC/Gambar%203.3%20Tampilan%20applikasi%20publisher%20pada%20Red5.png)

Figure 3.3 Display publisher application on Red5



After configuration in the video section, click "connect" on the server section, then "publish" on the video and audio. The configuration is as follows:

![Pengaturan pada video](https://cdn.steemitimages.com/DQmVSWbg4nkmtqeMvwNa2TjKWu9YnBqX1YFA8r3odLEWLZm/Gambar%203.4%20Pengaturan%20pada%20video.png)

Figure 3.4 Settings on the video



![Pengaturan pada audio](https://cdn.steemitimages.com/DQmVYz7tRXPKGytUFXSqAJiz7seLCxZ3afdVKNEyVgHFMZt/Gambar%203.5%20Pengaturan%20pada%20audio.png)

Figure 3.5 Audio settings



To display the stream on the server, select the name of the stream that has been published, then click the "play" button.

![Tampilan streaming](https://cdn.steemitimages.com/DQmcHiLwQwjBZAkg5xFuam3MGw2QXSUzkibztXm3XdEADQK/Gambar%203.6%20Tampilan%20streaming.png)

Figure 3.6 Streaming view



#### 3.4.3 Streaming to Red5-server Peer-Peer

The author configures the network as following:

![Konfigurasi jaringan peer-peer](https://cdn.steemitimages.com/DQmTVf4aZCj7kS8MRCQcv7DJozzKh7qDwHUE6B8tGAafnGD/Gambar%203.7%20Konfigurasi%20jaringan%20peer-peer.png)

Figure 3.7 Peer-peer network configuration



Similarly, when streaming from another computer connected to the server via the network, only "localhost" is replaced with the server IP.

Open a browser on your personal PC and type [http://192.168.0.1:5080](http://192.168.0.1:5080). If successful it will look like this:

![Tampilan pengaksesan server dari PC pribadi](https://cdn.steemitimages.com/DQmTCdC9e4uv9B7Etsi5kXgT3NNRRQqaSs3BmqNXzVusSc3/Gambar%203.8%20Tampilan%20pengaksesan%20server%20dari%20PC%20pribadi.png)

Figure 3.8 Display of server access from a personal PC



Just go to [http://192.168.0.1:5080/demos/publisher.html](http://192.168.0.1:5080/demos/publisher.html). The video settings are the same as before, but the name is stream2 because stream1 is already in use on the server.

![Pengaturan video dari PC pribadi](https://cdn.steemitimages.com/DQmQE7z74L3gHPYkJaYKuN67GqNJBwhr8X3R3R4WTQiYNm6/Gambar%203.9%20Pengaturan%20video%20dari%20PC%20pribadi.png)

Figure 3.9 Video settings from a personal PC



On the previous server "[rtmp://localhost/oflaDemo](rtmp://localhost/oflaDemo) becomes "[rtmp://192.168.0.1/oflaDemo](rtmp://192.168.0.1/oflaDemo). Don't forget to publish the video.

![Tampilan streaming dari PC pribadi](https://cdn.steemitimages.com/DQmQv8tNH1KXNvN2yvivQCwDcE39C2F2EHhoJrvso2iTX6X/Gambar%203.10%20Tampilan%20streaming%20dari%20PC%20pribadi.png)

Figure 3.10 Streaming view from a personal PC



#### 3.4.4 Streaming Using Adobe Flash Media Live Encoder Software

Here "stream2" is cut off and streaming from personal PC using Adobe Flash Media Live Encoder. Here are the settings in the Adobe Flash Media Live Encoder:

![Pengaturan pada Adobe Flash Media Live Encoder](https://cdn.steemitimages.com/DQmdB3x1Fadd4QwdVWN6kRxos94HwCfgMvS7uBGngSGE3eU/Gambar%203.11%20Pengaturan%20pada%20Adobe%20Flash%20Media%20Live%20Encoder.png)

Figure 3.11 Settings on the Adobe Flash Media Live Encoder



If successful streaming, the following will appear:

![Tampilan Adobe Flash Media Live Encoder jika sedang berjalan](https://cdn.steemitimages.com/DQmXKS5THecFa5E7QFMR7g5abRHjWbXJiBVieehV8ybffFy/Gambar%203.12%20Tampilan%20Adobe%20Flash%20Media%20Live%20Encoder%20jika%20sedang%20berjalan.png)

Figure 3.12 How the Adobe Flash Media Live Encoder is running



Earlier the name of the stream was stream2, it can be seen as follows:

![Tampilan streaming di Red5-server](https://cdn.steemitimages.com/DQmUyyeo3rs44E93YTQCcwUeroAj6CTdHfxY75tKwQwPPcn/Gambar%203.13%20Tampilan%20streaming%20di%20Red5-server.png)

Figure 3.13 Streaming display on Red5-server



## Chapter 4 Results and Discussion

### 4.1 Streaming view via browser from server

Stream display1

![Tampilan stream1 dari browser server](https://cdn.steemitimages.com/DQmdXMr9JHoodcYg1YnszrAkYVop6YPfJcfhy5PHTEcMcYE/Gambar%204.1%20Tampilan%20stream1%20dari%20browser%20server.png)

Figure 4.1 Stream1 view of the server browser



Stream display2

![Tampilan stream2 dari browser server](https://cdn.steemitimages.com/DQmPZmf4Y5wwDYcAEJBxMUckbnTJGTyeTGafgyQQoHdb4jV/Gambar%204.2%20Tampilan%20stream2%20dari%20browser%20server.png)

Figure 4.2 Stream2 display from the server browser



### 4.2 Streaming view via browser from personal PC

Stream display1

![Tampilan stream1 dari browser PC pribadi](https://cdn.steemitimages.com/DQmTF5nCwxC2BZ8wk2t15Vrbum59VK4paXAX1yB97rN2Vq8/Gambar%204.3%20Tampilan%20stream1%20dari%20browser%20PC%20pribadi.png)

Figure 4.3 Stream1 view from personal PC browser



Stream display2

![Tampilan stream2 dari browser PC pribadi](https://cdn.steemitimages.com/DQmb1pn8SA6pepvLKrY5yQTyMtXMfURTV6fHLfb2Wek5vqV/Gambar%204.4%20Tampilan%20stream2%20dari%20browser%20PC%20pribadi.png)

Figure 4.4 Stream2 view from personal PC browser



## Chapter 5 Closing

### 5.1 Conclusion

From the experimental results, it can be concluded that Red5 can function as a media for streaming, Adobe Flash Media Live Encoder software can stream to Red5, and Red5 can be processed as a media for surveillance cameras.

### 5.2 Suggestion

This experiment is limited to local networks only and on PCs and laptops. The author recommends developing the use of Red5 with hosting (public server). To be more effective as a surveillance camera media, it is necessary to conduct experiments to be accessed by mobile. Apart from that the author does not edit html, javascript, swf or others. It is recommended to edit it according to user needs.

## Bibliography

*   [http://www.adobe.com/products/flash-media-encoder](http://www.adobe.com/products/flash-media-encoder), access 17 December 2012
*   [http://www.red5.org](http://www.red5.org), access tanggal 28 December 2012

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/making-private-streaming-server-as-media-for-surveillance-ca-xllorkp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/making-private-streaming-server-as-media-for-surveillance-ca-xllorkp?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/27/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5](https://0fajarpurnama0.github.io/bachelor/2020/11/27/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5)
*   [https://0fajarpurnama0.medium.com/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5-2f36090339e](https://0fajarpurnama0.medium.com/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5-2f36090339e)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5)
*   [https://blurt.buzz/blurtech/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/making-private-streaming-server-as.html](https://0darkking0.blogspot.com/2020/11/making-private-streaming-server-as.html)
*   [https://hive.blog/technology/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?ref=fajar.purnama](https://hive.blog/technology/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?ref=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/118-making-private-streaming-server-as-media-for-surveillance-cameras-with-red5](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/118-making-private-streaming-server-as-media-for-surveillance-cameras-with-red5)
*   [https://steemit.com/computers/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5](http://0fajarpurnama0.weebly.com/blog/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5)
*   [https://read.cash/@FajarPurnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5-67f47604](https://read.cash/@FajarPurnama/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5-67f47604)
*   [https://www.uptrennd.com/post-detail/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5~ODE5MzI1](https://www.uptrennd.com/post-detail/making-private-streaming-server-as-media-for-surveillance-cameras-with-red5~ODE5MzI1)