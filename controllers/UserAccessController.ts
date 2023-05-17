import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { ResultUsersAccessDto, UsersAccessDto } from "../Dtos/UserAcessDtos";

const UserAcces = require("../models/UserAcces");

exports.addNew = (req:Request, res:Response) => {
    const userAccessData = new UserAcces(req.body)

    userAccessData.save((error:MongooseError, savedData:UsersAccessDto) => {
        if (error) {
            if (error.message) {
                res.json({ status: 400, error: error.message })
            } else {
                res.json({ status: 400, error: error })
            }
        } else {
            res.json({ status: 200, data: savedData })
        }
    })
};

exports.getAll = (req:Request, res:Response) => {

    UserAcces.find({}).populate(["access", "role"]).exec(function (err:MongooseError, data:ResultUsersAccessDto) {
      if (err) {
        res.json({error:err})
      }else{
        res.json({'data': data, status: 200})
      }
    })
};