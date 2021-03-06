function sendSpaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }
    alert(`A nave ${spaceship.name} comanda pelo capitão ${spaceship.captain} foi enviada em uma missão`)
    return spaceship;
}
function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} de ${spaceship.speed} para ${targetSpeed}`)
        spaceship.speed=targetSpeed
    } 
    else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} de ${spaceship.speed} para ${targetSpeed}`)
        spaceship.speed=targetSpeed
    } 
    else {
        alert(`Mantendo a velodida da ${spaceship.name}`)
    }
}

const spaceShipName = prompt('Insira o nome da nave a ser enviada.')
const spaceShipCaptain = prompt('Insira o nome do captão da nave.')

const currentShip =  sendSpaceship(spaceShipName, spaceShipCaptain)

const speed = Number(prompt('Insira a velocidade para qual deseja acelerar a nave.'))

accelerate(speed, currentShip)