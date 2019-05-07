import {Request,Response} from 'express';

import pool from '../database';

class GamesController{
    public async list (req: Request,res: Response){
      const juegos =  await pool.query('SELECT * FROM juegos');
      res.json(juegos);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const juegos = await pool.query('SELECT * FROM juegos WHERE id = ?', [id]);
        if (juegos.length > 0){
            return res.json(juegos[0]);
        }
        res.status(404).json({text: "El juego no existe"});
        
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO juegos set ?', [req.body]);
        res.json({message: 'Juego Guardado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM juegos WHERE id = ?',[id]);
        res.json({message: 'Juego Eliminado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE juegos set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'El juego fue actualizado correctamente'})
    }

}

const gamesController = new GamesController();
export default gamesController;