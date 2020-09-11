---
layout: post
title: 	Development of a Lossy Online Mouse Tracking Method for Capturing User Interaction with Web Browser Content
categories: doctoral
tags: [computers, mouse tracking, web browser, content interaction, lossy compression, doctoral, dissertation]
ogimage: https://404store.com/2020/09/10/log-data-dept-level-comment.jpg
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
<iframe src="//www.slideshare.net/slideshow/embed_code/key/1purkSoQhzVL1A" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>
<div style="margin-bottom:5px">
	<strong>
		<a href="//www.slideshare.net/0DarkKing0/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-content" title="Development of a lossy online mouse tracking method for capturing user interaction with web content." target="_blank">Development of a lossy online mouse tracking method for capturing user interaction with web content.</a>
	</strong> from 
	
	<strong>
		<a href="//www.slideshare.net/0DarkKing0" target="_blank">Fajar Purnama</a>
	</strong>
</div>
<h2 id="author">Author</h2>
<a href="https://0fajarpurnama0.github.io">Fajar Purnama</a>
<h2 id="note">Note</h2>
<ul>
	<li>This is a dissertation submitted to
		
		
		
		
		<em>Graduate School of Science and Technology, Computer Science and Electrical Engineering in Kumamoto University, Japan, on September 2020 in partial fulfillment of the requirements for the degree of Doctor of Philosophy</em> but was not published thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I claimed full responsibility detached from Kumamoto University. Except for contents marked with copyright (©), I hereby declare to license it as 
		
		
		
		
		<em>customized 
			
			
			
			
			<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a>
		</em> where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
	
	
	
	
	</li>
	<li>The presentation is available at 
		
		
		
		
		<a href="https://www.slideshare.net/0DarkKing0/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-content">Slide Share</a>.
	
	
	
	
	</li>
	<li>The source code is available at 
		
		
		
		
		<a href="https://github.com/0fajarpurnama0/Real-Time-Online-Mouse-Tracking-Animation/tree/mouse-tracking-only">Github</a>.
	
	
	
	
	</li>
</ul>
<h2 id="declarationofauthorship">Declaration of Authorship</h2>
<p>I, Fajar PURNAMA , declare that this thesis titled, “Development of a Lossy Online Mouse Tracking Method for Capturing User Interaction with Web Browser Content” and the work presented in it are my own. This thesis is based on few of my publications and I hereby confirmed that I have permission to reuse them:</p>
<ul>
	<li>For my journal paper titled "Implementation of real-time online mouse tracking on overseas quiz session" 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>, the copyright was transferred to Springer Science+Business Media, LLC, part of Springer Nature but the authors and I have been granted full permission to reuse the accepted version of the journal paper.
	
	</li>
	<li>For my journal paper titled "Using real-time online preprocessed mouse tracking for lower storage and transmission costs" 
		
		<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>, is open access under creative commons (CC-BY) where anyone can reuse the whole material.
	
	</li>
	<li>For my proceeding paper titled "Rsync and Rdiff implementation on Moodle’s backup and restore feature for course synchronization over the network" 
		
		<a href="#purnama2016rsync">(Purnama, Usagawa, et al. 2016)</a>, the copyright was transferred to IEEE but the authors and I does not need formal permission to reuse the accepted version of the proceeding paper.
	
	</li>
	<li>For my technical report titled "Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi" 
		
		<a href="#purnama2017incremental">(PURNAMA and USAGAWA 2017)</a>, the copyright was transferred to IEICE but the authors and I have been granted full permission to reuse the published version of the report paper 
		
		<a href="#ieicecopyright">(IEICE, 2015)</a>.
	
	</li>
	<li>For my proceeding paper titled "Demonstration on Extending The Pageview Feature to Page Section Based: Towards Identifying Reading Patterns of Users" 
		
		<a href="#purnama2016demonstration">(Purnama, Fungai, and Usagawa 2016)</a>, the copyright was not transferred, thus the copyright remains with the authors.
	
	</li>
	<li>More detailed information are available in Appendix 
		
		<a href="appendixbcopyrights">B</a>.
	
	</li>
</ul>
<h2 id="abstract">Abstract</h2>
<p>Though people are confined inside their houses due to COVID-19, they are forced to continue their activities online. The demand for tools to monitor these activities increases for example, making sure students reads materials, and examiners does not cheat during online examinations. Unfortunately, conventional web logs cannot monitor those kinds of activities. One monitor tool is mouse tracking that tracks the actions of the mouse cursor that includes clicks, movements, and scrolls, which covers the majority of online users’ interaction to the browser contents. Though mouse tracking is promising, very few implemented this tool because (1) previous mouse tracking tools requires desktop installations which is bothersome to the users and (2) the rumors that mouse tracking generates big data such as the saying a swipe from left to right generates a megabyte of data. This thesis tackles those problem by building a mouse tracking server application that is easily installable and does not require users to install any additional applications other than the web browser. The application was implemented in an overseas quiz session between National University of Mongolia and Kumamoto University where the amount of data generated was also investigated. This thesis also contributes to a lossy online mouse tracking method that can greatly reduce the amount of data generated. Finally, some visualization of the mouse tracking data are shown and possible application such as online examination cheating prevention and force reading of term of service are discussed.</p>
<h2 id="acknowledgements">Acknowledgements</h2>
<p>My first gratitude would be to my supervisor Prof. Tsuyoshi Usagawa for taking care of me for five years starting from my Master’s program until the end of my Doctoral program. His deeds are almost immeasurable because without him, Kumamoto University, and The Ministry of Education, Culture, Sports, Science and Technology Japan, my currently best five years of my life may not be possible. I would like to thank my reviewers Prof. Kohichi Ogata, Prof. Kenichi Sugitani, Prof. Masahiko Nishimoto, and Prof. Masayoshi Aritsugi for their time in reviewing this thesis. I greatly thank my friend Alvin Fungai as the co-founder for this topic where without him, the topic of this thesis would have been different and I may be late in finishing this thesis because I have tried doing other topics and found to be much more difficult or just does not suit me. The critical development phase of this research was thanks to the Computer Algorithm class by Prof. Masayoshi Aritsugi and all of the participating members that included Hendarmawan, Hamidullah Sokout, Alhafiz Akbar Maulana, and Sari Dewi where in those moments that I decided this topic as my Doctoral thesis. The implementation and data were thanks to Dr. Otgontsetseg Sukhbaatar, Prof. Lodoiravsal Choimaa, and the students in School of Engineering and Applied Sciences, National University of Mongolia where without them, this topic may not make it to two international journal publication and may prevent the completion of this thesis. Lastly, I would like to thank my mother Linawati, father Teddy Junianto, and Ni Nyoman Sri Indrawati for their daily support.</p>
<h2 id="tableofcontents">Table of Contents</h2>
<p>
	<a href="#declarationofauthorship">Declaration of Authorship</a>
</p>
<p>
	<a href="#abstract">Abstract</a>
</p>
<p>
	<a href="#acknowledgements">Acknowledgements</a>
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
				<a href="#objective">Objective</a>
			</li>
			<li>
				<a href="#hypothesis">Hypothesis</a>
			</li>
			<li>
				<a href="#contribution">Contribution</a>
			</li>
			<li>
				<a href="#benefitandsignificance">Benefit and Significance</a>
			</li>
			<li>
				<a href="#thesisstructure">Thesis Structure</a>
			</li>
		</ol>
	</li>
	<li>
		<a href="#onlinemousetrackingimplementationandinvestigation">Online Mouse Tracking Implementation and Investigation</a>
		<ol class="tbc">
			<li>
				<a href="#systemoverview">System Overview</a>
				<ol class="tbc">
					<li>
						<a href="#mousetrackinginwebdevelopment">Mouse Tracking in Web Development</a>
					</li>
					<li>
						<a href="#onlinemousetrackingsystem ">Online Mouse Tracking System</a>
					</li>
					<li>
						<a href="#privacypolicies ">Privacy Policies</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#networkdatatransmittedbyoneclick">Network Data Transmitted by One Click</a>
				<ol class="tbc">
					<li>
						<a href="#peertopeerexperiment">Peer to Peer Experiment</a>
					</li>
					<li>
						<a href="#datagenerationestimationforimplementationplan">Data Generation Estimation for Implementation Plan</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#overseasonlinemousetrackingimplementation">Overseas Online Mouse Tracking Implementation</a>
				<ol class="tbc">
					<li>
						<a href="#quizdetails">quizdetails</a>
					</li>
					<li>
						<a href="#amountofdatagenerated">Amount of Data Generated</a>
					</li>
				</ol>
			</li>
		</ol>
	</li>
	<li>
		<a href="#onlinemousetrackingresourcesavingmethods">Online Mouse Tracking Resource Saving Methods</a>
		<ol class="tbc">
			<li>
				<a href="#existingmethods">Existing Methods</a>
			</li>
			<li>
				<a href="#real-timeonlinemousetracking">Real-Time Online Mouse Tracking</a>
			</li>
			<li>
				<a href="#lossyonlinemousetracking">Lossy Online Mouse Tracking</a>
				<ol class="tbc">
					<li>
						<a href="#threemousetrackingpreprocessingandtransmissionmethod">Three Mouse Tracking Preprocessing and Transmission Method</a>
					</li>
					<li>
						<a href="#threemousetrackingpreprocessingandtransmissionsimulations">Three Mouse Tracking Preprocessing and Transmission Simulations</a>
					</li>
					<li>
						<a href="#threemousetrackingpreprocessingandtransmissionresults">Three Mouse Tracking Preprocessing and Transmission Results</a>
					</li>
					<li>
						<a href="#synchronizationforhandcarryserverquiz">Synchronization for Hand Carry Server Quiz</a>
					</li>
				</ol>
			</li>
		</ol>
	</li>
	<li>
		<a href="#thedepthlevelsoflogs">The Depth Levels of Logs</a>
		<ol class="tbc">
			<li>
				<a href="#webpage/coursecontentlevellogs">Web page / Course Content Level Logs</a>
				<ol class="tbc">
					<li>
						<a href="#conventionalweblogsandeducationaldata">Conventional Web Logs and Educational Data</a>
					</li>
					<li>
						<a href="#amountofinteractions">Amount of Interactions</a>
					</li>
					<li>
						<a href="#webpageorcoursecontentinactivity">Web Page or Course Content Inactivity</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#arealevellogs">Area Level Logs</a>
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
<p>
	<a href="#adata">A Data</a>
</p>
<p>
	<a href="#bcopyrights">B Copyrights</a>
</p>
<p>
	<a href="#reference">References</a>
</p>
<h2 id="listoffigures">List of Figures</h2>
<ol class="tbc">
	<li>In Chapter 1:</li>
	<li>In Chapter 2:
    
		
		
		
		<ol class="tbc">
			<li>
				<a href="#figmousetrackingillustration">Mouse Tracking Illustration.</a>
			</li>
			<li>
				<a href="#fighello-world-dom">DOM representation of Table 2.1 (Purnama and Usagawa, 2020). The html tag is the parent with head, body, and footer tag as the children. Head has a child tag title, body has a child tag p, and footer has a child tag p.</a>
			</li>
			<li>
				<a href="#figmsbrwsrplgn">Mouse Tracking Chrome extension.</a>
			</li>
			<li>
				<a href="#figmsmdlplgn">Mouse Tracking Plugin on Moodle.</a>
			</li>
			<li>
				<a href="#figonlinemssys">Online Mouse Tracking Framework.</a>
			</li>
			<li>
				<a href="#figplugininstall">Moodle Plugin Install.</a>
			</li>
			<li>
				<a href="#figprivacypolicy">Privacy Policy.</a>
			</li>
			<li>
				<a href="#fig1clkp2p">P2P real-time mouse tracking experiment.</a>
			</li>
			<li>
				<a href="#figplotdatarateone">A plot of data rate generated by a user based on the events generated per second ©(Purnama et al., 2020b). The horizontal axis represents the events per second or frequency in hertz (Hz) and the vertical axis represents the data rate in kilobytes per second. The different colored lines represent the number of variables included (refer to Table 2.2).</a>
			</li>
			<li>
				<a href="#figmsmngljpmap">Overseas real-time online mouse tracking implementation.</a>
			</li>
			<li>
				<a href="#figmoodlelog">Moodle Log.</a>
			</li>
			<li>
				<a href="#figmoodlegrade">Moodle Grade.</a>
			</li>
			<li>
				<a href="#figmslogscrnsht">Screenshot of mouse tracking data of students from National University of Mongolia who attempted a quiz session on a Moodle server at Kumamoto University ©(Purnama et al., 2020b).</a>
			</li>
			<li>
				<a href="#figoverseaseventamtestdnt">Total query/rows/events generated by each students during mouse tracking implementation between National University of Mongolia and Kumamoto University and its estimated total data transmission size ©(Purnama et al., 2020b). The horizontal axis represents individual students, primary vertical axis is the query/rows/events, and secondary vertical axis is the estimated data transmission size.</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 3:
    
		
		
		
		<ol class="tbc">
			<li>
				<a href="#figoverseasdatarate">Data rate during mouse tracking implementation between National University of Mongolia and Kumamoto University. The horizontal axis represents 10 minute interval time and the vertical axis represents the data rate in kilobytes per second. The yellow horizontal line shows the average and the vertical lines shows the minimum and maximum during their respective interval ©(Purnama et al., 2020b).</a>
			</li>
			<li>
				<a href="#figmsflowchart">Flowchart of mouse tracking ©(Purnama et al., 2020b): offline (left), online (middle), real-time and online (right).</a>
			</li>
			<li>
				<a href="#figfloodednetwork">Illustration of bottleneck network in regular online mouse tracking and real-time online mouse tracking as a solution ©(Purnama et al., 2020b).</a>
			</li>
			<li>
				<a href="#figSingle-Page-vs-Region-of-Interest-vs-Default-Mouse-Tracking-Illustration">Whole page vs region of interest vs default mouse tracking illustration. The left scroll illustrates summarized event amount that summarizes the number of events occurring on the whole page; the middle scroll illustrates ROI tracking that summarizes the number of events occurring in defined areas, and the right scroll illustrates default mouse tracking that records every event and the precise point where it occurs, forming a trajectory.</a>
			</li>
			<li>
				<a href="#figthree-type-mouse-tracking-flowchart">Three Types of Mouse Tracking Flowchart. The left flowchart is default mouse tracking, the middle flowchart is summarized event amount, and the right flowchart is region of interest mouse tracking (Purnama and Usagawa, 2020).</a>
			</li>
			<li>
				<a href="#figp2pmssimsbc">In Purnama and Usagawa, 2020 the simulation is based on Figure 2.10. In this thesis, the server is changed to single board computer Raspberry Pi 3. The reason is to support regions with limited connectivity in Figure 3.7.</a>
			</li>
			<li>
				<a href="#fighcsrp3">Even though the ownership of computer and mobile devices increase drastically, the pace of Internet penetration may not be as fast. Those who are in limited connectivity region may not be able to enjoy online quizzes, let alone mouse tracking. Therefore Purnama et al., 2017 offers a hand carry server solution where the students’ computer devices can connect to the teachers’ single board computer server that runs quiz and mouse and touch tracking.</a>
			</li>
			<li>
				<a href="#figdbrwsperf">The total script running time of three mouse tracking demo session by the author. The horizontal axis is the mouse tracking method. The data in order are from Mozila Firefox, Microsoft Edge, and Google Chrome. The vertical axis is the total running time in milliseconds. Among the three browsers Mozilla Firefox performs faster than Microsoft Edge and Internet Explore performs faster than Google Chrome for this work u, 2020.</a>
			</li>
			<li>
				<a href="#figdefault-page-roi">CPU and RAM usage and data rate comparison between default mouse tracking, summarized event amount, and ROI mouse tracking.</a>
			</li>
			<li>
				<a href="#figdefaultvsincremental">Suppose there are two quiz sessions like the one in this thesis. The teacher have to synchronize the data two times which are after the first session and after the second session. Although the human mind knows that it is better to update, the computer today still does not operate that way. Even the default copying in most people desktop still functions as copying the whole data and replacing the old shown on the left. Today, a separate application must be used to perform incremental synchronization shown on the right that is able to calculate the difference between the old and new data ©(PURNAMA and USAGAWA, 2017).</a>
			</li>
			<li>
				<a href="#figrsyncalgorithm">A detailed illustration of the rsync algorithm procedure where the steps in summary are splitting the data into blocks, scan for blocks relocation, and scan for blocks that does not exist where they can be to be newly added blocks or unused blocks to be deleted. Finally, execute relocation, addition, and deletion based on the obtained information from the scanning 
					
					<a href="#fpmthesis">(Purnama, 2017)</a>
				</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 4:
    
		
		
		
		<ol class="tbc">
			<li>
				<a href="#figweblogdepthlevel">Six level of web logs in order from most shallow to deepest are Internet, websites, categories, web pages, area, and coordinates. .</a>
			</li>
			<li>
				<a href="#figeducationaldatadepthlevel">Six level of educational data in order from most shallow to deepest are Internet, academies, courses, course contents, area, and coordinates.</a>
			</li>
			<li>
				<a href="#figweblogvseyetracking">Web Log vs Eye Tracking.</a>
			</li>
			<li>
				<a href="#figinactivequerytimedomain">Inactive Query Time Domain.</a>
			</li>
			<li>
				<a href="#figexamleavedetector">An exam detector that tracks unwanted activities of participants such as mouse leaving the exam, tab and meta button to leave the exam, and other events indicating exam leaving.</a>
			</li>
			<li>
				<a href="#figmsheatmap">Mouse Tracking Heatmap.</a>
			</li>
			<li>
				<a href="#figmsactlc10m">Mouse activity heatmap in quiz page locations in time series. The horizontal axis represents 10 minute interval time and vertical axis are quiz page locations. For the heatmap, green color is close to minumum activity, yellow color is close second quartile, and red is close to maximum activity.</a>
			</li>
			<li>
				<a href="#figmsacst">Mouse activity heatmap in quiz page locations of each students. The horizontal axis are quiz page locations and vertical axis are the students anonymized. For the heatmap, green color is close to minumum activity, yellow color is close second quartile, and red is close to maximum activity.</a>
			</li>
			<li>
				<a href="#figgradeheatmap">Grade Heatmap.</a>
			</li>
			<li>
				<a href="#figreading-detector">Illustration of force reading based on the duration of the mouse cursor stays in an area. The left example shows that the mouse cursor did not stay long enough in each area and tells the user to read everything, the middle example shows that the mouse cursor did not stay long enough in middle area and tells the user to complete reading middle area, and the right example shows satisfaction in user’s reading.</a>
			</li>
			<li>
				<a href="#figleftclickvisualization">Left Click Visualization.</a>
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
				<a href="#tabhello-world-html">A web page code in simple HTML that contains html, head, title, body, p, and footer tags (Purnama and Usagawa, 2020)</a>
			</li>
			<li>
				<a href="#tableresourceoneevent">The data generated of one click posted to the server ©(Purnama et al., 2020b). The rows before the last row are the types of information, and the last row shows the data rate of the submitted post (Purnama et al., 2020a).</a>
			</li>
			<li>
				<a href="#tablogcomparison">Comparison of mouse tracking data size to daily pageview (monthlypageview), Moodle log and grades, Nasa server log 1995 (nasadata1995), Open University learning analytics dataset (openuniversitydata), and HarvardX Person-Course 2013 (DVN/26147_2014) ©(Purnama et al., 2020b).</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 3:
    
		
		
		
		<ol class="tbc">
			<li>
				<a href="#tabdtszcmprsn">Comparison of data amount generated from the three types of mouse tracking.</a>
			</li>
		</ol>
	</li>
	<li>In Chapter 4:
    
		
		
		
		<ol class="tbc">
			<li>
				<a href="#tabduration-event-amount">The duration and event amount generated by 41 Mongolian students during a quiz session.</a>
			</li>
		</ol>
	</li>
</ol>
<h2 id="introduction">1 Introduction</h2>
<h3 id="background">1.1 Background</h3>
<p>Thanks to the development of information communication technology (ICT), humanity lives in convenience. It is no longer necessary to spend much effort to seek information. Whereas in the past, people needs to travel to libraries to seek books, buy newspapers to get the latest news, gather in a community to hear the latest rumors, or even start a pilgrimage to find a master. Nowadays, most information are available in the Internet. With ownerships of portable computer devices that can connect to the Internet from anywhere becoming mainstream, anyone can search for their desired information 
	
	<a href="#dentzel2013internet"> (Dentzel, 2013)</a>.

</p>
<p>The Internet is not only an open massive source of information where anyone can publish, but also a tool for distant activities. People can interact with each other without meeting through text, voice, or video messages regardless the time and place. More people do not go to shop but order items through online shopping. In some countries like Indonesia, they develop an application that can order variety of services online 
	
	<a href="#azzuhri2018creative">(Azzuhri et al., 2018)</a> such as meal delivery service, calling house cleaners, calling therapist, etc.

</p>
<p>Due to the recent COVID-19 pandemic that occurred early February 2020, most regions are in a lockdown where people are to stay away from each other (mostly asked to stay at home) to prevent the spread of infection. Even school closes, most governments around the world have temporarily closed educational institutions in an attempt to contain the spread of the COVID-19 pandemic 
	
	<a href="#unesco2020covidschool">(UNESCO, 2020)</a>. All forms of activities are recommended to be done online which includes educational activities where courses are switched from face to face to online. The basic of online course that is known today is materials provided online, online text discussion forum, a feature to submit assignments online, online quiz session, 
	
	<a href="#linawati1survey">(Linawati, Wirastuti, and Sukadarmika, 2017)</a> and the features to analyze and evaluate students' performance. For interactivity, people prefer to join live streaming videos, webinars, online game sessions, interactive online programming, etc.

</p>
<p>Unfortunately, conventional web analytic does not measure up to how teachers examine or analyze students during face to face private tutors. Teachers normally able to examine students' attention, emotion, and motivation during studying in real-time, but conventional web analytic does not provide such features for online education. This reason is especially true for a very crucial educational activity which is examination. Security is very tight for face to face examinations to prevent dishonest behavior but this is not true for online examinations today. This is why most educational institute implements blended 
	
	<a href="#paturusi2012development">(Paturusi, Chisaki, and Usagawa, 2012)</a> learning which is a mixed face to face course and online course than implementing full online course. This applies to anything online, not only with education, for example during shopping, shop owners are able to identify the interest of their customers face to face and act accordingly. The simplest example people can see whether someone is skimming or pay close attention during reading when face to face. In online reading, people normally cannot know whether the viewer is actually reading the materials or not. An example crucial demand is reading detection of agreements or terms of services. Most people scrolls down and accept the terms of services without actually reading them.

</p>
<p>The lack of data for online analytic can actually be solved by eye tracking, mouse tracking, and all other online monitoring techniques in real-time. Although these techniques were introduced in the early 20th century, they are still rarely implemented. One of the main reasons is the huge data generated by these techniques which is too much for most administrators and analyzers to handle 
	
	<a href="#leiva2015building">(Leiva and Huang, 2015)</a>. This connects to the next reason that the previous applications only suit academia and does not suit wide implementation. For eye tracking is that the hardware are intrusive where users usually have to wear googles. Though non-intrusive ones exists but they are most likely expensive. Mouse tracking are non-intrusive and no cost because in default they are available in every computer where no additional hardware is needed. However, the previous application are only suited in laboratory where they are installed offline in each computer and not online. This thesis tackles that problem.

</p>
<h3 id="problem">1.2 Problem</h3>
<ol>
	<li>There are almost no application to monitor crucial online activities such examinations.</li>
	<li>Although there are rumors of huge data generated by mouse tracking, there are almost no facts and investigations.</li>
	<li>The rumors already discourage mouse tracking application development for public development and today's most mouse tracking application are only suitable for academia and laboratories.</li>
	<li>The huge data generated are inline to the resource required for implementation, thus methods for reducing data generation are necessary.</li>
</ol>
<h3 id="objective">1.3 Objective</h3>
<ol>
	<li>Create an online mouse tracking application that is easily implementable.</li>
	<li>Investigate the data generated and resource usage of the online mouse tracking application.</li>
	<li>Implement methods to reduce the data generated and resource usage of the online mouse tracking application.</li>
	<li>Use mouse tracking data to capture users' interaction with the web browser content and design a monitoring tool for crucial online activities which are examinations and passage reading.</li>
</ol>
<h3 id="hypothesis">1.4 Hypothesis</h3>
<p>This thesis proposes a new preprocessing based on demand method specifically for online mouse tracking. It is a method that allows the implementer to determine the data they need before implementation. Amongst those data, the geometrical data (x and y mouse coordinates) are the largest one generated. Most of the time, implementer do not need all the data. Therefore, the data generation along with resource usage can be reduced if they choose the region of interest beforehand. In summary, by summarizing the coordinates into areas, the data generated can be reduced which will also reduce the resource usage.</p>
<h3 id="contribution">1.5 Contribution</h3>
<ol>
	<li>Created an open source real-time online mouse tracking application that can be implemented on any website and browser.</li>
	<li>Investigated the data generated and resource usage of the real-time online mouse tracking application.</li>
	<li>A novel preprocessing based on demand method specifically for mouse tracking that reduces the data generation and resource usage.</li>
	<li>Implemented the mouse tracking application online and obtained mouse tracking data.</li>
	<li>Visualized the mouse tracking data and derive information which are usually underivable from conventional web logs and educational data.</li>
	<li>Designed a possible software implementation for monitoring online reading and examination.</li>
</ol>
<h3 id="benefitandsignificance">1.6 Benefit and Significance</h3>
<ol>
	<li>Mouse tracking is one of the missing key for anything that are implemented fully online.</li>
	<li>Anyone can benefit the open source real-time online mouse tracking application in this thesis to implement or further develop online mouse tracking.</li>
	<li>The mouse tracking data generation and resource usage investigation can help companies and other parties to plan before implementing online mouse tracking.</li>
	<li>The methods presented to reduce mouse tracking data generation and resource usage gives opportunity for people in limited connectivity area to utilize online mouse tracking.</li>
</ol>
<h3 id="thesisstructure">1.7 Thesis Structure</h3>
<p>Other than the introduction, this thesis contains four more chapters. The second chapter is online mouse tracking implementation and investigation where this chapter discusses the implementation of online mouse tracking in any website and browser, and the amount of data generated. The third chapter is online mouse tracking resource usage reduction methods where known methods, real-time implementation, and the novel method of preprocessing based on demand is discussed. The fourth chapter is the depth levels of web logs and educational data which emphasizes mouse tracking logs as deeper level data than conventional educational data logs. The last chapter is conclusion and future work.</p>
<h2 id="onlinemousetrackingimplementationandinvestigation">2 Online Mouse Tracking Implementation and Investigation</h2>
<h3 id="systemoverview">2.1 System Overview</h3>
<h4 id="mousetrackinginwebdevelopment">2.1.1 Mouse Tracking in Web Development</h4>
<p>Mouse tracking is a method to record the mouse activities of the users. Mainly, it records the clicks, movements, and scrolls location illustrated in Figure 
	
	<a href="#figmousetrackingillustration">2.1</a>. Mouse tracking can be developed on the desktop level or the application level. On the desktop level, mouse tracking tracks every mouse activities that occur on the desktop, while on the application level, mouse tracking only tracks activities in the application and will stop tracking when the mouse cursor leaves the application. In this thesis case, the application is the web where it is related to the browsers and websites. There are many programming languages such as C to develop desktop mouse tracking while to develop web based mouse tracking, web programming language such as JavaScript (JS) is used.

</p>
<figure id="figmousetrackingillustration">
	<img src="https://404store.com/2020/09/10/2.1.a.mstrilldesk.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmdZDU4Je1hWwXQSnc23sxqvZzpCbaAXAZD99ciSUpYZAn/2.1.a.mstrilldesk.png';" alt="https://file.army/i/B4Mm2Pp" />
	<img src="https://404store.com/2020/09/10/2.1.b.mstrillmbl-med.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmRoduv7nGnihYcgNhVProkBBDA3KScD49Wm6amF8MJgEa/2.1.b.mstrillmbl.jpg';" alt="https://file.army/i/B4MmcZK" />
	<figcaption>Figure 2.1 Mouse tracking illustration where the top image is from personal computer (PC) and bottom image is from smartphone tablet © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. Both the image shows geometrical data (x and y coordinate) of the occurred mouse, scroll, and touch event, also which mouse button is clicked, how much percentage of zoom applied, and whether a keyboard is pressed.
	
	</figcaption>
</figure>
<p>The core of mouse tracking in web development is Domain Object Model (DOM) which is an Application Programming Interface (API) for Hypertext Markup Language (HTML) and Cross Markup Language (XML). It defines the logical structure of documents and the way a document is accessed and manipulated. Supposed a simple HTML page with the codes on Table 
	
	<a href="#tabhello-world-html">2.1</a>, the DOM structure can be represented on Figure 
	
	<a href="#fighello-world-dom">2.2</a>. With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions. DOM is designed to be used with any programming language. Currently, it provides language bindings for Java and ECMAScript (an industry-standard scripting language based on JS and JScript) 
	
	<a href="#wood1998document">(Wood et al., 1998)</a>.

</p>
<p>Table 2.1 A web page code in simple HTML that contains html, head, title, body, p, and footer tags 
	
	<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>
</p>
<!-- HTML generated using hilite.me -->
<div id="tabhello-world-html" style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
	<pre style="margin: 0; line-height: 125%">
		<span style="color: #007700">&lt;html&gt;</span>
		<span style="color: #007700">&lt;head&gt;</span>
		<span style="color: #007700">&lt;title&gt;</span>Simple Webpage
		
		<span style="color: #007700">&lt;/title&gt;</span>
		<span style="color: #007700">&lt;/head&gt;</span>
		<span style="color: #007700">&lt;body&gt;</span>
		<span style="color: #007700">&lt;p&gt;</span>Hello World!
		
		<span style="color: #007700">&lt;/p&gt;</span>
		<span style="color: #007700">&lt;/body&gt;</span>
		<span style="color: #007700">&lt;footer&gt;</span>
		<span style="color: #007700">&lt;p&gt;</span>CC
		
		<span style="color: #007700">&lt;/p&gt;</span>
		<span style="color: #007700">&lt;/footer&gt;</span>
		<span style="color: #007700">&lt;/html&gt;</span>
	</pre>
</div>
<figure id="fighello-world-dom">
	<img src="https://404store.com/2020/09/10/2.2.htmldom.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmT7VqrBoHM68p1ZZyyNqc5SvK9qherKGvtzLXZ9ZKC3L9/2.2.htmldom.png';" alt="https://file.army/i/B4Mm5FD" />
	<figcaption>Figure 2.2 DOM representation of Table 
		
		<a href="#tabhello-world-html">2.1</a>
		<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>. The html tag is the parent with head, body, and footer tag as the children. Head has a child tag title, body has a child tag p, and footer has a child tag p.
	
	</figcaption>
</figure>
<p>The implementation of mouse tracking is based on DOM events, specifically mouse, touch, and User Interface (UI) events which are actions that occur as a result of the user's mouse actions or as a result of state change of the user interface or elements of a DOM tree 
	
	<a href="#pixley2000document">(Pixley et al., 2000)</a>. In this thesis jQuery is used to access the DOM API and receive information that are related to mouse, touch, and UI events. The following list shows the mouse events utilized in this thesis:

</p>
<ul>
	<li>Mousedown: when either one of the mouse buttons are pressed (usually left, middle, or right button)</li>
	<li>Mouseup: when either pressed mouse buttons are released</li>
	<li>Mousemove: when the mouse cursor moves</li>
	<li>Mouseleave: when the mouse leaves an element (we only indicate when temporary leaving a webpage)</li>
	<li>Mouseenter: when the mouse enters an element (we only indicate when temporary entering a webpage)</li>
	<li>Scroll: when the webpage scrolls</li>
	<li>Touchstart: when a computer device screen is touching</li>
	<li>Touchend: when a touch from touchstart is removed</li>
	<li>Touchmove: when a touch is moving</li>
	<li>Touchcancel: when a touch is interrupted</li>
	<li>Resize: when the webpage is zoomed in or out</li>
</ul>
<p>There are many DOM events that are not implemented by the application in this thesis. However, they maybe implemented in the future if they are found to be useful. But for now, the following DOM events other than mouse events are worth considering and are implemented:</p>
<ul>
	<li>Beforeunload: when the webpage almost closes</li>
	<li>Resize: when the webpage is zoomed in or out</li>
	<li>keypress: when a keyboard is pressed</li>
	<li>cut: when the user attempts to cut a content</li>
	<li>copy: when the user attempts to copy a content</li>
	<li>paste: when the user attempts to paste a content</li>
	<li>dblclick: when a double click is performed</li>
	<li>auxiliarymenu: when a right click menu is called</li>
</ul>
<p>After implementing the DOM events, the information is processed by adding important labels. The first labels are time information such as the date of the received information and duration by calculating the difference between the current and previous received events. The second labels are the place information such as the category, page, post, course, course content, or if those information are not available then the default information is the Uniform Resource Locator (URL). More in-dept place information are the areas or sections of the page, and the deepest of them all are the coordinates of the page. The third label is the identity label if available and permitted such as the name, email address, ip address, and location of the user.</p>
<h4 id="onlinemousetrackingsystem">2.1.2 Online Mouse Tracking System</h4>
<p>The author developed an online mouse tracking application implementable on any website where the code is open source on GitHub 
	
	<a href="#purnama2019github">(Purnama, 2019)</a>. It is written in HTML, Cascading Style Sheets (CSS), JS, jQuery, and PHP. The mouse tracking code can either be implemented on client side shown on Figure 
	
	<a href="#figmsbrwsrplgn">2.3</a> or server side shown on Figure 
	
	<a href="#figmsmdlplgn">2.4</a>. The difference is that the client side can capture anything including all the web page that the user visits while the server side can only capture the events that happen on the server's website.

</p>
<figure id="figmsbrwsrplgn">
	<img src="https://404store.com/2020/09/10/2.3.msbrwsrplgn.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQma7EWVoSeXKQEsNThkbi7Kiv9K8XJZGEMzgsFLyPLJtxa/2.3.msbrwsrplgn.png';" alt="https://file.army/i/B4MmNNQ" />
	<figcaption>Figure 2.3 Mouse Tracking Chrome extension © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The mouse tracking extension is visible on the extension bar. The user can open the configuration window by clicking the icon and configuration. the events (clicks, moves, scrolls) to record.
	
	</figcaption>
</figure>
<figure id="figmsmdlplgn">
	<img src="https://404store.com/2020/09/10/2.4.msmdlplgn.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZuZ1qstBp6nqmtUH77igfhjhADBYsorCXzeHi7rF5eLq/2.4.msmdlplgn.png';" alt="https://file.army/i/B4MmgKY" />
	<figcaption>Figure 2.4 Mouse Tracking Plugin on Moodle © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The figure shows examples of mouse tracking implemented as a block plugin (in blue) and theme plugin (in red).
	
	</figcaption>
</figure>
<p>Figure 
	
	<a href="#figonlinemssys">2.5</a> shows a more detailed server side implementation. The mouse, touch, and UI DOM events in the previous subsection are written in JS and jQuery and are placed on the representation side which is the website along with the HTML and CSS. The order the online mouse tracking in Figure 
	
	<a href="#figonlinemssys">2.5</a> are:

</p>
<ol>
	<li>The browser attempts to visit the website by requesting HTML, CSS, and JS. If the mouse tracking is written as a server application, then the code is in the JS section, otherwise it is directly installed on the client. The code is written in jQuery.</li>
	<li>The HTML, CSS, and JS are sent to the client.</li>
	<li>The browser renders the page by processing the HTML and CSS.</li>
	<li>JS and jQuery are often categorized as client side programming language. They run on the browser's background where in this case the mouse tracking is running on the background.</li>
	<li>What differentiates offline and online mouse tracking is the location of where the mouse tracking log is stored. Offline mouse tracking stores the logs on the client while online mouse tracking stores the logs on online server. When storing mouse tracking log online, the client side sends the log using Hypertext Transport Protocol (HTTP) post method.</li>
	<li>The server processes the received log usually using server side programming language such as PHP.</li>
	<li>The log can be stored as a file, in a database, or in any form of storage.</li>
</ol>
<figure id="figonlinemssys">
	<img src="https://404store.com/2020/09/10/2.5.onlinemssys.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmU5Esxwht36kk2xJbudzPBnt8xT8DGDm5J7i6YHwkLGaU/2.5.onlinemssys.png';" alt="https://file.army/i/B4MmqQa" />
	<figcaption>Figure 2.5 Online Mouse Tracking Framework © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The Framework is divided into two sides where one side is the client and the other side is the server. The client and the server are connected via the Internet. The server contains the front end, which is usually the representation side of the website, and back end where background processing and data storing occurs. There is a browser on the client equipped with client-side programming. The arrow presents the direction of the processes and the number presents the order of the processes.
	
	</figcaption>
</figure>
<p>For the client side does not require high performance hardware even Raspberry Pi works. As for the operating system, any operating system will do for as long as it has a browser that can run JavaScript. The application developed in this thesis supports both offline and online log storage and can either be in form of a file or stored in a database application. For the client application, this thesis provides a browser extension. Although that it requires installation in each client, all browser activities including visiting other websites are tracked. The author bundled the mouse tracking browser extension codes to make the installation easier where the client only needed to download and install.</p>
<p>For the server application, the advantage is that client does not need to install additional application, just browse the website and mouse tracking runs automatically but the disadvantage is that it cannot track outside of the website however it can still tell whether users' are leaving the page or not. For the server hardware depends on the amount of users that the administrators want to handle and as for the hardware specification used in this thesis is discussed on the next section. For the software, a standard web server is enough such as a server equipped with Apache2, PHP, and MySQL. For the installation, the author made it easy that all that are needed are to download the codes and install. In this thesis, the mouse tracking server application was implemented on an Learning Management System (LMS) called Moodle which is used to handle online courses. The mouse tracking codes are rearranged as a Moodle plugin where the author made a block and theme plugin for the Moodle shown on Figure 
	
	<a href="#figmsmdlplgn">2.4</a>. For usage, online choose one form of the plugin, either block or theme. The installation is also easy shown on Figure 
	
	<a href="#figplugininstall">2.6</a> where the process are only download, upload the plugin to Moodle, and install.

</p>
<figure id="figplugininstall">
	<img src="https://404store.com/2020/09/10/2.6.plugin-install.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmPcymsqdXrvoSsccELDVBUaohuWXhKxDv5Mz7GZrNJ7qZ/2.6.plugin-install.png';" alt="https://file.army/i/B4MmtbL" />
	<figcaption>Figure 2.6 Screenshot and illustration of installing mouse tracking Moodle plugin. The page shows Moodle plugin installation page and the .zip image symbol represents the mouse tracking Moodle plugin in .zip format.</figcaption>
</figure>
<h4 id="onlinemousetrackingsystem">2.1.3 Privacy Policies</h4>
<p>Privacy policies should be disclosed to the users during any form of data gathering. In the European Union (EU) is more strict that cookie policies should be separated from the privacy policies. By disclosing privacy policies, not only being in compliance with the laws and regulations, but build trusts with the users as well 
	
	<a href="#privacypolicies">(PrivacyPolicies.com, 2020)</a>.

</p>
<p>Based on how mouse tracking is executed which more details are illustrated in Figure 
	
	<a href="#figonlinemssys">2.5</a>, users actually have full control over the mouse tracking process and they can stop the process anytime but they are usually unaware because the mouse tracking runs in the background. They would have to thoroughly inspect the background area to see the running mouse tracking and most users do not attempt to perform this task because they do not feel bothered by the process. This is the reason why mouse tracking is considered non-intrusive.

</p>
<p>Another reason why most users do not attempt to inspect the background area to see the running mouse tracking is because this requires technical skills that most users do not possess. Therefore, they are usually not aware that their data regarding to mouse, touch, and UI activities are recorded. To be in compliance with the privacy policy in general public websites, mouse tracking data gathered should be disclosed. The method is to pop up a mouse tracking configuration menu and before that, a notification menu asking permission to the user whether they allow the recording or not illustrated on Figure 
	
	<a href="#figprivacypolicy">2.7</a>. If they allow then the options on the configuration menu should be marked and if they do not allow then the the options should be unmarked and no mouse tracking runs. In the educational sector depends on the academy/college/school/university and the lecturer/professor/teacher. Most of the time, the students are forced into compliance in having their activities recorded because of the demand to handle crucial educational activities such as preventing dishonest behaviors during exams.

</p>
<figure id="figprivacypolicy">
	<img src="https://404store.com/2020/09/10/2.7.privacy-policy.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmdHyieVkR3Vqn1U57xn6rDbqq8oGzhZdTsQ5rDMpcVGkV/2.7.privacy-policy.jpg';" alt="https://file.army/i/B4MmP79" />
	<figcaption>Figure 2.7 The left image shows public privacy policy compliance illustration and the right image shows an agreement example between student and teacher about the recording of mouse tracking data for crucial educational activities.</figcaption>
</figure>
<h3 id="networkdatatransmittedbyoneclick">2.2 Network Data Transmitted by One Click</h3>
<p>
	<a href="#leiva2015building">Leiva and Huang, 2015</a> stated that a mouse swipe from left to right can generate hundreds of cursor coordinates and a mouse activity over a minute can generate 1 MB (megabyte) of data. 
	
	<a href="#huang2011no">Huang, White, and Dumais, 2011</a> conducted a massive scale mouse tracking on Microsoft’s Bing search engine but in the middle of the experiment, they have to reduce the sampling rate because the data size was simply too much. Those two references are the only scientific record found that complains about the problem of huge data generated by mouse tracking. This shows that data generated and the resource usage are not officially investigated. Therefore, an implementation followed by investigation were conducted by 
	
	<a href="#fpeit">Purnama et al., 2020b</a>.

</p>
<h4 id="peertopeerexperiment">2.2.1 Peer to Peer Experiment</h4>
<p>The one click Peer-to-Peer (P2P) experiment is an experiment that measures the amount of data transmitted from the client to server when the user performs one click shown on Figure 
	
	<a href="#fig1clkp2p">2.8</a>. This experiment greatly helps the investigation because the result can be used to predict the data cost mathematically. However, the result is dependent on the application, as time passes people may find ways to reduce the data.

</p>
<figure id="fig1clkp2p">
	<img src="https://404store.com/2020/09/10/2.8.1clkp2p.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmVczeLJvh5RC6XEU6zP5ESiBqcLrHC824uCosQkhvnbHR/2.8.1clkp2p.png';" alt="https://file.army/i/B4MmUlo" />
	<figcaption>Figure 2.8 P2P real-time mouse tracking experiment © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The right laptop has a Moodle server installed with mouse tracking codes, while the left laptop has Ubuntu Desktop OS installed. The role of the latter is to access the Moodle server on the right laptop using a browser and perform one click. The right laptop received the click event and stored it on the database while measuring the network cost of the click event.
	
	</figcaption>
</figure>
<p>The online mouse tracking application was installed on the author’s Moodle server. The resource costs were then measured. The data rate of the network was measured using a tool called Wireshark. The server is an Ubuntu 18.04 Long Term Service (LTS) server equipped with an Intel(R) Core(TM) i7-6800K Central Processing Unit (CPU) @ 3.40 Giga Hertz (GHz) (with SSE4.2) CPU, 32 Giga Byte (GB) of DDR4 Random Access Memory (RAM), 10 Tera Byte (TB) of hard drive, and an allocated 2 Mega Byte per second (MBps) network.</p>
<h4 id="datagenerationestimationforimplementationplan">2.2.2 Data Generation Estimation for Implementation Plan</h4>
<p>The result on Table 
	
	<a href="#tableresourceoneevent">2.2</a> showed that one click generates around 3-4 kilo Byte (kB) of transmission data. In other words, the mouse tracking application generates around 3-4 kB when one event occurs. The size depends on the metadata where in this case the size greatly increases when date and URL are included because they contain many characters.

</p>
<table id="tableresourceoneevent">
	<caption>Table 2.2 The data generated of one click posted to the server © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The rows before the last row are the types of information, and the last row shows the data rate of the submitted post 
		
		<a href="#implementationrealtimeonlinemousetracking">(Purnama et al., 2020a)</a>.
	
	</caption>
	<thead>
		<tr>
			<th>NO</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
			<th>✓</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>ID</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Name</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Email</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>X</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Y</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>leftclick</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>rightclick</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>middleclick</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>keyboardtype</td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>scrollx</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>scrolly</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>zoom</td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>touch</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>touchmove</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>tab</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>duration</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>date</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>content url</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>windowsheight</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>windowswidth</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>screenheight</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>screenwidth</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>data rate (kB)</td>
			<td>3.11</td>
			<td>3.14</td>
			<td>3.14</td>
			<td>3.2</td>
			<td>3.2</td>
			<td>3.22</td>
			<td>3.25</td>
			<td>3.29</td>
			<td>3.43</td>
			<td>3.56</td>
			<td>3.64</td>
			<td>3.72</td>
		</tr>
	</tbody>
</table>
<p>If the administrator can estimate the amount of users and the average amount of events generated by users, then the administrator can estimate the amount of data to be generated. 
	
	<a href="#rheem2018use">Rheem, Verma, and Becker, 2018</a> states that a very high activity is around 70 events per second. Based on Figure 
	
	<a href="#figplotdatarateone">2.9</a>, expect a worst case scenario that a user generates a data rate of 210-280 kilo Byte per second (kBps).

</p>
<figure id="figplotdatarateone">
	<img src="https://404store.com/2020/09/10/2.9.plotdatarateone.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmab3tn9qURGBGNb3yuyXQ9qt3cmWtHyizWDndQ84Wzixf/2.9.plotdatarateone.png';" alt="https://file.army/i/B4MmimE" />
	<figcaption>Figure 2.9 A plot of data rate generated by a user based on the events generated per second © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The horizontal axis represents the events per second or frequency in Hertz (Hz) and the vertical axis represents the data rate in kilobytes per second. The different colored lines represent the number of variables included (refer to Table 
		
		<a href="#tableresourceoneevent">2.2</a>).
	
	</figcaption>
</figure>
<h3 id="overseasonlinemousetrackingimplementation">2.3 Overseas Online Mouse Tracking Implementation</h3>
<h4 id="quizdetails">2.3.1 Quiz Details</h4>
<p>An online quiz session was conducted on the 3rd of January 2019 between approximately 12:00 and 14:30 Japan standard time. There were 2 sessions, with each session lasting approximately an hour and including 20 and 21 students (41 total students participating) from the School of Engineering and Applied Sciences, National University of Mongolia accessing the Moodle server at the Human Interface and Cyber Communication Laboratory, Kumamoto University. The map illustration is shown on Figure 
	
	<a href="#figmsmngljpmap">2.10</a>.

</p>
<figure id="figmsmngljpmap">
	<img src="https://404store.com/2020/09/10/2.10.msmngljpmap.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmYhea2ShgfWPvQwSvDip8whbiRRBpB1ChE6Wm6P98ikiZ/2.10.msmngljpmap.png';" alt="https://file.army/i/B4MmjPU" />
	<figcaption>Figure 2.10 Overseas real-time online mouse tracking implementation © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. Forty-one clients from the National University of Mongolia, separated into two groups, accessed the Moodle server at Kumamoto University in turns through the Internet and participated in a ten-question quiz session while mouse and keyboard activities were recorded. The Moodle server also measured the resource costs.
	
	</figcaption>
</figure>
<p>The quiz is a part of a mid-term exam of Microprocessor and Interfacing Techniques course for sophomore and junior year students in Department of Electronics and Communication Engineering, National University of Mongolia. The quiz is on https://md.hicc.cs.kumamoto-u.ac.jp. Figure 
	
	<a href="#figmoodlelog">2.11</a> shows a screenshot of the Moodle log file and Figure 
	
	<a href="#figmoodlegrade">2.12</a> shows a screenshot of students grade of the quiz session. The detailed anonymous log files are published in Mendeley Data 
	
	<a href="#implementationrealtimeonlinemousetracking">(Purnama et al., 2020a)</a>. The internet protocol (IP) address of the students for example “119.40.99.53” can be tracked by geo-location that it originates from Mongolia and “https://md.hicc.cs.kumamoto-u.ac.jp” which can be nslookup as “133.95.104.1” originates from Japan.

</p>
<figure id="figmoodlelog">
	<img src="https://404store.com/2020/09/10/2.11.moodlelog.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmb485Syw8nc2L7GxSogqjkdSVUptbsZWoAZLo1bFPmb5n/2.11.moodlelog.png';" alt="https://file.army/i/B4Mo9Z3" />
	<figcaption>Figure 2.11 Screenshot of moodle log of students from National University of Mongolia who attempted a quiz session on a Moodle server at Kumamoto University © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</figcaption>
</figure>
<figure id="figmoodlegrade">
	<img src="https://404store.com/2020/09/10/2.12.moodlegrade.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmVJu3FNaPLzpVmB7YRawEw53cSSDXJmqN1tKpekkGmcWZ/2.12.moodlegrade.png';" alt="https://file.army/i/B4MoBdZ" />
	<figcaption>Figure 2.12 Screenshot of moodle grade of students from National University of Mongolia who attempted a quiz session on a Moodle server at Kumamoto University © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</figcaption>
</figure>
<h4 id="amountofdatagenerated">2.3.2 Amount of Data Generated</h4>
<p>The screenshot of mouse tracking log can be seen in Figure 
	
	<a href="#figmslogscrnsht">2.13</a>. Based on the data shared in Mendeley 
	
	<a href="#implementationrealtimeonlinemousetracking">(Purnama et al., 2020a)</a>, the majority of the events are mouse movements and scrolls. That is because each change that occurred in either on the mouse cursor or scroll positions are captured. Rapid mouse movements or scrolls will generate large amount of data and how much depends on the capabilities of the computer. Theoretically, if the mouse cursor travels a distance of 1000 pixels than the number of mouse movement events generated are 1000, and if the scroll distance from top to bottom is 1000 pixels than the number of scroll events generated are 1000. In short, the capturing of geometrical data which is the x and y coordinates of the mouse cursor and scroll is the cause of the huge data generation. Also, the affect is multiplied to the amount of labels attached such as the user's identity that did the events, the place, and the time of the event occurrences. Just removing the URL label can save a lot of data space.

</p>
<figure id="figmslogscrnsht">
	<img src="https://404store.com/2020/09/10/2.13.mslogscrnsht.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmcqFwUrTtBPMRJuF5t3tLbDidit25NRAygGYFDTxDiH1g/2.13.mslogscrnsht.png';" alt="https://file.army/i/B4Mo7Nq" />
	<figcaption>Figure 2.13 Screenshot of mouse tracking data of students from National University of Mongolia who attempted a quiz session on a Moodle server at Kumamoto University © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</figcaption>
</figure>
<p>During the quiz session, Figure 
	
	<a href="#figoverseaseventamtestdnt">2.14</a> shows that a student is capable of generating a total over 20000 events which is over 80 Mega Byte (MB) transmission data. This means that student had to upload 80 MB of data at the end of the student's mouse tracking session in each page. According to 
	
	<a href="#speedtestnet">Ookla, 2020</a> the global average network speed is 9.3 MBps downlink and 3.9 MBps uplink. This means there exist countries with the average network speed below that. Although nowadays are common for university size institutions to have network speed over 100 MBps, those resources are usually already allocated for many things. For example, the author's laboratory was only given 2 MBps network speed, meaning the mouse tracking session can flood the network. This explains why administrators are reluctant in implementing online mouse tracking. Imagine how much data can be generated if online mouse tracking is implemented by the whole university daily and full time.

</p>
<figure id="figoverseaseventamtestdnt">
	<img src="https://404store.com/2020/09/10/2.14.eventamtestdnt.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmbkYxbAjLswMwiQKCMVA4L7p2efHfMKxhLvRaqpEoBYKo/2.14.eventamtestdnt.png';" alt="https://file.army/i/B4MoYKF" />
	<figcaption>Figure 2.14 Total query/rows/events generated by each students during mouse tracking implementation between National University of Mongolia and Kumamoto University and its estimated total data transmission size © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>. The horizontal axis represents individual students, primary vertical axis is the query/rows/events, and secondary vertical axis is the estimated data transmission size.
	
	</figcaption>
</figure>
<p>The amount of mouse tracking data compared to page view and other conventional web analytic were almost incomparable. Table 
	
	<a href="#tablogcomparison">2.3</a> shows that the moodle log and grade of the quiz session were only a few kilobytes while mouse tracking log is already over a hundred megabytes. In that table is also shown other logs that required long duration and many users to reach the amount of data that mouse tracking log has. While a few hard drive storage are enough to store conventional web and educational logs, many more hard drive storage are needed to store mouse tracking logs.

</p>
<table id="tablogcomparison">
	<caption>Table 2.3 Comparison of mouse tracking data size to daily pageview, Moodle log and grades, Nasa server log 1995, Open University learning analytics dataset, and HarvardX Person-Course 2013 © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</caption>
	<thead>
		<tr>
			<th>Log File</th>
			<th>Duration</th>
			<th>Students</th>
			<th>Size</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Daily Pageview City Archive</td>
			<td>2 Month</td>
			<td>-</td>
			<td>13 kB</td>
		</tr>
		<tr>
			<td>Moodle Log and Grades</td>
			<td>3h 30min</td>
			<td>41</td>
			<td>191 kB</td>
		</tr>
		<tr>
			<td>Mouse Tracking</td>
			<td>3h 30min</td>
			<td>41</td>
			<td>122 MB</td>
		</tr>
		<tr>
			<td>Nasa Server Log 1995</td>
			<td>23 days</td>
			<td>-</td>
			<td>153 MB</td>
		</tr>
		<tr>
			<td>Open University Learning Analytics</td>
			<td>1 Year</td>
			<td>32593</td>
			<td>442 MB</td>
		</tr>
		<tr>
			<td>HarvardX Person-Course 2013</td>
			<td>1 Year</td>
			<td>301609</td>
			<td>33.8 MB</td>
		</tr>
	</tbody>
</table>
<h2 id="onlinemousetrackingresourcesavingmethods">3 Online Mouse Tracking Resource Saving Methods</h2>
<p>It is unfortunate that the online mouse tracking resource usages are too much for regular people to implement daily and full time except for special occasions only such as examinations. The ones who can implement online mouse tracking daily and full time are big institutions such as Amazon and Google. Therefore, on this chapter is discussed the novel method of this thesis to reduce the resource usage of online mouse tracking.</p>
<h3 id="existingmethods">3.1 Existing Methods</h3>
<p>Existing methods to reduce mouse tracking data transmission are common sense and popular methods where most of them were discussed by 
	
	<a href="#fpeit">Purnama et al., 2020b</a>. They are:

</p>
<ul>
	<li>
		<b>Redundant data reduction</b> which is mostly about reducing meta data such as shorting date format, shorting URL, avoiding duplicate or repetitive data, and exclude information deemed unnecessary.
	
	</li>
	<li>
		<b>Sampling rate reduction</b> which is adding delay to the event capturing. The default is to capture immediately such as every time the mouse cursor and scroll moves even if they are only by one pixel point while with sampling rate reduction, there are pauses in the capturing process for example every 50 milliseconds, 1 seconds, 2 seconds, etc. where the longer the interval the more the data reduction but at the cost of data resolution.
	
	</li>
	<li>
		<b>Adaptive sampling</b> where the application does not capture if the mouse cursor and scroll are idle, unlike usual eye tracking where the eye gazes are capture every certain interval even though the gaze's position does not change.
	
	</li>
	<li>
		<b>Compression methods</b> which were researched by 
		
		<a href="#leiva2015building">Leiva and Huang, 2015</a> and 
		
		<a href="#martin2016strokes">Martín-Albo et al., 2016</a>.
	
	</li>
</ul>
<h3 id="real-timeonlinemousetracking">3.2 Real-Time Online Mouse Tracking</h3>
<p>The conventional data transmission method is to transmit the data as a single package at the end of each mouse tracking session. Based on Figure 
	
	<a href="#figoverseaseventamtestdnt">2.14</a>, this conventional transmission method floods the 2 MBps network. The author anticipated this and implemented real-time transmission 
	
	<a href="#fpeit">(Purnama et al., 2020b)</a> method avoiding often 2 MBps flood which was reduced to data rate of average around 100 kBps. Although the average data rate is 100 kBps, Figure 
	
	<a href="#figoverseasdatarate">3.1</a> shows many spikes where the difference between average and maximum is large which indicates that there were moments of high activities. The highest spike is around 800 kBps. The spikes are not only pointing upward but pointing downward as well which indicates that there are also moments of low activities. Overall, the standard deviation is high where there were times when activities were high and activities were low, thus precise data usage can be difficult to predict.

</p>
<figure id="figoverseasdatarate">
	<img src="https://404store.com/2020/09/10/3.1.datarate10min.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmYCWbPaDhmaPL3wVDrcbXr3G8QS1KcYbkgfFrCFfCkTZr/3.1.datarate10min.png';" alt="https://file.army/i/B4MozXe" />
	<figcaption>Figure 3.1 Data rate during mouse tracking implementation between National University of Mongolia and Kumamoto University. The horizontal axis represents 10 minute interval time and the vertical axis represents the data rate in kilobytes per second. The yellow horizontal line shows the average and the vertical lines shows the minimum and maximum during their respective interval © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</figcaption>
</figure>
<p>The difference between offline mouse tracking, online mouse tracking, and real-time online mouse tracking can be described on Figure 
	
	<a href="#figmsflowchart">3.2</a>. While offline mouse tracking stores the data in each of the users' computers, online mouse tracking transmits the data to the server. While conventional online mouse tracking stacks the data until the end of every session before transmitting as a single package, real-time online mouse tracking transmits the data immediately after an event occurs every time. Real-time online mouse tracking helps in reducing the probability of bottleneck as illustrated on Figure 
	
	<a href="#figmsflowchart">3.3</a>. This helps to balance the transmission load.

</p>
<figure id="figmsflowchart">
	<img src="https://404store.com/2020/09/10/3.2.msflowchart.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZBrRnRD71n8udPrcmXXhnHc9CqjN7b7LeNWTmtyMPUYJ/3.2.msflowchart.png';" alt="https://file.army/i/B4Mo4b5" />
	<figcaption>Figure 3.2 Flowchart of mouse tracking © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>: offline (left), online (middle), real-time and online (right).
	
	</figcaption>
</figure>
<figure id="figfloodednetwork">
	<img src="https://404store.com/2020/09/10/3.3.bottleneck.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmPwVi5SSgBeRdqeuBGK9B4iu5c1RmobRULqrJN2oVT3qC/3.3.bottleneck.png';" alt="https://file.army/i/B4MoK7A" />
	<figcaption>Figure 3.3 Illustration of bottleneck network in regular online mouse tracking and real-time online mouse tracking as a solution © 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</figcaption>
</figure>
<h3 id="lossyonlinemousetracking">3.3 Lossy Online Mouse Tracking</h3>
<h4 id="threemousetrackingpreprocessingandtransmissionmethod">3.3.1 Three Mouse Tracking Preprocessing and Transmission Method</h4>
<p>In the end of Chapter 2, it is known that the capturing of geometrical data which are the x and y coordinates of the occurred events and the time stamping of each events are the largest contribution to the data size. If the geometrical data can be reduced then the data size can be reduced as well. Based on many example mouse tracking data analysis, there are three possible cases illustrated on Figure 
	
	<a href="#figSingle-Page-vs-Region-of-Interest-vs-Default-Mouse-Tracking-Illustration">3.4</a>:

</p>
<figure id="figSingle-Page-vs-Region-of-Interest-vs-Default-Mouse-Tracking-Illustration">
	<img src="https://404store.com/2020/09/10/3.4.3mstr.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmYz4x6SA2PdamLFn6iJJaaQZQ4aHx498gLs7fLcxNYwSt/3.4.3mstr.png';" alt="https://file.army/i/B4MoRG4" />
	<figcaption>Figure 3.4 Whole page vs region of interest vs default mouse tracking illustration. The left scroll illustrates summarized event amount that summarizes the number of events occurring on the whole page; the middle scroll illustrates ROI tracking that summarizes the number of events occurring in defined areas, and the right scroll illustrates default mouse tracking that records every event and the precise point where it occurs, forming a trajectory.</figcaption>
</figure>
<ol>
	<li>
		<b>Default mouse tracking</b> which is using all of the geometrical data when and where every events that occurred at each coordinate. An example of data visualization that can be generated by default mouse tracking is mouse trajectories and if the time is recorded as well, a video replay of the mouse trajectory can be generated.
	
	</li>
	<li>
		<b>Summarized event amount</b> which is not using any geometrical data where only the event amounts are captured not knowing when and where they occurred. Currently only the amounts of duration, mouse clicks, mouse movements, mouse scrolls, zooms, and keyboard typed of each session are captured, sacrificing the position and time information of these occurred events.
	
	</li>
	<li>
		<b>Region of interest (ROI) mouse tracking</b> which is using only selected geometrical data where the coordinates are summarized into selected areas. In other words, the mouse tracking is no longer able to identify the coordinates but only get the activity heatmap of the area. Currently the amounts of duration, mouse clicks, mouse movements, mouse scrolls, zooms, and keyboard typed of each session are captured on header, footer, navigation menu, and each of the quiz question area, sacrificing the exact coordinate information of each events. This method is actually a continuation based on previous work by 
		
		<a href="#purnama2016introductory">Purnama et al., 2016</a> and 
		
		<a href="#purnama2016demonstration">Purnama, Fungai, and Usagawa, 2016</a>.
	
	</li>
</ol>
<p>By knowing the geometrical data that the analysers wants, the storage and transmission cost can be reduced by applying preprocessing and modifying the transmission method based on Figure 
	
	<a href="#figthree-type-mouse-tracking-flowchart">3.5</a>. The default one is the real-time online mouse tracking where the event information is immediately sent to the server at the moment it occurred. For the summarized event amount, only the amounts of events are recorded excluding the place and time of occurrence. It is discouraged to update the event amount in real-time because that will cost data on the network. Instead, it is best to utilize the conventional transmission method where the final event amount value is sent only once at the end of each session (refer to Figure 
	
	<a href="#figmsflowchart">3.2</a> online mouse tracking transmission not in real-time). Unfortunately, there are still some potential problems to this conventional transmission method implementation where if the user ends the session in haste, the time may not be enough to retrieve the mouse tracking from the client to the server and potentially losing the data. For ROI mouse tracking, the amount of events are accumulated when the mouse cursor is still within a specific area. When the mouse cursor moves to a new area, the event amount information of the previous area is sent to the server, and the process repeats. There is still a limit in determining and labelling web page areas. Usually, it is done manually by the analyzers but this way is very labor and time consuming. It is possible to determine and label areas automatically using offset DOM event, but not in a smart way where it depends on the layout of the web page. After the areas are determined for the ROI mouse tracking, the transmission method is a hybrid of conventional and real-time where the mouse cursor enters an area and accumulates the event amounts, then the result is transmitted after the mouse cursor leaves the area, and the process repeats upon entering a new area.

</p>
<figure id="figthree-type-mouse-tracking-flowchart">
	<img src="https://404store.com/2020/09/10/3.5.3msflowchart.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmWgVVHwh6w6RHwXnFoJ2S1NWK2rjmWgh2kH6FDiVrJFKk/3.5.3msflowchart.png';" alt="https://file.army/i/B4Moemn" />
	<figcaption>Figure 3.5 Three Types of Mouse Tracking Flowchart. The left flowchart is default mouse tracking, the middle flowchart is summarized event amount, and the right flowchart is region of interest mouse tracking 
		
		<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>.
	
	</figcaption>
</figure>
<h4 id="threemousetrackingpreprocessingandtransmissionsimulations">3.3.2 Three Mouse Tracking Preprocessing and Transmission Simulations</h4>
<p>Since the author did not have another mouse tracking experiment opportunity, a simulation is conducted based on the previous mouse tracking experiment on Figure 
	
	<a href="#figp2pmssimsbc">3.6</a>. It is possible to replay the scenario because the date of each events during the mouse tracking session was captured. However, there was a limit at that time that half of the students are using different time zone format which was difficult to simulate and half of the students are excluded leaving only 23 students.

</p>
<figure id="figp2pmssimsbc">
	<img src="https://404store.com/2020/09/10/3.6.p2p-mssim-sbc.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmVjdhrpUoQWno17Jpt4ZY5ANv8tsiVuHPpsmoHTdLdvcB/3.6.p2p-mssim-sbc.jpg';" alt="https://file.army/i/B4MoxU1" />
	<figcaption>Figure 3.6 In 
		
		<a href="#purnama2020using">Purnama and Usagawa, 2020</a> the simulation is based on Figure 
		
		<a href="#figmsmngljpmap">2.10</a>. In this thesis, the server is changed to single board computer Raspberry Pi 3. The reason is to support regions with limited connectivity in Figure 
		
		<a href="#fighcsrp3">3.7</a>.
	
	</figcaption>
</figure>
<p>Additionally in this thesis, the author simulate the mouse tracking on a single board computer Raspberry Pi 3 to sympathize with those that are in limited connectivity region where the method of mouse tracking quiz session is locally illustrated in Figure 
	
	<a href="#fighcsrp3">3.7</a>. Also, it is interesting to see how much the Raspberry Pi 3 can handle mouse tracking simulation in terms of CPU and RAM.

</p>
<figure id="fighcsrp3">
	<img src="https://404store.com/2020/09/10/3.7.Hand-Carry-Server-Data-Collecting-Illustration.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmeSRhUbmAX28bBXwoGhqMYSxVu8UxsGzdCYKLvTETw38U/3.7.Hand-Carry-Server-Data-Collecting-Illustration.png';" alt="https://file.army/i/B4MoSu7" />
	<figcaption>Figure 3.7 Even though the ownership of computer and mobile devices increase drastically, the pace of Internet penetration may not be as fast. Those who are in limited connectivity region may not be able to enjoy online quizzes, let alone mouse tracking. Therefore 
		
		<a href="#imlf2017">Purnama et al.,  2017</a> offers a hand carry server solution where the students' computer devices can connect to the teachers' single board computer server that runs quiz and mouse and touch tracking.
	
	</figcaption>
</figure>
<p>Five mouse tracking simulations are performed on a quiz page with a size or dimension of 1920x1080 pixels:</p>
<ol>
	<li>Default mouse tracking simulation without changes in the original mouse tracking data.</li>
	<li>ROI mouse tracking where the coordinates are summarized into certain areas for each users. The summarising is based on the flow of time domain where a query based on the summarized coordinates is generated every time a user leaves an area and not a total summary of each area where more information can be found on Appendix 
		
		<a href="#appendixadata">A</a>:
        
		
		<ul>
			<li>ROI mouse tracking 1 where the coordinates are summarized into 50 areas which consists of header, title, quiz navigation, navigation, administration, footer, each quiz flags, each quiz questions, each quiz answers, and blank areas.</li>
			<li>ROI mouse tracking 2 where the coordinates are summarized into 35 areas where the quiz questions and answers each are summarized or combined.</li>
			<li>ROI mouse tracking 3 where the coordinates are summarized into 20 areas where the each quiz flags are summarized or combined to their respective quiz areas.</li>
		</ul>
	</li>
	<li>Summarize amount of events mouse tracking simulation where the data is transformed by summarizing the event amounts of each users into a query and sent the queries based on the end session time of each users.</li>
</ol>
<h4 id="threemousetrackingpreprocessingandtransmissionresults">3.3.3 Three Mouse Tracking Preprocessing and Transmission Results</h4>
<p>The result is that a great reduction in data size is achieved by sacrificing some geometrical data for ROI mouse tracking and all geometrical data for summarized event amount shown on Table 
	
	<a href="#tabdtszcmprsn">3.1</a>. Surprisingly on the user side, the script total execution time on the browser was also reduced shown on Figure 
	
	<a href="#figdbrwsperf">3.8</a>. The transmission cost was also reduced shown by the reduced data rate on Figure 
	
	<a href="#figdefault-page-roi">3.9</a> which is also in parallel to the server's CPU and RAM usage.

</p>
<table id="tabdtszcmprsn">
	<caption>Table 3.1 Comparison of data amount generated from the three types of mouse tracking.</caption>
	<thead>
		<tr>
			<th>Type</th>
			<th>Queries</th>
			<th>Data Size</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Default Mouse Tracking</td>
			<td>286510</td>
			<td>∼100 MB</td>
		</tr>
		<tr>
			<td>ROI Mouse Tracking 1</td>
			<td>28048</td>
			<td>∼7.7 MB</td>
		</tr>
		<tr>
			<td>ROI Mouse Tracking 2</td>
			<td>19061</td>
			<td>∼5.3 MB</td>
		</tr>
		<tr>
			<td>ROI Mouse Tracking 3</td>
			<td>17880</td>
			<td>∼4.9 MB</td>
		</tr>
		<tr>
			<td>Summarized Event Amount</td>
			<td>23</td>
			<td>∼16 kB</td>
		</tr>
	</tbody>
</table>
<figure id="figdbrwsperf">
	<img src="https://404store.com/2020/09/10/3.8.brwsperf.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmQmjY1BrsgFK9BrTPCvMk1nNmmzniAicQDGHLmFbEyYW4/3.8.brwsperf.png';" alt="https://file.army/i/B4MoZds" />
	<figcaption>Figure 3.8 The total script running time of three mouse tracking demo session by the author. The horizontal axis is the mouse tracking method. The data in order are from Mozila Firefox, Microsoft Edge, and Google Chrome. The vertical axis is the total running time in milliseconds. Among the three browsers Mozilla Firefox performs faster than Microsoft Edge and Internet Explore performs faster than Google Chrome for this work 
		
		<a href="#speedbattlecom">u, 2020</a>.
	
	</figcaption>
</figure>
<p>The Raspberry Pi's CPU is not strong enough to handle the default mouse tracking simulation of around 20 users where the CPU often reach 100% usage. Even the RAM usage is abnormally high over hundreds of MB. However, it is able to handle ROI mouse tracking and summarized event amount method. This shows how useful the data reduction method are.</p>
<figure id="figdefault-page-roi">
	<img src="https://404store.com/2020/09/10/3.9.a.cpumstr.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmQZ8Z8ucqWqcuVW6r5vNETaHqguNP6REA7QggZH4k1jq3/3.9.a.cpumstr.png';" alt="https://file.army/i/B4MouVl" />
	<img src="https://404store.com/2020/09/10/3.9.b.rammstr.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmaUxgfC9HttEFfa9oaYKourSfMbMcrHfapXKVSwKda6oG/3.9.b.rammstr.png';" alt="https://file.army/i/B4Mo6Kj" />
	<img src="https://404store.com/2020/09/10/3.9.c.dtrmstr.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmWoZHwMjMRuK4BryQ4yPHsxkQfDxzizuRZmiKGiVY2wAY/3.9.c.dtrmstr.png';" alt="https://file.army/i/B4MoEXk" />
	<figcaption>Figure 3.9 CPU and RAM usage and data rate comparison between default mouse tracking, summarized event amount, and ROI mouse tracking.</figcaption>
</figure>
<p>Among the three mouse tracking method, the summarized event amount method is the maximum resource reduction because all the geometrical and time data are excluded or simply only consist of one area. Theoretically, the amount of query is reduced to one per mouse tracking session. For the ROI mouse tracking, does not necessary always result in large resource reduction like the result in this thesis. Theoretically, it depends on the area division of the web page. The smaller the division, the larger the area, the larger the resource reduction, and vice versa. By performing more division, the areas become smaller, the resource usage becomes larger, and eventually the area will become as small is coordinates if areas are kept being divided which will become the same as default mouse tracking.</p>
<h4 id="synchronizationforhandcarryserverquiz">3.3.4 Synchronization for Hand Carry Server Quiz</h4>
<p>The teacher may decide to conduct the quiz locally using hand carry server illustrated in Figure 
	
	<a href="#fighcsrp3">3.7</a> for various limited connectivity reasons such as expensive or unstable Internet connection. If the log data is only for the teacher to use, then all is well, but if it is for institutional use, the teacher may have to synchronize the data to the institution's server. It will be wise to use incremental synchronization method illustrated on Figure 
	
	<a href="#figdefaultvsincremental">3.10</a> to reduce data especially for large data like mouse tracking log.

</p>
<figure id="figdefaultvsincremental">
	<img src="https://404store.com/2020/09/10/3.10.default-vs-incremental.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmcBHbUm3YjEDQ2CjYQfJoKDTTDn1R4qJUWKp1X6LgCtWx/3.10.default-vs-incremental.jpg';" alt="https://file.army/i/B4MoOnv" />
	<figcaption>Figure 3.10 Suppose there are two quiz sessions like the one in this thesis. The teacher have to synchronize the data two times which are after the first session and after the second session. Although the human mind knows that it is better to update, the computer today still does not operate that way. Even the default copying in most people desktop still functions as copying the whole data and replacing the old shown on the left. Today, a separate application must be used to perform incremental synchronization shown on the right that is able to calculate the difference between the old and new data © 
		
		<a href="#purnama2017incremental">(Purnama, 2017)</a>.
	
	</figcaption>
</figure>
<p>There are two ways to perform incremental synchronization. The first one is to store the data in Structured Query Language (SQL) which is mostly used in database applications. SQL stores the data in form of table and to update is just sending new rows from the teacher's database to the institution's database. Most log data are in unidirectional incremental/addition fashion which is why SQL is mostly used. However, if the update is more than just incremental such as correction where there are deletion and modification than it is more complicated for SQL to handle 
	
	<a href="#purnama2016rsync">(Purnama, Usagawa, Ijtihadie, et al., 2016)</a>. The most popular algorithm to handle this update is the rsync algorithm illustrated on Figure 
	
	<a href="#figrsyncalgorithm">3.11</a>. Example use case are when teacher forgot to exclude private data when privacy is a concern and accidentally upload to the server. In this case, the teacher would want to remove the private data in each query where rsync can save resource cost. Though, this is less likely to occur. A more realistic case is a teacher needed to update their quiz contents from the server where the update is made of addition, deletion, and relocation.

</p>
<figure id="figrsyncalgorithm">
	<img src="https://404store.com/2020/09/10/3.11.a.Rsync-Ill-Detail-1.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmR3ycm1A1E26FfGbDuS8Yezzyutaw7mLxoKY87raHFo6W/3.11.a.Rsync-Ill-Detail-1.jpg';" alt="https://file.army/i/B4MoG7H" />
	<img src="https://404store.com/2020/09/10/3.11.b.Rsync-Ill-Detail-2.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmbxZrQUDqsaoMytRr8X1Ktvz8t5Sd82nSbBx2jWqdoE7x/3.11.b.Rsync-Ill-Detail-2.jpg';" alt="https://file.army/i/B4MoLGf" />
	<img src="https://404store.com/2020/09/10/3.11.c.Rsync-Ill-Detail-3.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQma2qFGyFAYpTkS7J5pBHxTFMqfkqrCoxSnPoPKAUBBA1x/3.11.c.Rsync-Ill-Detail-3.jpg';" alt="https://file.army/i/B4MohoI" />
	<img src="https://404store.com/2020/09/10/3.11.d.Rsync-Ill-Detail-4.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmVUWfr5dCDAbzaN6c29JcDynmZbRFecH7jzXhmvqk3Hyg/3.11.d.Rsync-Ill-Detail-4.jpg';" alt="https://file.army/i/B4Mo1UV" />
	<figcaption>Figure 3.11 A detailed illustration of the rsync algorithm procedure where the steps in summary are splitting the data into blocks, scan for blocks relocation, and scan for blocks that does not exist where they can be to be newly added blocks or unused blocks to be deleted. Finally, execute relocation, addition, and deletion based on the obtained information from the scanning 
		
		<a href="#fpmthesis">(Purnama, 2017)</a>.
	
	</figcaption>
</figure>
<h2 id="thedepthlevelsoflogs">4 The Depth Levels of Logs</h2>
<div class="video-container">
	<iframe src="https://lbry.tv/$/embed/i-present-the-depth-levels-of-web-logs/355eb839780a806dc102df86c5f06ab95884399d" allowfullscreen></iframe>
</div>
<p>Back in Chapter 1, it was emphasized that conventional web logs and educational data have a limitation regarding to the information that they can derive. Mostly, it was about how those conventional logs could not capture the users or students behavior online. Eye and mouse tracking solves that problem by capturing how the students interact. It took some time for the author to understand and conceptualize the meaning behind those repeating statements about what conventional log data cannot tell while eye and mouse tracking log can tell. It turns out to be that the depth level of those logs are different where eye and mouse tracking logs belong to a deeper level than conventional logs.</p>
<figure id="figweblogdepthlevel">
	<img src="https://404store.com/2020/09/10/4.1.web-log-depth-level.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmc4ZxtFPYBbrLUjrDrEo6Y2AtesMhTccPi3UAatUSwWVH/4.1.web-log-depth-level.jpg';" alt="https://file.army/i/B4MoQup" />
	<figcaption>Figure 4.1 Six level of web logs in order from most shallow to deepest are Internet, websites, categories, web pages, area, and coordinates.</figcaption>
</figure>
<p>This thesis defines six depth level of web logs from browser content point of view shown on Figure 
	
	<a href="#figweblogdepthlevel">4.1</a>. Most analyzers do not know that there are deeper level of logs. Most tools do not generate data in deeper level than web page level logs. The web log depth levels converted to educational data can be illustrated on Figure 
	
	<a href="#figeducationaldatadepthlevel">4.2</a>. Most educational tools only generate logs up to course content level which are mostly how many time the students attempts the activity and what grade they received. This chapter discussed the three deepest log levels and explained how mouse tracking belongs to the deepest log level.

</p>
<figure id="figeducationaldatadepthlevel">
	<img src="https://404store.com/2020/09/10/4.2.educational-data-depth-level.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmStc83SVsH9YnLxFsZz4TmaNUZYubDf4MuvegdGSVxpaE/4.2.educational-data-depth-level.jpg';" alt="https://file.army/i/B4MoAVD" />
	<figcaption>Figure 4.2 Six level of educational data in order from most shallow to deepest are Internet, academies, courses, course contents, area, and coordinates.</figcaption>
</figure>
<h3 id="webpage/coursecontentlevellogs">4.1 Web page / Course Content Level Logs</h3>
<h4 id="conventionalweblogsandeducationaldata">4.1.1 Conventional Web Logs and Educational Data</h4>
<p>The conventional web logs belongs up to the web page level log. They are mainly page views which shows that a web page from a certain website and category have been viewed 
	
	<a href="#bluehost2016web">(Bluehost, 2016)</a>. Additional metadata can be attached to the page view:

</p>
<ul>
	<li>
		<b>"Who"</b>, the identity of the viewer can be identified if the viewer register to the website, provides identity on the browser and gives permission to identify, or if not then the internet protocol (IP) address of the viewer can be captured.
	
	</li>
	<li>
		<b>"Where"</b> can be the link of the web page or the location of web server and viewer if they are identifiable.
	
	</li>
	<li>
		<b>"When"</b> is usually the date and time of the occurred page view or any action. More specifically, the duration can be calculated.
	
	</li>
	<li>
		<b>"What"</b> is usually the action of the viewer labeled by the analyzer. If the web page is a reading content then the viewer's action is labeled as reading. If it is an audio content then the viewer's action is labeled as listening. If it is a video content then the viewer's action is labeled as watching. If it is a forum then the viewer's action is labeled as discussing and etc.
	
	</li>
</ul>
<p>As page view belongs up to the third deepest level log, there is a limit how much it can tell no matter how hard it is analyzed. For example, page view cannot tell how a user is reading a content such as whether the user is skimming or reading in detail. The limit is that page view cannot capture activities that occurred in specific area of the web page. In education, there are four popular logs that are used by teachers which are materials the student read, assignments submitted, topics discussed in forum, and quiz or exams grades. Unfortunately just as conventional web logs, conventional educational data can only tell what activities the students are doing and its duration but cannot tell how the students attempts those activities which can be more emphasized on Figure 
	
	<a href="#figweblogvseyetracking">4.3</a>. In other words, it can identify a certain extent of what, when, where, and who but cannot identify deeper and how the viewer interacts with the contents 
	
	<a href="#purnama2016introductory">(Purnama et al., 2016)</a>
	<a href="#purnama2016demonstration">(Purnama, Fungai, and Usagawa, 2016)</a>.

</p>
<figure id="figweblogvseyetracking">
	<img src="https://404store.com/2020/09/10/4.3.what-when-where-how.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmafKxpAZPV69KPjknjRDrozNLbr2G8bSxFtXyfyxstaUG/4.3.what-when-where-how.png';" alt="https://file.army/i/B4Mo0AY" />
	<figcaption>Figure 4.3 The top half of the image shows page view implemented in Moodle which is called course view. It can tell what kind of activity is attempted based on the page label within the course, when in dates, and who by the students' registered names and ip address. The bottom half of the image shows eye tracking that can tell how a user is reading the text which Moodle log cannot tell.</figcaption>
</figure>
<h4 id="amountofinteractions">4.1.2 Amount of Interactions</h4>
<p>Although the summarized event amount of mouse tracking is on the depth level of web pages or course contents, it is still not widely known by analyzers. DOM events can tell many other interactions users does on the web page. The simplest of them are knowing how much interaction the user does such as how many clicks, how many touch, how much mouse movements, how much scrolls, how much zoom in and zoom out, how many copy and paste, how many times the keyboard was pressed, and etc. Table 
	
	<a href="#tabduration-event-amount">4.1</a> shows that the Mongolian students attempting the quiz session took at average 1368 seconds, performed at average 175 left clicks, 8 middle clicks, 11004 mouse movements, and 4158 scrolls.

</p>
<table id="tabduration-event-amount">
	<caption>Table 4.1 The duration and event amount generated by 41 Mongolian students during a quiz session.</caption>
	<tr>
		<td>
			<b>name</b>
		</td>
		<td>
			<b>duration</b>
		</td>
		<td>
			<b>leftclick</b>
		</td>
		<td>
			<b>rightclick</b>
		</td>
		<td>
			<b>middleclick</b>
		</td>
		<td>
			<b>mousemove</b>
		</td>
		<td>
			<b>scroll</b>
		</td>
		<td>
			<b>inactive</b>
		</td>
		<td>
			<b>highlight</b>
		</td>
		<td>
			<b>grade</b>
		</td>
	</tr>
	<tr>
		<td>
			<b>student1</b>
		</td>
		<td>2572.66</td>
		<td>50</td>
		<td>0</td>
		<td>15</td>
		<td>13359</td>
		<td>8747</td>
		<td>1493</td>
		<td>0</td>
		<td>72</td>
	</tr>
	<tr>
		<td>
			<b>student2</b>
		</td>
		<td>2188.08</td>
		<td>157</td>
		<td>5</td>
		<td>0</td>
		<td>21066</td>
		<td>6760</td>
		<td>2662</td>
		<td>2</td>
		<td>32</td>
	</tr>
	<tr>
		<td>
			<b>student3</b>
		</td>
		<td>1659.22</td>
		<td>278</td>
		<td>1</td>
		<td>6</td>
		<td>13216</td>
		<td>3895</td>
		<td>1725</td>
		<td>3</td>
		<td>60</td>
	</tr>
	<tr>
		<td>
			<b>student4</b>
		</td>
		<td>2236.42</td>
		<td>323</td>
		<td>0</td>
		<td>0</td>
		<td>18068</td>
		<td>7036</td>
		<td>1467</td>
		<td>4</td>
		<td>84</td>
	</tr>
	<tr>
		<td>
			<b>student5</b>
		</td>
		<td>1916.00</td>
		<td>346</td>
		<td>1</td>
		<td>14</td>
		<td>17235</td>
		<td>6019</td>
		<td>1646</td>
		<td>1</td>
		<td>96</td>
	</tr>
	<tr>
		<td>
			<b>student6</b>
		</td>
		<td>2345.90</td>
		<td>185</td>
		<td>0</td>
		<td>0</td>
		<td>11006</td>
		<td>5448</td>
		<td>964</td>
		<td>0</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student7</b>
		</td>
		<td>1932.57</td>
		<td>422</td>
		<td>0</td>
		<td>15</td>
		<td>13748</td>
		<td>2761</td>
		<td>1735</td>
		<td>0</td>
		<td>60</td>
	</tr>
	<tr>
		<td>
			<b>student8</b>
		</td>
		<td>2748.21</td>
		<td>173</td>
		<td>2</td>
		<td>0</td>
		<td>12697</td>
		<td>6151</td>
		<td>1486</td>
		<td>2</td>
		<td>44</td>
	</tr>
	<tr>
		<td>
			<b>student9</b>
		</td>
		<td>1699.58</td>
		<td>317</td>
		<td>0</td>
		<td>0</td>
		<td>14462</td>
		<td>4452</td>
		<td>1848</td>
		<td>0</td>
		<td>72</td>
	</tr>
	<tr>
		<td>
			<b>student10</b>
		</td>
		<td>792.32</td>
		<td>27</td>
		<td>0</td>
		<td>41</td>
		<td>8436</td>
		<td>4578</td>
		<td>1125</td>
		<td>0</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student11</b>
		</td>
		<td>1021.46</td>
		<td>241</td>
		<td>0</td>
		<td>0</td>
		<td>11907</td>
		<td>2018</td>
		<td>1629</td>
		<td>3</td>
		<td>88</td>
	</tr>
	<tr>
		<td>
			<b>student12</b>
		</td>
		<td>691.06</td>
		<td>64</td>
		<td>0</td>
		<td>0</td>
		<td>7970</td>
		<td>1995</td>
		<td>1217</td>
		<td>1</td>
		<td>-</td>
	</tr>
	<tr>
		<td>
			<b>student13</b>
		</td>
		<td>889.88</td>
		<td>610</td>
		<td>0</td>
		<td>19</td>
		<td>11636</td>
		<td>3754</td>
		<td>1449</td>
		<td>0</td>
		<td>76</td>
	</tr>
	<tr>
		<td>
			<b>student14</b>
		</td>
		<td>1947.62</td>
		<td>342</td>
		<td>0</td>
		<td>0</td>
		<td>20724</td>
		<td>4774</td>
		<td>3235</td>
		<td>0</td>
		<td>72</td>
	</tr>
	<tr>
		<td>
			<b>student15</b>
		</td>
		<td>2300.24</td>
		<td>37</td>
		<td>0</td>
		<td>0</td>
		<td>15686</td>
		<td>7346</td>
		<td>2219</td>
		<td>0</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student16</b>
		</td>
		<td>1755.30</td>
		<td>385</td>
		<td>0</td>
		<td>0</td>
		<td>16435</td>
		<td>5595</td>
		<td>2385</td>
		<td>3</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student17</b>
		</td>
		<td>1770.57</td>
		<td>29</td>
		<td>0</td>
		<td>0</td>
		<td>16264</td>
		<td>9521</td>
		<td>1808</td>
		<td>0</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student18</b>
		</td>
		<td>2499.55</td>
		<td>117</td>
		<td>0</td>
		<td>0</td>
		<td>8686</td>
		<td>2855</td>
		<td>1685</td>
		<td>1</td>
		<td>92</td>
	</tr>
	<tr>
		<td>
			<b>student19</b>
		</td>
		<td>945.06</td>
		<td>935</td>
		<td>0</td>
		<td>0</td>
		<td>6491</td>
		<td>5085</td>
		<td>1199</td>
		<td>0</td>
		<td>76</td>
	</tr>
	<tr>
		<td>
			<b>student20</b>
		</td>
		<td>823.93</td>
		<td>16</td>
		<td>0</td>
		<td>12</td>
		<td>11590</td>
		<td>4564</td>
		<td>1604</td>
		<td>0</td>
		<td>60</td>
	</tr>
	<tr>
		<td>
			<b>student21</b>
		</td>
		<td>1624.92</td>
		<td>23</td>
		<td>0</td>
		<td>10</td>
		<td>10261</td>
		<td>5123</td>
		<td>1257</td>
		<td>0</td>
		<td>72</td>
	</tr>
	<tr>
		<td>
			<b>student22</b>
		</td>
		<td>1314.81</td>
		<td>50</td>
		<td>0</td>
		<td>3</td>
		<td>10966</td>
		<td>2424</td>
		<td>1700</td>
		<td>1</td>
		<td>96</td>
	</tr>
	<tr>
		<td>
			<b>student23</b>
		</td>
		<td>555.53</td>
		<td>16</td>
		<td>0</td>
		<td>0</td>
		<td>7726</td>
		<td>1512</td>
		<td>1443</td>
		<td>0</td>
		<td>84</td>
	</tr>
	<tr>
		<td>
			<b>student24</b>
		</td>
		<td>645.91</td>
		<td>209</td>
		<td>0</td>
		<td>0</td>
		<td>8814</td>
		<td>2122</td>
		<td>731</td>
		<td>1</td>
		<td>56</td>
	</tr>
	<tr>
		<td>
			<b>student25</b>
		</td>
		<td>1040.37</td>
		<td>21</td>
		<td>0</td>
		<td>1</td>
		<td>6351</td>
		<td>2527</td>
		<td>789</td>
		<td>0</td>
		<td>88</td>
	</tr>
	<tr>
		<td>
			<b>student26</b>
		</td>
		<td>1374.72</td>
		<td>30</td>
		<td>0</td>
		<td>0</td>
		<td>7340</td>
		<td>2698</td>
		<td>950</td>
		<td>0</td>
		<td>96</td>
	</tr>
	<tr>
		<td>
			<b>student27</b>
		</td>
		<td>837.26</td>
		<td>21</td>
		<td>0</td>
		<td>0</td>
		<td>6403</td>
		<td>1849</td>
		<td>984</td>
		<td>0</td>
		<td>56</td>
	</tr>
	<tr>
		<td>
			<b>student28</b>
		</td>
		<td>1902.36</td>
		<td>173</td>
		<td>0</td>
		<td>7</td>
		<td>15383</td>
		<td>4817</td>
		<td>2468</td>
		<td>3</td>
		<td>100</td>
	</tr>
	<tr>
		<td>
			<b>student29</b>
		</td>
		<td>992.71</td>
		<td>31</td>
		<td>0</td>
		<td>0</td>
		<td>10144</td>
		<td>4335</td>
		<td>1514</td>
		<td>0</td>
		<td>80</td>
	</tr>
	<tr>
		<td>
			<b>student30</b>
		</td>
		<td>859.91</td>
		<td>94</td>
		<td>0</td>
		<td>0</td>
		<td>10736</td>
		<td>2417</td>
		<td>1558</td>
		<td>0</td>
		<td>64</td>
	</tr>
	<tr>
		<td>
			<b>student31</b>
		</td>
		<td>1208.75</td>
		<td>29</td>
		<td>0</td>
		<td>0</td>
		<td>10430</td>
		<td>4484</td>
		<td>1197</td>
		<td>0</td>
		<td>76</td>
	</tr>
	<tr>
		<td>
			<b>student32</b>
		</td>
		<td>1030.32</td>
		<td>16</td>
		<td>0</td>
		<td>0</td>
		<td>11347</td>
		<td>4227</td>
		<td>1487</td>
		<td>0</td>
		<td>68</td>
	</tr>
	<tr>
		<td>
			<b>student33</b>
		</td>
		<td>1603.01</td>
		<td>23</td>
		<td>0</td>
		<td>0</td>
		<td>11425</td>
		<td>3467</td>
		<td>1729</td>
		<td>0</td>
		<td>60</td>
	</tr>
	<tr>
		<td>
			<b>student34</b>
		</td>
		<td>1098.69</td>
		<td>23</td>
		<td>0</td>
		<td>0</td>
		<td>8922</td>
		<td>5386</td>
		<td>806</td>
		<td>0</td>
		<td>84</td>
	</tr>
	<tr>
		<td>
			<b>student35</b>
		</td>
		<td>1462.85</td>
		<td>27</td>
		<td>0</td>
		<td>0</td>
		<td>7916</td>
		<td>6822</td>
		<td>1987</td>
		<td>0</td>
		<td>88</td>
	</tr>
	<tr>
		<td>
			<b>student36</b>
		</td>
		<td>2091.09</td>
		<td>1179</td>
		<td>3</td>
		<td>179</td>
		<td>16976</td>
		<td>6360</td>
		<td>4396</td>
		<td>0</td>
		<td>76</td>
	</tr>
	<tr>
		<td>
			<b>student37</b>
		</td>
		<td>827.12</td>
		<td>26</td>
		<td>0</td>
		<td>0</td>
		<td>6428</td>
		<td>3062</td>
		<td>719</td>
		<td>0</td>
		<td>96</td>
	</tr>
	<tr>
		<td>
			<b>student38</b>
		</td>
		<td>74.19</td>
		<td>9</td>
		<td>0</td>
		<td>5</td>
		<td>1068</td>
		<td>328</td>
		<td>156</td>
		<td>0</td>
		<td>80</td>
	</tr>
	<tr>
		<td>
			<b>student39</b>
		</td>
		<td>682.23</td>
		<td>143</td>
		<td>0</td>
		<td>0</td>
		<td>10061</td>
		<td>2914</td>
		<td>1419</td>
		<td>0</td>
		<td>68</td>
	</tr>
	<tr>
		<td>
			<b>student40</b>
		</td>
		<td>41.26</td>
		<td>3</td>
		<td>0</td>
		<td>0</td>
		<td>633</td>
		<td>116</td>
		<td>132</td>
		<td>0</td>
		<td>88</td>
	</tr>
	<tr>
		<td>
			<b>student41</b>
		</td>
		<td>90.92</td>
		<td>7</td>
		<td>0</td>
		<td>0</td>
		<td>1182</td>
		<td>139</td>
		<td>210</td>
		<td>0</td>
		<td>100</td>
	</tr>
	<tr>
		<td>
			<b>average</b>
		</td>
		<td>1368.16</td>
		<td>175.78</td>
		<td>0.29</td>
		<td>7.98</td>
		<td>11004.73</td>
		<td>4158.12</td>
		<td>1517.39</td>
		<td>0.61</td>
		<td>74.50</td>
	</tr>
	<tr>
		<td>
			<b>total</b>
		</td>
		<td>56094.53</td>
		<td>7207.00</td>
		<td>12.00</td>
		<td>327.00</td>
		<td>451194.00</td>
		<td>170483.00</td>
		<td>62213.00</td>
		<td>25.00</td>
		<td>2980.00</td>
	</tr>
	<tr>
		<td>
			<b>minimum</b>
		</td>
		<td>41.26</td>
		<td>3.00</td>
		<td>0.00</td>
		<td>0.00</td>
		<td>633.00</td>
		<td>116.00</td>
		<td>132.00</td>
		<td>0.00</td>
		<td>32.00</td>
	</tr>
	<tr>
		<td>
			<b>maximum</b>
		</td>
		<td>2748.21</td>
		<td>1179.00</td>
		<td>3.00</td>
		<td>179.00</td>
		<td>20724.00</td>
		<td>9521.00</td>
		<td>4396.00</td>
		<td>4.00</td>
		<td>100.00</td>
	</tr>
	<tr>
		<td>
			<b>stdev</b>
		</td>
		<td>728.82</td>
		<td>295.33</td>
		<td>0.72</td>
		<td>39.05</td>
		<td>4977.88</td>
		<td>2291.82</td>
		<td>914.11</td>
		<td>1.16</td>
		<td>15.97</td>
	</tr>
</table>
<p>Knowing the amount of DOM event occurrence on a web page may give a hint whether the web page fulfills its purpose or not. For example, a web page designed based on game theory are bound to be interactive where if there are less events such as clicks, movements, etc, may show that the users does not engage on the web page, whereas if the web page is designed for reading and there are many events, then there must be something wrong. The author expect high amount of DOM event done by the students because they are attempting a quiz where they need to perform many clicks to choose an answer, and need to perform many movements to read the questions carefully and maybe reviewing some questions. If there is no problem with the web page then there can be problems with the users. A study showed by 
	
	<a href="#rodrigues2013keystrokes">Rodrigues et al., 2013</a> that high amount of events generated by a user can indicate that the user is stressed. Theoretically, there should be a common sense of how much a user should generate events within a certain amount of duration.

</p>
<h4 id="webpageorcoursecontentinactivity">4.1.3 Web Page or Course Content Inactivity</h4>
<p>Web page or course content inactivity is another DOM mouse event feature that analyzers does not know. In page view, the duration can be counted on visited web page but it cannot tell whether the users are actually in the web page the whole time because they can just open another tab and leave the previous ones open. With mouse DOM events, it is possible to distinguish the amount of active and inactive time of users within a web page. The inactivity is indicated when the mouse cursor leaves the web page for opening another tab or doing other activities and when the mouse cursor re-enters the web page, the status will show active again.</p>
<p>In Table 
	
	<a href="#tabduration-event-amount">4.1</a>, the amount of inactivity queries of each student are provided, and in Figure 
	
	<a href="#figinactivequerytimedomain">4.4</a>, the amount of inactivity in time domain are plotted. They showed that all the students does not always stay in the quiz page which opens the possibility that they are seeking information from outside source to answer the quiz better such as searching for answers in search engines and messaging friends online. The amount of inactivities could be exagerated due to system limitation reasons such as slow mouse leaves generates more inactivities query than fast mouse leaves. However, the system design still ensures that no inactivities queries will be generated if the mouse does not leaves the quiz area.

</p>
<figure id="figinactivequerytimedomain">
	<img src="https://404store.com/2020/09/10/4.4.inactive-query-time-domain.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmVT3TMJsVLVPnkgJnP6V6WJ4wCE9DHPboU5sgLQWxW4WD/4.4.inactive-query-time-domain.png';" alt="https://file.army/i/B4MopRQ" />
	<figcaption>Figure 4.4 Inactive queries plotted in time domain. The horizontal axis is the time interval in minutes and the vertical axis is the amount of inactive queries.</figcaption>
</figure>
<p>Aside from capturing inactivities, capturing highlight, copy, cut, and paste can help in detecting dishonest behaviors. An alarm system can be developed to inform the examiners when such events occurred. For important exams such as certifications, stricter systems can be implemented such as immediately failing the test when the mouse cursor leaves the exam illustrated on Figure 
	
	<a href="#figexamleavedetector">4.5</a>.

</p>
<figure id="figexamleavedetector">
	<img src="https://404store.com/2020/09/10/4.5.exam-leave-detector.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmTrRnqLwSkZwhbRJRaVGvEhfAnLiJwfucieizSwGz62wt/4.5.exam-leave-detector.jpg';" alt="https://file.army/i/B4MoFna" />
	<figcaption>Figure 4.5 An exam detector that tracks unwanted activities of participants such as mouse leaving the exam, tab and meta button to leave the exam, and other events indicating exam leaving.</figcaption>
</figure>
<h3 id="arealevellogs">4.2 Area Level Logs</h3>
<p>Area level logs are logs showing activities within areas of the web page or course contents. This can be done by either or combination of capturing the mouse cursor position, the touch location, the scroll bar position, or tracking the eye ball position. Then capturing the date and time of the events that occurs in those positions. The ROI mouse tracking provides these kinds of information. The amount activity in each area for this thesis is based on the total amount of events.</p>
<p>The most popular analysis of area level logs are heatmap visualization. There are many indications that can be derived from heat maps. For example on a high activity or duration area, may indicate that users are interested in the area. If not, then they may have trouble with the area whether trouble in understanding the content, questions that are too difficult for example on Figure 
	
	<a href="#figmsheatmap">4.6</a> that question three receives the most attention which may indicates difficulties, or there was design problems that results in unnecessary efforts on users to capture the information. On the other hand if the area has low activity or duration may indicate that the users are not interested, the design is not well enough to capture the users' attention, or the question in the quiz is simply too easy.

</p>
<figure id="figmsheatmap">
	<img src="https://404store.com/2020/09/10/4.6.dfecrop.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmPVZV9zaDWmmvRMfdbFz1u9ZF9A9De72m51G89FdR4aUf/4.6.dfecrop.png';" alt="https://file.army/i/B4MofTL" />
	<figcaption>Figure 4.6 DOM and Mouse tracking of a whole class attempting a quiz session summarized into a heatmap. The color represents the duration of mouse cursors staying on an area where short to long durations are indicated from green to red. The number inside an area is the total events of clicks, movements, scrolls, etc combined. The arrows indicates the amount the mouse cursors entering or leaving an area.</figcaption>
</figure>
<p>Figure 
	
	<a href="#figmsactlc10m">4.7</a> shows an even more detailed heatmap where the visualization was split into 10 minute intervals. Just from a glance it can be seen that the high activity time is the 30th, 90th, and 160th minute, they took a break on the 130th minute, and they finished on the 230th minute. Another interesting information is that they did not bother much with the last question, maybe whether they are too easy or they just want finish quickly because they are too tired.

</p>
<figure id="figmsactlc10m">
	<img src="https://404store.com/2020/09/10/4.7.msactlc10m.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmNoyNfxK3gS1R2qjgpEzo34Ahr873TJjABtBVPPV5FPFt/4.7.msactlc10m.png';" alt="https://file.army/i/B4MowL9" />
	<figcaption>Figure 4.7 Mouse activity heatmap in quiz page locations in time series. The horizontal axis represents 10 minute interval time and vertical axis are quiz page locations. For the heatmap, green color is close to minumum activity, yellow color is close second quartile, and red is close to maximum activity.</figcaption>
</figure>
<p>Figure 
	
	<a href="#figmsacst">4.8</a> shows another detailed heatmap regarding to the amount of activities done by each students on each area. The heatmap seems to vary to not showing much similarities between each students however, there are some. There can be seen a common correlation on question 13 that there are high activities and looking at the grade/score distribution in Figure 
	
	<a href="#figgradeheatmap">4.9</a>, many students got the answer wrong which maybe common evidence that the question is too difficult for them that they had to take more effort in it. An opposite case is on question 6 where there are low activities but many students got the answer wrong which can lead the analyzer to wonder whether question is a trick question. Another similar case with strong similarity found between Figure 
	
	<a href="#figmsacst">4.8</a> and Figure 
	
	<a href="#figgradeheatmap">4.9</a> that students did very little activity on the last question and but most the students got the answer wrong. Unlike question 6, it may not be a trick question but a difficult question because the score allocation is high. There maybe two possibilities where the first possibility is that the students ran out of time and since it is the last question, they may answer randomly, and the second possibility is that the students are lazy and/or tired that when they reach the last question that is difficult, they answer randomly because they may just wanted to finish the quiz quickly, giving up on the last question.

</p>
<figure id="figmsacst">
	<img src="https://404store.com/2020/09/10/4.8.msacst.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmTx9iRP5iNpabNtC2RENQLQNA1XrYyN5eGprvgBS6EmKd/4.8.msacst.png';" alt="https://file.army/i/B4Mo3oo" />
	<figcaption>Figure 4.8 Mouse activity heatmap in quiz page locations of each students. The horizontal axis are quiz page locations and vertical axis are the students anonymized. For the heatmap, green color is close to minumum activity, yellow color is close second quartile, and red is close to maximum activity.</figcaption>
</figure>
<p>Those indications can be useful in many ways. For example, if the indications shows that users are not paying attention to areas which are intended to be emphasize by content creators then there needs design fixing or content revision. In education, the heat map can be useful to profile the students. It can then be followed by a guidance system that can automatically detects the students interest which the guidance system can guide the students in many ways such as linking to related resource, suggesting students their career path, grouping them with relevant community, etc. The profile can also be used in a stricter way where the teachers gives assignments to students about reading a context and the system will detect whether the students have sufficiently paid enough attention to the context or not.</p>
<figure id="figgradeheatmap">
	<img src="https://404store.com/2020/09/10/4.9.grade-heatmap.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmdB6LGYaJwsVax21fyMpYwHLuufqHFkvKrG8xkiieqNom/4.9.grade-heatmap.png';" alt="https://file.army/i/B4MoWiE" />
	<figcaption>Figure 4.9 Grades/marks/scores the students receives in each questions. The first row is the label of the anonymized students, average score, and the amount of mistake made in each question. The first column is the label of the question number along with the score allocated to each of them. Wrong answers are marked with 0 points and highlighted in red.</figcaption>
</figure>
<p>Additionally there are some analyzers that counts the amount of mouse entering and leaving the area which is known as the mouse flow. In quiz sessions, it is normal to find many mouse flows because students tends to review or revisit the questions whether to double check or because they previously skipped them. On the other hand, for a website that is meant to guide or share information, many mouse flows may indicate problems for the website such as the users maybe confused in finding the information they need thus searching tirelessly 
	
	<a href="#hsu2018peer">(Hsu, Chang, and Liu, 2018)</a>.

</p>
<p>A possible application is force reading illustrated on Figure 
	
	<a href="#figreading-detector">4.10</a>, for example making sure the students read the agreement to tracked before exam and users read the term of service. The administrator can configure the variables such as the reading duration and amount of activities and areas. Simply, if the user did not read enough the area, then the user cannot pass and must read enough of the defined passage.

</p>
<figure id="figreading-detector">
	<img src="https://404store.com/2020/09/10/4.10.tos-read-detector.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmWZEN4JQu9RNPHY7MJoF4Ru9X8KGc1XBaxBJPyrux1zic/4.10.tos-read-detector.jpg';" alt="https://file.army/i/B4MomuU" />
	<figcaption>Figure 4.10 Illustration of force reading based on the duration of the mouse cursor stays in an area. The left example shows that the mouse cursor did not stay long enough in each area and tells the user to read everything, the middle example shows that the mouse cursor did not stay long enough in middle area and tells the user to complete reading middle area, and the right example shows satisfaction in user's reading.</figcaption>
</figure>
<h3 id="coordinatelevellogs">4.3 Coordinate Level Logs</h3>
<p>The coordinate level are the deepest level logs. The coordinate values can either be based on document, screen, or windows perspective. This is the log that the default mouse tracking generates 
	
	<a href="#fpeit">(Purnama et al., 2020b)</a>. It is overwhelming but contains the most information where this is the log that most analyzers should want to keep. The more shallow level such as the area level log can be derived from the coordinate level log and it is unidirectional where the vice versa is not possible 
	
	<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>. The most popular analysis is to draw a mouse trajectory. If the time when the mouse cursor lands on the coordinates are recorded, then it is possible to replay what the users did.

</p>
<p>An example visualization that can be drawn from the mouse tracking data is the mouse click trajectory in Figure 
	
	<a href="#figleftclickvisualization">4.11</a>. It shows a user highlighting a text which can indicate that a user is paying a attention to that text or attempts to copy that text to save in the user's note or to paste in the search engine to find more information about the text. The amount of highlights the students did was also summarized on Table 
	
	<a href="#tabduration-event-amount">4.1</a> and showed that either the students who highlights gets high or low grade and not average grade. The speculation is that the questions they highlight are too difficult for them and either they succeeded in finding the answers on other sites or failed. Unfortunately, the copy and paste events were not implemented at that time. In fact, it is because the author found this highlighting that motivates the author to add copy, paste, and other DOM events into the mouse tracking application.

</p>
<figure id="figleftclickvisualization">
	<img src="https://404store.com/2020/09/10/4.11.leftclickvisual.png" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmNLoYLtXTAAB9i4kv71hv5kos5Yzguhe8N7a2wXvRH1gU/4.11.leftclickvisual.png';" alt="https://file.army/i/B4Moof3" />
	<figcaption>Figure 4.11 A visualization of clicks generated using the mouse tracking log of Mongolian students attempting the online quiz session. Left clicks are indicated by triangles, middle clicks are indicated by squares, and right clicks indicated by pentagons. The two interesting parts of these visualization are shown by rapid left clicks on certain text areas that indicates highlighting and rapid middle clicks that indicates scrolling.</figcaption>
</figure>
<p>Although mouse tracking logs are part of the deepest level logs there is still a limit of how much the mouse cursor and scroll position can indicate because certain events does not necessary have to occur on those positions. For example, reading is based on the eye gaze and typing may occur not far from the mouse and scroll position but not necessarily exactly on those position. Each of these logs alone will not make the best logs but a combination of them. Combining conventional web logs or educational data with mouse tracking and eye tracking may provide a complete log.</p>
<h2 id="conclusionandfuturework">5 Conclusion and Future Work</h2>
<h3 id="conclusion">5.1 Conclusion</h3>
<p>The author wrote an online mouse tracking application suitable for public implementation and implemented during a quiz session at the Human Interface and Cyber Communication Laboratory, Kumamoto University on the 3rd of January 2019 between approximately 12:00 and 14:30 Japan standard time. The amount of data generated by mouse tracking was investigated during the implementation and found that the cause of huge data generation is the capturing of geometrical data or coordinates of each event. Aside from existing solutions to reduce data, this thesis also implemented and discussed real-time transmission system in mouse tracking data retrieval helps distribute the network's burden across the time domain. The main novelty of this thesis is the select-able geometrical online mouse tracking method where there are possible cases that not all the geometrical data are required. The method allows summarizing of coordinates into areas or deleting the coordinates if they are not necessary. The results showed great reduction in storage and transmission costs. However, the method is lossy because the process is irreversible. Rich mouse tracking data were obtained and in this thesis a new concept of log dept level was discussed with example analysis that include click visualization and activity heatmap which help in identifying the interaction between the students' and the quiz page.</p>
<h3 id="futurework">5.2 Future Work</h3>
<p>The real-time transmission is not the best solution. A better method is to upgrade the real-time transmission method by integrating smart transmission method where the client can detect the traffic of the network and determine the optimal time for queuing and transmission. Although the select-able geometrical mouse tracking data method works perfectly, there are still problems with execution. If all of the geometrical data are excluded, the most efficient time to transmit the data is only once which is when the user leaves the page. However, the problem lies with the browser where there is currently no way to force the user to wait before the transmission process finishes, leaving potential problem of data loss. The problem for ROI tracking is that it cannot perform smart area determination and labelling. Normally, they are performed by humans. Therefore, one solution is to develop an artificial intelligence for this matter in the future. Finally, this doctoral thesis is only limited to mouse tracking with one type of activity which is examination. There are a various activities such as passage reading, e-commerce, entertainment, Geo-visualization reading, search engine, social media, etc which are open for future work.</p>
<h2 id="appendixadata">Appendix A Data</h2>
<h3 id="quizareas">A.1 Quiz Areas</h3>
<table>
	<tr>
		<td>
			<b>Area</b>
		</td>
		<td>
			<b>x1, x2, y1, y2</b>
		</td>
		<td>
			<b>Area</b>
		</td>
		<td>
			<b>x1, x2, y1, y2</b>
		</td>
	</tr>
	<tr>
		<td>Header</td>
		<td>0, 1920, 0, 64</td>
		<td>Quiz8 Question</td>
		<td>529, 1900, 2453, 2493</td>
	</tr>
	<tr>
		<td>Title</td>
		<td>16, 1904, 150, 270</td>
		<td>Quiz8 Answers</td>
		<td>529, 1900, 2494, 2730</td>
	</tr>
	<tr>
		<td>Quiz Navigation</td>
		<td>18, 364, 291, 532</td>
		<td>Quiz9 Flag</td>
		<td>384, 528, 2731, 3242</td>
	</tr>
	<tr>
		<td>Navigation</td>
		<td>16, 366, 551, 1042</td>
		<td>Quiz9 Question</td>
		<td>529, 1900, 2731, 2831</td>
	</tr>
	<tr>
		<td>Administration</td>
		<td>18, 364, 1062, 1693</td>
		<td>Quiz9 Answers</td>
		<td>529, 1900, 2832, 3242</td>
	</tr>
	<tr>
		<td>Quiz1 Flag</td>
		<td>384, 528, 291, 570</td>
		<td>Quiz10 Flag</td>
		<td>384, 528, 3243, 3580</td>
	</tr>
	<tr>
		<td>Quiz1 Question</td>
		<td>529, 1900, 291, 341</td>
		<td>Quiz10 Question</td>
		<td>529, 1900, 3243, 3343</td>
	</tr>
	<tr>
		<td>Quiz1 Answers</td>
		<td>529, 1900, 342, 570</td>
		<td>Quiz10 Answers</td>
		<td>529, 1900, 3341, 3580</td>
	</tr>
	<tr>
		<td>Quiz2 Flag</td>
		<td>384, 528, 571, 852</td>
		<td>Quiz11 Flag</td>
		<td>384, 528, 3581, 3856</td>
	</tr>
	<tr>
		<td>Quiz2 Question</td>
		<td>529, 1900, 571, 621</td>
		<td>Quiz11 Question</td>
		<td>529, 1900, 3581, 3631</td>
	</tr>
	<tr>
		<td>Quiz2 Answers</td>
		<td>529, 1900, 622, 852</td>
		<td>Quiz11 Answers</td>
		<td>529, 1900, 3632, 3856</td>
	</tr>
	<tr>
		<td>Quiz3 Flag</td>
		<td>384, 528, 853, 1133</td>
		<td>Quiz12 Flag</td>
		<td>384, 528, 3857, 4169</td>
	</tr>
	<tr>
		<td>Quiz3 Question</td>
		<td>529, 1900, 853, 903</td>
		<td>Quiz12 Question</td>
		<td>529, 1900, 3857, 3907</td>
	</tr>
	<tr>
		<td>Quiz3 Answers</td>
		<td>529, 1900, 904, 1133</td>
		<td>Quiz12 Answers</td>
		<td>529, 1900, 3908, 4169</td>
	</tr>
	<tr>
		<td>Quiz4 Flag</td>
		<td>384, 528, 1134, 1441</td>
		<td>Quiz13 Flag</td>
		<td>84, 528, 4170, 4746</td>
	</tr>
	<tr>
		<td>Quiz4 Question</td>
		<td>529, 1900, 1134, 1184</td>
		<td>Quiz13 Question</td>
		<td>529, 1900, 4170, 4520</td>
	</tr>
	<tr>
		<td>Quiz4 Answers</td>
		<td>529, 1900, 1185, 1441</td>
		<td>Quiz13 Answers</td>
		<td>529, 1900, 4521, 4746</td>
	</tr>
	<tr>
		<td>Quiz5 Flag</td>
		<td>384, 528, 1442, 1748</td>
		<td>Quiz14 Flag</td>
		<td>384, 528, 4747, 5295</td>
	</tr>
	<tr>
		<td>Quiz5 Question</td>
		<td>529, 1900, 1442, 1492</td>
		<td>Quiz14 Question</td>
		<td>529, 1900, 4747, 5097</td>
	</tr>
	<tr>
		<td>Quiz5 Answers</td>
		<td>529, 1900, 1493, 1748</td>
		<td>Quiz14 Answers</td>
		<td>529, 1900, 5098, 5295</td>
	</tr>
	<tr>
		<td>Quiz6 Flag</td>
		<td>384, 528, 1749, 2027</td>
		<td>Quiz15 Flag</td>
		<td>384, 528, 5296, 5842</td>
	</tr>
	<tr>
		<td>Quiz6 Question</td>
		<td>529, 1900, 1749, 1799</td>
		<td>Quiz15 Question</td>
		<td>529, 1900, 5296, 5646</td>
	</tr>
	<tr>
		<td>Quiz6 Answers</td>
		<td>529, 1900, 1800, 2027</td>
		<td>Quiz15 Answers</td>
		<td>529, 1900, 5647, 5842</td>
	</tr>
	<tr>
		<td>Quiz7 Flag</td>
		<td>384, 528, 2028, 2452</td>
		<td>Footer</td>
		<td>0, 1920, 5939, 6116</td>
	</tr>
	<tr>
		<td>Quiz8 Flag</td>
		<td>384, 528, 2453, 2730</td>
		<td>Blank Areas</td>
		<td>except listed here</td>
	</tr>
</table>
<h3 id="fullquizpageheatmap">A.2 Full Quiz Page Heatmap</h3>
<figure id="figvisualization-of-mouse-tracking-data">
	<img src="https://404store.com/2020/09/10/a.1.msvisual.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmY5F1xG8BKMea5jwomB6NitAg8yyZ6tJ5oBQNkBZZfJja/a.1.msvisual.jpg';" alt="https://file.army/i/B4MorgZ" />
	<figcaption>Figure A.1 Visualization of mouse tracking data. Default mouse tracking data can visualize exact points of location, the left image is click visualization and the middle image is a heatmap based on the duration the mouse cursor stays on each point, while ROI tracking can only visualize defined areas and show flows between areas shown on the right image.</figcaption>
</figure>
<h2 id="appendixbcopyrights">Appendix B Copyrights</h2>
<p>Below are the publications reused in this thesis that does not require copyright clearance:</p>
<ul>
	<li>Using real-time online preprocessed mouse tracking for lower storage and transmission costs" 
		
		<a href="#purnama2020using">(Purnama and Usagawa, 2020)</a>.
	
	</li>
	<li>Demonstration on Extending The Pageview Feature to Page Section Based: Towards Identifying Reading Patterns of Users 
		
		<a href="#purnama2016demonstration">(Purnama, Fungai, and Usagawa, 2016)</a>.
	
	</li>
</ul>
<p>Below are the publications reused in this thesis that requires copyright clearance and obtained:</p>
<ul>
	<li>Rsync and Rdiff implementation on Moodle's backup and restore feature for course synchronization over the network 
		
		<a href="#purnama2016rsync">(Purnama, Usagawa, Ijtihadie, et al., 2016)</a>.
	
	</li>
	<li>Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi 
		
		<a href="#purnama2017incremental">(Purnama, 2017)</a>.
	
	</li>
	<li>Implementation of real-time online mouse tracking on overseas quiz session" 
		
		<a href="#fpeit">(Purnama et al., 2020b)</a>.
	
	</li>
</ul>
<img src="https://404store.com/2020/09/10/b.1.ieee-permission-crop.jpg" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmQ7aFgoW2stJ3cSXmryMJtjovCAaXhDCm1KqqUH2YYD1Z/b.1.ieee-permission-crop.jpg';" alt="https://file.army/i/B4MoJRq" />
<a href="https://s100.copyright.com/CustomerAdmin/PLF.jsp?ref=d6af378c-4d45-49da-90cf-5ce0e54d2473">https://s100.copyright.com/CustomerAdmin/PLF.jsp?ref=d6af378c-4d45-49da-90cf-5ce0e54d2473</a>

<table width="600" cellpadding="2" cellspacing="0" border="0">

			<tbody><tr>
<td colspan="2" rowspan="1" class="FullCellCenterTop"><p class="PageTitle" name="pl_pgTitle" id="pl_pgTitle">SPRINGER NATURE LICENSE<br>TERMS AND CONDITIONS</p></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="FullCellRightTop"><p class="RegularText" name="currentDateText" id="currentDateText">Sep 09, 2020</p></td>
</tr><tr>
<td colspan="2" rowspan="1" class="MainInstructionsCell"><p class="RegularText" name="pl_MainInstructionsAP" id="pl_MainInstructionsAP"></p><hr noshad=""><hr noshad=""><br>This Agreement between Mr. Fajar Purnama ("You") and Springer Nature ("Springer Nature") consists of your license details and the terms and conditions provided by Springer Nature and Copyright Clearance Center.<p></p></td>
</tr>

<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="LicenseNumberLabel" id="LicenseNumberLabel">License Number</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="LicenseNo" id="LicenseNo">4852391261684</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="LicenseDateLabel" id="LicenseDateLabel">License date</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="licenseCreateDate" id="licenseCreateDate">Jun 19, 2020</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ocd_PublisherLabel" id="ocd_PublisherLabel">Licensed Content Publisher</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="orderContentPublisher" id="orderContentPublisher">Springer Nature</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ocd_PublicationLabel" id="ocd_PublicationLabel">Licensed Content Publication</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="orderContentPublication" id="orderContentPublication">Education and Information Technologies</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ocd_TitleLabel" id="ocd_TitleLabel">Licensed Content Title</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="orderContentTitle" id="orderContentTitle">Implementation of real-time online mouse tracking on overseas quiz session</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ocd_AuthorLabel" id="ocd_AuthorLabel">Licensed Content Author</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="orderContentAuthor" id="orderContentAuthor">Fajar Purnama et al</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ocd_PubDateLabel" id="ocd_PubDateLabel">Licensed Content Date</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="orderContentDate" id="orderContentDate">Mar 6, 2020</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="TypeOfUseLabel" id="TypeOfUseLabel">Type of Use</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="offerDisplayText" id="offerDisplayText">Thesis/Dissertation</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="requesterLabel" id="requesterLabel">Requestor type</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="requesterType" id="requesterType">academic/university or research institute</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="formatLabel" id="formatLabel">Format</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="format" id="format">print and electronic</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="PortionLabel" id="PortionLabel">Portion</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="PortionUsed" id="PortionUsed">full article/chapter</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="translationLabel" id="translationLabel">Will you be translating?</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="translating" id="translating">no</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="circulationLabel" id="circulationLabel">Circulation/distribution</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="circulationDisplay" id="circulationDisplay">50000 or greater</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="authorLabel" id="authorLabel">Author of this Springer Nature content</p></td>
<td colspan="2" rowspan="1" class="PrintableField"><p class="RegularText" name="authorIndicator" id="authorIndicator">yes</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="newWorkDetailsTitleLabel" id="newWorkDetailsTitleLabel">Title</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="newTitle" id="newTitle">Development of a Lossy Online Mouse Tracking Method for Capturing User Interaction with Web Browser Content</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="newWorkDetailsPublisherLabel" id="newWorkDetailsPublisherLabel">Institution name</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="newPub" id="newPub">Kumamoto University</p></td>
</tr>
<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="newWorkDetailsExpectedPublicationDateLabel" id="newWorkDetailsExpectedPublicationDateLabel">Expected presentation date</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="newPubDate" id="newPubDate">Jul 2020</p></td>
</tr>

<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="ol_locationLabel" id="ol_locationLabel">Requestor Location</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="ol_locationOther" id="ol_locationOther">Mr. Fajar Purnama<br>JL. GN. AGUNG Gg. YAMUNA II, NO. 4<br><br><br>Denpasar, Bali 80119<br>Indonesia<br>Attn: Mr. Fajar Purnama</p></td>
</tr>



<tr>
<td colspan="1" rowspan="1" class="PrintableLabel"><p class="BlueText" name="TotalLabel" id="TotalLabel">Total</p></td>
<td colspan="1" rowspan="1" class="PrintableField"><p class="RegularText" name="priceDouble" id="priceDouble">0.00 USD</p></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="DefaultField"><p class="BlueText" name="TermsAndConditionsLabel" id="TermsAndConditionsLabel">Terms and Conditions</p></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="DefaultField"><p class="RegularText" name="termsAndConditionsFileName" id="termsAndConditionsFileName" =""></p><p align="center" style="text-align:center"><strong>Springer Nature Customer Service Centre GmbH<br>Terms and Conditions</strong></p><p>This agreement sets out the terms and conditions of the licence (the <b>Licence</b>) between you and <b>Springer Nature Customer Service Centre GmbH</b> (the <b>Licensor</b>). By clicking 'accept' and completing the transaction for the material (<b>Licensed Material</b>), you also confirm your acceptance of these terms and conditions.</p><ol><b></b><li><b>Grant of License</b><br><br><ol><li>The Licensor grants you a personal, non-exclusive, non-transferable, world-wide licence to reproduce the Licensed Material for the purpose specified in your order only. Licences are granted for the specific use requested in the order and for no other use, subject to the conditions below.<br><br></li><li>The Licensor warrants that it has, to the best of its knowledge, the rights to license reuse of the Licensed Material. However, you should ensure that the material you are requesting is original to the Licensor and does not carry the copyright of another entity (as credited in the published version).<br><br></li><li>If the credit line on any part of the material you have requested indicates that it was reprinted or adapted with permission from another source, then you should also seek permission from that source to reuse the material.<br><br></li></ol></li><li><b>Scope of Licence</b><br><br><ol><li>You may only use the Licensed Content in the manner and to the extent permitted by these Ts&amp;Cs and any applicable laws.<br><br> </li><li>A separate licence may be required for any additional use of the Licensed Material, e.g. where a licence has been purchased for print only use, separate permission must be obtained for electronic re-use. Similarly, a licence is only valid in the language selected and does not apply for editions in other languages unless additional translation rights have been granted separately in the licence. Any content owned by third parties are expressly excluded from the licence.<br><br></li><li>Similarly, rights for additional components such as custom editions and derivatives require additional permission and may be subject to an additional fee. Please apply to <a href="mailto:Journalpermissions@springernature.com"> Journalpermissions@springernature.com</a>/<a href="mailto:bookpermissions@springernature.com">bookpermissions@springernature.com</a> for these rights.<br><br></li><li>Where permission has been granted <b>free of charge</b> for material in print, permission may also be granted for any electronic version of that work, provided that the material is incidental to your work as a whole and that the electronic version is essentially equivalent to, or substitutes for, the print version.<br><br> </li><li>An alternative scope of licence may apply to signatories of the <a href="http://www.stm-assoc.org/intellectual-property/permissions/permissions-guidelines/" target="_www.stm-assoc.org/intellectual-property/permissions/permissions-guidelines/">STM Permissions Guidelines</a>, as amended from time to time.<br><br></li></ol></li></ol><li><b>Duration of Licence</b><br><br><ol><li>A licence for is valid from the date of purchase ('Licence Date') at the end of the relevant period in the below table:<br><br> <ul><table class="springer-nature-terms-table"><tbody><tr bgcolor="#A9A9A9"><th>Scope of Licence</th><th>Duration of Licence</th></tr><tr><td>Post on a website</td><td>12 months</td></tr><tr><td>Presentations</td><td>12 months</td></tr><tr><td>Books and journals</td><td>Lifetime of the edition in the language purchased</td></tr></tbody></table></ul></li></ol></li><li><b>Acknowledgement</b><br><br><ol><li>The Licensor's permission must be acknowledged next to the Licenced Material in print. In electronic form, this acknowledgement must be visible at the same time as the figures/tables/illustrations or abstract, and must be hyperlinked to the journal/book's homepage. Our required acknowledgement format is in the Appendix below.<br><br></li></ol></li><li><b>Restrictions on use</b><br><br><ol><li>Use of the Licensed Material may be permitted for incidental promotional use and minor editing privileges e.g. minor adaptations of single figures, changes of format, colour and/or style where the adaptation is credited as set out in Appendix 1 below. Any other changes including but not limited to, cropping, adapting, omitting material that affect the meaning, intention or moral rights of the author are strictly prohibited. <br><br></li><li>You must not use any Licensed Material as part of any design or trademark. <br><br></li><li>Licensed Material may be used in Open Access Publications (OAP) before publication by Springer Nature, but any Licensed Material must be removed from OAP sites prior to final publication.<br><br></li></ol></li><li><b>Ownership of Rights  </b><br><br><ol><li>Licensed Material remains the property of either Licensor or the relevant third party and any rights not explicitly granted herein are expressly reserved. <br><br></li></ol></li><li><b>Warranty  </b><br><br></li><br><br>IN NO EVENT SHALL LICENSOR BE LIABLE TO YOU OR ANY OTHER PARTY OR ANY OTHER PERSON OR FOR ANY SPECIAL, CONSEQUENTIAL, INCIDENTAL OR INDIRECT DAMAGES, HOWEVER CAUSED, ARISING OUT OF OR IN CONNECTION WITH THE DOWNLOADING, VIEWING OR USE OF THE MATERIALS REGARDLESS OF THE FORM OF ACTION, WHETHER FOR BREACH OF CONTRACT, BREACH OF WARRANTY, TORT, NEGLIGENCE, INFRINGEMENT OR OTHERWISE (INCLUDING, WITHOUT LIMITATION, DAMAGES BASED ON LOSS OF PROFITS, DATA, FILES, USE, BUSINESS OPPORTUNITY OR CLAIMS OF THIRD PARTIES), AND<br>WHETHER OR NOT THE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY PROVIDED HEREIN. <br><br><li><b>Limitations</b><br><br><ol><li><b><i><u>BOOKS ONLY:</u></i></b>Where <b>'reuse in a dissertation/thesis'</b> has been selected the following terms apply: Print rights of the final author's accepted manuscript (for clarity, NOT the published version) for up to 100 copies, electronic rights for use only on a personal website or institutional repository as defined by the Sherpa guideline (<a href="http://www.sherpa.ac.uk/romeo/" target="_www.sherpa.ac.uk/romeo/">www.sherpa.ac.uk/romeo/</a>).<br><br></li></ol></li><li><b>Termination and Cancellation</b><br><br><ol><li>Licences will expire after the period shown in Clause 3 (above).<br><br> </li><li>Licensee reserves the right to terminate the Licence in the event that payment is not received in full or if there has been a breach of this agreement by you. <br><br></li></ol><br><p><b><u>Appendix 1 — Acknowledgements:</u></b><br></p><p></p><ul><b>For Journal Content:</b><br>Reprinted by permission from [<b>the  Licensor</b>]: [<b>Journal Publisher</b> (e.g. Nature/Springer/Palgrave)] [<b>JOURNAL NAME</b>] [<b>REFERENCE CITATION</b> (Article name, Author(s) Name), [<b>COPYRIGHT</b>] (year of publication)<br></ul><p></p><p></p><ul>For <b>Advance Online Publication papers:</b><br>Reprinted by permission from [<b>the  Licensor</b>]: [<b>Journal Publisher</b> (e.g. Nature/Springer/Palgrave)] [<b>JOURNAL NAME</b>] [<b>REFERENCE CITATION</b> (Article name, Author(s) Name), [<b>COPYRIGHT</b>] (year of publication), advance online publication, day month year (doi: 10.1038/sj.[JOURNAL ACRONYM].)<p></p></ul> <p></p><ul><b>For Adaptations/Translations:</b><br>Adapted/Translated by permission from [<b>the  Licensor</b>]: [<b>Journal Publisher</b> (e.g. Nature/Springer/Palgrave)] [<b>JOURNAL NAME</b>] [<b>REFERENCE CITATION</b> (Article name, Author(s) Name), [<b>COPYRIGHT</b>] (year of publication)</ul><p></p><p></p><ul><b><u>Note: For any republication from the British Journal of Cancer, the following credit line style applies:</u></b></ul><p></p><ul>Reprinted/adapted/translated by permission from [<b>the  Licensor</b>]: on behalf of Cancer Research UK: : [<b>Journal Publisher</b> (e.g. Nature/Springer/Palgrave)] [<b>JOURNAL NAME</b>] [<b>REFERENCE CITATION</b> (Article name, Author(s) Name), [<b>COPYRIGHT]</b> (year of publication)<p></p></ul><p></p><ul>For <b>Advance Online Publication</b> papers:<br>Reprinted by permission from The [<b>the  Licensor</b>]: on behalf of Cancer Research UK: [<b>Journal Publisher</b> (e.g. Nature/Springer/Palgrave)] [<b>JOURNAL NAME</b>] [<b>REFERENCE CITATION</b> (Article name, Author(s) Name), [<b>COPYRIGHT</b>] (year of publication), advance online publication, day month year (doi: 10.1038/sj.[JOURNAL ACRONYM])</ul><p></p><p></p><ul><b>For Book content:</b><br>Reprinted/adapted by permission from [<b>the  Licensor</b>]: [<b>Book Publisher</b> (e.g. Palgrave Macmillan, Springer etc) [<b>Book Title</b>] by [<b>Book author</b>(s)] [<b>COPYRIGHT</b>] (year of publication)<br></ul><p></p><strong> Other Conditions</strong>: <p></p><p><br>Version&nbsp; 1.2</p></li></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="MainInstructionsCell"><p class="MainInstructions" name="ri_remittanceInstructions_nopay" id="ri_remittanceInstructions_nopay"><b>Questions? <a href="mailto:customercare@copyright.com">customercare@copyright.com</a> or +1-855-239-3415 (toll free in the US) or +1-978-646-2777.</b></p></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="MainInstructionsCell"><p class="MainInstructions" name="ri_remittanceInstructions_0" id="ri_remittanceInstructions_0"></p></td>
</tr>
<tr>
<td colspan="2" rowspan="1" class="DefaultField"><p class="RegularNote" name="FooterHR" id="FooterHR"></p><hr noshad=""><hr noshad=""><p></p></td>
</tr>



	
<input type="hidden" name="publisherID" value="1840">
<input type="hidden" name="subPublisherID" value="-5555">
<input type="hidden" name="publisherName" value="springernature">
<input type="hidden" name="publication" value="1360-2357">
<input type="hidden" name="publicationID" value="107899">
<input type="hidden" name="rightID" value="1">
<input type="hidden" name="typeOfUseID" value="328">
<input type="hidden" name="isMyAccount" value="">
<input type="hidden" name="popBackPage" value="">
<input type="hidden" name="isCancelPressed" value="false">
<input type="hidden" name="currentTargetPage" value="printableLicense">
<input type="hidden" name="passThroughTarget" value="">
<input type="hidden" name="targetPage" value="">
<input type="hidden" name="currentTargetPageID" value="6144340">
<input type="hidden" name="currentHeaderPage" value="/App/Includes/PrintableHeader.jsp">
<input type="hidden" name="currentBodyPage" value="/App/PrintableLicense.jsp">
<input type="hidden" name="currentFooterPage" value="/App/Includes/NoFooter.jsp">
<input type="hidden" name="timeStamp" value="1599656750366">
<input type="hidden" name="requestToken" value="KAEuMD8xVyp28yzQa7wG6wzz">
<input type="hidden" name="buttonClicked" value="unknown">
<input type="hidden" name="linkClicked" value="unknown">
<input type="hidden" name="jsonScriptName" id="jsonScriptName" value="">

	</tbody></table>

<p>Material details:</p>
<ul>
    <li>Original author's name: Fajar Purnama, Tsuyoshi Usagawa</li>
    <li>Document title: Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi</li>
    <li>Book or journal title: Technical Report, vol. 117, no. 65, ET2017-4, pp. 21-24, year 2017, month 5.</li>
    <li>Portion: Figure 5</li>
</ul>

<p>Permission No.: 20GB0052</p>

<p>IEICE hereby grant permission for the use of the material requested above on condition that their requirements are as follows:</p>

<ul>
    <li>Indication of source (e.g., author's name, document title, name of journal, volume/issue/page number, publication date, etc.)</li>
    <li>Indication of copyright (e.g. "Copyright (c)2016 IEICE")</li>
</ul>

<h2 id="reference">Reference</h2>
<ul>
	<li id="azzuhri2018creative">Azzuhri, Abdul Adhim et al. (2018). “A Creative, Innovative, and Solutive Transportation for Indonesia with Its Setbacks and How to Tackle Them: A Case Study of the Phenomenal GOJEK”. In: Review of Integrative Business and Economics Research 7, pp. 59–67. URL: <a href="http://buscompress.com/uploads/3/4/9/8/34980536/riber_7-s1_sp_h17-051_59-67.pdf">http://buscompress.com/uploads/3/4/9/8/34980536/riber_7-s1_sp_h17-051_59-67.pdf</a></li>
	<li id="bluehost2016web">Bluehost (2016). Web Analytics for Beginners - Presented by Bluehost. Youtube. URL: <a href="https://youtu.be/PnVZ7_OA7Qo.">https://youtu.be/PnVZ7_OA7Qo.</a></li>
	<li id="dentzel2013internet">Dentzel, Zaryn (2013). “How the internet has changed everyday life”. In: BBVA OpenMind:" Ch@nge. URL: <a href="https://www.bbvaopenmind.com/en/articles/internet-changed-everyday-life/">https://www.bbvaopenmind.com/en/articles/internet-changed-everyday-life/</a></li>
	<li id="hsu2018peer">Hsu, Ting-Chia, Shao-Chen Chang, and Nan-Cen Liu (2018). “Peer Assessment of Webpage Design: Behavioral Sequential Analysis Based on Eye Tracking Evidence”. In: Journal of Educational Technology & Society 21.2, pp. 305–321. URL: <a href="www.jstor.org/stable/26388409">www.jstor.org/stable/26388409</a></li>
	<li id="huang2011no">Huang, Jeff, Ryen W White, and Susan Dumais (2011). “No clicks, no problem: using cursor movements to understand and improve search”. In: Proceedings of the SIGCHI conference on human factors in computing systems. ACM, pp. 1225–1234. DOI: <a href="https://doi.org/10.1145/1978942.1979125.">10.1145/1978942.1979125.</a></li>
	<li id="ieicecopyright">IEICE (2015). IEICE Provisions on Copyright. IEICE. URL: <a href="https://www.ieice.org/eng/copyright/files/copyright.pdf">https://www.ieice.org/eng/copyright/files/copyright.pdf</a>.</li>
	<li id="leiva2015building">Leiva, Luis A and Jeff Huang (2015). “Building a better mousetrap: Compressing mouse cursor activity for web analytics”. In: Information Processing & Management 51.2, pp. 114–129. DOI: <a href="https://doi.org/10.1016/j.ipm.2014.10.005">10.1016/j.ipm.2014.10.005</a>.</li>
	<li id="linawati1survey">Linawati, Linawati, NMAE Dewi Wirastuti, and Gede Sukadarmika (2017). “Survey on LMS Moodle for Adaptive Online Learning Design”. In: Journal of Electrical, Electronics and Informatics 1.1, pp. 11–16. DOI: <a href="https://doi.org/10.24843/JEEI.2017.v01.i01.p03">10.24843/JEEI.2017.v01.i01.p03</a>.</li>
	<li id="martin2016strokes">Martín-Albo, Daniel et al. (2016). “Strokes of insight: User intent detection and kinematic compression of mouse cursor trails”. In: Information Processing & Management 52.6, pp. 989–1003. DOI: <a href="https://doi.org/10.1016/j.ipm.2016.04.005">10.1016/j.ipm.2016.04.005</a>.</li>
	<li id="speedtestnet">Ookla (2020). Speedtest Global Index. Ookla, LLC. URL: <a href="https://www.speedtest.net/global-index">https://www.speedtest.net/global-index</a>.</li>
	<li id="paturusi2012development">Paturusi, Sary DE, Yoshifumi Chisaki, and Tsuyoshi Usagawa (2012). “Development and Evaluation of the Blended Learning Courses at Sam Ratulangi University in Indonesia.” In: International Journal of e-Education, e-Business, e-Management and e-Learning 2.3, p. 242. URL: <a href="http://www.ijeeee.org/Papers/118-CZ02027.pdf">http://www.ijeeee.org/Papers/118-CZ02027.pdf</a></li>
	<li id="pixley2000document">Pixley, Tom et al. (2000). “Document object model (DOM) level 2 events specification”. In: W3C recommendation, November. URL: <a href="https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/">https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/</a></li>
	<li id="privacypolicies">PrivacyPolicies.com (2020). Privacy Policies are required by law. PrivacyPolicies.com. URL: <a href="https://www.privacypolicies.com">https://www.privacypolicies.com</a>.</li>
	<li id="fpmthesis">Purnama, Fajar (2017). “Portable and Synchronized Distributed Learning Management System in Severe Networked Regions”. MA thesis. Japan: Kumamoto University. URL: <a href="https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama">https://0fajarpurnama0.github.io/masters/2020/09/05/master-thesis-fajar-purnama</a></li>
	<li id="purnama2019github">Purnama, Fajar (2019). 0fajarpurnama0/Real-Time-Online-Mouse-Tracking-Animation. Github. DOI: <a href="https://doi.org/10.5281/zenodo.2589338">10.5281/zenodo.2589338</a>. URL: <a href="https://github.com/0fajarpurnama0/RealTime-Online-Mouse-Tracking-Animation">https://github.com/0fajarpurnama0/RealTime-Online-Mouse-Tracking-Animation</a>.</li>
	<li id="purnama2016demonstration">Purnama, Fajar, Alvin Fungai, and Tsuyoshi Usagawa (2016). “Demonstration on Extending The Pageview Feature to Page Section Based: Towards Identifying Reading Patterns of Users”. In: 7th International Conference on Science and Engineering. Yangon Technological University, pp. 304–307. URL: <a href="https://0fajarpurnama0.github.io/masters/2020/05/25/extending-the-pageview-feature-to-page-section-based">https://0fajarpurnama0.github.io/masters/2020/05/25/extending-the-pageview-feature-to-page-section-based</a></li>
	<li id="purnama2017incremental">PURNAMA, Fajar and Tsuyoshi USAGAWA (2017). “Incremental Synchronization Implementation on Survey using Hand Carry Server Raspberry Pi”. In: IEICE technical report 117.65, pp. 21–24. URL: <a href="https://0fajarpurnama0.github.io/masters/2020/05/29/rsync-rdiff-moodle-backup-restore">https://0fajarpurnama0.github.io/masters/2020/05/29/rsync-rdiff-moodle-backup-restore</a></li>
	<li id="purnama2020using">Purnama, Fajar and Tsuyoshi Usagawa (2020). “Using real-time online preprocessed mouse tracking for lower storage and transmission costs”. In: Journal of Big Data 7, pp. 1–22. DOI: <a href="https://doi.org/10.1186/s40537-020-00304-x">10.1186/s40537-020-00304-x</a>.</li>
	<li id="purnama2016rsync">Purnama, Fajar, Tsuyoshi Usagawa, Royyana M Ijtihadie, et al. (2016). “Rsync and Rdiff implementation on Moodle’s backup and restore feature for course synchronization over the network”. In: 2016 IEEE Region 10 Symposium (TENSYMP). IEEE, pp. 24–29. DOI: <a href="https://doi.org/10.1109/TENCONSpring.2016.7519372">10.1109/TENCONSpring.2016.7519372</a>.</li>
	<li id="purnama2016introductory">Purnama, Fajar et al. (2016). “Introductory Work on Section Based Page View of Web Contents: Towards The Idea of How a Page is Viewed”. In: 11th International Student Conference on Advanced Science and Technology (ICAST). Kumamoto University, pp. 9–11. URL: <a href="https://0fajarpurnama0.github.io/masters/2020/05/24/introductory-section-based-page-view">https://0fajarpurnama0.github.io/masters/2020/05/24/introductory-section-based-page-view</a></li>
	<li id="imlf2017">Purnama, Fajar et al. (2017). “Hand Carry Data Collecting Through Questionnaire and Quiz Alike Using Mini-computer Raspberry Pi”. In: Proceedings of the International Mobile Learning Festival 2017: Mobile Learning, Emerging Learning Design & Learning 2.0, pp. 18–32. URL: <a href="https://0fajarpurnama0.github.io/masters/2020/05/30/hand-carry-server-survey">https://0fajarpurnama0.github.io/masters/2020/05/30/hand-carry-server-survey</a></li>
	<li id="implementationrealtimeonlinemousetracking">Purnama, Fajar et al. (2020a). Data for: Implementation of Real-Time Online Mouse Tracking Case Study in a Small Online Quiz. Mendeley Data, v3. DOI: <a href="10.17632/vznyfcx9xk.4">https://doi.org/10.17632/vznyfcx9xk.4</a>.</li>
	<li id="fpeit">Purnama, Fajar et al (2020b). “Implementation of Real-Time Online Mouse Tracking on Overseas Quiz Session From Server Administrator Point of View”. In: Education and Information Technologies (forthcoming), p. 36. DOI: <a href="https://doi.org/10.1007/s10639-020-10141-3">10.1007/s10639-020-10141-3</a>.</li>
	<li id="rheem2018use">Rheem, Hansol, Vipin Verma, and D Vaughn Becker (2018). “Use of Mouse-tracking Method to Measure Cognitive Load”. In: Proceedings of the Human Factors and Ergonomics Society Annual Meeting. Vol. 62. SAGE Publications Sage CA: Los Angeles, CA, pp. 1982–1986. DOI: <a href="https://doi.org/10.1177/1541931218621449">10.1177/1541931218621449</a>.</li>
	<li id="rodrigues2013keystrokes">Rodrigues, Manuel et al. (2013). “Keystrokes and clicks: Measuring stress on e-learning students”. In: Management Intelligent Systems. Springer, pp. 119–126. DOI: <a href="https://doi.org/10.1007/978-3-319-00569-0_15">10.1007/978-3-319-00569-0_15</a>.</li>
	<li id="speedbattlecom">u, u-double (2020). SPEED-BATTLE statistics and browser comparison: Windows NT 10.0. u-double-u. URL: <a href="http://www.speed-battle.com/statistics_e.php">http://www.speed-battle.com/statistics_e.php</a>.</li>
	<li id="unesco2020covidschool">UNESCO (2020). COVID-19 Educational Disruption and Response. UNESCO. URL: <a href="https://en.unesco.org/covid19/educationresponse">https://en.unesco.org/covid19/educationresponse</a>.</li>
	<li id="wood1998document">Wood, Lauren et al. (1998). “Document object model (dom) level 1 specification”. In: W3C recommendation 1. URL: <a href="https://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/">https://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/</a></li>
</ul>
<div class="video-container">
	<iframe src="https://lbry.tv/$/embed/development-of-a-lossy-online-mouse/a502f9a700dbbb0477769652b0b50596d8194419" allowfullscreen></iframe>
</div>
<h2>Mirror</h2>
<ul>
	<li>
		<a href="https://www.publish0x.com/fajar-purnama-academics/development-of-a-lossy-online-mouse-tracking-method-for-capt-xjjlwxd#figonlinemssys?a=4oeEw0Yb0B&tid=github">https://www.publish0x.com/fajar-purnama-academics/development-of-a-lossy-online-mouse-tracking-method-for-capt-xjjlwxd#figonlinemssys?a=4oeEw0Yb0B&tid=github</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.github.io/doctoral/2020/09/10/doctoral-dissertation-fajar-purnama">https://0fajarpurnama0.github.io/doctoral/2020/09/10/doctoral-dissertation-fajar-purnama</a>
	</li>
	<li>
		<a href="https://medium.com/@0fajarpurnama0/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-cb602720fc9a">https://medium.com/@0fajarpurnama0/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-cb602720fc9a</a>
	</li>
	<li>
		<a href="https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/doctoral-dissertation-fajar-purnama">https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/doctoral-dissertation-fajar-purnama</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.tumblr.com/post/628796872276967424/development-of-a-lossy-online-mouse-tracking">https://0fajarpurnama0.tumblr.com/post/628796872276967424/development-of-a-lossy-online-mouse-tracking</a>
	</li>
	<li>
		<a href="https://0darkking0.blogspot.com/2020/09/development-of-lossy-online-mouse.html">https://0darkking0.blogspot.com/2020/09/development-of-lossy-online-mouse.html</a>
	</li>
	<li>
		<a href="https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-1-3?r=fajar.purnama">https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-1-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-2-3?r=fajar.purnama">https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-2-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-3-3?r=fajar.purnama">https://hive.blog/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-3-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/66-development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content">https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/66-development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content</a>
	</li>
	<li>
		<a href="https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-1-3?r=fajar.purnama">https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-1-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-2-3?r=fajar.purnama">https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-2-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-3-3?r=fajar.purnama">https://steemit.com/computers/@fajar.purnama/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content-3-3?r=fajar.purnama</a>
	</li>
	<li>
		<a href="http://0fajarpurnama0.weebly.com/blog/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content">http://0fajarpurnama0.weebly.com/blog/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser-content</a>
	</li>
	<li>
		<a href="https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser">https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/development-of-a-lossy-online-mouse-tracking-method-for-capturing-user-interaction-with-web-browser</a>
	</li>
</ul>
