import {Request,Response} from 'express';

class GamesController{
    index (req: Request,res: Response){
        res.send('funcionando Games')
    }
}

const gamesController = new GamesController();
export default gamesController;