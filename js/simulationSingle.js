var infoBack;
var dataChart;



async function displaySimulationSingle() {
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

    setElem("urlPath", url.protocol + url.host + url.pathname + "?numDexBack=1&expBack=1&numBattle=100&repeat=10&expFront=1");

    let numDexBack = params.get("numDexBack");
    let expBackDefault = params.get("expBack");
    let numBattle = params.get("numBattle");
    let repeat = params.get("repeat");
    let expFront = params.get("expFront");

    if (numDexBack == null) {
        elemDisabled("submitSimulation", false);
        return;
    } else {
        setElem("info", "読み込み中...");
        numDexBack = numDexBack;
    }
    if (expBackDefault == null) {
        expBackDefault = 1;
    } else {
        expBackDefault = expBackDefault;
    }
    if (numBattle == null) {
        numBattle = 100;
    } else {
        numBattle = numBattle;
    }
    if (repeat == null) {
        repeat = 10;
    } else {
        repeat = repeat;
    }
    if (expFront == null) {
        expFront = 1;
    } else {
        expFront = expFront;
    }

    setElem("urlPath", url.protocol + url.host + url.pathname + "?numDexBack=" + numDexBack + "&expBack=" + expBackDefault + "&numBattle=" + numBattle + "&repeat=" + repeat + "&expFront=" + expFront);

    const runTime = Math.max(2, Math.floor(numBattle * repeat * 0.000575 + 2.11));
    setElem("runTime", "予測時間: 約" + runTime +"秒 ＊タイムアウト: 360秒");
    // タイマーをスタート
    startTime = Date.now();
    displayTime();

    document.getElementById("numDexBack").value = numDexBack;
    document.getElementById("expBackDefault").value = expBackDefault;
    document.getElementById("numBattle").value = numBattle;
    document.getElementById("repeat").value = repeat;
    document.getElementById("expFront").value = expFront;

    await simulation(numDexBack, expBackDefault, numBattle, repeat, expFront);

    // タイマーをストップ
    clearTimeout(timeoutID);

    elemDisabled("submitSimulation", false);
}

async function simulationStart() {
    elemDisabled("submitSimulation", true);

    const numDexBack = document.getElementById("numDexBack").value;
    const expBackDefault = document.getElementById("expBackDefault").value;
    const numBattle = document.getElementById("numBattle").value;
    const repeat = document.getElementById("repeat").value;
    const expFront = document.getElementById("expFront").value;

    const runTime = Math.max(2, Math.floor(numBattle * repeat * 0.000575 + 2.11));
    setElem("info", "読み込み中...");
    setElem("runTime", "予測時間: 約" + runTime +"秒 ＊タイムアウト: 360秒");
    // タイマーをスタート
    startTime = Date.now();
    displayTime();

    await simulation(numDexBack, expBackDefault, numBattle, repeat, expFront);

    // タイマーをストップ
    clearTimeout(timeoutID);

    elemDisabled("submitSimulation", false);
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, expFront) {
    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, false, false, true);
    const imgBack = document.getElementById("imgSrcBack");
    imgBack.src = imgSrcBack;
    
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
                setElem("pokeName", "【" + data.pokeBack["name"] + "】");
                setElem("pokeType", "【" + data.pokeBack["typesName"] + "】");
                setElem("win", data.win);
                setElem("draw", data.draw);
                setElem("lose", data.lose);
                setElem("rateWin", data.rateWin);
                setElem("expBackAvr", data.expBackAvr);
                setElem("statsAvr", data.statsAvr);
                setElem("winType", data.winType);
                setElem("drawType", data.drawType);
                setElem("loseType", data.loseType);
                setElem("rateWinType", data.rateWinType);
                setElem("typeEffectiveAvr", data.typeEffectiveAvr);

                dataChart = data.dataChart;
                infoBack = data.pokeBack["name"] + "(" + data.pokeBack["typesName"] + ")";
                
                // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
                google.load('visualization', '1', { 'packages': ['corechart'] });
                // グラフを描画する為のコールバック関数を指定
                google.setOnLoadCallback(drawChart);
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
    const dataSrc = google.visualization.arrayToDataTable(dataChart);

    // オプションの設定
    const options = {
        title: infoBack,
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
    const chart = new google.visualization.LineChart(document.getElementById("chart"));
    // グラフの描画
    chart.draw(dataSrc, options);

    setElem("info", "読み込み完了！");
}



displaySimulationSingle();
