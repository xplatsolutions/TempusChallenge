import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Patient extends Component {

    

  render() {

    const { id, name } = this.props.patientDetails;

    return (
      <div>
        <p>{ name }</p>
      </div>
    )
  }
}

// PropTypes
Patient.propTypes = {
    patientDetails: PropTypes.object.isRequired
}

export default Patient
