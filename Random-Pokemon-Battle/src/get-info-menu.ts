import type{ChosenPokemonObject} from "./type-object";


export function getInfoOnMenuPage(pokeObjct:ChosenPokemonObject):void{
    const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
    const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
    const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
    const loadingElem = document.createElement('div') as HTMLDivElement;

    pokeBallImg.setAttribute('src', pokeObjct.img);
    loadingElem.replaceWith(pokeBallImg);
    pokemonName.innerText = pokeObjct.name;
    holdSkipDiv.classList.remove('hidden');
}


export function waitForButtonClick(button: HTMLButtonElement): Promise<void> {
    return new Promise((resolve) => {
        const clickHandler = () => {
            button.removeEventListener('click', clickHandler);
            resolve();
        };
        button.addEventListener('click', clickHandler);
    });
}