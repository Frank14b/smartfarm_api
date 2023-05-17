import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const jwt = require("jsonwebtoken");
const businessType = require("../models/businessType");

exports.addNew = (req:any, res:any) => {

    const businessTypeData:any = new businessType(req.body)

    businessTypeData.save((error:any, savedData:any) => {
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

exports.getAll = (req:any, res:any) => {

};