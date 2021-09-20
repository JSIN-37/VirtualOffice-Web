import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import logo from "../../resources/logo_big.png";
import SetUpOrganizationDetails from "./SetUpOrganizationDetails"
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "90vh",
        display: "flex",
    },
    card: {
        borderRadius: 20,
        textAlign: "center",
        padding: 30,
        boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        maxWidth: "450px"
    },
    media: {
        margin: "20px auto",
        width: "24%",
        height: 50,
        position: "relative",
        zIndex: 1,
    },
    title: {
        fontWeight: 400,
        fontSize: 24,
        margin: "10px auto",
    },
    textField: {
        width: 360,
    },
    button: {
        margin: "20px 0 10px",
    },
});


export default function SetUpOrganization() {
    const classes = useStyles();
    return (
        <Router basename="/setup">
            <Route exact path="/">
                <Grid
                    className={classes.root}
                    container
                    spacing={0}
                    align="center"
                    justifyContent="center"
                    direction="column"
                >
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia className={classes.media} image={logo} title="logo" />
                            <Typography variant="h5" className={classes.title} gutterBottom>
                                Welcome to VirtualOffice
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Enter an email address. This will be used to set up your organization.
                            </Typography>

                            <form noValidate autoComplete="off">
                                <TextField id="email" className={classes.textField} label="Email Address" />
                            </form>
                            <Button disableElevation variant="contained" color="primary" className={classes.button} component={RouterLink} to="/details">
                                Next
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Route>
            <Route exact path="/details">
                <SetUpOrganizationDetails />
            </Route>
        </Router>
    )
}
