const mongoose:any = require('mongoose');

const userAccesSchema = mongoose.Schema({
    access: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acces',
        required: [true, "role key is required"]
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRole',
        required: [true, "access key is required"]
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

module.exports = mongoose.model('UserAcces', userAccesSchema);