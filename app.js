const express = require("express");
const config = require("./config")
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${config.app.dbuser}:${config.app.dbpassword}@cluster0.m0x8k.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on('error', () => {
    console.error.bind("Cannot connect to db")
})
db.once('open', () => {
    console.log("Db connected")
})

app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/users')(app);

app.listen(3001, () => {
    console.log("app runing on 3001");
})