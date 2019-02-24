import React, {
    Component,
    Fragment
} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PatientsList from '../patients/PatientsList';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class SearchPatients extends Component {
    state = {
        patients: [
            {
                id: 1,
                name: "Anakin Skywalker",
                age: 38,
                emailAddress: "anakin@tempus.com",
                mailingAddress: "Somewhere in Galaxy",
                phoneNumber: "8009001000",
                avatar: "https://www.gannett-cdn.com/-mm-/54b8e3ee2352c148b2e654ed748d364d3e2e911a/c=365-0-3068-2032/local/-/media/2017/03/01/USATODAY/USATODAY/636239782868557609-MAG-HAYDEN-7730471.JPG?width=534&height=401&fit=crop"
            },
            {
                id: 2,
                name: "Master Yoda",
                age: 38,
                emailAddress: "yoda@tempus.com",
                mailingAddress: "Somewhere in Galaxy",
                phoneNumber: "8009001000",
                avatar: "https://pmcvariety.files.wordpress.com/2013/05/yoda.jpg?w=640&h=360&crop=1"
            }
        ]
    };

    render() {
        return (
            <Fragment>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h5" color="inherit">Doctor</Typography>
                        <div className={this.props.classes.grow} />
                        <div className={this.props.classes.search}>
                            <div className={this.props.classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Filter patients by name"
                                classes={{
                                    root: this.props.classes.inputRoot,
                                    input: this.props.classes.inputInput,
                                }}
                            />
                        </div>
                </Toolbar>
                </AppBar> 
                
                <PatientsList patients={this.state.patients} />

                {/* <Fragment>{this.state.patients.map((patient) => (
                            <Patient key={patient.id} patientDetails={patient} patientClicked={this.props.patientClicked} />))}
                </Fragment> */}
            </Fragment>
        )
    }
}

SearchPatients.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPatients);