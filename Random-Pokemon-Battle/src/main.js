"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var compare_Stats_Visialy_ts_1 = require("./compare-Stats-Visialy.ts");
console.log("nice try amit");
var obj1 = {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    name: "jynx",
    hp: 65,
    attack: 50,
    defense: 35,
    specialAttack: 115,
    specialDefense: 95,
    speed: 95,
    type: ["ice", "psychic"]
};
var obj2 = {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    name: "weepingbell",
    hp: 60,
    attack: 60,
    defense: 60,
    specialAttack: 80,
    specialDefense: 95,
    speed: 80,
    type: ["grass", "poison"],
};
// playGame();
(0, compare_Stats_Visialy_ts_1.compareStatsVisialy)(obj1, obj2);
