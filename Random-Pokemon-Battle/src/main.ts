import './style.css'
// import {playGame} from "./play-game";
import type{ChosenPokemonObject} from "./player-cpu-objects.ts";
import {compareStatsVisialy} from "./compare-Stats-Visialy.ts";



console.log("nice try amit");

const obj1:ChosenPokemonObject = {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    name: "jynx",
    hp: 65,
    attack: 50,
    defense:35,
    specialAttack:115,
    specialDefense:95,
    speed:95,
    type:["ice","psychic"] 
}

const obj2:ChosenPokemonObject = {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    name: "weepingbell",
    hp: 60,
    attack: 60,
    defense:60,
    specialAttack:80,
    specialDefense:95,
    speed:80,
    type:["grass","poison"],
}


// playGame();
compareStatsVisialy(obj1,obj2);



