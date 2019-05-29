"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class Starship_PilotController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship_pilot = yield database_1.pola.query('SELECT * FROM starship WHERE cod_starship = ?', [id]);
            console.log(starship_pilot);
            if (starship_pilot.length > 0) {
                return res.json(starship_pilot[0]);
            }
            else {
                res.status(404).json({ text: 'Não há naves_piloto no registro' });
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const starship_pilot = yield database_1.pola.query('SELECT * FROM starship_pilot');
            console.log(starship_pilot);
            res.json(starship_pilot);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pola.query('INSERT INTO starship_pilot set ?', [req.body]);
            console.log('================starship_pilot criada');
            res.json({
                message: 'Nave criada'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship_pilot = yield database_1.pola.query('DELETE FROM starship_pilot WHERE cod_starship = ?', [id]);
            console.log(starship_pilot);
            res.json({ message: 'starship_pilot deletada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pola.query('UPDATE starship_pilot set ? WHERE cod_starship = ?', [req.body, id]);
            console.log('================ starship_pilot atualizada');
            res.json({ message: 'Atualizando starship_pilot...' });
        });
    }
}
exports.starShip_pilotController = new Starship_PilotController();
//export default starship_pilotController; 
