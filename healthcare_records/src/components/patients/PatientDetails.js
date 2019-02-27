import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

class PatientDetails extends Component {
  constructor(props) {
    super(props);

    const { patient } = this.props.location.state;
    this.state = {
      _id: patient._id,
      userId: patient.userId._id,
      name: patient.name,
      age: patient.age,
      emailAddress: patient.emailAddress,
      mailingAddress: patient.mailingAddress,
      phoneNumber: patient.phoneNumber,
      avatar: patient.avatar
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  updatePatientDetails = e => {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/patients`, this.state, axiosConfig)
      .then(response => {
        if (response.status === 200) {
          console.log("Updated successfully");
        } else {
          console.log(
            `Updated unsuccessful: ${response.status} - ${response.data}`
          );
        }
      })
      .catch(err => {
        console.log(`Error updating patient details: ${err}`);
      });
  };

  render() {
    const { classes } = this.props;
    const { readOnly } = this.props.location.state;
    const readOnlyInputProps = {
      readOnly: readOnly
    };
    const ageReadOnlyInputProps = {
      inputComponent: NumberFormatCustom,
      readOnly: readOnly
    };

    return (
      <Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Details
            </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="patient-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
            InputProps={readOnlyInputProps}
          />

          <TextField
            id="patient-age"
            label="Age"
            className={classes.textField}
            value={this.state.age}
            onChange={this.handleChange("age")}
            margin="normal"
            InputProps={readOnlyInputProps}
          />

          <TextField
            id="patient-emailAddress"
            label="Email Address"
            className={classes.textField}
            value={this.state.emailAddress}
            onChange={this.handleChange("emailAddress")}
            margin="normal"
            InputProps={readOnlyInputProps}
          />

          <TextField
            id="patient-mailingAddress"
            label="Mailing Address"
            className={classes.textField}
            value={this.state.mailingAddress}
            onChange={this.handleChange("mailingAddress")}
            margin="normal"
            InputProps={readOnlyInputProps}
          />

          {/* <TextField
            id="patient-phoneNumber"
            label="Phone Number"
            className={classes.textField}
            value={this.state.phoneNumber}
            onChange={this.handleChange("phoneNumber")}
            margin="normal"
            InputProps={readOnlyInputProps}
          /> */}

          <FormControl margin="normal" className={classes.textField}>
            <InputLabel htmlFor="formatted-text-mask-input">
              Phone Number
            </InputLabel>
            <Input
              value={this.state.phoneNumber}
              onChange={this.handleChange("phoneNumber")}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
            />
          </FormControl>

          <TextField
            id="patient-age"
            label="Age"
            className={classes.textField}
            value={this.state.age}
            onChange={this.handleChange("numberformat")}
            margin="normal"
            InputProps={ageReadOnlyInputProps}
          />
        </form>
        <br />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={this.updatePatientDetails}
        >
          Update
        </Button>
      </Fragment>
    );
  }
}

PatientDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PatientDetails);
