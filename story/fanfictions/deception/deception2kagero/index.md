---
layout: post
title: Deception 2 Kagero Fan Fictions by Fajar Purnama 
description: My fictions, life experiences, and stories.
featuredimage: /story/fanfictions/deception/deception2kagero/images/Millenia20%Gastone20%Slash20%Hawk20%Daar.jpeg
---

![A cinematic, wide-screen ultra-wide angle shot of a chaotic battle inside a dark gothic grand hall with an obsidian floor. In the center, a pale young woman with short black hair in a blue tunic and heavy dark thigh-high boots is performing an acrobatic martial arts sequence. She is smoothly ducking under a massive rusty hammer swung by a towering, muscular bald man with scarred arms, while simultaneously sweeping a glowing blue dagger across the torso of a second armored man swinging a broadsword. In the midground, a third wiry soldier is blocking glowing mechanical arrows shooting from the stone wall using a metal shield. In the far background, a terrified villager in a green shirt is being blasted into the air by a glowing magical spring-trap on the floor. Thick, pale-purple smoke is pouring down from the ceiling, covering the upper half of the room. High-contrast lighting, action-packed anime-realism style, dynamic motion blur, masterpiece.](<images/Millenia Gastone Slash Hawk Daar.jpeg>)

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

## Prologue

### The Carnival of Lies & The Sovereign's Awakening

#### The Slumbering Sovereign

In the boundless architecture of the Infinite Realities, a soul's insertion is rarely a gentle process. When Fajar Purnama, the Lord of Infinite Realities, cast his consciousness into this dark, gothic realm, he did not arrive as a fully formed deity. He was born into the fragile, red-blooded vessel of a human infant.

For years, the vast intellect and multiversal experiences of Fajar laid dormant. He lived as a normal human child, experiencing the world through innocent, unclouded eyes. He knew nothing of his mastery over Bio-Maintenance, his supreme martial arts, or the empty realm he had conquered. He was simply a child, laughing at the bright colors of a traveling carnival, mesmerized by the performance of a Timenoid clown.

But peace in this world is an illusion.

The carnival became a slaughterhouse. Screams tore through the festive music as the night ran red. In the chaos, a towering, elegant figure stepped through the blood-soaked fairgrounds. It was Yocal, a high-ranking Timenoid. She looked down at the terrified human child, her eyes cold and calculating.

Yocal did not save the child out of mercy. She took her as raw material for the Marionette Project.

In the dark, suffocating carriage ride back to the Timenoid stronghold, Yocal's voice hissed into the child's mind, weaving a profound and heavy illusion. *“Look at what your kind has done. The humans are greedy, violent beasts. They killed the clown you loved. They killed your family. You have nothing left but me. I will be your mother now. Your name is Millenia.”*

#### The Awakening

Deep within the child's psyche, beneath the terror and the crushing weight of Yocal’s hypnotic brainwashing, something ancient and immovable stirred.

The trauma acted as a catalyst. The fabricated memories clashed violently with a soul that had literally broken reality itself. In an instant, the mental barriers shattered.

Fajar Purnama awoke.

He remembered the "Fiction to Reality" syndicate. He remembered the grueling physical conditioning of Phase I. He remembered standing before the tear in reality, accepting the burden of immortality. As the Lord of Infinite Realities, he observed the fragile, traumatized mind of the girl he now inhabited. He felt the cold, invasive tendrils of Yocal's magic attempting to rewrite his fundamental identity.

With a silent, invisible surge of absolute willpower, Fajar executed **Phase I: Mental Reset**. The trauma was instantly compartmentalized. The fear evaporated. The heart rate, which had been frantic, slowed to a perfect, rhythmic beat.

From this moment forward, he was Millenia. And she would play this game perfectly.

#### The Marionette's First Breath

Millenia opened her eyes.

She was lying on a cold, stone slab in a dimly lit chamber of the Timenoid castle. The air was heavy with the metallic scent of magic and old blood. Standing over her was Yocal. The Timenoid's pale, beautiful face was an unreadable mask, watching intently to see if the brainwashing had taken root.

Millenia did not gasp. She did not cry out for her parents. She drew a slow, perfectly measured breath, utilizing her foundational Bio-Maintenance to align her diaphragm and suppress any biological signs of panic.

She let her eyes glaze over, draining them of all the multiversal fire, the intelligence, and the terrifying warmth of Phase II cultivation. She stared up at Yocal with the hollow, dead eyes of a broken puppet.

"You are awake," Yocal said, her voice echoing in the stone chamber. "Do you know who you are?"

Millenia slowly sat up. Her muscles felt weak, devoid of the internal energy she was used to, but her skeletal alignment was flawless. She looked at her captor, her voice a quiet, emotionless whisper.

"I am Millenia."

Yocal smiled—a thin, cruel expression of triumph. "Good. The humans are a plague, Millenia. They are greedy and destructive. Here, you are safe from their filth. You will learn the art of the Trapmaster. You will become my instrument of judgment."

"Yes, Mother Yocal," Millenia replied, bowing her head submissively.

Behind those dead eyes, Millenia was already mapping the room. She was calculating the distance to Yocal's throat, estimating the Timenoid's physical strength, and initiating the first, invisible steps of her one-year physical rehabilitation. The Lord of Infinite Realities had infiltrated the stronghold, and the Timenoids had unknowingly invited their own destruction through the front door.

### Chapter 0: The Marionette Project

#### Chapter 0.1: The Invisible Foundation

The Timenoid stronghold was a monument to cold eternity, built from obsidian stone and shadowed arches that seemed to devour the sunlight. For a human child, it was designed to be a psychological tomb.

For Millenia, it was merely a new training ground.

She stood in the center of the grand hall, her small hands gripping a heavy wooden broom. High above on a sweeping balcony, Yocal stood draped in elegant dark fabrics, her piercing eyes tracking the human girl’s every movement. The Timenoid was looking for any crack in the brainwashing—a tear of sorrow, a flinch of lingering trauma from the carnival, or the spark of human defiance.

She found absolutely nothing. Millenia’s eyes were like shattered glass, completely devoid of emotion or resistance. She began to sweep the massive stone floor, her movements slow, repetitive, and mechanical.

"Perfect compliance," Yocal murmured to herself, a cruel smile touching her lips before she turned and glided away into the deeper corridors.

The moment Yocal’s presence faded, the true work began. Millenia did not break character; she did not sigh or relax her posture. Instead, she turned her attention entirely inward.

The vessel was frail, traumatized, and weak. It needed to be rebuilt from the cellular level up, using the absolute peak of **Phase I: Reality** methodologies.

While her arms mechanically pushed the broom, Millenia initiated **Step 0.5: Neuro-Somatic Cultivation**. She began with the terminal awakening. With every step on the cold stone, she initiated micro-contractions in her toes and fingers, forcing dormant nerve endings to fire and synchronize. She engaged the "sponge" technique—a specialized intake breathing method that pulled oxygen deep into her diaphragm without visibly expanding her chest. As she swept, she executed the joint drill, acting as a capacitor to store kinetic energy, followed by a deep, silent bone wash that flooded her marrow with fresh, oxygenated blood, flushing out the lingering physical fatigue of her abduction.

By midday, she was tasked with carrying heavy buckets of water from the courtyard well. To a normal child, the weight would have torn their rotator cuffs and shattered their posture. Millenia simply adjusted her functional dynamics. She aligned her spine perfectly, letting her skeletal structure bear the load rather than her underdeveloped muscles.

As she walked, she pushed the neuro-somatic flow deeper.

**Step 1 and Step 1.5** activated in perfect sequence. She visualized the **12 Great Meridians**, carefully guiding her breathing to clear the blockages left by a lifetime of mundane human existence. The energy flow became smooth and rhythmic.

Over the next several weeks, her internal architecture rapidly evolved under Yocal's oblivious watch. While standing idle in the corner of Yocal's study, Millenia unlocked the **8 Extraordinary Meridians** and the **Minor Chakras (Step 2 and 2.5)**. While sleeping on her stiff, wooden cot in the servant's quarters, she focused all her passive intent into her lower abdomen, successfully establishing the **Dan Storage (Elixir/Pearl)** and opening the **Major Chakras (Step 3 and 3.5)**.

The internal furnace was now lit, though it burned with a perfectly concealed, invisible flame.

With her internal energy paths cleared, Millenia began to reach outward. Her physical eyes remained locked in the dead, thousand-yard stare of a broken puppet, but her mind expanded. She practiced sharpening her five baseline senses until the oppressive silence of the castle transformed into a symphony of data.

She could hear the heavy, slow heartbeat of a Timenoid guard three corridors away. She could map the architectural stress points in the stone beneath her feet. As the weeks turned into months, her sensory overclocking breached the metaphysical plane. She began to sense the ambient magical energies flowing through the castle walls—the very ley lines that powered the trap grids. Most importantly, she learned to read the aura of intentions. Whenever Yocal entered a room, Millenia could physically feel the Timenoid's arrogant, icy malice before she ever heard her footsteps.

The vessel was no longer frail. It was a perfectly calibrated, localized anomaly hiding in plain sight, waiting for the introduction to Timenoid magic.

#### Chapter 0.2: The Architecture of Murder

The fourth month marked the end of the broom and the beginning of the blood-stained grids.

Yocal led Millenia down a spiraling, obsidian staircase into the deepest catacombs of the castle. The air here was freezing, thick with the metallic taste of ozone and stagnant mana. The room they entered was circular, its stone floor meticulously carved with interlocking geometric patterns that pulsed with a faint, sickly-blue luminescence.

"A Trapmaster does not soil their hands with the blood of beasts," Yocal instructed, her voice echoing in the cavernous space. She gestured toward a rusted, iron-banded wooden door at the far end of the room. "We are Timenoids. We command the very architecture of this world to execute our judgment. Watch, Millenia. Let the hatred of your kind guide your intent."

Yocal raised a single, pale finger. She spoke a harsh, multisyllabic incantation in the Timenoid tongue.

Instantly, the ambient blue light in the floor flared violently. Above the wooden door, the spatial fabric warped, rippling like a stone tossed into a still pond. From the distortion, a massive, jagged boulder materialized out of thin air and crashed downward, obliterating the door and sending a shockwave of dust through the room.

Millenia stood perfectly still, her face an unreadable, emotionless mask. She did not flinch at the deafening crash.

"The castle provides," Yocal smiled coldly. "The magic is bound to our bloodright, but through the Marionette Project, I have carved a temporary authorization into your soul. Focus on the grid. Visualize the execution. Speak the incantation."

Yocal expected Millenia to take weeks to grasp the rudimentary basics of summoning. She did not realize she was attempting to teach basic arithmetic to the Lord of Infinite Realities.

While Millenia’s dead eyes stared blankly at the crushed door, her newly expanded senses—honed by her covert neuro-somatic cultivation—were completely dissecting the phenomenon.

Fajar observed the residual energy paths. The Timenoid "magic" was not mystical at all; it was a crude, localized application of spatial manipulation and ambient mana conversion. The castle itself was built upon massive, intersecting ley lines. The geometric carvings on the floor were essentially a physical motherboard. The Timenoid incantations were merely passwords used to access the castle’s reserves, pulling kinetic energy from the earth to rapidly manifest physical matter from pre-existing spatial templates.

*It’s an architectural 3D printer fueled by ley lines,* Fajar realized internally. *Yocal relies on the incantation to bridge the gap between her intent and the castle's grid. It’s inefficient. There is a microsecond delay between the command and the manifestation.*

Millenia stepped forward, stepping onto the glowing grid.

She did not need to rely on the external "authorization" Yocal had provided. Thanks to her Dan Storage, her internal pathways were already thrumming with purified Qi. Millenia secretly channeled a microscopic thread of her own internal energy, bypassing the vocal password and directly interfacing with the castle's geometric grid through her feet.

She raised her hand, perfectly mimicking Yocal’s posture, and mumbled the required Timenoid incantation simply to keep up appearances.

But her internal execution was flawless and instantaneous.

Without the standard microsecond delay, the space three paces in front of her warped violently. A massive, razor-sharp **Pendulum Blade** manifested from the ceiling, slicing down with terrifying, silent kinetic force before vanishing back into the spatial tear.

Yocal’s eyes widened slightly. The manifestation was faster, cleaner, and more stabilized than a standard human should ever be capable of producing. But looking at Millenia’s blank, unwavering stare, Yocal dismissed the anomaly as a byproduct of her own "perfect" brainwashing techniques.

"Excellent," Yocal purred, stepping forward to gently stroke Millenia’s hair—a touch Millenia endured without a single shudder, actively using her bone-wash breathing to regulate her skin temperature and suppress her disgust. "You are learning quickly, my perfect little weapon."

For the next three months, this became their routine. Outwardly, Millenia played the obedient pupil, memorizing the placements for Spring Floors, Arrow Slits, and Bear Traps. Inwardly, she completely reverse-engineered the castle's entire metaphysical network. She learned how to overlay her internal Qi onto the localized magic, allowing her to summon traps with a mere thought, priming her environment for the brutal, non-lethal efficiency she would soon unleash.

#### Chapter 0.3: Shadows and Echoes

As the ninth month approached, the oppressive, constant surveillance finally lifted. Yocal, entirely convinced that the Marionette Project was a flawless success, began to leave Millenia unsupervised for hours at a time, retreating to her own chambers to handle the bureaucratic demands of King Eclypse's court.

Left alone in the cavernous lower dungeons, Millenia closed her eyes. It was time for the overt training to begin.

She reached out with her **Tier 6: Sensory Overclocking**, tracing the ambient magic of the castle until she locked onto Yocal's biometric signature floors above. For months, Millenia had read the icy, arrogant surface of the Timenoid's aura. But now, with her Major Chakras fully open and her intent refined, she pierced deeper into the metaphysical layer.

What she found beneath the frost took her breath away.

It was not the cold calculus of a monster. It was a bleeding, suffocating warmth. It was the undeniable, terrified heartbeat of a human mother desperately trying to protect her child from a court of immortal executioners. The Timenoid conditioning was a cage, and Yocal’s dormant human soul was throwing itself against the bars, loving the girl she had abducted as if she were her own flesh and blood.

In the dark of the dungeon, the Lord of Infinite Realities made a choice. Fajar had lived countless lifetimes, witnessing the tragedies of corporate warfare, corrupted law, and broken timelines. He knew the profound weight of an unchosen path. He did not hold onto the vengeance of the carnival. Instead, Millenia let her own aura soften, silently reaching back through the stone and magic to wrap around Yocal's fractured soul.

*You are my mother now,* Millenia thought, a quiet, absolute vow echoing in her mind. *And I will not let Eclypse take you.*

The motivation was no longer just about multiversal ascension; it was deeply, fiercely personal.

Millenia opened her eyes. The dead, vacant stare vanished, replaced by the terrifying, focused fire of a supreme martial artist.

She dropped into a low, predatory crouch. **Phase I: Primal Movement** activated perfectly. She began to flow through the shadows of the dungeon, her bare feet making absolutely no sound against the obsidian floor. She executed a perfect forward roll, transitioning seamlessly into the brutal, hyper-efficient stances of modern Close Quarters Combat.

The frail human vessel was gone. In its place was a weapon.

She visualized the legendary silhouettes of her past lives—the overwhelming presence of the Heavenly Demons, the tactical precision of Snake, and the grounded strikes of Mishima-style Karate. She threw a rapid combination of strikes at the stone wall, stopping her fists mere millimeters before impact to avoid making a sound. The internal Qi from her Dan Storage flared, channeling the kinetic force so intensely that the ambient dust in the room scattered outward from the sheer pressure of her blows.

She seamlessly integrated the Timenoid magic into her katas. With a silent flex of her internal energy, she summoned a phantom floor spring, using it not to launch an enemy, but to propel herself upward. She flipped through the air, grabbing a rusted iron chandelier, and landed silently on a high archway.

She was bridging the gap between absolute physical supremacy and localized reality manipulation. King Eclypse believed he was forging a marionette to slaughter humans. Instead, he was incubating a deity whose sole objective was to dismantle his entire kingdom to save the mother who loved her.

#### Chapter 0.4: The Pacifist Trapmaster

The twelfth month brought the first true test of the vessel.

Deep within the forgotten lower levels of the castle, a low-level human scavenger had managed to slip past the outer magical barriers. He was clad in rusted chainmail, clutching a jagged shortsword, his eyes wide with a desperate, greedy panic. He had come looking for Timenoid gold, but instead, he found Millenia.

She stood in the center of the dimly lit corridor, holding a silver candlestick. To the scavenger, she looked like a frail, lost servant girl.

"Don't scream," the man hissed, raising his blade as he closed the distance. "I don't want to hurt you, just tell me where the vault is!"

He lunged forward, intending to grab her shoulder.

In a fraction of a second, Millenia's mind processed a thousand tactical variables. Her **Tier 6: Sensory Overclocking** mapped the man's unsteady heartbeat, his poor center of gravity, and the precise angle of his rusted blade. A single, lethal strike to his throat would have ended his life instantly. A standard Timenoid trap sequence—a Bear Trap followed by a falling Mega Rock—would have reduced him to a bloody smear on the obsidian floor.

But the Lord of Infinite Realities no longer dealt in unnecessary slaughter. She sought efficiency.

Millenia did not run. Instead, she utilized **Phase I: Primal Movement**. She pivoted perfectly on her heel, her body dropping below his sweeping arm with terrifying, ghostly fluidity. As the man stumbled forward, caught completely off-guard by her speed, Millenia drove her palm into the nerve cluster behind his knee.

The strike contained no lethal force, but the focused burst of Qi from her Dan Storage buckled his leg instantly.

As the scavenger fell to the ground, disoriented and gasping, Millenia tapped into the castle's localized magic. Without uttering a single incantation, she wove her internal energy into the geometric grid beneath the stone. A **Spring Floor** materialized right beneath the man's chest.

With a muted *thump*, the trap launched him diagonally across the corridor. He slammed shoulder-first into the heavy oak doors of the storage room, the kinetic impact perfectly calculated to knock the wind out of him and rattle his brain just enough. He crumpled to the floor, completely unconscious, but breathing steadily.

Millenia stood over him, smoothing the fabric of her dress. The encounter had lasted less than three seconds. No blood was spilled.

Suddenly, the temperature in the corridor plummeted.

Yocal materialized from the shadows, her elegant face tight with a mixture of anger and panic. She had felt the surge of trap magic and rushed down, expecting to find her perfect Marionette covered in the gore of a dead intruder.

Yocal looked at the unconscious, breathing human. Then, she looked at Millenia.

"He is alive," Yocal said, her voice a sharp, dangerous whisper. The Timenoid conditioning within her screamed to execute the human on the spot, to punish Millenia for this failure of judgment. King Eclypse’s law demanded absolute death for trespassers.

Millenia looked up into Yocal’s eyes. She kept her expression perfectly blank, but through the metaphysical tether between them, Millenia projected a single, soft wave of absolute calm. *I am safe, Mother. And I did not need to become a monster to survive.*

Yocal’s breath hitched. For a long, agonizing moment, the high-ranking Timenoid stared at the human girl she had abducted. Her icy, immortal facade cracked. The suffocating, desperate warmth of her repressed maternal love flooded her aura. If she reported this to Eclypse, Millenia would be deemed a defective weapon and destroyed.

Yocal made her choice.

With a swift, fluid motion, Yocal waved her hand. A localized spatial tear enveloped the unconscious scavenger. "I will dump him beyond the weeping woods. When he wakes, he will remember nothing but a nightmare of falling."

Yocal knelt down, placing her pale hands on Millenia’s shoulders. Her eyes were intensely human in the dim light. "You executed the defense perfectly, Millenia. There was no intruder here. Do you understand?"

"Yes, Mother Yocal," Millenia replied, her voice soft, yet carrying an undeniable, quiet warmth.

The silent pact was sealed. The one-year gap was officially over. Fajar’s vessel was fully online, the "No-Kill" efficiency doctrine was established, and the deadliest Trapmaster in Timenoid history was now a pacifist deity guarding her foster mother.

## West Wood Mansion

### Chapter 1: An Innocent Girl

The West Woods Mansion was entirely different from the oppressive stone of the Timenoid castle. It was an elegant, sprawling estate surrounded by deep forests, acting as a forward outpost for Timenoid territory. For Millenia, stationed here alone by Yocal's orders, it was a quiet sanctuary.

Standing in the center of the grand entrance hall, Millenia was perfectly still. To a casual observer, she looked like a lifeless doll waiting for a command. Internally, however, she was cycling her Qi through her 12 Great Meridians, maintaining the flawless biological rhythm she had cultivated over the past year.

Her **Tier 6: Sensory Overclocking** extended outward, mapping the perimeter of the mansion.

She felt him before she saw him.

Footsteps approached the heavy wooden doors. The biometric feedback was erratic—the heart rate was slightly elevated, but not with the adrenaline of a seasoned killer. It was the rhythm of a confused, anxious civilian. There was no killing intent, no drawn weapon.

The heavy doors creaked open, casting a long shaft of pale sunlight across the mansion floor.

A young man stepped inside. He wore simple, functional clothes—the garb of a villager, completely unsuited for combat or espionage. He looked around the vast, silent hall, shivering slightly in the cold air.

"This place is eerie," Daar muttered to himself, his voice echoing off the high ceilings. "Why did the TMD call me here? Hello? Is anybody here?"

He took a few steps forward, peering into the shadows. As his eyes adjusted, he finally noticed the young girl standing perfectly still near the grand staircase, dressed in dark gothic fabrics. He jumped slightly, startled by her sudden presence.

"Who's there?" Daar asked, nervously rubbing the back of his neck. "The TMD called me here, but... somebody else is here?"

Millenia looked at him. Her face remained a perfect, emotionless mask. She did not summon a trap. She did not shift into a martial arts stance. She simply utilized the most efficient tool at her disposal: words.

"Only me," Millenia replied, her voice soft, flat, and completely devoid of hostility.

Daar blinked, looking around the massive, empty mansion, expecting a Timenoid lord to step out from the shadows at any moment.

"Excuse me," Daar said politely, taking a step back toward the door, "but could you please call someone for me?"

"There is no one to call," Millenia stated calmly, her unblinking gaze locked onto him. "I have no information of anyone calling you here."

A heavy, unsettling silence fell over the hall. Millenia’s absolute stillness and the total absence of any Timenoids began to weigh heavily on Daar's nerves. His survival instincts—the basic human intuition that warns of unnatural things—finally kicked in. He looked at the strange, dead-eyed girl, and the sheer emptiness of the estate.

Daar took another step back, his hand reaching for the door handle. "Wait a minute, something's weird," he muttered, shaking his head. "I am leaving."

He turned on his heel and hurried out the door, pulling it shut behind him. From the other side, Millenia heard his fading footsteps as he jogged away, muttering, "What was that all about...?"

Millenia closed her eyes, slowly exhaling a breath of purified Qi. The first "intruder" had been dealt with. The mansion was secure, her hands remained clean, and no traps were required. She resumed her internal cultivation, completely unaware that Daar's escape would soon trigger the arrival of a much more dangerous guest.

### Chapter 2: A Fool's Fortune

The heavy wooden doors of the West Woods Mansion did not creak open this time; they were kicked inward with a violent crash.

Millenia stood in the exact same spot in the center of the grand hall. Her internal Qi was perfectly still, her breathing unbothered by the sudden intrusion.

Daar stood in the doorway, looking even more nervous than before. Beside him stood a seasoned mercenary. Slash wore battered leather armor and carried a wicked, one-handed broadsword. His eyes were hard and cynical, scanning the massive, empty room before locking onto the young girl in the dark dress.

"See? I told you she was still here," Daar muttered, stepping slightly behind Slash.

Slash scoffed, pointing his sword directly at Millenia's chest. "You called Daar here to set him up, didn't you? You used yourself as bait. What the devil is your purpose, girl?"

Millenia's expression did not change. Her voice was flat, carrying the calm, absolute authority of the Lord of Infinite Realities.

"I did not call him here," Millenia answered. "I have no purpose for either of you."

Slash tightened his grip on his hilt. "Liar. I don't like the way you set us up. We're going to teach you a lesson. Let's go!"

He charged forward, his boots pounding against the obsidian floor. Daar gasped and immediately scrambled backward, cowering behind a massive stone pillar near the entrance, terrified of the impending violence.

Slash closed the distance rapidly, raising his broadsword for a heavy, downward cleave. He expected the frail girl to scream, run, or at least attempt to dodge.

Millenia did absolutely nothing. She did not raise her hands. She did not shift her stance. She simply routed a microscopic thread of Qi from her Dan Storage into the castle's ley lines beneath her feet.

*Clang!*

Slash stumbled forward, his arms suddenly empty.

A **Magnet Wall** had materialized on the stone pillar to his right. The localized magnetic field was so intensely focused that it violently ripped the broadsword right out of his grip, pinning the weapon against the stone with a heavy, metallic thud.

Slash froze, his eyes wide with shock. He looked at his empty hands, then up at Millenia. "What kind of witchery—"

Before he could finish his sentence, Millenia shifted her intent. A **Spring Floor** manifested directly beneath Slash's boots.

With a deafening *thwump*, the mercenary was launched ten feet into the air. He flailed wildly before crashing into a **Spring Wall** that Millenia had simultaneously summoned on the adjacent architecture. The wall forcefully rejected his kinetic momentum, bouncing him back down to the center of the hall, where he landed hard on his back, all the breath violently knocked from his lungs.

As Slash gasped for air, trying to crawl away, Millenia triggered the final sequence.

Above them, a **Gas Ceiling** hissed to life. A thick, pale-purple mist began to descend over the center of the hall. It was not toxic or lethal; Fajar had modified the localized magic output. It was a potent, non-lethal paralytic vapor.

Slash inhaled a single breath of it and his limbs went completely numb. He collapsed back onto the floor, conscious but unable to move a single muscle. Behind the pillar, Daar fell to his knees, covering his head with his hands in pure terror, trapped near the edge of the gas cloud.

Millenia finally moved. She walked forward, her footsteps completely silent against the stone, until she stood over the paralyzed mercenary.

She snapped her fingers. The Magnet Wall deactivated. Slash's broadsword clattered to the floor, sliding perfectly across the polished stone until it stopped right next to the mercenary's paralyzed hand.

"Take your weapon," Millenia commanded softly, the gas swirling harmlessly around her ankles. "Leave this place. And do not return."

The paralytic vapor slowly began to dissipate, returning limited mobility to Slash's limbs. Trembling, his pride completely shattered by a girl who hadn't even touched him, Slash grabbed his sword. He pulled himself up, using Daar for support. The two men didn't say another word; they simply turned and bolted out the front doors, fleeing into the West Woods.

The hall fell silent once more.

The temperature dropped. Yocal materialized on the grand staircase, her eyes fixed on the open doors.

"Millenia," Yocal said, her voice tight with a mixture of reprimand and deep, maternal anxiety. "You let them go again. You realize what this means? They will run to the villages. They will tell the others. By sparing them, you are inviting more to our doorstep. It is dangerous."

Millenia looked up at the high-ranking Timenoid. Fajar did not bother to manufacture a fake battle scene to hide the truth from King Eclypse. If the King's spies were watching, let them watch.

"Do not worry, Mother," Millenia said, her voice carrying a terrifying, quiet confidence that made Yocal's breath catch in her throat. "Let them come. I can handle them."

### Chapter 3: A Friendship Oath

The heavy doors of the West Woods Mansion did not simply open; they were splintered inward as Gastone’s massive, two-handed hammer smashed against the iron bindings.

Four men stepped into the grand hall. Gastone, a mountain of a man with thick muscle and scarred arms, stepped over the ruined doors. Behind him was Hawk, a wiry, dangerous fighter twirling a pair of hand-axes. Slash followed closely, looking nervous but determined to reclaim his pride. Finally, Daar lingered near the entrance, gripping a simple farming pitchfork with trembling hands.

"So, this is the little witch who humiliated you, Slash?" Gastone rumbled, his voice echoing through the massive estate. He rested his heavy hammer over his shoulder, sneering at the small girl in the gothic dress standing completely still in the center of the hall. "She doesn't look like much. No weapons, no armor. Just a doll."

"Don't underestimate her, Gastone," Slash warned, keeping his distance. "She can summon magic from the very stones. We take her down fast before she can cast."

Hawk chuckled, stepping forward and tossing one of his axes into the air, catching it flawlessly by the hilt. "Magic needs an incantation, Slash. We rush her together. She can't chant if her throat is crushed."

Millenia watched them. Her physical eyes were dead and unblinking, but internally, her **Tier 6: Sensory Overclocking** mapped the entire encounter. She analyzed Gastone’s center of gravity—too heavy, overly reliant on his upper body strength. She tracked Hawk’s footwork—agile, but impatient. Slash was hesitant, his morale already cracked from their previous encounter. Daar was a non-factor.

"Kill her!" Gastone roared, charging forward like an enraged bull, swinging his massive hammer in a wide, lethal arc aimed directly at Millenia's ribcage.

Hawk moved simultaneously, sprinting to Millenia's left flank to cut off her escape.

They expected the girl to panic, chant, or flee. Instead, the Lord of Infinite Realities moved.

Millenia did not rely on the Timenoid trap magic first. She activated **Phase I: Primal Movement**. As Gastone’s heavy hammer swung toward her, carrying enough kinetic force to shatter a stone pillar, Millenia simply stepped inside his guard. She slipped past the head of the hammer by a fraction of an inch.

Before Gastone could adjust his momentum, Millenia drove an open palm strike directly into his solar plexus.

She did not use brute strength; she utilized her internal Qi, sending a highly concentrated shockwave into his diaphragm. Gastone’s eyes bulged as all the oxygen was violently expelled from his lungs. He gasped, dropping the heavy hammer as his knees buckled.

Hawk lunged from the left, swinging his hand-axes in a rapid cross-slash.

Without looking, Millenia grabbed the back of the gasping Gastone’s collar and hauled the massive man directly into Hawk’s path, using him as a human shield. Hawk cursed, desperately pulling his axes back to avoid butchering his mentor.

That microsecond of hesitation was all Fajar needed.

Millenia swept her leg, kicking Hawk’s ankle with pinpoint precision, shattering his stance. As Hawk stumbled forward, Millenia grabbed his right wrist, twisting it into a brutal joint lock. Hawk screamed, dropping the axe.

"Slash! Do something!" Daar yelled from the doorway, paralyzed by terror.

Slash drew his broadsword and rushed forward, desperate to save his friends.

Millenia finally routed her Qi into the floorboards. She bypassed the standard Timenoid incantations entirely. The instant Slash crossed the threshold of the center hall, a **Bear Trap** clamped shut with a vicious *snap*, locking perfectly onto Slash's leather boot. The mercenary cried out in pain, pinned to the floor, unable to reach the fight.

Millenia released Hawk's wrist, delivering a swift, precise chop to the nerve cluster on the side of his neck. The agile fighter collapsed instantly, unconscious before he hit the stone.

Gastone, finally recovering his breath, roared in fury. He drew a heavy hunting knife from his belt and lunged at Millenia's back.

Millenia didn't even turn around. She flexed her internal energy, summoning a **Spring Floor** beneath Gastone.

*Thwump!*

The massive man was launched upward, colliding violently with a **Spring Wall** that materialized on the high ceiling. The kinetic rejection sent him plummeting back down, crashing heavily onto the obsidian floor next to the paralyzed Slash. Gastone groaned once, his eyes rolling back in his head as he lost consciousness.

The hall fell dead silent, save for the metallic rattle of Daar dropping his pitchfork.

Millenia stood flawlessly amidst the three defeated mercenaries. Her breathing was perfectly even; her dress was unwrinkled. She slowly turned her gaze toward the terrified villager standing by the broken doors.

"I told you not to return," Millenia said, her voice soft and utterly devoid of malice. "Take them. Leave. Tell whoever sent you that this mansion is closed."

Daar fell to his knees, utterly broken by the impossible display of violence and restraint.

Meanwhile, in the high, cold towers of the King's Palace, King Eclypse sat upon his obsidian throne, reviewing the magical resonance logs of the West Woods Mansion.

Yocal stood a few paces away, her hands clasped elegantly in front of her. Her face was an icy mask, but internally, her heart hammered against her ribs as the King read the report.

"Fascinating," King Eclypse murmured, steepling his long, blue fingers. "A four-man breach. Fully armed mercenaries. The perimeter remained secure, yet the magical logs show a startlingly low expenditure of mana. Only three localized spatial traps were deployed. And more curiously... no fatalities."

Eclypse looked up at Yocal, his glowing eyes narrowing slightly. "She repelled an armed squad, yet let them live. She fulfills the primary directive of defense, but ignores the implicit necessity of extermination. Is the brainwashing incomplete, Yocal?"

Yocal maintained her cold composure, executing the lie flawlessly. "She is a machine, Your Majesty. She was ordered to protect the mansion. She calculates the most efficient method to fulfill that parameter. Extermination requires excessive energy and cleanup; breaking their morale ensures they do not return, conserving her strength for greater threats."

Eclypse leaned back, considering this. "Efficiency over brutality. An interesting deviation. Very well. As long as the estate remains secure, the Marionette Project remains a success."

He paused, looking closely at Yocal. "Yet, you seem tense. You aren't worried about her safety, are you, Yocal? I understand we Timenoids cannot have children. It must be tempting to view this... weapon... as your own flesh and blood."

Yocal did not flinch. She stared directly into the King's eyes, burying her maternal love beneath centuries of aristocratic ice.

"No, Your Majesty," Yocal replied smoothly. "I am a Timenoid. I abandoned such fragile human flaws long ago. She is merely an experiment."

### Chapter 4: Tangled Thoughts

The dense canopy of the West Woods cast long, deceptive shadows over the trio of mercenaries. Tension thickened the cold air, completely halting their advance toward the Timenoid estate.

"Gerald, tell me," McLord stammered, his eyes darting nervously between his companions. "Do you really plan to kill the TMD?"

Gerald, a hardened former knight, rested his hand on his sword hilt. "Haven't you heard from Deadmoon yet?"

"Nothing concerning plans to kill the respected TMD!" McLord’s voice cracked with panic.

"We Red Blood do not respect the TMD," Gerald replied coldly.

McLord took a terrified step back. "What do you mean you don't respect the TMD? You are crazy! They gave us life! They gave us order! I won't betray them!"

Before Gerald could grab him, McLord turned and bolted blindly through the trees, desperate to distance himself from the treasonous Red Blood faction.

"Wait, McLord!" Gerald called out, but the coward was already gone.

Beside him, Rain lowered her crossbow, her brow furrowed. "Gerald, that's strange. Why didn't he know about the mission? Was he not briefed by the priest?"

"Yes... strange," Gerald muttered, his eyes narrowing toward the dark silhouette of the mansion in the distance.

McLord burst through the heavy front doors of the West Woods Mansion, panting heavily. He expected to find a Timenoid lord to whom he could pledge his loyalty and report Gerald's treason. Instead, he found a young, frail-looking human girl in a dark dress standing perfectly still in the center of the grand hall.

McLord exhaled a breathless, arrogant laugh. "What do we have here? No TMD to warn us, just a frail little human trespasser. No need to worry now. I caught you red-handed."

He drew his broadsword and readied his shield. Slaying a human intruder would be the perfect way to prove his absolute loyalty to the Timenoid lords. With a desperate shout, he charged.

Millenia did not shift her stance. She did not prepare a trap. Through her **Tier 6: Sensory Overclocking**, she read McLord's biometric data—his elevated heart rate, his sloppy footwork, his entirely fear-driven intent.

It was staggeringly boring.

As McLord closed the distance and swung his blade in a frantic, horizontal arc aimed at her neck, Millenia merely raised her left hand. She routed a microscopic surge of Qi from her Dan Storage directly into her palm, fortifying her skin and bone to the density of tempered steel.

*Clang.*

McLord froze. The kinetic force of his charge completely vanished. Millenia was holding the razor-sharp edge of his broadsword in her bare hand. Not a single drop of blood fell. Her dead, vacant eyes stared through him.

Before McLord's brain could even process the impossibility of the physics, Millenia moved. Maintaining her grip on the live blade, she pivoted her hips and simply threw the sword. Because McLord was still gripping the hilt in sheer shock, he went flying with it.

As he soared through the air, Millenia tapped into the castle’s grid. A **Magnet Wall** activated on the far stone pillar. The localized magnetic field violently attracted McLord's steel armor and sword, accelerating his flight until he slammed into the pillar with a bone-rattling crunch. He crumpled to the floor, groaning in agony.

"Did you hear that scream?" Gerald’s voice echoed from the open doorway. "Is that you, McLord? What happened?"

Gerald and Rain rushed into the hall, weapons drawn. They stopped dead in their tracks. McLord was a crumpled, groaning heap at the base of a stone pillar, and the young girl stood completely unharmed in the center of the room, not a single hair out of place.

Gerald raised his sword cautiously. "Who are you? What did you do to him?"

"He accused me of trespassing in my own residence," Millenia stated, her voice flat and utterly calm. "He attacked unprovoked. I defended myself."

Gerald looked at the dented armor on McLord, then back to the unarmed girl. There were no Timenoids in sight. The Red Blood doctrine was absolute: they were revolutionaries seeking to free humanity from the blue-blooded oppressors, not murderers of innocent civilians.

Gerald lowered his blade. "We have no quarrel with humans, girl. We apologize for the intrusion." He gestured to Rain, who quickly hurried over to haul the groaning McLord to his feet. Without another word of hostility, the Red Blood mercenaries dragged their disgraced comrade out of the mansion, leaving Millenia in total peace.

Hours later, in a hidden Red Blood encampment far from the woods, Captain Keith stood before the faction's enigmatic leader, the priest Deadmoon.

"You already killed five TMD in the eastern sector?" Deadmoon asked, his face hidden beneath his heavy cowl.

"Yes, sir," Keith replied sharply. "But there is an anomaly. Gerald’s squad returned from the West Woods Mansion. They found no Timenoids, only a human girl. McLord attacked her in a panic. According to Gerald, the girl caught a live sword bare-handed and threw a grown man across the room using what looked like localized Timenoid magic."

Deadmoon’s eyes glinted in the dim light. "A human girl using Timenoid magic? She is a variable we cannot afford. Take your men and eliminate her."

Keith stiffened. "No, sir. The Red Blood only kills Timenoids. We do not assassinate human children, regardless of what tricks they possess."

"Are you questioning my orders, Captain?"

"I am questioning the scope of this holy war," Keith fired back, his eyes narrowing. "You did not hesitate to sacrifice the human militia in the valley to secure our flank. Your mission seems less about freeing humanity, and more about ruling it."

Deadmoon brushed off the accusation with a wave of his hand. "I am a priest, Keith. I merely seek to avoid unnecessary bloodshed. If you refuse to handle the anomaly, I have other business to attend to. Dismissed."

As Keith left the tent, a shadow detached itself from the corner of Deadmoon's quarters. Matia, a lethal stealth assassin clad in dark leather, knelt before the priest.

Deadmoon scoffed, complaining to the empty room. "Keith’s arrogance grows tiresome. He clings to his rigid morals while a wild card sits in the West Woods. Matia. Go to the mansion. Investigate this girl. If she is a threat to my ascension... bleed her." Matia nodded silently and vanished.

Outside the command tent, Keith found his trusted lieutenant, Julia, waiting by the armory.

"Just as I guessed," Keith muttered, keeping his voice low. "Deadmoon has ties to King Zauber. They've wiped out the entire royal army on loan just to consolidate power."

"No chance of a leak," Julia whispered back. "His army knows nothing of our true plans."

"Deadmoon is a risk. He might leak our movements to the King to buy favor."

"But he wants to rule," Julia countered, frowning. "Why would he court King Zauber's favor?"

Keith looked out toward the dark horizon, his mind connecting the terrifying dots. "Maybe his goal isn't just to rule humans. Maybe he wants to use the power of the Timenoids to obtain immortality."

"What? How is that possible? We are human, not Timenoid!"

"What else could it be?" Keith sighed, shaking his head. "Anyway, we had better split up for now and keep a close eye on the priest's movements."

Julia nodded, turning to leave, but paused. "Keith, there's one thing I would like to know first."

Keith looked at her, already anticipating the question. "It's about the West Woods, right? Gerald's report."

"A human girl catching swords and using spatial magic without incantations," Julia said quietly. "If Deadmoon wants immortality... could she be the prototype?"