# Tuplas

## Tuplas são arrays específicos
- São arrays com quantidade e tipo de elementos especificados.
- Servem para prevenção de erros em paços futuros.
## Exemplo:
```ts
let point: [number, number]
point = [3, 4]
let [x, y] = [3, 4]
```
- No código acima `point = [3, 4, 5]` daria erro.
- Analogamente `point = [3, '4']` daria erro.
- Previne que definamos um ponto com um string, o JS seria mais trabalhoso realizar o mesmo.
## Outro exemplo:
```ts
let tuple: [number, number, string, boolean]
tuple = [3, 4, 'point', true]
```
Se definissemos `tuple = [3, 4, 5, true]` erro
