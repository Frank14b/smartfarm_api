const config = require("../config")
const jwt = require("jsonwebtoken");
const businessType = require("../models/businessType");

exports.addNew = (req, res) => {

    const bTypeData = new businessType(req.body)

    bTypeData.save((error, savedData) => {
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