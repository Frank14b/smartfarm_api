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

    let payload = {
        "login": req.body.username,
        "userip": "0.0.0.0",
        "role": "user",
    }

    const dataUser = new Acces(req.body)

    dataUser.save((error, savedUser) => {
        if (error) {
            if (error.message) {
                res.json({ status: 400, error: error.message })
            } else {
                res.json({ status: 400, error: error })
            }
        } else {
            const userToken = jwt.sign(payload, config.app.jwtToken)
            res.json({ status: 200, token: userToken, data: savedUser })
        }
    })
};