"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuotesController_js_1 = __importDefault(require("../controllers/QuotesController.js"));
const router = express_1.default.Router();
router
    .get("/testar", QuotesController_js_1.default.testar)
    .get("/quotes/listar", QuotesController_js_1.default.listarCitacoes)
    .get("/quotes/aleatoria", QuotesController_js_1.default.lerCitacaoAleatoria);
exports.default = router;
