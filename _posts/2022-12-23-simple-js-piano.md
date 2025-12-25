---
layout: post
title: Simple Piano in HTML CSS JavaScript
description: Simple Piano in hyper text markup language, cascading style sheets, and javascript.
featuredimage: 
category: tools
tags: [tools, Simple Piano, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/23/simple-js-piano
---
<style>
    .piano { display: flex; justify-content: center; gap: 5px; }
    .key {
        width: 60px; height: 200px; background: white; border-radius: 0 0 5px 5px;
        cursor: pointer; color: black; display: flex; align-items: flex-end;
        justify-content: center; padding-bottom: 20px; font-weight: bold;
        transition: background 0.1s; user-select: none;
    }
    .key:active { background: #ddd; transform: scale(0.98); }
    .controls { margin-bottom: 20px; }
    button { padding: 10px 20px; cursor: pointer; font-size: 16px; }
</style>

<h1>JavaScript AudioSynth</h1>

<div class="controls">
    <label>Instrument: </label>
    <select id="instrument-select">
        <option value="0">Piano</option>
        <option value="1">Organ</option>
        <option value="2">Acoustic Guitar</option>
        <option value="3">EDM</option>
    </select>
</div>

<div class="piano">
    <div class="key" onclick="playNote('C', 4)">C</div>
    <div class="key" onclick="playNote('D', 4)">D</div>
    <div class="key" onclick="playNote('E', 4)">E</div>
    <div class="key" onclick="playNote('F', 4)">F</div>
    <div class="key" onclick="playNote('G', 4)">G</div>
    <div class="key" onclick="playNote('A', 4)">A</div>
    <div class="key" onclick="playNote('B', 4)">B</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/audiosynth@0.0.5/index.min.js"></script>

<script>
    // 1. Create the AudioSynth Instance
    // AudioSynth is a singleton in this library, accessed via 'Synth'
    
    function playNote(note, octave) {
        // Get selected instrument ID from the dropdown
        const instrumentId = document.getElementById('instrument-select').value;
        
        // Create the instrument (0=Piano, 1=Organ, 2=Acoustic, 3=EDM)
        const instrument = Synth.createInstrument(instrumentId);
        
        // Play the note: Note Name, Octave, Duration (seconds)
        instrument.play(note, octave, 2);
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
    <title>Simple JS Piano</title>
    <style>
        body { font-family: sans-serif; text-align: center; background: #222; color: white; padding-top: 50px; }
        .piano { display: flex; justify-content: center; gap: 5px; }
        .key {
            width: 60px; height: 200px; background: white; border-radius: 0 0 5px 5px;
            cursor: pointer; color: black; display: flex; align-items: flex-end;
            justify-content: center; padding-bottom: 20px; font-weight: bold;
            transition: background 0.1s; user-select: none;
        }
        .key:active { background: #ddd; transform: scale(0.98); }
        .controls { margin-bottom: 20px; }
        button { padding: 10px 20px; cursor: pointer; font-size: 16px; }
    </style>
</head>
<body>

    <h1>JavaScript AudioSynth</h1>
    
    <div class="controls">
        <label>Instrument: </label>
        <select id="instrument-select">
            <option value="0">Piano</option>
            <option value="1">Organ</option>
            <option value="2">Acoustic Guitar</option>
            <option value="3">EDM</option>
        </select>
    </div>

    <div class="piano">
        <div class="key" onclick="playNote('C', 4)">C</div>
        <div class="key" onclick="playNote('D', 4)">D</div>
        <div class="key" onclick="playNote('E', 4)">E</div>
        <div class="key" onclick="playNote('F', 4)">F</div>
        <div class="key" onclick="playNote('G', 4)">G</div>
        <div class="key" onclick="playNote('A', 4)">A</div>
        <div class="key" onclick="playNote('B', 4)">B</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/audiosynth@0.0.5/index.min.js"></script>

    <script>
        // 1. Create the AudioSynth Instance
        // AudioSynth is a singleton in this library, accessed via 'Synth'
        
        function playNote(note, octave) {
            // Get selected instrument ID from the dropdown
            const instrumentId = document.getElementById('instrument-select').value;
            
            // Create the instrument (0=Piano, 1=Organ, 2=Acoustic, 3=EDM)
            const instrument = Synth.createInstrument(instrumentId);
            
            // Play the note: Note Name, Octave, Duration (seconds)
            instrument.play(note, octave, 2);
        }
    </script>

</body>
</html>
{% endhighlight %}