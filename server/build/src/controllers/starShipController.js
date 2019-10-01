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
class StarShipController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship = yield database_1.pola.query('SELECT * FROM starship WHERE cod_starship = ?', [id]);
            console.log(starship);
            if (starship.length > 0) {
                return res.json(starship[0]);
            }
            else {
                res.status(404).json({ text: 'Não há naves no registro' });
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const starship = yield database_1.pola.query('SELECT * FROM starship');
            console.log(starship);
            res.json(starship);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pola.query('INSERT INTO starship set ?', [req.body]);
            console.log('================Nave criada');
            res.json({
                message: 'Nave criada'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship = yield database_1.pola.query('DELETE FROM starship WHERE cod_starship = ?', [id]);
            console.log(starship);
            res.json({ message: 'Nave deletada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pola.query('UPDATE starship set ? WHERE cod_starship = ?', [req.body, id]);
            console.log('================ Nave atualizada');
            res.json({ message: 'Atualizando naves ...' });
        });
    }
}
exports.starShipController = new StarShipController();
//export default starshipController; 
