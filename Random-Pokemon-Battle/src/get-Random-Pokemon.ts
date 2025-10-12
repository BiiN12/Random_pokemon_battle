import type {ChosenPokemonObject} from "./type-object.ts";


export async function getRandomPokemon(numberOfPokemon:number = 151):Promise<ChosenPokemonObject>{
    // const MAX_POKEMON_ID = 151;
    const randomId = Math.floor(Math.random() * numberOfPokemon) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`;

    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Having Problem Getting a Pokemon From API. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        let chosenPokemon:ChosenPokemonObject = {
                // img: data.sprites.front_default,
                img: data.sprites.other['official-artwork'].front_default, // Using official artwork for better image quality
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                hp:data.stats[0].base_stat,
                attack:data.stats[1].base_stat,
                defense:data.stats[2].base_stat,
                specialAttack:data.stats[3].base_stat,
                specialDefense:data.stats[4].base_stat,
                speed:data.stats[5].base_stat,
                type:data.types.map((typeInfo: {type: { name:string; }; }) => typeInfo.type.name)
            };
        return chosenPokemon;
         
    } catch (error){
        console.error(`We got the error: ${error}`);
        throw error;
    }
};

