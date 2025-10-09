

interface PokemonTypes{
    fire: string[];
    water: string[];
    electric: string[];
    grass: string[];
    ice: string[];
    fighting: string[];
    poison:string[];
    ground:string[];
    flying:string[];
    psychic:string[];
    bug:string[];
    rock:string[];
    ghost:string[];
    dragon:string[];
    dark:string[];
    steel:string[];
    fairy:string[];
}

export const superEffectivTypes: PokemonTypes = {
    fire: ['grass', "ice", "bug","steel"],
    water: ["fire","ground", "rock"],
    electric: ["water", "flying"],
    grass: ["water","ground", "rock"],
    ice: ["grass", "ground", "flying", "dragon"],
    fighting: ["normal", "ice", "rock", "dark", "steel"],
    poison: ["grass", "fairy"],
    ground: ["fire", "electric", "poison", "rock", "steel"],
    flying: ["grass", "fighting", "bug"],
    psychic: ["fighting", "poison"],
    bug: ["grass", "psychic", "dark"],
    rock: ["fire", "ice", "flying", "bug"],
    ghost: ["psychic", "ghost"],
    dragon: ["dragon"],
    dark: ["psychic", "ghost"],
    steel: ["ice", "rock"],
    fairy: ["fighting", "dragon", "dark"]
}

export interface ChosenPokemonObject{
    img: string;
    name: string;
    hp:number;
    attack:number;
    defense:number;
    specialAttack:number;
    specialDefense:number;
    speed:number;
    type:string[];
}
