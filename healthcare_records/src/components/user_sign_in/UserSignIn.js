import React, { Component, Fragment } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Appbar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class UserSignIn extends Component {

    state = {
        users: [
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

    userSignIn = e => {
        e.PreventDefault()
    }

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
            <Appbar title="Sign In" />
            <br />
                <TextField
                    id="standard-username"
                    label="Username"
                    value={this.state.name}
                    margin="normal"
                />
                <br />
            <TextField id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <br /><br /><br />
                <Button variant="contained" 
                    size="medium" 
                    color="primary" >
                    Sign In
        </Button>

        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UserSignIn
