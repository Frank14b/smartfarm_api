import { Application, Request, Response } from "express";

const modulesController = require('../controllers/modulesController');

module.exports = function (app: Application) {
    /*startJsAM
          @tag: Modules
          @name: Add new modules
    endJsAM*/
    app.post('/v1/modules/add', function (req: Request, res: Response) {
        modulesController.addNew(req, res)
    });

    /*startJsAM
          @tag: Modules
          @name: Get all modules
    endJsAM*/
    app.get('/v1/modules', function (req: Request, res: Response) {
        modulesController.getAll(req, res)
    });
}