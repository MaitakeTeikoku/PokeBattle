// serverRound.htmlが開かれたときに実行する関数
async function displayServerRound() {
    // サーバ退出ボタンを表示
    elemDisplay("buttonExit", "none");

    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverRound");
    formData.set('userName', userNameLocal);

    // 設定を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        // ラウンド情報を表示
        serverRound(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// ラウンド情報を表示する関数
async function serverRound(data) {
    setElem("message", data.message);
    setElem("numServer", data.numServer);

    // 試合終了の場合
    if (data.end) {
        // 手持ちのポケモンを非表示
        elemDisplay("formServerBattle", "none");
        // サーバ退出ボタンを表示
        elemDisplay("buttonExit", "block");
    }

    // テーブルを取得
    const tableList = document.getElementById("tableServerBattleList");

    for (i = data.listGetData[1].length - 1; i >= 0 ; --i) {
        let numPoke = i + 1;

        let [shinyBack, expBack, usedBack, numDexBack, nameBack, typeSumBack, statsBack] = data.listGetData[1][i];
        
        let valueShiny = "";
        if (shinyBack) {
            valueShiny = "★";
        }

        const imgSrcBack = await getPokeImage(numDexBack, false, shinyBack, true);

        let statsBaseBack = Math.floor(statsBack * expBack);

        // 表の2番目に1行追加
        let tr = tableList.insertRow(1);

        // 画像を表示
        let td0List = tr.insertCell(0);
        if (!data.roundsPlayer.includes(numPoke)) {
            td0List.innerHTML = "<label><input type='radio' name='" + "tableServerBattleList" + "' value='" + numPoke +"' checked><img src =" + imgSrcBack + "></label>";
        } else {
            td0List.innerHTML = "<label><input type='radio' name='" + "tableServerBattleList" + "' value='" + numPoke +"' disabled='disabled'><img src =" + imgSrcBack + "></label>";
        }
        td0List.classList.add("tableServerBattleListTd0");

        // 名前と色違いを追加
        let td1List = tr.insertCell(1);
        td1List.innerHTML = nameBack + valueShiny;
        td1List.classList.add("tableServerBattleListTd1");

        // タイプを追加
        let td2List = tr.insertCell(2);
        td2List.innerHTML = typeSumBack;
        td2List.classList.add("tableServerBattleListTd2");

        // 基礎能力値を追加
        let td3List = tr.insertCell(3);
        td3List.innerHTML = statsBaseBack;
        td3List.classList.add("tableServerBattleListTd3");
    }

    // スタートボタン等を表示
    elemDisplay("serverBattleIcons", "block");

    setElem("info", "読み込み完了！");
}

// 手持ちのポケモンを選択する関数
async function serverBattleSelect() {
    setElem("info", "読み込み中...");

    const numPoke = getRadioChecked("tableServerBattleList");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverBattleSelect");
    formData.set('userName', userNameLocal);
    formData.set('numPoke', numPoke);

    // 設定を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        // ラウンド情報を表示
        serverBattleStandby(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// バトルスタンバイ画面に遷移する関数
function serverBattleStandby(data) {
    setElem("info", data.message);
    if(data.result) {
        location.href = "./serverBattleStandby.html";
    }
}

displayServerRound();