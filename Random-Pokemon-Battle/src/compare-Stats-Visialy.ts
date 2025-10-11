import type{ChosenPokemonObject} from "./type-object";
import {superEffectivTypes} from "./type-object";

export function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):string {
    const pokeBallImg = document.getElementById('pokemon-ball') as HTMLImageElement;
    const holdSkipDiv = document.getElementById('hold-skip') as HTMLDivElement;
    const holdBtn = document.getElementById('hold-btn') as HTMLButtonElement;
    const skipBtn = document.getElementById('skip-btn') as HTMLButtonElement;
    const pokemonName = document.getElementById('pokemon-name') as HTMLParagraphElement;
    const ballsText = document.getElementById('balls') as HTMLParagraphElement;
    const throwText = document.getElementById('throw') as HTMLParagraphElement;
    const tableElment:HTMLElement = document.createElement("table");
    let playerPoints:number = 0;
    let cpuPoints:number = 0;
    let numberOfRows:number = 0;
    
    Object.keys(playerPokemonObjc).forEach(key =>{
        const rowElment:HTMLElement = document.createElement("tr");
        const keyNameTd:HTMLElement = document.createElement("td");
        const playerTD:HTMLElement = document.createElement("td");
        const cpuTD:HTMLElement = document.createElement("td");
        const winnerTD:HTMLElement = document.createElement("td");
        numberOfRows ++;

        if(key === "img"){
            playerTD.innerHTML = `<img src='${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}'>`;
            cpuTD.innerHTML = `<img src='${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}'>`;
        }else if(key !== "type"){
            keyNameTd.innerHTML = `<p>${key}: </p>`;
            playerTD.innerHTML = `<p>${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}</p>`;
            cpuTD.innerHTML = `<p>${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}</p>`;
            if(key !== "name"){
                if(playerPokemonObjc[key as keyof typeof playerPokemonObjc]>CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
                    winnerTD.innerHTML = `<p>${playerPokemonObjc.name} Wins</p>`;
                    ++playerPoints;
                }else if (playerPokemonObjc[key as keyof typeof playerPokemonObjc]<CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
                    winnerTD.innerHTML = `<p>${CPUPokemonObjc.name} Wins</p>`;
                    ++cpuPoints;
                }else{
                    winnerTD.innerHTML = `<p>Its a Tie</p>`;
                }
            }
        };

        // TIE BRAKER: (will happen only if there is a tie)
        if(key === "type" && playerPoints === cpuPoints){
            keyNameTd.innerHTML = `<p><span>Tie Braker: </span>${key}: </p>`;
            playerTD.innerHTML = `<p>${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}</p>`;
            cpuTD.innerHTML = `<p>${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}</p>`;

            playerPokemonObjc.type.forEach(playerType =>{
                const playerTypesArry:string[] = superEffectivTypes[playerType as keyof typeof superEffectivTypes];
                CPUPokemonObjc.type.forEach(cpuType =>{
                    if(playerTypesArry.includes(cpuType)){
                        playerPoints++
                    }
                });
            });
            CPUPokemonObjc.type.forEach(cpuType =>{
                const cpuTypesArry:string[] = superEffectivTypes[cpuType as keyof typeof superEffectivTypes];
                playerPokemonObjc.type.forEach(playerType =>{
                    if(cpuTypesArry.includes(playerType)){
                        cpuPoints++
                    }
                });
            });
            if (playerPoints > cpuPoints) {
                winnerTD.innerHTML = `<p>${playerPokemonObjc.name} Wins!</p>`;
            }else if(playerPoints < cpuPoints){
                winnerTD.innerHTML = `<p>${CPUPokemonObjc.name} Wins!</p>`;
            }else{
                winnerTD.innerHTML = `<p>Its a Tie!</p>`;
            }
        }

        // dysplaying all the battle on the WEB PAGE:
        holdSkipDiv.classList.add('hidden');
        pokemonName.classList.add('hidden');
        ballsText.classList.add('hidden');
        throwText.classList.add('hidden');
        holdBtn.classList.add('hidden');
        skipBtn.classList.add('hidden');

        pokeBallImg.replaceWith(tableElment);
        if(key === "img" || key === "name"){
            rowElment.appendChild(keyNameTd);
            rowElment.appendChild(playerTD);
            rowElment.appendChild(cpuTD);
            rowElment.appendChild(winnerTD);
            tableElment.appendChild(rowElment);
        }else{
            const delay:number = numberOfRows * 1000;
            setTimeout(() => {
                rowElment.appendChild(keyNameTd);
                rowElment.appendChild(playerTD);
                rowElment.appendChild(cpuTD);
                rowElment.appendChild(winnerTD);
                tableElment.appendChild(rowElment);
            }, delay);
        }
    });

    
    if (playerPoints > cpuPoints) {
        console.log("WIN");
        return "WIN"
    }else if( playerPoints < cpuPoints){
        console.log("LOSS");
        return "LOSS"
    }else{
        console.log("TIE");
        return "TIE"
    }
};

