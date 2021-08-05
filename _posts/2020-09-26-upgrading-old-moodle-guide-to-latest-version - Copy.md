---
layout: post
title: Upgrading Old Moodle Guide to Latest Version
category: internet
tags: [Moodle, upgrade, Linux, Ubuntu, server]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmXc1srkQr2pjvJTnWExNkWJ7UXnqtsskFptusi1uXGHQs/0.moodle-upgrade-path.png
description: I tried several upgrade paths and found one that succeeded which are moodle version 1.x > 1.9 > 2.2 > 2.7 > 2.9 > 3.0 > latest.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/09/26/upgrading-old-moodle-guide-to-latest-version
---
![0.moodle-upgrade-path.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmXc1srkQr2pjvJTnWExNkWJ7UXnqtsskFptusi1uXGHQs/0.moodle-upgrade-path.png)

For experienced and wise administrators, you only need the featured image information to proceed and ignore the rest of the guide. I tried upgrading directly from version 1.9 to the latest and failed. I tried several upgrade paths and found one that succeeded which are moodle version 1.x to 1.9 stable to 2.2 stable to 2.7 stable to 2.9 stable to 3.0 stable to latest. For those who just tried installing and using Moodle, I prepared a more detailed guide here, but for others may find it hard to understand this guide without [trying installing and using Moodle](https://0fajarpurnama0.github.io/internet/2020/09/24/installing-moodle-guide-debian-based-linux) first. The result is that contents and users are alright, haven’t check the others though.

## Summary

This guide serves for administrators in large institutions who needs to upgrade their Moodle version to the latest version. Administrators usually forgets to upgrade their Moodle and the problem is that the web interface connects to Moodle developer's server and attempts to upgrade to the latest version directly where as time passes, this does not work due to the administrators' Moodles' version far behind the latest version. If I am not wrong, the web interface will show that the upgrade button is no longer supported due to the far behind version and asked to upgrade manually.

![1.moodle19.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmNVWxJPpTfQk5eZpn81ceahqZ2sXodPquE4j2rsua8c8P/1.moodle19.png)

There is always an option to ignore this and just continue with the old version. The problem other than security is that the Moodle's implementation will face stagnation which will not able to grow and enjoy new features. This is a real case in 2017 that Udayana University's (UNUD's) Moodle is still version 1.9 while other University's already implements version around 2.7, and the latest version at the time is 3.2\. Although Moodle 1.9 was an innovation in 2010, I can confidently criticize UNUD's 1.9 was unappealing compared to the [Kumamoto University's Moodle version 2.7](https://md.kumamoto-u.ac.jp/) and [Sam Ratulangi University's Moodle version 2.9](https://elearning.unsrat.ac.id/), and even [my laboratory's Moodle version 3.2](http://md.hicc.cs.kumamoto-u.ac.jp/) that I built myself was more appealing. The new version, follows the design and feature of modern websites which is an important factor for both students and teachers. As I browsed the web a lot like most people do today, I can harshly say that that Udayana University's Moodle still in version 1.9 was very ugly where this could demotivate students and teachers from using it. Therefore, it is necessary to upgrade Moodle to the latest version. The following are the summary steps for upgrading Moodle 1.9:

1.  [Backup your Moodle](#backupyourmoodle)
2.  [For safety try on a duplicate moodle first](#forsafetytryonaduplicatemoodlefirst)
3.  [Delete Any Moodle Customization](#deleteanymoodlecustomization)
4.  [Convert Database to UTF8](#convertdatabasetoutf8)
5.  [Upgrade to Moodle 2.2](#upgradetomoodle2.2)
6.  [Upgrade to Moodle 2.7](#upgradetomoodle2.7)
7.  [Upgrade to Moodle 2.9](#upgradetomoodle2.9)
8.  [Change database to innodb](#changedatabasetoinnodb)
9.  [Upgrade to Moodle 3.2](#upgradetomoodle3.2)

## My Server Specifications

*   Web Server: Apache 2.4.18
*   Database Server: MySQL 5.7.17
*   PHP 5.6
*   Operating System: Ubuntu 16.04 LTS and have administrator access
*   Moodle version initially 1.9

I have the following packages installed:

<pre style="background-color:black; color:lightgreen">
sudo apt install apache2 mysql-server php php-mysql php-xml php-curl php-zip php-gd php-mbstring php-xmlrpc php-soap php-intl
</pre>

If using newer version like php7, I recommend to install php5 stable along side it because we are handling older version of Moodle, so follow [https://lornajane.net/posts/2016/php-7-0-and-5-6-on-ubuntu](https://lornajane.net/posts/2016/php-7-0-and-5-6-on-ubuntu):

<pre style="background-color:black; color:lightgreen">
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php5.6 php7.0
</pre>

Here is an example command to switch from php7 to php5.6

<pre style="background-color:black; color:lightgreen">
sudo a2dismod php7.0
sudo a2enmod php5.6
sudo service apache2 restart
</pre>

## Backup your Moodle

*   backup /var/www/yourmoodledata
*   backup /var/www/html/yourmoodle
*   Backup moodle database

<pre style="background-color:black; color:lightgreen">
sudo cp -rv /var/www/yourmoodledata /var/www/yourmoodledatabackup
sudo cp -rv /var/www/html/yourmoodle /var/www/html/yourmoodlebackup
sudo mysqldump -u root -p yourpassword yourmoodle.sql > yourmoodle.sql
</pre>

## For safety try on a duplicate moodle first or ignore this suggestion if you are confident

<pre style="background-color:black; color:lightgreen">
sudo cp -rv /var/www/html/yourmoodle /var/www/html/youmoodleduplicate
sudo cp -rv /var/www/html/yourmoodledata /var/www/yourmoodledataduplicate
sudo chown -R www-data /var/www/html/yourmoodledataduplicate
sudo mysql -u root -p
create database yourmoodleduplicate;
quit
mysql -u root -p yourmoodleduplicate < yourmoodle.sql
</pre>

*   modify /var/www/html/yourmoodleduplicate/config.php (change directory settings)
*   open your duplicate moodle on the web browser and see whether duplication succeeded

## Delete Any Moodle Customization

Unfortunately I didn’t succeed in upgrading customized moodle, you have to download fresh moodle and replace your current moodle directory. I like using git here.

<pre style="background-color:black; color:lightgreen">
cp -v /var/www/html/yourmoodleduplicate/config.php /var/www/html/config.php
rm -rv /var/www/html/yourmoodleduplicate
</pre>

If using git:

<pre style="background-color:black; color:lightgreen">
git clone git://git.moodle.org/moodle.git /var/www/html/yourmoodleduplicate
cp -v /var/www/html/config.php /var/www/html/yourmoodleduplicate/config.php
cd /var/www/html/yourmoodleduplicate && git checkout MOODLE_19_STABLE 
</pre>

If not, download moodle 1.9 stable (depending on your start) and name it /var/www/html/yourmoodleduplicate.

## Convert Database to UTF8

Access from your browser your moodle site for example [http://localhost/yourmoodleduplicate](http://localhost/yourmoodleduplicate). Login to your administrator account and follow the instructions. It may ask you for some unicode stuff to your moodle database. If so follow instructions here [https://docs.moodle.org/32/en/Converting_your_MySQL_database_to_UTF8](https://docs.moodle.org/32/en/Converting_your_MySQL_database_to_UTF8):

<pre style="background-color:black; color:lightgreen">
mysqldump -u root -p your password -c -e --default-character-set=utf8mb4 --single-transaction --skip-set-charset --add-drop-database -B --no-data yourmoodledatabase > dump.sql
sed -i.bak -e 's/DEFAULT CHARACTER SET latin1/DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci/' -e 's/DEFAULT CHARSET=latin1/DEFAULT CHARSET=utf8mb4/' dump.sql
sed -i.bak2 's/ENGINE=InnoDB/ENGINE=InnoDB ROW_FORMAT=DYNAMIC/' dump.sql
mysql -u root -p yourpassword < dump.sql
mysqldump -u root -p yourpassword -c -e --default-character-set=utf8mb4 --single-transaction --skip-set-charset --add-drop-database -B --no-create-info yourmoodledatabase > data.sql
mysql -u root -p yourpassword < data.sql
</pre>

If it’s asking for more php dependencies then install for example if it asks for php curl then “apt install php5.6-curl”. Login to your administrator account again after finishing.

## Upgrade to Moodle 2.2

Download next higher stable version of fresh moodle and replace your current moodle directory. I like using git here and if using git:

<pre style="background-color:black; color:lightgreen">
cd /var/www/html/yourmoodleduplicate && git checkout MOODLE_22_STABLE
</pre>

If not, download moodle 2.2 stable and replace /var/www/html/yourmoodleduplicate.

Access from your browser your moodle site for example [http://localhost/yourmoodleduplicate](http://localhost/yourmoodleduplicate). Login to your administrator account and follow the instructions. Login to your administrator account again after finishing.

## Upgrade to Moodle 2.7

Download next higher stable version of fresh moodle and replace your current moodle directory. I like using git here and if using git:

<pre style="background-color:black; color:lightgreen">
cd /var/www/html/yourmoodleduplicate && git checkout MOODLE_27_STABLE
</pre>

If not, download moodle 2.7 stable and replace /var/www/html/yourmoodleduplicate.

Access from your browser your moodle site for example [http://localhost/yourmoodleduplicate](http://localhost/yourmoodleduplicate). Login to your administrator account and follow the instructions. Install dependencies if it asks. Login to your administrator account again after finishing.

## Upgrade to Moodle 2.9

Download next higher stable version of fresh moodle and replace your current moodle directory. I like using git here and if using git:

<pre style="background-color:black; color:lightgreen">
cd /var/www/html/yourmoodleduplicate && git checkout MOODLE_29_STABLE
</pre>

If not, download moodle 2.9 stable and replace /var/www/html/yourmoodleduplicate.

Access from your browser your moodle site for example [http://localhost/yourmoodleduplicate](http://localhost/yourmoodleduplicate). Login to your administrator account and follow the instructions. Install dependencies if it asks. Login to your administrator account again after finishing.

## Change database to innodb

It may ask to change your database engine to innodb, follow instruction here [http://www.woblag.com/2012/04/moodle-php-script-to-convert-mysql.html](http://www.woblag.com/2012/04/moodle-php-script-to-convert-mysql.html):

Create a script for example yourscript.php:

<pre style="background-color:black; color:lightgreen">
&lt;?php
// WARNING: PLEASE TEST BEFORE RUNNING ON A PRODUCTION DATABASE
// Tested on Moodle 1.9 and Moodle 2.0/2.2
//
// Disclaimer:
//
// This script was written to be executed from the command line in 
// Linux using a MYSQL database 
// and MYISAM storage engine. It converts the storage engine to 
// INNODB using the ALTER TABLE command.
//
// It assumes that the INNODB engine has been enabled. 
// This can be confirmed by logging into the mysql prompt 
// and running the command: 
// show engines;
//
// If it is disabled, check your my.cnf and 
// comment out the line: skip-innodb
//
// It does not check if disabled, so the script would execute 
 //and attempt to co
// It contains secure information, so DO NOT PLACE IN WEB DIRECTORY
//
// Execute from /temp and delete afterwards
//
// This is a modification of a script located here:
// http://stackoverflow.com/questions/3856435/how-to-convert-all-tables-from-myisam-to-innodb 
//
// Version : 1.2
// Date  : 11 April 2012
// Diff  :  check for recordset before executing alter table
//
// Version : 1.1
// Date  : 31 January 2012
// Diff  :  Added Timer to script; Display user and DB being affected
//
//
// Version :  1.0 
// Date  : 25 January 2012
//
// 
//
// Noveck Gowandan http://noveckg.blogspot.com

//Time Calculation - start count

$time = explode(' ',microtime());
$time = $time[1] + $time[0]; //return array
$begintime = $time; //define begin time

//Your database connection items here
 
$host = 'myhost'; //Specify host
$dbuser = 'myuser'; // Specify user with alter permissions 
$dbpass = 'mypass'; //user password
$mydb = 'mydb'; //specify schema or db to be modified


//connect to database using variables above
$link = mysql_connect($host,$dbuser,$dbpass);
$db = mysql_select_db($mydb);
   
if (!$link) {
die('Could not connect: ' . mysql_error());

}
echo "Connected Successfully to: $host." . "\n\n";
echo "Using database: $mydb." . "\n\n"; 
echo "Running script as $dbuser." . "\n\n";


//show tables in database
$sql = 'SHOW TABLES';
$rs = mysql_query($sql);

echo $sql;
echo "\n";

if (!$rs) {
die('SQL Recordset Error: ' . mysql_error());

}
else {
//loop through tables and convert to InnoDB
while($row = mysql_fetch_array($rs))
{
$tbl = $row[0];
$sql = "ALTER TABLE $tbl engine=InnoDB;";
mysql_query($sql);

echo $sql;
echo "\n";
}

echo 'Operation Completed.' . "\n\n";
echo 'Confirm Storage Engine conversion using phpmyadmin ' . "\n" . 'or from mysql: show create table tblname.' . "\n";

}
//close connection
mysql_close($link);

$time = explode(" ", microtime());
$time = $time[1] + $time[0]; 
$endtime = $time; //define end time
$totaltime = ($endtime - $begintime);
echo "Script Execution Time: $totaltime" . " seconds." . "\n\n";


?&gt;
</pre>

For me, php5.6 works:

<pre style="background-color:black; color:lightgreen">
php5.6 yourscript.php
</pre>

Continue with Moodle upgrade on the web.

## Upgrade to Moodle 3.2

Download next higher stable version of fresh moodle and replace your current moodle directory. I like using git here and if using git:

<pre style="background-color:black; color:lightgreen">
cd /var/www/html/yourmoodleduplicate && git checkout MOODLE_32_STABLE
</pre>

If not, download moodle 3.2 stable and replace /var/www/html/yourmoodleduplicate.

Access from your browser your moodle site for example [http://localhost/yourmoodleduplicate](http://localhost/yourmoodleduplicate). Login to your administrator account and follow the instructions. Install dependencies if it asks. Login to your administrator account again after finishing.

![2.moodle32.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmVYjSUR2751tKguESwcNQ9EVUyz8T3puEmMeFCDGFJLcW/2.moodle32.png)

Finally, Udayana University's Moodle is version 3.2 and you may continue upgrading yourself where there should not be any major problem. If you did not succeed because there are missing details for you, why not watch my video:

<div class="video-container"><iframe src="https://lbry.tv/$/embed/upgrade-moodle-1-9-7-to-3-2-testcase/0723548df5487b102b3d12f807a88cd2264e4b97?r=AYXLsfEFsfoMvCaNb1oqazk3N6DdBsG3" allowfullscreen=""></iframe></div>

## Mirrors

*   [https://www.publish0x.com/0fajarpurnama0/upgrading-old-moodle-guide-to-latest-version-xvwrqln?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/upgrading-old-moodle-guide-to-latest-version-xvwrqln?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2020/12/upgrading-old-moodle-guide-to-latest.html](https://0darkking0.blogspot.com/2020/12/upgrading-old-moodle-guide-to-latest.html)
*   [https://0fajarpurnama0.medium.com/upgrading-old-moodle-guide-to-latest-version-48477eb24b30](https://0fajarpurnama0.medium.com/upgrading-old-moodle-guide-to-latest-version-48477eb24b30)
*   [https://0fajarpurnama0.github.io/internet/2020/09/26/upgrading-old-moodle-guide-to-latest-version](https://0fajarpurnama0.github.io/internet/2020/09/26/upgrading-old-moodle-guide-to-latest-version)
*   [https://blurt.buzz/blurtutorials/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?referral=fajar.purnama](https://blurt.buzz/blurtutorials/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?referral=fajar.purnama)
*   [https://stemgeeks.net/technology/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?ref=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/upgrading-old-moodle-guide-to-latest-version?r=fajar.purnama)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/upgrading-old-moodle-guide-to-latest-version](https://hicc.cs.kumamoto-u.ac.jp/~fajar/internet/upgrading-old-moodle-guide-to-latest-version)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/upgrading-old-moodle-guide-to-latest-version](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/upgrading-old-moodle-guide-to-latest-version)
*   [http://0fajarpurnama0.weebly.com/blog/upgrading-old-moodle-guide-to-latest-version](http://0fajarpurnama0.weebly.com/blog/upgrading-old-moodle-guide-to-latest-version)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/147-upgrading-old-moodle-guide-to-latest-version](https://0fajarpurnama0.cloudaccess.host/index.php/13-computers-and-internet/147-upgrading-old-moodle-guide-to-latest-version)
*   [https://read.cash/@FajarPurnama/upgrading-old-moodle-guide-to-latest-version-3cf4b6b3](https://read.cash/@FajarPurnama/upgrading-old-moodle-guide-to-latest-version-3cf4b6b3)
*   [https://www.uptrennd.com/post-detail/upgrading-old-moodle-guide-to-latest-version~ODMzODkz](https://www.uptrennd.com/post-detail/upgrading-old-moodle-guide-to-latest-version~ODMzODkz)