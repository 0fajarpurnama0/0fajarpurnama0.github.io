---
layout: post
title: AudioSynth Slider Mixer in HTML CSS JavaScript
description: AudioSynth Slider Mixer in hyper text markup language, cascading style sheets, and javascript.
featuredimage: 
category: tools
tags: [tools, AudioSynth, Slider Mixer, html css, js]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/25/audiosynth-slider-mixer
---
<style>
    :root { --bg: #222; --panel: #333; --accent: #00d2ff; --text: #eee; }
    body { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 20px; text-align: center; }
    
    /* Layout */
    .container { display: flex; gap: 20px; justify-content: center; max-width: 1000px; margin: 0 auto; flex-wrap: wrap; }
    .panel { background: var(--panel); padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); flex: 1; min-width: 300px; }
    
    h2 { margin-top: 0; border-bottom: 2px solid var(--accent); padding-bottom: 10px; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; }

    /* Sliders */
    .slider-group { margin-bottom: 20px; text-align: left; }
    .slider-group label { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 5px; font-weight: bold; }
    input[type=range] { width: 100%; cursor: pointer; accent-color: var(--accent); }
    
    /* Piano Keys */
    .piano { display: flex; justify-content: center; gap: 4px; margin-top: 20px; background: #111; padding: 10px; border-radius: 5px; }
    .key { 
        width: 40px; height: 120px; background: white; border-radius: 0 0 4px 4px; 
        cursor: pointer; position: relative; transition: 0.1s; 
        display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px; 
        color: #333; font-weight: bold; font-size: 12px; user-select: none;
    }
    .key:active { background: var(--accent); transform: scale(0.95); }
    .key.black { 
        background: #000; color: white; height: 80px; width: 30px; 
        margin-left: -17px; margin-right: -17px; z-index: 2; 
    }

    /* Export Area */
    textarea { width: 100%; height: 150px; background: #111; color: #0f0; border: none; padding: 10px; font-family: monospace; font-size: 12px; margin-top: 10px; }
    button.export-btn { background: var(--accent); color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; margin-top: 10px; border-radius: 4px; }
    button.export-btn:hover { opacity: 0.8; }
</style>

<h1>🎚️ AudioSynth Mixer</h1>

<div class="container">
    <div class="panel">
        <h2>Harmonics (Timbre)</h2>
        <div class="slider-group">
            <label>Fundamental (Base Tone) <span id="val-h1">1.0</span></label>
            <input type="range" id="h1" min="0" max="1" step="0.01" value="1.0" oninput="updateUI()">
        </div>
        <div class="slider-group">
            <label>2nd Harmonic (Octave) <span id="val-h2">0.5</span></label>
            <input type="range" id="h2" min="0" max="1" step="0.01" value="0.5" oninput="updateUI()">
        </div>
        <div class="slider-group">
            <label>3rd Harmonic (Fifth) <span id="val-h3">0.25</span></label>
            <input type="range" id="h3" min="0" max="1" step="0.01" value="0.25" oninput="updateUI()">
        </div>
        <div class="slider-group">
            <label>High Freq Sparkle <span id="val-h4">0.1</span></label>
            <input type="range" id="h4" min="0" max="1" step="0.01" value="0.1" oninput="updateUI()">
        </div>
    </div>

    <div class="panel">
        <h2>Envelope (Shape)</h2>
        <div class="slider-group">
            <label>Attack Speed (Seconds) <span id="val-att">0.002</span></label>
            <input type="range" id="att" min="0.001" max="0.5" step="0.001" value="0.002" oninput="updateUI()">
            <small style="color:#888">Low = Pluck/Piano, High = Pad/Violin</small>
        </div>
        <div class="slider-group">
            <label>Dampen (Decay) <span id="val-damp">1.0</span></label>
            <input type="range" id="damp" min="0.1" max="5.0" step="0.1" value="1.0" oninput="updateUI()">
            <small style="color:#888">Low = Long Sustain, High = Short Pluck</small>
        </div>
        
        <button class="export-btn" onclick="generateCode()">Generate JS Code</button>
    </div>
</div>

<div class="piano">
    <div class="key" onclick="playTone('C', 3)">C3</div>
    <div class="key" onclick="playTone('D', 3)">D3</div>
    <div class="key" onclick="playTone('E', 3)">E3</div>
    <div class="key" onclick="playTone('F', 3)">F3</div>
    <div class="key" onclick="playTone('G', 3)">G3</div>
    <div class="key" onclick="playTone('A', 3)">A3</div>
    <div class="key" onclick="playTone('B', 3)">B3</div>
    <div class="key" onclick="playTone('C', 4)">C4</div>
</div>

<div class="container" style="margin-top: 20px;">
    <textarea id="code-output" placeholder="Click 'Generate JS Code' to get your profile..."></textarea>
</div>

<script src="/assets/js/3rdparty/audiosynth.js"></script>

<script>
    // Store current slider values
    let params = {
        h1: 1.0, h2: 0.5, h3: 0.25, h4: 0.1,
        attack: 0.002, dampen: 1.0
    };

    function updateUI() {
        // Update the display numbers
        params.h1 = parseFloat(document.getElementById('h1').value);
        params.h2 = parseFloat(document.getElementById('h2').value);
        params.h3 = parseFloat(document.getElementById('h3').value);
        params.h4 = parseFloat(document.getElementById('h4').value);
        params.attack = parseFloat(document.getElementById('att').value);
        params.dampen = parseFloat(document.getElementById('damp').value);

        document.getElementById('val-h1').innerText = params.h1;
        document.getElementById('val-h2').innerText = params.h2;
        document.getElementById('val-h3').innerText = params.h3;
        document.getElementById('val-h4').innerText = params.h4;
        document.getElementById('val-att').innerText = params.attack;
        document.getElementById('val-damp').innerText = params.dampen;
    }

    function playTone(note, octave) {
        // TRICK: AudioSynth caches sounds aggressively.
        // If we want to hear our slider changes instantly, 
        // we must create a UNIQUE instrument name every time we press a key.
        // Otherwise, it will play the old cached sound.
        let tempName = "mix_" + Date.now();

        Synth.loadSoundProfile({
            name: tempName,
            attack: function() { return params.attack; },
            dampen: function(sampleRate, frequency, volume) {
                // Using a simplified dampen logic based on the slider
                return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * params.dampen;
            },
            wave: function(i, sampleRate, frequency, volume) {
                // We access the built-in modulators (Sin waves)
                // modulate[0] = Fundamental
                // modulate[1] = Octave (2nd harmonic)
                // modulate[2] = 2 Octaves up (3rd harmonic)
                var base = this.modulate[0];
                var mod1 = this.modulate[1];
                var mod2 = this.modulate[2];

                // We mix them based on slider values!
                return (
                    (params.h1 * base(i, sampleRate, frequency, 0)) +
                    (params.h2 * mod1(i, sampleRate, frequency, 0)) + 
                    (params.h3 * mod2(i, sampleRate, frequency, 0)) +
                    (params.h4 * base(i, sampleRate, frequency, 0.5)) // Phase shifted sparkle
                );
            }
        });

        // Create and play instantly
        let instrument = Synth.createInstrument(tempName);
        instrument.play(note, octave, 2);
    }

    function generateCode() {
        // Generates the code snippet to copy-paste into your project
        let code = `
Synth.loadSoundProfile({
name: 'custom_slider_sound',
attack: function() { return ${params.attack}; },
dampen: function(sampleRate, frequency, volume) {
    return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * ${params.dampen};
},
wave: function(i, sampleRate, frequency, volume) {
    var base = this.modulate[0];
    var mod1 = this.modulate[1];
    var mod2 = this.modulate[2];
    
    return (
        (${params.h1} * base(i, sampleRate, frequency, 0)) +
        (${params.h2} * mod1(i, sampleRate, frequency, 0)) + 
        (${params.h3} * mod2(i, sampleRate, frequency, 0)) +
        (${params.h4} * base(i, sampleRate, frequency, 0.5))
    );
}
});
        `;
        document.getElementById('code-output').value = code.trim();
    }
</script>

<h1>Source Code</h1>
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AudioSynth Slider Mixer</title>
    <style>
        :root { --bg: #222; --panel: #333; --accent: #00d2ff; --text: #eee; }
        body { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 20px; text-align: center; }
        
        /* Layout */
        .container { display: flex; gap: 20px; justify-content: center; max-width: 1000px; margin: 0 auto; flex-wrap: wrap; }
        .panel { background: var(--panel); padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); flex: 1; min-width: 300px; }
        
        h2 { margin-top: 0; border-bottom: 2px solid var(--accent); padding-bottom: 10px; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; }

        /* Sliders */
        .slider-group { margin-bottom: 20px; text-align: left; }
        .slider-group label { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 5px; font-weight: bold; }
        input[type=range] { width: 100%; cursor: pointer; accent-color: var(--accent); }
        
        /* Piano Keys */
        .piano { display: flex; justify-content: center; gap: 4px; margin-top: 20px; background: #111; padding: 10px; border-radius: 5px; }
        .key { 
            width: 40px; height: 120px; background: white; border-radius: 0 0 4px 4px; 
            cursor: pointer; position: relative; transition: 0.1s; 
            display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px; 
            color: #333; font-weight: bold; font-size: 12px; user-select: none;
        }
        .key:active { background: var(--accent); transform: scale(0.95); }
        .key.black { 
            background: #000; color: white; height: 80px; width: 30px; 
            margin-left: -17px; margin-right: -17px; z-index: 2; 
        }

        /* Export Area */
        textarea { width: 100%; height: 150px; background: #111; color: #0f0; border: none; padding: 10px; font-family: monospace; font-size: 12px; margin-top: 10px; }
        button.export-btn { background: var(--accent); color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; margin-top: 10px; border-radius: 4px; }
        button.export-btn:hover { opacity: 0.8; }
    </style>
</head>
<body>

    <h1>🎚️ AudioSynth Mixer</h1>

    <div class="container">
        <div class="panel">
            <h2>Harmonics (Timbre)</h2>
            <div class="slider-group">
                <label>Fundamental (Base Tone) <span id="val-h1">1.0</span></label>
                <input type="range" id="h1" min="0" max="1" step="0.01" value="1.0" oninput="updateUI()">
            </div>
            <div class="slider-group">
                <label>2nd Harmonic (Octave) <span id="val-h2">0.5</span></label>
                <input type="range" id="h2" min="0" max="1" step="0.01" value="0.5" oninput="updateUI()">
            </div>
            <div class="slider-group">
                <label>3rd Harmonic (Fifth) <span id="val-h3">0.25</span></label>
                <input type="range" id="h3" min="0" max="1" step="0.01" value="0.25" oninput="updateUI()">
            </div>
            <div class="slider-group">
                <label>High Freq Sparkle <span id="val-h4">0.1</span></label>
                <input type="range" id="h4" min="0" max="1" step="0.01" value="0.1" oninput="updateUI()">
            </div>
        </div>

        <div class="panel">
            <h2>Envelope (Shape)</h2>
            <div class="slider-group">
                <label>Attack Speed (Seconds) <span id="val-att">0.002</span></label>
                <input type="range" id="att" min="0.001" max="0.5" step="0.001" value="0.002" oninput="updateUI()">
                <small style="color:#888">Low = Pluck/Piano, High = Pad/Violin</small>
            </div>
            <div class="slider-group">
                <label>Dampen (Decay) <span id="val-damp">1.0</span></label>
                <input type="range" id="damp" min="0.1" max="5.0" step="0.1" value="1.0" oninput="updateUI()">
                <small style="color:#888">Low = Long Sustain, High = Short Pluck</small>
            </div>
            
            <button class="export-btn" onclick="generateCode()">Generate JS Code</button>
        </div>
    </div>

    <div class="piano">
        <div class="key" onclick="playTone('C', 3)">C3</div>
        <div class="key" onclick="playTone('D', 3)">D3</div>
        <div class="key" onclick="playTone('E', 3)">E3</div>
        <div class="key" onclick="playTone('F', 3)">F3</div>
        <div class="key" onclick="playTone('G', 3)">G3</div>
        <div class="key" onclick="playTone('A', 3)">A3</div>
        <div class="key" onclick="playTone('B', 3)">B3</div>
        <div class="key" onclick="playTone('C', 4)">C4</div>
    </div>

    <div class="container" style="margin-top: 20px;">
        <textarea id="code-output" placeholder="Click 'Generate JS Code' to get your profile..."></textarea>
    </div>

    <script src="https://0fajarpurnama0.github.io/assets/js/3rdparty/audiosynth.js"></script>

    <script>
        // Store current slider values
        let params = {
            h1: 1.0, h2: 0.5, h3: 0.25, h4: 0.1,
            attack: 0.002, dampen: 1.0
        };

        function updateUI() {
            // Update the display numbers
            params.h1 = parseFloat(document.getElementById('h1').value);
            params.h2 = parseFloat(document.getElementById('h2').value);
            params.h3 = parseFloat(document.getElementById('h3').value);
            params.h4 = parseFloat(document.getElementById('h4').value);
            params.attack = parseFloat(document.getElementById('att').value);
            params.dampen = parseFloat(document.getElementById('damp').value);

            document.getElementById('val-h1').innerText = params.h1;
            document.getElementById('val-h2').innerText = params.h2;
            document.getElementById('val-h3').innerText = params.h3;
            document.getElementById('val-h4').innerText = params.h4;
            document.getElementById('val-att').innerText = params.attack;
            document.getElementById('val-damp').innerText = params.dampen;
        }

        function playTone(note, octave) {
            // TRICK: AudioSynth caches sounds aggressively.
            // If we want to hear our slider changes instantly, 
            // we must create a UNIQUE instrument name every time we press a key.
            // Otherwise, it will play the old cached sound.
            let tempName = "mix_" + Date.now();

            Synth.loadSoundProfile({
                name: tempName,
                attack: function() { return params.attack; },
                dampen: function(sampleRate, frequency, volume) {
                    // Using a simplified dampen logic based on the slider
                    return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * params.dampen;
                },
                wave: function(i, sampleRate, frequency, volume) {
                    // We access the built-in modulators (Sin waves)
                    // modulate[0] = Fundamental
                    // modulate[1] = Octave (2nd harmonic)
                    // modulate[2] = 2 Octaves up (3rd harmonic)
                    var base = this.modulate[0];
                    var mod1 = this.modulate[1];
                    var mod2 = this.modulate[2];

                    // We mix them based on slider values!
                    return (
                        (params.h1 * base(i, sampleRate, frequency, 0)) +
                        (params.h2 * mod1(i, sampleRate, frequency, 0)) + 
                        (params.h3 * mod2(i, sampleRate, frequency, 0)) +
                        (params.h4 * base(i, sampleRate, frequency, 0.5)) // Phase shifted sparkle
                    );
                }
            });

            // Create and play instantly
            let instrument = Synth.createInstrument(tempName);
            instrument.play(note, octave, 2);
        }

        function generateCode() {
            // Generates the code snippet to copy-paste into your project
            let code = `
Synth.loadSoundProfile({
    name: 'custom_slider_sound',
    attack: function() { return ${params.attack}; },
    dampen: function(sampleRate, frequency, volume) {
        return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * ${params.dampen};
    },
    wave: function(i, sampleRate, frequency, volume) {
        var base = this.modulate[0];
        var mod1 = this.modulate[1];
        var mod2 = this.modulate[2];
        
        return (
            (${params.h1} * base(i, sampleRate, frequency, 0)) +
            (${params.h2} * mod1(i, sampleRate, frequency, 0)) + 
            (${params.h3} * mod2(i, sampleRate, frequency, 0)) +
            (${params.h4} * base(i, sampleRate, frequency, 0.5))
        );
    }
});
            `;
            document.getElementById('code-output').value = code.trim();
        }
    </script>
</body>
</html>
{% endhighlight %}