import type{ChosenPokemonObject} from "./type-object";
import {typeColors} from "./type-object";
// import {superEffectivTypes} from "./type-object";

// export function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):string {
//     const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
//     const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
//     const holdBtn = document.getElementById('hold-btn') as HTMLButtonElement;
//     const skipBtn = document.getElementById('skip-btn') as HTMLButtonElement;
//     const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
//     const ballsText = document.getElementById('balls') as HTMLParagraphElement;
//     const throwText = document.getElementById('throw') as HTMLParagraphElement;
//     const tableElment:HTMLElement = document.createElement("table");
//     let playerPoints:number = 0;
//     let cpuPoints:number = 0;
//     let numberOfRows:number = 0;
    
//     Object.keys(playerPokemonObjc).forEach(key =>{
//         const rowElment:HTMLElement = document.createElement("tr");
//         const keyNameTd:HTMLElement = document.createElement("td");
//         const playerTD:HTMLElement = document.createElement("td");
//         const cpuTD:HTMLElement = document.createElement("td");
//         const winnerTD:HTMLElement = document.createElement("td");
//         numberOfRows ++;

//         if(key === "img"){
//             playerTD.innerHTML = `<img src='${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}'>`;
//             cpuTD.innerHTML = `<img src='${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}'>`;
//         }else if(key !== "type"){
//             keyNameTd.innerHTML = `<p>${key}: </p>`;
//             playerTD.innerHTML = `<p>${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}</p>`;
//             cpuTD.innerHTML = `<p>${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}</p>`;
//             if(key !== "name"){
//                 if(playerPokemonObjc[key as keyof typeof playerPokemonObjc]>CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
//                     winnerTD.innerHTML = `<p>${playerPokemonObjc.name} Wins</p>`;
//                     ++playerPoints;
//                 }else if (playerPokemonObjc[key as keyof typeof playerPokemonObjc]<CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
//                     winnerTD.innerHTML = `<p>${CPUPokemonObjc.name} Wins</p>`;
//                     ++cpuPoints;
//                 }else{
//                     winnerTD.innerHTML = `<p>Its a Tie</p>`;
//                 }
//             }
//         };

//         // TIE BRAKER: (will happen only if there is a tie)
//         if(key === "type" && playerPoints === cpuPoints){
//             keyNameTd.innerHTML = `<p>${key}: </p>`;
//             playerTD.innerHTML = `<p>${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}</p>`;
//             cpuTD.innerHTML = `<p>${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}</p>`;

//             playerPokemonObjc.type.forEach(playerType =>{
//                 const playerTypesArry:string[] = superEffectivTypes[playerType as keyof typeof superEffectivTypes];
//                 CPUPokemonObjc.type.forEach(cpuType =>{
//                     if(playerTypesArry.includes(cpuType)){
//                         playerPoints++
//                     }
//                 });
//             });
//             CPUPokemonObjc.type.forEach(cpuType =>{
//                 const cpuTypesArry:string[] = superEffectivTypes[cpuType as keyof typeof superEffectivTypes];
//                 playerPokemonObjc.type.forEach(playerType =>{
//                     if(cpuTypesArry.includes(playerType)){
//                         cpuPoints++
//                     }
//                 });
//             });
//             if (playerPoints > cpuPoints) {
//                 winnerTD.innerHTML = `<p>${playerPokemonObjc.name} Wins</p>`;
//             }else if(playerPoints < cpuPoints){
//                 winnerTD.innerHTML = `<p>${CPUPokemonObjc.name} Wins</p>`;
//             }else{
//                 winnerTD.innerHTML = `<p>Its a Tie</p>`;
//             }
//         }

//         // dysplaying all the battle on the WEB PAGE:
//         holdSkipDiv.classList.add('hidden');
//         pokemonName.classList.add('hidden');
//         ballsText.classList.add('hidden');
//         throwText.classList.add('hidden');
//         holdBtn.classList.add('hidden');
//         skipBtn.classList.add('hidden');

//         pokeBallImg.replaceWith(tableElment);
//         if(key === "img" || key === "name"){
//             rowElment.appendChild(keyNameTd);
//             rowElment.appendChild(playerTD);
//             rowElment.appendChild(cpuTD);
//             rowElment.appendChild(winnerTD);
//             tableElment.appendChild(rowElment);
//         }else{
//             const delay:number = numberOfRows * 1000;
//             setTimeout(() => {
//                 rowElment.appendChild(keyNameTd);
//                 rowElment.appendChild(playerTD);
//                 rowElment.appendChild(cpuTD);
//                 rowElment.appendChild(winnerTD);
//                 tableElment.appendChild(rowElment);
//             }, delay);
//         }
//     });

    
//     if (playerPoints > cpuPoints) {
//         console.log("WIN");
//         return "WIN"
//     }else if( playerPoints < cpuPoints){
//         console.log("LOSS");
//         return "LOSS"
//     }else{
//         console.log("TIE");
//         return "TIE"
//     }
// };



export function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):void {
  const playerStats = [playerPokemonObjc.hp, playerPokemonObjc.attack, playerPokemonObjc.defense, playerPokemonObjc.specialAttack, playerPokemonObjc.specialDefense, playerPokemonObjc.speed];
  const cpuStats = [CPUPokemonObjc.hp, CPUPokemonObjc.attack, CPUPokemonObjc.defense, CPUPokemonObjc.specialAttack, CPUPokemonObjc.specialDefense, CPUPokemonObjc.speed];

  let playerPoints: number = 0;
  let cpuPoints: number = 0;
  for (const stat of playerStats) {
    if (stat > cpuStats[playerStats.indexOf(stat)]) {
      playerPoints++;
    }
    else if (stat < cpuStats[playerStats.indexOf(stat)]) {
      cpuPoints++;
    }
  }

  console.log(`Player Points: ${playerPoints}, CPU Points: ${cpuPoints}`);

  let winner: string;

  if (playerPoints > cpuPoints) winner = "player";
  else if (playerPoints < cpuPoints) winner = "cpu";
  else winner = "tie";

  // console.log(winner);
  
  const playerFirstType = playerPokemonObjc.type[0];
  const playerTypeColor: string = typeColors[playerFirstType.charAt(0).toUpperCase() + playerFirstType.slice(1) as keyof typeof typeColors];

  const cpuFirstType = CPUPokemonObjc.type[0];
  const cpuTypeColor: string = typeColors[cpuFirstType.charAt(0).toUpperCase() + cpuFirstType.slice(1) as keyof typeof typeColors];

  
  
  const compareHtml: string = `
    <div class="game-area">
        <div class="pokemon-cards">
          <div class="pokemon-card">
            <div class="card-header" style="background-color: ${playerTypeColor}; color: ${getContrastColor(playerTypeColor)};">
              <h2>${playerPokemonObjc.name.charAt(0).toUpperCase() + playerPokemonObjc.name.slice(1)}</h2>
              <span style="color: ${getContrastColor(playerTypeColor)}">${playerPokemonObjc.type.join("/")}</span>
            </div>
            <img src="${playerPokemonObjc.img}" alt="${playerPokemonObjc.name}" >
          </div>
          <span class="vs">Vs</span>
          <div class="pokemon-card">
            <div class="card-header" style="background-color: ${cpuTypeColor}; color: ${getContrastColor(cpuTypeColor)};">
              <h2>${CPUPokemonObjc.name.charAt(0).toUpperCase() + CPUPokemonObjc.name.slice(1)}</h2>
              <span style="color: ${getContrastColor(cpuTypeColor)}">${CPUPokemonObjc.type.join("/")}</span>
            </div>
            <img src="${CPUPokemonObjc.img}" alt="${CPUPokemonObjc.name}">
          </div>
        </div>
    </div>


      <div class="stats">
        <h3>Battle Stats</h3>
        <div class="stat">
          <p>Hp:</p>
          <div><span class=${playerPokemonObjc.hp > CPUPokemonObjc.hp ? "win": ''}>${playerPokemonObjc.hp}</span> <span>vs</span> <span class=${playerPokemonObjc.hp < CPUPokemonObjc.hp? "loss":''}>${CPUPokemonObjc.hp}</span></div>
        </div>
        <div class="stat">
          <p>Attack:</p>
          <div><span class=${playerPokemonObjc.attack > CPUPokemonObjc.attack ? "win": ''}>${playerPokemonObjc.attack}</span> <span>vs</span> <span class=${playerPokemonObjc.attack < CPUPokemonObjc.attack? "loss":''}>${CPUPokemonObjc.attack}</span></div>
        </div>
        <div class="stat">
          <p>Defense:</p>
          <div><span class=${playerPokemonObjc.defense > CPUPokemonObjc.defense ? "win": ''}>${playerPokemonObjc.defense}</span> <span>vs</span> <span class=${playerPokemonObjc.defense < CPUPokemonObjc.defense? "loss":''}>${CPUPokemonObjc.defense}</span></div>
        </div>
        <div class="stat">
          <p>Speed:</p>
          <div><span class=${playerPokemonObjc.speed > CPUPokemonObjc.speed? "win": ''}>${playerPokemonObjc.speed}</span> <span>vs</span> <span class=${playerPokemonObjc.speed < CPUPokemonObjc.speed? "loss":''}>${CPUPokemonObjc.speed}</span></div>
        </div>
        <div class="stat">
          <p>Special Attack:</p>
          <div><span class=${playerPokemonObjc.specialAttack > CPUPokemonObjc.specialAttack? "win": ''}>${playerPokemonObjc.specialAttack}</span> <span>vs</span> <span class=${playerPokemonObjc.specialAttack < CPUPokemonObjc.specialAttack? "loss":''}>${CPUPokemonObjc.specialAttack}</span></div>
        </div>
        <div class="stat">
          <p>Special Defense:</p>
          <div><span class=${playerPokemonObjc.specialDefense > CPUPokemonObjc.specialDefense? "win": ''}>${playerPokemonObjc.specialDefense}</span> <span>vs</span> <span class=${playerPokemonObjc.specialDefense < CPUPokemonObjc.specialDefense? "loss":''}>${CPUPokemonObjc.specialDefense}</span></div>
        </div>
      </div>


      <div class="result result-${winner}">
        <h2>${winner == "player" ? "You Won": winner == "cpu"? "You Lose": "It's a Tie"}!</h2>
        <p>Your ${playerPokemonObjc.name.charAt(0).toUpperCase() + playerPokemonObjc.name.slice(1)} ${winner == "tie"? "and": "defeated"} ${winner == "cpu"? "by" : "the"} cpu's ${CPUPokemonObjc.name.charAt(0).toUpperCase() + CPUPokemonObjc.name.slice(1)}${winner == "tie"?" are equals":''}!</p>
    </div>

      <button class="play-again-btn" id="playAgainBtn">Play Again</button>
`;

  document.getElementById('choose-pokemon')!.innerHTML = compareHtml;



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