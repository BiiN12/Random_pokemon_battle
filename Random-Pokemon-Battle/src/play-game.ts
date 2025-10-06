

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
        determineBattleWinner(playerPokemon, CPUPokemon) //return: (Win, Lose, Draw)
        compareStatsVisialy() //the function with timeout to show the stats
        updateResults();
        playAgain = willPlayAgain();
    };
    saveResultsInDataBase();
};