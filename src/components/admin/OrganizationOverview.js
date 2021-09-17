import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography, Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import image from "../../resources/orgImage.jpg"
import admin from "../../resources/emp_user.svg";
//import { useState } from "react";

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
        hr: {
            textAlign: "left"
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
            <Typography variant="h6" className={classes.title} style={{ marginBottom: 10 }} >Organization Name </Typography>
            <Grid container spacing={0}>
                <Grid item md={1} style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                    <Avatar alt="Organization Logo" src={image} className={classes.bigAvatar} />
                </Grid>
                <Grid item md={7}>
                    <Typography variant="body1" style={{ margin: "20px" }}>University of Colombo School of Computing (UCSC)</Typography>
                    <Button variant="outlined" size="small" style={{ marginLeft: "20px" }}>Update Logo</Button>
                </Grid>
            </Grid>
            <Grid item md={6} lg={6}>
                <Typography variant="h6" style={{ fontWeight: 500 }} className={classes.title}>System Administrator: </Typography>
                <hr className={classes.hr} />
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
                <hr className={classes.hr} />
                <Typography variant="body1" className={classes.text}>pathirana@gmail.com </Typography>
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
