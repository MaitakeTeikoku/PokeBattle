import requests
import json

def getPokeJson(dexRange):

    pokeList = {}

    for num in range(1, dexRange):
        try:
            url = "https://pokeapi.co/api/v2/pokemon/" + str(num)
            response = requests.get(url)
            pokeData = response.json()

            urlSpecies = "https://pokeapi.co/api/v2/pokemon-species/" + str(num)
            responseSpecies = requests.get(urlSpecies)
            pokeDataSpecies = responseSpecies.json()
        except:
            print(str(num) + " : 終了")
            break

        # タイプ
        type1 = pokeData['types'][0]['type']['name']
        if len(pokeData['types']) == 2:
            type2 = pokeData['types'][1]['type']['name']
        else:
            type2 = type1

        # 種族値
        statsSum = 0
        for stats in pokeData['stats']:
            statsSum += stats['base_stat']        

        # 日本語の名前
        for names in pokeDataSpecies['names']:
            if names['language']['name'] == "ja":
                pokeName = names['name']
                break

        num4 = str(num).zfill(4)
        pokeList[num4] = {"name": pokeName, "types": [type1, type2], "stats": statsSum}

        print(num4 + " : " + pokeName)

    with open('./pokeList.json', 'w', encoding="utf-8") as f:
        json.dump(pokeList, f, ensure_ascii=False)



def getTypeJson(typeRange):

    typeList = {}

    for num in range(1, typeRange):

        try:
            urlType = "https://pokeapi.co/api/v2/type/" + str(num)
            response = requests.get(urlType)
            typeData = response.json()
        except:
            print(str(num) + " : 終了")
            break

        # 日本語の名前
        for names in typeData['names']:
            if names['language']['name'] == "ja":
                typeName = names['name']
                break

        typeList[typeData["name"]] = {"name": typeName, "damage_relations": typeData["damage_relations"]}

        print(str(num) + " : " + typeData["name"])

    with open('./typeList.json', 'w', encoding="utf-8") as f:
        json.dump(typeList, f, ensure_ascii=False)



dexRange = 2000
typeRange = 20

print("Start")
getPokeJson(dexRange + 1)
getTypeJson(typeRange + 1)
print("End")