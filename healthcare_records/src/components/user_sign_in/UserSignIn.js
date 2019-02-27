import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import axios from "axios";

export class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  userSignIn = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const postData = {
      username,
      password
    };

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/signin`,
        postData,
        axiosConfig
      )
      .then(response => {
        if (response.data) {
          const user = response.data;
          // move to search patients if doctor or patient details of patient
          if (user.role === "doctor") {
            // route to search patient
            this.props.history.push("/searchpatients");
          }

          if (user.role === "patient") {
            // fetch the patient details with user.id
            // route to patient details
            axios
              .get(
                `${process.env.REACT_APP_API_URL}/patients/${user._id}`,
                axiosConfig
              )
              .then(response => {
                if (response.data) {
                  this.props.history.push({
                    pathname: "/patientdetails",
                    state: { patient: response.data, readOnly: false }
                  });
                }
              })
              .catch(err => {
                console.log(`Error fetching patient: ${user._id}`);
              });
          }
        } else {
          console.log("no login");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Tempus
            </Typography>
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
      </Fragment>
    );
  }
}

export default withRouter(UserSignIn);
