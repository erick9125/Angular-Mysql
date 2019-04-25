import {Request,Response} from 'express';

import pool from '../database';

class GamesController{
    index (req: Request,res: Response){
        pool.query('DESCRIBE juegos')
        res.json('funcionando Games')
    }
}

const gamesController = new GamesController();
export default gamesController;