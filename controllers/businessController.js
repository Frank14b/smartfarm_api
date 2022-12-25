const config = require("../config")
const Business = require("../models/Business");

exports.addNew = (req, res) => {

    const businessData = new Business(req.body)

    businessData.save((error, savedData) => {
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