import express from "express";
import QuotesController from "../controllers/QuotesController.js";

const router = express.Router();

router
    .get("/testar", QuotesController.testar)
    .get("/quotes/listar", QuotesController.listarCitacoes)
    .get("/quotes/aleatoria", QuotesController.lerCitacaoAleatoria)

export default router;   