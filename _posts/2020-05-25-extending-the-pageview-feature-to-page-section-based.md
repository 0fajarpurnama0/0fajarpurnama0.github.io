---
layout: post
title: 	Demonstration on Extending The Pageview Feature to Page Section Based: Towards Identifying Reading Patterns of Users
categories: masters
tags: [technology, mouse tracking, section based page view, web analytic, monitoring, online]
featuredimage: https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmbppBD4UdeoFiPVdF9azLZm28MPeCbWXcsy8e53y9wfMq/section-based-page-view-demo.gif
---

<iframe src="//www.slideshare.net/slideshow/embed_code/key/2ozcY2UkQiBL3Z" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Demonstration on extending_the_pageview_feature_to_page_section_based_presentation](//www.slideshare.net/0DarkKing0/demonstration-on-extendingthepageviewfeaturetopagesectionbasedpresentation "Demonstration on extending_the_pageview_feature_to_page_section_based_presentation")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Author

Fajar Purnama, Alvin Fungai, Tsuyoshi Usagawa.

## Note

*   This is an extended version of the [previous paper](https://0fajarpurnama0.github.io/masters/2020/05/24/introductory-section-based-page-view).
*   This paper was presented in _The Seventh International Conference on Science and Engineering (ICSE) at Yangon Technological University, Myanmar, on 9th December 2016_ but was not published online and distributed thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I hereby declare to license it as _customized [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)_ where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
*   The original is available at [Reasearch Gate](https://www.researchgate.net/publication/311544786_Demonstration_on_Extending_The_Pageview_Feature_to_Page_Section_Based_Towards_Identifying_Reading_Patterns_of_Users).
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/demonstration-on-extendingthepageviewfeaturetopagesectionbasedpresentation).
*   The source code is available at [Github](https://github.com/ 0fajarpurnama0/Section_Based_Page_View).

## Abstract

The Internet made it easier to access information almost anywhere at anytime. With all sorts of analytics such as pageview, behaviorist can see how users browsed the web. However there is a limit to how much data pageview analytic can provide. Pageview can answer what, when, and where a webpage is viewed but cannot answer how a page is viewed. Simply saying it cannot show the reading pattern of a user on a page. Therefore this work proposes to extend the tracking capability of the pageview feature where the monitoring is done as far as the sections of the page. The demonstrated web application developed consists of Javascript which provides the main feature of reading pattern tracking, Java to store the data into the database which later on can be used for analytics, and these were tested on a simple HTML page. The web application can show the date accessed to a particular section and the duration spent on that section by the user. It can also provide data that shows the reading pattern of a reader which in the future can be used for analysis by other researchers.

## Introduction

The invention of the Internet had greatly change how people access, share, and store information. Before, people have to take a long walk to the library to read books, and attend seminars to learn from others. Today many people shares information on the Internet which is practically accessible almost anywhere at anytime with all each person needed was a computer device connected to the Internet. Not long afterward, online analytics or another name web analytics was introduced where we can see what visitors do on our webpage. One of an online analytic is pageview that can show the number, the duration, and variation of people reading the webpage. Conventionally, it can be seen how popular a book is by surveying how many copies were sold and how many have read them, but through online there is no longer restriction to place and time, and with the help of computers it is possible to get data that could determine the behavior of the readers.

The field of education was also influenced by these technologies that sparks popular terms such as e-learning, online course, and learning analytics. Our colleges implemented e-learning on their respective universities and their research [1] [2] was able to determine whether the lectures and students were ready to use it, and their data can suggest the next course of action in order for the university to fully utilize e-learning. Another research in [3] studies about online discussion forums where they state that the design of the online course determines how active the students will be. Their data shows that assignments and quizzes decreases idleness and lurkers, and increases more active students. A research in [4] distinguished the learning patterns of those who fails and passes an online course, for example what materials students read, what exercises they attempted, and how often they perform online discussion before attempting an online exam.

Their research contributes to the quality of education, but there are still limits of how far their data can envision since they consist only of contents viewed, discussion posted, assignments submitted, quizzes attempted, and scores which cannot determine their detailed reading patterns. When reading a person can either read everything in detail, skim through the page, or semi-skim reading only the headlines then read in detail if that person finds it interesting. A common a example is when researcher browse to publish manuscripts where they first only reads the title, then the abstract if the title is eye catching, next skim through the manuscript by reading the introduction, figures, and conclusion if the abstract is interesting, finally they read in detail if they find it important to them. Simply the answer of what, when, and where the contents are viewed is in hand, but how the contents are viewed still remains a question. To answer this question it is necessary to extend the pageview feature alike by extending its monitoring to as far as each section of the page/contents.

This is one of many related learning analytics and online analytics work that introduces to a web application that can track the reading pattern of a user. It consists of a Javascript and Java tested on an Hyper Text Markup Language (HTML) page. However the objective of this work is only to demonstrate the simple Javascript, and web API created since it has not been tested on popular websites today. Though it is only tested on simple HTML, it can demonstrate recording of date accessed and the time spent by user on a particular section, which the idea is quite new today.

## Related Work

One of the very basic that all users on the Internet know is browser history which hold records of the date and time of websites that they visited. Software developers developed more advance tools. A Chrome Browser plugin called Timestats [5] shows statistical and timeline analysis of the websites users visited showing their browsing behaviors such as how long they have been browsing for the day and which website was frequently visited presented in graph and pie chart alike. Relic Browser [6] was able to record user clicks and scrolls, and if desired, typings on keyboard which all of them can show how users responded to a webpage. Another application called CA App Real Browser Monitoring [7] which can playback some browsing based on the events recorded, this is very close to what this work wants to achieve.

On another side there are applications developed by researchers from learning analytics field. One of our colleges [8] [9] developed an open textbook analytic tool that can record students’ actions for example page flipping, bookmarks, links clicked, notes created, and time spent on chapters and pages, [10] is also quite related but on e-magazines stating that it is able to show reading habits. On our perspective they desired to achieve a section based monitoring similar to this work but they used pages like on electronic textbook to divide contents into sections, however this work intends to monitor deeper than that. The closest and might be better to this work is Finger Trail Learning System (FTLS) [11] that records the mouse cursors trails. However it forces the users to trail on each characters on a text in order for it to appear and be highlighted, while this work does not force the users to do such but just browse normally. The authors made an introductory work on [12] but only highlight the main idea, on this work a detailed discussion will be made.

## Web Application

![https://file.army/i/BzOGQ9o](https://404store.com/2020/05/24/SBPV_Application_Architecture.png) 

Fig. 1 The Web Application Architecture, the client side is the representation interface which is an HTML page embedded with Javascript a client side programming language to capture the reading pattern of the user. The server side is the web API written using server side programming language to retrieve the captured data from the client and put them on the database. The web API can also show the data that is already on the database.

### Architecture Overview

TThe web application architecture can be seen on Fig. 1 which consists of representation interface, web application programming interface (API), and a database. The representation interface tracks the reading pattern of a user on this case the date and duration on a section which is state of the art of this work. The web API is quite common that retrieves the data recorded by the representation interface, stores it on the database, and may process the data to show the statistics. Together they form a complete web application which the structure is quite standard and simple but may require additional feature depending on the implementation. Next subsections explains in details the method of the representation interface and the web API but the full source code can only be viewed on the link [13].

### Representation Interface

Listing I Concept of Tracker Code

<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

<pre style="margin: 0; line-height: 125%">1: <span style="color: #007700"><form</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">“sect”</span> <span style="color: #0000CC">action=</span><span style="background-color: #fff0f0">"thewebAPI"</span> 
<span style="color: #0000CC">2:</span> <span style="color: #0000CC">onmouseleave=</span><span style="background-color: #fff0f0">"submitFunction(sect)"</span><span style="color: #007700">></span>
3: <span style="color: #007700"><div</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">”sect”</span> <span style="color: #0000CC">onmouseenter=</span><span style="background-color: #fff0f0">"startCount(sect)"</span> 
<span style="color: #0000CC">4:</span> <span style="color: #0000CC">onmouseleave=</span><span style="background-color: #fff0f0">"stopCount(sect)"</span><span style="color: #007700">></span>
5:
6: <span style="color: #007700"><input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">"text"</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">"date<sect>"</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">"date"</span><span style="color: #007700">></span>
7: <span style="color: #007700"><input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">"text"</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">"duration<sect>"</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">"duration"</span><span style="color: #007700">></span>
8:
9: Section Contents
10:
11:  <span style="color: #007700"></div></span> <span style="color: #007700"></form></span>
</pre>

</div>

The main idea is mostly on the representation interface where the user reading pattern is captured. This can be achieve by embedding client side programming language on this case Javascript is used on the content. Listing I shows the concept of applying tracker code to a section content of a webpage. On line 9 represents a certain content of a webpage and clad it in a tracker code to capture the date and duration when a user is reading the content. For this work the mouse cursor is used to indicate which section the user is currently reading. On line 3 the variable “onmouseenter” on the “div” tag indicates to record the date and starts the timer through the “startCount(sect)” customized function when the mouse cursor enters the section and its contents. On the other hand “onmouseleave” variable indicates to stop the recording when the mouse cursor leaves the section through the "stopCount(sect)" customized function. The time function is based on [14] with modification of resetting the timer when stop counting, get system’s date when counting, and add the variables to use array where here the functions use the parameter “sect” that will have different value for each section in order to separate the data recorded for each section. The “onmouseleave” on line 2 inside the “form” tag indicates to submit the date and time spent on that section data to the web API when the mouse cursor leaves the section. To submit them, line 6 and 7 is necessary as for the standard writing of “form” on HTML.

Listing II Tracker Code Insertion Algorithm

<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">

<pre style="margin: 0; line-height: 125%"><span style="color: #996633">Input</span>: <span style="color: #996633">parent_node</span> : <span style="color: #996633">parent</span> <span style="color: #996633">node</span> <span style="color: #996633">in</span> <span style="color: #996633">html</span> <span style="color: #996633">body</span>;
<span style="color: #996633">section_node</span> : <span style="color: #996633">parent</span> <span style="color: #996633">node</span> <span style="color: #996633">as</span> <span style="color: #996633">section</span> <span style="color: #996633">identifier</span>;
<span style="color: #996633">parent_node_name</span> : <span style="color: #996633">the</span> <span style="color: #996633">name</span> <span style="color: #996633">of</span> <span style="color: #996633">the</span> <span style="color: #996633">parent_node</span>; <span style="color: #996633">parent_node_length</span> : <span style="color: #996633">total</span> <span style="color: #996633">number</span> <span style="color: #996633">of</span> <span style="color: #996633">parent_node</span>;
<span style="color: #996633">defined_section_node_name</span> : <span style="color: #996633">name</span> <span style="color: #996633">of</span> <span style="color: #996633">the</span> <span style="color: #996633">node</span> <span style="color: #996633">section_node</span>;
<span style="color: #996633">define_section_node_length</span> : <span style="color: #996633">total</span> <span style="color: #996633">number</span> <span style="color: #996633">of</span> <span style="color: #996633">section_node</span>;

<span style="color: #0000DD; font-weight: bold">1</span>:    <span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>; <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
<span style="color: #0000DD; font-weight: bold">2</span>:    <span style="color: #996633">create</span> <span style="color: #996633">tracker_code</span>(<span style="color: #996633">i</span>);
<span style="color: #0000DD; font-weight: bold">3</span>:    <span style="color: #996633">insert</span> <span style="color: #996633">tracker_code</span>(<span style="color: #996633">i</span>) <span style="color: #996633">before</span> <span style="color: #996633">parent_node</span>(<span style="color: #996633">j</span>);
<span style="color: #0000DD; font-weight: bold">4</span>:    <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">/*</span><span style="color: #996633">go</span> <span style="color: #996633">to</span> <span style="color: #996633">next</span> <span style="color: #996633">parent_node</span> <span style="color: #996633">because</span> <span style="color: #996633">current</span> <span style="color: #996633">parent</span>
<span style="color: #0000DD; font-weight: bold">5</span>:   <span style="color: #996633">node</span> <span style="color: #996633">is</span> <span style="color: #996633">now</span> <span style="color: #996633">tracker_code</span><span style="color: #333333">*/</span>
<span style="color: #0000DD; font-weight: bold">6</span>:    <span style="color: #008800; font-weight: bold">while</span> <span style="color: #996633">parent_node_length</span> <span style="color: #333333">></span> <span style="color: #996633">define_section_node_length</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #008800; font-weight: bold">do</span>
<span style="color: #0000DD; font-weight: bold">7</span>:     <span style="color: #333333">/*</span> <span style="color: #996633">This</span> <span style="color: #996633">process</span> <span style="color: #996633">repeats</span> <span style="color: #996633">until</span> <span style="color: #007020">all</span> <span style="color: #996633">parent_node</span>  <span style="color: #996633">is</span> <span style="color: #996633">clad</span> <span style="color: #996633">with</span> 
<span style="color: #0000DD; font-weight: bold">8</span>:     <span style="color: #996633">tracker</span> <span style="color: #996633">code</span> <span style="color: #333333">*/</span>
<span style="color: #0000DD; font-weight: bold">9</span>:     <span style="color: #008800; font-weight: bold">if</span> <span style="color: #996633">parent_node_name</span>(<span style="color: #996633">j</span>) <span style="color: #333333">==</span> <span style="color: #996633">defined_section_node_name</span> <span style="color: #008800; font-weight: bold">do</span>
<span style="color: #0000DD; font-weight: bold">10</span>:       <span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">/*</span><span style="color: #996633">move</span> <span style="color: #996633">to</span> <span style="color: #996633">next</span> <span style="color: #996633">tracker_code</span><span style="color: #333333">*/</span>;
<span style="color: #0000DD; font-weight: bold">11</span>:       <span style="color: #996633">create</span> <span style="color: #996633">tracker_code</span>(<span style="color: #996633">i</span>);
<span style="color: #0000DD; font-weight: bold">12</span>:       <span style="color: #996633">insert</span> <span style="color: #996633">tracker_code</span>(<span style="color: #996633">i</span>) <span style="color: #996633">before</span> <span style="color: #996633">parent_node</span>(<span style="color: #996633">j</span>)
<span style="color: #0000DD; font-weight: bold">13</span>:     <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>;
<span style="color: #0000DD; font-weight: bold">14</span>:   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #0000DD; font-weight: bold">15</span>:   <span style="color: #996633">move</span> <span style="color: #996633">parent_node</span>(<span style="color: #996633">j</span>) <span style="color: #996633">into</span> <span style="color: #996633">tracker_code</span>(<span style="color: #996633">i</span>) <span style="color: #996633">as</span> <span style="color: #996633">child</span>
<span style="color: #0000DD; font-weight: bold">16</span>:   <span style="color: #333333">/*</span><span style="color: #996633">the</span> <span style="color: #996633">number</span> <span style="color: #996633">of</span> <span style="color: #996633">parent_node</span> <span style="color: #996633">decreases</span> <span style="color: #007020">and</span> <span style="color: #FF0000; background-color: #FFAAAA">“</span><span style="color: #996633">j</span><span style="color: #FF0000; background-color: #FFAAAA">”</span> <span style="color: #996633">is</span> <span style="color: #996633">currently</span> 
<span style="color: #0000DD; font-weight: bold">17</span>:   <span style="color: #996633">pointing</span> <span style="color: #996633">to</span> <span style="color: #996633">the</span> <span style="color: #996633">next</span> <span style="color: #996633">parent_node</span><span style="color: #333333">*/</span>
<span style="color: #0000DD; font-weight: bold">18</span>:  <span style="color: #008800; font-weight: bold">end while</span>
</pre>

</div>

On the introductory work [11] was to insert the tracker code manually as on Listing I which will work on any webpage, while this work introduces a method to insert the tracking code dynamically using document object model (DOM) HTML with the algorithm shown on Listing II, though it is only tested on a simple HTML page which contains no other than “html”, “head”, “body”, “h1”, “p”, and “br” tags. Most HTML today is more complicated and may need extra method for it to work.

The tracking code is all on Listing I except for line 9 and the goal is to insert them automatically. For a simple HTML the body usually contains nodes/tags “h1” for heading, “p” for paragraph, “div” for sections, and etc. First, one of them have to be chosen as a section identifier called a section node. Second create a tracker code as many as the existing section node (on the algorithm is one additional because the starting node is usually not a section node). Third put the respective section node and its following nodes into their respective tracker code (the first section node and its following until the second section node into the first tracking code, then the second section node and its following until the third section node into the second tracking code, and so on).

### Web API

The web API’s job is to retrieve the tracking data (date accessed and time spent) of a section by the representation interface and store it into the database. Since capturing the tracking data uses a client side programming language, it is still stored on the client side, and therefore the client must handover the data to the server. The “form” tag Listing I is to submit the data to the server, and the server must be prepared with a server side programming language which on this case Java is used. The first thing the program needs to do is to be able to read the parameter values “date” and “duration” from Listing I line 6 and line 7, and store it in a variable. The second thing is to make a connection to a database server, create a database if it is not created already, create a table, and store the values into the table. For the database server uses MySQL on this work. Afterwards another web API can be created to mine this data, present it like the ones on [5] which is beyond the scope of this work.

## Demonstration

![https://file.army/i/BzOGS9I](https://404store.com/2020/05/25/section-based-page-view-demo.gif) 

Fig. 2 Demonstration that date and duration appears for the first section when the mouse cursor enters the first section of the page. Currently it shows that the mouse cursor had stayed on the first section for six seconds, note that the boxes in second section is still empty. The first two boxes are the name of a user, the third box is the section, the fourth box is the date, the fifth box is accumulated duration, while sixth box is discrete (not demonstrated here). Fig. 3 Demonstration, showing that the timer on the first section stops when the mouse cursor moves to the second section after six seconds have passed. The user’s name, date and timer appears, and it is shown that the mouse cursor stayed on the second section for ten seconds.

The demonstration is on Fig. 2 and Fig. 3\. The HTML page normally consists only of headers and paragraphs. Once it is applied an external Javascript source, it is inserted the tracker code and for this demonstration it is shown timer count on that page. The first and second box contains the first name and last name of the user, followed by the third box the section’s name extracted from the header’s text. Once the mouse cursor enters the first section as on Fig. 2 the date pops on the fourth box, and the timer on the fifth box and sixth box (fifth box was design for accumulated timing and sixth box for discrete timing which is not demonstrated here). Next when the mouse cursor moves to the next section, the timer on the previous section stops and the timer on this section starts as on Fig. 3.



<div class="video-container"><iframe src="https://run.plnkr.co/plunks/l4p6tt/" alt="https://plnkr.co/plunk/l4p6tt" allowfullscreen=""></iframe></div>

[Source Code](http://raboninco.com/22989623/section-pageview)



The page will submit the six data based on the six boxes everytime the mouse cursor leaves the section to a web API. The web API stores it on a database, and another simple web API can be created to show the data. An example output can seen on Fig. 4 where a raw output is shown from the database’s table. From the data can be said that the user starts reading from the first section of the context for 6 seconds, then moves to the next section and read there for 10 seconds, then moves on again. Normally when the duration is short, the user is skimming through the page, but when the duration is long, the user is focused on that section. Compared to using page view this data can show more information about user’s reading patterns.

![https://file.army/i/BzOG1a9](https://404store.com/2020/05/24/Result.png) 

Fig. 4 A sample result from a web API showing the contents of the table within the database which are data captured by the representation interface. It showed the user Purnama Fajar have read the first section on the specified dates for six seconds, then reads the second section for 10 seconds and so on.

## Conclusion and Future Work

The web application was able to demonstrate recording the date accessed and time spent on a section of an HTML page by a user which can be used as an extension to pageview feature. The data obtained from the web application was able to show more reading pattern information and other researchers on related fields may use this on their analysis and may find new answers.

Though the concepts were shown on this work but were not implemented yet on a real situation/webpage which leaves this for a future work. Further evaluation issues such as appearance, compatibility, and resource consumption issues still needs to be addressed.

## Acknowledgment

Part of this work was supported by JSPS KAKENHI Grant-in-Aid for Scientific Research 25280124 and 15H02795.

## Reference

1.  S. Paturusi, Y. Chisaki, and T. Usagawa, “Assessing lecturers and student’s readiness for e-learning: A preliminary study at national university in north sulawesi indonesia,” GSTF Journal on Education (JEd), vol. 2, no. 2, pp. 1–8, 2015.
2.  H. T. Sopu, Y. Chisaki, and T. Usagawa, “Use of facebook by secondary school students at nuku’alofa as an indicator of e-readiness for e-learning in the kingdom of tonga,” International Review of Research in Open and Distributed Learning, vol. 17, no. 4, pp. 203–223, 2016.
3.  D. Nandi, M. Hamilton, J. Harland and G. Warburton, “How Active are Students in Online Discussion Forums?,” In Proc. Thirteenth Australasian Computing Education Conference (ACE 2011)., pp. 125-134.
4.  M. Wen and C. P. Rosé, “Identifying Latent Study Habits by Mining Learner Behavior Patterns in Massive Open Online Courses,” In Proc. 23rd ACM International Conference on Conference on Information and Knowledge Management., pp. 1983-1986.
5.  timestats. [Online]. Available: [https://chrome.google.com/webstore/detail/timestats/ejifodhjoeeenihgfpjijjmpomaphmah](https://chrome.google.com/webstore/detail/timestats/ejifodhjoeeenihgfpjijjmpomaphmah). [Accessed 10 October 2016]
6.  timestats. [Online]. Available: [https://chrome.google.com/webstore/detail/timestats/ejifodhjoeeenihgfpjijjmpomaphmah](https://chrome.google.com/webstore/detail/timestats/ejifodhjoeeenihgfpjijjmpomaphmah). [Accessed 16 October 2016]
7.  New Relic Browser. [Online]. Available: [https://newrelic.com/browsermonitoring](https://newrelic.com/browsermonitoring). [Accessed 16 October 2016]
8.  Real Browser Monitoring. [Online]. Available: [https://asm.ca.com/en/feature/realbrowsermonitoring.html](https://asm.ca.com/en/feature/realbrowsermonitoring.html). [Accessed 16 October 2016]
9.  D. Prasad, R. Totaram, and T. Usagawa, “A framework for open textbooks analytics system,” TechTrends, vol. 60, no. 4, pp. 344–349, 2016.
10.  D. Prasad, R. Totaram, and T. Usagawa, “Development of Open Textbooks Learning Analytics System,” International Review of Research in Open and Distributed Learning, vol.17, no. 5, pp. 215–234, 2016.
11.  R. S. T. Lee, J. N. K. Liu, K. S. Y. Yeung, A. H. L. Sin and D. T. F. Shum, “Agent-based Web Content Engagement Time (WCET) Analyzer on e-Publication System,” In Proc. 2009 Ninth International Conference on Intelligent Systems Design and Applications., pp. 67-72.
12.  K. Maruya, J. Watanabe, H. Takahashi and S. Hashiba, “A learning system utilizing learners’ active tracing behaviors,” In Proc. Fifth International Conference on Learning Analytics And Knowledge., pp. 418-419.
13.  F. Purnama, A. Fungai, T. M. Do, A. H. A. M. Siagian, A. Annas, H. Susanto, Hendarmawan, T. Usagawa, H. Nakano, “Introductory Work on Section Based Page View of Web Contents: Towards The Idea of How a Page is Viewed,” submitted for publication.
14.  Section based page view. [Online]. Available: [https://github.com/0fajarpurnama0/Section_Based_Page_View](https://github.com/0fajarpurnama0/Section_Based_Page_View). [Accessed 10 October 2016]
15.  Window settimeout() method. [Online]. Available: [http://www.w3schools.com/jsref/met_win_settimeout.asp](http://www.w3schools.com/jsref/met_win_settimeout.asp). [Accessed 10 October 2016]

<div class="video-container">
	<iframe src="https://lbry.tv/$/embed/fajars-presentation-icse2016/387bf9e2370868250888e3bb8b355ac09a867c5e" allowfullscreen></iframe>
</div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/demonstration-on-extending-the-pageview-feature-to-page-sect-xvrwrnp?a=4oeEw0Yb0B&tid=hicc](https://www.publish0x.com/0fajarpurnama0/demonstration-on-extending-the-pageview-feature-to-page-sect-xvrwrnp?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/masters/2020/05/25/extending-the-pageview-feature-to-page-section-based](https://0fajarpurnama0.github.io/masters/2020/05/25/extending-the-pageview-feature-to-page-section-based)
*   [https://medium.com/@0fajarpurnama0/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-6ad25d6d71ea](https://medium.com/@0fajarpurnama0/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-6ad25d6d71ea)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/extending-the-pageview-feature-to-page-section-based](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/extending-the-pageview-feature-to-page-section-based)
*   [https://0fajarpurnama0.tumblr.com/post/619025660934062080/demonstration-on-extending-the-pageview-feature-to](https://0fajarpurnama0.tumblr.com/post/619025660934062080/demonstration-on-extending-the-pageview-feature-to)
*   [https://0darkking0.blogspot.com/2020/05/demonstration-on-extending-pageview.html](https://0darkking0.blogspot.com/2020/05/demonstration-on-extending-pageview.html)
*   [https://hive.blog/technology/@fajar.purnama/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/42-demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/42-demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users)
*   [https://steemit.com/technology/@fajar.purnama/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users](http://0fajarpurnama0.weebly.com/blog/demonstration-on-extending-the-pageview-feature-to-page-section-based-towards-identifying-reading-patterns-of-users)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstration-on-extending-the-pageview-feature-to-page-section-based-identifying-reading-pattern](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/demonstration-on-extending-the-pageview-feature-to-page-section-based-identifying-reading-pattern)
