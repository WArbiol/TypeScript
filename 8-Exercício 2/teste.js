while(true){
    let wish = prompt("O que deseja fazer?\n1-Adicionar um satélite\n2-Remover um satélite\n3-Alterar a situação do planeta\n4-Visualizar os planetas\n5-Prosseguir")
    if(['1', '2', '3', '4', '5'].find(el => el===wish)){
        break
    }
}