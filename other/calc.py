import requests
import json

def getPokeTypeSumJson(dexRange):

    types = {
        "normal": 0,
        "fire": 0,
        "water": 0,
        "grass": 0,
        "electric": 0,
        "ice": 0,
        "fighting": 0,
        "poison": 0,
        "ground": 0,
        "flying": 0,
        "psychic": 0,
        "bug": 0,
        "rock": 0,
        "ghost": 0,
        "dragon": 0,
        "dark": 0,
        "steel": 0,
        "fairy": 0
    }

    for num in range(1, dexRange):
        try:
            url = "https://pokeapi.co/api/v2/pokemon/" + str(num)
            response = requests.get(url)
            pokeData = response.json()

        except:
            print(str(num) + " : 終了")
            break

        # タイプ
        type1 = pokeData['types'][0]['type']['name']
        types[type1] += 1

        if len(pokeData['types']) == 2:
            type2 = pokeData['types'][1]['type']['name']
            types[type2] += 1

        print(num)

    with open('./pokeTypeSum.json', 'w', encoding="utf-8") as f:
        json.dump(types, f, ensure_ascii=False)



dexRange = 2000

print("Start")
getPokeTypeSumJson(dexRange + 1)
print("End")