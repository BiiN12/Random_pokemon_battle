import type{ChosenPokemonObject} from "./player-cpu-objects.ts";
import {superEffectivTypes} from "./type-object";

export function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):string {
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
        }else{
            keyNameTd.innerHTML = `<p>${key}: </p>`;
            playerTD.innerHTML = `<p>${playerPokemonObjc[key as keyof typeof playerPokemonObjc]}</p>`;
            cpuTD.innerHTML = `<p>${CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]}</p>`;
            if(key !== "name" && key !=="type"){
                if(playerPokemonObjc[key as keyof typeof playerPokemonObjc]>CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
                    winnerTD.innerHTML = `<p>${playerPokemonObjc.name} Wins</p>`;
                    playerPoints++;
                }else if (playerPokemonObjc[key as keyof typeof playerPokemonObjc]<CPUPokemonObjc[key as keyof typeof CPUPokemonObjc]){
                    winnerTD.innerHTML = `<p>${CPUPokemonObjc.name} Wins</p>`;
                    cpuPoints++
                }else{
                    winnerTD.innerHTML = `<p>Its a Tie</p>`;
                }
            }
        }
        if(key === "img" || key === "name"){
            rowElment.appendChild(keyNameTd);
            rowElment.appendChild(playerTD);
            rowElment.appendChild(cpuTD);
            rowElment.appendChild(winnerTD);
            tableElment.appendChild(rowElment);
            document.body.appendChild(tableElment);
        }else{
            const delay:number = numberOfRows * 1000;
            setTimeout(() => {
                rowElment.appendChild(keyNameTd);
                rowElment.appendChild(playerTD);
                rowElment.appendChild(cpuTD);
                rowElment.appendChild(winnerTD);
                tableElment.appendChild(rowElment);
                document.body.appendChild(tableElment);
            }, delay);
        }
    });
    if (playerPoints === cpuPoints){
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
    }

    if (playerPoints > cpuPoints) {
        return "WIN"
    }else if( playerPoints < cpuPoints){
        return "LOSS"
    }else{
        return "TIE"
    }
};

