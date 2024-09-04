import { Request, Response } from 'express';
import quotes from '../share/quotes';


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