const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "email must be unique"]
    },
    fullname: {
        type: String,
        required: [true, "fullname is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    phone: {
        type: Number,
        required: [true, "phone is required"]
    },
    countrycode: {
        type: Number,
        required: [true, "countrycode is required"]
    },
    country: {
        type: String,
        required: [true, "country is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('User', userSchema);