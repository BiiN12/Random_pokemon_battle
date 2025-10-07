




// console.log("nice try amit");

// const obj1:ChosenPokemonObject = {
//     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
//     name: "jynx",
//     hp: 65,
//     attack: 50,
//     defense:35,
//     specialAttack:115,
//     specialDefense:95,
//     speed:95,
//     type:["ice","psychic"] 
// }

// const obj2:ChosenPokemonObject = {
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
//     name: "weepingbell",
//     hp: 60,
//     attack: 60,
//     defense:60,
//     specialAttack:80,
//     specialDefense:80,
//     speed:80,
//     type:["grass","poison"],
// }

function compareStatsVisialy(playerPokemonObjc:ChosenPokemonObject, CPUPokemonObjc:ChosenPokemonObject):void {
    const tableElment:HTMLElement = document.createElement("table");
    
    Object.keys(playerPokemonObjc).forEach(key =>{
        const rowElment:HTMLElement = document.createElement("tr");
        const keyNameTd:HTMLElement = document.createElement("td");
        const playerTD:HTMLElement = document.createElement("td");
        const cpuTD:HTMLElement = document.createElement("td");
        const winnerTD:HTMLElement = document.createElement("td");

        if(key === "img"){
            playerTD.innerHTML = `<img src='${playerPokemonObjc[key]}'>`;
            cpuTD.innerHTML = `<img src='${CPUPokemonObjc[key]}'>`;
        }else{
            keyNameTd.innerHTML = `<p>${key}</p>`;
            playerTD.innerHTML = `<p>${playerPokemonObjc[key]}</p>`;
            cpuTD.innerHTML = `<p>${CPUPokemonObjc[key]}</p>`;
            if(key !== "name"){
                if(playerPokemonObjc[key]>CPUPokemonObjc[key]){
                    winnerTD.innerHTML = "<p>Player Wins</p>";
                }else if (playerPokemonObjc[key]<CPUPokemonObjc[key]){
                    winnerTD.innerHTML = "<p>CPU Wins</p>";
                }
            }
        }
        
        rowElment.appendChild(keyNameTd);
        rowElment.appendChild(playerTD);
        rowElment.appendChild(cpuTD);
        rowElment.appendChild(winnerTD);
        tableElment.appendChild(rowElment);
    });
    document.body.appendChild(tableElment);
}

// compareStatsVisialy(obj1,obj2);