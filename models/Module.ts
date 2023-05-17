import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: [true, "name must be unique"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    ref: {
        type: String,
        required: [true, "Ref is required"]
    },
    price: {
        type: Number,
        default: 0
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
        default: 1,
        enum: [0, 1, 2]
    }
});

module.exports = mongoose.model('Module', modulesSchema);