import type{ChosenPokemonObject} from "./type-object";
import {compareStatsVisialy} from "./compare-Stats-Visialy.ts";
import {getRandomPokemon} from "./get-Random-Pokemon.ts";

export async function playGame2(numberOfPokemon:number = 151):Promise<void>{
    const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
    const holdBtn = document.getElementById('hold-btn') as HTMLButtonElement;
    const skipBtn = document.getElementById('skip-btn') as HTMLButtonElement;
    const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
    const ballsText = document.getElementById('balls') as HTMLParagraphElement;
    const throwText = document.getElementById('throw') as HTMLParagraphElement;
    const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;

    throwText.innerText = 'You want to hold or throw again?';

    const loadingElem = document.createElement('div') as HTMLDivElement;
    loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';

    pokeBallImg.replaceWith(loadingElem);

    let pokeBall:number = 2;
    ballsText.innerText = `${pokeBall}`
    let playerPokemon:ChosenPokemonObject = await getRandomPokemon(numberOfPokemon);
    pokeBallImg.setAttribute('src', playerPokemon.img);
    loadingElem.replaceWith(pokeBallImg);
    pokemonName.innerText = playerPokemon.name;
    holdSkipDiv.classList.remove('hidden');
            
    skipBtn.addEventListener('click', async() => {
        --pokeBall;
        playerPokemon = await getRandomPokemon(numberOfPokemon);
        if(pokeBall === 0){
            throwText.innerText = 'You have no Poké Balls left!';
            const CPUPokemon:ChosenPokemonObject = await getRandomPokemon(numberOfPokemon);
            compareStatsVisialy(playerPokemon, CPUPokemon);
        }else{
            pokeBallImg.setAttribute('src', playerPokemon.img);
            loadingElem.replaceWith(pokeBallImg);
            pokemonName.innerText = playerPokemon.name;
            ballsText.innerText = `${pokeBall}`
        }
    });

    holdBtn.addEventListener('click',async() =>{
        const CPUPokemon:ChosenPokemonObject = await getRandomPokemon(numberOfPokemon);
        compareStatsVisialy(playerPokemon, CPUPokemon);
    })

};


// updateResults(gameResult);
// playAgain = willPlayAgain(); --- use the play again promise instead
// saveResultsInDataBase();


