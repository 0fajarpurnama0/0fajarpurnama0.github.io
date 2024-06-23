---
layout: telegram_mini_apps
title: Cryptocurrency Dashboard
category: telegram mini app
tags: [telegram mini app, tools, widget, web, blog, crypto, defi, blockchain, news, information, dashboard]
featuredimage: /assets/images/icon/logo-0FP0.png
description: Dashboard to dive into cryptoccurency for my entertainment and hopefully others can enjoy as well.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/30/cryptocurrency-dashboard
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

<h2>Addictive</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.telegram_apps %}
  {% if item.rate == "addictive" %}
  <a href="{% if item.personal_link == null %}{{ item.link }}{% else %}{{ item.personal_link }}{% endif %}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endif %}
  {% endfor %}
</div>

<h2>Fun</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.telegram_apps %}
  {% if item.rate == "fun" %}
  <a href="{% if item.personal_link == null %}{{ item.link }}{% else %}{{ item.personal_link }}{% endif %}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endif %}
  {% endfor %}
</div>

<h2>Playable</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.telegram_apps %}
  {% if item.rate == "playable" %}
  <a href="{% if item.personal_link == null %}{{ item.link }}{% else %}{{ item.personal_link }}{% endif %}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endif %}
  {% endfor %}
</div>

<h2>Others</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.telegram_apps %}
  {% if item.rate == "others" %}
  <a href="{% if item.personal_link == null %}{{ item.link }}{% else %}{{ item.personal_link }}{% endif %}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endif %}
  {% endfor %}
</div>