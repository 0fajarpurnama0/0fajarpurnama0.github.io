---
layout: docs
title: Markdown Testings
category: markdown
permalink: /markdown/
---

{% for page in page.categories.markdown %}
* [{{ page.url }}]({{ page.title }})
{% endfor %}