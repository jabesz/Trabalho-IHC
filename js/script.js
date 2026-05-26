const db = {
    cs: [
        { nome: "karrigan", stats: [65, 95, 88, 92, 60] }, { nome: "broky", stats: [94, 90, 95, 80, 70] }, { nome: "ropz", stats: [98, 96, 92, 85, 65] }, { nome: "rain", stats: [90, 82, 80, 78, 92] }, { nome: "frozen", stats: [93, 91, 89, 86, 74] },
        { nome: "Aleksib", stats: [62, 96, 85, 94, 55] }, { nome: "w0nderful", stats: [91, 88, 90, 82, 68] }, { nome: "jL", stats: [94, 88, 95, 85, 84] }, { nome: "iM", stats: [89, 84, 82, 80, 85] }, { nome: "b1t", stats: [98, 86, 84, 87, 72] },
        { nome: "ZywOo", stats: [99, 95, 98, 88, 82] }, { nome: "apEX", stats: [64, 94, 86, 96, 76] }, { nome: "Spinx", stats: [92, 88, 85, 82, 75] }, { nome: "flameZ", stats: [91, 80, 84, 78, 90] }, { nome: "Mezii", stats: [84, 86, 88, 90, 64] },
        { nome: "siuhy", stats: [74, 95, 86, 91, 72] }, { nome: "torzsi", stats: [90, 85, 89, 81, 62] }, { nome: "xertioN", stats: [92, 81, 82, 76, 93] }, { nome: "Jimpphat", stats: [94, 93, 91, 88, 66] }, { nome: "Brollan", stats: [88, 84, 83, 80, 85] },
        { nome: "chopper", stats: [60, 92, 80, 88, 62] }, { nome: "sh1ro", stats: [95, 96, 94, 85, 55] }, { nome: "donk", stats: [99, 88, 90, 82, 99] }, { nome: "magixx", stats: [82, 88, 86, 92, 58] }, { nome: "zoner", stats: [85, 82, 81, 80, 76] },
        { nome: "Snax", stats: [68, 93, 85, 89, 65] }, { nome: "m0NESY", stats: [99, 94, 96, 84, 83] }, { nome: "NiKo", stats: [97, 86, 91, 80, 94] }, { nome: "hunter", stats: [87, 85, 88, 82, 76] }, { nome: "malbsMd", stats: [93, 81, 83, 75, 92] },
        { nome: "MAJ3R", stats: [63, 94, 87, 91, 60] }, { nome: "XANTARES", stats: [98, 86, 90, 81, 95] }, { nome: "wodicX", stats: [89, 84, 85, 78, 64] }, { nome: "Calyx", stats: [83, 86, 84, 89, 62] }, { nome: "imoRR", stats: [88, 78, 80, 74, 88] },
        { nome: "Jame", stats: [86, 99, 96, 92, 42] }, { nome: "FL1T", stats: [90, 86, 88, 83, 79] }, { nome: "fame", stats: [89, 84, 85, 81, 75] }, { nome: "n0rb3r7", stats: [81, 88, 84, 91, 65] }, { nome: "electroNic", stats: [92, 85, 87, 80, 88] },
        { nome: "Fallen (CS)", stats: [82, 93, 94, 91, 52] }, { nome: "KSCERATO", stats: [96, 91, 93, 86, 68] }, { nome: "Yuurih", stats: [90, 84, 86, 81, 82] }, { nome: "chelo", stats: [86, 77, 79, 73, 91] }, { nome: "skullz", stats: [85, 88, 85, 89, 65] },
        { nome: "biguzera", stats: [91, 94, 95, 88, 84] }, { nome: "nqz", stats: [89, 86, 88, 82, 60] }, { nome: "kauez", stats: [87, 81, 83, 79, 86] }, { nome: "snow", stats: [88, 80, 81, 78, 83] }, { nome: "lux", stats: [85, 76, 78, 72, 89] }
    ],
    val: [
        { nome: "Johnqt", stats: [75, 95, 90, 93, 62] }, { nome: "zekken", stats: [95, 83, 86, 78, 97] }, { nome: "TenZ", stats: [94, 91, 93, 89, 82] }, { nome: "Sacy", stats: [86, 93, 89, 94, 70] }, { nome: "Zellsis", stats: [82, 89, 88, 91, 78] },
        { nome: "Boaster", stats: [64, 96, 91, 95, 52] }, { nome: "Derke", stats: [94, 82, 85, 75, 96] }, { nome: "Chronicle", stats: [91, 90, 93, 90, 78] }, { nome: "Alfajer", stats: [96, 94, 92, 88, 70] }, { nome: "Leo", stats: [92, 95, 94, 93, 65] },
        { nome: "Munchkin", stats: [76, 94, 91, 92, 68] }, { nome: "t3xture", stats: [96, 81, 88, 74, 95] }, { nome: "Meteor", stats: [90, 89, 87, 86, 80] }, { nome: "Lakia", stats: [80, 86, 85, 89, 72] }, { nome: "Karon", stats: [93, 92, 92, 91, 74] },
        { nome: "CHICHOO", stats: [83, 93, 91, 90, 66] }, { nome: "ZmjjKK", stats: [98, 80, 90, 72, 99] }, { nome: "nobody", stats: [81, 87, 85, 89, 74] }, { nome: "Smoggy", stats: [89, 88, 87, 86, 82] }, { nome: "S1Mon", stats: [82, 85, 84, 88, 76] },
        { nome: "Boo", stats: [72, 95, 89, 92, 64] }, { nome: "Miniboo", stats: [93, 79, 82, 71, 95] }, { nome: "RieNs", stats: [92, 87, 91, 90, 81] }, { nome: "Benjyfishy", stats: [88, 91, 86, 85, 78] }, { nome: "Wo0t", stats: [95, 86, 92, 84, 90] },
        { nome: "valyn", stats: [75, 96, 90, 94, 60] }, { nome: "JonahP", stats: [86, 91, 89, 91, 74] }, { nome: "trent", stats: [90, 92, 88, 90, 72] }, { nome: "leaf", stats: [92, 84, 86, 80, 89] }, { nome: "icy", stats: [85, 78, 80, 73, 88] },
        { nome: "d4v41", stats: [85, 91, 90, 92, 79] }, { nome: "f0rsakeN", stats: [94, 89, 92, 86, 92] }, { nome: "mindfreak", stats: [80, 93, 89, 94, 60] }, { nome: "something", stats: [96, 80, 86, 72, 97] }, { nome: "Jinggg", stats: [91, 76, 81, 70, 96] },
        { nome: "kiNgg", stats: [88, 94, 91, 92, 75] }, { nome: "aspas", stats: [99, 88, 95, 80, 99] }, { nome: "Mazino", stats: [84, 86, 85, 88, 79] }, { nome: "tex", stats: [87, 89, 86, 85, 76] }, { nome: "C0M", stats: [78, 90, 88, 93, 62] },
        { nome: "Melser", stats: [74, 93, 88, 91, 62] }, { nome: "keznit", stats: [93, 81, 87, 75, 94] }, { nome: "Klaus", stats: [79, 87, 85, 89, 68] }, { nome: "Shyy", stats: [84, 88, 86, 89, 74] }, { nome: "Heat", stats: [89, 84, 85, 81, 87] },
        { nome: "Saadhak", stats: [72, 96, 94, 97, 62] }, { nome: "Less", stats: [95, 97, 95, 91, 74] }, { nome: "Cauanzin", stats: [88, 86, 85, 89, 81] }, { nome: "Tuyz", stats: [84, 92, 89, 93, 66] }, { nome: "pANcada", stats: [86, 91, 90, 92, 68] }
    ],
    lol: [
        { nome: "Zeus", stats: [94, 85, 88, 90, 95] }, { nome: "Oner", stats: [90, 88, 92, 85, 88] }, { nome: "Faker", stats: [95, 98, 96, 92, 90] }, { nome: "Gumayusi", stats: [96, 90, 94, 95, 82] }, { nome: "Keria", stats: [91, 96, 89, 93, 86] },
        { nome: "Kiin", stats: [92, 91, 90, 89, 86] }, { nome: "Canyon", stats: [95, 93, 91, 90, 92] }, { nome: "Chovy", stats: [99, 97, 95, 96, 88] }, { nome: "Peyz", stats: [97, 88, 91, 97, 85] }, { nome: "Lehends", stats: [88, 95, 90, 91, 80] },
        { nome: "Bin", stats: [96, 82, 85, 93, 97] }, { nome: "Xun", stats: [89, 86, 88, 89, 88] }, { nome: "Knight", stats: [96, 93, 94, 94, 86] }, { nome: "Elk", stats: [98, 89, 93, 98, 84] }, { nome: "ON", stats: [85, 92, 87, 88, 85] },
        { nome: "BrokenBlade", stats: [88, 85, 86, 88, 89] }, { nome: "Yike", stats: [89, 87, 89, 86, 85] }, { nome: "Caps", stats: [95, 91, 95, 94, 87] }, { nome: "HansSama", stats: [93, 86, 88, 93, 81] }, { nome: "Mikyx", stats: [86, 94, 89, 89, 82] },
        { nome: "Doran", stats: [89, 87, 85, 87, 85] }, { nome: "Peanut", stats: [91, 95, 92, 87, 80] }, { nome: "Zeka", stats: [94, 87, 93, 91, 92] }, { nome: "Viper", stats: [98, 91, 94, 96, 82] }, { nome: "Delight", stats: [88, 97, 91, 90, 78] },
        { nome: "369", stats: [91, 88, 87, 86, 83] }, { nome: "Tian", stats: [90, 89, 91, 88, 89] }, { nome: "Creme", stats: [92, 86, 89, 91, 87] }, { nome: "JackeyLove", stats: [96, 85, 90, 97, 91] }, { nome: "Meiko", stats: [87, 96, 92, 90, 80] },
        { nome: "Breathe", stats: [86, 85, 84, 85, 82] }, { nome: "Tarzan", stats: [92, 91, 90, 86, 84] }, { nome: "Xiaohu", stats: [90, 94, 91, 89, 78] }, { nome: "Light", stats: [93, 88, 89, 94, 80] }, { nome: "Crisp", stats: [84, 92, 86, 87, 81] },
        { nome: "Bwipo", stats: [87, 82, 85, 89, 92] }, { nome: "Inspired", stats: [91, 90, 89, 87, 83] }, { nome: "Quad", stats: [90, 86, 88, 90, 82] }, { nome: "Massu", stats: [91, 84, 86, 92, 80] }, { nome: "Busio", stats: [83, 90, 85, 86, 79] },
        { nome: "Wizer", stats: [88, 84, 85, 86, 83] }, { nome: "Cariok", stats: [86, 87, 88, 84, 81] }, { nome: "dyNquedo", stats: [89, 86, 91, 89, 82] }, { nome: "Titan", stats: [93, 83, 87, 93, 89] }, { nome: "Kuri", stats: [85, 92, 88, 89, 78] },
        { nome: "Robo", stats: [87, 81, 86, 85, 93] }, { nome: "Yopsa", stats: [85, 84, 86, 83, 85] }, { nome: "Tinowns", stats: [91, 89, 90, 91, 79] }, { nome: "Route", stats: [94, 86, 89, 94, 82] }, { nome: "Slayer", stats: [82, 90, 84, 86, 76] }
    ]
};

const metricasPorJogo = {
    cs: ['MIRA', 'POSIÇÃO', 'CLUTCH', 'UTILIDADE', 'AGRESSÃO'],
    val: ['MIRA', 'HABILIDADES', 'CLUTCH', 'ECONOMIA', 'AGRESSÃO'],
    lol: ['FARM / CS', 'VISÃO', 'KDA GLOBAL', 'DANO / MIN', 'OURO / MIN']
};

let radarChart = null;
let jogoAtual = 'cs';

function mudarJogo(jogoId) {
    jogoAtual = jogoId;
    document.querySelectorAll('.game-tab').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    popularSelects(jogoId);
    if (radarChart) {
        radarChart.destroy();
        radarChart = null;
    }
}

function popularSelects(jogoId) {
    const p1Select = document.getElementById('p1-select');
    const p2Select = document.getElementById('p2-select');
    if (!p1Select || !p2Select) return;

    p1Select.innerHTML = '<option value="">Selecione o Jogador 1</option>';
    p2Select.innerHTML = '<option value="">Selecione o Jogador 2</option>';

    if (db[jogoId]) {
        db[jogoId].forEach((jog, index) => {
            p1Select.innerHTML += `<option value="${index}">${jog.nome}</option>`;
            p2Select.innerHTML += `<option value="${index}">${jog.nome}</option>`;
        });
    }
}

function gerarComparacao() {
    const p1Index = document.getElementById('p1-select').value;
    const p2Index = document.getElementById('p2-select').value;

    if (p1Index === "" || p2Index === "") {
        alert("Por favor, selecione dois jogadores para comparar!");
        return;
    }

    const p1 = db[jogoAtual][p1Index];
    const p2 = db[jogoAtual][p2Index];
    const labelsGrafico = metricasPorJogo[jogoAtual];

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labelsGrafico,
            datasets: [
                {
                    label: p1.nome,
                    data: p1.stats,
                    backgroundColor: 'rgba(255, 70, 85, 0.2)',
                    borderColor: '#ff4655',
                    borderWidth: 3,
                    pointBackgroundColor: '#ff4655'
                },
                {
                    label: p2.nome,
                    data: p2.stats,
                    backgroundColor: 'rgba(0, 191, 255, 0.25)',
                    borderColor: '#00bfff',
                    borderWidth: 3,
                    pointBackgroundColor: '#00bfff'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    backgroundColor: 'rgba(20,20,20,0.5)',
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#fff', font: { size: 12, family: 'Oswald' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: { labels: { color: '#fff', font: { size: 15, family: 'Oswald' } } }
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    popularSelects('cs');
});