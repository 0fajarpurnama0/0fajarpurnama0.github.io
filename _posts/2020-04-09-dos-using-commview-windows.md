---
layout: post
title: Denial of Service (DOS) on Wifi using CommView Windows
categories: pentest
tags: [Windows, DOS, denial of service, wifi, CommView]
featuredimage: https://images.hive.blog/DQmcBqNKg3bKHbcT3Hki5yrwoRq1ZGd7pWSxngU3eLp4aVH/Figure%2013.%20Accesspoint%20sends%20a%20lot%20of%20responses.jpg
description: DOS prevents other users from doing activities on the network. Here I will demonstrate DOS on a wifi using CommView for WiFi on Windows.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/10/07/my-undergraduate-electrical-materials-assignment-collection
---

In my opinion DOS is hacking which prevents other users from doing activities on the network. Here I will demonstrate DOS on a wifi using CommView for WIFI on Windows.

## Downloading CommView

Download the program first and install. It is recommended on the developer's website [http://www.tamos.com](http://www.tamos.com) .


![Figure 1. Downloading the CommView for Wifi 6.3 software.jpg](https://images.hive.blog/DQmf3iGWoFQU7eth3szNBwNt9movuDJvnAxJpPWUKmdvvdx/Figure%201.%20Downloading%20the%20CommView%20for%20Wifi%206.3%20software.jpg)


Figure 1\. Downloading the CommView for Wifi 6.3 software



## Installing CommView

Run the program that you just downloaded or extracted immediately.


![Figure 2. Running Setup.exe CommView.jpg](https://images.hive.blog/DQmbBfJyX2tqNAHNfGeTguaRjppQbqLzm2nLL9JbgBjTvc8/Figure%202.%20Running%20Setup.exe%20CommView.jpg)


Figure 2\. Running Setup.exe CommView


![Figure 3. Installing CommView, follow the command during installation.jpg](https://images.hive.blog/DQmUKu68HS1v4CoczB4nnauSSbpVDQTAgPpYLjbwzkmTXsB/Figure%203.%20Installing%20CommView,%20follow%20the%20command%20during%20installation.jpg)


Figure 3\. Installing CommView, follow the command during installation.



After installing the software you need to install the driver from the existing commview in the packet installer (usually). Select the wireless adapter that suits you. (if you don't support it, you can't). If true, the device manager will look like this:


![Figure 4. There is the words commview on the wireless adapter.jpg](https://images.hive.blog/DQmZe5YQFM6xMwUB1DzubaLEapJkp6SiWUDeW2KwsunYRUv/Figure%204.%20There%20is%20the%20words%20commview%20on%20the%20wireless%20adapter.jpg)


Figure 4\. There is the words "commview" on the wireless adapter



## Starting DOS on a Wifi


![Figure 5. Display CommView, open commview for wifi.jpg](https://images.hive.blog/DQmdJQM5nSMkpBktxvamU9fqrVekS3o8qXwyKxS7RHw4g7z/Figure%205.%20Display%20CommView,%20open%20commview%20for%20wifi.jpg)


Figure 5\. Display CommView, open commview for wifi (don't connect to a wifi first).


![Figure 6. Select Channel 11 to capture packets.jpg](https://images.hive.blog/DQmYUqPXqxP1BixjtQpvEVmd2SioaPet1ehV5Hdkzmn3JJK/Figure%206.%20Select%20Channel%2011%20to%20capture%20packets.jpg)


Figure 6\. Select Channel 11 to capture packets. Click the "Start Capture" button on the tab (looks like the "play" button), click the start scanning button, then select the channel (for which you want to capture wifi) to capture the packet, then click the capture button.


![Figure 7. Open the packet generator.jpg](https://images.hive.blog/DQmdv7U8RFf8FtMhZRec5YNywvSK6eQ8By3thX3VVYSG2vy/Figure%207.%20Open%20the%20packet%20generator.jpg)


Figure 7\. Open the packet generator, click the packet tab to see, while waiting to open the packet generator in "tools > packet generator".


![Figure 8. Pressing the show template button.jpg](https://images.hive.blog/DQmQPKdbTg4uZm6vZ6TjMgfUq2NkEzEXnQrsr4ngj3BEQMr/Figure%208.%20Pressing%20the%20show%20template%20button.jpg)


Figure 8\. Pressing the show template button, click the "show template" button located in the lower-left part of the packet generator.


![Figure 9. Looking for a request packet.jpg](https://images.hive.blog/DQmdopETccSiQebBtvyJKmDk9iXvfZSUEJ7Gqk7H7T76tDA/Figure%209.%20Looking%20for%20a%20request%20packet.jpg)


Figure 9\. Looking for a request packet, look for the "Request" packet addressed to the access point. Here my packet is named "MNGT \ PROBE REQ". The name of the packet bias is different, I suggest looking for something called REQ and trial and error. You need to study the field of telecommunications for more knowledge.


![Figure 10. Drag to the packet generator template.jpg](https://images.hive.blog/DQmQReLbYQFKxCkBRif2w8kUDGScyUKmgNpxBspb4k7wmJ4/Figure%2010.%20Drag%20to%20the%20packet%20generator%20template.jpg)


Figure 10\. Drag to the packet generator template, drag and drop (click, hold, place) on the template. I renamed the packet by right-clicking "rename".


![Figure 11. Capture again, here I do stop capture.jpg](https://images.hive.blog/DQmUWBtYWvMLLepKq6296pBHgwVbBGdP8Nnrgy4rY177XJN/Figure%2011.%20Capture%20again,%20here%20I%20do%20stop%20capture.jpg)


Figure 11\. Capture again, here I do "stop capture" so it is easy to choose a packet. Next you will send this packet to your access point service. Here I change the packet size to 200, sending 3000 packets / second continuously. In order to click on the "send" button you have to start "capture" again on that channel.


![Figure 12. Capturing the packet again on channel 11.jpg](https://images.hive.blog/DQmNmzwrKsGYvUxnzGURaVJMFJBFEX3PPGshdrgtRoTPt7G/Figure%2012.%20Capturing%20the%20packet%20again%20on%20channel%2011.jpg)


Figure 12\. Capturing the packet again on channel 11\.


![Figure 13. Accesspoint sends a lot of responses.jpg](https://images.hive.blog/DQmcBqNKg3bKHbcT3Hki5yrwoRq1ZGd7pWSxngU3eLp4aVH/Figure%2013.%20Accesspoint%20sends%20a%20lot%20of%20responses.jpg)


Figure 13\. Access point sends a lot of responses, if you are right then you will receive a packet of very correct and continuous "Response" packets. Here the name "MNGT / PROBE RESP". I see my colleagues can not access the Internet or download.



## Opinion

I think that happened because I sent a lot of "requests" (requests) to access the network and responded with "respond" (responses). Because access point is too busy sending "responses" to me, I don't have time to do anything else. The burden on access point becomes very much or even too much.

## Reference

[WIRELESS HACKING, Efvy Zam.](https://www.goodreads.com/book/show/30254807-buku-sakti-wireless-hacking)

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-xrvvnl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-xrvvnl?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/09/dos-using-commview-windows](https://0fajarpurnama0.github.io/pentest/2020/04/09/dos-using-commview-windows)
*   [https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-745bad254de3](https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-commview-windows-745bad254de3)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-commview-windows.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-commview-windows.html)
*   [https://0fajarpurnama0.tumblr.com/post/614925923008069632/denial-of-service-dos-on-wifi-using-commview](https://0fajarpurnama0.tumblr.com/post/614925923008069632/denial-of-service-dos-on-wifi-using-commview)
*   [https://0darkking0.blogspot.com/2020/04/denial-of-service-wifi-commview-windows.html](https://0darkking0.blogspot.com/2020/04/denial-of-service-wifi-commview-windows.html)
*   [https://hive.blog/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama](https://hive.blog/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/30-denial-of-service-dos-on-wifi-using-commview-windows](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/30-denial-of-service-dos-on-wifi-using-commview-windows)
*   [https://steemit.com/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama](https://steemit.com/windows/@fajar.purnama/denial-of-service-dos-on-wifi-using-commview-windows?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-commview-windows](http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-commview-windows)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-commview-windows](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-commview-windows)
*   [http://www.teiii.cn/denial-of-service-dos-on-wifi-using-commview-windows](http://www.teiii.cn/denial-of-service-dos-on-wifi-using-commview-windows)