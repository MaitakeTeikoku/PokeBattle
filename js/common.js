// GASのURLを指定
const urlApi = 'https://script.google.com/macros/s/AKfycbz3LvWs1v0whyAs4x7UPlsAA7cIQNN7B6jM1QIcFBj2EXIW5RAEZFextQY0OAB-IX51/exec';

// 設定
let dexRange;
let effectiveSuper;
let effectiveNotVery;
let effectiveNot;
let countShinyRandom;
let pointShiny;
let numUsedMax;
let getPokeMax;
let expBackMin;
let expBackMax;
let expFrontMin;
let expFrontMax;
let expFrontStep;

// タイマー
let startTime;
let stopTime = 0;
let timeoutID;



// スリープ
const sleep = ms => new Promise(res => setTimeout(res, ms));

// ユーザ名をローカルストレージから取得
const userNameLocal = localStorage.getItem('userNamePokeBattle');
// 秘密の暗号をローカルストレージから取得
const passwordLocal = localStorage.getItem('passwordPokeBattle');



// ユーザ名を取得できているか確認する関数
function existUserName() {
    if (userNameLocal == null) {
        window.location.href = './signIn.html';
    }
}

// ログアウトボタンが押された時の関数
function logout() {
    // ローカルストレージをクリア
    localStorage.clear();
    window.location.reload(true);
}

// 要素をinnerTextでセットする関数(value=""で要素をリセット)
function setElem(id, value) {
    const elem = document.getElementById(id);
    elem.innerText = value;
}

// 要素の活性/非活性を切り替え(false/true)
function elemDisabled(id, d) {
    const elem = document.getElementById(id);
    elem.disabled = d;
}

// 要素の表示/非表示を切り替え(visible/hidden)
function elemVisibility(id, v) {
    const elem = document.getElementById(id);
    elem.style.visibility = v;
}

// 要素の表示/非表示を切り替え(block/none)
function elemDisplay(id, d) {
    const elem = document.getElementById(id);
    elem.style.display = d;
}

// ラジオボタンでチェックされた値を取得する関数
function getRadioChecked(getByName) {
    const elements = document.getElementsByName(getByName);
    
    let checkValue = '';
    for (let i = 0; i < elements.length; i++){
        if (elements.item(i).checked){
            checkValue = elements.item(i).value;
        }
    }
    return checkValue;
}

// サーバを退出する関数
async function serverExit() {
    // POSTのbody
    let formData = new FormData();
    formData.set('action', "serverExit");
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
        location.href = "./serverHome.html";
    })
    .catch(error => {
        setElem("info", error);
    });
}

// 設定を取得
async function getSetting() {

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "setting");

    // 設定を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        dexRange = data.dexRange;
        effectiveSuper = data.effectiveSuper;
        effectiveNotVery = data.effectiveNotVery;
        effectiveNot = data.effectiveNot;
        countShinyRandom = data.countShinyRandom;
        pointShiny = data.pointShiny;
        numUsedMax = data.numUsedMax;
        getPokeMax = data.getPokeMax;
        expBackMin = data.expBackMin;
        expBackMax = data.expBackMax;
        expFrontMin = data.expFrontMin;
        expFrontMax = data.expFrontMax;
        expFrontStep = data.expFrontStep;
    })
    .catch(error => {
        setElem("info", error);
    });
}

// PokeAPIから画像を取得する関数
async function getPokeImage(numDex, valueSprites, valueShiny, valuePosition) {
    // PokeAPIに接続
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + numDex);
    const resData =await res.json();

    // ポケモンの画像を取得
    let imgSrc;
    // dot
    if(valueSprites) {
        // 色違い
        if (valueShiny) {
            if(valuePosition) {
            // 正面
            imgSrc = resData['sprites']['front_shiny'];
            } else {
            // 背面
            imgSrc = resData['sprites']['back_shiny'];
            }
        // デフォルト
        } else {
            if(valuePosition) {
            // 正面
            imgSrc = resData['sprites']['front_default'];
            } else {
            // 背面
            imgSrc = resData['sprites']['back_default'];
            }
        }

    // official-artwork
    } else {
        // 色違い
        if (valueShiny) {
            imgSrc = resData['sprites']['other']['official-artwork']['front_shiny'];
        // デフォルト
        } else {
            imgSrc = resData['sprites']['other']['official-artwork']['front_default'];

        }
    }

    return imgSrc;
}

function urlPath() {
    const text = document.getElementById("urlPath").value;
    try {
        const url = new URL(text);
        // テキストがURL形式の場合、リンク先を開く
        window.open(url.href, "_blank");
    } catch (error) {
        // テキストがURL形式でない場合、エラーメッセージを表示
        alert("入力されたテキストはURLではありません。");
    }
}

// 時間を表示する関数
function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    // ミリ秒を秒に変換
    const totalSeconds = Math.floor(currentTime.getTime() / 1000);
    // 秒の部分を計算（小数点以下1桁まで）
    const secondsWithDecimal = (totalSeconds + currentTime.getMilliseconds() / 1000).toFixed(1);
  
    time.textContent = secondsWithDecimal;
    timeoutID = setTimeout(displayTime, 100);
}