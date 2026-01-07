---
layout: post
title: 0fajarpurnama0 Programs
permalink: /programming
---
<div id="programming-summary">
	<ul>
		<li><a href="https://0fajarpurnama0.github.io/internet/2020/03/29/starting-computer-programming.html">My Start in Computer Programming</a></li>
		<li><a href="https://0fajarpurnama0.github.io/internet/2022/07/18/python-cheat-sheet.html">My Start in Python</a></li>
		<li><a href="https://github.com/0fajarpurnama0">My Github</a></li>
		<li><a href="https://codepen.io/0fajarpurnama0">My Codepen</a></li>
		<li><a href="https://jsfiddle.net/user/0fajarpurnama0/fiddles/">My JSFiddle</a></li>
		<li><a href="https://plnkr.co/users/0fajarpurnama0/plunks">My Plunks</a></li>
		<li><a href="https://0fajarpurnama0.github.io/cryptocurrency/2022/03/01/web3-source-code-collection.html">My Start in Dapp</a></li>
		<li><a href="https://snowtrace.io/address/0x1909f937E3c0Cf3d21E1379695b732C0Ff852960/contract/43114/code"></a>My Start in Smart Contract</li>
	</ul>
</div>

<div id="programs">
{% for item in site.data.programming.htmlcssjs %}
	<h2><a href="{{ item.link }}">{{ item.title }}</a></h2>
	<div class="video-container"><iframe src="{{ item.embed }}" alt="{{ item.directlink }}" allowfullscreen></iframe></div>
	<p>{{ item.description }}</p><a href="{{ item.link }}">source code</a>
{% endfor %}
</div>
<a href="http://raboninco.com/22989623/coding-json-get-source">source code</a>