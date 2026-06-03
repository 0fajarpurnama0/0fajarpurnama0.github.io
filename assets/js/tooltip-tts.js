// Text to Speech tools

class TooltipTTS {
    constructor() {
        this.synth = window.speechSynthesis;
        this.selectedText = "";
        this.voices = [];
        
        // Chunking State Variables
        this.textChunks = [];
        this.currentChunkIndex = 0;
        this.isPlaying = false;
        this.MAX_CHUNK_CHARS = 2000; // Safe threshold for native browser engines
        
        // Find the user's dropdown menu in the HTML
        this.voiceSelect = document.getElementById('voice-select');
        
        // 1. Create the floating button
        this.tooltip = document.createElement('button');
        this.tooltip.id = 'tts-tooltip';
        this.tooltip.innerHTML = '🔊 Speak';
        document.body.appendChild(this.tooltip);

        // 2. Event Listeners for the tooltip
        document.addEventListener('mouseup', (e) => this.checkSelection(e));
        document.addEventListener('touchend', (e) => this.checkSelection(e));
        document.addEventListener('mousedown', (e) => {
            if (e.target !== this.tooltip) {
                // If they click off the tooltip, stop speaking and hide it
                if (this.isPlaying && e.target.id !== 'voice-select') {
                    this.stop();
                }
                this.hideTooltip();
            }
        });

        this.tooltip.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.isPlaying) {
                this.stop();
            } else {
                this.start();
            }
        });

        // 3. Initialize the voices for the dropdown
        this.initVoices();
    }

    initVoices() {
        const populate = () => {
            this.voices = this.synth.getVoices();
            
            if (this.voices.length > 0 && this.voiceSelect) {
                this.voiceSelect.innerHTML = ''; 
                
                this.voices.forEach((voice) => {
                    const option = document.createElement('option');
                    option.value = voice.name;
                    option.textContent = `${voice.name} (${voice.lang})`;
                    this.voiceSelect.appendChild(option);
                });
            }
        };

        populate();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populate;
        }
    }

    checkSelection(e) {
        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection.toString().trim();

            // Do not break the flow if the user is clicking the tooltip or changing the voice
            if (e.target === this.tooltip || e.target === this.voiceSelect) return;

            if (text.length > 0) {
                this.selectedText = text;
                this.showTooltip(e);
            } else {
                this.hideTooltip();
            }
        }, 10);
    }

    showTooltip(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;

        if (e.type === 'touchend') {
            pageX = e.changedTouches[0].pageX;
            pageY = e.changedTouches[0].pageY;
        }

        this.tooltip.style.left = `${pageX}px`;
        this.tooltip.style.top = `${pageY - 45}px`;
        this.tooltip.classList.add('visible');
    }

    hideTooltip() {
        // Only hide if we aren't currently reading out loud
        if (!this.isPlaying) {
            this.tooltip.classList.remove('visible');
            this.selectedText = "";
        }
    }

    // --- SMART CHUNKING LOGIC ---
    chunkText(text, maxChars) {
        // Split by punctuation sentences while keeping the punctuation mark intact
        const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
        const chunks = [];
        let currentChunk = "";

        for (let sentence of sentences) {
            // Handle edge-case sentences longer than maximum allowed characters
            if (sentence.length > maxChars) {
                const words = sentence.split(' ');
                for (let word of words) {
                    if ((currentChunk + word).length > maxChars) {
                        if (currentChunk.trim()) chunks.push(currentChunk.trim());
                        currentChunk = word + " ";
                    } else {
                        currentChunk += word + " ";
                    }
                }
            } 
            // Standard sentence aggregation
            else if ((currentChunk + sentence).length > maxChars) {
                chunks.push(currentChunk.trim());
                currentChunk = sentence;
            } else {
                currentChunk += sentence;
            }
        }
        
        if (currentChunk.trim()) {
            chunks.push(currentChunk.trim());
        }
        return chunks;
    }

    start() {
        if (!this.selectedText) return;

        this.synth.cancel(); // Terminate existing browser sounds
        this.isPlaying = true;
        this.tooltip.innerHTML = '⏹️ Stop';

        // Prepare the text queue
        this.textChunks = this.chunkText(this.selectedText, this.MAX_CHUNK_CHARS);
        this.currentChunkIndex = 0;

        this.speakNextChunk();
    }

    speakNextChunk() {
        if (this.currentChunkIndex >= this.textChunks.length || !this.isPlaying) {
            this.stop();
            return;
        }

        const chunk = this.textChunks[this.currentChunkIndex];
        const utterance = new SpeechSynthesisUtterance(chunk);
        
        // Apply selected voice
        if (this.voiceSelect && this.voices.length > 0) {
            const selectedName = this.voiceSelect.value;
            const chosenVoice = this.voices.find(v => v.name === selectedName);
            if (chosenVoice) {
                utterance.voice = chosenVoice;
            }
        }

        // Chain to the next chunk when done
        utterance.onend = () => {
            this.currentChunkIndex++;
            this.speakNextChunk();
        };

        utterance.onerror = (e) => {
            console.error("TTS Chunking Error:", e);
            this.stop();
        };

        this.synth.speak(utterance);
    }

    stop() {
        this.isPlaying = false;
        this.synth.cancel();
        this.textChunks = [];
        this.currentChunkIndex = 0;
        this.tooltip.innerHTML = '🔊 Speak';
        
        // Clear selection to clean up the screen state
        window.getSelection().removeAllRanges();
        this.hideTooltip();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.tooltipTTS = new TooltipTTS();
});