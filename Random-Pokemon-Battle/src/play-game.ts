

function playGame():void{
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
        compareStatsVisialy(playerPokemon, CPUPokemon) //the function with timeout to show the stats on the HTML
        const gameResult = determineBattleWinner(playerPokemon, CPUPokemon) //return: (Win, Lose, Draw)
        updateResults(gameResult);
        playAgain = willPlayAgain();
    };
    saveResultsInDataBase();
};