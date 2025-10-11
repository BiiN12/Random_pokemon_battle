
import {generationObj} from "./type-object.ts";


const returnPokemonNumArry:number[] = []
Object.keys(generationObj).forEach((key) =>{
    const generationButton:HTMLButtonElement = document.createElement("button");
    generationButton.innerHTML = `${key}`;
    generationButton.addEventListener("click",()=>{
        let firstPokeInGen = returnPokemonNumArry.indexOf(generationObj[key as keyof typeof generationObj][0])
        if(firstPokeInGen !== -1){
            generationObj[key as keyof typeof generationObj].forEach((pokemonID:number)=>{
                returnPokemonNumArry.push(pokemonID)
            })
        }else{
            const lengthOfGen = generationObj[key as keyof typeof generationObj].length;
            returnPokemonNumArry.splice(firstPokeInGen,lengthOfGen);
        }
    });
});



