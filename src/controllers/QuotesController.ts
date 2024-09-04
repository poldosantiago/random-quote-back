import fs from 'fs';
import { Request, Response } from 'express';
import JSONParse from '../utils/JSONParse';
import Quotes from '../share/Quotes';

const json = fs.readFileSync('./json/dados.json', "utf-8");
const quotes = JSONParse<Quotes[]>(json); //a forma segura de converter o json em objeto

class QuotesController{
    static testar(req: Request, res: Response){
        res.status(200).json({teste: 'testando...'});
    }
    
    static listarCitacoes(req: Request, res: Response) {
        res.status(200).json(quotes);
    }
    
    static lerCitacaoAleatoria(req: Request, res: Response) {
        const numeroAleatorio:number = Math.trunc( quotes.length * Math.random());
        
        res.status(200).json(quotes[numeroAleatorio]);
    }
}


export default QuotesController;