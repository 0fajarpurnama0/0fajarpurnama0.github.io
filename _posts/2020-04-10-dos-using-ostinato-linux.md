---
layout: post
title: Denial of Service (DOS) on Wifi using Ostinato Linux
categories: pentest
tags: [Linux, DoS, denial of service, wifi, Ostinato]
featuredimage: https://cdn.steemitimages.com/DQmVK4NZ8yQpe2u5oWZLLnibMY5LxRAKjdXVcmnhw3kHGGa/Gambar%201%20interface%20antar%20muka%20Visual%20Basic%206.0.PNG
description: There was no CommView in Linux where I used it to perform DoS. However, I found a similar software called Ostinato and it can work for Dos.
canonicalurl: https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux
---

I will create a separate software installation page.

Install Ostinato packet generator and all updates: [http://software.opensuse.org /download.html?project=home:pstavirs:ostinato&package=ostinato](http://software.opensuse.org/download.html?project=home:pstavirs:ostinato&package=ostinato)

I use Ubuntu 12.04 LTS

_

sudo echo 'deb http://download.opensuse.org/repositories/home:pstavirs:ostinato/xUbuntu_12.04/ /' >> /etc/apt/sources.list

sudo apt-get update

sudo apt-get install ostinato

_

Install wifi-radar, airmon-ng or aircrack, and wireshark.

![https://file.army/i/BY26GDl](https://cdn.steemitimages.com/DQmfWgeFM6uXmyvdCwb37taBzbqiKP3Pot1ZYjG8u4cftba/1%20Open%20wifi-radar%20and%20check%20the%20wifi%20you%20want%20to%20test.png)

Open wifi-radar and check the wifi you want to test. Here my wifi sensor.



For the wireless adapter to be monitored:

_

sudo ifconfig wlan0 is down

sudo iwconfig wlan0 monitor mode

sudo ifconfig wlan0 up

_

If you do this, you cannot connect to the hotspot. To restore as before, do the above but "sudo iwconfig wlan0 managed mode".

![https://file.army/i/BY26lCs](https://cdn.steemitimages.com/DQmYxxXLGmKeXH6K9Y3YM2W1Nb371NsELFBxrP71ZQBWN6k/2%20airmon-ng%20start%20wlan0%20channel%2011.png)

I do something else because I want to use the internet, which is using airmon-ng. "sudo airmon-ng start wlan0 (channel)". I'm channel 11\. Seen to make a virtual device that is mon0\. wlan0 still exists.



![https://file.army/i/BY26hYj](https://cdn.steemitimages.com/DQmbh4zMxRNpxpKbpBPsKRr6ZT6ZYuXLgG5HMQj2jp6CS8y/3%20Open%20wireshark%20sudo%20wireshark%20and%20open%20the%20capture%20option.png)

Open wireshark "sudo wireshark" and open the capture option on the tab.



![https://file.army/i/BY261hk](https://cdn.steemitimages.com/DQmY9CNzHafuLFViAiStujkqzpytZVt9g6g345NHmvvFM5J/4%20Select%20mon0%20or%20wlan0%20if%20it%20is%20monitor%20and%20start.png)

Select mon0 or wlan0 if it is monitor and start.



![https://file.army/i/BY26Msv](https://cdn.steemitimages.com/DQmYhNauAPHBPthSaxGhuiyJRzcvZENrpU4KeSeMSZx55yG/5%20PROBE%20REQUEST%20packages%20hex%20stream.png)

Look for PROBE REQUEST packages or similar on other networks. Right-click, copy, bytes, hexstream.



![https://file.army/i/BY26QjH](https://cdn.steemitimages.com/DQmX1n4M3s4hvGeTLVfm5t1i8cwGxby3dbapNe1ACfNe2MS/6%20ostinato%20sudo%20ostinato.png)

Open the ostinato "sudo ostinato". Click + on the port. Select mon0.



![https://file.army/i/BY26A6f](https://cdn.steemitimages.com/DQmerhq9AQ9bNzYG7DZr9pp2v7FnFsCJAuFAGmbdrGLDwTP/7%20interleaved%20stream.png)

File > port configuration > interleaved stream (to send packets continuously). Right-click on the right screen, add stream. Select the gear for configuration (click 2x). Select advance.



![https://file.army/i/BY26C3I](https://cdn.steemitimages.com/DQmT2qrQTrvfrirKdqohpjNRkU77igD5CZ6vVTeNZUoYsKg/8%20Select%20hexdump.png)

Select hexdump, place it on the right screen and click the button in the middle.



![https://file.army/i/BY26pqV](https://cdn.steemitimages.com/DQmNwbVJv1rFkoQaACfbp8nfbSws7SXTru8dtbbpde8ZSFn/9%2000000%20packet.png)

Select the data protocol on the tab. To copy paste a packet from WireShark, press "Ctrl". Add 00000 ... to the size of the package as you wish.



![https://file.army/i/BY26Fxp](https://cdn.steemitimages.com/DQmVGKnA38ABSuvebrGuQztYcgMVnqAJrV4eBLuj4p3aGv2/10%20stream%20control%20packet%20per%20second.png)

Choose stream control and per packet / sec shipment size (I am 3000). Click the ok button and if there is anything "yes", then click apply.



![https://file.army/i/BY26dpK](https://cdn.steemitimages.com/DQmPrYDx8JRVdmy1MwY8WZX98ucabs1ejhbai2stfeM6r3T/11%20select%20port%20click%20start%20tx.png)

Select the port you want to send (I'm port 2, please try) and click start tx (play button).



![https://file.army/i/BY26fDD](https://cdn.steemitimages.com/DQmTCXtmsgqUxzoto5jKSK6jWt34AoAC9FP4e8Kv3hubSja/12%20wireshark%20many%20packet%20requests%20and%20responses.png)

If it is true on wireshark many packet requests and responses will occur. Other users will see "limited access" alias "!" on the wireless.



## Reference

[WIRELESS HACKING, Efvy Zam.](https://www.goodreads.com/book/show/30254807-buku-sakti-wireless-hacking)

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-xgekmk?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-xgekmk?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux](https://0fajarpurnama0.github.io/pentest/2020/04/10/dos-using-ostinato-linux)
*   [https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-218796aedb83](https://medium.com/@0fajarpurnama0/denial-of-service-dos-on-wifi-using-ostinato-linux-218796aedb83)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-ostinato-linux.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/pentest/dos-using-ostinato-linux.html)
*   [https://0fajarpurnama0.tumblr.com/post/615024546759770112/denial-of-service-dos-on-wifi-using-ostinato](https://0fajarpurnama0.tumblr.com/post/615024546759770112/denial-of-service-dos-on-wifi-using-ostinato)
*   [https://0darkking0.blogspot.com/2020/04/dos-wifi-ostinato-llinux.html](https://0darkking0.blogspot.com/2020/04/dos-wifi-ostinato-llinux.html)
*   [https://hive.blog/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama](https://hive.blog/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/31-denial-of-service-dos-on-wifi-using-ostinato-linux](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/31-denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [https://steemit.com/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama](https://steemit.com/linux/@fajar.purnama/denial-of-service-dos-on-wifi-using-ostinato-linux?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-ostinato-linux](http://0fajarpurnama0.weebly.com/blog/denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-ostinato-linux](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/denial-of-service-dos-on-wifi-using-ostinato-linux)
*   [http://www.teiii.cn/denial-of-service-dos-on-wifi-using-ostinato-linux](http://www.teiii.cn/denial-of-service-dos-on-wifi-using-ostinato-linux)