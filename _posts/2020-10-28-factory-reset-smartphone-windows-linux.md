---
layout: post
title: Factory Reset on Smartphone and Windows and Linux
category: internet
tags: [computers, factory reset, smartphone, windows, linux]
featuredimage: https://images.blurt.buzz/DQmfEH9tiTiiwBfVypQgLx4hUwxUKdtSmngifWg8hdm49uj/1.4tb-wd-element-external-hd.jpg
description: Factory reset is an action of returning a device into its initial state. On Windows is System Restore, and Linux is Time Shift & Systemback.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/10/28/factory-reset-smartphone-windows-linux
---
![1.HUAWEI-JDN-L01-Factory-Reset.PNG](https://images.blurt.buzz/DQmbTTpCijjRA9SEDUP2CCywkgrZiM3wLnY9ZgU2ZaZkxfS/1.HUAWEI-JDN-L01-Factory-Reset.PNG)


## Factory Reset Android

Factory reset is an action of returning a device into its initial state when it was still in a package. There are many reasons for factory reset:

<div class="video-container"><iframe src="https://lbry.tv/$/embed/0-anybody-knows-what-happen-to-my-huawei/16e6814e55ce1a1dc1cdf4251ec7f4792c62958b?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

*   Resell your device as second hand or giving it to someone.
*   You feel a negative change in your device such as being very slow, often hangs, buttons does not work, other misfunctions, or even like my case that it blanks where no buttons worked.

If you value your data, do your best first to recover them such as backing them up into an SD card, connecting the Android to a computer using USB type C, or even using Android SDK. If no matter, you need the data, the furthest you can go is to boot into recovery and choose wipe cache partition instead of factory reset. If all else fails then go to a professional. Otherwise, the last thing to do is to perform factory reset:

<div class="video-container"><iframe src="https://lbry.tv/$/embed/1-factory-reset-huawei-jdn-l01-and/e1213bb48d57b6b3cab29cbbe8000d83d4578601?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

*   Power off (press the power button for a long time).
*   00:00 For my Huawei JDN-L01, press power button + volume up. For other device, check their websites or try every possible combination:
    *   Power Button + Volume Up
    *   Power Button + Volume Down
    *   Power Button + Home
    *   Power Button + Volume Up + Volume Down
    *   Power Button + Volume Up + Home
    *   Power Button + Volume Down + Home
    *   Power Button + Volume Up + Volume Down + Home
*   00:15 Release on second boot.
*   00:35 Choose factory reset.
*   03:35 Choose Language.
*   04:00 Choose Region.
*   04:10 Connect to WiFi.
*   04:36 Agree to Terms and Service.
*   04:50 Login to Google.
*   06:11 Configure Google services.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/2-installing-my-prefered-applications-on/a8884d073d437e939888a2eb801d4176af76e18d?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

After that is should be almost back to how it was when you bought it. I suggest to update the Android firmware and update the apps. Finally, install any apps you need.

## Windows System Restore

For a long time, Windows have a system restore function where ideally returns the installation condition of your Windows to a certain date. This does not delete your personal data but uninstall applications that does not exist on the chosen date. I do not know what else is affected such as services, policies, settings, and registry so do leave a comment if you know. If you never explore this feature before, I suggest you do now and at least one time on every new Windows devices to create at least one restore point or when in the future you want to clean your Windows, you have to uninstall software manually or reinstall the Windows operating system.


![2.windows-create-restore-point-search.PNG](https://images.blurt.buzz/DQmYArSzVb9Pzd1LBAFVdTyvzQGfCjHRpS6rpZex52UabBd/2.windows-create-restore-point-search.PNG)


Type _system restore_ or _create restore point on the search bar_ or find system properties.


![3.windows-system-protection-and-restore.PNG](https://images.blurt.buzz/DQmd6zhnTVkz68r63uKZ8tmD3WtLVEP6BMjLDHCpHmRYLtR/3.windows-system-protection-and-restore.PNG)


Go to system protection. Turn on an configure restore setting for each disk. Create a restore point if you have not. When the time comes, choose system restore to restore your Windows to a certain point.



## Linux Restore

Linux is robust enough that I never needed to rely on any system restore or I became more experienced because I used it often and I know how to handle problems manually without needing to restore. If not, backing up my files and reinstalling the operating system was easy enough. However, I found two application on Debian based Linux for system restore and there maybe more out there.


![4.ubuntu-timeshift.PNG](https://images.blurt.buzz/DQmWvVMv8uAmWVuSzGxmhd8zpZjw5SMWCE74RozJi3rUgTa/4.ubuntu-timeshift.PNG)


In new Ubuntu 20.04 LTS, I found [Time Shift](https://github.com/teejee2008/timeshift) which is also available on MacOS. It is simple, all you need is to install and run the GUI.

<pre style="background-color:black; color:lightgreen">
sudo apt install timeshift
</pre>

If it is not available on your repository then add the repository manually or download and compile manually from its [Github](https://github.com/teejee2008/timeshift).

<pre style="background-color:black; color:lightgreen">
sudo add-apt-repository -y ppa:teejee2008/timeshift
sudo apt update
sudo apt install timeshift
</pre>


![5.ubuntu-systemback.PNG](https://images.blurt.buzz/DQmaAGeNrDAfBCKMBqENW2wQWd1kQT7SgSUM3rnLjZESivp/5.ubuntu-systemback.PNG)


An older software on Ubuntu is [Systemback](https://launchpad.net/systemback).



<pre style="background-color:black; color:lightgreen">
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 382003C2C8B7B4AB813E915B14E4942973C62A1B
sudo add-apt-repository "deb http://ppa.launchpad.net/nemh/systemback/ubuntu xenial main"
sudo apt update
sudo apt install systemback
</pre>

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/factory-reset-on-smartphone-and-windows-and-linux-xnlojyq?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/factory-reset-on-smartphone-and-windows-and-linux-xnlojyq?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/10/factory-reset-on-smartphone-and-windows.html](https://0darkking0.blogspot.com/2020/10/factory-reset-on-smartphone-and-windows.html)
*   [https://0fajarpurnama0.medium.com/factory-reset-on-smartphone-and-windows-and-linux-45f03f64343a](https://0fajarpurnama0.medium.com/factory-reset-on-smartphone-and-windows-and-linux-45f03f64343a)
*   [https://0fajarpurnama0.github.io/internet/2020/10/28/factory-reset-smartphone-windows-linux](https://0fajarpurnama0.github.io/internet/2020/10/28/factory-reset-smartphone-windows-linux)
*   [https://blurt.world/blurtech/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama](https://blurt.world/blurtech/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama)
*   [https://hive.blog/computers/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama)
*   [https://steemit.com/computers/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/factory-reset-on-smartphone-and-windows-and-linux?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/factory-reset-smartphone-windows-linux.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/factory-reset-smartphone-windows-linux.html)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/factory-reset-on-smartphone-and-windows-and-linux](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/factory-reset-on-smartphone-and-windows-and-linux)
*   [http://0fajarpurnama0.weebly.com/blog/factory-reset-on-smartphone-and-windows-and-linux](http://0fajarpurnama0.weebly.com/blog/factory-reset-on-smartphone-and-windows-and-linux)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/85-factory-reset-on-smartphone-and-windows-and-linux](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/85-factory-reset-on-smartphone-and-windows-and-linux)
*   [https://read.cash/@FajarPurnama/factory-reset-on-smartphone-and-windows-and-linux-de55f23f](https://read.cash/@FajarPurnama/factory-reset-on-smartphone-and-windows-and-linux-de55f23f)
*   [https://www.uptrennd.com/post-detail/factory-reset-on-smartphone-and-windows-and-linux~NzkxMjYw](https://www.uptrennd.com/post-detail/factory-reset-on-smartphone-and-windows-and-linux~NzkxMjYw)