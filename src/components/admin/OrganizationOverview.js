import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography, Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import image from "../../resources/orgImage.jpg"
import admin from "../../resources/emp_user.svg";
import Map from './Map';
import {
    withGoogleMap,
    withScriptjs
} from "react-google-maps";
//import { useState } from "react";
const MapWrapped = withScriptjs(withGoogleMap(Map));

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: "100%",
            boxSizing: "borderBox"
        },
        title: {
            marginTop: "15px",
        },
        text: {
            fontWeight: 400,
            padding: 2
        },
        bigAvatar: {
            width: 100,
            height: 100,
            margin: "0 20px 10px",
        },
        smallAvatar: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
        button: {
            marginTop: 20,
            marginRight: 20
        },
    }
})

function OrganizationOverview() {
    const classes = useStyles();

    /*  const [fname, setFname] = useState(``);
      const [lname, setLname] = useState(``);
      const [orgname, setOrgname] = useState(``);
      const [country, setCountry] = useState(``);*/

    /*  const setUpOrgAttempt = async (fname, lname, orgname, country) => { //add choose file and check box to post
        var axios = require("axios");
        axios
          .post(`${window.backendURL}/setup-organization`, {
            fname: fname,
            lname: lname,
            orgname:orgname,
            country: country,
      })
    };*/

    return (
        <Container className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography variant="h6" className={classes.title} style={{ marginBottom: 10 }} >Organization Name </Typography>
                    <Divider style={{ marginBottom: 10 }} />
                    <Grid container spacing={0}>
                        <Grid item md={2} style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                            <Avatar alt="Organization Logo" src={image} className={classes.bigAvatar} />
                        </Grid>
                        <Grid item md={8}>
                            <Typography variant="body1" style={{ margin: "20px" }}>University of Colombo School of Computing (UCSC)</Typography>
                            <Button variant="outlined" size="small" style={{ marginLeft: "20px" }}>Update Logo</Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{ fontWeight: 500 }} className={classes.title}>System Administrator: </Typography>
                        <Divider style={{ marginBottom: 10 }} />
                        <Grid container >
                            <Grid item xs={1} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                <Avatar alt="Remy Sharp" src={admin} className={classes.smallAvatar} />
                            </Grid>
                            <Grid item xs={11} style={{ marginTop: "15px" }}>
                                <Typography variant="body1" className={classes.text}>A.T. Pathirana</Typography>
                            </Grid>
                        </Grid>
                        <br />
                        <Typography variant="h6" style={{ fontWeight: 500 }} className={classes.title}>Administrator Email:</Typography>
                        <Divider style={{ marginBottom: 10 }} />
                        <Typography variant="body1" className={classes.text}>pathirana@gmail.com </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" className={classes.title} style={{ marginBottom: 10 }} >Location </Typography>
                    <div style={{ width: "100^", height: "100%" }}>
                        <MapWrapped
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDcWKc6xYTtYk5Cw2oiLFTdOWTSzJM8AGg`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </Grid>
            </Grid>
            <br />
            <Button color="primary" component={Link} to="/divisions">Division</Button>
            <br />
            <Button color="primary" component={Link} to="/teams">Teams</Button>
            <br />
            <Button color="primary" component={Link} to="/user-roles">User Roles</Button>
        </Container >
    );
}

export default OrganizationOverview;
