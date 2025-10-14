import './style.css'
import {playGame} from "./play-game-noloops.ts"
import {generationObj} from "./type-object.ts";

const returnPokemonNumArry:number[] = []

const divGenButton = document.getElementById('gen-buttons-div') as HTMLDivElement;
Object.keys(generationObj).forEach((key) =>{
    const generationButton:HTMLButtonElement = document.createElement("button");
    generationButton.classList.add('gen-button')
    generationButton.innerHTML = `${key}`;
    generationButton.addEventListener("click",()=>{
        let firstPokeInGen = returnPokemonNumArry.indexOf(generationObj[key as keyof typeof generationObj][0])
        if(firstPokeInGen === -1){
            generationButton.classList.add('gen-button-pressed');
            generationObj[key as keyof typeof generationObj].forEach((pokemonID:number)=>{
                returnPokemonNumArry.push(pokemonID)
            })
            // console.log(returnPokemonNumArry);
        }else{
            generationButton.classList.remove('gen-button-pressed');
            const lengthOfGen = generationObj[key as keyof typeof generationObj].length;
            returnPokemonNumArry.splice(firstPokeInGen,lengthOfGen);
            // console.log(returnPokemonNumArry);
        }
    });
    divGenButton.appendChild(generationButton);
});

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
pokeBallImg.addEventListener('click', () => { 
    if (returnPokemonNumArry.length<1) {
        const firstGen:number[] = generationObj.Gen1; 
        playGame(firstGen)
        // playGame([25,120]) - test tie braker (pikachu and staryu)
        // playGame([54,111]) -test tie braker (psyduck and ryhorn)
    }else{
        playGame(returnPokemonNumArry);
        // playGame([25,120]) - test tie braker (pikachu and staryu)
        // playGame([54,111]) -test tie braker (psyduck and ryhorn)
    }
    
}, { once: true });



