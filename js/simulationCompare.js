let infoBack;
var dataChart;
var dataTitle;
var dataChartSum;



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
    
    elemDisabled("submitSimulation", false);
}

async function simulationStart() {
    dataChart;
    dataTitle = ["バトル数"];
    dataChartSum = [[0]];

    const numDexBack1 = Number(document.getElementById("numDexBack1").value);
    const expBackDefault1 = Number(document.getElementById("expBackDefault1").value);
    const numDexBack2 = Number(document.getElementById("numDexBack2").value);
    const expBackDefault2 = Number(document.getElementById("expBackDefault2").value);
    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const valueExpFront = Number(document.getElementById("sliderExpFront").value);

    await simulation(numDexBack1, expBackDefault1, numBattle, repeat, valueExpFront, 1);

    await simulation(numDexBack2, expBackDefault2, numBattle, repeat, valueExpFront, 2);

    dataChartSum.unshift(dataTitle);
    console.log(dataChartSum)
    
    // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
    google.load('visualization', '1', {'packages':['corechart']});       
    // グラフを描画する為のコールバック関数を指定
    google.setOnLoadCallback(drawChart);
    
    setElem("info", "読み込み完了！");
}

async function simulation(numDexBack, expBackDefault, numBattle, repeat, valueExpFront, numPoke) {
    setElem("info", "");
    if (numDexBack < 1 || numDexBack > dexRange) {
        setElem("info", "ポケモンの図鑑番号の値が不正です。");
        return;
    }else if (expBackDefault < expBackMin || expBackDefault > expBackMax) {
        setElem("info", "初期経験値の値が不正です。");
        return;
    }
    
    const battleSum = numBattle * repeat;

    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, false, false, true);
    const imgBack = document.getElementById("imgSrcBack" + numPoke);
    imgBack.src = imgSrcBack;

    // 名前取得
    const pokeBack = getPoke(numDexBack);
    infoBack = pokeBack["name"] + "(" + pokeBack["typesName"] + ")";
    setElem("pokeName" + numPoke, "【" + pokeBack["name"] + "】");
    setElem("pokeType" + numPoke, "【" + pokeBack["typesName"] + "】");
    const stats = pokeBack["stats"];

    dataTitle.push(pokeBack["name"]);
    dataChartSum[0].push(expBackDefault * pokeBack["stats"]);

    let win = 0;
    let expBackSum = 0;
    let typeEffectiveSum = 0;
    let winType = 0;
    dataChart = [];

    for (let i = 1;  i <= repeat; ++i) {
        let expBack = expBackDefault;
               
        for (let j = 1;  j <= numBattle; ++j) {
            if (numPoke == 1 && i == 1) {
                dataChartSum.push([j]);
            }

            let [infoBattle, expBackUpdate, typeEffective] = battle(numDexBack, expBack, valueExpFront);
            if (infoBattle >= 0) {
                win ++;
            }
            
            expBack = expBackUpdate;
            
            if (i == 1) {
                dataChart.push([expBack]);
            } else {
                dataChart[j-1].push(expBack);
            }

            if (j == numBattle) {
                expBackSum += expBack;
            }

            if (typeEffective >= 1) {
                winType ++;
            }

            typeEffectiveSum += typeEffective;
        }
    }
    console.log(dataChart);
    let data = [];
    for (let i = 0;  i < dataChart.length; ++i) {
        let dataSum = 0;
        for (let j = 0;  j < dataChart[i].length; ++j) {
            dataSum += dataChart[i][j];
        }
        dataSum /= repeat;
        data.push(dataSum);
    }
    console.log(data);
    console.log(dataChartSum);
    for (let i = 0;  i < data.length; ++i) {
        dataChartSum[i+1].push(data[i] * stats);
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
}

// グラフの描画   
function drawChart() {
    // 配列からデータの生成
    const dataSrc = google.visualization.arrayToDataTable(dataChartSum);

    // オプションの設定
    const options = {
        title: infoBack,
        legend: {
            position: 'top',
            textStyle: {fontSize:15}
        },
        vAxis: {
            title: '実数値',
            minValue:0,
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
