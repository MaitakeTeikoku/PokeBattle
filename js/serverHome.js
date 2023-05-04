// serverHome.htmlが開かれたときに実行する関数
async function displayServerHome() {
    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverHome");
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
        serverHome(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// サーバ選択ボタンを表示
function serverHome(data) {
    for (let i = 0; i < data.numServerSum; i++) {
        // 追加する要素を生成する
        let button = document.createElement('button');
        button.innerHTML = 'サーバ' + (i + 1);
        
        // 参加しているサーバがあるとき
        if (data.numServerOld > 0) {

            // 参加しているサーバに色を付ける
            if (data.numServerOld == i + 1) {
                button.onclick = () => {
                    selectServer(i + 1);
                };
            } else {
                // 参加しているサーバ以外は全て無効化
                button.disabled = true;
            }

        } else {

            // 満席のとき、ボタンを無効化
            if(!data.vacantList[i]) {
                button.disabled = true;
            } else {
                button.onclick = () => {
                    selectServer(i + 1);
                };
            }

        }

        // 親要素を取得
        let buttondiv = document.getElementById('buttonDiv');

        // 親要素の末尾に追加する
        buttondiv.appendChild(button);
    }
    setElem("info", "読み込み完了！");
}

// サーバを選択した時の関数
async function selectServer(numServer) {
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
        setElem("info", data.message);
        location.href = "./serverStandby.html?numServer=" + numServer;
    })
    .catch(error => {
        setElem("info", error);
    });

}

displayServerHome();