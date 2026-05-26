const bancoDados = {
    // ==========================================
    // COUNTER-STRIKE (HLTV TOP 10)
    // ==========================================
    faZe: [
        { nome: "karrigan", role: "IGL", kd: 0.93, hs: 38, stats: [65, 95, 88, 92, 60], cor: "#e41c24" },
        { nome: "broky", role: "AWPer", kd: 1.15, hs: 32, stats: [94, 90, 95, 80, 70], cor: "#e41c24" },
        { nome: "ropz", role: "Lurker", kd: 1.14, hs: 51, stats: [98, 96, 92, 85, 65], cor: "#e41c24" },
        { nome: "rain", role: "Entry Fragger", kd: 1.04, hs: 56, stats: [90, 82, 80, 78, 92], cor: "#e41c24" },
        { nome: "frozen", role: "Rifler", kd: 1.16, hs: 48, stats: [93, 91, 89, 86, 74], cor: "#e41c24" }
    ],
    navi: [
        { nome: "Aleksib", role: "IGL", kd: 0.94, hs: 36, stats: [62, 96, 85, 94, 55], cor: "#fff200" },
        { nome: "w0nderful", role: "AWPer", kd: 1.13, hs: 29, stats: [91, 88, 90, 82, 68], cor: "#fff200" },
        { nome: "jL", role: "Rifler / Star", kd: 1.15, hs: 51, stats: [94, 88, 95, 85, 84], cor: "#fff200" },
        { nome: "iM", role: "Rifler", kd: 1.07, hs: 53, stats: [89, 84, 82, 80, 85], cor: "#fff200" },
        { nome: "b1t", role: "Anchor", kd: 1.11, hs: 64, stats: [98, 86, 84, 87, 72], cor: "#fff200" }
    ],
    vitality: [
        { nome: "ZywOo", role: "AWPer", kd: 1.30, hs: 40, stats: [99, 95, 98, 88, 82], cor: "#ffcc00" },
        { nome: "apEX", role: "IGL", kd: 0.95, hs: 44, stats: [64, 94, 86, 96, 76], cor: "#ffcc00" },
        { nome: "Spinx", role: "Rifler", kd: 1.14, hs: 46, stats: [92, 88, 85, 82, 75], cor: "#ffcc00" },
        { nome: "flameZ", role: "Entry Fragger", kd: 1.08, hs: 55, stats: [91, 80, 84, 78, 90], cor: "#ffcc00" },
        { nome: "Mezii", role: "Support", kd: 1.01, hs: 49, stats: [84, 86, 88, 90, 64], cor: "#ffcc00" }
    ],
    mouz: [
        { nome: "siuhy", role: "IGL", kd: 1.01, hs: 47, stats: [74, 95, 86, 91, 72], cor: "#ff003c" },
        { nome: "torzsi", role: "AWPer", kd: 1.12, hs: 30, stats: [90, 85, 89, 81, 62], cor: "#ff003c" },
        { nome: "xertioN", role: "Entry Fragger", kd: 1.09, hs: 52, stats: [92, 81, 82, 76, 93], cor: "#ff003c" },
        { nome: "Jimpphat", role: "Lurker / Anchor", kd: 1.15, hs: 45, stats: [94, 93, 91, 88, 66], cor: "#ff003c" },
        { nome: "Brollan", role: "Rifler", kd: 1.08, hs: 50, stats: [88, 84, 83, 80, 85], cor: "#ff003c" }
    ],
    spirit: [
        { nome: "chopper", role: "IGL", kd: 0.91, hs: 39, stats: [60, 92, 80, 88, 62], cor: "#aaaaaa" },
        { nome: "sh1ro", role: "AWPer", kd: 1.22, hs: 27, stats: [95, 96, 94, 85, 55], cor: "#aaaaaa" },
        { nome: "donk", role: "Star Rifler", kd: 1.32, hs: 59, stats: [99, 88, 90, 82, 99], cor: "#aaaaaa" },
        { nome: "magixx", role: "Support", kd: 1.02, hs: 44, stats: [82, 88, 86, 92, 58], cor: "#aaaaaa" },
        { nome: "zoner", role: "Rifler", kd: 1.04, hs: 48, stats: [85, 82, 81, 80, 76], cor: "#aaaaaa" }
    ],
    g2: [
        { nome: "Snax", role: "IGL", kd: 0.96, hs: 42, stats: [68, 93, 85, 89, 65], cor: "#ffffff" },
        { nome: "m0NESY", role: "AWPer", kd: 1.28, hs: 35, stats: [99, 94, 96, 84, 83], cor: "#ffffff" },
        { nome: "NiKo", role: "Rifler", kd: 1.16, hs: 53, stats: [97, 86, 91, 80, 94], cor: "#ffffff" },
        { nome: "hunter", role: "Rifler", kd: 1.06, hs: 49, stats: [87, 85, 88, 82, 76], cor: "#ffffff" },
        { nome: "malbsMd", role: "Entry Fragger", kd: 1.13, hs: 56, stats: [93, 81, 83, 75, 92], cor: "#ffffff" }
    ],
    eternalFire: [
        { nome: "MAJ3R", role: "IGL", kd: 0.95, hs: 37, stats: [63, 94, 87, 91, 60], cor: "#111111" },
        { nome: "XANTARES", role: "Star Rifler", kd: 1.21, hs: 55, stats: [98, 86, 90, 81, 95], cor: "#111111" },
        { nome: "wodicX", role: "AWPer", kd: 1.10, hs: 31, stats: [89, 84, 85, 78, 64], cor: "#111111" },
        { nome: "Calyx", role: "Support", kd: 1.02, hs: 48, stats: [83, 86, 84, 89, 62], cor: "#111111" },
        { nome: "imoRR", role: "Entry Fragger", kd: 1.05, hs: 52, stats: [88, 78, 80, 74, 88], cor: "#111111" }
    ],
    virtusPro: [
        { nome: "Jame", role: "IGL / AWPer", kd: 1.14, hs: 26, stats: [86, 99, 96, 92, 42], cor: "#ff6600" },
        { nome: "FL1T", role: "Rifler", kd: 1.10, hs: 46, stats: [90, 86, 88, 83, 79], cor: "#ff6600" },
        { nome: "fame", role: "Rifler", kd: 1.07, hs: 51, stats: [89, 84, 85, 81, 75], cor: "#ff6600" },
        { nome: "n0rb3r7", role: "Support", kd: 1.01, hs: 43, stats: [81, 88, 84, 91, 65], cor: "#ff6600" },
        { nome: "electroNic", role: "Entry / Lurker", kd: 1.11, hs: 49, stats: [92, 85, 87, 80, 88], cor: "#ff6600" }
    ],
    furia: [
        { nome: "Fallen", role: "IGL / AWPer", kd: 1.03, hs: 34, stats: [82, 93, 94, 91, 52], cor: "#222222" },
        { nome: "KSCERATO", role: "Star Rifler", kd: 1.19, hs: 52, stats: [96, 91, 93, 86, 68], cor: "#222222" },
        { nome: "Yuurih", role: "Rifler", kd: 1.10, hs: 50, stats: [90, 84, 86, 81, 82], cor: "#222222" },
        { nome: "chelo", role: "Entry Fragger", kd: 1.02, hs: 54, stats: [86, 77, 79, 73, 91], cor: "#222222" },
        { nome: "skullz", role: "Support / Anchor", kd: 1.04, hs: 46, stats: [85, 88, 85, 89, 65], cor: "#222222" }
    ],
    pain: [
        { nome: "biguzera", role: "IGL / Rifler", kd: 1.13, hs: 47, stats: [91, 94, 95, 88, 84], cor: "#ff5000" },
        { nome: "nqz", role: "AWPer", kd: 1.11, hs: 29, stats: [89, 86, 88, 82, 60], cor: "#ff5000" },
        { nome: "kauez", role: "Rifler", kd: 1.06, hs: 51, stats: [87, 81, 83, 79, 86], cor: "#ff5000" },
        { nome: "snow", role: "Rifler", kd: 1.05, hs: 53, stats: [88, 80, 81, 78, 83], cor: "#ff5000" },
        { nome: "lux", role: "Entry Fragger", kd: 1.02, hs: 55, stats: [85, 76, 78, 72, 89], cor: "#ff5000" }
    ],

    // ==========================================
    // VALORANT (VCT GLOBAL TOP 10)
    // ==========================================
    sentinels: [
        { nome: "Johnqt", role: "IGL / Sentinela", kd: 1.04, hs: 31, stats: [75, 95, 90, 93, 62], cor: "#ff4655" },
        { nome: "zekken", role: "Duelista", kd: 1.19, hs: 34, stats: [95, 83, 86, 78, 97], cor: "#ff4655" },
        { nome: "TenZ", role: "Controlador / Flex", kd: 1.14, hs: 33, stats: [94, 91, 93, 89, 82], cor: "#ff4655" },
        { nome: "Sacy", role: "Iniciador", kd: 1.06, hs: 29, stats: [86, 93, 89, 94, 70], cor: "#ff4655" },
        { nome: "Zellsis", role: "Flex / Suporte", kd: 1.02, hs: 28, stats: [82, 89, 88, 91, 78], cor: "#ff4655" }
    ],
    fnatic: [
        { nome: "Boaster", role: "IGL / Controlador", kd: 0.94, hs: 26, stats: [64, 96, 91, 95, 52], cor: "#ff5f00" },
        { nome: "Derke", role: "Duelista", kd: 1.18, hs: 32, stats: [94, 82, 85, 75, 96], cor: "#ff5f00" },
        { nome: "Chronicle", role: "Flex", kd: 1.12, hs: 31, stats: [91, 90, 93, 90, 78], cor: "#ff5f00" },
        { nome: "Alfajer", role: "Sentinela", kd: 1.20, hs: 36, stats: [96, 94, 92, 88, 70], cor: "#ff5f00" },
        { nome: "Leo", role: "Iniciador", kd: 1.16, hs: 30, stats: [92, 95, 94, 93, 65], cor: "#ff5f00" }
    ],
    genG: [
        { nome: "Munchkin", role: "IGL / Iniciador", kd: 1.05, hs: 29, stats: [76, 94, 91, 92, 68], cor: "#aa8e4a" },
        { nome: "t3xture", role: "Duelista", kd: 1.22, hs: 35, stats: [96, 81, 88, 74, 95], cor: "#aa8e4a" },
        { nome: "Meteor", role: "Sentinela", kd: 1.13, hs: 33, stats: [90, 89, 87, 86, 80], cor: "#aa8e4a" },
        { nome: "Lakia", role: "Iniciador", kd: 0.99, hs: 27, stats: [80, 86, 85, 89, 72], cor: "#aa8e4a" },
        { nome: "Karon", role: "Controlador", kd: 1.16, hs: 32, stats: [93, 92, 92, 91, 74], cor: "#aa8e4a" }
    ],
    edgVal: [
        { nome: "CHICHOO", role: "Controlador / IGL", kd: 1.08, hs: 32, stats: [83, 93, 91, 90, 66], cor: "#ee1c25" },
        { nome: "ZmjjKK", role: "Duelista", kd: 1.25, hs: 37, stats: [98, 80, 90, 72, 99], cor: "#ee1c25" },
        { nome: "nobody", role: "Iniciador", kd: 1.02, hs: 28, stats: [81, 87, 85, 89, 74], cor: "#ee1c25" },
        { nome: "Smoggy", role: "Flex", kd: 1.11, hs: 31, stats: [89, 88, 87, 86, 82], cor: "#ee1c25" },
        { nome: "S1Mon", role: "Flex / Suporte", kd: 1.01, hs: 29, stats: [82, 85, 84, 88, 76], cor: "#ee1c25" }
    ],
    teamHeretics: [
        { nome: "Boo", role: "IGL / Controlador", kd: 1.02, hs: 28, stats: [72, 95, 89, 92, 64], cor: "#0f2326" },
        { nome: "Miniboo", role: "Duelista", kd: 1.15, hs: 31, stats: [93, 79, 82, 71, 95], cor: "#0f2326" },
        { nome: "RieNs", role: "Iniciador", kd: 1.14, hs: 35, stats: [92, 87, 91, 90, 81], cor: "#0f2326" },
        { nome: "Benjyfishy", role: "Sentinela", kd: 1.09, hs: 32, stats: [88, 91, 86, 85, 78], cor: "#0f2326" },
        { nome: "Wo0t", role: "Flex / Iniciador", kd: 1.18, hs: 34, stats: [95, 86, 92, 84, 90], cor: "#0f2326" }
    ],
    g2Val: [
        { nome: "valyn", role: "IGL / Controlador", kd: 1.04, hs: 29, stats: [75, 96, 90, 94, 60], cor: "#ffffff" },
        { nome: "JonahP", role: "Flex", kd: 1.08, hs: 30, stats: [86, 91, 89, 91, 74], cor: "#ffffff" },
        { nome: "trent", role: "Iniciador", kd: 1.11, hs: 32, stats: [90, 92, 88, 90, 72], cor: "#ffffff" },
        { nome: "leaf", role: "Duelista / Sentinela", kd: 1.14, hs: 33, stats: [92, 84, 86, 80, 89], cor: "#ffffff" },
        { nome: "icy", role: "Duelista", kd: 1.03, hs: 28, stats: [85, 78, 80, 73, 88], cor: "#ffffff" }
    ],
    paperRex: [
        { nome: "d4v41", role: "Flex / Iniciador", kd: 1.09, hs: 30, stats: [85, 91, 90, 92, 79], cor: "#ff007f" },
        { nome: "f0rsakeN", role: "Hyper Flex", kd: 1.15, hs: 33, stats: [94, 89, 92, 86, 92], cor: "#ff007f" },
        { nome: "mindfreak", role: "Controlador", kd: 1.01, hs: 27, stats: [80, 93, 89, 94, 60], cor: "#ff007f" },
        { nome: "something", role: "Duelista", kd: 1.21, hs: 34, stats: [96, 80, 86, 72, 97], cor: "#ff007f" },
        { nome: "Jinggg", role: "Duelista (Raze)", kd: 1.12, hs: 29, stats: [91, 76, 81, 70, 96], cor: "#ff007f" }
    ],
    leviatan: [
        { nome: "kiNgg", role: "IGL / Controlador", kd: 1.12, hs: 34, stats: [88, 94, 91, 92, 75], cor: "#00bfff" },
        { nome: "aspas", role: "Duelista", kd: 1.31, hs: 38, stats: [99, 88, 95, 80, 99], cor: "#00bfff" },
        { nome: "Mazino", role: "Iniciador", kd: 1.04, hs: 28, stats: [84, 86, 85, 88, 79], cor: "#00bfff" },
        { nome: "tex", role: "Sentinela", kd: 1.08, hs: 31, stats: [87, 89, 86, 85, 76], cor: "#00bfff" },
        { nome: "C0M", role: "Iniciador", kd: 0.98, hs: 25, stats: [78, 90, 88, 93, 62], cor: "#00bfff" }
    ],
    kru: [
        { nome: "Melser", role: "IGL / Controlador", kd: 1.01, hs: 29, stats: [74, 93, 88, 91, 62], cor: "#cc0066" },
        { nome: "keznit", role: "Duelista", kd: 1.17, hs: 33, stats: [93, 81, 87, 75, 94], cor: "#cc0066" },
        { nome: "Klaus", role: "Sentinela", kd: 0.97, hs: 27, stats: [79, 87, 85, 89, 68], cor: "#cc0066" },
        { nome: "Shyy", role: "Iniciador", kd: 1.05, hs: 31, stats: [84, 88, 86, 89, 74], cor: "#cc0066" },
        { nome: "Heat", role: "Flex / Duelista", kd: 1.10, hs: 32, stats: [89, 84, 85, 81, 87], cor: "#cc0066" }
    ],
    loud: [
        { nome: "Saadhak", role: "IGL / Flex", kd: 1.01, hs: 29, stats: [72, 96, 94, 97, 62], cor: "#7ed321" },
        { nome: "Less", role: "Sentinela / Controlador", kd: 1.18, hs: 36, stats: [95, 97, 95, 91, 74], cor: "#7ed321" },
        { nome: "Cauanzin", role: "Iniciador", kd: 1.08, hs: 31, stats: [88, 86, 85, 89, 81], cor: "#7ed321" },
        { nome: "Tuyz", role: "Controlador", kd: 1.05, hs: 28, stats: [84, 92, 89, 93, 66], cor: "#7ed321" },
        { nome: "pANcada", role: "Suporte / Controlador", kd: 1.06, hs: 32, stats: [86, 91, 90, 92, 68], cor: "#7ed321" }
    ],

    // ==========================================
    // LEAGUE OF LEGENDS (GLOBAL TIER & CBLOL)
    // ==========================================
    t1: [
        { nome: "Zeus", role: "Toplaner", kd: 3.8, hs: 0, stats: [94, 85, 88, 90, 95], cor: "#e41c24" },
        { nome: "Oner", role: "Jungler", kd: 3.9, hs: 0, stats: [90, 88, 92, 85, 88], cor: "#e41c24" },
        { nome: "Faker", role: "Midlaner", kd: 4.4, hs: 0, stats: [95, 98, 96, 92, 90], cor: "#e41c24" },
        { nome: "Gumayusi", role: "Atirador", kd: 4.9, hs: 0, stats: [96, 90, 94, 95, 82], cor: "#e41c24" },
        { nome: "Keria", role: "Suporte", kd: 4.1, hs: 0, stats: [91, 96, 89, 93, 86], cor: "#e41c24" }
    ],
    genG_lol: [
        { nome: "Kiin", role: "Toplaner", kd: 4.2, hs: 0, stats: [92, 91, 90, 89, 86], cor: "#aa8e4a" },
        { nome: "Canyon", role: "Jungler", kd: 4.9, hs: 0, stats: [95, 93, 91, 90, 92], cor: "#aa8e4a" },
        { nome: "Chovy", role: "Midlaner", kd: 6.5, hs: 0, stats: [99, 97, 95, 96, 88], cor: "#aa8e4a" },
        { nome: "Peyz", role: "Atirador", kd: 5.8, hs: 0, stats: [97, 88, 91, 97, 85], cor: "#aa8e4a" },
        { nome: "Lehends", role: "Suporte", kd: 4.4, hs: 0, stats: [88, 95, 90, 91, 80], cor: "#aa8e4a" }
    ],
    blg: [
        { nome: "Bin", role: "Toplaner", kd: 3.9, hs: 0, stats: [96, 82, 85, 93, 97], cor: "#00a1e4" },
        { nome: "Xun", role: "Jungler", kd: 4.1, hs: 0, stats: [89, 86, 88, 89, 88], cor: "#00a1e4" },
        { nome: "Knight", role: "Midlaner", kd: 5.3, hs: 0, stats: [96, 93, 94, 94, 86], cor: "#00a1e4" },
        { nome: "Elk", role: "Atirador", kd: 5.5, hs: 0, stats: [98, 89, 93, 98, 84], cor: "#00a1e4" },
        { nome: "ON", role: "Suporte", kd: 3.8, hs: 0, stats: [85, 92, 87, 88, 85], cor: "#00a1e4" }
    ],
    g2_lol: [
        { nome: "BrokenBlade", role: "Toplaner", kd: 3.5, hs: 0, stats: [88, 85, 86, 88, 89], cor: "#ffffff" },
        { nome: "Yike", role: "Jungler", kd: 4.0, hs: 0, stats: [89, 87, 89, 86, 85], cor: "#ffffff" },
        { nome: "Caps", role: "Midlaner", kd: 4.3, hs: 0, stats: [95, 91, 95, 94, 87], cor: "#ffffff" },
        { nome: "HansSama", role: "Atirador", kd: 4.5, hs: 0, stats: [93, 86, 88, 93, 81], cor: "#ffffff" },
        { nome: "Mikyx", role: "Suporte", kd: 3.7, hs: 0, stats: [86, 94, 89, 89, 82], cor: "#ffffff" }
    ],
    hanwha: [
        { nome: "Doran", role: "Toplaner", kd: 3.6, hs: 0, stats: [89, 87, 85, 87, 85], cor: "#ff6600" },
        { nome: "Peanut", role: "Jungler", kd: 4.6, hs: 0, stats: [91, 95, 92, 87, 80], cor: "#ff6600" },
        { nome: "Zeka", role: "Midlaner", kd: 4.8, hs: 0, stats: [94, 87, 93, 91, 93], cor: "#ff6600" },
        { nome: "Viper", role: "Atirador", kd: 5.6, hs: 0, stats: [98, 91, 94, 96, 82], cor: "#ff6600" },
        { nome: "Delight", role: "Suporte", kd: 4.8, hs: 0, stats: [88, 97, 91, 90, 78], cor: "#ff6600" }
    ],
    tes: [
        { nome: "369", role: "Toplaner", kd: 3.7, hs: 0, stats: [91, 88, 87, 86, 83], cor: "#ff3c00" },
        { nome: "Tian", role: "Jungler", kd: 4.2, hs: 0, stats: [90, 89, 91, 88, 89], cor: "#ff3c00" },
        { nome: "Creme", role: "Midlaner", kd: 4.5, hs: 0, stats: [92, 86, 89, 91, 87], cor: "#ff3c00" },
        { nome: "JackeyLove", role: "Atirador", kd: 4.8, hs: 0, stats: [96, 85, 90, 97, 91], cor: "#ff3c00" },
        { nome: "Meiko", role: "Suporte", kd: 4.0, hs: 0, stats: [87, 96, 92, 90, 80], cor: "#ff3c00" }
    ],
    wbg: [
        { nome: "Breathe", role: "Toplaner", kd: 3.4, hs: 0, stats: [86, 85, 84, 85, 82], cor: "#ee0000" },
        { nome: "Tarzan", role: "Jungler", kd: 4.3, hs: 0, stats: [92, 91, 90, 86, 84], cor: "#ee0000" },
        { nome: "Xiaohu", role: "Midlaner", kd: 4.1, hs: 0, stats: [90, 94, 91, 89, 78], cor: "#ee0000" },
        { nome: "Light", role: "Atirador", kd: 4.6, hs: 0, stats: [93, 88, 89, 94, 80], cor: "#ee0000" },
        { nome: "Crisp", role: "Suporte", kd: 3.6, hs: 0, stats: [84, 92, 86, 87, 81], cor: "#ee0000" }
    ],
    flyquest: [
        { nome: "Bwipo", role: "Toplaner", kd: 3.3, hs: 0, stats: [87, 82, 85, 89, 92], cor: "#00ffcc" },
        { nome: "Inspired", role: "Jungler", kd: 4.2, hs: 0, stats: [91, 90, 89, 87, 83], cor: "#00ffcc" },
        { nome: "Quad", role: "Midlaner", kd: 4.0, hs: 0, stats: [90, 86, 88, 90, 82], cor: "#00ffcc" },
        { nome: "Massu", role: "Atirador", kd: 4.3, hs: 0, stats: [91, 84, 86, 92, 80], cor: "#00ffcc" },
        { nome: "Busio", role: "Suporte", kd: 3.6, hs: 0, stats: [83, 90, 85, 86, 79], cor: "#00ffcc" }
    ],
    pain_lol: [
        { nome: "Wizer", role: "Toplaner", kd: 3.6, hs: 0, stats: [88, 84, 85, 86, 83], cor: "#ff5000" },
        { nome: "Cariok", role: "Jungler", kd: 3.9, hs: 0, stats: [86, 87, 88, 84, 81], cor: "#ff5000" },
        { nome: "dyNquedo", role: "Midlaner", kd: 3.9, hs: 0, stats: [89, 86, 91, 89, 82], cor: "#ff5000" },
        { nome: "Titan", role: "Atirador", kd: 4.3, hs: 0, stats: [93, 83, 87, 93, 89], cor: "#ff5000" },
        { nome: "Kuri", role: "Suporte", kd: 4.1, hs: 0, stats: [85, 92, 88, 89, 78], cor: "#ff5000" }
    ],
    loud_lol: [
        { nome: "Robo", role: "Toplaner", kd: 3.5, hs: 0, stats: [87, 81, 86, 85, 93], cor: "#7ed321" },
        { nome: "Yopsa", role: "Jungler", kd: 3.7, hs: 0, stats: [85, 84, 86, 83, 85], cor: "#7ed321" },
        { nome: "Tinowns", role: "Midlaner", kd: 4.1, hs: 0, stats: [91, 89, 90, 91, 79], cor: "#7ed321" },
        { nome: "Route", role: "Atirador", kd: 4.6, hs: 0, stats: [94, 86, 89, 94, 82], cor: "#7ed321" },
        { nome: "Slayer", role: "Suporte", kd: 3.5, hs: 0, stats: [82, 90, 84, 86, 76], cor: "#7ed321" }
    ]
};

let radarChart = null;

function carregarTime(timeId) {
    const grid = document.getElementById('players-grid');
    const titulo = document.getElementById('time-selecionado');
    const jogadores = bancoDados[timeId];

    if (!grid || !titulo) return;

    document.querySelectorAll('.sidebar .btn-filter').forEach(btn => btn.classList.remove('active'));

    const btnAtivo = document.getElementById(`btn-${timeId}`);
    if (btnAtivo) btnAtivo.classList.add('active');

    if (!jogadores) return;

    titulo.innerHTML = `TIME: <span>${timeId.toUpperCase()}</span>`;
    grid.innerHTML = '';

    jogadores.forEach(jog => {
        const caminhoImg = `../img/${jog.nome.toLowerCase()}.png`;

        grid.innerHTML += `
            <article class="p-card" onclick="abrirModal('${jog.nome}', '${jog.role}', ${jog.kd}, ${jog.hs}, [${jog.stats}], '${jog.cor}')">
                <div class="p-img-container">
                    <img class="p-img" src="${caminhoImg}" alt="${jog.nome}" onerror="this.src='https://via.placeholder.com/250x300/1f2326/ffffff?text=${jog.nome}'">
                </div>
                <div class="p-info">
                    <h3>${jog.nome.toUpperCase()}</h3>
                    <p>${jog.role}</p>
                </div>
            </article>
        `;
    });
}

function abrirModal(nome, role, kd, hs, stats, cor) {
    const modal = document.getElementById('playerModal');
    if (!modal) return;

    modal.style.display = "flex";
    document.getElementById('modalPlayerName').innerText = nome;
    document.getElementById('modalPlayerRole').innerText = role;
    document.getElementById('modalKD').innerText = kd.toFixed(2);

    document.getElementById('modalHS').innerText = hs === 0 ? 'KDA do Split' : hs + '% HS';
    document.getElementById('modalPlayerImg').src = `../img/${nome.toLowerCase()}.png`;

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['MIRA / CS', 'POSIÇÃO / VISÃO', 'CLUTCH / KDA', 'UTILIDADE / DANO', 'AGRESSÃO / OURO'],
            datasets: [{
                label: nome,
                data: stats,
                backgroundColor: cor + '33',
                borderColor: cor,
                borderWidth: 2,
                pointBackgroundColor: cor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: '#333' },
                    grid: { color: '#333' },
                    pointLabels: { color: '#fff', font: { size: 10, family: 'Oswald' } },
                    ticks: { display: false },
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function fecharModal() {
    const modal = document.getElementById('playerModal');
    if (modal) modal.style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById('playerModal');
    if (event.target === modal) {
        fecharModal();
    }
};