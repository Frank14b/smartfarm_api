import { Application, Request, Response } from "express";

const modulesController = require('../controllers/modulesController');

module.exports = function (app: Application) {
    // add app module
    app.post('/v1/modules/add', function (req: Request, res: Response) {
        modulesController.addNew(req, res)
    });

    // get all modules
    app.get('/v1/modules', function (req: Request, res: Response) {
        modulesController.getAll(req, res)
    });
}