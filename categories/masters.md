---
layout: post
title: Masters
description: All of my publications during my Masters Course in Computer Science and Electrical Engineering, Kumamoto University.
permalink: /masters
---
<div class="grid-post-all">
  {% for post in site.categories.masters %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags | join: ' ' }}</p>
  </div>
  {% endfor %}
</div>