import { Application, Request, Response } from "express";

const usersController = require('../controllers/usersController');

module.exports = function (app: Application, version: string) {
    /*startJsAM
          @name: User login
          @params: UserLoginDto
          @result: ResultUserLoginDto
          @controller: UsersController
          @Summary: Use this Api to login user generate access token
    endJsAM*/
    app.post(`/api/v1/users/login`, function (req: Request, res: Response) {
        usersController.login(req, res)
    });

    /*startJsAM
          @name: User Registration
          @params: UserRegisterDto
          @result: ResultUserDto
          @controller: UsersController
          @Summary: Use this Api to register user generate access token
    endJsAM*/
    app.post(`/api/v1/users/register`, function (req: Request, res: Response) {
        usersController.register(req, res)
    });

    // user get all users
    /*startJsAM
          @name: User Registration
          @params: 
          @result: ResultUserRegisterDto
          @controller: UsersController
          @Summary: Use this Api to register user generate access token
    endJsAM*/
    app.get(`/api/v1/users`, function (req: Request, res: Response) {
        usersController.getAll(req, res)
    });

    // user get user by id
    /*startJsAM
          @name: User Registration
          @params: 
          @result: ResultUserRegisterDto
          @controller: UsersController
          @Summary: Use this Api to register user generate access token
    endJsAM*/
    app.get(`/api/v1/users/:id`, function (req: Request, res: Response) {
        usersController.getById(req, res)
    });
}