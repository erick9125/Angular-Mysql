import {Request,Response} from 'express';

class IndexController{
    index (req: Request,res: Response){
        res.send('funcionando')
    }
}

export const indexController = new IndexController();