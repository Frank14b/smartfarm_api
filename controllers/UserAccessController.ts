import { AppConfig } from "../configs/config.type";

const config:AppConfig = require("../configs/index")
const jwt = require("jsonwebtoken");
const UserAcces = require("../models/UserAcces");

exports.addNew = (req:any, res:any) => {
    const userAccessData = new UserAcces(req.body)

    userAccessData.save((error:any, savedData:any) => {
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

    UserAcces.find({}).populate(["access", "role"]).exec(function (err:any, data:any) {
      if (err) {
        res.json({error:err})
      }else{
        res.json({'data': data, status: 200})
      }
    })
};