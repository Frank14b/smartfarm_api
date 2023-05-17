require('dotenv').config()

const app = {
    dbuser: process.env.MONGODBUSER,
    dbpassword: process.env.MONGODBPASS,
    jwtToken: process.env.JJWTSECRET,
    appPort: process.env.APP_PORT
}

exports.app = app;