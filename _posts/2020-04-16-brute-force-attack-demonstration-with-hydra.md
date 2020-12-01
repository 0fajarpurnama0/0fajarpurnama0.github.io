---
layout: post
title: Brute Force Attack Demonstration with Hydra
categories: bachelor
tags: [Linux, brute force, Hydra, Windows, Telnet, assignment, research writing]
featuredimage: https://cdn.steemitimages.com/DQmNgtJuY8MGVSN1i4K8Y9GckJniLMNcSEoF3dfUd2MwJ3M/Gambar%200.%20Ilustrasi%20bruteforce.png
description: Actually it was just an assignment to write an essay but I happened to try Backtrack Linux at that time and just practiced it.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/04/16/brute-force-attack-demonstration-with-hydra
---
![Figure 0. Bruteforce illustration.png](https://images.hive.blog/DQmUXVe6JmSBPF6XGMPesLDW8WZSq9hwc1jV1ZgxjFMfYrL/Figure%200.%20Bruteforce%20illustration.png)

Figure 0\. Bruteforce Illustration



## Note

This undergraduate assignment in the Data Security System course is a scientific version of [previous tutorial](https://hive.blog/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra). Actually, we were only given the task of writing an essay on bruteforce, but I happened to try Backtrack Linux at that time and decided to pratice the bruteforce with Hydra. Apart from me, our group consisted of Yulianti Murprayana, Nyoman Arta Jaya, Muhammad Audy Bazly, and Dwi Angga Pratama. This assignment has never been published anywhere and we as the author and copyright holder license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell it on condition that to state our name as the author and mention that the original and open version available here. If you just want to experiment, just follow the video.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bruteforce-demonstration-using-hydra-on/de2fe690272e819d589098ab3dccad2a85b77da5" allowfullscreen=""></iframe></div>

## Chapter 1 Introduction

### 1.1 Background

Bruteforce is a computer network breaching technique by trying all the words in the dictionary as a username and/or password to enter a network. From the word bruteforce itself means to force purely using force. For hackers, bruteforce is the last solution to breach computer networks. However, this technique is rarely used because it requires a long time, large dictionary files, high computer specs and other similar types. If the hacker's human resources are sufficient, this technique is sure to work. Although this technique is commonly known and understood by its mechanism of action, few people know its application. In other words, many know the theory but never take this action. In this paper, an experiment will be conducted to perform bruteforce with Hydra software available on the Linux operating system. The experimental material is the Windows 7 operating system on the telnet service.

### 1.2 Problem

How to bruteforce with Hydra on telnet service in Windows 7?

### 1.3 Objective

Apply the bruteforce breach technique with the Hydra software on the telnet service on Windows 7.

### 1.4 Benefit

1.  Can apply bruteforce techniques.
2.  Can know bruteforce limitations.

### 1.5 Scope and Boundaries

1.  The test conditions have been set, the username and password have been predefined.
2.  The breach is done only on the telnet service on Windows 7.
3.  Using Hydra software as bruteforce.
4.  The dictionary size is very small (for experiments only).

## Chapter 2 Literature Review

Brute-force attacks work by counting every possible combination that can generate a password and testing it to see if it's the right one. As password lengths increase, the amount of time and required computing power to find the correct password increases exponentially. ([https://en.wikipedia.org/wiki/Brute-force_attack](https://en.wikipedia.org/wiki/Brute-force_attack)). Some software that can perform brute force attacks:

*   Aircrack-ng
*   Cain and Abel
*   Crack
*   DaveGrohl
*   Hashcat
*   Hydra
*   John the Ripper
*   L0phtCrack
*   Ophcrack
*   RainbowCrack

Based on [Zurück zur Startseite](https://www.wissenschaft.de/scienceblogs/when-was-the-brute-force-attack-invented-klausis-krypto-kolumne/), The following is the development of the brute force attack news:

*   1977: The first major publication on the brute force attack on DES by Whitfield Diffie (Special Feature Exhaustive Cryptanalysis of the NBS Data Encryption Standard)
*   1996: Michael Wiener publishes the paper Efficient DES Key Search
*   1997: RSA Secret-Key Challenge
*   1997: Ian Goldberg broke 40-bit encryption in a few hours
*   1997: The DESCHALL project solves the DES challenge after 96 days /li>
*   1998: EFF DES Cracker (Deep Crack) cracked DES in 56 hours
*   1999: Deep Crack and distribution.net crashed DES in 22 hours and 15 minutes
*   2002: 64 bit RC5 encryption was broken by distribution.net after 1,757 days
*   2006: COPACABANA (Cost-Optimized Parallel Code Breaker)
*   2009: MTC3 World Record Challenge
*   2017: PHD Nils Kopal's Thesis, Secure Volunteer Computing for Distributed Cryptanalysis
*   Future: Quantum computer attacks on symmetric ciphers

## Chapter 3 Experimental Method

### 3.1 Place and Time of Experiment

The experiment was carried out at home at Jln. Kusuma Bangsa 5, Denpasar, Bali. Trial time on Monday, March 10, 2012, at 20:00 - 24:00.

### 3.2 Tools and Materials

Following are the tools used for research:

Laptop ACER:

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

### 3.3 Experiment Method

#### 3.3.1 Scan Host Alive

The first thing to do is to check whether the host is on or off. If the IP address is not known, you can perform scanning in a certain IP (Internet Protocol) address range or with ARP (Adress Resolution Protocol). If using nmap the command is “nmap –sn 192.168.0.0/24”, this command will check the host alive with the ping application from 192.168.0.0 - 192.168.0.255.

#### 3.3.2 Scan port

The second is a port scan to find out which ports on the host are active with a port scanner application. The port scanner used in this paper is NMAP. If it is known that the host's IP address is 192.168.0.3 then the command is "nmap 192.168.0.3". In this paper the bruteforce experiments will be carried out on Telnet. Telnet access can be done with the command "telnet -l (user)".

![Gambar 3.1 Scanning pada host dengan NMAP.png](https://images.hive.blog/DQmdDnrJ4iA1cczCWaU5p1cn96vyUXekDrt8BvYntNyFK8Z/Gambar%203.1%20Scanning%20pada%20host%20dengan%20NMAP.png)

Figure 3.1 Scanning on a host with NMAP



#### 3.3.3 Bruteforce

Bruteforce in this paper will be done with the open source Hydra software. In this paper, an experimental dictionary is made in the form of a text file, which looks as follows:

![Gambar 3.2 Kamus yang digunakan.png](https://images.hive.blog/DQmZPYYCM9r9mFkGigTmhuY5i3RZ15doof5u5obVJZdehnP/Gambar%203.2%20Kamus%20yang%20digunakan.png)

Figure 3.2 Dictionary used



On the hydra you can do the command "hydra -h" to see the user manual. Next is the command “hydra –L /root/test_dictionary.txt –P /root/test_dictionary.txt –F –V 192.168.0.3 telnet”. "-L" is login, "-P" is password, here both of them will try all the text in the file "test_dictionary.txt". "–F" is command to stop Hydra when login and password have been found, -V to see the process.

![Gambar 3.3 Bruteforce dengan hydra.png](https://images.hive.blog/DQmaaQ4ij9hTzS2ah9UPBpEbav11atJJ5W3uHicwLwcsbb3/Gambar%203.3%20Bruteforce%20dengan%20hydra.png)

Figure 3.3 Bruteforce with hydra



## Chapter 4 Discussion

### 4.1 Which is done by the Hydra

In Figure 3.3, it can be seen that hydra tries the names contained in the test_dictionary.txt file as username and password. Hydra starts from above, namely username = robert and password = robert up to 21 attempts and stops at usernama = full moon and password = testhack.

### 4.2 Experiment Results

![Gambar 4.1 Konfigurasi jaringan pada Windows 7.png](https://images.hive.blog/DQmYMRJosiLMjvmhq4z7vmev6xmeZC4oXazzoadfG3g5sao/Gambar%204.1%20Konfigurasi%20jaringan%20pada%20Windows%207.png)

Figure 4.1 Network configuration in Windows 7



With the command "telnet 192.168.0.3" by entering username = full moon and password = testhack it will look as follows:

![Gambar 4.2 Telnet ke host.png](https://images.hive.blog/DQmfMfZBEma6iAgfeXUjEL11Fi3powP1vd8AQKdp8uY5hDQ/Gambar%204.2%20Telnet%20ke%20host.png)

Figure 4.2 Telnet to host



It appears that it has successfully entered the host. From the experiments, bruteforce is time-consuming, wasteful of human resources such as RAM, processor and drive. If you apply this method in the real world, you will need a large dictionary of about more than 5 GB because the dictionary must provide all possible passwords ranging from variations of letters from a - z, numbers, and other characters. It doesn't stop there, there must also be all possible numbers of characters in one word, and each character must also have variations. Naturally, a real dictionary would have a large size. The speed to do bruteforce depends on the processor and RAM, in other words, a very large RAM and processor is required. If all the required human resources are met, then the bruteforce will work. Bruteforce is therefore said to be the last resort for hackers when other solutions don't work.

## Chapter 5 Closing

### 5.1 Conclusion

To apply Bruteforce, you can install available software such as Hydra. After that you need a dictionary in the form of a collection of words in the txt file. The last stage before carrying out bruteforce is to search for information and connect the connection with the purpose of the bruteforce. Then do bruteforce with Hydra as shown in Figure 3.3.

### 5.2 Suggestion

There are also bruteforce software besides Hydra such as Bruteforce, Ophcrack and Rainbowcrack. But it does not cover the possibility of creating Bruteforce software. It can be suggested that it be used as further research by making bruteforce software yourself, trying other software, bruteforce other services, doing it in real conditions and so on.

## Questions and Answers (actually my midterm exam)

### Question

1.  Describe the constraints that determine the successful application of Bruteforce that you discussed (pre-conditions for enabling Bruteforce application).
2.  The extent to which the successful implementation of Bruteforce was tried, and explain what measures/parameters were used to measure the success.
3.  What methods can be used to detect the presence of this Bruteforce attack? And to what extent is the detection success rate?
4.  Can this Bruteforce attack be prevented? How is the method?

### Answer

1.  In general, brute force is possible if given the opportunity to log in. When viewed from a computer network point of view, first it must be able to connect to the host. Services are open (not filter or firewall) and are given the opportunity to login.
2.  Because what we are doing is experimental, it is set to meet the criteria in question 1, such as connecting to the host, the firewall on the host is turned off and given the opportunity to log in. At login, input the username and password, all the words in the dictionary that have been created are tried to find the appropriate username and password pair in order to login. The software used is Hydra. There are other software besides Hydra such as Rainbowcrack, Bruteforce, and Medusa. After that you can log in.
3.  To detect bruteforce can be seen in the log file on the host. Detected when the same user, which can be seen on the identity (user's IP address, MAC address of the user, or other identities), logs in simultaneously. This means trying to log in continuously, say more than 6x. If needed, direct detection can be done with network monitoring software, for example Wireshark. This is how Wireshark is installed on the network to log in, then filter (group) the IP address or other identity. For example, if you see a user trying to log in more than 6 times then he or she is doing bruteforce. You can further create a program to alert the host or any further prevention programs.
4.  It is true that Bruteforce is the last solution if other breach methods are unsuccessful but if Bruteforce stands alone it is easy to prevent. Can be prevented by disconnecting. Can be prevented by installing a firewall. Can be prevented by closing the service to login. The above = turn off the service. When the service is still running but needs to prevent bruteforce can be done by filtering by only users with a certain identity can log in (if they are private). For example, only IP addresses from 222.124.227.0/24 can be logged in or with a specific MAC address. The developing technology uses the time skew identity of the user's time identity. Provides a maximum limit for logging in (if it is social). For example on Facebook, if you try to log in 6 times but it doesn't work, the account will be blocked and verification is requested via the owner's email to be reactivated. This is an obstacle if the Bruteforce stands alone. To overcome this, it can be done with the help of a proxy or encryption so that the identity is not known. If only certain users can log in, they must first perform spying techniques such as man in the middle. If you find a user, you can disguise yourself as that user and then log in.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/brute-force-attack-demonstration-with-hydra-xkygnyj?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/brute-force-attack-demonstration-with-hydra-xkygnyj?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/04/16/brute-force-attack-demonstration-with-hydra](https://0fajarpurnama0.github.io/bachelor/2020/04/16/brute-force-attack-demonstration-with-hydra)
*   [https://0fajarpurnama0.medium.com/brute-force-attack-demonstration-with-hydra-967fc258af47](https://0fajarpurnama0.medium.com/brute-force-attack-demonstration-with-hydra-967fc258af47)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/brute-force-attack-demonstration-with-hydra](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/brute-force-attack-demonstration-with-hydra)
*   [https://blurt.buzz/blurtech/@fajar.purnama/brute-force-attack-demonstration-with-hydra?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/brute-force-attack-demonstration-with-hydra?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/12/brute-force-attack-demonstration-with.html](https://0darkking0.blogspot.com/2020/12/brute-force-attack-demonstration-with.html)
*   [https://hive.blog/technology/@fajar.purnama/brute-force-attack-demonstration-with-hydra?ref=fajar.purnama](https://hive.blog/technology/@fajar.purnama/brute-force-attack-demonstration-with-hydra?ref=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/125-brute-force-attack-demonstration-with-hydra](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/125-brute-force-attack-demonstration-with-hydra)
*   [https://steemit.com/technology/@fajar.purnama/brute-force-attack-demonstration-with-hydra?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/brute-force-attack-demonstration-with-hydra?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/brute-force-attack-demonstration-with-hydra](http://0fajarpurnama0.weebly.com/blog/brute-force-attack-demonstration-with-hydra)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/brute-force-attack-demonstration-with-hydra](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/brute-force-attack-demonstration-with-hydra)
*   [https://read.cash/@FajarPurnama/demonstrasi-brute-force-attack-dengan-hydra-c9ab7aac](https://read.cash/@FajarPurnama/demonstrasi-brute-force-attack-dengan-hydra-c9ab7aac)
*   [https://www.uptrennd.com/post-detail/brute-force-attack-demonstration-with-hydra~ODIxODk1](https://www.uptrennd.com/post-detail/brute-force-attack-demonstration-with-hydra~ODIxODk1)