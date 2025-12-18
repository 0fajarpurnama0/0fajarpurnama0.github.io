---
layout: post
title: Video Trimmer in HTML CSS JS
description: A video trimmer using only html css js through ffmpeg wasm.
featuredimage: /assets/images/icon/ftcut.png
category: tools
tags: [tools, video, trimmer, html css, js, json]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/15/video-trimmer
---
<link rel="stylesheet" href="/assets/css/3rdparty/nouislider-15.7.1.min.css">

<style>
    body { font-family: sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
    video { width: 100%; margin-bottom: 20px; border-radius: 8px; background: #000; }
    /* The Slider Container */
    #slider-container { margin: 0 10px 30px 10px; }
    /* Visual Styles */
    .controls { display: flex; gap: 10px; align-items: center; }
    .time-display { font-family: monospace; font-weight: bold; }
    #download-link { display: none; color: white; background: #007bff; padding: 10px 20px; text-decoration: none; border-radius: 4px;}
    button { padding: 10px 20px; cursor: pointer; }
    /* Add this simple CSS to make them look nice */
    .controls-wrapper {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }
    .input-group {
        display: flex;
        flex-direction: column;
    }
    .input-group input {
        width: 80px;
        padding: 5px;
        font-size: 16px;
        font-family: monospace;
    }
</style>

<input type="file" id="upload" accept="video/*"><br><br>

<video id="video-element" controls playsinline></video>

<div id="slider-container"></div>

<div class="controls-wrapper">
    <div class="input-group">
        <label>Start (sec)</label>
        <input type="number" id="val-start" step="0.01" min="0">
    </div>
    <button id="trim-btn" disabled>Trim Video</button>
    <div class="input-group">
        <label>End (sec)</label>
        <input type="number" id="val-end" step="0.01" min="0">
    </div>
</div>

<a id="download-link" download="trimmed.mp4" style="display:none; margin-top: 10px; text-align: center;">Download Trimmed Video</a>

<p id="message"></p>
<script src="/assets/js;/3rdparty/nouislider-15.7.1.min.js"></script>
<!-- this does not work
<script src="/assets/js/3rdparty/coi-serviceworker-0.1.7.js"></script>
so change to below -->
<script src="/coi-serviceworker-0.1.7.js"></script> 
<script src="/assets/js/3rdparty/ffmpeg-0.11.6.min.js"></script>
<script>
/**
 * VIDEO TRIMMER ENGINE (HTML5 + FFmpeg.wasm)
 */
const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });
// UI Element Selectors
const video = document.getElementById('video-element');
const upload = document.getElementById('upload');
const slider = document.getElementById('slider-container');
const trimBtn = document.getElementById('trim-btn');
const message = document.getElementById('message');
const valStart = document.getElementById('val-start');
const valEnd = document.getElementById('val-end');
const downloadLink = document.getElementById('download-link');
let fileData = null;
/**
 * 1. INITIALIZE FFMPEG
 */
const initFFmpeg = async () => {
    try {
        message.innerText = 'Loading FFmpeg Engine...';
        await ffmpeg.load();
        message.innerText = 'Engine Ready.';
        trimBtn.disabled = false;
    } catch (err) {
        message.innerText = 'Error loading FFmpeg. Check console.';
        console.error(err);
    }
};
initFFmpeg();
/**
 * 2. INITIALIZE SLIDER (noUiSlider)
 */
noUiSlider.create(slider, {
    start: [0, 10], // Initial dummy values
    connect: true,
    range: { 'min': 0, 'max': 10 },
    step: 0.01,
    tooltips: false
});
slider.setAttribute('disabled', true); // Disable until video loads
/**
 * 3. FILE UPLOAD HANDLER
 */
upload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    fileData = file;
    const url = URL.createObjectURL(file);
    video.src = url;
    downloadLink.style.display = 'none';
    message.innerText = 'Video loaded. Set your trim range.';
});
/**
 * 4. VIDEO METADATA HANDLER
 * Triggered when video duration is known
 */
video.addEventListener('loadedmetadata', () => {
    const duration = video.duration;
    // Update slider to match video length
    slider.noUiSlider.updateOptions({
        range: { 'min': 0, 'max': duration },
        start: [0, duration]
    });
    slider.removeAttribute('disabled');
    valStart.value = 0;
    valEnd.value = duration.toFixed(2);
});
/**
 * 5. SLIDER -> UI BINDING
 * When slider moves, update input boxes and video frame
 */
slider.noUiSlider.on('update', (values, handle) => {
    const value = parseFloat(values[handle]); 
    if (handle === 0) {
        valStart.value = value.toFixed(2);
    } else {
        valEnd.value = value.toFixed(2);
    }
});
// Seek video preview when dragging slider
slider.noUiSlider.on('slide', (values, handle) => {
    video.currentTime = parseFloat(values[handle]);
    video.pause();
});
/**
 * 6. INPUT BOX -> SLIDER BINDING (Precision Editing)
 * When user types a number, update the slider and video frame
 */
[valStart, valEnd].forEach((input, handle) => {
    input.addEventListener('change', function() {
        let newVal = parseFloat(this.value);
        let currentValues = slider.noUiSlider.get().map(Number);
        const duration = video.duration;
        // Validation: Clamp to video duration
        if (newVal < 0) newVal = 0;
        if (newVal > duration) newVal = duration;
        // Validation: Prevent handles from crossing
        if (handle === 0 && newVal >= currentValues[1]) {
            newVal = currentValues[1] - 0.1;
        } else if (handle === 1 && newVal <= currentValues[0]) {
            newVal = currentValues[0] + 0.1;
        }
        this.value = newVal.toFixed(2);
        // Update Slider handles
        let setArray = [null, null];
        setArray[handle] = newVal;
        slider.noUiSlider.set(setArray);
        // Update Video Preview
        video.currentTime = newVal;
    });
});
/**
 * 7. THE TRIM ACTION (FFmpeg Execution)
 */
trimBtn.addEventListener('click', async () => {
    if (!fileData || !ffmpeg.isLoaded()) return;
    trimBtn.disabled = true;
    message.innerText = 'Processing... Please wait.';
    const start = valStart.value;
    const end = valEnd.value;
    const duration = (parseFloat(end) - parseFloat(start)).toFixed(2);
    // Write file to FFmpeg's Virtual File System
    const inputName = 'input.mp4';
    const outputName = 'output.mp4';
    ffmpeg.FS('writeFile', inputName, await fetchFile(fileData));
    /**
     * COMMAND EXPLAINED:
     * -ss : Start time (placed before -i for faster seeking)
     * -i  : Input file
     * -t  : Duration to cut
     * -c copy : Stream Copy (Fastest, no re-encoding)
     */
    await ffmpeg.run(
        '-ss', start,
        '-i', inputName,
        '-t', duration,
        '-c', 'copy',
        outputName
    );
    // Read resulting file
    const data = ffmpeg.FS('readFile', outputName);
    // Create download URL
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.style.display = 'inline-block';
    message.innerText = 'Trim complete!';
    trimBtn.disabled = false;
    // Cleanup virtual FS to save memory
    ffmpeg.FS('unlink', inputName);
    ffmpeg.FS('unlink', outputName);
});
</script>

<h1>Reference</h1>
<ul>
    <li><a href="https://ffmpegwasm.netlify.app">FFMPEG WASM</a></li>
    <li><a href="https://refreshless.com/nouislider">https://refreshless.com/nouislider</a></li>
    <li><a href="github.com/gzuidhof/coi-serviceworker">github.com/gzuidhof/coi-serviceworker</a></li>
    <li><a href="https://gemini.google.com">Acknowledgement to Google Gemini AI for helping writing the code.</a></li>
</ul>

<h1>Source Code</h1>
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Video Trimmer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.css">
    <style>
        body { font-family: sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
        video { width: 100%; margin-bottom: 20px; border-radius: 8px; background: #000; }
        /* The Slider Container */
        #slider-container { margin: 0 10px 30px 10px; }
        /* Visual Styles */
        .controls { display: flex; gap: 10px; align-items: center; }
        .time-display { font-family: monospace; font-weight: bold; }
        #download-link { display: none; color: white; background: #007bff; padding: 10px 20px; text-decoration: none; border-radius: 4px;}
        button { padding: 10px 20px; cursor: pointer; }
        /* Add this simple CSS to make them look nice */
        .controls-wrapper {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            align-items: center;
            justify-content: center;
        }
        .input-group {
            display: flex;
            flex-direction: column;
        }
        .input-group input {
            width: 80px;
            padding: 5px;
            font-size: 16px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <input type="file" id="upload" accept="video/*"><br><br>
    <video id="video-element" controls playsinline></video>
    <div id="slider-container"></div>
    <div class="controls-wrapper">
        <div class="input-group">
            <label>Start (sec)</label>
            <input type="number" id="val-start" step="0.01" min="0">
        </div>
        <button id="trim-btn" disabled>Trim Video</button>
        <div class="input-group">
            <label>End (sec)</label>
            <input type="number" id="val-end" step="0.01" min="0">
        </div>
    </div>
    <a id="download-link" download="trimmed.mp4" style="display:none; margin-top: 10px; text-align: center;">Download Trimmed Video</a>
    <p id="message"></p>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.js"></script>
    <script src="https://unpkg.com/coi-serviceworker@0.1.7/coi-serviceworker.min.js"></script> 
    <script src="https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js"></script>
    <script src="app.js"></script>

<script>
/**
 * VIDEO TRIMMER ENGINE (HTML5 + FFmpeg.wasm)
 */

const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

// UI Element Selectors
const video = document.getElementById('video-element');
const upload = document.getElementById('upload');
const slider = document.getElementById('slider-container');
const trimBtn = document.getElementById('trim-btn');
const message = document.getElementById('message');
const valStart = document.getElementById('val-start');
const valEnd = document.getElementById('val-end');
const downloadLink = document.getElementById('download-link');

let fileData = null;

/**
 * 1. INITIALIZE FFMPEG
 */
const initFFmpeg = async () => {
    try {
        message.innerText = 'Loading FFmpeg Engine...';
        await ffmpeg.load();
        message.innerText = 'Engine Ready.';
        trimBtn.disabled = false;
    } catch (err) {
        message.innerText = 'Error loading FFmpeg. Check console.';
        console.error(err);
    }
};
initFFmpeg();

/**
 * 2. INITIALIZE SLIDER (noUiSlider)
 */
noUiSlider.create(slider, {
    start: [0, 10], // Initial dummy values
    connect: true,
    range: { 'min': 0, 'max': 10 },
    step: 0.01,
    tooltips: false
});
slider.setAttribute('disabled', true); // Disable until video loads

/**
 * 3. FILE UPLOAD HANDLER
 */
upload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    fileData = file;
    const url = URL.createObjectURL(file);
    video.src = url;
    downloadLink.style.display = 'none';
    message.innerText = 'Video loaded. Set your trim range.';
});

/**
 * 4. VIDEO METADATA HANDLER
 * Triggered when video duration is known
 */
video.addEventListener('loadedmetadata', () => {
    const duration = video.duration;

    // Update slider to match video length
    slider.noUiSlider.updateOptions({
        range: { 'min': 0, 'max': duration },
        start: [0, duration]
    });
    slider.removeAttribute('disabled');
    
    valStart.value = 0;
    valEnd.value = duration.toFixed(2);
});

/**
 * 5. SLIDER -> UI BINDING
 * When slider moves, update input boxes and video frame
 */
slider.noUiSlider.on('update', (values, handle) => {
    const value = parseFloat(values[handle]);
    
    if (handle === 0) {
        valStart.value = value.toFixed(2);
    } else {
        valEnd.value = value.toFixed(2);
    }
});

// Seek video preview when dragging slider
slider.noUiSlider.on('slide', (values, handle) => {
    video.currentTime = parseFloat(values[handle]);
    video.pause();
});

/**
 * 6. INPUT BOX -> SLIDER BINDING (Precision Editing)
 * When user types a number, update the slider and video frame
 */
[valStart, valEnd].forEach((input, handle) => {
    input.addEventListener('change', function() {
        let newVal = parseFloat(this.value);
        let currentValues = slider.noUiSlider.get().map(Number);
        const duration = video.duration;

        // Validation: Clamp to video duration
        if (newVal < 0) newVal = 0;
        if (newVal > duration) newVal = duration;

        // Validation: Prevent handles from crossing
        if (handle === 0 && newVal >= currentValues[1]) {
            newVal = currentValues[1] - 0.1;
        } else if (handle === 1 && newVal <= currentValues[0]) {
            newVal = currentValues[0] + 0.1;
        }

        this.value = newVal.toFixed(2);

        // Update Slider handles
        let setArray = [null, null];
        setArray[handle] = newVal;
        slider.noUiSlider.set(setArray);

        // Update Video Preview
        video.currentTime = newVal;
    });
});

/**
 * 7. THE TRIM ACTION (FFmpeg Execution)
 */
trimBtn.addEventListener('click', async () => {
    if (!fileData || !ffmpeg.isLoaded()) return;

    trimBtn.disabled = true;
    message.innerText = 'Processing... Please wait.';

    const start = valStart.value;
    const end = valEnd.value;
    const duration = (parseFloat(end) - parseFloat(start)).toFixed(2);

    // Write file to FFmpeg's Virtual File System
    const inputName = 'input.mp4';
    const outputName = 'output.mp4';
    ffmpeg.FS('writeFile', inputName, await fetchFile(fileData));

    /**
     * COMMAND EXPLAINED:
     * -ss : Start time (placed before -i for faster seeking)
     * -i  : Input file
     * -t  : Duration to cut
     * -c copy : Stream Copy (Fastest, no re-encoding)
     */
    await ffmpeg.run(
        '-ss', start,
        '-i', inputName,
        '-t', duration,
        '-c', 'copy',
        outputName
    );

    // Read resulting file
    const data = ffmpeg.FS('readFile', outputName);
    
    // Create download URL
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    
    downloadLink.href = url;
    downloadLink.style.display = 'inline-block';
    message.innerText = 'Trim complete!';
    trimBtn.disabled = false;
    
    // Cleanup virtual FS to save memory
    ffmpeg.FS('unlink', inputName);
    ffmpeg.FS('unlink', outputName);
});
</script>
</body>
</html>
{% endhighlight %}