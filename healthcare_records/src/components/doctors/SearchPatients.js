import React, {
    Component,
    Fragment
} from 'react';
import Patient from '../patients/Patient';
import FilterPatients from './FilterPatients';

class SearchPatients extends Component {

    state = {
        patients: [
            {
                id: 1,
                name: "Anakin Skywalker",
                age: 38,
                emailAddress: "anakin@tempus.com",
                mailingAddress: "Somewhere in Galaxy",
                phoneNumber: "8009001000"
            },
            {
                id: 2,
                name: "Master Yoda",
                age: 38,
                emailAddress: "yoda@tempus.com",
                mailingAddress: "Somewhere in Galaxy",
                phoneNumber: "8009001000"
            }
        ]
    };

    render() {
        return ( 
            <Fragment>
                <FilterPatients />
                <Fragment>{this.state.patients.map((patient) => (
                            <Patient key={patient.id} patientDetails={patient} patientClicked={this.props.patientClicked} />))}
                </Fragment>
            </Fragment>
        )
    }
}

export default SearchPatients;