import express, { Application, Router }from 'express';

import morgan from 'morgan';
import cors from 'cors'
import indexRoutes from './routes/indexRoutes';

import gamesRoutes from './routes/gamesRoutes';

import StarShipRoutes from './routes/starShipRoutes';
import StarShip_PilotRoutes from './routes/starship_pilotRoutes';


// games routes substituir por -> starshipRoutes (rotas de starship-> naves) *done
// traduzido
// importado

class Server {

   public app: Application;
   
   constructor() {
      this.app = express();
      this.config();
      this.route();
   }
   config(): void {
      this.app.set('port', process.env.PORT || 3000); 
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: false}));

   }
   route(): void {
      this.app.use('/', indexRoutes);
      this.app.use('/api/games', gamesRoutes);
      this.app.use('/api/starship', StarShipRoutes);
      this.app.use('/api/starship_pilot', StarShip_PilotRoutes);
   }
   start(): void {
      this.app.listen(this.app.get('port'), () => {
         console.log('Server na porta ', this.app.get('port'))
      });
   }
}

const server = new Server();
server.start();
