import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const jwt = require("jsonwebtoken");
const UserRole = require("../models/UserRole");

exports.addNew = (req:any, res:any) => {

    const roleData = new UserRole(req.body)

    roleData.save((error:any, savedData:any) => {
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