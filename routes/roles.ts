import { Application, Request, Response } from "express";

const rolesController = require('../controllers/rolesController');

module.exports = function (app: Application) {
    /*startJsAM
          @tag: Roles
          @name: Create new roles
    endJsAM*/
    app.post('/v1/roles/addnew', function (req: Request, res: Response) {
        rolesController.addNew(req, res)
    });
    
    /*startJsAM
          @tag: Roles
          @name: Get all roles
    endJsAM*/
    app.post('/v1/roles/getall', function (req: Request, res: Response) {
        rolesController.getAll(req, res)
    });
}