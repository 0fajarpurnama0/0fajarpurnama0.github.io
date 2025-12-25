---
layout: post
title: Chess Board 2 Player Peer to Peer HTML CSS JavaScript
description: Play chess together through peer to peer (p2p) protocol hyper text markup language, cascading style sheets, and javascript.
featuredimage: /assets/images/chessboardjs/ChessStartingPosition.jpg
category: tools
tags: [tools, chess, 2 player, p2p, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/18/chessboardjs-p2p
---
<link rel="stylesheet" href="/assets/css/3rdparty/chessboard-1.0.0.min.css">
<script src="/assets/js/3rdparty/peerjs-1.5.2.min.js"></script>

<style>
/*
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    padding: 10px;
}
*/

/* Connection Panel */
#connection-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    width: 90%;
    max-width: 500px;
    text-align: center;
}
#myId { font-weight: bold; color: #2196F3; font-family: monospace; font-size: 1.2em; }

/* Responsive Board */
#myBoard {
    width: 100%;
    max-width: 450px;
    margin: 0 auto 20px auto;
}

/* Input Controls */
.input-container {
    display: flex;
    gap: 10px;
    width: 90%;
    max-width: 500px;
    margin-bottom: 10px;
}

#moveInput {
    flex-grow: 1;
    padding: 12px;
    font-size: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: white;
    transition: background 0.2s;
}

#submitBtn { background-color: #4CAF50; }
#submitBtn:hover { background-color: #45a049; }

#connectBtn { background-color: #2196F3; }

.nav-btn { background-color: #555; flex: 1; }
.nav-btn:hover { background-color: #333; }

/* Navigation Row */
.navigation-controls {
    display: flex;
    gap: 10px;
    width: 90%;
    max-width: 500px;
    margin-top: 10px;
}

#status { font-weight: bold; margin-bottom: 10px; color: #333; }
#pgn-output { 
    background: #fff; padding: 15px; border: 1px solid #ddd; 
    width: 90%; max-width: 500px; min-height: 40px; 
    font-family: monospace; margin-top: 10px; font-size: 0.9em;
}
</style>

<div id="connection-panel">
<div>My ID: <span id="myId">Generating...</span></div>
<div style="margin-top: 10px; display: flex; gap: 5px; justify-content: center;">
    <input type="text" id="connId" placeholder="Enter Friend's ID" style="padding: 5px;">
    <button id="connectBtn">Connect</button>
</div>
<div id="connStatus" style="margin-top: 5px; font-size: 0.9em; color: #666;">Status: Waiting for peer...</div>
</div>

<div id="status">White to move</div>
<div id="myBoard"></div>

<div class="input-container">
<input type="text" id="moveInput" placeholder="Type move (e.g. e4)..." autofocus>
<button id="submitBtn">Move</button>
</div>

<div class="navigation-controls">
<button id="prevBtn" class="nav-btn">⬅️ Back</button>
<button id="resetBtn" class="nav-btn">↩️ Reset</button>
<button id="nextBtn" class="nav-btn">Forward ➡️</button>
</div>

<div id="pgn-output"></div>

<script src="/assets/js/3rdparty/jquery-3.5.1.min.js"></script>
<script src="/assets/js/3rdparty/chess-0.12.1.min.js"></script>
<script src="/assets/js/3rdparty/chessboard-1.0.0.min.js"></script>

<script>
// --- 1. GAME SETUP ---
var board = null;
var game = new Chess();
var redoStack = [];

// PeerJS Variables
var peer = new Peer(); 
var conn = null;
var myColor = 'w'; // Default to White (Host)

var config = {
    position: 'start',
    draggable: false, // Input Trainer Mode
    pieceTheme: '/assets/images/chessboardjs/img/chesspieces/wikipedia/{piece}.png'
};
board = Chessboard('myBoard', config);
window.addEventListener('resize', board.resize);

// --- 2. PEERJS LOGIC ---

peer.on('open', function(id) {
    document.getElementById('myId').innerText = id;
});

// Handle Incoming Connection (I am Host)
peer.on('connection', function(c) {
    conn = c;
    myColor = 'w'; // I remain White
    document.getElementById('connStatus').innerText = "Connected! You are WHITE.";
    setupConnectionHandlers();
});

// Connect to Friend (I am Joiner)
document.getElementById('connectBtn').addEventListener('click', function() {
    var destId = document.getElementById('connId').value;
    if(!destId) return alert("Enter an ID first");
    
    conn = peer.connect(destId);
    conn.on('open', function() {
    myColor = 'b'; // I become Black
    document.getElementById('connStatus').innerText = "Connected! You are BLACK.";
    board.orientation('black'); // Flip board for Black player
    setupConnectionHandlers();
    });
});

function setupConnectionHandlers() {
    // Listen for data from opponent
    conn.on('data', function(data) {
    console.log("Received:", data);
    
    if (data.type === 'move') {
        // Opponent moved
        game.move(data.san);
        board.position(game.fen());
        redoStack = []; // Clear redo on new move
        updateStatus();
        speak(data.san);
    } 
    else if (data.type === 'reset') {
        // Opponent reset the game
        resetLocalGame();
        alert("Opponent reset the game.");
    }
    });
}

// --- 3. GAMEPLAY LOGIC ---

function handleMove() {
    const moveText = document.getElementById('moveInput').value.trim();
    if (!moveText) return;

    // RULE: Can I move?
    // 1. If connected, is it my turn?
    if (conn && game.turn() !== myColor) {
    speak("Not your turn");
    flashError("It is " + (game.turn() === 'w' ? "White" : "Black") + "'s turn!");
    return;
    }

    // 2. Attempt Move
    const move = game.move(moveText);

    if (move === null) {
    speak("Invalid move");
    flashError();
    return;
    }

    // 3. Success
    board.position(game.fen());
    redoStack = [];
    updateStatus();
    speak(move.san);
    
    document.getElementById('moveInput').value = '';

    // 4. Send to Peer (if connected)
    if (conn && conn.open) {
    conn.send({ type: 'move', san: move.san });
    }
}

// --- 4. NAVIGATION & UTILS ---

function resetGame() {
    // Reset locally
    resetLocalGame();
    // Notify peer
    if (conn && conn.open) {
    conn.send({ type: 'reset' });
    }
}

function resetLocalGame() {
    game.reset();
    board.start();
    redoStack = [];
    updateStatus();
    document.getElementById('moveInput').value = '';
}

function undoMove() {
    // Disable Undo in multiplayer for simplicity (prevents desync)
    if (conn) return alert("Undo disabled in multiplayer mode.");
    
    const move = game.undo();
    if (move) {
    redoStack.push(move);
    board.position(game.fen());
    updateStatus();
    }
}

function redoMove() {
    if (conn) return alert("Redo disabled in multiplayer mode.");
    
    const move = redoStack.pop();
    if (move) {
    game.move(move);
    board.position(game.fen());
    updateStatus();
    }
}

function updateStatus() {
    let status = '';
    let moveColor = (game.turn() === 'b') ? 'Black' : 'White';

    if (game.in_checkmate()) {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
    } else if (game.in_draw()) {
    status = 'Game over, drawn position';
    } else {
    status = moveColor + ' to move';
    if (game.in_check()) status += ', ' + moveColor + ' is in check';
    }

    document.getElementById('status').innerText = status;
    document.getElementById('pgn-output').innerHTML = game.pgn();
}

function speak(text) {
    if ('speechSynthesis' in window) {
    let ut = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(ut);
    }
}

function flashError(msg) {
    const input = document.getElementById('moveInput');
    input.style.borderColor = "red";
    if(msg) document.getElementById('status').innerText = msg;
    
    setTimeout(() => {
    input.style.borderColor = "#ccc";
    updateStatus();
    }, 1000);
}

// Listeners
document.getElementById('submitBtn').addEventListener('click', handleMove);
document.getElementById('moveInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleMove();
});

document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('prevBtn').addEventListener('click', undoMove);
document.getElementById('nextBtn').addEventListener('click', redoMove);

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
  <title>P2P Notation Battle</title>
  <link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
  <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f4f4f4;
      padding: 10px;
    }
    
    /* Connection Panel */
    #connection-panel {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 20px;
      width: 90%;
      max-width: 500px;
      text-align: center;
    }
    #myId { font-weight: bold; color: #2196F3; font-family: monospace; font-size: 1.2em; }
    
    /* Responsive Board */
    #myBoard {
      width: 100%;
      max-width: 450px;
      margin: 0 auto 20px auto;
    }

    /* Input Controls */
    .input-container {
      display: flex;
      gap: 10px;
      width: 90%;
      max-width: 500px;
      margin-bottom: 10px;
    }
    
    #moveInput {
      flex-grow: 1;
      padding: 12px;
      font-size: 18px;
      border: 2px solid #ccc;
      border-radius: 4px;
    }
    
    button {
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      color: white;
      transition: background 0.2s;
    }

    #submitBtn { background-color: #4CAF50; }
    #submitBtn:hover { background-color: #45a049; }
    
    #connectBtn { background-color: #2196F3; }
    
    .nav-btn { background-color: #555; flex: 1; }
    .nav-btn:hover { background-color: #333; }

    /* Navigation Row */
    .navigation-controls {
      display: flex;
      gap: 10px;
      width: 90%;
      max-width: 500px;
      margin-top: 10px;
    }
    
    #status { font-weight: bold; margin-bottom: 10px; color: #333; }
    #pgn-output { 
      background: #fff; padding: 15px; border: 1px solid #ddd; 
      width: 90%; max-width: 500px; min-height: 40px; 
      font-family: monospace; margin-top: 10px; font-size: 0.9em;
    }
  </style>
</head>
<body>

  <div id="connection-panel">
    <div>My ID: <span id="myId">Generating...</span></div>
    <div style="margin-top: 10px; display: flex; gap: 5px; justify-content: center;">
      <input type="text" id="connId" placeholder="Enter Friend's ID" style="padding: 5px;">
      <button id="connectBtn">Connect</button>
    </div>
    <div id="connStatus" style="margin-top: 5px; font-size: 0.9em; color: #666;">Status: Waiting for peer...</div>
  </div>

  <div id="status">White to move</div>
  <div id="myBoard"></div>

  <div class="input-container">
    <input type="text" id="moveInput" placeholder="Type move (e.g. e4)..." autofocus>
    <button id="submitBtn">Move</button>
  </div>

  <div class="navigation-controls">
    <button id="prevBtn" class="nav-btn">⬅️ Back</button>
    <button id="resetBtn" class="nav-btn">↩️ Reset</button>
    <button id="nextBtn" class="nav-btn">Forward ➡️</button>
  </div>

  <div id="pgn-output"></div>

  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
  <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>

  <script>
    // --- 1. GAME SETUP ---
    var board = null;
    var game = new Chess();
    var redoStack = [];
    
    // PeerJS Variables
    var peer = new Peer(); 
    var conn = null;
    var myColor = 'w'; // Default to White (Host)

    var config = {
      position: 'start',
      draggable: false, // Input Trainer Mode
      pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    };
    board = Chessboard('myBoard', config);
    window.addEventListener('resize', board.resize);

    // --- 2. PEERJS LOGIC ---
    
    peer.on('open', function(id) {
      document.getElementById('myId').innerText = id;
    });

    // Handle Incoming Connection (I am Host)
    peer.on('connection', function(c) {
      conn = c;
      myColor = 'w'; // I remain White
      document.getElementById('connStatus').innerText = "Connected! You are WHITE.";
      setupConnectionHandlers();
    });

    // Connect to Friend (I am Joiner)
    document.getElementById('connectBtn').addEventListener('click', function() {
      var destId = document.getElementById('connId').value;
      if(!destId) return alert("Enter an ID first");
      
      conn = peer.connect(destId);
      conn.on('open', function() {
        myColor = 'b'; // I become Black
        document.getElementById('connStatus').innerText = "Connected! You are BLACK.";
        board.orientation('black'); // Flip board for Black player
        setupConnectionHandlers();
      });
    });

    function setupConnectionHandlers() {
      // Listen for data from opponent
      conn.on('data', function(data) {
        console.log("Received:", data);
        
        if (data.type === 'move') {
          // Opponent moved
          game.move(data.san);
          board.position(game.fen());
          redoStack = []; // Clear redo on new move
          updateStatus();
          speak(data.san);
        } 
        else if (data.type === 'reset') {
          // Opponent reset the game
          resetLocalGame();
          alert("Opponent reset the game.");
        }
      });
    }

    // --- 3. GAMEPLAY LOGIC ---

    function handleMove() {
      const moveText = document.getElementById('moveInput').value.trim();
      if (!moveText) return;

      // RULE: Can I move?
      // 1. If connected, is it my turn?
      if (conn && game.turn() !== myColor) {
        speak("Not your turn");
        flashError("It is " + (game.turn() === 'w' ? "White" : "Black") + "'s turn!");
        return;
      }

      // 2. Attempt Move
      const move = game.move(moveText);

      if (move === null) {
        speak("Invalid move");
        flashError();
        return;
      }

      // 3. Success
      board.position(game.fen());
      redoStack = [];
      updateStatus();
      speak(move.san);
      
      document.getElementById('moveInput').value = '';

      // 4. Send to Peer (if connected)
      if (conn && conn.open) {
        conn.send({ type: 'move', san: move.san });
      }
    }

    // --- 4. NAVIGATION & UTILS ---

    function resetGame() {
      // Reset locally
      resetLocalGame();
      // Notify peer
      if (conn && conn.open) {
        conn.send({ type: 'reset' });
      }
    }

    function resetLocalGame() {
      game.reset();
      board.start();
      redoStack = [];
      updateStatus();
      document.getElementById('moveInput').value = '';
    }

    function undoMove() {
      // Disable Undo in multiplayer for simplicity (prevents desync)
      if (conn) return alert("Undo disabled in multiplayer mode.");
      
      const move = game.undo();
      if (move) {
        redoStack.push(move);
        board.position(game.fen());
        updateStatus();
      }
    }

    function redoMove() {
      if (conn) return alert("Redo disabled in multiplayer mode.");
      
      const move = redoStack.pop();
      if (move) {
        game.move(move);
        board.position(game.fen());
        updateStatus();
      }
    }

    function updateStatus() {
      let status = '';
      let moveColor = (game.turn() === 'b') ? 'Black' : 'White';

      if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
      } else if (game.in_draw()) {
        status = 'Game over, drawn position';
      } else {
        status = moveColor + ' to move';
        if (game.in_check()) status += ', ' + moveColor + ' is in check';
      }

      document.getElementById('status').innerText = status;
      document.getElementById('pgn-output').innerHTML = game.pgn();
    }

    function speak(text) {
      if ('speechSynthesis' in window) {
        let ut = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(ut);
      }
    }

    function flashError(msg) {
      const input = document.getElementById('moveInput');
      input.style.borderColor = "red";
      if(msg) document.getElementById('status').innerText = msg;
      
      setTimeout(() => {
        input.style.borderColor = "#ccc";
        updateStatus();
      }, 1000);
    }

    // Listeners
    document.getElementById('submitBtn').addEventListener('click', handleMove);
    document.getElementById('moveInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleMove();
    });
    
    document.getElementById('resetBtn').addEventListener('click', resetGame);
    document.getElementById('prevBtn').addEventListener('click', undoMove);
    document.getElementById('nextBtn').addEventListener('click', redoMove);

    updateStatus();
  </script>
</body>
</html>
{% endhighlight %}