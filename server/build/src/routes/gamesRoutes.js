"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const starShipController_1 = require("../controllers/starShipController");
// aqui importa games controller < - Mudar para starshipController - >
class StarShipRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', starShipController_1.starShipController.list);
        this.router.get('/:id', starShipController_1.starShipController.getOne);
        this.router.post('/', starShipController_1.starShipController.create);
        this.router.delete('/:id', starShipController_1.starShipController.delete);
        this.router.put('/:id', starShipController_1.starShipController.update);
        //
    }
}
const starShipRoutes = new StarShipRoutes();
exports.default = starShipRoutes.router;
