---
layout: post
title: Quotes
---

{% for post in site.categories.quote %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}