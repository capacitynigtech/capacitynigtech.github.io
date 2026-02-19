<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Place Bet - Prediction Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .coming-soon-pattern {
            background-color: #ea580c;
            background-image: radial-gradient(#fb923c 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .custom-shadow {
            box-shadow: 0 20px 25px -5px rgba(234, 88, 12, 0.1), 0 10px 10px -5px rgba(234, 88, 12, 0.04);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

<div x-data="{ 
    view: 'auth', 
    authMode: 'login', 
    userName: '', 
    signupData: {
        username: '',
        password: '',
        referral: ''
    },
    referralCode: 'PB-' + Math.floor(Math.random() * 900000 + 100000),
    referralCount: 0,
    showBanner: false,
    telegramLink: 'https://t.me/PRINCEAUWALTRADEACAD',
    
    handleLogin() {
        if(this.authMode === 'signup') {
            if(!this.signupData.username || !this.signupData.password) {
                return;
            }
            this.userName = this.signupData.username;
        } else {
            this.userName = this.signupData.username || 'User';
        }
        this.view = 'lobby';
        this.showBanner = true;
    }
}" class="max-w-md mx-auto min-h-screen relative flex flex-col bg-white shadow-2xl">

    <!-- Auth View -->
    <template x-if="view === 'auth'">
        <div class="flex-1 p-8 flex flex-col justify-center animate-in fade-in duration-500">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-black italic text-orange-600 tracking-tighter uppercase">PLACE BET</h1>
            </div>
            <div class="space-y-5">
                <h2 class="text-2xl font-black text-gray-800" x-text="authMode === 'login' ? 'Login' : 'Create Account'"></h2>
                
                <!-- Username -->
                <input type="text" x-model="signupData.username" placeholder="Username" class="w-full border-b-2 border-gray-100 py-4 text-lg outline-none focus:border-orange-500 transition-all" />
                
                <!-- Password -->
                <input type="password" x-model="signupData.password" placeholder="Password" class="w-full border-b-2 border-gray-100 py-4 text-lg outline-none focus:border-orange-500 transition-all" />
                
                <!-- Referral Code (Only for Signup) -->
                <template x-if="authMode === 'signup'">
                    <input type="text" x-model="signupData.referral" placeholder="Referral Code (Optional)" class="w-full border-b-2 border-gray-100 py-4 text-lg outline-none focus:border-orange-500 transition-all" />
                </template>
                
                <button @click="handleLogin()" class="w-full bg-orange-600 text-white font-black py-5 rounded-sm mt-4 custom-shadow uppercase tracking-widest active:scale-95 transition-transform">
                    <span x-text="authMode === 'login' ? 'Login' : 'Sign Up'"></span>
                </button>
                
                <p class="text-center text-sm font-bold text-gray-500 mt-6">
                    <span x-text="authMode === 'login' ? 'Don\'t have an account?' : 'Already have an account?'"></span>
                    <span @click="authMode = (authMode === 'login' ? 'signup' : 'login')" class="text-orange-600 ml-2 cursor-pointer" x-text="authMode === 'login' ? 'Sign Up' : 'Login'"></span>
                </p>
            </div>
        </div>
    </template>

    <!-- App Header -->
    <template x-if="view !== 'auth'">
        <header class="bg-[#121212] p-4 flex justify-between items-center sticky top-0 z-50">
            <div class="flex items-center gap-3">
                <i class="fas fa-bars text-white text-lg"></i>
                <h1 class="text-orange-500 font-black italic text-xl tracking-tighter">PLACE BET</h1>
            </div>
        </header>
    </template>

    <!-- Main Content -->
    <main class="flex-1 mb-24" x-show="view !== 'auth'">
        
        <!-- Dashboard / Lobby -->
        <div x-show="view === 'lobby'" class="p-5 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div class="mt-2">
                <h2 class="text-2xl font-black text-gray-900 tracking-tight">Welcome back, <span class="text-orange-600" x-text="userName"></span></h2>
                <p class="text-gray-500 font-bold text-xs uppercase tracking-wider">Predictor Status</p>
            </div>

            <!-- Hero Section -->
            <div class="coming-soon-pattern rounded-[32px] p-8 text-center text-white relative overflow-hidden shadow-xl shadow-orange-100">
                <div class="relative z-10">
                    <div class="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                        Announcement
                    </div>
                    <h3 class="text-4xl font-black italic tracking-tighter mb-2 uppercase">Coming Soon</h3>
                    <p class="text-white/90 text-sm font-bold leading-tight mb-6">
                        Our advanced prediction engine is undergoing final maintenance for maximum accuracy.
                    </p>
                    <a :href="telegramLink" target="_blank" class="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                        Join Free Sure Odds <i class="fas fa-paper-plane"></i>
                    </a>
                </div>
            </div>

            <!-- Locked Cards -->
            <div class="grid gap-4 opacity-50 cursor-not-allowed">
                <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
                    <div class="flex items-center gap-5">
                        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                            <i class="fas fa-volleyball fa-2xl"></i>
                        </div>
                        <div>
                            <h3 class="font-black text-lg text-gray-400">Football</h3>
                            <p class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Locked</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
                    <div class="flex items-center gap-5">
                        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                            <i class="fas fa-plane-up fa-2xl"></i>
                        </div>
                        <div>
                            <h3 class="font-black text-lg text-gray-400">Aviator Predictor</h3>
                            <p class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Locked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Signals View -->
        <div x-show="view === 'signals'" class="p-4 flex flex-col items-center justify-center min-h-[70vh] text-center animate-in fade-in">
            <div class="bg-orange-100 text-orange-600 p-8 rounded-full mb-6">
                <i class="fas fa-clock-rotate-left fa-3x"></i>
            </div>
            <h2 class="text-2xl font-black text-gray-900 italic uppercase tracking-tighter">Coming Soon</h2>
            <p class="text-gray-500 font-bold text-sm mt-2 mb-8 max-w-[250px]">
                We are updating our signal servers. Join our Telegram for free sure odds in the meantime.
            </p>
            <a :href="telegramLink" target="_blank" class="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-100 active:scale-95 transition-transform">
                Go to Telegram
            </a>
        </div>

        <!-- Profile View -->
        <div x-show="view === 'me'" class="animate-in slide-in-from-right-4 duration-300">
            <div class="bg-white p-6 flex items-center gap-4 border-b">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-500">
                    <i class="fas fa-user text-orange-600 text-2xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-black text-gray-800" x-text="userName"></h2>
                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Verified Place Bet Account</p>
                </div>
            </div>
            
            <div class="bg-white p-4">
                <div class="bg-orange-50 border border-orange-100 p-4 rounded-xl mb-4 text-[11px] font-bold text-gray-600 leading-relaxed">
                    You will get 10% commission from each referral first deposit and 1% for every single betting he bet whether he win or loss
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-50 p-4 rounded-xl text-center border">
                        <p class="text-[9px] font-black text-gray-400 uppercase mb-1">Referral Code</p>
                        <p class="text-orange-600 font-black text-sm" x-text="referralCode"></p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-xl text-center border">
                        <p class="text-[9px] font-black text-gray-400 uppercase mb-1">Referral Count</p>
                        <p class="text-gray-800 font-black text-sm" x-text="referralCount"></p>
                    </div>
                </div>
                <button @click="navigator.clipboard.writeText(referralCode)" class="w-full mt-4 py-3 border-2 border-dashed border-gray-200 rounded-xl text-xs font-black text-gray-400 uppercase tracking-widest hover:border-orange-300 transition-colors">
                    Copy My Link
                </button>
            </div>

            <div class="bg-white border-t mt-4">
                <div class="flex justify-between items-center p-5 border-b active:bg-gray-50">
                    <span class="text-sm font-bold text-gray-700">Transaction History</span>
                    <i class="fas fa-chevron-right text-gray-300 text-xs"></i>
                </div>
                <div class="flex justify-between items-center p-5 border-b active:bg-gray-50">
                    <span class="text-sm font-bold text-gray-700">Security Settings</span>
                    <i class="fas fa-chevron-right text-gray-300 text-xs"></i>
                </div>
                <div @click="view = 'auth'; signupData.username = ''; signupData.password = '';" class="p-6 text-red-500 text-sm font-black text-center cursor-pointer uppercase tracking-[0.2em]">
                    Logout Account
                </div>
            </div>
        </div>
    </main>

    <!-- Bottom Nav -->
    <nav x-show="view !== 'auth'" class="fixed bottom-0 left-0 right-0 h-20 bg-white border-t flex justify-around items-center px-4 z-[100] max-w-md mx-auto">
        <div @click="view = 'lobby'" :class="view === 'lobby' ? 'text-orange-600' : 'text-gray-400'" class="flex-1 flex flex-col items-center gap-1 cursor-pointer transition-colors">
            <i class="fas fa-house text-lg"></i>
            <span class="text-[10px] font-black uppercase">Home</span>
        </div>
        <div @click="view = 'signals'" :class="view === 'signals' ? 'text-orange-600' : 'text-gray-400'" class="flex-1 flex flex-col items-center gap-1 cursor-pointer transition-colors">
            <i class="fas fa-chart-line text-lg"></i>
            <span class="text-[10px] font-black uppercase">Signals</span>
        </div>
        <div @click="view = 'me'" :class="view === 'me' ? 'text-orange-600' : 'text-gray-400'" class="flex-1 flex flex-col items-center gap-1 cursor-pointer transition-colors">
            <i class="fas fa-user text-lg"></i>
            <span class="text-[10px] font-black uppercase">Me</span>
        </div>
    </nav>

    <!-- Telegram Popup -->
    <div x-show="showBanner" x-transition.opacity class="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
        <div @click.away="showBanner = false" class="bg-white w-full rounded-[32px] overflow-hidden relative animate-in zoom-in duration-300">
            <button @click="showBanner = false" class="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 z-10 transition-colors">
                <i class="fas fa-times"></i>
            </button>
            <div class="bg-orange-600 p-8 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <i class="fas fa-paper-plane text-white text-3xl"></i>
                </div>
                <h3 class="text-white text-2xl font-black uppercase italic tracking-tighter">Free Signals</h3>
                <p class="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Join Now</p>
            </div>
            <div class="p-8 text-center">
                <p class="text-gray-600 font-bold text-sm mb-6 leading-relaxed">
                    Join our Telegram channel to get the most accurate daily predictions and live updates.
                </p>
                <a :href="telegramLink" target="_blank" class="block w-full bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-orange-100 uppercase text-sm tracking-wider active:scale-95 transition-transform">
                    Join Channel
                </a>
            </div>
        </div>
    </div>

</div>

</body>
</html>