import mongoose from "mongoose";

const customSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: [true, "name must be unique"]
    },
    description: {
        type: String,
    },
    longitude: {
        type: String,
        required: [true, "longitude is required"],
    },
    latitude: {
        type: String,
        required: [true, "latitude is required"],
    },
    country: {
        type: String,
        required: [true, "country is required"],
    },
    city: {
        type: String,
        required: [true, "city is required"],
    },
    fulladdress: {
        type: String,
        required: [true, "fulladdress is required"],
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "createdby key is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number key is required"]
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

module.exports = mongoose.model('BusinessBranch', customSchema);