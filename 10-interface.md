# Interfaces
- Diferentemente do type, ela não precisa do igual:
```ts
type Planet = {
    name: string
    satellites: string[]
}
//interface não é com igual
interface  CelestialBody {
    name: string
    mass: number
}
```
- Ambos definem um objeto
## Podem herdar caracteristicas: **extends**
```ts
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
```
### Na declaração tomar cuidado!
```ts
let sun!: Star
```
Se escrever `let sun: star` ela teria de ser Star desde o inicio, e não undefined.

**Resolução:** 
`let sun!: Star` esse ! diz para o compilador ignorar quando for undefined ou null
`let sun: Star | undefined`

### Com type ficaria menos legível:
```ts
type Asteroid = CelestialBody & {
    size: number
}
```

## Usar interface para moldar classes:
```ts
class MilkWayPlanet implements Planet { //obrigatório ter no minimo todos os atributos de Planet
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number){
        this.name =name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string){
        // ...
    }
}
```

### Não podemos duplicar um **type**
```ts
type Asteroid = CelestialBody & {
    size: number
}
type Asteroid = { //erroooo
    anything: number
}
```

### Podemos fazer algo parecido com o interfase **sem erro**
```ts
interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

interface Planet {
    QUALQUERCOISA: string[] //sem erro
}
```
Sem erro porque não esta redefinindo, mas adicionando novos tipos para a interface já existente