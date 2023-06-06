let numPokeSum;
var dataTitle;
var dataChartStatsBase;
var dataChartExp;



async function displaySimulation() {
    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("dexRange", dexRange);
    setElem("expBackMin", expBackMin);
    setElem("expBackMax", expBackMax);
    setElem("expFrontMin", expFrontMin);
    setElem("expFrontMax", expFrontMax);

    // URLを取得
    const url = new URL(window.location.href);
    const params = url.searchParams;

    setElem("urlPath", url.protocol + url.host + url.pathname + "?numPoke=2");

    numPoke = params.get("numPoke");
    if (numPoke != null && numPoke > 0) {
        numPokeSum = Math.floor(Number(numPoke));
    } else {
        numPokeSum = 2;
    }

    let simulationIcons = "";
    let simulationImages = "";
    for (let i = 1; i <= numPokeSum; ++i) {
        simulationIcons += '<label>ポケモン' + i + '：　図鑑番号<input type="text" id="numDexBack' + i + '" name="numDexBack' + i + '" value="1" size="4em" required></input></label><label>　初期経験値<input type="text" id="expBackDefault' + i + '" name="expBackDefault' + i + '" value="1" size="6em" required></input></label><p></p>'
        simulationImages += '<img id="imgSrcBack' + i + '"><p></p><dev id="pokeName' + i + '" class="simulationPoke"></dev><br>勝率：<dev id="rateWin' + i + '"></dev>%<br>最終経験値平均：<dev id="expBackAvr' + i + '"></dev><br>最終実数値平均：<dev id="statsAvr' + i + '"></dev><p></p><dev id="pokeType' + i + '" class="simulationPoke"></dev><br>タイプ勝率：<dev id="rateWinType' + i + '"></dev>%<br>タイプ平均倍率：×<dev id="typeEffectiveAvr' + i + '"></dev><p></p>'
    }

    document.getElementById("simulationIcons").innerHTML = simulationIcons;
    document.getElementById("simulationImages").innerHTML = simulationImages;

    elemDisabled("submitSimulation", false);
}

async function simulationStart() {
    elemDisabled("submitSimulation", true);

    dataTitle = ["バトル数"];
    dataChartStatsBase = [];
    dataChartExp = [];

    // 入力チェック
    for (let i = 1; i <= numPokeSum; ++i) {
        let numDexBack = Number(document.getElementById("numDexBack" + i).value);

        if (numDexBack < 1 || numDexBack > dexRange) {
            setElem("info", "ポケモン" + i + "の図鑑番号の値が不正です。");
            return false;
        }
    }

    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const expFront = Number(document.getElementById("expFront").value);

    const runTime = Math.max(2, Math.floor((numBattle * repeat * 0.000575 + 2.11) * numPokeSum));
    const runTimeSum = Math.floor(runTime * numPokeSum);
    setElem("info", "読み込み中...\n1匹当たりの予測時間: 約" + runTime + "秒 ＊タイムアウト: 360秒\n合計予測時間: 約" + runTimeSum +"秒");

    for (let i = 1; i <= numPokeSum; ++i) {
        let numDexBack = Number(document.getElementById("numDexBack" + i).value);
        let expBackDefault = Number(document.getElementById("expBackDefault" + i).value);

        await simulation(numDexBack, expBackDefault, numBattle, repeat, expFront, i);

        // 手持ちのポケモン表示
        let imgSrcBack = await getPokeImage(numDexBack, true, false, true);
        let imgBack = document.getElementById("imgSrcBack" + i);
        imgBack.src = imgSrcBack;
    }

    dataChartStatsBase.unshift(dataTitle);
    dataChartExp.unshift(dataTitle);

    // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
    google.load('visualization', '1', { 'packages': ['corechart'] });
    // グラフを描画する為のコールバック関数を指定
    google.setOnLoadCallback(drawChart);

    elemDisabled("submitSimulation", false);
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, expFront, numPoke) {
    let formData = new FormData();
    formData.set('action', "simulationSingle");
    formData.set('numDexBack', numDexBack);
    formData.set('expBackDefault', expBackDefault);
    formData.set('numBattle', numBattle);
    formData.set('repeat', repeat);
    formData.set('expFront', expFront);

    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.result) {
                setElem("pokeName" + numPoke, "【" + data.pokeBack["name"] + "】");
                setElem("pokeType" + numPoke, "【" + data.pokeBack["typesName"] + "】");
                setElem("rateWin" + numPoke, data.rateWin);
                setElem("expBackAvr" + numPoke, data.expBackAvr);
                setElem("statsAvr" + numPoke, data.statsAvr);
                setElem("rateWinType" + numPoke, data.rateWinType);
                setElem("typeEffectiveAvr" + numPoke, data.typeEffectiveAvr);

                const dataChart = data.dataChart;
                dataTitle.push(numPoke + ": " + data.pokeBack["name"]);

                for (let j = 1; j < dataChart.length; ++j) {
                    let expBackSum = 0;

                    for (let k = 1; k < dataChart[j].length; ++k) {
                        expBackSum += dataChart[j][k];
                    }

                    if (numPoke == 1) {
                        dataChartExp.push([j - 1, expBackSum / repeat]);
                        dataChartStatsBase.push([j - 1, (expBackSum / repeat) * data.pokeBack["stats"]]);
                    } else {
                        dataChartExp[j - 1].push(expBackSum / repeat);
                        dataChartStatsBase[j - 1].push((expBackSum / repeat) * data.pokeBack["stats"]);
                    }
                }

            } else {
                setElem("info", data.message);
            }
        })
        .catch(error => {
            setElem("info", "シミュレーションエラー\n" + error);
        });
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

    setElem("info", "読み込み完了！");
}





displaySimulation();
