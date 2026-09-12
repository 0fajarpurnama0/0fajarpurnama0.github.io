// Global State
let currentAccount = null;
const TOKEN_ADDRESS = "0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207";

// Safely obtain provider without breaking non-Web3 browsers
function getEthereumProvider() {
  if (typeof window.ethereum !== 'undefined') {
    return window.ethereum;
  }
  return null;
}

// 1. Silent Auto-Connect on Page Load
window.addEventListener('load', async () => {
  const ethereum = getEthereumProvider();
  if (!ethereum) {
    updateUIDisconnected("No EVM wallet detected.");
    return;
  }

  setupEventListeners(ethereum);

  try {
    // eth_accounts checks existing permissions SILENTLY (No Popup)
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      handleAccountsChanged(accounts);
    } else {
      updateUIDisconnected();
    }
  } catch (err) {
    console.error("Auto-connect check failed:", err);
  }
});

// 2. Explicit User Connect (Triggered by button click)
async function connect_evm() {
  const ethereum = getEthereumProvider();
  
  if (!ethereum) {
    document.getElementById("showAccount").innerHTML = 
      `Please install a Web3 wallet such as <a href="https://link.metamask.io/rewards?referral=NRMKCP" target="_blank">MetaMask</a>, <a href="https://trustwallet.com/" target="_blank">Trust Wallet</a>, or use the <a href="https://brave.com/faj135" target="_blank">Brave Browser</a>.`;
    return;
  }

  try {
    // eth_requestAccounts prompts the wallet popup
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    handleAccountsChanged(accounts);
  } catch (err) {
    document.getElementById("fajarpurnamatokenbalance").innerHTML = err.message;
    console.error("EVM Connection Error:", err);
  }
}

// 3. User Disconnect (Clears UI and revokes permissions where supported)
async function disconnect_evm() {
  const ethereum = getEthereumProvider();
  
  // Reset local state
  currentAccount = null;
  updateUIDisconnected();

  // Attempt to revoke permissions on supporting wallets (MetaMask EIP-2255)
  if (ethereum && ethereum.request) {
    try {
      await ethereum.request({
        method: 'wallet_revokePermissions',
        params: [{ eth_accounts: {} }]
      });
    } catch (err) {
      console.log("Wallet does not support manual permission revocation. UI state reset successfully.");
    }
  }
}

// Event Listeners for Account & Network changes
function setupEventListeners(ethereum) {
  // Listen for account switches or locks
  ethereum.on('accountsChanged', (accounts) => {
    handleAccountsChanged(accounts);
  });

  // Reload page when switching networks (MetaMask recommended practice)
  ethereum.on('chainChanged', () => {
    window.location.reload();
  });
}

// Account State Handler
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    currentAccount = null;
    updateUIDisconnected();
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    updateUIConnected(currentAccount);
    update_fajarpurnamatokenbalance(currentAccount);
  }
}

// UI State Updates
function updateUIConnected(account) {
  const accountEl = document.getElementById("showAccount");
  const connectEl = document.getElementById("connect");
  
  if (accountEl) accountEl.innerHTML = `${account.substring(0, 6)}...${account.substring(account.length - 4)} &#128279;`;
  if (connectEl) connectEl.innerHTML = `Connected (<a href="#" onclick="disconnect_evm(); return false;">Disconnect</a>)`;
}

function updateUIDisconnected(customMessage) {
  const accountEl = document.getElementById("showAccount");
  const connectEl = document.getElementById("connect");
  const balanceEl = document.getElementById("fajarpurnamatokenbalance");
  
  if (accountEl) accountEl.innerHTML = customMessage || "Not Connected";
  if (connectEl) connectEl.innerHTML = `<button onclick="connect_evm()">Connect Wallet</button>`;
  if (balanceEl) balanceEl.innerHTML = "0";
}

// Token Balance Fetcher using Ethers.js
async function update_fajarpurnamatokenbalance(account) {
  const balanceEl = document.getElementById("fajarpurnamatokenbalance");
  if (balanceEl) balanceEl.innerHTML = "Retrieving balance...";

  try {
    const ethereum = getEthereumProvider();
    // Supports Ethers.js v5 (Web3Provider) and v6 (BrowserProvider)
    const provider = window.ethers.providers 
      ? new ethers.providers.Web3Provider(ethereum) 
      : new ethers.BrowserProvider(ethereum);

    const minAbi = [
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)"
    ];

    const contract = new ethers.Contract(TOKEN_ADDRESS, minAbi, provider);
    const balance = await contract.balanceOf(account);
    const decimals = await contract.decimals();
    
    // Format big numbers to human-readable decimals
    const formattedBalance = ethers.utils 
      ? ethers.utils.formatUnits(balance, decimals) 
      : ethers.formatUnits(balance, decimals);

    if (balanceEl) balanceEl.innerHTML = formattedBalance;
  } catch (err) {
    if (balanceEl) balanceEl.innerHTML = "Error fetching balance";
    console.error("Balance fetch error:", err);
  }
}

// Add Token to Wallet Watchlist
async function watchasset_evm() {
  const ethereum = getEthereumProvider();
  if (!ethereum) return;

  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: TOKEN_ADDRESS,
          symbol: '0FP0EXP',
          decimals: 18,
          image: 'https://fajarpurnama.com/assets/images/logo.png', // URL preferred over large Base64 strings
        },
      },
    });
  } catch (error) {
    console.error("WatchAsset failed:", error);
  }
}