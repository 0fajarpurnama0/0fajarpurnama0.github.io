---
layout: telegram_mini_apps
title: Contact Me
category: telegram_mini_app
tags: [telegram mini app, contact, blog, website, social media]
featuredimage: /assets/images/icon/logo-0FP0.png
description: Contact me through the followings.
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
  {% for item in site.data.contactme.Primary %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>

<div class="grid-container-6-3">
  {% for item in site.data.contactme.Secondary %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>

<div class="grid-container-6-3">
  {% for item in site.data.contactme.Others %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>