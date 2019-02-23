import React, {
    Component
} from 'react';

class PatientDetails extends Component {

    state = {
        patientDetails: {
            id: 1,
            name: "Jon Smith",
            age: 38,
            emailAddress: "jonsmith@tempus.com",
            mailingAddress: "Somewhere in Manhattan",
            phoneNumber: "8009001000"
        }
    }

    render() {
        console.log(this.props.patientDetails)
        return ( 
        <div>
            <h1>Patient Details</h1> 
        </div>
        );
    }
}

export default PatientDetails;