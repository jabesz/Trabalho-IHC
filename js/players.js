const bancoTimes = {

    faze: {
        nome: "FaZe Clan", jogo: "COUNTER-STRIKE 2", rank: "#1", cor: "#ff4655",
        historia: "Fundada em 2010, a FaZe Clan moldou a cultura dos esports. No CS, quebrou recordes ao erguer o primeiro Major com uma line-up multinacional e dominou as primeiras taças do CS2.",
        titulos: ["PGL Major Antwerp 2022", "IEM Katowice 2022", "IEM Cologne 2022", "Intel Grand Slam Season 4"],
        jogadores: [
            { nome: "karrigan", role: "IGL / Capitão", kd: "0.94", extra: "38.5%", stats: [65, 75, 80, 95, 50] },
            { nome: "broky", role: "AWPer", kd: "1.16", extra: "32.1%", stats: [94, 90, 92, 85, 78] },
            { nome: "ropz", role: "Lurker", kd: "1.14", extra: "51.0%", stats: [96, 95, 88, 80, 72] },
            { nome: "rain", role: "Entry Fragger", kd: "1.06", extra: "56.4%", stats: [85, 82, 86, 75, 92] },
            { nome: "frozen", role: "Rifler", kd: "1.12", extra: "48.2%", stats: [90, 88, 89, 82, 80] }
        ]
    },
    navi: {
        nome: "Natus Vincere", jogo: "COUNTER-STRIKE 2", rank: "#2", cor: "#fff200",
        historia: "A organização ucraniana 'Nascida para Vencer' é um pilar dos esports. Lendária na era de ouro do CS:GO, consagrou-se no CS2 ao vencer o primeiríssimo Major da nova versão do game.",
        titulos: ["PGL Major Copenhagen 2024", "PGL Major Stockholm 2021", "Intel Grand Slam Season 3"],
        jogadores: [
            { nome: "Aleksib", role: "IGL", kd: "0.95", extra: "41.2%", stats: [62, 72, 78, 96, 48] },
            { nome: "jL", role: "Rifler / Star", kd: "1.15", extra: "52.3%", stats: [92, 88, 90, 86, 85] },
            { nome: "b1t", role: "Rifler (Anchor)", kd: "1.10", extra: "64.1%", stats: [98, 85, 84, 88, 70] },
            { nome: "iM", role: "Rifler", kd: "1.05", extra: "50.8%", stats: [84, 80, 82, 74, 88] },
            { nome: "w0nderful", role: "AWPer", kd: "1.12", extra: "35.6%", stats: [89, 86, 91, 80, 75] }
        ]
    },
    vitality: {
        nome: "Team Vitality", jogo: "COUNTER-STRIKE 2", rank: "#3", cor: "#e5b800",
        historia: "Potência europeia baseada na França, a Vitality montou uma verdadeira máquina em torno do fenômeno ZywOo, eternizando-se ao faturar o emocionante Major de Paris.",
        titulos: ["BLAST.tv Paris Major 2023", "IEM Cologne 2023", "BLAST Premier World Final 2023"],
        jogadores: [
            { nome: "ZywOo", role: "AWPer / Star", kd: "1.32", extra: "41.5%", stats: [99, 94, 96, 92, 85] },
            { nome: "apEX", role: "IGL", kd: "1.00", extra: "46.2%", stats: [68, 76, 75, 94, 78] },
            { nome: "Spinx", role: "Lurker", kd: "1.14", extra: "49.8%", stats: [91, 86, 88, 84, 74] },
            { nome: "flameZ", role: "Entry Fragger", kd: "1.09", extra: "54.1%", stats: [87, 82, 80, 76, 90] },
            { nome: "mezii", role: "Rifler", kd: "1.02", extra: "47.7%", stats: [78, 80, 84, 82, 65] }
        ]
    },
    mouz: {
        nome: "MOUZ", jogo: "COUNTER-STRIKE 2", rank: "#4", cor: "#ff003c",
        historia: "Uma das marcas alemãs pioneiras nos esports competitivos. Renomeada por sua academia de talentos absurda, a MOUZ ostenta hoje uma das line-ups mais jovens e letais do planeta.",
        titulos: ["ESL Pro League Season 19", "ESL Pro League Season 18", "IEM flashpoint Season 3"],
        jogadores: [
            { nome: "siuhy", role: "IGL", kd: "1.01", extra: "39.1%", stats: [70, 82, 85, 92, 65] },
            { nome: "xertioN", role: "Entry Fragger", kd: "1.10", extra: "51.3%", stats: [88, 84, 80, 78, 92] },
            { nome: "torzsi", role: "AWPer", kd: "1.13", extra: "33.5%", stats: [90, 89, 87, 81, 68] },
            { nome: "Jimpphat", role: "Rifler (Lurker)", kd: "1.17", extra: "47.0%", stats: [94, 93, 91, 85, 70] },
            { nome: "Brollan", role: "Rifler", kd: "1.07", extra: "52.8%", stats: [84, 81, 82, 75, 87] }
        ]
    },
    spirit: {
        nome: "Team Spirit", jogo: "COUNTER-STRIKE 2", rank: "#5", cor: "#00bfff",
        historia: "A organização russa chocou o mundo ao dominar competições de nível S com a ascensão meteórica do jovem prodígio donk, exibindo um jogo explosivo de altíssima mira mecânica.",
        titulos: ["IEM Katowice 2024", "BetBoom Dacha Belgrade 2023", "FiReLEAGUE Global Finals"],
        jogadores: [
            { nome: "chopper", role: "IGL", kd: "0.96", extra: "42.0%", stats: [60, 75, 78, 90, 55] },
            { nome: "donk", role: "Entry / Star", kd: "1.31", extra: "58.2%", stats: [99, 91, 85, 96, 98] },
            { nome: "shalfey", role: "Rifler", kd: "1.09", extra: "49.1%", stats: [85, 84, 86, 80, 78] },
            { nome: "zoner", role: "Rifler", kd: "1.04", extra: "46.5%", stats: [81, 80, 83, 79, 74] },
            { nome: "magixx", role: "Support / Anchor", kd: "1.02", extra: "44.9%", stats: [76, 86, 88, 84, 60] }
        ]
    },
    g2: {
        nome: "G2 Esports", jogo: "COUNTER-STRIKE 2", rank: "#6", cor: "#b0b0b0",
        historia: "A G2 é conhecida pelo seu entretenimento e times montados a peso de ouro. No CS, conta com o lendário NiKo e m0NESY, configurando um time perigosíssimo em palcos internacionais.",
        titulos: ["IEM Cologne 2023", "IEM Katowice 2023", "BLAST Premier World Final 2022"],
        jogadores: [
            { nome: "Snax", role: "IGL", kd: "0.98", extra: "40.1%", stats: [64, 78, 82, 88, 58] },
            { nome: "NiKo", role: "Rifler / Star", kd: "1.18", extra: "52.9%", stats: [97, 92, 86, 91, 93] },
            { nome: "m0NESY", role: "AWPer / Star", kd: "1.28", extra: "36.4%", stats: [98, 95, 93, 89, 86] },
            { nome: "hunter", role: "Rifler", kd: "1.05", extra: "48.1%", stats: [84, 82, 85, 79, 76] },
            { nome: "malbsMd", role: "Entry Fragger", kd: "1.11", extra: "53.5%", stats: [88, 80, 78, 74, 91] }
        ]
    },
    ef: {
        nome: "Eternal Fire", jogo: "COUNTER-STRIKE 2", rank: "#7", cor: "#e5a93c",
        historia: "A Eternal Fire foi criada para ser o 'Super Time' da Turquia. Liderada por XANTARES, a equipe conquistou respeito global pela precisão de pixel imbatível de seus atletas.",
        titulos: ["CCT Central Europe Malta", "ESL Türkiye Şampiyonası", "ESA Supremes Vestel"],
        jogadores: [
            { nome: "MAJ3R", role: "IGL", kd: "0.97", extra: "37.9%", stats: [61, 80, 84, 94, 50] },
            { nome: "XANTARES", role: "Rifler / Star", kd: "1.21", extra: "54.3%", stats: [98, 91, 88, 90, 95] },
            { nome: "Wicadia", role: "Rifler", kd: "1.08", extra: "49.0%", stats: [85, 83, 82, 78, 86] },
            { nome: "Calyx", role: "Rifler", kd: "1.04", extra: "46.2%", stats: [82, 84, 85, 80, 72] },
            { nome: "woxic", role: "AWPer", kd: "1.10", extra: "31.8%", stats: [89, 82, 84, 76, 80] }
        ]
    },
    vp: {
        nome: "Virtus.pro", jogo: "COUNTER-STRIKE 2", rank: "#8", cor: "#ff6600",
        historia: "Uma das tags cirúrgicas da CEI. Famosa pelo seu ritmo de jogo lento, extremamente metódico e focado em re-retakes perfeitos que quebram a economia dos oponentes.",
        titulos: ["IEM Rio Major 2022 (Como Outsiders)", "Cs_summit 7", "Flashpoint Season 2"],
        jogadores: [
            { nome: "Jame", role: "IGL / AWPer", kd: "1.15", extra: "28.9%", stats: [85, 96, 95, 92, 40] },
            { nome: "electroNic", role: "Rifler / Star", kd: "1.11", extra: "49.5%", stats: [90, 86, 84, 88, 87] },
            { nome: "FL1T", role: "Rifler", kd: "1.10", extra: "48.0%", stats: [86, 85, 87, 81, 78] },
            { nome: "fame", role: "Rifler", kd: "1.08", extra: "51.2%", stats: [84, 83, 85, 80, 80] },
            { nome: "n0rb3r7", role: "Support", kd: "1.01", extra: "45.7%", stats: [78, 85, 89, 83, 65] }
        ]
    },
    furia: {
        nome: "FURIA", jogo: "COUNTER-STRIKE 2", rank: "#9", cor: "#ffffff",
        historia: "Orgulho do Brasil, a FURIA chocou o mundo com seu estilo frenético de 'cachorro louco'. Com a adição do veterano Fallen, buscam aliar maturidade tática à agressividade nata.",
        titulos: ["Elisa Masters Espoo 2023", "IEM Fall NA 2021", "Artic Invitational 2019"],
        jogadores: [
            { nome: "Fallen", role: "AWPer / IGL", kd: "1.08", extra: "39.4%", stats: [80, 84, 89, 92, 60] },
            { nome: "KSCERATO", role: "Rifler / Star", kd: "1.19", extra: "51.5%", stats: [94, 91, 92, 88, 72] },
            { nome: "yuurih", role: "Rifler", kd: "1.11", extra: "49.0%", stats: [88, 85, 86, 82, 84] },
            { nome: "chelo", role: "Entry Fragger", kd: "1.02", extra: "53.2%", stats: [80, 76, 78, 70, 89] },
            { nome: "skullz", role: "Support", kd: "1.04", extra: "45.1%", stats: [82, 80, 85, 81, 68] }
        ]
    },
    pain: {
        nome: "paiN Gaming", jogo: "COUNTER-STRIKE 2", rank: "#10", cor: "#ff0000",
        historia: "A tradicionalíssima paiN Gaming possui uma das torcidas mais apaixonadas do continente. No CS2, surpreenderam o planeta no Elimination Stage do Major revelando a força do cenário BR.",
        titulos: ["Global Esports Tour Rio 2024", "CBCS Invitational 2023", "Clutch Season 3"],
        jogadores: [
            { nome: "biguzera", role: "IGL / Star", kd: "1.14", extra: "44.2%", stats: [89, 88, 91, 95, 78] },
            { nome: "lux", role: "Rifler", kd: "1.05", extra: "54.0%", stats: [82, 79, 81, 74, 85] },
            { nome: "kauez", role: "Entry Fragger", kd: "1.08", extra: "48.9%", stats: [85, 83, 80, 76, 88] },
            { nome: "snow", role: "Rifler", kd: "1.06", extra: "51.1%", stats: [83, 80, 82, 78, 80] },
            { nome: "nqz", role: "AWPer", kd: "1.11", extra: "31.4%", stats: [88, 84, 89, 79, 62] }
        ]
    },

    sentinels: {
        nome: "Sentinels", jogo: "VALORANT", rank: "#1", cor: "#ff4655",
        historia: "Marca pop do VALORANT norte-americano. Reis do início do cenário, ressurgiram de forma meteórica em 2024 ao vencer o Masters Madrid impulsionados por uma legião imensa de fãs.",
        titulos: ["VCT Masters Madrid 2024", "VCT Masters Reykjavik 2021", "AfreecaTV League 2023"],
        jogadores: [
            { nome: "TenZ", role: "Controller / Flex", kd: "1.16", extra: "28.4%", stats: [92, 89, 87, 85, 84] },
            { nome: "zekken", role: "Duelist", kd: "1.22", extra: "24.5%", stats: [96, 94, 82, 95, 93] },
            { nome: "johnqt", role: "IGL / Sentinel", kd: "1.06", extra: "26.1%", stats: [82, 80, 88, 93, 68] },
            { nome: "Sacy", role: "Initiator", kd: "1.04", extra: "25.2%", stats: [80, 83, 90, 82, 70] },
            { nome: "Zellsis", role: "Flex / Support", kd: "1.01", extra: "23.9%", stats: [78, 79, 86, 84, 82] }
        ]
    },
    fnatic: {
        nome: "Fnatic", jogo: "VALORANT", rank: "#2", cor: "#ff6600",
        historia: "Orgulho do EMEA, a Fnatic cravou seu nome na história ao conquistar dois campeonatos internacionais consecutivos em 2023 devido a sua precisão tática e mira sincronizada.",
        titulos: ["VCT LOCK//IN São Paulo 2023", "VCT Masters Tokyo 2023", "VCT EMEA Stage 1"],
        jogadores: [
            { nome: "Boaster", role: "IGL / Controller", kd: "0.93", extra: "21.8%", stats: [65, 74, 82, 96, 52] },
            { nome: "Derke", role: "Duelist", kd: "1.19", extra: "23.9%", stats: [94, 91, 80, 93, 90] },
            { nome: "Alfajer", role: "Sentinel", kd: "1.21", extra: "30.2%", stats: [95, 90, 93, 86, 78] },
            { nome: "Chronicle", role: "Initiator / Flex", kd: "1.12", extra: "27.8%", stats: [88, 87, 90, 84, 82] },
            { nome: "Leo", role: "Initiator", kd: "1.18", extra: "26.5%", stats: [90, 89, 95, 82, 74] }
        ]
    },
    loud: {
        nome: "LOUD", jogo: "VALORANT", rank: "#3", cor: "#00ff66",
        historia: "A dona do cenário brasileiro e campeã mundial de 2022. Na temporada 2024, a equipe se reestruturou para bater de frente com as potências internacionais do VCT Americas mesmo com mudanças na line-up.",
        titulos: ["VALORANT Champions 2022", "VCT Americas League 2023", "Finalista LOCK//IN 2023"],
        jogadores: [
            { nome: "qck", role: "Duelist / Flex", kd: "1.05", extra: "22.8%", stats: [84, 85, 80, 81, 88] },
            { nome: "Less", role: "Sentinel", kd: "1.18", extra: "31.2%", stats: [93, 90, 94, 85, 80] },
            { nome: "Saadhak", role: "IGL / Capitão", kd: "1.04", extra: "22.5%", stats: [80, 82, 88, 95, 72] },
            { nome: "Cauanzin", role: "Initiator", kd: "1.10", extra: "24.8%", stats: [86, 88, 84, 80, 84] },
            { nome: "Tuyz", role: "Controller", kd: "1.07", extra: "26.0%", stats: [82, 79, 91, 76, 75] }
        ]
    },
    geng_val: {
        nome: "Gen.G Esports", jogo: "VALORANT", rank: "#4", cor: "#aa8a4a",
        historia: "Uma força absurda vinda do Pacífico. Em 2024, fincaram sua dinastia no VALORANT conquistando o troféu do Masters Shanghai em uma trajetória espetacular.",
        titulos: ["VCT Masters Shanghai 2024", "VCT Pacific Stage 1", "Finalista Masters Madrid 2024"],
        jogadores: [
            { nome: "t3xture", role: "Duelist", kd: "1.20", extra: "26.1%", stats: [95, 91, 84, 94, 88] },
            { nome: "Meteor", role: "Sentinel / Flex", kd: "1.12", extra: "28.3%", stats: [89, 87, 88, 82, 80] },
            { nome: "Munchkin", role: "IGL / Initiator", kd: "1.04", extra: "23.0%", stats: [78, 84, 89, 94, 72] },
            { nome: "Lakia", role: "Initiator", kd: "0.99", extra: "21.9%", stats: [74, 80, 85, 81, 76] },
            { nome: "Karon", role: "Controller / Star", kd: "1.18", extra: "29.2%", stats: [92, 94, 93, 85, 81] }
        ]
    },
    edg: {
        nome: "EDward Gaming", jogo: "VALORANT", rank: "#5", cor: "#708090",
        historia: "A soberana absoluta do VALORANT chinês. Liderada pelo carismático e ultra-agressivo duelista Kangkang, a EDG provou a evolução assustadora da sua região a nível global.",
        titulos: ["VCT China Stage 1 2024", "VCT China Evolution Series", "Finais Champions Seul 2024"],
        jogadores: [
            { nome: "ZmjjKK", role: "Duelist / Operator", kd: "1.25", extra: "25.8%", stats: [98, 93, 80, 96, 96] },
            { nome: "CHICHOO", role: "Controller / Anchor", kd: "1.08", extra: "30.1%", stats: [88, 92, 94, 78, 65] },
            { nome: "Nobody", role: "Initiator", kd: "1.01", extra: "22.4%", stats: [80, 84, 85, 82, 75] },
            { nome: "Smoggy", role: "Flex / Rifler", kd: "1.09", extra: "26.9%", stats: [86, 85, 88, 80, 82] },
            { nome: "Haodong", role: "IGL", kd: "0.94", extra: "20.5%", stats: [68, 76, 81, 91, 60] }
        ]
    },
    th: {
        nome: "Team Heretics", jogo: "VALORANT", rank: "#6", cor: "#004d40",
        historia: "A organização espanhola surpreendeu a Europa inteira ao promover jovens talentos da sua academia. Conseguiram bater de frente com os maiores veteranos do mundo com mecânicas absurdas.",
        titulos: ["Finalista Masters Shanghai 2024", "VCT EMEA Stage 1 Kickoff", "LVP Rising Stars"],
        jogadores: [
            { nome: "Miniboo", role: "Duelist / Neon", kd: "1.18", extra: "23.4%", stats: [96, 90, 78, 92, 97] },
            { nome: "Wo0t", role: "Initiator / Star", kd: "1.21", extra: "28.9%", stats: [95, 92, 91, 86, 88] },
            { nome: "RieNs", role: "Initiator", kd: "1.11", extra: "27.1%", stats: [87, 85, 88, 80, 81] },
            { nome: "Benjyfishy", role: "Sentinel", kd: "1.06", extra: "29.4%", stats: [89, 86, 85, 76, 78] },
            { nome: "Boo", role: "IGL / Controller", kd: "0.98", extra: "21.0%", stats: [70, 81, 86, 93, 62] }
        ]
    },
    prx: {
        nome: "Paper Rex", jogo: "VALORANT", rank: "#7", cor: "#ff00ff",
        historia: "Vindos de Singapura, a Paper Rex inventou o style 'W-Gaming' (só andar pra frente). O time joga de forma caótica, rápida e divertida, quebrando todas as regras tradicionais do meta tático.",
        titulos: ["VCT Pacific League 2023", "VCT Pacific Stage 1 2024", "Finalista Valorant Champions 2023"],
        jogadores: [
            { nome: "f0rsakeN", role: "Hyper-Flex / IGL", kd: "1.12", extra: "26.5%", stats: [91, 88, 90, 86, 94] },
            { nome: "something", role: "Duelist / Jett", kd: "1.22", extra: "24.0%", stats: [97, 94, 81, 95, 93] },
            { nome: "d4v41", role: "Initiator / Support", kd: "1.10", extra: "25.9%", stats: [86, 89, 93, 84, 76] },
            { nome: "mindfreak", role: "Controller / Clutch", kd: "1.03", extra: "27.4%", stats: [82, 88, 95, 75, 60] },
            { nome: "jinggg", role: "Duelist / Raze", kd: "1.15", extra: "22.8%", stats: [94, 91, 76, 91, 98] }
        ]
    },
    drx: {
        nome: "DRX", jogo: "VALORANT", rank: "#8", cor: "#0000ff",
        historia: "A organização sul-coreana é sinônimo de utilitários milimétricos e execuções de mapas ensaiadas à exaustão. Donos de uma consistência impecável na Ásia.",
        titulos: ["VCT East Asia Last Chance", "VCT Pacific Stage 2 Finalist", "Top 3 Champions 2022"],
        jogadores: [
            { nome: "stax", role: "IGL / Initiator", kd: "1.04", extra: "23.1%", stats: [78, 85, 89, 93, 66] },
            { nome: "Buzz", role: "Duelist / Flex", kd: "1.14", extra: "25.0%", stats: [91, 88, 84, 89, 87] },
            { nome: "MaKo", role: "Controller / Anchor", kd: "1.18", extra: "29.9%", stats: [92, 94, 96, 82, 70] },
            { nome: "Foxy9", role: "Duelist / Rifler", kd: "1.07", extra: "24.6%", stats: [88, 82, 80, 84, 85] },
            { nome: "Flashback", role: "Sentinel", kd: "1.10", extra: "27.2%", stats: [86, 84, 85, 79, 78] }
        ]
    },
    lev: {
        nome: "Leviatán", jogo: "VALORANT", rank: "#9", cor: "#00ffff",
        historia: "Orgulho do LATAM, a Leviatán chocou as Américas ao contratar o campeão mundial aspas em 2024. Com poder de fogo bruto e táticas afiadas, conquistaram o topo da região americana.",
        titulos: ["VCT Americas Stage 2 2024", "VCT LATAM Challengers", "Valorant Champions Top 8"],
        jogadores: [
            { nome: "kiNgg", role: "IGL / Controller", kd: "1.15", extra: "28.5%", stats: [91, 89, 88, 92, 80] },
            { nome: "Mazino", role: "Initiator / Flex", kd: "1.06", extra: "24.1%", stats: [84, 85, 86, 81, 83] },
            { nome: "aspas", role: "Duelist (Star)", kd: "1.26", extra: "27.9%", stats: [98, 96, 85, 96, 92] },
            { nome: "Tex", role: "Sentinel", kd: "1.03", extra: "25.3%", stats: [82, 81, 84, 76, 75] },
            { nome: "C0M", role: "Initiator (Sova)", kd: "0.99", extra: "21.4%", stats: [75, 84, 91, 79, 62] }
        ]
    },
    fpx: {
        nome: "FunPlus Phoenix", jogo: "VALORANT", rank: "#10", cor: "#ff0000",
        historia: "Com um legado clássico vindo do cenário europeu, a Fenix chinesa reestruturou seu projeto no VCT China trazendo táticas imprevisíveis e composições cheias de flexibilidade.",
        titulos: ["VCT EMEA Masters Copenhagen 2022", "VCT China Stage 2 Finalist", "China National Cup"],
        jogadores: [
            { nome: "Autumn", role: "Duelist", kd: "1.13", extra: "25.2%", stats: [90, 87, 82, 88, 89] },
            { nome: "Life", role: "Flex / Duelist", kd: "1.11", extra: "24.8%", stats: [89, 86, 80, 85, 91] },
            { nome: "AAAAY", role: "Initiator", kd: "1.05", extra: "23.9%", stats: [83, 84, 85, 81, 78] },
            { nome: "BerLIN", role: "IGL / Controller", kd: "0.96", extra: "21.1%", stats: [70, 78, 82, 91, 68] },
            { nome: "LysoS", role: "Sentinel", kd: "1.02", extra: "26.4%", stats: [81, 83, 84, 76, 72] }
        ]
    },

    t1: {
        nome: "T1", jogo: "LEAGUE OF LEGENDS", rank: "#1", cor: "#e2011a",
        historia: "A maior organização da história do LoL mundial. Comandada pelo Rei dos Demônios, Faker, alcançou o lendário tetracampeonato mundial (Worlds 2023) eternizando a line-up do 'ZOFGK'.",
        titulos: ["Worlds 2013, 2015, 2016, 2023", "Mid-Season Invitational 2016, 2017", "LCK (10 Taças Regionais)"],
        jogadores: [
            { nome: "Zeus", role: "Top Laner", kd: "3.4 KDA", extra: "685 DPM", stats: [94, 91, 85, 78, 95] },
            { nome: "Oner", role: "Jungler", kd: "4.2 KDA", extra: "74% KP", stats: [86, 78, 88, 90, 75] },
            { nome: "Faker", role: "Mid / IGL", kd: "4.5 KDA", extra: "642 DPM", stats: [92, 88, 95, 96, 85] },
            { nome: "Gumayusi", role: "AD Carry", kd: "6.2 KDA", extra: "9.8 CSM", stats: [96, 98, 92, 80, 93] },
            { nome: "Keria", role: "Support", kd: "5.1 KDA", extra: "76% KP", stats: [90, 40, 70, 94, 78] }
        ]
    },
    geng: {
        nome: "Gen.G Esports", jogo: "LEAGUE OF LEGENDS", rank: "#2", cor: "#aa8a4a",
        historia: "A Gen.G tornou-se a governante impiedosa da Coreia do Sul (LCK), aplicando um quadra-campeonato consecutivo histórico sobre a T1 usando macro focado em eficiência absoluta.",
        titulos: ["Mid-Season Invitational 2024", "LCK (4 Vezes Consecutivas)", "Worlds 2017 (Samsung Galaxy)"],
        jogadores: [
            { nome: "Kiin", role: "Top Laner", kd: "3.9 KDA", extra: "590 DPM", stats: [89, 91, 88, 82, 86] },
            { nome: "Canyon", role: "Jungler", kd: "4.8 KDA", extra: "71% KP", stats: [92, 80, 86, 91, 74] },
            { nome: "Chovy", role: "Mid Laner / Star", kd: "7.4 KDA", extra: "710 DPM", stats: [99, 99, 96, 85, 94] },
            { nome: "Peyz", role: "AD Carry", kd: "5.9 KDA", extra: "695 DPM", stats: [94, 96, 90, 76, 95] },
            { nome: "Lehends", role: "Support", kd: "4.1 KDA", extra: "73% KP", stats: [85, 30, 65, 92, 60] }
        ]
    },
    blg: {
        nome: "Bilibili Gaming", jogo: "LEAGUE OF LEGENDS", rank: "#3", cor: "#00bfff",
        historia: "O orgulho dos elencos totalmente chineses (Five Chinese Wall). A BLG conquistou a LPL esbanjando agressividade nas rotas e lutas perfeitas em torno de objetivos.",
        titulos: ["LPL Spring Split 2024", "LPL Summer Split 2024", "Finalista MSI 2023 / 2024"],
        jogadores: [
            { nome: "Bin", role: "Top Laner / Carry", kd: "3.5 KDA", extra: "610 DPM", stats: [95, 88, 84, 70, 97] },
            { nome: "Xun", role: "Jungler", kd: "4.0 KDA", extra: "75% KP", stats: [86, 75, 80, 88, 82] },
            { nome: "knight", role: "Mid Laner", kd: "5.2 KDA", extra: "670 DPM", stats: [96, 94, 91, 84, 88] },
            { nome: "Elk", role: "AD Carry", kd: "5.8 KDA", extra: "725 DPM", stats: [95, 96, 90, 78, 93] },
            { nome: "ON", role: "Support", kd: "3.8 KDA", extra: "72% KP", stats: [88, 32, 60, 90, 85] }
        ]
    },
    tes: {
        nome: "Top Esports", jogo: "LEAGUE OF LEGENDS", rank: "#4", cor: "#ff3c00",
        historia: "Um colosso da liga chinesa recheado de campeões mundiais veteranos. Conhecidos pelo poder de snowball incontrolável ao punirem pequenos deslizes adversários.",
        titulos: ["LPL Summer Champion 2020", "Demacia Cup (Multi-Campeã)", "Top 2 LPL Playoffs 2024"],
        jogadores: [
            { nome: "369", role: "Top Laner", kd: "3.6 KDA", extra: "490 DPM", stats: [87, 93, 90, 85, 75] },
            { nome: "Tian", role: "Jungler", kd: "4.1 KDA", extra: "76% KP", stats: [88, 82, 85, 92, 80] },
            { nome: "Creme", role: "Mid Laner", kd: "4.3 KDA", extra: "615 DPM", stats: [90, 84, 86, 78, 89] },
            { nome: "JackeyLove", role: "AD Carry / Star", kd: "5.1 KDA", extra: "740 DPM", stats: [96, 95, 91, 74, 98] },
            { nome: "Meiko", role: "Support", kd: "4.6 KDA", extra: "74% KP", stats: [91, 35, 68, 95, 70] }
        ]
    },
    g2_lol: {
        nome: "G2 Esports", jogo: "LEAGUE OF LEGENDS", rank: "#5", cor: "#ffffff",
        historia: "A maior dinastia da Europa ocidental (LEC). Famosos no mundo todo pelas suas escolhas exóticas (drafts insanos) e criatividade absurda que assusta até os orientais.",
        titulos: ["Mid-Season Invitational 2019", "LEC (14 Títulos Europeus)", "Finalista Worlds 2019"],
        jogadores: [
            { nome: "BrokenBlade", role: "Top Laner", kd: "3.2 KDA", extra: "520 DPM", stats: [85, 88, 86, 80, 82] },
            { nome: "Yike", role: "Jungler / Carry", kd: "4.4 KDA", extra: "70% KP", stats: [89, 74, 82, 85, 84] },
            { nome: "Caps", role: "Mid Laner / BabyFaker", kd: "4.9 KDA", extra: "660 DPM", stats: [96, 92, 93, 88, 90] },
            { nome: "Hans Sama", role: "AD Carry", kd: "5.4 KDA", extra: "675 DPM", stats: [91, 93, 88, 75, 86] },
            { nome: "Mikyx", role: "Support / Playmaker", kd: "4.0 KDA", extra: "73% KP", stats: [92, 38, 65, 93, 81] }
        ]
    },
    fnatic_lol: {
        nome: "Fnatic", jogo: "LEAGUE OF LEGENDS", rank: "#6", cor: "#ff6600",
        historia: "A primeiríssima campeã mundial de League of Legends em 2011. Mantém uma rivalidade histórica e ardente contra a G2, protagonizando os maiores clássicos europeus.",
        titulos: ["Worlds Season 1 (Campeã)", "LEC (7 Vezes Campeã)", "Finalista Worlds 2018"],
        jogadores: [
            { nome: "Oscarinin", role: "Top Laner", kd: "2.8 KDA", extra: "470 DPM", stats: [81, 83, 80, 76, 84] },
            { nome: "Razork", role: "Jungler", kd: "4.2 KDA", extra: "74% KP", stats: [90, 81, 85, 89, 87] },
            { nome: "Humanoid", role: "Mid Laner", kd: "3.9 KDA", extra: "620 DPM", stats: [88, 85, 87, 82, 80] },
            { nome: "Noah", role: "AD Carry", kd: "4.8 KDA", extra: "640 DPM", stats: [86, 90, 84, 72, 81] },
            { nome: "Jun", role: "Support", kd: "4.1 KDA", extra: "71% KP", stats: [84, 30, 62, 88, 65] }
        ]
    },
    hle: {
        nome: "Hanwha Life Esports", jogo: "LEAGUE OF LEGENDS", rank: "#7", cor: "#ff6d00",
        historia: "Conhecidos como os 'Super-Vigadores' da Coreia. Investiram pesado adquirindo campeões mundiais consagrados para quebrar a polarização entre T1 e Gen.G.",
        titulos: ["Top 3 LCK Spring 2024", "Top 3 LCK Summer 2023", "Qualificatório Regional Coreia"],
        jogadores: [
            { nome: "Doran", role: "Top Laner", kd: "3.3 KDA", extra: "505 DPM", stats: [84, 89, 87, 82, 79] },
            { nome: "Peanut", role: "Jungler / IGL", kd: "4.6 KDA", extra: "75% KP", stats: [86, 88, 92, 94, 68] },
            { nome: "Zeka", role: "Mid Laner / Melee King", kd: "4.4 KDA", extra: "590 DPM", stats: [94, 86, 90, 80, 93] },
            { nome: "Viper", role: "AD Carry / Star", kd: "6.5 KDA", extra: "710 DPM", stats: [98, 97, 94, 82, 89] },
            { nome: "Delight", role: "Support", kd: "5.0 KDA", extra: "77% KP", stats: [91, 32, 66, 95, 64] }
        ]
    },
    dk: {
        nome: "Dplus KIA", jogo: "LEAGUE OF LEGENDS", rank: "#8", cor: "#00ffff",
        historia: "A lendária DAMWON Gaming que dominou o planeta em 2020. Agora reformulada, o time joga sob as ordens do cerebral ShowMaker, mantendo o estilo agressivo coreano.",
        titulos: ["Worlds 2020 (Campeã)", "Finalista Worlds 2021", "LCK (3 Títulos Consecutivos)"],
        jogadores: [
            { nome: "Kingen", role: "Top Laner / MVP Worlds", kd: "3.1 KDA", extra: "515 DPM", stats: [86, 90, 92, 81, 85] },
            { nome: "Lucid", role: "Jungler (Rookie)", kd: "3.8 KDA", extra: "69% KP", stats: [85, 74, 78, 84, 82] },
            { nome: "ShowMaker", role: "Mid Laner / Capitão", kd: "4.6 KDA", extra: "640 DPM", stats: [93, 90, 92, 91, 86] },
            { nome: "Aiming", role: "AD Carry", kd: "5.2 KDA", extra: "690 DPM", stats: [92, 94, 87, 74, 91] },
            { nome: "Kellin", role: "Support", kd: "4.3 KDA", extra: "72% KP", stats: [84, 28, 58, 86, 55] }
        ]
    },
    fly: {
        nome: "FlyQuest", jogo: "LEAGUE OF LEGENDS", rank: "#9", cor: "#00ffaa",
        historia: "Organização norte-americana (LCS) com ideais ecológicos que surpreendeu o continente montando elencos mesclados com importações talentosas e agressivas.",
        titulos: ["LCS Spring split Finalist 2024", "LCS Summer Split Top 2", "Nerd Street Challenger"],
        jogadores: [
            { nome: "Bwipo", role: "Top Laner / Streamer", kd: "3.0 KDA", extra: "540 DPM", stats: [88, 82, 84, 85, 94] },
            { nome: "Inspired", role: "Jungler / Cerebral", kd: "4.2 KDA", extra: "76% KP", stats: [86, 88, 90, 93, 62] },
            { nome: "Jensen", role: "Mid Laner (Veterano)", kd: "3.8 KDA", extra: "560 DPM", stats: [83, 84, 85, 80, 70] },
            { nome: "Massu", role: "AD Carry", kd: "4.5 KDA", extra: "610 DPM", stats: [85, 88, 82, 75, 80] },
            { nome: "Busio", role: "Support", kd: "4.0 KDA", extra: "71% KP", stats: [82, 30, 60, 85, 72] }
        ]
    },
    pai_lol: {
        nome: "paiN Gaming", jogo: "LEAGUE OF LEGENDS", rank: "#10", cor: "#ffffff",
        historia: "A maior e mais barulhenta torcida do CBLOL. Donos de uma tradição gigantesca, a paiN monta planteis altamente competitivos com o único objetivo de cravar a soberania no Brasil.",
        titulos: ["CBLOL 2013, 2015, 2021", "Finais Internacionais Wildcard", "Superliga ABCDE"],
        jogadores: [
            { nome: "Wizer", role: "Top Laner (KR)", kd: "3.5 KDA", extra: "495 DPM", stats: [90, 87, 85, 81, 80] },
            { nome: "Cariok", role: "Jungler", kd: "3.9 KDA", extra: "73% KP", stats: [82, 79, 86, 90, 72] },
            { nome: "dyNquedo", role: "Mid Laner / Guasqueiro", kd: "4.1 KDA", extra: "580 DPM", stats: [86, 83, 88, 84, 85] },
            { nome: "TitaN", role: "AD Carry / Star", kd: "5.2 KDA", extra: "645 DPM", stats: [93, 94, 88, 76, 95] },
            { nome: "Kuri", role: "Support (KR)", kd: "4.4 KDA", extra: "75% KP", stats: [88, 25, 60, 91, 62] }
        ]
    }
};

let chartModal = null;

function mudarTime(idTime) {
    const time = bancoTimes[idTime];
    if (!time) return;

    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const btnAtivo = document.getElementById(`btn-${idTime}`);
    if (btnAtivo) btnAtivo.classList.add('active');

    document.getElementById('game-tag').innerText = time.jogo;
    document.getElementById('time-selecionado').innerText = time.nome.toUpperCase();
    document.getElementById('rank-numero').innerText = time.rank;
    document.getElementById('txt-historia').innerText = time.historia;

    const labelExtraModal = document.getElementById('modal-stat-label-extra');
    if (time.jogo === "LEAGUE OF LEGENDS") {
        labelExtraModal.innerText = "MÉTRICA";
    } else {
        labelExtraModal.innerText = "HS %";
    }

    const listaTitulos = document.getElementById('lista-titulos');
    listaTitulos.innerHTML = "";
    time.titulos.forEach(titulo => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="trophy-icon">🏆</span> <b>${titulo}</b>`;
        listaTitulos.appendChild(li);
    });

    const gridJogadores = document.getElementById('players-grid');
    gridJogadores.innerHTML = "";

    time.jogadores.forEach(j => {
        const card = document.createElement('div');
        card.className = "p-card";
        card.onclick = () => abrirModal(j.nome, j.role, j.kd, j.extra, j.stats, time.cor, time.jogo);

        const inicial = j.nome.charAt(0).toUpperCase();

        card.innerHTML = `
            <div class="p-img-box" style="border-bottom: 3px solid ${time.cor}">
                <div class="p-avatar-placeholder" style="color: ${time.cor}40">${inicial}</div>
            </div>
            <div class="p-info">
                <h3>${j.nome}</h3>
                <p style="color: ${time.cor}">${j.role}</p>
            </div>
        `;
        gridJogadores.appendChild(card);
    });
}

function abrirModal(nome, role, kd, extra, stats, corTime, jogo) {
    document.getElementById('playerModal').style.display = "flex";
    document.getElementById('modal-nome').innerText = nome.toUpperCase();
    document.getElementById('modal-funcao').innerText = role.toUpperCase();
    document.getElementById('modal-stat-kd').innerText = kd;
    document.getElementById('modal-stat-extra').innerText = extra;

    const avatarBox = document.getElementById('modal-avatar');
    avatarBox.innerText = nome.charAt(0).toUpperCase();
    avatarBox.style.color = corTime;
    avatarBox.style.border = `2px solid ${corTime}`;

    let labelsEixos = ['MIRA / MECÂNICA', 'POSICIONAMENTO', 'CLUTCH / DECISÃO', 'UTILIDADE / MAPA', 'AGRESSIVIDADE'];
    if (jogo === "LEAGUE OF LEGENDS") {
        labelsEixos = ['MECÂNICA (LANING)', 'MAP AWARENESS', 'TEAMFIGHT', 'FARM / GOLD EF.', 'AGRESSIVIDADE'];
    }

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (chartModal) chartModal.destroy();

    chartModal = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labelsEixos,
            datasets: [{
                label: `Métricas de ${nome}`,
                data: stats,
                backgroundColor: corTime + '20',
                borderColor: corTime,
                borderWidth: 3,
                pointBackgroundColor: corTime,
                pointHoverBackgroundColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#ece8e1', font: { size: 11, family: 'Oswald', weight: 'bold' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function fecharModal() {
    document.getElementById('playerModal').style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    mudarTime('faze');

    const modal = document.getElementById('playerModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) fecharModal();
    });
});

function filtrarSidebar() {
    const termo = document.getElementById('input-busca').value.toLowerCase();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        const nomeTime = btn.innerText.toLowerCase();
        if (nomeTime.includes(termo)) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    if (termo.length > 2) {
        for (const idTime in bancoTimes) {
            const time = bancoTimes[idTime];
            const achouJogador = time.jogadores.some(j => j.nome.toLowerCase().includes(termo));

            if (achouJogador) {
                const btn = document.getElementById(`btn-${idTime}`);
                if (btn) btn.style.display = "block";
            }
        }
    }
}