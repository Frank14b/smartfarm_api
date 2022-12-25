const config = require("../config")
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const requestIP = require("request-ip");

exports.login = (req, res) => { // user login 
    try {
        let payload = {
            "email": req.body.email,
            "userip": "0.0.0.0",
            "role": "user",
        }

        const dataUser = new User(req.body)

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
    } catch (error) {
        res.json({ error: "an error occured", status: 500 })
    }
};

exports.register = (req, res) => { // user registration
    try {
        let payload = {
            "login": req.body.username,
            "email": req.body.email,
            "userip": "",
        }

        const dataUser = new User(req.body)

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
    } catch (error) {
        res.json({ error: "an error occured", status: 500 })
    }
};

exports.getAll = (req, res) => { // get all users
    try {
        let filter = null
        let status = true
        if (req.body.status) {
            status = req.body.status
        }
        filter = { "status": { $eq: status } }

        if (req.body.keyword) {
            filter = {
                $and: [
                    filter,
                    {
                        $or: [
                            { username: {$regex :`.*${req.body.keyword}.*`} },
                            { fullname: {$regex :`.*${req.body.keyword}.*`} },
                            { email: {$regex :`.*${req.body.keyword}.*`} },
                            { country: {$regex :`.*${req.body.keyword}.*`} }
                        ]
                    }
                ]
            }
        }

        User.find(filter).populate().exec((err, datas) => {
            if (err) {
                res.json({ error: err.message, status: 400 })
            } else {
                res.json({ data: datas, status: 200 })
            }
        })
    } catch (error) {
        res.json({ error: "an error occured", status: 500 })
    }
}

exports.getById = (req, res) => { // get user by id
    try {
        if (!req.body.id) {
            res.json({ error: "please provide user id", status: 400 })
        } else {
            User.findById(req.body.id).exec((err, datas) => {
                if (err) {
                    res.json({ error: err.message, status: 400 })
                } else {
                    res.json({ data: datas, status: 200 })
                }
            })
        }
    } catch (error) {
        res.json({ error: "an error occured", status: 500 })
    }
}