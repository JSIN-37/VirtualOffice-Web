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
    root2: {
      width: "100%",
      boxSizing: "border-box"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  }));

function AddTeam() {

  const classes = useStyles();
  const [team, setTeam] = useState('');
  const [description, setDescription] = useState('');
  const [teamLeader, setTeamLeader] = useState(``);
    

    const handleChange = (event) => {
      setTeam(event.target.value);
    };

    const addTeam = () =>{
      var axios = require('axios');
      axios.post(`${window.backendURL}/admin/get-addTeams`, { 
          teamId: team,
          teamName : team,
          description: description,
          teamLeader : teamLeader
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
        });
    }
    const handleTeamName = (event) => {
      setTeam(event.target.value);
    };

    const handleDescription = (event) => {
      setDescription(event.target.value);
    };

    const handleTeamLeader = (event) => {
      setTeamLeader(event.target.value);
    };


  return (
    <div className={classes.root2}>
      
    <Grid>
      <Grid container mt="20px">
        <Grid  item md={5} lg={5}>
            <Typography>
                Team Name
            </Typography>
            <br/>
            <TextField id="filled-basic" label="Eg: Design Team" variant="filled" onChange={handleTeamName}/>
            <br/>
            <br/>
            <Typography>
                Description
            </Typography>
            <TextField id="filled-basic" label="Desciption" variant="filled" onChange={handleDescription}/>
            <br/>
            <br/>
            <Typography>
                Team Leader
            </Typography>
            <TextField id="filled-basic" label="Eg: A T Perera" variant="filled" onChange={handleTeamLeader}/>
            <br/>
            <br/>
            
            <Button variant="contained" 
                color="primary" 
                onClick={addTeam}
            >
                Add Team
            </Button>

            <Button variant="outlined" 
                color="primary" 
            >
                Cancel
            </Button>
            

        </Grid>

        <Grid  item md={5} lg={5}>
        <Typography>
                Team Members
        </Typography>
        <br/>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Add a Member</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          onChange={handleChange}
        >
          <MenuItem >A R Perera</MenuItem>
          <MenuItem >U J Uyanhewa </MenuItem>
          <MenuItem >J H S Abeytunger</MenuItem>
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



    </div>
    
  );
}

export default AddTeam;