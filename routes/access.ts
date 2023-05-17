import { Application, Request, Response } from "express";

const userAccessController = require('../controllers/userAccessController');
const accessController = require('../controllers/accessController');

module.exports = function (app: Application) {
    // user access addnew
    app.post('/v1/access/add', function (req: Request, res: Response) {
        accessController.addNew(req, res)
    });

    // user access getall
    app.get('/v1/access', function (req: Request, res: Response) {
        accessController.getAll(req, res)
    });

    // user role access get
    app.get('/v1/userAccess', function (req: Request, res: Response) {
        userAccessController.getAll(req, res)
    });

    // user role access add
    app.post('/v1/userAccess/add', function (req: Request, res: Response) {
        userAccessController.addNew(req, res)
    });
}