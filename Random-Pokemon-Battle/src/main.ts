import './style.css'

const apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

async function getInfo(){
    const response = await fetch(apiUrl + Math.floor(Math.random() * 151 + 1));
    const data = await response.json();
    console.log(data);
    document.getElementById('pokemon-name')!.innerText = data.name;
    
}

document.getElementById('poke-ball')!.addEventListener('click', getInfo);
// getInfo();