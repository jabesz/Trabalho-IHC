// 1. Banco de dados com métricas para o gráfico (0 a 100) e valores reais de fóruns (raw)
const bancoDados = {
  cs: [
    { nome: "Fallen", stats: [84, 76, 89, 92, 75], raw: ["1.12", "76.4", "73.2%", "1.18", "0.71"] },
    { nome: "Coldzera", stats: [98, 92, 96, 90, 94], raw: ["1.31", "88.5", "78.4%", "1.15", "0.82"] },
    { nome: "fnx", stats: [82, 75, 86, 96, 74], raw: ["1.05", "74.1", "71.8%", "1.24", "0.68"] },
    { nome: "fer", stats: [90, 94, 80, 94, 88], raw: ["1.20", "90.2", "69.5%", "1.22", "0.79"] },
    { nome: "TACO", stats: [76, 72, 91, 74, 68], raw: ["0.94", "71.0", "75.1%", "0.91", "0.62"] }
  ],
  val: [
    { nome: "Aspas", stats: [98, 96, 90, 96, 82], raw: ["265", "168.4", "76.2%", "0.26", "26.5%"] },
    { nome: "Less", stats: [92, 88, 94, 78, 94], raw: ["234", "152.1", "79.5%", "0.14", "31.2%"] },
    { nome: "Saadhak", stats: [84, 81, 88, 82, 74], raw: ["208", "138.0", "72.4%", "0.16", "22.1%"] },
    { nome: "Cauanzin", stats: [86, 89, 84, 85, 80], raw: ["221", "154.6", "71.1%", "0.18", "24.8%"] },
    { nome: "Tuyz", stats: [80, 78, 92, 72, 84], raw: ["198", "131.2", "77.9%", "0.10", "25.5%"] }
  ],
  lol: [
    { nome: "Faker", stats: [90, 86, 88, 88, 92], raw: ["4.5", "8.7", "415", "68.5%", "642"] },
    { nome: "Zeus", stats: [85, 94, 91, 75, 95], raw: ["3.2", "9.4", "432", "58.2%", "685"] },
    { nome: "Oner", stats: [88, 78, 82, 92, 74], raw: ["4.1", "6.2", "360", "74.1%", "380"] },
    { nome: "Gumayusi", stats: [96, 98, 95, 78, 94], raw: ["6.8", "10.1", "455", "61.0%", "670"] },
    { nome: "Keria", stats: [92, 35, 62, 95, 68], raw: ["5.2", "1.2", "240", "76.4%", "310"] }
  ]
};

// Labels customizadas para os eixos de cada modalidade
const labelsPorJogo = {
  cs: ['RATING 2.0', 'ADR (DANO)', 'KAST %', 'IMPACTO', 'KPR (KILLS)'],
  val: ['ACS (COMBATE)', 'ADR (DANO)', 'KAST %', 'FKPR (FIRST KILLS)', 'HEADSHOT %'],
  lol: ['KDA RATIO', 'CS POR MINUTO', 'OURO POR MINUTO', 'PART. KILLS (KP%)', 'DANO POR MIN (DPM)']
};

let jogoAtual = 'cs';
let chartComparacao = null;

// Controla a troca de abas e reinicializa selects/gráficos
function mudarJogo(jogoId) {
  jogoAtual = jogoId;

  document.querySelectorAll('.game-tab').forEach(btn => btn.classList.remove('active'));
  const botaoAtivo = document.getElementById(`tab-${jogoId}`);
  if (botaoAtivo) botaoAtivo.classList.add('active');

  popularSelects(jogoId);
  atualizarComparacao();
}

// Alimenta as tags <select> com os respectivos jogadores do jogo ativo
function popularSelects(jogoId) {
  const jogadores = bancoDados[jogoId] || [];
  const s1 = document.getElementById('p1-select');
  const s2 = document.getElementById('p2-select');

  if (!s1 || !s2) return;

  s1.innerHTML = '';
  s2.innerHTML = '';

  jogadores.forEach((p, index) => {
    let opt1 = document.createElement('option');
    opt1.value = index;
    opt1.textContent = p.nome;
    s1.appendChild(opt1);

    let opt2 = document.createElement('option');
    opt2.value = index;
    opt2.textContent = p.nome;
    if (index === 1) opt2.selected = true; // Segundo jogador inicia selecionado no select 2
    s2.appendChild(opt2);
  });
}

// Renderiza as linhas estatísticas comparando valor contra valor
function renderizarCardsEstatisticas(p1, p2) {
  const container = document.getElementById('statsDetailedContainer');
  const eixos = labelsPorJogo[jogoAtual];
  let htmlContent = '';

  eixos.forEach((metrica, i) => {
    const val1 = p1.stats[i];
    const val2 = p2.stats[i];

    // Compara qual número performou melhor para aplicar o verde clássico
    const classeP1 = val1 > val2 ? 'stat-win' : (val1 < val2 ? 'stat-lose' : '');
    const classeP2 = val2 > val1 ? 'stat-win' : (val2 < val1 ? 'stat-lose' : '');

    htmlContent += `
            <div class="stat-row-comparison">
                <div class="player-stat-val ${classeP1}">${p1.raw[i]}</div>
                <div class="stat-label-center">${metrica}</div>
                <div class="player-stat-val ${classeP2}">${p2.raw[i]}</div>
            </div>
        `;
  });

  container.innerHTML = htmlContent;
}

// Atualiza o gráfico de Radar e a tabela numérica lado a lado
function atualizarComparacao() {
  const s1 = document.getElementById('p1-select');
  const s2 = document.getElementById('p2-select');
  if (!s1 || !s2 || s1.value === "" || s2.value === "") return;

  const p1 = bancoDados[jogoAtual][s1.value];
  const p2 = bancoDados[jogoAtual][s2.value];
  const eixosGrafico = labelsPorJogo[jogoAtual];

  // Atualiza a tabela textual
  renderizarCardsEstatisticas(p1, p2);

  // Atualiza o Chart.js
  const ctx = document.getElementById('compareChart').getContext('2d');
  if (chartComparacao) chartComparacao.destroy();

  chartComparacao = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: eixosGrafico,
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
          backgroundColor: 'rgba(0, 191, 255, 0.2)',
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
          backgroundColor: 'rgba(20, 20, 20, 0.6)',
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#ece8e1', font: { size: 12, family: 'Oswald', weight: 'bold' } },
          ticks: { display: false },
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: { labels: { color: '#fff', font: { size: 14, family: 'Oswald' } } }
      }
    }
  });
}

// Configura os escutadores iniciais na carga da página
window.onload = function () {
  mudarJogo('cs');
  document.getElementById('p1-select').addEventListener('change', atualizarComparacao);
  document.getElementById('p2-select').addEventListener('change', atualizarComparacao);
};