const bancoDados = {
    // --- CS:GO ---
    lg: [
        { nome: "Fallen",   role: "AWPer / IGL",     kd: 1.25, hs: 55, stats: [95, 90, 98, 85, 70], cor: "#ff4655" },
        { nome: "Coldzera", role: "Rifler",            kd: 1.35, hs: 50, stats: [98, 95, 85, 80, 80], cor: "#00bfff" },
        { nome: "fnx",      role: "Clutcher",          kd: 1.10, hs: 48, stats: [88, 82, 99, 75, 75], cor: "#f5a623" },
        { nome: "fer",      role: "Entry Fragger",     kd: 1.15, hs: 58, stats: [92, 80, 75, 70, 95], cor: "#7ed321" },
        { nome: "TACO",     role: "Support",           kd: 0.95, hs: 45, stats: [80, 85, 80, 95, 60], cor: "#bd10e0" }
    ],
    furia: [
        { nome: "KSCERATO", role: "Rifler",            kd: 1.25, hs: 55, stats: [98, 90, 95, 85, 60], cor: "#ff4655" },
        { nome: "Yuurih",   role: "Entry Fragger",     kd: 1.18, hs: 62, stats: [90, 85, 70, 80, 90], cor: "#00bfff" },
        { nome: "Fallen",   role: "AWPer / IGL",       kd: 1.05, hs: 52, stats: [90, 95, 90, 90, 60], cor: "#f5a623" },
        { nome: "chelo",    role: "Rifler",            kd: 1.08, hs: 60, stats: [85, 80, 75, 70, 90], cor: "#7ed321" },
        { nome: "arT",      role: "Aggressive IGL",    kd: 0.98, hs: 45, stats: [70, 98, 60, 95, 100], cor: "#bd10e0" }
    ],
    astralis: [
        { nome: "dev1ce",  role: "AWPer",              kd: 1.28, hs: 35, stats: [98, 95, 85, 80, 70], cor: "#ff4655" },
        { nome: "dupreeh", role: "Entry Fragger",      kd: 1.15, hs: 52, stats: [90, 85, 80, 75, 95], cor: "#00bfff" },
        { nome: "Xyp9x",   role: "Clutch Minister",   kd: 1.05, hs: 45, stats: [85, 90, 100, 95, 50], cor: "#f5a623" },
        { nome: "gla1ve",  role: "IGL",                kd: 1.02, hs: 42, stats: [80, 100, 90, 95, 65], cor: "#7ed321" },
        { nome: "Magisk",  role: "Rifler",             kd: 1.12, hs: 50, stats: [92, 88, 85, 85, 75], cor: "#bd10e0" }
    ],
    navi: [
        { nome: "s1mple",      role: "AWPer",          kd: 1.35, hs: 40, stats: [100, 95, 98, 80, 90], cor: "#ff4655" },
        { nome: "b1t",         role: "Rifler",         kd: 1.15, hs: 70, stats: [98, 85, 80, 75, 80],  cor: "#00bfff" },
        { nome: "electroNic",  role: "Rifler",         kd: 1.20, hs: 52, stats: [95, 90, 85, 80, 85],  cor: "#f5a623" },
        { nome: "Perfecto",    role: "Support",        kd: 1.08, hs: 48, stats: [85, 95, 95, 98, 60],  cor: "#7ed321" },
        { nome: "Boombl4",     role: "IGL",            kd: 0.98, hs: 45, stats: [85, 92, 70, 85, 90],  cor: "#bd10e0" }
    ],

    // --- VALORANT ---
    loud: [
        { nome: "aspas",   role: "Duelist",    kd: 1.30, hs: 32, stats: [100, 90, 95, 70, 98], cor: "#ff4655" },
        { nome: "Less",    role: "Sentinel",   kd: 1.20, hs: 28, stats: [98, 95, 90, 95, 60],  cor: "#00bfff" },
        { nome: "Saadhak", role: "IGL",        kd: 1.05, hs: 25, stats: [85, 100, 92, 98, 65], cor: "#f5a623" },
        { nome: "pANcada", role: "Controller", kd: 1.15, hs: 30, stats: [92, 95, 94, 96, 55],  cor: "#7ed321" },
        { nome: "Sacy",    role: "Initiator",  kd: 1.10, hs: 27, stats: [90, 98, 92, 98, 70],  cor: "#bd10e0" }
    ],
    acend: [
        { nome: "cNed",     role: "Duelist",   kd: 1.25, hs: 25, stats: [99, 85, 90, 75, 90], cor: "#ff4655" },
        { nome: "starxo",   role: "Initiator", kd: 1.08, hs: 22, stats: [88, 90, 95, 92, 85], cor: "#00bfff" },
        { nome: "zeek",     role: "Duelist",   kd: 1.12, hs: 26, stats: [92, 85, 90, 80, 95], cor: "#f5a623" },
        { nome: "Kiles",    role: "Sentinel",  kd: 0.95, hs: 20, stats: [80, 95, 85, 98, 50], cor: "#7ed321" },
        { nome: "BONECOLD", role: "IGL",       kd: 1.02, hs: 21, stats: [82, 98, 88, 95, 60], cor: "#bd10e0" }
    ],
    eg: [
        { nome: "Demon1",  role: "Duelist",   kd: 1.35, hs: 40, stats: [100, 88, 92, 70, 95], cor: "#ff4655" },
        { nome: "Jawgemo", role: "Controller",kd: 1.10, hs: 25, stats: [95, 85, 88, 90, 92],  cor: "#00bfff" },
        { nome: "Boostio", role: "IGL",       kd: 1.05, hs: 22, stats: [88, 98, 90, 92, 85],  cor: "#f5a623" },
        { nome: "Ethan",   role: "Initiator", kd: 1.12, hs: 24, stats: [90, 95, 95, 98, 70],  cor: "#7ed321" },
        { nome: "C0M",     role: "Initiator", kd: 1.02, hs: 20, stats: [85, 92, 98, 95, 55],  cor: "#bd10e0" }
    ],
    sentinels: [
        { nome: "TenZ",    role: "Duelist", kd: 1.28, hs: 30, stats: [99, 82, 88, 75, 98], cor: "#ff4655" },
        { nome: "Zellsis", role: "Flex",    kd: 1.05, hs: 26, stats: [90, 92, 90, 95, 90], cor: "#00bfff" },
        { nome: "Johnqt",  role: "IGL",     kd: 1.10, hs: 25, stats: [92, 98, 92, 95, 70], cor: "#f5a623" },
        { nome: "Sacy",    role: "Initiator",kd: 1.08, hs: 27, stats: [90, 96, 92, 98, 70], cor: "#7ed321" },
        { nome: "Zekken",  role: "Duelist", kd: 1.20, hs: 28, stats: [95, 85, 90, 80, 98], cor: "#bd10e0" }
    ],

    // --- LEAGUE OF LEGENDS ---
    pain: [
        { nome: "TitaN",    role: "ADC",       kd: 4.2, hs: 0, stats: [95, 85, 90, 75, 92], cor: "#ff4655" },
        { nome: "Cariok",   role: "Jungler",   kd: 3.8, hs: 0, stats: [82, 92, 88, 95, 85], cor: "#00bfff" },
        { nome: "dyNquedo", role: "Mid Laner", kd: 3.5, hs: 0, stats: [90, 88, 85, 82, 80], cor: "#f5a623" },
        { nome: "Wizer",    role: "Top Laner", kd: 3.2, hs: 0, stats: [88, 90, 92, 85, 75], cor: "#7ed321" },
        { nome: "Kuri",     role: "Support",   kd: 2.8, hs: 0, stats: [75, 95, 98, 100, 60], cor: "#bd10e0" }
    ],
    t1: [
        { nome: "Faker",     role: "Mid Laner", kd: 4.5, hs: 0, stats: [98, 100, 100, 95, 85], cor: "#ff4655" },
        { nome: "Gumayusi",  role: "ADC",       kd: 4.8, hs: 0, stats: [100, 92, 95, 80, 90],  cor: "#00bfff" },
        { nome: "Keria",     role: "Support",   kd: 3.5, hs: 0, stats: [95, 98, 90, 100, 85],  cor: "#f5a623" },
        { nome: "Zeus",      role: "Top Laner", kd: 4.0, hs: 0, stats: [98, 85, 88, 80, 95],   cor: "#7ed321" },
        { nome: "Oner",      role: "Jungler",   kd: 3.8, hs: 0, stats: [90, 95, 92, 88, 92],   cor: "#bd10e0" }
    ],
    ssw: [
        { nome: "Imp",    role: "ADC",       kd: 5.0, hs: 0, stats: [100, 85, 90, 75, 98], cor: "#ff4655" },
        { nome: "Mata",   role: "Support",   kd: 3.2, hs: 0, stats: [90, 100, 95, 100, 80], cor: "#00bfff" },
        { nome: "Pawn",   role: "Mid Laner", kd: 4.2, hs: 0, stats: [95, 92, 88, 85, 85],  cor: "#f5a623" },
        { nome: "Dandy",  role: "Jungler",   kd: 4.5, hs: 0, stats: [92, 100, 95, 98, 90], cor: "#7ed321" },
        { nome: "Looper", role: "Top Laner", kd: 3.8, hs: 0, stats: [88, 95, 92, 90, 70],  cor: "#bd10e0" }
    ],
    edg: [
        { nome: "Viper",   role: "ADC",       kd: 5.2, hs: 0, stats: [100, 95, 98, 80, 92], cor: "#ff4655" },
        { nome: "Meiko",   role: "Support",   kd: 3.0, hs: 0, stats: [85, 98, 95, 100, 75], cor: "#00bfff" },
        { nome: "Scout",   role: "Mid Laner", kd: 4.5, hs: 0, stats: [98, 95, 92, 90, 88],  cor: "#f5a623" },
        { nome: "Jiejie",  role: "Jungler",   kd: 3.9, hs: 0, stats: [90, 92, 95, 92, 90],  cor: "#7ed321" },
        { nome: "Flandre", role: "Top Laner", kd: 3.5, hs: 0, stats: [92, 90, 85, 88, 85],  cor: "#bd10e0" }
    ]
};

// Gera um avatar SVG com as iniciais do jogador
function gerarAvatar(nome, cor) {
    const iniciais = nome.replace(/[^a-zA-Z0-9]/g, '').substring(0, 2).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="250" viewBox="0 0 220 250">
        <defs>
            <linearGradient id="grad_${iniciais}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1a252e"/>
                <stop offset="100%" style="stop-color:#111"/>
            </linearGradient>
        </defs>
        <rect width="220" height="250" fill="url(#grad_${iniciais})"/>
        <polygon points="0,200 220,150 220,250 0,250" fill="${cor}" opacity="0.15"/>
        <text x="110" y="145" font-family="Oswald,sans-serif" font-size="72" font-weight="700"
              fill="${cor}" text-anchor="middle" dominant-baseline="middle" opacity="0.9">${iniciais}</text>
        <line x1="30" y1="195" x2="190" y2="195" stroke="${cor}" stroke-width="2" opacity="0.4"/>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

let radarChart = null;

function carregarTime(timeKey) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + timeKey).classList.add('active');

    const grid = document.getElementById('players-grid');
    grid.innerHTML = "";

    bancoDados[timeKey].forEach(p => {
        const avatarSrc = gerarAvatar(p.nome, p.cor);
        const statsStr = JSON.stringify(p.stats);
        grid.innerHTML += `
            <div class="p-card" onclick="abrirModal('${p.nome}', ${statsStr}, '${p.role}', ${p.kd}, ${p.hs}, '${p.cor}')">
                <img src="${avatarSrc}" class="p-img" alt="${p.nome}">
                <div class="p-info">
                    <h3>${p.nome.toUpperCase()}</h3>
                    <p>${p.role}</p>
                </div>
            </div>`;
    });
}

function abrirModal(nome, stats, role, kd, hs, cor) {
    document.getElementById('playerModal').style.display = "flex";
    document.getElementById('modalPlayerName').innerText = nome.toUpperCase();
    document.getElementById('modalPlayerRole').innerText = role;
    document.getElementById('modalKD').innerText = kd;
    document.getElementById('modalHS').innerText = hs + (hs > 0 ? '%' : ' (KDA)');

    // Foto no modal
    const modalImg = document.getElementById('modalPlayerImg');
    if (modalImg) {
        modalImg.src = gerarAvatar(nome, cor || '#ff4655');
    }

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['MIRA', 'POSIÇÃO', 'CLUTCH', 'UTILIDADE', 'AGRESSÃO'],
            datasets: [{
                label: nome,
                data: stats,
                backgroundColor: (cor || '#ff4655') + '33',
                borderColor: cor || '#ff4655',
                borderWidth: 2,
                pointBackgroundColor: cor || '#ff4655'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#333' },
                    grid: { color: '#333' },
                    pointLabels: { color: '#fff', font: { size: 11, family: 'Oswald' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: { labels: { color: '#fff', font: { family: 'Oswald' } } }
            }
        }
    });
}

function fecharModal() {
    document.getElementById('playerModal').style.display = "none";
}

// Fecha modal clicando fora
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('playerModal').addEventListener('click', function (e) {
        if (e.target === this) fecharModal();
    });
});
