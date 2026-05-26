function construirBancoSincronizado() {
    const fonte = typeof bancoTimes !== 'undefined' ? bancoTimes : {};

    const mapeamento = {
        cs: {
            metricasTime: ['WIN RATE GLOBAL', 'TÍTULOS S-TIER', 'PREMIAÇÃO TOTAL', 'WIN RATE TR', 'SEMANAS NO #1'],
            metricasPlayer: ['RATING 2.0', 'ADR (DANO MÉDIO)', 'KAST %', 'IMPACT RATING', 'KPR (KILLS/ROUND)'],
            times: []
        },
        val: {
            metricasTime: ['WIN RATE GLOBAL', 'TÍTULOS INTERNACIONAIS', 'PREMIAÇÃO TOTAL', 'WIN RATE ATQUE', 'RANKING VLR'],
            metricasPlayer: ['RATING VLR', 'ACS (COMBATE)', 'KAST %', 'ADR (DANO/RD)', 'KPR (KILLS/RD)'],
            times: []
        },
        lol: {
            metricasTime: ['WIN RATE SÉRIES', 'TÍTULOS DE SPLIT', 'FIRST BLOOD %', 'DRAGÕES POR JOGO', 'BARÕES POR JOGO'],
            metricasPlayer: ['KDA RATIO', 'CS POR MINUTO (CSPM)', 'PARTICIPAÇÃO EM KILLS', 'OURO POR MINUTO (GPM)', 'DANO % DO TIME'],
            times: []
        }
    };

    for (const chave in fonte) {
        const timeOriginal = fonte[chave];
        if (!timeOriginal || !timeOriginal.jogadores) continue;

        let jogoAlvo = 'cs';
        const jogoTexto = timeOriginal.jogo ? timeOriginal.jogo.toUpperCase() : '';

        if (jogoTexto.includes('VALORANT')) jogoAlvo = 'val';
        if (jogoTexto.includes('LEAGUE') || jogoTexto.includes('LOL')) jogoAlvo = 'lol';

        const jogadoresMapeados = timeOriginal.jogadores.map(j => {
            let valNum1 = parseFloat(j.kd || 1.0);
            let valNum2 = parseFloat(j.extra || 0);

            let statGrafico = [];
            let rawDados = [];

            if (jogoAlvo === 'cs') {
                let adrEstimado = valNum2 > 0 ? valNum2 : (valNum1 * 72);
                statGrafico = [valNum1 * 65, adrEstimado, 72, valNum1 * 62, valNum1 * 60];
                rawDados = [valNum1.toFixed(2), adrEstimado.toFixed(1), "73.4%", (valNum1 * 1.02).toFixed(2), (valNum1 * 0.72).toFixed(2)];
            } else if (jogoAlvo === 'val') {
                let acsEstimado = valNum2 > 0 ? valNum2 : (valNum1 * 210);
                statGrafico = [valNum1 * 65, acsEstimado / 3, 71, acsEstimado / 2.5, valNum1 * 60];
                rawDados = [valNum1.toFixed(2), acsEstimado.toFixed(0), "72.1%", (acsEstimado * 0.65).toFixed(1), (valNum1 * 0.74).toFixed(2)];
            } else {
                let cspm = valNum2 > 0 && valNum2 < 15 ? valNum2 : 8.6;
                let kpPercent = valNum2 >= 15 ? valNum2 : 68.5;
                statGrafico = [valNum1 * 18, cspm * 8, kpPercent, 420 / 6, 28];
                rawDados = [`${valNum1.toFixed(2)}:1`, `${cspm.toFixed(1)}/m`, `${kpPercent.toFixed(1)}%`, `${Math.floor(380 + valNum1 * 30)}`, `${(22 + valNum1 * 4).toFixed(1)}%`];
            }

            return {
                nome: j.nome,
                stats: statGrafico,
                raw: rawDados
            };
        });

        let t1 = timeOriginal.titulos ? timeOriginal.titulos.length : 0;
        let p1 = timeOriginal.rank === "#1" ? "68.2%" : "54.5%";
        let rawTime = [];
        let statTime = [];

        if (jogoAlvo === 'cs' || jogoAlvo === 'val') {
            rawTime = [p1, `${t1} títulos`, `$${(t1 * 450 + 200)}K`, "51.2%", timeOriginal.rank || "#5"];
            statTime = [75, t1 * 15 + 30, 65, 55, 80];
        } else {
            rawTime = [p1, `${t1} títulos`, "54.0%", "3.2/jg", "1.1/jg"];
            statTime = [70, t1 * 15 + 30, 60, 70, 65];
        }

        mapeamento[jogoAlvo].times.push({
            nome: timeOriginal.nome,
            stats: statTime,
            raw: rawTime,
            jogadores: jogadoresMapeados
        });
    }

    return mapeamento;
}

const bancoDadosComp = construirBancoSincronizado();

let jogoAtual = 'cs';
let modoAtual = 'player';
let meuGrafico = null;

function popularTimes() {
    const jogoData = bancoDadosComp[jogoAtual];
    const t1 = document.getElementById('team1-select');
    const t2 = document.getElementById('team2-select');

    if (!t1 || !t2) return;

    t1.innerHTML = '';
    t2.innerHTML = '';

    if (!jogoData || !jogoData.times || jogoData.times.length === 0) {
        const e1 = document.getElementById('ent1-select') || document.getElementById('p1-select');
        const e2 = document.getElementById('ent2-select') || document.getElementById('p2-select');
        if (e1) e1.innerHTML = '';
        if (e2) e2.innerHTML = '';
        return;
    }

    jogoData.times.forEach((time, index) => {
        let opt1 = document.createElement('option');
        opt1.value = index;
        opt1.textContent = time.nome;
        t1.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = index;
        opt2.textContent = time.nome;
        t2.appendChild(opt2);
    });

    if (jogoData.times.length > 1) {
        t2.value = 1;
    }

    aoSelecionarTime(1);
    aoSelecionarTime(2);
}

function aoSelecionarTime(lado) {
    const t1 = document.getElementById('team1-select');
    const t2 = document.getElementById('team2-select');
    const e1 = document.getElementById('ent1-select') || document.getElementById('p1-select');
    const e2 = document.getElementById('ent2-select') || document.getElementById('p2-select');

    if (!t1 || !t2 || !e1 || !e2) return;

    if (modoAtual === 'team') {
        e1.style.display = 'none';
        e2.style.display = 'none';
        atualizarComparacao();
        return;
    }

    const entSelect = lado === 1 ? e1 : e2;
    const timeSelect = lado === 1 ? t1 : t2;

    entSelect.style.display = 'inline-block';
    entSelect.innerHTML = '';

    const timeIndex = timeSelect.value;
    const gameData = bancoDadosComp[jogoAtual];

    if (!gameData || !gameData.times || !gameData.times[timeIndex]) return;
    const timeObjeto = gameData.times[timeIndex];

    if (timeObjeto && timeObjeto.jogadores) {
        timeObjeto.jogadores.forEach((player, index) => {
            let opt = document.createElement('option');
            opt.value = index;
            opt.textContent = player.nome;
            entSelect.appendChild(opt);
        });
    }

    atualizarComparacao();
}

function mudarModo(modoId) {
    modoAtual = modoId;

    document.querySelectorAll('.mode-tab').forEach(btn => btn.classList.remove('active'));
    const btnAtivo = document.getElementById(`mode-${modoId}`);
    if (btnAtivo) btnAtivo.classList.add('active');

    const title1 = document.getElementById('title-side-1');
    const title2 = document.getElementById('title-side-2');
    if (title1) title1.textContent = modoId === 'team' ? 'TIME 1' : 'JOGADOR 1';
    if (title2) title2.textContent = modoId === 'team' ? 'TIME 2' : 'JOGADOR 2';

    const tableTitle = document.getElementById('table-details-title');
    if (tableTitle) {
        tableTitle.textContent = modoId === 'team' ? 'MÉTRICAS DA ORGANIZAÇÃO' : 'MÉTRICAS OFICIAIS DO COMPETIDOR';
    }

    popularTimes();
}

function atualizarComparacao() {
    const jogoData = bancoDadosComp[jogoAtual];
    const t1Element = document.getElementById('team1-select');
    const t2Element = document.getElementById('team2-select');

    if (!t1Element || !t2Element || !jogoData || !jogoData.times || jogoData.times.length === 0) return;

    const t1Value = t1Element.value;
    const t2Value = t2Element.value;

    const e1 = document.getElementById('ent1-select') || document.getElementById('p1-select');
    const e2 = document.getElementById('ent2-select') || document.getElementById('p2-select');

    if (!e1 || !e2) return;
    const e1Value = e1.value;
    const e2Value = e2.value;

    let entidade1, entidade2, labelsMetricas;

    if (modoAtual === 'team') {
        entidade1 = jogoData.times[t1Value];
        entidade2 = jogoData.times[t2Value];
        labelsMetricas = jogoData.metricasTime;
    } else {
        entidade1 = jogoData.times[t1Value]?.jogadores[e1Value];
        entidade2 = jogoData.times[t2Value]?.jogadores[e2Value];
        labelsMetricas = jogoData.metricasPlayer;
    }

    if (!entidade1 || !entidade2) return;

    const container = document.getElementById('statsDetailedContainer');
    if (container) {
        let html = '';
        labelsMetricas.forEach((metrica, idx) => {
            const val1 = entidade1.raw[idx] || "0";
            const val2 = entidade2.raw[idx] || "0";
            html += `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 5px; border-bottom:1px solid rgba(255,255,255,0.06); font-family:'Roboto';">
                    <span style="width:25%; text-align:left; color:#ff4655; font-weight:bold; font-size:15px;">${val1}</span>
                    <span style="width:50%; text-align:center; color:#ece8e1; font-size:11px; font-family:'Oswald'; letter-spacing:0.5px; text-transform:uppercase;">${metrica}</span>
                    <span style="width:25%; text-align:right; color:#00bfff; font-weight:bold; font-size:15px;">${val2}</span>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    if (meuGrafico) {
        meuGrafico.destroy();
    }

    const ctx = document.getElementById('compareChart')?.getContext('2d');
    if (!ctx) return;

    try {
        meuGrafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labelsMetricas,
                datasets: [
                    {
                        label: entidade1.nome,
                        data: entidade1.stats,
                        backgroundColor: '#ff4655',
                        borderColor: '#ff4655',
                        borderWidth: 1,
                        barPercentage: 0.6
                    },
                    {
                        label: entidade2.nome,
                        data: entidade2.stats,
                        backgroundColor: '#00bfff',
                        borderColor: '#00bfff',
                        borderWidth: 1,
                        barPercentage: 0.6
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { display: false },
                        beginAtZero: true
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: '#ece8e1', font: { size: 10, family: 'Oswald' } }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#fff', font: { size: 13, family: 'Oswald' } }
                    }
                }
            }
        });
    } catch (e) {
        console.warn("Erro ao gerar gráfico de barras comparativas.");
    }
}

function mudarJogo(jogoId) {
    jogoAtual = jogoId;
    document.querySelectorAll('.game-tab').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`tab-${jogoId}`);
    if (btn) btn.classList.add('active');

    popularTimes();
}

document.addEventListener("DOMContentLoaded", () => {
    popularTimes();
});