---
layout: post
title: Installing Moodle Guide on Windows XAMPP
category: internet
tags: [Moodle, Windows, XAMPP, server, learning management system]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmRs1iis8N37QkUrwMCz2oVHSgc14YGGkZhUrx9A9KeAvq/4.moodle-install-first-page.png
description: The difference on the Ubuntu version is the directory location C:xampp\htdocs and GUI control panel and the rest of the process are the same
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/09/25/installing-moodle-guide-windows-xampp
---
In my [previous guide](https://0fajarpurnama0.github.io/internet/2020/09/24/installing-moodle-guide-debian-based-linux), I wrote a tutorial of installing Moodle learning management system (LMS) on my preferred server operating system (OS) for general users Ubuntu, a Debian based Linux. If you really do not want to try Ubuntu and go ahead with Windows, here I provide a tutorial that was my undergraduate assignment in 2013\. Yes, it is behind times but they are still similar where you can maneuver the difference yourself. Another side, if this tutorial does not serve as a guide, then it can serve as a memory for those who are curious of how XAMPP 1.8.1 and Moodle 2.3.2 is back then.

Download XAMPP on [http://www.apachefriends.org/en/xampp-windows.html](http://www.apachefriends.org/en/xampp-windows.html) , and install. Open the control panel if already install, apache and mysql is necessary for localhost.

![Figure 1. XAMPP control Panel version 3.1.0.png](https://cdn.steemitimages.com/DQmfHTMb1JnDeiCXEJMRRJkdAXAXG1GbUXhN5JKw7espinE/Figure%201.%20XAMPP%20control%20Panel%20version%203.1.0.png)

Figure 1\. XAMPP control Panel version 3.1.0

Open your browser and type [http://localhost](http://localhost), if succeeded it should look like below.

![Figure 2. XAMPP Localhost frontpage.png](https://cdn.steemitimages.com/DQmTpcgamqdUarEi2UprbQ4YvAU282CgeJVsasDvK8gUwPT/Figure%202.%20XAMPP%20Localhost%20frontpage.png)

Figure 2\. XAMPP Localhost frontpage

Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin) Go to database and add your moodle's database.

![Figure 3. adding moodle's database.png](https://cdn.steemitimages.com/DQmUFtXqYF8RoAebemqogkkfGy5s1J2GUoyfJuJUyUkeCjs/Figure%203.%20adding%20moodle's%20database.png)

Figure 3\. adding moodle's database

Download Moodle at [https://download.moodle.org/](https://download.moodle.org/) and extract them to C:xampp\htdocs

![Figure 4. extracting moodle folder to localhost.png](https://cdn.steemitimages.com/DQmaC8Tcew8MtFrnw4RqCrusCM8G19sJzQAvCzxSDgsEndt/Figure%204.%20extracting%20moodle%20folder%20to%20localhost.png)

Figure 4\. extracting moodle folder to localhost

On your browser open [http://localhost/moodle](http://localhost/moodle) and follow the installation which should be similar to my previous guide with just different version.

![Figure 5. moodle installation choose language.png](https://cdn.steemitimages.com/DQmSNKSRbe73kGqqh3hW9YxqU1k6s3yTfdYuSnbrarLmP2a/Figure%205.%20moodle%20installation%20choose%20language.png)

Figure 5\. moodle installation choose language

![Figure 6. moodle installation directory path.png](https://cdn.steemitimages.com/DQmW8gc4XTyTwfQouhK6UougC3YP65TdGmZd9B255qJTeuN/Figure%206.%20moodle%20installation%20directory%20path.png)

Figure 6\. moodle installation directory path

![Figure 7. moodle installation choose database driver.png](https://cdn.steemitimages.com/DQmYb2vXDyTCSiAh12rD1UKxkTS9cFfRBe6DtHzxC33YPr9/Figure%207.%20moodle%20installation%20choose%20database%20driver.png)

Figure 7\. moodle installation choose database driver

![Figure 8. moodle installation database setting.png](https://cdn.steemitimages.com/DQmaK53LMK3GfjokW1JMQrrPe545oZxkZV83k188JJQtStZ/Figure%208.%20moodle%20installation%20database%20setting.png)

Figure 8\. moodle installation database setting

![Figure 9. moodle installation copyright notice.png](https://cdn.steemitimages.com/DQmVxv54acfQPswSKRR5cXExRTchW5XNMfChJ2zjNRAiFiq/Figure%209.%20moodle%20installation%20copyright%20notice.png)

Figure 9\. moodle installation copyright notice

![Figure 10. moodle installation final check.png](https://cdn.steemitimages.com/DQmc2pi2bNY49oCoi7SwcrtgKBBH9RJYFJyzLF4k9Ynh7Uh/Figure%2010.%20moodle%20installation%20final%20check.png)

Figure 10\. moodle installation final check

![Figure 11. insert admin profile after successful installation.png](https://cdn.steemitimages.com/DQmYsCzyZT9bvjdnCR9AXM9KChVt75kKzS2nfsnRWtiYqYd/Figure%2011.%20insert%20admin%20profile%20after%20successful%20installation.png)

Figure 11\. insert admin profile after successful installation

For moodle to be available in local area network open with notepad C:xamppmoodle\config.php and change the following line:

$CFG->wwwroot = 'http://localhost/moodle'; to your ip address, $CFG->wwwroot = 'http://172.16.150.45/moodle';

DON'T FORGET "http". That was my mistake. Oh and today it is "https" so do keep up with modern times.

![Figure 12. enabling moodle for local area network.png](https://cdn.steemitimages.com/DQmeXy89rHzttG928BLofuQpf8Ua4U3Lz1J5cknioUDUVTp/Figure%2012.%20enabling%20moodle%20for%20local%20area%20network.png)

Figure 12\. enabling moodle for local area network

![Figure 13. moodle for local area network.png](https://cdn.steemitimages.com/DQmQHj31nUCoTDAeY8fUZNcXxor5axYTW3G8tKAjYyf5kqd/Figure%2013.%20moodle%20for%20local%20area%20network.png)

Figure 13\. moodle for local area network

If you don't know how to configure IP address, go to [previous tutorial](https://0fajarpurnama0.github.io/internet/2020/10/18/manually-set-ip-address-version-4). Back in my undergraduate course, I was also asked to run Moodle on a local domain. Therefore, the following steps are additional but optional:

![Figure 14. find C Windows System32 drivers etc hosts.png](https://cdn.steemitimages.com/DQmbYB2nyPJ62KqMqrCrmR1qXtj1CBU3j1kwBQHpEdf8evR/Figure%2014.%20find%20C%20Windows%20System32%20drivers%20etc%20hosts.png)

Figure 14\. find C:\Windows\System32\drivers\etc\hosts

![Figure 15. add your personal domain name ip address translation here.png](https://cdn.steemitimages.com/DQmTNkhyUSkEgoyWNQXdGmcqXfN6HrFmgiBQisHwHoFJr35/Figure%2015.%20add%20your%20personal%20domain%20name%20ip%20address%20translation%20here.png)

Figure 15\. add your personal domain name ip address translation here

![Figure 16. find C xampp apache conf httpd.conf.png](https://cdn.steemitimages.com/DQmZ6kG54XTd4Z8pZd6QyMsZtdvp1JNZRx3HCaNZJPVPMsb/Figure%2016.%20find%20C%20xampp%20apache%20conf%20httpd.conf.png)

Figure 16\. find C:\xampp\apache\conf\httpd.conf

![Figure 17. include vhost configuration file.png](https://cdn.steemitimages.com/DQmeRew25ZMKuE1TZgmPWqu5SkGwHWm6B5fm3YkGwhM5kwU/Figure%2017.%20include%20vhost%20configuration%20file.png)

Figure 17\. include vhost configuration file

![Figure 18. the vhost configuration file was in C xampp apache conf extra httpd-vhosts.conf.png](https://cdn.steemitimages.com/DQmdSMnT9dTR1u8RGYaY1KnDqiyUm4Ux3XP3edmb3QY3mLe/Figure%2018.%20the%20vhost%20configuration%20file%20was%20in%20C%20xampp%20apache%20conf%20extra%20httpd-vhosts.conf.png)

Figure 18\. the vhost configuration file was in C:\xampp\apache\conf\extra\httpd-vhosts.conf

![Figure 19. add the virtual host lines binding the ip address to the domain name.png](https://cdn.steemitimages.com/DQmWoD8ZX5u6xjPjUmVq3xbjUiafxczQKMkPwYjuUhcXVwE/Figure%2019.%20add%20the%20virtual%20host%20lines%20binding%20the%20ip%20address%20to%20the%20domain%20name.png)

Figure 19\. add the virtual host lines binding the ip address to the domain name

![Figure 20. moodle with personal local domain name ready.png](https://cdn.steemitimages.com/DQmNvRvm52Xvg48BRM9EC2WiF4oY59Wbjt849fRqJ1wn1bN/Figure%2020.%20moodle%20with%20personal%20local%20domain%20name%20ready.png)

Figure 20\. moodle with personal local domain name ready

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/installing-moodle-guide-on-windows-xampp-xnqlzlq?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/installing-moodle-guide-on-windows-xampp-xnqlzlq?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/installing-moodle-guide-on-windows-xampp.html](https://0darkking0.blogspot.com/2020/12/installing-moodle-guide-on-windows-xampp.html)
*   [https://0fajarpurnama0.medium.com/installing-moodle-guide-on-windows-xampp-1556db7c87b7](https://0fajarpurnama0.medium.com/installing-moodle-guide-on-windows-xampp-1556db7c87b7)
*   [https://0fajarpurnama0.github.io/internet/2020/09/25/installing-moodle-guide-windows-xampp](https://0fajarpurnama0.github.io/internet/2020/09/25/installing-moodle-guide-windows-xampp)
*   [https://blurt.buzz/blurtutorials/@fajar.purnama/installing-moodle-guide-on-windows-xampp?referral=fajar.purnama](https://blurt.buzz/blurtutorials/@fajar.purnama/installing-moodle-guide-on-windows-xampp?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/installing-moodle-guide-on-windows-xampp?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/installing-moodle-guide-on-windows-xampp?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/installing-moodle-guide-on-windows-xampp?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/installing-moodle-guide-on-windows-xampp?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/installing-moodle-guide-windows-xampp](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/installing-moodle-guide-windows-xampp)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/installing-moodle-guide-on-windows-xampp](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/installing-moodle-guide-on-windows-xampp)
*   [http://0fajarpurnama0.weebly.com/blog/installing-moodle-guide-on-windows-xampp](http://0fajarpurnama0.weebly.com/blog/installing-moodle-guide-on-windows-xampp)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/144-installing-moodle-guide-on-windows-xampp](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/144-installing-moodle-guide-on-windows-xampp)
*   [https://read.cash/@FajarPurnama/installing-moodle-guide-on-windows-xampp-17d8c5de](https://read.cash/@FajarPurnama/installing-moodle-guide-on-windows-xampp-17d8c5de)
*   [https://www.uptrennd.com/post-detail/installing-moodle-guide-on-windows-xampp~ODMyNzQy](https://www.uptrennd.com/post-detail/installing-moodle-guide-on-windows-xampp~ODMyNzQy)