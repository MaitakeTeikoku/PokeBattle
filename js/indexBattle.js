// バトル画面を表示
async function displayBattle() {
    // ホーム画面を非表示
    elemDisplay("home", "none");
    // バトル画面を表示
    elemDisplay("battle", "block");
    // 交代画面を非表示
    elemDisplay("change", "none");

    // 戻るボタンを非表示
    elemDisplay("backButton", "none");
    // 戻るボタンのラベル変更
    setElem("backButton", "ホームに戻る");

    // ラジオボタンでチェックされた値を取得する関数
    const numPoke = getRadioChecked("tableHomeList");
    const expFront = document.getElementById("sliderExpFront").value;

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "battle");
    formData.set('userName', userNameLocal);
    formData.set('password', passwordLocal);
    formData.set('numPoke', numPoke);
    formData.set('valueExpFront', expFront);

    // 設定を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        // バトル結果を表示
        battleResult(data);
    })
    .catch(error => {
        setElem("info", error);
    });

}

// バトル結果を表示する関数
async function battleResult(data) {
    // 戻るボタンを表示
    elemDisplay("backButton", "block");
    // 戻るボタンのラベル変更
    setElem("backButton", "ホームに戻る");

    setElem("message", data.message);

    const [numDexBack, shinyBack, nameBack, typeSumBack, infoBack] = data.listBack;
    const [numDexFront, shinyFront, nameFront, typeSumFront, infoFront] = data.listFront;

    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, true, shinyBack, false);
    const imgBack = document.getElementById("imgSrcBack");
    imgBack.src = imgSrcBack;

    setElem("nameBack", nameBack);
    setElem("typeBack", typeSumBack);
    setElem("infoBack", infoBack);

    await sleep(1000);

    // 野生のポケモン表示
    const imgSrcFront = await getPokeImage(numDexFront, true, shinyFront, true);
    const imgFront = document.getElementById("imgSrcFront");
    imgFront.src = imgSrcFront;

    setElem("nameFront", nameFront);
    setElem("typeFront", typeSumFront);
    setElem("infoFront", infoFront);

    await sleep(1000);

    setElem("infoBattle", data.infoBattle);

    if (data.infoBattle == "勝ち") {
        // 戻るボタンのラベル変更
        setElem("backButton", "交代せずホームに戻る");
        // 交代選択画面を表示
        selectChange();
    }
}