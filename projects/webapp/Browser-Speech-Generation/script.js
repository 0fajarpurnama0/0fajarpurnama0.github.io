// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const rateInput = document.getElementById('rate');
const pitchInput = document.getElementById('pitch');
const rateVal = document.getElementById('rate-val');
const pitchVal = document.getElementById('pitch-val');

// Variables
let voices = [];

function populateVoices() {
    // getVoices() retrieves all available voices on your OS/Browser
    voices = synth.getVoices();
    
    // Reset the dropdown
    voiceSelect.innerHTML = '';

    // Create an option for every voice found
    voices.forEach((voice) => {
        const option = document.createElement('option');
        // Display name and language (e.g. "Google US English (en-US)")
        option.textContent = `${voice.name} (${voice.lang})`;
        
        // Add specific data attributes so we can find it later
        option.setAttribute('data-name', voice.name);
        option.setAttribute('data-lang', voice.lang);
        
        voiceSelect.appendChild(option);
    });
}

// ⚠️ IMPORTANT: Voices are loaded asynchronously. 
// We must wait for the 'voiceschanged' event before populating the list.
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

// Update slider value displays
rateInput.addEventListener('input', () => rateVal.textContent = rateInput.value);
pitchInput.addEventListener('input', () => pitchVal.textContent = pitchInput.value);

// The Speak Function
function speak() {
    // If it's already speaking, stop it first to restart
    if (synth.speaking) {
        synth.cancel();
    }

    if (textInput.value === '') return;

    // 1. Create the Utterance
    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    // 2. Find the selected voice object in our voices array
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const selectedVoice = voices.find(v => v.name === selectedOption);
    
    // 3. Apply properties
    utterThis.voice = selectedVoice;
    utterThis.pitch = pitchInput.value;
    utterThis.rate = rateInput.value;

    // 4. Speak
    synth.speak(utterThis);
}

// Event Listeners for Buttons
document.getElementById('speak-btn').addEventListener('click', speak);
document.getElementById('stop-btn').addEventListener('click', () => synth.cancel());