import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import logo from "../../resources/logo_big.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SetUpOrganization from "./SetUpOrganization"

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "95vh",
        display: "flex",
    },
    card: {
        borderRadius: 20,
        textAlign: "center",
        padding: "10px 30px",
        boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        maxWidth: "440px"
    },
    media: {
        margin: "20px auto",
        width: "24%",
        height: 50,
        position: "relative",
        zIndex: 1,
    },
    form: {
        display: "flex",
        justifyContent: "center",
    },
    namefield: {
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontWeight: 400,
        fontSize: 24,
        margin: "10px auto",
    },
    textField: {
        width: 370,
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        margin: "20px 10px",
    },
    agreement: {
        fontSize: "12px"
    },
});

function SetUpOrganizationDetails() {

    const classes = useStyles();
    const [fname, setFname] = useState(``);
    const [lname, setLname] = useState(``);
    const [orgname, setOrgname] = useState(``);
    const [location, setLocation] = useState(``);

    const setUpOrgAttempt = async (fname, lname, orgname, location) => { //add choose file and check box to post
        var axios = require("axios");
        axios
            .post(`${window.backendURL}/setup-organization`, {
                fname: fname,
                lname: lname,
                orgname: orgname,
                location: location,
            })
    };

    return (
        <Router basename="/setup">
            <Route exact path="/details">
                <Grid className={classes.root} container spacing={0} align="center" justifyContent="center" direction="column">
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia className={classes.media} image={logo} title="logo" />
                            <Typography variant="h6" align="left" style={{ fontWeight: "400", paddingLeft: "10px" }}>
                                A few more details
                            </Typography>
                            <form className={classes.form}>
                                <TextField
                                    className={classes.namefield}
                                    style={{ marginRight: "20px", width: "110px" }}
                                    label="First Name"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    id="firstName"
                                    onChange={(e) => setFname(e.target.value)}
                                />

                                <TextField
                                    className={classes.namefield}
                                    style={{ width: "240px" }}
                                    label="Last Name"
                                    variant="outlined"
                                    color="primary"
                                    required
                                    id="lastName"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </form>
                            <Grid container spacing={0} style={{ marginTop: 10, marginBottom: 10, }}>
                                <Grid item md={2} className={classes.container} >
                                    <Typography variant="body1" align="center" style={{ fontWeight: "400" }}>
                                        Logo
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Button variant="outlined" size="small" >Choose File</Button>
                                </Grid>
                            </Grid>
                            <TextField
                                className={classes.textField}
                                label="Organization Name"
                                variant="outlined"
                                color="primary"
                                required
                                id="organization"
                                onChange={(e) => setOrgname(e.target.value)}
                            />
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                color="primary"
                                required
                                id="Location"
                                label="Location"
                                placeholder="Location"
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <FormControlLabel required style={{ marginTop: "10px", marginLeft: "5px" }}
                                control={<Checkbox color="primary" name="agreement" />}
                                label={<Typography align="left" className={classes.agreement}>As Admin you will be reponsible for the personal data of
                                    people in your organization as well as the data
                                    managemnet requests they submit to you. <Link to="/">Learn more.</Link></Typography>}
                            />


                            <CardActions>
                                <Button disableElevation variant="contained" color="primary" className={classes.button} component={RouterLink} to="/details">
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    className={classes.button}
                                    onClick={(e) => {
                                        // e.preventDefault();
                                        setUpOrgAttempt(fname, lname, orgname, location);
                                    }}>
                                    Set up Organization
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}>

                    <Grid item xs={6}>
                        <Card
                            style={{
                                width: '40rem',
                                borderRadius: '2rem',
                                height: '40rem',
                                justifyContent: 'center',
                                alignContent: 'center',
                                padding: '30px',
                                border: '1',
                            }}>

                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ minHeight: '20vh' }} >

                                <Grid item xs={3}>
                                    {/* <img src={OfficeImage} className="VO-logo" alt="logo" /> */}
                                </Grid>
                            </Grid>

                            <br />

                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        className="Text-field-org"
                                        id="filled-required"
                                        label="First Name"
                                        placeholder="D.S."
                                        style={{ margin: 2 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        onChange={(e) => setFname(e.target.value)} />

                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Last Name"
                                        placeholder="Perera"
                                        style={{ margin: 2 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        onChange={(e) => setLname(e.target.value)} />
                                </Grid>
                            </Grid>
                            <br />
                            <TextField
                                className="Text-field-org"
                                id="filled-full-width"
                                label="Organization"
                                style={{ margin: 2 }}
                                placeholder="Senior Assistant Registrar"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={(e) => setOrgname(e.target.value)}
                            />
                            <br />
                            <br />
                            <form style={{ margin: 2 }}>
                                <Typography>
                                    Logo
                                </Typography>


                                <Button
                                    size="small"
                                    variant="contained"
                                    style={{ margin: 2 }}
                                >
                                    Choose File
                                </Button>
                            </form>

                            <br />
                            <TextField
                                className="Text-field"
                                style={{ margin: 4 }}
                                id="filled-required"
                                label="Country/Region"
                                placeholder="Country/Region"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => setLocation(e.target.value)}
                            />

                            <br />
                            <br />
                            <Typography style={{ margin: 2 }}>
                                As Admin you will be reponsible for the personal data of
                                people in your organization as well as the data
                                managemnet requests they submit to you. <br />Learn more.
                            </Typography>
                            {/*Hyperlink the LEARN MORE AND TERMS AND SERVICES */}
                            <br />
                            <Checkbox
                                defaultChecked
                                style={{ margin: 2 }}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <small >
                                I agree to the terms and services
                            </small>

                            <Grid container spacing={0} className={classes.container} >
                                <Button disableElevation variant="outlined" color="primary" className={classes.button} component={RouterLink} to="/">
                                    Next
                                </Button>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    component={Link}
                                    to="/organization"
                                    color="primary"
                                    style={{ margin: 4 }}
                                    onClick={(e) => {
                                        // e.preventDefault();
                                        setUpOrgAttempt(fname, lname, orgname, location);
                                    }}
                                >
                                    Set up Organization
                                </Button>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Route>
            <Route exact path="/">
                <SetUpOrganization />
            </Route>
        </Router >

    );
}

export default SetUpOrganizationDetails;
