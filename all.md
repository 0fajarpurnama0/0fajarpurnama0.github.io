---
layout: post
title: All Posts
description: All the post on this site.
---
<div class="grid-post-all">
  {% for post in site.posts %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags }}</p>
  </div>
  {% endfor %}
</div>

<style>
.grid-post-all {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  text-align: justify;
}

.grid-post-all > div {
  background-color: rgba(255, 255, 255, 0.8);
}

.grid-post-all > div > img {
  max-width: 100%;
  text-align: center;
}

.grid-post-all > div > h1,h2,h3 {
  text-align: center;
}
</style>