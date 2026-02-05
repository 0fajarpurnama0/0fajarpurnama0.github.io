---
layout: post
title: Fajar Purnama Valkyrie Profile Fan Fictions
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

## The Catalyst: Yggdrasil's Gamble

**The Setup:**
The World Tree, Yggdrasil, realizes the "Lenneth" cycle is corrupted. Odin keeps resetting the timeline to farm souls, but the tree is dying from the strain. It reaches into the chaotic void of the Seraphic Gate and pulls a **Foreign Deity (Me)** to intervene.

**My Nature:**
I am a "High Being" from another dimension. Because I am not from Midgard/Asgard, **Odin cannot see my fate thread.** I am a blind spot in his omniscience.

This is the right move. Before we write the action, we need a clear "Mission Profile." If we don't define *how* to save the Tree, the story will just be wandering around fighting random battles.

Here is the detailed planning proposal for **Route 1.1: The Steward of the Soul**.

---

## The Diagnosis: Why is Yggdrasil Dying?

In the *Valkyrie Profile* universe, the "Divine Cycle" (Ragnarok) is actually a parasite.

* **The Parasite:** Odin. He is not just a King; he has grafted himself onto the World Tree's core.
* **The Mechanism:** Odin forces the world into war to harvest souls. He feeds these souls into the machine to keep himself immortal and the Tree subservient.
* **The Critical Failure:** The souls are degrading. After countless resets, the "Data" of humanity is corrupting (Soul Rot). The Tree is suffering from "System Failure" because it cannot sustain another reboot.

**Your Mission (as Fajar):** You are the **Anti-Virus**. You must sever Odin's connection to the Tree so it can heal naturally.

## The Four Treasures (The Stabilizers)

*The World Tree is dying because these four anchors are being misused or hoarded. To save the Tree, Fajar must liberate them or neutralize their current owners.*

1. **The Dragon Orb (Midgard):**
* *Current Status:* Returned to the **Palace of the Dragon** (Sunken Shrine) upon the reset.
* *Guardian:* **Gandar** (The Mage) usually seeks it, but the true guardian is often a reflection of the Orb's power.
* *Fajar’s Goal:* Secure this first. It is the battery of the world. If Lezard or Loki gets this, it’s Game Over.


2. **Demon Sword "Levantine" (Niflheim):**
* *Current Status:* In the belly of **Bloodbane**, the Dragon King.
* *Fajar’s Goal:* This is a "Slayer" mission. You cannot talk the sword out of a Dragon. You must kill Bloodbane. This requires **Phase II (Supernatural)** mastery.


3. **Sylvan Bow (Alfheim):**
* *Current Status:* Lost in the Light Elf capital. Since it is unseen in games, we can write a lore-rich arc where Fajar must navigate the politics of the Elves (who hate humans and gods equally) to claim it.
* *Fajar’s Goal:* Diplomacy or Stealth.


4. **Gungnir (Asgard):**
* *Current Status:* In **Odin's Hand**.
* *Fajar’s Goal:* The Final Boss Loot. You cannot get this until you storm Valhalla.

## The Player Character: Fajar Purnama

**Origin:** The Seraphic Gate (A Foreign Domain Lord).
**Role:** The Combat Instructor / The Absolute Vanguard.
**Dynamic:**

* **Lenneth (Platina):** She has the **Soul** (Magic/Creation/Divinity) but a fragile body. She is the "Glass Cannon."
* **Fajar (You):** You have the **Technique** (Martial Arts/Haki/Tactics). You are the "Unbreakable Shield."
* **Lucian:** He is special to **Platina**. 

## The Prologue: "End of Simulation"

**Location:** The Roots of Yggdrasil (The Space Between Dimensions)
**Status:** Post-Simulation Debrief

The world dissolves. The bloody battlefield of Route 1.1—where you sacrificed yourself to stop Hrist—shatters like glass. The screaming winds of the Weeping Lily Meadow fade into a serene, digital silence.

You stand in a void of emerald light. You are in your **True Form** (Lord Fajar). Before you floats the avatar of the World Tree—a sphere of pulsing mana.

**Yggdrasil:** "Simulation 1.1 Complete. Outcome: Failure. The vessel 'Platina' burned out from excessive Divine Energy usage. The Awakening was too abrupt."

You cross your arms, looking at the data stream. "She panicked. She tried to be a Goddess in a human body without preparation. The body broke."

**Yggdrasil:** "Agreed. The 'Solo Goddess' route is non-viable. We must proceed with **Protocol 1.2: The Companion.**"

The Tree conjures an image of the physical world.
**Yggdrasil:** "I cannot manifest your True Form on Midgard. Odin would sense a rival Deity instantly. I must weave you a mortal vessel. It will be limited. Weak."

You smirk. "Biology is not a weakness. It is a process. I have my Manual. I will rebuild my strength from the ground up. By the time Odin notices me, I will have already unlocked **Phase II**."

**Yggdrasil:** "Then it is decided. I will place Lenneth’s full soul into Platina. She will remember everything—the pain, the betrayals, the power. She will be frightened. She will need a rock."

"I will be the rock," you say. "And I will bring the boy, Lucian, with us. I need a squad."

**Yggdrasil:** "Initializing... **Project: Silver Rebel.** Good luck, Lord Fajar."

# Routes

## Route 0 — Canon Gameplay

* [Follow the original Valkyrie Profile Lenneth storyline](/story/gameplay/valkyrieprofile/).

## Route 1.1 — The Golden Simulation (The Proof of Concept)

* **Protagonist:** Fajar inhabiting Platina (Lenneth).
* **Genre:** Power Fantasy / Speedrun.
* **Core Mechanic:** Fajar uses **Phase I & II** (Manual) + Lenneth’s Divine Mana.
* **Narrative Arc:** You systematically dismantle Hrist, recruit the Einherjar by force, and crush the Midgard Warlords. You storm Valhalla and defeat Odin.
* **The Ending:** Victory, but at the cost of the vessel. Platina’s body disintegrates from the strain. Yggdrasil confirms: *"Victory is possible, but not alone."*

## Route 1.2 — The Broken Reality (The Struggle)

* **Protagonists:** Fajar (New Human Body) & Platina (Lenneth Awake).
* **Genre:** Gritty Survival / Wuxia Progression.
* **Core Mechanic:**
* Fajar starts at **Phase I** (Physical) and must cultivate back to **Phase II**.
* Platina/Lenneth is traumatized and must learn to trust her powers.


* **The Conflict:** Because the party is slower and more cautious, **Loki** accelerates his plans. He steals the Dragon Orb and triggers the "Great Void" prematurely.
* **The Climax:** The "Midgard Resistance" (Fajar, Arngrim, Mystina, Lezard) fights a desperate battle against Loki. You stop the total erasure, but the world is broken beyond repair. The foundations are rotting.
* **The Solution:** Lezard Valeth proposes the **Grand Reset**.

## Route 1.3 — The Silver Renaissance (The Valkyrie Profile 2 Silmeria Era)

* **The Setup:**
* The world is crumbling.
* **Lezard:** Has the knowledge of the "Philosopher’s Stone" and soul transfusion.
* **Fajar:** Has the connection to Yggdrasil (The Admin Key).
* **The Ritual:** You sacrifice the dying timeline of Route 1.2 to fuel a **Hard Reset** back to the critical divergence point: **The Era of Silmeria & Alicia (Hundreds of years prior).**

* **The Arrival:**
* Your party (Fajar, Lenneth, Arngrim, Mystina, Lezard, Lucian) wakes up in the VP2 era.
* **Difference:** You retain your memories and skills.

* **The New Mission:** You are now playing 4D Chess against Odin *and* the original timeline. You must protect Alicia/Silmeria and prevent the entire tragedy of VP1 from ever beginning.

# Schedule

* Coming soon because have to identify all route 0 chapters...