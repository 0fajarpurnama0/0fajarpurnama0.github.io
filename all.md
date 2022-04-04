---
layout: post
title: All Posts
description: All the post on this site.
---
<div class="grid-post-all">
  {% for post in site.posts %}
  <div>
    ### [{{ post.title }}]({{ post.url }})

      ![{{ post.featuredimage }}]({{ post.featuredimage }})

      *{{ post.description }}*

      **Keywords:** {{ post.tags }}
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