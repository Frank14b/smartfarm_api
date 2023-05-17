// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const config = require("./config")
// const jwt = require("jsonwebtoken");
// const expressJwt = require("express-jwt");
// const mongoose = require("mongoose");

// mongoose.connect(`mongodb+srv://${config.app.dbuser}:${config.app.dbpassword}@cluster0.m0x8k.mongodb.net/?retryWrites=true&w=majority`);
// const db = mongoose.connection;
// db.on('error', () => {
//     console.error.bind("Cannot connect to db")
// })

// db.once('open', () => {
//     console.log("Db connected")
// })

// const movieShema = mongoose.Schema({
//     title: String,
//     description: String,
//     year: Number
// })

// const Movie = mongoose.model('Movie', movieShema);

// console.log(config.app)

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressJwt.expressjwt({ secret: config.app.jwtToken, algorithms: ['HS256'] }).unless({ path: ["/register"] }))

// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

// app.post("/register", (req, res) => {
//     console.log(req.body)

//     let payload = {
//         "login": req.body.login,
//         "userip": "0.0.0.0",
//         "role": "user",
//     }

//     const myMovie = new Movie({ title: "test", description: "test desc", year: "2022" })

//     myMovie.save((error, savedMovie) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log('savedMovie', savedMovie)
//         }
//     })

//     const myToken = jwt.sign(payload, secret)
//     res.json({ token: myToken })
// });

// app.post("/login", (req, res) => {
//     resultData = []
//     Movie.find((err, movies) => {
//         if (err) {
//             console.log(err)
//             res.sendStatus(500)
//         } else {
//             resultData = movies
//             res.json({data: resultData, status : 200})
//         }
//     })
// });

// app.listen(3001, () => {
//     console.log("app runing on 3001");
// })