// input要素
const sliderExpFront = document.getElementById("sliderExpFront");

// 埋め込む先の要素
const valueSliderExpFront = document.getElementById("valueExpFront");

// 現在の値を埋め込む関数
const setCurrentValue = (val) => {
  valueSliderExpFront.innerText = parseFloat(val).toFixed(3);
}

// inputイベント時に値をセットする関数
const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

window.onload = () => {
  // 変更に合わせてイベントを発火する
  sliderExpFront.addEventListener('input', rangeOnChange);
  // ページ読み込み時の値をセット
  setCurrentValue(sliderExpFront.value);
}