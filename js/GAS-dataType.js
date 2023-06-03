// ポケモンの情報を取得
function getType(type) {

    const dataType = {
        "normal": {
            "name": "ノーマル",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    }
                ],
                "double_damage_to": [],
                "half_damage_from": [],
                "half_damage_to": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    }
                ],
                "no_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    }
                ]
            }
        },
        "fighting": {
            "name": "かくとう",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    }
                ]
            }
        },
        "flying": {
            "name": "ひこう",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    }
                ],
                "no_damage_to": []
            }
        },
        "poison": {
            "name": "どく",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    }
                ]
            }
        },
        "ground": {
            "name": "じめん",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "no_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                ]
            }
        },
        "rock": {
            "name": "いわ",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    },
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "bug": {
            "name": "むし",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "ghost": {
            "name": "ゴースト",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    },
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    }
                ],
                "no_damage_to": [
                    {
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                ]
            }
        },
        "steel": {
            "name": "はがね",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    },
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                ],
                "no_damage_to": []
            }
        },
        "fire": {
            "name": "ほのお",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "water": {
            "name": "みず",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "grass": {
            "name": "くさ",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "electric": {
            "name": "でんき",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    }
                ]
            }
        },
        "psychic": {
            "name": "エスパー",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ]
            }
        },
        "ice": {
            "name": "こおり",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "rock",
                        "url": "https://pokeapi.co/api/v2/type/6/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    },
                    {
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": []
            }
        },
        "dragon": {
            "name": "ドラゴン",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ice",
                        "url": "https://pokeapi.co/api/v2/type/15/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    },
                    {
                        "name": "water",
                        "url": "https://pokeapi.co/api/v2/type/11/"
                    },
                    {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    },
                    {
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ]
            }
        },
        "dark": {
            "name": "あく",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "ghost",
                        "url": "https://pokeapi.co/api/v2/type/8/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    },
                    {
                        "name": "fairy",
                        "url": "https://pokeapi.co/api/v2/type/18/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "psychic",
                        "url": "https://pokeapi.co/api/v2/type/14/"
                    }
                ],
                "no_damage_to": []
            }
        },
        "fairy": {
            "name": "フェアリー",
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://pokeapi.co/api/v2/type/2/"
                    },
                    {
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    },
                    {
                        "name": "dark",
                        "url": "https://pokeapi.co/api/v2/type/17/"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    },
                    {
                        "name": "steel",
                        "url": "https://pokeapi.co/api/v2/type/9/"
                    },
                    {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "dragon",
                        "url": "https://pokeapi.co/api/v2/type/16/"
                    }
                ],
                "no_damage_to": []
            }
        }
    }

    return dataType[type];
}