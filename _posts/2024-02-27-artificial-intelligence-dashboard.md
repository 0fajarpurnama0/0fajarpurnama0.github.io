---
layout: post
title: Artificial Intelligence Dashboard
category: tools
tags: [tools, widget, web, artificial intelligence, ai, applications]
featuredimage: https://pbs.twimg.com/media/F3t_GsCboAADF_m?format=png
description: Collection of AI tools to help us.
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/02/27/artificial-intelligence-dashboard
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
    grid-template-columns: auto auto auto auto auto auto;
    background-color: black;
    padding: 5px;
  }

  @media screen and (max-width: 767px) {
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

<!-- List of Artificial Intelligence Applications Start -->
<h2>Artificial Intelligence Applications</h2>
<div class="grid-container-6-3">
  {% for item in site.data.artificial_intelligence_dashboard.applications %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
      <img src="{{ item.icon }}" alt="{{ item.description }}" />
      <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<!-- List of Artificial Intelligence Applications End -->