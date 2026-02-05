---
layout: post
title: Fajar Purnama Valkyrie Profile Lenneth Gameplay
description: 
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

## Full Playlist

<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=keq8yh_DtPkQUWwa&amp;list=PLatFUVMwOL4NyulsBh3GIjbMbFbznWS7z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## More Details Comming Soon

<div class="video-container"></div>

## Prologue

## Chapter 1
### Chapter 1.1 New Game and Spiritual Concentration 

### Chapter 1.2 Arngrim and Jelanda in Royal Capital of Artolia

### Chapter 1.3 Artolian Mountain Ruins Dungeon Tutorial

### Chapter 1.4 Belenus in Lassen

### Chapter 1.5 Llewelyn in Crell Monferaigne

### Chapter 1.6 Empty Spiritual Concentration

### Chapter 1.7 Crell Monferaigne Llewelyn Retrace

### Chapter 1.8 Lassen Belenus Retrace

### Chapter 1.9 Royal Capital of Artolia Arngrim Retrace

### Chapter 1.10 Solde Catacombs Dungeon

### Chapter 1.11 Cave of Oblivion Dungeon

### Chapter 1.12 Menu

### Chapter 1 - 2 Sacred Phase

## Chapter 2

### Chapter 2.1 Lawfer in Artolia

### Chapter 2.2 Nanami in Hai-Lan

### Chapter 2.3 Jun in Hai-Lan

### Chapter 2.4 Nethov Swamp Dungeon

### Chapter 2.5 Selerno Academy Dungeon

### Chapter 2.6 Cave of Oblivion Dungeon

### Chapter 2 - 3 Sacred Phase

## Chapter 3

### Chapter 3.1 Kashell in Camille Village

### Chapter 3.2 Janus in Crell Monferaigne

### Chapter 3.3 Empy Spiritual Concentration

### Chapter 3.4 Cave of Oblivion Dungeon

### Chapter 3.5 Camille Village Church Dungeon

### Chapter 3.6 Crell Monferaigne Janus Retrace

### Chapter 3.7 Clockwork Mansion Dungeon

### Chapter 3.8 Cave of Oblivion Dungeon

### Chapter 3.9 Menu

### Chapter 3.10 Brhams Castle

### Chapter 3.11 Farming Behind The Scene

### Chapter 3 - 4 Sacred Phase

## Chapter 4

### Chapter 4.1 Menu

### Chapter 4.2 Aelia in Villnore

### Chapter 4.3 Yumei in Hai-Lan

### Chapter 4.4 Empty Spiritual Concentration

### Chapter 4.5 Dark Tower of Xervah Dungeon

### Chapter 4.6 Cave of Thackus Dungeon

### Chapter 4.7 Cave of Oblivion Dungeon

### Chapter 4.8 Menu

### Chapter 4 - 5 Sacred Phase

## Chapter 5

### Chapter 5.1 Cave of Oblivion

### Chapter 5.2 Lorenta in Flenceburg & Tower of Lezard Valeth Dungeon

### Chapter 5.3 Lucian in Weeping Lily Meadow & Garabellum

### Chapter 5.4 Brahms The Lord of Undead and Farming Behind The Scene

### Chapter 5.5 Jayle in Crell Monferaigne

### Chapter 5 - 6 Sacred Phase

## Chapter 6

### Chapter 6.1 Mystina in Flenceburg

### Chapter 6.2 Lucian in Garabellum

### Chapter 6.3 Hai-Lan Yumei Retrace

### Chapter 6.4 Flenceburg Lorenta Mystina Retrace

### Chapter 6.5 Arkdain Ruins Dungeon

### Chapter 6.6 Citadel of Flame Dungeon

### Chapter 6.7 Badrach in Villnore

### Chapter 6.8 Grey in Arkdain Ruins

### Chapter 6.9 Shiho in Hai-Lan

### Chapter 6.10

### Chapter 6.11 Cave of Oblivion Dungeon

### Chapter 6.12 Sunken Shrine Dungeon

### Chapter 6.13 Lost City of Dipan Dungeon

### Chapter 6.14 Sending Lucian to Vahalla

### Chapter 6 - 7 Sacred Phase

## Chapter 7

### Chapter 7.1 Suo in Hai-Lan

### Chapter 7.2 Lyseria in Arkdain Ruins

### Chapter 7.3 Forest of Spirits Dungeon Elves Fix Accursed Flame Gem

### Chapter 7.4 Completing Forest of Spirits Cave of Oblivion Dungeon

### Chapter 7.5 Tombs of Amenti Dungeon

### Chapter 7.6 Farming Behind The Scene

### Chapter 7 - 8 - Ending A Sacred Phase Lucian's Death The True Loki

## Chapter 8

### Chapter 8.1 Cave of Oblivion Dungeon

### Chapter 8.2 Gandar in Palance of The Dragon Dungeon

### Chapter 8.3 Arianrod Labyrinth Dungeon

### Chapter 8.4 Celestial Castle Dungeon

### Chapter 8 - Ending A Sacred Phase Asgard Hrist Surt Odin Loki

### Ending A Bloodblane Fenrir Loki