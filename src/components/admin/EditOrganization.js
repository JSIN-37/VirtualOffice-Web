import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Typography, Container } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import image from "../../resources/orgImage.jpg"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "90vh",
        display: "flex",
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
    field: {
        width: 370,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
    },
    bigAvatar: {
        width: 70,
        height: 70,
        margin: "15px",
    },
    agreement: {
        fontSize: "12px"
    },
    button: {
        margin: "15px 15px 0 0",
    },
}));

export default function EditOrganization({ appD }) {
    const classes = useStyles();
    const [orgName, setOrgName] = useState("");
    const [sysAdmin, setSysAdmin] = useState("");
    const [sysAdminEmail, setSysAdminEmail] = useState("");
    const [password, setPassword] = useState("123");
    const [orgNameError, setOrgNameError] = useState(false);
    const [sysAdminError, setSysAdminError] = useState(false);
    const [sysAdminEmailError, setSysAdminEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrgNameError(false);
        setSysAdminError(false);
        setSysAdminEmailError(false);
        setPasswordError(false);

        if (orgName === "") {
            setOrgNameError(true);
        }
        if (sysAdmin === "") {
            setSysAdminError(true);
        }
        if (sysAdminEmail === "") {
            setSysAdminEmailError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }
        if (orgName && sysAdmin && sysAdminEmail && password) {
            const config = {
                headers: { Authorization: `Bearer ${appD.token}` },
            };
            var axios = require("axios");
            axios
                .post(`${window.backendURL}/setup-organization`,
                    {
                        orgName: orgName,
                        sysAdmin: sysAdmin,
                        sysAdminEmail: sysAdminEmail,
                        password: password,
                    },
                    config
                )
                .then((res) => {
                    let data = res.data;
                    console.log(data);
                });
        }
    };

    return (
        <Container className={classes.root}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <TextField
                            className={classes.field}
                            onChange={(e) => setOrgName(e.target.value)}
                            label="Organization Name"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="orgName"
                            error={orgNameError}
                        />
                        <Grid container spacing={0}>
                            <Grid item md={2} style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                                <Avatar alt="Organization Logo" src={image} className={classes.bigAvatar} />
                            </Grid>
                            <Grid item md={7}>
                                <Button variant="outlined" size="small" style={{ margin: "30px" }}>Update Logo</Button>
                            </Grid>
                        </Grid>
                        <TextField
                            className={classes.field}
                            onChange={(e) => setSysAdmin(e.target.value)}
                            label="System Admin Name"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="sysAdmin"
                            error={sysAdminError}
                        />
                        <TextField
                            className={classes.field}
                            onChange={(e) => setSysAdminEmail(e.target.value)}
                            label="System Admin Email"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="sysAdminEmail"
                            error={sysAdminEmailError}
                        />
                        <TextField
                            className={classes.field}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            color="primary"
                            fullWidth
                            name="currentPassword"
                            label="Enter Password to Confirm"
                            type="password"
                            id="currentPassword"
                            autoComplete="current-password"
                            required
                            error={passwordError}
                        />
                        <FormControlLabel style={{ marginTop: "10px" }}
                            control={<Checkbox name="agreement" />}
                            label={<Typography className={classes.agreement}>As Admin you will be reponsible for the personal data of
                                people in your organization as well as the data
                                managemnet requests they submit to you.</Typography>}
                        />
                        <Link to="/"><Typography className={classes.agreement} >Learn more.</Typography></Link>

                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Submit
                        </Button>
                        <Button
                            type="reset"
                            color="primary"
                            variant="outlined"
                            className={classes.button}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container >
    );
}