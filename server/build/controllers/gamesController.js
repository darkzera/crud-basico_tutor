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
            const games = yield database_1.pola.query('SELECT * FROM games WHERE id = ?', [id]);
            console.log(games);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'damnn u nao existe' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.pola.query('SELECT * FROM games');
            res.json(games);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pola.query('INSERT INTO games set ?', [req.body]);
            res.json({
                message: 'Game saved!!!'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.pola.query('DELETE FROM games WHERE id = ?', [id]);
            console.log(games);
            res.json({ message: 'Game deleted' });
        });
    }
    update(req, res) {
        res.json({
            text: 'Updating game: ' + req.params.id
        });
    }
}
exports.gamesController = new GamesController();
//export default gamesController; 
