import { Application, Request, Response } from "express";

const rolesController = require('../controllers/rolesController');

module.exports = function (app: Application) {
    // user roles addnew
    app.post('/v1/roles/addnew', function (req: Request, res: Response) {
        rolesController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/roles/getall', function (req: Request, res: Response) {
        rolesController.getAll(req, res)
    });
}