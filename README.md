<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity Hub | Earn Instantly</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Archivo+Black&display=swap');
        
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

        .splash-welcome {
            font-size: 1.2rem;
            font-weight: 600;
            color: #64748b;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            opacity: 0;
            animation: fadeInDown 0.8s forwards 0.2s;
        }

        .splash-logo {
            font-family: 'Archivo Black', sans-serif;
            font-size: 2.5rem;
            color: #f97316; 
            font-style: italic;
            text-transform: uppercase;
            line-height: 1;
            letter-spacing: -0.02em;
            transform: skewX(-5deg); 
            opacity: 0;
            animation: fadeInUp 0.8s forwards 0.4s;
            text-align: center;
            white-space: nowrap;
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loading {
            0% { width: 0%; transform: translateX(-100%); }
            50% { width: 100%; transform: translateX(0); }
            100% { width: 0%; transform: translateX(100%); }
        }

        .orange-gradient {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }

        .glass-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
        }

        .bottom-nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            border-top: 1px solid #e2e8f0;
        }

        ::-webkit-scrollbar { display: none; }
        
        .fade-out {
            opacity: 0 !important;
            visibility: hidden !important;
        }

        .profile-item {
            display: flex;
            align-items: center;
            padding: 1.25rem;
            border-radius: 1.25rem;
            background: #f8fafc;
            margin-bottom: 0.75rem;
            transition: all 0.2s;
            cursor: pointer;
        }

        .profile-item:active {
            background: #f1f5f9;
            transform: scale(0.98);
        }

        .profile-item.disabled {
            cursor: default;
            opacity: 0.8;
        }
        
        .profile-item.disabled:active {
            transform: none;
            background: #f8fafc;
        }

        input {
            outline: none;
        }
        input:focus {
            border-color: #f97316;
        }

        .loader-ring {
            width: 48px;
            height: 48px;
            border: 5px solid #f3f3f3;
            border-bottom-color: #f97316;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body class="pb-24">

    <!-- Splash Screen -->
    <div id="splash-screen">
        <div class="splash-welcome">Welcome to</div>
        <div class="splash-logo">CAPACITY HUB</div>
        <div class="mt-12">
            <div class="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-orange-500 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
        </div>
    </div>

    <!-- Top Bar -->
    <nav class="p-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div>
            <h1 class="text-2xl font-black tracking-tighter text-slate-900">CAPACITY<span class="text-orange-500">HUB</span></h1>
        </div>
        <div class="flex items-center gap-3">
            <div onclick="showAction('Notifications')" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer relative active:scale-90 transition-transform">
                <i class="fas fa-bell"></i>
                <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="px-6 space-y-8">
        
        <div id="content-area">
            <!-- Dashboard View -->
            <div id="view-dashboard" class="space-y-6">
                <section class="orange-gradient p-8 rounded-[2rem] shadow-xl shadow-orange-500/20 relative overflow-hidden">
                    <div class="relative z-10">
                        <h2 class="text-white text-3xl font-bold mb-2">Ready to Earn?</h2>
                        <p class="text-orange-100 text-sm opacity-90 mb-6">Complete simple tasks and get paid instantly to your wallet.</p>
                        <button onclick="switchTab('offers')" class="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold shadow-md active:scale-95 transition-transform">
                            Start Earning
                        </button>
                    </div>
                    <i class="fas fa-wallet absolute -right-4 -bottom-4 text-white/10 text-9xl"></i>
                </section>

                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-800">Recommended For You</h3>
                    <button class="text-orange-500 text-sm font-semibold">View All</button>
                </div>

                <div class="glass-card p-4 rounded-2xl flex items-center gap-4">
                    <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
                        <i class="fas fa-gamepad text-2xl text-orange-500"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-800">Crypto Jumpers</h4>
                        <p class="text-xs text-slate-500">Play for 10 minutes</p>
                    </div>
                    <div class="text-right">
                        <span class="text-orange-600 font-bold">+500</span>
                        <p class="text-[10px] text-slate-400 uppercase font-bold">Points</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div onclick="switchTab('offers')" class="glass-card p-6 rounded-2xl text-center border-b-4 border-orange-500 cursor-pointer hover:bg-slate-50 transition-colors">
                        <i class="fas fa-tasks text-orange-500 text-2xl mb-2"></i>
                        <p class="text-sm font-bold text-slate-700">Surveys</p>
                    </div>
                    <div onclick="switchTab('offers')" class="glass-card p-6 rounded-2xl text-center border-b-4 border-blue-500 cursor-pointer hover:bg-slate-50 transition-colors">
                        <i class="fas fa-download text-blue-500 text-2xl mb-2"></i>
                        <p class="text-sm font-bold text-slate-700">App Installs</p>
                    </div>
                </div>
            </div>

            <!-- Offers View -->
            <div id="view-offers" class="hidden space-y-4">
                <h3 class="text-xl font-bold mb-4 text-slate-800">Task Wall</h3>
                <div class="space-y-3">
                    <div class="glass-card p-5 rounded-2xl flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <i class="fab fa-tiktok text-orange-500 text-xl"></i>
                            </div>
                            <div>
                                <p class="font-bold text-slate-800">Follow & Like</p>
                                <p class="text-xs text-slate-500">Social Task</p>
                            </div>
                        </div>
                        <button class="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold">200 pts</button>
                    </div>
                </div>
            </div>

            <!-- Wallet View -->
            <div id="view-wallet" class="hidden space-y-6 pt-8">
                <div id="wallet-main-display" class="space-y-8">
                    <div class="text-center space-y-4">
                        <div class="w-24 h-24 orange-gradient rounded-full flex items-center justify-center mx-auto shadow-xl">
                            <i class="fas fa-coins text-white text-4xl"></i>
                        </div>
                        <div>
                            <h2 class="text-4xl font-black text-slate-900">₦500</h2>
                            <p class="text-slate-500 mt-1 font-medium">Available for Withdrawal</p>
                        </div>
                        <button onclick="toggleWithdrawalForm(true)" class="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
                            <i class="fas fa-university"></i> Bank Transfer
                        </button>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Recent Transactions</h3>
                        <div class="space-y-3">
                            <div class="glass-card p-4 rounded-2xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <i class="fas fa-gift"></i>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 text-sm">Welcome Bonus</p>
                                        <p class="text-[10px] text-slate-400">Mar 15, 2024 • 14:20</p>
                                    </div>
                                </div>
                                <span class="text-green-600 font-bold text-sm">+₦500</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="withdrawal-form" class="hidden space-y-6 animate-[fadeInUp_0.3s_ease-out]">
                    <div class="flex items-center gap-4 mb-4">
                        <button onclick="toggleWithdrawalForm(false)" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <h2 class="text-xl font-bold text-slate-800">Withdrawal Details</h2>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="text-left">
                            <label class="text-xs font-bold text-slate-400 uppercase ml-2 mb-1 block tracking-wider">Bank Name</label>
                            <input type="text" placeholder="Enter bank name" class="w-full bg-slate-100 border border-transparent px-5 py-4 rounded-2xl text-slate-800 font-medium transition-all">
                        </div>
                        <div class="text-left">
                            <label class="text-xs font-bold text-slate-400 uppercase ml-2 mb-1 block tracking-wider">Account Number</label>
                            <input type="number" placeholder="10-digit number" class="w-full bg-slate-100 border border-transparent px-5 py-4 rounded-2xl text-slate-800 font-medium transition-all">
                        </div>
                        <div class="text-left">
                            <label class="text-xs font-bold text-slate-400 uppercase ml-2 mb-1 block tracking-wider">Account Name</label>
                            <input type="text" placeholder="Name on account" class="w-full bg-slate-100 border border-transparent px-5 py-4 rounded-2xl text-slate-800 font-medium transition-all">
                        </div>
                        <div class="text-left">
                            <label class="text-xs font-bold text-slate-400 uppercase ml-2 mb-1 block tracking-wider">Amount to Withdraw (₦)</label>
                            <input type="number" placeholder="Minimum ₦1,000" class="w-full bg-slate-100 border border-transparent px-5 py-4 rounded-2xl text-slate-800 font-medium transition-all">
                        </div>
                        <div class="text-left">
                            <label class="text-xs font-bold text-slate-400 uppercase ml-2 mb-1 block tracking-wider">Transaction PIN</label>
                            <input type="password" maxlength="4" placeholder="••••" class="w-full bg-slate-100 border border-transparent px-5 py-4 rounded-2xl text-slate-800 font-medium text-center tracking-[1em] transition-all">
                        </div>
                        
                        <button onclick="processWithdrawal()" id="withdraw-btn" class="w-full orange-gradient text-white py-5 rounded-2xl font-bold shadow-lg shadow-orange-500/30 mt-4 active:scale-[0.98] transition-transform">
                            Withdraw Now
                        </button>
                    </div>
                </div>

                <div id="withdrawal-loading" class="hidden py-16 text-center space-y-6">
                    <div class="loader-ring"></div>
                    <p class="text-slate-500 font-bold tracking-widest uppercase text-xs">Processing Transaction...</p>
                </div>

                <div id="withdrawal-success" class="hidden animate-[fadeInDown_0.4s_ease-out]">
                    <div class="bg-green-50 border border-green-200 p-6 rounded-[2rem] text-center">
                        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg shadow-green-200">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3 class="text-green-800 font-bold text-lg mb-2">Request Submitted!</h3>
                        <p class="text-green-700 text-sm leading-relaxed px-4">
                            Your withdrawal is being processed. If you didn't receive the money after <b>24 hours</b>, please contact our support services.
                        </p>
                        <button onclick="resetWalletView()" class="mt-6 text-green-800 font-bold text-sm uppercase tracking-widest border-b-2 border-green-200 pb-1">Back to Wallet</button>
                    </div>
                </div>
            </div>

            <!-- Profile View -->
            <div id="view-profile" class="hidden space-y-6">
                <div class="flex flex-col items-center py-4">
                    <div class="w-24 h-24 rounded-full orange-gradient p-1 mb-4">
                        <div class="w-full h-full rounded-full bg-white flex items-center justify-center">
                             <span class="text-3xl font-black text-orange-500">C</span>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900">Capacity Nigtech</h3>
                    <p class="text-slate-500 text-sm">Member since March 2024</p>
                </div>

                <div class="space-y-2">
                    <!-- Email/Phone (Disabled) -->
                    <div class="profile-item disabled">
                        <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-4">
                            <i class="fas fa-user-edit text-orange-600"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-slate-800">Email & Phone</h4>
                            <p class="text-xs text-slate-400">Update your contact details</p>
                        </div>
                        <i class="fas fa-lock text-slate-300 text-xs"></i>
                    </div>

                    <!-- Security (Disabled) -->
                    <div class="profile-item disabled">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                            <i class="fas fa-lock text-blue-600"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-slate-800">Security</h4>
                            <p class="text-xs text-slate-400">Update login password</p>
                        </div>
                        <i class="fas fa-lock text-slate-300 text-xs"></i>
                    </div>

                    <!-- Support (Functional) -->
                    <div class="profile-item" onclick="showAction('Support')">
                        <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <i class="fas fa-headset text-green-600"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-slate-800">Support</h4>
                            <p class="text-xs text-slate-400">Contact our tech team</p>
                        </div>
                        <i class="fas fa-chevron-right text-slate-300 text-sm"></i>
                    </div>

                    <!-- Log Out (Functional) -->
                    <div class="profile-item mt-8 border-t border-slate-100 pt-8" onclick="logout()">
                        <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4">
                            <i class="fas fa-sign-out-alt text-red-600"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-red-600">Log Out</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Custom Modal -->
    <div id="modal-container" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-white w-full max-w-sm rounded-3xl p-8 transform scale-90 transition-transform duration-300" id="modal-content">
            <div id="modal-icon" class="w-16 h-16 rounded-2xl orange-gradient mx-auto mb-6 flex items-center justify-center text-white text-2xl shadow-lg"></div>
            <h3 id="modal-title" class="text-xl font-bold text-center text-slate-900 mb-2"></h3>
            <div id="modal-body" class="mb-8"></div>
            <button onclick="closeModal()" class="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform">Close</button>
        </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav fixed bottom-0 left-0 right-0 px-8 py-4 flex justify-between items-center z-50 rounded-t-[2.5rem] shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
        <button onclick="switchTab('dashboard')" class="flex flex-col items-center gap-1 nav-btn text-orange-500" id="nav-dashboard">
            <i class="fas fa-home text-xl"></i>
            <span class="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button onclick="switchTab('offers')" class="flex flex-col items-center gap-1 nav-btn text-slate-400" id="nav-offers">
            <i class="fas fa-rocket text-xl"></i>
            <span class="text-[10px] font-bold uppercase tracking-widest">Earn</span>
        </button>
        <button onclick="switchTab('wallet')" class="flex flex-col items-center gap-1 nav-btn text-slate-400" id="nav-wallet">
            <i class="fas fa-wallet text-xl"></i>
            <span class="text-[10px] font-bold uppercase tracking-widest">Wallet</span>
        </button>
        <button onclick="switchTab('profile')" class="flex flex-col items-center gap-1 nav-btn text-slate-400" id="nav-profile">
            <i class="fas fa-user-circle text-xl"></i>
            <span class="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </button>
    </nav>

    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                const splash = document.getElementById('splash-screen');
                splash.classList.add('fade-out');
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 500);
            }, 2500);
        });

        function switchTab(tabId) {
            const views = ['dashboard', 'offers', 'wallet', 'profile'];
            views.forEach(view => {
                const element = document.getElementById('view-' + view);
                if (element) element.classList.add('hidden');
                
                const btn = document.getElementById('nav-' + view);
                if (btn) {
                    btn.classList.remove('text-orange-500');
                    btn.classList.add('text-slate-400');
                }
            });

            const activeView = document.getElementById('view-' + tabId);
            if (activeView) activeView.classList.remove('hidden');
            
            const activeBtn = document.getElementById('nav-' + tabId);
            if (activeBtn) {
                activeBtn.classList.add('text-orange-500');
                activeBtn.classList.remove('text-slate-400');
            }

            if (tabId === 'wallet') resetWalletView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.navigator.vibrate) window.navigator.vibrate(50);
        }

        function toggleWithdrawalForm(show) {
            document.getElementById('wallet-main-display').classList.toggle('hidden', show);
            document.getElementById('withdrawal-form').classList.toggle('hidden', !show);
            document.getElementById('withdrawal-success').classList.add('hidden');
            document.getElementById('withdrawal-loading').classList.add('hidden');
        }

        function processWithdrawal() {
            document.getElementById('withdrawal-form').classList.add('hidden');
            document.getElementById('withdrawal-loading').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('withdrawal-loading').classList.add('hidden');
                document.getElementById('withdrawal-success').classList.remove('hidden');
            }, 2000);
        }

        function resetWalletView() {
            document.getElementById('wallet-main-display').classList.remove('hidden');
            document.getElementById('withdrawal-form').classList.add('hidden');
            document.getElementById('withdrawal-success').classList.add('hidden');
            document.getElementById('withdrawal-loading').classList.add('hidden');
        }

        function showAction(type) {
            const modal = document.getElementById('modal-container');
            const content = document.getElementById('modal-content');
            const title = document.getElementById('modal-title');
            const body = document.getElementById('modal-body');
            const icon = document.getElementById('modal-icon');

            title.innerText = type;
            
            if (type === 'Support') {
                body.innerHTML = `
                    <div class="space-y-4 text-center">
                        <p class="text-slate-500 text-sm">Contact our support team via:</p>
                        <div class="flex flex-col gap-3">
                            <a href="mailto:capacitynigtech@gmail.com" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-slate-700 font-medium hover:bg-slate-100">
                                <i class="fas fa-envelope text-orange-500"></i>
                                <span>capacitynigtech@gmail.com</span>
                            </a>
                            <a href="tel:+2349018511585" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-slate-700 font-medium hover:bg-slate-100">
                                <i class="fas fa-phone-alt text-green-500"></i>
                                <span>+234 901 851 1585</span>
                            </a>
                            <a href="https://wa.me/2349018511585" target="_blank" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-slate-700 font-medium hover:bg-slate-100">
                                <i class="fab fa-whatsapp text-green-600"></i>
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>
                `;
                icon.innerHTML = '<i class="fas fa-headset"></i>';
            } else if (type === 'Notifications') {
                body.innerHTML = `
                    <div class="space-y-4">
                        <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
                            <p class="font-bold text-orange-800 text-sm">Welcome to Capacity Hub!</p>
                            <p class="text-xs text-orange-600 mt-1">Start completing tasks to earn points today.</p>
                        </div>
                    </div>
                `;
                icon.innerHTML = '<i class="fas fa-bell"></i>';
            }

            modal.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-90');
        }

        function closeModal() {
            const modal = document.getElementById('modal-container');
            const content = document.getElementById('modal-content');
            modal.classList.add('opacity-0', 'pointer-events-none');
            content.classList.add('scale-90');
        }

        function logout() {
            document.body.style.opacity = '0';
            setTimeout(() => {
                location.reload();
            }, 800);
        }
    </script>
</body>
</html>