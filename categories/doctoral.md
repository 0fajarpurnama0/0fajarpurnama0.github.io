---
layout: post
title: Doctoral
description: All of my publications during my Doctoral Course in Computer Science and Electrical Engineering, Kumamoto University.
permalink: /doctoral
---
<div class="grid-post-all">
  {% for post in site.categories.doctoral %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags | join: ' ' }}</p>
  </div>
  {% endfor %}
</div>