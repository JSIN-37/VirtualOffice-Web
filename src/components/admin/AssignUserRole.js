import React from 'react';
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography, Container } from '@material-ui/core';
import { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
    },
    form: {
        display: "flex",
        width: "100%", // Fix IE 11 issue
        justifyContent: "flex-start",
    },
    namefield: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
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

function AssignUserRole() {
    const classes = useStyles();
    const [members, setMembers] = useState([]);

    //    const [addTeam, setAddTeam] = React.useState('');

    /*    const handleChange = (event) => {
          setAddTeam(event.target.value);
          setMember(event.target.value);
        };*/

    useEffect(() => {
        getMembers();
    }, [])

    const getMembers = () => {
        var axios = require('axios');
        axios.get(`${window.backendURL}/admin/get-member`) //get the team details
            .then(res => {
                const memberList = res.data;
                setMembers(memberList.name);
            })
    };

    let MemberList = members.map((Member, index) => {
        return (<Typography key={index}>
            {Member}
        </Typography>)
    })

    /*  const setUpOrgAttempt = async (fname, lname, orgname, country) => { //add choose file and check box to post
        var axios = require("axios");
        axios
          .post(`${window.backendURL}/setup-organization`, {
            fname: fname,
            lname: lname,
            orgname:orgname,
            country: country,
      })
    };*/

    return (
        <>
            <Container className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <form className={classes.form}>
                            <Grid item xs={2} md={2}>
                                <TextField
                                    className={classes.namefield}
                                    label="First Name"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    required
                                    id="firstName"
                                />
                            </Grid >
                            <Grid item xs={4} md={4}>
                                <TextField
                                    className={classes.namefield}
                                    style={{ marginLeft: "20px" }}
                                    label="Last Name"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    required
                                    id="lastName"
                                />
                            </Grid >
                        </form>
                        <TextField
                            className={classes.field}
                            label="Email"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="email"
                        />
                        <TextField
                            className={classes.field}
                            label="Contact Number"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="contactNumber"
                        />
                        <TextField
                            className={classes.field}
                            label="Designation"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="designation"
                        />
                        <TextField
                            className={classes.field}
                            label="Division"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            required
                            id="division"
                        />
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked
                                    color="primary"
                                    inputProps={{ "aria-label": "secondary checkbox" }}
                                />}
                            label="Active Role"
                        />
                        <br />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Save Details
                        </Button>
                        <Button
                            type="reset"
                            color="primary"
                            variant="outlined"
                            className={classes.button}>
                            Cancel
                        </Button>
                    </Grid >
                    <Grid item xs={12} md={6}>
                        <form className={classes.form}>
                            <Grid item xs={12} md={6}>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ "aria-label": "secondary checkbox" }}
                                            />}
                                        label="Director"
                                    />
                                </Grid >
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ "aria-label": "secondary checkbox" }}
                                            />}
                                        label="Director"
                                    />
                                </Grid >
                            </Grid >
                        </form>
                    </Grid >
                </Grid >
            </Container >


            {/*<Grid>
                <Grid container item lg={12} spacing={6}>
                    <Grid item lg={6}>
                         <Typography>
                First Name
            </Typography>
            <TextField id="filled-basic" label="Eg: A R "  />
            <br/>
            <br/>
            <Typography>
                Last Name
            </Typography>
            <TextField id="filled-basic" label="Perera" />
            <br/>
            <br/>
            <Typography>
                Email Address
            </Typography>
            <TextField id="filled-basic" label="Eg:aarperera@gmail.com" /> 

                        <Typography>
                            Add a Member
                            {MemberList}
                        </Typography>
                        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Add a Member</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={addTeam}
              onChange={handleChange}
            >
              <MenuItem >A R Perera</MenuItem>
              <MenuItem >U J Uyanhewa </MenuItem>
              <MenuItem >J H S Abeytunger</MenuItem>
            </Select>
          </FormControl>  
                       <br />
                        <br />
                        <Typography>
                            Designation
                        </Typography>
                        <TextField id="filled-basic" label="Director" />
                        <br />
                        <br />

                        <Button variant="contained"
                            color="primary"
                        >
                            Save Member
                        </Button>

                        <Button variant="outlined"
                            color="primary"
                        >
                            Cancel
                        </Button>


                    </Grid>

                    <Grid item lg={6}>
                        <Typography>
                            Role
                        </Typography>
                        <Typography>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ "aria-label": "secondary checkbox" }}
                            />
                            Director
                        </Typography>
                        <br />
                        <Typography>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ "aria-label": "secondary checkbox" }}
                            />
                            HOD - Head of Division
                        </Typography>
                        <br />
                        <Typography>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ "aria-label": "secondary checkbox" }}
                            />
                            SR - Senior Registrar
                        </Typography>
                        <br />
                        <Typography>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ "aria-label": "secondary checkbox" }}
                            />
                            SAR - Senior Ast. Registrar
                        </Typography>
                        <br />
                    </Grid>
                </Grid>
                <br />

                <Grid
                >
                     <Button variant="contained" 
            color="primary" 
            className="button-add-user" 
            component={Link}
            to="/add-user-role"
      >
    + Add New Role
    </Button> 
                </Grid>
            </Grid>*/}
        </>
    );
}

export default AssignUserRole;