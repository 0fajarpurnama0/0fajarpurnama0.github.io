---
layout: post
title: Bypass Censorship By TOR
categories: internet
tags: [TOR, The Onion Router, Windows, Linux, Android, relay, exit, bridge, node, privacy, anonimity, censorship resistance]
---

## Description

[The Onion Router (TOR)](https://www.torproject.org) is an implementation of onion routing by volunteers whom anyone can join because it is free and open source. TOR is mainly used for anonymity, privacy, and alike. For example, journalists who needs to communicate with whistle blowers, activists under oppressive regime, detectives on under cover operations, and privacy advocates who does not like monitoring, surveillance, trackers, and anything that breaches privacy.

What is the difference between onion routing and vpn and proxy? The difference is the layer of encryptions. While proxy and vpn only provide one or up to few layer of encryptions, onion routing provides multiple layer of encryptions like an onion. In this article's topic, what is the similarity between onion routing and [vpn](https://0fajarpurnama0.github.io/internet/2020/04/22/bypass-censorship-vpn) and [proxy](https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy)? They can be used to bypass censorships.

![https://file.army/i/BYiZSJf](https://404store.com/2020/04/26/proxy-vpn-tor-bypassing-censorship-illustration.gif)

[Proxy](https://0fajarpurnama0.github.io/internet/2020/04/19/bypass-censorship-proxy), [vpn](https://0fajarpurnama0.github.io/internet/2020/04/22/bypass-censorship-vpn), and [TOR](https://2019.www.torproject.org/about/overview) bypassing censorship illustration.



## Using TOR

Onion routing is the technology and TOR is the product that is free for anyone to use. TOR can be used in form of running application, browser, or browser extension. Regular people use TOR mostly to browse privately. I use TOR to bypass censorship as demonstrated in Video below where I access an anime site that was blocked.

**Warning! Although surveillances cannot track your connections but they still can know that you are using TOR. The use of TOR by common people are frowned upon by most authority. In their reasonings, they need to monitor everything you are doing in order to keep law and order, especially their power. Only they are allowed to use privacy based technologies to go undercover and infiltrate criminal activities. Generally, you will be asked, why do you need to use TOR if you are not dealing with drugs, human trafficking, illegal weapons, porns, and other criminal activities? If not, then at least you will be on their special attention list.**

<div class="video-container"><iframe src="https://lbry.tv/$/embed/tor-browser-just-a-glimpse/766c96077b8c8afc397f075b4b743bcb04863b31" allowfullscreen=""></iframe></div>

### TOR in Windows

![https://file.army/i/BYiZvEV](https://404store.com/2020/04/26/tor-browser-windows.png)

[TOR as a browser](https://www.torproject.org/download) is the only available use that I found in Windows. I did find [tallow](https://reqrypt.org/tallow.html) and [torifier](http://www.torifier.com) to torify applications, but sometimes it works, sometimes it does not based on my experience in installing in multiple Windows machine. If you do not want to change browser, than find a [tor extension](https://chrome.google.com/webstore/detail/onion-browser-button/fockhhgebmfjljjmjhbdgibcmofjbpca?hl=en) that you can install in your preferred browser.



![https://file.army/i/BYiZI1H](https://404store.com/2020/04/26/tor-brave-browser.png)

If you are a cryptocurrency enthusiast, I suggest to try [Brave browser](https://brave.com/faj934) which is not only powered by Basic Attention Token (BAT) but has a built in TOR function as well.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypass-censorship-through-my-setup-open/de0b303a4d036377811b85f9b2673f0315c5889d" allowfullscreen=""></iframe></div>

### TOR in Android

![https://file.army/i/BYiZu9I](https://404store.com/2020/04/26/tor-browser-mobile.jpg)

[TOR Browser is also available on Android.](https://play.google.com/store/apps/details?id=org.torproject.torbrowser&hl=en)



![https://file.army/i/BYiZx4v](https://404store.com/2020/04/26/orbot-mobile.jpg)

You can use [Orbot](https://play.google.com/store/apps/details?id=org.torproject.torbrowser&hl=en) if you want other applications to go through the TOR network. This application also allows you to participate as a volunteer node in the TOR network.



![https://file.army/i/BYiZRck](https://404store.com/2020/04/26/brave-mobile-tor-request.png)

Although [Brave browser](https://brave.com/faj934) is available on Android but tor function is coming soon.



<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypassing-censorship-through-my-setup/453274f03aa85947a81b533d0be0fd280750901d" allowfullscreen=""></iframe></div>

## Building TOR Linux

![https://file.army/i/BYiZ6Wp](https://404store.com/2020/04/26/tor-summary.gif)

Other than as a user, there are three more ways to join the TOR network. We can volunteer to be either a bridge, relay, or exit.



### Installing TOR

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bypass-censorship-through-my-open-proxy/a497461bbb471e0c88bf838e35cee7804fdaf1b5" allowfullscreen=""></iframe></div>

<pre>sudo apt install tor torsocks torbrowser-launcher
</pre>

To run TOR just run the command "tor". Any application you want to run with tor you can run the application by putting "torsocks" in front of the command. There is a same application called torify, choose which one you want to use. If you want to just run the browser, you can run "torbrowser-launcher" without running "tor" command because TOR browser have a built-in TOR. If you want to use other browsers, run "tor" and set the socks proxy to localhost and TOR port which is usually "9050" or "9051", or install a tor browser extension.

### [Configuring TOR](https://community.torproject.org/relay)

Edit the file "/etc/tor/torrc" and restart tor whenever finish. Other than volunteering as a bridge, relay, or exit node, there are other things that you can set for example as a daemon for you can run tor a service and start and stop from there, control port if you want andvanced monitoring of your tor node, hosting a site on tor network or deep web, and many other things which will be on separate article.

#### [TOR Bridge](https://community.torproject.org/relay/setup/bridge)

A bridge illustratively stands on the beginning layer of the tor network. The function of bridges are to give users access to tor because they cannot connect to tor themselves for some reason. Currently, the main reason is because the TOR network itself is blocked or censored by the authorities. To install on debian based Linux "sudo apt install obfs4proxy" and add the following to "/etc/tor/torrc":

<pre>BridgeRelay 1
ORPort 9001
ServerTransportPlugin obfs4 exec /usr/bin/obfs4proxy
ServerTransportListenAddr obfs4 0.0.0.0:9002
ExtORPort auto
ContactInfo <fajar.purnama@yahoo.com>Nickname 0fajarpurnama0tor</fajar.purnama@yahoo.com> </pre>

Above is my example configuration where actually you are not suggested to use port 9001 because it is well known so it is most likely blocked. Guides are actually available inside "/etc/tor/torrc" or you can read the [official guide](https://community.torproject.org/relay/setup/bridge). By the way, the guide said the following but in my experience, I did not need it: "you will also need to set NoNewPrivileges=no in /lib/systemd/system/tor@default.service and /lib/systemd/system/tor@.service and then run systemctl daemon-reload. (see [bug #18356](https://trac.torproject.org/projects/tor/ticket/18356))".

#### TOR Relay

TOR relays functions are securing the tor network and providing more anonimity. TOR relays are the most that occupies the tor network because they are the easiest to setup and bear the least risk. In my opinion, you do not need to think twice in becoming a TOR Relay. Add the following lines to "/etc/tor/torrc":

<pre>Nickname 0fajarpurnama0tor
ORPort 9001
ExitRelay 0
SocksPort 0
ControlSocket 0
ContactInfo <fajar.purnama@yahoo.com></fajar.purnama@yahoo.com> </pre>

#### [TOR Exit](https://community.torproject.org/relay/setup/exit)

TOR exits are the least that occupies the tor network because they bear the highest risk. Why? because they are the frontier of the TOR network. They are the ones that are interacting with the public network or the Internet. If TOR users are doing activities discouraged by the authorities, these exits are the ones who will take the blame because they are the ones that are visible. Some authorities cannot even identify tor exits, so any malicious acts committed by TOR users, they will think that the tor exits are the ones that are committing them. Therefore, make sure you have complete understanding of your capabilities before running a TOR exit. Leave a comment, do you need a lawyer or something other than supports from ISPs and influential figures?

Since TOR exits are the ones that connects to the public network, they are the ones that heavily influenced the speed of the network. They are the nodes that in the end you need to go through anyway. Therefore if these nodes are scarce, then bottlenecks will often happen. TOR exits are in high demand, if you truly have the capabilities, please consider being a TOR exit. To become a TOR exit, simply follow the steps in becoming a TOR relay, with one difference:

<pre>ExitRelay 1
</pre>

Other settings are inserting meta data to inform that you are an exit node. Do consider configuring your DNS, reverse DNS, and in the WHOIS record so that your node is informed as a TOR exit for example have "tor-exit" word in any of your record. If you are already running a website, do consider adding a notice that your node is a TOR exit for example write a [html page](https://gitweb.torproject.org/tor.git/plain/contrib/operator-tools/tor-exit-notice.html). If not, tor can do that for you by setting the dirport to 80:

<pre>DirPort 80
DirPortFrontPage /path/to/html/file
</pre>

Consider determining your exit policy. The more open your TOR exit is, the more risk it bears. Again, depends on your capabilities. If you are very powerful, then it is great service to fully open your TOR exit. However, do not take the risk if you cannot handle. For example, there will be TOR users who will use your exit for drug dealings, illegal weapon dealings, thief and assassination jobs, human trafficking, child pornography, hacking, etc. If you truly cannot handle the burden, do not force yourself and be a limited exit node for the regular people who just wants to surf the Internet privately. If you are taken down, it is lost for us as well. The most limited exit policy is only allowing port 80 and 443 and certain IP addresses that you determine. The default exit policy are:

<pre>reject *:25
reject *:119
reject *:135-139
reject *:445
reject *:563
reject *:1214
reject *:4661-4666
reject *:6346-6429
reject *:6699
reject *:6881-6999
accept *:*
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/attempting-to-install-tor-relay-on-my/11d81b02f5f2900b3062c57016776b57afece6bb" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-tor-xvvyvv?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/bypass-censorship-by-tor-xvvyvv?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/internet/2020/04/25/bypass-censorship-tor](https://0fajarpurnama0.github.io/internet/2020/04/25/bypass-censorship-tor)
*   [https://medium.com/@0fajarpurnama0/bypass-censorship-by-tor-b149e4397f14](https://medium.com/@0fajarpurnama0/bypass-censorship-by-tor-b149e4397f14)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-tor](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/bypass-censorship-tor)
*   [https://0fajarpurnama0.tumblr.com/post/616387794167857152/bypass-censorship-by-tor](https://0fajarpurnama0.tumblr.com/post/616387794167857152/bypass-censorship-by-tor)
*   [https://0darkking0.blogspot.com/2018/08/bypass-blocks-with-tor-browser.html](https://0darkking0.blogspot.com/2018/08/bypass-blocks-with-tor-browser.html)
*   [https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-tor?r=fajar.purnama](https://hive.blog/censorship/@fajar.purnama/bypass-censorship-by-tor?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/37-bypass-censorship-by-tor](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/37-bypass-censorship-by-tor)
*   [https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-tor?r=fajar.purnama](https://steemit.com/censorship/@fajar.purnama/bypass-censorship-by-tor?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-tor](http://0fajarpurnama0.weebly.com/blog/bypass-censorship-by-tor)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-tor](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/bypass-censorship-by-tor)
*   [http://www.teiii.cn/bypass-censorship-by-tor](http://www.teiii.cn/bypass-censorship-by-tor)