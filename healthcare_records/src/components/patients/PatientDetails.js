import React, { Component } from "react";
import PropTypes from "prop-types";

class PatientDetails extends Component {
  render() {
    const { patient } = this.props.location.state;

    return (
      <div>
        <h1>{patient.name}</h1>
      </div>
    );
  }
}

PatientDetails.propTypes = {
  patient: PropTypes.object.isRequired
};

export default PatientDetails;
