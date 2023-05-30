import { Application, Request, Response } from "express";
import {ResultUserLoginDto, ResultUserDto} from "../Dtos/UsersDtos";

const usersController = require('../controllers/usersController');

module.exports = function (app: Application, version: string) {
    /*startJsAM
          @tag: Users
          @name: User login 
          @params: UserLoginDto
          @result: ResultUserLoginDto
    endJsAM*/
    app.post(`/api/v1/users/login`, function (req: Request, res: Response): ResultUserLoginDto {
        return usersController.login(req, res)
    });

    /*startJsAM
          @tag: Users
          @name: User Registration
          @params: UserRegisterDto
          @result: ResultUserDto
    endJsAM*/
    app.post(`/api/v1/users/register`, (req: Request, res: Response): ResultUserDto => {
        return usersController.register(req, res)
    });

    /*startJsAM 
          @tag: Users
          @name: User get all users
          @result: ResultUserListDto
          @query: GetAllUserDto
    endJsAM*/
    app.get(`/api/v1/users`, function (req: Request, res: Response) {
        return usersController.getAll(req, res)
    });

    /*startJsAM
          @tag: Users
          @name: User get user by id
          @result: ResultUserRegisterDto
    endJsAM*/
    app.get(`/api/v1/users/:id`, function (req: Request, res: Response) {
        return usersController.getById(req, res)
    });
}