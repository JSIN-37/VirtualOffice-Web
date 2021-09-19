import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TeamCard from './TeamCard.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from "@material-ui/core";
import { useState, useEffect } from "react";


function TeamOverview() {

  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    getTeams();
  }, [])

  const getTeams = () => {
    // var axios = require('axios');
    // axios.get(`${window.backendURL}/admin/get-teams`) //get the ids of all the divisions
    //   .then(res => {
    //     const teamIds = res.data;
    //     setTeams(teamIds);
    // })
  };

  // const classes = useStyles();

    const [open, setOpen] = React.useState(false);

  let teamList=teams.map((team,index)=>{
    return (<Grid key={index} item xs={4}>
              <TeamCard teamId={team} />
            </Grid>)
  })
  
  return (
    <Grid>
        <Grid>
        {/* <h1>Teams details go here</h1> */}
        <Grid container spacing={4}>
        <Grid container item xs={12} spacing={3}>
        {teamList}
      </Grid>
    </Grid>
      <br/>
        
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems= "flex-start"
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