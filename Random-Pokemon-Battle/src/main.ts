import './style.css'
import {playGame} from "./play-game";

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
pokeBallImg.addEventListener('click', () => { 
    playGame();
}, { once: true });



