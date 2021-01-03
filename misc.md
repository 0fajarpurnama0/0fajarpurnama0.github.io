---
layout: post
title: Miscellaneous
---

{% for post in site.categories.misc %}
**[{{ post.title }}]({{ post.url }})**
![{{ post.featuredimage }}]({{ post.featuredimage }})
{{ post.description }}
**Keywords:** {{ post.tags }}
{% endfor %}