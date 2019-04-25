import {Request,Response} from 'express';

import pool from '../database';

class GamesController{
    public async list (req: Request,res: Response){
      const juegos =  await pool.query('SELECT * FROM juegos');
      res.json(juegos);
    }

    public async getOne (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const juegos = await pool.query('SELECT * FROM juegos WHERE id = ?', [id]);
        console.log(juegos);
        res.json({text: 'Juego Encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Juego Guardado'});
    }

    public delete (req: Request, res: Response){
        res.json({text: 'Eliminando un juego ' + req.params.id});
    }

    public update (req: Request, res: Response){
        res.json({text: 'Actualizando el juego ' + req.params.id})
    }

}

const gamesController = new GamesController();
export default gamesController;