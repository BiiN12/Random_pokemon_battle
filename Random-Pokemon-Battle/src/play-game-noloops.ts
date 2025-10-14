import type{ChosenPokemonObject} from "./type-object";
import {compareStatsVisialy} from "./compare-Stats-Visialy.ts";
import {getRandomPokemon} from "./get-Random-Pokemon.ts";
import {generationObj} from "./type-object.ts";

const firstGen:number[] = generationObj.Gen1;
export async function playGame(numberOfPokemon:number[] = firstGen):Promise<void>{
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
    pokeBallImg.replaceWith(loadingElem);
    setTimeout(() => {
        loadingElem.replaceWith(pokeBallImg);
    }, 1000);
    displayPokemon();
            
    skipBtn.addEventListener('click', async() => {
        --pokeBall;
        playerPokemon = await getRandomPokemon(numberOfPokemon);
        if(pokeBall === 0){
            throwText.innerText = 'You have no Poké Balls left!';
            let CPUPokemon:ChosenPokemonObject = await getRandomPokemon(numberOfPokemon);
            while (CPUPokemon === playerPokemon) {
                CPUPokemon = await getRandomPokemon(numberOfPokemon);
            }

            showLoadingAnimation();
            pokeBallImg.src = CPUPokemon.img;
            setTimeout(() => {
                const loadingElem = document.getElementById('loading') as HTMLDivElement;
                loadingElem.replaceWith(pokeBallImg);
                pokemonName.innerText = CPUPokemon.name;
                throwText.innerText = `comparing stats...`;
            }, 2000);
            setTimeout(() => {
                // show the stats comparison
                compareStatsVisialy(playerPokemon, CPUPokemon);
            }, 4000);
        }else{
            pokeBallImg.replaceWith(loadingElem);
            setTimeout(() => {
                loadingElem.replaceWith(pokeBallImg);
            }, 800);
            displayPokemon();
            ballsText.innerText = `${pokeBall}`
        }
    });

    holdBtn.addEventListener('click',async() =>{
        let CPUPokemon:ChosenPokemonObject = await getRandomPokemon(numberOfPokemon);
        while (CPUPokemon === playerPokemon) {
                CPUPokemon = await getRandomPokemon(numberOfPokemon);
            }
        
        showLoadingAnimation();
        pokeBallImg.src = CPUPokemon.img;
        setTimeout(() => {
            const loadingElem = document.getElementById('loading') as HTMLDivElement;
            loadingElem.replaceWith(pokeBallImg);
            pokemonName.innerText = CPUPokemon.name;
            throwText.innerText = `comparing stats...`;
        }, 2000);
        setTimeout(() => {
            // show the stats comparison
            compareStatsVisialy(playerPokemon, CPUPokemon);
        }, 4000);
    })


    function displayPokemon():void{
        pokeBallImg.src = playerPokemon.img;
        pokemonName.innerText = playerPokemon.name;
        holdSkipDiv.classList.remove('hidden');
    }

};


// updateResults(gameResult);
// playAgain = willPlayAgain(); --- use the play again promise instead
// saveResultsInDataBase();


// Show loading animation function
function showLoadingAnimation():void {
    const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
    const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
    const loadingElem = document.createElement('div');
    loadingElem.id = 'loading';
    const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
    const throwText = document.getElementById('throw') as HTMLParagraphElement;

    loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    pokeBallImg.replaceWith(loadingElem);
    pokemonName.innerText = 'CPU is choosing...';
    throwText.innerText = 'waiting for CPU to choose';
    holdSkipDiv.classList.add('hidden');
  
}


