import React, { Component } from 'react'

export class DoctorSignIn extends Component {

    state = {
        [
            {
        username: 'anakin',
        password: '',
        role: 'patient'
            },
        {
            username: 'yoda',
            password: '',
            role: 'doctor'
        }]
    }

    // Proceed to SearchPatients if signed in successfully
    doctorSignIn = () => {
        
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default DoctorSignIn
