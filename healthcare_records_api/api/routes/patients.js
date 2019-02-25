const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Patient = require("../../models/patient");

router.get("/", (req, res, next) => {
  Patient.find()
    .exec()
    .then(patients => {
      res.status(200).json(patients);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: "Error fetching patients"
            }
        }); 
    });
});

router.put("/", (req, res, next) => {
  const patientPayload = req.body;

  const mongoPatient = new Patient({
    _id: new mongoose.Types.ObjectId(patientPayload.id),
    name: patientPayload.name,
    age: patientPayload.age,
    emailAddress: patientPayload.emailAddress,
    mailingAddress: patientPayload.mailingAddress,
    phoneNumber: patientPayload.phoneNumber
  });

  Patient.findOneAndUpdate({ _id: mongoPatient._id }, mongoPatient, {
    new: true
  })
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({
          message: "Patient updated successfully",
          patient: doc
        });
      } else {
        es.status(404).json({
          error: {
            message: `Could not find a patient with id ${patientPayload.id}`
          }
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: {
          message: "Patient update was unsuccessful"
        }
      });
    });
});

module.exports = router;
