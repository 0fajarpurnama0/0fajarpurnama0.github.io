import { getTokenBalance } from '../../../balance/getTokenBalance.js';
let fpexpbalance;
let discount;

const connectButton = document.getElementById('connectButton');
const statusDiv = document.getElementById('status');
const networkInfoDiv = document.createElement('div');
networkInfoDiv.style.marginTop = '10px';
document.querySelector('.container').appendChild(networkInfoDiv);

const tokenNameInput = document.getElementById('tokenName');
const tokenSymbolInput = document.getElementById('tokenSymbol');
const initialSupplyInput = document.getElementById('initialSupply');
const recipientAddressInput = document.getElementById('recipientAddress');
const feePercentageRadio = document.getElementById('feePercentage');
const feeFixedRadio = document.getElementById('feeFixed');
const percentageValueSpan = document.getElementById('percentageValue');
const fixedValueSpan = document.getElementById('fixedValue');
const youReceiveDiv = document.getElementById('youReceiveValue');
const iReceiveDiv = document.getElementById('iReceiveValue');
const fpexpbalanceSpan = document.getElementById('0FP0EXP_balance');
const discountDiv = document.getElementById('discount');

// Your pre-determined admin address and fee percentage
const ADMIN_ADDRESS = "0x5f3a3d70f12Cd121aB6C0EEBe71fC9f4E3465a74";
let ADMIN_FEE_PERCENTAGE = 10;
let FIXED_ADMIN_FEE_ETH = 0.01;
let FIXED_ADMIN_FEE_WEI = ethers.utils.parseEther(FIXED_ADMIN_FEE_ETH.toString());
const DECIMALS = 18; // Assuming 18 decimals for the token

percentageValueSpan.innerText = ADMIN_FEE_PERCENTAGE;
fixedValueSpan.innerText = FIXED_ADMIN_FEE_ETH;

let isConnected = false;
let signerAddress = null;
let provider = null;

function updateCalculatedValues() {
    const initialSupplyStr = initialSupplyInput.value;
    if (!initialSupplyStr) {
        youReceiveDiv.innerText = "";
        iReceiveDiv.innerText = "";
        return;
    }

    const initialSupply = ethers.BigNumber.from(initialSupplyStr);
    const multiplier = ethers.BigNumber.from("10").pow(18); // To handle decimals in calculation

    if (feePercentageRadio.checked) {
        // Calculate admin share in the smallest unit (Wei)
        const adminShareWei = initialSupply.mul(ADMIN_FEE_PERCENTAGE).mul(multiplier).div(100);
        const youReceiveWei = initialSupply.mul(multiplier).sub(adminShareWei);

        youReceiveDiv.innerText = `You Receive: ${ethers.utils.formatUnits(youReceiveWei, 18)} tokens`;
        iReceiveDiv.innerText = `Admin Receives: ${ADMIN_FEE_PERCENTAGE}% (${ethers.utils.formatUnits(adminShareWei, 18)} tokens)`;
    } else if (feeFixedRadio.checked) {
        youReceiveDiv.innerText = `You Receive: ${ethers.utils.formatUnits(initialSupply.mul(multiplier), 18)} tokens`;
        iReceiveDiv.innerText = `Admin Receives: ${FIXED_ADMIN_FEE_ETH} Native Asset`;
    }
}

// Event listener for initial supply input change
initialSupplyInput.addEventListener('input', updateCalculatedValues);

// Event listeners for fee type radio button changes
feePercentageRadio.addEventListener('change', updateCalculatedValues);
feeFixedRadio.addEventListener('change', updateCalculatedValues);

async function updateNetworkInfo() {
    if (provider) {
        try {
            const network = await provider.getNetwork();
            networkInfoDiv.innerText = `Connected to network ${network.name} with chain id ${network.chainId}`;
        } catch (error) {
            console.error("Error getting network info:", error);
            networkInfoDiv.innerText = "Could not fetch network info.";
        }
    } else {
        networkInfoDiv.innerText = "Not connected to a network.";
    }
}

async function connectWallet() {
    statusDiv.innerText = "Connecting to wallet...";

    if (typeof window.ethereum === 'undefined') {
        statusDiv.innerText = "Please install MetaMask or another Web3 provider!";
        return;
    }

    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        signerAddress = await signer.getAddress();
        recipientAddressInput.value = signerAddress;
        connectButton.innerText = "Deploy Token";
        connectButton.onclick = deployToken;
        isConnected = true;

        // Fetch and display balance
        const balanceWei = await provider.getBalance(signerAddress);
        const balanceEth = ethers.utils.formatEther(balanceWei);
        statusDiv.innerText = `Connected with address: ${signerAddress} (Balance: ${Number(balanceEth).toFixed(3)} Native Asset)`;
        
        fpexpbalance = await getTokenBalance("0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207", provider, signerAddress);
        fpexpbalanceSpan.innerText = fpexpbalance;
        if (fpexpbalance > 1000000) {
            discount = 1;
            discountDiv.innerText = `Discount: ${discount * 100}%`;
            ADMIN_FEE_PERCENTAGE = 0;
            FIXED_ADMIN_FEE_ETH = 0;
            FIXED_ADMIN_FEE_WEI = ethers.utils.parseEther(FIXED_ADMIN_FEE_ETH.toString());
            percentageValueSpan.innerText = ADMIN_FEE_PERCENTAGE;
            fixedValueSpan.innerText = FIXED_ADMIN_FEE_ETH;
            updateCalculatedValues();
        } else {
            discount = fpexpbalance / 1000000;
            discountDiv.innerText = `Discount: ${discount * 100}%`;
            ADMIN_FEE_PERCENTAGE = ADMIN_FEE_PERCENTAGE * (1 - discount);
            FIXED_ADMIN_FEE_ETH = FIXED_ADMIN_FEE_ETH * (1 - discount);
            FIXED_ADMIN_FEE_WEI = ethers.utils.parseEther(FIXED_ADMIN_FEE_ETH.toString());
            percentageValueSpan.innerText = ADMIN_FEE_PERCENTAGE;
            fixedValueSpan.innerText = FIXED_ADMIN_FEE_ETH;
            updateCalculatedValues();
        }

        await updateNetworkInfo();
        updateCalculatedValues(); // Initial calculation after connecting
    } catch (error) {
        console.error("Connection error:", error);
        statusDiv.innerText = `Failed to connect: ${error.message}`;
        networkInfoDiv.innerText = "Not connected to a network.";
    }
}

async function deployToken() {
    if (!isConnected) {
        statusDiv.innerText = "Please connect your wallet first.";
        return;
    }

    const feeType = document.querySelector('input[name="adminFeeType"]:checked').value;
    const tokenName = tokenNameInput.value;
    const tokenSymbol = tokenSymbolInput.value;
    const initialSupply = initialSupplyInput.value; // Use the raw input value
    const recipient = recipientAddressInput.value;
    const adminAddress = ADMIN_ADDRESS;
    const adminFeePercentage = feeType === 'percentage' ? ADMIN_FEE_PERCENTAGE : 0;
    const fixedEthFeeWei = feeType === 'fixed' ? FIXED_ADMIN_FEE_WEI : ethers.BigNumber.from(0);

    statusDiv.innerText = `Deploying ${tokenName} (${tokenSymbol})...`;

    try {
        const signer = provider.getSigner();
        const factory = new ethers.ContractFactory(erc20Abi, erc20Bytecode, signer);
        const overrides = feeType === 'fixed' ? { value: fixedEthFeeWei } : {};
        const contract = await factory.deploy(
            tokenName,
            tokenSymbol,
            initialSupply, // Pass the raw number
            recipient,
            adminAddress,
            adminFeePercentage,
            fixedEthFeeWei,
            overrides
        );

        statusDiv.innerText = `Deployment pending... Transaction Hash: ${contract.deployTransaction.hash}`;
        await contract.deployed();
        statusDiv.innerHTML += `<br>Token deployed at address: <code>${contract.address}</code>`;
        statusDiv.innerHTML += `<br>Go to any chain explorer to view the transaction by inserting the token deployed contract address, transaction hash, or your connected wallet's address.`;

        if (feeType === 'fixed') {
            statusDiv.innerHTML += `<br>Fixed fee of <strong>${FIXED_ADMIN_FEE_ETH} ETH</strong> was sent with the deployment.`;
        }

    } catch (error) {
        console.error("Deployment error:", error);
        statusDiv.innerText = `Deployment failed: ${error.message}`;
    }
}

connectButton.addEventListener('click', connectWallet);

// Update calculated values on initial load if supply is pre-filled
updateCalculatedValues();

// Update network info on chain change and account change
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('chainChanged', async (chainId) => {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await updateNetworkInfo();
    });

    window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0 && isConnected) {
            signerAddress = accounts[0];
            recipientAddressInput.value = signerAddress;
            const newProvider = new ethers.providers.Web3Provider(window.ethereum);
            const balanceWei = await newProvider.getBalance(signerAddress);
            const balanceEth = ethers.utils.formatEther(balanceWei);
            statusDiv.innerText = `Account changed to: ${signerAddress} (Balance: ${Number(balanceEth).toFixed(3)} ETH)`;
            fpexpbalance = await getTokenBalance("0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207", provider, signerAddress);
            fpexpbalanceSpan.innerText = fpexpbalance;
            if (fpexpbalance > 1000000) {
                discount = 1;
                discountDiv.innerText = `Discount: ${discount * 100}%`;
                ADMIN_FEE_PERCENTAGE = 0;
                FIXED_ADMIN_FEE_ETH = 0;
                FIXED_ADMIN_FEE_WEI = ethers.utils.parseEther(FIXED_ADMIN_FEE_ETH.toString());
                percentageValueSpan.innerText = ADMIN_FEE_PERCENTAGE;
                fixedValueSpan.innerText = FIXED_ADMIN_FEE_ETH;
                updateCalculatedValues();
            } else {
                discount = fpexpbalance / 1000000;
                discountDiv.innerText = `Discount: ${discount * 100}%`;
                ADMIN_FEE_PERCENTAGE = ADMIN_FEE_PERCENTAGE * (1 - discount);
                FIXED_ADMIN_FEE_ETH = FIXED_ADMIN_FEE_ETH * (1 - discount);
                FIXED_ADMIN_FEE_WEI = ethers.utils.parseEther(FIXED_ADMIN_FEE_ETH.toString());
                percentageValueSpan.innerText = ADMIN_FEE_PERCENTAGE;
                fixedValueSpan.innerText = FIXED_ADMIN_FEE_ETH;
                updateCalculatedValues();
            }
        } else {
            isConnected = false;
            connectButton.innerText = "Connect Wallet";
            connectButton.onclick = connectWallet;
            recipientAddressInput.value = "Connect wallet first";
            recipientAddressInput.readOnly = true;
            statusDiv.innerText = "Wallet disconnected.";
            networkInfoDiv.innerText = "Not connected to a network.";
            provider = null;
            signerAddress = null;
        }
        updateNetworkInfo();
    });

    updateNetworkInfo();
} else {
    networkInfoDiv.innerText = "No Web3 provider detected.";
}