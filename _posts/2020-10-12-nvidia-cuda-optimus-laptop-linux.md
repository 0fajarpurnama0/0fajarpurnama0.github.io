---
layout: post
title: Fix Blank Screen Nvidia Optimus Laptop Linux and Cuda
category: internet
tags: [Kali Linux, Nvidia, CUDA, blank screen, fix]
featuredimage: https://cdn.steemitimages.com/DQmRW72dqgBZxB4794cfGrKSXHrLMe4i7TGNe9x3x3hDiiy/kalinvidiacuda.png
description: Find a suitable Nvidia driver version, install bumblebee for optimus laptop, and find suitable CUDA version, wrong version will not work.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/10/12/nvidia-cuda-optimus-laptop-linux
---
## Checklist

I assumed that you got your laptop running and the only thing left is installing Nvidia video driver to perform more advance tasks such as playing video games and parallel processing. Simply, the checklist is knowing your video graphic card and which driver version suits it. For example, my laptop graphic card is Nvidia 720M which has a compute capability of 2.x Fermi. Therefore, the highest Nvidia driver version that supports is 390s and finally the highest cuda version is 8.0 where higher versions are not supported.

<table width="100%" border="1"><caption>Find your card's compute capability at [https://en.wikipedia.org/wiki/CUDA](https://en.wikipedia.org/wiki/CUDA) or check using their [website https://www.nvidia.com/download/index.aspx?lang=en-us](https://www.nvidia.com/download/index.aspx?lang=en-us).</caption>

<tbody>

<tr>

<th>Compute  
capability  
(version)</th>

<th>[Micro-  
architecture](/wiki/Microarchitecture "Microarchitecture")</th>

<th>GPUs</th>

<th>GeForce</th>

<th>Quadro, NVS</th>

<th>Tesla</th>

<th>Tegra,  
Jetson,  
DRIVE</th>

</tr>

<tr>

<td>1.0</td>

<td rowspan="4">[Tesla](/wiki/Tesla_(microarchitecture) "Tesla (microarchitecture)")</td>

<td>G80</td>

<td>GeForce 8800 Ultra, GeForce 8800 GTX, GeForce 8800 GTS(G80)</td>

<td>Quadro FX 5600, Quadro FX 4600, Quadro Plex 2100 S4</td>

<td>Tesla C870, Tesla D870, Tesla S870</td>

<td></td>

</tr>

<tr>

<td>1.1</td>

<td>G92, G94, G96, G98, G84, G86</td>

<td>GeForce GTS 250, GeForce 9800 GX2, GeForce 9800 GTX, GeForce 9800 GT, GeForce 8800 GTS(G92), GeForce 8800 GT, GeForce 9600 GT, GeForce 9500 GT, GeForce 9400 GT, GeForce 8600 GTS, GeForce 8600 GT, GeForce 8500 GT,  
GeForce G110M, GeForce 9300M GS, GeForce 9200M GS, GeForce 9100M G, GeForce 8400M GT, GeForce G105M</td>

<td>Quadro FX 4700 X2, Quadro FX 3700, Quadro FX 1800, Quadro FX 1700, Quadro FX 580, Quadro FX 570, Quadro FX 470, Quadro FX 380, Quadro FX 370, Quadro FX 370 Low Profile, Quadro NVS 450, Quadro NVS 420, Quadro NVS 290, Quadro NVS 295, Quadro Plex 2100 D4,  
Quadro FX 3800M, Quadro FX 3700M, Quadro FX 3600M, Quadro FX 2800M, Quadro FX 2700M, Quadro FX 1700M, Quadro FX 1600M, Quadro FX 770M, Quadro FX 570M, Quadro FX 370M, Quadro FX 360M, Quadro NVS 320M, Quadro NVS 160M, Quadro NVS 150M, Quadro NVS 140M, Quadro NVS 135M, Quadro NVS 130M, Quadro NVS 450, Quadro NVS 420, <sup id="cite_ref-35" class="reference">[[35]](#cite_note-35)</sup> Quadro NVS 295</td>

<td></td>

<td></td>

</tr>

<tr>

<td>1.2</td>

<td>GT218, GT216, GT215</td>

<td>GeForce GT 340*, GeForce GT 330*, GeForce GT 320*, GeForce 315*, GeForce 310*, GeForce GT 240, GeForce GT 220, GeForce 210,  
GeForce GTS 360M, GeForce GTS 350M, GeForce GT 335M, GeForce GT 330M, GeForce GT 325M, GeForce GT 240M, GeForce G210M, GeForce 310M, GeForce 305M</td>

<td>Quadro FX 380 Low Profile, Quadro FX 1800M, Quadro FX 880M, Quadro FX 380M,  
Nvidia NVS 300, NVS 5100M, NVS 3100M, NVS 2100M, ION</td>

<td></td>

<td></td>

</tr>

<tr>

<td>1.3</td>

<td>GT200, GT200b</td>

<td>GeForce GTX 295, GTX 285, GTX 280, GeForce GTX 275, GeForce GTX 260</td>

<td>Quadro FX 5800, Quadro FX 4800, Quadro FX 4800 for Mac, Quadro FX 3800, Quadro CX, Quadro Plex 2200 D2</td>

<td>Tesla C1060, Tesla S1070, Tesla M1060</td>

<td></td>

</tr>

<tr>

<td>2.0</td>

<td rowspan="2">[Fermi](/wiki/Fermi_(microarchitecture) "Fermi (microarchitecture)")</td>

<td>GF100, GF110</td>

<td>GeForce GTX 590, GeForce GTX 580, GeForce GTX 570, GeForce GTX 480, GeForce GTX 470, GeForce GTX 465,  
GeForce GTX 480M</td>

<td>Quadro 6000, Quadro 5000, Quadro 4000, Quadro 4000 for Mac, Quadro Plex 7000,  
Quadro 5010M, Quadro 5000M</td>

<td>Tesla C2075, Tesla C2050/C2070, Tesla M2050/M2070/M2075/M2090</td>

<td></td>

</tr>

<tr>

<td>2.1</td>

<td>GF104, GF106 GF108, GF114, GF116, GF117, GF119</td>

<td>GeForce GTX 560 Ti, GeForce GTX 550 Ti, GeForce GTX 460, GeForce GTS 450, GeForce GTS 450*, GeForce GT 640 (GDDR3), GeForce GT 630, GeForce GT 620, GeForce GT 610, GeForce GT 520, GeForce GT 440, GeForce GT 440*, GeForce GT 430, GeForce GT 430*, GeForce GT 420*,  
GeForce GTX 675M, GeForce GTX 670M, GeForce GT 635M, GeForce GT 630M, GeForce GT 625M, GeForce GT 720M, GeForce GT 620M, GeForce 710M, GeForce 610M, GeForce 820M, GeForce GTX 580M, GeForce GTX 570M, GeForce GTX 560M, GeForce GT 555M, GeForce GT 550M, GeForce GT 540M, GeForce GT 525M, GeForce GT 520MX, GeForce GT 520M, GeForce GTX 485M, GeForce GTX 470M, GeForce GTX 460M, GeForce GT 445M, GeForce GT 435M, GeForce GT 420M, GeForce GT 415M, GeForce 710M, GeForce 410M</td>

<td>Quadro 2000, Quadro 2000D, Quadro 600,  
Quadro 4000M, Quadro 3000M, Quadro 2000M, Quadro 1000M,  
NVS 310, NVS 315, NVS 5400M, NVS 5200M, NVS 4200M</td>

<td></td>

<td></td>

</tr>

<tr>

<td>3.0</td>

<td rowspan="4">[Kepler](/wiki/Kepler_(microarchitecture) "Kepler (microarchitecture)")</td>

<td>GK104, GK106, GK107</td>

<td>GeForce GTX 770, GeForce GTX 760, GeForce GT 740, GeForce GTX 690, GeForce GTX 680, GeForce GTX 670, GeForce GTX 660 Ti, GeForce GTX 660, GeForce GTX 650 Ti BOOST, GeForce GTX 650 Ti, GeForce GTX 650,  
GeForce GTX 880M, GeForce GTX 780M, GeForce GTX 770M, GeForce GTX 765M, GeForce GTX 760M, GeForce GTX 680MX, GeForce GTX 680M, GeForce GTX 675MX, GeForce GTX 670MX, GeForce GTX 660M, GeForce GT 750M, GeForce GT 650M, GeForce GT 745M, GeForce GT 645M, GeForce GT 740M, GeForce GT 730M, GeForce GT 640M, GeForce GT 640M LE, GeForce GT 735M, GeForce GT 730M</td>

<td>Quadro K5000, Quadro K4200, Quadro K4000, Quadro K2000, Quadro K2000D, Quadro K600, Quadro K420,  
Quadro K500M, Quadro K510M, Quadro K610M, Quadro K1000M, Quadro K2000M, Quadro K1100M, Quadro K2100M, Quadro K3000M, Quadro K3100M, Quadro K4000M, Quadro K5000M, Quadro K4100M, Quadro K5100M,  
NVS 510, Quadro 410</td>

<td>Tesla K10, GRID K340, GRID K520, GRID K2</td>

<td></td>

</tr>

<tr>

<td>3.2</td>

<td>GK20A</td>

<td></td>

<td></td>

<td></td>

<td>Tegra K1,  
Jetson TK1</td>

</tr>

<tr>

<td>3.5</td>

<td>GK110, GK208</td>

<td>GeForce GTX Titan Z, GeForce GTX Titan Black, GeForce GTX Titan, GeForce GTX 780 Ti, GeForce GTX 780, GeForce GT 640 (GDDR5), GeForce GT 630 v2, GeForce GT 730, GeForce GT 720, GeForce GT 710, GeForce GT 740M (64-bit, DDR3), GeForce GT 920M</td>

<td>Quadro K6000, Quadro K5200</td>

<td>Tesla K40, Tesla K20x, Tesla K20</td>

<td></td>

</tr>

<tr>

<td>3.7</td>

<td>GK210</td>

<td></td>

<td></td>

<td>Tesla K80</td>

<td></td>

</tr>

<tr>

<td>5.0</td>

<td rowspan="3">[Maxwell](/wiki/Maxwell_(microarchitecture) "Maxwell (microarchitecture)")</td>

<td>GM107, GM108</td>

<td>GeForce GTX 750 Ti, GeForce GTX 750, GeForce GTX 960M, GeForce GTX 950M, GeForce 940M, GeForce 930M, GeForce GTX 860M, GeForce GTX 850M, GeForce 845M, GeForce 840M, GeForce 830M, GeForce GTX 870M</td>

<td>Quadro K1200, Quadro K2200, Quadro K620, Quadro M2000M, Quadro M1000M, Quadro M600M, Quadro K620M, NVS 810</td>

<td>Tesla M10</td>

<td></td>

</tr>

<tr>

<td>5.2</td>

<td>GM200, GM204, GM206</td>

<td>GeForce GTX Titan X, GeForce GTX 980 Ti, GeForce GTX 980, GeForce GTX 970, GeForce GTX 960, GeForce GTX 950, GeForce GTX 750 SE,  
GeForce GTX 980M, GeForce GTX 970M, GeForce GTX 965M</td>

<td>Quadro M6000 24GB, Quadro M6000, Quadro M5000, Quadro M4000, Quadro M2000, Quadro M5500,  
Quadro M5000M, Quadro M4000M, Quadro M3000M</td>

<td>Tesla M4, Tesla M40, Tesla M6, Tesla M60</td>

<td></td>

</tr>

<tr>

<td>5.3</td>

<td>GM20B</td>

<td></td>

<td></td>

<td></td>

<td>Tegra X1,  
Jetson TX1,  
Jetson Nano,  
DRIVE CX,  
DRIVE PX</td>

</tr>

<tr>

<td>6.0</td>

<td rowspan="3">[Pascal](/wiki/Pascal_(microarchitecture) "Pascal (microarchitecture)")</td>

<td>GP100</td>

<td></td>

<td>Quadro GP100</td>

<td>Tesla P100</td>

<td></td>

</tr>

<tr>

<td>6.1</td>

<td>GP102, GP104, GP106, GP107, GP108</td>

<td>Nvidia TITAN Xp, Titan X,  
GeForce GTX 1080 Ti, GTX 1080, GTX 1070 Ti, GTX 1070, GTX 1060,  
GTX 1050 Ti, GTX 1050, GT 1030,  
MX350, MX330, MX250, MX230, MX150, MX130, MX110</td>

<td>Quadro P6000, Quadro P5000, Quadro P4000, Quadro P2200, Quadro P2000, Quadro P1000, Quadro P400, Quadro P500, Quadro P520, Quadro P600,  
Quadro P5000(Mobile), Quadro P4000(Mobile), Quadro P3000(Mobile)</td>

<td>Tesla P40, Tesla P6, Tesla P4</td>

<td></td>

</tr>

<tr>

<td>6.2</td>

<td>GP10B <sup id="cite_ref-36" class="reference">[[36]](#cite_note-36)</sup></td>

<td></td>

<td></td>

<td></td>

<td>Tegra X2, Jetson TX2, DRIVE PX 2</td>

</tr>

<tr>

<td>7.0</td>

<td rowspan="2">[Volta](/wiki/Volta_(microarchitecture) "Volta (microarchitecture)")</td>

<td>GV100</td>

<td>NVIDIA TITAN V</td>

<td>Quadro GV100</td>

<td>Tesla V100, Tesla V100S</td>

<td></td>

</tr>

<tr>

<td>7.2</td>

<td>GV10B <sup id="cite_ref-37" class="reference">[[37]](#cite_note-37)</sup></td>

<td></td>

<td></td>

<td></td>

<td>Tegra Xavier,  
Jetson Xavier NX,  
Jetson AGX Xavier, DRIVE AGX Xavier, DRIVE AGX Pegasus</td>

</tr>

<tr>

<td>7.5</td>

<td>[Turing](/wiki/Turing_(microarchitecture) "Turing (microarchitecture)")</td>

<td>TU102, TU104, TU106, TU116, TU117</td>

<td>NVIDIA TITAN RTX,  
GeForce RTX 2080 Ti, RTX 2080 Super, RTX 2080, RTX 2070 Super, RTX 2070, RTX 2060 Super, RTX 2060,  
GeForce GTX 1660 Ti, GTX 1660 Super, GTX 1660, GTX 1650 Super, GTX 1650, MX450</td>

<td>Quadro RTX 8000, Quadro RTX 6000, Quadro RTX 5000, Quadro RTX 4000,  
Quadro T2000, Quadro T1000</td>

<td>Tesla T4</td>

<td></td>

</tr>

<tr>

<td>8.0</td>

<td rowspan="2">[Ampere](/wiki/Ampere_(microarchitecture) "Ampere (microarchitecture)")</td>

<td>GA100</td>

<td></td>

<td></td>

<td>A100</td>

<td></td>

</tr>

<tr>

<td>8.6</td>

<td>GA102, GA104</td>

<td>GeForce RTX 3090, RTX 3080, RTX 3070</td>

<td>RTX A6000</td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table border="1" width="100%"><caption>Go to [https://docs.nvidia.com/deploy/cuda-compatibility/index.html](https://docs.nvidia.com/deploy/cuda-compatibility/index.html) and check which cuda version supports base on Nvidia driver version.</caption>

<thead>

<tr>

<th>CUDA Toolkit</th>

<th>Linux x86_64 Driver Version</th>

</tr>

</thead>

<tbody>

<tr>

<td>CUDA 11.1 (11.1.0)</td>

<td>>= 455.23.04</td>

</tr>

<tr>

<td>CUDA 11.0 (11.0.171)</td>

<td>>= 450.36.06</td>

</tr>

<tr>

<td>CUDA 10.2 (10.2.89)</td>

<td>>= 440.33</td>

</tr>

<tr>

<td>CUDA 10.1 (10.1.105)</td>

<td>>= 418.39</td>

</tr>

<tr>

<td>CUDA 10.0 (10.0.130)</td>

<td>>= 410.48</td>

</tr>

<tr>

<td>CUDA 9.2 (9.2.88)</td>

<td>>= 396.26</td>

</tr>

<tr>

<td>CUDA 9.1 (9.1.85)</td>

<td>>= 390.46</td>

</tr>

<tr>

<td>CUDA 9.0 (9.0.76)</td>

<td>>= 384.81</td>

</tr>

<tr>

<td>CUDA 8.0 (8.0.61 GA2)</td>

<td>>= 375.26</td>

</tr>

<tr>

<td>CUDA 8.0 (8.0.44)</td>

<td>>= 367.48</td>

</tr>

<tr>

<td>CUDA 7.5 (7.5.16)</td>

<td>>= 352.31</td>

</tr>

<tr>

<td>CUDA 7.0 (7.0.28)</td>

<td>>= 346.46</td>

</tr>

</tbody>

</table>

<table border="1" width="100%"><caption>Go to [https://docs.nvidia.com/deploy/cuda-compatibility/index.html](https://docs.nvidia.com/deploy/cuda-compatibility/index.html) and check which cuda version supports base on compute capability. If it is 2.x Fermi or lower, you have to try Cuda 8 and lower if it still does not work.</caption>

<thead>

<tr>

<th>Hardware Generation</th>

<th>Compute Capability</th>

<th>Driver 384.111+</th>

<th>Driver 410.48+</th>

<th>Driver 418.40.04+</th>

<th>Driver 440.33.01+</th>

<th>Driver 450.36.06+</th>

</tr>

</thead>

<tbody>

<tr>

<td>Ampere</td>

<td>8.0</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>Yes</td>

</tr>

<tr>

<td>Turing</td>

<td>7.5</td>

<td>No</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Volta</td>

<td>7.x</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Pascal</td>

<td>6.x</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Maxwell</td>

<td>5.x</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Kepler</td>

<td>3.x</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Fermi</td>

<td>2.x</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

## Restore Default

<div class="video-container"><iframe src="https://lbry.tv/$/embed/0-purge-nvidia-restore-nouveau/520da057ab99f9983f236f6de48bc38430b85dd3?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

This section is for those who have tried and failed and neeeded to restore the default installation. If you think you do not need this section, go ahead and do so. Still, starting here will be using full terminal in administrator mode and not GUI. If you messed up bad, try pressing ctrl+alt+f2 (try all f1-f12 until you are presented with a terminal). The concept is find all the Nvidia, Cuda, Primus, Bumblebee, and any packages that you just installed and uninstall them and finally reinstall Nouveau. Here I use aptitude to see the packages.

``` 
sudo su
apt install aptitude
aptitude search nvidia
aptitude search cuda
aptitude search bumblebee
aptitude search primus
```

Uninstall all of them one by one or try the following command line and if the following command does not work then uninstall them one by one.

``` 
apt-get purge 'nvidia.*'
apt-get purge 'cuda.*'
apt-get purge 'bumblebee.*'
apt-get purge 'primus.*'
```

Check again using aptitude and after everything is uninstalled, install Nouveau.

``` 
apt-get install 'nouveau.*'
```

Check modprobe configuration directory (/etc/modprobe.d etc), move all files associated with Nvidia to another directory, and check all remaining files whether Nouveau is blacklisted and if so remove the blacklist. Finally, restart your laptop.

## Install Nvidia Video Driver

<div class="video-container"><iframe src="https://lbry.tv/$/embed/1-install-nvidia-packages-installing/c3c64be345b23be3985c693169ddf5a574700d80?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

Most of the time is best practice to update and upgrade your system:

``` 
apt update
apt full-upgrade
```

Before continuing, you can checked your video cards information and driver installed using the following commands:

``` 
lspci -v
```

The general way to install nvidia driver in Linux is to install nvidia-kernel-dkms. I recommend to install nvidia-smi as well if it is not included in the installation as it is on of the best way to see whether the driver is working or not.

``` 
apt install nvidia-kernel-dkms
apt install nvidia-smi
```

I recommend to reboot to see whether this step is problematic or not. If you are using an older Optimus Laptop like me with Intel HD Graphic and Nvidia, the probability is high that Nvidia driver will not work and will leave you with blank screen. If you have internet connection through LAN cable or USB tethering than there is no fear of rebooting as you can easily connect to the Internet. If you use WiFi than it can be challenging setting up Internet using the command line so I recommend to learn how to do it first. If you are already sure that it will be a blank screen, then do not reboot and proceed to the next step.

``` 
reboot
```

## Fixing Blank Screen After Nvidia Driver Installation

<div class="video-container"><iframe src="https://lbry.tv/$/embed/2-blank-screen-and-solution-installing/315d2157ef9edd3f373f8f09379a7d1a8d0f8de9?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

If in the end you are left with a blank screen then press ctrl+alt+f2 (try from f1-f12) to start the console. Once you are successful, connect to the Internet and check the version of the installed nvidia package.

``` 
apt show nvidia-kernel-dkms
```

Go back to the check list section and see whether the driver version supports your card or not. In my case, the driver installed is the latest version that does not support my old GT720M. The highest that supports is 390\. Therefore search for suitable nvidia driver version in your package manager. If you cannot find a suitable version in you package manager then you have to download manually from [Nvidia website](https://www.nvidia.com/download/index.aspx?lang=en-us). Usually, when trying to install, the previous version that you installed will be replace but if it does not then purge it manually.

``` 
aptitude search nvidia
apt install nvidia-legacy-390xx-kernel-dkms
reboot
```

If the last step still does not work then try either or both of the following steps. The first step is to install opencl where I found this step on [Kali Linux Website](https://www.kali.org/docs/general-use/install-nvidia-drivers-on-kali-linux/).

``` 
apt install mesa-opencl-icd
reboot
```

and/or

``` 
apt install nvidia-opencl-icd
reboot
```

If everything works for you, then congratulations. As for my laptop, it only fixes the blank screen but Nvidia driver does not work when playing video games and performing parallel processing. The following solution fixes my problem and if it does not work, try to purge the opencls if you have installed. Bumblebee and bbswitch are packages for laptops that have multiple graphic cards.

``` 
apt install bbswitch-dkms bumblebee-nvidia
nano /etc/bumblebee/bumblebee.conf
nano /etc/bumblebee/xorg.conf.nvidia
reboot
```

If everything succeeded, well done, if not then I do not know anymore ways for now so do comment if you found another way. Check everything:

``` 
lspci -v
nvidia-smi
lsmod
glxgears
glxdemo
glxinfo
```

## Install Cuda Toolkit

<div class="video-container"><iframe src="https://lbry.tv/$/embed/3-b-install-cuda-from-advance-packaging/560753d9f499c72ded3a09f3bcbed66b4d2653aa?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

If you want it quick, you can try installing from package manager but do check whether the versions suits your Nvidia card or not:

``` 
apt show nvidia-cuda-toolkit
apt install nvidia-cuda-toolkit
nvcc -V
type nvcc
ls /usr/lib/nvidia-cuda-toolkit
```

<div class="video-container"><iframe src="https://lbry.tv/$/embed/4-install-cuda-toolkit-kali-linux/720b68e1600ee2ee41c39445bb1a5f00d0cf95fb?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

For my case, the nvidia-cuda-toolkit version is to high. My Geforce 720M can only handle up to [CUDA 8](https://developer.nvidia.com/cuda-80-ga2-download-archive), so I have to go to [https://developer.nvidia.com/cuda-toolkit-archive](https://developer.nvidia.com/cuda-toolkit-archive) and get the suitable version.

``` 
dpkg -i [your deb package].deb
apt-key add /var/cuda...../[...].pub (which will be shown on your terminal)
apt update && apt install cuda-toolkit-8-0
```

Edit /etc/environment, edit and add the following lines:

``` 
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/local/cuda/bin"
LD_LIBRARY_PATH="/usr/local/cuda/lib64:/usr/local/cuda/targets/x86_64-linux/lib"
```

``` 
reboot
nvcc -V
```

CUDA 8 support GCC and G++ up to version 5 and not higher. So follow the instruction from [https://unix.stackexchange.com/questions/384780/how-to-temporarily-change-default-version-of-gcc-in-archlinux](https://unix.stackexchange.com/questions/384780/how-to-temporarily-change-default-version-of-gcc-in-archlinux)

``` 
apt install gcc-5 g++-5
sudo ln -s $(which gcc-5) /usr/local/bin/gcc
sudo ln -s $(which g++-5) /usr/local/bin/g++
hash -r
```

To restore default GCC:

``` 
sudo rm /usr/local/bin/gcc /usr/local/bin/g++
hash -r
```

<div class="video-container"><iframe src="https://lbry.tv/$/embed/3-a-install-cudatoolkit-from-nvidia/e4354e5789a2b3ed2013018658f021701146d8a7?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

If you are using Ubuntu or any distros mentioned on their website, it will be smoother to download install the deb package instead. If you have to use the run file, then do the following and finally check the logs if any errors persists.

``` 
sudo chmod +x cuda_8.0.61_375.26_linux.run
sudo sh cuda_8.0.61_375.26_linux.run --override
Follow the command-line prompts

Do you accept the previously read EULA?
accept/decline/quit: accept

You are attempting to install on an unsupported configuration. Do you wish to continue?
(y)es/(n)o [ default is no ]: yes

Install NVIDIA Accelerated Graphics Driver for Linux-x86_64 375.26?
(y)es/(n)o/(q)uit: no

Install the CUDA 8.0 Toolkit?
(y)es/(n)o/(q)uit: yes

Enter Toolkit Location
 [ default is /usr/local/cuda-8.0 ]: 

Do you want to install a symbolic link at /usr/local/cuda?
(y)es/(n)o/(q)uit: yes

Install the CUDA 8.0 Samples?
(y)es/(n)o/(q)uit: yes

Enter CUDA Samples Location
 [ default is /home/fajarpurnama ]: /usr/local/cuda-8.0/samples
```

``` 
Edit /etc/environment, edit and add the following lines:

PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/local/cuda/bin"
LD_LIBRARY_PATH="/usr/local/cuda/lib64:/usr/local/cuda/targets/x86_64-linux/lib"
```

<div class="video-container"><iframe src="https://lbry.tv/$/embed/3-c-install-nvidia-cuda-toolkit-6-5/4afd1d7daf9c3b566654ad547d1ef4fd11c4d969?r=2NsZn4n3fJ6o9X4nv3rtzU4USXZTXNv9" allowfullscreen=""></iframe></div>

If you are on older cards, you need to search the suitable cuda version or maybe your card are not supported at all. For example, I once come across ancient cards of GTS250 and GT8800 with compute capability of 1.1 Tesla and the cudatoolkit that supports is 6.5.

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda-xolemgw?a=4oeEw0Yb0B&tid=hicc](https://www.publish0x.com/0fajarpurnama0/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda-xolemgw?a=4oeEw0Yb0B&tid=hicc)
*   [https://0darkking0.blogspot.com/2020/10/fix-blank-screen-nvidia-optimus-laptop.html](https://0darkking0.blogspot.com/2020/10/fix-blank-screen-nvidia-optimus-laptop.html)
*   [https://medium.com/@0fajarpurnama0/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda-83923ce4804f](https://medium.com/@0fajarpurnama0/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda-83923ce4804f)
*   [https://0fajarpurnama0.github.io/internet/2020/10/12/nvidia-cuda-optimus-laptop-linux](https://0fajarpurnama0.github.io/internet/2020/10/12/nvidia-cuda-optimus-laptop-linux)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/nvidia-cuda-optimus-laptop-linux.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/nvidia-cuda-optimus-laptop-linux.html)
*   [https://steemit.com/computers/@fajar.purnama/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda?r=fajar.purnama](https://steemit.com/computers/@fajar.purnama/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda?r=fajar.purnama)
*   [https://hive.blog/computers/@fajar.purnama/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda?r=fajar.purnama](https://hive.blog/computers/@fajar.purnama/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda?r=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda)
*   [http://0fajarpurnama0.weebly.com/blog/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda](http://0fajarpurnama0.weebly.com/blog/fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/72-fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/72-fix-blank-screen-nvidia-optimus-laptop-linux-and-cuda)