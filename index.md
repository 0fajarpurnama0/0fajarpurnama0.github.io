---
layout: post
title: Fajar Purnama Website
description: All the post on this site.
---
<p>Welcome to my personal blog! Click the heading hyperlinks to list all posts under that category! Click anywhere inside the slideshow to open the featured article! You can also manually scroll to the slideshow through the left and right pointer buttons! Who am I? Check my [Curriculum Vitae](cv)!</p>

# Freedom Technology
<style>
#tagscloud{
	width:100%;
	height:50vh;
	position:relative;
	font-size:12px;
	color:#333;
	margin:20px auto 0;
	text-align:center;
}
#tagscloud a{
	position:absolute;
	top:0px;
	left:0px;
	color:#333;
	font-family:Arial;
	text-decoration:none;
	margin:0 10px 15px 0;
	line-height:18px;
	text-align:center;
	font-size:12px;
	padding:1px 5px;
	display:inline-block;
	border-radius:3px;
}
#tagscloud a:hover{
	color:#fff;
	background:#0099ff;
}

</style>

<div id="tagscloud">
</div>

<script>
// Json Words
const freedomtechnologywords = new XMLHttpRequest();
freedomtechnologywords.onload = function() {
  const words = JSON.parse(this.responseText);
  for (let word in words["freedom technology"]) {
  	document.getElementById("tagscloud").innerHTML += `<a href="#" style="left: `+getRndInteger(0, 500)+`px; top: `+getRndInteger(0, 500)+`px; z-index: `+getRndInteger(0, 200)+`; opacity: `+getRndInteger(1000, 10000)/10000+`; color: rgb(255, 255, 255); background-color: rgb(`+getRndInteger(0, 255)+`,`+getRndInteger(0, 255)+`,`+getRndInteger(0, 255)+`); padding: 5px; display: none; font-size:calc(11pt + 1vw);">`+words["freedom technology"][word]+`</a>`;
  }
  
  // Cloud Tags Animation
  var i=0;
	var oTag=null;
	oDiv=document.getElementById('tagscloud');
	aA=oDiv.getElementsByTagName('a');
	for(i=0;i<aA.length;i++)
	{
		oTag={};		
		aA[i].onmouseover = (function (obj) {
			return function () {
				obj.on = true;
				this.style.zIndex = 9999;
				this.style.color = '#fff';
				this.style.padding = '5px 5px';
				this.style.filter = "alpha(opacity=100)";
				this.style.opacity = 1;
			}
		})(oTag)
		aA[i].onmouseout = (function (obj) {
			return function () {
				obj.on = false;
				this.style.zIndex = obj.zIndex;
				this.style.color = '#fff';
				this.style.padding = '5px';
				this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")";
				this.style.opacity = obj.alpha;
				this.style.zIndex = obj.zIndex;
			}
		})(oTag)
		oTag.offsetWidth = aA[i].offsetWidth;
		oTag.offsetHeight = aA[i].offsetHeight;
		mcList.push(oTag);
	}
	sineCosine( 0,0,0 );
	positionAll();
	(function () {
            update();
            setTimeout(arguments.callee, 40);
        })();
}
freedomtechnologywords.open("GET", "{{ '/assets/json/words.json' | relative_url }}");
freedomtechnologywords.send();

// Tag Cloud Other Variables and Functions
var radius = 200;
var d = 200;
var dtr = Math.PI / 180;
var mcList = [];
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed = 11;
var size = 200;
var mouseX = 0;
var mouseY = 10;
var howElliptical = 1;
var aA = null;
var oDiv = null;

function update()
{
	var a, b, c = 0;
        a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
        b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
        lasta = a;
        lastb = b;
        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
            return;
        }
        sineCosine(a, b, c);
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            var rx1 = mcList[i].cx;
            var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
            var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

            var rx2 = rx1 * cb + rz1 * sb;
            var ry2 = ry1;
            var rz2 = rx1 * (-sb) + rz1 * cb;

            var rx3 = rx2 * cc + ry2 * (-sc);
            var ry3 = rx2 * sc + ry2 * cc;
            var rz3 = rz2;

            mcList[i].cx = rx3;
            mcList[i].cy = ry3;
            mcList[i].cz = rz3;

            per = d / (d + rz3);

            mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
            mcList[i].y = ry3 * per;
            mcList[i].scale = per;
            var alpha = per;
            alpha = (alpha - 0.6) * (10 / 6);
            mcList[i].alpha = alpha * alpha * alpha - 0.2;
            mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
        }
        doPosition();
}
function positionAll()
{
	var phi = 0;
    var theta = 0;
    var max = mcList.length;
    for (var i = 0; i < max; i++) {
        if (distr) {
            phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
            theta = Math.sqrt(max * Math.PI) * phi;
        } else {
            phi = Math.random() * (Math.PI);
            theta = Math.random() * (2 * Math.PI);
        }

        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
        mcList[i].cz = radius * Math.cos(phi);

        aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
        aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
    }
}
function doPosition()
{
	var l = oDiv.offsetWidth / 2;
        var t = oDiv.offsetHeight / 2;
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            var aAs = aA[i].style;
            if (mcList[i].alpha > 0.1) {
                if (aAs.display != '')
                    aAs.display = '';
            } else {
                if (aAs.display != 'none')
                    aAs.display = 'none';
                continue;
            }
            aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
            aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';

            aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
            aAs.zIndex = mcList[i].zIndex;
            aAs.opacity = mcList[i].alpha;
        }
}
function sineCosine( a, b, c)
{
	sa = Math.sin(a * dtr);
    ca = Math.cos(a * dtr);
    sb = Math.sin(b * dtr);
    cb = Math.cos(b * dtr);
	sc = Math.sin(c * dtr);
	cc = Math.cos(c * dtr);
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
</script>

# Personal Careers

## [Cryptocurrency](cryptocurrency)

<div class="slideshow-container">
  {% for post in site.categories.cryptocurrency %}
  <div class="cryptocurrency fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('cryptocurrency', -1, 0)">&#10094;</a>
    <a class="next" onclick="changeSlides('cryptocurrency', 1, 0)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Finance](finance)

<div class="slideshow-container">
  {% for post in site.categories.finance %}
  <div class="finance fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('finance', -1, 1)">&#10094;</a>
    <a class="next" onclick="changeSlides('finance', 1, 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Income Reports](blogging-income)

<div class="slideshow-container">
  {% for post in site.tags.blogging %}
  <div class="blogging fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('blogging', -1, 2)">&#10094;</a>
    <a class="next" onclick="changeSlides('blogging', 1, 2)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Computers and Internet](internet)

<div class="slideshow-container">
  {% for post in site.categories.internet %}
  <div class="internet fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('internet', -1, 3)">&#10094;</a>
    <a class="next" onclick="changeSlides('internet', 1, 3)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Penetration Testing and Hacking](pentest)

<div class="slideshow-container">
  {% for post in site.categories.pentest %}
  <div class="pentest fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('pentest', -1, 4)">&#10094;</a>
    <a class="next" onclick="changeSlides('pentest', 1, 4)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Trading Signals](tradingsignals)

<div class="slideshow-container">
  {% for post in site.categories.tradingsignals %}
  <div class="tradingsignals fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('tradingsignals', -1, 5)">&#10094;</a>
    <a class="next" onclick="changeSlides('tradingsignals', 1, 5)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Goods and Services](service)

<div class="slideshow-container">
  {% for post in site.categories.service %}
  <div class="service fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('service', -1, 6)">&#10094;</a>
    <a class="next" onclick="changeSlides('service', 1, 6)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Academic Careers

## [Bachelors](bachelor)

<div class="slideshow-container">
  {% for post in site.categories.bachelor %}
  <div class="bachelor fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('bachelor', -1, 7)">&#10094;</a>
    <a class="next" onclick="changeSlides('bachelor', 1, 7)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Masters](masters)

<div class="slideshow-container">
  {% for post in site.categories.masters %}
  <div class="masters fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('masters', -1, 8)">&#10094;</a>
    <a class="next" onclick="changeSlides('masters', 1, 8)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Doctoral](doctoral)

<div class="slideshow-container">
  {% for post in site.categories.doctoral %}
  <div class="doctoral fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('doctoral', -1, 9)">&#10094;</a>
    <a class="next" onclick="changeSlides('doctoral', 1, 9)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Everything Else

## [Stories](story)

<div class="slideshow-container">
  {% for post in site.categories.story %}
  <div class="story fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('story', -1, 10)">&#10094;</a>
    <a class="next" onclick="changeSlides('story', 1, 10)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Quotes](quote)

<div class="slideshow-container">
  {% for post in site.categories.quote %}
  <div class="quote fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('quote', -1, 11)">&#10094;</a>
    <a class="next" onclick="changeSlides('quote', 1, 11)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Miscellaneous](misc)

<div class="slideshow-container">
  {% for post in site.categories.misc %}
  <div class="misc fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('misc', -1, 12)">&#10094;</a>
    <a class="next" onclick="changeSlides('misc', 1, 12)">&#10095;</a>
  </div>
  {% endfor %}
</div>

- [Cryptocurrency 101 For Users](cryptocurrency-101-user)
- [My Coding Lists](codinglist)
- [Get Good Deals](deals)
- [Affiliates Endorsements Referrals](referral)
- [To Do List](todolist)
- [My Twitter Timeline](0fajarpurnama0-twitter-timeline)
- [My Facebook Timeline](0fajarpurnama0-facebook-timeline)
- [My Instagram Timeline](0fajarpurnama0-instagram-timeline)
- [Sample Markdowns](sample)
- [Source code of this page](http://mellow.link/5rn2l)
- [Source code of these pages!](http://mellow.link/5oEot)

## [Contact Me](channel-and-website)

<script>
  let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let mySlides = ["cryptocurrency", "finance", "blogging", "internet", "pentest", "tradingsignals", "service", "bachelor", "masters", "doctoral", "story", "quote", "misc"]

  for (let i = 0; i < mySlides.length; i++) {
    showSlides(mySlides[i], i);
  }

  function changeSlides(theslides, n, j){
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j] += n;
    if ((n > 0) && (slideIndex[j] > slides.length)) {slideIndex[j] = 1}
    if ((n < 0) && (slideIndex[j] == 0)) {slideIndex[j] = slides.length}
    slides[slideIndex[j]-1].style.display = "block";  
  }

  function showSlides(theslides, j) {
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j]++;
    if (slideIndex[j] > slides.length) {slideIndex[j] = 1}    
    slides[slideIndex[j]-1].style.display = "block";  
    setTimeout(function() {showSlides(theslides, j);}, 2000);
    // Change image every 2 seconds
  }
</script>

<style>
  * {box-sizing: border-box;}
  body {font-family: Verdana, sans-serif;}
  .cryptocurrency, .finance, .blogging, .internet, .pentest, .tradingsignals, .service, .bachelor, .masters, .doctoral, .story, .quote, .misc {display: none;}
  img {vertical-align: middle;}

  /* Slideshow container */
  .slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
  }

  .active {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    color: yellow;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a grey background color */
  .prev:hover, .next:hover {
    background-color: #f1f1f1;
    color: black;
  }

  h1, h2, h3 {
    text-align: center;
  }

  .post-title {
    height: 3em;
  }

  .post-description {
    height: 4em;
  }

  .featured-image {
    height: 50vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .random-quotes-widget {
    display: none;
  }
</style>
