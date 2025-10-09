// import './style.css'

//     // function to get a random pokemon for the cpu
//     async function randomPokemonCpu(){
//         const response = await fetch(apiUrl + Math.floor(Math.random() * 151 + 1));
//         const data = await response.json();

//         // Show loading animation
//         const loadingElem = document.createElement('div');
//         loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';
//         pokeBallImg.replaceWith(loadingElem);
//         pokemonName.innerText = 'CPU is choosing...';

//         setTimeout(() => {
//             // Replace loading animation with the pokeball image
//             loadingElem.replaceWith(pokeBallImg);

//             // Show cpu pokemon name
            
//             pokemonName.innerText = data.name;
//             pokeBallImg.setAttribute('src', data.sprites.front_default);
//             holdSkipDiv.classList.add('hidden');
//             throwText.innerText = 'CPU has chosen its Pokémon!';
//             document.getElementById('description')!.innerText = ''
//             document.getElementById('player')!.innerText = 'CPU Pokémon';
//         }, 3000);
//     }

// // const loadingTimeout = function() {
// //     // document.getElementById('choose-pokemon')!.classList.add('hidden');
// //     // setTimeout(() => {
// //     //     document.getElementById('choose-pokemon')!.classList.remove('hidden');
// //     // }, 2000);
    
// //     // Show loading animation
// //     const loadingElem = document.createElement('div');
// //     loadingElem.innerHTML = '<i class="fa-solid fa-spinner"></i>';
    
// //     pokeBallImg.replaceWith(loadingElem);

// //     // Clear pokemon name
// //     pokemonName.innerText = '';

// //     // Hide hold/skip buttons
// //     holdSkipDiv.classList.add('hidden');

// //     // Update throw text
// //     throwText.innerText = 'Loading...';

// //     // Clear description and player text
// //     document.getElementById('description')!.innerText = '';
// //     document.getElementById('player')!.innerText = 'Your Pokémon';
    
// //     // After 2 seconds, replace loading animation with the pokeball image
// //     setTimeout(() => {
// //         // const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
// //         // pokeBallImg.setAttribute('src', chosenPokemon.img);
// //         // loadingElem.replaceWith(pokeBallImg);

// //         pokeBallImg.setAttribute('src', chosenPokemon.img);
// //         loadingElem.replaceWith(pokeBallImg);

// //         // // Show pokemon name
// //         // pokemonName.innerText = chosenPokemon.name;

// //         // // Show hold/skip buttons
// //         // holdSkipDiv.classList.remove('hidden');

// //         // // Update throw text
// //         // throwText.innerText = 'Do you want to hold or throw again?';
// //     }, 2000);
// // }