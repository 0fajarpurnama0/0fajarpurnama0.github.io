---
layout: post
title: Quotes
---

{% for post in site.categories.quote %}
**[{{ post.title }}]({{ post.url }})**
![{{ post.featuredimage }}]({{ post.featuredimage }})
{{ post.description }}
**Keywords:** {{ post.tags }}
{% endfor %}