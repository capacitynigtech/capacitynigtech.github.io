<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hilal Rewards - Ramadan Special</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        
        :root {
            --emerald-deep: #064e3b;
            --gold-light: #fbbf24;
            --sand-light: #fefce8;
        }

        body {
            font-family: 'Plus+Jakarta+Sans', sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 0;
        }

        .ramadan-bg {
            background: linear-gradient(135deg, #064e3b 0%, #042f24 100%);
        }

        .moon-glow {
            filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.6));
            animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .tab-active {
            background-color: var(--emerald-deep);
            color: white;
            box-shadow: 0 4px 12px rgba(6, 78, 59, 0.2);
        }

        iframe {
            border-radius: 24px;
            background: #fff;
        }

        .modal-overlay {
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Custom Alert Styling */
        #custom-alert {
            display: none;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 200;
            width: 90%;
            max-width: 320px;
        }
    </style>
</head>
<body class="bg-slate-50">

    <!-- Notification UI (No browser alerts used) -->
    <div id="custom-alert" class="bg-emerald-900 text-amber-300 px-6 py-4 rounded-2xl shadow-2xl border border-amber-300/30 font-bold text-center animate-fadeIn">
        <p id="alert-msg"></p>
    </div>

    <div id="app-root" class="max-w-md mx-auto min-h-screen relative shadow-2xl overflow-x-hidden bg-white">
        <!-- App content injected here -->
    </div>

    <script>
        const CONFIG = {
            whatsapp: "2349018511585",
            cpxAppId: "31452",
            referralBonus: 100,
            validCodes: {
                "RAMADAN500": 500,
                "TASK100": 100,
                "EID1000": 1000,
                "CAPACITY": 2500
            }
        };

        // In-memory state (Note: Refreshing resets data unless connected to a database)
        let state = {
            isLoggedIn: false,
            view: 'login', 
            user: null,
            registeredUsers: [], 
            showRedeemModal: false
        };

        const root = document.getElementById('app-root');

        function showAlert(msg) {
            const alertBox = document.getElementById('custom-alert');
            document.getElementById('alert-msg').innerText = msg;
            alertBox.style.display = 'block';
            setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
        }

        function navigate(view) {
            state.view = view;
            render();
        }

        function render() {
            if (!state.isLoggedIn) {
                if (state.view === 'signup') renderSignup();
                else renderLogin();
            } else {
                renderMain();
            }
        }

        function renderLogin() {
            root.innerHTML = `
                <div class="min-h-screen ramadan-bg flex flex-col items-center justify-center p-8 text-center">
                    <div class="mb-4">
                        <p class="text-amber-300 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Ramadan Special earn</p>
                        <div class="relative inline-block mb-6">
                            <svg class="w-32 h-32 text-amber-400 moon-glow" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3c.132 0 .263 0 .393.007a9 9 0 0 0 9.593 9.593A9 9 0 1 1 12 3z"/>
                            </svg>
                        </div>
                        <h1 class="text-4xl font-black text-white uppercase tracking-tighter">Hilal Rewards</h1>
                    </div>

                    <div class="w-full bg-white rounded-[2.5rem] p-8 shadow-2xl">
                        <div class="space-y-4">
                            <input id="login-name" type="text" placeholder="FULL NAME" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none focus:ring-2 ring-emerald-600">
                            <input id="login-pass" type="password" placeholder="PASSWORD" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none focus:ring-2 ring-emerald-600">
                            <button onclick="handleLogin()" class="w-full bg-[#064e3b] text-amber-400 py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">Login</button>
                            <p class="text-xs font-bold text-slate-400 uppercase mt-4">New user? <span onclick="navigate('signup')" class="text-emerald-700 cursor-pointer">Sign up here</span></p>
                        </div>
                    </div>
                    <p class="mt-8 text-amber-200/50 font-bold text-xs uppercase tracking-widest">@Capacity Nigtech</p>
                </div>
            `;
        }

        function renderSignup() {
            root.innerHTML = `
                <div class="min-h-screen ramadan-bg flex flex-col items-center justify-center p-8 text-center">
                    <div class="mb-4">
                        <p class="text-amber-300 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Ramadan Special earn</p>
                        <svg class="w-20 h-20 text-amber-400 mx-auto moon-glow mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3c.132 0 .263 0 .393.007a9 9 0 0 0 9.593 9.593A9 9 0 1 1 12 3z"/>
                        </svg>
                        <h1 class="text-3xl font-black text-white uppercase">Register</h1>
                    </div>

                    <div class="w-full bg-white rounded-[2.5rem] p-8 shadow-2xl">
                        <div class="space-y-4">
                            <input id="reg-name" type="text" placeholder="FULL NAME" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none focus:ring-2 ring-emerald-600">
                            <input id="reg-pass" type="password" placeholder="PASSWORD" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none focus:ring-2 ring-emerald-600">
                            <input id="reg-ref" type="text" placeholder="REFERRAL CODE (OPTIONAL)" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none focus:ring-2 ring-emerald-600">
                            <button onclick="handleSignup()" class="w-full bg-[#064e3b] text-amber-400 py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">Create Account</button>
                            <p class="text-xs font-bold text-slate-400 uppercase mt-4">Already registered? <span onclick="navigate('login')" class="text-emerald-700 cursor-pointer">Login</span></p>
                        </div>
                    </div>
                    <p class="mt-8 text-amber-200/50 font-bold text-xs uppercase tracking-widest">@Capacity Nigtech</p>
                </div>
            `;
        }

        function renderMain() {
            root.innerHTML = `
                <div class="flex flex-col min-h-screen">
                    <header class="ramadan-bg pt-8 pb-12 px-6 rounded-b-[3rem] text-white relative">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-lg font-black uppercase tracking-tighter">Hilal Rewards 🌙</h2>
                            <div class="bg-white/10 p-2 rounded-xl text-xs font-bold uppercase">${state.user.fullName.split(' ')[0]}</div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex justify-between items-center">
                            <div>
                                <p class="text-[10px] font-bold uppercase text-amber-200 tracking-widest">Available Balance</p>
                                <h3 class="text-4xl font-black">₦${state.user.balance.toLocaleString()}</h3>
                            </div>
                            <button onclick="toggleRedeemModal(true)" class="bg-amber-400 text-emerald-950 p-3 rounded-2xl shadow-lg active:scale-90 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
                            </button>
                        </div>
                    </header>

                    <nav class="flex px-4 -mt-6 z-10">
                        <div class="w-full bg-white p-1.5 rounded-2xl shadow-xl flex gap-1">
                            <button onclick="navigateTab('dashboard')" class="flex-1 py-3 rounded-xl font-black text-[10px] uppercase transition-all ${state.view === 'dashboard' ? 'tab-active' : 'text-slate-400'}">Dash</button>
                            <button onclick="navigateTab('referral')" class="flex-1 py-3 rounded-xl font-black text-[10px] uppercase transition-all ${state.view === 'referral' ? 'tab-active' : 'text-slate-400'}">Invite</button>
                            <button onclick="navigateTab('withdrawal')" class="flex-1 py-3 rounded-xl font-black text-[10px] uppercase transition-all ${state.view === 'withdrawal' ? 'tab-active' : 'text-slate-400'}">Payout</button>
                        </div>
                    </nav>

                    <div class="flex-1 px-5 py-6" id="main-content">
                        ${renderTabContent()}
                    </div>
                </div>

                <div id="redeem-modal" class="fixed inset-0 modal-overlay z-[100] flex items-center justify-center p-6 ${state.showRedeemModal ? '' : 'hidden'}">
                    <div class="bg-white w-full rounded-[2.5rem] p-8 shadow-2xl animate-fadeIn">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="font-black text-emerald-900 uppercase text-sm">Redeem Code</h4>
                            <button onclick="toggleRedeemModal(false)" class="text-slate-400"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg></button>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase mb-4">Enter reward code</p>
                        <input id="redeem-input" type="text" placeholder="ENTER CODE" class="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold outline-none mb-4 uppercase">
                        <button onclick="applyRedemptionCode()" class="w-full bg-emerald-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg">Apply Code</button>
                    </div>
                </div>
            `;
        }

        function renderTabContent() {
            if (state.view === 'dashboard') {
                return `
                    <div class="space-y-4 animate-fadeIn">
                        <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between">
                            <div>
                                <p class="text-[8px] font-black uppercase text-emerald-600">Your CPX User ID</p>
                                <p class="text-sm font-black text-emerald-900 tracking-tight">${state.user.id}</p>
                            </div>
                            <button onclick="copyText('${state.user.id}')" class="bg-white p-2.5 rounded-xl shadow-sm text-emerald-600 border border-emerald-100 active:scale-90 transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                            </button>
                        </div>

                        <div onclick="openWhatsApp()" class="bg-green-600 text-white p-4 rounded-2xl flex items-center justify-between cursor-pointer shadow-lg active:scale-95 transition-all">
                            <div class="flex items-center gap-3">
                                <div class="bg-white/20 p-2 rounded-xl">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L3 21l3.22-.94c1.5.81 3.2 1.28 5.01 1.28 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.17-.43-4.51-1.18l-.32-.19-2.39.7.71-2.33-.21-.35C4.52 15.34 4 13.73 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
                                </div>
                                <span class="text-[10px] font-black uppercase">Click to Submit Proof</span>
                            </div>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                        </div>

                        <div class="bg-slate-100 rounded-[2rem] p-2 border-4 border-white shadow-inner min-h-[500px]">
                            <iframe 
                                src="https://offers.cpx-research.com/index.php?app_id=${CONFIG.cpxAppId}&ext_user_id=${state.user.id}" 
                                class="w-full h-[500px]"
                                frameborder="0">
                            </iframe>
                        </div>
                    </div>
                `;
            } else if (state.view === 'referral') {
                return `
                    <div class="space-y-6 text-center animate-fadeIn">
                        <div class="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                            <h4 class="font-black text-emerald-900 uppercase text-sm mb-4">Your Referral Code</h4>
                            <div class="bg-emerald-50 border-2 border-dashed border-emerald-200 p-6 rounded-2xl mb-6 relative">
                                <span class="text-3xl font-black text-emerald-800 tracking-widest">${state.user.refCode}</span>
                                <button onclick="copyText('${state.user.refCode}')" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-xl shadow-sm text-emerald-600 active:scale-110 transition-all">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                                </button>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-emerald-900 text-white p-4 rounded-2xl">
                                    <p class="text-[8px] font-bold uppercase opacity-60">Invites</p>
                                    <p class="text-xl font-black">${state.user.referralCount}</p>
                                </div>
                                <div class="bg-amber-400 text-emerald-950 p-4 rounded-2xl">
                                    <p class="text-[8px] font-bold uppercase opacity-60">Reward</p>
                                    <p class="text-xl font-black">₦${state.user.referralCommission}</p>
                                </div>
                            </div>
                            <p class="mt-6 text-[10px] font-black uppercase text-slate-400">Earn ₦${CONFIG.referralBonus} per referral</p>
                        </div>
                    </div>
                `;
            } else if (state.view === 'withdrawal') {
                return `
                    <div class="space-y-4 animate-fadeIn">
                        <div class="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
                            <svg class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <p class="text-[10px] font-bold text-amber-800 uppercase tracking-tight">Withdrawals processed manually every Friday. Enter details carefully.</p>
                        </div>
                        
                        <div class="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-4">
                            <input id="bank-acc" type="text" placeholder="ACCOUNT NUMBER" class="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold outline-none text-sm">
                            <input id="bank-name" type="text" placeholder="BANK NAME" class="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold outline-none text-sm">
                            <input id="bank-holder" type="text" placeholder="ACCOUNT NAME" class="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold outline-none text-sm">
                            <input id="draw-amount" type="number" placeholder="WITHDRAWAL AMOUNT" class="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold outline-none text-sm">
                            <button onclick="handleWithdrawRequest()" class="w-full bg-[#064e3b] text-amber-400 py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg">Submit Request</button>
                        </div>
                    </div>
                `;
            }
        }

        function handleSignup() {
            const name = document.getElementById('reg-name').value.trim();
            const pass = document.getElementById('reg-pass').value.trim();
            const refCodeInput = document.getElementById('reg-ref').value.trim().toUpperCase();

            if (!name || !pass) return showAlert("Fill all fields.");

            // Check if name is taken (basic check for demo)
            if (state.registeredUsers.find(u => u.fullName === name)) {
                return showAlert("Name already registered.");
            }

            const userId = "hilal_" + Math.random().toString(36).substring(2, 9);
            const newUser = {
                id: userId,
                fullName: name,
                password: pass,
                balance: 0,
                referralCount: 0,
                referralCommission: 0,
                refCode: "HILAL-" + Math.random().toString(36).substring(2, 7).toUpperCase(),
                usedCodes: []
            };

            // Handle Referral Logic
            if (refCodeInput) {
                const referrer = state.registeredUsers.find(u => u.refCode === refCodeInput);
                if (referrer) {
                    referrer.referralCount += 1;
                    referrer.referralCommission += CONFIG.referralBonus;
                    referrer.balance += CONFIG.referralBonus;
                    newUser.balance += 50; // New user gets 50 bonus
                }
            }

            state.registeredUsers.push(newUser);
            state.user = newUser;
            state.isLoggedIn = true;
            state.view = 'dashboard';
            showAlert("Welcome to Hilal Rewards!");
            render();
        }

        function handleLogin() {
            const name = document.getElementById('login-name').value.trim();
            const pass = document.getElementById('login-pass').value.trim();
            
            if (!name || !pass) return showAlert("Fill all fields.");

            const foundUser = state.registeredUsers.find(u => u.fullName === name);

            if (!foundUser) {
                showAlert("User not found.");
            } else if (foundUser.password !== pass) {
                showAlert("Incorrect password details.");
            } else {
                state.user = foundUser;
                state.isLoggedIn = true;
                state.view = 'dashboard';
                showAlert("Successfully logged in!");
                render();
            }
        }

        function navigateTab(tab) {
            state.view = tab;
            render();
        }

        function openWhatsApp() {
            const msg = `As-salamu alaykum Admin,\n\nI have completed my task on Hilal Rewards.\nName: ${state.user.fullName}\nUser ID: ${state.user.id}\n\n[Sending task screenshot proof below]`;
            window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        function toggleRedeemModal(show) {
            state.showRedeemModal = show;
            render();
        }

        function applyRedemptionCode() {
            const input = document.getElementById('redeem-input').value.trim().toUpperCase();
            if (!input) return showAlert("Enter code.");

            if (state.user.usedCodes.includes(input)) return showAlert("Code already used.");

            if (CONFIG.validCodes[input]) {
                const amount = CONFIG.validCodes[input];
                state.user.balance += amount;
                state.user.usedCodes.push(input);
                showAlert(`₦${amount} added!`);
                toggleRedeemModal(false);
            } else {
                showAlert("Invalid code.");
            }
        }

        function copyText(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            showAlert("Copied to clipboard!");
        }

        function handleWithdrawRequest() {
            const amount = document.getElementById('draw-amount').value;
            if (!amount || amount < 500) return showAlert("Minimum ₦500");
            if (amount > state.user.balance) return showAlert("Insufficient balance");
            
            showAlert("Request submitted successfully.");
            navigateTab('dashboard');
        }

        render();
    </script>
</body>
</html>

