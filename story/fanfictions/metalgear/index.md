---
layout: post
title: Metal Gear Fan Fictions by Fajar Purnama
description: Fajar Purnama fictions, life experiences, and stories.
featuredimage: /story/fanfictions/metalgear/images/Mother20%Base20%in20%New20%Realm.png
---

![A detailed photograph of the sprawling, multi-platform offshore facility, Mother Base from Metal Gear Solid V: The Phantom Pain (based on image_1.png, image_3.png, and image_4.png), but transposed to an entirely different dimension. The facility, with all its connected orange and black hexagonal platforms, bridges, and tower structures, floats in a boundless, ethereal, and dimensionless realm. The sky is a stark, bright, infinite white that provides no sense of horizon. The structures are suspended in this white expanse, with no ocean visible below; only a continuation of the white void and perhaps the lower pillars fading into it. The atmosphere is quiet and otherworldly, with a single, stationary Diamond Dogs helicopter on a landing pad.](<images/Mother Base in New Realm.png>)

{% assign current_dir = page.path | remove: "index.md" | remove: "index.html" %}
{% assign pages = site.pages | sort: 'title' %}

<h3>📂 Categories</h3>
<ul>
  {% assign has_folders = false %}
  
  {% for item in pages %}
    {% if item.path contains current_dir and item.path != page.path %}
      {% assign relative_path = item.path | remove_first: current_dir %}
      {% assign slash_count = relative_path | split: '/' | size %}

      {% if slash_count == 2 %}
        {% if relative_path contains '/index.md' or relative_path contains '/index.html' %}
          {% assign has_folders = true %}
          <li>
            <strong>
              <a href="{{ item.url }}">
                {{ item.title | default: relative_path | remove: "/index.md" | remove: "/index.html" | capitalize }}
              </a>
            </strong>
          </li>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% if has_folders == false %}
    <li><i>No sub-categories found.</i></li>
  {% endif %}
</ul>

<hr>

<h3>📄 Articles</h3>
<ul>
  {% assign has_files = false %}

  {% for item in pages %}
    {% if item.path contains current_dir and item.path != page.path %}
      {% assign relative_path = item.path | remove_first: current_dir %}
      {% assign slash_count = relative_path | split: '/' | size %}

      {% unless relative_path contains '/index.md' or relative_path contains '/index.html' %}
        {% if slash_count == 1 %}
          {% assign has_files = true %}
          <li>
            <a href="{{ item.url }}">{{ item.title | default: item.name }}</a>
          </li>
        {% endif %}
      {% endunless %}

    {% endif %}
  {% endfor %}

  {% if has_files == false %}
    <li><i>No articles in this folder.</i></li>
  {% endif %}
</ul>