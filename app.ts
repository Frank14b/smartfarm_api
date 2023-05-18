import { AppConfig } from "./configs/config.type";

const express = require('express');

import { Application } from 'express';

const config: AppConfig = require("./configs/index")
const app: Application = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${config.app.dbuser}:${config.app.dbpassword}@cluster0.m0x8k.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on('error', () => {
    console.error.bind("Cannot connect to db")
})
db.once('open', () => {
    console.log("Db connected")
})

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/index')(app, "v1");

app.listen(config.app.appPort, () => {
    console.log(`app runing on ${config.app.appPort}`);
})