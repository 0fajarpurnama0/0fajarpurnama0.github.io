---
layout: post
title: Implementation of real-time online mouse tracking on overseas quiz session From server administrator point of view (pre-print)
categories: doctoral
tags: [technology, mouse tracking, implementation, investigation, online, real time]
featuredimage: https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmRoduv7nGnihYcgNhVProkBBDA3KScD49Wm6amF8MJgEa/5.jpg
---

## Note

If you just want to see the mouse tracking demonstration, it is available of most of my [blogs that I can write JavaScript](https://0fajarpurnama0.github.io/doctoral/2020/04/11/keyboard-mouse-scroll-zoom-demo-and-mobile) in, and the source code is on [Github](https://github.com/0fajarpurnama0/Real-Time-Online-Mouse-Tracking-Animation/tree/mouse-tracking-only).

The original article is copyright under © Springer Nature Switzerland AG, Part of Springer Nature:

1.  Authors are [Fajar Purnama](https://0fajarpurnama0.github.io) (me), [Otgontsetseg Sukhbaatar](https://www.researchgate.net/profile/Otgontsetseg_Sukhbaatar), [Lodoiravsal Choimaa](https://www.researchgate.net/profile/Lodoiravsal_Choimaa), and [Tsuyoshi Usagawa](https://www.researchgate.net/profile/Tsuyoshi_Usagawa).
2.  Title of the article is _Implementation of real-time online mouse tracking on overseas quiz session From server administrator point of view._
3.  Published in [Education and Information Technologies, Online First, Page 1-22, 6 March 2020](https://link.springer.com/journal/10639/onlineFirst), [DOI is 10.1007/s10639-020-10141-3](https://doi.org/10.1007/s10639-020-10141-3).
4.  Available at [https://link.springer.com/article/10.1007/s10639-020-10141-3](https://link.springer.com/article/10.1007/s10639-020-10141-3).

This is Author's pre-print which is the submitted version or before the peer review process. [The copyright was transferred from Fajar Purnama to Springer Science+Business Media, LLC, part of Springer Nature and stated in the copyright transfer that "Author(s) retain the right to make the pre-print available on their own personal, self-maintained website](https://0fajarpurnama0.github.io/misc/2020/06/02/springer-eit-2020-copyright-transfer). [Springer not only encourages pre-print sharing](https://www.springer.com/gp/open-access/preprint-sharing/16718886), but even allow to license it as [creative commons](https://0fajarpurnama0.github.io/misc/2020/04/12/creative-common-license), therefore I license this post as customized [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.

As I am the author, I can say that there is significant difference between before and after peer review version. [Springer is kind enough to allow sharing of the authors' accepted version (AAM) 12 months after publication which will be 6 March 2021](https://0fajarpurnama0.github.io/misc/2020/06/02/springer-eit-2020-copyright-transfer). However, we can open it faster if you are interested.

[Springer offers open access/CC-BY at a price where for this article, it costs €2170, $2750 or £1,870.](https://www.springernature.com/gp/open-research/journals-books/journals) For example, anyone can freely republish my [previous article](https://0fajarpurnama0.github.io/doctoral/2020/06/01/preprocess-realtime-online-mouse-tracking-big-data) because it is open access. You are able to donate in [cryptocurrency (includes BAT and bittube)](https://0fajarpurnama0.github.io/donation/cryptocurrency/finance/2020/03/06/cryptocurrencydonation), [paypal, alipay](https://0fajarpurnama0.github.io/donation/finance/2020/03/06/digitalwalletdonation), [JavaScript mining](https://codepen.io/0fajarpurnama0/pen/vYLYepd), etc, and I will apply for open access once threshold is reached where I will store the donation in a crypto wallet and I will show the balance on a webpage.

_I do highly recommend to contact me before donating where you can find my social media links on my donation page but with technology today, I cannot stop you from donating so make sure to contact me so that I can list you on the donator list. **Beware of scams**, my recommendation is to contact me and book or delay your donation. Once enough people are interested, I will contact you back on the same exact window. If there's a comment section here, you can book your donation in the comment_

## Abstract

Mouse tracking serves as an alternative to eye tracking in measuring the learning process in education because of its affordability. Moreover, mouse tracking does not require extra hardware, as in the case of eye tracking, because it is a feature in personal computers by default. Therefore, it is possible to implement mouse tracking in a massive open scale. However, mouse tracking has only been implemented in a laboratory setting to date, ostensibly because of the associated extremely high running costs. Nonetheless, there is no available data to support the claim of high resource costs, which has resulted in much speculation among implementers. In general, the implementation of mouse tracking in a non-laboratory environment is still rare. Therefore, the authors developed an application to investigate real-time mouse tracking online. It was implemented on the Moodle learning management system and tested on an online quiz session accessed abroad. Additionally, the application can handle tracking on mobile devices. In this work, the main resources that include CPU, network, RAM, and storage costs were measured when mouse tracking was used. These results can serve as a reference for network and server administrators during future implementation of this technique. It was determined that the characteristics of mouse activities were dynamic in that occasional surges and lulls were observed. If mouse tracking data are not aggregated and transmitted as a single data package, then mouse tracking can be implemented on a large scale.

## Introduction

With the recent advances in technology, including the Internet, information can be searched and published with few restrictions. With the advancement in information communication technology (ICT), more activities are being conducted online. Individuals no longer spend hours staring at computer screens after work or class; instead, they often use their mobile devices to stay online irrespective of the time or their physical location. (Dentzel, 2013). Unlike in the past where individuals were limited to local newspapers, televisions, and textbooks, people can now easily search and choose the information they want using advanced search engines such as Bing, DuckDuckGo, Google, and Yahoo. In the case of social networking services (SNS) such as Facebook, Instagram, Line, and Twitter, individuals can get the latest news, interact with one another, open discussions, and share information. Users can enjoy entertainment such as viewing photographs, listening to music, and watching videos using services such as Dailymotion, Metacafe, and Youtube. In addition, video games are also available. Shopping is also facilitated by online merchants such as Aliexpress and Amazon, where individuals can order items and have them delivered. All of these online activities can be performed using a computer device connected to the Internet.

Education has also benefitted from the Internet and courses can be delivered blended (Paturusi et al., 2012) or fully online (Wen and Rosé, 2014). A variety of learning and teaching activities can be performed outside the classroom, for example, the reading of learning material, discrete discussion in forums, submission of assignments, and the performance of exercises (Linawati et al., 2017). This greatly reduces the burden on both students and teachers. The number of higher education institutions that provides online education is increasing, and it is only a matter of time before primary and secondary schools (Sopu et al., 2016) follow this model. Implementing an online course is currently much easier than in the past because of the advent of learning management systems (LMS) where most processes are automated (Kakasevski et al., 2008) without the need for advanced knowledge on computers and web programming (Chourishi et al., 2011); only computer literacy is a prerequisite. The next step after implementing online courses is the implementation of massive open online courses (MOOC) (Drake et al., 2015). Unlike regular online courses, everyone can join MOOC, which is not limited to students of certain institutions.

With the option of numerous online activities, many studies have become interested in analyzing these activities in an area known as online analytics. Online analytics records who, where, and when associated with online activities. The most popular metrics are total traffic, source traffic, bounce rate (the rate of people immediately leaving the page after visiting), and conversion rate (whether the page fulfills its purpose) (Bluehost, 2016). Whether it is a public website or an online course, the concept is almost the same. On a public website, the number of page views, comments, ratings, image views, videos played, and items bought are recorded. Based on page views only, a variety of analyses can be performed. A page view can predict a user’s demographic (Hu et al., 2007), characterize an audience in terms of preference for news, multimedia, games, or adult content (Kumar and Tomkins, 2010). It can also predict whether a user is at risk on visiting malicious websites (Canali et al., 2014). Page views also provide hints on how to improve a website’s design, for example moving popular webpage links to the header (Khan et al., 2018). There are already many web analytics software available such as Google Analytics, Open Web Analytics, Piwik, and Cloudflare (spa, 2019). In online courses, logins, learning materials viewed, discussions, assignments submissions, quizzes attempt, and grades are recorded (moo, 2016). They can reveal for example a student’s level of activity (Nandi et al., 2011), how difficult the quizzes are for students (Nakano et al., 2005; Usagawa et al., 2006), and even identify failing students (Fungai and Usagawa, 2016). Usually, these data are used to measure the learning performance of students (Wen and Rosé, 2014).

Although those popular metrics can measure learning performance, there is a limit when it comes to measuring the actual learning process (Zushi et al., 2012). As such, the what, when, and where can be measured in detail, but not the how (Purnama et al., 2016a). To obtain more detailed measurements, it is necessary to record the time spent viewing a page (Li and Tsai, 2017). To obtain detailed information, the time spent viewing each section of a page can be recorded (Koh et al., 2018). One of the most common approaches is to divide a page into subpages (Lee et al., 2009) or to insert tracker codes into sections of the page (Purnama et al., 2016b). More powerful approaches involve eye-tracking (Pernice, 2017) and mouse tracking (Henrie et al., 2015; Koh et al., 2018), which can provide more information than just time spent viewing particular sections.

Eye tracking is arguably one of the most accurate methods for recording the viewing activity of users, but the financial cost is very high, thereby confining the technology to lab environments (Lai et al., 2013). Although mouse tracking is not as accurate, the financial cost is low in comparison. No additional devices are needed to perform mouse tracking, which can be implemented by anyone who has a computer. Most people own computers and with the increasing availability of the Internet, it is possible to perform massive scale mouse tracking implementation (Huang et al., 2011). Therefore, mouse tracking can be implemented outside of the laboratory in places such as classrooms, online learning, and websites. Recently, web mouse tracking software such as Mouseflow, ClickTale, ClickHeat, and Sessioncam has emerged (NT, 2015).

Unfortunately, another obstacle must be overcome before widespread implementation of mouse tracking can be achieved. This is related to the resource cost, especially for personal implementation. It is rumored that the resource cost for maintaining mouse tracking (eye tracking as well) is notoriously high, and therefore classified as Big Data (Sin and Muthu, 2015). However, the rumors were not confirmed. Furthermore, mouse tracking resource cost was never discussed in detail. Leiva and Huang (2015) state that a mouse swipe from left to right can generate hundreds of cursor coordinates and a mouse activity over a minute can generate 1 MB (megabyte) of data. That is the only information related to mouse tracking resource cost that was presented in their article. Discussions on these matters are very few, which has been unhelpful to implementers. Therefore, this work investigates the popular resource costs of mouse tracking including a computer processing unit (CPU), data rate, random access memory (RAM), and storage. A real-time online mouse tracking application was developed that can be implemented on any website. In this case, it was demonstrated on a quiz session on Moodle LMS. The source code is available on Github (Authors, 2019a). The implementation and resource measurement took place for three events: solo measurements in a laboratory, local testing by five people of a quiz session in a laboratory, and an overseas quiz session by students of classroom size in Mongolia, accessing a server in Japan.

This article is divided into six chapters. The first chapter is the introduction that includes background information on online activities and popular analytics, mouse tracking, and the problem of mouse tracking implementation as previously described. The second chapter is the literature review in which the results of several interesting studies in the field of eye tracking and mouse tracking are presented. Mainly, this chapter shows that there are promising results, which have generated interest and excitement, in these fields. The last part of this chapter discusses the state-of-the-art of this work. The third chapter is the system overview that discusses the real-time online mouse tracking application, developed as a part of this work, and mainly considers its operation and features. The fourth chapter is the experiment and implementation that explains the hardware and tools used, subjects, and the procedures of the experiment and their implementation. The fifth chapter presents the results and discussion on the mouse tracking data that was collected, sample analysis, and the resource costs from both calculated and profiled measurements. The sixth chapter is the conclusion, which summarizes the main findings.

## Literature Review

### Eye Tracking

Rayner (1998) reviewed many articles regarding eye movements spanning from 1971–1998 and claimed that eye tracking technologies existed since then. The most fundamental aspect of eye movements are fixation and saccade, where fixation is the process of fixing the gaze to a certain region of interest (ROI), and saccade is the process of moving the gaze to another ROI. However, it is up to the examiner to interpret eye movements, for example, eye movements can provide information about the user’s attention, interest, and state of mind. Eye tracking has been researched in the field of pattern recognition whether in a non-digital environment (Holmqvist and Wartenberg, 2005; Holsanova et al., 2006) or digital environment (Hyönä et al., 2002; Liu, 2005; Duggan and Payne, 2011; Jarodzka et al., 2017), search engine result page (SERP) (Rodden and Fu, 2007; Rodden et al., 2008; Huang et al., 2011, 2012), web evaluation and usability (Ehmke and Wilson, 2007; Buscher et al., 2009; Tzafilkou and Protogeros, 2017; Hsu et al., 2018), and visual search (Rayner, 2009; Dragunova et al., 2017).

In the category of learning, Lai et al. (2013) reviewed eye movement research in seven themes including pattern of information processing, effects of instructional design, reexamination of existing theories, individual differences, effects of learning strategies, patterns of decision making, and conceptual development. They concluded that the eye-tracking method provides a promising channel for educational researchers to connect learning outcomes to cognitive processes. Many educational researchers gained interest in the application of eye tracking in the process of learning and teaching, especially in online learning, which can make up for the lack of emotional connection between students and teachers (Cantoni et al., 2012). For example, eye tracking can capture signs of comprehension difficulties, cognitive stress, or tiredness of students during online learning, which a good teacher is able to perform during face-to-face learning.

In e-learning, eye tracking has been integrated into the online framework where the eye tracking hardware captures eye movement on the client, transmits the eye movement data to the server, then processes the data for direct analysis or to implement interactivity. Finally, the data are kept in storage.

*   One of the earliest eye tracking implementation research in e-learning and online learning was Adaptive E-Learning via the Eye Tracking (AdELE) framework (Barrios et al. 2004; Pivec et al. 2006). The framework provides adaptive, integrated, and real-time eye tracking during e-learning processes. Real-time eye tracking can yield spontaneous interaction or interactivity in students. For example, it can detect tiredness and instruct the user to take a break.
*   Wang et al. (2006) integrated eye tracking to an emphatic software agent (ESA) in online education. Eye tracking captures the state of awareness of the learners and responds accordingly. For example, when the learner views a topic and interest is detected, the ESA provides positive feedback. When the learner looks away often, the ESA queries the learner on their level of interest.
*   Calvi et al. (2008) developed e5Learning (enhanced exploitation of eyes for effective e-learning) which is a system that consists of three main components: (1) monitoring of accessed screen, areas/history recorder where the author can set the ROI to capture the extent of gazing, (2) contextual content generator whereby a certain content is visible after the user spends a certain amount of time on an ROI, (3) emotion recognizer.
*   Wei et al. (2009) integrated eye tracking into traditional Adaptive and Personalized e-Learning Systems (AeLS). Usually, the user’s learning profile is generated based on questionnaires. In eye tracking based AeLS, eye tracking is used to capture the interest of users to generate the customized learning profiles.
*   Ivanović et al. (2017) integrated eye tracking into Programming Tutoring System (Protus) which is an intelligent system that can adapt content based on the learning style of the user. Similar to the work of Wei et al. (2009), the learning styles of the users are usually determined via questionnaires. In this case, eye tracking is utilized to identify the users’ learning styles.

Other than being integrated into the online learning framework, eye tracking is often utilized without adaptability and interactivity, simply as a tool to analyze specific characteristics of the learners and to perform post actions based on this analysis (Rakoczi and Pohl, 2012; Lupu and Ungureanu, 2013). Examples of utilizations include obtaining the cognitive (Eger, 2018) and emotional state of the users (Cantoni et al., 2012), evaluation of instructional design (Jarodzka and Brand-Gruwel, 2017; Yang et al., 2018) and user interface design (UID) (Ramakrisnan et al., 2012; Chivu et al., 2018), pattern recognition (Alhasan et al., 2018; Parikh and Kalva, 2018), strategic patterns (Tsai et al., 2012; Busjahn et al., 2014), etc.

Until now, eye tracking has yet to be implemented on a large scale because of hardware limitations. Almost all eye tracking articles cited herein are based on experiments in laboratory environments where separate and usually expensive eye tracking hardware is utilized. Most of these articles express confidence in the eventual reduction in cost and affordability of eye tracking hardware and the expectation that eye tracking will be implemented on a large scale in the future. In recent years, few researchers have attempted to fulfill these expectations, for example, Sungkur et al. (2016) and Zheng and Usagawa (2018) developed eye tracking in web cameras. As almost all modern laptops are equipped with a web camera, and most people including students own laptops, eye tracking in a web camera is a key aspect in the quest for large-scale implementation.

### Mouse Tracking

Although most researchers prefer eye-tracking data, many mouse tracking articles have noted that mouse tracking is a viable alternative because eye tracking technology is too expensive and inconvenient (Cooke, 2006). There are investigators who have attempted to correlate mouse tracking to eye tracking by utilizing exploratory studies (Rodden et al., 2008), correlation analysis (Chen et al., 2001; Rodden et al., 2008; Voßkühler et al., 2008; Liebling and Dumais, 2014; Demšar and Çöltekin, 2017), or prediction (Guo and Agichtein, 2010; Johnson et al., 2012; Huang et al., 2012; Navalpakkam and Churchill, 2012) to demonstrate the inaccuracy involved in correlation mouse tracking data to eye tracking data. In contrast, there is also active research that treats mouse tracking data independently (Navalpakkam and Churchill, 2012). There are also other rare studies that attempt to direct the eye gaze to the mouse cursor by restricting the user’s field of vision, thereby coupling the mouse tracking data with the eye tracking data (Tarasewich et al., 2005; Lagun and Agichtein, 2011; Maruya et al., 2015; Kim et al., 2017). Similar to eye tracking, mouse tracking is also conducted in the area of pattern recognition, search engine result page (SERP) (Rodden and Fu, 2007; Rodden et al., 2008; Guo and Agichtein, 2008; Huang et al., 2011, 2012; Lagun et al., 2014; Arapakis and Leiva, 2016), web evaluation and usability (Arroyo et al., 2006; Navalpakkam and Churchill, 2012; Manson et al., 2012), and education.

In the field of education, recent articles emphasize the need to record the time spent on a learning activity to obtain the user’s behavior patterns (Li and Tsai, 2017). Koh et al. (2018) emphasize the need to record the time spent on a particular section of a learning activity because the time spent on an entire page does not reflect the actual learning time given that the time spent on different sections varies. The authors further stated that mouse trajectories and scrolling can be used to determine the time spent on a particular section, although the capability of mouse tracking is more than simply being able to determine the time spent on a particular section. Mouse tracking can be used record the trajectories, velocities, and many other variables of the mouse’s cursor that can be used to measure many things including cognitive load (Rheem et al., 2018). However, the data generated by mouse tracking can be overwhelming to examine, although this is no longer a major problem because there are many data mining and visualization applications that can be used to extract meaningful information from the data of the users (Poon et al., 2017).

The earliest article on mouse tracking implementation was presented by Mueller and Lockerd (2001), whereas in e-learning, the earliest article was presented around the year 2012.

*   Zushi et al. (2012) implemented a web application that can record mouse trajectories for an English jumbled-word question where the learners are asked to match the jumbled-words with the appropriate Japanese translation. Their contributions were: (1) recording mouse events including durations, coordinates, and events, (2) recording the events specifically for their system including English words activated, English words selected into a group, and drag & drop, (3) replay and visualizations of mouse trajectories and events, and (4) interpretation of the mouse data and statistical analysis such as correlation analysis and clustering. In the end, they achieved their objective of analyzing the learning process whereas other systems were only able to analyze the learning outcome.
*   Rodrigues et al. (2013) also emphasize the learning process and non-intrusive data gathering, but their research focused on the identification of the stress levels of students in e-learning. They implemented mouse and keyboard tracking in Moodle where they captured the click accuracy, click duration, amount of movement, mouse movement, mouse clicks, and keyboard strokes. They attempted to create a controlled experiment where one group was set to be normal, while the other group was set to be stressed. In the end, they obtained mouse and keyboard profile comparisons for the stressed and non-stressed users and established that stressed users exhibited a drastic increase in all actions including key down, key up, mouse down, mouse up, mouse wheel, and mouse movement.
*   A similar study was performed by Salmeron-Majadas et al. (2014) but with different indicators including affective states (degree of valence, for example pleasure versus displeasure and degree of arousal for example high versus low activation) and behavior changes using the Self-Assessment-Manikin scale. Their article also stated that mouse and keyboard tracking methods are non-intrusive and low cost. Their objective was to generate automatic affective states and behavior change identifier from mouse and keyboard logs by exploiting machine learning.
*   Harrati et al. (2016) also utilize mouse and keyboard tracking on Moodle, although their purpose was not to measure the learning process but to measure the usability of Moodle, whether it is easy to use or not. They stated that using the System Usability Scale (SUS) was insufficient for measuring the usability of Moodle. Therefore, they added the number of clicks, task duration, cursor distance, and completion rate to their measurements. The authors collected mouse and keyboard data of lecturers as they performed tasks on Moodle including login, visiting course section, visiting module upload section, and uploading a module.

As shown in the preceding, there are many interesting works on mouse tracking; however, very few have investigated the implementation and resource costs associated with the process, which has caused implementers to doubt the feasibility of large-scale implementation. Huang et al. (2011) conducted a massive scale mouse tracking on Microsoft’s Bing search engine. By reducing the amount of mouse trajectories recorded their massive scale experiment succeeded. However, they only discussed the data analysis afterward and neglected to consider the resource costs. Leiva and Huang (2015) and Martín-Albo et al. (2016) addressed the issue but their discussion quickly shifted to the solution, which is primarily based on compression methods. To date, there are no articles, except this, that consider the resource costs of mouse tracking implementation.

## Real-time Online Mouse Tracking System Overview

### Framework

The mouse tracking application developed by the authors was designed to run online and in real-time. Online means that the mouse tracking is run remotely via the Internet where the client runs the mouse tracking application when browsing a webpage and the associated data is sent to the server. Real-time means that the mouse tracking data is continuously sent by the client to the server during the mouse tracking process. Overall, this can be seen in the real-time online mouse tracking framework on Fig. 1.

<figure>![https://file.army/i/BzMSfna](https://404store.com/2020/06/04/1.png)

<figcaption>Fig. 1\. Real-time Online Mouse Tracking Framework. The Framework is divided into two sides where one side is the client and the other side is the server. The client and the server are connected via the Internet. The server contains the front end, which is usually the representation side of the website, and back end where background processing and data storing occurs. There is a browser on the client equipped with client-side programming. The arrow presents the direction of the processes and the number presents the order of the processes</figcaption>

</figure>

The mouse tracking process is illustrated on Fig. 1\. Firstly, the client requests the webpage from the server. Secondly, the server sends the webpage mainly in Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS) embedded with the mouse tracking code written in client-side programming language. The client-side programming language used in this work is jQuery, which is a JavaScript (JS) library designed to simplify HTML Document Object Model (DOM) tree traversal and manipulation, as well as event handling, CSS animation, and Asynchronous JS and XML (Ajax) (jsf, 2019). Thirdly, the client’s browser views the retrieved webpage (HTML and CSS). Fourthly, the client’s browser executes the mouse tracking code. The clients actually have full control over the mouse tracking process because the programming is client-side based. However, they are usually unaware of this because the mouse tracking runs in the background. They would have to thoroughly inspect the background area to control the mouse tracking process. However, most clients do not attempt to perform this task. This is the reason why mouse tracking is considered non-intrusive. Fifthly, the mouse tracking code contains post methods to transmit the data to the server. The author designed the mouse tracking code to transmit data on each event (clicks, moves, scrolls, etc.) immediately (real-time). Sixthly, the server using server-side programming language receives the post data and connects to the database. In this work, the server-side programming language used is Hypertext Preprocessor (PHP) because Moodle and most other LMS are written in PHP. Finally, the mouse tracking data is stored on the database in form of Structured Query Language (SQL).

### Application

The mouse tracking application developed as part of this work is a standalone application that can be implemented either on the server or on the client. In the case of the former, the mouse tracking code is incorporated into the webpage. A webpage mainly contains HTML, CSS, and JS. A more direct approach is to inject the mouse tracking code in the JS code. Another approach is to create a plugin for a certain content management system (CMS) or LMS. In this work, a Moodle mouse tracking plugin was developed, which can be in the form of an admin plugin, theme plugin, or a block plugin shown as shown in Fig. 2\. A theme plugin usually applies to entire Moodle pages managed by the administrator while a block plugin applies to selected pages usually managed by managers and teachers.

<figure>![https://file.army/i/BzMSxG4](https://404store.com/2020/06/04/2.png)

<figcaption>Fig. 2\. Mouse Tracking Plugin on Moodle. The figure shows examples of mouse tracking implemented as a block plugin (in blue) and theme plugin (in red).</figcaption>

</figure>

The mouse tracking Moodle plugin was implemented on the authors’ laboratory server, which can be accessed on https://md.hicc.cs.kumamoto-u.ac.jp. The authors planned to publish the Moodle plugin on Moodle’s website in the future. To implement the application on the client, the mouse tracking code is incorporated into the browser’s code. This can be achieved by direct insertion or plugin installation. Fig. 3 shows a mouse tracking browser extension installed on Google’s Chrome Browser. The authors plan to publish the extension in Chrome stores and other online stores.

<figure>![https://file.army/i/BzMSe7A](https://404store.com/2020/06/04/3.png)

<figcaption>Fig. 3\. Mouse Tracking Chrome extension. The mouse tracking extension is visible on the extension bar. The user can open the configuration window by clicking the icon and config. the events (clicks, moves, scrolls) to record.</figcaption>

</figure>

Implementation on a server is more efficient because the mouse tracking code is only installed on the server, whereas implementation on the client requires installation on each client. However, server implementation limits the mouse tracking process to the server’s website only. The authors were able to identify users as they visited or left the website but were unable to perform tracking once the users left the website. In comparison, client implementation facilitates the recording of every detail of the browser activity of users, including mouse tracking on all visited websites.

### Features

In this section, the main features of the real-time online mouse tracking application are reviewed in detail. The guide for writing the code is available on jQuery’s website (jsf, 2019). Tracking is divided into the main event logging and other information loggings. A simple keyboard logging was also implemented. For mobile devices, a mouse is rarely used, therefore tracking of scrolls, touches, and zooms is preferred. Fig. 4 shows a demonstration of the loggings that are available online (Authors, 2019a).

<figure>![https://file.army/i/BzMSdAY](https://404store.com/2020/06/04/mouse-event-desktop.png)

<figcaption>Fig. 4\. Mouse tracking demonstration. MouseX shows “1102,” which is the horizontal axis value of the mouse cursor position, while MouseY shows “3137,” which is the vertical axis value. ScrollLeft shows “17,” which is the horizontal axis value of the horizontal scroll bar position, while ScrollTop shows “2653,” which is the vertical axis value of the vertical scroll bar position. KeyboardPress shows “c,” which was pressed. MouseClick shows “left click,” which was pressed. Zoom showed “100%,” which is the default. It should be noted that all the coordinates are relative to the entire document and not the screen or the window. It is also seen that the top vertical value axis of the image is not zero. The zero value is still far above where scrolling up is necessary.</figcaption>

</figure>

#### Event Loggings

*   Mouse Click; The recording of mouse clicks acquires data on the depression and release of the mouse buttons, along with the coordinate of the occurrence in pixels. The events can be left, middle, and/or right click. Before the recording of mouse trajectories, mouse click recordings were practiced. Currently, the recording of mouse clicks is still more popular than mouse trajectories.
*   Mouse Move; Mouse move is the same as mouse trajectories. The recording of mouse moves acquires data on the coordinate (horizontal axis and vertical axis) of the mouse cursor in pixels. Mouse move can also be combined with mouse press, which results in mouse drag. Among other event loggings, mouse move consumes the highest resource.
*   Scroll; The recording of scrolls acquires data on the current topmost and left most scroll position in pixels. Some users do not frequently move the mouse cursor but move the scroll often, in which case the scroll data is more valuable than the mouse movement data. This is particularly true for users of mobile devices where there is no mouse cursor, fewer touches, and a greater reliance on scrolling.
*   Keyboard press; The recording of keyboard press acquires data on the buttons pressed by the users. Like mouse click, keyboard press recordings were practiced before mouse trajectory recordings. Currently, keyboard recordings are more popular than mouse trajectory recordings. However, keyboard press recordings are notorious for misuse and malicious activities such as password thief. As such, extra care regarding privacy must be exercised when implementing keyboard press recordings; for example, the non-implementation of keyboard press recordings on login pages.
*   Zoom; The recording of zoom acquires data on the long-shot or close-up activity of users as a percentage value. The formula is the window dimension divided by the screen dimension (explained in other loggings: sections) multiplied by one hundred percent. Users usually utilize zooming when an element is too big or too small. In addition, zooming is most frequently used on mobile devices.
*   Touch; The recording of touch acquires the press and release data of the touch screen, along with the coordinate of the occurrence. The events can be touched, untouched, and interrupted. Touch recordings are exclusively for touch devices; mostly mobile devices. A demonstration is shown in Fig. 5.
*   Touch Move; The recording of touch move acquires data on movement during the touch event along with the coordinate of the occurrence. It is the same as touch drag because the movement can only be recorded when the user touches the touch screen. In addition, touch move occurs mostly during the dragging of an object.

<figure>![https://file.army/i/BzMSFRQ](https://404store.com/2020/06/04/touch-dom-event-huawei-tablet.jpg)

<figcaption>Fig. 5\. Tracking demonstration on a mobile device. Although touch was not shown in Fig. 4, in this figure, touch showed “touched” where a finger was in contact with the screen. The coordinate of the touch is shown on MouseX and MouseY as “336” and “311,” respectively</figcaption>

</figure>

#### Other Loggings

*   Tab Status; The tab status shows whether the user is actively viewing the tab or not. It is identified by either mouse cursor position, touch, and focus whether they occur inside or outside of the tab. In Li and Tsai (2017)’s article, their traditional recording system cannot identify whether the users are active on the tab or not. However, this was possible in this investigation because mouse tracking was utilized.
*   Name; The users have the option of providing their names or remaining anonymous.
*   Email; The users have the option of providing their emails or remaining anonymous.
*   Screen Size; The screen size returns the height and width size of the monitor in units of pixels.
*   Window Size; The window size returns the height and width size of the applications (not the monitor, which is the screen) in pixels. The application in this case, is the browser. When the window size is larger than the screen size, this means that the user has zoomed in, and conversely, when the window size is smaller than the screen size, this means that the user has zoomed.
*   Current Uniform Resource Locator (URL); The current URL returns the web address of the tab, i.e., the webpage that the user is currently opening.
*   Internet Protocol (IP) Address; The IP Address returns the public IP address used by the user.
*   Date; The date returns the day, month, year, and time of the occurrence of an event.
*   Duration; The duration returns the length of time for the event. It is calculated as the date difference between the current event and the previous event.

#### Other Features

*   Sampling Rate; The unit of recordings is events per time or in this case, it is the number of events generated per seconds. By default, the maximum number of events (clicks, moves, scrolls, etc.) per seconds depends on the capability of the users and the computer hardware. However, the frequency of the recording may be too high for either the client or the server. Therefore, this feature is designed to limit the number of events per seconds, which can reduce the resource costs of the tracking.
*   Data to File; The data are sent from the client to the server through the post method and the server stores the data in specific formats such as .csv, .json, and .txt.
*   Data to Database; The data is sent from the client to the server using the post method and the server stores the data in a database such as MySQL, Oracle, PostgreSQL, and MongoDB.
*   User Control Menu; Shows a configuration menu, which allows the user to control the recording process. It allows them to choose which loggings to record.
*   Demo Bar; Shows a demo bar that illustrates the operation of the real-time online mouse tracking application, which is represented by the green sticky header bar that shows the mouse positions, mouse scrolls, keyboard types, and zooms in Fig. 4 and Fig. 5.

## Experiment and Implementation

The real-time online mouse tracking application was installed on the author’s Moodle server. Three mouse tracking experiments were performed during which the clients participated in a ten-question quiz session on the server. The resource costs were then measured. The data rate of the network was measured using a tool called Wireshark. The default values for the CPU, RAM, and storage monitoring are available from the server’s operating system (OS) which is Ubuntu 18.04 LTS server. The server is equipped with an Intel(R) Core(TM) i7-6800K CPU @ 3.40GHz (with SSE4.2) CPU, 32 GB of DDR4 RAM, 10 TB of hard drive, and an allocated 2 MBps network.

### P2P Experiment

<figure>![https://file.army/i/BzMSImn](https://404store.com/2020/06/04/6.png)

<figcaption>Fig. 6\. P2P real-time mouse tracking experiment. The right laptop has a Moodle server installed with mouse tracking codes, while the left laptop has Ubuntu Desktop OS installed. The role of the latter is to access the Moodle server on the right laptop using a browser and perform one click. The right laptop received the click event and stored it on the database while measuring the network cost of the click event.</figcaption>

</figure>

The first experiment was point-to-point (P2P) as illustrated in Fig. 6 where one client accessed the server directly without using the Internet. In this experiment, a laptop was directly connected to the server on an isolated P2P network to obtain clean data. The empirical data rate of one event (single click) was measured. As clean data were obtained, it was possible to derive a theoretical mouse tracking data rate. The other resource costs were not measured because the authors did not possess the necessary hardware, software, and knowledge to measure such small events.

### Local Experiment

<figure>![https://file.army/i/BzMSSU1](https://404store.com/2020/06/04/7.png)

<figcaption>Fig. 7\. Local real-time online mouse tracking experiment. Five clients accessed the Moodle server from the Internet and participated in ten-question quiz sessions while mouse and keyboard activities were recorded. The Moodle server also measured the resource costs.</figcaption>

</figure>

The second experiment was a local experiment illustrated in Fig. 7 where five clients accessed the server through the Internet. This experiment was conducted inside the author’s laboratory. Five lab members including the main author tested the mouse tracking application and answered 10 questions during the quiz session. A resource costs profile of the five users was generated. There were no limits to the number of events per second that the clients were allowed to produce.

### Overseas Implementation

<figure>![https://file.army/i/BzMSuu7](https://404store.com/2020/06/04/8.png)

<figcaption>Fig. 8\. Overseas real-time online mouse tracking implementation. Forty-four clients from the National University of Mongolia, separated into two groups, accessed the Moodle server at Kumamoto University in turns through the Internet and participated in a ten-question quiz session while mouse and keyboard activities were recorded. The Moodle server also measured the resource costs.</figcaption>

</figure>

The third experiment was an overseas implementation illustrated on Fig. 8 where 44 clients in Mongolia accessed the server in Japan. Unlike the previous experiment, this was a real implementation where students from the School of Engineering and Applied Science, National University of Mongolia participated in a real quiz session on the server in the Human Interface Cyber Communication Laboratory, Kumamoto University. In this case, there was also no limitation in terms of events per second on the clients. Apart from determining the resource costs profile for the real quiz session, useful mouse tracking data was obtained. Although this work discusses the mouse tracking data and demonstrates some simple analysis, further analyses are out of the scope of this investigation.

## Result and Discussion

### Theoretical Calculation from P2P Empirical Data

<style>table { border-collapse: collapse; } table, th, td { border: 1px solid black; text-align: center; }</style>

<table><caption>Table 1\. The resource cost of one event posted to the server. The rows before the last row are the types of information, and the last row shows the data rate of the submitted post (Purnama et al. 2020)</caption>

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

<td>content_url</td>

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

<td>Data rate (kB)</td>

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

Table 1 shows the resource cost of the authors’ real-time online mouse tracking application for one event on the server, for a variety of information. This data applies to the P2P experiment in which the client performed one click on the Moodle server where mouse tracking was activated. As more information was included in the event, the data rate increased. The data rate revealed an increase of approximately 12 bytes when new information was added. This behavior is expected because an increase in the amount of information results in an increase in the post data size. For example, in Table 1 there was a significant increase in the data rate when the variable “date” and “content_url” were included because they contain more characters compared to other variables. The authors also attempt to measuring CPU and RAM activity but the change was negligibly small. Although the result is limited to this application only, similar results are expected for other existing applications.

<figure>![https://file.army/i/BzMS6Vl](https://404store.com/2020/06/04/9.png)

<figcaption>Fig. 9\. A plot of data rate generated by a user based on the events generated per second. The horizontal axis represents the events per second or frequency in hertz and the vertical axis represents the data rate in kilobytes per second. The different colored lines represent the number of variables included (refer to Table 1).</figcaption>

</figure>

The addition of new data does not appear to significantly increase the data rate; however, this addition will be consequential as the number of users increases, especially when they perform many activities. The rate of mouse tracking activities is measured in events per second or frequency in hertz (Hz). Although the frequency of mouse movement and scrolling is high, usually, the rate does not exceed 70 events per second or 70 Hz (Rheem et al., 2018). Based on the empirical data obtained from Table 1, it is possible to estimate the data rate of the soon to be implemented mouse tracking. The first step in this process is to determine the number of events generated by users per second. Then the data rate is identified in Fig. 9 and multiplied by the number of users. The results revealed that it is possible for 1 MB of data to be generated from mouse activity in one minute (Leiva and Huang, 2015). From Fig. 9, when a user constantly generates five events per second (5 Hz), the data generated can reach 1 MB in approximately one minute.

As previously stated, the real-time online mouse tracking application has a feature to limit the maximum number of events per second generated by a user. This can be set after allocating the network bandwidth of the mouse tracking process. Assuming that data are recorded for all available variables in mouse tracking if there are 22 users, and the network allocated to mouse tracking is 2 megabytes per second (MBps), the mouse tracking application should be limited to 25 events per seconds. However, this calculation is not realistic and is only relevant for measuring the worst-case scenario, whereby smooth implementation and not optimal resource usage is intended. This is because the events generated per second by users are dynamic and not static. For example, there are instances when the mouse cursor is not moved as the user stops scrolling to read. Likewise, there are instances when users move the mouse cursor and scroll to search for information. There are also occasions when users drag and drop objects during interactive activities. Consequently, users do not generate a fixed number of events per second.

### Profile Measurement from Local Experiment

<table><caption>Table 2\. The resource cost for local experiments and overseas implementation of the server. CPU usage in percentage, RAM usage in megabytes, and data rate in kilobytes were measured for both experiments. From the measurements, statistical metrics were derived including the minimum, maximum, median, average, and standard deviation.</caption>

<thead>

<tr>

<th>Statistical</th>

<th colspan="3">Local Mouse Tracking Experiment</th>

<th colspan="3">Overseas Mouse Tracking Implementation</th>

</tr>

</thead>

<tbody>

<tr>

<td>Metrics</td>

<td>CPU (%)</td>

<td>RAM (MB)</td>

<td>Data Rate (kB)</td>

<td>CPU (%)</td>

<td>RAM (MB)</td>

<td>Data Rate (kB)</td>

</tr>

<tr>

<td>Minimum</td>

<td>0</td>

<td>1576.07</td>

<td>543</td>

<td>0</td>

<td>1080.09</td>

<td>416</td>

</tr>

<tr>

<td>Maximum</td>

<td>18</td>

<td>1850.83</td>

<td>312990</td>

<td>22</td>

<td>2417.06</td>

<td>837632</td>

</tr>

<tr>

<td>Median</td>

<td>9.79</td>

<td>1746.82</td>

<td>47846.5</td>

<td>10.42</td>

<td>2025.87</td>

<td>115992</td>

</tr>

<tr>

<td>Average</td>

<td>10</td>

<td>1767.74</td>

<td>51302.77</td>

<td>22</td>

<td>2106.62</td>

<td>104525.91</td>

</tr>

<tr>

<td>Standard Deviation</td>

<td>1.42</td>

<td>66.05</td>

<td>25959</td>

<td>4.84</td>

<td>272.13</td>

<td>71029.98</td>

</tr>

</tbody>

</table>

To obtain more realistic data and to perform reliable calculation, profile measurements should be acquired. The main question that is considered in profile measurement is “how often do users move their mouse and scroll?” The profile measurement used in this work is resource monitoring during local mouse tracking processes by five users followed by statistical analysis on the time series data. Although the data required is the average events per second during the mouse tracking processes, it is more convenient to immediately measure the average resource costs.

<figure>![https://file.army/i/BzMSOKj](https://404store.com/2020/06/04/10.png)

<figcaption>Fig. 10\. CPU usage time series during local mouse tracking experiment by five users. The horizontal axis is the time of day and vertical axis is the CPU usage percentage.</figcaption>

</figure>

<figure>![https://file.army/i/BzMSlXk](https://404store.com/2020/06/04/11.png)

<figcaption>Fig. 11\. RAM usage time-series during local mouse tracking experiment with five users. The horizontal axis is the time of day and vertical axis is the RAM usage in megabytes.</figcaption>

</figure>

<figure>![https://file.army/i/BzMSGnv](https://404store.com/2020/06/04/12.png)

<figcaption>Fig. 12\. Data rate during local mouse tracking experiment for five users. The horizontal axis is the time of day and the vertical axis is the data rate in bytes per second.</figcaption>

</figure>

Unlike the P2P experiments, the local experiment measures not only the mouse tracking but also all the other processes, which includes accessing the Moodle page and answering 10 questions. During this experiment, the CPU percentage Fig. 10, the RAM usage Fig. 11, and the data rate Fig. 12 were rarely zero, indicating that idle activity was uncommon. For the local experiment with five users, the CPU percentage usage was an average of 10%, the RAM usage was an average of 1.7 GB, and the data rate was an average of 51 kB. This indicates that there was a reserve capacity for more users. It should be noted that the initial CPU percentage and RAM usage by the OS were 0% and 1.4 GB, respectively.

An interesting result is shown in Fig. 12 for the data rate. During the quiz session at approximately 17:02:40-17:14:20 (11 minutes and 40 seconds, or 700 seconds), a table size of 6.1 MB with approximately 16287 rows (equivalent to 16287 events) and 17 columns were generated (note that the number of columns is less than the number of introduced variables in Table 1 because during this time, tracking for mobile device had not been developed. In addition, the total data transmission may not be equal to the size of the stored data on the database because of other factors such as the transmission methods, unoptimized application, and other factors apart from mouse tracking such as data transmitted when loading Moodle pages). Interestingly, the average events per second (16287 events divided by 700 seconds) was 23 or 23 Hz. If this data is plotted on Fig. 9, a result 78 kBps is obtained which is not far from the actual measurement of 51 kBps in Table 2.

Can a single mouse swipe produce hundreds of mouse coordinates (Leiva and Huang, 2015)? The answer is “yes,” is we examine the spikes in Fig. 12\. The highest spike occurred between 17:07:28-17:07:29 when 98 queries per second were received by the database. If plotted in Fig. 9, the result of 335 kBps is obtained which is close to the actual measurement where the maximum data rate from Table 2 is 312 kBps (unfortunately, name and email identification was not available at the time. Therefore, the identity of the users and the number of them who performed a large number of events is unknown). This shows that the speculation seems to be justified in the case where users are able to generate a high number of events per second momentarily. In other words, more than one user can perform many activities; mainly, simultaneous mouse moves and scrolls. The upper spikes are very large, as Table 2 indicates that the difference between median and maximum is large compared to the difference between median and minimum. Moreover, the spikes indicate that a very high level of activities only occurs momentarily and not constantly. Network and server administrators observed that mouse activities potentially generate a large amount of data. However, there was concern that this high level of activity is constant. The presented results clearly demonstrate that high-level mouse activity is mostly temporary.

### Overseas Implementation between Mongolia and Japan

#### Mouse Tracking Data and Sample Analysis

<figure>![https://file.army/i/BzMSh7H](https://404store.com/2020/06/04/13.png)

<figcaption>Fig. 13\. Screenshot of mouse tracking data of students from National University of Mongolia who attempted a quiz session on a Moodle server at Kumamoto University.</figcaption>

</figure>

The authors were able to obtain mouse tracking data from 44 students in the School of Engineering and Applied Science, National University of Mongolia, for an online quiz session on the server in the Human Interface Cyber Communication Laboratory, Kumamoto University. Fig. 13 shows a screenshot of the mouse tracking data in form of a table. The table size is approximately 145 MB, containing 393585 rows and 22 columns. Are the rumors that mouse tracking produces a notoriously large amount of data true? The answer to this question is “yes.” A half year Moodle log data with a similar number of students was only approximately 300 kB, while the mouse tracking data represented in Fig. 13 was 145 MB after 3 hours and 30 minutes.

<figure>![https://file.army/i/BzMSCfK](https://404store.com/2020/06/04/combine-mouse-tracking-visualization-preprint-min-crop.png)

<figcaption>Fig. 14\. Sample visualization of mouse tracking data from Fig. 13 where all the coordinates from 44 students are plotted. The left image represents mouse click visualization with triangles for left clicks, squares for middle clicks, and pentagons for right clicks. The middle image represents mouse movement visualizations where increasing overlap of the coordinates is represented by a darker color. The right image represents a heatmap visualization where yellow indicates 5 seconds and red indicates over 10 seconds.</figcaption>

</figure>

The mouse tracking data contains so much information that a separate report is required to discuss the characteristics of the data and the types of possible analysis. There are many different types of analysis and discussions on mouse tracking data and several examples were reviewed earlier. In this report, sample visualization based on heatmaps and the trails of the mouse tracking data is presented, as shown in Fig. 14\. As expected, left clicks occurred more often for selection of the questions. However, there were also left clicks associated with some of the questions and the visualization shows that the left clicks were dragged. This can be interpreted as highlighting the questions by the students. Middle clicks occurred most frequently for question four; however, the reason for this occurrence is not clear. Right clicks were most common on the top of the page, where some students probably decided to explore the available features. As expected, there were numerous trails such that it seemed that there were too much to visualize all at once. The heatmap indicates that most of the students placed the mouse cursor on the questions and choices. There were also few students who placed the mouse cursor outside the questions. Probably, these were individuals who preferred to keep the mouse cursor away from the text while reading. Further analyses are outside the scope of this work.

#### Resource Costs of the Mouse Tracking Process

<figure>![https://file.army/i/BzMS1Gf](https://404store.com/2020/06/04/15.png)

<figcaption>Fig. 15\. CPU percentage time series during mouse tracking implementation between National University of Mongolia and Kumamoto University. The horizontal axis represent the time of day and vertical axis is the CPU usage percentage.</figcaption>

</figure>

<figure>![https://file.army/i/BzMSMoI](https://404store.com/2020/06/04/16.png)

<figcaption>Fig. 16\. RAM usage time series during mouse tracking implementation between National University of Mongolia and Kumamoto University. The horizontal axis represents the time of day and vertical axis is the RAM usage in megabytes.</figcaption>

</figure>

<figure>![https://file.army/i/BzMSQUV](https://404store.com/2020/06/04/17.png)

<figcaption>Fig. 17\. Data rate during mouse tracking implementation between National University of Mongolia and Kumamoto University. The horizontal axis is the time of day and the vertical axis represents the data rate in bytes per second.</figcaption>

</figure>

Similar to the local mouse tracking experiment with five users, the resource costs were also measured, allowing us to determine whether large-scale implementation is possible or not. Although 44 students attempted the quiz, the session was divided into two sessions and each session contained only 22 students. The students were informed that the first session would start at 12:00, followed by a break at approximately 14:00\. The second session started a few minutes later and finishes at 15:30\. As such, the entire process took 3 hours and 30 minutes (12600 seconds). The three Figures Fig. 15, Fig. 16, and Fig. 17 seems relevant to the informed schedule where a decrease in the graph was observed at 14:00 for a few minutes. The number of events generated during this time (12600 s) was 393585\. The average number of events per second was 31 (393585 divided by 12600) or 31 Hz. When 31 Hz is plotted in Fig. 9, the result of 115 kB is obtained, which is close to the measured average data rate of 105 kB in Table 2.

Is large-scale mouse tracking implementation possible? This is possible if resource usage is balanced and distributed. Implementing real-time mouse tracking is a better choice than implementing non-real-time tracking. For example, if mouse tracking is first accumulated and subsequently submitted all at once, this will cause a bottleneck at the server. Fig. 15, Fig. 16, and Fig. 17 would not show constant usage but would show idle activities at the beginning, which would become constantly high in the middle. This is arguably an inefficient use of resource. Real-time implementation helps to evenly distribute the transmission of the mouse tracking data.

Compared to the local mouse tracking experiment with the five users, the resource costs are expected to increase because more users (22) were involved in this implementation, but there were more unexpected findings. The unexpected aspect is that the standard deviation is very high. As such, not only are there many positive spikes, but there are also many negative spikes, which further indicates that the number of events per second generated by the users is very dynamic. It should be noted that there was no limitation on the number of events per second that the students were allowed to generate. Based on Table 1 and Fig. 9, the data rate should increase in excess of 5 MBps for the worst-case scenario where 22 students simultaneously generate 70 events per second. However, this scenario never occurred as shown in Fig. 17, indicating high dynamics, and the very low probability of the worst-case scenario.

In Table 2, not only does the standard deviation increase indicating high dynamics, the distance between the median and maximum also increases, as represented by the taller spikes. The highest spike occurred at 14:28:40 when 228 events were submitted to the server and surprisingly, this was attributed to only two users. This occurrence either contradicts the assumption of the authors that a user can generate up to 70 events per second or there was a delay in transmission, and the submitted events were incorrectly aggregated. When 228 events per second are plotted in Fig. 9, the result 849 kBps is obtained, which is close to the actual measurement in Table 2, where the maximum data rate during this implementation was 837 kBps.

## Conclusion and Future Work

The first conclusion is that the online mouse tracking application was successfully implemented. The overseas quiz that was session monitored with real-time mouse tracking at the National University of Mongolia to Kumamoto University was successfully conducted and at present, mouse tracking is still running on the server. The mouse tracking data containing mouse clicks, mouse movements, and mouse scrolls was obtained, but the analysis of this data will be challenging because of the large size. Additionally, this demonstrates the possibility of tracking on a mobile device using scroll, touch, and zoom events.

Are the rumors concerning high resource cost in mouse tracking true? Can a single swipe generate hundreds of mouse coordinates? Does mouse tracking over a minute generate in excess of a megabyte of data? Based on the result of this investigation, the answer to these questions is “yes.” In that case, is mouse tracking implementable on a large scale? The answer is also “yes.” One server with its specification highlighted in the Experiment and Implementation section was able to handle a classroom of users, and resource monitoring showed that there was much reserve capacity. Other institutions or corporations should have no difficulty in implementing mouse tracking because they typically have big data centers (large number of networks and servers, and distributed resources). For example, a corporation such as Google should not encounter difficulties, although this might be different for technologically challenged entities.

The second conclusion is that mouse tracking is implementable if resource usage is distributed. In this work, the mouse tracking data were transferred in real-time to evenly distributed resource usage, instead of aggregating the data and transmitting them together, which may cause bottlenecks. Unfortunately, the nature of mouse tracking is such that it is difficult to predict. As such, it is challenging to determine resource allocation. The data acquired as part of this work showed the high dynamic characteristic of mouse activities, as reflected in the high standard deviations observed during monitoring of resource usage. When 22 students attempted the quizzes, the resource usage peaks were very high, but only temporarily. This was identified as spikes. Both upper spikes and lower spikes were observed, where upper spikes indicate momentary high-level activity and lower spikes indicate the opposite.

If the amount of available resource is limited, then the resource cost of mouse tracking can be reduced. The mouse tracking application developed in this work can limit the number of events per second or frequency. Additionally, it can exclude unnecessary data. Moreover, even prior to this mouse tracking resource usage investigation, research on the compression of mouse tracking data already existed.

This opens many paths for future work. Although real-time implementation assisted in the distribution of resource usage, the characteristics of the resource usage data showed how mouse tracking can potentially destabilize the system. The use of load balancing techniques can help stabilize the implementation. To achieve the minimum system requirement for mouse tracking, more experiments with different machine specification needs to be conducted. In addition, resource measurement on the client-side needs should be conducted to achieve the minimum system requirement for the client. Even though the developed mouse tracking application was able to limit activity level recording, the settings are still manually inputted. Adaptive settings are required for optimal usage. Although it was useful to conduct overseas implementation, more users and longer implementations are required to further evaluate the viability of real-time online mouse tracking.

## Acknowledgements

The authors are very grateful to Muhammad Bagus Andra, Hamidullah Sokout, Irwansyah, and members of the School of Engineering and Applied Science, National University of Mongolia, for participating in the experiment. The authors would also like to thank Masayoshi Aritsugi, Hendarmawan, Hamidullah Sokout, Alhafiz Akbar Maulana, and Sari Dewi for inspiring this research topic. A special thanks to Muhammad Bagus Andra and Ni Nyoman Sri Indrawati for suggesting some interesting ideas. The authors would also like to thank Fahd Ouassarni for providing suggestions with respect to compressing the mouse tracking application codes. Finally, the authors would like to thank Alvin Fungai for initiating this research and for his assistance in proofreading.

## Funding

Part of this work was supported by JSPS KAKENHI Grant-in-Aid for Scientific Research 19H1225100 and 15H02795.

## Conflict of interests

The authors declare that they have no conflict of interest.

## Availability of Data and Materials

The datasets generated and/or analyzed during the current study are available in the Mendeley repository titled ’Data for: Implementation of Real-Time Online Mouse Tracking Case Study in a Small Online Quiz’.

## Reference

*   (2016) Logs. URL https://docs.moodle.org/36/en/Logs
*   (2019) jquery write less, do more. URL https://jquery.com/
*   (2019) The top 10 best web analytic tools. URL https://www.sparringmind.com/best-web-analytics/
*   Alhasan K, Chen L, Chen F (2018) An experimental study of learning behaviour in an elearning environment. In: 2018 IEEE 20th International Conference on High Performance Computing and Communications; IEEE 16th International Conference on Smart City; IEEE 4th International Conference on Data Science and Systems (HPCC/SmartCity/DSS), IEEE, pp 1398–1403, DOI 10.1109/HPCC/SmartCity/DSS.2018.00231
*   Arapakis I, Leiva LA (2016) Predicting user engagement with direct displays using mouse cursor information. In: Proceedings of the 39th International ACM SIGIR conference on Research and Development in Information Retrieval, ACM, pp 599–608, DOI 10.1145/2911451.2911505
*   Arroyo E, Selker T, Wei W (2006) Usability tool for analysis of web designs using mouse tracks. In: CHI’06 extended abstracts on Human factors in computing systems, ACM, pp 484–489, DOI 10.1145/1125451.1125557
*   Authors (2019a) 0fajarpurnama0/real-time-online-mouse-tracking-animation Authors (2019b) Data for: Implementation of real -time online mouse tracking case study in a small online quiz. DOI 10.17632/vznyfcx9xk.1, mendeley Data, v1
*   Barrios VMG, Gütl C, Preis AM, Andrews K, Pivec M, Mödritscher F, Trummer C (2004) Adele: A framework for adaptive e-learning through eye tracking. Proceedings of IKNOW pp 609–616
*   Bluehost (2016) Web analytics for beginners - presented by bluehost. URL https://youtu.be/PnVZ7_OA7Qo
*   Buscher G, Cutrell E, Morris MR (2009) What do you see when you’re surfing?: using eye tracking to predict salient regions of web pages. In: Proceedings of the SIGCHI conference on human factors in computing systems, ACM, pp 21–30, DOI 10.1145/1518701.1518705
*   Busjahn T, Schulte C, Sharif B, Begel A, Hansen M, Bednarik R, Orlov P, Ihantola P, Shchekotova G, Antropova M, et al. (2014) Eye tracking in computing education. In: Proceedings of the tenth annual conference on International computing education research, ACM, pp 3–10, DOI 10.1145/2632320.2632344
*   Calvi C, Porta M, Sacchi D (2008) e5learning, an e-learning environment based on eye tracking. In: Advanced Learning Technologies, 2008\. ICALT’08\. Eighth IEEE International Conference on, IEEE, pp 376–380, DOI 10.1109/ICALT.2008.35
*   Canali D, Bilge L, Balzarotti D (2014) On the effectiveness of risk prediction based on users browsing behavior. In: Proceedings of the 9th ACM symposium on Information, computer and communications security, ACM, pp 171–182, DOI 10.1145/2590296.2590347
*   Cantoni V, Perez CJ, Porta M, Ricotti S (2012) Exploiting eye tracking in advanced e-learning systems. In: Proceedings of the 13th international conference on computer systems and technologies, ACM, pp 376–383, DOI 10.1145/2383276.2383331
*   Chen MC, Anderson JR, Sohn MH (2001) What can a mouse cursor tell us more?: correlation of eye/mouse movements on web browsing. In: CHI’01 extended abstracts on Human factors in computing systems, ACM, pp 281–282, DOI 10.1145/634067.634234
*   Chivu R, Turlacu L, Stoica I, Radu A (2018) Identifying the effectiveness of e-learning platforms among students using eye-tracking technology. In: 4th International Conference on Higher Education Advances (HEAD’18), Editorial Universitat Politècnica de València, pp 621–628, DOI 10.4995/HEAD18.2018.8046
*   Chourishi D, Buttan CK, Chaurasia A, Soni A (2011) Effective e-learning through moodle. International Journal of Advance Technology & Engineering Research (IJATER) 1(1):34–38
*   Cooke L (2006) Is the mouse a” poor man’s eye tracker”? In: Annual Conference-Society for Technical Communication, vol 53, p 252
*   Demšar U, Çöltekin A (2017) Quantifying gaze and mouse interactions on spatial visual interfaces with a new movement analytics methodology. PloS one 12(8):e0181818, DOI 10.1371/journal.pone.0181818
*   Dentzel Z (2013) How the internet has changed everyday life. BBVA OpenMind:” Ch@ nge
*   Dragunova M, Moro R, Bielikova M (2017) Measuring visual search ability on the web. In: Proceedings of the 22nd International Conference on Intelligent User Interfaces Companion, ACM, pp 97–100, DOI 10.1145/3030024.3038272
*   Drake JR, O’Hara M, Seeman E (2015) Five principles for mooc design: With a case study. Journal of Information Technology Education: Innovations in Practice 14(14):125–143
*   Duggan GB, Payne SJ (2011) Skim reading by satisficing: evidence from eye tracking. In: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, ACM, pp 1141–1150, DOI 10.1145/1978942.1979114
*   Eger L (2018) How people acquire knowledge from a web page: An eye tracking study. Knowledge Management & E-Learning 10(3):350
*   Ehmke C, Wilson S (2007) Identifying web usability problems from eye-tracking data. In: Proceedings of the 21st British HCI Group Annual Conference on People and Computers: HCI... but not as we know it-Volume 1, British Computer Society, pp 119–128
*   Fungai A, Usagawa T (2016) Isolating hidden recurring patterns on unlabeled access log data in learning management systems to identify drop out risk students. In: 11th International Student Conference on Advanced Science and Technology, Kumamoto University, pp 9–11
*   Guo Q, Agichtein E (2008) Exploring mouse movements for inferring query intent. In: Proceedings of the 31st annual international ACM SIGIR conference on Research and development in information retrieval, ACM, pp 707–708, DOI 10.1145/1390334.1390462
*   Guo Q, Agichtein E (2010) Towards predicting web searcher gaze position from mouse movements. In: CHI’10 Extended Abstracts on Human Factors in Computing Systems, ACM, pp 3601–3606, DOI 10.1145/1753846.1754025
*   Harrati N, Bouchrika I, Tari A, Ladjailia A (2016) Exploring user satisfaction for e-learning systems via usage-based metrics and system usability scale analysis. Computers in Human Behavior 61:463–471, DOI 10.1016/j.chb.2016.03.051
*   Henrie CR, Bodily R, Manwaring KC, Graham CR (2015) Exploring intensive longitudinal measures of student engagement in blended learning. The International Review of Research in Open and Distributed Learning 16(3), DOI 10.19173/irrodl.v16i3.2015
*   Holmqvist K, Wartenberg C (2005) The role of local design factors for newspaper reading behaviour-an eye-tracking perspective. Lund University Cognitive Studies 127:1–21
*   Holsanova J, Rahm H, Holmqvist K (2006) Entry points and reading paths on newspaper spreads: comparing a semiotic analysis with eye-tracking measurements. Visual communication 5(1):65–93, DOI 10.1177/1470357206061005
*   Hsu TC, Chang SC, Liu NC (2018) Peer assessment of webpage design: Behavioral sequential analysis based on eye tracking evidence. Journal of Educational Technology & Society 21(2):305–321
*   Hu J, Zeng HJ, Li H, Niu C, Chen Z (2007) Demographic prediction based on user’s browsing behavior. In: Proceedings of the 16th international conference on World Wide Web, ACM, pp 151–160, DOI 10.1145/1242572.1242594
*   Huang J, White RW, Dumais S (2011) No clicks, no problem: using cursor movements to understand and improve search. In: Proceedings of the SIGCHI conference on human factors in computing systems, ACM, pp 1225–1234, DOI 10.1145/1978942.1979125
*   Huang J, White R, Buscher G (2012) User see, user point: gaze and cursor alignment in web search. In: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, ACM, pp 1341–1350, DOI 10.1145/2207676.2208591
*   Hyönä J, Lorch Jr RF, Kaakinen JK (2002) Individual differences in reading to summarize expository text: Evidence from eye fixation patterns. Journal of Educational Psychology 94(1):44, DOI 10.1037/00220663.94.1.44
*   Ivanović M, Klašnja-Milićević A, Ivković J, Porta M (2017) Integration of eye tracking technologies and methods in an e-learning system. In: Proceedings of the 8th Balkan Conference in Informatics, ACM, p 29, DOI 10.1145/3136273.3136278
*   Jarodzka H, Brand-Gruwel S (2017) Tracking the reading eye: towards a model of real-world reading. Journal of Computer Assisted Learning 33(3):193–201, DOI 10.1111/jcal.12189
*   Jarodzka H, Holmqvist K, Gruber H (2017) Eye tracking in educational science: Theoretical frameworks and research agendas. Journal of Eye Movement Research 10(1), DOI 10.16910/jemr.10.1.3
*   Johnson A, Mulder B, Sijbinga A, Hulsebos L (2012) Action as a window to perception: measuring attention with mouse movements. Applied Cognitive Psychology 26(5):802–809, DOI 10.1002/acp.2862
*   Kakasevski G, Mihajlov M, Arsenovski S, Chungurski S (2008) Evaluating usability in learning management system moodle. In: ITI, vol 2008, p 30th
*   Khan S, Singh Y, Sharma K (2018) Role of web usage mining technique for website structure redesign. International Journal of Scientific Research in Computer Science, Engineering and Information Technology 3(1)
*   Kim NW, Bylinskii Z, Borkin MA, Gajos KZ, Oliva A, Durand F, Pfister H (2017) Bubbleview: an interface for crowdsourcing image importance maps and tracking visual attention. ACM Transactions on Computer-Human Interaction (TOCHI) 24(5):36, DOI 10.1145/3131275
*   Koh KH, Fouh E, Farghally MF, Shahin H, Shaffer CA (2018) Experience: Learner analytics data quality for an etextbook system. Journal of Data and Information Quality (JDIQ) 9(2):10, DOI 10.1145/3148240
*   Kumar R, Tomkins A (2010) A characterization of online browsing behavior. In: Proceedings of the 19th international conference on World wide web, ACM, pp 561–570, DOI 10.1109/ITI.2008.4588480
*   Lagun D, Agichtein E (2011) Viewser: Enabling large-scale remote user studies of web search examination and interaction. In: Proceedings of the 34th international ACM SIGIR conference on Research and development in Information Retrieval, ACM, pp 365–374, DOI 10.1145/2009916.2009967
*   Lagun D, Ageev M, Guo Q, Agichtein E (2014) Discovering common motifs in cursor movement data for improving web search. In: Proceedings of the 7th ACM international conference on Web search and data mining, ACM, pp 183–192, DOI 10.1145/2556195.2556265
*   Lai ML, Tsai MJ, Yang FY, Hsu CY, Liu TC, Lee SWY, Lee MH, Chiou GL, Liang JC, Tsai CC (2013) A review of using eye-tracking technology in exploring learning from 2000 to 2012\. Educational research review 10:90–115, DOI 10.1016/j.edurev.2013.10.001
*   Lee RS, Liu JN, Yeung KS, Sin AH, Shum DT (2009) Agent-based web content engagement time (wcet) analyzer on e-publication system. In: Intelligent Systems Design and Applications, 2009\. ISDA’09\. Ninth International Conference on, IEEE, pp 67–72, DOI 10.1109/ISDA.2009.189
*   Leiva LA, Huang J (2015) Building a better mousetrap: Compressing mouse cursor activity for web analytics. Information Processing & Management 51(2):114–129, DOI 10.1016/j.ipm.2014.10.005
*   Li LY, Tsai CC (2017) Accessing online learning material: Quantitative behavior patterns and their effects on motivation and learning performance. Computers & Education 114:286–297, DOI 10.1016/j.compedu.2017.07.007
*   Liebling DJ, Dumais ST (2014) Gaze and mouse coordination in everyday work. In: Proceedings of the 2014 ACM International Joint Conference on Pervasive and Ubiquitous Computing: Adjunct Publication, ACM, pp 1141–1150, DOI 10.1145/2638728.2641692
*   Linawati L, Wirastuti ND, Sukadarmika G (2017) Survey on lms moodle for adaptive online learning design. Journal of Electrical, Electronics and Informatics 1(1):11–16, DOI 10.24843/JEEI.2017.v01.i01.p03
*   Liu Z (2005) Reading behavior in the digital environment: Changes in reading behavior over the past ten years. Journal of documentation 61(6):700–712, DOI 10.1108/00220410510632040
*   Lupu RG, Ungureanu F (2013) A survey of eye tracking methods and applications. Buletinul Institutului Politehnic din Iasi, Automatic Control and Computer Science Section 3:72–86
*   Manson SM, Kne L, Dyke KR, Shannon J, Eria S (2012) Using eye-tracking and mouse metrics to test usability of web mapping navigation. Cartography and Geographic Information Science 39(1):48–60, DOI 10.1559/1523040639148
*   Martín-Albo D, Leiva LA, Huang J, Plamondon R (2016) Strokes of insight: User intent detection and kinematic compression of mouse cursor trails. Information Processing & Management 52(6):989–1003, DOI 10.1016/j.ipm.2016.04.005
*   Maruya K, Watanabe J, Takahashi H, Hashiba S (2015) A learning system utilizing learners’ active tracing behaviors. In: Proceedings of the Fifth International Conference on Learning Analytics And Knowledge, ACM, pp 418–419, DOI https://doi.org/10.1145/2723576.2723655
*   Mueller F, Lockerd A (2001) Cheese: tracking mouse movement activity on websites, a tool for user modeling. In: CHI’01 extended abstracts on Human factors in computing systems, ACM, pp 279–280, DOI 10.1145/634067.634233
*   Nakano H, Iriguchi N, Sugitani K, Kita T, Musashi Y, Migita M, Matsuba R, Ohta Y, Gobayashi T, Tsuji K, et al. (2005) The instructional effects of on-line tests on the large-scale it courses. In: Information Technology Based Higher Education and Training, 2005\. ITHET 2005\. 6th International Conference on, IEEE, pp F4B–7, DOI 10.1109/ITHET.2005.1560304
*   Nandi D, Hamilton M, Harland J, Warburton G (2011) How active are students in online discussion forums? In: Proceedings of the Thirteenth Australasian Computing Education Conference-Volume 114, Australian Computer Society, Inc., pp 125–134
*   Navalpakkam V, Churchill E (2012) Mouse tracking: measuring and predicting users’ experience of web-based content. In: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, ACM, pp 2963–2972, DOI 10.1145/2207676.2208705 NT B (2015) Top 10 heatmap analytics tools for marketers. URL https://bigdata-madesimple.com/top-10-heatmap-analytics-tools-for-marketers/
*   Parikh S, Kalva H (2018) Eye gaze feature classification for predicting levels of learning. In: Proceedings of the 8th Workshop on Personalization Approaches in Learning Environments (PALE 2018).
*   Kravcik, M., Santos, OC, Boticario, JG, Bielikova, M., Horvath, T. and Torre I.(Eds.). 19th International Conference on Artificial Intelligence in Education (AIED 2018), CEUR workshop proceedings, this volume, pp 1–6
*   Paturusi SD, Chisaki Y, Usagawa T (2012) Development and evaluation of the blended learningcourses at sam ratulangi university in indonesia. International Journal of e-Education, e-Business, e-Management and e-Learning 2(3):242
*   Pernice K (2017) F-shaped pattern of reading on the web: Misunderstood, but still relevant (even on mobile). Nielsen Norman Group Pivec M, Trummer C, Pripfl J (2006) Eye-tracking adaptable e-learning and content authoring support. Informatica 30(1)
*   Poon LK, Kong SC, Yau TS, Wong M, Ling MH (2017) Learning analytics for monitoring students participation online: Visualizing navigational patterns on learning management system. In: International Conference on Blended Learning, Springer, pp 166–176, DOI 10.1007/9783319593609_15
*   Purnama F, Fungai A, Do TM, Siagian AHAM, Annas A, Susanto H, Hendarmawan, Usagawa T, Nakano H (2016a) Introductory work on section based page view of web contents: Towards the idea of how a page is viewed. In: 11th International Student Conference on Advanced Science and Technology (ICAST), Kumamoto University, pp 9–11
*   Purnama F, Fungai A, Usagawa T (2016b) Demonstration on extending the pageview feature to page section based: Towards identifying reading patterns of users. In: 7th International Conference on Science and Engineering, Yangon Technological University, pp 304–307
*   Rakoczi G, Pohl M (2012) Visualisation and analysis of multiuser gaze data: Eye tracking usability studies in the special context of e-learning. In: Advanced Learning Technologies (ICALT), 2012 IEEE 12th International Conference on, IEEE, pp 738–739, DOI 10.1109/ICALT.2012.15
*   Ramakrisnan P, Jaafar A, Razak FHA, Ramba DA (2012) Evaluation of user interface design for leaning management system (lms): Investigating student’s eye tracking pattern and experiences. Procedia-Social and Behavioral Sciences 67:527–537, DOI 10.1016/j.sbspro.2012.11.357
*   Rayner K (1998) Eye movements in reading and information processing: 20 years of research. Psychological bulletin 124(3):372
*   Rayner K (2009) Eye movements and attention in reading, scene perception, and visual search. The quarterly journal of experimental psychology 62(8):1457–1506, DOI 10.1080/17470210902816461
*   Rheem H, Verma V, Becker DV (2018) Use of mouse-tracking method to measure cognitive load. In: Proceedings of the Human Factors and Ergonomics Society Annual Meeting, SAGE Publications Sage CA: Los Angeles, CA, vol 62, pp 1982–1986, DOI 10.1177/1541931218621449
*   Rodden K, Fu X (2007) Exploring how mouse movements relate to eye movements on web search results pages. In: SIGIR Workshop on Web Information Seeking and Interaction, pp 29–32
*   Rodden K, Fu X, Aula A, Spiro I (2008) Eye-mouse coordination patterns on web search results pages. In: CHI’08 extended abstracts on Human factors in computing systems, ACM, pp 2997–3002
*   Rodrigues M, Gonçalves S, Carneiro D, Novais P, Fdez-Riverola F (2013) Keystrokes and clicks: Measuring stress on e-learning students. In: Management Intelligent Systems, Springer, pp 119–126, DOI 10.1007/978-3-319-00569-0_15
*   Salmeron-Majadas S, Santos OC, Boticario JG (2014) An evaluation of mouse and keyboard interaction indicators towards non-intrusive and low cost affective modeling in an educational context. Procedia Computer Science 35:691–700, DOI 10.1016/j.procs.2014.08.151
*   Sin K, Muthu L (2015) Application of big data in education data mining and learning analytics–a literature review. ICTACT Journal on soft computing 5(4)
*   Sopu HT, Chisaki Y, Usagawa T (2016) Use of facebook by secondary school students at nuku’alofa as an indicator of e-readiness for e-learning in the kingdom of tonga. The International Review of Research in Open and Distributed Learning 17(4), DOI 10.19173/irrodl.v17i4.2333
*   Sungkur RK, Antoaroo MA, Beeharry A (2016) Eye tracking system for enhanced learning experiences. Education and Information Technologies 21(6):1785–1806, DOI 10.1007/s10639-015-9418-0 Tarasewich P, Pomplun M, Fillion S, Broberg D (2005) The enhanced restricted focus viewer. International Journal of Human-Computer Interaction 19(1):35–54, DOI 10.1207/s15327590ijhc1901_4
*   Tsai MJ, Hou HT, Lai ML, Liu WY, Yang FY (2012) Visual attention for solving multiple-choice science problem: An eye-tracking analysis. Computers & Education 58(1):375–385
*   Tzafilkou K, Protogeros N (2017) Diagnosing user perception and acceptance using eye tracking in web-based end-user development. Computers in Human Behavior 72:23–37, DOI 10.1016/j.chb.2017.02.035
*   Usagawa T, Sugitani K, Kita T, Iriguchi N, Migita M, Matsuba R, Musashi Y, Nakano H (2006) Assuring the basic it literacy levels for every student by the university-wide blended learning. In: Information Technology Based Higher Education and Training, 2006\. ITHET’06\. 7th International Conference on, IEEE, pp 647–651, DOI 10.1109/ITHET.2006.339680
*   Voßkühler A, Nordmeier V, Kuchinke L, Jacobs AM (2008) Ogama (open gaze and mouse analyzer): open-source software designed to analyze eye and mouse movements in slideshow study designs. Behavior research methods 40(4):1150–1162, DOI 10.3758/BRM.40.4.1150
*   Wang H, Chignell M, Ishizuka M (2006) Empathic tutoring software agents using real-time eye tracking. In: Proceedings of the 2006 symposium on Eye tracking research & applications, ACM, pp 73–78, DOI 10.1145/1117309.1117346 Wei H, Moldovan AN, Muntean C (2009) Sensing learner interest through eye tracking. Technology 22:23rd
*   Wen M, Rosé CP (2014) Identifying latent study habits by mining learner behavior patterns in massive open online courses. In: Proceedings of the 23rd ACM international conference on conference on information and knowledge management, ACM, pp 1983–1986, DOI 10.1145/2661829.2662033
*   Yang FY, Tsai MJ, Chiou GL, Lee SWY, Chang CC, Chen LL (2018) Instructional suggestions supporting science learning in digital environments based on a review of eye tracking studies. Journal of Educational Technology & Society 21(2):28–45
*   Zheng C, Usagawa T (2018) A rapid webcam-based eye tracking method for human computer interaction. In: 2018 International Conference on Control, Automation and Information Sciences (ICCAIS), IEEE, pp 133–136, DOI 10.1109/ICCAIS.2018.8570532
*   Zushi M, Miyazaki Y, Norizuki K (2012) Web application for recording learners’ mouse trajectories and retrieving their study logs for data analysis. Knowledge Management & E-Learning 4(1):37, DOI 10.34105/j.kmel.2012.04.004

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/implementation-of-real-time-online-mouse-tracking-on-oversea-xronled?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/implementation-of-real-time-online-mouse-tracking-on-oversea-xronled?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/doctoral/2020/06/03/implementation-investigation-realtime-online-mouse-tracking-preprint](https://0fajarpurnama0.github.io/doctoral/2020/06/03/implementation-investigation-realtime-online-mouse-tracking-preprint)
*   [https://medium.com/@0fajarpurnama0/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-ea71132edef7](https://medium.com/@0fajarpurnama0/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-ea71132edef7)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/implementation-investigation-realtime-online-mouse-tracking-preprint](https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/implementation-investigation-realtime-online-mouse-tracking-preprint)
*   [https://0fajarpurnama0.tumblr.com/post/619923592553152512/implementation-of-real-time-online-mouse-tracking](https://0fajarpurnama0.tumblr.com/post/619923592553152512/implementation-of-real-time-online-mouse-tracking)
*   [https://0darkking0.blogspot.com/2020/06/implementation-of-real-time-online.html](https://0darkking0.blogspot.com/2020/06/implementation-of-real-time-online.html)
*   [https://hive.blog/technology/@fajar.purnama/using-real-time-online-preprocessed-mouse-tracking-for-lower-storage-and-transmission-costs-beginning?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-beginning-pre?r=fajar.purnama)
*   [https://hive.blog/technology/@fajar.purnama/using-real-time-online-preprocessed-mouse-tracking-for-lower-storage-and-transmission-costs-ending?r=fajar.purnama](https://hive.blog/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-beginning-pre?r=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/50-implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-pre-print](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/50-implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-pre-print)
*   [https://steemit.com/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-beginning-pre?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-beginning-pre?r=fajar.purnama)
*   [https://steemit.com/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-ending-pre?r=fajar.purnama](hhttps://steemit.com/technology/@fajar.purnama/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-ending-pre?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-pre-print](http://0fajarpurnama0.weebly.com/blog/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator-point-of-view-pre-print)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/implementation-of-real-time-online-mouse-tracking-on-overseas-quiz-session-from-server-administrator)
