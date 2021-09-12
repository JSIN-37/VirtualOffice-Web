import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function AddTeam() {

  const classes = useStyles();
  const [fname, setFname] = useState(``);
  const [lname, setLname] = useState(``);
  const [orgname, setOrgname] = useState(``);
  const [country, setCountry] = useState(``);

  const [value, setValue] = useState(0);
    const handleTabs = (e, val) => {
        setValue(val);
    };

    const [open, setOpen] = React.useState(false);

  const setUpOrgAttempt = async (fname, lname, orgname, country) => { //add choose file and check box to post
    var axios = require("axios");
    axios
      .post(`${window.backendURL}/setup-organization`, {
        fname: fname,
        lname: lname,
        orgname:orgname,
        country: country,
  })
};

// const classes = useStyles();
//   const [team, setTeam] = React.useState('');

const handleChange = (event) => {
  //  setTeam(event.target.value);
};

  return (
    <Grid>
      <Grid container item lg={12} spacing={6}>
        <Grid item lg={6}>
            <Typography>
                Team Name
            </Typography>
            <br/>
            <TextField id="filled-basic" label="Eg: Design Team" variant="filled" />
            <br/>
            <br/>
            <Typography>
                Description
            </Typography>
            <TextField id="filled-basic" label="Desciption" variant="filled" />
            <br/>
            <br/>
            <Typography>
                Team Leader
            </Typography>
            <TextField id="filled-basic" label="Eg: A T Perera" variant="filled" />
            <br/>
            <br/>
            
            <Button variant="contained" 
                color="primary" 
            >
                Add Team
            </Button>

            <Button variant="outlined" 
                color="primary" 
            >
                Cancel
            </Button>
            

        </Grid>

        <Grid item lg={6}>
        <Typography>
                Team Members
        </Typography>
        <br/>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Division</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={division}
          onChange={handleChange}
        >
          <MenuItem >Director's Office</MenuItem>
          <MenuItem >Management </MenuItem>
          <MenuItem >Examinatoin Division</MenuItem>
        </Select>
      </FormControl>
        </Grid>
      </Grid>
    <br/>
      
    <Grid
    >
    {/* <Button variant="contained" 
            color="primary" 
            className="button-add-user" 
            component={Link}
            to="/add-user-role"
      >
    + Add New Role
    </Button> */}
      </Grid>
      </Grid>
  );
}

export default AddTeam;