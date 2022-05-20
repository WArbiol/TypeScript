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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//interface User{
//
//}
//let user: User[] 
function take_informations() {
    return __awaiter(this, void 0, void 0, function* () {
        //let name = prompt("Qual o username do usuário do GitHub que deseja procurar?")
        let name = "warbiol";
        try {
            const res = yield axios_1.default.get(`https://api.github.com/users/${name}`);
            const data = res.data;
            console.log(`O usuário ${name} criou a conta em ${data.created_at} e atualizou por último em ${data.updated_at}`);
        }
        catch (err) {
            console.log("Nome inválido!");
        }
    });
}
function take_repos(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get(`https://api.github.com/users/${name}/repos`);
            let data = res.data;
            const n_repos = Object.keys(res.data).length;
            console.log(`O usuário ${name} tem ${n_repos} repositórios:`);
            for (let i = 0; i < n_repos; i++) {
                console.log(`  ${i + 1}-${data[i].name}`);
            }
        }
        catch (err) {
            console.log("Nome inválido!");
        }
    });
}
take_repos('warbiol');
take_informations();
