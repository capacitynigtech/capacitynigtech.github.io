<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity Hub | Earn Instantly</title>
    <script>
        // Suppress Tailwind CDN production warning
        (function(){const w=console.warn;console.warn=function(){if(arguments[0]&&String(arguments[0]).includes('cdn.tailwindcss'))return;w.apply(console,arguments);};})();
    </script>
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

        .withdraw-input, .airtime-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 12px;
            margin-bottom: 10px;
            background: #f8fafc;
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

        .section-header {
            font-size: 12px;
            font-weight: 800;
            color: #1e293b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 10px;
            margin-left: 4px;
        }

        .asset-card {
            background: #ffffff;
            padding: 1.25rem 1rem;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .asset-card:active {
            background-color: #f8fafc;
        }
        .asset-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        /* Auth inputs */
        .auth-input {
            width: 100%;
            padding: 14px 16px;
            border: 1.5px solid #e2e8f0;
            border-radius: 14px;
            font-size: 13px;
            font-family: 'Inter', sans-serif;
            color: #1e293b;
            outline: none;
            background: #f8fafc;
            transition: border-color 0.2s, background 0.2s;
        }
        .auth-input:focus { border-color: #f97316; background: #fff; }
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

    <!-- Auth Screen -->
    <div id="auth-screen" class="hidden fixed inset-0 z-[200] bg-white overflow-y-auto">
        <div class="min-h-screen flex flex-col">

            <!-- Auth Header -->
            <div class="px-6 pt-10 pb-6 text-center">
                <h1 class="text-2xl font-black tracking-tighter text-slate-900">CAPACITY<span class="text-orange-500">HUB</span></h1>
                <p class="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Earn. Withdraw. Grow.</p>
            </div>

            <!-- Tab Toggle -->
            <div class="flex mx-6 bg-slate-100 rounded-2xl p-1 mb-6">
                <button id="tab-login-btn" onclick="showAuthTab('login')"
                    class="flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all bg-white text-slate-900 shadow-sm">
                    Login
                </button>
                <button id="tab-signup-btn" onclick="showAuthTab('signup')"
                    class="flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all text-slate-400">
                    Sign Up
                </button>
            </div>

            <!-- LOGIN FORM -->
            <div id="auth-login" class="px-6 flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input id="login-name" type="text" placeholder="Enter your full name"
                        class="auth-input" autocomplete="name">
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Password</label>
                    <div class="relative">
                        <input id="login-password" type="password" placeholder="Enter your password"
                            class="auth-input" style="padding-right:44px;" autocomplete="current-password">
                        <button type="button" onclick="toggleAuthPw('login-password', this)"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <p id="login-error" class="hidden text-[11px] text-red-500 font-bold text-center bg-red-50 border border-red-100 rounded-xl py-2.5 px-3">
                    Username or password are incorrect.
                </p>
                <button onclick="logIn()"
                    class="w-full bg-orange-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider mt-2 active:scale-[0.98] transition-transform shadow-lg shadow-orange-500/20">
                    Login
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-1">Don't have an account?
                    <span onclick="showAuthTab('signup')" class="text-orange-500 font-bold cursor-pointer">Sign Up</span>
                </p>
            </div>

            <!-- SIGNUP FORM -->
            <div id="auth-signup" class="hidden px-6 flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input id="signup-name" type="text" placeholder="Enter your full name"
                        class="auth-input" autocomplete="name">
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <div class="flex gap-2">
                        <div class="relative" style="width:110px;flex-shrink:0;">
                            <input id="signup-code" type="text" placeholder="+234"
                                class="auth-input" style="width:110px;"
                                oninput="filterCountryCodes(this.value)"
                                onfocus="showCountryDropdown()"
                                autocomplete="off">
                            <div id="country-dropdown"
                                class="hidden absolute left-0 top-full mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-y-auto"
                                style="width:260px;max-height:220px;">
                            </div>
                        </div>
                        <input id="signup-phone" type="tel" placeholder="Phone number"
                            class="auth-input flex-1" autocomplete="tel">
                    </div>
                    <p class="text-[9px] text-slate-400 font-bold">Type or search country code (e.g. +234). UID = your phone number only.</p>
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Password</label>
                    <div class="relative">
                        <input id="signup-password" type="password" placeholder="Create a password"
                            class="auth-input" style="padding-right:44px;" autocomplete="new-password">
                        <button type="button" onclick="toggleAuthPw('signup-password', this)"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Referral Code <span class="text-slate-300 normal-case font-bold">(Optional)</span></label>
                    <input id="signup-referral" type="text" placeholder="Enter referral code if you have one"
                        class="auth-input" autocomplete="off">
                </div>
                <p id="signup-error" class="hidden text-[11px] text-red-500 font-bold text-center bg-red-50 border border-red-100 rounded-xl py-2.5 px-3"></p>
                <button onclick="signUp()"
                    class="w-full bg-orange-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider mt-2 active:scale-[0.98] transition-transform shadow-lg shadow-orange-500/20">
                    Create Account
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-1">Already have an account?
                    <span onclick="showAuthTab('login')" class="text-orange-500 font-bold cursor-pointer">Login</span>
                </p>
            </div>

            <div class="px-6 pt-8 pb-6 text-center">
                <p class="text-[9px] text-slate-300 font-bold uppercase tracking-widest">Privacy Policy · c 2026 Capacity Nigtech</p>
            </div>
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
                <div class="flex flex-col items-end gap-0.5">
                    <div class="uid-badge" id="nav-balance-ngn" style="padding:3px 8px;font-size:9px;">₦0.00</div>
                    <div class="uid-badge" id="nav-balance-usdt" style="padding:3px 8px;font-size:9px;background:#f0fdf4;color:#16a34a;border-color:#bbf7d0;">0.00 USDT</div>
                </div>
            </div>
        </nav>

        <main class="px-4 space-y-4">
            <div id="content-area">
                <!-- Dashboard View -->
                <div id="view-dashboard" class="space-y-4">
                    
                    <div class="pt-2">
                        <h2 class="section-header">EARNING CATEGORIES</h2>
                        <div class="bg-[#f8fafc] border border-gray-100 p-6 rounded-[2.5rem] grid grid-cols-3 gap-y-8 gap-x-2 text-center shadow-sm">
                            
                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-robot text-2xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">AI</span>
                            </div>

                            <div onclick="handleInstallApp()" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-download text-xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Apps Install</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-dice text-2xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Betting</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fab fa-bitcoin text-2xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Crypto</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-graduation-cap text-xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Education</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-chart-line text-xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Forex</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-gamepad text-2xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Gaming</span>
                            </div>

                            <div onclick="handleSimpleTask()" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-check-circle text-xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Simple Task</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-cubes text-xl text-[#f97316]"></i>
                                </div>
                                <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-tight mt-3">Web3</span>
                            </div>

                        </div>
                    </div>

                    <div class="pt-2">
                        <h2 class="section-header">OUR SERVICES</h2>
                        <div class="grid grid-cols-3 gap-2">
                            <div onclick="openAirtimeModal()" class="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
                                <div class="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                    <i class="fas fa-phone-alt text-xs"></i>
                                </div>
                                <div class="text-center">
                                    <p class="text-[9px] font-bold text-slate-700 uppercase tracking-tighter">Airtime</p>
                                </div>
                            </div>
                            <div onclick="showAction('Feature', 'Data Top-up coming soon!')" class="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
                                <div class="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                    <i class="fas fa-wifi text-xs"></i>
                                </div>
                                <div class="text-center">
                                    <p class="text-[9px] font-bold text-slate-700 uppercase tracking-tighter">Data</p>
                                </div>
                            </div>
                            <div onclick="switchTab('assets')" class="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
                                <div class="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm text-orange-500 border border-orange-50">
                                    <i class="fas fa-university text-xs"></i>
                                </div>
                                <div class="text-center">
                                    <p class="text-[9px] font-bold text-slate-700 uppercase tracking-tighter">Withdrawal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between items-center px-1 pt-2">
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

                <!-- Offers View -->
                <div id="view-offers" class="hidden space-y-6">
                    <div>
                        <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight mb-4 text-center">TASK WALL</h3>
                        <div id="app-install-container" class="space-y-3 hidden">
                            <div class="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer active:bg-slate-100" onclick="openTaskDetails('metapass')">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white"><i class="fas fa-earth-africa"></i></div>
                                    <div>
                                        <p class="text-[11px] font-bold text-slate-800">Meta Earth Wallet</p>
                                        <p class="text-[9px] text-slate-500">Install & Verify KYC</p>
                                    </div>
                                </div>
                                <span class="text-[10px] font-black text-orange-500">₦500</span>
                            </div>
                        </div>
                        <div id="empty-earn-placeholder" class="py-10 text-center">
                            <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                                <i class="fas fa-hourglass-half text-slate-300"></i>
                            </div>
                            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">More Tasks Incoming</p>
                            <p class="text-[10px] text-slate-400 mt-1">Check back later for new opportunities.</p>
                        </div>
                    </div>
                </div>

                <!-- Assets View -->
                <div id="view-assets" class="hidden space-y-5 pt-4">
                    <div id="wallet-main-display" class="space-y-6 max-w-sm mx-auto">
                        
                        <div class="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Assets Portfolio</p>
                            <div class="flex items-baseline justify-center gap-1.5">
                                <h2 class="text-3xl font-black text-slate-900" id="total-portfolio-value">₦0.00</h2>
                                <span class="text-xs font-bold text-slate-400">NGN</span>
                            </div>
                            <p class="text-[10px] text-slate-400 font-bold mt-1" id="total-portfolio-value-usd">≈ 0.00 USD</p>
                        </div>

                        <div class="space-y-1">
                            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Account Assets</h3>
                            
                            <!-- 1. Tether USDT -->
                            <div onclick="openWithdrawalModal('Tether USDT')" class="asset-card">
                                <div class="flex items-center gap-4">
                                    <div class="asset-icon bg-[#26A17B]/10 text-[#26A17B] shadow-sm">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-extrabold text-slate-800 text-sm leading-tight">USDT</h4>
                                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Tether</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p id="balance-usdt" class="font-black text-slate-800 text-sm">0.00</p>
                                    <p id="balance-usdt-fiat" class="text-[10px] text-slate-400 font-bold mt-0.5">≈ 0.00 USD</p>
                                </div>
                            </div>

                            <!-- 2. Naira NGN -->
                            <div onclick="openWithdrawalModal('Naira NGN')" class="asset-card">
                                <div class="flex items-center gap-4">
                                    <div class="asset-icon bg-orange-500/10 text-[#f97316] shadow-sm">
                                        <span class="text-sm font-extrabold">₦</span>
                                    </div>
                                    <div>
                                        <h4 class="font-extrabold text-slate-800 text-sm leading-tight">NGN</h4>
                                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Naira NGN</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p id="balance-naira" class="font-black text-slate-800 text-sm">₦0.00</p>
                                    <p id="balance-naira-fiat" class="text-[10px] text-slate-400 font-bold mt-0.5">≈ 0.00 USD</p>
                                </div>
                            </div>

                            <!-- 3. CPH -->
                            <div class="asset-card">
                                <div class="flex items-center gap-4">
                                    <div class="asset-icon bg-slate-900 text-white shadow-sm">
                                        <i class="fas fa-bolt text-xs text-orange-500"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-extrabold text-slate-800 text-sm leading-tight">CPH</h4>
                                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">CPH/USDT/NGN</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p id="balance-cph" class="font-black text-slate-800 text-sm">0.00</p>
                                    <p id="balance-cph-fiat" class="text-[10px] text-slate-400 font-bold mt-0.5">≈ 0.00 USD</p>
                                </div>
                            </div>
                        </div>

                        <!-- Redeem Code -->
                        <div class="bg-slate-50 p-5 rounded-2xl border border-dashed border-slate-200 mt-6">
                            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Redeem Code</h3>
                            <div class="flex flex-col gap-2">
                                <input type="text" id="redemption-code" class="redemption-input" placeholder="ENTER CODE HERE" oninput="this.value = this.value.toUpperCase()">
                                <button onclick="applyRedemption()" class="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-xs active:scale-[0.98] transition-transform">Apply Code</button>
                            </div>
                        </div>

                        <!-- Swap Feature -->
                        <div class="bg-slate-50 p-5 rounded-2xl border border-dashed border-slate-200 mt-4">
                            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Swap</h3>
                            <button onclick="openSwapModal()" class="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-xs active:scale-[0.98] transition-transform">Swap Assets</button>
                        </div>

                    </div>
                </div>

                <!-- Profile View -->
                <div id="view-profile" class="hidden space-y-2 pt-4">

                    <!-- User Info Card -->
                    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-2">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-xl" id="profile-avatar">U</div>
                            <div>
                                <p class="font-black text-slate-900 text-sm" id="profile-name">User</p>
                                <p class="text-[10px] text-slate-400 font-bold mt-0.5" id="profile-uid">UID: —</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-white rounded-xl p-3 border border-slate-100">
                                <p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">NGN Balance</p>
                                <p class="text-sm font-black text-slate-900" id="profile-ngn">₦0.00</p>
                            </div>
                            <div class="bg-white rounded-xl p-3 border border-slate-100">
                                <p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">USDT Balance</p>
                                <p class="text-sm font-black text-slate-900" id="profile-usdt">0.00</p>
                            </div>
                        </div>
                    </div>

                    <!-- Referral Section -->
                    <div class="bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-5 mb-2">
                        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Your Referral ID</h3>
                        <p class="text-[10px] text-slate-400 mb-3">Share your phone number as your referral code and earn when friends join.</p>
                        <div class="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-3">
                            <span class="flex-1 text-xs font-black text-orange-500 tracking-wider" id="profile-referral-code">—</span>
                            <button onclick="copyReferralCode()" class="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold active:scale-95 transition-transform">COPY</button>
                        </div>
                    </div>

                    <!-- Task Progress -->
                    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-2">
                        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Task Progress</h3>
                        <div id="profile-task-progress">
                            <div class="text-center py-4">
                                <p class="text-[10px] text-slate-400 font-bold">No task submissions yet.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Customer Support -->
                    <div class="profile-item" onclick="openSupportModal()">
                        <div class="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mr-4"><i class="fas fa-headset text-orange-500 text-xs"></i></div>
                        <div class="flex-1"><h4 class="font-bold text-slate-800 text-xs">Customer Support</h4></div>
                        <i class="fas fa-chevron-right text-[10px] text-slate-300"></i>
                    </div>

                    <!-- Log Out -->
                    <div class="profile-item" onclick="logOut()" style="border:1px solid #fee2e2;background:#fff5f5;">
                        <div class="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center mr-4"><i class="fas fa-right-from-bracket text-red-500 text-xs"></i></div>
                        <div class="flex-1"><h4 class="font-bold text-red-500 text-xs">Log Out</h4></div>
                        <i class="fas fa-chevron-right text-[10px] text-red-200"></i>
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
                <i class="fas fa-rocket nav-icon"></i><span class="nav-text uppercase font-bold">Tasks</span>
            </button>
            <button onclick="switchTab('assets')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-slate-400" id="nav-assets">
                <i class="fas fa-wallet nav-icon"></i><span class="nav-text uppercase font-bold">Assets</span>
            </button>
            <button onclick="switchTab('profile')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-slate-400" id="nav-profile">
                <i class="fas fa-user-circle nav-icon"></i><span class="nav-text uppercase font-bold">Profile</span>
            </button>
        </nav>
    </div>

    <!-- Action Modal -->
    <div id="modal-container" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-xs rounded-2xl p-6 transform scale-90 transition-transform" id="modal-content">
            <div id="modal-icon" class="w-12 h-12 rounded-xl orange-gradient mx-auto mb-4 flex items-center justify-center text-white text-lg"></div>
            <h3 id="modal-title" class="text-base font-bold text-center text-slate-900 mb-1"></h3>
            <div id="modal-body" class="mb-6 text-[11px] text-slate-500 text-center"></div>
            <button onclick="closeModal()" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs">Done</button>
        </div>
    </div>

    <!-- Airtime Modal -->
    <div id="airtime-modal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-sm rounded-3xl p-6 transform scale-90 transition-transform shadow-2xl">
            <div class="flex justify-between items-center mb-5">
                <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight">Airtime Top-up</h3>
                <button onclick="closeAirtimeModal()" class="text-slate-400 p-1"><i class="fas fa-times"></i></button>
            </div>
            <div id="airtime-form">
                <div class="space-y-3">
                    <input type="tel" id="a-phone" class="airtime-input" placeholder="Mobile Number (e.g. 081...)">
                    <div class="relative">
                        <select id="a-network" class="airtime-input appearance-none">
                            <option value="" disabled selected>Select Network</option>
                            <option value="MTN">MTN</option>
                            <option value="Airtel">Airtel</option>
                            <option value="Glo">Glo</option>
                            <option value="9mobile">9mobile</option>
                            <option value="Capacity SIM">Capacity SIM</option>
                        </select>
                        <i class="fas fa-chevron-down absolute right-3 top-3 text-slate-400 pointer-events-none text-[10px]"></i>
                    </div>
                    <input type="number" id="a-amount" class="airtime-input" placeholder="Airtime Amount (₦)">
                    <input type="password" id="a-pin" class="airtime-input" placeholder="Payment Password" maxlength="8">
                    <button onclick="processAirtime()" class="w-full bg-orange-500 text-white py-3.5 rounded-2xl font-bold text-xs mt-2 shadow-lg shadow-orange-500/10 active:scale-95 transition-transform">Top up</button>
                </div>
            </div>
            <div id="airtime-processing" class="hidden py-12 flex flex-col items-center">
                <div class="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p class="text-xs font-bold text-slate-600 uppercase tracking-widest">Please Wait...</p>
                <p class="text-[10px] text-slate-400 mt-2">Verifying Transaction</p>
            </div>
            <div id="airtime-success" class="hidden text-center py-8">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <i class="fas fa-check text-xl"></i>
                </div>
                <h4 class="text-sm font-bold text-slate-800 uppercase mb-2">Top up Successful</h4>
                <p class="text-[11px] text-slate-500 leading-relaxed px-4">Your airtime request has been processed successfully. Check your balance shortly.</p>
                <button onclick="closeAirtimeModal()" class="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-xs mt-8">Great</button>
            </div>
        </div>
    </div>

    <!-- Task Details Modal -->
    <div id="task-details-modal" class="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-black/60 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-xs rounded-2xl p-6 transform scale-90 transition-transform shadow-2xl overflow-y-auto max-h-[90vh]">
            <div class="w-12 h-12 orange-gradient rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-xl">
                <i id="task-icon-main" class="fas fa-rocket"></i>
            </div>
            <h3 id="task-title-main" class="text-base font-black text-slate-900 mb-2 text-center"></h3>
            <div class="bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100">
                <p id="task-desc-main" class="text-[11px] text-slate-600 leading-relaxed mb-3"></p>
                <div id="task-warning-box" class="bg-red-50 border border-red-100 p-3 rounded-lg hidden">
                    <p class="text-[10px] font-bold text-red-600 mb-1 uppercase tracking-tighter">Warning</p>
                    <p id="task-warning-text" class="text-[10px] text-red-500 leading-normal"></p>
                </div>
            </div>
            <div id="referral-code-box" class="mb-5 hidden">
                <p class="text-[9px] font-bold text-slate-400 uppercase text-center mb-1">Invitation Code</p>
                <div class="flex items-center gap-2 bg-orange-50 p-2 rounded-lg border border-orange-100">
                    <span class="flex-1 text-center font-black text-orange-600 tracking-widest text-sm" id="ref-code-value">y92x8cjd</span>
                    <button onclick="copyRefCode()" class="bg-orange-500 text-white px-3 py-1.5 rounded-md text-[10px] font-bold active:scale-95 transition-transform">COPY</button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <button id="task-action-btn" class="w-full orange-gradient text-white py-3.5 rounded-xl font-bold text-xs shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">Download App</button>
                <button onclick="closeTaskDetails()" class="w-full bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-xs active:scale-95 transition-transform">Back</button>
            </div>
        </div>
    </div>

    <!-- Support Modal -->
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

    <!-- Withdrawal Modal -->
    <div id="withdraw-modal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-sm rounded-2xl p-6 transform scale-90 transition-transform">
            <div class="flex justify-between items-center mb-4">
                <h3 id="withdraw-title" class="text-sm font-bold text-slate-800 uppercase tracking-tight">Withdraw Funds</h3>
                <button onclick="closeWithdrawModal()" class="text-slate-400"><i class="fas fa-times"></i></button>
            </div>
            <!-- Step 1 -->
            <div id="withdraw-fields">
                <div id="w-network-row" class="hidden" style="margin-bottom:10px;">
                    <select id="w-network" class="withdraw-input" style="margin-bottom:0;">
                        <option value="BEP20">BEP20 (Binance Smart Chain)</option>
                    </select>
                </div>
                <div id="w-bank-fields">
                    <input type="number" id="w-acc-num" class="withdraw-input" placeholder="Account Number">
                    <input type="text" id="w-acc-name" class="withdraw-input" placeholder="Account Name">
                    <input type="text" id="w-bank-name" class="withdraw-input" placeholder="Bank Name">
                </div>
                <div id="w-usdt-address-row" class="hidden" style="margin-bottom:10px;">
                    <input type="text" id="w-wallet-address" class="withdraw-input" placeholder="Wallet Address" style="margin-bottom:0;">
                </div>
                <input type="number" id="w-amount" class="withdraw-input" placeholder="Amount">
                <input type="password" id="w-pin" class="withdraw-input" placeholder="Transaction PIN" maxlength="4">
                <button id="w-proceed-btn" onclick="proceedUSDT()" class="hidden w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Proceed</button>
                <button id="w-ngn-proceed-btn" onclick="proceedNGN()" class="hidden w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Proceed</button>
                <button id="w-withdraw-btn" onclick="processWithdrawal()" class="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Withdrawal</button>
            </div>
            <!-- Step 2 -->
            <div id="withdraw-step2" class="hidden">
                <input type="password" id="w-login-password" class="withdraw-input" placeholder="Login Password">
                <button onclick="processWithdrawal()" class="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Withdrawal</button>
            </div>
            <div id="withdraw-processing" class="hidden py-10 flex flex-col items-center">
                <div class="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p class="text-xs font-bold text-slate-600">Processing...</p>
            </div>
            <div id="withdraw-success" class="hidden text-center py-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-check"></i></div>
                <p class="text-[11px] leading-relaxed text-slate-600 font-medium">Your transaction was successful, contact our support if you did not receive your funds within 24 hours.</p>
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
                <div class="text-center py-10 text-slate-400 text-[10px] font-bold uppercase tracking-widest">No Transactions Yet</div>
            </div>
            <button onclick="toggleHistory()" class="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-xs mt-4 flex-shrink-0">Close</button>
        </div>
    </div>

    <!-- Swap Modal -->
    <div id="swap-modal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 opacity-0 pointer-events-none transition-opacity">
        <div class="bg-white w-full max-w-sm rounded-2xl p-6 transform scale-90 transition-transform">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight">Swap</h3>
                <button onclick="closeSwapModal()" class="text-slate-400"><i class="fas fa-times"></i></button>
            </div>
            <div id="swap-form">
                <div class="flex gap-2 mb-4">
                    <button id="swap-btn-usdt-ngn" onclick="setSwapDirection('usdt-ngn')" class="flex-1 py-2 rounded-xl font-bold text-xs border border-orange-500 bg-orange-500 text-white transition-colors">USDT → NGN</button>
                    <button id="swap-btn-ngn-usdt" onclick="setSwapDirection('ngn-usdt')" class="flex-1 py-2 rounded-xl font-bold text-xs border border-orange-500 bg-white text-orange-500 transition-colors">NGN → USDT</button>
                </div>
                <p id="swap-rate-label" class="text-[10px] text-slate-400 font-bold text-center mb-3">Rate: 1 USDT = ₦1,500</p>
                <input type="number" id="swap-amount" class="withdraw-input" placeholder="Amount to swap">
                <p id="swap-preview" class="text-[10px] text-slate-400 font-semibold text-center mb-3">You will receive: —</p>
                <button onclick="processSwap()" class="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-xs mt-2">Swap</button>
            </div>
            <div id="swap-processing" class="hidden py-10 flex flex-col items-center">
                <div class="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p class="text-xs font-bold text-slate-600">Processing...</p>
            </div>
            <div id="swap-success" class="hidden text-center py-4">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-check"></i></div>
                <p class="text-[11px] leading-relaxed text-slate-600 font-medium">Your transaction was successful, contact our support if you did not receive your funds within 24 hours.</p>
                <button onclick="closeSwapModal()" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-xs mt-6">Close</button>
            </div>
        </div>
    </div>

    <script>
        // ══════════════════════════════════════════
        // TELEGRAM BOT CONFIG
        // Bot A (Signups):  8871153618:AAEpnVzycmv5Mn2-gKZ19p44Qj0gWT7NC-4
        // Bot B (Tasks):    8913775751:AAFBPFztDFbA9FqJwtDwvo1ymFXQwVaRqGs
        // Bot C (Withdraw): 8809856569:AAEEVItQkMLf6qsyE5TTIbU-UqRGF6b-dvI
        // Admin Chat ID:    7289939366
        // ══════════════════════════════════════════
        const TG_ADMIN_CHAT = '7289939366';
        const TG_BOT_A = '8871153618:AAEpnVzycmv5Mn2-gKZ19p44Qj0gWT7NC-4'; // Signups
        const TG_BOT_B = '8913775751:AAFBPFztDFbA9FqJwtDwvo1ymFXQwVaRqGs'; // Tasks
        const TG_BOT_C = '8809856569:AAEEVItQkMLf6qsyE5TTIbU-UqRGF6b-dvI'; // Withdrawals

        function tgSend(botToken, chatId, text) {
            // Use Image src — completely bypasses CORS (browsers never block image GETs).
            // Telegram receives the GET and delivers the message normally.
            try {
                const url = 'https://api.telegram.org/bot' + botToken + '/sendMessage'
                    + '?chat_id=' + encodeURIComponent(chatId)
                    + '&parse_mode=HTML'
                    + '&text=' + encodeURIComponent(text);
                const img = new Image();
                img.src = url;
            } catch(e) { console.warn('tgSend error:', e.message); }
        }

        const INACTIVITY_MS = 5 * 60 * 1000;

        let userData = {
            uid:'', name:'', phone:'', password:'', referral:'', country:'',
            wallet_balance:0, redemption_balance:0, usdt_balance:0,
            history:[], loggedIn:false
        };

        // ── Init: no Supabase needed ──
        function initSupabase() {
            // Supabase removed — using localStorage + Telegram bots
            console.log('✅ Storage ready (localStorage)');
        }

        // ══════════════════════════════════════════
        // LOCAL STORAGE USER REGISTRY (replaces Supabase)
        // ══════════════════════════════════════════
        function lsGetAllUsers() {
            try { return JSON.parse(localStorage.getItem('ch_all_users') || '[]'); } catch(e) { return []; }
        }
        function lsSaveAllUsers(users) {
            localStorage.setItem('ch_all_users', JSON.stringify(users));
        }
        function lsSaveUser() {
            if (!userData.uid) return;
            const users = lsGetAllUsers();
            const idx = users.findIndex(u => u.uid === userData.uid);
            const record = {
                uid: userData.uid, name: userData.name||'',
                phone: userData.phone||'', password: userData.password||'',
                referral: userData.referral||'', country: userData.country||'',
                wallet_balance: userData.wallet_balance||0,
                usdt_balance: userData.usdt_balance||0,
                redemption_balance: userData.redemption_balance||0,
                history: userData.history||[],
                created: userData.created||new Date().toLocaleDateString('en-NG')
            };
            if (idx >= 0) users[idx] = record; else users.push(record);
            lsSaveAllUsers(users);
        }
        function lsPhoneExists(phone) {
            return lsGetAllUsers().some(u => u.phone === phone);
        }
        function lsLogin(name, password) {
            return lsGetAllUsers().find(u =>
                u.name && u.name.toLowerCase() === name.toLowerCase() && u.password === password
            ) || null;
        }
        // No-op stubs so remaining code does not break
        function startUserListener() {}
        function startAppMetaListener() {}

                // ══════════════════════════════════════════
        // LOCAL CACHE HELPERS
        // ══════════════════════════════════════════
        function saveToPhone() {
            localStorage.setItem('capacity_hub_core_data', JSON.stringify({...userData, loggedIn:true}));
            lsSaveUser();
        }

        function loadAdminDB() {
            try { return JSON.parse(localStorage.getItem('ch_admin_db')||'null'); } catch(e) { return null; }
        }

        function saveAdminDB(data) {
            localStorage.setItem('ch_admin_db', JSON.stringify(data));
        }

        function getRate() {
            const db = loadAdminDB();
            return (db && db.usd_rate) ? Number(db.usd_rate) : 1500;
        }

        function syncUserToAdminDB() { lsSaveUser(); }

        // ══════════════════════════════════════════
        // BOOT — completely independent of Supabase
        // ══════════════════════════════════════════
        function bootSplash() {
            // 1. Restore saved user data immediately
            try {
                const saved = localStorage.getItem('capacity_hub_core_data');
                if (saved) {
                    userData = JSON.parse(saved);
                    if (!userData.usdt_balance) userData.usdt_balance = 0;
                }
            } catch(e) {}

            // 2. Wire up swap input
            const swapInput = document.getElementById('swap-amount');
            if (swapInput) swapInput.addEventListener('input', updateSwapPreview);

            // 3. Poll for local cache updates every 5s
            setInterval(pollDashboardUpdates, 5000);

            // 4. Start Supabase in parallel — never blocks splash
            initSupabase();

            // 5. Hide splash after exactly 3 seconds — NOTHING can block this
            const splash = document.getElementById('splash-screen');
            if (!splash) { showNextScreen(); return; }

            setTimeout(() => {
                splash.style.transition = 'opacity 0.5s ease';
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.style.display = 'none';
                    showNextScreen();
                }, 500);
            }, 3000);
        }

        function showNextScreen() {
            try {
                const fresh = localStorage.getItem('capacity_hub_core_data');
                const parsed = fresh ? JSON.parse(fresh) : null;

                if (parsed && parsed.loggedIn) {
                    // Check 5-min inactivity
                    const leftAt = localStorage.getItem('ch_left_at');
                    if (leftAt && (Date.now() - parseInt(leftAt)) > INACTIVITY_MS) {
                        parsed.loggedIn = false;
                        localStorage.setItem('capacity_hub_core_data', JSON.stringify(parsed));
                        localStorage.removeItem('ch_left_at');
                        document.getElementById('auth-screen').classList.remove('hidden');
                        return;
                    }
                    // Show app immediately with local data
                    userData = { ...parsed };
                    document.getElementById('main-app').classList.remove('hidden');
                    updateBalanceUI();
                    updateHistoryUI();
                    renderTasksFromDashboard();
                    startInactivityWatcher();
                    // Refresh from local user registry
                    const fresh = lsGetAllUsers().find(u => u.uid === userData.uid);
                    if (fresh) {
                        userData = { ...fresh, loggedIn: true };
                        localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
                        updateBalanceUI();
                        updateHistoryUI();
                    }
                } else {
                    document.getElementById('auth-screen').classList.remove('hidden');
                }
            } catch(e) {
                console.error('showNextScreen error:', e.message);
                // Safety net — always show auth screen
                try { document.getElementById('auth-screen').classList.remove('hidden'); } catch(_) {}
            }
        }

        // Start boot when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bootSplash);
        } else {
            bootSplash();
        }

        function startFirestoreUserListener() { startUserListener(); }


        // ── AUTH FUNCTIONS ──
        function showAuthTab(tab) {
            const isLogin = tab === 'login';
            document.getElementById('auth-login').classList.toggle('hidden', !isLogin);
            document.getElementById('auth-signup').classList.toggle('hidden', isLogin);
            document.getElementById('tab-login-btn').className = `flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`;
            document.getElementById('tab-signup-btn').className = `flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${!isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`;
            document.getElementById('login-error').classList.add('hidden');
            document.getElementById('signup-error').classList.add('hidden');
        }

        function toggleAuthPw(inputId, btn) {
            const inp = document.getElementById(inputId);
            const show = inp.type === 'password';
            inp.type = show ? 'text' : 'password';
            btn.innerHTML = show ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
        }

        async function signUp() {
            const name = document.getElementById('signup-name').value.trim();
            const code = document.getElementById('signup-code').value.trim();
            const phone = document.getElementById('signup-phone').value.trim();
            const password = document.getElementById('signup-password').value;
            const referral = document.getElementById('signup-referral').value.trim();
            const errEl = document.getElementById('signup-error');

            if (!name) { errEl.textContent = 'Please enter your full name.'; errEl.classList.remove('hidden'); return; }
            if (!code || !code.startsWith('+')) { errEl.textContent = 'Please enter a valid country code (e.g. +234).'; errEl.classList.remove('hidden'); return; }
            if (!phone) { errEl.textContent = 'Please enter your phone number.'; errEl.classList.remove('hidden'); return; }
            if (!password || password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.classList.remove('hidden'); return; }
            errEl.classList.add('hidden');

            const fullPhone = code + phone;

            const doSignUp = async () => {
                userData = {
                    uid: phone, name, phone: fullPhone, password,
                    referral: referral || '',
                    country: getCountryFromCode(code),
                    wallet_balance: 0, usdt_balance: 0, redemption_balance: 0,
                    history: [], loggedIn: true,
                    created: new Date().toLocaleDateString('en-NG')
                };
                localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
                lsSaveUser();
                // Bot A — Signup notification
                tgSend(TG_BOT_A, TG_ADMIN_CHAT,
                    '🆕 <b>New Sign Up</b>\n' +
                    '👤 Name: ' + userData.name + '\n' +
                    '📱 Phone: ' + userData.phone + '\n' +
                    '🌍 Country: ' + userData.country + '\n' +
                    '🔗 Referral: ' + (userData.referral||'None') + '\n' +
                    '🕒 ' + new Date().toLocaleString('en-NG')
                );
                launchApp();
            };

            // Check duplicate phone
            const exists = lsPhoneExists(fullPhone);
            if (exists) {
                errEl.textContent = 'This phone number is already registered.';
                errEl.classList.remove('hidden');
                return;
            }
            doSignUp();
        }

        async function logIn() {
            const name = document.getElementById('login-name').value.trim();
            const password = document.getElementById('login-password').value;
            const errEl = document.getElementById('login-error');
            errEl.classList.add('hidden');
            if (!name || !password) { errEl.classList.remove('hidden'); return; }

            // Try local user registry first
            let match = lsLogin(name, password);

            // Fallback to local (same device)
            if (!match) {
                const local = localStorage.getItem('capacity_hub_core_data');
                if (local) {
                    try {
                        const p = JSON.parse(local);
                        if (p.name && p.name.toLowerCase() === name.toLowerCase() && p.password === password) {
                            match = p;
                        }
                    } catch(e) {}
                }
            }

            if (!match) { errEl.classList.remove('hidden'); return; }

            userData = {
                uid: match.uid || match.phone || '',
                name: match.name, phone: match.phone,
                password: match.password,
                referral: match.referral || '',
                country: match.country || 'Nigeria',
                wallet_balance: match.wallet_balance || 0,
                usdt_balance: match.usdt_balance || 0,
                redemption_balance: match.redemption_balance || 0,
                history: match.history || [],
                created: match.created || '',
                loggedIn: true
            };
            localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
            startUserListener();
            launchApp();
        }

        const ALL_COUNTRIES = [
            {code:'+93',flag:'🇦🇫',name:'Afghanistan'},{code:'+355',flag:'🇦🇱',name:'Albania'},{code:'+213',flag:'🇩🇿',name:'Algeria'},{code:'+1684',flag:'🇦🇸',name:'American Samoa'},{code:'+376',flag:'🇦🇩',name:'Andorra'},{code:'+244',flag:'🇦🇴',name:'Angola'},{code:'+1264',flag:'🇦🇮',name:'Anguilla'},{code:'+1268',flag:'🇦🇬',name:'Antigua & Barbuda'},{code:'+54',flag:'🇦🇷',name:'Argentina'},{code:'+374',flag:'🇦🇲',name:'Armenia'},{code:'+297',flag:'🇦🇼',name:'Aruba'},{code:'+61',flag:'🇦🇺',name:'Australia'},{code:'+43',flag:'🇦🇹',name:'Austria'},{code:'+994',flag:'🇦🇿',name:'Azerbaijan'},{code:'+1242',flag:'🇧🇸',name:'Bahamas'},{code:'+973',flag:'🇧🇭',name:'Bahrain'},{code:'+880',flag:'🇧🇩',name:'Bangladesh'},{code:'+1246',flag:'🇧🇧',name:'Barbados'},{code:'+375',flag:'🇧🇾',name:'Belarus'},{code:'+32',flag:'🇧🇪',name:'Belgium'},{code:'+501',flag:'🇧🇿',name:'Belize'},{code:'+229',flag:'🇧🇯',name:'Benin'},{code:'+1441',flag:'🇧🇲',name:'Bermuda'},{code:'+975',flag:'🇧🇹',name:'Bhutan'},{code:'+591',flag:'🇧🇴',name:'Bolivia'},{code:'+387',flag:'🇧🇦',name:'Bosnia & Herzegovina'},{code:'+267',flag:'🇧🇼',name:'Botswana'},{code:'+55',flag:'🇧🇷',name:'Brazil'},{code:'+246',flag:'🇮🇴',name:'British Indian Ocean Territory'},{code:'+1284',flag:'🇻🇬',name:'British Virgin Islands'},{code:'+673',flag:'🇧🇳',name:'Brunei'},{code:'+359',flag:'🇧🇬',name:'Bulgaria'},{code:'+226',flag:'🇧🇫',name:'Burkina Faso'},{code:'+257',flag:'🇧🇮',name:'Burundi'},{code:'+855',flag:'🇰🇭',name:'Cambodia'},{code:'+237',flag:'🇨🇲',name:'Cameroon'},{code:'+1',flag:'🇨🇦',name:'Canada'},{code:'+238',flag:'🇨🇻',name:'Cape Verde'},{code:'+1345',flag:'🇰🇾',name:'Cayman Islands'},{code:'+236',flag:'🇨🇫',name:'Central African Republic'},{code:'+235',flag:'🇹🇩',name:'Chad'},{code:'+56',flag:'🇨🇱',name:'Chile'},{code:'+86',flag:'🇨🇳',name:'China'},{code:'+61',flag:'🇨🇽',name:'Christmas Island'},{code:'+57',flag:'🇨🇴',name:'Colombia'},{code:'+269',flag:'🇰🇲',name:'Comoros'},{code:'+242',flag:'🇨🇬',name:'Congo'},{code:'+243',flag:'🇨🇩',name:'Congo (DRC)'},{code:'+682',flag:'🇨🇰',name:'Cook Islands'},{code:'+506',flag:'🇨🇷',name:'Costa Rica'},{code:'+385',flag:'🇭🇷',name:'Croatia'},{code:'+53',flag:'🇨🇺',name:'Cuba'},{code:'+599',flag:'🇨🇼',name:'Curaçao'},{code:'+357',flag:'🇨🇾',name:'Cyprus'},{code:'+420',flag:'🇨🇿',name:'Czech Republic'},{code:'+45',flag:'🇩🇰',name:'Denmark'},{code:'+253',flag:'🇩🇯',name:'Djibouti'},{code:'+1767',flag:'🇩🇲',name:'Dominica'},{code:'+1809',flag:'🇩🇴',name:'Dominican Republic'},{code:'+593',flag:'🇪🇨',name:'Ecuador'},{code:'+20',flag:'🇪🇬',name:'Egypt'},{code:'+503',flag:'🇸🇻',name:'El Salvador'},{code:'+240',flag:'🇬🇶',name:'Equatorial Guinea'},{code:'+291',flag:'🇪🇷',name:'Eritrea'},{code:'+372',flag:'🇪🇪',name:'Estonia'},{code:'+268',flag:'🇸🇿',name:'Eswatini'},{code:'+251',flag:'🇪🇹',name:'Ethiopia'},{code:'+500',flag:'🇫🇰',name:'Falkland Islands'},{code:'+298',flag:'🇫🇴',name:'Faroe Islands'},{code:'+679',flag:'🇫🇯',name:'Fiji'},{code:'+358',flag:'🇫🇮',name:'Finland'},{code:'+33',flag:'🇫🇷',name:'France'},{code:'+594',flag:'🇬🇫',name:'French Guiana'},{code:'+689',flag:'🇵🇫',name:'French Polynesia'},{code:'+241',flag:'🇬🇦',name:'Gabon'},{code:'+220',flag:'🇬🇲',name:'Gambia'},{code:'+995',flag:'🇬🇪',name:'Georgia'},{code:'+49',flag:'🇩🇪',name:'Germany'},{code:'+233',flag:'🇬🇭',name:'Ghana'},{code:'+350',flag:'🇬🇮',name:'Gibraltar'},{code:'+30',flag:'🇬🇷',name:'Greece'},{code:'+299',flag:'🇬🇱',name:'Greenland'},{code:'+1473',flag:'🇬🇩',name:'Grenada'},{code:'+590',flag:'🇬🇵',name:'Guadeloupe'},{code:'+1671',flag:'🇬🇺',name:'Guam'},{code:'+502',flag:'🇬🇹',name:'Guatemala'},{code:'+44',flag:'🇬🇬',name:'Guernsey'},{code:'+224',flag:'🇬🇳',name:'Guinea'},{code:'+245',flag:'🇬🇼',name:'Guinea-Bissau'},{code:'+592',flag:'🇬🇾',name:'Guyana'},{code:'+509',flag:'🇭🇹',name:'Haiti'},{code:'+504',flag:'🇭🇳',name:'Honduras'},{code:'+852',flag:'🇭🇰',name:'Hong Kong'},{code:'+36',flag:'🇭🇺',name:'Hungary'},{code:'+354',flag:'🇮🇸',name:'Iceland'},{code:'+91',flag:'🇮🇳',name:'India'},{code:'+62',flag:'🇮🇩',name:'Indonesia'},{code:'+98',flag:'🇮🇷',name:'Iran'},{code:'+964',flag:'🇮🇶',name:'Iraq'},{code:'+353',flag:'🇮🇪',name:'Ireland'},{code:'+44',flag:'🇮🇲',name:'Isle of Man'},{code:'+972',flag:'🇮🇱',name:'Israel'},{code:'+39',flag:'🇮🇹',name:'Italy'},{code:'+1876',flag:'🇯🇲',name:'Jamaica'},{code:'+81',flag:'🇯🇵',name:'Japan'},{code:'+44',flag:'🇯🇪',name:'Jersey'},{code:'+962',flag:'🇯🇴',name:'Jordan'},{code:'+7',flag:'🇰🇿',name:'Kazakhstan'},{code:'+254',flag:'🇰🇪',name:'Kenya'},{code:'+686',flag:'🇰🇮',name:'Kiribati'},{code:'+383',flag:'🇽🇰',name:'Kosovo'},{code:'+965',flag:'🇰🇼',name:'Kuwait'},{code:'+996',flag:'🇰🇬',name:'Kyrgyzstan'},{code:'+856',flag:'🇱🇦',name:'Laos'},{code:'+371',flag:'🇱🇻',name:'Latvia'},{code:'+961',flag:'🇱🇧',name:'Lebanon'},{code:'+266',flag:'🇱🇸',name:'Lesotho'},{code:'+231',flag:'🇱🇷',name:'Liberia'},{code:'+218',flag:'🇱🇾',name:'Libya'},{code:'+423',flag:'🇱🇮',name:'Liechtenstein'},{code:'+370',flag:'🇱🇹',name:'Lithuania'},{code:'+352',flag:'🇱🇺',name:'Luxembourg'},{code:'+853',flag:'🇲🇴',name:'Macau'},{code:'+261',flag:'🇲🇬',name:'Madagascar'},{code:'+265',flag:'🇲🇼',name:'Malawi'},{code:'+60',flag:'🇲🇾',name:'Malaysia'},{code:'+960',flag:'🇲🇻',name:'Maldives'},{code:'+223',flag:'🇲🇱',name:'Mali'},{code:'+356',flag:'🇲🇹',name:'Malta'},{code:'+692',flag:'🇲🇭',name:'Marshall Islands'},{code:'+596',flag:'🇲🇶',name:'Martinique'},{code:'+222',flag:'🇲🇷',name:'Mauritania'},{code:'+230',flag:'🇲🇺',name:'Mauritius'},{code:'+262',flag:'🇾🇹',name:'Mayotte'},{code:'+52',flag:'🇲🇽',name:'Mexico'},{code:'+691',flag:'🇫🇲',name:'Micronesia'},{code:'+373',flag:'🇲🇩',name:'Moldova'},{code:'+377',flag:'🇲🇨',name:'Monaco'},{code:'+976',flag:'🇲🇳',name:'Mongolia'},{code:'+382',flag:'🇲🇪',name:'Montenegro'},{code:'+1664',flag:'🇲🇸',name:'Montserrat'},{code:'+212',flag:'🇲🇦',name:'Morocco'},{code:'+258',flag:'🇲🇿',name:'Mozambique'},{code:'+95',flag:'🇲🇲',name:'Myanmar'},{code:'+264',flag:'🇳🇦',name:'Namibia'},{code:'+674',flag:'🇳🇷',name:'Nauru'},{code:'+977',flag:'🇳🇵',name:'Nepal'},{code:'+31',flag:'🇳🇱',name:'Netherlands'},{code:'+687',flag:'🇳🇨',name:'New Caledonia'},{code:'+64',flag:'🇳🇿',name:'New Zealand'},{code:'+505',flag:'🇳🇮',name:'Nicaragua'},{code:'+227',flag:'🇳🇪',name:'Niger'},{code:'+234',flag:'🇳🇬',name:'Nigeria'},{code:'+683',flag:'🇳🇺',name:'Niue'},{code:'+850',flag:'🇰🇵',name:'North Korea'},{code:'+389',flag:'🇲🇰',name:'North Macedonia'},{code:'+1670',flag:'🇲🇵',name:'Northern Mariana Islands'},{code:'+47',flag:'🇳🇴',name:'Norway'},{code:'+968',flag:'🇴🇲',name:'Oman'},{code:'+92',flag:'🇵🇰',name:'Pakistan'},{code:'+680',flag:'🇵🇼',name:'Palau'},{code:'+970',flag:'🇵🇸',name:'Palestine'},{code:'+507',flag:'🇵🇦',name:'Panama'},{code:'+675',flag:'🇵🇬',name:'Papua New Guinea'},{code:'+595',flag:'🇵🇾',name:'Paraguay'},{code:'+51',flag:'🇵🇪',name:'Peru'},{code:'+63',flag:'🇵🇭',name:'Philippines'},{code:'+48',flag:'🇵🇱',name:'Poland'},{code:'+351',flag:'🇵🇹',name:'Portugal'},{code:'+1787',flag:'🇵🇷',name:'Puerto Rico'},{code:'+974',flag:'🇶🇦',name:'Qatar'},{code:'+262',flag:'🇷🇪',name:'Réunion'},{code:'+40',flag:'🇷🇴',name:'Romania'},{code:'+7',flag:'🇷🇺',name:'Russia'},{code:'+250',flag:'🇷🇼',name:'Rwanda'},{code:'+290',flag:'🇸🇭',name:'Saint Helena'},{code:'+1869',flag:'🇰🇳',name:'Saint Kitts & Nevis'},{code:'+1758',flag:'🇱🇨',name:'Saint Lucia'},{code:'+508',flag:'🇵🇲',name:'Saint Pierre & Miquelon'},{code:'+1784',flag:'🇻🇨',name:'Saint Vincent & Grenadines'},{code:'+685',flag:'🇼🇸',name:'Samoa'},{code:'+378',flag:'🇸🇲',name:'San Marino'},{code:'+239',flag:'🇸🇹',name:'São Tomé & Príncipe'},{code:'+966',flag:'🇸🇦',name:'Saudi Arabia'},{code:'+221',flag:'🇸🇳',name:'Senegal'},{code:'+381',flag:'🇷🇸',name:'Serbia'},{code:'+248',flag:'🇸🇨',name:'Seychelles'},{code:'+232',flag:'🇸🇱',name:'Sierra Leone'},{code:'+65',flag:'🇸🇬',name:'Singapore'},{code:'+1721',flag:'🇸🇽',name:'Sint Maarten'},{code:'+421',flag:'🇸🇰',name:'Slovakia'},{code:'+386',flag:'🇸🇮',name:'Slovenia'},{code:'+677',flag:'🇸🇧',name:'Solomon Islands'},{code:'+252',flag:'🇸🇴',name:'Somalia'},{code:'+27',flag:'🇿🇦',name:'South Africa'},{code:'+82',flag:'🇰🇷',name:'South Korea'},{code:'+211',flag:'🇸🇸',name:'South Sudan'},{code:'+34',flag:'🇪🇸',name:'Spain'},{code:'+94',flag:'🇱🇰',name:'Sri Lanka'},{code:'+249',flag:'🇸🇩',name:'Sudan'},{code:'+597',flag:'🇸🇷',name:'Suriname'},{code:'+47',flag:'🇸🇯',name:'Svalbard & Jan Mayen'},{code:'+46',flag:'🇸🇪',name:'Sweden'},{code:'+41',flag:'🇨🇭',name:'Switzerland'},{code:'+963',flag:'🇸🇾',name:'Syria'},{code:'+886',flag:'🇹🇼',name:'Taiwan'},{code:'+992',flag:'🇹🇯',name:'Tajikistan'},{code:'+255',flag:'🇹🇿',name:'Tanzania'},{code:'+66',flag:'🇹🇭',name:'Thailand'},{code:'+670',flag:'🇹🇱',name:'Timor-Leste'},{code:'+228',flag:'🇹🇬',name:'Togo'},{code:'+690',flag:'🇹🇰',name:'Tokelau'},{code:'+676',flag:'🇹🇴',name:'Tonga'},{code:'+1868',flag:'🇹🇹',name:'Trinidad & Tobago'},{code:'+216',flag:'🇹🇳',name:'Tunisia'},{code:'+90',flag:'🇹🇷',name:'Turkey'},{code:'+993',flag:'🇹🇲',name:'Turkmenistan'},{code:'+1649',flag:'🇹🇨',name:'Turks & Caicos Islands'},{code:'+688',flag:'🇹🇻',name:'Tuvalu'},{code:'+256',flag:'🇺🇬',name:'Uganda'},{code:'+380',flag:'🇺🇦',name:'Ukraine'},{code:'+971',flag:'🇦🇪',name:'United Arab Emirates'},{code:'+44',flag:'🇬🇧',name:'United Kingdom'},{code:'+1',flag:'🇺🇸',name:'United States'},{code:'+598',flag:'🇺🇾',name:'Uruguay'},{code:'+998',flag:'🇺🇿',name:'Uzbekistan'},{code:'+678',flag:'🇻🇺',name:'Vanuatu'},{code:'+39',flag:'🇻🇦',name:'Vatican City'},{code:'+58',flag:'🇻🇪',name:'Venezuela'},{code:'+84',flag:'🇻🇳',name:'Vietnam'},{code:'+1340',flag:'🇻🇮',name:'Virgin Islands (US)'},{code:'+681',flag:'🇼🇫',name:'Wallis & Futuna'},{code:'+967',flag:'🇾🇪',name:'Yemen'},{code:'+260',flag:'🇿🇲',name:'Zambia'},{code:'+263',flag:'🇿🇼',name:'Zimbabwe'}
        ];

        function showCountryDropdown() {
            filterCountryCodes(document.getElementById('signup-code').value);
            document.getElementById('country-dropdown').classList.remove('hidden');
            // Close when clicking outside
            setTimeout(() => {
                document.addEventListener('click', hideCountryDropdownOutside, { once: true });
            }, 10);
        }

        function hideCountryDropdownOutside(e) {
            const dd = document.getElementById('country-dropdown');
            const inp = document.getElementById('signup-code');
            if (dd && !dd.contains(e.target) && e.target !== inp) {
                dd.classList.add('hidden');
            }
        }

        function filterCountryCodes(q) {
            const dd = document.getElementById('country-dropdown');
            const term = (q || '').toLowerCase().replace('+', '');
            const matches = ALL_COUNTRIES.filter(c =>
                c.name.toLowerCase().includes(term) ||
                c.code.replace('+','').includes(term) ||
                c.flag.includes(q)
            ).slice(0, 80);
            if (!matches.length) { dd.classList.add('hidden'); return; }
            dd.classList.remove('hidden');
            dd.innerHTML = matches.map(c => `
                <div onclick="selectCountryCode('${c.code}','${c.name}')"
                    style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;font-size:12px;border-bottom:1px solid #f1f5f9;transition:background 0.15s;"
                    onmouseover="this.style.background='#fff7ed'" onmouseout="this.style.background=''">
                    <span style="font-size:18px;">${c.flag}</span>
                    <span style="flex:1;font-weight:600;color:#1e293b;">${c.name}</span>
                    <span style="font-weight:800;color:#f97316;">${c.code}</span>
                </div>`).join('');
        }

        function selectCountryCode(code, name) {
            document.getElementById('signup-code').value = code;
            document.getElementById('country-dropdown').classList.add('hidden');
            document.getElementById('signup-phone').focus();
        }

        function getCountryFromCode(code) {
            const c = ALL_COUNTRIES.find(x => x.code === code);
            return c ? c.name : 'Unknown';
        }

        function launchApp() {
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            updateBalanceUI();
            updateHistoryUI();
            renderTasksFromDashboard();
            startInactivityWatcher();
        }

        // ── Poll for task/rate updates from Supabase cache ──
        let lastTaskCount = -1;
        let lastRate = 0;
        let lastHistoryLength = -1;
        function pollDashboardUpdates() {
            const db = loadAdminDB();
            if (!db) return;

            // New task published
            const taskCount = (db.tasks || []).filter(t => t.status === 'active').length;
            if (lastTaskCount === -1) {
                lastTaskCount = taskCount;
            } else if (taskCount > lastTaskCount) {
                lastTaskCount = taskCount;
                renderTasksFromDashboard();
                const newest = (db.tasks||[]).filter(t=>t.status==='active').slice(-1)[0];
                if (newest) {
                    userData.history.unshift({
                        title: `New Task: ${newest.title}`,
                        amount: newest.reward, type: 'notif',
                        date: new Date().toLocaleString('en-NG',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})
                    });
                    saveToPhone();
                    updateHistoryUI();
                    const dot = document.getElementById('notif-dot');
                    if (dot) dot.classList.remove('hidden');
                }
            } else if (taskCount !== lastTaskCount) {
                lastTaskCount = taskCount;
                renderTasksFromDashboard();
            }

            // Rate changed
            const rate = db.usd_rate || 1500;
            if (rate !== lastRate) { lastRate = rate; updateBalanceUI(); }

            // Check if admin deposited a reward into this user's account
            if (!userData.uid || !db.users) return;
            const dbUser = db.users.find(u => u.uid === userData.uid);
            if (!dbUser) return;
            const dbHist = dbUser.history || [];
            if (lastHistoryLength === -1) { lastHistoryLength = dbHist.length; return; }
            if (dbHist.length > lastHistoryLength) {
                // Admin added entries — pull latest balances
                userData.wallet_balance = dbUser.wallet_balance || 0;
                userData.usdt_balance = dbUser.usdt_balance || 0;
                userData.redemption_balance = dbUser.redemption_balance || 0;
                userData.history = dbHist;
                lastHistoryLength = dbHist.length;
                localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
                updateBalanceUI();
                updateHistoryUI();
                const dot = document.getElementById('notif-dot');
                if (dot) dot.classList.remove('hidden');
            }
        }

        // ── Render tasks dynamically from Dashboard ──
        function renderTasksFromDashboard() {
            const db = loadAdminDB();
            const container = document.getElementById('app-install-container');
            const empty = document.getElementById('empty-earn-placeholder');
            if (!db || !db.tasks) return;
            const activeTasks = db.tasks.filter(t => t.status === 'active');
            if (!activeTasks.length) return;
            container.innerHTML = activeTasks.map(t => `
                <div class="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer active:bg-slate-100"
                     onclick="openDashboardTask('${t.id}')">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                            <i class="${getCategoryIcon(t.category)}"></i>
                        </div>
                        <div>
                            <p class="text-[11px] font-bold text-slate-800">${t.title}</p>
                            <p class="text-[9px] text-slate-500">${t.category}</p>
                        </div>
                    </div>
                    <span class="text-[10px] font-black text-orange-500">₦${Number(t.reward).toLocaleString()}</span>
                </div>`).join('');
            container.classList.remove('hidden');
            empty.classList.add('hidden');
        }

        function getCategoryIcon(cat) {
            const icons = {
                'Apps Install': 'fas fa-download', 'AI': 'fas fa-robot',
                'Crypto': 'fab fa-bitcoin', 'Betting': 'fas fa-dice',
                'Education': 'fas fa-graduation-cap', 'Forex': 'fas fa-chart-line',
                'Gaming': 'fas fa-gamepad', 'Simple Task': 'fas fa-check-circle',
                'Web3': 'fas fa-cubes'
            };
            return icons[cat] || 'fas fa-star';
        }

        // ── Open a dashboard-created task ──
        function openDashboardTask(taskId) {
            const db = loadAdminDB();
            if (!db) return;
            const task = db.tasks.find(t => t.id === taskId);
            if (!task) return;

            const modal = document.getElementById('task-details-modal');
            document.getElementById('task-title-main').innerText = task.title;
            document.getElementById('task-icon-main').className = getCategoryIcon(task.category);
            document.getElementById('task-desc-main').innerText = task.desc;

            const warnBox = document.getElementById('task-warning-box');
            const warnText = document.getElementById('task-warning-text');
            if (task.warning) {
                warnText.innerText = task.warning;
                warnBox.classList.remove('hidden');
            } else {
                warnBox.classList.add('hidden');
            }

            const refBox = document.getElementById('referral-code-box');
            if (task.refcode) {
                document.getElementById('ref-code-value').innerText = task.refcode;
                refBox.classList.remove('hidden');
            } else {
                refBox.classList.add('hidden');
            }

            const actionBtn = document.getElementById('task-action-btn');
            actionBtn.innerText = 'Submit Proof';
            actionBtn.onclick = () => { closeTaskDetails(); openSubmitProofModal(taskId); };

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.children[0].classList.remove('scale-90');
        }

        // ── Submit proof modal ──
        function openSubmitProofModal(taskId) {
            const db = loadAdminDB();
            const task = db?.tasks?.find(t => t.id === taskId);
            if (!task) return;

            let existing = document.getElementById('proof-modal');
            if (existing) existing.remove();

            const div = document.createElement('div');
            div.id = 'proof-modal';
            div.className = 'fixed inset-0 z-[170] flex items-center justify-center p-4 bg-black/40';
            div.innerHTML = `
                <div class="bg-white w-full max-w-xs rounded-2xl p-6 shadow-2xl">
                    <h3 class="text-sm font-black text-slate-900 mb-1">Submit Proof</h3>
                    <p class="text-[10px] text-slate-400 mb-4">${task.title}</p>
                    <textarea id="proof-note" class="w-full p-3 border border-slate-200 rounded-xl text-[11px] outline-none mb-3 resize-none" rows="3" placeholder="Describe what you completed..."></textarea>
                    <label class="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Screenshot Proof <span class="text-red-400">(Required)</span></label>
                    <label id="proof-upload-label" class="flex flex-col items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer mb-1 transition-colors" style="min-height:80px;" onclick="document.getElementById('proof-file-input').click()">
                        <i class="fas fa-image text-slate-300 text-2xl"></i>
                        <span id="proof-upload-text" class="text-[10px] text-slate-400 font-bold text-center">Tap to upload screenshot</span>
                    </label>
                    <input type="file" id="proof-file-input" accept="image/*" class="hidden" onchange="handleProofUpload(this)">
                    <canvas id="proof-canvas" class="hidden"></canvas>
                    <p id="proof-file-error" class="hidden text-[10px] text-red-500 font-bold mb-2">Please upload a screenshot before submitting.</p>
                    <div class="flex gap-2 mt-3">
                        <button onclick="submitTaskProof('${taskId}')" class="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold text-xs">Submit</button>
                        <button onclick="document.getElementById('proof-modal').remove()" class="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-xs">Cancel</button>
                    </div>
                </div>`;
            document.body.appendChild(div);
        }

        // Stores the base64 screenshot temporarily
        let proofImageBase64 = null;

        function handleProofUpload(input) {
            const file = input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                proofImageBase64 = e.target.result;
                const label = document.getElementById('proof-upload-label');
                const text = document.getElementById('proof-upload-text');
                if (label && text) {
                    label.style.borderColor = '#f97316';
                    label.style.background = '#fff7ed';
                    text.innerHTML = `<i class="fas fa-check-circle" style="color:#f97316;"></i> ${file.name}`;
                }
                document.getElementById('proof-file-error')?.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }

        async function submitTaskProof(taskId) {
            const note = document.getElementById('proof-note').value.trim();
            if (!note) { showAction('Error', 'Please describe what you completed.'); return; }
            if (!proofImageBase64) {
                document.getElementById('proof-file-error')?.classList.remove('hidden');
                return;
            }

            const db = loadAdminDB();
            if (!db) return;
            if (!db.submissions) db.submissions = [];

            const already = db.submissions.find(s => s.userId === userData.uid && s.taskId === taskId && s.status === 'pending');
            if (already) { showAction('Already Submitted', 'You already have a pending submission for this task.'); document.getElementById('proof-modal')?.remove(); return; }

            const sub = {
                id: Math.random().toString(36).substr(2, 9),
                user_id: userData.uid,
                user_name: userData.name || 'User',
                task_id: taskId,
                note,
                screenshot: proofImageBase64 || '',
                status: 'pending',
                date: new Date().toLocaleDateString('en-NG')
            };
            proofImageBase64 = null;
            // Bot B — Task submission notification to admin
            const taskForBot = db?.tasks?.find(t => t.id === taskId);
            tgSend(TG_BOT_B, TG_ADMIN_CHAT,
                '📋 <b>Task Submission</b>\n' +
                '👤 User: ' + (userData.name||'Unknown') + '\n' +
                '📱 Phone: ' + (userData.phone||userData.uid||'—') + '\n' +
                '📌 Task: ' + (taskForBot?.title||taskId) + '\n' +
                '💰 Reward: ₦' + Number(taskForBot?.reward||0).toLocaleString() + '\n' +
                '📝 Note: ' + note + '\n' +
                '🕒 ' + sub.date
            );
            // Also update local cache
            const dbCache = loadAdminDB() || { submissions: [] };
            if (!dbCache.submissions) dbCache.submissions = [];
            dbCache.submissions.push({
                id: sub.id, userId: sub.user_id, userName: sub.user_name,
                taskId: sub.task_id, note: sub.note, screenshot: '[image_uploaded]',
                status: sub.status, date: sub.date
            });
            saveAdminDB(dbCache);
            document.getElementById('proof-modal')?.remove();
            showAction('Submitted!', 'Your proof has been submitted. The admin will review and approve your reward.');
        }

        function updateBalanceUI() {
            if (!userData) return;
            const usdtVal = userData.usdt_balance !== undefined ? userData.usdt_balance : 0.00;
            const ngnVal = userData.wallet_balance !== undefined ? userData.wallet_balance : 0;
            const cphVal = userData.redemption_balance !== undefined ? userData.redemption_balance : 0;

            document.getElementById('balance-usdt').innerText = usdtVal.toFixed(2);
            document.getElementById('balance-usdt-fiat').innerText = `≈ ${usdtVal.toFixed(2)} USD`;
            document.getElementById('balance-naira').innerText = `₦${ngnVal.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            const RATE = getRate();
            const ngnInUsd = ngnVal / RATE;
            document.getElementById('balance-naira-fiat').innerText = `≈ ${ngnInUsd.toFixed(2)} USD`;
            document.getElementById('balance-cph').innerText = cphVal.toLocaleString('en-NG', {minimumFractionDigits: 2});
            const cphInUsd = cphVal / RATE;
            document.getElementById('balance-cph-fiat').innerText = `≈ ${cphInUsd.toFixed(2)} USD`;

            const aggregateNgn = ngnVal + (usdtVal * RATE) + cphVal;
            const aggregateUsd = usdtVal + ngnInUsd + cphInUsd;
            document.getElementById('total-portfolio-value').innerText = `₦${aggregateNgn.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            document.getElementById('total-portfolio-value-usd').innerText = `≈ ${aggregateUsd.toFixed(2)} USD`;

            const uidBadge = document.getElementById('user-uid-display');
            if (uidBadge) uidBadge.innerText = userData.uid;

            // Topbar mini balances
            const navNGN = document.getElementById('nav-balance-ngn');
            const navUSDT = document.getElementById('nav-balance-usdt');
            if (navNGN) navNGN.innerText = `₦${ngnVal.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            if (navUSDT) navUSDT.innerText = `${usdtVal.toFixed(2)} USDT`;

            // Profile section
            const profNGN = document.getElementById('profile-ngn');
            const profUSDT = document.getElementById('profile-usdt');
            const profName = document.getElementById('profile-name');
            const profUID = document.getElementById('profile-uid');
            const profAvatar = document.getElementById('profile-avatar');
            const profRef = document.getElementById('profile-referral-code');
            if (profNGN) profNGN.innerText = `₦${ngnVal.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            if (profUSDT) profUSDT.innerText = `${usdtVal.toFixed(2)} USDT`;
            if (profName) profName.innerText = userData.name || 'App User';
            if (profUID) profUID.innerText = `UID: ${userData.uid || '—'}`;
            if (profAvatar) profAvatar.innerText = (userData.name || 'U')[0].toUpperCase();
            if (profRef) profRef.innerText = userData.phone || userData.uid || '—';

            // Task progress
            renderTaskProgress();
        }

        function addTransaction(title, amount, type) {
            const entry = {
                title,
                amount,
                type,
                date: new Date().toLocaleString('en-NG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
            };
            userData.history.unshift(entry);
            saveToPhone(); // saveToPhone now also calls syncUserToAdminDB
            updateHistoryUI();
            document.getElementById('notif-dot').classList.remove('hidden');
        }

        function updateHistoryUI() {
            const list = document.getElementById('history-list');
            if (userData.history.length === 0) {
                list.innerHTML = '<div class="text-center py-10 text-slate-400 text-[10px] font-bold uppercase tracking-widest">No Transactions Yet</div>';
                return;
            }
            list.innerHTML = userData.history.map(item => {
                if (item.type === 'notif') {
                    return `<div class="history-item">
                        <div class="flex flex-col">
                            <span class="text-[11px] font-bold text-slate-800">${item.title}</span>
                            <span class="text-[9px] text-slate-400">${item.date}</span>
                        </div>
                        <span class="text-[11px] font-black text-orange-500">₦${Number(item.amount).toLocaleString()} reward</span>
                    </div>`;
                }
                return `<div class="history-item">
                    <div class="flex flex-col">
                        <span class="text-[11px] font-bold text-slate-800">${item.title}</span>
                        <span class="text-[9px] text-slate-400">${item.date}</span>
                    </div>
                    <span class="text-[11px] font-black ${item.type === 'plus' ? 'text-green-500' : 'text-red-500'}">
                        ${item.type === 'plus' ? '+' : '-'} ₦${Number(item.amount).toLocaleString()}
                    </span>
                </div>`;
            }).join('');
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

        function openAirtimeModal() {
            const modal = document.getElementById('airtime-modal');
            document.getElementById('airtime-form').classList.remove('hidden');
            document.getElementById('airtime-processing').classList.add('hidden');
            document.getElementById('airtime-success').classList.add('hidden');
            document.getElementById('a-phone').value = '';
            document.getElementById('a-amount').value = '';
            document.getElementById('a-network').selectedIndex = 0;
            document.getElementById('a-pin').value = '';
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.children[0].classList.remove('scale-90');
        }

        function closeAirtimeModal() {
            const modal = document.getElementById('airtime-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.children[0].classList.add('scale-90');
        }

        function processAirtime() {
            const phone = document.getElementById('a-phone').value;
            const network = document.getElementById('a-network').value;
            const amount = parseFloat(document.getElementById('a-amount').value);
            const pin = document.getElementById('a-pin').value;
            if (!phone || !network || !amount || !pin) { showAction('Error', 'Please fill all fields to continue.'); return; }
            if (userData.wallet_balance < amount) { showAction('Failed', 'Insufficient wallet balance.'); return; }
            document.getElementById('airtime-form').classList.add('hidden');
            document.getElementById('airtime-processing').classList.remove('hidden');
            setTimeout(() => {
                userData.wallet_balance -= amount;
                addTransaction(`Airtime (${network})`, amount, 'minus');
                updateBalanceUI();
                document.getElementById('airtime-processing').classList.add('hidden');
                document.getElementById('airtime-success').classList.remove('hidden');
            }, 3000);
        }

        function handleInstallApp() {
            switchTab('offers');
        }

        function handleSimpleTask() {
            switchTab('offers');
        }

        function openTaskDetails(taskId) {
            const modal = document.getElementById('task-details-modal');
            const titleEl = document.getElementById('task-title-main');
            const descEl = document.getElementById('task-desc-main');
            const warnBox = document.getElementById('task-warning-box');
            const warnText = document.getElementById('task-warning-text');
            const actionBtn = document.getElementById('task-action-btn');
            const refBox = document.getElementById('referral-code-box');
            const iconEl = document.getElementById('task-icon-main');
            if (taskId === 'metapass') {
                titleEl.innerText = "Meta Earth Task";
                iconEl.className = "fas fa-earth-africa";
                descEl.innerText = "Meta earth is a wallet that is giving new users who registered, do face verification and advanced kyc (1 MEC) $8. But they will stake it for you!.";
                warnText.innerText = "The national ID card must be plastic/small one, if you didn't use this invitation code/referral code you won't get that N500 naira \"y92x8cjd\". Take a screenshot after your kyc is approved and send to the admin he will give you PROMO CODE to apply in your redemption and get your 500 naira instantly and also $8 in your account.";
                warnBox.classList.remove('hidden');
                refBox.classList.remove('hidden');
                actionBtn.onclick = () => window.open('https://play.google.com/store/apps/details?id=com.xd.metapass', '_blank');
            }
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.children[0].classList.remove('scale-90');
        }

        function closeTaskDetails() {
            const modal = document.getElementById('task-details-modal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.children[0].classList.add('scale-90');
        }

        function copyRefCode() {
            const code = document.getElementById('ref-code-value').innerText;
            const tempInput = document.createElement("input");
            tempInput.value = code;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            const copyBtn = event.target;
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "COPIED!";
            setTimeout(() => copyBtn.innerText = originalText, 1500);
        }

        function switchTab(tabId) {
            const views = ['dashboard', 'offers', 'assets', 'profile'];
            views.forEach(v => {
                const viewEl = document.getElementById('view-' + v);
                const navEl = document.getElementById('nav-' + v);
                if(viewEl) viewEl.classList.add('hidden');
                if(navEl) navEl.classList.replace('text-orange-500', 'text-slate-400');
            });
            if (tabId === 'offers') {
                renderTasksFromDashboard();
            } else {
                const installContainer = document.getElementById('app-install-container');
                const emptyPlaceholder = document.getElementById('empty-earn-placeholder');
                if(installContainer) installContainer.classList.add('hidden');
                if(emptyPlaceholder) emptyPlaceholder.classList.remove('hidden');
            }
            document.getElementById('view-' + tabId).classList.remove('hidden');
            document.getElementById('nav-' + tabId).classList.replace('text-slate-400', 'text-orange-500');
            if (tabId === 'profile') { updateBalanceUI(); }
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
            document.getElementById('withdraw-step2').classList.add('hidden');
            document.getElementById('withdraw-processing').classList.add('hidden');
            document.getElementById('withdraw-success').classList.add('hidden');

            const isUSDT = walletName.includes('USDT') || walletName.includes('Tether');
            const isNGN = walletName.includes('NGN') || walletName.includes('Naira');

            document.getElementById('w-network-row').classList.toggle('hidden', !isUSDT);
            document.getElementById('w-usdt-address-row').classList.toggle('hidden', !isUSDT);
            document.getElementById('w-bank-fields').classList.toggle('hidden', isUSDT);
            document.getElementById('w-pin').classList.toggle('hidden', isUSDT || isNGN);
            document.getElementById('w-proceed-btn').classList.toggle('hidden', !isUSDT);
            document.getElementById('w-ngn-proceed-btn').classList.toggle('hidden', !isNGN);
            document.getElementById('w-withdraw-btn').classList.toggle('hidden', isUSDT || isNGN);

            document.getElementById('w-amount').value = '';
            document.getElementById('w-pin').value = '';
            if (document.getElementById('w-wallet-address')) document.getElementById('w-wallet-address').value = '';
            if (document.getElementById('w-login-password')) document.getElementById('w-login-password').value = '';
            document.getElementById('w-acc-num').value = '';
            document.getElementById('w-acc-name').value = '';
            document.getElementById('w-bank-name').value = '';

            document.getElementById('withdraw-modal').classList.remove('opacity-0', 'pointer-events-none');
        }

        function proceedNGN() {
            const accNum = document.getElementById('w-acc-num').value.trim();
            const accName = document.getElementById('w-acc-name').value.trim();
            const bankName = document.getElementById('w-bank-name').value.trim();
            const amount = parseFloat(document.getElementById('w-amount').value);
            if (!accNum || !accName || !bankName) { showAction('Error', 'Please fill in all account details.'); return; }
            if (!amount || amount <= 0) { showAction('Error', 'Please enter a valid amount.'); return; }
            if (userData.wallet_balance < amount) { showAction('Failed', 'Insufficient funds in this asset wallet.'); return; }
            document.getElementById('withdraw-fields').classList.add('hidden');
            document.getElementById('withdraw-step2').classList.remove('hidden');
        }

        function proceedUSDT() {
            const address = document.getElementById('w-wallet-address').value.trim();
            const amount = parseFloat(document.getElementById('w-amount').value);
            if (!address) { showAction('Error', 'Please enter your wallet address.'); return; }
            if (!amount || amount < 0.5) { showAction('Failed', 'Minimum withdrawal for USDT is 0.5.'); return; }
            if (userData.usdt_balance < amount) { showAction('Failed', 'Insufficient funds in this asset wallet.'); return; }
            document.getElementById('withdraw-fields').classList.add('hidden');
            document.getElementById('withdraw-step2').classList.remove('hidden');
        }

        async function processWithdrawal() {
            const amountInput = document.getElementById('w-amount');
            const amount = parseFloat(amountInput.value);
            const title = document.getElementById('withdraw-title').innerText;
            let targetField = 'wallet_balance';
            if (title.includes('USDT') || title.includes('Tether')) targetField = 'usdt_balance';
            else if (title.includes('CPH')) targetField = 'redemption_balance';
            else targetField = 'wallet_balance';

            if (targetField === 'usdt_balance' || targetField === 'wallet_balance') {
                const loginPass = document.getElementById('w-login-password').value;
                if (!loginPass) { showAction('Error', 'Please enter your login password.'); return; }
                // Validate password matches
                if (loginPass !== userData.password) { showAction('Error', 'Login password is incorrect.'); return; }

                document.getElementById('withdraw-step2').classList.add('hidden');
                document.getElementById('withdraw-processing').classList.remove('hidden');

                setTimeout(async () => {
                    // Build withdrawal request
                    const wd = {
                        id: Math.random().toString(36).substr(2, 9),
                        user_id: userData.uid,
                        user_name: userData.name || 'User',
                        user_phone: userData.phone || '',
                        type: isUSDT ? 'USDT' : 'NGN',
                        amount: amount,
                        acc_num: isUSDT ? null : document.getElementById('w-acc-num').value.trim(),
                        acc_name: isUSDT ? null : document.getElementById('w-acc-name').value.trim(),
                        bank_name: isUSDT ? null : document.getElementById('w-bank-name').value.trim(),
                        network: isUSDT ? 'BEP20 (Binance Smart Chain)' : null,
                        wallet_address: isUSDT ? document.getElementById('w-wallet-address').value.trim() : null,
                        status: 'pending',
                        date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
                    };

                    // Deduct balance
                    userData[targetField] -= amount;
                    addTransaction(`Withdrawal Pending (${title})`, amount, 'minus');
                    updateBalanceUI();

                    // Notify admin via Bot C (Withdrawals)
                    // Also update local cache
                    const db2 = loadAdminDB() || { withdrawals: [] };
                    if (!db2.withdrawals) db2.withdrawals = [];
                    db2.withdrawals.unshift({
                        id: wd.id, userId: wd.user_id, userName: wd.user_name,
                        userPhone: wd.user_phone, type: wd.type, amount: wd.amount,
                        accNum: wd.acc_num||'', accName: wd.acc_name||'',
                        bankName: wd.bank_name||'', network: wd.network||'',
                        walletAddress: wd.wallet_address||'', status: wd.status, date: wd.date
                    });
                    saveAdminDB(db2);

                    // 🤖 Bot C — Withdrawal notification to admin
                    const isUSDTwd = wd.type === 'USDT';
                    tgSend(TG_BOT_C, TG_ADMIN_CHAT,
                        '💸 <b>Withdrawal Request</b>\n' +
                        '👤 User: ' + wd.user_name + '\n' +
                        '📱 Phone: ' + wd.user_phone + '\n' +
                        '💰 Amount: ' + (isUSDTwd ? wd.amount + ' USDT' : '₦' + Number(wd.amount).toLocaleString()) + '\n' +
                        (isUSDTwd
                            ? '🔗 Network: ' + (wd.network||'') + '\n🏦 Wallet: ' + (wd.wallet_address||'')
                            : '🏦 Bank: ' + (wd.bank_name||'') + '\n💳 Acc: ' + (wd.acc_num||'') + '\n👤 Name: ' + (wd.acc_name||'')
                        ) + '\n🕒 ' + wd.date
                    );

                    document.getElementById('withdraw-processing').classList.add('hidden');
                    document.getElementById('withdraw-success').classList.remove('hidden');
                    amountInput.value = '';
                }, 3000);
                return;
            }

            if (!amount || amount <= 0) return;
            if (userData[targetField] < amount) { showAction('Failed', 'Insufficient funds in this asset wallet.'); return; }
            document.getElementById('withdraw-fields').classList.add('hidden');
            document.getElementById('withdraw-processing').classList.remove('hidden');
            setTimeout(() => {
                userData[targetField] -= amount;
                addTransaction(`Withdrawal Pending (${title})`, amount, 'minus');
                updateBalanceUI();
                document.getElementById('withdraw-processing').classList.add('hidden');
                document.getElementById('withdraw-success').classList.remove('hidden');
                amountInput.value = '';
            }, 2500);
        }

        function closeWithdrawModal() {
            document.getElementById('withdraw-modal').classList.add('opacity-0', 'pointer-events-none');
        }

        function applyRedemption() {
            showAction('Invalid', 'This redemption code is not active.');
        }

        function openSwapModal() {
            document.getElementById('swap-form').classList.remove('hidden');
            document.getElementById('swap-processing').classList.add('hidden');
            document.getElementById('swap-success').classList.add('hidden');
            document.getElementById('swap-amount').value = '';
            document.getElementById('swap-preview').innerText = 'You will receive: —';
            setSwapDirection('usdt-ngn');
            document.getElementById('swap-modal').classList.remove('opacity-0', 'pointer-events-none');
            document.getElementById('swap-modal').children[0].classList.remove('scale-90');
        }

        function closeSwapModal() {
            document.getElementById('swap-modal').classList.add('opacity-0', 'pointer-events-none');
            document.getElementById('swap-modal').children[0].classList.add('scale-90');
        }

        let swapDirection = 'usdt-ngn';

        function setSwapDirection(dir) {
            swapDirection = dir;
            const RATE = getRate();
            const usdtBtn = document.getElementById('swap-btn-usdt-ngn');
            const ngnBtn = document.getElementById('swap-btn-ngn-usdt');
            if (dir === 'usdt-ngn') {
                usdtBtn.classList.add('bg-orange-500', 'text-white');
                usdtBtn.classList.remove('bg-white', 'text-orange-500');
                ngnBtn.classList.add('bg-white', 'text-orange-500');
                ngnBtn.classList.remove('bg-orange-500', 'text-white');
                document.getElementById('swap-rate-label').innerText = `Rate: 1 USDT = ₦${RATE.toLocaleString()}`;
            } else {
                ngnBtn.classList.add('bg-orange-500', 'text-white');
                ngnBtn.classList.remove('bg-white', 'text-orange-500');
                usdtBtn.classList.add('bg-white', 'text-orange-500');
                usdtBtn.classList.remove('bg-orange-500', 'text-white');
                document.getElementById('swap-rate-label').innerText = `Rate: ₦${RATE.toLocaleString()} = 1 USDT`;
            }
            updateSwapPreview();
        }

        function updateSwapPreview() {
            const amount = parseFloat(document.getElementById('swap-amount').value);
            const preview = document.getElementById('swap-preview');
            const RATE = getRate();
            if (!amount || amount <= 0) { preview.innerText = 'You will receive: —'; return; }
            if (swapDirection === 'usdt-ngn') {
                preview.innerText = `You will receive: ₦${(amount * RATE).toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            } else {
                preview.innerText = `You will receive: ${(amount / RATE).toFixed(4)} USDT`;
            }
        }

        function processSwap() {
            const amount = parseFloat(document.getElementById('swap-amount').value);
            const RATE = getRate();
            if (!amount || amount <= 0) { showAction('Error', 'Please enter a valid amount.'); return; }
            if (swapDirection === 'usdt-ngn') {
                if (userData.usdt_balance < amount) { showAction('Failed', 'Insufficient USDT balance.'); return; }
                const ngnReceived = amount * RATE;
                document.getElementById('swap-form').classList.add('hidden');
                document.getElementById('swap-processing').classList.remove('hidden');
                setTimeout(() => {
                    userData.usdt_balance -= amount;
                    userData.wallet_balance += ngnReceived;
                    addTransaction(`Swap ${amount} USDT → NGN`, ngnReceived, 'plus');
                    updateBalanceUI();
                    document.getElementById('swap-processing').classList.add('hidden');
                    document.getElementById('swap-success').classList.remove('hidden');
                }, 3000);
            } else {
                if (userData.wallet_balance < amount) { showAction('Failed', 'Insufficient NGN balance.'); return; }
                const usdtReceived = amount / RATE;
                document.getElementById('swap-form').classList.add('hidden');
                document.getElementById('swap-processing').classList.remove('hidden');
                setTimeout(() => {
                    userData.wallet_balance -= amount;
                    userData.usdt_balance += usdtReceived;
                    addTransaction(`Swap ₦${amount.toLocaleString()} NGN → USDT`, usdtReceived, 'plus');
                    updateBalanceUI();
                    document.getElementById('swap-processing').classList.add('hidden');
                    document.getElementById('swap-success').classList.remove('hidden');
                }, 3000);
            }
        }

        function renderTaskProgress() {
            const el = document.getElementById('profile-task-progress');
            if (!el) return;
            const db = loadAdminDB();
            if (!db || !db.submissions) { return; }
            const mySubs = db.submissions.filter(s => s.userId === userData.uid || s.userId === userData.phone);
            if (!mySubs.length) {
                el.innerHTML = '<div class="text-center py-4"><p class="text-[10px] text-slate-400 font-bold">No task submissions yet.</p></div>';
                return;
            }
            el.innerHTML = mySubs.map(s => {
                const task = db.tasks?.find(t => t.id === s.taskId);
                const statusColor = s.status === 'approved' ? 'text-green-500' : s.status === 'declined' ? 'text-red-500' : 'text-orange-500';
                const statusIcon = s.status === 'approved' ? 'fa-check-circle' : s.status === 'declined' ? 'fa-times-circle' : 'fa-clock';
                const statusLabel = s.status === 'approved' ? 'Approved' : s.status === 'declined' ? 'Declined' : 'Pending Review';
                return `<div class="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <div class="flex-1">
                        <p class="text-[11px] font-bold text-slate-800">${task?.title || 'Unknown Task'}</p>
                        <p class="text-[9px] text-slate-400 mt-0.5">${s.date} · ₦${Number(task?.reward || 0).toLocaleString()}</p>
                    </div>
                    <span class="text-[10px] font-black ${statusColor} flex items-center gap-1">
                        <i class="fas ${statusIcon}"></i> ${statusLabel}
                    </span>
                </div>`;
            }).join('');
        }

        function copyReferralCode() {
            const code = document.getElementById('profile-referral-code').innerText;
            if (!code || code === '—') return;
            const tmp = document.createElement('input');
            tmp.value = code;
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand('copy');
            document.body.removeChild(tmp);
            showAction('Copied!', 'Your referral code has been copied to clipboard.');
        }

        // ── LOG OUT ──
        function logOut() {
            userData.loggedIn = false;
            localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));
            // Hide main app, show auth screen
            document.getElementById('main-app').classList.add('hidden');
            document.getElementById('auth-screen').classList.remove('hidden');
            // Reset auth inputs
            ['login-name','login-password','signup-name','signup-phone',
             'signup-password','signup-referral','signup-code'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            document.getElementById('login-error')?.classList.add('hidden');
            document.getElementById('signup-error')?.classList.add('hidden');
            showAuthTab('login');
            clearInactivityTimer();
        }

        // ── 5-MINUTE INACTIVITY AUTO-LOGOUT ──
        let inactivityTimer = null;

        function resetInactivityTimer() {
            clearInactivityTimer();
            // Only run timer if user is logged in and app is visible
            const el = document.getElementById('main-app');
            if (!el || el.classList.contains('hidden')) return;
            inactivityTimer = setTimeout(() => {
                logOut();
                // Show a subtle message on the login form
                const errEl = document.getElementById('login-error');
                if (errEl) {
                    errEl.textContent = 'You were logged out after 5 minutes of inactivity.';
                    errEl.classList.remove('hidden');
                }
            }, INACTIVITY_MS);
        }

        function clearInactivityTimer() {
            if (inactivityTimer) { clearTimeout(inactivityTimer); inactivityTimer = null; }
        }

        function startInactivityWatcher() {
            ['touchstart','touchmove','click','keydown','scroll','mousemove'].forEach(evt => {
                document.addEventListener(evt, resetInactivityTimer, { passive: true });
            });
            // Also watch when user returns to the tab/app
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    resetInactivityTimer();
                } else {
                    // Record time user left
                    localStorage.setItem('ch_left_at', Date.now().toString());
                }
            });
            resetInactivityTimer();
        }

        function goToSupport() {
            switchTab('profile');
            setTimeout(() => openSupportModal(), 200);
        }
    </script>
</body>
</html>