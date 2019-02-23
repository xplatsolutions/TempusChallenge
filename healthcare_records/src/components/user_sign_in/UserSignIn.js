import React, { Component, Fragment } from "react";
import Appbar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      this.setState({[input]: e.target.value});
  }

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
      }

      if (user.role === "patient") {
        // route to patient details
        console.log("route to patient details");
      }
    } else {
      console.log("no login");
    }
  };

  render() {
    return (
      <Fragment>
        <Appbar title="Sign In" />
        <br />
        <TextField 
            id="standard-username" 
            label="Username" 
            margin="normal"
            onChange={this.handleChange('username')}
         />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={this.handleChange('password')}
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
          Sign In
        </Button>
      </Fragment>
    );
  }
}

export default UserSignIn;
