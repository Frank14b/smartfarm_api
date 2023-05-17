import { AppConfig } from "../configs/config.type";

const jwt = require('jsonwebtoken');
const config: AppConfig = require("../configs/index")
const secret = config.app.dbuser

exports.checkUserToken = () => {
    
};