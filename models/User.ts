import mongoose from "mongoose";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}|;:'",.<>?]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const stringRegex = /[&/\\#,+()@$~%.'":*?<>{}]/g;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "email must be unique"],
    },
    fullname: {
        type: String,
        trim: true,
        required: [true, "fullname is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        validate: {
            validator: passwordRegex,
            message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
        }
    },
    phone: {
        type: Number,
        trim: true,
        required: [true, "phone is required"]
    },
    countrycode: {
        type: Number,
        trim: true,
        required: [true, "countrycode is required"]
    },
    country: {
        type: String,
        trim: true,
        required: [true, "country is required"],
        validate: (value: string) => {
            return value.replace(stringRegex, '');
        }
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
        validate: {
            validator: emailRegex,
            message: 'Please provide a valid email address custom@test.com'
        }
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
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    role: {
        type: Number,
        default: 1,
        enum: [0, 1, 2]
    },
});

userSchema.plugin(require('mongoose-bcrypt'), {
    fields: ['password'],
});

// Define the pre-save middleware function
userSchema.pre('save', function (next) {
    this.username = this.username.replace(stringRegex, '').trim()
    this.fullname = this.fullname.replace(stringRegex, '')
    this.country = this.country.replace(stringRegex, '').trim()
    next()
});

userSchema.pre('find', function () {
    this.find({ status: { $ne: 2 } });
})

const UserModel = mongoose.model('User', userSchema);


module.exports = UserModel;