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
import { Link } from "react-router-dom";
import logo from "../../resources/logo_big.png";
import Alerts from "../Alerts";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AppData } from "../../App";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    Height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 0,
  },
  card: {
    borderRadius: 25,
    textAlign: "center",
    marginTop: 70,
    padding: 25,
    boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
    overflow: "visible",
  },
  media: {
    margin: "10px auto 0",
    width: "24%",
    height: 50,
    position: "relative",
    zIndex: 1,
  },
  textField: {
    width: 360,
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
    marginTop: 0,
  },
  snackbar: {
    position: "absolute",
    top: 0,
  },
});

export default function LogIn() {
  const classes = useStyles();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [loginError, setLoginError] = useState(false);

  const [appD, setAppD] = React.useContext(AppData);

  const loginAttempt = async (email, password) => {
    axios
      .post(`${window.backendURL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        let data = res.data;
        // Token should be avail. if successful
        if (data.token) {
          console.log("RESPONSE FROM LOGIN", data)
          console.log("TOKEN", data.token)
          let tmpCreds = {
            token: `${data.token}`,
            isAdmin: false,
          };
          localStorage.setItem("credentials", JSON.stringify(tmpCreds));
          // Get all keys and store them in appD
          const config = {
            headers: { Authorization: `Bearer ${data.token}` },
          };
          axios
            .get(`${window.backendURL}/user/all-keys`, config)
            .then((res) => {
              let allKeys = res.data;
              localStorage.setItem("keys", JSON.stringify(allKeys));
              setAppD({
                ...appD,
                token: data.token,
                isAdmin: false,
                keys: allKeys,
                roleName: data.userData.roleName,
              }); // Need to set it this way to ask React to re-render
            });
        } else {
          setLoginError(true);
        }
      })
      .catch((err) => {
        let res = err.response;
        // let data = res.data;
        if (res.status === 401) {
          setLoginError(true);
        }
      });
  };

  const handleClose = () => {
    setLoginError(false);
  };

  function LoginError() {
    if (loginError) {
      return (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={LoginError}
          autoHideDuration={5000}
          onClose={handleClose}
          className={classes.snackbar}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <Alerts
            type={"error"}
            title={"Login Failed"}
            message={"Incorrect username/ password. Please try again"}
          />
        </Snackbar>
      );
    }
    return "";
  }
  return (
    <Router basename="/employee">
      <Route exact path="/">
        <Grid
          container
          className={classes.root}
          spacing={0}
          alignItems="center"
        >
          <LoginError />
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
                    className={classes.textField}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    className={classes.textField}
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
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                          align="left"
                          variant="body2"
                        />
                      </Grid>
                      <Grid item xs={6} className={classes.gridForgot}>
                        <Link
                          variant="body2"
                          align="right"
                          style={{ textDecoration: "none" }}
                          to="/forgot-password"
                        >
                          <Typography variant="body2">
                            Forgot Password
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth={false}
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
                <Typography align="center">Don't have an account?</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Request Access
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Route>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
    </Router>
  );
}

//https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function
