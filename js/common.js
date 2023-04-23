// GASのURLを指定
const urlApi = 'https://script.google.com/macros/s/AKfycbzDT9Zg1uQ2xjx_NL5Migo39mkeasfO5y1h_Uy-k8_SuFL0grp3l73OYtEa2efeZd0_/exec';

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
        expBackMin = expBackMin;
        expBackMax = expBackMax;
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