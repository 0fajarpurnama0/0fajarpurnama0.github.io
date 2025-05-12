let fpexpbalance = 0;
let discount = 0;

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            return { provider, signer, address };
        } catch (error) {
            console.error("Wallet connection error:", error);
            return null;
        }
    } else {
        console.error("Web3 wallet not found.");
        return null;
    }
}

async function getTokenBalance(tokenAddress, provider, userAddress) {
    if (!ethers.utils.isAddress(tokenAddress)) {
        console.error("Invalid token address:", tokenAddress);
        return null;
    }
    if (!provider) {
        console.error("Provider not initialized.");
        return null;
    }
    if (!userAddress) {
        console.error("User address not provided.");
        return null;
    }

    const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)"
    ];

    try {
        const tokenContract = new ethers.Contract(tokenAddress, abi, provider);
        const balanceBigNumber = await tokenContract.balanceOf(userAddress);
        const decimals = await tokenContract.decimals();
        const balance = ethers.utils.formatUnits(balanceBigNumber, decimals);
        return balance;
    } catch (error) {
        console.error("Error fetching token balance:", error);
        return null;
    }
}

export { connectWallet, getTokenBalance};