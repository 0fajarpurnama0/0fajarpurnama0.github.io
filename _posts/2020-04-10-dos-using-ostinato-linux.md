---
layout: post
title: Denial of Service (DOS) on Wifi using Ostinato Linux
categories: pentest
tags: [Linux, DoS, denial of service, wifi, Ostinato]
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

![https://file.army/i/BY26GDl](https://404store.com/2020/04/11/1Openwifi-radarandcheckthewifiyouwanttotest.png)

Open wifi-radar and check the wifi you want to test. Here my wifi sensor.



For the wireless adapter to be monitored:

_

sudo ifconfig wlan0 is down

sudo iwconfig wlan0 monitor mode

sudo ifconfig wlan0 up

_

If you do this, you cannot connect to the hotspot. To restore as before, do the above but "sudo iwconfig wlan0 managed mode".

![https://file.army/i/BY26lCs](https://404store.com/2020/04/11/2airmon-ngstartwlan0channel11.png)

I do something else because I want to use the internet, which is using airmon-ng. "sudo airmon-ng start wlan0 (channel)". I'm channel 11\. Seen to make a virtual device that is mon0\. wlan0 still exists.



![https://file.army/i/BY26hYj](https://404store.com/2020/04/11/3Openwiresharksudowiresharkandopenthecaptureoption.png)

Open wireshark "sudo wireshark" and open the capture option on the tab.



![https://file.army/i/BY261hk](https://404store.com/2020/04/11/4Selectmon0orwlan0ifitismonitorandstart.png)

Select mon0 or wlan0 if it is monitor and start.



![https://file.army/i/BY26Msv](https://404store.com/2020/04/11/5PROBEREQUESTpackageshexstream.png)

Look for PROBE REQUEST packages or similar on other networks. Right-click, copy, bytes, hexstream.



![https://file.army/i/BY26QjH](https://404store.com/2020/04/11/6ostinatosudoostinato.png)

Open the ostinato "sudo ostinato". Click + on the port. Select mon0.



![https://file.army/i/BY26A6f](https://404store.com/2020/04/11/7interleavedstream.png)

File > port configuration > interleaved stream (to send packets continuously). Right-click on the right screen, add stream. Select the gear for configuration (click 2x). Select advance.



![https://file.army/i/BY26C3I](https://404store.com/2020/04/11/8Selecthexdump.png)

Select hexdump, place it on the right screen and click the button in the middle.



![https://file.army/i/BY26pqV](https://404store.com/2020/04/11/900000packet.png)

Select the data protocol on the tab. To copy paste a packet from WireShark, press "Ctrl". Add 00000 ... to the size of the package as you wish.



![https://file.army/i/BY26Fxp](https://404store.com/2020/04/11/10streamcontrolpacketpersecond.png)

Choose stream control and per packet / sec shipment size (I am 3000). Click the ok button and if there is anything "yes", then click apply.



![https://file.army/i/BY26dpK](https://404store.com/2020/04/11/11selectportclickstarttx.png)

Select the port you want to send (I'm port 2, please try) and click start tx (play button).



![https://file.army/i/BY26fDD](https://404store.com/2020/04/11/12wiresharkmanypacketrequestsandresponses.png)

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