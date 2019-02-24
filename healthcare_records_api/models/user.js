const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
});

let Patient = mongoose.model('Patient', patientSchema, 'Patient');

module.exports = Patient;