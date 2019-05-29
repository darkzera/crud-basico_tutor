import { Router } from 'express'; 

import { starShip_pilotController } from '../controllers/starship_pilotController';

class StarShip_PilotRoutes {

   public router: Router = Router();

   constructor() {
      this.config();
   }

   config(): void {
      this.router.get('/',starShip_pilotController.list);
      this.router.get('/:id',starShip_pilotController.getOne);
      this.router.post('/', starShip_pilotController.create);
      this.router.delete('/:id',starShip_pilotController.delete)   
      this.router.put('/:id',starShip_pilotController.update)   
   }
}

const starShip_pilotRoutes = new StarShip_PilotRoutes();
export default starShip_pilotRoutes.router;


