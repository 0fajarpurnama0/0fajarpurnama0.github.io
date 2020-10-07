---
layout: post
title: Bypass Censorship By DNS
categories: internet
tags: [DNS, domain name service, Windows 7, Linux, Android, Server, Kali, censorship resistance]
featuredimage: https://steemitimages.com/0x0/https://images.hive.blog/DQmQd8tcM9vNsKfksNrQ9PrXDS4mJDs9NhrYBmAoVPScmeG/Figure%201.%20Simple%20Animation%20of%20DNS.gif
description: Changing DNS on client is also among the most basic because there are many open DNS server out there compared to proxy and VPN server.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/04/18/bypass-censorship-dns
---

## Overview

Changing the domain name server (DNS) is one of the easiest way. If the contents restriction is by DNS we simply only need to use another DNS, if not then this method cannot be use. Changing DNS on client is also among the most basic because there are many open DNS server out there compared to proxy and VPN server. Many users used Google's DNS server "8.8.8.8" to bypass censorship or sometimes, it is just faster. Another reason is, if your censorship only comes from DNS, it is much easier to change your DNS setting the performing overkills such as setting proxy and VPN, and in some cases, even you do set proxy and VPN, sometimes it just doesn't work if the censorship comes from the DNS.

Here DNS will be introduced on public level in other words simple term. More information can be found in my article [Simple Introduction to Computer Network](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/simple-introduction-to-computer-network.html) and technical term will be upcoming. To make things short we browse the web mainly using the domain address for example "www.facebook.com", but our machine itself prefer internet protocol (IP) address which is still version 4 of IP "173.252.74.22". When we write, the DNS translate it from "www.facebook.com" > "173.252.74.22".


![Figure 1. Simple Animation of DNS.gif](https://images.hive.blog/DQmQd8tcM9vNsKfksNrQ9PrXDS4mJDs9NhrYBmAoVPScmeG/Figure%201.%20Simple%20Animation%20of%20DNS.gif)


Figure 1\. Simple Animation of DNS



## Setting DNS Windows

<div class="video-container"><iframe src="https://lbry.tv/$/embed/change-dns-windows/ba5f57c70b89a49a65ab55d04912f96bb48becf5" allowfullscreen=""></iframe></div>


![Figure 2. go to start menu and choose control panel.jpg](https://images.hive.blog/DQmR8HHbuSXVAiBCGYa9DW2TAZcSxmXtnCThpWpRWv976gK/Figure%202.%20go%20to%20start%20menu%20and%20choose%20control%20panel.jpg)


Figure 2\. go to start menu and choose control panel.




![Figure 3. choose network and internet.jpg](https://images.hive.blog/DQmSTk61NJg2FSy8WQNZaqb1EKXQXqY9tm7MTL3qFAizPFc/Figure%203.%20choose%20network%20and%20internet.jpg)


Figure 3\. choose network and internet.




![Figure 4. go to network and sharing center.jpg](https://images.hive.blog/DQmT9kuNfNybWw2e462j4LFpgu3B6Ebii9xcFEhQAw2ZS7X/Figure%204.%20go%20to%20network%20and%20sharing%20center.jpg)


Figure 4\. go to network and sharing center.




![Figure 5. change adapter setting.jpg](https://images.hive.blog/DQmfMhifrKVz4y1GCKy3f8or4TVcCxRuSZvEX2n6MFEs1B7/Figure%205.%20change%20adapter%20setting.jpg)


Figure 5\. change adapter setting.



![Figure 6. right click and choose properties of the network interface you're using.jpg](https://images.hive.blog/DQmX893QJFcoVZJttKn7FZUZFjCjvfpiCk2zaVY3MpnSc5A/Figure%206.%20right%20click%20and%20choose%20properties%20of%20the%20network%20interface%20you're%20using.jpg)


Figure 6\. right click and choose properties of the network interface you're using.



![Figure 7. choose internet protocol version 4 and input the DNS, here I input Google's public DNS.jpg](https://images.hive.blog/DQmRARu4vet8smiYtNx6ZNa8xNSgr7SzqprbHVYZvbVhxAX/Figure%207.%20choose%20internet%20protocol%20version%204%20and%20input%20the%20DNS,%20here%20I%20input%20Google's%20public%20DNS.jpg)


Figure 7\. choose internet protocol version 4 and input the DNS, here I input Google's public DNS.



If you want to change from command line, then type the following on cmd.exe:

<pre>			netsh
			interface ip show config
			(find the connection for example:)
			interface ip set dns "Ethernet0" static 8.8.8.8
			</pre>

## Setting DNS Android

<div class="video-container"><iframe src="https://youtube.com/embed/eFeN52U4eHw" allowfullscreen=""></iframe></div>


![Figure 8. open settings.jpg](https://images.hive.blog/DQmQjQ8DyrbPwGKHZNSz5siQRyySkzJ5ZTLx6nFycBc1i6y/Figure%208.%20open%20settings.jpg)


Figure 8\. open settings.


![Figure 9. choose connections.jpg](https://images.hive.blog/DQmWp7DxjVPwzV4AxojU2F7jA63fGx9VqjqjNFbr7NZQyZV/Figure%209.%20choose%20connections.jpg)


Figure 9\. choose connections.



![Figure 10. choose wifi or more connection settings.jpg](https://images.hive.blog/DQmadnbDLbHzeicwPwFLgK565kLVGepWCng7V1Df3QQ4WmZ/Figure%2010.%20choose%20wifi%20or%20more%20connection%20settings.jpg)


Figure 10\. choose wifi or more connection settings.



![Figure 11. if you choose wifi then long press one of the hotspot then choose manage network settings.jpg](https://images.hive.blog/DQmbkw2JoUmyJaYoc8XKF653aNvm2nwq1pW3EKudmAnZa25/Figure%2011.%20if%20you%20choose%20wifi%20then%20long%20press%20one%20of%20the%20hotspot%20then%20choose%20manage%20network%20settings.jpg)


Figure 11\. if you choose wifi then long press one of the hotspot then choose manage network settings.



![Figure 12. choose advance.jpg](https://images.hive.blog/DQmbMcPFQJhkWPvsqw5NwqZbarJntWF1gaBCuzmZoWjgHXV/Figure%2012.%20choose%20advance.jpg)


Figure 12\. choose advance.


![Figure 13. change DHCP to static and set DNS.jpg](https://images.hive.blog/DQmefhS1vamaw3j4spoEEy7mxarJczCQpazxhUUXBzZQKXz/Figure%2013.%20change%20DHCP%20to%20static%20and%20set%20DNS.jpg)


Figure 13\. change DHCP to static and set DNS for example 8.8.8.8.



![Figure 14. if you schoose more connection settings the set private DNS hostname.jpg](https://images.hive.blog/DQmShREQo7QLVuqx3pFm9N7xaRacEsp83s21qFwpqXHHGrx/Figure%2014.%20if%20you%20schoose%20more%20connection%20settings%20the%20set%20private%20DNS%20hostname.jpg)


Figure 14\. if you schoose more connection settings the set private DNS hostname for example dns.google.



## Setting DNS Linux

<div class="video-container"><iframe src="https://youtube.com/embed/7g6GXFofQXU" allowfullscreen=""></iframe></div>


![Figure 15. find your network manager from widget.jpg](https://images.hive.blog/DQmdZiCVPPvWW7HM2Nk5x4oipNGVx499ZZYFQwFc9uPLUpf/Figure%2015.%20find%20your%20network%20manager%20from%20widget.jpg)


Figure 15\. find your network manager from widget.



![Figure 16. or find network manager from settings and press gear on desired profile.jpg](https://images.hive.blog/DQmPcyHxCXXWfvnxFFxU36mzfRSucwykFTcpijvw9LjJUiZ/Figure%2016.%20or%20find%20network%20manager%20from%20settings%20and%20press%20gear%20on%20desired%20profile.jpg)


Figure 16\. or find network manager from settings and press gear on desired profile.



![Figure 17. choose IPV4 or IPV6 and change the DNS.jpg](https://images.hive.blog/DQmczKcG2k97zvL4Y3oxpRQSG9WGNyueN9MgmXMbkpJk1ak/Figure%2017.%20choose%20IPV4%20or%20IPV6%20and%20change%20the%20DNS.jpg)


Figure 17\. choose IPV4 or IPV6 and change the DNS.



If you want to do it from terminal, then be administrator using "sudo su", edit "/etc/resolve.conf" file using nano, vim, etc, and set for example "nameserver 8.8.8.8".

<div class="video-container"><iframe src="https://youtube.com/embed/jzy_gP7vIzc" allowfullscreen=""></iframe></div>

## Building DNS Server Linux

<div class="video-container"><iframe src="https://lbry.tv/$/embed/emulate-dns-server-on-core-network/3aa7c140c0a26d74b6aa9298abcb786f47f21b21" allowfullscreen=""></iframe></div>

Here I will only demonstrate locally using bind9\. If you want to put on public domain, just change to public IP addresses.

<pre>			sudo su
			apt install bind9
			</pre>

Edit "/etc/bind/named.conf.options" if you want to add forwarders such as:

<pre>			forwarders {
							8.8.8.8;
							8.8.4.4;
					   };
			</pre>

Create a zone in any conf file, in the video above, I added a zone in "/etc/bind/named.conf.local" since it's only for local network. For example:

<pre>			zone "example.com" {
					type master;
					file "/etc/bind/db.example.com";
			};
			</pre>

In above code, the zone name is "example.com" and the type is "master". The zone file is specified to "/etc/bind/db.example.com" but you can change the name and directory of the file as you wished but for now in "/etc/bind/db.example.com":

<pre>			;
			; BIND data file for example.com
			;
			$TTL    604800
			@       IN      SOA     example.com. root.example.com. (
										  2         ; Serial
									 604800         ; Refresh
									  86400         ; Retry
									2419200         ; Expire
									 604800 )       ; Negative Cache TTL
					IN      A       192.168.1.10
			;
			@       IN      NS      ns.example.com.
			@       IN      A       192.168.1.10
			@       IN      AAAA    ::1
			ns      IN      A       192.168.1.10
			</pre>

We defined "example.com" as "192.168.1.10", we also define a subdomain "ns.example.com" the same as "example.com". Note, there are example zone files such as "/etc/bind/db.local" if you need a skeleton, else go to [bind9 official website](https://www.isc.org/bind/) for further technical details. Next is creating a reverse zone file to resolve names to IP Address. Edit "/etc/bind/named.conf.local" once again and add for example:

<pre>			zone "1.168.192.in-addr.arpa" {
					type master;
					file "/etc/bind/db.192";
			};
			</pre>

Replace "1.168.192" with the network you are using if you are using a different one. The reverse zone file in above video is "/etc/bind/db.192". If you need a skeleton, there is "/etc/bind/db.127". The contents below shows that "ns.example.com" is "192.168.1.10":

<pre>			;
			; BIND reverse data file for local 192.168.1.XXX net
			;
			$TTL    604800
			@       IN      SOA     ns.example.com. root.example.com. (
										  2         ; Serial
									 604800         ; Refresh
									  86400         ; Retry
									2419200         ; Expire
									 604800 )       ; Negative Cache TTL
			;
			@       IN      NS      ns.
			10      IN      PTR     ns.example.com.
			</pre>

Finally, "sudo systemctl restart bind9.service" to restart the DNS server.

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-dns-xynjyj?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-dns-xynjyj?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/18/bypass-censorship-dns](https://0fajarpurnama0.github.io/internet/2020/04/18/bypass-censorship-dns)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-dns-b0b82609f8ad](https://medium.com/@0fajarpurnama0/bypass-censorship-by-dns-b0b82609f8ad)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-dns](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-dns)
*   [https://0fajarpurnama0.tumblr.com/post/615658139392622592/bypass-censorship-by-dns](https://0fajarpurnama0.tumblr.com/post/615658139392622592/bypass-censorship-by-dns)
*   [https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-dns.html](https://0darkking0.blogspot.com/2018/08/bypass-blocks-by-dns.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/34-bypass-censorship-by-dns](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/34-bypass-censorship-by-dns)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-dns?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-dns](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-dns)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-dns](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-dns)
*   [http://www.teiii.cn/bypass-censorship-by-dns](http://www.teiii.cn/bypass-censorship-by-dns)