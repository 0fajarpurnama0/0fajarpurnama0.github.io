---
layout: post
title: Tools
description: All of my tools and widgets including 3rd parties.
---
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

<div class="grid-post-all">
  {% for post in site.categories.tools %}
  <div>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p><i>{{ post.description }}</i></p>
      <p><b>Keywords:</b> {{ post.tags }}</p>
  </div>
  {% endfor %}
</div>

<div id="onlinetools">
	<ul>
	</ul>
</div>

<script>
const onlinetoolsxmlhttp = new XMLHttpRequest();
onlinetoolsxmlhttp.onload = function() {
  const onlinetools = JSON.parse(this.responseText);
  for (number in onlinetools.todolist) {
  	document.getElementById("onlinetools").children[0].innerHTML += `<li><a href="`+onlinetools.online[number].link+`">`+onlinetools.online[number].tool+`</a></li>`;
  }
}
onlinetoolsxmlhttp.open("GET", "{{ '/assets/json/tools.json' | relative_url }}");
onlinetoolsxmlhttp.send();
</script>