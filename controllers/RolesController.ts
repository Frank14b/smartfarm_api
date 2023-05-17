import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { RolesDto } from "../Dtos/RolesDtos";

const UserRole = require("../models/UserRole");

exports.addNew = (req:Request, res:Response) => {

    const roleData = new UserRole(req.body)

    roleData.save((error:MongooseError, savedData:RolesDto) => {
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