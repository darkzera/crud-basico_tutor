import { Request, Response } from 'express';

import { pola } from '../database';

class StarShipController {

   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship = await pola.query('SELECT * FROM starship WHERE cod_starship = ?', [id]);
      console.log(starship);
      if (starship.length > 0) {
         return res.json(starship[0]);
      }
      res.status(404).json({ text: 'Não há naves no registro' });
   }

   public async list(req: Request, res: Response) {
      const starship = await pola.query('SELECT * FROM starship');
      res.json(starship);
   }

   public async create(req: Request, res: Response): Promise<void> {
      await pola.query('INSERT INTO starship set ?', [req.body]);
      res.json({
         message: 'Registro de nave salva!!!' });
   }

   public async delete(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship = await pola.query('DELETE FROM starship WHERE cod_starship = ?', [id]);
      console.log(starship);
      res.json({ message: 'Nave deletada' });
   }

   public update (req: Request, res: Response){
      res.json({
         text: 'atualizando naves ...' + req.params.cod_starship });
   }
}

export const starShipController = new StarShipController();
//export default starshipController; 
