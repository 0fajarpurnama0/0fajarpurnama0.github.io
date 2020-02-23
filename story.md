---
layout: post
title: Stories
---

{% for post in post.categories.story %}
* [{{ post.url }}]({{ post.title }})
{% endfor %}