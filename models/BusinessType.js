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

module.exports = mongoose.model('BusinessType', customSchema);