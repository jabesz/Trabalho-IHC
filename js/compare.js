const bancoDadosComp = {
    cs: {
        metricasTime: ['WIN RATE global', 'TÍTULOS S-TIER', 'PREMIAÇÃO (USD)', 'WIN RATE LADO TR', 'SEMANAS NO #1'],
        metricasPlayer: ['RATING 2.0', 'ADR (DANO)', 'KAST %', 'IMPACTO RAT.', 'KPR (KILLS/RD)'],
        times: [
            {
                nome: "FURIA",
                stats: [65, 5, 48, 49, 15], raw: ["65.2%", "5", "$1.9M", "49.1%", "15 sem"],
                jogadores: [
                    { nome: "Fallen", stats: [82, 75, 88, 85, 78], raw: ["1.10", "74.2", "73.1%", "1.08", "0.71"] },
                    { nome: "KSCERATO", stats: [93, 89, 94, 90, 92], raw: ["1.22", "85.0", "76.8%", "1.15", "0.78"] },
                    { nome: "yuurih", stats: [88, 84, 90, 86, 86], raw: ["1.14", "81.2", "74.0%", "1.09", "0.74"] },
                    { nome: "chelo", stats: [78, 79, 82, 88, 79], raw: ["1.04", "76.5", "70.2%", "1.11", "0.69"] },
                    { nome: "skullz", stats: [80, 74, 89, 79, 76], raw: ["1.06", "72.8", "75.1%", "0.98", "0.67"] }
                ]
            },
            {
                nome: "Vitality",
                stats: [78, 16, 85, 53, 75], raw: ["78.4%", "16", "$5.8M", "53.2%", "75 sem"],
                jogadores: [
                    { nome: "ZywOo", stats: [99, 94, 96, 98, 98], raw: ["1.34", "88.9", "77.2%", "1.32", "0.84"] },
                    { nome: "apEX", stats: [70, 72, 71, 84, 66], raw: ["1.01", "72.0", "70.5%", "1.05", "0.65"] },
                    { nome: "Spinx", stats: [90, 85, 91, 89, 89], raw: ["1.16", "82.1", "74.9%", "1.12", "0.76"] },
                    { nome: "flameZ", stats: [86, 83, 84, 91, 85], raw: ["1.11", "80.4", "71.8%", "1.18", "0.73"] },
                    { nome: "Mezii", stats: [76, 75, 87, 78, 74], raw: ["1.03", "73.9", "73.6%", "0.96", "0.66"] }
                ]
            },
            {
                nome: "FaZe Clan",
                stats: [74, 18, 82, 54, 82], raw: ["74.1%", "18", "$7.2M", "54.2%", "82 sem"],
                jogadores: [
                    { nome: "karrigan", stats: [65, 68, 70, 78, 62], raw: ["0.94", "68.2", "70.1%", "0.98", "0.61"] },
                    { nome: "ropz", stats: [94, 89, 95, 91, 93], raw: ["1.21", "84.5", "75.4%", "1.18", "0.79"] },
                    { nome: "broky", stats: [91, 80, 93, 88, 92], raw: ["1.16", "76.1", "74.9%", "1.10", "0.76"] },
                    { nome: "Rain", stats: [84, 83, 82, 90, 83], raw: ["1.09", "80.2", "71.4%", "1.15", "0.72"] },
                    { nome: "frozen", stats: [92, 87, 93, 89, 90], raw: ["1.18", "82.9", "75.0%", "1.13", "0.77"] }
                ]
            },
            {
                nome: "Natus Vincere",
                stats: [80, 24, 98, 56, 114], raw: ["80.5%", "24", "$9.8M", "56.1%", "114 sem"],
                jogadores: [
                    { nome: "Aleksib", stats: [68, 70, 72, 80, 64], raw: ["0.97", "70.4", "71.3%", "1.02", "0.63"] },
                    { nome: "jL", stats: [92, 88, 90, 94, 91], raw: ["1.19", "83.1", "73.8%", "1.22", "0.77"] },
                    { nome: "iM", stats: [84, 81, 85, 87, 82], raw: ["1.08", "77.6", "71.2%", "1.09", "0.70"] },
                    { nome: "Wonderful", stats: [89, 77, 92, 85, 90], raw: ["1.14", "74.8", "75.5%", "1.06", "0.75"] },
                    { nome: "b1t", stats: [87, 82, 89, 86, 88], raw: ["1.12", "79.0", "73.9%", "1.08", "0.74"] }
                ]
            },
            {
                nome: "G2 Esports",
                stats: [72, 12, 75, 51, 45], raw: ["72.0%", "12", "$4.9M", "51.1%", "45 sem"],
                jogadores: [
                    { nome: "m0NESY", stats: [98, 89, 94, 96, 96], raw: ["1.30", "82.4", "75.9%", "1.28", "0.81"] },
                    { nome: "NiKo", stats: [95, 93, 88, 97, 93], raw: ["1.23", "87.9", "71.4%", "1.30", "0.80"] },
                    { nome: "Hunter-", stats: [82, 80, 84, 83, 81], raw: ["1.06", "76.9", "72.1%", "1.03", "0.70"] },
                    { nome: "Snax", stats: [64, 66, 73, 74, 60], raw: ["0.92", "67.1", "70.8%", "0.91", "0.59"] },
                    { nome: "MalbsMd", stats: [89, 88, 80, 94, 89], raw: ["1.15", "84.1", "69.5%", "1.24", "0.76"] }
                ]
            },
            {
                nome: "Team Liquid",
                stats: [64, 8, 55, 47, 24], raw: ["64.8%", "8", "$3.2M", "47.7%", "24 sem"],
                jogadores: [
                    { nome: "Twistzz", stats: [89, 84, 91, 86, 87], raw: ["1.14", "80.5", "74.6%", "1.11", "0.75"] },
                    { nome: "NAF", stats: [88, 82, 93, 84, 85], raw: ["1.12", "78.4", "75.9%", "1.06", "0.73"] },
                    { nome: "jks", stats: [81, 76, 90, 79, 78], raw: ["1.05", "74.0", "75.1%", "0.98", "0.68"] },
                    { nome: "Ultimate", stats: [87, 78, 89, 88, 89], raw: ["1.13", "75.3", "73.2%", "1.12", "0.75"] },
                    { nome: "MithR", stats: [60, 62, 70, 71, 58], raw: ["0.88", "64.5", "69.0%", "0.86", "0.56"] }
                ]
            },
            {
                nome: "MOUZ",
                stats: [71, 7, 42, 50, 10], raw: ["71.3%", "7", "$2.3M", "50.4%", "10 sem"],
                jogadores: [
                    { nome: "torzsi", stats: [87, 76, 90, 85, 85], raw: ["1.13", "73.8", "74.5%", "1.07", "0.74"] },
                    { nome: "XertioN", stats: [88, 86, 83, 93, 86], raw: ["1.14", "81.9", "71.0%", "1.21", "0.75"] },
                    { nome: "siuhy", stats: [74, 73, 76, 86, 71], raw: ["1.03", "73.1", "70.9%", "1.08", "0.66"] },
                    { nome: "Brollan", stats: [84, 82, 85, 86, 83], raw: ["1.09", "79.2", "72.5%", "1.09", "0.71"] },
                    { nome: "Jimpphat", stats: [91, 81, 94, 86, 88], raw: ["1.17", "76.4", "77.9%", "1.08", "0.74"] }
                ]
            },
            {
                nome: "Spirit",
                stats: [73, 5, 40, 53, 12], raw: ["73.5%", "5", "$1.7M", "53.0%", "12 sem"],
                jogadores: [
                    { nome: "donk", stats: [99, 98, 86, 99, 99], raw: ["1.36", "94.2", "70.8%", "1.45", "0.88"] },
                    { nome: "sh1ro", stats: [94, 79, 95, 91, 93], raw: ["1.22", "75.1", "78.2%", "1.18", "0.78"] },
                    { nome: "magixx", stats: [74, 71, 91, 74, 72], raw: ["1.02", "69.5", "76.0%", "0.91", "0.64"] },
                    { nome: "chopper", stats: [62, 65, 71, 75, 59], raw: ["0.90", "66.2", "69.8%", "0.92", "0.58"] },
                    { nome: "zoner", stats: [72, 74, 78, 79, 73], raw: ["1.00", "71.4", "71.1%", "0.96", "0.65"] }
                ]
            },
            {
                nome: "Virtus.pro",
                stats: [66, 7, 50, 46, 15], raw: ["66.2%", "7", "$3.9M", "46.3%", "15 sem"],
                jogadores: [
                    { nome: "Jame", stats: [85, 71, 95, 81, 80], raw: ["1.11", "68.0", "78.1%", "1.02", "0.70"] },
                    { nome: "FL1T", stats: [86, 84, 87, 88, 84], raw: ["1.12", "80.4", "73.2%", "1.11", "0.73"] },
                    { nome: "fame", stats: [82, 77, 88, 80, 81], raw: ["1.07", "74.6", "74.1%", "1.00", "0.71"] },
                    { nome: "electroNic", stats: [84, 83, 81, 89, 83], raw: ["1.09", "80.1", "70.4%", "1.14", "0.72"] },
                    { nome: "n0rb3r7", stats: [76, 75, 84, 79, 74], raw: ["1.02", "73.2", "72.8%", "0.97", "0.66"] }
                ]
            },
            {
                nome: "Astralis",
                stats: [60, 24, 98, 45, 130], raw: ["60.1%", "24", "$9.5M", "45.1%", "130 sem"],
                jogadores: [
                    { nome: "device", stats: [90, 81, 92, 89, 89], raw: ["1.15", "77.4", "74.8%", "1.14", "0.75"] },
                    { nome: "Staehr", stats: [79, 76, 84, 80, 77], raw: ["1.04", "73.9", "72.4%", "1.01", "0.68"] },
                    { nome: "br0", stats: [72, 70, 86, 73, 71], raw: ["0.98", "69.1", "74.0%", "0.88", "0.62"] },
                    { nome: "jabbi", stats: [83, 81, 85, 84, 82], raw: ["1.08", "78.0", "72.9%", "1.04", "0.71"] },
                    { nome: "stavn", stats: [88, 85, 86, 90, 86], raw: ["1.13", "81.5", "73.1%", "1.13", "0.75"] }
                ]
            }
        ]
    },
    val: {
        metricasTime: ['WIN RATE global', 'MAJORS / VCT INT', 'PREMIAÇÃO (USD)', 'WIN RATE DEFESA', 'SÉRIE DE VITÓRIAS'],
        metricasPlayer: ['ACS (COMBATE)', 'ADR (DANO)', 'KAST %', 'FKPR (FIRST KILLS)', 'HEADSHOT %'],
        times: [
            {
                nome: "LOUD",
                stats: [80, 2, 48, 61, 85], raw: ["80.1%", "2🏆", "$1.7M", "61.2%", "19 vitórias"],
                jogadores: [
                    { nome: "Less", stats: [94, 90, 95, 84, 96], raw: ["238", "156.0", "79.9%", "0.15", "32.4%"] },
                    { nome: "Saadhak", stats: [84, 82, 89, 80, 76], raw: ["208", "138.0", "72.4%", "0.16", "22.1%"] },
                    { nome: "Cauanzin", stats: [88, 89, 85, 83, 81], raw: ["224", "153.5", "73.0%", "0.17", "24.5%"] },
                    { nome: "Tuyz", stats: [82, 79, 93, 72, 85], raw: ["200", "132.0", "78.2%", "0.09", "26.0%"] },
                    { nome: "Pancada", stats: [85, 83, 91, 74, 88], raw: ["210", "140.5", "77.1%", "0.10", "28.3%"] }
                ]
            },
            {
                nome: "Sentinels",
                stats: [75, 3, 50, 58, 70], raw: ["75.2%", "3🏆", "$1.9M", "58.4%", "12 vitórias"],
                jogadores: [
                    { nome: "TenZ", stats: [92, 88, 86, 89, 85], raw: ["242", "154.5", "74.2%", "0.21", "28.5%"] },
                    { nome: "Zekken", stats: [95, 93, 84, 96, 81], raw: ["258", "164.2", "71.9%", "0.28", "24.1%"] },
                    { nome: "Sacy", stats: [83, 82, 91, 75, 82], raw: ["205", "136.4", "77.8%", "0.11", "25.9%"] },
                    { nome: "Johnqt", stats: [84, 81, 88, 80, 84], raw: ["212", "139.0", "75.4%", "0.14", "26.8%"] },
                    { nome: "Zellsis", stats: [81, 80, 89, 78, 80], raw: ["201", "135.1", "76.0%", "0.12", "23.9%"] }
                ]
            },
            {
                nome: "Fnatic",
                stats: [82, 3, 55, 60, 90], raw: ["82.5%", "3🏆", "$2.1M", "60.5%", "21 vitórias"],
                jogadores: [
                    { nome: "Chronicle", stats: [90, 89, 93, 81, 88], raw: ["230", "151.2", "78.4%", "0.13", "29.0%"] },
                    { nome: "Derke", stats: [94, 92, 83, 95, 80], raw: ["252", "161.9", "71.5%", "0.26", "23.5%"] },
                    { nome: "Boaster", stats: [75, 74, 86, 73, 76], raw: ["185", "124.8", "74.0%", "0.10", "21.8%"] },
                    { nome: "Alfajer", stats: [93, 91, 92, 86, 92], raw: ["246", "158.3", "77.6%", "0.18", "30.5%"] },
                    { nome: "Leo", stats: [91, 88, 96, 79, 86], raw: ["235", "149.0", "81.5%", "0.11", "27.4%"] }
                ]
            },
            {
                nome: "Gen.G Esports",
                stats: [76, 1, 35, 56, 60], raw: ["76.0%", "1🏆", "$1.1M", "56.2%", "9 vitórias"],
                jogadores: [
                    { nome: "Texture", stats: [93, 91, 85, 94, 82], raw: ["249", "159.4", "73.1%", "0.25", "25.0%"] },
                    { nome: "Meteor", stats: [89, 87, 88, 85, 87], raw: ["228", "151.0", "75.4%", "0.17", "28.1%"] },
                    { nome: "Munchkin", stats: [82, 81, 89, 78, 80], raw: ["206", "137.9", "76.2%", "0.13", "24.0%"] },
                    { nome: "Lakia", stats: [78, 79, 84, 76, 77], raw: ["195", "133.2", "72.8%", "0.11", "22.5%"] },
                    { nome: "Karon", stats: [91, 88, 92, 82, 89], raw: ["234", "148.5", "79.0%", "0.14", "29.4%"] }
                ]
            },
            {
                nome: "Paper Rex",
                stats: [74, 0, 42, 51, 65], raw: ["74.8%", "0🏆", "$1.4M", "51.4%", "11 vitórias"],
                jogadores: [
                    { nome: "f0rsakeN", stats: [91, 90, 89, 88, 86], raw: ["236", "153.8", "75.2%", "0.19", "27.4%"] },
                    { nome: "something", stats: [94, 91, 84, 93, 89], raw: ["250", "160.1", "72.9%", "0.24", "28.9%"] },
                    { nome: "D4v41", stats: [87, 86, 92, 80, 84], raw: ["218", "146.9", "78.9%", "0.13", "26.3%"] },
                    { nome: "Mindfreak", stats: [78, 76, 91, 70, 83], raw: ["190", "129.5", "78.1%", "0.08", "25.9%"] },
                    { nome: "Jinggg", stats: [92, 94, 79, 92, 76], raw: ["244", "163.0", "68.5%", "0.23", "21.0%"] }
                ]
            },
            {
                nome: "Evil Geniuses",
                stats: [68, 1, 39, 55, 75], raw: ["68.5%", "1🏆", "$1.3M", "55.8%", "14 vitórias"],
                jogadores: [
                    { nome: "Jawgemo", stats: [89, 88, 82, 90, 83], raw: ["228", "150.4", "71.0%", "0.22", "24.6%"] },
                    { nome: "Derrek", stats: [84, 83, 89, 76, 85], raw: ["210", "141.2", "76.4%", "0.11", "27.1%"] },
                    { nome: "NaturE", stats: [79, 78, 85, 78, 78], raw: ["198", "134.0", "72.9%", "0.13", "23.5%"] },
                    { nome: "Supamen", stats: [81, 80, 88, 75, 84], raw: ["202", "136.5", "75.9%", "0.10", "26.0%"] },
                    { nome: "Apoth", stats: [74, 75, 83, 72, 80], raw: ["188", "129.1", "71.4%", "0.09", "24.1%"] }
                ]
            },
            {
                nome: "Team Heretics",
                stats: [71, 0, 22, 54, 55], raw: ["71.2%", "0🏆", "$650K", "54.1%", "8 vitórias"],
                jogadores: [
                    { nome: "Miniboo", stats: [92, 92, 80, 96, 76], raw: ["246", "162.0", "69.8%", "0.27", "21.3%"] },
                    { nome: "Benjyfishy", stats: [86, 85, 89, 82, 88], raw: ["220", "145.3", "76.5%", "0.15", "28.9%"] },
                    { nome: "RieNs", stats: [88, 87, 86, 85, 84], raw: ["225", "149.1", "73.8%", "0.16", "25.4%"] },
                    { nome: "Boo", stats: [78, 77, 88, 75, 79], raw: ["192", "130.4", "76.0%", "0.11", "23.1%"] },
                    { nome: "Woot", stats: [90, 89, 84, 88, 83], raw: ["232", "151.0", "72.4%", "0.20", "24.9%"] }
                ]
            },
            {
                nome: "DRX",
                stats: [73, 0, 36, 57, 50], raw: ["73.1%", "0🏆", "$1.2M", "57.3%", "7 vitórias"],
                jogadores: [
                    { nome: "stax", stats: [83, 80, 91, 78, 80], raw: ["202", "134.5", "77.5%", "0.11", "25.1%"] },
                    { nome: "Buzz", stats: [90, 88, 84, 89, 82], raw: ["231", "150.9", "72.0%", "0.22", "24.8%"] },
                    { nome: "MaKo", stats: [91, 86, 94, 81, 89], raw: ["230", "145.4", "80.1%", "0.13", "29.2%"] },
                    { nome: "Foxy9", stats: [85, 86, 80, 87, 81], raw: ["218", "146.2", "70.5%", "0.21", "24.0%"] },
                    { nome: "BeYn", stats: [82, 83, 86, 80, 83], raw: ["208", "139.1", "74.2%", "0.14", "25.6%"] }
                ]
            },
            {
                nome: "NRG",
                stats: [65, 1, 40, 53, 40], raw: ["65.4%", "1🏆", "$1.4M", "53.2%", "6 vitórias"],
                jogadores: [
                    { nome: "Ethan", stats: [84, 85, 92, 76, 81], raw: ["205", "141.0", "78.2%", "0.09", "25.6%"] },
                    { nome: "Demon1", stats: [95, 93, 88, 91, 95], raw: ["254", "160.4", "76.9%", "0.22", "31.9%"] },
                    { nome: "Crashies", stats: [82, 81, 89, 75, 83], raw: ["202", "137.2", "76.4%", "0.10", "26.1%"] },
                    { nome: "Victor", stats: [84, 85, 81, 86, 79], raw: ["212", "144.5", "70.8%", "0.19", "22.4%"] },
                    { nome: "Fiend", stats: [76, 75, 83, 74, 78], raw: ["190", "131.0", "71.9%", "0.11", "23.0%"] }
                ]
            },
            {
                nome: "KRÜ Esports",
                stats: [60, 0, 20, 50, 35], raw: ["60.5%", "0🏆", "$580K", "50.1%", "5 vitórias"],
                jogadores: [
                    { nome: "keznit", stats: [91, 91, 81, 93, 82], raw: ["241", "158.2", "70.4%", "0.24", "24.8%"] },
                    { nome: "Klaus", stats: [79, 78, 86, 75, 81], raw: ["194", "133.0", "74.8%", "0.10", "25.1%"] },
                    { nome: "Melser", stats: [82, 80, 88, 76, 84], raw: ["204", "135.8", "76.1%", "0.11", "27.0%"] },
                    { nome: "Shyy", stats: [83, 82, 89, 78, 83], raw: ["206", "138.4", "76.9%", "0.12", "26.4%"] },
                    { nome: "Heat", stats: [88, 87, 82, 89, 80], raw: ["226", "148.9", "71.2%", "0.21", "23.9%"] }
                ]
            }
        ]
    },
    lol: {
        metricasTime: ['WIN RATE na temporada', 'MUNDIAIS (WORLDS)', 'PREMIAÇÃO (USD)', 'FIRST BLOOD %', 'MÉDIA DE OURO/MIN'],
        metricasPlayer: ['KDA RATIO', 'CS POR MINUTO', 'OURO POR MINUTO', 'PARTICIPAÇÃO KILLS', 'DANO POR MIN (DPM)'],
        times: [
            {
                nome: "T1",
                stats: [82, 5, 99, 58, 96], raw: ["82.1%", "5🏆", "$11.4M", "58.5%", "1,920/m"],
                jogadores: [
                    { nome: "Zeus", stats: [85, 94, 91, 75, 95], raw: ["3.2", "9.4", "432", "58.2%", "685"] },
                    { nome: "Oner", stats: [88, 78, 82, 92, 74], raw: ["4.1", "6.2", "360", "74.1%", "380"] },
                    { nome: "Faker", stats: [90, 86, 88, 88, 92], raw: ["4.5", "8.7", "415", "68.5%", "642"] },
                    { nome: "Gumayusi", stats: [96, 98, 95, 78, 94], raw: ["6.8", "10.1", "455", "61.0%", "670"] },
                    { nome: "Keria", stats: [92, 35, 62, 95, 68], raw: ["5.2", "1.2", "240", "76.4%", "310"] }
                ]
            },
            {
                nome: "Gen.G",
                stats: [88, 0, 48, 62, 98], raw: ["88.4%", "0🏆", "$3.4M", "62.1%", "1,980/m"],
                jogadores: [
                    { nome: "Kiin", stats: [88, 92, 90, 72, 88], raw: ["3.8", "9.1", "418", "60.5%", "590"] },
                    { nome: "Canyon", stats: [91, 78, 85, 88, 76], raw: ["5.1", "6.4", "380", "72.4%", "410"] },
                    { nome: "Chovy", stats: [99, 99, 98, 80, 96], raw: ["7.2", "10.2", "465", "64.1%", "710"] },
                    { nome: "Peyz", stats: [95, 97, 96, 75, 94], raw: ["6.0", "9.9", "450", "61.8%", "685"] },
                    { nome: "Lehends", stats: [86, 25, 55, 91, 52], raw: ["4.2", "1.0", "225", "73.9%", "240"] }
                ]
            },
            {
                nome: "Bilibili Gaming",
                stats: [80, 0, 35, 59, 93], raw: ["80.5%", "0🏆", "$2.1M", "59.2%", "1,895/m"],
                jogadores: [
                    { nome: "Bin", stats: [89, 95, 92, 68, 96], raw: ["3.4", "9.5", "425", "56.4%", "695"] },
                    { nome: "Xun", stats: [84, 76, 81, 84, 75], raw: ["4.0", "6.1", "355", "70.2%", "395"] },
                    { nome: "Knight", stats: [92, 89, 91, 85, 93], raw: ["5.4", "9.1", "430", "69.0%", "655"] },
                    { nome: "Elk", stats: [95, 96, 94, 78, 97], raw: ["5.9", "9.8", "450", "61.2%", "740"] },
                    { nome: "ON", stats: [80, 28, 52, 88, 55], raw: ["3.6", "1.1", "230", "71.4%", "265"] }
                ]
            },
            {
                nome: "Weibo Gaming",
                stats: [68, 0, 22, 51, 86], raw: ["68.2%", "0🏆", "$1.2M", "51.4%", "1,810/m"],
                jogadores: [
                    { nome: "Breathe", stats: [82, 88, 86, 65, 84], raw: ["3.0", "8.7", "390", "55.1%", "540"] },
                    { nome: "Tarzan", stats: [85, 75, 80, 86, 70], raw: ["4.2", "5.9", "348", "71.5%", "350"] },
                    { nome: "Xiaohu", stats: [84, 85, 86, 89, 88], raw: ["4.1", "8.5", "405", "71.0%", "580"] },
                    { nome: "Light", stats: [89, 94, 91, 74, 90], raw: ["4.8", "9.5", "428", "59.0%", "630"] },
                    { nome: "Crisp", stats: [81, 24, 50, 85, 51], raw: ["3.5", "0.9", "220", "68.2%", "230"] }
                ]
            },
            {
                nome: "JD Gaming",
                stats: [75, 0, 38, 55, 91], raw: ["75.6%", "0🏆", "$2.8M", "55.3%", "1,870/m"],
                jogadores: [
                    { nome: "Flandre", stats: [83, 89, 85, 62, 82], raw: ["3.1", "8.6", "385", "54.0%", "525"] },
                    { nome: "Kanavi", stats: [90, 80, 84, 89, 81], raw: ["4.6", "6.6", "375", "73.1%", "430"] },
                    { nome: "Yagao", stats: [82, 83, 84, 86, 83], raw: ["3.9", "8.3", "395", "69.5%", "550"] },
                    { nome: "Ruler", stats: [96, 97, 95, 74, 95], raw: ["6.2", "10.0", "448", "59.5%", "695"] },
                    { nome: "Missing", stats: [85, 26, 56, 89, 53], raw: ["4.0", "1.0", "228", "72.0%", "245"] }
                ]
            },
            {
                nome: "Hanwha Life",
                stats: [76, 0, 20, 54, 92], raw: ["76.1%", "0🏆", "$950K", "54.8%", "1,885/m"],
                jogadores: [
                    { nome: "Doran", stats: [84, 89, 87, 66, 85], raw: ["3.2", "8.8", "398", "58.0%", "560"] },
                    { nome: "Peanut", stats: [88, 76, 83, 90, 72], raw: ["4.5", "6.1", "358", "75.2%", "365"] },
                    { nome: "Zeka", stats: [91, 88, 92, 82, 94], raw: ["5.0", "9.0", "435", "63.4%", "660"] },
                    { nome: "Viper", stats: [95, 96, 93, 76, 92], raw: ["6.0", "9.9", "442", "60.2%", "680"] },
                    { nome: "Delight", stats: [88, 27, 58, 92, 56], raw: ["4.4", "1.1", "235", "74.8%", "255"] }
                ]
            },
            {
                nome: "G2 Esports (LoL)",
                stats: [74, 1, 45, 53, 89], raw: ["74.9%", "1🏆", "$3.1M", "53.0%", "1,840/m"],
                jogadores: [
                    { nome: "BrokenBlade", stats: [85, 90, 88, 70, 86], raw: ["3.3", "8.9", "402", "59.1%", "575"] },
                    { nome: "Yike", stats: [86, 78, 82, 85, 78], raw: ["4.3", "6.3", "362", "70.5%", "415"] },
                    { nome: "Caps", stats: [91, 88, 90, 87, 94], raw: ["4.9", "8.9", "425", "73.2%", "668"] },
                    { nome: "HansSama", stats: [90, 95, 92, 75, 91], raw: ["5.0", "9.6", "431", "60.1%", "645"] },
                    { nome: "Mikyx", stats: [84, 29, 54, 90, 58], raw: ["3.9", "1.2", "232", "75.0%", "270"] }
                ]
            },
            {
                nome: "Fnatic (LoL)",
                stats: [65, 0, 38, 50, 84], raw: ["65.2%", "0🏆", "$2.9M", "50.2%", "1,790/m"],
                jogadores: [
                    { nome: "Oscarinin", stats: [80, 86, 83, 64, 81], raw: ["2.8", "8.5", "380", "54.8%", "510"] },
                    { nome: "Razork", stats: [87, 77, 81, 88, 79], raw: ["4.2", "6.2", "359", "72.9%", "420"] },
                    { nome: "Humanoid", stats: [82, 86, 85, 83, 87], raw: ["3.8", "8.6", "400", "67.4%", "595"] },
                    { nome: "Noah", stats: [88, 93, 90, 72, 89], raw: ["4.6", "9.4", "422", "58.1%", "615"] },
                    { nome: "Jun", stats: [81, 25, 51, 86, 52], raw: ["3.6", "1.0", "221", "70.2%", "235"] }
                ]
            },
            {
                nome: "Cloud9",
                stats: [69, 0, 28, 52, 87], raw: ["69.8%", "0🏆", "$2.0M", "52.1%", "1,820/m"],
                jogadores: [
                    { nome: "Fudge", stats: [82, 87, 85, 65, 83], raw: ["3.1", "8.6", "392", "56.0%", "530"] },
                    { nome: "Blaber", stats: [88, 79, 83, 89, 80], raw: ["4.4", "6.4", "368", "71.8%", "425"] },
                    { nome: "Jojopyun", stats: [86, 87, 88, 85, 90], raw: ["4.0", "8.7", "412", "68.9%", "610"] },
                    { nome: "Berserker", stats: [91, 94, 91, 70, 90], raw: ["5.2", "9.6", "430", "57.8%", "640"] },
                    { nome: "Vulkan", stats: [83, 26, 53, 87, 54], raw: ["3.8", "1.1", "226", "71.0%", "248"] }
                ]
            },
            {
                nome: "FlyQuest",
                stats: [63, 0, 15, 49, 82], raw: ["63.5%", "0🏆", "$680K", "49.6%", "1,760/m"],
                jogadores: [
                    { nome: "Bwipo", stats: [84, 89, 86, 72, 88], raw: ["2.9", "8.8", "395", "62.0%", "585"] },
                    { nome: "Inspired", stats: [86, 75, 82, 91, 72], raw: ["4.6", "6.2", "365", "75.1%", "390"] },
                    { nome: "Quad", stats: [84, 85, 86, 80, 86], raw: ["4.1", "8.4", "402", "65.4%", "570"] },
                    { nome: "Massu", stats: [85, 91, 88, 74, 86], raw: ["4.3", "9.2", "415", "59.2%", "595"] },
                    { nome: "Busio", stats: [80, 24, 49, 84, 50], raw: ["3.4", "0.9", "218", "67.9%", "225"] }
                ]
            }
        ]
    }
};

let jogoAtual = 'cs';
let modoAtual = 'player';
let chartComparacao = null;

function popularTimes() {
    const jogoData = bancoDadosComp[jogoAtual];
    const t1 = document.getElementById('team1-select');
    const t2 = document.getElementById('team2-select');
    
    if (!t1 || !t2) return;

    t1.innerHTML = '';
    t2.innerHTML = '';

    jogoData.times.forEach((time, index) => {
        let opt1 = document.createElement('option');
        opt1.value = index;
        opt1.textContent = time.nome;
        t1.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = index;
        opt2.textContent = time.nome;
        if (index === 1) opt2.selected = true; 
        t2.appendChild(opt2);
    });

    aoSelecionarTime(1);
    aoSelecionarTime(2);
}

function aoSelecionarTime(lado) {
    const timeSelect = document.getElementById(`team${lado}-select`);
    const entSelect = document.getElementById(`ent${lado}-select`);
    
    if (!timeSelect || !entSelect) return;

    if (modoAtual === 'team') {
        entSelect.style.display = 'none';
        atualizarComparacao();
        return;
    }

    entSelect.style.display = 'inline-block';
    entSelect.innerHTML = '';

    const timeIndex = timeSelect.value;
    const timeObjeto = bancoDadosComp[jogoAtual].times[timeIndex];

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

function renderizarTabelaTexto(obj1, obj2, labels) {
    const container = document.getElementById('statsDetailedContainer');
    if (!container) return;

    let htmlContent = '';

    labels.forEach((metrica, i) => {
        const val1 = obj1.stats[i];
        const val2 = obj2.stats[i];
        
        let classeP1 = '';
        let classeP2 = '';

        if (val1 > val2) {
            classeP1 = 'stat-win'; classeP2 = 'stat-lose';
        } else if (val2 > val1) {
            classeP1 = 'stat-lose'; classeP2 = 'stat-win';
        }

        htmlContent += `
            <div class="stat-row-comparison">
                <div class="player-stat-val ${classeP1}">${obj1.raw[i]}</div>
                <div class="stat-label-center">${metrica}</div>
                <div class="player-stat-val ${classeP2}">${obj2.raw[i]}</div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

function atualizarComparacao() {
    const t1 = document.getElementById('team1-select');
    const t2 = document.getElementById('team2-select');
    const e1 = document.getElementById('ent1-select');
    const e2 = document.getElementById('ent2-select');

    if (!t1 || !t2 || t1.value === "" || t2.value === "") return;

    let obj1, obj2, labels, nomeLabel1, nomeLabel2;
    const jogoData = bancoDadosComp[jogoAtual];

    if (modoAtual === 'team') {
        obj1 = jogoData.times[t1.value];
        obj2 = jogoData.times[t2.value];
        labels = jogoData.metricasTime;
        nomeLabel1 = obj1.nome;
        nomeLabel2 = obj2.nome;
    } else {
        const time1 = jogoData.times[t1.value];
        const time2 = jogoData.times[t2.value];
        
        if (!time1 || !time2 || e1.value === "" || e2.value === "") return;

        obj1 = time1.jogadores[e1.value];
        obj2 = time2.jogadores[e2.value];
        labels = jogoData.metricasPlayer;
        nomeLabel1 = obj1.nome;
        nomeLabel2 = obj2.nome;
    }

    if (!obj1 || !obj2) return;

    renderizarTabelaTexto(obj1, obj2, labels);

    try {
        if (typeof Chart === 'undefined') return;

        const ctx = document.getElementById('compareChart').getContext('2d');
        if (chartComparacao) chartComparacao.destroy();

        chartComparacao = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: nomeLabel1,
                        data: obj1.stats,
                        backgroundColor: 'rgba(255, 70, 85, 0.2)',
                        borderColor: '#ff4655',
                        borderWidth: 3,
                        pointBackgroundColor: '#ff4655'
                    },
                    {
                        label: nomeLabel2,
                        data: obj2.stats,
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
                        pointLabels: { color: '#ece8e1', font: { size: 11, family: 'Oswald', weight: 'bold' } },
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
    } catch (e) {
        console.warn("Gráfico restrito localmente. Dados carregados na tabela.");
    }
}

function mudarJogo(jogoId) {
    jogoAtual = jogoId;
    document.querySelectorAll('.game-tab').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`tab-${jogoId}`);
    if (btn) btn.classList.add('active');

    popularTimes();
}

function mudarModo(modoId) {
    modoAtual = modoId;
    document.querySelectorAll('.mode-tab').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById(`mode-${modoId}`);
    if (btn) btn.classList.add('active');

    document.getElementById('title-side-1').textContent = modoId === 'team' ? 'TIME 1' : 'JOGADOR 1';
    document.getElementById('title-side-2').textContent = modoId === 'team' ? 'TIME 2' : 'JOGADOR 2';
    document.getElementById('table-details-title').textContent = modoId === 'team' ? 'ESTATÍSTICAS DA ORGANIZAÇÃO' : 'ESTATÍSTICAS DETALHADAS DO ATLETA';

    popularTimes();
}

document.addEventListener("DOMContentLoaded", function () {
    mudarJogo('cs');
});