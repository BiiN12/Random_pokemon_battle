import './style.css'
import {playGame} from "./play-game-noloops.ts"

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
pokeBallImg.addEventListener('click', () => { 
    playGame(2);
}, { once: true });



