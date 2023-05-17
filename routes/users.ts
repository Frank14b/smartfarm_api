import { Request, Response } from "express";

const usersController = require('../controllers/usersController');

module.exports = function (app: any, version: string) {
    // user login
    app.post(`/api/${version}/users/login`, function (req: Request, res: Response) {
        usersController.login(req, res)
    });
    
    // user register
    app.post(`/api/${version}/users/register`, function (req: Request, res: Response) {
        usersController.register(req, res)
    });

    // user get all users
    app.post(`/api/${version}/users/getall`, function (req: Request, res: Response) {
        usersController.getAll(req, res)
    });
    
    // user get user by id
    app.post(`/api/${version}/users/getbyid`, function (req: Request, res: Response) {
        usersController.getById(req, res)
    });
}