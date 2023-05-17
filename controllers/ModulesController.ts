import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { ModulesDto } from "../Dtos/ModulesDtos";

const Module = require("../models/Module");

exports.addNew = (req:Request, res:Response) => {

    const moduleData:any = new Module(req.body)

    moduleData.save((error:MongooseError, savedData:ModulesDto) => {
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