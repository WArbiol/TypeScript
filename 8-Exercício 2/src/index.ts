type coordinate_type = [number, number, number, number]
type situation_type = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"

type Planet = {
    name: string
    coordinates: coordinate_type
    situation: situation_type
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: coordinate_type, situation: situation_type){
    planets.push({
        name, 
        coordinates, 
        situation,
        satellites: []
    })

    alert("O planeta foi adicionado.")
}

function askPlanet(){
    const name = prompt("Qual o nome do planeta?")
    const cood1 = Number(prompt("Qual a coordenada 1?"))
    const cood2 = Number(prompt("Qual a coordenada 2?"))
    const cood3 = Number(prompt("Qual a coordenada 3?"))
    const cood4 = Number(prompt("Qual a coordenada 4?"))

    const coordinates: coordinate_type = [cood1, cood2, cood3, cood4]

    let ok: number = 0
    let situation: situation_type;
    do{
        const situation_string = prompt("Qual a situação?\n1-Habitado\n" + 
                                        "2-Habitável\n3-Inabitável\n4-Inexplorado")
        switch(situation_string) {
            case '1':
                situation = "Habitado"
                ok = 1
                break
            case '2':
                situation = "Habitável"
                ok = 1
                break
            case '3':
                situation = "Inabitável"
                ok = 1
                break
            case '4':
                situation = "Inexplorado"
                ok = 1
                break
        }
    } while(ok===0)

    addPlanet(name, coordinates, situation)
}

function findPlanet(name: string) {
    const planet = planets.find(its_planet => its_planet.name === name)
    return planet ?? false// "??" siginifica que caso seja nulo será retornado false
}

function updateSituation(planet: Planet){
    let validSituation: boolean = false
    let situation: situation_type;
    do{
        const situation_string = prompt("Qual a situação?\n1-Habitado\n" + 
                                        "2-Habitável\n3-Inabitável\n4-Inexplorado")
        switch(situation_string) {
            case '1':
                situation = "Habitado"
                validSituation = true
                break
            case '2':
                situation = "Habitável"
                validSituation = true
                break
            case '3':
                situation = "Inabitável"
                validSituation = true
                break
            case '4':
                situation = "Inexplorado"
                validSituation = true
                break
        }
    } while(!validSituation)
    planet.situation = situation
    alert(`A situação do planeta foi atualizado para "${situation}".`)
}

function addSatellite(satellite: string, planet: Planet) {
    planet.satellites.push(satellite)
    alert(`O satelite ${satellite} foi adicionado ao planeta.`)
}

function removeSatelite(satellite: string, planet: Planet) {
    planet.satellites.filter(its_satellite => its_satellite !== satellite)
    alert(`O satelite ${satellite} foi removido do planeta.`)
}

function list() {
    let text:string = "Planetas:\n"
    planets.forEach(planet =>{
        text+=`  ${planet.name}\n`+
              `    Coordenadas: [${String(planet.coordinates)}]\n`+
              `    Situação: ${planet.situation}\n`+
              `    Satelites:\n`
        planet.satellites.forEach(satellite => {
            text+=`      ${satellite}\n`
        })
        text+="\n"
    })
    alert(text)
}

function askDWish():boolean{
    while(true){
        const wish = prompt("Deseja adicionar um planeta?\n1-Sim\n2-Não")
        switch(wish) {
            case '1':
                return true
            case '2':
                return false
        }
    }
}

function menu():string{
    while(true){
        let wish = prompt("O que deseja fazer?\n1-Adicionar um satélite\n2-Remover um satélite\n3-Alterar a situação do planeta\n4-Visualizar os planetas\n5-Prosseguir")
        if(['1', '2', '3', '4', '5'].find(el => el===wish)){
            return wish
        }
    }
}

function main(){
    while(askDWish()){
        askPlanet()
        let aux:string = 'a'
        while(aux!=='5'){
            aux = menu()
            switch(aux){
                case '1':
                    const satellite_add = prompt("Qual o nome do satelite?")
                    addSatellite(satellite_add, planets[planets.length-1])
                    break
                case '2':
                    const satellite_remove = prompt("Qual o nome do satelite?")
                    removeSatelite(satellite_remove, planets[planets.length-1])
                    break
                case '3':
                    updateSituation(planets[planets.length-1])
                    break
                case '4':
                    list()
                    break
            }
        }
    }
}

main()