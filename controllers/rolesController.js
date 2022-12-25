const config = require("../config")
const jwt = require("jsonwebtoken");
const UserRole = require("../models/UserRole");

exports.addNew = (req, res) => {

    const roleData = new UserRole(req.body)

    roleData.save((error, savedData) => {
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

    const dataUser = new UserRole(req.body)

    dataUser.save((error, savedUser) => {
        if (error) {
            if (error.message) {
                res.json({ status: 400, error: error.message })
            } else {
                res.json({ status: 400, error: error })
            }
        } else {
            res.json({ status: 200, data: savedUser })
        }
    })
};