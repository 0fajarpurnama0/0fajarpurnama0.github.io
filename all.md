---
layout: post
title: All Posts
---

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}
