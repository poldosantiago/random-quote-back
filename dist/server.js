"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const index_js_1 = __importDefault(require("./routes/index.js"));
(0, index_js_1.default)(app_js_1.default);
const port = process.env.port || 3000;
app_js_1.default.listen(port, () => console.log(`URL http://localhost:${port}/\nOuvindo na porta ${port}`));
