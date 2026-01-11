---
layout: post
title: Fajar Purnama Suikoden 5 Fan Fictions
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

# Demo

The first time I played Suikoden 5 I just went along with the flow and got bad endings. Then I played the second time by following the walkthroughs to get the good endings. However there are still many what ifs that I want to see. While writing fan fictions for Suikoden 5 is interesting, I did not start as a writer so it is not as exciting as reading other works, watching movies, and playing video games. However, with AI services available now specifically language models, writing fan fictions become as exciting as doing those 3 entertainment activities because I become excited to anticipate what the AI is going to write (just like what is the next chapter of the reading, what is the next episode of the movie, or what will happen in the game) and therefore I can treat fan fiction writing with AI as another entertainment activity with a bonus of writing my own stories and share them as a content creator.

- [My first fanfiction writing attempt with Gemini AI where I was in the concept of being a deity having my own realm like the Daedric Lords in Elder Scroll series and here the main theme is saving the Queen Arshtat, the commander of the Queen's Knight Ferid, and other characters from their inevitable death.](ai_chat_backup/gemini_chat_first_suikoden_5_fanfiction_backup)
- [My chat backup with Gemini AI in designing and planning my next Suikoden 5 fanfiction writing project.](ai_chat_backup/gemini_chat_suikoden_5_fanfiction_writing_project_backup)

# Introduction

The main idea is about reincarnation into the Suikoden 5 world. Mostly will be like isekai or transported to another world genre. Like other manga, manhua, and manhwa stories, the theme will be improving the canon best ending with the transported characters' otherworldly knowledge which may even break the canon. The current otherwordly knowledge are martial arts, tactical espionage, and cultivation from wuxia and murim genres. Special mention to One Piece haki, Dragon Ball ki, few Naruto chakra, and even more like Bleach because they bring simple but effective concepts. Technologies are also cool but I still lack the knowledge. Other than improving the canon best ending, the theme will also be about entertainment and satisfaction. While it may break the thrill experience, this will be considered in the future. My personality in this fanfiction will be truthful, fearless, carefree, and friendly.

# Beyond Canon Best Ending

- Rescue Arshtat and Ferid from their inevitable death.
- Rescue Sialeeds and other characters from their inevitable death.

# Routes

- Route 0: [Cannon Gameplay](/story/gameplay/suikoden5).
- Route 1.1: I reincarnated as the main character the Prince of Falena with othewrworldly knowledge.
- Route 1.2: the new game + of route 1.1 with not only otherworldly knowledge but also soul and experience from other worlds.
- Route 2.1: I reincarnated as Euram Barrows route 1.2 style.
- Route 2.2: Euram Barrows redemption and reincarnation and I reincarnated as his mentor.
- Route 3.1: I reincarnated as Princess Lymsleia route 1.2 style.
- Route 3.2: Princess Lymsleia reincarnation and I reincarnated as her mentor.

# Training Modules