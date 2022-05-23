# export
- Sintaxe do ES6
>
exports.ts
```ts
export interface Spaceship {
    name: string
    pilot: string
    speed: number
}
```


import.ts
```ts
import { Spaceship } from './export'

interface BattleSpaceship extends Spaceship{
    weapons: number
}
```
Poderia-se usar tambem export defaut e não usar as chaves  

exports.ts
```ts
export default interface Spaceship {
    name: string
    pilot: string
    speed: number
}
```

import.ts
```ts
import QualquerNome from './export'

interface BattleSpaceship extends QualquerNome{
    weapons: number
}
```

## Importar bibliotecas
`npm install lodash`
```ts
import * as lodash from "lodash"
```
- **Mensagem de alerta pois o arquivo do lodash não tem tipo nenhum, pois foi feita para node.js, não para typescript**

### Correção
```
npm install @types/lodash --save-dev
```
- o `@types` é um grande repositório mantido pela comunidade que permite que tenhamos tipos para bibliotecas comuns que foram desenvolvidades para javascript.
- --save-dev pois typescript tambémé para desenvolvimento.