// 交代選択画面を表示
async function selectChange() {
    // ホーム画面を非表示
    elemDisplay("home", "none");
    // バトル画面を表示
    elemDisplay("battle", "block");
    // 交代画面を表示
    elemDisplay("change", "block");
    
    // 交代ボタン等を非表示
    elemDisplay("changeIcons", "none");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "list");
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
        // 手持ちのポケモンを表で表示
        listTable(data, "tableChangeList", true);
    })
    .catch(error => {
    });

    // 交代ボタン等を表示
    elemDisplay("changeIcons", "block");
}

// 交代画面
async function change() {
    // 交代ボタン等を非表示
    elemDisplay("changeIcons", "none");
    // 戻るボタンを非表示
    elemDisplay("backButton", "none");

    // ラジオボタンでチェックされた値を取得する関数
    const numPoke = getRadioChecked("tableChangeList");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "change");
    formData.set('userName', userNameLocal);
    formData.set('password', passwordLocal);
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
        // 交代結果画面を表示
        changeResult(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// 交代結果画面を表示する関数
async function changeResult(data) {
    // 戻るボタンを表示
    elemDisplay("backButton", "block");
    // 戻るボタンのラベル変更
    setElem("backButton", "ホームに戻る");

    setElem("message", data.message);
}