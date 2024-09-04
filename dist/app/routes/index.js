"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuotesRoutes_js_1 = __importDefault(require("./QuotesRoutes.js"));
function routes(app) {
    app.get('/', (req, res) => {
        res.status(200).send({ note: 'API Quotes' });
    });
    app.use(express_1.default.json(), QuotesRoutes_js_1.default);
}
exports.default = routes;
