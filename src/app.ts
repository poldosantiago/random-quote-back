// import express from 'express';
import express from "express";
import cors from 'cors';

const app: express.Application = express();

app.use(
	express.json()
);
app.use(cors()); //uso para não dar o erro de cors

export default app;