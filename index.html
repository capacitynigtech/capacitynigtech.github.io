<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Place Bet | Capacity Nigtech</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        
        :root { --sporty-orange: #FF6B00; --sporty-dark: #121212; --sporty-grey: #1E1E1E; }
        
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0; padding: 0;
            display: flex; justify-content: center;
        }

        .app-container {
            width: 100%; max-width: 450px;
            background-color: #f4f4f4;
            min-height: 100vh;
            position: relative;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        .sporty-header {
            background-color: var(--sporty-dark);
            padding: 12px 16px;
            display: flex; justify-content: space-between; align-items: center;
            position: sticky; top: 0; z-index: 100;
        }

        .balance-box {
            background: #252525;
            padding: 4px 12px;
            border-radius: 20px;
            display: flex; align-items: center; gap: 8px;
        }

        .category-scroll {
            display: flex; overflow-x: auto; white-space: nowrap;
            padding: 10px 0; background: white; gap: 20px;
            scrollbar-width: none; border-bottom: 1px solid #eee;
        }
        .category-item {
            display: flex; flex-direction: column; align-items: center;
            min-width: 60px; font-size: 11px; font-weight: 700; color: #666;
            cursor: pointer;
        }
        .category-item.active { color: var(--sporty-orange); }
        .category-item i { font-size: 18px; margin-bottom: 4px; }

        .match-card {
            background: white; margin: 8px 0; padding: 12px;
            border-bottom: 1px solid #eee;
        }
        .match-header { display: flex; justify-content: space-between; font-size: 10px; color: #888; margin-bottom: 8px; font-weight: 700; }
        .team-row { display: flex; justify-content: space-between; font-weight: 900; font-size: 14px; margin-bottom: 6px; align-items: center; }
        .team-info { display: flex; align-items: center; gap: 8px; }
        .team-logo { width: 18px; height: 18px; object-fit: contain; }
        
        .odds-grid { display: flex; gap: 6px; margin-top: 10px; }
        .odd-btn {
            flex: 1; background: #f8f8f8; border: 1px solid #e5e5e5;
            padding: 8px; border-radius: 4px; text-align: center;
            transition: all 0.1s; cursor: pointer;
        }
        .odd-btn.selected {
            background: var(--sporty-orange) !important;
            border-color: var(--sporty-orange) !important;
            color: white !important;
        }
        .odd-label { font-size: 10px; color: #888; display: block; }
        .odd-value { font-weight: 900; font-size: 13px; }

        .sporty-nav {
            position: fixed; bottom: 0; width: 100%; max-width: 450px;
            background: white; height: 60px; display: flex; justify-content: space-around;
            align-items: center; border-top: 1px solid #eee; z-index: 1000;
        }
        .nav-item { display: flex; flex-direction: column; align-items: center; font-size: 10px; font-weight: 700; color: #666; cursor: pointer; }
        .nav-item.active { color: var(--sporty-orange); }
        
        .floating-slip {
            background: var(--sporty-orange); width: 56px; height: 56px;
            border-radius: 50%; border: 4px solid white; margin-top: -35px;
            display: flex; justify-content: center; align-items: center;
            color: white; box-shadow: 0 4px 10px rgba(0,0,0,0.2); position: relative;
        }
        .slip-badge {
            position: absolute; top: 0; right: 0; background: #333;
            color: white; font-size: 10px; padding: 2px 6px; border-radius: 10px;
        }

        .slip-drawer {
            position: fixed; bottom: 0; width: 100%; max-width: 450px;
            background: white; border-top-left-radius: 15px; border-top-right-radius: 15px;
            transform: translateY(100%); transition: transform 0.3s ease; z-index: 2000;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
        }
        .slip-drawer.open { transform: translateY(0); }

        .auth-overlay {
            position: absolute; inset: 0; background: white; z-index: 5000;
            display: flex; flex-direction: column; padding: 40px 20px; overflow-y: auto;
        }
        
        .view-section { display: none; }
        .view-section.active { display: block; }

        input:focus { outline: none; border-color: var(--sporty-orange); }

        .modal-view {
            position: absolute; inset: 0; background: #f4f4f4; z-index: 1100;
            display: none; flex-direction: column;
        }
        .modal-view.active { display: flex; }

        .live-tag {
            background: #e1f5fe; color: #03a9f4; padding: 2px 4px; border-radius: 2px; font-size: 9px; font-weight: 900;
        }
    </style>
</head>
<body>
    <div class="app-container">

        <!-- AUTH SCREEN -->
        <div id="auth-screen" class="auth-overlay">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-black italic text-orange-600 tracking-tighter">PLACE BET</h1>
                <p class="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Capacity Nigtech</p>
            </div>
            
            <!-- Login Form -->
            <div id="login-form" class="space-y-4">
                <h2 class="text-xl font-black text-gray-800 mb-2">Login</h2>
                <input type="text" id="login-user" placeholder="Username / Mobile Number" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <input type="password" id="login-pass" placeholder="Password" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <button onclick="handleLogin()" class="w-full bg-orange-600 text-white font-bold py-4 rounded-sm mt-6 shadow-lg shadow-orange-200">LOGIN</button>
                <p class="text-center text-sm font-bold text-gray-500 mt-6">
                    Don't have an account? <span onclick="toggleAuth('signup')" class="text-orange-600 cursor-pointer">Sign Up</span>
                </p>
            </div>

            <!-- Signup Form -->
            <div id="signup-form" class="space-y-4 hidden">
                <h2 class="text-xl font-black text-gray-800 mb-2">Create Account</h2>
                <input type="text" id="reg-user" placeholder="Username" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <input type="tel" id="reg-mobile" placeholder="Mobile Number" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <input type="password" id="reg-pass" placeholder="Password" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <input type="text" id="reg-ref" placeholder="Referral Code (Optional)" class="w-full border-b-2 border-gray-200 py-3 text-lg font-medium">
                <button onclick="handleSignup()" class="w-full bg-orange-600 text-white font-bold py-4 rounded-sm mt-6 shadow-lg shadow-orange-200">SIGN UP</button>
                <p class="text-center text-sm font-bold text-gray-500 mt-6">
                    Already have an account? <span onclick="toggleAuth('login')" class="text-orange-600 cursor-pointer">Login</span>
                </p>
            </div>
        </div>

        <!-- APP CONTENT -->
        <div id="app-screen" class="hidden">
            <header class="sporty-header">
                <div class="flex items-center gap-2">
                    <i class="fas fa-bars text-white text-xl"></i>
                    <span class="text-orange-500 font-black italic text-lg">PLACE BET</span>
                </div>
                <div class="flex items-center gap-3">
                    <div class="balance-box">
                        <span class="text-orange-500 font-bold text-xs">₦</span>
                        <span id="user-balance" class="text-white font-black text-sm">5,000.00</span>
                        <i class="fas fa-plus-circle text-orange-500 text-xs cursor-pointer" onclick="openDeposit()"></i>
                    </div>
                    <i class="fas fa-search text-white"></i>
                </div>
            </header>

            <div id="category-bar" class="category-scroll px-4">
                <div onclick="filterSport('Football', this)" class="category-item active">
                    <i class="fas fa-futbol"></i>
                    <span>Football</span>
                </div>
                <div onclick="filterSport('Basketball', this)" class="category-item"><i class="fas fa-basketball-ball"></i><span>Basketball</span></div>
                <div onclick="filterSport('Tennis', this)" class="category-item"><i class="fas fa-tennis-ball"></i><span>Tennis</span></div>
                <div onclick="filterSport('Ping Pong', this)" class="category-item"><i class="fas fa-table-tennis"></i><span>Ping Pong</span></div>
                <div onclick="filterSport('Volleyball', this)" class="category-item"><i class="fas fa-volleyball-ball"></i><span>Volleyball</span></div>
            </div>

            <main class="pb-24">
                <!-- LOBBY VIEW -->
                <div id="view-lobby" class="view-section active">
                    <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
                        <span id="lobby-title" class="text-[10px] font-black text-gray-500 uppercase">Popular Matches</span>
                        <span class="text-[10px] font-bold text-orange-600 cursor-pointer" onclick="fetchLiveMatches()">Refresh <i class="fas fa-sync-alt ml-1"></i></span>
                    </div>
                    
                    <div id="matches-container">
                        <div class="p-10 text-center text-gray-400 text-sm">Loading matches...</div>
                    </div>
                </div>

                <!-- MY BETS VIEW -->
                <div id="view-mybets" class="view-section p-4">
                    <div class="flex gap-4 border-b border-gray-200 mb-4">
                        <span class="border-b-2 border-orange-500 text-orange-500 font-bold pb-2 text-sm">Open Bets</span>
                    </div>
                    <div id="history-container"></div>
                </div>

                <!-- PROFILE VIEW (ME) -->
                <div id="view-me" class="view-section">
                    <div class="bg-white p-6 mb-2 flex items-center gap-4 border-b">
                        <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-3xl text-gray-400"></i>
                        </div>
                        <div>
                            <h2 id="me-username" class="text-xl font-black text-gray-800">User</h2>
                            <p class="text-xs text-gray-400 font-bold">VIP Level 1</p>
                        </div>
                    </div>

                    <div class="bg-white p-4 mb-2">
                        <p class="text-[11px] font-bold text-gray-500 mb-4 leading-relaxed bg-orange-50 p-3 rounded border border-orange-100">
                            You will get 10% commission from each referral first deposit and 1% for every single betting he bet whether he win or loss
                        </p>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="border rounded p-4 text-center">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">Referral Code</p>
                                <p id="referral-code-display" class="font-black text-orange-600 text-sm">place-Bet-000000</p>
                            </div>
                            <div class="border rounded p-4 text-center">
                                <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Referrals</p>
                                <p id="referral-count" class="font-black text-gray-800 text-sm">0</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white">
                        <div class="flex justify-between items-center p-4 border-b cursor-pointer" onclick="openModal('transactions')">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-wallet text-orange-500"></i>
                                <span class="text-sm font-bold">Transaction History</span>
                            </div>
                            <i class="fas fa-chevron-right text-gray-300 text-xs"></i>
                        </div>
                        <div class="flex justify-between items-center p-4 border-b cursor-pointer" onclick="openModal('bonuses')">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-gift text-orange-500"></i>
                                <span class="text-sm font-bold">Bonuses & Gifts</span>
                            </div>
                            <i class="fas fa-chevron-right text-gray-300 text-xs"></i>
                        </div>
                        <div class="flex justify-between items-center p-4" onclick="location.reload()">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-sign-out-alt text-gray-400"></i>
                                <span class="text-sm font-bold">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Bottom Nav -->
            <nav class="sporty-nav">
                <div onclick="switchView('lobby')" class="nav-item active" id="nav-lobby">
                    <i class="fas fa-home text-lg"></i><span>Home</span>
                </div>
                <div onclick="switchView('lobby'); filterSport('Football', null)" class="nav-item" id="nav-sports">
                    <i class="fas fa-stream text-lg text-gray-400"></i><span>Sports</span>
                </div>
                <div onclick="toggleSlip(true)" class="floating-slip">
                    <i class="fas fa-list-alt text-2xl"></i>
                    <span id="slip-count" class="slip-badge">0</span>
                </div>
                <div onclick="switchView('mybets')" class="nav-item" id="nav-mybets">
                    <i class="fas fa-history text-lg"></i><span>My Bets</span>
                </div>
                <div onclick="switchView('me')" class="nav-item" id="nav-me">
                    <i class="fas fa-user-circle text-lg"></i><span>Me</span>
                </div>
            </nav>
        </div>

        <!-- TRANSACTION MODAL -->
        <div id="modal-transactions" class="modal-view">
            <div class="sporty-header">
                <div class="flex items-center gap-4">
                    <i class="fas fa-arrow-left text-white cursor-pointer" onclick="closeModal('transactions')"></i>
                    <span class="text-white font-bold">Transactions</span>
                </div>
            </div>
            <div id="trans-list" class="p-4 space-y-2 overflow-y-auto flex-1"></div>
        </div>

        <!-- BONUSES MODAL -->
        <div id="modal-bonuses" class="modal-view">
            <div class="sporty-header">
                <div class="flex items-center gap-4">
                    <i class="fas fa-arrow-left text-white cursor-pointer" onclick="closeModal('bonuses')"></i>
                    <span class="text-white font-bold">Bonuses & Gifts</span>
                </div>
            </div>
            <div id="bonus-list" class="p-4 space-y-2 overflow-y-auto flex-1"></div>
        </div>

        <!-- BET SLIP DRAWER -->
        <div id="slip-overlay" onclick="toggleSlip(false)" class="fixed inset-0 bg-black/50 z-[1500] hidden"></div>
        <div id="slip-drawer" class="slip-drawer">
            <div class="p-4 border-b flex justify-between items-center">
                <span class="font-black text-sm uppercase">Bet Slip <span id="slip-title-count" class="text-orange-500">(0)</span></span>
                <i onclick="toggleSlip(false)" class="fas fa-times text-gray-400"></i>
            </div>
            <div id="slip-items" class="p-4 max-h-[300px] overflow-y-auto space-y-3"></div>
            <div class="p-4 bg-gray-50 border-t">
                <div class="flex justify-between mb-4">
                    <span class="text-xs font-bold text-gray-500">Total Odds:</span>
                    <span id="total-odds" class="text-lg font-black text-orange-600">0.00</span>
                </div>
                <div class="flex gap-2 items-center bg-white p-2 border rounded-sm mb-4">
                    <span class="font-bold text-gray-400 text-sm">₦</span>
                    <input type="number" id="stake-input" value="100" class="w-full font-black text-lg">
                </div>
                <button onclick="placeBet()" class="w-full bg-orange-600 text-white font-black py-4 rounded-sm">PLACE BET</button>
            </div>
        </div>
    </div>

    <script>
        let selections = [];
        let balance = 5000.00;
        let bets = [];
        let transactions = [];
        let bonuses = [];
        let currentUser = "";
        let referralCode = "";
        let referralCount = 0;
        let currentSport = "Football";

        // API CONFIGURATION (RapidAPI)
        const API_KEY = ""; 
        const API_HOST = "api-football-v1.p.rapidapi.com";

        function toggleAuth(type) {
            if(type === 'signup') {
                document.getElementById('login-form').classList.add('hidden');
                document.getElementById('signup-form').classList.remove('hidden');
            } else {
                document.getElementById('signup-form').classList.add('hidden');
                document.getElementById('login-form').classList.remove('hidden');
            }
        }

        function handleSignup() {
            const user = document.getElementById('reg-user').value;
            const mobile = document.getElementById('reg-mobile').value;
            const pass = document.getElementById('reg-pass').value;
            const ref = document.getElementById('reg-ref').value;

            if(!user || !mobile || !pass) {
                alert("Please fill all required fields");
                return;
            }
            
            // If referral code exists, simulate referral logic
            if(ref) {
                console.log("Registered with referral:", ref);
            }

            currentUser = user;
            finalizeAuth();
        }

        function handleLogin() {
            const user = document.getElementById('login-user').value;
            const pass = document.getElementById('login-pass').value;
            if(!user || !pass) return;
            currentUser = user;
            finalizeAuth();
        }

        function finalizeAuth() {
            referralCode = `place-Bet-${Math.floor(100000 + Math.random() * 900000)}`;
            document.getElementById('me-username').innerText = currentUser;
            document.getElementById('referral-code-display').innerText = referralCode;
            document.getElementById('referral-count').innerText = referralCount;
            
            if(transactions.length === 0) {
                logTransaction("Initial Balance", 5000.00, "credit");
            }
            
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('app-screen').classList.remove('hidden');
            fetchLiveMatches();
        }

        function filterSport(sport, element) {
            currentSport = sport;
            document.getElementById('lobby-title').innerText = `${sport} Matches`;
            
            if(element) {
                document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
                element.classList.add('active');
            }
            
            fetchLiveMatches();
        }

        async function fetchLiveMatches() {
            const container = document.getElementById('matches-container');
            container.innerHTML = '<div class="p-10 text-center text-gray-400 text-sm">Loading matches...</div>';
            
            // Simulating sport specific fetching
            setTimeout(() => {
                renderMatches(getSportMatches(currentSport));
            }, 500);
        }

        function getSportMatches(sport) {
            const mocks = {
                'Football': [
                    { fixture: { id: 101, status: { elapsed: 72 } }, league: { name: "Premier League" }, teams: { home: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, away: { name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" } }, goals: { home: 1, away: 0 } },
                    { fixture: { id: 102, status: { elapsed: 15 } }, league: { name: "La Liga" }, teams: { home: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, away: { name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" } }, goals: { home: 0, away: 0 } }
                ],
                'Basketball': [
                    { fixture: { id: 201, status: { elapsed: "Q3" } }, league: { name: "NBA" }, teams: { home: { name: "Lakers", logo: "https://media.api-sports.io/basketball/teams/145.png" }, away: { name: "Warriors", logo: "https://media.api-sports.io/basketball/teams/142.png" } }, goals: { home: 88, away: 92 } },
                    { fixture: { id: 202, status: { elapsed: "Q1" } }, league: { name: "NBA" }, teams: { home: { name: "Bulls", logo: "https://media.api-sports.io/basketball/teams/139.png" }, away: { name: "Heat", logo: "https://media.api-sports.io/basketball/teams/150.png" } }, goals: { home: 12, away: 15 } }
                ],
                'Tennis': [
                    { fixture: { id: 301, status: { elapsed: "Set 2" } }, league: { name: "ATP London" }, teams: { home: { name: "Djokovic", logo: "https://media.api-sports.io/tennis/players/341.png" }, away: { name: "Nadal", logo: "https://media.api-sports.io/tennis/players/432.png" } }, goals: { home: "6 (2)", away: "4 (1)" } }
                ],
                'Ping Pong': [
                    { fixture: { id: 401, status: { elapsed: "G3" } }, league: { name: "TT Cup" }, teams: { home: { name: "Ma Long", logo: "" }, away: { name: "Fan Zhendong", logo: "" } }, goals: { home: 11, away: 9 } }
                ],
                'Volleyball': [
                    { fixture: { id: 501, status: { elapsed: "S4" } }, league: { name: "Nations League" }, teams: { home: { name: "Brazil", logo: "" }, away: { name: "Poland", logo: "" } }, goals: { home: 22, away: 25 } }
                ]
            };
            return mocks[sport] || mocks['Football'];
        }

        function renderMatches(matches) {
            const container = document.getElementById('matches-container');
            container.innerHTML = matches.map(m => {
                const homeName = m.teams.home.name;
                const awayName = m.teams.away.name;
                const matchTitle = `${homeName} vs ${awayName}`;
                
                return `
                <div class="match-card">
                    <div class="match-header">
                        <div class="flex items-center gap-2">
                            <span class="live-tag">LIVE</span>
                            <span>${m.league.name} • ${m.fixture.status.elapsed}</span>
                        </div>
                        <span class="text-orange-600 font-bold">ID: ${m.fixture.id}</span>
                    </div>
                    <div class="team-row">
                        <div class="team-info">
                            ${m.teams.home.logo ? `<img src="${m.teams.home.logo}" class="team-logo">` : `<i class="fas fa-circle text-[8px] text-gray-300"></i>`}
                            <span>${homeName}</span>
                        </div>
                        <span>${m.goals.home ?? 0}</span>
                    </div>
                    <div class="team-row">
                        <div class="team-info">
                            ${m.teams.away.logo ? `<img src="${m.teams.away.logo}" class="team-logo">` : `<i class="fas fa-circle text-[8px] text-gray-300"></i>`}
                            <span>${awayName}</span>
                        </div>
                        <span>${m.goals.away ?? 0}</span>
                    </div>
                    <div class="odds-grid">
                        <div onclick="toggleOdd(this, '${matchTitle}', 'Home', 1.85)" class="odd-btn">
                            <span class="odd-label">1</span><span class="odd-value">1.85</span>
                        </div>
                        <div onclick="toggleOdd(this, '${matchTitle}', 'Draw', 3.40)" class="odd-btn">
                            <span class="odd-label">X</span><span class="odd-value">3.40</span>
                        </div>
                        <div onclick="toggleOdd(this, '${matchTitle}', 'Away', 4.20)" class="odd-btn">
                            <span class="odd-label">2</span><span class="odd-value">4.20</span>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }

        function switchView(view) {
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + view).classList.add('active');
            
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.getElementById('nav-' + view).classList.add('active');
            
            document.getElementById('category-bar').style.display = view === 'lobby' ? 'flex' : 'none';
            if(view === 'mybets') renderBets();
        }

        function toggleOdd(btn, match, pick, odd) {
            btn.classList.toggle('selected');
            const idx = selections.findIndex(s => s.match === match && s.pick === pick);
            if(idx > -1) selections.splice(idx, 1);
            else selections.push({ match, pick, odd });
            updateUI();
        }

        function updateUI() {
            const count = selections.length;
            document.getElementById('slip-count').innerText = count;
            document.getElementById('slip-title-count').innerText = `(${count})`;
            document.getElementById('slip-items').innerHTML = selections.map(s => `
                <div class="flex justify-between items-start border-b pb-2">
                    <div><p class="font-black text-xs">${s.pick}</p><p class="text-[10px] text-gray-400">${s.match}</p></div>
                    <span class="font-black text-orange-600">${s.odd}</span>
                </div>
            `).join('');
            const totalOdds = selections.reduce((a, b) => a * b.odd, 1).toFixed(2);
            document.getElementById('total-odds').innerText = count > 0 ? totalOdds : "0.00";
        }

        function placeBet() {
            const stake = parseFloat(document.getElementById('stake-input').value);
            if(!selections.length || stake > balance || stake < 1) return;
            
            balance -= stake;
            updateBalanceDisplay();
            logTransaction("Bet Placement", -stake, "debit");
            
            // Referral Commission logic
            const refComm = (stake * 0.01);
            logBonus(`Referral Bet Comm (1%)`, refComm);
            
            bets.unshift({ 
                id: Date.now(), 
                selections: [...selections], 
                stake, 
                win: (stake * parseFloat(document.getElementById('total-odds').innerText)).toFixed(2) 
            });
            
            selections = [];
            document.querySelectorAll('.odd-btn').forEach(b => b.classList.remove('selected'));
            updateUI();
            toggleSlip(false);
            switchView('mybets');
        }

        function openDeposit() {
            const amt = 1000;
            balance += amt;
            updateBalanceDisplay();
            logTransaction("Deposit", amt, "credit");
            logBonus(`Referral 1st Deposit (10%)`, (amt * 0.10));
        }

        function logTransaction(desc, amt, type) { transactions.unshift({ date: new Date().toLocaleString(), desc, amt, type }); }
        function logBonus(desc, amt) { bonuses.unshift({ date: new Date().toLocaleString(), desc, amt }); balance += amt; updateBalanceDisplay(); logTransaction(desc, amt, "credit"); }
        function updateBalanceDisplay() { document.getElementById('user-balance').innerText = balance.toLocaleString(undefined, {minimumFractionDigits: 2}); }
        
        function openModal(id) {
            const modal = document.getElementById('modal-' + id);
            modal.classList.add('active');
            const target = id === 'transactions' ? 'trans-list' : 'bonus-list';
            const data = id === 'transactions' ? transactions : bonuses;
            document.getElementById(target).innerHTML = data.length ? data.map(t => `
                <div class="bg-white p-3 border-l-4 ${t.type === 'debit' ? 'border-red-500' : 'border-green-500'}">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-bold text-gray-800">${t.desc}</span>
                        <span class="text-sm font-black ${t.type === 'debit' ? 'text-red-600' : 'text-green-600'}">${t.type === 'debit' ? '' : '+'}${t.amt.toFixed(2)}</span>
                    </div>
                    <p class="text-[9px] text-gray-400 mt-1">${t.date}</p>
                </div>
            `).join('') : '<p class="text-center text-gray-400 py-10">Empty</p>';
        }
        function closeModal(id) { document.getElementById('modal-' + id).classList.remove('active'); }
        function toggleSlip(show) { document.getElementById('slip-drawer').classList.toggle('open', show); document.getElementById('slip-overlay').classList.toggle('hidden', !show); }
        
        function renderBets() {
            const container = document.getElementById('history-container');
            container.innerHTML = bets.length ? bets.map(b => `
                <div class="bg-white p-4 border-b mb-2 shadow-sm">
                    <div class="flex justify-between text-[10px] font-bold text-gray-400 mb-2"><span>ID: ${b.id}</span><span class="text-orange-600">OPEN</span></div>
                    ${b.selections.map(s => `<div class="flex justify-between text-xs font-bold"><span>${s.match}</span><span>${s.pick} (${s.odd})</span></div>`).join('')}
                    <div class="mt-3 pt-2 border-t flex justify-between items-end">
                        <div><p class="text-gray-400 uppercase text-[9px]">Stake</p><p class="font-black">₦${b.stake}</p></div>
                        <div class="text-right"><p class="text-gray-400 uppercase text-[9px]">Potential Win</p><p class="font-black text-green-600">₦${b.win}</p></div>
                    </div>
                </div>
            `).join('') : '<p class="text-center py-20 text-gray-400 font-bold text-sm">No active tickets</p>';
        }
    </script>
</body>
</html>