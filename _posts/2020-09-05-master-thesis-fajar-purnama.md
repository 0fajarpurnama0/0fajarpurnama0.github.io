---
layout: post
title: 	Portable and Synchronized Distributed Learning Management System in Severe Networked Regions
categories: masters
tags: [technology, e-learning, portable, synchronization, distributed system, portable, masters, thesis]
---

<iframe src="//www.slideshare.net/slideshow/embed_code/key/pM9kdR6fWTT6sE" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Portable and Synchronized Distributed Learning Management System in Severe Networked Regions](//www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions "Portable and Synchronized Distributed Learning Management System in Severe Networked Regions")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Author

[Fajar Purnama](https://0fajarpurnama0.github.io)

## Note

*   This is a thesis submitted to _Graduate School of Science and Technology, Computer Science and Electrical Engineering in Kumamoto University, Japan, on September 2017 in partial fulfillment of the requirements for the degree of Master of Engineering_ but was not published thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I claimed full responsibility detached from Kumamoto University. Therefore, I hereby declare to license it as _customized [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)_ where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions).
*   The source code is available at [Github](https://github.com/0fajarpurnama0/file-synchronizer-online-course-sharing).

## Copyright Clearance

Below are the publications reused in this thesis that does not require copyright clearance:

*   [Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi [10]](#citefajar-hcs)

Below are the publications reused in this thesis that requires copyright clearance:

<figure>![https://file.army/i/B4GsgSq](https://404store.com/2020/09/05/0.a.copyright-ieice.jpg)

<figcaption>[Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi [9]](#citehcs-sync)</figcaption>

</figure>

<figure>![https://file.army/i/B4GsNPZ](https://404store.com/2020/09/05/0.b.ieee-permission-crop.jpg)

<figcaption>[Rsync and Rdiff implementation on Moodle's backup and restore feature for course synchronization over the network [12]](#citefajar-du-sync)</figcaption>

</figure>

## Abstract

The continuous advance of electronics and information communication technologies (ICT) have influenced every aspects greatly, on this thesis is discussed on education aspect. Electronics and ICTs have been incorporated into the learning and teaching process, giving birth to electronic learning (e-learning). Inside, there is a well known term called online course where the essence is being able to deliver courses distantly with flexibility in place and time. However a simple condition must be met in order to implement online course, and that is the sufficiency of ICT infrastructure. Unfortunately not all regions met this condition, limiting the accessibility of online course. Other than improving the ICT infrastructure, distributed learning management system (LMS) was proposed as alternative, but the next issue was the maintenance or synchronization, which in this case is keeping the learning contents up to date. There are two problems highlighted in this thesis which are unable to perform synchronization in severe network connectivity region, and duplicate data transfer during synchronization.

To overcome the synchronization in severe network connectivity region the solution is utilizing hand carry servers. By implementing hand carry servers on distributed LMS will grant mobility to the servers of distributed LMS. The concept proposed was having the hand carry server to physically seek network connectivity to perform online synchronization, and afterwards returns to its original location. The hand carry server was proved to be portable due to its small size, light weight, and also power consumption where a power bank is enough to supply for a whole day. Although it has resource limitations in terms of computer processing unit and random access memory which limits its performance.

To overcome duplicate data transfer during synchronization incremental synchronization was utilized instead of full synchronization. Also on this thesis introduced a new approach called dump and upload based sychronization which was to overcome the obstacles of different LMSs and LMS versions faced by dynamic content sychronization.

## Table of Contents

[List of Figures](#listoffigures)

[List of Tables](#listoftables)

1.  [Introduction](#introduction)
    1.  [Background](#background)
    2.  [Problem](#problem)
    3.  [Hypothesis](#hypothesis)
    4.  [Significance](#significance)
    5.  [Objective](#objective)
    6.  [Contribution](#contribution)
    7.  [Limitation](#limitation)
    8.  [Structure of the thesis](#structureofthethesis)
2.  [Portable Distributed LMS](#portabledistributedlms)
    1.  [Distributed Systems](#distributedsystems)
        1.  [Partitioned System](#partitionedsystem)
        2.  [Replicated Sytem](#replicatedsytem)
    2.  [Distributed Learning Management System](#distributedlearningmanagementsystem)
    3.  [Hand Carry Server in Distributed LMS](#handcarryserverindistributedlms)
        1.  [Portability of Hand Carry Server](#portabilityofhandcarryserver)
        2.  [Synchronization in Severe Network Connection](#synchronizationinseverenetworkconnection)
    4.  [Limitation of Hand Carry Server](#limitationofhandcarryserver)
        1.  [Resource](#resource)
        2.  [Stress Testing](#stresstesting)
3.  [Distributed LMS Synchronization](#distributedlmssynchronization)
    1.  [Learning Content Sharing](#learningcontentsharing)
    2.  [Full Synchronization versus Incremental Synchronization](#fullsynchronizationversusincrementalsynchronization)
        1.  [Full Synchronization](#fullsynchronization)
        2.  [Incremental Synchronization](#incrementalsynchronization)
        3.  [Dynamic Content Synchronization on Moodle](#dynamiccontentsynchronizationonmoodle)
    3.  [Dump and Upload Based Synchronization](#dumpanduploadbasedsynchronization)
        1.  [Export and Import Feature](#exportandimportfeature)
        2.  [Rsync a Blocked Based Remote Differential Algorithm](#rsyncablockedbasedremotedifferentialalgorithm)
        3.  [Experiment Result and Evaluation](#experimentresultandevaluation)
        4.  [Advantage of Dump and Upload Based Synchronization](#advantageofdumpanduploadbasedsynchronization)
    4.  [Conclusion and Future Work](#conclusionandfuturework)
        1.  [Conclusion](#conclusion)
        2.  [Future Work](#futurework)

[Acknowledgement](#acknowledgement)

[References](#reference)

## List of Figures

1.  In Chapter 1:
    1.  [Illustration of e-learning showing many electronic devices to beused (images from openclipart [1].](#figE-Learning)
    2.  [Illustration of the difference between conventional course and online course. While conventional course is restricted by place andtime, online course can be anywhere and anytime (images fromopenclipart [1].](#figOnline-Course)
2.  In Chapter 2:
    1.  [Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand peoplewill have not difficulty in accessing if there are servers on their local regions.](#figdistributed-lms)
    2.  [Illustration of using hand carry computer device to gather informa-tions from other users inputed from their own computer device [10].](#fighcs-data-collecting)
    3.  [Time consumption of survey process from preparation, responding,to post survey [10]. (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and responsecollection, and Post Survey consists of response insertion. (b) Forhand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method isno need for post survey which the response already automatically inserted.](#figmanual-labor)
    4.  [Data in form of bar graph and pie chart was shown the instancethe hand carry server received the responses [10]. Only 4/30 item result shown here since it is too much to show all.](#figinstant-survey-result)
    5.  [Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing [9].](#figmoving-server)
    6.  [](#figimplementation-hcs)Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.
    7.  [Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage [10].](#figcpu-memory)
    8.  [](#figfunkload)Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server(images from openclipart [1]).
    9.  [Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items[10], (a) average response time while (b) maximum response time.](#figresponse-time)
3.  In Chapter 3:
    1.  [Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared. Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is aduplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.](#figfull-sync)
    2.  [Incremental synchronization different from Figure 3.1 where the duplicate data are filtered.](#figinc-sync)
    3.  [Dynamic content synchronization model for Moodle [11]. The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slaves synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.](#figmoodle-diff-sync)
    4.  [The dump and upload based synchronization model. Both servers’ LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives. After synchronization the archives will be imported/uploaded into the servers’ LMS, updating the learning contents.](#figdump-upload-sync)
    5.  [Screenshot of Moodle’s export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.](#figmoodle-export-import)
    6.  [](#figrsync-ill-1)First step is to generate a signature of archive on slave and send to master. The signature of is used on master’s archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and producean archive identical to the one on master.
    7.  [Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, andthree sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.](#figrsync-ill-2)
    8.  [](#figrsync-ill-3-4)Illustration of identifying difference. (a) The three sets of check-sums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append newblocks, which will be send and applied on slave.
    9.  [After the delta/patch is applied, slave will have identical archive to master.](#figrsync-ill-5)
    10.  [Implementation of some download manager techniques into rsync algorithm based synchronization. Delta is split into pieces and retrieved by the client. The integrity of the pieces are checkedusing cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.](#figrsync-ill-6)
    11.  [Test result showing the relationship between block size, signature, and delta. When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.](#figblocksize-vs-sig-del)
    12.  [Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.](#figexperiment-result)

## List of Tables

1.  In Chapter 1:
2.  In Chapter 2:
    1.  [List of LMS known categorize by open source, Cloud, or Proprietary.](#tablelist-of-LMS)
    2.  [Specification of the hand carry computer Raspberry Pi 2 Model B.](#tableRP2-Specification)
3.  In Chapter 3:
    1.  [Size of course contents of the same course on different LMS, show-ing sizes when in contains one, two, and three topics.](#tablearchive-size)
    2.  [Detail experiment result of Figure 3.12 showing size of signature and delta during incremental synchronization scenarios on each LMSs.](#tabledetail-experiment)
    3.  [Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.](#tableduplicate-eliminated)

## 1 Introduction

### 1.1 Background

Electronics and Information Communcation Technology (ICT) have made many tasks more convenient, including delivering education. It can be seen that many have incorporated electronics in their learning and teaching process. There are few examples such as teachers using laptops and projectors to present their materials, students browsing the Internet to search for informations, and both of them using emails, chats, or social networking service to communicate. These kind of things are agreed to be called electronic learning (e-learning) which can be illustrated on [Figure 1.1](#figE-Learning)

<figure id="figE-Learning">![https://file.army/i/B4GsqFF](https://404store.com/2020/09/05/1.1.E-Learning.jpg)

<figcaption>Figure 1.1 Illustration of e-learning showing many electronic devices to be used (imagesfrom openclipart [[1]](#citekelly)).</figcaption>

</figure>

Though, this thesis will not discuss widely on e-learning, but a category which is part of e-learning called online course. It uses electronic ICT devices where information exchange can be done remotely. Information can be delivered through electrical signal in high speed on the network, preferably on the Internet, and computer devices as end devices or as transmitters and receivers. Simply computer devices connected to the Internet are all that are needed to participate in online course from anywhere at anytime illustrated on [Figure 1.2](#figOnline-Course).

<figure id="figOnline-Course">![https://file.army/i/B4GstNe](https://404store.com/2020/09/05/1.2.Online-Course.jpg)

<figcaption>Figure 1.2 Illustration of the difference between conventional course and online course. While conventional course is restricted by place and time, online course can be anywhere and anytime (images from openclipart [[1]](#citekelly)).</figcaption>

</figure>

Online course is now being highlighted by many parties, seeing them as one solution to the unevenly distribution of education. Straighfowardly not everyone have access to good quality education, furthermore there are also those who does not have access, and by using online course people can receive education without going to school. Knowing this, our peers tried to implement online course in their Universities, one in Indonesia [[2]](#citesary) and the other one in Myanmar [[3]](#citemonmon). Another peer already have online course well built in Mongolia and now moving to massive open online course (MOOC) [[4]](#citeotgon). Unlike private online course only for students in Universities, MOOC is open for anyone indiscriminately. In the United States (US) MOOC is also being used to scout for potential students. For example Massachusetts Institute of Technology (MIT) found a genius Mongolian highschool student who perfectly ace its Circuits and Electronics MOOC, then took him as a freshmen student [[5]](#citerandall). In summary many people saw bright future in utilizing online course in education.

With all the benefits of online course, there are still problems preventing many people from enjoying it. The problem was the lack of accessability to online course due to insufficient ICT infrastructure. In other words there are people who are having network connectivity issue especially in developing countries. On random survey by Kusumo et al. [[5]](#citeobstacle-indonesia) on students in Indonesia, 60% of them agreed that Internet connection is still problematic. The survey by Monmon et al. [[3]](#citemonmon) of e-readiness on Yangon Technological University and Mandalay Technological University in Myanmmar showed lower Likert scale scores on the students' and teachers' perception on ICT network compared to other items. Today the world Internet penetration is still around 50% indicating that only half of the world's population can access online course [[7]](#citeinternet-world-stat). Eventhough these people have access, their access quality may still be questionable which can lead to disatisfaction in accessing online course.

The obvious solution to accessibility issue is to improve the ICT infrastruture, however this takes a long time. Therefore another method was implemented, which is implementation of distributed system rather than centralized system. The concept is to have the people to access the service on their local area that is distantly closer than on the central area that is distantly further. In some references, it is stated as the third generation of content management system (CMS) [[8]](#citedistributed-system), thought on this work is more about learning contents of Learning management system (LMS) than general contents of CMS.

### 1.2 Problem

With distributed LMS as the solution to the lack of accessability of online course, it is the next problem which is discussed on this thesis. The problem is the synchronization which is to keep the learning contents up to date. This can also be said as the maintenance of the learning contents. Specifically there are two problems highlighted on this thesis as follow:

1.  The lack of network connectivity for synchronization. Usually synchronization are set to be done online where the servers synchronizes with another in order to keep the learning contents to its latest version. If this was the case then synchronization is not possible on no network connectivity condition.
2.  Duplicate data transfer during synchronization. In default full synchronization is used, where the learning contents is usually in bundle of courses. Commonly when the contents of the course is revised on LMS, the whole contents of course is distributed to other servers including previously distributed contents (duplicate data). In this case, there will be many redundant data which will add more burdens to the network.

### 1.3 Hypothesis

This thesis provides two main solutions for the two problems:

1.  For the first problem of no network connectivity, the solution is to provide portability function to distributed LMS. Straightforwardly enabling the servers to move to other locations where there is network connectivity to synchronize, and to return to its original location after finish synchronizing.
2.  For the second problem of duplicate data is to utilize incremental synchronization through continuous differential synchronization technique. The new contents are to be identified before synchronization and only the new contents are distributed, leaving out the redundant data.

### 1.4 Significance

Detail significances are discussed in further sections, but in general can be mentioned as follow:

1.  Possibility of flexible synchronization in severe network connectivity region by mobilizing the servers of distributed LMS. It can also be pictured as widening the network coverage.
2.  Lower network cost can be achieved from incremental synchronization.

### 1.5 Objective

The objective of this research is to enable online synchronization of distributed LMS in almost no network connectivity region and reduce redundant data transfer during synchronization.

### 1.6 Contribution

1.  Introduced a novel concept of integrating hand carry server to distributed LMS which makes it mobile or portable resulting in able to perform synchronization in regions with severe network [[9]](#citehcs-sync). This thesis also demonstrated the portability of hand carry servers' through conducting survey simulation and on the other hand also showed its limitation through stress testing [[10]](#citefajar-hcs).
2.  Though the novelty of incremental synchronization in distributed LMS was already claimed [[11]](#citeroyyana-dynamic-content-synchronization), this thesis showed a different approach call dump and upload based synchronization [[12]](#citefajar-du-sync) which the advantages of its single software application is compatible to most LMS and benefits the feature of that LMS, for example its privacy and security feature which automatically makes the synchronization private and secure, and on Moodle possibility of partial synchronization due to micronization of course contents into blocks. Another advantage is this approach supports bidirectional synchronization.

### 1.7 Limitation

Each method may have limitations which is discussed in detail on each of their respective sections, but here is mentioned the general limitation of this research:

1.  The system is only experimented in laboratory and not yet implemented in real running online courses. The experiment is done on the author's virtual machines, laboratory's local area network (LAN), and free public clouds owned by the author.
2.  Only one hand carry server was used in actual experiment and the expansion discussed of using more the one of it is still a concept derived from the experiment.
3.  This thesis' dump and upload based incremental synchronization is novel in its concept but not in its software application since it only make use of existing software applications. They are the export and import feature in LMS to dump the learning contents and rdiff application based on rsync to identify the difference between dumps.
4.  The course experimented on is the authors self created course which was never delivered, in short it is not an actual running course.

### 1.8 Structure of the thesis

Beyond this section the thesis contains three more chapters:

1.  Chapter 2 discussed about portable distributed LMS which in order gives brief introduction to distributed LMS, afterward is the author's work in showing the convenience of hand carry server [[10]](#citefajar-hcs), the concept of hand carry server in distributed LMS [[9]](#citehcs-sync), and laslty the hand carry server's limitations.
2.  Chapter 3 discussed about incremental data synchronization which in order the story of sharing learning contents, distinguishing full synchronization to differential and incremental synchronization, discussion of the previous work of dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) versus the author's work of dump and upload based synchronization [[12]](#citefajar-du-sync), and finally experiments and results showing the percentage of duplicate data eliminated on incremental synchronization.
3.  Chapter 4 is the conclusion of this thesis that also discussed the future work.

## 2 Portable Distributed LMS

### 2.1 Distributed Systems

#### 2.1.1 Partitioned System

Distributed systems can be a wide discussion with different implementation [[8]](#citedistributed-system). One implementation can be as partitioned system. For example, an organization's network can have their servers separated, where the database, directory, domain name service (DNS), dynamic host configuration protocol (DHCP), file, web, and each other servers on separated machine. They are integrated but independent where if one service (server) is damage, will not damage other services. A different example is data partitioning where data are fragmented that when retrieving data, they have to be gathered and merged. This usually happens in collaboration where people are working on the same project but from different machines.

#### 2.1.2 Replicated System

Another implementation can be as replicated system, and this is the one that is referred or used on this thesis. The urgency for replicated system can be due to bottleneck traffic or geographically severe network connectivity, or both. One of the most popular implementation is search engine like Google and Yahoo where they have different server locations assigned with local domains for example .co.jp for Japan, .co.id for Indonesia, and etc. Not as well known as search engines are online multiplayer games. The servers of online multiplayer games can reside on many regions such as Asia, Europe, United States, China, etc. There are games that shows the number of population on each servers indicating whether it is full or not. Players can choose other servers when a server reached the population limit or when players cannot actually reach the server on that region.

### 2.2 Distributed Learning Management System

One definition of LMS is a system that manages the learning and teaching specifically for online case. The current form of LMS today is a software application. It is not just delivering learning materials to students but online computerize any activities that can happen in a class. Some activities are interractions whether by chat applications or forums like on social networking service (SNS), assignments where this time is submitted electronically through LMS by uploading their files, and quizzes or examinations which can be automatically or manually graded. Not to forget that it can be accessed from anywhere at anytime, and computers are used which can perform much faster and automatic tasks than humans, makes it possible for unique applications, data minings, and learning analytics. In short new features are being developed everyday. Today exists many LMS as on [Table 2.1](#tablelist-of-LMS) whether they are open source (free to use, modify, with all the codes open), only available on clouds or software as a service (SAAS) which tends to be freeware/usage only, or proprietary which tends to be business/commercial/paid. On the author's surroundings mostly Moodle is used.

<table id="tablelist-of-LMS"><caption>Table 2.1 List of LMS known categorize by open source, Cloud, or Proprietary.</caption>

<thead>

<tr>

<th>Open Source</th>

<th>aTutor, Canvas, Chamilo, Claroline, eFront, ILIAS, LAMS, LON-CAPA, Moodle, OLAT, OpenOLAT, Sakai, SWAD, Totara LMS, WeBWorK</th>

</tr>

</thead>

<tbody>

<tr>

<td>SAAS/Cloud</td>

<td>Cornerstone OnDemand Inc, Docebo LMS, Google Classroom, Grovo, Halogen Software, Informetica, Inquisiq R3, Kannu, Latitude Learning, Litmos, Talent LMS, Paradiso LMS, TOPYX, TrainCaster LMS,WizIQ LinkStreet</td>

</tr>

<tr>

<td>Proprietary</td>

<td>Blackboard Learning System, CERTPOINT Systems Inc, Desire2Learn,eCollege, Edmodo, Engrade, WizIQ, GlobalScholar, Glow, HotChalk,Informetica, ITWorx CLG, JoomlaLMS, Kannu, Latitude Learning LLC,Uzity, SAP, Schoology, SSLearn, Spongelab, Skillsoft, EduNxt,SuccessFactors, SumTotal Systems, Taleo, Teachable, Vitalect</td>

</tr>

</tbody>

</table>

The term distributed LMS means that the replicated servers contains LMS. Each servers are meant to service online course. The implementation can be a full replication where not only learning contents but everything else including activities, assessments, and interractions are synchronized. This means students and teachers can freely use any servers recommended to the one with best network connectivity. The other implementation is partial replication where only non-private data are synchronized, usually only the learning contents. This can happen when there are jurisdictions where each regions are to be handled locally. In other words contents are provided but each schools and universities are still the owner of their own servers and asserts local authorities. Either way distributed system is the solution for bottleneck and connectivity issue. As an illustration on [Figure 2.1](#figdistributed-lms) in Indonesia, it is better to build and spread more servers compared to have a centralized server in the capital city.

<figure id="figdistributed-lms">![https://file.army/i/B4GsP85](https://404store.com/2020/09/05/2.1.a.Internet_Penetration_Indonesia_Connectivity_Issue.jpg) ![https://file.army/i/B4GsUQA](https://404store.com/2020/09/05/2.1.b.Internet_Penetration_Indonesia_Distributed_LMS.jpg)

<figcaption>Figure 2.1 Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand people will have not difficulty in accessing if there are servers on their local regions.</figcaption>

</figure>

### 2.3 Hand Carry Server in Distributed LMS

After the establishment of distributed LMS, the contents needs to be maintained or to be kept up to date through synchronization. However the problem is the lack of network connectivity between servers usually found in deeper areas such as schools in villages. It may be easy to build a LAN but difficult to build connections to other servers or simply an Internet connection on distant places. In a short time it is only possible to build a very limited connection (very low speed) which retrieval of contents may seem to take forever if it is very large. The metaphor is building a server in a jungle, a remote island, or a desert, which are very isolated. The default solution is offline synchronization or the author's solution server mobilization [[9]](#citehcs-sync).

#### 2.3.1 Portability of Hand Carry Server

Before discussion of the synchronization, this section would like to introduce hand carry servers. On this thesis it is called hand carry server because the physical hardware is a computer with the size of a regular human hand that has been configured into a server. It is called a mini, pocket size, or portable computer, one example on this thesis is used Raspberry Pi 2 with the specification on [Table 2.2](#tableRP2-Specification).

<table id="tableRP2-Specification"><caption>Table 2.2 Specification of the hand carry computer Raspberry Pi 2 Model B.</caption>

<thead>

<tr>

<th>Specification</th>

</tr>

</thead>

<tbody>

<tr>

<td>A 900MHz quad-core ARM Cortex-A7 CPU</td>

</tr>

<tr>

<td>1 Giga Byte (GB) Random Access Memory (RAM)</td>

</tr>

<tr>

<td>4 Universal Serial Bus (USB) ports</td>

</tr>

<tr>

<td>40 General Purpose Input Output (GPIO) pins</td>

</tr>

<tr>

<td>Ethernet Port</td>

</tr>

<tr>

<td>Camera Serial Interface (CSI)</td>

</tr>

<tr>

<td>Display Serial Interface (DSI)</td>

</tr>

<tr>

<td>Micro Serial Digital (SD) card slot</td>

</tr>

<tr>

<td>Video Core IV 3D graphics cire</td>

</tr>

<tr>

<td>Size of 85.60 mm × 56.5 mm (3.370 in × 2.224 in), not including protruding connectors</td>

</tr>

<tr>

<td>Weight of 45g</td>

</tr>

</tbody>

</table>

The portability was demonstrated on one of the author's previous work [[10]](#citefajar-hcs). It is less related to distributed system but it showed applications of hand carry server in manual labors which on that work is a simulation comparing between paper based method survey to hand carry server method survey. The motivation was the lack of Internet connection to perform online survey but most people owns a computer devices in developing countries [[3]](#citemonmon) [[7]](#citeinternet-world-stat) [[13]](#citemobile-users). Instead of reverting to paper based method, the participants' personal digital assistants (PDAs) can be utilized by connecting them to the hand carry server and perform a semi-online survey illustrated on [Figure 2.2.](#fighcs-data-collecting)

<figure id="fighcs-data-collecting">![https://file.army/i/B4Gsib4](https://404store.com/2020/09/05/2.2.Hand-Carry-Server-Data-Collecting-Illustration.jpg)

<figcaption>Figure 2.2 Illustration of using hand carry computer device to gather informations from other users inputed from their own computer device [[10]](#citefajar-hcs).</figcaption>

</figure>

For the simulation a MOOC readiness survey [[4]](#citeotgon). consist of 30 questionnaire items was simulated on 30 participants by a surveyor. The whole survey consists of three stages; preparation, responding, and post survey. On the preparation stage, for paper based method the surveyor creates the questionnaire items on word processing software then print them, while for hand carry server method the surveyor creates the questionnaire on web based survey application called Limesurvey CMS. On responding stage, for paper based method the surveyor hands out paper to each participants and collect them when they are finish responding, while for hand carry server method the surveyor tells the participants to connect their PDAs to the hand carry server and informs the URL of the local survey site, then waits until the participants submits their results to the hand carry server. Though results on [Figure 2.3](#figmanual-labor) showed no difference in time consumption for preparation and responding stage, paper based method tends to burden more on labors such as printing the questionnaires (time taken multiply greatly using old printers) and carrying heavy papers if there are alot of participants. On the other hand resource is the main issue for hand carry server which will be discussed on Limitation of Hand Carry Server section.

<figure id="figmanual-labor">![https://file.army/i/B4GsyBn](https://404store.com/2020/09/05/2.3.a.Paper-Based-Method-Process-Edited.jpg) ![https://file.army/i/B4GJ9l1](https://404store.com/2020/09/05/2.3.b.Hand-Carry-Server-Method-Process-Edited.jpg)

<figcaption>Figure 2.3 Time consumption of survey process from preparation, responding, to post survey [[10]](#citefajar-hcs). (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and response collection, and Post Survey consists of response insertion. (b) For hand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method is no need for post survey which the response already automatically inserted.</figcaption>

</figure>

However the advantage was shown on the post survey stage where usually the surveyors have to input the responses into the database, not to forget to also handle human errors by verifications such as double checking which seems to be the most stressing and tiring proses of paper based method. It is different from hand carry server method where the responses are automatically processed, literally no post survey stage. In fact results/statistics are instantly visible which no manual method can outfast. The participants can see the current statistics the moment they submitted the responses as exampled on [Figure 2.4](#figinstant-survey-result).

<figure id="figinstant-survey-result">![https://file.army/i/B4GJBm7](https://404store.com/2020/09/05/2.4.Sample-Survey-Result-in-Instancecopy.jpg)

<figcaption>Figure 2.4 Data in form of bar graph and pie chart was shown the instance the hand carry server received the responses [[10]](#citefajar-hcs). Only 4/30 item result shown here since it is too much to show all.</figcaption>

</figure>

The author's work mostly discussed the convenience of computerization but the important part is the mobility or portability [[10]](#citefajar-hcs). Back on Figure [Figure 2.2.](#fighcs-data-collecting), the hand carry server can be carried anywhere (a walking/moving server) which only needs a power supply of direct current (DC) 5V (volts) potential difference and 2A (amperes) electric current, usually a hand carry power bank is enough. On the simulation is also measured the current delivery was 0.6AH (ampere hour) in 39 minutes (whole duration of survey, see Figure [Figure 2.3](#figmanual-labor)) meaning with the powerbank's specification of 20000AH it will last 20 hours. In short the hand carry server is low power cost that can last longer during mobile.

#### 2.3.2 Synchronization in Severe Network Connection

Currently synchronization have to be to taken offline when there is no network connectivity whether they are full or incremental which will be discussed in next chapter. An administrator will go to network connected or directly to the updated server to retrieve the contents and store in a storage media such as compact disc (CD), and flash drive. Then travel back to the outdated server, insert the storage media and give the contents. There is a work by Ijtihadie et al. [[14]](#citeroyyana-email-sync) for differential update where it was sent through email then differentially update the contents. It should be possible to put the differentials into a storage media which then to be inserted into the outdated server to update the contents.

<figure id="figmoving-server">![https://file.army/i/B4GJ7Ps](https://404store.com/2020/09/05/2.5.Moving-Server.png)

<figcaption>Figure 2.5 Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing [[9]](#citehcs-sync).</figcaption>

</figure>

Another way is to move the servers to an area with connectivity, have it update, and then return it to its original location [[9]](#citehcs-sync). This was actually inspired by Ijtihadie et al. [[15]](#citeroyyana-offline-quiz) where the students downloads the quiz on their mobile devices, answers them offline at their homes, and later finds an Internet connection to synchronize (automatically upload their answers). This concept was applied to this thesis' work where the process happens to the hand carry server instead of the mobile device. It is illustrated on [Figure 2.5](#figmoving-server) with currently people carrying the servers. An example of implementation is on [Figure 2.6](#figimplementation-hcs). There are regions in Indonesia which does not have goot network connectivity rendering difficult to synchronize with other servers. If those servers are replaced with hand carry servers, then it can physically move to find network connectivity (it supports wired and wireless connection) to synchronize, and in the end return to its original location.

<figure id="figimplementation-hcs">![https://file.army/i/B4GJYZl](https://404store.com/2020/09/05/2.6.a.No-Network-Distributed-LMS.jpg) ![https://file.army/i/B4GJzFj](https://404store.com/2020/09/05/2.6.b.Moving-Server-DLMS.jpg)

<figcaption>Figure 2.6 Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.</figcaption>

</figure>

Within the distributed LMS, the servers can either be replaced with hand carry servers or leave them mounted and have hand carry servers as addition or support, meaning the hand carry servers will travel from servers to servers. It is temporary implementation when there are no network infrastructures built, since it is fast and simple to install, or it can serve as a purpose to cover network coverage holes where the hand carry server moves around these network uncovered area.

### 2.4 Limitation of Hand Carry Server

#### 2.4.1 Resource

With the compressed size and light weight of hand carry server, it has resource limitation. The resources responsible for servicing are mainly computer processing unit (CPU) and random access memory (RAM) (detailed specification can be seen back on Table [Table 2.2](#tableRP2-Specification)). As shown on [Figure 2.7](#figcpu-memory) the CPU and RAM are already exhausted when 30 participants attempts the survey [[10]](#citefajar-hcs). These measurement result alone may not show much meaning, but can be meaningful if stress testing is conducted as on next subsection.

<figure id="figcpu-memory">![https://file.army/i/B4GJ4Nk](https://404store.com/2020/09/05/2.7.a.Survey-Attempt-CPU-Usage.jpg) ![https://file.army/i/B4GJKKv](https://404store.com/2020/09/05/2.7.b.Survey-Attempt-Memory-Usage.jpg)

<figcaption>Figure 2.7 Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage [[10]](#citefajar-hcs).</figcaption>

</figure>

#### 2.4.2 Stress Testing

Experience users may completely understand by just showing the resource measurement results, but others will have to feel, rub, and take few trials to see how far this hand carry server is actually capable. For that reason, stress testing was proposed and conducted. Though it was tested for survey purpose [[10]](#citefajar-hcs), but the method can be applicable for other applications. For the stress testing, a web stress testing software application called Funkload was used. Different numbers of virtual users incrementally 10 up to 100 was generated and attempts survey on the hand carry server simultaneously Illustrated on [Figure 2.8](#figfunkload). This time only response time was measured.

<figure id="figfunkload">![https://file.army/i/B4GJRQH](https://404store.com/2020/09/05/2.8.Stress-Testing-Illustration.jpg)

<figcaption>Figure 2.8 Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server (images from openclipart [[1]](#citekelly)).</figcaption>

</figure>

Response time can be refered to service time, in this case how much users takes to load questionnaire items and to submit responses. The service time can also be called queuing time where there are users who takes shorter time and users who takes longer time as on [Figure 2.9](figresponse-time) are shown the average response time and the maximum response time (the user on the last queue). It shows that the response time increases to the number users and also increases when the questionnaire content size increases because it will affect on the number of questionnaire items to be retrieved and how much responses that have to be submitted. Through this results, the surveryor can decide the target average response time and tolerable maximum response time. Then the number of users and questionnaire items simultaneously can be determined. Though the result also showed that the hand carry server have reached its limit above 85 concurrent users and 30 questionnaire items which the service stops working and must be restarted.

<figure id="figresponse-time">![https://file.army/i/B4GJebf](https://404store.com/2020/09/05/2.9.a.pages_average.png) ![https://file.army/i/B4GJI7I](https://404store.com/2020/09/05/2.9.b.pages_max.jpg)

<figcaption>Figure 2.9 Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items [[10]](#citefajar-hcs), (a) average response time while (b) maximum response time.</figcaption>

</figure>

## 3 Distributed LMS Synchronization

### 3.1 Learning Content Sharing

Before going to the main discussion of synchronization, it is better to discuss about learning content sharing. Sharing learning contents became popular ever since MOOC was introduced. A course "Moodle on MOOC" conducted periodically teaches students how to use Moodle and advised them to share their finished courses [[16]](#citecooch-sharing). Making a well designed and written learning contents for online course from a scratch may consume a lot of time, learning content sharing helps other instructors to quickly develop their own. Some specialized courses may only be written by experts. Learning content sharing reduces the burden of the teacher to create learning contents for online courses, and the more the existence of online courses can give more students from all over the world a better chance to access a quality education.

Distributed LMS is also another form of learning content sharing where the learning contents are shared to other servers on other regions. The typical way of learning content sharing is dump, copy, then upload. Most LMS have a feature to export their course contents into an archive and allows to import the contents to another server which have the LMS. The technique to export and import varies to systems but the concept is to synchronize the directory structure and database. There is a very high demand for this feature that it is still improving until now, for example being able to export user defined part of the contents is being developed. Other LMS that currently does not have this feature will be developed as it is stated on its developer forum.

### 3.2 Full Synchronization versus Incremental Synchronization

#### 3.2.1 Full Synchronization

Synchronization can be defined as similar movements between two or more systems which are temporally aligned, though on this case is the action of causing a set of data or files to remain identical in more than one location. The data or files are learning contents and private data, although private data are usually excluded. The term full synchronization defined on this thesis is the distribution of the whole data consists of new data and existed data. Synchronization occurs when new data are present to update the data of other servers. Illustrated on [Figure 3.1](#figfull-sync) the full synchronization includes existed or duplicated data which deems to be redundant that only adds unnecessary burden to the network. However full synchronization are more reliable because each full data are available.

<figure id="figfull-sync">![https://file.army/i/B4GJSlV](https://404store.com/2020/09/05/3.1.Full-Synchronization-Illustration.png)

<figcaption>Figure 3.1 Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared. Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is a duplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.</figcaption>

</figure>

#### 3.2.2 Incremental Synchronization

Ideally the duplicate data are to be filtered out and not to be distributed for highest efficiency. The conventional way is the recording approach where the changes done by the authors of the course are recorded. The changes can only and either be additions or deletions of certain locations. This actions are recorded and sent to other servers and have them execute the actions to achieve identical learning contents, which is similar to push mechanism where the main server forces updates on other servers. Accurate changes can be obtained but unrecoverable from error because the process is unrepeatable. Another issue is its restriction that no modification must take place on the learning contents of other servers, meaning the slightest change, corruption, or mutation can render the servers unsynchronizable.

Instead of the recording approach, the calculating approach is more popular due to its repeatable process and less restriction. The approach is to calculate the difference between the new and outdated learning contents. Therefore the process of the approach can be done repeatedly and some changes, corruption, or mutation on either learning contents does not prevent the synchronization. One of the origins of the calculating approach is file differential algorithm developed in Bell Laboratory [[17]](#citediff-bell-lab) which today known as diff utility in Unix. The detailed algorithm may seem complicated, though in summary consists of extracting the common longest subsequence of characters in each line between the two files (more like finding the similarity between two files), afterwards the rest of the characters on the old file will be deleted while on the new file the characters will be added to the common longest subsequence on the correct location, resulting in update of the old file. For large files hashings were involved.

Applying the file differential algorithm on the synchronization will make it differential synchronization. Unlike full synchronization, differential synchronization is the distribution of only the new data. The repetition of differential synchronization will make it incremental synchronization which is the repetitive distribution of only the new data. In sense the synchronization will be incremental because only the updates are sent every time. Another way to put it, increment means to add up where the learning contents adds up to every differential updates. Ultimately duplicate data or learning contents will be filtered out, reducing unnecessary burdens on the network illustrated on [Figure 3.2](figinc-sync).

<figure id="figinc-sync">![https://file.army/i/B4GaJso](https://404store.com/2020/09/05/3.2.Incremental-Synchronization-Illustration.png)

<figcaption>Figure 3.2 Incremental synchronization different from Figure [Figure 3.1](#figfull-sync) where the duplicate data are filtered.</figcaption>

</figure>

#### 3.2.3 Dynamic Content Synchronization on Moodle

The idea of implementing differential synchronization on distributed LMS started by Usagawa et al. [[18]](#citeidea-moodle-sync), which then continued by Ijtihadie et al. [[11]](#citeroyyana-dynamic-content-synchronization) [[19]](#citesecond-moodle-sync). These works still limits themselves to distributed Moodle system because it solely focuses on Moodle structure. When writing the software application, it is necessary to identify the database tables and directories of the learning contents. The incremental synchronization between two Moodle systems was described as dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) where the learning contents are constantly being updated. The dynamic synchronization is unidirectional or simplex in terms of communication model where it is fixed that one Moodle system acts as a master to distribute the updates and another one acts as a slave to receive the updates.

File differential algorithm was applied to maintain consistencies on both master's and slave's database tables and directories. The database tables and directories are assigned with hashes [[11]](#citeroyyana-dynamic-content-synchronization). Information of those hashes are exchanged between master and slave, identical hashes meaning thoses contents should not be change, and on the other hand mismatch hashes meaning those contents should be updated. Though Ijtihadie et al. [[11]](#citeroyyana-dynamic-content-synchronization) developed their own algorithm stated specifically for synchronization of learning contents between LMS, it is not much different from existing remote differential file synchronization algorithm such as [[20]](#citersync).

The moodle tables on the database is converted into synchronization tables as on [Figure 3.3](#figmoodle-diff-sync) through means of hashing. Only contents related to the selected course was converted and sorted on the course packer. Privacy was highly regarded, thus private data was filtered. The purpose is to find inconsistencies on the database between master and slave. Stated on the previous paragraph, hashes are oftenly used to test inconsistencies, if the hashes are different then they are inconsistent and vice versa. When inconsistencies on a certain table is found, the master sends its table to the slave replacing the slave's table which in the end will become consistent. In the end the synchronization tables are reverted back into Moodle tables. In summary dynamic content synchronization only takes place on parts of the database and directories that changes or inconsistent.

<figure id="figmoodle-diff-sync">![https://file.army/i/B4GJZmp](https://404store.com/2020/09/05/3.3.Dynamic-Content-Synchronization-Model.jpg)

<figcaption>Figure 3.3 Dynamic content synchronization model for Moodle [[11]](#citeroyyana-dynamic-content-synchronization). The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slave’s synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.</figcaption>

</figure>

### 3.3 Dump and Upload Based Synchronization

The dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) software application was written solely for Moodle, and back then was written for Moodle version 1.9\. Later on Moodle rises to version 2.0, with major changes on database and directory structure. The software application have to be changed to suit the new Moodle version [[19]](#citesecond-moodle-sync), but the concept of synchronization remains the same. Moodle continues to develop, until now it is version 3.3, though sadly the dynamic content synchronization software application was discontinued on Moodle version 2.0\. The author originally tried to continue the software application but found a better approach named dump and upload based synchronization model [[12]](#citefajar-du-sync) on [Figure 3.4](#figdump-upload-sync). Unlike dynamic content synchronization, the dump and upload based synchronization is bidirectional but limited to half duplex communication model. In other words each can play as both master and slave, but only one at time. For example, on first synchronization one server can play as the master while others as slaves, and on second synchronization the master can switch into a slave and one of the slaves can switch into a master. Another thing is that the synchronization uses pull mechanism where the slave checks and requests updates to the master. It is considered more flexible than the push mechanism where the master forcefully update the slaves.

<figure id="figdump-upload-sync">![https://file.army/i/B4GJuUK](https://404store.com/2020/09/05/3.4.Course-Content-Synchronization-Model.jpg)

<figcaption>Figure 3.4 The dump and upload based synchronization model. Both servers' LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives. After synchronization the archives will be imported/uploaded into the servers' LMS, updating the learning contents.</figcaption>

</figure>

#### 3.3.1 Export and Import Feature

While dynamic content synchronization handles everything from a scratch, the dump and upload based synchronization utilizes the export and import feature that exists in most LMS. It is a feature mainly to export and import learning contents categorized into courses which can also be called course contents. The export feature outputs the course content's database tables and directories into a structured format. Then the import feature reads the format and inserts the data into the correct database tables and directories. Formats may differ from one LMS to another but the method is most likely the same.

Other features are export and import of course lists, user accounts, and probably more others but not known and used on this thesis. One of the best export and import is on Moodle where further splitting is possible on the course contents while on other LMS have to dump the whole course. This way people can choose to get only the contents they are interested in. This opens a path for partial synchronization where only specific contents or parts of the course are synchronized. Another advantage is the option to choose to include, not to include private data, or include private data but anonymized, in other words it supports privacy. In summary Moodle's export and import feature's advantage compared to other LMSs' is the ability to secure private data, and split course contents into blocks or micros screenshot on [Figure 3.5](#figmoodle-export-import). This thesis highly recommends other LMSs' export and import feature to follow Moodle's footsteps.

<figure id="figmoodle-export-import">![https://file.army/i/B4GJ6ZD](https://404store.com/2020/09/05/3.5.a.Moodle-Backup-Option.jpg) ![https://file.army/i/B4GJEdQ](https://404store.com/2020/09/05/3.5.b.Course-Design-4.jpg)

<figcaption>Figure 3.5 Screenshot of Moodle's export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.</figcaption>

</figure>

#### 3.3.2 Rsync a Blocked Based Remote Differential Algorithm

With the pervious subsection explained that course contents can be dumped using the export and import feature, the next step is performing remote differential synchronization between the two archives. The author chose not to develop an algorithm but used an existing algorithm called rsync [[20]](#citersync). The author also did not write a program to perform rsync but use the already existing program based on the rsync library (librsync). What the author did is just implementing this program to work on hyper text transfer protocol (HTTP) or on web browsers since LMS are usually web based (rsync is mostly used on secure shell (SSH)). There are three general steps of performing rsync algorithm between the two archives located on different servers as on [Figure 3.6](#figrsync-ill-1), and details are as follow:

<figure id="figrsync-ill-1">![https://file.army/i/B4GJOVY](https://404store.com/2020/09/05/3.6.Rsync-on-Course-Content-Archive.jpg)

<figcaption>Figure 3.6 First step is to generate a signature of archive on slave and send to master. The signature of is used on master's archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and produce an archive identical to the one on master.</figcaption>

</figure>

1.  The archive to be updated is divided into blocks with each blocks calculated and assigned two types of hash or checksums. The checksums are weak rolling checksum for example Adler-32 and strong checksum for example Black2, and MD5\. The checksums are bundled into a signature and sent to the other server. The user can determine the size of divided blocks which can affect the accuracy of finding difference. [Figure 3.7](#figrsync-ill-2) illustrates this step.

    <figure id="figrsync-ill-2">![https://file.army/i/B4GJGKa](https://404store.com/2020/09/05/3.7.Rsync-Ill-Detail-1.jpg)

    <figcaption>Figure 3.7 Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, and three sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.</figcaption>

    </figure>

2.  The signature is then used on the latest version archive on the server with latest version of archive. First a weak checksum is checked in rolling block. Second if a block's weak checksum is identical then comparison of the two strong checksums is done to verify whether the block is really identical or not. For blocks with identical checksums, their locations are recorded, while other blocks are regarded as new blocks which should be sent to the server with outdated archive. Checksums on signature with no matching blocks found on archive with latest verstion, the blocks of the outdated archive that generated this checksum will be regarded as deleted. Based on all of these information a delta/patch is generated containing instructions to alter the blocks of the outdated archive and new blocks to be inserted there. This step is illustrated on [Figure 3.8](#figrsync-ill-3-4).

    <figure id="figrsync-ill-3-4">![https://file.army/i/B4GJLXL](https://404store.com/2020/09/05/3.8.a.Rsync-Ill-Detail-2.jpg) ![https://file.army/i/B4GJhn9](https://404store.com/2020/09/05/3.8.b.Rsync-Ill-Detail-3.jpg)

    <figcaption>Figure 3.8 Illustration of identifying difference. (a) The three sets of checksums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append new blocks, which will be send and applied on slave.</figcaption>

    </figure>

3.  The delta/patch is sent to the server with outdated archive, applying it to its archive, constructing identical archive to the latest version one as on [Figure 3.9](#figrsync-ill-5).

    <figure id="figrsync-ill-5">![https://file.army/i/B4GJM7o](https://404store.com/2020/09/05/3.9.Rsync-Ill-Detail-4.jpg)

    <figcaption>Figure 3.9 After the delta/patch is applied, slave will have identical archive to master.</figcaption>

    </figure>

Lastly on this subsection, for implementation should be targeted for regions with severe network connectivity. Although transmitting only the differential than the whole contents reduces the transmission cost, it is not the only answer regarding to network stability issue. Network stability issue can be a long cut off in the middle of transmission which forces to restart the synchronization process. Another one is short cut offs which makes the transmission discrete but unnecessary to restart, however frequent short cut offs can corrupt the transmission data. To solve this unstable network problem, techniques implemented in most download manager software applications should also be implemented on the synchronization's transmission. To support continueable download after the transmission is completely cutoff, is to split the transmission data into pieces. During cutoff, the transmission can be continued by detecting how much pieces the client has, then request and retrieve remaining pieces from server. To prevent data corruption checksums can be used to verify the data's integrity, on this case are the pieces integrity. Finally [Figure 3.6](#figrsync-ill-1) is modified to [Figure 3.10](#figrsync-ill-6).

<figure id="figrsync-ill-6">![https://file.army/i/B4GJQGE](https://404store.com/2020/09/05/3.10.Rsync-Ill-Detail-5.jpg)

<figcaption>Figure 3.10 Implementation of some download manager techniques into rsync algorithm based synchronization. Delta is split into pieces and retrieved by the client. The integrity of the pieces are checked using cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.</figcaption>

</figure>

#### 3.3.3 Experiment Result and Evaluation

With dump and upload based synchronization prototype created, an experiment was conducted. The experiments took place on many LMS with the latest version, which were Moodle 3.3, Atutor 2.2.2, Chamilo 1.11.4, Dokeos 3.0, Efront 3.6.15.5, and Illias 5.2\. The purpose was to compare the network traffic between full synchronization and incremental synchronization, and percentage of duplicate data eliminated. The experiment used the authors own original course contents which mainly consists three topics are computer programming, computer network, and penetration testing, with each consists of materials, discussion forums, assignments, and quizzes. A snapshot of one of the topics was provided on Figure [Figure 3.3](#figmoodle-diff-sync).

There are four scenarios. First is full synchronization, equivalent to transmitting the whole course content or full download from the client side. Second is large content incremental synchronization is when the client only have one of the three topics (example for Moodle will update from 16.5MB to 30.5MB). Third is medium content incremental synchronization is when the client already have two of the three topics (example for Moodle will update from 28.4MB to 30.5MB), and the client wants to synchronize to the server in order to have all three of the topics (update). Fourth is no revision meaning incremental synchronizing while there is no update, to test whether there are bugs in the software application which the desired result should be almost no network traffic generated. On [Table 3.1](#tablearchive-size) shows the course content data size in bytes when it has one, two, or three of the topics. The data sizes varies depending on the LMS, but the contents such as materials, discussion forums, assignments, and quizzes are almost exactly similar.

<table id="tablearchive-size"><caption>Table 3.1 Size of course contents of the same course on different LMS, showing sizes when in contains one, two, and three topics.</caption>

<thead>

<tr>

<th>LMS</th>

<th>1 Topic</th>

<th>2 Topics</th>

<th>3 Topics</th>

</tr>

</thead>

<tbody>

<tr>

<td>Moodle</td>

<td>16.5 MB</td>

<td>28.4 MB</td>

<td>30.5 MB</td>

</tr>

<tr>

<td>Atutor</td>

<td>336.5 kB</td>

<td>11.7 MB</td>

<td>13.7 MB</td>

</tr>

<tr>

<td>Chamilo</td>

<td>8.5 MB</td>

<td>20 MB</td>

<td>22 MB</td>

</tr>

<tr>

<td>Dokeos</td>

<td>27.4 MB</td>

<td>39 MB</td>

<td>41 MB</td>

</tr>

<tr>

<td>Efront</td>

<td>16.5 MB</td>

<td>28 MB</td>

<td>30 MB</td>

</tr>

<tr>

<td>Illias</td>

<td>439.3 kB</td>

<td>22.8 MB</td>

<td>26.6 MB</td>

</tr>

</tbody>

</table>

The experiment used rdiff utilities to perform rsync algorithm between latest and outdated as the incremental synchronization. Before proceeding it is wise to examine the affect of block size which on previous subsection states that users are free to define the size. The test was perform on Moodle's archives from Table [Table 3.1](#tablearchive-size) between an archive which has one topic of 16.5MB and archive which has 3 topics of 30.5MB. The result is on [Figure 3.11](#figblocksize-vs-sig-del) showing the relationship between block size, signature, and delta size, which affects total transmission cost by summing signature and delta. Larger block size meaning less blocks where less checksum sets are generated, thus smaller signature size. However this means less accurate checking and less likely to detect similar blocks which will contribute to the size of the delta. The [Figure 3.11](#figblocksize-vs-sig-del) showed the delta had reached the full size of the targeted archive, meaning that it missed detecting similar blocks, thus the whole archive is treated as totally different archive. The incremental synchronization will be more heavier than full synchronization. Reversely smaller block size provides more accurate detection which guarantee to reduce the size of the delta. However this means more blocks and more checksum sets are to be bundled into the signature, and looking at the Figure it can grow very large that can cost a lot more transmission cost then full synchronization itself. In conclusion choosing the right blocksize is crucial to get less sum of signature and delta that contributes to the transmission cost, on this case 512 bytes of block size is optimum.

<figure id="figblocksize-vs-sig-del">![https://file.army/i/B4GJXmU](https://404store.com/2020/09/05/3.11.Block-Size-vs-Signature-Delta.jpg)

<figcaption>Figure 3.11 Test result showing the relationship between block size, signature, and delta. When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.</figcaption>

</figure>

With the relationship of blocksize to signature and delta discussed, it is still not ready to proceed with the experiment. With the difference between the two archive's size, latest is 30.5MB and outdated is 16.5MB ideally the delta should be 14MB but still strayed far to as large as 20MB. It is found that the problem is because the rsync algorithm (rdiff) was executed directly on the archive which is still compressed. The solution is to uncompress the archive before hand and execute rdiff recursively of every available contents which makes the author to turn on more modified utility called rdiffdir.

The experiment succeeded and got results of [Figure 3.12](#figexperiment-result). [Figure 3.12](#figexperiment-result) already includes uplink and downlink, for incremental synchronization uplink is influenced by the size of the signature and downlink is influenced by the size of the delta (see [Figure 3.6](#figrsync-ill-1)). Detailed data are also provided on [Table 3.2](#tabledetail-experiment). However the purpose of both [Figure 3.12](#figexperiment-result) and [Table 3.2](#tabledetail-experiment) is only to show that incremental synchronization is better than full synchronization which in this case is lower network traffic, and to show that the incremental synchronization is able to detect when there are no updates in this case almost no network traffic, while the main objective is to eliminate duplicate data during transmission.

<figure id="figexperiment-result">![https://file.army/i/B4GJAU3](https://404store.com/2020/09/05/3.12.Incremental-Synchronization-Network-Traffic-Result.jpg)

<figcaption>Figure 3.12 Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.</figcaption>

</figure>

<table id="tabledetail-experiment"><caption>Table 3.2 Detail experiment result of Figure [Figure 3.12](#figexperiment-result) showing size of signature and delta during incremental synchronization scenarios on each LMSs.</caption>

<thead>

<tr>

<th></th>

<th colspan="3">Signature in Mega Bytes</th>

<th colspan="3">Delta in Mega Bytes</th>

</tr>

</thead>

<tbody>

<tr>

<td>LMS</td>

<td>Large</td>

<td>Medium</td>

<td>None</td>

<td>Large</td>

<td>Medium</td>

<td>None</td>

</tr>

<tr>

<td>Moodle</td>

<td>0.5427</td>

<td>0.9668</td>

<td>1.1621</td>

<td>15.7489</td>

<td>2.9688</td>

<td>0.7227</td>

</tr>

<tr>

<td>Atutor</td>

<td>0.0292</td>

<td>0.3125</td>

<td>0.3711</td>

<td>13.5254</td>

<td>2.0899</td>

<td>0.0684</td>

</tr>

<tr>

<td>Chamilo</td>

<td>0.215</td>

<td>0.5427</td>

<td>0.6144</td>

<td>14.4282</td>

<td>2.6214</td>

<td>0.2048</td>

</tr>

<tr>

<td>Dokeos</td>

<td>1.307</td>

<td>1.6282</td>

<td>1.6794</td>

<td>15.0938</td>

<td>3.6535</td>

<td>0.9626</td>

</tr>

<tr>

<td>Efront</td>

<td>0.1024</td>

<td>0.1741</td>

<td>0.1946</td>

<td>13.6499</td>

<td>2.1402</td>

<td>0.0102</td>

</tr>

<tr>

<td>Illias</td>

<td>0.0025</td>

<td>0.1339</td>

<td>0.1559</td>

<td>26.2226</td>

<td>4.0107</td>

<td>0.0001</td>

</tr>

<tr>

<td>Average</td>

<td>0.3671</td>

<td>0.6264</td>

<td>0.6962</td>

<td>16.4431</td>

<td>2.9141</td>

<td>0.3281</td>

</tr>

</tbody>

</table>

The percentage of redundant data eliminated is shown on [Table 3.3](#tableduplicate-eliminated) for incremental synchronization scenarios. It is assumed that the ideal delta is the difference in data size between the latest and outdated archive. The duplicate data is the outdated archive itself or the latest archive substracted by the ideal delta, which is this much that had to be eliminated. The larger the experiment's delta size compared to the ideal delta, the worse the experiment's result. With these results the performance of the incremental synchronization can be evaluated by calculating the percentage of duplicated data eliminated which is the full latest archive substracted by experiment's delta size, next divided by duplicated data, and then converted to percentage. For large content synchronization there is one LMS Atutor which had a low result of 51.89 % due to size of generated archive itself (Table [Table 3.1](#tablearchive-size)) and drop the whole average to 85.30%. Other than Atutor and Illias the duplicate data eliminated percentage is above 89%. For the medium content synchronization a very high average duplicate data eliminated percentage is achieve which is 97.90%, meaning duplicate data are almost completely eliminated. Though these results are obtain strictly under optimal block size configuration (Figure [Figure 3.11](#figblocksize-vs-sig-del)) where the minimum network traffic consisted of uplink and downlink (affected by signature and delta size) is desired. There is no benefit of 100% duplicate data elimination if the uplink (signature size) is very large.

<table id="tableduplicate-eliminated"><caption>Table 3.3 Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.</caption>

<thead>

<tr>

<th colspan="2">In Mega Bytes</th>

<th colspan="3">Large Content Synchronization</th>

<th colspan="3">Medium Content Synchronization</th>

</tr>

</thead>

<tbody>

<tr>

<td>LMS</td>

<td>Full</td>

<td>Result</td>

<td>Ideal</td>

<td>Eliminated</td>

<td>Result</td>

<td>Ideal</td>

<td>Eliminated</td>

</tr>

<tr>

<td>Moodle</td>

<td>30.5</td>

<td>15.7389</td>

<td>14</td>

<td>89.46%</td>

<td>2.9688</td>

<td>2.1</td>

<td>96.94%</td>

</tr>

<tr>

<td>Atutor</td>

<td>13.7</td>

<td>13.5254</td>

<td>13.3635</td>

<td>51.89%</td>

<td>2.0899</td>

<td>2</td>

<td>99.23%</td>

</tr>

<tr>

<td>Chamilo</td>

<td>22</td>

<td>14.4282</td>

<td>13.5</td>

<td>89.08%</td>

<td>2.6214</td>

<td>2</td>

<td>96.89%</td>

</tr>

<tr>

<td>Dokeos</td>

<td>41</td>

<td>15.0938</td>

<td>13.6</td>

<td>95.55%</td>

<td>3.6535</td>

<td>2</td>

<td>95.76%</td>

</tr>

<tr>

<td>Efront</td>

<td>30</td>

<td>13.6499</td>

<td>13.5</td>

<td>99.09%</td>

<td>2.1402</td>

<td>2</td>

<td>99.50%</td>

</tr>

<tr>

<td>Illias</td>

<td>26.6</td>

<td>26.2226</td>

<td>26.1697</td>

<td>87.71%</td>

<td>4.0106</td>

<td>3.8</td>

<td>99.08%</td>

</tr>

<tr>

<td>Average</td>

<td>27.3</td>

<td>16.4431</td>

<td>15.6889</td>

<td>85.30%</td>

<td>2.9141</td>

<td>2.3167</td>

<td>97.90%</td>

</tr>

</tbody>

</table>

#### 3.3.4 Advantage of Dump and Upload Based Synchronization

With the dump and upload based incremental synchronization model successfully able to eliminate very large amount of duplicate data the advantage compared to the previous dynamic content synchronization can be discussed:

1.  Since the model utilizes existing utilities mainly the export and import feature in LMSs one software application can be compatible to all LMS and all of its versions as long as it has this feature. The reason is because the export and import feature is guaranteedly maintain by the LMSs' developers, unlike dynamic content sychronization software application, there is no need to worry about structure changes on LMS. The advantage is actually on the developer side, when writing dynamic content synchronization software application the writer needs to coordinate the database and directories while for dump and upload based synchronziation it is already taken care of by the LMSs' developers.
2.  Other benefits can also be obtained from the export and import feature however relative to the LMS. For example on Moodle it has the capability to choose whether to include private data or not, meaning for synchronization it can have a flexible privacy option. While for other LMS private data is filtered out which means no other options other than retaining the privacy for synchronization. Another example also on Moodle it is able split a course into smaller blocks of learning contents and able to dump specific learning contents (not all). The synchronization software application can be tuned for partial synchronization, meaning other teachers can get only parts that they are interested in. Unfortunately this is available only on Moodle, other LMS have to dump the whole course contents.
3.  Since the method is dumping, it can easily be tuned for bidirectional synchronization, unlike dynamic content synchronization which is unidirectional. The incremental synchronization uses the pull concept where the requesting server only asked the difference from targeted server, while push concept is usually unidirectional where the master forcefully updates the slaves. Although dynamic content synchronization is claimed to be unidirectional, the author sees that it is possible to modify the software application to bidirectional because the differential synchronization method is general, however it is uknown whether it will be as easy to modify as the dump and upload base synchronization.

## 4 Conclusion and Future Work

### 4.1 Conclusion

Portable and synchronized distributed LMS was introduced to keep the contents up to date in environment of severe network connectivity. By replacing the servers with hand carry servers, the servers in severed network regions were able to move to find network connectivity for synchronization. The hand carry server was proved to be very portable because of its very small size and very light weight. The power consumption is very low that a power bank used on smart phone is enough to run the hand carry server for almost a whole day. Though very convenient however it has resource limitations mainly on CPU and memory, which limits the number of concurrent users. Still, the problem of unable to perform synchronization in no network connectivity area is solved.

The Incremental synchronization technique was beneficial for synchronization in distributed LMS, where it eliminates very large amount of duplicate data . Though in the past incremental synchronization was already proposed to be implemented in distributed LMS, this thesis provides a better approach which is dump and upload based synchronization. The advantages are that it is compatible to most LMSs and most of their versions, easily tuneable for bidirectional synchronization, and because it utilizes LMS features it can be tuned for example to configure privacy settings, and to perform partial synchronization.

### 4.2 Future Work

All of the experiment are done in the lab, and it is better to conduct real implementation in the future especially regarding the hand carry servers. A possible real implementation is to have drones carrying the hand carry servers. Performance issue is still a problem with hand carry servers that demands for enhancing techniques like integrating field programmable gate array (FPGA). For incremental synchronization it was discussed only the network issue but not yet resource such as CPU and memory. Although the synchronization on this thesis is bidirectional, distributed revision control system is needed to be implemented for larger collaborations. The distributed LMS here is a replicated system, but there is a better, more flexible trend to use especially for content sharing which is message oriented middleware (MOM) system that in the future is very interesting to be implemented.

## Acknowledgement

I would like to give my outmost gratitude to the all mighty that created me and this world for his oportunity and permission to walk this path as a scholar and for all his hidden guidances.

The first person I would like to thank is my main supervisor Prof. Tsuyoshi Usagawa for giving me this topic, also to Dr. Royyana who was researching on this topic before me, and their countless wise advices for perfecting this research. The professor is also the one who gave me this oportunity to enroll in this Master's program in Graduate School of Science and Technology, Kumamoto University. It was also through his recommendation that I received the Ministry of Education, Culture, Sports, Science and Technology (MEXT) scholarship from Japan. Not to forget his invitation to join his laboratory, the facilities, and comfort that he had provided. Also, I would like to thank all the oportunities that he had given me to join many conferences such as in Tokyo, Myanmmar, and Hongkong.

Then I would like to thank the Japanese government for giving me this MEXT scholarship that I never have to worry about financial. Instead I can focus on my studies, research, planning my goals for the future, and helping other people. I also would like to thank my other supervisors Prof. Kenichi Sugitani and Prof. Kohichi Ogata for evaluating my research and my thesis.

Next I would like to thank my parents, family and my previous University Udayana University, for not only raising and allowing me, but also pushed me to continue my studies. I would to thank my project team Hendarmawan and Muhammad Bagus Andra that our work about hand carry servers contributes in forming this thesis. My project team also my friends in laboratory Alvin Fungai, Elphas Lisalitsa, Irwansyah, Raphael Masson, and Chen Zheng Yang who were mostly on my side and even contributes to some degree on all my research. Like my friends in previous University whom now walk our separate ways, often spent the night together in laboratory, are friends whom I can trust with my life.

I would to like thank the Indonesia Community, Japanese friends, and other international friends who helped me with life here for example finding an apartment for me, but mostly their friendliness. Lastly to all others that helped me whom I cannot mention one by one, whether the known or the uknown, and whether the seen and the unseen. To all these people, I hope we can continue to work together in the future.

## Reference

1.  M. Kelly, “openclipart-libreoffice,” (2017), [computer software] Available: [http://www.openclipart.org](http://www.openclipart.org). [Accessed 27 June 2017].
2.  S. Paturusi, Y. Chisaki, and T. Usagawa, “Assessing lecturers and students readiness for e-learning: A preliminary study at national university in north sulawesi indonesia,”GSTF Journal on Education (JEd), vol. 2, no. 2, pp. 18, (2015), doi: [10.5176/2345-7163_2.2.50](https://doi.org/10.5176/2345-7163_2.2.50)
3.  Monmon. T, Thanda. W, May. Z. O, and T. Usagawa, “Students E-readiness for E-learning at Two Major Technological Universities in Myanmar,” In Seventh International Conference on Science and Engineering, pp. 299-303, (2016), Yangon, Myanmar.
4.  O. Sukhbaatar, L. Choimaa, and T. Usagawa, “Evaluation of Students’ e-Learning Readiness in National University of Mongolia, ” Educational Technology (ET) Technical Report on Colloborative Support, etc., pp. 37-40 (2017). Soka University:Institute of Electronics, Information and Communication Engineers (IEICE).
5.  E. Randall, “Mongolian Teen Aces an MIT Online Course, Then Gets Into MIT,” [online] Available: [http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit](http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit). [Accessed 27 June 2017].
6.  N. S. A. M. Kusumo, F. B. Kurniawan, and N. I. Putri, “Learning obstacle faced by indonesian students,” in The Eighth International Conference on eLearning for Knowledge-Based Society, Thailand, Feb. (2012), [online] Available: [http://elearningap.com/eLAP2011/Proceedings/paper25.pdf](http://elearningap.com/eLAP2011/Proceedings/paper25.pdf). [Accessed 27 June 2017].
7.  Miniwatts Marketing Group, “Internet World Stats Usage and Population Statistics,” [online] Available: [http://www.internetworldstats.com/stats.htm](http://www.internetworldstats.com/stats.htm). [Accessed 27 June 2017].
8.  Q. Li, R. W. H. Lau, T. K. Shih, and F. W. B. Li, “Technology supports fordistributed and collaborative learning over the internet,” ACM Transactions onInternet Technology (TOIT) Journal, vol. 8, issue 2, no. 5, pp, (2008).
9.  F. Purnama, and T. Usagawa, “Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi”,Educational Technology (ET)Technical Report on Colloborative Support, etc., pp. 21-24 (2017). Soka University: Institute of Electronics, Information and Communication Engineers (IEICE), doi: [10.1145/1323651.1323656](https://doi.org/10.1145/1323651.1323656).
10.  F. Purnama, M. Andra, Hendarmawan, T. Usagawa, and M. Iida, “Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi”,International Mobile Learning Festival (IMLF), pp. 18-32 (2017), [online] Available: [http://imlf.mobi/publications/IMLF2017Proceedings.pdf](http://imlf.mobi/publications/IMLF2017Proceedings.pdf). [Accessed 27 June 2017].
11.  R. M. Ijtihadie, B. C. Hidayanto, A. Affandi, Y. Chisaki, and T. Usagawa, “Dynamic content synchronization between learning management systems over limited bandwidth network,” Human-centric Computing and Information Sciences, vol. 2,no. 1, pp. 117, (2012), doi: [10.1186/2192-1962-2-17](https://doi.org/10.1186/2192-1962-2-17)
12.  F. Purnama, T. Usagawa, R. Ijtihadie, and Linawati, “Rsync and Rdiff imple-mentation on Moodle’s backup and restore feature for course synchronization overthe network”,IEEE Region 10 Symposium (TENSYMP), pp. 24-29 (2016). Bali:IEEE, doi: [10.1109/TENCONSpring.2016.7519372](https://doi.org/10.1109/TENCONSpring.2016.7519372).
13.  The World Bank Group. Mobile cellular subscriptions (per 100 people). (2017,March 06). Retrieved from [http://data.worldbank.org/indicator/IT.CEL.SETS.P2](http://data.worldbank.org/indicator/IT.CEL.SETS.P2).
14.  R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “E-mail Based Updates Delivery in Unidirectional Content Synchronization among Learning Management Systems Over Limited Bandwidth Environment, ”IEEE Re-gion 10 Conference (TENCON), pp. 211215, (2011), doi: [10.1109/TENCON.2011.6129094](https://doi.org/10.1109/TENCON.2011.6129094).
15.  R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “Offline web application and quiz synchronization for e-learning activity for mobile browser” 2010 IEEE Region 10 Conference (TENCON), pp. 2402-2405, (2010), doi: [10.1109/TENCON.2010.5685899](https://doi.org/10.1109/TENCON.2010.5685899).
16.  M. Cooch, H. Foster, and E. Costello, “Our mooc with moodle," Position papers for European cooperation on MOOCs, EADTU, (2015).
17.  J. W. Hunt, and M. D. McIlroy, “An algorithm for differential file comparison,” Computing Science Technical Report, (1976). New Jersey: Bell Laboratories, [online] Available: [https://www.cs.dartmouth.edu/~doug/diff.pdf](https://www.cs.dartmouth.edu/~doug/diff.pdf). [Accessed 27 June 2017].
18.  T. Usagawa, A. Affandi, B. C. Hidayanto, M. Rumbayan, T. Ishimura, and Y.Chisaki, “Dynamic synchronization of learning contents among distributed moodle systems,” JSET, pp 1011-1012, (2009).
19.  T. Usagawa, M. Yamaguchi, Y. Chisaki, R. M. Ijtihadie, and A. Affandi, “Dynamic synchronization of learning contents of distributed learning management systems over band limited network contents sharing between distributed moodle 2.0 series," in International Conference on Information Technology Based Higher Education and Training (ITHET), (2013). Antalya, doi: [10.1109/ITHET.2013.6671058](https://doi.org/10.1109/ITHET.2013.6671058)
20.  A. Tridgell and P. Mackerras, “The rsync algorithm," The Australian National University, Canberra ACT 0200, Australia, Tech. Rep. TR-CS-96-05, (1996), [online] Available: [https://openresearch-repository.anu.edu.au/handle/1885/40765](https://openresearch-repository.anu.edu.au/handle/1885/40765). [Accessed 27 June 2017].

<div class="video-container"><iframe src="lbry-iframe" width="560" height="315" allowfullscreen=""></iframe></div>

<iframe src="//www.slideshare.net/slideshow/embed_code/key/pM9kdR6fWTT6sE" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Portable and Synchronized Distributed Learning Management System in Severe Networked Regions](//www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions "Portable and Synchronized Distributed Learning Management System in Severe Networked Regions")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Author

[Fajar Purnama](https://0fajarpurnama0.github.io)

## Note

*   This is a thesis submitted to _Graduate School of Science and Technology, Computer Science and Electrical Engineering in Kumamoto University, Japan, on September 2017 in partial fulfillment of the requirements for the degree of Master of Engineering_ but was not published thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I claimed full responsibility detached from Kumamoto University. Therefore, I hereby declare to license it as _customized [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)_ where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions).
*   The source code is available at [Github](https://github.com/0fajarpurnama0/file-synchronizer-online-course-sharing).

## Copyright Clearance

Below are the publications reused in this thesis that does not require copyright clearance:

*   [Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi [10]](#citefajar-hcs)

Below are the publications reused in this thesis that requires copyright clearance:

<figure>![https://file.army/i/B4GsgSq](https://404store.com/2020/09/05/0.a.copyright-ieice.jpg)

<figcaption>[Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi [9]](#citehcs-sync)</figcaption>

</figure>

<figure>![https://file.army/i/B4GsNPZ](https://404store.com/2020/09/05/0.b.ieee-permission-crop.jpg)

<figcaption>[Rsync and Rdiff implementation on Moodle's backup and restore feature for course synchronization over the network [12]](#citefajar-du-sync)</figcaption>

</figure>

## Abstract

The continuous advance of electronics and information communication technologies (ICT) have influenced every aspects greatly, on this thesis is discussed on education aspect. Electronics and ICTs have been incorporated into the learning and teaching process, giving birth to electronic learning (e-learning). Inside, there is a well known term called online course where the essence is being able to deliver courses distantly with flexibility in place and time. However a simple condition must be met in order to implement online course, and that is the sufficiency of ICT infrastructure. Unfortunately not all regions met this condition, limiting the accessibility of online course. Other than improving the ICT infrastructure, distributed learning management system (LMS) was proposed as alternative, but the next issue was the maintenance or synchronization, which in this case is keeping the learning contents up to date. There are two problems highlighted in this thesis which are unable to perform synchronization in severe network connectivity region, and duplicate data transfer during synchronization.

To overcome the synchronization in severe network connectivity region the solution is utilizing hand carry servers. By implementing hand carry servers on distributed LMS will grant mobility to the servers of distributed LMS. The concept proposed was having the hand carry server to physically seek network connectivity to perform online synchronization, and afterwards returns to its original location. The hand carry server was proved to be portable due to its small size, light weight, and also power consumption where a power bank is enough to supply for a whole day. Although it has resource limitations in terms of computer processing unit and random access memory which limits its performance.

To overcome duplicate data transfer during synchronization incremental synchronization was utilized instead of full synchronization. Also on this thesis introduced a new approach called dump and upload based sychronization which was to overcome the obstacles of different LMSs and LMS versions faced by dynamic content sychronization.

## Table of Contents

[List of Figures](#listoffigures)

[List of Tables](#listoftables)

1.  [Introduction](#introduction)
    1.  [Background](#background)
    2.  [Problem](#problem)
    3.  [Hypothesis](#hypothesis)
    4.  [Significance](#significance)
    5.  [Objective](#objective)
    6.  [Contribution](#contribution)
    7.  [Limitation](#limitation)
    8.  [Structure of the thesis](#structureofthethesis)
2.  [Portable Distributed LMS](#portabledistributedlms)
    1.  [Distributed Systems](#distributedsystems)
        1.  [Partitioned System](#partitionedsystem)
        2.  [Replicated Sytem](#replicatedsytem)
    2.  [Distributed Learning Management System](#distributedlearningmanagementsystem)
    3.  [Hand Carry Server in Distributed LMS](#handcarryserverindistributedlms)
        1.  [Portability of Hand Carry Server](#portabilityofhandcarryserver)
        2.  [Synchronization in Severe Network Connection](#synchronizationinseverenetworkconnection)
    4.  [Limitation of Hand Carry Server](#limitationofhandcarryserver)
        1.  [Resource](#resource)
        2.  [Stress Testing](#stresstesting)
3.  [Distributed LMS Synchronization](#distributedlmssynchronization)
    1.  [Learning Content Sharing](#learningcontentsharing)
    2.  [Full Synchronization versus Incremental Synchronization](#fullsynchronizationversusincrementalsynchronization)
        1.  [Full Synchronization](#fullsynchronization)
        2.  [Incremental Synchronization](#incrementalsynchronization)
        3.  [Dynamic Content Synchronization on Moodle](#dynamiccontentsynchronizationonmoodle)
    3.  [Dump and Upload Based Synchronization](#dumpanduploadbasedsynchronization)
        1.  [Export and Import Feature](#exportandimportfeature)
        2.  [Rsync a Blocked Based Remote Differential Algorithm](#rsyncablockedbasedremotedifferentialalgorithm)
        3.  [Experiment Result and Evaluation](#experimentresultandevaluation)
        4.  [Advantage of Dump and Upload Based Synchronization](#advantageofdumpanduploadbasedsynchronization)
    4.  [Conclusion and Future Work](#conclusionandfuturework)
        1.  [Conclusion](#conclusion)
        2.  [Future Work](#futurework)

[Acknowledgement](#acknowledgement)

[References](#reference)

## List of Figures

1.  In Chapter 1:
    1.  [Illustration of e-learning showing many electronic devices to beused (images from openclipart [1].](#figE-Learning)
    2.  [Illustration of the difference between conventional course and online course. While conventional course is restricted by place andtime, online course can be anywhere and anytime (images fromopenclipart [1].](#figOnline-Course)
2.  In Chapter 2:
    1.  [Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand peoplewill have not difficulty in accessing if there are servers on their local regions.](#figdistributed-lms)
    2.  [Illustration of using hand carry computer device to gather informa-tions from other users inputed from their own computer device [10].](#fighcs-data-collecting)
    3.  [Time consumption of survey process from preparation, responding,to post survey [10]. (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and responsecollection, and Post Survey consists of response insertion. (b) Forhand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method isno need for post survey which the response already automatically inserted.](#figmanual-labor)
    4.  [Data in form of bar graph and pie chart was shown the instancethe hand carry server received the responses [10]. Only 4/30 item result shown here since it is too much to show all.](#figinstant-survey-result)
    5.  [Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing [9].](#figmoving-server)
    6.  [](#figimplementation-hcs)Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.
    7.  [Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage [10].](#figcpu-memory)
    8.  [](#figfunkload)Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server(images from openclipart [1]).
    9.  [Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items[10], (a) average response time while (b) maximum response time.](#figresponse-time)
3.  In Chapter 3:
    1.  [Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared. Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is aduplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.](#figfull-sync)
    2.  [Incremental synchronization different from Figure 3.1 where the duplicate data are filtered.](#figinc-sync)
    3.  [Dynamic content synchronization model for Moodle [11]. The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slaves synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.](#figmoodle-diff-sync)
    4.  [The dump and upload based synchronization model. Both servers’ LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives. After synchronization the archives will be imported/uploaded into the servers’ LMS, updating the learning contents.](#figdump-upload-sync)
    5.  [Screenshot of Moodle’s export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.](#figmoodle-export-import)
    6.  [](#figrsync-ill-1)First step is to generate a signature of archive on slave and send to master. The signature of is used on master’s archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and producean archive identical to the one on master.
    7.  [Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, andthree sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.](#figrsync-ill-2)
    8.  [](#figrsync-ill-3-4)Illustration of identifying difference. (a) The three sets of check-sums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append newblocks, which will be send and applied on slave.
    9.  [After the delta/patch is applied, slave will have identical archive to master.](#figrsync-ill-5)
    10.  [Implementation of some download manager techniques into rsync algorithm based synchronization. Delta is split into pieces and retrieved by the client. The integrity of the pieces are checkedusing cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.](#figrsync-ill-6)
    11.  [Test result showing the relationship between block size, signature, and delta. When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.](#figblocksize-vs-sig-del)
    12.  [Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.](#figexperiment-result)

## List of Tables

1.  In Chapter 1:
2.  In Chapter 2:
    1.  [List of LMS known categorize by open source, Cloud, or Proprietary.](#tablelist-of-LMS)
    2.  [Specification of the hand carry computer Raspberry Pi 2 Model B.](#tableRP2-Specification)
3.  In Chapter 3:
    1.  [Size of course contents of the same course on different LMS, show-ing sizes when in contains one, two, and three topics.](#tablearchive-size)
    2.  [Detail experiment result of Figure 3.12 showing size of signature and delta during incremental synchronization scenarios on each LMSs.](#tabledetail-experiment)
    3.  [Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.](#tableduplicate-eliminated)

## 1 Introduction

### 1.1 Background

Electronics and Information Communcation Technology (ICT) have made many tasks more convenient, including delivering education. It can be seen that many have incorporated electronics in their learning and teaching process. There are few examples such as teachers using laptops and projectors to present their materials, students browsing the Internet to search for informations, and both of them using emails, chats, or social networking service to communicate. These kind of things are agreed to be called electronic learning (e-learning) which can be illustrated on [Figure 1.1](#figE-Learning)

<figure id="figE-Learning">![https://file.army/i/B4GsqFF](https://404store.com/2020/09/05/1.1.E-Learning.jpg)

<figcaption>Figure 1.1 Illustration of e-learning showing many electronic devices to be used (imagesfrom openclipart [[1]](#citekelly)).</figcaption>

</figure>

Though, this thesis will not discuss widely on e-learning, but a category which is part of e-learning called online course. It uses electronic ICT devices where information exchange can be done remotely. Information can be delivered through electrical signal in high speed on the network, preferably on the Internet, and computer devices as end devices or as transmitters and receivers. Simply computer devices connected to the Internet are all that are needed to participate in online course from anywhere at anytime illustrated on [Figure 1.2](#figOnline-Course).

<figure id="figOnline-Course">![https://file.army/i/B4GstNe](https://404store.com/2020/09/05/1.2.Online-Course.jpg)

<figcaption>Figure 1.2 Illustration of the difference between conventional course and online course. While conventional course is restricted by place and time, online course can be anywhere and anytime (images from openclipart [[1]](#citekelly)).</figcaption>

</figure>

Online course is now being highlighted by many parties, seeing them as one solution to the unevenly distribution of education. Straighfowardly not everyone have access to good quality education, furthermore there are also those who does not have access, and by using online course people can receive education without going to school. Knowing this, our peers tried to implement online course in their Universities, one in Indonesia [[2]](#citesary) and the other one in Myanmar [[3]](#citemonmon). Another peer already have online course well built in Mongolia and now moving to massive open online course (MOOC) [[4]](#citeotgon). Unlike private online course only for students in Universities, MOOC is open for anyone indiscriminately. In the United States (US) MOOC is also being used to scout for potential students. For example Massachusetts Institute of Technology (MIT) found a genius Mongolian highschool student who perfectly ace its Circuits and Electronics MOOC, then took him as a freshmen student [[5]](#citerandall). In summary many people saw bright future in utilizing online course in education.

With all the benefits of online course, there are still problems preventing many people from enjoying it. The problem was the lack of accessability to online course due to insufficient ICT infrastructure. In other words there are people who are having network connectivity issue especially in developing countries. On random survey by Kusumo et al. [[5]](#citeobstacle-indonesia) on students in Indonesia, 60% of them agreed that Internet connection is still problematic. The survey by Monmon et al. [[3]](#citemonmon) of e-readiness on Yangon Technological University and Mandalay Technological University in Myanmmar showed lower Likert scale scores on the students' and teachers' perception on ICT network compared to other items. Today the world Internet penetration is still around 50% indicating that only half of the world's population can access online course [[7]](#citeinternet-world-stat). Eventhough these people have access, their access quality may still be questionable which can lead to disatisfaction in accessing online course.

The obvious solution to accessibility issue is to improve the ICT infrastruture, however this takes a long time. Therefore another method was implemented, which is implementation of distributed system rather than centralized system. The concept is to have the people to access the service on their local area that is distantly closer than on the central area that is distantly further. In some references, it is stated as the third generation of content management system (CMS) [[8]](#citedistributed-system), thought on this work is more about learning contents of Learning management system (LMS) than general contents of CMS.

### 1.2 Problem

With distributed LMS as the solution to the lack of accessability of online course, it is the next problem which is discussed on this thesis. The problem is the synchronization which is to keep the learning contents up to date. This can also be said as the maintenance of the learning contents. Specifically there are two problems highlighted on this thesis as follow:

1.  The lack of network connectivity for synchronization. Usually synchronization are set to be done online where the servers synchronizes with another in order to keep the learning contents to its latest version. If this was the case then synchronization is not possible on no network connectivity condition.
2.  Duplicate data transfer during synchronization. In default full synchronization is used, where the learning contents is usually in bundle of courses. Commonly when the contents of the course is revised on LMS, the whole contents of course is distributed to other servers including previously distributed contents (duplicate data). In this case, there will be many redundant data which will add more burdens to the network.

### 1.3 Hypothesis

This thesis provides two main solutions for the two problems:

1.  For the first problem of no network connectivity, the solution is to provide portability function to distributed LMS. Straightforwardly enabling the servers to move to other locations where there is network connectivity to synchronize, and to return to its original location after finish synchronizing.
2.  For the second problem of duplicate data is to utilize incremental synchronization through continuous differential synchronization technique. The new contents are to be identified before synchronization and only the new contents are distributed, leaving out the redundant data.

### 1.4 Significance

Detail significances are discussed in further sections, but in general can be mentioned as follow:

1.  Possibility of flexible synchronization in severe network connectivity region by mobilizing the servers of distributed LMS. It can also be pictured as widening the network coverage.
2.  Lower network cost can be achieved from incremental synchronization.

### 1.5 Objective

The objective of this research is to enable online synchronization of distributed LMS in almost no network connectivity region and reduce redundant data transfer during synchronization.

### 1.6 Contribution

1.  Introduced a novel concept of integrating hand carry server to distributed LMS which makes it mobile or portable resulting in able to perform synchronization in regions with severe network [[9]](#citehcs-sync). This thesis also demonstrated the portability of hand carry servers' through conducting survey simulation and on the other hand also showed its limitation through stress testing [[10]](#citefajar-hcs).
2.  Though the novelty of incremental synchronization in distributed LMS was already claimed [[11]](#citeroyyana-dynamic-content-synchronization), this thesis showed a different approach call dump and upload based synchronization [[12]](#citefajar-du-sync) which the advantages of its single software application is compatible to most LMS and benefits the feature of that LMS, for example its privacy and security feature which automatically makes the synchronization private and secure, and on Moodle possibility of partial synchronization due to micronization of course contents into blocks. Another advantage is this approach supports bidirectional synchronization.

### 1.7 Limitation

Each method may have limitations which is discussed in detail on each of their respective sections, but here is mentioned the general limitation of this research:

1.  The system is only experimented in laboratory and not yet implemented in real running online courses. The experiment is done on the author's virtual machines, laboratory's local area network (LAN), and free public clouds owned by the author.
2.  Only one hand carry server was used in actual experiment and the expansion discussed of using more the one of it is still a concept derived from the experiment.
3.  This thesis' dump and upload based incremental synchronization is novel in its concept but not in its software application since it only make use of existing software applications. They are the export and import feature in LMS to dump the learning contents and rdiff application based on rsync to identify the difference between dumps.
4.  The course experimented on is the authors self created course which was never delivered, in short it is not an actual running course.

### 1.8 Structure of the thesis

Beyond this section the thesis contains three more chapters:

1.  Chapter 2 discussed about portable distributed LMS which in order gives brief introduction to distributed LMS, afterward is the author's work in showing the convenience of hand carry server [[10]](#citefajar-hcs), the concept of hand carry server in distributed LMS [[9]](#citehcs-sync), and laslty the hand carry server's limitations.
2.  Chapter 3 discussed about incremental data synchronization which in order the story of sharing learning contents, distinguishing full synchronization to differential and incremental synchronization, discussion of the previous work of dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) versus the author's work of dump and upload based synchronization [[12]](#citefajar-du-sync), and finally experiments and results showing the percentage of duplicate data eliminated on incremental synchronization.
3.  Chapter 4 is the conclusion of this thesis that also discussed the future work.

## 2 Portable Distributed LMS

### 2.1 Distributed Systems

#### 2.1.1 Partitioned System

Distributed systems can be a wide discussion with different implementation [[8]](#citedistributed-system). One implementation can be as partitioned system. For example, an organization's network can have their servers separated, where the database, directory, domain name service (DNS), dynamic host configuration protocol (DHCP), file, web, and each other servers on separated machine. They are integrated but independent where if one service (server) is damage, will not damage other services. A different example is data partitioning where data are fragmented that when retrieving data, they have to be gathered and merged. This usually happens in collaboration where people are working on the same project but from different machines.

#### 2.1.2 Replicated System

Another implementation can be as replicated system, and this is the one that is referred or used on this thesis. The urgency for replicated system can be due to bottleneck traffic or geographically severe network connectivity, or both. One of the most popular implementation is search engine like Google and Yahoo where they have different server locations assigned with local domains for example .co.jp for Japan, .co.id for Indonesia, and etc. Not as well known as search engines are online multiplayer games. The servers of online multiplayer games can reside on many regions such as Asia, Europe, United States, China, etc. There are games that shows the number of population on each servers indicating whether it is full or not. Players can choose other servers when a server reached the population limit or when players cannot actually reach the server on that region.

### 2.2 Distributed Learning Management System

One definition of LMS is a system that manages the learning and teaching specifically for online case. The current form of LMS today is a software application. It is not just delivering learning materials to students but online computerize any activities that can happen in a class. Some activities are interractions whether by chat applications or forums like on social networking service (SNS), assignments where this time is submitted electronically through LMS by uploading their files, and quizzes or examinations which can be automatically or manually graded. Not to forget that it can be accessed from anywhere at anytime, and computers are used which can perform much faster and automatic tasks than humans, makes it possible for unique applications, data minings, and learning analytics. In short new features are being developed everyday. Today exists many LMS as on [Table 2.1](#tablelist-of-LMS) whether they are open source (free to use, modify, with all the codes open), only available on clouds or software as a service (SAAS) which tends to be freeware/usage only, or proprietary which tends to be business/commercial/paid. On the author's surroundings mostly Moodle is used.

<table id="tablelist-of-LMS"><caption>Table 2.1 List of LMS known categorize by open source, Cloud, or Proprietary.</caption>

<thead>

<tr>

<th>Open Source</th>

<th>aTutor, Canvas, Chamilo, Claroline, eFront, ILIAS, LAMS, LON-CAPA, Moodle, OLAT, OpenOLAT, Sakai, SWAD, Totara LMS, WeBWorK</th>

</tr>

</thead>

<tbody>

<tr>

<td>SAAS/Cloud</td>

<td>Cornerstone OnDemand Inc, Docebo LMS, Google Classroom, Grovo, Halogen Software, Informetica, Inquisiq R3, Kannu, Latitude Learning, Litmos, Talent LMS, Paradiso LMS, TOPYX, TrainCaster LMS,WizIQ LinkStreet</td>

</tr>

<tr>

<td>Proprietary</td>

<td>Blackboard Learning System, CERTPOINT Systems Inc, Desire2Learn,eCollege, Edmodo, Engrade, WizIQ, GlobalScholar, Glow, HotChalk,Informetica, ITWorx CLG, JoomlaLMS, Kannu, Latitude Learning LLC,Uzity, SAP, Schoology, SSLearn, Spongelab, Skillsoft, EduNxt,SuccessFactors, SumTotal Systems, Taleo, Teachable, Vitalect</td>

</tr>

</tbody>

</table>

The term distributed LMS means that the replicated servers contains LMS. Each servers are meant to service online course. The implementation can be a full replication where not only learning contents but everything else including activities, assessments, and interractions are synchronized. This means students and teachers can freely use any servers recommended to the one with best network connectivity. The other implementation is partial replication where only non-private data are synchronized, usually only the learning contents. This can happen when there are jurisdictions where each regions are to be handled locally. In other words contents are provided but each schools and universities are still the owner of their own servers and asserts local authorities. Either way distributed system is the solution for bottleneck and connectivity issue. As an illustration on [Figure 2.1](#figdistributed-lms) in Indonesia, it is better to build and spread more servers compared to have a centralized server in the capital city.

<figure id="figdistributed-lms">![https://file.army/i/B4GsP85](https://404store.com/2020/09/05/2.1.a.Internet_Penetration_Indonesia_Connectivity_Issue.jpg) ![https://file.army/i/B4GsUQA](https://404store.com/2020/09/05/2.1.b.Internet_Penetration_Indonesia_Distributed_LMS.jpg)

<figcaption>Figure 2.1 Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand people will have not difficulty in accessing if there are servers on their local regions.</figcaption>

</figure>

### 2.3 Hand Carry Server in Distributed LMS

After the establishment of distributed LMS, the contents needs to be maintained or to be kept up to date through synchronization. However the problem is the lack of network connectivity between servers usually found in deeper areas such as schools in villages. It may be easy to build a LAN but difficult to build connections to other servers or simply an Internet connection on distant places. In a short time it is only possible to build a very limited connection (very low speed) which retrieval of contents may seem to take forever if it is very large. The metaphor is building a server in a jungle, a remote island, or a desert, which are very isolated. The default solution is offline synchronization or the author's solution server mobilization [[9]](#citehcs-sync).

#### 2.3.1 Portability of Hand Carry Server

Before discussion of the synchronization, this section would like to introduce hand carry servers. On this thesis it is called hand carry server because the physical hardware is a computer with the size of a regular human hand that has been configured into a server. It is called a mini, pocket size, or portable computer, one example on this thesis is used Raspberry Pi 2 with the specification on [Table 2.2](#tableRP2-Specification).

<table id="tableRP2-Specification"><caption>Table 2.2 Specification of the hand carry computer Raspberry Pi 2 Model B.</caption>

<thead>

<tr>

<th>Specification</th>

</tr>

</thead>

<tbody>

<tr>

<td>A 900MHz quad-core ARM Cortex-A7 CPU</td>

</tr>

<tr>

<td>1 Giga Byte (GB) Random Access Memory (RAM)</td>

</tr>

<tr>

<td>4 Universal Serial Bus (USB) ports</td>

</tr>

<tr>

<td>40 General Purpose Input Output (GPIO) pins</td>

</tr>

<tr>

<td>Ethernet Port</td>

</tr>

<tr>

<td>Camera Serial Interface (CSI)</td>

</tr>

<tr>

<td>Display Serial Interface (DSI)</td>

</tr>

<tr>

<td>Micro Serial Digital (SD) card slot</td>

</tr>

<tr>

<td>Video Core IV 3D graphics cire</td>

</tr>

<tr>

<td>Size of 85.60 mm × 56.5 mm (3.370 in × 2.224 in), not including protruding connectors</td>

</tr>

<tr>

<td>Weight of 45g</td>

</tr>

</tbody>

</table>

The portability was demonstrated on one of the author's previous work [[10]](#citefajar-hcs). It is less related to distributed system but it showed applications of hand carry server in manual labors which on that work is a simulation comparing between paper based method survey to hand carry server method survey. The motivation was the lack of Internet connection to perform online survey but most people owns a computer devices in developing countries [[3]](#citemonmon) [[7]](#citeinternet-world-stat) [[13]](#citemobile-users). Instead of reverting to paper based method, the participants' personal digital assistants (PDAs) can be utilized by connecting them to the hand carry server and perform a semi-online survey illustrated on [Figure 2.2.](#fighcs-data-collecting)

<figure id="fighcs-data-collecting">![https://file.army/i/B4Gsib4](https://404store.com/2020/09/05/2.2.Hand-Carry-Server-Data-Collecting-Illustration.jpg)

<figcaption>Figure 2.2 Illustration of using hand carry computer device to gather informations from other users inputed from their own computer device [[10]](#citefajar-hcs).</figcaption>

</figure>

For the simulation a MOOC readiness survey [[4]](#citeotgon). consist of 30 questionnaire items was simulated on 30 participants by a surveyor. The whole survey consists of three stages; preparation, responding, and post survey. On the preparation stage, for paper based method the surveyor creates the questionnaire items on word processing software then print them, while for hand carry server method the surveyor creates the questionnaire on web based survey application called Limesurvey CMS. On responding stage, for paper based method the surveyor hands out paper to each participants and collect them when they are finish responding, while for hand carry server method the surveyor tells the participants to connect their PDAs to the hand carry server and informs the URL of the local survey site, then waits until the participants submits their results to the hand carry server. Though results on [Figure 2.3](#figmanual-labor) showed no difference in time consumption for preparation and responding stage, paper based method tends to burden more on labors such as printing the questionnaires (time taken multiply greatly using old printers) and carrying heavy papers if there are alot of participants. On the other hand resource is the main issue for hand carry server which will be discussed on Limitation of Hand Carry Server section.

<figure id="figmanual-labor">![https://file.army/i/B4GsyBn](https://404store.com/2020/09/05/2.3.a.Paper-Based-Method-Process-Edited.jpg) ![https://file.army/i/B4GJ9l1](https://404store.com/2020/09/05/2.3.b.Hand-Carry-Server-Method-Process-Edited.jpg)

<figcaption>Figure 2.3 Time consumption of survey process from preparation, responding, to post survey [[10]](#citefajar-hcs). (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and response collection, and Post Survey consists of response insertion. (b) For hand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method is no need for post survey which the response already automatically inserted.</figcaption>

</figure>

However the advantage was shown on the post survey stage where usually the surveyors have to input the responses into the database, not to forget to also handle human errors by verifications such as double checking which seems to be the most stressing and tiring proses of paper based method. It is different from hand carry server method where the responses are automatically processed, literally no post survey stage. In fact results/statistics are instantly visible which no manual method can outfast. The participants can see the current statistics the moment they submitted the responses as exampled on [Figure 2.4](#figinstant-survey-result).

<figure id="figinstant-survey-result">![https://file.army/i/B4GJBm7](https://404store.com/2020/09/05/2.4.Sample-Survey-Result-in-Instancecopy.jpg)

<figcaption>Figure 2.4 Data in form of bar graph and pie chart was shown the instance the hand carry server received the responses [[10]](#citefajar-hcs). Only 4/30 item result shown here since it is too much to show all.</figcaption>

</figure>

The author's work mostly discussed the convenience of computerization but the important part is the mobility or portability [[10]](#citefajar-hcs). Back on Figure [Figure 2.2.](#fighcs-data-collecting), the hand carry server can be carried anywhere (a walking/moving server) which only needs a power supply of direct current (DC) 5V (volts) potential difference and 2A (amperes) electric current, usually a hand carry power bank is enough. On the simulation is also measured the current delivery was 0.6AH (ampere hour) in 39 minutes (whole duration of survey, see Figure [Figure 2.3](#figmanual-labor)) meaning with the powerbank's specification of 20000AH it will last 20 hours. In short the hand carry server is low power cost that can last longer during mobile.

#### 2.3.2 Synchronization in Severe Network Connection

Currently synchronization have to be to taken offline when there is no network connectivity whether they are full or incremental which will be discussed in next chapter. An administrator will go to network connected or directly to the updated server to retrieve the contents and store in a storage media such as compact disc (CD), and flash drive. Then travel back to the outdated server, insert the storage media and give the contents. There is a work by Ijtihadie et al. [[14]](#citeroyyana-email-sync) for differential update where it was sent through email then differentially update the contents. It should be possible to put the differentials into a storage media which then to be inserted into the outdated server to update the contents.

<figure id="figmoving-server">![https://file.army/i/B4GJ7Ps](https://404store.com/2020/09/05/2.5.Moving-Server.png)

<figcaption>Figure 2.5 Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing [[9]](#citehcs-sync).</figcaption>

</figure>

Another way is to move the servers to an area with connectivity, have it update, and then return it to its original location [[9]](#citehcs-sync). This was actually inspired by Ijtihadie et al. [[15]](#citeroyyana-offline-quiz) where the students downloads the quiz on their mobile devices, answers them offline at their homes, and later finds an Internet connection to synchronize (automatically upload their answers). This concept was applied to this thesis' work where the process happens to the hand carry server instead of the mobile device. It is illustrated on [Figure 2.5](#figmoving-server) with currently people carrying the servers. An example of implementation is on [Figure 2.6](#figimplementation-hcs). There are regions in Indonesia which does not have goot network connectivity rendering difficult to synchronize with other servers. If those servers are replaced with hand carry servers, then it can physically move to find network connectivity (it supports wired and wireless connection) to synchronize, and in the end return to its original location.

<figure id="figimplementation-hcs">![https://file.army/i/B4GJYZl](https://404store.com/2020/09/05/2.6.a.No-Network-Distributed-LMS.jpg) ![https://file.army/i/B4GJzFj](https://404store.com/2020/09/05/2.6.b.Moving-Server-DLMS.jpg)

<figcaption>Figure 2.6 Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.</figcaption>

</figure>

Within the distributed LMS, the servers can either be replaced with hand carry servers or leave them mounted and have hand carry servers as addition or support, meaning the hand carry servers will travel from servers to servers. It is temporary implementation when there are no network infrastructures built, since it is fast and simple to install, or it can serve as a purpose to cover network coverage holes where the hand carry server moves around these network uncovered area.

### 2.4 Limitation of Hand Carry Server

#### 2.4.1 Resource

With the compressed size and light weight of hand carry server, it has resource limitation. The resources responsible for servicing are mainly computer processing unit (CPU) and random access memory (RAM) (detailed specification can be seen back on Table [Table 2.2](#tableRP2-Specification)). As shown on [Figure 2.7](#figcpu-memory) the CPU and RAM are already exhausted when 30 participants attempts the survey [[10]](#citefajar-hcs). These measurement result alone may not show much meaning, but can be meaningful if stress testing is conducted as on next subsection.

<figure id="figcpu-memory">![https://file.army/i/B4GJ4Nk](https://404store.com/2020/09/05/2.7.a.Survey-Attempt-CPU-Usage.jpg) ![https://file.army/i/B4GJKKv](https://404store.com/2020/09/05/2.7.b.Survey-Attempt-Memory-Usage.jpg)

<figcaption>Figure 2.7 Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage [[10]](#citefajar-hcs).</figcaption>

</figure>

#### 2.4.2 Stress Testing

Experience users may completely understand by just showing the resource measurement results, but others will have to feel, rub, and take few trials to see how far this hand carry server is actually capable. For that reason, stress testing was proposed and conducted. Though it was tested for survey purpose [[10]](#citefajar-hcs), but the method can be applicable for other applications. For the stress testing, a web stress testing software application called Funkload was used. Different numbers of virtual users incrementally 10 up to 100 was generated and attempts survey on the hand carry server simultaneously Illustrated on [Figure 2.8](#figfunkload). This time only response time was measured.

<figure id="figfunkload">![https://file.army/i/B4GJRQH](https://404store.com/2020/09/05/2.8.Stress-Testing-Illustration.jpg)

<figcaption>Figure 2.8 Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server (images from openclipart [[1]](#citekelly)).</figcaption>

</figure>

Response time can be refered to service time, in this case how much users takes to load questionnaire items and to submit responses. The service time can also be called queuing time where there are users who takes shorter time and users who takes longer time as on [Figure 2.9](figresponse-time) are shown the average response time and the maximum response time (the user on the last queue). It shows that the response time increases to the number users and also increases when the questionnaire content size increases because it will affect on the number of questionnaire items to be retrieved and how much responses that have to be submitted. Through this results, the surveryor can decide the target average response time and tolerable maximum response time. Then the number of users and questionnaire items simultaneously can be determined. Though the result also showed that the hand carry server have reached its limit above 85 concurrent users and 30 questionnaire items which the service stops working and must be restarted.

<figure id="figresponse-time">![https://file.army/i/B4GJebf](https://404store.com/2020/09/05/2.9.a.pages_average.png) ![https://file.army/i/B4GJI7I](https://404store.com/2020/09/05/2.9.b.pages_max.jpg)

<figcaption>Figure 2.9 Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items [[10]](#citefajar-hcs), (a) average response time while (b) maximum response time.</figcaption>

</figure>

## 3 Distributed LMS Synchronization

### 3.1 Learning Content Sharing

Before going to the main discussion of synchronization, it is better to discuss about learning content sharing. Sharing learning contents became popular ever since MOOC was introduced. A course "Moodle on MOOC" conducted periodically teaches students how to use Moodle and advised them to share their finished courses [[16]](#citecooch-sharing). Making a well designed and written learning contents for online course from a scratch may consume a lot of time, learning content sharing helps other instructors to quickly develop their own. Some specialized courses may only be written by experts. Learning content sharing reduces the burden of the teacher to create learning contents for online courses, and the more the existence of online courses can give more students from all over the world a better chance to access a quality education.

Distributed LMS is also another form of learning content sharing where the learning contents are shared to other servers on other regions. The typical way of learning content sharing is dump, copy, then upload. Most LMS have a feature to export their course contents into an archive and allows to import the contents to another server which have the LMS. The technique to export and import varies to systems but the concept is to synchronize the directory structure and database. There is a very high demand for this feature that it is still improving until now, for example being able to export user defined part of the contents is being developed. Other LMS that currently does not have this feature will be developed as it is stated on its developer forum.

### 3.2 Full Synchronization versus Incremental Synchronization

#### 3.2.1 Full Synchronization

Synchronization can be defined as similar movements between two or more systems which are temporally aligned, though on this case is the action of causing a set of data or files to remain identical in more than one location. The data or files are learning contents and private data, although private data are usually excluded. The term full synchronization defined on this thesis is the distribution of the whole data consists of new data and existed data. Synchronization occurs when new data are present to update the data of other servers. Illustrated on [Figure 3.1](#figfull-sync) the full synchronization includes existed or duplicated data which deems to be redundant that only adds unnecessary burden to the network. However full synchronization are more reliable because each full data are available.

<figure id="figfull-sync">![https://file.army/i/B4GJSlV](https://404store.com/2020/09/05/3.1.Full-Synchronization-Illustration.png)

<figcaption>Figure 3.1 Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared. Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is a duplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.</figcaption>

</figure>

#### 3.2.2 Incremental Synchronization

Ideally the duplicate data are to be filtered out and not to be distributed for highest efficiency. The conventional way is the recording approach where the changes done by the authors of the course are recorded. The changes can only and either be additions or deletions of certain locations. This actions are recorded and sent to other servers and have them execute the actions to achieve identical learning contents, which is similar to push mechanism where the main server forces updates on other servers. Accurate changes can be obtained but unrecoverable from error because the process is unrepeatable. Another issue is its restriction that no modification must take place on the learning contents of other servers, meaning the slightest change, corruption, or mutation can render the servers unsynchronizable.

Instead of the recording approach, the calculating approach is more popular due to its repeatable process and less restriction. The approach is to calculate the difference between the new and outdated learning contents. Therefore the process of the approach can be done repeatedly and some changes, corruption, or mutation on either learning contents does not prevent the synchronization. One of the origins of the calculating approach is file differential algorithm developed in Bell Laboratory [[17]](#citediff-bell-lab) which today known as diff utility in Unix. The detailed algorithm may seem complicated, though in summary consists of extracting the common longest subsequence of characters in each line between the two files (more like finding the similarity between two files), afterwards the rest of the characters on the old file will be deleted while on the new file the characters will be added to the common longest subsequence on the correct location, resulting in update of the old file. For large files hashings were involved.

Applying the file differential algorithm on the synchronization will make it differential synchronization. Unlike full synchronization, differential synchronization is the distribution of only the new data. The repetition of differential synchronization will make it incremental synchronization which is the repetitive distribution of only the new data. In sense the synchronization will be incremental because only the updates are sent every time. Another way to put it, increment means to add up where the learning contents adds up to every differential updates. Ultimately duplicate data or learning contents will be filtered out, reducing unnecessary burdens on the network illustrated on [Figure 3.2](figinc-sync).

<figure id="figinc-sync">![https://file.army/i/B4GaJso](https://404store.com/2020/09/05/3.2.Incremental-Synchronization-Illustration.png)

<figcaption>Figure 3.2 Incremental synchronization different from Figure [Figure 3.1](#figfull-sync) where the duplicate data are filtered.</figcaption>

</figure>

#### 3.2.3 Dynamic Content Synchronization on Moodle

The idea of implementing differential synchronization on distributed LMS started by Usagawa et al. [[18]](#citeidea-moodle-sync), which then continued by Ijtihadie et al. [[11]](#citeroyyana-dynamic-content-synchronization) [[19]](#citesecond-moodle-sync). These works still limits themselves to distributed Moodle system because it solely focuses on Moodle structure. When writing the software application, it is necessary to identify the database tables and directories of the learning contents. The incremental synchronization between two Moodle systems was described as dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) where the learning contents are constantly being updated. The dynamic synchronization is unidirectional or simplex in terms of communication model where it is fixed that one Moodle system acts as a master to distribute the updates and another one acts as a slave to receive the updates.

File differential algorithm was applied to maintain consistencies on both master's and slave's database tables and directories. The database tables and directories are assigned with hashes [[11]](#citeroyyana-dynamic-content-synchronization). Information of those hashes are exchanged between master and slave, identical hashes meaning thoses contents should not be change, and on the other hand mismatch hashes meaning those contents should be updated. Though Ijtihadie et al. [[11]](#citeroyyana-dynamic-content-synchronization) developed their own algorithm stated specifically for synchronization of learning contents between LMS, it is not much different from existing remote differential file synchronization algorithm such as [[20]](#citersync).

The moodle tables on the database is converted into synchronization tables as on [Figure 3.3](#figmoodle-diff-sync) through means of hashing. Only contents related to the selected course was converted and sorted on the course packer. Privacy was highly regarded, thus private data was filtered. The purpose is to find inconsistencies on the database between master and slave. Stated on the previous paragraph, hashes are oftenly used to test inconsistencies, if the hashes are different then they are inconsistent and vice versa. When inconsistencies on a certain table is found, the master sends its table to the slave replacing the slave's table which in the end will become consistent. In the end the synchronization tables are reverted back into Moodle tables. In summary dynamic content synchronization only takes place on parts of the database and directories that changes or inconsistent.

<figure id="figmoodle-diff-sync">![https://file.army/i/B4GJZmp](https://404store.com/2020/09/05/3.3.Dynamic-Content-Synchronization-Model.jpg)

<figcaption>Figure 3.3 Dynamic content synchronization model for Moodle [[11]](#citeroyyana-dynamic-content-synchronization). The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slave’s synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.</figcaption>

</figure>

### 3.3 Dump and Upload Based Synchronization

The dynamic content synchronization [[11]](#citeroyyana-dynamic-content-synchronization) software application was written solely for Moodle, and back then was written for Moodle version 1.9\. Later on Moodle rises to version 2.0, with major changes on database and directory structure. The software application have to be changed to suit the new Moodle version [[19]](#citesecond-moodle-sync), but the concept of synchronization remains the same. Moodle continues to develop, until now it is version 3.3, though sadly the dynamic content synchronization software application was discontinued on Moodle version 2.0\. The author originally tried to continue the software application but found a better approach named dump and upload based synchronization model [[12]](#citefajar-du-sync) on [Figure 3.4](#figdump-upload-sync). Unlike dynamic content synchronization, the dump and upload based synchronization is bidirectional but limited to half duplex communication model. In other words each can play as both master and slave, but only one at time. For example, on first synchronization one server can play as the master while others as slaves, and on second synchronization the master can switch into a slave and one of the slaves can switch into a master. Another thing is that the synchronization uses pull mechanism where the slave checks and requests updates to the master. It is considered more flexible than the push mechanism where the master forcefully update the slaves.

<figure id="figdump-upload-sync">![https://file.army/i/B4GJuUK](https://404store.com/2020/09/05/3.4.Course-Content-Synchronization-Model.jpg)

<figcaption>Figure 3.4 The dump and upload based synchronization model. Both servers' LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives. After synchronization the archives will be imported/uploaded into the servers' LMS, updating the learning contents.</figcaption>

</figure>

#### 3.3.1 Export and Import Feature

While dynamic content synchronization handles everything from a scratch, the dump and upload based synchronization utilizes the export and import feature that exists in most LMS. It is a feature mainly to export and import learning contents categorized into courses which can also be called course contents. The export feature outputs the course content's database tables and directories into a structured format. Then the import feature reads the format and inserts the data into the correct database tables and directories. Formats may differ from one LMS to another but the method is most likely the same.

Other features are export and import of course lists, user accounts, and probably more others but not known and used on this thesis. One of the best export and import is on Moodle where further splitting is possible on the course contents while on other LMS have to dump the whole course. This way people can choose to get only the contents they are interested in. This opens a path for partial synchronization where only specific contents or parts of the course are synchronized. Another advantage is the option to choose to include, not to include private data, or include private data but anonymized, in other words it supports privacy. In summary Moodle's export and import feature's advantage compared to other LMSs' is the ability to secure private data, and split course contents into blocks or micros screenshot on [Figure 3.5](#figmoodle-export-import). This thesis highly recommends other LMSs' export and import feature to follow Moodle's footsteps.

<figure id="figmoodle-export-import">![https://file.army/i/B4GJ6ZD](https://404store.com/2020/09/05/3.5.a.Moodle-Backup-Option.jpg) ![https://file.army/i/B4GJEdQ](https://404store.com/2020/09/05/3.5.b.Course-Design-4.jpg)

<figcaption>Figure 3.5 Screenshot of Moodle's export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.</figcaption>

</figure>

#### 3.3.2 Rsync a Blocked Based Remote Differential Algorithm

With the pervious subsection explained that course contents can be dumped using the export and import feature, the next step is performing remote differential synchronization between the two archives. The author chose not to develop an algorithm but used an existing algorithm called rsync [[20]](#citersync). The author also did not write a program to perform rsync but use the already existing program based on the rsync library (librsync). What the author did is just implementing this program to work on hyper text transfer protocol (HTTP) or on web browsers since LMS are usually web based (rsync is mostly used on secure shell (SSH)). There are three general steps of performing rsync algorithm between the two archives located on different servers as on [Figure 3.6](#figrsync-ill-1), and details are as follow:

<figure id="figrsync-ill-1">![https://file.army/i/B4GJOVY](https://404store.com/2020/09/05/3.6.Rsync-on-Course-Content-Archive.jpg)

<figcaption>Figure 3.6 First step is to generate a signature of archive on slave and send to master. The signature of is used on master's archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and produce an archive identical to the one on master.</figcaption>

</figure>

1.  The archive to be updated is divided into blocks with each blocks calculated and assigned two types of hash or checksums. The checksums are weak rolling checksum for example Adler-32 and strong checksum for example Black2, and MD5\. The checksums are bundled into a signature and sent to the other server. The user can determine the size of divided blocks which can affect the accuracy of finding difference. [Figure 3.7](#figrsync-ill-2) illustrates this step.

    <figure id="figrsync-ill-2">![https://file.army/i/B4GJGKa](https://404store.com/2020/09/05/3.7.Rsync-Ill-Detail-1.jpg)

    <figcaption>Figure 3.7 Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, and three sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.</figcaption>

    </figure>

2.  The signature is then used on the latest version archive on the server with latest version of archive. First a weak checksum is checked in rolling block. Second if a block's weak checksum is identical then comparison of the two strong checksums is done to verify whether the block is really identical or not. For blocks with identical checksums, their locations are recorded, while other blocks are regarded as new blocks which should be sent to the server with outdated archive. Checksums on signature with no matching blocks found on archive with latest verstion, the blocks of the outdated archive that generated this checksum will be regarded as deleted. Based on all of these information a delta/patch is generated containing instructions to alter the blocks of the outdated archive and new blocks to be inserted there. This step is illustrated on [Figure 3.8](#figrsync-ill-3-4).

    <figure id="figrsync-ill-3-4">![https://file.army/i/B4GJLXL](https://404store.com/2020/09/05/3.8.a.Rsync-Ill-Detail-2.jpg) ![https://file.army/i/B4GJhn9](https://404store.com/2020/09/05/3.8.b.Rsync-Ill-Detail-3.jpg)

    <figcaption>Figure 3.8 Illustration of identifying difference. (a) The three sets of checksums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append new blocks, which will be send and applied on slave.</figcaption>

    </figure>

3.  The delta/patch is sent to the server with outdated archive, applying it to its archive, constructing identical archive to the latest version one as on [Figure 3.9](#figrsync-ill-5).

    <figure id="figrsync-ill-5">![https://file.army/i/B4GJM7o](https://404store.com/2020/09/05/3.9.Rsync-Ill-Detail-4.jpg)

    <figcaption>Figure 3.9 After the delta/patch is applied, slave will have identical archive to master.</figcaption>

    </figure>

Lastly on this subsection, for implementation should be targeted for regions with severe network connectivity. Although transmitting only the differential than the whole contents reduces the transmission cost, it is not the only answer regarding to network stability issue. Network stability issue can be a long cut off in the middle of transmission which forces to restart the synchronization process. Another one is short cut offs which makes the transmission discrete but unnecessary to restart, however frequent short cut offs can corrupt the transmission data. To solve this unstable network problem, techniques implemented in most download manager software applications should also be implemented on the synchronization's transmission. To support continueable download after the transmission is completely cutoff, is to split the transmission data into pieces. During cutoff, the transmission can be continued by detecting how much pieces the client has, then request and retrieve remaining pieces from server. To prevent data corruption checksums can be used to verify the data's integrity, on this case are the pieces integrity. Finally [Figure 3.6](#figrsync-ill-1) is modified to [Figure 3.10](#figrsync-ill-6).

<figure id="figrsync-ill-6">![https://file.army/i/B4GJQGE](https://404store.com/2020/09/05/3.10.Rsync-Ill-Detail-5.jpg)

<figcaption>Figure 3.10 Implementation of some download manager techniques into rsync algorithm based synchronization. Delta is split into pieces and retrieved by the client. The integrity of the pieces are checked using cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.</figcaption>

</figure>

#### 3.3.3 Experiment Result and Evaluation

With dump and upload based synchronization prototype created, an experiment was conducted. The experiments took place on many LMS with the latest version, which were Moodle 3.3, Atutor 2.2.2, Chamilo 1.11.4, Dokeos 3.0, Efront 3.6.15.5, and Illias 5.2\. The purpose was to compare the network traffic between full synchronization and incremental synchronization, and percentage of duplicate data eliminated. The experiment used the authors own original course contents which mainly consists three topics are computer programming, computer network, and penetration testing, with each consists of materials, discussion forums, assignments, and quizzes. A snapshot of one of the topics was provided on Figure [Figure 3.3](#figmoodle-diff-sync).

There are four scenarios. First is full synchronization, equivalent to transmitting the whole course content or full download from the client side. Second is large content incremental synchronization is when the client only have one of the three topics (example for Moodle will update from 16.5MB to 30.5MB). Third is medium content incremental synchronization is when the client already have two of the three topics (example for Moodle will update from 28.4MB to 30.5MB), and the client wants to synchronize to the server in order to have all three of the topics (update). Fourth is no revision meaning incremental synchronizing while there is no update, to test whether there are bugs in the software application which the desired result should be almost no network traffic generated. On [Table 3.1](#tablearchive-size) shows the course content data size in bytes when it has one, two, or three of the topics. The data sizes varies depending on the LMS, but the contents such as materials, discussion forums, assignments, and quizzes are almost exactly similar.

<table id="tablearchive-size"><caption>Table 3.1 Size of course contents of the same course on different LMS, showing sizes when in contains one, two, and three topics.</caption>

<thead>

<tr>

<th>LMS</th>

<th>1 Topic</th>

<th>2 Topics</th>

<th>3 Topics</th>

</tr>

</thead>

<tbody>

<tr>

<td>Moodle</td>

<td>16.5 MB</td>

<td>28.4 MB</td>

<td>30.5 MB</td>

</tr>

<tr>

<td>Atutor</td>

<td>336.5 kB</td>

<td>11.7 MB</td>

<td>13.7 MB</td>

</tr>

<tr>

<td>Chamilo</td>

<td>8.5 MB</td>

<td>20 MB</td>

<td>22 MB</td>

</tr>

<tr>

<td>Dokeos</td>

<td>27.4 MB</td>

<td>39 MB</td>

<td>41 MB</td>

</tr>

<tr>

<td>Efront</td>

<td>16.5 MB</td>

<td>28 MB</td>

<td>30 MB</td>

</tr>

<tr>

<td>Illias</td>

<td>439.3 kB</td>

<td>22.8 MB</td>

<td>26.6 MB</td>

</tr>

</tbody>

</table>

The experiment used rdiff utilities to perform rsync algorithm between latest and outdated as the incremental synchronization. Before proceeding it is wise to examine the affect of block size which on previous subsection states that users are free to define the size. The test was perform on Moodle's archives from Table [Table 3.1](#tablearchive-size) between an archive which has one topic of 16.5MB and archive which has 3 topics of 30.5MB. The result is on [Figure 3.11](#figblocksize-vs-sig-del) showing the relationship between block size, signature, and delta size, which affects total transmission cost by summing signature and delta. Larger block size meaning less blocks where less checksum sets are generated, thus smaller signature size. However this means less accurate checking and less likely to detect similar blocks which will contribute to the size of the delta. The [Figure 3.11](#figblocksize-vs-sig-del) showed the delta had reached the full size of the targeted archive, meaning that it missed detecting similar blocks, thus the whole archive is treated as totally different archive. The incremental synchronization will be more heavier than full synchronization. Reversely smaller block size provides more accurate detection which guarantee to reduce the size of the delta. However this means more blocks and more checksum sets are to be bundled into the signature, and looking at the Figure it can grow very large that can cost a lot more transmission cost then full synchronization itself. In conclusion choosing the right blocksize is crucial to get less sum of signature and delta that contributes to the transmission cost, on this case 512 bytes of block size is optimum.

<figure id="figblocksize-vs-sig-del">![https://file.army/i/B4GJXmU](https://404store.com/2020/09/05/3.11.Block-Size-vs-Signature-Delta.jpg)

<figcaption>Figure 3.11 Test result showing the relationship between block size, signature, and delta. When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.</figcaption>

</figure>

With the relationship of blocksize to signature and delta discussed, it is still not ready to proceed with the experiment. With the difference between the two archive's size, latest is 30.5MB and outdated is 16.5MB ideally the delta should be 14MB but still strayed far to as large as 20MB. It is found that the problem is because the rsync algorithm (rdiff) was executed directly on the archive which is still compressed. The solution is to uncompress the archive before hand and execute rdiff recursively of every available contents which makes the author to turn on more modified utility called rdiffdir.

The experiment succeeded and got results of [Figure 3.12](#figexperiment-result). [Figure 3.12](#figexperiment-result) already includes uplink and downlink, for incremental synchronization uplink is influenced by the size of the signature and downlink is influenced by the size of the delta (see [Figure 3.6](#figrsync-ill-1)). Detailed data are also provided on [Table 3.2](#tabledetail-experiment). However the purpose of both [Figure 3.12](#figexperiment-result) and [Table 3.2](#tabledetail-experiment) is only to show that incremental synchronization is better than full synchronization which in this case is lower network traffic, and to show that the incremental synchronization is able to detect when there are no updates in this case almost no network traffic, while the main objective is to eliminate duplicate data during transmission.

<figure id="figexperiment-result">![https://file.army/i/B4GJAU3](https://404store.com/2020/09/05/3.12.Incremental-Synchronization-Network-Traffic-Result.jpg)

<figcaption>Figure 3.12 Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.</figcaption>

</figure>

<table id="tabledetail-experiment"><caption>Table 3.2 Detail experiment result of Figure [Figure 3.12](#figexperiment-result) showing size of signature and delta during incremental synchronization scenarios on each LMSs.</caption>

<thead>

<tr>

<th></th>

<th colspan="3">Signature in Mega Bytes</th>

<th colspan="3">Delta in Mega Bytes</th>

</tr>

</thead>

<tbody>

<tr>

<td>LMS</td>

<td>Large</td>

<td>Medium</td>

<td>None</td>

<td>Large</td>

<td>Medium</td>

<td>None</td>

</tr>

<tr>

<td>Moodle</td>

<td>0.5427</td>

<td>0.9668</td>

<td>1.1621</td>

<td>15.7489</td>

<td>2.9688</td>

<td>0.7227</td>

</tr>

<tr>

<td>Atutor</td>

<td>0.0292</td>

<td>0.3125</td>

<td>0.3711</td>

<td>13.5254</td>

<td>2.0899</td>

<td>0.0684</td>

</tr>

<tr>

<td>Chamilo</td>

<td>0.215</td>

<td>0.5427</td>

<td>0.6144</td>

<td>14.4282</td>

<td>2.6214</td>

<td>0.2048</td>

</tr>

<tr>

<td>Dokeos</td>

<td>1.307</td>

<td>1.6282</td>

<td>1.6794</td>

<td>15.0938</td>

<td>3.6535</td>

<td>0.9626</td>

</tr>

<tr>

<td>Efront</td>

<td>0.1024</td>

<td>0.1741</td>

<td>0.1946</td>

<td>13.6499</td>

<td>2.1402</td>

<td>0.0102</td>

</tr>

<tr>

<td>Illias</td>

<td>0.0025</td>

<td>0.1339</td>

<td>0.1559</td>

<td>26.2226</td>

<td>4.0107</td>

<td>0.0001</td>

</tr>

<tr>

<td>Average</td>

<td>0.3671</td>

<td>0.6264</td>

<td>0.6962</td>

<td>16.4431</td>

<td>2.9141</td>

<td>0.3281</td>

</tr>

</tbody>

</table>

The percentage of redundant data eliminated is shown on [Table 3.3](#tableduplicate-eliminated) for incremental synchronization scenarios. It is assumed that the ideal delta is the difference in data size between the latest and outdated archive. The duplicate data is the outdated archive itself or the latest archive substracted by the ideal delta, which is this much that had to be eliminated. The larger the experiment's delta size compared to the ideal delta, the worse the experiment's result. With these results the performance of the incremental synchronization can be evaluated by calculating the percentage of duplicated data eliminated which is the full latest archive substracted by experiment's delta size, next divided by duplicated data, and then converted to percentage. For large content synchronization there is one LMS Atutor which had a low result of 51.89 % due to size of generated archive itself (Table [Table 3.1](#tablearchive-size)) and drop the whole average to 85.30%. Other than Atutor and Illias the duplicate data eliminated percentage is above 89%. For the medium content synchronization a very high average duplicate data eliminated percentage is achieve which is 97.90%, meaning duplicate data are almost completely eliminated. Though these results are obtain strictly under optimal block size configuration (Figure [Figure 3.11](#figblocksize-vs-sig-del)) where the minimum network traffic consisted of uplink and downlink (affected by signature and delta size) is desired. There is no benefit of 100% duplicate data elimination if the uplink (signature size) is very large.

<table id="tableduplicate-eliminated"><caption>Table 3.3 Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.</caption>

<thead>

<tr>

<th colspan="2">In Mega Bytes</th>

<th colspan="3">Large Content Synchronization</th>

<th colspan="3">Medium Content Synchronization</th>

</tr>

</thead>

<tbody>

<tr>

<td>LMS</td>

<td>Full</td>

<td>Result</td>

<td>Ideal</td>

<td>Eliminated</td>

<td>Result</td>

<td>Ideal</td>

<td>Eliminated</td>

</tr>

<tr>

<td>Moodle</td>

<td>30.5</td>

<td>15.7389</td>

<td>14</td>

<td>89.46%</td>

<td>2.9688</td>

<td>2.1</td>

<td>96.94%</td>

</tr>

<tr>

<td>Atutor</td>

<td>13.7</td>

<td>13.5254</td>

<td>13.3635</td>

<td>51.89%</td>

<td>2.0899</td>

<td>2</td>

<td>99.23%</td>

</tr>

<tr>

<td>Chamilo</td>

<td>22</td>

<td>14.4282</td>

<td>13.5</td>

<td>89.08%</td>

<td>2.6214</td>

<td>2</td>

<td>96.89%</td>

</tr>

<tr>

<td>Dokeos</td>

<td>41</td>

<td>15.0938</td>

<td>13.6</td>

<td>95.55%</td>

<td>3.6535</td>

<td>2</td>

<td>95.76%</td>

</tr>

<tr>

<td>Efront</td>

<td>30</td>

<td>13.6499</td>

<td>13.5</td>

<td>99.09%</td>

<td>2.1402</td>

<td>2</td>

<td>99.50%</td>

</tr>

<tr>

<td>Illias</td>

<td>26.6</td>

<td>26.2226</td>

<td>26.1697</td>

<td>87.71%</td>

<td>4.0106</td>

<td>3.8</td>

<td>99.08%</td>

</tr>

<tr>

<td>Average</td>

<td>27.3</td>

<td>16.4431</td>

<td>15.6889</td>

<td>85.30%</td>

<td>2.9141</td>

<td>2.3167</td>

<td>97.90%</td>

</tr>

</tbody>

</table>

#### 3.3.4 Advantage of Dump and Upload Based Synchronization

With the dump and upload based incremental synchronization model successfully able to eliminate very large amount of duplicate data the advantage compared to the previous dynamic content synchronization can be discussed:

1.  Since the model utilizes existing utilities mainly the export and import feature in LMSs one software application can be compatible to all LMS and all of its versions as long as it has this feature. The reason is because the export and import feature is guaranteedly maintain by the LMSs' developers, unlike dynamic content sychronization software application, there is no need to worry about structure changes on LMS. The advantage is actually on the developer side, when writing dynamic content synchronization software application the writer needs to coordinate the database and directories while for dump and upload based synchronziation it is already taken care of by the LMSs' developers.
2.  Other benefits can also be obtained from the export and import feature however relative to the LMS. For example on Moodle it has the capability to choose whether to include private data or not, meaning for synchronization it can have a flexible privacy option. While for other LMS private data is filtered out which means no other options other than retaining the privacy for synchronization. Another example also on Moodle it is able split a course into smaller blocks of learning contents and able to dump specific learning contents (not all). The synchronization software application can be tuned for partial synchronization, meaning other teachers can get only parts that they are interested in. Unfortunately this is available only on Moodle, other LMS have to dump the whole course contents.
3.  Since the method is dumping, it can easily be tuned for bidirectional synchronization, unlike dynamic content synchronization which is unidirectional. The incremental synchronization uses the pull concept where the requesting server only asked the difference from targeted server, while push concept is usually unidirectional where the master forcefully updates the slaves. Although dynamic content synchronization is claimed to be unidirectional, the author sees that it is possible to modify the software application to bidirectional because the differential synchronization method is general, however it is uknown whether it will be as easy to modify as the dump and upload base synchronization.

## 4 Conclusion and Future Work

### 4.1 Conclusion

Portable and synchronized distributed LMS was introduced to keep the contents up to date in environment of severe network connectivity. By replacing the servers with hand carry servers, the servers in severed network regions were able to move to find network connectivity for synchronization. The hand carry server was proved to be very portable because of its very small size and very light weight. The power consumption is very low that a power bank used on smart phone is enough to run the hand carry server for almost a whole day. Though very convenient however it has resource limitations mainly on CPU and memory, which limits the number of concurrent users. Still, the problem of unable to perform synchronization in no network connectivity area is solved.

The Incremental synchronization technique was beneficial for synchronization in distributed LMS, where it eliminates very large amount of duplicate data . Though in the past incremental synchronization was already proposed to be implemented in distributed LMS, this thesis provides a better approach which is dump and upload based synchronization. The advantages are that it is compatible to most LMSs and most of their versions, easily tuneable for bidirectional synchronization, and because it utilizes LMS features it can be tuned for example to configure privacy settings, and to perform partial synchronization.

### 4.2 Future Work

All of the experiment are done in the lab, and it is better to conduct real implementation in the future especially regarding the hand carry servers. A possible real implementation is to have drones carrying the hand carry servers. Performance issue is still a problem with hand carry servers that demands for enhancing techniques like integrating field programmable gate array (FPGA). For incremental synchronization it was discussed only the network issue but not yet resource such as CPU and memory. Although the synchronization on this thesis is bidirectional, distributed revision control system is needed to be implemented for larger collaborations. The distributed LMS here is a replicated system, but there is a better, more flexible trend to use especially for content sharing which is message oriented middleware (MOM) system that in the future is very interesting to be implemented.

## Acknowledgement

I would like to give my outmost gratitude to the all mighty that created me and this world for his oportunity and permission to walk this path as a scholar and for all his hidden guidances.

The first person I would like to thank is my main supervisor Prof. Tsuyoshi Usagawa for giving me this topic, also to Dr. Royyana who was researching on this topic before me, and their countless wise advices for perfecting this research. The professor is also the one who gave me this oportunity to enroll in this Master's program in Graduate School of Science and Technology, Kumamoto University. It was also through his recommendation that I received the Ministry of Education, Culture, Sports, Science and Technology (MEXT) scholarship from Japan. Not to forget his invitation to join his laboratory, the facilities, and comfort that he had provided. Also, I would like to thank all the oportunities that he had given me to join many conferences such as in Tokyo, Myanmmar, and Hongkong.

Then I would like to thank the Japanese government for giving me this MEXT scholarship that I never have to worry about financial. Instead I can focus on my studies, research, planning my goals for the future, and helping other people. I also would like to thank my other supervisors Prof. Kenichi Sugitani and Prof. Kohichi Ogata for evaluating my research and my thesis.

Next I would like to thank my parents, family and my previous University Udayana University, for not only raising and allowing me, but also pushed me to continue my studies. I would to thank my project team Hendarmawan and Muhammad Bagus Andra that our work about hand carry servers contributes in forming this thesis. My project team also my friends in laboratory Alvin Fungai, Elphas Lisalitsa, Irwansyah, Raphael Masson, and Chen Zheng Yang who were mostly on my side and even contributes to some degree on all my research. Like my friends in previous University whom now walk our separate ways, often spent the night together in laboratory, are friends whom I can trust with my life.

I would to like thank the Indonesia Community, Japanese friends, and other international friends who helped me with life here for example finding an apartment for me, but mostly their friendliness. Lastly to all others that helped me whom I cannot mention one by one, whether the known or the uknown, and whether the seen and the unseen. To all these people, I hope we can continue to work together in the future.

## Reference

1.  M. Kelly, “openclipart-libreoffice,” (2017), [computer software] Available: [http://www.openclipart.org](http://www.openclipart.org). [Accessed 27 June 2017].
2.  S. Paturusi, Y. Chisaki, and T. Usagawa, “Assessing lecturers and students readiness for e-learning: A preliminary study at national university in north sulawesi indonesia,”GSTF Journal on Education (JEd), vol. 2, no. 2, pp. 18, (2015), doi: [10.5176/2345-7163_2.2.50](https://doi.org/10.5176/2345-7163_2.2.50)
3.  Monmon. T, Thanda. W, May. Z. O, and T. Usagawa, “Students E-readiness for E-learning at Two Major Technological Universities in Myanmar,” In Seventh International Conference on Science and Engineering, pp. 299-303, (2016), Yangon, Myanmar.
4.  O. Sukhbaatar, L. Choimaa, and T. Usagawa, “Evaluation of Students’ e-Learning Readiness in National University of Mongolia, ” Educational Technology (ET) Technical Report on Colloborative Support, etc., pp. 37-40 (2017). Soka University:Institute of Electronics, Information and Communication Engineers (IEICE).
5.  E. Randall, “Mongolian Teen Aces an MIT Online Course, Then Gets Into MIT,” [online] Available: [http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit](http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit). [Accessed 27 June 2017].
6.  N. S. A. M. Kusumo, F. B. Kurniawan, and N. I. Putri, “Learning obstacle faced by indonesian students,” in The Eighth International Conference on eLearning for Knowledge-Based Society, Thailand, Feb. (2012), [online] Available: [http://elearningap.com/eLAP2011/Proceedings/paper25.pdf](http://elearningap.com/eLAP2011/Proceedings/paper25.pdf). [Accessed 27 June 2017].
7.  Miniwatts Marketing Group, “Internet World Stats Usage and Population Statistics,” [online] Available: [http://www.internetworldstats.com/stats.htm](http://www.internetworldstats.com/stats.htm). [Accessed 27 June 2017].
8.  Q. Li, R. W. H. Lau, T. K. Shih, and F. W. B. Li, “Technology supports fordistributed and collaborative learning over the internet,” ACM Transactions onInternet Technology (TOIT) Journal, vol. 8, issue 2, no. 5, pp, (2008).
9.  F. Purnama, and T. Usagawa, “Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi”,Educational Technology (ET)Technical Report on Colloborative Support, etc., pp. 21-24 (2017). Soka University: Institute of Electronics, Information and Communication Engineers (IEICE), doi: [10.1145/1323651.1323656](https://doi.org/10.1145/1323651.1323656).
10.  F. Purnama, M. Andra, Hendarmawan, T. Usagawa, and M. Iida, “Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi”,International Mobile Learning Festival (IMLF), pp. 18-32 (2017), [online] Available: [http://imlf.mobi/publications/IMLF2017Proceedings.pdf](http://imlf.mobi/publications/IMLF2017Proceedings.pdf). [Accessed 27 June 2017].
11.  R. M. Ijtihadie, B. C. Hidayanto, A. Affandi, Y. Chisaki, and T. Usagawa, “Dynamic content synchronization between learning management systems over limited bandwidth network,” Human-centric Computing and Information Sciences, vol. 2,no. 1, pp. 117, (2012), doi: [10.1186/2192-1962-2-17](https://doi.org/10.1186/2192-1962-2-17)
12.  F. Purnama, T. Usagawa, R. Ijtihadie, and Linawati, “Rsync and Rdiff imple-mentation on Moodle’s backup and restore feature for course synchronization overthe network”,IEEE Region 10 Symposium (TENSYMP), pp. 24-29 (2016). Bali:IEEE, doi: [10.1109/TENCONSpring.2016.7519372](https://doi.org/10.1109/TENCONSpring.2016.7519372).
13.  The World Bank Group. Mobile cellular subscriptions (per 100 people). (2017,March 06). Retrieved from [http://data.worldbank.org/indicator/IT.CEL.SETS.P2](http://data.worldbank.org/indicator/IT.CEL.SETS.P2).
14.  R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “E-mail Based Updates Delivery in Unidirectional Content Synchronization among Learning Management Systems Over Limited Bandwidth Environment, ”IEEE Re-gion 10 Conference (TENCON), pp. 211215, (2011), doi: [10.1109/TENCON.2011.6129094](https://doi.org/10.1109/TENCON.2011.6129094).
15.  R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “Offline web application and quiz synchronization for e-learning activity for mobile browser” 2010 IEEE Region 10 Conference (TENCON), pp. 2402-2405, (2010), doi: [10.1109/TENCON.2010.5685899](https://doi.org/10.1109/TENCON.2010.5685899).
16.  M. Cooch, H. Foster, and E. Costello, “Our mooc with moodle," Position papers for European cooperation on MOOCs, EADTU, (2015).
17.  J. W. Hunt, and M. D. McIlroy, “An algorithm for differential file comparison,” Computing Science Technical Report, (1976). New Jersey: Bell Laboratories, [online] Available: [https://www.cs.dartmouth.edu/~doug/diff.pdf](https://www.cs.dartmouth.edu/~doug/diff.pdf). [Accessed 27 June 2017].
18.  T. Usagawa, A. Affandi, B. C. Hidayanto, M. Rumbayan, T. Ishimura, and Y.Chisaki, “Dynamic synchronization of learning contents among distributed moodle systems,” JSET, pp 1011-1012, (2009).
19.  T. Usagawa, M. Yamaguchi, Y. Chisaki, R. M. Ijtihadie, and A. Affandi, “Dynamic synchronization of learning contents of distributed learning management systems over band limited network contents sharing between distributed moodle 2.0 series," in International Conference on Information Technology Based Higher Education and Training (ITHET), (2013). Antalya, doi: [10.1109/ITHET.2013.6671058](https://doi.org/10.1109/ITHET.2013.6671058)
20.  A. Tridgell and P. Mackerras, “The rsync algorithm," The Australian National University, Canberra ACT 0200, Australia, Tech. Rep. TR-CS-96-05, (1996), [online] Available: [https://openresearch-repository.anu.edu.au/handle/1885/40765](https://openresearch-repository.anu.edu.au/handle/1885/40765). [Accessed 27 June 2017].

<div class="video-container">
	<iframe src="lbry-iframe" src="https://lbry.tv/$/embed/portable-and-synchronized-distributed/fb98507ac46c4550d0e033cbc3ed297a1980e1ef" allowfullscreen></iframe>
</div>

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/portable-and-synchronized-distributed-learning-management-sy-xyvdwoz?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/portable-and-synchronized-distributed-learning-management-sy-xyvdwoz?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama](https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama)
*   [https://medium.com/@0fajarpurnama0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-e8064ae67225](https://medium.com/@0fajarpurnama0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-e8064ae67225)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/master-thesis-fajar-purnama](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/master-thesis-fajar-purnama)
*   [https://0fajarpurnama0.tumblr.com/post/628353130681237504/portable-and-synchronized-distributed-learning](https://0fajarpurnama0.tumblr.com/post/628353130681237504/portable-and-synchronized-distributed-learning)
*   [https://0darkking0.blogspot.com/2020/09/portable-and-synchronized-distributed.html](https://0darkking0.blogspot.com/2020/09/portable-and-synchronized-distributed.html)
*   [https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama)
*   [https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/65-portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/65-portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions)
*   [https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions](http://0fajarpurnama0.weebly.com/blog/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions)
