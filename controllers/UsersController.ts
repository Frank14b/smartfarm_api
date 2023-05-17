import { Request, Response } from "express";
import { AppConfig } from "../configs/config.type";
import { ResultUserLoginDto } from "../Dtos/UsersDtos";

const config:AppConfig = require("../configs/index")
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const requestIP = require("request-ip");

exports.login = (req: Request, res: Response): Response<ResultUserLoginDto>|any => { // user login 
    try {
        const payload = {
            "email": req.body.email,
            "userip": "0.0.0.0",
            "role": "user",
        }

        const dataUser = new User(req.body)

        dataUser.save((error:any, savedUser:any) => {
            if (error) {
                if (error.message) {
                    res.status(400).json({ status: 400, error: error.message })
                } else {
                    res.status(400).json({ status: 400, error: error })
                }
            } else {
                const userToken = jwt.sign(payload, config.app.jwtToken)
                res.status(200).json({ status: 200, token: userToken, data: savedUser })
            }
        })
    } catch (error:any) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
};

exports.register = (req:any, res:any): Response<ResultUserLoginDto>|any => { // user registration
    try {
        const payload = {
            "email": req.body.email,
            "userip": "0.0.0.0",
            "role": "user",
        }

        const dataUser = new User(req.body)

        dataUser.save((error:any, savedUser:any) => {
            if (error) {
                if (error.message) {
                    res.status(400).json({ status: 400, error: error.message })
                } else {
                    res.status(400).json({ status: 400, error: error })
                }
            } else {
                const userToken = jwt.sign(payload, config.app.jwtToken)
                res.status(200).json({ status: 200, token: userToken, data: savedUser })
            }
        })
    } catch (error:any) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
};

exports.getAll = (req: Request, res: Response) => { // get all users
    try {
        let filter: any = null
        let status: boolean = true
        if (req.params?.status) {
            status = req.params?.status ? true : false
        }
        filter = { "status": { $eq: status } }

        if (req.body.keyword) {
            filter = {
                $and: [
                    filter,
                    {
                        $or: [
                            { username: {$regex :`.*${req.body?.keyword}.*`} },
                            { fullname: {$regex :`.*${req.body?.keyword}.*`} },
                            { email: {$regex :`.*${req.body?.keyword}.*`} },
                            { country: {$regex :`.*${req.body?.keyword}.*`} }
                        ]
                    }
                ]
            }
        }

        User.find(filter).populate().exec((err:any, datas:any) => {
            if (err) {
                res.status(400).json({ error: err.message, status: 400 })
            } else {
                res.status(200).json({ data: datas, status: 200 })
            }
        })
    } catch (error:any) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
}

exports.getById = (req: Request, res: Response) => { // get user by id
    try {
        if (!req.params?.id) {
            res.status(400).json({ error: "please provide user id", status: 400 })
        } else {
            User.findById(req.params?.id).exec((err:any, datas:any) => {
                if (err) {
                    res.status(400).json({ error: err.message, status: 400 })
                } else {
                    res.status(200).json({ data: datas, status: 200 })
                }
            })
        }
    } catch (error:any) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
}