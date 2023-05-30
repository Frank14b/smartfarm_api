import { Application, Request, Response } from "express";

const businessController = require('../controllers/businessController');

module.exports = function (app: Application) {
    /*startJsAM
          @tag: Business
          @name: Create new business
    endJsAM*/
    app.post('/v1/business/addnew', function (req: Request, res: Response) {
        businessController.addNew(req, res)
    });
    
    /*startJsAM
          @tag: Business
          @name: Get all businesses
    endJsAM*/
    app.post('/v1/business/getall', function (req: Request, res: Response) {
        businessController.getAll(req, res)
    });
}