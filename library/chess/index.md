---
layout: post
title: Fajar Purnama Chess Journey
categories: opinion
tags: [opinion, chess, philosophy, journey, portable game notation]
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

## Recommendation

This is my experience not as an expert but my experience of bottleneck or stuck at improving in chess. Like all other general activities, learning paths varies and differs to each players. It depends on the motivation of each players and be honest to your motivations in order to utilize my recommendations:

- **Motivation**: What do you want? Are you practicing for local fun activities? Then just focus on experience and if you have time the little bit of everything. Do you want to master chess? Then you have no choice but go for chess education as well where you dive into the philosophies and theories. However if you only want to become an expert, then chess entertainment is actually enough.
- **Experience**: if you are new and became addicted to playing chess, then this is your initial best path where minimizing blunders and mistakes actually made me the top player locally or among general people who just play chess for fun as the saying goes that sparring is one of the fastest training growth.
- **Entertainment**: watching tournaments, watching top players play while comment live, and watching content creators about chess can actually unlock our next level where for me just this clears my previous wall and made me interest in really studying chess.
- **Education**: 
- **Warnings**: Experience alone hits a wall and especially true when grinding fast pace gameplay like bullet games without stable and consistent correct mindset. Bullet games without mindset is just an addiction. I played 100x more bullets and did not help my skills at all and instead can make my skill worse where I return to Blitz, Rapid, and Classical games after that actually brings my habit of not thinking and just make a not bad move to win on time which results in bad games for slower pace games because we need to make the best, great, and brilliant moves here to win. Playing bullets with the mindset of not blundering only helps early players not late players. Playing with the mindset of also keeping our body fit, our mind clear, and our mind fresh is the correct mindset but can we keep this up constantly and consistently? When I return to Blitz, Rapid, and Classical, I have to meditate to clear my mind of not prioritizing time over startegy.

## Beginning

It really just started when I was in primary school that thought me board games and one of them is chess. Nothing special here really just knowing the pieces, the rules, and the objective of the game. It can be counted that I did not really play chess here.

## Routine Play - Blunders and Calculations

When I was in middle school, I started to play chess more often because there are friends who likes playing chess. We usually played it during recess or after school as entertainment. Finally, we began to get addicted to chess and play in parallel during classes.

This where I instinctively knew how to spot blunders and learned to be careful not to leave hanging pieces before making a move. Then I instinctively became aware of basic tactics like forks, pins, skewers, discovered attacks, and basic checkmates. The final instinct that I learned here is to calculate how prevent those basic tactics from happening to me and how to make those tactics happen to my opponent.

My message here to new player is that if you enjoy playing chess but still too lazy to study the theory, just play it often with friends and you will learn those basic tactics and calculations instinctively. Just this allows me to be one of the top players in my school and faculty in my university where I often won social (not competitive) tournaments conducted by them internally. However beyond this, no matter how often I play, I cannot get past a certain level where I may win most of the time against amateur players like myself but almost never won against professional players. My rating is stuck around 1200 ELO.

## Concept and Philosophy of Chess

It started in highschool when I was invited to chess clubs because I often won social tournaments. While back then my only instinct is not to blunder, here I was taught the concept of activating my pieces where the more pieces activated the higher probability of winning. Just this concept alone pushed my rating to 1300. This kept me the king in my faculty in university but in university level where there are professional players, I did not stand a chance. After this I did not have time to continue playing chess because of my hectic university life.

I started playing chess again during my graduate school where I have more free time. It was an era of Youtube, other video platforms, and other social medias where content creators made chess videos showing grandmaster games and other exciting games while explaining the concepts and philosophies behind the moves. After that I found out that many world champion tournaments games are already broadcasted online with analysis and commentary. It is here I learned the name of Garry Kasparov, Magnus Carlsen, Hikaru Nakamura, Fabiano Caruana, Anish Giri, Wesley So, Levon Aronian, Vasyl Ivanchuk, Anatoly Karpov, Viswanathan Anand,  and many more. I watch documentaries for entertainment such as watching about Bobby Fischer and Mikhail Tal.

Here I learned about seeing the whole board, the grand design, and priorities. Believe it or not, back then, not to blunder was my highest priority instead of paying attention to the king either my king's safety or my opponent's king. I wrote priorities which that pushed my rating to 1400 - 1500 ELO:

1. The King is worth everything while Queen is worth a lot, then Rooks, then Bishops and Knights, and finally Pawns.
2. Verify before making a move whether our king is safe, leaving pieces hanging, and whether we are blundering something.
3. For long games, identitify opponents weaknesses and always be aware of their king's safety, hanging pieces, their blunders, etc, and vice versa.
4. For short games, focus on quick solid development and king safety.
5. Activate all pieces as soon as possible, connect the pieces, and avoid wandering them especially the Queen.
6. Do not waste move and try to control the center of the board where if the opponent tries to focus on your castled king then blow the center as geometrically in chess the center is the quickest pace.
7. Do not castle as soon as possible but not too late either or quickly mate the opponent's king before they mate yours. 
8. Beware of traps for example free pieces are not always the best move where there can be better moves.
9. Try to trade pieces when you are ahead in material and avoid trading pieces when you are behind in material.
10. If you cannot find weakness, try to make one such as creating pawn structure weaknesses and concentrate attacks on certain areas.
11. If all above is done then push your pawns but try to not weaken your pawn structure.
12. If you are stuck, try to improve the position of your worst piece or try not to make your position worse. This is known as Positional Play. Instead of forcing a bad attack, I learned to use Prophylaxis—preventing my opponent's plans while slowly improving my own structure.

Then, I became interested in different kind of openings and want to learn them all where learned the names of [all 20 first move openings](/projects/webapp/chess/webapps/simpleopenings/). This actually opens more concepts for me and as I explore apps like chess.com I found they have interactive study materials and progresses. It is here I learned the terms positional play, pawn structure, weak squares, outposts, prophylaxis, etc eventhough I only know their definitions and touched the surface but pushed my rating to around 1500 - 1600 ELO.

## Focus on Few Openings

Hikaru Nakamura once said in one of his videos that it is better to focus on few openings and master them rather than learning many openings superficially. Following this advice, I focused on mastering the Queen's Gambit as white and Sicilian Defense as black. I made a [chess move explorer web application](/projects/webapp/chess/webapps/treeexplorer/) to track my studies. This is my current progress as of this writing where I start playing chess again after graduating graduate school and start working. I also learned about other than chess like my physical condition, mental state, and emotion awareness. My current focus are:

- Still do not abandon exploring and try all kinds of opening in daily games that takes many days. 
- For Classic, Rapid, Blitz, and Bullet as white:
  - Englund Gambit Accepted
  - Queen's Gambit for all other variations. 
- For Classic, Rapid, Blitz, and Bullet as black:
  - King Indian Defense against Queen's Pawn Opening
  - Accelerated Dragon against e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6
  - Siscilian Kan against all other King's Pawn opening
  - Queen's Pawn Opening against all other openings
  - Sometimes Slav Defense in bullet when I accidently play Queen's Pawn Opening against white's Queen's Pawn Opening.