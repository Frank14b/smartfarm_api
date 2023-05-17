import { Request, Response } from "express";
import { AccessDto } from "../Dtos/AccessDtos";
import { MongooseError } from "mongoose";

const Acces = require("../models/Acces");

exports.addNew = (req: Request, res: Response) => {
    const accessData = new Acces(req.body)

    accessData.save((error:MongooseError, savedData:AccessDto) => {
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
    Acces.find({}).exec((err:MongooseError, data:Object) => {
        if(err) {
            res.json({error: err, status: 400})
        }else{
            res.json({data: data, status: 200})
        }
    })
};