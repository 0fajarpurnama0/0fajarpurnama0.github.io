---
layout: post
title: Stories
---

{% for post in site.categories.story %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}