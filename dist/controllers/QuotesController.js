"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const JSONParse_1 = __importDefault(require("../utils/JSONParse"));
const json = fs_1.default.readFileSync('./dist/json/dados.json', "utf-8");
const quotes = (0, JSONParse_1.default)(json); //a forma segura de converter o json em objeto
class QuotesController {
    static testar(req, res) {
        res.status(200).json({ teste: 'testando...' });
    }
    static listarCitacoes(req, res) {
        res.status(200).json(quotes);
    }
    static lerCitacaoAleatoria(req, res) {
        const numeroAleatorio = Math.trunc(quotes.length * Math.random());
        res.status(200).json(quotes[numeroAleatorio]);
    }
}
exports.default = QuotesController;
