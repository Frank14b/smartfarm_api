import { MongooseError } from "mongoose";

const businessType = require("../models/businessType");

exports.addNew = (req:any, res:any) => {

    const businessTypeData:any = new businessType(req.body)

    businessTypeData.save((error:MongooseError, savedData:Object) => {
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