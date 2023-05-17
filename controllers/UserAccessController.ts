import { MongooseError } from "mongoose";

const UserAcces = require("../models/UserAcces");

exports.addNew = (req:any, res:any) => {
    const userAccessData = new UserAcces(req.body)

    userAccessData.save((error:MongooseError, savedData:Object) => {
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

    UserAcces.find({}).populate(["access", "role"]).exec(function (err:MongooseError, data:Object) {
      if (err) {
        res.json({error:err})
      }else{
        res.json({'data': data, status: 200})
      }
    })
};