<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <!-- GOOGLE & AI SEO (SEARCH ENGINE OPTIMIZATION) -->
    <title>Capacity Nigtech Telecom | Buy Capacity SIM Cards</title>
    <meta name="description" content="Official Capacity Nigtech Telecom app. Buy Capacity SIM cards, manage airtime, and data. Managed by Auwal Tukur.">
    <meta name="keywords" content="Capacity SIM, Capacity Nigtech, Buy SIM Nigeria, Auwal Tukur, Telecom Nigeria">
    
    <!-- AI JSON-LD Knowledge Graph (Helps Gemini/ChatGPT/Google know your business) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TelecomBusiness",
      "name": "Capacity Nigtech",
      "founder": "Auwal Tukur",
      "description": "The official portal for Capacity SIM cards and telecom services in Nigeria.",
      "telephone": "+2349089189945",
      "url": "https://capacitynigtech.github.io/"
    }
    </script>

    <!-- Tailwind CSS & React Scripts -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        body { 
            background-color: #F97316; 
            -webkit-tap-highlight-color: transparent; 
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
            overflow: hidden; 
        }
        ::-webkit-scrollbar { display: none; }
        .animate-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // Custom Icon Component for Lucide
        const Icon = ({ name, size = 16, className = "" }) => {
            useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
            return <i data-lucide={name} className={className} style={{ width: size, height: size }}></i>;
        };

        function App() {
            const [isLoggedIn, setIsLoggedIn] = useState(false);
            const [authMode, setAuthMode] = useState('welcome');
            const [activeTab, setActiveTab] = useState('home');
            const [userData, setUserData] = useState({ name: '', password: '', walletBalance: 200 });
            const [loginForm, setLoginForm] = useState({ name: '', password: '' });
            const [orderStep, setOrderStep] = useState('browse');
            const [selectedNumber, setSelectedNumber] = useState(null);
            const [isProcessing, setIsProcessing] = useState(false);
            const [feedback, setFeedback] = useState({ show: false, msg: '', type: 'success' });

            const availableNumbers = ["08172364140", "08172364187", "08172364339", "08172364435", "08172364556", "08172364573", "08172364595", "08172364607", "08172389277", "08172389287", "08172389347", "08172389367", "09089189945"].sort();
            const ussdCodes = [
                { label: "Airtime Bal", code: "*301*8*5#" }, 
                { label: "Data Bal", code: "*301*8*6#" }, 
                { label: "Recharge", code: "*311*PIN#" }, 
                { label: "My Number", code: "*301*8*1#" }
            ];

            const triggerFeedback = (msg, type = 'success') => {
                setFeedback({ show: true, msg, type });
                setTimeout(() => setFeedback({ show: false, msg: '', type: 'success' }), 3000);
            };

            const copyToClipboard = (text) => {
                const el = document.createElement('textarea');
                el.value = text; document.body.appendChild(el); el.select();
                document.execCommand('copy'); document.body.removeChild(el);
                triggerFeedback("Copied to Clipboard");
            };

            const handleSignup = (e) => {
                e.preventDefault();
                if (userData.password.length !== 4) return triggerFeedback("PIN must be 4 digits", "error");
                
                setIsProcessing(true);
                setTimeout(() => {
                    const localUsers = JSON.parse(localStorage.getItem('nigtech_users') || '[]');
                    if (localUsers.find(u => u.name.toLowerCase() === userData.name.toLowerCase())) {
                        triggerFeedback("Username already exists", "error");
                        setIsProcessing(false);
                        return;
                    }
                    const newUser = { ...userData, walletBalance: 200, id: Date.now() };
                    localUsers.push(newUser);
                    localStorage.setItem('nigtech_users', JSON.stringify(localUsers));
                    setUserData(newUser);
                    setIsLoggedIn(true);
                    setIsProcessing(false);
                    triggerFeedback("Welcome! Bonus ₦200 Received");
                }, 1000);
            };

            const handleLogin = (e) => {
                e.preventDefault();
                setIsProcessing(true);
                setTimeout(() => {
                    const localUsers = JSON.parse(localStorage.getItem('nigtech_users') || '[]');
                    const found = localUsers.find(u => u.name.toLowerCase() === loginForm.name.toLowerCase());
                    
                    if (!found) {
                        triggerFeedback("Account not found", "error");
                    } else if (found.password !== loginForm.password) {
                        triggerFeedback("Incorrect PIN", "error");
                    } else {
                        setUserData(found);
                        setIsLoggedIn(true);
                        triggerFeedback("Access Granted");
                    }
                    setIsProcessing(false);
                }, 1000);
            };

            if (!isLoggedIn) {
                return (
                    <div className="fixed inset-0 bg-white flex flex-col p-8 items-center justify-center animate-in">
                        <div className="w-20 h-20 bg-orange-600 rounded-3xl mb-4 flex items-center justify-center shadow-lg">
                           <span className="text-white text-4xl font-black">C</span>
                        </div>
                        <h1 className="font-black text-2xl text-orange-600 tracking-tighter uppercase mb-2">Capacity Nigtech</h1>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-8">Telecom Services</p>
                        
                        <div className="w-full space-y-3">
                            {authMode === 'welcome' ? (
                                <>
                                    <button onClick={() => setAuthMode('signup')} className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md active:scale-95 transition-transform">Create Account</button>
                                    <button onClick={() => setAuthMode('login')} className="w-full bg-gray-100 text-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-transform">Sign In</button>
                                </>
                            ) : (
                                <form className="space-y-3" onSubmit={authMode === 'signup' ? handleSignup : handleLogin}>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        className="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border border-transparent focus:border-orange-500" 
                                        onChange={(e) => authMode === 'signup' ? setUserData({...userData, name: e.target.value}) : setLoginForm({...loginForm, name: e.target.value})} 
                                        required 
                                    />
                                    <input 
                                        type="password" 
                                        inputMode="numeric"
                                        maxLength="4"
                                        placeholder="4-Digit PIN" 
                                        className="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border border-transparent focus:border-orange-500" 
                                        onChange={(e) => authMode === 'signup' ? setUserData({...userData, password: e.target.value}) : setLoginForm({...loginForm, password: e.target.value})} 
                                        required 
                                    />
                                    <button className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md">
                                        {isProcessing ? "Validating..." : (authMode === 'signup' ? "Join Capacity" : "Login")}
                                    </button>
                                    <p onClick={() => setAuthMode('welcome')} className="text-center text-[10px] text-gray-400 font-black uppercase pt-4 cursor-pointer">Go Back</p>
                                </form>
                            )}
                        </div>
                    </div>
                );
            }

            return (
                <div className="fixed inset-0 bg-white flex flex-col overflow-hidden">
                    <header className="px-5 py-4 flex items-center justify-between border-b bg-white z-50">
                        <span className="font-black text-orange-600 text-sm tracking-tighter">CAPACITY NIGTECH</span>
                        <div className="flex items-center gap-2" onClick={() => setActiveTab('profile')}>
                            <span className="text-[9px] font-black text-gray-400 uppercase">{userData.name}</span>
                            <div className="w-8 h-8 bg-orange-600 rounded-xl flex items-center justify-center shadow-sm">
                                <span className="text-white text-[11px] font-black uppercase">{userData.name[0]}</span>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto pb-24">
                        {activeTab === 'home' && (
                            <div className="p-4 animate-in space-y-6">
                                <div className="bg-orange-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                                    <p className="text-[8px] font-black opacity-70 tracking-widest mb-1 uppercase">Your Balance</p>
                                    <p className="text-4xl font-black tracking-tight">₦{userData.walletBalance}.00</p>
                                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10"><Icon name="globe" size={120} /></div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    {ussdCodes.map((item, i) => (
                                        <div key={i} className="bg-gray-50 p-5 rounded-3xl text-center active:bg-orange-50 border border-transparent shadow-sm" onClick={() => copyToClipboard(item.code)}>
                                            <p className="text-[7px] font-black text-gray-400 uppercase mb-1 tracking-widest">{item.label}</p>
                                            <p className="text-[13px] font-black text-gray-800 tracking-wider">{item.code}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white p-6 rounded-3xl flex items-center justify-between border-2 border-orange-50 active:bg-gray-50 shadow-sm" onClick={() => {setActiveTab('sim'); setOrderStep('browse');}}>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-md"><Icon name="smartphone" size={20} /></div>
                                        <div className="flex flex-col">
                                            <p className="font-black text-[12px] uppercase">Buy Capacity SIM</p>
                                            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Starting ₦1,500</p>
                                        </div>
                                    </div>
                                    <Icon name="chevron-right" size={20} className="text-gray-300" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'sim' && (
                            <div className="p-4 animate-in space-y-4">
                                {orderStep === 'browse' ? (
                                    <>
                                        <h2 className="font-black uppercase text-sm tracking-tighter px-1">Select Your Number</h2>
                                        <div className="space-y-2">
                                            {availableNumbers.map(n => (
                                                <div key={n} onClick={() => {setSelectedNumber(n); setOrderStep('payment');}} className="p-5 bg-gray-50 rounded-2xl flex justify-between items-center active:bg-orange-600 active:text-white shadow-sm">
                                                    <span className="font-black text-sm tracking-widest">{n}</span>
                                                    <span className="text-[10px] font-black uppercase opacity-60">₦1,500</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="bg-white border-2 border-orange-50 p-6 rounded-[2.5rem] space-y-6 shadow-xl">
                                            <div className="text-center">
                                                <h3 className="font-black text-[10px] uppercase text-orange-600 tracking-widest mb-1">Confirm Selection</h3>
                                                <p className="text-2xl font-black text-gray-800">{selectedNumber}</p>
                                            </div>
                                            
                                            <div className="space-y-4 border-t pt-5">
                                                <div onClick={() => copyToClipboard("1101108051")} className="cursor-pointer active:opacity-50">
                                                    <p className="text-[8px] font-black text-gray-400 uppercase">9PSB Account Number</p>
                                                    <p className="text-2xl font-black text-gray-800">1101108051</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] font-black text-gray-400 uppercase">Account Name</p>
                                                    <p className="text-xs font-black text-gray-700">T2MOBILE/AUWAL TUKUR</p>
                                                </div>
                                            </div>
                                            
                                            <button onClick={() => window.open(`https://wa.me/2349018511585?text=I paid ₦1,500 for ${selectedNumber}`)} className="w-full bg-green-600 text-white py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                                                <Icon name="check-circle" size={18} /> Confirm Payment
                                            </button>
                                        </div>
                                        <p onClick={() => setOrderStep('browse')} className="text-center text-[10px] font-black text-gray-400 uppercase cursor-pointer py-2 tracking-widest">Back to Gallery</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'help' && (
                            <div className="p-4 space-y-3 animate-in">
                                <h2 className="font-black uppercase text-sm mb-4 tracking-tighter">Support Center</h2>
                                <div className="bg-gray-50 p-6 rounded-3xl flex items-center gap-4 active:bg-green-50" onClick={() => window.open("https://wa.me/2349018511585")}>
                                    <div className="bg-green-100 p-3 rounded-2xl text-green-600"><Icon name="message-circle" size={24} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-gray-400 uppercase">WhatsApp Help</span>
                                        <span className="text-xs font-black">0901 851 1585</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-3xl flex items-center gap-4 active:bg-blue-50" onClick={() => window.open("tel:+2349089189945")}>
                                    <div className="bg-blue-100 p-3 rounded-2xl text-blue-600"><Icon name="phone" size={24} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-gray-400 uppercase">Call Support</span>
                                        <span className="text-xs font-black">+234 908 918 9945</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'profile' && (
                            <div className="p-4 animate-in space-y-6">
                                <div className="flex items-center gap-5 bg-gray-50 p-8 rounded-[3rem] shadow-sm">
                                    <div className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center font-black text-white text-3xl shadow-lg">
                                        {userData.name[0]?.toUpperCase()}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black uppercase tracking-tight">{userData.name}</h2>
                                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Capacity Member</p>
                                    </div>
                                </div>
                                <div className="bg-white border-2 border-gray-50 p-6 rounded-3xl space-y-5 shadow-sm">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase">
                                        <span className="text-gray-400">Status</span>
                                        <span className="text-green-600">Active</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase border-t pt-5">
                                        <span className="text-gray-400">Account ID</span>
                                        <span className="text-gray-800 tracking-widest">#{userData.id.toString().slice(-6)}</span>
                                    </div>
                                    <button onClick={() => { setIsLoggedIn(false); triggerFeedback("Signed Out"); }} className="w-full text-red-500 font-black text-[11px] uppercase pt-5 tracking-[0.2em] border-t active:opacity-40">Logout Account</button>
                                </div>
                            </div>
                        )}
                    </main>

                    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-8 py-6 flex justify-between items-center z-50 rounded-t-[3rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
                        <div onClick={() => setActiveTab('home')} className={`transition-all ${activeTab === 'home' ? 'text-orange-600 scale-125' : 'text-gray-300'}`}><Icon name="home" size={24} /></div>
                        <div onClick={() => {setActiveTab('sim'); setOrderStep('browse');}} className={`transition-all ${activeTab === 'sim' ? 'text-orange-600 scale-125' : 'text-gray-300'}`}><Icon name="shopping-cart" size={24} /></div>
                        <div onClick={() => setActiveTab('help')} className={`transition-all ${activeTab === 'help' ? 'text-orange-600 scale-125' : 'text-gray-300'}`}><Icon name="help-circle" size={24} /></div>
                        <div onClick={() => setActiveTab('profile')} className={`transition-all ${activeTab === 'profile' ? 'text-orange-600 scale-125' : 'text-gray-300'}`}><Icon name="user" size={24} /></div>
                    </nav>

                    {feedback.show && (
                        <div className={`fixed top-12 left-1/2 -translate-x-1/2 z-[100] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl animate-in ${feedback.type === 'error' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white'}`}>
                            {feedback.msg}
                        </div>
                    )}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>


