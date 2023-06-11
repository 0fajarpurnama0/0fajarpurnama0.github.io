---
layout: post
title: 0fajarpurnama0 Programs
permalink: /programming
---

<div id="programs">
{% for item in site.data.programming.htmlcssjs %}
	<h2><a href="{{ item.link }}">{{ item.title }}</a></h2>
	<div class="video-container"><iframe src="{{ item.embed }}" alt="{{ item.directlink }}" allowfullscreen></iframe></div>
	<p>{{ item.description }}</p><a href="{{ item.link }}">source code</a>
{% endfor %}
</div>
<a href="http://raboninco.com/22989623/coding-json-get-source">source code</a>