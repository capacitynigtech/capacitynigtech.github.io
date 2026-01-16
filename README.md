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
    </style>
</head>
<body class="bg-white overflow-hidden">
    <div id="app" class="h-screen w-full flex flex-col"></div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
        import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

        const firebaseConfig = JSON.parse(__firebase_config);
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'capacity-nigtech-v1';

        let state = {
            user: null,
            appUserData: null,
            isLoggedIn: false,
            authMode: 'welcome',
            activeTab: 'home',
            isProcessing: false,
            feedback: { show: false, msg: '' },
            signupForm: { name: '', password: '' },
            loginForm: { name: '', password: '' },
            orderStep: 'browse', // browse, method, payment
            selectedNumber: null
        };

        const availableNumbers = ["08172364140", "08172364187", "08172364339", "08172364435", "08172364556", "08172364573", "08172364595", "08172364607", "08172389277", "08172389287", "08172389347", "08172389367", "09089189945"].sort();

        function setState(newState) {
            state = { ...state, ...newState };
            render();
        }

        async function initAuth() {
            try {
                if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    await signInWithCustomToken(auth, __initial_auth_token);
                } else {
                    await signInAnonymously(auth);
                }
            } catch (e) { console.error("Auth failed", e); }
        }

        onAuthStateChanged(auth, (user) => { setState({ user }); });
        initAuth();

        function triggerFeedback(msg) {
            setState({ feedback: { show: true, msg } });
            setTimeout(() => setState({ feedback: { show: false, msg: '' } }), 3000);
        }

        async function handleSignup(e) {
            if (!state.user) return triggerFeedback("Connecting...");
            const name = state.signupForm.name.trim();
            if (!name || state.signupForm.password.length < 4) return triggerFeedback("Invalid details");
            setState({ isProcessing: true });
            try {
                const userRef = doc(db, 'artifacts', appId, 'public', 'data', 'users', name.toLowerCase());
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) { triggerFeedback("Username taken"); } 
                else {
                    const newProfile = { name, password: state.signupForm.password, walletBalance: 200, uid: state.user.uid };
                    await setDoc(userRef, newProfile);
                    setState({ appUserData: newProfile, isLoggedIn: true });
                    triggerFeedback("Account Created Successfully");
                }
            } catch (err) { triggerFeedback("Network Error"); } 
            finally { setState({ isProcessing: false }); }
        }

        async function handleLogin() {
            if (!state.user) return triggerFeedback("Connecting...");
            const name = state.loginForm.name.trim();
            setState({ isProcessing: true });
            try {
                const userRef = doc(db, 'artifacts', appId, 'public', 'data', 'users', name.toLowerCase());
                const docSnap = await getDoc(userRef);
                if (docSnap.exists() && docSnap.data().password === state.loginForm.password) {
                    setState({ appUserData: docSnap.data(), isLoggedIn: true });
                    triggerFeedback("Login Successful");
                } else { triggerFeedback("Incorrect Username or Password"); }
            } catch (err) { triggerFeedback("Login Failed"); } 
            finally { setState({ isProcessing: false }); }
        }

        window.copyToClipboard = (text) => {
            const el = document.createElement('textarea');
            el.value = text; document.body.appendChild(el); el.select();
            document.execCommand('copy'); document.body.removeChild(el);
            triggerFeedback("Copied: " + text);
        };

        function render() {
            const root = document.getElementById('app');
            if (!state.isLoggedIn) {
                root.innerHTML = `
                    <div class="fixed inset-0 bg-white flex flex-col p-8 items-center justify-center">
                        <div class="w-20 h-20 bg-orange-600 rounded-3xl mb-6 flex items-center justify-center shadow-2xl">
                           <span class="text-white text-4xl font-black">C</span>
                        </div>
                        <div class="text-center mb-10">
                            <h1 class="font-black text-2xl text-orange-600 tracking-tighter uppercase mb-1">Capacity Nigtech</h1>
                            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed max-w-[240px] mx-auto">Game changer of Connectivity join the future</p>
                        </div>
                        <div class="w-full space-y-4 max-w-sm">
                            ${state.authMode === 'welcome' ? `
                                <button onclick="window.setAuthMode('signup')" class="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95">Create Account</button>
                                <button onclick="window.setAuthMode('login')" class="w-full bg-gray-100 text-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95">Log in</button>
                            ` : `
                                <div class="space-y-4">
                                    <input type="text" placeholder="Username" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500 uppercase" id="userNameInput" value="${state.authMode === 'signup' ? state.signupForm.name : state.loginForm.name}">
                                    <input type="password" placeholder="Password" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500" id="userPassInput" value="${state.authMode === 'signup' ? state.signupForm.password : state.loginForm.password}">
                                    <div class="flex gap-2">
                                        <button onclick="window.submitForm()" ${state.isProcessing ? 'disabled' : ''} class="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md">
                                            ${state.isProcessing ? "Processing..." : (state.authMode === 'signup' ? "Join Future" : "Log in")}
                                        </button>
                                        <button onclick="window.triggerFeedback('Fingerprint feature is now enabled for your next login')" class="w-16 bg-gray-100 text-orange-600 rounded-2xl flex items-center justify-center border-2 border-orange-50 active:scale-95" title="Set Fingerprint"><i data-lucide="fingerprint"></i></button>
                                    </div>
                                    <p onclick="window.setAuthMode('welcome')" class="text-center text-[10px] text-gray-400 font-black uppercase pt-2 cursor-pointer">← Back</p>
                                </div>
                            `}
                        </div>
                        ${state.feedback.show ? `<div class="fixed top-10 left-6 right-6 z-[300] p-4 orange-toast text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl border-b-4 border-orange-800">${state.feedback.msg}</div>` : ''}
                    </div>
                `;
                const nInp = document.getElementById('userNameInput');
                const pInp = document.getElementById('userPassInput');
                if (nInp) nInp.oninput = (e) => { if(state.authMode === 'signup') state.signupForm.name = e.target.value; else state.loginForm.name = e.target.value; };
                if (pInp) pInp.oninput = (e) => { if(state.authMode === 'signup') state.signupForm.password = e.target.value; else state.loginForm.password = e.target.value; };
                lucide.createIcons(); return;
            }

            root.innerHTML = `
                <header class="px-6 py-4 flex items-center justify-between border-b bg-white z-50 shrink-0">
                    <div class="flex flex-col">
                        <span class="font-black text-orange-600 text-sm tracking-tighter uppercase">Capacity Nigtech</span>
                        <span class="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Future connected</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="text-right"><p class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active User</p><p class="text-[11px] font-black text-gray-800 uppercase tracking-tighter">${state.appUserData.name}</p></div>
                      <div class="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black shadow-md uppercase">${state.appUserData.name[0]}</div>
                    </div>
                </header>
                <main class="flex-1 overflow-y-auto pb-32 no-scrollbar">${renderTabContent()}</main>
                <nav class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t px-6 pt-4 pb-8 flex justify-around items-center z-[100] rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    <div onclick="window.setActiveTab('home')" class="flex flex-col items-center gap-1 cursor-pointer"><div class="p-2 rounded-xl ${state.activeTab === 'home' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="layout-dashboard"></i></div><span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'home' ? 'text-orange-600' : 'text-gray-300'} text-center">Capacity Dashboard</span></div>
                    <div onclick="window.setActiveTab('sim')" class="flex flex-col items-center gap-1 cursor-pointer"><div class="p-2 rounded-xl ${state.activeTab === 'sim' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="smartphone"></i></div><span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'sim' ? 'text-orange-600' : 'text-gray-300'} text-center">Capacity SIM Cards</span></div>
                    <div onclick="window.setActiveTab('profile')" class="flex flex-col items-center gap-1 cursor-pointer"><div class="p-2 rounded-xl ${state.activeTab === 'profile' ? 'bg-orange-600 text-white' : 'text-gray-300'}"><i data-lucide="user-cog"></i></div><span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'profile' ? 'text-orange-600' : 'text-gray-300'} text-center">User Settings</span></div>
                </nav>
                ${state.feedback.show ? `<div class="fixed top-10 left-6 right-6 z-[300] p-4 orange-toast text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl border-b-4 border-orange-800">${state.feedback.msg}</div>` : ''}
            `;
            lucide.createIcons();
        }

        function renderTabContent() {
            if (state.activeTab === 'home') {
                return `
                    <div class="p-5 space-y-6">
                        <div class="bg-orange-600 rounded-3xl p-5 text-white shadow-xl flex items-center justify-between border-b-4 border-orange-700">
                            <div class="flex items-center gap-4">
                              <div class="bg-white/20 p-2.5 rounded-xl border border-white/30"><i data-lucide="wallet" size="18"></i></div>
                              <div><p class="text-[8px] font-black text-white/80 tracking-[0.2em] mb-0.5 uppercase">Capacity Balance</p><p class="text-xl font-black tracking-tight">₦${state.appUserData.walletBalance}.00</p></div>
                            </div>
                            <div class="text-right">
                                <span class="text-[7px] font-black uppercase bg-white/20 px-2 py-1 rounded-full border border-white/30">user wallet</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div onclick="window.copyToClipboard('*301*8*5#')" class="bg-gray-50 p-4 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1 group-active:text-white/70">Airtime Bal</p><p class="text-[11px] font-black text-gray-800 tracking-wider group-active:text-white">*301*8*5#</p>
                            </div>
                            <div onclick="window.copyToClipboard('*301*8*6#')" class="bg-gray-50 p-4 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1 group-active:text-white/70">Data Bal</p><p class="text-[11px] font-black text-gray-800 tracking-wider group-active:text-white">*301*8*6#</p>
                            </div>
                            <div onclick="window.copyToClipboard('*301*8*1#')" class="bg-gray-50 p-4 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1 group-active:text-white/70">Check Number</p><p class="text-[11px] font-black text-gray-800 tracking-wider group-active:text-white">*301*8*1#</p>
                            </div>
                            <div onclick="window.copyToClipboard('*311*pin#')" class="bg-gray-50 p-4 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1 group-active:text-white/70">To Recharge</p><p class="text-[11px] font-black text-gray-800 tracking-wider group-active:text-white">*311*pin#</p>
                            </div>
                        </div>
                        <div class="bg-white border-2 border-gray-100 rounded-[2rem] p-5 space-y-4">
                            <div class="flex items-center gap-2 px-2"><i data-lucide="history" size="14" class="text-orange-600"></i><h3 class="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">Transaction History</h3></div>
                            <div class="bg-gray-50 p-4 rounded-2xl border-l-4 border-orange-600">
                                <div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><div class="bg-orange-100 p-1.5 rounded-lg text-orange-600"><i data-lucide="gift" size="12"></i></div><span class="text-[8px] font-black uppercase tracking-widest text-gray-400">Welcome Reward</span></div><span class="text-[10px] font-black text-green-600">+₦200.00</span></div>
                                <p class="text-[9px] font-bold text-gray-600 italic">"Congratulations you received 200 naira gift from Capacity Nigtech CEO Mr AUWAL TUKUR thank you for believing in the vision"</p>
                            </div>
                        </div>
                        
                        <!-- Contact Section below Transaction History -->
                        <div class="bg-gray-50 border border-gray-100 rounded-[2rem] p-6 space-y-4">
                            <h3 class="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] px-2">Contact & Support</h3>
                            <div class="space-y-3">
                                <div onclick="window.copyToClipboard('capacitynigtech@gmail.com')" class="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 active:scale-95 transition-transform">
                                    <div class="bg-orange-100 p-2 rounded-lg text-orange-600"><i data-lucide="mail" size="14"></i></div>
                                    <div class="overflow-hidden"><p class="text-[7px] font-black text-gray-400 uppercase">Email Address</p><p class="text-[10px] font-black text-gray-800 truncate">capacitynigtech@gmail.com</p></div>
                                </div>
                                <div onclick="window.copyToClipboard('09018511585')" class="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 active:scale-95 transition-transform">
                                    <div class="bg-green-100 p-2 rounded-lg text-green-600"><i data-lucide="message-circle" size="14"></i></div>
                                    <div class="overflow-hidden"><p class="text-[7px] font-black text-gray-400 uppercase">WhatsApp</p><p class="text-[10px] font-black text-gray-800">09018511585</p></div>
                                </div>
                                <div onclick="window.copyToClipboard('+2349089189945')" class="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 active:scale-95 transition-transform">
                                    <div class="bg-blue-100 p-2 rounded-lg text-blue-600"><i data-lucide="phone" size="14"></i></div>
                                    <div class="overflow-hidden"><p class="text-[7px] font-black text-gray-400 uppercase">Support Line</p><p class="text-[10px] font-black text-gray-800">+2349089189945</p></div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            } else if (state.activeTab === 'sim') {
                return `
                    <div class="p-5">
                        <h2 class="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-4 px-2">Select Your SIM Number</h2>
                        ${state.orderStep === 'browse' ? `
                            <div class="grid grid-cols-1 gap-2">
                                ${availableNumbers.map(n => `<div onclick="window.selectSIM('${n}')" class="p-5 bg-gray-50 rounded-2xl flex justify-between items-center active:bg-orange-600 active:text-white">
                                    <span class="font-black text-xs tracking-widest">${n}</span><span class="text-[9px] font-black bg-white/20 px-2 py-1 rounded-lg">₦1,500</span>
                                </div>`).join('')}
                            </div>
                        ` : state.orderStep === 'method' ? `
                             <div class="bg-white border-2 border-orange-100 p-6 rounded-[3rem] space-y-4">
                                <p class="text-[10px] font-black uppercase text-gray-400 text-center">Select Payment Method</p>
                                <div onclick="window.triggerFeedback('Coming soon')" class="bg-orange-600 p-5 rounded-2xl text-white flex justify-between items-center cursor-pointer">
                                    <div class="flex items-center gap-3"><i data-lucide="wallet"></i><span class="font-black uppercase text-xs">Capacity Wallet</span></div>
                                    <span class="text-[9px] font-black uppercase opacity-80">Bal: ₦${state.appUserData.walletBalance}</span>
                                </div>
                                <div onclick="window.setOrderStep('payment')" class="bg-gray-100 p-5 rounded-2xl text-gray-800 flex justify-between items-center cursor-pointer">
                                    <div class="flex items-center gap-3"><i data-lucide="landmark"></i><span class="font-black uppercase text-xs">Bank Transfer</span></div>
                                    <i data-lucide="chevron-right"></i>
                                </div>
                                <p onclick="window.setOrderStep('browse')" class="text-[8px] font-black text-gray-400 uppercase text-center cursor-pointer mt-4">← Back to Numbers</p>
                             </div>
                        ` : `
                            <div class="bg-orange-600 p-6 rounded-[3rem] text-center space-y-6 text-white border-b-8 border-orange-800">
                                <p class="text-[10px] font-black uppercase text-white/60">Checkout: ${state.selectedNumber}</p>
                                <div class="bg-white text-gray-900 p-6 rounded-2xl text-left space-y-4 shadow-2xl">
                                    <p class="text-[8px] font-black uppercase text-orange-600">Official Payment Account</p>
                                    <div onclick="window.copyToClipboard('1101108051')">
                                        <p class="text-[7px] text-gray-400 uppercase">Account Number</p>
                                        <p class="text-xl font-black text-orange-600 tracking-tighter">1101108051</p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div><p class="text-[7px] text-gray-400 uppercase">Bank</p><p class="text-[10px] font-black uppercase">9PSB</p></div>
                                        <div><p class="text-[7px] text-gray-400 uppercase">Name</p><p class="text-[10px] font-black uppercase">AUWAL TUKUR</p></div>
                                    </div>
                                </div>
                                <div class="bg-white/20 rounded-2xl p-4 text-left border border-white/30">
                                    <p class="text-[8px] font-black uppercase text-white tracking-wider mb-1">Office Pickup</p>
                                    <p class="text-[9px] font-bold text-white/90">Shagon Kwalba mai aski, hanyar yanhoho</p>
                                </div>
                                <button onclick="window.triggerFeedback('Processing Payment Verification...')" class="w-full bg-white text-orange-600 p-4 rounded-2xl font-black uppercase text-[10px] shadow-lg">Confirm Transfer</button>
                                <p onclick="window.setOrderStep('method')" class="text-[8px] font-black text-white/60 uppercase cursor-pointer">← Change Method</p>
                            </div>
                        `}
                    </div>`;
            } else {
                return `
                    <div class="p-6">
                        <div class="bg-gray-50 p-8 rounded-[3rem] text-center space-y-4">
                            <div class="w-16 h-16 bg-orange-600 rounded-2xl mx-auto flex items-center justify-center text-2xl font-black text-white uppercase">${state.appUserData.name[0]}</div>
                            <h2 class="text-xl font-black uppercase text-gray-800">${state.appUserData.name}</h2>
                        </div>
                        <div class="mt-8 space-y-3">
                            <div onclick="window.triggerFeedback('Fingerprint login is active')" class="p-4 bg-gray-50 rounded-2xl flex items-center justify-between border">
                                <span class="text-[10px] font-black uppercase text-gray-500">Enable Fingerprint</span>
                                <div class="w-10 h-5 bg-orange-600 rounded-full flex items-center px-1 justify-end"><div class="w-3 h-3 bg-white rounded-full"></div></div>
                            </div>
                        </div>
                        <button onclick="window.logout()" class="w-full text-red-500 font-black text-[10px] uppercase py-10 tracking-[0.3em] active:opacity-40">Disconnect Account</button>
                    </div>`;
            }
        }

        window.setAuthMode = (mode) => setState({ authMode: mode });
        window.setActiveTab = (tab) => setState({ activeTab: tab, orderStep: 'browse' });
        window.setOrderStep = (step) => setState({ orderStep: step });
        window.selectSIM = (n) => setState({ selectedNumber: n, orderStep: 'method' });
        window.triggerFeedback = triggerFeedback;
        window.logout = () => setState({ isLoggedIn: false, authMode: 'welcome' });
        window.submitForm = () => { if(state.authMode === 'signup') handleSignup(); else handleLogin(); };

        render();
    </script>
</body>
</html>


