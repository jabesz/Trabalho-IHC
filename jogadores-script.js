const bancoDados = {
    // --- CS:GO ---
    lg: [
        { nome: "Fallen", role: "AWPer / IGL", kd: 1.25, hs: 55, stats: [95, 90, 98, 85, 70], img: "https://prosettings.net/wp-content/uploads/fallen.png" },
        { nome: "Coldzera", role: "Rifler", kd: 1.35, hs: 50, stats: [98, 95, 85, 80, 80], img: "https://prosettings.net/wp-content/uploads/coldzera.png" },
        { nome: "fnx", role: "Clutcher", kd: 1.10, hs: 48, stats: [88, 82, 99, 75, 75], img: "https://prosettings.net/wp-content/uploads/fnx.png" },
        { nome: "fer", role: "Entry Fragger", kd: 1.15, hs: 58, stats: [92, 80, 75, 70, 95], img: "https://prosettings.net/wp-content/uploads/fer.png" },
        { nome: "TACO", role: "Support", kd: 0.95, hs: 45, stats: [80, 85, 80, 95, 60], img: "https://prosettings.net/wp-content/uploads/taco.png" }
    ],
    furia: [
        { nome: "KSCERATO", role: "Rifler", kd: 1.25, hs: 55, stats: [98, 90, 95, 85, 60], img: "https://prosettings.net/wp-content/uploads/kscerato.png" },
        { nome: "Yuurih", role: "Entry Fragger", kd: 1.18, hs: 62, stats: [90, 85, 70, 80, 90], img: "https://prosettings.net/wp-content/uploads/yuurih.png" },
        { nome: "Fallen", role: "AWPer / IGL", kd: 1.05, hs: 52, stats: [90, 95, 90, 90, 60], img: "https://prosettings.net/wp-content/uploads/fallen.png" },
        { nome: "chelo", role: "Rifler", kd: 1.08, hs: 60, stats: [85, 80, 75, 70, 90], img: "https://prosettings.net/wp-content/uploads/chelo.png" },
        { nome: "arT", role: "Aggressive IGL", kd: 0.98, hs: 45, stats: [70, 98, 60, 95, 100], img: "https://prosettings.net/wp-content/uploads/art.png" }
    ],
    astralis: [
        { nome: "dev1ce", role: "AWPer", kd: 1.28, hs: 35, stats: [98, 95, 85, 80, 70], img: "https://prosettings.net/wp-content/uploads/device.png" },
        { nome: "dupreeh", role: "Entry Fragger", kd: 1.15, hs: 52, stats: [90, 85, 80, 75, 95], img: "https://prosettings.net/wp-content/uploads/dupreeh.png" },
        { nome: "Xyp9x", role: "Clutch Minister", kd: 1.05, hs: 45, stats: [85, 90, 100, 95, 50], img: "https://prosettings.net/wp-content/uploads/xyp9x.png" },
        { nome: "gla1ve", role: "IGL", kd: 1.02, hs: 42, stats: [80, 100, 90, 95, 65], img: "https://prosettings.net/wp-content/uploads/gla1ve.png" },
        { nome: "Magisk", role: "Rifler", kd: 1.12, hs: 50, stats: [92, 88, 85, 85, 75], img: "https://prosettings.net/wp-content/uploads/magisk.png" }
    ],
    navi: [
        { nome: "s1mple", role: "AWPer", kd: 1.35, hs: 40, stats: [100, 95, 98, 80, 90], img: "https://prosettings.net/wp-content/uploads/s1mple.png" },
        { nome: "b1t", role: "Rifler", kd: 1.15, hs: 70, stats: [98, 85, 80, 75, 80], img: "https://prosettings.net/wp-content/uploads/b1t.png" },
        { nome: "electroNic", role: "Rifler", kd: 1.20, hs: 52, stats: [95, 90, 85, 80, 85], img: "https://prosettings.net/wp-content/uploads/electronic.png" },
        { nome: "Perfecto", role: "Support", kd: 1.08, hs: 48, stats: [85, 95, 95, 98, 60], img: "https://prosettings.net/wp-content/uploads/perfecto.png" },
        { nome: "Boombl4", role: "IGL", kd: 0.98, hs: 45, stats: [85, 92, 70, 85, 90], img: "https://prosettings.net/wp-content/uploads/boombl4.png" }
    ],

    // --- VALORANT ---
    loud: [
        { nome: "aspas", role: "Duelist", kd: 1.30, hs: 32, stats: [100, 90, 95, 70, 98], img: "https://owcdn.net/img/628753909787a.png" },
        { nome: "Less", role: "Sentinel", kd: 1.20, hs: 28, stats: [98, 95, 90, 95, 60], img: "https://owcdn.net/img/628753b70868a.png" },
        { nome: "Saadhak", role: "IGL", kd: 1.05, hs: 25, stats: [85, 100, 92, 98, 65], img: "https://owcdn.net/img/6287535b4c05a.png" },
        { nome: "pANcada", role: "Controller", kd: 1.15, hs: 30, stats: [92, 95, 94, 96, 55], img: "https://owcdn.net/img/6287537b0d02a.png" },
        { nome: "Sacy", role: "Initiator", kd: 1.10, hs: 27, stats: [90, 98, 92, 98, 70], img: "https://owcdn.net/img/628753a3c087a.png" }
    ],
    acend: [
        { nome: "cNed", role: "Duelist", kd: 1.25, hs: 25, stats: [99, 85, 90, 75, 90], img: "https://owcdn.net/img/6182c14041d8b.png" },
        { nome: "starxo", role: "Initiator", kd: 1.08, hs: 22, stats: [88, 90, 95, 92, 85], img: "https://owcdn.net/img/6182c16999a0d.png" },
        { nome: "zeek", role: "Duelist", kd: 1.12, hs: 26, stats: [92, 85, 90, 80, 95], img: "https://owcdn.net/img/6182c15383f0a.png" },
        { nome: "Kiles", role: "Sentinel", kd: 0.95, hs: 20, stats: [80, 95, 85, 98, 50], img: "https://owcdn.net/img/6182c17fb1d0c.png" },
        { nome: "BONECOLD", role: "IGL", kd: 1.02, hs: 21, stats: [82, 98, 88, 95, 60], img: "https://owcdn.net/img/6182c1a01108d.png" }
    ],
    eg: [
        { nome: "Demon1", role: "Duelist", kd: 1.35, hs: 40, stats: [100, 88, 92, 70, 95], img: "https://owcdn.net/img/6463991206f1d.png" },
        { nome: "Jawgemo", role: "Controller", kd: 1.10, hs: 25, stats: [95, 85, 88, 90, 92], img: "https://owcdn.net/img/6463993206f1d.png" },
        { nome: "Boostio", role: "IGL", kd: 1.05, hs: 22, stats: [88, 98, 90, 92, 85], img: "https://owcdn.net/img/6463994c06f1d.png" },
        { nome: "Ethan", role: "Initiator", kd: 1.12, hs: 24, stats: [90, 95, 95, 98, 70], img: "https://owcdn.net/img/6463996a06f1d.png" },
        { nome: "C0M", role: "Initiator", kd: 1.02, hs: 20, stats: [85, 92, 98, 95, 55], img: "https://owcdn.net/img/6463997f06f1d.png" }
    ],
    sentinels: [
        { nome: "TenZ", role: "Duelist", kd: 1.28, hs: 30, stats: [99, 82, 88, 75, 98], img: "https://owcdn.net/img/605a2d6768393.png" },
        { nome: "Zellsis", role: "Flex", kd: 1.05, hs: 26, stats: [90, 92, 90, 95, 90], img: "https://owcdn.net/img/659ef8c69d95d.png" },
        { nome: "Johnqt", role: "IGL", kd: 1.10, hs: 25, stats: [92, 98, 92, 95, 70], img: "https://owcdn.net/img/659ef8ae9d95d.png" },
        { nome: "Sacy", role: "Initiator", kd: 1.08, hs: 27, stats: [90, 96, 92, 98, 70], img: "https://owcdn.net/img/628753a3c087a.png" },
        { nome: "Zekken", role: "Duelist", kd: 1.20, hs: 28, stats: [95, 85, 90, 80, 98], img: "https://owcdn.net/img/6320092c48674.png" }
    ],

    // --- LEAGUE OF LEGENDS ---
    pain: [
        { nome: "TitaN", role: "ADC", kd: 4.2, hs: 0, stats: [95, 85, 90, 75, 92], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1d/PNG_TitaN_2024_Split_1.png" },
        { nome: "Cariok", role: "Jungler", kd: 3.8, hs: 0, stats: [82, 92, 88, 95, 85], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e1/PNG_Cariok_2024_Split_1.png" },
        { nome: "dyNquedo", role: "Mid Laner", kd: 3.5, hs: 0, stats: [90, 88, 85, 82, 80], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3a/PNG_dyNquedo_2024_Split_1.png" },
        { nome: "Wizer", role: "Top Laner", kd: 3.2, hs: 0, stats: [88, 90, 92, 85, 75], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8e/PNG_Wizer_2024_Split_1.png" },
        { nome: "Kuri", role: "Support", kd: 2.8, hs: 0, stats: [75, 95, 98, 100, 60], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a2/PNG_Kuri_2024_Split_1.png" }
    ],
    t1: [
        { nome: "Faker", role: "Mid Laner", kd: 4.5, hs: 0, stats: [98, 100, 100, 95, 85], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/09/T1_Faker_2024_Split_1.png" },
        { nome: "Gumayusi", role: "ADC", kd: 4.8, hs: 0, stats: [100, 92, 95, 80, 90], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/0c/T1_Gumayusi_2024_Split_1.png" },
        { nome: "Keria", role: "Support", kd: 3.5, hs: 0, stats: [95, 98, 90, 100, 85], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/da/T1_Keria_2024_Split_1.png" },
        { nome: "Zeus", role: "Top Laner", kd: 4.0, hs: 0, stats: [98, 85, 88, 80, 95], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/52/T1_Zeus_2024_Split_1.png" },
        { nome: "Oner", role: "Jungler", kd: 3.8, hs: 0, stats: [90, 95, 92, 88, 92], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ef/T1_Oner_2024_Split_1.png" }
    ],
    ssw: [
        { nome: "Imp", role: "ADC", kd: 5.0, hs: 0, stats: [100, 85, 90, 75, 98], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/42/SSW_imp_2014_Worlds.png" },
        { nome: "Mata", role: "Support", kd: 3.2, hs: 0, stats: [90, 100, 95, 100, 80], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8c/SSW_Mata_2014_Worlds.png" },
        { nome: "Pawn", role: "Mid Laner", kd: 4.2, hs: 0, stats: [95, 92, 88, 85, 85], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/30/SSW_PawN_2014_Worlds.png" },
        { nome: "Dandy", role: "Jungler", kd: 4.5, hs: 0, stats: [92, 100, 95, 98, 90], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1a/SSW_DanDy_2014_Worlds.png" },
        { nome: "Looper", role: "Top Laner", kd: 3.8, hs: 0, stats: [88, 95, 92, 90, 70], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/41/SSW_Looper_2014_Worlds.png" }
    ],
    edg: [
        { nome: "Viper", role: "ADC", kd: 5.2, hs: 0, stats: [100, 95, 98, 80, 92], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/EDG_Viper_2021_Worlds.png" },
        { nome: "Meiko", role: "Support", kd: 3.0, hs: 0, stats: [85, 98, 95, 100, 75], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/23/EDG_Meiko_2021_Worlds.png" },
        { nome: "Scout", role: "Mid Laner", kd: 4.5, hs: 0, stats: [98, 95, 92, 90, 88], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/EDG_Scout_2021_Worlds.png" },
        { nome: "Jiejie", role: "Jungler", kd: 3.9, hs: 0, stats: [90, 92, 95, 92, 90], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/37/EDG_Jiejie_2021_Worlds.png" },
        { nome: "Flandre", role: "Top Laner", kd: 3.5, hs: 0, stats: [92, 90, 85, 88, 85], img: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4c/EDG_Flandre_2021_Worlds.png" }
    ]
};

let radarChart = null;

function carregarTime(timeKey) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + timeKey).classList.add('active');

    const grid = document.getElementById('players-grid');
    grid.innerHTML = "";
    
    bancoDados[timeKey].forEach(p => {
        grid.innerHTML += `
            <div class="p-card" onclick="abrirModal('${p.nome}', [${p.stats}], '${p.role}', ${p.kd}, ${p.hs})">
                <img src="${p.img}" class="p-img">
                <div class="p-info">
                    <h3>${p.nome.toUpperCase()}</h3>
                    <p>${p.role}</p>
                </div>
            </div>`;
    });
}

function abrirModal(nome, stats, role, kd, hs) {
    document.getElementById('playerModal').style.display = "flex";
    document.getElementById('modalPlayerName').innerText = nome.toUpperCase();
    document.getElementById('modalPlayerRole').innerText = role;
    document.getElementById('modalKD').innerText = kd;
    document.getElementById('modalHS').innerText = hs;

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Mira', 'Posição', 'Clutch', 'Utilidade', 'Agressão'],
            datasets: [{
                label: 'Performance',
                data: stats,
                backgroundColor: 'rgba(255, 70, 85, 0.2)',
                borderColor: '#ff4655',
                pointBackgroundColor: '#ff4655'
            }]
        },
        options: {
            scales: { r: { angleLines: { color: '#333' }, grid: { color: '#333' }, pointLabels: { color: '#fff' }, ticks: { display: false }, beginAtZero: true, max: 100 } }
        }
    });
}

function fecharModal() { document.getElementById('playerModal').style.display = "none"; }