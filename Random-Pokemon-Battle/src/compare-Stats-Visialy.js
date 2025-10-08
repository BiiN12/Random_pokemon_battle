"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareStatsVisialy = compareStatsVisialy;
function compareStatsVisialy(playerPokemonObjc, CPUPokemonObjc) {
    var tableElment = document.createElement("table");
    // let playerPoints:number = 0;
    // let cpuPoints:number = 0;
    var numberOfRows = 0;
    Object.keys(playerPokemonObjc).forEach(function (key) {
        var rowElment = document.createElement("tr");
        var keyNameTd = document.createElement("td");
        var playerTD = document.createElement("td");
        var cpuTD = document.createElement("td");
        var winnerTD = document.createElement("td");
        numberOfRows++;
        if (key === "img") {
            playerTD.innerHTML = "<img src='".concat(playerPokemonObjc[key], "'>");
            cpuTD.innerHTML = "<img src='".concat(CPUPokemonObjc[key], "'>");
        }
        else {
            keyNameTd.innerHTML = "<p>".concat(key, "</p>");
            playerTD.innerHTML = "<p>".concat(playerPokemonObjc[key], "</p>");
            cpuTD.innerHTML = "<p>".concat(CPUPokemonObjc[key], "</p>");
            if (key !== "name") {
                if (playerPokemonObjc[key] > CPUPokemonObjc[key]) {
                    winnerTD.innerHTML = "<p>".concat(playerPokemonObjc.name, " Wins</p>");
                }
                else if (playerPokemonObjc[key] < CPUPokemonObjc[key]) {
                    winnerTD.innerHTML = "<p>".concat(CPUPokemonObjc.name, " Wins</p>");
                }
                else {
                    winnerTD.innerHTML = "<p>Its a Tie</p>";
                }
            }
        }
        if (key === "img" || key === "name") {
            rowElment.appendChild(keyNameTd);
            rowElment.appendChild(playerTD);
            rowElment.appendChild(cpuTD);
            rowElment.appendChild(winnerTD);
            tableElment.appendChild(rowElment);
            document.body.appendChild(tableElment);
        }
        else {
            var delay = numberOfRows * 1000;
            setTimeout(function () {
                rowElment.appendChild(keyNameTd);
                rowElment.appendChild(playerTD);
                rowElment.appendChild(cpuTD);
                rowElment.appendChild(winnerTD);
                tableElment.appendChild(rowElment);
                document.body.appendChild(tableElment);
            }, delay);
        }
    });
}
;
