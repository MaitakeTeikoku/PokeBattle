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
    elemDisabled("submitSimulation", true);
    setElem("info", "読み込み中...");

    const expBackDefault = Number(document.getElementById("expBackDefault").value);
    const numBattle = Number(document.getElementById("numBattle").value);
    const repeat = Number(document.getElementById("repeat").value);
    const expFront = Number(document.getElementById("expFront").value);

    const runTime = Math.max(3, Math.floor((numBattle * repeat * 0.569 - 5.11)));
    setElem("runTime", "予測時間: 約" + runTime +"秒 ＊タイムアウト: 360秒");
    // タイマーをスタート
    startTime = Date.now();
    displayTime();

    await simulation(expBackDefault, numBattle, repeat, expFront);

    // タイマーをストップ
    clearTimeout(timeoutID);

    elemDisabled("submitSimulation", false);
}

async function simulation(expBackDefault, numBattle, repeat, expFront) {
    let formData = new FormData();
    formData.set('action', "simulationAll");
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
                tableSimulation(data.dataAll);
            } else {
                setElem("info", data.message);
            }
        })
        .catch(error => {
            setElem("info", "シミュレーションエラー\n" + error);
        });
    
}

// 表を表示
function tableSimulation(data) {
    // テーブルを取得
    const table = document.getElementById("sampleTable");

    for (let i = 0; i < data.length; ++i) {
        // 表の一番最後に1行追加
        let tr = table.insertRow(-1);

        for (let j = 0; j < data[i].length; ++j) {
            let td = tr.insertCell(-1);
            td.innerHTML = data[i][j];
            td.classList.add("simulationTd" + i);
        }

        // 順位を表示
        let td = tr.insertCell(0);
        td.innerHTML = i + 1;
        td.classList.add("simulationTdRank");
    }

    setElem("info", "読み込み完了！");
}



displaySimulation();
