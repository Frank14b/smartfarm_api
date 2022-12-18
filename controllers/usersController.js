const config = require("../config")
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    
};

exports.register = (req, res) => {

    let payload = {
        "login": req.body.username,
        "userip": "0.0.0.0",
        "role": "user",
    }

    const dataUser = new User(req.body)

    dataUser.save((error, savedUser) => {
        if (error) {
            if(error.message) {
                res.json({ status: 400, error: error.message })
            }else{
                res.json({ status: 400, error: error })
            }
        } else {
            const userToken = jwt.sign(payload, config.app.jwtToken)
            res.json({ status: 200, token: userToken, data: savedUser })
        }
    })
};