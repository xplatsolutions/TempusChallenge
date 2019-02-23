import React, { Component } from 'react';
import './App.css';
import SearchPatients from './components/doctors/SearchPatients';
import UserSignIn from './components/user_sign_in/UserSignIn';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {

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
  }

  patientClicked = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        {/* <SearchPatients patients={this.state.patients} patientClicked={this.patientClicked} /> */}
        
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Tempus
          </Typography>
          </Toolbar>
        </AppBar>
        <UserSignIn/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
