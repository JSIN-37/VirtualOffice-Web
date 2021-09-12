import React from 'react';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useState } from "react";
import TeamCard from './TeamCard.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';


function ViewTeam() {

  // const classes = useStyles();
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


  
  return (
    <Grid>
        <Grid container item lg={12} spacing={6}>
        <Grid item lg={6}>
            <Typography>
                Team Name
                <TextField id="filled-basic" label="Eg: Design Team" />
            </Typography>
            <br/>
            <br/>
            <Typography>
                Team Leader
            </Typography>
            <TextField id="filled-basic" label="Eg: A T Perera"  />
            <br/>
            <br/>

            <Typography>
                Description
                <TextField id="filled-basic" label="Desciption"  />
            </Typography>
            
            <br/>
            <br/>

            <Typography>
                Project Tasks
                <br/>
                <AddIcon/>
            </Typography>
            
            
            <Button variant="contained" 
                color="primary" 
            >
               Save Changes
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
        
        <Typography>
        <AddCircleIcon/>
            Add Employee
        </Typography>
        <br/>
        <Typography variant="body2" >
        <Avatar alt="Remy Sharp"  fontsize="small"/>
        A.T. Pathirana</Typography>
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

export default ViewTeam;