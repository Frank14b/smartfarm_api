import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { BusinessDto } from "../Dtos/BusinessDtos";

const Business = require("../models/Business");

exports.addNew = (req:Request, res:Response) => {

    const businessData = new Business(req.body)

    businessData.save((error:MongooseError, savedData:BusinessDto) => {
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