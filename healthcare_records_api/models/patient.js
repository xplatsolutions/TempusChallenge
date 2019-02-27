const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    mailingAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
});

const Patient = mongoose.model('Patient', patientSchema, 'Patients');

module.exports = Patient;