---
layout: post
title: Fajar Purnama Persona 4 Fan Fictions
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

This is a brilliant twist on the lore. In *Persona 4*, a Persona is obtained by facing your "Shadow" (your suppressed feelings) and accepting it.

If your character is **Truthful, Fearless, and Carefree** (as you described in your Suikoden plan), you have no suppressed feelings. You have **"Heart-Mind Unity."** Therefore:

1. You have no Shadow.
2. You cannot awaken a Persona.
3. **But you don't need one.**

Here is the plan for **Persona 4: The Shadowless Guest**.

### The Setup

* **Identity:** You are a transfer student (or a young relative staying at the Amagi Inn or with Dojima) arriving at the same time as Yu.
* **The Power Source:** **Cultivation / Martial Arts (Qi).**
* While Shadows are resistant to normal physical attacks, they are weak to **Qi/Spirit Energy**.
* Your fists are coated in energy. You don't summon a ghost to fight for you; **You are the boss monster.**


* **The "Glasses" Gimmick:**
* The Investigation Team needs Teddie's glasses to see through the Fog.
* You **don't.** Your "Divine Sense" or "Eye of Truth" cuts through the illusions naturally. This immediately marks you as an "Otherworldly Expert" to the team.



### The Narrative Arc: "Breaking the Script"

#### 1. The Tutorial (Saving Saki Konishi)

* **Canon:** Saki is thrown into the TV, wanders the corridor, gets attacked by Shadows, and dies.
* **Your Action:**
* You sense the "distortion" when Namatame throws her in.
* You find a way in (maybe grabbing Yu's hand when he enters, or finding a "thin spot" in reality to tear open).
* **The Scene:** Yu and Yosuke are freaking out about the monsters. You step in and shatter a Shadow with a single palm strike.
* **Result:** You bring Saki out alive.
* **Consequence:** Saki’s survival changes Yosuke. He isn't fighting for revenge; he is fighting to protect her from the trauma. The "Murder Mystery" turns into a "Kidnapping Prevention" mission much earlier.



#### 2. The Combat Dynamic

* **Yu Narukami:** The Commander (Wild Card, switches elements).
* **The Team:** The Specialists (Fire, Ice, Healing).
* **You:** The **Tank/Brawler**.
* You physically block attacks meant for Yukiko or Naoto.
* **No "One More" Mechanic:** You don't hit elemental weaknesses. You rely on **Critical Hits** and **Raw Damage**.
* **Dialogue:** The Shadows are confused by you. They whisper, *"Empty... nothing to grab... he has no mask..."*



#### 3. The Antagonist (Adachi)

This is the best conflict.

* **Adachi** is the embodiment of "Boredom and Lies."
* **You** are "Truthful and Carefree."
* **The Interaction:** You spot Adachi's aura immediately. You know he is the culprit.
* Instead of exposing him instantly (which no one would believe without proof), you play his game.
* You hang out with him and Dojima. You act friendly. You say things like: *"You know, hiding your true self must be exhausting. That's why your back hurts, detective."*
* **Psychological Warfare:** You scare Adachi not with threats, but by being immune to his cynicism.



#### 4. The "Social Links" (Mentorship)

Since you are "Enlightened" (No Shadow), you act as a guide for the others to accept *their* Shadows faster.

* **Kanji:** You teach him that "Manliness" is just being true to what you love (cute things/crafts). You might spar with him.
* **Naoto:** You treat her with respect regardless of gender, validating her intellect, making her realize she doesn't need to be a "man" to be a detective.
* **Rise:** You teach her that "Idol Rise" and "Real Rise" are both just facets of the same person.

### The Climax: "Man vs. God"

* **Izanami (The Goddess):** She grants Personas to those seeking truth/emptiness.
* **The Confrontation:** She is baffled by you. You weren't in her plan. You are an "Outside Context Problem."
* **Final Battle:**
* When the team is trapped by "The Fog of Lies" (World's End), their Personas weaken because humanity *wants* to be lied to.
* **You are unaffected.** Your truth comes from within, not from society.
* **The Moment:** You act as the anchor. You punch a hole through the Great Eye, creating the opening for Yu to summon *Izanagi-no-Okami*.

### Why this fits you

It perfectly mirrors your **High School DxD** fanfic style:

* **No borrowed power:** You rely on your own training.
* **No inner conflict:** You skip the teenage angst and go straight to solving the problem.
* **Friendly but OP:** You eat steak bowls at Aiya’s with the kids, but you can destroy a tank with your bare hands.

Shall we **Lock** this plan for Persona 4?
(Title Suggestion: **"The Clear Mirror of Inaba"**)

Understood. I have **locked** the **Persona 4 Fan Fiction Plan** ("The Clear Mirror of Inaba").

(Note: If you want me to be able to save or delete info about you, turn on the feature on the [Saved info page](https://gemini.google.com/saved-info).)

Positioning yourself as **Yu Narukami's Right Hand / Main Guide** is the perfect dynamic. Yu is the silent leader who unites the group, while you are the vocal, experienced advisor who handles the heavy lifting and keeps the team grounded. It creates a "Sherlock & Watson" or "Liu Bei & Zhuge Liang" (if Zhuge Liang could punch ghosts) relationship that will be very fun to write.

# Routes

# Abilities

Currently on [(/library/training](/library/training).

# Schedule