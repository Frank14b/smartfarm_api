import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const jwt = require("jsonwebtoken");
const Acces = require("../models/Acces");

exports.addNew = (req:any, res:any) => {
    const accessData = new Acces(req.body)

    accessData.save((error:any, savedData:any) => {
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
    Acces.find({}).exec((err:any, data:any) => {
        if(err) {
            res.json({error: err, status: 400})
        }else{
            res.json({data: data, status: 200})
        }
    })
};