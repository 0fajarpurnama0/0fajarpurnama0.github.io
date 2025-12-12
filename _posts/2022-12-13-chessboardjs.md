---
layout: post
title: Chess Board HTML CSS JavaScript
description: A chess board only in hyper text markup language, cascading style sheets, and javascript.
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Modern_Fianchetto_Setup._Chess_game_Staunton_No._6.jpg/1280px-Modern_Fianchetto_Setup._Chess_game_Staunton_No._6.jpg
category: tools
tags: [tools, chess, html css, js, json]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/13/chessboardjs
---
<style>
/* Simple layout styling */
body {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
}
#myBoard {
  width: 400px;
  margin: 20px;
}
.controls {
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
select {
  padding: 10px;
  font-size: 16px;
}
#notationDisplay {
  margin-top: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  width: 400px; /* Match board width */
  background-color: #fff;
  font-size: 14px;
}

#pgn-output .highlight {
  font-weight: bold;
  background-color: #ffeb3b; /* Highlight color */
  padding: 2px 4px;
  border-radius: 3px;
}
</style>

<link rel="stylesheet" href="/assets/css/3rdparty/chessboard-1.0.0.min.css">

<h1>Opening Study Board</h1>
<div class="controls">
  <select id="openingSelector">
    <option value="" disabled selected>Select an Opening</option>
    <option value="custom" style="font-weight: bold; color: blue;">-- Paste Custom PGN --</option>
    </select>

  <div id="customInputContainer" style="display: none; margin-top: 10px;">
    <textarea id="pgnInput" rows="3" style="width: 100%; box-sizing: border-box;" 
      placeholder="Paste moves here (e.g., 1. e4 e5 2. Nf3...)"></textarea>
    <br>
    <button id="loadCustomBtn" style="margin-top: 5px; background-color: #4CAF50; color: white;">Load Moves</button>
  </div>

  <div style="margin-top: 10px;">
    <button id="resetBtn">↩️ Reset</button>
    <button id="prevBtn">⬅️ Back</button>
    <button id="nextBtn">Forward ➡️</button>
  </div>
</div>

<div id="myBoard"></div>

<div id="notationDisplay">
<p>Notation: <span id="pgn-output"></span></p>
</div>

<script src="/assets/js/3rdparty/jquery-3.7.1.min.js"></script>
<script src="/assets/js/3rdparty/chess-0.12.1.min.js"></script>
<script src="/assets/js/3rdparty/chessboard-1.0.0.min.js"></script>

<script>
  // --- 1. STATE VARIABLES ---
  var board = null;
  var game = new Chess();
  var currentOpeningMoves = [];
  var currentMoveIndex = -1;
  let openings = {}; // The JSON data will be loaded into this empty object

  const local_openings = {
      "Ruy Lopez": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6",
      "Sicilian Defense (Najdorf)": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
      "French Defense": "e4 e6 d4 d5 Nc3 Bb4",
      "Queen's Gambit": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7",
      "King's Indian Defense": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6"
  };

  // --- 2. INITIALIZATION ---
  var config = {
      position: 'start',
      draggable: false, 
      pieceTheme: '/assets/images/chessboardjs/img/chesspieces/wikipedia/{piece}.png' 
  }
  board = Chessboard('myBoard', config);

  const selector = document.getElementById('openingSelector');
  const pgnOutput = document.getElementById('pgn-output');
  const customContainer = document.getElementById('customInputContainer');
  const pgnInput = document.getElementById('pgnInput');

  // Load Data (with Fallback Logic)
  async function initBoard() {
    let dataLoaded = false;
    
    try {
        const response = await fetch('/assets/json/chessopenings.json');
        // Check if the response is OK (HTTP status 200)
        if (response.ok) {
            openings = await response.json();
            dataLoaded = true;
            console.log("Openings loaded successfully from openings.json.");
        } else {
            throw new Error(`Failed to fetch JSON with status: ${response.status}`);
        }
    } catch (error) {
        // If fetching or parsing fails, use the local fallback data
        console.warn("Could not load openings.json. Using local fallback data.", error);
        openings = local_openings; // from chessopenings.js
        dataLoaded = true;
    }

    // Only proceed if we have successfully loaded data (from JSON or fallback)
    if (dataLoaded) {
        // Populate Dropdown
        for (const name in openings) {
            const option = document.createElement('option');
            option.value = name;
            option.innerText = name;
            selector.appendChild(option);
        }
    }
    
    attachEventListeners();
    updateBoardAndNotation();
  }

  // --- 3. HELPER: PARSE PGN ---
  function loadMovesFromPGN(pgnText) {
      // Use Chess.js to parse the PGN automatically
      const tempGame = new Chess();
      const valid = tempGame.load_pgn(pgnText);
      
      if (!valid) {
          // Fallback: Manually try to parse standard moves
          tempGame.reset();
          const moves = pgnText.replace(/[\d]+\./g, '').split(/\s+/);
          for(let move of moves) {
              if(move.trim()) tempGame.move(move);
          }
      }

      // Extract the clean list of moves from the temp game history
      return tempGame.history(); 
  }

  // --- 4. CORE FUNCTIONS ---
  function updateBoardAndNotation() {
      board.position(game.fen());
      
      // Render PGN with highlight
      const history = game.history({ verbose: true });
      let pgnString = '';
      for (let i = 0; i < history.length; i++) {
          if (i % 2 === 0) pgnString += (i / 2 + 1) + '. ';
          const moveClass = (i === currentMoveIndex) ? ' class="highlight"' : '';
          pgnString += `<span${moveClass}>${history[i].san}</span> `;
      }
      pgnOutput.innerHTML = pgnString.trim() || "Start Position";
  }

  function speakNotation(move) {
      if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(move);
          utterance.rate = 1.0; 
          window.speechSynthesis.speak(utterance);
      }
  }

  // --- 5. EVENT HANDLERS ---
  function attachEventListeners() {
      
      // Dropdown Change
      selector.addEventListener('change', () => {
          const val = selector.value;
          
          if (val === "custom") {
              customContainer.style.display = "block";
          } else {
              customContainer.style.display = "none";
              // Get moves from the globally loaded 'openings' object (either JSON or local)
              currentOpeningMoves = openings[val].split(" ").filter(m => m.trim().length > 0);
              game.reset();
              currentMoveIndex = -1;
              updateBoardAndNotation();
          }
      });

      // "Load Moves" Button for Custom Input
      document.getElementById('loadCustomBtn').addEventListener('click', () => {
          const text = pgnInput.value;
          if(!text.trim()) { alert("Please enter some moves first."); return; }

          const parsedMoves = loadMovesFromPGN(text);
          
          if (parsedMoves.length === 0) {
              alert("Could not parse moves. Please check notation (e.g., 'e4 e5 Nf3').");
          } else {
              currentOpeningMoves = parsedMoves;
              game.reset();
              currentMoveIndex = -1;
              updateBoardAndNotation();
          }
      });

      // Forward Button
      document.getElementById('nextBtn').addEventListener('click', () => {
          if (currentMoveIndex < currentOpeningMoves.length - 1) {
              currentMoveIndex++;
              const movePlayed = currentOpeningMoves[currentMoveIndex];
              game.move(movePlayed);
              speakNotation(movePlayed);
              updateBoardAndNotation();
          }
      });

      // Back Button
      document.getElementById('prevBtn').addEventListener('click', () => {
          if (currentMoveIndex >= 0) {
              game.undo();
              currentMoveIndex--;
              updateBoardAndNotation();
          }
      });

      // Reset Button
      document.getElementById('resetBtn').addEventListener('click', () => {
          game.reset();
          currentMoveIndex = -1;
          updateBoardAndNotation();
      });
  }

  initBoard();
</script>

<h1>Reference</h1>
<ul>
    <li><a href="https://chessboardjs.com">https://chessboardjs.com</a></li>
    <li><a href="https://jhlywa.github.io/chess.js">https://jhlywa.github.io/chess.js</a></li>
    <li><a href="https://gemini.google.com/">Acknowledgement to Google Gemini AI for helping writing the code.</a></li>
</ul>

<h1>Source Code</h1>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <title>Chess Opening Study</title>
  <link rel="stylesheet"
    href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
  <style>
        /* Simple layout styling */
    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f0f0f0;
      padding: 20px;
    }
    #myBoard {
      width: 400px;
      margin: 20px;
    }
    .controls {
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    select {
      padding: 10px;
      font-size: 16px;
    }
    #notationDisplay {
      margin-top: 15px;
      border: 1px solid #ccc;
      padding: 10px;
      width: 400px; /* Match board width */
      background-color: #fff;
      font-size: 14px;
    }
    #pgn-output .highlight {
      font-weight: bold;
      background-color: #ffeb3b; /* Highlight color */
      padding: 2px 4px;
      border-radius: 3px;
    }
  </style>
</head>
<body>

  <h1>Opening Study Board</h1>
  <div class="controls">
    <select id="openingSelector">
      <option value="" disabled selected>Select an Opening</option>
    </select>
    <button id="resetBtn">↩️ Reset</button>
    <button id="prevBtn">⬅️ Back</button>
    <button id="nextBtn">Forward ➡️</button>
  </div>

  <div id="myBoard"></div>
  <div id="notationDisplay">
    <p>Notation: <span id="pgn-output"></span></p>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
  <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>

  <script>
    // --- 1. CONFIGURATION & OPENINGS DATA ---
    const openings = {
      "Ruy Lopez": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6",
      "Sicilian Defense (Najdorf)": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
      "French Defense": "e4 e6 d4 d5 Nc3 Bb4",
      "Queen's Gambit": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7",
      "King's Indian Defense": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6"
    };

    // --- 2. INITIALIZATION & State ---
    var board = null;
    var game = new Chess();
    var currentOpeningMoves = []; // Stores the full sequence of moves (e.g., ["e4", "e5", ...])
    var currentMoveIndex = -1;  // Tracks the current position in the sequence

    var config = {
        position: 'start',
        draggable: false, 
        // 👇 Local Image Path
        pieceTheme: 'https://raw.githubusercontent.com/oakmac/chessboardjs/master/website/img/chesspieces/wikipedia/{piece}.png' 
    }
    board = Chessboard('myBoard', config);

    const selector = document.getElementById('openingSelector');
    const pgnOutput = document.getElementById('pgn-output');

    // Populate the dropdown menu
    for (const name in openings) {
        const option = document.createElement('option');
        option.value = name;
        option.innerText = name;
        selector.appendChild(option);
    }
    
    // --- 3. CORE FUNCTIONS ---

    function updateBoardAndNotation() {
        // Update the visual board to the game's current FEN
        board.position(game.fen());
        
        // Get the move history and format it for display
        const history = game.history({ verbose: true });
        
        // Format the PGN string for display
        let pgnString = '';
        for (let i = 0; i < history.length; i++) {
            if (i % 2 === 0) { // White's move
                pgnString += (i / 2 + 1) + '. ';
            }
            // Highlight the last move played
            const moveClass = (i === currentMoveIndex) ? ' class="highlight"' : '';
            pgnString += `<span${moveClass}>${history[i].san}</span> `;
        }
        
        pgnOutput.innerHTML = pgnString.trim();
    }

    // --- 4. EVENT HANDLERS ---
    
    // When a new opening is selected, initialize the game state
    selector.addEventListener('change', () => {
        const selectedOpening = selector.value;
        currentOpeningMoves = openings[selectedOpening].split(" ").filter(m => m.trim().length > 0);
        game.reset();
        currentMoveIndex = -1;
        updateBoardAndNotation();
    });

    // Move forward one step
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentMoveIndex < currentOpeningMoves.length - 1) {
            currentMoveIndex++;
            game.move(currentOpeningMoves[currentMoveIndex]);
speakNotation(currentOpeningMoves[currentMoveIndex]);
            updateBoardAndNotation();
        }
    });

    // Move backward one step
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentMoveIndex >= 0) {
            game.undo(); // Undo the last move
            currentMoveIndex--;
speakNotation(currentOpeningMoves[currentMoveIndex]);
            updateBoardAndNotation();
        }
    });

    // Reset to start
    document.getElementById('resetBtn').addEventListener('click', () => {
        game.reset();
        currentMoveIndex = -1;
        updateBoardAndNotation();
    });

// --- 5. VOICE NOTATION FUNCTION ---
function speakNotation(move) {
    // Check if the browser supports Speech Synthesis
    if ('speechSynthesis' in window) {
        // Create a new speech utterance object
        const utterance = new SpeechSynthesisUtterance(move);
        
        // Optional: Set voice properties (e.g., speed)
        utterance.rate = 1.0; // Normal speed
        
        // Use a suitable voice (optional: you can list available voices)
        // You can leave this out to use the system default voice.
        // utterance.voice = speechSynthesis.getVoices().find(v => v.name === 'Google US English'); 

        // Speak the move
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis not supported in this browser.");
    }
}

    // Initialize the board on page load
    updateBoardAndNotation();
  </script>
</body>
</html>
{% endhighlight %}