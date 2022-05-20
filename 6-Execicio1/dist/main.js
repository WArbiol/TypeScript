var SpaceShip = /** @class */ (function () {
    function SpaceShip() {
    }
    return SpaceShip;
}());
var ships = [];
function createSpaceShip(name, pilot, crewLimit) {
    var ship = new SpaceShip();
    ship.name = name;
    ship.pilot = pilot;
    ship.crewLimit = crewLimit;
    ship.crew = [];
    ship.inMission = false;
    return ship;
}
function addToCrew(member, ship) {
    if (ship.crew.length < ship.crewLimit) {
        ship.crew.push(member);
        if (ship.crew.length == ship.crewLimit) {
            alert("Capacidade máxima atingida");
        }
    }
    else {
        alert("Capacidade máxima já atingida");
    }
}
function sendToMission(ship) {
    if (ship.crew.length * 3 >= ship.crewLimit) {
        ship.inMission = true;
        alert("Nave ".concat(ship.name, " mandada para miss\u00E3o!"));
    }
    else {
        alert("É necessário pelo menos um terço da capacidade máxima para despache");
    }
}
function showSpaceShips() {
    var text = '';
    ships.forEach(function (ship) {
        text = text + "".concat(ship.name, "\n") +
            "- Piloto: ".concat(ship.pilot, "\n") +
            "- Capacidade m\u00E1xima: ".concat(ship.crewLimit, " pessoas\n") +
            "- Tripulantes:\n";
        ship.crew.forEach(function (member) {
            text = text + "  - ".concat(member, "\n");
        });
        if (ship.inMission) {
            text = text + '- Em missão\n\n';
        }
        else {
            text = text + '- Não está em missão\n\n';
        }
    });
    if (ships.length == 0) {
        text = 'Nenhuma nave adicionada';
    }
    alert(text);
}
while (true) {
    var add = prompt("Deseja adicionar nova nave?\n1-Sim\n2-Não");
    while (add != "1" && add != "2") {
        add = prompt('Deseja adicionar nova nave?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não');
    }
    if (add == "1") {
        var name_1 = prompt('Informe o nome da nave:');
        var pilot = prompt('Informe o piloto da nave:');
        var crewLimit = Number(prompt('Informe o limite de tripulantees da nave:'));
        var ship = createSpaceShip(name_1, pilot, crewLimit);
        while (true) {
            var addMember = prompt("Deseja adicionar um tripulante à nave?\n1-Sim\n2-Não");
            while (addMember != "1" && addMember != "2") {
                addMember = prompt('Deseja adicionar um tripulante à nave?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não');
            }
            if (addMember == "1") {
                var memberName = prompt("Qual o nome do tribupulante?");
                addToCrew(memberName, ship);
            }
            else {
                break;
            }
        }
        var sendMission = prompt("Deseja s nave em missão?\n1-Sim\n2-Não");
        while (sendMission != "1" && sendMission != "2") {
            sendMission = prompt('Deseja s nave em missão?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não');
        }
        if (sendMission == "1") {
            sendToMission(ship);
        }
        ships.push(ship);
    }
    else {
        break;
    }
}
showSpaceShips();
