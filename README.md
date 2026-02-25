<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity VPN Reloaded</title>
    <!-- PWA Manifest for Mobile Installation -->
    <link rel="manifest" href="data:application/manifest+json,{'name':'Capacity VPN','short_name':'Capacity','start_url':'.','display':'standalone','background_color':'#f3f4f6','theme_color':'#f97316'}">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://unpkg.com/@capacitor/core@latest/dist/capacitor.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        body { font-family: 'Inter', sans-serif; overflow: hidden; touch-action: manipulation; }

        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slide-in { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.2s ease-out; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .hidden { display: none !important; }

        button, .cursor-pointer {
            -webkit-tap-highlight-color: transparent;
        }
    </style>
</head>
<body class="bg-gray-100 flex justify-center min-h-screen">

    <div id="main-app" class="w-full max-w-[450px] bg-white shadow-2xl min-h-screen flex flex-col relative overflow-hidden">
        
        <!-- HEADER SECTION -->
        <div class="bg-orange-500 pt-8 pb-32 px-6 relative">
            <div class="flex items-center justify-between text-white mb-6">
                <button onclick="toggleMenu(true)" class="p-2"><i data-lucide="menu" class="w-6 h-6"></i></button>
                <h1 class="text-lg font-bold uppercase tracking-tight">Capacity VPN</h1>
                <button onclick="fetchNodes()" id="refresh-btn" class="p-2"><i data-lucide="refresh-cw" class="w-5 h-5"></i></button>
            </div>

            <!-- TWEAK SELECTOR -->
            <div onclick="openNodePicker()" id="node-selector-btn" class="bg-white rounded-full p-2 flex items-center justify-between shadow-lg max-w-[340px] mx-auto z-30 relative cursor-pointer active:scale-95 transition-transform">
                <div class="flex items-center gap-2 px-2 overflow-hidden">
                    <span id="selected-node-name" class="text-sm font-bold text-gray-700 truncate">Selecting Tweak...</span>
                </div>
                <div class="bg-gray-100 p-1 rounded-full"><i data-lucide="chevron-down" class="text-gray-400 w-3.5 h-3.5"></i></div>
            </div>

            <!-- MAIN POWER BUTTON -->
            <div class="absolute left-1/2 -translate-x-1/2 top-[135px] z-20">
                <div class="relative w-52 h-52 flex items-center justify-center">
                    <div id="status-ring" class="absolute inset-0 border-4 border-gray-100/50 rounded-full transition-all duration-700">
                        <div class="absolute top-2 right-8 w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
                    </div>
                    <button id="power-btn" onclick="handleConnect()" class="relative w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl bg-orange-500 ring-4 ring-white active:scale-90">
                        <i data-lucide="power" class="text-white w-12 h-12 mb-1"></i>
                        <span id="power-text" class="text-white text-[10px] font-black uppercase tracking-widest">Start</span>
                    </button>
                </div>
            </div>
            <!-- Decorative Curve -->
            <div class="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[50%] scale-x-150 border-t-4 border-[#43b02a]"></div>
        </div>

        <!-- STATS & STATUS AREA -->
        <div class="flex-1 flex flex-col pt-32 px-10">
            <div class="flex flex-col gap-10 mt-16">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="bg-gray-50 p-2 rounded-lg"><i data-lucide="arrow-up" class="text-[#6231a3] w-5 h-5"></i></div>
                        <div>
                            <p class="text-[10px] font-black text-[#6231a3] uppercase opacity-70">Upload</p>
                            <p id="up-stat" class="font-black text-gray-800 leading-none">0 B</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 text-right">
                        <div>
                            <p class="text-[10px] font-black text-[#6231a3] uppercase opacity-70">Download</p>
                            <p id="down-stat" class="font-black text-gray-800 leading-none">0 B</p>
                        </div>
                        <div class="bg-gray-50 p-2 rounded-lg"><i data-lucide="arrow-down" class="text-[#6231a3] w-5 h-5"></i></div>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div id="status-icon-container" class="p-4 rounded-full mb-3 transition-all duration-500 bg-gray-100 text-gray-400">
                        <i id="status-icon" data-lucide="cloud-off" class="w-10 h-10"></i>
                    </div>
                    <p id="status-text" class="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Capacity Inactive</p>
                </div>
            </div>
        </div>

        <!-- SIDE DRAWER MENU -->
        <div id="side-menu" class="absolute inset-0 z-[100] flex hidden">
            <div class="w-64 bg-white h-full shadow-2xl flex flex-col animate-slide-in">
                <div class="bg-orange-500 p-6 flex flex-col gap-4 text-white">
                    <div class="flex justify-between items-center">
                        <h2 class="font-black uppercase tracking-tighter">Menu</h2>
                        <button onclick="toggleMenu(false)" class="p-1"><i data-lucide="x" class="w-5 h-5"></i></button>
                    </div>
                    <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-lg flex items-center justify-center bg-white/20">
                        <i data-lucide="user" class="text-white w-8 h-8"></i>
                    </div>
                </div>
                <div class="flex-1 py-2">
                    <button onclick="window.location.reload()" class="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-50 transition-colors text-red-600">
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                        <span class="font-bold text-sm uppercase">Close App</span>
                    </button>
                </div>
                <div class="p-6 border-t border-gray-100 text-center">
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Version 2.0.0 Reloaded</p>
                </div>
            </div>
            <div class="flex-1 bg-black/40 backdrop-blur-sm" onclick="toggleMenu(false)"></div>
        </div>

        <!-- TWEAK LIST PICKER -->
        <div id="node-picker" class="absolute inset-0 bg-black/50 z-[120] flex flex-col justify-end hidden">
            <div class="bg-white rounded-t-3xl h-[85%] flex flex-col shadow-2xl">
                <div class="p-5 border-b flex justify-between items-center">
                    <span class="font-black text-gray-800 uppercase tracking-tight">Select Zero-Data Tweak</span>
                    <button onclick="closeNodePicker()" class="text-orange-500 font-bold px-2 p-2">Close</button>
                </div>
                <div class="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar bg-gray-50 border-b" id="category-tabs"></div>
                <div class="flex-1 overflow-y-auto p-4 space-y-2" id="node-list"></div>
            </div>
        </div>

        <!-- DISCONNECT PROMPT -->
        <div id="disconnect-modal" class="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm hidden">
            <div class="bg-white w-full rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
                <div class="bg-orange-500 p-4 flex justify-center"><i data-lucide="alert-circle" class="text-white w-12 h-12"></i></div>
                <div class="p-6 text-center">
                    <h3 class="text-lg font-black text-gray-800 uppercase tracking-tight mb-2">Notice</h3>
                    <p class="text-gray-500 font-bold text-sm mb-6">Are you sure you want to stop the connection?</p>
                    <div class="flex gap-3">
                        <button onclick="hideDisconnectModal()" class="flex-1 py-3 border-2 border-gray-100 rounded-xl font-black text-xs uppercase text-gray-400 active:bg-gray-50">No</button>
                        <button onclick="confirmDisconnect()" class="flex-1 py-3 bg-orange-500 rounded-xl font-black text-xs uppercase text-white shadow-lg active:bg-orange-600">Stop</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
        const CONFIG_SOURCES = [
            { name: "Global", url: "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/all_configs.txt" },
            { name: "VLESS", url: "https://raw.githubusercontent.com/barry-far/V2ray-Config/main/Splitted-By-Protocol/vless.txt" }
        ];

        const ZERO_DATA_HOSTS = {
            MTN: "v.whatsapp.net",
            AIRTEL: "airteltv.com.ng",
            GLOBAL: "google.com"
        };

        const PRESET_TWEAKS = [
            { id: 'pre-1', name: 'Airtel 100mb', protocol: 'AIRTEL', ping: 42, category: 'AIRTEL', sni: "airteltv.com.ng" },
            { id: 'pre-2', name: 'Capacity SIM 5GB', protocol: 'CAPACITY', ping: 28, category: 'GLOBAL', sni: "google.com" },
            { id: 'pre-3', name: 'MTN 100mb', protocol: 'MTN', ping: 51, category: 'MTN', sni: "v.whatsapp.net" }
        ];

        let nodes = [...PRESET_TWEAKS]; 
        let selectedNode = null;
        let connected = false;
        let traffic = { up: 0, down: 0 };
        let activeCategory = 'ALL';
        let statsInterval = null;

        window.onload = () => {
            lucide.createIcons();
            loadState();
            renderTabs();
            renderNodes();
            fetchNodes(); 
        };

        function loadState() {
            const cached = localStorage.getItem('cap_nodes_v2');
            if (cached) nodes = JSON.parse(cached);
            
            const lastId = localStorage.getItem('cap_last_node');
            selectedNode = nodes.find(n => n.id === lastId) || nodes[0];
            if (selectedNode) applyNodeSelection(selectedNode);
        }

        async function fetchNodes() {
            const btn = document.getElementById('refresh-btn');
            btn?.classList.add('animate-spin');
            
            try {
                const results = await Promise.all(
                    CONFIG_SOURCES.map(s => fetch(s.url).then(r => r.text()).catch(() => ""))
                );

                let fetched = [...PRESET_TWEAKS];
                results.forEach(text => {
                    text.split('\n').filter(l => l.length > 30).forEach(line => {
                        const nameMatch = line.match(/#(.*)/);
                        const rawName = nameMatch ? decodeURIComponent(nameMatch[1]) : "Capacity Server";
                        let cat = 'GLOBAL';
                        if (rawName.toLowerCase().includes('mtn')) cat = 'MTN';
                        else if (rawName.toLowerCase().includes('airtel')) cat = 'AIRTEL';

                        fetched.push({
                            id: btoa(line.trim()).substring(0, 12),
                            config: line.trim(),
                            name: rawName.split('|')[0].substring(0, 20),
                            protocol: line.split('://')[0]?.toUpperCase() || "VPN",
                            ping: Math.floor(Math.random() * 100) + 20,
                            category: cat,
                            sni: ZERO_DATA_HOSTS[cat] || ZERO_DATA_HOSTS.GLOBAL
                        });
                    });
                });

                nodes = fetched.sort((a, b) => a.ping - b.ping);
                localStorage.setItem('cap_nodes_v2', JSON.stringify(nodes));
                renderNodes();
            } catch (e) {
                console.log("Using cached/preset tweaks.");
            } finally {
                btn?.classList.remove('animate-spin');
            }
        }

        function applyNodeSelection(node) {
            selectedNode = node;
            localStorage.setItem('cap_last_node', node.id);
            document.getElementById('selected-node-name').innerText = `🇳🇬 ${node.name}`;
            renderNodes();
        }

        async function handleConnect() {
            if (connected) {
                document.getElementById('disconnect-modal').classList.remove('hidden');
                return;
            }

            updateUI('CONNECTING');
            await sleep(1000);
            updateUI('AUTHENTICATING');
            await sleep(1200);
            updateUI('TUNNELING'); 
            await sleep(800);
            updateUI('CONNECTED');
            startStats();
        }

        function confirmDisconnect() {
            connected = false;
            updateUI('IDLE');
            stopStats();
            hideDisconnectModal();
        }

        function updateUI(state) {
            const btn = document.getElementById('power-btn');
            const ring = document.getElementById('status-ring');
            const pText = document.getElementById('power-text');
            const sCont = document.getElementById('status-icon-container');
            const sIcon = document.getElementById('status-icon');
            const sText = document.getElementById('status-text');

            btn.className = "relative w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl ring-4 ring-white";
            ring.classList.remove('animate-spin-slow', 'border-orange-500');

            if (state === 'CONNECTED') {
                connected = true;
                btn.classList.add('bg-green-600', 'scale-105');
                ring.classList.add('animate-spin-slow', 'border-green-500');
                pText.innerText = "Stop";
                sCont.className = "p-4 rounded-full mb-3 bg-green-100 text-green-600 ring-4 ring-green-50";
                sIcon.setAttribute('data-lucide', 'cloud-lightning');
                sText.innerText = "Tunnel Active";
                sText.className = "text-xs font-black uppercase tracking-[0.2em] text-green-600";
            } else if (state === 'IDLE') {
                btn.classList.add('bg-orange-500');
                pText.innerText = "Start";
                sCont.className = "p-4 rounded-full mb-3 bg-gray-100 text-gray-400";
                sIcon.setAttribute('data-lucide', 'cloud-off');
                sText.innerText = "Capacity Inactive";
                sText.className = "text-xs font-black uppercase tracking-[0.2em] text-gray-400";
            } else {
                btn.classList.add('bg-yellow-500', 'animate-pulse');
                pText.innerText = "Busy...";
                sText.innerText = state;
            }
            lucide.createIcons();
        }

        function startStats() {
            traffic = { up: 0, down: 0 };
            statsInterval = setInterval(() => {
                traffic.up += Math.random() * 5000;
                traffic.down += Math.random() * 25000;
                document.getElementById('up-stat').innerText = formatBytes(traffic.up);
                document.getElementById('down-stat').innerText = formatBytes(traffic.down);
            }, 1000);
        }

        function stopStats() {
            clearInterval(statsInterval);
            document.getElementById('up-stat').innerText = "0 B";
            document.getElementById('down-stat').innerText = "0 B";
        }

        function formatBytes(b) {
            if (b === 0) return '0 B';
            const i = Math.floor(Math.log(b) / Math.log(1024));
            return (b / Math.pow(1024, i)).toFixed(1) + ' ' + ['B', 'KB', 'MB', 'GB'][i];
        }

        function renderTabs() {
            const container = document.getElementById('category-tabs');
            const cats = ['ALL', 'MTN', 'AIRTEL', 'GLOBAL'];
            container.innerHTML = cats.map(c => `
                <button onclick="activeCategory='${c}';renderTabs();renderNodes();" class="px-5 py-2 rounded-full text-[10px] font-black uppercase transition-all border-2 whitespace-nowrap ${activeCategory === c ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-100 text-gray-400'}">
                    ${c}
                </button>
            `).join('');
        }

        function renderNodes() {
            const container = document.getElementById('node-list');
            const filtered = nodes.filter(n => activeCategory === 'ALL' || n.category === activeCategory);
            container.innerHTML = filtered.map(n => `
                <div onclick="applyNodeSelectionById('${n.id}')" class="p-4 rounded-xl border-2 flex items-center justify-between active:bg-gray-100 transition-colors ${selectedNode?.id === n.id ? 'border-orange-500 bg-orange-50' : 'border-gray-50 bg-gray-50'}">
                    <div class="flex items-center gap-3 overflow-hidden">
                        <div class="p-2 bg-white rounded-lg shadow-sm">🇳🇬</div>
                        <div class="overflow-hidden">
                            <p class="font-bold text-gray-800 text-sm truncate">${n.name}</p>
                        </div>
                    </div>
                    <span class="text-[10px] font-black text-green-500">${n.ping}ms</span>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function applyNodeSelectionById(id) {
            const node = nodes.find(n => n.id === id);
            if (node) { applyNodeSelection(node); closeNodePicker(); }
        }

        function toggleMenu(s) { document.getElementById('side-menu').classList.toggle('hidden', !s); }
        function openNodePicker() { if(!connected) document.getElementById('node-picker').classList.remove('hidden'); }
        function closeNodePicker() { document.getElementById('node-picker').classList.add('hidden'); }
        function hideDisconnectModal() { document.getElementById('disconnect-modal').classList.add('hidden'); }
        const sleep = ms => new Promise(r => setTimeout(r, ms));
    </script>
</body>
</html>