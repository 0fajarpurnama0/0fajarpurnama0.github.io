---
layout: post
title: My Naruto and Boruto Reset Fan Fictions
description: My fictions, life experiences, and stories.
---
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

# Introduction

Although my initial interest about Naruto manga and anime was how a lonely and not gifted boy name Naruto can succeed with hard work, its theme is tragedic compared to the mangas and animes of its era such as One Piece, Bleach, and Fairy Tail and discussed hatred the most. Its next generation called Boruto manga and anime takes a refreshing turn of slice of life of their kids after successfully saving the world, ending the war, and uniting the people. As a fan of reincarnation, time travel, and all of this kind fictions, Naruto is a dream fan fiction to fix its tragedies and having Boruto's generation to time travel there adds an interesting slice of life where I am not the only who wrote this fan fiction but so many others have written in the past.

# Demos

- [Naruto Reset](naruto-reset-demo)
- [Boruto Reset](boruto-reset-demo)

# Routes

- [Naruto Boruto Shattered Hourglass: Restoration Protocol](shattered-hourglass-restoration-protocol)