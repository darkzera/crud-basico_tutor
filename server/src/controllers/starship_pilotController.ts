import { Request, Response } from 'express';

import { pola } from '../database';

class Starship_PilotController {

   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship_pilot = await pola.query('SELECT * FROM starship_pilot WHERE cod_starship = ?', [id]);
      console.log(starship_pilot);
      if (starship_pilot.length > 0) {
         return res.json(starship_pilot[0]);
      }else {
         res.status(404).json({ text: 'Não há naves_piloto no registro' });
      }
   }

   public async list(req: Request, res: Response) {
      const starship_pilot = await pola.query('SELECT * FROM starship_pilot');
      console.log(starship_pilot);
      res.json(starship_pilot);
   }

   public async create(req: Request, res: Response): Promise<void> {
      await pola.query('INSERT INTO starship_pilot set ?', [req.body]);
      console.log('================starship_pilot criada');
      res.json({
         message: 'starship_pilot criada' });
   }

   public async delete(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const starship_pilot = await pola.query('DELETE FROM starship_pilot WHERE cod_starship = ?', [id]);
      console.log(starship_pilot);
      res.json({ message: 'starship_pilot deletada' });
   }

   public async update(req: Request, res: Response):Promise<void>{
      const { id } = req.params;
      await pola.query('UPDATE starship_pilot set ? WHERE cod_starship = ?', [req.body, id]);
      console.log('================ starship_pilot atualizada');
      res.json({ message: 'Atualizando starship_pilot...'});
   }
}

export const starShip_pilotController = new Starship_PilotController();
//export default starship_pilotController; 
