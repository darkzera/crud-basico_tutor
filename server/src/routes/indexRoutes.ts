import { Router } from 'express'; 
import { indexController } from '../controllers/indexController';

import { starShipController } from '../controllers/starShipController';

import { gamesController } from '../controllers/gamesController';

class IndexRoutes {

   public router: Router = Router();

   constructor(){
      this.config();
   }


   config(): void{
      this.router.get('/', indexController.index);
   }

}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;


