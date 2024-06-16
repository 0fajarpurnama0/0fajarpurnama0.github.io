---
layout: post
title: Fajar Purnama Website
description: Fajar Purnama website built with Jekyll.
---
<h2>My Dashboards</h2>
<div class="grid-post-all">
{% for item in site.data.featured_post.dashboards %}
  {% assign Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ Post.url }}">{{ Post.title }}</a></h3>
        <img src="{{ Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ Post.description }}</i></p>
        <p><b>Keywords:</b> {{ Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<h2>Censorship Resistance</h2>

<h3>Tired of being blocked? Consider my methods below.</h3>

<div class="grid-post-all">
{% for item in site.data.featured_post.censorship_resistance.client %}
  {% assign Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ Post.url }}">{{ Post.title }}</a></h3>
        <img src="{{ Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ Post.description }}</i></p>
        <p><b>Keywords:</b> {{ Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<h3>Tired of your contents being censored? My methods coming soon.</h3>

<div class="grid-post-all">
{% for item in site.data.featured_post.censorship_resistance.server %}
  {% assign Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ Post.url }}">{{ Post.title }}</a></h3>
        <img src="{{ Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ Post.description }}</i></p>
        <p><b>Keywords:</b> {{ Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<h2>Learn About Crypto</h2>

<h3>Quick Start For General Audiences</h3>

<div class="grid-post-all">
{% for item in site.data.featured_post.cryptocurrency.quickstart %}
  {% assign Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ Post.url }}">{{ Post.title }}</a></h3>
        <img src="{{ Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ Post.description }}</i></p>
        <p><b>Keywords:</b> {{ Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<h2>My Dapp Programming Learning</h2>

<p>Most of them only in HTML CSS JavaScript where you can copy and paste to your blog and any websites. Some of them are smart contracts. A list of other reference including <a href="{{ site.url }}/matakuliah/teknologi-pemrograman-blockchain/materi9">courses on blockchain with certification available here</a>.</p>

<div class="grid-post-all">
{% for item in site.data.featured_post.cryptocurrency.dapp.programming %}
  {% assign dapp_programming_Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ dapp_programming_Post.url }}">{{ dapp_programming_Post.title }}</a></h3>
        <img src="{{ dapp_programming_Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ dapp_programming_Post.description }}</i></p>
        <p><b>Keywords:</b> {{ dapp_programming_Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<h2>My Basics in Computers Throughout my Student Times</h2>

<div class="grid-post-all">
{% for item in site.data.featured_post.computer.foundation %}
  {% assign Post = site.posts | where: 'title', item.title | first %}
    <div>
      <h3><a href="{{ Post.url }}">{{ Post.title }}</a></h3>
        <img src="{{ Post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
        <p><i>{{ Post.description }}</i></p>
        <p><b>Keywords:</b> {{ Post.tags | join: ' ' }}</p>
    </div>
{% endfor %}
</div>

<!--
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
-->