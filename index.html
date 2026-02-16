<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramadan Kareem by Capacity Nigtech</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Amiri:wght@400;700&display=swap');
    
        body {
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at top right, #0f172a, #020617);
            color: #f8fafc;
            min-height: 100vh;
        }

        .arabic {
            font-family: 'Amiri', serif;
        }

        .glass {
            background: rgba(30, 41, 59, 0.4);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .timer-glow {
            text-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
        }

        .moon-glow {
            filter: drop-shadow(0 0 8px rgba(110, 231, 183, 0.8));
            animation: pulse-glow 3s infinite ease-in-out;
        }

        @keyframes pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(110, 231, 183, 0.4)); }
            50% { filter: drop-shadow(0 0 12px rgba(110, 231, 183, 0.9)); }
        }

        .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #10b981;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
    </style>
</head>
<body class="p-4 md:p-8">
    <div class="max-w-6xl mx-auto space-y-6">
        
        <!-- Updated Header: Moon in front of Ramadan Kareem -->
        <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div class="flex flex-col">
                <div class="flex items-center gap-3">
                    <!-- Beautiful Moon in the front -->
                    <div class="text-3xl md:text-4xl text-emerald-300 moon-glow">
                        <i class="fas fa-moon"></i>
                    </div>
                    <h1 class="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400">
                        Ramadan Kareem
                    </h1>
                </div>
                <!-- Branding aligned left underneath -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 pl-10 md:pl-12">
                    <p class="text-emerald-500/80 text-[10px] font-black tracking-[0.3em] uppercase">
                        By Capacity Nigtech
                    </p>
                    <p id="current-location" class="text-slate-500 text-xs flex items-center gap-2">
                        <span class="w-1 h-1 bg-slate-600 rounded-full hidden sm:block"></span>
                        <i class="fas fa-location-arrow text-[10px]"></i> Detecting...
                    </p>
                </div>
            </div>

            <!-- Date Display -->
            <div class="glass px-6 py-3 rounded-2xl border-l-4 border-l-emerald-500 w-full md:w-auto">
                <div id="hijri-date" class="text-lg font-bold text-emerald-400">--</div>
                <div id="gregorian-date" class="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">--</div>
            </div>
        </header>

        <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left Column: Primary Info -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Countdown -->
                <div class="glass rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
                    <div class="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none rotate-12">
                        <i class="fas fa-mosque text-[15rem]"></i>
                    </div>
                    
                    <h2 id="countdown-label" class="text-emerald-500/60 uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Time Until Iftar</h2>
                    <div id="countdown-timer" class="text-6xl md:text-9xl font-black timer-glow mb-8 font-mono tracking-tighter">00:00:00</div>
                    
                    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div class="p-4 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                            <p class="text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-widest">Suhoor Ends</p>
                            <p id="fajr-time" class="font-bold text-2xl text-white">--:--</p>
                        </div>
                        <div class="p-4 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                            <p class="text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-widest">Iftar Starts</p>
                            <p id="maghrib-time" class="font-bold text-2xl text-emerald-400">--:--</p>
                        </div>
                    </div>
                </div>

                <!-- Verse & Prayers -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="glass rounded-3xl p-6 space-y-4">
                        <div class="flex items-center gap-3 text-emerald-400 border-b border-white/5 pb-4">
                            <i class="fas fa-quran"></i>
                            <span class="font-bold text-[10px] uppercase tracking-widest">Ayah of the Day</span>
                        </div>
                        <div id="quran-container">
                            <div class="flex justify-center py-8"><div class="loading-spinner"></div></div>
                        </div>
                    </div>

                    <div class="glass rounded-3xl p-6">
                        <div class="flex items-center gap-3 text-emerald-400 mb-4 border-b border-white/5 pb-4">
                            <i class="fas fa-pray"></i>
                            <span class="font-bold text-[10px] uppercase tracking-widest">Prayer Times</span>
                        </div>
                        <div id="prayer-list" class="space-y-2">
                            <!-- JS Injection -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Adhkar Section -->
            <div class="space-y-6">
                <div class="glass rounded-[2.5rem] p-8 h-full flex flex-col border-t-4 border-t-emerald-500">
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center gap-3 text-emerald-400">
                            <i class="fas fa-bead-reeve text-xl"></i>
                            <span class="font-black uppercase tracking-[0.2em] text-xs">Adhkar</span>
                        </div>
                        <button onclick="nextDhikr()" class="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
                            <i class="fas fa-sync-alt text-xs"></i>
                        </button>
                    </div>

                    <div id="dhikr-content" class="flex-grow space-y-6">
                        <div class="text-right">
                            <p id="dhikr-arabic" class="arabic text-3xl leading-loose text-white">--</p>
                        </div>
                        <div>
                            <p id="dhikr-trans" class="text-slate-400 text-sm italic leading-relaxed">--</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-2xl border-l-2 border-emerald-500/50">
                            <p id="dhikr-benefit" class="text-xs text-emerald-100/70 leading-relaxed italic">--</p>
                        </div>
                    </div>

                    <!-- Tasbih Counter -->
                    <div class="mt-10 pt-8 border-t border-white/5">
                        <div class="text-center mb-6">
                            <span id="tasbih-count" class="text-5xl font-mono font-black text-emerald-400">0</span>
                            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-2">Tasbih Counter</p>
                        </div>
                        <div class="flex gap-3">
                            <button onclick="countUp()" class="flex-grow bg-emerald-600 hover:bg-emerald-500 py-5 rounded-2xl transition-all active:scale-95 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                                <i class="fas fa-plus text-xl"></i>
                            </button>
                            <button onclick="resetCount()" class="bg-slate-800 hover:bg-slate-700 px-6 rounded-2xl transition-all">
                                <i class="fas fa-undo-alt text-slate-400"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="text-center text-slate-600 text-[10px] uppercase tracking-[0.4em] py-10 opacity-50">
            Ramadan Kareem &bull; Capacity Nigtech &bull; 1447 AH
        </footer>
    </div>

    <script>
        const azkhar = [
            {
                ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
                en: "Subhan-Allahi wa bihamdihi",
                benefit: "Glory and praise be to Allah. (Recite 100x to wipe away sins like foam of the sea)."
            },
            {
                ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
                en: "La hawla wa la quwwata illa billah",
                benefit: "There is no might or power except with Allah. (A treasure from Paradise)."
            },
            {
                ar: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
                en: "Astaghfirullaha wa atubu ilayhi",
                benefit: "I seek forgiveness from Allah and turn to Him. (Opens doors of mercy)."
            },
            {
                ar: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلَا إِلَهَ إِلَّا اللَّهُ ، وَاللَّهُ أَكْبَرُ",
                en: "SubhanAllah, walhamdulillah, wala ilaha illallah, wallahu Akbar",
                benefit: "Glory be to Allah, Praise be to Allah, There is no god but Allah, Allah is Greatest."
            }
        ];

        let currentDhikrIndex = 0;
        let counter = 0;
        const state = {
            coords: { lat: 6.5244, lng: 3.3792 }, 
            prayerTimes: null
        };

        async function init() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    state.coords.lat = pos.coords.latitude;
                    state.coords.lng = pos.coords.longitude;
                    updateLocationLabel(state.coords.lat, state.coords.lng);
                    fetchData();
                }, () => {
                    document.getElementById('current-location').innerHTML = '<i class="fas fa-map-marker-alt"></i> Lagos, NG (Default)';
                    fetchData();
                });
            } else {
                fetchData();
            }
            
            fetchVerse();
            updateDhikr();
            setInterval(updateCountdown, 1000);
        }

        async function fetchData() {
            const date = new Date();
            const timestamp = Math.floor(date.getTime() / 1000);
            try {
                const res = await fetch(`https://api.aladhan.com/v1/timings/${timestamp}?latitude=${state.coords.lat}&longitude=${state.coords.lng}&method=2`);
                const json = await res.json();
                state.prayerTimes = json.data.timings;
                
                renderPrayerTimes(json.data.timings);
                document.getElementById('fajr-time').innerText = json.data.timings.Fajr;
                document.getElementById('maghrib-time').innerText = json.data.timings.Maghrib;
                document.getElementById('hijri-date').innerText = `${json.data.date.hijri.day} ${json.data.date.hijri.month.en} ${json.data.date.hijri.year}`;
                document.getElementById('gregorian-date').innerText = json.data.date.readable;
            } catch (err) {
                console.error("API Error", err);
            }
        }

        async function updateLocationLabel(lat, lng) {
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
                const data = await res.json();
                const city = data.address.city || data.address.town || data.address.state || "Location Found";
                document.getElementById('current-location').innerHTML = `<i class="fas fa-location-arrow text-[10px]"></i> ${city}, ${data.address.country}`;
            } catch (e) { /* silent fail */ }
        }

        function renderPrayerTimes(times) {
            const list = document.getElementById('prayer-list');
            const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
            list.innerHTML = prayers.map(p => `
                <div class="flex justify-between items-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 transition-colors">
                    <span class="text-slate-500 text-[10px] font-bold uppercase tracking-widest">${p}</span>
                    <span class="font-mono font-bold text-emerald-100">${times[p]}</span>
                </div>
            `).join('');
        }

        async function fetchVerse() {
            const randomAyah = Math.floor(Math.random() * 6236) + 1;
            try {
                const [ar, en] = await Promise.all([
                    fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}`).then(r => r.json()),
                    fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`).then(r => r.json())
                ]);

                document.getElementById('quran-container').innerHTML = `
                    <p class="arabic text-2xl text-right leading-relaxed text-white">${ar.data.text}</p>
                    <p class="text-slate-500 italic text-xs mt-4 leading-relaxed border-t border-white/5 pt-4">"${en.data.text}"</p>
                    <p class="text-[9px] text-emerald-500/80 mt-3 font-black uppercase tracking-widest">${ar.data.surah.englishName} : ${ar.data.numberInSurah}</p>
                `;
            } catch (e) {
                document.getElementById('quran-container').innerHTML = "<p class='text-slate-500 text-xs'>Searching for inspiration...</p>";
            }
        }

        function updateDhikr() {
            const d = azkhar[currentDhikrIndex];
            document.getElementById('dhikr-arabic').innerText = d.ar;
            document.getElementById('dhikr-trans').innerText = d.en;
            document.getElementById('dhikr-benefit').innerText = d.benefit;
        }

        function nextDhikr() {
            currentDhikrIndex = (currentDhikrIndex + 1) % azkhar.length;
            updateDhikr();
            resetCount();
        }

        function countUp() {
            counter++;
            document.getElementById('tasbih-count').innerText = counter;
            if (navigator.vibrate) navigator.vibrate(40);
        }

        function resetCount() {
            counter = 0;
            document.getElementById('tasbih-count').innerText = counter;
        }

        function updateCountdown() {
            if (!state.prayerTimes) return;
            const now = new Date();
            const [mH, mM] = state.prayerTimes.Maghrib.split(':');
            const maghrib = new Date(); maghrib.setHours(mH, mM, 0);

            const [fH, fM] = state.prayerTimes.Fajr.split(':');
            const fajr = new Date(); fajr.setHours(fH, fM, 0);

            let target = (now < fajr) ? fajr : (now < maghrib ? maghrib : new Date(fajr.getTime() + 86400000));
            document.getElementById('countdown-label').innerText = (now < maghrib && now > fajr) ? "Time Until Iftar" : "Time Until Suhoor";

            const diff = target - now;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);

            document.getElementById('countdown-timer').innerText = 
                `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        window.onload = init;
    </script>
</body>
</html>