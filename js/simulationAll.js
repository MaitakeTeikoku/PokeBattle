var dataChart;
var dataTitle;
var dataChartStatsBase;
var dataChartExp;
var dataAll = [];



async function displaySimulation() {
    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("expBackMin", expBackMin);
    setElem("expBackMax", expBackMax);
    setElem("expFrontMin", expFrontMin);
    setElem("expFrontMax", expFrontMax);

    elemDisabled("submitSimulation", false);
}

async function simulationStart() {
    dataChart;
    dataTitle = ["バトル数"];
    dataChartStatsBase = [[0]];
    dataChartExp = [[0]];

    const expBackDefault = Number(document.getElementById("expBackDefault").value);
    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const expFront = Number(document.getElementById("expFront").value);

    for (let i = 1; i <= dexRange; ++i) {
        await simulation(i, expBackDefault, numBattle, repeat, expFront, i);
    }

    dataChartStatsBase.unshift(dataTitle);
    dataChartExp.unshift(dataTitle);

    // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
    google.load('visualization', '1', { 'packages': ['corechart'] });
    // グラフを描画する為のコールバック関数を指定
    google.setOnLoadCallback(drawChart);

    // データを並び替え
    dataAll.sort(function (a, b) {
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        
        if (a[2] > b[2]) return -1;
        if (a[2] < b[2]) return 1;

        if (a[3] > b[3]) return -1;
        if (a[3] < b[3]) return 1;

        return 0;
    });

    tableSimulation(dataAll);

    setElem("info", "読み込み完了！");
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront, numPoke) {
    setElem("info", "");

    const battleSum = numBattle * repeat;

    // 名前取得
    const pokeBack = getPoke(numDexBack);
    const stats = pokeBack["stats"];

    dataTitle.push(numPoke + ": " + pokeBack["name"]);
    dataChartStatsBase[0].push(expBackDefault * pokeBack["stats"]);
    dataChartExp[0].push(expBackDefault);

    let win = 0;
    let expBackSum = 0;
    let typeEffectiveSum = 0;
    let winType = 0;
    dataChart = [];

    for (let i = 1; i <= repeat; ++i) {
        let expBack = expBackDefault;

        for (let j = 1; j <= numBattle; ++j) {
            if (numPoke == 1 && i == 1) {
                dataChartStatsBase.push([j]);
                dataChartExp.push([j]);
            }

            let [infoBattle, expBackUpdate, typeEffective] = battle(numDexBack, expBack, valueExpFront);
            if (infoBattle >= 0) {
                win++;
            }

            expBack = expBackUpdate;

            if (i == 1) {
                dataChart.push(expBack);
            } else {
                dataChart.splice(j - 1, 1, Number(dataChart[j - 1]) + expBack);
            }

            if (j == numBattle) {
                expBackSum += expBack;
            }

            if (typeEffective >= 1) {
                winType++;
            }

            typeEffectiveSum += typeEffective;
        }
    }

    for (let i = 0; i < dataChart.length; ++i) {
        dataChart.splice(i, 1, Number(dataChart[i]) / repeat);
        dataChartStatsBase[i + 1].push(dataChart[i] * stats);
        dataChartExp[i + 1].push(dataChart[i]);
    }

    const rateWin = floorDecimal(((win) / battleSum) * 100, 3);
    const expBackAvr = floorDecimal(expBackSum / repeat, 3);
    const statsAvr = Math.floor(expBackAvr * stats);

    const rateWinType = floorDecimal(((winType) / battleSum) * 100, 3);
    const typeEffectiveAvr = floorDecimal(typeEffectiveSum / battleSum, 3);

    dataAll.push([pokeBack["name"], statsAvr, expBackAvr, rateWin, pokeBack["typesName"], typeEffectiveAvr, rateWinType]);
}

// グラフの描画   
function drawChart() {
    // 配列からデータの生成
    const dataSrcStatsBase = google.visualization.arrayToDataTable(dataChartStatsBase);

    // オプションの設定
    const optionsStatsBase = {
        title: "実数値推移比較",
        legend: {
            position: 'top',
            textStyle: { fontSize: 15 }
        },
        vAxis: {
            title: '実数値',
            minValue: 0,
        },
        hAxis: {
            title: 'バトル数',
            minValue: 0,
            format: "####",
        }
    };

    // 指定されたIDの要素に折れ線グラフを作成
    const chartStatsBase = new google.visualization.LineChart(document.getElementById("chartStatsBase"));

    // グラフの描画
    chartStatsBase.draw(dataSrcStatsBase, optionsStatsBase);

    // 配列からデータの生成
    const dataSrcExp = google.visualization.arrayToDataTable(dataChartExp);

    // オプションの設定
    const optionsExp = {
        title: "経験値推移比較",
        legend: {
            position: 'top',
            textStyle: { fontSize: 15 }
        },
        vAxis: {
            title: '経験値',
            minValue: 0,
            maxValue: 10
        },
        hAxis: {
            title: 'バトル数',
            minValue: 0,
            format: "####",
        }
    };

    // 指定されたIDの要素に折れ線グラフを作成
    const chartExp = new google.visualization.LineChart(document.getElementById("chartExp"));

    // グラフの描画
    chartExp.draw(dataSrcExp, optionsExp);
}

// 表を表示
function tableSimulation(data) {
    // テーブルを取得
    const table = document.getElementById("tableSimulationAll");

    for (let i = 0; i < data.length; ++i) {
        // 表の一番最後に1行追加
        let tr = table.insertRow(-1);

        for (let j = 0; j < data[i].length; ++j) {
            // 順位を表示
            let td = tr.insertCell(-1);
            td.innerHTML = data[i][j];
            td.classList.add("simulationTd" + i);
        }

        // 順位を表示
        let td = tr.insertCell(0);
        td.innerHTML = i + 1;
        td.classList.add("simulationTdRank");
    }
}



displaySimulation();
