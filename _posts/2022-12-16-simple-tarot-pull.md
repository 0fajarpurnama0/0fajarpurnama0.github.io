---
layout: post
title: Simple Tarot Card Pull in HTML CSS JS
description: Just to pull tarot cards randomly in html css js.
featuredimage: /assets/images/others/Viscontisforzatarot.jpg
category: tools
tags: [tools, cards, tarot, html css, js, json]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/16/simple-tarot-pull
---
<style>
    :root {
        --card-width: 100px;
        --card-height: 170px; 
        --bg-color: #1a1a1a;
        --card-back-pattern: repeating-linear-gradient(45deg, #2c3e50, #2c3e50 10px, #34495e 10px, #34495e 20px);
        --accent-color: #f1c40f;
        --panel-bg: #262626;
    }

    body {
        font-family: 'Georgia', serif;
        background-color: var(--bg-color);
        color: #ecf0f1;
        margin: 0;
        padding: 20px;
    }

    /* --- STICKY DASHBOARD --- */
    .dashboard {
        position: sticky;
        top: 10px;
        z-index: 1000;
        background-color: var(--panel-bg);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        max-width: 800px;
        margin: 0 auto 30px auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .controls {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    /* --- THE LOG AREA --- */
    .log-container {
        width: 100%;
    }

    #reading-log {
        width: 100%;
        height: 80px;
        background: #111;
        color: var(--accent-color);
        border: 1px solid #444;
        border-radius: 6px;
        padding: 10px;
        font-family: 'Courier New', monospace;
        resize: none;
        box-sizing: border-box;
    }

    button {
        background-color: var(--accent-color);
        border: none;
        padding: 10px 20px;
        font-size: 0.9rem;
        cursor: pointer;
        border-radius: 6px;
        color: #1a1a1a;
        font-weight: 800;
        transition: all 0.2s;
    }

    button.secondary {
        background-color: #444;
        color: white;
    }

    button:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    /* --- THE GRID LAYOUT --- */
    .card-spread {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
        gap: 15px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        perspective: 1000px;
    }

    /* --- CARD STYLES --- */
    .card {
        height: var(--card-height);
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    }

    .card.flipped {
        transform: rotateY(180deg);
        cursor: default;
    }

    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid #34495e;
        box-sizing: border-box;
    }

    .card-back { background: var(--card-back-pattern); }

    .card-front {
        background-color: #fff;
        color: #222;
        transform: rotateY(180deg);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .card-img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .card-text { display: none; padding: 10px; font-size: 0.8rem; font-weight: bold; }

    /* Fallback */
    .card-front.image-failed .card-img { display: none; }
    .card-front.image-failed .card-text { display: block; }
</style>

<div class="dashboard">
    <div class="log-container">
        <textarea id="reading-log" readonly placeholder="Your drawn cards will appear here..."></textarea>
    </div>
    <div class="controls">
        <button onclick="initTable()">Reshuffle Deck</button>
        <button class="secondary" onclick="copyLog()">Copy Reading</button>
        <button class="secondary" onclick="clearLog()">Clear Log</button>
    </div>
</div>

<div class="card-spread" id="spread"></div>

<script>
    const tarotDeck = [
        { name: "The Fool", img: "the_fool.jpg" }, { name: "The Magician", img: "the_magician.jpg" }, { name: "The High Priestess", img: "the_high_priestess.jpg" }, { name: "The Empress", img: "the_empress.jpg" },
        { name: "The Emperor", img: "the_emperor.jpg" }, { name: "The Hierophant", img: "the_hierophant.jpg" }, { name: "The Lovers", img: "the_lovers.jpg" }, { name: "The Chariot", img: "the_chariot.jpg" },
        { name: "Strength", img: "strength.jpg" }, { name: "The Hermit", img: "the_hermit.jpg" }, { name: "Wheel of Fortune", img: "wheel_of_fortune.jpg" }, { name: "Justice", img: "justice.jpg" },
        { name: "The Hanged Man", img: "the_hanged_man.jpg" }, { name: "Death", img: "death.jpg" }, { name: "Temperance", img: "temperance.jpg" }, { name: "The Devil", img: "the_devil.jpg" },
        { name: "The Tower", img: "the_tower.jpg" }, { name: "The Star", img: "the_star.jpg" }, { name: "The Moon", img: "the_moon.jpg" }, { name: "The Sun", img: "the_sun.jpg" },
        { name: "Judgement", img: "judgement.jpg" }, { name: "The World", img: "the_world.jpg" },
        { name: "Ace of Wands", img: "ace_of_wands.jpg" }, { name: "Two of Wands", img: "two_of_wands.jpg" }, { name: "Three of Wands", img: "three_of_wands.jpg" }, { name: "Four of Wands", img: "four_of_wands.jpg" },
        { name: "Five of Wands", img: "five_of_wands.jpg" }, { name: "Six of Wands", img: "six_of_wands.jpg" }, { name: "Seven of Wands", img: "seven_of_wands.jpg" }, { name: "Eight of Wands", img: "eight_of_wands.jpg" },
        { name: "Nine of Wands", img: "nine_of_wands.jpg" }, { name: "Ten of Wands", img: "ten_of_wands.jpg" }, { name: "Page of Wands", img: "page_of_wands.jpg" }, { name: "Knight of Wands", img: "knight_of_wands.jpg" },
        { name: "Queen of Wands", img: "queen_of_wands.jpg" }, { name: "King of Wands", img: "king_of_wands.jpg" },
        { name: "Ace of Cups", img: "ace_of_cups.jpg" }, { name: "Two of Cups", img: "two_of_cups.jpg" }, { name: "Three of Cups", img: "three_of_cups.jpg" }, { name: "Four of Cups", img: "four_of_cups.jpg" },
        { name: "Five of Cups", img: "five_of_cups.jpg" }, { name: "Six of Cups", img: "six_of_cups.jpg" }, { name: "Seven of Cups", img: "seven_of_cups.jpg" }, { name: "Eight of Cups", img: "eight_of_cups.jpg" },
        { name: "Nine of Cups", img: "nine_of_cups.jpg" }, { name: "Ten of Cups", img: "ten_of_cups.jpg" }, { name: "Page of Cups", img: "page_of_cups.jpg" }, { name: "Knight of Cups", img: "knight_of_cups.jpg" },
        { name: "Queen of Cups", img: "queen_of_cups.jpg" }, { name: "King of Cups", img: "king_of_cups.jpg" },
        { name: "Ace of Swords", img: "ace_of_swords.jpg" }, { name: "Two of Swords", img: "two_of_swords.jpg" }, { name: "Three of Swords", img: "three_of_swords.jpg" }, { name: "Four of Swords", img: "four_of_swords.jpg" },
        { name: "Five of Swords", img: "five_of_swords.jpg" }, { name: "Six of Swords", img: "six_of_swords.jpg" }, { name: "Seven of Swords", img: "seven_of_swords.jpg" }, { name: "Eight of Swords", img: "eight_of_swords.jpg" },
        { name: "Nine of Swords", img: "nine_of_swords.jpg" }, { name: "Ten of Swords", img: "ten_of_swords.jpg" }, { name: "Page of Swords", img: "page_of_swords.jpg" }, { name: "Knight of Swords", img: "knight_of_swords.jpg" },
        { name: "Queen of Swords", img: "queen_of_swords.jpg" }, { name: "King of Swords", img: "king_of_swords.jpg" },
        { name: "Ace of Pentacles", img: "ace_of_pentacles.jpg" }, { name: "Two of Pentacles", img: "two_of_pentacles.jpg" }, { name: "Three of Pentacles", img: "three_of_pentacles.jpg" }, { name: "Four of Pentacles", img: "four_of_pentacles.jpg" },
        { name: "Five of Pentacles", img: "five_of_pentacles.jpg" }, { name: "Six of Pentacles", img: "six_of_pentacles.jpg" }, { name: "Seven of Pentacles", img: "seven_of_pentacles.jpg" }, { name: "Eight of Pentacles", img: "eight_of_pentacles.jpg" },
        { name: "Nine of Pentacles", img: "nine_of_pentacles.jpg" }, { name: "Ten of Pentacles", img: "ten_of_pentacles.jpg" }, { name: "Page of Pentacles", img: "page_of_pentacles.jpg" }, { name: "Knight of Pentacles", img: "knight_of_pentacles.jpg" },
        { name: "Queen of Pentacles", img: "queen_of_pentacles.jpg" }, { name: "King of Pentacles", img: "king_of_pentacles.jpg" }
    ];

    const spreadContainer = document.getElementById('spread');
    const logArea = document.getElementById('reading-log');

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function initTable() {
        spreadContainer.innerHTML = '';
        const shuffledDeck = shuffle([...tarotDeck]);

        shuffledDeck.forEach(cardData => {
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            
            cardEl.innerHTML = `
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <img src="/assets/images/tarot/default/${cardData.img}" alt="${cardData.name}" class="card-img">
                    <h3 class="card-text">${cardData.name}</h3>
                </div>
            `;

            cardEl.addEventListener('click', function() {
                // If it's already flipped, don't do anything
                if (this.classList.contains('flipped')) return;

                this.classList.add('flipped');
                
                // Add to the log
                appendToLog(cardData.name);
            });

            // Error fallback for images
            const imgElement = cardEl.querySelector('.card-img');
            imgElement.addEventListener('error', function() {
                this.closest('.card-front').classList.add('image-failed');
            });

            spreadContainer.appendChild(cardEl);
        });
    }

    function appendToLog(name) {
        // Add name and a newline
        logArea.value += name + "\n";
        // Auto-scroll to the bottom of the log
        logArea.scrollTop = logArea.scrollHeight;
    }

    function clearLog() {
        logArea.value = "";
    }

    function copyLog() {
        if (logArea.value === "") return;
        
        logArea.select();
        document.execCommand('copy');
        alert("Reading copied to clipboard!");
    }

    initTable();
</script>

<h1>Reference</h1>
<ul>
    <li><a href="https://gemini.google.com">Acknowledgement to Google Gemini AI for helping writing the code.</a></li>
</ul>

<h1>Source Code</h1>
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarot Table with Log</title>
    <style>
        :root {
            --card-width: 100px;
            --card-height: 170px; 
            --bg-color: #1a1a1a;
            --card-back-pattern: repeating-linear-gradient(45deg, #2c3e50, #2c3e50 10px, #34495e 10px, #34495e 20px);
            --accent-color: #f1c40f;
            --panel-bg: #262626;
        }

        body {
            font-family: 'Georgia', serif;
            background-color: var(--bg-color);
            color: #ecf0f1;
            margin: 0;
            padding: 20px;
        }

        /* --- STICKY DASHBOARD --- */
        .dashboard {
            position: sticky;
            top: 10px;
            z-index: 1000;
            background-color: var(--panel-bg);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            max-width: 800px;
            margin: 0 auto 30px auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .controls {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* --- THE LOG AREA --- */
        .log-container {
            width: 100%;
        }

        #reading-log {
            width: 100%;
            height: 80px;
            background: #111;
            color: var(--accent-color);
            border: 1px solid #444;
            border-radius: 6px;
            padding: 10px;
            font-family: 'Courier New', monospace;
            resize: none;
            box-sizing: border-box;
        }

        button {
            background-color: var(--accent-color);
            border: none;
            padding: 10px 20px;
            font-size: 0.9rem;
            cursor: pointer;
            border-radius: 6px;
            color: #1a1a1a;
            font-weight: 800;
            transition: all 0.2s;
        }

        button.secondary {
            background-color: #444;
            color: white;
        }

        button:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        /* --- THE GRID LAYOUT --- */
        .card-spread {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
            gap: 15px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            perspective: 1000px;
        }

        /* --- CARD STYLES --- */
        .card {
            height: var(--card-height);
            border-radius: 8px;
            cursor: pointer;
            position: relative;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px rgba(0,0,0,0.5);
        }

        .card.flipped {
            transform: rotateY(180deg);
            cursor: default;
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 8px;
            overflow: hidden;
            border: 2px solid #34495e;
            box-sizing: border-box;
        }

        .card-back { background: var(--card-back-pattern); }

        .card-front {
            background-color: #fff;
            color: #222;
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .card-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .card-text { display: none; padding: 10px; font-size: 0.8rem; font-weight: bold; }

        /* Fallback */
        .card-front.image-failed .card-img { display: none; }
        .card-front.image-failed .card-text { display: block; }

    </style>
</head>
<body>

    <div class="dashboard">
        <div class="log-container">
            <textarea id="reading-log" readonly placeholder="Your drawn cards will appear here..."></textarea>
        </div>
        <div class="controls">
            <button onclick="initTable()">Reshuffle Deck</button>
            <button class="secondary" onclick="copyLog()">Copy Reading</button>
            <button class="secondary" onclick="clearLog()">Clear Log</button>
        </div>
    </div>

    <div class="card-spread" id="spread"></div>

<script>
    const tarotDeck = [
        { name: "The Fool", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/500px-RWS_Tarot_00_Fool.jpg" }, { name: "The Magician", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/500px-RWS_Tarot_01_Magician.jpg" }, { name: "The High Priestess", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/500px-RWS_Tarot_02_High_Priestess.jpg" }, { name: "The Empress", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/500px-RWS_Tarot_03_Empress.jpg" },
        { name: "The Emperor", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/500px-RWS_Tarot_04_Emperor.jpg" }, { name: "The Hierophant", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/500px-RWS_Tarot_05_Hierophant.jpg" }, { name: "The Lovers", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/500px-RWS_Tarot_06_Lovers.jpg" }, { name: "The Chariot", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/500px-RWS_Tarot_07_Chariot.jpg" },
        { name: "Strength", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/500px-RWS_Tarot_08_Strength.jpg" }, { name: "The Hermit", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/500px-RWS_Tarot_09_Hermit.jpg" }, { name: "Wheel of Fortune", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/500px-RWS_Tarot_10_Wheel_of_Fortune.jpg" }, { name: "Justice", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/500px-RWS_Tarot_11_Justice.jpg" },
        { name: "The Hanged Man", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/500px-RWS_Tarot_12_Hanged_Man.jpg" }, { name: "Death", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/500px-RWS_Tarot_13_Death.jpg" }, { name: "Temperance", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/500px-RWS_Tarot_14_Temperance.jpg" }, { name: "The Devil", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/500px-RWS_Tarot_15_Devil.jpg" },
        { name: "The Tower", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/500px-RWS_Tarot_16_Tower.jpg" }, { name: "The Star", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/500px-RWS_Tarot_17_Star.jpg" }, { name: "The Moon", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Major_18.jpg" }, { name: "The Sun", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/500px-RWS_Tarot_19_Sun.jpg" },
        { name: "Judgement", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/500px-RWS_Tarot_20_Judgement.jpg" }, { name: "The World", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/500px-RWS_Tarot_21_World.jpg" },
        { name: "Ace of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/500px-Wands01.jpg" }, { name: "Two of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/500px-Wands02.jpg" }, { name: "Three of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/500px-Wands03.jpg" }, { name: "Four of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/500px-Wands04.jpg" },
        { name: "Five of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/500px-Wands05.jpg" }, { name: "Six of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/500px-Wands06.jpg" }, { name: "Seven of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/500px-Wands07.jpg" }, { name: "Eight of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/500px-Wands08.jpg" },
        { name: "Nine of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/500px-Tarot_Nine_of_Wands.jpg" }, { name: "Ten of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/500px-Wands10.jpg" }, { name: "Page of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/500px-Wands11.jpg" }, { name: "Knight of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/500px-Wands12.jpg" },
        { name: "Queen of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/500px-Wands13.jpg" }, { name: "King of Wands", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/500px-Wands14.jpg" },
        { name: "Ace of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/500px-Cups01.jpg" }, { name: "Two of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/500px-Cups02.jpg" }, { name: "Three of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/500px-Cups03.jpg" }, { name: "Four of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/500px-Cups04.jpg" },
        { name: "Five of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/500px-Cups05.jpg" }, { name: "Six of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/500px-Cups06.jpg" }, { name: "Seven of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/500px-Cups07.jpg" }, { name: "Eight of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/500px-Cups08.jpg" },
        { name: "Nine of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/500px-Cups09.jpg" }, { name: "Ten of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/500px-Cups10.jpg" }, { name: "Page of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/500px-Cups11.jpg" }, { name: "Knight of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/500px-Cups12.jpg" },
        { name: "Queen of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/500px-Cups13.jpg" }, { name: "King of Cups", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/500px-Cups14.jpg" },
        { name: "Ace of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/500px-Swords01.jpg" }, { name: "Two of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/500px-Swords02.jpg" }, { name: "Three of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/500px-Swords03.jpg" }, { name: "Four of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/500px-Swords04.jpg" },
        { name: "Five of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/500px-Swords05.jpg" }, { name: "Six of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/500px-Swords06.jpg" }, { name: "Seven of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/500px-Swords07.jpg" }, { name: "Eight of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/500px-Swords08.jpg" },
        { name: "Nine of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/500px-Swords09.jpg" }, { name: "Ten of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/500px-Swords10.jpg" }, { name: "Page of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/500px-Swords11.jpg" }, { name: "Knight of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/500px-Swords12.jpg" },
        { name: "Queen of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/500px-Swords13.jpg" }, { name: "King of Swords", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/500px-Swords14.jpg" },
        { name: "Ace of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/500px-Pents01.jpg" }, { name: "Two of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/500px-Pents02.jpg" }, { name: "Three of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/500px-Pents03.jpg" }, { name: "Four of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/500px-Pents04.jpg" },
        { name: "Five of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/500px-Pents05.jpg" }, { name: "Six of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/500px-Pents06.jpg" }, { name: "Seven of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/500px-Pents07.jpg" }, { name: "Eight of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/500px-Pents08.jpg" },
        { name: "Nine of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/500px-Pents09.jpg" }, { name: "Ten of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/500px-Pents10.jpg" }, { name: "Page of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/500px-Pents11.jpg" }, { name: "Knight of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/500px-Pents12.jpg" },
        { name: "Queen of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/500px-Pents13.jpg" }, { name: "King of Pentacles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/500px-Pents14.jpg" }
    ];

    const spreadContainer = document.getElementById('spread');
    const logArea = document.getElementById('reading-log');

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function initTable() {
        spreadContainer.innerHTML = '';
        const shuffledDeck = shuffle([...tarotDeck]);

        shuffledDeck.forEach(cardData => {
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            
            cardEl.innerHTML = `
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <img src="${cardData.img}" alt="${cardData.name}" class="card-img">
                    <h3 class="card-text">${cardData.name}</h3>
                </div>
            `;

            cardEl.addEventListener('click', function() {
                // If it's already flipped, don't do anything
                if (this.classList.contains('flipped')) return;

                this.classList.add('flipped');
                
                // Add to the log
                appendToLog(cardData.name);
            });

            // Error fallback for images
            const imgElement = cardEl.querySelector('.card-img');
            imgElement.addEventListener('error', function() {
                this.closest('.card-front').classList.add('image-failed');
            });

            spreadContainer.appendChild(cardEl);
        });
    }

    function appendToLog(name) {
        // Add name and a newline
        logArea.value += name + "\n";
        // Auto-scroll to the bottom of the log
        logArea.scrollTop = logArea.scrollHeight;
    }

    function clearLog() {
        logArea.value = "";
    }

    function copyLog() {
        if (logArea.value === "") return;
        
        logArea.select();
        document.execCommand('copy');
        alert("Reading copied to clipboard!");
    }

    initTable();
</script>
</body>
</html>
{% endhighlight %}