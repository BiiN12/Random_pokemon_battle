import './style.css'
import type {ChosenPokemonObject} from './type-object.ts';

const apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
const holdBtn = document.getElementById('hold-btn') as HTMLButtonElement;
const skipBtn = document.getElementById('skip-btn') as HTMLButtonElement;
const throwText = document.getElementById('throw') as HTMLParagraphElement;
const ballsText = document.getElementById('balls') as HTMLParagraphElement;


// this will hold the currently chosen pokemon
let chosenPokemon: ChosenPokemonObject = {
    img: '',
    name: '',
    hp:0,
    attack:0,
    defense:0,
    specialAttack:0,
    specialDefense:0,
    speed:0,
    type:[]
};

// this will hold the user's chosen pokemon
let userPokemon: ChosenPokemonObject[] = [];

let cpuPokemon: ChosenPokemonObject[] = [];

async function getInfo(){
    const response = await fetch(apiUrl + Math.floor(Math.random() * 151 + 1));
    const data = await response.json();
    // console.log(data);
    pokemonName.innerText = data.name;
    pokeBallImg.setAttribute('src', data.sprites.front_default);
    holdSkipDiv.classList.remove('hidden');
    
    
    chosenPokemon = {
            img: data.sprites.front_default,
            name: data.name,
            hp:data.stats[0].base_stat,
            attack:data.stats[1].base_stat,
            defense:data.stats[2].base_stat,
            specialAttack:data.stats[3].base_stat,
            specialDefense:data.stats[4].base_stat,
            speed:data.stats[5].base_stat,
            type:data.types.map((typeInfo: { type: { name: string; }; }) => typeInfo.type.name)
        };
}


// event listener for the pokeball image only runs once
pokeBallImg.addEventListener('click', () => { 
    throwText.innerText = 'Do you want to hold or throw again?';
    getInfo(); 

    // event listener for hold button that will add the chosen pokemon to the user's array
    holdBtn.addEventListener('click', () => {
        userPokemon.push(chosenPokemon);
        console.log('You held ' + chosenPokemon.name);
        console.log(userPokemon);

        // loadingTimeout();
        randomPokemonCpu(); 
    });

    // event listener for skip button that will decrease the number of pokeballs and get a new pokemon
    skipBtn.addEventListener('click', () => {
        console.log('You skipped ' + chosenPokemon.name);
        let balls = ballsText.innerText;
        balls = (parseInt(balls) - 1).toString();
        console.log(balls);
        ballsText.innerText = balls;
        if(balls === '0'){
            throwText.innerText = 'You have no Poké Balls left!';
            // holdSkipDiv.classList.add('hidden');

            userPokemon.push(chosenPokemon);
            console.log('You held ' + chosenPokemon.name);
            console.log(userPokemon);

            randomPokemonCpu();
        } else {
            throwText.innerText = 'You have ' + balls + ' Poké Balls left.';
        }

        getInfo();
    });
}, { once: true });



// function to get a random pokemon for the cpu
async function randomPokemonCpu(){
    const response = await fetch(apiUrl + Math.floor(Math.random() * 151 + 1));
    const data = await response.json();

    // Show loading animation
    const loadingElem = document.createElement('div');
    loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    pokeBallImg.replaceWith(loadingElem);
    pokemonName.innerText = 'CPU is choosing...';

    setTimeout(() => {
        // Replace loading animation with the pokeball image
        loadingElem.replaceWith(pokeBallImg);

        // Show cpu pokemon name
        
        pokemonName.innerText = data.name;
        pokeBallImg.setAttribute('src', data.sprites.front_default);
        holdSkipDiv.classList.add('hidden');
        throwText.innerText = 'CPU has chosen its Pokémon!';
        document.getElementById('description')!.innerText = ''
        document.getElementById('player')!.innerText = 'CPU Pokémon';
    }, 3000);


    chosenPokemon = {
            img: data.sprites.front_default,
            name: data.name,
            hp:data.stats[0].base_stat,
            attack:data.stats[1].base_stat,
            defense:data.stats[2].base_stat,
            specialAttack:data.stats[3].base_stat,
            specialDefense:data.stats[4].base_stat,
            speed:data.stats[5].base_stat,
            type:data.types.map((typeInfo: { type: { name: string; }; }) => typeInfo.type.name)
    };

    cpuPokemon.push(chosenPokemon);
    console.log('CPU chose ' + chosenPokemon.name);
    console.log(cpuPokemon);
}



















// const loadingTimeout = function() {
//     // document.getElementById('choose-pokemon')!.classList.add('hidden');
//     // setTimeout(() => {
//     //     document.getElementById('choose-pokemon')!.classList.remove('hidden');
//     // }, 2000);
    
//     // Show loading animation
//     const loadingElem = document.createElement('div');
//     loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    
//     pokeBallImg.replaceWith(loadingElem);

//     // Clear pokemon name
//     pokemonName.innerText = '';

//     // Hide hold/skip buttons
//     holdSkipDiv.classList.add('hidden');

//     // Update throw text
//     throwText.innerText = 'Loading...';

//     // Clear description and player text
//     document.getElementById('description')!.innerText = '';
//     document.getElementById('player')!.innerText = 'Your Pokémon';
    
//     // After 2 seconds, replace loading animation with the pokeball image
//     setTimeout(() => {
//         // const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
//         // pokeBallImg.setAttribute('src', chosenPokemon.img);
//         // loadingElem.replaceWith(pokeBallImg);

//         pokeBallImg.setAttribute('src', chosenPokemon.img);
//         loadingElem.replaceWith(pokeBallImg);

//         // // Show pokemon name
//         // pokemonName.innerText = chosenPokemon.name;

//         // // Show hold/skip buttons
//         // holdSkipDiv.classList.remove('hidden');

//         // // Update throw text
//         // throwText.innerText = 'Do you want to hold or throw again?';
//     }, 2000);
// }