const config = require("../config")
const expressJwt = require("express-jwt");
const constants = require("../utils/constants");

module.exports = function (app) {
    app.use(expressJwt.expressjwt({ secret: config.app.jwtToken, algorithms: ['HS256'] }).unless({ path: constants.userAuthPath }))
}