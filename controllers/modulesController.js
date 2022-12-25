const config = require("../config")
const jwt = require("jsonwebtoken");
const Module = require("../models/Module");

exports.addNew = (req, res) => {

    const moduleData = new Module(req.body)

    moduleData.save((error, savedData) => {
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