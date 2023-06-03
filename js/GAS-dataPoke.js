// ポケモンの情報を取得
function getPoke(numDex) {

    const dataPoke = {
        "0001": {
            "name": "フシギダネ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 318
        },
        "0002": {
            "name": "フシギソウ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 405
        },
        "0003": {
            "name": "フシギバナ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 525
        },
        "0004": {
            "name": "ヒトカゲ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 309
        },
        "0005": {
            "name": "リザード",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 405
        },
        "0006": {
            "name": "リザードン",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 534
        },
        "0007": {
            "name": "ゼニガメ",
            "types": [
                "water",
                "water"
            ],
            "stats": 314
        },
        "0008": {
            "name": "カメール",
            "types": [
                "water",
                "water"
            ],
            "stats": 405
        },
        "0009": {
            "name": "カメックス",
            "types": [
                "water",
                "water"
            ],
            "stats": 530
        },
        "0010": {
            "name": "キャタピー",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 195
        },
        "0011": {
            "name": "トランセル",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 205
        },
        "0012": {
            "name": "バタフリー",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 395
        },
        "0013": {
            "name": "ビードル",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 195
        },
        "0014": {
            "name": "コクーン",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 205
        },
        "0015": {
            "name": "スピアー",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 395
        },
        "0016": {
            "name": "ポッポ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 251
        },
        "0017": {
            "name": "ピジョン",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 349
        },
        "0018": {
            "name": "ピジョット",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 479
        },
        "0019": {
            "name": "コラッタ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 253
        },
        "0020": {
            "name": "ラッタ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 413
        },
        "0021": {
            "name": "オニスズメ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 262
        },
        "0022": {
            "name": "オニドリル",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 442
        },
        "0023": {
            "name": "アーボ",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 288
        },
        "0024": {
            "name": "アーボック",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 448
        },
        "0025": {
            "name": "ピカチュウ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 320
        },
        "0026": {
            "name": "ライチュウ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 485
        },
        "0027": {
            "name": "サンド",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 300
        },
        "0028": {
            "name": "サンドパン",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 450
        },
        "0029": {
            "name": "ニドラン♀",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 275
        },
        "0030": {
            "name": "ニドリーナ",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 365
        },
        "0031": {
            "name": "ニドクイン",
            "types": [
                "poison",
                "ground"
            ],
            "stats": 505
        },
        "0032": {
            "name": "ニドラン♂",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 273
        },
        "0033": {
            "name": "ニドリーノ",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 365
        },
        "0034": {
            "name": "ニドキング",
            "types": [
                "poison",
                "ground"
            ],
            "stats": 505
        },
        "0035": {
            "name": "ピッピ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 323
        },
        "0036": {
            "name": "ピクシー",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 483
        },
        "0037": {
            "name": "ロコン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 299
        },
        "0038": {
            "name": "キュウコン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 505
        },
        "0039": {
            "name": "プリン",
            "types": [
                "normal",
                "fairy"
            ],
            "stats": 270
        },
        "0040": {
            "name": "プクリン",
            "types": [
                "normal",
                "fairy"
            ],
            "stats": 435
        },
        "0041": {
            "name": "ズバット",
            "types": [
                "poison",
                "flying"
            ],
            "stats": 245
        },
        "0042": {
            "name": "ゴルバット",
            "types": [
                "poison",
                "flying"
            ],
            "stats": 455
        },
        "0043": {
            "name": "ナゾノクサ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 320
        },
        "0044": {
            "name": "クサイハナ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 395
        },
        "0045": {
            "name": "ラフレシア",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 490
        },
        "0046": {
            "name": "パラス",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 285
        },
        "0047": {
            "name": "パラセクト",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 405
        },
        "0048": {
            "name": "コンパン",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 305
        },
        "0049": {
            "name": "モルフォン",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 450
        },
        "0050": {
            "name": "ディグダ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 265
        },
        "0051": {
            "name": "ダグトリオ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 425
        },
        "0052": {
            "name": "ニャース",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 290
        },
        "0053": {
            "name": "ペルシアン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 440
        },
        "0054": {
            "name": "コダック",
            "types": [
                "water",
                "water"
            ],
            "stats": 320
        },
        "0055": {
            "name": "ゴルダック",
            "types": [
                "water",
                "water"
            ],
            "stats": 500
        },
        "0056": {
            "name": "マンキー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 305
        },
        "0057": {
            "name": "オコリザル",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 455
        },
        "0058": {
            "name": "ガーディ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 350
        },
        "0059": {
            "name": "ウインディ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 555
        },
        "0060": {
            "name": "ニョロモ",
            "types": [
                "water",
                "water"
            ],
            "stats": 300
        },
        "0061": {
            "name": "ニョロゾ",
            "types": [
                "water",
                "water"
            ],
            "stats": 385
        },
        "0062": {
            "name": "ニョロボン",
            "types": [
                "water",
                "fighting"
            ],
            "stats": 510
        },
        "0063": {
            "name": "ケーシィ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 310
        },
        "0064": {
            "name": "ユンゲラー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 400
        },
        "0065": {
            "name": "フーディン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 500
        },
        "0066": {
            "name": "ワンリキー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 305
        },
        "0067": {
            "name": "ゴーリキー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 405
        },
        "0068": {
            "name": "カイリキー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 505
        },
        "0069": {
            "name": "マダツボミ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 300
        },
        "0070": {
            "name": "ウツドン",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 390
        },
        "0071": {
            "name": "ウツボット",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 490
        },
        "0072": {
            "name": "メノクラゲ",
            "types": [
                "water",
                "poison"
            ],
            "stats": 335
        },
        "0073": {
            "name": "ドククラゲ",
            "types": [
                "water",
                "poison"
            ],
            "stats": 515
        },
        "0074": {
            "name": "イシツブテ",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 300
        },
        "0075": {
            "name": "ゴローン",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 390
        },
        "0076": {
            "name": "ゴローニャ",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 495
        },
        "0077": {
            "name": "ポニータ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 410
        },
        "0078": {
            "name": "ギャロップ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 500
        },
        "0079": {
            "name": "ヤドン",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 315
        },
        "0080": {
            "name": "ヤドラン",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 490
        },
        "0081": {
            "name": "コイル",
            "types": [
                "electric",
                "steel"
            ],
            "stats": 325
        },
        "0082": {
            "name": "レアコイル",
            "types": [
                "electric",
                "steel"
            ],
            "stats": 465
        },
        "0083": {
            "name": "カモネギ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 377
        },
        "0084": {
            "name": "ドードー",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 310
        },
        "0085": {
            "name": "ドードリオ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 470
        },
        "0086": {
            "name": "パウワウ",
            "types": [
                "water",
                "water"
            ],
            "stats": 325
        },
        "0087": {
            "name": "ジュゴン",
            "types": [
                "water",
                "ice"
            ],
            "stats": 475
        },
        "0088": {
            "name": "ベトベター",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 325
        },
        "0089": {
            "name": "ベトベトン",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 500
        },
        "0090": {
            "name": "シェルダー",
            "types": [
                "water",
                "water"
            ],
            "stats": 305
        },
        "0091": {
            "name": "パルシェン",
            "types": [
                "water",
                "ice"
            ],
            "stats": 525
        },
        "0092": {
            "name": "ゴース",
            "types": [
                "ghost",
                "poison"
            ],
            "stats": 310
        },
        "0093": {
            "name": "ゴースト",
            "types": [
                "ghost",
                "poison"
            ],
            "stats": 405
        },
        "0094": {
            "name": "ゲンガー",
            "types": [
                "ghost",
                "poison"
            ],
            "stats": 500
        },
        "0095": {
            "name": "イワーク",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 385
        },
        "0096": {
            "name": "スリープ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 328
        },
        "0097": {
            "name": "スリーパー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 483
        },
        "0098": {
            "name": "クラブ",
            "types": [
                "water",
                "water"
            ],
            "stats": 325
        },
        "0099": {
            "name": "キングラー",
            "types": [
                "water",
                "water"
            ],
            "stats": 475
        },
        "0100": {
            "name": "ビリリダマ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 330
        },
        "0101": {
            "name": "マルマイン",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 490
        },
        "0102": {
            "name": "タマタマ",
            "types": [
                "grass",
                "psychic"
            ],
            "stats": 325
        },
        "0103": {
            "name": "ナッシー",
            "types": [
                "grass",
                "psychic"
            ],
            "stats": 530
        },
        "0104": {
            "name": "カラカラ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 320
        },
        "0105": {
            "name": "ガラガラ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 425
        },
        "0106": {
            "name": "サワムラー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 455
        },
        "0107": {
            "name": "エビワラー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 455
        },
        "0108": {
            "name": "ベロリンガ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 385
        },
        "0109": {
            "name": "ドガース",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 340
        },
        "0110": {
            "name": "マタドガス",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 490
        },
        "0111": {
            "name": "サイホーン",
            "types": [
                "ground",
                "rock"
            ],
            "stats": 345
        },
        "0112": {
            "name": "サイドン",
            "types": [
                "ground",
                "rock"
            ],
            "stats": 485
        },
        "0113": {
            "name": "ラッキー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 450
        },
        "0114": {
            "name": "モンジャラ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 435
        },
        "0115": {
            "name": "ガルーラ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0116": {
            "name": "タッツー",
            "types": [
                "water",
                "water"
            ],
            "stats": 295
        },
        "0117": {
            "name": "シードラ",
            "types": [
                "water",
                "water"
            ],
            "stats": 440
        },
        "0118": {
            "name": "トサキント",
            "types": [
                "water",
                "water"
            ],
            "stats": 320
        },
        "0119": {
            "name": "アズマオウ",
            "types": [
                "water",
                "water"
            ],
            "stats": 450
        },
        "0120": {
            "name": "ヒトデマン",
            "types": [
                "water",
                "water"
            ],
            "stats": 340
        },
        "0121": {
            "name": "スターミー",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 520
        },
        "0122": {
            "name": "バリヤード",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 460
        },
        "0123": {
            "name": "ストライク",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 500
        },
        "0124": {
            "name": "ルージュラ",
            "types": [
                "ice",
                "psychic"
            ],
            "stats": 455
        },
        "0125": {
            "name": "エレブー",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 490
        },
        "0126": {
            "name": "ブーバー",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 495
        },
        "0127": {
            "name": "カイロス",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 500
        },
        "0128": {
            "name": "ケンタロス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0129": {
            "name": "コイキング",
            "types": [
                "water",
                "water"
            ],
            "stats": 200
        },
        "0130": {
            "name": "ギャラドス",
            "types": [
                "water",
                "flying"
            ],
            "stats": 540
        },
        "0131": {
            "name": "ラプラス",
            "types": [
                "water",
                "ice"
            ],
            "stats": 535
        },
        "0132": {
            "name": "メタモン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 288
        },
        "0133": {
            "name": "イーブイ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 325
        },
        "0134": {
            "name": "シャワーズ",
            "types": [
                "water",
                "water"
            ],
            "stats": 525
        },
        "0135": {
            "name": "サンダース",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 525
        },
        "0136": {
            "name": "ブースター",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 525
        },
        "0137": {
            "name": "ポリゴン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 395
        },
        "0138": {
            "name": "オムナイト",
            "types": [
                "rock",
                "water"
            ],
            "stats": 355
        },
        "0139": {
            "name": "オムスター",
            "types": [
                "rock",
                "water"
            ],
            "stats": 495
        },
        "0140": {
            "name": "カブト",
            "types": [
                "rock",
                "water"
            ],
            "stats": 355
        },
        "0141": {
            "name": "カブトプス",
            "types": [
                "rock",
                "water"
            ],
            "stats": 495
        },
        "0142": {
            "name": "プテラ",
            "types": [
                "rock",
                "flying"
            ],
            "stats": 515
        },
        "0143": {
            "name": "カビゴン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 540
        },
        "0144": {
            "name": "フリーザー",
            "types": [
                "ice",
                "flying"
            ],
            "stats": 580
        },
        "0145": {
            "name": "サンダー",
            "types": [
                "electric",
                "flying"
            ],
            "stats": 580
        },
        "0146": {
            "name": "ファイヤー",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 580
        },
        "0147": {
            "name": "ミニリュウ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 300
        },
        "0148": {
            "name": "ハクリュー",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 420
        },
        "0149": {
            "name": "カイリュー",
            "types": [
                "dragon",
                "flying"
            ],
            "stats": 600
        },
        "0150": {
            "name": "ミュウツー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 680
        },
        "0151": {
            "name": "ミュウ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 600
        },
        "0152": {
            "name": "チコリータ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 318
        },
        "0153": {
            "name": "ベイリーフ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 405
        },
        "0154": {
            "name": "メガニウム",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 525
        },
        "0155": {
            "name": "ヒノアラシ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 309
        },
        "0156": {
            "name": "マグマラシ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 405
        },
        "0157": {
            "name": "バクフーン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 534
        },
        "0158": {
            "name": "ワニノコ",
            "types": [
                "water",
                "water"
            ],
            "stats": 314
        },
        "0159": {
            "name": "アリゲイツ",
            "types": [
                "water",
                "water"
            ],
            "stats": 405
        },
        "0160": {
            "name": "オーダイル",
            "types": [
                "water",
                "water"
            ],
            "stats": 530
        },
        "0161": {
            "name": "オタチ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 215
        },
        "0162": {
            "name": "オオタチ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 415
        },
        "0163": {
            "name": "ホーホー",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 262
        },
        "0164": {
            "name": "ヨルノズク",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 452
        },
        "0165": {
            "name": "レディバ",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 265
        },
        "0166": {
            "name": "レディアン",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 390
        },
        "0167": {
            "name": "イトマル",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 250
        },
        "0168": {
            "name": "アリアドス",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 400
        },
        "0169": {
            "name": "クロバット",
            "types": [
                "poison",
                "flying"
            ],
            "stats": 535
        },
        "0170": {
            "name": "チョンチー",
            "types": [
                "water",
                "electric"
            ],
            "stats": 330
        },
        "0171": {
            "name": "ランターン",
            "types": [
                "water",
                "electric"
            ],
            "stats": 460
        },
        "0172": {
            "name": "ピチュー",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 205
        },
        "0173": {
            "name": "ピィ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 218
        },
        "0174": {
            "name": "ププリン",
            "types": [
                "normal",
                "fairy"
            ],
            "stats": 210
        },
        "0175": {
            "name": "トゲピー",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 245
        },
        "0176": {
            "name": "トゲチック",
            "types": [
                "fairy",
                "flying"
            ],
            "stats": 405
        },
        "0177": {
            "name": "ネイティ",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 320
        },
        "0178": {
            "name": "ネイティオ",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 470
        },
        "0179": {
            "name": "メリープ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 280
        },
        "0180": {
            "name": "モココ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 365
        },
        "0181": {
            "name": "デンリュウ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 510
        },
        "0182": {
            "name": "キレイハナ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 490
        },
        "0183": {
            "name": "マリル",
            "types": [
                "water",
                "fairy"
            ],
            "stats": 250
        },
        "0184": {
            "name": "マリルリ",
            "types": [
                "water",
                "fairy"
            ],
            "stats": 420
        },
        "0185": {
            "name": "ウソッキー",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 410
        },
        "0186": {
            "name": "ニョロトノ",
            "types": [
                "water",
                "water"
            ],
            "stats": 500
        },
        "0187": {
            "name": "ハネッコ",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 250
        },
        "0188": {
            "name": "ポポッコ",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 340
        },
        "0189": {
            "name": "ワタッコ",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 460
        },
        "0190": {
            "name": "エイパム",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 360
        },
        "0191": {
            "name": "ヒマナッツ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 180
        },
        "0192": {
            "name": "キマワリ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 425
        },
        "0193": {
            "name": "ヤンヤンマ",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 390
        },
        "0194": {
            "name": "ウパー",
            "types": [
                "water",
                "ground"
            ],
            "stats": 210
        },
        "0195": {
            "name": "ヌオー",
            "types": [
                "water",
                "ground"
            ],
            "stats": 430
        },
        "0196": {
            "name": "エーフィ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 525
        },
        "0197": {
            "name": "ブラッキー",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 525
        },
        "0198": {
            "name": "ヤミカラス",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 405
        },
        "0199": {
            "name": "ヤドキング",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 490
        },
        "0200": {
            "name": "ムウマ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 435
        },
        "0201": {
            "name": "アンノーン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 336
        },
        "0202": {
            "name": "ソーナンス",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 405
        },
        "0203": {
            "name": "キリンリキ",
            "types": [
                "normal",
                "psychic"
            ],
            "stats": 455
        },
        "0204": {
            "name": "クヌギダマ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 290
        },
        "0205": {
            "name": "フォレトス",
            "types": [
                "bug",
                "steel"
            ],
            "stats": 465
        },
        "0206": {
            "name": "ノコッチ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 415
        },
        "0207": {
            "name": "グライガー",
            "types": [
                "ground",
                "flying"
            ],
            "stats": 430
        },
        "0208": {
            "name": "ハガネール",
            "types": [
                "steel",
                "ground"
            ],
            "stats": 510
        },
        "0209": {
            "name": "ブルー",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 300
        },
        "0210": {
            "name": "グランブル",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 450
        },
        "0211": {
            "name": "ハリーセン",
            "types": [
                "water",
                "poison"
            ],
            "stats": 440
        },
        "0212": {
            "name": "ハッサム",
            "types": [
                "bug",
                "steel"
            ],
            "stats": 500
        },
        "0213": {
            "name": "ツボツボ",
            "types": [
                "bug",
                "rock"
            ],
            "stats": 505
        },
        "0214": {
            "name": "ヘラクロス",
            "types": [
                "bug",
                "fighting"
            ],
            "stats": 500
        },
        "0215": {
            "name": "ニューラ",
            "types": [
                "dark",
                "ice"
            ],
            "stats": 430
        },
        "0216": {
            "name": "ヒメグマ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 330
        },
        "0217": {
            "name": "リングマ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 500
        },
        "0218": {
            "name": "マグマッグ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 250
        },
        "0219": {
            "name": "マグカルゴ",
            "types": [
                "fire",
                "rock"
            ],
            "stats": 430
        },
        "0220": {
            "name": "ウリムー",
            "types": [
                "ice",
                "ground"
            ],
            "stats": 250
        },
        "0221": {
            "name": "イノムー",
            "types": [
                "ice",
                "ground"
            ],
            "stats": 450
        },
        "0222": {
            "name": "サニーゴ",
            "types": [
                "water",
                "rock"
            ],
            "stats": 410
        },
        "0223": {
            "name": "テッポウオ",
            "types": [
                "water",
                "water"
            ],
            "stats": 300
        },
        "0224": {
            "name": "オクタン",
            "types": [
                "water",
                "water"
            ],
            "stats": 480
        },
        "0225": {
            "name": "デリバード",
            "types": [
                "ice",
                "flying"
            ],
            "stats": 330
        },
        "0226": {
            "name": "マンタイン",
            "types": [
                "water",
                "flying"
            ],
            "stats": 485
        },
        "0227": {
            "name": "エアームド",
            "types": [
                "steel",
                "flying"
            ],
            "stats": 465
        },
        "0228": {
            "name": "デルビル",
            "types": [
                "dark",
                "fire"
            ],
            "stats": 330
        },
        "0229": {
            "name": "ヘルガー",
            "types": [
                "dark",
                "fire"
            ],
            "stats": 500
        },
        "0230": {
            "name": "キングドラ",
            "types": [
                "water",
                "dragon"
            ],
            "stats": 540
        },
        "0231": {
            "name": "ゴマゾウ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 330
        },
        "0232": {
            "name": "ドンファン",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 500
        },
        "0233": {
            "name": "ポリゴン２",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 515
        },
        "0234": {
            "name": "オドシシ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 465
        },
        "0235": {
            "name": "ドーブル",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 250
        },
        "0236": {
            "name": "バルキー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 210
        },
        "0237": {
            "name": "カポエラー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 455
        },
        "0238": {
            "name": "ムチュール",
            "types": [
                "ice",
                "psychic"
            ],
            "stats": 305
        },
        "0239": {
            "name": "エレキッド",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 360
        },
        "0240": {
            "name": "ブビィ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 365
        },
        "0241": {
            "name": "ミルタンク",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0242": {
            "name": "ハピナス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 540
        },
        "0243": {
            "name": "ライコウ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 580
        },
        "0244": {
            "name": "エンテイ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 580
        },
        "0245": {
            "name": "スイクン",
            "types": [
                "water",
                "water"
            ],
            "stats": 580
        },
        "0246": {
            "name": "ヨーギラス",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 300
        },
        "0247": {
            "name": "サナギラス",
            "types": [
                "rock",
                "ground"
            ],
            "stats": 410
        },
        "0248": {
            "name": "バンギラス",
            "types": [
                "rock",
                "dark"
            ],
            "stats": 600
        },
        "0249": {
            "name": "ルギア",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 680
        },
        "0250": {
            "name": "ホウオウ",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 680
        },
        "0251": {
            "name": "セレビィ",
            "types": [
                "psychic",
                "grass"
            ],
            "stats": 600
        },
        "0252": {
            "name": "キモリ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 310
        },
        "0253": {
            "name": "ジュプトル",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 405
        },
        "0254": {
            "name": "ジュカイン",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 530
        },
        "0255": {
            "name": "アチャモ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 310
        },
        "0256": {
            "name": "ワカシャモ",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 405
        },
        "0257": {
            "name": "バシャーモ",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 530
        },
        "0258": {
            "name": "ミズゴロウ",
            "types": [
                "water",
                "water"
            ],
            "stats": 310
        },
        "0259": {
            "name": "ヌマクロー",
            "types": [
                "water",
                "ground"
            ],
            "stats": 405
        },
        "0260": {
            "name": "ラグラージ",
            "types": [
                "water",
                "ground"
            ],
            "stats": 535
        },
        "0261": {
            "name": "ポチエナ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 220
        },
        "0262": {
            "name": "グラエナ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 420
        },
        "0263": {
            "name": "ジグザグマ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 240
        },
        "0264": {
            "name": "マッスグマ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 420
        },
        "0265": {
            "name": "ケムッソ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 195
        },
        "0266": {
            "name": "カラサリス",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 205
        },
        "0267": {
            "name": "アゲハント",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 395
        },
        "0268": {
            "name": "マユルド",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 205
        },
        "0269": {
            "name": "ドクケイル",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 385
        },
        "0270": {
            "name": "ハスボー",
            "types": [
                "water",
                "grass"
            ],
            "stats": 220
        },
        "0271": {
            "name": "ハスブレロ",
            "types": [
                "water",
                "grass"
            ],
            "stats": 340
        },
        "0272": {
            "name": "ルンパッパ",
            "types": [
                "water",
                "grass"
            ],
            "stats": 480
        },
        "0273": {
            "name": "タネボー",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 220
        },
        "0274": {
            "name": "コノハナ",
            "types": [
                "grass",
                "dark"
            ],
            "stats": 340
        },
        "0275": {
            "name": "ダーテング",
            "types": [
                "grass",
                "dark"
            ],
            "stats": 480
        },
        "0276": {
            "name": "スバメ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 270
        },
        "0277": {
            "name": "オオスバメ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 455
        },
        "0278": {
            "name": "キャモメ",
            "types": [
                "water",
                "flying"
            ],
            "stats": 270
        },
        "0279": {
            "name": "ペリッパー",
            "types": [
                "water",
                "flying"
            ],
            "stats": 440
        },
        "0280": {
            "name": "ラルトス",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 198
        },
        "0281": {
            "name": "キルリア",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 278
        },
        "0282": {
            "name": "サーナイト",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 518
        },
        "0283": {
            "name": "アメタマ",
            "types": [
                "bug",
                "water"
            ],
            "stats": 269
        },
        "0284": {
            "name": "アメモース",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 454
        },
        "0285": {
            "name": "キノココ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 295
        },
        "0286": {
            "name": "キノガッサ",
            "types": [
                "grass",
                "fighting"
            ],
            "stats": 460
        },
        "0287": {
            "name": "ナマケロ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 280
        },
        "0288": {
            "name": "ヤルキモノ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 440
        },
        "0289": {
            "name": "ケッキング",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 670
        },
        "0290": {
            "name": "ツチニン",
            "types": [
                "bug",
                "ground"
            ],
            "stats": 266
        },
        "0291": {
            "name": "テッカニン",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 456
        },
        "0292": {
            "name": "ヌケニン",
            "types": [
                "bug",
                "ghost"
            ],
            "stats": 236
        },
        "0293": {
            "name": "ゴニョニョ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 240
        },
        "0294": {
            "name": "ドゴーム",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 360
        },
        "0295": {
            "name": "バクオング",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0296": {
            "name": "マクノシタ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 237
        },
        "0297": {
            "name": "ハリテヤマ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 474
        },
        "0298": {
            "name": "ルリリ",
            "types": [
                "normal",
                "fairy"
            ],
            "stats": 190
        },
        "0299": {
            "name": "ノズパス",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 375
        },
        "0300": {
            "name": "エネコ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 260
        },
        "0301": {
            "name": "エネコロロ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 400
        },
        "0302": {
            "name": "ヤミラミ",
            "types": [
                "dark",
                "ghost"
            ],
            "stats": 380
        },
        "0303": {
            "name": "クチート",
            "types": [
                "steel",
                "fairy"
            ],
            "stats": 380
        },
        "0304": {
            "name": "ココドラ",
            "types": [
                "steel",
                "rock"
            ],
            "stats": 330
        },
        "0305": {
            "name": "コドラ",
            "types": [
                "steel",
                "rock"
            ],
            "stats": 430
        },
        "0306": {
            "name": "ボスゴドラ",
            "types": [
                "steel",
                "rock"
            ],
            "stats": 530
        },
        "0307": {
            "name": "アサナン",
            "types": [
                "fighting",
                "psychic"
            ],
            "stats": 280
        },
        "0308": {
            "name": "チャーレム",
            "types": [
                "fighting",
                "psychic"
            ],
            "stats": 410
        },
        "0309": {
            "name": "ラクライ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 295
        },
        "0310": {
            "name": "ライボルト",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 475
        },
        "0311": {
            "name": "プラスル",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 405
        },
        "0312": {
            "name": "マイナン",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 405
        },
        "0313": {
            "name": "バルビート",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 430
        },
        "0314": {
            "name": "イルミーゼ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 430
        },
        "0315": {
            "name": "ロゼリア",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 400
        },
        "0316": {
            "name": "ゴクリン",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 302
        },
        "0317": {
            "name": "マルノーム",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 467
        },
        "0318": {
            "name": "キバニア",
            "types": [
                "water",
                "dark"
            ],
            "stats": 305
        },
        "0319": {
            "name": "サメハダー",
            "types": [
                "water",
                "dark"
            ],
            "stats": 460
        },
        "0320": {
            "name": "ホエルコ",
            "types": [
                "water",
                "water"
            ],
            "stats": 400
        },
        "0321": {
            "name": "ホエルオー",
            "types": [
                "water",
                "water"
            ],
            "stats": 500
        },
        "0322": {
            "name": "ドンメル",
            "types": [
                "fire",
                "ground"
            ],
            "stats": 305
        },
        "0323": {
            "name": "バクーダ",
            "types": [
                "fire",
                "ground"
            ],
            "stats": 460
        },
        "0324": {
            "name": "コータス",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 470
        },
        "0325": {
            "name": "バネブー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 330
        },
        "0326": {
            "name": "ブーピッグ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 470
        },
        "0327": {
            "name": "パッチール",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 360
        },
        "0328": {
            "name": "ナックラー",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 290
        },
        "0329": {
            "name": "ビブラーバ",
            "types": [
                "ground",
                "dragon"
            ],
            "stats": 340
        },
        "0330": {
            "name": "フライゴン",
            "types": [
                "ground",
                "dragon"
            ],
            "stats": 520
        },
        "0331": {
            "name": "サボネア",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 335
        },
        "0332": {
            "name": "ノクタス",
            "types": [
                "grass",
                "dark"
            ],
            "stats": 475
        },
        "0333": {
            "name": "チルット",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 310
        },
        "0334": {
            "name": "チルタリス",
            "types": [
                "dragon",
                "flying"
            ],
            "stats": 490
        },
        "0335": {
            "name": "ザングース",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 458
        },
        "0336": {
            "name": "ハブネーク",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 458
        },
        "0337": {
            "name": "ルナトーン",
            "types": [
                "rock",
                "psychic"
            ],
            "stats": 460
        },
        "0338": {
            "name": "ソルロック",
            "types": [
                "rock",
                "psychic"
            ],
            "stats": 460
        },
        "0339": {
            "name": "ドジョッチ",
            "types": [
                "water",
                "ground"
            ],
            "stats": 288
        },
        "0340": {
            "name": "ナマズン",
            "types": [
                "water",
                "ground"
            ],
            "stats": 468
        },
        "0341": {
            "name": "ヘイガニ",
            "types": [
                "water",
                "water"
            ],
            "stats": 308
        },
        "0342": {
            "name": "シザリガー",
            "types": [
                "water",
                "dark"
            ],
            "stats": 468
        },
        "0343": {
            "name": "ヤジロン",
            "types": [
                "ground",
                "psychic"
            ],
            "stats": 300
        },
        "0344": {
            "name": "ネンドール",
            "types": [
                "ground",
                "psychic"
            ],
            "stats": 500
        },
        "0345": {
            "name": "リリーラ",
            "types": [
                "rock",
                "grass"
            ],
            "stats": 355
        },
        "0346": {
            "name": "ユレイドル",
            "types": [
                "rock",
                "grass"
            ],
            "stats": 495
        },
        "0347": {
            "name": "アノプス",
            "types": [
                "rock",
                "bug"
            ],
            "stats": 355
        },
        "0348": {
            "name": "アーマルド",
            "types": [
                "rock",
                "bug"
            ],
            "stats": 495
        },
        "0349": {
            "name": "ヒンバス",
            "types": [
                "water",
                "water"
            ],
            "stats": 200
        },
        "0350": {
            "name": "ミロカロス",
            "types": [
                "water",
                "water"
            ],
            "stats": 540
        },
        "0351": {
            "name": "ポワルン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 420
        },
        "0352": {
            "name": "カクレオン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 440
        },
        "0353": {
            "name": "カゲボウズ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 295
        },
        "0354": {
            "name": "ジュペッタ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 455
        },
        "0355": {
            "name": "ヨマワル",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 295
        },
        "0356": {
            "name": "サマヨール",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 455
        },
        "0357": {
            "name": "トロピウス",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 460
        },
        "0358": {
            "name": "チリーン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 455
        },
        "0359": {
            "name": "アブソル",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 465
        },
        "0360": {
            "name": "ソーナノ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 260
        },
        "0361": {
            "name": "ユキワラシ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 300
        },
        "0362": {
            "name": "オニゴーリ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 480
        },
        "0363": {
            "name": "タマザラシ",
            "types": [
                "ice",
                "water"
            ],
            "stats": 290
        },
        "0364": {
            "name": "トドグラー",
            "types": [
                "ice",
                "water"
            ],
            "stats": 410
        },
        "0365": {
            "name": "トドゼルガ",
            "types": [
                "ice",
                "water"
            ],
            "stats": 530
        },
        "0366": {
            "name": "パールル",
            "types": [
                "water",
                "water"
            ],
            "stats": 345
        },
        "0367": {
            "name": "ハンテール",
            "types": [
                "water",
                "water"
            ],
            "stats": 485
        },
        "0368": {
            "name": "サクラビス",
            "types": [
                "water",
                "water"
            ],
            "stats": 485
        },
        "0369": {
            "name": "ジーランス",
            "types": [
                "water",
                "rock"
            ],
            "stats": 485
        },
        "0370": {
            "name": "ラブカス",
            "types": [
                "water",
                "water"
            ],
            "stats": 330
        },
        "0371": {
            "name": "タツベイ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 300
        },
        "0372": {
            "name": "コモルー",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 420
        },
        "0373": {
            "name": "ボーマンダ",
            "types": [
                "dragon",
                "flying"
            ],
            "stats": 600
        },
        "0374": {
            "name": "ダンバル",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 300
        },
        "0375": {
            "name": "メタング",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 420
        },
        "0376": {
            "name": "メタグロス",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 600
        },
        "0377": {
            "name": "レジロック",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 580
        },
        "0378": {
            "name": "レジアイス",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 580
        },
        "0379": {
            "name": "レジスチル",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 580
        },
        "0380": {
            "name": "ラティアス",
            "types": [
                "dragon",
                "psychic"
            ],
            "stats": 600
        },
        "0381": {
            "name": "ラティオス",
            "types": [
                "dragon",
                "psychic"
            ],
            "stats": 600
        },
        "0382": {
            "name": "カイオーガ",
            "types": [
                "water",
                "water"
            ],
            "stats": 670
        },
        "0383": {
            "name": "グラードン",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 670
        },
        "0384": {
            "name": "レックウザ",
            "types": [
                "dragon",
                "flying"
            ],
            "stats": 680
        },
        "0385": {
            "name": "ジラーチ",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 600
        },
        "0386": {
            "name": "デオキシス",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 600
        },
        "0387": {
            "name": "ナエトル",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 318
        },
        "0388": {
            "name": "ハヤシガメ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 405
        },
        "0389": {
            "name": "ドダイトス",
            "types": [
                "grass",
                "ground"
            ],
            "stats": 525
        },
        "0390": {
            "name": "ヒコザル",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 309
        },
        "0391": {
            "name": "モウカザル",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 405
        },
        "0392": {
            "name": "ゴウカザル",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 534
        },
        "0393": {
            "name": "ポッチャマ",
            "types": [
                "water",
                "water"
            ],
            "stats": 314
        },
        "0394": {
            "name": "ポッタイシ",
            "types": [
                "water",
                "water"
            ],
            "stats": 405
        },
        "0395": {
            "name": "エンペルト",
            "types": [
                "water",
                "steel"
            ],
            "stats": 530
        },
        "0396": {
            "name": "ムックル",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 245
        },
        "0397": {
            "name": "ムクバード",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 340
        },
        "0398": {
            "name": "ムクホーク",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 485
        },
        "0399": {
            "name": "ビッパ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 250
        },
        "0400": {
            "name": "ビーダル",
            "types": [
                "normal",
                "water"
            ],
            "stats": 410
        },
        "0401": {
            "name": "コロボーシ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 194
        },
        "0402": {
            "name": "コロトック",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 384
        },
        "0403": {
            "name": "コリンク",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 263
        },
        "0404": {
            "name": "ルクシオ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 363
        },
        "0405": {
            "name": "レントラー",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 523
        },
        "0406": {
            "name": "スボミー",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 280
        },
        "0407": {
            "name": "ロズレイド",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 515
        },
        "0408": {
            "name": "ズガイドス",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 350
        },
        "0409": {
            "name": "ラムパルド",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 495
        },
        "0410": {
            "name": "タテトプス",
            "types": [
                "rock",
                "steel"
            ],
            "stats": 350
        },
        "0411": {
            "name": "トリデプス",
            "types": [
                "rock",
                "steel"
            ],
            "stats": 495
        },
        "0412": {
            "name": "ミノムッチ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 224
        },
        "0413": {
            "name": "ミノマダム",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 424
        },
        "0414": {
            "name": "ガーメイル",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 424
        },
        "0415": {
            "name": "ミツハニー",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 244
        },
        "0416": {
            "name": "ビークイン",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 474
        },
        "0417": {
            "name": "パチリス",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 405
        },
        "0418": {
            "name": "ブイゼル",
            "types": [
                "water",
                "water"
            ],
            "stats": 330
        },
        "0419": {
            "name": "フローゼル",
            "types": [
                "water",
                "water"
            ],
            "stats": 495
        },
        "0420": {
            "name": "チェリンボ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 275
        },
        "0421": {
            "name": "チェリム",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 450
        },
        "0422": {
            "name": "カラナクシ",
            "types": [
                "water",
                "water"
            ],
            "stats": 325
        },
        "0423": {
            "name": "トリトドン",
            "types": [
                "water",
                "ground"
            ],
            "stats": 475
        },
        "0424": {
            "name": "エテボース",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 482
        },
        "0425": {
            "name": "フワンテ",
            "types": [
                "ghost",
                "flying"
            ],
            "stats": 348
        },
        "0426": {
            "name": "フワライド",
            "types": [
                "ghost",
                "flying"
            ],
            "stats": 498
        },
        "0427": {
            "name": "ミミロル",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 350
        },
        "0428": {
            "name": "ミミロップ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 480
        },
        "0429": {
            "name": "ムウマージ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 495
        },
        "0430": {
            "name": "ドンカラス",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 505
        },
        "0431": {
            "name": "ニャルマー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 310
        },
        "0432": {
            "name": "ブニャット",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 452
        },
        "0433": {
            "name": "リーシャン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 285
        },
        "0434": {
            "name": "スカンプー",
            "types": [
                "poison",
                "dark"
            ],
            "stats": 329
        },
        "0435": {
            "name": "スカタンク",
            "types": [
                "poison",
                "dark"
            ],
            "stats": 479
        },
        "0436": {
            "name": "ドーミラー",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 300
        },
        "0437": {
            "name": "ドータクン",
            "types": [
                "steel",
                "psychic"
            ],
            "stats": 500
        },
        "0438": {
            "name": "ウソハチ",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 290
        },
        "0439": {
            "name": "マネネ",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 310
        },
        "0440": {
            "name": "ピンプク",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 220
        },
        "0441": {
            "name": "ペラップ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 411
        },
        "0442": {
            "name": "ミカルゲ",
            "types": [
                "ghost",
                "dark"
            ],
            "stats": 485
        },
        "0443": {
            "name": "フカマル",
            "types": [
                "dragon",
                "ground"
            ],
            "stats": 300
        },
        "0444": {
            "name": "ガバイト",
            "types": [
                "dragon",
                "ground"
            ],
            "stats": 410
        },
        "0445": {
            "name": "ガブリアス",
            "types": [
                "dragon",
                "ground"
            ],
            "stats": 600
        },
        "0446": {
            "name": "ゴンベ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 390
        },
        "0447": {
            "name": "リオル",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 285
        },
        "0448": {
            "name": "ルカリオ",
            "types": [
                "fighting",
                "steel"
            ],
            "stats": 525
        },
        "0449": {
            "name": "ヒポポタス",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 330
        },
        "0450": {
            "name": "カバルドン",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 525
        },
        "0451": {
            "name": "スコルピ",
            "types": [
                "poison",
                "bug"
            ],
            "stats": 330
        },
        "0452": {
            "name": "ドラピオン",
            "types": [
                "poison",
                "dark"
            ],
            "stats": 500
        },
        "0453": {
            "name": "グレッグル",
            "types": [
                "poison",
                "fighting"
            ],
            "stats": 300
        },
        "0454": {
            "name": "ドクロッグ",
            "types": [
                "poison",
                "fighting"
            ],
            "stats": 490
        },
        "0455": {
            "name": "マスキッパ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 454
        },
        "0456": {
            "name": "ケイコウオ",
            "types": [
                "water",
                "water"
            ],
            "stats": 330
        },
        "0457": {
            "name": "ネオラント",
            "types": [
                "water",
                "water"
            ],
            "stats": 460
        },
        "0458": {
            "name": "タマンタ",
            "types": [
                "water",
                "flying"
            ],
            "stats": 345
        },
        "0459": {
            "name": "ユキカブリ",
            "types": [
                "grass",
                "ice"
            ],
            "stats": 334
        },
        "0460": {
            "name": "ユキノオー",
            "types": [
                "grass",
                "ice"
            ],
            "stats": 494
        },
        "0461": {
            "name": "マニューラ",
            "types": [
                "dark",
                "ice"
            ],
            "stats": 510
        },
        "0462": {
            "name": "ジバコイル",
            "types": [
                "electric",
                "steel"
            ],
            "stats": 535
        },
        "0463": {
            "name": "ベロベルト",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 515
        },
        "0464": {
            "name": "ドサイドン",
            "types": [
                "ground",
                "rock"
            ],
            "stats": 535
        },
        "0465": {
            "name": "モジャンボ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 535
        },
        "0466": {
            "name": "エレキブル",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 540
        },
        "0467": {
            "name": "ブーバーン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 540
        },
        "0468": {
            "name": "トゲキッス",
            "types": [
                "fairy",
                "flying"
            ],
            "stats": 545
        },
        "0469": {
            "name": "メガヤンマ",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 515
        },
        "0470": {
            "name": "リーフィア",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 525
        },
        "0471": {
            "name": "グレイシア",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 525
        },
        "0472": {
            "name": "グライオン",
            "types": [
                "ground",
                "flying"
            ],
            "stats": 510
        },
        "0473": {
            "name": "マンムー",
            "types": [
                "ice",
                "ground"
            ],
            "stats": 530
        },
        "0474": {
            "name": "ポリゴンＺ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 535
        },
        "0475": {
            "name": "エルレイド",
            "types": [
                "psychic",
                "fighting"
            ],
            "stats": 518
        },
        "0476": {
            "name": "ダイノーズ",
            "types": [
                "rock",
                "steel"
            ],
            "stats": 525
        },
        "0477": {
            "name": "ヨノワール",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 525
        },
        "0478": {
            "name": "ユキメノコ",
            "types": [
                "ice",
                "ghost"
            ],
            "stats": 480
        },
        "0479": {
            "name": "ロトム",
            "types": [
                "electric",
                "ghost"
            ],
            "stats": 440
        },
        "0480": {
            "name": "ユクシー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 580
        },
        "0481": {
            "name": "エムリット",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 580
        },
        "0482": {
            "name": "アグノム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 580
        },
        "0483": {
            "name": "ディアルガ",
            "types": [
                "steel",
                "dragon"
            ],
            "stats": 680
        },
        "0484": {
            "name": "パルキア",
            "types": [
                "water",
                "dragon"
            ],
            "stats": 680
        },
        "0485": {
            "name": "ヒードラン",
            "types": [
                "fire",
                "steel"
            ],
            "stats": 600
        },
        "0486": {
            "name": "レジギガス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 670
        },
        "0487": {
            "name": "ギラティナ",
            "types": [
                "ghost",
                "dragon"
            ],
            "stats": 680
        },
        "0488": {
            "name": "クレセリア",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 600
        },
        "0489": {
            "name": "フィオネ",
            "types": [
                "water",
                "water"
            ],
            "stats": 480
        },
        "0490": {
            "name": "マナフィ",
            "types": [
                "water",
                "water"
            ],
            "stats": 600
        },
        "0491": {
            "name": "ダークライ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 600
        },
        "0492": {
            "name": "シェイミ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 600
        },
        "0493": {
            "name": "アルセウス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 720
        },
        "0494": {
            "name": "ビクティニ",
            "types": [
                "psychic",
                "fire"
            ],
            "stats": 600
        },
        "0495": {
            "name": "ツタージャ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 308
        },
        "0496": {
            "name": "ジャノビー",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 413
        },
        "0497": {
            "name": "ジャローダ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 528
        },
        "0498": {
            "name": "ポカブ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 308
        },
        "0499": {
            "name": "チャオブー",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 418
        },
        "0500": {
            "name": "エンブオー",
            "types": [
                "fire",
                "fighting"
            ],
            "stats": 528
        },
        "0501": {
            "name": "ミジュマル",
            "types": [
                "water",
                "water"
            ],
            "stats": 308
        },
        "0502": {
            "name": "フタチマル",
            "types": [
                "water",
                "water"
            ],
            "stats": 413
        },
        "0503": {
            "name": "ダイケンキ",
            "types": [
                "water",
                "water"
            ],
            "stats": 528
        },
        "0504": {
            "name": "ミネズミ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 255
        },
        "0505": {
            "name": "ミルホッグ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 420
        },
        "0506": {
            "name": "ヨーテリー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 275
        },
        "0507": {
            "name": "ハーデリア",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 370
        },
        "0508": {
            "name": "ムーランド",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 500
        },
        "0509": {
            "name": "チョロネコ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 281
        },
        "0510": {
            "name": "レパルダス",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 446
        },
        "0511": {
            "name": "ヤナップ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 316
        },
        "0512": {
            "name": "ヤナッキー",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 498
        },
        "0513": {
            "name": "バオップ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 316
        },
        "0514": {
            "name": "バオッキー",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 498
        },
        "0515": {
            "name": "ヒヤップ",
            "types": [
                "water",
                "water"
            ],
            "stats": 316
        },
        "0516": {
            "name": "ヒヤッキー",
            "types": [
                "water",
                "water"
            ],
            "stats": 498
        },
        "0517": {
            "name": "ムンナ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 292
        },
        "0518": {
            "name": "ムシャーナ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 487
        },
        "0519": {
            "name": "マメパト",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 264
        },
        "0520": {
            "name": "ハトーボー",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 358
        },
        "0521": {
            "name": "ケンホロウ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 488
        },
        "0522": {
            "name": "シママ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 295
        },
        "0523": {
            "name": "ゼブライカ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 497
        },
        "0524": {
            "name": "ダンゴロ",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 280
        },
        "0525": {
            "name": "ガントル",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 390
        },
        "0526": {
            "name": "ギガイアス",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 515
        },
        "0527": {
            "name": "コロモリ",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 323
        },
        "0528": {
            "name": "ココロモリ",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 425
        },
        "0529": {
            "name": "モグリュー",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 328
        },
        "0530": {
            "name": "ドリュウズ",
            "types": [
                "ground",
                "steel"
            ],
            "stats": 508
        },
        "0531": {
            "name": "タブンネ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 445
        },
        "0532": {
            "name": "ドッコラー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 305
        },
        "0533": {
            "name": "ドテッコツ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 405
        },
        "0534": {
            "name": "ローブシン",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 505
        },
        "0535": {
            "name": "オタマロ",
            "types": [
                "water",
                "water"
            ],
            "stats": 294
        },
        "0536": {
            "name": "ガマガル",
            "types": [
                "water",
                "ground"
            ],
            "stats": 384
        },
        "0537": {
            "name": "ガマゲロゲ",
            "types": [
                "water",
                "ground"
            ],
            "stats": 509
        },
        "0538": {
            "name": "ナゲキ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 465
        },
        "0539": {
            "name": "ダゲキ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 465
        },
        "0540": {
            "name": "クルミル",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 310
        },
        "0541": {
            "name": "クルマユ",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 380
        },
        "0542": {
            "name": "ハハコモリ",
            "types": [
                "bug",
                "grass"
            ],
            "stats": 500
        },
        "0543": {
            "name": "フシデ",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 260
        },
        "0544": {
            "name": "ホイーガ",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 360
        },
        "0545": {
            "name": "ペンドラー",
            "types": [
                "bug",
                "poison"
            ],
            "stats": 485
        },
        "0546": {
            "name": "モンメン",
            "types": [
                "grass",
                "fairy"
            ],
            "stats": 280
        },
        "0547": {
            "name": "エルフーン",
            "types": [
                "grass",
                "fairy"
            ],
            "stats": 480
        },
        "0548": {
            "name": "チュリネ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 280
        },
        "0549": {
            "name": "ドレディア",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 480
        },
        "0550": {
            "name": "バスラオ",
            "types": [
                "water",
                "water"
            ],
            "stats": 460
        },
        "0551": {
            "name": "メグロコ",
            "types": [
                "ground",
                "dark"
            ],
            "stats": 292
        },
        "0552": {
            "name": "ワルビル",
            "types": [
                "ground",
                "dark"
            ],
            "stats": 351
        },
        "0553": {
            "name": "ワルビアル",
            "types": [
                "ground",
                "dark"
            ],
            "stats": 519
        },
        "0554": {
            "name": "ダルマッカ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 315
        },
        "0555": {
            "name": "ヒヒダルマ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 480
        },
        "0556": {
            "name": "マラカッチ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 461
        },
        "0557": {
            "name": "イシズマイ",
            "types": [
                "bug",
                "rock"
            ],
            "stats": 325
        },
        "0558": {
            "name": "イワパレス",
            "types": [
                "bug",
                "rock"
            ],
            "stats": 485
        },
        "0559": {
            "name": "ズルッグ",
            "types": [
                "dark",
                "fighting"
            ],
            "stats": 348
        },
        "0560": {
            "name": "ズルズキン",
            "types": [
                "dark",
                "fighting"
            ],
            "stats": 488
        },
        "0561": {
            "name": "シンボラー",
            "types": [
                "psychic",
                "flying"
            ],
            "stats": 490
        },
        "0562": {
            "name": "デスマス",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 303
        },
        "0563": {
            "name": "デスカーン",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 483
        },
        "0564": {
            "name": "プロトーガ",
            "types": [
                "water",
                "rock"
            ],
            "stats": 355
        },
        "0565": {
            "name": "アバゴーラ",
            "types": [
                "water",
                "rock"
            ],
            "stats": 495
        },
        "0566": {
            "name": "アーケン",
            "types": [
                "rock",
                "flying"
            ],
            "stats": 401
        },
        "0567": {
            "name": "アーケオス",
            "types": [
                "rock",
                "flying"
            ],
            "stats": 567
        },
        "0568": {
            "name": "ヤブクロン",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 329
        },
        "0569": {
            "name": "ダストダス",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 474
        },
        "0570": {
            "name": "ゾロア",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 330
        },
        "0571": {
            "name": "ゾロアーク",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 510
        },
        "0572": {
            "name": "チラーミィ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 300
        },
        "0573": {
            "name": "チラチーノ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 470
        },
        "0574": {
            "name": "ゴチム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 290
        },
        "0575": {
            "name": "ゴチミル",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 390
        },
        "0576": {
            "name": "ゴチルゼル",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 490
        },
        "0577": {
            "name": "ユニラン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 290
        },
        "0578": {
            "name": "ダブラン",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 370
        },
        "0579": {
            "name": "ランクルス",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 490
        },
        "0580": {
            "name": "コアルヒー",
            "types": [
                "water",
                "flying"
            ],
            "stats": 305
        },
        "0581": {
            "name": "スワンナ",
            "types": [
                "water",
                "flying"
            ],
            "stats": 473
        },
        "0582": {
            "name": "バニプッチ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 305
        },
        "0583": {
            "name": "バニリッチ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 395
        },
        "0584": {
            "name": "バイバニラ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 535
        },
        "0585": {
            "name": "シキジカ",
            "types": [
                "normal",
                "grass"
            ],
            "stats": 335
        },
        "0586": {
            "name": "メブキジカ",
            "types": [
                "normal",
                "grass"
            ],
            "stats": 475
        },
        "0587": {
            "name": "エモンガ",
            "types": [
                "electric",
                "flying"
            ],
            "stats": 428
        },
        "0588": {
            "name": "カブルモ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 315
        },
        "0589": {
            "name": "シュバルゴ",
            "types": [
                "bug",
                "steel"
            ],
            "stats": 495
        },
        "0590": {
            "name": "タマゲタケ",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 294
        },
        "0591": {
            "name": "モロバレル",
            "types": [
                "grass",
                "poison"
            ],
            "stats": 464
        },
        "0592": {
            "name": "プルリル",
            "types": [
                "water",
                "ghost"
            ],
            "stats": 335
        },
        "0593": {
            "name": "ブルンゲル",
            "types": [
                "water",
                "ghost"
            ],
            "stats": 480
        },
        "0594": {
            "name": "ママンボウ",
            "types": [
                "water",
                "water"
            ],
            "stats": 470
        },
        "0595": {
            "name": "バチュル",
            "types": [
                "bug",
                "electric"
            ],
            "stats": 319
        },
        "0596": {
            "name": "デンチュラ",
            "types": [
                "bug",
                "electric"
            ],
            "stats": 472
        },
        "0597": {
            "name": "テッシード",
            "types": [
                "grass",
                "steel"
            ],
            "stats": 305
        },
        "0598": {
            "name": "ナットレイ",
            "types": [
                "grass",
                "steel"
            ],
            "stats": 489
        },
        "0599": {
            "name": "ギアル",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 300
        },
        "0600": {
            "name": "ギギアル",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 440
        },
        "0601": {
            "name": "ギギギアル",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 520
        },
        "0602": {
            "name": "シビシラス",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 275
        },
        "0603": {
            "name": "シビビール",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 405
        },
        "0604": {
            "name": "シビルドン",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 515
        },
        "0605": {
            "name": "リグレー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 335
        },
        "0606": {
            "name": "オーベム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 485
        },
        "0607": {
            "name": "ヒトモシ",
            "types": [
                "ghost",
                "fire"
            ],
            "stats": 275
        },
        "0608": {
            "name": "ランプラー",
            "types": [
                "ghost",
                "fire"
            ],
            "stats": 370
        },
        "0609": {
            "name": "シャンデラ",
            "types": [
                "ghost",
                "fire"
            ],
            "stats": 520
        },
        "0610": {
            "name": "キバゴ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 320
        },
        "0611": {
            "name": "オノンド",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 410
        },
        "0612": {
            "name": "オノノクス",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 540
        },
        "0613": {
            "name": "クマシュン",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 305
        },
        "0614": {
            "name": "ツンベアー",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 505
        },
        "0615": {
            "name": "フリージオ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 515
        },
        "0616": {
            "name": "チョボマキ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 305
        },
        "0617": {
            "name": "アギルダー",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 495
        },
        "0618": {
            "name": "マッギョ",
            "types": [
                "ground",
                "electric"
            ],
            "stats": 471
        },
        "0619": {
            "name": "コジョフー",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 350
        },
        "0620": {
            "name": "コジョンド",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 510
        },
        "0621": {
            "name": "クリムガン",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 485
        },
        "0622": {
            "name": "ゴビット",
            "types": [
                "ground",
                "ghost"
            ],
            "stats": 303
        },
        "0623": {
            "name": "ゴルーグ",
            "types": [
                "ground",
                "ghost"
            ],
            "stats": 483
        },
        "0624": {
            "name": "コマタナ",
            "types": [
                "dark",
                "steel"
            ],
            "stats": 340
        },
        "0625": {
            "name": "キリキザン",
            "types": [
                "dark",
                "steel"
            ],
            "stats": 490
        },
        "0626": {
            "name": "バッフロン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0627": {
            "name": "ワシボン",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 350
        },
        "0628": {
            "name": "ウォーグル",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 510
        },
        "0629": {
            "name": "バルチャイ",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 370
        },
        "0630": {
            "name": "バルジーナ",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 510
        },
        "0631": {
            "name": "クイタラン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 484
        },
        "0632": {
            "name": "アイアント",
            "types": [
                "bug",
                "steel"
            ],
            "stats": 484
        },
        "0633": {
            "name": "モノズ",
            "types": [
                "dark",
                "dragon"
            ],
            "stats": 300
        },
        "0634": {
            "name": "ジヘッド",
            "types": [
                "dark",
                "dragon"
            ],
            "stats": 420
        },
        "0635": {
            "name": "サザンドラ",
            "types": [
                "dark",
                "dragon"
            ],
            "stats": 600
        },
        "0636": {
            "name": "メラルバ",
            "types": [
                "bug",
                "fire"
            ],
            "stats": 360
        },
        "0637": {
            "name": "ウルガモス",
            "types": [
                "bug",
                "fire"
            ],
            "stats": 550
        },
        "0638": {
            "name": "コバルオン",
            "types": [
                "steel",
                "fighting"
            ],
            "stats": 580
        },
        "0639": {
            "name": "テラキオン",
            "types": [
                "rock",
                "fighting"
            ],
            "stats": 580
        },
        "0640": {
            "name": "ビリジオン",
            "types": [
                "grass",
                "fighting"
            ],
            "stats": 580
        },
        "0641": {
            "name": "トルネロス",
            "types": [
                "flying",
                "flying"
            ],
            "stats": 580
        },
        "0642": {
            "name": "ボルトロス",
            "types": [
                "electric",
                "flying"
            ],
            "stats": 580
        },
        "0643": {
            "name": "レシラム",
            "types": [
                "dragon",
                "fire"
            ],
            "stats": 680
        },
        "0644": {
            "name": "ゼクロム",
            "types": [
                "dragon",
                "electric"
            ],
            "stats": 680
        },
        "0645": {
            "name": "ランドロス",
            "types": [
                "ground",
                "flying"
            ],
            "stats": 600
        },
        "0646": {
            "name": "キュレム",
            "types": [
                "dragon",
                "ice"
            ],
            "stats": 660
        },
        "0647": {
            "name": "ケルディオ",
            "types": [
                "water",
                "fighting"
            ],
            "stats": 580
        },
        "0648": {
            "name": "メロエッタ",
            "types": [
                "normal",
                "psychic"
            ],
            "stats": 600
        },
        "0649": {
            "name": "ゲノセクト",
            "types": [
                "bug",
                "steel"
            ],
            "stats": 600
        },
        "0650": {
            "name": "ハリマロン",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 313
        },
        "0651": {
            "name": "ハリボーグ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 405
        },
        "0652": {
            "name": "ブリガロン",
            "types": [
                "grass",
                "fighting"
            ],
            "stats": 530
        },
        "0653": {
            "name": "フォッコ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 307
        },
        "0654": {
            "name": "テールナー",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 409
        },
        "0655": {
            "name": "マフォクシー",
            "types": [
                "fire",
                "psychic"
            ],
            "stats": 534
        },
        "0656": {
            "name": "ケロマツ",
            "types": [
                "water",
                "water"
            ],
            "stats": 314
        },
        "0657": {
            "name": "ゲコガシラ",
            "types": [
                "water",
                "water"
            ],
            "stats": 405
        },
        "0658": {
            "name": "ゲッコウガ",
            "types": [
                "water",
                "dark"
            ],
            "stats": 530
        },
        "0659": {
            "name": "ホルビー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 237
        },
        "0660": {
            "name": "ホルード",
            "types": [
                "normal",
                "ground"
            ],
            "stats": 423
        },
        "0661": {
            "name": "ヤヤコマ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 278
        },
        "0662": {
            "name": "ヒノヤコマ",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 382
        },
        "0663": {
            "name": "ファイアロー",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 499
        },
        "0664": {
            "name": "コフキムシ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 200
        },
        "0665": {
            "name": "コフーライ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 213
        },
        "0666": {
            "name": "ビビヨン",
            "types": [
                "bug",
                "flying"
            ],
            "stats": 411
        },
        "0667": {
            "name": "シシコ",
            "types": [
                "fire",
                "normal"
            ],
            "stats": 369
        },
        "0668": {
            "name": "カエンジシ",
            "types": [
                "fire",
                "normal"
            ],
            "stats": 507
        },
        "0669": {
            "name": "フラベベ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 303
        },
        "0670": {
            "name": "フラエッテ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 371
        },
        "0671": {
            "name": "フラージェス",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 552
        },
        "0672": {
            "name": "メェークル",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 350
        },
        "0673": {
            "name": "ゴーゴート",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 531
        },
        "0674": {
            "name": "ヤンチャム",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 348
        },
        "0675": {
            "name": "ゴロンダ",
            "types": [
                "fighting",
                "dark"
            ],
            "stats": 495
        },
        "0676": {
            "name": "トリミアン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 472
        },
        "0677": {
            "name": "ニャスパー",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 355
        },
        "0678": {
            "name": "ニャオニクス",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 466
        },
        "0679": {
            "name": "ヒトツキ",
            "types": [
                "steel",
                "ghost"
            ],
            "stats": 325
        },
        "0680": {
            "name": "ニダンギル",
            "types": [
                "steel",
                "ghost"
            ],
            "stats": 448
        },
        "0681": {
            "name": "ギルガルド",
            "types": [
                "steel",
                "ghost"
            ],
            "stats": 500
        },
        "0682": {
            "name": "シュシュプ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 341
        },
        "0683": {
            "name": "フレフワン",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 462
        },
        "0684": {
            "name": "ペロッパフ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 341
        },
        "0685": {
            "name": "ペロリーム",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 480
        },
        "0686": {
            "name": "マーイーカ",
            "types": [
                "dark",
                "psychic"
            ],
            "stats": 288
        },
        "0687": {
            "name": "カラマネロ",
            "types": [
                "dark",
                "psychic"
            ],
            "stats": 482
        },
        "0688": {
            "name": "カメテテ",
            "types": [
                "rock",
                "water"
            ],
            "stats": 306
        },
        "0689": {
            "name": "ガメノデス",
            "types": [
                "rock",
                "water"
            ],
            "stats": 500
        },
        "0690": {
            "name": "クズモー",
            "types": [
                "poison",
                "water"
            ],
            "stats": 320
        },
        "0691": {
            "name": "ドラミドロ",
            "types": [
                "poison",
                "dragon"
            ],
            "stats": 494
        },
        "0692": {
            "name": "ウデッポウ",
            "types": [
                "water",
                "water"
            ],
            "stats": 330
        },
        "0693": {
            "name": "ブロスター",
            "types": [
                "water",
                "water"
            ],
            "stats": 500
        },
        "0694": {
            "name": "エリキテル",
            "types": [
                "electric",
                "normal"
            ],
            "stats": 289
        },
        "0695": {
            "name": "エレザード",
            "types": [
                "electric",
                "normal"
            ],
            "stats": 481
        },
        "0696": {
            "name": "チゴラス",
            "types": [
                "rock",
                "dragon"
            ],
            "stats": 362
        },
        "0697": {
            "name": "ガチゴラス",
            "types": [
                "rock",
                "dragon"
            ],
            "stats": 521
        },
        "0698": {
            "name": "アマルス",
            "types": [
                "rock",
                "ice"
            ],
            "stats": 362
        },
        "0699": {
            "name": "アマルルガ",
            "types": [
                "rock",
                "ice"
            ],
            "stats": 521
        },
        "0700": {
            "name": "ニンフィア",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 525
        },
        "0701": {
            "name": "ルチャブル",
            "types": [
                "fighting",
                "flying"
            ],
            "stats": 500
        },
        "0702": {
            "name": "デデンネ",
            "types": [
                "electric",
                "fairy"
            ],
            "stats": 431
        },
        "0703": {
            "name": "メレシー",
            "types": [
                "rock",
                "fairy"
            ],
            "stats": 500
        },
        "0704": {
            "name": "ヌメラ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 300
        },
        "0705": {
            "name": "ヌメイル",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 452
        },
        "0706": {
            "name": "ヌメルゴン",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 600
        },
        "0707": {
            "name": "クレッフィ",
            "types": [
                "steel",
                "fairy"
            ],
            "stats": 470
        },
        "0708": {
            "name": "ボクレー",
            "types": [
                "ghost",
                "grass"
            ],
            "stats": 309
        },
        "0709": {
            "name": "オーロット",
            "types": [
                "ghost",
                "grass"
            ],
            "stats": 474
        },
        "0710": {
            "name": "バケッチャ",
            "types": [
                "ghost",
                "grass"
            ],
            "stats": 335
        },
        "0711": {
            "name": "パンプジン",
            "types": [
                "ghost",
                "grass"
            ],
            "stats": 494
        },
        "0712": {
            "name": "カチコール",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 304
        },
        "0713": {
            "name": "クレベース",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 514
        },
        "0714": {
            "name": "オンバット",
            "types": [
                "flying",
                "dragon"
            ],
            "stats": 245
        },
        "0715": {
            "name": "オンバーン",
            "types": [
                "flying",
                "dragon"
            ],
            "stats": 535
        },
        "0716": {
            "name": "ゼルネアス",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 680
        },
        "0717": {
            "name": "イベルタル",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 680
        },
        "0718": {
            "name": "ジガルデ",
            "types": [
                "dragon",
                "ground"
            ],
            "stats": 600
        },
        "0719": {
            "name": "ディアンシー",
            "types": [
                "rock",
                "fairy"
            ],
            "stats": 600
        },
        "0720": {
            "name": "フーパ",
            "types": [
                "psychic",
                "ghost"
            ],
            "stats": 600
        },
        "0721": {
            "name": "ボルケニオン",
            "types": [
                "fire",
                "water"
            ],
            "stats": 600
        },
        "0722": {
            "name": "モクロー",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 320
        },
        "0723": {
            "name": "フクスロー",
            "types": [
                "grass",
                "flying"
            ],
            "stats": 420
        },
        "0724": {
            "name": "ジュナイパー",
            "types": [
                "grass",
                "ghost"
            ],
            "stats": 530
        },
        "0725": {
            "name": "ニャビー",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 320
        },
        "0726": {
            "name": "ニャヒート",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 420
        },
        "0727": {
            "name": "ガオガエン",
            "types": [
                "fire",
                "dark"
            ],
            "stats": 530
        },
        "0728": {
            "name": "アシマリ",
            "types": [
                "water",
                "water"
            ],
            "stats": 320
        },
        "0729": {
            "name": "オシャマリ",
            "types": [
                "water",
                "water"
            ],
            "stats": 420
        },
        "0730": {
            "name": "アシレーヌ",
            "types": [
                "water",
                "fairy"
            ],
            "stats": 530
        },
        "0731": {
            "name": "ツツケラ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 265
        },
        "0732": {
            "name": "ケララッパ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 355
        },
        "0733": {
            "name": "ドデカバシ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 485
        },
        "0734": {
            "name": "ヤングース",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 253
        },
        "0735": {
            "name": "デカグース",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 418
        },
        "0736": {
            "name": "アゴジムシ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 300
        },
        "0737": {
            "name": "デンヂムシ",
            "types": [
                "bug",
                "electric"
            ],
            "stats": 400
        },
        "0738": {
            "name": "クワガノン",
            "types": [
                "bug",
                "electric"
            ],
            "stats": 500
        },
        "0739": {
            "name": "マケンカニ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 338
        },
        "0740": {
            "name": "ケケンカニ",
            "types": [
                "fighting",
                "ice"
            ],
            "stats": 478
        },
        "0741": {
            "name": "オドリドリ",
            "types": [
                "fire",
                "flying"
            ],
            "stats": 476
        },
        "0742": {
            "name": "アブリー",
            "types": [
                "bug",
                "fairy"
            ],
            "stats": 304
        },
        "0743": {
            "name": "アブリボン",
            "types": [
                "bug",
                "fairy"
            ],
            "stats": 464
        },
        "0744": {
            "name": "イワンコ",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 280
        },
        "0745": {
            "name": "ルガルガン",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 487
        },
        "0746": {
            "name": "ヨワシ",
            "types": [
                "water",
                "water"
            ],
            "stats": 175
        },
        "0747": {
            "name": "ヒドイデ",
            "types": [
                "poison",
                "water"
            ],
            "stats": 305
        },
        "0748": {
            "name": "ドヒドイデ",
            "types": [
                "poison",
                "water"
            ],
            "stats": 495
        },
        "0749": {
            "name": "ドロバンコ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 385
        },
        "0750": {
            "name": "バンバドロ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 500
        },
        "0751": {
            "name": "シズクモ",
            "types": [
                "water",
                "bug"
            ],
            "stats": 269
        },
        "0752": {
            "name": "オニシズクモ",
            "types": [
                "water",
                "bug"
            ],
            "stats": 454
        },
        "0753": {
            "name": "カリキリ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 250
        },
        "0754": {
            "name": "ラランテス",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 480
        },
        "0755": {
            "name": "ネマシュ",
            "types": [
                "grass",
                "fairy"
            ],
            "stats": 285
        },
        "0756": {
            "name": "マシェード",
            "types": [
                "grass",
                "fairy"
            ],
            "stats": 405
        },
        "0757": {
            "name": "ヤトウモリ",
            "types": [
                "poison",
                "fire"
            ],
            "stats": 320
        },
        "0758": {
            "name": "エンニュート",
            "types": [
                "poison",
                "fire"
            ],
            "stats": 480
        },
        "0759": {
            "name": "ヌイコグマ",
            "types": [
                "normal",
                "fighting"
            ],
            "stats": 340
        },
        "0760": {
            "name": "キテルグマ",
            "types": [
                "normal",
                "fighting"
            ],
            "stats": 500
        },
        "0761": {
            "name": "アマカジ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 210
        },
        "0762": {
            "name": "アママイコ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 290
        },
        "0763": {
            "name": "アマージョ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 510
        },
        "0764": {
            "name": "キュワワー",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 485
        },
        "0765": {
            "name": "ヤレユータン",
            "types": [
                "normal",
                "psychic"
            ],
            "stats": 490
        },
        "0766": {
            "name": "ナゲツケサル",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 490
        },
        "0767": {
            "name": "コソクムシ",
            "types": [
                "bug",
                "water"
            ],
            "stats": 230
        },
        "0768": {
            "name": "グソクムシャ",
            "types": [
                "bug",
                "water"
            ],
            "stats": 530
        },
        "0769": {
            "name": "スナバァ",
            "types": [
                "ghost",
                "ground"
            ],
            "stats": 320
        },
        "0770": {
            "name": "シロデスナ",
            "types": [
                "ghost",
                "ground"
            ],
            "stats": 480
        },
        "0771": {
            "name": "ナマコブシ",
            "types": [
                "water",
                "water"
            ],
            "stats": 410
        },
        "0772": {
            "name": "タイプ：ヌル",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 534
        },
        "0773": {
            "name": "シルヴァディ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 570
        },
        "0774": {
            "name": "メテノ",
            "types": [
                "rock",
                "flying"
            ],
            "stats": 440
        },
        "0775": {
            "name": "ネッコアラ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 480
        },
        "0776": {
            "name": "バクガメス",
            "types": [
                "fire",
                "dragon"
            ],
            "stats": 485
        },
        "0777": {
            "name": "トゲデマル",
            "types": [
                "electric",
                "steel"
            ],
            "stats": 435
        },
        "0778": {
            "name": "ミミッキュ",
            "types": [
                "ghost",
                "fairy"
            ],
            "stats": 476
        },
        "0779": {
            "name": "ハギギシリ",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 475
        },
        "0780": {
            "name": "ジジーロン",
            "types": [
                "normal",
                "dragon"
            ],
            "stats": 485
        },
        "0781": {
            "name": "ダダリン",
            "types": [
                "ghost",
                "grass"
            ],
            "stats": 517
        },
        "0782": {
            "name": "ジャラコ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 300
        },
        "0783": {
            "name": "ジャランゴ",
            "types": [
                "dragon",
                "fighting"
            ],
            "stats": 420
        },
        "0784": {
            "name": "ジャラランガ",
            "types": [
                "dragon",
                "fighting"
            ],
            "stats": 600
        },
        "0785": {
            "name": "カプ・コケコ",
            "types": [
                "electric",
                "fairy"
            ],
            "stats": 570
        },
        "0786": {
            "name": "カプ・テテフ",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 570
        },
        "0787": {
            "name": "カプ・ブルル",
            "types": [
                "grass",
                "fairy"
            ],
            "stats": 570
        },
        "0788": {
            "name": "カプ・レヒレ",
            "types": [
                "water",
                "fairy"
            ],
            "stats": 570
        },
        "0789": {
            "name": "コスモッグ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 200
        },
        "0790": {
            "name": "コスモウム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 400
        },
        "0791": {
            "name": "ソルガレオ",
            "types": [
                "psychic",
                "steel"
            ],
            "stats": 680
        },
        "0792": {
            "name": "ルナアーラ",
            "types": [
                "psychic",
                "ghost"
            ],
            "stats": 680
        },
        "0793": {
            "name": "ウツロイド",
            "types": [
                "rock",
                "poison"
            ],
            "stats": 570
        },
        "0794": {
            "name": "マッシブーン",
            "types": [
                "bug",
                "fighting"
            ],
            "stats": 570
        },
        "0795": {
            "name": "フェローチェ",
            "types": [
                "bug",
                "fighting"
            ],
            "stats": 570
        },
        "0796": {
            "name": "デンジュモク",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 570
        },
        "0797": {
            "name": "テッカグヤ",
            "types": [
                "steel",
                "flying"
            ],
            "stats": 570
        },
        "0798": {
            "name": "カミツルギ",
            "types": [
                "grass",
                "steel"
            ],
            "stats": 570
        },
        "0799": {
            "name": "アクジキング",
            "types": [
                "dark",
                "dragon"
            ],
            "stats": 570
        },
        "0800": {
            "name": "ネクロズマ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 600
        },
        "0801": {
            "name": "マギアナ",
            "types": [
                "steel",
                "fairy"
            ],
            "stats": 600
        },
        "0802": {
            "name": "マーシャドー",
            "types": [
                "fighting",
                "ghost"
            ],
            "stats": 600
        },
        "0803": {
            "name": "ベベノム",
            "types": [
                "poison",
                "poison"
            ],
            "stats": 420
        },
        "0804": {
            "name": "アーゴヨン",
            "types": [
                "poison",
                "dragon"
            ],
            "stats": 540
        },
        "0805": {
            "name": "ツンデツンデ",
            "types": [
                "rock",
                "steel"
            ],
            "stats": 570
        },
        "0806": {
            "name": "ズガドーン",
            "types": [
                "fire",
                "ghost"
            ],
            "stats": 570
        },
        "0807": {
            "name": "ゼラオラ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 600
        },
        "0808": {
            "name": "メルタン",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 300
        },
        "0809": {
            "name": "メルメタル",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 600
        },
        "0810": {
            "name": "サルノリ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 310
        },
        "0811": {
            "name": "バチンキー",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 420
        },
        "0812": {
            "name": "ゴリランダー",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 530
        },
        "0813": {
            "name": "ヒバニー",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 310
        },
        "0814": {
            "name": "ラビフット",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 420
        },
        "0815": {
            "name": "エースバーン",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 530
        },
        "0816": {
            "name": "メッソン",
            "types": [
                "water",
                "water"
            ],
            "stats": 310
        },
        "0817": {
            "name": "ジメレオン",
            "types": [
                "water",
                "water"
            ],
            "stats": 420
        },
        "0818": {
            "name": "インテレオン",
            "types": [
                "water",
                "water"
            ],
            "stats": 530
        },
        "0819": {
            "name": "ホシガリス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 275
        },
        "0820": {
            "name": "ヨクバリス",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 460
        },
        "0821": {
            "name": "ココガラ",
            "types": [
                "flying",
                "flying"
            ],
            "stats": 245
        },
        "0822": {
            "name": "アオガラス",
            "types": [
                "flying",
                "flying"
            ],
            "stats": 365
        },
        "0823": {
            "name": "アーマーガア",
            "types": [
                "flying",
                "steel"
            ],
            "stats": 495
        },
        "0824": {
            "name": "サッチムシ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 180
        },
        "0825": {
            "name": "レドームシ",
            "types": [
                "bug",
                "psychic"
            ],
            "stats": 335
        },
        "0826": {
            "name": "イオルブ",
            "types": [
                "bug",
                "psychic"
            ],
            "stats": 505
        },
        "0827": {
            "name": "クスネ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 245
        },
        "0828": {
            "name": "フォクスライ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 455
        },
        "0829": {
            "name": "ヒメンカ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 250
        },
        "0830": {
            "name": "ワタシラガ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 460
        },
        "0831": {
            "name": "ウールー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 270
        },
        "0832": {
            "name": "バイウールー",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 490
        },
        "0833": {
            "name": "カムカメ",
            "types": [
                "water",
                "water"
            ],
            "stats": 284
        },
        "0834": {
            "name": "カジリガメ",
            "types": [
                "water",
                "rock"
            ],
            "stats": 485
        },
        "0835": {
            "name": "ワンパチ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 270
        },
        "0836": {
            "name": "パルスワン",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 490
        },
        "0837": {
            "name": "タンドン",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 240
        },
        "0838": {
            "name": "トロッゴン",
            "types": [
                "rock",
                "fire"
            ],
            "stats": 410
        },
        "0839": {
            "name": "セキタンザン",
            "types": [
                "rock",
                "fire"
            ],
            "stats": 510
        },
        "0840": {
            "name": "カジッチュ",
            "types": [
                "grass",
                "dragon"
            ],
            "stats": 260
        },
        "0841": {
            "name": "アップリュー",
            "types": [
                "grass",
                "dragon"
            ],
            "stats": 485
        },
        "0842": {
            "name": "タルップル",
            "types": [
                "grass",
                "dragon"
            ],
            "stats": 485
        },
        "0843": {
            "name": "スナヘビ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 315
        },
        "0844": {
            "name": "サダイジャ",
            "types": [
                "ground",
                "ground"
            ],
            "stats": 510
        },
        "0845": {
            "name": "ウッウ",
            "types": [
                "flying",
                "water"
            ],
            "stats": 475
        },
        "0846": {
            "name": "サシカマス",
            "types": [
                "water",
                "water"
            ],
            "stats": 280
        },
        "0847": {
            "name": "カマスジョー",
            "types": [
                "water",
                "water"
            ],
            "stats": 490
        },
        "0848": {
            "name": "エレズン",
            "types": [
                "electric",
                "poison"
            ],
            "stats": 242
        },
        "0849": {
            "name": "ストリンダー",
            "types": [
                "electric",
                "poison"
            ],
            "stats": 502
        },
        "0850": {
            "name": "ヤクデ",
            "types": [
                "fire",
                "bug"
            ],
            "stats": 305
        },
        "0851": {
            "name": "マルヤクデ",
            "types": [
                "fire",
                "bug"
            ],
            "stats": 525
        },
        "0852": {
            "name": "タタッコ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 310
        },
        "0853": {
            "name": "オトスパス",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 480
        },
        "0854": {
            "name": "ヤバチャ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 308
        },
        "0855": {
            "name": "ポットデス",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 508
        },
        "0856": {
            "name": "ミブリム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 265
        },
        "0857": {
            "name": "テブリム",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 370
        },
        "0858": {
            "name": "ブリムオン",
            "types": [
                "psychic",
                "fairy"
            ],
            "stats": 510
        },
        "0859": {
            "name": "ベロバー",
            "types": [
                "dark",
                "fairy"
            ],
            "stats": 265
        },
        "0860": {
            "name": "ギモー",
            "types": [
                "dark",
                "fairy"
            ],
            "stats": 370
        },
        "0861": {
            "name": "オーロンゲ",
            "types": [
                "dark",
                "fairy"
            ],
            "stats": 510
        },
        "0862": {
            "name": "タチフサグマ",
            "types": [
                "dark",
                "normal"
            ],
            "stats": 520
        },
        "0863": {
            "name": "ニャイキング",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 440
        },
        "0864": {
            "name": "サニゴーン",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 510
        },
        "0865": {
            "name": "ネギガナイト",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 507
        },
        "0866": {
            "name": "バリコオル",
            "types": [
                "ice",
                "psychic"
            ],
            "stats": 520
        },
        "0867": {
            "name": "デスバーン",
            "types": [
                "ground",
                "ghost"
            ],
            "stats": 483
        },
        "0868": {
            "name": "マホミル",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 270
        },
        "0869": {
            "name": "マホイップ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 495
        },
        "0870": {
            "name": "タイレーツ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 470
        },
        "0871": {
            "name": "バチンウニ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 435
        },
        "0872": {
            "name": "ユキハミ",
            "types": [
                "ice",
                "bug"
            ],
            "stats": 185
        },
        "0873": {
            "name": "モスノウ",
            "types": [
                "ice",
                "bug"
            ],
            "stats": 475
        },
        "0874": {
            "name": "イシヘンジン",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 470
        },
        "0875": {
            "name": "コオリッポ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 470
        },
        "0876": {
            "name": "イエッサン",
            "types": [
                "psychic",
                "normal"
            ],
            "stats": 475
        },
        "0877": {
            "name": "モルペコ",
            "types": [
                "electric",
                "dark"
            ],
            "stats": 436
        },
        "0878": {
            "name": "ゾウドウ",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 330
        },
        "0879": {
            "name": "ダイオウドウ",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 500
        },
        "0880": {
            "name": "パッチラゴン",
            "types": [
                "electric",
                "dragon"
            ],
            "stats": 505
        },
        "0881": {
            "name": "パッチルドン",
            "types": [
                "electric",
                "ice"
            ],
            "stats": 505
        },
        "0882": {
            "name": "ウオノラゴン",
            "types": [
                "water",
                "dragon"
            ],
            "stats": 505
        },
        "0883": {
            "name": "ウオチルドン",
            "types": [
                "water",
                "ice"
            ],
            "stats": 505
        },
        "0884": {
            "name": "ジュラルドン",
            "types": [
                "steel",
                "dragon"
            ],
            "stats": 535
        },
        "0885": {
            "name": "ドラメシヤ",
            "types": [
                "dragon",
                "ghost"
            ],
            "stats": 270
        },
        "0886": {
            "name": "ドロンチ",
            "types": [
                "dragon",
                "ghost"
            ],
            "stats": 410
        },
        "0887": {
            "name": "ドラパルト",
            "types": [
                "dragon",
                "ghost"
            ],
            "stats": 600
        },
        "0888": {
            "name": "ザシアン",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 670
        },
        "0889": {
            "name": "ザマゼンタ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 670
        },
        "0890": {
            "name": "ムゲンダイナ",
            "types": [
                "poison",
                "dragon"
            ],
            "stats": 690
        },
        "0891": {
            "name": "ダクマ",
            "types": [
                "fighting",
                "fighting"
            ],
            "stats": 385
        },
        "0892": {
            "name": "ウーラオス",
            "types": [
                "fighting",
                "dark"
            ],
            "stats": 550
        },
        "0893": {
            "name": "ザルード",
            "types": [
                "dark",
                "grass"
            ],
            "stats": 600
        },
        "0894": {
            "name": "レジエレキ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 580
        },
        "0895": {
            "name": "レジドラゴ",
            "types": [
                "dragon",
                "dragon"
            ],
            "stats": 580
        },
        "0896": {
            "name": "ブリザポス",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 580
        },
        "0897": {
            "name": "レイスポス",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 580
        },
        "0898": {
            "name": "バドレックス",
            "types": [
                "psychic",
                "grass"
            ],
            "stats": 500
        },
        "0899": {
            "name": "アヤシシ",
            "types": [
                "normal",
                "psychic"
            ],
            "stats": 525
        },
        "0900": {
            "name": "バサギリ",
            "types": [
                "bug",
                "rock"
            ],
            "stats": 500
        },
        "0901": {
            "name": "ガチグマ",
            "types": [
                "ground",
                "normal"
            ],
            "stats": 550
        },
        "0902": {
            "name": "イダイトウ",
            "types": [
                "water",
                "ghost"
            ],
            "stats": 530
        },
        "0903": {
            "name": "オオニューラ",
            "types": [
                "fighting",
                "poison"
            ],
            "stats": 510
        },
        "0904": {
            "name": "ハリーマン",
            "types": [
                "dark",
                "poison"
            ],
            "stats": 510
        },
        "0905": {
            "name": "ラブトロス",
            "types": [
                "fairy",
                "flying"
            ],
            "stats": 580
        },
        "0906": {
            "name": "ニャオハ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 310
        },
        "0907": {
            "name": "ニャローテ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 410
        },
        "0908": {
            "name": "マスカーニャ",
            "types": [
                "grass",
                "dark"
            ],
            "stats": 530
        },
        "0909": {
            "name": "ホゲータ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 310
        },
        "0910": {
            "name": "アチゲータ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 411
        },
        "0911": {
            "name": "ラウドボーン",
            "types": [
                "fire",
                "ghost"
            ],
            "stats": 530
        },
        "0912": {
            "name": "クワッス",
            "types": [
                "water",
                "water"
            ],
            "stats": 310
        },
        "0913": {
            "name": "ウェルカモ",
            "types": [
                "water",
                "water"
            ],
            "stats": 410
        },
        "0914": {
            "name": "ウェーニバル",
            "types": [
                "water",
                "fighting"
            ],
            "stats": 530
        },
        "0915": {
            "name": "グルトン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 254
        },
        "0916": {
            "name": "パフュートン",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 489
        },
        "0917": {
            "name": "タマンチュラ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 210
        },
        "0918": {
            "name": "ワナイダー",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 404
        },
        "0919": {
            "name": "マメバッタ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 210
        },
        "0920": {
            "name": "エクスレッグ",
            "types": [
                "bug",
                "dark"
            ],
            "stats": 450
        },
        "0921": {
            "name": "パモ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 240
        },
        "0922": {
            "name": "パモット",
            "types": [
                "electric",
                "fighting"
            ],
            "stats": 350
        },
        "0923": {
            "name": "パーモット",
            "types": [
                "electric",
                "fighting"
            ],
            "stats": 490
        },
        "0924": {
            "name": "ワッカネズミ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 305
        },
        "0925": {
            "name": "イッカネズミ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 470
        },
        "0926": {
            "name": "パピモッチ",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 312
        },
        "0927": {
            "name": "バウッツェル",
            "types": [
                "fairy",
                "fairy"
            ],
            "stats": 477
        },
        "0928": {
            "name": "ミニーブ",
            "types": [
                "grass",
                "normal"
            ],
            "stats": 260
        },
        "0929": {
            "name": "オリーニョ",
            "types": [
                "grass",
                "normal"
            ],
            "stats": 354
        },
        "0930": {
            "name": "オリーヴァ",
            "types": [
                "grass",
                "normal"
            ],
            "stats": 510
        },
        "0931": {
            "name": "イキリンコ",
            "types": [
                "normal",
                "flying"
            ],
            "stats": 417
        },
        "0932": {
            "name": "コジオ",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 280
        },
        "0933": {
            "name": "ジオヅム",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 355
        },
        "0934": {
            "name": "キョジオーン",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 500
        },
        "0935": {
            "name": "カルボウ",
            "types": [
                "fire",
                "fire"
            ],
            "stats": 255
        },
        "0936": {
            "name": "グレンアルマ",
            "types": [
                "fire",
                "psychic"
            ],
            "stats": 525
        },
        "0937": {
            "name": "ソウブレイズ",
            "types": [
                "fire",
                "ghost"
            ],
            "stats": 525
        },
        "0938": {
            "name": "ズピカ",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 272
        },
        "0939": {
            "name": "ハラバリー",
            "types": [
                "electric",
                "electric"
            ],
            "stats": 495
        },
        "0940": {
            "name": "カイデン",
            "types": [
                "electric",
                "flying"
            ],
            "stats": 280
        },
        "0941": {
            "name": "タイカイデン",
            "types": [
                "electric",
                "flying"
            ],
            "stats": 490
        },
        "0942": {
            "name": "オラチフ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 340
        },
        "0943": {
            "name": "マフィティフ",
            "types": [
                "dark",
                "dark"
            ],
            "stats": 505
        },
        "0944": {
            "name": "シルシュルー",
            "types": [
                "poison",
                "normal"
            ],
            "stats": 290
        },
        "0945": {
            "name": "タギングル",
            "types": [
                "poison",
                "normal"
            ],
            "stats": 485
        },
        "0946": {
            "name": "アノクサ",
            "types": [
                "grass",
                "ghost"
            ],
            "stats": 275
        },
        "0947": {
            "name": "アノホラグサ",
            "types": [
                "grass",
                "ghost"
            ],
            "stats": 480
        },
        "0948": {
            "name": "ノノクラゲ",
            "types": [
                "ground",
                "grass"
            ],
            "stats": 335
        },
        "0949": {
            "name": "リククラゲ",
            "types": [
                "ground",
                "grass"
            ],
            "stats": 515
        },
        "0950": {
            "name": "ガケガニ",
            "types": [
                "rock",
                "rock"
            ],
            "stats": 450
        },
        "0951": {
            "name": "カプサイジ",
            "types": [
                "grass",
                "grass"
            ],
            "stats": 304
        },
        "0952": {
            "name": "スコヴィラン",
            "types": [
                "grass",
                "fire"
            ],
            "stats": 486
        },
        "0953": {
            "name": "シガロコ",
            "types": [
                "bug",
                "bug"
            ],
            "stats": 270
        },
        "0954": {
            "name": "ベラカス",
            "types": [
                "bug",
                "psychic"
            ],
            "stats": 470
        },
        "0955": {
            "name": "ヒラヒナ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 255
        },
        "0956": {
            "name": "クエスパトラ",
            "types": [
                "psychic",
                "psychic"
            ],
            "stats": 481
        },
        "0957": {
            "name": "カヌチャン",
            "types": [
                "fairy",
                "steel"
            ],
            "stats": 297
        },
        "0958": {
            "name": "ナカヌチャン",
            "types": [
                "fairy",
                "steel"
            ],
            "stats": 380
        },
        "0959": {
            "name": "デカヌチャン",
            "types": [
                "fairy",
                "steel"
            ],
            "stats": 506
        },
        "0960": {
            "name": "ウミディグダ",
            "types": [
                "water",
                "water"
            ],
            "stats": 245
        },
        "0961": {
            "name": "ウミトリオ",
            "types": [
                "water",
                "water"
            ],
            "stats": 425
        },
        "0962": {
            "name": "オトシドリ",
            "types": [
                "flying",
                "dark"
            ],
            "stats": 485
        },
        "0963": {
            "name": "ナミイルカ",
            "types": [
                "water",
                "water"
            ],
            "stats": 315
        },
        "0964": {
            "name": "イルカマン",
            "types": [
                "water",
                "water"
            ],
            "stats": 457
        },
        "0965": {
            "name": "ブロロン",
            "types": [
                "steel",
                "poison"
            ],
            "stats": 300
        },
        "0966": {
            "name": "ブロロローム",
            "types": [
                "steel",
                "poison"
            ],
            "stats": 500
        },
        "0967": {
            "name": "モトトカゲ",
            "types": [
                "dragon",
                "normal"
            ],
            "stats": 501
        },
        "0968": {
            "name": "ミミズズ",
            "types": [
                "steel",
                "steel"
            ],
            "stats": 480
        },
        "0969": {
            "name": "キラーメ",
            "types": [
                "rock",
                "poison"
            ],
            "stats": 350
        },
        "0970": {
            "name": "キラフロル",
            "types": [
                "rock",
                "poison"
            ],
            "stats": 525
        },
        "0971": {
            "name": "ボチ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 290
        },
        "0972": {
            "name": "ハカドッグ",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 488
        },
        "0973": {
            "name": "カラミンゴ",
            "types": [
                "flying",
                "fighting"
            ],
            "stats": 500
        },
        "0974": {
            "name": "アルクジラ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 334
        },
        "0975": {
            "name": "ハルクジラ",
            "types": [
                "ice",
                "ice"
            ],
            "stats": 521
        },
        "0976": {
            "name": "ミガルーサ",
            "types": [
                "water",
                "psychic"
            ],
            "stats": 478
        },
        "0977": {
            "name": "ヘイラッシャ",
            "types": [
                "water",
                "water"
            ],
            "stats": 530
        },
        "0978": {
            "name": "シャリタツ",
            "types": [
                "dragon",
                "water"
            ],
            "stats": 475
        },
        "0979": {
            "name": "コノヨザル",
            "types": [
                "fighting",
                "ghost"
            ],
            "stats": 535
        },
        "0980": {
            "name": "ドオー",
            "types": [
                "poison",
                "ground"
            ],
            "stats": 430
        },
        "0981": {
            "name": "リキキリン",
            "types": [
                "normal",
                "psychic"
            ],
            "stats": 520
        },
        "0982": {
            "name": "ノココッチ",
            "types": [
                "normal",
                "normal"
            ],
            "stats": 520
        },
        "0983": {
            "name": "ドドゲザン",
            "types": [
                "dark",
                "steel"
            ],
            "stats": 550
        },
        "0984": {
            "name": "イダイナキバ",
            "types": [
                "ground",
                "fighting"
            ],
            "stats": 570
        },
        "0985": {
            "name": "サケブシッポ",
            "types": [
                "fairy",
                "psychic"
            ],
            "stats": 570
        },
        "0986": {
            "name": "アラブルタケ",
            "types": [
                "grass",
                "dark"
            ],
            "stats": 570
        },
        "0987": {
            "name": "ハバタクカミ",
            "types": [
                "ghost",
                "fairy"
            ],
            "stats": 570
        },
        "0988": {
            "name": "チヲハウハネ",
            "types": [
                "bug",
                "fighting"
            ],
            "stats": 570
        },
        "0989": {
            "name": "スナノケガワ",
            "types": [
                "electric",
                "ground"
            ],
            "stats": 570
        },
        "0990": {
            "name": "テツノワダチ",
            "types": [
                "ground",
                "steel"
            ],
            "stats": 570
        },
        "0991": {
            "name": "テツノツツミ",
            "types": [
                "ice",
                "water"
            ],
            "stats": 570
        },
        "0992": {
            "name": "テツノカイナ",
            "types": [
                "fighting",
                "electric"
            ],
            "stats": 570
        },
        "0993": {
            "name": "テツノコウベ",
            "types": [
                "dark",
                "flying"
            ],
            "stats": 570
        },
        "0994": {
            "name": "テツノドクガ",
            "types": [
                "fire",
                "poison"
            ],
            "stats": 570
        },
        "0995": {
            "name": "テツノイバラ",
            "types": [
                "rock",
                "electric"
            ],
            "stats": 570
        },
        "0996": {
            "name": "セビエ",
            "types": [
                "dragon",
                "ice"
            ],
            "stats": 320
        },
        "0997": {
            "name": "セゴール",
            "types": [
                "dragon",
                "ice"
            ],
            "stats": 423
        },
        "0998": {
            "name": "セグレイブ",
            "types": [
                "dragon",
                "ice"
            ],
            "stats": 600
        },
        "0999": {
            "name": "コレクレー",
            "types": [
                "ghost",
                "ghost"
            ],
            "stats": 300
        },
        "1000": {
            "name": "サーフゴー",
            "types": [
                "steel",
                "ghost"
            ],
            "stats": 550
        },
        "1001": {
            "name": "チオンジェン",
            "types": [
                "dark",
                "grass"
            ],
            "stats": 570
        },
        "1002": {
            "name": "パオジアン",
            "types": [
                "dark",
                "ice"
            ],
            "stats": 570
        },
        "1003": {
            "name": "ディンルー",
            "types": [
                "dark",
                "ground"
            ],
            "stats": 570
        },
        "1004": {
            "name": "イーユイ",
            "types": [
                "dark",
                "fire"
            ],
            "stats": 570
        },
        "1005": {
            "name": "トドロクツキ",
            "types": [
                "dragon",
                "dark"
            ],
            "stats": 590
        },
        "1006": {
            "name": "テツノブジン",
            "types": [
                "fairy",
                "fighting"
            ],
            "stats": 590
        },
        "1007": {
            "name": "コライドン",
            "types": [
                "fighting",
                "dragon"
            ],
            "stats": 670
        },
        "1008": {
            "name": "ミライドン",
            "types": [
                "electric",
                "dragon"
            ],
            "stats": 670
        }
    }

    const numDexStr = String(numDex).padStart(4, '0');
    const data = dataPoke[numDexStr];
    // タイプの日本語表示
    let typeSumBack = getType(data["types"][0])["name"];
    if (data["types"][0] != data["types"][1]) {
        typeSumBack += "/" + getType(data["types"][1])["name"];
    }

    data["typesName"] = typeSumBack;

    return data;
}