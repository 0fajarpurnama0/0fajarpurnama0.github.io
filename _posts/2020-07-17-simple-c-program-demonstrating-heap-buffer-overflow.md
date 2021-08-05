---
layout: post
title: My Simple C Program Demonstrating Heap Buffer Overflow
categories: masters
tags: [technology, computers, buffer overflow, heap, C Program, assignment]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmNz53WvQ28ocB2E4Nc9DcRi6mSx1EZ8BNNMesWvBBh4qc/0.Heap_Over_Flow.png
description: The statically assigned variables or local variables resides in the stack area and dynamically assigned variables resides in the heap area.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/17/simple-c-program-demonstrating-heap-buffer-overflow
---
![0.Heap_Over_Flow.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmNz53WvQ28ocB2E4Nc9DcRi6mSx1EZ8BNNMesWvBBh4qc/0.Heap_Over_Flow.png)


## Note

This is the twelth assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

The C variables can be categorized into 2 which are the statically assigned variables or local variables resides in the stack area and dynamically assigned variables (using malloc function) resides in the heap area [1]. A stack is a data structure equivalent to last in first out. It mainly has push and pop instruction where push puts new element at the top of the stack and pop removes the top elements first. For instance, when a function calls another function, which in turn calls a third function, it's important that the third function return back to the second function rather than the first [2] [3]. A stack buffer overflow occurs when the input data is larger than the assigned size of local variables, which corrupts the stack area, worst case a malicious user can insert a malicious code on the return address after overflowing the previous stack area [4].

On the other hand the heap is a tree based data structure where the value of the parent is always greater or equal then the children's node. In C the heap area is an area that is not manage automatically but usually larger than stack. On the stack area the user only defines the size and variable, using last in first out it pushes and pops elements automatically, while on the heap area we have to manually free() the memory after it is used. To allocate memory on the heap area usually uses function calloc() or malloc(). Unlike stack it doesn't have size restriction, but it's slower because we have to use pointers to access [5]. A heap buffer overflow can occur on the heap area when the input size (using gets) of a dynamic allocated variable is larger then the allocate size which replace the next dynamic allocated variable [6], or cause by the statically assigned variable next to the heap area (using memset() e.g) which will overwrite starting from the beginning address of the heap area [7].

## 2\. Sample Script and Execution

On Figure 1 is the script and Figure 2 is the result of execution [7]. On the result we can see that DoFilter is on the lowest memory address followed by static char sbuf starting on 6294832 and global variable globalA on 6294848 in integer value. After the statically assigned variable and global variable is the heap area, it is where the dynamically buf and wbuf allocated starting on integer address 24207376 and 24207408, which we also calculate the distance between them diff is 32 integer value. 32 also means the size of variable buf with the data size is 16, in [6] said addition to pointers and register address (maybe others as well) which makes total of 32\. To overflow wbuf we simply need to insert more than 32 chars on buf. On the script we first write 15 (BUFSIZE-1) of “Ws” on wbuf, then we write 32+8 (diff+8) of “Bs” on buf. Before writing buf we show the output of buf we is 15 “Ws”, then after writing buf with 40 “Bs” exceeds the size of buf (32) by 8 and overflows to wbuf, and so the first 8 characters of wbuf is overwritten with “Bs”. This is heap buffer overflow caused locally. Another thing abuf and awbuf are local variables residing on stack.

![1.Heap_Overflow_Script.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmcErmGHfL9EEzVSd312FbmRenZL5wndNjngAgFdEjvZNs/1.Heap_Overflow_Script.png)

Figure 1\. Sample Script

![2.Heap_Overflow_Execution.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmPgWXyxCLBEcTqpXpteX5ZRa5BLhBBMNAJradcPAgxysW/2.Heap_Overflow_Execution.png)

Figure 2\. Program of Figure 1 executed



## 3\. Suggestion

*   Careful in writing a script, take into account of the variable size, and watch for local buffer overflow.
*   Avoid using dangerous functions as gets() and memset(), recommended to use fget() where the input size may be specified.
*   To be safe reducing user privilege when the program is executed may be done (setuid,setgid).
*   Use libsafe to protect important values (prevent overwriting).
*   More verbose compiler where it warn when there's vulnerability on the code.

## 4\. Reference

1.  [http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98587&chapterid=4879](http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98587&chapterid=4879)
2.  [https://en.wikipedia.org/wiki/Stack_(abstract_data_type)](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
3.  [http://www.cprogramming.com/tutorial/computersciencetheory/stack.html](http://www.cprogramming.com/tutorial/computersciencetheory/stack.html)
4.  [https://en.wikipedia.org/wiki/Stack_buffer_overflow](https://en.wikipedia.org/wiki/Stack_buffer_overflow)
5.  [http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html)
6.  [http://etutorials.org/Networking/network+security+assessment/Chapter+13.+Application-Level+Risks/13.5+Heap+Overflows/](http://etutorials.org/Networking/network+security+assessment/Chapter+13.+Application-Level+Risks/13.5+Heap+Overflows/)
7.  [http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98587&chapterid=4880](http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98587&chapterid=4880)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-simple-c-program-demonstrating-heap-buffer-overflow-xzwrjnl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-simple-c-program-demonstrating-heap-buffer-overflow-xzwrjnl?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/my-simple-c-program-demonstrating-heap.html](https://0darkking0.blogspot.com/2021/02/my-simple-c-program-demonstrating-heap.html)
*   [https://0fajarpurnama0.medium.com/my-simple-c-program-demonstrating-heap-buffer-overflow-76f6100b5eef](https://0fajarpurnama0.medium.com/my-simple-c-program-demonstrating-heap-buffer-overflow-76f6100b5eef)
*   [https://0fajarpurnama0.github.io/masters/2020/07/17/simple-c-program-demonstrating-heap-buffer-overflow](https://0fajarpurnama0.github.io/masters/2020/07/17/simple-c-program-demonstrating-heap-buffer-overflow)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/simple-c-program-demonstrating-heap-buffer-overflow](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/simple-c-program-demonstrating-heap-buffer-overflow)
*   [https://steemit.com/engineering/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?r=fajar.purnama](https://steemit.com/engineering/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?r=fajar.purnama)
*   [https://stemgeeks.net/engineering/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?ref=fajar.purnama](https://stemgeeks.net/engineering/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-simple-c-program-demonstrating-heap-buffer-overflow?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-simple-c-program-demonstrating-heap-buffer-overflow](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-simple-c-program-demonstrating-heap-buffer-overflow)
*   [http://0fajarpurnama0.weebly.com/blog/my-simple-c-program-demonstrating-heap-buffer-overflow](http://0fajarpurnama0.weebly.com/blog/my-simple-c-program-demonstrating-heap-buffer-overflow)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/202-my-simple-c-program-demonstrating-heap-buffer-overflow](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/202-my-simple-c-program-demonstrating-heap-buffer-overflow)
*   [https://read.cash/@FajarPurnama/my-simple-c-program-demonstrating-heap-buffer-overflow-a67a3e7c](https://read.cash/@FajarPurnama/my-simple-c-program-demonstrating-heap-buffer-overflow-a67a3e7c)
*   [https://www.uptrennd.com/post-detail/my-simple-c-program-demonstrating-heap-buffer-overflow~ODYxNDE0](https://www.uptrennd.com/post-detail/my-simple-c-program-demonstrating-heap-buffer-overflow~ODYxNDE0)