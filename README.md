<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity Hub | Earn Instantly</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Archivo+Black&family=Montserrat:wght@800;900&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            color: #1e293b;
            -webkit-tap-highlight-color: transparent;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        /* Splash Screen Styles */
        #splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out, visibility 0.5s;
        }

        .splash-logo-container {
            display: flex;
            align-items: center;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 2.2rem;
            letter-spacing: -0.04em;
            text-transform: uppercase;
            opacity: 0;
            animation: fadeInUp 0.8s forwards 0.4s;
        }

        .logo-text-black { color: #0f172a; }
        .logo-text-orange { color: #f97316; }

        .splash-welcome {
            font-size: 0.7rem;
            font-weight: 600;
            color: #94a3b8;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 0.15rem;
            opacity: 0;
            animation: fadeInDown 0.8s forwards 0.2s;
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .orange-gradient {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }

        .glass-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.03);
        }

        .bottom-nav {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            border-top: 1px solid #f1f5f9;
        }

        ::-webkit-scrollbar { display: none; }
        
        .fade-out {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none;
        }

        .profile-item {
            display: flex;
            align-items: center;
            padding: 1.15rem 1rem;
            border-radius: 1rem;
            background: #f8fafc;
            margin-bottom: 0.75rem;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid #f1f5f9;
        }

        .profile-item:active {
            background: #f1f5f9;
            transform: scale(0.98);
        }

        .nav-icon { font-size: 1.15rem; }
        .nav-text { font-size: 9px; margin-top: 2px; }

        .redemption-input {
            width: 100%;
            padding: 0.85rem 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            font-size: 0.9rem;
            text-align: center;
            letter-spacing: 0.1em;
            font-weight: 600;
        }

        .withdraw-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .guideline-section {
            padding: 1rem;
            background: #fdfdfd;
            border-radius: 1rem;
            border-left: 3px solid #f97316;
            margin-bottom: 1rem;
        }
        .guideline-title {
            font-weight: 800;
            font-size: 12px;
            color: #1e293b;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .guideline-text {
            font-size: 11px;
            color: #64748b;
            line-height: 1.5;
        }

        .footer-credits {
            text-align: center;
            font-size: 9px;
            color: #94a3b8;
            padding: 20px 0;
            font-weight: 500;
            letter-spacing: 0.02em;
        }

        .uid-badge {
            background: #f1f5f9;
            color: #64748b;
            font-size: 10px;
            font-weight: 800;
            padding: 6px 10px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
            letter-spacing: 0.05em;
        }

        .history-item {
            padding: 12px;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>
<body class="pb-24">

    <!-- Splash Screen -->
    <div id="splash-screen">
        <div class="splash-welcome">Welcome to</div>
        <div class="splash-logo-container">
            <span class="logo-text-black">CAPACITY</span>
            <span class="logo-text-orange">HUB</span>
        </div>
    </div>

    <!-- Main App Content -->
    <div id="main-app" class="hidden">
        <nav class="p-4 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div>
                <h1 class="text-xl font-black tracking-tighter text-slate-900">CAPACITY<span class="text-orange-500">HUB</span></h1>
            </div>
            <div class="flex items-center gap-3">
                <div id="notif-bell" onclick="toggleHistory()" class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer relative active:scale-90 transition-transform">
                    <i class="fas fa-bell text-sm"></i>
                    <span id="notif-dot" class="hidden absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                </div>
                <div id="user-uid-display" class="uid-badge">UID-00000000</div>
            </div>
        </nav>

        <main class="px-4 space-y-6">
            <div id="content-area">
                <!-- Dashboard View -->
                <div id="view-dashboard" class="space-y-6">
                    <section class="orange-gradient p-6 rounded-3xl shadow-lg shadow-orange-500/10 relative overflow-hidden">
                        <div class="relative z-10">
                            <h2 class="text-white text-xl font-bold mb-1">Ready to Earn?</h2>
                            <p class="text-orange-100 text-[11px] opacity-90 mb-4">Complete simple tasks and get paid instantly.</p>
                            <button onclick="switchTab('offers')" class="bg-white text-orange-600 px-4 py-2 rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-transform">Start Earning</button>
                        </div>
                        <i class="fas fa-wallet absolute -right-2 -bottom-2 text-white/10 text-7xl"></i>
                    </section>

                    <div class="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div onclick="switchTab('offers')" class="flex flex-col items-center gap-2 flex-1 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                <i class="fas fa-clipboard-list text-lg"></i>
                            </div>
                            <span class="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Surveys</span>
                        </div>
                        <div onclick="switchTab('offers')" class="flex flex-col items-center gap-2 flex-1 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                <i class="fas fa-download text-lg"></i>
                            </div>
                            <span class="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Apps Install</span>
                        </div>
                        <div onclick="switchTab('offers')" class="flex flex-col items-center gap-2 flex-1 cursor-pointer active:scale-95 transition-transform">
                            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                <i class="fas fa-check-circle text-lg"></i>
                            </div>
                            <span class="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Simple Task</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center px-1">
                        <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight">Earning Guidelines</h3>
                        <button onclick="goToSupport()" class="text-orange-500 text-[11px] font-semibold">Help Center</button>
                    </div>

                    <div class="space-y-4">
                        <div class="guideline-section">
                            <h4 class="guideline-title">1. Verified Activities Only</h4>
                            <p class="guideline-text">Every task (following social media, watching videos, or taking surveys) is monitored. You must stay on the task page until it is completed. Use of VPNs or ad-blockers is strictly prohibited.</p>
                        </div>
                        <div class="guideline-section">
                            <h4 class="guideline-title">2. Referral System</h4>
                            <p class="guideline-text">Share your unique referral link to earn a commission when your friends complete their first task. Self-referrals are detected and accounts will be banned.</p>
                        </div>
                        <div class="guideline-section">
                            <h4 class="guideline-title">3. Fair Play & Security</h4>
                            <p class="guideline-text">Do not use automated bots or scripts. Capacity Hub staff will never ask for your password or Transaction PIN.</p>
                        </div>
                        <div class="guideline-section">
                            <h4 class="guideline-title">4. Withdrawal Rules</h4>
                            <p class="guideline-text">Minimum withdrawal amounts apply. Payments are processed within 24 hours. Ensure your details are 100% correct.</p>
                        </div>
                    </div>
                </div>

                <!-- Offers View (Earn Section) -->
                <div id="view-offers" class="hidden space-y-6">
                    <div>
                        <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight mb-4 text-center">TASK WALL</h3>
                        <div class="py-10 text-center">
                            <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                                <i class="fas fa-hourglass-half text-slate-300"></i>
                            </div>
                            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">New Tasks Incoming</p>
                            <p class="text-[10px] text-slate-400 mt-1">Check back later for new opportunities.</p>
                        </div>
                    </div>
                </div>

                <!-- Wallet View -->
                <div id="view-wallet" class="hidden space-y-5 pt-4">
                    <div id="wallet-main-display" class="space-y-6 text-center max-w-sm mx-auto">
                        <div class="space-y-3">
                            <div class="w-12 h-12 orange-gradient rounded-full flex items-center justify-center mx-auto shadow-sm"><i class="fas fa-wallet text-white text-lg"></i></div>
                            <div>
                                <h2 class="text-2xl font-black text-slate-900" id="balance-main">₦0.00</h2>
                                <p class="text-slate-500 text-[10px] mt-0.5 font-bold uppercase tracking-wide">Capacity Wallet Balance</p>
                            </div>
                            <button onclick="openWithdrawalModal('Capacity Wallet')" class="w-full bg-orange-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-xs shadow-md shadow-orange-500/10 active:scale-[0.98] transition-transform">
                                <i class="fas fa-university text-[10px]"></i> Withdrawal
                            </button>
                        </div>
                        <div class="bg-slate-50 p-5 rounded-2xl border border-dashed border-slate-200">
                            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Redeem Code</h3>
                            <div class="flex flex-col gap-2">
                                <input type="text" id="redemption-code" class="redemption-input" placeholder="ENTER CODE HERE" oninput="this.value = this.value.toUpperCase()">
                                <button onclick="applyRedemption()" class="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-xs active:scale-[0.98] transition-transform">Apply Code</button>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div class="w-12 h-12 orange-gradient rounded-full flex items-center justify-center mx-auto shadow-sm"><i class="fas fa-ticket-alt text-white text-lg"></i></div>
                            <div>
                                <h2 class="text-2xl font-black text-slate-900" id="balance-redemption">₦0.00</h2>
                                <p class="text-slate-500 text-[10px] mt-0.5 font-bold uppercase tracking-wide">Capacity Redemption Balance</p>
                            </div>
                            <button onclick="openWithdrawalModal('Capacity Redemption')" class="w-full bg-orange-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-xs active:scale-[0.98] transition-transform shadow-md shadow-orange-500/10">
                                <i class="fas fa-university text-[10px]"></i> Withdrawal
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Profile View -->
                <div id="view-profile" class="hidden space-y-2 pt-8">
                    <div class="profile-item" onclick="openSupportModal()">
                        <div class="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mr-4"><i class="fas fa-headset text-orange-500 text-xs"></i></div>
                        <div class="flex-1"><h4 class="font-bold text-slate-800 text-xs">Customer Support</h4></div>
                        <i class="fas fa-chevron-right text-[10px] text-slate-300"></i>
                    </div>
                    <div class="footer-credits mt-12 mb-4">
                        Privacy policy | c 2026. Capacity Nigtech-All Rights Reserved.
                    </div>
                </div>
            </div>
        </main>

        <!-- Bottom Navigation -->
        <nav class="bottom-nav fixed bottom-0 left-0 right-0 px-6 py-3 flex justify-between items-center z-50 rounded-t-[1.5rem] shadow-lg">
            <button onclick="switchTab('dashboard')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-orange-500" id="nav-dashboard">
                <i class="fas fa-home nav-icon"></i><span class="nav-text uppercase font-bold">Home</span>
            </button>
            <button onclick="switchTab('offers')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-slate-400" id="nav-offers">
                <i class="fas fa-rocket nav-icon"></i><span class="nav-text uppercase font-bold">Earn</span>
            </button>
            <button onclick="switchTab('wallet')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-slate-400" id="nav-wallet">
                <i class="fas fa-wallet nav-icon"></i><span class="nav-text uppercase font-bold">Wallet</span>
            </button>
            <button onclick="switchTab('profile')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-slate-400" id="nav-profile">
                <i class="fas fa-user-circle nav-icon"></i><span class="nav-text uppercase font-bold">Profile</span>
            </button>
        </nav>
    </div>

    <!-- Modals -->
    <div id="modal-container" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-xs rounded-2xl p-6 transform scale-90 transition-transform" id="modal-content">
            <div id="modal-icon" class="w-12 h-12 rounded-xl orange-gradient mx-auto mb-4 flex items-center justify-center text-white text-lg"></div>
            <h3 id="modal-title" class="text-base font-bold text-center text-slate-900 mb-1"></h3>
            <div id="modal-body" class="mb-6 text-[11px] text-slate-500 text-center"></div>
            <button onclick="closeModal()" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs">Done</button>
        </div>
    </div>

    <!-- Support Modal Updated -->
    <div id="support-modal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-xs rounded-2xl p-6 transform scale-90 transition-transform">
            <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight mb-4 text-center">Customer Support</h3>
            <div class="space-y-2">
                <a href="mailto:capacitynigtech@gmail.com" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 active:bg-slate-100">
                    <i class="fas fa-envelope text-orange-500 w-4"></i>
                    <span class="text-[11px] font-bold text-slate-700">capacitynigtech@gmail.com</span>
                </a>
                <a href="tel:+2349018511585" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 active:bg-slate-100">
                    <i class="fas fa-phone text-orange-500 w-4"></i>
                    <span class="text-[11px] font-bold text-slate-700">+234 901 851 1585</span>
                </a>
                <a href="https://wa.me/2349018511585" target="_blank" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 active:bg-slate-100">
                    <i class="fab fa-whatsapp text-green-500 w-4 text-sm"></i>
                    <span class="text-[11px] font-bold text-slate-700">Chat on WhatsApp</span>
                </a>
            </div>
            <button onclick="closeSupportModal()" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs mt-6">Back</button>
        </div>
    </div>

    <div id="withdraw-modal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-sm rounded-2xl p-6 transform scale-90 transition-transform">
            <div class="flex justify-between items-center mb-4">
                <h3 id="withdraw-title" class="text-sm font-bold text-slate-800 uppercase tracking-tight">Withdraw Funds</h3>
                <button onclick="closeWithdrawModal()" class="text-slate-400"><i class="fas fa-times"></i></button>
            </div>
            <div id="withdraw-fields">
                <input type="number" id="w-acc-num" class="withdraw-input" placeholder="Account Number">
                <input type="text" id="w-acc-name" class="withdraw-input" placeholder="Account Name">
                <input type="text" id="w-bank-name" class="withdraw-input" placeholder="Bank Name">
                <input type="number" id="w-amount" class="withdraw-input" placeholder="Amount">
                <input type="password" id="w-pin" class="withdraw-input" placeholder="Transaction PIN" maxlength="4">
                <button onclick="processWithdrawal()" class="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Withdrawal</button>
            </div>
            <div id="withdraw-processing" class="hidden py-10 flex flex-col items-center">
                <div class="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p class="text-xs font-bold text-slate-600">Processing...</p>
            </div>
            <div id="withdraw-success" class="hidden text-center py-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-check"></i></div>
                <p class="text-[11px] leading-relaxed text-slate-600 font-medium">Processing. Received within 24 hours.</p>
                <button onclick="closeWithdrawModal()" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs mt-6">Close</button>
            </div>
        </div>
    </div>

    <!-- Transaction History Modal -->
    <div id="history-modal" class="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-sm rounded-3xl p-6 transform scale-90 transition-transform max-h-[80vh] flex flex-col">
            <div class="flex justify-between items-center mb-4 flex-shrink-0">
                <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight">Transaction History</h3>
                <button onclick="toggleHistory()" class="text-slate-400 p-2"><i class="fas fa-times"></i></button>
            </div>
            <div id="history-list" class="flex-grow overflow-y-auto space-y-1 pr-1">
                <!-- Items populated by JS -->
                <div class="text-center py-10 text-slate-400 text-[10px] font-bold uppercase tracking-widest">No Transactions Yet</div>
            </div>
            <button onclick="toggleHistory()" class="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-xs mt-4 flex-shrink-0">Close</button>
        </div>
    </div>

    <script>
        // --- CAPACITY HUB PERSISTENCE CORE ---

        let userData = {
            uid: "",
            phone: "",
            wallet_balance: 0, 
            redemption_balance: 0,
            history: [] // [ {title, amount, date, type: 'plus'|'minus'} ]
        };

        window.addEventListener('load', () => {
            const savedData = localStorage.getItem('capacity_hub_core_data');
            
            if (savedData) {
                userData = JSON.parse(savedData);
            } else {
                userData.uid = `UID-${Math.floor(10000000 + Math.random() * 90000000)}`;
                saveToPhone();
            }

            document.getElementById('user-uid-display').innerText = userData.uid;
            updateBalanceUI();
            updateHistoryUI();

            setTimeout(() => {
                const splash = document.getElementById('splash-screen');
                splash.classList.add('fade-out');
                
                setTimeout(() => {
                    splash.style.display = 'none';
                    document.getElementById('main-app').classList.remove('hidden');
                }, 500);
            }, 3000); 
        });

        function saveToPhone() {
            localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
        }

        function updateBalanceUI() {
            if (!userData) return;
            document.getElementById('balance-main').innerText = `₦${userData.wallet_balance.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            document.getElementById('balance-redemption').innerText = `₦${userData.redemption_balance.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            
            const uidBadge = document.getElementById('user-uid-display');
            if (uidBadge) uidBadge.innerText = userData.uid;
        }

        function addTransaction(title, amount, type) {
            const entry = {
                title: title,
                amount: amount,
                type: type, // 'plus' or 'minus'
                date: new Date().toLocaleString('en-NG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
            };
            userData.history.unshift(entry); // Newest first
            saveToPhone();
            updateHistoryUI();
            
            // Show notification dot if history is not open
            document.getElementById('notif-dot').classList.remove('hidden');
        }

        function updateHistoryUI() {
            const list = document.getElementById('history-list');
            if (userData.history.length === 0) {
                list.innerHTML = '<div class="text-center py-10 text-slate-400 text-[10px] font-bold uppercase tracking-widest">No Transactions Yet</div>';
                return;
            }

            list.innerHTML = userData.history.map(item => `
                <div class="history-item">
                    <div class="flex flex-col">
                        <span class="text-[11px] font-bold text-slate-800">${item.title}</span>
                        <span class="text-[9px] text-slate-400">${item.date}</span>
                    </div>
                    <span class="text-[11px] font-black ${item.type === 'plus' ? 'text-green-500' : 'text-red-500'}">
                        ${item.type === 'plus' ? '+' : '-'} ₦${item.amount.toLocaleString()}
                    </span>
                </div>
            `).join('');
        }

        function toggleHistory() {
            const modal = document.getElementById('history-modal');
            const isClosing = !modal.classList.contains('opacity-0');
            
            if (isClosing) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.children[0].classList.add('scale-90');
            } else {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modal.children[0].classList.remove('scale-90');
                document.getElementById('notif-dot').classList.add('hidden');
            }
        }

        function simulateEarning(amount, taskName) {
            userData.wallet_balance += amount;
            addTransaction(taskName || 'Task Reward', amount, 'plus');
            updateBalanceUI();
            showAction('Success', `Task verified. Earned ₦${amount}!`);
        }

        function processWithdrawal() {
            const amountInput = document.getElementById('w-amount');
            const amount = parseFloat(amountInput.value);
            const title = document.getElementById('withdraw-title').innerText;
            const isMain = title.includes('Wallet');
            const targetField = isMain ? 'wallet_balance' : 'redemption_balance';

            if (!amount || amount <= 0) return;
            
            if (userData[targetField] < amount) {
                showAction('Failed', 'Insufficient funds in this wallet.');
                return;
            }

            document.getElementById('withdraw-fields').classList.add('hidden');
            document.getElementById('withdraw-processing').classList.remove('hidden');
            
            setTimeout(() => {
                userData[targetField] -= amount;
                addTransaction(`Withdrawal (${isMain ? 'Main' : 'Redeem'})`, amount, 'minus');
                updateBalanceUI();
                document.getElementById('withdraw-processing').classList.add('hidden');
                document.getElementById('withdraw-success').classList.remove('hidden');
                amountInput.value = '';
            }, 2500);
        }

        function switchTab(tabId) {
            const views = ['dashboard', 'offers', 'wallet', 'profile'];
            views.forEach(v => {
                const viewEl = document.getElementById('view-' + v);
                const navEl = document.getElementById('nav-' + v);
                if(viewEl) viewEl.classList.add('hidden');
                if(navEl) navEl.classList.replace('text-orange-500', 'text-slate-400');
            });
            document.getElementById('view-' + tabId).classList.remove('hidden');
            document.getElementById('nav-' + tabId).classList.replace('text-slate-400', 'text-orange-500');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showAction(type, msg) {
            const modal = document.getElementById('modal-container');
            document.getElementById('modal-title').innerText = type;
            document.getElementById('modal-body').innerText = msg;
            document.getElementById('modal-icon').innerHTML = '<i class="fas fa-bell"></i>';
            modal.classList.remove('opacity-0', 'pointer-events-none');
            document.getElementById('modal-content').classList.remove('scale-90');
        }

        function closeModal() {
            document.getElementById('modal-container').classList.add('opacity-0', 'pointer-events-none');
            document.getElementById('modal-content').classList.add('scale-90');
        }

        function openSupportModal() {
            document.getElementById('support-modal').classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeSupportModal() {
            document.getElementById('support-modal').classList.add('opacity-0', 'pointer-events-none');
        }

        function openWithdrawalModal(walletName) {
            document.getElementById('withdraw-title').innerText = walletName;
            document.getElementById('withdraw-fields').classList.remove('hidden');
            document.getElementById('withdraw-processing').classList.add('hidden');
            document.getElementById('withdraw-success').classList.add('hidden');
            document.getElementById('withdraw-modal').classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeWithdrawModal() {
            document.getElementById('withdraw-modal').classList.add('opacity-0', 'pointer-events-none');
        }

        function applyRedemption() {
            showAction('Invalid', 'This redemption code is not active.');
        }

        function goToSupport() {
            switchTab('profile');
            setTimeout(() => openSupportModal(), 200);
        }
    </script>
</body>
</html>