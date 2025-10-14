import type{ChosenPokemonObject} from "./type-object";
import {typeColors} from "./type-object";
import {superEffectivTypes} from "./type-object";

 
export function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):void {
  const playerStats = [playerPokemonObjc.hp, playerPokemonObjc.attack, playerPokemonObjc.defense, playerPokemonObjc.speed, playerPokemonObjc.specialAttack, playerPokemonObjc.specialDefense];
  const cpuStats = [CPUPokemonObjc.hp, CPUPokemonObjc.attack, CPUPokemonObjc.defense, CPUPokemonObjc.speed, CPUPokemonObjc.specialAttack, CPUPokemonObjc.specialDefense];

  let playerPoints: number = 0;
  let cpuPoints: number = 0;
  for (let i = 0; i < playerStats.length; i++) {
  const playerStat = playerStats[i];
  const cpuStat = cpuStats[i];
  
  // console.log(playerStat, cpuStat);
  
  if (playerStat > cpuStat) {
    playerPoints++;
  } else if (playerStat < cpuStat) {
    cpuPoints++;
  }
}
  

  let winner: string;
  let tieResult: string = '';
  let showTieBreaker: boolean = false;

  if (playerPoints > cpuPoints) winner = "player";
  else if (playerPoints < cpuPoints) winner = "cpu";
  else {
    showTieBreaker = true;
    tieResult = typeBattle(playerPokemonObjc, CPUPokemonObjc);
  }
  
  function typeBattle(pokemonobjct1:ChosenPokemonObject, pokemonobjct2:ChosenPokemonObject):string {
    let playerTypeMessegeString:string="";
    let cpuTypeMessegeString:string="";
    pokemonobjct1.type.forEach(playerType =>{
        const playerTypesArry:string[] = superEffectivTypes[playerType as keyof typeof superEffectivTypes];
        pokemonobjct2.type.forEach(cpuType =>{
            if(playerTypesArry.includes(cpuType)){
              playerTypeMessegeString+=`${playerType.charAt(0).toUpperCase() + playerType.slice(1)} Type is SuperEffective againts ${pokemonobjct2.name}'s ${cpuType.charAt(0).toUpperCase() + cpuType.slice(1)} Type `
                playerPoints++
            }
        });
    });
    pokemonobjct2.type.forEach(cpuType =>{
        const cpuTypesArry:string[] = superEffectivTypes[cpuType as keyof typeof superEffectivTypes];
        pokemonobjct1.type.forEach(playerType =>{
            if(cpuTypesArry.includes(playerType)){
              cpuTypeMessegeString+=`${cpuType.charAt(0).toUpperCase() + cpuType.slice(1)} Type is SuperEffective againts ${pokemonobjct1.name}'s ${playerType.charAt(0).toUpperCase() + playerType.slice(1)} Type`
                cpuPoints++
            }
        });
    });
    if (playerPoints > cpuPoints) {
        winner = "player";
        return `<span class="win"> ${pokemonobjct1.name}'s ${playerTypeMessegeString}</span>`;
    }else if(playerPoints < cpuPoints){
        winner = "cpu";
        return `<span class="loss"> ${pokemonobjct2.name}'s ${cpuTypeMessegeString}</span>`;
    }else{
        winner = "tie";
        return "<span>There is no advantage on Super Effective Types</span>";
    }
  }

  // console.log(`Player Points: ${playerPoints}, CPU Points: ${cpuPoints}`);

  const playerFirstType = playerPokemonObjc.type[0];
  const playerTypeColor: string = typeColors[playerFirstType.charAt(0).toUpperCase() + playerFirstType.slice(1) as keyof typeof typeColors];

  const cpuFirstType = CPUPokemonObjc.type[0];
  const cpuTypeColor: string = typeColors[cpuFirstType.charAt(0).toUpperCase() + cpuFirstType.slice(1) as keyof typeof typeColors];

  const compareHtml: string = `
    <div class="game-area">
        <div class="pokemon-cards">
          <div class="pokemon-card">
            <div class="card-header" style="background-color: ${playerTypeColor}; color: ${getContrastColor(playerTypeColor)};">
              <h2>${playerPokemonObjc.name}</h2>
              <span style="color: ${getContrastColor(playerTypeColor)}">${playerPokemonObjc.type.join("/")}</span>
            </div>
            <img src="${playerPokemonObjc.img}" alt="${playerPokemonObjc.name}" >
          </div>
          <span class="vs">Vs</span>
          <div class="pokemon-card">
            <div class="card-header" style="background-color: ${cpuTypeColor}; color: ${getContrastColor(cpuTypeColor)};">
              <h2>${CPUPokemonObjc.name}</h2>
              <span style="color: ${getContrastColor(cpuTypeColor)}">${CPUPokemonObjc.type.join("/")}</span>
            </div>
            <img src="${CPUPokemonObjc.img}" alt="${CPUPokemonObjc.name}">
          </div>
        </div>
    </div>

      <div class="stats">
        <h3>Battle Stats</h3>
        <div class="stat" style="opacity: 0;">
          <p>Hp:</p>
          <div><span class=${playerPokemonObjc.hp > CPUPokemonObjc.hp ? "win": ''}>${playerPokemonObjc.hp}</span> <span>vs</span> <span class=${playerPokemonObjc.hp < CPUPokemonObjc.hp? "loss":''}>${CPUPokemonObjc.hp}</span></div>
        </div>
        <div class="stat" style="opacity: 0;">
          <p>Attack:</p>
          <div><span class=${playerPokemonObjc.attack > CPUPokemonObjc.attack ? "win": ''}>${playerPokemonObjc.attack}</span> <span>vs</span> <span class=${playerPokemonObjc.attack < CPUPokemonObjc.attack? "loss":''}>${CPUPokemonObjc.attack}</span></div>
        </div>
        <div class="stat" style="opacity: 0;">
          <p>Defense:</p>
          <div><span class=${playerPokemonObjc.defense > CPUPokemonObjc.defense ? "win": ''}>${playerPokemonObjc.defense}</span> <span>vs</span> <span class=${playerPokemonObjc.defense < CPUPokemonObjc.defense? "loss":''}>${CPUPokemonObjc.defense}</span></div>
        </div>
        <div class="stat" style="opacity: 0;">
          <p>Speed:</p>
          <div><span class=${playerPokemonObjc.speed > CPUPokemonObjc.speed? "win": ''}>${playerPokemonObjc.speed}</span> <span>vs</span> <span class=${playerPokemonObjc.speed < CPUPokemonObjc.speed? "loss":''}>${CPUPokemonObjc.speed}</span></div>
        </div>
        <div class="stat" style="opacity: 0;">
          <p>Special Attack:</p>
          <div><span class=${playerPokemonObjc.specialAttack > CPUPokemonObjc.specialAttack? "win": ''}>${playerPokemonObjc.specialAttack}</span> <span>vs</span> <span class=${playerPokemonObjc.specialAttack < CPUPokemonObjc.specialAttack? "loss":''}>${CPUPokemonObjc.specialAttack}</span></div>
        </div>
        <div class="stat" style="opacity: 0;">
          <p>Special Defense:</p>
          <div><span class=${playerPokemonObjc.specialDefense > CPUPokemonObjc.specialDefense? "win": ''}>${playerPokemonObjc.specialDefense}</span> <span>vs</span> <span class=${playerPokemonObjc.specialDefense < CPUPokemonObjc.specialDefense? "loss":''}>${CPUPokemonObjc.specialDefense}</span></div>
        </div>
        <div class="stat" style="display: ${showTieBreaker? "flex" : "none"}; opacity: 0;">
          <p><strong>Tie Breaker:</strong></p>
          <div>${tieResult}</div>
        </div>

      </div>

      <div class="result result-${winner!}" style="opacity: 0;">
        <h2>${winner! == "player" ? "You Won": winner! == "cpu"? "You Lose": "It's a Tie"}!</h2>
        <p>Your ${playerPokemonObjc.name} ${winner! == "tie"? "and": "defeated"} ${winner! == "cpu"? "by" : "the"} cpu's ${CPUPokemonObjc.name}${winner! == "tie"?" are equals":''}!</p>
      </div>

      <button class="play-again-btn" id="playAgainBtn" style="opacity: 0;">Play Again</button>
`;


  document.getElementById('choose-pokemon')!.innerHTML = compareHtml;
  

  // 2 second delay for each stat to appear
  const statElements = document.querySelectorAll('.stat');
  statElements.forEach((stat, index) => {
    setTimeout(() => {
      (stat as HTMLElement).style.transition = 'opacity 0.5s ease-in-out';
      (stat as HTMLElement).style.opacity = '1';
    }, index * 1300);
  });

  // show the result and button
  setTimeout(() => {
    const resultElement = document.querySelector('.result') as HTMLElement;
    const playAgainBtn = document.getElementById('playAgainBtn') as HTMLButtonElement;
    resultElement.style.transition = 'opacity 0.5s ease-in-out';
    resultElement.style.opacity = '1';
    playAgainBtn.style.transition = 'opacity 0.5s ease-in-out';
    playAgainBtn.style.opacity = '1';
  }, statElements.length * 1000 + 500);


  const playAgainBtn = document.getElementById('playAgainBtn') as HTMLButtonElement;
  playAgainBtn.addEventListener('click', () => {
    window.location.reload();
  });


}


function getContrastColor(hexColor: string): string {
  // Remove the # if present
  const hex = hexColor.replace("#", "");
  
  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate luminance (brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return white text for dark backgrounds, black text for light backgrounds
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

