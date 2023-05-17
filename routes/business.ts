import { Application, Request, Response } from "express";

const businessController = require('../controllers/businessController');

module.exports = function (app: Application) {
    // user roles addnew
    app.post('/v1/business/addnew', function (req: Request, res: Response) {
        businessController.addNew(req, res)
    });
    
    // user roles getall
    app.post('/v1/business/getall', function (req: Request, res: Response) {
        businessController.getAll(req, res)
    });
}