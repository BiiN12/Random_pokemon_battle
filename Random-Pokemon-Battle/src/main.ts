import './style.css'
// import {playGame} from "./play-game";
import {playGame2} from "./play-game-noloops.ts"

const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
pokeBallImg.addEventListener('click', () => { 
    // playGame();
    playGame2(1025);
}, { once: true });



