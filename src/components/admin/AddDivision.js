import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import {
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
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
    button: {
        margin: "15px 15px 0 0",
    },
}));

export default function AddDivision({ appD }) {
    const classes = useStyles();

    const [division, setDivision] = useState("");
    const [description, setDescription] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [HODs, setHODs] = useState([]);
    const [HOD, setHOD] = useState("");
    const [permission1, setPermission1] = useState(false);
    const [permission2, setPermission2] = useState(false);
    const [permission3, setPermission3] = useState(false);
    const [permission4, setPermission4] = useState(false);

    useEffect(() => {
        //  getHODs();
    }, []);

    //  const getHODs = () => {
    //    var axios = require("axios");
    //    axios
    //     .get(`${window.backendURL}/admin/get-divisions`) //get the id and name of the employees who has the user role 'HOD' (head of division)
    //      .then((res) => {
    //        const hods = res.data;
    //        setHODs(hods);
    //      });
    //  };

    const addDivision = (appD) => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        var axios = require("axios");
        axios
            .post(
                `${window.backendURL}/admin/division`,
                {
                    //save changes for the selected division
                    divisionName: division,
                    hodID: HOD,
                    description: description,
                    p1: permission1, //true/false
                    p2: permission2, //true/false
                    p3: permission3, //true/false
                    p4: permission4, //true/false
                },
                config
            )
            .then((res) => {
                let data = res.data;
                console.log(data);
            });
    };

    const handleDivNameChange = (event) => {
        setDivision(event.target.value);
    };

    const handleHODChange = (event) => {
        setHOD(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleP1 = (event) => {
        setPermission1(event.target.checked);
    };
    const handleP2 = (event) => {
        setPermission2(event.target.checked);
    };
    const handleP3 = (event) => {
        setPermission3(event.target.checked);
    };
    const handleP4 = (event) => {
        setPermission4(event.target.checked);
    };

    let HODList = HODs.map((HOD, index) => {
        return (
            <MenuItem key={index} value={HOD.id}>
                {HOD.name}
            </MenuItem>
        );
    });

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form className={classes.form}>
                        <TextField
                            className={classes.field}
                            id="divisionName"
                            label="Division Name"
                            placeholder="Eg: External Degrees Centre"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleDivNameChange} />

                        <FormControl variant="outlined" className={classes.field}>
                            <InputLabel id="HOD-select-label">Select the Head of Division</InputLabel>
                            <Select
                                labelId="HOD-select-label"
                                id="HOD-select"
                                value={HOD}
                                onChange={handleHODChange}>
                                {HODList}
                                <MenuItem value={10}>A. T. Pathirana</MenuItem>
                                <MenuItem value={20}>D. L. Silva</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            className={classes.field}
                            id="description"
                            label="Description"
                            multiline
                            rows={3}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleDescriptionChange}
                        />
                        <br />
                    </form>
                    <form>
                        <Typography variant="body1" style={{ fontWeight: "490" }}>Permissions</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    inputProps={{ "aria-label": "secondary checkbox" }}
                                    onChange={handleP1}
                                />}
                            label="Allow Head of Division to add employees"
                        />
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    inputProps={{ "aria-label": "secondary checkbox" }}
                                    onChange={handleP2}
                                />}
                            label="Allow employees to assign tasks"
                        />
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    inputProps={{ "aria-label": "secondary checkbox" }}
                                    onChange={handleP3}
                                />}
                            label="Allow employees to create teams"
                        />
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    inputProps={{ "aria-label": "secondary checkbox" }}
                                    onChange={handleP4}
                                />}
                            label="Allow Head of Division to review tasks"
                        />
                    </form>
                    <Button
                        onClick={() => addDivision(appD)}
                        color="primary"
                        variant="contained"
                        className={classes.button}>
                        Add Division
                    </Button>
                    <Button color="primary" variant="outlined" className={classes.button}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
