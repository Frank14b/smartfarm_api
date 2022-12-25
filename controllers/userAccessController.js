const config = require("../config")
const jwt = require("jsonwebtoken");
const UserAcces = require("../models/UserAcces");

exports.addNew = (req, res) => {
    const userAccessData = new UserAcces(req.body)

    userAccessData.save((error, savedData) => {
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

    UserAcces.find({}).populate(["access", "role"]).exec(function (err, data) {
      if (err) {
        res.json({error:err})
      }else{
        res.json({'data': data, status: 200})
      }
    })
};