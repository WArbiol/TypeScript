# Criando Tipos
## Primeira forma: Tipo Literal
- Quanod se tem um valo específioc para aquele tipo
```ts
let literal: "Hello, World"
let pi: 3.14159
```
- O tipo de "literal" é "Hello, World"
- E o do pi é 3.14159
- O valor de **literal** e **pi** não estão definidos, mas os únicos valores que podem assumir é "Hello, World" e 3.14159 especificadamente
```ts
literal = "Outra string" //da erro
```
- Pois o tipo de literal não é `string`

## Segunda forma : Union Types
```ts
let options: "Yes" | "No" | "Maybe"
```
- Qual um dos valores são válidos, e apenas eles
```ts
let option2: number | boolean
```
```ts
option2 = 33   //ok
option2 = true //ok
```
Outro exemplo:
```ts
let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
```
- O VSCode já completa automaticamente as opções possíveis

## Terceira forma: alias
- Para reutilização de tipo
```ts
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
let planet1, planet2: Planet
```

## Quarta forma: tipos de função
```ts
type GreetingCallBack = (name: string) => void

function greet(greetThisPerson: GreetingCallBack) {
    let name = "José"
    greetThisPerson(name)
}
```