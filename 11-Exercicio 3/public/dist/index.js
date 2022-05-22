"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let users = [];
function take_informations(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch(`https://api.github.com/users/${name}`);
            let data = yield res.json();
            let resrep = yield fetch(`https://api.github.com/users/${name}/repos`);
            let datarep = yield resrep.json();
            let new_user = {
                name: name,
                created_at: data.created_at,
                updated_at: data.updated_at,
                n_repos: Object.keys(datarep).length,
                repos: []
            };
            for (let i = 0; i < new_user.n_repos; i++) {
                let new_repo = {
                    name: datarep[i].name,
                    description: datarep[i].description,
                    fork: datarep[i].fork
                };
                new_user.repos.push(new_repo);
            }
            users.push(new_user);
            alert("Usuário cadastrado com sucesso.");
        }
        catch (err) {
            alert("Nome inválido!");
            console.log(err);
        }
    });
}
function ask() {
    while (true) {
        let resp = prompt("Deseja adiconar um usuario?\n1-Sim\n2-Não");
        switch (resp) {
            case '1':
                return true;
            case '2':
                return false;
            default:
                alert('Responda "1" ou "2"!');
        }
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            let wish = ask();
            if (wish) {
                let username_correct;
                while (true) {
                    let username = prompt("Qual o nome do usuario?");
                    if (typeof username === 'string') {
                        username_correct = username;
                        break;
                    }
                }
                yield take_informations(username_correct);
            }
            else {
                let text = "Usuários: \n";
                users.forEach(user => {
                    text += `  ${user.name}:\n`;
                    text += `    Criado em ${user.created_at}\n`;
                    text += `    Última atualização em ${user.updated_at}\n`;
                    text += `    Número de repositórios: ${user.n_repos}\n`;
                    text += `    Repositórios:\n`;
                    user.repos.forEach(repo => {
                        text += `      Nome: ${repo.name}\n`;
                        text += `        Descrição: ${repo.description}\n`;
                        if (repo.fork) {
                            text += `        É um fork\n\n`;
                        }
                        else {
                            text += `        Não é um fork\n\n`;
                        }
                    });
                });
                alert(text);
                break;
            }
        }
    });
}
main();
