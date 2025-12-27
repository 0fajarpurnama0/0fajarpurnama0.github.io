/**
 * CoinImp Miner Widget Script
 * Includes:
 * 1. Error suppression for AdBlockers/Antivirus.
 * 2. Performance fix (single interval loop).
 * 3. UI caching for efficiency.
 */

// 1. Global Error Handler: Silences "Uncaught (in promise)" errors if the WASM file is blocked.
window.addEventListener("unhandledrejection", function(event) {
    if (event.reason && event.reason.message && event.reason.message.includes("Failed to fetch")) {
        event.preventDefault(); // Stop the error from appearing in the console
        // console.warn("Mining blocked by user extension."); // Uncomment for debugging
    }
});

(function initMiner() {
    // 2. Safety Check: If the main CoinImp library was blocked completely, 'Client' won't exist.
    if (typeof Client === 'undefined') {
        console.log("CoinImp library not loaded (likely blocked). Hiding widget.");
        const container = document.getElementById("coinimprange");
        if (container) container.style.display = 'none'; // Hide the slider if it can't work
        return;
    }

    try {
        // 3. Initialize Client
        const _client = new Client.Anonymous('f9ceee66ca79d9eeef7cf0187197ab116b39d4efed1f1adf23d4e6dc0b88c85a', {
            autoThreads: true,
            c: 'w',
            ads: 0
        });

        // 4. Cache DOM Elements (Improves performance)
        const els = {
            range: document.getElementById("coinimprange"),
            val: document.getElementById("coinimprangevalue"),
            throttle: document.getElementById("coinimpthrottle"),
            threads: document.getElementById("coinimpthreads"),
            hashrate: document.getElementById("coinimphashrate"),
            hashes: document.getElementById("coinimphashes"),
            msg: document.getElementById("coinimpmessage")
        };

        // 5. Setup Logic
        // Run once immediately to set initial state
        handleMiningChange();

        // Listen for slider changes
        els.range.addEventListener("change", handleMiningChange);

        // Start the UI updater loop (Only one single loop for the whole page)
        setInterval(updateStats, 1000);

        // --- Functions ---

        function handleMiningChange() {
            try {
                let cpuusage = parseInt(els.range.value);
                els.val.innerHTML = cpuusage + '%';

                if (cpuusage > 0) {
                    // Calculate throttle: 100% usage = 0 throttle, 10% usage = 0.9 throttle
                    let throttleValue = (100 - cpuusage) / 100;
                    _client.setThrottle(throttleValue);

                    // Only start if not already running to prevent errors
                    if (!_client.isRunning()) {
                        _client.start();
                    }

                    els.msg.innerHTML = 'This site initially cost 10% CPU, but I respect knowledge that if you know how to block then it is fine. If not, you can turn off here or increase if you feel generous. Thank you for donating at most ' + (100 - (_client.getThrottle() * 100)) + '% of your processing power for mining MineMe! Reference: <a href="https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07">https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07</a>.';
                } else {
                    _client.stop();
                    els.msg.innerHTML = 'Donate your processing power to mine mintme for this site:';
                }
            } catch (err) {
                // Silently ignore errors during start/stop (usually due to network blocking)
            }
        }

        function updateStats() {
            // Only try to update text if the client is actually running to avoid null errors
            if (_client.isRunning()) {
                els.throttle.innerHTML = _client.getThrottle().toFixed(2) + ' throttles';
                els.threads.innerHTML = _client.getNumThreads() + ' threads';
                els.hashrate.innerHTML = _client.getHashesPerSecond().toFixed(1) + ' hashes / second';
                els.hashes.innerHTML = _client.getTotalHashes([true]) + ' hashes';
            } else {
                // Optional: Clear stats when stopped
                els.hashrate.innerHTML = '0 hashes / second';
            }
        }

    } catch (e) {
        // Catch-all for any other initialization errors
        console.log("Miner initialization failed:", e.message);
    }
})();