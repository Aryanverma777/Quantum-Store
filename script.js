lucide.createIcons();

// Define page content for each section
const pageContent = {
    dashboard: `
        <section id="dashboard">
            <h1>Get the Assets like you Wanted</h1>
            <p>The best marketplace for buying game assets like Skins, 3d_models, maps, etc.</p>
            <button id="checkNowButton">Check Now</button>
            <img id="wraith" src="wraith.png" >
        </section>
        <section class="Store">
            <div class="section-header">
                <h2>3D Models</h2>
                <div class="nav-buttons">
                    <button><i data-lucide="chevron-left"></i></button>
                    <button><i data-lucide="chevron-right"></i></button>
                </div>
            </div>
            <div class="game-grid">
                <div class="game-card">
                    <img src="https://framerusercontent.com/images/vopmns55RUv4POuzl6paePC4YdY.png?scale-down-to=512" alt="WATCH DOGS LEGION">
                    <div class="game-info">
                        <h3>WATCH DOGS LEGION</h3>
                        <span class="price">$29.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg" alt="CYBERPUNK 2077">
                    <div class="game-info">
                        <h3>CYBERPUNK 2077</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg " alt="GHOST OF TSUSHIMA">
                    <div class="game-info">
                        <h3>GHOST OF TSUSHIMA</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://framerusercontent.com/images/vopmns55RUv4POuzl6paePC4YdY.png?scale-down-to=512" alt="WATCH DOGS LEGION">
                    <div class="game-info">
                        <h3>WATCH DOGS LEGION</h3>
                        <span class="price">$29.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg" alt="CYBERPUNK 2077">
                    <div class="game-info">
                        <h3>CYBERPUNK 2077</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLU_WMWDJUOK6uZpH6dEnUyaSOgBIkJZZ0Q&s" alt="GHOST OF TSUSHIMA">
                    <div class="game-info">
                        <h3>GHOST OF TSUSHIMA</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
            </div>
        </section>
    `,
    assetstore: `
        <div class="game-grid">
                <div class="game-card">
                    <img src="https://framerusercontent.com/images/vopmns55RUv4POuzl6paePC4YdY.png?scale-down-to=512" alt="WATCH DOGS LEGION">
                    <div class="game-info">
                        <h3>WATCH DOGS LEGION</h3>
                        <span class="price">$29.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg" alt="CYBERPUNK 2077">
                    <div class="game-info">
                        <h3>CYBERPUNK 2077</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg " alt="GHOST OF TSUSHIMA">
                    <div class="game-info">
                        <h3>GHOST OF TSUSHIMA</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://framerusercontent.com/images/vopmns55RUv4POuzl6paePC4YdY.png?scale-down-to=512" alt="WATCH DOGS LEGION">
                    <div class="game-info">
                        <h3>WATCH DOGS LEGION</h3>
                        <span class="price">$29.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150727934.jpg" alt="CYBERPUNK 2077">
                    <div class="game-info">
                        <h3>CYBERPUNK 2077</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
                <div class="game-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLU_WMWDJUOK6uZpH6dEnUyaSOgBIkJZZ0Q&s" alt="GHOST OF TSUSHIMA">
                    <div class="game-info">
                        <h3>GHOST OF TSUSHIMA</h3>
                        <span class="price">$59.99</span>
                    </div>
                </div>
            </div>
        </section>
    `,
    myassets: `...`,
    favorites: `...`,
    wallet: `
        <div id="wallet" class="wallet-content">
            <h1 class="wallet-title">Wallet Connection</h1>
            <div id="statusMessage" class="wallet-status"></div>
      
            <button id="connectButton" class="wallet-connect-button" onclick="connect()">Connect MetaMask</button>
         
            <div id="accountInfo" class="wallet-account-info">
                <h2 class="wallet-info-title">Account Information</h2>
                <p class="wallet-info-item">Address: <span id="accountAddress" class="wallet-info-value"></span></p>
                <p class="wallet-info-item">Balance: <span id="accountBalance" class="wallet-info-value"></span></p>
            </div>
        </div>
    `,
    about: `
        <div id="about" class="nav-content">
        <h2 class="about-title">About Session: Decentralized Marketplace for Game Assets</h2>
        
        <div class="about-section">
            <h3 class="section-title">Objective</h3>
            <p class="section-description">By the end of this session, you will:</p>
            <ul class="objective-list">
            <li>Understand the concept of decentralization and NFTs.</li>
            <li>Build a functional decentralized marketplace where:
                <ul>
                <li>Game assets are minted and traded as NFTs.</li>
                <li>Payments are handled securely using cryptocurrency.</li>
                <li>User and metadata are stored in a database.</li>
                </ul>
            </li>
            <li>Deploy the marketplace on the web for public access.</li>
            </ul>
        </div>

        <div class="about-section">
            <h3 class="section-title">Project Overview</h3>
            <p class="section-description">The decentralized marketplace will include:</p>
            <ul class="overview-list">
            <li>Smart Contracts: Manage game assets (NFTs) and transactions.</li>
            <li>Backend: APIs for user data, game asset metadata, and blockchain interaction.</li>
            <li>Frontend: A user-friendly interface for listing, buying, and selling assets.</li>
            <li>Wallet Integration: Users connect wallets (e.g., MetaMask) to interact with the blockchain.</li>
            </ul>
        </div>

        <div class="about-section">
            <h3 class="section-title">Technologies and Tools</h3>
            <ul class="tech-list">
            <li>
                <h4>Frontend:</h4>
                <ul>
                <li>React.js (for a dynamic and responsive UI)</li>
                <li>HTML, CSS, JavaScript (as alternatives)</li>
                </ul>
            </li>
            <li>
                <h4>Backend:</h4>
                <ul>
                <li>Python (Flask/Django) or Node.js (Express.js)</li>
                <li>Web3.js or Ethers.js (for blockchain interaction)</li>
                </ul>
            </li>
            <li>
                <h4>Blockchain:</h4>
                <ul>
                <li>Ethereum or Polygon (testnets: Goerli or Mumbai)</li>
                <li>Solidity (for writing smart contracts)</li>
                </ul>
            </li>
            <li>
                <h4>Database:</h4>
                <ul>
                <li>MySQL (to store user profiles and non-blockchain data)</li>
                </ul>
            </li>
            <li>
                <h4>Other Tools:</h4>
                <ul>
                <li>Hardhat or Truffle (for developing and deploying smart contracts)</li>
                <li>MetaMask (wallet integration)</li>
                <li>Hosting: Vercel, AWS, or Heroku</li>
                </ul>
            </li>
            </ul>
        </div>

        <div class="about-section">
            <h3 class="section-title">Key Features</h3>
            <ul class="features-list">
            <li>
                <h4>Minting Game Assets:</h4>
                <ul>
                <li>Smart contracts allow users to create NFTs for game assets</li>
                <li>Metadata (name, description, image) stored in MySQL</li>
                </ul>
            </li>
            <li>
                <h4>Listing and Trading:</h4>
                <ul>
                <li>Users can list assets for sale</li>
                <li>Other users can purchase assets using cryptocurrency</li>
                </ul>
            </li>
            <li>
                <h4>Wallet Integration:</h4>
                <ul>
                <li>MetaMask integration for login and transactions</li>
                <li>Payments handled through the blockchain</li>
                </ul>
            </li>
            <li>
                <h4>Search and Filter:</h4>
                <ul>
                <li>Browse assets based on category, price, or popularity</li>
                </ul>
            </li>
            <li>
                <h4>Secure Transactions:</h4>
                <ul>
                <li>Blockchain ensures transparency and security</li>
                </ul>
            </li>
            </ul>
        </div>

        <div class="about-section">
            <h3 class="section-title">Session Flow</h3>
            <ol class="flow-list">
            <li>
                <h4>Understanding Decentralization and NFTs</h4>
                <ul>
                <li>What are decentralized platforms?</li>
                <li>How NFTs (Non-Fungible Tokens) work for game assets</li>
                </ul>
            </li>
            <li>
                <h4>Writing the Smart Contract</h4>
                <ul>
                <li>Use Solidity to write an ERC-721 contract for NFTs</li>
                <li>Deploy it on a testnet (Goerli or Mumbai)</li>
                </ul>
            </li>
            <li>
                <h4>Backend Development</h4>
                <ul>
                <li>Set up Flask/Django or Node.js for the backend</li>
                <li>Create APIs for user authentication, asset metadata, and blockchain interaction</li>
                </ul>
            </li>
            <li>
                <h4>Frontend Development</h4>
                <ul>
                <li>Build a clean UI with React.js</li>
                <li>Integrate wallet functionality using MetaMask</li>
                <li>Enable users to list, buy, and sell assets</li>
                </ul>
            </li>
            <li>
                <h4>Testing and Deployment</h4>
                <ul>
                <li>Test the platform (smart contract, APIs, frontend)</li>
                <li>Deploy the smart contract and host the platform online</li>
                </ul>
            </li>
            </ol>
        </div>

        <div class="about-section">
            <h3 class="section-title">Learning Outcomes</h3>
            <p class="section-description">By the end of this session, you'll:</p>
            <ul class="outcomes-list">
            <li>Understand how decentralized applications (dApps) work</li>
            <li>Write and deploy a smart contract for NFTs</li>
            <li>Build a complete blockchain-powered marketplace</li>
            <li>Deploy your project to a testnet and host it online</li>
            </ul>
        </div>

        
    `,
    settings: `
        <div id="settings">
            <div class="settings-header">
                <h1 class="settings-title">Settings</h1>
                <p class="settings-subtitle">Manage your account and preferences</p>
            </div>

            <div class="settings-section">
                <h2 class="settings-section-title">Profile Settings</h2>
                <div class="settings-profile">
                    <div class="settings-avatar">
                        <img src="logo.webp" alt="Profile Avatar" class="settings-avatar-img">
                        <button class="settings-avatar-change">Change Avatar</button>
                    </div>
                    <div class="settings-profile-info">
                        <div class="settings-input-group">
                            <label for="username" class="settings-label">Username : Jason Holder</label>
                            
                        </div>
                        <div class="settings-input-group">
                            <label for="email" class="settings-label">Email : jason.holder@gamestore.com</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h2 class="settings-section-title">Preferences</h2>
                <div class="settings-preferences">
                    <div class="settings-toggle-group">
                        <label class="settings-label">Dark Mode</label>
                        <label class="settings-switch">
                            <input type="checkbox" checked>
                            <span class="settings-slider"></span>
                        </label>
                    </div>
                    <div class="settings-toggle-group">
                        <label class="settings-label">Notifications</label>
                        <label class="settings-switch">
                            <input type="checkbox" checked>
                            <span class="settings-slider"></span>
                        </label>
                    </div>
                    <div class="settings-toggle-group">
                        <label class="settings-label">Game Activity</label>
                        <label class="settings-switch">
                            <input type="checkbox">
                            <span class="settings-slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h2 class="settings-section-title">Privacy</h2>
                <div class="settings-privacy">
                    <div class="settings-select-group">
                        <label for="profile-visibility" class="settings-label">Profile Visibility</label>
                        <select id="profile-visibility" class="settings-select">
                            <option value="public">Public</option>
                            <option value="friends">Friends Only</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div class="settings-select-group">
                        <label for="friend-requests" class="settings-label">Friend Requests</label>
                        <select id="friend-requests" class="settings-select">
                            <option value="everyone">Everyone</option>
                            <option value="friends-of-friends">Friends of Friends</option>
                            <option value="none">No One</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="settings-actions">
                <button class="save">Save Changes</button>
                <button class="settings-button settings-button-cancel">Cancel</button>
            </div>
        </div>
    `
};

// Function to load asset store content
function loadAssetStore() {
    const content = pageContent['assetstore'];
    if (content) {
        document.getElementById('content').innerHTML = content;
        // Update sidebar active state
        document.querySelectorAll('.sidebar li').forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('data-url') === 'assetstore') {
                li.classList.add('active');
            }
        });
    } else {
        console.error("Asset store page does not exist.");
    }
}

// Add event listener to the "Check Now" button
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'checkNowButton') {
        loadAssetStore();
    }
});

// Handle sidebar navigation
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', function () {
        const page = this.getAttribute('data-url');
        const content = pageContent[page];

        if (content) {
            // Load the content dynamically into the main section
            document.getElementById('content').innerHTML = content;
        } else {
            console.error(`Page "${page}" does not exist.`);
        }

        // Remove active class from all items and add it to the clicked item
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Set the default page to dashboard
    const defaultPage = 'dashboard';
    const content = pageContent[defaultPage];
    document.getElementById('content').innerHTML = content;

    // Set the default active class for the sidebar item
    document.querySelectorAll('.sidebar li').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-url') === defaultPage) {
            item.classList.add('active');
        }
    });

    // MetaMask connection logic
    const connectButton = document.getElementById('connect-button');
    const metamaskMessage = document.getElementById('metamask-message');
    
    // Check if MetaMask is available
    if (typeof window.ethereum !== 'undefined') {
        connectButton.addEventListener('click', async () => {
            try {
                // Request accounts from MetaMask
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                
                // Display the connected account
                const account = accounts[0];
                metamaskMessage.textContent = `Connected: ${account}`;
            } catch (error) {
                metamaskMessage.textContent = 'Connection failed. Please try again.';
            }
        });
    } else {
        metamaskMessage.textContent = 'MetaMask is not installed.';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.querySelector('.wallet-connect-button');
    const statusMessage = document.querySelector('.wallet-status');
    const accountInfo = document.querySelector('.wallet-account-info');
    const accountAddress = document.getElementById('accountAddress');
    const accountBalance = document.getElementById('accountBalance');

    async function connectWallet() {
        if (typeof window.ethereum === 'undefined') {
            // MetaMask is not installed
            statusMessage.textContent = 'MetaMask is not installed. Please install it!';
            statusMessage.style.color = '#FF6B6B';
            return;
        }

        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                const address = accounts[0];
                statusMessage.textContent = 'Connected to MetaMask!';
                statusMessage.style.color = '#4CAF50';
                connectButton.textContent = 'Connected';
                connectButton.disabled = true;

                // Fetch account details
                accountAddress.textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [address, 'latest']
                });
                const etherBalance = parseInt(balance, 16) / 1e18;
                accountBalance.textContent = `${etherBalance.toFixed(4)} ETH`;
                accountInfo.style.display = 'block';
            }
        } catch (error) {
            console.error('Error connecting:', error);
            statusMessage.textContent = 'Failed to connect. Please try again.';
            statusMessage.style.color = '#FF6B6B';
        }
    }

    connectButton.addEventListener('click', connectWallet);

    // Listen for account changes
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', () => {
            window.location.reload(); // Reload the page when account changes
        });
    }
});



function connect() {
    ethereum
        .request({
            method: 'eth_requestAccounts'
        })
        .then(handleAccountsChanged)
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please connect to MetaMask.');
            } else {
                console.error(error);
            }
        });
}

async function switchNetwork() {
    try {

        // Prompt user to switch to Polygon

        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: '0x89'
            }],
        });

    } catch (switchError) {

        // This error code indicates that the chain has not been added to MetaMask.

        if (switchError.code === 4902) {
            try {

                // Prompt user to add Polygon to MetaMask if not already configured

                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x89',
                        chainName: 'Polygon mainnet',
                        rpcUrls: ['https://polygon-rpc.com/'] /* ... */ ,
                    }, ],
                });
            } catch (addError) {
                // handle "add" error
            }
        }
        // handle other "switch" errors
    }
}






// detect provider using @metamask/detect-provider
detectEthereumProvider().then((provider) => {
  if (provider && provider.isMetaMask) {
    provider.on('accountsChanged', handleAccountsChanged);
    // connect btn is initially disabled
    $('#connect-btn').addEventListener('click', connect);
    checkConnection();
  } else {
    console.log('Please install MetaMask!');
  }
});

function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
}

function checkConnection() {
  ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
}

function handleAccountsChanged(accounts) {
  console.log(accounts);

  if (accounts.length === 0) {
    $('#connection-status').innerText = "You're not connected to MetaMask";
    $('#connect-btn').disabled = false;
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    $('#connection-status').innerText = `Address: ${currentAccount}`;
    $('#connect-btn').disabled = true;
  }
}




window.onload = (event) => {
    isConnected();
};
        
async function isConnected() {
    const accounts = await ethereum.request({method: 'eth_accounts'});       
    if (accounts.length) {
        console.log(`You're connected to: ${accounts[0]}`);
        console.log('you are connected');
    } 
    else {
        console.log("Metamask is not connected");
    }
}





// status check 


document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectButton');
    const statusText = document.getElementById('status');
    const walletAddressText = document.getElementById('wallet-address');

    async function connectMetaMask() {
        if (typeof window.ethereum === 'undefined') {
            alert('MetaMask is not installed. Please install it to proceed.');
            return;
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];
            statusText.textContent = 'Connected';
            walletAddressText.textContent = walletAddress;
        } catch (error) {
            if (error.code === 4001) {
                console.log('User rejected the connection request.');
            } else {
                console.error('Error connecting MetaMask:', error);
            }
        }
    }

    async function checkConnection() {
        if (typeof window.ethereum === 'undefined') {
            statusText.textContent = 'MetaMask is not installed.';
            walletAddressText.textContent = 'Not connected';
            return;
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                const walletAddress = accounts[0];
                statusText.textContent = 'Connected';
                walletAddressText.textContent = walletAddress;
            } else {
                statusText.textContent = 'Disconnected';
                walletAddressText.textContent = 'Not connected';
            }
        } catch (error) {
            console.error('Error checking connection:', error);
        }
    }

    connectButton.addEventListener('click', connectMetaMask);
    checkConnection();

    ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            walletAddressText.textContent = accounts[0];
        } else {
            walletAddressText.textContent = 'Not connected';
        }
    });
});

