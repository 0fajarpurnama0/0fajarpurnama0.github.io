---
layout: docs
title: fiction
categories: story
---

{% for page in page.categories.fiction %}
* [{{ page.url }}]({{ page.title }})
{% endfor %}
