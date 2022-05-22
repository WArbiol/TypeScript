interface User{
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message? : "Not found" //""?" opcional
}
interface Repo{
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}
let users: User[] = [] 

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: User = await response.json()

    if(user.message) {
        console.log('Não encontrado')
    } else {
        users.push(user)
        console.log(`id: ${user.id}\n` +
            `login: ${user.login}\n` +
            `name: ${user.name}\n` +
            `bio: ${user.bio}\n` +
            `public_repos: ${user.public_repos}\n` +
            `repos_url: ${user.repos_url}`)
    }
}