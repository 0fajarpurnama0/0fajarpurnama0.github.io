---
layout: post
title: My Story Projects
description: My fictions, life experiences, and stories.
---
[Fan Fictions](fanfictions)

<h2>Contents of this directory</h2>
<ul>
  {% assign current_dir = page.path | remove: "index.md" %}

  {% assign pages = site.pages | sort: 'title' %}

  {% for item in pages %}
    {% if item.path contains current_dir and item.path != page.path %}

      {% assign relative_path = item.path | remove_first: current_dir %}
      
      {% assign slash_count = relative_path | split: '/' | size %}

      {% if relative_path contains '/index.md' %}
        {% if slash_count == 2 %}
           <li>
             <strong>📂 <a href="{{ item.url }}">{{ item.title | default: item.path }}</a></strong>
           </li>
        {% endif %}
      
      {% elsif slash_count == 1 %}
        <li>
          📄 <a href="{{ item.url }}">{{ item.title | default: item.path }}</a>
        </li>
      {% endif %}

    {% endif %}
  {% endfor %}
</ul>