---
layout: post
title: Fajar Purnama Suikoden 5 Fan Fictions
description: My fictions, life experiences, and stories.
---
The first time I played Suikoden 5 I just went along with the flow and got bad endings. Then I played the second time by following the walkthroughs to get the good endings. However there are still many what ifs that I want to see. While writing fan fictions for Suikoden 5 is interesting, I did not start as a writer so it is not as exciting as reading other works, watching movies, and playing video games. However, with AI services available now specifically language models, writing fan fictions become as exciting as doing those 3 entertainment activities because I become excited to anticipate what the AI is going to write (just like what is the next chapter of the reading, what is the next episode of the movie, or what will happen in the game) and therefore I can treat fan fiction writing with AI as another entertainment activity with a bonus of writing my own stories and share them as a content creator.

- [My first fanfiction writing attempt with Gemini AI where I was in the concept of being a deity having my own realm like the Daedric Lords in Elder Scroll series and here the main theme is saving the Queen Arshtat, the commander of the Queen's Knight Ferid, and other characters from their inevitable death.](ai_chat_backup/gemini_chat_first_suikoden_5_fanfiction_backup)
- [My chat backup with Gemini AI in designing and planning my next Suikoden 5 fanfiction writing project.](ai_chat_backup/gemini_chat_suikoden_5_fanfiction_writing_project_backup)

I need a lot of time but the following contents will be the design and planning or this page will be the dashboard.

{% assign current_dir = page.path | remove: "index.md" %}
{% assign pages = site.pages | sort: 'title' %}

### 📂 Categories
<ul>
  {% assign has_folders = false %}
  
  {% for item in pages %}
    {% if item.path contains current_dir and item.path != page.path %}
      {% assign relative_path = item.path | remove_first: current_dir %}
      {% assign slash_count = relative_path | split: '/' | size %}

      {% if relative_path contains '/index.md' and slash_count == 2 %}
        {% assign has_folders = true %}
        <li>
          <strong><a href="{{ item.url }}">{{ item.title | default: relative_path | remove: "/index.md" }}</a></strong>
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}

  {% if has_folders == false %}
    <li><i>No sub-categories found.</i></li>
  {% endif %}
</ul>