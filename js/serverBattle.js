// GETパラメータを取得
const url = new URL(window.location.href);
const numServer = url.searchParams.get("numServer");
const numRound = url.searchParams.get("numRound");



// バトル画面を表示
async function displayServerBattle() {
    // 結果を非表示
    elemDisplay("message", "none");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverBattle");
    formData.set('userName', userNameLocal);
    formData.set('numServer', numServer);
    formData.set('numRound', numRound);

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
        serverBattle(data);
    })
    .catch(error => {
        setElem("info", error);
    });

}

// バトル結果を表示する関数
async function serverBattle(data) {
    const [numDexBack, shinyBack, nameBack, typeSumBack, infoBack] = data.listBack;
    const [numDexFront, shinyFront, nameFront, typeSumFront, infoFront] = data.listFront;

    // 手持ちのポケモン表示
    const imgSrcBack = await getPokeImage(numDexBack, true, shinyBack, false);
    const imgBack = document.getElementById("imgSrcBack");
    imgBack.src = imgSrcBack;

    let valueShinyBack = "";
    if (shinyBack) {
        valueShinyBack = "★";
    }

    setElem("nameBack", nameBack + valueShinyBack);
    setElem("typeBack", typeSumBack);
    setElem("infoBack", infoBack);

    await sleep(5000);

    // 野生のポケモン表示
    const imgSrcFront = await getPokeImage(numDexFront, true, shinyFront, true);
    const imgFront = document.getElementById("imgSrcFront");
    imgFront.src = imgSrcFront;

    let valueShinyFront = "";
    if (shinyFront) {
        valueShinyFront = "★";
    }

    setElem("nameFront", nameFront + valueShinyFront);
    setElem("typeFront", typeSumFront);
    setElem("infoFront", infoFront);

    await sleep(5000);

    // 結果を表示
    setElem("message", data.message);
    elemDisplay("message", "block");

    await sleep(5000);

    location.href = "./serverBattleSelect.html";

}

displayServerBattle();