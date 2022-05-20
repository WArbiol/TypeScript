interface  CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun!: Star
type Asteroid = CelestialBody & {
    size: number
}

sun.name    = "Sol"
sun.mass    = 1.989*10**30
sun.age     = 4.603*10**9
sun.planets = []


class MilkWayPlanet implements Planet { //é obrigatório ter no minimo todos os atributos de Planet
    name: string
    mass: number
    population: number
    QUALQUERCOISA: string[]

    constructor(name: string, mass: number, population: number, QUALQUERCOISA: string[]){
        this.name =name
        this.mass = mass
        this.population = population
        this.QUALQUERCOISA = QUALQUERCOISA
    }

    createSatellite(name: string){
        // ...
    }
}


interface Planet {
    QUALQUERCOISA: string[] //sem erro
}