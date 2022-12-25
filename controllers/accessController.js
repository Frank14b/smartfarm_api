const config = require("../config")
const jwt = require("jsonwebtoken");
const Acces = require("../models/Acces");

exports.addNew = (req, res) => {
    const accessData = new Acces(req.body)

    accessData.save((error, savedData) => {
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
    Acces.find({}).exec((err, data) => {
        if(err) {
            res.json({error: err, status: 400})
        }else{
            res.json({data: data, status: 200})
        }
    })
};