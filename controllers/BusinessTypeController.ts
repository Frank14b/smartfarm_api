import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { BusinessTypesDto } from "../Dtos/BusinessTypesDtos";

const businessType = require("../models/businessType");

exports.addNew = (req:Request, res:Response) => {

    const businessTypeData:any = new businessType(req.body)

    businessTypeData.save((error:MongooseError, savedData:BusinessTypesDto) => {
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