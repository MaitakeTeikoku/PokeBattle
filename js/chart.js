const listUserName = ["NPC-status-s", "NPC-status-w", "NPC-type-s", "NPC-type-w"];
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
        dataChart = data.concat();
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
    for (let i = 0;  i < listUserName.length; ++i) {
        var dataChartSelect = JSON.parse(JSON.stringify(dataChart));
        console.log(dataChart);
        switch (listUserName[i]) {
            case "NPC-status-s":
                for (let j = 0;  j < dataChartSelect.length; ++j) {
                    dataChartSelect[j].splice(7);
                }
                break;

            case "NPC-status-w":
                for (let j = 0;  j < dataChartSelect.length; ++j) {
                    dataChartSelect[j].splice(1,6);
                    dataChartSelect[j].splice(7);
                }
                break;

            case "NPC-type-s":
                for (let j = 0;  j < dataChartSelect.length; ++j) {
                    dataChartSelect[j].splice(1,12);
                    dataChartSelect[j].splice(7);
                }
                break;

            case "NPC-type-w":
                for (let j = 0;  j < dataChartSelect.length; ++j) {
                    dataChartSelect[j].splice(1,18);
                }
                break;

            default:
        }
        // 配列からデータの生成
        const dataSrc = google.visualization.arrayToDataTable(dataChartSelect);

        // オプションの設定
        const options = {
            title: listUserName[i],
            legend: {
                position: 'top',
                textStyle: {fontSize:15}
            },
            vAxis: {
                title: '経験値',
                minValue:0,
                maxValue:10
            },
            hAxis: {
                title: '経過日数',
                minValue:0,
                format: "####",
            }
        };     
                
        // 指定されたIDの要素に折れ線グラフを作成
        const chart = new google.visualization.LineChart(document.getElementById(listUserName[i]));
        
        // グラフの描画
        chart.draw(dataSrc, options);
    }

    setElem("info", "読み込み完了！");
}


displayChart();