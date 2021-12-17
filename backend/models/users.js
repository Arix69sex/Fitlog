const entrySchema = require('./entries')

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
