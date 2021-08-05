---
layout: post
title: My Simple C Program Demonstrating Buffer Overflow
categories: masters
tags: [technology, computers, buffer overflow, C Program, assignment]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRwNbgV4rW8gGneY1CCWmQ4oNcBwJe14LbvvEnu2oXJwp/Figure%205.%20Simple%20Login%20Buffer%20Overflow%20Demonstration%20in%20C%20programming.png
description: Buffer overflow overwrites other part of the memory. The simplest case is variable B if put too much data can flood to the next variable A.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/16/simple-c-program-demonstrating-buffer-overflow
---
## Note

This is the eleventh assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

A buffer overflow contains the word buffer which is a temporary data storage area and overflow where too much data is inserted it overflows. Buffer overflow can be define as an event where the data size that was input exceeds the size of the buffer and the last part of the data overwrite the other section of the memory [1]. Think of it as a tea spills out of the cup if we put too much tea in it, and same when the data is too much that it will spill out.

Different from a tea being spilled buffer overflow is a data that may overwrites other parts of the memory and maybe read and executed by the machine. The spilled code could change, damage, add, or delete the user's data, even worst may contain an program to execute a remote connection to a malicious person. In July 2000 a buffer overflow vulnerability was found in Microsoft Outlook. No need for a virus attachment, just receiving an email with an exceeded header size added with a payload already open a session for the attacker. These makes buffer overflow as a famous security attack. This attack began when C supplied the framework and poor programming was practice [1].

## 2\. Buffer Overflow in Security

On Figure 1 shows memory layout of Linux process. A process is a program in execution, and an executable program contains a set of binary instructions to be executed on the processor. They could be read only data like printf, global or static data that last through out the process, brk pointer that keeps track of malloced memory, or local function that cleans up after it is run [2].

![Figure 1. Linux Memory Layout.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmUri82hZWjkmHn6dJyMZxFJV6AfjpCaqwbVo6E3jdmyBx/Figure%201.%20Linux%20Memory%20Layout.jpg)

Figure 1\. Linux Memory Layout



A process image on Figure 1 shows that it started with the program's code and data on the first 2 blocks after the unused block. Following is the runtime heap created at runtime by malloc, then goes to memory mapped region of shared libraries. On the top is user's stack whenever a function call is made it is used. On Figure 2 shows an illustration of stack region, whenever a function call is made the stack pointer pushes the parameters from right to left, then the return address, and the frame pointer between local and return address [2].

![Figure 2. Stack Region Illustration.jpg](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmdG3yXXqfzkMWoinpGj1ZVRsG2vSUAQXjLXehqBzLCVAz/Figure%202.%20Stack%20Region%20Illustration.jpg)

Figure 2\. Stack Region Illustration



Back to buffer overflow if the data inserted is larger than allocated buffer, it will overflow to other memory address. A simple C program on Figure 3 allocates A 8 of strings, and B is an unssigned short of 2015 value. If we put too much string in A it will overflow and here B changes value [3]. On Figure 4 is the assembly link of the code, we see that the value $2015 is allocated on 2 out of 16 of the address, and to overflow 2015 value we should at least input 14 characters.

![Figure 3. Simple Buffer Overflow Demonstration in C programming.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmVfpHVnoEGvRLyakVGq5EcBBPU4tyej8aGntcsV5MFbsE/Figure%203.%20Simple%20Buffer%20Overflow%20Demonstration%20in%20C%20programming.png)

Figure 3\. Simple Buffer Overflow Demonstration in C programming

![Figure 4. Assembly Link of Program on Figure 3.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRQSgYpZhCQiNgjjyVDpp9tLHVkbhaffyAaLesyqWKKq1/Figure%204.%20Assembly%20Link%20of%20Program%20on%20Figure%203.png)

Figure 4\. Assembly Link of Program on Figure 3



On Figure 5 is another demonstration. It's a simple login program, even though a wrong password is given, but root privilege was also given [4]. Figure 6 is one of the famous vulnerabilities ms08-67 even among beginners. It's char() buffer overflow vulnerability on unpatched Windows XP where the attacker can open a remote session, in other words hijacked the system. The real codes for starters is quite complicated but metasploit provides a ready to use application and all we need to do is specify the target and exploit [5].

![Figure 5. Simple Login Buffer Overflow Demonstration in C programming.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRwNbgV4rW8gGneY1CCWmQ4oNcBwJe14LbvvEnu2oXJwp/Figure%205.%20Simple%20Login%20Buffer%20Overflow%20Demonstration%20in%20C%20programming.png)

Figure 5\. Simple Login Buffer Overflow Demonstration in C programming

![Figure 6. Hijack Windows XP Using Metasploit.gif](https://steemitimages.com/640x0/https://images.blurt.buzz/DQma22fyLhY4XPToQasiGyycKonv8qtPo8GAuGhwXx3RBxX/Figure%206.%20Hijack%20Windows%20XP%20Using%20Metasploit.gif)

Figure 6\. [Hijack Windows XP Using Metasploit](https://youtu.be/m0WXXvN18A4)



## 3\. Counter Measure

From [2] we got some countermeasures:

1.  Avoid dangerous functions like gets(),scanf(),strcpy(), buffer overflow is due to poor programming so programmers must be sociallized of these dangerous functions.
2.  Stack invalidation to execute any instructions since malicious codes like spawning root shells an input argument to the program, it resides in the stack and not in the code segment.
3.  Compiler tools, if we check on section 3 GCC warns us not to use gets() because it's dangerous, something like that can be a solution.
4.  Dynamic run-time check that restrict access of an application or protect the important memory location to make sure that it's not overwritten.

## 4\. Summary

Buffer overflow overwrites other part of the memory. The simplest case is variable B if put too much data can flood to the next variable A. A buffer overflow on login program may grant access to the attacker, worst case it can grant remote session as of the ms08-67 vulnerability. To cope with buffer overflow is by well written code for example avoid dangerous functions as gets().

## 5\. Reference

1.  [http://searchsecurity.techtarget.com/definition/buffer-overflow](http://searchsecurity.techtarget.com/definition/buffer-overflow)
2.  [http://www.linuxjournal.com/article/6701?page=0,0](http://www.linuxjournal.com/article/6701?page=0,0)
3.  [https://en.wikipedia.org/wiki/Buffer_overflow/](https://en.wikipedia.org/wiki/Buffer_overflow)
4.  [http://www.thegeekstuff.com/2013/06/buffer-overflow](http://www.thegeekstuff.com/2013/06/buffer-overflow)
5.  [http://www.binarytides.com/hack-windows-xp-metasploit](http://www.binarytides.com/hack-windows-xp-metasploit)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-simple-c-program-demonstrating-buffer-overflow-xdnqlwl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-simple-c-program-demonstrating-buffer-overflow-xdnqlwl?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/my-simple-c-program-demonstrating.html](https://0darkking0.blogspot.com/2021/02/my-simple-c-program-demonstrating.html)
*   [https://0fajarpurnama0.medium.com/my-simple-c-program-demonstrating-buffer-overflow-5028ad010b2b](https://0fajarpurnama0.medium.com/my-simple-c-program-demonstrating-buffer-overflow-5028ad010b2b)
*   [https://0fajarpurnama0.github.io/masters/2020/07/16/simple-c-program-demonstrating-buffer-overflow](https://0fajarpurnama0.github.io/masters/2020/07/16/simple-c-program-demonstrating-buffer-overflow)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/simple-c-program-demonstrating-buffer-overflow](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/simple-c-program-demonstrating-buffer-overflow)
*   [https://steemit.com/technology/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?r=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-simple-c-program-demonstrating-buffer-overflow?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-simple-c-program-demonstrating-buffer-overflow](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-simple-c-program-demonstrating-buffer-overflow)
*   [http://0fajarpurnama0.weebly.com/blog/my-simple-c-program-demonstrating-buffer-overflow](http://0fajarpurnama0.weebly.com/blog/my-simple-c-program-demonstrating-buffer-overflow)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/201-my-simple-c-program-demonstrating-buffer-overflow](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/201-my-simple-c-program-demonstrating-buffer-overflow)
*   [https://read.cash/@FajarPurnama/my-simple-c-program-demonstrating-buffer-overflow-4ec045eb](https://read.cash/@FajarPurnama/my-simple-c-program-demonstrating-buffer-overflow-4ec045eb)
*   [https://www.uptrennd.com/post-detail/my-simple-c-program-demonstrating-buffer-overflow~ODYxMDgx](https://www.uptrennd.com/post-detail/my-simple-c-program-demonstrating-buffer-overflow~ODYxMDgx)