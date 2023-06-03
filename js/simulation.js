let infoBack;
var dataChart;



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

    setElem("urlPath", url.protocol + url.host + url.pathname + "?numDexBack=1&expBackDefault=1&numBattle=100&repeat=10&valueExpFront=1");

    let numDexBack = params.get("numDexBack");
    let expBackDefault = params.get("expBackDefault");
    let numBattle = params.get("numBattle");
    let repeat = params.get("repeat");
    let valueExpFront = params.get("valueExpFront");
    
    elemDisabled("submitSimulation", false);

    if (numDexBack == null) {
        return;
    } else {
        numDexBack = Number(numDexBack);
    }
    if (expBackDefault == null) {
        expBackDefault = 1;
    } else {
        expBackDefault = Number(expBackDefault);
    }
    if (numBattle == null) {
        numBattle = 100;
    } else {
        numBattle = Number(numBattle);
    }
    if (repeat == null) {
        repeat = 10;
    } else {
        repeat = Number(repeat);
    }
    if (valueExpFront == null) {
        valueExpFront = 1;
    } else {
        valueExpFront = Number(valueExpFront);
    }

    document.getElementById("numDexBack").value = numDexBack;
    document.getElementById("expBackDefault").value = expBackDefault;
    document.getElementById("numBattle").value = numBattle;
    document.getElementById("repeat").value = repeat;
    document.getElementById("sliderExpFront").value = valueExpFront;
    setCurrentValue(valueExpFront);

    simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront);
}

async function simulationStart() {
    const numDexBack = Number(document.getElementById("numDexBack").value);
    const expBackDefault = Number(document.getElementById("expBackDefault").value);
    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const valueExpFront = Number(document.getElementById("sliderExpFront").value);

    await simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront);
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront) {
    setElem("info", "");
    if (numDexBack < 1 || numDexBack > dexRange) {
        setElem("info", "ポケモンの図鑑番号の値が不正です。");
        return;
    }else if (expBackDefault < expBackMin || expBackDefault > expBackMax) {
        setElem("info", "初期経験値の値が不正です。");
        return;
    }
    
    const battleSum = numBattle * repeat
    const progress = document.getElementById("progress");
    progress.max = battleSum;
    progress.value = 0;
    let progressValue = 0;

    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, false, false, true);
    const imgBack = document.getElementById("imgSrcBack");
    imgBack.src = imgSrcBack;

    // 名前取得
    const pokeBack = getPoke(numDexBack);
    infoBack = pokeBack["name"] + "(" + pokeBack["typesName"] + ")";
    setElem("pokeName", "【" + pokeBack["name"] + "】");
    setElem("pokeType", "【" + pokeBack["typesName"] + "】");

    let win = 0;
    let draw = 0;
    let lose =0;
    let expBackSum = 0;
    let typeEffectiveSum = 0;
    let winType = 0;
    let drawType = 0;
    let loseType = 0;
    dataChart = [["バトル数"], [0]];

    for (let i = 1;  i <= repeat; ++i) {
        let expBack = expBackDefault;
        
        dataChart[0].push(String(i));
        dataChart[1].push(expBack);
        
        for (let j = 1;  j <= numBattle; ++j) {
            let [infoBattle, expBackUpdate, typeEffective] = battle(numDexBack, expBack, valueExpFront);
            switch (infoBattle) {
                case 1:
                    win ++;
                    break;
                case 0:
                    draw ++;
                    break;
                case -1:
                    lose ++;
                    break;
                default:
            }
            
            expBack = expBackUpdate;
            
            if (i == 1) {
                dataChart.push([j, expBack]);
            } else {
                dataChart[j+1].push(expBack);
            }
            
            

            if (j == numBattle) {
                expBackSum += expBack;
            }

            if (typeEffective > 1) {
                winType ++;
            } else if (typeEffective < 1) {
                drawType ++;
            } else {
                loseType ++;
            }

            typeEffectiveSum += typeEffective;

            progressValue ++;
            progress.value = progressValue;
        }
    }
    
    // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
    google.load('visualization', '1', {'packages':['corechart']});       
    // グラフを描画する為のコールバック関数を指定
    google.setOnLoadCallback(drawChart);
    
    setElem("win", win);
    setElem("draw", draw);
    setElem("lose", lose);
    const rateWin = floorDecimal(((win + draw) / battleSum) * 100, 3);
    setElem("rateWin", rateWin);
    const expBackAvr = floorDecimal(expBackSum / repeat, 3);
    setElem("expBackAvr", expBackAvr);

    setElem("winType", winType);
    setElem("drawType", drawType);
    setElem("loseType", loseType);
    const rateWinType = floorDecimal(((winType + drawType) / battleSum) * 100, 3);
    setElem("rateWinType", rateWinType);
    const typeEffectiveAvr = floorDecimal(typeEffectiveSum / battleSum, 3);
    setElem("typeEffectiveAvr", typeEffectiveAvr);

    setElem("info", "読み込み完了！");
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
            textStyle: {fontSize:15}
        },
        vAxis: {
            title: '経験値',
            minValue:0,
            maxValue:10
        },
        hAxis: {
            title: 'バトル数',
            minValue:0,
            format: "####",
        }
    };     
            
    // 指定されたIDの要素に折れ線グラフを作成
    const chart = new google.visualization.LineChart(document.getElementById("chart"));
    
    // グラフの描画
    chart.draw(dataSrc, options);
}



displaySimulation();
