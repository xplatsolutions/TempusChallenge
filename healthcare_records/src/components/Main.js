import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserSignIn from './user_sign_in/UserSignIn'
import SearchPatients from './doctors/SearchPatients';
import PatientDetails from './patients/PatientDetails';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={UserSignIn} />
            <Route exact path='/searchpatients' component={SearchPatients} />
            <Route exact path='/patientdetails' component={PatientDetails} />
        </Switch>
    </main>
)

export default Main;