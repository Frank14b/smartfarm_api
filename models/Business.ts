const mongoose = require('mongoose');

const customSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: [true, "name must be unique"]
    },
    description: {
        type: String,
    },
    logo: {
        type: String,
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "createdby key is required"]
    },
    b_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessType',
        required: [true, "BusinessType (b_type) key is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number key is required"]
    },
    code: {
        type: String,
        required: [true, "code is required"],
        unique: [true, "code must be unique"]
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

module.exports = mongoose.model('Business', customSchema);