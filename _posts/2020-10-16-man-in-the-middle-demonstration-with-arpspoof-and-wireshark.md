---
layout: post
title: Man in The Middle Demonstration with Arpspoof and Wireshark
categories: bachelor
tags: [Linux, arpspoof, wireshark, nmap, address resolution protocol, man in the middle, Windows, assignment, research writing]
featuredimage: https://cdn.steemitimages.com/DQmNaTRqMX9qoZtkR6aTDrrzmLkbHqzqw2HYFpZVGWsYKJF/Gambar%200.%20illustrasi%20arp%20poisoning.png
description: Actually it's just a man in the middle essay but I'm also interested in practicing it with Arpspoof and Wireshark on Linux.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/10/16/man-in-the-middle-demonstration-with-arpspoof-and-wireshark
---
![Figure 0. arp poisoning illustration.png](https://images.hive.blog/DQmeQ9KrezN7bv1Ts7JXXAg8wqHXu4AX2ymJtW5ov8XMV9w/Figure%200.%20arp%20poisoning%20illustration.png)

Figure 0\. arp poisoning illustration



## Note

This is my undergraduate assignment that I translated to English myself  in the Data Security Systems course where I was only assigned to write an essay on "man in the middle" but I was also interested in practicing it using Arpspoof and Wireshark applications on Linux. Apart from myself, our group consists of my colleagues Yulianti Murprayana, I Made Dwi Angga Pratama, Muhammad Audy Bazly, and I Nyoman Arta Jaya. This task has never been published anywhere and we as the author and copyright holder license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell it on condition to state our name as the authors and notify that the original and open version available here. If only interested in the practice, just follow the video.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/backtrack-scanning-arppoissoning/3d91dfabc0d9b35fd88fb7b5d8420c232c4b4149?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

## Chapter 1 Introduction

### 1.1 Background

Wireshark is a software for capturing packets passing on the network called packet sniffing. Sniffing itself means smell, used by dogs to catch traces. Wireshark is not shown to do hacking but as a traffic monitoring and hacking detector software, meaning that it is a software to monitor traffic conditions so that it can detect if there is a breach or something unusual on the network. However, Wireshark can also function as a hacking software.

Wireshark captures all passing packets, meaning that the username and password that is sent is captured. If you are connected to the network and you can find out what other hosts are connected, it is possible to kill the activities carried out by that host, namely by using ARP (Adress Resolution Protocol) poissoning and sniffing. In this assignment, we will try to capture a host's username and password to various web addresses using a combination of scanning, ARP poissoning and sniffing methods.

### 1.2 Problem

Can we capture usernames and passwords on other hosts that are connected to the same network by scanning, ARP poissoning and sniffing?

### 1.3 Objective

To find out the capture of the username and password by scanning, ARP poissoning and sniffing to [elearning.unud.ac.id](elearning.unud.ac.id).

### 1.4 Benefit

1.  Knowing how to monitor other hosts on the same network.
2.  Gives knowledge to prevention methods.
3.  Can be encouraged to increase the level of security on the network.
4.  Readers will be more careful about releasing private data on a network.

### 1.5 Scope and Boundaries

1.  The capture of the username and password is carried out on the website that is linked to the login [elearning.unud.ac.id](elearning.unud.ac.id), [blog.unud.ac.id](blog.unud.ac.id), [simak.ft.unud.ac.id](simak.ft.unud.ac.id).
2.  Experiments are carried out on hosts that are on the same network, LAN (Local Area Network).

## Chapter 2 Literature Review

### 2.1 NMAP (Network Mapper)

NMAP is an open source software that functions to scan the network. NMAP uses RAW IP (Internet Protocol) packets to find out whether there is a host, services provided by the host, see firewalls or filters, and the type of operating system used. Although NMAP is made for scanning large networks, NMAP is also good for checking 1 host (Lyon, 2013).

### 2.2 ARP (Address Resolution Protocol)

ARP works between layer 2 and layer 3 in the OSI (Open System Interconnection) layer because the MAC (Media Access Control) address works at layer 2 and the IP address works at layer 3\. ARP is used on TCP/IP networks. ARP functions to convert network addresses at layer 3 to physical addresses at layer 2 (Mitchell, 2013).

### 2.3 ARPSpoof

Is an application for doing ARP poissoning. Arpspoof sends an ARP packet notifying that the MAC address of the gateway is the IP address of the computer performing ARP poissoning. This means that the victim's computer will send traffic to the attacker's computer and then forwarded by the attacker to the gateway. So that information such as username and password can be captured. The original condition is that the victim's computer sends traffic to the gateway so that the other computers cannot capture the packet sent by the victim's computer (Uhlmann, 2003).

### 2.4 Sniffing

Packet sniffing, or packet analysis, is the process of capturing data across a local network and looking for any information that might be of use. Most of the time, we system administrators use packet sniffing to troubleshoot network problems (such as finding out why traffic is so slow on a part of the network) or to detect intrusions or compromised workstations (such as a workstation connected to a remote machine on port 6667 continuously when you're not using an IRC client), and that's what the type of analysis was originally designed for. But, that hasn't stopped people from finding more creative ways to use the tool. The focus quickly moved away from the intention so much that packet sniffers were considered native security tools rather than network tools today (Hannah, 2011).

## Chapter 3 Experimental Method

### 3.1 Place and Time of Experiment

Experiments were carried out at the Computer Lab, Electrical Engineering, Udayana University, Jimbaran, Bali. Trial time on Monday, May 1, 2013, at 20:00 - 24:00.

### 3.2 Tools and Materials

The following are the tools used for research:

ACER Laptop:

*   Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
*   Mobile Intel® Graphics Media Accelerator 4500MHD
*   1GB DDR2
*   128 WXGA Acer CrystalBriteTM LCD
*   250GB HDD
*   Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
*   Atheros Communications Inc. AR928X Wireless Network Adapter
*   Operating System Linux Backtrack 5 R3 32 bit

Software:

*   NMAP
*   Telnet
*   Hydra

The following are the materials used for research:

PC:

*   Intel® Pentium® core i5 processor
*   4 GB RAM
*   1GB VGA
*   Gigabit Ethernet Controller
*   Alcor Micro, Corp. USB 2.0 PC Camera
*   Operating System Windows 7 Ultimate 32 bit

### 3.3 Experiment Step

#### 3.4.1 Scan Host Alive and check IP (Internet Protocol) configuration

The first thing to do is to see the IP configuration when entering a network that is DHCP (Dynamic Host Configuration Protocol) with the command "ifconfig".

![Gambar 3.1 Konfigurasi PC.jpeg](https://images.hive.blog/DQmQ2CpU5Kj9nuJEesVMVHFQ2RZK4AyyUrkdgnRyb6Vr1rC/Gambar%203.1%20Konfigurasi%20PC.jpeg)

Figure 3.1 PC Configuration



The second thing to do is to check whether the host is on or off. If the IP address is not known, you can perform scanning in a certain IP (Internet Protocol) address range or with ARP (Address Resolution Protocol). If using nmap the command is "nmap -sn 172.16.150.32/27", this command will check the host alive with the ping application from 172.16.150.32 - 172.16.150.63.

![Gambar 3.2 Hasil scan dengan NMAP.jpeg](https://images.hive.blog/DQmU8VVarRiUVpikjN77Ds255iYctqJSJyJTMB2E5H7EBBs/Gambar%203.2%20Hasil%20scan%20dengan%20NMAP.jpeg)

Figure 3.2 Scan results with NMAP



Here a host with an IP address of 172.16.150.34 is an experimental material.

#### 3.4.2 ARP (Address Resolution Protocol) Poisoning

Before doing ARP poissoning ip_forward must be activated with the command "echo 1 > /proc/sys/net/ipv4/ip_forward". In this assignment ARP poissoning is carried out with the open source Arpspoof software. The command is "arpspoof -i eth0 -t 172.16.150.34 172.16.150.33".

![Gambar 3.3 ARP poisoning dengan arpspoof.jpg](https://images.hive.blog/DQmRHjxbHnH3UpdKmhK6sgpZ5t9GxxyMqLatabSGijrH8LK/Gambar%203.3%20ARP%20poisoning%20dengan%20arpspoof.jpg)

Figure 3.3 ARP poisoning with arpspoof



#### 3.4.3 Sniffing

In this assignment, sniffing is done with the open source software Wireshark and captures packets on the eth0 interface (cable).

![Gambar 3.4 Sniffing dengan Wireshark.jpeg](https://images.hive.blog/DQmYkyGC7WPwqAUmzf7aJ4pYvnG9jaCddwVB7gmRLjdguwq/Gambar%203.4%20Sniffing%20dengan%20Wireshark.jpeg)

Figure 3.4 Sniffing with Wireshark



## Chapter 4 Discussion

### 4.1 Experiment Results

To make it easier to search for login results, filter it with only packages originating from 172.16.150.34 and only http types are displayed. To log in usually use a form. Seen in Figure 3.4 source 172.16.150.34 is experimental material and destination 103.29.196.230 is [elearning.unud.ac.id](elearning.unud.ac.id). The login protocol type is http. Username and password appear probably because of missing encryption.

![Gambar 4.1 mac sebelum dan sesudah arpspoof.png](https://images.hive.blog/DQmaRjZ3Ko94dEnssBpTXUhmQ69sTPbycaATQiiscCnidVS/Gambar%204.1%20mac%20sebelum%20dan%20sesudah%20arpspoof.png)

Figure 4.1 The recorded Physical Address Gateway changes to the intruder Physical Address



In arpspoof Figure 3.3 is modifying the ARP table where gateway 172.16.150.33 with the mac address CC:EF:48:F8 D0:FF (seen in Figure 3.2) is changed to 00:23:5A:49:B7:F5 in Figure 4.1\. This means that the default gateway is changed to the computer that is doing ARP poisoning. So that the experimental material computer will send the package via the computer that does arpspoof first. With ip_forward enabled, packets will be forwarded to the gateway as if there was no disconnection.

## Chapter 5 Conclusion

### 5.1 Conclusion

Capturing username and password can be done by scanning, ARP poissoning and sniffing information contained in the packets that passed. From the experiment it appears that there is no encryption on the username and password in the package to [elearning.unud.ac.id](elearning.unud.ac.id), [blog.unud.ac.id](blog.unud.ac.id), [simak.ft.unud.ac.id](simak.ft.unud.ac.id). However, there is MD5 encryption on [kaskus.co.id](kaskus.co.id) so it is not easy to see the password. In the experiment, scanning used NMAP software, ARP poissoning used Arpspoof software, and sniffing used Wireshark software. With this combination, it can monitor the activity of other hosts on the local network.

### 5.2 Future Work

This paper can be used as further research with hosts having different operating systems, using other software, or a more in-depth discussion of the methods used.

## Reference

*   Lyon, G. 2013\. [http://nmap.org](http://nmap.org). Access 13 May 2013.
*   Hannah, A. 2011\. [http://www.linuxjournal.com/content/packet-sniffing-basics](http://www.linuxjournal.com/content/packet-sniffing-basics). Access 13 May 2013.
*   Uhlmann, S. 2003\. [http://su2.info/doc/arpspoof.php](http://su2.info/doc/arpspoof.php). Access 13 May 2013.
*   Microsoft, …. 2005\. [http://technet.microsoft.com/en-us/library/cc758357%28v=ws.10%29.aspx](http://technet.microsoft.com/en-us/library/cc758357%28v=ws.10%29.aspx). Access 13 May 2013.
*   Mitchell, B. 2013\. [http://compnetworking.about.com/od/networkprotocols/g/bldef_arp.htm](http://compnetworking.about.com/od/networkprotocols/g/bldef_arp.htm). Access 13 May 2013.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-xllomov?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-xllomov?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/10/16/man-in-the-middle-demonstration-with-arpspoof-and-wireshark](https://0fajarpurnama0.github.io/bachelor/2020/10/16/man-in-the-middle-demonstration-with-arpspoof-and-wireshark)
*   [https://0fajarpurnama0.medium.com/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-e0c3f2f27299](https://0fajarpurnama0.medium.com/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-e0c3f2f27299)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/man-in-the-middle-demonstration-with-arpspoof-and-wireshark](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/man-in-the-middle-demonstration-with-arpspoof-and-wireshark)
*   [https://blurt.buzz/blurtech/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/man-in-middle-demonstration-with.html](https://0darkking0.blogspot.com/2020/11/man-in-middle-demonstration-with.html)
*   [https://hive.blog/technology/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?ref=fajar.purnama](https://hive.blog/technology/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?ref=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/120-man-in-the-middle-demonstration-with-arpspoof-and-wireshark](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/120-man-in-the-middle-demonstration-with-arpspoof-and-wireshark)
*   [https://steemit.com/computers/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/man-in-the-middle-demonstration-with-arpspoof-and-wireshark](http://0fajarpurnama0.weebly.com/blog/man-in-the-middle-demonstration-with-arpspoof-and-wireshark)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/man-in-the-middle-demonstration-with-arpspoof-and-wireshark](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/man-in-the-middle-demonstration-with-arpspoof-and-wireshark)
*   [https://read.cash/@FajarPurnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-f4d7bf48](https://read.cash/@FajarPurnama/man-in-the-middle-demonstration-with-arpspoof-and-wireshark-f4d7bf48)
*   [https://www.uptrennd.com/post-detail/man-in-the-middle-demonstration-with-arpspoof-and-wireshark~ODE5NzM4](https://www.uptrennd.com/post-detail/man-in-the-middle-demonstration-with-arpspoof-and-wireshark~ODE5NzM4)