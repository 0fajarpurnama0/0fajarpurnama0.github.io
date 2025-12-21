---
layout: post
title: Text Case Converter in HTML CSS JavaScript
description: Text Case Converter game in hyper text markup language, cascading style sheets, and javascript.
featuredimage: /assets/images/others/textcaseconverterscreenshot.png
category: tools
tags: [tools, text case converter, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/20/text-case-converter
---
<style>
    :root {
        --primary: #6366f1;
        --primary-hover: #4f46e5;
        --bg: #f3f4f6;
        --surface: #ffffff;
        --text: #1f2937;
        --border: #e5e7eb;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
        background-color: var(--bg);
        color: var(--text);
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 2rem;
    }
    header {
        text-align: center;
        margin-bottom: 2rem;
    }
    h1 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }
    /* Main Layout */
    .converter-container {
        display: flex;
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
        flex: 1;
        width: 100%;
    }
    /* Flex Columns */
    .text-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: var(--surface);
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid var(--border);
    }
    .column-header {
        padding: 1rem;
        background: #f9fafb;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        font-size: 0.9rem;
        color: #6b7280;
    }
    textarea {
        flex: 1;
        width: 100%;
        border: none;
        resize: none;
        padding: 1rem;
        font-size: 1rem;
        line-height: 1.5;
        outline: none;
        min-height: 300px; /* Default height */
    }
    /* The Control Panel (Middle) */
    .controls {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        justify-content: center;
        min-width: 180px;
    }
    button {
        padding: 0.75rem 1rem;
        border: 1px solid var(--border);
        background: var(--surface);
        cursor: pointer;
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.2s;
        color: var(--text);
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button:hover {
        border-color: var(--primary);
        color: var(--primary);
        background: #eef2ff;
    }
    button.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
    }
    /* Utility buttons (Copy/Clear) */
    .utility-btn {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        border: 1px solid var(--border);
        background: white;
        cursor: pointer;
    }
    .utility-btn:hover {
        background: #f3f4f6;
    }
    /* Responsive Design */
    @media (max-width: 850px) {
        .converter-container {
            flex-direction: column;
        }            
        .controls {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
        }            
        button {
            flex: 1 1 120px; /* Grow, shrink, basis */
            text-align: center;
            justify-content: center;
        }            
        textarea {
            min-height: 150px;
        }
    }
</style>
<header>
    <h1>Text Case Transformer</h1>
    <p>Type on the left, click a button, copy from the right.</p>
</header>
<div class="converter-container">       
    <div class="text-column">
        <div class="column-header">
            <span>INPUT</span>
            <button class="utility-btn" onclick="clearAll()">Clear</button>
        </div>
        <textarea id="inputText" placeholder="Type or paste your content here..."></textarea>
    </div>
    <div class="controls">
        <button onclick="transform('upper')">UPPER CASE</button>
        <button onclick="transform('lower')">lower case</button>
        <button onclick="transform('capitalize')">Capitalize Words</button>
        <button onclick="transform('sentence')">Sentence case</button>
        <button onclick="transform('alternating')">aLtErNaTiNg</button>
        <button onclick="transform('inverse')">InVeRsE cAsE</button>
        <button onclick="transform('camel')">camelCase</button>
        <button onclick="transform('kebab')">kebab-case</button>
    </div>
    <div class="text-column">
        <div class="column-header">
            <span>RESULT</span>
            <button class="utility-btn" id="copyBtn" onclick="copyText()">Copy Result</button>
        </div>
        <textarea id="outputText" readonly placeholder="Result will appear here..."></textarea>
    </div>
</div>
<script>
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    // Main Transformation Logic
    function transform(type) {
        const text = inputText.value;
        let result = '';
        switch(type) {
            case 'upper':
                result = text.toUpperCase();
                break;
            case 'lower':
                result = text.toLowerCase();
                break;
            case 'capitalize': // Capitalize First Letter Of Every Word
                result = text.replace(/\b\w/g, char => char.toUpperCase());
                break;
            case 'sentence': // Capitalize first letter of sentences
                    // Matches the start of the string OR a punctuation mark followed by whitespace
                result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
                break;
            case 'alternating':
                result = text.split('').map((char, i) => 
                    i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            case 'inverse':
                result = text.split('').map(char => 
                    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            case 'camel':
                // Removes special chars, capitalizes words, lowercases first word
                result = text.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
                break;
            case 'kebab':
                result = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                    ?.map(x => x.toLowerCase())
                    .join('-') || text;
                break;
        }
        outputText.value = result;
    }
    // Live update (Optional: Updates as you type based on last button clicked)
    // You can enable this if you want "live" conversion without clicking buttons repeatedly
    // inputText.addEventListener('input', () => { /* Logic to re-run last transform */ });
    // Utility Functions
    function copyText() {
        if (!outputText.value) return;
        outputText.select();
        document.execCommand('copy'); // Fallback for older browsers           
        // Modern API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(outputText.value);
        }
        // Visual Feedback
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => btn.innerText = originalText, 1500);
    }
    function clearAll() {
        inputText.value = '';
        outputText.value = '';
        inputText.focus();
    }
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
    <title>Text Case Converter</title>
    <style>
        :root {
            --primary: #6366f1;
            --primary-hover: #4f46e5;
            --bg: #f3f4f6;
            --surface: #ffffff;
            --text: #1f2937;
            --border: #e5e7eb;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        body {
            background-color: var(--bg);
            color: var(--text);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 2rem;
        }
        header {
            text-align: center;
            margin-bottom: 2rem;
        }
        h1 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }
        /* Main Layout */
        .converter-container {
            display: flex;
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            flex: 1;
            width: 100%;
        }
        /* Flex Columns */
        .text-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: var(--surface);
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid var(--border);
        }
        .column-header {
            padding: 1rem;
            background: #f9fafb;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            font-size: 0.9rem;
            color: #6b7280;
        }
        textarea {
            flex: 1;
            width: 100%;
            border: none;
            resize: none;
            padding: 1rem;
            font-size: 1rem;
            line-height: 1.5;
            outline: none;
            min-height: 300px; /* Default height */
        }
        /* The Control Panel (Middle) */
        .controls {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            justify-content: center;
            min-width: 180px;
        }
        button {
            padding: 0.75rem 1rem;
            border: 1px solid var(--border);
            background: var(--surface);
            cursor: pointer;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.2s;
            color: var(--text);
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        button:hover {
            border-color: var(--primary);
            color: var(--primary);
            background: #eef2ff;
        }
        button.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        /* Utility buttons (Copy/Clear) */
        .utility-btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            border: 1px solid var(--border);
            background: white;
            cursor: pointer;
        }
        .utility-btn:hover {
            background: #f3f4f6;
        }
        /* Responsive Design */
        @media (max-width: 850px) {
            .converter-container {
                flex-direction: column;
            }            
            .controls {
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
            }            
            button {
                flex: 1 1 120px; /* Grow, shrink, basis */
                text-align: center;
                justify-content: center;
            }            
            textarea {
                min-height: 150px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Text Case Transformer</h1>
        <p>Type on the left, click a button, copy from the right.</p>
    </header>
    <div class="converter-container">       
        <div class="text-column">
            <div class="column-header">
                <span>INPUT</span>
                <button class="utility-btn" onclick="clearAll()">Clear</button>
            </div>
            <textarea id="inputText" placeholder="Type or paste your content here..."></textarea>
        </div>
        <div class="controls">
            <button onclick="transform('upper')">UPPER CASE</button>
            <button onclick="transform('lower')">lower case</button>
            <button onclick="transform('capitalize')">Capitalize Words</button>
            <button onclick="transform('sentence')">Sentence case</button>
            <button onclick="transform('alternating')">aLtErNaTiNg</button>
            <button onclick="transform('inverse')">InVeRsE cAsE</button>
            <button onclick="transform('camel')">camelCase</button>
            <button onclick="transform('kebab')">kebab-case</button>
        </div>
        <div class="text-column">
            <div class="column-header">
                <span>RESULT</span>
                <button class="utility-btn" id="copyBtn" onclick="copyText()">Copy Result</button>
            </div>
            <textarea id="outputText" readonly placeholder="Result will appear here..."></textarea>
        </div>
    </div>
    <script>
        const inputText = document.getElementById('inputText');
        const outputText = document.getElementById('outputText');
        // Main Transformation Logic
        function transform(type) {
            const text = inputText.value;
            let result = '';
            switch(type) {
                case 'upper':
                    result = text.toUpperCase();
                    break;
                case 'lower':
                    result = text.toLowerCase();
                    break;
                case 'capitalize': // Capitalize First Letter Of Every Word
                    result = text.replace(/\b\w/g, char => char.toUpperCase());
                    break;
                case 'sentence': // Capitalize first letter of sentences
                     // Matches the start of the string OR a punctuation mark followed by whitespace
                    result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
                    break;
                case 'alternating':
                    result = text.split('').map((char, i) => 
                        i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
                    ).join('');
                    break;
                case 'inverse':
                    result = text.split('').map(char => 
                        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                    ).join('');
                    break;
                case 'camel':
                    // Removes special chars, capitalizes words, lowercases first word
                    result = text.toLowerCase()
                        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
                    break;
                case 'kebab':
                    result = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        ?.map(x => x.toLowerCase())
                        .join('-') || text;
                    break;
            }
            outputText.value = result;
        }
        // Live update (Optional: Updates as you type based on last button clicked)
        // You can enable this if you want "live" conversion without clicking buttons repeatedly
        // inputText.addEventListener('input', () => { /* Logic to re-run last transform */ });
        // Utility Functions
        function copyText() {
            if (!outputText.value) return;
            outputText.select();
            document.execCommand('copy'); // Fallback for older browsers           
            // Modern API
            if (navigator.clipboard) {
                navigator.clipboard.writeText(outputText.value);
            }
            // Visual Feedback
            const btn = document.getElementById('copyBtn');
            const originalText = btn.innerText;
            btn.innerText = 'Copied!';
            setTimeout(() => btn.innerText = originalText, 1500);
        }
        function clearAll() {
            inputText.value = '';
            outputText.value = '';
            inputText.focus();
        }
    </script>
</body>
</html>
{% endhighlight %}