<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacity VPN Reloaded</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Capacitor Bridge -->
    <script src="https://unpkg.com/@capacitor/core@latest/dist/capacitor.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        body { font-family: 'Inter', sans-serif; overflow: hidden; }

        @keyframes progress-load { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slide-in { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        
        .animate-progress-load { animation: progress-load 3s ease-in-out forwards; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-scale-up { animation: scale-up 0.2s ease-out; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .hidden { display: none !important; }
    </style>
</head>
<body class="bg-gray-100 flex justify-center min-h-screen">

    <!-- MAIN APP CONTAINER (Removed Splash, App visible by default) -->
    <div id="main-app" class="w-full max-w-[450px] bg-white shadow-2xl min-h-screen flex flex-col relative overflow-hidden animate-fade-in">
        
        <!-- HEADER -->
        <div class="bg-orange-500 pt-8 pb-32 px-6 relative">
            <div class="flex items-center justify-between text-white mb-6">
                <button onclick="toggleMenu(true)"><i data-lucide="menu" class="w-6 h-6"></i></button>
                <h1 class="text-lg font-bold uppercase tracking-tight">Capacity VPN</h1>
                <button onclick="fetchNodes()" id="refresh-btn"><i data-lucide="refresh-cw" class="w-5 h-5"></i></button>
            </div>

            <!-- TWEAK SELECTOR -->
            <div onclick="openNodePicker()" id="node-selector-btn" class="bg-white rounded-full p-2 flex items-center justify-between shadow-lg max-w-[340px] mx-auto z-30 relative cursor-pointer">
                <div class="flex items-center gap-2 px-2">
                    <span id="selected-node-name" class="text-sm font-bold text-gray-700 truncate max-w-[200px]">Selecting Tweak...</span>
                </div>
                <div class="bg-gray-100 p-1 rounded-full"><i data-lucide="chevron-down" class="text-gray-400 w-3.5 h-3.5"></i></div>
            </div>

            <!-- POWER BUTTON -->
            <div class="absolute left-1/2 -translate-x-1/2 top-[135px] z-20">
                <div class="relative w-52 h-52 flex items-center justify-center">
                    <div id="status-ring" class="absolute inset-0 border-4 border-gray-100/50 rounded-full">
                        <div class="absolute top-2 right-8 w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <button id="power-btn" onclick="handleConnect()" class="relative w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl bg-orange-500 ring-4 ring-white">
                        <i data-lucide="power" class="text-white w-12 h-12 mb-1"></i>
                        <span id="power-text" class="text-white text-[10px] font-black uppercase tracking-widest">Start</span>
                    </button>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[50%] scale-x-150 border-t-4 border-[#43b02a]"></div>
        </div>

        <!-- STATS AREA -->
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

        <!-- SIDE MENU OVERLAY -->
        <div id="side-menu" class="absolute inset-0 z-[100] flex hidden">
            <div class="w-64 bg-white h-full shadow-2xl flex flex-col animate-slide-in">
                <div class="bg-orange-500 p-6 flex flex-col gap-4 text-white">
                    <div class="flex justify-between items-center">
                        <h2 class="font-black uppercase tracking-tighter">Menu</h2>
                        <button onclick="toggleMenu(false)"><i data-lucide="x" class="w-5 h-5"></i></button>
                    </div>
                    <div class="w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-lg flex items-center justify-center bg-white/20">
                        <i data-lucide="user" class="text-white w-8 h-8"></i>
                    </div>
                </div>
                <div class="flex-1 py-4">
                    <button onclick="window.location.reload()" class="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors text-red-600 border-b border-gray-100">
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                        <span class="font-bold text-sm uppercase">Exit Application</span>
                    </button>
                </div>
                <div class="p-6 border-t border-gray-100 text-center">
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Version 2.0.0 Reloaded</p>
                </div>
            </div>
            <div class="flex-1 bg-black/40 backdrop-blur-sm" onclick="toggleMenu(false)"></div>
        </div>

        <!-- TWEAK PICKER -->
        <div id="node-picker" class="absolute inset-0 bg-black/50 z-[120] flex flex-col justify-end hidden">
            <div class="bg-white rounded-t-3xl h-[85%] flex flex-col shadow-2xl">
                <div class="p-5 border-b flex justify-between items-center">
                    <span class="font-black text-gray-800 uppercase tracking-tight">Available Tweaks</span>
                    <button onclick="closeNodePicker()" class="text-orange-500 font-bold px-2">Close</button>
                </div>
                <div class="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar bg-gray-50 border-b" id="category-tabs">
                    <!-- Tabs generated by JS -->
                </div>
                <div class="flex-1 overflow-y-auto p-4 space-y-2" id="node-list">
                    <!-- Nodes generated by JS -->
                </div>
            </div>
        </div>

        <!-- DISCONNECT MODAL -->
        <div id="disconnect-modal" class="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm hidden">
            <div class="bg-white w-full rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
                <div class="bg-orange-500 p-4 flex justify-center"><i data-lucide="alert-circle" class="text-white w-12 h-12"></i></div>
                <div class="p-6 text-center">
                    <h3 class="text-lg font-black text-gray-800 uppercase tracking-tight mb-2">Confirmation</h3>
                    <p class="text-gray-500 font-bold text-sm mb-6">Do you want to disconnected?</p>
                    <div class="flex gap-3">
                        <button onclick="hideDisconnectModal()" class="flex-1 py-3 border-2 border-gray-100 rounded-xl font-black text-xs uppercase text-gray-400">No</button>
                        <button onclick="confirmDisconnect()" class="flex-1 py-3 bg-orange-500 rounded-xl font-black text-xs uppercase text-white shadow-lg">Yes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
        // --- CONFIGURATION ---
        const CONFIG_SOURCES = [
            { name: "Super Link", url: "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/all_configs.txt" },
            { name: "VLESS Nigeria", url: "https://raw.githubusercontent.com/barry-far/V2ray-Config/main/Splitted-By-Protocol/vless.txt" },
            { name: "Cleaned List", url: "https://raw.githubusercontent.com/yebekhe/TV2Ray/main/configs/configs" }
        ];

        const NETWORK_SNI = {
            MTN: "v.whatsapp.net",
            AIRTEL: "airteltv.com.ng",
            GLOBAL: "google.com"
        };

        const CUSTOM_TWEAKS = [
            { id: 'custom-1', name: 'Airtel 100mb Daily', protocol: 'AIRTEL', ping: 45, config: 'vless://airtel', category: 'AIRTEL', sni: "airteltv.com.ng" },
            { id: 'custom-2', name: 'Capacity SIM 5gb', protocol: 'CAPACITY', ping: 32, config: 'vless://capacity', category: 'GLOBAL', sni: "google.com" },
            { id: 'custom-3', name: 'MTN 100mb Social', protocol: 'MTN', ping: 58, config: 'vless://mtn', category: 'MTN', sni: "v.whatsapp.net" }
        ];

        // --- STATE ---
        let nodes = [];
        let selectedNode = null;
        let connected = false;
        let connectionState = 'IDLE';
        let traffic = { up: 0, down: 0 };
        let activeCategory = 'ALL';
        let statsInterval = null;

        // --- INITIALIZATION ---
        window.onload = () => {
            lucide.createIcons();
            fetchNodes();
            renderTabs();
        };

        // --- CORE LOGIC ---
        async function fetchNodes() {
            const refreshBtn = document.getElementById('refresh-btn');
            if (refreshBtn) refreshBtn.classList.add('animate-spin');
            
            try {
                const results = await Promise.all(
                    CONFIG_SOURCES.map(source => fetch(source.url).then(res => res.text()).catch(() => ""))
                );

                let allRawConfigs = [...CUSTOM_TWEAKS];
                results.forEach((text) => {
                    const lines = text.split('\n').filter(line => line.trim().length > 20);
                    lines.forEach(line => {
                        let protocol = line.split('://')[0]?.toUpperCase() || "VPN";
                        const nameMatch = line.match(/#(.*)/);
                        const rawName = nameMatch ? decodeURIComponent(nameMatch[1]) : "Global Server";
                        let category = 'GLOBAL';
                        const lowerName = rawName.toLowerCase();
                        if (lowerName.includes('mtn')) category = 'MTN';
                        else if (lowerName.includes('airtel')) category = 'AIRTEL';

                        allRawConfigs.push({
                            id: Math.random().toString(36).substr(2, 9),
                            config: line.trim(),
                            name: rawName.split('|')[0] || "Server Node",
                            protocol,
                            ping: Math.floor(Math.random() * 150) + 20,
                            category,
                            sni: NETWORK_SNI[category] || NETWORK_SNI.GLOBAL
                        });
                    });
                });

                nodes = allRawConfigs.sort((a, b) => a.ping - b.ping);
                if (!selectedNode && nodes.length > 0) selectNode(nodes[0]);
                renderNodes();
            } catch (e) { console.error(e); }
            finally { if (refreshBtn) refreshBtn.classList.remove('animate-spin'); }
        }

        function selectNode(node) {
            selectedNode = node;
            document.getElementById('selected-node-name').innerText = `🇳🇬 ${node.protocol} - ${node.name}`;
            renderNodes();
        }

        async function handleConnect() {
            if (!selectedNode) return;
            if (connected) {
                document.getElementById('disconnect-modal').classList.remove('hidden');
                return;
            }

            updateConnectionState('CONNECTING');
            await sleep(800);
            updateConnectionState('AUTH');
            await sleep(1000);
            updateConnectionState('HANDSHAKE');
            await sleep(600);
            
            updateConnectionState('CONNECTED');
            startStats();
        }

        function confirmDisconnect() {
            connected = false;
            updateConnectionState('IDLE');
            stopStats();
            hideDisconnectModal();
        }

        function updateConnectionState(state) {
            connectionState = state;
            const btn = document.getElementById('power-btn');
            const ring = document.getElementById('status-ring');
            const text = document.getElementById('power-text');
            const statusContainer = document.getElementById('status-icon-container');
            const statusIcon = document.getElementById('status-icon');
            const statusText = document.getElementById('status-text');

            btn.className = "relative w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl ring-4 ring-white";
            ring.classList.remove('animate-spin-slow');

            if (state === 'CONNECTED') {
                connected = true;
                btn.classList.add('bg-green-600', 'scale-105');
                ring.classList.add('animate-spin-slow');
                text.innerText = "Disconnect";
                statusContainer.className = "p-4 rounded-full mb-3 transition-all duration-500 bg-green-100 text-green-600 ring-4 ring-green-50";
                statusIcon.setAttribute('data-lucide', 'cloud-lightning');
                statusIcon.classList.add('animate-pulse');
                statusText.innerText = "Capacity Active";
                statusText.className = "text-xs font-black uppercase tracking-[0.2em] text-green-600";
            } else if (state === 'IDLE') {
                btn.classList.add('bg-orange-500');
                text.innerText = "Start";
                statusContainer.className = "p-4 rounded-full mb-3 transition-all duration-500 bg-gray-100 text-gray-400 ring-4 ring-gray-50";
                statusIcon.setAttribute('data-lucide', 'cloud-off');
                statusIcon.classList.remove('animate-pulse');
                statusText.innerText = "Capacity Inactive";
                statusText.className = "text-xs font-black uppercase tracking-[0.2em] text-gray-400";
            } else {
                btn.classList.add('bg-yellow-500', 'animate-pulse');
                ring.classList.add('animate-spin-slow');
                text.innerText = getStatusLabel(state);
            }
            lucide.createIcons();
        }

        function getStatusLabel(s) {
            if (s === 'CONNECTING') return 'Connecting...';
            if (s === 'AUTH') return 'Authenticating...';
            if (s === 'HANDSHAKE') return 'Handshake...';
            return 'Start';
        }

        function startStats() {
            traffic = { up: 0, down: 0 };
            statsInterval = setInterval(() => {
                traffic.up += Math.floor(Math.random() * 2048);
                traffic.down += Math.floor(Math.random() * 10240);
                document.getElementById('up-stat').innerText = formatTraffic(traffic.up);
                document.getElementById('down-stat').innerText = formatTraffic(traffic.down);
            }, 1000);
        }

        function stopStats() {
            clearInterval(statsInterval);
            document.getElementById('up-stat').innerText = "0 B";
            document.getElementById('down-stat').innerText = "0 B";
        }

        function formatTraffic(bytes) {
            if (bytes === 0) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function toggleMenu(show) {
            const menu = document.getElementById('side-menu');
            show ? menu.classList.remove('hidden') : menu.classList.add('hidden');
        }

        function openNodePicker() {
            if (connected) return;
            document.getElementById('node-picker').classList.remove('hidden');
            renderNodes();
        }

        function closeNodePicker() {
            document.getElementById('node-picker').classList.add('hidden');
        }

        function hideDisconnectModal() {
            document.getElementById('disconnect-modal').classList.add('hidden');
        }

        function setCategory(cat) {
            activeCategory = cat;
            renderTabs();
            renderNodes();
        }

        function renderTabs() {
            const container = document.getElementById('category-tabs');
            const cats = ['ALL', 'MTN', 'AIRTEL', 'GLOBAL'];
            container.innerHTML = cats.map(cat => `
                <button onclick="setCategory('${cat}')" class="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border-2 whitespace-nowrap ${activeCategory === cat ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-200 text-gray-400'}">
                    ${cat} Mode
                </button>
            `).join('');
        }

        function renderNodes() {
            const container = document.getElementById('node-list');
            const filtered = nodes.filter(n => activeCategory === 'ALL' || n.category === activeCategory);
            
            if (filtered.length === 0) {
                container.innerHTML = `<div class="text-center py-20 text-gray-400 font-bold uppercase text-xs">No Tweaks Found</div>`;
                return;
            }

            container.innerHTML = filtered.map(node => `
                <div onclick="selectNodeById('${node.id}')" class="p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer ${selectedNode?.id === node.id ? 'border-orange-500 bg-orange-50' : 'border-gray-50 bg-gray-50'}">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-white rounded-lg"><i data-lucide="wifi" class="w-4 h-4"></i></div>
                        <div>
                            <p class="font-bold text-gray-800 text-sm">${node.name}</p>
                            <p class="text-[10px] font-bold text-gray-400 uppercase">${node.protocol}</p>
                        </div>
                    </div>
                    <span class="font-mono text-xs font-bold text-green-500">${node.ping}ms</span>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function selectNodeById(id) {
            const node = nodes.find(n => n.id === id);
            if (node) {
                selectNode(node);
                closeNodePicker();
            }
        }

        const sleep = ms => new Promise(r => setTimeout(r, ms));
    </script>
</body>
</html>