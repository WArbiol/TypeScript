## **Motivo**
- Reclamações de tipos erradas
- Bugs que não havaria no JavaScript

## **1ª forma: Tipos opcionais**
### Exemplo de erro
```ts
function sendSpaceShip(spaceship: { pilot: string, copilot: string){
    // ...
}

sendSpaceShip({ pilot: 'Han Solo', copilot: 'Chewbacca' })
    // sem erros

sendSpaceShip({ pilot: 'Luje' })
    //Erro, parametro errado, pois foi passado objeto com uma string
```
### Solução: ponto de interrogação:
```ts
function sendSpaceShip(spaceship: { pilot: string, copilot?: string){
    // ...
}

sendSpaceShip({ pilot: 'Luje' })
    //Sem erros por ser *opcional* o copiloto
```

## **2ª forma: tipo unknown**
```ts
let input: unknown

input = 'abc' //ok
input = 20    //ok
input = []    //ok sem erros
```
Se fizessemos
```ts
let input: unknown

input = 'abc'
let text: string

text = input //erro, pois input é unkown, não string
```
## **3ª forma: tipo any**
- Forma mais radical de todas
- O typeScript para de funcionar no código
    - Desabilita o TS e praticamente apenas o JS trabalha
```ts
let input: any

input = 'abc' //ok
input = 20    //ok
input = []    //ok sem erros

let text: string

text = input  //ok sem erros (input praticamente não esta no TS)
```
- Não recomendado
- Evitar ao máximo, deva ser a última opção
    - Usa-lo praticamnete perde o sentido de usar TypeScript

## **4ª forma: tipo never**
- Não é uma forma de evitar tipagem
- É uma forma de encontrar erros
### Exemplo:
```ts
function verification(condicao) { 
    if(condicao) {

    } else {
        let _check: never
        return _check
    }
}
```
- Se uma váriavel estiver no tipo "never" é uma indicação de erro no código, "nunca deveria acontecer".

### Comportamento:
- uma variavel never não pode mudar de tipo:
```ts
function verification(condicao) { 
    if(condicao) {

    } else {
        let _check: never
        _check = ''    // da erro
        _check = 10    // da erro
        return _check
    }
}
```

- Qualquer várivel de qualquer tipo pode receber never:
```ts
function verification(condicao) { 
    if(condicao) {

    } else {
        let _check: never
        let text = _check  // ok
        text = ''          // erro pois text agora é do tipo never
        return _check
    }
}
```
- Apenas de passar o mouse por cima da várivel o programador já descobre que aquele tipo não deveria existir e percebe o erro