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
        { name: "The Fool", img: "/assets/images/tarot/the_fool.jpg" }, { name: "The Magician", img: "/assets/images/tarot/the_magician.jpg" }, { name: "The High Priestess", img: "/assets/images/tarot/the_high_priestess.jpg" }, { name: "The Empress", img: "/assets/images/tarot/the_empress.jpg" },
        { name: "The Emperor", img: "/assets/images/tarot/the_emperor.jpg" }, { name: "The Hierophant", img: "/assets/images/tarot/the_hierophant.jpg" }, { name: "The Lovers", img: "/assets/images/tarot/the_lovers.jpg" }, { name: "The Chariot", img: "/assets/images/tarot/the_chariot.jpg" },
        { name: "Strength", img: "/assets/images/tarot/strength.jpg" }, { name: "The Hermit", img: "/assets/images/tarot/the_hermit.jpg" }, { name: "Wheel of Fortune", img: "/assets/images/tarot/wheel_of_fortune.jpg" }, { name: "Justice", img: "/assets/images/tarot/justice.jpg" },
        { name: "The Hanged Man", img: "/assets/images/tarot/the_hanged_man.jpg" }, { name: "Death", img: "/assets/images/tarot/death.jpg" }, { name: "Temperance", img: "/assets/images/tarot/temperance.jpg" }, { name: "The Devil", img: "/assets/images/tarot/the_devil.jpg" },
        { name: "The Tower", img: "/assets/images/tarot/the_tower.jpg" }, { name: "The Star", img: "/assets/images/tarot/the_star.jpg" }, { name: "The Moon", img: "/assets/images/tarot/the_moon.jpg" }, { name: "The Sun", img: "/assets/images/tarot/the_sun.jpg" },
        { name: "Judgement", img: "/assets/images/tarot/judgement.jpg" }, { name: "The World", img: "/assets/images/tarot/the_world.jpg" },
        { name: "Ace of Wands", img: "/assets/images/tarot/ace_of_wands.jpg" }, { name: "Two of Wands", img: "/assets/images/tarot/two_of_wands.jpg" }, { name: "Three of Wands", img: "/assets/images/tarot/three_of_wands.jpg" }, { name: "Four of Wands", img: "/assets/images/tarot/four_of_wands.jpg" },
        { name: "Five of Wands", img: "/assets/images/tarot/five_of_wands.jpg" }, { name: "Six of Wands", img: "/assets/images/tarot/six_of_wands.jpg" }, { name: "Seven of Wands", img: "/assets/images/tarot/seven_of_wands.jpg" }, { name: "Eight of Wands", img: "/assets/images/tarot/eight_of_wands.jpg" },
        { name: "Nine of Wands", img: "/assets/images/tarot/nine_of_wands.jpg" }, { name: "Ten of Wands", img: "/assets/images/tarot/ten_of_wands.jpg" }, { name: "Page of Wands", img: "/assets/images/tarot/page_of_wands.jpg" }, { name: "Knight of Wands", img: "/assets/images/tarot/knight_of_wands.jpg" },
        { name: "Queen of Wands", img: "/assets/images/tarot/queen_of_wands.jpg" }, { name: "King of Wands", img: "/assets/images/tarot/king_of_wands.jpg" },
        { name: "Ace of Cups", img: "/assets/images/tarot/ace_of_cups.jpg" }, { name: "Two of Cups", img: "/assets/images/tarot/two_of_cups.jpg" }, { name: "Three of Cups", img: "/assets/images/tarot/three_of_cups.jpg" }, { name: "Four of Cups", img: "/assets/images/tarot/four_of_cups.jpg" },
        { name: "Five of Cups", img: "/assets/images/tarot/five_of_cups.jpg" }, { name: "Six of Cups", img: "/assets/images/tarot/six_of_cups.jpg" }, { name: "Seven of Cups", img: "/assets/images/tarot/seven_of_cups.jpg" }, { name: "Eight of Cups", img: "/assets/images/tarot/eight_of_cups.jpg" },
        { name: "Nine of Cups", img: "/assets/images/tarot/nine_of_cups.jpg" }, { name: "Ten of Cups", img: "/assets/images/tarot/ten_of_cups.jpg" }, { name: "Page of Cups", img: "/assets/images/tarot/page_of_cups.jpg" }, { name: "Knight of Cups", img: "/assets/images/tarot/knight_of_cups.jpg" },
        { name: "Queen of Cups", img: "/assets/images/tarot/queen_of_cups.jpg" }, { name: "King of Cups", img: "/assets/images/tarot/king_of_cups.jpg" },
        { name: "Ace of Swords", img: "/assets/images/tarot/ace_of_swords.jpg" }, { name: "Two of Swords", img: "/assets/images/tarot/two_of_swords.jpg" }, { name: "Three of Swords", img: "/assets/images/tarot/three_of_swords.jpg" }, { name: "Four of Swords", img: "/assets/images/tarot/four_of_swords.jpg" },
        { name: "Five of Swords", img: "/assets/images/tarot/five_of_swords.jpg" }, { name: "Six of Swords", img: "/assets/images/tarot/six_of_swords.jpg" }, { name: "Seven of Swords", img: "/assets/images/tarot/seven_of_swords.jpg" }, { name: "Eight of Swords", img: "/assets/images/tarot/eight_of_swords.jpg" },
        { name: "Nine of Swords", img: "/assets/images/tarot/nine_of_swords.jpg" }, { name: "Ten of Swords", img: "/assets/images/tarot/ten_of_swords.jpg" }, { name: "Page of Swords", img: "/assets/images/tarot/page_of_swords.jpg" }, { name: "Knight of Swords", img: "/assets/images/tarot/knight_of_swords.jpg" },
        { name: "Queen of Swords", img: "/assets/images/tarot/queen_of_swords.jpg" }, { name: "King of Swords", img: "/assets/images/tarot/king_of_swords.jpg" },
        { name: "Ace of Pentacles", img: "/assets/images/tarot/ace_of_pentacles.jpg" }, { name: "Two of Pentacles", img: "/assets/images/tarot/two_of_pentacles.jpg" }, { name: "Three of Pentacles", img: "/assets/images/tarot/three_of_pentacles.jpg" }, { name: "Four of Pentacles", img: "/assets/images/tarot/four_of_pentacles.jpg" },
        { name: "Five of Pentacles", img: "/assets/images/tarot/five_of_pentacles.jpg" }, { name: "Six of Pentacles", img: "/assets/images/tarot/six_of_pentacles.jpg" }, { name: "Seven of Pentacles", img: "/assets/images/tarot/seven_of_pentacles.jpg" }, { name: "Eight of Pentacles", img: "/assets/images/tarot/eight_of_pentacles.jpg" },
        { name: "Nine of Pentacles", img: "/assets/images/tarot/nine_of_pentacles.jpg" }, { name: "Ten of Pentacles", img: "/assets/images/tarot/ten_of_pentacles.jpg" }, { name: "Page of Pentacles", img: "/assets/images/tarot/page_of_pentacles.jpg" }, { name: "Knight of Pentacles", img: "/assets/images/tarot/knight_of_pentacles.jpg" },
        { name: "Queen of Pentacles", img: "/assets/images/tarot/queen_of_pentacles.jpg" }, { name: "King of Pentacles", img: "/assets/images/tarot/king_of_pentacles.jpg" }
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
                    <img src="images/${cardData.img}" alt="${cardData.name}" class="card-img">
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
                    <img src="images/${cardData.img}" alt="${cardData.name}" class="card-img">
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