import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography, Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
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
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function EditDivision({ appD }) {
    const classes = useStyles();

    const [divisions, setDivisions] = useState([]);
    const [division, setDivision] = useState("");
    const [description, setDescription] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [HODs, setHODs] = useState([]);
    const [HOD, setHOD] = useState("");
    const [permission1, setPermission1] = useState(true);
    const [permission2, setPermission2] = useState(true);
    const [permission3, setPermission3] = useState(true);
    const [permission4, setPermission4] = useState(true);

    useEffect(() => {
        getDivisions(appD);
        // getHODs();
    }, [appD]);

    const getDivisions = (appD) => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        var axios = require("axios");
        axios
            .get(`${window.backendURL}/admin/divisions`, config) //get the id and names of all the divisions
            .then((res) => {
                const divisionSet = res.data;
                setDivisions(divisionSet);
            });
    };

    // const getHODs = () => {
    //   var axios = require('axios');
    //   axios.get(`${window.backendURL}/admin/get-HODs`) //get the id and name of the employees who has the user role 'HOD' (head of division)
    //     .then(res => {
    //       const hods = res.data;
    //       setHODs(hods);
    //   })
    // };

    const saveChanges = () => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        var axios = require("axios");
        axios
            .patch(
                `${window.backendURL}/admin/division/${division}`,
                {
                    //save changes for the selected division
                    divisionId: division,
                    hodId: HOD,
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

    const deleteDivision = (appD) => {
        const config = {
            headers: { Authorization: `Bearer ${appD.token}` },
        };
        var axios = require("axios");
        axios
            .delete(`${window.backendURL}/admin/division/${division}`, config) //delete the division record in the DB under the given division Id
            .then((res) => {
                console.log(`${window.backendURL}/admin/division/${division}`);
                console.log(res);
                console.log(res.data);
            });
    };

    const handleDivisionChange = (event) => {
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

    let divisionList = divisions.map((division, index) => {
        return (
            <MenuItem key={"div" + index} value={division.id}>
                {division.name}
            </MenuItem>
        );
    });

    let HODList = HODs.map((HOD, index) => {
        return (
            <MenuItem key={"hod" + index} value={HOD.id}>
                {HOD.name}
            </MenuItem>
        );
    });

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        className={classes.field}
                        select
                        labelId="division-select-label"
                        label="Select Division"
                        id="division-select"
                        value={division}
                        onChange={handleDivisionChange}
                        variant="outlined"
                    >
                        {divisionList}
                    </TextField>
                    <TextField
                        className={classes.field}
                        select
                        labelId="HOD-select-label"
                        label="Select the Head of Division"
                        id="HOD-select"
                        value={HOD}
                        onChange={handleHODChange}
                        variant="outlined"
                    >
                        {HODList}
                    </TextField>
                    <form>
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
                    </form>
                    <br />
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
                        onClick={saveChanges}
                        color="primary"
                        variant="contained"
                        className={classes.button}>
                        Save Changes
                    </Button>

                    <Button
                        color="primary"
                        variant="outlined"
                        className={classes.button}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            deleteDivision(appD);
                        }}
                        color="secondary"
                        variant="outlined"
                        className={classes.button}>
                        Delete Division
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
