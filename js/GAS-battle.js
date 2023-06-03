// バトルする関数
function battle(numDexBack, expBack, valueExpFront) {
    // 選択したポケモンの情報を取得
    const pokeBack = getPoke(numDexBack);
    // タイプ取得
    const type1Back = pokeBack["types"][0];
    let type2Back = null;
    if (pokeBack["types"][0] != pokeBack["types"][1]) {
        type2Back = pokeBack["types"][1];
    }
    // 種族値取得
    const statsBack = pokeBack["stats"];

    // 野生のポケモン生成
    const numDexFront = intRandom(1, dexRange);

    // 経験値の乱数
    const expFront = valueExpFront * intRandom(85, 100) / 100
    // 野生のポケモンの情報を取得
    const pokeFront = getPoke(numDexFront);
    // タイプ取得
    const type1Front = pokeFront["types"][0];
    let type2Front = null;
    if (pokeFront["types"][0] != pokeFront["types"][1]) {
        type2Front = pokeFront["types"][1];
    }
    // 種族値取得
    const statsFront = pokeFront["stats"];

    // タイプ相性を計算
    const [typeEffectiveBack, typeEffectiveFront] = typeCalc(type1Back, type2Back, type1Front, type2Front);

    // 手持ちのポケモンのステータス計算
    const statsSumBack = Math.floor(statsBack * expBack * typeEffectiveBack);

    // 野生のポケモンのステータス計算
    const statsSumFront = Math.floor(statsFront * expFront * typeEffectiveFront);

    // 獲得経験値
    const statsSub = statsBack * expBack - statsFront * expFront;
    // 指数関数：y = ( e ^ -1/500 x + 4 ) / 1000
    let expAdd = (Math.exp(statsSub / -500 + 4)) / 1000;

    // 引き分け
    let infoBattle = 0;
    // 勝ち
    if (statsSumBack > statsSumFront) {
        infoBattle = 1;    
    // 負け
    } else if (statsSumBack < statsSumFront) {
        infoBattle = -1;
        expAdd = - (statsBack / 10000);
    }
    
    // 新しい経験値
    const expBackUpdate = Math.min(Math.max(expBack + floorDecimal(expAdd, 3), expBackMin), expBackMax);

    // タイプ相性
    const typeEffective = typeEffectiveBack / typeEffectiveFront;
    return [infoBattle, expBackUpdate, typeEffective];

}

// タイプ相性を計算する関数
function typeCalc(type1Back, type2Back, type1Front, type2Front) {
    // 自分側のタイプ相性を取得
    let typeEffectiveBack = 1;
    // 相手側のタイプ相性を取得
    let typeEffectiveFront = 1;

    // タイプ1の情報を取得
    const dataType1Back = getType(type1Back);
    // 自分側の相性
    // ばつぐん
    for (let i = 0; i < dataType1Back['damage_relations']['double_damage_to'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['double_damage_to'][i]['name'] || type2Front == dataType1Back['damage_relations']['double_damage_to'][i]['name']) {
            typeEffectiveBack *= effectiveSuper;
        }
    }
    // いまひとつ
    for (let i = 0; i < dataType1Back['damage_relations']['half_damage_to'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['half_damage_to'][i]['name'] || type2Front == dataType1Back['damage_relations']['half_damage_to'][i]['name']) {
            typeEffectiveBack *= effectiveNotVery;
        }
    }
    // こうかなし
    for (let i = 0; i < dataType1Back['damage_relations']['no_damage_to'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['no_damage_to'][i]['name'] || type2Front == dataType1Back['damage_relations']['no_damage_to'][i]['name']) {
            typeEffectiveBack *= effectiveNot;
        }
    }
    // 相手側の相性
    // ばつぐん
    for (let i = 0; i < dataType1Back['damage_relations']['double_damage_from'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['double_damage_from'][i]['name'] || type2Front == dataType1Back['damage_relations']['double_damage_from'][i]['name']) {
            typeEffectiveFront *= effectiveSuper;
        }
    }
    // いまひとつ
    for (let i = 0; i < dataType1Back['damage_relations']['half_damage_from'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['half_damage_from'][i]['name'] || type2Front == dataType1Back['damage_relations']['half_damage_from'][i]['name']) {
            typeEffectiveFront *= effectiveNotVery;
        }
    }
    // こうかなし
    for (let i = 0; i < dataType1Back['damage_relations']['no_damage_from'].length; i++) {
        if (type1Front == dataType1Back['damage_relations']['no_damage_from'][i]['name'] || type2Front == dataType1Back['damage_relations']['no_damage_from'][i]['name']) {
            typeEffectiveFront *= effectiveNot;
        }
    }

    // タイプ2があるとき
    if (type2Back != null) {
        // タイプ2の情報を取得
        const dataType2Back = getType(type2Back);
        // 自分側の相性
        // ばつぐん
        for (let i = 0; i < dataType2Back['damage_relations']['double_damage_to'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['double_damage_to'][i]['name'] || type2Front == dataType2Back['damage_relations']['double_damage_to'][i]['name']) {
                typeEffectiveBack *= effectiveSuper;
            }
        }
        // いまひとつ
        for (let i = 0; i < dataType2Back['damage_relations']['half_damage_to'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['half_damage_to'][i]['name'] || type2Front == dataType2Back['damage_relations']['half_damage_to'][i]['name']) {
                typeEffectiveBack *= effectiveNotVery;
            }
        }
        // こうかなし
        for (let i = 0; i < dataType2Back['damage_relations']['no_damage_to'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['no_damage_to'][i]['name'] || type2Front == dataType2Back['damage_relations']['no_damage_to'][i]['name']) {
                typeEffectiveBack *= effectiveNot;
            }
        }
        // 相手側の相性
        // ばつぐん
        for (let i = 0; i < dataType2Back['damage_relations']['double_damage_from'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['double_damage_from'][i]['name'] || type2Front == dataType2Back['damage_relations']['double_damage_from'][i]['name']) {
                typeEffectiveFront *= effectiveSuper;
            }
        }
        // いまひとつ
        for (let i = 0; i < dataType2Back['damage_relations']['half_damage_from'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['half_damage_from'][i]['name'] || type2Front == dataType2Back['damage_relations']['half_damage_from'][i]['name']) {
                typeEffectiveFront *= effectiveNotVery;
            }
        }
        // こうかなし
        for (let i = 0; i < dataType2Back['damage_relations']['no_damage_from'].length; i++) {
            if (type1Front == dataType2Back['damage_relations']['no_damage_from'][i]['name'] || type2Front == dataType2Back['damage_relations']['no_damage_from'][i]['name']) {
                typeEffectiveFront *= effectiveNot;
            }
        }
    }

    return [typeEffectiveBack, typeEffectiveFront];
}