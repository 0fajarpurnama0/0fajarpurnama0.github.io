---
layout: post
title: Chess Board 2 Player Local HTML CSS JavaScript
description: Play chess together on single browsertab hyper text markup language, cascading style sheets, and javascript.
featuredimage: /assets/images/chessboardjs/ChessStartingPosition.jpg
category: tools
tags: [tools, chess, 2 player, local, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/17/chessboardjs-2player-local
---
<link rel="stylesheet" href="/assets/css/3rdparty/chessboard-1.0.0.min.css">

<style>
  body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    padding: 20px;
  }
  h1 { margin-bottom: 10px; }
  
  /* Responsive Board Container */
  #myBoard {
    width: 90%;
    max-width: 500px;
    margin: 20px auto;
  }

  /* Input Controls */
  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    width: 90%;
    max-width: 500px;
  }
  
  #moveInput {
    flex-grow: 1;
    padding: 12px;
    font-size: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    /*text-transform: uppercase; /* Helps user see standard notation */
  }
  
  #submitBtn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  /* Status & History */
  #status { font-weight: bold; margin-bottom: 10px; color: #333; }
  #pgn-output { 
    background: #fff; 
    padding: 15px; 
    border: 1px solid #ddd; 
    width: 90%; 
    max-width: 500px; 
    min-height: 50px;
    font-family: monospace;
    font-size: 14px;
  }

  .navigation-controls {
    display: flex;
    gap: 10px;
    width: 90%;
    max-width: 500px;
    margin-top: 10px;
  }

  .navigation-controls button {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
  }

  .navigation-controls button:hover {
    background-color: #555;
  }
</style>

<h1>♟️ Type & Play</h1>
<div id="status">White to move</div>

<div id="myBoard"></div>

<div class="input-container">
  <input type="text" id="moveInput" placeholder="Type move (e.g. e4, Nf3)..." autofocus>
  <button id="submitBtn">Move</button>
</div>

<div id="pgn-output"></div>
<br>
<div class="navigation-controls">
  <button id="prevBtn">⬅️ Back</button>
  <button id="resetBtn">↩️ Reset</button>
  <button id="nextBtn">Forward ➡️</button>
</div>

<script src="/asset/js/3rdparty/jquery-3.7.1.min.js"></script>
<script src="/asset/js/3rdparty/chess-0.12.1.min.js"></script>
<script src="/asset/js/3rdparty/chessboard-1.0.0.min.js"></script>

<script>
  // --- 1. SETUP ---
  var board = null;
  var redoStack = []; // Stores moves we've undone
  var game = new Chess();
  
  // Configuration: Local images + Responsive + No Dragging
  var config = {
    position: 'start',
    draggable: false, // Strictly no dragging!
    pieceTheme: '/assets/images/chessboardjs/chesspieces/wikipedia/{piece}.png'
  };
  
  // Initialize Board
  board = Chessboard('myBoard', config);
  window.addEventListener('resize', board.resize); // Responsive fix

  // DOM Elements
  const moveInput = document.getElementById('moveInput');
  const statusDisplay = document.getElementById('status');
  const pgnDisplay = document.getElementById('pgn-output');

  // --- 2. CORE LOGIC ---

  function handleMove() {
    const moveText = moveInput.value.trim();
    if (!moveText) return;

    // Try to make the move in the game logic
    // chess.js requires SAN (Standard Algebraic Notation) by default
    const move = game.move(moveText);

    if (move === null) {
      // INVALID MOVE
      speak("Invalid move");
      // Shake the input box to show error visually (optional CSS trick)
      moveInput.style.borderColor = "red";
      setTimeout(() => moveInput.style.borderColor = "#ccc", 500);
      return;
    }

    redoStack = []; 

    board.position(game.fen());
    updateStatus();
    moveInput.value = '';
    moveInput.focus();

    // VALID MOVE
    board.position(game.fen()); // Update board
    speak(move.san);            // Voice notation
    updateStatus();             // Update turn info
    
    // Clear input for next turn
    moveInput.value = '';
    moveInput.focus();
  }

  function updateStatus() {
    let status = '';
    let moveColor = (game.turn() === 'b') ? 'Black' : 'White';

    // Check for Checkmate / Draw
    if (game.in_checkmate()) {
      status = 'Game over, ' + moveColor + ' is in checkmate.';
      speak("Checkmate!");
    } else if (game.in_draw()) {
      status = 'Game over, drawn position';
      speak("Draw!");
    } else {
      status = moveColor + ' to move';
      if (game.in_check()) {
        status += ', ' + moveColor + ' is in check';
        speak("Check!");
      }
    }

    statusDisplay.innerText = status;
    pgnDisplay.innerHTML = game.pgn(); // Show full history
  }

  function speak(text) {
    if ('speechSynthesis' in window) {
      const ut = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(ut);
    }
  }

  // --- 3. EVENT LISTENERS ---

  // Submit button click
  document.getElementById('submitBtn').addEventListener('click', handleMove);

  // "Enter" key in input box
  moveInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleMove();
    }
  });

  function undoMove() {
    const move = game.undo();
    if (move) {
      redoStack.push(move); // Save it to go forward later
      board.position(game.fen());
      updateStatus();
      speak("Undo");
    }
  }

  function redoMove() {
    const move = redoStack.pop();
    if (move) {
      game.move(move); // Re-apply the move
      board.position(game.fen());
      updateStatus();
      speak(move.san);
    }
  }

  // Update the Reset logic to also clear the redoStack
  function resetGame() {
    game.reset();
    board.start();
    redoStack = []; 
    moveInput.value = '';
    updateStatus();
    speak("Game reset");
    moveInput.focus();
  }

  // --- Event Listeners ---
  document.getElementById('prevBtn').addEventListener('click', undoMove);
  document.getElementById('nextBtn').addEventListener('click', redoMove);
  document.getElementById('resetBtn').addEventListener('click', resetGame);

  // Initial Status
  updateStatus();

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
  <title>Project 3: Notation Input Trainer</title>
  <link rel="stylesheet"
    href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
  
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f4f4f4;
      padding: 20px;
    }
    h1 { margin-bottom: 10px; }
    
    /* Responsive Board Container */
    #myBoard {
      width: 90%;
      max-width: 500px;
      margin: 20px auto;
    }

    /* Input Controls */
    .input-container {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      width: 90%;
      max-width: 500px;
    }
    
    #moveInput {
      flex-grow: 1;
      padding: 12px;
      font-size: 18px;
      border: 2px solid #ccc;
      border-radius: 4px;
    }
    
    #submitBtn {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }
    
    /* Status & History */
    #status { font-weight: bold; margin-bottom: 10px; color: #333; }
    #pgn-output { 
      background: #fff; 
      padding: 15px; 
      border: 1px solid #ddd; 
      width: 90%; 
      max-width: 500px; 
      min-height: 50px;
      font-family: monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>♟️ Type & Play</h1>
  <div id="status">White to move</div>

  <div id="myBoard"></div>

  <div class="input-container">
    <input type="text" id="moveInput" placeholder="Type move (e.g. e4, Nf3)..." autofocus>
    <button id="submitBtn">Move</button>
  </div>

  <div id="pgn-output"></div>
  <br>
  <button id="resetBtn" style="padding: 8px 16px; cursor: pointer;">Reset Game</button>

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
  <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>

  <script>
    // --- 1. SETUP ---
    var board = null;
    var game = new Chess();
    
    // Configuration: Local images + Responsive + No Dragging
    var config = {
      position: 'start',
      draggable: false, // Strictly no dragging!
      pieceTheme: 'img/chesspieces/wikipedia/{piece}.png'
    };
    
    // Initialize Board
    board = Chessboard('myBoard', config);
    window.addEventListener('resize', board.resize); // Responsive fix

    // DOM Elements
    const moveInput = document.getElementById('moveInput');
    const statusDisplay = document.getElementById('status');
    const pgnDisplay = document.getElementById('pgn-output');

    // --- 2. CORE LOGIC ---

    function handleMove() {
      const moveText = moveInput.value.trim();
      if (!moveText) return;

      // Try to make the move in the game logic
      // chess.js requires SAN (Standard Algebraic Notation) by default
      const move = game.move(moveText);

      if (move === null) {
        // INVALID MOVE
        speak("Invalid move");
        // Shake the input box to show error visually (optional CSS trick)
        moveInput.style.borderColor = "red";
        setTimeout(() => moveInput.style.borderColor = "#ccc", 500);
        return;
      }

      // VALID MOVE
      board.position(game.fen()); // Update board
      speak(move.san);            // Voice notation
      updateStatus();             // Update turn info
      
      // Clear input for next turn
      moveInput.value = '';
      moveInput.focus();
    }

    function updateStatus() {
      let status = '';
      let moveColor = (game.turn() === 'b') ? 'Black' : 'White';

      // Check for Checkmate / Draw
      if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
        speak("Checkmate!");
      } else if (game.in_draw()) {
        status = 'Game over, drawn position';
        speak("Draw!");
      } else {
        status = moveColor + ' to move';
        if (game.in_check()) {
          status += ', ' + moveColor + ' is in check';
          speak("Check!");
        }
      }

      statusDisplay.innerText = status;
      pgnDisplay.innerHTML = game.pgn(); // Show full history
    }

    function speak(text) {
      if ('speechSynthesis' in window) {
        const ut = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(ut);
      }
    }

    // --- 3. EVENT LISTENERS ---

    // Submit button click
    document.getElementById('submitBtn').addEventListener('click', handleMove);

    // "Enter" key in input box
    moveInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleMove();
      }
    });

    // Reset Game
    document.getElementById('resetBtn').addEventListener('click', () => {
      game.reset();
      board.start();
      moveInput.value = '';
      updateStatus();
      speak("Game reset");
      moveInput.focus();
    });

    // Initial Status
    updateStatus();

  </script>
</body>
</html>
{% endhighlight %}