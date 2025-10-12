import './style.css'
import {playGame2} from "./play-game-noloops.ts"

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
pokeBallImg.addEventListener('click', () => { 
    playGame2(251);
}, { once: true });



