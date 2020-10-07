---
layout: post
title: Bypass Censorship By Proxy
categories: internet
tags: [proxy, squid, Windows 7, Linux, Android, Server, Kali, censorship resistance]
featuredimage: https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmSY1WG1zAcg4T1iK2qKbD76hwSeLqZs17QouwJAvysUuv/Figure%200.%20animation%20of%20how%20I%20see%20proxy%20works.gif
description: Instead of going straight ahead to the destination address the packets turn around to the proxy server and processed there before going to the origin.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy
---

![https://file.army/i/BYVdWMZ](https://404store.com/2020/04/19/Figure0.animationofhowIseeproxyworks.gif)

Figure 0\. animation of how I see proxy works.



## Description

Instead of going straight ahead to the destination address the packets turns around to the proxy server and processed there before going to the original destination. I use it because the connection in my country here doesn't allow direct contact with certain sites, in short, blocked or censored. Ofcourse it won't work also if the destination is blocked by the proxy server or to the proxy server itself is blocked.

## Borrowing Web Proxy

Borrowing a web proxy is the next simple step to changing DNS. In this section is posted not the technical stuff but introduce web proxies available on the web. Below are steps of example web proxies or skip and go further below to watch the video.

![https://file.army/i/BYVd343](https://404store.com/2020/04/19/Figure1.Openbrowserthensearchengine.png)

Figure 1\. With internet connection open your browser and go to a search engine, here I used Google.



![https://file.army/i/BYVdkJq](https://404store.com/2020/04/19/Figure2.Typewebproxyorsomethingsimilarinthesearchbar.png)

Figure 2\. Type web proxy or something similar in the search bar.



![https://file.army/i/BYVdo9F](https://404store.com/2020/04/19/Figure3.Pickonesitethatoffersuseofwebproxy.png)

Figure 3\. Pick one site that offers use of web proxy for example [freeproxy](https://freeproxy.win/).



![https://file.army/i/BYVdrOe](https://404store.com/2020/04/19/Figure4.Typethesiteyouwanttogoto.png)

Figure 4\. Type the site you want to go to.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/borrow-web-proxy-example/9d82e2dd7d1810d5c1db94086aa1d8dff1360241" allowfullscreen=""></iframe></div>

## Borrowing Network Proxy

While web proxies are hosted on webpages as interfaces, netwrok proxies are usually in form of IP addresses and ports. You need to find your proxy configuration in your browsers or operating systems to input the proxies' IP addresses and ports. Below are examples in Windows:

![https://file.army/i/BYVdsW5](https://404store.com/2020/04/19/Figure5.Openyourbrowserandsearchforproxylistinsearchengine.png)

Figure 5\. Open your browser and search for proxy list in search engine.



![https://file.army/i/BYVdJHA](https://404store.com/2020/04/19/Figure6.Pickonesitethatoffersuseofwebproxyforexample.png)

Figure 6\. Pick one site that offers use of web proxy for example [hidemyname](https://hidemy.name/en/proxy-list/).



![https://file.army/i/BYVdbS4](https://404store.com/2020/04/19/Figure7.PickoneserveritsIPaddressandportnotallmightworksoyoumayhavetotryonebyone.png)

Figure 7\. Pick one server (it's IP address and port), not all might work so you may have to try one by one.



![https://file.army/i/BYV0AbQ](https://404store.com/2020/04/19/Figure8.firefoxproxyconfigurationmenu.png)

Figure 8\. Here I set in my global Internet Connection. Make sure to set your browser use "system settings" under somewhere around > "option" > "network" > "setting" under connection, here also if you want to use the proxy server for browser only.



![https://file.army/i/BYVdn0n](https://404store.com/2020/04/19/Figure9.Networkandsharingcenter.png)

Figure 9\. To use it global go to "network and sharing center" (follow my previous tutorial if you can't find where it is) > "internet option" > "connections" > "LAN Setting" > "use proxy server", then input the IP address and port. You can to advance for more features.



If you want to set them through command line (cmd) then try the following commands:

<pre>set HTTP_PROXY=http://proxy_userid:proxy_password@proxy_ip:proxy_port
set FTP_PROXY=%HTTP_PROXY%
set HTTPS_PROXY=%HTTP_PROXY%
</pre>

Set them empty if you want to stop using proxy:

<pre>set HTTP_PROXY=
set FTP_PROXY=
set HTTPS_PROXY=
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/borrowing-proxy/4fd1d7e2f7b1d4ca6daf4e4827949670c5448fa8" allowfullscreen=""></iframe></div>

## Setting Proxy in Linux

<div class="video-container"><iframe src="https://youtube.com/embed/i-mgniYxPpw" allowfullscreen=""></iframe></div>

![https://file.army/i/BYVd251](https://404store.com/2020/04/19/Figure10.findyournetworkmanagerfromwidget.jpg)

Figure 10\. find your network manager from widget.



![https://file.army/i/BYVdc87](https://404store.com/2020/04/19/Figure11.orfindnetworkmanagerfromsettingsandpressgearondesiredprofile.jpg)

Figure 11\. or find network manager from settings and press gear on desired profile.



![https://file.army/i/BYVd5Ms](https://404store.com/2020/04/19/Figure12.choosemanualnetworkproxyandputtheipaddressandport.jpg)

Figure 12\. choose manual network proxy and put the ip address and port.



<div class="video-container"><iframe src="https://youtube.com/embed/sfBng2IKTsw" allowfullscreen=""></iframe></div>

If you want to do it from terminal, then write the following into "/etc/environment":

<pre>http_proxy="http://<username>:<password>@<hostname>:<port>/"
https_proxy="http://<username>:<password>@<hostname>:<port>/"
ftp_proxy="http://<username>:<password>@<hostname>:<port>/"
no_proxy="localhost,127.0.0.1,::1"</port> </hostname></password></username></port></hostname></password></username></port></hostname></password></username></pre>

## Setting Proxy in Android

![https://file.army/i/BYVdNal](https://404store.com/2020/04/19/Figure13.opensettings.jpg)

Figure 13\. open settings.



![https://file.army/i/BYVdg9j](https://404store.com/2020/04/19/Figure14.chooseconnections.jpg)

Figure 14\. choose connections.



![https://file.army/i/BYVdqOk](https://404store.com/2020/04/19/Figure15.choosewifiormobilenetwork.jpg)

Figure 15\. choose wifi or mobile network.



![https://file.army/i/BYVdtkv](https://404store.com/2020/04/19/Figure16.ifyouchoosewifithenlongpressoneofthehotspotthenchoosemanagenetworksettings.jpg)

Figure 16\. if you choose wifi then long press one of the hotspot then choose manage network settings.



![https://file.army/i/BYVdHHH](https://404store.com/2020/04/19/Figure17.chooseadvance.jpg)

Figure 17\. choose advance.



![https://file.army/i/BYVdUSf](https://404store.com/2020/04/19/Figure18.choosestaticthensetproxy.jpg)

Figure 18\. choose static the set proxy.



![https://file.army/i/BYVdiFI](https://404store.com/2020/04/19/Figure19.ifyoumobilenetworkthengotoaccesspoint.jpg)

Figure 19\. if you mobile network then go to access point.



![https://file.army/i/BYVdj5V](https://404store.com/2020/04/19/Figure20.chooseormakeyourprofile.jpg)

Figure 20\. choose or make your profile.



![https://file.army/i/BYVf98p](https://404store.com/2020/04/19/Figure21.findandsetproxy.jpg)

Figure 21\. find and set proxy.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypassing-censorship-through-my-setup/453274f03aa85947a81b533d0be0fd280750901d" allowfullscreen=""></iframe></div>

## Building Proxy Server Linux

I used "squid" as my proxy server on Debian Linux. Install squid server:

<pre>sudo apt install squid
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.original
</pre>

edit "/etc/squid/squid.conf".

Basic setup:

*   http_port
*   acl
*   http_access

authenticated setup:

<pre>auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid3/passwords
auth_param basic realm proxy
acl authenticated proxy_auth REQUIRED
http_access allow authenticated
</pre>

Restart squid server:

<pre>sudo htpasswd -c /etc/squid3/passwords username_you_like
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/installing-basic-squid-proxy-server/c60dd1bf44ac01f0748e2d3f4b4240d26ad6a20d" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-proxy-xdeljy?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-proxy-xdeljy?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy](https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-proxy-6ef482ec5d33](https://medium.com/@0fajarpurnama0/bypass-censorship-by-proxy-6ef482ec5d33)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-proxy](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-proxy)
*   [https://0fajarpurnama0.tumblr.com/post/615753022649352192/bypass-censorship-by-proxy](https://0fajarpurnama0.tumblr.com/post/615753022649352192/bypass-censorship-by-proxy)
*   [https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-web-proxy.html](https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-web-proxy.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/35-bypass-censorship-by-proxy](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/35-bypass-censorship-by-proxy)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-proxy?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-proxy](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-proxy)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-proxy](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-proxy)
*   [http://www.teiii.cn/bypass-censorship-by-proxy](http://www.teiii.cn/bypass-censorship-by-proxy)