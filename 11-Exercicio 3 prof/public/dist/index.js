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
function fetchUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const user = yield response.json();
        if (user.message) {
            console.log('Não encontrado');
        }
        else {
            users.push(user);
            console.log(`id: ${user.id}\n` +
                `login: ${user.login}\n` +
                `name: ${user.name}\n` +
                `bio: ${user.bio}\n` +
                `public_repos: ${user.public_repos}\n` +
                `repos_url: ${user.repos_url}`);
        }
    });
}
