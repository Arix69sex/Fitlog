const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    calories: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true,
        minlength: 8
    },
}, {
    timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema);

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    activity: {
        type: String
    },
    goal: {
        type: String
    },
    entries: [entrySchema]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
