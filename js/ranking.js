// ranking.htmlが開かれたときに実行する関数
async function displayRanking() {
    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "ranking");

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
        ranking(data);
    })
    .catch(error => {
        setElem("info", error);
    });
}

// ランキングを表示
async function ranking(data) {
    // テーブルを取得
    const tableList = document.getElementById("tableRankingList");

    for (let i = 0;  i < data.length; ++i) {
        let [userName, pokeData, point, battleSum, rate] = data[i];

        // 表の一番最後に1行追加、-1
        let tr1 = tableList.insertRow(-1);

        // 順位を表示
        let td0List = tr1.insertCell(0);
        td0List.innerHTML = i + 1;
        td0List.rowSpan = "2";
        td0List.classList.add("rankingTd0");
        // ユーザ名を表示
        let td1List = tr1.insertCell(1);
        td1List.innerHTML = userName;
        td1List.rowSpan = "2";
        td1List.classList.add("rankingTd1");
        // 得点を表示
        let td2List = tr1.insertCell(2);
        td2List.innerHTML = point + "<br>(レート:" + rate + ")";
        td2List.rowSpan = "2";
        td2List.classList.add("rankingTd2");
        // バトル数を表示
        let td3List = tr1.insertCell(3);
        td3List.innerHTML = battleSum;
        td3List.rowSpan = "2";
        td3List.classList.add("rankingTd3");

        // 表の一番最後に1行追加、-1
        let tr2 = tableList.insertRow(-1);
        
        // 手持ちのポケモンを表示
        for (let j = 0; j < pokeData.length; ++j) {
            let = [shinyBack, expBack, usedBack, numDexBack, nameBack, typeSumBack, statsBack] = pokeData[j];
            let valueShiny = "";
            if (shinyBack) {
                valueShiny = "★";
            }

            let statsBaseBack = Math.floor(statsBack * expBack);

            let imgSrcBack = await getPokeImage(numDexBack, true, shinyBack, true);

            let td4List;
            // 画像を表示
            if (j % 2 != 0) {
                td4List = tr2.insertCell(Math.floor(j/2));
                td4List.classList.add("rankingTd4Odd");
            } else {
                td4List = tr1.insertCell(4 + Math.floor(j/2));
                td4List.classList.add("rankingTd4Even");
            }
            
            td4List.innerHTML = "<img src =" + imgSrcBack + "><br>" + valueShiny + "<b>" + statsBaseBack + "</b>" + "<br>(" + statsBack + " × " + expBack.toFixed(3) + ")";
            td4List.classList.add("rankingTd4");
        }
    }

    setElem("info", "読み込み完了！");
}


displayRanking();