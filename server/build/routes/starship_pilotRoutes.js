"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const starship_pilotController_1 = require("../controllers/starship_pilotController");
class StarShip_PilotRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', starship_pilotController_1.starShip_pilotController.list);
        this.router.get('/:id', starship_pilotController_1.starShip_pilotController.getOne);
        this.router.post('/', starship_pilotController_1.starShip_pilotController.create);
        this.router.delete('/:id', starship_pilotController_1.starShip_pilotController.delete);
        this.router.put('/:id', starship_pilotController_1.starShip_pilotController.update);
    }
}
const starShip_pilotRoutes = new StarShip_PilotRoutes();
exports.default = starShip_pilotRoutes.router;
