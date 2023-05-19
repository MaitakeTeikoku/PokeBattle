var dataChart;


// ranking.htmlが開かれたときに実行する関数
async function displayChart() {
    setElem("info", "読み込み中...");

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "chart");

    // 設定を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        dataChart = data;
        // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
        google.load('visualization', '1', {'packages':['corechart']});       
        // グラフを描画する為のコールバック関数を指定
        google.setOnLoadCallback(drawChart);
    })
    .catch(error => {
        setElem("info", error);
    });
}



// グラフの描画   
function drawChart() {  
    // 配列からデータの生成
    const dataSrc = google.visualization.arrayToDataTable(dataChart);

    // オプションの設定
    const options = {
    title: '経験値の推移'
    };     
            
    // 指定されたIDの要素に折れ線グラフを作成
    const chart = new google.visualization.LineChart(document.getElementById('chart'));
    
    // グラフの描画
    chart.draw(dataSrc, options);

    setElem("info", "読み込み完了！");
}


displayChart();