import { Router } from 'express'; 
import { starShipController } from "../controllers/starShipController";
// já traduzido


class StarShipRoutes {

   public router: Router = Router();

   constructor(){
      this.config();
   }

   config(): void{
      this.router.get('/',starShipController.list);
      this.router.get('/:id',starShipController.getOne);
      this.router.post('/', starShipController.create);
      this.router.delete('/:id',starShipController.delete);   
      this.router.put('/:id',starShipController.update);
      this.router.post('/starships/add', starShipController.create)
   }


}
const starShipRoutes = new StarShipRoutes();
export default starShipRoutes.router;


