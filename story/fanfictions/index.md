---
layout: post
title: Fajar Purnama Fan Fictions
description: Fajar Purnama fictions, life experiences, and stories.
---

## Preface

All of these are fan fictions written by me Fajar Purnama. "Fan Fiction" means writing based on existing fictions based on my flavor. Therefore, the original fictions are still owned by each of their authors. I do not own the origin where the least I own are my own edits, additions, concepts, etc. Therefore copyright remains with them and I will never sell these fan fiction and will always be free and open source. I only take donation and monetization regarding my website. Even so, almost all this fan fictions are never intended for public attention and even more so never for business but only for my own entertainment to indulge in where most of my characters are myself inserted in the fan fictions however I still share just in case there are other people who would like to enjoy as well.

## List

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