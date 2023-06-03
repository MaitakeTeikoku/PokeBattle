// min以上max以下の整数値の乱数を返す関数
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 小数点を切り捨てる関数
function floorDecimal(num, digit) {
    return Math.floor(num * (10 ** digit)) / (10 ** digit);
}