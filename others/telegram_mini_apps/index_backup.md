---
layout: telegram_mini_apps
title: Telegram Mini Apps
description: My telegram mini apps.
---
<style>
  .wrapper {
    display: flex;
  }

  .wrapper > * {
    width: 100%;
  }

  .grid-container-6-3 {
    display: grid;
    grid-template-columns: auto auto;
    background-color: black;
    padding: 5px;
  }

  @media screen and (min-width: 1000px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto auto auto;
	  }
  }

  @media screen and (min-width: 800px) and (max-width: 1000px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto auto;
	  }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto;
	  }
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto;
	  }
  }

  .grid-item-6-3 {
    background-color: lightgreen;
    border: 2px solid black;
  }

  .grid-item-6-3 > figure > figcaption {
    text-align: center;
  }

  .grid-item-6-3 > figure > img {
    max-height:1.5em;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-item-6-3:hover {
    background-color: yellow;
  }
</style>

<div class="grid-container-6-3">
  {% for post in site.categories.telegram_mini_app %}
  <a href="{{ post.url }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
    <figcaption>{{ post.title }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>