import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  Smartphone, 
  Home, 
  ArrowRight, 
  Cpu, 
  MessageCircle,
  Mail,
  Phone,
  Settings,
  CreditCard,
  Building2,
  MapPin,
  IdCard,
  History,
  Gift,
  Fingerprint
} from 'lucide-react';

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'capacity-nigtech-v1';

export default function App() {
  const [user, setUser] = useState(null);
  const [appUserData, setAppUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState({ show: false, msg: '', type: 'success' });
  
  // Forms
  const [signupForm, setSignupForm] = useState({ name: '', password: '' });
  const [loginForm, setLoginForm] = useState({ name: '', password: '' });
  
  // SIM Gallery
  const [orderStep, setOrderStep] = useState('browse');
  const [selectedNumber, setSelectedNumber] = useState(null);

  const availableNumbers = ["08172364140", "08172364187", "08172364339", "08172364435", "08172364556", "08172364573", "08172364595", "08172364607", "08172389277", "08172389287", "08172389347", "08172389367", "09089189945"].sort();
  const ussdCodes = [
    { label: "Airtime Bal", code: "*301*8*5#" }, 
    { label: "Data Bal", code: "*301*8*6#" }, 
    { label: "Recharge", code: "*311*PIN#" }, 
    { label: "My Number", code: "*301*8*1#" }
  ];

  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const triggerFeedback = (msg) => {
    setFeedback({ show: true, msg });
    setTimeout(() => setFeedback({ show: false, msg: '' }), 4000);
  };

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el);
    triggerFeedback("Copied to Clipboard");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!user) return;
    const name = signupForm.name.trim();
    if (signupForm.password.length < 4) return triggerFeedback("Min 4 chars");
    setIsProcessing(true);
    try {
      // Path based on Rule 1: /artifacts/{appId}/public/data/{collectionName}
      const userRef = doc(db, 'artifacts', appId, 'public', 'data', 'users', name.toLowerCase());
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        triggerFeedback("Username taken");
      } else {
        const newProfile = {
          name: name,
          password: signupForm.password,
          walletBalance: 200,
          joinedAt: new Date().toLocaleDateString(),
          uid: user.uid
        };
        await setDoc(userRef, newProfile);
        setAppUserData(newProfile);
        setIsLoggedIn(true);
        triggerFeedback("Welcome to Capacity");
      }
    } catch (err) {
      triggerFeedback("Network Error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    const name = loginForm.name.trim();
    if (!name || !loginForm.password) return triggerFeedback("Enter details");
    setIsProcessing(true);
    try {
      const userRef = doc(db, 'artifacts', appId, 'public', 'data', 'users', name.toLowerCase());
      const docSnap = await getDoc(userRef);
      
      if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.password === loginForm.password) {
              setAppUserData(userData);
              setIsLoggedIn(true);
              triggerFeedback("Login Successful");
          } else {
              triggerFeedback("Wrong password");
          }
      } else {
          triggerFeedback("Wrong username");
      }
    } catch (err) {
      triggerFeedback("Login Failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFingerprintLogin = () => {
    if (!loginForm.name) {
        triggerFeedback("Enter username first");
        return;
    }
    triggerFeedback("Scanning Fingerprint...");
    // Simulating biometric verification delay
    setTimeout(() => {
        handleLogin();
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col p-8 items-center justify-center">
        <div className="w-20 h-20 bg-orange-600 rounded-3xl mb-6 flex items-center justify-center shadow-2xl">
           <span className="text-white text-4xl font-black">C</span>
        </div>
        <div className="text-center mb-10">
            <h1 className="font-black text-2xl text-orange-600 tracking-tighter uppercase mb-1">Capacity Nigtech</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed max-w-[240px] mx-auto">
                Game changer of Connectivity join the future
            </p>
        </div>
        <div className="w-full space-y-4 max-w-sm">
            {authMode === 'welcome' ? (
                <>
                    <button onClick={() => setAuthMode('signup')} className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all">Create Account</button>
                    <button onClick={() => setAuthMode('login')} className="w-full bg-gray-100 text-gray-800 py-4 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-all">Log in</button>
                </>
            ) : (
                <form className="space-y-4" onSubmit={authMode === 'signup' ? handleSignup : handleLogin}>
                    <input type="text" placeholder="Username" className="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500 transition-all uppercase" value={authMode === 'signup' ? signupForm.name : loginForm.name} onChange={(e) => authMode === 'signup' ? setSignupForm({...signupForm, name: e.target.value}) : setLoginForm({...loginForm, name: e.target.value})} required />
                    <input type="password" placeholder="Password" className="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-orange-500 transition-all" value={authMode === 'signup' ? signupForm.password : loginForm.password} onChange={(e) => authMode === 'signup' ? setSignupForm({...signupForm, password: e.target.value}) : setLoginForm({...loginForm, password: e.target.value})} required />
                    
                    <div className="flex gap-2">
                        <button disabled={isProcessing} className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-md">
                            {isProcessing ? "Connecting..." : (authMode === 'signup' ? "Join Future" : "Log in")}
                        </button>
                        
                        {authMode === 'login' && (
                            <button 
                                type="button"
                                onClick={handleFingerprintLogin}
                                className="w-16 bg-gray-100 text-orange-600 rounded-2xl flex items-center justify-center border-2 border-orange-50 active:scale-95 transition-all"
                            >
                                <Fingerprint size={24} />
                            </button>
                        )}
                    </div>

                    <p onClick={() => setAuthMode('welcome')} className="text-center text-[10px] text-gray-400 font-black uppercase pt-2 cursor-pointer">← Back</p>
                </form>
            )}
        </div>
        {feedback.show && <div className="fixed top-10 left-6 right-6 z-[100] p-4 bg-gray-900 text-white text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl">{feedback.msg}</div>}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col overflow-hidden">
        <header className="px-6 py-4 flex items-center justify-between border-b bg-white z-50">
            <div className="flex flex-col">
                <span className="font-black text-orange-600 text-sm tracking-tighter uppercase">Capacity Nigtech</span>
                <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Future connected</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active User</p>
                <p className="text-[11px] font-black text-gray-800 uppercase tracking-tighter">Hi, {appUserData?.name}</p>
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black shadow-md">
                  {appUserData?.name[0]?.toUpperCase()}
              </div>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-32">
            {activeTab === 'home' && (
                <div className="p-5 space-y-6">
                    <div className="space-y-4">
                        <div 
                            onClick={() => triggerFeedback("Coming soon")}
                            className="bg-orange-600 rounded-3xl p-5 text-white shadow-xl flex items-center justify-between border-b-4 border-orange-700 active:scale-[0.98] transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                              <div className="bg-white/20 p-2.5 rounded-xl border border-white/30">
                                <Cpu className="text-white" size={18} />
                              </div>
                              <div>
                                <p className="text-[8px] font-black text-white/80 tracking-[0.2em] mb-0.5 uppercase">Capacity Balance</p>
                                <p className="text-xl font-black tracking-tight">₦{appUserData?.walletBalance}.00</p>
                              </div>
                            </div>
                            <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                              <span className="text-[7px] font-black uppercase tracking-widest text-white">User wallet</span>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-5 space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-2">
                                    <History size={14} className="text-orange-600" />
                                    <h3 className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">Transaction History</h3>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-orange-600 shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600">
                                                <Gift size={12} />
                                            </div>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Welcome Reward</span>
                                        </div>
                                        <span className="text-[10px] font-black text-green-600 tracking-tighter">+₦200.00</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-gray-600 leading-relaxed italic">
                                        "Congratulations you received 200 naira gift from Capacity Nigtech CEO Mr AUWAL TUKUR thank you for believing in the vision"
                                    </p>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-[7px] font-black text-green-600 uppercase">Welcome Alert</span>
                                        <span className="text-[7px] font-black text-gray-300 uppercase">{appUserData?.joinedAt || 'Today'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {ussdCodes.map((item, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100 active:bg-orange-600 active:text-white transition-all group" onClick={() => copyToClipboard(item.code)}>
                                <p className="text-[7px] font-black text-gray-400 uppercase mb-1 tracking-widest group-active:text-white/70">{item.label}</p>
                                <p className="text-[11px] font-black text-gray-800 tracking-wider group-active:text-white">{item.code}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-6 space-y-4">
                        <h3 className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] px-2">Support Terminal</h3>
                        <div className="space-y-2">
                          <div onClick={() => copyToClipboard("capacitynigtech@gmail.com")} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl active:scale-95 transition-all">
                             <Mail size={16} className="text-orange-600" />
                             <span className="text-[10px] font-black text-gray-700 tracking-tighter">capacitynigtech@gmail.com</span>
                          </div>
                          <div onClick={() => window.open("https://wa.me/2349018511585")} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl active:scale-95 transition-all">
                             <MessageCircle size={16} className="text-green-600" />
                             <span className="text-[10px] font-black text-gray-700 tracking-tighter">WhatsApp: 09018511585</span>
                          </div>
                          <div onClick={() => copyToClipboard("+23490891899")} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl active:scale-95 transition-all">
                             <Phone size={16} className="text-blue-600" />
                             <span className="text-[10px] font-black text-gray-700 tracking-tighter">+234 908 918 99</span>
                          </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-[2.5rem] border border-orange-100 flex items-center justify-between active:scale-95 transition-all" onClick={() => {setActiveTab('sim'); setOrderStep('browse');}}>
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-600 p-2.5 rounded-xl text-white"><Smartphone size={20} /></div>
                            <div>
                                <p className="font-black text-[11px] uppercase tracking-tighter text-orange-900">Get Capacity SIM</p>
                                <p className="text-[7px] font-bold text-orange-400 uppercase tracking-widest">Fresh Numbers Available</p>
                            </div>
                        </div>
                        <ArrowRight size={18} className="text-orange-400" />
                    </div>
                </div>
            )}

            {activeTab === 'sim' && (
                <div className="p-5">
                    <h2 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-4 px-2">Capacity SIM Cards</h2>
                    {orderStep === 'browse' ? (
                        <div className="grid grid-cols-1 gap-2">
                            {availableNumbers.map(n => (
                                <div key={n} onClick={() => {setSelectedNumber(n); setOrderStep('payment');}} className="p-5 bg-gray-50 rounded-2xl flex justify-between items-center active:bg-orange-600 active:text-white transition-all">
                                    <span className="font-black text-xs tracking-widest">{n}</span>
                                    <span className="text-[9px] font-black bg-white/20 px-2 py-1 rounded-lg">₦1,500</span>
                                </div>
                            ))}
                        </div>
                    ) : orderStep === 'payment' ? (
                        <div className="bg-white border-2 border-orange-100 p-6 rounded-[3rem] space-y-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 bg-orange-600 py-1 text-center">
                                <span className="text-[7px] font-black text-white uppercase tracking-[0.3em]">Checkout Terminal</span>
                            </div>
                            
                            <div className="pt-6 text-center">
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Total Amount</p>
                                <p className="text-3xl font-black text-gray-800">₦1,500</p>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 space-y-3">
                                <div className="flex items-start gap-3">
                                    <IdCard className="text-orange-600 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[9px] font-black uppercase text-orange-900 tracking-wider">Registration Required</p>
                                        <p className="text-[8px] font-bold text-orange-700 leading-relaxed">Please bring your National ID card for SIM registration and pickup.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pt-2 border-t border-orange-200">
                                    <MapPin className="text-orange-600 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-[9px] font-black uppercase text-orange-900 tracking-wider">Pickup Office</p>
                                        <p className="text-[10px] font-black text-orange-800 tracking-tighter">Shagon Kwalba mai aski, hanyar yanhoho</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button 
                                    onClick={() => triggerFeedback("Coming soon")}
                                    className="w-full bg-orange-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-all shadow-lg border-b-4 border-orange-800"
                                >
                                    <div className="flex items-center gap-2">
                                        <CreditCard size={16} />
                                        <span className="font-black uppercase text-[10px]">Payment with Capacity wallet</span>
                                    </div>
                                    <span className="text-[7px] font-bold opacity-80 uppercase tracking-widest">Balance: ₦200.00</span>
                                </button>

                                <button 
                                    onClick={() => setOrderStep('bank')}
                                    className="w-full bg-gray-900 text-white p-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg border-b-4 border-black"
                                >
                                    <Building2 size={16} />
                                    <span className="font-black uppercase text-[10px]">Bank Transfer</span>
                                </button>
                            </div>

                            <p onClick={() => setOrderStep('browse')} className="text-[8px] font-black text-gray-400 text-center uppercase cursor-pointer">← Back to Cards</p>
                        </div>
                    ) : (
                        <div className="bg-orange-600 p-6 rounded-[3rem] text-center space-y-5 shadow-xl text-white">
                            <p className="text-[8px] font-black uppercase text-white/70 tracking-widest">Bank Details</p>
                            <p className="text-2xl font-black text-white">{selectedNumber}</p>
                            
                            <div className="bg-white/10 rounded-2xl p-4 text-left border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={14} className="text-white" />
                                    <p className="text-[8px] font-black uppercase tracking-widest">Pickup Address</p>
                                </div>
                                <p className="text-[11px] font-black">Shagon Kwalba mai aski, hanyar yanhoho</p>
                                <p className="text-[8px] font-bold opacity-70 mt-1">* Remember to bring your National ID</p>
                            </div>

                            <div className="border-t border-white/20 pt-4 text-left">
                                <p className="text-[7px] font-black text-white/60 uppercase mb-2">Transfer ₦1,500 to Account</p>
                                <p className="text-xl font-black text-white" onClick={() => copyToClipboard("1101108051")}>1101108051</p>
                                <p className="text-[9px] font-black text-white/80 uppercase mt-1">9PSB / AUWAL TUKUR</p>
                            </div>
                            <button onClick={() => window.open(`https://wa.me/2349018511585?text=Paid for ${selectedNumber}. I will pick up at Shagon Kwalba mai aski.`)} className="w-full bg-white text-orange-600 py-4 rounded-2xl font-black uppercase text-xs shadow-lg active:scale-95 transition-all">Send Receipt</button>
                            <p onClick={() => setOrderStep('payment')} className="text-[8px] font-black text-white/50 uppercase cursor-pointer">← Back to Payment</p>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'profile' && (
                <div className="p-6 space-y-6">
                    <h2 className="font-black uppercase text-[10px] tracking-widest text-gray-400 px-2">Capacity Settings</h2>
                    <div className="bg-gray-50 p-8 rounded-[3rem] text-center space-y-4 border border-gray-100 relative overflow-hidden">
                        <div className="w-16 h-16 bg-orange-600 rounded-2xl mx-auto flex items-center justify-center text-2xl font-black text-white shadow-xl">
                            {appUserData?.name[0]?.toUpperCase()}
                        </div>
                        <h2 className="text-xl font-black uppercase tracking-tighter text-gray-800">{appUserData?.name}</h2>
                        <span className="inline-block bg-white text-orange-600 text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-orange-100">Verified Member</span>
                    </div>
                    
                    <button onClick={() => setIsLoggedIn(false)} className="w-full text-red-500 font-black text-[10px] uppercase py-5 border-t border-gray-100 tracking-[0.3em] mt-2 active:opacity-40">Disconnect Account</button>
                </div>
            )}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t px-6 pt-4 pb-8 flex justify-around items-center z-[100] rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <div onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer">
              <div className={`p-2 rounded-xl transition-all ${activeTab === 'home' ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-300'}`}><Home size={22} /></div>
              <span className={`text-[7px] font-black uppercase tracking-widest transition-all ${activeTab === 'home' ? 'text-orange-600' : 'text-gray-300'}`}>Capacity Home</span>
            </div>
            
            <div onClick={() => {setActiveTab('sim'); setOrderStep('browse');}} className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer">
              <div className={`p-2 rounded-xl transition-all ${activeTab === 'sim' ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-300'}`}><Smartphone size={22} /></div>
              <span className={`text-[7px] font-black uppercase tracking-widest transition-all ${activeTab === 'sim' ? 'text-orange-600' : 'text-gray-300'}`}>Capacity SIM Cards</span>
            </div>
            
            <div onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer">
              <div className={`p-2 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-300'}`}><Settings size={22} /></div>
              <span className={`text-[7px] font-black uppercase tracking-widest transition-all ${activeTab === 'profile' ? 'text-orange-600' : 'text-gray-300'}`}>Capacity Setting</span>
            </div>
        </nav>

        {feedback.show && <div className="fixed top-10 left-6 right-6 z-[200] p-4 bg-gray-900 text-white text-[10px] font-black uppercase rounded-2xl text-center shadow-2xl border-l-4 border-orange-600">{feedback.msg}</div>}
    </div>
  );
}

