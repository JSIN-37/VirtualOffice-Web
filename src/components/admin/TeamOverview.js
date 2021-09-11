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


function TeamOverview() {

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
        <Grid>
        {/* <h1>Teams details go here</h1> */}
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <TeamCard/>

            {/* <Paper className={classes.paper}>item</Paper> */}
          </Grid>

          <Grid item xs={4}>
          <TeamCard/>
          </Grid>

          <Grid item xs={4}>
          <TeamCard/>
          </Grid>


          <Grid item xs={4}>
          <TeamCard/>  
          </Grid>

        </Grid> 
      </Grid>
      <br/>
        
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
        justify="center"
        justifyContent="flex-start"
        style={{ minHeight: '10vh' }}
      >
     {/* <Button variant="contained" color="primary" className="button-user-role" component={Link}
              to="/add-new-team" onClick={handleClickOpen}>
      
      + Add new Team
      </Button>  */}


      <Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Team Members</DialogTitle>
        <DialogContent>

        <Grid container item lg={12} spacing={3}>
            <Grid item md={4}>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Search Employees"
            type="email"
            fullWidth
          />
            </Grid>

            <Grid item md={4} >
            <Button color="primary" variant="contained">
              Add
            </Button>
            </Grid>

            <Grid item md={4} >
              <Avatar alt="Remy Sharp"  fontsize="small"/>
              <Typography variant="body2" >A.T. Pathirana</Typography>
            </Grid>
  
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button  color="primary" variant="contained">
            Save
          </Button>
          <Button  color="primary" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>

      </Grid>     
   </Grid>
  );
}

export default TeamOverview;