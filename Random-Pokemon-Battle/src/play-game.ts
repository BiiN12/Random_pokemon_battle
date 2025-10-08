import type{ChosenPokemonObject} from "./player-cpu-objects.ts";
import {compareStatsVisialy} from "./compare-Stats-Visialy.ts";

export function playGame():void{
    let playAgain:boolean = true;
    while (playAgain) {
        let pokeBall:number = 3;
        let holdPokemon:boolean = false;
        let playerPokemon:ChosenPokemonObject;
        while(!holdPokemon){
            pokeBall--;
            playerPokemon = getRandomPokemon();
            if(pokeBall === 0){
                holdPokemon = true;
            }else{
                holdPokemon = isPokemonHold();
            }
        };
        const CPUPokemon:ChosenPokemonObject = getRandomPokemon();
        const gameResult = compareStatsVisialy(playerPokemon, CPUPokemon) //the function with timeout to show the stats on the HTML - return (win, loss, tie)
        updateResults(gameResult);
        playAgain = willPlayAgain();
    };
    saveResultsInDataBase();
};