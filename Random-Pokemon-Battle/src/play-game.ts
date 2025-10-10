import type{ChosenPokemonObject} from "./type-object";
import {compareStatsVisialy} from "./compare-Stats-Visialy.ts";
import {getRandomPokemon} from "./get-Random-Pokemon.ts";
import {waitForButtonClick} from "./get-info-menu.ts";

export async function playGame():Promise<void>{
    const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
    const holdBtn = document.getElementById('hold-btn') as HTMLButtonElement;
    const skipBtn = document.getElementById('skip-btn') as HTMLButtonElement;
    const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
    const ballsText = document.getElementById('balls') as HTMLParagraphElement;
    const throwText = document.getElementById('throw') as HTMLParagraphElement;
    const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
    const loadingElem = document.createElement('div') as HTMLDivElement;
    loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';

    pokeBallImg.replaceWith(loadingElem);

    let playAgain:boolean = true;
    while (playAgain) {
        let pokeBall:number = 3;
        let holdPokemon:boolean = false;
        let playerPokemon!:ChosenPokemonObject;
        
        while(!holdPokemon){
            --pokeBall;
            playerPokemon = await getRandomPokemon();
            pokeBallImg.setAttribute('src', playerPokemon.img);
            loadingElem.replaceWith(pokeBallImg);
            pokemonName.innerText = playerPokemon.name;
            holdSkipDiv.classList.remove('hidden');
            // getInfoOnMenuPage(playerPokemon);
    
            if(pokeBall === 0){
                throwText.innerText = 'You have no Poké Balls left!';
                holdPokemon = true;
            }else{
                ballsText.innerText = `You have ${pokeBall} Poké Balls left.`
                const userChoicePromise = Promise.race([
                waitForButtonClick(holdBtn).then(() => 'HOLD'),
                waitForButtonClick(skipBtn).then(() => 'SKIP')
                ]);
                const choice = await userChoicePromise;
                 if (choice === 'HOLD') {
                    holdPokemon = true;
                } else { 
                    holdPokemon = false;
                }
            }
        };

        const CPUPokemon:ChosenPokemonObject = await getRandomPokemon();
        compareStatsVisialy(playerPokemon, CPUPokemon)
        // updateResults(gameResult);
        // playAgain = willPlayAgain(); --- use the play again promise instead
        // const playAgainPromise = Promise.race([
        //         waitForButtonClick(holdBtn).then(() => 'HOLD'),
        //         waitForButtonClick(skipBtn).then(() => 'SKIP')
        //         ]);
    };
    // saveResultsInDataBase();
};

