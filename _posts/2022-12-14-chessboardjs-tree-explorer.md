---
layout: post
title: Chess Board Tree Explorer HTML CSS JavaScript
description: A chess board tree explorer only in hyper text markup language, cascading style sheets, and javascript.
featuredimage: /assets/images/chessboardjs/covertree.png
category: tools
tags: [tools, chess, tree, explorer, html css, js, json]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/14/chessboardjs-tree-explorer
---
<style>
    /* Global Reset */
    * { box-sizing: border-box; } /* Important for sizing */
 
/* 
    body { 
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        background: #f4f4f4; 
        padding: 10px; /* Reduced padding for mobile */
        margin: 0;
    }
*/

    h1 { margin: 10px 0 20px 0; font-size: 1.5em; text-align: center; }

    /* Flex Container: Default is Row (Desktop) */
    #main-container { 
        display: flex; 
        flex-direction: row; 
        gap: 20px; 
        width: 100%;
        max-width: 900px; /* Prevent it from getting too wide on huge screens */
        justify-content: center;
        align-items: flex-start;
    }

    /* The Board Container */
    #myBoard { 
        width: 400px; 
        flex-shrink: 0; /* Prevent board from squishing */
    }

    /* The Sidebar */
    #sidebar { 
        width: 300px; 
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
        flex-grow: 1; /* Allow sidebar to fill space */
    }

    /* --- MOBILE OPTIMIZATION --- */
    @media (max-width: 768px) {
        #main-container {
            flex-direction: column; /* Stack vertically */
            align-items: center;
        }

        #myBoard {
            width: 100%;      /* Take full width of phone */
            max-width: 400px; /* But don't get massive on tablets */
        }

        #sidebar {
            width: 100%;      /* Full width controls */
            max-width: 400px;
        }
    }

    /* Move Buttons - Touch Friendly */
    .move-btn {
        padding: 15px; /* Larger tap target for fingers */
        background: white; 
        border: 1px solid #ccc; 
        cursor: pointer; 
        border-radius: 6px; 
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .move-btn:active { background: #eee; transform: translateY(1px); }
    
    /* Notation & Comments */
    #history { 
        font-family: monospace; 
        font-size: 1.1em; 
        background: #fff; 
        border: 1px solid #ccc; 
        padding: 10px;
        border-radius: 4px;
    }
    
    #comment-box { 
        background: #e8f5e9; 
        padding: 12px; 
        border-left: 5px solid #4caf50; 
        font-style: italic; 
        border-radius: 0 4px 4px 0;
    }

    /* Controls */
    #controls { display: flex; gap: 10px; }
    button { 
        flex: 1; /* Buttons share equal width */
        padding: 12px; 
        font-size: 1em;
        border: none;
        background: #333;
        color: white;
        border-radius: 4px;
    }
</style>

<link rel="stylesheet" href="/assets/css/3rdparty/chessboard-1.0.0.min.css">

<h1>♟️ Opening Tree Explorer</h1>

<div id="main-container">
  <div id="myBoard"></div>

  <div id="sidebar">
    <div id="history">Start</div>
    <div id="comment-box">Select a move to begin study.</div>
    <h4>Available Moves:</h4>
    <div id="move-options">Loading...</div>
    <div id="controls">
      <button id="resetBtn">↩️ Reset to Start</button>
      <button id="undoBtn">⬅️ Undo Last</button>
    </div>
  </div>
</div>

<script src="/assets/js/3rdparty/jquery-3.7.1.min.js"></script>
<script src="/assets/js/3rdparty/chess-0.12.1.min.js"></script>
<script src="/assets/js/3rdparty/chessboard-1.0.0.min.js"></script>

<script>
  // --- 1. SETUP ---
  var board = null;
  var game = new Chess();
  var rootData = [];        // The full JSON loaded from file
  var currentNode = null;   // The specific object in the JSON tree we are currently on
  var nodeStack = [];       // Keeps track of path to allow "Undo"

  var config = {
      position: 'start',
      draggable: false, 
      // Use local images if you have them, otherwise use the raw GitHub link
      pieceTheme: '/assets/images/chessboardjs/img/chesspieces/wikipedia/{piece}.png' 
  };
  board = Chessboard('myBoard', config);

  // --- 2. LOGIC ---

  async function init() {
      try {
          const response = await fetch('/assets/json/chessopenings-tree.json');
          rootData = await response.json();
          
          // "rootData" is an array of moves (e4, d4). 
          // We create a fake "root" node to hold them as children.
          currentNode = { children: rootData };
          
          renderMoveOptions();
      } catch (e) {
          document.getElementById('move-options').innerHTML = "Error loading openings.json";
          console.error(e);
          rootData = local_tree_openings;
          currentNode = { children: rootData };
          renderMoveOptions();
      }
  }

  function onMoveClick(childNode) {
      // 1. Make the move in the engine
      game.move(childNode.move);
      board.position(game.fen());

      // 2. Speak the move (Voice Notation)
      speak(childNode.move);

      // 3. Update State
      nodeStack.push(currentNode); // Save previous parent
      currentNode = childNode;     // Set new current node

      // 4. Update UI
      updateUI();
  }

  function undo() {
      if (nodeStack.length === 0) return; // Can't undo past start

      game.undo();
      board.position(game.fen());
      currentNode = nodeStack.pop(); // Go back to parent node
      updateUI();
  }

  function reset() {
      game.reset();
      board.start();
      currentNode = { children: rootData };
      nodeStack = [];
      updateUI();
  }

  // --- 3. UI RENDERING ---

  function updateUI() {
      // Update History Text
      const history = game.pgn();
      document.getElementById('history').innerText = history || "Start Position";

      // Update Comment
      const comment = currentNode.comment ? currentNode.comment : "No comment for this position.";
      document.getElementById('comment-box').innerText = comment;

      // Render Next Options
      renderMoveOptions();
  }

  function renderMoveOptions() {
      const container = document.getElementById('move-options');
      container.innerHTML = "";

      if (!currentNode.children || currentNode.children.length === 0) {
          container.innerHTML = "<em>End of line. Go back to study other variations.</em>";
          return;
      }

      // Loop through available children (next moves) and create buttons
      currentNode.children.forEach(child => {
          const btn = document.createElement('div');
          btn.className = 'move-btn';
          
          // Show Move (e.g., "e5") and Name (e.g., "Open Game")
          let html = `<strong>${child.move}</strong>`;
          if (child.name) {
              html += ` <span class="move-name">${child.name}</span>`;
          }
          btn.innerHTML = html;

          btn.onclick = () => onMoveClick(child);
          container.appendChild(btn);
      });
  }

  function speak(text) {
      if ('speechSynthesis' in window) {
          let ut = new SpeechSynthesisUtterance(text);
          ut.rate = 1.0;
          window.speechSynthesis.speak(ut);
      }
  }

  // --- 4. BUTTONS ---
  document.getElementById('undoBtn').onclick = undo;
  document.getElementById('resetBtn').onclick = reset;

  // Start
  init();

  local_tree_openings = [
      {
          "move": "e4",
          "name": "King's Pawn Opening",
          "comment": "Best move for beginners. Controls the center immediately.",
          "children": [
          {
              "move": "e5",
              "name": "Open Game",
              "children": [
              {
                  "move": "Nf3",
                  "name": "King's Knight Opening",
                  "children": [
                  {
                      "move": "Nc6",
                      "children": [
                      {
                          "move": "Bb5",
                          "name": "Ruy Lopez",
                          "comment": "Attacks the defender of the e5 pawn."
                      },
                      {
                          "move": "Bc4",
                          "name": "Italian Game",
                          "children": [
                              {
                                  "move": "Bc5",
                                  "name": "Giuoco Piano"
                              }
                          ]
                      }
                      ]
                  }
                  ]
              }
              ]
          },
          {
              "move": "c5",
              "name": "Sicilian Defense",
              "comment": "A sharp, counter-attacking response.",
              "children": []
          }
          ]
      },
      {
          "move": "d4",
          "name": "Queen's Pawn Opening",
          "children": []
      }
  ]
</script>

<h1>Reference</h1>
<ul>
    <li><a href="/tools/2022/12/13/chessboardjs">Simple One</a></li>
    <li><a href="https://chessboardjs.com">https://chessboardjs.com</a></li>
    <li><a href="https://jhlywa.github.io/chess.js">https://jhlywa.github.io/chess.js</a></li>
    <li><a href="https://gemini.google.com/">Acknowledgement to Google Gemini AI for helping writing the code.</a></li>
</ul>

<h1>Source Code</h1>

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <title>Chess Tree Study</title>
  <link rel="stylesheet" href="chessboard-1.0.0.min.css">
<style>
    /* Global Reset */
    * { box-sizing: border-box; } /* Important for sizing */
    body { 
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        background: #f4f4f4; 
        padding: 10px; /* Reduced padding for mobile */
        margin: 0;
    }
    h1 { margin: 10px 0 20px 0; font-size: 1.5em; text-align: center; }
    /* Flex Container: Default is Row (Desktop) */
    #main-container { 
        display: flex; 
        flex-direction: row; 
        gap: 20px; 
        width: 100%;
        max-width: 900px; /* Prevent it from getting too wide on huge screens */
        justify-content: center;
        align-items: flex-start;
    }
    /* The Board Container */
    #myBoard { 
        width: 400px; 
        flex-shrink: 0; /* Prevent board from squishing */
    }
    /* The Sidebar */
    #sidebar { 
        width: 300px; 
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
        flex-grow: 1; /* Allow sidebar to fill space */
    }
    /* --- MOBILE OPTIMIZATION --- */
    @media (max-width: 768px) {
        #main-container {
            flex-direction: column; /* Stack vertically */
            align-items: center;
        }
        #myBoard {
            width: 100%;      /* Take full width of phone */
            max-width: 400px; /* But don't get massive on tablets */
        }
        #sidebar {
            width: 100%;      /* Full width controls */
            max-width: 400px;
        }
    }
    /* Move Buttons - Touch Friendly */
    .move-btn {
        padding: 15px; /* Larger tap target for fingers */
        background: white; 
        border: 1px solid #ccc; 
        cursor: pointer; 
        border-radius: 6px; 
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .move-btn:active { background: #eee; transform: translateY(1px); }
    /* Notation & Comments */
    #history { 
        font-family: monospace; 
        font-size: 1.1em; 
        background: #fff; 
        border: 1px solid #ccc; 
        padding: 10px;
        border-radius: 4px;
    }
    #comment-box { 
        background: #e8f5e9; 
        padding: 12px; 
        border-left: 5px solid #4caf50; 
        font-style: italic; 
        border-radius: 0 4px 4px 0;
    }
    /* Controls */
    #controls { display: flex; gap: 10px; }
    button { 
        flex: 1; /* Buttons share equal width */
        padding: 12px; 
        font-size: 1em;
        border: none;
        background: #333;
        color: white;
        border-radius: 4px;
    }
</style>
</head>
<body>

  <h1>♟️ Opening Tree Explorer</h1>

  <div id="main-container">
    <div id="myBoard"></div>
    <div id="sidebar">
      <div id="history">Start</div>
      <div id="comment-box">Select a move to begin study.</div>
      <h4>Available Moves:</h4>
      <div id="move-options">Loading...</div>
      <div id="controls">
        <button id="resetBtn">↩️ Reset to Start</button>
        <button id="undoBtn">⬅️ Undo Last</button>
      </div>
    </div>
  </div>

  <script src="jquery-3.7.1.min.js"></script>
  <script src="chess-0.12.1.min.js"></script>
  <script src="chessboard-1.0.0.min.js"></script>

  <script>
    // --- 1. SETUP ---
    var board = null;
    var game = new Chess();
    var rootData = [];        // The full JSON loaded from file
    var currentNode = null;   // The specific object in the JSON tree we are currently on
    var nodeStack = [];       // Keeps track of path to allow "Undo"

    var config = {
        position: 'start',
        draggable: false, 
        // Use local images if you have them, otherwise use the raw GitHub link
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png' 
    };
    board = Chessboard('myBoard', config);

    // --- 2. LOGIC ---

    async function init() {
        try {
            const response = await fetch('chessopenings-tree.json');
            rootData = await response.json();
            
            // "rootData" is an array of moves (e4, d4). 
            // We create a fake "root" node to hold them as children.
            currentNode = { children: rootData };
            
            renderMoveOptions();
        } catch (e) {
            document.getElementById('move-options').innerHTML = "Error loading openings.json";
            console.error(e);
            rootData = local_tree_openings;
            currentNode = { children: rootData };
            renderMoveOptions();
        }
    }

    function onMoveClick(childNode) {
        // 1. Make the move in the engine
        game.move(childNode.move);
        board.position(game.fen());

        // 2. Speak the move (Voice Notation)
        speak(childNode.move);

        // 3. Update State
        nodeStack.push(currentNode); // Save previous parent
        currentNode = childNode;     // Set new current node

        // 4. Update UI
        updateUI();
    }

    function undo() {
        if (nodeStack.length === 0) return; // Can't undo past start

        game.undo();
        board.position(game.fen());
        currentNode = nodeStack.pop(); // Go back to parent node
        updateUI();
    }

    function reset() {
        game.reset();
        board.start();
        currentNode = { children: rootData };
        nodeStack = [];
        updateUI();
    }

    // --- 3. UI RENDERING ---

    function updateUI() {
        // Update History Text
        const history = game.pgn();
        document.getElementById('history').innerText = history || "Start Position";

        // Update Comment
        const comment = currentNode.comment ? currentNode.comment : "No comment for this position.";
        document.getElementById('comment-box').innerText = comment;

        // Render Next Options
        renderMoveOptions();
    }

    function renderMoveOptions() {
        const container = document.getElementById('move-options');
        container.innerHTML = "";

        if (!currentNode.children || currentNode.children.length === 0) {
            container.innerHTML = "<em>End of line. Go back to study other variations.</em>";
            return;
        }

        // Loop through available children (next moves) and create buttons
        currentNode.children.forEach(child => {
            const btn = document.createElement('div');
            btn.className = 'move-btn';
            
            // Show Move (e.g., "e5") and Name (e.g., "Open Game")
            let html = `<strong>${child.move}</strong>`;
            if (child.name) {
                html += ` <span class="move-name">${child.name}</span>`;
            }
            btn.innerHTML = html;

            btn.onclick = () => onMoveClick(child);
            container.appendChild(btn);
        });
    }

    function speak(text) {
        if ('speechSynthesis' in window) {
            let ut = new SpeechSynthesisUtterance(text);
            ut.rate = 1.0;
            window.speechSynthesis.speak(ut);
        }
    }

    // --- 4. BUTTONS ---
    document.getElementById('undoBtn').onclick = undo;
    document.getElementById('resetBtn').onclick = reset;

    // Start
    init();

    local_tree_openings = [
        {
            "move": "e4",
            "name": "King's Pawn Opening",
            "comment": "Best move for beginners. Controls the center immediately.",
            "children": [
            {
                "move": "e5",
                "name": "Open Game",
                "children": [
                {
                    "move": "Nf3",
                    "name": "King's Knight Opening",
                    "children": [
                    {
                        "move": "Nc6",
                        "children": [
                        {
                            "move": "Bb5",
                            "name": "Ruy Lopez",
                            "comment": "Attacks the defender of the e5 pawn."
                        },
                        {
                            "move": "Bc4",
                            "name": "Italian Game",
                            "children": [
                                {
                                    "move": "Bc5",
                                    "name": "Giuoco Piano"
                                }
                            ]
                        }
                        ]
                    }
                    ]
                }
                ]
            },
            {
                "move": "c5",
                "name": "Sicilian Defense",
                "comment": "A sharp, counter-attacking response.",
                "children": []
            }
            ]
        },
        {
            "move": "d4",
            "name": "Queen's Pawn Opening",
            "children": []
        }
    ]

    // --- RESPONISVE RESIZE FIX ---
    // When the browser window resizes, tell the board to resize
    window.addEventListener('resize', function() {
        board.resize();
    });

    // Also call it once quickly after load to catch any initial CSS layout shifts
    setTimeout(board.resize, 200);
  </script>
</body>
</html>
{% endhighlight %}