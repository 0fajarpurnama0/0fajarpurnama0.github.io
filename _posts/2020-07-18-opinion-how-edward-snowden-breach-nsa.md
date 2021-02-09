---
layout: post
title: My Opinion of How Edward Snowden Breached the NSA when I was a Young Student
categories: masters
tags: [technology, computers, Edward Snowden, NSA, breach, assignment]
featuredimage: https://images.blurt.buzz/DQmP7SwQBTHYoVszzMLdSMJ6tCLDXTuLcczCNnhHy6oFZjJ/how-edward-snowden-breached-nsa.png
description: There are mainly 3 steps of breaching NSA using kill chain analysis which are researching the target, initial intrusion, and exfiltration.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/18/opinion-how-edward-snowden-breach-nsa
---
![how-edward-snowden-breached-nsa.png](https://images.blurt.buzz/DQmP7SwQBTHYoVszzMLdSMJ6tCLDXTuLcczCNnhHy6oFZjJ/how-edward-snowden-breached-nsa.png)

## Note

This is the thirteenth assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

On the 20th century we have seen news of leaked official governmental documents by Wikileaks for example [1]. One of the largest and latest leaked is on period 2013 – 2014 where thousands of classified documents belonging to Nation Security Agency (NSA) in United State of America (USA) leaked to all over The World. Initially it was breached by NSA's network administrator at that time Edward Snowden, and the documents were handed to journalist Glenn Greenwald and filmmaker Laura Poitras. The documents mainly exposed about the mass surveillance and its future plan to monitor everything by NSA. For example direct access to American's Google and Yahoo accounts, record of all phone conversations and everything done on the Internet records, harvesting millions of emails and contacts, spying users of second life and world of warcraft alike, and plan on spreading malware to connect to their fake facebook server in order to intercept connection. All of it can be described by on of the title of Greenwald's book entitled “No Place To Hide” which states the NSA's objective to collect it all, process it all, exploit it all, partner it all, sniff it all, and know it all. [2]

The main question on this essay is how did Edward Snowden breach the NSA? The simple answer is he used key and certificate based attack. The world of cyber war had evolved from the motivation of disruption, cyber crime, cyber espionage, and now destruction of trust and creditability that could lead a company to bankrupt. The first threat the cyber world have faced are worms and virus in 1997, it then evolves to for-profit malwares in 2004, next is advance persistent threat (APT) in 2007, finally 2010 key and certificate based attacks were introduced. Edward Snowden simply following the trend (using key and certificate based attack) and made his breach in 2013\. [3]

## 2\. How Snowden Breached

The video [4] explained that there are mainly 3 key steps of Edward Snowden breaching NSA using kill chain analysis:

### 2.1 Researching the Target

Other names for this step in the world of hacking and penetration testing is information gathering or reconnaissance. Snowden as a system administrator was granted common access card (CAC) that was preloaded cryptographic keys and digital certificates thus he had authorized basic access. When he was in the CIA before he already tried the limits of his administrator privileged to gain unauthorized access to classified information, meaning that he was able to search the locations of each informations.

### 2.2 Initial Intrusion

Edward Snowden doesn't have a server or PCs connected to NSA network, only a shell like any other external hacker who only achieve initial intrusion. In other words he's in the phase after scanning and initial exploitation but without privileged to classified data. He used secure shell (SSH) in his daily job which means he can get the SSH key. He also hold SSH account of his colleagues, meaning he can also extract those keys. With many keys in his possession, he had the capabilities to fabricate his own keys and certificates. With these he was able to gain administrative privileged to classified data. Like those who are knowledgeable in APTs he was able to cover his track and not sounding the alarm.

### 2.3 Exfiltration

This step can be quite new for beginner hacker or penetration tester where the 4 general steps (1) information gathering (reconnaissance) (2) scanning (3) exploitation (4) maintaining access (backdoor), this step can be put after (3) or (4). Some can say this is one of those stealth method. This step is after Snowden able to access the data but he cannot simply copy it into a thumb drive or some method alike which will alert the system. He needs to retrieve the data quietly. What he did was encrypted the data based on his own fabricated keys and certificates and send them over the network.

## 3\. The Problem

The site [5] claims that the main problem is on the awareness of key and certificate based attacks. If the use of keys and certificates were monitored, detection and prevention of abnormality on the use of those keys and certificates were implemented, Snowden attempts can be detected or prevented on the 3rd step. Since NSA was not aware of keys and certificates, Snowdens encrypted transmission of the classified data after the intrusion was treated as safe on the network.

## 4\. Reference

1.  [http://zbnnr7qzaxlk5tms.onion](http://zbnnr7qzaxlk5tms.onion)
2.  [https://en.wikipedia.org/wiki/Edward_Snowden](https://en.wikipedia.org/wiki/Edward_Snowden)
3.  [https://www.venafi.com/blog/post/evolution-of-cyber-attacks-infographic](https://www.venafi.com/blog/post/evolution-of-cyber-attacks-infographic)
4.  [https://youtu.be/2_YHAudAawM](https://youtu.be/2_YHAudAawM)
5.  [https://www.venafi.com/blog/post/deciphering-how-edward-snowden-breached-the-nsa](https://www.venafi.com/blog/post/deciphering-how-edward-snowden-breached-the-nsa)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-xkydjzl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-xkydjzl?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/my-opinion-of-how-edward-snowden.html](https://0darkking0.blogspot.com/2021/02/my-opinion-of-how-edward-snowden.html)
*   [https://0fajarpurnama0.medium.com/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student-b3b6643a5de2](https://0fajarpurnama0.medium.com/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student-b3b6643a5de2)
*   [https://0fajarpurnama0.github.io/masters/2020/07/18/opinion-how-edward-snowden-breach-nsa](https://0fajarpurnama0.github.io/masters/2020/07/18/opinion-how-edward-snowden-breach-nsa)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/opinion-how-edward-snowden-breach-nsa](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/opinion-how-edward-snowden-breach-nsa)
*   [https://steemit.com/technology/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?r=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student)
*   [http://0fajarpurnama0.weebly.com/blog/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student](http://0fajarpurnama0.weebly.com/blog/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/203-my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/203-my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student)
*   [https://read.cash/@FajarPurnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student-ec74e382](https://read.cash/@FajarPurnama/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student-ec74e382)
*   [https://www.uptrennd.com/post-detail/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student~ODYxNzQ1](https://www.uptrennd.com/post-detail/my-opinion-of-how-edward-snowden-breached-the-nsa-when-i-was-a-young-student~ODYxNzQ1)