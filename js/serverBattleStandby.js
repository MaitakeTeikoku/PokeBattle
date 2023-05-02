// serverBattleStandby.htmlが開かれたときに実行する関数
async function displayServerBattleStandby() {
    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverBattleStandby");
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
        // バトルの待機画面を表示
        serverBattleStandby(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// バトルの待機画面を表示する関数
async function serverBattleStandby(data) {
    setElem("message", data.message);
    setElem("numServer", data.numServer);

    setElem("info", "読み込み完了！");

    if(data.result) {
        // 更新を停止
        clearInterval(timerServerBattleStandby);
        location.href = "./serverBattle.html?numServer=" + data.numServer + "&numRound=" + data.numRound;
    }
}

displayServerBattleStandby();

// 更新
const timerServerBattleStandby = setInterval(displayServerBattleStandby, 5000);