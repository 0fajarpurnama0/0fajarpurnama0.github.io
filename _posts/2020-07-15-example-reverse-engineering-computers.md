---
layout: post
title: My Examples on Reverse Engineering in Computers when I was a young student
categories: masters
tags: [technology, computers, reverse engineering, decompile, assignment]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbcgzjYNPW87N84iJscRcFctGjDSVoa4rBd2XT6BF63HB/Figure%202.%20Decompiled%20Hello%20Java%20Program.gif
description: Reverse engineering was originally applied only to hardware, reverse-engineering is now applied to software, databases and even human DNA.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/15/example-reverse-engineering-computers
---
## Note

This is the tenth assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

Reverse Engineering is the process of disassembling and examination to study the parts of (something) to see how it was made and how it works so that you can make something that is like it [1]. As I read in [2] in came back to me that I've actually done a lot of half reverse engineering, where I disassembled camera's, laptops, PCs, hard drives, mouse, and monitors, that would be a full reverse engineering if I thoroughly study them and remade them. There are items that I successfully reversed engineering which are adapters and Cisco router's console cable. For the adapter I just need to buy the parts on electronic shops and assemble. The Cisco router's console cable was almost the same where I disassemble the cable and see how the order of each cables are connected. Then I proceed to a shop and bought 2 DB9 male and female pins, a few cables, and cover, with later I proceed in soldering the cables and made my own console cable as on Figure 1.

![Figure 1. My example of Cisco's Router Console Cable Reversed Engineered.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmS2w27roFtLyyHtbm9fDgJFVNhaMeuXEPZ1jxVLhsEcqY/Figure%201.%20My%20example%20of%20Cisco's%20Router%20Console%20Cable%20Reversed%20Engineered.png)

Figure 1\. My example of Cisco's Router Console Cable Reversed Engineered



A process that was originally applied only to hardware, reverse-engineering is now applied to software, databases and even human DNA. Reverse-engineering is especially important with computer hardware and software. Around 1980s San Jose-based Phoenix Technologies Ltd reversed engineered an IBM's bios in order to make their own original compatible PC to IBM. Cyrix Corp and Advanced Micro Devices Inc reversed engineered Intel Corp microprocessors to make their own cheaper microprocessors [2].

## 2\. Reverse Engineering In Computers

Most programs are written in high level programming language such as C and Java. The written program is then compiled using a compiler into machine language mainly consist of 0s and 1s which then can be executed. This machine language is very difficult for us to understand, but still there are ways to decompile them into high programming language using a decompiler. For example on the GIF picture on Figure 2 I wrote a “hello world” program in java and compiled into “hello.class”. Using an application called “jad” I can decompile the executable file back into the java language.

![Figure 2. Decompiled Hello Java Program.gif](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbcgzjYNPW87N84iJscRcFctGjDSVoa4rBd2XT6BF63HB/Figure%202.%20Decompiled%20Hello%20Java%20Program.gif)

Figure 2\. Decompiled Hello Java Program



As stated on the first section that reverse engineering can be used to study and reproduce a software, another important field is that it can be use on computer security, since reverse engineering involves analyzing, dissembling, and may decompile a software. An example of reverse engineering in field of computer security is malware analysis, Figure 3 shows a simple overview of malware analysis through reverse engineering. As an example I experimented in injecting a message box payload using “msfvenom” on “calc.exe” (a calculator software on Windows). On Figure 4 I used Reverse Engineering Compiler (REC) Studio which a software to perform disassembling and decompiling on an executable file to compare the original “calc.exe” and the injected “calc_bdoor.exe”, and shows that another task had been added.

![Figure 3. Overview of reverse engineering on malware.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmTXgqEHTXM929asGwQMa3KYvrnXgMws8b5BnSZWvswaLr/Figure%203.%20Overview%20of%20reverse%20engineering%20on%20malware.png)

Figure 3\. Overview of reverse engineering on malware [3]

![Figure 4. Examining executable with recstudio.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmaWGNCPXKxQ4MvkuLfG4DE72Gi5xES6uo4d9z6oLB4HDe/Figure%204.%20Examining%20executable%20with%20recstudio.png)

Figure 4\. Examining executable with recstudio



## 3\. Laws on Reverse Engineering

From [4] reverse engineering has purposes as follows:

*   Interfacing
*   Military or commercial espionage
*   Improve documentation shortcomings
*   Obsolescence
*   Software modernization
*   Product security analysis
*   Bug fixing
*   Creation of unlicensed/unapproved duplicates
*   Academic/learning purposes
*   Competitive technical intelligence
*   Saving money
*   Repurposing

But some regions have strict laws on reverse engineering, mainly copyright issues. The laws on reverse engineering varies each region but also similar. Some permits reverse engineering if the purpose is to fix issues of a software, some permits if it is research and non commercial use, and some permits only if it statet by the software owner on the software that reverse engineering is allowed. [5]

## 4\. Reference

1.  [http://www.merriam-webster.com/dictionary/reverse%20engineer](http://www.merriam-webster.com/dictionary/reverse%20engineer)
2.  [http://www.computerworld.com/article/2585652/app-development/reverse-engineering.html](http://www.computerworld.com/article/2585652/app-development/reverse-engineering.html)
3.  [https://blog.malwarebytes.org/intelligence/2012/09/so-you-want-to-be-a-malware-analyst/](https://blog.malwarebytes.org/intelligence/2012/09/so-you-want-to-be-a-malware-analyst/)
4.  [https://en.wikipedia.org/wiki/Reverse_engineering](https://en.wikipedia.org/wiki/Reverse_engineering)
5.  [http://www.slideshare.net/welcometofacebook/international-laws-and-reverse-engineering](http://www.slideshare.net/welcometofacebook/international-laws-and-reverse-engineering)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-examples-on-reverse-engineering-in-computers-when-i-was-a-xgpnqyg?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-examples-on-reverse-engineering-in-computers-when-i-was-a-xgpnqyg?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/my-examples-on-reverse-engineering-in.html](https://0darkking0.blogspot.com/2021/02/my-examples-on-reverse-engineering-in.html)
*   [https://0fajarpurnama0.medium.com/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student-d48a0808dd75](https://0fajarpurnama0.medium.com/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student-d48a0808dd75)
*   [https://0fajarpurnama0.github.io/masters/2020/07/15/example-reverse-engineering-computers](https://0fajarpurnama0.github.io/masters/2020/07/15/example-reverse-engineering-computers)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/example-reverse-engineering-computers](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/example-reverse-engineering-computers)
*   [https://steemit.com/engineering/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?r=fajar.purnama](https://steemit.com/engineering/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?r=fajar.purnama)
*   [https://stemgeeks.net/engineering/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?ref=fajar.purnama](https://stemgeeks.net/engineering/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student)
*   [http://0fajarpurnama0.weebly.com/blog/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student](http://0fajarpurnama0.weebly.com/blog/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/200-my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/200-my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student)
*   [https://read.cash/@FajarPurnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student-39fa4aee](https://read.cash/@FajarPurnama/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student-39fa4aee)
*   [https://www.uptrennd.com/post-detail/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student~ODYwNDc4](https://www.uptrennd.com/post-detail/my-examples-on-reverse-engineering-in-computers-when-i-was-a-young-student~ODYwNDc4)