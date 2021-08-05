---
layout: post
title: Disable or Customize Windows 10 Update also Linux and Android
category: internet
tags: [Windows, update, automatic, Linux, Android]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYGijqCfk9ECU6JxJxaMZRdoJUWmdnGmBgjPHkxKjL9hi/0.windows-update-during-presentation.PNG
description: Enable Group Policy Editor, run gpedit, go to Computer Configuration, Administrative Templates, Windows Update, Configure Automatic Updates, Disable.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/10/23/windows-update-also-linux-android
---
## Problem

![Windows 10 update during presentation](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYGijqCfk9ECU6JxJxaMZRdoJUWmdnGmBgjPHkxKjL9hi/0.windows-update-during-presentation.PNG)

Sure that updates are important for securities and bug fixes that you should at least schedule an update once in a while. However, windows automatic update is now a problem and no longer just an annoyance. If you missed the initial option of only what time should Windows perform updates or Windows just would not listen to because it claimed to be a critical update then the problems are:

*   The update occurs when the user is shutting down a laptop. The user may have an urgent appointment or schedule and could not even afford to wait a minute for the update to finish and did you know that the fastest update that happens to me my friend in this case is 5 minutes, and some took 30 minutes. What do we do? If we are lucky enough to have enough battery capacity, we can just put our laptop alive in our bags and let it update while we travel but if we are unlucky, we have to force it to shutdown and pray that no damages will occur.
*   The update occurs when the user turns on a laptop. Similar to the previous point, the user may have a meeting and needs to present or immediately use the laptop for something. The result can be either the meeting is delayed for many minutes or cancelled. Another example, is that the may have an online exam or assignment deadline. A life and death example, is that the user needs to communicate for help but an update occurs and the user could have been saved if the update did not occur.
*   A not very important reason is the update consumes Internet quota. During not automatic update, the user may borrow free WiFi or other Internet connections for updates but the user may get unlucky and automatic update occurs and wastes Internet quota.

Though we can just switch to almost any Linux operating system because they never perform a task without the users' agreement but most likely that we still need to use Windows:

*   Many people still relies on Microsoft Office. Eventhough there are Libre Office and Open Office, there are people who asked for Microsoft Office specific formats for example they do not accept dotx from Libre Office and Open Office but only docx from Microsoft Office. During my academics, I deleted Windows but have to reinstall because the academic paper submission back then needs to be in docx eventhough there are many publishers that accepts Latex. Back then, I have to rewrite my paper from Latex to docx.
*   There are applications that are not available on Linux and vice versa which is why my laptop is dual boot. I still play video games and most video games are on Windows and only on very later date they may support Linux. During the time when I was Introduced to cryptocurrency, I wanted to try [Netbox Browser](https://netbox.global/r/publish0x) and [Cryptotab Browser](https://cryptotabbrowser.com/2016839) but they are not available on Linux but on Windows.
*   You maybe too lazy to try using Linux well you are not the only one, most people are.

## Customizing Windows 10 Automatic Update

<div class="video-container"><iframe src="https://lbry.tv/$/embed/disable-or-customize-windows-10-update/7c40ea8a98038bfed0657d1ba4c0e20319475177?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

### Newer Windows 10 Update Settings

![Windows 10 update menu](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmNvwCdfUqEsXajpaCbDXWATZH6TXFsmBQV6P852uDr9Ei/1.windows-update-menu.PNG)

If you are on a newer version of Windows 10, you can just go to Windows Update settings, scroll down, and choose pause updates for 7 days.



![Windows 10 update advance](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYyYj3r1c6mSpGUqwuMJgVk8Wh8ZsVQoHAEVrnAPmEwAz/2.windows-update-advance.PNG)

If you want it more than 7 days and you do not want to automatically download, choose advanced options.



### Older Windows 10

![Windows 10 edit group policy](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmTim37QwUdzwtZDUVrMfMTSUBFZZ94j1SsiMRzFQ4eUVB/3.edit-group-policy.PNG)

If you are on an older version of Windows 10, the above options may not be available. I recommend to use _Edit Group Policy_. If you are on Windows Home, it is not available in default which you have three choices: (1) enable it, (2) disable updates in services everytime you turn on your Windows, (3) use the hard registry edit ways.



![Windows 10 gpedit enabler bat](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmd4zRiuazNoLqBgcRh187Mus2wxdNHuzK39UVbJyuvfBq/4.gpedit-enabler-bat.PNG)

Ofcourse I recommend to enable it by copying the following code, open notepad or similar application, paste it, and save it to any filename ending with _.bat_ extension, for example _gpedit-enabler.bat_, or [download the file using my hyperlink](http://mellowads.com/866E3).



<pre style="background-color:black; color:lightgreen">
@echo off 
pushd "%~dp0" 

dir /b %SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt 
dir /b %SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt 

for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i" 
pause
</pre>

![Windows 10 gpedit windows update menu](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbuozDKZpBAqWQX69W8hhzoxURFyjhnKMJk8W6GXpTguK/5.gpedit-windows-update-menu.PNG)

Once you open _Edit Group Policy_, whether from search bar or gpedit from run command, go to _Computer Configuration, Administrative Templates, Windows Compponents, and Windows Update_.



![Windows 10 configure automatic updates](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmQfHJEe2r6TJZJMYQTYMvBWqrEzZcfc8yovZX2qVA2tkG/6.configure-automatic-updates.PNG)

Here you can find many policies but for now you only need to look at _Configure Automatic Updates_. Choose to disable or enable notification only.



## Linux Updates

![Ubuntu software updates](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmeoaaxPvpAfLCsaFgosB2mstHB7zj2X2Cywah56uxfb1x/7.ubuntu-software-updates.jpg)

Simply most Linux does not do anything until you tell it to which is the opposite of Windows and which is why Linux are less susceptible to malwares. Instead you have to set it up yourself if you want to do automatic updates. However, I do find differences in Linux distributions whether they give notifications that updates are available or not. Here I use Debian based Linux where if it is not in _Settings_, then it is in _Software & Updates_, or maybe somewhere else so please correct me.



There are many ways to set up automatic updates through command line.

I found many posts that best practice for headless machines or servers are to use _unattended-upgrades_:

<pre style="background-color:black; color:lightgreen">
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
</pre>

You can add any commands in crontab including update and upgrade commands:

<pre style="background-color:black; color:lightgreen">
sudo crontab -e
</pre>

You can also do the old ways by adding commands into /etc/local... and /etc/rc... . Leave a comment if you know anymore

## Android Updates

![Samsung A7 software updates](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmTzF5HBacqEMgsmkngmh3nbASMr8ZESHoRKxdCZTKbtfQ/8.android-software-updates.jpeg)

I owned a Samung A7 and to configure the updates, all I have to do is go to settings, scroll down and find Software Updates.



![Samsung A7 auto download over wifi](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmQHfjhUQUhCkWEkLqo1YWyGxdjiqimVkogTKvtp8gAtTL/9.android-auto-download-over-wifi.jpeg)

In default, it does not automatic update so there is an option to automatic update only on WiFi since it takes large Internet quota almost all the time.



![Samsung A7 software information](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmYsLD4spLSfVwQnDsB5xsWfquQvGMYRG5gxxMUPo9nUMf/10.android-software-information.jpeg)

If you cannot find the update option, go to about phone and software information.



![Samsung A7 activate developer mode](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbrfpnF8KmfPMVC513CJcX8PWP8bdBvB8Xns6Z62CJRdA/11.android-activate-developer-mode.jpeg)

Click build number multiple times until developer mode is enabled.

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/disable-or-customize-windows-10-update-also-linux-and-androi-xgdeyve?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/disable-or-customize-windows-10-update-also-linux-and-androi-xgdeyve?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/10/disable-or-customize-windows-10-update.html](https://0darkking0.blogspot.com/2020/10/disable-or-customize-windows-10-update.html)
*   [https://0fajarpurnama0.medium.com/disable-or-customize-windows-10-update-also-linux-and-android-a23235d8653c](https://0fajarpurnama0.medium.com/disable-or-customize-windows-10-update-also-linux-and-android-a23235d8653c)
*   [https://0fajarpurnama0.github.io/internet/2020/10/23/windows-update-also-linux-android](https://0fajarpurnama0.github.io/internet/2020/10/23/windows-update-also-linux-android)
*   [https://blurt.world/blurtech/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama](https://blurt.world/blurtech/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama)
*   [https://hive.blog/computers/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama)
*   [https://steemit.com/computers/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/disable-or-customize-windows-10-update-also-linux-and-android?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/windows-update-also-linux-android.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/windows-update-also-linux-android.html)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/disable-or-customize-windows-10-update-also-linux-and-android](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/disable-or-customize-windows-10-update-also-linux-and-android)
*   [http://0fajarpurnama0.weebly.com/blog/disable-or-customize-windows-10-update-also-linux-and-android](http://0fajarpurnama0.weebly.com/blog/disable-or-customize-windows-10-update-also-linux-and-android)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/81-disable-or-customize-windows-10-update-also-linux-and-android](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/81-disable-or-customize-windows-10-update-also-linux-and-android)
*   [https://read.cash/@FajarPurnama/disable-or-customize-windows-10-update-also-linux-and-android-2abcda81](https://read.cash/@FajarPurnama/disable-or-customize-windows-10-update-also-linux-and-android-2abcda81)
*   [https://www.uptrennd.com/post-detail/disable-or-customize-windows-10-update-also-linux-and-android~Nzg0NDIy](https://www.uptrennd.com/post-detail/disable-or-customize-windows-10-update-also-linux-and-android~Nzg0NDIy)