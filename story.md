---
layout: post
title: Stories
description: My fictions, life experiences, and stories.
---
<div class="grid-post-all">
  {% for post in site.categories.story %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags }}</p>
  </div>
  {% endfor %}
</div>

<style>
.grid-post-all {
  display: grid;
  grid-template-columns: 50% auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  text-align: justify;
  word-wrap: break-word;
}

.grid-post-all > div {
  background-color: rgba(255, 255, 255, 0.8);
}

.grid-post-all > div > img {
  max-width: 100%;
  max-height: 50vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.grid-post-all > div > h1,h2,h3 {
  text-align: center;
}
</style>