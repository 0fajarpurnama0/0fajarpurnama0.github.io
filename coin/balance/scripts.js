const connectButton = document.getElementById('connectButton');
const walletAddressDiv = document.getElementById('walletAddress');
const tokenAddressInput = document.getElementById('tokenAddress');
const getBalanceButton = document.getElementById('getBalanceButton');
const balanceDiv = document.getElementById('balance');
const errorDiv = document.getElementById('error');

let provider;
let signer;

connectButton.addEventListener('click', async () => {
    errorDiv.innerText = '';
    balanceDiv.innerText = '';
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            const address = await signer.getAddress();
            walletAddressDiv.innerText = `Connected Wallet: ${address.substring(0, 6)}...${address.slice(-4)}`;
            getBalanceButton.disabled = false;
        } catch (err) {
            console.error("User rejected account access or other error", err);
            errorDiv.innerText = 'Failed to connect wallet.';
            getBalanceButton.disabled = true;
        }
    } else {
        errorDiv.innerText = 'MetaMask or another Web3 wallet is not installed.';
        getBalanceButton.disabled = true;
    }
});

getBalanceButton.addEventListener('click', async () => {
    errorDiv.innerText = '';
    balanceDiv.innerText = '';
    const tokenAddress = tokenAddressInput.value.trim();

    if (!ethers.utils.isAddress(tokenAddress)) {
        errorDiv.innerText = 'Please enter a valid token contract address.';
        return;
    }

    if (!provider) {
        errorDiv.innerText = 'Please connect your wallet first.';
        return;
    }

    // Standard ERC-20 ABI for the balanceOf function
    const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)"
    ];

    const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

    try {
        const userAddress = await signer.getAddress();
        const balanceBigNumber = await tokenContract.balanceOf(userAddress);
        const decimals = await tokenContract.decimals();
        const balance = ethers.utils.formatUnits(balanceBigNumber, decimals);
        balanceDiv.innerText = `Token Balance: ${balance}`;
    } catch (err) {
        console.error("Error getting token balance", err);
        errorDiv.innerText = 'Failed to retrieve token balance. Ensure the contract address is correct and the network is supported.';
    }
});