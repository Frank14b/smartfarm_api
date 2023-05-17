import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const Business = require("../models/Business");

exports.addNew = (req:any, res:any) => {

    const businessData = new Business(req.body)

    businessData.save((error:any, savedData:any) => {
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