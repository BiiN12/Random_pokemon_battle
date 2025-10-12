

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
    normal:string[];
}

export const superEffectivTypes: PokemonTypes = {
    fire: ["grass", "ice", "bug","steel"],
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
    fairy: ["fighting", "dragon", "dark"],
    normal: [],
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

export const typeColors = {
      Normal: '#A8A77A',
      Fire: '#DC2626',
      Water: '#3B82F6',
      Electric: '#FBBF24',
      Grass: '#22C55E',
      Ice: '#60A5FA',
      Fighting: '#A52A2A',
      Poison: '#A855F7',
      Ground: '#EAB308',
      Flying: '#8B5CF6',
      Psychic: '#EC4899',
      Bug: '#10B981',
      Rock: '#BCAAA4',
      Ghost: '#6B7280',
      Dragon: '#818CF8',
      Dark: '#374151',
      Steel: '#6E7D8B',
      Fairy: '#F9A8D4',
    };

function createNumArr(startNum:number, endNum:number):number[] {
    const returnArr:number[] = [];
    for (let i = startNum; i <= endNum; i++) {
        returnArr.push(i)
    }
    return returnArr;
}
interface Generation{
    gen1: number[];
    gen2: number[];
    gen3: number[];
    gen4: number[];
    gen5: number[];
    gen6: number[];
    gen7: number[];
    gen8: number[];
    gen9: number[];
}
export const generationObj:Generation= {
   gen1: createNumArr(1,151),
   gen2: createNumArr(152,251),
   gen3: createNumArr(252,386),
   gen4: createNumArr(387,493),
   gen5: createNumArr(494,649),
   gen6: createNumArr(650,721),
   gen7: createNumArr(722,809),
   gen8: createNumArr(810,905),
   gen9: createNumArr(906,1025)
}

