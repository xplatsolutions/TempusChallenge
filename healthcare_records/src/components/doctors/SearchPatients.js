import React, {
    Component,
    Fragment
} from 'react';
import Patient from '../patients/Patient';
import PropTypes from 'prop-types';
import FilterPatients from './FilterPatients';

class SearchPatients extends Component {
    render() {
        return ( 
            <Fragment>
                <FilterPatients />
                <Fragment>{this.props.patients.map((patient) => (
                            <Patient key={patient.id} patientDetails={patient} patientClicked={this.props.patientClicked} />))}
                </Fragment>
            </Fragment>
        )
    }
}

// PropTypes
SearchPatients.propTypes = {
    patients: PropTypes.array.isRequired,
    patientClicked: PropTypes.func.isRequired
}

export default SearchPatients;