# Enum
## Conjunto de constantes
- Podemos atriuir nomes para essas constantes de forma a nos ajudar a referenciar tais velores mais facilmente.
- Uma das poucas funções do TypeScript que não é extenção **type-level** do JavaScript
## Exemplo
```ts
enum Planets {
    MERCURIO,
    VENUS,
    TERRA,
    MARTE
}
```
No caso seria salvo:
```ts
Planets.MERCURIO = 0
Planets.VENUS    = 1
Planets.TERRA    = 2
Planets.ARTE     = 3
```
E `Planets.TERRA` retorna o valor 2.  
  
Agora
```ts
enum Planets {
    MERCURIO = 1,
    VENUS,
    TERRA,
    MARTE
}
```
Teriamos
```ts
Planets.MERCURIO = 1
Planets.VENUS    = 2
Planets.TERRA    = 3
Planets.MARTE    = 4
```

Agora
```ts
enum Planets {
    MERCURIO = "Mercurio",
    VENUS    = "Venus",
    TERRA    = "Terra",
    MARTE    = "marte"
}
```
Teriamos
```ts
Planets.MERCURIO = "Mercurio"
Planets.VENUS    = "Venus"
Planets.TERRA    = "Terra"
Planets.MARTE    = "marte"
```

## Outro exemplo
```ts
enum Roles {
    ADMIN,
    USER
}
```
- Agora não temos que memorizar o valor do **ADMIN** e do **USER**.
- Apenas chamamos: `Roles.ADMIN` ou `Roles.USER`

# USOS GERAIS
```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
enum FileAccess {
    // constant members
    None, //0
    Read = 1 << 1,  //represent 1*2**1=2 ( 10)
    Write = 1 << 2, //represent 1*2**2=4 (100)
    ReadWrite = Read | Write, //represent both 110=6
    // computed member
    G = "123".length,
}

enum Teste {
    UM, //0
    DOIS, //1
    TRES = 12, 
    QUATRO //13
}
```

## Obs.
Membros não declarados são a enumeração dos anteriores, portanto se definimos uma constante e não declaramos a anterior deve ser de tipo Number para seguir a enumeração

```ts
enum DariaErro{
    ZERO,
    UM,
    STRING = "QUALQUER COISA",
    AQUI_O_ERRO
}
```
`AQUI_O_ERRO` não teria como ser enumerado e teriamos erro.