let numPokeSum;
var dataChart;
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

    sliderExpFront.min = expFrontMin;
    sliderExpFront.max = expFrontMax;
    sliderExpFront.step = expFrontStep;
    sliderExpFront.value = 1;

    // URLを取得
    const url = new URL(window.location.href);
    const params = url.searchParams;

    setElem("urlPath", url.protocol + url.host + url.pathname + "?numPoke=2");

    numPoke = params.get("numPoke");
    if (numPoke != null && numPoke > 1) {
        numPokeSum = Math.floor(Number(numPoke));
    } else {
        numPokeSum = 2;
    }

    let simulationIcons = "";
    let simulationImages = "";
    for (let i = 1; i <= numPokeSum; ++i) {
        simulationIcons += '<label>ポケモン' + i + '：　図鑑番号<input type="text" id="numDexBack' + i + '" name="numDexBack' + i + '" value="1" size="4em" required></input></label><label>　初期経験値<input type="text" id="expBackDefault' + i + '" name="expBackDefault' + i + '" value="1" size="6em" required></input></label><p></p>'
        simulationImages += '<img id="imgSrcBack' + i + '" class="simulationImage"><p></p><dev id="pokeName' + i + '" class="simulationPoke"></dev><br>勝率：<dev id="rateWin' + i + '"></dev>%<br>最終経験値平均：<dev id="expBackAvr' + i + '"></dev><br>最終実数値平均：<dev id="statsAvr' + i + '"></dev><p></p><dev id="pokeType' + i + '" class="simulationPoke"></dev><br>タイプ勝率：<dev id="rateWinType' + i + '"></dev>%<br>タイプ平均倍率：×<dev id="typeEffectiveAvr' + i + '"></dev><p></p>'
    }

    document.getElementById("simulationIcons").innerHTML = simulationIcons;
    document.getElementById("simulationImages").innerHTML = simulationImages;

    elemDisabled("submitSimulation", false);
}

async function simulationStart() {
    dataChart;
    dataTitle = ["バトル数"];
    dataChartStatsBase = [[0]];
    dataChartExp = [[0]];

    // 入力チェック
    for (let i = 1; i <= numPokeSum; ++i) {
        let numDexBack = Number(document.getElementById("numDexBack" + i).value);
        let expBackDefault = Number(document.getElementById("expBackDefault" + i).value);

        if (numDexBack < 1 || numDexBack > dexRange) {
            setElem("info", "ポケモン" + i + "の図鑑番号の値が不正です。");
            return false;
        } else if (expBackDefault < expBackMin || expBackDefault > expBackMax) {
            setElem("info", "ポケモン" + i + "の初期経験値の値が不正です。");
            return false;
        }
    }

    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const valueExpFront = Number(document.getElementById("sliderExpFront").value);

    for (let i = 1; i <= numPokeSum; ++i) {
        let numDexBack = Number(document.getElementById("numDexBack" + i).value);
        let expBackDefault = Number(document.getElementById("expBackDefault" + i).value);

        await simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront, i);
    }

    dataChartStatsBase.unshift(dataTitle);
    dataChartExp.unshift(dataTitle);

    // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
    google.load('visualization', '1', { 'packages': ['corechart'] });
    // グラフを描画する為のコールバック関数を指定
    google.setOnLoadCallback(drawChart);

    setElem("info", "読み込み完了！");
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront, numPoke) {
    setElem("info", "");

    const battleSum = numBattle * repeat;

    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, false, false, true);
    const imgBack = document.getElementById("imgSrcBack" + numPoke);
    imgBack.src = imgSrcBack;

    // 名前取得
    const pokeBack = getPoke(numDexBack);
    setElem("pokeName" + numPoke, "【" + numPoke + ": " + pokeBack["name"] + "】");
    setElem("pokeType" + numPoke, "【" + pokeBack["typesName"] + "】");
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
    setElem("rateWin" + numPoke, rateWin);
    const expBackAvr = floorDecimal(expBackSum / repeat, 3);
    setElem("expBackAvr" + numPoke, expBackAvr);
    const statsAvr = Math.floor(expBackAvr * stats);
    setElem("statsAvr" + numPoke, statsAvr);

    const rateWinType = floorDecimal(((winType) / battleSum) * 100, 3);
    setElem("rateWinType" + numPoke, rateWinType);
    const typeEffectiveAvr = floorDecimal(typeEffectiveSum / battleSum, 3);
    setElem("typeEffectiveAvr" + numPoke, typeEffectiveAvr);

    return true;
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

function urlPath() {
    const text = document.getElementById("urlPath").value;
    try {
        const url = new URL(text);
        // テキストがURL形式の場合、リンク先を開く
        window.open(url.href, "_blank");
    } catch (error) {
        // テキストがURL形式でない場合、エラーメッセージを表示
        alert("入力されたテキストはURLではありません。");
    }
}



displaySimulation();
