---
layout: post
title: Minesweeper in HTML CSS JavaScript
description: Minesweeper game in hyper text markup language, cascading style sheets, and javascript.
featuredimage: /assets/images/others/minesweeperscreenshot.png
category: tools
tags: [tools, minesweeper, game, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/19/minesweeper
---
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #2c3e50;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
    }
    h1 { margin-bottom: 10px; }
    /* Controls Section */
    .controls {
        background: #34495e;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        gap: 15px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
    .input-group {
        display: flex;
        flex-direction: column;
    }
    label { font-size: 0.8rem; margin-bottom: 5px; color: #bdc3c7; }
    input {
        padding: 8px;
        border-radius: 4px;
        border: none;
        width: 60px;
    }
    button {
        padding: 10px 20px;
        background-color: #27ae60;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        height: 100%;
        margin-top: auto;
    }
    button:hover { background-color: #2ecc71; }
    /* Game Board */
    #game-board {
        display: grid;
        gap: 1px;
        background-color: #7f8c8d;
        border: 5px solid #34495e;
        user-select: none; /* Prevents text highlighting */
    }
    .cell {
        width: 30px;
        height: 30px;
        background-color: #bdc3c7;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        font-size: 18px;
    }
    /* 3D effect for unclicked cells */
    .cell:not(.revealed) {
        border-top: 3px solid #ecf0f1;
        border-left: 3px solid #ecf0f1;
        border-bottom: 3px solid #7f8c8d;
        border-right: 3px solid #7f8c8d;
        box-sizing: border-box;
    }
    .cell:hover:not(.revealed) { background-color: #d5dbdb; }
    /* Statuses */
    .revealed {
        background-color: #ecf0f1;
        color: #2c3e50;
        border: 1px solid #bdc3c7;
    }
    .mine { background-color: #e74c3c !important; color: white; }
    .flag { color: #c0392b; }
    /* Number Colors */
    .c-1 { color: blue; }
    .c-2 { color: green; }
    .c-3 { color: red; }
    .c-4 { color: darkblue; }
    .c-5 { color: brown; }
    .c-6 { color: cyan; }
    .c-7 { color: black; }
    .c-8 { color: gray; }
    #message {
        margin-top: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        height: 30px;
    }
</style>
<h1>Minesweeper</h1>
<div class="controls">
    <div class="input-group">
        <label>Rows</label>
        <input type="number" id="rows" value="10" min="5" max="30">
    </div>
    <div class="input-group">
        <label>Cols</label>
        <input type="number" id="cols" value="10" min="5" max="30">
    </div>
    <div class="input-group">
        <label>Mines</label>
        <input type="number" id="mineCount" value="15" min="1">
    </div>
    <button onclick="startGame()">New Game</button>
</div>
<div id="game-board"></div>
<div id="message"></div>
<script>
    const boardElement = document.getElementById('game-board');
    const messageElement = document.getElementById('message');
    let grid = [];
    let rows = 10;
    let cols = 10;
    let mines = 15;
    let gameOver = false;
    let flags = 0;
    function startGame() {
        // 1. Get Inputs
        rows = parseInt(document.getElementById('rows').value);
        cols = parseInt(document.getElementById('cols').value);
        mines = parseInt(document.getElementById('mineCount').value);
        // Validation limits
        if (mines >= rows * cols) {
            alert("Too many mines!");
            return;
        }
        // 2. Reset State
        grid = [];
        boardElement.innerHTML = '';
        messageElement.innerText = '';
        gameOver = false;
        flags = 0;
        // 3. Set Grid CSS
        boardElement.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
        // 4. Generate Data & Render
        createBoard();
        placeMines();
        calculateNumbers();
    }
    function createBoard() {
        for (let r = 0; r < rows; r++) {
            let rowArray = [];
            for (let c = 0; c < cols; c++) {
                // Create DOM Element
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = r;
                cell.dataset.col = c;                 
                // Add Click Listeners
                cell.addEventListener('click', () => handleClick(r, c));
                cell.addEventListener('contextmenu', (e) => handleRightClick(e, r, c));
                boardElement.appendChild(cell);
                // Store Data
                rowArray.push({
                    element: cell,
                    isMine: false,
                    revealed: false,
                    flagged: false,
                    neighborMines: 0
                });
            }
            grid.push(rowArray);
        }
    }
    function placeMines() {
        let minesPlaced = 0;
        while (minesPlaced < mines) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            if (!grid[r][c].isMine) {
                grid[r][c].isMine = true;
                minesPlaced++;
            }
        }
    }
    function calculateNumbers() {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c].isMine) continue;
                let count = 0;
                // Check all 8 neighbors
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const newR = r + i;
                        const newC = c + j;
                        if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
                            if (grid[newR][newC].isMine) count++;
                        }
                    }
                }
                grid[r][c].neighborMines = count;
            }
        }
    }
    function handleClick(r, c) {
        if (gameOver || grid[r][c].revealed || grid[r][c].flagged) return;
        const cellData = grid[r][c];
        cellData.revealed = true;
        cellData.element.classList.add('revealed');
        if (cellData.isMine) {
            // Game Over
            cellData.element.classList.add('mine');
            cellData.element.innerHTML = '💣';
            messageElement.innerText = "GAME OVER!";
            messageElement.style.color = "#e74c3c";
            gameOver = true;
            revealAllMines();
        } else {
            if (cellData.neighborMines > 0) {
                // Show Number
                cellData.element.innerText = cellData.neighborMines;
                cellData.element.classList.add(`c-${cellData.neighborMines}`);
            } else {
                // Empty cell: Flood fill reveal
                floodFill(r, c);
            }
            checkWin();
        }
    }
    function handleRightClick(e, r, c) {
        e.preventDefault(); // Stop standard menu
        if (gameOver || grid[r][c].revealed) return;
        const cellData = grid[r][c];
        cellData.flagged = !cellData.flagged;           
        if (cellData.flagged) {
            cellData.element.classList.add('flag');
            cellData.element.innerHTML = '🚩';
        } else {
            cellData.element.classList.remove('flag');
            cellData.element.innerHTML = '';
        }
    }
    function floodFill(r, c) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const newR = r + i;
                const newC = c + j;
                // Boundary checks
                if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
                    const neighbor = grid[newR][newC];
                    if (!neighbor.revealed && !neighbor.flagged && !neighbor.isMine) {
                        // Recursive click
                        handleClick(newR, newC); 
                    }
                }
            }
        }
    }
    function revealAllMines() {
        grid.forEach(row => {
            row.forEach(cell => {
                if (cell.isMine) {
                    cell.element.classList.add('revealed', 'mine');
                    cell.element.innerHTML = '💣';
                }
            });
        });
    }
    function checkWin() {
        let revealedCount = 0;
        grid.forEach(row => {
            row.forEach(cell => {
                if (cell.revealed) revealedCount++;
            });
        });
        if (revealedCount === (rows * cols) - mines) {
            messageElement.innerText = "YOU WIN! 🎉";
            messageElement.style.color = "#2ecc71";
            gameOver = true;
        }
    }
    // Initialize default game
    startGame();
</script>

<h1>Reference</h1>
<ul>
    <li><a href="https://gemini.google.com/">Acknowledgement to Google Gemini AI for helping writing the code.</a></li>
</ul>

<h1>Source Code</h1>
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Minesweeper</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #2c3e50;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        h1 { margin-bottom: 10px; }
        /* Controls Section */
        .controls {
            background: #34495e;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        .input-group {
            display: flex;
            flex-direction: column;
        }
        label { font-size: 0.8rem; margin-bottom: 5px; color: #bdc3c7; }
        input {
            padding: 8px;
            border-radius: 4px;
            border: none;
            width: 60px;
        }
        button {
            padding: 10px 20px;
            background-color: #27ae60;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            height: 100%;
            margin-top: auto;
        }
        button:hover { background-color: #2ecc71; }
        /* Game Board */
        #game-board {
            display: grid;
            gap: 1px;
            background-color: #7f8c8d;
            border: 5px solid #34495e;
            user-select: none; /* Prevents text highlighting */
        }
        .cell {
            width: 30px;
            height: 30px;
            background-color: #bdc3c7;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            cursor: pointer;
            font-size: 18px;
        }
        /* 3D effect for unclicked cells */
        .cell:not(.revealed) {
            border-top: 3px solid #ecf0f1;
            border-left: 3px solid #ecf0f1;
            border-bottom: 3px solid #7f8c8d;
            border-right: 3px solid #7f8c8d;
            box-sizing: border-box;
        }
        .cell:hover:not(.revealed) { background-color: #d5dbdb; }
        /* Statuses */
        .revealed {
            background-color: #ecf0f1;
            color: #2c3e50;
            border: 1px solid #bdc3c7;
        }
        .mine { background-color: #e74c3c !important; color: white; }
        .flag { color: #c0392b; }
        /* Number Colors */
        .c-1 { color: blue; }
        .c-2 { color: green; }
        .c-3 { color: red; }
        .c-4 { color: darkblue; }
        .c-5 { color: brown; }
        .c-6 { color: cyan; }
        .c-7 { color: black; }
        .c-8 { color: gray; }
        #message {
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: bold;
            height: 30px;
        }
    </style>
</head>
<body>
    <h1>Minesweeper</h1>
    <div class="controls">
        <div class="input-group">
            <label>Rows</label>
            <input type="number" id="rows" value="10" min="5" max="30">
        </div>
        <div class="input-group">
            <label>Cols</label>
            <input type="number" id="cols" value="10" min="5" max="30">
        </div>
        <div class="input-group">
            <label>Mines</label>
            <input type="number" id="mineCount" value="15" min="1">
        </div>
        <button onclick="startGame()">New Game</button>
    </div>
    <div id="game-board"></div>
    <div id="message"></div>
    <script>
        const boardElement = document.getElementById('game-board');
        const messageElement = document.getElementById('message');
        let grid = [];
        let rows = 10;
        let cols = 10;
        let mines = 15;
        let gameOver = false;
        let flags = 0;
        function startGame() {
            // 1. Get Inputs
            rows = parseInt(document.getElementById('rows').value);
            cols = parseInt(document.getElementById('cols').value);
            mines = parseInt(document.getElementById('mineCount').value);
            // Validation limits
            if (mines >= rows * cols) {
                alert("Too many mines!");
                return;
            }
            // 2. Reset State
            grid = [];
            boardElement.innerHTML = '';
            messageElement.innerText = '';
            gameOver = false;
            flags = 0;
            // 3. Set Grid CSS
            boardElement.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
            // 4. Generate Data & Render
            createBoard();
            placeMines();
            calculateNumbers();
        }
        function createBoard() {
            for (let r = 0; r < rows; r++) {
                let rowArray = [];
                for (let c = 0; c < cols; c++) {
                    // Create DOM Element
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.dataset.row = r;
                    cell.dataset.col = c;                 
                    // Add Click Listeners
                    cell.addEventListener('click', () => handleClick(r, c));
                    cell.addEventListener('contextmenu', (e) => handleRightClick(e, r, c));
                    boardElement.appendChild(cell);
                    // Store Data
                    rowArray.push({
                        element: cell,
                        isMine: false,
                        revealed: false,
                        flagged: false,
                        neighborMines: 0
                    });
                }
                grid.push(rowArray);
            }
        }
        function placeMines() {
            let minesPlaced = 0;
            while (minesPlaced < mines) {
                const r = Math.floor(Math.random() * rows);
                const c = Math.floor(Math.random() * cols);
                if (!grid[r][c].isMine) {
                    grid[r][c].isMine = true;
                    minesPlaced++;
                }
            }
        }
        function calculateNumbers() {
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (grid[r][c].isMine) continue;
                    let count = 0;
                    // Check all 8 neighbors
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            const newR = r + i;
                            const newC = c + j;
                            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
                                if (grid[newR][newC].isMine) count++;
                            }
                        }
                    }
                    grid[r][c].neighborMines = count;
                }
            }
        }
        function handleClick(r, c) {
            if (gameOver || grid[r][c].revealed || grid[r][c].flagged) return;
            const cellData = grid[r][c];
            cellData.revealed = true;
            cellData.element.classList.add('revealed');
            if (cellData.isMine) {
                // Game Over
                cellData.element.classList.add('mine');
                cellData.element.innerHTML = '💣';
                messageElement.innerText = "GAME OVER!";
                messageElement.style.color = "#e74c3c";
                gameOver = true;
                revealAllMines();
            } else {
                if (cellData.neighborMines > 0) {
                    // Show Number
                    cellData.element.innerText = cellData.neighborMines;
                    cellData.element.classList.add(`c-${cellData.neighborMines}`);
                } else {
                    // Empty cell: Flood fill reveal
                    floodFill(r, c);
                }
                checkWin();
            }
        }
        function handleRightClick(e, r, c) {
            e.preventDefault(); // Stop standard menu
            if (gameOver || grid[r][c].revealed) return;
            const cellData = grid[r][c];
            cellData.flagged = !cellData.flagged;           
            if (cellData.flagged) {
                cellData.element.classList.add('flag');
                cellData.element.innerHTML = '🚩';
            } else {
                cellData.element.classList.remove('flag');
                cellData.element.innerHTML = '';
            }
        }
        function floodFill(r, c) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newR = r + i;
                    const newC = c + j;
                    // Boundary checks
                    if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
                        const neighbor = grid[newR][newC];
                        if (!neighbor.revealed && !neighbor.flagged && !neighbor.isMine) {
                            // Recursive click
                            handleClick(newR, newC); 
                        }
                    }
                }
            }
        }
        function revealAllMines() {
            grid.forEach(row => {
                row.forEach(cell => {
                    if (cell.isMine) {
                        cell.element.classList.add('revealed', 'mine');
                        cell.element.innerHTML = '💣';
                    }
                });
            });
        }
        function checkWin() {
            let revealedCount = 0;
            grid.forEach(row => {
                row.forEach(cell => {
                    if (cell.revealed) revealedCount++;
                });
            });
            if (revealedCount === (rows * cols) - mines) {
                messageElement.innerText = "YOU WIN! 🎉";
                messageElement.style.color = "#2ecc71";
                gameOver = true;
            }
        }
        // Initialize default game
        startGame();
    </script>
</body>
</html>
{% endhighlight %}