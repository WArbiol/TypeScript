import axios from 'axios'

//interface User{
//
//}
//let user: User[] 

async function take_informations(): Promise<void>{
    //let name = prompt("Qual o username do usuário do GitHub que deseja procurar?")
    let name = "warbiol"
    
    try{
        const res = await axios.get(`https://api.github.com/users/${name}`)
        const data = res.data
        console.log(`O usuário ${name} criou a conta em ${data.created_at} e atualizou por último em ${data.updated_at}`)
    } catch (err) {
        console.log("Nome inválido!")
    }
}

async function take_repos(name: string): Promise<void>{
    try{
        const res = await axios.get(`https://api.github.com/users/${name}/repos`)
        let data = res.data
        const n_repos = Object.keys(res.data).length
        console.log(`O usuário ${name} tem ${n_repos} repositórios:`)
        for(let i = 0; i<n_repos; i++){
            console.log(`  ${i+1}-${data[i].name}`)
        }
    } catch (err) {
        console.log("Nome inválido!")
    }
}
take_repos('warbiol')
take_informations()