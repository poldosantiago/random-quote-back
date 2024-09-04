"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quotes_1 = __importDefault(require("../share/quotes"));
class QuotesController {
    static testar(req, res) {
        res.status(200).json({ teste: 'testando...' });
    }
    static listarCitacoes(req, res) {
        res.status(200).json(quotes_1.default);
    }
    static lerCitacaoAleatoria(req, res) {
        const numeroAleatorio = Math.trunc(quotes_1.default.length * Math.random());
        res.status(200).json(quotes_1.default[numeroAleatorio]);
    }
}
exports.default = QuotesController;
