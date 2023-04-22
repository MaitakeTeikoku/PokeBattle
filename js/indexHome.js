// index.htmlが開かれたときに実行する関数
async function displayHome() {
    // ホーム画面を表示
    elemDisplay("home", "block");
    // バトル画面を非表示
    elemDisplay("battle", "none");
    // 交代画面を非表示
    elemDisplay("change", "none");

    // スタートボタン等を非表示
    elemDisplay("homeIcons", "none");
    // 戻るボタンを非表示
    elemDisplay("backButton", "none");

    // ユーザ名を取得できているか確認
    existUserName();
    // ユーザ名を表示
    setElem("userName", userNameLocal);

    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("dexRange", dexRange);
    setElem("effectiveSuper", effectiveSuper);
    setElem("effectiveNotVery", effectiveNotVery);
    setElem("effectiveNot", effectiveNot);
    setElem("countShinyRandom", countShinyRandom);
    setElem("pointShiny", pointShiny);

    sliderExpFront.min = expFrontMin;
    sliderExpFront.max = expFrontMax;
    sliderExpFront.step = expFrontStep;
    sliderExpFront.value = 1;

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
        listTable(data, "tableHomeList", false);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// 手持ちのポケモンを表で表示する関数
async function listTable(data, id, valueSprites) {

    const point = data[2];
    setElem("point", point);
    
    const battleSum = data[3];
    setElem("battleSum", battleSum);

    // テーブルを取得
    const tableList = document.getElementById(id);

    for (i = data[1].length - 1; i >= 0 ; --i) {
        let numPoke = i + 1;

        let [shinyBack, expBack, usedBack, numDexBack, nameBack, typeSumBack, statsBack] = data[1][i];
        
        let valueShiny = "";
        if (shinyBack) {
            valueShiny = "★";
        }

        const imgSrcBack = await getPokeImage(numDexBack, valueSprites, shinyBack, true);

        let statsBaseBack = Math.floor(statsBack * expBack);
        // 表の2番目に1行追加
        let tr = tableList.insertRow(1); 

        // 画像を表示
        let td0List = tr.insertCell(0);
        td0List.innerHTML = "<label><input type='radio' name='" + id + "' value='" + numPoke +"' checked><img src =" + imgSrcBack + "></label>";
        td0List.classList.add(id + "Td0");

        // 名前と色違いを追加
        let td1List = tr.insertCell(1);
        td1List.innerHTML = nameBack + valueShiny;
        td1List.classList.add(id + "Td1");

        // タイプを追加
        let td2List = tr.insertCell(2);
        td2List.innerHTML = typeSumBack;
        td2List.classList.add(id + "Td2");

        // 基礎能力値を追加
        let td3List = tr.insertCell(3);
        td3List.innerHTML = "<b>" + statsBaseBack + "</b>" + "<br>(" + statsBack + " × " + expBack.toFixed(3) + ")";
        td3List.classList.add(id + "Td3");

        // 消費ライフを追加
        let td4List = tr.insertCell(4);
        td4List.innerHTML = usedBack + " / " + numUsedMax;
        td4List.classList.add(id + "Td4");
    }

    // スタートボタン等を表示
    elemDisplay("homeIcons", "block");
}



displayHome();