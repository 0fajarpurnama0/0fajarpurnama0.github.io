// Text to Speech tools

class TooltipTTS {
    constructor() {
        this.synth = window.speechSynthesis;
        this.selectedText = "";
        this.voices = [];
        
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
            if (e.target !== this.tooltip) this.hideTooltip();
        });

        this.tooltip.addEventListener('click', (e) => {
            e.stopPropagation();
            this.speak();
        });

        // 3. Initialize the voices for the dropdown
        this.initVoices();
    }

    initVoices() {
        const populate = () => {
            this.voices = this.synth.getVoices();
            
            // Only populate if we found voices and the HTML select exists
            if (this.voices.length > 0 && this.voiceSelect) {
                this.voiceSelect.innerHTML = ''; // Clear "Loading..." text
                
                this.voices.forEach((voice) => {
                    const option = document.createElement('option');
                    // Save the exact voice name as the value so we can find it later
                    option.value = voice.name;
                    option.textContent = `${voice.name} (${voice.lang})`;
                    this.voiceSelect.appendChild(option);
                });
            }
        };

        // Run immediately (works for Safari/Firefox)
        populate();
        
        // Listen for async loading (required for Chrome/Edge)
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populate;
        }
    }

    checkSelection(e) {
        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection.toString().trim();

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
        this.tooltip.classList.remove('visible');
        this.selectedText = "";
    }

    speak() {
        if (!this.selectedText) return;

        if (this.synth.speaking) {
            this.synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(this.selectedText);
        
        // --- NEW: APPLY THE SELECTED VOICE ---
        if (this.voiceSelect && this.voices.length > 0) {
            const selectedName = this.voiceSelect.value;
            const chosenVoice = this.voices.find(v => v.name === selectedName);
            if (chosenVoice) {
                utterance.voice = chosenVoice;
            }
        }

        this.tooltip.innerHTML = '⏹️ Stop';
        
        utterance.onend = () => {
            this.tooltip.innerHTML = '🔊 Speak';
            this.hideTooltip();
        };

        utterance.onerror = () => {
            this.tooltip.innerHTML = '🔊 Speak';
            this.hideTooltip();
        };

        this.synth.speak(utterance);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.tooltipTTS = new TooltipTTS();
    } catch (error) {
        console.log(error);
    }
});