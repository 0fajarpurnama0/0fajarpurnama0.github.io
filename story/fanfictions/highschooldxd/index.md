---
layout: post
title: Fajar Purnama Highschool DxD Fan Fiction Project
categories: fiction
tags: [journal, character, creation, mortal, struggle, fiction, novel]
featuredimage: 
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

# Introduction

## Demos

There are many what ifs that I want to see. While writing fan fictions for Highschool DxD is interesting, I did not start as a writer so it is not as exciting as reading other works, watching movies, and playing video games. However, with AI services available now specifically language models, writing fan fictions become as exciting as doing those 3 entertainment activities because I become excited to anticipate what the AI is going to write (just like what is the next chapter of the reading, what is the next episode of the movie, or what will happen in the game) and therefore I can treat fan fiction writing with AI as another entertainment activity with a bonus of writing my own stories and share them as a content creator. Here are the demos me and AIs have written:

- [The first initially exciting by Grok](/fiction/2019/01/12/highschooldxd-veritas-vacation) but it gets boring because I wrote this when writing [the tragedy saving Suikoden 5 vibe](/story/fanfictions/suikoden5).
- Currently fan of major shonen mangas like Dragon Ball, Naruto, Bleach, Fairy Tail, and especially One Piece. Then Wuxia manhuas, heavenly demons murim manhuas, and super soldier webtoons. Finally, World of Warcraft. So I wrote the character inspired to be like them equiped with hyper virtual reality and hyper reality or the [otaku version](/fiction/2019/01/09/highschooldxd-mortal-veritas-ariel-otaku) and then [improved with Gemini Pro](/fiction/2019/01/11/highschooldxd-mortal-veritas-ariel-otaku-improved).
- As a fan of Kingdom Hearts Back Cover, Kingdom Hearts Union, and Kingdom Hearts Dark Road, I wrote the serious [seeker of darkness version](/fiction/2019/01/10/highschooldxd-mortal-veritas-ren-dark-seeker) as it also aligns with my feelings in my teens and twenties, in other words this is my first highschooldxd fanfiction where I pour my heart.
- [Shonen Schedule System Implemented](/fiction/2019/01/13/highschooldxd-mortal-veritas-ariel-shonen-schedule)
- [Dark Seeker Schedule System Implemented](/fiction/2019/01/14/highschooldxd-mortal-veritas-ren-dark-seeker-schedule)

## My Own Original Introduction

This is my Highschool DxD Fan Fiction Project dashboard. Here, I will share my fan fiction works based on the Highschool DxD universe. Legally, I have to ask for permission from intellectual property owners to mix Highschool DxD into my fictions. Therefore, these works are always open and free because I have not asked for permission yet.

I am confident in sharing my work because this project is my idea with the main purpose only for myself and the first purpose to soothe the regrets of my heart when I was a teenager and in my twenties. Back then in my real life I envied the success and fortune of other people. You can say that I was an unpopular guy whom back then I cannot help but think about pretty girls all the time. Primary school and highschool was my chance but I was to shy. To cover my shyness, I trained frequently in martial arts hoping to become strong because being strong is a replacement satisfaction to having surrounded by pretty girls. I failed at being strong but then I realize I do not need to be strong yet but just be confident and enjoy. However, by the time I graduated highschool and decided to change, I was in an environment where there were very few girls. I regretted not taking the chance when I was young. I read many mangas, watched many animes, and played many video games and these resonated with my regrets. Therefore I would like to create my own stories to see myself if wrote myself there or my characters succeed to soothe my regrets.

Why Highschool DxD? Because it is like superhero stories where characters are chosen by destiny with additional harem. I would like to insert normal characters who are not chosen by destiny which are not chosen by power and unpopular with girls but still can succeed through their own struggles. I would like to see how normal characters can survive and thrive in a world where supernatural beings exist. I would like to see how normal characters can overcome their own weaknesses and limitations and become stronger and better. I would like to see how normal characters can find their own purpose and meaning in life and not just follow the destiny that is imposed on them. Therefore is it only viable to Highschool DxD? No, it is just currently Highschool DxD is the best sandbox to write in. There are others such as Rosario + Vampire, Sora no Otoshimono, The Testament of Sister New Devil, and many more. I will consider them in the future.

I used AI services and currently collaborating with Gemini, ChatGPT, Grok, Deepseek, Meta, and Copilot to write these fanfictions to keep brainstorming until I am ready to write my own original. I positioned myself and the AI collaborators as the architectures and currently have 4 characters that we created with all of them friendly, fearless, carefree, seeks enlightenment, and mastery of martial arts and enpowerments:

1. **Kairos Draco Veritas**: our direct avatar for us deities to descend into realities.
2. **Kala Sofia Veritas**: bright, cheerful, and chaotic. Her role is to fix tragedies for example saving Ferid, Arshtat, and others in Suikoden 5 who are destined to perish. Consider her a part of me that wants everyone to be happy.
3. **Ariel Caelum Veritas**: pure hearted and simple minded nature similar to muscle brain like Goku from Dragon Ball and Luffy from One Piece famously called pure shonen (boy) protagonists. Consider him to be a part of me who enjoys training to become strong and adventures.
4. **Ren Nocturnus Veritas**: is a part of me who is perverted but unpopular so change his goal to be strong like the legendary figures in stories, movies, and videogames but ultimately failed. With his envy, he became inspired by the dark seeker like Xehanort from Kingdom Hearts and all other characters who seek power through darkness or anything else most people would not dare to touch like Illidan Stormrage, Guldan, Yukio Oikawa, Volsung, Goku Black, etc. However, he is not evil and in the end became the dark sage enlightened, lazy in following plots, still deligent in training, easy going, and mischievous.

## Introduction Polished by Gemini AI 3 Pro

This is a fantastic foundational text. It is honest, vulnerable, and clearly defines the *soul* of your project. The shift from "wanting to be strong to get girls" to "realizing confidence was the key" is a powerful character arc that justifies exactly why your OCs (Original Characters) act the way they do.

Here is a polished, professional, and grammatically corrected version of your introduction. I have smoothed out the flow while keeping your specific references (Suikoden, Kingdom Hearts, etc.) and your personal voice intact.

### 📂 Project Veritas: High School DxD Fan Fiction Dashboard

#### 📜 Disclaimer & Intent

Welcome to the central dashboard for my *High School DxD* fan fiction projects.

This is a non-profit creative endeavor. I do not own the intellectual property of *High School DxD* or the other franchises mentioned; those rights belong to their respective creators. As such, these works are freely available. I have not sought official licensing, operating instead under the spirit of fan works to explore and celebrate these worlds.

#### 💖 The Heart of the Project: Soothing Regrets

I am sharing this work with confidence because it is deeply personal. Its primary purpose is to soothe the regrets of my own youth.

Back in my teenage years and twenties, I often envied the success and fortune of others. I was an unpopular guy who, like many young men, couldn't help but think about romance, yet I was too shy to act. My school years were a missed opportunity. To mask that shyness, I threw myself into martial arts, hoping that becoming "strong" would be a substitute for popularity.

I failed to become the strongest, but I learned a valuable lesson too late: I didn't need to be a warrior; I just needed to be confident and enjoy the moment. By the time I graduated and decided to change, I found myself in an environment with few opportunities for romance. I regretted not taking the chance when I was young.

I found resonance in manga, anime, and video games. Now, I create these stories to see if a version of myself—or characters carrying my will—can succeed where I hesitated.

#### ❓ Why High School DxD?

*High School DxD* is the quintessential "Chosen One" story, filled with destiny, superpowers, and harems.

My goal is to subvert this. I want to insert **"Normal Characters"**—people who are not chosen by prophecy, possess no inherent "cheat" powers, and are unpopular with girls. I want to explore how ordinary individuals can survive and thrive in a supernatural world through their own struggles. I want to see them overcome weaknesses, find their own meaning, and refuse to blindly follow an imposed destiny.

While *High School DxD* is the current sandbox, this philosophy applies to other worlds I may explore in the future, such as *Rosario + Vampire*, *Sora no Otoshimono*, or *The Testament of Sister New Devil*.

#### 🤖 The Architects & The Avatars

I collaborate with advanced AI services (Gemini, ChatGPT, Grok, DeepSeek, Meta, and Copilot) to brainstorm and architect these narratives. Together, we have designed four distinct characters who serve as our avatars. They are friendly, fearless, carefree, and seek enlightenment through mastery:

1. **Kairos Draco Veritas (The Avatar):**
The direct vessel for us (the Architects/Deities) to descend into reality. He represents the oversight and the bridge between the writer and the world.
2. **Kala Sofia Veritas (The Light):**
Bright, cheerful, and chaotic. She represents the part of me that wishes for everyone’s happiness. Her role is to "Fix Tragedies"—saving characters destined to perish (like Ferid and Arshtat from *Suikoden V*). She is the chaotic good who refuses to let sad endings happen.
3. **Ariel Caelum Veritas (The Body):**
Pure-hearted and simple-minded. He is the "Muscle Brain" archetype, similar to Goku (*Dragon Ball*) or Luffy (*One Piece*). He represents the part of me that purely enjoys the adventure and the grind of training to become strong. He is the classic Shonen spirit.
4. **Ren Nocturnus Veritas (The Shadow):**
The part of me that was envious and unpopular, but evolved. He initially sought strength like the "Dark Seekers" of fiction—figures like Xehanort (*Kingdom Hearts*), Illidan Stormrage, Gul'dan, Volsung, Yukio Oikawa, or Goku Black. He admires those who touch the power others fear. However, he is not evil. He has matured into a "Dark Sage"—enlightened, somewhat lazy regarding the plot, mischievous, yet diligent in his own discipline.

# Routes

## Originally written by Fajar Purnama

I order the routes from darkest to lightest based on the main character's personality and story tone:

### Route 0: The Original but Darkest Route - Fajar Purnama

This is the original route where I am the main character. I would write how I would perform in the Highschool DxD universe based on how I was in real life during my teens and twenties. This route is the darkest because I would write how I would fail to achieve my goals and regrets in real life. Applying to Highschool DxD universe, I would have died or escaped or even worse have my memories forcefully erased where now I am living the normal live and lost my friend because they are in different worlds now.

### Route 1: The Dark Seeker - Ren Nocturnus Veritas

Like Route 0 but with the difference that at certain point of the story, the power of darkness came to Ren. He embraced it, be true to his heart, and used it to cultivate like in Wuxia and Murim novels. Almost at the end, he was able to catch up to the main characters and became stronger than all of them. In the end he eventually left for the corridor of darkness as it was his path to mastery.

### Route 2: The Pure Shonen - Ariel Caelum Veritas

This route is the legendary pure shonen route where Ariel is given a hyper virtual reality and augmented reality training system that also bends time called the Personal Training Dossier (PTD) where he can learn all arts from anyone in the world and universe. With this, he trained hard, made friends, and eventually became strong enough to be recognized by the main characters. In the end, he became a legendary figure through effort and mastery. He eventually leaves for the corridor of darkness as well to seek further mastery.

### Route 3: The Chaotic Fixer - Kala Sofia Veritas

This route is the chaotic fixer route where Kala is given the power to travel through time and dimensions to fix tragedies. She traveled to many worlds, saved many people, and made many friends. In the end, she was recognized by the main characters as a powerful and benevolent deity. We through Kairos pulled her midway as she was too powerful that dulls the narrative.

### Route 4: The Amnesic Deity - Kairos Draco Veritas

This route is the amnesic deity route where Kairos is sent to other time and dimensions for simulation without his memories. He slowly regains his memories and powers in that world. He will regain his full memory during the climax of the impossible circumstances of the main characters and steps in as a god to effortlessly defeat all the foes. Finally, he returns to us, the architects, with all the data we need.

### Route 5: The Veritas Siblings - Kala, Ariel, and Ren

The New Game + after each siblings completed their own routes, they reunited and formed a team called the Veritas Siblings. Together, they make Highschool DxD fun and comedic for everyone. Also each have their missions where Kala still fixes tragedies and mentally supports both brothers, Ren seeks and offer other unfortunate characters to join them, and Ariel spreads the training module so that everyone can have equal opportunity to become strong.

## Polished by Gemini AI 3 Pro

This is a strong structure for a multi-timeline narrative. It clearly establishes the "Bad Ending" (Reality), the "Solo Grinds" (Ren and Ariel), the "Overpowered Fixer" (Kala), and the "True Golden Ending" (NG+).

Here is the refined and polished version of your **Route Definitions**, improved for flow, dramatic impact, and thematic consistency.

I have ordered the routes from the heaviest (darkest) to the lightest (brightest), reflecting the spectrum of the main character's psyche and the tone of the narrative.

### Route 0: The Reality of Regret (Bad Ending)

**Protagonist:** Fajar Purnama (The Author's Self-Insert)
**Tone:** Psychological, Tragic, Realistic.

This is the "Original Route," grounded in the harsh reality of my teenage years and twenties. Here, I write myself into the *High School DxD* universe without cheats, special powers, or confidence. It explores the painful "What If" of a normal human trying to navigate a world of monsters and gods.

* **The Outcome:** The narrative focuses on failure and the crushing weight of powerlessness. I would either die as collateral damage, run away in fear, or—perhaps the most tragic ending—have my memories forcefully erased by the Devils to preserve the masquerade.
* **The Legacy:** I end up living a mundane life, oblivious to the truth, while the friends I almost made ascend to worlds I can no longer perceive. It is a story of "The Mob Character who got too close to the Sun."

### Route 1: The Dark Seeker (Solo Cultivation)

**Protagonist:** Ren Nocturnus Veritas
**Tone:** Wuxia/Murim, Introspective, Dark Fantasy.

A divergence from Route 0. At his lowest point, Ren encounters the "Power of Darkness." Instead of fearing it, he embraces the solitude and envy in his heart, using it as fuel for cultivation—similar to the anti-heroes of Wuxia novels or the Seekers in *Kingdom Hearts*.

* **The Journey:** He walks a lonely path, rejecting the Harem lifestyle to focus purely on the "Dao of Darkness." Through sheer grit and the study of forbidden arts, he catches up to the "Destined Heroes" (Issei, Vali) and eventually surpasses them.
* **The Outcome:** Having outgrown the setting, he realizes there is nothing left for him in this world. He opens the **Corridor of Darkness** and departs, seeking higher planes of mastery in the Void.

### Route 2: The Pure Shonen (Limit Breaker)

**Protagonist:** Ariel Caelum Veritas
**Tone:** Shonen Action, Adventure, High-Octane.

The legendary "Hot-Blooded" route. Ariel is gifted the **Personal Training Dossier (PTD)**, a hyper-advanced Virtual and Augmented Reality system capable of bending time. This allows him to download and train in martial arts from across the multiverse.

* **The Journey:** This is a story of sweat, blood, and friendship. Ariel is the "Muscle Brain" who befriends rivals through combat. He doesn't rely on darkness, but on breaking physical limits. He earns the respect of the main cast not through magic, but through overwhelming physical prowess.
* **The Outcome:** He becomes a legend—the "Strongest Human." However, like Ren, his thirst for a challenge can no longer be sated in this world. He, too, steps into the **Corridor of Darkness**, not to hide, but to find stronger opponents in other dimensions.

### Route 3: The Chaotic Fixer (The Savior)

**Protagonist:** Kala Sofia Veritas
**Tone:** Isekai, Fluff, Emotional Healing.

The "Mary Sue" route turned into a narrative mechanic. Kala is granted the power to traverse time and dimensions specifically to "Fix Tragedies." She is the answer to every sad ending.

* **The Journey:** She travels through the timeline, saving those destined to die (like the tragic figures of *Suikoden* or *DxD*). She becomes a beloved, benevolent deity to the cast.
* **The Outcome:** She becomes too powerful. Her existence removes all tension from the story because she fixes everything instantly. To preserve the narrative balance, **Kairos** (The Avatar) intervenes, pulling her out of the timeline before the story breaks completely.

### Route 4: The Veritas Siblings (New Game +)

**Protagonists:** Ren, Ariel, and Kala (The Trinity)
**Tone:** Slice of Life, Comedy, Ensemble Cast, "Fix-It" Fic.

The definitive "True Route." After completing their individual journeys (Routes 1, 2, and 3), the siblings are reunited in a new timeline with their memories and powers intact (NG+).

* **The Dynamic:** They function as a chaotic, loving family unit. They turn the dangerous world of *High School DxD* into a playground.
* **Kala:** Continues her mission to prevent tragedies and ensures everyone (including the villains) gets a happy ending or a second chance.
* **Ren:** The "Scout." He seeks out the downtrodden, the envious, and the overlooked (like Saji or Gasper), offering them a place in the Veritas Faction.
* **Ariel:** The "Instructor." He democratizes strength by sharing the **PTD Module**, ensuring that anyone willing to work hard has the opportunity to stand equal to the Gods.

* **The Goal:** To create a world where "Normal Characters" can laugh, grow strong, and stand tall alongside the "Destined Ones."

# Training Module

## Originally written by Fajar Purnama

[Separate Link](/library/training)

## Polished by Gemini AI 3 Pro / 📂 The Veritas Personal Training Dossier (PTD)

This is a comprehensive curriculum. To make it feel more like a "System" or a "Dossier" (The PTD), I have reorganized your list into **Phases** (Tiers).

I have refined the descriptions to sound more technical and instructional, bridging the gap between "Real Life" science and "Anime" logic. This structure implies that mastering the Reality modules is the *prerequisite* for unlocking the Fiction modules.

**Curriculum Overview:**
The PTD is divided into two major phases. **Phase I (The Vessel)** focuses on absolute mastery of the human body and mind within the laws of physics. **Phase II (The Ascension)** breaks those laws, introducing supernatural cultivation.

### 🟢 Phase I: Reality (The Perfect Human Vessel)

*Goal: To build a body and mind capable of surviving a supernatural encounter through skill, instinct, and biology alone.*

#### 🔹 Tier 1: Foundation & Maintenance

1. **Bio-Maintenance (Stretching & Mobility):**
Full body activation from head to toe. Essential for preventing injury and maintaining blood flow. Performed immediately upon waking and before sleep. A stiff body is a fragile body.
2. **Primal Movement (Ground Mechanics):**
Retraining the evolutionary basics: crawling, rolling, crouching, and ground defense. Before we walked, we crawled. In a fight, you will likely end up on the ground; you must be comfortable there.
3. **Functional Dynamics (Daily Movement):**
Optimizing daily actions. Walking, sprinting, lifting, and carrying with perfect posture and efficiency. Turning chores into training to build endless stamina.
4. **Mental Reset (Meditation & Empty Mind):**
The art of "System Cooldown." Clearing the heart and mind to process trauma, reduce stress, and prepare the neural pathways for new information.

#### 🔹 Tier 2: Instinct & Awareness

5. **Sensory Overclocking (Ninja Training):**
Pushing the five senses (Sight, Sound, Smell, Touch, Taste) to their biological limits. Learning to hear heartbeats, smell fear, and see in low light.
6. **Environment Object Awareness:**
The world is an armory. A pen, a chair, a handful of sand, or a door frame—everything is a weapon or a shield. Breaking the tunnel vision of "honorable duels" to survive.
7. **Stress Inoculation (Fear Training):**
Fear is a biological feedback loop. We desensitize the amygdala by exposing ourselves to horror: walking alone at night, watching terror films, and visiting unnerving locations. If you don't fear ghosts, you won't freeze when you see a Devil.
8. **Neuro-Somatic Cultivation (Bio-Hacking):**
Total somatic awareness. The ability to manually lower heart rate, relax specific muscle groups to heal, and focus intent (Placebo Effect). Includes Yoga, Tai Chi, and Breathwork.

#### 🔹 Tier 3: Combat Basics

9. **Primal Instincts (Quarrel Movements):**
Unlearning "Sport Fighting." Real violence is messy. Pushing, shoving, hair pulling, biting, slapping, and frantic scrambling. We must remember our animal nature to counter it.
10. **Combat Summary (Basic Martial Arts):**
The alphabet of violence. Jabs, crosses, hooks, kicks, knees, and elbows. Basic grappling (clinching, takedowns). Efficient, high-percentage moves used by MMA fighters.
11. **Improvised Weaponry (Common Tools):**
The art of the civilian soldier. Using umbrellas, bags, brooms, or belts. Includes legal self-defense tools (pepper spray, batons, tactical flashlights).
12. **The Art of Invisibility (Stealth):**
Silent movement, light discipline, and blending into crowds. The only fight you are guaranteed to win is the one where the enemy never sees you.

#### 🔹 Tier 4: Specialist Training

13. **Anatomical Optimization (Muscle Training):**
Targeted hypertrophy. Beyond "Show Muscles" (Biceps/Abs), we train the "Go Muscles": Neck (shock absorption), Grip (control), Posterior Chain (power), and Core (stability).
14. **Traverse & Adapt (Open World / Parkour):**
3D movement efficiency. Scaling walls, leaping gaps, swimming in currents, and surviving in harsh biomes (forests, deserts).
15. **Close Quarter Combats (CQC):**
Fighting in phone booths, elevators, and corridors. Joint locks, disarms, chokes, and subduing opponents without room to swing.
16. **Dynamic Flexibility (Acrobatics):**
Total body control. Flips, handsprings, and cartwheels. Not for showing off, but for unpredictable evasion and recovery from falls.
17. **The Library of Motion (All Martial Arts):**
The "Download." Systematically learning the mechanics of every major style (Karate, Judo, Muay Thai, Silat, Kali, etc.) to understand every possible angle of attack.
18. **Weapon Proficiency (Lethal Grade):**
* **Cold Steel:** Swords, knives, spears, axes. (Historical mastery).
* **Ballistics:** Firearms, tactical reloading, marksmanship. (Modern mastery).


### 🟣 Phase II: Fiction (The Supernatural Ascension)

*Goal: To break the limits of biology and manipulate the laws of physics/magic.*

#### 🔹 Tier 5: The Bridge to Power

19. **Visualization Protocol (Image Training):**
The bridge between mind and magic. If you can vividly hallucinate the sensation of fire, you are one step away from conjuring it. Used when physical training is impossible.
20. **Simulated Reality (Lucid Dreaming):**
The ultimate training ground. Creating a mental server where you are God. Training for 10 years inside a dream while only sleeping for 8 hours. The precursor to Astral Projection.

#### 🔹 Tier 6: Energy Cultivation

21. **Life Force Manipulation (Chi/Qi/Ki/Touki):**
* **Internal:** Reinforcing the skin (Iron Body/Armament Haki), increasing speed, and healing.
* **External:** Projecting energy waves, blasts, and flight.


22. **Sensory Domain (Super Sensing):**
* **Radar:** Mapping the terrain without eyes.
* **Intent:** Sensing killing intent (Observation Haki) to predict attacks before they happen.


23. **Reality Domination (Will / Conqueror's Haki):**
Imposing your existence upon reality. Using sheer Willpower to intimidate weak minds, negate magical effects, or physically pressure the environment.

#### 🔹 Tier 7: Metaphysics

24. **Psychic Phenomena:**
Telekinesis (moving matter with mind) and Telepathy (communication).
25. **Elemental Composition:**
Manipulating the building blocks of matter: Fire, Water, Wind, Lightning, Earth, Ice, Light, and Darkness.
26. **Arcane Arts (Magic):**
The manipulation of Mana via equations (Circles), chants, or imagination to rewrite the laws of the world (teleportation, summoning, alteration).

# Schedule

## Originally written by Fajar Purnama

This is the hardest when writing original works as it includes world design, character design, plot design, and many more. However since this is a fanction, we are using Highschool DxD universe as the sandbox. We only need to research the existing universe and design our own characters and plots. While it is a long work to detail the light novel, manga, and anime [Highschool DxD Fandom site](https://highschooldxd.fandom.com/) already have the summaries where we use the anime for now: 

### Season 1

#### [Episode 1: I Got a Girlfriend!](https://highschooldxd.fandom.com/wiki/Episode_1_(Season_1))

Issei Hyoudou is one of the biggest perverts, along with his two friends, Matsuda and Motohama, and attends a previously all-girl school. Having his usual school day, Issei goes to peek at the girls of the Kendo Club along with Matsuda and Motohama, who flee after realizing that the girls noticed them, leaving Issei at the mercy of the girls. After getting beaten up by the Kendo Club girls for peeking, Issei meets a crimson-haired girl, Rias Gremory, in the old school building, falling in love at first sight. Later on his way home, Issei receives a confession from a girl named Yuuma Amano. During their first date, Yuuma suddenly kills Issei at the end of the date, revealing her black wings to him, much to the latter's surprise, before creating a spear of light and piercing his body. Moments before his death, Issei thinks of Rias and ends up unknowingly summoning her. Issei wakes up the next day in his room, and he is surprised to find that none of his friends remember Yuuma. He also realizes that he has gained the ability to see in the dark and developed increased strength at night. While on his way home from his friends' house, Issei went to the park where he last met Yuuma, meeting another Fallen Angel, Dohnaseek, who also attempts to kill Issei. Dohnaseek successfully injures Issei, but before he can deliver the finishing blow, three girls rescue Issei, one of them being Rias. The next morning, Issei discovers both Rias and himself naked in his bed. Rias wakes up smiling, and she explains to him that she is a Devil and she is his master, as she reincarnated him.

Characters in order of appearance:
Rias Gremory (1)
Issei Hyoudou (2)
Sona Sitri (5)
Tsubaki Shinra (6)
Momo Hanakai (7)
Reya Kusaka (8)
Tomoe Meguri (9)
Yuuto Kiba (10)
Akeno Himejima (13)
Koneko Toujou (15)
Raynare (14)
Dohnaseek (16)
Matsuda (3)
Motohama (4)
Murayama (11)
Katase (12)

#### [Episode 2: I'm Done Being Human!](https://highschooldxd.fandom.com/wiki/Episode_2_(Season_1))

Issei wakes up surprised to find a naked Rias sleeping beside him. While Rias says that the situation is quite alright, Issei, who still could not fathom his good luck, is surprised, embarrassed, and confused, all at the same time, at this unexpected good turn of events. However, the situation worsens when his mother walks into his room and sees him together with a naked Rias, causing chaos to ensue early in the morning. After sorting out the situation with Issei's parents with a bit of demonic energy, Rias explains that she is a Devil and has reincarnated him as a servant-Devil underneath her. After Issei's usual class ends, Yuuto Kiba, another fellow second-year student, visits him. He has come to escort Issei to the Occult Research Club. In the clubroom, Issei meets two other members of the Club, Akeno Himejima and Koneko Toujou, the two girls that helped Rias earlier to rescue Issei. Reintroducing herself, Rias explains to Issei about the Great War between the Three Factions comprised of Angels, Fallen Angels, and Devils. She also reveals that Yuuma, whom he once dated, was a Fallen Angel that was sent to kill him, as she reintroduces Issei to both her clan and her peerage members.

After successfully finishing the distribution of pamphlets that were given to him by Rias, Issei is given a chance to visit Koneko's client, as the client's request was overlapping with her schedule. However, while on his way back home after doing business with the client, another Fallen Angel, Kalawarner, confronts Issei, but he is able to fend her off after he gains the ability to harness the power of his Sacred Gear. The episode ends with Issei bumping into a nun named Asia Argento, knocking her over, on his way to school the next day.

Characters in order of appearance:
Rias Gremory (2)
Issei Hyoudou (3)
Sona Sitri (8)
Yuuto Kiba (9)
Koneko Toujou (10)
Akeno Himejima (11)
Kalawarner (14)
Miki Hyoudou (1)
Murayama (4)
Katase (5)
Matsuda (6)
Motohama (7)
Gorou Hyoudou (12)
Morisawa (13)
Asia Argento (15)

#### [Episode 3: I Made a Friend!](https://highschooldxd.fandom.com/wiki/Episode_3_(Season_1))

Issei helps the nun, Asia Argento, to her feet. After she admits that she is lost, Issei agrees to escort her back to Church. On the way, after encountering a boy crying due to a bruised knee, Asia displays a healing ability, which, upon witnessing, causes Issei to have a queasy feeling. This squeamish feeling that Issei feels increases as they finally get to the proximity of the Church to the extent that it causes Issei to refrain from entering the Church or leading Asia any further. Later on, after questioning Rias about the strange feeling he experienced while escorting the girl to the Church, Rias tells Issei that the Church is an enemy's base and being friends with Asia is the same as fraternizing with the enemy. She also advises him to have nothing to do with her, for his own sake.

Later on, Rias and the group take Issei with them to kill a stray Devil (a Devil who has killed its own master); Rias uses the battle to explain each person's chess rank and ability to Issei. Later on, Issei, who arrives at a house, takes up another mission to get a contract. Upon entering (after no one answered the door), a bloody corpse, which is the work of an insane Exorcist named Freed Sellzen that serves the Fallen Angels, reveals his presence and confronts Issei.

Freed proudly admits to killing the man, explaining that his victim was in league with the Devils. He identifies Issei as another Devil and begins to attack him. Initially, Freed has the upper hand when he shoots Issei in the leg with a gun and slashes him with a lightsaber. Eventually, Asia comes into the room, instantly startled by and screaming at the sight of the bloody body. Freed comments on why Asia left her job of maintaining the barrier, which was used to mask his presence, wondering if this is the first time Asia has seen a dead body, and then proceeds to reveal that Issei is a Devil. Freed tries to attack Issei again, but Asia intervenes by rushing in front of the paralyzed Issei to protect him. Freed easily shoves Asia from her place and restrains her against a wall, trying to rape her in front of Issei. This consequently causes Issei to immediately ignore his pain and punch Freed in the face. Freed then turns his full attention to Issei, but just as he is about to be finished off, the other members of the Occult Research Club arrive, assisting Issei in his dilemma. Issei and his companions escape quickly after, leaving Freed alive as his master begins approaching in a blinding light. Before they escape, Issei desperately wants to bring the injured Asia with them but finds out he cannot since the transportation circle only works for people that are a part of the Gremory Clan. The episode ends with Issei struggling to try and rescue Asia but being too weak to escape from Koneko's grip.

Characters in order of appearance:
Issei Hyoudou (2)
Rias Gremory (3)
Akeno Himejima (4)
Koneko Toujou (5)
Yuuto Kiba (6)
Viser (7)
Asia Argento (1)
Freed Sellzen (8)

#### [Episode 4: I'm Saving my Friend!](https://highschooldxd.fandom.com/wiki/Episode_4_(Season_1))

Recovering from the previous battle, Issei is focused on getting stronger to rescue Asia despite Rias' repeated attempts to berate him for attempting to get involved in the business of the opposing side. Issei later heads to the park to practice chin-ups, trying to get stronger, but encounters Asia, ending up going on a date with her. Towards the end of the date, Raynare, the Fallen Angel who had earlier disguised herself as "Yuuma" in the first episode, appears and starts a fight with Issei, easily defeating him due to his inexperience. Seeing Issei get injured while trying to protect her, Asia agrees to go with Raynare in return for Issei to be spared, a term that Raynare agrees to. After Asia is taken away by Raynare, Issei returns to the clubroom to try and get help indirectly. This time, however, to his surprise, Rias helps him, explaining to him that as a Pawn, he can rank up to any other piece, except for King. Later on, Yuuto and Koneko go with him to the Church, where Asia is held hostage to save her, while Rias and Akeno deal with the trio of Fallen Angels, Dohnaseek, Kalawarner, and Mittelt, who were tasked with guarding the Church. Freed appears to stop Issei and his group, but Koneko and Issei defeat him, especially after the latter ranks up to be a Rook. After Freed escapes, Issei and his group head to the basement, witnessing the final moments of Raynare stealing Asia's Sacred Gear, killing her in the process.

Characters in order of appearance:
Rias Gremory (1)
Issei Hyoudou (2)
Akeno Himejima (3)
Koneko Toujou (4)
Yuuto Kiba (5)
Raynare (8)
Mittelt (9)
Dohnaseek (10)
Kalawarner (11)
Asia Argento (6)
Freed Sellzen (7)

#### [Episode 5: I Will Defeat My Ex-Girlfriend!](https://highschooldxd.fandom.com/wiki/Episode_5_(Season_1))

Raynare extracts Asia's Sacred Gear and puts it into herself. As this occurs, Issei, Kiba, and Koneko fight through the group of rogue exorcists, with Issei managing to reach Asia's place and managing to catch her as Raynare releases her from the cross. He then successfully carries her upstairs to the main part of the Church while Kiba and Koneko hold off the priests.

Having her Sacred Gear extracted, Asia's life starts to fade away despite Issei begging her to live, promising to be with her all the time as her friend. At her final moments, Asia thanks Issei for being her first friend, which greatly saddens him. Raynare then shows up, revealing that she can now heal the injury Kiba inflicted on her on her way up, demonstrating that she's now capable of harnessing the power of Asia's Sacred Gear, Twilight Healing. Disgusted partially by Raynare's actions and how she made fun of Asia's life, Issei challenges her to a fight in a bout of rage. Meanwhile, outside the Church, Rias and Akeno continue their fight against the Fallen Angel trio until Rias disposes of them after being greatly angered when her servant is insulted.

Issei about to beat Raynare
Issei about to beat Raynare

Inside the church, Issei attempts to attack Raynare, but to no avail, as the stronger Fallen Angel not only maintains an upper hand in their fight but also impales him in both of his thighs with light spears. Issei, remembering Rias' advice, begs for the power to beat Raynare, causing his Sacred Gear to activate for the first time, increasing his powers beyond Raynare's, thus allowing Issei to punch Raynare in the face and defeat the Fallen Angel in one blow. After the battle, Rias and the others appear to congratulate Issei on his first victory. As Koneko drags the defeated Fallen Angel back into the building, Rias notices the change in Issei's Sacred Gear, realizing its true identity. Rias then explains to Raynare that Issei's Sacred Gear is not the "Twice Critical," as she initially surmised, but rather the "Boosted Gear," one of the 13 Longinus that has the spirit of the Red Dragon Emperor sealed within it. Realizing the danger she's in, Raynare promptly and shamelessly changes back into Yuuma, desperately begging for Issei to spare her life. However, Issei, seeing through her ploy, bottles up his true feelings and gets Rias to kill her off instead.

Rias telling Issei to become the ultimate Pawn
Rias telling Issei to become the ultimate Pawn

Confirming her death, Issei is gloomy upon the death of his supposed first girlfriend. However, when Rias decides to make Asia into her servant, returning Asia's Sacred Gear to her after bringing back the former sister to life as a Devil using the Bishop piece from her Evil Pieces set, Issei happily welcomes Asia back. The next day, as Issei arrives at the Occult Research Club, he questions Rias on the possibility of there being 7 more Pawns besides him, to which Rias reveals that she has used all her Pawn Pieces on him while she revived him. Rias then tells Issei to become the Ultimate Pawn, kissing him on the forehead before stopping as Asia appears in the Occult Research Club, having transferred to the Kuoh Academy, as they celebrate to welcome the newest member of the club. Meanwhile, a mysterious person is shown to be looking at the scene through a red bird outside the window of the Occult Research Club.

Characters in order of appearance:
Issei Hyoudou (1)
Koneko Toujou (2)
Yuuto Kiba (3)
Asia Argento (4)
Rias Gremory (6)
Akeno Himejima (7)
Riser Phenex (11)
Raynare (5)
Mittelt (8)
Kalawarner (9)
Dohnaseek (10)
Ddraig

#### [Episode 6: I Work as a Devil!](https://highschooldxd.fandom.com/wiki/Episode_6_(Season_1))

New living arrangements have been made for Asia in the clubroom, who has been living with the Occult Research Club for some time now. Meanwhile, Rias decides to have Issei undergo basic training to improve his stamina and physical fitness. After finishing his training, Issei is surprised to learn that Asia has decided to move to the Hyoudou Residence in order to just stay together with him. The next day, Asia transfers to Issei's class too and manages to get along with her new classmates. After finishing the distribution of the pamphlets, Issei decides to try and get his own client, meeting Mil-tan, a bulky, muscular man whose greatest wish is to be a Magic Girl. 

During his PE class, Issei goes to the sickroom, wherein the fact that he failed to get a contract again frustrates him. He then wakes up surprised upon finding a naked Rias sleeping beside him. After waking up, Rias dresses up and decides to accompany Issei to his next client in order to make sure that he'll get a contract done this time. The request that Issei receives involves meeting a foreigner girl named Susan that always wears Ō-yoroi due to her typical love for the Japanese culture, especially the Samurais and their Bushido Code. Susan then reveals that her request for the Devils is to help her take her notes back from the university and assist in her love confession. Using Issei's advice of writing a love letter, Susan manages to properly convey her feelings, resulting in her love interest, Horii, a man wearing medieval Knight's armor, and her becoming a couple successfully. Back at the Occult Research Club, as a victory celebration for his first contract, both Issei and Rias share an intimate moment, causing Akeno to note the subtle change in her master's behavior.

Characters in order of appearance:
Issei Hyoudou (1)
Asia Argento (2)
Koneko Toujou (3)
Rias Gremory (4)
Yuuto Kiba (5)
Akeno Himejima (11)
Gorou Hyoudou (6)
Miki Hyoudou (7)
Mil-tan (8)
Motohama (9)
Matsuda (10)
Susan (12)
Horii (13)

#### [Episode 7: I Get a Familiar!](https://highschooldxd.fandom.com/wiki/Episode_7_(Season_1))

Rias decides that both Issei and Asia have done enough pamphlet distribution and that it is about time for the two to get their own familiars. Rias and the others then reveal their own familiars but are interrupted when the Student Council arrives. Rias then reveals to Issei that the current President of the Student Council, Sona Sitri, is also a High-Class Devil and hails from the Sitri Clan. Both Rias and Sona then introduce their new servants to each other as Issei and Saji start a new rivalry amongst themselves. When Saji reveals that he was given the right to have a familiar by Sona, it overlaps with Rias' plan to have Issei and Asia be one; the fact that only one of them can get a familiar at one time troubles both Rias and Sona. This prompts them, along with their fellow Queens, to decide to have a tennis match in order to decide who gets to receive their familiar first. However, the results remain inconclusive as their match ends in a draw.

Rias and Akeno, then, discuss what match they should have next before finally deciding to have a dodgeball match. The dodgeball match ends with the Occult Research Club winning, albeit with extensive damage to school property due to their extravagant usage of demonic powers in the game. At the Familiar Forest, Issei and the others meet the Familiar Master, Zatouji, who guides them throughout the Familiar Forest, discovering an Undine along the way. Issei's expectations of having an Undine as a familiar, due to his assumption of them being beautiful water spirits, are crushed mercilessly when he sees that the real Undines are burly old muscular women wearing pink togas, causing the entourage to continue their quest for familiars.

Later on, after encountering a baby Sprite Dragon, Issei originally wanted to capture it as his familiar but later changed his opinion when a slime appeared and dissolved the clothes of all the girls present. With the slime's capabilities and its dauntless potential for perverseness impressing Issei, he then decides that he would have it as his familiar instead of the Sprite Dragon. This, however, ends in failure, as with the slime's lecherous nature disgusts Rias and the others, whom they exterminate much to Issei's woe. As Issei desperately tries to protect the last of the slime on Asia, the baby Sprite Dragon attacks him and destroys all the remaining slime by electrocuting it. The Familiar Master then reveals that the baby Sprite Dragon has taken a liking to Asia, who then proceeds to make the baby Sprite Dragon her familiar and names it Rassei.

Characters in order of appearance:
Asia Argento (1)
Issei Hyoudou (2)
Rias Gremory (3)
Koneko Toujou (5)
Yuuto Kiba (6)
Akeno Himejima (7)
Momo Hanakai (10)
Reya Kusaka (11)
Sona Sitri (12)
Genshirou Saji (13)
Tsubaki Shinra (14)
Tomoe Meguri (15)
Tsubasa Yura (16)
Ruruko Nimura (17)
Zatouji (20)
Matsuda (18)
Motohama (19)
Rias' Familiar (4)
Akeno's Familiar (8)
Shiro (9)
Undine (21)
Rassei (22)
Slime (23)

#### [Episode 8: I Pick a Fight!](https://highschooldxd.fandom.com/wiki/Episode_8_(Season_1))

Issei dreams of himself marrying Rias, which indirectly leads him to get in touch with his inner Dragon. Later at school, Issei, Matsuda, and Motohama are seen peeping at the girls of the kendo club in the girls changing room before getting roughed up by Koneko. At the clubroom, Asia is seen healing Issei, with Rias saying that she has no problem showing her body to Issei. After Issei and the others leave, Rias and Akeno have a private conversation on Rias' recent favoritism towards Issei. As Akeno leaves, an unknown magic circle is shown to appear before Rias in the clubroom. Back in Issei's room at night, Rias suddenly appears, oddly asking Issei to take her virginity out of the blue. Before Rias can continue, a new figure appears and interrupts them, introducing herself as Grayfia. Rias then leaves as Grayfia escorts her. The next day, Issei meets Riser Phenex, another High-Class Devil from the Phenex Clan and Rias' fiancé. Rias and Riser then have a dispute due to Rias' blatant refusal to marry Riser, causing the disagreement, with the latter's intention of marrying Rias so that it doesn't stain his family name. Seeing the dispute between Rias and Riser escalate, Grayfia offers mediation terms, proposing either of them sort out their differences by playing a Rating Game with each other. After it is decided that they would have a Rating Game against each other to solve the problem, Riser introduces his full peerage to Rias and the others, causing Issei to look upon Riser's female-only peerage with a mixture of jealousy, envy, and admiration. However, after seeing Riser shamelessly flirt with and grope his Queen, Yubelluna, paying no mind to his fiancé's presence, Issei gets angry and challenges Riser to a fight but immediately loses, being struck down by Mira, one of Riser's Pawns, whom he also claims is his peerage's weakest member. Riser then leaves after Rias accepts the terms for the Rating Game.

Characters in order of appearance:
Issei Hyoudou (3)
Rias Gremory (6)
Asia Argento (8)
Koneko Toujou (9)
Akeno Himejima (10)
Yuuto Kiba (11)
Grayfia Lucifuge (12)
Riser Phenex (13)
Yubelluna (14)
Karlamine (15)
Xuelan (16)
Mira (17)
Mihae (18)
Bürent (19)
Shuriya (20)
Marion (21)
Siris (22)
Ni (23)
Li (24)
Isabela (25)
Ile (26)
Nel (27)
Ravel Phenex (28)
Motohama (1)
Matsuda (2)
Miki Hyoudou (4)
Gorou Hyoudou (5)
Ddraig (7)

Riser kisses Ile and Nel and touches their breasts in the light novel, while in the anime, he kisses Yubelluna and fondles her breasts.

#### [Episode 9: I Begin My Training!](https://highschooldxd.fandom.com/wiki/Episode_9_(Season_1))

To prepare for the Rating Game that's scheduled after 10 days against Riser Phenex and his peerage, Rias prepares a cottage in an uninhabited mountain for the Occult Research Club to begin their training activities. However, despite training with Kiba in sword fighting, with Akeno in magic, and finally, with Koneko in close-quarters combat, Issei fails miserably, while Asia shows some talent in magic. However, later on, while cooking using magic, Issei notices that, upon imagining Akeno's naked body, he can harness his demonic power to peel the potatoes with remarkable ease. Coupling it with the feeling he got when he first activated his Sacred Gear against Kalawarner, Issei finally gets an idea for developing a new move. Meanwhile, Grayfia is seen discussing with her master, Sirzechs, Rias' decision to accept the Rating Game challenge. During nighttime, Issei sneaks out and starts practicing the new move that he earlier thought of, alone, until Asia shows up to help him. The next day, Rias starts explaining the history of the Devils, Angels, and Fallen Angels, which in turn leads to the creation of the Rating Games. Later on, at night, when Issei has a conversation with Rias about Riser's abilities, Rias tells him the reason that she had for rejecting her engagement, causing Issei to wallow over his own weakness. The next morning, Issei once again has a sparring match with Kiba. However, having trained rigorously for 10 days, his and the Occult Research Club's various efforts pay off when Issei manages to power up his Boosted Gear enough to use Dragonshot, which he then uses against Kiba, causing an entire mountainside to be leveled as collateral. This not only secures his first win against his fellow comrade but also causes Rias' training regimen to achieve its desired conclusion.

Characters in order of appearance:
Issei Hyoudou (1)
Rias Gremory (2)
Akeno Himejima (3)
Asia Argento (4)
Yuuto Kiba (5)
Koneko Toujou (6)

#### [Episode 10: The Showdown Begins!](https://highschooldxd.fandom.com/wiki/Episode_10_(Season_1))

One hour before the Rating Game, while Issei prepares himself inside his room, Asia comes in and starts a conversation with him, seeking his mental support. After Issei's alarm clock starts to ring, the two of them leave for the Occult Research Club together. Arriving at the clubroom, Issei and his friends make final preparations and prepare themselves mentally as they wait for the Rating Game against Riser and his team to commence. Before leaving, Sona and Tsubaki arrive to show their support for Rias and wish her good luck.

The Gremory team is then transported to a dimension where they see a replica of Kuoh Academy, which is to be used as the field for the Rating Game. Before the start of the match, Rias formulates a strategy and orders Akeno, Yuuto, and Koneko to place traps in preparation against Riser's assault. While the others head off to make their preparations, Rias unseals part of the seal she previously placed on Issei due to his lack of strength to withstand it. After finishing their preparations, Issei and Koneko head to the gymnasium, where four of Riser's servants—his Rook, Xuelan, and Pawns, Mira, Ile, and Nel—confront them.

Noting the strength of the Rook, Koneko decides to battle it out with Xuelan, leaving Issei to deal with the remaining three Pawns. Initially facing trouble due to being outnumbered three to one, Issei manages to overcome the odds with the doubling ability of the Boosted Gear and succeeds in his task of immobilizing his opponents after revealing his new move, Dress Break, which strips the girls of their clothes. At the same time, Koneko successfully immobilizes Xuelan by disabling her movements in a submission hold. The two then proceed to leave the gymnasium, allowing Akeno to deal the finishing blow to the defeated four by destroying the gymnasium in one large-scale attack. Meanwhile, inside the forest, Kiba confronts another three of Riser's Pawns, Shuriya, Marion, and Bürent, who got caught in the traps set by Rias' team while they were on their way to the enemy headquarters.

Elsewhere, Koneko and Issei decide to move on, initiating the next phase of their plan. With Issei's move disgusting Koneko, she decides to walk ahead of him, but a surprise attack from Riser's Queen, Yubelluna, takes her out. The episode ends with Riser telling Rias not to underestimate him.

Characters in order of appearance:
Issei Hyoudou (1)
Asia Argento (2)
Yuuto Kiba (3)
Koneko Toujou (4)
Akeno Himejima (5)
Rias Gremory (6)
Burent (10)
Ravel Phenex (11)
Shuriya (12)
Marion (13)
Riser Phenex (14)
Yubelluna (15)
Isabela (16)
Xuelan (17)
Siris (18)
Ni (19)
Li (20)
Ile (21)
Nel (22)
Mihae (23)
Karlamine (24)
Mira (25)
Sona Sitri (7)
Tsubaki Shinra (8)
Grayfia Lucifuge (9)
Shiro (26)
Akeno's Familiar (27)

#### [Episode 11: The Acclaimed Battle Continues!](https://highschooldxd.fandom.com/wiki/Episode_11_(Season_1))

Continuing over from the previous episode, Issei challenges Yubelluna in an attempt to avenge Koneko, but Akeno, who then proceeds to fight her in his place, stops him. Issei then regroups with Yuuto after Rias is forced to revise her strategy due to Akeno's fight with Yubelluna, finally deciding to face Riser herself, despite both Issei's and Yuuto's staunch objection. With no options left, both men proceed to challenge the remaining members of Riser's peerage, who are Ravel, Riser's sister, and Bishop; Karlamine, Riser's Knight; Isabela, Riser's Rook; Siris, Riser's other Knight; and Ni and Li, Riser's twin Pawns. Yuuto then fights Karlamine while Issei fights Isabela, defeating Isabela after using Dress Break to disable her movements before defeating her with his Dragon Shot. However, upon seeing that Rias is at a disadvantage in her fight against Riser, Issei, hoping to be more useful to her, allows his Boosted Gear to further evolve, transforming it into the Boosted Gear Gift, before transferring the boosted power to Yuuto. It is this transferred power that allows Yuuto to successfully defeat Riser's remaining pieces, aside from Ravel, in one wide-scale attack with his Sword Birth. However, Akeno's unexpected announcement of being defeated and Yuuto's sudden elimination by Yubelluna short-lived the victory, causing Issei to ignore Ravel's warning as he heads into the enemy headquarters alone before promoting into Queen and heading to the rooftop to assist Rias and Asia. Issei, however, was incapable of doing anything, as his body had reached its limit due to the burden of the boosted power that was continuously being placed upon his body, and Riser nearly thrashed Issei to the point of near death. The episode ends with Rias resigning due to her concern for Issei's well-being, thus confirming Riser's victory.

Characters in order of appearance:
Koneko Toujou (1)
Issei Hyoudou (2)
Rias Gremory (4)
Akeno Himejima (5)
Yuuto Kiba (6)
Asia Argento (12)
Yubelluna (3)
Shuriya (7)
Marion (8)
Burent (9)
Karlamine (13)
Isabela (14)
Ravel Phenex (15)
Mihae (16)
Siris (17)
Ni (18)
Li (19)
Riser Phenex (20)
Tsubaki Shinra (10)
Sona Sitri (11)

#### [Episode 12: I'm Here to Keep My Promise!](https://highschooldxd.fandom.com/wiki/Episode_12_(Season_1))

When Issei wakes up, finding himself passed out on his own bed after the Rating Game against Riser and his peerage, he blames himself, knowing that it was his powerlessness that forced Rias to resign. Soon after, Grayfia, Sirzechs' Queen, arrives at his home and gives Issei a magic circle that will allow him to attend the Gremory-Phenex engagement party in the Underworld. When Issei arrives at the designated area and blatantly crashes the party, Sirzechs interferes, offering arbitration terms to settle the dispute by hosting a one-on-one battle between Riser and Issei, with Rias' engagement on the line; however, when the battle begins, it is shown that Issei traded his left arm to the Dragon that resides within him in exchange for extreme power that will only last for 10 seconds. Issei is able to overpower Riser with his newfound power but is unable to defeat or deal him critical damage due to the latter's constitution as a Phenex, especially in the brief 10-second window he has; however, even after the 10 seconds are up, he manages to win when he surprisingly attacks a slightly weakened Riser with holy objects that he had earlier acquired from Asia, causing the latter to experience excruciating spiritual pain. After winning the battle, it is revealed that Sirzechs would have, if necessary, allowed a Griffin to help Issei and Rias escape. The episode ends with Rias kissing Issei while flying on the Griffin and then cuts to a moment where Rias tells Issei's parents that she plans to move in with him.

Characters in order of appearance:
Issei Hyoudou (1)
Riser Phenex (3)
Rias Gremory (4)
Grayfia Lucifuge (5)
Asia Argento (6)
Ravel Phenex (7)
Akeno Himejima (8)
Koneko Toujou (9)
Yuuto Kiba (10)
Sona Sitri (11)
Sirzechs Lucifer (12)
Gorou Hyoudou (14)
Miki Hyoudou (15)
Katase (16)
Murayama (17)
Motohama (18)
Matsuda (19)
Ddraig (2)
Griffin (13)

In the light novel, Rias is shown wearing a red dress, while in the anime, she wears a white dress during the reception.
In the light novel, Issei and Riser fought in the wedding hall, while in the anime, they fought in a floating arena.
In the light novel, the part where Issei loses his Scale Mail armor before the count was up did not occur in the anime.
In both the High School DxD (light novels) and the manga, it was Zeoticus Gremory and Lord Phenex that discussed the Welsh Dragon and the impending arrival of the Vanishing Dragon, while in the anime, this conversation is held between Sirzechs Lucifer and his wife, Grayfia Lucifuge.
Lord Gremory and Lord Phenex did not appear in the anime as opposed to the light novels.

#### [Episode 13: I'm Harvesting Breasts!](https://highschooldxd.fandom.com/wiki/Episode_13_(Season_1,_OVA))

The episode begins with the Gremory Team hunting a Stray Devil, successfully capturing him, and sending him back to the Underworld to face his punishment. The next day, Issei laments the word of the Stray Devil, remembering the Devil's laboratory, which he entered with Rias and Akeno. Issei then learns from Matsuda and Motohama that many of the schoolgirls, the ones with big breasts, are getting sick with anemia one after another. Back at the Occult Research Club, Issei and the others learn from Grayfia that the Stray Devil they captured was previously researching monsters, specifically the Chimera. Yuuto and Koneko then return to the clubroom, having found the location of the monster that was causing the girls to fall sick. Later that night, Rias and her team head towards the monsters' location, finding out its identity as a Plant Dragon Chimera. Before dealing with it, two female students under a type of hypnosis enter the scene. The chimera proceeds to attach vines adorned with flowering orifices to the student's breasts and proceeds to suck life energy from them. After Rias notes that the chimera never sucks its victims to death, the group initiates a battle to destroy it. However, due to the Chimera's superlative regenerative abilities, Rias, Asia, Akeno, and Koneko are overwhelmed and end up being captured by the Chimera, covering the girls with a corrosive slime dissolving their clothes for easier access to their breasts. After a while, the Chimera suddenly releases Asia and Koneko, focusing its attack on Rias and Akeno, hypothesized to be due to their larger breasts and, in turn, larger reserves of life energy to suck from them. As Grayfia appears at the site through a communication magic circle, she informs the group that the Chimera's ability is to suck the energy off big-breasted girls and bear fruits, which, upon consumption, will allow any girl to increase their breast size to her heart's desire. Angered by the sudden information, Koneko then goes berserk upon the Breast Chimera just as Kiba manages to free Rias and Akeno from the Chimera's grip. Rias then orders Issei to transfer his boosted power to her, which he tearfully does, allowing her to finish off the Chimera with her Destruction. The OVA ends with Issei being buried in the ground for one night by his friends as punishment for trying to defend the Chimera.

Characters in order of appearance:
Issei Hyoudou (1)
Gentleman Alchemist (2)
Asia Argento (3)
Akeno Himejima (4)
Koneko Toujou (5)
Rias Gremory (6)
Yuuto Kiba (7)
Grayfia Lucifuge (12)
Breast Chimera (13)
Motohama (8)
Matsuda (9)
Murayama (10)
Katase (11)


#### [Episode 14: I'm Searching for Breasts!](https://highschooldxd.fandom.com/wiki/Episode_14_(Season_1,_OVA))

Issei and Asia ask Rias for her permission to observe others doing their jobs so that they can learn how to do theirs better. The two are surprised at how simple the tasks are, ranging from playing games and cooking to giving foot massages (albeit with Akeno doing it in a sadistic way). However, later on, when the gang accompanies Rias on her job to check to see if an Egyptian coffin is cursed, Issei becomes possessed by the spirit of an Egyptian magician named Unas, who just happens to be as perverted as Issei. Unas claims that he'll only release him if they remove the three curses that bind him. However, the methods of removing them are all perverted in nature. For the first, he had Rias put on an extremely skimpy belly dancer's outfit and dance for him. For the second, he tried to get a kiss from Koneko but instead got one from Asia (albeit accidentally on the cheek). And for the third, he rubbed his face in Akeno's breasts. But as soon as the required tasks are complete and Unas is freed, he states that he deceived them to free himself, revealing that the curse was placed upon him by a female Devil from the Agares Clan, whom he once tried to make his bride. While initially having the upper hand by binding the girls with his bandages, the tables are turned when Issei uses Dress Break to free them, leading Unas to be finished by a combination of Akeno's lightning and Rias' Destruction.

Characters in order of appearance:

Rias Gremory (1)
Issei Hyoudou (2)
Asia Argento (3)
Koneko Toujou (4)
Yuuto Kiba (5)
Akeno Himejima (6)
Morisawa (7)
Mika (8)
Unnamed CEO (9)
Professor Nishiura (10)
Unas (11)

#### Detail Schedule Canon Skeleton

|Episode|Week|Day|Morning                        |Class/Noon                   |Lunch                    |Afternoon                           |Evening                                 |Night (until morning)                   |
|-------|----|---|-------------------------------|-----------------------------|-------------------------|------------------------------------|----------------------------------------|----------------------------------------|
|Ep 1   |1   |Mon|Trio Peeping Plan              |Class                        |Lunch w/ Trio            |Kendo Peeping (Beaten by Girls)     |Free Time                               |Sleep                                   |
|Ep 1   |1   |Tue|Free Time                      |Class                        |Magazine Trading         |Koneko "Gym Storage" Warning        |Free Time                               |Sleep                                   |
|Ep 1   |1   |Wed|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |1   |Thu|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |1   |Fri|Free Time                      |Class                        |Issei gets Flyer         |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |1   |Sat|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |1   |Sun|Free Time                      |Free Time                    |Free Time                |Event: The Bridge (Yuuma asks Issei)|Issei Celebrates                        |Sleep                                   |
|Ep 1   |2   |Mon|Free Time                      |Class                        |Issei Brags              |Issei leaves early (Date Prep)      |Free Time                               |Sleep                                   |
|Ep 1   |2   |Tue|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |2   |Wed|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |2   |Thu|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |2   |Fri|Free Time                      |Class                        |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |2   |Sat|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 1   |2   |Sun|Free Time                      |Free Time                    |Free Time                |Event: The Date (Park Fountain)     |Raynare Attack (Sunset)                 |Issei Dies / Resurrected                |
|Ep 2   |3   |Mon|Issei Wakes Up (Devil)         |Class                        |Friends Amnesia          |Rias watches Issei                  |Dohnaseek Attack (Park)                 |Rias Saves Issei                        |
|Ep 2   |3   |Tue|Naked Rias / Parents           |Class                        |Kiba Escorts Issei       |Joins ORC (Meet Koneko/Akeno)       |Pamphlet Distribution                   |Kalawarner Attack (Gear 1st Use)        |
|Ep 3   |3   |Wed|Meet Asia (Town/Bump)          |Class                        |Lunch                    |Stray Devil Hunt (Viser)            |Contract: Freed House                   |Escape / Rias scolds Issei              |
|Ep 4   |3   |Thu|Recovery from Freed            |Class                        |Lunch                    |Park Training / Date 2 (Asia)       |Raynare Kidnaps Asia                    |Church Raid Begins                      |
|Ep 5   |3   |Fri|Raid End / Asia Revived        |Class                        |Lunch                    |ORC Welcome Party (Riser Watches)   |Free Time                               |Sleep                                   |
|Ep 5   |3   |Sat|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 6   |3   |Sun|Asia Moves In                  |Free Time                    |Lunch                    |Pamphlet Distribution               |Free Time                               |Sleep                                   |
|Ep 6   |4   |Mon|Asia Transfers Class           |Class                        |Lunch w/ Asia            |Contract Attempt: Mil-tan (Fail)    |Issei Frustrated                        |Sleep                                   |
|Ep 6   |4   |Tue|Free Time                      |PE Class                     |Sickroom (Nap w/ Rias)   |Contract: Susan (Success)           |Victory Celebration                     |Sleep                                   |
|Ep 7   |4   |Wed|Free Time                      |Class                        |Lunch                    |Sona Sitri Intro / Rivalry          |Argument over Familiars                 |Sleep                                   |
|Ep 7   |4   |Thu|Free Time                      |Class                        |Lunch                    |Tennis Match (Rias vs Sona)         |Result: Draw                            |Sleep                                   |
|Ep 7   |4   |Fri|Free Time                      |Class                        |Lunch                    |Dodgeball Match (Destruction)       |Gym Repairs                             |Sleep                                   |
|Ep 7   |4   |Sat|Trip to Familiar Forest        |Zatouji / Undines            |Lunch in Forest          |Slime Incident / Asia gets Rassei   |Return Home                             |Sleep                                   |
|Ep 7   |4   |Sun|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 8   |5   |Mon|Dream: Marriage                |Peeping Kendo Room           |Lunch                    |Caught by Koneko / Healing          |Rias & Akeno Talk                       |Rias Seduction / Grayfia Interupts      |
|Ep 8   |5   |Tue|Free Time                      |Class                        |Lunch                    |Riser Phenex Arrives                |(LN) Riser Kisses Ile/Nel / Issei Loss  |Game Accepted                           |
|Ep 9   |5   |Wed|Travel to Mountains            |Camp Setup                   |Lunch                    |Training Start (Fails)              |Dinner / Strategy                       |Sleep                                   |
|Ep 9   |5   |Thu|Training: Running              |Training: Swords             |Lunch                    |Training: Magic                     |Dinner / Bath                           |Sleep                                   |
|Ep 9   |5   |Fri|Training: Endurance            |Training: Combat             |Lunch                    |Discovery: Potato Peeling (Lust)    |Dinner / Bath                           |Sleep                                   |
|Ep 9   |5   |Sat|Training: Dress Break          |Training: Dress Break        |Lunch                    |Training: Dress Break               |Dinner / Bath                           |Secret Night Practice (w/ Asia)         |
|Ep 9   |5   |Sun|Training: Dress Break          |Training: Dress Break        |Lunch                    |History Lesson (War/Games)          |Dinner / Rias Talks re: Engagement      |Sleep                                   |
|Ep 9   |6   |Mon|Training: Sparring             |Training: Sparring           |Lunch                    |Training: Sparring                  |Dinner / Bath                           |Sleep                                   |
|Ep 9   |6   |Tue|Training: Sparring             |Training: Sparring           |Lunch                    |Training: Sparring                  |Dinner / Bath                           |Sleep                                   |
|Ep 9   |6   |Wed|Training: Sparring             |Training: Sparring           |Lunch                    |Training: Sparring                  |Dinner / Bath                           |Sleep                                   |
|Ep 9   |6   |Thu|Training: Sparring             |Training: Sparring           |Lunch                    |Training: Sparring                  |Dinner / Bath                           |Sleep                                   |
|Ep 9   |6   |Fri|Training: Final Spar           |Event: Dragon Shot (Mountain)|Lunch                    |Pack Up / Rest                      |Return to Kuoh                          |Sleep                                   |
|Ep 10  |6   |Sat|Rest / Recovery                |Rest                         |Rest                     |Strategy Meeting                    |Mental Prep (Asia/Issei)                |Sleep                                   |
|Ep 10  |6   |Sun|Game Day Prep                  |Game Start                   |Gym Battle (Dress Break) |Koneko OUT / Akeno vs Yubelluna     |Issei vs Riser / Rias Resigns           |Loss: Rias Leaves                       |
|Ep 11  |7   |Mon|Issei Wakes Up Depressed       |Skip School                  |Lunch (Alone)            |Clubroom: Silence                   |Rias is Gone                            |Sleep                                   |
|Ep 12  |7   |Tue|Issei Depressed                |Class                        |Lunch                    |Issei Depressed                     |Free Time                               |Sleep                                   |
|Ep 12  |7   |Wed|Issei Depressed                |Class                        |Lunch                    |Issei Depressed                     |Free Time                               |Sleep                                   |
|Ep 12  |7   |Thu|Issei Depressed                |Class                        |Lunch                    |Grayfia Visits / Gives Ticket       |Issei's Resolve                         |Sleep                                   |
|Ep 12  |7   |Fri|Travel to Underworld           |Event: Wedding Hall Crash    |(LN) Zeoticus/Phenex Talk|Duel: Issei vs Riser                |(LN) Armor Breaks Early / Holy Water Win|Rias (Red Dress) Kisses Issei on Griffin|
|Ep 12  |7   |Sat|Return to Human World          |Recovery                     |Lunch                    |Rias Moves In (Parents Scene)       |Free Time                               |Sleep                                   |
|Ep 12  |7   |Sun|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |
|Ep 13  |8   |Mon|Stray Devil Hunt (Morning)     |Class                        |Lunch                    |Visit Lab (Stray's memory)          |Free Time                               |Sleep                                   |
|Ep 13  |8   |Tue|Rumors: Anemia/Breasts         |Class                        |Lunch                    |Grayfia Explains Chimera            |Koneko & Kiba find Chimera              |Chimera Hunt / Issei Buried             |
|Ep 13  |8   |Wed|Recovery                       |Class                        |Lunch                    |Free Time                           |Free Time                               |Sleep                                   |
|Ep 14  |8   |Thu|Free Time                      |Class                        |Lunch                    |Free Time                           |Free Time                               |Sleep                                   |
|Ep 14  |8   |Fri|Free Time                      |Class                        |Lunch                    |Free Time                           |Free Time                               |Sleep                                   |
|Ep 14  |8   |Sat|Job Observation (Cooking/Games)|Job: Massage (Akeno)         |Lunch                    |Job: Cursed Coffin                  |Issei Possessed by Unas / Freed         |Sleep                                   |
|Ep 14  |8   |Sun|Free Time                      |Free Time                    |Free Time                |Free Time                           |Free Time                               |Sleep                                   |


#### Detail Schedule Route 0 - Fajar Purnama

|Episode|Week|Day|Morning                                                                                                  |Class/Noon                                                                                        |Lunch                                                              |Afternoon                                                                                                               |Evening                                                                                                                                                                                                                  |Night (until morning)                                 |
|-------|----|---|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
|Ep 1   |1   |Mon|Quartet Peeping Plan and 1.Bio-Maintenance (Stretching & Mobility)                                       |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Lunch w/ Quartet                                                   |Kendo Peeping (Beaten by Girls) while 5. Sensory Overclocking (Ninja Training) and 12. The Art of Invisibility (Stealth)|2. Primal Movement (Ground Mechanics) and 3. Functional Dynamics (Daily Movement)                                                                                                                                        |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Tue|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Magazine Trading                                                   |Koneko "Gym Storage" Warning then 13. Anatomical Optimization (Muscle Training) while in gym.                           |7. Stress Inoculation (Fear Training) by playing horror games.                                                                                                                                                           |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Wed|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |6. Environment Object Awareness                                    |9. Primal Instincts (Quarrel Movements)                                                                                 |14. Traverse & Adapt (Open World / Parkour)                                                                                                                                                                              |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Thu|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |5. Sensory Overclocking (Ninja Training)                           |16. Dynamic Flexibility (Acrobatics)                                                                                    |10. Combat Summary (Basic Martial Arts)                                                                                                                                                                                  |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Fri|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Issei gets Flyer                                                   |11. Improvised Weaponry (Common Tools)                                                                                  |15. Close Quarter Combats (CQC)                                                                                                                                                                                          |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Sat|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |17. The Library of Motion: Karate                                                                 |17. The Library of Motion: Judo                                    |17. The Library of Motion: Jujutsu                                                                                      |Entertainment Time                                                                                                                                                                                                       |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |1   |Sun|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |17. The Library of Motion: Muay Thai                                                              |17. The Library of Motion: Brazilian Jujutsu                       |Event: The Bridge (Yuuma asks Issei)                                                                                    |Issei Celebrates                                                                                                                                                                                                         |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Mon|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Issei Brags                                                        |Issei leaves early (Date Prep)                                                                                          |13. Anatomical Optimization (Muscle Training)                                                                                                                                                                            |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Tue|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |5. Sensory Overclocking (Ninja Training)                           |16. Dynamic Flexibility (Acrobatics)                                                                                    |17. The Library of Motion: Tae Kwon Do                                                                                                                                                                                   |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Wed|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |6. Environment Object Awareness                                    |14. Traverse & Adapt (Open World / Parkour)                                                                             |17. The Library of Motion: Wing Chun                                                                                                                                                                                     |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Thu|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |12. The Art of Invisibility (Stealth)                              |11. Improvised Weaponry (Common Tools)                                                                                  |15. Close Quarter Combats (CQC)                                                                                                                                                                                          |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Fri|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |9. Primal Instincts (Quarrel Movements)                            |17. The Library of Motion: Silat                                                                                        |17. The Library of Motion: Jet Kune Do                                                                                                                                                                                   |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Sat|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |19. Visualization Protocol (theorize body hardening by tensing practice each muscles individually)|10. Combat Summary (Basic Martial Arts) + 19                       |Attempt 22. Only Blindfolded Training                                                                                   |Entertainment Time                                                                                                                                                                                                       |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 1   |2   |Sun|Tier 1: Foundation & Maintenance (1 - 4)                                                                 |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Inventory preparations                                             |Event: The Date (Park Fountain)                                                                                         |Raynare Attack (Sunset)                                                                                                                                                                                                  |Issei Dies / Resurrected                              |
|Ep 2   |3   |Mon|Issei Wakes Up (Devil)/Fajar Purnama recovery                                                            |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery                                  |Friends Amnesia                                                    |Rias watches Issei                                                                                                      |Dohnaseek Attack (Park)                                                                                                                                                                                                  |Rias Saves Issei                                      |
|Ep 2   |3   |Tue|Naked Rias / Parents / Fajar Purnama Recovery                                                            |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery                                  |Kiba Escorts Issei                                                 |Joins ORC (Meet Koneko/Akeno)                                                                                           |Pamphlet Distribution                                                                                                                                                                                                    |Kalawarner Attack (Gear 1st Use)                      |
|Ep 3   |3   |Wed|Meet Asia (Town/Bump)                                                                                    |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |4. Mental Reset (Meditation & Empty Mind)                          |Stray Devil Hunt (Viser)                                                                                                |Contract: Freed House                                                                                                                                                                                                    |Escape / Rias scolds Issei                            |
|Ep 4   |3   |Thu|Recovery from Freed                                                                                      |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation)                                                    |Inventory preparations                                             |Park Training / Date 2 (Asia)                                                                                           |Raynare Kidnaps Asia                                                                                                                                                                                                     |Church Raid Begins                                    |
|Ep 5   |3   |Fri|Raid End / Asia Revived                                                                                  |Hospital/8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery                               |Hospital/8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery|ORC Welcome Party (Riser Watches)                                                                                       |Hospital/8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery                                                                                                                                                      |4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 5   |3   |Sat|Faculty and parent visit to withdraw from school and return to home country because parent finishes Ph.D.|Soni visit confirming withdrawal and paperworks.                                                  |Matsuda and Motohama Visit.                                        |ORC visit but forgot to mention withdrawal.                                                                             |Rias stayed behind to discuss about pity of the king. Fajar will tell Rias not to worry because he will return to his home country, begs not to have memory erased, and asked for one last favor for farewell party tomorrow.|4. Mental Reset (Meditation & Empty Mind) before Sleep|
|Ep 6   |3   |Sun|Asia Moves In                                                                                            |Farewell Matsuda and Motohama.                                                                    |Farewell Matsuda and Motohama.                                     |Pamphlet Distribution                                                                                                   |Farewell ORC.                                                                                                                                                                                                            |Sleep                                                 |


#### Detail Schedule Route 1 - Ren Nocturnus Veritas

|Episode|Week|Day|Morning                                                                                                                                                                                                                                                      |Class/Noon                                                                                                                                              |Lunch                                                                                                                                              |Afternoon                                                                                                                                                                                         |Evening                                                                                                                                                                   |Night (until morning)                                                                                                                                |
|-------|----|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
|Ep 1   |1   |Mon|Quartet Peeping Plan and 1.Bio-Maintenance (Stretching & Mobility)                                                                                                                                                                                           |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) fingers from ant crawling sensation to warmth                                                            |Lunch w/ Quartet                                                                                                                                   |Kendo Peeping (Beaten by Girls) while 5. Sensory Overclocking (Ninja Training) and 12. The Art of Invisibility (Stealth)                                                                          |2. Primal Movement (Ground Mechanics) and 3. Functional Dynamics (Daily Movement)                                                                                         |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Tue|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) toes from ant crawling sensation to warmth                                                               |Magazine Trading                                                                                                                                   |Koneko "Gym Storage" Warning then 13. Anatomical Optimization (Muscle Training) while in gym.                                                                                                     |7. Stress Inoculation (Fear Training) by playing horror games.                                                                                                            |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Wed|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) hand from ant crawling sensation to warmth                                                               |6. Environment Object Awareness                                                                                                                    |9. Primal Instincts (Quarrel Movements)                                                                                                                                                           |14. Traverse & Adapt (Open World / Parkour)                                                                                                                               |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Thu|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) foot from ant crawling sensation to warmth                                                               |5. Sensory Overclocking (Ninja Training)                                                                                                           |16. Dynamic Flexibility (Acrobatics)                                                                                                                                                              |10. Combat Summary (Basic Martial Arts)                                                                                                                                   |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Fri|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) arms from ant crawling sensation to warmth                                                               |Issei gets Flyer                                                                                                                                   |11. Improvised Weaponry (Common Tools)                                                                                                                                                            |15. Close Quarter Combats (CQC)                                                                                                                                           |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Sat|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |17. The Library of Motion: Karate                                                                                                                       |17. The Library of Motion: Judo                                                                                                                    |17. The Library of Motion: Jujutsu                                                                                                                                                                |Entertainment Time                                                                                                                                                        |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |1   |Sun|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |17. The Library of Motion: Muay Thai                                                                                                                    |17. The Library of Motion: Brazilian Jujutsu                                                                                                       |Event: The Bridge (Yuuma asks Issei)                                                                                                                                                              |Issei Celebrates                                                                                                                                                          |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Mon|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) legs from ant crawling sensation to warmth                                                               |Issei Brags                                                                                                                                        |Issei leaves early (Date Prep)                                                                                                                                                                    |13. Anatomical Optimization (Muscle Training)                                                                                                                             |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Tue|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) hips from ant crawling sensation to warmth                                                               |5. Sensory Overclocking (Ninja Training)                                                                                                           |16. Dynamic Flexibility (Acrobatics)                                                                                                                                                              |17. The Library of Motion: Tae Kwon Do                                                                                                                                    |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Wed|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) core from ant crawling sensation to warmth                                                               |6. Environment Object Awareness                                                                                                                    |14. Traverse & Adapt (Open World / Parkour)                                                                                                                                                       |17. The Library of Motion: Wing Chun                                                                                                                                      |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Thu|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) chest from ant crawling sensation to warmth                                                              |12. The Art of Invisibility (Stealth)                                                                                                              |11. Improvised Weaponry (Common Tools)                                                                                                                                                            |15. Close Quarter Combats (CQC)                                                                                                                                           |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Fri|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) neck from ant crawling sensation to warmth                                                               |9. Primal Instincts (Quarrel Movements)                                                                                                            |17. The Library of Motion: Silat                                                                                                                                                                  |17. The Library of Motion: Jet Kune Do                                                                                                                                    |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Sat|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |19. Visualization Protocol (theorize body hardening by tensing practice each muscles individually)                                                      |10. Combat Summary (Basic Martial Arts) + 19                                                                                                       |Attempt 22. Only Blindfolded Training                                                                                                                                                             |Entertainment Time                                                                                                                                                        |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 1   |2   |Sun|Tier 1: Foundation & Maintenance (1 - 4)                                                                                                                                                                                                                     |8. Neuro-Somatic Cultivation (Awareness & Relaxation) head from ant crawling sensation to warmth                                                                     |Inventory preparations                                                                                                                             |Event: The Date (Park Fountain)                                                                                                                                                                   |Raynare Attack (Sunset)                                                                                                                                                   |Issei Dies / Resurrected / Ren Seed of Darkness                                                                                                      |
|Ep 2   |3   |Mon|Issei Wakes Up (Devil)/Ren recovery                                                                                                                                                                                                                          |Class/Ren 8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery while feeling sensation seed of darkness on legs.                                  |Friends Amnesia/Ren 8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery while feeling sensation seed of darkness on arms.                   |Rias watches Issei/Ren 8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery while feeling sensation seed of darkness on torso.                                                              |Ren 8. Neuro-Somatic Cultivation (Awareness & Relaxation) focus on recovery while feeling sensation seed of darkness on head and then stumbles on ORC with Dohnaseek Attack (Park)     |Rias Saves Issei/Ren 4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                          |
|Ep 2   |3   |Tue|Naked Rias / Parents / Ren Recovery                                                                                                                                                                                                                          |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) lower dantian of dark seed                                                                               |Kiba Escorts Issei                                                                                                                                 |Joins ORC (Meet Koneko/Akeno)                                                                                                                                                                     |Pamphlet Distribution/Ren 8. Neuro-Somatic Cultivation (Awareness & Relaxation) middle dantian of dark seed.                                                                           |Kalawarner Attack (Gear 1st Use)/Ren 4. Mental Reset (Meditation & Empty Mind)                                                                       |
|Ep 3   |3   |Wed|Meet Asia (Town/Bump)                                                                                                                                                                                                                                        |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) upper dantian of dark seed                                                                               |5. Sensory Overclocking (Ninja Training) integrated with 8. Neuro-Somatic Cultivation (Awareness & Relaxation) seed of darkness                                 |Ren 14. Traverse & Adapt (Open World / Parkour) integrated with 8. Neuro-Somatic Cultivation (Awareness & Relaxation) seed of darkness and then stumbles upon ORC with Stray Devil Hunt (Viser)                |Contract: Freed House/Ren 15. Close Quarter Combats (CQC) integrated with 8. Neuro-Somatic Cultivation (Awareness & Relaxation) seed of darkness                                       |Escape / Rias scolds Issei / Ren 4. Mental Reset (Meditation & Empty Mind)                                                                           |
|Ep 4   |3   |Thu|Recovery from Freed/Ren 10. Combat Summary (Basic Martial Arts) integrated with 8. Neuro-Somatic Cultivation (Awareness & Relaxation) seed of darkness                                                                                                                    |Class/8. Neuro-Somatic Cultivation (Awareness & Relaxation) whole body seed of darkness                                                                              |Inventory preparations (because of guts or bad feeling)                                                                                            |Date 2 (Asia)                                                                                                                                                                                     |Raynare Kidnaps Asia                                                                                                                                                      |Church Raid Begins                                                                                                                                   |
|Ep 5   |3   |Fri|Raid End / Asia Revived                                                                                                                                                                                                                                      |Rias visit to inform hospitalized Ren about pity of the king and after she leaves dark energy awakens.                                                  |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 1 Step 1: The Hand Taiyin & Yangming (The Breath & Grip)                                  |ORC Welcome Party (Riser Watches)/Ren 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 1 Step 2: The Foot Yangming & Taiyin (The Root & Stance)                                           |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 1 Step 3: The Hand Shaoyin & Taiyang (The Spirit & Speed)                                                        |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 5   |3   |Sat|Faculty Visit                                                                                                                                                                                                                                                |Student Council Visit                                                                                                                                   |Matsuda and Motohama Visit.                                                                                                                        |ORC visit.                                                                                                                                                                                        |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 1 Step 4: The Foot Taiyang & Shaoyin (The Spine & Battery)                                                       |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 6   |3   |Sun|Asia Moves In/Ren 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Step 5: The Hand Jueyin & Shaoyang (The Shield & Coordinator)                                                                                                                           |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 1 Step 6: The Foot Shaoyang & Jueyin (The Agility & Detox)                                     |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 1: The Origin (Lower Dantian)                                                      |Pamphlet Distribution/ Ren 21. Life Force Manipulation (Chi/Qi/Ki/Touki) recovery because no time for further steps of phase 2                                                                    |21. Life Force Manipulation (Chi/Qi/Ki/Touki) recovery because no time for further steps of phase 2                                                                       |Diagnosed for release tomorrow and 4. Mental Reset (Meditation & Empty Mind) before Sleep                                                            |
|Ep 6   |4   |Mon|Release from hospital and Asia Transfers Class                                                                                                                                                                                                               |Class/21. Phase 1.5: Step 1: The Terminal Awakening (Fingers & Toes)                                                                                    |Lunch w/ Asia                                                                                                                                      |Contract Attempt: Mil-tan (Fail) / Ren 9. Primal Instincts (Quarrel Movements) integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                                                 |Issei Frustrated/ Ren 6. Environment Object Awareness integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                                                  |4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 6   |4   |Tue|Tier 1: Foundation & Maintenance (1 - 4) + little 16. Dynamic Flexibility (Acrobatics)                                                                                                                                                                       |PE Class                                                                                                                                                |Sickroom (Nap w/ Rias) / Ren 5. Hearing Sensory Overclocking integrated with 21. Phase 1 towards 22. Sensory Domain (Super Sensing)                |Contract: Susan (Success) / Ren 14. Traverse & Adapt (Open World / Parkour) integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                                                    |Victory Celebration / Ren Hearing Sensory Overclocking integrated with 21. Phase 1 in public area like mall, street, park, etc, towards 22. Sensory Domain (Super Sensing)|4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 7   |4   |Wed|Tier 1: Foundation & Maintenance (1 - 4) + little 13. Anatomical Optimization (Muscle Training)                                                                                                                                                              |Class/21. Phase 1.5: Step 2: The Sponge (The Intake Valve)                                                                                              |Lunch/Ren 5. Feeling Surroundings Sensory Overclocking integrated with 21. Phase 1 towards 22. Sensory Domain (Super Sensing)                      |Sona Sitri Intro / Rivalry                                                                                                                                                                        |Argument over Familiars                                                                                                                                                   |4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 7   |4   |Thu|Tier 1: Foundation & Maintenance (1 - 4) + little 16. Dynamic Flexibility (Acrobatics)                                                                                                                                                                       |Class/21. Phase 1.5: Step 3: The Joint Drill (The Capacitor)                                                                                            |Lunch/Ren 5. Feeling Gaze Sensory Overclocking integrated with 21. Phase 1 towards 22. Sensory Domain (Super Sensing)                              |Tennis Match (Rias vs Sona)                                                                                                                                                                       |Result: Draw                                                                                                                                                              |4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 7   |4   |Fri|Tier 1: Foundation & Maintenance (1 - 4) + little 13. Anatomical Optimization (Muscle Training)                                                                                                                                                              |Class/21. Phase 1.5: Step 4: The Bone Wash (Deep Cleaning)                                                                                              |Lunch/Ren 5. Feeling Intent Sensory Overclocking integrated with 21. Phase 1 towards 22. Sensory Domain (Super Sensing)                            |Dodgeball Match (Destruction)                                                                                                                                                                     |Gym Repairs                                                                                                                                                               |4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 7   |4   |Sat|Trip to Familiar Forest                                                                                                                                                                                                                                      |Zatouji / Undines                                                                                                                                       |Lunch in Forest                                                                                                                                    |Slime Incident / Asia gets Rassei                                                                                                                                                                 |Return Home                                                                                                                                                               |4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming                                                                                  |
|Ep 7   |4   |Sun|21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 1: The Origin (Lower Dantian) and Step 2: The First Gate (Huiyin / Perineum)                                                                                                                 |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 3: The Ascent of Fire (The Three Passes)                                                |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 4: The Summit (Baihui / Crown)                                                     |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 5: The Magpie Bridge (The Switch)                                                                                                 |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 6: The Waterfall (Ren Mai)                                                                                |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 2 Step 7: The Return and 4. Mental Reset (Meditation & Empty Mind) before 20. Lucid Dreaming|
|Ep 8   |5   |Mon|Dream: Marriage                                                                                                                                                                                                                                              |Peeping Kendo Room + 12. The Art of Invisibility (Stealth) integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                           |Lunch/12. The Art of Invisibility (Stealth) integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                                     |Others caught by Koneko but Ren escaped.                                                                                                                                                          |Rias & Akeno Talk                                                                                                                                                         |Rias Seduction / Grayfia Interupts                                                                                                                   |
|Ep 8   |5   |Tue|10. Combat Summary (Basic Martial Arts) integrated with 21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki)                                                                                                                                                   |Class/21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) review Phase 2 then little Phase 3 Step 1: The Lower Dantian (The Fuel Tank)                   |Lunch/21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 3 Step 1: The Lower Dantian (The Fuel Tank)                                         |Riser Phenex Arrives                                                                                                                                                                              |(LN) Riser Kisses Ile/Nel / Issei Loss                                                                                                                                    |Game Accepted                                                                                                                                        |
|Ep 9   |5   |Wed|Travel to Mountains                                                                                                                                                                                                                                          |Camp Setup                                                                                                                                              |Lunch                                                                                                                                              |Training Start (Fails)                                                                                                                                                                            |Dinner / Strategy                                                                                                                                                         |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 3 Step 2: The Middle Dantian (The Combustion Chamber)                                       |
|Ep 9   |5   |Thu|Training: Running                                                                                                                                                                                                                                            |Training: Swords                                                                                                                                        |Lunch                                                                                                                                              |Training: Magic                                                                                                                                                                                   |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 3 Step 2: The Middle Dantian (The Combustion Chamber)                                       |
|Ep 9   |5   |Fri|Training: Endurance                                                                                                                                                                                                                                          |Training: Combat                                                                                                                                        |Lunch                                                                                                                                              |Discovery: Potato Peeling (Lust)                                                                                                                                                                  |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 3 Step 3: The Upper Dantian (The Command Center).                                           |
|Ep 9   |5   |Sat|Training: Dress Break                                                                                                                                                                                                                                        |Training: Dress Break                                                                                                                                   |Lunch                                                                                                                                              |Training: Dress Break                                                                                                                                                                             |Dinner / Bath                                                                                                                                                             |Secret Night Practice (w/ Asia)                                                                                                                      |
|Ep 9   |5   |Sun|Training: Dress Break                                                                                                                                                                                                                                        |Training: Dress Break                                                                                                                                   |Lunch                                                                                                                                              |History Lesson (War/Games)                                                                                                                                                                        |Dinner / Rias Talks re: Engagement                                                                                                                                        |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 3 Step 3: The Upper Dantian (The Command Center) and the Darkness appears.                  |
|Ep 9   |6   |Mon|Training: Sparring                                                                                                                                                                                                                                           |Training: Sparring                                                                                                                                      |Lunch                                                                                                                                              |Training: Sparring                                                                                                                                                                                |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 4 Step 1: The Breach (Pore Breathing) and the Darkness greets.                              |
|Ep 9   |6   |Tue|Training: Sparring                                                                                                                                                                                                                                           |Training: Sparring                                                                                                                                      |Lunch                                                                                                                                              |Training: Sparring                                                                                                                                                                                |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 4 Step 2: The Containment (The Second Skin) and the Darkness converses.                     |
|Ep 9   |6   |Wed|Training: Sparring                                                                                                                                                                                                                                           |Training: Sparring                                                                                                                                      |Lunch                                                                                                                                              |Training: Sparring                                                                                                                                                                                |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 4 Step 3: Imbuement (Object Extension) and the Darkness sticks.                             |
|Ep 9   |6   |Thu|Training: Sparring                                                                                                                                                                                                                                           |Training: Sparring                                                                                                                                      |Lunch                                                                                                                                              |Training: Sparring                                                                                                                                                                                |Dinner / Bath                                                                                                                                                             |21. Dark Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 4 Step 4: The Projection (Emission) and opens the Corridor of Darkness.                     |
|Ep 9   |6   |Fri|Training: Final Spar                                                                                                                                                                                                                                         |Event: Dragon Shot (Mountain)                                                                                                                           |Lunch                                                                                                                                              |Pack Up / Rest                                                                                                                                                                                    |Return to Kuoh                                                                                                                                                            |Explore the Corridor of Darkness while practicing 23. Reality Domination (Will / Conqueror's Haki).                                                  |
|Ep 10  |6   |Sat|4. Mental Reset (Meditation & Empty Mind)                                                                                                                                                                                                                    |Sleep                                                                                                                                                   |Sleep                                                                                                                                              |Strategy Meeting                                                                                                                                                                                  |Mental Prep (Asia/Issei)                                                                                                                                                  |4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 10  |6   |Sun|Game Day Prep                                                                                                                                                                                                                                                |Game Start                                                                                                                                              |Gym Battle (Dress Break)                                                                                                                           |Koneko OUT / Akeno vs Yubelluna                                                                                                                                                                   |Issei vs Riser / Rias Resigns                                                                                                                                             |Loss: Rias Leaves after Ren's Debut                                                                                                                  |
|Ep 11  |7   |Mon|Issei Wakes Up Depressed (everyone and Ren still with Issei in clubroom)                                                                                                                                                                                     |Issei Skips School / Ren in class attempts 21. (Not Dark) Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 5 Step 1: The Void State (Mushin / Emptiness).|ORC members lunch individually / Ren attempts 21. (Not Dark) Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 5 Step 2: The Filter (Differentiation)|ORC members in Clubroom: Silence / Ren attempts 21. (Not Dark) Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 5 Step 3: The Mixture (The Golden Ratio) only very little                          |ORC members mourning Rias is Gone / Ren attempts 21. (Not Dark) Life Force Manipulation (Chi/Qi/Ki/Touki) Phase 5 Step 4: The Cosmic Orbit (Infinite Stamina) only trying.|4. Mental Reset (Meditation & Empty Mind) before Sleep                                                                                               |
|Ep 12  |7   |Tue|Issei Depressed / Ren enters Corridor of Darkness and 21. energy module review phase 1, review phase 1.5, review phase 2, finish missing phase 2.5 minor chakras, review phase 3, finish missing phase 3.5 major chakras, review phase 4, and finish phase 5.|Class / Ren in Corridor of Darkness review training module tier 1 and 2.                                                                                |Lunch / Ren in Corridor of Darkness applying module 21 for body hardening (defense) and physical power up (offense and speed)                      |Issei Depressed / Ren in Corridor of Darkness and review training module tier 3 and 4 except module 17. The Library of Motion (All Martial Arts) and module 18. Weapon Proficiency (Lethal Grade).|Ren in Corridor of Darkness applying module 21 Videl ki ball training and flight (bukujutsu)                                                                              |Ren in Corridor of Darkness review all martial arts in the world that is known now while floating in the air.                                        |
|Ep 12  |7   |Wed|Issei Depressed / Ren in Corridor of Darkness review all melee weapon arts in the world that is known now while floating in the air.                                                                                                                         |Class / Ren in Corridor of Darkness review training module tier 5 and tier 6.                                                                           |Lunch / Ren in Corridor of Darkness mastering to emulate One Piece 3 Haki modules.                                                                 |Issei Depressed / Ren in Corridor of Darkness learning to power up like in Dragon Ball.                                                                                                           |Ren in Corridor of Darkness practice tier 7 module 24 psychic Ren was able to commune with the corridor of darkness able to perceive the outside world.                   |Ren in Corridor of Darkness learn the existence of other realities, peek into it, and learned to travel.                                             |
|Ep 12  |7   |Thu|Issei Depressed / Ren in Corridor of Darkness practice tier 7 module 23 but only dark elements and module 24 only void magics.                                                                                                                               |Class / Ren in Corridor of Darkness review all of his training.                                                                                         |Lunch / Ren in Corridor of Darkness integrates all his training into his own art.                                                                  |Grayfia Visits / Gives Ticket / Ren able to perceive in corridor of darkness.                                                                                                                     |Issei's Resolve and all ORC left a letter for Ren / Ren in corridor of darkness performing last meditation and perceived all of it.                                       |Ren returned from corridor of darkness to his room to have a long sleep after not sleeping for almost 3 years.                                       |
|Ep 12  |7   |Fri|ORC Travel to Underworld and shocked that Ren was already where Ren joins the briefing                                                                                                                                                                       |Event: Wedding Hall Crash                                                                                                                               |(LN) Zeoticus/Phenex Talk                                                                                                                          |Duel: Issei vs Riser                                                                                                                                                                              |(LN) Armor Breaks Early / Holy Water Win                                                                                                                                  |Rias (Red Dress) Kisses Issei on Griffin                                                                                                             |
|Ep 12  |7   |Sat|Return to Human World                                                                                                                                                                                                                                        |Recovery                                                                                                                                                |Lunch                                                                                                                                              |Rias Moves In (Parents Scene)                                                                                                                                                                     |ORC Victory Party                                                                                                                                                         |Ren bids farewell to ORC leaving to corridor of darkness.                                                                                            |


#### Detail Schedule Route 2 - Ariel Caelum Veritas

#### Detail Schedule Route 3 - Kala Sofia Veritas

#### Detail Schedule Route 4 - The Veritas Siblings

### Season 2 (coming soon)