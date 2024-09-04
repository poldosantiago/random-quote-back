import express from 'express';
import { Request, Response } from 'express';
import quotes from './QuotesRoutes.js';

function routes(app: express.Application){
	app.get('/', (req: Request,res: Response) => {
		res.status(200).send({note: 'API Quotes'})
	})

	app.use(
		express.json(),
		quotes
	)
}

export default routes;