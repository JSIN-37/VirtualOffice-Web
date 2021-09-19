import React from 'react'
import { useState } from "react";
import Grid from '@material-ui/core/Grid'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import TextField from '@material-ui/core/TextField'
import usePasswordValidation from "../../hooks/usePasswordValidation";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//import axios from "axios";

import { AppData } from "../../App";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: "100%",
        },
        apptitle: {
            padding: 20,//16px
            fontWeight: 500,
            textDecoration: 'none'
        },
        appbaricon: {
            marginLeft: "240px"
        },
        appbar: {
            background: '#E3E6F5',
            height: 58,
        },
        header: {
            margin: "10px 0 10px",
            textTransform: "uppercase",
        },
        field: {
            width: 360,
            margin: 5,
            marginLeft: 0,
        },
        success: {
            color: "#23AF5E"
        },
        icon: {
            verticalAlign: "middle",
            marginRight: 5,
            marginBottom: 3,
        },
        button: {
            marginTop: 20,
            marginRight: 20
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    }
})

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: "#F6F7FB",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        padding: 10,
    },
    arrow: {
        color: "#F6F7FB",
    },
}))(Tooltip);


export default function Profile() {
    const classes = useStyles();
    const [appD] = React.useContext(AppData);
    const [currentPassword, setCurrentPassword] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState(false);
    const [password, setPassword] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });

    // const getData = () => {
    //     axios.get('')
    //         .then(response => {
    //             console.log(response);
    //             const name = response.data.name;
    //             const phone = response.data.phone;
    //             const email = response.data.email;
    //             setEmail(email)
    //         });
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPassword === "") {
            setCurrentPasswordError(true);
        }
        if (currentPassword) {
            const config = {
                headers: { Authorization: `Bearer ${appD.token}` },
            };
            var axios = require("axios");
            axios
                .post(
                    `${window.backendURL}/interim/teams`,
                    {
                        currentPassword: currentPassword,
                    },
                    config
                )
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                });
        }
    };

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


    return (
        <Container className={classes.root}>
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <PersonRoundedIcon color="primary" className={classes.appbaricon} fontSize="medium" />
                    <Typography variant="h6" className={classes.apptitle} color="primary">
                        Profile
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container>
                <Grid item xs={8} className={classes.formContainer}>
                    <form noValidate autoComplete="off" >
                        <div className={classes.root}>
                            <Typography variant="h6" className={classes.header}>Change Password</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="body1" className={classes.label}>Current Password: </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField className={classes.field}
                                        variant="outlined"
                                        margin="normal"
                                        color="primary"
                                        fullWidth
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        error={currentPasswordError}
                                        name="currentPassword"
                                        label="Current Password"
                                        type="password"
                                        id="currentPassword"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body1" className={classes.label}>New Password: </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <LightTooltip
                                        placement="right-start"
                                        title={
                                            <Grid item xs={12} style={{ marginLeft: 3, }}>
                                                {validLength ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has valid length</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password should contain atleast 8 charaters</Typography>}
                                                {upperCase ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has uppercase letter</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one uppercase letter</Typography>}
                                                {lowerCase ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has lowercase letter</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one lowercase letter</Typography>}
                                                {hasNumber ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has number</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one number</Typography>}
                                                {specialChar ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Has special character</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Password must contain at least one special character</Typography>}
                                                {match ? <Typography variant="body2" className={classes.success}><DoneRoundedIcon fontSize="small" className={classes.icon} />Passwords Match!</Typography> : <Typography variant="body2"><ErrorRoundedIcon fontSize="small" className={classes.icon} />Passwords do not match</Typography>}
                                            </Grid>}
                                        arrow>
                                        <TextField className={classes.field}
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
                                                            onMouseDown={handleMouseDownPassword}>
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </LightTooltip>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body1" className={classes.label}>Confirm New Password: </Typography>
                                </Grid >
                                <Grid item xs={8}>
                                    <TextField className={classes.field}
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
                                </Grid>
                            </Grid >
                        </div >
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={(e) => handleSubmit(e)}>
                            Save Changes
                        </Button>
                        <Button
                            type="reset"
                            color="primary"
                            variant="outlined"
                            className={classes.button}>
                            Cancel
                        </Button>
                    </form >
                </Grid>
            </Grid>
        </Container >
    );
}