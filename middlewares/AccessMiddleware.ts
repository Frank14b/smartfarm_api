import { Application } from "express";
import { AppContants } from "../constants/constants.type";
import { AppConfig } from "../configs/config.type";

const config: AppConfig = require("../configs/index")
const expressJwt = require("express-jwt");
const constants: AppContants = require("../constants/index");

module.exports = function (app: Application, version: string) {

    const paths = constants.app.userAuthPath;

    if (version == "v1") {
        // app.use(expressJwt.expressjwt({ secret: config.app.jwtToken, algorithms: ['HS256'] }).unless({ path: paths }))
    }

}