import { Request, Response } from "express";
import { AppConfig } from "../configs/config.type";
import { ResultUserDto } from "../Dtos/UsersDtos";
import { MongooseError } from "mongoose";

const config: AppConfig = require("../configs/index")
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const requestIP = require("request-ip");

exports.login = async (req: Request, res: Response) => { // user login 
    try {
        const userIp = requestIP.getClientIp(req);

        const dataUser = await User.findOne({ email: req.body?.email ?? "" });

        const checkPassword = await dataUser.verifyPassword(req.body?.password ?? "")

        if (dataUser && checkPassword) {
            // The password is valid
            const payload = {
                id: dataUser?._id,
                email: req.body.email,
                ip: userIp,
            }

            const propertyDescriptor = Object.getOwnPropertyDescriptor(dataUser, 'password');
            console.log(propertyDescriptor?.configurable);

            const userToken = jwt.sign(payload, config.app.jwtToken)

            res.status(200).json({ data: dataUser, authtoken: userToken })
        } else {
            // The password is invalid
            res.status(401).json({ mssg: "email or password invalid" })
        }
    } catch (error) {
        res.status(500).json({ mssg: "an error occured", status: 500, err: error })
    }
};

exports.register = (req: Request, res: Response) => { // user registration
    try {
        const userIp = requestIP.getClientIp(req);

        const dataUser = new User(req.body)

        dataUser.save((error: MongooseError, savedUser: ResultUserDto) => {
            if (error) {
                if (error.message) {
                    res.status(400).json({ status: 400, error: error.message })
                } else {
                    res.status(400).json({ status: 400, error: error })
                }
            } else {

                const payload = {
                    id: savedUser?._id,
                    email: req.body.email,
                    ip: userIp,
                }

                const userToken = jwt.sign(payload, config.app.jwtToken)

                res.status(200).json({ data: savedUser, authtoken: userToken })
            }
        })
    } catch (error) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
};

exports.getAll = async (req: Request, res: Response) => { // get all users
    try {
        let filter: any = null
        let status: boolean = true
        if (req.params?.status) {
            status = req.params?.status ? true : false
        }
        filter = { "status": { $eq: status } }

        if (req.body.keyword) {
            const keyword = { $regex: `.*${req.body?.keyword}.*` };

            filter = {
                $and: [
                    filter,
                    {
                        $or: [
                            { username: keyword },
                            { fullname: keyword },
                            { email: keyword },
                            { country: keyword }
                        ]
                    }
                ]
            }
        }

        const userDatas = await User.find(filter, '-password').populate().exec()

        if (userDatas) {
            res.status(200).json({ data: userDatas, status: 200 })
        } else {
            res.status(400).json({ error: {}, status: 400 })
        }

    } catch (error) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
}

exports.getById = (req: Request, res: Response) => { // get user by id
    try {
        if (!req.params?.id) {
            res.status(400).json({ error: "please provide user id", status: 400 })
        } else {
            User.findById(req.params?.id).exec((err: MongooseError, datas: ResultUserDto) => {
                if (err) {
                    res.status(400).json({ error: err.message, status: 400 })
                } else {
                    res.status(200).json({ data: datas, status: 200 })
                }
            })
        }
    } catch (error) {
        res.status(500).json({ error: "an error occured", status: 500 })
    }
}