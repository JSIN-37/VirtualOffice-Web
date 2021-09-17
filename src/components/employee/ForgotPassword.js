import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import logo from "../../resources/logo_big.png";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "90vh",
        display: "flex",
    },
    card: {
        borderRadius: 20,
        textAlign: "center",
        padding: 25,
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

export default function ForgotPassword() {
    const classes = useStyles();
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
                    <CardMedia className={classes.media} image={logo} title="logo" />
                    <Typography variant="h5" className={classes.title} gutterBottom>
                        Forgot Password?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Enter the email address associated with your account.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        We will email a link to reset your password
                    </Typography>
                    <form noValidate autoComplete="off">
                        <TextField id="email" className={classes.textField} label="Email Address" />
                    </form>
                    <Button
                        className={classes.button}
                        variant="contained"
                        fullWidth={false}
                        color="primary"
                        onClick={(e) => { e.preventDefault(); }} >
                        Send
                    </Button>
                </Card>
            </Grid>
        </Grid>
    )
}
