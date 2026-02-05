---
layout: post
title: Fajar Purnama Legend of Dragoon Fan Fictions
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

# Preface

# Introduction

From the brain storming with you from another conversation, we have lock a fan fiction plan for Legend of Dragoon.

My answers:

***
How about I do not know about them? 

1. Attemp to stop Rose Black Monster.
2. In the middle of the fight, sensed even greater evil far away as Zieg on the way attempting to use Dragoon Spirit releasing Melbu Frahma.
3. Leave Rose Black Monster and Rushed to Zieg.
4. Saved Claire from possesed Zieg's attack and Zieg escaped leaving the Red Eyed Dragoon Spirit behind.
5. Dart's and Claire's journey will be about finding Zieg who disappears and investigate Black Monster because destroyed their hometown Neet.

Good but I prefer to revise that the canon is still more exciting:

- Melbu Frahma does not need Dragoon Spirit and proceeds with canon plan disguising himself as Diaz.
- Me and anybody else does not know about Dragoon Spirit so I just give the stone to Dart and let proceed as canon.
- Dart in canon is pursuing revenge against Black Monster but here Dart and Claire will also pursue Black Monster but with different goal to find Zieg.
***

Your Summary:
***
Great. I have locked this narrative down.
Here is the summary of the Legend of Dragoon fan fiction plan we have built:
Fan Fiction Plan: The Legend of Dragoon
Route: Narrative 1 (The Hidden Master)
State: State 3 (Normal Human, Knowledge & Grind).
Role: Mentor/Grandmaster (A contemporary of Haschel and Zieg).
The Premise:
 * The Departure: You arrive in the world ~20 years before the game. You are a Martial Artist cultivating your own path (likely mixing Rouge School style with Internal Cultivation).
 * The Neet Incident: You intervene during the Black Monster's attack.
   * You save Claire (Dart's mother).
   * You witness Zieg being possessed by Melbu Frahma.
   * Zieg vanishes, leaving the Red-Eye Dragoon Spirit behind.
   * You rescue Claire and the baby Dart, taking the Spirit as a memento.
 * The "Black Box" Approach: You do not know the full lore (Melbu's plan). You simply know Zieg is "lost/possessed" and the Black Monster is involved.
The Main Story:
 * Dart’s Upbringing: Raised by You and Claire. He is less angst-ridden, more disciplined, but driven by the mystery of his father's disappearance.
 * The Spirit: You give the stone to Dart. He resonates with it naturally (Canon timeline preserved).
 * The Motivation: The journey is not just about revenge; it is a search mission. "Where is Zieg?"
 * Lavitz's Fate: Lavitz is critically wounded (dantian shattered) but saved from death. He and Albert share the Jade Dragoon Spirit (Albert casts, Lavitz fights, or they switch).
 * The Reveal: The party discovers "Emperor Diaz" is Zieg. The final goal shifts from "Kill the God" to "Exorcise the God to save the Father."
We have covered a lot of ground today!
***

This conversation will be dedicated in writing legend of dragoon fan fiction. Use narrative development life cycle. Start with the first phase of NDLC.

From the brain storming with you from another conversation, we have lock a fan fiction plan for Legend of Dragoon.

My answers:

***
How about I do not know about them? 

1. Attemp to stop Rose Black Monster.
2. In the middle of the fight, sensed even greater evil far away as Zieg on the way attempting to use Dragoon Spirit releasing Melbu Frahma.
3. Leave Rose Black Monster and Rushed to Zieg.
4. Saved Claire from possesed Zieg's attack and Zieg escaped leaving the Red Eyed Dragoon Spirit behind.
5. Dart's and Claire's journey will be about finding Zieg who disappears and investigate Black Monster because destroyed their hometown Neet.

Good but I prefer to revise that the canon is still more exciting:

- Melbu Frahma does not need Dragoon Spirit and proceeds with canon plan disguising himself as Diaz.
- Me and anybody else does not know about Dragoon Spirit so I just give the stone to Dart and let proceed as canon.
- Dart in canon is pursuing revenge against Black Monster but here Dart and Claire will also pursue Black Monster but with different goal to find Zieg.
***

Your Summary:
***
Great. I have locked this narrative down.
Here is the summary of the Legend of Dragoon fan fiction plan we have built:
Fan Fiction Plan: The Legend of Dragoon
Route: Narrative 1 (The Hidden Master)
State: State 3 (Normal Human, Knowledge & Grind).
Role: Mentor/Grandmaster (A contemporary of Haschel and Zieg).
The Premise:
 * The Departure: You arrive in the world ~20 years before the game. You are a Martial Artist cultivating your own path (likely mixing Rouge School style with Internal Cultivation).
 * The Neet Incident: You intervene during the Black Monster's attack.
   * You save Claire (Dart's mother).
   * You witness Zieg being possessed by Melbu Frahma.
   * Zieg vanishes, leaving the Red-Eye Dragoon Spirit behind.
   * You rescue Claire and the baby Dart, taking the Spirit as a memento.
 * The "Black Box" Approach: You do not know the full lore (Melbu's plan). You simply know Zieg is "lost/possessed" and the Black Monster is involved.
The Main Story:
 * Dart’s Upbringing: Raised by You and Claire. He is less angst-ridden, more disciplined, but driven by the mystery of his father's disappearance.
 * The Spirit: You give the stone to Dart. He resonates with it naturally (Canon timeline preserved).
 * The Motivation: The journey is not just about revenge; it is a search mission. "Where is Zieg?"
 * Lavitz's Fate: Lavitz is critically wounded (dantian shattered) but saved from death. He and Albert share the Jade Dragoon Spirit (Albert casts, Lavitz fights, or they switch).
 * The Reveal: The party discovers "Emperor Diaz" is Zieg. The final goal shifts from "Kill the God" to "Exorcise the God to save the Father."
We have covered a lot of ground today!
***

This conversation will be dedicated in writing legend of dragoon fan fiction. Use narrative development life cycle. Start with the first phase of NDLC.

# Routes

# Abilities

Currently on [(/library/training](/library/training).

# Schedule