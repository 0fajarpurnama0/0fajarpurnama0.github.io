---
layout: post
title: keyboard-mouse-scroll-zoom-demo-and-mobile
categories: doctoral
tags: [mouse tracking, JavaScript, jQuery, DOM, event, HTML, CSS]
---

<span class="sticky" id="computer"></span> <br />
<span class="sticky" id="mobile"></span>

<xmp>
<!DOCTYPE html>
<html>
<head>
<style>
.sticky {
  font-size: calc(12px + 1vw);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
var xMousePos = 0;
var yMousePos = 0;
var xTouchPos = 0;
var yTouchPos = 0;
var lastScrolledLeft = 0;
var lastScrolledTop = 0;
var keyboardPress;
var mouseClick;
var mousePress;
var mTouch = 'untouched';
var zoom = 100*screen.width/window.innerWidth;
var events = 0;
var eps = 0;
var sevent = 'idle';
var Event = 'idle';

$(document).ready(function(){
    $(document).mousemove(function(event){
		events += 1;
		eps += 1;
		xMousePos = event.pageX;
		yMousePos = event.pageY;
		Event = event.type;
        demo_computer()
    }).scroll(function(event) {
	events += 1;
	eps += 1;
	Event = event.type;
        if(lastScrolledLeft != $(document).scrollLeft()){
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if(lastScrolledTop != $(document).scrollTop()){
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
		demo_computer()
    }).keydown(function(event){
		events += 1;
		eps += 1;;
		keyboardPress = event.key;
		Event = event.type;
		demo_computer()
	}).keyup(function(event){
		events += 1;
		eps += 1;
		keyboardPress = '';
		Event = event.type;
		demo_computer()
	}).mousedown(function(event){
		events += 1;
		eps += 1;
		Event = event.type;
				switch (event.which) {
					case 1:
						mouseClick = 'left click';
						break;
					case 2:
						mouseClick = 'middle click';
						break;
					case 3:
						mouseClick = 'right click';
						break;
					default:
						console.log('You have a strange Mouse!');
				}
				mousePress = mouseClick;
				demo_computer();
	}).mouseup(function(event){
		events += 1;
		eps += 1;
		Event = event.type;
				mouseClick = '';
				mousePress = mouseClick;
				demo_computer();
	}).on("touchstart", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'touched';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		demo_computer();
		demo_mobile();
	}).on("touchend", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'untouched';
		demo_computer();
		demo_mobile();
	}).on("touchcancel", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'interrupted';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		demo_computer();
		demo_mobile();
	}).on("touchmove", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'moving';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		zoom = 100*screen.width/window.visualViewport.width;
		demo_computer();
		demo_mobile();
	}).on("copy", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("cut", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("paste", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("auxclick", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("contextmenu", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("dblclick", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("select", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("wheel", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	})
	
	$(window).resize(function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
	   zoom = 100*screen.width/window.innerWidth;
		demo_computer();
		demo_mobile();
    });
	
	function demo_computer(){
		$("#computer").html("<strong>MouseX</strong>: " + xMousePos + " ,<strong>MouseY</strong>: " + yMousePos + " ,<strong>ScrollLeft</strong>: " + lastScrolledLeft + " ,<strong>ScrollTop</strong>: " + lastScrolledTop + " ,<strong>KeyboardPress</strong>: " + keyboardPress + " ,<strong>MouseClick</strong>: " + mouseClick + " ,<strong>Zoom</strong>: " + zoom + "%" + " , <strong>events</strong>: " + events + " , <strong>eps</strong>: " + eps + " ,<strong>event</strong>: " + Event + " ,<strong>last special event</strong>: " + sevent );
	}
	
	function demo_mobile(){
		$("#mobile").html("<strong>Touch</strong>: " + mTouch + "<strong>TouchX</strong>: " + xTouchPos + " ,<strong>TouchY</strong>: " + yTouchPos);
	}
	
	setInterval(function(){ eps = 0; demo_computer();}, 1000);
});
</script>
</head>
<body>

<span class="sticky"></span>
</body>
</html>
</xmp>

<input type="text"/>

<h2>Chapter 3 Findings In Japan</h2>

<h3>3.1 Environment and City Management</h3>

<p>I found the city's management well organized. I've seen the business district has its own block.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/e22a2ea6-fa37-46ef-83ac-1d99c58310ee-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.1 Image taken at Tokyo</figcaption>
</figure>


<p>I've also seen the residential district and farms seperated.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a4bd1d53-082d-47b3-add6-fb1edfd053e2-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.2 Image taken somewhere at Fukuoka</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/c4504fd7-31b0-4ca6-bb4c-9be19ab22845-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.3 Image taken somewhere at Fukuoka near Kururun</figcaption>
</figure>


<p>Overall the towns are clean.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/e0fa9fdd-1614-4703-9534-7e93aebcbb07-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.4 Image taken somewhere at Fukuoka where no rubbish was sighted</figcaption>
</figure>


<p>On 27th June 2013 from 09:30 – 11:00, we visited a recycling based town development Oki Town (Oki Town sustainable centre “Kururun”) and have a lecture of waste management there. Here the wastes are divided into 25 varieties.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/7e02e958-e230-4956-9f69-3abef97e29ea-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.5 Waste division at Oki Town</figcaption>
</figure>


<p>Today at this town 97% of its waste are recycled which means there is only 3% rubbish and the rest can be use for something beneficial. For example fertilizer, electricity from biogas, diesel from kitchen waste. It's also thanks to local town's folk support to relize this. In the future they're aiming for zero waste town.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/9aec35bd-6ad7-4737-b364-57ad0d165dd3-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.6 Some recycled products at Oki Town</figcaption>
</figure>


<p>I found that Fukuoka is also rich in agriculture. On 27th June 2013 from 16:00 – 17:00 we have lecture of agriculture at Asakura City. They're currently focusing on creating healthy and tasty snacks made from fruits and vegetables. Their reasons for this it's because youths today eats more snacks (like chips) and less fruit. So they like to create healthy chips made from fruits and vegetables.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/daa55631-e700-4056-a782-d5808007d2df-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.7 Some agricultural products in Fukuoka</figcaption>
</figure>


<h3>3.2 Culture and People</h3>

<p>My first impression of the people when coming to Japan was they're strict with time. There's no tolerance of the word late in Japan. Everything is punctual. What I examine of how they can be punctual, it's because of subway train. Logically a subway train is clear channel transportation. Therefore the time of a subway train arrives is predictable and accurate.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/393686ba-6d61-460a-9ac2-a473bf8c9189-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.8 People coming out of subway station and train arrived on time</figcaption>
</figure>


<p>Even though they advance their technology but they still preserve their culture. On 25th June 2013 from 14:30 – 16:30 we went to Ohari Park to experience Noh Play ourselves. This play was founded around 700 years ago on the age of the Samurai. I asked whether the audience needed to understand Japanese in order to enjoy this play. The answered, it's played in classical Japanese even native Japanese people find it hard to understand. Even though there is lack in understanding this play can still be enjoyed just witnessing the performance and costumes, similar to watching Operah.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/7e1e70d4-823b-4018-b4d1-c5cdc1214992-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.9 Experiencing Noh Play at Ohari</figcaption>
</figure>


<p>From overall the Japanese people I have met, they're open, they really want to know of other peoples background and culture. The service that I witness there is very surprising. Every store I went to provides excellent customer service. The store clerks will always smile and says “irasshaimase” which is for welcoming someone whenever someone came. Most of the clerks have bright face when facing their clients. Other than that they also greet like “Ohaiyougozaimasu” which is Good morning. In the end they always thank their customer “arigatougozaimasu” which means thank you. Back to environment management, the people always keep their environment clean and tidy. They always throw their rubbish on the bin and arrange their surroundings well.</p> <br />

<p>On 27th June 2013 from 17:00 – 21:00 I have a home visit to Tanaguchi family. The entire family provides excellent hospitality even though we have trouble communicating because I could only speak Japanese a little. They're open people and likes to know how things are in my country.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/c1ea6838-3200-4626-859f-c3703783b841-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.10 Photo with Tanaguchi family</figcaption>
</figure>


<h3>3.3 Technology</h3>

<p>My first impression of the technology in Japan was advance. My group J is a science and technology group. Most of our programs are explorations of technologies in Japan. There are two that had been mention above which are subway train and recycling factory in Oki Town. The everyday technology I experienced was automatic toilet seat.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8a7f847c-9dcf-4731-935a-318f9f3c4f53-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.11 Automatic Toilet Seat</figcaption>
</figure>



<p>The first program of technologies was on 26th June 2013 by NEXT Systems, Co., Ltd which was about stories behind its research and development, motion control system (Kinect in medical field, etc.) hands-on experience of Augmented Reality System, Kinect in fashion try-on, and Head Mount 3D Display. After that was demo of the technology. The first demo was AR of pamphlet and condominium. This technology works on android system by installing the application then connecting to the AR's network. Here I asked whether it needs its own connection or not. They answered they provided their on connection or it can be connected to the Internet. I also asked whether the current network capacity (most people called it bandwidth) is enough for today and future if all citizens are using this technology. They replied that technology is growing, today's current technology is enough but it's still growing, so it will be alright in the future. On my experience the android reads the 2D image then converts it to 3D or more detailed images. The second demo was virtual fashion demonstration where the person stands in front of the mirror and select virtual clothes to try on. The ideal technology is the same as trying clothes in changing room but virtually. So instead of wasting much energy on trying clothes in changing room, it's more energy efficient to use this virtual fashion mirror. This is also based on Kinect. The third demo was Kinect on mechanical of acceleration of cars. Kinect is an input device without any controller. Gestures lead to intuitive control. The picture is in 3D, the ideal technology is examining an object by touching except here is virtual.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a4f687b1-c29a-42a1-9dcb-b32c8b9239e2-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.12 AR demo on pamphlet and condominium</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/d06712bd-0461-462f-934d-3675fbea041e-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.13 Virtual fashion demonstration</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3f3f354c-709a-4a2f-99f1-3e1a1237a5d3-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.14 Kinect on mechanical of car engine acceleration</figcaption>
</figure>


<p>The second program of technologies was lectures of hydrogen energy project, organic photonics and electronics R&D base, and ruby contents related policy measures also promoting of digital contents industry utilizing programming language ruby by Fukuoka Prefectural Government.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/51ec6a83-ac8e-4a19-9d14-542f3e196967-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.15 Image taken on lecture by Fukuoka Prefectural Government</figcaption>
</figure>


<p>About the lecture of Hydrogen Energy is basically a fuel cell that generates electricity through the chemical reaction in which hydrogen and oxygen react to produce water and electricity. They said the energy produce is comparable to other electrical generator. The greatest advantage of this Hydrogen strategy is CO2 free. It doesn't produce CO2, so their future plan is CO2 free electrical power plants replacing those that generate high pollution. The next one was about organic EL display which EL stands for electroluminescence. Its main purpose is energy efficiency, since the material itself emits light so it saves the effort of emitting light, so it uses less energy. I asked on this session of how it compares to LCD. They have surprising answers which first of course it's much more efficient, second it's same cost to LCD, third it has same lifespan, and finally a shocking answer it has better performance than LCD (usually those with higher efficiency has lower performance). The next lecture it's about Ruby and digital industry content. Since time is limited they only introduce, and said they're recruiting undergraduates every year.</p> <br />

<p>The third program was about Oki Town Sustainable Centre “Kururun”, Recycling based town development which had already been explained in section 3.2.</p> <br />

<p>The fourth program was a company visit to Toyota Motor Kyushu.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/4a9ea1b3-4aee-435e-b118-7fee5d36fe00-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.16 Image taken of presentation video on Toyota Motor Kyushu</figcaption>
</figure>


<p>To be honest it was too much for me to comprehend and we're forbid to take photos, but what I captured was they work with excellent system. We took tour on a real field of how cars are produced from zero until made. Their workers are humans and robots. What I saw, parts were carried by robots, and some simpler assembling was also done by robots. Other jobs and complicated assembling were done by humans. Their work was very systematic. Each phase of assembling are done by different people, with each phase has its time limit. If a worker encounters problems which cannot be solved within the time limit, the worker rings the bell and the flow will be stopped and others will come to help. After each phase of assembling there's an inspection and all data are recorded.</p> <br />

<p>The fourth program was about Agricultural produce in Asakura Technological development of Agri-Processing, already written on section 3.2.</p> <br />

<p>The last program regarding on technology was a visit to Kyutech (Kyushu Institute of Technology). We were divided into 2 groups 1 to go the Mechanical Engineering Laboratory. I chose to go to Laboratory of Spacecraft Environmental Interaction Engineering. I captured that on that laboratory they research on Spacecraft Environmental Interaction through artificial Space they created in tubes. In those tubes are artificial Space base on real Space. They conduct many kinds of experiments there.</p> <br />

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/cf7a7500-5ffa-4d08-851a-7c30371e840a-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3.17 Images taken at Laboratory of Spacecraft Environmental Interaction Engineering Kyutech</figcaption>
</figure>

	
`)
});

$("#jenesys20contributionsandfutureplan").click(function(){
    $(".grid-content").html(`

<h1>Chapter 4 Contributions And Future Plans Of This Program</h1>

<h3> 4.1 Mission of This Program </h3>

<p>During the program there were few lectures that explained to us the mission of this program. First was program orientation on 23rd June 2013 from 14:00 – 17:00 at Hotel Nikko Narita. Second was lecture by ASEAN-Japan Center on 24th June 2013 from 10:00 – 11:30 at National Olympics Memorial Youth Center, Tokyo. Third was lecture by Fukuoka Prefectural Government of outline of Fukuoka Prefecture and exchange with ASEAN on 26th June 2013 from 14:00 – 17:00 at Fukuoka. Last one was workshop report presentation on 29th June 2013 from 16:00 – 17:00 at Symphonia E, 3F, TKP, Garden City Chiba (we did our workshop the day before). </p> <br />

<p>Overall the programs metioned above I derived that the mission of this program is to prepare for ASEAN integration in 3 pillars (stated in chapter 1) on 2015 and Japan wants to join in. With each group’s participants are from 10 different countries of ASEAN, we are to establish links between ASEAN countries with the first step befriend with participants in our group. The program also told us to establish links between ASEAN and Japan. We are to carry on ASEAN – Japan Centre’s will which is to promote export from ASEAN to Japan, to accelerate the flow of investment between ASEAN and Japan including the transfer of skills and technology, and to vitalize tourist traffic between ASEAN and Japan.</p>

<h3> 4.2 Currently Possible Applications</h3>

<p>I have befriended with all participants in my group, also with some others outside my group. Even up to today we’re still in contact almost daily through social media. </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/daf91e8f-e5d9-4c1b-bc86-5098d9156019-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4.1 Daily contact with my JENESYS 2.0 group friends through Facebook</figcaption>
</figure>


<p>What I privately captured from this program is a mission to link my friends and everyone else in my home country to those links that I have established during this program.</p> <br />

<p>Since my backgrounds are in Electrical Engineering and ICT (Information Communication Technology) I would like to do this task using methods base on my backgrounds. I’d like to promote and I have already started of ASEAN and Japan through websites to first my friends. Since I just started I have promoted these websites below to around 10 of my friends at my home country. I planned to promote them to everyone I know. For Facebook I’ll ask my friends to like, for Twitter to follow, and for web pages I’ll ask to bookmark.</p>

<table border="1">
<caption>Tabel 4.1 List of websites to be promoted</caption>

<tr>
<th>NO</th>
<th>Website</th>
<th>Description</th>
</tr>
<tr>
<td>1</td>
<td>https://www.facebook.com/youthexchange.mofa</td>
<td></td>
</tr>

<tr>
<td>2</td>
<td>https://www.facebook.com/jenesys2jpasean</td>	
<td></td>
</tr>

<tr>
<td>3</td>
<td>https://www.facebook.com/ASEANCommunity	</td>
<td></td>
</tr>

<tr>
<td>4</td>
<td>https://www.facebook.com/aseanbeatEnglish</td>
<td></td>
</tr>

<tr>
<td>5</td>
<td>https://www.twitter.com/@asianbeat_chan_en</td>
<td></td>
</tr>

<tr>
<td>6</td>
<td>http://asianbeat.com</td>
<td></td>
</tr>

<tr>
<td>7</td>
<td>http://buyasean.jp</td>
<td></td>
</tr>

<tr>
<td>8</td>
<td>http://www.kyutech.ac.jp</td>	
<td></td>
</tr>


<tr>
<td>9</td>
<td>http://cent.ele.kyutech.ac.jp</td>
<td></td>
</tr>

<tr>
<td>10</td>
<td>http://cent.ele.kyutech.ac.jp/seic/seic_web.html</td>
<td></td>
</tr>

<tr>
<td>11</td>
<td>http://cent.ele.kyutech.ac.jp/index_e.php</td>
<td></td>
</tr>

<tr>
<td>12</td>
<td>http://laseine.ele.kyutech.ac.jp/english</td>
<td></td>
</tr>

<tr>
<td>13</td>
<td>http://www.toyota-kyushu.com</td>
<td></td>
</tr>

<tr>
<td>14</td>
<td>http://www.visitjapan.jp</td>
<td></td>
</tr>


<tr>
<td>15</td>
<td>http://www.jnto.go.jp</td>	
<td></td>
</tr>


<tr>
<td>16</td>
<td>http://www.fosa.jp</td>
<td></td>
</tr>

<tr>
<td>17</td>
<td>http://www.fissc.net</td>
<td></td>
</tr>

<tr>
<td>18</td>
<td>http://www.crossroadfukuoka.jp</td>
<td></td>
</tr>

<tr>
<td>19</td>
<td>http://www.pref.fukuoka.lg.jp</td>
<td></td>
</tr>

<tr>
<td>20</td>
<td>http://www.youtube.com/user/FukuokaPrefecture</td>
<td></td>
</tr>

<tr>
<td>21</td>
<td>http://www.mofa.go.jp</td>
<td></td>
</tr>

<tr>
<td>22</td>
<td>http://web-japan.org</td>
<td></td>
</tr>

<tr>
<td>23</td>
<td>http://www.vjc.jp</td>	
<td></td>
</tr>

<tr>
<td>24</td>
<td>http://www.denpasar.id.emb-japan.go.jp</td>
<td></td>
</tr>

<tr>
<td>25</td>
<td>http://www.kyushu-u.ac.jp/english/index.php	</td>
<td>Kyushu University </td>
</tr>

<tr>
<td>26</td>
<td>http://www.kyutech.ac.jp/english/index.html</td.
<td>Kyushu Institute of Technology</td>
</tr>

<tr>
<td>27</td>
<td>http://www.fwu.ac.jp/english</td>
<td>Fukuoka Women's University</td>
</tr>
	
<tr>
<td>28</td>
<td>http://www.kitakyu-u.ac.jp/another_language_site.html</td>
<td>The University of Kiyakyushu</td>
</tr>

<tr>
<td>29</td>
<td>http://www.seinan-gu.ac.jp/eng</td>
<td>Seinan Gakuin University</td>
</tr>

<tr>
<td>30</td>
<td>http://www.fukuoka-u.ac.jp/english</td>
<td>Fukuoka University</td>
</tr>

<tr>
<td>31</td>
<td>http://www.ip.kyusan-u.ac.jp/E/index.html</td>
<td>Kyushu Sangyo University</td>
</tr>

<tr>
<td>32</td>
<td>http://www.fit.ac.jp/EN/index.html</td>
<td>Fukuoka Institute of Technology</td>
</tr>

<tr>
<td>33</td>
<td>http://www.kurume-u.ac.jp/english/index.html</td>
<td>Kurume University</td>
</tr>

<tr>
<td>34</td>
<td>http://www.kindai.ac.jp/english</td>
<td>Kinki University Fukuoka Campus</td>
</tr>

<tr>
<td>35</td>
<td>http://www.fukujo.ac.jp/university</td>
<td>Fukuoka Jo Gakuin University</td>
</tr>
</table>

<p>As I stated above I have befriends with many people on this program from both ASEAN countries and Japan. It’d be better if I don’t keep it to myself so I’d like to introduce them to friends in Indonesia (ASEAN-Japanese friends to Indonesian friends). At least I should introduce but I’ll also ask them to introduce themselves and interract with the friends I met on this program (Indonesian friends to ASEAN-Japanese friends). I’d like to do this through ICT (Information Communication Technology). The beginning step is through social media such as Facebook and Twitter. I planned to show them the friends I made through this program. Then through posts I planned that they would introduce themeselves. The picture below shows that I never though my friends would be daring, it’s great though.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/37219254-7527-4680-98d1-7cffe81d8ba3-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4.2 Putra Dananjaya (Indonesia) introduce himself to Daiki Takenaka (Japan)</figcaption>
</figure>


<p>Next it would be nice that they could befriend at take the relationship to the next level throught chats. Finally, the last step I have in mind is they would interract daily through video conference, through Skype, facebook video call, yahoo messenger video call, etc. Today video call is the closest telecommunication to face-face conversation. That’s how far I could go as bridge between my friends in Indonesia and ASEAN-Japanese friends. I can only go as far as using free services because of economic limitation. Other than electricity, the hardware and software itself, and some paid internet services, accessing websites, social media, VOIP (Voice Over IP), and video calls are free.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/85de1beb-c5e3-42da-8f04-a63d4e197d29-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4.3 Ridho Yurham (Indonesia) introduce himself to Daiki Takenaka (Japan)</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3b641117-a8e0-43b9-90ec-1ff397cd8d3c-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4.4 Free medias I would use, Pidgin (multimessenger), Twitter, and Skype (video call service)</figcaption>
</figure>


<p>I will also share my experience by uploading my report on my blog <a href="https://0fajarpurnama0.github.io/bachelor">https://0fajarpurnama0.github.io/bachelor</a> http://blog.unud.ac.id/fajarpurnama (obselete) and other things such as photos, although all the photos I have uploaded on Facebook. I will volunteerly link or upload informations base on this program. Experiences such as the NOH play that I experienced, vist of NEXT Systems, Co., Ltd, lectures of Hydrogen Strategy, lectures of EL, lectures of Ruby and Digital Industry, visit of Recycling Center in Oki Town “Kururun”, visit of Toyota Motor Kyushu, lecture of agriculture in Asakura, home visit with Tanaguchi Family, visit of Kyutech, and the mission of this program from overall lectures and programs</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/92742bb9-dae9-48f7-bb5d-1d25dd59a463-original.jpg?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4.5 http://blog.unud.ac.id/fajarpurnama/jenesys-2-0-report-fajar-purnama-bali-indonesia-group-j-fukuoka</figcaption>
</figure>


<h3>4.3 Ideas Not Currently Applicable </h3>

<p>This section is ideas that today I cannot do which will remain for now as ideas. Still it’s some ideas that may prove beneficial but I alone for now could no accomplish due to limitation of economy and power.</p>

<p>My first idea is to establish a curriculum in education of establishing links between ASEAN countries and ASEAN to Japan. Why I stated this because just by providing facilities such as socialmedias and websites will not maximize the benefit of these facilities. There are lots of people who will not use these facilities unless these facilities are socialized, even more unless these people are told to. So I recommend that there will be a curriculum. There will be more socialization of establishing links between ASEAN countries and ASEAN to Japan, there will be lectures, and there will be task for students to access websites regarding to establishing links between ASEAN countries and ASEAN to Japan and making friends with people from outside home countries to socialmedias.</p>

<p>My second idea is to have more joint lectures between different regions and different countries via video conference, more seminars and more workshops through video conference. So I suggest there will be more video conferences between regions and countries.</p><br />

<p>My third idea is to promote more information regarding to ASEAN and Japan through local medias which are radio and television.</p><br />

<p>My fourth idea is to teach the young generations to be openminded. Openminded is the key for relationships between different people to succeed.</p> <br />

<p>My fifth idea is an R&D (Research and Development) on face to face technologies, whether it’s an affordable technology that makes long range telecommunication has the same quality as face to face communication or build a global affordable transportation so people can travel to other countries daily (people can afford to go to different countries everyday).</p>

<h3>4.4 Future Benefits of These Plans</h3>

<p>If these plans are relized then maximum acceleration of economic, exchange, and tourism flow can be achieved. Daily relationship will widen greatly, we not only interract with among our people but we will interract with other people from different background everyday. Real international school will be relized. For example like my primary school in Australia called Daceyville Public School. Back then my friends are not only natives Australian, but I have friends from Korea, China, Phillipin, Iran, India, and many others from all over the world. If each School has students from Indonesia, Japan, Philipin, Malaysia, Brunei Darusalam, Vietnam, Thailand, Laos, Myanmar, and Cambodja then there will be no more challenge of integration. In other words we succeeded. Growth on prosperity will be accelerated. It will be an even more fun world to live in. Other nations will follow us and sees us as an example.</p>

<h2>Mirror</h2>
	<ul>
		<li>
			<a href="https://0fajarpurnama0.github.io/doctoral/2020/04/11/keyboard-mouse-scroll-zoom-demo-and-mobile">https://0fajarpurnama0.github.io/doctoral/2020/04/11/keyboard-mouse-scroll-zoom-demo-and-mobile</a>
		</li>
		<li>
			<a href="https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/keyboard-mouse-scroll-zoom-demo-and-mobile">https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/keyboard-mouse-scroll-zoom-demo-and-mobile</a>
		</li>
		<li>
			<a href="https://0darkking0.blogspot.com/2020/06/demonstration-of-mouse-tracking.html">https://0darkking0.blogspot.com/2020/06/demonstration-of-mouse-tracking.html</a>
		</li>
		<li>
			<a href="https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/49-demonstration-of-mouse-tracking">https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/49-demonstration-of-mouse-tracking</a>
		</li>
		<li>
			<a href="http://0fajarpurnama0.weebly.com/blog/demonstration-of-mouse-tracking">http://0fajarpurnama0.weebly.com/blog/demonstration-of-mouse-tracking</a>
		</li>
		<li>
			<a href="https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/springer-education-and-information-technology-2020-copyright-transfer">https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/springer-education-and-information-technology-2020-copyright-transfer</a>
		</li>
	</ul>

<style>
.sticky {
  font-size: calc(12px + 1vw);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
var xMousePos = 0;
var yMousePos = 0;
var xTouchPos = 0;
var yTouchPos = 0;
var lastScrolledLeft = 0;
var lastScrolledTop = 0;
var keyboardPress;
var mouseClick;
var mousePress;
var mTouch = 'untouched';
var zoom = 100*screen.width/window.innerWidth;
var events = 0;
var eps = 0;
var sevent = 'idle';
var Event = 'idle';

$(document).ready(function(){
    $(document).mousemove(function(event){
		events += 1;
		eps += 1;
		xMousePos = event.pageX;
		yMousePos = event.pageY;
		Event = event.type;
        demo_computer()
    }).scroll(function(event) {
	events += 1;
	eps += 1;
	Event = event.type;
        if(lastScrolledLeft != $(document).scrollLeft()){
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if(lastScrolledTop != $(document).scrollTop()){
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
		demo_computer()
    }).keydown(function(event){
		events += 1;
		eps += 1;;
		keyboardPress = event.key;
		Event = event.type;
		demo_computer()
	}).keyup(function(event){
		events += 1;
		eps += 1;
		keyboardPress = '';
		Event = event.type;
		demo_computer()
	}).mousedown(function(event){
		events += 1;
		eps += 1;
		Event = event.type;
				switch (event.which) {
					case 1:
						mouseClick = 'left click';
						break;
					case 2:
						mouseClick = 'middle click';
						break;
					case 3:
						mouseClick = 'right click';
						break;
					default:
						console.log('You have a strange Mouse!');
				}
				mousePress = mouseClick;
				demo_computer();
	}).mouseup(function(event){
		events += 1;
		eps += 1;
		Event = event.type;
				mouseClick = '';
				mousePress = mouseClick;
				demo_computer();
	}).on("touchstart", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'touched';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		demo_computer();
		demo_mobile();
	}).on("touchend", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'untouched';
		demo_computer();
		demo_mobile();
	}).on("touchcancel", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'interrupted';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		demo_computer();
		demo_mobile();
	}).on("touchmove", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		mTouch = 'moving';
		xTouchPos = event.touches[0].pageX;
		yTouchPos = event.touches[0].pageY;
		zoom = 100*screen.width/window.visualViewport.width;
		demo_computer();
		demo_mobile();
	}).on("copy", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("cut", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("paste", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("auxclick", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("contextmenu", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("dblclick", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("select", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	}).on("wheel", function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
		demo_computer();
		demo_mobile();
	})
	
	$(window).resize(function(event) {
		events += 1;
		eps += 1;
		Event = event.type;
		sevent = event.type;
	   zoom = 100*screen.width/window.innerWidth;
		demo_computer();
		demo_mobile();
    });
	
	function demo_computer(){
		$("#computer").html("<strong>MouseX</strong>: " + xMousePos + " ,<strong>MouseY</strong>: " + yMousePos + " ,<strong>ScrollLeft</strong>: " + lastScrolledLeft + " ,<strong>ScrollTop</strong>: " + lastScrolledTop + " ,<strong>KeyboardPress</strong>: " + keyboardPress + " ,<strong>MouseClick</strong>: " + mouseClick + " ,<strong>Zoom</strong>: " + zoom + "%" + " , <strong>events</strong>: " + events + " , <strong>eps</strong>: " + eps + " ,<strong>event</strong>: " + Event + " ,<strong>last special event</strong>: " + sevent );
	}
	
	function demo_mobile(){
		$("#mobile").html("<strong>Touch</strong>: " + mTouch + "<strong>TouchX</strong>: " + xTouchPos + " ,<strong>TouchY</strong>: " + yTouchPos);
	}
	
	setInterval(function(){ eps = 0; demo_computer();}, 1000);
});
</script>