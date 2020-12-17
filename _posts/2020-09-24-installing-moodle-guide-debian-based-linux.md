---
layout: post
title: Installing Moodle Guide on Debian Based Linux
category: internet
tags: [Moodle, Linux, Ubuntu, server, learning management system]
featuredimage: https://images.blurt.buzz/DQmRs1iis8N37QkUrwMCz2oVHSgc14YGGkZhUrx9A9KeAvq/4.moodle-install-first-page.png
description: The steps are installing web and database server, php packages, download moodle files and put into web server directory, and open browser.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/09/24/installing-moodle-guide-debian-based-linux
---
## Moodle Brief Introduction

Moodle is one of the most popular learning management system (LMS) that provides online learning services. Student's read materials, conduct discussions, submit assignments, and attempt quizzes from outside the class and on the other side, teachers can provide materials, grade, evaluation, and other forms of management. Moodle does not necessarily have to replace traditional face to face learning but can be blended to make tradional learning more convenient just as implemented on the Universities that I graduated from which are [Udayana University](https://elearning.unud.ac.id/) and [Kumamoto University](https://md.kumamoto-u.ac.jp/).

As technology advances, online and distant learning is no longer exclusive to big institutions with specialized technicians. Today, everybody can try and install Moodle in their computers and experiment their own local computer based learning. No special skill is needed but just some experience working with servers and web based applications. In fact, we do not need those skills since the installation guide is available here. For now, the Moodle installation here is in Ubuntu Linux as it is the most popular operating system (OS) for servers for general users. If you have not install Ubuntu or other Debian based Linux, you can follow my [previous guide](https://0fajarpurnama0.github.io/internet/2020/10/01/trying-installing-linux-ubuntu-guide) or wait for my future [guide in Windows](https://0fajarpurnama0.github.io/internet/2020/09/25/installing-moodle-guide-windows-xampp).

## Installing The Server

Before anything else, make sure the Debian Linux is updated by entering the following command in terminal:

<pre style="background-color:black; color:lightgreen">
sudo apt update && sudo apt full-upgrade
</pre>

There are three main packages needed to install the server:

1.  Web Server (Apache2 is used here)
2.  Database Server (MySQL is used here)
3.  PHP language packages

Use any web server and database server you want. Here Apache2 and MySQL is used because they are the most popular among general users. The following packages are enough for Moodle installation today:

<pre style="background-color:black; color:lightgreen">
sudo apt install apache2 mysql-server php php-mysql php-xml php-curl php-zip php-gd php-mbstring php-xmlrpc php-soap php-intl
</pre>

If the packages above are not found then ask your OS's community for similar packages for example maybe php-mysql does no work but php7.0-mysql does. If you do not like using command line then bear with me with just one command line to install a graphical user interface (GUI) package manager Synaptic if your distribution does not have a built-in one:

<pre style="background-color:black; color:lightgreen">
sudo apt install synaptic
</pre>

![1.synaptic.png](https://images.blurt.buzz/DQmaEN5jEb81Y1Crc77SSLSrbQjJgEwLGMCVQNrn4x52AUc/1.synaptic.png)

Search whatever your GUI package manager is in the search menu, open, and install the above packages such as apache2, mysql-server, and php.

If the servers are not automatically started, then enter the following commands:

<pre style="background-color:black; color:lightgreen">
sudo service apache2 start
sudo service mysql start
</pre>

![2.localhost.png](https://images.blurt.buzz/DQmPwbntQPjpz5zvZHRcrSPCq79CaEPkkQzJdkjo4wA9EcH/2.localhost.png)

If everything went well, open your browser and enter [https://localhost](https://localhost) or [https://127.0.0.1](https://127.0.0.1) and your default local web page will appear. If you are connected to a network, ask your friend to enter your IP address on the browser. This guide does not provide networking steps and if you need it, go to my [previous guide](https://0fajarpurnama0.github.io/internet/2020/10/18/manually-set-ip-address-version-4).

## Installing Moodle

### Downloading and Placing the Files

![3.moodle-file-location.png](https://images.blurt.buzz/DQmdB8CbtVmenDV4RXfsobv1ReWRvbVkLKtTBNX5W4wTrwB/3.moodle-file-location.png)

The contents of your local web server are in /var/www/html where if you want to add more contents, add them to that directory. For example you want add your sample .html page, you can them to /var/www/html/mysample.html and then open [https://localhost/mysample.html](https://localhost/mysample.html). You can also add new direcotory for example /var/www/html/mydirectory and then open [https://localhost/mydirectory](https://localhost/mydirectory). Therefore, all you need to do is to download the Moodle files on [their website](https://moodle.org/), extract them if the are archived, and put the folder containing the files into /var/www/html/. For example, mine is /var/www/html/moodle.

Before that, /var/www/html and its surrounding directory can only be modified by administrator account or root. Either do them in the terminal or open your filemanager using root for example mine using nautilus file manager:

<pre style="background-color:black; color:lightgreen">
sudo nautilus
</pre>

In summary:

1.  Download the Moodle files on [their website](https://moodle.org/).
2.  Extract the files which should be one folder containing many files.
3.  Open file manager as root or use terminal or command line.
4.  Copy or move the Moodle folder into /var/www/html

### If you know how to use git, this step is preferred.

Moodle is ever developing and it is easier to upgrade it using git rather than downloading the new version everytime and cleaner than upgrading from the web browser. Feel free to skip this step if you want and follow the previous but if you want long term convenient management then [get moodle from git](https://docs.moodle.org/310/en/Git_for_Administrators):

<pre style="background-color:black; color:lightgreen">
sudo apt install git
cd /var/www/html
sudo git clone git://git.moodle.org/moodle.git
cd moodle
sudo git branch -a
sudo git checkout (your preferred version which is usually the latest for example:)
sudo git checkout MOODLE_310_STABLE
</pre>

### Moodle Web Installation

![4.moodle-install-first-page.png](https://images.blurt.buzz/DQmRs1iis8N37QkUrwMCz2oVHSgc14YGGkZhUrx9A9KeAvq/4.moodle-install-first-page.png)

To proceed with web installation, open [https://localhost/yourmoodlefolder](https://localhost/yourmoodlefolder) where mine is [https://localhost/moodle](https://localhost/moodle) or if you are from a network [https://youripaddress/moodle](https://localhost/moodle) or [https://yourdomainname/moodle](https://yourdomainname/moodle).

![5.moodledata-directory-problem.png](https://images.blurt.buzz/DQmScvPrM9AvDdxhUb1cSvpq8NYjQr9upnpxvK7mR4QUWQA/5.moodledata-directory-problem.png)

The first problem that I encounter is that it cannot create moodledata at /var/www. I know three solutions:

Right click /var/www directory, properties and change the permission to allow all (not recommended) or:

<pre style="background-color:black; color:lightgreen">
sudo chmod 777 /var/www
</pre>

Right click /var/www directory, properties and change ownership and group to www-data (not my best) or:

<pre style="background-color:black; color:lightgreen">
sudo chown www-data:www-data /var/www
</pre>

Create moodledata folder in /var/www directory manually, right click moodledata, properties and change ownership and group to www-data (my best solution) or:

<pre style="background-color:black; color:lightgreen">
sudo mkdir /var/www/moodledata
sudo chown www-data:www-data /var/www/moodledata
</pre>

![6.moodle-database-configuration.png](https://images.blurt.buzz/DQmYPGSjY999LZAqdiU5KLLjWE1dhUmttXnE8UeeEYrf2S2/6.moodle-database-configuration.png)

In this guide, the database is in one machine, therefore the database host is localhost or 127.0.0.1\. If the database is in another machine then insert the ip address or domain name. The database name is whatever you like, I leave it to moodle, just remember the name. Database user and password can either be the admin user or advance user creates a separate user for security. If what you write does not work, then either your forgot and write it wrong, or using a database that does not support the default admin user where the solution is to create a new user for it through terminal mysql -u root or try install phpmyadmin. Table prefix is also whatever you like. You can leave the port empty where the default port 3306 is used or specify your configured port. You can leave Unix socket empty or your specified one.

![7.configuration-file-problem.png](https://images.blurt.buzz/DQmR9ay7XXYWtP5NrNpRcPdVUJN1qWLcC32hMGFAoFzcQ1R/7.configuration-file-problem.png)

You will be given a configuration script but you may encounter a problem that it cannot write in the directory due to permission problem where the solution is either:

Right click /var/www/html/moodle directory, properties and change the permission to allow all (not recommended) or:

<pre style="background-color:black; color:lightgreen">
sudo chmod 777 /var/www/html/moodle
</pre>

Right click /var/www/html/moodle directory, properties and change ownership and group to www-data (not recommended either) or:

<pre style="background-color:black; color:lightgreen">
sudo chown www-data:www-data /var/www/html/moodle
</pre>

Create config.php file in /var/www/moodle directory manually, right click config.php, properties and change ownership and group to www-data and after installation, return the ownership to root (not the best) or:

<pre style="background-color:black; color:lightgreen">
sudo touch /var/www/moodle/config.php
sudo chown www-data:www-data /var/www/moodle/config.php
(after installation:)
sudo chown root:root /var/www/moodle/config.php
</pre>

Create config.php file in /var/www/moodle directory manually, edit config.php and paste the script shown on the installation (the best solution) or:

<pre style="background-color:black; color:lightgreen">
sudo (your preferred editor) /var/www/moodle/config.php
(mine is:)
sudo gedit /var/www/moodle/config.php
</pre>

![8.final-check.png](https://images.blurt.buzz/DQmfQrn6qgCRYEkq43vPBxFkAjQJ18QmKht7i95JCPdkCUd/8.final-check.png)

If everything is well than everything is green. If not, install the missing packages, or click the warnings or errors and you will be redirected to suggestions of how to solve it. After successful installation, all you need to do is to explore yourself.

![9.my-course-screenshot.png](https://images.blurt.buzz/DQmb81nbEjjQb3oNwmrk8AoafMEAwy8NioxSkD2cPyCrsfQ/9.my-course-screenshot.png)

Here is a screenshot of my created course on [https://md.hicc.cs.kumamoto-u.ac.jp/course/view.php?id=6](https://md.hicc.cs.kumamoto-u.ac.jp/course/view.php?id=6).

## Video Guide

If you are missing some details, maybe my videos can help you with timestamp available. Installation takes 30 minutes and the rest are exploration post installation.

<div class="video-container">
	<iframe src="https://lbry.tv/$/embed/installing-and-simple-use-of-moodle-on/923a915834eb9f8773190c04a70b9a26d3399bcd?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen></iframe>
</div>
<div class="video-container">
	<iframe src="https://lbry.tv/$/embed/Installing-and-Simple-Use-of-Moodle-on-Ubuntu-2-2/b37bd6d735673786c5e4f1a57b983a6b6cc840c6?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen></iframe>
</div>

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/installing-moodle-guide-on-debian-based-linux-xnqlwxj?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/installing-moodle-guide-on-debian-based-linux-xnqlwxj?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/installing-moodle-guide-on-debian-based.html](https://0darkking0.blogspot.com/2020/12/installing-moodle-guide-on-debian-based.html)
*   [https://0fajarpurnama0.medium.com/installing-moodle-guide-on-debian-based-linux-3c61ae3e085](https://0fajarpurnama0.medium.com/installing-moodle-guide-on-debian-based-linux-3c61ae3e085)
*   [https://0fajarpurnama0.github.io/internet/2020/09/24/installing-moodle-guide-debian-based-linux](https://0fajarpurnama0.github.io/internet/2020/09/24/installing-moodle-guide-debian-based-linux)
*   [https://blurt.buzz/blurtech/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?referral=fajar.purnama](https://blurt.buzz/blurtech/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/installing-moodle-guide-on-debian-based-linux?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/installing-moodle-guide-debian-based-linux](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/installing-moodle-guide-debian-based-linux)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/installing-moodle-guide-on-debian-based-linux](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/installing-moodle-guide-on-debian-based-linux)
*   [http://0fajarpurnama0.weebly.com/blog/installing-moodle-guide-on-debian-based-linux](http://0fajarpurnama0.weebly.com/blog/installing-moodle-guide-on-debian-based-linux)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/143-installing-moodle-guide-on-debian-based-linux](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/143-installing-moodle-guide-on-debian-based-linux)
*   [https://read.cash/@FajarPurnama/installing-moodle-guide-on-debian-based-linux-a9e796b9](https://read.cash/@FajarPurnama/installing-moodle-guide-on-debian-based-linux-a9e796b9)
*   [https://www.uptrennd.com/post-detail/installing-moodle-guide-on-debian-based-linux~ODMyNTI3](https://www.uptrennd.com/post-detail/installing-moodle-guide-on-debian-based-linux~ODMyNTI3)