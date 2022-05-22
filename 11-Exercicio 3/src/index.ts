interface Repo{
    name: string
    description: string
    fork: boolean
}
interface User{
    name: string
    created_at: string
    updated_at: string
    n_repos: number
    repos: Repo[]
}
let users: User[] = [] 
async function take_informations(name: string): Promise<void>{
    try{
        let res = await fetch(`https://api.github.com/users/${name}`)
        let data = await res.json()
        
        let resrep = await fetch(`https://api.github.com/users/${name}/repos`)
        let datarep = await resrep.json()
        
        let new_user: User = {
            name: name,
            created_at: data.created_at,
            updated_at: data.updated_at,
            n_repos: Object.keys(datarep).length,
            repos: []
        }
        for(let i = 0; i<new_user.n_repos; i++){
            let new_repo: Repo = {
                name: datarep[i].name,
                description :datarep[i].description,
                fork: datarep[i].fork
            }
            new_user.repos.push(new_repo)
        }
        
        users.push(new_user)
        alert("Usuário cadastrado com sucesso.")
    } catch (err) {
        alert("Nome inválido!")
        console.log(err)
    }
}

function ask(): boolean{
    while(true){
        let resp = prompt("Deseja adiconar um usuario?\n1-Sim\n2-Não")
        switch(resp){
            case '1':
                return true
            case '2':
                return false
            default:
                alert('Responda "1" ou "2"!')
        }
    }
}

async function main(){
    while(true){
        let wish = ask()
        if(wish){
            let username_correct!: string
            while (true){
                let username = prompt("Qual o nome do usuario?")
                if(typeof username === 'string') { 
                    username_correct = username
                    break
                }
            }
            await take_informations(username_correct)
        } else {
            let text = "Usuários: \n"
            users.forEach(user => {
                text += `  ${user.name}:\n`
                text += `    Criado em ${user.created_at}\n`
                text += `    Última atualização em ${user.updated_at}\n`
                text += `    Número de repositórios: ${user.n_repos}\n`
                text += `    Repositórios:\n`
                user.repos.forEach(repo => {
                    text += `      Nome: ${repo.name}\n`
                    text += `        Descrição: ${repo.description}\n`
                    if(repo.fork){
                        text += `        É um fork\n\n`
                    }else{
                        text += `        Não é um fork\n\n`
                    }
                })
            })
            alert(text)
            break
        }
    }
}

main()