class SpaceShip{
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
}

const ships: SpaceShip[] = []

function createSpaceShip(name: string, pilot: string, crewLimit: number): SpaceShip {
    const ship = new SpaceShip();
    ship.name = name;
    ship.pilot = pilot;
    ship.crewLimit = crewLimit;
    ship.crew = [];
    ship.inMission = false;
    return ship;
}

function addToCrew(member: string, ship: SpaceShip) {
    if(ship.crew.length < ship.crewLimit){
        ship.crew.push(member)
        if(ship.crew.length == ship.crewLimit){
            alert("Capacidade máxima atingida")
        }
    } else {
        alert("Capacidade máxima já atingida")
    }
}

function sendToMission(ship: SpaceShip){
    if(ship.crew.length*3 >= ship.crewLimit){
        ship.inMission = true
        alert(`Nave ${ship.name} mandada para missão!`)
    } else {
        alert("É necessário pelo menos um terço da capacidade máxima para despache")
    }
}

function showSpaceShips(){
    let text: string = ''
    ships.forEach(ship => {
        text = text + `${ship.name}\n`+
        `- Piloto: ${ship.pilot}\n`+
        `- Capacidade máxima: ${ship.crewLimit} pessoas\n` +
        `- Tripulantes:\n`;
        
        ship.crew.forEach(member=>{
            text = text + `  - ${member}\n`
        })

        if(ship.inMission){
            text = text + '- Em missão\n\n'
        } else {
            text = text + '- Não está em missão\n\n'
        }
    })
    if(ships.length == 0){
        text = 'Nenhuma nave adicionada'
    }

    alert(text)
}

while(true) {
    let add = prompt("Deseja adicionar nova nave?\n1-Sim\n2-Não")
    while(add != "1" && add != "2"){
        add = prompt('Deseja adicionar nova nave?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não')
    }
    if(add == "1"){
        const name: string = prompt('Informe o nome da nave:')
        const pilot: string = prompt('Informe o piloto da nave:')
        const crewLimit: number = Number(prompt('Informe o limite de tripulantees da nave:'))
        const ship = createSpaceShip(name, pilot, crewLimit)
        
        while(true){
            let addMember = prompt("Deseja adicionar um tripulante à nave?\n1-Sim\n2-Não")
            while(addMember != "1" && addMember != "2"){
                addMember = prompt('Deseja adicionar um tripulante à nave?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não')
            }
            if(addMember == "1"){
                const memberName = prompt("Qual o nome do tribupulante?")
                addToCrew(memberName, ship)
            } else {
                break
            }
        }

        let sendMission = prompt("Deseja s nave em missão?\n1-Sim\n2-Não")
        while(sendMission != "1" && sendMission != "2"){
            sendMission = prompt('Deseja s nave em missão?\nResponda com "1" ou "2"\n  1-Sim\n  2-Não')
        }
        if(sendMission == "1"){
            sendToMission(ship)
        }
        
        ships.push(ship)
    } else {
        break;
    }
}
showSpaceShips()