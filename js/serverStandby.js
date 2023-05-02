// GETパラメータを取得
const url = new URL(window.location.href);
const numServer = url.searchParams.get("numServer");



// serverStandby.htmlが開かれたときに実行する関数
async function displayServerStandby() {
    // サーバ退出ボタンを表示
    elemDisplay("buttonExit", "none");

    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverStandby");
    formData.set('numServer', numServer);
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
        // ランキングを表示
        serverStandby(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// 待機室を表示
async function serverStandby(data) {
    setElem("message", data.message);
    setElem("numServer", data.numServer);
    if(data.result) {
        setElem("player01", data.player01);
        setElem("player02", data.player02);
    }

    setElem("info", "読み込み完了！");

    if(data.ready) {
        // 更新を停止
        clearInterval(timerServerStandby);

        setElem("info", "対戦スタート！");

        location.href = "./serverBattleSelect.html";
    }

    // サーバ退出ボタンを表示
    elemDisplay("buttonExit", "block");
}

async function serverStandbyExit() {
    // 更新を停止
    clearInterval(timerServerStandby);
    // サーバを退出
    await serverExit();
}

displayServerStandby();

// 更新
const timerServerStandby = setInterval(displayServerStandby, 5000);