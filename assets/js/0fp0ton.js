// assets/js/0fp0ton.js

// --- Globals & Configuration ---
let tonConnectUI; // Singleton instance
const TON_TOKEN_MASTER_ADDRESS = "EQB-T3IJFjbTgcV7RoEivK_3mmUD9uPkLkKRkTl4sIpRyQc3"; // The token's master address
const TON_TOKEN_DECIMALS = 9; // Decimals for this specific Jetton
let currentTonAccount = null;

// Initialize on page load
window.addEventListener('load', async () => {
    try {
        if (typeof TON_CONNECT_UI === 'undefined') {
            console.error("TON Connect UI library not loaded.");
            return;
        }

        // 1. Create singleton instance with manifest
        tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json',
            // optional: uiOptions: { tweak: "rem" }
        });

        // 2. Set up listener (handles auto-connect, connect, disconnect, account change)
        tonConnectUI.onStatusChange((wallet) => {
            handleTonAccountsChanged(wallet);
        });

    } catch (err) {
        console.error("Failed to initialize TON Connect UI:", err);
    }
});

// --- Manual Actions Triggered from UI ---

// Called by onclick defined in YAML config
async function connect_ton() {
    if (!tonConnectUI) return;
    try {
        // Just open the standardized modal. tonconnect-ui handles the rest.
        await tonConnectUI.openModal();
    } catch (err) {
        console.error("Error opening TON connect modal:", err);
    }
}

// User Disconnect Action
async function disconnect_ton() {
    if (!tonConnectUI) return;
    try {
        currentTonAccount = null;
        updateUI_TON_Disconnected();
        await tonConnectUI.disconnect();
    } catch (err) {
        console.error("Error disconnecting TON:", err);
    }
}

// --- State and Account Handler ---
function handleTonAccountsChanged(wallet) {
    if (wallet && wallet.account) {
        const newAccount = wallet.account.address;
        if (newAccount !== currentTonAccount) {
            currentTonAccount = newAccount;
            updateUI_TON_Connected(currentTonAccount);
            // Re-fetch token balance whenever the account changes
            update_ton_token_balance(currentTonAccount);
        }
    } else {
        // Disconnected or no account available
        currentTonAccount = null;
        updateUI_TON_Disconnected();
    }
}

// --- UI Updates ---
function updateUI_TON_Connected(account) {
    const accountEl = document.getElementById("showAccount");
    const connectTextEl = document.getElementById("connect_status_text"); // From header HTML revision

    if (accountEl) {
        // TON addresses are long, need more abbreviation
        accountEl.innerHTML = `${account.substring(0, 4)}...${account.substring(account.length - 4)} &#128279;`;
    }

    if (connectTextEl) {
        connectTextEl.innerHTML = `TON Connected (<a href="#" onclick="disconnect_ton(); return false;" style="color: white; text-decoration: underline;">Disconnect</a>)`;
    }
}

function updateUI_TON_Disconnected(customMessage) {
    const accountEl = document.getElementById("showAccount");
    const connectTextEl = document.getElementById("connect_status_text"); // From header HTML revision
    const balanceEl = document.getElementById("fajarpurnamatokenbalance");

    if (accountEl) accountEl.innerHTML = customMessage || "Not Connected";
    if (connectTextEl) connectTextEl.innerHTML = `Connect &#128179;`;
    if (balanceEl) balanceEl.innerHTML = "0";

    // IMPORTANT: Lock service back up securely on disconnect
    if (typeof fajarpurnamatokenservice === "function") {
        fajarpurnamatokenservice(0);
    }
}

// --- TON TOKEN BALANCE LOGIC (Jetton Retrieval) ---
async function update_ton_token_balance(account) {
    const balanceEl = document.getElementById("fajarpurnamatokenbalance");
    if (!balanceEl) return;

    balanceEl.innerHTML = "Retrieving balance...";

    try {
        // TON blockchain data fetching require a public API or library.
        // We use toncenter.com's public API for simplicity in a Jekyll setup.

        // Step 1: Query for the Jetton Wallets owned by the user account
        // We need to find the specific wallet address that holds this Jetton.
        const toncenter_url = `https://toncenter.com/api/v2/getJettonWallets?address=${account}&jetton_address=${TON_TOKEN_MASTER_ADDRESS}&limit=1`;

        const response = await fetch(toncenter_url);
        if (!response.ok) throw new Error("Network response not ok");
        const data = await response.json();

        if (data.ok && data.result && data.result.length > 0) {
            // We found the user's Jetton Wallet entry for this master.
            const rawBalance = data.result[0].balance; // This is a large integer (e.g., 1000000000)

            // Step 2: Format the balance string by manually inserting the decimal point
            // This is safer than floating point math for large blockchain numbers in JS.
            let balanceStr = rawBalance.toString();

            // Padding if balance is very small
            while (balanceStr.length <= TON_TOKEN_DECIMALS) {
                balanceStr = "0" + balanceStr;
            }

            // Insert decimal point. For 9 decimals, point is at position (length - 9)
            const insertPos = balanceStr.length - TON_TOKEN_DECIMALS;
            const formattedBalance = balanceStr.substring(0, insertPos) + "." + balanceStr.substring(insertPos);

            // Step 3: Remove trailing zeros for a clean display
            const finalBalanceStr = parseFloat(formattedBalance).toString();

            // Step 4: Update UI display
            balanceEl.innerHTML = finalBalanceStr + ` <img style="height: 1em; border-radius:50%; vertical-align: middle;" src="/assets/images/icon/0fp0exp-logo-square.png"/>`;

            // Step 5: INTEGRATION INTO SERVICE UTILS
            // Unlock/Modify services based on the TON token balance
            if (typeof fajarpurnamatokenservice === "function") {
                fajarpurnamatokenservice(finalBalanceStr);
            }

        } else {
            // No wallets found usually means a 0 balance for that token
            balanceEl.innerHTML = "0";
            if (typeof fajarpurnamatokenservice === "function") {
                fajarpurnamatokenservice(0);
            }
        }

    } catch (err) {
        balanceEl.innerHTML = "Error fetching balance";
        console.error("TON Balance fetch error:", err);
    }
}

// WatchAsset implementation (TON requires different UX than EVM for this)
async function watchasset_ton() {
    alert("Watching assets automatically is not supported in standardized TON Connect UX. Please add token address 'EQB-T3IJFjbTgcV7RoEivK_3mmUD9uPkLkKRkTl4sIpRyQc3' manually to your TON wallet.");
}