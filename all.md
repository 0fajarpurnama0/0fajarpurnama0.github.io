---
layout: post
title: All Posts
---

{% for post in site.posts %}
**[{{ post.title }}]({{ post.url }})**
![{{ post.featuredimage }}]({{ post.featuredimage }})
{{ post.description }}
**Keywords:** {{ post.tags }}
{% endfor %}
