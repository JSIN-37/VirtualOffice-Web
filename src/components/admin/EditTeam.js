import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
//import OfficeImage from '../../../resources/logo_big.png';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root2: {
    width: "100%",
    boxSizing: "border-box"
},
formControl: {
  margin: theme.spacing(1),
  minWidth: 120,
},
}));



function EditTeam(teamMemberId) {

  const classes = useStyles();
  const [team, setTeam] = useState('');
  const [teamMember, setTeamMembers] = useState([]);
  const [addTeam, setAddTeam] = useState([]);
  const [teamMembers, setTeamMember] = useState([]);

    const [editTeam, setEditTeam] = React.useState('');
    const [teamLeader, setTeamLeader] = React.useState('');
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
      setAddTeam(event.target.value);
      setTeam(event.target.value);
    };

    const getTeamMembers = () => {
      var axios = require('axios');
      axios.get(`${window.backendURL}/admin/get-teamMember`, teamMemberId) //get the team details
        .then(res => {
          const teamMember = res.data;
          setTeamMembers(teamMember.name);
      })
    };

    const saveChanges = () =>{
      var axios = require('axios');
      axios.post(`${window.backendURL}/admin/get-team`, { //save changes for the selected team
          teamId: team,
          teamLeader: teamLeader,
          description: description
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
        });
    }

    const deleteTeam = () => {
      var axios = require('axios');
      axios.delete(`${window.backendURL}/admin/get-team/${team}`) //delete the team record in the DB under the given team Id 
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    const handleTeamNameChange = (event) => {
      setEditTeam(event.target.value);
    };

    const handleTeamLeaderChange = (event) => {
      setTeamLeader(event.target.value);
    };

    const handleDescriptionChange= (event) => {
      setDescription(event.target.value);
    };

    let MemeberList=teamMembers.map((teamMember,index)=>{
      return (<Typography key={index}>
          {teamMember}
      </Typography>)
    })

  return (
    <div className={classes.root2}>
        <Grid container mt="20px">
        <Grid item md={5} lg={5}>
            <Typography>
                Team Name
                <br/>
                <TextField id="filled-basic" label="Eg: Design Team" onChange={handleTeamNameChange}/>
            </Typography>
            <br/>
            <br/>
            <Typography>
                Team Leader
                <br/>
            </Typography>
            <TextField id="filled-basic" label="Eg: A T Perera" onChange={handleTeamLeaderChange} />
            <br/>
            <br/>

            <Typography>
                Description
                <br/>
                <TextField id="filled-basic" label="Desciption"  onChange={handleDescriptionChange}/>
            </Typography>
            
            <br/>
            <br/>

            <Typography>
                Project Tasks
                <br/>
                <AddIcon/>
                <br/>
                <AddIcon/>
                <br/>
                <AddIcon/>
                <br/>
            </Typography>
            
            <br/>
            <Button variant="contained" 
                color="primary" 
                onClick={saveChanges}
            >
               Save Changes
            </Button>

            <Button variant="outlined" 
                color="primary" 
                onClick={deleteTeam} 
            >
                Delete Team
            </Button>

            <Button variant="outlined" 
                color="primary" 
            >
                Cancel
            </Button>
            

        </Grid>

        <Grid item md={5} lg={5}>
        <Typography>
                Team Members
        </Typography>
        <br/>
        {MemeberList}
        {/* <FormControl className={classes.formControl}>
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
         */}
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
  </div>
  );
}

export default EditTeam;