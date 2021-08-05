---
layout: post
title: Trying and Installing Linux Ubuntu Guide
category: internet
tags: [Linux, Ubuntu, bootable, external, virtual machine, VirtualBox, Rufus, internal, disk, drive, Windows, Etcher, computers, technology]
featuredimage: https://cdn.steemitimages.com/DQmRW72dqgBZxB4794cfGrKSXHrLMe4i7TGNe9x3x3hDiiy/kalinvidiacuda.png
description: The steps are download Linux, create a bootable drive, start boot menu and bootable drive, try it, and install it either in internal or external drive.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide
---
## Why Install Linux?

![0.ubuntu-install-cover.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmU84yMp2smDmKYV16BgjKnKg32S3n4QkTJen7ZmtNBhxj/0.ubuntu-install-cover.png)

Old users probably bought their laptops with Windows installed. Some new users got their Mac Book with MacOS installed. While in the west buying software are just like buying meals, in the east people have to work hard to earn money to buy these softwares. It is frustating enough to see people allocating software cost by cutting their on the edge living allowance, most people choose to cross the line by illegally cracking the software instead. I still remembered back in my undergraduate studies that Microsoft Office and Matlab is an essential software for course works and assignments. Instead of buying them by cutting a few months worth of allowance, why not just crack them? You know what? Cracking was the only alternative we know. We didn't know there was Openoffice, Libreoffice, and Octave. Though freewares are now more available in Windows and MacOS, Linux is still the home to free and open source software. Did I forget to mention back then that even my Windows was cracked? Well most Linux distribution are not only free but opensource as well which means the codes are open for anyone to see. The following are reasons that I can think of for installing Linux:

*   Mainly Linux are for those who wants to see the source code of the operating system, customize them, and maybe reuse them to make their own operating system.
*   For general users, it is the home of free and opensource software where instead of cracking software for those who cannot and does not want to buy software, use Linux instead that secures us from the law.
*   Other than for those who wants to support open source software, are for those who are curious. Why not give it a try? It does not hurt and nothing to lose. It is not like the old times where Linux are difficult to use but Linux has advanced to be more beautiful and user friendly.

## Download Linux and Create a Bootable Drive

<div class="video-container"><iframe src="https://lbry.tv/$/embed/creating-ubuntu-installer-on-usb-using/8150a3e0ab740005e0c3c37e34872c1ed96794ba?r=FEwrQKrpAjwHupnPE2nGBDmTuS4ZhSJM" allowfullscreen=""></iframe></div>

Download any Linux distribution for free on their websites. For first time users, I recommend trying [Ubuntu](https://ubuntu.com/download/desktop) where although there are many user friendly Linux distributions suited for beginners Ubuntu is the most popular general users Linux distribution today. If the information regarding to the problems you are facing are not already available online, then you can just ask the community and they usually respond quickly.

After downloading the Linux disk image is to create a bootable drive. The popular bootable drive today is a bootable USB where we the Linux into a USB and boot it in startup. I am guessing that most of you are Windows user and my favourite software to create a bootable drive is [Rufus](https://rufus.ie/). If you are on MacOS or rarely you bought a laptop with Linux installed and want to install another Linux, my favourite is [Balena Etcher](https://www.balena.io/etcher/). Ofcourse there are other utilities such as [Win32 Disk Imager](https://win32diskimager.download/) and [Unetbootin](https://unetbootin.github.io/), my favourites for now are Rufus and Etcher but feel free to try other utilities but becareful of malware.

Today's utility provides protection as it does not read internal and large external hard disks preventing us from messing our existing system. We can show them by clicking a checkbox and will notify us to proceed with caution. Well the only risk is that we may forget to backup the contents of our flash drive and procceed with the flash erasing the contents in the process. The main process from the video are:

1.  Download and install the utility.
2.  Choose a USB drive to flash.
3.  Choose the Ubuntu or any OS disk image as the material.

By the way, if you prefer the old way of using a CD drive, you can try downloading any CD burning utilities such as [Nero](https://www.nero.com/) and [Daemon Tools](https://www.daemon-tools.cc/).

## Installing Linux Ubuntu

### On Virtual Machine

<div class="video-container"><iframe src="https://lbry.tv/$/embed/ubuntu-16-10-virtualbox-windows-10/189f45dcebb9c8781eda3f637c652c8237375c87?r=7GS7QBiq7rnfAr8n8pE9tHPBZzuJwQ3W" allowfullscreen=""></iframe></div>

If you want to try Ubuntu or any other operating systems (OS) but not yet confident in installing directly to the computer with reasons such as afraid of messing up the current system, then you can try virtual machines. Virtual machines runs your OS on top of existing one just like other software and applications so you do not need to worry about messing your current system. Another reason is if you have a high spec computer that is powerful enough to run 2 OS at the same time which may make you feel lazy to install two seperate OS in one PC (dualboot) and just install the OS on top of existing one. If you are confident enough or do need this step, just skip it. If you can afford, you can try [VMware](https://www.vmware.com/). If not, you can try [VirtualBox](https://www.virtualbox.org/). Detail discussion is not necessary here as you can just install and explore and delete and try again if you fail as there are no risk. However, from the video, here are some highlighted steps:

1.  Create a new machine.
2.  Choose the disk type. Virtual Box disk type are usually compatible with Virtual Box only. If you want to transfer to VMware or other software, choose another type. So you can install and save the virtual drive in your storage and you can open it on another computer with Virtual Box or other virtual machine software installed.
3.  Allocate the amount of RAM generally not more than half of your existing RAM where the software will give you some recommendations.
4.  Go to settings for further configurations such as the display for video card memory, storage for inserting the Ubuntu or other OS disk image, network for connecting to the Internet and other networks, and more.
5.  Start the machine and proceed with the installation.

### On Internal Hard Drive (Default Way)

![1.boot-menu-button.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmTiYpGqDBsgaJRxFodhdPcTaYSN4PTbeh3pMY1J19w63S/1.boot-menu-button.png)

Now that you have a bootable driver, shutdown the computer, plug in the drive, turn on the computer, and quickly go to boot menu and if there is none then press F2 for setup menu and choose the bootable drive (flash drive here) to be boot first. For example on ASRock mother board, the boot menu is F11, for my ASUS laptop is ESC, search on the net for what button on your PC that opens the boot menu.

![2.install-alongside-other-os.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbXfTfBirxmPmAPFXU37sGz8Fk6sW7Ci7Q2gG6NJsmr1a/2.install-alongside-other-os.png)

If you think the step is black and white like in the old days or green texts like in the movies then you are behind times. Today, the installation process is almost as easy as operating your smartphone. All you have to do is follow the guidance, frankly just read the texts. You can even try Ubuntu first before proceeding with the installation. The only step that you need to be aware of is "Installation Type" which can cause you your data by maybe you accidently choose erase everything and install fresh or choose the wrong partition to install. For beginners, it is very recommended to buy a large enough drive to backup the data and/or the safest is to clone the internal hard drive. If you are a Windows user, Ubuntu is already very cooperative with Windows where there is an option to install Ubuntu alongside Windows and after choosing that option, the process is automated and almost never any problem. Here on my screenshot, I have both Windows and Kali Linux installed which is why the option said "Install Ubuntu alongside them".

<div class="video-container"><iframe src="https://lbry.tv/$/embed/1-a-intalling-ubuntu-18-04-lts-bionic/e7e5408909787a889995e01c1a90c1fc57791054?r=7GS7QBiq7rnfAr8n8pE9tHPBZzuJwQ3W" allowfullscreen=""></iframe></div>

Unfortunately, I do not have a video of installing alongside them but the recording should not be much different from install fresh. I do have a video of the "something else" option on the next subsection. Ofcourse, if you are an expert, you would probably prefer "something else" and make your own customization. The "install alongside ..." is just a user friendly option for general users.

### On External Hard Drive

<div class="video-container"><iframe src="https://lbry.tv/$/embed/installing-ubuntu-16-10-to-external/dba57d85a272c969e1c826dfea65eeddda0a7b59?r=7GS7QBiq7rnfAr8n8pE9tHPBZzuJwQ3W" allowfullscreen=""></iframe></div>

Installing on external hard drive is what something people rarely do but people do it because:

*   They are moving from places to places (maybe office to office) and does carry portable computers such as laptop so they bring a preinstalled flash drive or external hard drive and boot them on any computer they find rather than the already installed OS in the internal hard drive.
*   For further reasons such as for privacy such as using [Tails OS](https://tails.boum.org/) or any other functions that most OS are not capable of such as Forensics where it is better to bring a specialized OS in a flash drive.
*   Finally for those who does not want to dual-boot nor use a virtual machine.

The installation method is similar but with few difference as follow after choosing the "Choose something else":

![3.install-bootloader-external-hard-drive.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRfyijCkxj9rwJexBs74cfftxE2NjniTcTxqcBg4izmr8/3.install-bootloader-external-hard-drive.png)

Install the bootloader on the external hard drive. Make sure to find the correct drive. If select wrongly for example on internal hard drive your system will be confused if the external hard drive is plugged off also with anywhere else, it may not work properly.

![4.install-system-external-hard-drive.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmXDZjuNoJY5tR2SnM5H1Qn8i63GYt4A2koPNcVHFC8hHG/4.install-system-external-hard-drive.png)

Install system and swap on external hard drive. Find the external hard drive, delete and format if necessary, and put the "/" signed which means to install the system there. Install swap partition if necessary.

![5.boot-from-external-hard-drive.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmf22ywTYqDPYsyKEuVyP6bary7HHgdciNjgB3P7qmBwUY/5.boot-from-external-hard-drive.png)

Plug the external hard drive before turning on the computer, start the boot menu, and choose to boot from the external hard drive.

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/trying-and-installing-linux-ubuntu-guide-xjmjevg?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/trying-and-installing-linux-ubuntu-guide-xjmjevg?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/trying-and-installing-linux-ubuntu-guide.html](https://0darkking0.blogspot.com/2020/12/trying-and-installing-linux-ubuntu-guide.html)
*   [https://0fajarpurnama0.medium.com/trying-and-installing-linux-ubuntu-guide-c6a394f92233](https://0fajarpurnama0.medium.com/trying-and-installing-linux-ubuntu-guide-c6a394f92233)
*   [https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide](https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide)
*   [https://blurt.buzz/blurtech/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/trying-and-installing-linux-ubuntu-guide?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/trying-installing-linux-ubuntu-guide](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/trying-installing-linux-ubuntu-guide)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/trying-and-installing-linux-ubuntu-guide](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/trying-and-installing-linux-ubuntu-guide)
*   [http://0fajarpurnama0.weebly.com/blog/trying-and-installing-linux-ubuntu-guide](http://0fajarpurnama0.weebly.com/blog/trying-and-installing-linux-ubuntu-guide)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/137-trying-and-installing-linux-ubuntu-guide](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/137-trying-and-installing-linux-ubuntu-guide)
*   [https://read.cash/@FajarPurnama/trying-and-installing-linux-ubuntu-guide-79385cb8](https://read.cash/@FajarPurnama/trying-and-installing-linux-ubuntu-guide-79385cb8)
*   [https://www.uptrennd.com/post-detail/trying-and-installing-linux-ubuntu-guide~ODI4NjI5](https://www.uptrennd.com/post-detail/trying-and-installing-linux-ubuntu-guide~ODI4NjI5)