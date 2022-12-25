const mongoose = require('mongoose');

const userRoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: [true, "name must be unique"]
    },
    shortname: {
        type: String,
        required: [true, "shortname is required"]
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

module.exports = mongoose.model('UserRole', userRoleSchema);