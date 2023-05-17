import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const jwt = require("jsonwebtoken");
const Module = require("../models/Module");

exports.addNew = (req:any, res:any) => {

    const moduleData:any = new Module(req.body)

    moduleData.save((error:any, savedData:any) => {
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

exports.getAll = (req, res) => {

};