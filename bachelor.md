---
layout: post
title: Bachelor
description: All of my publications, assignments, and essays during my Bachelors Course in Electrical Engineering Udayana University.
---
<div class="grid-post-all">
  {% for post in site.categories.bachelor %}
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