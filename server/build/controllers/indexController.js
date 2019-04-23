"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('funcionando');
    }
}
exports.indexController = new IndexController();
