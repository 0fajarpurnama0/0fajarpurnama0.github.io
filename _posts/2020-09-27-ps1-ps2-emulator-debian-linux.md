---
layout: post
title: PS1 and PS2 emulator available by default in Debian based Linux repository
category: internet
tags: [Linux, Debian, Playstation, Emulator, Games]
featuredimage: https://images.blurt.buzz/DQmSxQCNoNRJRQcUvZn9cFJVqrTqpd3twKsXdejMRfrnvE5/1.pcsxr-pcsx2.png
description: The pcsxr and pcsx2 emulators are available by default on Debian repository where you only need one command line to install.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/09/27/ps1-ps2-emulator-debian-linux
---
![1.pcsxr-pcsx2.png](https://images.blurt.buzz/DQmSxQCNoNRJRQcUvZn9cFJVqrTqpd3twKsXdejMRfrnvE5/1.pcsxr-pcsx2.png)

If you enjoyed playing the old Playstation 1 & 2 and recently moved to Debian based Linux then this is the article for you but if you have not moved but want to try, read my [previous guide about installing Ubuntu](https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide). A gamer who moved to Linux operating system (OS) up to today may find that video games are lacking compared to Windows. The Windows games either free to play or premium ones if you have a lot of money are easy to install. Just download and and double click. While in Linux, especially the old ones, you probably have to find the missing libraries yourself and if that is not enough, you need to do the file configurations yourself. Yes, there maybe other and better emulators downloadable on the Internet but for now I'll be focusing on the ones available by default in the repository of package manager and leave a comment if you know more.

![2.synaptic.png](https://images.blurt.buzz/DQmPmuFxjxFYiQRSC6NnfYNvbn1EKmk1e23JwnxeaNPXVe7/2.synaptic.png)

Today, one of the first things taught to new Debian bases Linux users are using the package manager to download install softwares. If you use the graphical user interface (GUI), then that is fine, but if you use the terminal, then that is better, and that is enough knowledge to enjoy some classical games. The top ones that enjoyed and available on the package manager are Playstation 1 and Playstation 2 emulators where you only need one command line to install or find the package if you are using a GUI package manager like synaptics. Before installation, it is best practice to update and upgrade your system and sometimes you need to enable 32 bit packages:

<pre style="background-color:black; color:lightgreen">
sudo dpkg --add-architecture i386
sudo apt update
sudo apt full-upgrade
</pre>

## Playstation 1 PCSXR

![3.pcsxr.png](https://images.blurt.buzz/DQmR236M6Am7ybbcNXWyDa9r1QJYoaF3aeTsK3kKMhhXwtZ/3.pcsxr.png)

The playstation 1 emulator that I found available on most Debian based Linux repository is pcsxr. Although Playstation 1 is old that even a dual core CPU laptop with minimal video graphic card can play, the games are still enjoyable for me especially if you enjoy story games such as Suikodens, Final Fantasies, Tri Ace games, Metal Gear Solid, Grandia, and so many to mention. If you are a veteran who are really eager to replay the games but doubt about that it is a waste of time, why not video record or stream while you are playing as recording is much more convenient on the PC? Once you made your mind to install pcsxr, all you need is one command line or find the package on the GUI package manager:

<pre style="background-color:black; color:lightgreen">
sudo apt install pcsxr
</pre>

![4.pcsxr-guardian-of-darkness.png](https://images.blurt.buzz/DQmW4qDxhPnJqvYwswmzip9gyKvDrNG5kBCPvKbATk3Ai8v/4.pcsxr-guardian-of-darkness.png)

That is it! The package manager will search and install all other dependencies for you. If error occurs, usually the terminal will give an explanation and you can search the Internet to see what you can do or you may comment below and I maybe able to help you. Explore the configurations yourself where the important one is configuring the gamepad or keyboard and you can find the files usually in /home/youruser/.pcsxr (if you are using a file manager, show hidden files). Above is a screenshot of me playing The Guardian of Darkness or below is a video if you need more details.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/pcsxr-kali-linux-ps1-emulator/495acc618a94a8f8c14b7f4807a9609f87449165?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Playstation 2 PCSX2

![5.pcsx2.png](https://images.blurt.buzz/DQmaWmigHdQhHZ8Vqc2bGEjReSxaR7WWwbiVieLqgrXLY6u/5.pcsx2.png)

If you have a laptop higher than dual core, you can enjoy better graphic playstation games which are playstation 2 games. The playstation 2 emulator that I found available on most Debian based Linux repository is pcsx2\. Unlike playstation 1 games, playstation 2 games graphics are still decent today. Like install pcsxr, all you need is one command line or find the package on the GUI package manager:

<pre style="background-color:black; color:lightgreen">
sudo apt install pcsx2
</pre>

![6.pcsx2-suikoden-5.png](https://images.blurt.buzz/DQmQT2eAUs2biHGjKyrYe4AHe3KXR21DV1A2AN9SXgLirQt/6.pcsx2-suikoden-5.png)

Just like pcsxr, That is it! The package manager will search and install all other dependencies for you. If error occurs, usually the terminal will give an explanation and you can search the Internet to see what you can do or you may comment below and I maybe able to help you. Explore the configurations yourself where the important one is configuring the gamepad or keyboard and you can find the files usually in /home/youruser/.pcsx2 (if you are using a file manager, show hidden files). Above is a screenshot of me playing Suikoden 5 or below is a video if you need more details.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/pcsx2-kali-linux-ps2-emulator/ebe15f479fb2b25e5f1ab092081935ef9cf81fca?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

![7.software-and-update-nvidia.png](https://images.blurt.buzz/DQmRvyb4zjKMcB2vw1QA5wMbMp2Lz3j2ADhB8gUERgo6YP9/7.software-and-update-nvidia.png)

You may find the graphic while playing pcsx2 slow eventhough it is fine when playing high graphic video games in Windows. Usually, this is because of the graphic processing unit (GPU) card driver. For example when using Nvidia, the default Linux driver is Nouveau which is open source but up to today it is still not optimized. To have better performance, it is better to switch to Nvidia where in Ubuntu just go to Software & Updates and in terminal just install nvidia-dkms package and make sure to install the suitable for version for example my laptop cannot use driver version over 390\. If you are on a complex optimus laptop like me where I have two video cards install which Intel HD Graphic and Nvidia, you probably need to utilize a special software like [bumblebee as I explained on my previous tutorial](https://0fajarpurnama0.github.io/internet/2020/10/12/nvidia-cuda-optimus-laptop-linux).

<div class="video-container"><iframe src="https://lbry.tv/$/embed/2-switch-to-nvidia-and-update-ubuntu/bf97397ceccd2092cd5214613606ade0c334273d?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Legal Status

*   The legal way to obtain Bios is by extracting it from your Playstation hardware however I do find it still ethical to download online as long as you have the Playstation hardware.
*   For games ofcourse I can only recommend to buy them legally. Insert the compact disk (CD) or better create a .iso of the CD using CD burning softwares such as [Nero](https://www.nero.com/), [Daemon Tools](https://www.daemon-tools.cc/), and other disk imager software where in Debian Linux, there is the default disk utility software. I know that you can download these games online but I am not responsible for any problems.

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/ps1-and-ps2-emulator-available-by-default-in-debian-based-li-xdnrord?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/ps1-and-ps2-emulator-available-by-default-in-debian-based-li-xdnrord?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/ps1-and-ps2-emulator-available-by.html](https://0darkking0.blogspot.com/2020/12/ps1-and-ps2-emulator-available-by.html)
*   [https://0fajarpurnama0.medium.com/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository-16374ce9b334](https://0fajarpurnama0.medium.com/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository-16374ce9b334)
*   [https://0fajarpurnama0.github.io/internet/2020/09/27/ps1-ps2-emulator-debian-linux](https://0fajarpurnama0.github.io/internet/2020/09/27/ps1-ps2-emulator-debian-linux)
*   [https://blurt.buzz/blurtutorials/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?referral=fajar.purnama](https://blurt.buzz/blurtutorials/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/ps1-ps2-emulator-debian-linux](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/ps1-ps2-emulator-debian-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository)
*   [http://0fajarpurnama0.weebly.com/blog/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository](http://0fajarpurnama0.weebly.com/blog/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/152-ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/152-ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository)
*   [https://read.cash/@FajarPurnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository-8e12b0a9](https://read.cash/@FajarPurnama/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository-8e12b0a9)
*   [https://www.uptrennd.com/post-detail/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository~ODM1ODYy](https://www.uptrennd.com/post-detail/ps1-and-ps2-emulator-available-by-default-in-debian-based-linux-repository~ODM1ODYy)