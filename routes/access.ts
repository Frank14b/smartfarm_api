import { Application, Request, Response } from "express";

const userAccessController = require('../controllers/userAccessController');
const accessController = require('../controllers/accessController');

module.exports = function (app: Application) {
    /*startJsAM
          @tag: Access
          @name: Add new access
    endJsAM*/
    app.post('/v1/access/add', function (req: Request, res: Response) {
        accessController.addNew(req, res)
    });

    /*startJsAM
          @tag: Access
          @name: Get all access
    endJsAM*/
    app.get('/v1/access', function (req: Request, res: Response) {
        accessController.getAll(req, res)
    });

    /*startJsAM
          @tag: Access
          @name: Get all user access
    endJsAM*/
    app.get('/v1/userAccess', function (req: Request, res: Response) {
        userAccessController.getAll(req, res)
    });

    /*startJsAM
          @tag: Access
          @name: Add user role access
    endJsAM*/
    app.post('/v1/userAccess/add', function (req: Request, res: Response) {
        userAccessController.addNew(req, res)
    });
}