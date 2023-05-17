import mongoose from "mongoose";

const customSchema = new mongoose.Schema({
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "createdby key is required"]
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessBranch',
        required: [true, "BusinessBranch (business) key is required"]
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activitie',
        required: [true, "Activity key is required"]
    },
    capacity: {
        type: Number,
        required: [true, "capacity is required"],
    },
    startdate: {
        type: Date,
        required: [true, "startdate is required"],
        default: Date.now
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

module.exports = mongoose.model('BusinessActivity', customSchema);