import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from 'react-router';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class UserSignIn extends Component {
    
  state = {
    username: "",
    password: "",
    users: [
      {
        username: "anakin",
        password: "george",
        role: "patient"
      },
      {
        username: "yoda",
        password: "george",
        role: "doctor"
      }
    ]
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  userSignIn = e => {
    //e.PreventDefault();

    const { users, username, password } = this.state;

    const signInUser = users.filter(user => {
      return user.username === username && user.password === password;
    });

    if (signInUser.length > 0) {
      const user = signInUser[0];
      // move to search patients if doctor or patient details of patient
      if (user.role === "doctor") {
        // route to search patient
        console.log("route to search patient");
        this.props.history.push('/searchpatients');
      }

      if (user.role === "patient") {
        // route to patient details
        console.log("route to patient details");
        this.props.history.push('/patientdetails');
      }
    } else {
      console.log("no login");
    }
  };

  render() {
    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          {/* <SearchPatients patients={this.state.patients} patientClicked={this.patientClicked} /> */}

          <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h5"color="inherit">Tempus</Typography>
            </Toolbar>
          </AppBar>

          <br />
          <TextField
            id="standard-username"
            label="Username"
            margin="normal"
            onChange={this.handleChange("username")}
          />
          <br />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.handleChange("password")}
          />
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={this.userSignIn}
          >
            Login
          </Button>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withRouter(UserSignIn);
