// タイプの数
const numType = 18;



// index.htmlが開かれたときに実行する関数
async function displayTypeEffective() {
    // ガチャの設定を取得
    await getSetting();

    const pointEffectiveSuper = effectiveSuper / 1;
    const pointEffectiveNotVery = 1 / effectiveNotVery;
    const pointEffectiveNot = 1 / effectiveNot;

    setElem("effectiveSuper", effectiveSuper + "(×" + pointEffectiveSuper + ")");
    setElem("effectiveNotVery", effectiveNotVery + "(×" + pointEffectiveNotVery + ")");
    setElem("effectiveNot", effectiveNot + "(×" + pointEffectiveNot + ")");

    // テーブルを取得
    const tableList = document.getElementById("tableTypeEffectiveList");

    // 表に行を追加
    let tr = tableList.insertRow(-1);
    
    let listTypeData = [];

    for (let i = 0;  i < numType; i++) {
        let type1Res = await fetch("https://pokeapi.co/api/v2/type/" + (i + 1));
        let type1Data = await type1Res.json();

        // タイプの名前を取得
        let type1Name = await getTypeNameJpn(type1Data['name']);

        // タイプ名を表示
        let td0List = tr.insertCell(-1);
        td0List.innerHTML = type1Name;
        td0List.classList.add("typeEffectiveTd0");

        let double_damage_from = await getTypeEffectiveList(type1Data, "double_damage_from");
        let double_damage_to = await getTypeEffectiveList(type1Data, "double_damage_to");
        let half_damage_from = await getTypeEffectiveList(type1Data, "half_damage_from");
        let half_damage_to = await getTypeEffectiveList(type1Data, "half_damage_to");
        let no_damage_from = await getTypeEffectiveList(type1Data, "no_damage_from");
        let no_damage_to = await getTypeEffectiveList(type1Data, "no_damage_to");

        let point = - double_damage_from.length * pointEffectiveSuper + double_damage_to.length * pointEffectiveSuper + half_damage_from.length * pointEffectiveNotVery - half_damage_to.length * pointEffectiveNotVery + no_damage_from.length * pointEffectiveNot - no_damage_to.length * pointEffectiveNot;

        let typeClacList = await typeCalc(double_damage_to, half_damage_to, no_damage_to, double_damage_from, half_damage_from, no_damage_from);

        listTypeData.push([type1Name, point, typeClacList]);
    }

    for (let i = 0;  i < numType; i++) {
        for(j = i + 1; j < numType; j++) {
            let type1Res = await fetch("https://pokeapi.co/api/v2/type/" + (i + 1));
            let type1Data = await type1Res.json();

            // タイプの名前を取得
            let type1Name = await getTypeNameJpn(type1Data['name']);

            let double_damage_from = await getTypeEffectiveList(type1Data, "double_damage_from");
            let double_damage_to = await getTypeEffectiveList(type1Data, "double_damage_to");
            let half_damage_from = await getTypeEffectiveList(type1Data, "half_damage_from");
            let half_damage_to = await getTypeEffectiveList(type1Data, "half_damage_to");
            let no_damage_from = await getTypeEffectiveList(type1Data, "no_damage_from");
            let no_damage_to = await getTypeEffectiveList(type1Data, "no_damage_to");

            

            let type2Res = await fetch("https://pokeapi.co/api/v2/type/" + (j + 1));
            let type2Data = await type2Res.json();

            // タイプの名前を取得
            let type2Name = await getTypeNameJpn(type2Data['name']);

            double_damage_from = double_damage_from.concat(await getTypeEffectiveList(type2Data, "double_damage_from"));
            double_damage_to = double_damage_to.concat(await getTypeEffectiveList(type2Data, "double_damage_to"));
            half_damage_from = half_damage_from.concat(await getTypeEffectiveList(type2Data, "half_damage_from"));
            half_damage_to = half_damage_to.concat(await getTypeEffectiveList(type2Data, "half_damage_to"));
            no_damage_from = no_damage_from.concat(await getTypeEffectiveList(type2Data, "no_damage_from"));
            no_damage_to = no_damage_to.concat(await getTypeEffectiveList(type2Data, "no_damage_to"));

            point = - double_damage_from.length * pointEffectiveSuper + double_damage_to.length * pointEffectiveSuper + half_damage_from.length * pointEffectiveNotVery - half_damage_to.length * pointEffectiveNotVery + no_damage_from.length * pointEffectiveNot - no_damage_to.length * pointEffectiveNot;

            let typeClacList = await typeCalc(double_damage_to, half_damage_to, no_damage_to, double_damage_from, half_damage_from, no_damage_from);

            listTypeData.push([type1Name + "/<br>" + type2Name, point, typeClacList]);
        }
    }

    // データを並び替え
    listTypeData.sort(function(a,b){
        // 得点が高い順
        if(a[1] > b[1]) return -1;
        if(a[1] < b[1]) return 1;
        return 0;
    });

    for (let i = 0; i < listTypeData.length; i++) {
        // 表に行を追加
        tr = tableList.insertRow(-1);

        // タイプ名を表示
        let td1List = tr.insertCell(-1);
        td1List.innerHTML = listTypeData[i][0];
        td1List.classList.add("typeEffectiveTd1");
        // 得点を表示
        let td2List = tr.insertCell(-1);
        td2List.innerHTML = listTypeData[i][1];
        td2List.classList.add("typeEffectiveTd2");

        for (let j = 0; j < listTypeData[i][2].length; j++) {
            let typePoint = (listTypeData[i][2][j]["damage_to"] / listTypeData[i][2][j]["damage_from"]).toLocaleString(undefined, {maximumFractionDigits: 3});
            let typeEffective = typePoint + "<br>(" + listTypeData[i][2][j]["damage_to"] + "/<br>" + listTypeData[i][2][j]["damage_from"] + ")";

            // 得点を表示
            let td3List = tr.insertCell(-1);
            td3List.innerHTML = typeEffective;
            td3List.classList.add("typeEffectiveTd3");

            if (typePoint >= 10) {
                td3List.style.backgroundColor = "#ffcccc";
            } else if (typePoint >= 4) {
                td3List.style.backgroundColor = "#ffe5cc";
            } else if (typePoint >= 2) {
                td3List.style.backgroundColor = "#ffffcc";
            } else if (typePoint > 1) {
                td3List.style.backgroundColor = "#e5ffcc";
            } else if (typePoint == 1) {
                td3List.style.backgroundColor = "#ccffcc";
            } else if (typePoint >= 0.5) {
                td3List.style.backgroundColor = "#ccffe5";
            } else if (typePoint >= 0.25) {
                td3List.style.backgroundColor = "#ccffff";
            } else if (typePoint >= 0.25) {
                td3List.style.backgroundColor = "#cce5ff";
            }else {
                td3List.style.backgroundColor = "#cce5ff";
            }
        }
    }
}

async function getTypeEffectiveList(typeData, id) {
    let typeEffectiveList = [];
    // タイプの名前を取得
    for (let j = 0; j < typeData["damage_relations"][id].length; j++) {
        let typeName = typeData["damage_relations"][id][j]["name"];
        typeEffectiveList.push(typeName);
    }
    return typeEffectiveList;
}

async function getTypeNameJpn(typeName) {
    let typeNameJpn;

    let typeRes = await fetch("https://pokeapi.co/api/v2/type/" + typeName);
    let typeData = await typeRes.json();
    // タイプの名前を取得
    for (let i = 0; i < typeData['names'].length; i++) {
        // 日本語の名前を検索
        if (typeData['names'][i]['language']['name'] == "ja") {
            typeNameJpn = (typeData['names'][i]["name"]);
            break;
        }
    }
    return typeNameJpn;
}

async function typeCalc(double_damage_to, half_damage_to, no_damage_to, double_damage_from, half_damage_from, no_damage_from) {
    let typeClacList = []; 
    for (let i = 0;  i < numType; i++) {

        let typeRes = await fetch("https://pokeapi.co/api/v2/type/" + (i + 1));
        let typeData = await typeRes.json();
        // タイプの名前を取得
        let typeName = typeData['name'];

        let damage_to = 1;
        for (let j = 0;  j < double_damage_to.length; j++) {
            if(double_damage_to[j] == typeName) {
                damage_to = damage_to * effectiveSuper;
            }
        }
        for (let j = 0;  j < half_damage_to.length; j++) {
            if(half_damage_to[j] == typeName) {
                damage_to = damage_to * effectiveNotVery;
            }
        }
        for (let j = 0;  j < no_damage_to.length; j++) {
            if(no_damage_to[j] == typeName) {
                damage_to = damage_to * effectiveNot;
            }
        }

        let damage_from = 1;
        for (let j = 0;  j < double_damage_from.length; j++) {
            if(double_damage_from[j] == typeName) {
                damage_from = damage_from * effectiveSuper;
            }
        }
        for (let j = 0;  j < half_damage_from.length; j++) {
            if(half_damage_from[j] == typeName) {
                damage_from = damage_from * effectiveNotVery;
            }
        }
        for (let j = 0;  j < no_damage_from.length; j++) {
            if(no_damage_from[j] == typeName) {
                damage_from = damage_from * effectiveNot;
            }
        }

        typeClacList[i] = {"typeName": typeName, "damage_to": damage_to.toLocaleString(undefined, {maximumFractionDigits: 3}), "damage_from": damage_from.toLocaleString(undefined, {maximumFractionDigits: 3})};
    }

    return typeClacList;
}



displayTypeEffective();