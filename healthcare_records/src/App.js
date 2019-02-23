import React, { Component } from "react";
import "./App.css";
import UserSignIn from "./components/user_sign_in/UserSignIn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

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
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {/* <SearchPatients patients={this.state.patients} patientClicked={this.patientClicked} /> */}

          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography color="inherit">Tempus</Typography>
            </Toolbar>
          </AppBar>
          <UserSignIn />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
