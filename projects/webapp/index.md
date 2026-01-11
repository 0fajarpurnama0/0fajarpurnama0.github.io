---
layout: post
title: My Web Applications
description: All of my applications in only HTML CSS JS or other still relevant to client side and single page applications.
---
{% assign current_dir = page.path | remove: "index.md" | remove: "index.html" %}

{% assign static_files = site.static_files %}
{% assign pages = site.pages %}
{% assign all_items = pages | concat: static_files | sort: 'path' %}

<h3>📂 Categories</h3>
<ul>
  {% assign has_folders = false %}
  
  {% for item in all_items %}
    {% assign item_path = item.path | remove_first: "/" %}
    
    {% if item_path contains current_dir and item_path != page.path %}
      {% assign relative_path = item_path | remove_first: current_dir %}
      {% assign path_parts = relative_path | split: '/' %}
      {% assign slash_count = path_parts | size %}

      {% if slash_count == 2 %}
        {% if relative_path contains '/index.md' or relative_path contains '/index.html' %}
          {% assign has_folders = true %}
          
          {% assign folder_name = path_parts[0] %}
          
          <li>
            <strong>
              <a href="{{ site.baseurl }}/{{ current_dir }}{{ folder_name }}/">
                📂 {{ folder_name }}
              </a>
            </strong>
          </li>
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% if has_folders == false %}
    <li style="list-style: none; color: #666;"><i>No sub-categories found.</i></li>
  {% endif %}
</ul>

<hr>

<h3>📄 Articles</h3>
<ul>
  {% assign has_files = false %}

  {% for item in all_items %}
    {% assign item_path = item.path | remove_first: "/" %}

    {% if item_path contains current_dir and item_path != page.path %}
      {% assign relative_path = item_path | remove_first: current_dir %}
      {% assign slash_count = relative_path | split: '/' | size %}

      {% unless relative_path contains '/index.md' or relative_path contains '/index.html' or relative_path contains '.css' or relative_path contains '.js' or relative_path contains '.json' or relative_path contains 'LICENSE' or relative_path contains 'README' %}
        {% if slash_count == 1 %}
          {% assign has_files = true %}
          <li>
            <a href="{{ item.url }}">
              {% if item.title %}
                {{ item.title }}
              {% else %}
                {{ item.name | default: relative_path }}
              {% endif %}
            </a>
          </li>
        {% endif %}
      {% endunless %}

    {% endif %}
  {% endfor %}

  {% if has_files == false %}
    <li style="list-style: none; color: #666;"><i>No articles in this folder.</i></li>
  {% endif %}
</ul>