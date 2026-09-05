---
layout: post
title: One Piece Fan Fiction by Fajar Purnama
description: Fajar Purnama fictions, life experiences, and stories.
featuredimage: /story/fanfictions/onepiece/images/chained20%in20%impel20%down.png
---

![A young man with a perfectly calm, neutral expression chained to a heavy stone wall in a pitch-black, oppressive dungeon cell. He is wearing the standard-issue white and blue uniform of a Marine Seaman Recruit. Despite the massive iron chains binding his wrists, his posture is flawlessly relaxed, demonstrating zero physical stress or wasted kinetic energy. Anime art style, dramatic overhead shadowing, highly detailed background.](<images/chained in impel down.png>)

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

Currently By Fajar Purnama and Google Gemini

* Table of Content
{:toc}

## Prologue

### Chapter 1: The Calibration Swim

[System Status] Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Location: The Grand Line, Sub-Surface Ocean Currents.
Active Modules: * [Tier 1: Bio-Maintenance]: Core temperature locked at 36.5°C despite freezing underwater currents. Cellular oxygenation operating at 100% efficiency.

[Tier 6: Sensory Domain - Passive]: Intent Sensing (Observation Haki equivalent) covering a 5-kilometer spherical radius.

#### Scene 1: Fluid Dynamics

The oceans of this reality were structurally incorrect.

That was the first observation you made upon dropping into this universe. In a standard baseline reality, ocean currents followed predictable patterns of thermal convection and lunar gravity. Here in the Grand Line, the water pressure shifted violently every few seconds, creating spontaneous underwater tornadoes, freezing temperature drops, and boiling geysers.

It was the perfect environment for a morning warm-up.

You were roughly fifty meters below the surface, swimming at a steady, rhythmic pace. You weren't using magic. You weren't using any of the cosmic powers you had acquired from the Heavenly Realm or the Soul Society. You were simply relying on [Phase I: Functional Dynamics]. Every stroke of your arms, every kick of your legs was a masterclass in perfect kinetic transfer. You moved through the chaotic water not by fighting it, but by reading its kinetic flow and slipping through the absolute paths of least resistance.

Ping.

Your [Tier 6: Sensory Domain] registered a massive biological signature approaching from below. It was fast, incredibly dense, and radiating primal hunger.

You stopped swimming and suspended yourself in the water, looking down into the dark blue abyss.

A monstrous set of jaws, easily the size of a three-story building, shot up from the depths. It was a Sea King, resembling a horrifying cross between a moray eel and a horned dragon. It snapped its jaws shut, intent on swallowing you whole.

You didn't panic. You didn't even blink. Your Tiān Mó Dà Huà Jué (Emotional Filter) kept your heart rate perfectly stable at 60 BPM.

Instead of drawing a weapon, you simply planted your bare foot against the water itself. Applying your understanding of hyper-compressed spatial physics, you treated the liquid density as a solid surface.

You twisted your hips and delivered a standard downward roundhouse kick—a basic technique from your Brawl Combat Realities—directly onto the creature's snout.

DOOM.

The kinetic force of the impact didn't just crack the Sea King's skull; it created a massive, localized shockwave underwater. The creature’s eyes rolled into the back of its head, and its colossal body instantly went limp, drifting lazily back down into the abyss.

You adjusted your wet shirt, mentally checking your muscle fibers. 'Calibration complete. Gravity and atmospheric density of this world accommodated. Proceeding to the nearest landmass.'

#### Scene 2: The Anomaly at the Gates

Marineford, the impregnable fortress of Absolute Justice, was on high alert.

The colossal steel Gates of Justice remained tightly shut, creating the infamous Tarai Current—a massive, inescapable whirlpool that protected the headquarters from any unauthorized naval approach. Hundreds of heavy cannons lined the crescent-shaped walls, manned by elite Marine guards.

"Hey," a guard squinting through a spyglass muttered, rubbing his eyes. "Do you see that?"

"See what?" his partner asked, adjusting his grip on his flintlock rifle. "A pirate ship?"

"No... it's... a guy."

"A guy?"

"Yeah. He's... he's swimming through the Tarai Current."

The second guard burst into laughter. "Don't be an idiot. The whirlpool would tear a battleship apart, let alone a—"

He stopped. The warning bells of the plaza suddenly began to toll with frantic, deafening urgency.

You pulled yourself out of the ocean, your boots stepping onto the pristine white stone of Oris Plaza. You calmly wrung the excess saltwater out of the hem of your simple black t-shirt. You didn't look like a pirate, and you certainly didn't look like a threat. You looked like a tourist who had taken a wrong turn.

Within seconds, you were surrounded. Two hundred Marine soldiers, their faces tight with anxiety, leveled their rifles and cutlasses at you.

"FREEZE! STATE YOUR NAME AND BUSINESS!" a Marine Captain roared, his sword drawn. "HOW DID YOU BYPASS THE GATES OF JUSTICE?!"

You looked at him. You didn't project killing intent. You simply looked at him with the cold, absolute weight of your existence. Through your [Sensory Domain], you analyzed their weapons. 'Flintlock mechanisms. Sub-optimal muzzle velocity. Even if they fired simultaneously, the kinetic energy wouldn't pierce my resting skin tension.'

"I was simply swimming," you replied politely, your voice carrying clearly over the sound of the wind. "The currents dragged me in this direction. I apologize for trespassing on military grounds."

You turned, fully intending to just walk back to the ocean and swim somewhere else.

"I SAID FREEZE! FIRE A WARNING SHOT!" the Captain panicked, overwhelmed by the sheer, unexplainable pressure radiating from your relaxed posture.

Before a single trigger could be pulled, a booming, boisterous laugh echoed across the plaza.

"BWAHAHAHAHA! Hold your fire, you idiots! Do you want to destroy the plaza?!"

#### Scene 3: The Hero's Eye

A massive man wearing a dog-head mask pushed his way through the ranks of Marines. He was wearing a white Vice Admiral's coat draped over his shoulders, and he was loudly crunching on a bag of rice crackers.

Monkey D. Garp stopped a few meters away from you. He tossed a cracker into his mouth, chewing thoughtfully, though his sharp eyes locked onto yours.

To the normal Marines, you were just a weird guy who swam too far. But to a master of Haki like Garp, standing near you was like standing next to a dormant volcano. He could feel the monstrous, perfectly contained energy beneath your skin. He saw that you weren't out of breath, despite having just swam through the most dangerous waters in the world.

"Swimming, eh?" Garp grinned, his aura flaring slightly—a subtle, probing wave of Conqueror's Haki meant to test your spirit.

The invisible wave of pressure hit you. To anyone else, they would have foamed at the mouth and passed out. To you, it felt like a mild, warm breeze. You didn't even shift your stance. You simply let the pressure wash over you, your Reality Domination passively neutralizing it without a second thought.

Garp’s eyes widened a fraction of an inch. His grin turned into a massive, terrifyingly excited smile.

"You've got some nerve, kid, walking into Marine Headquarters like this," Garp laughed, tossing the bag of crackers to a stunned subordinate. "But I like your style. A guy who uses the Grand Line as a swimming pool is completely wasted on the civilian sector!"

You looked at the old man, analyzing his impressive biomechanical density. "I have no intention of causing trouble. I was just leaving."

"Leaving? Nonsense!" Garp marched forward and completely ignored military protocol, slapping a massive, heavy hand on your shoulder. To his shock, your shoulder didn't budge a single millimeter. It was like slapping a mountain.

"I don't know who you are or where you came from," Garp declared, his voice booming for the entire plaza to hear. "But as of right now, you are being drafted! Welcome to the Marines, kid! I’m going to personally see what kind of monster is hiding under that polite face of yours!"

You stared at the Vice Admiral. You processed the political, structural, and narrative implications of his statement. Joining this world's primary military force would grant you full access to their intelligence networks, their martial arts (Rokushiki), and an unrestricted view of the world's power structure.

"Very well," you replied calmly, adjusting your collar. "I accept."

### Chapter 2: The Physical Apex

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Active Modules:

[Tier 1: Functional Dynamics]: Calibrating muscle memory for maximum kinetic output with zero wasted caloric energy.

[Tier 6: Sensory Domain (Passive)]: Monitoring the biological feedback of 4,000 active personnel within a 2-kilometer radius.

#### Scene 1: The Mathematics of a Push-Up

The Marineford recruit training yard was a chorus of screaming instructors and sweating, grunting young men. Dust choked the air as hundreds of newly drafted Seamen were pushed to their absolute physical limits under the blazing sun.

"ONE HUNDRED AND FORTY-ONE! ONE HUNDRED AND FORTY-TWO! IF YOU DROP YOUR KNEES, I WILL FEED YOU TO THE SEA KINGS!" a massive instructor roared, pacing between the rows of recruits doing push-ups.

You were in the third row, dressed in the standard-issue white and blue uniform of a Seaman.

"ONE HUNDRED AND FORTY-THREE!"

You lowered your body. You didn't push back up using sheer muscle mass like the recruits around you. Instead, you applied [Phase I: Functional Dynamics]. You perfectly aligned your skeletal structure, allowing your bones to bear the load rather than your muscle tissue. You utilized the natural elasticity of your tendons to snap your body back into the starting position.

The caloric expenditure was roughly equivalent to blinking.

"ONE HUNDRED AND FORTY-FOUR!"

The recruit next to you, a boy barely eighteen, collapsed into the dirt, dry-heaving. The instructor was on him in an instant, screaming obscenities.

You remained in the plank position, your Tiān Mó Dà Huà Jué (Emotional Filter) keeping your heart rate at a resting 60 BPM. You passively observed the structural inefficiency of the Marines' training regime. They relied on breaking the body down through trauma to build endurance, completely ignoring cellular oxygenation and joint lubrication. It was barbaric, yet sociologically fascinating.

"Hey. You."

A shadow fell over you. You tilted your head slightly.

Standing over you was an older man with purple hair and a massive, cybernetic arm strapped to his right shoulder. He wore a dark suit and sunglasses, chewing on a cigar. Former Admiral Zephyr. The Chief Instructor.

Zephyr wasn't looking at your face. He was staring intensely at the center of your back.

"Stand up, Seaman," Zephyr ordered, his voice low and gravelly.

You smoothly transitioned your weight, standing upright in a single, fluid motion without using your hands. You dusted off your uniform and stood at attention, though your posture lacked the rigid, nervous stiffness of a typical recruit. You simply stood in a state of perfect, relaxed biomechanical readiness.

"Instructor Zephyr, sir!" the drill sergeant panicked, saluting frantically. "Is there a problem with this recruit?"

Zephyr took a slow drag from his cigar, blowing the smoke into the hot air. He slowly circled you, his eyes analyzing every inch of your frame.

"Who taught you how to breathe, boy?" Zephyr asked quietly.

"I calibrated my respiratory cycle independently, sir," you replied politely.

Zephyr narrowed his eyes behind his sunglasses. "You just did two hundred push-ups in ninety-degree heat. You aren't sweating. Your shoulders aren't tense. Your breathing is so shallow I can barely see your chest moving. You are exerting zero wasted energy."

The drill sergeant blinked, finally realizing what Zephyr was pointing out. He looked at you in horror, as if you were a ghost.

Before Zephyr could question you further, a heavy set of footsteps echoed across the yard.

#### Scene 2: The World's Tightest Defense

"Hey! Old man Z! Is this the guy Garp pulled out of the ocean?!"

A large, heavily built young man walked into the training yard. He wore a red rope tied around his waist like a sumo wrestler and carried a massive broadaxe over his shoulder. Sentomaru, the self-proclaimed owner of the world's tightest defense and Captain of the Science Unit.

Sentomaru dropped his axe into the dirt with a heavy thud. He looked you up and down, clearly unimpressed by your standard recruit uniform.

"Uncle Kizaru said Garp found a monster," Sentomaru scoffed, crossing his massive arms. "You don't look like a monster. You look like a guy who's going to die on his first patrol."

"I am currently analyzing standard patrol procedures. Death is statistically improbable," you replied evenly.

Sentomaru’s eyebrow twitched. Zephyr stepped back, a faint smirk crossing his scarred face. He wanted to see this.

"Statistically improbable?" Sentomaru barked, stepping into a wide sumo stance. "Let's test that! Hit me! Give me everything you've got! If you can make me take a single step backward, I'll recommend you for a promotion myself!"

"I am not seeking a promotion, sir," you said. "I am content observing as a Seaman."

"I DIDN'T ASK WHAT YOU WANTED! HIT ME!"

Sentomaru thrust his palms forward. You felt a massive shift in the atmospheric pressure. Through your [Tier 6: Sensory Domain], you watched invisible energy—Advanced Armament Haki (Emission)—flow from his core, down his arms, and project outward like an invisible wall of steel in front of him.

It was a highly impressive manipulation of spiritual energy. But structurally, it was flawed. Force projection still had to obey the laws of physics.

"Very well," you agreed politely.

You didn't power up. You didn't flare your own Haki. You simply stepped forward.

You utilized [Primal Movement]. You dropped your center of gravity by two inches, bypassing Sentomaru's line of sight for a fraction of a millisecond. You brought your right hand up, keeping your wrist completely limp.

Instead of punching the invisible wall of Haki, you placed your open palm gently against the apex of the invisible energy barrier.

Connection established.

Using pure kinetic transfer, you pushed the Haki's own outward force back into itself at a microscopic angle, creating a feedback loop. Then, you flicked your wrist.

CRACK.

Sentomaru didn't just step backward. The kinetic feedback bypassed his defense entirely, traveling through the invisible barrier, up his arms, and directly into his center of mass.

The heavy-set man was launched off his feet like a cannonball. He flew thirty yards through the air, crashing through two wooden training barracks before skipping across the dirt and slamming into the reinforced stone wall of the compound. The wall spider-webbed with cracks.

Absolute silence fell over the training yard. Four hundred recruits stood frozen, their mouths hanging open. The drill sergeant dropped his clipboard.

You stood in the exact same spot, casually lowering your hand. You looked at the destruction, running a quick mental calculation. 'Kinetic deflection successful. The structural integrity of his defense was rigid, making it brittle to precise angle manipulation.'

You turned back to Zephyr, who was staring at you, his cigar having fallen out of his mouth and into the dirt.

"Was the output satisfactory, sir?" you asked politely. "Should I return to my push-ups?"

#### Scene 3: The Mathematics of Friendship

"Push-ups?" Zephyr repeated, the words hanging in the silent training yard.

Slowly, the former Admiral began to chuckle. The chuckle grew into a deep, raspy belly laugh that echoed off the stone walls. It was a rare, genuine sound that made the drill instructors look at each other in sheer terror.

"Push-ups won't do a damn thing for you, boy," Zephyr grinned, shaking his head. He looked over at the rubble where Sentomaru was groaning and dusting off his sumo rope. "Hey! Sentomaru! I think he passed your test!"

"That wasn't Haki!" Sentomaru yelled, rubbing his chest as he stomped out of the debris. "He didn't use Haki! He just... he just bounced my own force back at me! What kind of weird physics is that?!"

"The correct kind," a booming voice echoed from the gates.

Monkey D. Garp strolled into the yard, holding a fresh bag of crackers and laughing so hard tears were forming in his eyes. "BWAHAHAHA! I told you, Z! I found a live one! He didn't even blink!"

You turned to Garp and offered a polite, friendly nod. "Vice Admiral Garp. Instructor Zephyr. Captain Sentomaru. If my physical assessment is complete, I would like to request permission to proceed to the mess hall. My cellular energy reserves require refueling after the calibration swim this morning."

Garp slapped his knee. "Refueling! I love the way this kid talks! Go on, Seaman! Eat the kitchens dry!"

The Marineford mess hall was a cavernous room filled with the chaotic noise of thousands of hungry soldiers. You sat at a long wooden table, surrounded by regular enlisted men who were giving you a very wide, terrified berth after hearing rumors of what happened in the yard.

You didn't mind. You were focused on your [Bio-Maintenance: Caloric Intake]. You systematically consumed a massive plate of roasted Sea King meat. You ate neatly and politely, chewing perfectly to maximize enzyme breakdown and nutrient absorption.

"Arara... mind if I sit here?"

The ambient temperature around your table suddenly dropped by ten degrees. The regular Seamen sitting nearby scrambled away, saluting frantically.

You looked up. A tall, lanky man with curly black hair and a sleeping mask pushed up on his forehead was pulling up a chair across from you. He wore a white suit and a Marine coat draped over his shoulders.

"Not at all," you smiled warmly, gesturing to the empty bench. "There is plenty of space. I am Fajar."

"Kuzan," the man yawned, resting his chin on his hand. He stared at you with lazy, perceptive eyes. "Garp's been making a lot of noise about you. Sentomaru is currently in the infirmary complaining about 'impossible kinetic vectors.' You don't look like much of a brute to me."

"I try not to be," you replied, taking a sip of water. "I find that brute force is usually just a symptom of poor structural planning. Would you like some of this Sea King? The protein density is excellent for muscle recovery."

Kuzan blinked, surprised by your incredibly relaxed, friendly demeanor. Most recruits either panicked in his presence or tried to act tough. You were just offering him lunch.

A small, genuine smile touched Kuzan's lips. "No thanks. I run a little cold. So, tell me, Seaman Fajar. What kind of 'Justice' do you follow? Burning Justice? Absolute Justice? Lazy Justice?"

You paused, processing the philosophical question. You thought about the multiversal realms you had traversed, the cosmic deities you had fought, and the fragile nature of order.

"I suppose I follow 'Structural Justice,'" you answered pleasantly. "If a house is built well, I will help sweep the floors. If the foundation is rotten, I will demolish it so something better can be built. But mostly, I am just here to observe the architecture."

Kuzan stared at you for a long moment. He didn't sense any malice, ambition, or hot-blooded righteousness in you. Just an impossibly deep, calm ocean.

"Structural Justice," Kuzan mused, leaning back and crossing his arms. "I like that. It’s quiet. We have too many loud people in this fortress."

Before Kuzan could relax further, a heavy tray slammed onto the table next to you.

A young officer with two cigars in his mouth and a scowl that looked permanently etched into his face sat down heavily. He wore a custom leather jacket over his uniform.

"The brass in this place are idiots," Captain Smoker grumbled, glaring at his food. "They let a pirate crew slip right through the Tarai Current because of 'jurisdictional paperwork.' Paperwork!"

Kuzan sighed. "Smoker, you're giving me a headache. Eat your food."

You looked at the angry Captain. Your [Sensory Domain] registered his spiked blood pressure and erratic heartbeat.

"Captain Smoker, is it?" you asked politely, sliding a small plate of steamed vegetables toward him. "You are burning your engine too hot. Anger is a very inefficient fuel source. It burns brightly, but it leaves ash in your biological system."

Smoker stopped chewing his cigars and glared at you. "Who the hell are you? A Seaman giving me a lecture on biology?"

"Just an observer," you smiled gently. "But consider this: if the system relies on paperwork, getting angry at the paper does not change the ink. To stop the pirates, one simply needs to anticipate the bureaucratic delay and position oneself at the exit of the current before the paper is even filed. Efficiency over emotion."

Smoker blinked. He stared at the vegetables, then at you, and then at Kuzan.

Kuzan was softly chuckling, pulling his sleep mask down over his eyes. "Listen to the Seaman, Smoker. He might just have the tightest head on his shoulders in this whole base."

You smiled and returned to your meal. You were a Seaman Recruit, sitting at a table with an Admiral-candidate and a rising Captain, discussing structural philosophy over lunch. You were enjoying this reality very much. It was chaotic, loud, and deeply flawed, but the people in it—the ones trying to hold it together—were fascinating.

### Chapter 3: Anomalies in the Architecture

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Active Modules: * [Tier 1: Mental Reset]: Passively cycling neural pathways to maintain absolute psychological equilibrium.

[Tiān Mó Dà Huà Jué (Emotional Filter)]: Operating at 100% capacity to process and neutralize external interrogative pressure.

#### Scene 1: The Weight of a Clean Soul

"More tea, Seaman?"

Great Staff Officer Tsuru poured a steaming cup of green tea and slid it across the low wooden table. Her small, unassuming office was tucked away in the highest echelons of Marineford, a place standard recruits were strictly forbidden from entering.

You accepted the cup with both hands, bowing your head slightly. "Thank you, Vice Admiral Tsuru. The temperature is optimal."

Tsuru folded her hands on her desk, resting her chin on them as she studied you. She was an old woman, a legend of the previous era alongside Garp and Sengoku. She possessed the Woshu Woshu no Mi, the Wash-Wash Fruit, allowing her to literally wash the evil and malice out of a person's heart. Over her decades of service, she had developed a terrifyingly accurate intuition for reading people.

"You hospitalized the Captain of the Science Unit this morning, Fajar," Tsuru stated, her voice calm but carrying the absolute weight of her authority. "Sentomaru is currently in the medical bay with three cracked ribs and a severe concussion. He claims you didn't use Haki."

"That is correct," you replied, taking a polite sip of the tea. "I simply redirected his own outward kinetic force back into his center of mass. It was a structural physics lesson, not an assault."

Tsuru didn't blink. She reached out, her hand glowing with a faint, soapy luminescence—the passive activation of her Devil Fruit. She didn't intend to attack you; she merely wanted to skim the surface of your soul, to check for the stains of malice, ambition, or cruelty that plagued so many powerful men.

The moment her aura brushed against your spiritual vessel, Tsuru gasped.

She violently pulled her hand back, knocking her own teacup over. The hot liquid spilled across the desk, but she ignored it, staring at you with wide, uncharacteristically terrified eyes.

She hadn't found malice. She hadn't found any "stains" of evil.

Instead, she had peered into an abyss. She felt the crushing, infinite weight of a soul that had traversed multiverses. She felt the heavy burdens of countless realities, the echoes of cosmic battles, and the absolute, chilling pragmatism of a deity who viewed their entire world as nothing more than a fragile glass house.

Your [Mental Reset] module immediately smoothed over the psychic ripple. You placed your teacup down gently and offered her a napkin to clean the spill.

"Are you unwell, Vice Admiral?" you asked softly.

Tsuru stared at the napkin, then up at your perfectly calm, polite smile. Her heart was hammering in her chest. He isn't human, she realized, a cold sweat breaking out on the back of her neck. He isn't a demon, either. He is something else entirely. A force of nature pretending to be a man.

"I am... fine, Seaman," Tsuru managed to say, her voice trembling slightly before she forced her legendary composure back into place. "You are dismissed. Return to your barracks."

"Have a pleasant afternoon," you replied, bowing respectfully before exiting the room.

Tsuru sat alone in the silence. She reached into her desk and pulled out a Den Den Mushi to call Fleet Admiral Sengoku. This boy couldn't be left as a Seaman. But terrifyingly, she wasn't sure if placing him in the highest ranks would be any safer.

#### Scene 2: The Biological Impossibility

Deep within the medical wing of the Science Unit, Sentomaru was wrapped in heavy bandages, groaning as a medical machine scanned his chest.

Sitting on a table next to him was a specialized golden Den Den Mushi with a metallic apple attached to its shell. The snail's eyes were wide, darting back and forth rapidly as it projected the voice of the world's greatest genius, communicating remotely from Egghead Island.

"Impossible! Look at the data again! RECALCULATE IT!" Dr. Vegapunk’s voice shrieked through the speaker, a mixture of scientific ecstasy and sheer panic.

"I told you, old man," Sentomaru grunted, wincing. "He didn't use Haki. He just tapped my barrier and I went flying."

"I'm not talking about the combat data, you fool! I'm looking at the medical scan the Pacifista optics took of him in the yard!" Vegapunk yelled. The snail produced a holographic projection of your body, overlaid with scrolling green numbers.

"I have studied the Lunarians! I have studied the Buccaneers! I know the absolute biological limits of the humanoid form!" Vegapunk rambled, the snail physically shaking with excitement. "This boy's cellular oxygenation operates at one hundred percent! Do you know what that means?! He produces ZERO lactic acid! His caloric expenditure for a standard punch is perfectly matched by his immediate metabolic synthesis!"

"Speak plain, doc," Sentomaru sighed.

"He doesn't waste energy! He is a biologically perfect, closed-loop system! It violates the laws of thermodynamics! If I could just extract a single vial of his blood, I could power a city!" Vegapunk was practically hyperventilating. "Sentomaru! You must bring this Seaman to Egghead immediately! I need to sequence his Lineage Factor! Who is he?! What is he?!"

"He's a Seaman Recruit, Class 3," Sentomaru deadpanned. "And I'm not going near him again. If you want his blood, you come ask him yourself."

#### Scene 3: The Bureaucracy of Gods

Back out in the main plaza of Marineford, the blazing afternoon sun beat down on the fortress.

Admiral Kuzan was leaning against a stone pillar, a sleep mask resting on his forehead, watching a group of recruits swabbing the massive wooden deck of a docked battleship.

Among them, wearing a simple white uniform, a blue cap, and holding a mop, was you.

"You missed a spot, Fajar!" a third-class petty officer barked, pointing at a scuff mark on the wood.

"My apologies, sir," you replied politely.

You adjusted your grip on the mop. You applied [Phase I: Functional Dynamics]. You calculated the exact friction coefficient of the wooden planks, the fluid viscosity of the soapy water, and the required kinetic pressure to remove the scuff mark without damaging the ship's sealant.

With a single, effortless push of the mop, the deck was not only cleaned, but the wood itself seemed to polish to a mirror shine under the perfect distribution of force.

Kuzan watched this from afar, a small, amused puff of cold breath escaping his lips. He had already heard the frantic whispers from Tsuru's office. He had heard Sentomaru's complaints. The higher-ups were completely panicking, trying to figure out how to classify the multiversal anomaly that had walked through their front door.

But the Marine bureaucracy was a slow, lumbering beast. Forms had to be filed in triplicate. Approvals had to be signed. Until the paperwork cleared, the man who had terrified the Great Staff Officer and broken the laws of physics was strictly mandated to finish his chores.

You wrung out the mop, looking out over the glittering ocean of the Grand Line. You felt the chaotic, vibrant energy of this world. You were perfectly content. The structural foundation of this world was deeply flawed, but for now, the floors were clean.

#### Scene 4: The Pursuit of Knowledge

Your mop shift had barely concluded when a squad of heavily armed Science Unit Marines approached you on the docks. They didn't point their weapons at you—having heard the rumors—but politely requested you accompany them to a secure laboratory deep within Marineford's basement.

You obliged. You were, after all, a Seaman Recruit following orders.

When the heavy steel doors of the lab hissed open, Sentomaru was sitting in the corner, glaring at you while holding an ice pack to his ribs.

Standing in the center of the room, surrounded by whirring medical equipment, was an older man with an impossibly massive head shaped like an apple, with an antenna sticking out of the top. Dr. Vegapunk, the Stella body himself, had practically flown from Egghead Island the moment the Pacifista optical data reached him.

"YOU!" Vegapunk shouted, his tongue sticking out in his classic, eccentric manner as he rushed forward. He completely ignored military protocol and grabbed your shoulders, staring into your eyes with maniacal scientific glee. "The closed-loop biomechanical anomaly! I am Dr. Vegapunk! Please, you must let me run a full diagnostic!"

Sentomaru grunted from the corner. "Careful, old man. Don't push him, or he'll bounce your kinetic force into the ceiling."

"I would be delighted to assist you, Dr. Vegapunk," you smiled warmly, stepping away from the guards and rolling up the sleeve of your standard-issue uniform. "I have great respect for the scientific method. Where would you like me to sit?"

Vegapunk blinked, completely taken aback. He was used to Marines either fearing him, worshipping him, or acting highly defensive about experimental procedures. He was not used to a test subject smiling like a fellow academic.

"Oh! Well! Over here, please!" Vegapunk stammered, frantically gesturing to a high-tech medical chair.

For the next twenty minutes, you sat in complete, relaxed comfort as Vegapunk ran his scans. He attached biometric nodes to your chest, drew three vials of your blood, and ran a full-spectrum radiographic scan of your skeletal structure.

"Fascinating... absolutely fascinating," Vegapunk muttered, holding up a vial of your blood to the harsh fluorescent light. He adjusted his goggles, his genius mind racing. "The cellular mitochondria... they aren't just producing energy, they are recycling it perfectly. There is no decay. And your skeletal density—it’s baseline human, but the molecular tension mimics sea-prism stone! How is this possible? What island are you from?!"

"It is a matter of structural conditioning," you explained politely, happy to talk shop with a fellow scholar. "You see, Doctor, the biological constraints of this reality are heavily reliant on external factors—Devil Fruits, atmospheric pressure, and Lineage Factors. However, if you condition the vessel to operate independently of localized physics, you achieve a universal homeostasis."

Vegapunk's eyes widened. He grabbed a notepad, scribbling furiously. "Universal homeostasis... independent of localized physics... wait. That would imply your biology wasn't formed by the evolutionary pressures of our oceans."

"That is exactly correct," you nodded, leaning forward. "If you look at the energy cultivation modules in my blood, you will find that I actually originated from a completely different—"

Pururururururu! Pururururururu!

A highly decorated, black-shelled Den Den Mushi on Vegapunk's desk suddenly began to scream.

Vegapunk froze. Sentomaru instantly stood up at attention, wincing through his pain. The black snail meant only one thing: a direct, priority-one call from the Gorosei (The Five Elder Stars), and they did not tolerate being ignored.

"Gah! The budget meeting for the Mother Flame!" Vegapunk shrieked, pulling at his hair. He looked at you, then at the ringing snail, absolutely devastated. "I am on the verge of biological enlightenment, and they want to talk about funding! I don't have time!"

"You have to take it, old man, or they'll cut our research grants," Sentomaru urged, tossing Vegapunk a transponder receiver.

Vegapunk sighed, his shoulders slumping. He looked back at you with deep, profound regret. "Seaman Fajar... we will continue this conversation. I must know more about this 'universal homeostasis.' Please, do not die on patrol before I return!"

"I will do my best, Doctor," you smiled, rolling your sleeve back down. "Good luck with your funding."

As Vegapunk frantically answered the Den Den Mushi and began apologizing to the highest authorities in the world, you quietly stood up and walked out of the laboratory.

You had given the smartest man in the world a glimpse of the multiverse, but bureaucratic paperwork had, once again, maintained the status quo. You found that highly amusing.

### Chapter 4: The Architecture of Good Hearts

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Active Modules: * [Tier 6: Sensory Domain (Passive)]: Intent Sensing calibrated to filter out ambient noise, focusing solely on the emotional resonance of 250 individuals within the sector.

[Tiān Mó Dà Huà Jué (Emotional Filter)]: Modulating empathy receptors to engage in deep socialization without compromising structural detachment.

#### Scene 1: Smoke, Iron, and Tea

The coastal tavern on the edge of Marineford was a rare sanctuary where the rigid hierarchy of the World Government blurred. Here, off-duty officers and enlisted men could share a drink, complain about paperwork, and watch the sun set over the Grand Line.

You sat at a round wooden table near the open window, quietly sipping a cup of jasmine tea. You had just finished a ten-hour shift cataloging cannonballs—a mundane task mandated by your Seaman rank that you had completed in twenty minutes using advanced spatial geometry.

"Hina is intrigued," a smooth, authoritative voice announced.

A tall, striking woman in a tailored maroon suit and a pink Marine coat draped over her shoulders approached your table. Captain Hina. She possessed the Cage-Cage Fruit, and her personality was just as strict and structured as the iron bars she produced.

Following right behind her, grumbling and surrounded by his perpetual cloud of smoke, was Captain Smoker.

"He's the anomaly from the yard, Hina," Smoker muttered, pulling up a chair and leaning back aggressively. "The one who thinks the Marines are just a 'flawed structure.'"

"Hina has heard the rumors," she said, sitting across from you with perfect, uncompromising posture. She eyed your plain Seaman uniform. "You embarrassed the Science Unit, terrified the Great Staff Officer, and yet you sit here drinking tea like a civilian. Hina wants to know your true objective, Seaman Fajar. Are you a threat to the law?"

You smiled warmly, placing your teacup down. "Good evening, Captain Hina. Captain Smoker. Please, make yourselves comfortable. And no, I am not a threat to the law. True law is merely a consensus of morality, and my morality requires no enforcement."

Hina raised an eyebrow. "Hina does not like riddles. The World Government provides the law. The Marines enforce it. It is black and white."

"Is it?" you asked politely, looking out the window toward the massive Gates of Justice. "If a law dictates that a man must starve so a noble can eat, is the man who steals bread evil? Or is the law itself structurally unsound?"

Smoker slammed his fist on the table, leaning in. "That's exactly what I've been saying! The brass up top are suffocating the real justice in this world! But running away or acting like a philosopher doesn't fix it. You have to stay in the system and fight the rot from within."

#### Scene 2: The Old Guard and the Ice

Before you could respond, a massive, calloused hand clamped down on Smoker’s head, nearly driving his face into the table.

"BWAHAHAHA! Look at you young pups, arguing about justice in a bar!" Vice Admiral Garp roared, pulling up a chair and signaling the bartender for a barrel of ale.

Beside him, moving at a glacial pace, Admiral Kuzan ambled over. He was wearing his sleep mask on his forehead and carrying a tall glass of ice water. "Arara... it’s too hot for all this yelling, Smoker. You're going to give the Seaman a bad impression of us."

"I am enjoying the conversation immensely, Admiral," you said, offering a respectful nod to the two legends.

Garp slammed his barrel onto the table, taking a massive gulp before wiping his mouth. He looked at you, his sharp, perceptive eyes locking onto yours. For all his boisterous behavior, Garp was incredibly intuitive.

"So, Fajar," Garp said, his tone dropping just a fraction in seriousness. "You've been sweeping our floors and taking our physical tests for a few weeks now. You've seen the good, the bad, and the bureaucratic. What's your verdict? Do you like the Marines?"

The table fell silent. Smoker, Hina, and Kuzan all watched you closely. Through your [Sensory Domain], you felt their individual intents. Hina’s rigid loyalty. Smoker’s burning frustration. Kuzan’s deep, freezing sorrow over his past orders. And Garp’s heavy, tragic compromise.

You didn't look at them right away. Instead, your gaze drifted to the other side of the tavern.

A group of young, fresh-faced Seamen were laughing together, sharing a cheap meal. Among them was a young recruit with a frighteningly skeletal face but the brightest, most earnest smile in the room—a young T-Bone, talking passionately about wanting to protect civilians from pirates.

"The architecture of the World Government is deeply compromised," you began, your voice calm but resonating with a quiet, multiversal weight. "It is built on a foundation of aristocratic rot, and eventually, the weight of its own corruption will collapse the roof."

Hina frowned, and Smoker clenched his jaw.

"However," you continued, turning your eyes back to the table, your expression softening into genuine, profound warmth. "A building is just stone and wood. It is the people inside who matter."

You looked at Smoker's angry, righteous eyes. "I respect your fire, Captain Smoker."

You looked at Hina's uncompromising posture. "I respect your dedication to order, Captain Hina."

You looked at Kuzan and Garp, acknowledging the heavy burdens they carried. "And I respect the sacrifices made by those who swallow their pride to protect the innocent from the shadows."

#### Scene 3: The Promise of the Outside

"You asked if I like the Marines, Vice Admiral Garp," you smiled, taking another sip of your tea. "I do not care for the uniform. Nor do I care for the flag. But I deeply respect the good hearts that wear them."

Garp stared at you, his signature grin softening into a look of profound understanding.

"But you won't stay, will you?" Kuzan asked quietly, the ice in his glass clinking as he shifted. "If you think the house is going to fall... you aren't planning on being inside when it happens."

"I am merely a Seaman Recruit. My current duty is to observe," you replied smoothly, neither confirming nor denying. But then, you leaned forward slightly, addressing the table with absolute, unwavering sincerity.

"But you should know this. Whether I am inside these walls or outside them... I am always on the side of good people. If the day comes when the uniform restricts your ability to do what is right, or if the rot at the top tries to crush the young, earnest hearts in this fortress..." You paused, your Reality Domination flaring just enough to make the air in the room feel impossibly heavy for a single second. "...I will offer my assistance. Not as a Marine. But as a friend."

Smoker blinked, the anger in his chest suddenly giving way to a strange, settling calm. Hina looked at you, her rigid worldview momentarily shaken by the sheer, benevolent gravity of your words.

Garp let out a quiet sigh, staring at his ale. He knew exactly what you meant. You were telling him that you couldn't be controlled by the World Government, but that he didn't need to fear you as an enemy.

"Well said, Seaman," Garp finally chuckled, raising his barrel. "Well said. Just make sure you finish cataloging those cannonballs before the Inspection Officer gets here tomorrow! BWAHAHA!"

The tension broke, replaced by the warm, chaotic noise of the tavern. You smiled, engaging in lighthearted conversation with the group for the rest of the evening.

You had made your stance clear. You would not save the World Government. But you had officially designated the good people within it as entities worthy of your multiversal protection.

### Chapter 5: The Orders from Above

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Intent Sensing calibrated to detect high-level transponder signals and atmospheric resonance in the upper tower.

[Tiān Mó Dà Huà Jué (Emotional Filter)]: Operating at 100% capacity to maintain absolute composure.

#### Scene 1: The Weight of an Unsigned Document

The Fleet Admiral’s office was situated at the highest peak of Marineford. Usually, it was a place of quiet, suffocating paperwork, guarded by Fleet Admiral Sengoku’s stoic presence and his pet goat.

Today, the office was shaking.

CRACK!

Sengoku’s massive mahogany desk splintered down the middle as Garp’s heavy fist slammed onto it. The Fleet Admiral didn't even yell at Garp for breaking government property; he simply sat back in his high-backed chair, his face shadowed, staring at a gold-stamped document sitting on the wreckage.

"Are you out of your damn mind, Sengoku?!" Garp roared, his usual boisterous humor entirely vanished. His eyes burned with a fiery, protective anger. "You're sending Fajar to Mary Geoise?!"

"Lower your voice, Garp," Sengoku said, his voice quiet, raspy, and thoroughly exhausted. "The guards outside don't need to hear this."

"I don't give a damn about the guards!" Garp shouted, stepping up to the broken desk. "Did you forget what happened thirty-eight years ago?! Have you forgotten God Valley?!"

Sengoku’s eyes narrowed behind his glasses, but he remained silent.

"Dragon was seventeen!" Garp spat out, the painful memory raw in his chest. "A kid! He saw what those scum were doing to the slaves in God Valley and he snapped. He fought with everything he had, and what happened?! He got dragged away, beaten half to death, and thrown in a cell! The only reason my boy is alive today is because I snuck him the key and told him to run!"

Garp leaned over the desk, pointing a thick finger at Sengoku. "Dragon didn't have the strength to change anything back then. He was weak. But Fajar? Fajar is a monster! If you put that boy in front of the Celestial Dragons and let him see how they treat human beings... it won't end like God Valley, Sengoku! He won't just get captured. He will burn Mary Geoise to the ground!"

#### Scene 2: The Chains of Command

Sengoku let out a long, heavy sigh. He rubbed his temples, looking far older than his years.

"Do you think I don't know that, Garp?" Sengoku said softly. "Do you think I want to send him up there?"

Garp froze, staring at his lifelong friend.

"I agree with you completely," Sengoku confessed, gesturing to the gold-embossed paper. "Fajar is an absolute wildcard. His spirit is completely unyielding, and his strength defies our understanding. Sending him to the Holy Land is like throwing a lit match into a powder keg."

"Then cancel the order!" Garp demanded. "You're the Fleet Admiral!"

"I can't," Sengoku stated firmly, looking up with dark, solemn eyes. "Look at the seal, Garp. This didn't go through my office. The Gorosei bypassed Marine bureaucracy entirely. Vegapunk’s biological reports and Tsuru’s psychological assessment reached the Five Elders directly. They want 'elite recruits' assigned as personal escorts and security labor for the upcoming World Summit preparations."

Sengoku leaned forward, resting his elbows on the broken desk. "If I interfere now—if I suddenly reassign a basic Seaman Recruit whom I am supposed to know nothing about—the Gorosei will instantly become suspicious. They will ask why the Fleet Admiral is personally protecting a grunt. They will launch an investigation into Fajar, into us, into our entire dynamic. I cannot risk giving them a reason to look closer."

Garp clenched his fists, the leather of his gloves groaning under his strength. "So you're just going to hand him over to those monsters?"

"We have no choice," Sengoku replied grimly. "The system is rigid, Garp. You know the pact we made. You protect the young blood at the bottom, I control the situation from the top. If I overstep my bounds with the Five Elders, the whole fragile illusion falls apart."

#### Scene 3: The Understanding

Down in the courtyard, you were standing by a supply crate, adjusting the straps on a heavy leather duffel bag.

Through your [Sensory Domain], you had listened to every single word exchanged in the Fleet Admiral's office. You analyzed the acoustic vibrations, the biological pulse rates, and the emotional resonance of both men. You registered Garp's fierce, fatherly panic and Sengoku's suffocating, tragic compromise.

You felt zero resentment toward either of them. In fact, your respect for them deepened. They were honorable men trapped inside a decaying, parasitic structure, doing everything in their power to minimize harm.

Heavy footsteps approached behind you.

Garp walked out onto the docks, accompanied by Sengoku. Neither of them wore their usual booming expressions. They looked like two old men carrying the weight of the world.

"Seaman Fajar," Sengoku addressed you, his tone formal and professional. "Your deployment orders have arrived. You are to board the government transport ship departing for the Red Line in one hour. You will be assigned to low-level security and logistics duty in the Holy Land of Mary Geoise."

"Understood, Fleet Admiral," you replied, giving a flawless, polite bow. "I will execute my duties efficiently."

Sengoku nodded slowly, giving you a long, meaningful look before turning and walking away, leaving Garp standing alone with you.

Garp stood there for a moment, staring at the concrete ground. Finally, he looked up at you, his eyes filled with a mixture of pride, sorrow, and warning.

"Fajar," Garp said quietly, stepping closer. "Up there... on top of the Red Line... it isn't like Marineford. The people who live up there... they aren't human. They wear glass bubbles over their heads because they think breathing the same air as us makes them filthy."

You kept your face completely serene. "I am aware of the aristocratic structure of the World Nobles, Vice Admiral."

Garp placed a massive, heavy hand on your shoulder. "If you see something up there... something that makes your blood boil... I need you to remember what I'm telling you right now. Don't throw your life away. The world isn't ready for a war yet."

He paused, his voice cracking slightly. "I lost a son to that place once because he tried to be a hero when he wasn't strong enough. Don't make me watch another good kid get crushed by that mountain."

You looked at the Marine Hero. Through your [Tiān Mó Dà Huà Jué], you felt the absolute sincerity of his heart.

You offered Garp a warm, reassuring smile.

"Do not worry, Vice Admiral Garp," you said gently. "I have no intention of throwing my life away. And unlike thirty-eight years ago... the mountain is not as strong as it thinks it is."

Garp blinked, his eyes widening slightly at your cryptic words. Before he could ask what you meant, the horn of the transport ship blared across the bay.

"Safe travels, Vice Admiral," you bowed politely, picking up your duffel bag and turning toward the gangplank. "Thank you for the hospitality of Marineford."

Garp watched you walk onto the ship, standing silently on the pier until the vessel cleared the harbor.

#### Scene 3: The Call from the Heavens

"We have no choice," Sengoku replied grimly, staring at the shattered remains of his desk. "The system is rigid, Garp. You know the pact we made. You protect the young blood at the bottom, I control the situation from the top. If I overstep my bounds with the Five Elders, the whole fragile illusion falls apart."

Garp clenched his jaw, the leather of his gloves creaking loudly. He turned toward the door. "I'm going to the docks. I'm pulling him off that transport ship myself, paperwork be damned—"

Pururururururu! Pururururururu!

The sound stopped Garp in his tracks. It wasn't the standard Den Den Mushi. It was the white, gold-trimmed emergency transponder reserved exclusively for direct communication with the Holy Land of Mary Geoise. Its eyes were wide, bloodshot, and frantic.

Sengoku felt a cold drop of sweat roll down his neck. He picked up the receiver. "Sengoku."

"FLEET ADMIRAL! EMERGENCY CODE BLACK!" a communications officer screamed through the snail, the background noise filled with the deafening roar of collapsing buildings and explosive shockwaves. "MARY GEOISE IS UNDER ATTACK! Widespread structural collapse in the Celestial Dragon residential district!"

Garp froze. His mind immediately jumped to the worst-case scenario. "Dragon?" he whispered hoarsely, stepping back toward the desk.

"Is it the Revolutionary Army?!" Sengoku barked into the receiver, his Haki flaring in sheer panic. "Did a Yonko scale the Red Line?!"

"NEGATIVE! IT IS A SINGLE HOSTILE!" the officer shrieked, the Den Den Mushi's face twisting in absolute terror. "The God's Knights haven't mobilized yet, but the primary guard forces have been completely annihilated! Admiral Borsalino is engaging the target, but... sir, he is being overpowered! Admirals Sakazuki and Kuzan have just arrived on the #### Scene to assist!"

Sengoku's blood ran cold. Three Admirals. Three of the greatest military powers in the world were engaging a single target in the Holy Land.

"Who is it?!" Sengoku roared, gripping the receiver so hard it nearly cracked. "Identify the hostile!"

"Sir, it makes no sense!" the officer cried, another massive explosion echoing through the line. "He... he isn't a pirate! He's wearing a Marine uniform! It's... it's a Seaman Recruit! He just swatted away a light-speed kick and leveled the Plaza of the Sun!"

Sengoku slowly lowered the receiver. It slipped from his fingers and clattered onto the floor.

The room fell into a suffocating, dead silence, broken only by the chaotic screaming still echoing from the dropped snail.

Sengoku looked at the gold-embossed deployment order sitting on his broken desk. The timestamp on the paperwork.

The bureaucracy hadn't protected Fajar. It had merely delayed the paperwork. Fajar hadn't been scheduled to leave today; he had been placed on a supply convoy three days ago. By the time the Gorosei's formal deployment notice reached Sengoku's desk, Fajar was already there.

Garp stared at the Den Den Mushi. The color completely drained from the Marine Hero's face. For the first time in decades, Monkey D. Garp looked old. He looked at the floor, a heavy, agonizing realization crashing down upon him.

He was far too late.

"He didn't even wait for the rot to reach him," Garp whispered, his voice trembling with a mixture of absolute horror and a tragic, profound awe. "He just kicked the front door in."

The mountain was already falling.

### Chapter 6: The Lie of the Foundation

(Flashback - 4 Hours Before the Assault on Mary Geoise)

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted / Pre-Ascension Threshold)
Rank: Seaman Recruit (Class 3)
Active Modules:

[Tiān Mó Dà Huà Jué (Emotional Filter)]: Operating at 100% efficiency. Heart rate locked at 58 BPM.

[Tier 6: Sensory Domain (Passive)]: Mapping biological distress signals across the Pangaea Castle perimeter.

[Phase II: Advanced Haki Equivalents]: Internal Destruction (Emission Armament) and Reality Domination (Conqueror's Haki) idling at baseline pressure.

#### Scene 1: The Streets of Gold and Ash

The Holy Land of Mary Geoise was a masterpiece of architectural hypocrisy.

Paved in pristine white marble, lined with grand golden archways and lush, manicured gardens, it smelled faintly of fresh sea salt and expensive wine. Yet beneath that opulent facade lay a suffocating, dense miasma of pure human misery.

Squads of Marines lined the streets. They were tasked with slave-retrieval duty—hunting down those who had escaped during a recent logistics transport fire.

The high-ranking officers—Lieutenants and Commanders—marched with stiff, agonizingly rigid posture. Their jaws were tightly clenched, their knuckles white as they gripped their sword hilts. Through your [Sensory Domain], you could read their internal biology with absolute clarity: elevated cortisol, nauseated stomachs, and deep, repressed disgust. They hated this task with every fiber of their being, but they were bound by the chain of command and the terrifying authority of the Gorosei.

The lower-ranked recruits—the Seamen—were simply terrified. They sweated through their white uniforms, their eyes wide and darting, clutching their rifles as if anticipating an execution order if they faltered for even a second.

Then, there was you.

You walked alongside them in your simple, unblemished Seaman uniform, holding a pair of heavy iron restraints. Your posture was relaxed, your shoulders loose, and your expression completely serene. You were the calmest person on the mountain.

Having traversed countless realities—having watched stars die, civilizations collapse, and cosmic entities wage war—earthly cruelty was neither surprising nor emotionally overwhelming to you. You were close to achieving absolute deity ascension; your perspective was anchored in universal structure, not localized hysteria.

#### Scene 2: The Logical Framework

You turned your head slightly toward the squad commander walking beside you—a scarred Lieutenant Commander whose face was pale with suppressed shame.

"Pardon me, sir," you asked politely, your voice calm and soft over the clatter of marching boots. "Why are we capturing these escaped individuals instead of providing them with medical aid and transport?"

The Lieutenant Commander flinched as if struck. He glared at you, his chest heaving under his Marine coat.

"Watch your tongue, recruit!" he hissed under his breath, leaning in close so the nearby guards wouldn't hear. "They are runaway property! It is a direct order from the World Nobles. We don't ask questions if we want to keep our heads—and our families safe."

"I see," you nodded smoothly. "However, does the practice of state-sanctioned human trafficking not directly contradict the foundational principles of Marine Justice?"

The Lieutenant Commander’s teeth ground together so loudly you could hear the enamel stress. He looked away, his voice thick with rationalization.

"They aren't just innocent civilians, Fajar! The World Nobles only take sentenced criminals! These people are felons, traitors, and murderers condemned to hard labor for their crimes against the World Government! It is a legal punishment!"

You processed his statement through your analytical core. 'A legal framework. A severe, draconian judicial sentence imposed upon convicted felons. If it is a structural consequence of proven lawbreaking, it operates within an established societal logic.'

"Understood, sir," you replied, accepting his answer without further argument. "Thank you for the clarification."

#### Scene 3: The Broken Contract

Ten minutes later, your squad turned into a shadowed alleyway behind the western gardens of Pangaea Castle.

Huddled behind a row of marble pillars were the escapees.

There were no hardened warlords or bloodthirsty criminals among them. Cowering in the dirt was a group of malnourished women, several terrified, crying children, and a handful of bruised, exhausted men in torn civilian rags. Around each of their necks was a thick, black steel collar equipped with an internal explosive mechanism. Heavy iron cuffs bound their wrists.

The Marine recruits immediately formed a perimeter, aiming their rifles with trembling hands.

"F-Freeze!" a recruit shouted, his voice cracking with fear and shame. "Don't move!"

The Lieutenant Commander stood frozen, his eyes fixed on the floor, unable to bring himself to look at the children.

You slowly stepped past the line of aiming rifles. You walked over to the huddled group, completely unbothered by the tense atmosphere.

You knelt calmly in front of a young woman who was desperately wrapping her arms around a little girl. They were both shivering violently.

"Good afternoon," you said softly, your [Emotional Filter] projecting a soothing, warm aura that instantly halted the little girl's sobbing. "Forgive the intrusion, but I must ask a procedural question. What was the exact nature of the crime you committed to warrant this sentence?"

The woman looked up at you through tear-filled eyes, bewildered by your polite, gentle tone in the middle of this horror.

"C-Crime...?" she sobbed, clutching her daughter tighter. "We didn't do anything! We are just wheat farmers from a village in the South Blue! Men in black suits came off a ship, burned our homes, and put these iron collars on us! I don't even know what Mary Geoise is!"

You turned your head slightly toward an elderly man sitting next to her, whose hands were raw and bleeding from heavy labor. "And you, sir? What law did you break?"

"None!" the old man wept, shaking his head in absolute despair. "I was a shipwright in Water 7! A Celestial Dragon saw my wood carving on the docks, said he liked it, and his guards chained me up and dragged me away! We aren't criminals! We're just toys to them!"

#### Scene 4: The Demolition

You sat back on your heels.

Your mind ran a final structural calculation. 'The premise given by the military hierarchy was a lie. This is not judicial punishment. It is arbitrary, unsanctioned predation. The legal structure is nonexistent. The contract is void.'

"Fajar! What are you doing?!" the Lieutenant Commander yelled from behind you, his voice tight with panic. "Get away from them! The guards are coming!"

You didn't answer him. You didn't raise your voice. You didn't project an ounce of killing intent.

You simply reached out a single, steady hand toward the heavy steel explosive collar around the young woman's neck.

"Do not be afraid," you whispered gently to her. "Hold still."

You didn't draw a blade. You didn't use a hammer. You simply placed your thumb and forefinger against the thick, reinforced steel band.

Instantly, you channeled [Internal Destruction]—the apex form of Armament Haki—and overlaid it with a passive thread of [Reality Domination]. A subtle, razor-thin black spark flashed deep within the steel.

Visually, it looked as effortless as Silvers Rayleigh casually removing an explosive collar in the Human Auction House.

You flexed your fingers slightly.

CLICK.

The internal firing pin and gunpowder inside the collar were instantaneously vaporized at a molecular level before they could ignite. A millisecond later, the solid, two-inch-thick steel band snapped in two like dry chalk.

The heavy metal collar fell away from her neck, clattering uselessly onto the marble floor.

Before the surrounding Marines could even process what had just happened, you reached out with your left hand, lightly gripping the iron cuffs binding the woman's wrists. With a gentle, effortless twist of your wrist, the solid iron shattered into fine metallic dust.

You stood up smoothly, looking down at the broken chains at your feet.

The contract was broken. The structure was rotten. And you were about to apply kinetic force.

### Chapter 7: The Kinetic Riot

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3) - Status: Insubordinate
Active Modules:

[Phase I: Functional Dynamics]: Calibrated for zero-casualty crowd control. Non-lethal kinetic redirection active.

[Tier 6: Sensory Domain (Passive)]: Mapping structural layout of Mary Geoise and tracking incoming high-level biological signatures.

#### Scene 1: The Limit of Assistance

The shattered pieces of the explosive collar clattered against the pristine marble floor.

The young woman stared at her freed wrists, then up at you, her eyes wide with a mixture of profound awe and absolute terror. The other slaves huddled around her, unable to comprehend that a Marine—a mere Seaman—had just casually destroyed the unbreakable chains of the Celestial Dragons.

"Fajar..." the Lieutenant Commander choked out, his rifle shaking in his hands. "Do you have any idea what you've just done? You've doomed us all!"

You ignored the officer. You looked down at the freed slaves, your expression completely calm and polite.

"I have severed your structural bindings," you stated clearly. "However, I must inform you that this is the maximum extent of my current assistance. Guaranteeing your safe passage off this mountain requires logistical resources and a localized authority that I do not currently possess."

You pointed toward the eastern gates of the plaza. "I suggest you utilize your newly freed kinetic energy to escape as quickly as possible. The structural integrity of this area is about to severely degrade."

The slaves didn't need to be told twice. With tears of gratitude streaming down their faces, they scrambled to their feet and sprinted down the alleyway, disappearing into the labyrinth of the Holy Land.

#### Scene 2: Perfect Pacifism

"FIRE! BRING HIM DOWN!" the Lieutenant Commander screamed, tears in his eyes as his duty overrode his conscience.

Thirty Marine rifles fired simultaneously. A hail of lead bullets tore through the air, aimed directly at your center of mass.

You did not use Haki. You did not raise a barrier. You simply utilized [Primal Movement].

Your body blurred. You stepped through the gaps in the ballistic trajectory, your movements so perfectly calculated that you wasted zero caloric energy. You appeared directly in front of the Lieutenant Commander before the smoke from his rifle had even cleared.

"I understand your position, sir," you said softly. "But I will be taking my leave now."

You struck his vagus nerve with a gentle, precise tap of your index finger. The Lieutenant Commander's eyes rolled back, and he collapsed to the marble floor, completely unconscious but structurally unharmed.

The remaining Marines charged with their cutlasses drawn. They were not strong enough to warrant your serious attention. You flowed through their ranks like water. You grabbed a swinging wrist, redirected the momentum, and tossed a recruit into three others. You applied perfectly measured pressure to carotid arteries, putting guards to sleep in fractions of a second.

Within thirty seconds, an entire squad of elite Marine guards was piled on the ground, snoring softly.

Zero casualties. Zero permanent damage. Absolute efficiency.

#### Scene 3: Indiscriminate Freedom

You stepped out of the alleyway and walked onto the main boulevard of the Celestial Dragon residential district.

You proceeded with a singular, systematic objective: structural demolition of the slavery system.

As you walked, hundreds of guards swarmed you. You dismantled them effortlessly. You swept their legs, flipped giants over your shoulders using their own weight against them, and disarmed swordsmen with casual flicks of your wrists. It was a masterclass in unarmed, non-lethal martial arts.

Along the way, you encountered more slaves. Some were commoners. Some were captured pirates. Some were hardened criminals. It did not matter to you. The structure of their imprisonment was flawed, so you demolished it. You walked through the streets indiscriminately snapping steel collars and shattering iron chains, leaving a trail of stunned, liberated people who immediately fled in the chaos.

"INSOLENCE! FILTHY MARINE DOG!"

A fat, grotesque man wearing a bubble over his head waddled into the street, pointing a golden flintlock pistol at you. A Celestial Dragon. "I am Saint Charlos! Bow your head and die—!"

He pulled the trigger.

You raised your hand, catching the bullet perfectly between your index and middle fingers. The kinetic force of the lead slug dissipated instantly against your skin.

You walked up to the screaming World Noble. He tried to run, but he was far too slow. You didn't punch him. You simply placed your palm against his forehead and pushed. The precisely calculated kinetic wave bypassed his skull and gently rocked his brain against his cranium, inducing an immediate, painless concussion.

The Celestial Dragon hit the ground like a sack of flour, completely unconscious.

#### Scene 4: The Silent Watchers

High above the chaos, standing on the balcony of Pangaea Castle, a cloaked figure watched the plaza below.

A member of the God's Knights.

The knight’s hand hovered over the hilt of his supreme grade blade, but he did not draw it. Through his own advanced Observation Haki, he was analyzing your riot.

"Fascinating," the knight murmured, a cruel smirk crossing his face. "He possesses the strength to level this entire district, yet the mortality rate is at absolute zero. He isn't trying to assassinate the Nobles or slaughter the guards. He is simply breaking the collars and putting our soldiers to sleep."

Another knight stepped out of the shadows. "Should we intervene? He struck Saint Charlos."

"No," the first knight commanded, crossing his arms. "This isn't an act of war; it is a structural humiliation. He is proving that the World Government's standard forces cannot even stop a single Seaman Recruit who refuses to kill. Let the Marines clean up their own rogue dog. We do not dirty our hands unless lethal force is required."

The God's Knights stepped back into the shadows, allowing the riot to continue uninterrupted.

#### Scene 5: The Approaching Light

Back at the Marineford communications center, the emergency Den Den Mushi was screaming so loudly it sounded like it was dying.

"THE HOLY LAND IS COMPROMISED! HUNDREDS OF SLAVES HAVE BEEN LIBERATED! THE GUARDS HAVE BEEN PACIFIED WITH ZERO CASUALTIES! REQUESTING IMMEDIATE, OVERWHELMING FORCE!"

Fleet Admiral Sengoku stared at the tactical map. He had no choice. The Holy Land was burning—not with fire, but with sheer, unstoppable rebellion.

"Initiate Buster Call protocols for the Mary Geoise perimeter," Sengoku ordered, his voice heavy with dread. "Target is a single Seaman Recruit. Designation: Fajar Purnama."

Thousands of miles away, high in the clouds above the Red Line, the air began to hum with a blinding, golden radiance.

A massive fleet of Marine battleships was ascending the reverse mountain currents, led by five elite Vice Admirals. And standing at the bow of the lead ship, moving at the speed of light itself, was a man in a yellow striped suit.

"Moshi moshi...?" Admiral Borsalino spoke into his wrist-mounted Den Den Mushi, his voice carrying its usual slow, mocking drawl. "A Seaman Recruit causing all this trouble...? How completely terrifying. I suppose I'll have to give him a strict talking to..."

A flash of blinding light illuminated the sky. The Admiral was on his way.

### Chapter 8: The Refraction of Light

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3) - Status: Omega-Level Threat
Active Modules:

[Phase II: Advanced Haki Equivalents]: Spatial Compression, Intent Sensing (Pre-Cognitive overlay), Reality Domination (Maximum Output).

[Combat Parameters]: Safety limiters disengaged. Lethal force still restricted; absolute pacification authorized.

#### Scene 1: The Fall of the Vanguard

The Buster Call is the ultimate symbol of the World Government's wrath. Ten massive battleships, five elite Vice Admirals, and thousands of highly trained Marine soldiers, all deployed to erase a single target from the map.

They arrived at the Red Line's peak via the mechanized bubble-lifts, storming the marble courtyards of Mary Geoise with deafening battle cries. Cannons roared, tearing the pristine gardens of the Celestial Dragons into smoking craters.

You stood in the center of the plaza, dusting off your white Seaman uniform.

"Target acquired!" a Vice Admiral roared, his sword coated in jet-black Armament Haki as he led the charge of hundreds of Captains and Commanders. "Eradicate the traitor in the name of Absolute Justice!"

You analyzed the incoming kinetic wave. Holding back against this volume of force would be structurally inefficient. It was time to fight seriously.

"I admire your dedication to your orders," you stated, your voice projecting clearly over the deafening artillery fire. "But your foundation is flawed. Please, take a seat."

You unleashed [Reality Domination].

It was not a standard burst of Conqueror's Haki. You didn't just project willpower; you projected the localized atmospheric weight of a collapsing star. The air itself seemed to crack and shatter, turning a deep, terrifying crimson.

The front line of thousands of Marines didn't just fall unconscious—they were physically slammed into the marble by the sheer gravitational pressure of your soul. The stone beneath them spider-webbed.

The five Vice Admirals fought through the pressure, leaping into the air to strike you from all sides with Rokushiki techniques and Haki-infused blades.

You didn't blink. You bypassed standard biomechanics and tapped into [Spatial Compression]. You stepped perfectly into the microscopic blind spots of their combined assault. With graceful, blindingly fast palm strikes, you shattered their Haki barriers, struck their pressure points, and fractured their equilibrium.

Within four seconds, all five Vice Admirals crashed into the rubble, completely incapacitated. The Buster Call vanguard had been pacified.

#### Scene 2: Catching a Sunbeam

"Moshi moshi... how terrifying..."

A blinding golden cross flashed in the sky above you. Admiral Borsalino materialized from the light, floating effortlessly in the air. His signature striped suit was unwrinkled, but behind his tinted glasses, his eyes were narrowed with genuine caution.

"I didn't think a Seaman Recruit could put my Vice Admirals to sleep so quickly," Borsalino drawled. "Have you been eating your vegetables, Fajar-kun? Or perhaps a rather nasty Devil Fruit?"

"Neither, Admiral Borsalino," you replied politely, looking up at him. "I merely understand the physics of this reality better than they do."

"Physics, you say? Let's test that."

Yata no Kagami. Borsalino formed a mirror of light, bouncing a beam off the surrounding buildings to blindside you. He traveled through the beam at the speed of light, his leg glowing with catastrophic energy as it swung directly toward your head. "Speed is weight. Have you ever been kicked at the speed of light?"

To a normal human, it was an inescapable execution.

To your [Tier 6: Intent Sensing], light was just another wave operating within a measurable spectrum. Because Borsalino had to convert his mass to light and back to mass to strike, there was a 0.001-second window where his trajectory was absolute and unchangeable.

You didn't try to dodge. You raised your left hand, coating it in a dense, swirling vortex of [Internal Destruction] Haki.

BOOM!

The shockwave leveled every remaining building in a one-mile radius, vaporizing the marble and sending the unconscious Marines rolling away in the tempest.

When the dust cleared, you were still standing in the exact same spot. Your left hand was wrapped firmly around Borsalino's glowing ankle. You had caught a light-speed kick.

Borsalino's eyes widened in sheer, unadulterated shock. "Oh my..."

"Speed is indeed weight, Admiral," you agreed calmly, your grip tightening like a vise. "But light is subject to refraction. And your mass is poorly distributed."

You twisted your hips, applying maximum kinetic transfer. You swung the Admiral of the Marines like a ragdoll and slammed him directly into the plaza floor.

Borsalino coughed up blood as the stone cratered beneath him. He instantly dissolved into light to escape your grip, reforming fifty yards away, breathing heavily. He wiped his mouth, the mocking smile completely gone from his face.

You took a calm step forward, closing the distance instantly. For the next two minutes, the Holy Land shook. Borsalino unleashed a torrent of laser blasts and light-speed strikes, but you systematically dismantled his offense. You redirected his lasers into the sky, parried his light-sword (Ama no Murakumo) with your bare, Haki-coated hands, and landed heavy, echoing blows against his chest.

Borsalino was being overwhelmed. The invincible man of light was being structurally dismantled by a Seaman Recruit.

#### Scene 3: The Magma Meteor

Just as you prepared to deliver a localized kinetic strike to sever Borsalino's consciousness, the atmospheric temperature spiked by three hundred degrees.

The sky above Mary Geoise didn't just turn red—it began to rain liquid fire.

"RYUSEI KAZAN!"

Massive fists of molten magma rained down from the heavens. You gracefully side-stepped the apocalyptic bombardment, allowing the magma to melt the stone where you had just stood.

Through the thick, black smoke, a towering figure marched into the plaza. Admiral Sakazuki (Akainu) had arrived, and his fury was palpable. Smoke poured from the collar of his red suit, and his right arm was completely transformed into bubbling, dripping magma.

"You miserable, traitorous dog," Sakazuki growled, his voice vibrating with absolute, lethal intent. "You dare defile the Holy Land? You dare humiliate the Marines?"

You looked past Sakazuki. Out on the oceans far beneath the Red Line, the horizon was completely blackened by sails.

It wasn't a standard Buster Call. Sakazuki had invoked an unprecedented military mobilization. Thirty heavy battleships—three times the size of a standard Buster Call—were locking their coordinates onto the mountain. He had brought an entire armada to crush you.

"Admiral Sakazuki," you greeted politely, your breathing perfectly steady despite the extreme heat. "A localized mobilization of thirty dreadnoughts and two Admirals. Your tactical response is highly commended."

"Shut your mouth!" Sakazuki roared, the ground melting into slag beneath his boots as he prepared to charge. "I will burn you down to your very soul!"

Borsalino wiped the blood from his chin, his body glowing as he moved to flank you. "Don't underestimate him, Sakazuki. He just bypassed my light."

You stood between the blinding light and the apocalyptic magma. You centered your breathing, aligning your spine and unlocking the deepest reserves of your multiversal vessel.

The true test of this reality’s structure had begun.

### Chapter 9: The Calibration of Tomorrow

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Vessel Condition: 42% Structural Integrity (Multiple lacerations, thermal burns, blunt force trauma).
Active Modules:

[Phase II: Haki Equivalents]: Advanced Armament (Maximum Output).

[Tier 6: Sensory Domain]: Undergoing forced evolutionary stress. Attempting Pre-Cognitive Calibration.

#### Scene 1: The Calculus of Survival

The Holy Land was no longer a city of marble; it was a crucible of apocalyptic violence.

The sky tore open as thirty heavy battleships unleashed a synchronized Buster Call bombardment. Hundreds of explosive shells rained down every second. Amidst the deafening artillery, Admiral Borsalino moved as an omnipresent grid of blinding, ricocheting light, while Admiral Sakazuki turned the very ground into a churning ocean of liquid magma.

You were in the center of the meat grinder.

A barrage of light-speed kicks slammed into your guard, the sheer kinetic weight fracturing the marble beneath your boots. Before you could redirect Borsalino’s momentum, Sakazuki was there, driving a massive molten fist directly into your flank.

You twisted, coating your arm in a dense layer of [Internal Destruction] to parry the blow, but the ambient heat and the sheer mass of the attack overwhelmed your localized defense. The magma seared through your Seaman coat, burning your skin. A split second later, a cannonball exploded directly against your back.

You were thrown through the air, crashing through three stone pillars before skidding to a halt in the rubble.

You stood up slowly. Your white uniform was dyed crimson. Blood poured from a deep gash on your forehead, blinding your left eye, and your breathing was heavy with the scent of ozone and sulfur. You were taking immense damage.

Yet, your [Tiān Mó Dà Huà Jué] kept your mind in a state of absolute, chilling tranquility.

'Structural analysis,' you calculated, wiping the blood from your chin. 'My vessel's physical output is sufficient, but my reaction speed is gated by linear time. To bypass a localized mobilization of this magnitude, I must transcend the present.'

In the realities of this world, Haki bloomed in the most extreme conditions of battle. You decided to treat this brutal, overwhelming onslaught not as an execution, but as a necessary evolutionary pressure to polish your [Sensory Domain].

#### Scene 2: A Glimpse of the Future

"DIE, TRAITOR!" Sakazuki roared, leaping high into the air. Both of his arms expanded into colossal, bubbling meteors of magma, poised to annihilate the entire plaza. Borsalino simultaneously positioned himself in the sky, crossing his fingers to unleash a devastating barrage of Yasakani no Magatama light jewels.

You closed your eyes.

You stopped trying to track their physical movements. You stopped listening to the cannon fire. You pushed your [Intent Sensing] past the boundaries of the present moment, extending your spiritual consciousness into the immediate, fluid architecture of the future.

Tick.

In your mind's eye, the world turned gray. You saw the magma meteors fall. You saw the exact trajectory of every single light beam. You saw where the cannonballs would strike exactly 2.5 seconds before the triggers were even pulled.

You opened your eyes. The future had been downloaded into your consciousness.

You took a single, perfectly calibrated step to the left.

Borsalino’s light barrage struck the exact space you had just occupied, obliterating the ground. You sidestepped again, and Sakazuki’s magma fists crashed harmlessly past your shoulders. Moving with a terrifying, ghost-like fluidity, you flowed through the apocalyptic crossfire.

You coated your fist in black lightning and struck upward, perfectly intercepting Sakazuki’s jaw before he could even register your movement. The Admiral was sent flying backward into his own magma pool. You spun, catching Borsalino’s light-sword in your bare, Haki-coated hand, and delivered a devastating palm strike to his chest, knocking the breath from his lungs.

A clear, mathematical path to the edge of the Red Line appeared in your vision. You had succeeded. You could see the future. You had the hope to fight back, to break the perimeter, and to escape into the ocean below.

You bent your knees, preparing to launch yourself toward freedom.

#### Scene 3: The Cold Ambush

Then, your future sight went completely blank.

There was no intent. There was no biological aggression. There was only a sudden, absolute absence of warmth.

Admiral Kuzan knew exactly what you were capable of. He had watched you at Marineford. He knew that if he relied on his usual, massive Devil Fruit displays—summoning giant ice birds or freezing the air—your newly polished senses would detect the atmospheric shift instantly.

So, Kuzan abandoned his usual fighting style. He focused entirely on absolute stealth.

From the thick smoke of the cannon fire, a shadow materialized directly in your blind spot. Kuzan did not project an ounce of killing intent. He compressed all of his Devil Fruit power into a single, highly condensed ice gauntlet over his right hand. Over that, he overlaid his maximum Armament Haki, and finally, the volatile, black-red lightning of his own Advanced Conqueror's Haki.

It was a strike born of sheer, desperate duty.

You realized it a fraction of a second too late. Your future sight hadn't caught him because he had completely suppressed his emotional and spiritual footprint.

You snapped your arms up, crossing them over your chest and rapidly condensing every ounce of your [Armament Equivalent] to block.

DOOOOOOM!

The impact was deafening. Kuzan’s fist connected with your guard. The kinetic force was catastrophic, completely shattering the ambient air pressure and generating a shockwave that cleared the smoke from the entire plaza.

Your guard held, but the sheer momentum of the strike, combined with the Advanced Conqueror's Haki, was too much. Your boots left the ground. You were blown backward like a cannonball, skipping violently across the marble courtyard, crashing through a ruined archway, and slamming into the base of the Pangaea Castle wall.

#### Scene 4: Ice Age

You fell to your knees, coughing up a violent spray of blood. Your arms were entirely numb, encased in a layer of absolute zero frost that was rapidly spreading across your chest.

Before you could stand, the onslaught resumed.

"DON'T LET HIM RECOVER! FIRE!"

The battleships unleashed another synchronized volley. Sakazuki, furious and bleeding from the mouth, hurled a massive wave of magma directly at you. Borsalino rained down a concentrated beam of light.

You had no time to dodge. You had no space to counter. You curled your body inward, pulling your knees to your chest, and hardened every single cell in your vessel with maximum defensive Haki. You became an impenetrable, localized bunker, enduring the horrific bombardment as the world exploded around you.

The heat, the light, the concussive force—you bore it all, waiting for a fraction of a second to reset your posture.

Then, the explosions stopped.

The smoke parted. Admiral Kuzan walked slowly toward you. His white suit was singed, and the ice gauntlet on his hand was dripping with condensation. His face was entirely hidden in the shadow of his curly hair, but through your [Sensory Domain], you could feel the crushing, agonizing weight in his chest.

He didn't want to do this. He respected you. But he was a Marine Admiral, and the order of the world demanded your pacification.

"Arara..." Kuzan whispered, his voice trembling slightly with a heavy, profound sorrow. "You really are a monster, Fajar. But the structural integrity of this world... it can't handle you yet."

You looked up at him through your bloodstained vision. You didn't show anger. You gave him a small, respectful nod of acknowledgment.

Kuzan placed his hands against the ground.

"ICE AGE."

A localized, absolute-zero freeze erupted from his palms. It didn't just freeze the plaza; it instantly encased you in a massive, towering glacier of indestructible, deep-blue ice.

The riots stopped. The cannons ceased firing. The Holy Land fell into a haunting, freezing silence.

Within the heart of the massive ice block, your body remained curled in a defensive posture, perfectly preserved, your eyes closed in deep, forced stasis.

The Seaman Recruit who had shattered the Holy Land was finally pacified. The battle was over, and the descent into the darkest abyss of the world awaited.

### Chapter 10: The Architecture of the Abyss

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3) - Status: Dishonorably Discharged, Maximum Security Prisoner
Location: Impel Down, Level 6 (Eternal Hell)
Active Modules:

[Tier 1: Bio-Maintenance]: Regulating core temperature against residual absolute-zero trauma and ambient freezing conditions.

[Mental Reset]: Engaged. Entering long-term meditative stasis.

#### Scene 1: The Heavy Chains of Order

The descent into the abyss was quiet.

There was no trial. There was no public execution announcement. The World Government could not afford to let the world know that a single Seaman Recruit had shattered the Holy Land, humiliated the Celestial Dragons, and required two Buster Calls and three Admirals to subdue.

You were transported in absolute secrecy, encased in Kuzan's indestructible ice, deep into the bowels of Impel Down.

When the ice was finally thawed enough to move you, the guards did not take any chances. You were dragged into the pitch-black darkness of Level 6, the Eternal Hell. They bound your wrists, ankles, and neck in the thickest, highest-grade Seastone chains the world possessed. They suspended you in the center of a cold, stone cell, ensuring your feet barely touched the floor.

Because you did not possess a Devil Fruit, the Seastone did not drain your stamina or make you weak. It was simply a physical, structural restraint. You could have potentially shattered them with [Internal Destruction], but you calculated that escaping now would only trigger a global war that the innocent people of this world were not ready to survive.

You had accomplished your objective. The slaves were free. The structural rot of the Holy Land had been exposed to the military elites.

You closed your eyes, your [Tiān Mó Dà Huà Jué] filtering out the moans of the legendary pirates chained in the cells around you. You slowed your breathing to one inhalation per hour.

You were completely at peace in the dark. You would wait here.

#### Scene 2: The Zero-Casualty Report

High above the ocean, back in the sunlit world of Marineford, Fleet Admiral Sengoku’s office was suffocatingly tense.

Monkey D. Garp had his hand on the doorknob. He was fully prepared to throw away his rank, his legacy, and his pact with Sengoku to march up the Red Line and pull you out of the fire.

"Garp, stop!" Sengoku ordered, his hand hovering over the golden emergency Den Den Mushi.

The snail began to speak, projecting the exhausted, trembling voice of a high-ranking intelligence officer on the #### Scene at Mary Geoise.

"Report... reporting from the Holy Land," the snail gasped. "The hostile has been pacified. Admiral Kuzan executed a localized Ice Age. The target is currently in transport to Impel Down."

Garp's shoulders slumped. He let go of the doorknob, stepping back as the sheer, crushing reality set in. He was too late. Another good kid, swallowed by the darkness.

"Damage report," Sengoku commanded, rubbing his temples, expecting the absolute worst. "How many Marines did we lose? Did he slaughter the Celestial Dragons?"

"Sir... that is the anomaly," the officer said, his voice thick with disbelief. "The Plaza of the Sun is leveled. The residential district is a crater. But... Fleet Admiral... there are zero casualties."

Sengoku froze. "Repeat that."

"Zero casualties, sir. The vanguard of the Buster Call, the five Vice Admirals, the plaza guards... they were all found completely unconscious. Severe concussions, shattered weapons, but no lethal trauma. Even Saint Charlos... he was merely knocked out. The target fought three Admirals and an entire armada, and he refused to kill a single person."

The Den Den Mushi clicked off.

Sengoku slowly sat down in his chair, the wood creaking loudly in the dead silence of the office. He looked at Garp.

Garp was staring at the floor, a single tear escaping his eye and trailing down his weathered cheek. A massive, trembling smile spread across the Marine Hero's face.

"Bwahaha..." Garp laughed, though it sounded like a sob. "That crazy kid. He didn't just break their chains... he kept his own hands clean. He showed them that their entire foundation is a joke."

#### Scene 3: The Ripples in the Water

The World Government tried to bury the truth, but within the highest echelons of the Marines, the story of the Seaman Recruit who broke the Holy Land spread like a ghost story.

Deep in the Egghead Island laboratory, Dr. Vegapunk stared at the three vials of blood he had managed to draw from you. He dropped his apple-shaped coffee mug, the ceramic shattering on the floor.
"They locked him away..." Vegapunk whispered, tears welling in his eyes. "Fools! Bureaucratic, ignorant fools! They just locked universal homeostasis in a cage! The greatest biological miracle in the history of the world, and they threw him in the dark!"

In the medical ward of Marineford, Sentomaru lay in his bed, staring at the ceiling. He touched the bandages around his ribs. He finally understood the kinetic deflection. 'He wasn't trying to hurt me,' Sentomaru realized quietly. 'He was just showing me that my walls were in the wrong place.'

In the recruit training yard, former Admiral Zephyr stood alone in the moonlight. He looked at the patch of dirt where you had done your push-ups with zero caloric waste. Zephyr took a long drag of his cigar, exhaling a thick cloud of smoke.
"Perfect posture," Zephyr muttered to the night sky. "A perfect soldier. Too perfect for a rotten world."

High in the tactical command tower, Great Staff Officer Tsuru sat at her desk. Her tea had gone completely cold. She looked at her trembling hands. She remembered the infinite, multiversal weight of your soul. She didn't feel relief that you were locked away; she felt a profound, existential dread. She knew, with absolute certainty, that Impel Down was not a prison holding you. It was merely a waiting room you had chosen to sit in.

And down in the coastal tavern, the atmosphere was dead.

Captain Smoker sat at the corner table, his usual cloud of smoke absent. The cigars sat unlit in the ashtray. Across from him, Captain Hina stared into her glass of wine, her rigid posture finally slumping.

"He said he was on the side of good people," Smoker said, his voice raspy, breaking the long silence.

Hina closed her eyes. "Hina remembers."

Smoker clenched his fist, the leather of his glove creaking. He looked out the window, toward the massive Gates of Justice. For the first time in his life, the Marine flag waving in the wind didn't look like a symbol of hope. It looked like a shroud.

"He could have killed them all," Smoker whispered, the fiery rage in his heart hardening into a cold, unbreakable resolve. "He could have slaughtered the brass, the nobles, all of them. But he just broke the collars and took the punishment."

Smoker grabbed his cigars, lighting them both and taking a deep, furious drag. He looked at Hina with burning eyes.

"The structure is rotten, Hina. And I'm not going to stop until I burn out the rot myself."

Epilogue: The Waiting Room

Far below the ocean's surface, in the freezing, absolute darkness of Level 6, the dripping of water echoed endlessly.

You hung from the Seastone chains, suspended in the void. Your physical wounds were already knitting themselves back together through perfect cellular regeneration. Your mind was perfectly clear.

You had calibrated your physical vessel. You had evolved your sensory domain. You had observed the architecture of this world, and you had planted the seeds of true justice in the hearts of those who would one day change it.

Now, time would pass. The world above would shift. A boy with a straw hat would soon set sail.

And eventually, a tired Marine Hero would come down these steps, accompanied by two young recruits, to look at the man who did what the world was too afraid to do.

You breathed in, the cold air filling your lungs.

You were ready for tomorrow.

### Chapter 11: The Myth and the Mandate

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted / In Stasis)

Rank: Seaman Recruit (Class 3) — Record Redacted / Expunged Location: Impel Down, Level 6

Active Modules: * [Tier 1: Bio-Maintenance]: Low-frequency metabolic idling. Core vessel integrity fully restored.

[Tier 6: Sensory Domain (Passive)]: Observing world line vibrations and spiritual echoes from across the seas.

#### Scene 1: The Room of Authority

Deep within the inner sanctum of Pangaea Castle, light filtered through high stained-glass windows, illuminating the five most powerful men in the World Government. The Gorosei sat in quiet, heavy contemplation around their marble table.

On the table lay a single, thin folder. It contained no birth certificate, no bounty poster, and no pirate crew affiliation. It held only Fajar’s initial Marine recruitment form and a broken Seaman Class 3 shoulder patch.

"The repair costs for the residential sector have been covered under the guise of an internal seismic anomaly," Saint Topman Warcury stated, his voice deep and stern. "The slaves who escaped during the blackout have fled into the Grand Line. They spread stories of a Marine who shattered their collars with his bare hands."

"Let them speak," Saint Marcus Mars replied coldly, pacing near the window. "To the common filth, a story of a single recruit overpowering the Holy Land sounds like a bedtime fairy tale or an absurdity born of delirium. No cover-up is necessary for a story no sane civilian would ever believe."

Saint Ethanbaron V. Nusjuro rested his hands on his shoddy-looking katana. "What is far more concerning is the structural flaw in our own military apparatus. A monster of that magnitude was allowed to sit in the recruit barracks mopping decks because our administrative channels require months of service record verification."

"We cannot allow another anomaly to hide behind military red tape," Saint Shepherd Ju Peter agreed smoothly. "If an individual of absurd martial strength enters our forces—whether through recruitment, conscription, or deep-cover placement—they must immediately bypass standard ranks."

Saint Jaygarcia Saturn picked up Fajar's file, tossing it into a small brazier of fire near his chair. The paper curled into black ash.

"Formulate the directive," Saturn commanded. "Effective immediately, the Fleet Admiral is granted executive power to bypass standard promotion timelines for high-level combatants. Emergency promotions, direct officer appointments, and world military drafts are authorized. If a monster appears, put them in a coat before they realize how weak our bureaucracy is."

The five old men watched the ashes burn. They had erased Fajar Purnama from the ink of history, oblivious to the fact that his legacy had just permanently altered the foundation of the World Government's military structure forever.

#### Scene 2: The Closed Briefing at Marineford

In a sealed, soundproof conference room at Marineford, Fleet Admiral Sengoku sat at the head of a heavy wooden table.

Sitting across from him were the three Admirals: Sakazuki, his suit scorched and his arm heavily bandaged; Borsalino, nursing a quiet bruise under his jaw with an ice pack; and Kuzan, who stared silently out the window with his arms crossed over his chest. Great Staff Officer Tsuru stood beside Sengoku, holding a fresh stack of administrative documents.

"The Gorosei have issued a mandate," Sengoku announced, his voice quiet but severe. "From this day forward, the Emergency Merit & Special Draft Protocol is active. Any recruit possessing abnormal combat capability will be fast-tracked straight to officer ranks or assigned via direct high-level appointment. No exceptions. We will never again hold a monster in the lower ranks."

"A sensible decision," Sakazuki growled, his teeth grinding as his magma Haki flared faintly under his bandages. "If that dog had been placed directly under my command instead of being left to wander the base as a Seaman, I would have broken his insubordination before he ever stepped foot near the Red Line."

"Arara... I doubt that, Sakazuki," Kuzan said softly, not looking away from the ocean. "He didn't break because he was rebellious. He broke the collars because he saw a rotten foundation. Rank wouldn't have changed a single thing."

Borsalino took a slow sip of tea, his usual lighthearted tone completely absent. "He didn't just counter light-speed, Sengoku-san... he read my kinetic trajectory before I even converted my body into light. And he did it all without lethal intent. If he had wanted to kill us... the Holy Land wouldn't be standing."

Silence descended upon the room. The three Admirals, the greatest military power of the Marines, knew the terrifying truth that the Gorosei refused to admit: Fajar Purnama had not been defeated by their strength. He had simply fulfilled his purpose, spared their lives, and gracefully allowed himself to be placed in the dark.

#### Scene 3: Whispers in the Deep

As months bled into the sea, the story of what happened on the mountain did not die. It drifted across the oceans like a phantom breeze, passed down in quiet corners where the World Government’s ears could not reach.

Deep beneath Impel Down, in the hidden paradise of Level 5.5—Newkama Land—Emporio Ivankov leaned against a giant wine barrel, listening to a newly arrived prisoner tell a wild story about his capture.

"I'm telling you, Iva-san!" the pirate stammered, holding a cup of juice. "My crew's former captain was a slave in Mary Geoise! He said he saw it with his own eyes! A guy in a basic Marine recruit cap just walked up to a noble, put him to sleep with a tap on the head, and snapped explosive collars like dry twigs! He fought all three Admirals just to buy time for the slaves to run!"

Ivankov blinked his massive eyes, bursting into a booming laugh. "HEEE-HAW! What a ridiculous rumor! A Marine Seaman defying the Celestial Dragons and saving slaves out of pure kindness?! The World Government is bad, but your imagination is even crazier! Sounds like a legend invented by drunk sailors!"

Yet, deep down, Ivankov mentally filed the story away, wondering if Dragon’s Revolutionary Army had a phantom ally lurking in the dark.

In the Underground markets of the New World, brokers laughed over drinks about the "Ghost of the Holy Land"—a mythical Marine who had allegedly beaten up Admiral Kizaru and vanished into thin air.

To the world, Fajar Purnama was a myth, an impossible tale shared by runaway slaves around campfires.

#### Scene 4: The Epilogue of the Prologue

Deep in Level 6 of Impel Down, surrounded by eternal darkness and heavy Seastone chains, your vessel rested in absolute tranquility.

The Seastone hummed against your skin, but your multiversal core was unaffected. Through your passive [Sensory Domain], you felt the shifts in the world above:
You felt the administrative changes rippling through the Marines—paving the way for future monsters like Fujitora, Ryokugyu, and Vergo to enter the ranks on fast tracks.
You felt the growing resolve in Smoker's heart, the heavy burden in Kuzan's soul, and the quiet pride in Garp's mind.

You had walked into this reality as an unknown anomaly. In a matter of weeks, you had calibrated your physical vessel to its local physics, unlocked your future-sight Haki, freed hundreds of innocent souls, and permanently altered the sociopolitical landscape of the military—all while wearing the uniform of a basic Seaman Recruit.

Your breathing remained steady, locked at one breath per hour.

The prologue of your journey in this world was complete. The foundation had been laid. The seeds had been planted.

Now, you would sleep in the dark, waiting for the era of the Straw Hat to begin.

## Impel Down Arc

### Chapter 12: The Echoes of a Dying Era

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted / In Stasis)
Rank: Redacted
Location: Impel Down, Level 6 (Eternal Hell)
Time Elapsed: Approaching the Summit War Era
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Monitoring localized emotional distress and high-level biological signatures approaching the sector.

[Mental Reset]: Disengaged. Stasis lifting.

#### Scene 1: The Gears of War

Time in the abyss of Level 6 was measured only by the dripping of condensation and the occasional agonizing groan of a forgotten pirate. But in the world above, the gears of a catastrophic era had begun to turn.

The structural equilibrium of the world had ruptured.

Portgas D. Ace, the Second Division Commander of the Whitebeard Pirates, had been defeated by Marshall D. Teach—"Blackbeard"—on Banaro Island. Handed over to the World Government to secure Teach's position as a Warlord of the Sea, Ace’s capture was not merely the arrest of a pirate. It was a declaration of war.

The Marines had announced a public execution to take place at Marineford. In response, the absolute apex of the pirate world was mobilizing. Edward Newgate, Whitebeard, the strongest man in the world, was gathering his armada. The Seven Warlords were summoned. The impenetrable Gates of Justice were locked tight. The world held its breath, waiting for the ocean to boil in what would be known as the Paramount War.

And at the very bottom of the ocean, in the pitch-black silence of Impel Down's Eternal Hell, the catalyst for this impending apocalypse was chained to the wall.

#### Scene 2: The Fire in the Dark

You opened your eyes.

Your [Tier 1: Bio-Maintenance] smoothly brought your core temperature and heart rate back to active baseline. You had rested in this heavy Seastone harness for quite some time, completely unbothered by the darkness. If you wished, you could snap the chains right now with a single localized application of [Internal Destruction], but the time for kinetic intervention had not yet arrived.

You shifted your gaze slightly across the damp, stone corridor.

Suspended in the cell opposite yours was a young man battered, bloodied, and bound in heavy chains. Portgas D. Ace.

Through your [Sensory Domain], you could feel the violent, chaotic storm raging within his biology. It wasn't just physical trauma from his battle with Blackbeard; it was an agonizing cocktail of guilt, fury, and profound despair. His flames were suppressed by the Seastone, but his spirit was burning itself alive from the inside out.

You did not speak to him. You merely observed the structural tragedy of a young man crushed beneath the weight of a world that hated him for the blood in his veins.

Then, the heavy iron doors of Level 6 echoed with the sound of turning gears.

#### Scene 3: The Sins of the Father

Heavy footsteps echoed down the corridor.

A massive figure stepped into the dim light of the torches. Vice Admiral Monkey D. Garp stood before Ace's cell. He wasn't smiling, nor was he carrying his usual bag of crackers. He looked incredibly old, his shoulders burdened by a lifetime of compromises.

You remained perfectly silent in the shadows of your own cell, your [Emotional Filter] parsing the immense grief radiating from the Marine Hero.

Garp sat heavily cross-legged on the cold stone floor, just outside the bars of Ace's cell. For a long time, neither of them spoke.

"Kill me..." Ace finally croaked, his voice raw and trembling. He kept his head down, his dark hair hiding his eyes. "Just kill me now... old man."

Garp let out a hollow, painful sigh. "Don't be an idiot. Even if I killed you right now, it wouldn't stop what's coming. We've angered the ruler of the seas. No one can stop Whitebeard now."

Ace bit his lip so hard a drop of blood fell to the floor. "I didn't listen to him... I ignored his orders and ran off on my own. And now I've dragged everyone into this!"

Garp looked at the boy he had raised, his chest tight with a terrible, suffocating sorrow. "When Roger was in that cell, right before he died... he asked me to protect you. He said a child shouldn't have to carry the burden of his father's sins. I thought I could make you and Luffy into fine Marines... but you both had to go and choose the path of outlaws."

"I owe that man nothing!" Ace suddenly yelled, rattling his heavy Seastone chains in a violent burst of anger. He finally looked up, his eyes burning with tears and furious defiance. "I took the name Portgas because it's the name of the mother who gave her life to bring me into this world! I have no memories of Gol D. Roger! I owe him nothing!"

Ace's voice echoed off the damp stone walls, absolute and unyielding.

"My only father... is Whitebeard!"

Garp closed his eyes, his massive hands resting on his knees. He didn't argue. He knew that the structural damage to Ace's soul had been done the moment the world decided he deserved to die for existing.

#### Scene 4: The Unforeseen Guests

While the grandfather and grandson sat in their agonizing silence, your [Sensory Domain] registered three additional biological signatures standing respectfully down the hall, keeping their distance from Garp's private tragedy.

They stepped forward, their boots clicking softly against the stone.

Admiral Kuzan walked into the faint light, a heavy winter coat draped over his shoulders, his breath misting slightly in the damp air. Flanking him on either side were two young Marines. Coby, wearing a Chief Petty Officer uniform, looked visibly terrified by the oppressive atmosphere of Level 6. Next to him, Helmeppo swallowed hard, his hand resting nervously on the hilt of his kukri blades.

They hadn't come for Portgas D. Ace.

Kuzan stopped in front of your cell. He looked into the absolute darkness where you hung from the ceiling, his lazy eyes sharp and observant. Coby and Helmeppo peered into the shadows, trying to get a look at the myth—the phantom Seaman who had shattered the Holy Land and spared an entire armada.

Kuzan reached into his coat and exhaled a long breath of cold air.

"Arara..." Kuzan broke the silence, looking directly at you. "You're still breathing in there, Fajar?"

#### Scene 5: The Privilege of the Strong

"Arara..." Kuzan’s breath misted in the damp air as he peered into the pitch-black cell. "You're still breathing in there, Fajar?"

A faint clinking of heavy Seastone chains echoed from the shadows.

"My respiratory system is functioning optimally, Admiral," you replied, your voice perfectly calm and polite, devoid of any resentment. "In fact, I find this environment quite agreeable. The upper levels are loud, filled with boiling blood, beasts, and unnecessary theatrics. Down here, there is only silence. I suppose true peace is a privilege reserved only for the strong."

Coby and Helmeppo shivered, exchanging terrified glances. The sheer casualness of your tone, coming from a man suspended in the most hellish prison in the world, was deeply unsettling.

Kuzan rubbed the back of his neck, the ice in his veins feeling unusually heavy. "Look, about what happened on the plaza... I apologize. Freezing you like that—"

"You do not need to apologize," you interrupted gently, stepping slightly into the faint torchlight so he could see your serene smile. "You acted according to the structural parameters of your duty. You pacified a threat with minimal collateral damage. You did absolutely nothing wrong, Kuzan."

Kuzan sighed, leaning against the cold iron bars. "I appreciate that. But there's something that’s been bothering me. Something I need to ask you directly."

The Admiral’s lazy demeanor faded, replaced by absolute, piercing seriousness.

"Why didn't you kill anyone?" Kuzan asked. "You had the power to level the entire plaza. You could have slaughtered the Celestial Dragons and annihilated the Vice Admirals. Why did you hold back?"

You tilted your head slightly. "Do you and Vice Admiral Garp unleash your maximum Haki when disciplining a standard recruit? Or do you merely apply enough force to correct their posture?"

Kuzan blinked. "You're saying... you didn't need to?"

"The guards and the nobles were structurally insignificant," you answered smoothly. "Lethal force would have been a waste of caloric energy and a violation of my personal ethics."

"But what if you hadn't held back?" Kuzan pressed, his brow furrowing. "If you had taken extreme measures... if you had fought with everything you had right from the start... wouldn't you have been able to escape?"

The silence in Level 6 suddenly deepened. In the surrounding cells, legendary pirates who had been listening in on the conversation held their breath.

"No," you replied softly. "Taking extreme measures would have mathematically guaranteed my eradication."

Kuzan’s eyes widened. "What?"

"I did not survive because I am invincible, Kuzan. I survived because I took things moderately," you explained, your [Sensory Domain] flaring slightly to emphasize your words. "While I was breaking the collars, I sensed them. The God's Knights. They were watching from the balconies, assessing my threat level. By choosing non-lethal pacification, they deemed it a 'Marine problem' and chose not to intervene."

You paused, your voice dropping to a low, chilling whisper that carried an unfathomable multiversal weight. "And deeper within Pangaea Castle... there was something else. A biological signature so archaic and dense it distorted the local gravity of my sensory domain. Had I escalated to lethal, apocalyptic force... that ancient shadow would have moved. And I am not yet fully calibrated to survive it."

A collective, shuddering chill swept through Level 6. The most vicious, bloodthirsty pirates in the world felt the temperature in their cells plummet. A man who had just treated three Admirals like a sparring exercise had intentionally surrendered because he was terrified of whatever was sleeping at the top of the world.

Kuzan stared at you, his face pale. He slowly nodded, realizing how incredibly fragile the world's balance truly was.

#### Scene 6: The Inevitable Fall

Garp finally stood up from Ace's cell, leaving the weeping young man in the dark, and walked over to stand beside Kuzan.

The Marine Hero looked up at you, his eyes filled with profound exhaustion. "I'm sorry, kid. Sengoku and I... we tried to block the deployment. But the Gorosei bypassed us completely. By the time the paperwork hit my desk, you were already in the Holy Land."

"I am aware, Vice Admiral," you smiled warmly. "I harbor no ill will toward you or the Fleet Admiral. The bureaucracy operated exactly as it was designed to."

Garp gripped the iron bars of your cell, his knuckles turning white. He looked back over his shoulder at Ace, then down at Coby and Helmeppo, and finally back to you.

"I look at you, and all I can see is the past," Garp muttered bitterly. "Dragon was the first to see the truth of this world, and he left us. You were the second. I always wanted Ace and Luffy to be great Marines... but seeing you chained up like this, I realize that if they had put on the uniform, they would have just ended up the third and fourth. Good hearts always get punished by this system."

You processed his profound guilt through your [Emotional Filter], generating a deeply empathetic response.

"I must respectfully disagree, Vice Admiral," you consoled him, your voice radiating absolute certainty. "Ace and Luffy might not have suffered my fate. They are known entities. They are your family. The system would have hesitated."

You gestured with your chin toward the two young Marines standing nervously by Kuzan. "Look at Coby and Helmeppo. They started at the very bottom. Because they are climbing the ranks organically under your direct supervision, they have your shadow to protect them while they grow. You can shield them from the rot."

Garp looked at the two boys, who straightened their posture instantly, their eyes shining with dedication.

"I was an anomaly," you continued smoothly. "I entered your structure already possessing catastrophic strength. No amount of supervision could have shielded me from the Gorosei's eyes. The mountain would have fallen regardless of when I arrived. It was inevitable."

Garp let out a long, heavy breath, the tight knot in his chest loosening just a fraction. "You're a strange one, Fajar. You're chained in the darkest pit of hell, and you're trying to cheer up the old man who put you here."

"Because you are not at fault, Garp," you stated firmly. "Neither of you are."

You shifted your weight slightly in the heavy Seastone chains, the metal clinking loudly in the quiet corridor. A small, genuine, and impossibly relaxed smile formed on your lips.

"Do not carry guilt that does not belong to you," you said, your voice echoing down the stone hallway, polite but laced with an absolute, terrifying confidence. "Besides... if not soon, then I will see you all again later."

Coby gasped softly, stepping back. Kuzan froze, his observation Haki flaring as he tried to read your intent. Even Garp’s eyes widened.

You hadn't phrased it as a threat, nor as a hope. You had stated it as an irrefutable, mathematical certainty.

The myth of the Holy Land wasn't broken. He was just resting.

#### Scene 7: The Ripple of the Myth

Before Garp, Kuzan, and the two young Marines turned to leave, Fajar offered one final observation.

"Chief Petty Officer Coby. Petty Officer Helmeppo."

The two boys stiffened, standing at perfect attention.

"You both possess a very high ceiling for structural growth," you noted, your [Sensory Domain] easily reading their latent Haki and earnest hearts. "Listen to your Vice Admiral. Train your physical vessels. Do not let the rot of the higher structures infect your foundation. If you do this, you will become the kind of Marines this world actually needs."

Coby swallowed hard, tears unexpectedly pricking his eyes. He bowed deeply. "Y-Yes, sir! Thank you, sir!"

As the group walked back down the dark corridor, leaving you and Ace to the silence of Eternal Hell, Kuzan glanced over his shoulder one last time. The myth of Mary Geoise was real, and he was patiently waiting for the world to catch up to him.

### Chapter 13: The Echoes of the Silver Medalists

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted / In Stasis)
Rank: Redacted
Location: Impel Down, Level 6 (Eternal Hell)
Time Elapsed: Summit War Era - Imminent
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Calibrated to observe localized emotional spikes and physiological stress in surrounding cells.

[Phase I: Functional Dynamics]: Idling. Absolute non-interference protocol engaged.

#### Scene 1: The Knight of the Sea

The heavy iron doors of Level 6 ground open once more. This time, the guards were not escorting a Marine legend; they were dragging a massive, blue-skinned Fish-Man bound in heavily reinforced Seastone.

Jinbei, the First Son of the Sea and one of the Seven Warlords.

He was thrown into a cell adjacent to Ace's, the heavy chains locking him into place. Through your [Sensory Domain], you read Jinbei's biological state: physically bruised, but spiritually unbroken. His heartbeat was a steady, rhythmic drum of pure, unadulterated honor.

"Jinbei...!" Ace rasped, struggling against his own chains to look at his friend. "What are you doing here?! You're a Warlord! You're supposed to protect Fish-Man Island!"

Jinbei let out a heavy sigh, shifting his massive weight against the stone wall. "I refused the World Government's summons, Ace-san. I raised a riot at Marine Headquarters. They want me to point my fists at Oyaji... at Whitebeard. I cannot do it. That man protected my home when no one else would. I would rather rot in this hell than raise a hand against him."

"You idiot..." Ace gritted his teeth, tears of frustration in his eyes. "You threw away your title... your people's safety... for me?"

"I did it for my honor, Ace-san," Jinbei replied stoically. "If Oyaji goes to war for you, the seas will bleed. I tried to stop this madness, but the World Government will not listen to reason."

From your cell in the shadows, you observed this exchange with deep fascination. 'A structural paradox,' you calculated. 'The World Government demands loyalty through legal contracts and titles, yet these pirates demonstrate a far stronger, organic hierarchy built entirely on mutual respect and biological debt. The pirate's foundation is structurally sounder than the law.'

#### Scene 2: The Roar of the Defeated

"Kuhahaha... how touching. It makes me want to vomit."

A raspy, cynical voice drifted from a cell further down the corridor. Sir Crocodile, the disgraced former Warlord of the Sand, sat in the shadows, his golden hook missing, but his arrogant sneer perfectly intact.

"Whitebeard playing the hero to save one of his brats," Crocodile mocked, lighting a cigar he had somehow kept hidden. "You fools don't understand anything. Whitebeard is a relic. If he marches on Marineford, the Navy will crush him. And frankly, that pisses me off. I wanted to take the old man's head myself."

Crocodile's words acted as a spark in a powder keg.

The darkness of Level 6 suddenly came alive with the rattling of chains and the bloodthirsty roars of forgotten monsters.

"WHITEBEARD IS MOBILIZING?!" a massive, shadowy figure roared from across the hall.

"THAT BASTARD! HE TOOK MY CREW! HE TOOK MY LEGS!" another pirate screamed, smashing his Seastone cuffs against the bars. "IF ANYONE KILLS WHITEBEARD, IT’S GOING TO BE ME!"

"ROGER AND WHITEBEARD RUINED MY LIFE! LET ME OUT! I'LL KILL THEM ALL!"

The entire block erupted into a chaotic, deafening cacophony of hatred. These were the "Silver Medalists"—the apex predators of the previous era who had been utterly crushed by the absolute dominance of Gol D. Roger and Edward Newgate.

You filtered out the acoustic noise, analyzing the phenomenon objectively. These men possessed tremendous localized power, but their spiritual architecture was stagnant. They were trapped in the past, their kinetic energy entirely focused on grudges rather than forward progression. They were loud, but structurally hollow.

"Shut up, all of you!" Jinbei roared, his deep voice temporarily cutting through the noise. "You are nothing but cowards hiding in the dark, barking at a man you could never defeat!"

#### Scene 3: The Empress of Amazon Lily

Several days passed. The tension in Level 6 grew so thick it began to affect the ambient temperature.

Then, the heavy doors opened again. The oppressive atmosphere of the Eternal Hell was suddenly pierced by the click of high heels and the heavy, terrified breathing of the Impel Down guards.

Chief Warden Magellan, a massive man dripping with highly toxic purple poison, led the procession. Beside him was Vice Warden Hannyabal, sweating profusely. And walking between them, flanked by Vice Admiral Momonga, was the Pirate Empress herself: Boa Hancock.

Her arrival sent an immediate, biological shockwave through the prison. The inmates of Level 6, starved of light and beauty for decades, slammed themselves against their bars, howling and jeering at her.

"Look at that woman!"
"Come over here, Empress! Keep us company!"
"Tear her clothes off!"

"Silence, you filth!" Magellan roared, a Hydra of purple venom erupting from his back. He glared at the surrounding cells, his poison dripping onto the stone and melting it instantly. "One more word, and I will execute you all where you stand!"

Hancock ignored the screaming pirates entirely. She possessed a strange, rigid pride that masked a very deep, structural trauma—something your [Sensory Domain] registered instantly. She walked directly to Ace's cell.

"So this is Portgas D. Ace," Hancock said, looking down at him with cold, beautiful eyes.

"What do you want?" Ace spat, glaring up at her. "Did you come all this way just to gloat?"

Hancock didn't answer right away. She leaned in closer, turning her back to Magellan and Momonga so they could not see her lips move. The cacophony of the inmates screaming at Magellan provided the perfect acoustic cover.

You focused your [Sensory Domain], isolating the microscopic soundwaves of her whisper.

"Your brother... Monkey D. Luffy... is here," Hancock whispered, her voice barely audible. "He has infiltrated the prison to save you. He is currently fighting his way down."

#### Scene 4: The Anchor Shifts

Hancock stood up, her cold facade returning instantly. "I have seen enough. This place disgusts me. Take me back to the surface, Momonga."

The Vice Admiral nodded, and the procession turned around, marching back up the stairs and leaving the Eternal Hell to its darkness once more.

As soon as the heavy doors slammed shut, Ace's entire demeanor shattered.

The fierce, defiant pirate who had just spent days arguing with Jinbei and Crocodile suddenly began to tremble violently. The chains rattled as he gripped his head, his breathing spiraling into hyperventilation.

"Ace-san?" Jinbei asked, his brow furrowing in deep concern. "What is wrong? What did that woman say to you?"

"Luffy..." Ace choked out, tears finally spilling over his dirt-streaked face. He slammed his forehead against the stone floor in absolute agony. "Luffy is here! That idiot... he broke into Impel Down!"

Jinbei’s eyes widened in sheer shock. Penetrating the world's greatest prison was considered structurally impossible, let alone for a rookie pirate.

Through your observation, you watched the complete collapse of Portgas D. Ace's internal architecture. His despair was no longer anchored to his own impending execution. It was anchored to the horrifying realization that his little brother was currently fighting a hopeless, suicidal battle on the upper floors, coming down into hell to save him.

The board was set. The Straw Hat had entered the structure.

### Chapter 14: The Architecture of a Prison Break

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Redacted
Location: Impel Down, Level 6 (Eternal Hell)
Time Elapsed: Summit War Era - Imminent
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Calibrated to absolute maximum range. Mapping all six levels of Impel Down simultaneously.

[Phase I: Functional Dynamics]: Disengaging stasis lock. Calibrating kinetic output.

#### Scene 1: The Bio-Signature of a "D"

For days, you hung quietly in the darkness of Level 6, your physical vessel locked in absolute stasis, but your multiversal consciousness mapping the entire structure of the Great Underwater Prison.

You had watched the biological signature of Monkey D. Luffy descend through the upper levels. It was a fascinating structure—reckless, lacking in self-preservation, but possessing a kinetic output that defied baseline human mathematics.

Then, you felt his signature collide with the massive, toxic bio-mass of Chief Warden Magellan on Level 4. You observed Luffy’s cellular structure rapidly degrade. The poison melted his nervous system, and his vital signs plummeted to less than one percent. By all localized biological laws, he was dead.

But then, hours later, a shift occurred. You sensed a massive influx of artificial vitality—the hormone manipulation of Emporio Ivankov—injected directly into the dying boy. Even with the hormones, the survival rate should have been microscopic. Yet, Luffy’s sheer, unadulterated willpower forced his cells to regenerate, burning through caloric energy at a terrifying rate until his biological engine roared back to life.

'A structural anomaly,' you mused silently in the dark, deeply impressed. 'His vessel is made of rubber, but his spirit is forged from something completely indestructible.'

#### Scene 2: The Departure

Heavy, rhythmic footsteps echoed down the stone corridor of the Eternal Hell.

The heavy iron doors ground open, and Chief Warden Magellan stepped into the flickering torchlight, flanked by dozens of heavily armed guards.

"Portgas D. Ace," Magellan's deep, echoing voice filled the block. "Your time is up. We are transferring you to the Marine convoy. Stand up."

In the cell opposite yours, Ace did not resist. He was pale, his eyes hollowed out by the sheer weight of his impending execution and the terrifying knowledge that his brother was bleeding for him above. The guards unlocked his heavy Seastone chains, replacing them with transport shackles.

"Ace-san...!" Jinbei cried out, gripping the bars of his cell. Tears streamed down the Fish-Man's face.

Ace didn't look at him. He couldn't. He simply bowed his head and allowed the guards to march him out of the cell.

You observed the procession with clinical detachment. The gears of the world were turning exactly as they were structurally mandated to. Ace was placed into the heavy elevator at the end of the hall. The mechanical winch groaned, and the cage ascended, taking the spark of the upcoming war up toward the surface.

Level 6 was plunged into a suffocating, absolute silence.

#### Scene 3: A Step Too Late

BOOOOOM!

The silence was shattered violently. The thick stone ceiling of Level 6 suddenly cracked, spider-webbed, and exploded downward in a shower of debris and dust.

A figure dropped from the hole, landing heavily on the stone floor. He was covered in blood, panting heavily, and his skin was bright pink, radiating thick clouds of steam from his Gear Second state.

Monkey D. Luffy had finally reached the bottom of hell.

Right behind him, dropping gracefully from the ceiling, were the massive-headed Emporio Ivankov and the stoic, scissor-handed Inazuma.

Luffy didn't waste a single second. He sprinted toward the cells, his eyes frantically scanning the darkness. "ACE! ACE! I'M HERE! I MADE IT!"

He grabbed the bars of Ace's cell, peering into the shadows.

It was empty.

Luffy froze, the steam dissipating from his skin. His eyes widened in sheer disbelief. He had sacrificed his lifespan, fought through literal hell, and pushed his body beyond the limits of death itself.

"Are you... Ace's brother?" a deep voice asked from the adjacent cell.

Luffy whipped his head around, staring at the massive Fish-Man sitting in the dark.

"I am Jinbei," the Warlord said, his voice heavy with sorrow. "You are just a few minutes too late, Luffy-kun. They just put him on the elevator to the surface."

Luffy’s pupils shrank. He grabbed his straw hat, falling to his knees as a scream of pure, unadulterated frustration tore from his throat, echoing endlessly through the Eternal Hell.

#### Scene 4: The Calculus of the Breakout

"Luffy-kun! Please!" Jinbei begged, stepping up to the bars. "I know this is sudden, but I am ready to lay down my life for Ace-san! Please, break me out of here! I will help you save him!"

Luffy looked up, his tears drying instantly, replaced by a fierce, burning resolve. He didn't hesitate. "Do it."

Inazuma stepped forward, his hands transforming into massive, snapping scissors. With a few swift, impossibly sharp snips, the Seastone chains and iron bars binding Jinbei were sliced apart like paper.

"Wait..." a cynical, raspy voice echoed from the shadows further down the hall.

Sir Crocodile stepped into the faint light, a smirk on his scarred face. "If you're going up against Whitebeard and the Marines... you'll need my power. Free me, and I'll carve a path to the surface for you."

Luffy’s eyes immediately narrowed in furious recognition. "You! You're the sand guy! You ruined Vivi's country! I'm not letting you out!"

"Don't be a fool," Crocodile sneered. "A tactical alliance is your only hope of surviving Magellan and the armada above."

Before Luffy could argue, Ivankov stepped past him, a massive, knowing grin stretching across his enormous face. "HEEE-HAW! Let him out, Straw Hat Boy! He won't betray us!"

Crocodile glared at the Revolutionary commander. "Ivankov... mind your own business."

"Oh, but it is my business, Croc-boy!" Ivankov laughed, leaning in close. "Because if you step out of line for even a second... I'll tell everyone your little secret from your past!"

Crocodile visibly stiffened. A drop of sweat rolled down his forehead, his arrogant sneer completely vanishing. "You wouldn't dare."

"Try me!" Ivankov winked dramatically.

"Fine," Luffy grunted, trusting Ivankov's leverage. Inazuma quickly snipped Crocodile's cell open.

As the unlikely alliance finalized their pact in the center of the corridor, a calm, polite voice suddenly echoed from the darkest corner of the block.

"An incredibly efficient utilization of leverage, Emporio Ivankov. However, the structural integrity of this prison is already undergoing a localized collapse."

Ivankov, Inazuma, and Crocodile all froze, whipping their heads toward the pitch-black cell opposite Jinbei's.

You did not raise your voice, but your [Sensory Domain] passively leaked into the atmosphere, carrying that same multiversal weight that had terrified Vice Admiral Tsuru months ago.

"My sensory range indicates that the biological mass of Level 5.5 has fully mobilized and is currently ascending," you stated clearly, speaking to yourself as much as to them. "Furthermore, the structural locks on Level 2 and Level 1 are currently being sabotaged by two highly erratic biological signatures. One possesses a fragmented, dissociative anatomy. The other produces large quantities of combustible wax. They are inciting a mass riot."

You paused, processing the mathematics of the situation.

"The tactical diversion is absolute. The optimal window for a mass structural exit has arrived."

CRACK. SNAP.

Without a single visible movement, the highest-grade, unbreakable Seastone chains binding your wrists and neck simply shattered into fine dust. You stepped forward out of the shadows, your pristine white Marine Seaman uniform completely unbothered by the dirt and grime of the Eternal Hell.

Ivankov's massive jaw hit the floor. Inazuma instinctively raised his scissors, trembling slightly. The sheer, unfathomable presence radiating from you—and the terrifying fact that you could somehow sense the exact events happening five floors above through millions of tons of solid Seastone—sent a deep, existential chill down their spines.

Luffy, however, stood completely immune to the terrifying aura of the myth. He simply blinked, picking out the only two words that mattered to him from your highly technical analysis.

"Buggy and 3?" Luffy asked, tilting his head.

#### Scene 4: The Path of No Regrets

Luffy grabbed his straw hat, falling to his knees as a scream of pure, unadulterated frustration tore from his throat, echoing endlessly through the Eternal Hell.

Emporio Ivankov stepped forward, placing a massive, comforting hand on Luffy’s trembling shoulder. The Revolutionary commander had braved hell to protect the son of his leader, Dragon, but now the mission had fundamentally changed.

"Straw Hat Boy... I know it hurts," Ivankov said, his voice unusually serious, dropping his flamboyant tone. "But the extraction window has closed. As a sworn comrade of your father, my primary objective now is to safely escort you out of Impel Down and back to the surface. We are leaving."

Luffy violently slapped Ivankov’s hand away and jumped to his feet, his eyes burning with an intense, unyielding fire. "No! I'm not leaving! I'm going to Marine Headquarters!"

"DON'T BE A FOOL!" Ivankov roared, his massive head swelling with panic. "Do you have any idea what is about to happen at Marineford?! The entire military might of the World Government is gathering to fight Whitebeard! Admirals, Warlords, giants, and monsters! A war of that scale is not a place for a rookie to participate! You will die!"

Luffy didn't flinch. He glared directly into Ivankov's massive eyes, completely unfazed by the logic or the danger.

"I don't care!" Luffy shouted, his voice echoing off the Seastone walls. "If I turn around now... if I run away while Ace is taken to be executed... I will regret it for the rest of my life! I have to go! Because I am the man who will become the Pirate King!"

Ivankov stared at the boy. The sheer, terrifying weight of Luffy's willpower washed over the Revolutionary. It was the exact same unyielding spirit Dragon possessed. Ivankov sighed, a smirk slowly returning to his face. "HEEE-HAW... like father, like son. You leave me no choice!"

(This transitions directly into the previous #### Scene 5, where Jinbei and Crocodile are freed, culminating in Fajar breaking his chains and analyzing the prison break.)

#### Scene 6: The Calculus of Fear

Ivankov, Inazuma, and Crocodile stared in sheer, existential terror at the young man who had just snapped maximum-security Seastone like dry twigs.

Luffy, completely immune to the chilling aura, simply tilted his head. "Buggy and 3?"

You looked down at the Straw Hat captain, your [Emotional Filter] instantly recognizing the absolute purity of his structural intent.

"Are those their designated titles?" you asked politely. "My sensory domain identifies one biological signature with a red, spherical nose, and another with hair molded into the numerical shape of a three."

Luffy’s face broke into a massive, familiar grin. "Yeah! That's Buggy and Mr. 3! They're still alive!"

Ivankov’s eyes bulged, darting from your pristine white Seaman uniform to the shattered Seastone at your feet. The Revolutionary commander's mind raced, connecting the impossible strength, the calm demeanor, and the rumors from the Underground.

"Wait... the uniform... the chains..." Ivankov gasped, taking a step back. "The rumors from the Newkama network... the myth is true! You are the Marine Seaman who set Mary Geoise ablaze and fought three Admirals to a standstill!"

"I did not set it ablaze; I merely facilitated a structural dismantling of their slave collars," you corrected gently, offering a polite bow. "My name is Fajar Purnama. I was enjoying a swim in the ocean when Vice Admiral Garp recruited me. Sometime later, I was assigned to slave retrieval duty in the Holy Land. I presume you know the rest of the historical record."

Crocodile bit down so hard on his cigar that it snapped in half. Jinbei stared at you in absolute awe. The man who had humiliated the Celestial Dragons had been sitting quietly in the cell across from Ace this entire time.

"Since your objective aligns with a mass localized exit, I will assist in optimizing your route," you announced calmly. "I will systematically break the restraints of the prisoners on this floor, and proceed upward to free the inmates on Levels 5, 4, and 3. As your associates 'Buggy and 3' are already rioting on Levels 2 and 1, this will maximize the kinetic chaos required for your escape. Please, go ahead."

Luffy nodded without a second thought. "Thanks, Fajar! Let's go, Iva!"

As Luffy turned toward the stairs, a cold, bloodthirsty chuckle echoed from a cell locked in the deepest corner of Level 6.

"Kekekeke..."

A tall man in a tattered Impel Down warden uniform stepped up to his bars, chewing on a cigar. Shiryu of the Rain, the disgraced former Head Jailer, glared at you with predatory, psychopathic eyes.

"You're a bold one, Marine," Shiryu taunted, his hand instinctively twitching for a sword he didn't have. "You're going to unlock the cages of the most vicious murderers in history. Aren't you afraid that the second these Silver Medalists are off their leashes, they'll tear you apart just for wearing that white coat?"

You did not look at Shiryu. You didn't even shift your posture.

"If any of you are capable of shattering your own Seastone chains, as I just did, you are more than welcome to try and tear me apart," you answered, your voice devoid of malice but carrying the absolute, crushing weight of reality. "However, if you cannot... then I mathematically guarantee that not a single entity in this prison possesses the kinetic output required to kill me."

The Eternal Hell fell dead silent. The bloodthirsty roars of the Silver Medalists died in their throats. Shiryu's smirk vanished entirely, a cold bead of sweat forming on his brow as his instincts screamed at him not to provoke you further.

"Go, Luffy," you said gently to the boy. "Your brother's timer is ticking."

Luffy grinned, leading Ivankov, Inazuma, Jinbei, and Crocodile toward the stairs.

As they ascended to wage war on the surface, you calmly walked up to Shiryu's cell. You reached out with two fingers, gripping the heavy iron bars. With a terrifyingly effortless twist of your wrist, you began the systemic demolition of Impel Down's eternal locks.

### Chapter 15: The Calculus of Chaos

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Redacted
Location: Impel Down (Ascending: Level 6 to Level 3)
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Calibrated to track over 10,000 localized biological signatures across a vertical axis.

[Phase I: Functional Dynamics]: Systemic restraint demolition active.

#### Scene 1: The Ascent from Hell

You gripped the iron bars of Shiryu’s cell and applied a microscopic burst of [Internal Destruction]. The thick iron turned to dust, settling softly on the cold floor. Shiryu rubbed his wrists, looking at you with a mixture of predatory instinct and profound caution. He did not say a word, grabbing his confiscated sword from the armory down the hall and heading for the stairs.

You continued your leisurely stroll through Level 6, snapping chains, shattering Seastone collars, and unlocking every cell. You left the Silver Medalists in your wake, their bloodlust entirely muted by the terrifying realization of the gap between their power and yours.

As you ascended the spiraling staircase to Level 5, your [Sensory Domain] painted a vivid, real-time map of the structural chaos unfolding above you.

On Level 4, the Boiling Hell, you detected a massive surge in kinetic output. Monkey D. Luffy’s biological signature was clashing repeatedly with the Vice Warden, Hannyabal. You analyzed the exchange mathematically. Hannyabal’s physical structure was far inferior, his caloric output inefficient, but his spiritual anchor—his fierce dedication to protecting the world from the criminals in this prison—kept him standing long past his biological limit. Eventually, however, physics prevailed. Hannyabal collapsed, structurally compromised but spiritually unbroken.

#### Scene 2: The Anomaly of Darkness

As you snapped the frozen chains of the prisoners in the Freezing Hell of Level 5, a sudden, jarring distortion rippled through your sensory field.

It was a new biological signature entering Level 4 from above. It felt heavy, chaotic, and structurally anomalous. Marshall D. Teach. Blackbeard.

You paused, tilting your head as you processed Teach's biology. 'Fascinating. An atypical cellular structure capable of housing multiple localized realities. A profound anomaly.'

You sensed Luffy and Teach's signatures violently clash. The brief, explosive exchange of kinetic energy rattled the floorboards above you. However, the collision was brief. Both entities recognized their timelines did not intersect here, and they separated, moving in opposite directions.

Moments later, Chief Warden Magellan’s massive, highly toxic bio-signature re-entered Level 4. Blackbeard and his crew, utterly lacking in defensive structure or basic caution, walked directly into Magellan’s path. The Warden didn't even break his stride, unleashing a tidal wave of Hydra venom. You watched Teach and his entire crew drop to the floor in agony, structurally neutralized in less than five seconds.

Magellan ignored them. You sensed him lifting Hannyabal’s unconscious body, his emotional resonance projecting deep respect for his subordinate's sacrifice. Through the acoustic vibrations carrying down the ventilation shafts, you heard Magellan issue his strategic deployment:

"Sadi, hold the line at Level 3! Saldeath, take the Demon Guards and intercept them at Level 1! I will chase them from below! Do not let a single prisoner reach the surface!"

#### Scene 3: The Warlord and the Queen

You ascended the stairs to Level 4, walking calmly through the blistering heat of the blood pond. The remaining guards were too busy panicking over the riot to notice the polite young man in the white uniform casually ripping the cell doors off their hinges for the rioting prisoners.

Through your domain, you tracked the vanguard of the breakout reaching Level 3.

Sir Crocodile's signature paused in front of a specific cell. He freed a highly dense, metallic biological signature—Daz Bones, the blade human. Immediately after, you sensed the violent clash between Emporio Ivankov and Chief Guard Sadi.

It was a complete mismatch. Sadi relied on psychological domination and a localized weapon (her whip), but Ivankov’s physical structure and hormonal control were vastly superior. The Revolutionary Commander dismantled her defenses effortlessly, neutralizing her signature in minutes.

However, the timeline was compressing. Magellan had dropped off Hannyabal and was surging upward with terrifying speed.

#### Scene 4: The Demon Guards and the Vanguard

As you finally stepped onto Level 3, the Starvation Hell, the air was thick with smoke and the screams of freed prisoners. You continued your systemic demolition, freeing the remaining inmates to maximize the kinetic diversion.

Far above you, at the Level 1 exit, you sensed the erratic, joyous bio-signatures of "Buggy and 3" celebrating with a mob of Level 1 prisoners. Their premature victory was abruptly shattered.

Four massive, structurally dense biological signatures dropped into Level 1. The Demon Guards—Awakened Zoans. Their arrival scattered Buggy’s forces instantly.

But the vanguard had arrived.

You closed your eyes, admiring the flawless, synchronized kinetic application. Monkey D. Luffy, Sir Crocodile, and Jinbei stepped forward simultaneously. The combined output of a Gear Second strike, a concentrated sand-blade, and Fish-Man Karate obliterated the Demon Guards’ physical defenses in a single, perfectly coordinated second. The beasts were flattened.

The breakout forces surged toward the massive steel doors of the exit, stepping out into the open air of the Calm Belt.

Then, their momentum completely halted. You analyzed the acoustic feedback from the surface.

There were no warships. The Marines had pulled the fleet back to prevent a hijacking.

#### Scene 5: The Door on the Sea

'A logistical bottleneck,' you calculated, continuing to walk through Level 3. 'How will they bypass the oceanic divide?'

Jinbei provided the answer. You sensed the massive Fish-Man rip a colossal wooden gate off its hinges. Tossing it into the Calm Belt, Jinbei commanded Crocodile, Daz Bones, and Buggy to board the improvised raft. Plunging into the water, Jinbei’s biological signature surged with incredible speed, propelling the wooden door across the sea to hijack one of the distant Marine battleships.

It was a brilliant structural bypass.

However, back inside the prison, the situation had reached critical mass.

Magellan had caught up. You sensed the brief, desperate skirmishes on Level 3 and Level 2. Inazuma attempted to sever the floor, but Magellan’s venom melted through the stone. Ivankov unleashed a massive hormonal barrage, but the sheer toxicity of the Warden's Venom Demon was absolute. Both Revolutionaries were heavily poisoned, their life forces flickering dangerously low as Magellan bypassed them.

Now, at the entrance to Level 1, Magellan cornered the remaining rioters.

You sensed Luffy standing his ground. Beside him, the wax-producing signature of Mr. 3 stepped up. A tactical alliance of rubber and wax, directly countering the corrosive physics of the poison, initiated a desperate stalling maneuver. Simultaneously, the other rioters scrambled to pull the dying bodies of Ivankov and Inazuma from the lower levels.

You stopped in the middle of Level 3, dusting off your pristine white uniform. You had freed the prisoners. You had observed the architecture of the escape.

It was time to intervene.

### Chapter 16: The Apex Calibration

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Redacted
Location: Impel Down (Level 1 - Crimson Hell)
Active Modules:

[Phase II: Advanced Haki Equivalents]: Advanced Armament (Internal Destruction), Reality Domination (Advanced Conqueror's Haki - Output Maximized).

[Reality Override]: Engaged. Calibrating localized metaphysical laws.

#### Scene 1: The Acidic Demon

On the staircase between Level 2 and Level 1, the tactical alliance had reached its absolute limit.

Monkey D. Luffy, his fists encased in Mr. 3’s hardened wax armor, launched a desperate barrage of Gum-Gum Champion Gatling against Chief Warden Magellan. The wax perfectly neutralized the standard purple Hydra venom, allowing Luffy to actually land concussive blows against the massive warden.

Meanwhile, Bentham—Mr. 2 Bon Clay—had sprinted back down the perilous, crumbling stairs. Risking his own life, the okama warrior dragged the heavily poisoned bodies of Emporio Ivankov and Inazuma away from the toxic flood, hauling them upward on his bleeding shoulders toward the vanguard.

However, Magellan was the ultimate immune system of Impel Down. He could not afford to lose.

Furious and battered, the Chief Warden unleashed his ultimate technique.

"KIN'JITE: VENOM DEMON!"

The purple liquid shifted, turning into a terrifying, blood-red sludge that formed into a massive, skeletal demon behind Magellan. This was not merely poison; it was a highly corrosive acid that infected everything it touched. The red venom dripped onto Mr. 3’s wax walls and instantly melted them. It dripped onto the stone floor, dissolving the bedrock into toxic vapor.

"Run!" Mr. 3 screamed, terrified as his wax crumbled. "It’s melting the wax! We can't block that!"

"He’s going to melt the whole prison!" Luffy yelled, grabbing Mr. 3 and sprinting up the stairs toward Level 1, joining the panicked mob of rioting prisoners. "Keep moving! Don't let it touch you!"

#### Scene 2: The Wall of Reality

The vanguard burst through the heavy doors into the Crimson Hell of Level 1, Magellan’s massive, red-sludge demon roaring right on their heels. The toxic fumes were already suffocating the escapees. There was no more wax. There was no more space to run.

Then, a pristine white Marine coat fluttered in the stagnant air.

You stepped out from the shadows of a cell block, placing yourself directly between the terrified mob of prisoners and the surging tidal wave of Magellan's Venom Demon.

"Fajar!" Luffy shouted, skidding to a halt.

"Out of my way, Seaman!" Magellan roared, his eyes completely white with fury as he directed a massive, building-sized wave of red acid directly at you.

Through your [Sensory Domain], the calculation was instantaneous. You could effortlessly utilize [Primal Movement] or [Spatial Compression] to bypass the attack. However, doing so would allow the kinetic and chemical spillover to annihilate Luffy, Bon Clay, Mr. 3, and the hundreds of escapees behind you.

You chose to anchor yourself.

You drew your right fist back, grounding your stance perfectly. You channeled [Internal Destruction] deep into your knuckles, simultaneously drawing upon the deepest reserves of your soul to unleash [Reality Domination]. Thick, volatile trails of black-and-red lightning erupted from your arm, tearing the surrounding air pressure to shreds.

You punched the incoming wave of acid head-on.

BOOOOOOM!

You didn't even make physical contact with the acid. The sheer, overwhelming concussive force of your Advanced Conqueror's Haki collided with the Venom Demon in mid-air. A localized shockwave of pure kinetic energy exploded outward, instantly vaporizing the red sludge into harmless, microscopic particles and blowing Magellan backward.

#### Scene 3: The Measuring Stick of a King

The escaping prisoners shielded their eyes from the blinding shockwave. When the dust cleared, you stood perfectly still, your white uniform entirely unblemished.

Luffy’s jaw dropped. Because he had not yet awakened his own Haki, he could not see the invisible armor or the black lightning, but his raw instincts recognized the unfathomable tier of power you had just displayed.

"Whoa...!" Luffy gasped, his eyes shining. "What was that?! You didn't even touch it, and it just blew away!"

You turned your head slightly, looking back at the Straw Hat captain. Your expression was calm, but your words carried the immense, crushing weight of the world he was trying to conquer.

"This is the baseline standard of the New World, Monkey D. Luffy," you stated clearly, your voice cutting through the ringing silence of Level 1. "There are many entities residing in the second half of the Grand Line who possess this exact capability. Yonko, Admirals, and hidden anomalies."

You locked eyes with the boy. "I have observed your biological structure and your kinetic output. You possess a remarkable will. But you stated your intent to become the Pirate King. Gol D. Roger stood at the absolute apex of these monsters. If you truly wish to inherit his title, this level of force is not a luxury—it is a mandatory structural requirement. You must eventually calibrate yourself to this standard."

Luffy stared at you, the sheer scale of the world finally clicking into place in his mind. He didn't look afraid. He clenched his fists, a fierce, unbreakable grin spreading across his face. "I'll get there. I promise!"

#### Scene 4: The Rejection of the Sea

Magellan staggered to his feet, enraged beyond reason. He realized that a localized, concentrated attack was useless against your defensive structure.

"I am the absolute law of this prison!" Magellan bellowed. "If I cannot break your guard, I will melt this entire floor!"

Magellan slammed his hands into the ground, commanding his Venom Demon to expand in all directions, intending to flood Level 1 with an inescapable sea of red acid that would dissolve the prisoners from every angle.

You did not adopt a fighting stance. You simply sighed, stepping forward.

"Devil Fruits are structural anomalies," you lectured calmly, your voice echoing with an archaic, multiversal authority. "They are unnatural mutations, which is why the sea inherently rejects their existence. And because they are unnatural, they are fundamentally subservient to a superior spiritual architecture."

You unleashed the true, uninhibited output of your [Reality Domination].

It wasn't a physical shockwave. It was an absolute metaphysical override. The air turned a deep, bruised purple. The prisoners behind you instantly collapsed, foaming at the mouth, completely unconscious from the sheer weight of your spirit—save for Luffy, whose own latent King's Haki kept him on his feet, trembling under the pressure.

The invisible wave slammed into Magellan. It didn't just push his acid back. Your Conqueror's Haki bypassed his physical body and directly assaulted the Devil Fruit factor in his DNA.

Magellan gasped, his eyes widening in absolute terror. The massive Venom Demon behind him flickered, dissolved, and evaporated into thin air. The red sludge pooling on the floor turned back into normal, harmless sweat.

You had completely nullified and sealed his Devil Fruit abilities through sheer willpower.

#### Scene 5: The Demolition

"My... my poison..." Magellan stammered, staring at his bare hands, suddenly feeling incredibly mortal. "What are you...?"

"I am the architecture of reality," you replied politely.

You closed the distance between you and the Chief Warden in a single, imperceptible step.

You drew your fist back one final time. Martial Arts. Armament Haki. Advanced Conqueror's Haki. A perfect, flawless alignment of biomechanics and spiritual density.

You struck Magellan squarely in the center of his chest.

CRACK.

The impact echoed like a cannon shot inside a vault. Magellan’s ribs did not break—your [Internal Destruction] bypassed his skeletal structure entirely, delivering a perfectly calibrated concussive wave directly to his nervous system.

The Chief Warden's eyes rolled back into his head. His massive body was lifted off the ground, flying backward down the corridor until he crashed into the heavy steel doors of the warden's office, slumping to the floor, completely and utterly pacified.

#### Scene 6: The Great Escape

You exhaled softly, the black lightning fading from your hands as the ambient gravity of the room returned to normal.

"He... he beat Magellan in one punch..." Mr. 3 whispered, clutching his head in sheer disbelief. "And he knocked everyone else out just by standing there..."

"Come on!" Luffy shouted, snapping Mr. 3 and Bon Clay out of their shock. Luffy grabbed the unconscious bodies of Ivankov and Inazuma, throwing them over his shoulders. "We have to go! Jinbei has the ship waiting!"

You nodded, gesturing toward the massive main gates leading to the surface. "Your oceanic transport is indeed secured. The kinetic diversion is complete."

Luffy grinned, leading the conscious stragglers in a mad sprint toward the exit. The massive steel doors of Impel Down had already been breached. Beyond them lay the churning, chaotic waters of the Calm Belt, and waiting just offshore was a stolen Marine battleship, with Jinbei at the helm and Crocodile standing on the deck.

As you walked out into the blinding sunlight of the surface world, the massive shadows of Sea Kings breached the water in the distance, calling out to the sky. The first phase of the war had officially concluded. The players had left the board.

Now, the world would burn.

### Chapter 17: Pitching in the Calm Belt

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)

Location: Stolen Marine Battleship — En Route to the Gates of Justice

Active Modules: * [Phase I: Functional Dynamics]: Hyper-velocity kinetic projection active.

[Phase II: Advanced Haki Equivalents]: Spatial Compression, Reality Domination (Galaxy-Class Release).

#### Scene 1: The Pitching Mound

On the deck of the stolen Marine battleship, chaos turned into order.

Emporio Ivankov, using a rapid series of Emporio Tension Hormones, revived the unconscious rioters, Jinbei took the helm, and Crocodile leaned against the main mast, silently nursing his cigar.

However, behind the ship, the horizon was darkened by a pursuing fleet of Marine warships. Cannonballs whistled through the air, splashing into the Calm Belt or exploding against the ship's reinforced hull.

"Return fire! Fire the cannons!" Buggy screamed, running around the deck in a panic. "Don't let them sink us!"

You walked calmly to the stern of the ship, watching the incoming broadside. You turned to a group of idle, freed Level 3 prisoners who were simply standing around shivering.

"Excuse me," you said politely. "For those of you not currently engaged in active defensive duties, you can optimize our defensive throughput. Rather than operating the heavy artillery mounts, please fetch the spare cannonballs from the armory and stack them beside me."

The prisoners blinked, confused by your technical phrasing, but sprinted down into the hold out of pure instinct. Within seconds, they returned with crates of heavy, solid-iron cannonballs.

You picked up a massive iron sphere in your right hand, testing its weight.

"Thank you," you said warmly to the crew. "I appreciate you holding the line so I may engage in this recreational activity."

You drew your arm back, tapped into [Primal Movement], and pitched the cannonball like a baseball.

WHOOSH—BOOM!

The cannonball didn't just fly; it broke the sound barrier, turning into a streak of compressed friction. It struck the lead Marine warship directly below the waterline, punching clean through the bow and coming out the stern, causing the vessel to capsize instantly.

You picked up another ball. PITCH. Another warship's main mast was sheared in half. PITCH. A third ship’s steering rudder exploded into splinters. You were throwing two-hundred-pound iron spheres faster than a Marine mortar cannon, smiling pleasantly as if playing a casual game of catch.

Luffy’s eyes expanded to the size of dinner plates. "WHOA! FAJAR! That's awesome! That’s just like what my Gramps did at Water 7!"

You tossed a cannonball up and down in your hand. "Indeed. It is a remarkably effective exercise for testing rotational kinetic transfer. Would any of you care to participate?"

"I'M IN!" Luffy cheered, grabbing a cannonball twice his size. He stretched his arms far back into a Gum-Gum Pitch and hurled it at the fleet. The ball splashed violently near a warship, sending a massive geyser of water into the air.

"Hoho! I believe I shall decline the cannonballs," Jinbei chuckled warmly from the helm. He scooped a massive palmful of seawater over the side of the ship. "Fish-Man Karate: Ocean Current Shoulder Throw!"

Jinbei hurled a devastating column of high-pressure water, punching another warship out of the sea.

Crocodile scoffed, tossing a sand blade, while Mr. 3 frantically molded wax shields to block incoming mortar fire. They looked back at you and Luffy, who were now casually taking turns pitching cannonballs like kids at a fairground, completely dismantling a military blockade.

#### Scene 2: The Oversight of the Okama

Within twenty minutes, the pursuing Marine fleet was rendered entirely immobile, drifting helplessly in the Calm Belt behind you.

The stolen battleship broke through the thick fog, and there it stood: the Gate of Justice.

It was a gargantuan, sky-scraping wall of solid steel and sea-stone, sealing off the current to Marineford. The massive doors were locked tight, towering hundreds of meters into the clouds.

"We made it... but the gate is closed!" Buggy shrieked, tearing his own hair out. "It can only be opened from the control room back inside Impel Down! We're trapped! Magellan is going to catch up and turn us into soup!"

In the middle of the panic, Bentham—Mr. 2 Bon Clay—suddenly froze.

His face went completely pale. Sweat poured down his cheeks like twin waterfalls. He slowly slid down the main mast, collapsing onto the wooden deck in absolute, dramatic horror.

"N-N-NOOOOO WAY!" Bon Clay shrieked, clutching his face. "STRAW-CHAN! FAJAR-SAN! I FORGOT!"

Ivankov leaned down, his massive head looming over him. "WHAT DID YOU FORGET, BON-BOY?!"

"Back in Level 6... when Fajar-san single-handedly shattered Magellan in one punch..." Bon Clay wept hysterically, rivers of tears streaming down his face. "I was so completely mesmerized by his strength... so awestruck... that I FORGOT MY SACRED DUTY! I was supposed to stay behind in the control room disguised as Magellan to open the gate for you all!"

The entire deck fell dead silent.

You turned around, looking down at the weeping okama with a mild, approving nod.

"That is a highly satisfactory oversight," you noted smoothly. "Self-sacrifice to solve a logistical bottleneck is mathematically inefficient and emotionally wasteful. I am quite relieved you remained on board, Bentham."

Luffy ran over, wrapping his rubber arms around Bon Clay in a tight, suffocating hug. "YEAH! Bon-chan! I'm so glad you didn't stay behind! You would have died!"

"STRAW-CHAN! FAJAR-SAN!" Bon Clay wailed, hugging them both back while crying tears of absolute gratitude. "YOU GUYS ARE THE BEST!"

#### Scene 3: Borrowing the Galaxy

"THAT'S VERY TOUCHING!" Buggy screamed, stomping his feet. "BUT HOW THE HELL ARE WE SUPPOSED TO GET THROUGH THE GATE NOW?!"

Crocodile narrowed his eyes, crossing his arms. "Unless someone here can slice through three hundred meters of reinforced sea-stone steel, we're sitting ducks."

You walked past them, stepping up to the very tip of the ship's wooden figurehead. You looked up at the monumental doors blocking the sky.

"A physical barrier," you stated softly, "is merely a dense arrangement of localized matter bound by atomic cohesion. It can be restructured."

You stepped off the ship—not onto water, but onto the air itself. Tapping into [Primal Movement], you walked up the invisible staircase of the atmosphere, ascending until you hovered fifty feet above the battleship, directly in front of the colossal seam of the Gate of Justice.

You drew your right fist back.

Instantly, the atmosphere around you fractured.

You did not just coat your hand in Haki. You drew upon [Reality Domination], channeling a massive, swirling sphere of black and red Conqueror's lightning around your arm. The sky above the Calm Belt turned a violent bruised purple, and the sheer atmospheric pressure forced the ocean beneath the battleship to sink by ten feet.

"Fajar... what is he doing?!" Ivankov gasped, his massive eyes bulging.

"I shall borrow a signature technique from your grandfather, Luffy," you announced down to the deck, your voice echoing like distant thunder.

You threw a single, downward straight punch into the open air.

"GALAXY IMPACT!"

BOOOOOOOOOOOOOOOOOOOM!

You didn't touch the gate. You didn't need to.

A colossal, spherical dome of pure kinetic energy and Advanced Conqueror's Haki erupted from your fist. The shockwave expanded instantly, swallowing the center of the Gate of Justice. Thousands of tons of reinforced steel and sea-stone did not just break—they were instantly vaporized into microscopic dust and atomized shrapnel.

The concussive wave ripped through the clouds, splitting the sky for miles. A massive, gaping hole—over two hundred meters wide—was blown clean through the center of the impenetrable gate.

The resulting air blast created a violent artificial current, catching the battleship's sails and propelling the ship smoothly right through the shattered, burning ruin of the Gate of Justice and directly into the swirling waters of the Tarai Current.

#### Scene 4: The Demon of the Old Era

The ship lurched forward, riding the massive wave.

On the deck, absolute silence reigned.

Buggy was lying flat on his back, his eyes popped out of his sockets, his jaw detached and dragging on the floorboards. "W-W-WHAT KIND OF MONSTER ARE YOU?! THAT WAS LIKE CAPTAIN ROGER! NO, THAT WAS LIKE LORD RAYLEIGH! NO, THAT WAS CRAZIER THAN BOTH OF THEM COMBINED!"

Mr. 3 was passed out cold from pure shock. Crocodile’s cigar fell out of his mouth, dropping into the ocean below. Jinbei gripped the wheel so hard the wood creaked, staring up at you as you drifted gracefully back down to the deck, dusting off your pristine white Seaman coat.

"A standard kinetic application," you said modestly, landing without a sound. "According to historic records, when Vice Admiral Garp was in his biological prime, he could execute that exact output repeatedly without experiencing metabolic fatigue. That is why the pirate factions of the previous era designated him as a 'Demon'."

You looked over at Luffy. "Gold Roger engaged in kinetic conflicts with your grandfather on dozens of occasions."

Luffy stood frozen. Slowly, his shoulders began to shake. He wrapped his arms around himself, his face twisting into a look of absolute, deep-seated terror as a violent shiver ran down his spine.

"I... I've heard people say Gramps is a legend," Luffy stammered, his teeth literally chattering as childhood trauma flooded his brain. "And I knew he was strong... but I've never seen him blow up a mountain-sized gate like that! But the 'demon' part?! OH YEAH. I KNOW ALL ABOUT THAT!"

Luffy fell to his knees, rubbing the back of his head where decades of Garp's "Fists of Love" had left permanent psychological scars.

"His 'Fists of Love'..." Luffy whimpered, sweating bullets. "I don't even wanna think about it! Every time he came home, he threw me into bottomless ravines! He tied me to balloons! He left me in night jungles full of tigers! Just remembering his voice gives me goosebumps!"

Ivankov stared at Luffy in absolute horror. "WHAT KIND OF CHILDHOOD WAS THAT?!"

"A structurally rigorous upbringing," you commented politely, offering Luffy a soft smile. "It explains why your biological vessel possesses such extraordinary resilience today."

Luffy looked up at you, snapping out of his terror and breaking into a massive, determined grin. "Shishishi! Yeah! Gramps is a demon, but I'm gonna be the Pirate King!"

The stolen battleship surged forward, locked into the high-speed waters of the Tarai Current. Ahead lay the Gates of Marineford, where the ocean was boiling, Whitebeard was advancing, and the absolute peak of the world’s power was waiting.

The prologue was long over. The current was set. And you were riding right into the heart of the war.

## Marine Ford Arc

### Chapter 18: The Architecture of a War

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3) — Uniform Status: Severely Battered
Location: Marineford (Airspace — Freefall)
Active Modules:

[Tier 1: Bio-Maintenance]: Terminal velocity stabilization.

[Tier 6: Sensory Domain (Passive)]: Mapping 100,000+ localized biological signatures.

#### Scene 1: Terminal Velocity

The stolen Marine battleship plummeted from the sky.

Below, the frozen crescent bay of Marineford was already a cauldron of absolute chaos. The Whitebeard Pirates and the full military might of the World Government were clashing in a deafening symphony of artillery fire, roaring Haki, and shattering ice.

As the ship fell, panic consumed its passengers. Buggy and Mr. 3 shrieked in absolute terror, clinging to the mast. Crocodile simply crossed his arms, looking annoyed by the lack of aerodynamic stability. Jinbei braced himself for impact, while Luffy laughed hysterically, his eyes locked onto the execution platform far below.

You, however, were entirely unbothered by the laws of gravity.

You fell perfectly upright, the wind violently whipping your battered, soot-stained Seaman Recruit uniform. You reached up, politely adjusting your collar and smoothing out the creases in your coat as the ocean of ice rushed up to meet you.

CRAAAAASH!

The warship slammed into the frozen bay, shattering a massive crater into Admiral Kuzan's ice. The impact sent a geyser of freezing water and wooden shrapnel flying into the air, instantly drawing the eyes of thousands of combatants.

Monkey D. Luffy stood atop the wreckage, taking a deep breath and screaming at the top of his lungs.

"AAAAAAAAAAACE!"

The Paramount War had just received its most chaotic reinforcements.

#### Scene 2: Hierarchical Miscalculations

The prisoners poured out of the wreckage, instantly clashing with the surrounding Marines.

You stepped off the shattered bow, landing lightly on the ice. You dusted off your uniform, taking a moment to visually process the architecture of the battlefield. Your [Sensory Domain] registered the staggering density of power present: the three Admirals on the scaffold, the Warlords on the front lines, and the overwhelming, localized epicenter of kinetic force that was Edward Newgate.

"Hey! You there!"

A group of Marine officers—two Captains and a handful of Sergeants—spotted you walking calmly through the warzone. They did not recognize your face, but they instantly recognized the standard-issue white uniform with the blue seagull emblem, despite its battered state.

"What the hell is a Seaman Recruit doing with the prisoners?!" one of the Captains barked, drawing his katana. "Are you AWOL?! Get back in formation immediately and help us subdue these pirates!"

You did not break your stride. "Your hierarchical authority is noted, Captain. However, my deployment parameters are currently operating outside of standard Marine jurisdiction. Please stand aside."

"Insubordination!" the other Captain roared. "Arrest him!"

The officers lunged at you, weapons drawn. You did not even adopt a combat stance. As the first katana swung toward your neck, you simply sidestepped with mathematical perfection. You tapped the flat of the blade, reversing the officer's kinetic momentum and sending him crashing into his squadmates.

The remaining Sergeants thrust their spears. You deflected them with mere flicks of your wrists, applying microscopic bursts of [Internal Destruction] to their weapons. The steel shattered into dust upon contact with your bare skin. With a series of gentle, open-handed palm strikes to their solar plexuses, you pacified the entire squad in less than three seconds. They collapsed to the ice, entirely unconscious but structurally unharmed.

#### Scene 3: The Fall of the Giants

"Stop playing around, you fools!"

The ground trembled as a massive shadow fell over you. Vice Admiral John Giant, one of the most physically imposing officers in the Marine forces, marched forward. He looked down at the unconscious Captains and then glared at you, raising his gargantuan sword.

"Do not let a handful of prisoners and a confused Seaman disrupt the front lines!" John Giant bellowed to the surrounding troops. "I will crush this nuisance myself!"

The giant brought his massive blade crashing down toward you, a strike carrying enough physical force to cleave a galleon in half.

You did not block. You engaged [Primal Movement].

To the eyes of everyone watching, you simply vanished. The giant's sword slammed into the ice, missing you completely. You reappeared instantly, hovering directly in front of John Giant’s face, entirely defying the localized gravity.

"Your physical output is commendable," you noted politely. "But your center of gravity is entirely exposed."

You shifted your hips and delivered a single, devastating elbow strike directly to the bridge of his nose.

CRACK.

The concussive shockwave rippled through the giant's skull. John Giant’s eyes rolled back, his massive knees buckling as his colossal frame tipped backward, crashing onto the ice with the force of an earthquake.

Before his body even settled, your [Sensory Domain] detected an immediate kinetic threat from your blind spot.

"Die, traitor!"

Vice Admiral Lonz, wearing his steel mask, leaped into the air behind you. He swung his gargantuan battle-axe down at your exposed back with murderous intent.

You did not turn around. You did not even look at him.

While still suspended in the air, you casually swung your right fist backward.

BOOOOOOM!

Your bare knuckles collided with the massive steel blade of the axe. The weapon shattered instantly, fragmenting into hundreds of jagged pieces. The sheer kinetic overflow of your punch carried straight through the broken weapon and struck Lonz squarely in the chest.

The masked giant was launched backward like a cannonball, skipping across the frozen bay until he slammed into a heavily fortified Marine barricade, completely neutralized.

The entire front line of the battlefield froze. Marines and pirates alike stopped fighting, staring in absolute, suffocating disbelief. A single Seaman Recruit had just one-shot two Giant Squad Vice Admirals in the span of five seconds without breaking a sweat.

#### Scene 4: The Declaration of the Fleet Admiral

High above the battlefield, on the execution platform, Fleet Admiral Sengoku’s face drained of all color.

Beside him, Garp closed his eyes, letting out a long, heavy sigh. Admiral Akainu's magma bubbled furiously, Kizaru lowered his sunglasses in rare, genuine shock, and Kuzan simply stared, remembering the freezing depths of Level 6.

Sengoku grabbed the golden Den Den Mushi, his voice trembling with a mixture of absolute rage and profound terror. He could no longer hide the truth from his men. If they engaged this anomaly blindly, the Marines would be slaughtered.

"ALL MARINE FORCES, FALL BACK FROM THAT SEAMAN!" Sengoku’s voice boomed across the entire bay, echoing off the towering walls of Marineford and broadcasting to the screens in the Sabaody Archipelago.

The Marines flinched at the absolute panic in their Fleet Admiral's voice.

"Do not be distracted by the pirates!" Sengoku roared, pointing a trembling finger directly at you. "That man is not a confused recruit! He is the greatest anomaly in the history of the World Government!"

The entire world fell silent, listening to the Fleet Admiral's unprecedented declaration.

"That is Fajar Purnama! The man who shattered the Holy Land of Mary Geoise! The man who fought three Admirals to a standstill without taking a single scratch!" Sengoku’s voice cracked under the weight of the truth. "The Myth of Level 6 is real! Treat him as an absolute, catastrophic threat!"

Down on the ice, you slowly floated back down to the ground. You adjusted your cuffs, ignoring the thousands of terrified eyes now locked onto your battered uniform.

You looked across the battlefield, past the Warlords, past the Admirals, and locked eyes directly with Sengoku. You offered him a polite, respectful bow.

The architecture of the war had officially been broken.

### Chapter 18: The Summit of Ambition

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Location: Marineford (Frozen Bay)
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Observing localized interactions.

[Phase I: Functional Dynamics]: Idling. Absolute non-interference protocol engaged for current sequence.

#### Scene 1: The Roster of Infamy

The stolen Marine battleship plummeted from the sky, a massive wooden meteor crashing directly into the center of Admiral Kuzan's frozen bay.

The impact sent a geyser of freezing water, shattered ice, and wooden shrapnel exploding into the air. As the dust settled and the freezing mist cleared, the combatants of the Paramount War—both Marines and Whitebeard Pirates—halted their fierce battles to stare at the wreckage.

Silhouettes began to emerge from the freezing fog.

"Look!" a Marine Captain yelled, pointing a trembling sword at the wreckage. "They're wearing Impel Down uniforms! It's a prison break!"

Murmurs of absolute shock rippled through the Marine ranks as they recognized the faces stepping onto the ice.

"That's... that's Jinbei! The First Son of the Sea!" a Vice Admiral gasped. "He actually allied with the prisoners?!"

"Over there! Emporio Ivankov of the Revolutionary Army!"
"And Sir Crocodile! Why is a former Warlord with them?!"
"Wait, is that... Buggy the Clown?! The legendary pirate who sailed with Gold Roger?!"

The Whitebeard Pirates were equally stunned. Marco the Phoenix landed softly on the ice, his blue flames flickering as he analyzed the bizarre alliance. "Jinbei... Crocodile... and who is that kid in the front?"

Standing at the very vanguard of the chaotic mob, completely ignoring the thousands of legendary combatants surrounding him, was Monkey D. Luffy. He adjusted his straw hat, took a deep breath, and screamed at the top of his lungs.

"AAAAAAAAAAACE!"

Far in the background, unnoticed amidst the roaring prisoners and panicking Marines, a single Seaman Recruit in a battered white uniform quietly stepped off the wreckage. You dusted off your sleeves, politely blending into the crowd of escapees, perfectly content to observe the unfolding architecture of the era.

#### Scene 2: The Sand and the Hook

The momentary pause in the war was violently broken.

Sir Crocodile did not waste a single second. The instant his boots hit the ice, his lower body dissolved into a swirling vortex of sand. Bypassing the Marines, the Warlords, and the chaotic front lines, Crocodile launched himself directly toward the Moby Dick—aiming straight for the back of Edward Newgate.

"Whitebeard!" Crocodile roared, his golden hook gleaming in the sunlight as he materialized directly behind the massive Emperor. "It's been a long time!"

The Whitebeard Commanders reacted, but Crocodile was too fast. The golden hook swung down in a lethal arc, aimed directly at the old man's neck.

FWOOSH!

Steam erupted into the air. A blur of pink, boiling skin intercepted the strike.

Monkey D. Luffy, having activated Gear Second the exact millisecond Crocodile moved, appeared suspended in mid-air right behind the Warlord. Luffy’s foot, dripping with the seawater he had absorbed from the crash, slammed into Crocodile's hook with the force of a cannonball, violently deflecting the assassination attempt.

Crocodile skidded backward across the deck of the Moby Dick, glaring furiously at the rookie. "You... Straw Hat! Why are you protecting him?! Our truce is over!"

"I promised I wouldn't let you lay a finger on this old guy!" Luffy yelled back, steam radiating from his skin. "Ace really likes him!"

Before Crocodile could retaliate, the deck was suddenly swarming with Whitebeard Pirates. Marco, Jozu, and Vista stepped between the Warlord and their father, their weapons drawn and Haki flaring.

"Don't think you can just waltz onto our ship and take the old man's head, Crocodile!" Marco warned, his eyes narrowed.

#### Scene 3: The Emperor and the Rookie

Edward Newgate, the strongest man in the world, did not even flinch during the assassination attempt. He slowly turned his massive body, looking down at the small, steaming boy who had just parried a Warlord.

Whitebeard's piercing, golden eyes locked onto the straw hat resting on Luffy's back.

"That straw hat..." Whitebeard rumbled, his deep voice vibrating through the very wood of the ship. "You have the same hat that Red-Hair used to wear."

Luffy stood his ground, not intimidated in the slightest. "You know Shanks? Yeah, he gave this to me!"

Whitebeard narrowed his eyes, the sheer, crushing weight of his Conqueror's Haki passively leaking into the air. "Are you here to rescue your brother, cheeky brat?"

"Yeah! I am!" Luffy shouted.

Whitebeard slammed the butt of his massive bisento into the deck. The sound echoed like a thunderclap across the bay.

"You don't know what you're doing, boy," Whitebeard warned, his voice cold and absolute. "Do you have any idea who you are up against? The entire military might of the world is standing in front of you. A little brat like you won't survive this battlefield. Go home before you get yourself killed."

Luffy’s eyes widened, but not in fear. The rubber boy inhaled deeply, entirely rejecting the Emperor's authority.

"SHUT UP! THAT'S NOT FOR YOU TO DECIDE!" Luffy roared at the absolute top of his lungs, his voice carrying across the entire frozen bay of Marineford.

The Whitebeard Commanders gasped. The Marines stared in absolute disbelief. Sengoku gripped the railing of the execution platform. Even Crocodile blinked in surprise. No one—no one—spoke to Whitebeard like that.

Luffy pointed a challenging finger directly at the massive Emperor.

"I know what you're planning, old man!" Luffy yelled. "Ace told me! You want to be the Pirate King, right?!"

Whitebeard raised a single, massive eyebrow, mildly amused by the boy's complete misunderstanding of his actual motivations.

"Well, you can't!" Luffy declared, slamming his fist into his chest with absolute, unbreakable resolve. "Because the one who is going to be the Pirate King... IS ME!"

#### Scene 4: The Apex Glare

Total, suffocating silence fell over Marineford.

The Fleet Admiral, the three Admirals, the Warlords, and tens of thousands of soldiers stood completely paralyzed by the sheer audacity of the rookie pirate.

Edward Newgate stared down at Monkey D. Luffy. The height difference was staggering, but spiritually, they were standing on the exact same plane. The air between them crackled with unseen tension, a clash of pure, unadulterated willpower.

For ten agonizing seconds, the strongest man in the world simply glared at the boy.

Then, the corners of Whitebeard's heavily scarred mouth twitched.

"Gurararararara!" Whitebeard threw his head back and let out a massive, booming laugh that shook the air itself. He looked back down at Luffy, a smirk of genuine respect crossing his face. He admired the courage, the fire, and the sheer, unbridled energy of the next generation.

Whitebeard spun his bisento gracefully, slamming it back down into the deck.

"You're a cheeky brat, alright," Whitebeard smirked, his eyes burning with a fierce, competitive light. "If you drag me down... I won't forgive you, snot-nosed kid!"

Luffy grinned fiercely, cracking his knuckles. "I'll do what I want! I'm going to save Ace myself!"

The alliance was forged. The old era and the new era stood side by side on the deck of the Moby Dick. And from the shadows of the Impel Down escapees, Fajar Purnama smiled quietly, observing the structural foundation of a true King.

### Chapter 19: The Anatomy of an Emperor

[System Status]
Vessel: Fajar Purnama (Ascended Deity - Unrestricted)
Rank: Seaman Recruit (Class 3)
Location: Marineford (Deck of the Moby Dick)
Active Modules:

[Tier 6: Sensory Domain (Passive)]: Monitoring localized biological decay.

[Phase I: Functional Dynamics]: Cultivation framework engaged. Energy routing active.

#### Scene 1: The Tactical Flattery

As Monkey D. Luffy leaped off the deck of the Moby Dick to charge into the frozen battlefield, Edward Newgate shifted his golden eyes toward the mob of cheering Level 1 and 2 escapees remaining on the ice.

At the center of the mob stood a pirate with a red nose, weeping tears of misplaced grandeur.

"Hey, red nose," Whitebeard called out, his deep voice easily cutting through the sounds of artillery fire. "You were on Roger's ship, weren't you? Buggy, right?"

Buggy stiffened, looking up at the colossal Emperor in sheer terror. "Y-Y-Yeah! What of it, Whitebeard?!"

The Impel Down prisoners gasped. He's talking back to Whitebeard on equal terms! Captain Buggy is a legend!

Whitebeard analyzed the situation instantly. The escapees were a chaotic, unpredictable variable. Fighting them while dealing with the Marines would be a logistical annoyance. But their loyalty to the clown was highly exploitable.

"It's been a long time," Whitebeard smirked. "It would be a shame for us to kill each other here and let the Marines take our heads. What do you say we team up and deal with the Navy first? You can take my head after."

Buggy’s eyes turned into giant stars. The sheer ego boost of an Emperor proposing an alliance was too much to resist.

"You want my help?!" Buggy cackled, turning to his fanatical followers. "Did you hear that, boys?! Whitebeard knows he can't beat me right now! We're taking down the Marines!"

The prisoners roared in agreement, completely manipulated but highly effective as a vanguard.

Marco the Phoenix landed beside Whitebeard, smiling softly. "You handle them well, Oyaji."

"They're a nuisance, but a useful one," Whitebeard grunted, though his breath was shallow. He closed his eyes for a fraction of a second, a silent wince of internal pain crossing his heavily scarred face.

#### Scene 2: The Proposal of Stabilization

"Your tactical utilization of chaotic variables is commendable, Edward Newgate."

Marco instantly spun around, blue flames erupting along his arms. Standing completely unnoticed on the starboard deck, wearing a battered white Marine uniform, was a young man with a polite smile.

"A Marine?!" Marco hissed, preparing to strike. "How did you get on the ship?!"

Whitebeard held up a massive hand, halting his First Division Commander. The Emperor's eyes narrowed. He possessed the greatest localized Haki in the world, yet he had not felt this boy's approach. There was no killing intent, no malice—just an unfathomable, serene density.

"Who are you, brat?" Whitebeard rumbled.

"My name is Fajar Purnama," you replied, giving a respectful bow. "I am a Seaman Recruit, though my current alignment is neutral. More importantly, I am a physician of sorts."

You took a step forward, your [Sensory Domain] mapping the tragic reality of the Emperor's internal structure.

"Your biological vessel is in catastrophic decline," you stated objectively, looking directly into Whitebeard's eyes. "You have removed your intravenous support systems. Your localized energy—what you call Haki—is being forcibly suppressed by a failing cardiac rhythm and severe cellular degradation. If you continue to exert maximum kinetic output, your heart will seize mid-battle."

"Watch your mouth, Marine!" Jozu roared, stepping forward.

Whitebeard laughed, a harsh, rattling sound. "Gurararara! You've got guts, coming onto my ship to tell me I'm a dying old man. I know my limits, brat. I don't need pity."

"I am not offering pity," you corrected smoothly, your voice carrying absolute, cold logic. "I am offering a structural necessity."

You gestured to the ice below, where thousands of Whitebeard Pirates were bleeding and dying for their captain.

"You are their foundational anchor," you explained. "If your biological engine fails in the middle of a clash—if you fall to your knees clutching your chest—your sons will be distracted. They will look back. And in that fraction of a second, the Admirals will slaughter them. By refusing stabilization, you are structurally endangering the very family you came to save."

Whitebeard’s eyes widened slightly. He looked down at the battlefield. He knew you were right. His pride as the strongest man in the world was secondary to his duty as a father.

"And what can you do about it?" Whitebeard asked, his voice softening.

"To the inhabitants of this world, Haki is the peak of spiritual power," you explained, stepping up to the towering Emperor. "To my origin, it is merely one localized application of universal energy—Chi, Qi, Ki. A basic foundational step of cultivation."

You placed your hand gently against Whitebeard's massive knee. You did not use healing magic; you simply engaged a high-tier cultivation framework, routing your infinite, refined universal energy directly into his failing meridians.

A soft, golden pulse of kinetic warmth surged from your palm.

Whitebeard’s eyes snapped wide open. The suffocating tightness in his chest vanished. The rattling in his lungs smoothed out into deep, powerful breaths. The sluggish circulation of his blood accelerated, completely revitalizing his cellular structure. You had not cured his age or his illness, but you had mathematically locked his biology into a state of absolute stability.

"For the duration of this conflict, your cardiac and respiratory systems will not fail," you assured him, stepping back and dusting off your hands. "Save your son, Edward Newgate."

Whitebeard gripped his bisento, feeling a surge of strength he had not possessed in over a decade. He looked at you, a profound respect mirroring in his golden eyes.

"I owe you a debt, Seaman Fajar," Whitebeard rumbled, a fierce, terrifying grin returning to his face. "Marco! Tell the men to advance! We're tearing this place apart!"

#### Scene 3: The Weight of Brotherhood

Down on the frozen bay, the reality of the New World was fiercely rejecting Monkey D. Luffy.

Luffy sprinted through the artillery fire, his rubber body stretching and snapping as he fought off waves of Marines. But he was severely outmatched by the sheer density of high-ranking officers. A Vice Admiral’s blade slashed across his shoulder, drawing a spray of blood and sending Luffy tumbling violently across the jagged ice.

High above, chained to the execution platform, Portgas D. Ace watched his little brother bleed.

The chains rattled as Ace struggled, his heart tearing itself apart. He had lived his entire life believing his existence was a curse. He was prepared to die here. But watching Luffy—the boy he had sworn to protect, the boy who had a bright future and his own crew—throw his life away against impossible odds was a torture worse than Impel Down.

"LUFFY!" Ace screamed, his voice cracking with sheer desperation, echoing across the silent pockets of the battlefield.

Luffy stopped, clutching his bleeding shoulder, and looked up at the scaffold.

"STAY AWAY!" Ace roared, tears streaming down his dirt-stained face. "YOU OUGHT TO KNOW BETTER! WE ARE BOTH PIRATES! WE SET OUT ON THE SEA AS WE PLEASED!"

Ace ground his teeth, forcing himself to say the words that would push his brother away, trying to save him through cruelty.

"I HAVE MY OWN ADVENTURE! I HAVE MY OWN NAKAMA! YOU HAVE NO RIGHT TO INTERFERE!" Ace shouted, his voice echoing off the frozen walls of the bay. "A WEAKLING LIKE YOU COMING TO MY RESCUE?! DO YOU THINK I'D EVER FORGIVE THAT?! IT'S HUMILIATING! GO BACK, LUFFY! GO HOME!"

The battlefield fell silent. The Marines and Pirates watched the tragic exchange, processing the agonizing rejection of a man trying to save his brother's life.

#### Scene 4: The Blood of a Revolutionary

Luffy stood up.

He didn't wipe the blood from his face. He didn't look hurt by the rejection. Instead, he inhaled deeply, his chest expanding as he activated Gear Second, his skin turning bright pink and radiating intense steam.

"I AM YOUR BROTHER!" Luffy roared back, his voice vibrating with absolute, unyielding structural intent, easily overpowering Ace's despair.

Luffy slammed his fists together, glaring up at the scaffold, the Admirals, and the Fleet Admiral himself.

"I DON'T CARE ABOUT PIRATE RULES! I DON'T CARE WHAT YOU SAY!" Luffy screamed, pointing a finger directly at Ace. "I AM GOING TO SAVE YOU EVEN IF IT KILLS ME!"

On the execution platform, Fleet Admiral Sengoku’s eyes narrowed into fierce slits. He recognized the terrifying charisma radiating from the rookie pirate. The Whitebeard Pirates were already rallying behind the boy's war cry.

Sengoku grabbed the Den Den Mushi, deciding that the structural equilibrium of the world demanded complete transparency. The Marines needed to know exactly who they were trying to kill.

"DO NOT BE FOOLED BY HIS AGE!" Sengoku’s voice boomed across the entire expanse of Marineford, broadcasted to screens across the globe. "HE IS NOT JUST ANOTHER ROOKIE PIRATE! DO NOT LET HIM SURVIVE!"

The Marines braced themselves.

"HE WAS RAISED ALONGSIDE PORTGAS D. ACE, BUT HIS LINEAGE IS JUST AS DANGEROUS!" Sengoku declared, pointing down at the steaming rubber boy. "HIS FATHER... IS THE SUPREME COMMANDER OF THE REVOLUTIONARY ARMY! HE IS THE SON OF DRAGON!"

A collective shockwave of pure terror rippled through the tens of thousands of Marines. The son of the World Government's worst criminal was standing on their ice.

The stakes of the Paramount War had just exponentially multiplied.

As Monkey D. Luffy sprinted recklessly into the frozen meat grinder of Marineford, his small figure dwarfed by giants, Vice Admirals, and artillery fire, Edward Newgate watched him go. The old Emperor’s golden eyes softened just a fraction, a fond smirk crossing his heavily scarred face.

"Marco," Whitebeard rumbled, his voice carrying effortlessly over the din of battle.

Marco the Phoenix flared his blue wings, hovering beside the Emperor. "Yeah, Oyaji?"

"Don't let that boy die."

Marco smirked, his eyes locking onto Luffy’s chaotic path. "Understood. We'll make sure he gets there."

### Chapter 20: The Myth of the Holy Land

**[System Status]**
**Vessel:** Fajar Purnama (Ascended Deity - Unrestricted)
**Rank:** Seaman Recruit (Class 3) — *Uniform Status: Severely Battered*
**Location:** Marineford (Frozen Bay — Front Lines)
**Active Modules:**

* **[Tier 6: Sensory Domain (Passive)]:** Mapping localized biological signatures and kinetic trajectories.
* **[Phase I: Functional Dynamics]:** Pacification protocols engaged. Lethal force disabled.

#### Scene 1: The Chain of Command

The battlefield was a deafening symphony of destruction. Cannonballs shattered the ice, and the air was thick with the scent of ozone, gunpowder, and blood.

Amidst the roaring pirates and the disciplined Marine formations, you walked casually across the frozen bay. Your white Seaman Recruit uniform was scorched, torn, and stained with the soot of Impel Down, but your posture was absolutely perfect. You stepped around craters and politely sidestepped crossing sword clashes, simply observing the flow of kinetic energy around you.

"Hey! You there!"

A group of Marine officers—two Captains and a handful of Sergeants—spotted you wandering aimlessly through the warzone. In the chaos of the Impel Down prisoners' arrival, they had completely lost track of who belonged where, but they instantly recognized the standard-issue white uniform with the blue seagull emblem.

"What the hell is a Seaman Recruit doing out here out of formation?!" one of the Captains barked, drawing his katana and marching toward you. "Did you fall off that pirate ship?! Get back in line immediately and help us push back the Whitebeard vanguard!"

You stopped, turning to face the Captain with a polite, mild expression.

"Your hierarchical authority is noted, Captain," you replied smoothly. "However, my current operational parameters do not align with standard Marine jurisdiction. I respectfully decline the order. Please stand aside."

"Insubordination in the middle of a war?!" the other Captain roared, his face turning purple with rage. "You little brat! Arrest him! Beat some sense into him!"

The officers lunged at you, weapons drawn. You did not even adopt a combat stance. As the first katana swung toward your neck, you mathematically calculated its trajectory. You simply sidestepped, tapping the flat of the blade with two fingers. The microscopic reversal of kinetic momentum sent the Captain crashing violently into his own squadmates.

The remaining Sergeants thrust their spears. You deflected them with mere flicks of your wrists, applying tiny bursts of **[Internal Destruction]** to the steel. The weapons shattered into dust upon contact with your bare hands. Moving with a fluid, ghost-like grace, you delivered gentle, open-handed palm strikes to their solar plexuses.

In less than three seconds, the entire squad collapsed to the ice, entirely unconscious but structurally unharmed. You dusted off your sleeves, preparing to resume your walk.

#### Scene 2: The Fall of the Giants

"Stop playing around, you fools!"

The ground trembled violently as a massive shadow fell over you. Vice Admiral John Giant, one of the most physically imposing officers in the Marine forces, marched forward, his boots cracking the thick ice. He looked down at the unconscious Captains and then glared at you, raising his gargantuan sword.

"Do not let a handful of prisoners and a confused, insubordinate Seaman disrupt the front lines!" John Giant bellowed to the surrounding troops. "I will crush this nuisance myself and restore order!"

The giant brought his massive blade crashing down toward you, a strike carrying enough physical force to cleave a Galleon in half.

You did not block. You engaged **[Primal Movement]**.

To the eyes of everyone watching, you simply vanished. John Giant's sword slammed into the ice, missing you completely and sending a massive shockwave across the bay. You reappeared instantly, hovering directly in front of the giant's face, entirely defying the localized gravity.

"Your physical output is commendable," you noted politely, looking directly into his wide, shocked eyes. "But your center of gravity is entirely exposed."

You shifted your hips and delivered a single, devastating elbow strike directly to the bridge of his nose.

*CRACK.*

The concussive shockwave rippled through the giant's skull. John Giant’s eyes rolled back into his head, his massive knees buckling as his colossal frame tipped backward, crashing onto the ice with the force of an earthquake.

Before his body even settled, your **[Sensory Domain]** detected an immediate kinetic threat entering your blind spot from above.

"Die, traitor!"

Vice Admiral Lonz, wearing his steel mask, leaped into the air behind you. He swung his gargantuan battle-axe down at your exposed back with murderous intent, aiming to cleave you in two while you were still suspended in the air.

You did not turn around. You did not even look at him.

Drawing upon the exact same spatial awareness that had once allowed you to read Admiral Borsalino's light-speed trajectories, you casually swung your right fist backward.

*BOOOOOOM!*

Your bare knuckles collided with the massive steel blade of the axe. The weapon shattered instantly, fragmenting into hundreds of jagged pieces. The sheer kinetic overflow of your punch carried straight through the broken weapon and struck Lonz squarely in the chest.

The masked giant was launched backward like a cannonball, skipping across the frozen bay until he slammed into a heavily fortified Marine barricade, completely neutralized.

#### Scene 3: The True Threat

The entire front line of the battlefield froze.

Marines and pirates alike stopped fighting, their weapons lowering as they stared in absolute, suffocating disbelief. A single Seaman Recruit had just one-shot two Giant Squad Vice Admirals in the span of five seconds, entirely unarmed, without shedding a single drop of blood.

High above the battlefield, on the execution platform, Fleet Admiral Sengoku’s face drained of all color.

Beside him, Garp closed his eyes, a complicated, knowing smirk tugging at the corner of his mouth. Below the scaffold, Admiral Sakazuki's magma flared violently as his burning hatred was reignited, Borsalino lowered his sunglasses, and Kuzan exhaled a long, freezing breath, remembering the heavy strike he had been forced to deliver in the Holy Land.

Sengoku grabbed the golden Den Den Mushi. His voice trembled with a mixture of absolute rage and profound, existential dread. He could no longer hide the truth. The bureaucracy had failed. The ice had melted.

"ALL MARINE FORCES! PULL BACK FROM THAT SEAMAN IMMEDIATELY!"

Sengoku’s voice boomed across the entire bay, echoing off the towering walls of Marineford and broadcasting to the giant screens in the Sabaody Archipelago. The sheer panic in the Fleet Admiral's voice made the tens of thousands of Marines flinch.

"Do not mistake him for a recruit! Do not engage him in close combat!" Sengoku roared, pointing a trembling finger directly at you as you floated gently back down to the ice. "He is not an insubordinate soldier! He is the greatest anomaly in the history of the World Government!"

The entire world fell silent. The Whitebeard Commanders paused. Shichibukai narrowed their eyes.

"That is Fajar Purnama!" Sengoku’s voice cracked under the weight of the horrifying truth. "The man who shattered the Holy Land of Mary Geoise! The man who leveled the Plaza of the Sun, forced a Buster Call upon the Celestial Dragons, and fought three Admirals to a standstill!"

A collective gasp of sheer terror rippled through the Marine ranks. The myth they had whispered about in the barracks—the ghost story of the invincible recruit—was standing right in front of them.

"He possesses no Devil Fruit, but his Haki defies all logic!" Sengoku warned, his knuckles turning white as he gripped the snail. "He took zero casualties in his wake, but he cannot be stopped by conventional means! Treat him as an absolute, catastrophic threat! DO NOT LET HIM REACH THE SCAFFOLD!"

Down on the ice, you adjusted your cuffs, ignoring the thousands of terrified eyes now locked onto your battered uniform.

You looked across the battlefield, past the Warlords, past the Admirals, and locked eyes directly with Sengoku. You offered the Fleet Admiral a polite, respectful bow, exactly as you had done on the day of your recruitment.

The prologue was over. Fajar Purnama had officially entered the Paramount War.