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
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

const Entries = mongoose.model('Entry', entrySchema);
module.exports = entrySchema;
