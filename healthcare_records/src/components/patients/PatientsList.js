import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import axios from "axios";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

export class PatientsList extends Component {
  constructor() {
    super();
    this.state = {
      patients: []
    };
  }

  componentDidMount() {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/patients`, axiosConfig)
      .then(response => {
        this.setState({ patients: response.data });
      })
      .catch(err => {
        console.log(`Error fetching patients data: ${err}`);
      });
  }

  onPatientClick = patient => e => {
    this.props.history.push({
      pathname: "/patientdetails",
      state: { patient: patient, readOnly: true }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <Fragment>
          {this.state.patients.map(patient => (
            <ListItem
              button
              divider
              alignItems="flex-start"
              onClick={this.onPatientClick(patient)}
            >
              <ListItemAvatar>
                <Avatar alt={patient.id} src={patient.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={patient.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {patient.mailingAddress} - {patient.age}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </Fragment>
      </List>
    );
  }
}

PatientsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect()(withStyles(styles)(PatientsList)));
