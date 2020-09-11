---
layout: post
title: Portable and Synchronized Distributed Learning Management System in Severe Networked Regions
categories: masters
tags: [technology, e-learning, portable, synchronization, distributed system, portable, masters, thesis]
featuredimage: https://404store.com/2020/09/05/2.6.b.Moving-Server-DLMS.jpg
---

<style>
    ol.tbc {
  counter-reset: item
    }
    ol.tbc li {
      display: block
    }
    ol.tbc li:before {
      content: counters(item, ".") " ";
      counter-increment: item
    }
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
</style>
<iframe src="//www.slideshare.net/slideshow/embed_code/key/pM9kdR6fWTT6sE" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>
<div style="margin-bottom:5px">
	<strong>
		<a href="//www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions" title="Portable and Synchronized Distributed Learning Management System in Severe Networked Regions" target="_blank">Portable and Synchronized Distributed Learning Management System in Severe Networked Regions</a>
	</strong> from 
	<strong>
		<a href="https://www.slideshare.net/0DarkKing0" target="_blank">Fajar Purnama</a>
	</strong>
</div>
<h2 id="author">Author</h2>
<a href="https://0fajarpurnama0.github.io">Fajar Purnama</a>
<h2 id="note">Note</h2>
<ul>
	<li>This is a thesis submitted to
		
		<em>Graduate School of Science and Technology, Computer Science and Electrical Engineering in Kumamoto University, Japan, on September 2017 in partial fulfillment of the requirements for the degree of Master of Engineering</em> but was not published thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I claimed full responsibility detached from Kumamoto University. Therefore, I hereby declare to license it as 
		
		<em>customized 
			
			<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a>
		</em> where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
	
	</li>
	<li>The presentation is available at 
		
		<a href="https://www.slideshare.net/0DarkKing0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions">Slide Share</a>.
	
	</li>
	<li>The source code is available at 
		
		<a href="https://github.com/0fajarpurnama0/file-synchronizer-online-course-sharing">Github</a>.
	
	</li>
</ul>
<h2 id="copyright">Copyright Clearance</h2>
<p>Below are the publications reused in this thesis that does not require copyright clearance:</p>

<ul>
    <li><a href="#citefajar-hcs">Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi [10]</a></li>
</ul>

<p>Below are the publications reused in this thesis that requires copyright clearance:</p>

<figure>
    <img src="https://404store.com/2020/09/05/0.a.copyright-ieice.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmY6e77BjCwpHFghVkTTj6mCfMHG6wnaMa4SGH3ow9g1fn/0.a.copyright-ieice.jpg';" alt="https://file.army/i/B4GsgSq" />
    <figcaption><a href="#citehcs-sync">Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi [9]</a></figcaption>
</figure>

<figure>
    <img src="https://404store.com/2020/09/05/0.b.ieee-permission-crop.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmQ7aFgoW2stJ3cSXmryMJtjovCAaXhDCm1KqqUH2YYD1Z/0.b.ieee-permission-crop.jpg';" alt="https://file.army/i/B4GsNPZ" />
    <figcaption><a href="#citefajar-du-sync">Rsync and Rdiff implementation on Moodle's backup and restore feature for course synchronization over the network [12]</a></figcaption>
</figure>

<h2 id="abstract">Abstract</h2>
<p>The continuous advance of electronics and information communication technologies (ICT) have influenced every aspects greatly, on this thesis is discussed on education aspect. Electronics and ICTs have been incorporated into the learning and teaching process, giving birth to electronic learning (e-learning). Inside, there is a well known term called online course where the essence is being able to deliver courses distantly with flexibility in place and time. However a simple condition must be met in order to implement online course, and that is the sufficiency of ICT infrastructure. Unfortunately not all regions met this condition, limiting the accessibility of online course. Other than improving the ICT infrastructure, distributed learning management system (LMS) was proposed as alternative, but the next issue was the maintenance or synchronization, which in this case is keeping the learning contents up to date. There are two problems highlighted in this thesis which are unable to perform synchronization in severe network connectivity region, and duplicate data transfer during synchronization.</p>
<p>To overcome the synchronization in severe network connectivity region the solution is utilizing hand carry servers. By implementing hand carry servers on distributed LMS will grant mobility to the servers of distributed LMS. The concept proposed was having the hand carry server to physically seek network connectivity to perform online synchronization, and afterwards returns to its original location. The hand carry server was proved to be portable due to its small size, light weight, and also power consumption where a power bank is enough to supply for a whole day. Although it has resource limitations in terms of computer processing unit and random access memory which limits its performance.</p>
<p>To overcome duplicate data transfer during synchronization incremental synchronization was utilized instead of full synchronization. Also on this thesis introduced a new approach called dump and upload based sychronization which was to overcome the obstacles of different LMSs and LMS versions faced by dynamic content sychronization.</p>
<h2 id="tableofcontents">Table of Contents</h2>
<p>
	<a href="#listoffigures">List of Figures</a>
</p>
<p>
	<a href="#listoftables">List of Tables</a>
</p>
<ol class="tbc">
	<li>
		<a href="#introduction">Introduction</a>
		<ol class="tbc">
			<li>
				<a href="#background">Background</a>
			</li>
			<li>
				<a href="#problem">Problem</a>
			</li>
			<li>
				<a href="#hypothesis">Hypothesis</a>
			</li>
			<li>
				<a href="#significance">Significance</a>
			</li>
			<li>
				<a href="#objective">Objective</a>
			</li>
			<li>
				<a href="#contribution">Contribution</a>
			</li>
			<li>
				<a href="#limitation">Limitation</a>
			</li>
			<li>
				<a href="#structureofthethesis">Structure of the thesis</a>
			</li>
		</ol>
	</li>
	<li>
		<a href="#portabledistributedlms">Portable Distributed LMS</a>
		<ol class="tbc">
			<li>
				<a href="#distributedsystems">Distributed Systems</a>
				<ol class="tbc">
					<li>
						<a href="#partitionedsystem">Partitioned System</a>
					</li>
					<li>
						<a href="#replicatedsytem">Replicated Sytem</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#distributedlearningmanagementsystem">Distributed Learning Management System</a>
			</li>
			<li>
				<a href="#handcarryserverindistributedlms">Hand Carry Server in Distributed LMS</a>
				<ol class="tbc">
					<li>
						<a href="#portabilityofhandcarryserver">Portability of Hand Carry Server</a>
					</li>
					<li>
						<a href="#synchronizationinseverenetworkconnection">Synchronization in Severe Network Connection</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#limitationofhandcarryserver">Limitation of Hand Carry Server</a>
				<ol class="tbc">
					<li>
						<a href="#resource">Resource</a>
					</li>
					<li>
						<a href="#stresstesting">Stress Testing</a>
					</li>
				</ol>
			</li>
		</ol>
	</li>
	<li>
		<a href="#distributedlmssynchronization">Distributed LMS Synchronization</a>
		<ol class="tbc">
			<li>
				<a href="#learningcontentsharing">Learning Content Sharing</a>
			</li>
			<li>
				<a href="#fullsynchronizationversusincrementalsynchronization">Full Synchronization versus Incremental Synchronization</a>
				<ol class="tbc">
					<li>
						<a href="#fullsynchronization">Full Synchronization</a>
					</li>
					<li>
						<a href="#incrementalsynchronization">Incremental Synchronization</a>
					</li>
					<li>
						<a href="#dynamiccontentsynchronizationonmoodle">Dynamic Content Synchronization on Moodle</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#dumpanduploadbasedsynchronization">Dump and Upload Based Synchronization</a>
				<ol class="tbc">
					<li>
						<a href="#exportandimportfeature">Export and Import Feature</a>
					</li>
					<li>
						<a href="#rsyncablockedbasedremotedifferentialalgorithm">Rsync a Blocked Based Remote Differential Algorithm</a>
					</li>
					<li>
						<a href="#experimentresultandevaluation">Experiment Result and Evaluation</a>
					</li>
					<li>
						<a href="#advantageofdumpanduploadbasedsynchronization">Advantage of Dump and Upload Based Synchronization</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#conclusionandfuturework">Conclusion and Future Work</a>
				<ol class="tbc">
					<li>
						<a href="#conclusion">Conclusion</a>
					</li>
					<li>
						<a href="#futurework">Future Work</a>
					</li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
<p>
	<a href="#acknowledgement">Acknowledgement</a>
</p>
<p>
	<a href="#reference">References</a>
</p>
<h2 id="listoffigures">List of Figures</h2>
<ol class="tbc">
	<li>In Chapter 1:
    
		<ol class="tbc">
			<li>
				<a href="#figE-Learning">Illustration of e-learning showing many electronic devices to beused (images from openclipart [1].</a>
			</li>
			<li>
				<a href="#figOnline-Course">Illustration of the difference between conventional course and online course.  While conventional course is restricted by place andtime, online course can be anywhere and anytime (images fromopenclipart [1].</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 2:
    
		<ol class="tbc">
			<li>
				<a href="#figdistributed-lms">Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand peoplewill have not difficulty in accessing if there are servers on their local regions.</a>
			</li>
			<li>
				<a href="#fighcs-data-collecting">Illustration of using hand carry computer device to gather informa-tions from other users inputed from their own computer device [10].</a>
			</li>
			<li>
				<a href="#figmanual-labor">Time consumption of survey process from preparation, responding,to post survey [10]. (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and responsecollection, and Post Survey consists of response insertion. (b) Forhand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method isno need for post survey which the response already automatically inserted.</a>
			</li>
			<li>
				<a href="#figinstant-survey-result">Data in form of bar graph and pie chart was shown the instancethe hand carry server received the responses [10]. Only 4/30 item result shown here since it is too much to show all.</a>
			</li>
			<li>
				<a href="#figmoving-server">Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing [9].</a>
			</li>
			<li>
				<a href="#figimplementation-hcs"></a>Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.
			</li>
			<li>
				<a href="#figcpu-memory">Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage [10].</a>
			</li>
			<li>
				<a href="#figfunkload"></a>Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server(images from openclipart [1]).
			</li>
			<li>
				<a href="#figresponse-time">Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items[10], (a) average response time while (b) maximum response time.</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 3:
    
		<ol class="tbc">
			<li>
				<a href="#figfull-sync">Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared.  Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is aduplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.</a>
			</li>
			<li>
				<a href="#figinc-sync">Incremental synchronization different from Figure 3.1 where the duplicate data are filtered.</a>
			</li>
			<li>
				<a href="#figmoodle-diff-sync">Dynamic content synchronization model for Moodle [11]. The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slaves synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.</a>
			</li>
			<li>
				<a href="#figdump-upload-sync">The dump and upload based synchronization model. Both servers’ LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives.  After synchronization the archives will be imported/uploaded into the servers’ LMS, updating the learning contents.</a>
			</li>
			<li>
				<a href="#figmoodle-export-import">Screenshot of Moodle’s export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.</a>
			</li>
			<li>
				<a href="#figrsync-ill-1"></a>First step is to generate a signature of archive on slave and send to master. The signature of is used on master’s archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and producean archive identical to the one on master.
			</li>
			<li>
				<a href="#figrsync-ill-2">Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, andthree sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.</a>
			</li>
			<li>
				<a href="#figrsync-ill-3-4"></a>Illustration of identifying difference. (a) The three sets of check-sums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append newblocks, which will be send and applied on slave.
			</li>
			<li>
				<a href="#figrsync-ill-5">After the delta/patch is applied, slave will have identical archive to master.</a>
			</li>
			<li>
				<a href="#figrsync-ill-6">Implementation of some download manager techniques into rsync algorithm based synchronization.  Delta is split into pieces and retrieved by the client.  The integrity of the pieces are checkedusing cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.</a>
			</li>
			<li>
				<a href="#figblocksize-vs-sig-del">Test result showing the relationship between block size, signature, and delta.  When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.</a>
			</li>
			<li>
				<a href="#figexperiment-result">Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.</a>
			</li>
		</ol>
	</li>
</ol>
<h2 id="listoftables">List of Tables</h2>
<ol class="tbc">
	<li>In Chapter 1:</li>
	<li>In Chapter 2:
    
		<ol class="tbc">
			<li>
				<a href="#tablelist-of-LMS">List of LMS known categorize by open source, Cloud, or Proprietary.</a>
			</li>
			<li>
				<a href="#tableRP2-Specification">Specification of the hand carry computer Raspberry Pi 2 Model B.</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 3:
    
		<ol class="tbc">
			<li>
				<a href="#tablearchive-size">Size of course contents of the same course on different LMS, show-ing sizes when in contains one, two, and three topics.</a>
			</li>
			<li>
				<a href="#tabledetail-experiment">Detail experiment result of Figure 3.12 showing size of signature and delta during incremental synchronization scenarios on each LMSs.</a>
			</li>
			<li>
				<a href="#tableduplicate-eliminated">Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.</a>
			</li>
		</ol>
	</li>
</ol>
<h2 id="introduction">1 Introduction</h2>
<h3 id="background">1.1 Background</h3>
<p>Electronics and Information Communcation Technology (ICT) have made many tasks more convenient, including delivering education. It can be seen that many have incorporated electronics in their learning and teaching process. There are few examples such as teachers using laptops and projectors to present their materials, students browsing the Internet to search for informations, and both of them using emails, chats, or social networking service to communicate. These kind of things are agreed to be called electronic learning (e-learning) which can be illustrated on 
	<a href="#figE-Learning">Figure 1.1</a>
</p>
<figure id="figE-Learning">
	<img src="https://404store.com/2020/09/05/1.1.E-Learning.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmeBVWNJ1GjDAEU73n2WwUEgBhNQH7dGE8bbpDAwyXotv8/1.1.E-Learning.jpg';" alt="https://file.army/i/B4GsqFF" />
	<figcaption>Figure 1.1 Illustration of e-learning showing many electronic devices to be used (imagesfrom openclipart 
		<a href="#citekelly">[1]</a>).
	</figcaption>
</figure>
<p>Though, this thesis will not discuss widely on e-learning, but a category which is part of e-learning called online course. It uses electronic ICT devices where information exchange can be done remotely. Information can be delivered through electrical signal in high speed on the network, preferably on the Internet, and computer devices as end devices or as transmitters and receivers. Simply computer devices connected to the Internet are all that are needed to participate in online course from anywhere at anytime illustrated on 
	<a href="#figOnline-Course">Figure 1.2</a>.
</p>
<figure id="figOnline-Course">
	<img src="https://404store.com/2020/09/05/1.2.Online-Course.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmbiKtR6mHETUy1MkuKNHQKeWZXf75vLfRtZNHrKb54dja/1.2.Online-Course.jpg';" alt="https://file.army/i/B4GstNe" />
	<figcaption>Figure 1.2 Illustration of the difference between conventional course and online course. While conventional course is restricted by place and time, online course can be anywhere and anytime (images from openclipart 
		<a href="#citekelly">[1]</a>).
	</figcaption>
</figure>
<p>Online course is now being highlighted by many parties, seeing them as one solution to the unevenly distribution of education. Straighfowardly not everyone have access to good quality education, furthermore there are also those who does not have access, and by using online course people can receive education without going to school. Knowing this, our peers tried to implement online course in their Universities, one in Indonesia 
	<a href="#citesary">[2]</a> and the other one in Myanmar 
	<a href="#citemonmon">[3]</a>. Another peer already have online course well built in Mongolia and now moving to massive open online course (MOOC) 
	<a href="#citeotgon">[4]</a>. Unlike private online course only for students in Universities, MOOC is open for anyone indiscriminately. In the United States (US) MOOC is also being used to scout for potential students. For example Massachusetts Institute of Technology (MIT) found a genius Mongolian highschool student who perfectly ace its Circuits and Electronics MOOC, then took him as a freshmen student 
	<a href="#citerandall">[5]</a>. In summary many people saw bright future in utilizing online course in education.
</p>
<p>With all the benefits of online course, there are still problems preventing many people from enjoying it. The problem was the lack of accessability to online course due to insufficient ICT infrastructure. In other words there are people who are having network connectivity issue especially in developing countries. On random survey by Kusumo et al. 
	<a href="#citeobstacle-indonesia">[5]</a> on students in Indonesia, 60% of them agreed that Internet connection is still problematic. The survey by Monmon et al. 
	<a href="#citemonmon">[3]</a> of e-readiness on Yangon Technological University and Mandalay Technological University in Myanmmar showed lower Likert scale scores on the students' and teachers' perception on ICT network compared to other items. Today the world Internet penetration is still around 50% indicating that only half of the world's population can access online course 
	<a href="#citeinternet-world-stat">[7]</a>. Eventhough these people have access, their access quality may still be questionable which can lead to disatisfaction in accessing online course.
</p>
<p>The obvious solution to accessibility issue is to improve the ICT infrastruture, however this takes a long time. Therefore another method was implemented, which is implementation of distributed system rather than centralized system. The concept is to have the people to access the service on their local area that is distantly closer than on the central area that is distantly further. In some references, it is stated as the third generation of content management system (CMS) 
	<a href="#citedistributed-system">[8]</a>, thought on this work is more about learning contents of Learning management system (LMS) than general contents of CMS.
</p>
<h3 id="problem">1.2 Problem</h3>
<p>With distributed LMS as the solution to the lack of accessability of online course, it is the next problem which is discussed on this thesis. The problem is the synchronization which is to keep the learning contents up to date. This can also be said as the maintenance of the learning contents. Specifically there are two problems highlighted on this thesis as follow:</p>
<ol>
	<li>The lack of network connectivity for synchronization. Usually synchronization are set to be done online where the servers synchronizes with another in order to keep the learning contents to its latest version. If this was the case then synchronization is not possible on no network connectivity condition.</li>
	<li>Duplicate data transfer during synchronization. In default full synchronization is used, where the learning contents is usually in bundle of courses. Commonly when the contents of the course is revised on LMS, the whole contents of course is distributed to other servers including previously distributed contents (duplicate data). In this case, there will be many redundant data which will add more burdens to the network.</li>
</ol>
<h3 id="hypothesis">1.3 Hypothesis</h3>
<p>This thesis provides two main solutions for the two problems:</p>
<ol>
	<li>For the first problem of no network connectivity, the solution is to provide portability function to distributed LMS. Straightforwardly enabling the servers to move to other locations where there is network connectivity to synchronize, and to return to its original location after finish synchronizing.</li>
	<li>For the second problem of duplicate data is to utilize incremental synchronization through continuous differential synchronization technique. The new contents are to be identified before synchronization and only the new contents are distributed, leaving out the redundant data.</li>
</ol>
<h3 id="significance">1.4 Significance</h3>
<p>Detail significances are discussed in further sections, but in general can be mentioned as follow:</p>
<ol>
	<li>Possibility of flexible synchronization in severe network connectivity region by mobilizing the servers of distributed LMS. It can also be pictured as widening the network coverage.</li>
	<li>Lower network cost can be achieved from incremental synchronization.</li>
</ol>
<h3 id="objective">1.5 Objective</h3>
<p>The objective of this research is to enable online synchronization of distributed LMS in almost no network connectivity region and reduce redundant data transfer during synchronization.</p>
<h3 id="contribution">1.6 Contribution</h3>
<ol>
	<li>Introduced a novel concept of integrating hand carry server to distributed LMS which makes it mobile or portable resulting in able to perform synchronization in regions with severe network 
		<a href="#citehcs-sync">[9]</a>. This thesis also demonstrated the portability of hand carry servers' through conducting survey simulation and on the other hand also showed its limitation through stress testing 
		<a href="#citefajar-hcs">[10]</a>.
	</li>
	<li>Though the novelty of incremental synchronization in distributed LMS was already claimed 
		<a href="#citeroyyana-dynamic-content-synchronization">[11]</a>, this thesis showed a different approach call dump and upload based synchronization 
		<a href="#citefajar-du-sync">[12]</a> which the advantages of its single software application is compatible to most LMS and benefits the feature of that LMS, for example its privacy and security feature which automatically makes the synchronization private and secure, and on Moodle possibility of partial synchronization due to micronization of course contents into blocks. Another advantage is this approach supports bidirectional synchronization.
	</li>
</ol>
<h3 id="limitation">1.7 Limitation</h3>
<p>Each method may have limitations which is discussed in detail on each of their respective sections, but here is mentioned the general limitation of this research:</p>
<ol>
	<li>The system is only experimented in laboratory and not yet implemented in real running online courses. The experiment is done on the author's virtual machines, laboratory's local area network (LAN), and free public clouds owned by the author.</li>
	<li>Only one hand carry server was used in actual experiment and the expansion discussed of using more the one of it is still a concept derived from the experiment.</li>
	<li>This thesis' dump and upload based incremental synchronization is novel in its concept but not in its software application since it only make use of existing software applications. They are the export and import feature in LMS to dump the learning contents and rdiff application based on rsync to identify the difference between dumps.</li>
	<li>The course experimented on is the authors self created course which was never delivered, in short it is not an actual running course.</li>
</ol>
<h3 id="structureofthethesis">1.8 Structure of the thesis</h3>
<p>Beyond this section the thesis contains three more chapters:</p>
<ol>
	<li>Chapter 2 discussed about portable distributed LMS which in order gives brief introduction to distributed LMS, afterward is the author's work in showing the convenience of hand carry server <a href="#citefajar-hcs">[10]</a>, the concept of hand carry server in distributed LMS <a href="#citehcs-sync">[9]</a>, and laslty the hand carry server's limitations.</li>
	<li>Chapter 3 discussed about incremental data synchronization which in order the story of sharing learning contents, distinguishing full synchronization to differential and incremental synchronization, discussion of the previous work of dynamic content synchronization <a href="#citeroyyana-dynamic-content-synchronization">[11]</a> versus the author's work of dump and upload based synchronization <a href="#citefajar-du-sync">[12]</a>, and finally experiments and results showing the percentage of duplicate data eliminated on incremental synchronization.</li>
	<li>Chapter 4 is the conclusion of this thesis that also discussed the future work.</li>
</ol>
<h2 id="portabledistributedlms">2 Portable Distributed LMS</h2>
<h3 id="distributedsystems">2.1 Distributed Systems</h3>
<h4 id="partitionedsystem">2.1.1 Partitioned System</h4>
<p>Distributed systems can be a wide discussion with different implementation <a href="#citedistributed-system">[8]</a>. One implementation can be as partitioned system. For example, an organization's network can have their servers separated, where the database, directory, domain name service (DNS), dynamic host configuration protocol (DHCP), file, web, and each other servers on separated machine. They are integrated but independent where if one service (server) is damage, will not damage other services. A different example is data partitioning where data are fragmented that when retrieving data, they have to be gathered and merged. This usually happens in collaboration where people are working on the same project but from different machines.</p>

<h4 id="replicatedsystem">2.1.2 Replicated System</h4>
<p>Another implementation can be as replicated system, and this is the one that is referred or used on this thesis. The urgency for replicated system can be due to bottleneck traffic or geographically severe network connectivity, or both. One of the most popular implementation is search engine like Google and Yahoo where they have different server locations assigned with local domains for example .co.jp for Japan, .co.id for Indonesia, and etc. Not as well known as search engines are online multiplayer games. The servers of online multiplayer games can reside on many regions such as Asia, Europe, United States, China, etc. There are games that shows the number of population on each servers indicating whether it is full or not. Players can choose other servers when a server reached the population limit or when players cannot actually reach the server on that region.</p>

<h3 id="distributedsystems">2.2 Distributed Learning Management System</h3>
<p>One definition of LMS is a system that manages the learning and teaching specifically for online case. The current form of LMS today is a software application. It is not just delivering learning materials to students but online computerize any activities that can happen in a class. Some activities are interractions whether by chat applications or forums like on social networking service (SNS), assignments where this time is submitted electronically through LMS by uploading their files, and quizzes or examinations which can be automatically or manually graded. Not to forget that it can be accessed from anywhere at anytime, and computers are used which can perform much faster and automatic tasks than humans, makes it possible for unique applications, data minings, and learning analytics. In short new features are being developed everyday. Today exists many LMS as on <a href="#tablelist-of-LMS">Table 2.1</a> whether they are open source (free to use, modify, with all the codes open), only available on clouds or software as a service (SAAS) which tends to be freeware/usage only, or proprietary which tends to be business/commercial/paid. On the author's surroundings mostly Moodle is used.</p>

<table id="tablelist-of-LMS">
    <caption>Table 2.1 List of LMS known categorize by open source, Cloud, or Proprietary.</caption>
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

<p>The term distributed LMS means that the replicated servers contains LMS. Each servers are meant to service online course. The implementation can be a full replication where not only learning contents but everything else including activities, assessments, and interractions are synchronized. This means students and teachers can freely use any servers recommended to the one with best network connectivity. The other implementation is partial replication where only non-private data are synchronized, usually only the learning contents. This can happen when there are jurisdictions where each regions are to be handled locally. In other words contents are provided but each schools and universities are still the owner of their own servers and asserts local authorities. Either way distributed system is the solution for bottleneck and connectivity issue. As an illustration on <a href="#figdistributed-lms">Figure 2.1</a> in Indonesia, it is better to build and spread more servers compared to have a centralized server in the capital city.</p>

<figure id="figdistributed-lms">
	<img src="https://404store.com/2020/09/05/2.1.a.Internet_Penetration_Indonesia_Connectivity_Issue.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmU1jWfbDKWbqdnTke1ae8jA8LvAe178URKPcBbdDjwio9/2.1.a.Internet_Penetration_Indonesia_Connectivity_Issue.jpg';" alt="https://file.army/i/B4GsP85" />
	<img src="https://404store.com/2020/09/05/2.1.b.Internet_Penetration_Indonesia_Distributed_LMS.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmY32dGwBsuymcuWQosFbw5pnYsydCRavSHTJcDCHrQuAv/2.1.b.Internet_Penetration_Indonesia_Distributed_LMS.jpg';" alt="https://file.army/i/B4GsUQA" />
	<figcaption>Figure 2.1 Illustration of main benefit of distributed system using ICT penetration map of Indonesia in 2012, where more green regions showed good network connectivity and more red regions showed the opposite. (a) People on regions with more red colored will have difficulty in accessing the central server. (b) On the other hand people will have not difficulty in accessing if there are servers on their local regions.
	</figcaption>
</figure>

<h3 id="handcarryserverindistributedlms">2.3 Hand Carry Server in Distributed LMS</h3>

<p>After the establishment of distributed LMS, the contents needs to be maintained or to be kept up to date through synchronization. However the problem is the lack of network connectivity between servers usually found in deeper areas such as schools in villages. It may be easy to build a LAN but difficult to build connections to other servers or simply an Internet connection on distant places. In a short time it is only possible to build a very limited connection (very low speed) which retrieval of contents may seem to take forever if it is very large. The metaphor is building a server in a jungle, a remote island, or a desert, which are very isolated. The default solution is offline synchronization or the author's solution server mobilization <a href="#citehcs-sync">[9]</a>.</p>

<h4 id="portabilityofhandcarryserver">2.3.1 Portability of Hand Carry Server</h4>

<p>Before discussion of the synchronization, this section would like to introduce hand carry servers. On this thesis it is called hand carry server because the physical hardware is a computer with the size of a regular human hand that has been configured into a server. It is called a mini, pocket size, or portable computer, one example on this thesis is used Raspberry Pi 2 with the specification on <a href="#tableRP2-Specification">Table 2.2</a>.</p>

<table id="tableRP2-Specification">
    <caption>Table 2.2 Specification of the hand carry computer Raspberry Pi 2 Model B.</caption>
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

<p>The portability was demonstrated on one of the author's previous work <a href="#citefajar-hcs">[10]</a>. It is less related to distributed system but it showed applications of hand carry server in manual labors which on that work is a simulation comparing between paper based method survey to hand carry server method survey. The motivation was the lack of Internet connection to perform online survey but most people owns a computer devices in developing countries <a href="#citemonmon">[3]</a> <a href="#citeinternet-world-stat">[7]</a> <a href="#citemobile-users">[13]</a>. Instead of reverting to paper based method, the participants' personal digital assistants (PDAs) can be utilized by connecting them to the hand carry server and perform a semi-online survey illustrated on <a href="#fighcs-data-collecting">Figure 2.2.</a></p>

<figure id="fighcs-data-collecting">
	<img src="https://404store.com/2020/09/05/2.2.Hand-Carry-Server-Data-Collecting-Illustration.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmQqNYL7jqJe4mBDGnZKSJXQQ4rjupM1yz9SV2rf2PRj7D/2.2.Hand-Carry-Server-Data-Collecting-Illustration.jpg';" alt="https://file.army/i/B4Gsib4" />
	<figcaption>Figure 2.2 Illustration of using hand carry computer device to gather informations from other users inputed from their own computer device <a href="#citefajar-hcs">[10]</a>.
	</figcaption>
</figure>

<p>For the simulation a MOOC readiness survey <a href="#citeotgon">[4]</a>. consist of 30 questionnaire items was simulated on 30 participants by a surveyor. The whole survey consists of three stages; preparation, responding, and post survey. On the preparation stage, for paper based method the surveyor creates the questionnaire items on word processing software then print them,  while for hand carry server method the surveyor creates the questionnaire on web based survey application called Limesurvey CMS. On responding stage, for paper based method the surveyor hands out paper to each participants and collect them when they are finish responding, while for hand carry server method the surveyor tells the participants to connect their PDAs to the hand carry server and informs the URL of the local survey site, then waits until the participants submits their results to the hand carry server. Though results on <a href="#figmanual-labor">Figure 2.3</a> showed no difference in time consumption for preparation and responding stage, paper based method tends to burden more on labors such as printing the questionnaires (time taken multiply greatly using old printers) and carrying heavy papers if there are alot of participants. On the other hand resource is the main issue for hand carry server which will be discussed on Limitation of Hand Carry Server section. </p>

<figure id="figmanual-labor">
	<img src="https://404store.com/2020/09/05/2.3.a.Paper-Based-Method-Process-Edited.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmYgUqDYrVQ4KvsExnwRK1Lwpv2G5xyB8DbpZVrBe3LaVM/2.3.a.Paper-Based-Method-Process-Edited.jpg';" alt="https://file.army/i/B4GsyBn" />
	<img src="https://404store.com/2020/09/05/2.3.b.Hand-Carry-Server-Method-Process-Edited.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmcE7xf1eCCSnVqyBRKfqJQzoJmFi6SY7ZZ9Fa8uBDxNuZ/2.3.b.Hand-Carry-Server-Method-Process-Edited.jpg';" alt="https://file.army/i/B4GJ9l1" />
	<figcaption>Figure 2.3 Time consumption of survey process from preparation, responding, to post survey <a href="#citefajar-hcs">[10]</a>. (a) For paper based method the preparation consists of question typing and question printing, responding consists of question distribution, question answering, and response collection, and Post Survey consists of response insertion. (b) For hand carry server method the preparation consists of question typing with web delays, responding consists of server connection, question answering with web delay, and the advantage of this method is no need for post survey which the response already automatically inserted.
	</figcaption>
</figure>

<p>However the advantage was shown on the post survey stage where usually the surveyors have to input the responses into the database, not to forget to also handle human errors by verifications such as double checking which seems to be the most stressing and tiring proses of paper based method. It is different from hand carry server method where the responses are automatically processed, literally no post survey stage. In fact results/statistics are instantly visible which no manual method can outfast. The participants can see the current statistics the moment they submitted the responses as exampled on <a href="#figinstant-survey-result">Figure 2.4</a>.</p>

<figure id="figinstant-survey-result">
	<img src="https://404store.com/2020/09/05/2.4.Sample-Survey-Result-in-Instancecopy.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmPb6o4tCJdSXZdkJhcSYD44Ww4SvEG8VP48LYPtUojh22/2.4.Sample-Survey-Result-in-Instance%20(copy).jpg';" alt="https://file.army/i/B4GJBm7" />
	<figcaption>Figure 2.4 Data in form of bar graph and pie chart was shown the instance the hand carry server received the responses <a href="#citefajar-hcs">[10]</a>. Only 4/30 item result shown here since it is too much to show all.
	</figcaption>
</figure>

<p>The author's work mostly discussed the convenience of computerization but the important part is the mobility or portability <a href="#citefajar-hcs">[10]</a>. Back on Figure <a href="#fighcs-data-collecting">Figure 2.2.</a>, the hand carry server can be carried anywhere (a walking/moving server) which only needs a power supply of direct current (DC) 5V (volts) potential difference and 2A (amperes) electric current, usually a hand carry power bank is enough. On the simulation is also measured the current delivery was 0.6AH (ampere hour) in 39 minutes (whole duration of survey, see Figure <a href="#figmanual-labor">Figure 2.3</a>) meaning with the powerbank's specification of 20000AH it will last 20 hours. In short the hand carry server is low power cost that can last longer during mobile.</p>

<h4 id="synchronizationinseverenetworkconnection">2.3.2 Synchronization in Severe Network Connection</h4>

<p>Currently synchronization have to be to taken offline when there is no network connectivity whether they are full or incremental which will be discussed in next chapter. An administrator will go to network connected or directly to the updated server to retrieve the contents and store in a storage media such as compact disc (CD), and flash drive. Then travel back to the outdated server, insert the storage media and give the contents. There is a work by Ijtihadie et al. <a href="#citeroyyana-email-sync">[14]</a> for differential update where it was sent through email then differentially update the contents. It should be possible to put the differentials into a storage media which then to be inserted into the outdated server to update the contents.</p>

<figure id="figmoving-server">
	<img src="https://404store.com/2020/09/05/2.5.Moving-Server.png" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmaYCUbepRS11R58hZE12KVfi5czMexRxXTe85AYTaREUD/2.5.Moving-Server.png';" alt="https://file.army/i/B4GJ7Ps" />
	<figcaption>Figure 2.5 Illustration of moving hand carry servers where they have to move to a location with network connectivity to synchronize with main server, and return to original location after finishing <a href="#citehcs-sync">[9]</a>.
	</figcaption>
</figure>

<p>Another way is to move the servers to an area with connectivity, have it update, and then return it to its original location <a href="#citehcs-sync">[9]</a>. This was actually inspired by Ijtihadie et al. <a href="#citeroyyana-offline-quiz">[15]</a> where the students downloads the quiz on their mobile devices, answers them offline at their homes, and later finds an Internet connection to synchronize (automatically upload their answers). This concept was applied to this thesis' work where the process happens to the hand carry server instead of the mobile device. It is illustrated on <a href="#figmoving-server">Figure 2.5</a> with currently people carrying the servers. An example of implementation is on <a href="#figimplementation-hcs">Figure 2.6</a>. There are regions in Indonesia which does not have goot network connectivity rendering difficult to synchronize with other servers. If those servers are replaced with hand carry servers, then it can physically move to find network connectivity (it supports wired and wireless connection) to synchronize, and in the end return to its original location.</p>

<figure id="figimplementation-hcs">
	<img src="https://404store.com/2020/09/05/2.6.a.No-Network-Distributed-LMS.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmWY5dhHLLJgLgSaYt8i4Fm8ytPpem4Prg7XtLyB8XQyAJ/2.6.a.No-Network-Distributed-LMS.jpg';" alt="https://file.army/i/B4GJYZl" />
	<img src="https://404store.com/2020/09/05/2.6.b.Moving-Server-DLMS.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmWK6Nd3x4kpMKoA1yXGNcxhAxoosG13afrVc8VPtR4TYB/2.6.b.Moving-Server-DLMS.jpg';" alt="https://file.army/i/B4GJzFj" />
	<figcaption>Figure 2.6 Implementation illustration of hand carry server on distributed LMS in Indonesia. (a) Servers on more red areas have difficulty on their network connectivity. (b) Replacing those servers with hand carry servers renders them to be physically mobile and able to search for network connectivity.
	</figcaption>
</figure>

<p>Within the distributed LMS, the servers can either be replaced with hand carry servers or leave them mounted and have hand carry servers as addition or support, meaning the hand carry servers will travel from servers to servers. It is temporary implementation when there are no network infrastructures built, since it is fast and simple to install, or it can serve as a purpose to cover network coverage holes where the hand carry server moves around these network uncovered area.</p>

<h3 id="limitationofhandcarryserver">2.4 Limitation of Hand Carry Server</h3>
<h4 id="resource">2.4.1 Resource</h4>

<p>With the compressed size and light weight of hand carry server, it has resource limitation. The resources responsible for servicing are mainly computer processing unit (CPU) and random access memory (RAM) (detailed specification can be seen back on Table <a href="#tableRP2-Specification">Table 2.2</a>). As shown on <a href="#figcpu-memory">Figure 2.7</a> the CPU and RAM are already exhausted when 30 participants attempts the survey <a href="#citefajar-hcs">[10]</a>. These measurement result alone may not show much meaning, but can be meaningful if stress testing is conducted as on next subsection.</p>

<figure id="figcpu-memory">
	<img src="https://404store.com/2020/09/05/2.7.a.Survey-Attempt-CPU-Usage.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmdUHWmkPk3CNSeCMWFSrtWoCDhVHQJMD6esAVwnmY2fjv/2.7.a.Survey-Attempt-CPU-Usage.jpg';" alt="https://file.army/i/B4GJ4Nk" />
	<img src="https://404store.com/2020/09/05/2.7.b.Survey-Attempt-Memory-Usage.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmWGfCDXbEk4811gTKyC9oJ9N8cZLHqGoERhHoyHwNA8vD/2.7.b.Survey-Attempt-Memory-Usage.jpg';" alt="https://file.army/i/B4GJKKv" />
	<figcaption>Figure 2.7 Resource usage during survey attempted by 30 users showing mostly over 80% of CPU usage and around 700MB of RAM usage <a href="#citefajar-hcs">[10]</a>.
	</figcaption>
</figure>

<h4 id="stresstesting">2.4.2 Stress Testing</h4>

<p>Experience users may completely understand by just showing the resource measurement results, but others will have to feel, rub, and take few trials to see how far this hand carry server is actually capable. For that reason, stress testing was proposed and conducted. Though it was tested for survey purpose <a href="#citefajar-hcs">[10]</a>, but the method can be applicable for other applications. For the stress testing, a web stress testing software application called Funkload was used. Different numbers of virtual users incrementally 10 up to 100 was generated and attempts survey on the hand carry server simultaneously Illustrated on <a href="#figfunkload">Figure 2.8</a>. This time only response time was measured.</p>

<figure id="figfunkload">
	<img src="https://404store.com/2020/09/05/2.8.Stress-Testing-Illustration.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmTpiFCt8z3tBhdk9fmpRvJQA3PSqWhj6DdUYT7oaWX1q1/2.8.Stress-Testing-Illustration.jpg';" alt="https://file.army/i/B4GJRQH" />
	<figcaption>Figure 2.8 Stress testing illustration using Funkload software application that generates up to 100 virtual users to stress the hand carry server (images from openclipart <a href="#citekelly">[1]</a>).
	</figcaption>
</figure>

<p>Response time can be refered to service time, in this case how much users takes to load questionnaire items and to submit responses. The service time can also be called queuing time where there are users who takes shorter time and users who takes longer time as on <a href="figresponse-time">Figure 2.9</a> are shown the average response time and the maximum response time (the user on the last queue). It shows that the response time increases to the number users and also increases when the questionnaire content size increases because it will affect on the number of questionnaire items to be retrieved and how much responses that have to be submitted. Through this results, the surveryor can decide the target average response time and tolerable maximum response time. Then the number of users and questionnaire items simultaneously can be determined. Though the result also showed that the hand carry server have reached its limit above 85 concurrent users and 30 questionnaire items which the service stops working and must be restarted.</p>

<figure id="figresponse-time">
	<img src="https://404store.com/2020/09/05/2.9.a.pages_average.png" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmNtLjc7s5kqCMPJo6VAX6SEdRUw44Qn5MEPSQ8rxQyYYH/2.9.a.pages_average.png';" alt="https://file.army/i/B4GJebf" />
	<img src="https://404store.com/2020/09/05/2.9.b.pages_max.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmRaS9sEwFLxfLT2ppzwN2GsNGpUYzSyHHF1Vh94vJGtD8/2.9.b.pages_max.jpg';" alt="https://file.army/i/B4GJI7I" />
	<figcaption>Figure 2.9 Stress testing showing increasing response time to increasing number of virtual users and increasing number of questionnaire items <a href="#citefajar-hcs">[10]</a>, (a) average response time while (b) maximum response time.
	</figcaption>
</figure>

<h2 id="distributedlmssynchronization">3 Distributed LMS Synchronization</h2>
<h3 id="learningcontentsharing">3.1 Learning Content Sharing</h3>

<p>Before going to the main discussion of synchronization, it is better to discuss about learning content sharing. Sharing learning contents became popular ever since MOOC was introduced. A course "Moodle on MOOC" conducted periodically teaches students how to use Moodle and advised them to share their finished courses <a href="#citecooch-sharing">[16]</a>. Making a well designed and written learning contents for online course from a scratch may consume a lot of time, learning content sharing helps other instructors to quickly develop their own. Some specialized courses may only be written by experts. Learning content sharing reduces the burden of the teacher to create learning contents for online courses, and the more the existence of online courses can give more students from all over the world a better chance to access a quality education.</p>

<p>Distributed LMS is also another form of learning content sharing where the learning contents are shared to other servers on other regions. The typical way of learning content sharing is dump, copy, then upload. Most LMS have a feature to export their course contents into an archive and allows to import the contents to another server which have the LMS. The technique to export and import varies to systems but the concept is to synchronize the directory structure and database. There is a very high demand for this feature that it is still improving until now, for example being able to export user defined part of the contents is being developed. Other LMS that currently does not have this feature will be developed as it is stated on its developer forum.</p>

<h3 id="fullsynchronizationversusincrementalsynchronization">3.2 Full Synchronization versus Incremental Synchronization</h3>
<h4 id="fullsynchronization">3.2.1 Full Synchronization</h4>

<p>Synchronization can be defined as similar movements between two or more systems which are temporally aligned, though on this case is the action of causing a set of data or files to remain identical in more than one location. The data or files are learning contents and private data, although private data are usually excluded. The term full synchronization defined on this thesis is the distribution of the whole data consists of new data and existed data. Synchronization occurs when new data are present to update the data of other servers. Illustrated on <a href="#figfull-sync">Figure 3.1</a> the full synchronization includes existed or duplicated data which deems to be redundant that only adds unnecessary burden to the network. However full synchronization are more reliable because each full data are available.</p>

<figure id="figfull-sync">
	<img src="https://404store.com/2020/09/05/3.1.Full-Synchronization-Illustration.png" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmbVvnqo7AMxyPzfdK1SqVncHnUU5pNiDKEPr7zoW2b7Ri/3.1.Full-Synchronization-Illustration.png';" alt="https://file.army/i/B4GJSlV" />
	<figcaption>Figure 3.1 Illustration of full synchronization of learning contents in courses. Initial stage is learning content sharing where 100 mega bytes (MB) of course is shared. Next stage is update where there is 800MB of new data but whole 900MB is transfered which 100MB is a duplicate data. On next update there is 100MB of new data but whole 1GB is transfered which 900MB is duplicate data.
	</figcaption>
</figure>

<h4 id="fullsynchronization">3.2.2 Incremental Synchronization</h4>

<p>Ideally the duplicate data are to be filtered out and not to be distributed for highest efficiency. The conventional way is the recording approach where the changes done by the authors of the course are recorded. The changes can only and either be additions or deletions of certain locations. This actions are recorded and sent to other servers and have them execute the actions to achieve identical learning contents, which is similar to push mechanism where the main server forces updates on other servers. Accurate changes can be obtained but unrecoverable from error because the process is unrepeatable. Another issue is its restriction that no modification must take place on the learning contents of other servers, meaning the slightest change, corruption, or mutation can render the servers unsynchronizable.</p>

<p>Instead of the recording approach, the calculating approach is more popular due to its repeatable process and less restriction. The approach is to calculate the difference between the new and outdated learning contents. Therefore the process of the approach can be done repeatedly and some changes, corruption, or mutation on either learning contents does not prevent the synchronization. One of the origins of the calculating approach is file differential algorithm developed in Bell Laboratory <a href="#citediff-bell-lab">[17]</a> which today known as diff utility in Unix. The detailed algorithm may seem complicated, though in summary consists of extracting the common longest subsequence of characters in each line between the two files (more like finding the similarity between two files), afterwards the rest of the characters on the old file will be deleted while on the new file the characters will be added to the common longest subsequence on the correct location, resulting in update of the old file. For large files hashings were involved.</p>

<p>Applying the file differential algorithm on the synchronization will make it differential synchronization. Unlike full synchronization, differential synchronization is the distribution of only the new data. The repetition of differential synchronization will make it incremental synchronization which is the repetitive distribution of only the new data. In sense the synchronization will be incremental because only the updates are sent every time. Another way to put it, increment means to add up where the learning contents adds up to every differential updates. Ultimately duplicate data or learning contents will be filtered out, reducing unnecessary burdens on the network illustrated on <a href="figinc-sync">Figure 3.2</a>.</p>

<figure id="figinc-sync">
	<img src="https://404store.com/2020/09/05/3.2.Incremental-Synchronization-Illustration.png" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmR8Stj9zDeXSbMdXRpjeKVFU6snkTmQS8rJWc15HsfBbK/3.2.Incremental-Synchronization-Illustration.jpg';" alt="https://file.army/i/B4GaJso" />
	<figcaption>Figure 3.2 Incremental synchronization different from Figure <a href="#figfull-sync">Figure 3.1</a> where the duplicate data are filtered.
	</figcaption>
</figure>

<h4 id="dynamiccontentsynchronizationonmoodle">3.2.3 Dynamic Content Synchronization on Moodle</h4>

<p>The idea of implementing differential synchronization on distributed LMS started by Usagawa et al. <a href="#citeidea-moodle-sync">[18]</a>, which then continued by Ijtihadie et al. <a href="#citeroyyana-dynamic-content-synchronization">[11]</a> <a href="#citesecond-moodle-sync">[19]</a>. These works still limits themselves to distributed Moodle system because it solely focuses on Moodle structure. When writing the software application, it is necessary to identify the database tables and directories of the learning contents. The incremental synchronization between two Moodle systems was described as dynamic content synchronization <a href="#citeroyyana-dynamic-content-synchronization">[11]</a> where the learning contents are constantly being updated. The dynamic synchronization is unidirectional or simplex in terms of communication model where it is fixed that one Moodle system acts as a master to distribute the updates and another one acts as a slave to receive the updates.</p>

<p>File differential algorithm was applied to maintain consistencies on both master's and slave's database tables and directories. The database tables and directories are assigned with hashes <a href="#citeroyyana-dynamic-content-synchronization">[11]</a>. Information of those hashes are exchanged between master and slave, identical hashes meaning thoses contents should not be change, and on the other hand mismatch hashes meaning those contents should be updated. Though Ijtihadie et al. <a href="#citeroyyana-dynamic-content-synchronization">[11]</a> developed their own algorithm stated specifically for synchronization of learning contents between LMS, it is not much different from existing remote differential file synchronization algorithm such as <a href="#citersync">[20]</a>.</p>

<p>The moodle tables on the database is converted into synchronization tables as on <a href="#figmoodle-diff-sync">Figure 3.3</a> through means of hashing. Only contents related to the selected course was converted and sorted on the course packer. Privacy was highly regarded, thus private data was filtered. The purpose is to find inconsistencies on the database between master and slave. Stated on the previous paragraph, hashes are oftenly used to test inconsistencies, if the hashes are different then they are inconsistent and vice versa. When inconsistencies on a certain table is found, the master sends its table to the slave replacing the slave's table which in the end will become consistent. In the end the synchronization tables are reverted back into Moodle tables. In summary dynamic content synchronization only takes place on parts of the database and directories that changes or inconsistent.</p>

<figure id="figmoodle-diff-sync">
	<img src="https://404store.com/2020/09/05/3.3.Dynamic-Content-Synchronization-Model.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmYsiSk4WqDNnAEK8qxNN2mGgHYeR7nGLPKqUWxoL2He2u/3.3.Dynamic-Content-Synchronization-Model.jpg';" alt="https://file.army/i/B4GJZmp" />
	<figcaption>Figure 3.3 Dynamic content synchronization model for Moodle <a href="#citeroyyana-dynamic-content-synchronization">[11]</a>. The course packer converts both Moodle tables into synchronization tables. Then the synchronizer checks for inconsistency between the two tables which in the end applies the difference between both synchronization table to the slave’s synchronization table. Finally the synchronization table is reconverted into Moodle table and that is how it is synchronized.
	</figcaption>
</figure>

<h3 id="dumpanduploadbasedsynchronization">3.3 Dump and Upload Based Synchronization</h3>

<p>The dynamic content synchronization <a href="#citeroyyana-dynamic-content-synchronization">[11]</a> software application was written solely for Moodle, and back then was written for Moodle version 1.9. Later on Moodle rises to version 2.0, with major changes on database and directory structure. The software application have to be changed to suit the new Moodle version <a href="#citesecond-moodle-sync">[19]</a>, but the concept of synchronization remains the same. Moodle continues to develop, until now it is version 3.3, though sadly the dynamic content synchronization software application was discontinued on Moodle version 2.0. The author originally tried to continue the software application but found a better approach named dump and upload based synchronization model <a href="#citefajar-du-sync">[12]</a> on <a href="#figdump-upload-sync">Figure 3.4</a>. Unlike dynamic content synchronization, the dump and upload based synchronization is bidirectional but limited to half duplex communication model. In other words each can play as both master and slave, but only one at time. For example, on first synchronization one server can play as the master while others as slaves, and on second synchronization the master can switch into a slave and one of the slaves can switch into a master. Another thing is that the synchronization uses pull mechanism where the slave checks and requests updates to the master. It is considered more flexible than the push mechanism where the master forcefully update the slaves.</p>

<figure id="figdump-upload-sync">
	<img src="https://404store.com/2020/09/05/3.4.Course-Content-Synchronization-Model.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmQYpcLs1hAGdgnwKZgMsMFyZZZ8tKTckjRKBZNQBpvKRp/3.4.Course-Content-Synchronization-Model.jpg';" alt="https://file.army/i/B4GJuUK" />
	<figcaption>Figure 3.4 The dump and upload based synchronization model. Both servers' LMS will dump/export the desired learning contents (in this case packed into a course) into archives/files. The synchronizer will perform differential synchronization between the two archives. After synchronization the archives will be imported/uploaded into the servers' LMS, updating the learning contents.
	</figcaption>
</figure>

<h4 id="exportandimportfeature">3.3.1 Export and Import Feature</h4>

<p>While dynamic content synchronization handles everything from a scratch, the dump and upload based synchronization utilizes the export and import feature that exists in most LMS. It is a feature mainly to export and import learning contents categorized into courses which can also be called course contents. The export feature outputs the course content's database tables and directories into a structured format. Then the import feature reads the format and inserts the data into the correct database tables and directories. Formats may differ from one LMS to another but the method is most likely the same.</p>

<p>Other features are export and import of course lists, user accounts, and probably more others but not known and used on this thesis. One of the best export and import is on Moodle where further splitting is possible on the course contents while on other LMS have to dump the whole course. This way people can choose to get only the contents they are interested in. This opens a path for partial synchronization where only specific contents or parts of the course are synchronized. Another advantage is the option to choose to include, not to include private data, or include private data but anonymized, in other words it supports privacy. In summary Moodle's export and import feature's advantage compared to other LMSs' is the ability to secure private data, and split course contents into blocks or micros screenshot on <a href="#figmoodle-export-import">Figure 3.5</a>. This thesis highly recommends other LMSs' export and import feature to follow Moodle's footsteps.</p>

<figure id="figmoodle-export-import">
	<img src="https://404store.com/2020/09/05/3.5.a.Moodle-Backup-Option.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmawrhmfZQSQ5QCsbsUyzsGNfjmoiRhHqcUjqe6bxYjWYs/3.5.a.Moodle-Backup-Option.jpg';" alt="https://file.army/i/B4GJ6ZD" />
	<img src="https://404store.com/2020/09/05/3.5.b.Course-Design-4.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmYFRmSthzBv7JqCRBpt3gP2uj3vwnzqyiXEk3yYB2aoBn/3.5.b.Course-Design-4.jpg';" alt="https://file.army/i/B4GJEdQ" />
	<figcaption>Figure 3.5 Screenshot of Moodle's export feature, (a) showed options like include accounts, and (b) showed learning contents to choose to export.
	</figcaption>
</figure>

<h4 id="rsyncablockedbasedremotedifferentialalgorithm">3.3.2 Rsync a Blocked Based Remote Differential Algorithm</h4>

<p>With the pervious subsection explained that course contents can be dumped using the export and import feature, the next step is performing remote differential synchronization between the two archives. The author chose not to develop an algorithm but used an existing algorithm called rsync <a href="#citersync">[20]</a>. The author also did not write a program to perform rsync but use the already existing program based on the rsync library (librsync). What the author did is just implementing this program to work on hyper text transfer protocol (HTTP) or on web browsers since LMS are usually web based (rsync is mostly used on secure shell (SSH)). There are three general steps of performing rsync algorithm between the two archives located on different servers as on <a href="#figrsync-ill-1">Figure 3.6</a>, and details are as follow:</p>

<figure id="figrsync-ill-1">
	<img src="https://404store.com/2020/09/05/3.6.Rsync-on-Course-Content-Archive.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmaZxWaknVTjuYH61afhz1MhwDgEN8s8WF8mJ8rLNnBzXy/3.6.Rsync-on-Course-Content-Archive.jpg';" alt="https://file.army/i/B4GJOVY" />
	<figcaption>Figure 3.6 First step is to generate a signature of archive on slave and send to master. The signature of is used on master's archive to generate delta/patch or can be called the difference and have it sent to slave. Slave will apply/use that delta/patch on its archive and produce an archive identical to the one on master.
	</figcaption>
</figure>

<ol>
    <li>The archive to be updated is divided into blocks with each blocks calculated and assigned two types of hash or checksums. The checksums are weak rolling checksum for example Adler-32 and strong checksum for example Black2, and MD5. The checksums are bundled into a signature and sent to the other server. The user can determine the size of divided blocks which can affect the accuracy of finding difference. <a href="#figrsync-ill-2">Figure 3.7</a> illustrates this step.
    <figure id="figrsync-ill-2">
    	<img src="https://404store.com/2020/09/05/3.7.Rsync-Ill-Detail-1.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmR3ycm1A1E26FfGbDuS8Yezzyutaw7mLxoKY87raHFo6W/3.7.Rsync-Ill-Detail-1.jpg';" alt="https://file.army/i/B4GJGKa" />
    	<figcaption>Figure 3.7 Assume two archives where the outdated archive on slave have only second topic, and latest archive on master have all three topics. Here for example outdated archive is divided into three blocks, and three sets of checksums are obtained and bundled into a signature. The signauture is then sent to master.
    	</figcaption>
    </figure>
    </li>
    <li>The signature is then used on the latest version archive on the server with latest version of archive. First a weak checksum is checked in rolling block. Second if a block's weak checksum is identical then comparison of the two strong checksums is done to verify whether the block is really identical or not. For blocks with identical checksums, their locations are recorded, while other blocks are regarded as new blocks which should be sent to the server with outdated archive. Checksums on signature with no matching blocks found on archive with latest verstion, the blocks of the outdated archive that generated this checksum will be regarded as deleted. Based on all of these information a delta/patch is generated containing instructions to alter the blocks of the outdated archive and new blocks to be inserted there. This step is illustrated on <a href="#figrsync-ill-3-4">Figure 3.8</a>.
    <figure id="figrsync-ill-3-4">
    	<img src="https://404store.com/2020/09/05/3.8.a.Rsync-Ill-Detail-2.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmbxZrQUDqsaoMytRr8X1Ktvz8t5Sd82nSbBx2jWqdoE7x/3.8.a.Rsync-Ill-Detail-2.jpg';" alt="https://file.army/i/B4GJLXL" />
    	<img src="https://404store.com/2020/09/05/3.8.b.Rsync-Ill-Detail-3.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQma2qFGyFAYpTkS7J5pBHxTFMqfkqrCoxSnPoPKAUBBA1x/3.8.b.Rsync-Ill-Detail-3.jpg';" alt="https://file.army/i/B4GJhn9" />
    	<figcaption>Figure 3.8 Illustration of identifying difference. (a) The three sets of checksums are compared in rolling with other blocks on new archive. Identical blocks to the first and second sets of checksums are found and the locations are recorded while no matching block is found for the third set of checksums which will be marked for delete. (b) The delta is generated on master containing instructions to rearrange identical blocks, delete unfounded blocks, and append new blocks, which will be send and applied on slave.
    	</figcaption>
    </figure>
    </li>
    <li>The delta/patch is sent to the server with outdated archive, applying it to its archive,  constructing identical archive to the latest version one as on <a href="#figrsync-ill-5">Figure 3.9</a>.
    <figure id="figrsync-ill-5">
    	<img src="https://404store.com/2020/09/05/3.9.Rsync-Ill-Detail-4.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmVUWfr5dCDAbzaN6c29JcDynmZbRFecH7jzXhmvqk3Hyg/3.9.Rsync-Ill-Detail-4.jpg';" alt="https://file.army/i/B4GJM7o" />
    	<figcaption>Figure 3.9 After the delta/patch is applied, slave will have identical archive to master.
    	</figcaption>
    </figure>
    </li>
</ol>

<p>Lastly on this subsection, for implementation should be targeted for regions with severe network connectivity. Although transmitting only the differential than the whole contents reduces the transmission cost, it is not the only answer regarding to network stability issue. Network stability issue can be a long cut off in the middle of transmission which forces to restart the synchronization process. Another one is short cut offs which makes the transmission discrete but unnecessary to restart, however frequent short cut offs can corrupt the transmission data. To solve this unstable network problem, techniques implemented in most download manager software applications should also be implemented on the synchronization's transmission. To support continueable download after the transmission is completely cutoff, is to split the transmission data into pieces. During cutoff, the transmission can be continued by detecting how much pieces the client has, then request and retrieve remaining pieces from server. To prevent data corruption checksums can be used to verify the data's integrity, on this case are the pieces integrity. Finally <a href="#figrsync-ill-1">Figure 3.6</a> is modified to <a href="#figrsync-ill-6">Figure 3.10</a>.</p>

<figure id="figrsync-ill-6">
	<img src="https://404store.com/2020/09/05/3.10.Rsync-Ill-Detail-5.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQma6UKzJQMqGRrdrZcfCHqAdt5JZRR6Vtk56QrhEPzuHtT/3.10.Rsync-Ill-Detail-5.jpg';" alt="https://file.army/i/B4GJQGE" />
	<figcaption>Figure 3.10 Implementation of some download manager techniques into rsync algorithm based synchronization. Delta is split into pieces and retrieved by the client. The integrity of the pieces are checked using cheksum, here is MD5 and if inconsistent it will redownload those pieces. In the end the pieces are merged. This can also be implemented on uplink side when sending the signature.
	</figcaption>
</figure>

<h4 id="experimentresultandevaluation">3.3.3 Experiment Result and Evaluation</h4>

<p>With dump and upload based synchronization prototype created, an experiment was conducted. The experiments took place on many LMS with the latest version, which were Moodle 3.3, Atutor 2.2.2, Chamilo 1.11.4, Dokeos 3.0, Efront 3.6.15.5, and Illias 5.2. The purpose was to compare the network traffic between full synchronization and incremental synchronization, and percentage of duplicate data eliminated. The experiment used the authors own original course contents which mainly consists three topics are computer programming, computer network, and penetration testing, with each consists of materials, discussion forums, assignments, and quizzes. A snapshot of one of the topics was provided on Figure <a href="#figmoodle-diff-sync">Figure 3.3</a>.</p>

<p>There are four scenarios. First is full synchronization, equivalent to transmitting the whole course content or full download from the client side. Second is large content incremental synchronization is when the client only have one of the three topics (example for Moodle will update from 16.5MB to 30.5MB). Third is medium content incremental synchronization is when the client already have two of the three topics (example for Moodle will update from 28.4MB to 30.5MB), and the client wants to synchronize to the server in order to have all three of the topics (update). Fourth is no revision meaning incremental synchronizing while there is no update, to test whether there are bugs in the software application which the desired result should be almost no network traffic generated. On <a href="#tablearchive-size">Table 3.1</a> shows the course content data size in bytes when it has one, two, or three of the topics. The data sizes varies depending on the LMS, but the contents such as materials, discussion forums, assignments, and quizzes are almost exactly similar.</p>

<table id="tablearchive-size">
    <caption>Table 3.1 Size of course contents of the same course on different LMS,
showing sizes when in contains one, two, and three topics.</caption>
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

<p>The experiment used rdiff utilities to perform rsync algorithm between latest and outdated as the incremental synchronization. Before proceeding it is wise to examine the affect of block size which on previous subsection states that users are free to define the size. The test was perform on Moodle's archives from Table <a href="#tablearchive-size">Table 3.1</a> between an archive which has one topic of 16.5MB and archive which has 3 topics of 30.5MB. The result is on <a href="#figblocksize-vs-sig-del">Figure 3.11</a> showing the relationship between block size, signature, and delta size, which affects total transmission cost by summing signature and delta. Larger block size meaning less blocks where less checksum sets are generated, thus smaller signature size. However this means less accurate checking and less likely to detect similar blocks which will contribute to the size of the delta. The <a href="#figblocksize-vs-sig-del">Figure 3.11</a> showed the delta had reached the full size of the targeted archive, meaning that it missed detecting similar blocks, thus the whole archive is treated as totally different archive. The incremental synchronization will be more heavier than full synchronization. Reversely smaller block size provides more accurate detection which guarantee to reduce the size of the delta. However this means more blocks and more checksum sets are to be bundled into the signature, and looking at the Figure it can grow very large that can cost a lot more transmission cost then full synchronization itself. In conclusion choosing the right blocksize is crucial to get less sum of signature and delta that contributes to the transmission cost, on this case 512 bytes of block size is optimum.</p>

<figure id="figblocksize-vs-sig-del">
	<img src="https://404store.com/2020/09/05/3.11.Block-Size-vs-Signature-Delta.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmZjNQC2iBap5PmjKt7TxAyQgtdtv1dSSDUTFjWr8hJEqz/3.11.Block-Size-vs-Signature-Delta.jpg';" alt="https://file.army/i/B4GJXmU" />
	<figcaption>Figure 3.11 Test result showing the relationship between block size, signature, and delta. When the block size increases the signature size decreases, but the opposite for delta which it increases. The full file is the size of the file to be downloaded without using differential method, in other words using full synchronization. The transmission cost if using incremental synchronization is the sum of signature and delta which on this case is when the block size is 512 bytes when it is optimal.
	</figcaption>
</figure>

<p>With the relationship of blocksize to signature and delta discussed, it is still not ready to proceed with the experiment. With the difference between the two archive's size, latest is 30.5MB and outdated is 16.5MB ideally the delta should be 14MB but still strayed far to as large as 20MB. It is found that the problem is because the rsync algorithm (rdiff) was executed directly on the archive which is still compressed. The solution is to uncompress the archive before hand and execute rdiff recursively of every available contents which makes the author to turn on more modified utility called rdiffdir.</p>

<p>The experiment succeeded and got results of <a href="#figexperiment-result">Figure 3.12</a>. <a href="#figexperiment-result">Figure 3.12</a> already includes uplink and downlink, for incremental synchronization uplink is influenced by the size of the signature and downlink is influenced by the size of the delta (see <a href="#figrsync-ill-1">Figure 3.6</a>). Detailed data are also provided on <a href="#tabledetail-experiment">Table 3.2</a>. However the purpose of both <a href="#figexperiment-result">Figure 3.12</a> and <a href="#tabledetail-experiment">Table 3.2</a> is only to show that incremental synchronization is better than full synchronization which in this case is lower network traffic, and to show that the incremental synchronization is able to detect when there are no updates in this case almost no network traffic, while the main objective is to eliminate duplicate data during transmission.</p>

<figure id="figexperiment-result">
	<img src="https://404store.com/2020/09/05/3.12.Incremental-Synchronization-Network-Traffic-Result.jpg" onerror="this.onerror=null;this.src='https://cdn.steemitimages.com/DQmRN2vnCgWEMEGvCZH2LDyU4VkW2TDNWCL5tCEpAPXTktP/3.12.Incremental-Synchronization-Network-Traffic-Result.jpg';" alt="https://file.army/i/B4GJAU3" />
	<figcaption>Figure 3.12 Network traffic generated based on the four scenarios of the experiment. Full sychronization generates the most network traffic shown in blue bars. The orange and yellow bar is network traffic of incremental synchronization depending on the size of contents to be updated which lower are generated compared to full synchronization. The green bars showed incremental synchronization execution when there is no update and the results are very low and tolerable.
	</figcaption>
</figure>

<table id="tabledetail-experiment">
    <caption>Table 3.2 Detail experiment result of Figure <a href="#figexperiment-result">Figure 3.12</a> showing size of signature and delta during incremental synchronization scenarios on each LMSs.</caption>
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

<p>The percentage of redundant data eliminated is shown on <a href="#tableduplicate-eliminated">Table 3.3</a> for incremental synchronization scenarios. It is assumed that the ideal delta is the difference in data size between the latest and outdated archive. The duplicate data is the outdated archive itself or the latest archive substracted by the ideal delta, which is this much that had to be eliminated. The larger the experiment's delta size compared to the ideal delta, the worse the experiment's result. With these results the performance of the incremental synchronization can  be evaluated by calculating the percentage of duplicated data eliminated which is the full latest archive substracted by experiment's delta size, next divided by duplicated data, and then converted to percentage. For large content synchronization there is one LMS Atutor which had a low result of 51.89 % due to size of generated archive itself (Table <a href="#tablearchive-size">Table 3.1</a>) and drop the whole average to 85.30%. Other than Atutor and Illias the duplicate data eliminated percentage is above 89%. For the medium content synchronization a very high average duplicate data eliminated percentage is achieve which is 97.90%, meaning duplicate data are almost completely eliminated. Though these results are obtain strictly under optimal block size configuration (Figure <a href="#figblocksize-vs-sig-del">Figure 3.11</a>) where the minimum network traffic consisted of uplink and downlink (affected by signature and delta size) is desired. There is no benefit of 100% duplicate data elimination if the uplink (signature size) is very large.</p>

<table id="tableduplicate-eliminated">
    <caption>Table 3.3 Experiment result of delta size compared to ideal size, and percentage of duplicate eliminated was formulated from these data.</caption>
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

<h4 id="advantageofdumpanduploadbasedsynchronization">3.3.4 Advantage of Dump and Upload Based Synchronization</h4>

<p>With the dump and upload based incremental synchronization model successfully able to eliminate very large amount of duplicate data the advantage compared to the previous dynamic content synchronization can be discussed:</p>

<ol>
    <li>Since the model utilizes existing utilities mainly the export and import feature in LMSs one software application can be compatible to all LMS and all of its versions as long as it has this feature. The reason is because the export and import feature is guaranteedly maintain by the LMSs' developers, unlike dynamic content sychronization software application, there is no need to worry about structure changes on LMS. The advantage is actually on the developer side, when writing dynamic content synchronization software application the writer needs to coordinate the database and directories while for dump and upload based synchronziation it is already taken care of by the LMSs' developers.</li>
    <li>Other benefits can also be obtained from the export and import feature however relative to the LMS. For example on Moodle it has the capability to choose whether to include private data or not, meaning for synchronization it can have a flexible privacy option. While for other LMS private data is filtered out which means no other options other than retaining the privacy for synchronization. Another example also on Moodle it is able split a course into smaller blocks of learning contents and able to dump specific learning contents (not all). The synchronization software application can be tuned for partial synchronization, meaning other teachers can get only parts that they are interested in. Unfortunately this is available only on Moodle, other LMS have to dump the whole course contents.</li>
    <li>Since the method is dumping, it can easily be tuned for bidirectional synchronization, unlike dynamic content synchronization which is unidirectional. The incremental synchronization uses the pull concept where the requesting server only asked the difference from targeted server, while push concept is usually unidirectional where the master forcefully updates the slaves. Although dynamic content synchronization is claimed to be unidirectional, the author sees that it is possible to modify the software application to bidirectional because the differential synchronization method is general, however it is uknown whether it will be as easy to modify as the dump and upload base synchronization.</li>
</ol>

<h2 id="conclusionandfuturework">4 Conclusion and Future Work</h2>
<h3 id="conclusion">4.1 Conclusion</h3>
<p>Portable and synchronized distributed LMS was introduced to keep the contents up to date in environment of severe network connectivity. By replacing the servers with hand carry servers, the servers in severed network regions were able to move to find network connectivity for synchronization. The hand carry server was proved to be very portable because of its very small size and very light weight. The power consumption is very low that a power bank used on smart phone is enough to run the hand carry server for almost a whole day. Though very convenient however it has resource limitations mainly on CPU and memory, which limits the number of concurrent users. Still, the problem of unable to perform synchronization in no network connectivity area is solved.</p>

<p>The Incremental synchronization technique was beneficial for synchronization in distributed LMS, where it eliminates very large amount of duplicate data . Though in the past incremental synchronization was already proposed to be implemented in distributed LMS, this thesis provides a better approach which is dump and upload based synchronization. The advantages are that it is compatible to most LMSs and most of their versions, easily tuneable for bidirectional synchronization, and because it utilizes LMS features it can be tuned for example to configure privacy settings, and to perform partial synchronization.</p>

<h3 id="futurework">4.2 Future Work</h3>
<p>All of the experiment are done in the lab, and it is better to conduct real implementation in the future especially regarding the hand carry servers. A possible real implementation is to have drones carrying the hand carry servers. Performance issue is still a problem with hand carry servers that demands for enhancing techniques like integrating field programmable gate array (FPGA). For incremental synchronization it was discussed only the network issue but not yet resource such as CPU and memory. Although the synchronization on this thesis is bidirectional, distributed revision control system is needed to be implemented for larger collaborations. The distributed LMS here is a replicated system, but there is a better, more flexible trend to use especially for content sharing which is message oriented middleware (MOM) system that in the future is very interesting to be implemented.</p>

<h2 id="acknowledgement">Acknowledgement</h2>

<p>I would like to give my outmost gratitude to the all mighty that created me and this world for his oportunity and permission to walk this path as a scholar and for all his hidden guidances.</p>

<p>The first person I would like to thank is my main supervisor Prof. Tsuyoshi Usagawa for giving me this topic, also to Dr. Royyana who was researching on this topic before me, and their countless wise advices for perfecting this research. The professor is also the one who gave me this oportunity to enroll in this Master's program in Graduate School of Science and Technology, Kumamoto University. It was also through his recommendation that I received the Ministry of Education, Culture, Sports, Science and Technology (MEXT) scholarship from Japan. Not to forget his invitation to join his laboratory, the facilities, and comfort that he had provided. Also, I would like to thank all the oportunities that he had given me to join many conferences such as in Tokyo, Myanmmar, and Hongkong.</p>

<p>Then I would like to thank the Japanese government for giving me this MEXT scholarship that I never have to worry about financial. Instead I can focus on my studies, research, planning my goals for the future, and helping other people. I also would like to thank my other supervisors Prof. Kenichi Sugitani and Prof. Kohichi Ogata for evaluating my research and my thesis.</p>

<p>Next I would like to thank my parents, family and my previous University Udayana University, for not only raising and allowing me, but also pushed me to continue my studies. I would to thank my project team Hendarmawan and Muhammad Bagus Andra that our work about hand carry servers contributes in forming this thesis. My project team also my friends in laboratory Alvin Fungai, Elphas Lisalitsa, Irwansyah, Raphael Masson, and Chen Zheng Yang who were mostly on my side and even contributes to some degree on all my research. Like my friends in previous University whom now walk our separate ways, often spent the night together in laboratory, are friends whom I can trust with my life.</p>

<p>I would to like thank the Indonesia Community, Japanese friends, and other international friends who helped me with life here for example finding an apartment for me, but mostly their friendliness. Lastly to all others that helped me whom I cannot mention one by one, whether the known or the uknown, and whether the seen and the unseen. To all these people, I hope we can continue to work together in the future.</p>

<h2 id="reference">Reference</h2>
<ol>
	<li id="citekelly">M. Kelly, “openclipart-libreoffice,” (2017), [computer software] Available: 
		<a href="http://www.openclipart.org">http://www.openclipart.org</a>. [Accessed 27 June 2017].
	</li>
	<li id="citesary">S. Paturusi, Y. Chisaki, and T. Usagawa, “Assessing lecturers and students readiness for e-learning: A preliminary study at national university in north sulawesi indonesia,”GSTF Journal on Education (JEd), vol. 2, no. 2, pp. 18, (2015), doi: 
		<a href="https://doi.org/10.5176/2345-7163_2.2.50">10.5176/2345-7163_2.2.50</a>
	</li>
	<li id="citemonmon">Monmon. T, Thanda. W, May. Z. O, and T. Usagawa, “Students E-readiness for E-learning at Two Major Technological Universities in Myanmar,” In Seventh International Conference on Science and Engineering, pp. 299-303, (2016), Yangon, Myanmar.</li>
	<li id="citeotgon">O. Sukhbaatar, L. Choimaa, and T. Usagawa, “Evaluation of Students’ e-Learning Readiness in National University of Mongolia, ” Educational Technology (ET) Technical Report on Colloborative Support, etc., pp. 37-40 (2017). Soka University:Institute of Electronics, Information and Communication Engineers (IEICE).</li>
	<li id="citerandall">E. Randall, “Mongolian Teen Aces an MIT Online Course, Then Gets Into MIT,” [online] Available: 
		<a href="http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit">http://www.bostonmagazine.com/news/blog/2013/09/13/mongolian-teen-aces-mit-online-course-gets-mit</a>. [Accessed 27 June 2017].
	</li>
	<li id="citeobstacle-indonesia">N. S. A. M. Kusumo, F. B. Kurniawan, and N. I. Putri, “Learning obstacle faced by indonesian students,” in The Eighth International Conference on eLearning for Knowledge-Based Society, Thailand, Feb. (2012), [online] Available: 
		<a href="http://elearningap.com/eLAP2011/Proceedings/paper25.pdf">http://elearningap.com/eLAP2011/Proceedings/paper25.pdf</a>. [Accessed 27 June 2017].
	</li>
	<li id="citeinternet-world-stat">Miniwatts Marketing Group, “Internet World Stats Usage and Population Statistics,” [online] Available: 
		<a href="http://www.internetworldstats.com/stats.htm">http://www.internetworldstats.com/stats.htm</a>. [Accessed 27 June 2017].
	</li>
	<li id="citedistributed-system">Q. Li, R. W. H. Lau, T. K. Shih, and F. W. B. Li, “Technology supports fordistributed and collaborative learning over the internet,” ACM Transactions onInternet Technology (TOIT) Journal, vol. 8, issue 2, no. 5, pp, (2008).</li>
	<li id="citehcs-sync">F. Purnama, and T. Usagawa, “Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi”,Educational Technology (ET)Technical Report on Colloborative Support, etc., pp. 21-24 (2017). Soka University: Institute of Electronics, Information and Communication Engineers (IEICE), doi: 
		<a href="https://doi.org/10.1145/1323651.1323656">10.1145/1323651.1323656</a>.
	</li>
	<li id="citefajar-hcs">F. Purnama, M. Andra, Hendarmawan, T. Usagawa, and M. Iida, “Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi”,International Mobile Learning Festival (IMLF), pp. 18-32 (2017), [online] Available: 
		<a href="http://imlf.mobi/publications/IMLF2017Proceedings.pdf">http://imlf.mobi/publications/IMLF2017Proceedings.pdf</a>. [Accessed 27 June 2017].
	</li>
	<li id="citeroyyana-dynamic-content-synchronization">R. M. Ijtihadie, B. C. Hidayanto, A. Affandi, Y. Chisaki, and T. Usagawa, “Dynamic content synchronization between learning management systems over limited bandwidth network,” Human-centric Computing and Information Sciences, vol. 2,no. 1, pp. 117, (2012), doi: 
		<a href="https://doi.org/10.1186/2192-1962-2-17">10.1186/2192-1962-2-17</a>
	</li>
	<li id="citefajar-du-sync">F. Purnama, T. Usagawa, R. Ijtihadie, and Linawati, “Rsync and Rdiff imple-mentation on Moodle’s backup and restore feature for course synchronization overthe network”,IEEE Region 10 Symposium (TENSYMP), pp. 24-29 (2016). Bali:IEEE, doi: 
		<a href="https://doi.org/10.1109/TENCONSpring.2016.7519372">10.1109/TENCONSpring.2016.7519372</a>.
	</li>
	<li id="citemobile-users">The World Bank Group. Mobile cellular subscriptions (per 100 people). (2017,March 06). Retrieved from <a href="http://data.worldbank.org/indicator/IT.CEL.SETS.P2">http://data.worldbank.org/indicator/IT.CEL.SETS.P2</a>.
	</li>
	<li id="citeroyyana-email-sync">R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “E-mail Based Updates Delivery in Unidirectional Content Synchronization among Learning Management Systems Over Limited Bandwidth Environment, ”IEEE Re-gion 10 Conference (TENCON), pp. 211215, (2011), doi: <a href="https://doi.org/10.1109/TENCON.2011.6129094">10.1109/TENCON.2011.6129094</a>.
	</li>
	<li id="citeroyyana-offline-quiz">R. M. Ijtihadie, Y. Chisaki, T. Usagawa, B. C. Hidayanto, and A. Affandi, “Offline web application and quiz synchronization for e-learning activity for mobile browser” 2010 IEEE Region 10 Conference (TENCON), pp. 2402-2405, (2010), doi: <a href="https://doi.org/10.1109/TENCON.2010.5685899">10.1109/TENCON.2010.5685899</a>.
	</li>
	<li id="citecooch-sharing">M. Cooch, H. Foster, and E. Costello, “Our mooc with moodle," Position papers for European cooperation on MOOCs, EADTU, (2015).
	</li>
	<li id="citediff-bell-lab">J. W. Hunt, and M. D. McIlroy, “An algorithm for differential file comparison,” Computing Science Technical Report, (1976). New Jersey: Bell Laboratories, [online] Available: 
		<a href="https://www.cs.dartmouth.edu/~doug/diff.pdf">https://www.cs.dartmouth.edu/~doug/diff.pdf</a>. [Accessed 27 June 2017].
	</li>
	<li id="citeidea-moodle-sync">T. Usagawa, A. Affandi, B. C. Hidayanto, M. Rumbayan, T. Ishimura, and Y.Chisaki, “Dynamic synchronization of learning contents among distributed moodle systems,” JSET, pp 1011-1012, (2009).
	</li>
	<li id="citesecond-moodle-sync">T. Usagawa, M. Yamaguchi, Y. Chisaki, R. M. Ijtihadie, and A. Affandi, “Dynamic synchronization of learning contents of distributed learning management systems over band limited network contents sharing between distributed moodle 2.0 series," in International Conference on Information Technology Based Higher Education and Training (ITHET), (2013). Antalya, doi: <a href="https://doi.org/10.1109/ITHET.2013.6671058">10.1109/ITHET.2013.6671058</a>
	</li>
	<li id="citersync">A. Tridgell and P. Mackerras, “The rsync algorithm," The Australian National University, Canberra ACT 0200, Australia, Tech. Rep. TR-CS-96-05, (1996), [online] Available: 
		<a href="https://openresearch-repository.anu.edu.au/handle/1885/40765">https://openresearch-repository.anu.edu.au/handle/1885/40765</a>. [Accessed 27 June 2017].
	</li>
</ol>

<div class="video-container">
	<iframe src="lbry-iframe" src="https://lbry.tv/$/embed/portable-and-synchronized-distributed/fb98507ac46c4550d0e033cbc3ed297a1980e1ef" allowfullscreen></iframe>
</div>

<h2>Mirror</h2>
<ul>
	<li>
		<a href="https://www.publish0x.com/fajar-purnama-academics/portable-and-synchronized-distributed-learning-management-sy-xyvdwoz?a=4oeEw0Yb0B&tid=github">https://www.publish0x.com/fajar-purnama-academics/portable-and-synchronized-distributed-learning-management-sy-xyvdwoz?a=4oeEw0Yb0B&tid=github</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama">https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama</a>
	</li>
	<li>
		<a href="https://medium.com/@0fajarpurnama0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-e8064ae67225">https://medium.com/@0fajarpurnama0/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-e8064ae67225</a>
	</li>
	<li>
		<a href="https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/master-thesis-fajar-purnama">https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/master-thesis-fajar-purnama</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.tumblr.com/post/628353130681237504/portable-and-synchronized-distributed-learning">https://0fajarpurnama0.tumblr.com/post/628353130681237504/portable-and-synchronized-distributed-learning</a>
	</li>
	<li>
		<a href="https://0darkking0.blogspot.com/2020/09/portable-and-synchronized-distributed.html">https://0darkking0.blogspot.com/2020/09/portable-and-synchronized-distributed.html</a>
	</li>
	<li>
		<a href="https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama">https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama">https://hive.blog/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/65-portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions">https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/65-portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions</a>
	</li>
	<li>
		<a href="https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama">https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-1-2?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama">https://steemit.com/technology/@fajar.purnama/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions-2-2?r=fajar.purnama</a>
	</li>
	<li>
		<a href="http://0fajarpurnama0.weebly.com/blog/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions">http://0fajarpurnama0.weebly.com/blog/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions">https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/portable-and-synchronized-distributed-learning-management-system-in-severe-networked-regions</a>
	</li>
</ul>
