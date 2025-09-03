const mongoose = require('mongoose')
const consumerSchema = new mongoose.Schema({
    _name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number
    },
    typeoflocation: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    avgelectricitybill: {
        type: Number,
        required: true,
    },
    additionalinfo: {
        type: String
    }
});

module.exports = mongoose.model('Consumer', consumerSchema);

