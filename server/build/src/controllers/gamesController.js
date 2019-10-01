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
class GamesController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship = yield database_1.pola.query('SELECT * FROM starship WHERE cod_starship = ?', [id]);
            console.log(starship);
            if (starship.length > 0) {
                return res.json(starship[0]);
            }
            res.status(404).json({ text: 'não tem' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const starship = yield database_1.pola.query('SELECT * FROM starship');
            res.json(starship);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pola.query('INSERT INTO starship set ?', [req.body]);
            res.json({
                message: 'Nave saved!!!'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const starship = yield database_1.pola.query('DELETE FROM starship WHERE cod_starship = ?', [id]);
            console.log(starship);
            res.json({ message: 'Starship deletado' });
        });
    }
    update(req, res) {
        res.json({
            text: 'atualizando...' + req.params.cod_starship
        });
    }
}
exports.gamesController = new GamesController();
//export default starshipController; 
