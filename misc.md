---
layout: post
title: Miscellaneous
---

{% for post in site.categories.misc %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}