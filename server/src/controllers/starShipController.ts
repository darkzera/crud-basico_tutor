import { Request, Response } from 'express';

import { pola } from '../database';

class StarShipController {

   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship = await pola.query('SELECT * FROM starship WHERE cod_starship = ?', [id]);
      console.log(starship);
      if (starship.length > 0) {
         return res.json(starship[0]);
      }else {
         res.status(404).json({ text: 'Não há naves no registro' });
      }
   }

   public async list(req: Request, res: Response) {
      const starship = await pola.query('SELECT * FROM starship');
      console.log(starship);
      res.json(starship);
   }

   public async create(req: Request, res: Response): Promise<void> {
      await pola.query('INSERT INTO starship set ?', [req.body]);
      console.log('================Nave criada');
      res.json({
         message: 'Nave criada' });
   }

   public async delete(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship = await pola.query('DELETE FROM starship WHERE cod_starship = ?', [id]);
      console.log(starship);
      res.json({ message: 'Nave deletada' });
   }

   public async update(req: Request, res: Response):Promise<void>{
      const { id } = req.params;
      await pola.query('UPDATE starship set ? WHERE cod_starship = ?', [req.body, id]);
      console.log('================ Nave atualizada');
      res.json({ message: 'Atualizando naves ...'});
   }
}

export const starShipController = new StarShipController();
//export default starshipController; 
