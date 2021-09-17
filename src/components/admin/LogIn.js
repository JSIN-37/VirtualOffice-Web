import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import logo from "../../resources/logo_big.png";
import Alerts from "../Alerts";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
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
        maxWidth: "400px"
    },
    media: {
        margin: "10px auto 0",
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
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%", // Fix IE 11 issue
    },
    button: {
        margin: 10,
    },
    action: {
        display: "flex",
        justifyContent: "space-around",
    },
    gridRemember: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    gridForgot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    submit: {
        margin: "10px 0px",
    },
    grid: {
        flexGrow: 1,
        marginTop: 0
    },
    snackbar: {
        position: "absolute",
        top: 0,
    }
}));

export default function LogIn({ appD, onLogin }) {
    const classes = useStyles();
    const [password, setPassword] = useState(``);
    const [loginError, setLoginError] = useState(false);

    const loginAttempt = async (password) => {
        var axios = require("axios");
        axios
            .post(`${window.backendURL}/admin/login`, {
                password: password,
            })
            .then((res) => {
                let data = res.data;
                // Token should be avail. if successful
                if (data.token) {
                    // Make a copy of appD
                    let tmpAppD = appD;
                    tmpAppD.token = data.token;
                    tmpAppD.isAdmin = true;
                    let tmpCreds = {
                        token: `${data.token}`,
                        isAdmin: tmpAppD.isAdmin,
                    };
                    localStorage.setItem("credentials", JSON.stringify(tmpCreds));
                    // Flush appD
                    onLogin({ ...tmpAppD }); // Need to set it this way to ask React to re-render
                } else {
                    setLoginError(true);
                }
            })
            .catch((err) => {
                let res = err.response;
                // let data = res.data;
                if (res && res.status === 401) {
                    setLoginError(true);
                }
            });
    };

    const handleClose = () => {
        setLoginError(false);
    };

    function YoItsLoginError() {
        if (loginError) {
            return (
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={loginError}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    className={classes.snackbar}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }>
                    <Alerts
                        type={"error"}
                        title={"Login Failed"}
                        message={"Incorrect password. Please try again"}
                    />
                </Snackbar>
            );
        }
        return "";
    }
    return (
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
                    <YoItsLoginError />
                    <CardMedia className={classes.media} image={logo} title="logo" />
                    <Typography variant="h5" className={classes.title} gutterBottom>
                        Welcome back, Admin
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Box display="none">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Box>
                        <TextField
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
                            <Grid container>
                                <Grid item xs={6} className={classes.gridRemember}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                        align="left"
                                        variant="body2"
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.gridForgot}>
                                    <Link variant="body2" align="right" style={{ textDecoration: "none" }}
                                        to="/forgot-password">
                                        <Typography variant="body2" >Forgot Password</Typography>
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
                                loginAttempt(password);
                            }}
                        >
                            Sign In
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}

//https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function
