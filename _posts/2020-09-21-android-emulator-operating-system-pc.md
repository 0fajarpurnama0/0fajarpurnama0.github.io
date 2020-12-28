---
layout: post
title: Android Emulator and Operating System for Personal Computer
category: internet
tags: [Android, Emulator, Bluestacks, Genymotion, Remix OS, Computers, Linux, Windows, VirtualBox, Operating System]
featuredimage: https://images.blurt.buzz/DQmYtBepKKNuPVdfxrn3tRZjfzgX9oD7oXAJxxzjaSH89vL/multiple-android-games-simultaneously.png
description: Here I demonstrate Brave Frontier on Microsoft Store Windows, Bluestacks on Windows, Genymotion on Linux, and Remix OS on personal computer.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/09/21/android-emulator-operating-system-pc
---
![multiple android games simultaneously](https://images.blurt.buzz/DQmYtBepKKNuPVdfxrn3tRZjfzgX9oD7oXAJxxzjaSH89vL/multiple-android-games-simultaneously.png)

Are you recently attracted to Android smartphone games or other applications? However, you do not have a good Android device to play those high end games or the worst is that you do not have one. However again, you have a good personal computer (PC). If you meet those requirements, then maybe this article is for you.

## The applications maybe available on PC.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/brave-frontier-windows-pc-demonstration/9fc23c57656ab5c2c433716766fbd7348cafcb16?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

If you are lucky, the applications are available on PC. Back then, my friends invited me to play [Brave Frontier Global](https://play.google.com/store/apps/details?id=sg.gumi.bravefrontier&hl=en&gl=US) and I only owned Galaxy Tab 2 GT-P3100 which was very slow at playing the game. Then, I checked the game was available on Windows Microsoft Store and I overjoyed that I was able to play on PC with a faster speed then any other Android device out there.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/brave-frontier-windows-pc-2/6dc83ff88fae861c650b86d1d7e2989b723daafa?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Android Emulator

If the applications are not available on PC or any other consoles you have, then you really have to use an Android system. For example, Supercells games Clash of Clans and Clash Royale. There are various Android emulators out there, but the following emulators are the ones that I have tried. Leave a comment if you know about other Android Emulators.

### Bluestacks Windows

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bluestack-windows-10-clash-of-clan-and/4ecb91864c7b591958ff7d44bd03dee2de2d5d31?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

Bluestacks runs smooth, fast, and all is well when playing almost any Android games. Since it is currently exclusive to Windows, I do not need to explain much where like any other Windows software, download from their [website](https://www.bluestacks.com/) and install. You can navigate everything easily yourself. What I can offer in this article are only mentioning that there is Bluestacks and few videos you can skim through to see how the performance is on my laptop.

### Genymotion Linux

<div class="video-container"><iframe src="https://lbry.tv/$/embed/genymotion-on-kali-linux-commented-by/64463ccd926fb1122daf01ded1d24894dd355d33?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

As much as it went well on Bluestacks, unfortunately it is now available on Linux. I needed to find another, and the most popular one is Genymotion. This one needs an article because it is not like Windows where we only download and double click. Therefore, here are my following steps for installation based on my above video:

1.  Go to [Genymotion's website](https://www.genymotion.com).
2.  Create account or sign in.
3.  Download genymotion linux.
4.  Install virtualbox from package manager (sudo apt install virtualbox) or download from their [website](https://www.virtualbox.org/wiki/Linux_Downloads) and keep running it after by "sudo /etc/init.d/vboxdrv start".
5.  sudo su
6.  chmod +x yourgenymotion.bin
7.  ./yourgenymotion.bin
8.  exit
9.  /opt/genymobile/genymotion or run genymotion from desktop
10.  add and choose device
11.  start virtual device
12.  to install Google Playstore we need [Genymotion arm translation](https://github.com/m9rco/Genymotion_ARM_Translation) and [Open GApps](https://opengapps.org/).
13.  Drag & drop arm translation to device screen.
14.  reboot safemode
15.  Drag & drop open gapps.
16.  reboot again
17.  Open Google Playstore
18.  login
19.  open browser
20.  find Google Play Service
21.  install Google Play Service
22.  install a game
23.  reboot again
24.  Enjoy the game

<div class="video-container"><iframe src="https://lbry.tv/$/embed/genymotion-on-kali-linux-custom-phone-4/b6d84440b8ea5550ecde65d557cc77e5df7eacd5?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

You may have no problem if you are using general Debian based Linux such as Ubuntu but for example in my case, I used Kali Linux, and frequently I had sound problems and lagging. The problem is either because of Genymotion or VirtualBox and I tried different devices and still it did not work.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/genymotion-on-kali-linux-google-nexus-9/6675b3247e433a665689b07c587d09c9f10d3d74?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Android Operating System

<div class="video-container"><iframe src="https://lbry.tv/$/embed/some-chest-openings-in-clash-royale-on/8c4dc2534c416a4022dc7b5890edca3a19aa11e5?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

If you cannot buy Windows and Android Emulators does not run well on your Linux, then your last option is installing Android Operating System (OS) on your PC. I did not follow the development of Android (OS) on PC but the last one I tried and worked well is Remix OS. Today Remix OS is discontinued and was proceed by other communities for example [Phoenix OS](http://www.phoenixos.com/) which is better that there is a Windows installer and if you do not have Windows, you can download the .iso file and create a bootable usb installer using [Etcher](https://www.balena.io/etcher/) or other bootable driver creator. The installation step is almost the same as [installing Ubuntu](https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide).

### Remix OS Virtual Machine

<div class="video-container"><iframe src="https://lbry.tv/$/embed/remix-os-on-virtual-box-kali-linux/6c81289036b58ccbed594461d99187cd41b748c2?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

If you are curious or just not sure whether the installation will mess your system or not, you can try on a virtual machine first. If you just want to see of what is inside Remix OS, you can just download the pre-installed virtual machine image and import. I used VirtualBox here where you can install using "sudo apt install virtualbox" or download from its [website](https://www.virtualbox.org/). If you want to try the installation:

1.  Get the .iso from its [Website](https://www.jide.com)
2.  Create New Virtual Machine
3.  Settings
4.  Storage
5.  Insert .iso
6.  Start Virtual Machine
7.  Tab to edit
8.  INSTALL=1 DEBUG=1
9.  Write primary to desired partition
10.  Install bootloader
11.  Enable Read & Write
12.  Reboot
13.  Follow instruction

### Remix OS on Physical Hard Drive

Android Emulator and Virtual Box did not work well for me and the option I have left is installing an Android OS on my physical drive. You can always do the Ubuntu way where you create a bootable USB drive and install from there with maybe the following difference:

*   You need to create an empty partition beforehand. You can try using the default disk utility, used the better gparted, or through computer management in Windows.
*   Press Tab on boot menu and add "INSTALL=1 DEBUG=1" to the line.
*   Install the bootloader if you did not have a bootloader installed before but if you have such as Ubuntu you can choose to update the bootloader instead using the command "update-grub" with "os-prober" installed.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/install-remixos-pc-on-hard-drive-from/9c191a039747ce2ce48276e4b1eb4e03e84e7a13?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

Another way is to [install on existing Linux partition](https://forum.xda-developers.com/t/remix-os-installation-rooting-more.3293769/):

1.  Create directory for Remix OS for example /remix
2.  Create data directory for Remix OS for example /remix/data
3.  copy all .iso data to /remix
4.  edit /etc/grub.d/40_custom adding for example my config below
5.  update-grub2
6.  Reboot and start Remix OS
7.  If there is no Google Play activator then [download a .apk file of it](https://groups.google.com/g/remix-os-for-pc/c/b0ij-vCPiQI?pli=1)

<pre style="background-color:black; color:lightgreen">
	menuentry 'Remix OS' --class android-x86 {
    insmod part_gpt
    search --file --no-floppy --set=root /remix/system.img
    linux /remix/kernel root=/dev/ram0 androidboot.hardware=remix_x86_64 androidboot.selinux=permissive CMDLINE SERIAL=random
    initrd /remix/initrd.img
}
</pre>

If you are lazy like me in creating a bootable drive like on my above video, you can continue from the above step not for running Remix OS but for running the Remix OS installer and make sure you have an empty partition ready:

1.  Continue from the above step until you meet the boot menu.
2.  Tab on Remix OS menu selection and add the line INSTALL=1 DEBUG=1.
3.  Install on the empty partitioned that you have prepared.
4.  No need to install the bootloader.
5.  Go back to your Linux and edit /etc/grub.d/40_custom and change the Remix OS configuration based on the new partition.
6.  update-grub2
7.  Reboot and start Remix OS

<pre style="background-color:black; color:lightgreen">
	menuentry 'Remix OS' --class android-x86 {
    insmod part_gpt
    insmod gzio
    insmod part_msdos
    insmod ext2
    set root='(hd0,msdos6)'
    search --file --no-floppy --set=root /RemixOS/system
    linux /RemixOS/kernel root=/dev/ram0 androidboot.hardware=remix_x86_64 androidboot.selinux=permissive SRC=/RemixOS CMDLINE SERIAL=random
    initrd /RemixOS/initrd.img
}
</pre>

<div class="video-container"><iframe src="https://lbry.tv/$/embed/clash-royale-gameplay-demonstration-on/186c80570027050e6cc0c20b28c23b555c984c1c?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

Finally, I can play Clash Royale and Brave Frontier on my PC smoothly which was slow when using Genymotion Linux Emulator or VirtualBox.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/bravefrontier-gameplay-demonstration-on/09c973475b332bb0031b164270881eb5f9ac8b8d?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

I can even play both game simultaneously. Brave Frontier have auto battle feature.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/play-multiple-android-games/23eda1af2d83cc12e7bbdb480789f1f7e7dee6d9?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/android-emulator-and-operating-system-for-personal-computer-xgppqmq?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/android-emulator-and-operating-system-for-personal-computer-xgppqmq?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/android-emulator-and-operating-system.html](https://0darkking0.blogspot.com/2020/12/android-emulator-and-operating-system.html)
*   [https://0fajarpurnama0.medium.com/android-emulator-and-operating-system-for-personal-computer-efb1c3317f6f](https://0fajarpurnama0.medium.com/android-emulator-and-operating-system-for-personal-computer-efb1c3317f6f)
*   [https://0fajarpurnama0.github.io/internet/2020/09/21/android-emulator-operating-system-pc](https://0fajarpurnama0.github.io/internet/2020/09/21/android-emulator-operating-system-pc)
*   [https://blurt.buzz/blurtutorials/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer?referral=fajar.purnama](https://blurt.buzz/blurtutorials/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer](https://steemit.com/technology/@fajar.purnama/android-emulator-and-operating-system-for-personal-computer)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/android-emulator-operating-system-pc](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/android-emulator-operating-system-pc)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/android-emulator-and-operating-system-for-personal-computer](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/android-emulator-and-operating-system-for-personal-computer)
*   [http://0fajarpurnama0.weebly.com/blog/android-emulator-and-operating-system-for-personal-computer](http://0fajarpurnama0.weebly.com/blog/android-emulator-and-operating-system-for-personal-computer)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/152-ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/152-ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository)
*   [https://read.cash/@FajarPurnama/android-emulator-and-operating-system-for-personal-computer-e8074701](https://read.cash/@FajarPurnama/android-emulator-and-operating-system-for-personal-computer-e8074701)
*   [https://www.uptrennd.com/post-detail/android-emulator-and-operating-system-for-personal-computer~ODQwMDAw](https://www.uptrennd.com/post-detail/android-emulator-and-operating-system-for-personal-computer~ODQwMDAw)