---
layout: post
title: Miscellaneous
---

{% for post in post.categories.misc %}
* [{{ post.url }}]({{ post.title }})
{% endfor %}