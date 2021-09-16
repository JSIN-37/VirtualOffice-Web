import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { useState } from "react";
import usePasswordValidation from "../../hooks/usePasswordValidation";
import IconButton from '@material-ui/core/IconButton';
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from "../../resources/logo_big.png";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "90vh",
        display: "flex",
    },
    card: {
        borderRadius: 20,
        textAlign: "center",
        padding: "15px 40px 25px",
        boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
        overflow: "hidden",
        maxWidth: "400px"
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
    },
    success: {
        color: "#23AF5E"
    },
    listItem: {
        margin: 0,
        padding: 0,
    },
    text: {
        color: "#757575"
    },
    icon: {
        verticalAlign: "middle",
        marginRight: 5,
        marginBottom: 3,
    },
    button: {
        margin: "10px 0",
    },
});

export default function ResetPassword() {
    const classes = useStyles();
    const [password, setPassword] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });

    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
    ] = usePasswordValidation({
        newPassword: password.newPassword,
        confirmNewPassword: password.confirmNewPassword,
    });

    const setnew = (event) => {
        setPassword({ ...password, newPassword: event.target.value });
    };
    const setconfirmNew = (event) => {
        setPassword({ ...password, confirmNewPassword: event.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                        Reset Password
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Your new password must be different from previously used passwords
                    </Typography>
                    <form noValidate autoComplete="off" >
                        <List>
                            <ListItem className={classes.listItem} >
                                <ListItemText className={classes.listItem} primary={validLength ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has valid length</Typography> : <Typography variant="body2" className={classes.text}><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password should contain atleast 8 charaters</Typography>} />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.listItem} primary={upperCase ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has uppercase letter</Typography> : <Typography variant="body2" className={classes.text}><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one uppercase letter</Typography>} />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.listItem} primary={lowerCase ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has lowercase letter</Typography> : <Typography variant="body2" className={classes.text}><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one lowercase letter</Typography>} />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.listItem} primary={hasNumber ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has number</Typography> : <Typography variant="body2" className={classes.text}><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one number</Typography>} />
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.listItem} primary={specialChar ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has special character</Typography> : <Typography variant="body2" className={classes.text}><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one special character</Typography>} />
                            </ListItem>
                        </List>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="newPassword"
                            label="New Password"
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            autoComplete="new-password"
                            onChange={setnew}
                            InputProps={{ // <-- This is where the toggle button is added.
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="confirmPassword"
                            label="Confirm New Password"
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            autoComplete="confirm-password"
                            onChange={setconfirmNew}
                        />
                        {match ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Passwords Match!</Typography> : <Typography variant="body2" color="error"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Passwords do not match</Typography>}
                        <Button

                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={handleClickOpen}>
                            Reset Password
                        </Button>
                    </form >
                </Card >
            </Grid >
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Password Reset successful!</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Redirecting...
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </Grid >
    )
}
