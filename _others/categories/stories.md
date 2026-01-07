---
layout: post
title: Stories
description: My fictions, life experiences, and stories.
permalink: /stories/
---
<div class="grid-post-all">
  <div>
    <h3><a href="{{ site.url }}/fiction.html">Fiction</a></h3>
      <img src="" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>All of my fictions.</i></p>
  </div>
  <div>
    <h3><a href="{{ site.url }}/opinion.html">Opinion</a></h3>
      <img src="" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>All of my opinions.</i></p>
  </div>
  {% for post in site.categories.story %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags | join: ' ' }}</p>
  </div>
  {% endfor %}
</div>