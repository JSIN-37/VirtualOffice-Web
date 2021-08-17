import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import logo from "../resources/logo_big.png";

const useStyles = makeStyles((theme) => ({
    root: {
        Height: "100%",
        display: "flex",
        alignItems: "center"
    },
    card: {
        borderRadius: 25,
        maxWidth: 400,
        textAlign: "center",
        padding: "20px",
        margin: "80px",
        boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
        overflow: "visible",
    },
    media: {
        margin: "10px auto 0",
        width: "23%",
        height: 50,
        position: "relative",
        zIndex: 1,
    },
    textField: {
        width: 370
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(1),
    },
    action: {
        display: "flex",
        justifyContent: "space-around",
    },
    gridRemember: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    gridForgot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    submit: {
        margin: theme.spacing(2, 0),
    },
    grid: {
        flexGrow: 1,
    },
}));

export default function LogIn({ appD, onLogin }) {
    const classes = useStyles();
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const loginAttempt = async (email, password) => {
        var axios = require("axios");
        axios
            .post(`${window.backendURL}/user/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                let data = res.data;
                // Token should be avail. if successful
                if (data.token) {
                    // Make a copy of appD
                    let tmpAppD = appD;
                    tmpAppD.token = data.token;
                    if (data.isAdmin) {
                        tmpAppD.isAdmin = true;
                    }
                    let tmpCreds = {
                        token: `${data.token}`,
                        isAdmin: tmpAppD.isAdmin,
                    };
                    localStorage.setItem("credentials", JSON.stringify(tmpCreds));
                    // Flush appD
                    onLogin({ ...tmpAppD }); // Need to set it this way to ask React to re-render
                } else {
                    alert("Login failed!");
                }
            });
    };
    return (
        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            className={classes.root}
        >
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={logo} title="logo" />
                    <CardContent>
                        <Typography variant="h5" align="left">
                            Sign In
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                className={classes.textfield}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className={classes.grid}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                            align="left"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href="#" variant="body2" align="right">
                                            {"Forgot Password"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(e) => {
                                    e.preventDefault();
                                    loginAttempt(email, password);
                                }}
                            >
                                Sign In
                            </Button>
                        </form>
                        <div className={classes.list}>
                            <Typography align="center">Don't have an account?</Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.button}
                            >
                                Request Access
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
