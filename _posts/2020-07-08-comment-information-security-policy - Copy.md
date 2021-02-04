---
layout: post
title: My Comments on Information Security Policy when I was a young student
categories: masters
tags: [technology, information, security, policy, assignment]
featuredimage: https://images.blurt.buzz/DQmd2wnUBE1uyhFsMTjieea95Js33uqnUManmyWd9DPJ6Sa/0.featured-image-summary.png
description: The lecture explained the policies when facing vulnerabilities in the kernel, server program, and server common gateway interface (CGI).
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/08/comment-information-security-policy
---
![0.featured-image-summary.png](https://images.blurt.buzz/DQmd2wnUBE1uyhFsMTjieea95Js33uqnUManmyWd9DPJ6Sa/0.featured-image-summary.png)

The information security policies that were explained on this lecture are policies when handling vulnerabilities. I strongly agree to this policy due to my past experience in modifying systems. Most of the time I broke the system and the best way after that is to rebuild the system from the beginning. In summary the policies on this lecture is mainly about identifying the vulnerabilities and plan the action that must be done, backup the system and make sure it can be restored, and finally we may modify the system. This lectures explained the policies when facing vulnerabilities in the kernel, server program, and server common gateway interface (CGI). This is the third assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.



## 1\. Kernel Vulnerabilities

![1.kernel-module.png](https://images.blurt.buzz/DQmfGVBqHesWt4zEC3Xh5j3JoEqYVURHt45FdT7mX7pHX2N/1.kernel-module.png)

*   Design of the kernel itself.
*   Drivers embedded in the kernel.
*   The driver's module.

If it is the kernel design then we have no choice but to modify the whole system. The same applies if the driver is directly embedded in the kernel. If it is only the driver module then we can only focus on the module.



## 2\. Server Program and CGI Vulnerabilities

![2.server-cgi.png](https://images.blurt.buzz/DQmWZbAgSaPUAjRWubLtgNU6D9VnMdntd4FPpm2A17rZxbT/2.server-cgi.png)

*   Program's and Common Gateway Interface (CGI)'s design.
*   Misconfiguration.
*   Problem on some modules.

For the design itself we must reprogram the whole thing. If it's due to misconfiguration for example allows code injections, and unintentionally leave an open port, we reconfigure the configuration usually by editing the configuration file. If there's problem on some modules then just focus on the modules.



## 3. Common Steps For Handling Previous Vulnerabilities

1.  Identify the vulnerability and plan the modification beforehand.
2.  Backup the system and make sure it can be restored.
3.  It's suggested to perform simulation beforehand on similar environment, using virtual machine for example.
4.  Finally perform modification. For beginners the step usually taken is update the system to the latest, after this process experts tends to manually modify. It's suggested to leave explanations on modified parts, for example leaving a comment on a configuration script that contain informations of what the modification is and when it was modified.

If not taking the steps above then there's a risked in rebuilding the system from the scratch since there's a chance in breaking the system when performing modification.

## 4\. Some of My Comments and Experiences

My comment is that information security policy becomes necessary at the era of where we live know. As my first experience working at a corporation called Toshiba Tec, informations are very crucial. Just leaking a bit information outside the company can greatly damage both its image and income. There are informations that are highly classified that only the top management have authorization to access. Informations can be in form of physical substance (paper for example), but mostly today in form of electronics (word processor, spread sheet, image, video), that it is forbidden the use of hard drive on the companies private computer. With today's technology it is not unusual that access and exchanges of electronic information relies on computer networks.

In my company those in the information system division are responsible in handling the technology of electronic exchange at the same time the privacy of the exchange that informations must not leak outside of the company. They create a set of information security rule that was approved by the top managements of the company (a policy was created). To defend against outside threats, firewall, intrusion detection system, and antivirus were implemented. The networks were also strictly configure of who have the authentication to access. The division is also responsible to protect from the inside whether to prevent information leakage or to prevent information damage. In the policy is stated that employees are forbidden the use of outside electronic devices to connect to the network. A strict monitoring is installed on the IT infrastructure to record the time, and the person who access the information. Also the division is responsible in socializing the information security policy, especially of what both employers and employees are allowed to do and not do.

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-comments-on-information-security-policy-when-i-was-a-youn-xgpvqxy?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-comments-on-information-security-policy-when-i-was-a-youn-xgpvqxy?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/01/my-comments-on-information-security.html](https://0darkking0.blogspot.com/2021/01/my-comments-on-information-security.html)
*   [https://0fajarpurnama0.medium.com/my-comments-on-information-security-policy-when-i-was-a-young-student-d44e0fc92595](https://0fajarpurnama0.medium.com/my-comments-on-information-security-policy-when-i-was-a-young-student-d44e0fc92595)
*   [https://0fajarpurnama0.github.io/masters/2020/07/08/comment-information-security-policy](https://0fajarpurnama0.github.io/masters/2020/07/08/comment-information-security-policy)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/comment-information-security-policy](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/comment-information-security-policy)
*   [https://steemit.com/technology/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?r=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-comments-on-information-security-policy-when-i-was-a-young-student?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-comments-on-information-security-policy-when-i-was-a-young-student](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-comments-on-information-security-policy-when-i-was-a-young-student)
*   [http://0fajarpurnama0.weebly.com/blog/my-comments-on-information-security-policy-when-i-was-a-young-student](http://0fajarpurnama0.weebly.com/blog/my-comments-on-information-security-policy-when-i-was-a-young-student)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/193-my-comments-on-information-security-policy-when-i-was-a-young-student](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/193-my-comments-on-information-security-policy-when-i-was-a-young-student)
*   [https://read.cash/@FajarPurnama/my-comments-on-information-security-policy-when-i-was-a-young-student-c7a71bdf](https://read.cash/@FajarPurnama/my-comments-on-information-security-policy-when-i-was-a-young-student-c7a71bdf)
*   [https://www.uptrennd.com/post-detail/my-comments-on-information-security-policy-when-i-was-a-young-student~ODU2NzU0](https://www.uptrennd.com/post-detail/my-comments-on-information-security-policy-when-i-was-a-young-student~ODU2NzU0)