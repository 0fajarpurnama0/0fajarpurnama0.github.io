---
layout: post
title: Simple Password Bruteforce Demonstration Using Hydra
categories: pentest
tags: [penetration testing, brute force, Hydra, Linux, Backtrack, NMAP]
featuredimage: https://cdn.steemitimages.com/DQmQNJq6b9zxVrr36tK6drReGsAFNioHC33umerfwsQvWWD/Figure%200.%20three%20numerical%20pins%20for%20luggage%20lock.jpg
description: I can define password brute forcing in just one sentence which is trying every single character combination to crack a password.
canonicalurl: https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra
---

## Background

Have you ever forgotten your pin for your baggage then search on Youtube? Generally they advice "set everything to 000, try to click the lock, turn to 001, try to click the lock again, keep doing this until 009, then try 010, try to click the lock, turn to 011, try to click the lock again, keep doing this until 019, then try 020, repeat and eventually you will open the lock". Wait a minute isn't the same as trying every combination from 000-999? That is just brute force! What a spin around just to get views!


![Figure 0. three numerical pins for luggage lock.jpg](https://cdn.steemitimages.com/DQmQNJq6b9zxVrr36tK6drReGsAFNioHC33umerfwsQvWWD/Figure%200.%20three%20numerical%20pins%20for%20luggage%20lock.jpg)


Figure 0\. three numerical pins for luggage lock.



Story aside, in this article I will introduce you to a simple demonstration of brute forcing a password using Hydra on Linux. This is no advance tutorial but only to give people who never heard of brute force illustration. I can define password brute forcing in just one sentence which is trying every single character combination to crack a password.

## Program Concept

As a human is a heavy labor, which is why we create programs to do them for us. The application or programming concept is actually simple.

1.  Generate a dictionary of possible combinations.
2.  Inject those combinations in account login interfaces.

The previous two steps are the basics and enough to run as an application. The next steps are the complicated ones because system nowadays became smarter in detecting and handling brute force. For example, you have limited tries and the account will be lock for certain duration or even permanent or you can be blacklisted. Like the cat and mouse game, the brute force application must be adapted every time to the existing defense system. As I wrote that this article is simple demonstration only, so I will not dive into these complicated and adaptive parts.

## Hydra Demonstration

It was a long time ago before 2015 that I was interested in penetration testing tools and operating systems. Back then I was using Backtrack, now it is Kali Linux, then there is Parrot OS. Back then I wrote an article about brute force demonstration using Hydra tool which was eventually lost. Now, I found the screenshot backups and decided to rewrote again. The demonstration is brute forcing my own test server where I activated telnet service for login. The brute force is on both username and password.


![Figure 1. example of a very simple username dictionary.png](https://cdn.steemitimages.com/DQmVTxB4XYZTpwTMpk8ctoqMLEDfeChGGhh2PoT4HcU3YN8/Figure%201.%20example%20of%20a%20very%20simple%20username%20dictionary.png)


Figure 1\. example of a very simple username dictionary. The first thing you need is a dictionary. It is just collection of words in form of a file. I put the correct username amongs those words.



![Figure 2. example of a very simple password dictionary.png](https://cdn.steemitimages.com/DQmUWbcKL9esXhKbuyufPDPVXh18irR32ERfe3NaC9VL9mX/Figure%202.%20example%20of%20a%20very%20simple%20password%20dictionary.png)


Figure 2\. example of a very simple password dictionary. I decide to separate the username and password dictionary, but you can put them in one file if you want. I put the correct password amongs those words.



![Figure 3. scanning server with NMAP.png](https://cdn.steemitimages.com/DQmUDfxB2YzeFSaG29GA7su3tDWjTdruSw464QTGAE1uKhT/Figure%203.%20scanning%20server%20with%20NMAP.png)


Figure 3\. scanning server with NMAP. Before the exploitation phase is the scanning phase and here is just to show that the telnet port is open on port 23.


![Figure 4. hydra gui is available on Backtrack 5.png](https://cdn.steemitimages.com/DQmTVGUoiuYFt9rUbPTqzkDnPUWq9YZaf7EANh3ri3NKnxQ/Figure%204.%20hydra%20gui%20is%20available%20on%20Backtrack%205.png)


Figure 4\. hydra gui is available on Backtrack 5\. The menu is in BackTrack > Privilege Escalation > Password Attacks > Online Attacks > hydra-gtk. If you don't have Hydra, try getting one from your package manager or go to its [Github](https://github.com/vanhauser-thc/thc-hydra).



![Figure 5. hydra command line help.png](https://cdn.steemitimages.com/DQmVFVFwagiTNvU9XxfrGwbYfGk7MLz3JUtvq9nKnizGKkZ/Figure%205.%20hydra%20command%20line%20help.png)


Figure 5\. hydra command line help. I prefer to use the command line. Type "Hydra" or "Hydra --help" to show the help texts.



### Beyond this is at your own risk if targeting other's server because it will be count as a **hacking attempt**. Get permission for penetration testing or do only on your own servers.


![Figure 6. hydra brute force execution.png](https://cdn.steemitimages.com/DQmb3getTZawBVj42AS1Y9jNBskFieMae9XZd2AJLUUCj3D/Figure%206.%20hydra%20brute%20force%20execution.png)


Figure 6\. hydra brute force execution. Based on the help texts on Figure 5 the "-L" points to the username dictionary, "-P" points to the password dictionary, "-F" to stop when successful, "-V" for verbose, then followed by the server's IP address and service. After trying possible combinations username "purnama" and password "testhack" is found as a matching pair.




![Figure 7. telnet to server.png](https://cdn.steemitimages.com/DQmR7XQRWypeM3QAuZmnW9gj2wxjSXW8SV6TrVv4YF5MeoR/Figure%207.%20telnet%20to%20server.png)


Figure 7\. telnet to server and here I laughed because I just remembered that I was trying to brute force my own Windows desktop many years ago.



## Final Notes

If you follow the process completely you will realize how resource consuming it is to perform a brute force. Which is why among all exploitation method, brute force is the last resort. A dictionary can size to over many gigabytes and to try all of the combinations, you need a fast network and computing power. Lastly, now you now that accounts can be brute forced, it is important to have a strong password.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bruteforce-demonstration-using-hydra-on/de2fe690272e819d589098ab3dccad2a85b77da5" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-xewooy?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-xewooy?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra](https://0fajarpurnama0.github.io/pentest/2020/04/04/simple-bruteforce-demo-hydra)
*   [https://medium.com/@0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-884dc8448686](https://medium.com/@0fajarpurnama0/simple-password-bruteforce-demonstration-using-hydra-884dc8448686)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/simple-bruteforce-demo-hydra.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/simple-bruteforce-demo-hydra.html)
*   [https://0fajarpurnama0.tumblr.com/post/614452811196940288/simple-password-bruteforce-demonstration-using](https://0fajarpurnama0.tumblr.com/post/614452811196940288/simple-password-bruteforce-demonstration-using)
*   [https://0darkking0.blogspot.com/2020/04/simple-password-bruteforce-demonstration-using-hydra.html](https://0darkking0.blogspot.com/2020/04/simple-password-bruteforce-demonstration-using-hydra.html)
*   [https://hive.blog/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama](https://hive.blog/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/24-simple-password-bruteforce-demonstration-using-hydra](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/24-simple-password-bruteforce-demonstration-using-hydra)
*   [https://steemit.com/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama](https://steemit.com/pentest/@fajar.purnama/simple-password-bruteforce-demonstration-using-hydra?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/simple-password-bruteforce-demonstration-using-hydra](http://0fajarpurnama0.weebly.com/blog/simple-password-bruteforce-demonstration-using-hydra)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-password-bruteforce-demonstration-using-hydra](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/simple-password-bruteforce-demonstration-using-hydra)
*   [http://www.teiii.cn/simple-password-bruteforce-demonstration-using-hydra](http://www.teiii.cn/simple-password-bruteforce-demonstration-using-hydra)