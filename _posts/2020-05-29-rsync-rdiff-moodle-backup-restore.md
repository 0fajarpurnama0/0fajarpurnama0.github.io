---
layout: post
title: 	Rsync and Rdiff Implementation on Moodle's Backup and Restore Feature for Course Synchronization over The Network
categories: misc
tags: [rsync, rdiff, moodle, network, synchronization]
---

<iframe src="//www.slideshare.net/slideshow/embed_code/key/bk9nsxBKoja1EP" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Rdiff and Rsync Implementation on Moodle's Backup and Restore Feature of Course Synchronization over The Network Presentation](//www.slideshare.net/0DarkKing0/rdiff-and-rsync-implementation-on-moodles-backup-and-restore-feature-of-course-synchronization-over-the-network-presentation "Rdiff and Rsync Implementation on Moodle's Backup and Restore Feature of Course Synchronization over The Network Presentation")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Note

*   This paper was presented in [IEEE Region 10 Symposium (TENSYMP) at Bali, Indonesia, on 11th May 2016](https://ieeexplore.ieee.org/xpl/conhome/7507293/proceeding).
*   [The copyright for this paper was transferred](https://hicc.cs.kumamoto-u.ac.jp/~fajar/misc/share-after-copyright-transfer) to IEEE. However, they still give me [permission to share the accepted version](http://mellowads.com/01pqk) with the requirements:
    1.  displaying IEEE copyright notice _(978-1-5090-0931-2/16/$31.00 ©2016 IEEE)_
    2.  full citation to the original IEEE publication _(F. Purnama, T. Usagawa, R. M. Ijtihadie and Linawati, "Rsync and Rdiff implementation on Moodle's backup and restore feature for course synchronization over the network," 2016 IEEE Region 10 Symposium (TENSYMP), Bali, 2016, pp. 24-29, doi: [10.1109/TENCONSpring.2016.7519372](https://doi.org/10.1109/TENCONSpring.2016.7519372).)_
    3.  link to the article abstract in IEEE Xplore ([https://ieeexplore.ieee.org/abstract/document/7519372](https://ieeexplore.ieee.org/abstract/document/7519372))which unfortunately, I don't have the authority for allowing you to reuse, share, etc. If you want to do so then [ask permission from IEEE](https://s100.copyright.com/AppDispatchServlet?publisherName=ieee&publication=proceedings&title=Rsync+and+Rdiff+implementation+on+Moodle%2527s+backup+and+restore+feature+for+course+synchronization+over+the+network&isbn=978-1-5090-0931-2&publicationDate=May+2016&author=Fajar+Purnama&ContentID=10.1109/TENCONSpring.2016.7519372&orderBeanReset=true&startPage=24&endPage=29&proceedingName=2016+IEEE+Region+10+Symposium+%2528TENSYMP%2529).
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/rdiff-and-rsync-implementation-on-moodles-backup-and-restore-feature-of-course-synchronization-over-the-network-presentation).
*   The source code is available at [Github](https://github.com/0fajarpurnama0/file-synchronizer-online-course-sharing).

## Abstract

E-learning has been widely implemented in educations system. Most higher institutions have applied Learning Management Systems (LMSs) to manage their online courses, with Moodle as one of the most favored LMS. However on the other side creating a well designed and written course remains problematic for teachers. That's why the community encourages them to share their courses for others to reuse. The authors or teachers then will continuously revise their courses, that will make subscribers to re-download the whole course again, which will soon lead to exhaustive network usage. To cope with this issue a synchronization model of course's backup file is proposed, retrieving the differential updates only. This paper proposed the synchronization of the existing backup and restore features. The file synchronization is performed between course's backup files based on rsync algorithm. The experiment was conducted on virtual machine, local network, and public network. The result showed lower network traffic compared to the conventional sharing method just like our previous synchronization method. However unlike the previous one this method had two other additional advantages which are the flexibility to control the synchronization content and compatibility to all versions of Moodle.

## Introduction

It is very common today to deliver education using electronic devices referred as e-learning. An advance application system that could manage e-learning known as LMS are widely use in higher educations. Modular Object-Oriented Dynamic Learning (Moodle) is one of the most popular and preferred LMS to deliver courses online. Many higher institutions in one of the author's country origin had implemented Moodle as their LMS [1] and discussed the problems that had been faced by the country's students. The authors on [2] have investigated the readiness of elearning implementation in Sam Ratulangi University. Implementation of mobile learning on GPRS network has been assessed in [3]. With many research on e-learning have been initiated, thus it's likely to see more Universities will implements e-learning soon. No doubt that the students are fortunate being given more flexibility. With just a computer device and Internet connection they are able to attempt these online courses without being limited by the boundaries of place and time. It's also very flexible on the teacher's side where they could prepare their courses before hand and give feedbacks to students on their leisure time.

However designing and writing a good content may not be easy. It takes experiences and time to make a well designed and written one. Some special contents may only be correctly written by Professors. For this occasion Moodle encourages course sharing as stated in [4]. There are many other sites that provides backups of courses deployable on Moodle. As time passes another problem was encountered, that constant revision will inevitably occur when perfecting a course. In addition with today's multimedia technologies, for example the course's creator might consider adding videos on their courses, which makes it common to see a very large backup course in terms of filesize. The problem became more seriously as the survey result on [1] on 10 different universities in Indonesia shows that Internet connection as one of the major obstacles faced when implementing e-learning.

To overcome the constant revision on the course contents and Internet connection problem, the work in [5] proposed course content synchronization. With this method there's no need to redownload the whole course whenever it is revised, but retrieve the revised part only. The application was created for Moodle version 1.9, and therefore it is needed to develop another one that is compatible for later version of Moodle as the next work on [6]. Those previous methods converts the course's database and directories into blocks and calculate the difference remotely between the outdated and latest course. In other words the previous application also handles the exports and imports of courses. This leads to an issue where a new application needs to be created everytime the structure on Moodle changes.

Moodle already have a course backup and restore feature and therefore it's better to let Moodle handle that part and only focus on the synchronization. This will lead to an application compatible with all versions of Moodle. Also the existing feature provides more flexibility of what contents to be synchronized. With that this paper proposed a file synchronization between course's backup archive based on rsync algorithm that can calculate the difference of a files remotely. Figure 1 is the general framework of the proposed method where we only need to send a reference of the outdated backup archive and use it to create a patch. Thus the objective of this research is to develop a course synchronization application that is compatible with all version of Moodle.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Synchronization-Mechanism.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Synchronization-Mechanism.png)

<figcaption>Figure 1\. Course Synchronization Mechanism</figcaption>

</figure>

## Related Work

### Course Sharing

The introduction of the term massive online open course (MOOC) was the starting point where lots of online courses became open via web and allows unlimited participants. As for Moodle's case it is the teaching with Moodle MOOC [4] on Moodle HQ. Thousands of educators from around the globe have taken this MOOC and introduced to Moodle both as a user and as a course creator. It is still running periodically up to today. The participants are encouraged to share their courses on [7]. On that website visitors may try online courses or download them as .mbz format which is an output from Moodle's course backup and restore feature, and that is not the only website that has online course sharing.

### Course Synchronization

As the authors on [5] wanted to implement distributed LMS for higher institutions in Indonesia, using their proposed method to distribute courses, was not entirely possible due to the band limited network connection or low capacity of Internet connection. When facing with education's curriculum, developing online courses takes continuous and countless revisions. This forces redistribution of the courses again and it heavily burdens the network capacity.

The general framework of the previous synchronization method on both master and slave LMS side consists of Moodle table and synchronization table which was a conversion of Moodle table into blocks containing sets of ID, hash, and version information. It is between these 2 synchronization tables that the synchronization occurs. At first a version matching takes place. If the slave side is outdated, block matching takes place. If new informations exists on the master LMS, than that information will be added to the slave LMS, the instruction will be marked as "append". If informations on slave LMS doesn't exist on the master LMS then it will be deleted, thus the instruction will be marked as "delete". Finally if informations exist on both sides but different mapping, the instruction will be marked as "update". Overall the synchronization has three main steps. Other than the database, this applies to the course's directory as well. With that algorithm a standalone application was written in PHP, and compatible with Moodle version 1.9\. The experiment was conducted between Institut Teknologi Sepuluh November (ITS) Surabaya, Indonesia, and Kumamoto University, Kyushu, Japan, and showed a low network traffic usage.

### File Synchronization

The courses are shared as a backup archive in .mbz format and our method applies remote file synchronization on the transmission process, by utilizing rsync algorithm. The common file patching system needs the two files, i.e. an unrevised file and a revised file on the same system in order to create a patch for the previous version file. Uniquely rsync can perfom this remotely. Suppose that there are two LMSs, one is on the master side and the other is on the slave side. The masterside has the latest backup fileα while the slave side has the outdated backup fileβ. Based on [8] it is possible to updateβ to the latest revisionα with the following steps: (1) the slaveside splitsβ into series of non-overlapping fixed-sized blocks that had the same size, with the last block may have the same equal size or smaller, (2) a weak “rolling” 32-bit checksum and a strong 128-bit MD4 checksum, total 2 checksums are calculated for every blocks inβ, (3) the checksums are sent to the master side, (4) the master side searches α to find all blocks at any offset that have the same weak and strong checksumas one in the blocks of β, and (5) the master side sends a sequence of instructions to the slave side to construct a copyof α which can either be instructions refering blocks on β or data retrieved fromαthat does not match on any blocks on β.

The name rsync itself is an application already installed in most Linux distribution. It is said on the manual page [9] as a fast extraordinarily versatile file copying tool that could replace conventional copying because it sends not the whole file but the difference between existing file. On this paper thought will be using rdiff, it is an application to generate difference between two binary files based on rsync algorithm. Basically it is an rsync implementation but gives more control than the existing rsync application. Rdiff is part of the package librsync [10]. Another application that will be used is rdiffdir, since the course's backup file is an archive. Rdiffdir is directory synchronization version of rdiff which is included in duplicity package [11].

## Experiment

### Backup and Restore Feature

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Moodle-Course-Backup-Restore-Option.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Moodle-Course-Backup-Restore-Option.png)

<figcaption>Figure 2\. Screenshot of Course Backup Option</figcaption>

</figure>

Moodle has a course backup and restore feature that could do backup on a course into .mbz format. Users with previleges are given almost full control of what to backup from the course. Starting from whether to include users, anonym users, or no users at all, until backing up full content or certain parts of the contents only. This can be shown from a menu screenshot on Figure 2, and Figure 6 which is also our course design that shows capability of choosing certain sections to backup. In addition the restore feature gives the same menu. From Moodle's documentation [12] is also possible to alter the backup file for advance used.

### Synchronization Method

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Course-Synchronization.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Course-Synchronization.png)

<figcaption>Figure 3\. Proposed Synchronization Model</figcaption>

</figure>

As stated on the previous section the experiments uses rdiff rather than rsync directly because it's still not common sharing backup course over rsync daemon or SSH, but very common over hyper text transfer protocol (HTTP). The slave side will generate a signature file of its course's backup archive and sends it to the master. The master side will use the received signature file and its course's backup archive to compute the delta file which can also be said as a patch file for the slave side course's backup archive. The master side will return a delta file to the slave side, and the slave side will generate the latest version of the course's backup archive. Overall it can be illustrated on Figure 3.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Inside-mbz-Archive.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Inside-mbz-Archive.png)

<figcaption>Figure 4\. Contents of Moodle's Course Backup Archive</figcaption>

</figure>

There will be two kinds of synchronization demonstrated. One will directly synchronize the backup archive using rdiff, and the other one will synchronize each file inside the backup archive recursively using rdiffdir. Unlike the first one which is purely binary file synchronization master's and slave's side course backup archive, the second one is more to course synchronization. The inside of the course's backup archive can be seen on 4\. The "activity" folder contains forums, lessons, and quizzes alike. The "course" folder contains more of the course's settings. The "files" folder contains materials uploaded for the course, and the "section" folder defines each section on the course. Rdiffdir will recursively perform rdiff on those files. The result of rdiffdir is shown on Figure 5 where the difference of each file resides on the "diffs" folder, new added files on master side on the "snapshots" folder, and instructions to delete files that was deleted on master side on the "deleted" folder.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Inside-Delta-Archive.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Inside-Delta-Archive.png)

<figcaption>Figure 5\. Contents of Delta Archive Produced by Rdiffdir</figcaption>

</figure>

### Scenarios

The experiment uses the main author's own developed course in Moodle version 3.0 as a material which has three large sections (topics) as seen in Figure 6\. We also made the course available on [13], by login as username "teacher" and password "teacher". The experiment has seven scenarios where scenario 1 without sychronization and the others with synchronization as follows: (1) retrieving the whole course's backup file (conventional sharing), (2) large content addition on the master side (slave side only have 1 section), (3) medium content addition on the master side (slave side has 2 sections), (4) small content addition on the master side (adding an url module), (5) small change on the master side (modifying a text on one of the course outline module), (6) section order change on the master side (section 2 shifts to section 1, section 3 shifts to section 2, and section 1 shifts to section 3), (7) no change on the master side. Moreover the scenarios are conducted on 3 situations: (a) local machine and virtual machine, (b) local area network (LAN), and (c) public network on [14]. The local machine acts as the slave side while the other as the master side. Very simple php scripts are written to perform the synchronization as seen on illustration on Figure 3\. Then the total sent and received traffic is measured using a packet capture tool Wireshark that will be discussed on the next section.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-1.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-1.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-2.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-2.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-3.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-3.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-4.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Course-Design-4.png)

<figcaption>Figure 6\. Course's Design</figcaption>

</figure>

## Result

The first subsection Demonstration shows that the developed application utilize the output of Moodle's course backup and restore feature. Unlike the previous applications on [5] and [6] they are not responsible for exporting and importing courses, but rely on the internal feature in Moodle. This makes this paper's synchronization application compatible with existing and upcoming versions of Moodle. The second subsection Measurement Result shows that the application functions as a synchronizer like the previous applications on [5] and [6] by showing network efficiencies during transmissions.

### Demonstration

We made the PHP scripts available on [15]. The first draft developed has given a feature to the users on both master and slave to dump their own backup course archive in .mbz format. What information existed on the backup archive depends on what options are used on Moodle's backup and restore feature. We utilize common PHP file upload script that can be found in many tutorial on the web, except for this experiment the file will be automatically renamed into "backup.mbz". The demonstration that is shown on this section is for scenario 2, Figure 7 is the console for both master and slave LMSs to initially dump their backup course. As seen on the slave side the outdated "backup.mbz" file has a size around 16 MB where it only contains the first section of the course on Figure 6 (a).

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-1.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-1.png)

<figcaption>Figure 7\. Template of File Synchronization Console</figcaption>

</figure>

The next step should be clicking the update button. The update button contains instruction to generate a "backup.mbz.sig" signature file from "backup.mbz" archive using the rdiff command, then send the "backup.mbz.sig" to master LMS url stated on the script written in curl PHP. The script to accept the file on the master LMS (the same common upload script in PHP) activates and do an extra instruction written to generate a delta (patch) file, with "backup.mbz.sig" and the master side's "backup.mbz" as inputs. The next step is to send the generated patch file "backup.mbz.delta" to the slave LMS. For that we invoke a script on the slave LMS to download the "backup.mbz.delta" written in curl PHP. On that script also contains instruction to backup the previous "backup.mbz" into "backup.mbz.backup" and apply patching using rdiff command to update the "backup.mbz" using "backup.mbz.delta" as input. Finally Figure 8 shows the updated "backup.mbz" that has a new file size of 30 MB which includes all contents as seen in Figure 6\. It is also shown that the "backup.mbz.sig" has a size around 16 kB and size of "backup.mbz.delta" is around 23 MB. The overall process is then repeated for each scenario.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-2.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-2.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-3.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/File-Synchronizer-Console-3.png)

<figcaption>Figure 8\. File Synchronization Console After Update Process</figcaption>

</figure>

The second draft is similar to the first one except it implements rdiffdir. It shows signature file around 1.5 MB and delta file around 16 MB for scenario one. During the synchronization process the "backup.mbz" archive on both master and slave side are extracted into a folder named "backup". Starting on the slave side rdiffdir recursively generates signatures for each files on "backup" and stored it as an archive "backup.sig". The "backup.sig" is then sent to the master side and to be used as a reference to recursively produce deltas for each file on the master's side "backup" folder and store the deltas into an archive "backup.delta". Next the "backup.delta" is sent to the slave side and patch the "backup" folder, and finally recompressed into an archive "backup.mbz".

### Measurement Results

The experiment was conducted by sending the signature file which influences the outgoing network traffic and retrieving the delta file which influence the incoming network traffic.

The first experiment synchronizes the course's backup archive directly with rdiff on Figure 9 and the second experiment synchronizes each files contained within the course's backup archive with rdiffdir on Figure 10\. The signature file was roughly produced around 200 kB and the delta file was around 20 MB. The first scenario (without synchronization) downloaded the whole course's backup file which had a file size around 30 MB, and the other scenarios (with synchronization) downloaded only the difference generated by rdiff. The overall result shows that using the proposed method is more efficient than doing the conventional way (scenario 1). On this case the slave side consumes total amount of traffic around 30 MB when not using synchronization, and consumes total amount of traffic around 20 MB when using synchronization. The proposed method proves that there is an efficiency of 10 MB of network capacity in term of bandwidth. For scenario 2 and 3 the outdated courses have a considerable amount of difference between the latest course and the results proves that it is very beneficial for this case. For scenario 4, 5, and 6 the outdated courses have a very few differences between the latest course, but the result shows around 20 MB of network consumption which is very high for this case. This is due to synchronizing while both archives are still compressed.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Sent.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Sent.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Received.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiff-Received.png)

<figcaption>Figure 9\. Sent and received network traffic of direct backup archive synchronization</figcaption>

</figure>

The second experiment on the other hand decompresses both archives and synchronizes each files within which is more accurate for course synchronization. Scenario 4, 5, and 6 only makes small changes on the course's contents which made the incoming network consumption also small, around 1.5 MB. It's a very large efficiency compared to the first synchronization experiment, although the outgoing traffic increases which is due to high number of signature files. Either way both experiment results are better than without synchronization process. The last scenario shows very low traffic due to the course's backup file on the slave side is up to date with the master side, so no update is required. Since the measurement is based on the outgoing and incoming traffic it is logical that the public network shows a slightly higher traffic than between virtual machines and on local area network.

<figure>![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiffdir-Sent.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiffdir-Sent.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiffdir-Received.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/Rdiffdir-Received.png)

<figcaption>Figure 10\. Sent and received network traffic of recursive file synchronization</figcaption>

</figure>

## Conclusion and Future Work

Like the previous method of course synchronization the proposed method of rdiff and rsync utilization for backup archive both in master and slave sides saved the network consumption for the course sharing using Moodle, except there were two other merits than to the previous method. The first one was the flexibility to configure the course's contents to be synchronized, and the second one was time efficiency since no adaption process of application of the proposed method was needed when the version Moodle changes, however both of them were not fully demonstrated on this paper. Therefore in the future we will further develop its compatibility and demonstrate on all version of Moodle and other LMSs. The method also gives possibility to develop partial course synchronization.

## Acknowledgment

Part of this work was supported by JSPS KAKENHI Grant-in-Aid for Scientific Research 25280124 and 15H02795.

<div class="video-container"><iframe allowfullscreen="" src="https://youtube.com/embed/x7EaZe3pl-g"></iframe></div>

## Reference

1.  N. S. A. M. Kusumo, F. B. Kurniawan, and N. I. Putri, “Learning obstacle faced by indonesian students,” in The Eighth International Conference on eLearning for Knowledge-Based Society, Thailand, Feb.2012.Figure 10\. Sent and received network traffic of recursive file synchronization
2.  S. Paturusi, Y. Chisaki, and T. Usagawa, “Assessing lecturers and student’s readiness for e-learning: A preliminary study at national university in north sulawesi indonesia,”GSTF Journal on Education(JEd), vol. 2, no. 2, pp. 1–8, 2015.
3.  Linawati, “Performance of mobile learning on gprs network,”Teknologi Elektro Journal, vol. 11, no. 1, pp. 1–6, 2012.[4] M. Cooch, H. Foster, and E. Costello, “Our mooc with moodle,” Positionpapers for European cooperation on MOOCs, EADTU, 2015.
4.  R. M. Ijtihadie, B. C. Hidayanto, A. Affandi, Y. Chisaki, and T. Usagawa, “Dynamic content synchronization between learning management systems over limited bandwidth network, ”Human-centric Computing and Information Sciences, vol. 2, no. 1, pp. 1–17, 2012.
5.  T. Usagawa, M. Yamaguchi, Y. Chisaki, R. M. Ijtihadie, and A. Affandi, “Dynamic synchronization of learning contents of distributed learning management systems over band limited network — contents sharing between distributed moodle 2.0 series,” in International Conference on Information Technology Based Higher Education and Training (ITHET),Antalya, Oct. 2013.
6.  (2016) moodle.net courses and content. [Online]. Available: https://moodle.net
7.  A. Tridgell and P. Mackerras, “The rsync algorithm,” The Australian National University, Canberra ACT 0200, Australia, Tech. Rep. TR-CS-96-05, Jun. 1996.
8.  (2016)rsync(1)–linuxmanpage.[Online].Available:http://linux.die.net/man/1/rsync
9.  (2016)librsync:rdiff.[Online].Available:https://librsync.sourcefrog.net/rdiff.html
10.  (2016). [Online]. Available: http://duplicity.nongnu.org/rdiffdir.1.html
11.  (2015)Coursebackup.[Online].Available:https://docs.moodle.org/30/en/Coursebackup
12.  (2016). [Online]. Available: https://fajarpurnama.moodlecloud.com[14] (2016).[Online].Available:https://moodle-experiment-fajarpurnama.c9users.io/sync[15] (2016) 0fajarpurnama0/file-synchronizer-online-course-sharing. [On-line]. Available: https://github.com/0fajarpurnama0/file-synchronizer-online-course-sharing

<iframe src="//www.slideshare.net/slideshow/embed_code/key/vR40gkVz1Dj6lA" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Incremental synchronization-implementation-on-survey-using-hand-carry-server-raspberry-pi](//www.slideshare.net/0DarkKing0/incremental-synchronizationimplementationonsurveyusinghandcarryserverraspberrypi "Incremental synchronization-implementation-on-survey-using-hand-carry-server-raspberry-pi")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Note

*   The following paper was presented in [電子情報通信学会技術研究報告= IEICE technical report: 信学技報, 117(65), 21-24.](https://ci.nii.ac.jp/naid/40021215557/).
*   [The copyright for this paper was transferred](https://hicc.cs.kumamoto-u.ac.jp/~fajar/misc/share-after-copyright-transfer) to IEICE. Unlike IEEE, they gave me [permission to share the published version and not the accepted version. Therefore, I can only share the PDF or image and not the HTML.](https://www.ieice.org/eng/copyright/files/copyright.pdf) The requirements are:
    1.  indication of _(Copyright ©2017 by IEICE)_
    2.  Indication of source _(PURNAMA, Fajar, and Tsuyoshi USAGAWA. "Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi (教育工学)." 電子情報通信学会技術研究報告= IEICE technical report: 信学技報 117.65 (2017): 21-24.)_
    3.  link to the source ([https://www.ieice.org/ken/program/index.php?mode=program&tgs_regid=20beb287fe2f1493d22000f7e0698b27713406b393699a01de3e1259939f7c26&tgid=IEICE-ET&layout=&lang=eng](https://www.ieice.org/ken/program/index.php?mode=program&tgs_regid=20beb287fe2f1493d22000f7e0698b27713406b393699a01de3e1259939f7c26&tgid=IEICE-ET&layout=&lang=eng))which unfortunately, I don't have the authority for allowing you to reuse, share, etc. If you want to do so then read [https://www.ieice.org/eng/copyright/files/copyright.pdf](https://www.ieice.org/eng/copyright/files/copyright.pdf).
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/incremental-synchronizationimplementationonsurveyusinghandcarryserverraspberrypi).

![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-1.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-1.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-2.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-2.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-3.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-3.png) ![https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-4.png](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rdiffrsyncmbz/ieiceet-2016-4.png)

<div class="video-container"><iframe src="https://lbry.tv/$/embed/incremental-synchronization/d12132f7b4f17fceb106ae99fc63fe32cd8b8013" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-xgdpojl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-xgdpojl?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/masters/2020/05/29/rsync-rdiff-moodle-backup-restore](https://0fajarpurnama0.github.io/masters/2020/05/29/rsync-rdiff-moodle-backup-restore)
*   [https://medium.com/@0fajarpurnama0/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-feature-for-course-synchronization-bb5cc7f0a1ca](https://medium.com/@0fajarpurnama0/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-feature-for-course-synchronization-bb5cc7f0a1ca)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rsync-rdiff-moodle-backup-restore](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/rsync-rdiff-moodle-backup-restore)
*   [https://0fajarpurnama0.tumblr.com/post/619438941879320576/rsync-and-rdiff-implementation-on-moodles-backup](https://0fajarpurnama0.tumblr.com/post/619438941879320576/rsync-and-rdiff-implementation-on-moodles-backup)
*   [https://0darkking0.blogspot.com/2020/05/rsync-and-rdiff-implementation-on.html](https://0darkking0.blogspot.com/2020/05/rsync-and-rdiff-implementation-on.html)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/45-rsync-and-rdiff-implementation-on-moodle-s-backup-and-restore-feature-for-course-synchronization-over-the-network](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/45-rsync-and-rdiff-implementation-on-moodle-s-backup-and-restore-feature-for-course-synchronization-over-the-network)
*   [http://0fajarpurnama0.weebly.com/blog/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-feature-for-course-synchronization-over-the-network](http://0fajarpurnama0.weebly.com/blog/rsync-and-rdiff-implementation-on-moodles-backup-and-restore-feature-for-course-synchronization-over-the-network)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/rsync-and-rdiff-implementation-on-moodle-s-backup-and-restore-feature-for-course-synchronization-ove](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/rsync-and-rdiff-implementation-on-moodle-s-backup-and-restore-feature-for-course-synchronization-ove)
