---
layout: post
title: Having Intrusion Detection System Despite Having Anti Virus and Firewall
categories: masters
tags: [technology, computers, antivirus, firewall, intrusion detection system, assignment, malware]
featuredimage: https://images.blurt.buzz/DQmUDCF8BPqrZBXVvKjxaqB2x9kXxiohHzHHenXQMTKU1Uh/1.av-vs-fw-vs-ids.png
description: Antivirus handles malware inside devices, firewall filters packet based on identity, and intrusion detection system find malware in packets.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/07/10/intrusion-detection-system-despite-antivirus-firewall
---
My comment on why need an intrusion detection system (IDS) is to prevent intruders from the system. I agree on using IDS, with the more famous, larger, and more important of a corporation's or institution's network, the more IDS is needed. As we enjoy the advance in information communication technology the threat level rises as well. We are no longer on the level of just using the technology but we must now include the security aspect as well. Different from the past our reliance to using the network is high. Almost everyone today store, seek, and exchange informations on The Internet. For us regular users is already a hindrance if we can't use the service, and a stab on the chest if we lose our data. For big companies it's a loss in profit, loss in trust, ultimately could result in destruction of the company. For example when a company makes a deal of $100.000 with the vendor via online, but an abnormality network exist whether infected by a malware, or someone exploits the vulnerability and adds an extra “zero” on the value from $100.000 to $1.000.000\. That will result a great loss for the company. This is the fifth assignment from my Masters Advanced Network Security Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

![2.melissamaya.jpg](https://images.blurt.buzz/DQmdKAoUpGvEtU6YV4ZAFENrQD5k6VefLnoG7EDxrYazJLr/2.melissamaya.jpg)

Today there are many security issues on the network. It's already been 16 years since the Melissa worm epidemic on 1999\. Surely threat and security since had greatly advance. For individuals with their personal computer (PC) it's common for them to have anti virus (AV) software to defend themselves against virus' and other malwares. For network administrators firewall is an essential to be configured on the network. Even so there are still missing pieces in AV and firewall. AV scans files, scripts that contains certain pattern of a virus and quarantine it. Firewall configures the authorizations of who can access the network. Then even for a beginner like that have Metasploit could exploit the vulnerability on MS08-067 of late Windows XP if I were in the network. Pure AV will not detect this event because I'm not using a virus to infect a file. A firewall checks the source and the destination of the traffic but cannot analyze of what is inside. The technology the could cope with this is an IDS.

![3.nids-hids-ips.png](https://images.blurt.buzz/DQmSvoiGHexn7qDSC2XazG9XnQS89MSWUqgbvVz51i1n1ex/3.nids-hids-ips.png)

IDS can be network IDS (NIDS) or host IDS (HIDS). With NIDS equipped on the network which analyzes the packet that comes in and out of the network can detect the exploit that I just execute. IDS is equipped with packet capturer, in Linux it is Libcap. It can also analyze packets, protocols just like Wireshark, formerly known as Ethercap. Then the unique feature of IDS that it can identify known attack patterns when analyzing the packet. It will then produce an alert output that I'm exploiting port 445 SMB on Windows XP. IDS only alerts suspicious activities, if we want it to take action on the suspicious activity, we'd want to use intrusion prevention system (IPS). IPS will act after detection. To put it short, we insert and update known attack patterns in IDS, then it will compare whether the packet pattern match with the attack patterns. IDS will only alert, but IPS will for example block the packet if it matches the attack patterns. A HIDS or HIPS resides on the one host only, a server, or a system. It will monitor the incoming packets and running application whether they are following the policy or not. In other words the HIDS had an ideal expectation of how the application runs and what happens after the packets are received, which then will compare its expectation to how the system is running in reality. For example HIDS will alert when a Firefox browser attemps to create an admin account, while normally Firefox should only function as a browser. A person like me can be behind the scene exploiting the vulnerability of outdated Firefox.

![1.av-vs-fw-vs-ids.png](https://images.blurt.buzz/DQmUDCF8BPqrZBXVvKjxaqB2x9kXxiohHzHHenXQMTKU1Uh/1.av-vs-fw-vs-ids.png)

I can conclude that AV and firewall is not enough on a large network because they are not enough to cope when attack patterns are in the network packets. AV and firewall doesn't analyze network packets but IDS or IPS does. That is why I commented that I agree in using IDS or IPS.

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/having-intrusion-detection-system-despite-having-anti-virus-xervwqd?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/having-intrusion-detection-system-despite-having-anti-virus-xervwqd?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/02/having-intrusion-detection-system.html](https://0darkking0.blogspot.com/2021/02/having-intrusion-detection-system.html)
*   [https://0fajarpurnama0.medium.com/having-intrusion-detection-system-despite-having-anti-virus-and-firewall-9dab39221d8](https://0fajarpurnama0.medium.com/having-intrusion-detection-system-despite-having-anti-virus-and-firewall-9dab39221d8)
*   [https://0fajarpurnama0.github.io/masters/2020/07/10/intrusion-detection-system-despite-antivirus-firewall](https://0fajarpurnama0.github.io/masters/2020/07/10/intrusion-detection-system-despite-antivirus-firewall)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/intrusion-detection-system-despite-antivirus-firewall](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/intrusion-detection-system-despite-antivirus-firewall)
*   [https://steemit.com/technology/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?r=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/having-intrusion-detection-system-despite-having-anti-virus-and-firewall](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/having-intrusion-detection-system-despite-having-anti-virus-and-firewall)
*   [http://0fajarpurnama0.weebly.com/blog/having-intrusion-detection-system-despite-having-anti-virus-and-firewall](http://0fajarpurnama0.weebly.com/blog/having-intrusion-detection-system-despite-having-anti-virus-and-firewall)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/195-having-intrusion-detection-system-despite-having-anti-virus-and-firewall](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/195-having-intrusion-detection-system-despite-having-anti-virus-and-firewall)
*   [https://read.cash/@FajarPurnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall-0d3ebde8](https://read.cash/@FajarPurnama/having-intrusion-detection-system-despite-having-anti-virus-and-firewall-0d3ebde8)
*   [https://www.uptrennd.com/post-detail/having-intrusion-detection-system-despite-having-anti-virus-and-firewall~ODU4Mjgx](https://www.uptrennd.com/post-detail/having-intrusion-detection-system-despite-having-anti-virus-and-firewall~ODU4Mjgx)